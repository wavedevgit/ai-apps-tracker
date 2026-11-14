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
            C = t("akkX"),
            T = t("FGv0"),
            S = t("TnP0"),
            I = t("qKAH"),
            j = t("hZax"),
            A = t("zHp1"),
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
            q = t("rfhJ"),
            z = t("ZtSy");

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
        var V = t("k5RO"),
            Y = t("slpy"),
            Q = t("on57"),
            X = t("Sm6l"),
            $ = t("WAV0"),
            J = t("qoug"),
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
            eT = t("D0Xf"),
            eS = t("QgYZ"),
            eI = t("YXhi");

        function ej(e) {
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
                    let j = {
                            id: "copy",
                            disabled: g,
                            icon: e,
                            label: h,
                            onClick: b
                        },
                        A = C ? [{
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
                        M = [...d, j, ...A],
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
                        return (0, i.jsx)($.a, {
                            extension: "download" === t,
                            children: (0, i.jsxs)(X.a, {
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
                        let e, a, t, s, n, r, l = [...d, ...A, j];
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
            }), d[10] = f, d[11] = S, d[12] = o) : o = d[12], d[13] !== h || d[14] !== g || d[15] !== p || d[16] !== y || d[17] !== w || d[18] !== o || d[19] !== r || d[20] !== x ? (c = (0, i.jsxs)(X.a, {
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
            let a, t, n, r, o, c, h, g, p, u = (0, s.c)(66),
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
                    projectStyleEligible: A
                } = e,
                M = void 0 !== w && w,
                L = (0, j.l)(),
                E = void 0 !== A && A && null == I && !!L.userID?.trim();
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
                F = (0, d.a)(),
                {
                    client: G
                } = (0, j.h)();
            u[3] !== G ? (n = G.getContext().user?.country?.trim().toUpperCase(), u[3] = G, u[4] = n) : n = u[4];
            let R = n,
                O = null == I && "JP" === R && x,
                H = !O;
            u[5] !== H ? (r = {
                layer: "494762337",
                parameter: "enabled",
                disableExposureLog: H
            }, u[5] = H, u[6] = r) : r = u[6];
            let W = (0, l.x)(O ? ee.b : null, r),
                U = O && W;
            if (null != I) {
                let e;
                return u[7] !== T || u[8] !== f || u[9] !== m || u[10] !== R || u[11] !== b || u[12] !== M || u[13] !== I.canNativeShare || u[14] !== I.experience || u[15] !== I.onNativeShare || u[16] !== I.rowScrollPositions || u[17] !== _ || u[18] !== C || u[19] !== S || u[20] !== x || u[21] !== y ? (e = (0, i.jsx)(ej, {
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
                    country: R,
                    rowScrollPositions: I.rowScrollPositions
                }), u[7] = T, u[8] = f, u[9] = m, u[10] = R, u[11] = b, u[12] = M, u[13] = I.canNativeShare, u[14] = I.experience, u[15] = I.onNativeShare, u[16] = I.rowScrollPositions, u[17] = _, u[18] = C, u[19] = S, u[20] = x, u[21] = y, u[22] = e) : e = u[22], e
            }
            if (u[23] !== T || u[24] !== f || u[25] !== m || u[26] !== F || u[27] !== b || u[28] !== M || u[29] !== _ || u[30] !== C || u[31] !== S || u[32] !== U || u[33] !== x || u[34] !== y || u[35] !== P) {
                o = Symbol.for("react.early_return_sentinel");
                e: {
                    let e, a, t, s = null == C ? [] : [{
                        id: "download",
                        largeIcon: (0, i.jsx)(v.s, {
                            "aria-hidden": "true"
                        }),
                        disabled: M,
                        icon: (0, i.jsx)(v.r, {}),
                        label: F.formatMessage({
                            id: "chatgptConversations.shareDialog.destination.download.label",
                            defaultMessage: "Download"
                        }),
                        onClick: C
                    }];u[38] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(v.He, {
                        "aria-hidden": "true"
                    }), u[38] = e) : e = u[38],
                    u[39] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, i.jsx)(v.Ge, {}), u[39] = a) : a = u[39],
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
                            intl: F,
                            onSocialShare: S
                        })] : [], eL({
                            destination: "x",
                            disabled: y,
                            intl: F,
                            onSocialShare: S
                        }), eL({
                            destination: "linkedin",
                            disabled: y,
                            intl: F,
                            onSocialShare: S
                        }), ...U ? [] : [eL({
                            destination: "reddit",
                            disabled: y,
                            intl: F,
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
                                children: (0, i.jsx)(X.a, {
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
                        u[44] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(v.Fe, {}), u[44] = e) : e = u[44], u[45] !== m ? (a = (0, i.jsx)("span", {
                            "aria-live": "polite",
                            children: m
                        }), u[45] = m, u[46] = a) : a = u[46], u[47] !== f || u[48] !== m || u[49] !== b || u[50] !== _ || u[51] !== a ? (t = (0, i.jsxs)(X.a, {
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
                            children: [r.map(n), T, (0, i.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [s.map(n), t]
                            })]
                        });
                        break e
                    }
                    c = [n, ...r, ...s]
                }
                u[23] = T, u[24] = f, u[25] = m, u[26] = F, u[27] = b, u[28] = M, u[29] = _, u[30] = C, u[31] = S, u[32] = U, u[33] = x, u[34] = y, u[35] = P, u[36] = o, u[37] = c
            } else o = u[36], c = u[37];
            if (o !== Symbol.for("react.early_return_sentinel")) return o;
            let q = c,
                z = null == T && "flex-wrap justify-center gap-x-6 gap-y-4",
                B = null != T && "gap-3",
                K = null != T && N && "flex-wrap justify-center",
                V = null != T && !N && "justify-start overflow-x-auto sm:justify-center";
            return u[53] !== z || u[54] !== B || u[55] !== K || u[56] !== V ? (h = (0, Q.b)("flex w-full", z, B, K, V), u[53] = z, u[54] = B, u[55] = K, u[56] = V, u[57] = h) : h = u[57], u[58] !== q || u[59] !== b || u[60] !== M ? (g = q.map(e => {
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
            }), u[58] = q, u[59] = b, u[60] = M, u[61] = g) : g = u[61], u[62] !== T || u[63] !== h || u[64] !== g ? (p = (0, i.jsxs)("div", {
                className: h,
                children: [g, T]
            }), u[62] = T, u[63] = h, u[64] = g, u[65] = p) : p = u[65], p
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
                    a = (0, i.jsx)(v.pj, {
                        "aria-hidden": "true"
                    }), t = (0, i.jsx)(v.qj, {
                        "aria-hidden": "true"
                    }), s = o.formatMessage({
                        id: "chatgptConversations.shareDialog.destination.x.label",
                        defaultMessage: "X"
                    });
                    break;
                case "linkedin":
                    a = (0, i.jsx)(J.a, {
                        "aria-hidden": "true"
                    }), t = (0, i.jsx)(v.Ie, {
                        "aria-hidden": "true"
                    }), s = o.formatMessage({
                        id: "chatgptConversations.shareDialog.destination.linkedin.label",
                        defaultMessage: "LinkedIn"
                    });
                    break;
                case "reddit":
                    a = (0, i.jsx)(v.Yg, {
                        "aria-hidden": "true"
                    }), t = (0, i.jsx)(v.Zg, {
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
            let a, t, g, m, v, k, E, z, B, K, Y, Q, X, $, J, Z, ee, ea, et, ei, es, en, er, eo, el, ec, ed, eh, eg, ep, eu, em, ef, eb, ev, ew, ek, ey, ex, e_, eC, eT, eS, eI, ej, eA, eL, eE, eP, eD, eB, eK, eV = (0, s.c)(388),
                {
                    currentNodeId: eY,
                    image: eQ,
                    imagePromptTemplate: eX,
                    imageShareOptions: e$,
                    recoveryShareLink: eJ,
                    publishedShareLink: eZ,
                    publishedWidget: e0,
                    messageIds: e6,
                    mobileImageExperience: e7,
                    mobileImageRowScrollPositions: e8,
                    trackMobileImageShareLifecycle: e9,
                    onImageShareLinkPrepared: ae,
                    onClose: aa,
                    onResult: at,
                    previewTurns: ai,
                    loadExpandedConversation: as,
                    privacyNotices: an,
                    prompt: ar,
                    postShareSource: ao,
                    receiverShareLink: al,
                    responseRegion: ac,
                    response: ad,
                    serverConversationId: ah,
                    shareSessionId: ag,
                    source: ap,
                    title: au,
                    widget: am
                } = e,
                af = (0, l.y)(_.a),
                ab = (0, j.j)("3136899520"),
                [av, aw] = (0, c.useState)(!1),
                ak = (0, l.z)(null)?.data,
                ay = (0, l.z)(null),
                ax = (0, l.x)(null, ah),
                a_ = (0, d.a)(),
                aC = (0, c.useRef)(!1),
                aT = (0, c.useRef)(!1);
            eV[0] !== at ? (a = () => (aC.current = !0, () => {
                aC.current = !1, queueMicrotask(() => {
                    aC.current || aT.current || (aT.current = !0, at?.(!1))
                })
            }), t = [at], eV[0] = at, eV[1] = a, eV[2] = t) : (a = eV[1], t = eV[2]), (0, c.useEffect)(a, t), eV[3] !== at ? (g = function(e) {
                aT.current || (aT.current = !0, at?.(e))
            }, eV[3] = at, eV[4] = g) : g = eV[4];
            let aS = g;
            eV[5] !== aS || eV[6] !== aa ? (m = function() {
                aS(!1), aa()
            }, eV[5] = aS, eV[6] = aa, eV[7] = m) : m = eV[7];
            let aI = m,
                aj = (0, c.useContext)(p.a);
            eV[8] !== eQ || eV[9] !== af || eV[10] !== ah ? (v = null == eQ ? void 0 : (0, W.a)(af, ah, eQ), eV[8] = eQ, eV[9] = af, eV[10] = ah, eV[11] = v) : v = eV[11];
            let aA = v;
            eV[12] !== eX || eV[13] !== aA || eV[14] !== eZ || eV[15] !== al || eV[16] !== eJ || eV[17] !== af.queryClient ? (k = () => al ?? eZ ?? eJ ?? (null == aA || null != eX ? null : af.queryClient.getQueryData(aA.queryKey) ?? null), eV[12] = eX, eV[13] = aA, eV[14] = eZ, eV[15] = al, eV[16] = eJ, eV[17] = af.queryClient, eV[18] = k) : k = eV[18];
            let [aM, aL] = (0, c.useState)(k), [aE] = (0, c.useState)(eU), aP = ag ?? aE, [aD, aN] = (0, c.useState)("message");
            eV[19] !== e6 || eV[20] !== ai || eV[21] !== ad || eV[22] !== ab ? (E = null != e6 && null != ad && null != ai && ab.get("message_share_scope_picker", !1), eV[19] = e6, eV[20] = ai, eV[21] = ad, eV[22] = ab, eV[23] = E) : E = eV[23];
            let aF = E,
                aG = aF && "conversation" === aD;
            eV[24] !== aP ? (z = ["expanded-conversation-share", aP], eV[24] = aP, eV[25] = z) : z = eV[25];
            let aR = z,
                aO = aG && null != as;
            eV[26] !== as ? (B = e => {
                let {
                    signal: a
                } = e;
                if (null == as) throw Error("Expanded conversation loader unavailable");
                return as(a)
            }, eV[26] = as, eV[27] = B) : B = eV[27], eV[28] !== aR || eV[29] !== B || eV[30] !== aO ? (K = {
                enabled: aO,
                queryKey: aR,
                queryFn: B,
                staleTime: 1 / 0,
                gcTime: 0,
                retry: !1
            }, eV[28] = aR, eV[29] = B, eV[30] = aO, eV[31] = K) : K = eV[31];
            let {
                data: aH,
                error: aW,
                isFetching: aU,
                refetch: aq
            } = (0, o.a)(K), [az, aB] = (0, c.useState)("idle"), [aK, aV] = (0, c.useState)(null != eJ ? "copy-failed" : null), [aY, aQ] = (0, c.useState)(!1);
            eV[32] !== ah ? (Y = ["chatgpt-conversation-share", ah], eV[32] = ah, eV[33] = Y) : Y = eV[33];
            let aX = Y,
                a$ = null == eJ && null == al && null == eZ && null == ar && null == eQ && (null == e6 || aG) && null == ac && null == am;
            eV[34] !== eY || eV[35] !== ah ? (Q = () => (0, N.i)({
                conversationId: ah,
                currentNodeId: eY
            }), eV[34] = eY, eV[35] = ah, eV[36] = Q) : Q = eV[36], eV[37] !== aX || eV[38] !== a$ || eV[39] !== Q ? (X = {
                enabled: a$,
                queryFn: Q,
                queryKey: aX,
                retry: !1,
                staleTime: L.b.ONE_MINUTE
            }, eV[37] = aX, eV[38] = a$, eV[39] = Q, eV[40] = X) : X = eV[40];
            let {
                data: aJ,
                error: aZ,
                isLoading: a0
            } = (0, o.a)(X);
            eV[41] === Symbol.for("react.memo_cache_sentinel") ? ($ = {
                enabled: !1,
                queryFn: eW,
                queryKey: ["accounts", "check"],
                staleTime: L.b.ONE_MINUTE
            }, eV[41] = $) : $ = eV[41];
            let {
                data: a1
            } = (0, o.a)($), a2 = null != eQ, a3 = null != e7 && a2, a5 = a3 || !0 === e9, a4 = null != al || ao?.kind === "shared", a6 = (eQ?.additionalImages?.length ?? 0) > 0, a7 = eQ?.item.isAnimated === !0 && !a6;
            eV[42] !== eQ || eV[43] !== ah || eV[44] !== aP ? (J = (0, D.c)((0, O.c)(ah), void 0, null != eQ && null == eQ.previewSrc ? aP : void 0), eV[42] = eQ, eV[43] = ah, eV[44] = aP, eV[45] = J) : J = eV[45];
            let {
                src: a8,
                isLoading: a9
            } = (0, A.k)(null != eQ && (a6 || null == eQ.previewSrc) ? eQ.item.src ?? "" : "", J), te = null != eQ && null == eQ.previewSrc && null == a8, ta = a6 ? "image_series" : "single_image", tt = am ?? e0, ti = null != e6 || null != ac || null != tt || al?.contentType === "message", ts = null != ac, tn = tt?.metadata.widgetType === "visualization", tr = tt?.metadata.widgetName === "create_interactive_poll" || tt?.metadata.widgetName === "CreateInteractivePoll", to = null != ar || null != eX, tl = a2 || ti || to, tc = !tl || aG, td = tl || !0, th = "conversation";
            if (tn ? th = "widget" : null != eX ? th = "prompt" : a7 ? th = "gif" : a2 ? th = a6 ? "images" : "image" : ts ? th = "response-region" : ti ? th = aG ? "conversation" : "message" : to && (th = "prompt"), null == ad) Z = an;
            else if (aG) Z = aH?.privacyNotices ?? (null == as ? an : void 0);
            else {
                let e;
                eV[46] !== ad ? (e = (0, N.m)(ad), eV[46] = ad, eV[47] = e) : e = eV[47], Z = e
            }
            let tg = a2 || (!tl || ti) && Z?.hasImageReference === !0;
            eV[48] !== eQ || eV[49] !== a6 || eV[50] !== au ? (ee = (a6 ? void 0 : eQ?.item.chatGptDisplayTitle) ?? (0, G.c)(au), eV[48] = eQ, eV[49] = a6, eV[50] = au, eV[51] = ee) : ee = eV[51];
            let tp = ee,
                tu = tc && aJ?.is_public === !0 && !0 === aJ.is_visible,
                tm = a1?.accounts?.find(e => e.id === (aj?.accountId ?? a1.account_ordering?.[0])),
                tf = tm?.structure ?? aj?.accountStructureAtLogin,
                tb = "unknown";
            aM?.isWorkspaceOnly != null ? tb = aM.isWorkspaceOnly ? "workspace" : "public" : null == aJ || a2 ? ("personal" === tf || "workspace" === tf) && (tb = "workspace" === tf ? "workspace" : "public") : tb = aJ.share_url.includes("/share/e/") ? "workspace" : "public", eV[52] !== eQ || eV[53] !== eX || eV[54] !== aA?.queryKey || eV[55] !== ah ? (ea = null != eX ? ["chatgpt-image-prompt-share-preparation", ah, eQ?.item.id, eX.revision] : aA?.queryKey ?? ["disabled-chatgpt-image-share-query"], eV[52] = eQ, eV[53] = eX, eV[54] = aA?.queryKey, eV[55] = ah, eV[56] = ea) : ea = eV[56], eV[57] !== eX || eV[58] !== aA?.queryFn ? (et = null != eX ? () => eX.createLink("native") : aA?.queryFn ?? eH, eV[57] = eX, eV[58] = aA?.queryFn, eV[59] = et) : et = eV[59];
            let tv = a3 && (0, U.a)() && eX?.actionsDisabled !== !0 && (null != eX || null != aA) && "public" === tb && null == aM;
            eV[60] !== ea || eV[61] !== et || eV[62] !== tv ? (ei = {
                queryKey: ea,
                queryFn: et,
                enabled: tv,
                retry: !1,
                staleTime: 1 / 0
            }, eV[60] = ea, eV[61] = et, eV[62] = tv, eV[63] = ei) : ei = eV[63];
            let tw = (0, o.a)(ei);
            tw.data?.isWorkspaceOnly != null && (tb = tw.data.isWorkspaceOnly ? "workspace" : "public");
            let tk = aM ?? tw.data ?? null,
                ty = null == eX ? tk : null;
            eV[64] !== ae || eV[65] !== ty ? (es = () => {
                null != ty && ae?.(ty)
            }, en = [ae, ty], eV[64] = ae, eV[65] = ty, eV[66] = es, eV[67] = en) : (es = eV[66], en = eV[67]), (0, c.useEffect)(es, en);
            let tx = tk?.shareLinkUrl ?? (tu ? aJ.share_url : null),
                t_ = tc && null == tk && tu && aJ.current_node_id !== eY,
                tC = "workspace" === tb,
                tT = "creating" === az,
                tS = aG && null != as && null == aH,
                tI = tc && a0 || tS && aU;
            eV[68] !== tk || eV[69] !== aK || eV[70] !== aW || eV[71] !== aZ || eV[72] !== tw.error || eV[73] !== tS || eV[74] !== a$ ? (null == (er = aK) && tS && null != aW && (er = "conversation-load-failed"), null == er && a$ && null == tk && null != aZ && (er = aZ instanceof N.a ? "blocked" : "create-failed"), null == er && null == tk && null != tw.error && (er = tw.error instanceof N.a ? "blocked" : "create-failed"), eV[68] = tk, eV[69] = aK, eV[70] = aW, eV[71] = aZ, eV[72] = tw.error, eV[73] = tS, eV[74] = a$, eV[75] = er) : er = eV[75];
            let tj = e4.description,
                tA = e4.publicLinkAudience;
            if (tn) {
                let e;
                eV[76] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    ...e4.widgetTitle
                }), eV[76] = e) : e = eV[76], eo = e
            } else if (a7) {
                let e;
                eV[77] !== eX ? (e = null != eX ? (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.gifWithPromptTitle",
                    defaultMessage: "Share GIF with prompt"
                }) : (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.gifTitle",
                    defaultMessage: "Share GIF"
                }), eV[77] = eX, eV[78] = e) : e = eV[78], eo = e
            } else if (null != eX) {
                let e;
                eV[79] !== eX.label ? (e = "image_with_prompt" === eX.label ? (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.imageWithPromptTitle",
                    defaultMessage: "Share image with prompt"
                }) : (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.imagePromptTitle",
                    defaultMessage: "Share prompt with image"
                }), eV[79] = eX.label, eV[80] = e) : e = eV[80], eo = e
            } else if (a2) {
                let e;
                eV[81] !== tp || eV[82] !== e$ || eV[83] !== a6 || eV[84] !== a3 ? (e = a3 || null == tp || null != e$ ? (0, i.jsx)(h.a, {
                    ...a6 ? e4.imagesTitle : e4.imageTitle
                }) : (0, i.jsx)(i.Fragment, {
                    children: tp
                }), eV[81] = tp, eV[82] = e$, eV[83] = a6, eV[84] = a3, eV[85] = e) : e = eV[85], eo = e
            } else if (tr) {
                let e;
                eV[86] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.poll.title",
                    defaultMessage: "Share poll"
                }), eV[86] = e) : e = eV[86], eo = e
            } else if (ts) {
                let e;
                eV[87] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    id: "chatgptConversations.shareDialog.responseRegionTitle",
                    defaultMessage: "Share"
                }), eV[87] = e) : e = eV[87], eo = e
            } else if (ti) {
                let e;
                eV[88] !== tp ? (e = null == tp ? (0, i.jsx)(h.a, {
                    ...e4.messageTitle
                }) : (0, i.jsx)(i.Fragment, {
                    children: tp
                }), eV[88] = tp, eV[89] = e) : e = eV[89], eo = e
            } else if (to) {
                let e;
                eV[90] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    ...e4.promptTitle
                }), eV[90] = e) : e = eV[90], eo = e
            } else {
                if (td) {
                    let e;
                    eV[91] !== tp ? (e = null == tp ? void 0 : (0, i.jsx)(i.Fragment, {
                        children: tp
                    }), eV[91] = tp, eV[92] = e) : e = eV[92], eo = e
                }
                tC ? tj = an?.isProjectConversation ? e4.workspaceProjectDescription : e4.workspaceDescription : aJ?.is_anonymous === !1 ? tj = e4.attributedDescription : an?.isProjectConversation && (tj = e4.projectDescription)
            }
            tC && (tA = tg ? e4.workspaceImageRightsAudience : e4.workspaceLinkAudience);
            let tM = "copied" === az ? e4.copied : e4.copyLink;
            t_ ? tM = e4.updateLink : null == tx && "copied" !== az && (tM = e4.createLink), eV[93] !== a_ || eV[94] !== az ? (el = "copied" === az ? a_.formatMessage(e4.copied) : a_.formatMessage(e4.copyLink), eV[93] = a_, eV[94] = az, eV[95] = el) : el = eV[95];
            let tL = el;
            eV[96] !== aS || eV[97] !== a_ || eV[98] !== af || eV[99] !== am ? (ec = function(e, a) {
                let t;
                "create-failed" === a && (aS(!1), am?.onError?.(e));
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
                        t = a_.formatMessage(e4.receiverFileCopyDeferred);
                        break;
                    case "blocked":
                        t = a_.formatMessage(e4.shareBlocked);
                        break;
                    case "copy-failed":
                        t = a_.formatMessage(e4.shareCopyFailed);
                        break;
                    case "create-failed":
                        t = a_.formatMessage(e4.shareCreateFailed)
                }
                return aV(i), aB("idle"), af.get(y.f).danger(t, {
                    errorAnalytics: {
                        toastId: {
                            "copy-failed": "failed_to_copy_share_link",
                            "create-failed": "failed_to_generate_share_link",
                            blocked: "chatgptConversationShareDialog.shareBlocked",
                            "receiver-files-unsupported": "chatgptConversationShareDialog.receiverFileCopyDeferred"
                        } [i]
                    }
                }), "receiver-files-unsupported" === i ? "create-failed" : i
            }, eV[96] = aS, eV[97] = a_, eV[98] = af, eV[99] = am, eV[100] = ec) : ec = eV[100];
            let tE = ec;
            if (eV[101] !== tt || eV[102] !== a2 || eV[103] !== ti || eV[104] !== to || eV[105] !== a4 || eV[106] !== ts || eV[107] !== ao?.kind || eV[108] !== al || eV[109] !== aG || eV[110] !== ap) {
                ed = a4 ? "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER" : "CHATGPT_SHARE_FLOW_ACTOR_SHARER";
                let e = ao?.kind === "shared";
                eg = ap ?? "CHATGPT_SHARE_FLOW_SOURCE_CONVERSATION_MENU", a4 && (eg = e ? "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_MODEL_WRITTEN_ACTION" : "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_HEADER"), null != al ? eh = al.attachmentType : null != tt ? (eh = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_WIDGET", eg = "CHATGPT_SHARE_FLOW_SOURCE_WIDGET_INLINE_ACTION") : a2 ? (eh = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_IMAGE_SHARE", eg = ap ?? "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION") : ts ? (eh = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_RESPONSE_REGION", e || (eg = "CHATGPT_SHARE_FLOW_SOURCE_WIDGET_INLINE_ACTION")) : ti ? (eg = "CHATGPT_SHARE_FLOW_SOURCE_MESSAGE_INLINE_ACTION", aG || (eh = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_MESSAGE_SLICE")) : to && (eh = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_PROMPT", eg = ap ?? "CHATGPT_SHARE_FLOW_SOURCE_MESSAGE_INLINE_ACTION"), eV[101] = tt, eV[102] = a2, eV[103] = ti, eV[104] = to, eV[105] = a4, eV[106] = ts, eV[107] = ao?.kind, eV[108] = al, eV[109] = aG, eV[110] = ap, eV[111] = ed, eV[112] = eh, eV[113] = eg
            } else ed = eV[111], eh = eV[112], eg = eV[113];
            let tP = (al?.contentType === "message" || tl) && !aG ? "CHATGPT_SHARE_FLOW_CONTENT_TYPE_POST_SLICE" : "CHATGPT_SHARE_FLOW_CONTENT_TYPE_SHARED_CONVERSATION";
            eV[114] !== tk || eV[115] !== eY || eV[116] !== tu || eV[117] !== aJ || eV[118] !== aS || eV[119] !== eX || eV[120] !== aA || eV[121] !== tS || eV[122] !== t_ || eV[123] !== e6 || eV[124] !== ae || eV[125] !== ar || eV[126] !== ac || eV[127] !== af || eV[128] !== ah || eV[129] !== aX || eV[130] !== aG || eV[131] !== au || eV[132] !== tc || eV[133] !== am ? (ep = async function(e) {
                let a;
                if (null != am && (!aC.current || am.isCurrent?.() === !1)) throw Error("The selected widget is no longer available");
                if (null != ac && (!aC.current || ac.isCurrent?.() === !1)) throw Error("The selected response region is no longer available");
                if (tS) throw Error("Expanded conversation unavailable");
                let t = tk ?? (tu ? {
                    currentNodeId: aJ.current_node_id,
                    shareLinkId: aJ.share_id,
                    shareLinkUrl: aJ.share_url
                } : null);
                if (null == eX && null != t && !t_) return aS(!0), t;
                if (null != eX) a = await eX.createLink(e);
                else if (null != aA) a = await af.queryClient.fetchQuery(aA), ae?.(a);
                else if (null != am) {
                    if (a = await (0, N.g)(am.attachment, eY), !aC.current || am.isCurrent?.() === !1) throw Error("The selected widget changed while sharing")
                } else if (null != ac) {
                    if (a = await (0, N.f)({
                            attachment: ac.attachment,
                            currentNodeId: eY
                        }), !aC.current || ac.isCurrent?.() === !1) throw Error("The selected response region changed while sharing")
                } else a = null == e6 || aG ? null != ar ? await af.queryClient.fetchQuery({
                    queryFn: () => (0, N.e)({
                        conversationId: ah,
                        messageId: ar.messageId
                    }),
                    queryKey: ["chatgpt-prompt-share", ah, ar.messageId],
                    staleTime: 1 / 0
                }) : await (0, N.h)({
                    conversationId: ah,
                    currentNodeId: eY,
                    existingShareLink: aJ,
                    title: au
                }) : await af.queryClient.fetchQuery({
                    queryFn: () => (0, N.d)({
                        conversationId: ah,
                        currentNodeId: eY,
                        messageIds: e6
                    }),
                    queryKey: ["chatgpt-message-share", af.get(u.f), ah, eY, e6],
                    staleTime: 1 / 0
                });
                return aL(a), aS(!0), null != aJ && tc && af.queryClient.setQueryData(aX, {
                    ...aJ,
                    current_node_id: eY,
                    is_public: !0,
                    is_visible: !0
                }), a
            }, eV[114] = tk, eV[115] = eY, eV[116] = tu, eV[117] = aJ, eV[118] = aS, eV[119] = eX, eV[120] = aA, eV[121] = tS, eV[122] = t_, eV[123] = e6, eV[124] = ae, eV[125] = ar, eV[126] = ac, eV[127] = af, eV[128] = ah, eV[129] = aX, eV[130] = aG, eV[131] = au, eV[132] = tc, eV[133] = am, eV[134] = ep) : ep = eV[134];
            let tD = ep;
            eV[135] !== ed || eV[136] !== eh || eV[137] !== tP || eV[138] !== tk || eV[139] !== tt?.metadata || eV[140] !== tD || eV[141] !== tu || eV[142] !== aJ || eV[143] !== eX || eV[144] !== te || eV[145] !== a4 || eV[146] !== t_ || eV[147] !== tT || eV[148] !== aa || eV[149] !== ao || eV[150] !== tE || eV[151] !== af || eV[152] !== ah || eV[153] !== tx || eV[154] !== aP || eV[155] !== eg || eV[156] !== td ? (eu = async function() {
                if (tT || te || eX?.actionsDisabled) return;
                let e = (0, R.b)(af, {
                    actor: ed,
                    attachmentType: eh,
                    widgetMetadata: tt?.metadata,
                    contentType: tP,
                    conversationId: a4 ? void 0 : ah,
                    shareId: tk?.shareLinkId ?? (tu ? aJ.share_id : void 0),
                    shareSessionId: aP,
                    source: eg,
                    sourceShareId: ao?.kind === "shared" ? ao.sourcePostId : void 0,
                    usedExistingLink: null != tx && !t_
                });
                aV(null), aB("creating");
                let a = null != eX || null == tx || t_ ? "create-failed" : "copy-failed",
                    t = tk;
                try {
                    let i, s = tD("copy"),
                        n = s.then(eO);
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
                        }), tE(Error("Failed to copy ChatGPT conversation share link"), "copy-failed");
                        return
                    }
                    e({
                        result: "link-copied",
                        shareId: o.shareLinkId
                    }), aB("copied"), td || ((0, C.a)(af), aa())
                } catch (s) {
                    let i = tE(s, a);
                    e("create-failed" === i ? {
                        result: i,
                        error: s
                    } : {
                        result: i,
                        shareId: t?.shareLinkId
                    })
                }
            }, eV[135] = ed, eV[136] = eh, eV[137] = tP, eV[138] = tk, eV[139] = tt?.metadata, eV[140] = tD, eV[141] = tu, eV[142] = aJ, eV[143] = eX, eV[144] = te, eV[145] = a4, eV[146] = t_, eV[147] = tT, eV[148] = aa, eV[149] = ao, eV[150] = tE, eV[151] = af, eV[152] = ah, eV[153] = tx, eV[154] = aP, eV[155] = eg, eV[156] = td, eV[157] = eu) : eu = eV[157];
            let tN = eu;
            eV[158] !== eh || eV[159] !== tP || eV[160] !== tk || eV[161] !== af || eV[162] !== ah || eV[163] !== aP || eV[164] !== a5 || eV[165] !== eg ? (em = function(e) {
                (0, x.a)(af, n.i, {
                    action: e,
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_SHARER",
                    attachmentType: eh,
                    contentType: tP,
                    conversationId: ah,
                    ...a5 && null != tk && !tk.isWorkspaceOnly ? {
                        shareId: tk.shareLinkId
                    } : {},
                    shareSessionId: aP,
                    source: eg,
                    sheetType: "CHATGPT_SHARE_FLOW_SHEET_TYPE_CUSTOM"
                })
            }, eV[158] = eh, eV[159] = tP, eV[160] = tk, eV[161] = af, eV[162] = ah, eV[163] = aP, eV[164] = a5, eV[165] = eg, eV[166] = em) : em = eV[166];
            let tF = em;
            eV[167] !== tk || eV[168] !== er || eV[169] !== aS || eV[170] !== aA || eV[171] !== a_ || eV[172] !== tT || eV[173] !== aa || eV[174] !== tE || eV[175] !== af || eV[176] !== ah || eV[177] !== tb || eV[178] !== aP || eV[179] !== eg ? (ef = async function() {
                if (!tT && null != aA && "public" === tb && null != tk && "blocked" !== er) {
                    aV(null), aB("creating");
                    try {
                        let e = await (0, U.b)(af, tk, ah, aP, eg);
                        aB("idle"), "shared" === e && (aS(!0), aa()), "failed" === e && af.get(y.f).danger(a_.formatMessage({
                            id: "chatgptConversations.mobileImageShare.nativeFailed",
                            defaultMessage: "Could not open sharing. Try again or copy the link"
                        }), {
                            errorAnalytics: {
                                toastId: "chatgptConversations.mobileImageShare.nativeFailed"
                            }
                        })
                    } catch (e) {
                        tE(e, "create-failed")
                    }
                }
            }, eV[167] = tk, eV[168] = er, eV[169] = aS, eV[170] = aA, eV[171] = a_, eV[172] = tT, eV[173] = aa, eV[174] = tE, eV[175] = af, eV[176] = ah, eV[177] = tb, eV[178] = aP, eV[179] = eg, eV[180] = ef) : ef = eV[180];
            let tG = ef;
            eV[181] !== ed || eV[182] !== eh || eV[183] !== tP || eV[184] !== tk || eV[185] !== tp || eV[186] !== tt?.metadata || eV[187] !== tD || eV[188] !== tu || eV[189] !== aJ || eV[190] !== eX || eV[191] !== ta || eV[192] !== a_ || eV[193] !== a2 || eV[194] !== te || eV[195] !== to || eV[196] !== a4 || eV[197] !== t_ || eV[198] !== tT || eV[199] !== e7?.unsupportedDestinationFallback || eV[200] !== aa || eV[201] !== ao || eV[202] !== tE || eV[203] !== af || eV[204] !== ah || eV[205] !== tb || eV[206] !== az || eV[207] !== aP || eV[208] !== a5 || eV[209] !== eg || eV[210] !== a3 ? (eb = async function(e, a) {
                var t;
                let i;
                if (tT || te || "public" !== tb || eX?.actionsDisabled) return;
                a.preventDefault(), a4 || to || "line" !== (t = e) && "linkedin" !== t && "reddit" !== t && "x" !== t || (0, R.g)(af, e, a2 ? ta : void 0);
                let s = a5 && a2 ? ah : void 0;
                (0, R.f)(af, {
                    actor: ed,
                    attachmentType: eh,
                    conversationId: s,
                    widgetMetadata: tt?.metadata,
                    contentType: tP,
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
                    shareId: tk?.shareLinkId ?? (tu && !t_ ? aJ.share_id : void 0),
                    shareSessionId: aP,
                    source: eg,
                    sourceShareId: ao?.kind === "shared" ? ao.sourcePostId : void 0
                });
                let n = a3 && (0, V.g)(e);
                if (n && e7?.unsupportedDestinationFallback === "app-store") {
                    let t = (0, r.a)() ? "android" : (0, r.c)() || (0, r.b)() ? "ios" : null,
                        i = null == t ? null : (0, V.c)(e, t);
                    if (null != i) return void(0, b.e)({
                        event: a,
                        href: i,
                        initiator: "open_in_browser_bridge",
                        openTarget: "external-browser"
                    })
                }
                let o = null != tk && null == eX || "messages" === e || n ? null : window.open("", "_blank");
                null != o && (o.opener = null), aV(null), aB("creating");
                try {
                    i = await tD("social")
                } catch (e) {
                    o?.close(), e instanceof N.a || (0, R.e)(af, {
                        actor: ed,
                        attachmentType: eh,
                        conversationId: s,
                        widgetMetadata: tt?.metadata,
                        contentType: tP,
                        shareSessionId: aP,
                        source: eg,
                        sourceShareId: ao?.kind === "shared" ? ao.sourcePostId : void 0
                    }), tE(e, "create-failed");
                    return
                }
                if (!0 === i.isWorkspaceOnly) {
                    o?.close(), aB(az);
                    return
                }
                if (n) {
                    let e = await (0, U.b)(af, i, ah, aP, eg);
                    aB(az), "shared" === e ? aa() : "failed" === e && af.get(y.f).danger(a_.formatMessage({
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
                    title: i.title ?? tp
                });
                if (null == l) {
                    o?.close(), aB(az);
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
                }), aB(az)
            }, eV[181] = ed, eV[182] = eh, eV[183] = tP, eV[184] = tk, eV[185] = tp, eV[186] = tt?.metadata, eV[187] = tD, eV[188] = tu, eV[189] = aJ, eV[190] = eX, eV[191] = ta, eV[192] = a_, eV[193] = a2, eV[194] = te, eV[195] = to, eV[196] = a4, eV[197] = t_, eV[198] = tT, eV[199] = e7?.unsupportedDestinationFallback, eV[200] = aa, eV[201] = ao, eV[202] = tE, eV[203] = af, eV[204] = ah, eV[205] = tb, eV[206] = az, eV[207] = aP, eV[208] = a5, eV[209] = eg, eV[210] = a3, eV[211] = eb) : eb = eV[211];
            let tR = eb;
            eV[212] !== eQ || eV[213] !== ta || eV[214] !== a_ || eV[215] !== aY || eV[216] !== a6 || eV[217] !== te || eV[218] !== tF || eV[219] !== af || eV[220] !== ah ? (ev = async function() {
                if (null == eQ || aY || te) return;
                (0, R.g)(af, "download", ta);
                let e = [eQ.item, ...eQ.additionalImages ?? []].filter(eF);
                0 !== e.length && ((0, q.b)(af, {
                    image: eQ.downloadAnalyticsImage ?? eQ.item,
                    conversationId: ah,
                    entryPoint: "CHATGPT_IMAGE_DOWNLOAD_ENTRY_POINT_CUSTOM_SHARE_SHEET",
                    downloadScope: a6 ? "CHATGPT_IMAGE_DOWNLOAD_SCOPE_SERIES" : "CHATGPT_IMAGE_DOWNLOAD_SCOPE_SINGLE",
                    requestedImageCount: e.length,
                    isParagen: eQ.downloadIsParagen
                }), aQ(!0), tF("CHATGPT_SHARE_FLOW_ACTION_DOWNLOAD_SELECTED"), await (0, H.a)(af, {
                    images: e,
                    intl: a_,
                    serverConversationId: (0, O.c)(ah),
                    logIndividualDownloads: !1
                }).then(e => {
                    "downloaded" === e && (0, q.e)(af, ah, eQ.item)
                }).finally(() => {
                    aQ(!1)
                }))
            }, eV[212] = eQ, eV[213] = ta, eV[214] = a_, eV[215] = aY, eV[216] = a6, eV[217] = te, eV[218] = tF, eV[219] = af, eV[220] = ah, eV[221] = ev) : ev = eV[221];
            let tO = ev;
            eV[222] !== eQ?.additionalImages?.length || eV[223] !== a6 ? (ew = a6 ? (0, i.jsx)(h.a, {
                id: "chatgptConversations.shareDialog.imageSeriesCount",
                defaultMessage: "Sharing {imageCount} images together",
                values: {
                    imageCount: 1 + (eQ?.additionalImages?.length ?? 0)
                }
            }) : void 0, eV[222] = eQ?.additionalImages?.length, eV[223] = a6, eV[224] = ew) : ew = eV[224];
            let tH = ew,
                tW = tH;
            if (!a6 && !td) {
                let e;
                eV[225] !== tj ? (e = (0, i.jsx)(h.a, {
                    ...tj
                }), eV[225] = tj, eV[226] = e) : e = eV[226], tW = e
            }
            if (null != eX) {
                let e;
                eV[227] !== a3 ? (e = a3 ? (0, i.jsx)(h.a, {
                    id: "imagePromptShare.audience",
                    defaultMessage: "Anyone with the link can try this prompt"
                }) : void 0, eV[227] = a3, eV[228] = e) : e = eV[228], tW = e
            } else if (a3) {
                let e, a, t;
                eV[229] !== tb ? (e = "public" === tb ? (0, i.jsx)(h.a, {
                    id: "chatgptConversations.mobileImageShare.publicAudience",
                    defaultMessage: "Anyone with the link can view"
                }) : null, eV[229] = tb, eV[230] = e) : e = eV[230], eV[231] !== tb ? (a = "public" !== tb && (0, i.jsx)(h.a, {
                    id: "chatgptConversations.mobileImageShare.workspaceAudience",
                    defaultMessage: "Only workspace members with the link can view"
                }), eV[231] = tb, eV[232] = a) : a = eV[232], eV[233] !== e || eV[234] !== a ? (t = (0, i.jsxs)(i.Fragment, {
                    children: [e, a]
                }), eV[233] = e, eV[234] = a, eV[235] = t) : t = eV[235], tW = t
            }
            if (a3 ? ek = "responsiveSheet" : td && (ek = "share"), eV[236] !== e7?.layout || eV[237] !== a3 ? (a3 && (ey = e7?.layout === "two-rows" ? "imageSheetTwoRows" : "imageSheet"), eV[236] = e7?.layout, eV[237] = a3, eV[238] = ey) : ey = eV[238], null != eX) {
                let e;
                eV[239] !== eQ?.previewSrc || eV[240] !== eX || eV[241] !== tT || eV[242] !== a8 ? (e = () => eX.preview(tT, eQ?.previewSrc ?? a8 ?? null, () => {
                    aV(null), aB("idle")
                }), eV[239] = eQ?.previewSrc, eV[240] = eX, eV[241] = tT, eV[242] = a8, eV[243] = e) : e = eV[243], ex = e
            } else {
                let e;
                eV[244] !== tt || eV[245] !== aH || eV[246] !== aR || eV[247] !== eQ || eV[248] !== ey || eV[249] !== a_ || eV[250] !== a9 || eV[251] !== a6 || eV[252] !== tn || eV[253] !== as || eV[254] !== ai || eV[255] !== ar || eV[256] !== a8 || eV[257] !== ad || eV[258] !== ac || eV[259] !== af.queryClient || eV[260] !== ah || eV[261] !== aP || eV[262] !== aG || eV[263] !== a3 ? (e = e => null != eQ ? (0, i.jsx)(I.a, {
                    ariaLabel: a6 ? a_.formatMessage(e4.imagesPreview) : eQ.alt,
                    expandedContent: (0, i.jsxs)("div", {
                        className: "flex flex-col gap-4",
                        children: [(0, i.jsx)(e2, {
                            src: a6 ? a8 : eQ.previewSrc ?? a8,
                            isLoading: a9,
                            alt: eQ.alt
                        }), eQ.additionalPublishedPreviewUrls?.map(eN), eQ.additionalImages?.map(e => (0, i.jsx)(e1, {
                            item: e,
                            serverConversationId: ah
                        }, e.id))]
                    }),
                    expandPreviewEventLogger: e,
                    variant: "image",
                    classicImagePreviewEligible: !a6 && !a3,
                    presentation: ey,
                    children: a6 || null == eQ.previewSrc ? (0, i.jsx)(e2, {
                        src: a8,
                        isLoading: a9
                    }) : (0, i.jsx)("img", {
                        alt: eQ.alt,
                        className: a3 ? void 0 : "block size-full object-contain",
                        referrerPolicy: "no-referrer",
                        src: eQ.previewSrc
                    })
                }) : (0, i.jsxs)(i.Fragment, {
                    children: [ac?.preview != null && (0, i.jsx)(I.a, {
                        ariaLabel: a_.formatMessage({
                            id: "chatgptConversations.shareDialog.responseRegionPreviewLabel",
                            defaultMessage: "Preview of the shared content"
                        }),
                        expandedContent: ac.preview,
                        expandPreviewEventLogger: e,
                        variant: "response",
                        children: ac.preview
                    }), null == ac && tt?.preview != null && tn && (0, i.jsx)(I.a, {
                        ariaLabel: a_.formatMessage({
                            id: "shareDialog.widget.previewLabel",
                            defaultMessage: "Preview of the shared widget"
                        }),
                        expandedContent: tt.preview,
                        expandPreviewEventLogger: e,
                        variant: "response",
                        children: tt.preview
                    }), null == ac && tt?.preview != null && !tn && (0, i.jsx)(I.a, {
                        expandedContent: tt.preview,
                        expandPreviewEventLogger: e,
                        variant: "response",
                        children: tt.preview
                    }), null == ac && null == tt && (0, i.jsx)(F.b, {
                        expandPreviewEventLogger: e,
                        prompt: ar,
                        response: aG ? void 0 : ad,
                        serverConversationId: ah,
                        expandedHistory: (null == ad || aG) && null != as && null == aH ? {
                            load: async e => (await af.queryClient.fetchQuery({
                                queryKey: aR,
                                queryFn: () => as(e),
                                staleTime: 1 / 0
                            })).turns,
                            sessionId: aP
                        } : void 0,
                        turns: null == ad || aG ? aH?.turns ?? ai : void 0
                    })]
                }), eV[244] = tt, eV[245] = aH, eV[246] = aR, eV[247] = eQ, eV[248] = ey, eV[249] = a_, eV[250] = a9, eV[251] = a6, eV[252] = tn, eV[253] = as, eV[254] = ai, eV[255] = ar, eV[256] = a8, eV[257] = ad, eV[258] = ac, eV[259] = af.queryClient, eV[260] = ah, eV[261] = aP, eV[262] = aG, eV[263] = a3, eV[264] = e) : e = eV[264], ex = e
            }
            if (a3) {
                let e, a = ex;
                eV[265] !== eX || eV[266] !== tH || eV[267] !== a ? (e = e => {
                    let t = a(e);
                    return (0, i.jsxs)(i.Fragment, {
                        children: [null == eX ? t : (0, i.jsx)("div", {
                            className: "px-6",
                            children: t
                        }), null != tH && (0, i.jsx)("p", {
                            className: "mt-3 text-center text-sm text-secondary",
                            children: tH
                        })]
                    })
                }, eV[265] = eX, eV[266] = tH, eV[267] = a, eV[268] = e) : e = eV[268], ex = e
            }
            let tU = eo,
                tq = tW;
            eV[269] !== tA || eV[270] !== td ? (e_ = td ? void 0 : (0, i.jsx)(h.a, {
                ...tA
            }), eV[269] = tA, eV[270] = td, eV[271] = e_) : e_ = eV[271], eV[272] !== tM ? (eC = (0, i.jsx)(h.a, {
                ...tM
            }), eV[272] = tM, eV[273] = eC) : eC = eV[273];
            let tz = eX?.actionsDisabled || tI || tS || te || "blocked" === er,
                tB = tT || tI || av,
                tK = !td && tT;
            eV[274] !== tF || eV[275] !== a5 || eV[276] !== td ? (eT = td ? e => {
                a5 && tF("CHATGPT_SHARE_FLOW_ACTION_SHEET_PRESENTED"), e.preventDefault(), e.currentTarget instanceof HTMLElement && e.currentTarget.focus()
            } : void 0, eV[274] = tF, eV[275] = a5, eV[276] = td, eV[277] = eT) : eT = eV[277];
            let tV = ek,
                tY = a3 ? "imageSheet" : void 0,
                tQ = a3 && e7?.layout === "two-rows";
            eV[278] !== ax || eV[279] !== ak || eV[280] !== ay || eV[281] !== tk || eV[282] !== eY || eV[283] !== er || eV[284] !== tt || eV[285] !== tO || eV[286] !== tG || eV[287] !== tR || eV[288] !== eQ || eV[289] !== eX?.actionsDisabled || eV[290] !== ta || eV[291] !== aY || eV[292] !== tS || eV[293] !== tI || eV[294] !== a2 || eV[295] !== te || eV[296] !== av || eV[297] !== to || eV[298] !== a4 || eV[299] !== tT || eV[300] !== e6 || eV[301] !== e7 || eV[302] !== e8 || eV[303] !== aa || eV[304] !== ar || eV[305] !== al || eV[306] !== tL || eV[307] !== a8 || eV[308] !== ac || eV[309] !== af || eV[310] !== ah || eV[311] !== tb || eV[312] !== aG || eV[313] !== tc || eV[314] !== a3 || eV[315] !== td || eV[316] !== am ? (eS = td ? (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(eM, {
                    projectStyleEligible: !a4 && null == ar && null == tt && null == ac && (a2 || null != e6 && !aG),
                    mobileImageActions: a3 && null != e7 ? {
                        experience: e7,
                        canNativeShare: "public" === tb && null != tk && (0, U.a)(tk?.shareLinkUrl),
                        onNativeShare: () => {
                            tG()
                        },
                        rowScrollPositions: e8
                    } : void 0,
                    copyLabel: tL,
                    copyDisabled: eX?.actionsDisabled || tI || tS || tT || te || "blocked" === er,
                    isBusy: tT || tI || av,
                    isDownloading: aY,
                    socialDestinationsDisabled: eX?.actionsDisabled || tI || tS || tT || te || "public" !== tb || "blocked" === er,
                    showSocialDestinations: "public" === tb,
                    additionalActions: void 0,
                    onDownload: null == eQ || te ? void 0 : () => {
                        tO()
                    },
                    onCopy: () => {
                        a4 || to || (0, R.g)(af, "copy", a2 ? ta : void 0)
                    },
                    onSocialShare: (e, a) => {
                        tR(e, a)
                    }
                })
            }) : void 0, eV[278] = ax, eV[279] = ak, eV[280] = ay, eV[281] = tk, eV[282] = eY, eV[283] = er, eV[284] = tt, eV[285] = tO, eV[286] = tG, eV[287] = tR, eV[288] = eQ, eV[289] = eX?.actionsDisabled, eV[290] = ta, eV[291] = aY, eV[292] = tS, eV[293] = tI, eV[294] = a2, eV[295] = te, eV[296] = av, eV[297] = to, eV[298] = a4, eV[299] = tT, eV[300] = e6, eV[301] = e7, eV[302] = e8, eV[303] = aa, eV[304] = ar, eV[305] = al, eV[306] = tL, eV[307] = a8, eV[308] = ac, eV[309] = af, eV[310] = ah, eV[311] = tb, eV[312] = aG, eV[313] = tc, eV[314] = a3, eV[315] = td, eV[316] = am, eV[317] = eS) : eS = eV[317], eV[318] !== ed || eV[319] !== eh || eV[320] !== tP || eV[321] !== tt?.metadata.widgetName || eV[322] !== tt?.metadata.widgetType || eV[323] !== ah || eV[324] !== aP || eV[325] !== eg ? (eI = JSON.stringify([ed, eh, tP, ah, aP, eg, tt?.metadata.widgetName, tt?.metadata.widgetType]), eV[318] = ed, eV[319] = eh, eV[320] = tP, eV[321] = tt?.metadata.widgetName, eV[322] = tt?.metadata.widgetType, eV[323] = ah, eV[324] = aP, eV[325] = eg, eV[326] = eI) : eI = eV[326], eV[327] !== ed || eV[328] !== eh || eV[329] !== tP || eV[330] !== tt?.metadata || eV[331] !== af || eV[332] !== ah || eV[333] !== aP || eV[334] !== eg ? (ej = () => (0, R.a)(af, {
                actor: ed,
                attachmentType: eh,
                contentType: tP,
                conversationId: ah,
                shareSessionId: aP,
                source: eg,
                widgetMetadata: tt?.metadata
            }), eV[327] = ed, eV[328] = eh, eV[329] = tP, eV[330] = tt?.metadata, eV[331] = af, eV[332] = ah, eV[333] = aP, eV[334] = eg, eV[335] = ej) : ej = eV[335], eV[336] !== ex || eV[337] !== eI || eV[338] !== ej ? (eA = (0, i.jsx)(eq, {
                createEventLogger: ej,
                children: ex
            }, eI), eV[336] = ex, eV[337] = eI, eV[338] = ej, eV[339] = eA) : eA = eV[339], eV[340] !== aF || eV[341] !== e$ || eV[342] !== a_ || eV[343] !== tI || eV[344] !== tr || eV[345] !== tT || eV[346] !== aD || eV[347] !== th || eV[348] !== tb || eV[349] !== tg || eV[350] !== a3 || eV[351] !== td ? (eL = td ? (0, i.jsxs)(i.Fragment, {
                children: [aF && (0, i.jsx)(f.e, {
                    className: "pt-5",
                    children: (0, i.jsx)("div", {
                        className: "mx-auto w-80 max-w-full",
                        children: (0, i.jsx)(w.a, {
                            ariaLabel: a_.formatMessage({
                                id: "chatgptConversations.shareDialog.messageScope.label",
                                defaultMessage: "Content to share"
                            }),
                            buttonClassName: "z-20",
                            fullWidth: !0,
                            onSelect: e => {
                                e !== aD && (aN(e), aL(null), aV(null), aB("idle"))
                            },
                            options: [{
                                id: "message",
                                disabled: tT || tI,
                                label: (0, i.jsx)(h.a, {
                                    id: "chatgptConversations.shareDialog.messageScope.response",
                                    defaultMessage: "This response"
                                })
                            }, {
                                id: "conversation",
                                disabled: tT || tI,
                                label: (0, i.jsx)(h.a, {
                                    id: "chatgptConversations.shareDialog.messageScope.conversation",
                                    defaultMessage: "Entire conversation"
                                })
                            }],
                            selectedId: aD,
                            variant: "form",
                            wrapLabels: !0
                        })
                    })
                }), null != e$ && (a3 ? (0, i.jsx)("div", {
                    className: "px-6 pt-3",
                    children: e$(tT)
                }) : (0, i.jsx)(f.e, {
                    className: "pt-5",
                    children: e$(tT)
                })), !a3 && (0, i.jsx)(ez, {
                    audience: tb,
                    contentType: th,
                    isPoll: tr,
                    showImageRightsNotice: tg
                })]
            }) : void 0, eV[340] = aF, eV[341] = e$, eV[342] = a_, eV[343] = tI, eV[344] = tr, eV[345] = tT, eV[346] = aD, eV[347] = th, eV[348] = tb, eV[349] = tg, eV[350] = a3, eV[351] = td, eV[352] = eL) : eL = eV[352], eV[353] !== er || eV[354] !== eX || eV[355] !== aq || eV[356] !== tx ? (eE = null == er ? void 0 : {
                content: (0, i.jsx)(e5, {
                    error: er
                }),
                copyUrl: "copy-failed" === er ? tx : void 0,
                onRetry: "conversation-load-failed" === er ? () => {
                    aq()
                } : void 0,
                preventsSharing: "blocked" === er && null == eX || "conversation-load-failed" === er
            }, eV[353] = er, eV[354] = eX, eV[355] = aq, eV[356] = tx, eV[357] = eE) : eE = eV[357];
            let tX = tg && !tC && !a2,
                t$ = !tl || ti;
            return eV[358] !== Z || eV[359] !== tX || eV[360] !== t$ ? (eP = (0, i.jsx)(e3, {
                showImageRightsNotice: tX,
                showContentNotices: t$,
                privacyNotices: Z
            }), eV[358] = Z, eV[359] = tX, eV[360] = t$, eV[361] = eP) : eP = eV[361], eV[362] !== aI || eV[363] !== tF || eV[364] !== a5 ? (eD = () => {
                a5 && tF("CHATGPT_SHARE_FLOW_ACTION_DISMISSED"), aI()
            }, eV[362] = aI, eV[363] = tF, eV[364] = a5, eV[365] = eD) : eD = eV[365], eV[366] !== tN ? (eB = () => {
                tN()
            }, eV[366] = tN, eV[367] = eB) : eB = eV[367], eV[368] !== ek || eV[369] !== eo || eV[370] !== tp || eV[371] !== tW || eV[372] !== e_ || eV[373] !== eC || eV[374] !== tz || eV[375] !== tB || eV[376] !== tK || eV[377] !== eT || eV[378] !== tY || eV[379] !== tQ || eV[380] !== eS || eV[381] !== eA || eV[382] !== eL || eV[383] !== eE || eV[384] !== eP || eV[385] !== eD || eV[386] !== eB ? (eK = (0, i.jsx)(S.a, {
                threadTitle: tp,
                title: tU,
                subtitle: tq,
                audience: e_,
                actionLabel: eC,
                actionDisabled: tz,
                isBusy: tB,
                isDismissalDisabled: tK,
                onOpenAutoFocus: eT,
                size: tV,
                presentation: tY,
                compactImageSheetFooter: tQ,
                footer: eS,
                preview: eA,
                info: eL,
                error: eE,
                notices: eP,
                onClose: eD,
                onSubmit: eB
            }), eV[368] = ek, eV[369] = eo, eV[370] = tp, eV[371] = tW, eV[372] = e_, eV[373] = eC, eV[374] = tz, eV[375] = tB, eV[376] = tK, eV[377] = eT, eV[378] = tY, eV[379] = tQ, eV[380] = eS, eV[381] = eA, eV[382] = eL, eV[383] = eE, eV[384] = eP, eV[385] = eD, eV[386] = eB, eV[387] = eK) : eK = eV[387], eK
        }

        function eN(e) {
            return (0, i.jsx)(e2, {
                src: e,
                isLoading: !1
            }, e)
        }

        function eF(e) {
            return null != e.src && "completed" === e.status && !e.isPreview
        }

        function eG() {}

        function eR() {}

        function eO(e) {
            let {
                shareLinkUrl: a
            } = e;
            return a
        }

        function eH() {
            throw Error("Image share is unavailable")
        }

        function eW() {
            return E.CodexRequest.safeGet("/wham/accounts/check")
        }

        function eU() {
            return crypto.randomUUID()
        }

        function eq(e) {
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
                b = "workspace" === g ? v.Qe : v.Vd;
            if ("workspace" === g) {
                let e, s;
                if (m) {
                    let a;
                    d[0] !== p ? (a = (0, i.jsx)(h.a, {
                        id: "chatgptConversations.shareDialog.workspaceMediaRightsAudienceWithLearnMore",
                        defaultMessage: "Links are visible to workspace members only. {contentType, select, gif {Confirm you have the rights to share this GIF.} images {Confirm you have the rights to share these images.} other {Confirm you have the rights to share this image.}} {contentType, select, conversation {Memory sources won't be shared with viewers. } other {}}<learnMore>Learn more</learnMore>",
                        values: {
                            contentType: p,
                            learnMore: e0
                        }
                    }), d[0] = p, d[1] = a) : a = d[1], e = a
                } else if ("conversation" === p) {
                    let a;
                    d[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, i.jsx)(h.a, {
                        id: "chatgptConversations.shareDialog.workspaceConversationMemoryDisclosure",
                        defaultMessage: "Links are visible to workspace members only. Memory sources won't be shared with viewers. <learnMore>Learn more</learnMore>",
                        values: {
                            learnMore: eZ
                        }
                    }), d[2] = a) : a = d[2], e = a
                } else {
                    let a;
                    d[3] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, i.jsx)(h.a, {
                        ...e4.workspaceLinksVisibleWithLearnMore,
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
                        ...e4.shareLinkToWidget
                    }), d[6] = e) : e = d[6], a = e
                } else if ("images" === p) {
                    let e;
                    d[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e4.shareLinkToImages
                    }), d[7] = e) : e = d[7], a = e
                } else if ("gif" === p) {
                    let e;
                    d[8] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e4.shareLinkToGif
                    }), d[8] = e) : e = d[8], a = e
                } else if ("image" === p) {
                    let e;
                    d[9] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e4.shareLinkToImage
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
                        ...e4.shareLinkToMessage
                    }), d[11] = e) : e = d[11], a = e
                } else if ("prompt" === p) {
                    let e;
                    d[12] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e4.shareLinkToPrompt
                    }), d[12] = e) : e = d[12], a = e
                } else {
                    let e;
                    d[13] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e4.shareLinkToConversation
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
                        ...e4.imageLicenseDisclaimer
                    }), d[16] = e) : e = d[16], t = e
                }
                if ("widget" === p) {
                    let e;
                    d[17] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e4.shareLinkToWidget
                    }), d[17] = e) : e = d[17], a = e
                } else if ("images" === p) {
                    let e;
                    d[18] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e4.shareLinkToImages
                    }), d[18] = e) : e = d[18], a = e
                } else if ("gif" === p) {
                    let e;
                    d[19] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e4.shareLinkToGif
                    }), d[19] = e) : e = d[19], a = e
                } else if ("image" === p) {
                    let e;
                    d[20] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e4.shareLinkToImage
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
                        ...e4.shareLinkToMessage
                    }), d[22] = e) : e = d[22], a = e
                } else if ("prompt" === p) {
                    let e;
                    d[23] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e4.shareLinkToPrompt
                    }), d[23] = e) : e = d[23], a = e
                } else {
                    let e;
                    d[24] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e4.shareLinkToConversation
                    }), d[24] = e) : e = d[24], a = e
                }
            } else if ("widget" === p) {
                let e, s;
                d[25] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    ...e4.sharePublicLinkToWidget
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
                    ...e4.sharePublicLinkToImages
                }), d[27] = e) : e = d[27], a = e, d[28] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(h.a, {
                            id: "chatgptConversations.shareDialog.imagesPublicLinkAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access these images. Confirm you have the rights to share these images. <learnMore>Learn more</learnMore>",
                            values: {
                                learnMore: eX
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
                        learnMore: eQ
                    }
                }), d[30] = s) : s = d[30], t = s
            } else if ("image" === p) {
                let e, s;
                d[31] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    ...e4.sharePublicLinkToImage
                }), d[31] = e) : e = d[31], a = e, d[32] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(h.a, {
                            id: "chatgptConversations.shareDialog.imagePublicLinkAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access this image. Confirm you have the rights to share this image. <learnMore>Learn more</learnMore>",
                            values: {
                                learnMore: eY
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
                    ...e4.sharePublicLinkToMessage
                }), d[35] = u, d[36] = e) : e = d[36], a = e, d[37] !== u ? (s = (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(i.Fragment, {
                        children: u ? (0, i.jsx)(h.a, {
                            id: "chatgptConversations.shareDialog.poll.publicAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access and vote on this poll. <learnMore>Learn more</learnMore>",
                            values: {
                                learnMore: eV
                            }
                        }) : (0, i.jsx)(h.a, {
                            id: "chatgptConversations.shareDialog.messagePublicLinkAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access this message. <learnMore>Learn more</learnMore>",
                            values: {
                                learnMore: eK
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
                                learnMore: eB
                            }
                        })
                    }), null]
                }), d[40] = s) : s = d[40], t = s
            } else {
                let e, s;
                d[41] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                    ...e4.sharePublicLinkToConversation
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

        function eX(e) {
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

        function eZ(e) {
            return (0, i.jsx)(K, {
                children: e
            })
        }

        function e0(e) {
            return (0, i.jsx)(K, {
                children: e
            })
        }

        function e1(e) {
            let a, t, n = (0, s.c)(5),
                {
                    item: r,
                    serverConversationId: o
                } = e;
            n[0] !== o ? (a = (0, D.c)((0, O.c)(o)), n[0] = o, n[1] = a) : a = n[1];
            let {
                src: l,
                isLoading: c
            } = (0, A.k)(r.src ?? "", a);
            return n[2] !== c || n[3] !== l ? (t = (0, i.jsx)(e2, {
                src: l,
                isLoading: c
            }), n[2] = c, n[3] = l, n[4] = t) : t = n[4], t
        }

        function e2(e) {
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
                    ...e4.imageUnavailable
                })
            }), t[3] = o, t[4] = a) : a = t[4], a
        }

        function e3(e) {
            let a, t, n, r, o, l = (0, s.c)(16),
                {
                    showImageRightsNotice: c,
                    showContentNotices: d,
                    privacyNotices: g
                } = e;
            return l[0] !== g?.hasUnsupportedCodeInterpreterContent || l[1] !== d ? (a = d && g?.hasUnsupportedCodeInterpreterContent ? (0, i.jsx)(f.e, {
                children: (0, i.jsx)(m.a, {
                    content: (0, i.jsx)(h.a, {
                        ...e4.filesNotShared
                    }),
                    variant: "privacyNotice"
                })
            }) : null, l[0] = g?.hasUnsupportedCodeInterpreterContent, l[1] = d, l[2] = a) : a = l[2], l[3] !== g?.hasPersonalizedSources || l[4] !== d ? (t = d && g?.hasPersonalizedSources ? (0, i.jsx)(f.e, {
                children: (0, i.jsx)(m.a, {
                    content: (0, i.jsx)(h.a, {
                        ...e4.personalizedSourcesPrivate
                    }),
                    variant: "privacyNotice"
                })
            }) : null, l[3] = g?.hasPersonalizedSources, l[4] = d, l[5] = t) : t = l[5], l[6] !== g?.hasScreenshotReference || l[7] !== d ? (n = d && g?.hasScreenshotReference ? (0, i.jsx)(f.e, {
                children: (0, i.jsx)(m.a, {
                    content: (0, i.jsx)(h.a, {
                        ...e4.screenshotDisclaimer
                    }),
                    variant: "privacyNotice"
                })
            }) : null, l[6] = g?.hasScreenshotReference, l[7] = d, l[8] = n) : n = l[8], l[9] !== c ? (r = c ? (0, i.jsx)(f.e, {
                children: (0, i.jsx)("p", {
                    className: "text-sm text-secondary select-none",
                    children: (0, i.jsx)(h.a, {
                        ...e4.imageLicenseDisclaimer
                    })
                })
            }) : null, l[9] = c, l[10] = r) : r = l[10], l[11] !== a || l[12] !== t || l[13] !== n || l[14] !== r ? (o = (0, i.jsxs)(i.Fragment, {
                children: [a, t, n, r]
            }), l[11] = a, l[12] = t, l[13] = n, l[14] = r, l[15] = o) : o = l[15], o
        }

        function e5(e) {
            let a = (0, s.c)(5),
                {
                    error: t
                } = e;
            switch (t) {
                case "receiver-files-unsupported": {
                    let e;
                    return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e4.receiverFileCopyDeferred
                    }), a[0] = e) : e = a[0], e
                }
                case "blocked": {
                    let e;
                    return a[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e4.shareBlocked
                    }), a[1] = e) : e = a[1], e
                }
                case "conversation-load-failed": {
                    let e;
                    return a[2] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e4.shareConversationLoadFailed
                    }), a[2] = e) : e = a[2], e
                }
                case "copy-failed": {
                    let e;
                    return a[3] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e4.shareCopyFailed
                    }), a[3] = e) : e = a[3], e
                }
                case "create-failed": {
                    let e;
                    return a[4] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(h.a, {
                        ...e4.shareCreateFailed
                    }), a[4] = e) : e = a[4], e
                }
            }
        }
        let e4 = (0, g.f)({
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
            j = t("ABl9"),
            A = t("vLpE"),
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
        let U = (0, f.a)(async () => (await Promise.all([t.e(418851), t.e(109308), t.e(399565), t.e(257798), t.e(447351), t.e(617936), t.e(807489), t.e(337882), t.e(955979), t.e(646436), t.e(7078), t.e(200429), t.e(698524), t.e(956483), t.e(87162), t.e(396705), t.e(155568), t.e(731863), t.e(767086), t.e(76629), t.e(514085), t.e(851456), t.e(352157), t.e(832107), t.e(329156), t.e(829555), t.e(704740), t.e(249739)]).then(t.bind(t, "IQg5"))).WritingBlockDirectiveRenderer, P.a),
            q = {
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
            z = (0, _.c)({
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
                    g[8] !== m.renderFormat || g[9] !== m.text ? (e = (0, i.jsx)(J, {
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
                } else e?.some(K) && (n = "transcript"), a = null == e ? null : (0, i.jsx)($, {
                    preview: w ? "share" : void 0,
                    serverConversationId: b,
                    turns: e
                });
                g[0] = m, g[1] = w, g[2] = f, g[3] = b, g[4] = v, g[5] = a, g[6] = t, g[7] = n
            } else a = g[5], t = g[6], n = g[7];
            g[17] !== t || g[18] !== b ? (r = function(e) {
                return (0, i.jsx)(X, {
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
                g[25] !== b || g[26] !== a || g[27] !== v ? (e = (0, i.jsx)($, {
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
            return g[14] !== v || g[15] !== m || g[16] !== f ? (h = (0, i.jsx)($, {
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
                children: (0, i.jsx)($, {
                    markdownDirectives: q,
                    preview: r,
                    serverConversationId: o,
                    turns: l
                })
            }), n[0] = r, n[1] = o, n[2] = l, n[3] = a) : a = n[3], n[4] !== o || n[5] !== a ? (t = (0, i.jsx)(X, {
                serverConversationId: o,
                children: a
            }), n[4] = o, n[5] = a, n[6] = t) : t = n[6], t
        }

        function X(e) {
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
            }), o[5] = l, o[6] = n) : n = o[6], o[7] !== t || o[8] !== n ? (r = (0, i.jsx)(A.a, {
                route: t,
                children: n
            }), o[7] = t, o[8] = n, o[9] = r) : r = o[9], r
        }

        function $(e) {
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
                        }, e)), e.message.trim() ? (0, i.jsx)(J, {
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

        function J(e) {
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
                        if (t !== j.a && !G.a.has(t) && null == (0, g.z)(e.id)) continue;
                        a = (0, p.b)(e.label, j.b)
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
            if (e.href !== j.b) {
                let a, t = e[x.a];
                return n[0] !== e.children || n[1] !== e.href || n[2] !== e.title || n[3] !== t ? (a = (0, i.jsx)(z, {
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
                        error: C,
                        footer: T,
                        info: S,
                        isBusy: I,
                        isDismissalDisabled: j,
                        notices: A,
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
                v[2] !== I ? (t = I ? null : (0, i.jsx)(c.Fe, {}), v[2] = I, v[3] = t) : t = v[3], v[4] !== y || v[5] !== t ? (p = (0, i.jsxs)(i.Fragment, {
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
                let q = !C?.preventsSharing && k;
                v[9] !== U || v[10] !== I || v[11] !== q ? (u = (0, i.jsx)(o.a, {
                    color: "outline",
                    disabled: q,
                    loading: I,
                    size: "medium",
                    type: "submit",
                    children: U
                }), v[9] = U, v[10] = I, v[11] = q, v[12] = u) : u = v[12];
                let z = u;
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
                    K = C?.preventsSharing ? z : T ?? z;
                return v[16] !== w || v[17] !== x || v[18] !== C || v[19] !== S || v[20] !== H || v[21] !== A || v[22] !== N || v[23] !== D ? (f = C?.preventsSharing ? (0, i.jsx)(l.e, {
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
                    }), S, A, w ?? (null == x ? null : (0, i.jsx)(l.e, {
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
                }), v[16] = w, v[17] = x, v[18] = C, v[19] = S, v[20] = H, v[21] = A, v[22] = N, v[23] = D, v[24] = f) : f = v[24], v[25] !== _ || v[26] !== j || v[27] !== M || v[28] !== L || v[29] !== E || v[30] !== N || v[31] !== G || v[32] !== F || v[33] !== m || v[34] !== B || v[35] !== K || v[36] !== f ? (b = (0, i.jsx)(g.a, {
                    title: m,
                    subtitle: F,
                    compactImageSheetFooter: _,
                    isDismissalDisabled: j,
                    onClose: M,
                    onOpenAutoFocus: L,
                    onPortalContainerChange: E,
                    onSubmit: B,
                    size: G,
                    presentation: N,
                    footer: K,
                    children: f
                }), v[25] = _, v[26] = j, v[27] = M, v[28] = L, v[29] = E, v[30] = N, v[31] = G, v[32] = F, v[33] = m, v[34] = B, v[35] = K, v[36] = f, v[37] = b) : b = v[37], b
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
            o = t("BolX"),
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
                    variant: j
                } = e,
                A = void 0 === _ ? "immediate" : _,
                M = void 0 !== T && T,
                L = void 0 === j ? "default" : j,
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
            }), u[13] = l, u[14] = n, u[15] = h) : h = u[15], u[16] !== C || u[17] !== x || u[18] !== A || u[19] !== M ? (g = !M && null != x && (0, i.jsx)(w, {
                className: "absolute! end-2 top-2",
                eventLogger: C,
                expandedContentLoad: A,
                children: x
            }), u[16] = C, u[17] = x, u[18] = A, u[19] = M, u[20] = g) : g = u[20], u[21] !== N || u[22] !== h || u[23] !== g ? (p = (0, i.jsxs)("div", {
                className: N,
                children: [h, g]
            }), u[21] = N, u[22] = h, u[23] = g, u[24] = p) : p = u[24], p
        }

        function w(e) {
            let a, t, r, h, m, b, v, w, x, I, j, A, M, L, E, P, D = (0, s.c)(33),
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
            }, D[11] = G, D[12] = w) : w = D[12], D[13] === Symbol.for("react.memo_cache_sentinel") ? (x = (0, i.jsx)(u.O, {}), D[13] = x) : x = D[13], D[14] !== N || D[15] !== W ? (I = (0, i.jsx)(g.a, {
                className: N,
                color: "mapSurface",
                radius: "full",
                size: "inputIcon",
                "aria-label": W,
                type: "button",
                children: x
            }), D[14] = N, D[15] = W, D[16] = I) : I = D[16], D[17] !== W || D[18] !== I ? (j = (0, i.jsx)(n.a, {
                content: W,
                children: I
            }), D[17] = W, D[18] = I, D[19] = j) : j = D[19], D[20] === Symbol.for("react.memo_cache_sentinel") ? (A = (0, i.jsx)(p.e, {
                className: "sr-only",
                children: (0, i.jsx)(d.a, {
                    ...S.expandedTitle
                })
            }), D[20] = A) : A = D[20], D[21] !== O ? (M = O.formatMessage(S.expandedTitle), D[21] = O, D[22] = M) : M = D[22];
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
            }), D[26] = M, D[27] = L, D[28] = E) : E = D[28], D[29] !== j || D[30] !== E || D[31] !== w ? (P = (0, i.jsxs)(p.a, {
                size: "wide",
                variant: "chatgpt",
                backdrop: "modal",
                autoFocusCloseButton: !0,
                contentProps: v,
                onOpenChange: w,
                triggerContent: j,
                children: [A, E]
            }), D[29] = j, D[30] = E, D[31] = w, D[32] = P) : P = D[32], P
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