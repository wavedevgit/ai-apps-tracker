export const __rspack_esm_ids = [433520];
export const __webpack_modules__ = {
    pPAa: (function(e, a, t) {
        var i = t("ABep");
        t("zd8w"), a.a = e => (0, i.jsx)("svg", {
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
    tdfh: (function(e, a, t) {
        t.d(a, {
            a: () => eR,
            ChatGptConversationShareRecoveryDialog: () => eG
        });
        var i = t("ABep"),
            s = t("QosV"),
            n = t("FS1B"),
            r = t("RGCh"),
            o = t("T0Rc"),
            l = t("Q840"),
            c = t("zd8w"),
            d = t("Wf1j"),
            h = t("oyxz"),
            g = t("Qgfj"),
            p = t("O0M0"),
            u = t("Cslg"),
            m = t("MM0V"),
            f = t("mUDD"),
            b = t("Ot7V"),
            v = t("bf6R"),
            w = t("EShr"),
            k = t("RNul"),
            y = t("SGsN"),
            x = t("yGJW"),
            _ = t("OWtl"),
            C = t("akkX"),
            T = t("FGv0"),
            S = t("TnP0"),
            A = t("qKAH"),
            I = t("hZax"),
            j = t("zHp1"),
            M = t("WFY2"),
            L = t("rvFo"),
            E = t("HFSu"),
            P = t("eShZ"),
            D = t("taWv"),
            N = t("r9i9"),
            F = t("Y7np"),
            G = t("oU3c"),
            R = t("SEBt"),
            O = t("OOaz"),
            H = t("fwwN"),
            W = t("cQW3"),
            U = t("Tywu"),
            z = t("rfhJ"),
            q = t("ZtSy");

        function B(e) {
            let a, t = (0, s.c)(4),
                {
                    includeConversationAudience: n,
                    linkAppearance: r
                } = e,
                o = void 0 === r ? "secondary" : r;
            if (void 0 !== n && n) {
                let e;
                return t[0] !== o ? (e = (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.conversationMemoryDisclosure",
                    defaultMessage: "Anyone with this link can access messages up to this point. Memory sources won't be shared with viewers. <learnMore>Learn more</learnMore>",
                    values: {
                        learnMore: e => (0, i.jsx)(K, {
                            appearance: o,
                            children: e
                        })
                    }
                }), t[0] = o, t[1] = e) : e = t[1], e
            }
            return t[2] !== o ? (a = (0, i.jsx)(h.a, {
                id: "chatgptConversations.shareDialog.memoryDisclosure",
                defaultMessage: "Memory sources won't be shared with viewers. <learnMore>Learn more</learnMore>",
                values: {
                    learnMore: e => (0, i.jsx)(K, {
                        appearance: o,
                        children: e
                    })
                }
            }), t[2] = o, t[3] = a) : a = t[3], a
        }

        function K(e) {
            let a, t = (0, s.c)(3),
                {
                    children: n,
                    appearance: r
                } = e,
                o = void 0 === r ? "secondary" : r;
            return t[0] !== o || t[1] !== n ? (a = (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(q.a, {
                    appearance: o,
                    href: "https://help.openai.com/en/articles/7925741-chatgpt-shared-links",
                    initiator: "open_in_browser_bridge",
                    openTarget: "external-browser",
                    underline: "always",
                    children: n
                })
            }), t[0] = o, t[1] = n, t[2] = a) : a = t[2], a
        }
        var V = t("k5RO"),
            Y = t("slpy"),
            Q = t("on57"),
            $ = t("Sm6l"),
            J = t("WAV0"),
            X = t("pPAa"),
            Z = t.p + "assets/facebook-stories.a4b3bd52fa.svg",
            ee = t.p + "assets/line.54d213ef65.svg",
            ea = t.p + "assets/telegram.b7e1212639.svg",
            et = t.p + "assets/whatsapp.0a1329508c.svg",
            ei = t("O666"),
            es = t("k6sM"),
            en = t("HOLv"),
            er = t.p + "assets/facebook.a44c3b23dc.svg",
            eo = t.p + "assets/instagram.f89c02c412.svg",
            el = t.p + "assets/kakao-talk.9a71acddc9.svg",
            ec = t.p + "assets/line.8701c39f94.svg",
            ed = t.p + "assets/linkedin.a0e21ee4e9.svg",
            eh = t.p + "assets/messages.65e1f7f9bb.svg",
            eg = t.p + "assets/reddit.ef23b998c8.svg",
            ep = t.p + "assets/snapchat.68114a3519.svg",
            eu = t.p + "assets/telegram.4e098d17e4.svg",
            em = t.p + "assets/whatsapp.95a74777d3.svg",
            ef = t.p + "assets/x.f402deb07e.svg",
            eb = t.p + "assets/facebook-messenger.d2456ff12a.svg",
            ev = t.p + "assets/instagram-stories.c90c585419.svg",
            ew = t.p + "assets/kakao-talk.a52fcff4cb.svg",
            ek = t.p + "assets/linkedin.61d30fb4b9.svg",
            ey = t.p + "assets/messages.eed095b840.svg",
            ex = t.p + "assets/reddit.960af71a47.svg",
            e_ = t.p + "assets/x.1105bc9892.svg",
            eC = "mobileRow-V0E64y",
            eT = t("J8BG"),
            eS = t("QY8z"),
            eA = t("axbG");

        function eI(e) {
            let a, t, n, r, o, l, c = (0, s.c)(46),
                {
                    copyLabel: h,
                    copyDisabled: g,
                    isBusy: p,
                    isDownloading: u,
                    socialDestinationsDisabled: m,
                    showSocialDestinations: f,
                    onCopy: b,
                    onDownload: v,
                    additionalActions: w,
                    onSocialShare: y,
                    experience: x,
                    onNativeShare: _,
                    canNativeShare: C,
                    country: T,
                    rowScrollPositions: S
                } = e,
                A = (0, d.a)();
            if (c[0] !== w || c[1] !== C || c[2] !== g || c[3] !== h || c[4] !== T || c[5] !== x.layout || c[6] !== x.unsupportedDestinationFallback || c[7] !== A || c[8] !== p || c[9] !== u || c[10] !== b || c[11] !== v || c[12] !== _ || c[13] !== y || c[14] !== S || c[15] !== f || c[16] !== m) {
                o = Symbol.for("react.early_return_sentinel");
                e: {
                    let e, s, l, d = null == v ? [] : [{
                        id: "download",
                        disabled: u || p,
                        icon: (0, i.jsx)(en.a, {
                            asset: eT.a
                        }),
                        label: A.formatMessage({
                            id: "chatgptConversations.shareDialog.destination.download.label",
                            defaultMessage: "Download"
                        }),
                        onClick: v
                    }];c[22] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(en.a, {
                        asset: eA.a
                    }), c[22] = e) : e = c[22];
                    let I = {
                            id: "copy",
                            disabled: g,
                            icon: e,
                            label: h,
                            onClick: b
                        },
                        j = C ? [{
                            id: "native",
                            disabled: g,
                            icon: (0, i.jsx)(en.a, {
                                asset: eS.a
                            }),
                            label: A.formatMessage({
                                id: "chatgptConversations.mobileImageShare.native",
                                defaultMessage: "Share to"
                            }),
                            onClick: _
                        }] : [],
                        M = [...d, I, ...j],
                        L = f ? (0, V.e)({
                            country: T
                        }).map(e => (function(e) {
                            let a, t, s, {
                                    destination: n,
                                    disabled: r,
                                    intl: o,
                                    onSocialShare: l
                                } = e,
                                c = e => (0, i.jsx)("img", {
                                    alt: "",
                                    "aria-hidden": !0,
                                    src: e
                                }),
                                d = e => (0, i.jsx)("img", {
                                    alt: "",
                                    "aria-hidden": !0,
                                    className: "destinationIconBackground-q4p_I2",
                                    src: e
                                });
                            switch (n) {
                                case "messages":
                                    a = c(ey), t = d(eh), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.messages",
                                        defaultMessage: "Messages"
                                    });
                                    break;
                                case "whatsapp":
                                    a = c(et), t = d(em), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.whatsapp",
                                        defaultMessage: "WhatsApp"
                                    });
                                    break;
                                case "instagram-stories":
                                    a = c(ev), t = d(eo), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.instagramStories",
                                        defaultMessage: "Instagram"
                                    });
                                    break;
                                case "facebook-stories":
                                    a = c(Z), t = d(er), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.facebookStories",
                                        defaultMessage: "Facebook"
                                    });
                                    break;
                                case "telegram":
                                    a = c(ea), t = d(eu), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.telegram",
                                        defaultMessage: "Telegram"
                                    });
                                    break;
                                case "facebook-messenger":
                                    a = c(eb), t = d(er), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.facebookMessenger",
                                        defaultMessage: "Messenger"
                                    });
                                    break;
                                case "kakao-talk":
                                    a = c(ew), t = d(el), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.kakaoTalk",
                                        defaultMessage: "KakaoTalk"
                                    });
                                    break;
                                case "snapchat-stories":
                                    a = (0, i.jsx)(es.a, {
                                        "aria-hidden": "true",
                                        className: "text-brand-logo-foreground"
                                    }), t = d(ep), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.snapchatStories",
                                        defaultMessage: "Snapchat"
                                    });
                                    break;
                                case "line":
                                    a = c(ee), t = d(ec), s = o.formatMessage({
                                        id: "postSharingModal.line",
                                        defaultMessage: "LINE"
                                    });
                                    break;
                                case "x":
                                    a = c(e_), t = d(ef), s = o.formatMessage({
                                        id: "chatgptConversations.shareDialog.destination.x.label",
                                        defaultMessage: "X"
                                    });
                                    break;
                                case "linkedin":
                                    a = c(ek), t = d(ed), s = o.formatMessage({
                                        id: "chatgptConversations.shareDialog.destination.linkedin.label",
                                        defaultMessage: "LinkedIn"
                                    });
                                    break;
                                case "reddit":
                                    a = c(ex), t = d(eg), s = o.formatMessage({
                                        id: "chatgptConversations.shareDialog.destination.reddit.label",
                                        defaultMessage: "Reddit"
                                    })
                            }
                            return {
                                id: n,
                                disabled: r,
                                icon: a,
                                iconBackground: t,
                                label: s,
                                onClick: e => l(n, e)
                            }
                        })({
                            destination: e,
                            disabled: m || "native-share" === x.unsupportedDestinationFallback && (0, V.g)(e) && !C,
                            intl: A,
                            onSocialShare: y
                        })) : [],
                        E = "two-rows" === x.layout && L.length > 0;c[23] !== S ? (s = e => null == S ? {} : {
                        onScroll: a => {
                            S[e] = a.currentTarget.scrollLeft
                        },
                        ref: a => {
                            null != a && (a.scrollLeft = S[e] ?? 0)
                        }
                    }, c[23] = S, c[24] = s) : s = c[24];
                    let P = s;c[25] !== p || c[26] !== u ? (l = (e, a) => {
                        let {
                            id: t,
                            disabled: s,
                            icon: n,
                            iconBackground: r,
                            label: o,
                            onClick: l
                        } = e, c = "copy" === t && p || "download" === t && u;
                        return (0, i.jsx)(J.a, {
                            extension: "download" === t,
                            children: (0, i.jsxs)($.a, {
                                "aria-label": o,
                                "aria-busy": c,
                                color: "shareDestination",
                                unstyled: !0,
                                className: (0, Q.b)("mobileDestination-JRc58g", a && "mobileTwoRowDestination-jahy9S"),
                                "data-destination": t,
                                disabled: s,
                                size: "shareDestination",
                                type: "copy" === t ? "submit" : "button",
                                onClick: l,
                                children: [(0, i.jsxs)("span", {
                                    className: (0, Q.b)("destinationIcon-EuU6jl", null != r && "destinationIconWithArtwork-eYPnWH"),
                                    children: [r, (0, i.jsx)("span", {
                                        className: "destinationIconForeground-usBliy",
                                        children: c ? (0, i.jsx)(k.a, {
                                            as: "span",
                                            className: "icon-sm"
                                        }) : n
                                    })]
                                }), (0, i.jsx)("span", {
                                    className: "w-full text-center whitespace-nowrap text-default select-none",
                                    "aria-live": "copy" === t ? "polite" : void 0,
                                    children: o
                                })]
                            })
                        }, t)
                    }, c[25] = p, c[26] = u, c[27] = l) : l = c[27];
                    let D = l;
                    if (E) {
                        let e, a, t, s, n, r, l = [...d, ...j, I];
                        c[28] !== P ? (e = P("destinations"), c[28] = P, c[29] = e) : e = c[29], c[30] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, Q.b)("box-border flex min-w-0 w-full gap-x-5 overflow-x-auto overscroll-x-contain px-5 pt-5 pb-8", eC), c[30] = a) : a = c[30], c[31] !== D ? (t = e => D(e, !0), c[31] = D, c[32] = t) : t = c[32], c[33] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsx)("div", {
                            className: "w-full border-t-hairline border-default",
                            "aria-hidden": "true"
                        }), c[33] = s) : s = c[33], c[34] !== P ? (n = P("actions"), c[34] = P, c[35] = n) : n = c[35], c[36] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, Q.b)("box-border flex min-w-0 w-full gap-x-5 overflow-x-auto overscroll-x-contain px-5 pt-5 pb-8", eC, "mobileUtilityRow-iCKQaL"), c[36] = r) : r = c[36], o = (0, i.jsxs)("div", {
                            className: "flex w-full min-w-0 flex-col",
                            children: [(0, i.jsx)("div", {
                                "data-mobile-image-share-row": "destinations",
                                ...e,
                                className: a,
                                children: L.map(t)
                            }), s, (0, i.jsxs)("div", {
                                "data-mobile-image-share-row": "actions",
                                ...n,
                                className: r,
                                children: [l.map(e => D(e, !0)), w]
                            })]
                        });
                        break e
                    }
                    a = "combined",
                    c[37] !== P ? (t = P("combined"), c[37] = P, c[38] = t) : t = c[38],
                    c[39] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, Q.b)("flex w-full gap-x-6 overflow-x-auto overscroll-x-contain px-6", eC), c[39] = n) : n = c[39],
                    r = [...M, ...L].map(e => D(e, !1))
                }
                c[0] = w, c[1] = C, c[2] = g, c[3] = h, c[4] = T, c[5] = x.layout, c[6] = x.unsupportedDestinationFallback, c[7] = A, c[8] = p, c[9] = u, c[10] = b, c[11] = v, c[12] = _, c[13] = y, c[14] = S, c[15] = f, c[16] = m, c[17] = a, c[18] = t, c[19] = n, c[20] = r, c[21] = o
            } else a = c[17], t = c[18], n = c[19], r = c[20], o = c[21];
            return o !== Symbol.for("react.early_return_sentinel") ? o : (c[40] !== w || c[41] !== a || c[42] !== t || c[43] !== n || c[44] !== r ? (l = (0, i.jsxs)("div", {
                "data-mobile-image-share-row": a,
                ...t,
                className: n,
                children: [r, w]
            }), c[40] = w, c[41] = a, c[42] = t, c[43] = n, c[44] = r, c[45] = l) : l = c[45], l)
        }

        function ej(e) {
            let a, t, n, r, o, c, d = (0, s.c)(22),
                {
                    "aria-label": h,
                    "data-destination": g,
                    disabled: p,
                    icons: u,
                    isBusy: m,
                    label: f,
                    announceLabel: b,
                    type: v,
                    onClick: w
                } = e,
                y = void 0 !== m && m,
                x = void 0 === v ? "button" : v;
            d[0] === Symbol.for("react.memo_cache_sentinel") ? (a = {
                layer: "3136899520",
                parameter: "large_share_destinations"
            }, d[0] = a) : a = d[0];
            let _ = (0, l.x)(ei.b, a),
                C = _ ? u.large : u.compact,
                T = _ ? "size-16" : "size-11";
            d[1] !== T ? (t = (0, Q.b)("share-destination-icon flex items-center justify-center rounded-full", T), d[1] = T, d[2] = t) : t = d[2], d[3] !== _ || d[4] !== C || d[5] !== y ? (n = y ? (0, i.jsx)(k.a, {
                as: "span",
                className: _ ? "size-8" : "icon-sm"
            }) : C, d[3] = _, d[4] = C, d[5] = y, d[6] = n) : n = d[6], d[7] !== t || d[8] !== n ? (r = (0, i.jsx)("span", {
                className: t,
                children: n
            }), d[7] = t, d[8] = n, d[9] = r) : r = d[9];
            let S = void 0 !== b && b ? "polite" : void 0;
            return d[10] !== f || d[11] !== S ? (o = (0, i.jsx)("span", {
                className: "w-full text-center text-xs whitespace-nowrap text-default select-none",
                "aria-live": S,
                children: f
            }), d[10] = f, d[11] = S, d[12] = o) : o = d[12], d[13] !== h || d[14] !== g || d[15] !== p || d[16] !== y || d[17] !== w || d[18] !== o || d[19] !== r || d[20] !== x ? (c = (0, i.jsxs)($.a, {
                "aria-label": h,
                "aria-busy": y,
                "data-destination": g,
                color: "shareDestination",
                disabled: p,
                size: "shareDestination",
                type: x,
                onClick: w,
                children: [r, o]
            }), d[13] = h, d[14] = g, d[15] = p, d[16] = y, d[17] = w, d[18] = o, d[19] = r, d[20] = x, d[21] = c) : c = d[21], c
        }
        let eM = ["IN", "MY", "BD", "SG"],
            eL = ["whatsapp", "telegram", "facebook"],
            eE = ["DE", "GB", "FR", "BR"],
            eP = ["whatsapp", "x", "facebook"];

        function eD(e) {
            let a, t, n, o, c, h, g, p, u, m, f = (0, s.c)(78),
                {
                    copyLabel: b,
                    copyDisabled: w,
                    isBusy: y,
                    isDownloading: x,
                    socialDestinationsDisabled: _,
                    showSocialDestinations: C,
                    onCopy: T,
                    onDownload: S,
                    additionalActions: A,
                    onSocialShare: j,
                    mobileImageActions: M,
                    projectStyleEligible: L
                } = e,
                E = void 0 !== x && x,
                P = (0, I.l)(),
                D = void 0 !== L && L && null == M && !!P.userID?.trim();
            f[0] === Symbol.for("react.memo_cache_sentinel") ? (a = {
                layer: "1145946487",
                parameter: "project_style_share_buttons"
            }, f[0] = a) : a = f[0];
            let N = !0 === (0, l.x)(D ? ei.b : null, a),
                F = null != M;
            f[1] !== F ? (t = {
                layer: "3136899520",
                parameter: "large_share_destinations",
                disableExposureLog: F
            }, f[1] = F, f[2] = t) : t = f[2];
            let G = (0, l.x)(N ? null : ei.b, t),
                R = (0, d.a)(),
                O = (0, I.h)();
            f[3] !== M || f[4] !== C || f[5] !== O || f[6] !== P ? (n = O.client.getContext().user?.country?.trim().toUpperCase(), o = null, null != n && P.userID?.trim() && null == M && C && !(0, r.d)() && !(0, r.b)() && (eM.includes(n) && O.getExperiment("3745082431").get("enabled", !1) ? o = eL : eE.includes(n) && O.getExperiment("234373177").get("enabled", !1) && (o = eP)), f[3] = M, f[4] = C, f[5] = O, f[6] = P, f[7] = n, f[8] = o) : (n = f[7], o = f[8]);
            let H = "JP" === n;
            f[9] !== H || f[10] !== M || f[11] !== C || f[12] !== O ? (c = null == M && C && (H || O.checkGate("2338166187")) && O.getLayer(H ? "494762337" : "2308409163").get("enabled", !1), f[9] = H, f[10] = M, f[11] = C, f[12] = O, f[13] = c) : c = f[13];
            let W = c;
            if (null != M) {
                let e;
                return f[14] !== A || f[15] !== w || f[16] !== b || f[17] !== n || f[18] !== y || f[19] !== E || f[20] !== M.canNativeShare || f[21] !== M.experience || f[22] !== M.onNativeShare || f[23] !== M.rowScrollPositions || f[24] !== T || f[25] !== S || f[26] !== j || f[27] !== C || f[28] !== _ ? (e = (0, i.jsx)(eI, {
                    copyLabel: b,
                    copyDisabled: w,
                    isBusy: y,
                    isDownloading: E,
                    socialDestinationsDisabled: _,
                    showSocialDestinations: C,
                    onCopy: T,
                    onDownload: S,
                    additionalActions: A,
                    onSocialShare: j,
                    experience: M.experience,
                    onNativeShare: M.onNativeShare,
                    canNativeShare: M.canNativeShare,
                    country: n,
                    rowScrollPositions: M.rowScrollPositions
                }), f[14] = A, f[15] = w, f[16] = b, f[17] = n, f[18] = y, f[19] = E, f[20] = M.canNativeShare, f[21] = M.experience, f[22] = M.onNativeShare, f[23] = M.rowScrollPositions, f[24] = T, f[25] = S, f[26] = j, f[27] = C, f[28] = _, f[29] = e) : e = f[29], e
            }
            if (f[30] !== A || f[31] !== w || f[32] !== b || f[33] !== R || f[34] !== y || f[35] !== E || f[36] !== o || f[37] !== T || f[38] !== S || f[39] !== j || f[40] !== W || f[41] !== C || f[42] !== _ || f[43] !== N) {
                g = Symbol.for("react.early_return_sentinel");
                e: {
                    let e, a, t, s = null == S ? [] : [{
                        id: "download",
                        largeIcon: (0, i.jsx)(v.u, {
                            "aria-hidden": "true"
                        }),
                        disabled: E,
                        icon: (0, i.jsx)(v.t, {}),
                        label: R.formatMessage({
                            id: "chatgptConversations.shareDialog.destination.download.label",
                            defaultMessage: "Download"
                        }),
                        onClick: S
                    }];f[46] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(v.Me, {
                        "aria-hidden": "true"
                    }), f[46] = e) : e = f[46],
                    f[47] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, i.jsx)(v.Le, {}), f[47] = a) : a = f[47],
                    f[48] !== w || f[49] !== b || f[50] !== T ? (t = {
                        id: "copy",
                        largeIcon: e,
                        disabled: w,
                        icon: a,
                        label: b,
                        onClick: T
                    }, f[48] = w, f[49] = b, f[50] = T, f[51] = t) : t = f[51];
                    let n = t,
                        r = C && null == o ? [...W ? [function(e) {
                            let {
                                disabled: a,
                                intl: t,
                                onSocialShare: s
                            } = e, n = (0, i.jsx)("img", {
                                alt: "",
                                "aria-hidden": !0,
                                src: ee
                            });
                            return {
                                id: "line",
                                largeIcon: n,
                                disabled: a,
                                icon: n,
                                label: t.formatMessage({
                                    id: "postSharingModal.line",
                                    defaultMessage: "LINE"
                                }),
                                onClick: e => s("line", e)
                            }
                        }({
                            disabled: _,
                            intl: R,
                            onSocialShare: j
                        })] : [], eN({
                            destination: "x",
                            disabled: _,
                            intl: R,
                            onSocialShare: j
                        }), eN({
                            destination: "linkedin",
                            disabled: _,
                            intl: R,
                            onSocialShare: j
                        }), ...W ? [] : [eN({
                            destination: "reddit",
                            disabled: _,
                            intl: R,
                            onSocialShare: j
                        })]] : [];
                    if (null != o) {
                        let e;
                        f[52] !== R || f[53] !== j || f[54] !== _ ? (e = e => eN({
                            destination: e,
                            disabled: _,
                            intl: R,
                            onSocialShare: j
                        }), f[52] = R, f[53] = j, f[54] = _, f[55] = e) : e = f[55], r.push(...o.map(e))
                    }
                    if (N) {
                        let e, a, t, n = e => {
                            let {
                                id: a,
                                disabled: t,
                                icon: s,
                                label: n,
                                onClick: r
                            } = e;
                            return (0, i.jsx)(Y.a, {
                                content: n,
                                children: (0, i.jsx)($.a, {
                                    "aria-label": n,
                                    "aria-busy": "download" === a && E,
                                    color: "secondary",
                                    "data-destination": a,
                                    disabled: t,
                                    radius: "full",
                                    size: "dialogAction",
                                    type: "button",
                                    uniform: !0,
                                    onClick: r,
                                    children: "download" === a && E ? (0, i.jsx)(k.a, {
                                        className: "icon-sm"
                                    }) : s
                                })
                            }, a)
                        };
                        f[56] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(v.Ke, {}), f[56] = e) : e = f[56], f[57] !== b ? (a = (0, i.jsx)("span", {
                            "aria-live": "polite",
                            children: b
                        }), f[57] = b, f[58] = a) : a = f[58], f[59] !== w || f[60] !== b || f[61] !== y || f[62] !== T || f[63] !== a ? (t = (0, i.jsxs)($.a, {
                            "aria-label": b,
                            "aria-busy": y,
                            color: "primary",
                            "data-destination": "copy",
                            disabled: w,
                            loading: y,
                            size: "dialogAction",
                            type: "submit",
                            onClick: T,
                            children: [e, a]
                        }), f[59] = w, f[60] = b, f[61] = y, f[62] = T, f[63] = a, f[64] = t) : t = f[64], g = (0, i.jsxs)("div", {
                            className: "flex w-full flex-wrap items-center justify-end gap-2 select-none",
                            children: [r.map(n), A, (0, i.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [s.map(n), t]
                            })]
                        });
                        break e
                    }
                    h = [n, ...r, ...s]
                }
                f[30] = A, f[31] = w, f[32] = b, f[33] = R, f[34] = y, f[35] = E, f[36] = o, f[37] = T, f[38] = S, f[39] = j, f[40] = W, f[41] = C, f[42] = _, f[43] = N, f[44] = h, f[45] = g
            } else h = f[44], g = f[45];
            if (g !== Symbol.for("react.early_return_sentinel")) return g;
            let U = h,
                z = null == A && "flex-wrap justify-center gap-x-6 gap-y-4",
                q = null != A && "gap-3",
                B = null != A && G && "flex-wrap justify-center",
                K = null != A && !G && "justify-start overflow-x-auto sm:justify-center";
            return f[65] !== q || f[66] !== B || f[67] !== K || f[68] !== z ? (p = (0, Q.b)("flex w-full", z, q, B, K), f[65] = q, f[66] = B, f[67] = K, f[68] = z, f[69] = p) : p = f[69], f[70] !== U || f[71] !== y || f[72] !== E ? (u = U.map(e => {
                let {
                    id: a,
                    disabled: t,
                    icon: s,
                    largeIcon: n,
                    label: r,
                    onClick: o
                } = e, l = "copy" === a && y || "download" === a && E;
                return (0, i.jsx)(J.a, {
                    extension: "download" === a,
                    children: (0, i.jsx)(ej, {
                        "aria-label": r,
                        "data-destination": a,
                        disabled: t,
                        icons: {
                            compact: s,
                            large: n
                        },
                        isBusy: l,
                        label: r,
                        announceLabel: "copy" === a,
                        type: "copy" === a ? "submit" : "button",
                        onClick: o
                    })
                }, a)
            }), f[70] = U, f[71] = y, f[72] = E, f[73] = u) : u = f[73], f[74] !== A || f[75] !== p || f[76] !== u ? (m = (0, i.jsxs)("div", {
                className: p,
                children: [u, A]
            }), f[74] = A, f[75] = p, f[76] = u, f[77] = m) : m = f[77], m
        }

        function eN(e) {
            let a, t, s, {
                destination: n,
                disabled: r,
                intl: o,
                onSocialShare: l
            } = e;
            switch (n) {
                case "whatsapp":
                    a = eF(et, "size-5"), t = eF(et, "size-8"), s = o.formatMessage({
                        id: "chatgptConversations.shareDialog.destination.whatsapp.label",
                        defaultMessage: "WhatsApp"
                    });
                    break;
                case "telegram":
                    a = eF(ea, "size-5"), t = eF(ea, "size-8"), s = o.formatMessage({
                        id: "chatgptConversations.shareDialog.destination.telegram.label",
                        defaultMessage: "Telegram"
                    });
                    break;
                case "facebook":
                    a = eF(Z, "size-5"), t = eF(Z, "size-8"), s = o.formatMessage({
                        id: "chatgptConversations.shareDialog.destination.facebook.label",
                        defaultMessage: "Facebook"
                    });
                    break;
                case "x":
                    a = (0, i.jsx)(v.vj, {
                        "aria-hidden": "true"
                    }), t = (0, i.jsx)(v.wj, {
                        "aria-hidden": "true"
                    }), s = o.formatMessage({
                        id: "chatgptConversations.shareDialog.destination.x.label",
                        defaultMessage: "X"
                    });
                    break;
                case "linkedin":
                    a = (0, i.jsx)(X.a, {
                        "aria-hidden": "true"
                    }), t = (0, i.jsx)(v.Ne, {
                        "aria-hidden": "true"
                    }), s = o.formatMessage({
                        id: "chatgptConversations.shareDialog.destination.linkedin.label",
                        defaultMessage: "LinkedIn"
                    });
                    break;
                case "reddit":
                    a = (0, i.jsx)(v.eh, {
                        "aria-hidden": "true"
                    }), t = (0, i.jsx)(v.fh, {
                        "aria-hidden": "true"
                    }), s = o.formatMessage({
                        id: "chatgptConversations.shareDialog.destination.reddit.label",
                        defaultMessage: "Reddit"
                    })
            }
            return {
                id: n,
                disabled: r,
                icon: a,
                largeIcon: t,
                label: s,
                onClick: e => l(n, e)
            }
        }

        function eF(e, a) {
            return (0, i.jsx)("span", {
                "aria-hidden": "true",
                className: (0, Q.b)("bg-current", a),
                style: {
                    mask: `url(${e}) center / contain no-repeat`
                }
            })
        }

        function eG(e) {
            let a, t, n, r, o, d, h = (0, s.c)(12);
            h[0] !== e ? ({
                accountId: a,
                onClose: t,
                ...n
            } = e, h[0] = e, h[1] = a, h[2] = t, h[3] = n) : (a = h[1], t = h[2], n = h[3]);
            let g = (0, l.z)(u.f) === a;
            return h[4] !== g || h[5] !== t ? (r = () => {
                g || t()
            }, o = [g, t], h[4] = g, h[5] = t, h[6] = r, h[7] = o) : (r = h[6], o = h[7]), (0, c.useEffect)(r, o), h[8] !== g || h[9] !== t || h[10] !== n ? (d = g ? (0, i.jsx)(eR, {
                ...n,
                onClose: t
            }) : null, h[8] = g, h[9] = t, h[10] = n, h[11] = d) : d = h[11], d
        }

        function eR(e) {
            let a, t, n = (0, s.c)(9);
            return n[0] !== e.publishedShareLink?.shareLinkId || n[1] !== e.publishedWidget || n[2] !== e.responseRegion || n[3] !== e.shareSessionId || n[4] !== e.widget ? (a = null == e.widget && null == e.publishedWidget && null == e.responseRegion ? void 0 : JSON.stringify([e.widget?.attachment, e.responseRegion?.attachment, e.publishedShareLink?.shareLinkId, e.shareSessionId]), n[0] = e.publishedShareLink?.shareLinkId, n[1] = e.publishedWidget, n[2] = e.responseRegion, n[3] = e.shareSessionId, n[4] = e.widget, n[5] = a) : a = n[5], n[6] !== e || n[7] !== a ? (t = (0, i.jsx)(eO, {
                ...e
            }, a), n[6] = e, n[7] = a, n[8] = t) : t = n[8], t
        }

        function eO(e) {
            let a, t, g, m, v, k, E, q, B, K, Y, Q, $, J, X, Z, ee, ea, et, ei, es, en, er, eo, el, ec, ed, eh, eg, ep, eu, em, ef, eb, ev, ew, ek, ey, ex, e_, eC, eT, eS, eA, eI, ej, eM, eL, eE, eP, eN, eF, eG = (0, s.c)(388),
                {
                    currentNodeId: eR,
                    image: eO,
                    imagePromptTemplate: eQ,
                    imageShareOptions: e$,
                    recoveryShareLink: eJ,
                    publishedShareLink: eX,
                    publishedWidget: eZ,
                    messageIds: e1,
                    mobileImageExperience: e0,
                    mobileImageRowScrollPositions: e2,
                    trackMobileImageShareLifecycle: e3,
                    onImageShareLinkPrepared: e5,
                    onClose: e9,
                    onResult: ae,
                    previewTurns: aa,
                    loadExpandedConversation: at,
                    privacyNotices: ai,
                    prompt: as,
                    postShareSource: an,
                    receiverShareLink: ar,
                    responseRegion: ao,
                    response: al,
                    serverConversationId: ac,
                    shareSessionId: ad,
                    source: ah,
                    title: ag,
                    widget: ap
                } = e,
                au = (0, l.y)(_.a),
                am = (0, I.j)("3136899520"),
                [af, ab] = (0, c.useState)(!1),
                av = (0, l.z)(null)?.data,
                aw = (0, l.z)(null),
                ak = (0, l.x)(null, ac),
                ay = (0, d.a)(),
                ax = (0, c.useRef)(!1),
                a_ = (0, c.useRef)(!1);
            eG[0] !== ae ? (a = () => (ax.current = !0, () => {
                ax.current = !1, queueMicrotask(() => {
                    ax.current || a_.current || (a_.current = !0, ae?.(!1))
                })
            }), t = [ae], eG[0] = ae, eG[1] = a, eG[2] = t) : (a = eG[1], t = eG[2]), (0, c.useEffect)(a, t), eG[3] !== ae ? (g = function(e) {
                a_.current || (a_.current = !0, ae?.(e))
            }, eG[3] = ae, eG[4] = g) : g = eG[4];
            let aC = g;
            eG[5] !== aC || eG[6] !== e9 ? (m = function() {
                aC(!1), e9()
            }, eG[5] = aC, eG[6] = e9, eG[7] = m) : m = eG[7];
            let aT = m,
                aS = (0, c.useContext)(p.a);
            eG[8] !== eO || eG[9] !== au || eG[10] !== ac ? (v = null == eO ? void 0 : (0, W.a)(au, ac, eO), eG[8] = eO, eG[9] = au, eG[10] = ac, eG[11] = v) : v = eG[11];
            let aA = v;
            eG[12] !== eQ || eG[13] !== aA || eG[14] !== eX || eG[15] !== ar || eG[16] !== eJ || eG[17] !== au.queryClient ? (k = () => ar ?? eX ?? eJ ?? (null == aA || null != eQ ? null : au.queryClient.getQueryData(aA.queryKey) ?? null), eG[12] = eQ, eG[13] = aA, eG[14] = eX, eG[15] = ar, eG[16] = eJ, eG[17] = au.queryClient, eG[18] = k) : k = eG[18];
            let [aI, aj] = (0, c.useState)(k), [aM] = (0, c.useState)(eK), aL = ad ?? aM, [aE, aP] = (0, c.useState)("message");
            eG[19] !== e1 || eG[20] !== aa || eG[21] !== al || eG[22] !== am ? (E = null != e1 && null != al && null != aa && am.get("message_share_scope_picker", !1), eG[19] = e1, eG[20] = aa, eG[21] = al, eG[22] = am, eG[23] = E) : E = eG[23];
            let aD = E,
                aN = aD && "conversation" === aE;
            eG[24] !== aL ? (q = ["expanded-conversation-share", aL], eG[24] = aL, eG[25] = q) : q = eG[25];
            let aF = q,
                aG = aN && null != at;
            eG[26] !== at ? (B = e => {
                let {
                    signal: a
                } = e;
                if (null == at) throw Error("Expanded conversation loader unavailable");
                return at(a)
            }, eG[26] = at, eG[27] = B) : B = eG[27], eG[28] !== aF || eG[29] !== B || eG[30] !== aG ? (K = {
                enabled: aG,
                queryKey: aF,
                queryFn: B,
                staleTime: 1 / 0,
                gcTime: 0,
                retry: !1
            }, eG[28] = aF, eG[29] = B, eG[30] = aG, eG[31] = K) : K = eG[31];
            let {
                data: aR,
                error: aO,
                isFetching: aH,
                refetch: aW
            } = (0, o.a)(K), [aU, az] = (0, c.useState)("idle"), [aq, aB] = (0, c.useState)(null != eJ ? "copy-failed" : null), [aK, aV] = (0, c.useState)(!1);
            eG[32] !== ac ? (Y = ["chatgpt-conversation-share", ac], eG[32] = ac, eG[33] = Y) : Y = eG[33];
            let aY = Y,
                aQ = null == eJ && null == ar && null == eX && null == as && null == eO && (null == e1 || aN) && null == ao && null == ap;
            eG[34] !== eR || eG[35] !== ac ? (Q = () => (0, N.i)({
                conversationId: ac,
                currentNodeId: eR
            }), eG[34] = eR, eG[35] = ac, eG[36] = Q) : Q = eG[36], eG[37] !== aY || eG[38] !== aQ || eG[39] !== Q ? ($ = {
                enabled: aQ,
                queryFn: Q,
                queryKey: aY,
                retry: !1,
                staleTime: L.b.ONE_MINUTE
            }, eG[37] = aY, eG[38] = aQ, eG[39] = Q, eG[40] = $) : $ = eG[40];
            let {
                data: a$,
                error: aJ,
                isLoading: aX
            } = (0, o.a)($);
            eG[41] === Symbol.for("react.memo_cache_sentinel") ? (J = {
                enabled: !1,
                queryFn: eB,
                queryKey: ["accounts", "check"],
                staleTime: L.b.ONE_MINUTE
            }, eG[41] = J) : J = eG[41];
            let {
                data: aZ
            } = (0, o.a)(J), a1 = null != eO, a0 = null != e0 && a1, a2 = a0 || !0 === e3, a3 = null != ar || an?.kind === "shared", a5 = (eO?.additionalImages?.length ?? 0) > 0, a4 = eO?.item.isAnimated === !0 && !a5;
            eG[42] !== eO || eG[43] !== ac || eG[44] !== aL ? (X = (0, D.c)((0, O.c)(ac), void 0, null != eO && null == eO.previewSrc ? aL : void 0), eG[42] = eO, eG[43] = ac, eG[44] = aL, eG[45] = X) : X = eG[45];
            let {
                src: a6,
                isLoading: a7
            } = (0, j.k)(null != eO && (a5 || null == eO.previewSrc) ? eO.item.src ?? "" : "", X), a8 = null != eO && null == eO.previewSrc && null == a6, a9 = a5 ? "image_series" : "single_image", te = ap ?? eZ, ta = null != e1 || null != ao || null != te || ar?.contentType === "message", tt = null != ao, ti = te?.metadata.widgetType === "visualization", ts = te?.metadata.widgetName === "create_interactive_poll" || te?.metadata.widgetName === "CreateInteractivePoll", tn = null != as || null != eQ, tr = a1 || ta || tn, to = !tr || aN, tl = tr || !0, tc = "conversation";
            if (ti ? tc = "widget" : null != eQ ? tc = "prompt" : a4 ? tc = "gif" : a1 ? tc = a5 ? "images" : "image" : tt ? tc = "response-region" : ta ? tc = aN ? "conversation" : "message" : tn && (tc = "prompt"), null == al) Z = ai;
            else if (aN) Z = aR?.privacyNotices ?? (null == at ? ai : void 0);
            else {
                let e;
                eG[46] !== al ? (e = (0, N.m)(al), eG[46] = al, eG[47] = e) : e = eG[47], Z = e
            }
            let td = a1 || (!tr || ta) && Z?.hasImageReference === !0;
            eG[48] !== eO || eG[49] !== a5 || eG[50] !== ag ? (ee = (a5 ? void 0 : eO?.item.chatGptDisplayTitle) ?? (0, G.c)(ag), eG[48] = eO, eG[49] = a5, eG[50] = ag, eG[51] = ee) : ee = eG[51];
            let th = ee,
                tg = to && a$?.is_public === !0 && !0 === a$.is_visible,
                tp = aZ?.accounts?.find(e => e.id === (aS?.accountId ?? aZ.account_ordering?.[0])),
                tu = tp?.structure ?? aS?.accountStructureAtLogin,
                tm = "unknown";
            aI?.isWorkspaceOnly != null ? tm = aI.isWorkspaceOnly ? "workspace" : "public" : null == a$ || a1 ? ("personal" === tu || "workspace" === tu) && (tm = "workspace" === tu ? "workspace" : "public") : tm = a$.share_url.includes("/share/e/") ? "workspace" : "public", eG[52] !== eO || eG[53] !== eQ || eG[54] !== aA?.queryKey || eG[55] !== ac ? (ea = null != eQ ? ["chatgpt-image-prompt-share-preparation", ac, eO?.item.id, eQ.revision] : aA?.queryKey ?? ["disabled-chatgpt-image-share-query"], eG[52] = eO, eG[53] = eQ, eG[54] = aA?.queryKey, eG[55] = ac, eG[56] = ea) : ea = eG[56], eG[57] !== eQ || eG[58] !== aA?.queryFn ? (et = null != eQ ? () => eQ.createLink("native") : aA?.queryFn ?? eq, eG[57] = eQ, eG[58] = aA?.queryFn, eG[59] = et) : et = eG[59];
            let tf = a0 && (0, U.a)() && eQ?.actionsDisabled !== !0 && (null != eQ || null != aA) && "public" === tm && null == aI;
            eG[60] !== ea || eG[61] !== et || eG[62] !== tf ? (ei = {
                queryKey: ea,
                queryFn: et,
                enabled: tf,
                retry: !1,
                staleTime: 1 / 0
            }, eG[60] = ea, eG[61] = et, eG[62] = tf, eG[63] = ei) : ei = eG[63];
            let tb = (0, o.a)(ei);
            tb.data?.isWorkspaceOnly != null && (tm = tb.data.isWorkspaceOnly ? "workspace" : "public");
            let tv = aI ?? tb.data ?? null,
                tw = null == eQ ? tv : null;
            eG[64] !== e5 || eG[65] !== tw ? (es = () => {
                null != tw && e5?.(tw)
            }, en = [e5, tw], eG[64] = e5, eG[65] = tw, eG[66] = es, eG[67] = en) : (es = eG[66], en = eG[67]), (0, c.useEffect)(es, en);
            let tk = tv?.shareLinkUrl ?? (tg ? a$.share_url : null),
                ty = to && null == tv && tg && a$.current_node_id !== eR,
                tx = "workspace" === tm,
                t_ = "creating" === aU,
                tC = aN && null != at && null == aR,
                tT = to && aX || tC && aH;
            eG[68] !== tv || eG[69] !== aq || eG[70] !== aO || eG[71] !== aJ || eG[72] !== tb.error || eG[73] !== tC || eG[74] !== aQ ? (null == (er = aq) && tC && null != aO && (er = "conversation-load-failed"), null == er && aQ && null == tv && null != aJ && (er = aJ instanceof N.a ? "blocked" : "create-failed"), null == er && null == tv && null != tb.error && (er = tb.error instanceof N.a ? "blocked" : "create-failed"), eG[68] = tv, eG[69] = aq, eG[70] = aO, eG[71] = aJ, eG[72] = tb.error, eG[73] = tC, eG[74] = aQ, eG[75] = er) : er = eG[75];
            let tS = e8.description,
                tA = e8.publicLinkAudience;
            if (ti) {
                let e;
                eG[76] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    ...e8.widgetTitle
                }), eG[76] = e) : e = eG[76], eo = e
            } else if (a4) {
                let e;
                eG[77] !== eQ ? (e = null != eQ ? (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.gifWithPromptTitle",
                    defaultMessage: "Share GIF with prompt"
                }) : (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.gifTitle",
                    defaultMessage: "Share GIF"
                }), eG[77] = eQ, eG[78] = e) : e = eG[78], eo = e
            } else if (null != eQ) {
                let e;
                eG[79] !== eQ.label ? (e = "image_with_prompt" === eQ.label ? (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.imageWithPromptTitle",
                    defaultMessage: "Share image with prompt"
                }) : (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.imagePromptTitle",
                    defaultMessage: "Share prompt with image"
                }), eG[79] = eQ.label, eG[80] = e) : e = eG[80], eo = e
            } else if (a1) {
                let e;
                eG[81] !== th || eG[82] !== e$ || eG[83] !== a5 || eG[84] !== a0 ? (e = a0 || null == th || null != e$ ? (0, i.jsx)(h.a, {
                    ...a5 ? e8.imagesTitle : e8.imageTitle
                }) : (0, i.jsx)(i.Fragment, {
                    children: th
                }), eG[81] = th, eG[82] = e$, eG[83] = a5, eG[84] = a0, eG[85] = e) : e = eG[85], eo = e
            } else if (ts) {
                let e;
                eG[86] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.poll.title",
                    defaultMessage: "Share poll"
                }), eG[86] = e) : e = eG[86], eo = e
            } else if (tt) {
                let e;
                eG[87] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.responseRegionTitle",
                    defaultMessage: "Share"
                }), eG[87] = e) : e = eG[87], eo = e
            } else if (ta) {
                let e;
                eG[88] !== th ? (e = null == th ? (0, i.jsx)(h.a, {
                    ...e8.messageTitle
                }) : (0, i.jsx)(i.Fragment, {
                    children: th
                }), eG[88] = th, eG[89] = e) : e = eG[89], eo = e
            } else if (tn) {
                let e;
                eG[90] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    ...e8.promptTitle
                }), eG[90] = e) : e = eG[90], eo = e
            } else {
                if (tl) {
                    let e;
                    eG[91] !== th ? (e = null == th ? void 0 : (0, i.jsx)(i.Fragment, {
                        children: th
                    }), eG[91] = th, eG[92] = e) : e = eG[92], eo = e
                }
                tx ? tS = ai?.isProjectConversation ? e8.workspaceProjectDescription : e8.workspaceDescription : a$?.is_anonymous === !1 ? tS = e8.attributedDescription : ai?.isProjectConversation && (tS = e8.projectDescription)
            }
            tx && (tA = td ? e8.workspaceImageRightsAudience : e8.workspaceLinkAudience);
            let tI = "copied" === aU ? e8.copied : e8.copyLink;
            ty ? tI = e8.updateLink : null == tk && "copied" !== aU && (tI = e8.createLink), eG[93] !== ay || eG[94] !== aU ? (el = "copied" === aU ? ay.formatMessage(e8.copied) : ay.formatMessage(e8.copyLink), eG[93] = ay, eG[94] = aU, eG[95] = el) : el = eG[95];
            let tj = el;
            eG[96] !== aC || eG[97] !== ay || eG[98] !== au || eG[99] !== ap ? (ec = function(e, a) {
                let t;
                "create-failed" === a && (aC(!1), ap?.onError?.(e));
                let i = a;
                switch (e instanceof P.FetchError && "receiver_file_copy_deferred" === e.errorCode ? i = "receiver-files-unsupported" : e instanceof N.a && (i = "blocked"), "blocked" !== i && M.a.warning("chatgpt_conversation_share_failed", {
                        safe: {
                            stage: i
                        },
                        sensitive: {
                            error: e
                        }
                    }), i) {
                    case "receiver-files-unsupported":
                        t = ay.formatMessage(e8.receiverFileCopyDeferred);
                        break;
                    case "blocked":
                        t = ay.formatMessage(e8.shareBlocked);
                        break;
                    case "copy-failed":
                        t = ay.formatMessage(e8.shareCopyFailed);
                        break;
                    case "create-failed":
                        t = ay.formatMessage(e8.shareCreateFailed)
                }
                return aB(i), az("idle"), au.get(y.f).danger(t, {
                    errorAnalytics: {
                        toastId: {
                            "copy-failed": "failed_to_copy_share_link",
                            "create-failed": "failed_to_generate_share_link",
                            blocked: "chatgptConversationShareDialog.shareBlocked",
                            "receiver-files-unsupported": "chatgptConversationShareDialog.receiverFileCopyDeferred"
                        } [i]
                    }
                }), "receiver-files-unsupported" === i ? "create-failed" : i
            }, eG[96] = aC, eG[97] = ay, eG[98] = au, eG[99] = ap, eG[100] = ec) : ec = eG[100];
            let tM = ec;
            if (eG[101] !== te || eG[102] !== a1 || eG[103] !== ta || eG[104] !== tn || eG[105] !== a3 || eG[106] !== tt || eG[107] !== an?.kind || eG[108] !== ar || eG[109] !== aN || eG[110] !== ah) {
                ed = a3 ? "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER" : "CHATGPT_SHARE_FLOW_ACTOR_SHARER";
                let e = an?.kind === "shared";
                eg = ah ?? "CHATGPT_SHARE_FLOW_SOURCE_CONVERSATION_MENU", a3 && (eg = e ? "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_MODEL_WRITTEN_ACTION" : "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_HEADER"), null != ar ? eh = ar.attachmentType : null != te ? (eh = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_WIDGET", eg = "CHATGPT_SHARE_FLOW_SOURCE_WIDGET_INLINE_ACTION") : a1 ? (eh = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_IMAGE_SHARE", eg = ah ?? "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION") : tt ? (eh = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_RESPONSE_REGION", e || (eg = "CHATGPT_SHARE_FLOW_SOURCE_WIDGET_INLINE_ACTION")) : ta ? (eg = "CHATGPT_SHARE_FLOW_SOURCE_MESSAGE_INLINE_ACTION", aN || (eh = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_MESSAGE_SLICE")) : tn && (eh = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_PROMPT", eg = ah ?? "CHATGPT_SHARE_FLOW_SOURCE_MESSAGE_INLINE_ACTION"), eG[101] = te, eG[102] = a1, eG[103] = ta, eG[104] = tn, eG[105] = a3, eG[106] = tt, eG[107] = an?.kind, eG[108] = ar, eG[109] = aN, eG[110] = ah, eG[111] = ed, eG[112] = eh, eG[113] = eg
            } else ed = eG[111], eh = eG[112], eg = eG[113];
            let tL = (ar?.contentType === "message" || tr) && !aN ? "CHATGPT_SHARE_FLOW_CONTENT_TYPE_POST_SLICE" : "CHATGPT_SHARE_FLOW_CONTENT_TYPE_SHARED_CONVERSATION";
            eG[114] !== tv || eG[115] !== eR || eG[116] !== tg || eG[117] !== a$ || eG[118] !== aC || eG[119] !== eQ || eG[120] !== aA || eG[121] !== tC || eG[122] !== ty || eG[123] !== e1 || eG[124] !== e5 || eG[125] !== as || eG[126] !== ao || eG[127] !== au || eG[128] !== ac || eG[129] !== aY || eG[130] !== aN || eG[131] !== ag || eG[132] !== to || eG[133] !== ap ? (ep = async function(e) {
                let a;
                if (null != ap && (!ax.current || ap.isCurrent?.() === !1)) throw Error("The selected widget is no longer available");
                if (null != ao && (!ax.current || ao.isCurrent?.() === !1)) throw Error("The selected response region is no longer available");
                if (tC) throw Error("Expanded conversation unavailable");
                let t = tv ?? (tg ? {
                    currentNodeId: a$.current_node_id,
                    shareLinkId: a$.share_id,
                    shareLinkUrl: a$.share_url
                } : null);
                if (null == eQ && null != t && !ty) return aC(!0), t;
                if (null != eQ) a = await eQ.createLink(e);
                else if (null != aA) a = await au.queryClient.fetchQuery(aA), e5?.(a);
                else if (null != ap) {
                    if (a = await (0, N.g)(ap.attachment, eR), !ax.current || ap.isCurrent?.() === !1) throw Error("The selected widget changed while sharing")
                } else if (null != ao) {
                    if (a = await (0, N.f)({
                            attachment: ao.attachment,
                            currentNodeId: eR
                        }), !ax.current || ao.isCurrent?.() === !1) throw Error("The selected response region changed while sharing")
                } else a = null == e1 || aN ? null != as ? await au.queryClient.fetchQuery({
                    queryFn: () => (0, N.e)({
                        conversationId: ac,
                        messageId: as.messageId
                    }),
                    queryKey: ["chatgpt-prompt-share", ac, as.messageId],
                    staleTime: 1 / 0
                }) : await (0, N.h)({
                    conversationId: ac,
                    currentNodeId: eR,
                    existingShareLink: a$,
                    title: ag
                }) : await au.queryClient.fetchQuery({
                    queryFn: () => (0, N.d)({
                        conversationId: ac,
                        currentNodeId: eR,
                        messageIds: e1
                    }),
                    queryKey: ["chatgpt-message-share", au.get(u.f), ac, eR, e1],
                    staleTime: 1 / 0
                });
                return aj(a), aC(!0), null != a$ && to && au.queryClient.setQueryData(aY, {
                    ...a$,
                    current_node_id: eR,
                    is_public: !0,
                    is_visible: !0
                }), a
            }, eG[114] = tv, eG[115] = eR, eG[116] = tg, eG[117] = a$, eG[118] = aC, eG[119] = eQ, eG[120] = aA, eG[121] = tC, eG[122] = ty, eG[123] = e1, eG[124] = e5, eG[125] = as, eG[126] = ao, eG[127] = au, eG[128] = ac, eG[129] = aY, eG[130] = aN, eG[131] = ag, eG[132] = to, eG[133] = ap, eG[134] = ep) : ep = eG[134];
            let tE = ep;
            eG[135] !== ed || eG[136] !== eh || eG[137] !== tL || eG[138] !== tv || eG[139] !== te?.metadata || eG[140] !== tE || eG[141] !== tg || eG[142] !== a$ || eG[143] !== eQ || eG[144] !== a8 || eG[145] !== a3 || eG[146] !== ty || eG[147] !== t_ || eG[148] !== e9 || eG[149] !== an || eG[150] !== tM || eG[151] !== au || eG[152] !== ac || eG[153] !== tk || eG[154] !== aL || eG[155] !== eg || eG[156] !== tl ? (eu = async function() {
                if (t_ || a8 || eQ?.actionsDisabled) return;
                let e = (0, R.b)(au, {
                    actor: ed,
                    attachmentType: eh,
                    widgetMetadata: te?.metadata,
                    contentType: tL,
                    conversationId: a3 ? void 0 : ac,
                    shareId: tv?.shareLinkId ?? (tg ? a$.share_id : void 0),
                    shareSessionId: aL,
                    source: eg,
                    sourceShareId: an?.kind === "shared" ? an.sourcePostId : void 0,
                    usedExistingLink: null != tk && !ty
                });
                aB(null), az("creating");
                let a = null != eQ || null == tk || ty ? "create-failed" : "copy-failed",
                    t = tv;
                try {
                    let i, s = tE("copy"),
                        n = s.then(ez);
                    n.catch(eU);
                    let r = (0, T.c)(n);
                    null != r && r.catch(eW);
                    let o = await s;
                    t = o, a = "copy-failed";
                    let l = o.shareLinkUrl;
                    if (null == r) i = await (0, T.b)(l);
                    else try {
                        await r, i = !0
                    } catch (e) {
                        M.a.warning("chatgpt_conversation_share_clipboard_write_failed", {
                            safe: {
                                method: "streaming-clipboard-item"
                            },
                            sensitive: {
                                error: e
                            }
                        }), i = await (0, T.b)(l)
                    }
                    if (!i) {
                        e({
                            result: "copy-failed",
                            shareId: o.shareLinkId
                        }), tM(Error("Failed to copy ChatGPT conversation share link"), "copy-failed");
                        return
                    }
                    e({
                        result: "link-copied",
                        shareId: o.shareLinkId
                    }), az("copied"), tl || ((0, C.a)(au), e9())
                } catch (s) {
                    let i = tM(s, a);
                    e("create-failed" === i ? {
                        result: i,
                        error: s
                    } : {
                        result: i,
                        shareId: t?.shareLinkId
                    })
                }
            }, eG[135] = ed, eG[136] = eh, eG[137] = tL, eG[138] = tv, eG[139] = te?.metadata, eG[140] = tE, eG[141] = tg, eG[142] = a$, eG[143] = eQ, eG[144] = a8, eG[145] = a3, eG[146] = ty, eG[147] = t_, eG[148] = e9, eG[149] = an, eG[150] = tM, eG[151] = au, eG[152] = ac, eG[153] = tk, eG[154] = aL, eG[155] = eg, eG[156] = tl, eG[157] = eu) : eu = eG[157];
            let tP = eu;
            eG[158] !== eh || eG[159] !== tL || eG[160] !== tv || eG[161] !== au || eG[162] !== ac || eG[163] !== aL || eG[164] !== a2 || eG[165] !== eg ? (em = function(e) {
                (0, x.a)(au, n.i, {
                    action: e,
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_SHARER",
                    attachmentType: eh,
                    contentType: tL,
                    conversationId: ac,
                    ...a2 && null != tv && !tv.isWorkspaceOnly ? {
                        shareId: tv.shareLinkId
                    } : {},
                    shareSessionId: aL,
                    source: eg,
                    sheetType: "CHATGPT_SHARE_FLOW_SHEET_TYPE_CUSTOM"
                })
            }, eG[158] = eh, eG[159] = tL, eG[160] = tv, eG[161] = au, eG[162] = ac, eG[163] = aL, eG[164] = a2, eG[165] = eg, eG[166] = em) : em = eG[166];
            let tD = em;
            eG[167] !== tv || eG[168] !== er || eG[169] !== aC || eG[170] !== aA || eG[171] !== ay || eG[172] !== t_ || eG[173] !== e9 || eG[174] !== tM || eG[175] !== au || eG[176] !== ac || eG[177] !== tm || eG[178] !== aL || eG[179] !== eg ? (ef = async function() {
                if (!t_ && null != aA && "public" === tm && null != tv && "blocked" !== er) {
                    aB(null), az("creating");
                    try {
                        let e = await (0, U.b)(au, tv, ac, aL, eg);
                        az("idle"), "shared" === e && (aC(!0), e9()), "failed" === e && au.get(y.f).danger(ay.formatMessage({
                            id: "chatgptConversations.mobileImageShare.nativeFailed",
                            defaultMessage: "Could not open sharing. Try again or copy the link"
                        }), {
                            errorAnalytics: {
                                toastId: "chatgptConversations.mobileImageShare.nativeFailed"
                            }
                        })
                    } catch (e) {
                        tM(e, "create-failed")
                    }
                }
            }, eG[167] = tv, eG[168] = er, eG[169] = aC, eG[170] = aA, eG[171] = ay, eG[172] = t_, eG[173] = e9, eG[174] = tM, eG[175] = au, eG[176] = ac, eG[177] = tm, eG[178] = aL, eG[179] = eg, eG[180] = ef) : ef = eG[180];
            let tN = ef;
            eG[181] !== ed || eG[182] !== eh || eG[183] !== tL || eG[184] !== tv || eG[185] !== th || eG[186] !== te?.metadata || eG[187] !== tE || eG[188] !== tg || eG[189] !== a$ || eG[190] !== eQ || eG[191] !== a9 || eG[192] !== ay || eG[193] !== a1 || eG[194] !== a8 || eG[195] !== tn || eG[196] !== a3 || eG[197] !== ty || eG[198] !== t_ || eG[199] !== e0?.unsupportedDestinationFallback || eG[200] !== e9 || eG[201] !== an || eG[202] !== tM || eG[203] !== au || eG[204] !== ac || eG[205] !== tm || eG[206] !== aU || eG[207] !== aL || eG[208] !== a2 || eG[209] !== eg || eG[210] !== a0 ? (eb = async function(e, a) {
                var t;
                let i;
                if (t_ || a8 || "public" !== tm || eQ?.actionsDisabled) return;
                a.preventDefault(), a3 || tn || "line" !== (t = e) && "linkedin" !== t && "reddit" !== t && "x" !== t || (0, R.g)(au, e, a1 ? a9 : void 0);
                let s = a2 && a1 ? ac : void 0;
                (0, R.f)(au, {
                    actor: ed,
                    attachmentType: eh,
                    conversationId: s,
                    widgetMetadata: te?.metadata,
                    contentType: tL,
                    destination: function(e) {
                        switch (e) {
                            case "messages":
                                return "CHATGPT_SHARE_FLOW_DESTINATION_MESSAGES";
                            case "whatsapp":
                                return "CHATGPT_SHARE_FLOW_DESTINATION_WHATSAPP";
                            case "telegram":
                                return "CHATGPT_SHARE_FLOW_DESTINATION_TELEGRAM";
                            case "facebook":
                                return "CHATGPT_SHARE_FLOW_DESTINATION_FACEBOOK_FEED";
                            case "facebook-messenger":
                                return "CHATGPT_SHARE_FLOW_DESTINATION_FACEBOOK_MESSENGER";
                            case "facebook-stories":
                                return "CHATGPT_SHARE_FLOW_DESTINATION_FACEBOOK_STORIES";
                            case "instagram-stories":
                                return "CHATGPT_SHARE_FLOW_DESTINATION_INSTAGRAM_STORIES";
                            case "kakao-talk":
                                return "CHATGPT_SHARE_FLOW_DESTINATION_KAKAO_TALK";
                            case "snapchat-stories":
                                return "CHATGPT_SHARE_FLOW_DESTINATION_SNAPCHAT";
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
                    shareId: tv?.shareLinkId ?? (tg && !ty ? a$.share_id : void 0),
                    shareSessionId: aL,
                    source: eg,
                    sourceShareId: an?.kind === "shared" ? an.sourcePostId : void 0
                });
                let n = a0 && "facebook" !== e && (0, V.g)(e);
                if (n && e0?.unsupportedDestinationFallback === "app-store") {
                    let t = (0, r.a)() ? "android" : (0, r.c)() || (0, r.b)() ? "ios" : null,
                        i = null == t ? null : (0, V.c)(e, t);
                    if (null != i) return void(0, b.e)({
                        event: a,
                        href: i,
                        initiator: "open_in_browser_bridge",
                        openTarget: "external-browser"
                    })
                }
                let o = null != tv && null == eQ || "messages" === e || n ? null : window.open("", "_blank");
                null != o && (o.opener = null), aB(null), az("creating");
                try {
                    i = await tE("social")
                } catch (e) {
                    o?.close(), e instanceof N.a || (0, R.e)(au, {
                        actor: ed,
                        attachmentType: eh,
                        conversationId: s,
                        widgetMetadata: te?.metadata,
                        contentType: tL,
                        shareSessionId: aL,
                        source: eg,
                        sourceShareId: an?.kind === "shared" ? an.sourcePostId : void 0
                    }), tM(e, "create-failed");
                    return
                }
                if (!0 === i.isWorkspaceOnly) {
                    o?.close(), az(aU);
                    return
                }
                if (n) {
                    let e = await (0, U.b)(au, i, ac, aL, eg);
                    az(aU), "shared" === e ? e9() : "failed" === e && au.get(y.f).danger(ay.formatMessage({
                        id: "chatgptConversations.mobileImageShare.nativeFailed",
                        defaultMessage: "Could not open sharing. Try again or copy the link"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.mobileImageShare.nativeFailed"
                        }
                    });
                    return
                }
                let l = "facebook" === e ? `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(i.shareLinkUrl)}` : (0, V.d)({
                    destination: e,
                    isAppleDevice: (0, r.c)() || (0, r.b)(),
                    shareUrl: i.shareLinkUrl,
                    title: i.title ?? th
                });
                if (null == l) {
                    o?.close(), az(aU);
                    return
                }
                "messages" === e ? (window.location.href = l, (0, b.g)({
                    href: l,
                    modifiedClick: !1
                })) : null != o ? (o.location.href = l, (0, b.g)({
                    href: l,
                    modifiedClick: 1 === a.button || a.metaKey || a.ctrlKey,
                    openTarget: "external-browser"
                })) : (0, b.e)({
                    event: a,
                    href: l,
                    initiator: "open_in_browser_bridge",
                    openTarget: "external-browser"
                }), az(aU)
            }, eG[181] = ed, eG[182] = eh, eG[183] = tL, eG[184] = tv, eG[185] = th, eG[186] = te?.metadata, eG[187] = tE, eG[188] = tg, eG[189] = a$, eG[190] = eQ, eG[191] = a9, eG[192] = ay, eG[193] = a1, eG[194] = a8, eG[195] = tn, eG[196] = a3, eG[197] = ty, eG[198] = t_, eG[199] = e0?.unsupportedDestinationFallback, eG[200] = e9, eG[201] = an, eG[202] = tM, eG[203] = au, eG[204] = ac, eG[205] = tm, eG[206] = aU, eG[207] = aL, eG[208] = a2, eG[209] = eg, eG[210] = a0, eG[211] = eb) : eb = eG[211];
            let tF = eb;
            eG[212] !== eO || eG[213] !== a9 || eG[214] !== ay || eG[215] !== aK || eG[216] !== a5 || eG[217] !== a8 || eG[218] !== tD || eG[219] !== au || eG[220] !== ac ? (ev = async function() {
                if (null == eO || aK || a8) return;
                (0, R.g)(au, "download", a9);
                let e = [eO.item, ...eO.additionalImages ?? []].filter(eH);
                0 !== e.length && ((0, z.b)(au, {
                    image: eO.downloadAnalyticsImage ?? eO.item,
                    conversationId: ac,
                    entryPoint: "CHATGPT_IMAGE_DOWNLOAD_ENTRY_POINT_CUSTOM_SHARE_SHEET",
                    downloadScope: a5 ? "CHATGPT_IMAGE_DOWNLOAD_SCOPE_SERIES" : "CHATGPT_IMAGE_DOWNLOAD_SCOPE_SINGLE",
                    requestedImageCount: e.length,
                    isParagen: eO.downloadIsParagen
                }), aV(!0), tD("CHATGPT_SHARE_FLOW_ACTION_DOWNLOAD_SELECTED"), await (0, H.a)(au, {
                    images: e,
                    intl: ay,
                    serverConversationId: (0, O.c)(ac),
                    logIndividualDownloads: !1
                }).then(e => {
                    "downloaded" === e && (0, z.e)(au, ac, eO.item)
                }).finally(() => {
                    aV(!1)
                }))
            }, eG[212] = eO, eG[213] = a9, eG[214] = ay, eG[215] = aK, eG[216] = a5, eG[217] = a8, eG[218] = tD, eG[219] = au, eG[220] = ac, eG[221] = ev) : ev = eG[221];
            let tG = ev;
            eG[222] !== eO?.additionalImages?.length || eG[223] !== a5 ? (ew = a5 ? (0, i.jsx)(h.a, {
                id: "chatgptConversations.shareDialog.imageSeriesCount",
                defaultMessage: "Sharing {imageCount} images together",
                values: {
                    imageCount: 1 + (eO?.additionalImages?.length ?? 0)
                }
            }) : void 0, eG[222] = eO?.additionalImages?.length, eG[223] = a5, eG[224] = ew) : ew = eG[224];
            let tR = ew,
                tO = tR;
            if (!a5 && !tl) {
                let e;
                eG[225] !== tS ? (e = (0, i.jsx)(h.a, {
                    ...tS
                }), eG[225] = tS, eG[226] = e) : e = eG[226], tO = e
            }
            if (null != eQ) {
                let e;
                eG[227] !== a0 ? (e = a0 ? (0, i.jsx)(h.a, {
                    id: "imagePromptShare.audience",
                    defaultMessage: "Anyone with the link can try this prompt"
                }) : void 0, eG[227] = a0, eG[228] = e) : e = eG[228], tO = e
            } else if (a0) {
                let e, a, t;
                eG[229] !== tm ? (e = "public" === tm ? (0, i.jsx)(h.a, {
                    id: "chatgptConversations.mobileImageShare.publicAudience",
                    defaultMessage: "Anyone with the link can view"
                }) : null, eG[229] = tm, eG[230] = e) : e = eG[230], eG[231] !== tm ? (a = "public" !== tm && (0, i.jsx)(h.a, {
                    id: "chatgptConversations.mobileImageShare.workspaceAudience",
                    defaultMessage: "Only workspace members with the link can view"
                }), eG[231] = tm, eG[232] = a) : a = eG[232], eG[233] !== e || eG[234] !== a ? (t = (0, i.jsxs)(i.Fragment, {
                    children: [e, a]
                }), eG[233] = e, eG[234] = a, eG[235] = t) : t = eG[235], tO = t
            }
            if (a0 ? ek = "responsiveSheet" : tl && (ek = "share"), eG[236] !== e0?.layout || eG[237] !== a0 ? (a0 && (ey = e0?.layout === "two-rows" ? "imageSheetTwoRows" : "imageSheet"), eG[236] = e0?.layout, eG[237] = a0, eG[238] = ey) : ey = eG[238], null != eQ) {
                let e;
                eG[239] !== eO?.previewSrc || eG[240] !== eQ || eG[241] !== t_ || eG[242] !== a6 ? (e = () => eQ.preview(t_, eO?.previewSrc ?? a6 ?? null, () => {
                    aB(null), az("idle")
                }), eG[239] = eO?.previewSrc, eG[240] = eQ, eG[241] = t_, eG[242] = a6, eG[243] = e) : e = eG[243], ex = e
            } else {
                let e;
                eG[244] !== te || eG[245] !== aR || eG[246] !== aF || eG[247] !== eO || eG[248] !== ey || eG[249] !== ay || eG[250] !== a7 || eG[251] !== a5 || eG[252] !== ti || eG[253] !== at || eG[254] !== aa || eG[255] !== as || eG[256] !== a6 || eG[257] !== al || eG[258] !== ao || eG[259] !== au.queryClient || eG[260] !== ac || eG[261] !== aL || eG[262] !== aN || eG[263] !== a0 ? (e = e => null != eO ? (0, i.jsx)(A.a, {
                    ariaLabel: a5 ? ay.formatMessage(e8.imagesPreview) : eO.alt,
                    variant: "image",
                    classicImagePreviewEligible: !a5 && !a0,
                    presentation: ey,
                    children: a5 || null == eO.previewSrc ? (0, i.jsx)(e4, {
                        src: a6,
                        isLoading: a7
                    }) : (0, i.jsx)("img", {
                        alt: eO.alt,
                        className: a0 ? void 0 : "block size-full object-contain",
                        referrerPolicy: "no-referrer",
                        src: eO.previewSrc
                    })
                }) : (0, i.jsxs)(i.Fragment, {
                    children: [ao?.preview != null && (0, i.jsx)(A.a, {
                        ariaLabel: ay.formatMessage({
                            id: "chatgptConversations.shareDialog.responseRegionPreviewLabel",
                            defaultMessage: "Preview of the shared content"
                        }),
                        expandedContent: ao.preview,
                        expandPreviewEventLogger: e,
                        variant: "response",
                        children: ao.preview
                    }), null == ao && te?.preview != null && ti && (0, i.jsx)(A.a, {
                        ariaLabel: ay.formatMessage({
                            id: "shareDialog.widget.previewLabel",
                            defaultMessage: "Preview of the shared widget"
                        }),
                        expandedContent: te.preview,
                        expandPreviewEventLogger: e,
                        variant: "response",
                        children: te.preview
                    }), null == ao && te?.preview != null && !ti && (0, i.jsx)(A.a, {
                        expandedContent: te.preview,
                        expandPreviewEventLogger: e,
                        variant: "response",
                        children: te.preview
                    }), null == ao && null == te && (0, i.jsx)(F.b, {
                        expandPreviewEventLogger: e,
                        prompt: as,
                        response: aN ? void 0 : al,
                        serverConversationId: ac,
                        expandedHistory: (null == al || aN) && null != at && null == aR ? {
                            load: async e => (await au.queryClient.fetchQuery({
                                queryKey: aF,
                                queryFn: () => at(e),
                                staleTime: 1 / 0
                            })).turns,
                            sessionId: aL
                        } : void 0,
                        turns: null == al || aN ? aR?.turns ?? aa : void 0
                    })]
                }), eG[244] = te, eG[245] = aR, eG[246] = aF, eG[247] = eO, eG[248] = ey, eG[249] = ay, eG[250] = a7, eG[251] = a5, eG[252] = ti, eG[253] = at, eG[254] = aa, eG[255] = as, eG[256] = a6, eG[257] = al, eG[258] = ao, eG[259] = au.queryClient, eG[260] = ac, eG[261] = aL, eG[262] = aN, eG[263] = a0, eG[264] = e) : e = eG[264], ex = e
            }
            if (a0) {
                let e, a = ex;
                eG[265] !== eQ || eG[266] !== tR || eG[267] !== a ? (e = e => {
                    let t = a(e);
                    return (0, i.jsxs)(i.Fragment, {
                        children: [null == eQ ? t : (0, i.jsx)("div", {
                            className: "px-6",
                            children: t
                        }), null != tR && (0, i.jsx)("p", {
                            className: "mt-3 text-center text-sm text-secondary",
                            children: tR
                        })]
                    })
                }, eG[265] = eQ, eG[266] = tR, eG[267] = a, eG[268] = e) : e = eG[268], ex = e
            }
            let tH = eo,
                tW = tO;
            eG[269] !== tA || eG[270] !== tl ? (e_ = tl ? void 0 : (0, i.jsx)(h.a, {
                ...tA
            }), eG[269] = tA, eG[270] = tl, eG[271] = e_) : e_ = eG[271], eG[272] !== tI ? (eC = (0, i.jsx)(h.a, {
                ...tI
            }), eG[272] = tI, eG[273] = eC) : eC = eG[273];
            let tU = eQ?.actionsDisabled || tT || tC || a8 || "blocked" === er,
                tz = t_ || tT || af,
                tq = !tl && t_;
            eG[274] !== tD || eG[275] !== a2 || eG[276] !== tl ? (eT = tl ? e => {
                a2 && tD("CHATGPT_SHARE_FLOW_ACTION_SHEET_PRESENTED"), e.preventDefault(), e.currentTarget instanceof HTMLElement && e.currentTarget.focus()
            } : void 0, eG[274] = tD, eG[275] = a2, eG[276] = tl, eG[277] = eT) : eT = eG[277];
            let tB = ek,
                tK = a0 ? "imageSheet" : void 0,
                tV = a0 && e0?.layout === "two-rows";
            eG[278] !== ak || eG[279] !== av || eG[280] !== aw || eG[281] !== tv || eG[282] !== eR || eG[283] !== er || eG[284] !== te || eG[285] !== tG || eG[286] !== tN || eG[287] !== tF || eG[288] !== eO || eG[289] !== eQ?.actionsDisabled || eG[290] !== a9 || eG[291] !== aK || eG[292] !== tC || eG[293] !== tT || eG[294] !== a1 || eG[295] !== a8 || eG[296] !== af || eG[297] !== tn || eG[298] !== a3 || eG[299] !== t_ || eG[300] !== e1 || eG[301] !== e0 || eG[302] !== e2 || eG[303] !== e9 || eG[304] !== as || eG[305] !== ar || eG[306] !== tj || eG[307] !== a6 || eG[308] !== ao || eG[309] !== au || eG[310] !== ac || eG[311] !== tm || eG[312] !== aN || eG[313] !== to || eG[314] !== a0 || eG[315] !== tl || eG[316] !== ap ? (eS = tl ? (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(eD, {
                    projectStyleEligible: !a3 && null == as && null == te && null == ao && (a1 || null != e1 && !aN),
                    mobileImageActions: a0 && null != e0 ? {
                        experience: e0,
                        canNativeShare: "public" === tm && null != tv && (0, U.a)(tv?.shareLinkUrl),
                        onNativeShare: () => {
                            tN()
                        },
                        rowScrollPositions: e2
                    } : void 0,
                    copyLabel: tj,
                    copyDisabled: eQ?.actionsDisabled || tT || tC || t_ || a8 || "blocked" === er,
                    isBusy: t_ || tT || af,
                    isDownloading: aK,
                    socialDestinationsDisabled: eQ?.actionsDisabled || tT || tC || t_ || a8 || "public" !== tm || "blocked" === er,
                    showSocialDestinations: "public" === tm,
                    additionalActions: void 0,
                    onDownload: null == eO || a8 ? void 0 : () => {
                        tG()
                    },
                    onCopy: () => {
                        a3 || tn || (0, R.g)(au, "copy", a1 ? a9 : void 0)
                    },
                    onSocialShare: (e, a) => {
                        tF(e, a)
                    }
                })
            }) : void 0, eG[278] = ak, eG[279] = av, eG[280] = aw, eG[281] = tv, eG[282] = eR, eG[283] = er, eG[284] = te, eG[285] = tG, eG[286] = tN, eG[287] = tF, eG[288] = eO, eG[289] = eQ?.actionsDisabled, eG[290] = a9, eG[291] = aK, eG[292] = tC, eG[293] = tT, eG[294] = a1, eG[295] = a8, eG[296] = af, eG[297] = tn, eG[298] = a3, eG[299] = t_, eG[300] = e1, eG[301] = e0, eG[302] = e2, eG[303] = e9, eG[304] = as, eG[305] = ar, eG[306] = tj, eG[307] = a6, eG[308] = ao, eG[309] = au, eG[310] = ac, eG[311] = tm, eG[312] = aN, eG[313] = to, eG[314] = a0, eG[315] = tl, eG[316] = ap, eG[317] = eS) : eS = eG[317], eG[318] !== ed || eG[319] !== eh || eG[320] !== tL || eG[321] !== te?.metadata.widgetName || eG[322] !== te?.metadata.widgetType || eG[323] !== ac || eG[324] !== aL || eG[325] !== eg ? (eA = JSON.stringify([ed, eh, tL, ac, aL, eg, te?.metadata.widgetName, te?.metadata.widgetType]), eG[318] = ed, eG[319] = eh, eG[320] = tL, eG[321] = te?.metadata.widgetName, eG[322] = te?.metadata.widgetType, eG[323] = ac, eG[324] = aL, eG[325] = eg, eG[326] = eA) : eA = eG[326], eG[327] !== ed || eG[328] !== eh || eG[329] !== tL || eG[330] !== te?.metadata || eG[331] !== au || eG[332] !== ac || eG[333] !== aL || eG[334] !== eg ? (eI = () => (0, R.a)(au, {
                actor: ed,
                attachmentType: eh,
                contentType: tL,
                conversationId: ac,
                shareSessionId: aL,
                source: eg,
                widgetMetadata: te?.metadata
            }), eG[327] = ed, eG[328] = eh, eG[329] = tL, eG[330] = te?.metadata, eG[331] = au, eG[332] = ac, eG[333] = aL, eG[334] = eg, eG[335] = eI) : eI = eG[335], eG[336] !== ex || eG[337] !== eA || eG[338] !== eI ? (ej = (0, i.jsx)(eV, {
                createEventLogger: eI,
                children: ex
            }, eA), eG[336] = ex, eG[337] = eA, eG[338] = eI, eG[339] = ej) : ej = eG[339], eG[340] !== aD || eG[341] !== e$ || eG[342] !== ay || eG[343] !== tT || eG[344] !== ts || eG[345] !== t_ || eG[346] !== aE || eG[347] !== tc || eG[348] !== tm || eG[349] !== td || eG[350] !== a0 || eG[351] !== tl ? (eM = tl ? (0, i.jsxs)(i.Fragment, {
                children: [aD && (0, i.jsx)(f.e, {
                    className: "pt-5",
                    children: (0, i.jsx)("div", {
                        className: "mx-auto w-80 max-w-full",
                        children: (0, i.jsx)(w.a, {
                            ariaLabel: ay.formatMessage({
                                id: "chatgptConversations.shareDialog.messageScope.label",
                                defaultMessage: "Content to share"
                            }),
                            buttonClassName: "z-20",
                            fullWidth: !0,
                            onSelect: e => {
                                e !== aE && (aP(e), aj(null), aB(null), az("idle"))
                            },
                            options: [{
                                id: "message",
                                disabled: t_ || tT,
                                label: (0, i.jsx)(h.a, {
                                    id: "chatgptConversations.shareDialog.messageScope.response",
                                    defaultMessage: "This response"
                                })
                            }, {
                                id: "conversation",
                                disabled: t_ || tT,
                                label: (0, i.jsx)(h.a, {
                                    id: "chatgptConversations.shareDialog.messageScope.conversation",
                                    defaultMessage: "Entire conversation"
                                })
                            }],
                            selectedId: aE,
                            variant: "form",
                            wrapLabels: !0
                        })
                    })
                }), null != e$ && (a0 ? (0, i.jsx)("div", {
                    className: "px-6 pt-3",
                    children: e$(t_)
                }) : (0, i.jsx)(f.e, {
                    className: "pt-5",
                    children: e$(t_)
                })), !a0 && (0, i.jsx)(eY, {
                    audience: tm,
                    contentType: tc,
                    isPoll: ts,
                    showImageRightsNotice: td
                })]
            }) : void 0, eG[340] = aD, eG[341] = e$, eG[342] = ay, eG[343] = tT, eG[344] = ts, eG[345] = t_, eG[346] = aE, eG[347] = tc, eG[348] = tm, eG[349] = td, eG[350] = a0, eG[351] = tl, eG[352] = eM) : eM = eG[352], eG[353] !== er || eG[354] !== eQ || eG[355] !== aW || eG[356] !== tk ? (eL = null == er ? void 0 : {
                content: (0, i.jsx)(e7, {
                    error: er
                }),
                copyUrl: "copy-failed" === er ? tk : void 0,
                onRetry: "conversation-load-failed" === er ? () => {
                    aW()
                } : void 0,
                preventsSharing: "blocked" === er && null == eQ || "conversation-load-failed" === er
            }, eG[353] = er, eG[354] = eQ, eG[355] = aW, eG[356] = tk, eG[357] = eL) : eL = eG[357];
            let tY = td && !tx && !a1,
                tQ = !tr || ta;
            return eG[358] !== Z || eG[359] !== tY || eG[360] !== tQ ? (eE = (0, i.jsx)(e6, {
                showImageRightsNotice: tY,
                showContentNotices: tQ,
                privacyNotices: Z
            }), eG[358] = Z, eG[359] = tY, eG[360] = tQ, eG[361] = eE) : eE = eG[361], eG[362] !== aT || eG[363] !== tD || eG[364] !== a2 ? (eP = () => {
                a2 && tD("CHATGPT_SHARE_FLOW_ACTION_DISMISSED"), aT()
            }, eG[362] = aT, eG[363] = tD, eG[364] = a2, eG[365] = eP) : eP = eG[365], eG[366] !== tP ? (eN = () => {
                tP()
            }, eG[366] = tP, eG[367] = eN) : eN = eG[367], eG[368] !== ek || eG[369] !== eo || eG[370] !== th || eG[371] !== tO || eG[372] !== e_ || eG[373] !== eC || eG[374] !== tU || eG[375] !== tz || eG[376] !== tq || eG[377] !== eT || eG[378] !== tK || eG[379] !== tV || eG[380] !== eS || eG[381] !== ej || eG[382] !== eM || eG[383] !== eL || eG[384] !== eE || eG[385] !== eP || eG[386] !== eN ? (eF = (0, i.jsx)(S.a, {
                threadTitle: th,
                title: tH,
                subtitle: tW,
                audience: e_,
                actionLabel: eC,
                actionDisabled: tU,
                isBusy: tz,
                isDismissalDisabled: tq,
                onOpenAutoFocus: eT,
                size: tB,
                presentation: tK,
                compactImageSheetFooter: tV,
                footer: eS,
                preview: ej,
                info: eM,
                error: eL,
                notices: eE,
                onClose: eP,
                onSubmit: eN
            }), eG[368] = ek, eG[369] = eo, eG[370] = th, eG[371] = tO, eG[372] = e_, eG[373] = eC, eG[374] = tU, eG[375] = tz, eG[376] = tq, eG[377] = eT, eG[378] = tK, eG[379] = tV, eG[380] = eS, eG[381] = ej, eG[382] = eM, eG[383] = eL, eG[384] = eE, eG[385] = eP, eG[386] = eN, eG[387] = eF) : eF = eG[387], eF
        }

        function eH(e) {
            return null != e.src && "completed" === e.status && !e.isPreview
        }

        function eW() {}

        function eU() {}

        function ez(e) {
            let {
                shareLinkUrl: a
            } = e;
            return a
        }

        function eq() {
            throw Error("Image share is unavailable")
        }

        function eB() {
            return E.CodexRequest.safeGet("/wham/accounts/check")
        }

        function eK() {
            return crypto.randomUUID()
        }

        function eV(e) {
            let a, t = (0, s.c)(3),
                {
                    children: i,
                    createEventLogger: n
                } = e,
                [r] = (0, c.useState)(n);
            return t[0] !== i || t[1] !== r ? (a = i(r), t[0] = i, t[1] = r, t[2] = a) : a = t[2], a
        }

        function eY(e) {
            let a, t, n, r, o, l, c, d = (0, s.c)(58),
                {
                    audience: g,
                    contentType: p,
                    isPoll: u,
                    showImageRightsNotice: m
                } = e,
                b = "workspace" === g ? v.Ve : v._d;
            if ("workspace" === g) {
                let e, s;
                if (m) {
                    let a;
                    d[0] !== p ? (a = (0, i.jsx)(h.a, {
                        id: "chatgptConversations.shareDialog.workspaceMediaRightsAudienceWithLearnMore",
                        defaultMessage: "Links are visible to workspace members only. {contentType, select, gif {Confirm you have the rights to share this GIF.} images {Confirm you have the rights to share these images.} other {Confirm you have the rights to share this image.}} {contentType, select, conversation {Memory sources won't be shared with viewers. } other {}}<learnMore>Learn more</learnMore>",
                        values: {
                            contentType: p,
                            learnMore: e5
                        }
                    }), d[0] = p, d[1] = a) : a = d[1], e = a
                } else if ("conversation" === p) {
                    let a;
                    d[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, i.jsx)(h.a, {
                        id: "chatgptConversations.shareDialog.workspaceConversationMemoryDisclosure",
                        defaultMessage: "Links are visible to workspace members only. Memory sources won't be shared with viewers. <learnMore>Learn more</learnMore>",
                        values: {
                            learnMore: e3
                        }
                    }), d[2] = a) : a = d[2], e = a
                } else {
                    let a;
                    d[3] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, i.jsx)(h.a, {
                        ...e8.workspaceLinksVisibleWithLearnMore,
                        values: {
                            learnMore: e2
                        }
                    }), d[3] = a) : a = d[3], e = a
                }
                if (d[4] !== e ? (s = (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(i.Fragment, {
                            children: e
                        }), null]
                    }), d[4] = e, d[5] = s) : s = d[5], t = s, "widget" === p) {
                    let e;
                    d[6] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e8.shareLinkToWidget
                    }), d[6] = e) : e = d[6], a = e
                } else if ("images" === p) {
                    let e;
                    d[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e8.shareLinkToImages
                    }), d[7] = e) : e = d[7], a = e
                } else if ("gif" === p) {
                    let e;
                    d[8] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e8.shareLinkToGif
                    }), d[8] = e) : e = d[8], a = e
                } else if ("image" === p) {
                    let e;
                    d[9] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e8.shareLinkToImage
                    }), d[9] = e) : e = d[9], a = e
                } else if ("response-region" === p) {
                    let e;
                    d[10] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        id: "chatgptConversations.shareDialog.responseRegion.workspaceTitle",
                        defaultMessage: "Share a link to this content"
                    }), d[10] = e) : e = d[10], a = e
                } else if ("message" === p) {
                    let e;
                    d[11] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e8.shareLinkToMessage
                    }), d[11] = e) : e = d[11], a = e
                } else if ("prompt" === p) {
                    let e;
                    d[12] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e8.shareLinkToPrompt
                    }), d[12] = e) : e = d[12], a = e
                } else {
                    let e;
                    d[13] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e8.shareLinkToConversation
                    }), d[13] = e) : e = d[13], a = e
                }
            } else if ("unknown" === g) {
                if ("images" === p) {
                    let e;
                    d[14] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        id: "chatgptConversations.shareDialog.imagesRightsDisclaimer",
                        defaultMessage: "Confirm you have the rights to share these images."
                    }), d[14] = e) : e = d[14], t = e
                } else if ("gif" === p) {
                    let e;
                    d[15] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        id: "chatgptConversations.shareDialog.gifLicenseDisclaimer",
                        defaultMessage: "Confirm you have the rights to share this GIF"
                    }), d[15] = e) : e = d[15], t = e
                } else if ("image" === p) {
                    let e;
                    d[16] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e8.imageLicenseDisclaimer
                    }), d[16] = e) : e = d[16], t = e
                }
                if ("widget" === p) {
                    let e;
                    d[17] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e8.shareLinkToWidget
                    }), d[17] = e) : e = d[17], a = e
                } else if ("images" === p) {
                    let e;
                    d[18] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e8.shareLinkToImages
                    }), d[18] = e) : e = d[18], a = e
                } else if ("gif" === p) {
                    let e;
                    d[19] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e8.shareLinkToGif
                    }), d[19] = e) : e = d[19], a = e
                } else if ("image" === p) {
                    let e;
                    d[20] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e8.shareLinkToImage
                    }), d[20] = e) : e = d[20], a = e
                } else if ("response-region" === p) {
                    let e;
                    d[21] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        id: "chatgptConversations.shareDialog.responseRegion.unknownAudienceTitle",
                        defaultMessage: "Share a link to this content"
                    }), d[21] = e) : e = d[21], a = e
                } else if ("message" === p) {
                    let e;
                    d[22] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e8.shareLinkToMessage
                    }), d[22] = e) : e = d[22], a = e
                } else if ("prompt" === p) {
                    let e;
                    d[23] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e8.shareLinkToPrompt
                    }), d[23] = e) : e = d[23], a = e
                } else {
                    let e;
                    d[24] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e8.shareLinkToConversation
                    }), d[24] = e) : e = d[24], a = e
                }
            } else if ("widget" === p) {
                let e, s;
                d[25] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    ...e8.sharePublicLinkToWidget
                }), d[25] = e) : e = d[25], a = e, d[26] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(h.a, {
                            id: "chatgptConversations.widgetShare.publicAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access this widget. <learnMore>Learn more</learnMore>",
                            values: {
                                learnMore: e0
                            }
                        })
                    }), null]
                }), d[26] = s) : s = d[26], t = s
            } else if ("images" === p) {
                let e, s;
                d[27] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    ...e8.sharePublicLinkToImages
                }), d[27] = e) : e = d[27], a = e, d[28] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(h.a, {
                            id: "chatgptConversations.shareDialog.imagesPublicLinkAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access these images. Confirm you have the rights to share these images. <learnMore>Learn more</learnMore>",
                            values: {
                                learnMore: e1
                            }
                        })
                    }), null]
                }), d[28] = s) : s = d[28], t = s
            } else if ("gif" === p) {
                let e, s;
                d[29] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.sharePublicLinkToGif",
                    defaultMessage: "Share a public link to this GIF"
                }), d[29] = e) : e = d[29], a = e, d[30] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.gifPublicLinkAudienceWithLearnMore",
                    defaultMessage: "Anyone with this link can access this GIF. Confirm you have the rights to share this GIF. <learnMore>Learn more</learnMore>",
                    values: {
                        learnMore: eZ
                    }
                }), d[30] = s) : s = d[30], t = s
            } else if ("image" === p) {
                let e, s;
                d[31] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    ...e8.sharePublicLinkToImage
                }), d[31] = e) : e = d[31], a = e, d[32] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(h.a, {
                            id: "chatgptConversations.shareDialog.imagePublicLinkAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access this image. Confirm you have the rights to share this image. <learnMore>Learn more</learnMore>",
                            values: {
                                learnMore: eX
                            }
                        })
                    }), null]
                }), d[32] = s) : s = d[32], t = s
            } else if ("response-region" === p) {
                let e, s;
                d[33] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.responseRegion.publicTitle",
                    defaultMessage: "Share a public link to this content"
                }), d[33] = e) : e = d[33], a = e, d[34] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.responseRegion.publicAudience",
                    defaultMessage: "Anyone with this link can access this content."
                }), d[34] = s) : s = d[34], t = s
            } else if ("message" === p) {
                let e, s;
                d[35] !== u ? (e = u ? (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.poll.publicLinkTitle",
                    defaultMessage: "Share a public link to this poll"
                }) : (0, i.jsx)(h.a, {
                    ...e8.sharePublicLinkToMessage
                }), d[35] = u, d[36] = e) : e = d[36], a = e, d[37] !== u ? (s = (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(i.Fragment, {
                        children: u ? (0, i.jsx)(h.a, {
                            id: "chatgptConversations.shareDialog.poll.publicAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access and vote on this poll. <learnMore>Learn more</learnMore>",
                            values: {
                                learnMore: eJ
                            }
                        }) : (0, i.jsx)(h.a, {
                            id: "chatgptConversations.shareDialog.messagePublicLinkAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access this message. <learnMore>Learn more</learnMore>",
                            values: {
                                learnMore: e$
                            }
                        })
                    }), null]
                }), d[37] = u, d[38] = s) : s = d[38], t = s
            } else if ("prompt" === p) {
                let e, s;
                d[39] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.prompt.info.title.public",
                    defaultMessage: "Share a public link to this prompt"
                }), d[39] = e) : e = d[39], a = e, d[40] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(h.a, {
                            id: "chatgptConversations.shareDialog.prompt.info.description.publicWithLearnMore",
                            defaultMessage: "Anyone with this link can access this prompt. <learnMore>Learn more</learnMore>",
                            values: {
                                learnMore: eQ
                            }
                        })
                    }), null]
                }), d[40] = s) : s = d[40], t = s
            } else {
                let e, s;
                d[41] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    ...e8.sharePublicLinkToConversation
                }), d[41] = e) : e = d[41], a = e, d[42] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsx)(B, {
                    includeConversationAudience: !0
                }), d[42] = s) : s = d[42], t = s
            }
            return d[43] !== b || d[44] !== g ? (n = "unknown" === g ? null : (0, i.jsx)(b, {
                className: "public" === g ? "relative -start-px" : void 0,
                "aria-hidden": "true"
            }), d[43] = b, d[44] = g, d[45] = n) : n = d[45], d[46] !== n || d[47] !== a ? (r = (0, i.jsxs)("div", {
                className: "flex items-center gap-1 text-xs leading-4 font-bold text-default",
                children: [n, a]
            }), d[46] = n, d[47] = a, d[48] = r) : r = d[48], d[49] !== t ? (o = null == t ? null : (0, i.jsx)("div", {
                className: "mt-1.5 text-xs leading-4 text-codex-description browser:text-secondary",
                children: t
            }), d[49] = t, d[50] = o) : o = d[50], d[51] !== g || d[52] !== p ? (l = "unknown" === g && "conversation" === p ? (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)("div", {
                    className: "mt-1.5 text-xs leading-4 text-secondary",
                    children: (0, i.jsx)(B, {})
                })
            }) : null, d[51] = g, d[52] = p, d[53] = l) : l = d[53], d[54] !== r || d[55] !== o || d[56] !== l ? (c = (0, i.jsx)(f.e, {
                spacing: "large",
                children: (0, i.jsxs)("div", {
                    className: "w-full text-start select-none",
                    children: [r, o, l]
                })
            }), d[54] = r, d[55] = o, d[56] = l, d[57] = c) : c = d[57], c
        }

        function eQ(e) {
            return (0, i.jsx)(K, {
                children: e
            })
        }

        function e$(e) {
            return (0, i.jsx)(K, {
                children: e
            })
        }

        function eJ(e) {
            return (0, i.jsx)(K, {
                children: e
            })
        }

        function eX(e) {
            return (0, i.jsx)(K, {
                children: e
            })
        }

        function eZ(e) {
            return (0, i.jsx)(K, {
                children: e
            })
        }

        function e1(e) {
            return (0, i.jsx)(K, {
                children: e
            })
        }

        function e0(e) {
            return (0, i.jsx)(K, {
                children: e
            }, "learn-more")
        }

        function e2(e) {
            return (0, i.jsx)(K, {
                children: e
            })
        }

        function e3(e) {
            return (0, i.jsx)(K, {
                children: e
            })
        }

        function e5(e) {
            return (0, i.jsx)(K, {
                children: e
            })
        }

        function e4(e) {
            let a, t = (0, s.c)(5),
                {
                    alt: n,
                    src: r,
                    isLoading: o
                } = e,
                l = void 0 === n ? "" : n;
            if (null != r) {
                let e;
                return t[0] !== l || t[1] !== r ? (e = (0, i.jsx)("img", {
                    alt: l,
                    className: "block size-full object-contain",
                    referrerPolicy: "no-referrer",
                    src: r
                }), t[0] = l, t[1] = r, t[2] = e) : e = t[2], e
            }
            return t[3] !== o ? (a = (0, i.jsx)("div", {
                className: "flex h-full items-center justify-center gap-2 text-sm text-secondary",
                children: o ? (0, i.jsx)(k.a, {
                    className: "icon-sm"
                }) : (0, i.jsx)(h.a, {
                    ...e8.imageUnavailable
                })
            }), t[3] = o, t[4] = a) : a = t[4], a
        }

        function e6(e) {
            let a, t, n, r, o, l = (0, s.c)(16),
                {
                    showImageRightsNotice: c,
                    showContentNotices: d,
                    privacyNotices: g
                } = e;
            return l[0] !== g?.hasUnsupportedCodeInterpreterContent || l[1] !== d ? (a = d && g?.hasUnsupportedCodeInterpreterContent ? (0, i.jsx)(f.e, {
                children: (0, i.jsx)(m.a, {
                    content: (0, i.jsx)(h.a, {
                        ...e8.filesNotShared
                    }),
                    variant: "privacyNotice"
                })
            }) : null, l[0] = g?.hasUnsupportedCodeInterpreterContent, l[1] = d, l[2] = a) : a = l[2], l[3] !== g?.hasPersonalizedSources || l[4] !== d ? (t = d && g?.hasPersonalizedSources ? (0, i.jsx)(f.e, {
                children: (0, i.jsx)(m.a, {
                    content: (0, i.jsx)(h.a, {
                        ...e8.personalizedSourcesPrivate
                    }),
                    variant: "privacyNotice"
                })
            }) : null, l[3] = g?.hasPersonalizedSources, l[4] = d, l[5] = t) : t = l[5], l[6] !== g?.hasScreenshotReference || l[7] !== d ? (n = d && g?.hasScreenshotReference ? (0, i.jsx)(f.e, {
                children: (0, i.jsx)(m.a, {
                    content: (0, i.jsx)(h.a, {
                        ...e8.screenshotDisclaimer
                    }),
                    variant: "privacyNotice"
                })
            }) : null, l[6] = g?.hasScreenshotReference, l[7] = d, l[8] = n) : n = l[8], l[9] !== c ? (r = c ? (0, i.jsx)(f.e, {
                children: (0, i.jsx)("p", {
                    className: "text-sm text-secondary select-none",
                    children: (0, i.jsx)(h.a, {
                        ...e8.imageLicenseDisclaimer
                    })
                })
            }) : null, l[9] = c, l[10] = r) : r = l[10], l[11] !== a || l[12] !== t || l[13] !== n || l[14] !== r ? (o = (0, i.jsxs)(i.Fragment, {
                children: [a, t, n, r]
            }), l[11] = a, l[12] = t, l[13] = n, l[14] = r, l[15] = o) : o = l[15], o
        }

        function e7(e) {
            let a = (0, s.c)(5),
                {
                    error: t
                } = e;
            switch (t) {
                case "receiver-files-unsupported": {
                    let e;
                    return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e8.receiverFileCopyDeferred
                    }), a[0] = e) : e = a[0], e
                }
                case "blocked": {
                    let e;
                    return a[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e8.shareBlocked
                    }), a[1] = e) : e = a[1], e
                }
                case "conversation-load-failed": {
                    let e;
                    return a[2] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e8.shareConversationLoadFailed
                    }), a[2] = e) : e = a[2], e
                }
                case "copy-failed": {
                    let e;
                    return a[3] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e8.shareCopyFailed
                    }), a[3] = e) : e = a[3], e
                }
                case "create-failed": {
                    let e;
                    return a[4] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e8.shareCreateFailed
                    }), a[4] = e) : e = a[4], e
                }
            }
        }
        let e8 = (0, g.f)({
            shareLinkToGif: {
                id: "chatgptConversations.shareDialog.shareLinkToGif",
                defaultMessage: "Share a link to this GIF"
            },
            widgetTitle: {
                id: "chatgptConversations.widgetShare.title",
                defaultMessage: "Share this widget"
            },
            sharePublicLinkToWidget: {
                id: "chatgptConversations.widgetShare.publicTitle",
                defaultMessage: "Share a public link to this widget"
            },
            shareLinkToWidget: {
                id: "chatgptConversations.widgetShare.linkTitle",
                defaultMessage: "Share a link to this widget"
            },
            widgetPublicLinkAudience: {
                id: "chatgptConversations.widgetShare.publicAudience",
                defaultMessage: "Anyone with this link can access this widget"
            },
            attributedDescription: {
                id: "chatgptConversations.shareDialog.attributedDescription",
                defaultMessage: "Your name is visible with this shared chat"
            },
            copyLink: {
                id: "chatgptConversations.shareDialog.copyLink",
                defaultMessage: "Copy link"
            },
            copied: {
                id: "chatgptConversations.shareDialog.destination.copy.copied",
                defaultMessage: "Copied"
            },
            createLink: {
                id: "chatgptConversations.shareDialog.createLink",
                defaultMessage: "Create link"
            },
            description: {
                id: "chatgptConversations.shareDialog.description",
                defaultMessage: "Your name and any messages you add after sharing stay private"
            },
            imageLicenseDisclaimer: {
                id: "chatgptConversations.shareDialog.imageLicenseDisclaimer",
                defaultMessage: "Confirm you have the rights to share this image."
            },
            imageTitle: {
                id: "chatgptConversations.shareDialog.imageTitle",
                defaultMessage: "Share image"
            },
            imagesTitle: {
                id: "chatgptConversations.shareDialog.imagesTitle",
                defaultMessage: "Share images"
            },
            imagesPreview: {
                id: "chatgptConversations.shareDialog.imagesPreview",
                defaultMessage: "Preview of the first shared image"
            },
            imageUnavailable: {
                id: "chatgptConversations.shareDialog.imageUnavailable",
                defaultMessage: "Image preview unavailable"
            },
            sharePublicLinkToImages: {
                id: "chatgptConversations.shareDialog.sharePublicLinkToImages",
                defaultMessage: "Share a public link to these images"
            },
            shareLinkToImages: {
                id: "chatgptConversations.shareDialog.shareLinkToImages",
                defaultMessage: "Share a link to these images"
            },
            imagesPublicLinkAudience: {
                id: "chatgptConversations.shareDialog.imagesPublicLinkAudience",
                defaultMessage: "Anyone with this link can access these images. Confirm you have the rights to share these images."
            },
            sharePublicLinkToImage: {
                id: "chatgptConversations.shareDialog.sharePublicLinkToImage",
                defaultMessage: "Share a public link to this image"
            },
            shareLinkToImage: {
                id: "chatgptConversations.shareDialog.shareLinkToImage",
                defaultMessage: "Share a link to this image"
            },
            sharePublicLinkToMessage: {
                id: "chatgptConversations.shareDialog.sharePublicLinkToMessage",
                defaultMessage: "Share a public link to this message"
            },
            sharePublicLinkToConversation: {
                id: "chatgptConversations.shareDialog.sharePublicLinkToConversation",
                defaultMessage: "Share a public link to this conversation"
            },
            shareLinkToMessage: {
                id: "chatgptConversations.shareDialog.shareLinkToMessage",
                defaultMessage: "Share a link to this message"
            },
            shareLinkToConversation: {
                id: "chatgptConversations.shareDialog.shareLinkToConversation",
                defaultMessage: "Share a link to this conversation"
            },
            imagePublicLinkAudience: {
                id: "chatgptConversations.shareDialog.imagePublicLinkAudience",
                defaultMessage: "Anyone with this link can access this image. Confirm you have the rights to share this image."
            },
            messagePublicLinkAudience: {
                id: "chatgptConversations.shareDialog.messagePublicLinkAudience",
                defaultMessage: "Anyone with this link can access this message"
            },
            workspaceImageRightsAudience: {
                id: "chatgptConversations.shareDialog.workspaceMediaRightsAudience",
                defaultMessage: "Links are visible to workspace members only. {contentType, select, gif {Confirm you have the rights to share this GIF.} images {Confirm you have the rights to share these images.} other {Confirm you have the rights to share this image.}}"
            },
            workspaceLinksVisible: {
                id: "chatgptConversations.shareDialog.workspaceLinksVisible",
                defaultMessage: "Links are visible to workspace members only"
            },
            workspaceLinksVisibleWithLearnMore: {
                id: "chatgptConversations.shareDialog.workspaceLinksVisibleWithLearnMore",
                defaultMessage: "Links are visible to workspace members only. <learnMore>Learn more</learnMore>"
            },
            messageTitle: {
                id: "chatgptConversations.shareDialog.messageTitle",
                defaultMessage: "Share response"
            },
            shareLinkToPrompt: {
                id: "chatgptConversations.shareDialog.prompt.info.title.restricted",
                defaultMessage: "Share a link to this prompt"
            },
            promptTitle: {
                id: "chatgptConversations.shareDialog.promptTitle",
                defaultMessage: "Share prompt"
            },
            filesNotShared: {
                id: "chatgptConversations.shareDialog.filesNotShared",
                defaultMessage: "Images and files in this chat won't be shown in the public link."
            },
            personalizedSourcesPrivate: {
                id: "chatgptConversations.shareDialog.personalizedSourcesPrivate",
                defaultMessage: "Personalized sources used in this chat, like memories, past chats, custom instructions, apps, and files, stay private."
            },
            projectDescription: {
                id: "chatgptConversations.shareDialog.projectDescription",
                defaultMessage: "Your name, uploaded files, custom instructions, and any messages you add after sharing stay private."
            },
            publicLinkAudience: {
                id: "chatgptConversations.shareDialog.publicLinkAudience",
                defaultMessage: "Anyone with the link can view this chat"
            },
            shareBlocked: {
                id: "chatgptConversations.shareDialog.shareBlocked",
                defaultMessage: "This conversation can't be shared"
            },
            shareCopyFailed: {
                id: "chatgptConversations.shareDialog.shareCopyFailed",
                defaultMessage: "Share link created, but it could not be copied"
            },
            shareCreateFailed: {
                id: "chatgptConversations.shareDialog.shareCreateFailed",
                defaultMessage: "Could not create share link"
            },
            receiverFileCopyDeferred: {
                id: "chatgptConversations.shareDialog.receiver.file_copy_deferred.error",
                defaultMessage: "This content includes files and can’t be reshared yet"
            },
            shareConversationLoadFailed: {
                id: "chatgptConversations.shareDialog.shareConversationLoadFailed",
                defaultMessage: "Could not load the full conversation"
            },
            screenshotDisclaimer: {
                id: "chatgptConversations.shareDialog.screenshotDisclaimer",
                defaultMessage: "Screenshots may contain sensitive information."
            },
            updateLink: {
                id: "chatgptConversations.shareDialog.updateLink",
                defaultMessage: "Update link"
            },
            workspaceDescription: {
                id: "chatgptConversations.shareDialog.workspaceDescription",
                defaultMessage: "Any messages you add after sharing will be visible to members of your workspace"
            },
            workspaceLinkAudience: {
                id: "chatgptConversations.shareDialog.workspaceLinkAudience",
                defaultMessage: "Links are visible to workspace members only"
            },
            workspaceProjectDescription: {
                id: "chatgptConversations.shareDialog.workspaceProjectDescription",
                defaultMessage: "Any messages you add after sharing will be visible to members of your workspace. Project files and custom instructions won’t be accessible via the shared link."
            }
        })
    }),
    Y7np: (function(e, a, t) {
        t.d(a, {
            a: () => Q,
            b: () => B
        });
        var i = t("ABep"),
            s = t("QosV"),
            n = t("lA5q"),
            r = t("T0Rc"),
            o = t("on57"),
            l = t("NRIv"),
            c = t("zd8w"),
            d = t("oyxz"),
            h = t("hL9c"),
            g = t("YWcr"),
            p = t("MX6A"),
            u = t("dKZq"),
            m = t("QlrJ"),
            f = t("Bbed"),
            b = t("RNul"),
            v = t("jHtb"),
            w = t("T9RQ"),
            k = t("aPiu"),
            y = t("FqCE"),
            x = t("NddG"),
            _ = t("RUBg"),
            C = t("zSQm"),
            T = t("ZjkF"),
            S = t("WAdu"),
            A = t("TxRk"),
            I = t("ABl9"),
            j = t("vLpE"),
            M = t("kfGJ"),
            L = t("qKAH"),
            E = t("zHp1"),
            P = t("HAEQ"),
            D = t("dMLa"),
            N = t("taWv"),
            F = t("U5zD"),
            G = t("Zm8H"),
            R = t("OOaz"),
            O = t("TUMj"),
            H = t("drbS"),
            W = t("jAnS");
        let U = (0, f.a)(async () => (await Promise.all([t.e(418851), t.e(109308), t.e(399565), t.e(257798), t.e(447351), t.e(617936), t.e(807489), t.e(337882), t.e(955979), t.e(646436), t.e(7078), t.e(200429), t.e(698524), t.e(956483), t.e(87162), t.e(396705), t.e(155568), t.e(731863), t.e(767086), t.e(76629), t.e(851456), t.e(709215), t.e(704809), t.e(329156), t.e(829555), t.e(115121), t.e(820294)]).then(t.bind(t, "IQg5"))).WritingBlockDirectiveRenderer, P.a),
            z = {
                [n.a]: function(e) {
                    let a, t = (0, s.c)(3),
                        n = (0, O.d)(),
                        r = n?.contentReferences;
                    return t[0] !== e || t[1] !== r ? (a = (0, i.jsx)(U, {
                        ...e,
                        contentReferences: r,
                        isStreaming: !1,
                        testId: "chatgpt-writing-block"
                    }), t[0] = e, t[1] = r, t[2] = a) : a = t[2], a
                }
            },
            q = (0, _.c)({
                conversationId: null,
                externalResourcePolicy: "restricted",
                isBrowserEnabled: !1,
                openFileLinksInSidePanel: !1
            });

        function B(e) {
            let a, t, n, r, l, d, h, g = (0, s.c)(43),
                {
                    expandedHistory: p,
                    expandPreviewEventLogger: u,
                    prompt: m,
                    response: f,
                    serverConversationId: b,
                    turns: v
                } = e,
                w = "restricted" !== (0, c.useContext)(S.a);
            if (g[0] !== m || g[1] !== w || g[2] !== f || g[3] !== b || g[4] !== v) {
                let e = v?.slice(0, 4);
                if (t = null != f, n = "default", null != m) {
                    let e;
                    g[8] !== m.renderFormat || g[9] !== m.text ? (e = (0, i.jsx)(X, {
                        renderFormat: m.renderFormat,
                        text: m.text
                    }), g[8] = m.renderFormat, g[9] = m.text, g[10] = e) : e = g[10], a = e
                } else if (null != f) {
                    let e, t;
                    n = "response", g[11] !== b ? (e = (0, R.c)(b), g[11] = b, g[12] = e) : e = g[12];
                    let s = w ? "share" : void 0;
                    g[13] !== f || g[14] !== e || g[15] !== s ? (t = (0, i.jsx)(D.a, {
                        conversationId: e,
                        cwd: null,
                        hostId: M.a,
                        item: f,
                        isReadOnly: !0,
                        preview: s,
                        trackShownImpressions: !1,
                        turnId: "share-preview"
                    }), g[13] = f, g[14] = e, g[15] = s, g[16] = t) : t = g[16], a = t
                } else e?.some(K) && (n = "transcript"), a = null == e ? null : (0, i.jsx)(J, {
                    preview: w ? "share" : void 0,
                    serverConversationId: b,
                    turns: e
                });
                g[0] = m, g[1] = w, g[2] = f, g[3] = b, g[4] = v, g[5] = a, g[6] = t, g[7] = n
            } else a = g[5], t = g[6], n = g[7];
            g[17] !== t || g[18] !== b ? (r = function(e) {
                return (0, i.jsx)($, {
                    serverConversationId: b,
                    children: (0, i.jsx)("div", {
                        className: (0, o.b)("flex min-w-0 flex-col gap-4", t ? "responseTypography-A7UvAY" : "p-4"),
                        children: e
                    })
                })
            }, g[17] = t, g[18] = b, g[19] = r) : r = g[19];
            let k = r,
                y = a;
            if (null != p) {
                let e, a = w ? "share" : void 0;
                g[20] !== u || g[21] !== p || g[22] !== b || g[23] !== a ? (e = (0, i.jsx)(Y, {
                    eventLogger: u,
                    history: p,
                    preview: a,
                    serverConversationId: b
                }), g[20] = u, g[21] = p, g[22] = b, g[23] = a, g[24] = e) : e = g[24], y = e
            } else if (null == m && null == f && null != v) {
                let e, a = w ? "share" : void 0;
                g[25] !== b || g[26] !== a || g[27] !== v ? (e = (0, i.jsx)(J, {
                    preview: a,
                    serverConversationId: b,
                    turns: v
                }), g[25] = b, g[26] = a, g[27] = v, g[28] = e) : e = g[28], y = e
            }
            g[29] !== y || g[30] !== m || g[31] !== k ? (l = null == m ? k(y) : void 0, g[29] = y, g[30] = m, g[31] = k, g[32] = l) : l = g[32];
            let x = null == p ? "immediate" : "deferred",
                _ = null == m && null == f && null == v,
                C = n;
            return g[33] !== a || g[34] !== k ? (d = k(a), g[33] = a, g[34] = k, g[35] = d) : d = g[35], g[36] !== u || g[37] !== l || g[38] !== x || g[39] !== _ || g[40] !== d || g[41] !== n ? (h = (0, i.jsx)(L.a, {
                expandedContent: l,
                expandedContentLoad: x,
                expandPreviewEventLogger: u,
                isLoading: _,
                variant: C,
                children: d
            }), g[36] = u, g[37] = l, g[38] = x, g[39] = _, g[40] = d, g[41] = n, g[42] = h) : h = g[42], h
        }

        function K(e) {
            let {
                turn: a
            } = e;
            return a.items.some(V)
        }

        function V(e) {
            return "generated-image" === e.type
        }

        function Y(e) {
            let a, t, n, o, l, h, g = (0, s.c)(18),
                {
                    eventLogger: p,
                    history: u,
                    preview: m,
                    serverConversationId: f
                } = e;
            g[0] !== u.sessionId ? (a = ["expanded-share-history", u.sessionId], g[0] = u.sessionId, g[1] = a) : a = g[1], g[2] !== u ? (t = e => {
                let {
                    signal: a
                } = e;
                return u.load(a)
            }, g[2] = u, g[3] = t) : t = g[3], g[4] !== a || g[5] !== t ? (n = {
                queryKey: a,
                queryFn: t,
                staleTime: 1 / 0,
                gcTime: 0,
                retry: !1
            }, g[4] = a, g[5] = t, g[6] = n) : n = g[6];
            let {
                data: v,
                isError: w
            } = (0, r.a)(n);
            if (g[7] !== v || g[8] !== p || g[9] !== w ? (o = () => {
                    null != v ? p?.loaded() : w && p?.failed()
                }, l = [v, p, w], g[7] = v, g[8] = p, g[9] = w, g[10] = o, g[11] = l) : (o = g[10], l = g[11]), (0, c.useEffect)(o, l), w) {
                let e;
                return g[12] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(d.a, {
                    id: "shareDialog.preview.historyUnavailable",
                    defaultMessage: "Couldn’t load the full preview"
                }), g[12] = e) : e = g[12], e
            }
            if (null == v) {
                let e;
                return g[13] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(b.a, {
                    className: "icon-sm"
                }), g[13] = e) : e = g[13], e
            }
            return g[14] !== v || g[15] !== m || g[16] !== f ? (h = (0, i.jsx)(J, {
                preview: m,
                serverConversationId: f,
                turns: v
            }), g[14] = v, g[15] = m, g[16] = f, g[17] = h) : h = g[17], h
        }

        function Q(e) {
            let a, t, n = (0, s.c)(7),
                {
                    preview: r,
                    serverConversationId: o,
                    turns: l
                } = e;
            return n[0] !== r || n[1] !== o || n[2] !== l ? (a = (0, i.jsx)("div", {
                className: "flex min-w-0 flex-col gap-4 p-4",
                children: (0, i.jsx)(J, {
                    markdownDirectives: z,
                    preview: r,
                    serverConversationId: o,
                    turns: l
                })
            }), n[0] = r, n[1] = o, n[2] = l, n[3] = a) : a = n[3], n[4] !== o || n[5] !== a ? (t = (0, i.jsx)($, {
                serverConversationId: o,
                children: a
            }), n[4] = o, n[5] = a, n[6] = t) : t = n[6], t
        }

        function $(e) {
            let a, t, n, r, o = (0, s.c)(10),
                {
                    children: l,
                    serverConversationId: c
                } = e;
            return o[0] !== c ? (a = (0, W.c)(c), o[0] = c, o[1] = a) : a = o[1], o[2] !== c || o[3] !== a ? (t = {
                conversationId: c,
                pathname: a,
                routeKind: "chatgpt-thread",
                routeTemplate: W.a
            }, o[2] = c, o[3] = a, o[4] = t) : t = o[4], o[5] !== l ? (n = (0, i.jsx)(S.a.Provider, {
                value: "restricted",
                children: (0, i.jsx)(k.a, {
                    children: l
                })
            }), o[5] = l, o[6] = n) : n = o[6], o[7] !== t || o[8] !== n ? (r = (0, i.jsx)(j.a, {
                route: t,
                children: n
            }), o[7] = t, o[8] = n, o[9] = r) : r = o[9], r
        }

        function J(e) {
            let {
                preview: a,
                markdownDirectives: t,
                serverConversationId: s,
                turns: n
            } = e;
            return n.map(e => {
                let {
                    id: n,
                    turn: r
                } = e;
                return (0, i.jsx)("div", {
                    className: "flex min-w-0 flex-col gap-4",
                    children: r.items.map((e, r) => "user-message" === e.type ? (0, i.jsxs)("div", {
                        className: "flex min-w-0 flex-col items-end gap-2",
                        children: [e.images.map(e => (0, i.jsx)(ea, {
                            src: e,
                            serverConversationId: s
                        }, e)), e.message.trim() ? (0, i.jsx)(X, {
                            item: e,
                            renderFormat: e.renderFormat,
                            text: (0, l.x)(e.message)
                        }) : null]
                    }, r) : "assistant-message" === e.type ? (0, i.jsx)(D.a, {
                        conversationId: (0, R.c)(s),
                        cwd: null,
                        hostId: M.a,
                        item: e,
                        isReadOnly: !0,
                        preview: a,
                        markdownDirectives: t,
                        trackShownImpressions: !1,
                        turnId: n
                    }, r) : "generated-image" === e.type && null != e.src ? (0, i.jsx)(ea, {
                        isGenerated: !0,
                        src: e.src,
                        serverConversationId: s
                    }, r) : null)
                }, n)
            })
        }

        function X(e) {
            let a, t, n = (0, s.c)(6),
                {
                    item: r,
                    renderFormat: o,
                    text: l
                } = e;
            n[0] !== r || n[1] !== l ? (a = function(e, a) {
                let t = a?.chatGptSystemHintMentions ?? (0, H.d)([], e),
                    i = a?.renderFormat === "plain" ? a.chatGptFileMentions?.filter(e => {
                        let {
                            attachment: a
                        } = e;
                        return a.isSourceReference
                    }) ?? [] : [],
                    s = [...t, ...i].sort((e, a) => a.startIndex - e.startIndex),
                    n = e;
                for (let e of s) {
                    let a;
                    if ("attachment" in e) {
                        let t = (0, F.g)(e.attachment, e.attachment.name);
                        if (null == t) continue;
                        a = t
                    } else {
                        let t = e.id.replace(/^(?:connector|plugin):/u, "");
                        if (t !== I.a && !G.a.has(t) && null == (0, g.z)(e.id)) continue;
                        a = (0, p.b)(e.label, I.b)
                    }
                    n = n.slice(0, e.startIndex) + a + n.slice(e.endIndex)
                }
                return n
            }(l, r), n[0] = r, n[1] = l, n[2] = a) : a = n[2];
            let c = a;
            return n[3] !== c || n[4] !== o ? (t = (0, i.jsx)("div", {
                className: "max-w-[77%] min-w-0 self-end overflow-hidden rounded-2xl bg-text/5 px-3 py-2 break-words",
                children: "plain" === o ? (0, i.jsx)(u.b, {
                    children: (0, i.jsx)(m.a, {
                        preserveCodeDelimiters: !0,
                        text: c,
                        renderLink: Z
                    })
                }) : (0, i.jsx)(v.a, {
                    text: c,
                    components: {
                        a: ee
                    },
                    cwd: null,
                    hasSerializedParagraphs: "markdown" === o,
                    hostId: M.a,
                    renderMath: !1,
                    variant: "user-message"
                })
            }), n[3] = c, n[4] = o, n[5] = t) : t = n[5], t
        }

        function Z(e) {
            let a = "text" !== (0, g.x)(e) || null != (0, y.b)(e.href) ? (0, C.a)(e.href, e.label) : void 0;
            return null == a ? null : (0, i.jsx)(ee, {
                href: a,
                children: e.label
            }, e.elementKey)
        }

        function ee(e) {
            let a, t, n = (0, s.c)(10);
            if (e.href !== I.b) {
                let a, t = e[x.a];
                return n[0] !== e.children || n[1] !== e.href || n[2] !== e.title || n[3] !== t ? (a = (0, i.jsx)(q, {
                    href: e.href,
                    title: e.title,
                    "data-markdown-raw-link-label": t,
                    children: e.children
                }), n[0] = e.children, n[1] = e.href, n[2] = e.title, n[3] = t, n[4] = a) : a = n[4], a
            }
            let r = e[x.a];
            return n[5] !== e.children || n[6] !== r ? (a = "string" == typeof r ? (0, p.c)(r) : (0, T.a)(e.children), n[5] = e.children, n[6] = r, n[7] = a) : a = n[7], n[8] !== a ? (t = (0, i.jsx)(A.a, {
                icon: w.a,
                layout: "selection-pill",
                children: a
            }), n[8] = a, n[9] = t) : t = n[9], t
        }

        function ea(e) {
            let a, t, n = (0, s.c)(7),
                {
                    isGenerated: r,
                    src: o,
                    serverConversationId: l
                } = e,
                c = void 0 !== r && r,
                g = (0, E.h)(o) ? o : "";
            n[0] !== l ? (a = (0, N.c)((0, R.c)(l)), n[0] = l, n[1] = a) : a = n[1];
            let {
                src: p,
                isLoading: u
            } = (0, E.k)(g, a), m = (0, C.c)(o) ? o : null;
            if (g && (m = p), u) {
                let e;
                return n[2] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(b.a, {
                    className: "icon-sm"
                }), n[2] = e) : e = n[2], e
            }
            if (null == m) {
                let e;
                return n[3] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)("span", {
                    className: "text-sm text-secondary",
                    children: (0, i.jsx)(d.a, {
                        id: "chatgptConversations.shareDialog.imageUnavailable",
                        defaultMessage: "Image preview unavailable"
                    })
                }), n[3] = e) : e = n[3], e
            }
            return n[4] !== m || n[5] !== c ? (t = c ? (0, i.jsx)("img", {
                alt: "",
                className: "block max-h-56 max-w-full self-start rounded-2xl object-contain",
                loading: "lazy",
                referrerPolicy: "no-referrer",
                src: m
            }) : (0, i.jsx)(h.a, {
                src: m,
                previewEnabled: !1,
                imageLoading: "lazy"
            }), n[4] = m, n[5] = c, n[6] = t) : t = n[6], t
        }
    }),
    fwwN: (function(e, a, t) {
        var i = t("SGsN"),
            s = t("xygx"),
            n = t("ddzD"),
            r = t("urzV"),
            o = t("Yscs"),
            l = t("taWv"),
            c = t("rfhJ");
        t.d(a, {}, {
            a: async function(e, a) {
                let {
                    images: t,
                    downloadSources: d,
                    intl: h,
                    serverConversationId: g,
                    isParagen: p = !1,
                    logIndividualDownloads: u = !0
                } = a, m = 0;
                for (let [a, f] of t.entries()) {
                    if (null == f.src || "completed" !== f.status || f.isPreview) continue;
                    null != g && p && (0, c.c)(e, g, f, "download", "paragen");
                    let b = d?.get(f.id) ?? f.src;
                    null != g && (b = await (0, s.f)({
                        conversationId: null,
                        absoluteImageFilePath: null,
                        hostId: "local",
                        imageAssetResolver: (0, l.c)(g),
                        queryClient: e.queryClient,
                        src: b
                    }));
                    let v = (0, r.c)(b ?? f.src),
                        w = (0, n.a)(f).downloadExtension ?? v ?? "png";
                    b instanceof Blob && w !== v && (b = await (0, o.a)(b).catch(() => null));
                    let k = (0, r.b)(h, w, {
                            title: f.chatGptDisplayTitle,
                            gifSpeed: f.gifPlayback?.speed
                        }),
                        y = !1;
                    if (null != b && await (0, r.d)({
                            downloadSrc: b,
                            onDownloaded: () => {
                                y = !0, null != g && !p && u && (0, c.c)(e, g, f, "download")
                            },
                            suggestedFilename: t.length > 1 ? k.replace(/\.[^.]+$/, `-${a+1}.${w}`) : k
                        })) {
                        if (!y) return "cancelled";
                        m++;
                        continue
                    }
                    return e.get(i.f).danger(h.formatMessage({
                        id: "imageSidePanel.downloadFailure",
                        defaultMessage: "Could not download image"
                    }), {
                        errorAnalytics: {
                            toastId: "imageSidePanel.downloadFailure"
                        }
                    }), "failed"
                }
                return m > 0 ? "downloaded" : "empty"
            }
        })
    }),
    cQW3: (function(e, a, t) {
        var i = t("SavH"),
            s = t("yGJW"),
            n = t("r9i9");
        t.d(a, {}, {
            a: function(e, a, t) {
                return {
                    queryKey: ["chatgpt-image-share", a, t.item.id, t.item.src, t.additionalImages?.map(e => [e.id, e.src])],
                    queryFn: async () => {
                        let r = await (0, n.c)({
                            additionalImages: t.additionalImages,
                            conversationId: a,
                            image: t.item
                        });
                        return t.isDirectLightboxShare && (0, s.a)(e, i.d, {}), r
                    },
                    staleTime: 1 / 0
                }
            }
        })
    }),
    Tywu: (function(e, a, t) {
        var i = t("FS1B"),
            s = t("yGJW");

        function n() {
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
        t.d(a, {}, {
            a: n,
            b: async function(e, a, t, r) {
                let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION",
                    l = {
                        url: a.shareLinkUrl
                    };
                if (a.isWorkspaceOnly || !n(l.url)) return "failed";
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
                    return (0, s.a)(e, i.i, {
                        ...c,
                        action: "CHATGPT_SHARE_FLOW_ACTION_SYSTEM_SHEET_OPENED"
                    }), await a, (0, s.a)(e, i.i, {
                        ...c,
                        action: "CHATGPT_SHARE_FLOW_ACTION_SYSTEM_SHARE_COMPLETED"
                    }), "shared"
                } catch (t) {
                    let a = "object" == typeof t && null != t && "name" in t && "AbortError" === t.name;
                    return (0, s.a)(e, i.i, {
                        ...c,
                        action: a ? "CHATGPT_SHARE_FLOW_ACTION_DISMISSED" : "CHATGPT_SHARE_FLOW_ACTION_FAILED",
                        failureReason: a ? void 0 : "CHATGPT_SHARE_FLOW_FAILURE_REASON_UNSPECIFIED"
                    }), a ? "cancelled" : "failed"
                }
            }
        })
    }),
    k5RO: (function(e, a, t) {
        let i = {
                kind: "native"
            },
            s = {
                kind: "native",
                promptShareTreatment: "image-only"
            },
            n = {
                kind: "custom",
                layout: "one-row",
                unsupportedDestinationFallback: "native-share"
            },
            r = {
                kind: "custom",
                layout: "one-row",
                unsupportedDestinationFallback: "app-store"
            },
            o = {
                kind: "custom",
                layout: "two-rows",
                unsupportedDestinationFallback: "native-share"
            },
            l = {
                ...o,
                promptShareTreatment: "image-only"
            },
            c = {
                ...o,
                promptShareTreatment: "prompt-with-image"
            },
            d = {
                kind: "custom",
                layout: "two-rows",
                unsupportedDestinationFallback: "app-store"
            },
            h = ["whatsapp", "messages", "instagram-stories", "facebook-messenger", "x", "reddit"],
            g = {
                US: ["messages", "whatsapp", "instagram-stories", "x", "reddit", "linkedin"],
                KR: ["kakao-talk", "messages", "instagram-stories", "x", "reddit", "linkedin"],
                JP: ["line", "messages", "x", "instagram-stories", "reddit", "whatsapp"],
                BR: ["whatsapp", "instagram-stories", "facebook-stories", "facebook-messenger", "x", "reddit"],
                GB: ["whatsapp", "messages", "instagram-stories", "facebook-messenger", "x", "reddit"],
                IE: ["whatsapp", "facebook-messenger", "instagram-stories", "facebook-stories", "snapchat-stories", "x"],
                DE: ["whatsapp", "instagram-stories", "telegram", "facebook-messenger", "x", "reddit"],
                ES: ["whatsapp", "instagram-stories", "facebook-stories", "telegram", "facebook-messenger", "x"],
                IT: ["whatsapp", "instagram-stories", "facebook-stories", "telegram", "facebook-messenger", "x"],
                NL: ["whatsapp", "instagram-stories", "facebook-messenger", "facebook-stories", "telegram", "x"],
                PT: ["whatsapp", "instagram-stories", "facebook-stories", "facebook-messenger", "telegram", "x"]
            },
            p = {
                "facebook-messenger": {
                    android: "https://play.google.com/store/apps/details?id=com.facebook.orca",
                    ios: "https://apps.apple.com/app/messenger/id454638411"
                },
                "facebook-stories": {
                    android: "https://play.google.com/store/apps/details?id=com.facebook.katana",
                    ios: "https://apps.apple.com/app/facebook/id284882215"
                },
                "instagram-stories": {
                    android: "https://play.google.com/store/apps/details?id=com.instagram.android",
                    ios: "https://apps.apple.com/app/instagram/id389801252"
                },
                "kakao-talk": {
                    android: "https://play.google.com/store/apps/details?id=com.kakao.talk",
                    ios: "https://apps.apple.com/app/kakaotalk-messenger/id362057947"
                },
                "snapchat-stories": {
                    android: "https://play.google.com/store/apps/details?id=com.snapchat.android",
                    ios: "https://apps.apple.com/app/snapchat/id447188370"
                }
            };
        t.d(a, {}, {
            a: "2001123255",
            b: "mweb_image_share_sheet_variant",
            c: function(e, a) {
                return p[e]?.[a] ?? null
            },
            d: function(e) {
                let {
                    destination: a,
                    isAppleDevice: t,
                    shareUrl: i,
                    title: s
                } = e, n = encodeURIComponent(i), r = encodeURIComponent(s ?? "");
                switch (a) {
                    case "messages":
                        return `sms:${t?"&":"?"}body=${n}`;
                    case "whatsapp":
                        return `https://wa.me/?text=${n}`;
                    case "telegram":
                        return `https://t.me/share/url?url=${n}&text=${r}`;
                    case "line":
                        return `https://social-plugins.line.me/lineit/share?url=${n}&text=${r}`;
                    case "linkedin":
                        return `https://www.linkedin.com/shareArticle?url=${n}&text=${r}`;
                    case "reddit":
                        return `https://www.reddit.com/submit?url=${n}&title=${r}`;
                    case "x":
                        return `https://twitter.com/intent/tweet?url=${n}&text=${r}`;
                    case "facebook-messenger":
                    case "facebook-stories":
                    case "instagram-stories":
                    case "kakao-talk":
                    case "snapchat-stories":
                        return null
                }
            },
            e: function(e) {
                let {
                    country: a
                } = e, t = a?.trim().toUpperCase();
                return [...(null == t ? void 0 : g[t]) ?? h]
            },
            f: function(e) {
                let {
                    canUseNativeShare: a,
                    experience: t,
                    isMobileBrowser: i,
                    isPersonalAccount: s
                } = e;
                if (i) return "custom" === t.kind ? t : a && s ? n : void 0
            },
            g: function(e) {
                return null != p[e]
            },
            h: function(e) {
                switch (e) {
                    case "native_with_fallback_no_prompt_switcher":
                        return s;
                    case "custom_one_row_native_fallback":
                    case "new_custom":
                        return n;
                    case "custom_one_row_app_store_redirect":
                        return r;
                    case "custom_two_rows_native_fallback":
                        return o;
                    case "custom_share_sheet_without_prompt_switcher":
                        return l;
                    case "custom_share_sheet_with_prompt_switcher":
                        return c;
                    case "custom_two_rows_app_store_redirect":
                        return d;
                    default:
                        return i
                }
            }
        })
    }),
    aPiu: (function(e, a, t) {
        var i = t("ABep"),
            s = t("QosV"),
            n = t("Q840"),
            r = t("Sd8U"),
            o = t("uHE8"),
            l = t("tSEg");
        t.d(a, {}, {
            a: function(e) {
                let a, t, c = (0, s.c)(7),
                    {
                        children: d
                    } = e,
                    h = (0, n.y)(l.a);
                if ("home" === h.value.routeKind) {
                    let e;
                    return c[0] !== d ? (e = (0, i.jsx)(o.a, {
                        children: d
                    }), c[0] = d, c[1] = e) : e = c[1], e
                }
                c[2] !== h ? (a = (0, r.q)(h)?.getOwnValue(r.a) ?? (0, r.c)(h.value, void 0, h.value.clientThreadId), c[2] = h, c[3] = a) : a = c[3];
                let g = a;
                return c[4] !== d || c[5] !== g ? (t = (0, i.jsx)(n.b, {
                    scope: r.a,
                    value: g,
                    children: d
                }), c[4] = d, c[5] = g, c[6] = t) : t = c[6], t
            }
        })
    }),
    TnP0: (function(e, a, t) {
        var i = t("ABep"),
            s = t("QosV"),
            n = t("Wf1j"),
            r = t("oyxz"),
            o = t("Sm6l"),
            l = t("mUDD"),
            c = t("bf6R"),
            d = t("evwP"),
            h = t("zLIa"),
            g = t("sX4C");
        t.d(a, {}, {
            a: function(e) {
                let a, t, p, u, m, f, b, v = (0, s.c)(38),
                    {
                        accessControls: w,
                        actionDisabled: k,
                        actionLabel: y,
                        audience: x,
                        compactImageSheetFooter: _,
                        error: C,
                        footer: T,
                        info: S,
                        isBusy: A,
                        isDismissalDisabled: I,
                        notices: j,
                        onClose: M,
                        onOpenAutoFocus: L,
                        onPortalContainerChange: E,
                        onSubmit: P,
                        preview: D,
                        presentation: N,
                        subtitle: F,
                        size: G,
                        threadTitle: R,
                        title: O
                    } = e,
                    H = (0, n.a)();
                v[0] !== R ? (a = R?.trim(), v[0] = R, v[1] = a) : a = v[1];
                let W = a;
                v[2] !== A ? (t = A ? null : (0, i.jsx)(c.Ke, {}), v[2] = A, v[3] = t) : t = v[3], v[4] !== y || v[5] !== t ? (p = (0, i.jsxs)(i.Fragment, {
                    children: [t, y]
                }), v[4] = y, v[5] = t, v[6] = p) : p = v[6];
                let U = p;
                if (C?.preventsSharing) {
                    let e;
                    v[7] !== C.onRetry ? (e = null != C.onRetry ? (0, i.jsx)(r.a, {
                        id: "shareDialog.thread.retry",
                        defaultMessage: "Try again"
                    }) : (0, i.jsx)(r.a, {
                        id: "shareDialog.thread.close",
                        defaultMessage: "Close"
                    }), v[7] = C.onRetry, v[8] = e) : e = v[8], U = e
                }
                let z = !C?.preventsSharing && k;
                v[9] !== U || v[10] !== A || v[11] !== z ? (u = (0, i.jsx)(o.a, {
                    color: "outline",
                    disabled: z,
                    loading: A,
                    size: "medium",
                    type: "submit",
                    children: U
                }), v[9] = U, v[10] = A, v[11] = z, v[12] = u) : u = v[12];
                let q = u;
                v[13] !== W || v[14] !== O ? (m = O ?? (W ? (0, i.jsx)(r.a, {
                    id: "shareDialog.thread.namedTitle",
                    defaultMessage: "Share {threadTitle}",
                    values: {
                        threadTitle: W
                    }
                }) : (0, i.jsx)(r.a, {
                    id: "shareDialog.thread.title",
                    defaultMessage: "Share chat"
                })), v[13] = W, v[14] = O, v[15] = m) : m = v[15];
                let B = C?.preventsSharing ? C.onRetry ?? M : P,
                    K = C?.preventsSharing ? q : T ?? q;
                return v[16] !== w || v[17] !== x || v[18] !== C || v[19] !== S || v[20] !== H || v[21] !== j || v[22] !== N || v[23] !== D ? (f = C?.preventsSharing ? (0, i.jsx)(l.e, {
                    className: "py-10",
                    children: (0, i.jsx)("div", {
                        role: "alert",
                        children: (0, i.jsx)(d.a, {
                            children: C.content
                        })
                    })
                }) : (0, i.jsxs)(i.Fragment, {
                    children: ["imageSheet" === N ? D : (0, i.jsx)(l.e, {
                        children: D
                    }), S, j, w ?? (null == x ? null : (0, i.jsx)(l.e, {
                        children: (0, i.jsx)("div", {
                            className: "text-sm text-codex-description",
                            children: x
                        })
                    })), null == C ? null : (0, i.jsx)(l.e, {
                        children: (0, i.jsx)("div", {
                            className: "text-sm text-danger",
                            role: "alert",
                            children: C.content
                        })
                    }), C?.copyUrl == null ? null : (0, i.jsx)(l.e, {
                        children: (0, i.jsx)(h.a, {
                            "aria-label": H.formatMessage({
                                id: "shareDialog.thread.linkLabel",
                                defaultMessage: "Share link"
                            }),
                            readOnly: !0,
                            value: C.copyUrl
                        })
                    })]
                }), v[16] = w, v[17] = x, v[18] = C, v[19] = S, v[20] = H, v[21] = j, v[22] = N, v[23] = D, v[24] = f) : f = v[24], v[25] !== _ || v[26] !== I || v[27] !== M || v[28] !== L || v[29] !== E || v[30] !== N || v[31] !== G || v[32] !== F || v[33] !== m || v[34] !== B || v[35] !== K || v[36] !== f ? (b = (0, i.jsx)(g.a, {
                    title: m,
                    subtitle: F,
                    compactImageSheetFooter: _,
                    isDismissalDisabled: I,
                    onClose: M,
                    onOpenAutoFocus: L,
                    onPortalContainerChange: E,
                    onSubmit: B,
                    size: G,
                    presentation: N,
                    footer: K,
                    children: f
                }), v[25] = _, v[26] = I, v[27] = M, v[28] = L, v[29] = E, v[30] = N, v[31] = G, v[32] = F, v[33] = m, v[34] = B, v[35] = K, v[36] = f, v[37] = b) : b = v[37], b
            }
        })
    }),
    qKAH: (function(e, a, t) {
        t.d(a, {
            a: () => v
        });
        var i = t("ABep"),
            s = t("QosV"),
            n = t("slpy"),
            r = t("on57"),
            o = t("Q840"),
            l = t("zd8w"),
            c = t("Wf1j"),
            d = t("oyxz"),
            h = t("Qgfj"),
            g = t("Sm6l"),
            p = t("JNtf"),
            u = t("bf6R"),
            m = t("RNul"),
            f = t("O666");
        let b = {
            default: void 0,
            transcript: void 0,
            image: "size-full",
            response: "p-5"
        };

        function v(e) {
            let a, t, n, l, h, g, p, u = (0, s.c)(25),
                {
                    ariaLabel: v,
                    children: k,
                    classicImagePreviewEligible: y,
                    expandedContent: x,
                    expandedContentLoad: _,
                    expandPreviewEventLogger: C,
                    isLoading: T,
                    presentation: A,
                    variant: I
                } = e,
                j = void 0 === _ ? "immediate" : _,
                M = void 0 !== T && T,
                L = void 0 === I ? "default" : I,
                E = (0, c.a)();
            u[0] === Symbol.for("react.memo_cache_sentinel") ? (a = {
                layer: "3136899520",
                parameter: "classic_image_preview"
            }, u[0] = a) : a = u[0];
            let P = (0, o.x)(void 0 !== y && y ? f.b : null, a) ? "border-transparent bg-transparent" : "border-default bg-surface",
                D = "transcript" === L ? "h-auto" : "aspect-[1200/630]";
            u[1] !== P || u[2] !== D ? (t = (0, r.b)("relative min-h-56 overflow-hidden rounded-lg border select-none", P, D), u[1] = P, u[2] = D, u[3] = t) : t = u[3];
            let N = t;
            return null != A && (N = "imageSheetTwoRows" === A ? "imageSheetTwoRowsPreview-bFaioZ" : "imageSheetPreview-rzCCMf"), u[4] !== v || u[5] !== E || u[6] !== L ? (n = v ?? E.formatMessage(S["transcript" === L ? "default" : L]), u[4] = v, u[5] = E, u[6] = L, u[7] = n) : n = u[7], u[8] !== k || u[9] !== M || u[10] !== A || u[11] !== L ? (l = M ? (0, i.jsxs)("div", {
                className: "flex h-full items-center justify-center gap-2 text-sm text-secondary",
                children: [(0, i.jsx)(m.a, {
                    className: "icon-sm"
                }), (0, i.jsx)(d.a, {
                    ...S.loading
                })]
            }) : (0, i.jsxs)("div", {
                "aria-hidden": !0,
                className: b[L],
                inert: !0,
                children: [k, null == A && ("default" === L || "response" === L) && (0, i.jsx)("div", {
                    className: "pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface to-transparent"
                })]
            }), u[8] = k, u[9] = M, u[10] = A, u[11] = L, u[12] = l) : l = u[12], u[13] !== l || u[14] !== n ? (h = (0, i.jsx)("div", {
                className: "h-full",
                role: "img",
                "aria-label": n,
                children: l
            }), u[13] = l, u[14] = n, u[15] = h) : h = u[15], u[16] !== C || u[17] !== x || u[18] !== j || u[19] !== M ? (g = !M && null != x && (0, i.jsx)(w, {
                className: "absolute! end-2 top-2",
                eventLogger: C,
                expandedContentLoad: j,
                children: x
            }), u[16] = C, u[17] = x, u[18] = j, u[19] = M, u[20] = g) : g = u[20], u[21] !== N || u[22] !== h || u[23] !== g ? (p = (0, i.jsxs)("div", {
                className: N,
                children: [h, g]
            }), u[21] = N, u[22] = h, u[23] = g, u[24] = p) : p = u[24], p
        }

        function w(e) {
            let a, t, r, h, m, b, v, w, x, A, I, j, M, L, E, P, D = (0, s.c)(33),
                {
                    className: N,
                    children: F,
                    eventLogger: G,
                    expandedContentLoad: R
                } = e,
                O = (0, c.a)();
            D[0] === Symbol.for("react.memo_cache_sentinel") ? (a = {
                layer: "3136899520",
                parameter: "expand_share_preview"
            }, D[0] = a) : a = D[0];
            let H = (0, o.x)(f.b, a);
            if (D[1] !== G ? (t = () => {
                    G?.eligible()
                }, r = [G], D[1] = G, D[2] = t, D[3] = r) : (t = D[2], r = D[3]), (0, l.useEffect)(t, r), D[4] !== H || D[5] !== G ? (h = () => {
                    H && G?.shown()
                }, m = [H, G], D[4] = H, D[5] = G, D[6] = h, D[7] = m) : (h = D[6], m = D[7]), (0, l.useEffect)(h, m), !H) return null;
            D[8] !== O ? (b = O.formatMessage(S.expand), D[8] = O, D[9] = b) : b = D[9];
            let W = b;
            D[10] === Symbol.for("react.memo_cache_sentinel") ? (v = {
                "aria-describedby": void 0
            }, D[10] = v) : v = D[10], D[11] !== G ? (w = e => {
                e && G?.selected()
            }, D[11] = G, D[12] = w) : w = D[12], D[13] === Symbol.for("react.memo_cache_sentinel") ? (x = (0, i.jsx)(u.Q, {}), D[13] = x) : x = D[13], D[14] !== N || D[15] !== W ? (A = (0, i.jsx)(g.a, {
                className: N,
                color: "mapSurface",
                radius: "full",
                size: "inputIcon",
                "aria-label": W,
                type: "button",
                children: x
            }), D[14] = N, D[15] = W, D[16] = A) : A = D[16], D[17] !== W || D[18] !== A ? (I = (0, i.jsx)(n.a, {
                content: W,
                children: A
            }), D[17] = W, D[18] = A, D[19] = I) : I = D[19], D[20] === Symbol.for("react.memo_cache_sentinel") ? (j = (0, i.jsx)(p.f, {
                className: "sr-only",
                children: (0, i.jsx)(d.a, {
                    ...S.expandedTitle
                })
            }), D[20] = j) : j = D[20], D[21] !== O ? (M = O.formatMessage(S.expandedTitle), D[21] = O, D[22] = M) : M = D[22];
            let U = "immediate" === R ? G?.loaded : void 0;
            return D[23] !== F || D[24] !== U ? (L = (0, i.jsx)("fieldset", {
                disabled: !0,
                ref: T,
                onFocusCapture: k,
                onPointerDownCapture: _,
                onPointerUpCapture: _,
                onPointerMoveCapture: _,
                onPointerOverCapture: _,
                onPointerOutCapture: _,
                onMouseDownCapture: _,
                onMouseUpCapture: _,
                onMouseMoveCapture: _,
                onMouseOverCapture: _,
                onMouseOutCapture: _,
                onTouchStartCapture: _,
                onTouchMoveCapture: _,
                onTouchEndCapture: _,
                onWheelCapture: _,
                onKeyDownCapture: _,
                onKeyUpCapture: _,
                onContextMenuCapture: C,
                onDragStartCapture: C,
                onDoubleClickCapture: C,
                onClickCapture: C,
                onAuxClickCapture: C,
                onSubmitCapture: C,
                children: (0, i.jsx)(y, {
                    onLoaded: U,
                    children: F
                })
            }), D[23] = F, D[24] = U, D[25] = L) : L = D[25], D[26] !== M || D[27] !== L ? (E = (0, i.jsx)("div", {
                className: "max-h-[80dvh] overflow-auto overscroll-contain px-5 pt-12 pb-5",
                "aria-label": M,
                role: "region",
                tabIndex: 0,
                children: L
            }), D[26] = M, D[27] = L, D[28] = E) : E = D[28], D[29] !== I || D[30] !== E || D[31] !== w ? (P = (0, i.jsxs)(p.a, {
                size: "wide",
                variant: "chatgpt",
                backdrop: "modal",
                autoFocusCloseButton: !0,
                contentProps: v,
                onOpenChange: w,
                triggerContent: I,
                children: [j, E]
            }), D[29] = I, D[30] = E, D[31] = w, D[32] = P) : P = D[32], P
        }

        function k(e) {
            e.stopPropagation(), x(e.target) || e.currentTarget.parentElement?.focus({
                preventScroll: !0
            })
        }

        function y(e) {
            let a, t, n, r = (0, s.c)(5),
                {
                    children: o,
                    onLoaded: c
                } = e;
            return r[0] !== c ? (a = () => {
                c?.()
            }, t = [c], r[0] = c, r[1] = a, r[2] = t) : (a = r[1], t = r[2]), (0, l.useEffect)(a, t), r[3] !== o ? (n = (0, i.jsx)("div", {
                children: o
            }), r[3] = o, r[4] = n) : n = r[4], n
        }

        function x(e) {
            if (!e.matches("div, pre, section, article, ul, ol, table") || !e.matches(":not([role]), [role=region], [role=group], [role=table]")) return !1;
            let {
                overflowX: a,
                overflowY: t
            } = getComputedStyle(e);
            return [a, t].some(e => "auto" === e || "scroll" === e)
        }

        function _(e) {
            e.stopPropagation()
        }

        function C(e) {
            e.preventDefault(), e.stopPropagation()
        }

        function T(e) {
            let a = "dil-renderer, a[href], area[href], [tabindex], [contenteditable], summary, iframe, object, embed, audio[controls], video[controls]";

            function t(e) {
                e.matches("a[href], area[href]") && e.removeAttribute("href"), e.hasAttribute("contenteditable") && "false" !== e.getAttribute("contenteditable") && e.setAttribute("contenteditable", "false"), e.matches("iframe, object, embed") && e.setAttribute("inert", ""), "-1" === e.getAttribute("tabindex") || x(e) || e.setAttribute("tabindex", "-1")
            }

            function i(e) {
                e.matches(a) && t(e), e.querySelectorAll(a).forEach(t)
            }
            i(e);
            let s = new MutationObserver(e => {
                for (let s of e)
                    for (let e of ("attributes" === s.type && s.target instanceof Element && s.target.matches(a) && t(s.target), s.addedNodes)) e instanceof Element && i(e)
            });
            return s.observe(e, {
                subtree: !0,
                childList: !0,
                attributes: !0,
                attributeFilter: ["href", "tabindex", "contenteditable", "controls"]
            }), () => s.disconnect()
        }
        let S = (0, h.f)({
            expand: {
                id: "shareDialog.preview.expand",
                defaultMessage: "Expand preview"
            },
            expandedTitle: {
                id: "shareDialog.preview.expandedTitle",
                defaultMessage: "Share preview"
            },
            default: {
                id: "shareDialog.thread.previewLabel",
                defaultMessage: "Preview of the beginning of the shared chat"
            },
            image: {
                id: "shareDialog.image.previewLabel",
                defaultMessage: "Preview of the shared image"
            },
            loading: {
                id: "shareDialog.thread.previewLoading",
                defaultMessage: "Loading preview…"
            },
            response: {
                id: "shareDialog.response.previewLabel",
                defaultMessage: "Preview of the shared response"
            }
        })
    })
};