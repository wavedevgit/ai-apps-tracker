export const __rspack_esm_ids = [433520];
export const __webpack_modules__ = {
    qoug: (function(e, a, t) {
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
            ChatGptConversationShareRecoveryDialog: () => eE
        });
        var i = t("ABep"),
            s = t("QosV"),
            n = t("FS1B"),
            r = t("BOYb"),
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
            I = t("qKAH"),
            A = t("hZax"),
            j = t("zHp1"),
            M = t("WFY2"),
            L = t("rvFo"),
            E = t("HFSu"),
            P = t("eShZ"),
            D = t("taWv"),
            N = t("r9i9"),
            G = t("Y7np"),
            R = t("oU3c"),
            F = t("SEBt"),
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
            X = t("qoug"),
            Z = t.p + "assets/line.54d213ef65.svg",
            ee = t("O666"),
            ea = t("k6sM"),
            et = t("HOLv"),
            ei = t.p + "assets/facebook.a44c3b23dc.svg",
            es = t.p + "assets/instagram.f89c02c412.svg",
            en = t.p + "assets/kakao-talk.9a71acddc9.svg",
            er = t.p + "assets/line.8701c39f94.svg",
            eo = t.p + "assets/linkedin.a0e21ee4e9.svg",
            el = t.p + "assets/messages.65e1f7f9bb.svg",
            ec = t.p + "assets/reddit.ef23b998c8.svg",
            ed = t.p + "assets/snapchat.68114a3519.svg",
            eh = t.p + "assets/telegram.4e098d17e4.svg",
            eg = t.p + "assets/whatsapp.95a74777d3.svg",
            ep = t.p + "assets/x.f402deb07e.svg",
            eu = t.p + "assets/facebook-messenger.d2456ff12a.svg",
            em = t.p + "assets/facebook-stories.a4b3bd52fa.svg",
            ef = t.p + "assets/instagram-stories.c90c585419.svg",
            eb = t.p + "assets/kakao-talk.a52fcff4cb.svg",
            ev = t.p + "assets/linkedin.61d30fb4b9.svg",
            ew = t.p + "assets/messages.eed095b840.svg",
            ek = t.p + "assets/reddit.960af71a47.svg",
            ey = t.p + "assets/telegram.b7e1212639.svg",
            ex = t.p + "assets/whatsapp.0a1329508c.svg",
            e_ = t.p + "assets/x.1105bc9892.svg",
            eC = "mobileRow-V0E64y",
            eT = t("J8BG"),
            eS = t("QY8z"),
            eI = t("axbG");

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
                    canNativeShare: C,
                    country: T,
                    rowScrollPositions: S
                } = e,
                I = (0, d.a)();
            if (c[0] !== w || c[1] !== C || c[2] !== g || c[3] !== h || c[4] !== T || c[5] !== x.layout || c[6] !== x.unsupportedDestinationFallback || c[7] !== I || c[8] !== p || c[9] !== u || c[10] !== b || c[11] !== v || c[12] !== _ || c[13] !== y || c[14] !== S || c[15] !== f || c[16] !== m) {
                o = Symbol.for("react.early_return_sentinel");
                e: {
                    let e, s, l, d = null == v ? [] : [{
                        id: "download",
                        disabled: u || p,
                        icon: (0, i.jsx)(et.a, {
                            asset: eT.a
                        }),
                        label: I.formatMessage({
                            id: "chatgptConversations.shareDialog.destination.download.label",
                            defaultMessage: "Download"
                        }),
                        onClick: v
                    }];c[22] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(et.a, {
                        asset: eI.a
                    }), c[22] = e) : e = c[22];
                    let A = {
                            id: "copy",
                            disabled: g,
                            icon: e,
                            label: h,
                            onClick: b
                        },
                        j = C ? [{
                            id: "native",
                            disabled: g,
                            icon: (0, i.jsx)(et.a, {
                                asset: eS.a
                            }),
                            label: I.formatMessage({
                                id: "chatgptConversations.mobileImageShare.native",
                                defaultMessage: "Share to"
                            }),
                            onClick: _
                        }] : [],
                        M = [...d, A, ...j],
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
                                    a = c(ew), t = d(el), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.messages",
                                        defaultMessage: "Messages"
                                    });
                                    break;
                                case "whatsapp":
                                    a = c(ex), t = d(eg), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.whatsapp",
                                        defaultMessage: "WhatsApp"
                                    });
                                    break;
                                case "instagram-stories":
                                    a = c(ef), t = d(es), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.instagramStories",
                                        defaultMessage: "Instagram"
                                    });
                                    break;
                                case "facebook-stories":
                                    a = c(em), t = d(ei), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.facebookStories",
                                        defaultMessage: "Facebook"
                                    });
                                    break;
                                case "telegram":
                                    a = c(ey), t = d(eh), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.telegram",
                                        defaultMessage: "Telegram"
                                    });
                                    break;
                                case "facebook-messenger":
                                    a = c(eu), t = d(ei), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.facebookMessenger",
                                        defaultMessage: "Messenger"
                                    });
                                    break;
                                case "kakao-talk":
                                    a = c(eb), t = d(en), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.kakaoTalk",
                                        defaultMessage: "KakaoTalk"
                                    });
                                    break;
                                case "snapchat-stories":
                                    a = (0, i.jsx)(ea.a, {
                                        "aria-hidden": "true",
                                        className: "text-brand-logo-foreground"
                                    }), t = d(ed), s = o.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.snapchatStories",
                                        defaultMessage: "Snapchat"
                                    });
                                    break;
                                case "line":
                                    a = c(Z), t = d(er), s = o.formatMessage({
                                        id: "postSharingModal.line",
                                        defaultMessage: "LINE"
                                    });
                                    break;
                                case "x":
                                    a = c(e_), t = d(ep), s = o.formatMessage({
                                        id: "chatgptConversations.shareDialog.destination.x.label",
                                        defaultMessage: "X"
                                    });
                                    break;
                                case "linkedin":
                                    a = c(ev), t = d(eo), s = o.formatMessage({
                                        id: "chatgptConversations.shareDialog.destination.linkedin.label",
                                        defaultMessage: "LinkedIn"
                                    });
                                    break;
                                case "reddit":
                                    a = c(ek), t = d(ec), s = o.formatMessage({
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
                            intl: I,
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
                        let e, a, t, s, n, r, l = [...d, ...j, A];
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
                c[0] = w, c[1] = C, c[2] = g, c[3] = h, c[4] = T, c[5] = x.layout, c[6] = x.unsupportedDestinationFallback, c[7] = I, c[8] = p, c[9] = u, c[10] = b, c[11] = v, c[12] = _, c[13] = y, c[14] = S, c[15] = f, c[16] = m, c[17] = a, c[18] = t, c[19] = n, c[20] = r, c[21] = o
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
            let _ = (0, l.x)(ee.b, a),
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

        function eM(e) {
            let a, t, n, r, o, c, h, g, p, u = (0, s.c)(69),
                {
                    copyLabel: m,
                    copyDisabled: f,
                    isBusy: b,
                    isDownloading: w,
                    socialDestinationsDisabled: y,
                    showSocialDestinations: x,
                    onCopy: _,
                    onDownload: C,
                    additionalActions: T,
                    onSocialShare: S,
                    mobileImageActions: I,
                    projectStyleEligible: j
                } = e,
                M = void 0 !== w && w,
                L = (0, A.l)(),
                E = void 0 !== j && j && null == I && !!L.userID?.trim();
            u[0] === Symbol.for("react.memo_cache_sentinel") ? (a = {
                layer: "1145946487",
                parameter: "project_style_share_buttons"
            }, u[0] = a) : a = u[0];
            let P = !0 === (0, l.x)(E ? ee.b : null, a),
                D = null != I;
            u[1] !== D ? (t = {
                layer: "3136899520",
                parameter: "large_share_destinations",
                disableExposureLog: D
            }, u[1] = D, u[2] = t) : t = u[2];
            let N = (0, l.x)(P ? null : ee.b, t),
                G = (0, d.a)(),
                R = (0, A.h)();
            u[3] !== R.client ? (n = R.client.getContext().user?.country?.trim().toUpperCase(), u[3] = R.client, u[4] = n) : n = u[4];
            let F = n,
                O = "JP" === F;
            u[5] !== O || u[6] !== I || u[7] !== x || u[8] !== R ? (r = null == I && x && (O || R.checkGate("2338166187")) && R.getLayer(O ? "494762337" : "2308409163").get("enabled", !1), u[5] = O, u[6] = I, u[7] = x, u[8] = R, u[9] = r) : r = u[9];
            let H = r;
            if (null != I) {
                let e;
                return u[10] !== T || u[11] !== f || u[12] !== m || u[13] !== F || u[14] !== b || u[15] !== M || u[16] !== I.canNativeShare || u[17] !== I.experience || u[18] !== I.onNativeShare || u[19] !== I.rowScrollPositions || u[20] !== _ || u[21] !== C || u[22] !== S || u[23] !== x || u[24] !== y ? (e = (0, i.jsx)(eA, {
                    copyLabel: m,
                    copyDisabled: f,
                    isBusy: b,
                    isDownloading: M,
                    socialDestinationsDisabled: y,
                    showSocialDestinations: x,
                    onCopy: _,
                    onDownload: C,
                    additionalActions: T,
                    onSocialShare: S,
                    experience: I.experience,
                    onNativeShare: I.onNativeShare,
                    canNativeShare: I.canNativeShare,
                    country: F,
                    rowScrollPositions: I.rowScrollPositions
                }), u[10] = T, u[11] = f, u[12] = m, u[13] = F, u[14] = b, u[15] = M, u[16] = I.canNativeShare, u[17] = I.experience, u[18] = I.onNativeShare, u[19] = I.rowScrollPositions, u[20] = _, u[21] = C, u[22] = S, u[23] = x, u[24] = y, u[25] = e) : e = u[25], e
            }
            if (u[26] !== T || u[27] !== f || u[28] !== m || u[29] !== G || u[30] !== b || u[31] !== M || u[32] !== _ || u[33] !== C || u[34] !== S || u[35] !== H || u[36] !== x || u[37] !== y || u[38] !== P) {
                c = Symbol.for("react.early_return_sentinel");
                e: {
                    let e, a, t, s = null == C ? [] : [{
                        id: "download",
                        largeIcon: (0, i.jsx)(v.s, {
                            "aria-hidden": "true"
                        }),
                        disabled: M,
                        icon: (0, i.jsx)(v.r, {}),
                        label: G.formatMessage({
                            id: "chatgptConversations.shareDialog.destination.download.label",
                            defaultMessage: "Download"
                        }),
                        onClick: C
                    }];u[41] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(v.Ie, {
                        "aria-hidden": "true"
                    }), u[41] = e) : e = u[41],
                    u[42] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, i.jsx)(v.He, {}), u[42] = a) : a = u[42],
                    u[43] !== f || u[44] !== m || u[45] !== _ ? (t = {
                        id: "copy",
                        largeIcon: e,
                        disabled: f,
                        icon: a,
                        label: m,
                        onClick: _
                    }, u[43] = f, u[44] = m, u[45] = _, u[46] = t) : t = u[46];
                    let n = t,
                        r = x ? [...H ? [function(e) {
                            let {
                                disabled: a,
                                intl: t,
                                onSocialShare: s
                            } = e, n = (0, i.jsx)("img", {
                                alt: "",
                                "aria-hidden": !0,
                                src: Z
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
                            disabled: y,
                            intl: G,
                            onSocialShare: S
                        })] : [], eL({
                            destination: "x",
                            disabled: y,
                            intl: G,
                            onSocialShare: S
                        }), eL({
                            destination: "linkedin",
                            disabled: y,
                            intl: G,
                            onSocialShare: S
                        }), ...H ? [] : [eL({
                            destination: "reddit",
                            disabled: y,
                            intl: G,
                            onSocialShare: S
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
                            return (0, i.jsx)(Y.a, {
                                content: n,
                                children: (0, i.jsx)($.a, {
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
                        u[47] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(v.Ge, {}), u[47] = e) : e = u[47], u[48] !== m ? (a = (0, i.jsx)("span", {
                            "aria-live": "polite",
                            children: m
                        }), u[48] = m, u[49] = a) : a = u[49], u[50] !== f || u[51] !== m || u[52] !== b || u[53] !== _ || u[54] !== a ? (t = (0, i.jsxs)($.a, {
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
                        }), u[50] = f, u[51] = m, u[52] = b, u[53] = _, u[54] = a, u[55] = t) : t = u[55], c = (0, i.jsxs)("div", {
                            className: "flex w-full flex-wrap items-center justify-end gap-2 select-none",
                            children: [r.map(n), T, (0, i.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [s.map(n), t]
                            })]
                        });
                        break e
                    }
                    o = [n, ...r, ...s]
                }
                u[26] = T, u[27] = f, u[28] = m, u[29] = G, u[30] = b, u[31] = M, u[32] = _, u[33] = C, u[34] = S, u[35] = H, u[36] = x, u[37] = y, u[38] = P, u[39] = o, u[40] = c
            } else o = u[39], c = u[40];
            if (c !== Symbol.for("react.early_return_sentinel")) return c;
            let W = o,
                U = null == T && "flex-wrap justify-center gap-x-6 gap-y-4",
                z = null != T && "gap-3",
                q = null != T && N && "flex-wrap justify-center",
                B = null != T && !N && "justify-start overflow-x-auto sm:justify-center";
            return u[56] !== U || u[57] !== z || u[58] !== q || u[59] !== B ? (h = (0, Q.b)("flex w-full", U, z, q, B), u[56] = U, u[57] = z, u[58] = q, u[59] = B, u[60] = h) : h = u[60], u[61] !== W || u[62] !== b || u[63] !== M ? (g = W.map(e => {
                let {
                    id: a,
                    disabled: t,
                    icon: s,
                    largeIcon: n,
                    label: r,
                    onClick: o
                } = e, l = "copy" === a && b || "download" === a && M;
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
            }), u[61] = W, u[62] = b, u[63] = M, u[64] = g) : g = u[64], u[65] !== T || u[66] !== h || u[67] !== g ? (p = (0, i.jsxs)("div", {
                className: h,
                children: [g, T]
            }), u[65] = T, u[66] = h, u[67] = g, u[68] = p) : p = u[68], p
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
                    a = (0, i.jsx)(v.rj, {
                        "aria-hidden": "true"
                    }), t = (0, i.jsx)(v.sj, {
                        "aria-hidden": "true"
                    }), s = o.formatMessage({
                        id: "chatgptConversations.shareDialog.destination.x.label",
                        defaultMessage: "X"
                    });
                    break;
                case "linkedin":
                    a = (0, i.jsx)(X.a, {
                        "aria-hidden": "true"
                    }), t = (0, i.jsx)(v.Je, {
                        "aria-hidden": "true"
                    }), s = o.formatMessage({
                        id: "chatgptConversations.shareDialog.destination.linkedin.label",
                        defaultMessage: "LinkedIn"
                    });
                    break;
                case "reddit":
                    a = (0, i.jsx)(v.$g, {
                        "aria-hidden": "true"
                    }), t = (0, i.jsx)(v.ah, {
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

        function eE(e) {
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
            return n[0] !== e.publishedShareLink?.shareLinkId || n[1] !== e.publishedWidget || n[2] !== e.responseRegion || n[3] !== e.shareSessionId || n[4] !== e.widget ? (a = null == e.widget && null == e.publishedWidget && null == e.responseRegion ? void 0 : JSON.stringify([e.widget?.attachment, e.responseRegion?.attachment, e.publishedShareLink?.shareLinkId, e.shareSessionId]), n[0] = e.publishedShareLink?.shareLinkId, n[1] = e.publishedWidget, n[2] = e.responseRegion, n[3] = e.shareSessionId, n[4] = e.widget, n[5] = a) : a = n[5], n[6] !== e || n[7] !== a ? (t = (0, i.jsx)(eD, {
                ...e
            }, a), n[6] = e, n[7] = a, n[8] = t) : t = n[8], t
        }

        function eD(e) {
            let a, t, g, m, v, k, E, q, B, K, Y, Q, $, J, X, Z, ee, ea, et, ei, es, en, er, eo, el, ec, ed, eh, eg, ep, eu, em, ef, eb, ev, ew, ek, ey, ex, e_, eC, eT, eS, eI, eA, ej, eL, eE, eP, eD, eq, eB, eK = (0, s.c)(388),
                {
                    currentNodeId: eV,
                    image: eY,
                    imagePromptTemplate: eQ,
                    imageShareOptions: e$,
                    recoveryShareLink: eJ,
                    publishedShareLink: eX,
                    publishedWidget: eZ,
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
                am = (0, A.j)("3136899520"),
                [af, ab] = (0, c.useState)(!1),
                av = (0, l.z)(null)?.data,
                aw = (0, l.z)(null),
                ak = (0, l.x)(null, ac),
                ay = (0, d.a)(),
                ax = (0, c.useRef)(!1),
                a_ = (0, c.useRef)(!1);
            eK[0] !== ae ? (a = () => (ax.current = !0, () => {
                ax.current = !1, queueMicrotask(() => {
                    ax.current || a_.current || (a_.current = !0, ae?.(!1))
                })
            }), t = [ae], eK[0] = ae, eK[1] = a, eK[2] = t) : (a = eK[1], t = eK[2]), (0, c.useEffect)(a, t), eK[3] !== ae ? (g = function(e) {
                a_.current || (a_.current = !0, ae?.(e))
            }, eK[3] = ae, eK[4] = g) : g = eK[4];
            let aC = g;
            eK[5] !== aC || eK[6] !== e9 ? (m = function() {
                aC(!1), e9()
            }, eK[5] = aC, eK[6] = e9, eK[7] = m) : m = eK[7];
            let aT = m,
                aS = (0, c.useContext)(p.a);
            eK[8] !== eY || eK[9] !== au || eK[10] !== ac ? (v = null == eY ? void 0 : (0, W.a)(au, ac, eY), eK[8] = eY, eK[9] = au, eK[10] = ac, eK[11] = v) : v = eK[11];
            let aI = v;
            eK[12] !== eQ || eK[13] !== aI || eK[14] !== eX || eK[15] !== ar || eK[16] !== eJ || eK[17] !== au.queryClient ? (k = () => ar ?? eX ?? eJ ?? (null == aI || null != eQ ? null : au.queryClient.getQueryData(aI.queryKey) ?? null), eK[12] = eQ, eK[13] = aI, eK[14] = eX, eK[15] = ar, eK[16] = eJ, eK[17] = au.queryClient, eK[18] = k) : k = eK[18];
            let [aA, aj] = (0, c.useState)(k), [aM] = (0, c.useState)(eW), aL = ad ?? aM, [aE, aP] = (0, c.useState)("message");
            eK[19] !== e5 || eK[20] !== aa || eK[21] !== al || eK[22] !== am ? (E = null != e5 && null != al && null != aa && am.get("message_share_scope_picker", !1), eK[19] = e5, eK[20] = aa, eK[21] = al, eK[22] = am, eK[23] = E) : E = eK[23];
            let aD = E,
                aN = aD && "conversation" === aE;
            eK[24] !== aL ? (q = ["expanded-conversation-share", aL], eK[24] = aL, eK[25] = q) : q = eK[25];
            let aG = q,
                aR = aN && null != at;
            eK[26] !== at ? (B = e => {
                let {
                    signal: a
                } = e;
                if (null == at) throw Error("Expanded conversation loader unavailable");
                return at(a)
            }, eK[26] = at, eK[27] = B) : B = eK[27], eK[28] !== aG || eK[29] !== B || eK[30] !== aR ? (K = {
                enabled: aR,
                queryKey: aG,
                queryFn: B,
                staleTime: 1 / 0,
                gcTime: 0,
                retry: !1
            }, eK[28] = aG, eK[29] = B, eK[30] = aR, eK[31] = K) : K = eK[31];
            let {
                data: aF,
                error: aO,
                isFetching: aH,
                refetch: aW
            } = (0, o.a)(K), [aU, az] = (0, c.useState)("idle"), [aq, aB] = (0, c.useState)(null != eJ ? "copy-failed" : null), [aK, aV] = (0, c.useState)(!1);
            eK[32] !== ac ? (Y = ["chatgpt-conversation-share", ac], eK[32] = ac, eK[33] = Y) : Y = eK[33];
            let aY = Y,
                aQ = null == eJ && null == ar && null == eX && null == as && null == eY && (null == e5 || aN) && null == ao && null == ap;
            eK[34] !== eV || eK[35] !== ac ? (Q = () => (0, N.i)({
                conversationId: ac,
                currentNodeId: eV
            }), eK[34] = eV, eK[35] = ac, eK[36] = Q) : Q = eK[36], eK[37] !== aY || eK[38] !== aQ || eK[39] !== Q ? ($ = {
                enabled: aQ,
                queryFn: Q,
                queryKey: aY,
                retry: !1,
                staleTime: L.b.ONE_MINUTE
            }, eK[37] = aY, eK[38] = aQ, eK[39] = Q, eK[40] = $) : $ = eK[40];
            let {
                data: a$,
                error: aJ,
                isLoading: aX
            } = (0, o.a)($);
            eK[41] === Symbol.for("react.memo_cache_sentinel") ? (J = {
                enabled: !1,
                queryFn: eH,
                queryKey: ["accounts", "check"],
                staleTime: L.b.ONE_MINUTE
            }, eK[41] = J) : J = eK[41];
            let {
                data: aZ
            } = (0, o.a)(J), a1 = null != eY, a0 = null != e4 && a1, a2 = a0 || !0 === e7, a3 = null != ar || an?.kind === "shared", a5 = (eY?.additionalImages?.length ?? 0) > 0, a4 = eY?.item.isAnimated === !0 && !a5;
            eK[42] !== eY || eK[43] !== ac || eK[44] !== aL ? (X = (0, D.c)((0, O.c)(ac), void 0, null != eY && null == eY.previewSrc ? aL : void 0), eK[42] = eY, eK[43] = ac, eK[44] = aL, eK[45] = X) : X = eK[45];
            let {
                src: a6,
                isLoading: a7
            } = (0, j.k)(null != eY && (a5 || null == eY.previewSrc) ? eY.item.src ?? "" : "", X), a8 = null != eY && null == eY.previewSrc && null == a6, a9 = a5 ? "image_series" : "single_image", te = ap ?? eZ, ta = null != e5 || null != ao || null != te || ar?.contentType === "message", tt = null != ao, ti = te?.metadata.widgetType === "visualization", ts = te?.metadata.widgetName === "create_interactive_poll" || te?.metadata.widgetName === "CreateInteractivePoll", tn = null != as || null != eQ, tr = a1 || ta || tn, to = !tr || aN, tl = tr || !0, tc = "conversation";
            if (ti ? tc = "widget" : null != eQ ? tc = "prompt" : a4 ? tc = "gif" : a1 ? tc = a5 ? "images" : "image" : tt ? tc = "response-region" : ta ? tc = aN ? "conversation" : "message" : tn && (tc = "prompt"), null == al) Z = ai;
            else if (aN) Z = aF?.privacyNotices ?? (null == at ? ai : void 0);
            else {
                let e;
                eK[46] !== al ? (e = (0, N.m)(al), eK[46] = al, eK[47] = e) : e = eK[47], Z = e
            }
            let td = a1 || (!tr || ta) && Z?.hasImageReference === !0;
            eK[48] !== eY || eK[49] !== a5 || eK[50] !== ag ? (ee = (a5 ? void 0 : eY?.item.chatGptDisplayTitle) ?? (0, R.c)(ag), eK[48] = eY, eK[49] = a5, eK[50] = ag, eK[51] = ee) : ee = eK[51];
            let th = ee,
                tg = to && a$?.is_public === !0 && !0 === a$.is_visible,
                tp = aZ?.accounts?.find(e => e.id === (aS?.accountId ?? aZ.account_ordering?.[0])),
                tu = tp?.structure ?? aS?.accountStructureAtLogin,
                tm = "unknown";
            aA?.isWorkspaceOnly != null ? tm = aA.isWorkspaceOnly ? "workspace" : "public" : null == a$ || a1 ? ("personal" === tu || "workspace" === tu) && (tm = "workspace" === tu ? "workspace" : "public") : tm = a$.share_url.includes("/share/e/") ? "workspace" : "public", eK[52] !== eY || eK[53] !== eQ || eK[54] !== aI?.queryKey || eK[55] !== ac ? (ea = null != eQ ? ["chatgpt-image-prompt-share-preparation", ac, eY?.item.id, eQ.revision] : aI?.queryKey ?? ["disabled-chatgpt-image-share-query"], eK[52] = eY, eK[53] = eQ, eK[54] = aI?.queryKey, eK[55] = ac, eK[56] = ea) : ea = eK[56], eK[57] !== eQ || eK[58] !== aI?.queryFn ? (et = null != eQ ? () => eQ.createLink("native") : aI?.queryFn ?? eO, eK[57] = eQ, eK[58] = aI?.queryFn, eK[59] = et) : et = eK[59];
            let tf = a0 && (0, U.a)() && eQ?.actionsDisabled !== !0 && (null != eQ || null != aI) && "public" === tm && null == aA;
            eK[60] !== ea || eK[61] !== et || eK[62] !== tf ? (ei = {
                queryKey: ea,
                queryFn: et,
                enabled: tf,
                retry: !1,
                staleTime: 1 / 0
            }, eK[60] = ea, eK[61] = et, eK[62] = tf, eK[63] = ei) : ei = eK[63];
            let tb = (0, o.a)(ei);
            tb.data?.isWorkspaceOnly != null && (tm = tb.data.isWorkspaceOnly ? "workspace" : "public");
            let tv = aA ?? tb.data ?? null,
                tw = null == eQ ? tv : null;
            eK[64] !== e8 || eK[65] !== tw ? (es = () => {
                null != tw && e8?.(tw)
            }, en = [e8, tw], eK[64] = e8, eK[65] = tw, eK[66] = es, eK[67] = en) : (es = eK[66], en = eK[67]), (0, c.useEffect)(es, en);
            let tk = tv?.shareLinkUrl ?? (tg ? a$.share_url : null),
                ty = to && null == tv && tg && a$.current_node_id !== eV,
                tx = "workspace" === tm,
                t_ = "creating" === aU,
                tC = aN && null != at && null == aF,
                tT = to && aX || tC && aH;
            eK[68] !== tv || eK[69] !== aq || eK[70] !== aO || eK[71] !== aJ || eK[72] !== tb.error || eK[73] !== tC || eK[74] !== aQ ? (null == (er = aq) && tC && null != aO && (er = "conversation-load-failed"), null == er && aQ && null == tv && null != aJ && (er = aJ instanceof N.a ? "blocked" : "create-failed"), null == er && null == tv && null != tb.error && (er = tb.error instanceof N.a ? "blocked" : "create-failed"), eK[68] = tv, eK[69] = aq, eK[70] = aO, eK[71] = aJ, eK[72] = tb.error, eK[73] = tC, eK[74] = aQ, eK[75] = er) : er = eK[75];
            let tS = e3.description,
                tI = e3.publicLinkAudience;
            if (ti) {
                let e;
                eK[76] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    ...e3.widgetTitle
                }), eK[76] = e) : e = eK[76], eo = e
            } else if (a4) {
                let e;
                eK[77] !== eQ ? (e = null != eQ ? (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.gifWithPromptTitle",
                    defaultMessage: "Share GIF with prompt"
                }) : (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.gifTitle",
                    defaultMessage: "Share GIF"
                }), eK[77] = eQ, eK[78] = e) : e = eK[78], eo = e
            } else if (null != eQ) {
                let e;
                eK[79] !== eQ.label ? (e = "image_with_prompt" === eQ.label ? (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.imageWithPromptTitle",
                    defaultMessage: "Share image with prompt"
                }) : (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.imagePromptTitle",
                    defaultMessage: "Share prompt with image"
                }), eK[79] = eQ.label, eK[80] = e) : e = eK[80], eo = e
            } else if (a1) {
                let e;
                eK[81] !== th || eK[82] !== e$ || eK[83] !== a5 || eK[84] !== a0 ? (e = a0 || null == th || null != e$ ? (0, i.jsx)(h.a, {
                    ...a5 ? e3.imagesTitle : e3.imageTitle
                }) : (0, i.jsx)(i.Fragment, {
                    children: th
                }), eK[81] = th, eK[82] = e$, eK[83] = a5, eK[84] = a0, eK[85] = e) : e = eK[85], eo = e
            } else if (ts) {
                let e;
                eK[86] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.poll.title",
                    defaultMessage: "Share poll"
                }), eK[86] = e) : e = eK[86], eo = e
            } else if (tt) {
                let e;
                eK[87] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.responseRegionTitle",
                    defaultMessage: "Share"
                }), eK[87] = e) : e = eK[87], eo = e
            } else if (ta) {
                let e;
                eK[88] !== th ? (e = null == th ? (0, i.jsx)(h.a, {
                    ...e3.messageTitle
                }) : (0, i.jsx)(i.Fragment, {
                    children: th
                }), eK[88] = th, eK[89] = e) : e = eK[89], eo = e
            } else if (tn) {
                let e;
                eK[90] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    ...e3.promptTitle
                }), eK[90] = e) : e = eK[90], eo = e
            } else {
                if (tl) {
                    let e;
                    eK[91] !== th ? (e = null == th ? void 0 : (0, i.jsx)(i.Fragment, {
                        children: th
                    }), eK[91] = th, eK[92] = e) : e = eK[92], eo = e
                }
                tx ? tS = ai?.isProjectConversation ? e3.workspaceProjectDescription : e3.workspaceDescription : a$?.is_anonymous === !1 ? tS = e3.attributedDescription : ai?.isProjectConversation && (tS = e3.projectDescription)
            }
            tx && (tI = td ? e3.workspaceImageRightsAudience : e3.workspaceLinkAudience);
            let tA = "copied" === aU ? e3.copied : e3.copyLink;
            ty ? tA = e3.updateLink : null == tk && "copied" !== aU && (tA = e3.createLink), eK[93] !== ay || eK[94] !== aU ? (el = "copied" === aU ? ay.formatMessage(e3.copied) : ay.formatMessage(e3.copyLink), eK[93] = ay, eK[94] = aU, eK[95] = el) : el = eK[95];
            let tj = el;
            eK[96] !== aC || eK[97] !== ay || eK[98] !== au || eK[99] !== ap ? (ec = function(e, a) {
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
                        t = ay.formatMessage(e3.receiverFileCopyDeferred);
                        break;
                    case "blocked":
                        t = ay.formatMessage(e3.shareBlocked);
                        break;
                    case "copy-failed":
                        t = ay.formatMessage(e3.shareCopyFailed);
                        break;
                    case "create-failed":
                        t = ay.formatMessage(e3.shareCreateFailed)
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
            }, eK[96] = aC, eK[97] = ay, eK[98] = au, eK[99] = ap, eK[100] = ec) : ec = eK[100];
            let tM = ec;
            if (eK[101] !== te || eK[102] !== a1 || eK[103] !== ta || eK[104] !== tn || eK[105] !== a3 || eK[106] !== tt || eK[107] !== an?.kind || eK[108] !== ar || eK[109] !== aN || eK[110] !== ah) {
                ed = a3 ? "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER" : "CHATGPT_SHARE_FLOW_ACTOR_SHARER";
                let e = an?.kind === "shared";
                eg = ah ?? "CHATGPT_SHARE_FLOW_SOURCE_CONVERSATION_MENU", a3 && (eg = e ? "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_MODEL_WRITTEN_ACTION" : "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_HEADER"), null != ar ? eh = ar.attachmentType : null != te ? (eh = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_WIDGET", eg = "CHATGPT_SHARE_FLOW_SOURCE_WIDGET_INLINE_ACTION") : a1 ? (eh = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_IMAGE_SHARE", eg = ah ?? "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION") : tt ? (eh = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_RESPONSE_REGION", e || (eg = "CHATGPT_SHARE_FLOW_SOURCE_WIDGET_INLINE_ACTION")) : ta ? (eg = "CHATGPT_SHARE_FLOW_SOURCE_MESSAGE_INLINE_ACTION", aN || (eh = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_MESSAGE_SLICE")) : tn && (eh = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_PROMPT", eg = ah ?? "CHATGPT_SHARE_FLOW_SOURCE_MESSAGE_INLINE_ACTION"), eK[101] = te, eK[102] = a1, eK[103] = ta, eK[104] = tn, eK[105] = a3, eK[106] = tt, eK[107] = an?.kind, eK[108] = ar, eK[109] = aN, eK[110] = ah, eK[111] = ed, eK[112] = eh, eK[113] = eg
            } else ed = eK[111], eh = eK[112], eg = eK[113];
            let tL = (ar?.contentType === "message" || tr) && !aN ? "CHATGPT_SHARE_FLOW_CONTENT_TYPE_POST_SLICE" : "CHATGPT_SHARE_FLOW_CONTENT_TYPE_SHARED_CONVERSATION";
            eK[114] !== tv || eK[115] !== eV || eK[116] !== tg || eK[117] !== a$ || eK[118] !== aC || eK[119] !== eQ || eK[120] !== aI || eK[121] !== tC || eK[122] !== ty || eK[123] !== e5 || eK[124] !== e8 || eK[125] !== as || eK[126] !== ao || eK[127] !== au || eK[128] !== ac || eK[129] !== aY || eK[130] !== aN || eK[131] !== ag || eK[132] !== to || eK[133] !== ap ? (ep = async function(e) {
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
                else if (null != aI) a = await au.queryClient.fetchQuery(aI), e8?.(a);
                else if (null != ap) {
                    if (a = await (0, N.g)(ap.attachment, eV), !ax.current || ap.isCurrent?.() === !1) throw Error("The selected widget changed while sharing")
                } else if (null != ao) {
                    if (a = await (0, N.f)({
                            attachment: ao.attachment,
                            currentNodeId: eV
                        }), !ax.current || ao.isCurrent?.() === !1) throw Error("The selected response region changed while sharing")
                } else a = null == e5 || aN ? null != as ? await au.queryClient.fetchQuery({
                    queryFn: () => (0, N.e)({
                        conversationId: ac,
                        messageId: as.messageId
                    }),
                    queryKey: ["chatgpt-prompt-share", ac, as.messageId],
                    staleTime: 1 / 0
                }) : await (0, N.h)({
                    conversationId: ac,
                    currentNodeId: eV,
                    existingShareLink: a$,
                    title: ag
                }) : await au.queryClient.fetchQuery({
                    queryFn: () => (0, N.d)({
                        conversationId: ac,
                        currentNodeId: eV,
                        messageIds: e5
                    }),
                    queryKey: ["chatgpt-message-share", au.get(u.f), ac, eV, e5],
                    staleTime: 1 / 0
                });
                return aj(a), aC(!0), null != a$ && to && au.queryClient.setQueryData(aY, {
                    ...a$,
                    current_node_id: eV,
                    is_public: !0,
                    is_visible: !0
                }), a
            }, eK[114] = tv, eK[115] = eV, eK[116] = tg, eK[117] = a$, eK[118] = aC, eK[119] = eQ, eK[120] = aI, eK[121] = tC, eK[122] = ty, eK[123] = e5, eK[124] = e8, eK[125] = as, eK[126] = ao, eK[127] = au, eK[128] = ac, eK[129] = aY, eK[130] = aN, eK[131] = ag, eK[132] = to, eK[133] = ap, eK[134] = ep) : ep = eK[134];
            let tE = ep;
            eK[135] !== ed || eK[136] !== eh || eK[137] !== tL || eK[138] !== tv || eK[139] !== te?.metadata || eK[140] !== tE || eK[141] !== tg || eK[142] !== a$ || eK[143] !== eQ || eK[144] !== a8 || eK[145] !== a3 || eK[146] !== ty || eK[147] !== t_ || eK[148] !== e9 || eK[149] !== an || eK[150] !== tM || eK[151] !== au || eK[152] !== ac || eK[153] !== tk || eK[154] !== aL || eK[155] !== eg || eK[156] !== tl ? (eu = async function() {
                if (t_ || a8 || eQ?.actionsDisabled) return;
                let e = (0, F.b)(au, {
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
                        n = s.then(eF);
                    n.catch(eR);
                    let r = (0, T.c)(n);
                    null != r && r.catch(eG);
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
            }, eK[135] = ed, eK[136] = eh, eK[137] = tL, eK[138] = tv, eK[139] = te?.metadata, eK[140] = tE, eK[141] = tg, eK[142] = a$, eK[143] = eQ, eK[144] = a8, eK[145] = a3, eK[146] = ty, eK[147] = t_, eK[148] = e9, eK[149] = an, eK[150] = tM, eK[151] = au, eK[152] = ac, eK[153] = tk, eK[154] = aL, eK[155] = eg, eK[156] = tl, eK[157] = eu) : eu = eK[157];
            let tP = eu;
            eK[158] !== eh || eK[159] !== tL || eK[160] !== tv || eK[161] !== au || eK[162] !== ac || eK[163] !== aL || eK[164] !== a2 || eK[165] !== eg ? (em = function(e) {
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
            }, eK[158] = eh, eK[159] = tL, eK[160] = tv, eK[161] = au, eK[162] = ac, eK[163] = aL, eK[164] = a2, eK[165] = eg, eK[166] = em) : em = eK[166];
            let tD = em;
            eK[167] !== tv || eK[168] !== er || eK[169] !== aC || eK[170] !== aI || eK[171] !== ay || eK[172] !== t_ || eK[173] !== e9 || eK[174] !== tM || eK[175] !== au || eK[176] !== ac || eK[177] !== tm || eK[178] !== aL || eK[179] !== eg ? (ef = async function() {
                if (!t_ && null != aI && "public" === tm && null != tv && "blocked" !== er) {
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
            }, eK[167] = tv, eK[168] = er, eK[169] = aC, eK[170] = aI, eK[171] = ay, eK[172] = t_, eK[173] = e9, eK[174] = tM, eK[175] = au, eK[176] = ac, eK[177] = tm, eK[178] = aL, eK[179] = eg, eK[180] = ef) : ef = eK[180];
            let tN = ef;
            eK[181] !== ed || eK[182] !== eh || eK[183] !== tL || eK[184] !== tv || eK[185] !== th || eK[186] !== te?.metadata || eK[187] !== tE || eK[188] !== tg || eK[189] !== a$ || eK[190] !== eQ || eK[191] !== a9 || eK[192] !== ay || eK[193] !== a1 || eK[194] !== a8 || eK[195] !== tn || eK[196] !== a3 || eK[197] !== ty || eK[198] !== t_ || eK[199] !== e4?.unsupportedDestinationFallback || eK[200] !== e9 || eK[201] !== an || eK[202] !== tM || eK[203] !== au || eK[204] !== ac || eK[205] !== tm || eK[206] !== aU || eK[207] !== aL || eK[208] !== a2 || eK[209] !== eg || eK[210] !== a0 ? (eb = async function(e, a) {
                var t;
                let i;
                if (t_ || a8 || "public" !== tm || eQ?.actionsDisabled) return;
                a.preventDefault(), a3 || tn || "line" !== (t = e) && "linkedin" !== t && "reddit" !== t && "x" !== t || (0, F.g)(au, e, a1 ? a9 : void 0);
                let s = a2 && a1 ? ac : void 0;
                (0, F.f)(au, {
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
                let n = a0 && (0, V.g)(e);
                if (n && e4?.unsupportedDestinationFallback === "app-store") {
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
                    o?.close(), e instanceof N.a || (0, F.e)(au, {
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
                let l = (0, V.d)({
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
            }, eK[181] = ed, eK[182] = eh, eK[183] = tL, eK[184] = tv, eK[185] = th, eK[186] = te?.metadata, eK[187] = tE, eK[188] = tg, eK[189] = a$, eK[190] = eQ, eK[191] = a9, eK[192] = ay, eK[193] = a1, eK[194] = a8, eK[195] = tn, eK[196] = a3, eK[197] = ty, eK[198] = t_, eK[199] = e4?.unsupportedDestinationFallback, eK[200] = e9, eK[201] = an, eK[202] = tM, eK[203] = au, eK[204] = ac, eK[205] = tm, eK[206] = aU, eK[207] = aL, eK[208] = a2, eK[209] = eg, eK[210] = a0, eK[211] = eb) : eb = eK[211];
            let tG = eb;
            eK[212] !== eY || eK[213] !== a9 || eK[214] !== ay || eK[215] !== aK || eK[216] !== a5 || eK[217] !== a8 || eK[218] !== tD || eK[219] !== au || eK[220] !== ac ? (ev = async function() {
                if (null == eY || aK || a8) return;
                (0, F.g)(au, "download", a9);
                let e = [eY.item, ...eY.additionalImages ?? []].filter(eN);
                0 !== e.length && ((0, z.b)(au, {
                    image: eY.downloadAnalyticsImage ?? eY.item,
                    conversationId: ac,
                    entryPoint: "CHATGPT_IMAGE_DOWNLOAD_ENTRY_POINT_CUSTOM_SHARE_SHEET",
                    downloadScope: a5 ? "CHATGPT_IMAGE_DOWNLOAD_SCOPE_SERIES" : "CHATGPT_IMAGE_DOWNLOAD_SCOPE_SINGLE",
                    requestedImageCount: e.length,
                    isParagen: eY.downloadIsParagen
                }), aV(!0), tD("CHATGPT_SHARE_FLOW_ACTION_DOWNLOAD_SELECTED"), await (0, H.a)(au, {
                    images: e,
                    intl: ay,
                    serverConversationId: (0, O.c)(ac),
                    logIndividualDownloads: !1
                }).then(e => {
                    "downloaded" === e && (0, z.e)(au, ac, eY.item)
                }).finally(() => {
                    aV(!1)
                }))
            }, eK[212] = eY, eK[213] = a9, eK[214] = ay, eK[215] = aK, eK[216] = a5, eK[217] = a8, eK[218] = tD, eK[219] = au, eK[220] = ac, eK[221] = ev) : ev = eK[221];
            let tR = ev;
            eK[222] !== eY?.additionalImages?.length || eK[223] !== a5 ? (ew = a5 ? (0, i.jsx)(h.a, {
                id: "chatgptConversations.shareDialog.imageSeriesCount",
                defaultMessage: "Sharing {imageCount} images together",
                values: {
                    imageCount: 1 + (eY?.additionalImages?.length ?? 0)
                }
            }) : void 0, eK[222] = eY?.additionalImages?.length, eK[223] = a5, eK[224] = ew) : ew = eK[224];
            let tF = ew,
                tO = tF;
            if (!a5 && !tl) {
                let e;
                eK[225] !== tS ? (e = (0, i.jsx)(h.a, {
                    ...tS
                }), eK[225] = tS, eK[226] = e) : e = eK[226], tO = e
            }
            if (null != eQ) {
                let e;
                eK[227] !== a0 ? (e = a0 ? (0, i.jsx)(h.a, {
                    id: "imagePromptShare.audience",
                    defaultMessage: "Anyone with the link can try this prompt"
                }) : void 0, eK[227] = a0, eK[228] = e) : e = eK[228], tO = e
            } else if (a0) {
                let e, a, t;
                eK[229] !== tm ? (e = "public" === tm ? (0, i.jsx)(h.a, {
                    id: "chatgptConversations.mobileImageShare.publicAudience",
                    defaultMessage: "Anyone with the link can view"
                }) : null, eK[229] = tm, eK[230] = e) : e = eK[230], eK[231] !== tm ? (a = "public" !== tm && (0, i.jsx)(h.a, {
                    id: "chatgptConversations.mobileImageShare.workspaceAudience",
                    defaultMessage: "Only workspace members with the link can view"
                }), eK[231] = tm, eK[232] = a) : a = eK[232], eK[233] !== e || eK[234] !== a ? (t = (0, i.jsxs)(i.Fragment, {
                    children: [e, a]
                }), eK[233] = e, eK[234] = a, eK[235] = t) : t = eK[235], tO = t
            }
            if (a0 ? ek = "responsiveSheet" : tl && (ek = "share"), eK[236] !== e4?.layout || eK[237] !== a0 ? (a0 && (ey = e4?.layout === "two-rows" ? "imageSheetTwoRows" : "imageSheet"), eK[236] = e4?.layout, eK[237] = a0, eK[238] = ey) : ey = eK[238], null != eQ) {
                let e;
                eK[239] !== eY?.previewSrc || eK[240] !== eQ || eK[241] !== t_ || eK[242] !== a6 ? (e = () => eQ.preview(t_, eY?.previewSrc ?? a6 ?? null, () => {
                    aB(null), az("idle")
                }), eK[239] = eY?.previewSrc, eK[240] = eQ, eK[241] = t_, eK[242] = a6, eK[243] = e) : e = eK[243], ex = e
            } else {
                let e;
                eK[244] !== te || eK[245] !== aF || eK[246] !== aG || eK[247] !== eY || eK[248] !== ey || eK[249] !== ay || eK[250] !== a7 || eK[251] !== a5 || eK[252] !== ti || eK[253] !== at || eK[254] !== aa || eK[255] !== as || eK[256] !== a6 || eK[257] !== al || eK[258] !== ao || eK[259] !== au.queryClient || eK[260] !== ac || eK[261] !== aL || eK[262] !== aN || eK[263] !== a0 ? (e = e => null != eY ? (0, i.jsx)(I.a, {
                    ariaLabel: a5 ? ay.formatMessage(e3.imagesPreview) : eY.alt,
                    variant: "image",
                    classicImagePreviewEligible: !a5 && !a0,
                    presentation: ey,
                    children: a5 || null == eY.previewSrc ? (0, i.jsx)(e1, {
                        src: a6,
                        isLoading: a7
                    }) : (0, i.jsx)("img", {
                        alt: eY.alt,
                        className: a0 ? void 0 : "block size-full object-contain",
                        referrerPolicy: "no-referrer",
                        src: eY.previewSrc
                    })
                }) : (0, i.jsxs)(i.Fragment, {
                    children: [ao?.preview != null && (0, i.jsx)(I.a, {
                        ariaLabel: ay.formatMessage({
                            id: "chatgptConversations.shareDialog.responseRegionPreviewLabel",
                            defaultMessage: "Preview of the shared content"
                        }),
                        expandedContent: ao.preview,
                        expandPreviewEventLogger: e,
                        variant: "response",
                        children: ao.preview
                    }), null == ao && te?.preview != null && ti && (0, i.jsx)(I.a, {
                        ariaLabel: ay.formatMessage({
                            id: "shareDialog.widget.previewLabel",
                            defaultMessage: "Preview of the shared widget"
                        }),
                        expandedContent: te.preview,
                        expandPreviewEventLogger: e,
                        variant: "response",
                        children: te.preview
                    }), null == ao && te?.preview != null && !ti && (0, i.jsx)(I.a, {
                        expandedContent: te.preview,
                        expandPreviewEventLogger: e,
                        variant: "response",
                        children: te.preview
                    }), null == ao && null == te && (0, i.jsx)(G.b, {
                        expandPreviewEventLogger: e,
                        prompt: as,
                        response: aN ? void 0 : al,
                        serverConversationId: ac,
                        expandedHistory: (null == al || aN) && null != at && null == aF ? {
                            load: async e => (await au.queryClient.fetchQuery({
                                queryKey: aG,
                                queryFn: () => at(e),
                                staleTime: 1 / 0
                            })).turns,
                            sessionId: aL
                        } : void 0,
                        turns: null == al || aN ? aF?.turns ?? aa : void 0
                    })]
                }), eK[244] = te, eK[245] = aF, eK[246] = aG, eK[247] = eY, eK[248] = ey, eK[249] = ay, eK[250] = a7, eK[251] = a5, eK[252] = ti, eK[253] = at, eK[254] = aa, eK[255] = as, eK[256] = a6, eK[257] = al, eK[258] = ao, eK[259] = au.queryClient, eK[260] = ac, eK[261] = aL, eK[262] = aN, eK[263] = a0, eK[264] = e) : e = eK[264], ex = e
            }
            if (a0) {
                let e, a = ex;
                eK[265] !== eQ || eK[266] !== tF || eK[267] !== a ? (e = e => {
                    let t = a(e);
                    return (0, i.jsxs)(i.Fragment, {
                        children: [null == eQ ? t : (0, i.jsx)("div", {
                            className: "px-6",
                            children: t
                        }), null != tF && (0, i.jsx)("p", {
                            className: "mt-3 text-center text-sm text-secondary",
                            children: tF
                        })]
                    })
                }, eK[265] = eQ, eK[266] = tF, eK[267] = a, eK[268] = e) : e = eK[268], ex = e
            }
            let tH = eo,
                tW = tO;
            eK[269] !== tI || eK[270] !== tl ? (e_ = tl ? void 0 : (0, i.jsx)(h.a, {
                ...tI
            }), eK[269] = tI, eK[270] = tl, eK[271] = e_) : e_ = eK[271], eK[272] !== tA ? (eC = (0, i.jsx)(h.a, {
                ...tA
            }), eK[272] = tA, eK[273] = eC) : eC = eK[273];
            let tU = eQ?.actionsDisabled || tT || tC || a8 || "blocked" === er,
                tz = t_ || tT || af,
                tq = !tl && t_;
            eK[274] !== tD || eK[275] !== a2 || eK[276] !== tl ? (eT = tl ? e => {
                a2 && tD("CHATGPT_SHARE_FLOW_ACTION_SHEET_PRESENTED"), e.preventDefault(), e.currentTarget instanceof HTMLElement && e.currentTarget.focus()
            } : void 0, eK[274] = tD, eK[275] = a2, eK[276] = tl, eK[277] = eT) : eT = eK[277];
            let tB = ek,
                tK = a0 ? "imageSheet" : void 0,
                tV = a0 && e4?.layout === "two-rows";
            eK[278] !== ak || eK[279] !== av || eK[280] !== aw || eK[281] !== tv || eK[282] !== eV || eK[283] !== er || eK[284] !== te || eK[285] !== tR || eK[286] !== tN || eK[287] !== tG || eK[288] !== eY || eK[289] !== eQ?.actionsDisabled || eK[290] !== a9 || eK[291] !== aK || eK[292] !== tC || eK[293] !== tT || eK[294] !== a1 || eK[295] !== a8 || eK[296] !== af || eK[297] !== tn || eK[298] !== a3 || eK[299] !== t_ || eK[300] !== e5 || eK[301] !== e4 || eK[302] !== e6 || eK[303] !== e9 || eK[304] !== as || eK[305] !== ar || eK[306] !== tj || eK[307] !== a6 || eK[308] !== ao || eK[309] !== au || eK[310] !== ac || eK[311] !== tm || eK[312] !== aN || eK[313] !== to || eK[314] !== a0 || eK[315] !== tl || eK[316] !== ap ? (eS = tl ? (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(eM, {
                    projectStyleEligible: !a3 && null == as && null == te && null == ao && (a1 || null != e5 && !aN),
                    mobileImageActions: a0 && null != e4 ? {
                        experience: e4,
                        canNativeShare: "public" === tm && null != tv && (0, U.a)(tv?.shareLinkUrl),
                        onNativeShare: () => {
                            tN()
                        },
                        rowScrollPositions: e6
                    } : void 0,
                    copyLabel: tj,
                    copyDisabled: eQ?.actionsDisabled || tT || tC || t_ || a8 || "blocked" === er,
                    isBusy: t_ || tT || af,
                    isDownloading: aK,
                    socialDestinationsDisabled: eQ?.actionsDisabled || tT || tC || t_ || a8 || "public" !== tm || "blocked" === er,
                    showSocialDestinations: "public" === tm,
                    additionalActions: void 0,
                    onDownload: null == eY || a8 ? void 0 : () => {
                        tR()
                    },
                    onCopy: () => {
                        a3 || tn || (0, F.g)(au, "copy", a1 ? a9 : void 0)
                    },
                    onSocialShare: (e, a) => {
                        tG(e, a)
                    }
                })
            }) : void 0, eK[278] = ak, eK[279] = av, eK[280] = aw, eK[281] = tv, eK[282] = eV, eK[283] = er, eK[284] = te, eK[285] = tR, eK[286] = tN, eK[287] = tG, eK[288] = eY, eK[289] = eQ?.actionsDisabled, eK[290] = a9, eK[291] = aK, eK[292] = tC, eK[293] = tT, eK[294] = a1, eK[295] = a8, eK[296] = af, eK[297] = tn, eK[298] = a3, eK[299] = t_, eK[300] = e5, eK[301] = e4, eK[302] = e6, eK[303] = e9, eK[304] = as, eK[305] = ar, eK[306] = tj, eK[307] = a6, eK[308] = ao, eK[309] = au, eK[310] = ac, eK[311] = tm, eK[312] = aN, eK[313] = to, eK[314] = a0, eK[315] = tl, eK[316] = ap, eK[317] = eS) : eS = eK[317], eK[318] !== ed || eK[319] !== eh || eK[320] !== tL || eK[321] !== te?.metadata.widgetName || eK[322] !== te?.metadata.widgetType || eK[323] !== ac || eK[324] !== aL || eK[325] !== eg ? (eI = JSON.stringify([ed, eh, tL, ac, aL, eg, te?.metadata.widgetName, te?.metadata.widgetType]), eK[318] = ed, eK[319] = eh, eK[320] = tL, eK[321] = te?.metadata.widgetName, eK[322] = te?.metadata.widgetType, eK[323] = ac, eK[324] = aL, eK[325] = eg, eK[326] = eI) : eI = eK[326], eK[327] !== ed || eK[328] !== eh || eK[329] !== tL || eK[330] !== te?.metadata || eK[331] !== au || eK[332] !== ac || eK[333] !== aL || eK[334] !== eg ? (eA = () => (0, F.a)(au, {
                actor: ed,
                attachmentType: eh,
                contentType: tL,
                conversationId: ac,
                shareSessionId: aL,
                source: eg,
                widgetMetadata: te?.metadata
            }), eK[327] = ed, eK[328] = eh, eK[329] = tL, eK[330] = te?.metadata, eK[331] = au, eK[332] = ac, eK[333] = aL, eK[334] = eg, eK[335] = eA) : eA = eK[335], eK[336] !== ex || eK[337] !== eI || eK[338] !== eA ? (ej = (0, i.jsx)(eU, {
                createEventLogger: eA,
                children: ex
            }, eI), eK[336] = ex, eK[337] = eI, eK[338] = eA, eK[339] = ej) : ej = eK[339], eK[340] !== aD || eK[341] !== e$ || eK[342] !== ay || eK[343] !== tT || eK[344] !== ts || eK[345] !== t_ || eK[346] !== aE || eK[347] !== tc || eK[348] !== tm || eK[349] !== td || eK[350] !== a0 || eK[351] !== tl ? (eL = tl ? (0, i.jsxs)(i.Fragment, {
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
                })), !a0 && (0, i.jsx)(ez, {
                    audience: tm,
                    contentType: tc,
                    isPoll: ts,
                    showImageRightsNotice: td
                })]
            }) : void 0, eK[340] = aD, eK[341] = e$, eK[342] = ay, eK[343] = tT, eK[344] = ts, eK[345] = t_, eK[346] = aE, eK[347] = tc, eK[348] = tm, eK[349] = td, eK[350] = a0, eK[351] = tl, eK[352] = eL) : eL = eK[352], eK[353] !== er || eK[354] !== eQ || eK[355] !== aW || eK[356] !== tk ? (eE = null == er ? void 0 : {
                content: (0, i.jsx)(e2, {
                    error: er
                }),
                copyUrl: "copy-failed" === er ? tk : void 0,
                onRetry: "conversation-load-failed" === er ? () => {
                    aW()
                } : void 0,
                preventsSharing: "blocked" === er && null == eQ || "conversation-load-failed" === er
            }, eK[353] = er, eK[354] = eQ, eK[355] = aW, eK[356] = tk, eK[357] = eE) : eE = eK[357];
            let tY = td && !tx && !a1,
                tQ = !tr || ta;
            return eK[358] !== Z || eK[359] !== tY || eK[360] !== tQ ? (eP = (0, i.jsx)(e0, {
                showImageRightsNotice: tY,
                showContentNotices: tQ,
                privacyNotices: Z
            }), eK[358] = Z, eK[359] = tY, eK[360] = tQ, eK[361] = eP) : eP = eK[361], eK[362] !== aT || eK[363] !== tD || eK[364] !== a2 ? (eD = () => {
                a2 && tD("CHATGPT_SHARE_FLOW_ACTION_DISMISSED"), aT()
            }, eK[362] = aT, eK[363] = tD, eK[364] = a2, eK[365] = eD) : eD = eK[365], eK[366] !== tP ? (eq = () => {
                tP()
            }, eK[366] = tP, eK[367] = eq) : eq = eK[367], eK[368] !== ek || eK[369] !== eo || eK[370] !== th || eK[371] !== tO || eK[372] !== e_ || eK[373] !== eC || eK[374] !== tU || eK[375] !== tz || eK[376] !== tq || eK[377] !== eT || eK[378] !== tK || eK[379] !== tV || eK[380] !== eS || eK[381] !== ej || eK[382] !== eL || eK[383] !== eE || eK[384] !== eP || eK[385] !== eD || eK[386] !== eq ? (eB = (0, i.jsx)(S.a, {
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
                info: eL,
                error: eE,
                notices: eP,
                onClose: eD,
                onSubmit: eq
            }), eK[368] = ek, eK[369] = eo, eK[370] = th, eK[371] = tO, eK[372] = e_, eK[373] = eC, eK[374] = tU, eK[375] = tz, eK[376] = tq, eK[377] = eT, eK[378] = tK, eK[379] = tV, eK[380] = eS, eK[381] = ej, eK[382] = eL, eK[383] = eE, eK[384] = eP, eK[385] = eD, eK[386] = eq, eK[387] = eB) : eB = eK[387], eB
        }

        function eN(e) {
            return null != e.src && "completed" === e.status && !e.isPreview
        }

        function eG() {}

        function eR() {}

        function eF(e) {
            let {
                shareLinkUrl: a
            } = e;
            return a
        }

        function eO() {
            throw Error("Image share is unavailable")
        }

        function eH() {
            return E.CodexRequest.safeGet("/wham/accounts/check")
        }

        function eW() {
            return crypto.randomUUID()
        }

        function eU(e) {
            let a, t = (0, s.c)(3),
                {
                    children: i,
                    createEventLogger: n
                } = e,
                [r] = (0, c.useState)(n);
            return t[0] !== i || t[1] !== r ? (a = i(r), t[0] = i, t[1] = r, t[2] = a) : a = t[2], a
        }

        function ez(e) {
            let a, t, n, r, o, l, c, d = (0, s.c)(58),
                {
                    audience: g,
                    contentType: p,
                    isPoll: u,
                    showImageRightsNotice: m
                } = e,
                b = "workspace" === g ? v.Re : v.Wd;
            if ("workspace" === g) {
                let e, s;
                if (m) {
                    let a;
                    d[0] !== p ? (a = (0, i.jsx)(h.a, {
                        id: "chatgptConversations.shareDialog.workspaceMediaRightsAudienceWithLearnMore",
                        defaultMessage: "Links are visible to workspace members only. {contentType, select, gif {Confirm you have the rights to share this GIF.} images {Confirm you have the rights to share these images.} other {Confirm you have the rights to share this image.}} {contentType, select, conversation {Memory sources won't be shared with viewers. } other {}}<learnMore>Learn more</learnMore>",
                        values: {
                            contentType: p,
                            learnMore: eZ
                        }
                    }), d[0] = p, d[1] = a) : a = d[1], e = a
                } else if ("conversation" === p) {
                    let a;
                    d[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, i.jsx)(h.a, {
                        id: "chatgptConversations.shareDialog.workspaceConversationMemoryDisclosure",
                        defaultMessage: "Links are visible to workspace members only. Memory sources won't be shared with viewers. <learnMore>Learn more</learnMore>",
                        values: {
                            learnMore: eX
                        }
                    }), d[2] = a) : a = d[2], e = a
                } else {
                    let a;
                    d[3] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, i.jsx)(h.a, {
                        ...e3.workspaceLinksVisibleWithLearnMore,
                        values: {
                            learnMore: eJ
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
                        defaultMessage: "Share a link to this content"
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
                        defaultMessage: "Share a link to this content"
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
                            values: {
                                learnMore: eQ
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
                        learnMore: eY
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
                            values: {
                                learnMore: eV
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
                    ...e3.sharePublicLinkToMessage
                }), d[35] = u, d[36] = e) : e = d[36], a = e, d[37] !== u ? (s = (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(i.Fragment, {
                        children: u ? (0, i.jsx)(h.a, {
                            id: "chatgptConversations.shareDialog.poll.publicAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access and vote on this poll. <learnMore>Learn more</learnMore>",
                            values: {
                                learnMore: eK
                            }
                        }) : (0, i.jsx)(h.a, {
                            id: "chatgptConversations.shareDialog.messagePublicLinkAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access this message. <learnMore>Learn more</learnMore>",
                            values: {
                                learnMore: eB
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
                                learnMore: eq
                            }
                        })
                    }), null]
                }), d[40] = s) : s = d[40], t = s
            } else {
                let e, s;
                d[41] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    ...e3.sharePublicLinkToConversation
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

        function eq(e) {
            return (0, i.jsx)(K, {
                children: e
            })
        }

        function eB(e) {
            return (0, i.jsx)(K, {
                children: e
            })
        }

        function eK(e) {
            return (0, i.jsx)(K, {
                children: e
            })
        }

        function eV(e) {
            return (0, i.jsx)(K, {
                children: e
            })
        }

        function eY(e) {
            return (0, i.jsx)(K, {
                children: e
            })
        }

        function eQ(e) {
            return (0, i.jsx)(K, {
                children: e
            })
        }

        function e$(e) {
            return (0, i.jsx)(K, {
                children: e
            }, "learn-more")
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
            let a = (0, s.c)(5),
                {
                    error: t
                } = e;
            switch (t) {
                case "receiver-files-unsupported": {
                    let e;
                    return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e3.receiverFileCopyDeferred
                    }), a[0] = e) : e = a[0], e
                }
                case "blocked": {
                    let e;
                    return a[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e3.shareBlocked
                    }), a[1] = e) : e = a[1], e
                }
                case "conversation-load-failed": {
                    let e;
                    return a[2] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e3.shareConversationLoadFailed
                    }), a[2] = e) : e = a[2], e
                }
                case "copy-failed": {
                    let e;
                    return a[3] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e3.shareCopyFailed
                    }), a[3] = e) : e = a[3], e
                }
                case "create-failed": {
                    let e;
                    return a[4] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e3.shareCreateFailed
                    }), a[4] = e) : e = a[4], e
                }
            }
        }
        let e3 = (0, g.f)({
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
            w = t("Ymcw"),
            k = t("aPiu"),
            y = t("FqCE"),
            x = t("NddG"),
            _ = t("RUBg"),
            C = t("zSQm"),
            T = t("ZjkF"),
            S = t("WAdu"),
            I = t("TxRk"),
            A = t("ABl9"),
            j = t("vLpE"),
            M = t("kfGJ"),
            L = t("qKAH"),
            E = t("zHp1"),
            P = t("HAEQ"),
            D = t("dMLa"),
            N = t("taWv"),
            G = t("U5zD"),
            R = t("Zm8H"),
            F = t("OOaz"),
            O = t("TUMj"),
            H = t("drbS"),
            W = t("jAnS");
        let U = (0, f.a)(async () => (await Promise.all([t.e(418851), t.e(109308), t.e(399565), t.e(257798), t.e(447351), t.e(617936), t.e(807489), t.e(337882), t.e(955979), t.e(646436), t.e(7078), t.e(200429), t.e(698524), t.e(956483), t.e(87162), t.e(396705), t.e(155568), t.e(731863), t.e(767086), t.e(76629), t.e(514085), t.e(204542), t.e(851456), t.e(709215), t.e(704809), t.e(329156), t.e(829555), t.e(115121), t.e(658890)]).then(t.bind(t, "IQg5"))).WritingBlockDirectiveRenderer, P.a),
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
                    n = "response", g[11] !== b ? (e = (0, F.c)(b), g[11] = b, g[12] = e) : e = g[12];
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
                        conversationId: (0, F.c)(s),
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
                        let t = (0, G.g)(e.attachment, e.attachment.name);
                        if (null == t) continue;
                        a = t
                    } else {
                        let t = e.id.replace(/^(?:connector|plugin):/u, "");
                        if (t !== A.a && !R.a.has(t) && null == (0, g.z)(e.id)) continue;
                        a = (0, p.b)(e.label, A.b)
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
            if (e.href !== A.b) {
                let a, t = e[x.a];
                return n[0] !== e.children || n[1] !== e.href || n[2] !== e.title || n[3] !== t ? (a = (0, i.jsx)(q, {
                    href: e.href,
                    title: e.title,
                    "data-markdown-raw-link-label": t,
                    children: e.children
                }), n[0] = e.children, n[1] = e.href, n[2] = e.title, n[3] = t, n[4] = a) : a = n[4], a
            }
            let r = e[x.a];
            return n[5] !== e.children || n[6] !== r ? (a = "string" == typeof r ? (0, p.c)(r) : (0, T.a)(e.children), n[5] = e.children, n[6] = r, n[7] = a) : a = n[7], n[8] !== a ? (t = (0, i.jsx)(I.a, {
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
            n[0] !== l ? (a = (0, N.c)((0, F.c)(l)), n[0] = l, n[1] = a) : a = n[1];
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
                        isBusy: I,
                        isDismissalDisabled: A,
                        notices: j,
                        onClose: M,
                        onOpenAutoFocus: L,
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
                v[2] !== I ? (t = I ? null : (0, i.jsx)(c.Ge, {}), v[2] = I, v[3] = t) : t = v[3], v[4] !== y || v[5] !== t ? (p = (0, i.jsxs)(i.Fragment, {
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
                v[9] !== U || v[10] !== I || v[11] !== z ? (u = (0, i.jsx)(o.a, {
                    color: "outline",
                    disabled: z,
                    loading: I,
                    size: "medium",
                    type: "submit",
                    children: U
                }), v[9] = U, v[10] = I, v[11] = z, v[12] = u) : u = v[12];
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
                }), v[16] = w, v[17] = x, v[18] = C, v[19] = S, v[20] = H, v[21] = j, v[22] = N, v[23] = D, v[24] = f) : f = v[24], v[25] !== _ || v[26] !== A || v[27] !== M || v[28] !== L || v[29] !== E || v[30] !== N || v[31] !== R || v[32] !== G || v[33] !== m || v[34] !== B || v[35] !== K || v[36] !== f ? (b = (0, i.jsx)(g.a, {
                    title: m,
                    subtitle: G,
                    compactImageSheetFooter: _,
                    isDismissalDisabled: A,
                    onClose: M,
                    onOpenAutoFocus: L,
                    onPortalContainerChange: E,
                    onSubmit: B,
                    size: R,
                    presentation: N,
                    footer: K,
                    children: f
                }), v[25] = _, v[26] = A, v[27] = M, v[28] = L, v[29] = E, v[30] = N, v[31] = R, v[32] = G, v[33] = m, v[34] = B, v[35] = K, v[36] = f, v[37] = b) : b = v[37], b
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
                    presentation: I,
                    variant: A
                } = e,
                j = void 0 === _ ? "immediate" : _,
                M = void 0 !== T && T,
                L = void 0 === A ? "default" : A,
                E = (0, c.a)();
            u[0] === Symbol.for("react.memo_cache_sentinel") ? (a = {
                layer: "3136899520",
                parameter: "classic_image_preview"
            }, u[0] = a) : a = u[0];
            let P = (0, o.x)(void 0 !== y && y ? f.b : null, a) ? "border-transparent bg-transparent" : "border-default bg-surface",
                D = "transcript" === L ? "h-auto" : "aspect-[1200/630]";
            u[1] !== P || u[2] !== D ? (t = (0, r.b)("relative min-h-56 overflow-hidden rounded-lg border select-none", P, D), u[1] = P, u[2] = D, u[3] = t) : t = u[3];
            let N = t;
            return null != I && (N = "imageSheetTwoRows" === I ? "imageSheetTwoRowsPreview-bFaioZ" : "imageSheetPreview-rzCCMf"), u[4] !== v || u[5] !== E || u[6] !== L ? (n = v ?? E.formatMessage(S["transcript" === L ? "default" : L]), u[4] = v, u[5] = E, u[6] = L, u[7] = n) : n = u[7], u[8] !== k || u[9] !== M || u[10] !== I || u[11] !== L ? (l = M ? (0, i.jsxs)("div", {
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
                children: [k, null == I && ("default" === L || "response" === L) && (0, i.jsx)("div", {
                    className: "pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface to-transparent"
                })]
            }), u[8] = k, u[9] = M, u[10] = I, u[11] = L, u[12] = l) : l = u[12], u[13] !== l || u[14] !== n ? (h = (0, i.jsx)("div", {
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
            let a, t, r, h, m, b, v, w, x, I, A, j, M, L, E, P, D = (0, s.c)(33),
                {
                    className: N,
                    children: G,
                    eventLogger: R,
                    expandedContentLoad: F
                } = e,
                O = (0, c.a)();
            D[0] === Symbol.for("react.memo_cache_sentinel") ? (a = {
                layer: "3136899520",
                parameter: "expand_share_preview"
            }, D[0] = a) : a = D[0];
            let H = (0, o.x)(f.b, a);
            if (D[1] !== R ? (t = () => {
                    R?.eligible()
                }, r = [R], D[1] = R, D[2] = t, D[3] = r) : (t = D[2], r = D[3]), (0, l.useEffect)(t, r), D[4] !== H || D[5] !== R ? (h = () => {
                    H && R?.shown()
                }, m = [H, R], D[4] = H, D[5] = R, D[6] = h, D[7] = m) : (h = D[6], m = D[7]), (0, l.useEffect)(h, m), !H) return null;
            D[8] !== O ? (b = O.formatMessage(S.expand), D[8] = O, D[9] = b) : b = D[9];
            let W = b;
            D[10] === Symbol.for("react.memo_cache_sentinel") ? (v = {
                "aria-describedby": void 0
            }, D[10] = v) : v = D[10], D[11] !== R ? (w = e => {
                e && R?.selected()
            }, D[11] = R, D[12] = w) : w = D[12], D[13] === Symbol.for("react.memo_cache_sentinel") ? (x = (0, i.jsx)(u.O, {}), D[13] = x) : x = D[13], D[14] !== N || D[15] !== W ? (I = (0, i.jsx)(g.a, {
                className: N,
                color: "mapSurface",
                radius: "full",
                size: "inputIcon",
                "aria-label": W,
                type: "button",
                children: x
            }), D[14] = N, D[15] = W, D[16] = I) : I = D[16], D[17] !== W || D[18] !== I ? (A = (0, i.jsx)(n.a, {
                content: W,
                children: I
            }), D[17] = W, D[18] = I, D[19] = A) : A = D[19], D[20] === Symbol.for("react.memo_cache_sentinel") ? (j = (0, i.jsx)(p.e, {
                className: "sr-only",
                children: (0, i.jsx)(d.a, {
                    ...S.expandedTitle
                })
            }), D[20] = j) : j = D[20], D[21] !== O ? (M = O.formatMessage(S.expandedTitle), D[21] = O, D[22] = M) : M = D[22];
            let U = "immediate" === F ? R?.loaded : void 0;
            return D[23] !== G || D[24] !== U ? (L = (0, i.jsx)("fieldset", {
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
                    children: G
                })
            }), D[23] = G, D[24] = U, D[25] = L) : L = D[25], D[26] !== M || D[27] !== L ? (E = (0, i.jsx)("div", {
                className: "max-h-[80dvh] overflow-auto overscroll-contain px-5 pt-12 pb-5",
                "aria-label": M,
                role: "region",
                tabIndex: 0,
                children: L
            }), D[26] = M, D[27] = L, D[28] = E) : E = D[28], D[29] !== A || D[30] !== E || D[31] !== w ? (P = (0, i.jsxs)(p.a, {
                size: "wide",
                variant: "chatgpt",
                backdrop: "modal",
                autoFocusCloseButton: !0,
                contentProps: v,
                onOpenChange: w,
                triggerContent: A,
                children: [j, E]
            }), D[29] = A, D[30] = E, D[31] = w, D[32] = P) : P = D[32], P
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