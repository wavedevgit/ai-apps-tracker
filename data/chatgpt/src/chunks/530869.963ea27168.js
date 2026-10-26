export const __rspack_esm_id = 530869;
export const __rspack_esm_ids = [530869];
export const __webpack_modules__ = {
    Fh9b: (function(e, a, i) {
        var t = i("ABep");
        i("zd8w"), a.a = e => (0, t.jsx)("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, t.jsx)("path", {
                d: "M16.375 2.5H3.625C3.32663 2.5 3.04048 2.61853 2.8295 2.8295C2.61853 3.04048 2.5 3.32663 2.5 3.625V16.375C2.5 16.6734 2.61853 16.9595 2.8295 17.1705C3.04048 17.3815 3.32663 17.5 3.625 17.5H16.375C16.6734 17.5 16.9595 17.3815 17.1705 17.1705C17.3815 16.9595 17.5 16.6734 17.5 16.375V3.625C17.5 3.32663 17.3815 3.04048 17.1705 2.8295C16.9595 2.61853 16.6734 2.5 16.375 2.5ZM7 15.25H4.75V8.5H7V15.25ZM5.875 7.1875C5.61714 7.18013 5.36716 7.09693 5.15631 6.94831C4.94546 6.79968 4.78309 6.59221 4.68947 6.35183C4.59586 6.11145 4.57516 5.84881 4.62995 5.59673C4.68475 5.34465 4.81262 5.1143 4.99758 4.93448C5.18255 4.75466 5.4164 4.63332 5.66992 4.58565C5.92345 4.53797 6.1854 4.56606 6.42305 4.66641C6.6607 4.76675 6.86351 4.93491 7.00614 5.14986C7.14877 5.36481 7.22489 5.61703 7.225 5.875C7.21908 6.22776 7.07375 6.56384 6.82079 6.80977C6.56782 7.05571 6.22779 7.19151 5.875 7.1875ZM15.25 15.25H13V11.695C13 10.63 12.55 10.2475 11.965 10.2475C11.7935 10.2589 11.6259 10.3041 11.4719 10.3805C11.3179 10.4569 11.1805 10.5629 11.0676 10.6925C10.9547 10.8221 10.8685 10.9728 10.814 11.1358C10.7595 11.2988 10.7378 11.471 10.75 11.6425C10.7463 11.6774 10.7463 11.7126 10.75 11.7475V15.25H8.5V8.5H10.675V9.475C10.8944 9.14125 11.1958 8.86943 11.5504 8.68558C11.905 8.50172 12.3008 8.412 12.7 8.425C13.8625 8.425 15.22 9.07 15.22 11.17L15.25 15.25Z",
                fill: "currentColor"
            })
        })
    }),
    vlt6: (function(e, a, i) {
        i.d(a, {
            a: () => eh,
            ChatGptConversationShareRecoveryDialog: () => ec
        });
        var t = i("ABep"),
            n = i("QosV"),
            s = i("FS1B"),
            r = i("T0Rc"),
            o = i("iTtm"),
            l = i("zd8w"),
            c = i("Wf1j"),
            h = i("oyxz"),
            d = i("Qgfj"),
            g = i("O0M0"),
            u = i("Cslg"),
            p = i("zKCW"),
            m = i("mUDD"),
            f = i("Ot7V"),
            v = i("bf6R"),
            b = i("RNul"),
            w = i("SGsN"),
            k = i("yGJW"),
            y = i("OWtl"),
            T = i("akkX"),
            C = i("FGv0"),
            _ = i("TnP0"),
            x = i("qKAH"),
            S = i("zHp1"),
            A = i("WFY2"),
            j = i("rvFo"),
            L = i("HFSu"),
            M = i("taWv"),
            I = i("r9i9"),
            P = i("Y7np"),
            E = i("oU3c"),
            D = i("SEBt"),
            G = i("OOaz"),
            N = i("fwwN"),
            F = i("cQW3"),
            R = i("Tywu"),
            H = i("rfhJ"),
            O = i("PAiv");

        function W(e) {
            let a, i = (0, n.c)(4),
                {
                    includeConversationAudience: s,
                    linkAppearance: r
                } = e,
                o = void 0 === r ? "secondary" : r;
            if (void 0 !== s && s) {
                let e;
                return i[0] !== o ? (e = (0, t.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.conversationMemoryDisclosure",
                    defaultMessage: "Anyone with this link can access messages up to this point. Memory sources won't be shared with viewers. <learnMore>Learn more</learnMore>",
                    description: "Audience and privacy explanation in the personal ChatGPT conversation sharing dialog. The link includes messages through the selected point, but does not give viewers access to the underlying Memory sources. The learnMore tag links to the shared-links help article.",
                    values: {
                        learnMore: e => (0, t.jsx)(U, {
                            appearance: o,
                            children: e
                        })
                    }
                }), i[0] = o, i[1] = e) : e = i[1], e
            }
            return i[2] !== o ? (a = (0, t.jsx)(h.a, {
                id: "chatgptConversations.shareDialog.memoryDisclosure",
                defaultMessage: "Memory sources won't be shared with viewers. <learnMore>Learn more</learnMore>",
                description: "Privacy disclosure in ChatGPT content-sharing dialogs for personal and workspace accounts. Underlying Memory sources are not included in what recipients can view. The learnMore tag links to the shared-links help article.",
                values: {
                    learnMore: e => (0, t.jsx)(U, {
                        appearance: o,
                        children: e
                    })
                }
            }), i[2] = o, i[3] = a) : a = i[3], a
        }

        function U(e) {
            let a, i = (0, n.c)(3),
                {
                    children: s,
                    appearance: r
                } = e,
                o = void 0 === r ? "secondary" : r;
            return i[0] !== o || i[1] !== s ? (a = (0, t.jsx)(t.Fragment, {
                children: (0, t.jsx)(O.a, {
                    appearance: o,
                    href: "https://help.openai.com/en/articles/7925741-chatgpt-shared-links",
                    initiator: "open_in_browser_bridge",
                    openTarget: "external-browser",
                    underline: "always",
                    children: s
                })
            }), i[0] = o, i[1] = s, i[2] = a) : a = i[2], a
        }
        var z = i("Rl9a"),
            q = i("on57"),
            B = i("ygO2"),
            V = i("HOLv"),
            Y = i("ZWS5"),
            K = i("WAV0"),
            $ = e => (0, t.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "currentColor",
                ...e,
                children: (0, t.jsx)("path", {
                    d: "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"
                })
            }),
            Q = i("Fh9b"),
            J = i("hZax"),
            X = i("O666");

        function Z(e) {
            let a, i, s, r, l, c, h = (0, n.c)(22),
                {
                    "aria-label": d,
                    "data-destination": g,
                    disabled: u,
                    icons: p,
                    isBusy: m,
                    label: f,
                    announceLabel: v,
                    type: w,
                    onClick: k
                } = e,
                y = void 0 !== m && m,
                T = void 0 === w ? "button" : w;
            h[0] === Symbol.for("react.memo_cache_sentinel") ? (a = {
                layer: "3136899520",
                parameter: "large_share_destinations"
            }, h[0] = a) : a = h[0];
            let C = (0, o.x)(X.b, a),
                _ = C ? p.large : p.compact,
                x = C ? "size-16" : "size-11";
            h[1] !== x ? (i = (0, q.b)("share-destination-icon flex items-center justify-center rounded-full", x), h[1] = x, h[2] = i) : i = h[2], h[3] !== C || h[4] !== _ || h[5] !== y ? (s = y ? (0, t.jsx)(b.a, {
                as: "span",
                className: C ? "size-8" : "icon-sm"
            }) : _, h[3] = C, h[4] = _, h[5] = y, h[6] = s) : s = h[6], h[7] !== i || h[8] !== s ? (r = (0, t.jsx)("span", {
                className: i,
                children: s
            }), h[7] = i, h[8] = s, h[9] = r) : r = h[9];
            let S = void 0 !== v && v ? "polite" : void 0;
            return h[10] !== f || h[11] !== S ? (l = (0, t.jsx)("span", {
                className: "w-full text-center text-xs whitespace-nowrap text-default select-none",
                "aria-live": S,
                children: f
            }), h[10] = f, h[11] = S, h[12] = l) : l = h[12], h[13] !== d || h[14] !== g || h[15] !== u || h[16] !== y || h[17] !== k || h[18] !== l || h[19] !== r || h[20] !== T ? (c = (0, t.jsxs)(B.a, {
                "aria-label": d,
                "aria-busy": y,
                "data-destination": g,
                color: "shareDestination",
                disabled: u,
                size: "shareDestination",
                type: T,
                onClick: k,
                children: [r, l]
            }), h[13] = d, h[14] = g, h[15] = u, h[16] = y, h[17] = k, h[18] = l, h[19] = r, h[20] = T, h[21] = c) : c = h[21], c
        }
        var ee = i("AdkB"),
            ea = i("Getd"),
            ei = i("DY5e"),
            et = i("UiY9"),
            en = i("O8GS"),
            es = i("cLLp"),
            er = i("vDQJ");
        let eo = new Set(["BR", "DE", "ES", "GB", "IE", "IT", "NL", "PT"]);

        function el(e) {
            let a, i, s, r, l, h, d, g, u, p, m, f, w, k, y, T, C, _, x, S, A, j, L, M, I, P, E = (0, n.c)(82),
                {
                    copyLabel: D,
                    copyDisabled: G,
                    isBusy: N,
                    isDownloading: F,
                    socialDestinationsDisabled: R,
                    showSocialDestinations: H,
                    onCopy: O,
                    onDownload: W,
                    additionalActions: U,
                    onSocialShare: el,
                    mobileImageActions: ec
                } = e,
                eh = void 0 !== F && F,
                ed = null != ec;
            E[0] !== ed ? (a = {
                layer: "3136899520",
                parameter: "large_share_destinations",
                disableExposureLog: ed
            }, E[0] = ed, E[1] = a) : a = E[1];
            let eg = (0, o.x)(X.b, a),
                eu = (0, c.a)(),
                {
                    client: ep
                } = (0, J.j)(),
                em = ep.getContext().user?.country?.trim().toUpperCase(),
                ef = "JP" === em && H,
                ev = !ef;
            E[2] !== ev ? (i = {
                layer: "494762337",
                parameter: "enabled",
                disableExposureLog: ev
            }, E[2] = ev, E[3] = i) : i = E[3];
            let eb = (0, o.x)(ef ? X.b : null, i),
                ew = ef && eb;
            E[4] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, t.jsx)(V.a, {
                asset: ei.a
            }), E[4] = s) : s = E[4], E[5] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, t.jsx)(V.a, {
                asset: ei.a
            }), E[5] = r) : r = E[5], E[6] !== el ? (l = e => el("messages", e), E[6] = el, E[7] = l) : l = E[7], E[8] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, t.jsx)(V.a, {
                asset: es.a
            }), E[8] = h) : h = E[8], E[9] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, t.jsx)(V.a, {
                asset: es.a
            }), E[9] = d) : d = E[9], E[10] !== el ? (g = e => el("whatsapp", e), E[10] = el, E[11] = g) : g = E[11];
            let ek = [{
                id: "messages",
                largeIcon: s,
                disabled: R,
                icon: r,
                label: eu.formatMessage({
                    id: "chatgptConversations.mobileImageShare.messages",
                    defaultMessage: "Messages",
                    description: "Destination in the mobile generated-image share sheet that opens a text message containing the image link"
                }),
                onClick: l
            }, {
                id: "whatsapp",
                largeIcon: h,
                disabled: R,
                icon: d,
                label: eu.formatMessage({
                    id: "chatgptConversations.mobileImageShare.whatsapp",
                    defaultMessage: "WhatsApp",
                    description: "Destination in the mobile generated-image share sheet that opens WhatsApp with the image link"
                }),
                onClick: g
            }];
            null != em && eo.has(em) && ek.reverse(), E[12] !== eu || E[13] !== N || E[14] !== eh || E[15] !== ec || E[16] !== W ? (u = null == W ? [] : [{
                id: "download",
                largeIcon: (0, t.jsx)(v.s, {
                    "aria-hidden": "true"
                }),
                disabled: eh || null != ec && N,
                icon: null == ec ? (0, t.jsx)(v.r, {}) : (0, t.jsx)(V.a, {
                    asset: ee.a
                }),
                label: eu.formatMessage({
                    id: "chatgptConversations.shareDialog.destination.download.label",
                    defaultMessage: "Download",
                    description: "Short label below a circular button in the generated-image Share dialog. Saves the selected image, or all images in the selected series, to the user's device without creating a shared link."
                }),
                onClick: W
            }], E[12] = eu, E[13] = N, E[14] = eh, E[15] = ec, E[16] = W, E[17] = u) : u = E[17];
            let ey = u;
            E[18] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, t.jsx)($, {
                "aria-hidden": "true"
            }), E[18] = p) : p = E[18], E[19] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, t.jsx)($, {
                "aria-hidden": "true"
            }), E[19] = m) : m = E[19], E[20] !== eu ? (f = eu.formatMessage({
                id: "postSharingModal.line",
                defaultMessage: "LINE",
                description: "Short label for the LINE destination in ChatGPT conversation, message, and image sharing dialogs and menus. Selecting it opens LINE sharing so the user can choose recipients and send the shared link. Appears alongside X and LinkedIn. LINE is a messaging app brand name; keep its Latin letters and capitalization."
            }), E[20] = eu, E[21] = f) : f = E[21], E[22] !== el ? (w = e => el("line", e), E[22] = el, E[23] = w) : w = E[23], E[24] !== R || E[25] !== f || E[26] !== w ? (k = {
                id: "line",
                largeIcon: p,
                disabled: R,
                icon: m,
                label: f,
                onClick: w
            }, E[24] = R, E[25] = f, E[26] = w, E[27] = k) : k = E[27];
            let eT = k;
            E[28] !== ey || E[29] !== ec ? (y = null == ec ? [] : ey, E[28] = ey, E[29] = ec, E[30] = y) : y = E[30], E[31] === Symbol.for("react.memo_cache_sentinel") ? (T = (0, t.jsx)(v.xe, {
                "aria-hidden": "true"
            }), E[31] = T) : T = E[31], E[32] !== ec ? (C = null == ec ? (0, t.jsx)(v.we, {}) : (0, t.jsx)(V.a, {
                asset: et.a
            }), E[32] = ec, E[33] = C) : C = E[33], E[34] !== G || E[35] !== D || E[36] !== O || E[37] !== C ? (_ = {
                id: "copy",
                largeIcon: T,
                disabled: G,
                icon: C,
                label: D,
                onClick: O
            }, E[34] = G, E[35] = D, E[36] = O, E[37] = C, E[38] = _) : _ = E[38], E[39] !== eT || E[40] !== ec || E[41] !== ew ? (x = null != ec && ew ? [eT] : [], E[39] = eT, E[40] = ec, E[41] = ew, E[42] = x) : x = E[42], E[43] !== G || E[44] !== eu || E[45] !== ec ? (S = ec?.canNativeShare ? [{
                id: "native",
                largeIcon: (0, t.jsx)(V.a, {
                    asset: ea.a
                }),
                disabled: G,
                icon: (0, t.jsx)(V.a, {
                    asset: ea.a
                }),
                label: eu.formatMessage({
                    id: "chatgptConversations.mobileImageShare.native",
                    defaultMessage: "Share to",
                    description: "Action in the mobile generated-image share sheet that opens the operating system share sheet with a link to the image"
                }),
                onClick: ec.onNativeShare
            }] : [], E[43] = G, E[44] = eu, E[45] = ec, E[46] = S) : S = E[46];
            let eC = null != ec && H ? ek : [];
            E[47] !== eu || E[48] !== eT || E[49] !== ec || E[50] !== el || E[51] !== ew || E[52] !== H || E[53] !== R ? (A = H ? [...null == ec && ew ? [eT] : [], {
                id: "x",
                largeIcon: (0, t.jsx)(v.$i, {
                    "aria-hidden": "true"
                }),
                disabled: R,
                icon: null == ec ? (0, t.jsx)(v._i, {
                    "aria-hidden": "true"
                }) : (0, t.jsx)(V.a, {
                    asset: er.a
                }),
                label: eu.formatMessage({
                    id: "chatgptConversations.shareDialog.destination.x.label",
                    defaultMessage: "X",
                    description: "Short destination label below a circular button in a ChatGPT post sharing dialog for a conversation, response, or generated image. Selecting it opens X's post composer with the public post URL."
                }),
                onClick: e => el("x", e)
            }, {
                id: "linkedin",
                largeIcon: (0, t.jsx)(v.ye, {
                    "aria-hidden": "true"
                }),
                disabled: R,
                icon: null == ec ? (0, t.jsx)(Q.a, {
                    "aria-hidden": "true"
                }) : (0, t.jsx)(V.a, {
                    asset: (0, Y.b)(z.a)
                }),
                label: eu.formatMessage({
                    id: "chatgptConversations.shareDialog.destination.linkedin.label",
                    defaultMessage: "LinkedIn",
                    description: "Short destination label below a circular button in a ChatGPT post sharing dialog for a conversation, response, or generated image. Selecting it opens LinkedIn's post composer with the public post URL."
                }),
                onClick: e => el("linkedin", e)
            }, ...ew ? [] : [{
                id: "reddit",
                largeIcon: (0, t.jsx)(v.Ng, {
                    "aria-hidden": "true"
                }),
                disabled: R,
                icon: null == ec ? (0, t.jsx)(v.Mg, {
                    "aria-hidden": "true"
                }) : (0, t.jsx)(V.a, {
                    asset: en.a
                }),
                label: eu.formatMessage({
                    id: "chatgptConversations.shareDialog.destination.reddit.label",
                    defaultMessage: "Reddit",
                    description: "Short destination label below a circular button in a ChatGPT post sharing dialog for a conversation, response, or generated image. Selecting it opens Reddit's submission form with the public post URL. Other destinations are Copy link, X, and LinkedIn."
                }),
                onClick: e => el("reddit", e)
            }]] : [], E[47] = eu, E[48] = eT, E[49] = ec, E[50] = el, E[51] = ew, E[52] = H, E[53] = R, E[54] = A) : A = E[54], E[55] !== ey || E[56] !== ec ? (j = null == ec ? ey : [], E[55] = ey, E[56] = ec, E[57] = j) : j = E[57], E[58] !== y || E[59] !== _ || E[60] !== x || E[61] !== S || E[62] !== eC || E[63] !== A || E[64] !== j ? (L = [...y, _, ...x, ...S, ...eC, ...A, ...j], E[58] = y, E[59] = _, E[60] = x, E[61] = S, E[62] = eC, E[63] = A, E[64] = j, E[65] = L) : L = E[65];
            let e_ = L,
                ex = null == ec && null == U && "flex-wrap justify-center gap-x-6 gap-y-4",
                eS = null == ec && null != U && "gap-3",
                eA = null == ec && null != U && eg && "flex-wrap justify-center",
                ej = null == ec && null != U && !eg && "justify-start overflow-x-auto sm:justify-center",
                eL = null != ec && "gap-x-6",
                eM = null != ec && "mobileRow-V0E64y";
            return E[66] !== ex || E[67] !== eS || E[68] !== eA || E[69] !== ej || E[70] !== eL || E[71] !== eM ? (M = (0, q.b)("flex w-full", ex, eS, eA, ej, eL, eM), E[66] = ex, E[67] = eS, E[68] = eA, E[69] = ej, E[70] = eL, E[71] = eM, E[72] = M) : M = E[72], E[73] !== e_ || E[74] !== N || E[75] !== eh || E[76] !== ec ? (I = e_.map(e => {
                let {
                    id: a,
                    disabled: i,
                    icon: n,
                    largeIcon: s,
                    label: r,
                    onClick: o
                } = e, l = "copy" === a && N || "download" === a && eh;
                return (0, t.jsx)(K.a, {
                    extension: "download" === a,
                    children: null == ec ? (0, t.jsx)(Z, {
                        "aria-label": r,
                        "data-destination": a,
                        disabled: i,
                        icons: {
                            compact: n,
                            large: s
                        },
                        isBusy: l,
                        label: r,
                        announceLabel: "copy" === a,
                        type: "copy" === a ? "submit" : "button",
                        onClick: o
                    }) : (0, t.jsxs)(B.a, {
                        "aria-label": r,
                        "aria-busy": l,
                        color: "shareDestination",
                        unstyled: !0,
                        className: "mobileDestination-JRc58g",
                        "data-destination": a,
                        disabled: i,
                        size: "shareDestination",
                        type: "copy" === a ? "submit" : "button",
                        onClick: o,
                        children: [(0, t.jsx)("span", {
                            className: "destinationIcon-EuU6jl",
                            children: l ? (0, t.jsx)(b.a, {
                                as: "span",
                                className: "icon-sm"
                            }) : n
                        }), (0, t.jsx)("span", {
                            className: "w-full text-center whitespace-nowrap text-default select-none",
                            "aria-live": "copy" === a ? "polite" : void 0,
                            children: r
                        })]
                    })
                }, a)
            }), E[73] = e_, E[74] = N, E[75] = eh, E[76] = ec, E[77] = I) : I = E[77], E[78] !== U || E[79] !== M || E[80] !== I ? (P = (0, t.jsxs)("div", {
                className: M,
                children: [I, U]
            }), E[78] = U, E[79] = M, E[80] = I, E[81] = P) : P = E[81], P
        }

        function ec(e) {
            let a, i, s, r, c, h, d = (0, n.c)(12);
            d[0] !== e ? ({
                accountId: a,
                onClose: i,
                ...s
            } = e, d[0] = e, d[1] = a, d[2] = i, d[3] = s) : (a = d[1], i = d[2], s = d[3]);
            let g = (0, o.z)(u.e) === a;
            return d[4] !== g || d[5] !== i ? (r = () => {
                g || i()
            }, c = [g, i], d[4] = g, d[5] = i, d[6] = r, d[7] = c) : (r = d[6], c = d[7]), (0, l.useEffect)(r, c), d[8] !== g || d[9] !== i || d[10] !== s ? (h = g ? (0, t.jsx)(eh, {
                ...s,
                onClose: i
            }) : null, d[8] = g, d[9] = i, d[10] = s, d[11] = h) : h = d[11], h
        }

        function eh(e) {
            let a, i, s = (0, n.c)(8);
            return s[0] !== e.publishedShareLink?.shareLinkId || s[1] !== e.publishedWidget || s[2] !== e.shareSessionId || s[3] !== e.widget ? (a = null == e.widget && null == e.publishedWidget ? void 0 : JSON.stringify([e.widget?.attachment, e.publishedShareLink?.shareLinkId, e.shareSessionId]), s[0] = e.publishedShareLink?.shareLinkId, s[1] = e.publishedWidget, s[2] = e.shareSessionId, s[3] = e.widget, s[4] = a) : a = s[4], s[5] !== e || s[6] !== a ? (i = (0, t.jsx)(ed, {
                ...e
            }, a), s[5] = e, s[6] = a, s[7] = i) : i = s[7], i
        }

        function ed(e) {
            let a, i, d, u, p, v, b, L, O, U, z, q, B, V, Y, K, $, Q, J, X, Z, ee, ea, ei, et, en, es, er, eo, ec, eh, ed, ew, ek, ey, eT, eC, e_, ex, eS, eA, ej, eE = (0, n.c)(312),
                {
                    currentNodeId: eD,
                    image: eG,
                    imagePromptTemplate: eN,
                    imageShareOptions: eF,
                    recoveryShareLink: eR,
                    publishedShareLink: eH,
                    publishedWidget: eO,
                    messageIds: eW,
                    mobileImageSheet: eU,
                    trackMobileImageShareLifecycle: ez,
                    onClose: eq,
                    onResult: eB,
                    previewTurns: eV,
                    privacyNotices: eY,
                    prompt: eK,
                    receiverShareLink: e$,
                    response: eQ,
                    serverConversationId: eJ,
                    shareSessionId: eX,
                    source: eZ,
                    title: e1,
                    widget: e0
                } = e,
                e2 = (0, o.y)(y.a),
                [e3, e5] = (0, l.useState)(!1),
                e6 = (0, o.z)(null)?.data,
                e4 = (0, o.z)(null),
                e7 = (0, o.x)(null, eJ),
                e8 = (0, c.a)(),
                e9 = (0, l.useRef)(!1),
                ae = (0, l.useRef)(!1);
            eE[0] !== eB ? (a = () => (e9.current = !0, () => {
                e9.current = !1, queueMicrotask(() => {
                    e9.current || ae.current || (ae.current = !0, eB?.(!1))
                })
            }), i = [eB], eE[0] = eB, eE[1] = a, eE[2] = i) : (a = eE[1], i = eE[2]), (0, l.useEffect)(a, i), eE[3] !== eB ? (d = function(e) {
                ae.current || (ae.current = !0, eB?.(e))
            }, eE[3] = eB, eE[4] = d) : d = eE[4];
            let aa = d;
            eE[5] !== aa || eE[6] !== eq ? (u = function() {
                aa(!1), eq()
            }, eE[5] = aa, eE[6] = eq, eE[7] = u) : u = eE[7];
            let ai = u,
                at = (0, l.useContext)(g.a);
            eE[8] !== eG || eE[9] !== e2 || eE[10] !== eJ ? (p = null == eG ? void 0 : (0, F.a)(e2, eJ, eG), eE[8] = eG, eE[9] = e2, eE[10] = eJ, eE[11] = p) : p = eE[11];
            let an = p;
            eE[12] !== eN || eE[13] !== an || eE[14] !== eH || eE[15] !== e$ || eE[16] !== eR || eE[17] !== e2.queryClient ? (v = () => e$ ?? eH ?? eR ?? (null == an || null != eN ? null : e2.queryClient.getQueryData(an.queryKey) ?? null), eE[12] = eN, eE[13] = an, eE[14] = eH, eE[15] = e$, eE[16] = eR, eE[17] = e2.queryClient, eE[18] = v) : v = eE[18];
            let [as, ar] = (0, l.useState)(v), [ao] = (0, l.useState)(ev), al = eX ?? ao, [ac, ah] = (0, l.useState)("idle"), [ad, ag] = (0, l.useState)(null != eR ? "copy-failed" : null), [au, ap] = (0, l.useState)(!1);
            eE[19] !== eJ ? (b = ["chatgpt-conversation-share", eJ], eE[19] = eJ, eE[20] = b) : b = eE[20];
            let am = b,
                af = null == eR && null == e$ && null == eH && null == eK && null == eG && null == eW && null == e0;
            eE[21] !== eD || eE[22] !== eJ ? (L = () => (0, I.h)({
                conversationId: eJ,
                currentNodeId: eD
            }), eE[21] = eD, eE[22] = eJ, eE[23] = L) : L = eE[23], eE[24] !== am || eE[25] !== af || eE[26] !== L ? (O = {
                enabled: af,
                queryFn: L,
                queryKey: am,
                retry: !1,
                staleTime: j.b.ONE_MINUTE
            }, eE[24] = am, eE[25] = af, eE[26] = L, eE[27] = O) : O = eE[27];
            let {
                data: av,
                error: ab,
                isLoading: aw
            } = (0, r.a)(O);
            eE[28] === Symbol.for("react.memo_cache_sentinel") ? (U = {
                enabled: !1,
                queryFn: ef,
                queryKey: ["accounts", "check"],
                staleTime: j.b.ONE_MINUTE
            }, eE[28] = U) : U = eE[28];
            let {
                data: ak
            } = (0, r.a)(U), ay = null != eG, aT = !0 === eU && ay, aC = aT || !0 === ez, a_ = null != e$, ax = (eG?.additionalImages?.length ?? 0) > 0, aS = eG?.item.isAnimated === !0 && !ax;
            eE[29] !== eG || eE[30] !== eJ || eE[31] !== al ? (z = (0, M.c)((0, G.c)(eJ), void 0, null != eG && null == eG.previewSrc ? al : void 0), eE[29] = eG, eE[30] = eJ, eE[31] = al, eE[32] = z) : z = eE[32];
            let {
                src: aA,
                isLoading: aj
            } = (0, S.j)(null != eG && (ax || null == eG.previewSrc) ? eG.item.src ?? "" : "", z), aL = null != eG && null == eG.previewSrc && null == aA, aM = ax ? "image_series" : "single_image", aI = e0 ?? eO, aP = null != eW || null != aI || e$?.contentType === "message", aE = aI?.metadata.widgetType === "visualization", aD = aI?.metadata.widgetName === "create_interactive_poll" || aI?.metadata.widgetName === "CreateInteractivePoll", aG = null != eK || null != eN, aN = ay || aP || aG, aF = aN || !0, aR = "conversation";
            aE ? aR = "widget" : null != eN ? aR = "prompt" : aS ? aR = "gif" : ay ? aR = ax ? "images" : "image" : aP ? aR = "message" : aG && (aR = "prompt"), eE[33] !== eY || eE[34] !== eQ ? (q = null == eQ ? eY : (0, I.l)(eQ), eE[33] = eY, eE[34] = eQ, eE[35] = q) : q = eE[35];
            let aH = q,
                aO = ay || (!aN || aP) && aH?.hasImageReference === !0;
            eE[36] !== eG?.item || eE[37] !== ax || eE[38] !== e1 ? (B = (ax ? void 0 : eG?.item.chatGptDisplayTitle) ?? (0, E.c)(e1), eE[36] = eG?.item, eE[37] = ax, eE[38] = e1, eE[39] = B) : B = eE[39];
            let aW = B,
                aU = !aN && av?.is_public === !0 && !0 === av.is_visible,
                az = ak?.accounts?.find(e => e.id === (at?.accountId ?? ak.account_ordering?.[0])),
                aq = az?.structure ?? at?.accountStructureAtLogin,
                aB = "unknown";
            as?.isWorkspaceOnly != null ? aB = as.isWorkspaceOnly ? "workspace" : "public" : null == av || ay ? ("personal" === aq || "workspace" === aq) && (aB = "workspace" === aq ? "workspace" : "public") : aB = av.share_url.includes("/share/e/") ? "workspace" : "public", eE[40] !== an?.queryKey ? (V = an?.queryKey ?? ["disabled-chatgpt-image-share-query"], eE[40] = an?.queryKey, eE[41] = V) : V = eE[41], eE[42] !== an?.queryFn ? (Y = an?.queryFn ?? em, eE[42] = an?.queryFn, eE[43] = Y) : Y = eE[43];
            let aV = aT && !0 === ez && (0, R.a)() && null == eN && null != an && "public" === aB && null == as;
            eE[44] !== V || eE[45] !== Y || eE[46] !== aV ? (K = {
                queryKey: V,
                queryFn: Y,
                enabled: aV,
                retry: !1,
                staleTime: 1 / 0
            }, eE[44] = V, eE[45] = Y, eE[46] = aV, eE[47] = K) : K = eE[47];
            let aY = (0, r.a)(K);
            aY.data?.isWorkspaceOnly != null && (aB = aY.data.isWorkspaceOnly ? "workspace" : "public");
            let aK = as ?? (null == eN ? aY.data ?? null : null),
                a$ = aK?.shareLinkUrl ?? (aU ? av.share_url : null),
                aQ = !aN && null == aK && aU && av.current_node_id !== eD,
                aJ = "workspace" === aB,
                aX = "creating" === ac,
                aZ = !aN && aw;
            eE[48] !== aK || eE[49] !== ad || eE[50] !== ab || eE[51] !== aY.error || eE[52] !== af ? (null == ($ = ad) && af && null == aK && null != ab && ($ = ab instanceof I.a ? "blocked" : "create-failed"), null == $ && null != aY.error && ($ = aY.error instanceof I.a ? "blocked" : "create-failed"), eE[48] = aK, eE[49] = ad, eE[50] = ab, eE[51] = aY.error, eE[52] = af, eE[53] = $) : $ = eE[53];
            let a1 = eP.description,
                a0 = eP.publicLinkAudience;
            if (aE) {
                let e;
                eE[54] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                    ...eP.widgetTitle
                }), eE[54] = e) : e = eE[54], Q = e
            } else if (aS) {
                let e;
                eE[55] !== eN ? (e = null != eN ? (0, t.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.gifWithPromptTitle",
                    defaultMessage: "Share GIF with prompt",
                    description: "Heading of the generated GIF sharing dialog when GIF with prompt is selected. Shares the animated GIF and its reusable prompt. The other option is GIF only."
                }) : (0, t.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.gifTitle",
                    defaultMessage: "Share GIF",
                    description: "Heading of the dialog for sharing one generated animated GIF. Keep GIF as the file format name."
                }), eE[55] = eN, eE[56] = e) : e = eE[56], Q = e
            } else if (null != eN) {
                let e;
                eE[57] !== eN.label ? (e = "image_with_prompt" === eN.label ? (0, t.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.imageWithPromptTitle",
                    defaultMessage: "Share image with prompt",
                    description: "Heading of the generated-image share dialog when Image with prompt is selected. Users share the generated image together with its reusable prompt so recipients can try the prompt. The other option is Image only."
                }) : (0, t.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.imagePromptTitle",
                    defaultMessage: "Share prompt with image",
                    description: "Short heading of the generated-image share dialog when Prompt with image is selected. Users share the generated image and its reusable prompt so recipients can try the prompt. The other option is Image only."
                }), eE[57] = eN.label, eE[58] = e) : e = eE[58], Q = e
            } else if (ay) {
                let e;
                eE[59] !== aW || eE[60] !== eF || eE[61] !== ax || eE[62] !== aT ? (e = aT || null == aW || null != eF ? (0, t.jsx)(h.a, {
                    ...ax ? eP.imagesTitle : eP.imageTitle
                }) : (0, t.jsx)(t.Fragment, {
                    children: aW
                }), eE[59] = aW, eE[60] = eF, eE[61] = ax, eE[62] = aT, eE[63] = e) : e = eE[63], Q = e
            } else if (aD) {
                let e;
                eE[64] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.poll.title",
                    defaultMessage: "Share poll",
                    description: "Short heading of the dialog for sharing one interactive poll. The user can create or send a link so other people can vote on the poll."
                }), eE[64] = e) : e = eE[64], Q = e
            } else if (aP) {
                let e;
                eE[65] !== aW ? (e = null == aW ? (0, t.jsx)(h.a, {
                    ...eP.messageTitle
                }) : (0, t.jsx)(t.Fragment, {
                    children: aW
                }), eE[65] = aW, eE[66] = e) : e = eE[66], Q = e
            } else if (aG) {
                let e;
                eE[67] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                    ...eP.promptTitle
                }), eE[67] = e) : e = eE[67], Q = e
            } else {
                if (aF) {
                    let e;
                    eE[68] !== aW ? (e = null == aW ? void 0 : (0, t.jsx)(t.Fragment, {
                        children: aW
                    }), eE[68] = aW, eE[69] = e) : e = eE[69], Q = e
                }
                aJ ? a1 = eY?.isProjectConversation ? eP.workspaceProjectDescription : eP.workspaceDescription : av?.is_anonymous === !1 ? a1 = eP.attributedDescription : eY?.isProjectConversation && (a1 = eP.projectDescription)
            }
            aJ && (a0 = aO ? eP.workspaceImageRightsAudience : eP.workspaceLinkAudience);
            let a2 = "copied" === ac ? eP.copied : eP.copyLink;
            aQ ? a2 = eP.updateLink : null == a$ && "copied" !== ac && (a2 = eP.createLink), eE[70] !== e8 || eE[71] !== ac ? (J = "copied" === ac ? e8.formatMessage(eP.copied) : e8.formatMessage(eP.copyLink), eE[70] = e8, eE[71] = ac, eE[72] = J) : J = eE[72];
            let a3 = J;
            eE[73] !== aa || eE[74] !== e8 || eE[75] !== e2 || eE[76] !== e0 ? (X = function(e, a) {
                let i;
                "create-failed" === a && (aa(!1), e0?.onError?.(e));
                let t = e instanceof I.a ? "blocked" : a;
                switch ("blocked" !== t && A.a.warning("chatgpt_conversation_share_failed", {
                        safe: {
                            stage: t
                        },
                        sensitive: {
                            error: e
                        }
                    }), t) {
                    case "blocked":
                        i = e8.formatMessage(eP.shareBlocked);
                        break;
                    case "copy-failed":
                        i = e8.formatMessage(eP.shareCopyFailed);
                        break;
                    case "create-failed":
                        i = e8.formatMessage(eP.shareCreateFailed)
                }
                return ag(t), ah("idle"), e2.get(w.f).danger(i, {
                    errorAnalytics: {
                        toastId: {
                            "copy-failed": "failed_to_copy_share_link",
                            "create-failed": "failed_to_generate_share_link",
                            blocked: "chatgptConversationShareDialog.shareBlocked"
                        } [t]
                    }
                }), t
            }, eE[73] = aa, eE[74] = e8, eE[75] = e2, eE[76] = e0, eE[77] = X) : X = eE[77];
            let a5 = X;
            eE[78] !== aI || eE[79] !== ay || eE[80] !== aP || eE[81] !== aG || eE[82] !== a_ || eE[83] !== e$ || eE[84] !== eZ ? (Z = a_ ? "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER" : "CHATGPT_SHARE_FLOW_ACTOR_SHARER", ea = a_ ? "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_HEADER" : eZ ?? "CHATGPT_SHARE_FLOW_SOURCE_CONVERSATION_MENU", null != e$ ? ee = e$.attachmentType : null != aI ? (ee = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_WIDGET", ea = "CHATGPT_SHARE_FLOW_SOURCE_WIDGET_INLINE_ACTION") : ay ? (ee = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_IMAGE_SHARE", ea = eZ ?? "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION") : aP ? (ee = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_MESSAGE_SLICE", ea = "CHATGPT_SHARE_FLOW_SOURCE_MESSAGE_INLINE_ACTION") : aG && (ee = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_PROMPT", ea = eZ ?? "CHATGPT_SHARE_FLOW_SOURCE_MESSAGE_INLINE_ACTION"), eE[78] = aI, eE[79] = ay, eE[80] = aP, eE[81] = aG, eE[82] = a_, eE[83] = e$, eE[84] = eZ, eE[85] = Z, eE[86] = ee, eE[87] = ea) : (Z = eE[85], ee = eE[86], ea = eE[87]);
            let a6 = e$?.contentType === "message" || aN ? "CHATGPT_SHARE_FLOW_CONTENT_TYPE_POST_SLICE" : "CHATGPT_SHARE_FLOW_CONTENT_TYPE_SHARED_CONVERSATION";
            eE[88] !== aK || eE[89] !== eD || eE[90] !== aU || eE[91] !== av || eE[92] !== aa || eE[93] !== eN || eE[94] !== an || eE[95] !== aN || eE[96] !== aQ || eE[97] !== eW || eE[98] !== eK || eE[99] !== e2.queryClient || eE[100] !== eJ || eE[101] !== am || eE[102] !== e1 || eE[103] !== e0 ? (ei = async function(e) {
                let a;
                if (null != e0 && (!e9.current || e0.isCurrent?.() === !1)) throw Error("The selected widget is no longer available");
                let i = aK ?? (aU ? {
                    currentNodeId: av.current_node_id,
                    shareLinkId: av.share_id,
                    shareLinkUrl: av.share_url
                } : null);
                if (null == eN && null != i && !aQ) return aa(!0), i;
                if (null != eN) a = await eN.createLink(e);
                else if (null != an) a = await e2.queryClient.fetchQuery(an);
                else if (null != e0) {
                    if (a = await (0, I.f)(e0.attachment, eD), !e9.current || e0.isCurrent?.() === !1) throw Error("The selected widget changed while sharing")
                } else a = null != eW ? await e2.queryClient.fetchQuery({
                    queryFn: () => (0, I.d)({
                        conversationId: eJ,
                        currentNodeId: eD,
                        messageIds: eW
                    }),
                    queryKey: ["chatgpt-message-share", eJ, eD],
                    staleTime: 1 / 0
                }) : null != eK ? await e2.queryClient.fetchQuery({
                    queryFn: () => (0, I.e)({
                        conversationId: eJ,
                        messageId: eK.messageId
                    }),
                    queryKey: ["chatgpt-prompt-share", eJ, eK.messageId],
                    staleTime: 1 / 0
                }) : await (0, I.g)({
                    conversationId: eJ,
                    currentNodeId: eD,
                    existingShareLink: av,
                    title: e1
                });
                return ar(a), aa(!0), null == av || aN || e2.queryClient.setQueryData(am, {
                    ...av,
                    current_node_id: eD,
                    is_public: !0,
                    is_visible: !0
                }), a
            }, eE[88] = aK, eE[89] = eD, eE[90] = aU, eE[91] = av, eE[92] = aa, eE[93] = eN, eE[94] = an, eE[95] = aN, eE[96] = aQ, eE[97] = eW, eE[98] = eK, eE[99] = e2.queryClient, eE[100] = eJ, eE[101] = am, eE[102] = e1, eE[103] = e0, eE[104] = ei) : ei = eE[104];
            let a4 = ei;
            eE[105] !== Z || eE[106] !== ee || eE[107] !== a6 || eE[108] !== aK || eE[109] !== aI?.metadata || eE[110] !== a4 || eE[111] !== aU || eE[112] !== av || eE[113] !== eN || eE[114] !== aL || eE[115] !== a_ || eE[116] !== aQ || eE[117] !== aX || eE[118] !== eq || eE[119] !== a5 || eE[120] !== e2 || eE[121] !== eJ || eE[122] !== a$ || eE[123] !== al || eE[124] !== ea || eE[125] !== aF ? (et = async function() {
                if (aX || aL || eN?.actionsDisabled) return;
                let e = (0, D.a)(e2, {
                    actor: Z,
                    attachmentType: ee,
                    widgetMetadata: aI?.metadata,
                    contentType: a6,
                    conversationId: a_ ? void 0 : eJ,
                    shareId: aK?.shareLinkId ?? (aU ? av.share_id : void 0),
                    shareSessionId: al,
                    source: ea,
                    usedExistingLink: null != a$ && !aQ
                });
                ag(null), ah("creating");
                let a = null != eN || null == a$ || aQ ? "create-failed" : "copy-failed",
                    i = aK;
                try {
                    let t, n = a4("copy"),
                        s = (0, C.c)(n.then(ep));
                    null != s && s.catch(eu);
                    let r = await n;
                    i = r, a = "copy-failed";
                    let o = r.shareLinkUrl;
                    if (null == s) t = await (0, C.b)(o);
                    else try {
                        await s, t = !0
                    } catch (e) {
                        A.a.warning("chatgpt_conversation_share_clipboard_write_failed", {
                            safe: {
                                method: "streaming-clipboard-item"
                            },
                            sensitive: {
                                error: e
                            }
                        }), t = await (0, C.b)(o)
                    }
                    if (!t) {
                        e({
                            result: "copy-failed",
                            shareId: r.shareLinkId
                        }), a5(Error("Failed to copy ChatGPT conversation share link"), "copy-failed");
                        return
                    }
                    e({
                        result: "link-copied",
                        shareId: r.shareLinkId
                    }), ah("copied"), aF || ((0, T.a)(e2), eq())
                } catch (n) {
                    let t = a5(n, a);
                    e("create-failed" === t ? {
                        result: t,
                        error: n
                    } : {
                        result: t,
                        shareId: i?.shareLinkId
                    })
                }
            }, eE[105] = Z, eE[106] = ee, eE[107] = a6, eE[108] = aK, eE[109] = aI?.metadata, eE[110] = a4, eE[111] = aU, eE[112] = av, eE[113] = eN, eE[114] = aL, eE[115] = a_, eE[116] = aQ, eE[117] = aX, eE[118] = eq, eE[119] = a5, eE[120] = e2, eE[121] = eJ, eE[122] = a$, eE[123] = al, eE[124] = ea, eE[125] = aF, eE[126] = et) : et = eE[126];
            let a7 = et;
            eE[127] !== ee || eE[128] !== a6 || eE[129] !== aK?.shareLinkId || eE[130] !== e2 || eE[131] !== eJ || eE[132] !== al || eE[133] !== ea ? (en = function(e) {
                (0, k.a)(e2, s.h, {
                    action: e,
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_SHARER",
                    attachmentType: ee,
                    contentType: a6,
                    conversationId: eJ,
                    shareId: aK?.shareLinkId,
                    shareSessionId: al,
                    source: ea,
                    sheetType: "CHATGPT_SHARE_FLOW_SHEET_TYPE_CUSTOM"
                })
            }, eE[127] = ee, eE[128] = a6, eE[129] = aK?.shareLinkId, eE[130] = e2, eE[131] = eJ, eE[132] = al, eE[133] = ea, eE[134] = en) : en = eE[134];
            let a8 = en;
            eE[135] !== aK || eE[136] !== $ || eE[137] !== a4 || eE[138] !== an || eE[139] !== e8 || eE[140] !== aX || eE[141] !== eq || eE[142] !== a5 || eE[143] !== e2 || eE[144] !== eJ || eE[145] !== aB || eE[146] !== al || eE[147] !== ea ? (es = async function() {
                if (!aX && null != an && "public" === aB && "blocked" !== $) {
                    ag(null), ah("creating");
                    try {
                        let e = aK ?? await a4("copy"),
                            a = await (0, R.b)(e2, e, eJ, al, ea);
                        ah("idle"), "shared" === a && eq(), "failed" === a && e2.get(w.f).danger(e8.formatMessage({
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
            }, eE[135] = aK, eE[136] = $, eE[137] = a4, eE[138] = an, eE[139] = e8, eE[140] = aX, eE[141] = eq, eE[142] = a5, eE[143] = e2, eE[144] = eJ, eE[145] = aB, eE[146] = al, eE[147] = ea, eE[148] = es) : es = eE[148];
            let a9 = es;
            eE[149] !== Z || eE[150] !== ee || eE[151] !== a6 || eE[152] !== aK || eE[153] !== aW || eE[154] !== aI?.metadata || eE[155] !== a4 || eE[156] !== aU || eE[157] !== av || eE[158] !== eN || eE[159] !== aM || eE[160] !== ay || eE[161] !== aL || eE[162] !== aG || eE[163] !== a_ || eE[164] !== aQ || eE[165] !== aX || eE[166] !== a5 || eE[167] !== e2 || eE[168] !== aB || eE[169] !== ac || eE[170] !== al || eE[171] !== ea ? (er = async function(e, a) {
                let i;
                if (aX || aL || "public" !== aB || eN?.actionsDisabled) return;
                a.preventDefault(), a_ || aG || "messages" === e || "whatsapp" === e || (0, D.f)(e2, e, ay ? aM : void 0), (0, D.e)(e2, {
                    actor: Z,
                    attachmentType: ee,
                    widgetMetadata: aI?.metadata,
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
                    shareId: aK?.shareLinkId ?? (aU && !aQ ? av.share_id : void 0),
                    shareSessionId: al,
                    source: ea
                });
                let t = (null == aK || null != eN) && "messages" !== e ? window.open("", "_blank") : null;
                null != t && (t.opener = null), ag(null), ah("creating");
                try {
                    i = await a4("social")
                } catch (e) {
                    t?.close(), e instanceof I.a || (0, D.d)(e2, {
                        actor: Z,
                        attachmentType: ee,
                        widgetMetadata: aI?.metadata,
                        contentType: a6,
                        shareSessionId: al,
                        source: ea
                    }), a5(e, "create-failed");
                    return
                }
                if (!0 === i.isWorkspaceOnly) {
                    t?.close(), ah(ac);
                    return
                }
                let n = function(e, a, i) {
                    let t = encodeURIComponent(a),
                        n = encodeURIComponent(i ?? "");
                    switch (e) {
                        case "messages":
                            return `sms:${/iPad|iPhone|iPod/.test(navigator.userAgent)?"&":"?"}body=${t}`;
                        case "whatsapp":
                            return `https://wa.me/?text=${t}`;
                        case "line":
                            return `https://social-plugins.line.me/lineit/share?url=${t}&text=${n}`;
                        case "linkedin":
                            return `https://www.linkedin.com/shareArticle?url=${t}&text=${n}`;
                        case "reddit":
                            return `https://www.reddit.com/submit?url=${t}&title=${n}`;
                        case "x":
                            return `https://twitter.com/intent/tweet?url=${t}&text=${n}`
                    }
                }(e, i.shareLinkUrl, i.title ?? aW);
                "messages" === e ? (window.location.href = n, (0, f.g)({
                    href: n,
                    modifiedClick: !1
                })) : null != t ? (t.location.href = n, (0, f.g)({
                    href: n,
                    modifiedClick: 1 === a.button || a.metaKey || a.ctrlKey,
                    openTarget: "external-browser"
                })) : (0, f.e)({
                    event: a,
                    href: n,
                    initiator: "open_in_browser_bridge",
                    openTarget: "external-browser"
                }), ah(ac)
            }, eE[149] = Z, eE[150] = ee, eE[151] = a6, eE[152] = aK, eE[153] = aW, eE[154] = aI?.metadata, eE[155] = a4, eE[156] = aU, eE[157] = av, eE[158] = eN, eE[159] = aM, eE[160] = ay, eE[161] = aL, eE[162] = aG, eE[163] = a_, eE[164] = aQ, eE[165] = aX, eE[166] = a5, eE[167] = e2, eE[168] = aB, eE[169] = ac, eE[170] = al, eE[171] = ea, eE[172] = er) : er = eE[172];
            let ie = er;
            eE[173] !== ee || eE[174] !== a6 || eE[175] !== eG || eE[176] !== aM || eE[177] !== e8 || eE[178] !== au || eE[179] !== aL || eE[180] !== e2 || eE[181] !== eJ || eE[182] !== al || eE[183] !== ea ? (eo = async function() {
                if (null == eG || au || aL) return;
                (0, D.f)(e2, "download", aM);
                let e = [eG.item, ...eG.additionalImages ?? []].filter(eg);
                0 !== e.length && (ap(!0), (0, k.a)(e2, s.h, {
                    action: "CHATGPT_SHARE_FLOW_ACTION_DOWNLOAD_SELECTED",
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_SHARER",
                    attachmentType: ee,
                    contentType: a6,
                    conversationId: eJ,
                    shareSessionId: al,
                    sheetType: "CHATGPT_SHARE_FLOW_SHEET_TYPE_CUSTOM",
                    source: ea
                }), await (0, N.a)(e2, {
                    images: e,
                    intl: e8,
                    serverConversationId: (0, G.c)(eJ),
                    logIndividualDownloads: !1
                }).then(e => {
                    "downloaded" === e && (0, H.d)(e2, eJ, eG.item)
                }).finally(() => {
                    ap(!1)
                }))
            }, eE[173] = ee, eE[174] = a6, eE[175] = eG, eE[176] = aM, eE[177] = e8, eE[178] = au, eE[179] = aL, eE[180] = e2, eE[181] = eJ, eE[182] = al, eE[183] = ea, eE[184] = eo) : eo = eE[184];
            let ia = eo;
            eE[185] !== eG?.additionalImages?.length || eE[186] !== ax ? (ec = ax ? (0, t.jsx)(h.a, {
                id: "chatgptConversations.shareDialog.imageSeriesCount",
                defaultMessage: "Sharing {imageCount} images together",
                description: "Subtitle beneath the generated-image share modal title after choosing to share a series. imageCount is the number of images included in the link, always greater than one. This informs the user that all listed images are shared together.",
                values: {
                    imageCount: 1 + (eG?.additionalImages?.length ?? 0)
                }
            }) : void 0, eE[185] = eG?.additionalImages?.length, eE[186] = ax, eE[187] = ec) : ec = eE[187];
            let ii = ec,
                it = ii;
            if (!ax && !aF) {
                let e;
                eE[188] !== a1 ? (e = (0, t.jsx)(h.a, {
                    ...a1
                }), eE[188] = a1, eE[189] = e) : e = eE[189], it = e
            }
            if (null != eN) {
                let e;
                eE[190] !== aT ? (e = aT ? (0, t.jsx)(h.a, {
                    id: "imagePromptShare.audience",
                    defaultMessage: "Anyone with the link can try this prompt",
                    description: "Audience description when sharing a generated image as a reusable prompt template"
                }) : void 0, eE[190] = aT, eE[191] = e) : e = eE[191], it = e
            } else if (aT) {
                let e, a, i;
                eE[192] !== aB ? (e = "public" === aB ? (0, t.jsx)(h.a, {
                    id: "chatgptConversations.mobileImageShare.publicAudience",
                    defaultMessage: "Anyone with the link can view",
                    description: "Audience disclosure in the mobile generated-image share sheet for a public link"
                }) : null, eE[192] = aB, eE[193] = e) : e = eE[193], eE[194] !== aB ? (a = "public" !== aB && (0, t.jsx)(h.a, {
                    id: "chatgptConversations.mobileImageShare.workspaceAudience",
                    defaultMessage: "Only workspace members with the link can view",
                    description: "Audience disclosure below Share image in the mobile image share sheet for a workspace account"
                }), eE[194] = aB, eE[195] = a) : a = eE[195], eE[196] !== e || eE[197] !== a ? (i = (0, t.jsxs)(t.Fragment, {
                    children: [e, a]
                }), eE[196] = e, eE[197] = a, eE[198] = i) : i = eE[198], it = i
            }
            if (aT ? eh = "responsiveSheet" : aF && (eh = "share"), null != eN) {
                let e;
                if (eE[199] !== eG?.previewSrc || eE[200] !== eN || eE[201] !== aX || eE[202] !== aA) {
                    let a;
                    eE[204] === Symbol.for("react.memo_cache_sentinel") ? (a = () => {
                        ag(null), ah("idle")
                    }, eE[204] = a) : a = eE[204], e = eN.preview(aX, eG?.previewSrc ?? aA ?? null, a), eE[199] = eG?.previewSrc, eE[200] = eN, eE[201] = aX, eE[202] = aA, eE[203] = e
                } else e = eE[203];
                ed = e
            } else {
                let e;
                eE[205] !== aI || eE[206] !== eG || eE[207] !== e8 || eE[208] !== aj || eE[209] !== ax || eE[210] !== aE || eE[211] !== eV || eE[212] !== eK || eE[213] !== aA || eE[214] !== eQ || eE[215] !== eJ || eE[216] !== aT ? (e = null != eG ? (0, t.jsx)(x.a, {
                    ariaLabel: ax ? e8.formatMessage(eP.imagesPreview) : eG.alt,
                    variant: "image",
                    classicImagePreviewEligible: !ax && !aT,
                    presentation: aT ? "imageSheet" : void 0,
                    children: ax || null == eG.previewSrc ? (0, t.jsx)(eL, {
                        src: aA,
                        isLoading: aj
                    }) : (0, t.jsx)("img", {
                        alt: eG.alt,
                        className: aT ? void 0 : "block size-full object-contain",
                        referrerPolicy: "no-referrer",
                        src: eG.previewSrc
                    })
                }) : (0, t.jsxs)(t.Fragment, {
                    children: [aI?.preview != null && aE && (0, t.jsx)(x.a, {
                        ariaLabel: e8.formatMessage({
                            id: "shareDialog.widget.previewLabel",
                            defaultMessage: "Preview of the shared widget",
                            description: "Accessible description of the non-interactive selected-widget preview in a ChatGPT widget sharing dialog."
                        }),
                        variant: "response",
                        children: aI.preview
                    }), aI?.preview != null && !aE && (0, t.jsx)(x.a, {
                        variant: "response",
                        children: aI.preview
                    }), null == aI && (0, t.jsx)(P.b, {
                        prompt: eK,
                        response: eQ,
                        serverConversationId: eJ,
                        turns: eV
                    })]
                }), eE[205] = aI, eE[206] = eG, eE[207] = e8, eE[208] = aj, eE[209] = ax, eE[210] = aE, eE[211] = eV, eE[212] = eK, eE[213] = aA, eE[214] = eQ, eE[215] = eJ, eE[216] = aT, eE[217] = e) : e = eE[217], ed = e
            }
            if (aT) {
                let e, a, i;
                eE[218] !== eN || eE[219] !== ed ? (e = null == eN ? ed : (0, t.jsx)("div", {
                    className: "px-6",
                    children: ed
                }), eE[218] = eN, eE[219] = ed, eE[220] = e) : e = eE[220], eE[221] !== ii ? (a = null != ii && (0, t.jsx)("p", {
                    className: "mt-3 text-center text-sm text-secondary",
                    children: ii
                }), eE[221] = ii, eE[222] = a) : a = eE[222], eE[223] !== e || eE[224] !== a ? (i = (0, t.jsxs)(t.Fragment, {
                    children: [e, a]
                }), eE[223] = e, eE[224] = a, eE[225] = i) : i = eE[225], ed = i
            }
            eE[226] !== a0 || eE[227] !== aF ? (ew = aF ? void 0 : (0, t.jsx)(h.a, {
                ...a0
            }), eE[226] = a0, eE[227] = aF, eE[228] = ew) : ew = eE[228], eE[229] !== a2 ? (ek = (0, t.jsx)(h.a, {
                ...a2
            }), eE[229] = a2, eE[230] = ek) : ek = eE[230];
            let is = eN?.actionsDisabled || aZ || aL || "blocked" === $,
                ir = aX || aZ || e3,
                io = !aF && aX;
            eE[231] !== a8 || eE[232] !== aC || eE[233] !== aF ? (ey = aF ? e => {
                aC && a8("CHATGPT_SHARE_FLOW_ACTION_SHEET_PRESENTED"), e.preventDefault(), e.currentTarget instanceof HTMLElement && e.currentTarget.focus()
            } : void 0, eE[231] = a8, eE[232] = aC, eE[233] = aF, eE[234] = ey) : ey = eE[234];
            let il = aT ? "imageSheet" : void 0;
            eE[235] !== e7 || eE[236] !== e6 || eE[237] !== e4 || eE[238] !== aK || eE[239] !== eD || eE[240] !== $ || eE[241] !== ia || eE[242] !== a9 || eE[243] !== ie || eE[244] !== eG || eE[245] !== eN || eE[246] !== aM || eE[247] !== au || eE[248] !== aZ || eE[249] !== ay || eE[250] !== aL || eE[251] !== e3 || eE[252] !== aN || eE[253] !== aG || eE[254] !== a_ || eE[255] !== aX || eE[256] !== eW || eE[257] !== eq || eE[258] !== eK || eE[259] !== e$ || eE[260] !== a3 || eE[261] !== aA || eE[262] !== e2 || eE[263] !== eJ || eE[264] !== aB || eE[265] !== ez || eE[266] !== aT || eE[267] !== aF || eE[268] !== e0 ? (eT = aF ? (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)(el, {
                    mobileImageActions: aT ? {
                        canNativeShare: "public" === aB && (!0 !== ez || null != aK) && (0, R.a)(aK?.shareLinkUrl),
                        onNativeShare: () => {
                            a9()
                        }
                    } : void 0,
                    copyLabel: a3,
                    copyDisabled: eN?.actionsDisabled || aZ || aX || aL || "blocked" === $,
                    isBusy: aX || aZ || e3,
                    isDownloading: au,
                    socialDestinationsDisabled: eN?.actionsDisabled || aZ || aX || aL || "public" !== aB || "blocked" === $,
                    showSocialDestinations: "public" === aB,
                    additionalActions: void 0,
                    onDownload: null != eN || null == eG || aL ? void 0 : () => {
                        ia()
                    },
                    onCopy: () => {
                        a_ || aG || (0, D.f)(e2, "copy", ay ? aM : void 0)
                    },
                    onSocialShare: (e, a) => {
                        ie(e, a)
                    }
                }), aT && (0, t.jsx)("p", {
                    className: "mt-7 px-6 text-center text-xs leading-4.5 text-tertiary select-none",
                    children: (0, t.jsx)(W, {
                        linkAppearance: "inherit"
                    })
                })]
            }) : void 0, eE[235] = e7, eE[236] = e6, eE[237] = e4, eE[238] = aK, eE[239] = eD, eE[240] = $, eE[241] = ia, eE[242] = a9, eE[243] = ie, eE[244] = eG, eE[245] = eN, eE[246] = aM, eE[247] = au, eE[248] = aZ, eE[249] = ay, eE[250] = aL, eE[251] = e3, eE[252] = aN, eE[253] = aG, eE[254] = a_, eE[255] = aX, eE[256] = eW, eE[257] = eq, eE[258] = eK, eE[259] = e$, eE[260] = a3, eE[261] = aA, eE[262] = e2, eE[263] = eJ, eE[264] = aB, eE[265] = ez, eE[266] = aT, eE[267] = aF, eE[268] = e0, eE[269] = eT) : eT = eE[269], eE[270] !== eF || eE[271] !== aD || eE[272] !== aX || eE[273] !== aR || eE[274] !== aB || eE[275] !== aO || eE[276] !== aT || eE[277] !== aF ? (eC = aF ? (0, t.jsxs)(t.Fragment, {
                children: [null != eF && (aT ? (0, t.jsx)("div", {
                    className: "px-6",
                    children: eF(aX)
                }) : (0, t.jsx)(m.e, {
                    className: "pt-5",
                    children: eF(aX)
                })), !aT && (0, t.jsx)(eb, {
                    audience: aB,
                    contentType: aR,
                    isPoll: aD,
                    showImageRightsNotice: aO
                })]
            }) : void 0, eE[270] = eF, eE[271] = aD, eE[272] = aX, eE[273] = aR, eE[274] = aB, eE[275] = aO, eE[276] = aT, eE[277] = aF, eE[278] = eC) : eC = eE[278], eE[279] !== $ || eE[280] !== eN || eE[281] !== a$ ? (e_ = null == $ ? void 0 : {
                content: (0, t.jsx)(eI, {
                    error: $
                }),
                copyUrl: "copy-failed" === $ ? a$ : void 0,
                preventsSharing: "blocked" === $ && null == eN
            }, eE[279] = $, eE[280] = eN, eE[281] = a$, eE[282] = e_) : e_ = eE[282];
            let ic = aO && !aJ && !ay,
                ih = !aN || aP;
            return eE[283] !== aH || eE[284] !== ic || eE[285] !== ih ? (ex = (0, t.jsx)(eM, {
                showImageRightsNotice: ic,
                showContentNotices: ih,
                privacyNotices: aH
            }), eE[283] = aH, eE[284] = ic, eE[285] = ih, eE[286] = ex) : ex = eE[286], eE[287] !== ai || eE[288] !== a8 || eE[289] !== aC ? (eS = () => {
                aC && a8("CHATGPT_SHARE_FLOW_ACTION_DISMISSED"), ai()
            }, eE[287] = ai, eE[288] = a8, eE[289] = aC, eE[290] = eS) : eS = eE[290], eE[291] !== a7 ? (eA = () => {
                a7()
            }, eE[291] = a7, eE[292] = eA) : eA = eE[292], eE[293] !== eh || eE[294] !== Q || eE[295] !== aW || eE[296] !== ed || eE[297] !== it || eE[298] !== ew || eE[299] !== ek || eE[300] !== is || eE[301] !== ir || eE[302] !== io || eE[303] !== ey || eE[304] !== il || eE[305] !== eT || eE[306] !== eC || eE[307] !== e_ || eE[308] !== ex || eE[309] !== eS || eE[310] !== eA ? (ej = (0, t.jsx)(_.a, {
                threadTitle: aW,
                title: Q,
                subtitle: it,
                audience: ew,
                actionLabel: ek,
                actionDisabled: is,
                isBusy: ir,
                isDismissalDisabled: io,
                onOpenAutoFocus: ey,
                size: eh,
                presentation: il,
                footer: eT,
                preview: ed,
                info: eC,
                error: e_,
                notices: ex,
                onClose: eS,
                onSubmit: eA
            }), eE[293] = eh, eE[294] = Q, eE[295] = aW, eE[296] = ed, eE[297] = it, eE[298] = ew, eE[299] = ek, eE[300] = is, eE[301] = ir, eE[302] = io, eE[303] = ey, eE[304] = il, eE[305] = eT, eE[306] = eC, eE[307] = e_, eE[308] = ex, eE[309] = eS, eE[310] = eA, eE[311] = ej) : ej = eE[311], ej
        }

        function eg(e) {
            return null != e.src && "completed" === e.status && !e.isPreview
        }

        function eu() {}

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
            return L.a.safeGet("/wham/accounts/check")
        }

        function ev() {
            return crypto.randomUUID()
        }

        function eb(e) {
            let a, i, s, r, o, l, c, d = (0, n.c)(54),
                {
                    audience: g,
                    contentType: u,
                    isPoll: p,
                    showImageRightsNotice: f
                } = e,
                b = "workspace" === g ? v.He : v.Od;
            if ("workspace" === g) {
                let e, n;
                if (f) {
                    let a;
                    d[0] !== u ? (a = (0, t.jsx)(h.a, {
                        id: "chatgptConversations.shareDialog.workspaceMediaRightsAudienceWithLearnMore",
                        defaultMessage: "Links are visible to workspace members only. {contentType, select, gif {Confirm you have the rights to share this GIF.} images {Confirm you have the rights to share these images.} other {Confirm you have the rights to share this image.}} {contentType, select, conversation {Memory sources won't be shared with viewers. } other {}}<learnMore>Learn more</learnMore>",
                        description: "Audience and image-rights reminder for workspace sharing in merged web. Only workspace members can view the link. contentType is gif for one animated GIF, images for a generated-image series, image for one still image, message, or conversation. For a conversation, underlying Memory sources stay private. The learnMore tag links to shared-links help. All sentences appear in one paragraph.",
                        values: {
                            contentType: u,
                            learnMore: ej
                        }
                    }), d[0] = u, d[1] = a) : a = d[1], e = a
                } else if ("conversation" === u) {
                    let a;
                    d[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, t.jsx)(h.a, {
                        id: "chatgptConversations.shareDialog.workspaceConversationMemoryDisclosure",
                        defaultMessage: "Links are visible to workspace members only. Memory sources won't be shared with viewers. <learnMore>Learn more</learnMore>",
                        description: "Audience and privacy explanation in the merged-web workspace conversation sharing dialog. Shared links are restricted to workspace members and do not give viewers access to underlying Memory sources. The learnMore tag links to shared-links help.",
                        values: {
                            learnMore: eA
                        }
                    }), d[2] = a) : a = d[2], e = a
                } else {
                    let a;
                    d[3] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, t.jsx)(h.a, {
                        ...eP.workspaceLinksVisibleWithLearnMore,
                        values: {
                            learnMore: eS
                        }
                    }), d[3] = a) : a = d[3], e = a
                }
                if (d[4] !== e ? (n = (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)(t.Fragment, {
                            children: e
                        }), null]
                    }), d[4] = e, d[5] = n) : n = d[5], i = n, "widget" === u) {
                    let e;
                    d[6] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...eP.shareLinkToWidget
                    }), d[6] = e) : e = d[6], a = e
                } else if ("images" === u) {
                    let e;
                    d[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...eP.shareLinkToImages
                    }), d[7] = e) : e = d[7], a = e
                } else if ("gif" === u) {
                    let e;
                    d[8] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...eP.shareLinkToGif
                    }), d[8] = e) : e = d[8], a = e
                } else if ("image" === u) {
                    let e;
                    d[9] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...eP.shareLinkToImage
                    }), d[9] = e) : e = d[9], a = e
                } else if ("message" === u) {
                    let e;
                    d[10] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...eP.shareLinkToMessage
                    }), d[10] = e) : e = d[10], a = e
                } else if ("prompt" === u) {
                    let e;
                    d[11] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...eP.shareLinkToPrompt
                    }), d[11] = e) : e = d[11], a = e
                } else {
                    let e;
                    d[12] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...eP.shareLinkToConversation
                    }), d[12] = e) : e = d[12], a = e
                }
            } else if ("unknown" === g) {
                if ("images" === u) {
                    let e;
                    d[13] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        id: "chatgptConversations.shareDialog.imagesRightsDisclaimer",
                        defaultMessage: "Confirm you have the rights to share these images.",
                        description: "Legal-permission reminder below the heading when sharing a generated-image series before the link audience is known. Asks the user to confirm permission to share every selected image. Shown as a standalone notice."
                    }), d[13] = e) : e = d[13], i = e
                } else if ("gif" === u) {
                    let e;
                    d[14] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        id: "chatgptConversations.shareDialog.gifLicenseDisclaimer",
                        defaultMessage: "Confirm you have the rights to share this GIF",
                        description: "Legal-permission reminder in the generated GIF sharing dialog before the link audience is known. Asks the user to confirm permission to share the animated GIF."
                    }), d[14] = e) : e = d[14], i = e
                } else if ("image" === u) {
                    let e;
                    d[15] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...eP.imageLicenseDisclaimer
                    }), d[15] = e) : e = d[15], i = e
                }
                if ("widget" === u) {
                    let e;
                    d[16] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...eP.shareLinkToWidget
                    }), d[16] = e) : e = d[16], a = e
                } else if ("images" === u) {
                    let e;
                    d[17] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...eP.shareLinkToImages
                    }), d[17] = e) : e = d[17], a = e
                } else if ("gif" === u) {
                    let e;
                    d[18] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...eP.shareLinkToGif
                    }), d[18] = e) : e = d[18], a = e
                } else if ("image" === u) {
                    let e;
                    d[19] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...eP.shareLinkToImage
                    }), d[19] = e) : e = d[19], a = e
                } else if ("message" === u) {
                    let e;
                    d[20] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...eP.shareLinkToMessage
                    }), d[20] = e) : e = d[20], a = e
                } else if ("prompt" === u) {
                    let e;
                    d[21] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...eP.shareLinkToPrompt
                    }), d[21] = e) : e = d[21], a = e
                } else {
                    let e;
                    d[22] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...eP.shareLinkToConversation
                    }), d[22] = e) : e = d[22], a = e
                }
            } else if ("widget" === u) {
                let e, n;
                d[23] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                    ...eP.sharePublicLinkToWidget
                }), d[23] = e) : e = d[23], a = e, d[24] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(t.Fragment, {
                        children: (0, t.jsx)(h.a, {
                            id: "chatgptConversations.widgetShare.publicAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access this widget. <learnMore>Learn more</learnMore>",
                            description: "Audience explanation when sharing a generated Recharts widget. The learnMore tag links to shared-links help in merged web.",
                            values: {
                                learnMore: ex
                            }
                        })
                    }), null]
                }), d[24] = n) : n = d[24], i = n
            } else if ("images" === u) {
                let e, n;
                d[25] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                    ...eP.sharePublicLinkToImages
                }), d[25] = e) : e = d[25], a = e, d[26] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(t.Fragment, {
                        children: (0, t.jsx)(h.a, {
                            id: "chatgptConversations.shareDialog.imagesPublicLinkAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access these images. Confirm you have the rights to share these images. <learnMore>Learn more</learnMore>",
                            description: "Audience and legal-permission reminder when sharing all images from one generation. Anyone with the link can view the images; the user must have permission to share them. The learnMore tag links to shared-links help in merged web. All sentences appear in one paragraph.",
                            values: {
                                learnMore: e_
                            }
                        })
                    }), null]
                }), d[26] = n) : n = d[26], i = n
            } else if ("gif" === u) {
                let e, n;
                d[27] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.sharePublicLinkToGif",
                    defaultMessage: "Share a public link to this GIF",
                    description: "Info heading in the generated GIF sharing dialog for a personal account. Anyone with the link can view the animated GIF."
                }), d[27] = e) : e = d[27], a = e, d[28] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, t.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.gifPublicLinkAudienceWithLearnMore",
                    defaultMessage: "Anyone with this link can access this GIF. Confirm you have the rights to share this GIF. <learnMore>Learn more</learnMore>",
                    description: "Audience and legal-permission reminder in the generated GIF sharing dialog. Anyone with the link can view the animation, and the user must have permission to share it. The learnMore tag links to shared-links help.",
                    values: {
                        learnMore: eC
                    }
                }), d[28] = n) : n = d[28], i = n
            } else if ("image" === u) {
                let e, n;
                d[29] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                    ...eP.sharePublicLinkToImage
                }), d[29] = e) : e = d[29], a = e, d[30] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(t.Fragment, {
                        children: (0, t.jsx)(h.a, {
                            id: "chatgptConversations.shareDialog.imagePublicLinkAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access this image. Confirm you have the rights to share this image. <learnMore>Learn more</learnMore>",
                            description: "Audience and legal-permission reminder when sharing an image. Anyone with the link can view the image; the user must have permission to share it. The learnMore tag links to shared-links help in merged web. All sentences appear in one paragraph.",
                            values: {
                                learnMore: eT
                            }
                        })
                    }), null]
                }), d[30] = n) : n = d[30], i = n
            } else if ("message" === u) {
                let e, n;
                d[31] !== p ? (e = p ? (0, t.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.poll.publicLinkTitle",
                    defaultMessage: "Share a public link to this poll",
                    description: "Heading below the poll preview in the public sharing dialog. Tells the person sharing that the link opens this interactive voting poll. Workspace-restricted links use a separate disclosure."
                }) : (0, t.jsx)(h.a, {
                    ...eP.sharePublicLinkToMessage
                }), d[31] = p, d[32] = e) : e = d[32], a = e, d[33] !== p ? (n = (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(t.Fragment, {
                        children: p ? (0, t.jsx)(h.a, {
                            id: "chatgptConversations.shareDialog.poll.publicAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access and vote on this poll. <learnMore>Learn more</learnMore>",
                            description: "Explanation below a public poll link preview in the web sharing dialog. Tells the person sharing that link recipients can open the poll and vote. The learnMore tag links to shared-links help.",
                            values: {
                                learnMore: ey
                            }
                        }) : (0, t.jsx)(h.a, {
                            id: "chatgptConversations.shareDialog.messagePublicLinkAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access this message. <learnMore>Learn more</learnMore>",
                            description: "Audience explanation when sharing a response. The learnMore tag links to shared-links help in merged web.",
                            values: {
                                learnMore: ek
                            }
                        })
                    }), null]
                }), d[33] = p, d[34] = n) : n = d[34], i = n
            } else if ("prompt" === u) {
                let e, n;
                d[35] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.prompt.info.title.public",
                    defaultMessage: "Share a public link to this prompt",
                    description: "Heading below the prompt preview in the ChatGPT sharing dialog for a personal account. It introduces the public link and social sharing actions for the selected user prompt."
                }), d[35] = e) : e = d[35], a = e, d[36] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(t.Fragment, {
                        children: (0, t.jsx)(h.a, {
                            id: "chatgptConversations.shareDialog.prompt.info.description.publicWithLearnMore",
                            defaultMessage: "Anyone with this link can access this prompt. <learnMore>Learn more</learnMore>",
                            description: "Audience explanation below the public-link heading in the ChatGPT prompt sharing dialog on web. Only the selected prompt is shared. The learnMore tag links to shared-links help.",
                            values: {
                                learnMore: ew
                            }
                        })
                    }), null]
                }), d[36] = n) : n = d[36], i = n
            } else {
                let e, n;
                d[37] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                    ...eP.sharePublicLinkToConversation
                }), d[37] = e) : e = d[37], a = e, d[38] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, t.jsx)(W, {
                    includeConversationAudience: !0
                }), d[38] = n) : n = d[38], i = n
            }
            return d[39] !== b || d[40] !== g ? (s = "unknown" === g ? null : (0, t.jsx)(b, {
                className: "public" === g ? "relative -start-px" : void 0,
                "aria-hidden": "true"
            }), d[39] = b, d[40] = g, d[41] = s) : s = d[41], d[42] !== s || d[43] !== a ? (r = (0, t.jsxs)("div", {
                className: "flex items-center gap-1 text-xs leading-4 font-bold text-default",
                children: [s, a]
            }), d[42] = s, d[43] = a, d[44] = r) : r = d[44], d[45] !== i ? (o = null == i ? null : (0, t.jsx)("div", {
                className: "mt-1.5 text-xs leading-4 text-codex-description browser:text-secondary",
                children: i
            }), d[45] = i, d[46] = o) : o = d[46], d[47] !== g || d[48] !== u ? (l = "unknown" === g && "conversation" === u ? (0, t.jsx)(t.Fragment, {
                children: (0, t.jsx)("div", {
                    className: "mt-1.5 text-xs leading-4 text-secondary",
                    children: (0, t.jsx)(W, {})
                })
            }) : null, d[47] = g, d[48] = u, d[49] = l) : l = d[49], d[50] !== r || d[51] !== o || d[52] !== l ? (c = (0, t.jsx)(m.e, {
                spacing: "large",
                children: (0, t.jsxs)("div", {
                    className: "w-full text-start select-none",
                    children: [r, o, l]
                })
            }), d[50] = r, d[51] = o, d[52] = l, d[53] = c) : c = d[53], c
        }

        function ew(e) {
            return (0, t.jsx)(U, {
                children: e
            })
        }

        function ek(e) {
            return (0, t.jsx)(U, {
                children: e
            })
        }

        function ey(e) {
            return (0, t.jsx)(U, {
                children: e
            })
        }

        function eT(e) {
            return (0, t.jsx)(U, {
                children: e
            })
        }

        function eC(e) {
            return (0, t.jsx)(U, {
                children: e
            })
        }

        function e_(e) {
            return (0, t.jsx)(U, {
                children: e
            })
        }

        function ex(e) {
            return (0, t.jsx)(U, {
                children: e
            }, "learn-more")
        }

        function eS(e) {
            return (0, t.jsx)(U, {
                children: e
            })
        }

        function eA(e) {
            return (0, t.jsx)(U, {
                children: e
            })
        }

        function ej(e) {
            return (0, t.jsx)(U, {
                children: e
            })
        }

        function eL(e) {
            let a, i = (0, n.c)(4),
                {
                    src: s,
                    isLoading: r
                } = e;
            if (null != s) {
                let e;
                return i[0] !== s ? (e = (0, t.jsx)("img", {
                    alt: "",
                    className: "block size-full object-contain",
                    referrerPolicy: "no-referrer",
                    src: s
                }), i[0] = s, i[1] = e) : e = i[1], e
            }
            return i[2] !== r ? (a = (0, t.jsx)("div", {
                className: "flex h-full items-center justify-center gap-2 text-sm text-secondary",
                children: r ? (0, t.jsx)(b.a, {
                    className: "icon-sm"
                }) : (0, t.jsx)(h.a, {
                    ...eP.imageUnavailable
                })
            }), i[2] = r, i[3] = a) : a = i[3], a
        }

        function eM(e) {
            let a, i, s, r, o, l = (0, n.c)(16),
                {
                    showImageRightsNotice: c,
                    showContentNotices: d,
                    privacyNotices: g
                } = e;
            return l[0] !== g?.hasUnsupportedCodeInterpreterContent || l[1] !== d ? (a = d && g?.hasUnsupportedCodeInterpreterContent ? (0, t.jsx)(m.e, {
                children: (0, t.jsx)(p.a, {
                    content: (0, t.jsx)(h.a, {
                        ...eP.filesNotShared
                    }),
                    variant: "privacyNotice"
                })
            }) : null, l[0] = g?.hasUnsupportedCodeInterpreterContent, l[1] = d, l[2] = a) : a = l[2], l[3] !== g?.hasPersonalizedSources || l[4] !== d ? (i = d && g?.hasPersonalizedSources ? (0, t.jsx)(m.e, {
                children: (0, t.jsx)(p.a, {
                    content: (0, t.jsx)(h.a, {
                        ...eP.personalizedSourcesPrivate
                    }),
                    variant: "privacyNotice"
                })
            }) : null, l[3] = g?.hasPersonalizedSources, l[4] = d, l[5] = i) : i = l[5], l[6] !== g?.hasScreenshotReference || l[7] !== d ? (s = d && g?.hasScreenshotReference ? (0, t.jsx)(m.e, {
                children: (0, t.jsx)(p.a, {
                    content: (0, t.jsx)(h.a, {
                        ...eP.screenshotDisclaimer
                    }),
                    variant: "privacyNotice"
                })
            }) : null, l[6] = g?.hasScreenshotReference, l[7] = d, l[8] = s) : s = l[8], l[9] !== c ? (r = c ? (0, t.jsx)(m.e, {
                children: (0, t.jsx)("p", {
                    className: "text-sm text-secondary select-none",
                    children: (0, t.jsx)(h.a, {
                        ...eP.imageLicenseDisclaimer
                    })
                })
            }) : null, l[9] = c, l[10] = r) : r = l[10], l[11] !== a || l[12] !== i || l[13] !== s || l[14] !== r ? (o = (0, t.jsxs)(t.Fragment, {
                children: [a, i, s, r]
            }), l[11] = a, l[12] = i, l[13] = s, l[14] = r, l[15] = o) : o = l[15], o
        }

        function eI(e) {
            let a = (0, n.c)(3),
                {
                    error: i
                } = e;
            switch (i) {
                case "blocked": {
                    let e;
                    return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...eP.shareBlocked
                    }), a[0] = e) : e = a[0], e
                }
                case "copy-failed": {
                    let e;
                    return a[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...eP.shareCopyFailed
                    }), a[1] = e) : e = a[1], e
                }
                case "create-failed": {
                    let e;
                    return a[2] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...eP.shareCreateFailed
                    }), a[2] = e) : e = a[2], e
                }
            }
        }
        let eP = (0, d.f)({
            shareLinkToGif: {
                id: "chatgptConversations.shareDialog.shareLinkToGif",
                defaultMessage: "Share a link to this GIF",
                description: "Info heading in the generated GIF sharing dialog when the link is restricted to workspace members or its audience is not yet known. The link shares one animated GIF."
            },
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
                id: "chatgptConversations.shareDialog.workspaceMediaRightsAudience",
                defaultMessage: "Links are visible to workspace members only. {contentType, select, gif {Confirm you have the rights to share this GIF.} images {Confirm you have the rights to share these images.} other {Confirm you have the rights to share this image.}}",
                description: "Audience and legal-permission reminder in the ChatGPT workspace sharing dialog. Only workspace members can view the link. contentType is gif for one animated GIF, images for a generated-image series, image for one still image, message, or conversation. Both sentences appear in one paragraph."
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
    fwwN: (function(e, a, i) {
        var t = i("SGsN"),
            n = i("xygx"),
            s = i("ddzD"),
            r = i("urzV"),
            o = i("taWv"),
            l = i("rfhJ");
        async function c(e, a) {
            let {
                images: i,
                downloadSources: c,
                intl: h,
                serverConversationId: d,
                isParagen: g = !1,
                logIndividualDownloads: u = !0
            } = a, p = 0;
            for (let [a, m] of i.entries()) {
                if (null == m.src || "completed" !== m.status || m.isPreview) continue;
                null != d && g && (0, l.b)(e, d, m, "download", "paragen");
                let f = c?.get(m.id) ?? m.src;
                null != d && (f = await (0, n.e)({
                    conversationId: null,
                    absoluteImageFilePath: null,
                    hostId: "local",
                    imageAssetResolver: (0, o.c)(d),
                    queryClient: e.queryClient,
                    src: f
                }));
                let v = (0, s.a)(m).downloadExtension ?? (0, r.c)(f ?? m.src) ?? "png",
                    b = (0, r.b)(h, v, {
                        title: m.chatGptDisplayTitle,
                        gifSpeed: m.gifPlayback?.speed
                    }),
                    w = !1;
                if (null != f && await (0, r.d)({
                        downloadSrc: f,
                        onDownloaded: () => {
                            w = !0, null != d && !g && u && (0, l.b)(e, d, m, "download")
                        },
                        suggestedFilename: i.length > 1 ? b.replace(/\.[^.]+$/, `-${a+1}.${v}`) : b
                    })) {
                    if (!w) return "cancelled";
                    p++;
                    continue
                }
                return e.get(t.f).danger(h.formatMessage({
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
        i.d(a, {
            a: () => c
        })
    }),
    cQW3: (function(e, a, i) {
        var t = i("SavH"),
            n = i("yGJW"),
            s = i("r9i9");

        function r(e, a, i) {
            return {
                queryKey: ["chatgpt-image-share", a, i.item.id, i.item.src, i.additionalImages?.map(e => [e.id, e.src])],
                queryFn: async () => {
                    let r = await (0, s.c)({
                        additionalImages: i.additionalImages,
                        conversationId: a,
                        image: i.item
                    });
                    return i.isDirectLightboxShare && (0, n.a)(e, t.d, {}), r
                },
                staleTime: 1 / 0
            }
        }
        i.d(a, {
            a: () => r
        })
    }),
    Tywu: (function(e, a, i) {
        var t = i("FS1B"),
            n = i("yGJW");

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
        async function r(e, a, i, r) {
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
                conversationId: i,
                shareSessionId: r,
                shareId: a.shareLinkId
            };
            try {
                let a = navigator.share(l);
                return (0, n.a)(e, t.h, {
                    ...c,
                    action: "CHATGPT_SHARE_FLOW_ACTION_SYSTEM_SHEET_OPENED"
                }), await a, (0, n.a)(e, t.h, {
                    ...c,
                    action: "CHATGPT_SHARE_FLOW_ACTION_SYSTEM_SHARE_COMPLETED"
                }), "shared"
            } catch (i) {
                let a = i instanceof Error && "AbortError" === i.name;
                return (0, n.a)(e, t.h, {
                    ...c,
                    action: a ? "CHATGPT_SHARE_FLOW_ACTION_DISMISSED" : "CHATGPT_SHARE_FLOW_ACTION_FAILED",
                    failureReason: a ? void 0 : "CHATGPT_SHARE_FLOW_FAILURE_REASON_UNSPECIFIED"
                }), a ? "cancelled" : "failed"
            }
        }
        i.d(a, {
            a: () => s,
            b: () => r
        })
    }),
    sX4C: (function(e, a, i) {
        i.d(a, {
            a: () => u
        });
        var t = i("ABep"),
            n = i("QosV"),
            s = i("on57"),
            r = i("Wf1j"),
            o = i("ygO2"),
            l = i("JNtf"),
            c = i("mUDD"),
            h = i("HOLv"),
            d = i("CsDP"),
            g = i("Z5TB");

        function u(e) {
            let a, i, u, p, m, f, v, b, w = (0, n.c)(42),
                {
                    children: k,
                    headerContent: y,
                    headerActions: T,
                    footer: C,
                    collapseEmptyContent: _,
                    isDismissalDisabled: x,
                    subtitle: S,
                    title: A,
                    onClose: j,
                    onOpenAutoFocus: L,
                    onCloseAutoFocus: M,
                    onPortalContainerChange: I,
                    onSubmit: P,
                    size: E,
                    variant: D,
                    presentation: G
                } = e,
                N = void 0 !== _ && _,
                F = void 0 !== x && x,
                R = (0, r.a)(),
                H = "imageSheet" === G;
            w[0] !== T || w[1] !== R || w[2] !== F || w[3] !== H || w[4] !== j || w[5] !== S || w[6] !== A ? (a = H ? (0, t.jsxs)("div", {
                className: (0, s.b)("shrink-0", "imageSheetHeader-vPz2gu"),
                children: [(0, t.jsx)(l.e, {
                    className: "imageSheetTitle-iMmEfF",
                    children: A
                }), null != S && (0, t.jsx)(l.d, {
                    className: "imageSheetSubtitle-E3o3_v",
                    children: S
                }), !F && (0, t.jsx)(o.a, {
                    unstyled: !0,
                    className: "imageSheetClose-msZEpI",
                    "aria-label": R.formatMessage({
                        id: "codex.dialog.closeButton",
                        defaultMessage: "Close dialog",
                        description: "Accessible label for the button that closes a dialog"
                    }),
                    onClick: e => {
                        e.stopPropagation(), j()
                    },
                    children: (0, t.jsx)(h.a, {
                        asset: g.a
                    })
                })]
            }) : (0, t.jsxs)("div", {
                className: "mb-2 flex items-center gap-2 pe-8",
                children: [(0, t.jsx)(c.d, {
                    className: "min-w-0 flex-1",
                    title: (0, t.jsx)(l.e, {
                        className: "contents",
                        children: A
                    }),
                    titleClassName: "truncate",
                    subtitle: null == S ? void 0 : (0, t.jsx)(l.d, {
                        className: "contents",
                        children: S
                    })
                }), T]
            }), w[0] = T, w[1] = R, w[2] = F, w[3] = H, w[4] = j, w[5] = S, w[6] = A, w[7] = a) : a = w[7], w[8] !== y || w[9] !== a ? (i = (0, t.jsxs)(t.Fragment, {
                children: [a, y]
            }), w[8] = y, w[9] = a, w[10] = i) : i = w[10];
            let O = i;
            w[11] !== S ? (u = null == S ? {
                "aria-describedby": void 0
            } : {}, w[11] = S, w[12] = u) : u = w[12], w[13] !== L || w[14] !== I ? (p = e => {
                e.currentTarget instanceof HTMLElement && I?.(e.currentTarget), L?.(e)
            }, w[13] = L, w[14] = I, w[15] = p) : p = w[15], w[16] !== M || w[17] !== u || w[18] !== p ? (m = {
                ...u,
                shouldStopPointerDownPropagation: !1,
                onCloseAutoFocus: M,
                onOpenAutoFocus: p
            }, w[16] = M, w[17] = u, w[18] = p, w[19] = m) : m = w[19];
            let W = !F && !H,
                U = D ?? "opaque",
                z = H ? "imageSheetSurface-pAxv7i" : void 0,
                q = H ? "imageSheetOverlay-Da_SGi" : void 0;
            return w[20] !== F || w[21] !== j ? (f = e => {
                e || F || j()
            }, w[20] = F, w[21] = j, w[22] = f) : f = w[22], w[23] !== k || w[24] !== N || w[25] !== C || w[26] !== O || w[27] !== F || w[28] !== H || w[29] !== P ? (v = H ? (0, t.jsxs)(c.b, {
                as: null == P ? "div" : "form",
                variant: "chatgpt",
                className: (0, s.b)("imageSheetBody-YQy31R", "min-h-0"),
                onSubmit: null == P ? void 0 : e => {
                    e.preventDefault(), e.stopPropagation(), F || P()
                },
                children: [(0, t.jsxs)("div", {
                    className: "flex min-h-0 flex-col",
                    children: [O, k]
                }), (0, t.jsx)("div", {
                    className: "mt-12 shrink-0",
                    children: C
                })]
            }) : (0, t.jsx)(d.a, {
                collapseEmptyContent: N,
                header: O,
                footer: C,
                onSubmit: null == P ? void 0 : e => {
                    e.preventDefault(), e.stopPropagation(), F || P()
                },
                children: k
            }), w[23] = k, w[24] = N, w[25] = C, w[26] = O, w[27] = F, w[28] = H, w[29] = P, w[30] = v) : v = w[30], w[31] !== F || w[32] !== H || w[33] !== E || w[34] !== z || w[35] !== q || w[36] !== f || w[37] !== v || w[38] !== m || w[39] !== W || w[40] !== U ? (b = (0, t.jsx)(l.b, {
                open: !0,
                contentOverflow: "visible",
                contentProps: m,
                shouldIgnoreClickOutside: F,
                showDialogClose: W,
                size: E,
                variant: U,
                unstyledContent: H,
                contentClassName: z,
                overlayClassName: q,
                onOpenChange: f,
                children: v
            }), w[31] = F, w[32] = H, w[33] = E, w[34] = z, w[35] = q, w[36] = f, w[37] = v, w[38] = m, w[39] = W, w[40] = U, w[41] = b) : b = w[41], b
        }
    }),
    TnP0: (function(e, a, i) {
        var t = i("ABep"),
            n = i("QosV"),
            s = i("Wf1j"),
            r = i("oyxz"),
            o = i("ygO2"),
            l = i("mUDD"),
            c = i("bf6R"),
            h = i("evwP"),
            d = i("zLIa"),
            g = i("sX4C");

        function u(e) {
            let a, i, u, p, m, f, v, b = (0, n.c)(37),
                {
                    accessControls: w,
                    actionDisabled: k,
                    actionLabel: y,
                    audience: T,
                    error: C,
                    footer: _,
                    info: x,
                    isBusy: S,
                    isDismissalDisabled: A,
                    notices: j,
                    onClose: L,
                    onOpenAutoFocus: M,
                    onPortalContainerChange: I,
                    onSubmit: P,
                    preview: E,
                    presentation: D,
                    subtitle: G,
                    size: N,
                    threadTitle: F,
                    title: R
                } = e,
                H = (0, s.a)();
            b[0] !== F ? (a = F?.trim(), b[0] = F, b[1] = a) : a = b[1];
            let O = a;
            b[2] !== S ? (i = S ? null : (0, t.jsx)(c.ve, {}), b[2] = S, b[3] = i) : i = b[3], b[4] !== y || b[5] !== i ? (u = (0, t.jsxs)(t.Fragment, {
                children: [i, y]
            }), b[4] = y, b[5] = i, b[6] = u) : u = b[6];
            let W = u;
            if (C?.preventsSharing) {
                let e;
                b[7] !== C.onRetry ? (e = null != C.onRetry ? (0, t.jsx)(r.a, {
                    id: "shareDialog.thread.retry",
                    defaultMessage: "Try again",
                    description: "Button in a thread sharing dialog after preparing the share link fails. Retries preparing the chat without publishing it."
                }) : (0, t.jsx)(r.a, {
                    id: "shareDialog.thread.close",
                    defaultMessage: "Close",
                    description: "Button in a thread sharing dialog that cannot prepare a share link. Closes the failed dialog so the user can reopen sharing."
                }), b[7] = C.onRetry, b[8] = e) : e = b[8], W = e
            }
            let U = !C?.preventsSharing && k;
            b[9] !== W || b[10] !== S || b[11] !== U ? (p = (0, t.jsx)(o.a, {
                color: "outline",
                disabled: U,
                loading: S,
                size: "medium",
                type: "submit",
                children: W
            }), b[9] = W, b[10] = S, b[11] = U, b[12] = p) : p = b[12];
            let z = p;
            b[13] !== O || b[14] !== R ? (m = R ?? (O ? (0, t.jsx)(r.a, {
                id: "shareDialog.thread.namedTitle",
                defaultMessage: "Share {threadTitle}",
                description: "Title of the ChatGPT or Codex thread sharing dialog. threadTitle is the user-provided name of the chat and may be truncated to fit the dialog header.",
                values: {
                    threadTitle: O
                }
            }) : (0, t.jsx)(r.a, {
                id: "shareDialog.thread.title",
                defaultMessage: "Share chat",
                description: "Title of the thread sharing dialog when the ChatGPT or Codex chat has no name yet."
            })), b[13] = O, b[14] = R, b[15] = m) : m = b[15];
            let q = C?.preventsSharing ? C.onRetry ?? L : P,
                B = C?.preventsSharing ? z : _ ?? z;
            return b[16] !== w || b[17] !== T || b[18] !== C || b[19] !== x || b[20] !== H || b[21] !== j || b[22] !== D || b[23] !== E ? (f = C?.preventsSharing ? (0, t.jsx)(l.e, {
                className: "py-10",
                children: (0, t.jsx)("div", {
                    role: "alert",
                    children: (0, t.jsx)(h.a, {
                        children: C.content
                    })
                })
            }) : (0, t.jsxs)(t.Fragment, {
                children: ["imageSheet" === D ? E : (0, t.jsx)(l.e, {
                    children: E
                }), x, j, w ?? (null == T ? null : (0, t.jsx)(l.e, {
                    children: (0, t.jsx)("div", {
                        className: "text-sm text-codex-description",
                        children: T
                    })
                })), null == C ? null : (0, t.jsx)(l.e, {
                    children: (0, t.jsx)("div", {
                        className: "text-sm text-danger",
                        role: "alert",
                        children: C.content
                    })
                }), C?.copyUrl == null ? null : (0, t.jsx)(l.e, {
                    children: (0, t.jsx)(d.a, {
                        "aria-label": H.formatMessage({
                            id: "shareDialog.thread.linkLabel",
                            defaultMessage: "Share link",
                            description: "Accessible label for the read-only URL field in a ChatGPT or Codex thread sharing dialog. The URL can be manually selected and copied if clipboard access fails."
                        }),
                        readOnly: !0,
                        value: C.copyUrl
                    })
                })]
            }), b[16] = w, b[17] = T, b[18] = C, b[19] = x, b[20] = H, b[21] = j, b[22] = D, b[23] = E, b[24] = f) : f = b[24], b[25] !== A || b[26] !== L || b[27] !== M || b[28] !== I || b[29] !== D || b[30] !== N || b[31] !== G || b[32] !== m || b[33] !== q || b[34] !== B || b[35] !== f ? (v = (0, t.jsx)(g.a, {
                title: m,
                subtitle: G,
                isDismissalDisabled: A,
                onClose: L,
                onOpenAutoFocus: M,
                onPortalContainerChange: I,
                onSubmit: q,
                size: N,
                presentation: D,
                footer: B,
                children: f
            }), b[25] = A, b[26] = L, b[27] = M, b[28] = I, b[29] = D, b[30] = N, b[31] = G, b[32] = m, b[33] = q, b[34] = B, b[35] = f, b[36] = v) : v = b[36], v
        }
        i.d(a, {
            a: () => u
        })
    })
};