export const __rspack_esm_ids = [433520];
export const __webpack_modules__ = {
    P2zs: (function(e, a, t) {
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
            a: () => eE,
            ChatGptConversationShareRecoveryDialog: () => ej
        });
        var i = t("ABep"),
            s = t("QosV"),
            n = t("FS1B"),
            r = t("BOYb"),
            o = t("T0Rc"),
            l = t("BolX"),
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
            _ = t("SGsN"),
            y = t("yGJW"),
            T = t("OWtl"),
            S = t("akkX"),
            C = t("FGv0"),
            x = t("TnP0"),
            A = t("qKAH"),
            I = t("hZax"),
            M = t("zHp1"),
            L = t("WFY2"),
            j = t("rvFo"),
            E = t("HFSu"),
            P = t("taWv"),
            D = t("r9i9"),
            N = t("Y7np"),
            G = t("oU3c"),
            R = t("SEBt"),
            F = t("OOaz"),
            O = t("fwwN"),
            H = t("cQW3"),
            W = t("Tywu"),
            U = t("rfhJ"),
            q = t("ZtSy");

        function z(e) {
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
                    description: "Audience and privacy explanation in the personal ChatGPT conversation sharing dialog. The link includes messages through the selected point, but does not give viewers access to the underlying Memory sources. The learnMore tag links to the shared-links help article.",
                    values: {
                        learnMore: e => (0, i.jsx)(B, {
                            appearance: o,
                            children: e
                        })
                    }
                }), t[0] = o, t[1] = e) : e = t[1], e
            }
            return t[2] !== o ? (a = (0, i.jsx)(h.a, {
                id: "chatgptConversations.shareDialog.memoryDisclosure",
                defaultMessage: "Memory sources won't be shared with viewers. <learnMore>Learn more</learnMore>",
                description: "Privacy disclosure in ChatGPT content-sharing dialogs for personal and workspace accounts. Underlying Memory sources are not included in what recipients can view. The learnMore tag links to the shared-links help article.",
                values: {
                    learnMore: e => (0, i.jsx)(B, {
                        appearance: o,
                        children: e
                    })
                }
            }), t[2] = o, t[3] = a) : a = t[3], a
        }

        function B(e) {
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
        var K = t("k5RO"),
            V = t("slpy"),
            Y = t("on57"),
            $ = t("Sm6l"),
            Q = t("WAV0"),
            X = t("P2zs"),
            J = t.p + "assets/line.54d213ef65.svg",
            Z = t("O666"),
            ee = t("k6sM"),
            ea = t("HOLv"),
            et = t.p + "assets/facebook.a44c3b23dc.svg",
            ei = t.p + "assets/instagram.f89c02c412.svg",
            es = t.p + "assets/kakao-talk.9a71acddc9.svg",
            en = t.p + "assets/line.8701c39f94.svg",
            er = t.p + "assets/linkedin.a0e21ee4e9.svg",
            eo = t.p + "assets/messages.65e1f7f9bb.svg",
            el = t.p + "assets/reddit.ef23b998c8.svg",
            ec = t.p + "assets/snapchat.68114a3519.svg",
            ed = t.p + "assets/telegram.4e098d17e4.svg",
            eh = t.p + "assets/whatsapp.95a74777d3.svg",
            eg = t.p + "assets/x.f402deb07e.svg",
            ep = t.p + "assets/facebook-messenger.d2456ff12a.svg",
            eu = t.p + "assets/facebook-stories.a4b3bd52fa.svg",
            em = t.p + "assets/instagram-stories.c90c585419.svg",
            ef = t.p + "assets/kakao-talk.a52fcff4cb.svg",
            eb = t.p + "assets/linkedin.61d30fb4b9.svg",
            ev = t.p + "assets/messages.eed095b840.svg",
            ew = t.p + "assets/reddit.960af71a47.svg",
            ek = t.p + "assets/telegram.b7e1212639.svg",
            e_ = t.p + "assets/whatsapp.0a1329508c.svg",
            ey = t.p + "assets/x.1105bc9892.svg",
            eT = "mobileRow-V0E64y",
            eS = t("H6Am"),
            eC = t("G3Yw"),
            ex = t("ARht");

        function eA(e) {
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
                    onSocialShare: _,
                    experience: y,
                    onNativeShare: T,
                    canNativeShare: S,
                    country: C,
                    rowScrollPositions: x
                } = e,
                A = (0, d.a)();
            if (c[0] !== w || c[1] !== S || c[2] !== g || c[3] !== h || c[4] !== C || c[5] !== y.layout || c[6] !== y.unsupportedDestinationFallback || c[7] !== A || c[8] !== p || c[9] !== u || c[10] !== b || c[11] !== v || c[12] !== T || c[13] !== _ || c[14] !== x || c[15] !== f || c[16] !== m) {
                o = Symbol.for("react.early_return_sentinel");
                e: {
                    let e, s, l, d = null == v ? [] : [{
                        id: "download",
                        disabled: u || p,
                        icon: (0, i.jsx)(ea.a, {
                            asset: eS.a
                        }),
                        label: A.formatMessage({
                            id: "chatgptConversations.shareDialog.destination.download.label",
                            defaultMessage: "Download",
                            description: "Short label below a circular button in the generated-image Share dialog. Saves the selected image, or all images in the selected series, to the user's device without creating a shared link."
                        }),
                        onClick: v
                    }];c[22] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(ea.a, {
                        asset: ex.a
                    }), c[22] = e) : e = c[22];
                    let I = {
                            id: "copy",
                            disabled: g,
                            icon: e,
                            label: h,
                            onClick: b
                        },
                        M = S ? [{
                            id: "native",
                            disabled: g,
                            icon: (0, i.jsx)(ea.a, {
                                asset: eC.a
                            }),
                            label: A.formatMessage({
                                id: "chatgptConversations.mobileImageShare.native",
                                defaultMessage: "Share to",
                                description: "Short action label in the mobile generated-image share sheet. Selecting it opens the device's operating-system share sheet with the public image or reusable prompt link. It appears beside Copy link and Download."
                            }),
                            onClick: T
                        }] : [],
                        L = [...d, I, ...M],
                        j = f ? (0, K.e)({
                            country: C
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
                                    a = c(ev), t = d(eo), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.messages",
                                        defaultMessage: "Messages",
                                        description: "Short destination label in the mobile generated-image share sheet. Selecting it opens a text-message draft containing the public image link. This means the device's Messages app, not ChatGPT messages."
                                    });
                                    break;
                                case "whatsapp":
                                    a = c(e_), t = d(eh), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.whatsapp",
                                        defaultMessage: "WhatsApp",
                                        description: "Short destination label in the mobile generated-image share sheet. Selecting it opens WhatsApp with the public image link ready to send. WhatsApp is a brand name."
                                    });
                                    break;
                                case "instagram-stories":
                                    a = c(em), t = d(ei), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.instagramStories",
                                        defaultMessage: "Instagram",
                                        description: "Short destination label in the mobile generated-image share sheet for sharing through Instagram Stories. Depending on the experiment assignment, selecting it opens the operating-system share sheet or the Instagram app-store page. Instagram is a brand name."
                                    });
                                    break;
                                case "facebook-stories":
                                    a = c(eu), t = d(et), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.facebookStories",
                                        defaultMessage: "Facebook",
                                        description: "Short destination label in the mobile generated-image share sheet for sharing through Facebook Stories. Depending on the experiment assignment, selecting it opens the operating-system share sheet or the Facebook app-store page. Facebook is a brand name."
                                    });
                                    break;
                                case "telegram":
                                    a = c(ek), t = d(ed), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.telegram",
                                        defaultMessage: "Telegram",
                                        description: "Short destination label in the mobile generated-image share sheet. Selecting it opens Telegram with the public image link ready to send. Telegram is a brand name."
                                    });
                                    break;
                                case "facebook-messenger":
                                    a = c(ep), t = d(et), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.facebookMessenger",
                                        defaultMessage: "Messenger",
                                        description: "Short destination label in the mobile generated-image share sheet for Facebook Messenger. Depending on the experiment assignment, selecting it opens the operating-system share sheet or the Messenger app-store page. Messenger is a brand name."
                                    });
                                    break;
                                case "kakao-talk":
                                    a = c(ef), t = d(es), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.kakaoTalk",
                                        defaultMessage: "KakaoTalk",
                                        description: "Short destination label shown to users in Korea in the mobile generated-image share sheet. Depending on the experiment assignment, selecting it opens the operating-system share sheet or the KakaoTalk app-store page. KakaoTalk is a brand name."
                                    });
                                    break;
                                case "snapchat-stories":
                                    a = (0, i.jsx)(ee.a, {
                                        "aria-hidden": "true",
                                        className: "text-brand-logo-foreground"
                                    }), t = d(ec), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.snapchatStories",
                                        defaultMessage: "Snapchat",
                                        description: "Short destination label in the mobile generated-image share sheet for sharing through Snapchat Stories. Depending on the experiment assignment, selecting it opens the operating-system share sheet or the Snapchat app-store page. Snapchat is a brand name."
                                    });
                                    break;
                                case "line":
                                    a = c(J), t = d(en), s = o.formatMessage({
                                        id: "postSharingModal.line",
                                        defaultMessage: "LINE",
                                        description: "Short label for the LINE destination in ChatGPT conversation, message, and image sharing dialogs and menus. Selecting it opens LINE sharing so the user can choose recipients and send the shared link. Appears alongside X and LinkedIn. LINE is a messaging app brand name; keep its Latin letters and capitalization."
                                    });
                                    break;
                                case "x":
                                    a = c(ey), t = d(eg), s = o.formatMessage({
                                        id: "chatgptConversations.shareDialog.destination.x.label",
                                        defaultMessage: "X",
                                        description: "Short destination label below a circular button in a ChatGPT post sharing dialog for a conversation, response, or generated image. Selecting it opens X's post composer with the public post URL."
                                    });
                                    break;
                                case "linkedin":
                                    a = c(eb), t = d(er), s = o.formatMessage({
                                        id: "chatgptConversations.shareDialog.destination.linkedin.label",
                                        defaultMessage: "LinkedIn",
                                        description: "Short destination label below a circular button in a ChatGPT post sharing dialog for a conversation, response, or generated image. Selecting it opens LinkedIn's post composer with the public post URL."
                                    });
                                    break;
                                case "reddit":
                                    a = c(ew), t = d(el), s = o.formatMessage({
                                        id: "chatgptConversations.shareDialog.destination.reddit.label",
                                        defaultMessage: "Reddit",
                                        description: "Short destination label below a circular button in a ChatGPT post sharing dialog for a conversation, response, or generated image. Selecting it opens Reddit's submission form with the public post URL. Other destinations are Copy link, X, and LinkedIn."
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
                            disabled: m || "native-share" === y.unsupportedDestinationFallback && (0, K.g)(e) && !S,
                            intl: A,
                            onSocialShare: _
                        })) : [],
                        E = "two-rows" === y.layout && j.length > 0;c[23] !== x ? (s = e => null == x ? {} : {
                        onScroll: a => {
                            x[e] = a.currentTarget.scrollLeft
                        },
                        ref: a => {
                            null != a && (a.scrollLeft = x[e] ?? 0)
                        }
                    }, c[23] = x, c[24] = s) : s = c[24];
                    let P = s;c[25] !== p || c[26] !== u ? (l = (e, a) => {
                        let {
                            id: t,
                            disabled: s,
                            icon: n,
                            iconBackground: r,
                            label: o,
                            onClick: l
                        } = e, c = "copy" === t && p || "download" === t && u;
                        return (0, i.jsx)(Q.a, {
                            extension: "download" === t,
                            children: (0, i.jsxs)($.a, {
                                "aria-label": o,
                                "aria-busy": c,
                                color: "shareDestination",
                                unstyled: !0,
                                className: (0, Y.b)("mobileDestination-JRc58g", a && "mobileTwoRowDestination-jahy9S"),
                                "data-destination": t,
                                disabled: s,
                                size: "shareDestination",
                                type: "copy" === t ? "submit" : "button",
                                onClick: l,
                                children: [(0, i.jsxs)("span", {
                                    className: (0, Y.b)("destinationIcon-EuU6jl", null != r && "destinationIconWithArtwork-eYPnWH"),
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
                        let e, a, t, s, n, r, l = [...d, ...M, I];
                        c[28] !== P ? (e = P("destinations"), c[28] = P, c[29] = e) : e = c[29], c[30] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, Y.b)("box-border flex min-w-0 w-full gap-x-5 overflow-x-auto overscroll-x-contain px-5 pt-5 pb-8", eT), c[30] = a) : a = c[30], c[31] !== D ? (t = e => D(e, !0), c[31] = D, c[32] = t) : t = c[32], c[33] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsx)("div", {
                            className: "w-full border-t-hairline border-default",
                            "aria-hidden": "true"
                        }), c[33] = s) : s = c[33], c[34] !== P ? (n = P("actions"), c[34] = P, c[35] = n) : n = c[35], c[36] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, Y.b)("box-border flex min-w-0 w-full gap-x-5 overflow-x-auto overscroll-x-contain px-5 pt-5 pb-8", eT, "mobileUtilityRow-iCKQaL"), c[36] = r) : r = c[36], o = (0, i.jsxs)("div", {
                            className: "flex w-full min-w-0 flex-col",
                            children: [(0, i.jsx)("div", {
                                "data-mobile-image-share-row": "destinations",
                                ...e,
                                className: a,
                                children: j.map(t)
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
                    c[39] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, Y.b)("flex w-full gap-x-6 overflow-x-auto overscroll-x-contain px-6", eT), c[39] = n) : n = c[39],
                    r = [...L, ...j].map(e => D(e, !1))
                }
                c[0] = w, c[1] = S, c[2] = g, c[3] = h, c[4] = C, c[5] = y.layout, c[6] = y.unsupportedDestinationFallback, c[7] = A, c[8] = p, c[9] = u, c[10] = b, c[11] = v, c[12] = T, c[13] = _, c[14] = x, c[15] = f, c[16] = m, c[17] = a, c[18] = t, c[19] = n, c[20] = r, c[21] = o
            } else a = c[17], t = c[18], n = c[19], r = c[20], o = c[21];
            return o !== Symbol.for("react.early_return_sentinel") ? o : (c[40] !== w || c[41] !== a || c[42] !== t || c[43] !== n || c[44] !== r ? (l = (0, i.jsxs)("div", {
                "data-mobile-image-share-row": a,
                ...t,
                className: n,
                children: [r, w]
            }), c[40] = w, c[41] = a, c[42] = t, c[43] = n, c[44] = r, c[45] = l) : l = c[45], l)
        }

        function eI(e) {
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
                _ = void 0 !== m && m,
                y = void 0 === v ? "button" : v;
            d[0] === Symbol.for("react.memo_cache_sentinel") ? (a = {
                layer: "3136899520",
                parameter: "large_share_destinations"
            }, d[0] = a) : a = d[0];
            let T = (0, l.x)(Z.b, a),
                S = T ? u.large : u.compact,
                C = T ? "size-16" : "size-11";
            d[1] !== C ? (t = (0, Y.b)("share-destination-icon flex items-center justify-center rounded-full", C), d[1] = C, d[2] = t) : t = d[2], d[3] !== T || d[4] !== S || d[5] !== _ ? (n = _ ? (0, i.jsx)(k.a, {
                as: "span",
                className: T ? "size-8" : "icon-sm"
            }) : S, d[3] = T, d[4] = S, d[5] = _, d[6] = n) : n = d[6], d[7] !== t || d[8] !== n ? (r = (0, i.jsx)("span", {
                className: t,
                children: n
            }), d[7] = t, d[8] = n, d[9] = r) : r = d[9];
            let x = void 0 !== b && b ? "polite" : void 0;
            return d[10] !== f || d[11] !== x ? (o = (0, i.jsx)("span", {
                className: "w-full text-center text-xs whitespace-nowrap text-default select-none",
                "aria-live": x,
                children: f
            }), d[10] = f, d[11] = x, d[12] = o) : o = d[12], d[13] !== h || d[14] !== g || d[15] !== p || d[16] !== _ || d[17] !== w || d[18] !== o || d[19] !== r || d[20] !== y ? (c = (0, i.jsxs)($.a, {
                "aria-label": h,
                "aria-busy": _,
                "data-destination": g,
                color: "shareDestination",
                disabled: p,
                size: "shareDestination",
                type: y,
                onClick: w,
                children: [r, o]
            }), d[13] = h, d[14] = g, d[15] = p, d[16] = _, d[17] = w, d[18] = o, d[19] = r, d[20] = y, d[21] = c) : c = d[21], c
        }

        function eM(e) {
            let a, t, n, r, o, c, h, g, p, u = (0, s.c)(66),
                {
                    copyLabel: m,
                    copyDisabled: f,
                    isBusy: b,
                    isDownloading: w,
                    socialDestinationsDisabled: _,
                    showSocialDestinations: y,
                    onCopy: T,
                    onDownload: S,
                    additionalActions: C,
                    onSocialShare: x,
                    mobileImageActions: A,
                    projectStyleEligible: M
                } = e,
                L = void 0 !== w && w,
                j = (0, I.l)(),
                E = void 0 !== M && M && null == A && !!j.userID?.trim();
            u[0] === Symbol.for("react.memo_cache_sentinel") ? (a = {
                layer: "1145946487",
                parameter: "project_style_share_buttons"
            }, u[0] = a) : a = u[0];
            let P = !0 === (0, l.x)(E ? Z.b : null, a),
                D = null != A;
            u[1] !== D ? (t = {
                layer: "3136899520",
                parameter: "large_share_destinations",
                disableExposureLog: D
            }, u[1] = D, u[2] = t) : t = u[2];
            let N = (0, l.x)(P ? null : Z.b, t),
                G = (0, d.a)(),
                {
                    client: R
                } = (0, I.h)();
            u[3] !== R ? (n = R.getContext().user?.country?.trim().toUpperCase(), u[3] = R, u[4] = n) : n = u[4];
            let F = n,
                O = null == A && "JP" === F && y,
                H = !O;
            u[5] !== H ? (r = {
                layer: "494762337",
                parameter: "enabled",
                disableExposureLog: H
            }, u[5] = H, u[6] = r) : r = u[6];
            let W = (0, l.x)(O ? Z.b : null, r),
                U = O && W;
            if (null != A) {
                let e;
                return u[7] !== C || u[8] !== f || u[9] !== m || u[10] !== F || u[11] !== b || u[12] !== L || u[13] !== A.canNativeShare || u[14] !== A.experience || u[15] !== A.onNativeShare || u[16] !== A.rowScrollPositions || u[17] !== T || u[18] !== S || u[19] !== x || u[20] !== y || u[21] !== _ ? (e = (0, i.jsx)(eA, {
                    copyLabel: m,
                    copyDisabled: f,
                    isBusy: b,
                    isDownloading: L,
                    socialDestinationsDisabled: _,
                    showSocialDestinations: y,
                    onCopy: T,
                    onDownload: S,
                    additionalActions: C,
                    onSocialShare: x,
                    experience: A.experience,
                    onNativeShare: A.onNativeShare,
                    canNativeShare: A.canNativeShare,
                    country: F,
                    rowScrollPositions: A.rowScrollPositions
                }), u[7] = C, u[8] = f, u[9] = m, u[10] = F, u[11] = b, u[12] = L, u[13] = A.canNativeShare, u[14] = A.experience, u[15] = A.onNativeShare, u[16] = A.rowScrollPositions, u[17] = T, u[18] = S, u[19] = x, u[20] = y, u[21] = _, u[22] = e) : e = u[22], e
            }
            if (u[23] !== C || u[24] !== f || u[25] !== m || u[26] !== G || u[27] !== b || u[28] !== L || u[29] !== T || u[30] !== S || u[31] !== x || u[32] !== U || u[33] !== y || u[34] !== _ || u[35] !== P) {
                o = Symbol.for("react.early_return_sentinel");
                e: {
                    let e, a, t, s = null == S ? [] : [{
                        id: "download",
                        largeIcon: (0, i.jsx)(v.s, {
                            "aria-hidden": "true"
                        }),
                        disabled: L,
                        icon: (0, i.jsx)(v.r, {}),
                        label: G.formatMessage({
                            id: "chatgptConversations.shareDialog.destination.download.label",
                            defaultMessage: "Download",
                            description: "Short label below a circular button in the generated-image Share dialog. Saves the selected image, or all images in the selected series, to the user's device without creating a shared link."
                        }),
                        onClick: S
                    }];u[38] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(v.Ce, {
                        "aria-hidden": "true"
                    }), u[38] = e) : e = u[38],
                    u[39] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, i.jsx)(v.Be, {}), u[39] = a) : a = u[39],
                    u[40] !== f || u[41] !== m || u[42] !== T ? (t = {
                        id: "copy",
                        largeIcon: e,
                        disabled: f,
                        icon: a,
                        label: m,
                        onClick: T
                    }, u[40] = f, u[41] = m, u[42] = T, u[43] = t) : t = u[43];
                    let n = t,
                        r = y ? [...U ? [function(e) {
                            let {
                                disabled: a,
                                intl: t,
                                onSocialShare: s
                            } = e, n = (0, i.jsx)("img", {
                                alt: "",
                                "aria-hidden": !0,
                                src: J
                            });
                            return {
                                id: "line",
                                largeIcon: n,
                                disabled: a,
                                icon: n,
                                label: t.formatMessage({
                                    id: "postSharingModal.line",
                                    defaultMessage: "LINE",
                                    description: "Short label for the LINE destination in ChatGPT conversation, message, and image sharing dialogs and menus. Selecting it opens LINE sharing so the user can choose recipients and send the shared link. Appears alongside X and LinkedIn. LINE is a messaging app brand name; keep its Latin letters and capitalization."
                                }),
                                onClick: e => s("line", e)
                            }
                        }({
                            disabled: _,
                            intl: G,
                            onSocialShare: x
                        })] : [], eL({
                            destination: "x",
                            disabled: _,
                            intl: G,
                            onSocialShare: x
                        }), eL({
                            destination: "linkedin",
                            disabled: _,
                            intl: G,
                            onSocialShare: x
                        }), ...U ? [] : [eL({
                            destination: "reddit",
                            disabled: _,
                            intl: G,
                            onSocialShare: x
                        })]] : [];
                    if (P) {
                        let e, a, t, n = e => {
                            let {
                                id: a,
                                disabled: t,
                                icon: s,
                                label: n,
                                onClick: r
                            } = e;
                            return (0, i.jsx)(V.a, {
                                content: n,
                                children: (0, i.jsx)($.a, {
                                    "aria-label": n,
                                    "aria-busy": "download" === a && L,
                                    color: "secondary",
                                    "data-destination": a,
                                    disabled: t,
                                    radius: "full",
                                    size: "dialogAction",
                                    type: "button",
                                    uniform: !0,
                                    onClick: r,
                                    children: "download" === a && L ? (0, i.jsx)(k.a, {
                                        className: "icon-sm"
                                    }) : s
                                })
                            }, a)
                        };
                        u[44] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(v.Ae, {}), u[44] = e) : e = u[44], u[45] !== m ? (a = (0, i.jsx)("span", {
                            "aria-live": "polite",
                            children: m
                        }), u[45] = m, u[46] = a) : a = u[46], u[47] !== f || u[48] !== m || u[49] !== b || u[50] !== T || u[51] !== a ? (t = (0, i.jsxs)($.a, {
                            "aria-label": m,
                            "aria-busy": b,
                            color: "primary",
                            "data-destination": "copy",
                            disabled: f,
                            loading: b,
                            size: "dialogAction",
                            type: "submit",
                            onClick: T,
                            children: [e, a]
                        }), u[47] = f, u[48] = m, u[49] = b, u[50] = T, u[51] = a, u[52] = t) : t = u[52], o = (0, i.jsxs)("div", {
                            className: "flex w-full flex-wrap items-center justify-end gap-2 select-none",
                            children: [r.map(n), C, (0, i.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [s.map(n), t]
                            })]
                        });
                        break e
                    }
                    c = [n, ...r, ...s]
                }
                u[23] = C, u[24] = f, u[25] = m, u[26] = G, u[27] = b, u[28] = L, u[29] = T, u[30] = S, u[31] = x, u[32] = U, u[33] = y, u[34] = _, u[35] = P, u[36] = o, u[37] = c
            } else o = u[36], c = u[37];
            if (o !== Symbol.for("react.early_return_sentinel")) return o;
            let q = c,
                z = null == C && "flex-wrap justify-center gap-x-6 gap-y-4",
                B = null != C && "gap-3",
                K = null != C && N && "flex-wrap justify-center",
                X = null != C && !N && "justify-start overflow-x-auto sm:justify-center";
            return u[53] !== z || u[54] !== B || u[55] !== K || u[56] !== X ? (h = (0, Y.b)("flex w-full", z, B, K, X), u[53] = z, u[54] = B, u[55] = K, u[56] = X, u[57] = h) : h = u[57], u[58] !== q || u[59] !== b || u[60] !== L ? (g = q.map(e => {
                let {
                    id: a,
                    disabled: t,
                    icon: s,
                    largeIcon: n,
                    label: r,
                    onClick: o
                } = e, l = "copy" === a && b || "download" === a && L;
                return (0, i.jsx)(Q.a, {
                    extension: "download" === a,
                    children: (0, i.jsx)(eI, {
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
            }), u[58] = q, u[59] = b, u[60] = L, u[61] = g) : g = u[61], u[62] !== C || u[63] !== h || u[64] !== g ? (p = (0, i.jsxs)("div", {
                className: h,
                children: [g, C]
            }), u[62] = C, u[63] = h, u[64] = g, u[65] = p) : p = u[65], p
        }

        function eL(e) {
            let a, t, s, {
                destination: n,
                disabled: r,
                intl: o,
                onSocialShare: l
            } = e;
            switch (n) {
                case "x":
                    a = (0, i.jsx)(v.lj, {
                        "aria-hidden": "true"
                    }), t = (0, i.jsx)(v.mj, {
                        "aria-hidden": "true"
                    }), s = o.formatMessage({
                        id: "chatgptConversations.shareDialog.destination.x.label",
                        defaultMessage: "X",
                        description: "Short destination label below a circular button in a ChatGPT post sharing dialog for a conversation, response, or generated image. Selecting it opens X's post composer with the public post URL."
                    });
                    break;
                case "linkedin":
                    a = (0, i.jsx)(X.a, {
                        "aria-hidden": "true"
                    }), t = (0, i.jsx)(v.De, {
                        "aria-hidden": "true"
                    }), s = o.formatMessage({
                        id: "chatgptConversations.shareDialog.destination.linkedin.label",
                        defaultMessage: "LinkedIn",
                        description: "Short destination label below a circular button in a ChatGPT post sharing dialog for a conversation, response, or generated image. Selecting it opens LinkedIn's post composer with the public post URL."
                    });
                    break;
                case "reddit":
                    a = (0, i.jsx)(v.Ug, {
                        "aria-hidden": "true"
                    }), t = (0, i.jsx)(v.Vg, {
                        "aria-hidden": "true"
                    }), s = o.formatMessage({
                        id: "chatgptConversations.shareDialog.destination.reddit.label",
                        defaultMessage: "Reddit",
                        description: "Short destination label below a circular button in a ChatGPT post sharing dialog for a conversation, response, or generated image. Selecting it opens Reddit's submission form with the public post URL. Other destinations are Copy link, X, and LinkedIn."
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

        function ej(e) {
            let a, t, n, r, o, d, h = (0, s.c)(12);
            h[0] !== e ? ({
                accountId: a,
                onClose: t,
                ...n
            } = e, h[0] = e, h[1] = a, h[2] = t, h[3] = n) : (a = h[1], t = h[2], n = h[3]);
            let g = (0, l.z)(u.f) === a;
            return h[4] !== g || h[5] !== t ? (r = () => {
                g || t()
            }, o = [g, t], h[4] = g, h[5] = t, h[6] = r, h[7] = o) : (r = h[6], o = h[7]), (0, c.useEffect)(r, o), h[8] !== g || h[9] !== t || h[10] !== n ? (d = g ? (0, i.jsx)(eE, {
                ...n,
                onClose: t
            }) : null, h[8] = g, h[9] = t, h[10] = n, h[11] = d) : d = h[11], d
        }

        function eE(e) {
            let a, t, n = (0, s.c)(9);
            return n[0] !== e.publishedShareLink?.shareLinkId || n[1] !== e.publishedWidget || n[2] !== e.responseRegion || n[3] !== e.shareSessionId || n[4] !== e.widget ? (a = null == e.widget && null == e.publishedWidget && null == e.responseRegion ? void 0 : JSON.stringify([e.widget?.attachment, e.responseRegion?.attachment, e.publishedShareLink?.shareLinkId, e.shareSessionId]), n[0] = e.publishedShareLink?.shareLinkId, n[1] = e.publishedWidget, n[2] = e.responseRegion, n[3] = e.shareSessionId, n[4] = e.widget, n[5] = a) : a = n[5], n[6] !== e || n[7] !== a ? (t = (0, i.jsx)(eP, {
                ...e
            }, a), n[6] = e, n[7] = a, n[8] = t) : t = n[8], t
        }

        function eP(e) {
            let a, t, g, m, v, k, E, q, z, B, V, Y, $, Q, X, J, Z, ee, ea, et, ei, es, en, er, eo, el, ec, ed, eh, eg, ep, eu, em, ef, eb, ev, ew, ek, e_, ey, eT, eS, eC, ex, eA, eI, eL, ej, eE, eP, eq, ez, eB = (0, s.c)(385),
                {
                    currentNodeId: eK,
                    image: eV,
                    imagePromptTemplate: eY,
                    imageShareOptions: e$,
                    recoveryShareLink: eQ,
                    publishedShareLink: eX,
                    publishedWidget: eJ,
                    messageIds: e5,
                    mobileImageExperience: e4,
                    mobileImageRowScrollPositions: e6,
                    trackMobileImageShareLifecycle: e7,
                    onImageShareLinkPrepared: e8,
                    onClose: e9,
                    onResult: ae,
                    previewTurns: aa,
                    loadExpandedConversation: at,
                    privacyNotices: ai,
                    prompt: as,
                    receiverShareLink: an,
                    responseRegion: ar,
                    response: ao,
                    serverConversationId: al,
                    shareSessionId: ac,
                    source: ad,
                    title: ah,
                    widget: ag
                } = e,
                ap = (0, l.y)(T.a),
                au = (0, I.j)("3136899520"),
                [am, af] = (0, c.useState)(!1),
                ab = (0, l.z)(null)?.data,
                av = (0, l.z)(null),
                aw = (0, l.x)(null, al),
                ak = (0, d.a)(),
                a_ = (0, c.useRef)(!1),
                ay = (0, c.useRef)(!1);
            eB[0] !== ae ? (a = () => (a_.current = !0, () => {
                a_.current = !1, queueMicrotask(() => {
                    a_.current || ay.current || (ay.current = !0, ae?.(!1))
                })
            }), t = [ae], eB[0] = ae, eB[1] = a, eB[2] = t) : (a = eB[1], t = eB[2]), (0, c.useEffect)(a, t), eB[3] !== ae ? (g = function(e) {
                ay.current || (ay.current = !0, ae?.(e))
            }, eB[3] = ae, eB[4] = g) : g = eB[4];
            let aT = g;
            eB[5] !== aT || eB[6] !== e9 ? (m = function() {
                aT(!1), e9()
            }, eB[5] = aT, eB[6] = e9, eB[7] = m) : m = eB[7];
            let aS = m,
                aC = (0, c.useContext)(p.a);
            eB[8] !== eV || eB[9] !== ap || eB[10] !== al ? (v = null == eV ? void 0 : (0, H.a)(ap, al, eV), eB[8] = eV, eB[9] = ap, eB[10] = al, eB[11] = v) : v = eB[11];
            let ax = v;
            eB[12] !== eY || eB[13] !== ax || eB[14] !== eX || eB[15] !== an || eB[16] !== eQ || eB[17] !== ap.queryClient ? (k = () => an ?? eX ?? eQ ?? (null == ax || null != eY ? null : ap.queryClient.getQueryData(ax.queryKey) ?? null), eB[12] = eY, eB[13] = ax, eB[14] = eX, eB[15] = an, eB[16] = eQ, eB[17] = ap.queryClient, eB[18] = k) : k = eB[18];
            let [aA, aI] = (0, c.useState)(k), [aM] = (0, c.useState)(eH), aL = ac ?? aM, [aj, aE] = (0, c.useState)("message");
            eB[19] !== e5 || eB[20] !== aa || eB[21] !== ao || eB[22] !== au ? (E = null != e5 && null != ao && null != aa && au.get("message_share_scope_picker", !1), eB[19] = e5, eB[20] = aa, eB[21] = ao, eB[22] = au, eB[23] = E) : E = eB[23];
            let aP = E,
                aD = aP && "conversation" === aj;
            eB[24] !== aL ? (q = ["expanded-conversation-share", aL], eB[24] = aL, eB[25] = q) : q = eB[25];
            let aN = q,
                aG = aD && null != at;
            eB[26] !== at ? (z = e => {
                let {
                    signal: a
                } = e;
                if (null == at) throw Error("Expanded conversation loader unavailable");
                return at(a)
            }, eB[26] = at, eB[27] = z) : z = eB[27], eB[28] !== aN || eB[29] !== z || eB[30] !== aG ? (B = {
                enabled: aG,
                queryKey: aN,
                queryFn: z,
                staleTime: 1 / 0,
                gcTime: 0,
                retry: !1
            }, eB[28] = aN, eB[29] = z, eB[30] = aG, eB[31] = B) : B = eB[31];
            let {
                data: aR,
                error: aF,
                isFetching: aO,
                refetch: aH
            } = (0, o.a)(B), [aW, aU] = (0, c.useState)("idle"), [aq, az] = (0, c.useState)(null != eQ ? "copy-failed" : null), [aB, aK] = (0, c.useState)(!1);
            eB[32] !== al ? (V = ["chatgpt-conversation-share", al], eB[32] = al, eB[33] = V) : V = eB[33];
            let aV = V,
                aY = null == eQ && null == an && null == eX && null == as && null == eV && (null == e5 || aD) && null == ar && null == ag;
            eB[34] !== eK || eB[35] !== al ? (Y = () => (0, D.i)({
                conversationId: al,
                currentNodeId: eK
            }), eB[34] = eK, eB[35] = al, eB[36] = Y) : Y = eB[36], eB[37] !== aV || eB[38] !== aY || eB[39] !== Y ? ($ = {
                enabled: aY,
                queryFn: Y,
                queryKey: aV,
                retry: !1,
                staleTime: j.b.ONE_MINUTE
            }, eB[37] = aV, eB[38] = aY, eB[39] = Y, eB[40] = $) : $ = eB[40];
            let {
                data: a$,
                error: aQ,
                isLoading: aX
            } = (0, o.a)($);
            eB[41] === Symbol.for("react.memo_cache_sentinel") ? (Q = {
                enabled: !1,
                queryFn: eO,
                queryKey: ["accounts", "check"],
                staleTime: j.b.ONE_MINUTE
            }, eB[41] = Q) : Q = eB[41];
            let {
                data: aJ
            } = (0, o.a)(Q), aZ = null != eV, a1 = null != e4 && aZ, a0 = a1 || !0 === e7, a2 = null != an, a3 = (eV?.additionalImages?.length ?? 0) > 0, a5 = eV?.item.isAnimated === !0 && !a3;
            eB[42] !== eV || eB[43] !== al || eB[44] !== aL ? (X = (0, P.c)((0, F.c)(al), void 0, null != eV && null == eV.previewSrc ? aL : void 0), eB[42] = eV, eB[43] = al, eB[44] = aL, eB[45] = X) : X = eB[45];
            let {
                src: a4,
                isLoading: a6
            } = (0, M.k)(null != eV && (a3 || null == eV.previewSrc) ? eV.item.src ?? "" : "", X), a7 = null != eV && null == eV.previewSrc && null == a4, a8 = a3 ? "image_series" : "single_image", a9 = ag ?? eJ, te = null != e5 || null != ar || null != a9 || an?.contentType === "message", ta = null != ar, tt = a9?.metadata.widgetType === "visualization", ti = a9?.metadata.widgetName === "create_interactive_poll" || a9?.metadata.widgetName === "CreateInteractivePoll", ts = null != as || null != eY, tn = aZ || te || ts, tr = !tn || aD, to = tn || !0, tl = "conversation";
            if (tt ? tl = "widget" : null != eY ? tl = "prompt" : a5 ? tl = "gif" : aZ ? tl = a3 ? "images" : "image" : ta ? tl = "response-region" : te ? tl = aD ? "conversation" : "message" : ts && (tl = "prompt"), null == ao) J = ai;
            else if (aD) J = aR?.privacyNotices ?? (null == at ? ai : void 0);
            else {
                let e;
                eB[46] !== ao ? (e = (0, D.m)(ao), eB[46] = ao, eB[47] = e) : e = eB[47], J = e
            }
            let tc = aZ || (!tn || te) && J?.hasImageReference === !0;
            eB[48] !== eV || eB[49] !== a3 || eB[50] !== ah ? (Z = (a3 ? void 0 : eV?.item.chatGptDisplayTitle) ?? (0, G.c)(ah), eB[48] = eV, eB[49] = a3, eB[50] = ah, eB[51] = Z) : Z = eB[51];
            let td = Z,
                th = tr && a$?.is_public === !0 && !0 === a$.is_visible,
                tg = aJ?.accounts?.find(e => e.id === (aC?.accountId ?? aJ.account_ordering?.[0])),
                tp = tg?.structure ?? aC?.accountStructureAtLogin,
                tu = "unknown";
            aA?.isWorkspaceOnly != null ? tu = aA.isWorkspaceOnly ? "workspace" : "public" : null == a$ || aZ ? ("personal" === tp || "workspace" === tp) && (tu = "workspace" === tp ? "workspace" : "public") : tu = a$.share_url.includes("/share/e/") ? "workspace" : "public", eB[52] !== eV || eB[53] !== eY || eB[54] !== ax?.queryKey || eB[55] !== al ? (ee = null != eY ? ["chatgpt-image-prompt-share-preparation", al, eV?.item.id, eY.revision] : ax?.queryKey ?? ["disabled-chatgpt-image-share-query"], eB[52] = eV, eB[53] = eY, eB[54] = ax?.queryKey, eB[55] = al, eB[56] = ee) : ee = eB[56], eB[57] !== eY || eB[58] !== ax?.queryFn ? (ea = null != eY ? () => eY.createLink("native") : ax?.queryFn ?? eF, eB[57] = eY, eB[58] = ax?.queryFn, eB[59] = ea) : ea = eB[59];
            let tm = a1 && (0, W.a)() && eY?.actionsDisabled !== !0 && (null != eY || null != ax) && "public" === tu && null == aA;
            eB[60] !== ee || eB[61] !== ea || eB[62] !== tm ? (et = {
                queryKey: ee,
                queryFn: ea,
                enabled: tm,
                retry: !1,
                staleTime: 1 / 0
            }, eB[60] = ee, eB[61] = ea, eB[62] = tm, eB[63] = et) : et = eB[63];
            let tf = (0, o.a)(et);
            tf.data?.isWorkspaceOnly != null && (tu = tf.data.isWorkspaceOnly ? "workspace" : "public");
            let tb = aA ?? tf.data ?? null,
                tv = null == eY ? tb : null;
            eB[64] !== e8 || eB[65] !== tv ? (ei = () => {
                null != tv && e8?.(tv)
            }, es = [e8, tv], eB[64] = e8, eB[65] = tv, eB[66] = ei, eB[67] = es) : (ei = eB[66], es = eB[67]), (0, c.useEffect)(ei, es);
            let tw = tb?.shareLinkUrl ?? (th ? a$.share_url : null),
                tk = tr && null == tb && th && a$.current_node_id !== eK,
                t_ = "workspace" === tu,
                ty = "creating" === aW,
                tT = aD && null != at && null == aR,
                tS = tr && aX || tT && aO;
            eB[68] !== tb || eB[69] !== aq || eB[70] !== aF || eB[71] !== aQ || eB[72] !== tf.error || eB[73] !== tT || eB[74] !== aY ? (null == (en = aq) && tT && null != aF && (en = "conversation-load-failed"), null == en && aY && null == tb && null != aQ && (en = aQ instanceof D.a ? "blocked" : "create-failed"), null == en && null == tb && null != tf.error && (en = tf.error instanceof D.a ? "blocked" : "create-failed"), eB[68] = tb, eB[69] = aq, eB[70] = aF, eB[71] = aQ, eB[72] = tf.error, eB[73] = tT, eB[74] = aY, eB[75] = en) : en = eB[75];
            let tC = e3.description,
                tx = e3.publicLinkAudience;
            if (tt) {
                let e;
                eB[76] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    ...e3.widgetTitle
                }), eB[76] = e) : e = eB[76], er = e
            } else if (a5) {
                let e;
                eB[77] !== eY ? (e = null != eY ? (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.gifWithPromptTitle",
                    defaultMessage: "Share GIF with prompt",
                    description: "Heading of the generated GIF sharing dialog when GIF with prompt is selected. Shares the animated GIF and its reusable prompt. The other option is GIF only."
                }) : (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.gifTitle",
                    defaultMessage: "Share GIF",
                    description: "Heading of the dialog for sharing one generated animated GIF. Keep GIF as the file format name."
                }), eB[77] = eY, eB[78] = e) : e = eB[78], er = e
            } else if (null != eY) {
                let e;
                eB[79] !== eY.label ? (e = "image_with_prompt" === eY.label ? (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.imageWithPromptTitle",
                    defaultMessage: "Share image with prompt",
                    description: "Heading of the generated-image share dialog when Image with prompt is selected. Users share the generated image together with its reusable prompt so recipients can try the prompt. The other option is Image only."
                }) : (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.imagePromptTitle",
                    defaultMessage: "Share prompt with image",
                    description: "Short heading of the generated-image share dialog when Prompt with image is selected. Users share the generated image and its reusable prompt so recipients can try the prompt. The other option is Image only."
                }), eB[79] = eY.label, eB[80] = e) : e = eB[80], er = e
            } else if (aZ) {
                let e;
                eB[81] !== td || eB[82] !== e$ || eB[83] !== a3 || eB[84] !== a1 ? (e = a1 || null == td || null != e$ ? (0, i.jsx)(h.a, {
                    ...a3 ? e3.imagesTitle : e3.imageTitle
                }) : (0, i.jsx)(i.Fragment, {
                    children: td
                }), eB[81] = td, eB[82] = e$, eB[83] = a3, eB[84] = a1, eB[85] = e) : e = eB[85], er = e
            } else if (ti) {
                let e;
                eB[86] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.poll.title",
                    defaultMessage: "Share poll",
                    description: "Short heading of the dialog for sharing one interactive poll. The user can create or send a link so other people can vote on the poll."
                }), eB[86] = e) : e = eB[86], er = e
            } else if (ta) {
                let e;
                eB[87] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.responseRegionTitle",
                    defaultMessage: "Share",
                    description: "Short heading of the dialog for sharing one selected section of an interactive ChatGPT response."
                }), eB[87] = e) : e = eB[87], er = e
            } else if (te) {
                let e;
                eB[88] !== td ? (e = null == td ? (0, i.jsx)(h.a, {
                    ...e3.messageTitle
                }) : (0, i.jsx)(i.Fragment, {
                    children: td
                }), eB[88] = td, eB[89] = e) : e = eB[89], er = e
            } else if (ts) {
                let e;
                eB[90] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    ...e3.promptTitle
                }), eB[90] = e) : e = eB[90], er = e
            } else {
                if (to) {
                    let e;
                    eB[91] !== td ? (e = null == td ? void 0 : (0, i.jsx)(i.Fragment, {
                        children: td
                    }), eB[91] = td, eB[92] = e) : e = eB[92], er = e
                }
                t_ ? tC = ai?.isProjectConversation ? e3.workspaceProjectDescription : e3.workspaceDescription : a$?.is_anonymous === !1 ? tC = e3.attributedDescription : ai?.isProjectConversation && (tC = e3.projectDescription)
            }
            t_ && (tx = tc ? e3.workspaceImageRightsAudience : e3.workspaceLinkAudience);
            let tA = "copied" === aW ? e3.copied : e3.copyLink;
            tk ? tA = e3.updateLink : null == tw && "copied" !== aW && (tA = e3.createLink), eB[93] !== ak || eB[94] !== aW ? (eo = "copied" === aW ? ak.formatMessage(e3.copied) : ak.formatMessage(e3.copyLink), eB[93] = ak, eB[94] = aW, eB[95] = eo) : eo = eB[95];
            let tI = eo;
            eB[96] !== aT || eB[97] !== ak || eB[98] !== ap || eB[99] !== ag ? (el = function(e, a) {
                let t;
                "create-failed" === a && (aT(!1), ag?.onError?.(e));
                let i = e instanceof D.a ? "blocked" : a;
                switch ("blocked" !== i && L.a.warning("chatgpt_conversation_share_failed", {
                        safe: {
                            stage: i
                        },
                        sensitive: {
                            error: e
                        }
                    }), i) {
                    case "blocked":
                        t = ak.formatMessage(e3.shareBlocked);
                        break;
                    case "copy-failed":
                        t = ak.formatMessage(e3.shareCopyFailed);
                        break;
                    case "create-failed":
                        t = ak.formatMessage(e3.shareCreateFailed)
                }
                return az(i), aU("idle"), ap.get(_.f).danger(t, {
                    errorAnalytics: {
                        toastId: {
                            "copy-failed": "failed_to_copy_share_link",
                            "create-failed": "failed_to_generate_share_link",
                            blocked: "chatgptConversationShareDialog.shareBlocked"
                        } [i]
                    }
                }), i
            }, eB[96] = aT, eB[97] = ak, eB[98] = ap, eB[99] = ag, eB[100] = el) : el = eB[100];
            let tM = el;
            eB[101] !== a9 || eB[102] !== aZ || eB[103] !== te || eB[104] !== ts || eB[105] !== a2 || eB[106] !== ta || eB[107] !== an || eB[108] !== aD || eB[109] !== ad ? (ec = a2 ? "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER" : "CHATGPT_SHARE_FLOW_ACTOR_SHARER", eh = a2 ? "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_HEADER" : ad ?? "CHATGPT_SHARE_FLOW_SOURCE_CONVERSATION_MENU", null != an ? ed = an.attachmentType : null != a9 ? (ed = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_WIDGET", eh = "CHATGPT_SHARE_FLOW_SOURCE_WIDGET_INLINE_ACTION") : aZ ? (ed = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_IMAGE_SHARE", eh = ad ?? "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION") : ta ? (ed = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_OTHER", eh = "CHATGPT_SHARE_FLOW_SOURCE_WIDGET_INLINE_ACTION") : te ? (eh = "CHATGPT_SHARE_FLOW_SOURCE_MESSAGE_INLINE_ACTION", aD || (ed = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_MESSAGE_SLICE")) : ts && (ed = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_PROMPT", eh = ad ?? "CHATGPT_SHARE_FLOW_SOURCE_MESSAGE_INLINE_ACTION"), eB[101] = a9, eB[102] = aZ, eB[103] = te, eB[104] = ts, eB[105] = a2, eB[106] = ta, eB[107] = an, eB[108] = aD, eB[109] = ad, eB[110] = ec, eB[111] = ed, eB[112] = eh) : (ec = eB[110], ed = eB[111], eh = eB[112]);
            let tL = (an?.contentType === "message" || tn) && !aD ? "CHATGPT_SHARE_FLOW_CONTENT_TYPE_POST_SLICE" : "CHATGPT_SHARE_FLOW_CONTENT_TYPE_SHARED_CONVERSATION";
            eB[113] !== tb || eB[114] !== eK || eB[115] !== th || eB[116] !== a$ || eB[117] !== aT || eB[118] !== eY || eB[119] !== ax || eB[120] !== tT || eB[121] !== tk || eB[122] !== e5 || eB[123] !== e8 || eB[124] !== as || eB[125] !== ar || eB[126] !== ap || eB[127] !== al || eB[128] !== aV || eB[129] !== aD || eB[130] !== ah || eB[131] !== tr || eB[132] !== ag ? (eg = async function(e) {
                let a;
                if (null != ag && (!a_.current || ag.isCurrent?.() === !1)) throw Error("The selected widget is no longer available");
                if (null != ar && (!a_.current || ar.isCurrent?.() === !1)) throw Error("The selected response region is no longer available");
                if (tT) throw Error("Expanded conversation unavailable");
                let t = tb ?? (th ? {
                    currentNodeId: a$.current_node_id,
                    shareLinkId: a$.share_id,
                    shareLinkUrl: a$.share_url
                } : null);
                if (null == eY && null != t && !tk) return aT(!0), t;
                if (null != eY) a = await eY.createLink(e);
                else if (null != ax) a = await ap.queryClient.fetchQuery(ax), e8?.(a);
                else if (null != ag) {
                    if (a = await (0, D.g)(ag.attachment, eK), !a_.current || ag.isCurrent?.() === !1) throw Error("The selected widget changed while sharing")
                } else if (null != ar) {
                    if (a = await (0, D.f)({
                            conversationId: ar.attachment.conversation_id,
                            currentNodeId: eK,
                            messageId: ar.attachment.message_id,
                            targetId: ar.attachment.target_id
                        }), !a_.current || ar.isCurrent?.() === !1) throw Error("The selected response region changed while sharing")
                } else a = null == e5 || aD ? null != as ? await ap.queryClient.fetchQuery({
                    queryFn: () => (0, D.e)({
                        conversationId: al,
                        messageId: as.messageId
                    }),
                    queryKey: ["chatgpt-prompt-share", al, as.messageId],
                    staleTime: 1 / 0
                }) : await (0, D.h)({
                    conversationId: al,
                    currentNodeId: eK,
                    existingShareLink: a$,
                    title: ah
                }) : await ap.queryClient.fetchQuery({
                    queryFn: () => (0, D.d)({
                        conversationId: al,
                        currentNodeId: eK,
                        messageIds: e5
                    }),
                    queryKey: ["chatgpt-message-share", ap.get(u.f), al, eK, e5],
                    staleTime: 1 / 0
                });
                return aI(a), aT(!0), null != a$ && tr && ap.queryClient.setQueryData(aV, {
                    ...a$,
                    current_node_id: eK,
                    is_public: !0,
                    is_visible: !0
                }), a
            }, eB[113] = tb, eB[114] = eK, eB[115] = th, eB[116] = a$, eB[117] = aT, eB[118] = eY, eB[119] = ax, eB[120] = tT, eB[121] = tk, eB[122] = e5, eB[123] = e8, eB[124] = as, eB[125] = ar, eB[126] = ap, eB[127] = al, eB[128] = aV, eB[129] = aD, eB[130] = ah, eB[131] = tr, eB[132] = ag, eB[133] = eg) : eg = eB[133];
            let tj = eg;
            eB[134] !== ec || eB[135] !== ed || eB[136] !== tL || eB[137] !== tb || eB[138] !== a9?.metadata || eB[139] !== tj || eB[140] !== th || eB[141] !== a$ || eB[142] !== eY || eB[143] !== a7 || eB[144] !== a2 || eB[145] !== tk || eB[146] !== ty || eB[147] !== e9 || eB[148] !== tM || eB[149] !== ap || eB[150] !== al || eB[151] !== tw || eB[152] !== aL || eB[153] !== eh || eB[154] !== to ? (ep = async function() {
                if (ty || a7 || eY?.actionsDisabled) return;
                let e = (0, R.b)(ap, {
                    actor: ec,
                    attachmentType: ed,
                    widgetMetadata: a9?.metadata,
                    contentType: tL,
                    conversationId: a2 ? void 0 : al,
                    shareId: tb?.shareLinkId ?? (th ? a$.share_id : void 0),
                    shareSessionId: aL,
                    source: eh,
                    usedExistingLink: null != tw && !tk
                });
                az(null), aU("creating");
                let a = null != eY || null == tw || tk ? "create-failed" : "copy-failed",
                    t = tb;
                try {
                    let i, s = tj("copy"),
                        n = (0, C.c)(s.then(eR));
                    null != n && n.catch(eG);
                    let r = await s;
                    t = r, a = "copy-failed";
                    let o = r.shareLinkUrl;
                    if (null == n) i = await (0, C.b)(o);
                    else try {
                        await n, i = !0
                    } catch (e) {
                        L.a.warning("chatgpt_conversation_share_clipboard_write_failed", {
                            safe: {
                                method: "streaming-clipboard-item"
                            },
                            sensitive: {
                                error: e
                            }
                        }), i = await (0, C.b)(o)
                    }
                    if (!i) {
                        e({
                            result: "copy-failed",
                            shareId: r.shareLinkId
                        }), tM(Error("Failed to copy ChatGPT conversation share link"), "copy-failed");
                        return
                    }
                    e({
                        result: "link-copied",
                        shareId: r.shareLinkId
                    }), aU("copied"), to || ((0, S.a)(ap), e9())
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
            }, eB[134] = ec, eB[135] = ed, eB[136] = tL, eB[137] = tb, eB[138] = a9?.metadata, eB[139] = tj, eB[140] = th, eB[141] = a$, eB[142] = eY, eB[143] = a7, eB[144] = a2, eB[145] = tk, eB[146] = ty, eB[147] = e9, eB[148] = tM, eB[149] = ap, eB[150] = al, eB[151] = tw, eB[152] = aL, eB[153] = eh, eB[154] = to, eB[155] = ep) : ep = eB[155];
            let tE = ep;
            eB[156] !== ed || eB[157] !== tL || eB[158] !== tb || eB[159] !== ap || eB[160] !== al || eB[161] !== aL || eB[162] !== a0 || eB[163] !== eh ? (eu = function(e) {
                (0, y.a)(ap, n.i, {
                    action: e,
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_SHARER",
                    attachmentType: ed,
                    contentType: tL,
                    conversationId: al,
                    ...a0 && null != tb && !tb.isWorkspaceOnly ? {
                        shareId: tb.shareLinkId
                    } : {},
                    shareSessionId: aL,
                    source: eh,
                    sheetType: "CHATGPT_SHARE_FLOW_SHEET_TYPE_CUSTOM"
                })
            }, eB[156] = ed, eB[157] = tL, eB[158] = tb, eB[159] = ap, eB[160] = al, eB[161] = aL, eB[162] = a0, eB[163] = eh, eB[164] = eu) : eu = eB[164];
            let tP = eu;
            eB[165] !== tb || eB[166] !== en || eB[167] !== aT || eB[168] !== ax || eB[169] !== ak || eB[170] !== ty || eB[171] !== e9 || eB[172] !== tM || eB[173] !== ap || eB[174] !== al || eB[175] !== tu || eB[176] !== aL || eB[177] !== eh ? (em = async function() {
                if (!ty && null != ax && "public" === tu && null != tb && "blocked" !== en) {
                    az(null), aU("creating");
                    try {
                        let e = await (0, W.b)(ap, tb, al, aL, eh);
                        aU("idle"), "shared" === e && (aT(!0), e9()), "failed" === e && ap.get(_.f).danger(ak.formatMessage({
                            id: "chatgptConversations.mobileImageShare.nativeFailed",
                            defaultMessage: "Could not open sharing. Try again or copy the link",
                            description: "Error in the mobile image share sheet when the device cannot open native link sharing. The user can retry or use Copy link"
                        }), {
                            errorAnalytics: {
                                toastId: "chatgptConversations.mobileImageShare.nativeFailed"
                            }
                        })
                    } catch (e) {
                        tM(e, "create-failed")
                    }
                }
            }, eB[165] = tb, eB[166] = en, eB[167] = aT, eB[168] = ax, eB[169] = ak, eB[170] = ty, eB[171] = e9, eB[172] = tM, eB[173] = ap, eB[174] = al, eB[175] = tu, eB[176] = aL, eB[177] = eh, eB[178] = em) : em = eB[178];
            let tD = em;
            eB[179] !== ec || eB[180] !== ed || eB[181] !== tL || eB[182] !== tb || eB[183] !== td || eB[184] !== a9?.metadata || eB[185] !== tj || eB[186] !== th || eB[187] !== a$ || eB[188] !== eY || eB[189] !== a8 || eB[190] !== ak || eB[191] !== aZ || eB[192] !== a7 || eB[193] !== ts || eB[194] !== a2 || eB[195] !== tk || eB[196] !== ty || eB[197] !== e4?.unsupportedDestinationFallback || eB[198] !== e9 || eB[199] !== tM || eB[200] !== ap || eB[201] !== al || eB[202] !== tu || eB[203] !== aW || eB[204] !== aL || eB[205] !== a0 || eB[206] !== eh || eB[207] !== a1 ? (ef = async function(e, a) {
                var t;
                let i;
                if (ty || a7 || "public" !== tu || eY?.actionsDisabled) return;
                a.preventDefault(), a2 || ts || "line" !== (t = e) && "linkedin" !== t && "reddit" !== t && "x" !== t || (0, R.g)(ap, e, aZ ? a8 : void 0);
                let s = a0 && aZ ? al : void 0;
                (0, R.f)(ap, {
                    actor: ec,
                    attachmentType: ed,
                    conversationId: s,
                    widgetMetadata: a9?.metadata,
                    contentType: tL,
                    destination: function(e) {
                        switch (e) {
                            case "messages":
                                return "CHATGPT_SHARE_FLOW_DESTINATION_MESSAGES";
                            case "whatsapp":
                                return "CHATGPT_SHARE_FLOW_DESTINATION_WHATSAPP";
                            case "telegram":
                                return "CHATGPT_SHARE_FLOW_DESTINATION_TELEGRAM";
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
                    shareId: tb?.shareLinkId ?? (th && !tk ? a$.share_id : void 0),
                    shareSessionId: aL,
                    source: eh
                });
                let n = a1 && (0, K.g)(e);
                if (n && e4?.unsupportedDestinationFallback === "app-store") {
                    let t = (0, r.a)() ? "android" : (0, r.c)() || (0, r.b)() ? "ios" : null,
                        i = null == t ? null : (0, K.c)(e, t);
                    if (null != i) return void(0, b.e)({
                        event: a,
                        href: i,
                        initiator: "open_in_browser_bridge",
                        openTarget: "external-browser"
                    })
                }
                let o = null != tb && null == eY || "messages" === e || n ? null : window.open("", "_blank");
                null != o && (o.opener = null), az(null), aU("creating");
                try {
                    i = await tj("social")
                } catch (e) {
                    o?.close(), e instanceof D.a || (0, R.e)(ap, {
                        actor: ec,
                        attachmentType: ed,
                        conversationId: s,
                        widgetMetadata: a9?.metadata,
                        contentType: tL,
                        shareSessionId: aL,
                        source: eh
                    }), tM(e, "create-failed");
                    return
                }
                if (!0 === i.isWorkspaceOnly) {
                    o?.close(), aU(aW);
                    return
                }
                if (n) {
                    let e = await (0, W.b)(ap, i, al, aL, eh);
                    aU(aW), "shared" === e ? e9() : "failed" === e && ap.get(_.f).danger(ak.formatMessage({
                        id: "chatgptConversations.mobileImageShare.nativeFailed",
                        defaultMessage: "Could not open sharing. Try again or copy the link",
                        description: "Error in the mobile image share sheet when the device cannot open native link sharing. The user can retry or use Copy link"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.mobileImageShare.nativeFailed"
                        }
                    });
                    return
                }
                let l = (0, K.d)({
                    destination: e,
                    isAppleDevice: (0, r.c)() || (0, r.b)(),
                    shareUrl: i.shareLinkUrl,
                    title: i.title ?? td
                });
                if (null == l) {
                    o?.close(), aU(aW);
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
                }), aU(aW)
            }, eB[179] = ec, eB[180] = ed, eB[181] = tL, eB[182] = tb, eB[183] = td, eB[184] = a9?.metadata, eB[185] = tj, eB[186] = th, eB[187] = a$, eB[188] = eY, eB[189] = a8, eB[190] = ak, eB[191] = aZ, eB[192] = a7, eB[193] = ts, eB[194] = a2, eB[195] = tk, eB[196] = ty, eB[197] = e4?.unsupportedDestinationFallback, eB[198] = e9, eB[199] = tM, eB[200] = ap, eB[201] = al, eB[202] = tu, eB[203] = aW, eB[204] = aL, eB[205] = a0, eB[206] = eh, eB[207] = a1, eB[208] = ef) : ef = eB[208];
            let tN = ef;
            eB[209] !== eV || eB[210] !== a8 || eB[211] !== ak || eB[212] !== aB || eB[213] !== a3 || eB[214] !== a7 || eB[215] !== tP || eB[216] !== ap || eB[217] !== al ? (eb = async function() {
                if (null == eV || aB || a7) return;
                (0, R.g)(ap, "download", a8);
                let e = [eV.item, ...eV.additionalImages ?? []].filter(eN);
                0 !== e.length && ((0, U.b)(ap, {
                    image: eV.downloadAnalyticsImage ?? eV.item,
                    conversationId: al,
                    entryPoint: "CHATGPT_IMAGE_DOWNLOAD_ENTRY_POINT_CUSTOM_SHARE_SHEET",
                    downloadScope: a3 ? "CHATGPT_IMAGE_DOWNLOAD_SCOPE_SERIES" : "CHATGPT_IMAGE_DOWNLOAD_SCOPE_SINGLE",
                    requestedImageCount: e.length,
                    isParagen: eV.downloadIsParagen
                }), aK(!0), tP("CHATGPT_SHARE_FLOW_ACTION_DOWNLOAD_SELECTED"), await (0, O.a)(ap, {
                    images: e,
                    intl: ak,
                    serverConversationId: (0, F.c)(al),
                    logIndividualDownloads: !1
                }).then(e => {
                    "downloaded" === e && (0, U.e)(ap, al, eV.item)
                }).finally(() => {
                    aK(!1)
                }))
            }, eB[209] = eV, eB[210] = a8, eB[211] = ak, eB[212] = aB, eB[213] = a3, eB[214] = a7, eB[215] = tP, eB[216] = ap, eB[217] = al, eB[218] = eb) : eb = eB[218];
            let tG = eb;
            eB[219] !== eV?.additionalImages?.length || eB[220] !== a3 ? (ev = a3 ? (0, i.jsx)(h.a, {
                id: "chatgptConversations.shareDialog.imageSeriesCount",
                defaultMessage: "Sharing {imageCount} images together",
                description: "Subtitle beneath the generated-image share modal title after choosing to share a series. imageCount is the number of images included in the link, always greater than one. This informs the user that all listed images are shared together.",
                values: {
                    imageCount: 1 + (eV?.additionalImages?.length ?? 0)
                }
            }) : void 0, eB[219] = eV?.additionalImages?.length, eB[220] = a3, eB[221] = ev) : ev = eB[221];
            let tR = ev,
                tF = tR;
            if (!a3 && !to) {
                let e;
                eB[222] !== tC ? (e = (0, i.jsx)(h.a, {
                    ...tC
                }), eB[222] = tC, eB[223] = e) : e = eB[223], tF = e
            }
            if (null != eY) {
                let e;
                eB[224] !== a1 ? (e = a1 ? (0, i.jsx)(h.a, {
                    id: "imagePromptShare.audience",
                    defaultMessage: "Anyone with the link can try this prompt",
                    description: "Audience description when sharing a generated image as a reusable prompt template"
                }) : void 0, eB[224] = a1, eB[225] = e) : e = eB[225], tF = e
            } else if (a1) {
                let e, a, t;
                eB[226] !== tu ? (e = "public" === tu ? (0, i.jsx)(h.a, {
                    id: "chatgptConversations.mobileImageShare.publicAudience",
                    defaultMessage: "Anyone with the link can view",
                    description: "Audience disclosure in the mobile generated-image share sheet for a public link"
                }) : null, eB[226] = tu, eB[227] = e) : e = eB[227], eB[228] !== tu ? (a = "public" !== tu && (0, i.jsx)(h.a, {
                    id: "chatgptConversations.mobileImageShare.workspaceAudience",
                    defaultMessage: "Only workspace members with the link can view",
                    description: "Audience disclosure below Share image in the mobile image share sheet for a workspace account"
                }), eB[228] = tu, eB[229] = a) : a = eB[229], eB[230] !== e || eB[231] !== a ? (t = (0, i.jsxs)(i.Fragment, {
                    children: [e, a]
                }), eB[230] = e, eB[231] = a, eB[232] = t) : t = eB[232], tF = t
            }
            if (a1 ? ew = "responsiveSheet" : to && (ew = "share"), eB[233] !== e4?.layout || eB[234] !== a1 ? (a1 && (ek = e4?.layout === "two-rows" ? "imageSheetTwoRows" : "imageSheet"), eB[233] = e4?.layout, eB[234] = a1, eB[235] = ek) : ek = eB[235], null != eY) {
                let e;
                eB[236] !== eV?.previewSrc || eB[237] !== eY || eB[238] !== ty || eB[239] !== a4 ? (e = () => eY.preview(ty, eV?.previewSrc ?? a4 ?? null, () => {
                    az(null), aU("idle")
                }), eB[236] = eV?.previewSrc, eB[237] = eY, eB[238] = ty, eB[239] = a4, eB[240] = e) : e = eB[240], e_ = e
            } else {
                let e;
                eB[241] !== a9 || eB[242] !== aR || eB[243] !== aN || eB[244] !== eV || eB[245] !== ek || eB[246] !== ak || eB[247] !== a6 || eB[248] !== a3 || eB[249] !== tt || eB[250] !== at || eB[251] !== aa || eB[252] !== as || eB[253] !== a4 || eB[254] !== ao || eB[255] !== ar || eB[256] !== ap.queryClient || eB[257] !== al || eB[258] !== aL || eB[259] !== aD || eB[260] !== a1 ? (e = e => null != eV ? (0, i.jsx)(A.a, {
                    ariaLabel: a3 ? ak.formatMessage(e3.imagesPreview) : eV.alt,
                    expandedContent: (0, i.jsxs)("div", {
                        className: "flex flex-col gap-4",
                        children: [(0, i.jsx)(e1, {
                            src: a3 ? a4 : eV.previewSrc ?? a4,
                            isLoading: a6,
                            alt: eV.alt
                        }), eV.additionalPublishedPreviewUrls?.map(eD), eV.additionalImages?.map(e => (0, i.jsx)(eZ, {
                            item: e,
                            serverConversationId: al
                        }, e.id))]
                    }),
                    expandPreviewEventLogger: e,
                    variant: "image",
                    classicImagePreviewEligible: !a3 && !a1,
                    presentation: ek,
                    children: a3 || null == eV.previewSrc ? (0, i.jsx)(e1, {
                        src: a4,
                        isLoading: a6
                    }) : (0, i.jsx)("img", {
                        alt: eV.alt,
                        className: a1 ? void 0 : "block size-full object-contain",
                        referrerPolicy: "no-referrer",
                        src: eV.previewSrc
                    })
                }) : (0, i.jsxs)(i.Fragment, {
                    children: [ar?.preview != null && (0, i.jsx)(A.a, {
                        ariaLabel: ak.formatMessage({
                            id: "chatgptConversations.shareDialog.responseRegionPreviewLabel",
                            defaultMessage: "Preview of the shared content",
                            description: "Accessible description of the selected interactive-response section shown in the response-region sharing dialog."
                        }),
                        expandedContent: ar.preview,
                        expandPreviewEventLogger: e,
                        variant: "response",
                        children: ar.preview
                    }), null == ar && a9?.preview != null && tt && (0, i.jsx)(A.a, {
                        ariaLabel: ak.formatMessage({
                            id: "shareDialog.widget.previewLabel",
                            defaultMessage: "Preview of the shared widget",
                            description: "Accessible description of the non-interactive selected-widget preview in a ChatGPT widget sharing dialog."
                        }),
                        expandedContent: a9.preview,
                        expandPreviewEventLogger: e,
                        variant: "response",
                        children: a9.preview
                    }), null == ar && a9?.preview != null && !tt && (0, i.jsx)(A.a, {
                        expandedContent: a9.preview,
                        expandPreviewEventLogger: e,
                        variant: "response",
                        children: a9.preview
                    }), null == ar && null == a9 && (0, i.jsx)(N.b, {
                        expandPreviewEventLogger: e,
                        prompt: as,
                        response: aD ? void 0 : ao,
                        serverConversationId: al,
                        expandedHistory: (null == ao || aD) && null != at && null == aR ? {
                            load: async e => (await ap.queryClient.fetchQuery({
                                queryKey: aN,
                                queryFn: () => at(e),
                                staleTime: 1 / 0
                            })).turns,
                            sessionId: aL
                        } : void 0,
                        turns: null == ao || aD ? aR?.turns ?? aa : void 0
                    })]
                }), eB[241] = a9, eB[242] = aR, eB[243] = aN, eB[244] = eV, eB[245] = ek, eB[246] = ak, eB[247] = a6, eB[248] = a3, eB[249] = tt, eB[250] = at, eB[251] = aa, eB[252] = as, eB[253] = a4, eB[254] = ao, eB[255] = ar, eB[256] = ap.queryClient, eB[257] = al, eB[258] = aL, eB[259] = aD, eB[260] = a1, eB[261] = e) : e = eB[261], e_ = e
            }
            if (a1) {
                let e, a = e_;
                eB[262] !== eY || eB[263] !== tR || eB[264] !== a ? (e = e => {
                    let t = a(e);
                    return (0, i.jsxs)(i.Fragment, {
                        children: [null == eY ? t : (0, i.jsx)("div", {
                            className: "px-6",
                            children: t
                        }), null != tR && (0, i.jsx)("p", {
                            className: "mt-3 text-center text-sm text-secondary",
                            children: tR
                        })]
                    })
                }, eB[262] = eY, eB[263] = tR, eB[264] = a, eB[265] = e) : e = eB[265], e_ = e
            }
            let tO = er,
                tH = tF;
            eB[266] !== tx || eB[267] !== to ? (ey = to ? void 0 : (0, i.jsx)(h.a, {
                ...tx
            }), eB[266] = tx, eB[267] = to, eB[268] = ey) : ey = eB[268], eB[269] !== tA ? (eT = (0, i.jsx)(h.a, {
                ...tA
            }), eB[269] = tA, eB[270] = eT) : eT = eB[270];
            let tW = eY?.actionsDisabled || tS || tT || a7 || "blocked" === en,
                tU = ty || tS || am,
                tq = !to && ty;
            eB[271] !== tP || eB[272] !== a0 || eB[273] !== to ? (eS = to ? e => {
                a0 && tP("CHATGPT_SHARE_FLOW_ACTION_SHEET_PRESENTED"), e.preventDefault(), e.currentTarget instanceof HTMLElement && e.currentTarget.focus()
            } : void 0, eB[271] = tP, eB[272] = a0, eB[273] = to, eB[274] = eS) : eS = eB[274];
            let tz = ew,
                tB = a1 ? "imageSheet" : void 0,
                tK = a1 && e4?.layout === "two-rows";
            eB[275] !== aw || eB[276] !== ab || eB[277] !== av || eB[278] !== tb || eB[279] !== eK || eB[280] !== en || eB[281] !== a9 || eB[282] !== tG || eB[283] !== tD || eB[284] !== tN || eB[285] !== eV || eB[286] !== eY?.actionsDisabled || eB[287] !== a8 || eB[288] !== aB || eB[289] !== tT || eB[290] !== tS || eB[291] !== aZ || eB[292] !== a7 || eB[293] !== am || eB[294] !== ts || eB[295] !== a2 || eB[296] !== ty || eB[297] !== e5 || eB[298] !== e4 || eB[299] !== e6 || eB[300] !== e9 || eB[301] !== as || eB[302] !== an || eB[303] !== tI || eB[304] !== a4 || eB[305] !== ar || eB[306] !== ap || eB[307] !== al || eB[308] !== tu || eB[309] !== aD || eB[310] !== tr || eB[311] !== a1 || eB[312] !== to || eB[313] !== ag ? (eC = to ? (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(eM, {
                    projectStyleEligible: !a2 && null == as && null == a9 && null == ar && (aZ || null != e5 && !aD),
                    mobileImageActions: a1 && null != e4 ? {
                        experience: e4,
                        canNativeShare: "public" === tu && null != tb && (0, W.a)(tb?.shareLinkUrl),
                        onNativeShare: () => {
                            tD()
                        },
                        rowScrollPositions: e6
                    } : void 0,
                    copyLabel: tI,
                    copyDisabled: eY?.actionsDisabled || tS || tT || ty || a7 || "blocked" === en,
                    isBusy: ty || tS || am,
                    isDownloading: aB,
                    socialDestinationsDisabled: eY?.actionsDisabled || tS || tT || ty || a7 || "public" !== tu || "blocked" === en,
                    showSocialDestinations: "public" === tu,
                    additionalActions: void 0,
                    onDownload: null == eV || a7 ? void 0 : () => {
                        tG()
                    },
                    onCopy: () => {
                        a2 || ts || (0, R.g)(ap, "copy", aZ ? a8 : void 0)
                    },
                    onSocialShare: (e, a) => {
                        tN(e, a)
                    }
                })
            }) : void 0, eB[275] = aw, eB[276] = ab, eB[277] = av, eB[278] = tb, eB[279] = eK, eB[280] = en, eB[281] = a9, eB[282] = tG, eB[283] = tD, eB[284] = tN, eB[285] = eV, eB[286] = eY?.actionsDisabled, eB[287] = a8, eB[288] = aB, eB[289] = tT, eB[290] = tS, eB[291] = aZ, eB[292] = a7, eB[293] = am, eB[294] = ts, eB[295] = a2, eB[296] = ty, eB[297] = e5, eB[298] = e4, eB[299] = e6, eB[300] = e9, eB[301] = as, eB[302] = an, eB[303] = tI, eB[304] = a4, eB[305] = ar, eB[306] = ap, eB[307] = al, eB[308] = tu, eB[309] = aD, eB[310] = tr, eB[311] = a1, eB[312] = to, eB[313] = ag, eB[314] = eC) : eC = eB[314], eB[315] !== ec || eB[316] !== ed || eB[317] !== tL || eB[318] !== a9?.metadata.widgetName || eB[319] !== a9?.metadata.widgetType || eB[320] !== al || eB[321] !== aL || eB[322] !== eh ? (ex = JSON.stringify([ec, ed, tL, al, aL, eh, a9?.metadata.widgetName, a9?.metadata.widgetType]), eB[315] = ec, eB[316] = ed, eB[317] = tL, eB[318] = a9?.metadata.widgetName, eB[319] = a9?.metadata.widgetType, eB[320] = al, eB[321] = aL, eB[322] = eh, eB[323] = ex) : ex = eB[323], eB[324] !== ec || eB[325] !== ed || eB[326] !== tL || eB[327] !== a9?.metadata || eB[328] !== ap || eB[329] !== al || eB[330] !== aL || eB[331] !== eh ? (eA = () => (0, R.a)(ap, {
                actor: ec,
                attachmentType: ed,
                contentType: tL,
                conversationId: al,
                shareSessionId: aL,
                source: eh,
                widgetMetadata: a9?.metadata
            }), eB[324] = ec, eB[325] = ed, eB[326] = tL, eB[327] = a9?.metadata, eB[328] = ap, eB[329] = al, eB[330] = aL, eB[331] = eh, eB[332] = eA) : eA = eB[332], eB[333] !== e_ || eB[334] !== ex || eB[335] !== eA ? (eI = (0, i.jsx)(eW, {
                createEventLogger: eA,
                children: e_
            }, ex), eB[333] = e_, eB[334] = ex, eB[335] = eA, eB[336] = eI) : eI = eB[336], eB[337] !== aP || eB[338] !== e$ || eB[339] !== ak || eB[340] !== tS || eB[341] !== ti || eB[342] !== ty || eB[343] !== aj || eB[344] !== tl || eB[345] !== tu || eB[346] !== tc || eB[347] !== a1 || eB[348] !== to ? (eL = to ? (0, i.jsxs)(i.Fragment, {
                children: [aP && (0, i.jsx)(f.e, {
                    className: "pt-5",
                    children: (0, i.jsx)("div", {
                        className: "mx-auto w-80 max-w-full",
                        children: (0, i.jsx)(w.a, {
                            ariaLabel: ak.formatMessage({
                                id: "chatgptConversations.shareDialog.messageScope.label",
                                defaultMessage: "Content to share",
                                description: "Accessible label for choosing whether a ChatGPT response sharing dialog shares one response or the entire conversation."
                            }),
                            buttonClassName: "z-20",
                            fullWidth: !0,
                            onSelect: e => {
                                e !== aj && (aE(e), aI(null), az(null), aU("idle"))
                            },
                            options: [{
                                id: "message",
                                disabled: ty || tS,
                                label: (0, i.jsx)(h.a, {
                                    id: "chatgptConversations.shareDialog.messageScope.response",
                                    defaultMessage: "This response",
                                    description: "Share-scope option in a ChatGPT response sharing dialog. Shares only the selected assistant response. The other option is Entire conversation."
                                })
                            }, {
                                id: "conversation",
                                disabled: ty || tS,
                                label: (0, i.jsx)(h.a, {
                                    id: "chatgptConversations.shareDialog.messageScope.conversation",
                                    defaultMessage: "Entire conversation",
                                    description: "Share-scope option in a ChatGPT response sharing dialog. Shares the full chat through the selected response. The other option is This response."
                                })
                            }],
                            selectedId: aj,
                            variant: "form",
                            wrapLabels: !0
                        })
                    })
                }), null != e$ && (a1 ? (0, i.jsx)("div", {
                    className: "px-6 pt-3",
                    children: e$(ty)
                }) : (0, i.jsx)(f.e, {
                    className: "pt-5",
                    children: e$(ty)
                })), !a1 && (0, i.jsx)(eU, {
                    audience: tu,
                    contentType: tl,
                    isPoll: ti,
                    showImageRightsNotice: tc
                })]
            }) : void 0, eB[337] = aP, eB[338] = e$, eB[339] = ak, eB[340] = tS, eB[341] = ti, eB[342] = ty, eB[343] = aj, eB[344] = tl, eB[345] = tu, eB[346] = tc, eB[347] = a1, eB[348] = to, eB[349] = eL) : eL = eB[349], eB[350] !== en || eB[351] !== eY || eB[352] !== aH || eB[353] !== tw ? (ej = null == en ? void 0 : {
                content: (0, i.jsx)(e2, {
                    error: en
                }),
                copyUrl: "copy-failed" === en ? tw : void 0,
                onRetry: "conversation-load-failed" === en ? () => {
                    aH()
                } : void 0,
                preventsSharing: "blocked" === en && null == eY || "conversation-load-failed" === en
            }, eB[350] = en, eB[351] = eY, eB[352] = aH, eB[353] = tw, eB[354] = ej) : ej = eB[354];
            let tV = tc && !t_ && !aZ,
                tY = !tn || te;
            return eB[355] !== J || eB[356] !== tV || eB[357] !== tY ? (eE = (0, i.jsx)(e0, {
                showImageRightsNotice: tV,
                showContentNotices: tY,
                privacyNotices: J
            }), eB[355] = J, eB[356] = tV, eB[357] = tY, eB[358] = eE) : eE = eB[358], eB[359] !== aS || eB[360] !== tP || eB[361] !== a0 ? (eP = () => {
                a0 && tP("CHATGPT_SHARE_FLOW_ACTION_DISMISSED"), aS()
            }, eB[359] = aS, eB[360] = tP, eB[361] = a0, eB[362] = eP) : eP = eB[362], eB[363] !== tE ? (eq = () => {
                tE()
            }, eB[363] = tE, eB[364] = eq) : eq = eB[364], eB[365] !== ew || eB[366] !== er || eB[367] !== td || eB[368] !== tF || eB[369] !== ey || eB[370] !== eT || eB[371] !== tW || eB[372] !== tU || eB[373] !== tq || eB[374] !== eS || eB[375] !== tB || eB[376] !== tK || eB[377] !== eC || eB[378] !== eI || eB[379] !== eL || eB[380] !== ej || eB[381] !== eE || eB[382] !== eP || eB[383] !== eq ? (ez = (0, i.jsx)(x.a, {
                threadTitle: td,
                title: tO,
                subtitle: tH,
                audience: ey,
                actionLabel: eT,
                actionDisabled: tW,
                isBusy: tU,
                isDismissalDisabled: tq,
                onOpenAutoFocus: eS,
                size: tz,
                presentation: tB,
                compactImageSheetFooter: tK,
                footer: eC,
                preview: eI,
                info: eL,
                error: ej,
                notices: eE,
                onClose: eP,
                onSubmit: eq
            }), eB[365] = ew, eB[366] = er, eB[367] = td, eB[368] = tF, eB[369] = ey, eB[370] = eT, eB[371] = tW, eB[372] = tU, eB[373] = tq, eB[374] = eS, eB[375] = tB, eB[376] = tK, eB[377] = eC, eB[378] = eI, eB[379] = eL, eB[380] = ej, eB[381] = eE, eB[382] = eP, eB[383] = eq, eB[384] = ez) : ez = eB[384], ez
        }

        function eD(e) {
            return (0, i.jsx)(e1, {
                src: e,
                isLoading: !1
            }, e)
        }

        function eN(e) {
            return null != e.src && "completed" === e.status && !e.isPreview
        }

        function eG() {}

        function eR(e) {
            let {
                shareLinkUrl: a
            } = e;
            return a
        }

        function eF() {
            throw Error("Image share is unavailable")
        }

        function eO() {
            return E.CodexRequest.safeGet("/wham/accounts/check")
        }

        function eH() {
            return crypto.randomUUID()
        }

        function eW(e) {
            let a, t = (0, s.c)(3),
                {
                    children: i,
                    createEventLogger: n
                } = e,
                [r] = (0, c.useState)(n);
            return t[0] !== i || t[1] !== r ? (a = i(r), t[0] = i, t[1] = r, t[2] = a) : a = t[2], a
        }

        function eU(e) {
            let a, t, n, r, o, l, c, d = (0, s.c)(58),
                {
                    audience: g,
                    contentType: p,
                    isPoll: u,
                    showImageRightsNotice: m
                } = e,
                b = "workspace" === g ? v.Me : v.Rd;
            if ("workspace" === g) {
                let e, s;
                if (m) {
                    let a;
                    d[0] !== p ? (a = (0, i.jsx)(h.a, {
                        id: "chatgptConversations.shareDialog.workspaceMediaRightsAudienceWithLearnMore",
                        defaultMessage: "Links are visible to workspace members only. {contentType, select, gif {Confirm you have the rights to share this GIF.} images {Confirm you have the rights to share these images.} other {Confirm you have the rights to share this image.}} {contentType, select, conversation {Memory sources won't be shared with viewers. } other {}}<learnMore>Learn more</learnMore>",
                        description: "Audience and image-rights reminder for workspace sharing in merged web. Only workspace members can view the link. contentType is gif for one animated GIF, images for a generated-image series, image for one still image, message, or conversation. For a conversation, underlying Memory sources stay private. The learnMore tag links to shared-links help. All sentences appear in one paragraph.",
                        values: {
                            contentType: p,
                            learnMore: eJ
                        }
                    }), d[0] = p, d[1] = a) : a = d[1], e = a
                } else if ("conversation" === p) {
                    let a;
                    d[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, i.jsx)(h.a, {
                        id: "chatgptConversations.shareDialog.workspaceConversationMemoryDisclosure",
                        defaultMessage: "Links are visible to workspace members only. Memory sources won't be shared with viewers. <learnMore>Learn more</learnMore>",
                        description: "Audience and privacy explanation in the merged-web workspace conversation sharing dialog. Shared links are restricted to workspace members and do not give viewers access to underlying Memory sources. The learnMore tag links to shared-links help.",
                        values: {
                            learnMore: eX
                        }
                    }), d[2] = a) : a = d[2], e = a
                } else {
                    let a;
                    d[3] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, i.jsx)(h.a, {
                        ...e3.workspaceLinksVisibleWithLearnMore,
                        values: {
                            learnMore: eQ
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
                        ...e3.shareLinkToWidget
                    }), d[6] = e) : e = d[6], a = e
                } else if ("images" === p) {
                    let e;
                    d[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e3.shareLinkToImages
                    }), d[7] = e) : e = d[7], a = e
                } else if ("gif" === p) {
                    let e;
                    d[8] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e3.shareLinkToGif
                    }), d[8] = e) : e = d[8], a = e
                } else if ("image" === p) {
                    let e;
                    d[9] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e3.shareLinkToImage
                    }), d[9] = e) : e = d[9], a = e
                } else if ("response-region" === p) {
                    let e;
                    d[10] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        id: "chatgptConversations.shareDialog.responseRegion.workspaceTitle",
                        defaultMessage: "Share a link to this content",
                        description: "Heading below the selected response-region preview when its link is restricted to workspace members."
                    }), d[10] = e) : e = d[10], a = e
                } else if ("message" === p) {
                    let e;
                    d[11] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e3.shareLinkToMessage
                    }), d[11] = e) : e = d[11], a = e
                } else if ("prompt" === p) {
                    let e;
                    d[12] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e3.shareLinkToPrompt
                    }), d[12] = e) : e = d[12], a = e
                } else {
                    let e;
                    d[13] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e3.shareLinkToConversation
                    }), d[13] = e) : e = d[13], a = e
                }
            } else if ("unknown" === g) {
                if ("images" === p) {
                    let e;
                    d[14] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        id: "chatgptConversations.shareDialog.imagesRightsDisclaimer",
                        defaultMessage: "Confirm you have the rights to share these images.",
                        description: "Legal-permission reminder below the heading when sharing a generated-image series before the link audience is known. Asks the user to confirm permission to share every selected image. Shown as a standalone notice."
                    }), d[14] = e) : e = d[14], t = e
                } else if ("gif" === p) {
                    let e;
                    d[15] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        id: "chatgptConversations.shareDialog.gifLicenseDisclaimer",
                        defaultMessage: "Confirm you have the rights to share this GIF",
                        description: "Legal-permission reminder in the generated GIF sharing dialog before the link audience is known. Asks the user to confirm permission to share the animated GIF."
                    }), d[15] = e) : e = d[15], t = e
                } else if ("image" === p) {
                    let e;
                    d[16] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e3.imageLicenseDisclaimer
                    }), d[16] = e) : e = d[16], t = e
                }
                if ("widget" === p) {
                    let e;
                    d[17] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e3.shareLinkToWidget
                    }), d[17] = e) : e = d[17], a = e
                } else if ("images" === p) {
                    let e;
                    d[18] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e3.shareLinkToImages
                    }), d[18] = e) : e = d[18], a = e
                } else if ("gif" === p) {
                    let e;
                    d[19] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e3.shareLinkToGif
                    }), d[19] = e) : e = d[19], a = e
                } else if ("image" === p) {
                    let e;
                    d[20] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e3.shareLinkToImage
                    }), d[20] = e) : e = d[20], a = e
                } else if ("response-region" === p) {
                    let e;
                    d[21] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        id: "chatgptConversations.shareDialog.responseRegion.unknownAudienceTitle",
                        defaultMessage: "Share a link to this content",
                        description: "Heading below a selected response-region preview before the link audience is known."
                    }), d[21] = e) : e = d[21], a = e
                } else if ("message" === p) {
                    let e;
                    d[22] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e3.shareLinkToMessage
                    }), d[22] = e) : e = d[22], a = e
                } else if ("prompt" === p) {
                    let e;
                    d[23] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e3.shareLinkToPrompt
                    }), d[23] = e) : e = d[23], a = e
                } else {
                    let e;
                    d[24] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e3.shareLinkToConversation
                    }), d[24] = e) : e = d[24], a = e
                }
            } else if ("widget" === p) {
                let e, s;
                d[25] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    ...e3.sharePublicLinkToWidget
                }), d[25] = e) : e = d[25], a = e, d[26] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(h.a, {
                            id: "chatgptConversations.widgetShare.publicAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access this widget. <learnMore>Learn more</learnMore>",
                            description: "Audience explanation when sharing a generated Recharts widget. The learnMore tag links to shared-links help in merged web.",
                            values: {
                                learnMore: e$
                            }
                        })
                    }), null]
                }), d[26] = s) : s = d[26], t = s
            } else if ("images" === p) {
                let e, s;
                d[27] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    ...e3.sharePublicLinkToImages
                }), d[27] = e) : e = d[27], a = e, d[28] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(h.a, {
                            id: "chatgptConversations.shareDialog.imagesPublicLinkAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access these images. Confirm you have the rights to share these images. <learnMore>Learn more</learnMore>",
                            description: "Audience and legal-permission reminder when sharing all images from one generation. Anyone with the link can view the images; the user must have permission to share them. The learnMore tag links to shared-links help in merged web. All sentences appear in one paragraph.",
                            values: {
                                learnMore: eY
                            }
                        })
                    }), null]
                }), d[28] = s) : s = d[28], t = s
            } else if ("gif" === p) {
                let e, s;
                d[29] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.sharePublicLinkToGif",
                    defaultMessage: "Share a public link to this GIF",
                    description: "Info heading in the generated GIF sharing dialog for a personal account. Anyone with the link can view the animated GIF."
                }), d[29] = e) : e = d[29], a = e, d[30] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.gifPublicLinkAudienceWithLearnMore",
                    defaultMessage: "Anyone with this link can access this GIF. Confirm you have the rights to share this GIF. <learnMore>Learn more</learnMore>",
                    description: "Audience and legal-permission reminder in the generated GIF sharing dialog. Anyone with the link can view the animation, and the user must have permission to share it. The learnMore tag links to shared-links help.",
                    values: {
                        learnMore: eV
                    }
                }), d[30] = s) : s = d[30], t = s
            } else if ("image" === p) {
                let e, s;
                d[31] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    ...e3.sharePublicLinkToImage
                }), d[31] = e) : e = d[31], a = e, d[32] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(h.a, {
                            id: "chatgptConversations.shareDialog.imagePublicLinkAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access this image. Confirm you have the rights to share this image. <learnMore>Learn more</learnMore>",
                            description: "Audience and legal-permission reminder when sharing an image. Anyone with the link can view the image; the user must have permission to share it. The learnMore tag links to shared-links help in merged web. All sentences appear in one paragraph.",
                            values: {
                                learnMore: eK
                            }
                        })
                    }), null]
                }), d[32] = s) : s = d[32], t = s
            } else if ("response-region" === p) {
                let e, s;
                d[33] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.responseRegion.publicTitle",
                    defaultMessage: "Share a public link to this content",
                    description: "Heading below the selected response-region preview when anyone with the link can view it."
                }), d[33] = e) : e = d[33], a = e, d[34] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.responseRegion.publicAudience",
                    defaultMessage: "Anyone with this link can access this content.",
                    description: "Audience explanation below the selected response-region preview for a public link."
                }), d[34] = s) : s = d[34], t = s
            } else if ("message" === p) {
                let e, s;
                d[35] !== u ? (e = u ? (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.poll.publicLinkTitle",
                    defaultMessage: "Share a public link to this poll",
                    description: "Heading below the poll preview in the public sharing dialog. Tells the person sharing that the link opens this interactive voting poll. Workspace-restricted links use a separate disclosure."
                }) : (0, i.jsx)(h.a, {
                    ...e3.sharePublicLinkToMessage
                }), d[35] = u, d[36] = e) : e = d[36], a = e, d[37] !== u ? (s = (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(i.Fragment, {
                        children: u ? (0, i.jsx)(h.a, {
                            id: "chatgptConversations.shareDialog.poll.publicAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access and vote on this poll. <learnMore>Learn more</learnMore>",
                            description: "Explanation below a public poll link preview in the web sharing dialog. Tells the person sharing that link recipients can open the poll and vote. The learnMore tag links to shared-links help.",
                            values: {
                                learnMore: eB
                            }
                        }) : (0, i.jsx)(h.a, {
                            id: "chatgptConversations.shareDialog.messagePublicLinkAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access this message. <learnMore>Learn more</learnMore>",
                            description: "Audience explanation when sharing a response. The learnMore tag links to shared-links help in merged web.",
                            values: {
                                learnMore: ez
                            }
                        })
                    }), null]
                }), d[37] = u, d[38] = s) : s = d[38], t = s
            } else if ("prompt" === p) {
                let e, s;
                d[39] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.prompt.info.title.public",
                    defaultMessage: "Share a public link to this prompt",
                    description: "Heading below the prompt preview in the ChatGPT sharing dialog for a personal account. It introduces the public link and social sharing actions for the selected user prompt."
                }), d[39] = e) : e = d[39], a = e, d[40] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(h.a, {
                            id: "chatgptConversations.shareDialog.prompt.info.description.publicWithLearnMore",
                            defaultMessage: "Anyone with this link can access this prompt. <learnMore>Learn more</learnMore>",
                            description: "Audience explanation below the public-link heading in the ChatGPT prompt sharing dialog on web. Only the selected prompt is shared. The learnMore tag links to shared-links help.",
                            values: {
                                learnMore: eq
                            }
                        })
                    }), null]
                }), d[40] = s) : s = d[40], t = s
            } else {
                let e, s;
                d[41] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    ...e3.sharePublicLinkToConversation
                }), d[41] = e) : e = d[41], a = e, d[42] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsx)(z, {
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
                    children: (0, i.jsx)(z, {})
                })
            }) : null, d[51] = g, d[52] = p, d[53] = l) : l = d[53], d[54] !== r || d[55] !== o || d[56] !== l ? (c = (0, i.jsx)(f.e, {
                spacing: "large",
                children: (0, i.jsxs)("div", {
                    className: "w-full text-start select-none",
                    children: [r, o, l]
                })
            }), d[54] = r, d[55] = o, d[56] = l, d[57] = c) : c = d[57], c
        }

        function eq(e) {
            return (0, i.jsx)(B, {
                children: e
            })
        }

        function ez(e) {
            return (0, i.jsx)(B, {
                children: e
            })
        }

        function eB(e) {
            return (0, i.jsx)(B, {
                children: e
            })
        }

        function eK(e) {
            return (0, i.jsx)(B, {
                children: e
            })
        }

        function eV(e) {
            return (0, i.jsx)(B, {
                children: e
            })
        }

        function eY(e) {
            return (0, i.jsx)(B, {
                children: e
            })
        }

        function e$(e) {
            return (0, i.jsx)(B, {
                children: e
            }, "learn-more")
        }

        function eQ(e) {
            return (0, i.jsx)(B, {
                children: e
            })
        }

        function eX(e) {
            return (0, i.jsx)(B, {
                children: e
            })
        }

        function eJ(e) {
            return (0, i.jsx)(B, {
                children: e
            })
        }

        function eZ(e) {
            let a, t, n = (0, s.c)(5),
                {
                    item: r,
                    serverConversationId: o
                } = e;
            n[0] !== o ? (a = (0, P.c)((0, F.c)(o)), n[0] = o, n[1] = a) : a = n[1];
            let {
                src: l,
                isLoading: c
            } = (0, M.k)(r.src ?? "", a);
            return n[2] !== c || n[3] !== l ? (t = (0, i.jsx)(e1, {
                src: l,
                isLoading: c
            }), n[2] = c, n[3] = l, n[4] = t) : t = n[4], t
        }

        function e1(e) {
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
                    ...e3.imageUnavailable
                })
            }), t[3] = o, t[4] = a) : a = t[4], a
        }

        function e0(e) {
            let a, t, n, r, o, l = (0, s.c)(16),
                {
                    showImageRightsNotice: c,
                    showContentNotices: d,
                    privacyNotices: g
                } = e;
            return l[0] !== g?.hasUnsupportedCodeInterpreterContent || l[1] !== d ? (a = d && g?.hasUnsupportedCodeInterpreterContent ? (0, i.jsx)(f.e, {
                children: (0, i.jsx)(m.a, {
                    content: (0, i.jsx)(h.a, {
                        ...e3.filesNotShared
                    }),
                    variant: "privacyNotice"
                })
            }) : null, l[0] = g?.hasUnsupportedCodeInterpreterContent, l[1] = d, l[2] = a) : a = l[2], l[3] !== g?.hasPersonalizedSources || l[4] !== d ? (t = d && g?.hasPersonalizedSources ? (0, i.jsx)(f.e, {
                children: (0, i.jsx)(m.a, {
                    content: (0, i.jsx)(h.a, {
                        ...e3.personalizedSourcesPrivate
                    }),
                    variant: "privacyNotice"
                })
            }) : null, l[3] = g?.hasPersonalizedSources, l[4] = d, l[5] = t) : t = l[5], l[6] !== g?.hasScreenshotReference || l[7] !== d ? (n = d && g?.hasScreenshotReference ? (0, i.jsx)(f.e, {
                children: (0, i.jsx)(m.a, {
                    content: (0, i.jsx)(h.a, {
                        ...e3.screenshotDisclaimer
                    }),
                    variant: "privacyNotice"
                })
            }) : null, l[6] = g?.hasScreenshotReference, l[7] = d, l[8] = n) : n = l[8], l[9] !== c ? (r = c ? (0, i.jsx)(f.e, {
                children: (0, i.jsx)("p", {
                    className: "text-sm text-secondary select-none",
                    children: (0, i.jsx)(h.a, {
                        ...e3.imageLicenseDisclaimer
                    })
                })
            }) : null, l[9] = c, l[10] = r) : r = l[10], l[11] !== a || l[12] !== t || l[13] !== n || l[14] !== r ? (o = (0, i.jsxs)(i.Fragment, {
                children: [a, t, n, r]
            }), l[11] = a, l[12] = t, l[13] = n, l[14] = r, l[15] = o) : o = l[15], o
        }

        function e2(e) {
            let a = (0, s.c)(4),
                {
                    error: t
                } = e;
            switch (t) {
                case "blocked": {
                    let e;
                    return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e3.shareBlocked
                    }), a[0] = e) : e = a[0], e
                }
                case "conversation-load-failed": {
                    let e;
                    return a[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e3.shareConversationLoadFailed
                    }), a[1] = e) : e = a[1], e
                }
                case "copy-failed": {
                    let e;
                    return a[2] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e3.shareCopyFailed
                    }), a[2] = e) : e = a[2], e
                }
                case "create-failed": {
                    let e;
                    return a[3] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e3.shareCreateFailed
                    }), a[3] = e) : e = a[3], e
                }
            }
        }
        let e3 = (0, g.f)({
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
            shareConversationLoadFailed: {
                id: "chatgptConversations.shareDialog.shareConversationLoadFailed",
                defaultMessage: "Could not load the full conversation",
                description: "Error shown when a ChatGPT response sharing dialog cannot load the full conversation and its privacy notices before sharing."
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
                        _ = !1;
                    if (null != b && await (0, r.d)({
                            downloadSrc: b,
                            onDownloaded: () => {
                                _ = !0, null != g && !p && u && (0, c.c)(e, g, f, "download")
                            },
                            suggestedFilename: t.length > 1 ? k.replace(/\.[^.]+$/, `-${a+1}.${w}`) : k
                        })) {
                        if (!_) return "cancelled";
                        m++;
                        continue
                    }
                    return e.get(i.f).danger(h.formatMessage({
                        id: "imageSidePanel.downloadFailure",
                        defaultMessage: "Could not download image",
                        description: "Error shown when the image toolbar download fails."
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
                        actionLabel: _,
                        audience: y,
                        compactImageSheetFooter: T,
                        error: S,
                        footer: C,
                        info: x,
                        isBusy: A,
                        isDismissalDisabled: I,
                        notices: M,
                        onClose: L,
                        onOpenAutoFocus: j,
                        onPortalContainerChange: E,
                        onSubmit: P,
                        preview: D,
                        presentation: N,
                        subtitle: G,
                        size: R,
                        threadTitle: F,
                        title: O
                    } = e,
                    H = (0, n.a)();
                v[0] !== F ? (a = F?.trim(), v[0] = F, v[1] = a) : a = v[1];
                let W = a;
                v[2] !== A ? (t = A ? null : (0, i.jsx)(c.Ae, {}), v[2] = A, v[3] = t) : t = v[3], v[4] !== _ || v[5] !== t ? (p = (0, i.jsxs)(i.Fragment, {
                    children: [t, _]
                }), v[4] = _, v[5] = t, v[6] = p) : p = v[6];
                let U = p;
                if (S?.preventsSharing) {
                    let e;
                    v[7] !== S.onRetry ? (e = null != S.onRetry ? (0, i.jsx)(r.a, {
                        id: "shareDialog.thread.retry",
                        defaultMessage: "Try again",
                        description: "Button in a thread sharing dialog after preparing the share link fails. Retries preparing the chat without publishing it."
                    }) : (0, i.jsx)(r.a, {
                        id: "shareDialog.thread.close",
                        defaultMessage: "Close",
                        description: "Button in a thread sharing dialog that cannot prepare a share link. Closes the failed dialog so the user can reopen sharing."
                    }), v[7] = S.onRetry, v[8] = e) : e = v[8], U = e
                }
                let q = !S?.preventsSharing && k;
                v[9] !== U || v[10] !== A || v[11] !== q ? (u = (0, i.jsx)(o.a, {
                    color: "outline",
                    disabled: q,
                    loading: A,
                    size: "medium",
                    type: "submit",
                    children: U
                }), v[9] = U, v[10] = A, v[11] = q, v[12] = u) : u = v[12];
                let z = u;
                v[13] !== W || v[14] !== O ? (m = O ?? (W ? (0, i.jsx)(r.a, {
                    id: "shareDialog.thread.namedTitle",
                    defaultMessage: "Share {threadTitle}",
                    description: "Title of the ChatGPT or Codex thread sharing dialog. threadTitle is the user-provided name of the chat and may be truncated to fit the dialog header.",
                    values: {
                        threadTitle: W
                    }
                }) : (0, i.jsx)(r.a, {
                    id: "shareDialog.thread.title",
                    defaultMessage: "Share chat",
                    description: "Title of the thread sharing dialog when the ChatGPT or Codex chat has no name yet."
                })), v[13] = W, v[14] = O, v[15] = m) : m = v[15];
                let B = S?.preventsSharing ? S.onRetry ?? L : P,
                    K = S?.preventsSharing ? z : C ?? z;
                return v[16] !== w || v[17] !== y || v[18] !== S || v[19] !== x || v[20] !== H || v[21] !== M || v[22] !== N || v[23] !== D ? (f = S?.preventsSharing ? (0, i.jsx)(l.e, {
                    className: "py-10",
                    children: (0, i.jsx)("div", {
                        role: "alert",
                        children: (0, i.jsx)(d.a, {
                            children: S.content
                        })
                    })
                }) : (0, i.jsxs)(i.Fragment, {
                    children: ["imageSheet" === N ? D : (0, i.jsx)(l.e, {
                        children: D
                    }), x, M, w ?? (null == y ? null : (0, i.jsx)(l.e, {
                        children: (0, i.jsx)("div", {
                            className: "text-sm text-codex-description",
                            children: y
                        })
                    })), null == S ? null : (0, i.jsx)(l.e, {
                        children: (0, i.jsx)("div", {
                            className: "text-sm text-danger",
                            role: "alert",
                            children: S.content
                        })
                    }), S?.copyUrl == null ? null : (0, i.jsx)(l.e, {
                        children: (0, i.jsx)(h.a, {
                            "aria-label": H.formatMessage({
                                id: "shareDialog.thread.linkLabel",
                                defaultMessage: "Share link",
                                description: "Accessible label for the read-only URL field in a ChatGPT or Codex thread sharing dialog. The URL can be manually selected and copied if clipboard access fails."
                            }),
                            readOnly: !0,
                            value: S.copyUrl
                        })
                    })]
                }), v[16] = w, v[17] = y, v[18] = S, v[19] = x, v[20] = H, v[21] = M, v[22] = N, v[23] = D, v[24] = f) : f = v[24], v[25] !== T || v[26] !== I || v[27] !== L || v[28] !== j || v[29] !== E || v[30] !== N || v[31] !== R || v[32] !== G || v[33] !== m || v[34] !== B || v[35] !== K || v[36] !== f ? (b = (0, i.jsx)(g.a, {
                    title: m,
                    subtitle: G,
                    compactImageSheetFooter: T,
                    isDismissalDisabled: I,
                    onClose: L,
                    onOpenAutoFocus: j,
                    onPortalContainerChange: E,
                    onSubmit: B,
                    size: R,
                    presentation: N,
                    footer: K,
                    children: f
                }), v[25] = T, v[26] = I, v[27] = L, v[28] = j, v[29] = E, v[30] = N, v[31] = R, v[32] = G, v[33] = m, v[34] = B, v[35] = K, v[36] = f, v[37] = b) : b = v[37], b
            }
        })
    })
};