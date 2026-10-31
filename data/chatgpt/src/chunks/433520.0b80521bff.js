export const __rspack_esm_ids = [433520];
export const __webpack_modules__ = {
    Nkek: (function(e, a, i) {
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
            l = i("iTtm"),
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
            k = i("RNul"),
            w = i("SGsN"),
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
            W = i("PAiv");

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
        var q = i("k5RO"),
            B = i("on57"),
            K = i("WAV0"),
            V = i("Nkek"),
            Y = i.p + "assets/line.54d213ef65.svg",
            $ = i("hZax"),
            Q = i("O666"),
            X = i("n0AV"),
            J = i("ygO2"),
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
            ek = i.p + "assets/whatsapp.0a1329508c.svg",
            ew = i.p + "assets/x.1105bc9892.svg",
            eT = "mobileRow-V0E64y",
            e_ = i("u501"),
            ey = i("ucE8"),
            eC = i("mahZ");

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
                    onSocialShare: w,
                    experience: T,
                    onNativeShare: _,
                    canNativeShare: y,
                    country: C
                } = e,
                S = (0, d.a)();
            if (l[0] !== v || l[1] !== y || l[2] !== h || l[3] !== c || l[4] !== C || l[5] !== T.layout || l[6] !== T.unsupportedDestinationFallback || l[7] !== S || l[8] !== g || l[9] !== p || l[10] !== f || l[11] !== b || l[12] !== _ || l[13] !== w || l[14] !== m || l[15] !== u) {
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
                        I = m ? (0, q.e)({
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
                                    a = c(ek), i = d(ec), s = o.formatMessage({
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
                                    a = (0, t.jsx)(X.a, {
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
                                    a = c(ew), i = d(ed), s = o.formatMessage({
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
                            disabled: u || "native-share" === T.unsupportedDestinationFallback && (0, q.g)(e) && !y,
                            intl: S,
                            onSocialShare: w
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
                                className: (0, B.b)("mobileDestination-JRc58g", a && "mobileTwoRowDestination-jahy9S"),
                                "data-destination": i,
                                disabled: s,
                                size: "shareDestination",
                                type: "copy" === i ? "submit" : "button",
                                onClick: l,
                                children: [(0, t.jsxs)("span", {
                                    className: (0, B.b)("destinationIcon-EuU6jl", null != r && "destinationIconWithArtwork-eYPnWH"),
                                    children: [r, (0, t.jsx)("span", {
                                        className: "destinationIconForeground-usBliy",
                                        children: c ? (0, t.jsx)(k.a, {
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
                        l[24] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, B.b)("box-border flex min-w-0 w-full gap-x-5 overflow-x-auto overscroll-x-contain px-5 pt-5 pb-8", eT), l[24] = e) : e = l[24], l[25] !== L ? (a = e => L(e, !0), l[25] = L, l[26] = a) : a = l[26], l[27] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, t.jsx)("div", {
                            className: "w-full border-t-hairline border-default",
                            "aria-hidden": "true"
                        }), l[27] = i) : i = l[27], l[28] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, B.b)("box-border flex min-w-0 w-full gap-x-5 overflow-x-auto overscroll-x-contain px-5 pt-5 pb-8", eT, "mobileUtilityRow-iCKQaL"), l[28] = s) : s = l[28], r = (0, t.jsxs)("div", {
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
                    l[29] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, B.b)("flex w-full gap-x-6 overflow-x-auto overscroll-x-contain px-6", eT), l[29] = i) : i = l[29],
                    n = [...A, ...I].map(e => L(e, !1))
                }
                l[0] = v, l[1] = y, l[2] = h, l[3] = c, l[4] = C, l[5] = T.layout, l[6] = T.unsupportedDestinationFallback, l[7] = S, l[8] = g, l[9] = p, l[10] = f, l[11] = b, l[12] = _, l[13] = w, l[14] = m, l[15] = u, l[16] = a, l[17] = i, l[18] = n, l[19] = r
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
                    onClick: w
                } = e,
                T = void 0 !== m && m,
                _ = void 0 === v ? "button" : v;
            d[0] === Symbol.for("react.memo_cache_sentinel") ? (a = {
                layer: "3136899520",
                parameter: "large_share_destinations"
            }, d[0] = a) : a = d[0];
            let y = (0, l.x)(Q.b, a),
                C = y ? u.large : u.compact,
                S = y ? "size-16" : "size-11";
            d[1] !== S ? (i = (0, B.b)("share-destination-icon flex items-center justify-center rounded-full", S), d[1] = S, d[2] = i) : i = d[2], d[3] !== y || d[4] !== C || d[5] !== T ? (n = T ? (0, t.jsx)(k.a, {
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
            }), d[10] = f, d[11] = x, d[12] = o) : o = d[12], d[13] !== h || d[14] !== g || d[15] !== p || d[16] !== T || d[17] !== w || d[18] !== o || d[19] !== r || d[20] !== _ ? (c = (0, t.jsxs)(J.a, {
                "aria-label": h,
                "aria-busy": T,
                "data-destination": g,
                color: "shareDestination",
                disabled: p,
                size: "shareDestination",
                type: _,
                onClick: w,
                children: [r, o]
            }), d[13] = h, d[14] = g, d[15] = p, d[16] = T, d[17] = w, d[18] = o, d[19] = r, d[20] = _, d[21] = c) : c = d[21], c
        }

        function eA(e) {
            let a, i, n, r, o, c, h, g, p, u, m, f, b = (0, s.c)(54),
                {
                    copyLabel: k,
                    copyDisabled: w,
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
            let E = (0, l.x)(Q.b, a),
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
            let F = (0, l.x)(G ? Q.b : null, n),
                O = G && F;
            if (null != M) {
                let e;
                return b[6] !== A || b[7] !== w || b[8] !== k || b[9] !== N || b[10] !== T || b[11] !== L || b[12] !== M.canNativeShare || b[13] !== M.experience || b[14] !== M.onNativeShare || b[15] !== S || b[16] !== x || b[17] !== I || b[18] !== C || b[19] !== y ? (e = (0, t.jsx)(eS, {
                    copyLabel: k,
                    copyDisabled: w,
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
                }), b[6] = A, b[7] = w, b[8] = k, b[9] = N, b[10] = T, b[11] = L, b[12] = M.canNativeShare, b[13] = M.experience, b[14] = M.onNativeShare, b[15] = S, b[16] = x, b[17] = I, b[18] = C, b[19] = y, b[20] = e) : e = b[20], e
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
            b[25] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, t.jsx)(v.ye, {
                "aria-hidden": "true"
            }), b[25] = o) : o = b[25], b[26] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, t.jsx)(v.xe, {}), b[26] = c) : c = b[26], b[27] !== w || b[28] !== k || b[29] !== S ? (h = {
                id: "copy",
                largeIcon: o,
                disabled: w,
                icon: c,
                label: k,
                onClick: S
            }, b[27] = w, b[28] = k, b[29] = S, b[30] = h) : h = b[30];
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
                q = null == A && "flex-wrap justify-center gap-x-6 gap-y-4",
                V = null != A && "gap-3",
                X = null != A && E && "flex-wrap justify-center",
                J = null != A && !E && "justify-start overflow-x-auto sm:justify-center";
            return b[41] !== q || b[42] !== V || b[43] !== X || b[44] !== J ? (u = (0, B.b)("flex w-full", q, V, X, J), b[41] = q, b[42] = V, b[43] = X, b[44] = J, b[45] = u) : u = b[45], b[46] !== z || b[47] !== T || b[48] !== L ? (m = z.map(e => {
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
                    a = (0, t.jsx)(v.dj, {
                        "aria-hidden": "true"
                    }), i = (0, t.jsx)(v.ej, {
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
                    }), i = (0, t.jsx)(v.ze, {
                        "aria-hidden": "true"
                    }), s = o.formatMessage({
                        id: "chatgptConversations.shareDialog.destination.linkedin.label",
                        defaultMessage: "LinkedIn",
                        description: "Short destination label below a circular button in a ChatGPT post sharing dialog for a conversation, response, or generated image. Selecting it opens LinkedIn's post composer with the public post URL."
                    });
                    break;
                case "reddit":
                    a = (0, t.jsx)(v.Og, {
                        "aria-hidden": "true"
                    }), i = (0, t.jsx)(v.Pg, {
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
            let a, i, g, u, m, v, k, L, W, U, z, B, K, V, Y, $, Q, X, J, Z, ee, ea, ei, et, es, en, er, eo, el, ec, ed, eh, eg, ep, eu, em, ef, eb, ev, ek, ew, eT, e_, ey, eC, eS = (0, s.c)(328),
                {
                    currentNodeId: ex,
                    image: eI,
                    imagePromptTemplate: eM,
                    imageShareOptions: eL,
                    recoveryShareLink: ej,
                    publishedShareLink: eO,
                    publishedWidget: eH,
                    messageIds: eW,
                    mobileImageExperience: eU,
                    trackMobileImageShareLifecycle: ez,
                    onImageShareLinkPrepared: eq,
                    onClose: eB,
                    onResult: eK,
                    previewTurns: eV,
                    privacyNotices: eY,
                    prompt: eZ,
                    receiverShareLink: e1,
                    responseRegion: e0,
                    response: e2,
                    serverConversationId: e3,
                    shareSessionId: e5,
                    source: e4,
                    title: e6,
                    widget: e7
                } = e,
                e8 = (0, l.y)(_.a),
                [e9, ae] = (0, c.useState)(!1),
                aa = (0, l.z)(null)?.data,
                ai = (0, l.z)(null),
                at = (0, l.x)(null, e3),
                as = (0, d.a)(),
                an = (0, c.useRef)(!1),
                ar = (0, c.useRef)(!1);
            eS[0] !== eK ? (a = () => (an.current = !0, () => {
                an.current = !1, queueMicrotask(() => {
                    an.current || ar.current || (ar.current = !0, eK?.(!1))
                })
            }), i = [eK], eS[0] = eK, eS[1] = a, eS[2] = i) : (a = eS[1], i = eS[2]), (0, c.useEffect)(a, i), eS[3] !== eK ? (g = function(e) {
                ar.current || (ar.current = !0, eK?.(e))
            }, eS[3] = eK, eS[4] = g) : g = eS[4];
            let ao = g;
            eS[5] !== ao || eS[6] !== eB ? (u = function() {
                ao(!1), eB()
            }, eS[5] = ao, eS[6] = eB, eS[7] = u) : u = eS[7];
            let al = u,
                ac = (0, c.useContext)(p.a);
            eS[8] !== eI || eS[9] !== e8 || eS[10] !== e3 ? (m = null == eI ? void 0 : (0, F.a)(e8, e3, eI), eS[8] = eI, eS[9] = e8, eS[10] = e3, eS[11] = m) : m = eS[11];
            let ad = m;
            eS[12] !== eM || eS[13] !== ad || eS[14] !== eO || eS[15] !== e1 || eS[16] !== ej || eS[17] !== e8.queryClient ? (v = () => e1 ?? eO ?? ej ?? (null == ad || null != eM ? null : e8.queryClient.getQueryData(ad.queryKey) ?? null), eS[12] = eM, eS[13] = ad, eS[14] = eO, eS[15] = e1, eS[16] = ej, eS[17] = e8.queryClient, eS[18] = v) : v = eS[18];
            let [ah, ag] = (0, c.useState)(v), [ap] = (0, c.useState)(eR), au = e5 ?? ap, [am, af] = (0, c.useState)("idle"), [ab, av] = (0, c.useState)(null != ej ? "copy-failed" : null), [ak, aw] = (0, c.useState)(!1);
            eS[19] !== e3 ? (k = ["chatgpt-conversation-share", e3], eS[19] = e3, eS[20] = k) : k = eS[20];
            let aT = k,
                a_ = null == ej && null == e1 && null == eO && null == eZ && null == eI && null == eW && null == e0 && null == e7;
            eS[21] !== ex || eS[22] !== e3 ? (L = () => (0, E.i)({
                conversationId: e3,
                currentNodeId: ex
            }), eS[21] = ex, eS[22] = e3, eS[23] = L) : L = eS[23], eS[24] !== aT || eS[25] !== a_ || eS[26] !== L ? (W = {
                enabled: a_,
                queryFn: L,
                queryKey: aT,
                retry: !1,
                staleTime: M.b.ONE_MINUTE
            }, eS[24] = aT, eS[25] = a_, eS[26] = L, eS[27] = W) : W = eS[27];
            let {
                data: ay,
                error: aC,
                isLoading: aS
            } = (0, o.a)(W);
            eS[28] === Symbol.for("react.memo_cache_sentinel") ? (U = {
                enabled: !1,
                queryFn: eG,
                queryKey: ["accounts", "check"],
                staleTime: M.b.ONE_MINUTE
            }, eS[28] = U) : U = eS[28];
            let {
                data: ax
            } = (0, o.a)(U), aA = null != eI, aI = null != eU && aA, aM = aI || !0 === ez, aL = null != e1, aj = (eI?.additionalImages?.length ?? 0) > 0, aE = eI?.item.isAnimated === !0 && !aj;
            eS[29] !== eI || eS[30] !== e3 || eS[31] !== au ? (z = (0, j.c)((0, G.c)(e3), void 0, null != eI && null == eI.previewSrc ? au : void 0), eS[29] = eI, eS[30] = e3, eS[31] = au, eS[32] = z) : z = eS[32];
            let {
                src: aP,
                isLoading: aD
            } = (0, A.k)(null != eI && (aj || null == eI.previewSrc) ? eI.item.src ?? "" : "", z), aN = null != eI && null == eI.previewSrc && null == aP, aG = aj ? "image_series" : "single_image", aR = e7 ?? eH, aF = null != eW || null != e0 || null != aR || e1?.contentType === "message", aO = null != e0, aH = aR?.metadata.widgetType === "visualization", aW = aR?.metadata.widgetName === "create_interactive_poll" || aR?.metadata.widgetName === "CreateInteractivePoll", aU = null != eZ || null != eM, az = aA || aF || aU, aq = az || !0, aB = "conversation";
            aH ? aB = "widget" : null != eM ? aB = "prompt" : aE ? aB = "gif" : aA ? aB = aj ? "images" : "image" : aO ? aB = "response-region" : aF ? aB = "message" : aU && (aB = "prompt"), eS[33] !== eY || eS[34] !== e2 ? (B = null == e2 ? eY : (0, E.m)(e2), eS[33] = eY, eS[34] = e2, eS[35] = B) : B = eS[35];
            let aK = B,
                aV = aA || (!az || aF) && aK?.hasImageReference === !0;
            eS[36] !== eI?.item || eS[37] !== aj || eS[38] !== e6 ? (K = (aj ? void 0 : eI?.item.chatGptDisplayTitle) ?? (0, D.c)(e6), eS[36] = eI?.item, eS[37] = aj, eS[38] = e6, eS[39] = K) : K = eS[39];
            let aY = K,
                a$ = !az && ay?.is_public === !0 && !0 === ay.is_visible,
                aQ = ax?.accounts?.find(e => e.id === (ac?.accountId ?? ax.account_ordering?.[0])),
                aX = aQ?.structure ?? ac?.accountStructureAtLogin,
                aJ = "unknown";
            ah?.isWorkspaceOnly != null ? aJ = ah.isWorkspaceOnly ? "workspace" : "public" : null == ay || aA ? ("personal" === aX || "workspace" === aX) && (aJ = "workspace" === aX ? "workspace" : "public") : aJ = ay.share_url.includes("/share/e/") ? "workspace" : "public", eS[40] !== ad?.queryKey ? (V = ad?.queryKey ?? ["disabled-chatgpt-image-share-query"], eS[40] = ad?.queryKey, eS[41] = V) : V = eS[41], eS[42] !== ad?.queryFn ? (Y = ad?.queryFn ?? eN, eS[42] = ad?.queryFn, eS[43] = Y) : Y = eS[43];
            let aZ = aI && (0, O.a)() && null == eM && null != ad && "public" === aJ && null == ah;
            eS[44] !== V || eS[45] !== Y || eS[46] !== aZ ? ($ = {
                queryKey: V,
                queryFn: Y,
                enabled: aZ,
                retry: !1,
                staleTime: 1 / 0
            }, eS[44] = V, eS[45] = Y, eS[46] = aZ, eS[47] = $) : $ = eS[47];
            let a1 = (0, o.a)($);
            a1.data?.isWorkspaceOnly != null && (aJ = a1.data.isWorkspaceOnly ? "workspace" : "public");
            let a0 = ah ?? (null == eM ? a1.data ?? null : null),
                a2 = null == eM ? a0 : null;
            eS[48] !== eq || eS[49] !== a2 ? (Q = () => {
                null != a2 && eq?.(a2)
            }, X = [eq, a2], eS[48] = eq, eS[49] = a2, eS[50] = Q, eS[51] = X) : (Q = eS[50], X = eS[51]), (0, c.useEffect)(Q, X);
            let a3 = a0?.shareLinkUrl ?? (a$ ? ay.share_url : null),
                a5 = !az && null == a0 && a$ && ay.current_node_id !== ex,
                a4 = "workspace" === aJ,
                a6 = "creating" === am,
                a7 = !az && aS;
            eS[52] !== a0 || eS[53] !== ab || eS[54] !== aC || eS[55] !== a1.error || eS[56] !== a_ ? (null == (J = ab) && a_ && null == a0 && null != aC && (J = aC instanceof E.a ? "blocked" : "create-failed"), null == J && null != a1.error && (J = a1.error instanceof E.a ? "blocked" : "create-failed"), eS[52] = a0, eS[53] = ab, eS[54] = aC, eS[55] = a1.error, eS[56] = a_, eS[57] = J) : J = eS[57];
            let a8 = eJ.description,
                a9 = eJ.publicLinkAudience;
            if (aH) {
                let e;
                eS[58] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                    ...eJ.widgetTitle
                }), eS[58] = e) : e = eS[58], Z = e
            } else if (aE) {
                let e;
                eS[59] !== eM ? (e = null != eM ? (0, t.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.gifWithPromptTitle",
                    defaultMessage: "Share GIF with prompt",
                    description: "Heading of the generated GIF sharing dialog when GIF with prompt is selected. Shares the animated GIF and its reusable prompt. The other option is GIF only."
                }) : (0, t.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.gifTitle",
                    defaultMessage: "Share GIF",
                    description: "Heading of the dialog for sharing one generated animated GIF. Keep GIF as the file format name."
                }), eS[59] = eM, eS[60] = e) : e = eS[60], Z = e
            } else if (null != eM) {
                let e;
                eS[61] !== eM.label ? (e = "image_with_prompt" === eM.label ? (0, t.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.imageWithPromptTitle",
                    defaultMessage: "Share image with prompt",
                    description: "Heading of the generated-image share dialog when Image with prompt is selected. Users share the generated image together with its reusable prompt so recipients can try the prompt. The other option is Image only."
                }) : (0, t.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.imagePromptTitle",
                    defaultMessage: "Share prompt with image",
                    description: "Short heading of the generated-image share dialog when Prompt with image is selected. Users share the generated image and its reusable prompt so recipients can try the prompt. The other option is Image only."
                }), eS[61] = eM.label, eS[62] = e) : e = eS[62], Z = e
            } else if (aA) {
                let e;
                eS[63] !== aY || eS[64] !== eL || eS[65] !== aj || eS[66] !== aI ? (e = aI || null == aY || null != eL ? (0, t.jsx)(h.a, {
                    ...aj ? eJ.imagesTitle : eJ.imageTitle
                }) : (0, t.jsx)(t.Fragment, {
                    children: aY
                }), eS[63] = aY, eS[64] = eL, eS[65] = aj, eS[66] = aI, eS[67] = e) : e = eS[67], Z = e
            } else if (aW) {
                let e;
                eS[68] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.poll.title",
                    defaultMessage: "Share poll",
                    description: "Short heading of the dialog for sharing one interactive poll. The user can create or send a link so other people can vote on the poll."
                }), eS[68] = e) : e = eS[68], Z = e
            } else if (aO) {
                let e;
                eS[69] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.responseRegionTitle",
                    defaultMessage: "Share",
                    description: "Short heading of the dialog for sharing one selected section of an interactive ChatGPT response."
                }), eS[69] = e) : e = eS[69], Z = e
            } else if (aF) {
                let e;
                eS[70] !== aY ? (e = null == aY ? (0, t.jsx)(h.a, {
                    ...eJ.messageTitle
                }) : (0, t.jsx)(t.Fragment, {
                    children: aY
                }), eS[70] = aY, eS[71] = e) : e = eS[71], Z = e
            } else if (aU) {
                let e;
                eS[72] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                    ...eJ.promptTitle
                }), eS[72] = e) : e = eS[72], Z = e
            } else {
                if (aq) {
                    let e;
                    eS[73] !== aY ? (e = null == aY ? void 0 : (0, t.jsx)(t.Fragment, {
                        children: aY
                    }), eS[73] = aY, eS[74] = e) : e = eS[74], Z = e
                }
                a4 ? a8 = eY?.isProjectConversation ? eJ.workspaceProjectDescription : eJ.workspaceDescription : ay?.is_anonymous === !1 ? a8 = eJ.attributedDescription : eY?.isProjectConversation && (a8 = eJ.projectDescription)
            }
            a4 && (a9 = aV ? eJ.workspaceImageRightsAudience : eJ.workspaceLinkAudience);
            let ie = "copied" === am ? eJ.copied : eJ.copyLink;
            a5 ? ie = eJ.updateLink : null == a3 && "copied" !== am && (ie = eJ.createLink), eS[75] !== as || eS[76] !== am ? (ee = "copied" === am ? as.formatMessage(eJ.copied) : as.formatMessage(eJ.copyLink), eS[75] = as, eS[76] = am, eS[77] = ee) : ee = eS[77];
            let ia = ee;
            eS[78] !== ao || eS[79] !== as || eS[80] !== e8 || eS[81] !== e7 ? (ea = function(e, a) {
                let i;
                "create-failed" === a && (ao(!1), e7?.onError?.(e));
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
                        i = as.formatMessage(eJ.shareBlocked);
                        break;
                    case "copy-failed":
                        i = as.formatMessage(eJ.shareCopyFailed);
                        break;
                    case "create-failed":
                        i = as.formatMessage(eJ.shareCreateFailed)
                }
                return av(t), af("idle"), e8.get(w.f).danger(i, {
                    errorAnalytics: {
                        toastId: {
                            "copy-failed": "failed_to_copy_share_link",
                            "create-failed": "failed_to_generate_share_link",
                            blocked: "chatgptConversationShareDialog.shareBlocked"
                        } [t]
                    }
                }), t
            }, eS[78] = ao, eS[79] = as, eS[80] = e8, eS[81] = e7, eS[82] = ea) : ea = eS[82];
            let ii = ea;
            eS[83] !== aR || eS[84] !== aA || eS[85] !== aF || eS[86] !== aU || eS[87] !== aL || eS[88] !== aO || eS[89] !== e1 || eS[90] !== e4 ? (ei = aL ? "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER" : "CHATGPT_SHARE_FLOW_ACTOR_SHARER", es = aL ? "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_HEADER" : e4 ?? "CHATGPT_SHARE_FLOW_SOURCE_CONVERSATION_MENU", null != e1 ? et = e1.attachmentType : null != aR ? (et = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_WIDGET", es = "CHATGPT_SHARE_FLOW_SOURCE_WIDGET_INLINE_ACTION") : aA ? (et = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_IMAGE_SHARE", es = e4 ?? "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION") : aO ? (et = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_OTHER", es = "CHATGPT_SHARE_FLOW_SOURCE_WIDGET_INLINE_ACTION") : aF ? (et = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_MESSAGE_SLICE", es = "CHATGPT_SHARE_FLOW_SOURCE_MESSAGE_INLINE_ACTION") : aU && (et = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_PROMPT", es = e4 ?? "CHATGPT_SHARE_FLOW_SOURCE_MESSAGE_INLINE_ACTION"), eS[83] = aR, eS[84] = aA, eS[85] = aF, eS[86] = aU, eS[87] = aL, eS[88] = aO, eS[89] = e1, eS[90] = e4, eS[91] = ei, eS[92] = et, eS[93] = es) : (ei = eS[91], et = eS[92], es = eS[93]);
            let it = e1?.contentType === "message" || az ? "CHATGPT_SHARE_FLOW_CONTENT_TYPE_POST_SLICE" : "CHATGPT_SHARE_FLOW_CONTENT_TYPE_SHARED_CONVERSATION";
            eS[94] !== a0 || eS[95] !== ex || eS[96] !== a$ || eS[97] !== ay || eS[98] !== ao || eS[99] !== eM || eS[100] !== ad || eS[101] !== az || eS[102] !== a5 || eS[103] !== eW || eS[104] !== eq || eS[105] !== eZ || eS[106] !== e0 || eS[107] !== e8.queryClient || eS[108] !== e3 || eS[109] !== aT || eS[110] !== e6 || eS[111] !== e7 ? (en = async function(e) {
                let a;
                if (null != e7 && (!an.current || e7.isCurrent?.() === !1)) throw Error("The selected widget is no longer available");
                if (null != e0 && (!an.current || e0.isCurrent?.() === !1)) throw Error("The selected response region is no longer available");
                let i = a0 ?? (a$ ? {
                    currentNodeId: ay.current_node_id,
                    shareLinkId: ay.share_id,
                    shareLinkUrl: ay.share_url
                } : null);
                if (null == eM && null != i && !a5) return ao(!0), i;
                if (null != eM) a = await eM.createLink(e);
                else if (null != ad) a = await e8.queryClient.fetchQuery(ad), eq?.(a);
                else if (null != e7) {
                    if (a = await (0, E.g)(e7.attachment, ex), !an.current || e7.isCurrent?.() === !1) throw Error("The selected widget changed while sharing")
                } else if (null != e0) {
                    if (a = await (0, E.f)({
                            conversationId: e0.attachment.conversation_id,
                            currentNodeId: ex,
                            messageId: e0.attachment.message_id,
                            targetId: e0.attachment.target_id
                        }), !an.current || e0.isCurrent?.() === !1) throw Error("The selected response region changed while sharing")
                } else a = null != eW ? await e8.queryClient.fetchQuery({
                    queryFn: () => (0, E.d)({
                        conversationId: e3,
                        currentNodeId: ex,
                        messageIds: eW
                    }),
                    queryKey: ["chatgpt-message-share", e3, ex],
                    staleTime: 1 / 0
                }) : null != eZ ? await e8.queryClient.fetchQuery({
                    queryFn: () => (0, E.e)({
                        conversationId: e3,
                        messageId: eZ.messageId
                    }),
                    queryKey: ["chatgpt-prompt-share", e3, eZ.messageId],
                    staleTime: 1 / 0
                }) : await (0, E.h)({
                    conversationId: e3,
                    currentNodeId: ex,
                    existingShareLink: ay,
                    title: e6
                });
                return ag(a), ao(!0), null == ay || az || e8.queryClient.setQueryData(aT, {
                    ...ay,
                    current_node_id: ex,
                    is_public: !0,
                    is_visible: !0
                }), a
            }, eS[94] = a0, eS[95] = ex, eS[96] = a$, eS[97] = ay, eS[98] = ao, eS[99] = eM, eS[100] = ad, eS[101] = az, eS[102] = a5, eS[103] = eW, eS[104] = eq, eS[105] = eZ, eS[106] = e0, eS[107] = e8.queryClient, eS[108] = e3, eS[109] = aT, eS[110] = e6, eS[111] = e7, eS[112] = en) : en = eS[112];
            let is = en;
            eS[113] !== ei || eS[114] !== et || eS[115] !== it || eS[116] !== a0 || eS[117] !== aR?.metadata || eS[118] !== is || eS[119] !== a$ || eS[120] !== ay || eS[121] !== eM || eS[122] !== aN || eS[123] !== aL || eS[124] !== a5 || eS[125] !== a6 || eS[126] !== eB || eS[127] !== ii || eS[128] !== e8 || eS[129] !== e3 || eS[130] !== a3 || eS[131] !== au || eS[132] !== es || eS[133] !== aq ? (er = async function() {
                if (a6 || aN || eM?.actionsDisabled) return;
                let e = (0, N.a)(e8, {
                    actor: ei,
                    attachmentType: et,
                    widgetMetadata: aR?.metadata,
                    contentType: it,
                    conversationId: aL ? void 0 : e3,
                    shareId: a0?.shareLinkId ?? (a$ ? ay.share_id : void 0),
                    shareSessionId: au,
                    source: es,
                    usedExistingLink: null != a3 && !a5
                });
                av(null), af("creating");
                let a = null != eM || null == a3 || a5 ? "create-failed" : "copy-failed",
                    i = a0;
                try {
                    let t, s = is("copy"),
                        n = (0, C.c)(s.then(eD));
                    null != n && n.catch(eP);
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
                        }), ii(Error("Failed to copy ChatGPT conversation share link"), "copy-failed");
                        return
                    }
                    e({
                        result: "link-copied",
                        shareId: r.shareLinkId
                    }), af("copied"), aq || ((0, y.a)(e8), eB())
                } catch (s) {
                    let t = ii(s, a);
                    e("create-failed" === t ? {
                        result: t,
                        error: s
                    } : {
                        result: t,
                        shareId: i?.shareLinkId
                    })
                }
            }, eS[113] = ei, eS[114] = et, eS[115] = it, eS[116] = a0, eS[117] = aR?.metadata, eS[118] = is, eS[119] = a$, eS[120] = ay, eS[121] = eM, eS[122] = aN, eS[123] = aL, eS[124] = a5, eS[125] = a6, eS[126] = eB, eS[127] = ii, eS[128] = e8, eS[129] = e3, eS[130] = a3, eS[131] = au, eS[132] = es, eS[133] = aq, eS[134] = er) : er = eS[134];
            let ir = er;
            eS[135] !== et || eS[136] !== it || eS[137] !== a0 || eS[138] !== e8 || eS[139] !== e3 || eS[140] !== au || eS[141] !== aM || eS[142] !== es ? (eo = function(e) {
                (0, T.a)(e8, n.h, {
                    action: e,
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_SHARER",
                    attachmentType: et,
                    contentType: it,
                    conversationId: e3,
                    ...aM && null != a0 && !a0.isWorkspaceOnly ? {
                        shareId: a0.shareLinkId
                    } : {},
                    shareSessionId: au,
                    source: es,
                    sheetType: "CHATGPT_SHARE_FLOW_SHEET_TYPE_CUSTOM"
                })
            }, eS[135] = et, eS[136] = it, eS[137] = a0, eS[138] = e8, eS[139] = e3, eS[140] = au, eS[141] = aM, eS[142] = es, eS[143] = eo) : eo = eS[143];
            let io = eo;
            eS[144] !== a0 || eS[145] !== J || eS[146] !== is || eS[147] !== ad || eS[148] !== as || eS[149] !== a6 || eS[150] !== eB || eS[151] !== ii || eS[152] !== e8 || eS[153] !== e3 || eS[154] !== aJ || eS[155] !== au || eS[156] !== es ? (el = async function() {
                if (!a6 && null != ad && "public" === aJ && "blocked" !== J) {
                    av(null), af("creating");
                    try {
                        let e = a0 ?? await is("copy"),
                            a = await (0, O.b)(e8, e, e3, au, es);
                        af("idle"), "shared" === a && eB(), "failed" === a && e8.get(w.f).danger(as.formatMessage({
                            id: "chatgptConversations.mobileImageShare.nativeFailed",
                            defaultMessage: "Could not open sharing. Try again or copy the link",
                            description: "Error in the mobile image share sheet when the device cannot open native link sharing. The user can retry or use Copy link"
                        }), {
                            errorAnalytics: {
                                toastId: "chatgptConversations.mobileImageShare.nativeFailed"
                            }
                        })
                    } catch (e) {
                        ii(e, "create-failed")
                    }
                }
            }, eS[144] = a0, eS[145] = J, eS[146] = is, eS[147] = ad, eS[148] = as, eS[149] = a6, eS[150] = eB, eS[151] = ii, eS[152] = e8, eS[153] = e3, eS[154] = aJ, eS[155] = au, eS[156] = es, eS[157] = el) : el = eS[157];
            let il = el;
            eS[158] !== ei || eS[159] !== et || eS[160] !== it || eS[161] !== a0 || eS[162] !== aY || eS[163] !== aR?.metadata || eS[164] !== is || eS[165] !== a$ || eS[166] !== ay || eS[167] !== eM || eS[168] !== aG || eS[169] !== as || eS[170] !== aA || eS[171] !== aN || eS[172] !== aU || eS[173] !== aL || eS[174] !== a5 || eS[175] !== a6 || eS[176] !== eU?.unsupportedDestinationFallback || eS[177] !== eB || eS[178] !== ii || eS[179] !== e8 || eS[180] !== e3 || eS[181] !== aJ || eS[182] !== am || eS[183] !== au || eS[184] !== aM || eS[185] !== es || eS[186] !== aI ? (ec = async function(e, a) {
                var i;
                let t;
                if (a6 || aN || "public" !== aJ || eM?.actionsDisabled) return;
                a.preventDefault(), aL || aU || "line" !== (i = e) && "linkedin" !== i && "reddit" !== i && "x" !== i || (0, N.f)(e8, e, aA ? aG : void 0);
                let s = aM && aA ? e3 : void 0;
                (0, N.e)(e8, {
                    actor: ei,
                    attachmentType: et,
                    conversationId: s,
                    widgetMetadata: aR?.metadata,
                    contentType: it,
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
                    shareId: a0?.shareLinkId ?? (a$ && !a5 ? ay.share_id : void 0),
                    shareSessionId: au,
                    source: es
                });
                let n = aI && (0, q.g)(e);
                if (n && eU?.unsupportedDestinationFallback === "app-store") {
                    let i = (0, r.a)() ? "android" : (0, r.c)() || (0, r.b)() ? "ios" : null,
                        t = null == i ? null : (0, q.c)(e, i);
                    if (null != t) return void(0, b.e)({
                        event: a,
                        href: t,
                        initiator: "open_in_browser_bridge",
                        openTarget: "external-browser"
                    })
                }
                let o = null != a0 && null == eM || "messages" === e || n ? null : window.open("", "_blank");
                null != o && (o.opener = null), av(null), af("creating");
                try {
                    t = await is("social")
                } catch (e) {
                    o?.close(), e instanceof E.a || (0, N.d)(e8, {
                        actor: ei,
                        attachmentType: et,
                        imageShareConversationId: s,
                        widgetMetadata: aR?.metadata,
                        contentType: it,
                        shareSessionId: au,
                        source: es
                    }), ii(e, "create-failed");
                    return
                }
                if (!0 === t.isWorkspaceOnly) {
                    o?.close(), af(am);
                    return
                }
                if (n) {
                    let e = await (0, O.b)(e8, t, e3, au, es);
                    af(am), "shared" === e ? eB() : "failed" === e && e8.get(w.f).danger(as.formatMessage({
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
                let l = (0, q.d)({
                    destination: e,
                    isAppleDevice: (0, r.c)() || (0, r.b)(),
                    shareUrl: t.shareLinkUrl,
                    title: t.title ?? aY
                });
                if (null == l) {
                    o?.close(), af(am);
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
                }), af(am)
            }, eS[158] = ei, eS[159] = et, eS[160] = it, eS[161] = a0, eS[162] = aY, eS[163] = aR?.metadata, eS[164] = is, eS[165] = a$, eS[166] = ay, eS[167] = eM, eS[168] = aG, eS[169] = as, eS[170] = aA, eS[171] = aN, eS[172] = aU, eS[173] = aL, eS[174] = a5, eS[175] = a6, eS[176] = eU?.unsupportedDestinationFallback, eS[177] = eB, eS[178] = ii, eS[179] = e8, eS[180] = e3, eS[181] = aJ, eS[182] = am, eS[183] = au, eS[184] = aM, eS[185] = es, eS[186] = aI, eS[187] = ec) : ec = eS[187];
            let ic = ec;
            eS[188] !== eI || eS[189] !== aG || eS[190] !== as || eS[191] !== ak || eS[192] !== aj || eS[193] !== aN || eS[194] !== io || eS[195] !== e8 || eS[196] !== e3 ? (ed = async function() {
                if (null == eI || ak || aN) return;
                (0, N.f)(e8, "download", aG);
                let e = [eI.item, ...eI.additionalImages ?? []].filter(eE);
                0 !== e.length && ((0, H.b)(e8, {
                    image: eI.downloadAnalyticsImage ?? eI.item,
                    conversationId: e3,
                    entryPoint: "CHATGPT_IMAGE_DOWNLOAD_ENTRY_POINT_CUSTOM_SHARE_SHEET",
                    downloadScope: aj ? "CHATGPT_IMAGE_DOWNLOAD_SCOPE_SERIES" : "CHATGPT_IMAGE_DOWNLOAD_SCOPE_SINGLE",
                    requestedImageCount: e.length,
                    isParagen: eI.downloadIsParagen
                }), aw(!0), io("CHATGPT_SHARE_FLOW_ACTION_DOWNLOAD_SELECTED"), await (0, R.a)(e8, {
                    images: e,
                    intl: as,
                    serverConversationId: (0, G.c)(e3),
                    logIndividualDownloads: !1
                }).then(e => {
                    "downloaded" === e && (0, H.e)(e8, e3, eI.item)
                }).finally(() => {
                    aw(!1)
                }))
            }, eS[188] = eI, eS[189] = aG, eS[190] = as, eS[191] = ak, eS[192] = aj, eS[193] = aN, eS[194] = io, eS[195] = e8, eS[196] = e3, eS[197] = ed) : ed = eS[197];
            let id = ed;
            eS[198] !== eI?.additionalImages?.length || eS[199] !== aj ? (eh = aj ? (0, t.jsx)(h.a, {
                id: "chatgptConversations.shareDialog.imageSeriesCount",
                defaultMessage: "Sharing {imageCount} images together",
                description: "Subtitle beneath the generated-image share modal title after choosing to share a series. imageCount is the number of images included in the link, always greater than one. This informs the user that all listed images are shared together.",
                values: {
                    imageCount: 1 + (eI?.additionalImages?.length ?? 0)
                }
            }) : void 0, eS[198] = eI?.additionalImages?.length, eS[199] = aj, eS[200] = eh) : eh = eS[200];
            let ih = eh,
                ig = ih;
            if (!aj && !aq) {
                let e;
                eS[201] !== a8 ? (e = (0, t.jsx)(h.a, {
                    ...a8
                }), eS[201] = a8, eS[202] = e) : e = eS[202], ig = e
            }
            if (null != eM) {
                let e;
                eS[203] !== aI ? (e = aI ? (0, t.jsx)(h.a, {
                    id: "imagePromptShare.audience",
                    defaultMessage: "Anyone with the link can try this prompt",
                    description: "Audience description when sharing a generated image as a reusable prompt template"
                }) : void 0, eS[203] = aI, eS[204] = e) : e = eS[204], ig = e
            } else if (aI) {
                let e, a, i;
                eS[205] !== aJ ? (e = "public" === aJ ? (0, t.jsx)(h.a, {
                    id: "chatgptConversations.mobileImageShare.publicAudience",
                    defaultMessage: "Anyone with the link can view",
                    description: "Audience disclosure in the mobile generated-image share sheet for a public link"
                }) : null, eS[205] = aJ, eS[206] = e) : e = eS[206], eS[207] !== aJ ? (a = "public" !== aJ && (0, t.jsx)(h.a, {
                    id: "chatgptConversations.mobileImageShare.workspaceAudience",
                    defaultMessage: "Only workspace members with the link can view",
                    description: "Audience disclosure below Share image in the mobile image share sheet for a workspace account"
                }), eS[207] = aJ, eS[208] = a) : a = eS[208], eS[209] !== e || eS[210] !== a ? (i = (0, t.jsxs)(t.Fragment, {
                    children: [e, a]
                }), eS[209] = e, eS[210] = a, eS[211] = i) : i = eS[211], ig = i
            }
            if (aI ? eg = "responsiveSheet" : aq && (eg = "share"), aI && (ep = eU?.layout === "two-rows" ? "imageSheetTwoRows" : "imageSheet"), null != eM) {
                let e;
                if (eS[212] !== eI?.previewSrc || eS[213] !== eM || eS[214] !== a6 || eS[215] !== aP) {
                    let a;
                    eS[217] === Symbol.for("react.memo_cache_sentinel") ? (a = () => {
                        av(null), af("idle")
                    }, eS[217] = a) : a = eS[217], e = eM.preview(a6, eI?.previewSrc ?? aP ?? null, a), eS[212] = eI?.previewSrc, eS[213] = eM, eS[214] = a6, eS[215] = aP, eS[216] = e
                } else e = eS[216];
                eu = e
            } else {
                let e;
                eS[218] !== aR || eS[219] !== eI || eS[220] !== ep || eS[221] !== as || eS[222] !== aD || eS[223] !== aj || eS[224] !== aH || eS[225] !== eV || eS[226] !== eZ || eS[227] !== aP || eS[228] !== e2 || eS[229] !== e0 || eS[230] !== e3 || eS[231] !== aI ? (e = null != eI ? (0, t.jsx)(x.a, {
                    ariaLabel: aj ? as.formatMessage(eJ.imagesPreview) : eI.alt,
                    variant: "image",
                    classicImagePreviewEligible: !aj && !aI,
                    presentation: ep,
                    children: aj || null == eI.previewSrc ? (0, t.jsx)(e$, {
                        src: aP,
                        isLoading: aD
                    }) : (0, t.jsx)("img", {
                        alt: eI.alt,
                        className: aI ? void 0 : "block size-full object-contain",
                        referrerPolicy: "no-referrer",
                        src: eI.previewSrc
                    })
                }) : (0, t.jsxs)(t.Fragment, {
                    children: [e0?.preview != null && (0, t.jsx)(x.a, {
                        ariaLabel: as.formatMessage({
                            id: "chatgptConversations.shareDialog.responseRegionPreviewLabel",
                            defaultMessage: "Preview of the shared content",
                            description: "Accessible description of the selected interactive-response section shown in the response-region sharing dialog."
                        }),
                        variant: "response",
                        children: e0.preview
                    }), null == e0 && aR?.preview != null && aH && (0, t.jsx)(x.a, {
                        ariaLabel: as.formatMessage({
                            id: "shareDialog.widget.previewLabel",
                            defaultMessage: "Preview of the shared widget",
                            description: "Accessible description of the non-interactive selected-widget preview in a ChatGPT widget sharing dialog."
                        }),
                        variant: "response",
                        children: aR.preview
                    }), null == e0 && aR?.preview != null && !aH && (0, t.jsx)(x.a, {
                        variant: "response",
                        children: aR.preview
                    }), null == e0 && null == aR && (0, t.jsx)(P.b, {
                        prompt: eZ,
                        response: e2,
                        serverConversationId: e3,
                        turns: eV
                    })]
                }), eS[218] = aR, eS[219] = eI, eS[220] = ep, eS[221] = as, eS[222] = aD, eS[223] = aj, eS[224] = aH, eS[225] = eV, eS[226] = eZ, eS[227] = aP, eS[228] = e2, eS[229] = e0, eS[230] = e3, eS[231] = aI, eS[232] = e) : e = eS[232], eu = e
            }
            if (aI) {
                let e, a, i;
                eS[233] !== eM || eS[234] !== eu ? (e = null == eM ? eu : (0, t.jsx)("div", {
                    className: "px-6",
                    children: eu
                }), eS[233] = eM, eS[234] = eu, eS[235] = e) : e = eS[235], eS[236] !== ih ? (a = null != ih && (0, t.jsx)("p", {
                    className: "mt-3 text-center text-sm text-secondary",
                    children: ih
                }), eS[236] = ih, eS[237] = a) : a = eS[237], eS[238] !== e || eS[239] !== a ? (i = (0, t.jsxs)(t.Fragment, {
                    children: [e, a]
                }), eS[238] = e, eS[239] = a, eS[240] = i) : i = eS[240], eu = i
            }
            eS[241] !== a9 || eS[242] !== aq ? (em = aq ? void 0 : (0, t.jsx)(h.a, {
                ...a9
            }), eS[241] = a9, eS[242] = aq, eS[243] = em) : em = eS[243], eS[244] !== ie ? (ef = (0, t.jsx)(h.a, {
                ...ie
            }), eS[244] = ie, eS[245] = ef) : ef = eS[245];
            let ip = eM?.actionsDisabled || a7 || aN || "blocked" === J,
                iu = a6 || a7 || e9,
                im = !aq && a6;
            eS[246] !== io || eS[247] !== aM || eS[248] !== aq ? (eb = aq ? e => {
                aM && io("CHATGPT_SHARE_FLOW_ACTION_SHEET_PRESENTED"), e.preventDefault(), e.currentTarget instanceof HTMLElement && e.currentTarget.focus()
            } : void 0, eS[246] = io, eS[247] = aM, eS[248] = aq, eS[249] = eb) : eb = eS[249];
            let ib = aI ? "imageSheet" : void 0,
                iv = aI && eU?.layout === "two-rows";
            eS[250] !== at || eS[251] !== aa || eS[252] !== ai || eS[253] !== a0 || eS[254] !== ex || eS[255] !== J || eS[256] !== id || eS[257] !== il || eS[258] !== ic || eS[259] !== eI || eS[260] !== eM || eS[261] !== aG || eS[262] !== ak || eS[263] !== a7 || eS[264] !== aA || eS[265] !== aN || eS[266] !== e9 || eS[267] !== az || eS[268] !== aU || eS[269] !== aL || eS[270] !== a6 || eS[271] !== eW || eS[272] !== eU || eS[273] !== eB || eS[274] !== eZ || eS[275] !== e1 || eS[276] !== ia || eS[277] !== aP || eS[278] !== e8 || eS[279] !== e3 || eS[280] !== aJ || eS[281] !== aI || eS[282] !== aq || eS[283] !== e7 ? (ev = aq ? (0, t.jsx)(t.Fragment, {
                children: (0, t.jsx)(eA, {
                    mobileImageActions: aI && null != eU ? {
                        experience: eU,
                        canNativeShare: "public" === aJ && null != a0 && (0, O.a)(a0?.shareLinkUrl),
                        onNativeShare: () => {
                            il()
                        }
                    } : void 0,
                    copyLabel: ia,
                    copyDisabled: eM?.actionsDisabled || a7 || a6 || aN || "blocked" === J,
                    isBusy: a6 || a7 || e9,
                    isDownloading: ak,
                    socialDestinationsDisabled: eM?.actionsDisabled || a7 || a6 || aN || "public" !== aJ || "blocked" === J,
                    showSocialDestinations: "public" === aJ,
                    additionalActions: void 0,
                    onDownload: null != eM || null == eI || aN ? void 0 : () => {
                        id()
                    },
                    onCopy: () => {
                        aL || aU || (0, N.f)(e8, "copy", aA ? aG : void 0)
                    },
                    onSocialShare: (e, a) => {
                        ic(e, a)
                    }
                })
            }) : void 0, eS[250] = at, eS[251] = aa, eS[252] = ai, eS[253] = a0, eS[254] = ex, eS[255] = J, eS[256] = id, eS[257] = il, eS[258] = ic, eS[259] = eI, eS[260] = eM, eS[261] = aG, eS[262] = ak, eS[263] = a7, eS[264] = aA, eS[265] = aN, eS[266] = e9, eS[267] = az, eS[268] = aU, eS[269] = aL, eS[270] = a6, eS[271] = eW, eS[272] = eU, eS[273] = eB, eS[274] = eZ, eS[275] = e1, eS[276] = ia, eS[277] = aP, eS[278] = e8, eS[279] = e3, eS[280] = aJ, eS[281] = aI, eS[282] = aq, eS[283] = e7, eS[284] = ev) : ev = eS[284], eS[285] !== eL || eS[286] !== aW || eS[287] !== a6 || eS[288] !== aB || eS[289] !== aJ || eS[290] !== aV || eS[291] !== aI || eS[292] !== aq ? (ek = aq ? (0, t.jsxs)(t.Fragment, {
                children: [null != eL && (aI ? (0, t.jsx)("div", {
                    className: "px-6",
                    children: eL(a6)
                }) : (0, t.jsx)(f.e, {
                    className: "pt-5",
                    children: eL(a6)
                })), !aI && (0, t.jsx)(eF, {
                    audience: aJ,
                    contentType: aB,
                    isPoll: aW,
                    showImageRightsNotice: aV
                })]
            }) : void 0, eS[285] = eL, eS[286] = aW, eS[287] = a6, eS[288] = aB, eS[289] = aJ, eS[290] = aV, eS[291] = aI, eS[292] = aq, eS[293] = ek) : ek = eS[293], eS[294] !== J || eS[295] !== eM || eS[296] !== a3 ? (ew = null == J ? void 0 : {
                content: (0, t.jsx)(eX, {
                    error: J
                }),
                copyUrl: "copy-failed" === J ? a3 : void 0,
                preventsSharing: "blocked" === J && null == eM
            }, eS[294] = J, eS[295] = eM, eS[296] = a3, eS[297] = ew) : ew = eS[297];
            let ik = aV && !a4 && !aA,
                iw = !az || aF;
            return eS[298] !== aK || eS[299] !== ik || eS[300] !== iw ? (eT = (0, t.jsx)(eQ, {
                showImageRightsNotice: ik,
                showContentNotices: iw,
                privacyNotices: aK
            }), eS[298] = aK, eS[299] = ik, eS[300] = iw, eS[301] = eT) : eT = eS[301], eS[302] !== al || eS[303] !== io || eS[304] !== aM ? (e_ = () => {
                aM && io("CHATGPT_SHARE_FLOW_ACTION_DISMISSED"), al()
            }, eS[302] = al, eS[303] = io, eS[304] = aM, eS[305] = e_) : e_ = eS[305], eS[306] !== ir ? (ey = () => {
                ir()
            }, eS[306] = ir, eS[307] = ey) : ey = eS[307], eS[308] !== eg || eS[309] !== Z || eS[310] !== aY || eS[311] !== eu || eS[312] !== ig || eS[313] !== em || eS[314] !== ef || eS[315] !== ip || eS[316] !== iu || eS[317] !== im || eS[318] !== eb || eS[319] !== ib || eS[320] !== iv || eS[321] !== ev || eS[322] !== ek || eS[323] !== ew || eS[324] !== eT || eS[325] !== e_ || eS[326] !== ey ? (eC = (0, t.jsx)(S.a, {
                threadTitle: aY,
                title: Z,
                subtitle: ig,
                audience: em,
                actionLabel: ef,
                actionDisabled: ip,
                isBusy: iu,
                isDismissalDisabled: im,
                onOpenAutoFocus: eb,
                size: eg,
                presentation: ib,
                compactImageSheetFooter: iv,
                footer: ev,
                preview: eu,
                info: ek,
                error: ew,
                notices: eT,
                onClose: e_,
                onSubmit: ey
            }), eS[308] = eg, eS[309] = Z, eS[310] = aY, eS[311] = eu, eS[312] = ig, eS[313] = em, eS[314] = ef, eS[315] = ip, eS[316] = iu, eS[317] = im, eS[318] = eb, eS[319] = ib, eS[320] = iv, eS[321] = ev, eS[322] = ek, eS[323] = ew, eS[324] = eT, eS[325] = e_, eS[326] = ey, eS[327] = eC) : eC = eS[327], eC
        }

        function eE(e) {
            return null != e.src && "completed" === e.status && !e.isPreview
        }

        function eP() {}

        function eD(e) {
            let {
                shareLinkUrl: a
            } = e;
            return a
        }
        async function eN() {
            throw Error("Image share is unavailable")
        }

        function eG() {
            return L.a.safeGet("/wham/accounts/check")
        }

        function eR() {
            return crypto.randomUUID()
        }

        function eF(e) {
            let a, i, n, r, o, l, c, d = (0, s.c)(58),
                {
                    audience: g,
                    contentType: p,
                    isPoll: u,
                    showImageRightsNotice: m
                } = e,
                b = "workspace" === g ? v.Ie : v.Pd;
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
                            learnMore: eY
                        }
                    }), d[0] = p, d[1] = a) : a = d[1], e = a
                } else if ("conversation" === p) {
                    let a;
                    d[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, t.jsx)(h.a, {
                        id: "chatgptConversations.shareDialog.workspaceConversationMemoryDisclosure",
                        defaultMessage: "Links are visible to workspace members only. Memory sources won't be shared with viewers. <learnMore>Learn more</learnMore>",
                        description: "Audience and privacy explanation in the merged-web workspace conversation sharing dialog. Shared links are restricted to workspace members and do not give viewers access to underlying Memory sources. The learnMore tag links to shared-links help.",
                        values: {
                            learnMore: eV
                        }
                    }), d[2] = a) : a = d[2], e = a
                } else {
                    let a;
                    d[3] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, t.jsx)(h.a, {
                        ...eJ.workspaceLinksVisibleWithLearnMore,
                        values: {
                            learnMore: eK
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
                        ...eJ.shareLinkToWidget
                    }), d[6] = e) : e = d[6], a = e
                } else if ("images" === p) {
                    let e;
                    d[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...eJ.shareLinkToImages
                    }), d[7] = e) : e = d[7], a = e
                } else if ("gif" === p) {
                    let e;
                    d[8] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...eJ.shareLinkToGif
                    }), d[8] = e) : e = d[8], a = e
                } else if ("image" === p) {
                    let e;
                    d[9] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...eJ.shareLinkToImage
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
                        ...eJ.shareLinkToMessage
                    }), d[11] = e) : e = d[11], a = e
                } else if ("prompt" === p) {
                    let e;
                    d[12] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...eJ.shareLinkToPrompt
                    }), d[12] = e) : e = d[12], a = e
                } else {
                    let e;
                    d[13] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...eJ.shareLinkToConversation
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
                        ...eJ.imageLicenseDisclaimer
                    }), d[16] = e) : e = d[16], i = e
                }
                if ("widget" === p) {
                    let e;
                    d[17] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...eJ.shareLinkToWidget
                    }), d[17] = e) : e = d[17], a = e
                } else if ("images" === p) {
                    let e;
                    d[18] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...eJ.shareLinkToImages
                    }), d[18] = e) : e = d[18], a = e
                } else if ("gif" === p) {
                    let e;
                    d[19] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...eJ.shareLinkToGif
                    }), d[19] = e) : e = d[19], a = e
                } else if ("image" === p) {
                    let e;
                    d[20] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...eJ.shareLinkToImage
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
                        ...eJ.shareLinkToMessage
                    }), d[22] = e) : e = d[22], a = e
                } else if ("prompt" === p) {
                    let e;
                    d[23] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...eJ.shareLinkToPrompt
                    }), d[23] = e) : e = d[23], a = e
                } else {
                    let e;
                    d[24] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...eJ.shareLinkToConversation
                    }), d[24] = e) : e = d[24], a = e
                }
            } else if ("widget" === p) {
                let e, s;
                d[25] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                    ...eJ.sharePublicLinkToWidget
                }), d[25] = e) : e = d[25], a = e, d[26] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(t.Fragment, {
                        children: (0, t.jsx)(h.a, {
                            id: "chatgptConversations.widgetShare.publicAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access this widget. <learnMore>Learn more</learnMore>",
                            description: "Audience explanation when sharing a generated Recharts widget. The learnMore tag links to shared-links help in merged web.",
                            values: {
                                learnMore: eB
                            }
                        })
                    }), null]
                }), d[26] = s) : s = d[26], i = s
            } else if ("images" === p) {
                let e, s;
                d[27] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                    ...eJ.sharePublicLinkToImages
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
                        learnMore: ez
                    }
                }), d[30] = s) : s = d[30], i = s
            } else if ("image" === p) {
                let e, s;
                d[31] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                    ...eJ.sharePublicLinkToImage
                }), d[31] = e) : e = d[31], a = e, d[32] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(t.Fragment, {
                        children: (0, t.jsx)(h.a, {
                            id: "chatgptConversations.shareDialog.imagePublicLinkAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access this image. Confirm you have the rights to share this image. <learnMore>Learn more</learnMore>",
                            description: "Audience and legal-permission reminder when sharing an image. Anyone with the link can view the image; the user must have permission to share it. The learnMore tag links to shared-links help in merged web. All sentences appear in one paragraph.",
                            values: {
                                learnMore: eU
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
                    ...eJ.sharePublicLinkToMessage
                }), d[35] = u, d[36] = e) : e = d[36], a = e, d[37] !== u ? (s = (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(t.Fragment, {
                        children: u ? (0, t.jsx)(h.a, {
                            id: "chatgptConversations.shareDialog.poll.publicAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access and vote on this poll. <learnMore>Learn more</learnMore>",
                            description: "Explanation below a public poll link preview in the web sharing dialog. Tells the person sharing that link recipients can open the poll and vote. The learnMore tag links to shared-links help.",
                            values: {
                                learnMore: eW
                            }
                        }) : (0, t.jsx)(h.a, {
                            id: "chatgptConversations.shareDialog.messagePublicLinkAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access this message. <learnMore>Learn more</learnMore>",
                            description: "Audience explanation when sharing a response. The learnMore tag links to shared-links help in merged web.",
                            values: {
                                learnMore: eH
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
                                learnMore: eO
                            }
                        })
                    }), null]
                }), d[40] = s) : s = d[40], i = s
            } else {
                let e, s;
                d[41] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                    ...eJ.sharePublicLinkToConversation
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

        function eO(e) {
            return (0, t.jsx)(z, {
                children: e
            })
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

        function eq(e) {
            return (0, t.jsx)(z, {
                children: e
            })
        }

        function eB(e) {
            return (0, t.jsx)(z, {
                children: e
            }, "learn-more")
        }

        function eK(e) {
            return (0, t.jsx)(z, {
                children: e
            })
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
            let a, i = (0, s.c)(4),
                {
                    src: n,
                    isLoading: r
                } = e;
            if (null != n) {
                let e;
                return i[0] !== n ? (e = (0, t.jsx)("img", {
                    alt: "",
                    className: "block size-full object-contain",
                    referrerPolicy: "no-referrer",
                    src: n
                }), i[0] = n, i[1] = e) : e = i[1], e
            }
            return i[2] !== r ? (a = (0, t.jsx)("div", {
                className: "flex h-full items-center justify-center gap-2 text-sm text-secondary",
                children: r ? (0, t.jsx)(k.a, {
                    className: "icon-sm"
                }) : (0, t.jsx)(h.a, {
                    ...eJ.imageUnavailable
                })
            }), i[2] = r, i[3] = a) : a = i[3], a
        }

        function eQ(e) {
            let a, i, n, r, o, l = (0, s.c)(16),
                {
                    showImageRightsNotice: c,
                    showContentNotices: d,
                    privacyNotices: g
                } = e;
            return l[0] !== g?.hasUnsupportedCodeInterpreterContent || l[1] !== d ? (a = d && g?.hasUnsupportedCodeInterpreterContent ? (0, t.jsx)(f.e, {
                children: (0, t.jsx)(m.a, {
                    content: (0, t.jsx)(h.a, {
                        ...eJ.filesNotShared
                    }),
                    variant: "privacyNotice"
                })
            }) : null, l[0] = g?.hasUnsupportedCodeInterpreterContent, l[1] = d, l[2] = a) : a = l[2], l[3] !== g?.hasPersonalizedSources || l[4] !== d ? (i = d && g?.hasPersonalizedSources ? (0, t.jsx)(f.e, {
                children: (0, t.jsx)(m.a, {
                    content: (0, t.jsx)(h.a, {
                        ...eJ.personalizedSourcesPrivate
                    }),
                    variant: "privacyNotice"
                })
            }) : null, l[3] = g?.hasPersonalizedSources, l[4] = d, l[5] = i) : i = l[5], l[6] !== g?.hasScreenshotReference || l[7] !== d ? (n = d && g?.hasScreenshotReference ? (0, t.jsx)(f.e, {
                children: (0, t.jsx)(m.a, {
                    content: (0, t.jsx)(h.a, {
                        ...eJ.screenshotDisclaimer
                    }),
                    variant: "privacyNotice"
                })
            }) : null, l[6] = g?.hasScreenshotReference, l[7] = d, l[8] = n) : n = l[8], l[9] !== c ? (r = c ? (0, t.jsx)(f.e, {
                children: (0, t.jsx)("p", {
                    className: "text-sm text-secondary select-none",
                    children: (0, t.jsx)(h.a, {
                        ...eJ.imageLicenseDisclaimer
                    })
                })
            }) : null, l[9] = c, l[10] = r) : r = l[10], l[11] !== a || l[12] !== i || l[13] !== n || l[14] !== r ? (o = (0, t.jsxs)(t.Fragment, {
                children: [a, i, n, r]
            }), l[11] = a, l[12] = i, l[13] = n, l[14] = r, l[15] = o) : o = l[15], o
        }

        function eX(e) {
            let a = (0, s.c)(3),
                {
                    error: i
                } = e;
            switch (i) {
                case "blocked": {
                    let e;
                    return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...eJ.shareBlocked
                    }), a[0] = e) : e = a[0], e
                }
                case "copy-failed": {
                    let e;
                    return a[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...eJ.shareCopyFailed
                    }), a[1] = e) : e = a[1], e
                }
                case "create-failed": {
                    let e;
                    return a[2] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(h.a, {
                        ...eJ.shareCreateFailed
                    }), a[2] = e) : e = a[2], e
                }
            }
        }
        let eJ = (0, g.f)({
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
                        k = !1;
                    if (null != f && await (0, r.d)({
                            downloadSrc: f,
                            onDownloaded: () => {
                                k = !0, null != h && !g && p && (0, l.c)(e, h, m, "download")
                            },
                            suggestedFilename: i.length > 1 ? v.replace(/\.[^.]+$/, `-${a+1}.${b}`) : v
                        })) {
                        if (!k) return "cancelled";
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
            o = i("ygO2"),
            l = i("JNtf"),
            c = i("mUDD"),
            d = i("HOLv"),
            h = i("CsDP"),
            g = i("UAZ3");

        function p(e) {
            let a, i, p, u, m, f, b, v, k = (0, s.c)(44),
                {
                    children: w,
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
            k[0] !== F || k[1] !== _ || k[2] !== H || k[3] !== O || k[4] !== W || k[5] !== M || k[6] !== A || k[7] !== I ? (a = W ? (0, t.jsxs)("div", {
                className: (0, n.b)("shrink-0", "imageSheetHeader-vPz2gu", F && "imageSheetTwoRowsHeader-udlzI8"),
                children: [(0, t.jsx)(l.e, {
                    className: "imageSheetTitle-iMmEfF",
                    children: I
                }), null != A && (0, t.jsx)(l.d, {
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
                    title: (0, t.jsx)(l.e, {
                        className: "contents",
                        children: I
                    }),
                    titleClassName: "truncate",
                    subtitle: null == A ? void 0 : (0, t.jsx)(l.d, {
                        className: "contents",
                        children: A
                    })
                }), _]
            }), k[0] = F, k[1] = _, k[2] = H, k[3] = O, k[4] = W, k[5] = M, k[6] = A, k[7] = I, k[8] = a) : a = k[8], k[9] !== T || k[10] !== a ? (i = (0, t.jsxs)(t.Fragment, {
                children: [a, T]
            }), k[9] = T, k[10] = a, k[11] = i) : i = k[11];
            let U = i;
            k[12] !== A ? (p = null == A ? {
                "aria-describedby": void 0
            } : {}, k[12] = A, k[13] = p) : p = k[13], k[14] !== L || k[15] !== E ? (u = e => {
                e.currentTarget instanceof HTMLElement && E?.(e.currentTarget), L?.(e)
            }, k[14] = L, k[15] = E, k[16] = u) : u = k[16], k[17] !== j || k[18] !== p || k[19] !== u ? (m = {
                ...p,
                shouldStopPointerDownPropagation: !1,
                onCloseAutoFocus: j,
                onOpenAutoFocus: u
            }, k[17] = j, k[18] = p, k[19] = u, k[20] = m) : m = k[20];
            let z = !O && !W,
                q = N ?? "opaque",
                B = W ? "imageSheetSurface-pAxv7i" : void 0,
                K = W ? "imageSheetOverlay-Da_SGi" : void 0;
            return k[21] !== O || k[22] !== M ? (f = e => {
                e || O || M()
            }, k[21] = O, k[22] = M, k[23] = f) : f = k[23], k[24] !== w || k[25] !== R || k[26] !== F || k[27] !== y || k[28] !== U || k[29] !== O || k[30] !== W || k[31] !== P ? (b = W ? (0, t.jsxs)(c.b, {
                as: null == P ? "div" : "form",
                variant: "chatgpt",
                className: (0, n.b)("imageSheetBody-YQy31R", "min-h-0", F && "imageSheetTwoRowsBody-mMGp9m"),
                onSubmit: null == P ? void 0 : e => {
                    e.preventDefault(), e.stopPropagation(), O || P()
                },
                children: [(0, t.jsxs)("div", {
                    className: "flex min-h-0 flex-col",
                    children: [U, w]
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
                children: w
            }), k[24] = w, k[25] = R, k[26] = F, k[27] = y, k[28] = U, k[29] = O, k[30] = W, k[31] = P, k[32] = b) : b = k[32], k[33] !== O || k[34] !== W || k[35] !== D || k[36] !== q || k[37] !== B || k[38] !== K || k[39] !== f || k[40] !== b || k[41] !== m || k[42] !== z ? (v = (0, t.jsx)(l.b, {
                open: !0,
                contentOverflow: "visible",
                contentProps: m,
                shouldIgnoreClickOutside: O,
                showDialogClose: z,
                size: D,
                variant: q,
                unstyledContent: W,
                contentClassName: B,
                overlayClassName: K,
                onOpenChange: f,
                children: b
            }), k[33] = O, k[34] = W, k[35] = D, k[36] = q, k[37] = B, k[38] = K, k[39] = f, k[40] = b, k[41] = m, k[42] = z, k[43] = v) : v = k[43], v
        }
    }),
    TnP0: (function(e, a, i) {
        var t = i("ABep"),
            s = i("QosV"),
            n = i("Wf1j"),
            r = i("oyxz"),
            o = i("ygO2"),
            l = i("mUDD"),
            c = i("bf6R"),
            d = i("evwP"),
            h = i("zLIa"),
            g = i("sX4C");
        i.d(a, {}, {
            a: function(e) {
                let a, i, p, u, m, f, b, v = (0, s.c)(38),
                    {
                        accessControls: k,
                        actionDisabled: w,
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
                v[2] !== A ? (i = A ? null : (0, t.jsx)(c.we, {}), v[2] = A, v[3] = i) : i = v[3], v[4] !== T || v[5] !== i ? (p = (0, t.jsxs)(t.Fragment, {
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
                let z = !C?.preventsSharing && w;
                v[9] !== U || v[10] !== A || v[11] !== z ? (u = (0, t.jsx)(o.a, {
                    color: "outline",
                    disabled: z,
                    loading: A,
                    size: "medium",
                    type: "submit",
                    children: U
                }), v[9] = U, v[10] = A, v[11] = z, v[12] = u) : u = v[12];
                let q = u;
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
                let B = C?.preventsSharing ? C.onRetry ?? L : P,
                    K = C?.preventsSharing ? q : S ?? q;
                return v[16] !== k || v[17] !== _ || v[18] !== C || v[19] !== x || v[20] !== H || v[21] !== M || v[22] !== N || v[23] !== D ? (f = C?.preventsSharing ? (0, t.jsx)(l.e, {
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
                    }), x, M, k ?? (null == _ ? null : (0, t.jsx)(l.e, {
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
                }), v[16] = k, v[17] = _, v[18] = C, v[19] = x, v[20] = H, v[21] = M, v[22] = N, v[23] = D, v[24] = f) : f = v[24], v[25] !== y || v[26] !== I || v[27] !== L || v[28] !== j || v[29] !== E || v[30] !== N || v[31] !== R || v[32] !== G || v[33] !== m || v[34] !== B || v[35] !== K || v[36] !== f ? (b = (0, t.jsx)(g.a, {
                    title: m,
                    subtitle: G,
                    compactImageSheetFooter: y,
                    isDismissalDisabled: I,
                    onClose: L,
                    onOpenAutoFocus: j,
                    onPortalContainerChange: E,
                    onSubmit: B,
                    size: R,
                    presentation: N,
                    footer: K,
                    children: f
                }), v[25] = y, v[26] = I, v[27] = L, v[28] = j, v[29] = E, v[30] = N, v[31] = R, v[32] = G, v[33] = m, v[34] = B, v[35] = K, v[36] = f, v[37] = b) : b = v[37], b
            }
        })
    })
};