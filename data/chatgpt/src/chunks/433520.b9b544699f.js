export const __rspack_esm_id = 433520;
export const __rspack_esm_ids = [433520];
export const __webpack_modules__ = {
    GHCC: (function(e, a, t) {
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
            a: () => eL,
            ChatGptConversationShareRecoveryDialog: () => eM
        });
        var i = t("ABep"),
            s = t("QosV"),
            n = t("FS1B"),
            r = t("BOYb"),
            o = t("T0Rc"),
            l = t("iTtm"),
            c = t("zd8w"),
            d = t("Wf1j"),
            h = t("oyxz"),
            g = t("Qgfj"),
            p = t("O0M0"),
            u = t("Cslg"),
            m = t("zKCW"),
            f = t("mUDD"),
            b = t("Ot7V"),
            k = t("bf6R"),
            v = t("RNul"),
            w = t("SGsN"),
            T = t("yGJW"),
            _ = t("OWtl"),
            y = t("akkX"),
            C = t("FGv0"),
            S = t("TnP0"),
            x = t("qKAH"),
            A = t("zHp1"),
            I = t("WFY2"),
            M = t("rvFo"),
            L = t("HFSu"),
            j = t("taWv"),
            E = t("r9i9"),
            P = t("Y7np"),
            D = t("oU3c"),
            N = t("SEBt"),
            G = t("OOaz"),
            F = t("fwwN"),
            O = t("cQW3"),
            R = t("Tywu"),
            H = t("rfhJ"),
            W = t("PAiv");

        function U(e) {
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
                        learnMore: e => (0, i.jsx)(z, {
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
                    learnMore: e => (0, i.jsx)(z, {
                        appearance: o,
                        children: e
                    })
                }
            }), t[2] = o, t[3] = a) : a = t[3], a
        }

        function z(e) {
            let a, t = (0, s.c)(3),
                {
                    children: n,
                    appearance: r
                } = e,
                o = void 0 === r ? "secondary" : r;
            return t[0] !== o || t[1] !== n ? (a = (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(W.a, {
                    appearance: o,
                    href: "https://help.openai.com/en/articles/7925741-chatgpt-shared-links",
                    initiator: "open_in_browser_bridge",
                    openTarget: "external-browser",
                    underline: "always",
                    children: n
                })
            }), t[0] = o, t[1] = n, t[2] = a) : a = t[2], a
        }
        var q = t("k5RO"),
            B = t("on57"),
            K = t("WAV0"),
            V = t("GHCC"),
            Y = t.p + "assets/line.54d213ef65.svg",
            $ = t("hZax"),
            Q = t("O666"),
            X = t("CJOc"),
            J = t("ygO2"),
            Z = t("HOLv"),
            ee = t.p + "assets/facebook.a44c3b23dc.svg",
            ea = t.p + "assets/instagram.f89c02c412.svg",
            et = t.p + "assets/kakao-talk.9a71acddc9.svg",
            ei = t.p + "assets/line.8701c39f94.svg",
            es = t.p + "assets/linkedin.a0e21ee4e9.svg",
            en = t.p + "assets/messages.65e1f7f9bb.svg",
            er = t.p + "assets/reddit.ef23b998c8.svg",
            eo = t.p + "assets/snapchat.68114a3519.svg",
            el = t.p + "assets/telegram.4e098d17e4.svg",
            ec = t.p + "assets/whatsapp.95a74777d3.svg",
            ed = t.p + "assets/x.f402deb07e.svg",
            eh = t.p + "assets/facebook-messenger.d2456ff12a.svg",
            eg = t.p + "assets/facebook-stories.a4b3bd52fa.svg",
            ep = t.p + "assets/instagram-stories.c90c585419.svg",
            eu = t.p + "assets/kakao-talk.a52fcff4cb.svg",
            em = t.p + "assets/linkedin.61d30fb4b9.svg",
            ef = t.p + "assets/messages.eed095b840.svg",
            eb = t.p + "assets/reddit.960af71a47.svg",
            ek = t.p + "assets/telegram.b7e1212639.svg",
            ev = t.p + "assets/whatsapp.0a1329508c.svg",
            ew = t.p + "assets/x.1105bc9892.svg",
            eT = "mobileRow-V0E64y",
            e_ = t("u501"),
            ey = t("ucE8"),
            eC = t("mahZ");

        function eS(e) {
            let a, t, n, r, o, l = (0, s.c)(35),
                {
                    copyLabel: c,
                    copyDisabled: h,
                    isBusy: g,
                    isDownloading: p,
                    socialDestinationsDisabled: u,
                    showSocialDestinations: m,
                    onCopy: f,
                    onDownload: b,
                    additionalActions: k,
                    onSocialShare: w,
                    experience: T,
                    onNativeShare: _,
                    canNativeShare: y,
                    country: C
                } = e,
                S = (0, d.a)();
            if (l[0] !== k || l[1] !== y || l[2] !== h || l[3] !== c || l[4] !== C || l[5] !== T.layout || l[6] !== T.unsupportedDestinationFallback || l[7] !== S || l[8] !== g || l[9] !== p || l[10] !== f || l[11] !== b || l[12] !== _ || l[13] !== w || l[14] !== m || l[15] !== u) {
                r = Symbol.for("react.early_return_sentinel");
                e: {
                    let e, s, o = null == b ? [] : [{
                        id: "download",
                        disabled: p || g,
                        icon: (0, i.jsx)(Z.a, {
                            asset: e_.a
                        }),
                        label: S.formatMessage({
                            id: "chatgptConversations.shareDialog.destination.download.label",
                            defaultMessage: "Download",
                            description: "Short label below a circular button in the generated-image Share dialog. Saves the selected image, or all images in the selected series, to the user's device without creating a shared link."
                        }),
                        onClick: b
                    }];l[20] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(Z.a, {
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
                            icon: (0, i.jsx)(Z.a, {
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
                                    a = c(ef), t = d(en), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.messages",
                                        defaultMessage: "Messages",
                                        description: "Short destination label in the mobile generated-image share sheet. Selecting it opens a text-message draft containing the public image link. This means the device's Messages app, not ChatGPT messages."
                                    });
                                    break;
                                case "whatsapp":
                                    a = c(ev), t = d(ec), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.whatsapp",
                                        defaultMessage: "WhatsApp",
                                        description: "Short destination label in the mobile generated-image share sheet. Selecting it opens WhatsApp with the public image link ready to send. WhatsApp is a brand name."
                                    });
                                    break;
                                case "instagram-stories":
                                    a = c(ep), t = d(ea), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.instagramStories",
                                        defaultMessage: "Instagram",
                                        description: "Short destination label in the mobile generated-image share sheet for sharing through Instagram Stories. Depending on the experiment assignment, selecting it opens the operating-system share sheet or the Instagram app-store page. Instagram is a brand name."
                                    });
                                    break;
                                case "facebook-stories":
                                    a = c(eg), t = d(ee), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.facebookStories",
                                        defaultMessage: "Facebook",
                                        description: "Short destination label in the mobile generated-image share sheet for sharing through Facebook Stories. Depending on the experiment assignment, selecting it opens the operating-system share sheet or the Facebook app-store page. Facebook is a brand name."
                                    });
                                    break;
                                case "telegram":
                                    a = c(ek), t = d(el), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.telegram",
                                        defaultMessage: "Telegram",
                                        description: "Short destination label in the mobile generated-image share sheet. Selecting it opens Telegram with the public image link ready to send. Telegram is a brand name."
                                    });
                                    break;
                                case "facebook-messenger":
                                    a = c(eh), t = d(ee), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.facebookMessenger",
                                        defaultMessage: "Messenger",
                                        description: "Short destination label in the mobile generated-image share sheet for Facebook Messenger. Depending on the experiment assignment, selecting it opens the operating-system share sheet or the Messenger app-store page. Messenger is a brand name."
                                    });
                                    break;
                                case "kakao-talk":
                                    a = c(eu), t = d(et), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.kakaoTalk",
                                        defaultMessage: "KakaoTalk",
                                        description: "Short destination label shown to users in Korea in the mobile generated-image share sheet. Depending on the experiment assignment, selecting it opens the operating-system share sheet or the KakaoTalk app-store page. KakaoTalk is a brand name."
                                    });
                                    break;
                                case "snapchat-stories":
                                    a = (0, i.jsx)(X.a, {
                                        "aria-hidden": "true",
                                        className: "text-brand-logo-foreground"
                                    }), t = d(eo), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.snapchatStories",
                                        defaultMessage: "Snapchat",
                                        description: "Short destination label in the mobile generated-image share sheet for sharing through Snapchat Stories. Depending on the experiment assignment, selecting it opens the operating-system share sheet or the Snapchat app-store page. Snapchat is a brand name."
                                    });
                                    break;
                                case "line":
                                    a = c(Y), t = d(ei), s = o.formatMessage({
                                        id: "postSharingModal.line",
                                        defaultMessage: "LINE",
                                        description: "Short label for the LINE destination in ChatGPT conversation, message, and image sharing dialogs and menus. Selecting it opens LINE sharing so the user can choose recipients and send the shared link. Appears alongside X and LinkedIn. LINE is a messaging app brand name; keep its Latin letters and capitalization."
                                    });
                                    break;
                                case "x":
                                    a = c(ew), t = d(ed), s = o.formatMessage({
                                        id: "chatgptConversations.shareDialog.destination.x.label",
                                        defaultMessage: "X",
                                        description: "Short destination label below a circular button in a ChatGPT post sharing dialog for a conversation, response, or generated image. Selecting it opens X's post composer with the public post URL."
                                    });
                                    break;
                                case "linkedin":
                                    a = c(em), t = d(es), s = o.formatMessage({
                                        id: "chatgptConversations.shareDialog.destination.linkedin.label",
                                        defaultMessage: "LinkedIn",
                                        description: "Short destination label below a circular button in a ChatGPT post sharing dialog for a conversation, response, or generated image. Selecting it opens LinkedIn's post composer with the public post URL."
                                    });
                                    break;
                                case "reddit":
                                    a = c(eb), t = d(er), s = o.formatMessage({
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
                            disabled: u || "native-share" === T.unsupportedDestinationFallback && (0, q.g)(e) && !y,
                            intl: S,
                            onSocialShare: w
                        })) : [],
                        M = "two-rows" === T.layout && I.length > 0;l[21] !== g || l[22] !== p ? (s = (e, a) => {
                        let {
                            id: t,
                            disabled: s,
                            icon: n,
                            iconBackground: r,
                            label: o,
                            onClick: l
                        } = e, c = "copy" === t && g || "download" === t && p;
                        return (0, i.jsx)(K.a, {
                            extension: "download" === t,
                            children: (0, i.jsxs)(J.a, {
                                "aria-label": o,
                                "aria-busy": c,
                                color: "shareDestination",
                                unstyled: !0,
                                className: (0, B.b)("mobileDestination-JRc58g", a && "mobileTwoRowDestination-jahy9S"),
                                "data-destination": t,
                                disabled: s,
                                size: "shareDestination",
                                type: "copy" === t ? "submit" : "button",
                                onClick: l,
                                children: [(0, i.jsxs)("span", {
                                    className: (0, B.b)("destinationIcon-EuU6jl", null != r && "destinationIconWithArtwork-eYPnWH"),
                                    children: [r, (0, i.jsx)("span", {
                                        className: "destinationIconForeground-usBliy",
                                        children: c ? (0, i.jsx)(v.a, {
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
                    }, l[21] = g, l[22] = p, l[23] = s) : s = l[23];
                    let L = s;
                    if (M) {
                        let e, a, t, s, n = [...o, ...x, d];
                        l[24] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, B.b)("box-border flex min-w-0 w-full gap-x-5 overflow-x-auto overscroll-x-contain px-5 pt-5 pb-8", eT), l[24] = e) : e = l[24], l[25] !== L ? (a = e => L(e, !0), l[25] = L, l[26] = a) : a = l[26], l[27] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, i.jsx)("div", {
                            className: "w-full border-t-hairline border-default",
                            "aria-hidden": "true"
                        }), l[27] = t) : t = l[27], l[28] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, B.b)("box-border flex min-w-0 w-full gap-x-5 overflow-x-auto overscroll-x-contain px-5 pt-5 pb-8", eT, "mobileUtilityRow-iCKQaL"), l[28] = s) : s = l[28], r = (0, i.jsxs)("div", {
                            className: "flex w-full min-w-0 flex-col",
                            children: [(0, i.jsx)("div", {
                                "data-mobile-image-share-row": "destinations",
                                className: e,
                                children: I.map(a)
                            }), t, (0, i.jsxs)("div", {
                                "data-mobile-image-share-row": "actions",
                                className: s,
                                children: [n.map(e => L(e, !0)), k]
                            })]
                        });
                        break e
                    }
                    a = "combined",
                    l[29] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, B.b)("flex w-full gap-x-6 overflow-x-auto overscroll-x-contain px-6", eT), l[29] = t) : t = l[29],
                    n = [...A, ...I].map(e => L(e, !1))
                }
                l[0] = k, l[1] = y, l[2] = h, l[3] = c, l[4] = C, l[5] = T.layout, l[6] = T.unsupportedDestinationFallback, l[7] = S, l[8] = g, l[9] = p, l[10] = f, l[11] = b, l[12] = _, l[13] = w, l[14] = m, l[15] = u, l[16] = a, l[17] = t, l[18] = n, l[19] = r
            } else a = l[16], t = l[17], n = l[18], r = l[19];
            return r !== Symbol.for("react.early_return_sentinel") ? r : (l[30] !== k || l[31] !== a || l[32] !== t || l[33] !== n ? (o = (0, i.jsxs)("div", {
                "data-mobile-image-share-row": a,
                className: t,
                children: [n, k]
            }), l[30] = k, l[31] = a, l[32] = t, l[33] = n, l[34] = o) : o = l[34], o)
        }

        function ex(e) {
            let a, t, n, r, o, c, d = (0, s.c)(22),
                {
                    "aria-label": h,
                    "data-destination": g,
                    disabled: p,
                    icons: u,
                    isBusy: m,
                    label: f,
                    announceLabel: b,
                    type: k,
                    onClick: w
                } = e,
                T = void 0 !== m && m,
                _ = void 0 === k ? "button" : k;
            d[0] === Symbol.for("react.memo_cache_sentinel") ? (a = {
                layer: "3136899520",
                parameter: "large_share_destinations"
            }, d[0] = a) : a = d[0];
            let y = (0, l.x)(Q.b, a),
                C = y ? u.large : u.compact,
                S = y ? "size-16" : "size-11";
            d[1] !== S ? (t = (0, B.b)("share-destination-icon flex items-center justify-center rounded-full", S), d[1] = S, d[2] = t) : t = d[2], d[3] !== y || d[4] !== C || d[5] !== T ? (n = T ? (0, i.jsx)(v.a, {
                as: "span",
                className: y ? "size-8" : "icon-sm"
            }) : C, d[3] = y, d[4] = C, d[5] = T, d[6] = n) : n = d[6], d[7] !== t || d[8] !== n ? (r = (0, i.jsx)("span", {
                className: t,
                children: n
            }), d[7] = t, d[8] = n, d[9] = r) : r = d[9];
            let x = void 0 !== b && b ? "polite" : void 0;
            return d[10] !== f || d[11] !== x ? (o = (0, i.jsx)("span", {
                className: "w-full text-center text-xs whitespace-nowrap text-default select-none",
                "aria-live": x,
                children: f
            }), d[10] = f, d[11] = x, d[12] = o) : o = d[12], d[13] !== h || d[14] !== g || d[15] !== p || d[16] !== T || d[17] !== w || d[18] !== o || d[19] !== r || d[20] !== _ ? (c = (0, i.jsxs)(J.a, {
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
            let a, t, n, r, o, c, h, g, p, u, m, f, b = (0, s.c)(54),
                {
                    copyLabel: v,
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
            b[2] !== D ? (t = D.getContext().user?.country?.trim().toUpperCase(), b[2] = D, b[3] = t) : t = b[3];
            let N = t,
                G = null == M && "JP" === N && C,
                F = !G;
            b[4] !== F ? (n = {
                layer: "494762337",
                parameter: "enabled",
                disableExposureLog: F
            }, b[4] = F, b[5] = n) : n = b[5];
            let O = (0, l.x)(G ? Q.b : null, n),
                R = G && O;
            if (null != M) {
                let e;
                return b[6] !== A || b[7] !== w || b[8] !== v || b[9] !== N || b[10] !== T || b[11] !== L || b[12] !== M.canNativeShare || b[13] !== M.experience || b[14] !== M.onNativeShare || b[15] !== S || b[16] !== x || b[17] !== I || b[18] !== C || b[19] !== y ? (e = (0, i.jsx)(eS, {
                    copyLabel: v,
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
                }), b[6] = A, b[7] = w, b[8] = v, b[9] = N, b[10] = T, b[11] = L, b[12] = M.canNativeShare, b[13] = M.experience, b[14] = M.onNativeShare, b[15] = S, b[16] = x, b[17] = I, b[18] = C, b[19] = y, b[20] = e) : e = b[20], e
            }
            b[21] !== P || b[22] !== L || b[23] !== x ? (r = null == x ? [] : [{
                id: "download",
                largeIcon: (0, i.jsx)(k.s, {
                    "aria-hidden": "true"
                }),
                disabled: L,
                icon: (0, i.jsx)(k.r, {}),
                label: P.formatMessage({
                    id: "chatgptConversations.shareDialog.destination.download.label",
                    defaultMessage: "Download",
                    description: "Short label below a circular button in the generated-image Share dialog. Saves the selected image, or all images in the selected series, to the user's device without creating a shared link."
                }),
                onClick: x
            }], b[21] = P, b[22] = L, b[23] = x, b[24] = r) : r = b[24];
            let H = r;
            b[25] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, i.jsx)(k.xe, {
                "aria-hidden": "true"
            }), b[25] = o) : o = b[25], b[26] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, i.jsx)(k.we, {}), b[26] = c) : c = b[26], b[27] !== w || b[28] !== v || b[29] !== S ? (h = {
                id: "copy",
                largeIcon: o,
                disabled: w,
                icon: c,
                label: v,
                onClick: S
            }, b[27] = w, b[28] = v, b[29] = S, b[30] = h) : h = b[30];
            let W = h;
            b[31] !== P || b[32] !== I || b[33] !== R || b[34] !== C || b[35] !== y ? (g = C ? [...R ? [function(e) {
                let {
                    disabled: a,
                    intl: t,
                    onSocialShare: s
                } = e, n = (0, i.jsx)("img", {
                    alt: "",
                    "aria-hidden": !0,
                    src: Y
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
            }), ...R ? [] : [eI({
                destination: "reddit",
                disabled: y,
                intl: P,
                onSocialShare: I
            })]] : [], b[31] = P, b[32] = I, b[33] = R, b[34] = C, b[35] = y, b[36] = g) : g = b[36];
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
                    disabled: t,
                    icon: s,
                    largeIcon: n,
                    label: r,
                    onClick: o
                } = e, l = "copy" === a && T || "download" === a && L;
                return (0, i.jsx)(K.a, {
                    extension: "download" === a,
                    children: (0, i.jsx)(ex, {
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
            }), b[46] = z, b[47] = T, b[48] = L, b[49] = m) : m = b[49], b[50] !== A || b[51] !== u || b[52] !== m ? (f = (0, i.jsxs)("div", {
                className: u,
                children: [m, A]
            }), b[50] = A, b[51] = u, b[52] = m, b[53] = f) : f = b[53], f
        }

        function eI(e) {
            let a, t, s, {
                destination: n,
                disabled: r,
                intl: o,
                onSocialShare: l
            } = e;
            switch (n) {
                case "x":
                    a = (0, i.jsx)(k.$i, {
                        "aria-hidden": "true"
                    }), t = (0, i.jsx)(k.aj, {
                        "aria-hidden": "true"
                    }), s = o.formatMessage({
                        id: "chatgptConversations.shareDialog.destination.x.label",
                        defaultMessage: "X",
                        description: "Short destination label below a circular button in a ChatGPT post sharing dialog for a conversation, response, or generated image. Selecting it opens X's post composer with the public post URL."
                    });
                    break;
                case "linkedin":
                    a = (0, i.jsx)(V.a, {
                        "aria-hidden": "true"
                    }), t = (0, i.jsx)(k.ye, {
                        "aria-hidden": "true"
                    }), s = o.formatMessage({
                        id: "chatgptConversations.shareDialog.destination.linkedin.label",
                        defaultMessage: "LinkedIn",
                        description: "Short destination label below a circular button in a ChatGPT post sharing dialog for a conversation, response, or generated image. Selecting it opens LinkedIn's post composer with the public post URL."
                    });
                    break;
                case "reddit":
                    a = (0, i.jsx)(k.Mg, {
                        "aria-hidden": "true"
                    }), t = (0, i.jsx)(k.Ng, {
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

        function eM(e) {
            let a, t, n, r, o, d, h = (0, s.c)(12);
            h[0] !== e ? ({
                accountId: a,
                onClose: t,
                ...n
            } = e, h[0] = e, h[1] = a, h[2] = t, h[3] = n) : (a = h[1], t = h[2], n = h[3]);
            let g = (0, l.z)(u.f) === a;
            return h[4] !== g || h[5] !== t ? (r = () => {
                g || t()
            }, o = [g, t], h[4] = g, h[5] = t, h[6] = r, h[7] = o) : (r = h[6], o = h[7]), (0, c.useEffect)(r, o), h[8] !== g || h[9] !== t || h[10] !== n ? (d = g ? (0, i.jsx)(eL, {
                ...n,
                onClose: t
            }) : null, h[8] = g, h[9] = t, h[10] = n, h[11] = d) : d = h[11], d
        }

        function eL(e) {
            let a, t, n = (0, s.c)(8);
            return n[0] !== e.publishedShareLink?.shareLinkId || n[1] !== e.publishedWidget || n[2] !== e.shareSessionId || n[3] !== e.widget ? (a = null == e.widget && null == e.publishedWidget ? void 0 : JSON.stringify([e.widget?.attachment, e.publishedShareLink?.shareLinkId, e.shareSessionId]), n[0] = e.publishedShareLink?.shareLinkId, n[1] = e.publishedWidget, n[2] = e.shareSessionId, n[3] = e.widget, n[4] = a) : a = n[4], n[5] !== e || n[6] !== a ? (t = (0, i.jsx)(ej, {
                ...e
            }, a), n[5] = e, n[6] = a, n[7] = t) : t = n[7], t
        }

        function ej(e) {
            let a, t, g, u, m, k, v, L, W, U, z, B, K, V, Y, $, Q, X, J, Z, ee, ea, et, ei, es, en, er, eo, el, ec, ed, eh, eg, ep, eu, em, ef, eb, ek, ev, ew, eT, e_, ey = (0, s.c)(320),
                {
                    currentNodeId: eC,
                    image: eS,
                    imagePromptTemplate: ex,
                    imageShareOptions: eI,
                    recoveryShareLink: eM,
                    publishedShareLink: eL,
                    publishedWidget: ej,
                    messageIds: eR,
                    mobileImageExperience: eH,
                    trackMobileImageShareLifecycle: eW,
                    onClose: eU,
                    onResult: ez,
                    previewTurns: eq,
                    privacyNotices: eB,
                    prompt: eK,
                    receiverShareLink: eV,
                    response: eY,
                    serverConversationId: eZ,
                    shareSessionId: e1,
                    source: e0,
                    title: e2,
                    widget: e3
                } = e,
                e5 = (0, l.y)(_.a),
                [e4, e6] = (0, c.useState)(!1),
                e7 = (0, l.z)(null)?.data,
                e8 = (0, l.z)(null),
                e9 = (0, l.x)(null, eZ),
                ae = (0, d.a)(),
                aa = (0, c.useRef)(!1),
                at = (0, c.useRef)(!1);
            ey[0] !== ez ? (a = () => (aa.current = !0, () => {
                aa.current = !1, queueMicrotask(() => {
                    aa.current || at.current || (at.current = !0, ez?.(!1))
                })
            }), t = [ez], ey[0] = ez, ey[1] = a, ey[2] = t) : (a = ey[1], t = ey[2]), (0, c.useEffect)(a, t), ey[3] !== ez ? (g = function(e) {
                at.current || (at.current = !0, ez?.(e))
            }, ey[3] = ez, ey[4] = g) : g = ey[4];
            let ai = g;
            ey[5] !== ai || ey[6] !== eU ? (u = function() {
                ai(!1), eU()
            }, ey[5] = ai, ey[6] = eU, ey[7] = u) : u = ey[7];
            let as = u,
                an = (0, c.useContext)(p.a);
            ey[8] !== eS || ey[9] !== e5 || ey[10] !== eZ ? (m = null == eS ? void 0 : (0, O.a)(e5, eZ, eS), ey[8] = eS, ey[9] = e5, ey[10] = eZ, ey[11] = m) : m = ey[11];
            let ar = m;
            ey[12] !== ex || ey[13] !== ar || ey[14] !== eL || ey[15] !== eV || ey[16] !== eM || ey[17] !== e5.queryClient ? (k = () => eV ?? eL ?? eM ?? (null == ar || null != ex ? null : e5.queryClient.getQueryData(ar.queryKey) ?? null), ey[12] = ex, ey[13] = ar, ey[14] = eL, ey[15] = eV, ey[16] = eM, ey[17] = e5.queryClient, ey[18] = k) : k = ey[18];
            let [ao, al] = (0, c.useState)(k), [ac] = (0, c.useState)(eF), ad = e1 ?? ac, [ah, ag] = (0, c.useState)("idle"), [ap, au] = (0, c.useState)(null != eM ? "copy-failed" : null), [am, af] = (0, c.useState)(!1);
            ey[19] !== eZ ? (v = ["chatgpt-conversation-share", eZ], ey[19] = eZ, ey[20] = v) : v = ey[20];
            let ab = v,
                ak = null == eM && null == eV && null == eL && null == eK && null == eS && null == eR && null == e3;
            ey[21] !== eC || ey[22] !== eZ ? (L = () => (0, E.h)({
                conversationId: eZ,
                currentNodeId: eC
            }), ey[21] = eC, ey[22] = eZ, ey[23] = L) : L = ey[23], ey[24] !== ab || ey[25] !== ak || ey[26] !== L ? (W = {
                enabled: ak,
                queryFn: L,
                queryKey: ab,
                retry: !1,
                staleTime: M.b.ONE_MINUTE
            }, ey[24] = ab, ey[25] = ak, ey[26] = L, ey[27] = W) : W = ey[27];
            let {
                data: av,
                error: aw,
                isLoading: aT
            } = (0, o.a)(W);
            ey[28] === Symbol.for("react.memo_cache_sentinel") ? (U = {
                enabled: !1,
                queryFn: eG,
                queryKey: ["accounts", "check"],
                staleTime: M.b.ONE_MINUTE
            }, ey[28] = U) : U = ey[28];
            let {
                data: a_
            } = (0, o.a)(U), ay = null != eS, aC = null != eH && ay, aS = aC || !0 === eW, ax = null != eV, aA = (eS?.additionalImages?.length ?? 0) > 0, aI = eS?.item.isAnimated === !0 && !aA;
            ey[29] !== eS || ey[30] !== eZ || ey[31] !== ad ? (z = (0, j.c)((0, G.c)(eZ), void 0, null != eS && null == eS.previewSrc ? ad : void 0), ey[29] = eS, ey[30] = eZ, ey[31] = ad, ey[32] = z) : z = ey[32];
            let {
                src: aM,
                isLoading: aL
            } = (0, A.k)(null != eS && (aA || null == eS.previewSrc) ? eS.item.src ?? "" : "", z), aj = null != eS && null == eS.previewSrc && null == aM, aE = aA ? "image_series" : "single_image", aP = e3 ?? ej, aD = null != eR || null != aP || eV?.contentType === "message", aN = aP?.metadata.widgetType === "visualization", aG = aP?.metadata.widgetName === "create_interactive_poll" || aP?.metadata.widgetName === "CreateInteractivePoll", aF = null != eK || null != ex, aO = ay || aD || aF, aR = aO || !0, aH = "conversation";
            aN ? aH = "widget" : null != ex ? aH = "prompt" : aI ? aH = "gif" : ay ? aH = aA ? "images" : "image" : aD ? aH = "message" : aF && (aH = "prompt"), ey[33] !== eB || ey[34] !== eY ? (B = null == eY ? eB : (0, E.l)(eY), ey[33] = eB, ey[34] = eY, ey[35] = B) : B = ey[35];
            let aW = B,
                aU = ay || (!aO || aD) && aW?.hasImageReference === !0;
            ey[36] !== eS?.item || ey[37] !== aA || ey[38] !== e2 ? (K = (aA ? void 0 : eS?.item.chatGptDisplayTitle) ?? (0, D.c)(e2), ey[36] = eS?.item, ey[37] = aA, ey[38] = e2, ey[39] = K) : K = ey[39];
            let az = K,
                aq = !aO && av?.is_public === !0 && !0 === av.is_visible,
                aB = a_?.accounts?.find(e => e.id === (an?.accountId ?? a_.account_ordering?.[0])),
                aK = aB?.structure ?? an?.accountStructureAtLogin,
                aV = "unknown";
            ao?.isWorkspaceOnly != null ? aV = ao.isWorkspaceOnly ? "workspace" : "public" : null == av || ay ? ("personal" === aK || "workspace" === aK) && (aV = "workspace" === aK ? "workspace" : "public") : aV = av.share_url.includes("/share/e/") ? "workspace" : "public", ey[40] !== ar?.queryKey ? (V = ar?.queryKey ?? ["disabled-chatgpt-image-share-query"], ey[40] = ar?.queryKey, ey[41] = V) : V = ey[41], ey[42] !== ar?.queryFn ? (Y = ar?.queryFn ?? eN, ey[42] = ar?.queryFn, ey[43] = Y) : Y = ey[43];
            let aY = aC && (0, R.a)() && null == ex && null != ar && "public" === aV && null == ao;
            ey[44] !== V || ey[45] !== Y || ey[46] !== aY ? ($ = {
                queryKey: V,
                queryFn: Y,
                enabled: aY,
                retry: !1,
                staleTime: 1 / 0
            }, ey[44] = V, ey[45] = Y, ey[46] = aY, ey[47] = $) : $ = ey[47];
            let a$ = (0, o.a)($);
            a$.data?.isWorkspaceOnly != null && (aV = a$.data.isWorkspaceOnly ? "workspace" : "public");
            let aQ = ao ?? (null == ex ? a$.data ?? null : null),
                aX = aQ?.shareLinkUrl ?? (aq ? av.share_url : null),
                aJ = !aO && null == aQ && aq && av.current_node_id !== eC,
                aZ = "workspace" === aV,
                a1 = "creating" === ah,
                a0 = !aO && aT;
            ey[48] !== aQ || ey[49] !== ap || ey[50] !== aw || ey[51] !== a$.error || ey[52] !== ak ? (null == (Q = ap) && ak && null == aQ && null != aw && (Q = aw instanceof E.a ? "blocked" : "create-failed"), null == Q && null != a$.error && (Q = a$.error instanceof E.a ? "blocked" : "create-failed"), ey[48] = aQ, ey[49] = ap, ey[50] = aw, ey[51] = a$.error, ey[52] = ak, ey[53] = Q) : Q = ey[53];
            let a2 = eJ.description,
                a3 = eJ.publicLinkAudience;
            if (aN) {
                let e;
                ey[54] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    ...eJ.widgetTitle
                }), ey[54] = e) : e = ey[54], X = e
            } else if (aI) {
                let e;
                ey[55] !== ex ? (e = null != ex ? (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.gifWithPromptTitle",
                    defaultMessage: "Share GIF with prompt",
                    description: "Heading of the generated GIF sharing dialog when GIF with prompt is selected. Shares the animated GIF and its reusable prompt. The other option is GIF only."
                }) : (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.gifTitle",
                    defaultMessage: "Share GIF",
                    description: "Heading of the dialog for sharing one generated animated GIF. Keep GIF as the file format name."
                }), ey[55] = ex, ey[56] = e) : e = ey[56], X = e
            } else if (null != ex) {
                let e;
                ey[57] !== ex.label ? (e = "image_with_prompt" === ex.label ? (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.imageWithPromptTitle",
                    defaultMessage: "Share image with prompt",
                    description: "Heading of the generated-image share dialog when Image with prompt is selected. Users share the generated image together with its reusable prompt so recipients can try the prompt. The other option is Image only."
                }) : (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.imagePromptTitle",
                    defaultMessage: "Share prompt with image",
                    description: "Short heading of the generated-image share dialog when Prompt with image is selected. Users share the generated image and its reusable prompt so recipients can try the prompt. The other option is Image only."
                }), ey[57] = ex.label, ey[58] = e) : e = ey[58], X = e
            } else if (ay) {
                let e;
                ey[59] !== az || ey[60] !== eI || ey[61] !== aA || ey[62] !== aC ? (e = aC || null == az || null != eI ? (0, i.jsx)(h.a, {
                    ...aA ? eJ.imagesTitle : eJ.imageTitle
                }) : (0, i.jsx)(i.Fragment, {
                    children: az
                }), ey[59] = az, ey[60] = eI, ey[61] = aA, ey[62] = aC, ey[63] = e) : e = ey[63], X = e
            } else if (aG) {
                let e;
                ey[64] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.poll.title",
                    defaultMessage: "Share poll",
                    description: "Short heading of the dialog for sharing one interactive poll. The user can create or send a link so other people can vote on the poll."
                }), ey[64] = e) : e = ey[64], X = e
            } else if (aD) {
                let e;
                ey[65] !== az ? (e = null == az ? (0, i.jsx)(h.a, {
                    ...eJ.messageTitle
                }) : (0, i.jsx)(i.Fragment, {
                    children: az
                }), ey[65] = az, ey[66] = e) : e = ey[66], X = e
            } else if (aF) {
                let e;
                ey[67] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    ...eJ.promptTitle
                }), ey[67] = e) : e = ey[67], X = e
            } else {
                if (aR) {
                    let e;
                    ey[68] !== az ? (e = null == az ? void 0 : (0, i.jsx)(i.Fragment, {
                        children: az
                    }), ey[68] = az, ey[69] = e) : e = ey[69], X = e
                }
                aZ ? a2 = eB?.isProjectConversation ? eJ.workspaceProjectDescription : eJ.workspaceDescription : av?.is_anonymous === !1 ? a2 = eJ.attributedDescription : eB?.isProjectConversation && (a2 = eJ.projectDescription)
            }
            aZ && (a3 = aU ? eJ.workspaceImageRightsAudience : eJ.workspaceLinkAudience);
            let a5 = "copied" === ah ? eJ.copied : eJ.copyLink;
            aJ ? a5 = eJ.updateLink : null == aX && "copied" !== ah && (a5 = eJ.createLink), ey[70] !== ae || ey[71] !== ah ? (J = "copied" === ah ? ae.formatMessage(eJ.copied) : ae.formatMessage(eJ.copyLink), ey[70] = ae, ey[71] = ah, ey[72] = J) : J = ey[72];
            let a4 = J;
            ey[73] !== ai || ey[74] !== ae || ey[75] !== e5 || ey[76] !== e3 ? (Z = function(e, a) {
                let t;
                "create-failed" === a && (ai(!1), e3?.onError?.(e));
                let i = e instanceof E.a ? "blocked" : a;
                switch ("blocked" !== i && I.a.warning("chatgpt_conversation_share_failed", {
                        safe: {
                            stage: i
                        },
                        sensitive: {
                            error: e
                        }
                    }), i) {
                    case "blocked":
                        t = ae.formatMessage(eJ.shareBlocked);
                        break;
                    case "copy-failed":
                        t = ae.formatMessage(eJ.shareCopyFailed);
                        break;
                    case "create-failed":
                        t = ae.formatMessage(eJ.shareCreateFailed)
                }
                return au(i), ag("idle"), e5.get(w.f).danger(t, {
                    errorAnalytics: {
                        toastId: {
                            "copy-failed": "failed_to_copy_share_link",
                            "create-failed": "failed_to_generate_share_link",
                            blocked: "chatgptConversationShareDialog.shareBlocked"
                        } [i]
                    }
                }), i
            }, ey[73] = ai, ey[74] = ae, ey[75] = e5, ey[76] = e3, ey[77] = Z) : Z = ey[77];
            let a6 = Z;
            ey[78] !== aP || ey[79] !== ay || ey[80] !== aD || ey[81] !== aF || ey[82] !== ax || ey[83] !== eV || ey[84] !== e0 ? (ee = ax ? "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER" : "CHATGPT_SHARE_FLOW_ACTOR_SHARER", et = ax ? "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_HEADER" : e0 ?? "CHATGPT_SHARE_FLOW_SOURCE_CONVERSATION_MENU", null != eV ? ea = eV.attachmentType : null != aP ? (ea = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_WIDGET", et = "CHATGPT_SHARE_FLOW_SOURCE_WIDGET_INLINE_ACTION") : ay ? (ea = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_IMAGE_SHARE", et = e0 ?? "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION") : aD ? (ea = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_MESSAGE_SLICE", et = "CHATGPT_SHARE_FLOW_SOURCE_MESSAGE_INLINE_ACTION") : aF && (ea = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_PROMPT", et = e0 ?? "CHATGPT_SHARE_FLOW_SOURCE_MESSAGE_INLINE_ACTION"), ey[78] = aP, ey[79] = ay, ey[80] = aD, ey[81] = aF, ey[82] = ax, ey[83] = eV, ey[84] = e0, ey[85] = ee, ey[86] = ea, ey[87] = et) : (ee = ey[85], ea = ey[86], et = ey[87]);
            let a7 = eV?.contentType === "message" || aO ? "CHATGPT_SHARE_FLOW_CONTENT_TYPE_POST_SLICE" : "CHATGPT_SHARE_FLOW_CONTENT_TYPE_SHARED_CONVERSATION";
            ey[88] !== aQ || ey[89] !== eC || ey[90] !== aq || ey[91] !== av || ey[92] !== ai || ey[93] !== ex || ey[94] !== ar || ey[95] !== aO || ey[96] !== aJ || ey[97] !== eR || ey[98] !== eK || ey[99] !== e5.queryClient || ey[100] !== eZ || ey[101] !== ab || ey[102] !== e2 || ey[103] !== e3 ? (ei = async function(e) {
                let a;
                if (null != e3 && (!aa.current || e3.isCurrent?.() === !1)) throw Error("The selected widget is no longer available");
                let t = aQ ?? (aq ? {
                    currentNodeId: av.current_node_id,
                    shareLinkId: av.share_id,
                    shareLinkUrl: av.share_url
                } : null);
                if (null == ex && null != t && !aJ) return ai(!0), t;
                if (null != ex) a = await ex.createLink(e);
                else if (null != ar) a = await e5.queryClient.fetchQuery(ar);
                else if (null != e3) {
                    if (a = await (0, E.f)(e3.attachment, eC), !aa.current || e3.isCurrent?.() === !1) throw Error("The selected widget changed while sharing")
                } else a = null != eR ? await e5.queryClient.fetchQuery({
                    queryFn: () => (0, E.d)({
                        conversationId: eZ,
                        currentNodeId: eC,
                        messageIds: eR
                    }),
                    queryKey: ["chatgpt-message-share", eZ, eC],
                    staleTime: 1 / 0
                }) : null != eK ? await e5.queryClient.fetchQuery({
                    queryFn: () => (0, E.e)({
                        conversationId: eZ,
                        messageId: eK.messageId
                    }),
                    queryKey: ["chatgpt-prompt-share", eZ, eK.messageId],
                    staleTime: 1 / 0
                }) : await (0, E.g)({
                    conversationId: eZ,
                    currentNodeId: eC,
                    existingShareLink: av,
                    title: e2
                });
                return al(a), ai(!0), null == av || aO || e5.queryClient.setQueryData(ab, {
                    ...av,
                    current_node_id: eC,
                    is_public: !0,
                    is_visible: !0
                }), a
            }, ey[88] = aQ, ey[89] = eC, ey[90] = aq, ey[91] = av, ey[92] = ai, ey[93] = ex, ey[94] = ar, ey[95] = aO, ey[96] = aJ, ey[97] = eR, ey[98] = eK, ey[99] = e5.queryClient, ey[100] = eZ, ey[101] = ab, ey[102] = e2, ey[103] = e3, ey[104] = ei) : ei = ey[104];
            let a8 = ei;
            ey[105] !== ee || ey[106] !== ea || ey[107] !== a7 || ey[108] !== aQ || ey[109] !== aP?.metadata || ey[110] !== a8 || ey[111] !== aq || ey[112] !== av || ey[113] !== ex || ey[114] !== aj || ey[115] !== ax || ey[116] !== aJ || ey[117] !== a1 || ey[118] !== eU || ey[119] !== a6 || ey[120] !== e5 || ey[121] !== eZ || ey[122] !== aX || ey[123] !== ad || ey[124] !== et || ey[125] !== aR ? (es = async function() {
                if (a1 || aj || ex?.actionsDisabled) return;
                let e = (0, N.a)(e5, {
                    actor: ee,
                    attachmentType: ea,
                    widgetMetadata: aP?.metadata,
                    contentType: a7,
                    conversationId: ax ? void 0 : eZ,
                    shareId: aQ?.shareLinkId ?? (aq ? av.share_id : void 0),
                    shareSessionId: ad,
                    source: et,
                    usedExistingLink: null != aX && !aJ
                });
                au(null), ag("creating");
                let a = null != ex || null == aX || aJ ? "create-failed" : "copy-failed",
                    t = aQ;
                try {
                    let i, s = a8("copy"),
                        n = (0, C.c)(s.then(eD));
                    null != n && n.catch(eP);
                    let r = await s;
                    t = r, a = "copy-failed";
                    let o = r.shareLinkUrl;
                    if (null == n) i = await (0, C.b)(o);
                    else try {
                        await n, i = !0
                    } catch (e) {
                        I.a.warning("chatgpt_conversation_share_clipboard_write_failed", {
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
                        }), a6(Error("Failed to copy ChatGPT conversation share link"), "copy-failed");
                        return
                    }
                    e({
                        result: "link-copied",
                        shareId: r.shareLinkId
                    }), ag("copied"), aR || ((0, y.a)(e5), eU())
                } catch (s) {
                    let i = a6(s, a);
                    e("create-failed" === i ? {
                        result: i,
                        error: s
                    } : {
                        result: i,
                        shareId: t?.shareLinkId
                    })
                }
            }, ey[105] = ee, ey[106] = ea, ey[107] = a7, ey[108] = aQ, ey[109] = aP?.metadata, ey[110] = a8, ey[111] = aq, ey[112] = av, ey[113] = ex, ey[114] = aj, ey[115] = ax, ey[116] = aJ, ey[117] = a1, ey[118] = eU, ey[119] = a6, ey[120] = e5, ey[121] = eZ, ey[122] = aX, ey[123] = ad, ey[124] = et, ey[125] = aR, ey[126] = es) : es = ey[126];
            let a9 = es;
            ey[127] !== ea || ey[128] !== a7 || ey[129] !== aQ?.shareLinkId || ey[130] !== e5 || ey[131] !== eZ || ey[132] !== ad || ey[133] !== et ? (en = function(e) {
                (0, T.a)(e5, n.h, {
                    action: e,
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_SHARER",
                    attachmentType: ea,
                    contentType: a7,
                    conversationId: eZ,
                    shareId: aQ?.shareLinkId,
                    shareSessionId: ad,
                    source: et,
                    sheetType: "CHATGPT_SHARE_FLOW_SHEET_TYPE_CUSTOM"
                })
            }, ey[127] = ea, ey[128] = a7, ey[129] = aQ?.shareLinkId, ey[130] = e5, ey[131] = eZ, ey[132] = ad, ey[133] = et, ey[134] = en) : en = ey[134];
            let te = en;
            ey[135] !== aQ || ey[136] !== Q || ey[137] !== a8 || ey[138] !== ar || ey[139] !== ae || ey[140] !== a1 || ey[141] !== eU || ey[142] !== a6 || ey[143] !== e5 || ey[144] !== eZ || ey[145] !== aV || ey[146] !== ad || ey[147] !== et ? (er = async function() {
                if (!a1 && null != ar && "public" === aV && "blocked" !== Q) {
                    au(null), ag("creating");
                    try {
                        let e = aQ ?? await a8("copy"),
                            a = await (0, R.b)(e5, e, eZ, ad, et);
                        ag("idle"), "shared" === a && eU(), "failed" === a && e5.get(w.f).danger(ae.formatMessage({
                            id: "chatgptConversations.mobileImageShare.nativeFailed",
                            defaultMessage: "Could not open sharing. Try again or copy the link",
                            description: "Error in the mobile image share sheet when the device cannot open native link sharing. The user can retry or use Copy link"
                        }), {
                            errorAnalytics: {
                                toastId: "chatgptConversations.mobileImageShare.nativeFailed"
                            }
                        })
                    } catch (e) {
                        a6(e, "create-failed")
                    }
                }
            }, ey[135] = aQ, ey[136] = Q, ey[137] = a8, ey[138] = ar, ey[139] = ae, ey[140] = a1, ey[141] = eU, ey[142] = a6, ey[143] = e5, ey[144] = eZ, ey[145] = aV, ey[146] = ad, ey[147] = et, ey[148] = er) : er = ey[148];
            let ta = er;
            ey[149] !== ee || ey[150] !== ea || ey[151] !== a7 || ey[152] !== aQ || ey[153] !== az || ey[154] !== aP?.metadata || ey[155] !== a8 || ey[156] !== aq || ey[157] !== av || ey[158] !== ex || ey[159] !== aE || ey[160] !== ae || ey[161] !== ay || ey[162] !== aj || ey[163] !== aF || ey[164] !== ax || ey[165] !== aJ || ey[166] !== a1 || ey[167] !== eH?.unsupportedDestinationFallback || ey[168] !== eU || ey[169] !== a6 || ey[170] !== e5 || ey[171] !== eZ || ey[172] !== aV || ey[173] !== ah || ey[174] !== ad || ey[175] !== et || ey[176] !== aC ? (eo = async function(e, a) {
                var t;
                let i;
                if (a1 || aj || "public" !== aV || ex?.actionsDisabled) return;
                a.preventDefault(), ax || aF || "line" !== (t = e) && "linkedin" !== t && "reddit" !== t && "x" !== t || (0, N.f)(e5, e, ay ? aE : void 0), (0, N.e)(e5, {
                    actor: ee,
                    attachmentType: ea,
                    widgetMetadata: aP?.metadata,
                    contentType: a7,
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
                    shareId: aQ?.shareLinkId ?? (aq && !aJ ? av.share_id : void 0),
                    shareSessionId: ad,
                    source: et
                });
                let s = aC && (0, q.g)(e);
                if (s && eH?.unsupportedDestinationFallback === "app-store") {
                    let t = (0, r.a)() ? "android" : (0, r.c)() || (0, r.b)() ? "ios" : null,
                        i = null == t ? null : (0, q.c)(e, t);
                    if (null != i) return void(0, b.e)({
                        event: a,
                        href: i,
                        initiator: "open_in_browser_bridge",
                        openTarget: "external-browser"
                    })
                }
                let n = null != aQ && null == ex || "messages" === e || s ? null : window.open("", "_blank");
                null != n && (n.opener = null), au(null), ag("creating");
                try {
                    i = await a8("social")
                } catch (e) {
                    n?.close(), e instanceof E.a || (0, N.d)(e5, {
                        actor: ee,
                        attachmentType: ea,
                        widgetMetadata: aP?.metadata,
                        contentType: a7,
                        shareSessionId: ad,
                        source: et
                    }), a6(e, "create-failed");
                    return
                }
                if (!0 === i.isWorkspaceOnly) {
                    n?.close(), ag(ah);
                    return
                }
                if (s) {
                    let e = await (0, R.b)(e5, i, eZ, ad, et);
                    ag(ah), "shared" === e ? eU() : "failed" === e && e5.get(w.f).danger(ae.formatMessage({
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
                let o = (0, q.d)({
                    destination: e,
                    isAppleDevice: (0, r.c)() || (0, r.b)(),
                    shareUrl: i.shareLinkUrl,
                    title: i.title ?? az
                });
                if (null == o) {
                    n?.close(), ag(ah);
                    return
                }
                "messages" === e ? (window.location.href = o, (0, b.g)({
                    href: o,
                    modifiedClick: !1
                })) : null != n ? (n.location.href = o, (0, b.g)({
                    href: o,
                    modifiedClick: 1 === a.button || a.metaKey || a.ctrlKey,
                    openTarget: "external-browser"
                })) : (0, b.e)({
                    event: a,
                    href: o,
                    initiator: "open_in_browser_bridge",
                    openTarget: "external-browser"
                }), ag(ah)
            }, ey[149] = ee, ey[150] = ea, ey[151] = a7, ey[152] = aQ, ey[153] = az, ey[154] = aP?.metadata, ey[155] = a8, ey[156] = aq, ey[157] = av, ey[158] = ex, ey[159] = aE, ey[160] = ae, ey[161] = ay, ey[162] = aj, ey[163] = aF, ey[164] = ax, ey[165] = aJ, ey[166] = a1, ey[167] = eH?.unsupportedDestinationFallback, ey[168] = eU, ey[169] = a6, ey[170] = e5, ey[171] = eZ, ey[172] = aV, ey[173] = ah, ey[174] = ad, ey[175] = et, ey[176] = aC, ey[177] = eo) : eo = ey[177];
            let tt = eo;
            ey[178] !== ea || ey[179] !== a7 || ey[180] !== eS || ey[181] !== aE || ey[182] !== ae || ey[183] !== am || ey[184] !== aA || ey[185] !== aj || ey[186] !== e5 || ey[187] !== eZ || ey[188] !== ad || ey[189] !== et ? (el = async function() {
                if (null == eS || am || aj) return;
                (0, N.f)(e5, "download", aE);
                let e = [eS.item, ...eS.additionalImages ?? []].filter(eE);
                0 !== e.length && ((0, H.b)(e5, {
                    image: eS.downloadAnalyticsImage ?? eS.item,
                    conversationId: eZ,
                    entryPoint: "CHATGPT_IMAGE_DOWNLOAD_ENTRY_POINT_CUSTOM_SHARE_SHEET",
                    downloadScope: aA ? "CHATGPT_IMAGE_DOWNLOAD_SCOPE_SERIES" : "CHATGPT_IMAGE_DOWNLOAD_SCOPE_SINGLE",
                    requestedImageCount: e.length,
                    isParagen: eS.downloadIsParagen
                }), af(!0), (0, T.a)(e5, n.h, {
                    action: "CHATGPT_SHARE_FLOW_ACTION_DOWNLOAD_SELECTED",
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_SHARER",
                    attachmentType: ea,
                    contentType: a7,
                    conversationId: eZ,
                    shareSessionId: ad,
                    sheetType: "CHATGPT_SHARE_FLOW_SHEET_TYPE_CUSTOM",
                    source: et
                }), await (0, F.a)(e5, {
                    images: e,
                    intl: ae,
                    serverConversationId: (0, G.c)(eZ),
                    logIndividualDownloads: !1
                }).then(e => {
                    "downloaded" === e && (0, H.e)(e5, eZ, eS.item)
                }).finally(() => {
                    af(!1)
                }))
            }, ey[178] = ea, ey[179] = a7, ey[180] = eS, ey[181] = aE, ey[182] = ae, ey[183] = am, ey[184] = aA, ey[185] = aj, ey[186] = e5, ey[187] = eZ, ey[188] = ad, ey[189] = et, ey[190] = el) : el = ey[190];
            let ti = el;
            ey[191] !== eS?.additionalImages?.length || ey[192] !== aA ? (ec = aA ? (0, i.jsx)(h.a, {
                id: "chatgptConversations.shareDialog.imageSeriesCount",
                defaultMessage: "Sharing {imageCount} images together",
                description: "Subtitle beneath the generated-image share modal title after choosing to share a series. imageCount is the number of images included in the link, always greater than one. This informs the user that all listed images are shared together.",
                values: {
                    imageCount: 1 + (eS?.additionalImages?.length ?? 0)
                }
            }) : void 0, ey[191] = eS?.additionalImages?.length, ey[192] = aA, ey[193] = ec) : ec = ey[193];
            let ts = ec,
                tn = ts;
            if (!aA && !aR) {
                let e;
                ey[194] !== a2 ? (e = (0, i.jsx)(h.a, {
                    ...a2
                }), ey[194] = a2, ey[195] = e) : e = ey[195], tn = e
            }
            if (null != ex) {
                let e;
                ey[196] !== aC ? (e = aC ? (0, i.jsx)(h.a, {
                    id: "imagePromptShare.audience",
                    defaultMessage: "Anyone with the link can try this prompt",
                    description: "Audience description when sharing a generated image as a reusable prompt template"
                }) : void 0, ey[196] = aC, ey[197] = e) : e = ey[197], tn = e
            } else if (aC) {
                let e, a, t;
                ey[198] !== aV ? (e = "public" === aV ? (0, i.jsx)(h.a, {
                    id: "chatgptConversations.mobileImageShare.publicAudience",
                    defaultMessage: "Anyone with the link can view",
                    description: "Audience disclosure in the mobile generated-image share sheet for a public link"
                }) : null, ey[198] = aV, ey[199] = e) : e = ey[199], ey[200] !== aV ? (a = "public" !== aV && (0, i.jsx)(h.a, {
                    id: "chatgptConversations.mobileImageShare.workspaceAudience",
                    defaultMessage: "Only workspace members with the link can view",
                    description: "Audience disclosure below Share image in the mobile image share sheet for a workspace account"
                }), ey[200] = aV, ey[201] = a) : a = ey[201], ey[202] !== e || ey[203] !== a ? (t = (0, i.jsxs)(i.Fragment, {
                    children: [e, a]
                }), ey[202] = e, ey[203] = a, ey[204] = t) : t = ey[204], tn = t
            }
            if (aC ? ed = "responsiveSheet" : aR && (ed = "share"), aC && (eh = eH?.layout === "two-rows" ? "imageSheetTwoRows" : "imageSheet"), null != ex) {
                let e;
                if (ey[205] !== eS?.previewSrc || ey[206] !== ex || ey[207] !== a1 || ey[208] !== aM) {
                    let a;
                    ey[210] === Symbol.for("react.memo_cache_sentinel") ? (a = () => {
                        au(null), ag("idle")
                    }, ey[210] = a) : a = ey[210], e = ex.preview(a1, eS?.previewSrc ?? aM ?? null, a), ey[205] = eS?.previewSrc, ey[206] = ex, ey[207] = a1, ey[208] = aM, ey[209] = e
                } else e = ey[209];
                eg = e
            } else {
                let e;
                ey[211] !== aP || ey[212] !== eS || ey[213] !== eh || ey[214] !== ae || ey[215] !== aL || ey[216] !== aA || ey[217] !== aN || ey[218] !== eq || ey[219] !== eK || ey[220] !== aM || ey[221] !== eY || ey[222] !== eZ || ey[223] !== aC ? (e = null != eS ? (0, i.jsx)(x.a, {
                    ariaLabel: aA ? ae.formatMessage(eJ.imagesPreview) : eS.alt,
                    variant: "image",
                    classicImagePreviewEligible: !aA && !aC,
                    presentation: eh,
                    children: aA || null == eS.previewSrc ? (0, i.jsx)(e$, {
                        src: aM,
                        isLoading: aL
                    }) : (0, i.jsx)("img", {
                        alt: eS.alt,
                        className: aC ? void 0 : "block size-full object-contain",
                        referrerPolicy: "no-referrer",
                        src: eS.previewSrc
                    })
                }) : (0, i.jsxs)(i.Fragment, {
                    children: [aP?.preview != null && aN && (0, i.jsx)(x.a, {
                        ariaLabel: ae.formatMessage({
                            id: "shareDialog.widget.previewLabel",
                            defaultMessage: "Preview of the shared widget",
                            description: "Accessible description of the non-interactive selected-widget preview in a ChatGPT widget sharing dialog."
                        }),
                        variant: "response",
                        children: aP.preview
                    }), aP?.preview != null && !aN && (0, i.jsx)(x.a, {
                        variant: "response",
                        children: aP.preview
                    }), null == aP && (0, i.jsx)(P.b, {
                        prompt: eK,
                        response: eY,
                        serverConversationId: eZ,
                        turns: eq
                    })]
                }), ey[211] = aP, ey[212] = eS, ey[213] = eh, ey[214] = ae, ey[215] = aL, ey[216] = aA, ey[217] = aN, ey[218] = eq, ey[219] = eK, ey[220] = aM, ey[221] = eY, ey[222] = eZ, ey[223] = aC, ey[224] = e) : e = ey[224], eg = e
            }
            if (aC) {
                let e, a, t;
                ey[225] !== ex || ey[226] !== eg ? (e = null == ex ? eg : (0, i.jsx)("div", {
                    className: "px-6",
                    children: eg
                }), ey[225] = ex, ey[226] = eg, ey[227] = e) : e = ey[227], ey[228] !== ts ? (a = null != ts && (0, i.jsx)("p", {
                    className: "mt-3 text-center text-sm text-secondary",
                    children: ts
                }), ey[228] = ts, ey[229] = a) : a = ey[229], ey[230] !== e || ey[231] !== a ? (t = (0, i.jsxs)(i.Fragment, {
                    children: [e, a]
                }), ey[230] = e, ey[231] = a, ey[232] = t) : t = ey[232], eg = t
            }
            ey[233] !== a3 || ey[234] !== aR ? (ep = aR ? void 0 : (0, i.jsx)(h.a, {
                ...a3
            }), ey[233] = a3, ey[234] = aR, ey[235] = ep) : ep = ey[235], ey[236] !== a5 ? (eu = (0, i.jsx)(h.a, {
                ...a5
            }), ey[236] = a5, ey[237] = eu) : eu = ey[237];
            let tr = ex?.actionsDisabled || a0 || aj || "blocked" === Q,
                to = a1 || a0 || e4,
                tl = !aR && a1;
            ey[238] !== te || ey[239] !== aS || ey[240] !== aR ? (em = aR ? e => {
                aS && te("CHATGPT_SHARE_FLOW_ACTION_SHEET_PRESENTED"), e.preventDefault(), e.currentTarget instanceof HTMLElement && e.currentTarget.focus()
            } : void 0, ey[238] = te, ey[239] = aS, ey[240] = aR, ey[241] = em) : em = ey[241];
            let tc = aC ? "imageSheet" : void 0,
                td = aC && eH?.layout === "two-rows";
            ey[242] !== e9 || ey[243] !== e7 || ey[244] !== e8 || ey[245] !== aQ || ey[246] !== eC || ey[247] !== Q || ey[248] !== ti || ey[249] !== ta || ey[250] !== tt || ey[251] !== eS || ey[252] !== ex || ey[253] !== aE || ey[254] !== am || ey[255] !== a0 || ey[256] !== ay || ey[257] !== aj || ey[258] !== e4 || ey[259] !== aO || ey[260] !== aF || ey[261] !== ax || ey[262] !== a1 || ey[263] !== eR || ey[264] !== eH || ey[265] !== eU || ey[266] !== eK || ey[267] !== eV || ey[268] !== a4 || ey[269] !== aM || ey[270] !== e5 || ey[271] !== eZ || ey[272] !== aV || ey[273] !== aC || ey[274] !== aR || ey[275] !== e3 ? (ef = aR ? (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(eA, {
                    mobileImageActions: aC && null != eH ? {
                        experience: eH,
                        canNativeShare: "public" === aV && null != aQ && (0, R.a)(aQ?.shareLinkUrl),
                        onNativeShare: () => {
                            ta()
                        }
                    } : void 0,
                    copyLabel: a4,
                    copyDisabled: ex?.actionsDisabled || a0 || a1 || aj || "blocked" === Q,
                    isBusy: a1 || a0 || e4,
                    isDownloading: am,
                    socialDestinationsDisabled: ex?.actionsDisabled || a0 || a1 || aj || "public" !== aV || "blocked" === Q,
                    showSocialDestinations: "public" === aV,
                    additionalActions: void 0,
                    onDownload: null != ex || null == eS || aj ? void 0 : () => {
                        ti()
                    },
                    onCopy: () => {
                        ax || aF || (0, N.f)(e5, "copy", ay ? aE : void 0)
                    },
                    onSocialShare: (e, a) => {
                        tt(e, a)
                    }
                })
            }) : void 0, ey[242] = e9, ey[243] = e7, ey[244] = e8, ey[245] = aQ, ey[246] = eC, ey[247] = Q, ey[248] = ti, ey[249] = ta, ey[250] = tt, ey[251] = eS, ey[252] = ex, ey[253] = aE, ey[254] = am, ey[255] = a0, ey[256] = ay, ey[257] = aj, ey[258] = e4, ey[259] = aO, ey[260] = aF, ey[261] = ax, ey[262] = a1, ey[263] = eR, ey[264] = eH, ey[265] = eU, ey[266] = eK, ey[267] = eV, ey[268] = a4, ey[269] = aM, ey[270] = e5, ey[271] = eZ, ey[272] = aV, ey[273] = aC, ey[274] = aR, ey[275] = e3, ey[276] = ef) : ef = ey[276], ey[277] !== eI || ey[278] !== aG || ey[279] !== a1 || ey[280] !== aH || ey[281] !== aV || ey[282] !== aU || ey[283] !== aC || ey[284] !== aR ? (eb = aR ? (0, i.jsxs)(i.Fragment, {
                children: [null != eI && (aC ? (0, i.jsx)("div", {
                    className: "px-6",
                    children: eI(a1)
                }) : (0, i.jsx)(f.e, {
                    className: "pt-5",
                    children: eI(a1)
                })), !aC && (0, i.jsx)(eO, {
                    audience: aV,
                    contentType: aH,
                    isPoll: aG,
                    showImageRightsNotice: aU
                })]
            }) : void 0, ey[277] = eI, ey[278] = aG, ey[279] = a1, ey[280] = aH, ey[281] = aV, ey[282] = aU, ey[283] = aC, ey[284] = aR, ey[285] = eb) : eb = ey[285], ey[286] !== Q || ey[287] !== ex || ey[288] !== aX ? (ek = null == Q ? void 0 : {
                content: (0, i.jsx)(eX, {
                    error: Q
                }),
                copyUrl: "copy-failed" === Q ? aX : void 0,
                preventsSharing: "blocked" === Q && null == ex
            }, ey[286] = Q, ey[287] = ex, ey[288] = aX, ey[289] = ek) : ek = ey[289];
            let th = aU && !aZ && !ay,
                tg = !aO || aD;
            return ey[290] !== aW || ey[291] !== th || ey[292] !== tg ? (ev = (0, i.jsx)(eQ, {
                showImageRightsNotice: th,
                showContentNotices: tg,
                privacyNotices: aW
            }), ey[290] = aW, ey[291] = th, ey[292] = tg, ey[293] = ev) : ev = ey[293], ey[294] !== as || ey[295] !== te || ey[296] !== aS ? (ew = () => {
                aS && te("CHATGPT_SHARE_FLOW_ACTION_DISMISSED"), as()
            }, ey[294] = as, ey[295] = te, ey[296] = aS, ey[297] = ew) : ew = ey[297], ey[298] !== a9 ? (eT = () => {
                a9()
            }, ey[298] = a9, ey[299] = eT) : eT = ey[299], ey[300] !== ed || ey[301] !== X || ey[302] !== az || ey[303] !== eg || ey[304] !== tn || ey[305] !== ep || ey[306] !== eu || ey[307] !== tr || ey[308] !== to || ey[309] !== tl || ey[310] !== em || ey[311] !== tc || ey[312] !== td || ey[313] !== ef || ey[314] !== eb || ey[315] !== ek || ey[316] !== ev || ey[317] !== ew || ey[318] !== eT ? (e_ = (0, i.jsx)(S.a, {
                threadTitle: az,
                title: X,
                subtitle: tn,
                audience: ep,
                actionLabel: eu,
                actionDisabled: tr,
                isBusy: to,
                isDismissalDisabled: tl,
                onOpenAutoFocus: em,
                size: ed,
                presentation: tc,
                compactImageSheetFooter: td,
                footer: ef,
                preview: eg,
                info: eb,
                error: ek,
                notices: ev,
                onClose: ew,
                onSubmit: eT
            }), ey[300] = ed, ey[301] = X, ey[302] = az, ey[303] = eg, ey[304] = tn, ey[305] = ep, ey[306] = eu, ey[307] = tr, ey[308] = to, ey[309] = tl, ey[310] = em, ey[311] = tc, ey[312] = td, ey[313] = ef, ey[314] = eb, ey[315] = ek, ey[316] = ev, ey[317] = ew, ey[318] = eT, ey[319] = e_) : e_ = ey[319], e_
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

        function eF() {
            return crypto.randomUUID()
        }

        function eO(e) {
            let a, t, n, r, o, l, c, d = (0, s.c)(54),
                {
                    audience: g,
                    contentType: p,
                    isPoll: u,
                    showImageRightsNotice: m
                } = e,
                b = "workspace" === g ? k.He : k.Od;
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
                            learnMore: eY
                        }
                    }), d[0] = p, d[1] = a) : a = d[1], e = a
                } else if ("conversation" === p) {
                    let a;
                    d[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, i.jsx)(h.a, {
                        id: "chatgptConversations.shareDialog.workspaceConversationMemoryDisclosure",
                        defaultMessage: "Links are visible to workspace members only. Memory sources won't be shared with viewers. <learnMore>Learn more</learnMore>",
                        description: "Audience and privacy explanation in the merged-web workspace conversation sharing dialog. Shared links are restricted to workspace members and do not give viewers access to underlying Memory sources. The learnMore tag links to shared-links help.",
                        values: {
                            learnMore: eV
                        }
                    }), d[2] = a) : a = d[2], e = a
                } else {
                    let a;
                    d[3] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, i.jsx)(h.a, {
                        ...eJ.workspaceLinksVisibleWithLearnMore,
                        values: {
                            learnMore: eK
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
                        ...eJ.shareLinkToWidget
                    }), d[6] = e) : e = d[6], a = e
                } else if ("images" === p) {
                    let e;
                    d[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...eJ.shareLinkToImages
                    }), d[7] = e) : e = d[7], a = e
                } else if ("gif" === p) {
                    let e;
                    d[8] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...eJ.shareLinkToGif
                    }), d[8] = e) : e = d[8], a = e
                } else if ("image" === p) {
                    let e;
                    d[9] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...eJ.shareLinkToImage
                    }), d[9] = e) : e = d[9], a = e
                } else if ("message" === p) {
                    let e;
                    d[10] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...eJ.shareLinkToMessage
                    }), d[10] = e) : e = d[10], a = e
                } else if ("prompt" === p) {
                    let e;
                    d[11] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...eJ.shareLinkToPrompt
                    }), d[11] = e) : e = d[11], a = e
                } else {
                    let e;
                    d[12] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...eJ.shareLinkToConversation
                    }), d[12] = e) : e = d[12], a = e
                }
            } else if ("unknown" === g) {
                if ("images" === p) {
                    let e;
                    d[13] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        id: "chatgptConversations.shareDialog.imagesRightsDisclaimer",
                        defaultMessage: "Confirm you have the rights to share these images.",
                        description: "Legal-permission reminder below the heading when sharing a generated-image series before the link audience is known. Asks the user to confirm permission to share every selected image. Shown as a standalone notice."
                    }), d[13] = e) : e = d[13], t = e
                } else if ("gif" === p) {
                    let e;
                    d[14] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        id: "chatgptConversations.shareDialog.gifLicenseDisclaimer",
                        defaultMessage: "Confirm you have the rights to share this GIF",
                        description: "Legal-permission reminder in the generated GIF sharing dialog before the link audience is known. Asks the user to confirm permission to share the animated GIF."
                    }), d[14] = e) : e = d[14], t = e
                } else if ("image" === p) {
                    let e;
                    d[15] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...eJ.imageLicenseDisclaimer
                    }), d[15] = e) : e = d[15], t = e
                }
                if ("widget" === p) {
                    let e;
                    d[16] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...eJ.shareLinkToWidget
                    }), d[16] = e) : e = d[16], a = e
                } else if ("images" === p) {
                    let e;
                    d[17] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...eJ.shareLinkToImages
                    }), d[17] = e) : e = d[17], a = e
                } else if ("gif" === p) {
                    let e;
                    d[18] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...eJ.shareLinkToGif
                    }), d[18] = e) : e = d[18], a = e
                } else if ("image" === p) {
                    let e;
                    d[19] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...eJ.shareLinkToImage
                    }), d[19] = e) : e = d[19], a = e
                } else if ("message" === p) {
                    let e;
                    d[20] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...eJ.shareLinkToMessage
                    }), d[20] = e) : e = d[20], a = e
                } else if ("prompt" === p) {
                    let e;
                    d[21] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...eJ.shareLinkToPrompt
                    }), d[21] = e) : e = d[21], a = e
                } else {
                    let e;
                    d[22] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...eJ.shareLinkToConversation
                    }), d[22] = e) : e = d[22], a = e
                }
            } else if ("widget" === p) {
                let e, s;
                d[23] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    ...eJ.sharePublicLinkToWidget
                }), d[23] = e) : e = d[23], a = e, d[24] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(h.a, {
                            id: "chatgptConversations.widgetShare.publicAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access this widget. <learnMore>Learn more</learnMore>",
                            description: "Audience explanation when sharing a generated Recharts widget. The learnMore tag links to shared-links help in merged web.",
                            values: {
                                learnMore: eB
                            }
                        })
                    }), null]
                }), d[24] = s) : s = d[24], t = s
            } else if ("images" === p) {
                let e, s;
                d[25] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    ...eJ.sharePublicLinkToImages
                }), d[25] = e) : e = d[25], a = e, d[26] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(h.a, {
                            id: "chatgptConversations.shareDialog.imagesPublicLinkAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access these images. Confirm you have the rights to share these images. <learnMore>Learn more</learnMore>",
                            description: "Audience and legal-permission reminder when sharing all images from one generation. Anyone with the link can view the images; the user must have permission to share them. The learnMore tag links to shared-links help in merged web. All sentences appear in one paragraph.",
                            values: {
                                learnMore: eq
                            }
                        })
                    }), null]
                }), d[26] = s) : s = d[26], t = s
            } else if ("gif" === p) {
                let e, s;
                d[27] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.sharePublicLinkToGif",
                    defaultMessage: "Share a public link to this GIF",
                    description: "Info heading in the generated GIF sharing dialog for a personal account. Anyone with the link can view the animated GIF."
                }), d[27] = e) : e = d[27], a = e, d[28] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.gifPublicLinkAudienceWithLearnMore",
                    defaultMessage: "Anyone with this link can access this GIF. Confirm you have the rights to share this GIF. <learnMore>Learn more</learnMore>",
                    description: "Audience and legal-permission reminder in the generated GIF sharing dialog. Anyone with the link can view the animation, and the user must have permission to share it. The learnMore tag links to shared-links help.",
                    values: {
                        learnMore: ez
                    }
                }), d[28] = s) : s = d[28], t = s
            } else if ("image" === p) {
                let e, s;
                d[29] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    ...eJ.sharePublicLinkToImage
                }), d[29] = e) : e = d[29], a = e, d[30] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(h.a, {
                            id: "chatgptConversations.shareDialog.imagePublicLinkAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access this image. Confirm you have the rights to share this image. <learnMore>Learn more</learnMore>",
                            description: "Audience and legal-permission reminder when sharing an image. Anyone with the link can view the image; the user must have permission to share it. The learnMore tag links to shared-links help in merged web. All sentences appear in one paragraph.",
                            values: {
                                learnMore: eU
                            }
                        })
                    }), null]
                }), d[30] = s) : s = d[30], t = s
            } else if ("message" === p) {
                let e, s;
                d[31] !== u ? (e = u ? (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.poll.publicLinkTitle",
                    defaultMessage: "Share a public link to this poll",
                    description: "Heading below the poll preview in the public sharing dialog. Tells the person sharing that the link opens this interactive voting poll. Workspace-restricted links use a separate disclosure."
                }) : (0, i.jsx)(h.a, {
                    ...eJ.sharePublicLinkToMessage
                }), d[31] = u, d[32] = e) : e = d[32], a = e, d[33] !== u ? (s = (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(i.Fragment, {
                        children: u ? (0, i.jsx)(h.a, {
                            id: "chatgptConversations.shareDialog.poll.publicAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access and vote on this poll. <learnMore>Learn more</learnMore>",
                            description: "Explanation below a public poll link preview in the web sharing dialog. Tells the person sharing that link recipients can open the poll and vote. The learnMore tag links to shared-links help.",
                            values: {
                                learnMore: eW
                            }
                        }) : (0, i.jsx)(h.a, {
                            id: "chatgptConversations.shareDialog.messagePublicLinkAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access this message. <learnMore>Learn more</learnMore>",
                            description: "Audience explanation when sharing a response. The learnMore tag links to shared-links help in merged web.",
                            values: {
                                learnMore: eH
                            }
                        })
                    }), null]
                }), d[33] = u, d[34] = s) : s = d[34], t = s
            } else if ("prompt" === p) {
                let e, s;
                d[35] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.prompt.info.title.public",
                    defaultMessage: "Share a public link to this prompt",
                    description: "Heading below the prompt preview in the ChatGPT sharing dialog for a personal account. It introduces the public link and social sharing actions for the selected user prompt."
                }), d[35] = e) : e = d[35], a = e, d[36] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(h.a, {
                            id: "chatgptConversations.shareDialog.prompt.info.description.publicWithLearnMore",
                            defaultMessage: "Anyone with this link can access this prompt. <learnMore>Learn more</learnMore>",
                            description: "Audience explanation below the public-link heading in the ChatGPT prompt sharing dialog on web. Only the selected prompt is shared. The learnMore tag links to shared-links help.",
                            values: {
                                learnMore: eR
                            }
                        })
                    }), null]
                }), d[36] = s) : s = d[36], t = s
            } else {
                let e, s;
                d[37] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    ...eJ.sharePublicLinkToConversation
                }), d[37] = e) : e = d[37], a = e, d[38] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsx)(U, {
                    includeConversationAudience: !0
                }), d[38] = s) : s = d[38], t = s
            }
            return d[39] !== b || d[40] !== g ? (n = "unknown" === g ? null : (0, i.jsx)(b, {
                className: "public" === g ? "relative -start-px" : void 0,
                "aria-hidden": "true"
            }), d[39] = b, d[40] = g, d[41] = n) : n = d[41], d[42] !== n || d[43] !== a ? (r = (0, i.jsxs)("div", {
                className: "flex items-center gap-1 text-xs leading-4 font-bold text-default",
                children: [n, a]
            }), d[42] = n, d[43] = a, d[44] = r) : r = d[44], d[45] !== t ? (o = null == t ? null : (0, i.jsx)("div", {
                className: "mt-1.5 text-xs leading-4 text-codex-description browser:text-secondary",
                children: t
            }), d[45] = t, d[46] = o) : o = d[46], d[47] !== g || d[48] !== p ? (l = "unknown" === g && "conversation" === p ? (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)("div", {
                    className: "mt-1.5 text-xs leading-4 text-secondary",
                    children: (0, i.jsx)(U, {})
                })
            }) : null, d[47] = g, d[48] = p, d[49] = l) : l = d[49], d[50] !== r || d[51] !== o || d[52] !== l ? (c = (0, i.jsx)(f.e, {
                spacing: "large",
                children: (0, i.jsxs)("div", {
                    className: "w-full text-start select-none",
                    children: [r, o, l]
                })
            }), d[50] = r, d[51] = o, d[52] = l, d[53] = c) : c = d[53], c
        }

        function eR(e) {
            return (0, i.jsx)(z, {
                children: e
            })
        }

        function eH(e) {
            return (0, i.jsx)(z, {
                children: e
            })
        }

        function eW(e) {
            return (0, i.jsx)(z, {
                children: e
            })
        }

        function eU(e) {
            return (0, i.jsx)(z, {
                children: e
            })
        }

        function ez(e) {
            return (0, i.jsx)(z, {
                children: e
            })
        }

        function eq(e) {
            return (0, i.jsx)(z, {
                children: e
            })
        }

        function eB(e) {
            return (0, i.jsx)(z, {
                children: e
            }, "learn-more")
        }

        function eK(e) {
            return (0, i.jsx)(z, {
                children: e
            })
        }

        function eV(e) {
            return (0, i.jsx)(z, {
                children: e
            })
        }

        function eY(e) {
            return (0, i.jsx)(z, {
                children: e
            })
        }

        function e$(e) {
            let a, t = (0, s.c)(4),
                {
                    src: n,
                    isLoading: r
                } = e;
            if (null != n) {
                let e;
                return t[0] !== n ? (e = (0, i.jsx)("img", {
                    alt: "",
                    className: "block size-full object-contain",
                    referrerPolicy: "no-referrer",
                    src: n
                }), t[0] = n, t[1] = e) : e = t[1], e
            }
            return t[2] !== r ? (a = (0, i.jsx)("div", {
                className: "flex h-full items-center justify-center gap-2 text-sm text-secondary",
                children: r ? (0, i.jsx)(v.a, {
                    className: "icon-sm"
                }) : (0, i.jsx)(h.a, {
                    ...eJ.imageUnavailable
                })
            }), t[2] = r, t[3] = a) : a = t[3], a
        }

        function eQ(e) {
            let a, t, n, r, o, l = (0, s.c)(16),
                {
                    showImageRightsNotice: c,
                    showContentNotices: d,
                    privacyNotices: g
                } = e;
            return l[0] !== g?.hasUnsupportedCodeInterpreterContent || l[1] !== d ? (a = d && g?.hasUnsupportedCodeInterpreterContent ? (0, i.jsx)(f.e, {
                children: (0, i.jsx)(m.a, {
                    content: (0, i.jsx)(h.a, {
                        ...eJ.filesNotShared
                    }),
                    variant: "privacyNotice"
                })
            }) : null, l[0] = g?.hasUnsupportedCodeInterpreterContent, l[1] = d, l[2] = a) : a = l[2], l[3] !== g?.hasPersonalizedSources || l[4] !== d ? (t = d && g?.hasPersonalizedSources ? (0, i.jsx)(f.e, {
                children: (0, i.jsx)(m.a, {
                    content: (0, i.jsx)(h.a, {
                        ...eJ.personalizedSourcesPrivate
                    }),
                    variant: "privacyNotice"
                })
            }) : null, l[3] = g?.hasPersonalizedSources, l[4] = d, l[5] = t) : t = l[5], l[6] !== g?.hasScreenshotReference || l[7] !== d ? (n = d && g?.hasScreenshotReference ? (0, i.jsx)(f.e, {
                children: (0, i.jsx)(m.a, {
                    content: (0, i.jsx)(h.a, {
                        ...eJ.screenshotDisclaimer
                    }),
                    variant: "privacyNotice"
                })
            }) : null, l[6] = g?.hasScreenshotReference, l[7] = d, l[8] = n) : n = l[8], l[9] !== c ? (r = c ? (0, i.jsx)(f.e, {
                children: (0, i.jsx)("p", {
                    className: "text-sm text-secondary select-none",
                    children: (0, i.jsx)(h.a, {
                        ...eJ.imageLicenseDisclaimer
                    })
                })
            }) : null, l[9] = c, l[10] = r) : r = l[10], l[11] !== a || l[12] !== t || l[13] !== n || l[14] !== r ? (o = (0, i.jsxs)(i.Fragment, {
                children: [a, t, n, r]
            }), l[11] = a, l[12] = t, l[13] = n, l[14] = r, l[15] = o) : o = l[15], o
        }

        function eX(e) {
            let a = (0, s.c)(3),
                {
                    error: t
                } = e;
            switch (t) {
                case "blocked": {
                    let e;
                    return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...eJ.shareBlocked
                    }), a[0] = e) : e = a[0], e
                }
                case "copy-failed": {
                    let e;
                    return a[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...eJ.shareCopyFailed
                    }), a[1] = e) : e = a[1], e
                }
                case "create-failed": {
                    let e;
                    return a[2] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
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
    fwwN: (function(e, a, t) {
        var i = t("SGsN"),
            s = t("xygx"),
            n = t("ddzD"),
            r = t("urzV"),
            o = t("taWv"),
            l = t("rfhJ");
        async function c(e, a) {
            let {
                images: t,
                downloadSources: c,
                intl: d,
                serverConversationId: h,
                isParagen: g = !1,
                logIndividualDownloads: p = !0
            } = a, u = 0;
            for (let [a, m] of t.entries()) {
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
                    k = (0, r.b)(d, b, {
                        title: m.chatGptDisplayTitle,
                        gifSpeed: m.gifPlayback?.speed
                    }),
                    v = !1;
                if (null != f && await (0, r.d)({
                        downloadSrc: f,
                        onDownloaded: () => {
                            v = !0, null != h && !g && p && (0, l.c)(e, h, m, "download")
                        },
                        suggestedFilename: t.length > 1 ? k.replace(/\.[^.]+$/, `-${a+1}.${b}`) : k
                    })) {
                    if (!v) return "cancelled";
                    u++;
                    continue
                }
                return e.get(i.f).danger(d.formatMessage({
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
        t.d(a, {
            a: () => c
        })
    }),
    cQW3: (function(e, a, t) {
        var i = t("SavH"),
            s = t("yGJW"),
            n = t("r9i9");

        function r(e, a, t) {
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
        t.d(a, {
            a: () => r
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
        async function r(e, a, t, r) {
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
                return (0, s.a)(e, i.h, {
                    ...c,
                    action: "CHATGPT_SHARE_FLOW_ACTION_SYSTEM_SHEET_OPENED"
                }), await a, (0, s.a)(e, i.h, {
                    ...c,
                    action: "CHATGPT_SHARE_FLOW_ACTION_SYSTEM_SHARE_COMPLETED"
                }), "shared"
            } catch (t) {
                let a = t instanceof Error && "AbortError" === t.name;
                return (0, s.a)(e, i.h, {
                    ...c,
                    action: a ? "CHATGPT_SHARE_FLOW_ACTION_DISMISSED" : "CHATGPT_SHARE_FLOW_ACTION_FAILED",
                    failureReason: a ? void 0 : "CHATGPT_SHARE_FLOW_FAILURE_REASON_UNSPECIFIED"
                }), a ? "cancelled" : "failed"
            }
        }
        t.d(a, {
            a: () => n,
            b: () => r
        })
    }),
    k5RO: (function(e, a, t) {
        let i = {
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
            };

        function l(e) {
            let {
                canUseNativeShare: a,
                experience: t,
                isMobileBrowser: i,
                isPersonalAccount: n
            } = e;
            if (i) return "custom" === t.kind ? t : a && n ? s : void 0
        }
        let c = ["whatsapp", "messages", "instagram-stories", "facebook-messenger", "x", "reddit"],
            d = {
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
            h = {
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

        function g(e) {
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
                    return i
            }
        }

        function p(e) {
            let {
                country: a
            } = e, t = a?.trim().toUpperCase();
            return [...(null == t ? void 0 : d[t]) ?? c]
        }

        function u(e) {
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
        }

        function m(e, a) {
            return h[e]?.[a] ?? null
        }

        function f(e) {
            return null != h[e]
        }
        t.d(a, {
            c: () => m,
            d: () => u,
            e: () => p,
            f: () => l,
            g: () => f,
            h: () => g
        }, {
            a: "2001123255",
            b: "mweb_image_share_sheet_variant"
        })
    }),
    sX4C: (function(e, a, t) {
        t.d(a, {
            a: () => p
        });
        var i = t("ABep"),
            s = t("QosV"),
            n = t("on57"),
            r = t("Wf1j"),
            o = t("ygO2"),
            l = t("JNtf"),
            c = t("mUDD"),
            d = t("HOLv"),
            h = t("CsDP"),
            g = t("UAZ3");

        function p(e) {
            let a, t, p, u, m, f, b, k, v = (0, s.c)(44),
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
                F = void 0 !== C && C,
                O = void 0 !== S && S,
                R = void 0 !== x && x,
                H = (0, r.a)(),
                W = "imageSheet" === G;
            v[0] !== O || v[1] !== _ || v[2] !== H || v[3] !== R || v[4] !== W || v[5] !== M || v[6] !== A || v[7] !== I ? (a = W ? (0, i.jsxs)("div", {
                className: (0, n.b)("shrink-0", "imageSheetHeader-vPz2gu", O && "imageSheetTwoRowsHeader-udlzI8"),
                children: [(0, i.jsx)(l.e, {
                    className: "imageSheetTitle-iMmEfF",
                    children: I
                }), null != A && (0, i.jsx)(l.d, {
                    className: "imageSheetSubtitle-E3o3_v",
                    children: A
                }), !R && (0, i.jsx)(o.a, {
                    unstyled: !0,
                    className: (0, n.b)("imageSheetClose-msZEpI", O && "imageSheetTwoRowsClose-qwbpXz"),
                    "aria-label": H.formatMessage({
                        id: "codex.dialog.closeButton",
                        defaultMessage: "Close dialog",
                        description: "Accessible label for the button that closes a dialog"
                    }),
                    onClick: e => {
                        e.stopPropagation(), M()
                    },
                    children: (0, i.jsx)(d.a, {
                        asset: g.a
                    })
                })]
            }) : (0, i.jsxs)("div", {
                className: "mb-2 flex items-center gap-2 pe-8",
                children: [(0, i.jsx)(c.d, {
                    className: "min-w-0 flex-1",
                    title: (0, i.jsx)(l.e, {
                        className: "contents",
                        children: I
                    }),
                    titleClassName: "truncate",
                    subtitle: null == A ? void 0 : (0, i.jsx)(l.d, {
                        className: "contents",
                        children: A
                    })
                }), _]
            }), v[0] = O, v[1] = _, v[2] = H, v[3] = R, v[4] = W, v[5] = M, v[6] = A, v[7] = I, v[8] = a) : a = v[8], v[9] !== T || v[10] !== a ? (t = (0, i.jsxs)(i.Fragment, {
                children: [a, T]
            }), v[9] = T, v[10] = a, v[11] = t) : t = v[11];
            let U = t;
            v[12] !== A ? (p = null == A ? {
                "aria-describedby": void 0
            } : {}, v[12] = A, v[13] = p) : p = v[13], v[14] !== L || v[15] !== E ? (u = e => {
                e.currentTarget instanceof HTMLElement && E?.(e.currentTarget), L?.(e)
            }, v[14] = L, v[15] = E, v[16] = u) : u = v[16], v[17] !== j || v[18] !== p || v[19] !== u ? (m = {
                ...p,
                shouldStopPointerDownPropagation: !1,
                onCloseAutoFocus: j,
                onOpenAutoFocus: u
            }, v[17] = j, v[18] = p, v[19] = u, v[20] = m) : m = v[20];
            let z = !R && !W,
                q = N ?? "opaque",
                B = W ? "imageSheetSurface-pAxv7i" : void 0,
                K = W ? "imageSheetOverlay-Da_SGi" : void 0;
            return v[21] !== R || v[22] !== M ? (f = e => {
                e || R || M()
            }, v[21] = R, v[22] = M, v[23] = f) : f = v[23], v[24] !== w || v[25] !== F || v[26] !== O || v[27] !== y || v[28] !== U || v[29] !== R || v[30] !== W || v[31] !== P ? (b = W ? (0, i.jsxs)(c.b, {
                as: null == P ? "div" : "form",
                variant: "chatgpt",
                className: (0, n.b)("imageSheetBody-YQy31R", "min-h-0", O && "imageSheetTwoRowsBody-mMGp9m"),
                onSubmit: null == P ? void 0 : e => {
                    e.preventDefault(), e.stopPropagation(), R || P()
                },
                children: [(0, i.jsxs)("div", {
                    className: "flex min-h-0 flex-col",
                    children: [U, w]
                }), (0, i.jsx)("div", {
                    className: (0, n.b)("shrink-0", O ? "mt-2" : "mt-12"),
                    children: y
                })]
            }) : (0, i.jsx)(h.a, {
                collapseEmptyContent: F,
                header: U,
                footer: y,
                onSubmit: null == P ? void 0 : e => {
                    e.preventDefault(), e.stopPropagation(), R || P()
                },
                children: w
            }), v[24] = w, v[25] = F, v[26] = O, v[27] = y, v[28] = U, v[29] = R, v[30] = W, v[31] = P, v[32] = b) : b = v[32], v[33] !== R || v[34] !== W || v[35] !== D || v[36] !== q || v[37] !== B || v[38] !== K || v[39] !== f || v[40] !== b || v[41] !== m || v[42] !== z ? (k = (0, i.jsx)(l.b, {
                open: !0,
                contentOverflow: "visible",
                contentProps: m,
                shouldIgnoreClickOutside: R,
                showDialogClose: z,
                size: D,
                variant: q,
                unstyledContent: W,
                contentClassName: B,
                overlayClassName: K,
                onOpenChange: f,
                children: b
            }), v[33] = R, v[34] = W, v[35] = D, v[36] = q, v[37] = B, v[38] = K, v[39] = f, v[40] = b, v[41] = m, v[42] = z, v[43] = k) : k = v[43], k
        }
    }),
    TnP0: (function(e, a, t) {
        var i = t("ABep"),
            s = t("QosV"),
            n = t("Wf1j"),
            r = t("oyxz"),
            o = t("ygO2"),
            l = t("mUDD"),
            c = t("bf6R"),
            d = t("evwP"),
            h = t("zLIa"),
            g = t("sX4C");

        function p(e) {
            let a, t, p, u, m, f, b, k = (0, s.c)(38),
                {
                    accessControls: v,
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
                    size: F,
                    threadTitle: O,
                    title: R
                } = e,
                H = (0, n.a)();
            k[0] !== O ? (a = O?.trim(), k[0] = O, k[1] = a) : a = k[1];
            let W = a;
            k[2] !== A ? (t = A ? null : (0, i.jsx)(c.ve, {}), k[2] = A, k[3] = t) : t = k[3], k[4] !== T || k[5] !== t ? (p = (0, i.jsxs)(i.Fragment, {
                children: [t, T]
            }), k[4] = T, k[5] = t, k[6] = p) : p = k[6];
            let U = p;
            if (C?.preventsSharing) {
                let e;
                k[7] !== C.onRetry ? (e = null != C.onRetry ? (0, i.jsx)(r.a, {
                    id: "shareDialog.thread.retry",
                    defaultMessage: "Try again",
                    description: "Button in a thread sharing dialog after preparing the share link fails. Retries preparing the chat without publishing it."
                }) : (0, i.jsx)(r.a, {
                    id: "shareDialog.thread.close",
                    defaultMessage: "Close",
                    description: "Button in a thread sharing dialog that cannot prepare a share link. Closes the failed dialog so the user can reopen sharing."
                }), k[7] = C.onRetry, k[8] = e) : e = k[8], U = e
            }
            let z = !C?.preventsSharing && w;
            k[9] !== U || k[10] !== A || k[11] !== z ? (u = (0, i.jsx)(o.a, {
                color: "outline",
                disabled: z,
                loading: A,
                size: "medium",
                type: "submit",
                children: U
            }), k[9] = U, k[10] = A, k[11] = z, k[12] = u) : u = k[12];
            let q = u;
            k[13] !== W || k[14] !== R ? (m = R ?? (W ? (0, i.jsx)(r.a, {
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
            })), k[13] = W, k[14] = R, k[15] = m) : m = k[15];
            let B = C?.preventsSharing ? C.onRetry ?? L : P,
                K = C?.preventsSharing ? q : S ?? q;
            return k[16] !== v || k[17] !== _ || k[18] !== C || k[19] !== x || k[20] !== H || k[21] !== M || k[22] !== N || k[23] !== D ? (f = C?.preventsSharing ? (0, i.jsx)(l.e, {
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
                }), x, M, v ?? (null == _ ? null : (0, i.jsx)(l.e, {
                    children: (0, i.jsx)("div", {
                        className: "text-sm text-codex-description",
                        children: _
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
                            defaultMessage: "Share link",
                            description: "Accessible label for the read-only URL field in a ChatGPT or Codex thread sharing dialog. The URL can be manually selected and copied if clipboard access fails."
                        }),
                        readOnly: !0,
                        value: C.copyUrl
                    })
                })]
            }), k[16] = v, k[17] = _, k[18] = C, k[19] = x, k[20] = H, k[21] = M, k[22] = N, k[23] = D, k[24] = f) : f = k[24], k[25] !== y || k[26] !== I || k[27] !== L || k[28] !== j || k[29] !== E || k[30] !== N || k[31] !== F || k[32] !== G || k[33] !== m || k[34] !== B || k[35] !== K || k[36] !== f ? (b = (0, i.jsx)(g.a, {
                title: m,
                subtitle: G,
                compactImageSheetFooter: y,
                isDismissalDisabled: I,
                onClose: L,
                onOpenAutoFocus: j,
                onPortalContainerChange: E,
                onSubmit: B,
                size: F,
                presentation: N,
                footer: K,
                children: f
            }), k[25] = y, k[26] = I, k[27] = L, k[28] = j, k[29] = E, k[30] = N, k[31] = F, k[32] = G, k[33] = m, k[34] = B, k[35] = K, k[36] = f, k[37] = b) : b = k[37], b
        }
        t.d(a, {
            a: () => p
        })
    })
};