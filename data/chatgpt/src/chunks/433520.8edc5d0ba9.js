export const __rspack_esm_ids = [433520];
export const __webpack_modules__ = {
    P2zs: (function(e, a, i) {
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
    tdfh: (function(e, a, i) {
        i.d(a, {
            a: () => eL,
            ChatGptConversationShareRecoveryDialog: () => eM
        });
        var t = i("ABep"),
            s = i("QosV"),
            n = i("FS1B"),
            r = i("BOYb"),
            o = i("T0Rc"),
            l = i("BolX"),
            c = i("zd8w"),
            d = i("Wf1j"),
            h = i("oyxz"),
            g = i("Qgfj"),
            p = i("O0M0"),
            u = i("Cslg"),
            m = i("zKCW"),
            f = i("mUDD"),
            b = i("Ot7V"),
            v = i("bf6R"),
            w = i("RNul"),
            k = i("SGsN"),
            T = i("yGJW"),
            _ = i("OWtl"),
            y = i("akkX"),
            C = i("FGv0"),
            S = i("TnP0"),
            x = i("qKAH"),
            A = i("zHp1"),
            I = i("WFY2"),
            M = i("rvFo"),
            L = i("HFSu"),
            j = i("taWv"),
            E = i("r9i9"),
            P = i("Y7np"),
            D = i("oU3c"),
            N = i("SEBt"),
            G = i("OOaz"),
            R = i("fwwN"),
            F = i("cQW3"),
            O = i("Tywu"),
            H = i("rfhJ"),
            W = i("ZtSy");

        function U(e) {
            let a, i = (0, s.c)(4),
                {
                    includeConversationAudience: n,
                    linkAppearance: r
                } = e,
                o = void 0 === r ? "secondary" : r;
            if (void 0 !== n && n) {
                let e;
                return i[0] !== o ? (e = (0, t.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.conversationMemoryDisclosure",
                    defaultMessage: "Anyone with this link can access messages up to this point. Memory sources won't be shared with viewers. <learnMore>Learn more</learnMore>",
                    description: "Audience and privacy explanation in the personal ChatGPT conversation sharing dialog. The link includes messages through the selected point, but does not give viewers access to the underlying Memory sources. The learnMore tag links to the shared-links help article.",
                    values: {
                        learnMore: e => (0, t.jsx)(z, {
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
                    learnMore: e => (0, t.jsx)(z, {
                        appearance: o,
                        children: e
                    })
                }
            }), i[2] = o, i[3] = a) : a = i[3], a
        }

        function z(e) {
            let a, i = (0, s.c)(3),
                {
                    children: n,
                    appearance: r
                } = e,
                o = void 0 === r ? "secondary" : r;
            return i[0] !== o || i[1] !== n ? (a = (0, t.jsx)(t.Fragment, {
                children: (0, t.jsx)(W.a, {
                    appearance: o,
                    href: "https://help.openai.com/en/articles/7925741-chatgpt-shared-links",
                    initiator: "open_in_browser_bridge",
                    openTarget: "external-browser",
                    underline: "always",
                    children: n
                })
            }), i[0] = o, i[1] = n, i[2] = a) : a = i[2], a
        }
        var B = i("k5RO"),
            q = i("on57"),
            K = i("WAV0"),
            V = i("P2zs"),
            Y = i.p + "assets/line.54d213ef65.svg",
            $ = i("hZax"),
            X = i("O666"),
            Q = i("k6sM"),
            J = i("Sm6l"),
            Z = i("HOLv"),
            ee = i.p + "assets/facebook.a44c3b23dc.svg",
            ea = i.p + "assets/instagram.f89c02c412.svg",
            ei = i.p + "assets/kakao-talk.9a71acddc9.svg",
            et = i.p + "assets/line.8701c39f94.svg",
            es = i.p + "assets/linkedin.a0e21ee4e9.svg",
            en = i.p + "assets/messages.65e1f7f9bb.svg",
            er = i.p + "assets/reddit.ef23b998c8.svg",
            eo = i.p + "assets/snapchat.68114a3519.svg",
            el = i.p + "assets/telegram.4e098d17e4.svg",
            ec = i.p + "assets/whatsapp.95a74777d3.svg",
            ed = i.p + "assets/x.f402deb07e.svg",
            eh = i.p + "assets/facebook-messenger.d2456ff12a.svg",
            eg = i.p + "assets/facebook-stories.a4b3bd52fa.svg",
            ep = i.p + "assets/instagram-stories.c90c585419.svg",
            eu = i.p + "assets/kakao-talk.a52fcff4cb.svg",
            em = i.p + "assets/linkedin.61d30fb4b9.svg",
            ef = i.p + "assets/messages.eed095b840.svg",
            eb = i.p + "assets/reddit.960af71a47.svg",
            ev = i.p + "assets/telegram.b7e1212639.svg",
            ew = i.p + "assets/whatsapp.0a1329508c.svg",
            ek = i.p + "assets/x.1105bc9892.svg",
            eT = "mobileRow-V0E64y",
            e_ = i("H6Am"),
            ey = i("G3Yw"),
            eC = i("ARht");

        function eS(e) {
            let a, i, n, r, o, l = (0, s.c)(35),
                {
                    copyLabel: c,
                    copyDisabled: h,
                    isBusy: g,
                    isDownloading: p,
                    socialDestinationsDisabled: u,
                    showSocialDestinations: m,
                    onCopy: f,
                    onDownload: b,
                    additionalActions: v,
                    onSocialShare: k,
                    experience: T,
                    onNativeShare: _,
                    canNativeShare: y,
                    country: C
                } = e,
                S = (0, d.a)();
            if (l[0] !== v || l[1] !== y || l[2] !== h || l[3] !== c || l[4] !== C || l[5] !== T.layout || l[6] !== T.unsupportedDestinationFallback || l[7] !== S || l[8] !== g || l[9] !== p || l[10] !== f || l[11] !== b || l[12] !== _ || l[13] !== k || l[14] !== m || l[15] !== u) {
                r = Symbol.for("react.early_return_sentinel");
                e: {
                    let e, s, o = null == b ? [] : [{
                        id: "download",
                        disabled: p || g,
                        icon: (0, t.jsx)(Z.a, {
                            asset: e_.a
                        }),
                        label: S.formatMessage({
                            id: "chatgptConversations.shareDialog.destination.download.label",
                            defaultMessage: "Download",
                            description: "Short label below a circular button in the generated-image Share dialog. Saves the selected image, or all images in the selected series, to the user's device without creating a shared link."
                        }),
                        onClick: b
                    }];l[20] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(Z.a, {
                        asset: eC.a
                    }), l[20] = e) : e = l[20];
                    let d = {
                            id: "copy",
                            disabled: h,
                            icon: e,
                            label: c,
                            onClick: f
                        },
                        x = y ? [{
                            id: "native",
                            disabled: h,
                            icon: (0, t.jsx)(Z.a, {
                                asset: ey.a
                            }),
                            label: S.formatMessage({
                                id: "chatgptConversations.mobileImageShare.native",
                                defaultMessage: "Share to",
                                description: "Short action label in the mobile generated-image share sheet. Selecting it opens the device's operating-system share sheet with the public image link. It appears beside Copy link and Download."
                            }),
                            onClick: _
                        }] : [],
                        A = [...o, d, ...x],
                        I = m ? (0, B.e)({
                            country: C
                        }).map(e => (function(e) {
                            let a, i, s, {
                                    destination: n,
                                    disabled: r,
                                    intl: o,
                                    onSocialShare: l
                                } = e,
                                c = e => (0, t.jsx)("img", {
                                    alt: "",
                                    "aria-hidden": !0,
                                    src: e
                                }),
                                d = e => (0, t.jsx)("img", {
                                    alt: "",
                                    "aria-hidden": !0,
                                    className: "destinationIconBackground-q4p_I2",
                                    src: e
                                });
                            switch (n) {
                                case "messages":
                                    a = c(ef), i = d(en), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.messages",
                                        defaultMessage: "Messages",
                                        description: "Short destination label in the mobile generated-image share sheet. Selecting it opens a text-message draft containing the public image link. This means the device's Messages app, not ChatGPT messages."
                                    });
                                    break;
                                case "whatsapp":
                                    a = c(ew), i = d(ec), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.whatsapp",
                                        defaultMessage: "WhatsApp",
                                        description: "Short destination label in the mobile generated-image share sheet. Selecting it opens WhatsApp with the public image link ready to send. WhatsApp is a brand name."
                                    });
                                    break;
                                case "instagram-stories":
                                    a = c(ep), i = d(ea), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.instagramStories",
                                        defaultMessage: "Instagram",
                                        description: "Short destination label in the mobile generated-image share sheet for sharing through Instagram Stories. Depending on the experiment assignment, selecting it opens the operating-system share sheet or the Instagram app-store page. Instagram is a brand name."
                                    });
                                    break;
                                case "facebook-stories":
                                    a = c(eg), i = d(ee), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.facebookStories",
                                        defaultMessage: "Facebook",
                                        description: "Short destination label in the mobile generated-image share sheet for sharing through Facebook Stories. Depending on the experiment assignment, selecting it opens the operating-system share sheet or the Facebook app-store page. Facebook is a brand name."
                                    });
                                    break;
                                case "telegram":
                                    a = c(ev), i = d(el), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.telegram",
                                        defaultMessage: "Telegram",
                                        description: "Short destination label in the mobile generated-image share sheet. Selecting it opens Telegram with the public image link ready to send. Telegram is a brand name."
                                    });
                                    break;
                                case "facebook-messenger":
                                    a = c(eh), i = d(ee), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.facebookMessenger",
                                        defaultMessage: "Messenger",
                                        description: "Short destination label in the mobile generated-image share sheet for Facebook Messenger. Depending on the experiment assignment, selecting it opens the operating-system share sheet or the Messenger app-store page. Messenger is a brand name."
                                    });
                                    break;
                                case "kakao-talk":
                                    a = c(eu), i = d(ei), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.kakaoTalk",
                                        defaultMessage: "KakaoTalk",
                                        description: "Short destination label shown to users in Korea in the mobile generated-image share sheet. Depending on the experiment assignment, selecting it opens the operating-system share sheet or the KakaoTalk app-store page. KakaoTalk is a brand name."
                                    });
                                    break;
                                case "snapchat-stories":
                                    a = (0, t.jsx)(Q.a, {
                                        "aria-hidden": "true",
                                        className: "text-brand-logo-foreground"
                                    }), i = d(eo), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.snapchatStories",
                                        defaultMessage: "Snapchat",
                                        description: "Short destination label in the mobile generated-image share sheet for sharing through Snapchat Stories. Depending on the experiment assignment, selecting it opens the operating-system share sheet or the Snapchat app-store page. Snapchat is a brand name."
                                    });
                                    break;
                                case "line":
                                    a = c(Y), i = d(et), s = o.formatMessage({
                                        id: "postSharingModal.line",
                                        defaultMessage: "LINE",
                                        description: "Short label for the LINE destination in ChatGPT conversation, message, and image sharing dialogs and menus. Selecting it opens LINE sharing so the user can choose recipients and send the shared link. Appears alongside X and LinkedIn. LINE is a messaging app brand name; keep its Latin letters and capitalization."
                                    });
                                    break;
                                case "x":
                                    a = c(ek), i = d(ed), s = o.formatMessage({
                                        id: "chatgptConversations.shareDialog.destination.x.label",
                                        defaultMessage: "X",
                                        description: "Short destination label below a circular button in a ChatGPT post sharing dialog for a conversation, response, or generated image. Selecting it opens X's post composer with the public post URL."
                                    });
                                    break;
                                case "linkedin":
                                    a = c(em), i = d(es), s = o.formatMessage({
                                        id: "chatgptConversations.shareDialog.destination.linkedin.label",
                                        defaultMessage: "LinkedIn",
                                        description: "Short destination label below a circular button in a ChatGPT post sharing dialog for a conversation, response, or generated image. Selecting it opens LinkedIn's post composer with the public post URL."
                                    });
                                    break;
                                case "reddit":
                                    a = c(eb), i = d(er), s = o.formatMessage({
                                        id: "chatgptConversations.shareDialog.destination.reddit.label",
                                        defaultMessage: "Reddit",
                                        description: "Short destination label below a circular button in a ChatGPT post sharing dialog for a conversation, response, or generated image. Selecting it opens Reddit's submission form with the public post URL. Other destinations are Copy link, X, and LinkedIn."
                                    })
                            }
                            return {
                                id: n,
                                disabled: r,
                                icon: a,
                                iconBackground: i,
                                label: s,
                                onClick: e => l(n, e)
                            }
                        })({
                            destination: e,
                            disabled: u || "native-share" === T.unsupportedDestinationFallback && (0, B.g)(e) && !y,
                            intl: S,
                            onSocialShare: k
                        })) : [],
                        M = "two-rows" === T.layout && I.length > 0;l[21] !== g || l[22] !== p ? (s = (e, a) => {
                        let {
                            id: i,
                            disabled: s,
                            icon: n,
                            iconBackground: r,
                            label: o,
                            onClick: l
                        } = e, c = "copy" === i && g || "download" === i && p;
                        return (0, t.jsx)(K.a, {
                            extension: "download" === i,
                            children: (0, t.jsxs)(J.a, {
                                "aria-label": o,
                                "aria-busy": c,
                                color: "shareDestination",
                                unstyled: !0,
                                className: (0, q.b)("mobileDestination-JRc58g", a && "mobileTwoRowDestination-jahy9S"),
                                "data-destination": i,
                                disabled: s,
                                size: "shareDestination",
                                type: "copy" === i ? "submit" : "button",
                                onClick: l,
                                children: [(0, t.jsxs)("span", {
                                    className: (0, q.b)("destinationIcon-EuU6jl", null != r && "destinationIconWithArtwork-eYPnWH"),
                                    children: [r, (0, t.jsx)("span", {
                                        className: "destinationIconForeground-usBliy",
                                        children: c ? (0, t.jsx)(w.a, {
                                            as: "span",
                                            className: "icon-sm"
                                        }) : n
                                    })]
                                }), (0, t.jsx)("span", {
                                    className: "w-full text-center whitespace-nowrap text-default select-none",
                                    "aria-live": "copy" === i ? "polite" : void 0,
                                    children: o
                                })]
                            })
                        }, i)
                    }, l[21] = g, l[22] = p, l[23] = s) : s = l[23];
                    let L = s;
                    if (M) {
                        let e, a, i, s, n = [...o, ...x, d];
                        l[24] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, q.b)("box-border flex min-w-0 w-full gap-x-5 overflow-x-auto overscroll-x-contain px-5 pt-5 pb-8", eT), l[24] = e) : e = l[24], l[25] !== L ? (a = e => L(e, !0), l[25] = L, l[26] = a) : a = l[26], l[27] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, t.jsx)("div", {
                            className: "w-full border-t-hairline border-default",
                            "aria-hidden": "true"
                        }), l[27] = i) : i = l[27], l[28] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, q.b)("box-border flex min-w-0 w-full gap-x-5 overflow-x-auto overscroll-x-contain px-5 pt-5 pb-8", eT, "mobileUtilityRow-iCKQaL"), l[28] = s) : s = l[28], r = (0, t.jsxs)("div", {
                            className: "flex w-full min-w-0 flex-col",
                            children: [(0, t.jsx)("div", {
                                "data-mobile-image-share-row": "destinations",
                                className: e,
                                children: I.map(a)
                            }), i, (0, t.jsxs)("div", {
                                "data-mobile-image-share-row": "actions",
                                className: s,
                                children: [n.map(e => L(e, !0)), v]
                            })]
                        });
                        break e
                    }
                    a = "combined",
                    l[29] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, q.b)("flex w-full gap-x-6 overflow-x-auto overscroll-x-contain px-6", eT), l[29] = i) : i = l[29],
                    n = [...A, ...I].map(e => L(e, !1))
                }
                l[0] = v, l[1] = y, l[2] = h, l[3] = c, l[4] = C, l[5] = T.layout, l[6] = T.unsupportedDestinationFallback, l[7] = S, l[8] = g, l[9] = p, l[10] = f, l[11] = b, l[12] = _, l[13] = k, l[14] = m, l[15] = u, l[16] = a, l[17] = i, l[18] = n, l[19] = r
            } else a = l[16], i = l[17], n = l[18], r = l[19];
            return r !== Symbol.for("react.early_return_sentinel") ? r : (l[30] !== v || l[31] !== a || l[32] !== i || l[33] !== n ? (o = (0, t.jsxs)("div", {
                "data-mobile-image-share-row": a,
                className: i,
                children: [n, v]
            }), l[30] = v, l[31] = a, l[32] = i, l[33] = n, l[34] = o) : o = l[34], o)
        }

        function ex(e) {
            let a, i, n, r, o, c, d = (0, s.c)(22),
                {
                    "aria-label": h,
                    "data-destination": g,
                    disabled: p,
                    icons: u,
                    isBusy: m,
                    label: f,
                    announceLabel: b,
                    type: v,
                    onClick: k
                } = e,
                T = void 0 !== m && m,
                _ = void 0 === v ? "button" : v;
            d[0] === Symbol.for("react.memo_cache_sentinel") ? (a = {
                layer: "3136899520",
                parameter: "large_share_destinations"
            }, d[0] = a) : a = d[0];
            let y = (0, l.x)(X.b, a),
                C = y ? u.large : u.compact,
                S = y ? "size-16" : "size-11";
            d[1] !== S ? (i = (0, q.b)("share-destination-icon flex items-center justify-center rounded-full", S), d[1] = S, d[2] = i) : i = d[2], d[3] !== y || d[4] !== C || d[5] !== T ? (n = T ? (0, t.jsx)(w.a, {
                as: "span",
                className: y ? "size-8" : "icon-sm"
            }) : C, d[3] = y, d[4] = C, d[5] = T, d[6] = n) : n = d[6], d[7] !== i || d[8] !== n ? (r = (0, t.jsx)("span", {
                className: i,
                children: n
            }), d[7] = i, d[8] = n, d[9] = r) : r = d[9];
            let x = void 0 !== b && b ? "polite" : void 0;
            return d[10] !== f || d[11] !== x ? (o = (0, t.jsx)("span", {
                className: "w-full text-center text-xs whitespace-nowrap text-default select-none",
                "aria-live": x,
                children: f
            }), d[10] = f, d[11] = x, d[12] = o) : o = d[12], d[13] !== h || d[14] !== g || d[15] !== p || d[16] !== T || d[17] !== k || d[18] !== o || d[19] !== r || d[20] !== _ ? (c = (0, t.jsxs)(J.a, {
                "aria-label": h,
                "aria-busy": T,
                "data-destination": g,
                color: "shareDestination",
                disabled: p,
                size: "shareDestination",
                type: _,
                onClick: k,
                children: [r, o]
            }), d[13] = h, d[14] = g, d[15] = p, d[16] = T, d[17] = k, d[18] = o, d[19] = r, d[20] = _, d[21] = c) : c = d[21], c
        }

        function eA(e) {
            let a, i, n, r, o, c, h, g, p, u, m, f, b = (0, s.c)(54),
                {
                    copyLabel: w,
                    copyDisabled: k,
                    isBusy: T,
                    isDownloading: _,
                    socialDestinationsDisabled: y,
                    showSocialDestinations: C,
                    onCopy: S,
                    onDownload: x,
                    additionalActions: A,
                    onSocialShare: I,
                    mobileImageActions: M
                } = e,
                L = void 0 !== _ && _,
                j = null != M;
            b[0] !== j ? (a = {
                layer: "3136899520",
                parameter: "large_share_destinations",
                disableExposureLog: j
            }, b[0] = j, b[1] = a) : a = b[1];
            let E = (0, l.x)(X.b, a),
                P = (0, d.a)(),
                {
                    client: D
                } = (0, $.j)();
            b[2] !== D ? (i = D.getContext().user?.country?.trim().toUpperCase(), b[2] = D, b[3] = i) : i = b[3];
            let N = i,
                G = null == M && "JP" === N && C,
                R = !G;
            b[4] !== R ? (n = {
                layer: "494762337",
                parameter: "enabled",
                disableExposureLog: R
            }, b[4] = R, b[5] = n) : n = b[5];
            let F = (0, l.x)(G ? X.b : null, n),
                O = G && F;
            if (null != M) {
                let e;
                return b[6] !== A || b[7] !== k || b[8] !== w || b[9] !== N || b[10] !== T || b[11] !== L || b[12] !== M.canNativeShare || b[13] !== M.experience || b[14] !== M.onNativeShare || b[15] !== S || b[16] !== x || b[17] !== I || b[18] !== C || b[19] !== y ? (e = (0, t.jsx)(eS, {
                    copyLabel: w,
                    copyDisabled: k,
                    isBusy: T,
                    isDownloading: L,
                    socialDestinationsDisabled: y,
                    showSocialDestinations: C,
                    onCopy: S,
                    onDownload: x,
                    additionalActions: A,
                    onSocialShare: I,
                    experience: M.experience,
                    onNativeShare: M.onNativeShare,
                    canNativeShare: M.canNativeShare,
                    country: N
                }), b[6] = A, b[7] = k, b[8] = w, b[9] = N, b[10] = T, b[11] = L, b[12] = M.canNativeShare, b[13] = M.experience, b[14] = M.onNativeShare, b[15] = S, b[16] = x, b[17] = I, b[18] = C, b[19] = y, b[20] = e) : e = b[20], e
            }
            b[21] !== P || b[22] !== L || b[23] !== x ? (r = null == x ? [] : [{
                id: "download",
                largeIcon: (0, t.jsx)(v.s, {
                    "aria-hidden": "true"
                }),
                disabled: L,
                icon: (0, t.jsx)(v.r, {}),
                label: P.formatMessage({
                    id: "chatgptConversations.shareDialog.destination.download.label",
                    defaultMessage: "Download",
                    description: "Short label below a circular button in the generated-image Share dialog. Saves the selected image, or all images in the selected series, to the user's device without creating a shared link."
                }),
                onClick: x
            }], b[21] = P, b[22] = L, b[23] = x, b[24] = r) : r = b[24];
            let H = r;
            b[25] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, t.jsx)(v.Ce, {
                "aria-hidden": "true"
            }), b[25] = o) : o = b[25], b[26] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, t.jsx)(v.Be, {}), b[26] = c) : c = b[26], b[27] !== k || b[28] !== w || b[29] !== S ? (h = {
                id: "copy",
                largeIcon: o,
                disabled: k,
                icon: c,
                label: w,
                onClick: S
            }, b[27] = k, b[28] = w, b[29] = S, b[30] = h) : h = b[30];
            let W = h;
            b[31] !== P || b[32] !== I || b[33] !== O || b[34] !== C || b[35] !== y ? (g = C ? [...O ? [function(e) {
                let {
                    disabled: a,
                    intl: i,
                    onSocialShare: s
                } = e, n = (0, t.jsx)("img", {
                    alt: "",
                    "aria-hidden": !0,
                    src: Y
                });
                return {
                    id: "line",
                    largeIcon: n,
                    disabled: a,
                    icon: n,
                    label: i.formatMessage({
                        id: "postSharingModal.line",
                        defaultMessage: "LINE",
                        description: "Short label for the LINE destination in ChatGPT conversation, message, and image sharing dialogs and menus. Selecting it opens LINE sharing so the user can choose recipients and send the shared link. Appears alongside X and LinkedIn. LINE is a messaging app brand name; keep its Latin letters and capitalization."
                    }),
                    onClick: e => s("line", e)
                }
            }({
                disabled: y,
                intl: P,
                onSocialShare: I
            })] : [], eI({
                destination: "x",
                disabled: y,
                intl: P,
                onSocialShare: I
            }), eI({
                destination: "linkedin",
                disabled: y,
                intl: P,
                onSocialShare: I
            }), ...O ? [] : [eI({
                destination: "reddit",
                disabled: y,
                intl: P,
                onSocialShare: I
            })]] : [], b[31] = P, b[32] = I, b[33] = O, b[34] = C, b[35] = y, b[36] = g) : g = b[36];
            let U = g;
            b[37] !== W || b[38] !== U || b[39] !== H ? (p = [W, ...U, ...H], b[37] = W, b[38] = U, b[39] = H, b[40] = p) : p = b[40];
            let z = p,
                B = null == A && "flex-wrap justify-center gap-x-6 gap-y-4",
                V = null != A && "gap-3",
                Q = null != A && E && "flex-wrap justify-center",
                J = null != A && !E && "justify-start overflow-x-auto sm:justify-center";
            return b[41] !== B || b[42] !== V || b[43] !== Q || b[44] !== J ? (u = (0, q.b)("flex w-full", B, V, Q, J), b[41] = B, b[42] = V, b[43] = Q, b[44] = J, b[45] = u) : u = b[45], b[46] !== z || b[47] !== T || b[48] !== L ? (m = z.map(e => {
                let {
                    id: a,
                    disabled: i,
                    icon: s,
                    largeIcon: n,
                    label: r,
                    onClick: o
                } = e, l = "copy" === a && T || "download" === a && L;
                return (0, t.jsx)(K.a, {
                    extension: "download" === a,
                    children: (0, t.jsx)(ex, {
                        "aria-label": r,
                        "data-destination": a,
                        disabled: i,
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
            }), b[46] = z, b[47] = T, b[48] = L, b[49] = m) : m = b[49], b[50] !== A || b[51] !== u || b[52] !== m ? (f = (0, t.jsxs)("div", {
                className: u,
                children: [m, A]
            }), b[50] = A, b[51] = u, b[52] = m, b[53] = f) : f = b[53], f
        }

        function eI(e) {
            let a, i, s, {
                destination: n,
                disabled: r,
                intl: o,
                onSocialShare: l
            } = e;
            switch (n) {
                case "x":
                    a = (0, t.jsx)(v.mj, {
                        "aria-hidden": "true"
                    }), i = (0, t.jsx)(v.nj, {
                        "aria-hidden": "true"
                    }), s = o.formatMessage({
                        id: "chatgptConversations.shareDialog.destination.x.label",
                        defaultMessage: "X",
                        description: "Short destination label below a circular button in a ChatGPT post sharing dialog for a conversation, response, or generated image. Selecting it opens X's post composer with the public post URL."
                    });
                    break;
                case "linkedin":
                    a = (0, t.jsx)(V.a, {
                        "aria-hidden": "true"
                    }), i = (0, t.jsx)(v.De, {
                        "aria-hidden": "true"
                    }), s = o.formatMessage({
                        id: "chatgptConversations.shareDialog.destination.linkedin.label",
                        defaultMessage: "LinkedIn",
                        description: "Short destination label below a circular button in a ChatGPT post sharing dialog for a conversation, response, or generated image. Selecting it opens LinkedIn's post composer with the public post URL."
                    });
                    break;
                case "reddit":
                    a = (0, t.jsx)(v.Ug, {
                        "aria-hidden": "true"
                    }), i = (0, t.jsx)(v.Vg, {
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
                largeIcon: i,
                label: s,
                onClick: e => l(n, e)
            }
        }

        function eM(e) {
            let a, i, n, r, o, d, h = (0, s.c)(12);
            h[0] !== e ? ({
                accountId: a,
                onClose: i,
                ...n
            } = e, h[0] = e, h[1] = a, h[2] = i, h[3] = n) : (a = h[1], i = h[2], n = h[3]);
            let g = (0, l.z)(u.f) === a;
            return h[4] !== g || h[5] !== i ? (r = () => {
                g || i()
            }, o = [g, i], h[4] = g, h[5] = i, h[6] = r, h[7] = o) : (r = h[6], o = h[7]), (0, c.useEffect)(r, o), h[8] !== g || h[9] !== i || h[10] !== n ? (d = g ? (0, t.jsx)(eL, {
                ...n,
                onClose: i
            }) : null, h[8] = g, h[9] = i, h[10] = n, h[11] = d) : d = h[11], d
        }

        function eL(e) {
            let a, i, n = (0, s.c)(9);
            return n[0] !== e.publishedShareLink?.shareLinkId || n[1] !== e.publishedWidget || n[2] !== e.responseRegion || n[3] !== e.shareSessionId || n[4] !== e.widget ? (a = null == e.widget && null == e.publishedWidget && null == e.responseRegion ? void 0 : JSON.stringify([e.widget?.attachment, e.responseRegion?.attachment, e.publishedShareLink?.shareLinkId, e.shareSessionId]), n[0] = e.publishedShareLink?.shareLinkId, n[1] = e.publishedWidget, n[2] = e.responseRegion, n[3] = e.shareSessionId, n[4] = e.widget, n[5] = a) : a = n[5], n[6] !== e || n[7] !== a ? (i = (0, t.jsx)(ej, {
                ...e
            }, a), n[6] = e, n[7] = a, n[8] = i) : i = n[8], i
        }

        function ej(e) {
            let a, i, g, m, v, w, L, W, U, z, q, K, V, Y, $, X, Q, J, Z, ee, ea, ei, et, es, en, er, eo, el, ec, ed, eh, eg, ep, eu, em, ef, eb, ev, ew, ek, eT, e_, ey, eC, eS, ex = (0, s.c)(330),
                {
                    currentNodeId: eI,
                    image: eM,
                    imagePromptTemplate: eL,
                    imageShareOptions: ej,
                    recoveryShareLink: eH,
                    publishedShareLink: eW,
                    publishedWidget: eU,
                    messageIds: ez,
                    mobileImageExperience: eB,
                    trackMobileImageShareLifecycle: eq,
                    onImageShareLinkPrepared: eK,
                    onClose: eV,
                    onResult: eY,
                    previewTurns: e$,
                    loadExpandedTurns: e0,
                    privacyNotices: e2,
                    prompt: e3,
                    receiverShareLink: e5,
                    responseRegion: e4,
                    response: e6,
                    serverConversationId: e7,
                    shareSessionId: e8,
                    source: e9,
                    title: ae,
                    widget: aa
                } = e,
                ai = (0, l.y)(_.a),
                [at, as] = (0, c.useState)(!1),
                an = (0, l.z)(null)?.data,
                ar = (0, l.z)(null),
                ao = (0, l.x)(null, e7),
                al = (0, d.a)(),
                ac = (0, c.useRef)(!1),
                ad = (0, c.useRef)(!1);
            ex[0] !== eY ? (a = () => (ac.current = !0, () => {
                ac.current = !1, queueMicrotask(() => {
                    ac.current || ad.current || (ad.current = !0, eY?.(!1))
                })
            }), i = [eY], ex[0] = eY, ex[1] = a, ex[2] = i) : (a = ex[1], i = ex[2]), (0, c.useEffect)(a, i), ex[3] !== eY ? (g = function(e) {
                ad.current || (ad.current = !0, eY?.(e))
            }, ex[3] = eY, ex[4] = g) : g = ex[4];
            let ah = g;
            ex[5] !== ah || ex[6] !== eV ? (m = function() {
                ah(!1), eV()
            }, ex[5] = ah, ex[6] = eV, ex[7] = m) : m = ex[7];
            let ag = m,
                ap = (0, c.useContext)(p.a);
            ex[8] !== eM || ex[9] !== ai || ex[10] !== e7 ? (v = null == eM ? void 0 : (0, F.a)(ai, e7, eM), ex[8] = eM, ex[9] = ai, ex[10] = e7, ex[11] = v) : v = ex[11];
            let au = v;
            ex[12] !== eL || ex[13] !== au || ex[14] !== eW || ex[15] !== e5 || ex[16] !== eH || ex[17] !== ai.queryClient ? (w = () => e5 ?? eW ?? eH ?? (null == au || null != eL ? null : ai.queryClient.getQueryData(au.queryKey) ?? null), ex[12] = eL, ex[13] = au, ex[14] = eW, ex[15] = e5, ex[16] = eH, ex[17] = ai.queryClient, ex[18] = w) : w = ex[18];
            let [am, af] = (0, c.useState)(w), [ab] = (0, c.useState)(eF), av = e8 ?? ab, [aw, ak] = (0, c.useState)("idle"), [aT, a_] = (0, c.useState)(null != eH ? "copy-failed" : null), [ay, aC] = (0, c.useState)(!1);
            ex[19] !== e7 ? (L = ["chatgpt-conversation-share", e7], ex[19] = e7, ex[20] = L) : L = ex[20];
            let aS = L,
                ax = null == eH && null == e5 && null == eW && null == e3 && null == eM && null == ez && null == e4 && null == aa;
            ex[21] !== eI || ex[22] !== e7 ? (W = () => (0, E.i)({
                conversationId: e7,
                currentNodeId: eI
            }), ex[21] = eI, ex[22] = e7, ex[23] = W) : W = ex[23], ex[24] !== aS || ex[25] !== ax || ex[26] !== W ? (U = {
                enabled: ax,
                queryFn: W,
                queryKey: aS,
                retry: !1,
                staleTime: M.b.ONE_MINUTE
            }, ex[24] = aS, ex[25] = ax, ex[26] = W, ex[27] = U) : U = ex[27];
            let {
                data: aA,
                error: aI,
                isLoading: aM
            } = (0, o.a)(U);
            ex[28] === Symbol.for("react.memo_cache_sentinel") ? (z = {
                enabled: !1,
                queryFn: eR,
                queryKey: ["accounts", "check"],
                staleTime: M.b.ONE_MINUTE
            }, ex[28] = z) : z = ex[28];
            let {
                data: aL
            } = (0, o.a)(z), aj = null != eM, aE = null != eB && aj, aP = aE || !0 === eq, aD = null != e5, aN = (eM?.additionalImages?.length ?? 0) > 0, aG = eM?.item.isAnimated === !0 && !aN;
            ex[29] !== eM || ex[30] !== e7 || ex[31] !== av ? (q = (0, j.c)((0, G.c)(e7), void 0, null != eM && null == eM.previewSrc ? av : void 0), ex[29] = eM, ex[30] = e7, ex[31] = av, ex[32] = q) : q = ex[32];
            let {
                src: aR,
                isLoading: aF
            } = (0, A.k)(null != eM && (aN || null == eM.previewSrc) ? eM.item.src ?? "" : "", q), aO = null != eM && null == eM.previewSrc && null == aR, aH = aN ? "image_series" : "single_image", aW = aa ?? eU, aU = null != ez || null != e4 || null != aW || e5?.contentType === "message", az = null != e4, aB = aW?.metadata.widgetType === "visualization", aq = aW?.metadata.widgetName === "create_interactive_poll" || aW?.metadata.widgetName === "CreateInteractivePoll", aK = null != e3 || null != eL, aV = aj || aU || aK, aY = aV || !0, a$ = "conversation";
            aB ? a$ = "widget" : null != eL ? a$ = "prompt" : aG ? a$ = "gif" : aj ? a$ = aN ? "images" : "image" : az ? a$ = "response-region" : aU ? a$ = "message" : aK && (a$ = "prompt"), ex[33] !== e2 || ex[34] !== e6 ? (K = null == e6 ? e2 : (0, E.m)(e6), ex[33] = e2, ex[34] = e6, ex[35] = K) : K = ex[35];
            let aX = K,
                aQ = aj || (!aV || aU) && aX?.hasImageReference === !0;
            ex[36] !== eM || ex[37] !== aN || ex[38] !== ae ? (V = (aN ? void 0 : eM?.item.chatGptDisplayTitle) ?? (0, D.c)(ae), ex[36] = eM, ex[37] = aN, ex[38] = ae, ex[39] = V) : V = ex[39];
            let aJ = V,
                aZ = !aV && aA?.is_public === !0 && !0 === aA.is_visible,
                a1 = aL?.accounts?.find(e => e.id === (ap?.accountId ?? aL.account_ordering?.[0])),
                a0 = a1?.structure ?? ap?.accountStructureAtLogin,
                a2 = "unknown";
            am?.isWorkspaceOnly != null ? a2 = am.isWorkspaceOnly ? "workspace" : "public" : null == aA || aj ? ("personal" === a0 || "workspace" === a0) && (a2 = "workspace" === a0 ? "workspace" : "public") : a2 = aA.share_url.includes("/share/e/") ? "workspace" : "public", ex[40] !== au?.queryKey ? (Y = au?.queryKey ?? ["disabled-chatgpt-image-share-query"], ex[40] = au?.queryKey, ex[41] = Y) : Y = ex[41], ex[42] !== au?.queryFn ? ($ = au?.queryFn ?? eG, ex[42] = au?.queryFn, ex[43] = $) : $ = ex[43];
            let a3 = aE && (0, O.a)() && null == eL && null != au && "public" === a2 && null == am;
            ex[44] !== Y || ex[45] !== $ || ex[46] !== a3 ? (X = {
                queryKey: Y,
                queryFn: $,
                enabled: a3,
                retry: !1,
                staleTime: 1 / 0
            }, ex[44] = Y, ex[45] = $, ex[46] = a3, ex[47] = X) : X = ex[47];
            let a5 = (0, o.a)(X);
            a5.data?.isWorkspaceOnly != null && (a2 = a5.data.isWorkspaceOnly ? "workspace" : "public");
            let a4 = am ?? (null == eL ? a5.data ?? null : null),
                a6 = null == eL ? a4 : null;
            ex[48] !== eK || ex[49] !== a6 ? (Q = () => {
                null != a6 && eK?.(a6)
            }, J = [eK, a6], ex[48] = eK, ex[49] = a6, ex[50] = Q, ex[51] = J) : (Q = ex[50], J = ex[51]), (0, c.useEffect)(Q, J);
            let a7 = a4?.shareLinkUrl ?? (aZ ? aA.share_url : null),
                a8 = !aV && null == a4 && aZ && aA.current_node_id !== eI,
                a9 = "workspace" === a2,
                ie = "creating" === aw,
                ia = !aV && aM;
            ex[52] !== a4 || ex[53] !== aT || ex[54] !== aI || ex[55] !== a5.error || ex[56] !== ax ? (null == (Z = aT) && ax && null == a4 && null != aI && (Z = aI instanceof E.a ? "blocked" : "create-failed"), null == Z && null != a5.error && (Z = a5.error instanceof E.a ? "blocked" : "create-failed"), ex[52] = a4, ex[53] = aT, ex[54] = aI, ex[55] = a5.error, ex[56] = ax, ex[57] = Z) : Z = ex[57];
            let ii = e1.description,
                it = e1.publicLinkAudience;
            if (aB) {
                let e;
                ex[58] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                    ...e1.widgetTitle
                }), ex[58] = e) : e = ex[58], ee = e
            } else if (aG) {
                let e;
                ex[59] !== eL ? (e = null != eL ? (0, t.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.gifWithPromptTitle",
                    defaultMessage: "Share GIF with prompt",
                    description: "Heading of the generated GIF sharing dialog when GIF with prompt is selected. Shares the animated GIF and its reusable prompt. The other option is GIF only."
                }) : (0, t.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.gifTitle",
                    defaultMessage: "Share GIF",
                    description: "Heading of the dialog for sharing one generated animated GIF. Keep GIF as the file format name."
                }), ex[59] = eL, ex[60] = e) : e = ex[60], ee = e
            } else if (null != eL) {
                let e;
                ex[61] !== eL.label ? (e = "image_with_prompt" === eL.label ? (0, t.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.imageWithPromptTitle",
                    defaultMessage: "Share image with prompt",
                    description: "Heading of the generated-image share dialog when Image with prompt is selected. Users share the generated image together with its reusable prompt so recipients can try the prompt. The other option is Image only."
                }) : (0, t.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.imagePromptTitle",
                    defaultMessage: "Share prompt with image",
                    description: "Short heading of the generated-image share dialog when Prompt with image is selected. Users share the generated image and its reusable prompt so recipients can try the prompt. The other option is Image only."
                }), ex[61] = eL.label, ex[62] = e) : e = ex[62], ee = e
            } else if (aj) {
                let e;
                ex[63] !== aJ || ex[64] !== ej || ex[65] !== aN || ex[66] !== aE ? (e = aE || null == aJ || null != ej ? (0, t.jsx)(h.a, {
                    ...aN ? e1.imagesTitle : e1.imageTitle
                }) : (0, t.jsx)(t.Fragment, {
                    children: aJ
                }), ex[63] = aJ, ex[64] = ej, ex[65] = aN, ex[66] = aE, ex[67] = e) : e = ex[67], ee = e
            } else if (aq) {
                let e;
                ex[68] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.poll.title",
                    defaultMessage: "Share poll",
                    description: "Short heading of the dialog for sharing one interactive poll. The user can create or send a link so other people can vote on the poll."
                }), ex[68] = e) : e = ex[68], ee = e
            } else if (az) {
                let e;
                ex[69] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.responseRegionTitle",
                    defaultMessage: "Share",
                    description: "Short heading of the dialog for sharing one selected section of an interactive ChatGPT response."
                }), ex[69] = e) : e = ex[69], ee = e
            } else if (aU) {
                let e;
                ex[70] !== aJ ? (e = null == aJ ? (0, t.jsx)(h.a, {
                    ...e1.messageTitle
                }) : (0, t.jsx)(t.Fragment, {
                    children: aJ
                }), ex[70] = aJ, ex[71] = e) : e = ex[71], ee = e
            } else if (aK) {
                let e;
                ex[72] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                    ...e1.promptTitle
                }), ex[72] = e) : e = ex[72], ee = e
            } else {
                if (aY) {
                    let e;
                    ex[73] !== aJ ? (e = null == aJ ? void 0 : (0, t.jsx)(t.Fragment, {
                        children: aJ
                    }), ex[73] = aJ, ex[74] = e) : e = ex[74], ee = e
                }
                a9 ? ii = e2?.isProjectConversation ? e1.workspaceProjectDescription : e1.workspaceDescription : aA?.is_anonymous === !1 ? ii = e1.attributedDescription : e2?.isProjectConversation && (ii = e1.projectDescription)
            }
            a9 && (it = aQ ? e1.workspaceImageRightsAudience : e1.workspaceLinkAudience);
            let is = "copied" === aw ? e1.copied : e1.copyLink;
            a8 ? is = e1.updateLink : null == a7 && "copied" !== aw && (is = e1.createLink), ex[75] !== al || ex[76] !== aw ? (ea = "copied" === aw ? al.formatMessage(e1.copied) : al.formatMessage(e1.copyLink), ex[75] = al, ex[76] = aw, ex[77] = ea) : ea = ex[77];
            let ir = ea;
            ex[78] !== ah || ex[79] !== al || ex[80] !== ai || ex[81] !== aa ? (ei = function(e, a) {
                let i;
                "create-failed" === a && (ah(!1), aa?.onError?.(e));
                let t = e instanceof E.a ? "blocked" : a;
                switch ("blocked" !== t && I.a.warning("chatgpt_conversation_share_failed", {
                        safe: {
                            stage: t
                        },
                        sensitive: {
                            error: e
                        }
                    }), t) {
                    case "blocked":
                        i = al.formatMessage(e1.shareBlocked);
                        break;
                    case "copy-failed":
                        i = al.formatMessage(e1.shareCopyFailed);
                        break;
                    case "create-failed":
                        i = al.formatMessage(e1.shareCreateFailed)
                }
                return a_(t), ak("idle"), ai.get(k.f).danger(i, {
                    errorAnalytics: {
                        toastId: {
                            "copy-failed": "failed_to_copy_share_link",
                            "create-failed": "failed_to_generate_share_link",
                            blocked: "chatgptConversationShareDialog.shareBlocked"
                        } [t]
                    }
                }), t
            }, ex[78] = ah, ex[79] = al, ex[80] = ai, ex[81] = aa, ex[82] = ei) : ei = ex[82];
            let io = ei;
            ex[83] !== aW || ex[84] !== aj || ex[85] !== aU || ex[86] !== aK || ex[87] !== aD || ex[88] !== az || ex[89] !== e5 || ex[90] !== e9 ? (et = aD ? "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER" : "CHATGPT_SHARE_FLOW_ACTOR_SHARER", en = aD ? "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_HEADER" : e9 ?? "CHATGPT_SHARE_FLOW_SOURCE_CONVERSATION_MENU", null != e5 ? es = e5.attachmentType : null != aW ? (es = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_WIDGET", en = "CHATGPT_SHARE_FLOW_SOURCE_WIDGET_INLINE_ACTION") : aj ? (es = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_IMAGE_SHARE", en = e9 ?? "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION") : az ? (es = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_OTHER", en = "CHATGPT_SHARE_FLOW_SOURCE_WIDGET_INLINE_ACTION") : aU ? (es = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_MESSAGE_SLICE", en = "CHATGPT_SHARE_FLOW_SOURCE_MESSAGE_INLINE_ACTION") : aK && (es = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_PROMPT", en = e9 ?? "CHATGPT_SHARE_FLOW_SOURCE_MESSAGE_INLINE_ACTION"), ex[83] = aW, ex[84] = aj, ex[85] = aU, ex[86] = aK, ex[87] = aD, ex[88] = az, ex[89] = e5, ex[90] = e9, ex[91] = et, ex[92] = es, ex[93] = en) : (et = ex[91], es = ex[92], en = ex[93]);
            let il = e5?.contentType === "message" || aV ? "CHATGPT_SHARE_FLOW_CONTENT_TYPE_POST_SLICE" : "CHATGPT_SHARE_FLOW_CONTENT_TYPE_SHARED_CONVERSATION";
            ex[94] !== a4 || ex[95] !== eI || ex[96] !== aZ || ex[97] !== aA || ex[98] !== ah || ex[99] !== eL || ex[100] !== au || ex[101] !== aV || ex[102] !== a8 || ex[103] !== ez || ex[104] !== eK || ex[105] !== e3 || ex[106] !== e4 || ex[107] !== ai || ex[108] !== e7 || ex[109] !== aS || ex[110] !== ae || ex[111] !== aa ? (er = async function(e) {
                let a;
                if (null != aa && (!ac.current || aa.isCurrent?.() === !1)) throw Error("The selected widget is no longer available");
                if (null != e4 && (!ac.current || e4.isCurrent?.() === !1)) throw Error("The selected response region is no longer available");
                let i = a4 ?? (aZ ? {
                    currentNodeId: aA.current_node_id,
                    shareLinkId: aA.share_id,
                    shareLinkUrl: aA.share_url
                } : null);
                if (null == eL && null != i && !a8) return ah(!0), i;
                if (null != eL) a = await eL.createLink(e);
                else if (null != au) a = await ai.queryClient.fetchQuery(au), eK?.(a);
                else if (null != aa) {
                    if (a = await (0, E.g)(aa.attachment, eI), !ac.current || aa.isCurrent?.() === !1) throw Error("The selected widget changed while sharing")
                } else if (null != e4) {
                    if (a = await (0, E.f)({
                            conversationId: e4.attachment.conversation_id,
                            currentNodeId: eI,
                            messageId: e4.attachment.message_id,
                            targetId: e4.attachment.target_id
                        }), !ac.current || e4.isCurrent?.() === !1) throw Error("The selected response region changed while sharing")
                } else a = null != ez ? await ai.queryClient.fetchQuery({
                    queryFn: () => (0, E.d)({
                        conversationId: e7,
                        currentNodeId: eI,
                        messageIds: ez
                    }),
                    queryKey: ["chatgpt-message-share", ai.get(u.f), e7, eI, ez],
                    staleTime: 1 / 0
                }) : null != e3 ? await ai.queryClient.fetchQuery({
                    queryFn: () => (0, E.e)({
                        conversationId: e7,
                        messageId: e3.messageId
                    }),
                    queryKey: ["chatgpt-prompt-share", e7, e3.messageId],
                    staleTime: 1 / 0
                }) : await (0, E.h)({
                    conversationId: e7,
                    currentNodeId: eI,
                    existingShareLink: aA,
                    title: ae
                });
                return af(a), ah(!0), null == aA || aV || ai.queryClient.setQueryData(aS, {
                    ...aA,
                    current_node_id: eI,
                    is_public: !0,
                    is_visible: !0
                }), a
            }, ex[94] = a4, ex[95] = eI, ex[96] = aZ, ex[97] = aA, ex[98] = ah, ex[99] = eL, ex[100] = au, ex[101] = aV, ex[102] = a8, ex[103] = ez, ex[104] = eK, ex[105] = e3, ex[106] = e4, ex[107] = ai, ex[108] = e7, ex[109] = aS, ex[110] = ae, ex[111] = aa, ex[112] = er) : er = ex[112];
            let ic = er;
            ex[113] !== et || ex[114] !== es || ex[115] !== il || ex[116] !== a4 || ex[117] !== aW?.metadata || ex[118] !== ic || ex[119] !== aZ || ex[120] !== aA || ex[121] !== eL || ex[122] !== aO || ex[123] !== aD || ex[124] !== a8 || ex[125] !== ie || ex[126] !== eV || ex[127] !== io || ex[128] !== ai || ex[129] !== e7 || ex[130] !== a7 || ex[131] !== av || ex[132] !== en || ex[133] !== aY ? (eo = async function() {
                if (ie || aO || eL?.actionsDisabled) return;
                let e = (0, N.a)(ai, {
                    actor: et,
                    attachmentType: es,
                    widgetMetadata: aW?.metadata,
                    contentType: il,
                    conversationId: aD ? void 0 : e7,
                    shareId: a4?.shareLinkId ?? (aZ ? aA.share_id : void 0),
                    shareSessionId: av,
                    source: en,
                    usedExistingLink: null != a7 && !a8
                });
                a_(null), ak("creating");
                let a = null != eL || null == a7 || a8 ? "create-failed" : "copy-failed",
                    i = a4;
                try {
                    let t, s = ic("copy"),
                        n = (0, C.c)(s.then(eN));
                    null != n && n.catch(eD);
                    let r = await s;
                    i = r, a = "copy-failed";
                    let o = r.shareLinkUrl;
                    if (null == n) t = await (0, C.b)(o);
                    else try {
                        await n, t = !0
                    } catch (e) {
                        I.a.warning("chatgpt_conversation_share_clipboard_write_failed", {
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
                        }), io(Error("Failed to copy ChatGPT conversation share link"), "copy-failed");
                        return
                    }
                    e({
                        result: "link-copied",
                        shareId: r.shareLinkId
                    }), ak("copied"), aY || ((0, y.a)(ai), eV())
                } catch (s) {
                    let t = io(s, a);
                    e("create-failed" === t ? {
                        result: t,
                        error: s
                    } : {
                        result: t,
                        shareId: i?.shareLinkId
                    })
                }
            }, ex[113] = et, ex[114] = es, ex[115] = il, ex[116] = a4, ex[117] = aW?.metadata, ex[118] = ic, ex[119] = aZ, ex[120] = aA, ex[121] = eL, ex[122] = aO, ex[123] = aD, ex[124] = a8, ex[125] = ie, ex[126] = eV, ex[127] = io, ex[128] = ai, ex[129] = e7, ex[130] = a7, ex[131] = av, ex[132] = en, ex[133] = aY, ex[134] = eo) : eo = ex[134];
            let id = eo;
            ex[135] !== es || ex[136] !== il || ex[137] !== a4 || ex[138] !== ai || ex[139] !== e7 || ex[140] !== av || ex[141] !== aP || ex[142] !== en ? (el = function(e) {
                (0, T.a)(ai, n.h, {
                    action: e,
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_SHARER",
                    attachmentType: es,
                    contentType: il,
                    conversationId: e7,
                    ...aP && null != a4 && !a4.isWorkspaceOnly ? {
                        shareId: a4.shareLinkId
                    } : {},
                    shareSessionId: av,
                    source: en,
                    sheetType: "CHATGPT_SHARE_FLOW_SHEET_TYPE_CUSTOM"
                })
            }, ex[135] = es, ex[136] = il, ex[137] = a4, ex[138] = ai, ex[139] = e7, ex[140] = av, ex[141] = aP, ex[142] = en, ex[143] = el) : el = ex[143];
            let ih = el;
            ex[144] !== a4 || ex[145] !== Z || ex[146] !== ic || ex[147] !== au || ex[148] !== al || ex[149] !== ie || ex[150] !== eV || ex[151] !== io || ex[152] !== ai || ex[153] !== e7 || ex[154] !== a2 || ex[155] !== av || ex[156] !== en ? (ec = async function() {
                if (!ie && null != au && "public" === a2 && "blocked" !== Z) {
                    a_(null), ak("creating");
                    try {
                        let e = a4 ?? await ic("copy"),
                            a = await (0, O.b)(ai, e, e7, av, en);
                        ak("idle"), "shared" === a && eV(), "failed" === a && ai.get(k.f).danger(al.formatMessage({
                            id: "chatgptConversations.mobileImageShare.nativeFailed",
                            defaultMessage: "Could not open sharing. Try again or copy the link",
                            description: "Error in the mobile image share sheet when the device cannot open native link sharing. The user can retry or use Copy link"
                        }), {
                            errorAnalytics: {
                                toastId: "chatgptConversations.mobileImageShare.nativeFailed"
                            }
                        })
                    } catch (e) {
                        io(e, "create-failed")
                    }
                }
            }, ex[144] = a4, ex[145] = Z, ex[146] = ic, ex[147] = au, ex[148] = al, ex[149] = ie, ex[150] = eV, ex[151] = io, ex[152] = ai, ex[153] = e7, ex[154] = a2, ex[155] = av, ex[156] = en, ex[157] = ec) : ec = ex[157];
            let ig = ec;
            ex[158] !== et || ex[159] !== es || ex[160] !== il || ex[161] !== a4 || ex[162] !== aJ || ex[163] !== aW?.metadata || ex[164] !== ic || ex[165] !== aZ || ex[166] !== aA || ex[167] !== eL || ex[168] !== aH || ex[169] !== al || ex[170] !== aj || ex[171] !== aO || ex[172] !== aK || ex[173] !== aD || ex[174] !== a8 || ex[175] !== ie || ex[176] !== eB?.unsupportedDestinationFallback || ex[177] !== eV || ex[178] !== io || ex[179] !== ai || ex[180] !== e7 || ex[181] !== a2 || ex[182] !== aw || ex[183] !== av || ex[184] !== aP || ex[185] !== en || ex[186] !== aE ? (ed = async function(e, a) {
                var i;
                let t;
                if (ie || aO || "public" !== a2 || eL?.actionsDisabled) return;
                a.preventDefault(), aD || aK || "line" !== (i = e) && "linkedin" !== i && "reddit" !== i && "x" !== i || (0, N.f)(ai, e, aj ? aH : void 0);
                let s = aP && aj ? e7 : void 0;
                (0, N.e)(ai, {
                    actor: et,
                    attachmentType: es,
                    conversationId: s,
                    widgetMetadata: aW?.metadata,
                    contentType: il,
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
                    shareId: a4?.shareLinkId ?? (aZ && !a8 ? aA.share_id : void 0),
                    shareSessionId: av,
                    source: en
                });
                let n = aE && (0, B.g)(e);
                if (n && eB?.unsupportedDestinationFallback === "app-store") {
                    let i = (0, r.a)() ? "android" : (0, r.c)() || (0, r.b)() ? "ios" : null,
                        t = null == i ? null : (0, B.c)(e, i);
                    if (null != t) return void(0, b.e)({
                        event: a,
                        href: t,
                        initiator: "open_in_browser_bridge",
                        openTarget: "external-browser"
                    })
                }
                let o = null != a4 && null == eL || "messages" === e || n ? null : window.open("", "_blank");
                null != o && (o.opener = null), a_(null), ak("creating");
                try {
                    t = await ic("social")
                } catch (e) {
                    o?.close(), e instanceof E.a || (0, N.d)(ai, {
                        actor: et,
                        attachmentType: es,
                        conversationId: s,
                        widgetMetadata: aW?.metadata,
                        contentType: il,
                        shareSessionId: av,
                        source: en
                    }), io(e, "create-failed");
                    return
                }
                if (!0 === t.isWorkspaceOnly) {
                    o?.close(), ak(aw);
                    return
                }
                if (n) {
                    let e = await (0, O.b)(ai, t, e7, av, en);
                    ak(aw), "shared" === e ? eV() : "failed" === e && ai.get(k.f).danger(al.formatMessage({
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
                let l = (0, B.d)({
                    destination: e,
                    isAppleDevice: (0, r.c)() || (0, r.b)(),
                    shareUrl: t.shareLinkUrl,
                    title: t.title ?? aJ
                });
                if (null == l) {
                    o?.close(), ak(aw);
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
                }), ak(aw)
            }, ex[158] = et, ex[159] = es, ex[160] = il, ex[161] = a4, ex[162] = aJ, ex[163] = aW?.metadata, ex[164] = ic, ex[165] = aZ, ex[166] = aA, ex[167] = eL, ex[168] = aH, ex[169] = al, ex[170] = aj, ex[171] = aO, ex[172] = aK, ex[173] = aD, ex[174] = a8, ex[175] = ie, ex[176] = eB?.unsupportedDestinationFallback, ex[177] = eV, ex[178] = io, ex[179] = ai, ex[180] = e7, ex[181] = a2, ex[182] = aw, ex[183] = av, ex[184] = aP, ex[185] = en, ex[186] = aE, ex[187] = ed) : ed = ex[187];
            let ip = ed;
            ex[188] !== eM || ex[189] !== aH || ex[190] !== al || ex[191] !== ay || ex[192] !== aN || ex[193] !== aO || ex[194] !== ih || ex[195] !== ai || ex[196] !== e7 ? (eh = async function() {
                if (null == eM || ay || aO) return;
                (0, N.f)(ai, "download", aH);
                let e = [eM.item, ...eM.additionalImages ?? []].filter(eP);
                0 !== e.length && ((0, H.b)(ai, {
                    image: eM.downloadAnalyticsImage ?? eM.item,
                    conversationId: e7,
                    entryPoint: "CHATGPT_IMAGE_DOWNLOAD_ENTRY_POINT_CUSTOM_SHARE_SHEET",
                    downloadScope: aN ? "CHATGPT_IMAGE_DOWNLOAD_SCOPE_SERIES" : "CHATGPT_IMAGE_DOWNLOAD_SCOPE_SINGLE",
                    requestedImageCount: e.length,
                    isParagen: eM.downloadIsParagen
                }), aC(!0), ih("CHATGPT_SHARE_FLOW_ACTION_DOWNLOAD_SELECTED"), await (0, R.a)(ai, {
                    images: e,
                    intl: al,
                    serverConversationId: (0, G.c)(e7),
                    logIndividualDownloads: !1
                }).then(e => {
                    "downloaded" === e && (0, H.e)(ai, e7, eM.item)
                }).finally(() => {
                    aC(!1)
                }))
            }, ex[188] = eM, ex[189] = aH, ex[190] = al, ex[191] = ay, ex[192] = aN, ex[193] = aO, ex[194] = ih, ex[195] = ai, ex[196] = e7, ex[197] = eh) : eh = ex[197];
            let iu = eh;
            ex[198] !== eM?.additionalImages?.length || ex[199] !== aN ? (eg = aN ? (0, t.jsx)(h.a, {
                id: "chatgptConversations.shareDialog.imageSeriesCount",
                defaultMessage: "Sharing {imageCount} images together",
                description: "Subtitle beneath the generated-image share modal title after choosing to share a series. imageCount is the number of images included in the link, always greater than one. This informs the user that all listed images are shared together.",
                values: {
                    imageCount: 1 + (eM?.additionalImages?.length ?? 0)
                }
            }) : void 0, ex[198] = eM?.additionalImages?.length, ex[199] = aN, ex[200] = eg) : eg = ex[200];
            let im = eg,
                ib = im;
            if (!aN && !aY) {
                let e;
                ex[201] !== ii ? (e = (0, t.jsx)(h.a, {
                    ...ii
                }), ex[201] = ii, ex[202] = e) : e = ex[202], ib = e
            }
            if (null != eL) {
                let e;
                ex[203] !== aE ? (e = aE ? (0, t.jsx)(h.a, {
                    id: "imagePromptShare.audience",
                    defaultMessage: "Anyone with the link can try this prompt",
                    description: "Audience description when sharing a generated image as a reusable prompt template"
                }) : void 0, ex[203] = aE, ex[204] = e) : e = ex[204], ib = e
            } else if (aE) {
                let e, a, i;
                ex[205] !== a2 ? (e = "public" === a2 ? (0, t.jsx)(h.a, {
                    id: "chatgptConversations.mobileImageShare.publicAudience",
                    defaultMessage: "Anyone with the link can view",
                    description: "Audience disclosure in the mobile generated-image share sheet for a public link"
                }) : null, ex[205] = a2, ex[206] = e) : e = ex[206], ex[207] !== a2 ? (a = "public" !== a2 && (0, t.jsx)(h.a, {
                    id: "chatgptConversations.mobileImageShare.workspaceAudience",
                    defaultMessage: "Only workspace members with the link can view",
                    description: "Audience disclosure below Share image in the mobile image share sheet for a workspace account"
                }), ex[207] = a2, ex[208] = a) : a = ex[208], ex[209] !== e || ex[210] !== a ? (i = (0, t.jsxs)(t.Fragment, {
                    children: [e, a]
                }), ex[209] = e, ex[210] = a, ex[211] = i) : i = ex[211], ib = i
            }
            if (aE ? ep = "responsiveSheet" : aY && (ep = "share"), aE && (eu = eB?.layout === "two-rows" ? "imageSheetTwoRows" : "imageSheet"), null != eL) {
                let e;
                if (ex[212] !== eM?.previewSrc || ex[213] !== eL || ex[214] !== ie || ex[215] !== aR) {
                    let a;
                    ex[217] === Symbol.for("react.memo_cache_sentinel") ? (a = () => {
                        a_(null), ak("idle")
                    }, ex[217] = a) : a = ex[217], e = eL.preview(ie, eM?.previewSrc ?? aR ?? null, a), ex[212] = eM?.previewSrc, ex[213] = eL, ex[214] = ie, ex[215] = aR, ex[216] = e
                } else e = ex[216];
                em = e
            } else {
                let e;
                ex[218] !== aW || ex[219] !== eM || ex[220] !== eu || ex[221] !== al || ex[222] !== aF || ex[223] !== aN || ex[224] !== aB || ex[225] !== e0 || ex[226] !== e$ || ex[227] !== e3 || ex[228] !== aR || ex[229] !== e6 || ex[230] !== e4 || ex[231] !== e7 || ex[232] !== av || ex[233] !== aE ? (e = null != eM ? (0, t.jsx)(x.b, {
                    ariaLabel: aN ? al.formatMessage(e1.imagesPreview) : eM.alt,
                    expandedContent: (0, t.jsxs)("div", {
                        className: "flex flex-col gap-4",
                        children: [(0, t.jsx)(eQ, {
                            src: aN ? aR : eM.previewSrc ?? aR,
                            isLoading: aF,
                            alt: eM.alt
                        }), eM.additionalPublishedPreviewUrls?.map(eE), eM.additionalImages?.map(e => (0, t.jsx)(eX, {
                            item: e,
                            serverConversationId: e7
                        }, e.id))]
                    }),
                    variant: "image",
                    classicImagePreviewEligible: !aN && !aE,
                    presentation: eu,
                    children: aN || null == eM.previewSrc ? (0, t.jsx)(eQ, {
                        src: aR,
                        isLoading: aF
                    }) : (0, t.jsx)("img", {
                        alt: eM.alt,
                        className: aE ? void 0 : "block size-full object-contain",
                        referrerPolicy: "no-referrer",
                        src: eM.previewSrc
                    })
                }) : (0, t.jsxs)(t.Fragment, {
                    children: [e4?.preview != null && (0, t.jsx)(x.b, {
                        ariaLabel: al.formatMessage({
                            id: "chatgptConversations.shareDialog.responseRegionPreviewLabel",
                            defaultMessage: "Preview of the shared content",
                            description: "Accessible description of the selected interactive-response section shown in the response-region sharing dialog."
                        }),
                        expandedContent: (0, t.jsx)("fieldset", {
                            disabled: !0,
                            children: e4.preview
                        }),
                        variant: "response",
                        children: e4.preview
                    }), null == e4 && aW?.preview != null && aB && (0, t.jsx)(x.b, {
                        ariaLabel: al.formatMessage({
                            id: "shareDialog.widget.previewLabel",
                            defaultMessage: "Preview of the shared widget",
                            description: "Accessible description of the non-interactive selected-widget preview in a ChatGPT widget sharing dialog."
                        }),
                        expandedContent: (0, t.jsx)("fieldset", {
                            disabled: !0,
                            children: aW.preview
                        }),
                        variant: "response",
                        children: aW.preview
                    }), null == e4 && aW?.preview != null && !aB && (0, t.jsx)(x.b, {
                        expandedContent: (0, t.jsx)("fieldset", {
                            disabled: !0,
                            children: aW.preview
                        }),
                        variant: "response",
                        children: aW.preview
                    }), null == e4 && null == aW && (0, t.jsx)(P.b, {
                        prompt: e3,
                        response: e6,
                        serverConversationId: e7,
                        expandedHistory: e0 && {
                            load: e0,
                            sessionId: av
                        },
                        turns: e$
                    })]
                }), ex[218] = aW, ex[219] = eM, ex[220] = eu, ex[221] = al, ex[222] = aF, ex[223] = aN, ex[224] = aB, ex[225] = e0, ex[226] = e$, ex[227] = e3, ex[228] = aR, ex[229] = e6, ex[230] = e4, ex[231] = e7, ex[232] = av, ex[233] = aE, ex[234] = e) : e = ex[234], em = e
            }
            if (aE) {
                let e, a, i;
                ex[235] !== eL || ex[236] !== em ? (e = null == eL ? em : (0, t.jsx)("div", {
                    className: "px-6",
                    children: em
                }), ex[235] = eL, ex[236] = em, ex[237] = e) : e = ex[237], ex[238] !== im ? (a = null != im && (0, t.jsx)("p", {
                    className: "mt-3 text-center text-sm text-secondary",
                    children: im
                }), ex[238] = im, ex[239] = a) : a = ex[239], ex[240] !== e || ex[241] !== a ? (i = (0, t.jsxs)(t.Fragment, {
                    children: [e, a]
                }), ex[240] = e, ex[241] = a, ex[242] = i) : i = ex[242], em = i
            }
            ex[243] !== it || ex[244] !== aY ? (ef = aY ? void 0 : (0, t.jsx)(h.a, {
                ...it
            }), ex[243] = it, ex[244] = aY, ex[245] = ef) : ef = ex[245], ex[246] !== is ? (eb = (0, t.jsx)(h.a, {
                ...is
            }), ex[246] = is, ex[247] = eb) : eb = ex[247];
            let iv = eL?.actionsDisabled || ia || aO || "blocked" === Z,
                iw = ie || ia || at,
                ik = !aY && ie;
            ex[248] !== ih || ex[249] !== aP || ex[250] !== aY ? (ev = aY ? e => {
                aP && ih("CHATGPT_SHARE_FLOW_ACTION_SHEET_PRESENTED"), e.preventDefault(), e.currentTarget instanceof HTMLElement && e.currentTarget.focus()
            } : void 0, ex[248] = ih, ex[249] = aP, ex[250] = aY, ex[251] = ev) : ev = ex[251];
            let iT = aE ? "imageSheet" : void 0,
                i_ = aE && eB?.layout === "two-rows";
            ex[252] !== ao || ex[253] !== an || ex[254] !== ar || ex[255] !== a4 || ex[256] !== eI || ex[257] !== Z || ex[258] !== iu || ex[259] !== ig || ex[260] !== ip || ex[261] !== eM || ex[262] !== eL || ex[263] !== aH || ex[264] !== ay || ex[265] !== ia || ex[266] !== aj || ex[267] !== aO || ex[268] !== at || ex[269] !== aV || ex[270] !== aK || ex[271] !== aD || ex[272] !== ie || ex[273] !== ez || ex[274] !== eB || ex[275] !== eV || ex[276] !== e3 || ex[277] !== e5 || ex[278] !== ir || ex[279] !== aR || ex[280] !== ai || ex[281] !== e7 || ex[282] !== a2 || ex[283] !== aE || ex[284] !== aY || ex[285] !== aa ? (ew = aY ? (0, t.jsx)(t.Fragment, {
                children: (0, t.jsx)(eA, {
                    mobileImageActions: aE && null != eB ? {
                        experience: eB,
                        canNativeShare: "public" === a2 && null != a4 && (0, O.a)(a4?.shareLinkUrl),
                        onNativeShare: () => {
                            ig()
                        }
                    } : void 0,
                    copyLabel: ir,
                    copyDisabled: eL?.actionsDisabled || ia || ie || aO || "blocked" === Z,
                    isBusy: ie || ia || at,
                    isDownloading: ay,
                    socialDestinationsDisabled: eL?.actionsDisabled || ia || ie || aO || "public" !== a2 || "blocked" === Z,
                    showSocialDestinations: "public" === a2,
                    additionalActions: void 0,
                    onDownload: null != eL || null == eM || aO ? void 0 : () => {
                        iu()
                    },
                    onCopy: () => {
                        aD || aK || (0, N.f)(ai, "copy", aj ? aH : void 0)
                    },
                    onSocialShare: (e, a) => {
                        ip(e, a)
                    }
                })
            }) : void 0, ex[252] = ao, ex[253] = an, ex[254] = ar, ex[255] = a4, ex[256] = eI, ex[257] = Z, ex[258] = iu, ex[259] = ig, ex[260] = ip, ex[261] = eM, ex[262] = eL, ex[263] = aH, ex[264] = ay, ex[265] = ia, ex[266] = aj, ex[267] = aO, ex[268] = at, ex[269] = aV, ex[270] = aK, ex[271] = aD, ex[272] = ie, ex[273] = ez, ex[274] = eB, ex[275] = eV, ex[276] = e3, ex[277] = e5, ex[278] = ir, ex[279] = aR, ex[280] = ai, ex[281] = e7, ex[282] = a2, ex[283] = aE, ex[284] = aY, ex[285] = aa, ex[286] = ew) : ew = ex[286], ex[287] !== ej || ex[288] !== aq || ex[289] !== ie || ex[290] !== a$ || ex[291] !== a2 || ex[292] !== aQ || ex[293] !== aE || ex[294] !== aY ? (ek = aY ? (0, t.jsxs)(t.Fragment, {
                children: [null != ej && (aE ? (0, t.jsx)("div", {
                    className: "px-6",
                    children: ej(ie)
                }) : (0, t.jsx)(f.e, {
                    className: "pt-5",
                    children: ej(ie)
                })), !aE && (0, t.jsx)(eO, {
                    audience: a2,
                    contentType: a$,
                    isPoll: aq,
                    showImageRightsNotice: aQ
                })]
            }) : void 0, ex[287] = ej, ex[288] = aq, ex[289] = ie, ex[290] = a$, ex[291] = a2, ex[292] = aQ, ex[293] = aE, ex[294] = aY, ex[295] = ek) : ek = ex[295], ex[296] !== Z || ex[297] !== eL || ex[298] !== a7 ? (eT = null == Z ? void 0 : {
                content: (0, t.jsx)(eZ, {
                    error: Z
                }),
                copyUrl: "copy-failed" === Z ? a7 : void 0,
                preventsSharing: "blocked" === Z && null == eL
            }, ex[296] = Z, ex[297] = eL, ex[298] = a7, ex[299] = eT) : eT = ex[299];
            let iy = aQ && !a9 && !aj,
                iC = !aV || aU;
            return ex[300] !== aX || ex[301] !== iy || ex[302] !== iC ? (e_ = (0, t.jsx)(eJ, {
                showImageRightsNotice: iy,
                showContentNotices: iC,
                privacyNotices: aX
            }), ex[300] = aX, ex[301] = iy, ex[302] = iC, ex[303] = e_) : e_ = ex[303], ex[304] !== ag || ex[305] !== ih || ex[306] !== aP ? (ey = () => {
                aP && ih("CHATGPT_SHARE_FLOW_ACTION_DISMISSED"), ag()
            }, ex[304] = ag, ex[305] = ih, ex[306] = aP, ex[307] = ey) : ey = ex[307], ex[308] !== id ? (eC = () => {
                id()
            }, ex[308] = id, ex[309] = eC) : eC = ex[309], ex[310] !== ep || ex[311] !== ee || ex[312] !== aJ || ex[313] !== em || ex[314] !== ib || ex[315] !== ef || ex[316] !== eb || ex[317] !== iv || ex[318] !== iw || ex[319] !== ik || ex[320] !== ev || ex[321] !== iT || ex[322] !== i_ || ex[323] !== ew || ex[324] !== ek || ex[325] !== eT || ex[326] !== e_ || ex[327] !== ey || ex[328] !== eC ? (eS = (0, t.jsx)(S.a, {
                threadTitle: aJ,
                title: ee,
                subtitle: ib,
                audience: ef,
                actionLabel: eb,
                actionDisabled: iv,
                isBusy: iw,
                isDismissalDisabled: ik,
                onOpenAutoFocus: ev,
                size: ep,
                presentation: iT,
                compactImageSheetFooter: i_,
                footer: ew,
                preview: em,
                info: ek,
                error: eT,
                notices: e_,
                onClose: ey,
                onSubmit: eC
            }), ex[310] = ep, ex[311] = ee, ex[312] = aJ, ex[313] = em, ex[314] = ib, ex[315] = ef, ex[316] = eb, ex[317] = iv, ex[318] = iw, ex[319] = ik, ex[320] = ev, ex[321] = iT, ex[322] = i_, ex[323] = ew, ex[324] = ek, ex[325] = eT, ex[326] = e_, ex[327] = ey, ex[328] = eC, ex[329] = eS) : eS = ex[329], eS
        }

        function eE(e) {
            return (0, t.jsx)(eQ, {
                src: e,
                isLoading: !1
            }, e)
        }

        function eP(e) {
            return null != e.src && "completed" === e.status && !e.isPreview
        }

        function eD() {}

        function eN(e) {
            let {
                shareLinkUrl: a
            } = e;
            return a
        }
        async function eG() {
            throw Error("Image share is unavailable")
        }

        function eR() {
            return L.CodexRequest.safeGet("/wham/accounts/check")
        }

        function eF() {
            return crypto.randomUUID()
        }

        function eO(e) {
            let a, i, n, r, o, l, c, d = (0, s.c)(58),
                {
                    audience: g,
                    contentType: p,
                    isPoll: u,
                    showImageRightsNotice: m
                } = e,
                b = "workspace" === g ? v.Me : v.Td;
            if ("workspace" === g) {
                let e, s;
                if (m) {
                    let a;
                    d[0] !== p ? (a = (0, t.jsx)(h.a, {
                        id: "chatgptConversations.shareDialog.workspaceMediaRightsAudienceWithLearnMore",
                        defaultMessage: "Links are visible to workspace members only. {contentType, select, gif {Confirm you have the rights to share this GIF.} images {Confirm you have the rights to share these images.} other {Confirm you have the rights to share this image.}} {contentType, select, conversation {Memory sources won't be shared with viewers. } other {}}<learnMore>Learn more</learnMore>",
                        description: "Audience and image-rights reminder for workspace sharing in merged web. Only workspace members can view the link. contentType is gif for one animated GIF, images for a generated-image series, image for one still image, message, or conversation. For a conversation, underlying Memory sources stay private. The learnMore tag links to shared-links help. All sentences appear in one paragraph.",
                        values: {
                            contentType: p,
                            learnMore: e$
                        }
                    }), d[0] = p, d[1] = a) : a = d[1], e = a
                } else if ("conversation" === p) {
                    let a;
                    d[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, t.jsx)(h.a, {
                        id: "chatgptConversations.shareDialog.workspaceConversationMemoryDisclosure",
                        defaultMessage: "Links are visible to workspace members only. Memory sources won't be shared with viewers. <learnMore>Learn more</learnMore>",
                        description: "Audience and privacy explanation in the merged-web workspace conversation sharing dialog. Shared links are restricted to workspace members and do not give viewers access to underlying Memory sources. The learnMore tag links to shared-links help.",
                        values: {
                            learnMore: eY
                        }
                    }), d[2] = a) : a = d[2], e = a
                } else {
                    let a;
                    d[3] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, t.jsx)(h.a, {
                        ...e1.workspaceLinksVisibleWithLearnMore,
                        values: {
                            learnMore: eV
                        }
                    }), d[3] = a) : a = d[3], e = a
                }
                if (d[4] !== e ? (s = (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)(t.Fragment, {
                            children: e
                        }), null]
                    }), d[4] = e, d[5] = s) : s = d[5], i = s, "widget" === p) {
                    let e;
                    d[6] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...e1.shareLinkToWidget
                    }), d[6] = e) : e = d[6], a = e
                } else if ("images" === p) {
                    let e;
                    d[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...e1.shareLinkToImages
                    }), d[7] = e) : e = d[7], a = e
                } else if ("gif" === p) {
                    let e;
                    d[8] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...e1.shareLinkToGif
                    }), d[8] = e) : e = d[8], a = e
                } else if ("image" === p) {
                    let e;
                    d[9] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...e1.shareLinkToImage
                    }), d[9] = e) : e = d[9], a = e
                } else if ("response-region" === p) {
                    let e;
                    d[10] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        id: "chatgptConversations.shareDialog.responseRegion.workspaceTitle",
                        defaultMessage: "Share a link to this content",
                        description: "Heading below the selected response-region preview when its link is restricted to workspace members."
                    }), d[10] = e) : e = d[10], a = e
                } else if ("message" === p) {
                    let e;
                    d[11] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...e1.shareLinkToMessage
                    }), d[11] = e) : e = d[11], a = e
                } else if ("prompt" === p) {
                    let e;
                    d[12] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...e1.shareLinkToPrompt
                    }), d[12] = e) : e = d[12], a = e
                } else {
                    let e;
                    d[13] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...e1.shareLinkToConversation
                    }), d[13] = e) : e = d[13], a = e
                }
            } else if ("unknown" === g) {
                if ("images" === p) {
                    let e;
                    d[14] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        id: "chatgptConversations.shareDialog.imagesRightsDisclaimer",
                        defaultMessage: "Confirm you have the rights to share these images.",
                        description: "Legal-permission reminder below the heading when sharing a generated-image series before the link audience is known. Asks the user to confirm permission to share every selected image. Shown as a standalone notice."
                    }), d[14] = e) : e = d[14], i = e
                } else if ("gif" === p) {
                    let e;
                    d[15] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        id: "chatgptConversations.shareDialog.gifLicenseDisclaimer",
                        defaultMessage: "Confirm you have the rights to share this GIF",
                        description: "Legal-permission reminder in the generated GIF sharing dialog before the link audience is known. Asks the user to confirm permission to share the animated GIF."
                    }), d[15] = e) : e = d[15], i = e
                } else if ("image" === p) {
                    let e;
                    d[16] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...e1.imageLicenseDisclaimer
                    }), d[16] = e) : e = d[16], i = e
                }
                if ("widget" === p) {
                    let e;
                    d[17] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...e1.shareLinkToWidget
                    }), d[17] = e) : e = d[17], a = e
                } else if ("images" === p) {
                    let e;
                    d[18] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...e1.shareLinkToImages
                    }), d[18] = e) : e = d[18], a = e
                } else if ("gif" === p) {
                    let e;
                    d[19] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...e1.shareLinkToGif
                    }), d[19] = e) : e = d[19], a = e
                } else if ("image" === p) {
                    let e;
                    d[20] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...e1.shareLinkToImage
                    }), d[20] = e) : e = d[20], a = e
                } else if ("response-region" === p) {
                    let e;
                    d[21] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        id: "chatgptConversations.shareDialog.responseRegion.unknownAudienceTitle",
                        defaultMessage: "Share a link to this content",
                        description: "Heading below a selected response-region preview before the link audience is known."
                    }), d[21] = e) : e = d[21], a = e
                } else if ("message" === p) {
                    let e;
                    d[22] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...e1.shareLinkToMessage
                    }), d[22] = e) : e = d[22], a = e
                } else if ("prompt" === p) {
                    let e;
                    d[23] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...e1.shareLinkToPrompt
                    }), d[23] = e) : e = d[23], a = e
                } else {
                    let e;
                    d[24] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...e1.shareLinkToConversation
                    }), d[24] = e) : e = d[24], a = e
                }
            } else if ("widget" === p) {
                let e, s;
                d[25] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                    ...e1.sharePublicLinkToWidget
                }), d[25] = e) : e = d[25], a = e, d[26] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(t.Fragment, {
                        children: (0, t.jsx)(h.a, {
                            id: "chatgptConversations.widgetShare.publicAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access this widget. <learnMore>Learn more</learnMore>",
                            description: "Audience explanation when sharing a generated Recharts widget. The learnMore tag links to shared-links help in merged web.",
                            values: {
                                learnMore: eK
                            }
                        })
                    }), null]
                }), d[26] = s) : s = d[26], i = s
            } else if ("images" === p) {
                let e, s;
                d[27] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                    ...e1.sharePublicLinkToImages
                }), d[27] = e) : e = d[27], a = e, d[28] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(t.Fragment, {
                        children: (0, t.jsx)(h.a, {
                            id: "chatgptConversations.shareDialog.imagesPublicLinkAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access these images. Confirm you have the rights to share these images. <learnMore>Learn more</learnMore>",
                            description: "Audience and legal-permission reminder when sharing all images from one generation. Anyone with the link can view the images; the user must have permission to share them. The learnMore tag links to shared-links help in merged web. All sentences appear in one paragraph.",
                            values: {
                                learnMore: eq
                            }
                        })
                    }), null]
                }), d[28] = s) : s = d[28], i = s
            } else if ("gif" === p) {
                let e, s;
                d[29] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.sharePublicLinkToGif",
                    defaultMessage: "Share a public link to this GIF",
                    description: "Info heading in the generated GIF sharing dialog for a personal account. Anyone with the link can view the animated GIF."
                }), d[29] = e) : e = d[29], a = e, d[30] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, t.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.gifPublicLinkAudienceWithLearnMore",
                    defaultMessage: "Anyone with this link can access this GIF. Confirm you have the rights to share this GIF. <learnMore>Learn more</learnMore>",
                    description: "Audience and legal-permission reminder in the generated GIF sharing dialog. Anyone with the link can view the animation, and the user must have permission to share it. The learnMore tag links to shared-links help.",
                    values: {
                        learnMore: eB
                    }
                }), d[30] = s) : s = d[30], i = s
            } else if ("image" === p) {
                let e, s;
                d[31] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                    ...e1.sharePublicLinkToImage
                }), d[31] = e) : e = d[31], a = e, d[32] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(t.Fragment, {
                        children: (0, t.jsx)(h.a, {
                            id: "chatgptConversations.shareDialog.imagePublicLinkAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access this image. Confirm you have the rights to share this image. <learnMore>Learn more</learnMore>",
                            description: "Audience and legal-permission reminder when sharing an image. Anyone with the link can view the image; the user must have permission to share it. The learnMore tag links to shared-links help in merged web. All sentences appear in one paragraph.",
                            values: {
                                learnMore: ez
                            }
                        })
                    }), null]
                }), d[32] = s) : s = d[32], i = s
            } else if ("response-region" === p) {
                let e, s;
                d[33] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.responseRegion.publicTitle",
                    defaultMessage: "Share a public link to this content",
                    description: "Heading below the selected response-region preview when anyone with the link can view it."
                }), d[33] = e) : e = d[33], a = e, d[34] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, t.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.responseRegion.publicAudience",
                    defaultMessage: "Anyone with this link can access this content.",
                    description: "Audience explanation below the selected response-region preview for a public link."
                }), d[34] = s) : s = d[34], i = s
            } else if ("message" === p) {
                let e, s;
                d[35] !== u ? (e = u ? (0, t.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.poll.publicLinkTitle",
                    defaultMessage: "Share a public link to this poll",
                    description: "Heading below the poll preview in the public sharing dialog. Tells the person sharing that the link opens this interactive voting poll. Workspace-restricted links use a separate disclosure."
                }) : (0, t.jsx)(h.a, {
                    ...e1.sharePublicLinkToMessage
                }), d[35] = u, d[36] = e) : e = d[36], a = e, d[37] !== u ? (s = (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(t.Fragment, {
                        children: u ? (0, t.jsx)(h.a, {
                            id: "chatgptConversations.shareDialog.poll.publicAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access and vote on this poll. <learnMore>Learn more</learnMore>",
                            description: "Explanation below a public poll link preview in the web sharing dialog. Tells the person sharing that link recipients can open the poll and vote. The learnMore tag links to shared-links help.",
                            values: {
                                learnMore: eU
                            }
                        }) : (0, t.jsx)(h.a, {
                            id: "chatgptConversations.shareDialog.messagePublicLinkAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access this message. <learnMore>Learn more</learnMore>",
                            description: "Audience explanation when sharing a response. The learnMore tag links to shared-links help in merged web.",
                            values: {
                                learnMore: eW
                            }
                        })
                    }), null]
                }), d[37] = u, d[38] = s) : s = d[38], i = s
            } else if ("prompt" === p) {
                let e, s;
                d[39] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.prompt.info.title.public",
                    defaultMessage: "Share a public link to this prompt",
                    description: "Heading below the prompt preview in the ChatGPT sharing dialog for a personal account. It introduces the public link and social sharing actions for the selected user prompt."
                }), d[39] = e) : e = d[39], a = e, d[40] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(t.Fragment, {
                        children: (0, t.jsx)(h.a, {
                            id: "chatgptConversations.shareDialog.prompt.info.description.publicWithLearnMore",
                            defaultMessage: "Anyone with this link can access this prompt. <learnMore>Learn more</learnMore>",
                            description: "Audience explanation below the public-link heading in the ChatGPT prompt sharing dialog on web. Only the selected prompt is shared. The learnMore tag links to shared-links help.",
                            values: {
                                learnMore: eH
                            }
                        })
                    }), null]
                }), d[40] = s) : s = d[40], i = s
            } else {
                let e, s;
                d[41] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                    ...e1.sharePublicLinkToConversation
                }), d[41] = e) : e = d[41], a = e, d[42] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, t.jsx)(U, {
                    includeConversationAudience: !0
                }), d[42] = s) : s = d[42], i = s
            }
            return d[43] !== b || d[44] !== g ? (n = "unknown" === g ? null : (0, t.jsx)(b, {
                className: "public" === g ? "relative -start-px" : void 0,
                "aria-hidden": "true"
            }), d[43] = b, d[44] = g, d[45] = n) : n = d[45], d[46] !== n || d[47] !== a ? (r = (0, t.jsxs)("div", {
                className: "flex items-center gap-1 text-xs leading-4 font-bold text-default",
                children: [n, a]
            }), d[46] = n, d[47] = a, d[48] = r) : r = d[48], d[49] !== i ? (o = null == i ? null : (0, t.jsx)("div", {
                className: "mt-1.5 text-xs leading-4 text-codex-description browser:text-secondary",
                children: i
            }), d[49] = i, d[50] = o) : o = d[50], d[51] !== g || d[52] !== p ? (l = "unknown" === g && "conversation" === p ? (0, t.jsx)(t.Fragment, {
                children: (0, t.jsx)("div", {
                    className: "mt-1.5 text-xs leading-4 text-secondary",
                    children: (0, t.jsx)(U, {})
                })
            }) : null, d[51] = g, d[52] = p, d[53] = l) : l = d[53], d[54] !== r || d[55] !== o || d[56] !== l ? (c = (0, t.jsx)(f.e, {
                spacing: "large",
                children: (0, t.jsxs)("div", {
                    className: "w-full text-start select-none",
                    children: [r, o, l]
                })
            }), d[54] = r, d[55] = o, d[56] = l, d[57] = c) : c = d[57], c
        }

        function eH(e) {
            return (0, t.jsx)(z, {
                children: e
            })
        }

        function eW(e) {
            return (0, t.jsx)(z, {
                children: e
            })
        }

        function eU(e) {
            return (0, t.jsx)(z, {
                children: e
            })
        }

        function ez(e) {
            return (0, t.jsx)(z, {
                children: e
            })
        }

        function eB(e) {
            return (0, t.jsx)(z, {
                children: e
            })
        }

        function eq(e) {
            return (0, t.jsx)(z, {
                children: e
            })
        }

        function eK(e) {
            return (0, t.jsx)(z, {
                children: e
            }, "learn-more")
        }

        function eV(e) {
            return (0, t.jsx)(z, {
                children: e
            })
        }

        function eY(e) {
            return (0, t.jsx)(z, {
                children: e
            })
        }

        function e$(e) {
            return (0, t.jsx)(z, {
                children: e
            })
        }

        function eX(e) {
            let a, i, n = (0, s.c)(5),
                {
                    item: r,
                    serverConversationId: o
                } = e;
            n[0] !== o ? (a = (0, j.c)((0, G.c)(o)), n[0] = o, n[1] = a) : a = n[1];
            let {
                src: l,
                isLoading: c
            } = (0, A.k)(r.src ?? "", a);
            return n[2] !== c || n[3] !== l ? (i = (0, t.jsx)(eQ, {
                src: l,
                isLoading: c
            }), n[2] = c, n[3] = l, n[4] = i) : i = n[4], i
        }

        function eQ(e) {
            let a, i = (0, s.c)(5),
                {
                    alt: n,
                    src: r,
                    isLoading: o
                } = e,
                l = void 0 === n ? "" : n;
            if (null != r) {
                let e;
                return i[0] !== l || i[1] !== r ? (e = (0, t.jsx)("img", {
                    alt: l,
                    className: "block size-full object-contain",
                    referrerPolicy: "no-referrer",
                    src: r
                }), i[0] = l, i[1] = r, i[2] = e) : e = i[2], e
            }
            return i[3] !== o ? (a = (0, t.jsx)("div", {
                className: "flex h-full items-center justify-center gap-2 text-sm text-secondary",
                children: o ? (0, t.jsx)(w.a, {
                    className: "icon-sm"
                }) : (0, t.jsx)(h.a, {
                    ...e1.imageUnavailable
                })
            }), i[3] = o, i[4] = a) : a = i[4], a
        }

        function eJ(e) {
            let a, i, n, r, o, l = (0, s.c)(16),
                {
                    showImageRightsNotice: c,
                    showContentNotices: d,
                    privacyNotices: g
                } = e;
            return l[0] !== g?.hasUnsupportedCodeInterpreterContent || l[1] !== d ? (a = d && g?.hasUnsupportedCodeInterpreterContent ? (0, t.jsx)(f.e, {
                children: (0, t.jsx)(m.a, {
                    content: (0, t.jsx)(h.a, {
                        ...e1.filesNotShared
                    }),
                    variant: "privacyNotice"
                })
            }) : null, l[0] = g?.hasUnsupportedCodeInterpreterContent, l[1] = d, l[2] = a) : a = l[2], l[3] !== g?.hasPersonalizedSources || l[4] !== d ? (i = d && g?.hasPersonalizedSources ? (0, t.jsx)(f.e, {
                children: (0, t.jsx)(m.a, {
                    content: (0, t.jsx)(h.a, {
                        ...e1.personalizedSourcesPrivate
                    }),
                    variant: "privacyNotice"
                })
            }) : null, l[3] = g?.hasPersonalizedSources, l[4] = d, l[5] = i) : i = l[5], l[6] !== g?.hasScreenshotReference || l[7] !== d ? (n = d && g?.hasScreenshotReference ? (0, t.jsx)(f.e, {
                children: (0, t.jsx)(m.a, {
                    content: (0, t.jsx)(h.a, {
                        ...e1.screenshotDisclaimer
                    }),
                    variant: "privacyNotice"
                })
            }) : null, l[6] = g?.hasScreenshotReference, l[7] = d, l[8] = n) : n = l[8], l[9] !== c ? (r = c ? (0, t.jsx)(f.e, {
                children: (0, t.jsx)("p", {
                    className: "text-sm text-secondary select-none",
                    children: (0, t.jsx)(h.a, {
                        ...e1.imageLicenseDisclaimer
                    })
                })
            }) : null, l[9] = c, l[10] = r) : r = l[10], l[11] !== a || l[12] !== i || l[13] !== n || l[14] !== r ? (o = (0, t.jsxs)(t.Fragment, {
                children: [a, i, n, r]
            }), l[11] = a, l[12] = i, l[13] = n, l[14] = r, l[15] = o) : o = l[15], o
        }

        function eZ(e) {
            let a = (0, s.c)(3),
                {
                    error: i
                } = e;
            switch (i) {
                case "blocked": {
                    let e;
                    return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...e1.shareBlocked
                    }), a[0] = e) : e = a[0], e
                }
                case "copy-failed": {
                    let e;
                    return a[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...e1.shareCopyFailed
                    }), a[1] = e) : e = a[1], e
                }
                case "create-failed": {
                    let e;
                    return a[2] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...e1.shareCreateFailed
                    }), a[2] = e) : e = a[2], e
                }
            }
        }
        let e1 = (0, g.f)({
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
            s = i("xygx"),
            n = i("ddzD"),
            r = i("urzV"),
            o = i("taWv"),
            l = i("rfhJ");
        i.d(a, {}, {
            a: async function(e, a) {
                let {
                    images: i,
                    downloadSources: c,
                    intl: d,
                    serverConversationId: h,
                    isParagen: g = !1,
                    logIndividualDownloads: p = !0
                } = a, u = 0;
                for (let [a, m] of i.entries()) {
                    if (null == m.src || "completed" !== m.status || m.isPreview) continue;
                    null != h && g && (0, l.c)(e, h, m, "download", "paragen");
                    let f = c?.get(m.id) ?? m.src;
                    null != h && (f = await (0, s.e)({
                        conversationId: null,
                        absoluteImageFilePath: null,
                        hostId: "local",
                        imageAssetResolver: (0, o.c)(h),
                        queryClient: e.queryClient,
                        src: f
                    }));
                    let b = (0, n.a)(m).downloadExtension ?? (0, r.c)(f ?? m.src) ?? "png",
                        v = (0, r.b)(d, b, {
                            title: m.chatGptDisplayTitle,
                            gifSpeed: m.gifPlayback?.speed
                        }),
                        w = !1;
                    if (null != f && await (0, r.d)({
                            downloadSrc: f,
                            onDownloaded: () => {
                                w = !0, null != h && !g && p && (0, l.c)(e, h, m, "download")
                            },
                            suggestedFilename: i.length > 1 ? v.replace(/\.[^.]+$/, `-${a+1}.${b}`) : v
                        })) {
                        if (!w) return "cancelled";
                        u++;
                        continue
                    }
                    return e.get(t.f).danger(d.formatMessage({
                        id: "imageSidePanel.downloadFailure",
                        defaultMessage: "Could not download image",
                        description: "Error shown when the image toolbar download fails."
                    }), {
                        errorAnalytics: {
                            toastId: "imageSidePanel.downloadFailure"
                        }
                    }), "failed"
                }
                return u > 0 ? "downloaded" : "empty"
            }
        })
    }),
    cQW3: (function(e, a, i) {
        var t = i("SavH"),
            s = i("yGJW"),
            n = i("r9i9");
        i.d(a, {}, {
            a: function(e, a, i) {
                return {
                    queryKey: ["chatgpt-image-share", a, i.item.id, i.item.src, i.additionalImages?.map(e => [e.id, e.src])],
                    queryFn: async () => {
                        let r = await (0, n.c)({
                            additionalImages: i.additionalImages,
                            conversationId: a,
                            image: i.item
                        });
                        return i.isDirectLightboxShare && (0, s.a)(e, t.d, {}), r
                    },
                    staleTime: 1 / 0
                }
            }
        })
    }),
    Tywu: (function(e, a, i) {
        var t = i("FS1B"),
            s = i("yGJW");

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
        i.d(a, {}, {
            a: n,
            b: async function(e, a, i, r) {
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
                    conversationId: i,
                    shareSessionId: r,
                    shareId: a.shareLinkId
                };
                try {
                    let a = navigator.share(l);
                    return (0, s.a)(e, t.h, {
                        ...c,
                        action: "CHATGPT_SHARE_FLOW_ACTION_SYSTEM_SHEET_OPENED"
                    }), await a, (0, s.a)(e, t.h, {
                        ...c,
                        action: "CHATGPT_SHARE_FLOW_ACTION_SYSTEM_SHARE_COMPLETED"
                    }), "shared"
                } catch (i) {
                    let a = "object" == typeof i && null != i && "name" in i && "AbortError" === i.name;
                    return (0, s.a)(e, t.h, {
                        ...c,
                        action: a ? "CHATGPT_SHARE_FLOW_ACTION_DISMISSED" : "CHATGPT_SHARE_FLOW_ACTION_FAILED",
                        failureReason: a ? void 0 : "CHATGPT_SHARE_FLOW_FAILURE_REASON_UNSPECIFIED"
                    }), a ? "cancelled" : "failed"
                }
            }
        })
    }),
    k5RO: (function(e, a, i) {
        let t = {
                kind: "native"
            },
            s = {
                kind: "custom",
                layout: "one-row",
                unsupportedDestinationFallback: "native-share"
            },
            n = {
                kind: "custom",
                layout: "one-row",
                unsupportedDestinationFallback: "app-store"
            },
            r = {
                kind: "custom",
                layout: "two-rows",
                unsupportedDestinationFallback: "native-share"
            },
            o = {
                kind: "custom",
                layout: "two-rows",
                unsupportedDestinationFallback: "app-store"
            },
            l = ["whatsapp", "messages", "instagram-stories", "facebook-messenger", "x", "reddit"],
            c = {
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
            d = {
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
        i.d(a, {}, {
            a: "2001123255",
            b: "mweb_image_share_sheet_variant",
            c: function(e, a) {
                return d[e]?.[a] ?? null
            },
            d: function(e) {
                let {
                    destination: a,
                    isAppleDevice: i,
                    shareUrl: t,
                    title: s
                } = e, n = encodeURIComponent(t), r = encodeURIComponent(s ?? "");
                switch (a) {
                    case "messages":
                        return `sms:${i?"&":"?"}body=${n}`;
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
                } = e, i = a?.trim().toUpperCase();
                return [...(null == i ? void 0 : c[i]) ?? l]
            },
            f: function(e) {
                let {
                    canUseNativeShare: a,
                    experience: i,
                    isMobileBrowser: t,
                    isPersonalAccount: n
                } = e;
                if (t) return "custom" === i.kind ? i : a && n ? s : void 0
            },
            g: function(e) {
                return null != d[e]
            },
            h: function(e) {
                switch (e) {
                    case "custom_one_row_native_fallback":
                    case "new_custom":
                        return s;
                    case "custom_one_row_app_store_redirect":
                        return n;
                    case "custom_two_rows_native_fallback":
                        return r;
                    case "custom_two_rows_app_store_redirect":
                        return o;
                    default:
                        return t
                }
            }
        })
    }),
    sX4C: (function(e, a, i) {
        i.d(a, {
            a: () => p
        });
        var t = i("ABep"),
            s = i("QosV"),
            n = i("on57"),
            r = i("Wf1j"),
            o = i("Sm6l"),
            l = i("JNtf"),
            c = i("mUDD"),
            d = i("HOLv"),
            h = i("CsDP"),
            g = i("gTbk");

        function p(e) {
            let a, i, p, u, m, f, b, v, w = (0, s.c)(44),
                {
                    children: k,
                    headerContent: T,
                    headerActions: _,
                    footer: y,
                    collapseEmptyContent: C,
                    compactImageSheetFooter: S,
                    isDismissalDisabled: x,
                    subtitle: A,
                    title: I,
                    onClose: M,
                    onOpenAutoFocus: L,
                    onCloseAutoFocus: j,
                    onPortalContainerChange: E,
                    onSubmit: P,
                    size: D,
                    variant: N,
                    presentation: G
                } = e,
                R = void 0 !== C && C,
                F = void 0 !== S && S,
                O = void 0 !== x && x,
                H = (0, r.a)(),
                W = "imageSheet" === G;
            w[0] !== F || w[1] !== _ || w[2] !== H || w[3] !== O || w[4] !== W || w[5] !== M || w[6] !== A || w[7] !== I ? (a = W ? (0, t.jsxs)("div", {
                className: (0, n.b)("shrink-0", "imageSheetHeader-vPz2gu", F && "imageSheetTwoRowsHeader-udlzI8"),
                children: [(0, t.jsx)(l.d, {
                    className: "imageSheetTitle-iMmEfF",
                    children: I
                }), null != A && (0, t.jsx)(l.c, {
                    className: "imageSheetSubtitle-E3o3_v",
                    children: A
                }), !O && (0, t.jsx)(o.a, {
                    unstyled: !0,
                    className: (0, n.b)("imageSheetClose-msZEpI", F && "imageSheetTwoRowsClose-qwbpXz"),
                    "aria-label": H.formatMessage({
                        id: "codex.dialog.closeButton",
                        defaultMessage: "Close dialog",
                        description: "Accessible label for the button that closes a dialog"
                    }),
                    onClick: e => {
                        e.stopPropagation(), M()
                    },
                    children: (0, t.jsx)(d.a, {
                        asset: g.a
                    })
                })]
            }) : (0, t.jsxs)("div", {
                className: "mb-2 flex items-center gap-2 pe-8",
                children: [(0, t.jsx)(c.d, {
                    className: "min-w-0 flex-1",
                    title: (0, t.jsx)(l.d, {
                        className: "contents",
                        children: I
                    }),
                    titleClassName: "truncate",
                    subtitle: null == A ? void 0 : (0, t.jsx)(l.c, {
                        className: "contents",
                        children: A
                    })
                }), _]
            }), w[0] = F, w[1] = _, w[2] = H, w[3] = O, w[4] = W, w[5] = M, w[6] = A, w[7] = I, w[8] = a) : a = w[8], w[9] !== T || w[10] !== a ? (i = (0, t.jsxs)(t.Fragment, {
                children: [a, T]
            }), w[9] = T, w[10] = a, w[11] = i) : i = w[11];
            let U = i;
            w[12] !== A ? (p = null == A ? {
                "aria-describedby": void 0
            } : {}, w[12] = A, w[13] = p) : p = w[13], w[14] !== L || w[15] !== E ? (u = e => {
                e.currentTarget instanceof HTMLElement && E?.(e.currentTarget), L?.(e)
            }, w[14] = L, w[15] = E, w[16] = u) : u = w[16], w[17] !== j || w[18] !== p || w[19] !== u ? (m = {
                ...p,
                shouldStopPointerDownPropagation: !1,
                onCloseAutoFocus: j,
                onOpenAutoFocus: u
            }, w[17] = j, w[18] = p, w[19] = u, w[20] = m) : m = w[20];
            let z = !O && !W,
                B = N ?? "opaque",
                q = W ? "imageSheetSurface-pAxv7i" : void 0,
                K = W ? "imageSheetOverlay-Da_SGi" : void 0;
            return w[21] !== O || w[22] !== M ? (f = e => {
                e || O || M()
            }, w[21] = O, w[22] = M, w[23] = f) : f = w[23], w[24] !== k || w[25] !== R || w[26] !== F || w[27] !== y || w[28] !== U || w[29] !== O || w[30] !== W || w[31] !== P ? (b = W ? (0, t.jsxs)(c.b, {
                as: null == P ? "div" : "form",
                variant: "chatgpt",
                className: (0, n.b)("imageSheetBody-YQy31R", "min-h-0", F && "imageSheetTwoRowsBody-mMGp9m"),
                onSubmit: null == P ? void 0 : e => {
                    e.preventDefault(), e.stopPropagation(), O || P()
                },
                children: [(0, t.jsxs)("div", {
                    className: "flex min-h-0 flex-col",
                    children: [U, k]
                }), (0, t.jsx)("div", {
                    className: (0, n.b)("shrink-0", F ? "mt-2" : "mt-12"),
                    children: y
                })]
            }) : (0, t.jsx)(h.a, {
                collapseEmptyContent: R,
                header: U,
                footer: y,
                onSubmit: null == P ? void 0 : e => {
                    e.preventDefault(), e.stopPropagation(), O || P()
                },
                children: k
            }), w[24] = k, w[25] = R, w[26] = F, w[27] = y, w[28] = U, w[29] = O, w[30] = W, w[31] = P, w[32] = b) : b = w[32], w[33] !== O || w[34] !== W || w[35] !== D || w[36] !== B || w[37] !== q || w[38] !== K || w[39] !== f || w[40] !== b || w[41] !== m || w[42] !== z ? (v = (0, t.jsx)(l.a, {
                open: !0,
                contentOverflow: "visible",
                contentProps: m,
                shouldIgnoreClickOutside: O,
                showDialogClose: z,
                size: D,
                variant: B,
                unstyledContent: W,
                contentClassName: q,
                overlayClassName: K,
                onOpenChange: f,
                children: b
            }), w[33] = O, w[34] = W, w[35] = D, w[36] = B, w[37] = q, w[38] = K, w[39] = f, w[40] = b, w[41] = m, w[42] = z, w[43] = v) : v = w[43], v
        }
    }),
    TnP0: (function(e, a, i) {
        var t = i("ABep"),
            s = i("QosV"),
            n = i("Wf1j"),
            r = i("oyxz"),
            o = i("Sm6l"),
            l = i("mUDD"),
            c = i("bf6R"),
            d = i("evwP"),
            h = i("zLIa"),
            g = i("sX4C");
        i.d(a, {}, {
            a: function(e) {
                let a, i, p, u, m, f, b, v = (0, s.c)(38),
                    {
                        accessControls: w,
                        actionDisabled: k,
                        actionLabel: T,
                        audience: _,
                        compactImageSheetFooter: y,
                        error: C,
                        footer: S,
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
                v[2] !== A ? (i = A ? null : (0, t.jsx)(c.Ae, {}), v[2] = A, v[3] = i) : i = v[3], v[4] !== T || v[5] !== i ? (p = (0, t.jsxs)(t.Fragment, {
                    children: [i, T]
                }), v[4] = T, v[5] = i, v[6] = p) : p = v[6];
                let U = p;
                if (C?.preventsSharing) {
                    let e;
                    v[7] !== C.onRetry ? (e = null != C.onRetry ? (0, t.jsx)(r.a, {
                        id: "shareDialog.thread.retry",
                        defaultMessage: "Try again",
                        description: "Button in a thread sharing dialog after preparing the share link fails. Retries preparing the chat without publishing it."
                    }) : (0, t.jsx)(r.a, {
                        id: "shareDialog.thread.close",
                        defaultMessage: "Close",
                        description: "Button in a thread sharing dialog that cannot prepare a share link. Closes the failed dialog so the user can reopen sharing."
                    }), v[7] = C.onRetry, v[8] = e) : e = v[8], U = e
                }
                let z = !C?.preventsSharing && k;
                v[9] !== U || v[10] !== A || v[11] !== z ? (u = (0, t.jsx)(o.a, {
                    color: "outline",
                    disabled: z,
                    loading: A,
                    size: "medium",
                    type: "submit",
                    children: U
                }), v[9] = U, v[10] = A, v[11] = z, v[12] = u) : u = v[12];
                let B = u;
                v[13] !== W || v[14] !== O ? (m = O ?? (W ? (0, t.jsx)(r.a, {
                    id: "shareDialog.thread.namedTitle",
                    defaultMessage: "Share {threadTitle}",
                    description: "Title of the ChatGPT or Codex thread sharing dialog. threadTitle is the user-provided name of the chat and may be truncated to fit the dialog header.",
                    values: {
                        threadTitle: W
                    }
                }) : (0, t.jsx)(r.a, {
                    id: "shareDialog.thread.title",
                    defaultMessage: "Share chat",
                    description: "Title of the thread sharing dialog when the ChatGPT or Codex chat has no name yet."
                })), v[13] = W, v[14] = O, v[15] = m) : m = v[15];
                let q = C?.preventsSharing ? C.onRetry ?? L : P,
                    K = C?.preventsSharing ? B : S ?? B;
                return v[16] !== w || v[17] !== _ || v[18] !== C || v[19] !== x || v[20] !== H || v[21] !== M || v[22] !== N || v[23] !== D ? (f = C?.preventsSharing ? (0, t.jsx)(l.e, {
                    className: "py-10",
                    children: (0, t.jsx)("div", {
                        role: "alert",
                        children: (0, t.jsx)(d.a, {
                            children: C.content
                        })
                    })
                }) : (0, t.jsxs)(t.Fragment, {
                    children: ["imageSheet" === N ? D : (0, t.jsx)(l.e, {
                        children: D
                    }), x, M, w ?? (null == _ ? null : (0, t.jsx)(l.e, {
                        children: (0, t.jsx)("div", {
                            className: "text-sm text-codex-description",
                            children: _
                        })
                    })), null == C ? null : (0, t.jsx)(l.e, {
                        children: (0, t.jsx)("div", {
                            className: "text-sm text-danger",
                            role: "alert",
                            children: C.content
                        })
                    }), C?.copyUrl == null ? null : (0, t.jsx)(l.e, {
                        children: (0, t.jsx)(h.a, {
                            "aria-label": H.formatMessage({
                                id: "shareDialog.thread.linkLabel",
                                defaultMessage: "Share link",
                                description: "Accessible label for the read-only URL field in a ChatGPT or Codex thread sharing dialog. The URL can be manually selected and copied if clipboard access fails."
                            }),
                            readOnly: !0,
                            value: C.copyUrl
                        })
                    })]
                }), v[16] = w, v[17] = _, v[18] = C, v[19] = x, v[20] = H, v[21] = M, v[22] = N, v[23] = D, v[24] = f) : f = v[24], v[25] !== y || v[26] !== I || v[27] !== L || v[28] !== j || v[29] !== E || v[30] !== N || v[31] !== R || v[32] !== G || v[33] !== m || v[34] !== q || v[35] !== K || v[36] !== f ? (b = (0, t.jsx)(g.a, {
                    title: m,
                    subtitle: G,
                    compactImageSheetFooter: y,
                    isDismissalDisabled: I,
                    onClose: L,
                    onOpenAutoFocus: j,
                    onPortalContainerChange: E,
                    onSubmit: q,
                    size: R,
                    presentation: N,
                    footer: K,
                    children: f
                }), v[25] = y, v[26] = I, v[27] = L, v[28] = j, v[29] = E, v[30] = N, v[31] = R, v[32] = G, v[33] = m, v[34] = q, v[35] = K, v[36] = f, v[37] = b) : b = v[37], b
            }
        })
    })
};