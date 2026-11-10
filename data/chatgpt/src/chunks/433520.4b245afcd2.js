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
            a: () => eP,
            ChatGptConversationShareRecoveryDialog: () => eL
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
            y = t("SGsN"),
            x = t("yGJW"),
            _ = t("OWtl"),
            T = t("akkX"),
            C = t("FGv0"),
            S = t("TnP0"),
            A = t("qKAH"),
            j = t("hZax"),
            I = t("zHp1"),
            M = t("WFY2"),
            L = t("rvFo"),
            P = t("HFSu"),
            E = t("taWv"),
            D = t("r9i9"),
            N = t("Y7np"),
            G = t("oU3c"),
            R = t("SEBt"),
            F = t("OOaz"),
            O = t("fwwN"),
            H = t("cQW3"),
            W = t("Tywu"),
            U = t("rfhJ"),
            z = t("ZtSy");

        function q(e) {
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
                children: (0, i.jsx)(z.a, {
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
            Q = t("Sm6l"),
            $ = t("WAV0"),
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
            ey = t.p + "assets/whatsapp.0a1329508c.svg",
            ex = t.p + "assets/x.1105bc9892.svg",
            e_ = "mobileRow-V0E64y",
            eT = t("H6Am"),
            eC = t("G3Yw"),
            eS = t("ARht");

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
                    onSocialShare: y,
                    experience: x,
                    onNativeShare: _,
                    canNativeShare: T,
                    country: C,
                    rowScrollPositions: S
                } = e,
                A = (0, d.a)();
            if (c[0] !== w || c[1] !== T || c[2] !== g || c[3] !== h || c[4] !== C || c[5] !== x.layout || c[6] !== x.unsupportedDestinationFallback || c[7] !== A || c[8] !== p || c[9] !== u || c[10] !== b || c[11] !== v || c[12] !== _ || c[13] !== y || c[14] !== S || c[15] !== f || c[16] !== m) {
                o = Symbol.for("react.early_return_sentinel");
                e: {
                    let e, s, l, d = null == v ? [] : [{
                        id: "download",
                        disabled: u || p,
                        icon: (0, i.jsx)(ea.a, {
                            asset: eT.a
                        }),
                        label: A.formatMessage({
                            id: "chatgptConversations.shareDialog.destination.download.label",
                            defaultMessage: "Download",
                            description: "Short label below a circular button in the generated-image Share dialog. Saves the selected image, or all images in the selected series, to the user's device without creating a shared link."
                        }),
                        onClick: v
                    }];c[22] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(ea.a, {
                        asset: eS.a
                    }), c[22] = e) : e = c[22];
                    let j = {
                            id: "copy",
                            disabled: g,
                            icon: e,
                            label: h,
                            onClick: b
                        },
                        I = T ? [{
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
                            onClick: _
                        }] : [],
                        M = [...d, j, ...I],
                        L = f ? (0, K.e)({
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
                                    a = c(ey), t = d(eh), s = o.formatMessage({
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
                                    a = c(ex), t = d(eg), s = o.formatMessage({
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
                            disabled: m || "native-share" === x.unsupportedDestinationFallback && (0, K.g)(e) && !T,
                            intl: A,
                            onSocialShare: y
                        })) : [],
                        P = "two-rows" === x.layout && L.length > 0;c[23] !== S ? (s = e => null == S ? {} : {
                        onScroll: a => {
                            S[e] = a.currentTarget.scrollLeft
                        },
                        ref: a => {
                            null != a && (a.scrollLeft = S[e] ?? 0)
                        }
                    }, c[23] = S, c[24] = s) : s = c[24];
                    let E = s;c[25] !== p || c[26] !== u ? (l = (e, a) => {
                        let {
                            id: t,
                            disabled: s,
                            icon: n,
                            iconBackground: r,
                            label: o,
                            onClick: l
                        } = e, c = "copy" === t && p || "download" === t && u;
                        return (0, i.jsx)($.a, {
                            extension: "download" === t,
                            children: (0, i.jsxs)(Q.a, {
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
                    if (P) {
                        let e, a, t, s, n, r, l = [...d, ...I, j];
                        c[28] !== E ? (e = E("destinations"), c[28] = E, c[29] = e) : e = c[29], c[30] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, Y.b)("box-border flex min-w-0 w-full gap-x-5 overflow-x-auto overscroll-x-contain px-5 pt-5 pb-8", e_), c[30] = a) : a = c[30], c[31] !== D ? (t = e => D(e, !0), c[31] = D, c[32] = t) : t = c[32], c[33] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsx)("div", {
                            className: "w-full border-t-hairline border-default",
                            "aria-hidden": "true"
                        }), c[33] = s) : s = c[33], c[34] !== E ? (n = E("actions"), c[34] = E, c[35] = n) : n = c[35], c[36] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, Y.b)("box-border flex min-w-0 w-full gap-x-5 overflow-x-auto overscroll-x-contain px-5 pt-5 pb-8", e_, "mobileUtilityRow-iCKQaL"), c[36] = r) : r = c[36], o = (0, i.jsxs)("div", {
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
                    c[37] !== E ? (t = E("combined"), c[37] = E, c[38] = t) : t = c[38],
                    c[39] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, Y.b)("flex w-full gap-x-6 overflow-x-auto overscroll-x-contain px-6", e_), c[39] = n) : n = c[39],
                    r = [...M, ...L].map(e => D(e, !1))
                }
                c[0] = w, c[1] = T, c[2] = g, c[3] = h, c[4] = C, c[5] = x.layout, c[6] = x.unsupportedDestinationFallback, c[7] = A, c[8] = p, c[9] = u, c[10] = b, c[11] = v, c[12] = _, c[13] = y, c[14] = S, c[15] = f, c[16] = m, c[17] = a, c[18] = t, c[19] = n, c[20] = r, c[21] = o
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
            let _ = (0, l.x)(Z.b, a),
                T = _ ? u.large : u.compact,
                C = _ ? "size-16" : "size-11";
            d[1] !== C ? (t = (0, Y.b)("share-destination-icon flex items-center justify-center rounded-full", C), d[1] = C, d[2] = t) : t = d[2], d[3] !== _ || d[4] !== T || d[5] !== y ? (n = y ? (0, i.jsx)(k.a, {
                as: "span",
                className: _ ? "size-8" : "icon-sm"
            }) : T, d[3] = _, d[4] = T, d[5] = y, d[6] = n) : n = d[6], d[7] !== t || d[8] !== n ? (r = (0, i.jsx)("span", {
                className: t,
                children: n
            }), d[7] = t, d[8] = n, d[9] = r) : r = d[9];
            let S = void 0 !== b && b ? "polite" : void 0;
            return d[10] !== f || d[11] !== S ? (o = (0, i.jsx)("span", {
                className: "w-full text-center text-xs whitespace-nowrap text-default select-none",
                "aria-live": S,
                children: f
            }), d[10] = f, d[11] = S, d[12] = o) : o = d[12], d[13] !== h || d[14] !== g || d[15] !== p || d[16] !== y || d[17] !== w || d[18] !== o || d[19] !== r || d[20] !== x ? (c = (0, i.jsxs)(Q.a, {
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

        function eI(e) {
            let a, t, n, r, o, c, h, g, p, u = (0, s.c)(66),
                {
                    copyLabel: m,
                    copyDisabled: f,
                    isBusy: b,
                    isDownloading: w,
                    socialDestinationsDisabled: y,
                    showSocialDestinations: x,
                    onCopy: _,
                    onDownload: T,
                    additionalActions: C,
                    onSocialShare: S,
                    mobileImageActions: A,
                    projectStyleEligible: I
                } = e,
                M = void 0 !== w && w,
                L = (0, j.l)(),
                P = void 0 !== I && I && null == A && !!L.userID?.trim();
            u[0] === Symbol.for("react.memo_cache_sentinel") ? (a = {
                layer: "1145946487",
                parameter: "project_style_share_buttons"
            }, u[0] = a) : a = u[0];
            let E = !0 === (0, l.x)(P ? Z.b : null, a),
                D = null != A;
            u[1] !== D ? (t = {
                layer: "3136899520",
                parameter: "large_share_destinations",
                disableExposureLog: D
            }, u[1] = D, u[2] = t) : t = u[2];
            let N = (0, l.x)(E ? null : Z.b, t),
                G = (0, d.a)(),
                {
                    client: R
                } = (0, j.h)();
            u[3] !== R ? (n = R.getContext().user?.country?.trim().toUpperCase(), u[3] = R, u[4] = n) : n = u[4];
            let F = n,
                O = null == A && "JP" === F && x,
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
                return u[7] !== C || u[8] !== f || u[9] !== m || u[10] !== F || u[11] !== b || u[12] !== M || u[13] !== A.canNativeShare || u[14] !== A.experience || u[15] !== A.onNativeShare || u[16] !== A.rowScrollPositions || u[17] !== _ || u[18] !== T || u[19] !== S || u[20] !== x || u[21] !== y ? (e = (0, i.jsx)(eA, {
                    copyLabel: m,
                    copyDisabled: f,
                    isBusy: b,
                    isDownloading: M,
                    socialDestinationsDisabled: y,
                    showSocialDestinations: x,
                    onCopy: _,
                    onDownload: T,
                    additionalActions: C,
                    onSocialShare: S,
                    experience: A.experience,
                    onNativeShare: A.onNativeShare,
                    canNativeShare: A.canNativeShare,
                    country: F,
                    rowScrollPositions: A.rowScrollPositions
                }), u[7] = C, u[8] = f, u[9] = m, u[10] = F, u[11] = b, u[12] = M, u[13] = A.canNativeShare, u[14] = A.experience, u[15] = A.onNativeShare, u[16] = A.rowScrollPositions, u[17] = _, u[18] = T, u[19] = S, u[20] = x, u[21] = y, u[22] = e) : e = u[22], e
            }
            if (u[23] !== C || u[24] !== f || u[25] !== m || u[26] !== G || u[27] !== b || u[28] !== M || u[29] !== _ || u[30] !== T || u[31] !== S || u[32] !== U || u[33] !== x || u[34] !== y || u[35] !== E) {
                o = Symbol.for("react.early_return_sentinel");
                e: {
                    let e, a, t, s = null == T ? [] : [{
                        id: "download",
                        largeIcon: (0, i.jsx)(v.s, {
                            "aria-hidden": "true"
                        }),
                        disabled: M,
                        icon: (0, i.jsx)(v.r, {}),
                        label: G.formatMessage({
                            id: "chatgptConversations.shareDialog.destination.download.label",
                            defaultMessage: "Download",
                            description: "Short label below a circular button in the generated-image Share dialog. Saves the selected image, or all images in the selected series, to the user's device without creating a shared link."
                        }),
                        onClick: T
                    }];u[38] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(v.Ce, {
                        "aria-hidden": "true"
                    }), u[38] = e) : e = u[38],
                    u[39] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, i.jsx)(v.Be, {}), u[39] = a) : a = u[39],
                    u[40] !== f || u[41] !== m || u[42] !== _ ? (t = {
                        id: "copy",
                        largeIcon: e,
                        disabled: f,
                        icon: a,
                        label: m,
                        onClick: _
                    }, u[40] = f, u[41] = m, u[42] = _, u[43] = t) : t = u[43];
                    let n = t,
                        r = x ? [...U ? [function(e) {
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
                            disabled: y,
                            intl: G,
                            onSocialShare: S
                        })] : [], eM({
                            destination: "x",
                            disabled: y,
                            intl: G,
                            onSocialShare: S
                        }), eM({
                            destination: "linkedin",
                            disabled: y,
                            intl: G,
                            onSocialShare: S
                        }), ...U ? [] : [eM({
                            destination: "reddit",
                            disabled: y,
                            intl: G,
                            onSocialShare: S
                        })]] : [];
                    if (E) {
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
                                children: (0, i.jsx)(Q.a, {
                                    "aria-label": n,
                                    "aria-busy": "download" === a && M,
                                    color: "secondary",
                                    "data-destination": a,
                                    disabled: t,
                                    radius: "full",
                                    size: "dialogAction",
                                    type: "button",
                                    uniform: !0,
                                    onClick: r,
                                    children: "download" === a && M ? (0, i.jsx)(k.a, {
                                        className: "icon-sm"
                                    }) : s
                                })
                            }, a)
                        };
                        u[44] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(v.Ae, {}), u[44] = e) : e = u[44], u[45] !== m ? (a = (0, i.jsx)("span", {
                            "aria-live": "polite",
                            children: m
                        }), u[45] = m, u[46] = a) : a = u[46], u[47] !== f || u[48] !== m || u[49] !== b || u[50] !== _ || u[51] !== a ? (t = (0, i.jsxs)(Q.a, {
                            "aria-label": m,
                            "aria-busy": b,
                            color: "primary",
                            "data-destination": "copy",
                            disabled: f,
                            loading: b,
                            size: "dialogAction",
                            type: "submit",
                            onClick: _,
                            children: [e, a]
                        }), u[47] = f, u[48] = m, u[49] = b, u[50] = _, u[51] = a, u[52] = t) : t = u[52], o = (0, i.jsxs)("div", {
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
                u[23] = C, u[24] = f, u[25] = m, u[26] = G, u[27] = b, u[28] = M, u[29] = _, u[30] = T, u[31] = S, u[32] = U, u[33] = x, u[34] = y, u[35] = E, u[36] = o, u[37] = c
            } else o = u[36], c = u[37];
            if (o !== Symbol.for("react.early_return_sentinel")) return o;
            let z = c,
                q = null == C && "flex-wrap justify-center gap-x-6 gap-y-4",
                B = null != C && "gap-3",
                K = null != C && N && "flex-wrap justify-center",
                X = null != C && !N && "justify-start overflow-x-auto sm:justify-center";
            return u[53] !== q || u[54] !== B || u[55] !== K || u[56] !== X ? (h = (0, Y.b)("flex w-full", q, B, K, X), u[53] = q, u[54] = B, u[55] = K, u[56] = X, u[57] = h) : h = u[57], u[58] !== z || u[59] !== b || u[60] !== M ? (g = z.map(e => {
                let {
                    id: a,
                    disabled: t,
                    icon: s,
                    largeIcon: n,
                    label: r,
                    onClick: o
                } = e, l = "copy" === a && b || "download" === a && M;
                return (0, i.jsx)($.a, {
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
            }), u[58] = z, u[59] = b, u[60] = M, u[61] = g) : g = u[61], u[62] !== C || u[63] !== h || u[64] !== g ? (p = (0, i.jsxs)("div", {
                className: h,
                children: [g, C]
            }), u[62] = C, u[63] = h, u[64] = g, u[65] = p) : p = u[65], p
        }

        function eM(e) {
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

        function eL(e) {
            let a, t, n, r, o, d, h = (0, s.c)(12);
            h[0] !== e ? ({
                accountId: a,
                onClose: t,
                ...n
            } = e, h[0] = e, h[1] = a, h[2] = t, h[3] = n) : (a = h[1], t = h[2], n = h[3]);
            let g = (0, l.z)(u.f) === a;
            return h[4] !== g || h[5] !== t ? (r = () => {
                g || t()
            }, o = [g, t], h[4] = g, h[5] = t, h[6] = r, h[7] = o) : (r = h[6], o = h[7]), (0, c.useEffect)(r, o), h[8] !== g || h[9] !== t || h[10] !== n ? (d = g ? (0, i.jsx)(eP, {
                ...n,
                onClose: t
            }) : null, h[8] = g, h[9] = t, h[10] = n, h[11] = d) : d = h[11], d
        }

        function eP(e) {
            let a, t, n = (0, s.c)(9);
            return n[0] !== e.publishedShareLink?.shareLinkId || n[1] !== e.publishedWidget || n[2] !== e.responseRegion || n[3] !== e.shareSessionId || n[4] !== e.widget ? (a = null == e.widget && null == e.publishedWidget && null == e.responseRegion ? void 0 : JSON.stringify([e.widget?.attachment, e.responseRegion?.attachment, e.publishedShareLink?.shareLinkId, e.shareSessionId]), n[0] = e.publishedShareLink?.shareLinkId, n[1] = e.publishedWidget, n[2] = e.responseRegion, n[3] = e.shareSessionId, n[4] = e.widget, n[5] = a) : a = n[5], n[6] !== e || n[7] !== a ? (t = (0, i.jsx)(eE, {
                ...e
            }, a), n[6] = e, n[7] = a, n[8] = t) : t = n[8], t
        }

        function eE(e) {
            let a, t, g, m, v, k, P, z, q, B, V, Y, Q, $, X, J, Z, ee, ea, et, ei, es, en, er, eo, el, ec, ed, eh, eg, ep, eu, em, ef, eb, ev, ew, ek, ey, ex, e_, eT, eC, eS, eA, ej, eM, eL, eP, eE = (0, s.c)(365),
                {
                    currentNodeId: eU,
                    image: ez,
                    imagePromptTemplate: eq,
                    imageShareOptions: eB,
                    recoveryShareLink: eK,
                    publishedShareLink: eV,
                    publishedWidget: eY,
                    messageIds: eQ,
                    mobileImageExperience: e$,
                    mobileImageRowScrollPositions: eX,
                    trackMobileImageShareLifecycle: e3,
                    onImageShareLinkPrepared: e5,
                    onClose: e4,
                    onResult: e6,
                    previewTurns: e7,
                    loadExpandedConversation: e8,
                    privacyNotices: e9,
                    prompt: ae,
                    receiverShareLink: aa,
                    responseRegion: at,
                    response: ai,
                    serverConversationId: as,
                    shareSessionId: an,
                    source: ar,
                    title: ao,
                    widget: al
                } = e,
                ac = (0, l.y)(_.a),
                ad = (0, j.j)("3136899520"),
                [ah, ag] = (0, c.useState)(!1),
                ap = (0, l.z)(null)?.data,
                au = (0, l.z)(null),
                am = (0, l.x)(null, as),
                af = (0, d.a)(),
                ab = (0, c.useRef)(!1),
                av = (0, c.useRef)(!1);
            eE[0] !== e6 ? (a = () => (ab.current = !0, () => {
                ab.current = !1, queueMicrotask(() => {
                    ab.current || av.current || (av.current = !0, e6?.(!1))
                })
            }), t = [e6], eE[0] = e6, eE[1] = a, eE[2] = t) : (a = eE[1], t = eE[2]), (0, c.useEffect)(a, t), eE[3] !== e6 ? (g = function(e) {
                av.current || (av.current = !0, e6?.(e))
            }, eE[3] = e6, eE[4] = g) : g = eE[4];
            let aw = g;
            eE[5] !== aw || eE[6] !== e4 ? (m = function() {
                aw(!1), e4()
            }, eE[5] = aw, eE[6] = e4, eE[7] = m) : m = eE[7];
            let ak = m,
                ay = (0, c.useContext)(p.a);
            eE[8] !== ez || eE[9] !== ac || eE[10] !== as ? (v = null == ez ? void 0 : (0, H.a)(ac, as, ez), eE[8] = ez, eE[9] = ac, eE[10] = as, eE[11] = v) : v = eE[11];
            let ax = v;
            eE[12] !== eq || eE[13] !== ax || eE[14] !== eV || eE[15] !== aa || eE[16] !== eK || eE[17] !== ac.queryClient ? (k = () => aa ?? eV ?? eK ?? (null == ax || null != eq ? null : ac.queryClient.getQueryData(ax.queryKey) ?? null), eE[12] = eq, eE[13] = ax, eE[14] = eV, eE[15] = aa, eE[16] = eK, eE[17] = ac.queryClient, eE[18] = k) : k = eE[18];
            let [a_, aT] = (0, c.useState)(k), [aC] = (0, c.useState)(eH), aS = an ?? aC, [aA, aj] = (0, c.useState)("message");
            eE[19] !== eQ || eE[20] !== e7 || eE[21] !== ai || eE[22] !== ad ? (P = null != eQ && null != ai && null != e7 && ad.get("message_share_scope_picker", !1), eE[19] = eQ, eE[20] = e7, eE[21] = ai, eE[22] = ad, eE[23] = P) : P = eE[23];
            let aI = P,
                aM = aI && "conversation" === aA;
            eE[24] !== aS ? (z = ["expanded-conversation-share", aS], eE[24] = aS, eE[25] = z) : z = eE[25];
            let aL = z,
                aP = aM && null != e8;
            eE[26] !== e8 ? (q = e => {
                let {
                    signal: a
                } = e;
                if (null == e8) throw Error("Expanded conversation loader unavailable");
                return e8(a)
            }, eE[26] = e8, eE[27] = q) : q = eE[27], eE[28] !== aL || eE[29] !== q || eE[30] !== aP ? (B = {
                enabled: aP,
                queryKey: aL,
                queryFn: q,
                staleTime: 1 / 0,
                gcTime: 0,
                retry: !1
            }, eE[28] = aL, eE[29] = q, eE[30] = aP, eE[31] = B) : B = eE[31];
            let {
                data: aE,
                error: aD,
                isFetching: aN,
                refetch: aG
            } = (0, o.a)(B), [aR, aF] = (0, c.useState)("idle"), [aO, aH] = (0, c.useState)(null != eK ? "copy-failed" : null), [aW, aU] = (0, c.useState)(!1);
            eE[32] !== as ? (V = ["chatgpt-conversation-share", as], eE[32] = as, eE[33] = V) : V = eE[33];
            let az = V,
                aq = null == eK && null == aa && null == eV && null == ae && null == ez && (null == eQ || aM) && null == at && null == al;
            eE[34] !== eU || eE[35] !== as ? (Y = () => (0, D.i)({
                conversationId: as,
                currentNodeId: eU
            }), eE[34] = eU, eE[35] = as, eE[36] = Y) : Y = eE[36], eE[37] !== az || eE[38] !== aq || eE[39] !== Y ? (Q = {
                enabled: aq,
                queryFn: Y,
                queryKey: az,
                retry: !1,
                staleTime: L.b.ONE_MINUTE
            }, eE[37] = az, eE[38] = aq, eE[39] = Y, eE[40] = Q) : Q = eE[40];
            let {
                data: aB,
                error: aK,
                isLoading: aV
            } = (0, o.a)(Q);
            eE[41] === Symbol.for("react.memo_cache_sentinel") ? ($ = {
                enabled: !1,
                queryFn: eO,
                queryKey: ["accounts", "check"],
                staleTime: L.b.ONE_MINUTE
            }, eE[41] = $) : $ = eE[41];
            let {
                data: aY
            } = (0, o.a)($), aQ = null != ez, a$ = null != e$ && aQ, aX = a$ || !0 === e3, aJ = null != aa, aZ = (ez?.additionalImages?.length ?? 0) > 0, a1 = ez?.item.isAnimated === !0 && !aZ;
            eE[42] !== ez || eE[43] !== as || eE[44] !== aS ? (X = (0, E.c)((0, F.c)(as), void 0, null != ez && null == ez.previewSrc ? aS : void 0), eE[42] = ez, eE[43] = as, eE[44] = aS, eE[45] = X) : X = eE[45];
            let {
                src: a0,
                isLoading: a2
            } = (0, I.k)(null != ez && (aZ || null == ez.previewSrc) ? ez.item.src ?? "" : "", X), a3 = null != ez && null == ez.previewSrc && null == a0, a5 = aZ ? "image_series" : "single_image", a4 = al ?? eY, a6 = null != eQ || null != at || null != a4 || aa?.contentType === "message", a7 = null != at, a8 = a4?.metadata.widgetType === "visualization", a9 = a4?.metadata.widgetName === "create_interactive_poll" || a4?.metadata.widgetName === "CreateInteractivePoll", te = null != ae || null != eq, ta = aQ || a6 || te, tt = !ta || aM, ti = ta || !0, ts = "conversation";
            if (a8 ? ts = "widget" : null != eq ? ts = "prompt" : a1 ? ts = "gif" : aQ ? ts = aZ ? "images" : "image" : a7 ? ts = "response-region" : a6 ? ts = aM ? "conversation" : "message" : te && (ts = "prompt"), null == ai) J = e9;
            else if (aM) J = aE?.privacyNotices ?? (null == e8 ? e9 : void 0);
            else {
                let e;
                eE[46] !== ai ? (e = (0, D.m)(ai), eE[46] = ai, eE[47] = e) : e = eE[47], J = e
            }
            let tn = aQ || (!ta || a6) && J?.hasImageReference === !0;
            eE[48] !== ez || eE[49] !== aZ || eE[50] !== ao ? (Z = (aZ ? void 0 : ez?.item.chatGptDisplayTitle) ?? (0, G.c)(ao), eE[48] = ez, eE[49] = aZ, eE[50] = ao, eE[51] = Z) : Z = eE[51];
            let tr = Z,
                to = tt && aB?.is_public === !0 && !0 === aB.is_visible,
                tl = aY?.accounts?.find(e => e.id === (ay?.accountId ?? aY.account_ordering?.[0])),
                tc = tl?.structure ?? ay?.accountStructureAtLogin,
                td = "unknown";
            a_?.isWorkspaceOnly != null ? td = a_.isWorkspaceOnly ? "workspace" : "public" : null == aB || aQ ? ("personal" === tc || "workspace" === tc) && (td = "workspace" === tc ? "workspace" : "public") : td = aB.share_url.includes("/share/e/") ? "workspace" : "public", eE[52] !== ez || eE[53] !== eq || eE[54] !== ax?.queryKey || eE[55] !== as ? (ee = null != eq ? ["chatgpt-image-prompt-share-preparation", as, ez?.item.id, eq.revision] : ax?.queryKey ?? ["disabled-chatgpt-image-share-query"], eE[52] = ez, eE[53] = eq, eE[54] = ax?.queryKey, eE[55] = as, eE[56] = ee) : ee = eE[56], eE[57] !== eq || eE[58] !== ax?.queryFn ? (ea = null != eq ? () => eq.createLink("native") : ax?.queryFn ?? eF, eE[57] = eq, eE[58] = ax?.queryFn, eE[59] = ea) : ea = eE[59];
            let th = a$ && (0, W.a)() && eq?.actionsDisabled !== !0 && (null != eq || null != ax) && "public" === td && null == a_;
            eE[60] !== ee || eE[61] !== ea || eE[62] !== th ? (et = {
                queryKey: ee,
                queryFn: ea,
                enabled: th,
                retry: !1,
                staleTime: 1 / 0
            }, eE[60] = ee, eE[61] = ea, eE[62] = th, eE[63] = et) : et = eE[63];
            let tg = (0, o.a)(et);
            tg.data?.isWorkspaceOnly != null && (td = tg.data.isWorkspaceOnly ? "workspace" : "public");
            let tp = a_ ?? tg.data ?? null,
                tu = null == eq ? tp : null;
            eE[64] !== e5 || eE[65] !== tu ? (ei = () => {
                null != tu && e5?.(tu)
            }, es = [e5, tu], eE[64] = e5, eE[65] = tu, eE[66] = ei, eE[67] = es) : (ei = eE[66], es = eE[67]), (0, c.useEffect)(ei, es);
            let tm = tp?.shareLinkUrl ?? (to ? aB.share_url : null),
                tf = tt && null == tp && to && aB.current_node_id !== eU,
                tb = "workspace" === td,
                tv = "creating" === aR,
                tw = aM && null != e8 && null == aE,
                tk = tt && aV || tw && aN;
            eE[68] !== tp || eE[69] !== aO || eE[70] !== aD || eE[71] !== aK || eE[72] !== tg.error || eE[73] !== tw || eE[74] !== aq ? (null == (en = aO) && tw && null != aD && (en = "conversation-load-failed"), null == en && aq && null == tp && null != aK && (en = aK instanceof D.a ? "blocked" : "create-failed"), null == en && null == tp && null != tg.error && (en = tg.error instanceof D.a ? "blocked" : "create-failed"), eE[68] = tp, eE[69] = aO, eE[70] = aD, eE[71] = aK, eE[72] = tg.error, eE[73] = tw, eE[74] = aq, eE[75] = en) : en = eE[75];
            let ty = e2.description,
                tx = e2.publicLinkAudience;
            if (a8) {
                let e;
                eE[76] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    ...e2.widgetTitle
                }), eE[76] = e) : e = eE[76], er = e
            } else if (a1) {
                let e;
                eE[77] !== eq ? (e = null != eq ? (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.gifWithPromptTitle",
                    defaultMessage: "Share GIF with prompt",
                    description: "Heading of the generated GIF sharing dialog when GIF with prompt is selected. Shares the animated GIF and its reusable prompt. The other option is GIF only."
                }) : (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.gifTitle",
                    defaultMessage: "Share GIF",
                    description: "Heading of the dialog for sharing one generated animated GIF. Keep GIF as the file format name."
                }), eE[77] = eq, eE[78] = e) : e = eE[78], er = e
            } else if (null != eq) {
                let e;
                eE[79] !== eq.label ? (e = "image_with_prompt" === eq.label ? (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.imageWithPromptTitle",
                    defaultMessage: "Share image with prompt",
                    description: "Heading of the generated-image share dialog when Image with prompt is selected. Users share the generated image together with its reusable prompt so recipients can try the prompt. The other option is Image only."
                }) : (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.imagePromptTitle",
                    defaultMessage: "Share prompt with image",
                    description: "Short heading of the generated-image share dialog when Prompt with image is selected. Users share the generated image and its reusable prompt so recipients can try the prompt. The other option is Image only."
                }), eE[79] = eq.label, eE[80] = e) : e = eE[80], er = e
            } else if (aQ) {
                let e;
                eE[81] !== tr || eE[82] !== eB || eE[83] !== aZ || eE[84] !== a$ ? (e = a$ || null == tr || null != eB ? (0, i.jsx)(h.a, {
                    ...aZ ? e2.imagesTitle : e2.imageTitle
                }) : (0, i.jsx)(i.Fragment, {
                    children: tr
                }), eE[81] = tr, eE[82] = eB, eE[83] = aZ, eE[84] = a$, eE[85] = e) : e = eE[85], er = e
            } else if (a9) {
                let e;
                eE[86] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.poll.title",
                    defaultMessage: "Share poll",
                    description: "Short heading of the dialog for sharing one interactive poll. The user can create or send a link so other people can vote on the poll."
                }), eE[86] = e) : e = eE[86], er = e
            } else if (a7) {
                let e;
                eE[87] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.responseRegionTitle",
                    defaultMessage: "Share",
                    description: "Short heading of the dialog for sharing one selected section of an interactive ChatGPT response."
                }), eE[87] = e) : e = eE[87], er = e
            } else if (a6) {
                let e;
                eE[88] !== tr ? (e = null == tr ? (0, i.jsx)(h.a, {
                    ...e2.messageTitle
                }) : (0, i.jsx)(i.Fragment, {
                    children: tr
                }), eE[88] = tr, eE[89] = e) : e = eE[89], er = e
            } else if (te) {
                let e;
                eE[90] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    ...e2.promptTitle
                }), eE[90] = e) : e = eE[90], er = e
            } else {
                if (ti) {
                    let e;
                    eE[91] !== tr ? (e = null == tr ? void 0 : (0, i.jsx)(i.Fragment, {
                        children: tr
                    }), eE[91] = tr, eE[92] = e) : e = eE[92], er = e
                }
                tb ? ty = e9?.isProjectConversation ? e2.workspaceProjectDescription : e2.workspaceDescription : aB?.is_anonymous === !1 ? ty = e2.attributedDescription : e9?.isProjectConversation && (ty = e2.projectDescription)
            }
            tb && (tx = tn ? e2.workspaceImageRightsAudience : e2.workspaceLinkAudience);
            let t_ = "copied" === aR ? e2.copied : e2.copyLink;
            tf ? t_ = e2.updateLink : null == tm && "copied" !== aR && (t_ = e2.createLink), eE[93] !== af || eE[94] !== aR ? (eo = "copied" === aR ? af.formatMessage(e2.copied) : af.formatMessage(e2.copyLink), eE[93] = af, eE[94] = aR, eE[95] = eo) : eo = eE[95];
            let tT = eo;
            eE[96] !== aw || eE[97] !== af || eE[98] !== ac || eE[99] !== al ? (el = function(e, a) {
                let t;
                "create-failed" === a && (aw(!1), al?.onError?.(e));
                let i = e instanceof D.a ? "blocked" : a;
                switch ("blocked" !== i && M.a.warning("chatgpt_conversation_share_failed", {
                        safe: {
                            stage: i
                        },
                        sensitive: {
                            error: e
                        }
                    }), i) {
                    case "blocked":
                        t = af.formatMessage(e2.shareBlocked);
                        break;
                    case "copy-failed":
                        t = af.formatMessage(e2.shareCopyFailed);
                        break;
                    case "create-failed":
                        t = af.formatMessage(e2.shareCreateFailed)
                }
                return aH(i), aF("idle"), ac.get(y.f).danger(t, {
                    errorAnalytics: {
                        toastId: {
                            "copy-failed": "failed_to_copy_share_link",
                            "create-failed": "failed_to_generate_share_link",
                            blocked: "chatgptConversationShareDialog.shareBlocked"
                        } [i]
                    }
                }), i
            }, eE[96] = aw, eE[97] = af, eE[98] = ac, eE[99] = al, eE[100] = el) : el = eE[100];
            let tC = el;
            eE[101] !== a4 || eE[102] !== aQ || eE[103] !== a6 || eE[104] !== te || eE[105] !== aJ || eE[106] !== a7 || eE[107] !== aa || eE[108] !== aM || eE[109] !== ar ? (ec = aJ ? "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER" : "CHATGPT_SHARE_FLOW_ACTOR_SHARER", eh = aJ ? "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_HEADER" : ar ?? "CHATGPT_SHARE_FLOW_SOURCE_CONVERSATION_MENU", null != aa ? ed = aa.attachmentType : null != a4 ? (ed = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_WIDGET", eh = "CHATGPT_SHARE_FLOW_SOURCE_WIDGET_INLINE_ACTION") : aQ ? (ed = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_IMAGE_SHARE", eh = ar ?? "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION") : a7 ? (ed = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_OTHER", eh = "CHATGPT_SHARE_FLOW_SOURCE_WIDGET_INLINE_ACTION") : a6 ? (eh = "CHATGPT_SHARE_FLOW_SOURCE_MESSAGE_INLINE_ACTION", aM || (ed = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_MESSAGE_SLICE")) : te && (ed = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_PROMPT", eh = ar ?? "CHATGPT_SHARE_FLOW_SOURCE_MESSAGE_INLINE_ACTION"), eE[101] = a4, eE[102] = aQ, eE[103] = a6, eE[104] = te, eE[105] = aJ, eE[106] = a7, eE[107] = aa, eE[108] = aM, eE[109] = ar, eE[110] = ec, eE[111] = ed, eE[112] = eh) : (ec = eE[110], ed = eE[111], eh = eE[112]);
            let tS = (aa?.contentType === "message" || ta) && !aM ? "CHATGPT_SHARE_FLOW_CONTENT_TYPE_POST_SLICE" : "CHATGPT_SHARE_FLOW_CONTENT_TYPE_SHARED_CONVERSATION";
            eE[113] !== tp || eE[114] !== eU || eE[115] !== to || eE[116] !== aB || eE[117] !== aw || eE[118] !== eq || eE[119] !== ax || eE[120] !== tw || eE[121] !== tf || eE[122] !== eQ || eE[123] !== e5 || eE[124] !== ae || eE[125] !== at || eE[126] !== ac || eE[127] !== as || eE[128] !== az || eE[129] !== aM || eE[130] !== ao || eE[131] !== tt || eE[132] !== al ? (eg = async function(e) {
                let a;
                if (null != al && (!ab.current || al.isCurrent?.() === !1)) throw Error("The selected widget is no longer available");
                if (null != at && (!ab.current || at.isCurrent?.() === !1)) throw Error("The selected response region is no longer available");
                if (tw) throw Error("Expanded conversation unavailable");
                let t = tp ?? (to ? {
                    currentNodeId: aB.current_node_id,
                    shareLinkId: aB.share_id,
                    shareLinkUrl: aB.share_url
                } : null);
                if (null == eq && null != t && !tf) return aw(!0), t;
                if (null != eq) a = await eq.createLink(e);
                else if (null != ax) a = await ac.queryClient.fetchQuery(ax), e5?.(a);
                else if (null != al) {
                    if (a = await (0, D.g)(al.attachment, eU), !ab.current || al.isCurrent?.() === !1) throw Error("The selected widget changed while sharing")
                } else if (null != at) {
                    if (a = await (0, D.f)({
                            conversationId: at.attachment.conversation_id,
                            currentNodeId: eU,
                            messageId: at.attachment.message_id,
                            targetId: at.attachment.target_id
                        }), !ab.current || at.isCurrent?.() === !1) throw Error("The selected response region changed while sharing")
                } else a = null == eQ || aM ? null != ae ? await ac.queryClient.fetchQuery({
                    queryFn: () => (0, D.e)({
                        conversationId: as,
                        messageId: ae.messageId
                    }),
                    queryKey: ["chatgpt-prompt-share", as, ae.messageId],
                    staleTime: 1 / 0
                }) : await (0, D.h)({
                    conversationId: as,
                    currentNodeId: eU,
                    existingShareLink: aB,
                    title: ao
                }) : await ac.queryClient.fetchQuery({
                    queryFn: () => (0, D.d)({
                        conversationId: as,
                        currentNodeId: eU,
                        messageIds: eQ
                    }),
                    queryKey: ["chatgpt-message-share", ac.get(u.f), as, eU, eQ],
                    staleTime: 1 / 0
                });
                return aT(a), aw(!0), null != aB && tt && ac.queryClient.setQueryData(az, {
                    ...aB,
                    current_node_id: eU,
                    is_public: !0,
                    is_visible: !0
                }), a
            }, eE[113] = tp, eE[114] = eU, eE[115] = to, eE[116] = aB, eE[117] = aw, eE[118] = eq, eE[119] = ax, eE[120] = tw, eE[121] = tf, eE[122] = eQ, eE[123] = e5, eE[124] = ae, eE[125] = at, eE[126] = ac, eE[127] = as, eE[128] = az, eE[129] = aM, eE[130] = ao, eE[131] = tt, eE[132] = al, eE[133] = eg) : eg = eE[133];
            let tA = eg;
            eE[134] !== ec || eE[135] !== ed || eE[136] !== tS || eE[137] !== tp || eE[138] !== a4?.metadata || eE[139] !== tA || eE[140] !== to || eE[141] !== aB || eE[142] !== eq || eE[143] !== a3 || eE[144] !== aJ || eE[145] !== tf || eE[146] !== tv || eE[147] !== e4 || eE[148] !== tC || eE[149] !== ac || eE[150] !== as || eE[151] !== tm || eE[152] !== aS || eE[153] !== eh || eE[154] !== ti ? (ep = async function() {
                if (tv || a3 || eq?.actionsDisabled) return;
                let e = (0, R.a)(ac, {
                    actor: ec,
                    attachmentType: ed,
                    widgetMetadata: a4?.metadata,
                    contentType: tS,
                    conversationId: aJ ? void 0 : as,
                    shareId: tp?.shareLinkId ?? (to ? aB.share_id : void 0),
                    shareSessionId: aS,
                    source: eh,
                    usedExistingLink: null != tm && !tf
                });
                aH(null), aF("creating");
                let a = null != eq || null == tm || tf ? "create-failed" : "copy-failed",
                    t = tp;
                try {
                    let i, s = tA("copy"),
                        n = (0, C.c)(s.then(eR));
                    null != n && n.catch(eG);
                    let r = await s;
                    t = r, a = "copy-failed";
                    let o = r.shareLinkUrl;
                    if (null == n) i = await (0, C.b)(o);
                    else try {
                        await n, i = !0
                    } catch (e) {
                        M.a.warning("chatgpt_conversation_share_clipboard_write_failed", {
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
                        }), tC(Error("Failed to copy ChatGPT conversation share link"), "copy-failed");
                        return
                    }
                    e({
                        result: "link-copied",
                        shareId: r.shareLinkId
                    }), aF("copied"), ti || ((0, T.a)(ac), e4())
                } catch (s) {
                    let i = tC(s, a);
                    e("create-failed" === i ? {
                        result: i,
                        error: s
                    } : {
                        result: i,
                        shareId: t?.shareLinkId
                    })
                }
            }, eE[134] = ec, eE[135] = ed, eE[136] = tS, eE[137] = tp, eE[138] = a4?.metadata, eE[139] = tA, eE[140] = to, eE[141] = aB, eE[142] = eq, eE[143] = a3, eE[144] = aJ, eE[145] = tf, eE[146] = tv, eE[147] = e4, eE[148] = tC, eE[149] = ac, eE[150] = as, eE[151] = tm, eE[152] = aS, eE[153] = eh, eE[154] = ti, eE[155] = ep) : ep = eE[155];
            let tj = ep;
            eE[156] !== ed || eE[157] !== tS || eE[158] !== tp || eE[159] !== ac || eE[160] !== as || eE[161] !== aS || eE[162] !== aX || eE[163] !== eh ? (eu = function(e) {
                (0, x.a)(ac, n.i, {
                    action: e,
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_SHARER",
                    attachmentType: ed,
                    contentType: tS,
                    conversationId: as,
                    ...aX && null != tp && !tp.isWorkspaceOnly ? {
                        shareId: tp.shareLinkId
                    } : {},
                    shareSessionId: aS,
                    source: eh,
                    sheetType: "CHATGPT_SHARE_FLOW_SHEET_TYPE_CUSTOM"
                })
            }, eE[156] = ed, eE[157] = tS, eE[158] = tp, eE[159] = ac, eE[160] = as, eE[161] = aS, eE[162] = aX, eE[163] = eh, eE[164] = eu) : eu = eE[164];
            let tI = eu;
            eE[165] !== tp || eE[166] !== en || eE[167] !== aw || eE[168] !== ax || eE[169] !== af || eE[170] !== tv || eE[171] !== e4 || eE[172] !== tC || eE[173] !== ac || eE[174] !== as || eE[175] !== td || eE[176] !== aS || eE[177] !== eh ? (em = async function() {
                if (!tv && null != ax && "public" === td && null != tp && "blocked" !== en) {
                    aH(null), aF("creating");
                    try {
                        let e = await (0, W.b)(ac, tp, as, aS, eh);
                        aF("idle"), "shared" === e && (aw(!0), e4()), "failed" === e && ac.get(y.f).danger(af.formatMessage({
                            id: "chatgptConversations.mobileImageShare.nativeFailed",
                            defaultMessage: "Could not open sharing. Try again or copy the link",
                            description: "Error in the mobile image share sheet when the device cannot open native link sharing. The user can retry or use Copy link"
                        }), {
                            errorAnalytics: {
                                toastId: "chatgptConversations.mobileImageShare.nativeFailed"
                            }
                        })
                    } catch (e) {
                        tC(e, "create-failed")
                    }
                }
            }, eE[165] = tp, eE[166] = en, eE[167] = aw, eE[168] = ax, eE[169] = af, eE[170] = tv, eE[171] = e4, eE[172] = tC, eE[173] = ac, eE[174] = as, eE[175] = td, eE[176] = aS, eE[177] = eh, eE[178] = em) : em = eE[178];
            let tM = em;
            eE[179] !== ec || eE[180] !== ed || eE[181] !== tS || eE[182] !== tp || eE[183] !== tr || eE[184] !== a4?.metadata || eE[185] !== tA || eE[186] !== to || eE[187] !== aB || eE[188] !== eq || eE[189] !== a5 || eE[190] !== af || eE[191] !== aQ || eE[192] !== a3 || eE[193] !== te || eE[194] !== aJ || eE[195] !== tf || eE[196] !== tv || eE[197] !== e$?.unsupportedDestinationFallback || eE[198] !== e4 || eE[199] !== tC || eE[200] !== ac || eE[201] !== as || eE[202] !== td || eE[203] !== aR || eE[204] !== aS || eE[205] !== aX || eE[206] !== eh || eE[207] !== a$ ? (ef = async function(e, a) {
                var t;
                let i;
                if (tv || a3 || "public" !== td || eq?.actionsDisabled) return;
                a.preventDefault(), aJ || te || "line" !== (t = e) && "linkedin" !== t && "reddit" !== t && "x" !== t || (0, R.f)(ac, e, aQ ? a5 : void 0);
                let s = aX && aQ ? as : void 0;
                (0, R.e)(ac, {
                    actor: ec,
                    attachmentType: ed,
                    conversationId: s,
                    widgetMetadata: a4?.metadata,
                    contentType: tS,
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
                    shareId: tp?.shareLinkId ?? (to && !tf ? aB.share_id : void 0),
                    shareSessionId: aS,
                    source: eh
                });
                let n = a$ && (0, K.g)(e);
                if (n && e$?.unsupportedDestinationFallback === "app-store") {
                    let t = (0, r.a)() ? "android" : (0, r.c)() || (0, r.b)() ? "ios" : null,
                        i = null == t ? null : (0, K.c)(e, t);
                    if (null != i) return void(0, b.e)({
                        event: a,
                        href: i,
                        initiator: "open_in_browser_bridge",
                        openTarget: "external-browser"
                    })
                }
                let o = null != tp && null == eq || "messages" === e || n ? null : window.open("", "_blank");
                null != o && (o.opener = null), aH(null), aF("creating");
                try {
                    i = await tA("social")
                } catch (e) {
                    o?.close(), e instanceof D.a || (0, R.d)(ac, {
                        actor: ec,
                        attachmentType: ed,
                        conversationId: s,
                        widgetMetadata: a4?.metadata,
                        contentType: tS,
                        shareSessionId: aS,
                        source: eh
                    }), tC(e, "create-failed");
                    return
                }
                if (!0 === i.isWorkspaceOnly) {
                    o?.close(), aF(aR);
                    return
                }
                if (n) {
                    let e = await (0, W.b)(ac, i, as, aS, eh);
                    aF(aR), "shared" === e ? e4() : "failed" === e && ac.get(y.f).danger(af.formatMessage({
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
                    title: i.title ?? tr
                });
                if (null == l) {
                    o?.close(), aF(aR);
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
                }), aF(aR)
            }, eE[179] = ec, eE[180] = ed, eE[181] = tS, eE[182] = tp, eE[183] = tr, eE[184] = a4?.metadata, eE[185] = tA, eE[186] = to, eE[187] = aB, eE[188] = eq, eE[189] = a5, eE[190] = af, eE[191] = aQ, eE[192] = a3, eE[193] = te, eE[194] = aJ, eE[195] = tf, eE[196] = tv, eE[197] = e$?.unsupportedDestinationFallback, eE[198] = e4, eE[199] = tC, eE[200] = ac, eE[201] = as, eE[202] = td, eE[203] = aR, eE[204] = aS, eE[205] = aX, eE[206] = eh, eE[207] = a$, eE[208] = ef) : ef = eE[208];
            let tL = ef;
            eE[209] !== ez || eE[210] !== a5 || eE[211] !== af || eE[212] !== aW || eE[213] !== aZ || eE[214] !== a3 || eE[215] !== tI || eE[216] !== ac || eE[217] !== as ? (eb = async function() {
                if (null == ez || aW || a3) return;
                (0, R.f)(ac, "download", a5);
                let e = [ez.item, ...ez.additionalImages ?? []].filter(eN);
                0 !== e.length && ((0, U.b)(ac, {
                    image: ez.downloadAnalyticsImage ?? ez.item,
                    conversationId: as,
                    entryPoint: "CHATGPT_IMAGE_DOWNLOAD_ENTRY_POINT_CUSTOM_SHARE_SHEET",
                    downloadScope: aZ ? "CHATGPT_IMAGE_DOWNLOAD_SCOPE_SERIES" : "CHATGPT_IMAGE_DOWNLOAD_SCOPE_SINGLE",
                    requestedImageCount: e.length,
                    isParagen: ez.downloadIsParagen
                }), aU(!0), tI("CHATGPT_SHARE_FLOW_ACTION_DOWNLOAD_SELECTED"), await (0, O.a)(ac, {
                    images: e,
                    intl: af,
                    serverConversationId: (0, F.c)(as),
                    logIndividualDownloads: !1
                }).then(e => {
                    "downloaded" === e && (0, U.e)(ac, as, ez.item)
                }).finally(() => {
                    aU(!1)
                }))
            }, eE[209] = ez, eE[210] = a5, eE[211] = af, eE[212] = aW, eE[213] = aZ, eE[214] = a3, eE[215] = tI, eE[216] = ac, eE[217] = as, eE[218] = eb) : eb = eE[218];
            let tP = eb;
            eE[219] !== ez?.additionalImages?.length || eE[220] !== aZ ? (ev = aZ ? (0, i.jsx)(h.a, {
                id: "chatgptConversations.shareDialog.imageSeriesCount",
                defaultMessage: "Sharing {imageCount} images together",
                description: "Subtitle beneath the generated-image share modal title after choosing to share a series. imageCount is the number of images included in the link, always greater than one. This informs the user that all listed images are shared together.",
                values: {
                    imageCount: 1 + (ez?.additionalImages?.length ?? 0)
                }
            }) : void 0, eE[219] = ez?.additionalImages?.length, eE[220] = aZ, eE[221] = ev) : ev = eE[221];
            let tE = ev,
                tD = tE;
            if (!aZ && !ti) {
                let e;
                eE[222] !== ty ? (e = (0, i.jsx)(h.a, {
                    ...ty
                }), eE[222] = ty, eE[223] = e) : e = eE[223], tD = e
            }
            if (null != eq) {
                let e;
                eE[224] !== a$ ? (e = a$ ? (0, i.jsx)(h.a, {
                    id: "imagePromptShare.audience",
                    defaultMessage: "Anyone with the link can try this prompt",
                    description: "Audience description when sharing a generated image as a reusable prompt template"
                }) : void 0, eE[224] = a$, eE[225] = e) : e = eE[225], tD = e
            } else if (a$) {
                let e, a, t;
                eE[226] !== td ? (e = "public" === td ? (0, i.jsx)(h.a, {
                    id: "chatgptConversations.mobileImageShare.publicAudience",
                    defaultMessage: "Anyone with the link can view",
                    description: "Audience disclosure in the mobile generated-image share sheet for a public link"
                }) : null, eE[226] = td, eE[227] = e) : e = eE[227], eE[228] !== td ? (a = "public" !== td && (0, i.jsx)(h.a, {
                    id: "chatgptConversations.mobileImageShare.workspaceAudience",
                    defaultMessage: "Only workspace members with the link can view",
                    description: "Audience disclosure below Share image in the mobile image share sheet for a workspace account"
                }), eE[228] = td, eE[229] = a) : a = eE[229], eE[230] !== e || eE[231] !== a ? (t = (0, i.jsxs)(i.Fragment, {
                    children: [e, a]
                }), eE[230] = e, eE[231] = a, eE[232] = t) : t = eE[232], tD = t
            }
            if (a$ ? ew = "responsiveSheet" : ti && (ew = "share"), a$ && (ek = e$?.layout === "two-rows" ? "imageSheetTwoRows" : "imageSheet"), null != eq) {
                let e;
                if (eE[233] !== ez?.previewSrc || eE[234] !== eq || eE[235] !== tv || eE[236] !== a0) {
                    let a;
                    eE[238] === Symbol.for("react.memo_cache_sentinel") ? (a = () => {
                        aH(null), aF("idle")
                    }, eE[238] = a) : a = eE[238], e = eq.preview(tv, ez?.previewSrc ?? a0 ?? null, a), eE[233] = ez?.previewSrc, eE[234] = eq, eE[235] = tv, eE[236] = a0, eE[237] = e
                } else e = eE[237];
                ey = e
            } else {
                let e;
                eE[239] !== a4 || eE[240] !== aE || eE[241] !== aL || eE[242] !== ez || eE[243] !== ek || eE[244] !== af || eE[245] !== a2 || eE[246] !== aZ || eE[247] !== a8 || eE[248] !== e8 || eE[249] !== e7 || eE[250] !== ae || eE[251] !== a0 || eE[252] !== ai || eE[253] !== at || eE[254] !== ac.queryClient || eE[255] !== as || eE[256] !== aS || eE[257] !== aM || eE[258] !== a$ ? (e = null != ez ? (0, i.jsx)(A.a, {
                    ariaLabel: aZ ? af.formatMessage(e2.imagesPreview) : ez.alt,
                    expandedContent: (0, i.jsxs)("div", {
                        className: "flex flex-col gap-4",
                        children: [(0, i.jsx)(eZ, {
                            src: aZ ? a0 : ez.previewSrc ?? a0,
                            isLoading: a2,
                            alt: ez.alt
                        }), ez.additionalPublishedPreviewUrls?.map(eD), ez.additionalImages?.map(e => (0, i.jsx)(eJ, {
                            item: e,
                            serverConversationId: as
                        }, e.id))]
                    }),
                    variant: "image",
                    classicImagePreviewEligible: !aZ && !a$,
                    presentation: ek,
                    children: aZ || null == ez.previewSrc ? (0, i.jsx)(eZ, {
                        src: a0,
                        isLoading: a2
                    }) : (0, i.jsx)("img", {
                        alt: ez.alt,
                        className: a$ ? void 0 : "block size-full object-contain",
                        referrerPolicy: "no-referrer",
                        src: ez.previewSrc
                    })
                }) : (0, i.jsxs)(i.Fragment, {
                    children: [at?.preview != null && (0, i.jsx)(A.a, {
                        ariaLabel: af.formatMessage({
                            id: "chatgptConversations.shareDialog.responseRegionPreviewLabel",
                            defaultMessage: "Preview of the shared content",
                            description: "Accessible description of the selected interactive-response section shown in the response-region sharing dialog."
                        }),
                        expandedContent: at.preview,
                        variant: "response",
                        children: at.preview
                    }), null == at && a4?.preview != null && a8 && (0, i.jsx)(A.a, {
                        ariaLabel: af.formatMessage({
                            id: "shareDialog.widget.previewLabel",
                            defaultMessage: "Preview of the shared widget",
                            description: "Accessible description of the non-interactive selected-widget preview in a ChatGPT widget sharing dialog."
                        }),
                        expandedContent: a4.preview,
                        variant: "response",
                        children: a4.preview
                    }), null == at && a4?.preview != null && !a8 && (0, i.jsx)(A.a, {
                        expandedContent: a4.preview,
                        variant: "response",
                        children: a4.preview
                    }), null == at && null == a4 && (0, i.jsx)(N.b, {
                        prompt: ae,
                        response: aM ? void 0 : ai,
                        serverConversationId: as,
                        expandedHistory: (null == ai || aM) && null != e8 && null == aE ? {
                            load: async e => (await ac.queryClient.fetchQuery({
                                queryKey: aL,
                                queryFn: () => e8(e),
                                staleTime: 1 / 0
                            })).turns,
                            sessionId: aS
                        } : void 0,
                        turns: null == ai || aM ? aE?.turns ?? e7 : void 0
                    })]
                }), eE[239] = a4, eE[240] = aE, eE[241] = aL, eE[242] = ez, eE[243] = ek, eE[244] = af, eE[245] = a2, eE[246] = aZ, eE[247] = a8, eE[248] = e8, eE[249] = e7, eE[250] = ae, eE[251] = a0, eE[252] = ai, eE[253] = at, eE[254] = ac.queryClient, eE[255] = as, eE[256] = aS, eE[257] = aM, eE[258] = a$, eE[259] = e) : e = eE[259], ey = e
            }
            if (a$) {
                let e, a, t;
                eE[260] !== eq || eE[261] !== ey ? (e = null == eq ? ey : (0, i.jsx)("div", {
                    className: "px-6",
                    children: ey
                }), eE[260] = eq, eE[261] = ey, eE[262] = e) : e = eE[262], eE[263] !== tE ? (a = null != tE && (0, i.jsx)("p", {
                    className: "mt-3 text-center text-sm text-secondary",
                    children: tE
                }), eE[263] = tE, eE[264] = a) : a = eE[264], eE[265] !== e || eE[266] !== a ? (t = (0, i.jsxs)(i.Fragment, {
                    children: [e, a]
                }), eE[265] = e, eE[266] = a, eE[267] = t) : t = eE[267], ey = t
            }
            eE[268] !== tx || eE[269] !== ti ? (ex = ti ? void 0 : (0, i.jsx)(h.a, {
                ...tx
            }), eE[268] = tx, eE[269] = ti, eE[270] = ex) : ex = eE[270], eE[271] !== t_ ? (e_ = (0, i.jsx)(h.a, {
                ...t_
            }), eE[271] = t_, eE[272] = e_) : e_ = eE[272];
            let tN = eq?.actionsDisabled || tk || tw || a3 || "blocked" === en,
                tG = tv || tk || ah,
                tR = !ti && tv;
            eE[273] !== tI || eE[274] !== aX || eE[275] !== ti ? (eT = ti ? e => {
                aX && tI("CHATGPT_SHARE_FLOW_ACTION_SHEET_PRESENTED"), e.preventDefault(), e.currentTarget instanceof HTMLElement && e.currentTarget.focus()
            } : void 0, eE[273] = tI, eE[274] = aX, eE[275] = ti, eE[276] = eT) : eT = eE[276];
            let tF = a$ ? "imageSheet" : void 0,
                tO = a$ && e$?.layout === "two-rows";
            eE[277] !== am || eE[278] !== ap || eE[279] !== au || eE[280] !== tp || eE[281] !== eU || eE[282] !== en || eE[283] !== a4 || eE[284] !== tP || eE[285] !== tM || eE[286] !== tL || eE[287] !== ez || eE[288] !== eq?.actionsDisabled || eE[289] !== a5 || eE[290] !== aW || eE[291] !== tw || eE[292] !== tk || eE[293] !== aQ || eE[294] !== a3 || eE[295] !== ah || eE[296] !== te || eE[297] !== aJ || eE[298] !== tv || eE[299] !== eQ || eE[300] !== e$ || eE[301] !== eX || eE[302] !== e4 || eE[303] !== ae || eE[304] !== aa || eE[305] !== tT || eE[306] !== a0 || eE[307] !== at || eE[308] !== ac || eE[309] !== as || eE[310] !== td || eE[311] !== aM || eE[312] !== tt || eE[313] !== a$ || eE[314] !== ti || eE[315] !== al ? (eC = ti ? (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(eI, {
                    projectStyleEligible: !aJ && null == ae && null == a4 && null == at && (aQ || null != eQ && !aM),
                    mobileImageActions: a$ && null != e$ ? {
                        experience: e$,
                        canNativeShare: "public" === td && null != tp && (0, W.a)(tp?.shareLinkUrl),
                        onNativeShare: () => {
                            tM()
                        },
                        rowScrollPositions: eX
                    } : void 0,
                    copyLabel: tT,
                    copyDisabled: eq?.actionsDisabled || tk || tw || tv || a3 || "blocked" === en,
                    isBusy: tv || tk || ah,
                    isDownloading: aW,
                    socialDestinationsDisabled: eq?.actionsDisabled || tk || tw || tv || a3 || "public" !== td || "blocked" === en,
                    showSocialDestinations: "public" === td,
                    additionalActions: void 0,
                    onDownload: null == ez || a3 ? void 0 : () => {
                        tP()
                    },
                    onCopy: () => {
                        aJ || te || (0, R.f)(ac, "copy", aQ ? a5 : void 0)
                    },
                    onSocialShare: (e, a) => {
                        tL(e, a)
                    }
                })
            }) : void 0, eE[277] = am, eE[278] = ap, eE[279] = au, eE[280] = tp, eE[281] = eU, eE[282] = en, eE[283] = a4, eE[284] = tP, eE[285] = tM, eE[286] = tL, eE[287] = ez, eE[288] = eq?.actionsDisabled, eE[289] = a5, eE[290] = aW, eE[291] = tw, eE[292] = tk, eE[293] = aQ, eE[294] = a3, eE[295] = ah, eE[296] = te, eE[297] = aJ, eE[298] = tv, eE[299] = eQ, eE[300] = e$, eE[301] = eX, eE[302] = e4, eE[303] = ae, eE[304] = aa, eE[305] = tT, eE[306] = a0, eE[307] = at, eE[308] = ac, eE[309] = as, eE[310] = td, eE[311] = aM, eE[312] = tt, eE[313] = a$, eE[314] = ti, eE[315] = al, eE[316] = eC) : eC = eE[316], eE[317] !== aI || eE[318] !== eB || eE[319] !== af || eE[320] !== tk || eE[321] !== a9 || eE[322] !== tv || eE[323] !== aA || eE[324] !== ts || eE[325] !== td || eE[326] !== tn || eE[327] !== a$ || eE[328] !== ti ? (eS = ti ? (0, i.jsxs)(i.Fragment, {
                children: [aI && (0, i.jsx)(f.e, {
                    className: "pt-5",
                    children: (0, i.jsx)("div", {
                        className: "mx-auto w-80 max-w-full",
                        children: (0, i.jsx)(w.a, {
                            ariaLabel: af.formatMessage({
                                id: "chatgptConversations.shareDialog.messageScope.label",
                                defaultMessage: "Content to share",
                                description: "Accessible label for choosing whether a ChatGPT response sharing dialog shares one response or the entire conversation."
                            }),
                            buttonClassName: "z-20",
                            fullWidth: !0,
                            onSelect: e => {
                                e !== aA && (aj(e), aT(null), aH(null), aF("idle"))
                            },
                            options: [{
                                id: "message",
                                disabled: tv || tk,
                                label: (0, i.jsx)(h.a, {
                                    id: "chatgptConversations.shareDialog.messageScope.response",
                                    defaultMessage: "This response",
                                    description: "Share-scope option in a ChatGPT response sharing dialog. Shares only the selected assistant response. The other option is Entire conversation."
                                })
                            }, {
                                id: "conversation",
                                disabled: tv || tk,
                                label: (0, i.jsx)(h.a, {
                                    id: "chatgptConversations.shareDialog.messageScope.conversation",
                                    defaultMessage: "Entire conversation",
                                    description: "Share-scope option in a ChatGPT response sharing dialog. Shares the full chat through the selected response. The other option is This response."
                                })
                            }],
                            selectedId: aA,
                            variant: "form",
                            wrapLabels: !0
                        })
                    })
                }), null != eB && (a$ ? (0, i.jsx)("div", {
                    className: "px-6 pt-3",
                    children: eB(tv)
                }) : (0, i.jsx)(f.e, {
                    className: "pt-5",
                    children: eB(tv)
                })), !a$ && (0, i.jsx)(eW, {
                    audience: td,
                    contentType: ts,
                    isPoll: a9,
                    showImageRightsNotice: tn
                })]
            }) : void 0, eE[317] = aI, eE[318] = eB, eE[319] = af, eE[320] = tk, eE[321] = a9, eE[322] = tv, eE[323] = aA, eE[324] = ts, eE[325] = td, eE[326] = tn, eE[327] = a$, eE[328] = ti, eE[329] = eS) : eS = eE[329], eE[330] !== en || eE[331] !== eq || eE[332] !== aG || eE[333] !== tm ? (eA = null == en ? void 0 : {
                content: (0, i.jsx)(e0, {
                    error: en
                }),
                copyUrl: "copy-failed" === en ? tm : void 0,
                onRetry: "conversation-load-failed" === en ? () => {
                    aG()
                } : void 0,
                preventsSharing: "blocked" === en && null == eq || "conversation-load-failed" === en
            }, eE[330] = en, eE[331] = eq, eE[332] = aG, eE[333] = tm, eE[334] = eA) : eA = eE[334];
            let tH = tn && !tb && !aQ,
                tW = !ta || a6;
            return eE[335] !== J || eE[336] !== tH || eE[337] !== tW ? (ej = (0, i.jsx)(e1, {
                showImageRightsNotice: tH,
                showContentNotices: tW,
                privacyNotices: J
            }), eE[335] = J, eE[336] = tH, eE[337] = tW, eE[338] = ej) : ej = eE[338], eE[339] !== ak || eE[340] !== tI || eE[341] !== aX ? (eM = () => {
                aX && tI("CHATGPT_SHARE_FLOW_ACTION_DISMISSED"), ak()
            }, eE[339] = ak, eE[340] = tI, eE[341] = aX, eE[342] = eM) : eM = eE[342], eE[343] !== tj ? (eL = () => {
                tj()
            }, eE[343] = tj, eE[344] = eL) : eL = eE[344], eE[345] !== ew || eE[346] !== er || eE[347] !== tr || eE[348] !== ey || eE[349] !== tD || eE[350] !== ex || eE[351] !== e_ || eE[352] !== tN || eE[353] !== tG || eE[354] !== tR || eE[355] !== eT || eE[356] !== tF || eE[357] !== tO || eE[358] !== eC || eE[359] !== eS || eE[360] !== eA || eE[361] !== ej || eE[362] !== eM || eE[363] !== eL ? (eP = (0, i.jsx)(S.a, {
                threadTitle: tr,
                title: er,
                subtitle: tD,
                audience: ex,
                actionLabel: e_,
                actionDisabled: tN,
                isBusy: tG,
                isDismissalDisabled: tR,
                onOpenAutoFocus: eT,
                size: ew,
                presentation: tF,
                compactImageSheetFooter: tO,
                footer: eC,
                preview: ey,
                info: eS,
                error: eA,
                notices: ej,
                onClose: eM,
                onSubmit: eL
            }), eE[345] = ew, eE[346] = er, eE[347] = tr, eE[348] = ey, eE[349] = tD, eE[350] = ex, eE[351] = e_, eE[352] = tN, eE[353] = tG, eE[354] = tR, eE[355] = eT, eE[356] = tF, eE[357] = tO, eE[358] = eC, eE[359] = eS, eE[360] = eA, eE[361] = ej, eE[362] = eM, eE[363] = eL, eE[364] = eP) : eP = eE[364], eP
        }

        function eD(e) {
            return (0, i.jsx)(eZ, {
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
            return P.CodexRequest.safeGet("/wham/accounts/check")
        }

        function eH() {
            return crypto.randomUUID()
        }

        function eW(e) {
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
                            learnMore: eX
                        }
                    }), d[0] = p, d[1] = a) : a = d[1], e = a
                } else if ("conversation" === p) {
                    let a;
                    d[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, i.jsx)(h.a, {
                        id: "chatgptConversations.shareDialog.workspaceConversationMemoryDisclosure",
                        defaultMessage: "Links are visible to workspace members only. Memory sources won't be shared with viewers. <learnMore>Learn more</learnMore>",
                        description: "Audience and privacy explanation in the merged-web workspace conversation sharing dialog. Shared links are restricted to workspace members and do not give viewers access to underlying Memory sources. The learnMore tag links to shared-links help.",
                        values: {
                            learnMore: e$
                        }
                    }), d[2] = a) : a = d[2], e = a
                } else {
                    let a;
                    d[3] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, i.jsx)(h.a, {
                        ...e2.workspaceLinksVisibleWithLearnMore,
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
                        ...e2.shareLinkToWidget
                    }), d[6] = e) : e = d[6], a = e
                } else if ("images" === p) {
                    let e;
                    d[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e2.shareLinkToImages
                    }), d[7] = e) : e = d[7], a = e
                } else if ("gif" === p) {
                    let e;
                    d[8] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e2.shareLinkToGif
                    }), d[8] = e) : e = d[8], a = e
                } else if ("image" === p) {
                    let e;
                    d[9] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e2.shareLinkToImage
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
                        ...e2.shareLinkToMessage
                    }), d[11] = e) : e = d[11], a = e
                } else if ("prompt" === p) {
                    let e;
                    d[12] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e2.shareLinkToPrompt
                    }), d[12] = e) : e = d[12], a = e
                } else {
                    let e;
                    d[13] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e2.shareLinkToConversation
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
                        ...e2.imageLicenseDisclaimer
                    }), d[16] = e) : e = d[16], t = e
                }
                if ("widget" === p) {
                    let e;
                    d[17] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e2.shareLinkToWidget
                    }), d[17] = e) : e = d[17], a = e
                } else if ("images" === p) {
                    let e;
                    d[18] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e2.shareLinkToImages
                    }), d[18] = e) : e = d[18], a = e
                } else if ("gif" === p) {
                    let e;
                    d[19] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e2.shareLinkToGif
                    }), d[19] = e) : e = d[19], a = e
                } else if ("image" === p) {
                    let e;
                    d[20] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e2.shareLinkToImage
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
                        ...e2.shareLinkToMessage
                    }), d[22] = e) : e = d[22], a = e
                } else if ("prompt" === p) {
                    let e;
                    d[23] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e2.shareLinkToPrompt
                    }), d[23] = e) : e = d[23], a = e
                } else {
                    let e;
                    d[24] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e2.shareLinkToConversation
                    }), d[24] = e) : e = d[24], a = e
                }
            } else if ("widget" === p) {
                let e, s;
                d[25] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    ...e2.sharePublicLinkToWidget
                }), d[25] = e) : e = d[25], a = e, d[26] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(h.a, {
                            id: "chatgptConversations.widgetShare.publicAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access this widget. <learnMore>Learn more</learnMore>",
                            description: "Audience explanation when sharing a generated Recharts widget. The learnMore tag links to shared-links help in merged web.",
                            values: {
                                learnMore: eY
                            }
                        })
                    }), null]
                }), d[26] = s) : s = d[26], t = s
            } else if ("images" === p) {
                let e, s;
                d[27] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    ...e2.sharePublicLinkToImages
                }), d[27] = e) : e = d[27], a = e, d[28] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(h.a, {
                            id: "chatgptConversations.shareDialog.imagesPublicLinkAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access these images. Confirm you have the rights to share these images. <learnMore>Learn more</learnMore>",
                            description: "Audience and legal-permission reminder when sharing all images from one generation. Anyone with the link can view the images; the user must have permission to share them. The learnMore tag links to shared-links help in merged web. All sentences appear in one paragraph.",
                            values: {
                                learnMore: eV
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
                        learnMore: eK
                    }
                }), d[30] = s) : s = d[30], t = s
            } else if ("image" === p) {
                let e, s;
                d[31] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    ...e2.sharePublicLinkToImage
                }), d[31] = e) : e = d[31], a = e, d[32] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(h.a, {
                            id: "chatgptConversations.shareDialog.imagePublicLinkAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access this image. Confirm you have the rights to share this image. <learnMore>Learn more</learnMore>",
                            description: "Audience and legal-permission reminder when sharing an image. Anyone with the link can view the image; the user must have permission to share it. The learnMore tag links to shared-links help in merged web. All sentences appear in one paragraph.",
                            values: {
                                learnMore: eB
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
                    ...e2.sharePublicLinkToMessage
                }), d[35] = u, d[36] = e) : e = d[36], a = e, d[37] !== u ? (s = (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(i.Fragment, {
                        children: u ? (0, i.jsx)(h.a, {
                            id: "chatgptConversations.shareDialog.poll.publicAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access and vote on this poll. <learnMore>Learn more</learnMore>",
                            description: "Explanation below a public poll link preview in the web sharing dialog. Tells the person sharing that link recipients can open the poll and vote. The learnMore tag links to shared-links help.",
                            values: {
                                learnMore: eq
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
                                learnMore: eU
                            }
                        })
                    }), null]
                }), d[40] = s) : s = d[40], t = s
            } else {
                let e, s;
                d[41] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    ...e2.sharePublicLinkToConversation
                }), d[41] = e) : e = d[41], a = e, d[42] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsx)(q, {
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
                    children: (0, i.jsx)(q, {})
                })
            }) : null, d[51] = g, d[52] = p, d[53] = l) : l = d[53], d[54] !== r || d[55] !== o || d[56] !== l ? (c = (0, i.jsx)(f.e, {
                spacing: "large",
                children: (0, i.jsxs)("div", {
                    className: "w-full text-start select-none",
                    children: [r, o, l]
                })
            }), d[54] = r, d[55] = o, d[56] = l, d[57] = c) : c = d[57], c
        }

        function eU(e) {
            return (0, i.jsx)(B, {
                children: e
            })
        }

        function ez(e) {
            return (0, i.jsx)(B, {
                children: e
            })
        }

        function eq(e) {
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
            }, "learn-more")
        }

        function eQ(e) {
            return (0, i.jsx)(B, {
                children: e
            })
        }

        function e$(e) {
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
            let a, t, n = (0, s.c)(5),
                {
                    item: r,
                    serverConversationId: o
                } = e;
            n[0] !== o ? (a = (0, E.c)((0, F.c)(o)), n[0] = o, n[1] = a) : a = n[1];
            let {
                src: l,
                isLoading: c
            } = (0, I.k)(r.src ?? "", a);
            return n[2] !== c || n[3] !== l ? (t = (0, i.jsx)(eZ, {
                src: l,
                isLoading: c
            }), n[2] = c, n[3] = l, n[4] = t) : t = n[4], t
        }

        function eZ(e) {
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
                    ...e2.imageUnavailable
                })
            }), t[3] = o, t[4] = a) : a = t[4], a
        }

        function e1(e) {
            let a, t, n, r, o, l = (0, s.c)(16),
                {
                    showImageRightsNotice: c,
                    showContentNotices: d,
                    privacyNotices: g
                } = e;
            return l[0] !== g?.hasUnsupportedCodeInterpreterContent || l[1] !== d ? (a = d && g?.hasUnsupportedCodeInterpreterContent ? (0, i.jsx)(f.e, {
                children: (0, i.jsx)(m.a, {
                    content: (0, i.jsx)(h.a, {
                        ...e2.filesNotShared
                    }),
                    variant: "privacyNotice"
                })
            }) : null, l[0] = g?.hasUnsupportedCodeInterpreterContent, l[1] = d, l[2] = a) : a = l[2], l[3] !== g?.hasPersonalizedSources || l[4] !== d ? (t = d && g?.hasPersonalizedSources ? (0, i.jsx)(f.e, {
                children: (0, i.jsx)(m.a, {
                    content: (0, i.jsx)(h.a, {
                        ...e2.personalizedSourcesPrivate
                    }),
                    variant: "privacyNotice"
                })
            }) : null, l[3] = g?.hasPersonalizedSources, l[4] = d, l[5] = t) : t = l[5], l[6] !== g?.hasScreenshotReference || l[7] !== d ? (n = d && g?.hasScreenshotReference ? (0, i.jsx)(f.e, {
                children: (0, i.jsx)(m.a, {
                    content: (0, i.jsx)(h.a, {
                        ...e2.screenshotDisclaimer
                    }),
                    variant: "privacyNotice"
                })
            }) : null, l[6] = g?.hasScreenshotReference, l[7] = d, l[8] = n) : n = l[8], l[9] !== c ? (r = c ? (0, i.jsx)(f.e, {
                children: (0, i.jsx)("p", {
                    className: "text-sm text-secondary select-none",
                    children: (0, i.jsx)(h.a, {
                        ...e2.imageLicenseDisclaimer
                    })
                })
            }) : null, l[9] = c, l[10] = r) : r = l[10], l[11] !== a || l[12] !== t || l[13] !== n || l[14] !== r ? (o = (0, i.jsxs)(i.Fragment, {
                children: [a, t, n, r]
            }), l[11] = a, l[12] = t, l[13] = n, l[14] = r, l[15] = o) : o = l[15], o
        }

        function e0(e) {
            let a = (0, s.c)(4),
                {
                    error: t
                } = e;
            switch (t) {
                case "blocked": {
                    let e;
                    return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e2.shareBlocked
                    }), a[0] = e) : e = a[0], e
                }
                case "conversation-load-failed": {
                    let e;
                    return a[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e2.shareConversationLoadFailed
                    }), a[1] = e) : e = a[1], e
                }
                case "copy-failed": {
                    let e;
                    return a[2] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e2.shareCopyFailed
                    }), a[2] = e) : e = a[2], e
                }
                case "create-failed": {
                    let e;
                    return a[3] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e2.shareCreateFailed
                    }), a[3] = e) : e = a[3], e
                }
            }
        }
        let e2 = (0, g.f)({
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
    Y7np: (function(e, a, t) {
        t.d(a, {
            a: () => B,
            b: () => W
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
            u = t("Bbed"),
            m = t("RNul"),
            f = t("jHtb"),
            b = t("A9Yt"),
            v = t("aPiu"),
            w = t("NddG"),
            k = t("RUBg"),
            y = t("zSQm"),
            x = t("ZjkF"),
            _ = t("WAdu"),
            T = t("TxRk"),
            C = t("ABl9"),
            S = t("vLpE"),
            A = t("kfGJ"),
            j = t("qKAH"),
            I = t("zHp1"),
            M = t("HAEQ"),
            L = t("dMLa"),
            P = t("taWv"),
            E = t("Zm8H"),
            D = t("OOaz"),
            N = t("TUMj"),
            G = t("drbS"),
            R = t("jAnS");
        let F = (0, u.a)(async () => (await Promise.all([t.e(418851), t.e(109308), t.e(399565), t.e(257798), t.e(153380), t.e(617936), t.e(807489), t.e(337882), t.e(955979), t.e(646436), t.e(7078), t.e(200429), t.e(698524), t.e(956483), t.e(87162), t.e(396705), t.e(155568), t.e(731863), t.e(767086), t.e(76629), t.e(514085), t.e(204542), t.e(982651), t.e(673108), t.e(487481), t.e(229522), t.e(390575), t.e(353032), t.e(637885), t.e(851456), t.e(882323), t.e(645189), t.e(329156), t.e(829555), t.e(63583), t.e(720436), t.e(613745)]).then(t.bind(t, "IQg5"))).WritingBlockDirectiveRenderer, M.a),
            O = {
                [n.a]: function(e) {
                    let a, t = (0, s.c)(3),
                        n = (0, N.d)(),
                        r = n?.contentReferences;
                    return t[0] !== e || t[1] !== r ? (a = (0, i.jsx)(F, {
                        ...e,
                        contentReferences: r,
                        isStreaming: !1,
                        testId: "chatgpt-writing-block"
                    }), t[0] = e, t[1] = r, t[2] = a) : a = t[2], a
                }
            },
            H = (0, k.c)({
                conversationId: null,
                externalResourcePolicy: "restricted",
                isBrowserEnabled: !1,
                openFileLinksInSidePanel: !1
            });

        function W(e) {
            let a, t, n, r, l, d, h, g = (0, s.c)(40),
                {
                    expandedHistory: p,
                    prompt: u,
                    response: m,
                    serverConversationId: f,
                    turns: b
                } = e,
                v = "restricted" !== (0, c.useContext)(_.a);
            if (g[0] !== u || g[1] !== v || g[2] !== m || g[3] !== f || g[4] !== b) {
                let e = b?.slice(0, 4);
                if (t = null != m, n = "default", null != u) {
                    let e;
                    g[8] !== u.renderMarkdown || g[9] !== u.text ? (e = (0, i.jsx)(Y, {
                        renderMarkdown: u.renderMarkdown,
                        text: u.text
                    }), g[8] = u.renderMarkdown, g[9] = u.text, g[10] = e) : e = g[10], a = e
                } else if (null != m) {
                    let e, t;
                    n = "response", g[11] !== f ? (e = (0, D.c)(f), g[11] = f, g[12] = e) : e = g[12];
                    let s = v ? "share" : void 0;
                    g[13] !== m || g[14] !== e || g[15] !== s ? (t = (0, i.jsx)(L.a, {
                        conversationId: e,
                        cwd: null,
                        hostId: A.a,
                        item: m,
                        isReadOnly: !0,
                        preview: s,
                        trackShownImpressions: !1,
                        turnId: "share-preview"
                    }), g[13] = m, g[14] = e, g[15] = s, g[16] = t) : t = g[16], a = t
                } else e?.some(U) && (n = "transcript"), a = null == e ? null : (0, i.jsx)(V, {
                    preview: v ? "share" : void 0,
                    serverConversationId: f,
                    turns: e
                });
                g[0] = u, g[1] = v, g[2] = m, g[3] = f, g[4] = b, g[5] = a, g[6] = t, g[7] = n
            } else a = g[5], t = g[6], n = g[7];
            g[17] !== t || g[18] !== f ? (r = function(e) {
                return (0, i.jsx)(K, {
                    serverConversationId: f,
                    children: (0, i.jsx)("div", {
                        className: (0, o.b)("flex min-w-0 flex-col gap-4", t ? "responseTypography-A7UvAY" : "p-4"),
                        children: e
                    })
                })
            }, g[17] = t, g[18] = f, g[19] = r) : r = g[19];
            let w = r,
                k = a;
            if (null != p) {
                let e, a = v ? "share" : void 0;
                g[20] !== p || g[21] !== f || g[22] !== a ? (e = (0, i.jsx)(q, {
                    history: p,
                    preview: a,
                    serverConversationId: f
                }), g[20] = p, g[21] = f, g[22] = a, g[23] = e) : e = g[23], k = e
            } else if (null == u && null == m && null != b) {
                let e, a = v ? "share" : void 0;
                g[24] !== f || g[25] !== a || g[26] !== b ? (e = (0, i.jsx)(V, {
                    preview: a,
                    serverConversationId: f,
                    turns: b
                }), g[24] = f, g[25] = a, g[26] = b, g[27] = e) : e = g[27], k = e
            }
            g[28] !== k || g[29] !== u || g[30] !== w ? (l = null == u ? w(k) : void 0, g[28] = k, g[29] = u, g[30] = w, g[31] = l) : l = g[31];
            let y = null == u && null == m && null == b,
                x = n;
            return g[32] !== a || g[33] !== w ? (d = w(a), g[32] = a, g[33] = w, g[34] = d) : d = g[34], g[35] !== l || g[36] !== y || g[37] !== d || g[38] !== n ? (h = (0, i.jsx)(j.a, {
                expandedContent: l,
                isLoading: y,
                variant: x,
                children: d
            }), g[35] = l, g[36] = y, g[37] = d, g[38] = n, g[39] = h) : h = g[39], h
        }

        function U(e) {
            let {
                turn: a
            } = e;
            return a.items.some(z)
        }

        function z(e) {
            return "generated-image" === e.type
        }

        function q(e) {
            let a, t, n, o, l = (0, s.c)(13),
                {
                    history: c,
                    preview: h,
                    serverConversationId: g
                } = e;
            l[0] !== c.sessionId ? (a = ["expanded-share-history", c.sessionId], l[0] = c.sessionId, l[1] = a) : a = l[1], l[2] !== c ? (t = e => {
                let {
                    signal: a
                } = e;
                return c.load(a)
            }, l[2] = c, l[3] = t) : t = l[3], l[4] !== a || l[5] !== t ? (n = {
                queryKey: a,
                queryFn: t,
                staleTime: 1 / 0,
                gcTime: 0,
                retry: !1
            }, l[4] = a, l[5] = t, l[6] = n) : n = l[6];
            let {
                data: p,
                isError: u
            } = (0, r.a)(n);
            if (u) {
                let e;
                return l[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(d.a, {
                    id: "shareDialog.preview.historyUnavailable",
                    defaultMessage: "Couldn’t load the full preview",
                    description: "Error shown when the expanded conversation sharing preview cannot load all selected turns."
                }), l[7] = e) : e = l[7], e
            }
            if (null == p) {
                let e;
                return l[8] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(m.a, {
                    className: "icon-sm"
                }), l[8] = e) : e = l[8], e
            }
            return l[9] !== p || l[10] !== h || l[11] !== g ? (o = (0, i.jsx)(V, {
                preview: h,
                serverConversationId: g,
                turns: p
            }), l[9] = p, l[10] = h, l[11] = g, l[12] = o) : o = l[12], o
        }

        function B(e) {
            let a, t, n = (0, s.c)(7),
                {
                    preview: r,
                    serverConversationId: o,
                    turns: l
                } = e;
            return n[0] !== r || n[1] !== o || n[2] !== l ? (a = (0, i.jsx)("div", {
                className: "flex min-w-0 flex-col gap-4 p-4",
                children: (0, i.jsx)(V, {
                    markdownDirectives: O,
                    preview: r,
                    serverConversationId: o,
                    turns: l
                })
            }), n[0] = r, n[1] = o, n[2] = l, n[3] = a) : a = n[3], n[4] !== o || n[5] !== a ? (t = (0, i.jsx)(K, {
                serverConversationId: o,
                children: a
            }), n[4] = o, n[5] = a, n[6] = t) : t = n[6], t
        }

        function K(e) {
            let a, t, n, r, o = (0, s.c)(10),
                {
                    children: l,
                    serverConversationId: c
                } = e;
            return o[0] !== c ? (a = (0, R.c)(c), o[0] = c, o[1] = a) : a = o[1], o[2] !== c || o[3] !== a ? (t = {
                conversationId: c,
                pathname: a,
                routeKind: "chatgpt-thread",
                routeTemplate: R.a
            }, o[2] = c, o[3] = a, o[4] = t) : t = o[4], o[5] !== l ? (n = (0, i.jsx)(_.a.Provider, {
                value: "restricted",
                children: (0, i.jsx)(v.a, {
                    children: l
                })
            }), o[5] = l, o[6] = n) : n = o[6], o[7] !== t || o[8] !== n ? (r = (0, i.jsx)(S.a, {
                route: t,
                children: n
            }), o[7] = t, o[8] = n, o[9] = r) : r = o[9], r
        }

        function V(e) {
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
                        children: [e.images.map(e => (0, i.jsx)($, {
                            src: e,
                            serverConversationId: s
                        }, e)), e.message.trim() ? (0, i.jsx)(Y, {
                            item: e,
                            renderMarkdown: e.renderMarkdown,
                            text: (0, l.w)(e.message)
                        }) : null]
                    }, r) : "assistant-message" === e.type ? (0, i.jsx)(L.a, {
                        conversationId: (0, D.c)(s),
                        cwd: null,
                        hostId: A.a,
                        item: e,
                        isReadOnly: !0,
                        preview: a,
                        markdownDirectives: t,
                        trackShownImpressions: !1,
                        turnId: n
                    }, r) : "generated-image" === e.type && null != e.src ? (0, i.jsx)($, {
                        isGenerated: !0,
                        src: e.src,
                        serverConversationId: s
                    }, r) : null)
                }, n)
            })
        }

        function Y(e) {
            let a, t, n, r = (0, s.c)(7),
                {
                    item: o,
                    renderMarkdown: l,
                    text: c
                } = e;
            r[0] !== o || r[1] !== c ? (a = function(e, a) {
                let t = a?.chatGptSystemHintMentions ?? (0, G.d)([], e),
                    i = e;
                for (let e of t.toReversed()) {
                    let a = e.id.replace(/^(?:connector|plugin):/u, "");
                    (a === C.a || E.a.has(a) || null != (0, g.z)(e.id)) && (i = i.slice(0, e.startIndex) + (0, p.b)(e.label, C.b) + i.slice(e.endIndex))
                }
                return i
            }(c, o), r[0] = o, r[1] = c, r[2] = a) : a = r[2], r[3] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                a: Q
            }, r[3] = t) : t = r[3];
            let d = !0 === l;
            return r[4] !== a || r[5] !== d ? (n = (0, i.jsx)("div", {
                className: "max-w-[77%] min-w-0 self-end overflow-hidden rounded-2xl bg-text/5 px-3 py-2 break-words",
                children: (0, i.jsx)(f.a, {
                    text: a,
                    components: t,
                    cwd: null,
                    hasSerializedParagraphs: d,
                    hostId: A.a,
                    renderMath: !1,
                    variant: "user-message"
                })
            }), r[4] = a, r[5] = d, r[6] = n) : n = r[6], n
        }

        function Q(e) {
            let a, t, n = (0, s.c)(10);
            if (e.href !== C.b) {
                let a, t = e[w.a];
                return n[0] !== e.children || n[1] !== e.href || n[2] !== e.title || n[3] !== t ? (a = (0, i.jsx)(H, {
                    href: e.href,
                    title: e.title,
                    "data-markdown-raw-link-label": t,
                    children: e.children
                }), n[0] = e.children, n[1] = e.href, n[2] = e.title, n[3] = t, n[4] = a) : a = n[4], a
            }
            let r = e[w.a];
            return n[5] !== e.children || n[6] !== r ? (a = "string" == typeof r ? (0, p.c)(r) : (0, x.a)(e.children), n[5] = e.children, n[6] = r, n[7] = a) : a = n[7], n[8] !== a ? (t = (0, i.jsx)(T.a, {
                icon: b.a,
                layout: "selection-pill",
                children: a
            }), n[8] = a, n[9] = t) : t = n[9], t
        }

        function $(e) {
            let a, t, n = (0, s.c)(7),
                {
                    isGenerated: r,
                    src: o,
                    serverConversationId: l
                } = e,
                c = void 0 !== r && r,
                g = (0, I.h)(o) ? o : "";
            n[0] !== l ? (a = (0, P.c)((0, D.c)(l)), n[0] = l, n[1] = a) : a = n[1];
            let {
                src: p,
                isLoading: u
            } = (0, I.k)(g, a), f = (0, y.c)(o) ? o : null;
            if (g && (f = p), u) {
                let e;
                return n[2] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(m.a, {
                    className: "icon-sm"
                }), n[2] = e) : e = n[2], e
            }
            if (null == f) {
                let e;
                return n[3] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)("span", {
                    className: "text-sm text-secondary",
                    children: (0, i.jsx)(d.a, {
                        id: "chatgptConversations.shareDialog.imageUnavailable",
                        defaultMessage: "Image preview unavailable",
                        description: "Placeholder inside the cropped ChatGPT sharing preview when an image cannot be loaded safely. This does not change whether the image is included in the shared chat."
                    })
                }), n[3] = e) : e = n[3], e
            }
            return n[4] !== f || n[5] !== c ? (t = c ? (0, i.jsx)("img", {
                alt: "",
                className: "block max-h-56 max-w-full self-start rounded-2xl object-contain",
                loading: "lazy",
                referrerPolicy: "no-referrer",
                src: f
            }) : (0, i.jsx)(h.a, {
                src: f,
                previewEnabled: !1,
                imageLoading: "lazy"
            }), n[4] = f, n[5] = c, n[6] = t) : t = n[6], t
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
    aPiu: (function(e, a, t) {
        var i = t("ABep"),
            s = t("QosV"),
            n = t("BolX"),
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
                        error: T,
                        footer: C,
                        info: S,
                        isBusy: A,
                        isDismissalDisabled: j,
                        notices: I,
                        onClose: M,
                        onOpenAutoFocus: L,
                        onPortalContainerChange: P,
                        onSubmit: E,
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
                v[2] !== A ? (t = A ? null : (0, i.jsx)(c.Ae, {}), v[2] = A, v[3] = t) : t = v[3], v[4] !== y || v[5] !== t ? (p = (0, i.jsxs)(i.Fragment, {
                    children: [t, y]
                }), v[4] = y, v[5] = t, v[6] = p) : p = v[6];
                let U = p;
                if (T?.preventsSharing) {
                    let e;
                    v[7] !== T.onRetry ? (e = null != T.onRetry ? (0, i.jsx)(r.a, {
                        id: "shareDialog.thread.retry",
                        defaultMessage: "Try again",
                        description: "Button in a thread sharing dialog after preparing the share link fails. Retries preparing the chat without publishing it."
                    }) : (0, i.jsx)(r.a, {
                        id: "shareDialog.thread.close",
                        defaultMessage: "Close",
                        description: "Button in a thread sharing dialog that cannot prepare a share link. Closes the failed dialog so the user can reopen sharing."
                    }), v[7] = T.onRetry, v[8] = e) : e = v[8], U = e
                }
                let z = !T?.preventsSharing && k;
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
                    description: "Title of the ChatGPT or Codex thread sharing dialog. threadTitle is the user-provided name of the chat and may be truncated to fit the dialog header.",
                    values: {
                        threadTitle: W
                    }
                }) : (0, i.jsx)(r.a, {
                    id: "shareDialog.thread.title",
                    defaultMessage: "Share chat",
                    description: "Title of the thread sharing dialog when the ChatGPT or Codex chat has no name yet."
                })), v[13] = W, v[14] = O, v[15] = m) : m = v[15];
                let B = T?.preventsSharing ? T.onRetry ?? M : E,
                    K = T?.preventsSharing ? q : C ?? q;
                return v[16] !== w || v[17] !== x || v[18] !== T || v[19] !== S || v[20] !== H || v[21] !== I || v[22] !== N || v[23] !== D ? (f = T?.preventsSharing ? (0, i.jsx)(l.e, {
                    className: "py-10",
                    children: (0, i.jsx)("div", {
                        role: "alert",
                        children: (0, i.jsx)(d.a, {
                            children: T.content
                        })
                    })
                }) : (0, i.jsxs)(i.Fragment, {
                    children: ["imageSheet" === N ? D : (0, i.jsx)(l.e, {
                        children: D
                    }), S, I, w ?? (null == x ? null : (0, i.jsx)(l.e, {
                        children: (0, i.jsx)("div", {
                            className: "text-sm text-codex-description",
                            children: x
                        })
                    })), null == T ? null : (0, i.jsx)(l.e, {
                        children: (0, i.jsx)("div", {
                            className: "text-sm text-danger",
                            role: "alert",
                            children: T.content
                        })
                    }), T?.copyUrl == null ? null : (0, i.jsx)(l.e, {
                        children: (0, i.jsx)(h.a, {
                            "aria-label": H.formatMessage({
                                id: "shareDialog.thread.linkLabel",
                                defaultMessage: "Share link",
                                description: "Accessible label for the read-only URL field in a ChatGPT or Codex thread sharing dialog. The URL can be manually selected and copied if clipboard access fails."
                            }),
                            readOnly: !0,
                            value: T.copyUrl
                        })
                    })]
                }), v[16] = w, v[17] = x, v[18] = T, v[19] = S, v[20] = H, v[21] = I, v[22] = N, v[23] = D, v[24] = f) : f = v[24], v[25] !== _ || v[26] !== j || v[27] !== M || v[28] !== L || v[29] !== P || v[30] !== N || v[31] !== R || v[32] !== G || v[33] !== m || v[34] !== B || v[35] !== K || v[36] !== f ? (b = (0, i.jsx)(g.a, {
                    title: m,
                    subtitle: G,
                    compactImageSheetFooter: _,
                    isDismissalDisabled: j,
                    onClose: M,
                    onOpenAutoFocus: L,
                    onPortalContainerChange: P,
                    onSubmit: B,
                    size: R,
                    presentation: N,
                    footer: K,
                    children: f
                }), v[25] = _, v[26] = j, v[27] = M, v[28] = L, v[29] = P, v[30] = N, v[31] = R, v[32] = G, v[33] = m, v[34] = B, v[35] = K, v[36] = f, v[37] = b) : b = v[37], b
            }
        })
    }),
    qKAH: (function(e, a, t) {
        t.d(a, {
            a: () => b
        });
        var i = t("ABep"),
            s = t("QosV"),
            n = t("slpy"),
            r = t("on57"),
            o = t("BolX"),
            l = t("Wf1j"),
            c = t("oyxz"),
            d = t("Qgfj"),
            h = t("Sm6l"),
            g = t("JNtf"),
            p = t("bf6R"),
            u = t("RNul"),
            m = t("O666");
        let f = {
            default: void 0,
            transcript: void 0,
            image: "size-full",
            response: "p-5"
        };

        function b(e) {
            let a, t, n, d, h, g, p, b = (0, s.c)(23),
                {
                    ariaLabel: w,
                    children: k,
                    classicImagePreviewEligible: y,
                    expandedContent: x,
                    isLoading: _,
                    presentation: C,
                    variant: S
                } = e,
                A = void 0 !== _ && _,
                j = void 0 === S ? "default" : S,
                I = (0, l.a)();
            b[0] === Symbol.for("react.memo_cache_sentinel") ? (a = {
                layer: "3136899520",
                parameter: "classic_image_preview"
            }, b[0] = a) : a = b[0];
            let M = (0, o.x)(void 0 !== y && y ? m.b : null, a) ? "border-transparent bg-transparent" : "border-default bg-surface",
                L = "transcript" === j ? "h-auto" : "aspect-[1200/630]";
            b[1] !== M || b[2] !== L ? (t = (0, r.b)("relative min-h-56 overflow-hidden rounded-lg border select-none", M, L), b[1] = M, b[2] = L, b[3] = t) : t = b[3];
            let P = t;
            return null != C && (P = "imageSheetTwoRows" === C ? "imageSheetTwoRowsPreview-bFaioZ" : "imageSheetPreview-rzCCMf"), b[4] !== w || b[5] !== I || b[6] !== j ? (n = w ?? I.formatMessage(T["transcript" === j ? "default" : j]), b[4] = w, b[5] = I, b[6] = j, b[7] = n) : n = b[7], b[8] !== k || b[9] !== A || b[10] !== C || b[11] !== j ? (d = A ? (0, i.jsxs)("div", {
                className: "flex h-full items-center justify-center gap-2 text-sm text-secondary",
                children: [(0, i.jsx)(u.a, {
                    className: "icon-sm"
                }), (0, i.jsx)(c.a, {
                    ...T.loading
                })]
            }) : (0, i.jsxs)("div", {
                "aria-hidden": !0,
                className: f[j],
                inert: !0,
                children: [k, null == C && ("default" === j || "response" === j) && (0, i.jsx)("div", {
                    className: "pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface to-transparent"
                })]
            }), b[8] = k, b[9] = A, b[10] = C, b[11] = j, b[12] = d) : d = b[12], b[13] !== n || b[14] !== d ? (h = (0, i.jsx)("div", {
                className: "h-full",
                role: "img",
                "aria-label": n,
                children: d
            }), b[13] = n, b[14] = d, b[15] = h) : h = b[15], b[16] !== x || b[17] !== A ? (g = !A && null != x && (0, i.jsx)(v, {
                className: "absolute! end-2 top-2",
                children: x
            }), b[16] = x, b[17] = A, b[18] = g) : g = b[18], b[19] !== P || b[20] !== h || b[21] !== g ? (p = (0, i.jsxs)("div", {
                className: P,
                children: [h, g]
            }), b[19] = P, b[20] = h, b[21] = g, b[22] = p) : p = b[22], p
        }

        function v(e) {
            let a, t, r, d, u, f, b, v, k, C, S, A = (0, s.c)(22),
                {
                    className: j,
                    children: I
                } = e,
                M = (0, l.a)();
            if (A[0] === Symbol.for("react.memo_cache_sentinel") ? (a = {
                    layer: "3136899520",
                    parameter: "expand_share_preview"
                }, A[0] = a) : a = A[0], !(0, o.x)(m.b, a)) return null;
            A[1] !== M ? (t = M.formatMessage(T.expand), A[1] = M, A[2] = t) : t = A[2];
            let L = t;
            return A[3] === Symbol.for("react.memo_cache_sentinel") ? (r = {
                "aria-describedby": void 0
            }, A[3] = r) : r = A[3], A[4] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, i.jsx)(p.O, {}), A[4] = d) : d = A[4], A[5] !== j || A[6] !== L ? (u = (0, i.jsx)(h.a, {
                className: j,
                color: "mapSurface",
                radius: "full",
                size: "inputIcon",
                "aria-label": L,
                type: "button",
                children: d
            }), A[5] = j, A[6] = L, A[7] = u) : u = A[7], A[8] !== L || A[9] !== u ? (f = (0, i.jsx)(n.a, {
                content: L,
                children: u
            }), A[8] = L, A[9] = u, A[10] = f) : f = A[10], A[11] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, i.jsx)(g.e, {
                className: "sr-only",
                children: (0, i.jsx)(c.a, {
                    ...T.expandedTitle
                })
            }), A[11] = b) : b = A[11], A[12] !== M ? (v = M.formatMessage(T.expandedTitle), A[12] = M, A[13] = v) : v = A[13], A[14] !== I ? (k = (0, i.jsx)("fieldset", {
                disabled: !0,
                ref: _,
                onFocusCapture: w,
                onPointerDownCapture: y,
                onPointerUpCapture: y,
                onPointerMoveCapture: y,
                onPointerOverCapture: y,
                onPointerOutCapture: y,
                onMouseDownCapture: y,
                onMouseUpCapture: y,
                onMouseMoveCapture: y,
                onMouseOverCapture: y,
                onMouseOutCapture: y,
                onTouchStartCapture: y,
                onTouchMoveCapture: y,
                onTouchEndCapture: y,
                onWheelCapture: y,
                onKeyDownCapture: y,
                onKeyUpCapture: y,
                onContextMenuCapture: x,
                onDragStartCapture: x,
                onDoubleClickCapture: x,
                onClickCapture: x,
                onAuxClickCapture: x,
                onSubmitCapture: x,
                children: (0, i.jsx)("div", {
                    children: I
                })
            }), A[14] = I, A[15] = k) : k = A[15], A[16] !== v || A[17] !== k ? (C = (0, i.jsx)("div", {
                className: "max-h-[80dvh] overflow-auto overscroll-contain px-5 pt-12 pb-5",
                "aria-label": v,
                role: "region",
                tabIndex: 0,
                children: k
            }), A[16] = v, A[17] = k, A[18] = C) : C = A[18], A[19] !== C || A[20] !== f ? (S = (0, i.jsxs)(g.a, {
                size: "wide",
                variant: "chatgpt",
                backdrop: "modal",
                autoFocusCloseButton: !0,
                contentProps: r,
                triggerContent: f,
                children: [b, C]
            }), A[19] = C, A[20] = f, A[21] = S) : S = A[21], S
        }

        function w(e) {
            e.stopPropagation(), k(e.target) || e.currentTarget.parentElement?.focus({
                preventScroll: !0
            })
        }

        function k(e) {
            if (!e.matches("div, pre, section, article, ul, ol, table") || !e.matches(":not([role]), [role=region], [role=group], [role=table]")) return !1;
            let {
                overflowX: a,
                overflowY: t
            } = getComputedStyle(e);
            return [a, t].some(e => "auto" === e || "scroll" === e)
        }

        function y(e) {
            e.stopPropagation()
        }

        function x(e) {
            e.preventDefault(), e.stopPropagation()
        }

        function _(e) {
            let a = "dil-renderer, a[href], area[href], [tabindex], [contenteditable], summary, iframe, object, embed, audio[controls], video[controls]";

            function t(e) {
                e.matches("a[href], area[href]") && e.removeAttribute("href"), e.hasAttribute("contenteditable") && "false" !== e.getAttribute("contenteditable") && e.setAttribute("contenteditable", "false"), e.matches("iframe, object, embed") && e.setAttribute("inert", ""), "-1" === e.getAttribute("tabindex") || k(e) || e.setAttribute("tabindex", "-1")
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
        let T = (0, d.f)({
            expand: {
                id: "shareDialog.preview.expand",
                defaultMessage: "Expand preview",
                description: "Button that opens a scrollable preview of all content included in the share link."
            },
            expandedTitle: {
                id: "shareDialog.preview.expandedTitle",
                defaultMessage: "Share preview",
                description: "Accessible title of the dialog showing the full content selected for sharing."
            },
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