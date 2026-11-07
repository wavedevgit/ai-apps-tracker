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
            a: () => ej,
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
            m = t("zKCW"),
            f = t("mUDD"),
            b = t("Ot7V"),
            v = t("bf6R"),
            w = t("EShr"),
            k = t("RNul"),
            T = t("SGsN"),
            _ = t("yGJW"),
            y = t("OWtl"),
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
            V = t("on57"),
            Y = t("WAV0"),
            $ = t("P2zs"),
            Q = t.p + "assets/line.54d213ef65.svg",
            X = t("O666"),
            J = t("k6sM"),
            Z = t("Sm6l"),
            ee = t("HOLv"),
            ea = t.p + "assets/facebook.a44c3b23dc.svg",
            et = t.p + "assets/instagram.f89c02c412.svg",
            ei = t.p + "assets/kakao-talk.9a71acddc9.svg",
            es = t.p + "assets/line.8701c39f94.svg",
            en = t.p + "assets/linkedin.a0e21ee4e9.svg",
            er = t.p + "assets/messages.65e1f7f9bb.svg",
            eo = t.p + "assets/reddit.ef23b998c8.svg",
            el = t.p + "assets/snapchat.68114a3519.svg",
            ec = t.p + "assets/telegram.4e098d17e4.svg",
            ed = t.p + "assets/whatsapp.95a74777d3.svg",
            eh = t.p + "assets/x.f402deb07e.svg",
            eg = t.p + "assets/facebook-messenger.d2456ff12a.svg",
            ep = t.p + "assets/facebook-stories.a4b3bd52fa.svg",
            eu = t.p + "assets/instagram-stories.c90c585419.svg",
            em = t.p + "assets/kakao-talk.a52fcff4cb.svg",
            ef = t.p + "assets/linkedin.61d30fb4b9.svg",
            eb = t.p + "assets/messages.eed095b840.svg",
            ev = t.p + "assets/reddit.960af71a47.svg",
            ew = t.p + "assets/telegram.b7e1212639.svg",
            ek = t.p + "assets/whatsapp.0a1329508c.svg",
            eT = t.p + "assets/x.1105bc9892.svg",
            e_ = "mobileRow-V0E64y",
            ey = t("H6Am"),
            eS = t("G3Yw"),
            eC = t("ARht");

        function ex(e) {
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
                    onSocialShare: T,
                    experience: _,
                    onNativeShare: y,
                    canNativeShare: S,
                    country: C,
                    rowScrollPositions: x
                } = e,
                A = (0, d.a)();
            if (c[0] !== w || c[1] !== S || c[2] !== g || c[3] !== h || c[4] !== C || c[5] !== _.layout || c[6] !== _.unsupportedDestinationFallback || c[7] !== A || c[8] !== p || c[9] !== u || c[10] !== b || c[11] !== v || c[12] !== y || c[13] !== T || c[14] !== x || c[15] !== f || c[16] !== m) {
                o = Symbol.for("react.early_return_sentinel");
                e: {
                    let e, s, l, d = null == v ? [] : [{
                        id: "download",
                        disabled: u || p,
                        icon: (0, i.jsx)(ee.a, {
                            asset: ey.a
                        }),
                        label: A.formatMessage({
                            id: "chatgptConversations.shareDialog.destination.download.label",
                            defaultMessage: "Download",
                            description: "Short label below a circular button in the generated-image Share dialog. Saves the selected image, or all images in the selected series, to the user's device without creating a shared link."
                        }),
                        onClick: v
                    }];c[22] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(ee.a, {
                        asset: eC.a
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
                            icon: (0, i.jsx)(ee.a, {
                                asset: eS.a
                            }),
                            label: A.formatMessage({
                                id: "chatgptConversations.mobileImageShare.native",
                                defaultMessage: "Share to",
                                description: "Short action label in the mobile generated-image share sheet. Selecting it opens the device's operating-system share sheet with the public image or reusable prompt link. It appears beside Copy link and Download."
                            }),
                            onClick: y
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
                                    a = c(eb), t = d(er), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.messages",
                                        defaultMessage: "Messages",
                                        description: "Short destination label in the mobile generated-image share sheet. Selecting it opens a text-message draft containing the public image link. This means the device's Messages app, not ChatGPT messages."
                                    });
                                    break;
                                case "whatsapp":
                                    a = c(ek), t = d(ed), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.whatsapp",
                                        defaultMessage: "WhatsApp",
                                        description: "Short destination label in the mobile generated-image share sheet. Selecting it opens WhatsApp with the public image link ready to send. WhatsApp is a brand name."
                                    });
                                    break;
                                case "instagram-stories":
                                    a = c(eu), t = d(et), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.instagramStories",
                                        defaultMessage: "Instagram",
                                        description: "Short destination label in the mobile generated-image share sheet for sharing through Instagram Stories. Depending on the experiment assignment, selecting it opens the operating-system share sheet or the Instagram app-store page. Instagram is a brand name."
                                    });
                                    break;
                                case "facebook-stories":
                                    a = c(ep), t = d(ea), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.facebookStories",
                                        defaultMessage: "Facebook",
                                        description: "Short destination label in the mobile generated-image share sheet for sharing through Facebook Stories. Depending on the experiment assignment, selecting it opens the operating-system share sheet or the Facebook app-store page. Facebook is a brand name."
                                    });
                                    break;
                                case "telegram":
                                    a = c(ew), t = d(ec), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.telegram",
                                        defaultMessage: "Telegram",
                                        description: "Short destination label in the mobile generated-image share sheet. Selecting it opens Telegram with the public image link ready to send. Telegram is a brand name."
                                    });
                                    break;
                                case "facebook-messenger":
                                    a = c(eg), t = d(ea), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.facebookMessenger",
                                        defaultMessage: "Messenger",
                                        description: "Short destination label in the mobile generated-image share sheet for Facebook Messenger. Depending on the experiment assignment, selecting it opens the operating-system share sheet or the Messenger app-store page. Messenger is a brand name."
                                    });
                                    break;
                                case "kakao-talk":
                                    a = c(em), t = d(ei), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.kakaoTalk",
                                        defaultMessage: "KakaoTalk",
                                        description: "Short destination label shown to users in Korea in the mobile generated-image share sheet. Depending on the experiment assignment, selecting it opens the operating-system share sheet or the KakaoTalk app-store page. KakaoTalk is a brand name."
                                    });
                                    break;
                                case "snapchat-stories":
                                    a = (0, i.jsx)(J.a, {
                                        "aria-hidden": "true",
                                        className: "text-brand-logo-foreground"
                                    }), t = d(el), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.snapchatStories",
                                        defaultMessage: "Snapchat",
                                        description: "Short destination label in the mobile generated-image share sheet for sharing through Snapchat Stories. Depending on the experiment assignment, selecting it opens the operating-system share sheet or the Snapchat app-store page. Snapchat is a brand name."
                                    });
                                    break;
                                case "line":
                                    a = c(Q), t = d(es), s = o.formatMessage({
                                        id: "postSharingModal.line",
                                        defaultMessage: "LINE",
                                        description: "Short label for the LINE destination in ChatGPT conversation, message, and image sharing dialogs and menus. Selecting it opens LINE sharing so the user can choose recipients and send the shared link. Appears alongside X and LinkedIn. LINE is a messaging app brand name; keep its Latin letters and capitalization."
                                    });
                                    break;
                                case "x":
                                    a = c(eT), t = d(eh), s = o.formatMessage({
                                        id: "chatgptConversations.shareDialog.destination.x.label",
                                        defaultMessage: "X",
                                        description: "Short destination label below a circular button in a ChatGPT post sharing dialog for a conversation, response, or generated image. Selecting it opens X's post composer with the public post URL."
                                    });
                                    break;
                                case "linkedin":
                                    a = c(ef), t = d(en), s = o.formatMessage({
                                        id: "chatgptConversations.shareDialog.destination.linkedin.label",
                                        defaultMessage: "LinkedIn",
                                        description: "Short destination label below a circular button in a ChatGPT post sharing dialog for a conversation, response, or generated image. Selecting it opens LinkedIn's post composer with the public post URL."
                                    });
                                    break;
                                case "reddit":
                                    a = c(ev), t = d(eo), s = o.formatMessage({
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
                            disabled: m || "native-share" === _.unsupportedDestinationFallback && (0, K.g)(e) && !S,
                            intl: A,
                            onSocialShare: T
                        })) : [],
                        E = "two-rows" === _.layout && j.length > 0;c[23] !== x ? (s = e => null == x ? {} : {
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
                        return (0, i.jsx)(Y.a, {
                            extension: "download" === t,
                            children: (0, i.jsxs)(Z.a, {
                                "aria-label": o,
                                "aria-busy": c,
                                color: "shareDestination",
                                unstyled: !0,
                                className: (0, V.b)("mobileDestination-JRc58g", a && "mobileTwoRowDestination-jahy9S"),
                                "data-destination": t,
                                disabled: s,
                                size: "shareDestination",
                                type: "copy" === t ? "submit" : "button",
                                onClick: l,
                                children: [(0, i.jsxs)("span", {
                                    className: (0, V.b)("destinationIcon-EuU6jl", null != r && "destinationIconWithArtwork-eYPnWH"),
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
                        c[28] !== P ? (e = P("destinations"), c[28] = P, c[29] = e) : e = c[29], c[30] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, V.b)("box-border flex min-w-0 w-full gap-x-5 overflow-x-auto overscroll-x-contain px-5 pt-5 pb-8", e_), c[30] = a) : a = c[30], c[31] !== D ? (t = e => D(e, !0), c[31] = D, c[32] = t) : t = c[32], c[33] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsx)("div", {
                            className: "w-full border-t-hairline border-default",
                            "aria-hidden": "true"
                        }), c[33] = s) : s = c[33], c[34] !== P ? (n = P("actions"), c[34] = P, c[35] = n) : n = c[35], c[36] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, V.b)("box-border flex min-w-0 w-full gap-x-5 overflow-x-auto overscroll-x-contain px-5 pt-5 pb-8", e_, "mobileUtilityRow-iCKQaL"), c[36] = r) : r = c[36], o = (0, i.jsxs)("div", {
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
                    c[39] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, V.b)("flex w-full gap-x-6 overflow-x-auto overscroll-x-contain px-6", e_), c[39] = n) : n = c[39],
                    r = [...L, ...j].map(e => D(e, !1))
                }
                c[0] = w, c[1] = S, c[2] = g, c[3] = h, c[4] = C, c[5] = _.layout, c[6] = _.unsupportedDestinationFallback, c[7] = A, c[8] = p, c[9] = u, c[10] = b, c[11] = v, c[12] = y, c[13] = T, c[14] = x, c[15] = f, c[16] = m, c[17] = a, c[18] = t, c[19] = n, c[20] = r, c[21] = o
            } else a = c[17], t = c[18], n = c[19], r = c[20], o = c[21];
            return o !== Symbol.for("react.early_return_sentinel") ? o : (c[40] !== w || c[41] !== a || c[42] !== t || c[43] !== n || c[44] !== r ? (l = (0, i.jsxs)("div", {
                "data-mobile-image-share-row": a,
                ...t,
                className: n,
                children: [r, w]
            }), c[40] = w, c[41] = a, c[42] = t, c[43] = n, c[44] = r, c[45] = l) : l = c[45], l)
        }

        function eA(e) {
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
                T = void 0 !== m && m,
                _ = void 0 === v ? "button" : v;
            d[0] === Symbol.for("react.memo_cache_sentinel") ? (a = {
                layer: "3136899520",
                parameter: "large_share_destinations"
            }, d[0] = a) : a = d[0];
            let y = (0, l.x)(X.b, a),
                S = y ? u.large : u.compact,
                C = y ? "size-16" : "size-11";
            d[1] !== C ? (t = (0, V.b)("share-destination-icon flex items-center justify-center rounded-full", C), d[1] = C, d[2] = t) : t = d[2], d[3] !== y || d[4] !== S || d[5] !== T ? (n = T ? (0, i.jsx)(k.a, {
                as: "span",
                className: y ? "size-8" : "icon-sm"
            }) : S, d[3] = y, d[4] = S, d[5] = T, d[6] = n) : n = d[6], d[7] !== t || d[8] !== n ? (r = (0, i.jsx)("span", {
                className: t,
                children: n
            }), d[7] = t, d[8] = n, d[9] = r) : r = d[9];
            let x = void 0 !== b && b ? "polite" : void 0;
            return d[10] !== f || d[11] !== x ? (o = (0, i.jsx)("span", {
                className: "w-full text-center text-xs whitespace-nowrap text-default select-none",
                "aria-live": x,
                children: f
            }), d[10] = f, d[11] = x, d[12] = o) : o = d[12], d[13] !== h || d[14] !== g || d[15] !== p || d[16] !== T || d[17] !== w || d[18] !== o || d[19] !== r || d[20] !== _ ? (c = (0, i.jsxs)(Z.a, {
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

        function eI(e) {
            let a, t, n, r, o, c, h, g, p, u, m, f, b = (0, s.c)(55),
                {
                    copyLabel: w,
                    copyDisabled: k,
                    isBusy: T,
                    isDownloading: _,
                    socialDestinationsDisabled: y,
                    showSocialDestinations: S,
                    onCopy: C,
                    onDownload: x,
                    additionalActions: A,
                    onSocialShare: M,
                    mobileImageActions: L
                } = e,
                j = void 0 !== _ && _,
                E = null != L;
            b[0] !== E ? (a = {
                layer: "3136899520",
                parameter: "large_share_destinations",
                disableExposureLog: E
            }, b[0] = E, b[1] = a) : a = b[1];
            let P = (0, l.x)(X.b, a),
                D = (0, d.a)(),
                {
                    client: N
                } = (0, I.j)();
            b[2] !== N ? (t = N.getContext().user?.country?.trim().toUpperCase(), b[2] = N, b[3] = t) : t = b[3];
            let G = t,
                R = null == L && "JP" === G && S,
                F = !R;
            b[4] !== F ? (n = {
                layer: "494762337",
                parameter: "enabled",
                disableExposureLog: F
            }, b[4] = F, b[5] = n) : n = b[5];
            let O = (0, l.x)(R ? X.b : null, n),
                H = R && O;
            if (null != L) {
                let e;
                return b[6] !== A || b[7] !== k || b[8] !== w || b[9] !== G || b[10] !== T || b[11] !== j || b[12] !== L.canNativeShare || b[13] !== L.experience || b[14] !== L.onNativeShare || b[15] !== L.rowScrollPositions || b[16] !== C || b[17] !== x || b[18] !== M || b[19] !== S || b[20] !== y ? (e = (0, i.jsx)(ex, {
                    copyLabel: w,
                    copyDisabled: k,
                    isBusy: T,
                    isDownloading: j,
                    socialDestinationsDisabled: y,
                    showSocialDestinations: S,
                    onCopy: C,
                    onDownload: x,
                    additionalActions: A,
                    onSocialShare: M,
                    experience: L.experience,
                    onNativeShare: L.onNativeShare,
                    canNativeShare: L.canNativeShare,
                    country: G,
                    rowScrollPositions: L.rowScrollPositions
                }), b[6] = A, b[7] = k, b[8] = w, b[9] = G, b[10] = T, b[11] = j, b[12] = L.canNativeShare, b[13] = L.experience, b[14] = L.onNativeShare, b[15] = L.rowScrollPositions, b[16] = C, b[17] = x, b[18] = M, b[19] = S, b[20] = y, b[21] = e) : e = b[21], e
            }
            b[22] !== D || b[23] !== j || b[24] !== x ? (r = null == x ? [] : [{
                id: "download",
                largeIcon: (0, i.jsx)(v.s, {
                    "aria-hidden": "true"
                }),
                disabled: j,
                icon: (0, i.jsx)(v.r, {}),
                label: D.formatMessage({
                    id: "chatgptConversations.shareDialog.destination.download.label",
                    defaultMessage: "Download",
                    description: "Short label below a circular button in the generated-image Share dialog. Saves the selected image, or all images in the selected series, to the user's device without creating a shared link."
                }),
                onClick: x
            }], b[22] = D, b[23] = j, b[24] = x, b[25] = r) : r = b[25];
            let W = r;
            b[26] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, i.jsx)(v.Ae, {
                "aria-hidden": "true"
            }), b[26] = o) : o = b[26], b[27] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, i.jsx)(v.ze, {}), b[27] = c) : c = b[27], b[28] !== k || b[29] !== w || b[30] !== C ? (h = {
                id: "copy",
                largeIcon: o,
                disabled: k,
                icon: c,
                label: w,
                onClick: C
            }, b[28] = k, b[29] = w, b[30] = C, b[31] = h) : h = b[31];
            let U = h;
            b[32] !== D || b[33] !== M || b[34] !== H || b[35] !== S || b[36] !== y ? (g = S ? [...H ? [function(e) {
                let {
                    disabled: a,
                    intl: t,
                    onSocialShare: s
                } = e, n = (0, i.jsx)("img", {
                    alt: "",
                    "aria-hidden": !0,
                    src: Q
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
                intl: D,
                onSocialShare: M
            })] : [], eM({
                destination: "x",
                disabled: y,
                intl: D,
                onSocialShare: M
            }), eM({
                destination: "linkedin",
                disabled: y,
                intl: D,
                onSocialShare: M
            }), ...H ? [] : [eM({
                destination: "reddit",
                disabled: y,
                intl: D,
                onSocialShare: M
            })]] : [], b[32] = D, b[33] = M, b[34] = H, b[35] = S, b[36] = y, b[37] = g) : g = b[37];
            let q = g;
            b[38] !== U || b[39] !== q || b[40] !== W ? (p = [U, ...q, ...W], b[38] = U, b[39] = q, b[40] = W, b[41] = p) : p = b[41];
            let z = p,
                B = null == A && "flex-wrap justify-center gap-x-6 gap-y-4",
                K = null != A && "gap-3",
                $ = null != A && P && "flex-wrap justify-center",
                J = null != A && !P && "justify-start overflow-x-auto sm:justify-center";
            return b[42] !== B || b[43] !== K || b[44] !== $ || b[45] !== J ? (u = (0, V.b)("flex w-full", B, K, $, J), b[42] = B, b[43] = K, b[44] = $, b[45] = J, b[46] = u) : u = b[46], b[47] !== z || b[48] !== T || b[49] !== j ? (m = z.map(e => {
                let {
                    id: a,
                    disabled: t,
                    icon: s,
                    largeIcon: n,
                    label: r,
                    onClick: o
                } = e, l = "copy" === a && T || "download" === a && j;
                return (0, i.jsx)(Y.a, {
                    extension: "download" === a,
                    children: (0, i.jsx)(eA, {
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
            }), b[47] = z, b[48] = T, b[49] = j, b[50] = m) : m = b[50], b[51] !== A || b[52] !== u || b[53] !== m ? (f = (0, i.jsxs)("div", {
                className: u,
                children: [m, A]
            }), b[51] = A, b[52] = u, b[53] = m, b[54] = f) : f = b[54], f
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
                    a = (0, i.jsx)(v.jj, {
                        "aria-hidden": "true"
                    }), t = (0, i.jsx)(v.kj, {
                        "aria-hidden": "true"
                    }), s = o.formatMessage({
                        id: "chatgptConversations.shareDialog.destination.x.label",
                        defaultMessage: "X",
                        description: "Short destination label below a circular button in a ChatGPT post sharing dialog for a conversation, response, or generated image. Selecting it opens X's post composer with the public post URL."
                    });
                    break;
                case "linkedin":
                    a = (0, i.jsx)($.a, {
                        "aria-hidden": "true"
                    }), t = (0, i.jsx)(v.Be, {
                        "aria-hidden": "true"
                    }), s = o.formatMessage({
                        id: "chatgptConversations.shareDialog.destination.linkedin.label",
                        defaultMessage: "LinkedIn",
                        description: "Short destination label below a circular button in a ChatGPT post sharing dialog for a conversation, response, or generated image. Selecting it opens LinkedIn's post composer with the public post URL."
                    });
                    break;
                case "reddit":
                    a = (0, i.jsx)(v.Sg, {
                        "aria-hidden": "true"
                    }), t = (0, i.jsx)(v.Tg, {
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
            }, o = [g, t], h[4] = g, h[5] = t, h[6] = r, h[7] = o) : (r = h[6], o = h[7]), (0, c.useEffect)(r, o), h[8] !== g || h[9] !== t || h[10] !== n ? (d = g ? (0, i.jsx)(ej, {
                ...n,
                onClose: t
            }) : null, h[8] = g, h[9] = t, h[10] = n, h[11] = d) : d = h[11], d
        }

        function ej(e) {
            let a, t, n = (0, s.c)(9);
            return n[0] !== e.publishedShareLink?.shareLinkId || n[1] !== e.publishedWidget || n[2] !== e.responseRegion || n[3] !== e.shareSessionId || n[4] !== e.widget ? (a = null == e.widget && null == e.publishedWidget && null == e.responseRegion ? void 0 : JSON.stringify([e.widget?.attachment, e.responseRegion?.attachment, e.publishedShareLink?.shareLinkId, e.shareSessionId]), n[0] = e.publishedShareLink?.shareLinkId, n[1] = e.publishedWidget, n[2] = e.responseRegion, n[3] = e.shareSessionId, n[4] = e.widget, n[5] = a) : a = n[5], n[6] !== e || n[7] !== a ? (t = (0, i.jsx)(eE, {
                ...e
            }, a), n[6] = e, n[7] = a, n[8] = t) : t = n[8], t
        }

        function eE(e) {
            let a, t, g, m, v, k, E, q, z, B, V, Y, $, Q, X, J, Z, ee, ea, et, ei, es, en, er, eo, el, ec, ed, eh, eg, ep, eu, em, ef, eb, ev, ew, ek, eT, e_, ey, eS, eC, ex, eA, eM, eL, ej, eE, eW = (0, s.c)(363),
                {
                    currentNodeId: eU,
                    image: eq,
                    imagePromptTemplate: ez,
                    imageShareOptions: eB,
                    recoveryShareLink: eK,
                    publishedShareLink: eV,
                    publishedWidget: eY,
                    messageIds: e$,
                    mobileImageExperience: eQ,
                    mobileImageRowScrollPositions: e2,
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
                ac = (0, l.y)(y.a),
                ad = (0, I.m)("3136899520"),
                [ah, ag] = (0, c.useState)(!1),
                ap = (0, l.z)(null)?.data,
                au = (0, l.z)(null),
                am = (0, l.x)(null, as),
                af = (0, d.a)(),
                ab = (0, c.useRef)(!1),
                av = (0, c.useRef)(!1);
            eW[0] !== e6 ? (a = () => (ab.current = !0, () => {
                ab.current = !1, queueMicrotask(() => {
                    ab.current || av.current || (av.current = !0, e6?.(!1))
                })
            }), t = [e6], eW[0] = e6, eW[1] = a, eW[2] = t) : (a = eW[1], t = eW[2]), (0, c.useEffect)(a, t), eW[3] !== e6 ? (g = function(e) {
                av.current || (av.current = !0, e6?.(e))
            }, eW[3] = e6, eW[4] = g) : g = eW[4];
            let aw = g;
            eW[5] !== aw || eW[6] !== e4 ? (m = function() {
                aw(!1), e4()
            }, eW[5] = aw, eW[6] = e4, eW[7] = m) : m = eW[7];
            let ak = m,
                aT = (0, c.useContext)(p.a);
            eW[8] !== eq || eW[9] !== ac || eW[10] !== as ? (v = null == eq ? void 0 : (0, H.a)(ac, as, eq), eW[8] = eq, eW[9] = ac, eW[10] = as, eW[11] = v) : v = eW[11];
            let a_ = v;
            eW[12] !== ez || eW[13] !== a_ || eW[14] !== eV || eW[15] !== aa || eW[16] !== eK || eW[17] !== ac.queryClient ? (k = () => aa ?? eV ?? eK ?? (null == a_ || null != ez ? null : ac.queryClient.getQueryData(a_.queryKey) ?? null), eW[12] = ez, eW[13] = a_, eW[14] = eV, eW[15] = aa, eW[16] = eK, eW[17] = ac.queryClient, eW[18] = k) : k = eW[18];
            let [ay, aS] = (0, c.useState)(k), [aC] = (0, c.useState)(eO), ax = an ?? aC, [aA, aI] = (0, c.useState)("message");
            eW[19] !== e$ || eW[20] !== e7 || eW[21] !== ai || eW[22] !== ad ? (E = null != e$ && null != ai && null != e7 && ad.get("message_share_scope_picker", !1), eW[19] = e$, eW[20] = e7, eW[21] = ai, eW[22] = ad, eW[23] = E) : E = eW[23];
            let aM = E,
                aL = aM && "conversation" === aA;
            eW[24] !== ax ? (q = ["expanded-conversation-share", ax], eW[24] = ax, eW[25] = q) : q = eW[25];
            let aj = q,
                aE = aL && null != e8;
            eW[26] !== e8 ? (z = e => {
                let {
                    signal: a
                } = e;
                if (null == e8) throw Error("Expanded conversation loader unavailable");
                return e8(a)
            }, eW[26] = e8, eW[27] = z) : z = eW[27], eW[28] !== aj || eW[29] !== z || eW[30] !== aE ? (B = {
                enabled: aE,
                queryKey: aj,
                queryFn: z,
                staleTime: 1 / 0,
                gcTime: 0,
                retry: !1
            }, eW[28] = aj, eW[29] = z, eW[30] = aE, eW[31] = B) : B = eW[31];
            let {
                data: aP,
                error: aD,
                isFetching: aN,
                refetch: aG
            } = (0, o.a)(B), [aR, aF] = (0, c.useState)("idle"), [aO, aH] = (0, c.useState)(null != eK ? "copy-failed" : null), [aW, aU] = (0, c.useState)(!1);
            eW[32] !== as ? (V = ["chatgpt-conversation-share", as], eW[32] = as, eW[33] = V) : V = eW[33];
            let aq = V,
                az = null == eK && null == aa && null == eV && null == ae && null == eq && (null == e$ || aL) && null == at && null == al;
            eW[34] !== eU || eW[35] !== as ? (Y = () => (0, D.i)({
                conversationId: as,
                currentNodeId: eU
            }), eW[34] = eU, eW[35] = as, eW[36] = Y) : Y = eW[36], eW[37] !== aq || eW[38] !== az || eW[39] !== Y ? ($ = {
                enabled: az,
                queryFn: Y,
                queryKey: aq,
                retry: !1,
                staleTime: j.b.ONE_MINUTE
            }, eW[37] = aq, eW[38] = az, eW[39] = Y, eW[40] = $) : $ = eW[40];
            let {
                data: aB,
                error: aK,
                isLoading: aV
            } = (0, o.a)($);
            eW[41] === Symbol.for("react.memo_cache_sentinel") ? (Q = {
                enabled: !1,
                queryFn: eF,
                queryKey: ["accounts", "check"],
                staleTime: j.b.ONE_MINUTE
            }, eW[41] = Q) : Q = eW[41];
            let {
                data: aY
            } = (0, o.a)(Q), a$ = null != eq, aQ = null != eQ && a$, aX = aQ || !0 === e3, aJ = null != aa, aZ = (eq?.additionalImages?.length ?? 0) > 0, a1 = eq?.item.isAnimated === !0 && !aZ;
            eW[42] !== eq || eW[43] !== as || eW[44] !== ax ? (X = (0, P.c)((0, F.c)(as), void 0, null != eq && null == eq.previewSrc ? ax : void 0), eW[42] = eq, eW[43] = as, eW[44] = ax, eW[45] = X) : X = eW[45];
            let {
                src: a0,
                isLoading: a2
            } = (0, M.k)(null != eq && (aZ || null == eq.previewSrc) ? eq.item.src ?? "" : "", X), a3 = null != eq && null == eq.previewSrc && null == a0, a5 = aZ ? "image_series" : "single_image", a4 = al ?? eY, a6 = null != e$ || null != at || null != a4 || aa?.contentType === "message", a7 = null != at, a8 = a4?.metadata.widgetType === "visualization", a9 = a4?.metadata.widgetName === "create_interactive_poll" || a4?.metadata.widgetName === "CreateInteractivePoll", te = null != ae || null != ez, ta = a$ || a6 || te, tt = !ta || aL, ti = ta || !0, ts = "conversation";
            if (a8 ? ts = "widget" : null != ez ? ts = "prompt" : a1 ? ts = "gif" : a$ ? ts = aZ ? "images" : "image" : a7 ? ts = "response-region" : a6 ? ts = aL ? "conversation" : "message" : te && (ts = "prompt"), null == ai) J = e9;
            else if (aL) J = aP?.privacyNotices ?? (null == e8 ? e9 : void 0);
            else {
                let e;
                eW[46] !== ai ? (e = (0, D.m)(ai), eW[46] = ai, eW[47] = e) : e = eW[47], J = e
            }
            let tn = a$ || (!ta || a6) && J?.hasImageReference === !0;
            eW[48] !== eq || eW[49] !== aZ || eW[50] !== ao ? (Z = (aZ ? void 0 : eq?.item.chatGptDisplayTitle) ?? (0, G.c)(ao), eW[48] = eq, eW[49] = aZ, eW[50] = ao, eW[51] = Z) : Z = eW[51];
            let tr = Z,
                to = tt && aB?.is_public === !0 && !0 === aB.is_visible,
                tl = aY?.accounts?.find(e => e.id === (aT?.accountId ?? aY.account_ordering?.[0])),
                tc = tl?.structure ?? aT?.accountStructureAtLogin,
                td = "unknown";
            ay?.isWorkspaceOnly != null ? td = ay.isWorkspaceOnly ? "workspace" : "public" : null == aB || a$ ? ("personal" === tc || "workspace" === tc) && (td = "workspace" === tc ? "workspace" : "public") : td = aB.share_url.includes("/share/e/") ? "workspace" : "public", eW[52] !== eq || eW[53] !== ez || eW[54] !== a_?.queryKey || eW[55] !== as ? (ee = null != ez ? ["chatgpt-image-prompt-share-preparation", as, eq?.item.id, ez.revision] : a_?.queryKey ?? ["disabled-chatgpt-image-share-query"], eW[52] = eq, eW[53] = ez, eW[54] = a_?.queryKey, eW[55] = as, eW[56] = ee) : ee = eW[56], eW[57] !== ez || eW[58] !== a_?.queryFn ? (ea = null != ez ? () => ez.createLink("native") : a_?.queryFn ?? eR, eW[57] = ez, eW[58] = a_?.queryFn, eW[59] = ea) : ea = eW[59];
            let th = aQ && (0, W.a)() && ez?.actionsDisabled !== !0 && (null != ez || null != a_) && "public" === td && null == ay;
            eW[60] !== ee || eW[61] !== ea || eW[62] !== th ? (et = {
                queryKey: ee,
                queryFn: ea,
                enabled: th,
                retry: !1,
                staleTime: 1 / 0
            }, eW[60] = ee, eW[61] = ea, eW[62] = th, eW[63] = et) : et = eW[63];
            let tg = (0, o.a)(et);
            tg.data?.isWorkspaceOnly != null && (td = tg.data.isWorkspaceOnly ? "workspace" : "public");
            let tp = ay ?? tg.data ?? null,
                tu = null == ez ? tp : null;
            eW[64] !== e5 || eW[65] !== tu ? (ei = () => {
                null != tu && e5?.(tu)
            }, es = [e5, tu], eW[64] = e5, eW[65] = tu, eW[66] = ei, eW[67] = es) : (ei = eW[66], es = eW[67]), (0, c.useEffect)(ei, es);
            let tm = tp?.shareLinkUrl ?? (to ? aB.share_url : null),
                tf = tt && null == tp && to && aB.current_node_id !== eU,
                tb = "workspace" === td,
                tv = "creating" === aR,
                tw = aL && null != e8 && null == aP,
                tk = tt && aV || tw && aN;
            eW[68] !== tp || eW[69] !== aO || eW[70] !== aD || eW[71] !== aK || eW[72] !== tg.error || eW[73] !== tw || eW[74] !== az ? (null == (en = aO) && tw && null != aD && (en = "conversation-load-failed"), null == en && az && null == tp && null != aK && (en = aK instanceof D.a ? "blocked" : "create-failed"), null == en && null == tp && null != tg.error && (en = tg.error instanceof D.a ? "blocked" : "create-failed"), eW[68] = tp, eW[69] = aO, eW[70] = aD, eW[71] = aK, eW[72] = tg.error, eW[73] = tw, eW[74] = az, eW[75] = en) : en = eW[75];
            let tT = e0.description,
                t_ = e0.publicLinkAudience;
            if (a8) {
                let e;
                eW[76] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    ...e0.widgetTitle
                }), eW[76] = e) : e = eW[76], er = e
            } else if (a1) {
                let e;
                eW[77] !== ez ? (e = null != ez ? (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.gifWithPromptTitle",
                    defaultMessage: "Share GIF with prompt",
                    description: "Heading of the generated GIF sharing dialog when GIF with prompt is selected. Shares the animated GIF and its reusable prompt. The other option is GIF only."
                }) : (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.gifTitle",
                    defaultMessage: "Share GIF",
                    description: "Heading of the dialog for sharing one generated animated GIF. Keep GIF as the file format name."
                }), eW[77] = ez, eW[78] = e) : e = eW[78], er = e
            } else if (null != ez) {
                let e;
                eW[79] !== ez.label ? (e = "image_with_prompt" === ez.label ? (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.imageWithPromptTitle",
                    defaultMessage: "Share image with prompt",
                    description: "Heading of the generated-image share dialog when Image with prompt is selected. Users share the generated image together with its reusable prompt so recipients can try the prompt. The other option is Image only."
                }) : (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.imagePromptTitle",
                    defaultMessage: "Share prompt with image",
                    description: "Short heading of the generated-image share dialog when Prompt with image is selected. Users share the generated image and its reusable prompt so recipients can try the prompt. The other option is Image only."
                }), eW[79] = ez.label, eW[80] = e) : e = eW[80], er = e
            } else if (a$) {
                let e;
                eW[81] !== tr || eW[82] !== eB || eW[83] !== aZ || eW[84] !== aQ ? (e = aQ || null == tr || null != eB ? (0, i.jsx)(h.a, {
                    ...aZ ? e0.imagesTitle : e0.imageTitle
                }) : (0, i.jsx)(i.Fragment, {
                    children: tr
                }), eW[81] = tr, eW[82] = eB, eW[83] = aZ, eW[84] = aQ, eW[85] = e) : e = eW[85], er = e
            } else if (a9) {
                let e;
                eW[86] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.poll.title",
                    defaultMessage: "Share poll",
                    description: "Short heading of the dialog for sharing one interactive poll. The user can create or send a link so other people can vote on the poll."
                }), eW[86] = e) : e = eW[86], er = e
            } else if (a7) {
                let e;
                eW[87] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.responseRegionTitle",
                    defaultMessage: "Share",
                    description: "Short heading of the dialog for sharing one selected section of an interactive ChatGPT response."
                }), eW[87] = e) : e = eW[87], er = e
            } else if (a6) {
                let e;
                eW[88] !== tr ? (e = null == tr ? (0, i.jsx)(h.a, {
                    ...e0.messageTitle
                }) : (0, i.jsx)(i.Fragment, {
                    children: tr
                }), eW[88] = tr, eW[89] = e) : e = eW[89], er = e
            } else if (te) {
                let e;
                eW[90] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    ...e0.promptTitle
                }), eW[90] = e) : e = eW[90], er = e
            } else {
                if (ti) {
                    let e;
                    eW[91] !== tr ? (e = null == tr ? void 0 : (0, i.jsx)(i.Fragment, {
                        children: tr
                    }), eW[91] = tr, eW[92] = e) : e = eW[92], er = e
                }
                tb ? tT = e9?.isProjectConversation ? e0.workspaceProjectDescription : e0.workspaceDescription : aB?.is_anonymous === !1 ? tT = e0.attributedDescription : e9?.isProjectConversation && (tT = e0.projectDescription)
            }
            tb && (t_ = tn ? e0.workspaceImageRightsAudience : e0.workspaceLinkAudience);
            let ty = "copied" === aR ? e0.copied : e0.copyLink;
            tf ? ty = e0.updateLink : null == tm && "copied" !== aR && (ty = e0.createLink), eW[93] !== af || eW[94] !== aR ? (eo = "copied" === aR ? af.formatMessage(e0.copied) : af.formatMessage(e0.copyLink), eW[93] = af, eW[94] = aR, eW[95] = eo) : eo = eW[95];
            let tS = eo;
            eW[96] !== aw || eW[97] !== af || eW[98] !== ac || eW[99] !== al ? (el = function(e, a) {
                let t;
                "create-failed" === a && (aw(!1), al?.onError?.(e));
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
                        t = af.formatMessage(e0.shareBlocked);
                        break;
                    case "copy-failed":
                        t = af.formatMessage(e0.shareCopyFailed);
                        break;
                    case "create-failed":
                        t = af.formatMessage(e0.shareCreateFailed)
                }
                return aH(i), aF("idle"), ac.get(T.f).danger(t, {
                    errorAnalytics: {
                        toastId: {
                            "copy-failed": "failed_to_copy_share_link",
                            "create-failed": "failed_to_generate_share_link",
                            blocked: "chatgptConversationShareDialog.shareBlocked"
                        } [i]
                    }
                }), i
            }, eW[96] = aw, eW[97] = af, eW[98] = ac, eW[99] = al, eW[100] = el) : el = eW[100];
            let tC = el;
            eW[101] !== a4 || eW[102] !== a$ || eW[103] !== a6 || eW[104] !== te || eW[105] !== aJ || eW[106] !== a7 || eW[107] !== aa || eW[108] !== aL || eW[109] !== ar ? (ec = aJ ? "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER" : "CHATGPT_SHARE_FLOW_ACTOR_SHARER", eh = aJ ? "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_HEADER" : ar ?? "CHATGPT_SHARE_FLOW_SOURCE_CONVERSATION_MENU", null != aa ? ed = aa.attachmentType : null != a4 ? (ed = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_WIDGET", eh = "CHATGPT_SHARE_FLOW_SOURCE_WIDGET_INLINE_ACTION") : a$ ? (ed = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_IMAGE_SHARE", eh = ar ?? "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION") : a7 ? (ed = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_OTHER", eh = "CHATGPT_SHARE_FLOW_SOURCE_WIDGET_INLINE_ACTION") : a6 ? (eh = "CHATGPT_SHARE_FLOW_SOURCE_MESSAGE_INLINE_ACTION", aL || (ed = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_MESSAGE_SLICE")) : te && (ed = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_PROMPT", eh = ar ?? "CHATGPT_SHARE_FLOW_SOURCE_MESSAGE_INLINE_ACTION"), eW[101] = a4, eW[102] = a$, eW[103] = a6, eW[104] = te, eW[105] = aJ, eW[106] = a7, eW[107] = aa, eW[108] = aL, eW[109] = ar, eW[110] = ec, eW[111] = ed, eW[112] = eh) : (ec = eW[110], ed = eW[111], eh = eW[112]);
            let tx = (aa?.contentType === "message" || ta) && !aL ? "CHATGPT_SHARE_FLOW_CONTENT_TYPE_POST_SLICE" : "CHATGPT_SHARE_FLOW_CONTENT_TYPE_SHARED_CONVERSATION";
            eW[113] !== tp || eW[114] !== eU || eW[115] !== to || eW[116] !== aB || eW[117] !== aw || eW[118] !== ez || eW[119] !== a_ || eW[120] !== tw || eW[121] !== tf || eW[122] !== e$ || eW[123] !== e5 || eW[124] !== ae || eW[125] !== at || eW[126] !== ac || eW[127] !== as || eW[128] !== aq || eW[129] !== aL || eW[130] !== ao || eW[131] !== tt || eW[132] !== al ? (eg = async function(e) {
                let a;
                if (null != al && (!ab.current || al.isCurrent?.() === !1)) throw Error("The selected widget is no longer available");
                if (null != at && (!ab.current || at.isCurrent?.() === !1)) throw Error("The selected response region is no longer available");
                if (tw) throw Error("Expanded conversation unavailable");
                let t = tp ?? (to ? {
                    currentNodeId: aB.current_node_id,
                    shareLinkId: aB.share_id,
                    shareLinkUrl: aB.share_url
                } : null);
                if (null == ez && null != t && !tf) return aw(!0), t;
                if (null != ez) a = await ez.createLink(e);
                else if (null != a_) a = await ac.queryClient.fetchQuery(a_), e5?.(a);
                else if (null != al) {
                    if (a = await (0, D.g)(al.attachment, eU), !ab.current || al.isCurrent?.() === !1) throw Error("The selected widget changed while sharing")
                } else if (null != at) {
                    if (a = await (0, D.f)({
                            conversationId: at.attachment.conversation_id,
                            currentNodeId: eU,
                            messageId: at.attachment.message_id,
                            targetId: at.attachment.target_id
                        }), !ab.current || at.isCurrent?.() === !1) throw Error("The selected response region changed while sharing")
                } else a = null == e$ || aL ? null != ae ? await ac.queryClient.fetchQuery({
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
                        messageIds: e$
                    }),
                    queryKey: ["chatgpt-message-share", ac.get(u.f), as, eU, e$],
                    staleTime: 1 / 0
                });
                return aS(a), aw(!0), null != aB && tt && ac.queryClient.setQueryData(aq, {
                    ...aB,
                    current_node_id: eU,
                    is_public: !0,
                    is_visible: !0
                }), a
            }, eW[113] = tp, eW[114] = eU, eW[115] = to, eW[116] = aB, eW[117] = aw, eW[118] = ez, eW[119] = a_, eW[120] = tw, eW[121] = tf, eW[122] = e$, eW[123] = e5, eW[124] = ae, eW[125] = at, eW[126] = ac, eW[127] = as, eW[128] = aq, eW[129] = aL, eW[130] = ao, eW[131] = tt, eW[132] = al, eW[133] = eg) : eg = eW[133];
            let tA = eg;
            eW[134] !== ec || eW[135] !== ed || eW[136] !== tx || eW[137] !== tp || eW[138] !== a4?.metadata || eW[139] !== tA || eW[140] !== to || eW[141] !== aB || eW[142] !== ez || eW[143] !== a3 || eW[144] !== aJ || eW[145] !== tf || eW[146] !== tv || eW[147] !== e4 || eW[148] !== tC || eW[149] !== ac || eW[150] !== as || eW[151] !== tm || eW[152] !== ax || eW[153] !== eh || eW[154] !== ti ? (ep = async function() {
                if (tv || a3 || ez?.actionsDisabled) return;
                let e = (0, R.a)(ac, {
                    actor: ec,
                    attachmentType: ed,
                    widgetMetadata: a4?.metadata,
                    contentType: tx,
                    conversationId: aJ ? void 0 : as,
                    shareId: tp?.shareLinkId ?? (to ? aB.share_id : void 0),
                    shareSessionId: ax,
                    source: eh,
                    usedExistingLink: null != tm && !tf
                });
                aH(null), aF("creating");
                let a = null != ez || null == tm || tf ? "create-failed" : "copy-failed",
                    t = tp;
                try {
                    let i, s = tA("copy"),
                        n = (0, C.c)(s.then(eG));
                    null != n && n.catch(eN);
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
                        }), tC(Error("Failed to copy ChatGPT conversation share link"), "copy-failed");
                        return
                    }
                    e({
                        result: "link-copied",
                        shareId: r.shareLinkId
                    }), aF("copied"), ti || ((0, S.a)(ac), e4())
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
            }, eW[134] = ec, eW[135] = ed, eW[136] = tx, eW[137] = tp, eW[138] = a4?.metadata, eW[139] = tA, eW[140] = to, eW[141] = aB, eW[142] = ez, eW[143] = a3, eW[144] = aJ, eW[145] = tf, eW[146] = tv, eW[147] = e4, eW[148] = tC, eW[149] = ac, eW[150] = as, eW[151] = tm, eW[152] = ax, eW[153] = eh, eW[154] = ti, eW[155] = ep) : ep = eW[155];
            let tI = ep;
            eW[156] !== ed || eW[157] !== tx || eW[158] !== tp || eW[159] !== ac || eW[160] !== as || eW[161] !== ax || eW[162] !== aX || eW[163] !== eh ? (eu = function(e) {
                (0, _.a)(ac, n.h, {
                    action: e,
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_SHARER",
                    attachmentType: ed,
                    contentType: tx,
                    conversationId: as,
                    ...aX && null != tp && !tp.isWorkspaceOnly ? {
                        shareId: tp.shareLinkId
                    } : {},
                    shareSessionId: ax,
                    source: eh,
                    sheetType: "CHATGPT_SHARE_FLOW_SHEET_TYPE_CUSTOM"
                })
            }, eW[156] = ed, eW[157] = tx, eW[158] = tp, eW[159] = ac, eW[160] = as, eW[161] = ax, eW[162] = aX, eW[163] = eh, eW[164] = eu) : eu = eW[164];
            let tM = eu;
            eW[165] !== tp || eW[166] !== en || eW[167] !== aw || eW[168] !== a_ || eW[169] !== af || eW[170] !== tv || eW[171] !== e4 || eW[172] !== tC || eW[173] !== ac || eW[174] !== as || eW[175] !== td || eW[176] !== ax || eW[177] !== eh ? (em = async function() {
                if (!tv && null != a_ && "public" === td && null != tp && "blocked" !== en) {
                    aH(null), aF("creating");
                    try {
                        let e = await (0, W.b)(ac, tp, as, ax, eh);
                        aF("idle"), "shared" === e && (aw(!0), e4()), "failed" === e && ac.get(T.f).danger(af.formatMessage({
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
            }, eW[165] = tp, eW[166] = en, eW[167] = aw, eW[168] = a_, eW[169] = af, eW[170] = tv, eW[171] = e4, eW[172] = tC, eW[173] = ac, eW[174] = as, eW[175] = td, eW[176] = ax, eW[177] = eh, eW[178] = em) : em = eW[178];
            let tL = em;
            eW[179] !== ec || eW[180] !== ed || eW[181] !== tx || eW[182] !== tp || eW[183] !== tr || eW[184] !== a4?.metadata || eW[185] !== tA || eW[186] !== to || eW[187] !== aB || eW[188] !== ez || eW[189] !== a5 || eW[190] !== af || eW[191] !== a$ || eW[192] !== a3 || eW[193] !== te || eW[194] !== aJ || eW[195] !== tf || eW[196] !== tv || eW[197] !== eQ?.unsupportedDestinationFallback || eW[198] !== e4 || eW[199] !== tC || eW[200] !== ac || eW[201] !== as || eW[202] !== td || eW[203] !== aR || eW[204] !== ax || eW[205] !== aX || eW[206] !== eh || eW[207] !== aQ ? (ef = async function(e, a) {
                var t;
                let i;
                if (tv || a3 || "public" !== td || ez?.actionsDisabled) return;
                a.preventDefault(), aJ || te || "line" !== (t = e) && "linkedin" !== t && "reddit" !== t && "x" !== t || (0, R.f)(ac, e, a$ ? a5 : void 0);
                let s = aX && a$ ? as : void 0;
                (0, R.e)(ac, {
                    actor: ec,
                    attachmentType: ed,
                    conversationId: s,
                    widgetMetadata: a4?.metadata,
                    contentType: tx,
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
                    shareSessionId: ax,
                    source: eh
                });
                let n = aQ && (0, K.g)(e);
                if (n && eQ?.unsupportedDestinationFallback === "app-store") {
                    let t = (0, r.a)() ? "android" : (0, r.c)() || (0, r.b)() ? "ios" : null,
                        i = null == t ? null : (0, K.c)(e, t);
                    if (null != i) return void(0, b.e)({
                        event: a,
                        href: i,
                        initiator: "open_in_browser_bridge",
                        openTarget: "external-browser"
                    })
                }
                let o = null != tp && null == ez || "messages" === e || n ? null : window.open("", "_blank");
                null != o && (o.opener = null), aH(null), aF("creating");
                try {
                    i = await tA("social")
                } catch (e) {
                    o?.close(), e instanceof D.a || (0, R.d)(ac, {
                        actor: ec,
                        attachmentType: ed,
                        conversationId: s,
                        widgetMetadata: a4?.metadata,
                        contentType: tx,
                        shareSessionId: ax,
                        source: eh
                    }), tC(e, "create-failed");
                    return
                }
                if (!0 === i.isWorkspaceOnly) {
                    o?.close(), aF(aR);
                    return
                }
                if (n) {
                    let e = await (0, W.b)(ac, i, as, ax, eh);
                    aF(aR), "shared" === e ? e4() : "failed" === e && ac.get(T.f).danger(af.formatMessage({
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
            }, eW[179] = ec, eW[180] = ed, eW[181] = tx, eW[182] = tp, eW[183] = tr, eW[184] = a4?.metadata, eW[185] = tA, eW[186] = to, eW[187] = aB, eW[188] = ez, eW[189] = a5, eW[190] = af, eW[191] = a$, eW[192] = a3, eW[193] = te, eW[194] = aJ, eW[195] = tf, eW[196] = tv, eW[197] = eQ?.unsupportedDestinationFallback, eW[198] = e4, eW[199] = tC, eW[200] = ac, eW[201] = as, eW[202] = td, eW[203] = aR, eW[204] = ax, eW[205] = aX, eW[206] = eh, eW[207] = aQ, eW[208] = ef) : ef = eW[208];
            let tj = ef;
            eW[209] !== eq || eW[210] !== a5 || eW[211] !== af || eW[212] !== aW || eW[213] !== aZ || eW[214] !== a3 || eW[215] !== tM || eW[216] !== ac || eW[217] !== as ? (eb = async function() {
                if (null == eq || aW || a3) return;
                (0, R.f)(ac, "download", a5);
                let e = [eq.item, ...eq.additionalImages ?? []].filter(eD);
                0 !== e.length && ((0, U.b)(ac, {
                    image: eq.downloadAnalyticsImage ?? eq.item,
                    conversationId: as,
                    entryPoint: "CHATGPT_IMAGE_DOWNLOAD_ENTRY_POINT_CUSTOM_SHARE_SHEET",
                    downloadScope: aZ ? "CHATGPT_IMAGE_DOWNLOAD_SCOPE_SERIES" : "CHATGPT_IMAGE_DOWNLOAD_SCOPE_SINGLE",
                    requestedImageCount: e.length,
                    isParagen: eq.downloadIsParagen
                }), aU(!0), tM("CHATGPT_SHARE_FLOW_ACTION_DOWNLOAD_SELECTED"), await (0, O.a)(ac, {
                    images: e,
                    intl: af,
                    serverConversationId: (0, F.c)(as),
                    logIndividualDownloads: !1
                }).then(e => {
                    "downloaded" === e && (0, U.e)(ac, as, eq.item)
                }).finally(() => {
                    aU(!1)
                }))
            }, eW[209] = eq, eW[210] = a5, eW[211] = af, eW[212] = aW, eW[213] = aZ, eW[214] = a3, eW[215] = tM, eW[216] = ac, eW[217] = as, eW[218] = eb) : eb = eW[218];
            let tE = eb;
            eW[219] !== eq?.additionalImages?.length || eW[220] !== aZ ? (ev = aZ ? (0, i.jsx)(h.a, {
                id: "chatgptConversations.shareDialog.imageSeriesCount",
                defaultMessage: "Sharing {imageCount} images together",
                description: "Subtitle beneath the generated-image share modal title after choosing to share a series. imageCount is the number of images included in the link, always greater than one. This informs the user that all listed images are shared together.",
                values: {
                    imageCount: 1 + (eq?.additionalImages?.length ?? 0)
                }
            }) : void 0, eW[219] = eq?.additionalImages?.length, eW[220] = aZ, eW[221] = ev) : ev = eW[221];
            let tP = ev,
                tD = tP;
            if (!aZ && !ti) {
                let e;
                eW[222] !== tT ? (e = (0, i.jsx)(h.a, {
                    ...tT
                }), eW[222] = tT, eW[223] = e) : e = eW[223], tD = e
            }
            if (null != ez) {
                let e;
                eW[224] !== aQ ? (e = aQ ? (0, i.jsx)(h.a, {
                    id: "imagePromptShare.audience",
                    defaultMessage: "Anyone with the link can try this prompt",
                    description: "Audience description when sharing a generated image as a reusable prompt template"
                }) : void 0, eW[224] = aQ, eW[225] = e) : e = eW[225], tD = e
            } else if (aQ) {
                let e, a, t;
                eW[226] !== td ? (e = "public" === td ? (0, i.jsx)(h.a, {
                    id: "chatgptConversations.mobileImageShare.publicAudience",
                    defaultMessage: "Anyone with the link can view",
                    description: "Audience disclosure in the mobile generated-image share sheet for a public link"
                }) : null, eW[226] = td, eW[227] = e) : e = eW[227], eW[228] !== td ? (a = "public" !== td && (0, i.jsx)(h.a, {
                    id: "chatgptConversations.mobileImageShare.workspaceAudience",
                    defaultMessage: "Only workspace members with the link can view",
                    description: "Audience disclosure below Share image in the mobile image share sheet for a workspace account"
                }), eW[228] = td, eW[229] = a) : a = eW[229], eW[230] !== e || eW[231] !== a ? (t = (0, i.jsxs)(i.Fragment, {
                    children: [e, a]
                }), eW[230] = e, eW[231] = a, eW[232] = t) : t = eW[232], tD = t
            }
            if (aQ ? ew = "responsiveSheet" : ti && (ew = "share"), aQ && (ek = eQ?.layout === "two-rows" ? "imageSheetTwoRows" : "imageSheet"), null != ez) {
                let e;
                if (eW[233] !== eq?.previewSrc || eW[234] !== ez || eW[235] !== tv || eW[236] !== a0) {
                    let a;
                    eW[238] === Symbol.for("react.memo_cache_sentinel") ? (a = () => {
                        aH(null), aF("idle")
                    }, eW[238] = a) : a = eW[238], e = ez.preview(tv, eq?.previewSrc ?? a0 ?? null, a), eW[233] = eq?.previewSrc, eW[234] = ez, eW[235] = tv, eW[236] = a0, eW[237] = e
                } else e = eW[237];
                eT = e
            } else {
                let e;
                eW[239] !== a4 || eW[240] !== aP || eW[241] !== aj || eW[242] !== eq || eW[243] !== ek || eW[244] !== af || eW[245] !== a2 || eW[246] !== aZ || eW[247] !== a8 || eW[248] !== e8 || eW[249] !== e7 || eW[250] !== ae || eW[251] !== a0 || eW[252] !== ai || eW[253] !== at || eW[254] !== ac.queryClient || eW[255] !== as || eW[256] !== ax || eW[257] !== aL || eW[258] !== aQ ? (e = null != eq ? (0, i.jsx)(A.a, {
                    ariaLabel: aZ ? af.formatMessage(e0.imagesPreview) : eq.alt,
                    expandedContent: (0, i.jsxs)("div", {
                        className: "flex flex-col gap-4",
                        children: [(0, i.jsx)(eJ, {
                            src: aZ ? a0 : eq.previewSrc ?? a0,
                            isLoading: a2,
                            alt: eq.alt
                        }), eq.additionalPublishedPreviewUrls?.map(eP), eq.additionalImages?.map(e => (0, i.jsx)(eX, {
                            item: e,
                            serverConversationId: as
                        }, e.id))]
                    }),
                    variant: "image",
                    classicImagePreviewEligible: !aZ && !aQ,
                    presentation: ek,
                    children: aZ || null == eq.previewSrc ? (0, i.jsx)(eJ, {
                        src: a0,
                        isLoading: a2
                    }) : (0, i.jsx)("img", {
                        alt: eq.alt,
                        className: aQ ? void 0 : "block size-full object-contain",
                        referrerPolicy: "no-referrer",
                        src: eq.previewSrc
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
                        response: aL ? void 0 : ai,
                        serverConversationId: as,
                        expandedHistory: (null == ai || aL) && null != e8 && null == aP ? {
                            load: async e => (await ac.queryClient.fetchQuery({
                                queryKey: aj,
                                queryFn: () => e8(e),
                                staleTime: 1 / 0
                            })).turns,
                            sessionId: ax
                        } : void 0,
                        turns: null == ai || aL ? aP?.turns ?? e7 : void 0
                    })]
                }), eW[239] = a4, eW[240] = aP, eW[241] = aj, eW[242] = eq, eW[243] = ek, eW[244] = af, eW[245] = a2, eW[246] = aZ, eW[247] = a8, eW[248] = e8, eW[249] = e7, eW[250] = ae, eW[251] = a0, eW[252] = ai, eW[253] = at, eW[254] = ac.queryClient, eW[255] = as, eW[256] = ax, eW[257] = aL, eW[258] = aQ, eW[259] = e) : e = eW[259], eT = e
            }
            if (aQ) {
                let e, a, t;
                eW[260] !== ez || eW[261] !== eT ? (e = null == ez ? eT : (0, i.jsx)("div", {
                    className: "px-6",
                    children: eT
                }), eW[260] = ez, eW[261] = eT, eW[262] = e) : e = eW[262], eW[263] !== tP ? (a = null != tP && (0, i.jsx)("p", {
                    className: "mt-3 text-center text-sm text-secondary",
                    children: tP
                }), eW[263] = tP, eW[264] = a) : a = eW[264], eW[265] !== e || eW[266] !== a ? (t = (0, i.jsxs)(i.Fragment, {
                    children: [e, a]
                }), eW[265] = e, eW[266] = a, eW[267] = t) : t = eW[267], eT = t
            }
            eW[268] !== t_ || eW[269] !== ti ? (e_ = ti ? void 0 : (0, i.jsx)(h.a, {
                ...t_
            }), eW[268] = t_, eW[269] = ti, eW[270] = e_) : e_ = eW[270], eW[271] !== ty ? (ey = (0, i.jsx)(h.a, {
                ...ty
            }), eW[271] = ty, eW[272] = ey) : ey = eW[272];
            let tN = ez?.actionsDisabled || tk || tw || a3 || "blocked" === en,
                tG = tv || tk || ah,
                tR = !ti && tv;
            eW[273] !== tM || eW[274] !== aX || eW[275] !== ti ? (eS = ti ? e => {
                aX && tM("CHATGPT_SHARE_FLOW_ACTION_SHEET_PRESENTED"), e.preventDefault(), e.currentTarget instanceof HTMLElement && e.currentTarget.focus()
            } : void 0, eW[273] = tM, eW[274] = aX, eW[275] = ti, eW[276] = eS) : eS = eW[276];
            let tF = aQ ? "imageSheet" : void 0,
                tO = aQ && eQ?.layout === "two-rows";
            eW[277] !== am || eW[278] !== ap || eW[279] !== au || eW[280] !== tp || eW[281] !== eU || eW[282] !== en || eW[283] !== tE || eW[284] !== tL || eW[285] !== tj || eW[286] !== eq || eW[287] !== ez?.actionsDisabled || eW[288] !== a5 || eW[289] !== aW || eW[290] !== tw || eW[291] !== tk || eW[292] !== a$ || eW[293] !== a3 || eW[294] !== ah || eW[295] !== te || eW[296] !== aJ || eW[297] !== tv || eW[298] !== e$ || eW[299] !== eQ || eW[300] !== e2 || eW[301] !== e4 || eW[302] !== ae || eW[303] !== aa || eW[304] !== tS || eW[305] !== a0 || eW[306] !== ac || eW[307] !== as || eW[308] !== td || eW[309] !== aL || eW[310] !== tt || eW[311] !== aQ || eW[312] !== ti || eW[313] !== al ? (eC = ti ? (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(eI, {
                    mobileImageActions: aQ && null != eQ ? {
                        experience: eQ,
                        canNativeShare: "public" === td && null != tp && (0, W.a)(tp?.shareLinkUrl),
                        onNativeShare: () => {
                            tL()
                        },
                        rowScrollPositions: e2
                    } : void 0,
                    copyLabel: tS,
                    copyDisabled: ez?.actionsDisabled || tk || tw || tv || a3 || "blocked" === en,
                    isBusy: tv || tk || ah,
                    isDownloading: aW,
                    socialDestinationsDisabled: ez?.actionsDisabled || tk || tw || tv || a3 || "public" !== td || "blocked" === en,
                    showSocialDestinations: "public" === td,
                    additionalActions: void 0,
                    onDownload: null == eq || a3 ? void 0 : () => {
                        tE()
                    },
                    onCopy: () => {
                        aJ || te || (0, R.f)(ac, "copy", a$ ? a5 : void 0)
                    },
                    onSocialShare: (e, a) => {
                        tj(e, a)
                    }
                })
            }) : void 0, eW[277] = am, eW[278] = ap, eW[279] = au, eW[280] = tp, eW[281] = eU, eW[282] = en, eW[283] = tE, eW[284] = tL, eW[285] = tj, eW[286] = eq, eW[287] = ez?.actionsDisabled, eW[288] = a5, eW[289] = aW, eW[290] = tw, eW[291] = tk, eW[292] = a$, eW[293] = a3, eW[294] = ah, eW[295] = te, eW[296] = aJ, eW[297] = tv, eW[298] = e$, eW[299] = eQ, eW[300] = e2, eW[301] = e4, eW[302] = ae, eW[303] = aa, eW[304] = tS, eW[305] = a0, eW[306] = ac, eW[307] = as, eW[308] = td, eW[309] = aL, eW[310] = tt, eW[311] = aQ, eW[312] = ti, eW[313] = al, eW[314] = eC) : eC = eW[314], eW[315] !== aM || eW[316] !== eB || eW[317] !== af || eW[318] !== tk || eW[319] !== a9 || eW[320] !== tv || eW[321] !== aA || eW[322] !== ts || eW[323] !== td || eW[324] !== tn || eW[325] !== aQ || eW[326] !== ti ? (ex = ti ? (0, i.jsxs)(i.Fragment, {
                children: [aM && (0, i.jsx)(f.e, {
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
                                e !== aA && (aI(e), aS(null), aH(null), aF("idle"))
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
                }), null != eB && (aQ ? (0, i.jsx)("div", {
                    className: "px-6 pt-3",
                    children: eB(tv)
                }) : (0, i.jsx)(f.e, {
                    className: "pt-5",
                    children: eB(tv)
                })), !aQ && (0, i.jsx)(eH, {
                    audience: td,
                    contentType: ts,
                    isPoll: a9,
                    showImageRightsNotice: tn
                })]
            }) : void 0, eW[315] = aM, eW[316] = eB, eW[317] = af, eW[318] = tk, eW[319] = a9, eW[320] = tv, eW[321] = aA, eW[322] = ts, eW[323] = td, eW[324] = tn, eW[325] = aQ, eW[326] = ti, eW[327] = ex) : ex = eW[327], eW[328] !== en || eW[329] !== ez || eW[330] !== aG || eW[331] !== tm ? (eA = null == en ? void 0 : {
                content: (0, i.jsx)(e1, {
                    error: en
                }),
                copyUrl: "copy-failed" === en ? tm : void 0,
                onRetry: "conversation-load-failed" === en ? () => {
                    aG()
                } : void 0,
                preventsSharing: "blocked" === en && null == ez || "conversation-load-failed" === en
            }, eW[328] = en, eW[329] = ez, eW[330] = aG, eW[331] = tm, eW[332] = eA) : eA = eW[332];
            let tH = tn && !tb && !a$,
                tW = !ta || a6;
            return eW[333] !== J || eW[334] !== tH || eW[335] !== tW ? (eM = (0, i.jsx)(eZ, {
                showImageRightsNotice: tH,
                showContentNotices: tW,
                privacyNotices: J
            }), eW[333] = J, eW[334] = tH, eW[335] = tW, eW[336] = eM) : eM = eW[336], eW[337] !== ak || eW[338] !== tM || eW[339] !== aX ? (eL = () => {
                aX && tM("CHATGPT_SHARE_FLOW_ACTION_DISMISSED"), ak()
            }, eW[337] = ak, eW[338] = tM, eW[339] = aX, eW[340] = eL) : eL = eW[340], eW[341] !== tI ? (ej = () => {
                tI()
            }, eW[341] = tI, eW[342] = ej) : ej = eW[342], eW[343] !== ew || eW[344] !== er || eW[345] !== tr || eW[346] !== eT || eW[347] !== tD || eW[348] !== e_ || eW[349] !== ey || eW[350] !== tN || eW[351] !== tG || eW[352] !== tR || eW[353] !== eS || eW[354] !== tF || eW[355] !== tO || eW[356] !== eC || eW[357] !== ex || eW[358] !== eA || eW[359] !== eM || eW[360] !== eL || eW[361] !== ej ? (eE = (0, i.jsx)(x.a, {
                threadTitle: tr,
                title: er,
                subtitle: tD,
                audience: e_,
                actionLabel: ey,
                actionDisabled: tN,
                isBusy: tG,
                isDismissalDisabled: tR,
                onOpenAutoFocus: eS,
                size: ew,
                presentation: tF,
                compactImageSheetFooter: tO,
                footer: eC,
                preview: eT,
                info: ex,
                error: eA,
                notices: eM,
                onClose: eL,
                onSubmit: ej
            }), eW[343] = ew, eW[344] = er, eW[345] = tr, eW[346] = eT, eW[347] = tD, eW[348] = e_, eW[349] = ey, eW[350] = tN, eW[351] = tG, eW[352] = tR, eW[353] = eS, eW[354] = tF, eW[355] = tO, eW[356] = eC, eW[357] = ex, eW[358] = eA, eW[359] = eM, eW[360] = eL, eW[361] = ej, eW[362] = eE) : eE = eW[362], eE
        }

        function eP(e) {
            return (0, i.jsx)(eJ, {
                src: e,
                isLoading: !1
            }, e)
        }

        function eD(e) {
            return null != e.src && "completed" === e.status && !e.isPreview
        }

        function eN() {}

        function eG(e) {
            let {
                shareLinkUrl: a
            } = e;
            return a
        }
        async function eR() {
            throw Error("Image share is unavailable")
        }

        function eF() {
            return E.CodexRequest.safeGet("/wham/accounts/check")
        }

        function eO() {
            return crypto.randomUUID()
        }

        function eH(e) {
            let a, t, n, r, o, l, c, d = (0, s.c)(58),
                {
                    audience: g,
                    contentType: p,
                    isPoll: u,
                    showImageRightsNotice: m
                } = e,
                b = "workspace" === g ? v.Ke : v.Rd;
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
                            learnMore: eQ
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
                        ...e0.workspaceLinksVisibleWithLearnMore,
                        values: {
                            learnMore: eY
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
                        ...e0.shareLinkToWidget
                    }), d[6] = e) : e = d[6], a = e
                } else if ("images" === p) {
                    let e;
                    d[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e0.shareLinkToImages
                    }), d[7] = e) : e = d[7], a = e
                } else if ("gif" === p) {
                    let e;
                    d[8] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e0.shareLinkToGif
                    }), d[8] = e) : e = d[8], a = e
                } else if ("image" === p) {
                    let e;
                    d[9] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e0.shareLinkToImage
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
                        ...e0.shareLinkToMessage
                    }), d[11] = e) : e = d[11], a = e
                } else if ("prompt" === p) {
                    let e;
                    d[12] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e0.shareLinkToPrompt
                    }), d[12] = e) : e = d[12], a = e
                } else {
                    let e;
                    d[13] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e0.shareLinkToConversation
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
                        ...e0.imageLicenseDisclaimer
                    }), d[16] = e) : e = d[16], t = e
                }
                if ("widget" === p) {
                    let e;
                    d[17] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e0.shareLinkToWidget
                    }), d[17] = e) : e = d[17], a = e
                } else if ("images" === p) {
                    let e;
                    d[18] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e0.shareLinkToImages
                    }), d[18] = e) : e = d[18], a = e
                } else if ("gif" === p) {
                    let e;
                    d[19] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e0.shareLinkToGif
                    }), d[19] = e) : e = d[19], a = e
                } else if ("image" === p) {
                    let e;
                    d[20] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e0.shareLinkToImage
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
                        ...e0.shareLinkToMessage
                    }), d[22] = e) : e = d[22], a = e
                } else if ("prompt" === p) {
                    let e;
                    d[23] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e0.shareLinkToPrompt
                    }), d[23] = e) : e = d[23], a = e
                } else {
                    let e;
                    d[24] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e0.shareLinkToConversation
                    }), d[24] = e) : e = d[24], a = e
                }
            } else if ("widget" === p) {
                let e, s;
                d[25] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    ...e0.sharePublicLinkToWidget
                }), d[25] = e) : e = d[25], a = e, d[26] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(h.a, {
                            id: "chatgptConversations.widgetShare.publicAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access this widget. <learnMore>Learn more</learnMore>",
                            description: "Audience explanation when sharing a generated Recharts widget. The learnMore tag links to shared-links help in merged web.",
                            values: {
                                learnMore: eV
                            }
                        })
                    }), null]
                }), d[26] = s) : s = d[26], t = s
            } else if ("images" === p) {
                let e, s;
                d[27] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    ...e0.sharePublicLinkToImages
                }), d[27] = e) : e = d[27], a = e, d[28] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(h.a, {
                            id: "chatgptConversations.shareDialog.imagesPublicLinkAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access these images. Confirm you have the rights to share these images. <learnMore>Learn more</learnMore>",
                            description: "Audience and legal-permission reminder when sharing all images from one generation. Anyone with the link can view the images; the user must have permission to share them. The learnMore tag links to shared-links help in merged web. All sentences appear in one paragraph.",
                            values: {
                                learnMore: eK
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
                        learnMore: eB
                    }
                }), d[30] = s) : s = d[30], t = s
            } else if ("image" === p) {
                let e, s;
                d[31] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    ...e0.sharePublicLinkToImage
                }), d[31] = e) : e = d[31], a = e, d[32] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(h.a, {
                            id: "chatgptConversations.shareDialog.imagePublicLinkAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access this image. Confirm you have the rights to share this image. <learnMore>Learn more</learnMore>",
                            description: "Audience and legal-permission reminder when sharing an image. Anyone with the link can view the image; the user must have permission to share it. The learnMore tag links to shared-links help in merged web. All sentences appear in one paragraph.",
                            values: {
                                learnMore: ez
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
                    ...e0.sharePublicLinkToMessage
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
                                learnMore: eU
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
                                learnMore: eW
                            }
                        })
                    }), null]
                }), d[40] = s) : s = d[40], t = s
            } else {
                let e, s;
                d[41] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    ...e0.sharePublicLinkToConversation
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

        function eW(e) {
            return (0, i.jsx)(B, {
                children: e
            })
        }

        function eU(e) {
            return (0, i.jsx)(B, {
                children: e
            })
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
            }, "learn-more")
        }

        function eY(e) {
            return (0, i.jsx)(B, {
                children: e
            })
        }

        function e$(e) {
            return (0, i.jsx)(B, {
                children: e
            })
        }

        function eQ(e) {
            return (0, i.jsx)(B, {
                children: e
            })
        }

        function eX(e) {
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
            return n[2] !== c || n[3] !== l ? (t = (0, i.jsx)(eJ, {
                src: l,
                isLoading: c
            }), n[2] = c, n[3] = l, n[4] = t) : t = n[4], t
        }

        function eJ(e) {
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
                    ...e0.imageUnavailable
                })
            }), t[3] = o, t[4] = a) : a = t[4], a
        }

        function eZ(e) {
            let a, t, n, r, o, l = (0, s.c)(16),
                {
                    showImageRightsNotice: c,
                    showContentNotices: d,
                    privacyNotices: g
                } = e;
            return l[0] !== g?.hasUnsupportedCodeInterpreterContent || l[1] !== d ? (a = d && g?.hasUnsupportedCodeInterpreterContent ? (0, i.jsx)(f.e, {
                children: (0, i.jsx)(m.a, {
                    content: (0, i.jsx)(h.a, {
                        ...e0.filesNotShared
                    }),
                    variant: "privacyNotice"
                })
            }) : null, l[0] = g?.hasUnsupportedCodeInterpreterContent, l[1] = d, l[2] = a) : a = l[2], l[3] !== g?.hasPersonalizedSources || l[4] !== d ? (t = d && g?.hasPersonalizedSources ? (0, i.jsx)(f.e, {
                children: (0, i.jsx)(m.a, {
                    content: (0, i.jsx)(h.a, {
                        ...e0.personalizedSourcesPrivate
                    }),
                    variant: "privacyNotice"
                })
            }) : null, l[3] = g?.hasPersonalizedSources, l[4] = d, l[5] = t) : t = l[5], l[6] !== g?.hasScreenshotReference || l[7] !== d ? (n = d && g?.hasScreenshotReference ? (0, i.jsx)(f.e, {
                children: (0, i.jsx)(m.a, {
                    content: (0, i.jsx)(h.a, {
                        ...e0.screenshotDisclaimer
                    }),
                    variant: "privacyNotice"
                })
            }) : null, l[6] = g?.hasScreenshotReference, l[7] = d, l[8] = n) : n = l[8], l[9] !== c ? (r = c ? (0, i.jsx)(f.e, {
                children: (0, i.jsx)("p", {
                    className: "text-sm text-secondary select-none",
                    children: (0, i.jsx)(h.a, {
                        ...e0.imageLicenseDisclaimer
                    })
                })
            }) : null, l[9] = c, l[10] = r) : r = l[10], l[11] !== a || l[12] !== t || l[13] !== n || l[14] !== r ? (o = (0, i.jsxs)(i.Fragment, {
                children: [a, t, n, r]
            }), l[11] = a, l[12] = t, l[13] = n, l[14] = r, l[15] = o) : o = l[15], o
        }

        function e1(e) {
            let a = (0, s.c)(4),
                {
                    error: t
                } = e;
            switch (t) {
                case "blocked": {
                    let e;
                    return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e0.shareBlocked
                    }), a[0] = e) : e = a[0], e
                }
                case "conversation-load-failed": {
                    let e;
                    return a[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e0.shareConversationLoadFailed
                    }), a[1] = e) : e = a[1], e
                }
                case "copy-failed": {
                    let e;
                    return a[2] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e0.shareCopyFailed
                    }), a[2] = e) : e = a[2], e
                }
                case "create-failed": {
                    let e;
                    return a[3] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e0.shareCreateFailed
                    }), a[3] = e) : e = a[3], e
                }
            }
        }
        let e0 = (0, g.f)({
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
            o = t("taWv"),
            l = t("rfhJ");
        t.d(a, {}, {
            a: async function(e, a) {
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
                            suggestedFilename: t.length > 1 ? v.replace(/\.[^.]+$/, `-${a+1}.${b}`) : v
                        })) {
                        if (!w) return "cancelled";
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
                    return (0, s.a)(e, i.h, {
                        ...c,
                        action: "CHATGPT_SHARE_FLOW_ACTION_SYSTEM_SHEET_OPENED"
                    }), await a, (0, s.a)(e, i.h, {
                        ...c,
                        action: "CHATGPT_SHARE_FLOW_ACTION_SYSTEM_SHARE_COMPLETED"
                    }), "shared"
                } catch (t) {
                    let a = "object" == typeof t && null != t && "name" in t && "AbortError" === t.name;
                    return (0, s.a)(e, i.h, {
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
    sX4C: (function(e, a, t) {
        t.d(a, {
            a: () => p
        });
        var i = t("ABep"),
            s = t("QosV"),
            n = t("on57"),
            r = t("Wf1j"),
            o = t("Sm6l"),
            l = t("JNtf"),
            c = t("mUDD"),
            d = t("HOLv"),
            h = t("CsDP"),
            g = t("gTbk");

        function p(e) {
            let a, t, p, u, m, f, b, v, w = (0, s.c)(44),
                {
                    children: k,
                    headerContent: T,
                    headerActions: _,
                    footer: y,
                    collapseEmptyContent: S,
                    compactImageSheetFooter: C,
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
                R = void 0 !== S && S,
                F = void 0 !== C && C,
                O = void 0 !== x && x,
                H = (0, r.a)(),
                W = "imageSheet" === G;
            w[0] !== F || w[1] !== _ || w[2] !== H || w[3] !== O || w[4] !== W || w[5] !== M || w[6] !== A || w[7] !== I ? (a = W ? (0, i.jsxs)("div", {
                className: (0, n.b)("shrink-0", "imageSheetHeader-vPz2gu", F && "imageSheetTwoRowsHeader-udlzI8"),
                children: [(0, i.jsx)(l.d, {
                    className: "imageSheetTitle-iMmEfF",
                    children: I
                }), null != A && (0, i.jsx)(l.c, {
                    className: "imageSheetSubtitle-E3o3_v",
                    children: A
                }), !O && (0, i.jsx)(o.a, {
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
                    children: (0, i.jsx)(d.a, {
                        asset: g.a
                    })
                })]
            }) : (0, i.jsxs)("div", {
                className: "mb-2 flex items-center gap-2 pe-8",
                children: [(0, i.jsx)(c.d, {
                    className: "min-w-0 flex-1",
                    title: (0, i.jsx)(l.d, {
                        className: "contents",
                        children: I
                    }),
                    titleClassName: "truncate",
                    subtitle: null == A ? void 0 : (0, i.jsx)(l.c, {
                        className: "contents",
                        children: A
                    })
                }), _]
            }), w[0] = F, w[1] = _, w[2] = H, w[3] = O, w[4] = W, w[5] = M, w[6] = A, w[7] = I, w[8] = a) : a = w[8], w[9] !== T || w[10] !== a ? (t = (0, i.jsxs)(i.Fragment, {
                children: [a, T]
            }), w[9] = T, w[10] = a, w[11] = t) : t = w[11];
            let U = t;
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
            let q = !O && !W,
                z = N ?? "opaque",
                B = W ? "imageSheetSurface-pAxv7i" : void 0,
                K = W ? "imageSheetOverlay-Da_SGi" : void 0;
            return w[21] !== O || w[22] !== M ? (f = e => {
                e || O || M()
            }, w[21] = O, w[22] = M, w[23] = f) : f = w[23], w[24] !== k || w[25] !== R || w[26] !== F || w[27] !== y || w[28] !== U || w[29] !== O || w[30] !== W || w[31] !== P ? (b = W ? (0, i.jsxs)(c.b, {
                as: null == P ? "div" : "form",
                variant: "chatgpt",
                className: (0, n.b)("imageSheetBody-YQy31R", "min-h-0", F && "imageSheetTwoRowsBody-mMGp9m"),
                onSubmit: null == P ? void 0 : e => {
                    e.preventDefault(), e.stopPropagation(), O || P()
                },
                children: [(0, i.jsxs)("div", {
                    className: "flex min-h-0 flex-col",
                    children: [U, k]
                }), (0, i.jsx)("div", {
                    className: (0, n.b)("shrink-0", F ? "mt-2" : "mt-12"),
                    children: y
                })]
            }) : (0, i.jsx)(h.a, {
                collapseEmptyContent: R,
                header: U,
                footer: y,
                onSubmit: null == P ? void 0 : e => {
                    e.preventDefault(), e.stopPropagation(), O || P()
                },
                children: k
            }), w[24] = k, w[25] = R, w[26] = F, w[27] = y, w[28] = U, w[29] = O, w[30] = W, w[31] = P, w[32] = b) : b = w[32], w[33] !== O || w[34] !== W || w[35] !== D || w[36] !== z || w[37] !== B || w[38] !== K || w[39] !== f || w[40] !== b || w[41] !== m || w[42] !== q ? (v = (0, i.jsx)(l.a, {
                open: !0,
                contentOverflow: "visible",
                contentProps: m,
                shouldIgnoreClickOutside: O,
                showDialogClose: q,
                size: D,
                variant: z,
                unstyledContent: W,
                contentClassName: B,
                overlayClassName: K,
                onOpenChange: f,
                children: b
            }), w[33] = O, w[34] = W, w[35] = D, w[36] = z, w[37] = B, w[38] = K, w[39] = f, w[40] = b, w[41] = m, w[42] = q, w[43] = v) : v = w[43], v
        }
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
                        actionLabel: T,
                        audience: _,
                        compactImageSheetFooter: y,
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
                v[2] !== A ? (t = A ? null : (0, i.jsx)(c.ye, {}), v[2] = A, v[3] = t) : t = v[3], v[4] !== T || v[5] !== t ? (p = (0, i.jsxs)(i.Fragment, {
                    children: [t, T]
                }), v[4] = T, v[5] = t, v[6] = p) : p = v[6];
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
                return v[16] !== w || v[17] !== _ || v[18] !== S || v[19] !== x || v[20] !== H || v[21] !== M || v[22] !== N || v[23] !== D ? (f = S?.preventsSharing ? (0, i.jsx)(l.e, {
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
                    }), x, M, w ?? (null == _ ? null : (0, i.jsx)(l.e, {
                        children: (0, i.jsx)("div", {
                            className: "text-sm text-codex-description",
                            children: _
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
                }), v[16] = w, v[17] = _, v[18] = S, v[19] = x, v[20] = H, v[21] = M, v[22] = N, v[23] = D, v[24] = f) : f = v[24], v[25] !== y || v[26] !== I || v[27] !== L || v[28] !== j || v[29] !== E || v[30] !== N || v[31] !== R || v[32] !== G || v[33] !== m || v[34] !== B || v[35] !== K || v[36] !== f ? (b = (0, i.jsx)(g.a, {
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