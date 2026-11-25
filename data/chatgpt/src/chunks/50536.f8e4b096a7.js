export const __rspack_esm_ids = [50536];
export const __webpack_modules__ = {
    keDc: (function(a, b, c) {
        a.exports = c.p + "assets/messages.65e1f7f9bb.svg"
    }),
    fP3y: (function(a, b, c) {
        a.exports = c.p + "assets/messages.eed095b840.svg"
    }),
    qrln: (function(a, b, c) {
        a.exports = c.p + "assets/whatsapp.0a1329508c.svg"
    }),
    fFFB: (function(a, b, c) {
        var d = c("ABep");
        c("zd8w"), b.a = a => (0, d.jsx)("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...a,
            children: (0, d.jsx)("path", {
                d: "M16.375 2.5H3.625C3.32663 2.5 3.04048 2.61853 2.8295 2.8295C2.61853 3.04048 2.5 3.32663 2.5 3.625V16.375C2.5 16.6734 2.61853 16.9595 2.8295 17.1705C3.04048 17.3815 3.32663 17.5 3.625 17.5H16.375C16.6734 17.5 16.9595 17.3815 17.1705 17.1705C17.3815 16.9595 17.5 16.6734 17.5 16.375V3.625C17.5 3.32663 17.3815 3.04048 17.1705 2.8295C16.9595 2.61853 16.6734 2.5 16.375 2.5ZM7 15.25H4.75V8.5H7V15.25ZM5.875 7.1875C5.61714 7.18013 5.36716 7.09693 5.15631 6.94831C4.94546 6.79968 4.78309 6.59221 4.68947 6.35183C4.59586 6.11145 4.57516 5.84881 4.62995 5.59673C4.68475 5.34465 4.81262 5.1143 4.99758 4.93448C5.18255 4.75466 5.4164 4.63332 5.66992 4.58565C5.92345 4.53797 6.1854 4.56606 6.42305 4.66641C6.6607 4.76675 6.86351 4.93491 7.00614 5.14986C7.14877 5.36481 7.22489 5.61703 7.225 5.875C7.21908 6.22776 7.07375 6.56384 6.82079 6.80977C6.56782 7.05571 6.22779 7.19151 5.875 7.1875ZM15.25 15.25H13V11.695C13 10.63 12.55 10.2475 11.965 10.2475C11.7935 10.2589 11.6259 10.3041 11.4719 10.3805C11.3179 10.4569 11.1805 10.5629 11.0676 10.6925C10.9547 10.8221 10.8685 10.9728 10.814 11.1358C10.7595 11.2988 10.7378 11.471 10.75 11.6425C10.7463 11.6774 10.7463 11.7126 10.75 11.7475V15.25H8.5V8.5H10.675V9.475C10.8944 9.14125 11.1958 8.86943 11.5504 8.68558C11.905 8.50172 12.3008 8.412 12.7 8.425C13.8625 8.425 15.22 9.07 15.22 11.17L15.25 15.25Z",
                fill: "currentColor"
            })
        })
    }),
    NGN7: (function(a, b, c) {
        c.d(b, {
            a: () => aM,
            ChatGptConversationShareRecoveryDialog: () => aL
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("FS1B"),
            g = c("gIcl"),
            h = c("T0Rc"),
            i = c("Q840"),
            j = c("zd8w"),
            k = c("Wf1j"),
            l = c("oyxz"),
            m = c("Qgfj"),
            n = c("O0M0"),
            o = c("Cslg"),
            p = c("MM0V"),
            q = c("mUDD"),
            r = c("Ot7V"),
            s = c("bf6R"),
            t = c("EShr"),
            u = c("RNul"),
            v = c("SGsN"),
            w = c("yGJW"),
            x = c("OWtl"),
            y = c("akkX"),
            z = c("FGv0"),
            A = c("TnP0"),
            B = c("qKAH"),
            C = c("hZax"),
            D = c("zHp1"),
            E = c("WFY2"),
            F = c("rvFo"),
            G = c("HFSu"),
            H = c("eShZ"),
            I = c("taWv"),
            J = c("r9i9"),
            K = c("Y7np"),
            L = c("oU3c"),
            M = c("SEBt"),
            N = c("OOaz"),
            O = c("fwwN"),
            P = c("cQW3"),
            Q = c("Tywu"),
            R = c("rfhJ"),
            S = c("ZtSy");

        function T(a) {
            let b, c = (0, e.c)(4),
                {
                    includeConversationAudience: f,
                    linkAppearance: g
                } = a,
                h = void 0 === g ? "secondary" : g;
            if (void 0 !== f && f) {
                let a;
                return c[0] !== h ? (a = (0, d.jsx)(l.a, {
                    id: "chatgptConversations.shareDialog.conversationMemoryDisclosure",
                    defaultMessage: "Anyone with this link can access messages up to this point. Memory sources won't be shared with viewers. <learnMore>Learn more</learnMore>",
                    values: {
                        learnMore: a => (0, d.jsx)(U, {
                            appearance: h,
                            children: a
                        })
                    }
                }), c[0] = h, c[1] = a) : a = c[1], a
            }
            return c[2] !== h ? (b = (0, d.jsx)(l.a, {
                id: "chatgptConversations.shareDialog.memoryDisclosure",
                defaultMessage: "Memory sources won't be shared with viewers. <learnMore>Learn more</learnMore>",
                values: {
                    learnMore: a => (0, d.jsx)(U, {
                        appearance: h,
                        children: a
                    })
                }
            }), c[2] = h, c[3] = b) : b = c[3], b
        }

        function U(a) {
            let b, c = (0, e.c)(3),
                {
                    children: f,
                    appearance: g
                } = a,
                h = void 0 === g ? "secondary" : g;
            return c[0] !== h || c[1] !== f ? (b = (0, d.jsx)(d.Fragment, {
                children: (0, d.jsx)(S.a, {
                    appearance: h,
                    href: "https://help.openai.com/en/articles/7925741-chatgpt-shared-links",
                    initiator: "open_in_browser_bridge",
                    openTarget: "external-browser",
                    underline: "always",
                    children: f
                })
            }), c[0] = h, c[1] = f, c[2] = b) : b = c[2], b
        }
        var V = c("k5RO"),
            W = c("ZDhX"),
            X = c("on57"),
            Y = c("Sm6l"),
            Z = c("WAV0"),
            $ = c("fFFB"),
            _ = c.p + "assets/facebook-stories.a4b3bd52fa.svg",
            aa = c.p + "assets/line.54d213ef65.svg",
            ab = c.p + "assets/telegram.b7e1212639.svg",
            ac = c("qrln"),
            ad = c("O666"),
            ae = c("Ccjy"),
            af = c("HOLv"),
            ag = c.p + "assets/facebook.a44c3b23dc.svg",
            ah = c.p + "assets/instagram.f89c02c412.svg",
            ai = c.p + "assets/kakao-talk.9a71acddc9.svg",
            aj = c.p + "assets/line.8701c39f94.svg",
            ak = c.p + "assets/linkedin.a0e21ee4e9.svg",
            al = c("keDc"),
            am = c.p + "assets/reddit.ef23b998c8.svg",
            an = c.p + "assets/snapchat.68114a3519.svg",
            ao = c.p + "assets/telegram.4e098d17e4.svg",
            ap = c.p + "assets/whatsapp.95a74777d3.svg",
            aq = c.p + "assets/x.f402deb07e.svg",
            ar = c.p + "assets/facebook-messenger.d2456ff12a.svg",
            as = c.p + "assets/instagram-stories.c90c585419.svg",
            at = c.p + "assets/kakao-talk.a52fcff4cb.svg",
            au = c.p + "assets/linkedin.61d30fb4b9.svg",
            av = c("fP3y"),
            aw = c.p + "assets/reddit.960af71a47.svg",
            ax = c.p + "assets/x.1105bc9892.svg",
            ay = "mobileRow-V0E64y",
            az = c("TPF8"),
            aA = c("QYxa"),
            aB = c("xliv");

        function aC(a) {
            let b, c, f, g, h, i, j = (0, e.c)(46),
                {
                    copyLabel: l,
                    copyDisabled: m,
                    isBusy: n,
                    isDownloading: o,
                    socialDestinationsDisabled: p,
                    showSocialDestinations: q,
                    onCopy: r,
                    onDownload: s,
                    additionalActions: t,
                    onSocialShare: v,
                    experience: w,
                    onNativeShare: x,
                    canNativeShare: y,
                    country: z,
                    rowScrollPositions: A
                } = a,
                B = (0, k.a)();
            if (j[0] !== t || j[1] !== y || j[2] !== m || j[3] !== l || j[4] !== z || j[5] !== w.layout || j[6] !== w.unsupportedDestinationFallback || j[7] !== B || j[8] !== n || j[9] !== o || j[10] !== r || j[11] !== s || j[12] !== x || j[13] !== v || j[14] !== A || j[15] !== q || j[16] !== p) {
                h = Symbol.for("react.early_return_sentinel");
                a: {
                    let a, e, i, k = null == s ? [] : [{
                        id: "download",
                        disabled: o || n,
                        icon: (0, d.jsx)(af.a, {
                            asset: az.a
                        }),
                        label: B.formatMessage({
                            id: "chatgptConversations.shareDialog.destination.download.label",
                            defaultMessage: "Download"
                        }),
                        onClick: s
                    }];j[22] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(af.a, {
                        asset: aB.a
                    }), j[22] = a) : a = j[22];
                    let C = {
                            id: "copy",
                            disabled: m,
                            icon: a,
                            label: l,
                            onClick: r
                        },
                        D = y ? [{
                            id: "native",
                            disabled: m,
                            icon: (0, d.jsx)(af.a, {
                                asset: aA.a
                            }),
                            label: B.formatMessage({
                                id: "chatgptConversations.mobileImageShare.native",
                                defaultMessage: "Share to"
                            }),
                            onClick: x
                        }] : [],
                        E = [...k, C, ...D],
                        F = q ? (0, V.e)({
                            country: z
                        }).map(a => (function(a) {
                            let b, c, e, {
                                    destination: f,
                                    disabled: g,
                                    intl: h,
                                    onSocialShare: i
                                } = a,
                                j = a => (0, d.jsx)("img", {
                                    alt: "",
                                    "aria-hidden": !0,
                                    src: a
                                }),
                                k = a => (0, d.jsx)("img", {
                                    alt: "",
                                    "aria-hidden": !0,
                                    className: "destinationIconBackground-q4p_I2",
                                    src: a
                                });
                            switch (f) {
                                case "messages":
                                    b = j(av), c = k(al), e = h.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.messages",
                                        defaultMessage: "Messages"
                                    });
                                    break;
                                case "whatsapp":
                                    b = j(ac), c = k(ap), e = h.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.whatsapp",
                                        defaultMessage: "WhatsApp"
                                    });
                                    break;
                                case "instagram-stories":
                                    b = j(as), c = k(ah), e = h.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.instagramStories",
                                        defaultMessage: "Instagram"
                                    });
                                    break;
                                case "facebook-stories":
                                    b = j(_), c = k(ag), e = h.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.facebookStories",
                                        defaultMessage: "Facebook"
                                    });
                                    break;
                                case "telegram":
                                    b = j(ab), c = k(ao), e = h.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.telegram",
                                        defaultMessage: "Telegram"
                                    });
                                    break;
                                case "facebook-messenger":
                                    b = j(ar), c = k(ag), e = h.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.facebookMessenger",
                                        defaultMessage: "Messenger"
                                    });
                                    break;
                                case "kakao-talk":
                                    b = j(at), c = k(ai), e = h.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.kakaoTalk",
                                        defaultMessage: "KakaoTalk"
                                    });
                                    break;
                                case "snapchat-stories":
                                    b = (0, d.jsx)(ae.a, {
                                        "aria-hidden": "true",
                                        className: "text-brand-logo-foreground"
                                    }), c = k(an), e = h.formatMessage({
                                        id: "chatgptConversations.mobileImageShare.snapchatStories",
                                        defaultMessage: "Snapchat"
                                    });
                                    break;
                                case "line":
                                    b = j(aa), c = k(aj), e = h.formatMessage({
                                        id: "postSharingModal.line",
                                        defaultMessage: "LINE"
                                    });
                                    break;
                                case "x":
                                    b = j(ax), c = k(aq), e = h.formatMessage({
                                        id: "chatgptConversations.shareDialog.destination.x.label",
                                        defaultMessage: "X"
                                    });
                                    break;
                                case "linkedin":
                                    b = j(au), c = k(ak), e = h.formatMessage({
                                        id: "chatgptConversations.shareDialog.destination.linkedin.label",
                                        defaultMessage: "LinkedIn"
                                    });
                                    break;
                                case "reddit":
                                    b = j(aw), c = k(am), e = h.formatMessage({
                                        id: "chatgptConversations.shareDialog.destination.reddit.label",
                                        defaultMessage: "Reddit"
                                    })
                            }
                            return {
                                id: f,
                                disabled: g,
                                icon: b,
                                iconBackground: c,
                                label: e,
                                onClick: a => i(f, a)
                            }
                        })({
                            destination: a,
                            disabled: p || "native-share" === w.unsupportedDestinationFallback && (0, V.g)(a) && !y,
                            intl: B,
                            onSocialShare: v
                        })) : [],
                        G = "two-rows" === w.layout && F.length > 0;j[23] !== A ? (e = a => null == A ? {} : {
                        onScroll: b => {
                            A[a] = b.currentTarget.scrollLeft
                        },
                        ref: b => {
                            null != b && (b.scrollLeft = A[a] ?? 0)
                        }
                    }, j[23] = A, j[24] = e) : e = j[24];
                    let H = e;j[25] !== n || j[26] !== o ? (i = (a, b) => {
                        let {
                            id: c,
                            disabled: e,
                            icon: f,
                            iconBackground: g,
                            label: h,
                            onClick: i
                        } = a, j = "copy" === c && n || "download" === c && o;
                        return (0, d.jsx)(Z.a, {
                            extension: "download" === c,
                            children: (0, d.jsxs)(Y.a, {
                                "aria-label": h,
                                "aria-busy": j,
                                color: "shareDestination",
                                unstyled: !0,
                                className: (0, X.b)("mobileDestination-JRc58g", b && "mobileTwoRowDestination-jahy9S"),
                                "data-destination": c,
                                disabled: e,
                                size: "shareDestination",
                                type: "copy" === c ? "submit" : "button",
                                onClick: i,
                                children: [(0, d.jsxs)("span", {
                                    className: (0, X.b)("destinationIcon-EuU6jl", null != g && "destinationIconWithArtwork-eYPnWH"),
                                    children: [g, (0, d.jsx)("span", {
                                        className: "destinationIconForeground-usBliy",
                                        children: j ? (0, d.jsx)(u.a, {
                                            as: "span",
                                            className: "icon-sm"
                                        }) : f
                                    })]
                                }), (0, d.jsx)("span", {
                                    className: "w-full text-center whitespace-nowrap text-default select-none",
                                    "aria-live": "copy" === c ? "polite" : void 0,
                                    children: h
                                })]
                            })
                        }, c)
                    }, j[25] = n, j[26] = o, j[27] = i) : i = j[27];
                    let I = i;
                    if (G) {
                        let a, b, c, e, f, g, i = [...k, ...D, C];
                        j[28] !== H ? (a = H("destinations"), j[28] = H, j[29] = a) : a = j[29], j[30] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, X.b)("box-border flex min-w-0 w-full gap-x-5 overflow-x-auto overscroll-x-contain px-5 pt-5 pb-8", ay), j[30] = b) : b = j[30], j[31] !== I ? (c = a => I(a, !0), j[31] = I, j[32] = c) : c = j[32], j[33] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, d.jsx)("div", {
                            className: "w-full border-t-hairline border-default",
                            "aria-hidden": "true"
                        }), j[33] = e) : e = j[33], j[34] !== H ? (f = H("actions"), j[34] = H, j[35] = f) : f = j[35], j[36] === Symbol.for("react.memo_cache_sentinel") ? (g = (0, X.b)("box-border flex min-w-0 w-full gap-x-5 overflow-x-auto overscroll-x-contain px-5 pt-5 pb-8", ay, "mobileUtilityRow-iCKQaL"), j[36] = g) : g = j[36], h = (0, d.jsxs)("div", {
                            className: "flex w-full min-w-0 flex-col",
                            children: [(0, d.jsx)("div", {
                                "data-mobile-image-share-row": "destinations",
                                ...a,
                                className: b,
                                children: F.map(c)
                            }), e, (0, d.jsxs)("div", {
                                "data-mobile-image-share-row": "actions",
                                ...f,
                                className: g,
                                children: [i.map(a => I(a, !0)), t]
                            })]
                        });
                        break a
                    }
                    b = "combined",
                    j[37] !== H ? (c = H("combined"), j[37] = H, j[38] = c) : c = j[38],
                    j[39] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, X.b)("flex w-full gap-x-6 overflow-x-auto overscroll-x-contain px-6", ay), j[39] = f) : f = j[39],
                    g = [...E, ...F].map(a => I(a, !1))
                }
                j[0] = t, j[1] = y, j[2] = m, j[3] = l, j[4] = z, j[5] = w.layout, j[6] = w.unsupportedDestinationFallback, j[7] = B, j[8] = n, j[9] = o, j[10] = r, j[11] = s, j[12] = x, j[13] = v, j[14] = A, j[15] = q, j[16] = p, j[17] = b, j[18] = c, j[19] = f, j[20] = g, j[21] = h
            } else b = j[17], c = j[18], f = j[19], g = j[20], h = j[21];
            return h !== Symbol.for("react.early_return_sentinel") ? h : (j[40] !== t || j[41] !== b || j[42] !== c || j[43] !== f || j[44] !== g ? (i = (0, d.jsxs)("div", {
                "data-mobile-image-share-row": b,
                ...c,
                className: f,
                children: [g, t]
            }), j[40] = t, j[41] = b, j[42] = c, j[43] = f, j[44] = g, j[45] = i) : i = j[45], i)
        }

        function aD(a) {
            let b, c, f, g, h, j, k = (0, e.c)(22),
                {
                    "aria-label": l,
                    "data-destination": m,
                    disabled: n,
                    icons: o,
                    isBusy: p,
                    label: q,
                    announceLabel: r,
                    type: s,
                    onClick: t
                } = a,
                v = void 0 !== p && p,
                w = void 0 === s ? "button" : s;
            k[0] === Symbol.for("react.memo_cache_sentinel") ? (b = {
                layer: "3136899520",
                parameter: "large_share_destinations"
            }, k[0] = b) : b = k[0];
            let x = (0, i.x)(ad.b, b),
                y = x ? o.large : o.compact,
                z = x ? "size-16" : "size-11";
            k[1] !== z ? (c = (0, X.b)("share-destination-icon flex items-center justify-center rounded-full", z), k[1] = z, k[2] = c) : c = k[2], k[3] !== x || k[4] !== y || k[5] !== v ? (f = v ? (0, d.jsx)(u.a, {
                as: "span",
                className: x ? "size-8" : "icon-sm"
            }) : y, k[3] = x, k[4] = y, k[5] = v, k[6] = f) : f = k[6], k[7] !== c || k[8] !== f ? (g = (0, d.jsx)("span", {
                className: c,
                children: f
            }), k[7] = c, k[8] = f, k[9] = g) : g = k[9];
            let A = void 0 !== r && r ? "polite" : void 0;
            return k[10] !== q || k[11] !== A ? (h = (0, d.jsx)("span", {
                className: "w-full text-center text-xs whitespace-nowrap text-default select-none",
                "aria-live": A,
                children: q
            }), k[10] = q, k[11] = A, k[12] = h) : h = k[12], k[13] !== l || k[14] !== m || k[15] !== n || k[16] !== v || k[17] !== t || k[18] !== h || k[19] !== g || k[20] !== w ? (j = (0, d.jsxs)(Y.a, {
                "aria-label": l,
                "aria-busy": v,
                "data-destination": m,
                color: "shareDestination",
                disabled: n,
                size: "shareDestination",
                type: w,
                onClick: t,
                children: [g, h]
            }), k[13] = l, k[14] = m, k[15] = n, k[16] = v, k[17] = t, k[18] = h, k[19] = g, k[20] = w, k[21] = j) : j = k[21], j
        }
        let aE = ["IN", "MY", "BD", "SG"],
            aF = ["whatsapp", "telegram", "facebook"],
            aG = ["DE", "GB", "FR", "BR"],
            aH = ["whatsapp", "x", "facebook"];

        function aI(a) {
            let b, c, f, h, j, l, m, n, o, p, q = (0, e.c)(78),
                {
                    copyLabel: r,
                    copyDisabled: t,
                    isBusy: v,
                    isDownloading: w,
                    socialDestinationsDisabled: x,
                    showSocialDestinations: y,
                    onCopy: z,
                    onDownload: A,
                    additionalActions: B,
                    onSocialShare: D,
                    mobileImageActions: E,
                    projectStyleEligible: F
                } = a,
                G = void 0 !== w && w,
                H = (0, C.l)(),
                I = void 0 !== F && F && null == E && !!H.userID?.trim();
            q[0] === Symbol.for("react.memo_cache_sentinel") ? (b = {
                layer: "1145946487",
                parameter: "project_style_share_buttons"
            }, q[0] = b) : b = q[0];
            let J = !0 === (0, i.x)(I ? ad.b : null, b),
                K = null != E;
            q[1] !== K ? (c = {
                layer: "3136899520",
                parameter: "large_share_destinations",
                disableExposureLog: K
            }, q[1] = K, q[2] = c) : c = q[2];
            let L = (0, i.x)(J ? null : ad.b, c),
                M = (0, k.a)(),
                N = (0, C.h)();
            q[3] !== E || q[4] !== y || q[5] !== N || q[6] !== H ? (f = N.client.getContext().user?.country?.trim().toUpperCase(), h = null, null != f && H.userID?.trim() && null == E && y && !(0, g.d)() && !(0, g.b)() && (aE.includes(f) && N.getExperiment("3745082431").get("enabled", !1) ? h = aF : aG.includes(f) && N.getExperiment("234373177").get("enabled", !1) && (h = aH)), q[3] = E, q[4] = y, q[5] = N, q[6] = H, q[7] = f, q[8] = h) : (f = q[7], h = q[8]);
            let O = "JP" === f;
            q[9] !== O || q[10] !== E || q[11] !== y || q[12] !== N ? (j = null == E && y && (O || N.checkGate("2338166187")) && N.getLayer(O ? "494762337" : "2308409163").get("enabled", !1), q[9] = O, q[10] = E, q[11] = y, q[12] = N, q[13] = j) : j = q[13];
            let P = j;
            if (null != E) {
                let a;
                return q[14] !== B || q[15] !== t || q[16] !== r || q[17] !== f || q[18] !== v || q[19] !== G || q[20] !== E.canNativeShare || q[21] !== E.experience || q[22] !== E.onNativeShare || q[23] !== E.rowScrollPositions || q[24] !== z || q[25] !== A || q[26] !== D || q[27] !== y || q[28] !== x ? (a = (0, d.jsx)(aC, {
                    copyLabel: r,
                    copyDisabled: t,
                    isBusy: v,
                    isDownloading: G,
                    socialDestinationsDisabled: x,
                    showSocialDestinations: y,
                    onCopy: z,
                    onDownload: A,
                    additionalActions: B,
                    onSocialShare: D,
                    experience: E.experience,
                    onNativeShare: E.onNativeShare,
                    canNativeShare: E.canNativeShare,
                    country: f,
                    rowScrollPositions: E.rowScrollPositions
                }), q[14] = B, q[15] = t, q[16] = r, q[17] = f, q[18] = v, q[19] = G, q[20] = E.canNativeShare, q[21] = E.experience, q[22] = E.onNativeShare, q[23] = E.rowScrollPositions, q[24] = z, q[25] = A, q[26] = D, q[27] = y, q[28] = x, q[29] = a) : a = q[29], a
            }
            if (q[30] !== B || q[31] !== t || q[32] !== r || q[33] !== M || q[34] !== v || q[35] !== G || q[36] !== h || q[37] !== z || q[38] !== A || q[39] !== D || q[40] !== P || q[41] !== y || q[42] !== x || q[43] !== J) {
                m = Symbol.for("react.early_return_sentinel");
                a: {
                    let a, b, c, e = null == A ? [] : [{
                        id: "download",
                        largeIcon: (0, d.jsx)(s.u, {
                            "aria-hidden": "true"
                        }),
                        disabled: G,
                        icon: (0, d.jsx)(s.t, {}),
                        label: M.formatMessage({
                            id: "chatgptConversations.shareDialog.destination.download.label",
                            defaultMessage: "Download"
                        }),
                        onClick: A
                    }];q[46] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(s.Xe, {
                        "aria-hidden": "true"
                    }), q[46] = a) : a = q[46],
                    q[47] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, d.jsx)(s.We, {}), q[47] = b) : b = q[47],
                    q[48] !== t || q[49] !== r || q[50] !== z ? (c = {
                        id: "copy",
                        largeIcon: a,
                        disabled: t,
                        icon: b,
                        label: r,
                        onClick: z
                    }, q[48] = t, q[49] = r, q[50] = z, q[51] = c) : c = q[51];
                    let f = c,
                        g = y && null == h ? [...P ? [function(a) {
                            let {
                                disabled: b,
                                intl: c,
                                onSocialShare: e
                            } = a, f = (0, d.jsx)("img", {
                                alt: "",
                                "aria-hidden": !0,
                                src: aa
                            });
                            return {
                                id: "line",
                                largeIcon: f,
                                disabled: b,
                                icon: f,
                                label: c.formatMessage({
                                    id: "postSharingModal.line",
                                    defaultMessage: "LINE"
                                }),
                                onClick: a => e("line", a)
                            }
                        }({
                            disabled: x,
                            intl: M,
                            onSocialShare: D
                        })] : [], aJ({
                            destination: "x",
                            disabled: x,
                            intl: M,
                            onSocialShare: D
                        }), aJ({
                            destination: "linkedin",
                            disabled: x,
                            intl: M,
                            onSocialShare: D
                        }), ...P ? [] : [aJ({
                            destination: "reddit",
                            disabled: x,
                            intl: M,
                            onSocialShare: D
                        })]] : [];
                    if (null != h) {
                        let a;
                        q[52] !== M || q[53] !== D || q[54] !== x ? (a = a => aJ({
                            destination: a,
                            disabled: x,
                            intl: M,
                            onSocialShare: D
                        }), q[52] = M, q[53] = D, q[54] = x, q[55] = a) : a = q[55], g.push(...h.map(a))
                    }
                    if (J) {
                        let a, b, c, f = a => {
                            let {
                                id: b,
                                disabled: c,
                                icon: e,
                                label: f,
                                onClick: g
                            } = a;
                            return (0, d.jsx)(W.a, {
                                content: f,
                                children: (0, d.jsx)(Y.a, {
                                    "aria-label": f,
                                    "aria-busy": "download" === b && G,
                                    color: "secondary",
                                    "data-destination": b,
                                    disabled: c,
                                    radius: "full",
                                    size: "dialogAction",
                                    type: "button",
                                    uniform: !0,
                                    onClick: g,
                                    children: "download" === b && G ? (0, d.jsx)(u.a, {
                                        className: "icon-sm"
                                    }) : e
                                })
                            }, b)
                        };
                        q[56] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(s.Ve, {}), q[56] = a) : a = q[56], q[57] !== r ? (b = (0, d.jsx)("span", {
                            "aria-live": "polite",
                            children: r
                        }), q[57] = r, q[58] = b) : b = q[58], q[59] !== t || q[60] !== r || q[61] !== v || q[62] !== z || q[63] !== b ? (c = (0, d.jsxs)(Y.a, {
                            "aria-label": r,
                            "aria-busy": v,
                            color: "primary",
                            "data-destination": "copy",
                            disabled: t,
                            loading: v,
                            size: "dialogAction",
                            type: "submit",
                            onClick: z,
                            children: [a, b]
                        }), q[59] = t, q[60] = r, q[61] = v, q[62] = z, q[63] = b, q[64] = c) : c = q[64], m = (0, d.jsxs)("div", {
                            className: "flex w-full flex-wrap items-center justify-end gap-2 select-none",
                            children: [g.map(f), B, (0, d.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [e.map(f), c]
                            })]
                        });
                        break a
                    }
                    l = [f, ...g, ...e]
                }
                q[30] = B, q[31] = t, q[32] = r, q[33] = M, q[34] = v, q[35] = G, q[36] = h, q[37] = z, q[38] = A, q[39] = D, q[40] = P, q[41] = y, q[42] = x, q[43] = J, q[44] = l, q[45] = m
            } else l = q[44], m = q[45];
            if (m !== Symbol.for("react.early_return_sentinel")) return m;
            let Q = l,
                R = null == B && "flex-wrap justify-center gap-x-6 gap-y-4",
                S = null != B && "gap-3",
                T = null != B && L && "flex-wrap justify-center",
                U = null != B && !L && "justify-start overflow-x-auto sm:justify-center";
            return q[65] !== S || q[66] !== T || q[67] !== U || q[68] !== R ? (n = (0, X.b)("flex w-full", R, S, T, U), q[65] = S, q[66] = T, q[67] = U, q[68] = R, q[69] = n) : n = q[69], q[70] !== Q || q[71] !== v || q[72] !== G ? (o = Q.map(a => {
                let {
                    id: b,
                    disabled: c,
                    icon: e,
                    largeIcon: f,
                    label: g,
                    onClick: h
                } = a, i = "copy" === b && v || "download" === b && G;
                return (0, d.jsx)(Z.a, {
                    extension: "download" === b,
                    children: (0, d.jsx)(aD, {
                        "aria-label": g,
                        "data-destination": b,
                        disabled: c,
                        icons: {
                            compact: e,
                            large: f
                        },
                        isBusy: i,
                        label: g,
                        announceLabel: "copy" === b,
                        type: "copy" === b ? "submit" : "button",
                        onClick: h
                    })
                }, b)
            }), q[70] = Q, q[71] = v, q[72] = G, q[73] = o) : o = q[73], q[74] !== B || q[75] !== n || q[76] !== o ? (p = (0, d.jsxs)("div", {
                className: n,
                children: [o, B]
            }), q[74] = B, q[75] = n, q[76] = o, q[77] = p) : p = q[77], p
        }

        function aJ(a) {
            let b, c, e, {
                destination: f,
                disabled: g,
                intl: h,
                onSocialShare: i
            } = a;
            switch (f) {
                case "whatsapp":
                    b = aK(ac, "size-5"), c = aK(ac, "size-8"), e = h.formatMessage({
                        id: "chatgptConversations.shareDialog.destination.whatsapp.label",
                        defaultMessage: "WhatsApp"
                    });
                    break;
                case "telegram":
                    b = aK(ab, "size-5"), c = aK(ab, "size-8"), e = h.formatMessage({
                        id: "chatgptConversations.shareDialog.destination.telegram.label",
                        defaultMessage: "Telegram"
                    });
                    break;
                case "facebook":
                    b = aK(_, "size-5"), c = aK(_, "size-8"), e = h.formatMessage({
                        id: "chatgptConversations.shareDialog.destination.facebook.label",
                        defaultMessage: "Facebook"
                    });
                    break;
                case "x":
                    b = (0, d.jsx)(s.Ij, {
                        "aria-hidden": "true"
                    }), c = (0, d.jsx)(s.Jj, {
                        "aria-hidden": "true"
                    }), e = h.formatMessage({
                        id: "chatgptConversations.shareDialog.destination.x.label",
                        defaultMessage: "X"
                    });
                    break;
                case "linkedin":
                    b = (0, d.jsx)($.a, {
                        "aria-hidden": "true"
                    }), c = (0, d.jsx)(s.Ye, {
                        "aria-hidden": "true"
                    }), e = h.formatMessage({
                        id: "chatgptConversations.shareDialog.destination.linkedin.label",
                        defaultMessage: "LinkedIn"
                    });
                    break;
                case "reddit":
                    b = (0, d.jsx)(s.rh, {
                        "aria-hidden": "true"
                    }), c = (0, d.jsx)(s.sh, {
                        "aria-hidden": "true"
                    }), e = h.formatMessage({
                        id: "chatgptConversations.shareDialog.destination.reddit.label",
                        defaultMessage: "Reddit"
                    })
            }
            return {
                id: f,
                disabled: g,
                icon: b,
                largeIcon: c,
                label: e,
                onClick: a => i(f, a)
            }
        }

        function aK(a, b) {
            return (0, d.jsx)("span", {
                "aria-hidden": "true",
                className: (0, X.b)("bg-current", b),
                style: {
                    mask: `url(${a}) center / contain no-repeat`
                }
            })
        }

        function aL(a) {
            let b, c, f, g, h, k, l = (0, e.c)(12);
            l[0] !== a ? ({
                accountId: b,
                onClose: c,
                ...f
            } = a, l[0] = a, l[1] = b, l[2] = c, l[3] = f) : (b = l[1], c = l[2], f = l[3]);
            let m = (0, i.z)(o.f) === b;
            return l[4] !== m || l[5] !== c ? (g = () => {
                m || c()
            }, h = [m, c], l[4] = m, l[5] = c, l[6] = g, l[7] = h) : (g = l[6], h = l[7]), (0, j.useEffect)(g, h), l[8] !== m || l[9] !== c || l[10] !== f ? (k = m ? (0, d.jsx)(aM, {
                ...f,
                onClose: c
            }) : null, l[8] = m, l[9] = c, l[10] = f, l[11] = k) : k = l[11], k
        }

        function aM(a) {
            let b, c, f = (0, e.c)(9);
            return f[0] !== a.publishedShareLink?.shareLinkId || f[1] !== a.publishedWidget || f[2] !== a.responseRegion || f[3] !== a.shareSessionId || f[4] !== a.widget ? (b = null == a.widget && null == a.publishedWidget && null == a.responseRegion ? void 0 : JSON.stringify([a.widget?.attachment, a.responseRegion?.attachment, a.publishedShareLink?.shareLinkId, a.shareSessionId]), f[0] = a.publishedShareLink?.shareLinkId, f[1] = a.publishedWidget, f[2] = a.responseRegion, f[3] = a.shareSessionId, f[4] = a.widget, f[5] = b) : b = f[5], f[6] !== a || f[7] !== b ? (c = (0, d.jsx)(aN, {
                ...a
            }, b), f[6] = a, f[7] = b, f[8] = c) : c = f[8], c
        }

        function aN(a) {
            let b, c, m, p, s, u, G, S, T, U, W, X, Y, Z, $, _, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aJ, aK, aL = (0, e.c)(388),
                {
                    currentNodeId: aM,
                    image: aN,
                    imagePromptTemplate: aX,
                    imageShareOptions: aY,
                    recoveryShareLink: aZ,
                    publishedShareLink: a$,
                    publishedWidget: a_,
                    messageIds: a0,
                    mobileImageExperience: a1,
                    mobileImageRowScrollPositions: a2,
                    trackMobileImageShareLifecycle: a3,
                    onImageShareLinkPrepared: a4,
                    onClose: a9,
                    onResult: ba,
                    previewTurns: bb,
                    loadExpandedConversation: bc,
                    privacyNotices: bd,
                    prompt: be,
                    postShareSource: bf,
                    receiverShareLink: bg,
                    responseRegion: bh,
                    response: bi,
                    serverConversationId: bj,
                    shareSessionId: bk,
                    source: bl,
                    title: bm,
                    widget: bn
                } = a,
                bo = (0, i.y)(x.a),
                bp = (0, C.j)("3136899520"),
                [bq, br] = (0, j.useState)(!1),
                bs = (0, i.z)(null)?.data,
                bt = (0, i.z)(null),
                bu = (0, i.x)(null, bj),
                bv = (0, k.a)(),
                bw = (0, j.useRef)(!1),
                bx = (0, j.useRef)(!1);
            aL[0] !== ba ? (b = () => (bw.current = !0, () => {
                bw.current = !1, queueMicrotask(() => {
                    bw.current || bx.current || (bx.current = !0, ba?.(!1))
                })
            }), c = [ba], aL[0] = ba, aL[1] = b, aL[2] = c) : (b = aL[1], c = aL[2]), (0, j.useEffect)(b, c), aL[3] !== ba ? (m = function(a) {
                bx.current || (bx.current = !0, ba?.(a))
            }, aL[3] = ba, aL[4] = m) : m = aL[4];
            let by = m;
            aL[5] !== by || aL[6] !== a9 ? (p = function() {
                by(!1), a9()
            }, aL[5] = by, aL[6] = a9, aL[7] = p) : p = aL[7];
            let bz = p,
                bA = (0, j.useContext)(n.a);
            aL[8] !== aN || aL[9] !== bo || aL[10] !== bj ? (s = null == aN ? void 0 : (0, P.a)(bo, bj, aN), aL[8] = aN, aL[9] = bo, aL[10] = bj, aL[11] = s) : s = aL[11];
            let bB = s;
            aL[12] !== aX || aL[13] !== bB || aL[14] !== a$ || aL[15] !== bg || aL[16] !== aZ || aL[17] !== bo.queryClient ? (u = () => bg ?? a$ ?? aZ ?? (null == bB || null != aX ? null : bo.queryClient.getQueryData(bB.queryKey) ?? null), aL[12] = aX, aL[13] = bB, aL[14] = a$, aL[15] = bg, aL[16] = aZ, aL[17] = bo.queryClient, aL[18] = u) : u = aL[18];
            let [bC, bD] = (0, j.useState)(u), [bE] = (0, j.useState)(aU), bF = bk ?? bE, [bG, bH] = (0, j.useState)("message");
            aL[19] !== a0 || aL[20] !== bb || aL[21] !== bi || aL[22] !== bp ? (G = null != a0 && null != bi && null != bb && bp.get("message_share_scope_picker", !1), aL[19] = a0, aL[20] = bb, aL[21] = bi, aL[22] = bp, aL[23] = G) : G = aL[23];
            let bI = G,
                bJ = bI && "conversation" === bG;
            aL[24] !== bF ? (S = ["expanded-conversation-share", bF], aL[24] = bF, aL[25] = S) : S = aL[25];
            let bK = S,
                bL = bJ && null != bc;
            aL[26] !== bc ? (T = a => {
                let {
                    signal: b
                } = a;
                if (null == bc) throw Error("Expanded conversation loader unavailable");
                return bc(b)
            }, aL[26] = bc, aL[27] = T) : T = aL[27], aL[28] !== bK || aL[29] !== T || aL[30] !== bL ? (U = {
                enabled: bL,
                queryKey: bK,
                queryFn: T,
                staleTime: 1 / 0,
                gcTime: 0,
                retry: !1
            }, aL[28] = bK, aL[29] = T, aL[30] = bL, aL[31] = U) : U = aL[31];
            let {
                data: bM,
                error: bN,
                isFetching: bO,
                refetch: bP
            } = (0, h.a)(U), [bQ, bR] = (0, j.useState)("idle"), [bS, bT] = (0, j.useState)(null != aZ ? "copy-failed" : null), [bU, bV] = (0, j.useState)(!1);
            aL[32] !== bj ? (W = ["chatgpt-conversation-share", bj], aL[32] = bj, aL[33] = W) : W = aL[33];
            let bW = W,
                bX = null == aZ && null == bg && null == a$ && null == be && null == aN && (null == a0 || bJ) && null == bh && null == bn;
            aL[34] !== aM || aL[35] !== bj ? (X = () => (0, J.i)({
                conversationId: bj,
                currentNodeId: aM
            }), aL[34] = aM, aL[35] = bj, aL[36] = X) : X = aL[36], aL[37] !== bW || aL[38] !== bX || aL[39] !== X ? (Y = {
                enabled: bX,
                queryFn: X,
                queryKey: bW,
                retry: !1,
                staleTime: F.b.ONE_MINUTE
            }, aL[37] = bW, aL[38] = bX, aL[39] = X, aL[40] = Y) : Y = aL[40];
            let {
                data: bY,
                error: bZ,
                isLoading: b$
            } = (0, h.a)(Y);
            aL[41] === Symbol.for("react.memo_cache_sentinel") ? (Z = {
                enabled: !1,
                queryFn: aT,
                queryKey: ["accounts", "check"],
                staleTime: F.b.ONE_MINUTE
            }, aL[41] = Z) : Z = aL[41];
            let {
                data: b_
            } = (0, h.a)(Z), b0 = null != aN, b1 = null != a1 && b0, b2 = b1 || !0 === a3, b3 = null != bg || bf?.kind === "shared", b4 = (aN?.additionalImages?.length ?? 0) > 0, b5 = aN?.item.isAnimated === !0 && !b4;
            aL[42] !== aN || aL[43] !== bj || aL[44] !== bF ? ($ = (0, I.c)((0, N.c)(bj), void 0, null != aN && null == aN.previewSrc ? bF : void 0), aL[42] = aN, aL[43] = bj, aL[44] = bF, aL[45] = $) : $ = aL[45];
            let {
                src: b6,
                isLoading: b7
            } = (0, D.m)(null != aN && (b4 || null == aN.previewSrc) ? aN.item.src ?? "" : "", $), b8 = null != aN && null == aN.previewSrc && null == b6, b9 = b4 ? "image_series" : "single_image", ca = bn ?? a_, cb = null != a0 || null != bh || null != ca || bg?.contentType === "message", cc = null != bh, cd = ca?.metadata.widgetType === "visualization", ce = ca?.metadata.widgetName === "create_interactive_poll" || ca?.metadata.widgetName === "CreateInteractivePoll", cf = null != be || null != aX, cg = b0 || cb || cf, ch = !cg || bJ, ci = cg || !0, cj = "conversation";
            if (cd ? cj = "widget" : null != aX ? cj = "prompt" : b5 ? cj = "gif" : b0 ? cj = b4 ? "images" : "image" : cc ? cj = "response-region" : cb ? cj = bJ ? "conversation" : "message" : cf && (cj = "prompt"), null == bi) _ = bd;
            else if (bJ) _ = bM?.privacyNotices ?? (null == bc ? bd : void 0);
            else {
                let a;
                aL[46] !== bi ? (a = (0, J.m)(bi), aL[46] = bi, aL[47] = a) : a = aL[47], _ = a
            }
            let ck = b0 || (!cg || cb) && _?.hasImageReference === !0;
            aL[48] !== aN || aL[49] !== b4 || aL[50] !== bm ? (aa = (b4 ? void 0 : aN?.item.chatGptDisplayTitle) ?? (0, L.c)(bm), aL[48] = aN, aL[49] = b4, aL[50] = bm, aL[51] = aa) : aa = aL[51];
            let cl = aa,
                cm = ch && bY?.is_public === !0 && !0 === bY.is_visible,
                cn = b_?.accounts?.find(a => a.id === (bA?.accountId ?? b_.account_ordering?.[0])),
                co = cn?.structure ?? bA?.accountStructureAtLogin,
                cp = "unknown";
            bC?.isWorkspaceOnly != null ? cp = bC.isWorkspaceOnly ? "workspace" : "public" : null == bY || b0 ? ("personal" === co || "workspace" === co) && (cp = "workspace" === co ? "workspace" : "public") : cp = bY.share_url.includes("/share/e/") ? "workspace" : "public", aL[52] !== aN || aL[53] !== aX || aL[54] !== bB?.queryKey || aL[55] !== bj ? (ab = null != aX ? ["chatgpt-image-prompt-share-preparation", bj, aN?.item.id, aX.revision] : bB?.queryKey ?? ["disabled-chatgpt-image-share-query"], aL[52] = aN, aL[53] = aX, aL[54] = bB?.queryKey, aL[55] = bj, aL[56] = ab) : ab = aL[56], aL[57] !== aX || aL[58] !== bB?.queryFn ? (ac = null != aX ? () => aX.createLink("native") : bB?.queryFn ?? aS, aL[57] = aX, aL[58] = bB?.queryFn, aL[59] = ac) : ac = aL[59];
            let cq = b1 && (0, Q.a)() && aX?.actionsDisabled !== !0 && (null != aX || null != bB) && "public" === cp && null == bC;
            aL[60] !== ab || aL[61] !== ac || aL[62] !== cq ? (ad = {
                queryKey: ab,
                queryFn: ac,
                enabled: cq,
                retry: !1,
                staleTime: 1 / 0
            }, aL[60] = ab, aL[61] = ac, aL[62] = cq, aL[63] = ad) : ad = aL[63];
            let cr = (0, h.a)(ad);
            cr.data?.isWorkspaceOnly != null && (cp = cr.data.isWorkspaceOnly ? "workspace" : "public");
            let cs = bC ?? cr.data ?? null,
                ct = null == aX ? cs : null;
            aL[64] !== a4 || aL[65] !== ct ? (ae = () => {
                null != ct && a4?.(ct)
            }, af = [a4, ct], aL[64] = a4, aL[65] = ct, aL[66] = ae, aL[67] = af) : (ae = aL[66], af = aL[67]), (0, j.useEffect)(ae, af);
            let cu = cs?.shareLinkUrl ?? (cm ? bY.share_url : null),
                cv = ch && null == cs && cm && bY.current_node_id !== aM,
                cw = "workspace" === cp,
                cx = "creating" === bQ,
                cy = bJ && null != bc && null == bM,
                cz = ch && b$ || cy && bO;
            aL[68] !== cs || aL[69] !== bS || aL[70] !== bN || aL[71] !== bZ || aL[72] !== cr.error || aL[73] !== cy || aL[74] !== bX ? (null == (ag = bS) && cy && null != bN && (ag = "conversation-load-failed"), null == ag && bX && null == cs && null != bZ && (ag = bZ instanceof J.a ? "blocked" : "create-failed"), null == ag && null == cs && null != cr.error && (ag = cr.error instanceof J.a ? "blocked" : "create-failed"), aL[68] = cs, aL[69] = bS, aL[70] = bN, aL[71] = bZ, aL[72] = cr.error, aL[73] = cy, aL[74] = bX, aL[75] = ag) : ag = aL[75];
            let cA = a8.description,
                cB = a8.publicLinkAudience;
            if (cd) {
                let a;
                aL[76] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(l.a, {
                    ...a8.widgetTitle
                }), aL[76] = a) : a = aL[76], ah = a
            } else if (b5) {
                let a;
                aL[77] !== aX ? (a = null != aX ? (0, d.jsx)(l.a, {
                    id: "chatgptConversations.shareDialog.gifWithPromptTitle",
                    defaultMessage: "Share GIF with prompt"
                }) : (0, d.jsx)(l.a, {
                    id: "chatgptConversations.shareDialog.gifTitle",
                    defaultMessage: "Share GIF"
                }), aL[77] = aX, aL[78] = a) : a = aL[78], ah = a
            } else if (null != aX) {
                let a;
                aL[79] !== aX.label ? (a = "image_with_prompt" === aX.label ? (0, d.jsx)(l.a, {
                    id: "chatgptConversations.shareDialog.imageWithPromptTitle",
                    defaultMessage: "Share image with prompt"
                }) : (0, d.jsx)(l.a, {
                    id: "chatgptConversations.shareDialog.imagePromptTitle",
                    defaultMessage: "Share prompt with image"
                }), aL[79] = aX.label, aL[80] = a) : a = aL[80], ah = a
            } else if (b0) {
                let a;
                aL[81] !== cl || aL[82] !== aY || aL[83] !== b4 || aL[84] !== b1 ? (a = b1 || null == cl || null != aY ? (0, d.jsx)(l.a, {
                    ...b4 ? a8.imagesTitle : a8.imageTitle
                }) : (0, d.jsx)(d.Fragment, {
                    children: cl
                }), aL[81] = cl, aL[82] = aY, aL[83] = b4, aL[84] = b1, aL[85] = a) : a = aL[85], ah = a
            } else if (ce) {
                let a;
                aL[86] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(l.a, {
                    id: "chatgptConversations.shareDialog.poll.title",
                    defaultMessage: "Share poll"
                }), aL[86] = a) : a = aL[86], ah = a
            } else if (cc) {
                let a;
                aL[87] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(l.a, {
                    id: "chatgptConversations.shareDialog.responseRegionTitle",
                    defaultMessage: "Share"
                }), aL[87] = a) : a = aL[87], ah = a
            } else if (cb) {
                let a;
                aL[88] !== cl ? (a = null == cl ? (0, d.jsx)(l.a, {
                    ...a8.messageTitle
                }) : (0, d.jsx)(d.Fragment, {
                    children: cl
                }), aL[88] = cl, aL[89] = a) : a = aL[89], ah = a
            } else if (cf) {
                let a;
                aL[90] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(l.a, {
                    ...a8.promptTitle
                }), aL[90] = a) : a = aL[90], ah = a
            } else {
                if (ci) {
                    let a;
                    aL[91] !== cl ? (a = null == cl ? void 0 : (0, d.jsx)(d.Fragment, {
                        children: cl
                    }), aL[91] = cl, aL[92] = a) : a = aL[92], ah = a
                }
                cw ? cA = bd?.isProjectConversation ? a8.workspaceProjectDescription : a8.workspaceDescription : bY?.is_anonymous === !1 ? cA = a8.attributedDescription : bd?.isProjectConversation && (cA = a8.projectDescription)
            }
            cw && (cB = ck ? a8.workspaceImageRightsAudience : a8.workspaceLinkAudience);
            let cC = "copied" === bQ ? a8.copied : a8.copyLink;
            cv ? cC = a8.updateLink : null == cu && "copied" !== bQ && (cC = a8.createLink), aL[93] !== bv || aL[94] !== bQ ? (ai = "copied" === bQ ? bv.formatMessage(a8.copied) : bv.formatMessage(a8.copyLink), aL[93] = bv, aL[94] = bQ, aL[95] = ai) : ai = aL[95];
            let cD = ai;
            aL[96] !== by || aL[97] !== bv || aL[98] !== bo || aL[99] !== bn ? (aj = function(a, b) {
                let c;
                "create-failed" === b && (by(!1), bn?.onError?.(a));
                let d = b;
                switch (a instanceof H.FetchError && "receiver_file_copy_deferred" === a.errorCode ? d = "receiver-files-unsupported" : a instanceof J.a && (d = "blocked"), "blocked" !== d && E.a.warning("chatgpt_conversation_share_failed", {
                        safe: {
                            stage: d
                        },
                        sensitive: {
                            error: a
                        }
                    }), d) {
                    case "receiver-files-unsupported":
                        c = bv.formatMessage(a8.receiverFileCopyDeferred);
                        break;
                    case "blocked":
                        c = bv.formatMessage(a8.shareBlocked);
                        break;
                    case "copy-failed":
                        c = bv.formatMessage(a8.shareCopyFailed);
                        break;
                    case "create-failed":
                        c = bv.formatMessage(a8.shareCreateFailed)
                }
                return bT(d), bR("idle"), bo.get(v.f).danger(c, {
                    errorAnalytics: {
                        toastId: {
                            "copy-failed": "failed_to_copy_share_link",
                            "create-failed": "failed_to_generate_share_link",
                            blocked: "chatgptConversationShareDialog.shareBlocked",
                            "receiver-files-unsupported": "chatgptConversationShareDialog.receiverFileCopyDeferred"
                        } [d]
                    }
                }), "receiver-files-unsupported" === d ? "create-failed" : d
            }, aL[96] = by, aL[97] = bv, aL[98] = bo, aL[99] = bn, aL[100] = aj) : aj = aL[100];
            let cE = aj;
            if (aL[101] !== ca || aL[102] !== b0 || aL[103] !== cb || aL[104] !== cf || aL[105] !== b3 || aL[106] !== cc || aL[107] !== bf?.kind || aL[108] !== bg || aL[109] !== bJ || aL[110] !== bl) {
                ak = b3 ? "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER" : "CHATGPT_SHARE_FLOW_ACTOR_SHARER";
                let a = bf?.kind === "shared";
                am = bl ?? "CHATGPT_SHARE_FLOW_SOURCE_CONVERSATION_MENU", b3 && (am = a ? "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_MODEL_WRITTEN_ACTION" : "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_HEADER"), null != bg ? al = bg.attachmentType : null != ca ? (al = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_WIDGET", am = "CHATGPT_SHARE_FLOW_SOURCE_WIDGET_INLINE_ACTION") : b0 ? (al = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_IMAGE_SHARE", am = bl ?? "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION") : cc ? (al = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_RESPONSE_REGION", a || (am = "CHATGPT_SHARE_FLOW_SOURCE_WIDGET_INLINE_ACTION")) : cb ? (am = "CHATGPT_SHARE_FLOW_SOURCE_MESSAGE_INLINE_ACTION", bJ || (al = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_MESSAGE_SLICE")) : cf && (al = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_PROMPT", am = bl ?? "CHATGPT_SHARE_FLOW_SOURCE_MESSAGE_INLINE_ACTION"), aL[101] = ca, aL[102] = b0, aL[103] = cb, aL[104] = cf, aL[105] = b3, aL[106] = cc, aL[107] = bf?.kind, aL[108] = bg, aL[109] = bJ, aL[110] = bl, aL[111] = ak, aL[112] = al, aL[113] = am
            } else ak = aL[111], al = aL[112], am = aL[113];
            let cF = (bg?.contentType === "message" || cg) && !bJ ? "CHATGPT_SHARE_FLOW_CONTENT_TYPE_POST_SLICE" : "CHATGPT_SHARE_FLOW_CONTENT_TYPE_SHARED_CONVERSATION";
            aL[114] !== cs || aL[115] !== aM || aL[116] !== cm || aL[117] !== bY || aL[118] !== by || aL[119] !== aX || aL[120] !== bB || aL[121] !== cy || aL[122] !== cv || aL[123] !== a0 || aL[124] !== a4 || aL[125] !== be || aL[126] !== bh || aL[127] !== bo || aL[128] !== bj || aL[129] !== bW || aL[130] !== bJ || aL[131] !== bm || aL[132] !== ch || aL[133] !== bn ? (an = async function(a) {
                let b;
                if (null != bn && (!bw.current || bn.isCurrent?.() === !1)) throw Error("The selected widget is no longer available");
                if (null != bh && (!bw.current || bh.isCurrent?.() === !1)) throw Error("The selected response region is no longer available");
                if (cy) throw Error("Expanded conversation unavailable");
                let c = cs ?? (cm ? {
                    currentNodeId: bY.current_node_id,
                    shareLinkId: bY.share_id,
                    shareLinkUrl: bY.share_url
                } : null);
                if (null == aX && null != c && !cv) return by(!0), c;
                if (null != aX) b = await aX.createLink(a);
                else if (null != bB) b = await bo.queryClient.fetchQuery(bB), a4?.(b);
                else if (null != bn) {
                    if (b = await (0, J.g)(bn.attachment, aM), !bw.current || bn.isCurrent?.() === !1) throw Error("The selected widget changed while sharing")
                } else if (null != bh) {
                    if (b = await (0, J.f)({
                            attachment: bh.attachment,
                            currentNodeId: aM
                        }), !bw.current || bh.isCurrent?.() === !1) throw Error("The selected response region changed while sharing")
                } else b = null == a0 || bJ ? null != be ? await bo.queryClient.fetchQuery({
                    queryFn: () => (0, J.e)({
                        conversationId: bj,
                        messageId: be.messageId
                    }),
                    queryKey: ["chatgpt-prompt-share", bj, be.messageId],
                    staleTime: 1 / 0
                }) : await (0, J.h)({
                    conversationId: bj,
                    currentNodeId: aM,
                    existingShareLink: bY,
                    title: bm
                }) : await bo.queryClient.fetchQuery({
                    queryFn: () => (0, J.d)({
                        conversationId: bj,
                        currentNodeId: aM,
                        messageIds: a0
                    }),
                    queryKey: ["chatgpt-message-share", bo.get(o.f), bj, aM, a0],
                    staleTime: 1 / 0
                });
                return bD(b), by(!0), null != bY && ch && bo.queryClient.setQueryData(bW, {
                    ...bY,
                    current_node_id: aM,
                    is_public: !0,
                    is_visible: !0
                }), b
            }, aL[114] = cs, aL[115] = aM, aL[116] = cm, aL[117] = bY, aL[118] = by, aL[119] = aX, aL[120] = bB, aL[121] = cy, aL[122] = cv, aL[123] = a0, aL[124] = a4, aL[125] = be, aL[126] = bh, aL[127] = bo, aL[128] = bj, aL[129] = bW, aL[130] = bJ, aL[131] = bm, aL[132] = ch, aL[133] = bn, aL[134] = an) : an = aL[134];
            let cG = an;
            aL[135] !== ak || aL[136] !== al || aL[137] !== cF || aL[138] !== cs || aL[139] !== ca?.metadata || aL[140] !== cG || aL[141] !== cm || aL[142] !== bY || aL[143] !== aX || aL[144] !== b8 || aL[145] !== b3 || aL[146] !== cv || aL[147] !== cx || aL[148] !== a9 || aL[149] !== bf || aL[150] !== cE || aL[151] !== bo || aL[152] !== bj || aL[153] !== cu || aL[154] !== bF || aL[155] !== am || aL[156] !== ci ? (ao = async function() {
                if (cx || b8 || aX?.actionsDisabled) return;
                let a = (0, M.b)(bo, {
                    actor: ak,
                    attachmentType: al,
                    widgetMetadata: ca?.metadata,
                    contentType: cF,
                    conversationId: b3 ? void 0 : bj,
                    shareId: cs?.shareLinkId ?? (cm ? bY.share_id : void 0),
                    shareSessionId: bF,
                    source: am,
                    sourceShareId: bf?.kind === "shared" ? bf.sourcePostId : void 0,
                    usedExistingLink: null != cu && !cv
                });
                bT(null), bR("creating");
                let b = null != aX || null == cu || cv ? "create-failed" : "copy-failed",
                    c = cs;
                try {
                    let d, e = cG("copy"),
                        f = e.then(aR);
                    f.catch(aQ);
                    let g = (0, z.c)(f);
                    null != g && g.catch(aP);
                    let h = await e;
                    c = h, b = "copy-failed";
                    let i = h.shareLinkUrl;
                    if (null == g) d = await (0, z.b)(i);
                    else try {
                        await g, d = !0
                    } catch (a) {
                        E.a.warning("chatgpt_conversation_share_clipboard_write_failed", {
                            safe: {
                                method: "streaming-clipboard-item"
                            },
                            sensitive: {
                                error: a
                            }
                        }), d = await (0, z.b)(i)
                    }
                    if (!d) {
                        a({
                            result: "copy-failed",
                            shareId: h.shareLinkId
                        }), cE(Error("Failed to copy ChatGPT conversation share link"), "copy-failed");
                        return
                    }
                    a({
                        result: "link-copied",
                        shareId: h.shareLinkId
                    }), bR("copied"), ci || ((0, y.a)(bo), a9())
                } catch (e) {
                    let d = cE(e, b);
                    a("create-failed" === d ? {
                        result: d,
                        error: e
                    } : {
                        result: d,
                        shareId: c?.shareLinkId
                    })
                }
            }, aL[135] = ak, aL[136] = al, aL[137] = cF, aL[138] = cs, aL[139] = ca?.metadata, aL[140] = cG, aL[141] = cm, aL[142] = bY, aL[143] = aX, aL[144] = b8, aL[145] = b3, aL[146] = cv, aL[147] = cx, aL[148] = a9, aL[149] = bf, aL[150] = cE, aL[151] = bo, aL[152] = bj, aL[153] = cu, aL[154] = bF, aL[155] = am, aL[156] = ci, aL[157] = ao) : ao = aL[157];
            let cH = ao;
            aL[158] !== al || aL[159] !== cF || aL[160] !== cs || aL[161] !== bo || aL[162] !== bj || aL[163] !== bF || aL[164] !== b2 || aL[165] !== am ? (ap = function(a) {
                (0, w.a)(bo, f.i, {
                    action: a,
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_SHARER",
                    attachmentType: al,
                    contentType: cF,
                    conversationId: bj,
                    ...b2 && null != cs && !cs.isWorkspaceOnly ? {
                        shareId: cs.shareLinkId
                    } : {},
                    shareSessionId: bF,
                    source: am,
                    sheetType: "CHATGPT_SHARE_FLOW_SHEET_TYPE_CUSTOM"
                })
            }, aL[158] = al, aL[159] = cF, aL[160] = cs, aL[161] = bo, aL[162] = bj, aL[163] = bF, aL[164] = b2, aL[165] = am, aL[166] = ap) : ap = aL[166];
            let cI = ap;
            aL[167] !== cs || aL[168] !== ag || aL[169] !== by || aL[170] !== bB || aL[171] !== bv || aL[172] !== cx || aL[173] !== a9 || aL[174] !== cE || aL[175] !== bo || aL[176] !== bj || aL[177] !== cp || aL[178] !== bF || aL[179] !== am ? (aq = async function() {
                if (!cx && null != bB && "public" === cp && null != cs && "blocked" !== ag) {
                    bT(null), bR("creating");
                    try {
                        let a = await (0, Q.b)(bo, cs, bj, bF, am);
                        bR("idle"), "shared" === a && (by(!0), a9()), "failed" === a && bo.get(v.f).danger(bv.formatMessage({
                            id: "chatgptConversations.mobileImageShare.nativeFailed",
                            defaultMessage: "Could not open sharing. Try again or copy the link"
                        }), {
                            errorAnalytics: {
                                toastId: "chatgptConversations.mobileImageShare.nativeFailed"
                            }
                        })
                    } catch (a) {
                        cE(a, "create-failed")
                    }
                }
            }, aL[167] = cs, aL[168] = ag, aL[169] = by, aL[170] = bB, aL[171] = bv, aL[172] = cx, aL[173] = a9, aL[174] = cE, aL[175] = bo, aL[176] = bj, aL[177] = cp, aL[178] = bF, aL[179] = am, aL[180] = aq) : aq = aL[180];
            let cJ = aq;
            aL[181] !== ak || aL[182] !== al || aL[183] !== cF || aL[184] !== cs || aL[185] !== cl || aL[186] !== ca?.metadata || aL[187] !== cG || aL[188] !== cm || aL[189] !== bY || aL[190] !== aX || aL[191] !== b9 || aL[192] !== bv || aL[193] !== b0 || aL[194] !== b8 || aL[195] !== cf || aL[196] !== b3 || aL[197] !== cv || aL[198] !== cx || aL[199] !== a1?.unsupportedDestinationFallback || aL[200] !== a9 || aL[201] !== bf || aL[202] !== cE || aL[203] !== bo || aL[204] !== bj || aL[205] !== cp || aL[206] !== bQ || aL[207] !== bF || aL[208] !== b2 || aL[209] !== am || aL[210] !== b1 ? (ar = async function(a, b) {
                var c;
                let d;
                if (cx || b8 || "public" !== cp || aX?.actionsDisabled) return;
                b.preventDefault(), b3 || cf || "line" !== (c = a) && "linkedin" !== c && "reddit" !== c && "x" !== c || (0, M.g)(bo, a, b0 ? b9 : void 0);
                let e = b2 && b0 ? bj : void 0;
                (0, M.f)(bo, {
                    actor: ak,
                    attachmentType: al,
                    conversationId: e,
                    widgetMetadata: ca?.metadata,
                    contentType: cF,
                    destination: function(a) {
                        switch (a) {
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
                    }(a),
                    shareId: cs?.shareLinkId ?? (cm && !cv ? bY.share_id : void 0),
                    shareSessionId: bF,
                    source: am,
                    sourceShareId: bf?.kind === "shared" ? bf.sourcePostId : void 0
                });
                let f = b1 && "facebook" !== a && (0, V.g)(a);
                if (f && a1?.unsupportedDestinationFallback === "app-store") {
                    let c = (0, g.a)() ? "android" : (0, g.c)() || (0, g.b)() ? "ios" : null,
                        d = null == c ? null : (0, V.c)(a, c);
                    if (null != d) return void(0, r.e)({
                        event: b,
                        href: d,
                        initiator: "open_in_browser_bridge",
                        openTarget: "external-browser"
                    })
                }
                let h = null != cs && null == aX || "messages" === a || f ? null : window.open("", "_blank");
                null != h && (h.opener = null), bT(null), bR("creating");
                try {
                    d = await cG("social")
                } catch (a) {
                    h?.close(), a instanceof J.a || (0, M.e)(bo, {
                        actor: ak,
                        attachmentType: al,
                        conversationId: e,
                        widgetMetadata: ca?.metadata,
                        contentType: cF,
                        shareSessionId: bF,
                        source: am,
                        sourceShareId: bf?.kind === "shared" ? bf.sourcePostId : void 0
                    }), cE(a, "create-failed");
                    return
                }
                if (!0 === d.isWorkspaceOnly) {
                    h?.close(), bR(bQ);
                    return
                }
                if (f) {
                    let a = await (0, Q.b)(bo, d, bj, bF, am);
                    bR(bQ), "shared" === a ? a9() : "failed" === a && bo.get(v.f).danger(bv.formatMessage({
                        id: "chatgptConversations.mobileImageShare.nativeFailed",
                        defaultMessage: "Could not open sharing. Try again or copy the link"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.mobileImageShare.nativeFailed"
                        }
                    });
                    return
                }
                let i = "facebook" === a ? `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(d.shareLinkUrl)}` : (0, V.d)({
                    destination: a,
                    isAppleDevice: (0, g.c)() || (0, g.b)(),
                    shareUrl: d.shareLinkUrl,
                    title: d.title ?? cl
                });
                if (null == i) {
                    h?.close(), bR(bQ);
                    return
                }
                "messages" === a ? (window.location.href = i, (0, r.g)({
                    href: i,
                    modifiedClick: !1
                })) : null != h ? (h.location.href = i, (0, r.g)({
                    href: i,
                    modifiedClick: 1 === b.button || b.metaKey || b.ctrlKey,
                    openTarget: "external-browser"
                })) : (0, r.e)({
                    event: b,
                    href: i,
                    initiator: "open_in_browser_bridge",
                    openTarget: "external-browser"
                }), bR(bQ)
            }, aL[181] = ak, aL[182] = al, aL[183] = cF, aL[184] = cs, aL[185] = cl, aL[186] = ca?.metadata, aL[187] = cG, aL[188] = cm, aL[189] = bY, aL[190] = aX, aL[191] = b9, aL[192] = bv, aL[193] = b0, aL[194] = b8, aL[195] = cf, aL[196] = b3, aL[197] = cv, aL[198] = cx, aL[199] = a1?.unsupportedDestinationFallback, aL[200] = a9, aL[201] = bf, aL[202] = cE, aL[203] = bo, aL[204] = bj, aL[205] = cp, aL[206] = bQ, aL[207] = bF, aL[208] = b2, aL[209] = am, aL[210] = b1, aL[211] = ar) : ar = aL[211];
            let cK = ar;
            aL[212] !== aN || aL[213] !== b9 || aL[214] !== bv || aL[215] !== bU || aL[216] !== b4 || aL[217] !== b8 || aL[218] !== cI || aL[219] !== bo || aL[220] !== bj ? (as = async function() {
                if (null == aN || bU || b8) return;
                (0, M.g)(bo, "download", b9);
                let a = [aN.item, ...aN.additionalImages ?? []].filter(aO);
                0 !== a.length && ((0, R.b)(bo, {
                    image: aN.downloadAnalyticsImage ?? aN.item,
                    conversationId: bj,
                    entryPoint: "CHATGPT_IMAGE_DOWNLOAD_ENTRY_POINT_CUSTOM_SHARE_SHEET",
                    downloadScope: b4 ? "CHATGPT_IMAGE_DOWNLOAD_SCOPE_SERIES" : "CHATGPT_IMAGE_DOWNLOAD_SCOPE_SINGLE",
                    requestedImageCount: a.length,
                    isParagen: aN.downloadIsParagen
                }), bV(!0), cI("CHATGPT_SHARE_FLOW_ACTION_DOWNLOAD_SELECTED"), await (0, O.a)(bo, {
                    images: a,
                    intl: bv,
                    serverConversationId: (0, N.c)(bj),
                    logIndividualDownloads: !1
                }).then(a => {
                    "downloaded" === a && (0, R.e)(bo, bj, aN.item)
                }).finally(() => {
                    bV(!1)
                }))
            }, aL[212] = aN, aL[213] = b9, aL[214] = bv, aL[215] = bU, aL[216] = b4, aL[217] = b8, aL[218] = cI, aL[219] = bo, aL[220] = bj, aL[221] = as) : as = aL[221];
            let cL = as;
            aL[222] !== aN?.additionalImages?.length || aL[223] !== b4 ? (at = b4 ? (0, d.jsx)(l.a, {
                id: "chatgptConversations.shareDialog.imageSeriesCount",
                defaultMessage: "Sharing {imageCount} images together",
                values: {
                    imageCount: 1 + (aN?.additionalImages?.length ?? 0)
                }
            }) : void 0, aL[222] = aN?.additionalImages?.length, aL[223] = b4, aL[224] = at) : at = aL[224];
            let cM = at,
                cN = cM;
            if (!b4 && !ci) {
                let a;
                aL[225] !== cA ? (a = (0, d.jsx)(l.a, {
                    ...cA
                }), aL[225] = cA, aL[226] = a) : a = aL[226], cN = a
            }
            if (null != aX) {
                let a;
                aL[227] !== b1 ? (a = b1 ? (0, d.jsx)(l.a, {
                    id: "imagePromptShare.audience",
                    defaultMessage: "Anyone with the link can try this prompt"
                }) : void 0, aL[227] = b1, aL[228] = a) : a = aL[228], cN = a
            } else if (b1) {
                let a, b, c;
                aL[229] !== cp ? (a = "public" === cp ? (0, d.jsx)(l.a, {
                    id: "chatgptConversations.mobileImageShare.publicAudience",
                    defaultMessage: "Anyone with the link can view"
                }) : null, aL[229] = cp, aL[230] = a) : a = aL[230], aL[231] !== cp ? (b = "public" !== cp && (0, d.jsx)(l.a, {
                    id: "chatgptConversations.mobileImageShare.workspaceAudience",
                    defaultMessage: "Only workspace members with the link can view"
                }), aL[231] = cp, aL[232] = b) : b = aL[232], aL[233] !== a || aL[234] !== b ? (c = (0, d.jsxs)(d.Fragment, {
                    children: [a, b]
                }), aL[233] = a, aL[234] = b, aL[235] = c) : c = aL[235], cN = c
            }
            if (b1 ? au = "responsiveSheet" : ci && (au = "share"), aL[236] !== a1?.layout || aL[237] !== b1 ? (b1 && (av = a1?.layout === "two-rows" ? "imageSheetTwoRows" : "imageSheet"), aL[236] = a1?.layout, aL[237] = b1, aL[238] = av) : av = aL[238], null != aX) {
                let a;
                aL[239] !== aN?.previewSrc || aL[240] !== aX || aL[241] !== cx || aL[242] !== b6 ? (a = () => aX.preview(cx, aN?.previewSrc ?? b6 ?? null, () => {
                    bT(null), bR("idle")
                }), aL[239] = aN?.previewSrc, aL[240] = aX, aL[241] = cx, aL[242] = b6, aL[243] = a) : a = aL[243], aw = a
            } else {
                let a;
                aL[244] !== ca || aL[245] !== bM || aL[246] !== bK || aL[247] !== aN || aL[248] !== av || aL[249] !== bv || aL[250] !== b7 || aL[251] !== b4 || aL[252] !== cd || aL[253] !== bc || aL[254] !== bb || aL[255] !== be || aL[256] !== b6 || aL[257] !== bi || aL[258] !== bh || aL[259] !== bo.queryClient || aL[260] !== bj || aL[261] !== bF || aL[262] !== bJ || aL[263] !== b1 ? (a = a => null != aN ? (0, d.jsx)(B.a, {
                    ariaLabel: b4 ? bv.formatMessage(a8.imagesPreview) : aN.alt,
                    variant: "image",
                    classicImagePreviewEligible: !b4 && !b1,
                    presentation: av,
                    children: b4 || null == aN.previewSrc ? (0, d.jsx)(a5, {
                        src: b6,
                        isLoading: b7
                    }) : (0, d.jsx)("img", {
                        alt: aN.alt,
                        className: b1 ? void 0 : "block size-full object-contain",
                        referrerPolicy: "no-referrer",
                        src: aN.previewSrc
                    })
                }) : (0, d.jsxs)(d.Fragment, {
                    children: [bh?.preview != null && (0, d.jsx)(B.a, {
                        ariaLabel: bv.formatMessage({
                            id: "chatgptConversations.shareDialog.responseRegionPreviewLabel",
                            defaultMessage: "Preview of the shared content"
                        }),
                        expandedContent: bh.preview,
                        expandPreviewEventLogger: a,
                        variant: "response",
                        children: bh.preview
                    }), null == bh && ca?.preview != null && cd && (0, d.jsx)(B.a, {
                        ariaLabel: bv.formatMessage({
                            id: "shareDialog.widget.previewLabel",
                            defaultMessage: "Preview of the shared widget"
                        }),
                        expandedContent: ca.preview,
                        expandPreviewEventLogger: a,
                        variant: "response",
                        children: ca.preview
                    }), null == bh && ca?.preview != null && !cd && (0, d.jsx)(B.a, {
                        expandedContent: ca.preview,
                        expandPreviewEventLogger: a,
                        variant: "response",
                        children: ca.preview
                    }), null == bh && null == ca && (0, d.jsx)(K.b, {
                        expandPreviewEventLogger: a,
                        prompt: be,
                        response: bJ ? void 0 : bi,
                        serverConversationId: bj,
                        expandedHistory: (null == bi || bJ) && null != bc && null == bM ? {
                            load: async a => (await bo.queryClient.fetchQuery({
                                queryKey: bK,
                                queryFn: () => bc(a),
                                staleTime: 1 / 0
                            })).turns,
                            sessionId: bF
                        } : void 0,
                        turns: null == bi || bJ ? bM?.turns ?? bb : void 0
                    })]
                }), aL[244] = ca, aL[245] = bM, aL[246] = bK, aL[247] = aN, aL[248] = av, aL[249] = bv, aL[250] = b7, aL[251] = b4, aL[252] = cd, aL[253] = bc, aL[254] = bb, aL[255] = be, aL[256] = b6, aL[257] = bi, aL[258] = bh, aL[259] = bo.queryClient, aL[260] = bj, aL[261] = bF, aL[262] = bJ, aL[263] = b1, aL[264] = a) : a = aL[264], aw = a
            }
            if (b1) {
                let a, b = aw;
                aL[265] !== aX || aL[266] !== cM || aL[267] !== b ? (a = a => {
                    let c = b(a);
                    return (0, d.jsxs)(d.Fragment, {
                        children: [null == aX ? c : (0, d.jsx)("div", {
                            className: "px-6",
                            children: c
                        }), null != cM && (0, d.jsx)("p", {
                            className: "mt-3 text-center text-sm text-secondary",
                            children: cM
                        })]
                    })
                }, aL[265] = aX, aL[266] = cM, aL[267] = b, aL[268] = a) : a = aL[268], aw = a
            }
            let cO = ah,
                cP = cN;
            aL[269] !== cB || aL[270] !== ci ? (ax = ci ? void 0 : (0, d.jsx)(l.a, {
                ...cB
            }), aL[269] = cB, aL[270] = ci, aL[271] = ax) : ax = aL[271], aL[272] !== cC ? (ay = (0, d.jsx)(l.a, {
                ...cC
            }), aL[272] = cC, aL[273] = ay) : ay = aL[273];
            let cQ = aX?.actionsDisabled || cz || cy || b8 || "blocked" === ag,
                cR = cx || cz || bq,
                cS = !ci && cx;
            aL[274] !== cI || aL[275] !== b2 || aL[276] !== ci ? (az = ci ? a => {
                b2 && cI("CHATGPT_SHARE_FLOW_ACTION_SHEET_PRESENTED"), a.preventDefault(), a.currentTarget instanceof HTMLElement && a.currentTarget.focus()
            } : void 0, aL[274] = cI, aL[275] = b2, aL[276] = ci, aL[277] = az) : az = aL[277];
            let cT = au,
                cU = b1 ? "imageSheet" : void 0,
                cV = b1 && a1?.layout === "two-rows";
            aL[278] !== bu || aL[279] !== bs || aL[280] !== bt || aL[281] !== cs || aL[282] !== aM || aL[283] !== ag || aL[284] !== ca || aL[285] !== cL || aL[286] !== cJ || aL[287] !== cK || aL[288] !== aN || aL[289] !== aX?.actionsDisabled || aL[290] !== b9 || aL[291] !== bU || aL[292] !== cy || aL[293] !== cz || aL[294] !== b0 || aL[295] !== b8 || aL[296] !== bq || aL[297] !== cf || aL[298] !== b3 || aL[299] !== cx || aL[300] !== a0 || aL[301] !== a1 || aL[302] !== a2 || aL[303] !== a9 || aL[304] !== be || aL[305] !== bg || aL[306] !== cD || aL[307] !== b6 || aL[308] !== bh || aL[309] !== bo || aL[310] !== bj || aL[311] !== cp || aL[312] !== bJ || aL[313] !== ch || aL[314] !== b1 || aL[315] !== ci || aL[316] !== bn ? (aA = ci ? (0, d.jsx)(d.Fragment, {
                children: (0, d.jsx)(aI, {
                    projectStyleEligible: !b3 && null == be && null == ca && null == bh && (b0 || null != a0 && !bJ),
                    mobileImageActions: b1 && null != a1 ? {
                        experience: a1,
                        canNativeShare: "public" === cp && null != cs && (0, Q.a)(cs?.shareLinkUrl),
                        onNativeShare: () => {
                            cJ()
                        },
                        rowScrollPositions: a2
                    } : void 0,
                    copyLabel: cD,
                    copyDisabled: aX?.actionsDisabled || cz || cy || cx || b8 || "blocked" === ag,
                    isBusy: cx || cz || bq,
                    isDownloading: bU,
                    socialDestinationsDisabled: aX?.actionsDisabled || cz || cy || cx || b8 || "public" !== cp || "blocked" === ag,
                    showSocialDestinations: "public" === cp,
                    additionalActions: void 0,
                    onDownload: null == aN || b8 ? void 0 : () => {
                        cL()
                    },
                    onCopy: () => {
                        b3 || cf || (0, M.g)(bo, "copy", b0 ? b9 : void 0)
                    },
                    onSocialShare: (a, b) => {
                        cK(a, b)
                    }
                })
            }) : void 0, aL[278] = bu, aL[279] = bs, aL[280] = bt, aL[281] = cs, aL[282] = aM, aL[283] = ag, aL[284] = ca, aL[285] = cL, aL[286] = cJ, aL[287] = cK, aL[288] = aN, aL[289] = aX?.actionsDisabled, aL[290] = b9, aL[291] = bU, aL[292] = cy, aL[293] = cz, aL[294] = b0, aL[295] = b8, aL[296] = bq, aL[297] = cf, aL[298] = b3, aL[299] = cx, aL[300] = a0, aL[301] = a1, aL[302] = a2, aL[303] = a9, aL[304] = be, aL[305] = bg, aL[306] = cD, aL[307] = b6, aL[308] = bh, aL[309] = bo, aL[310] = bj, aL[311] = cp, aL[312] = bJ, aL[313] = ch, aL[314] = b1, aL[315] = ci, aL[316] = bn, aL[317] = aA) : aA = aL[317], aL[318] !== ak || aL[319] !== al || aL[320] !== cF || aL[321] !== ca?.metadata.widgetName || aL[322] !== ca?.metadata.widgetType || aL[323] !== bj || aL[324] !== bF || aL[325] !== am ? (aB = JSON.stringify([ak, al, cF, bj, bF, am, ca?.metadata.widgetName, ca?.metadata.widgetType]), aL[318] = ak, aL[319] = al, aL[320] = cF, aL[321] = ca?.metadata.widgetName, aL[322] = ca?.metadata.widgetType, aL[323] = bj, aL[324] = bF, aL[325] = am, aL[326] = aB) : aB = aL[326], aL[327] !== ak || aL[328] !== al || aL[329] !== cF || aL[330] !== ca?.metadata || aL[331] !== bo || aL[332] !== bj || aL[333] !== bF || aL[334] !== am ? (aC = () => (0, M.a)(bo, {
                actor: ak,
                attachmentType: al,
                contentType: cF,
                conversationId: bj,
                shareSessionId: bF,
                source: am,
                widgetMetadata: ca?.metadata
            }), aL[327] = ak, aL[328] = al, aL[329] = cF, aL[330] = ca?.metadata, aL[331] = bo, aL[332] = bj, aL[333] = bF, aL[334] = am, aL[335] = aC) : aC = aL[335], aL[336] !== aw || aL[337] !== aB || aL[338] !== aC ? (aD = (0, d.jsx)(aV, {
                createEventLogger: aC,
                children: aw
            }, aB), aL[336] = aw, aL[337] = aB, aL[338] = aC, aL[339] = aD) : aD = aL[339], aL[340] !== bI || aL[341] !== aY || aL[342] !== bv || aL[343] !== cz || aL[344] !== ce || aL[345] !== cx || aL[346] !== bG || aL[347] !== cj || aL[348] !== cp || aL[349] !== ck || aL[350] !== b1 || aL[351] !== ci ? (aE = ci ? (0, d.jsxs)(d.Fragment, {
                children: [bI && (0, d.jsx)(q.e, {
                    className: "pt-5",
                    children: (0, d.jsx)("div", {
                        className: "mx-auto w-80 max-w-full",
                        children: (0, d.jsx)(t.a, {
                            ariaLabel: bv.formatMessage({
                                id: "chatgptConversations.shareDialog.messageScope.label",
                                defaultMessage: "Content to share"
                            }),
                            buttonClassName: "z-20",
                            fullWidth: !0,
                            onSelect: a => {
                                a !== bG && (bH(a), bD(null), bT(null), bR("idle"))
                            },
                            options: [{
                                id: "message",
                                disabled: cx || cz,
                                label: (0, d.jsx)(l.a, {
                                    id: "chatgptConversations.shareDialog.messageScope.response",
                                    defaultMessage: "This response"
                                })
                            }, {
                                id: "conversation",
                                disabled: cx || cz,
                                label: (0, d.jsx)(l.a, {
                                    id: "chatgptConversations.shareDialog.messageScope.conversation",
                                    defaultMessage: "Entire conversation"
                                })
                            }],
                            selectedId: bG,
                            variant: "form",
                            wrapLabels: !0
                        })
                    })
                }), null != aY && (b1 ? (0, d.jsx)("div", {
                    className: "px-6 pt-3",
                    children: aY(cx)
                }) : (0, d.jsx)(q.e, {
                    className: "pt-5",
                    children: aY(cx)
                })), !b1 && (0, d.jsx)(aW, {
                    audience: cp,
                    contentType: cj,
                    isPoll: ce,
                    showImageRightsNotice: ck
                })]
            }) : void 0, aL[340] = bI, aL[341] = aY, aL[342] = bv, aL[343] = cz, aL[344] = ce, aL[345] = cx, aL[346] = bG, aL[347] = cj, aL[348] = cp, aL[349] = ck, aL[350] = b1, aL[351] = ci, aL[352] = aE) : aE = aL[352], aL[353] !== ag || aL[354] !== aX || aL[355] !== bP || aL[356] !== cu ? (aF = null == ag ? void 0 : {
                content: (0, d.jsx)(a7, {
                    error: ag
                }),
                copyUrl: "copy-failed" === ag ? cu : void 0,
                onRetry: "conversation-load-failed" === ag ? () => {
                    bP()
                } : void 0,
                preventsSharing: "blocked" === ag && null == aX || "conversation-load-failed" === ag
            }, aL[353] = ag, aL[354] = aX, aL[355] = bP, aL[356] = cu, aL[357] = aF) : aF = aL[357];
            let cW = ck && !cw && !b0,
                cX = !cg || cb;
            return aL[358] !== _ || aL[359] !== cW || aL[360] !== cX ? (aG = (0, d.jsx)(a6, {
                showImageRightsNotice: cW,
                showContentNotices: cX,
                privacyNotices: _
            }), aL[358] = _, aL[359] = cW, aL[360] = cX, aL[361] = aG) : aG = aL[361], aL[362] !== bz || aL[363] !== cI || aL[364] !== b2 ? (aH = () => {
                b2 && cI("CHATGPT_SHARE_FLOW_ACTION_DISMISSED"), bz()
            }, aL[362] = bz, aL[363] = cI, aL[364] = b2, aL[365] = aH) : aH = aL[365], aL[366] !== cH ? (aJ = () => {
                cH()
            }, aL[366] = cH, aL[367] = aJ) : aJ = aL[367], aL[368] !== au || aL[369] !== ah || aL[370] !== cl || aL[371] !== cN || aL[372] !== ax || aL[373] !== ay || aL[374] !== cQ || aL[375] !== cR || aL[376] !== cS || aL[377] !== az || aL[378] !== cU || aL[379] !== cV || aL[380] !== aA || aL[381] !== aD || aL[382] !== aE || aL[383] !== aF || aL[384] !== aG || aL[385] !== aH || aL[386] !== aJ ? (aK = (0, d.jsx)(A.a, {
                threadTitle: cl,
                title: cO,
                subtitle: cP,
                audience: ax,
                actionLabel: ay,
                actionDisabled: cQ,
                isBusy: cR,
                isDismissalDisabled: cS,
                onOpenAutoFocus: az,
                size: cT,
                presentation: cU,
                compactImageSheetFooter: cV,
                footer: aA,
                preview: aD,
                info: aE,
                error: aF,
                notices: aG,
                onClose: aH,
                onSubmit: aJ
            }), aL[368] = au, aL[369] = ah, aL[370] = cl, aL[371] = cN, aL[372] = ax, aL[373] = ay, aL[374] = cQ, aL[375] = cR, aL[376] = cS, aL[377] = az, aL[378] = cU, aL[379] = cV, aL[380] = aA, aL[381] = aD, aL[382] = aE, aL[383] = aF, aL[384] = aG, aL[385] = aH, aL[386] = aJ, aL[387] = aK) : aK = aL[387], aK
        }

        function aO(a) {
            return null != a.src && "completed" === a.status && !a.isPreview
        }

        function aP() {}

        function aQ() {}

        function aR(a) {
            let {
                shareLinkUrl: b
            } = a;
            return b
        }

        function aS() {
            throw Error("Image share is unavailable")
        }

        function aT() {
            return G.CodexRequest.safeGet("/wham/accounts/check")
        }

        function aU() {
            return crypto.randomUUID()
        }

        function aV(a) {
            let b, c = (0, e.c)(3),
                {
                    children: d,
                    createEventLogger: f
                } = a,
                [g] = (0, j.useState)(f);
            return c[0] !== d || c[1] !== g ? (b = d(g), c[0] = d, c[1] = g, c[2] = b) : b = c[2], b
        }

        function aW(a) {
            let b, c, f, g, h, i, j, k = (0, e.c)(58),
                {
                    audience: m,
                    contentType: n,
                    isPoll: o,
                    showImageRightsNotice: p
                } = a,
                r = "workspace" === m ? s.ef : s.ee;
            if ("workspace" === m) {
                let a, e;
                if (p) {
                    let b;
                    k[0] !== n ? (b = (0, d.jsx)(l.a, {
                        id: "chatgptConversations.shareDialog.workspaceMediaRightsAudienceWithLearnMore",
                        defaultMessage: "Links are visible to workspace members only. {contentType, select, gif {Confirm you have the rights to share this GIF.} images {Confirm you have the rights to share these images.} other {Confirm you have the rights to share this image.}} {contentType, select, conversation {Memory sources won't be shared with viewers. } other {}}<learnMore>Learn more</learnMore>",
                        values: {
                            contentType: n,
                            learnMore: a4
                        }
                    }), k[0] = n, k[1] = b) : b = k[1], a = b
                } else if ("conversation" === n) {
                    let b;
                    k[2] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, d.jsx)(l.a, {
                        id: "chatgptConversations.shareDialog.workspaceConversationMemoryDisclosure",
                        defaultMessage: "Links are visible to workspace members only. Memory sources won't be shared with viewers. <learnMore>Learn more</learnMore>",
                        values: {
                            learnMore: a3
                        }
                    }), k[2] = b) : b = k[2], a = b
                } else {
                    let b;
                    k[3] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, d.jsx)(l.a, {
                        ...a8.workspaceLinksVisibleWithLearnMore,
                        values: {
                            learnMore: a2
                        }
                    }), k[3] = b) : b = k[3], a = b
                }
                if (k[4] !== a ? (e = (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(d.Fragment, {
                            children: a
                        }), null]
                    }), k[4] = a, k[5] = e) : e = k[5], c = e, "widget" === n) {
                    let a;
                    k[6] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(l.a, {
                        ...a8.shareLinkToWidget
                    }), k[6] = a) : a = k[6], b = a
                } else if ("images" === n) {
                    let a;
                    k[7] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(l.a, {
                        ...a8.shareLinkToImages
                    }), k[7] = a) : a = k[7], b = a
                } else if ("gif" === n) {
                    let a;
                    k[8] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(l.a, {
                        ...a8.shareLinkToGif
                    }), k[8] = a) : a = k[8], b = a
                } else if ("image" === n) {
                    let a;
                    k[9] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(l.a, {
                        ...a8.shareLinkToImage
                    }), k[9] = a) : a = k[9], b = a
                } else if ("response-region" === n) {
                    let a;
                    k[10] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(l.a, {
                        id: "chatgptConversations.shareDialog.responseRegion.workspaceTitle",
                        defaultMessage: "Share a link to this content"
                    }), k[10] = a) : a = k[10], b = a
                } else if ("message" === n) {
                    let a;
                    k[11] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(l.a, {
                        ...a8.shareLinkToMessage
                    }), k[11] = a) : a = k[11], b = a
                } else if ("prompt" === n) {
                    let a;
                    k[12] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(l.a, {
                        ...a8.shareLinkToPrompt
                    }), k[12] = a) : a = k[12], b = a
                } else {
                    let a;
                    k[13] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(l.a, {
                        ...a8.shareLinkToConversation
                    }), k[13] = a) : a = k[13], b = a
                }
            } else if ("unknown" === m) {
                if ("images" === n) {
                    let a;
                    k[14] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(l.a, {
                        id: "chatgptConversations.shareDialog.imagesRightsDisclaimer",
                        defaultMessage: "Confirm you have the rights to share these images."
                    }), k[14] = a) : a = k[14], c = a
                } else if ("gif" === n) {
                    let a;
                    k[15] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(l.a, {
                        id: "chatgptConversations.shareDialog.gifLicenseDisclaimer",
                        defaultMessage: "Confirm you have the rights to share this GIF"
                    }), k[15] = a) : a = k[15], c = a
                } else if ("image" === n) {
                    let a;
                    k[16] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(l.a, {
                        ...a8.imageLicenseDisclaimer
                    }), k[16] = a) : a = k[16], c = a
                }
                if ("widget" === n) {
                    let a;
                    k[17] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(l.a, {
                        ...a8.shareLinkToWidget
                    }), k[17] = a) : a = k[17], b = a
                } else if ("images" === n) {
                    let a;
                    k[18] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(l.a, {
                        ...a8.shareLinkToImages
                    }), k[18] = a) : a = k[18], b = a
                } else if ("gif" === n) {
                    let a;
                    k[19] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(l.a, {
                        ...a8.shareLinkToGif
                    }), k[19] = a) : a = k[19], b = a
                } else if ("image" === n) {
                    let a;
                    k[20] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(l.a, {
                        ...a8.shareLinkToImage
                    }), k[20] = a) : a = k[20], b = a
                } else if ("response-region" === n) {
                    let a;
                    k[21] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(l.a, {
                        id: "chatgptConversations.shareDialog.responseRegion.unknownAudienceTitle",
                        defaultMessage: "Share a link to this content"
                    }), k[21] = a) : a = k[21], b = a
                } else if ("message" === n) {
                    let a;
                    k[22] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(l.a, {
                        ...a8.shareLinkToMessage
                    }), k[22] = a) : a = k[22], b = a
                } else if ("prompt" === n) {
                    let a;
                    k[23] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(l.a, {
                        ...a8.shareLinkToPrompt
                    }), k[23] = a) : a = k[23], b = a
                } else {
                    let a;
                    k[24] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(l.a, {
                        ...a8.shareLinkToConversation
                    }), k[24] = a) : a = k[24], b = a
                }
            } else if ("widget" === n) {
                let a, e;
                k[25] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(l.a, {
                    ...a8.sharePublicLinkToWidget
                }), k[25] = a) : a = k[25], b = a, k[26] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(d.Fragment, {
                        children: (0, d.jsx)(l.a, {
                            id: "chatgptConversations.widgetShare.publicAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access this widget. <learnMore>Learn more</learnMore>",
                            values: {
                                learnMore: a1
                            }
                        })
                    }), null]
                }), k[26] = e) : e = k[26], c = e
            } else if ("images" === n) {
                let a, e;
                k[27] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(l.a, {
                    ...a8.sharePublicLinkToImages
                }), k[27] = a) : a = k[27], b = a, k[28] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(d.Fragment, {
                        children: (0, d.jsx)(l.a, {
                            id: "chatgptConversations.shareDialog.imagesPublicLinkAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access these images. Confirm you have the rights to share these images. <learnMore>Learn more</learnMore>",
                            values: {
                                learnMore: a0
                            }
                        })
                    }), null]
                }), k[28] = e) : e = k[28], c = e
            } else if ("gif" === n) {
                let a, e;
                k[29] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(l.a, {
                    id: "chatgptConversations.shareDialog.sharePublicLinkToGif",
                    defaultMessage: "Share a public link to this GIF"
                }), k[29] = a) : a = k[29], b = a, k[30] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, d.jsx)(l.a, {
                    id: "chatgptConversations.shareDialog.gifPublicLinkAudienceWithLearnMore",
                    defaultMessage: "Anyone with this link can access this GIF. Confirm you have the rights to share this GIF. <learnMore>Learn more</learnMore>",
                    values: {
                        learnMore: a_
                    }
                }), k[30] = e) : e = k[30], c = e
            } else if ("image" === n) {
                let a, e;
                k[31] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(l.a, {
                    ...a8.sharePublicLinkToImage
                }), k[31] = a) : a = k[31], b = a, k[32] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(d.Fragment, {
                        children: (0, d.jsx)(l.a, {
                            id: "chatgptConversations.shareDialog.imagePublicLinkAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access this image. Confirm you have the rights to share this image. <learnMore>Learn more</learnMore>",
                            values: {
                                learnMore: a$
                            }
                        })
                    }), null]
                }), k[32] = e) : e = k[32], c = e
            } else if ("response-region" === n) {
                let a, e;
                k[33] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(l.a, {
                    id: "chatgptConversations.shareDialog.responseRegion.publicTitle",
                    defaultMessage: "Share a public link to this content"
                }), k[33] = a) : a = k[33], b = a, k[34] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, d.jsx)(l.a, {
                    id: "chatgptConversations.shareDialog.responseRegion.publicAudience",
                    defaultMessage: "Anyone with this link can access this content."
                }), k[34] = e) : e = k[34], c = e
            } else if ("message" === n) {
                let a, e;
                k[35] !== o ? (a = o ? (0, d.jsx)(l.a, {
                    id: "chatgptConversations.shareDialog.poll.publicLinkTitle",
                    defaultMessage: "Share a public link to this poll"
                }) : (0, d.jsx)(l.a, {
                    ...a8.sharePublicLinkToMessage
                }), k[35] = o, k[36] = a) : a = k[36], b = a, k[37] !== o ? (e = (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(d.Fragment, {
                        children: o ? (0, d.jsx)(l.a, {
                            id: "chatgptConversations.shareDialog.poll.publicAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access and vote on this poll. <learnMore>Learn more</learnMore>",
                            values: {
                                learnMore: aZ
                            }
                        }) : (0, d.jsx)(l.a, {
                            id: "chatgptConversations.shareDialog.messagePublicLinkAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access this message. <learnMore>Learn more</learnMore>",
                            values: {
                                learnMore: aY
                            }
                        })
                    }), null]
                }), k[37] = o, k[38] = e) : e = k[38], c = e
            } else if ("prompt" === n) {
                let a, e;
                k[39] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(l.a, {
                    id: "chatgptConversations.shareDialog.prompt.info.title.public",
                    defaultMessage: "Share a public link to this prompt"
                }), k[39] = a) : a = k[39], b = a, k[40] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(d.Fragment, {
                        children: (0, d.jsx)(l.a, {
                            id: "chatgptConversations.shareDialog.prompt.info.description.publicWithLearnMore",
                            defaultMessage: "Anyone with this link can access this prompt. <learnMore>Learn more</learnMore>",
                            values: {
                                learnMore: aX
                            }
                        })
                    }), null]
                }), k[40] = e) : e = k[40], c = e
            } else {
                let a, e;
                k[41] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(l.a, {
                    ...a8.sharePublicLinkToConversation
                }), k[41] = a) : a = k[41], b = a, k[42] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, d.jsx)(T, {
                    includeConversationAudience: !0
                }), k[42] = e) : e = k[42], c = e
            }
            return k[43] !== r || k[44] !== m ? (f = "unknown" === m ? null : (0, d.jsx)(r, {
                className: "public" === m ? "relative -start-px" : void 0,
                "aria-hidden": "true"
            }), k[43] = r, k[44] = m, k[45] = f) : f = k[45], k[46] !== f || k[47] !== b ? (g = (0, d.jsxs)("div", {
                className: "flex items-center gap-1 text-xs leading-4 font-bold text-default",
                children: [f, b]
            }), k[46] = f, k[47] = b, k[48] = g) : g = k[48], k[49] !== c ? (h = null == c ? null : (0, d.jsx)("div", {
                className: "mt-1.5 text-xs leading-4 text-codex-description browser:text-secondary",
                children: c
            }), k[49] = c, k[50] = h) : h = k[50], k[51] !== m || k[52] !== n ? (i = "unknown" === m && "conversation" === n ? (0, d.jsx)(d.Fragment, {
                children: (0, d.jsx)("div", {
                    className: "mt-1.5 text-xs leading-4 text-secondary",
                    children: (0, d.jsx)(T, {})
                })
            }) : null, k[51] = m, k[52] = n, k[53] = i) : i = k[53], k[54] !== g || k[55] !== h || k[56] !== i ? (j = (0, d.jsx)(q.e, {
                spacing: "large",
                children: (0, d.jsxs)("div", {
                    className: "w-full text-start select-none",
                    children: [g, h, i]
                })
            }), k[54] = g, k[55] = h, k[56] = i, k[57] = j) : j = k[57], j
        }

        function aX(a) {
            return (0, d.jsx)(U, {
                children: a
            })
        }

        function aY(a) {
            return (0, d.jsx)(U, {
                children: a
            })
        }

        function aZ(a) {
            return (0, d.jsx)(U, {
                children: a
            })
        }

        function a$(a) {
            return (0, d.jsx)(U, {
                children: a
            })
        }

        function a_(a) {
            return (0, d.jsx)(U, {
                children: a
            })
        }

        function a0(a) {
            return (0, d.jsx)(U, {
                children: a
            })
        }

        function a1(a) {
            return (0, d.jsx)(U, {
                children: a
            }, "learn-more")
        }

        function a2(a) {
            return (0, d.jsx)(U, {
                children: a
            })
        }

        function a3(a) {
            return (0, d.jsx)(U, {
                children: a
            })
        }

        function a4(a) {
            return (0, d.jsx)(U, {
                children: a
            })
        }

        function a5(a) {
            let b, c = (0, e.c)(5),
                {
                    alt: f,
                    src: g,
                    isLoading: h
                } = a,
                i = void 0 === f ? "" : f;
            if (null != g) {
                let a;
                return c[0] !== i || c[1] !== g ? (a = (0, d.jsx)("img", {
                    alt: i,
                    className: "block size-full object-contain",
                    referrerPolicy: "no-referrer",
                    src: g
                }), c[0] = i, c[1] = g, c[2] = a) : a = c[2], a
            }
            return c[3] !== h ? (b = (0, d.jsx)("div", {
                className: "flex h-full items-center justify-center gap-2 text-sm text-secondary",
                children: h ? (0, d.jsx)(u.a, {
                    className: "icon-sm"
                }) : (0, d.jsx)(l.a, {
                    ...a8.imageUnavailable
                })
            }), c[3] = h, c[4] = b) : b = c[4], b
        }

        function a6(a) {
            let b, c, f, g, h, i = (0, e.c)(16),
                {
                    showImageRightsNotice: j,
                    showContentNotices: k,
                    privacyNotices: m
                } = a;
            return i[0] !== m?.hasUnsupportedCodeInterpreterContent || i[1] !== k ? (b = k && m?.hasUnsupportedCodeInterpreterContent ? (0, d.jsx)(q.e, {
                children: (0, d.jsx)(p.a, {
                    content: (0, d.jsx)(l.a, {
                        ...a8.filesNotShared
                    }),
                    variant: "privacyNotice"
                })
            }) : null, i[0] = m?.hasUnsupportedCodeInterpreterContent, i[1] = k, i[2] = b) : b = i[2], i[3] !== m?.hasPersonalizedSources || i[4] !== k ? (c = k && m?.hasPersonalizedSources ? (0, d.jsx)(q.e, {
                children: (0, d.jsx)(p.a, {
                    content: (0, d.jsx)(l.a, {
                        ...a8.personalizedSourcesPrivate
                    }),
                    variant: "privacyNotice"
                })
            }) : null, i[3] = m?.hasPersonalizedSources, i[4] = k, i[5] = c) : c = i[5], i[6] !== m?.hasScreenshotReference || i[7] !== k ? (f = k && m?.hasScreenshotReference ? (0, d.jsx)(q.e, {
                children: (0, d.jsx)(p.a, {
                    content: (0, d.jsx)(l.a, {
                        ...a8.screenshotDisclaimer
                    }),
                    variant: "privacyNotice"
                })
            }) : null, i[6] = m?.hasScreenshotReference, i[7] = k, i[8] = f) : f = i[8], i[9] !== j ? (g = j ? (0, d.jsx)(q.e, {
                children: (0, d.jsx)("p", {
                    className: "text-sm text-secondary select-none",
                    children: (0, d.jsx)(l.a, {
                        ...a8.imageLicenseDisclaimer
                    })
                })
            }) : null, i[9] = j, i[10] = g) : g = i[10], i[11] !== b || i[12] !== c || i[13] !== f || i[14] !== g ? (h = (0, d.jsxs)(d.Fragment, {
                children: [b, c, f, g]
            }), i[11] = b, i[12] = c, i[13] = f, i[14] = g, i[15] = h) : h = i[15], h
        }

        function a7(a) {
            let b = (0, e.c)(5),
                {
                    error: c
                } = a;
            switch (c) {
                case "receiver-files-unsupported": {
                    let a;
                    return b[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(l.a, {
                        ...a8.receiverFileCopyDeferred
                    }), b[0] = a) : a = b[0], a
                }
                case "blocked": {
                    let a;
                    return b[1] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(l.a, {
                        ...a8.shareBlocked
                    }), b[1] = a) : a = b[1], a
                }
                case "conversation-load-failed": {
                    let a;
                    return b[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(l.a, {
                        ...a8.shareConversationLoadFailed
                    }), b[2] = a) : a = b[2], a
                }
                case "copy-failed": {
                    let a;
                    return b[3] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(l.a, {
                        ...a8.shareCopyFailed
                    }), b[3] = a) : a = b[3], a
                }
                case "create-failed": {
                    let a;
                    return b[4] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(l.a, {
                        ...a8.shareCreateFailed
                    }), b[4] = a) : a = b[4], a
                }
            }
        }
        let a8 = (0, m.f)({
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
                defaultMessage: "This content includes files and can\u2019t be reshared yet"
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
                defaultMessage: "Any messages you add after sharing will be visible to members of your workspace. Project files and custom instructions won\u2019t be accessible via the shared link."
            }
        })
    }),
    Y7np: (function(a, b, c) {
        c.d(b, {
            a: () => Y,
            b: () => U
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("lA5q"),
            g = c("T0Rc"),
            h = c("on57"),
            i = c("NRIv"),
            j = c("zd8w"),
            k = c("oyxz"),
            l = c("hL9c"),
            m = c("YWcr"),
            n = c("rS3J"),
            o = c("dKZq"),
            p = c("QlrJ"),
            q = c("vHM0"),
            r = c("Bbed"),
            s = c("RNul"),
            t = c("jHtb"),
            u = c("zcVM"),
            v = c("aPiu"),
            w = c("FqCE"),
            x = c("NddG"),
            y = c("RUBg"),
            z = c("zSQm"),
            A = c("ZjkF"),
            B = c("WAdu"),
            C = c("TxRk"),
            D = c("ABl9"),
            E = c("vLpE"),
            F = c("kfGJ"),
            G = c("qKAH"),
            H = c("zHp1"),
            I = c("HAEQ"),
            J = c("x1Bg"),
            K = c("taWv"),
            L = c("U5zD"),
            M = c("Zm8H"),
            N = c("OOaz"),
            O = c("TUMj"),
            P = c("drbS"),
            Q = c("jAnS");
        let R = (0, r.a)(async () => (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(851456), c.e(756383), c.e(704615), c.e(329156), c.e(829555), c.e(204017), c.e(757355)]).then(() => c("IQg5"))).WritingBlockDirectiveRenderer, I.a),
            S = {
                [f.a]: function(a) {
                    let b, c = (0, e.c)(3),
                        f = (0, O.e)(),
                        g = f?.contentReferences;
                    return c[0] !== a || c[1] !== g ? (b = (0, d.jsx)(R, {
                        ...a,
                        contentReferences: g,
                        isStreaming: !1,
                        testId: "chatgpt-writing-block"
                    }), c[0] = a, c[1] = g, c[2] = b) : b = c[2], b
                }
            },
            T = (0, y.c)({
                conversationId: null,
                externalResourcePolicy: "restricted",
                isBrowserEnabled: !1,
                openFileLinksInSidePanel: !1
            });

        function U(a) {
            let b, c, f, g, i, k, l, m = (0, e.c)(43),
                {
                    expandedHistory: n,
                    expandPreviewEventLogger: o,
                    prompt: p,
                    response: q,
                    serverConversationId: r,
                    turns: s
                } = a,
                t = "restricted" !== (0, j.useContext)(B.a);
            if (m[0] !== p || m[1] !== t || m[2] !== q || m[3] !== r || m[4] !== s) {
                let a = s?.slice(0, 4);
                if (c = null != q, f = "default", null != p) {
                    let a;
                    m[8] !== p.renderFormat || m[9] !== p.text ? (a = (0, d.jsx)(_, {
                        renderFormat: p.renderFormat,
                        text: p.text
                    }), m[8] = p.renderFormat, m[9] = p.text, m[10] = a) : a = m[10], b = a
                } else if (null != q) {
                    let a, c;
                    f = "response", m[11] !== r ? (a = (0, N.c)(r), m[11] = r, m[12] = a) : a = m[12];
                    let e = t ? "share" : void 0;
                    m[13] !== q || m[14] !== a || m[15] !== e ? (c = (0, d.jsx)(J.a, {
                        conversationId: a,
                        cwd: null,
                        hostId: F.a,
                        item: q,
                        isReadOnly: !0,
                        preview: e,
                        trackShownImpressions: !1,
                        turnId: "share-preview"
                    }), m[13] = q, m[14] = a, m[15] = e, m[16] = c) : c = m[16], b = c
                } else a?.some(V) && (f = "transcript"), b = null == a ? null : (0, d.jsx)($, {
                    preview: t ? "share" : void 0,
                    serverConversationId: r,
                    turns: a
                });
                m[0] = p, m[1] = t, m[2] = q, m[3] = r, m[4] = s, m[5] = b, m[6] = c, m[7] = f
            } else b = m[5], c = m[6], f = m[7];
            m[17] !== c || m[18] !== r ? (g = function(a) {
                return (0, d.jsx)(Z, {
                    serverConversationId: r,
                    children: (0, d.jsx)("div", {
                        className: (0, h.b)("flex min-w-0 flex-col gap-4", c ? "responseTypography-A7UvAY" : "p-4"),
                        children: a
                    })
                })
            }, m[17] = c, m[18] = r, m[19] = g) : g = m[19];
            let u = g,
                v = b;
            if (null != n) {
                let a, b = t ? "share" : void 0;
                m[20] !== o || m[21] !== n || m[22] !== r || m[23] !== b ? (a = (0, d.jsx)(X, {
                    eventLogger: o,
                    history: n,
                    preview: b,
                    serverConversationId: r
                }), m[20] = o, m[21] = n, m[22] = r, m[23] = b, m[24] = a) : a = m[24], v = a
            } else if (null == p && null == q && null != s) {
                let a, b = t ? "share" : void 0;
                m[25] !== r || m[26] !== b || m[27] !== s ? (a = (0, d.jsx)($, {
                    preview: b,
                    serverConversationId: r,
                    turns: s
                }), m[25] = r, m[26] = b, m[27] = s, m[28] = a) : a = m[28], v = a
            }
            m[29] !== v || m[30] !== p || m[31] !== u ? (i = null == p ? u(v) : void 0, m[29] = v, m[30] = p, m[31] = u, m[32] = i) : i = m[32];
            let w = null == n ? "immediate" : "deferred",
                x = null == p && null == q && null == s,
                y = f;
            return m[33] !== b || m[34] !== u ? (k = u(b), m[33] = b, m[34] = u, m[35] = k) : k = m[35], m[36] !== o || m[37] !== i || m[38] !== w || m[39] !== x || m[40] !== k || m[41] !== f ? (l = (0, d.jsx)(G.a, {
                expandedContent: i,
                expandedContentLoad: w,
                expandPreviewEventLogger: o,
                isLoading: x,
                variant: y,
                children: k
            }), m[36] = o, m[37] = i, m[38] = w, m[39] = x, m[40] = k, m[41] = f, m[42] = l) : l = m[42], l
        }

        function V(a) {
            let {
                turn: b
            } = a;
            return b.items.some(W)
        }

        function W(a) {
            return "generated-image" === a.type
        }

        function X(a) {
            let b, c, f, h, i, l, m = (0, e.c)(18),
                {
                    eventLogger: n,
                    history: o,
                    preview: p,
                    serverConversationId: q
                } = a;
            m[0] !== o.sessionId ? (b = ["expanded-share-history", o.sessionId], m[0] = o.sessionId, m[1] = b) : b = m[1], m[2] !== o ? (c = a => {
                let {
                    signal: b
                } = a;
                return o.load(b)
            }, m[2] = o, m[3] = c) : c = m[3], m[4] !== b || m[5] !== c ? (f = {
                queryKey: b,
                queryFn: c,
                staleTime: 1 / 0,
                gcTime: 0,
                retry: !1
            }, m[4] = b, m[5] = c, m[6] = f) : f = m[6];
            let {
                data: r,
                isError: t
            } = (0, g.a)(f);
            if (m[7] !== r || m[8] !== n || m[9] !== t ? (h = () => {
                    null != r ? n?.loaded() : t && n?.failed()
                }, i = [r, n, t], m[7] = r, m[8] = n, m[9] = t, m[10] = h, m[11] = i) : (h = m[10], i = m[11]), (0, j.useEffect)(h, i), t) {
                let a;
                return m[12] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(k.a, {
                    id: "shareDialog.preview.historyUnavailable",
                    defaultMessage: "Couldn\u2019t load the full preview"
                }), m[12] = a) : a = m[12], a
            }
            if (null == r) {
                let a;
                return m[13] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(s.a, {
                    className: "icon-sm"
                }), m[13] = a) : a = m[13], a
            }
            return m[14] !== r || m[15] !== p || m[16] !== q ? (l = (0, d.jsx)($, {
                preview: p,
                serverConversationId: q,
                turns: r
            }), m[14] = r, m[15] = p, m[16] = q, m[17] = l) : l = m[17], l
        }

        function Y(a) {
            let b, c, f = (0, e.c)(7),
                {
                    preview: g,
                    serverConversationId: h,
                    turns: i
                } = a;
            return f[0] !== g || f[1] !== h || f[2] !== i ? (b = (0, d.jsx)("div", {
                className: "flex min-w-0 flex-col gap-4 p-4",
                children: (0, d.jsx)($, {
                    markdownDirectives: S,
                    preview: g,
                    serverConversationId: h,
                    turns: i
                })
            }), f[0] = g, f[1] = h, f[2] = i, f[3] = b) : b = f[3], f[4] !== h || f[5] !== b ? (c = (0, d.jsx)(Z, {
                serverConversationId: h,
                children: b
            }), f[4] = h, f[5] = b, f[6] = c) : c = f[6], c
        }

        function Z(a) {
            let b, c, f, g, h = (0, e.c)(10),
                {
                    children: i,
                    serverConversationId: j
                } = a;
            return h[0] !== j ? (b = (0, Q.c)(j), h[0] = j, h[1] = b) : b = h[1], h[2] !== j || h[3] !== b ? (c = {
                conversationId: j,
                pathname: b,
                routeKind: "chatgpt-thread",
                routeTemplate: Q.a
            }, h[2] = j, h[3] = b, h[4] = c) : c = h[4], h[5] !== i ? (f = (0, d.jsx)(B.a.Provider, {
                value: "restricted",
                children: (0, d.jsx)(v.a, {
                    children: i
                })
            }), h[5] = i, h[6] = f) : f = h[6], h[7] !== c || h[8] !== f ? (g = (0, d.jsx)(E.a, {
                route: c,
                children: f
            }), h[7] = c, h[8] = f, h[9] = g) : g = h[9], g
        }

        function $(a) {
            let {
                preview: b,
                markdownDirectives: c,
                serverConversationId: e,
                turns: f
            } = a;
            return f.map(a => {
                let {
                    id: f,
                    turn: g
                } = a;
                return (0, d.jsx)("div", {
                    className: "flex min-w-0 flex-col gap-4",
                    children: g.items.map((a, g) => "user-message" === a.type ? (0, d.jsxs)("div", {
                        className: "flex min-w-0 flex-col items-end gap-2",
                        children: [a.images.map(a => (0, d.jsx)(ac, {
                            src: a,
                            serverConversationId: e
                        }, a)), a.message.trim() ? (0, d.jsx)(_, {
                            item: a,
                            renderFormat: a.renderFormat,
                            text: (0, i.x)(a.message)
                        }) : null]
                    }, g) : "assistant-message" === a.type ? (0, d.jsx)(J.a, {
                        conversationId: (0, N.c)(e),
                        cwd: null,
                        hostId: F.a,
                        item: a,
                        isReadOnly: !0,
                        preview: b,
                        markdownDirectives: c,
                        trackShownImpressions: !1,
                        turnId: f
                    }, g) : "generated-image" === a.type && null != a.src ? (0, d.jsx)(ac, {
                        isGenerated: !0,
                        src: a.src,
                        serverConversationId: e
                    }, g) : null)
                }, f)
            })
        }

        function _(a) {
            let b, c, f = (0, e.c)(6),
                {
                    item: g,
                    renderFormat: h,
                    text: i
                } = a;
            f[0] !== g || f[1] !== i ? (b = function(a, b) {
                let c = b?.chatGptSystemHintMentions ?? (0, P.d)([], a),
                    d = b?.renderFormat === "plain" ? b.chatGptFileMentions?.filter(a => {
                        let {
                            attachment: b
                        } = a;
                        return b.isSourceReference
                    }) ?? [] : [],
                    e = [...c, ...d].sort((a, b) => b.startIndex - a.startIndex),
                    f = a;
                for (let a of e) {
                    let b;
                    if ("attachment" in a) {
                        let c = (0, L.g)(a.attachment, a.attachment.name);
                        if (null == c) continue;
                        b = c
                    } else {
                        let c = a.id.replace(/^(?:connector|plugin):/u, "");
                        if (c !== D.a && !M.a.has(c) && null == (0, m.z)(a.id)) continue;
                        b = (0, n.l)(a.label, D.b)
                    }
                    f = f.slice(0, a.startIndex) + b + f.slice(a.endIndex)
                }
                return f
            }(i, g), f[0] = g, f[1] = i, f[2] = b) : b = f[2];
            let j = b;
            return f[3] !== j || f[4] !== h ? (c = (0, d.jsx)(q.a, {
                isTemporaryChat: !1,
                children: "plain" === h ? (0, d.jsx)(o.b, {
                    children: (0, d.jsx)(p.a, {
                        preserveCodeDelimiters: !0,
                        text: j,
                        renderLink: aa
                    })
                }) : (0, d.jsx)(t.a, {
                    text: j,
                    components: {
                        a: ab
                    },
                    cwd: null,
                    hasSerializedParagraphs: "markdown" === h,
                    hostId: F.a,
                    renderMath: !1,
                    variant: "user-message"
                })
            }), f[3] = j, f[4] = h, f[5] = c) : c = f[5], c
        }

        function aa(a) {
            let b = "text" !== (0, m.x)(a) || null != (0, w.b)(a.href) ? (0, z.a)(a.href, a.label) : void 0;
            return null == b ? null : (0, d.jsx)(ab, {
                href: b,
                children: a.label
            }, a.elementKey)
        }

        function ab(a) {
            let b, c, f = (0, e.c)(10);
            if (a.href !== D.b) {
                let b, c = a[x.a];
                return f[0] !== a.children || f[1] !== a.href || f[2] !== a.title || f[3] !== c ? (b = (0, d.jsx)(T, {
                    href: a.href,
                    title: a.title,
                    "data-markdown-raw-link-label": c,
                    children: a.children
                }), f[0] = a.children, f[1] = a.href, f[2] = a.title, f[3] = c, f[4] = b) : b = f[4], b
            }
            let g = a[x.a];
            return f[5] !== a.children || f[6] !== g ? (b = "string" == typeof g ? (0, n.n)(g) : (0, A.a)(a.children), f[5] = a.children, f[6] = g, f[7] = b) : b = f[7], f[8] !== b ? (c = (0, d.jsx)(C.a, {
                icon: u.a,
                layout: "selection-pill",
                children: b
            }), f[8] = b, f[9] = c) : c = f[9], c
        }

        function ac(a) {
            let b, c, f = (0, e.c)(7),
                {
                    isGenerated: g,
                    src: h,
                    serverConversationId: i
                } = a,
                j = void 0 !== g && g,
                m = (0, H.i)(h) ? h : "";
            f[0] !== i ? (b = (0, K.c)((0, N.c)(i)), f[0] = i, f[1] = b) : b = f[1];
            let {
                src: n,
                isLoading: o
            } = (0, H.m)(m, b), p = (0, z.c)(h) ? h : null;
            if (m && (p = n), o) {
                let a;
                return f[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(s.a, {
                    className: "icon-sm"
                }), f[2] = a) : a = f[2], a
            }
            if (null == p) {
                let a;
                return f[3] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)("span", {
                    className: "text-sm text-secondary",
                    children: (0, d.jsx)(k.a, {
                        id: "chatgptConversations.shareDialog.imageUnavailable",
                        defaultMessage: "Image preview unavailable"
                    })
                }), f[3] = a) : a = f[3], a
            }
            return f[4] !== p || f[5] !== j ? (c = j ? (0, d.jsx)("img", {
                alt: "",
                className: "block max-h-56 max-w-full self-start rounded-2xl object-contain",
                loading: "lazy",
                referrerPolicy: "no-referrer",
                src: p
            }) : (0, d.jsx)(l.a, {
                src: p,
                previewEnabled: !1,
                imageLoading: "lazy"
            }), f[4] = p, f[5] = j, f[6] = c) : c = f[6], c
        }
    }),
    fwwN: (function(a, b, c) {
        var d = c("SGsN"),
            e = c("xygx"),
            f = c("ddzD"),
            g = c("urzV"),
            h = c("Yscs"),
            i = c("taWv"),
            j = c("rfhJ");
        c.d(b, {}, {
            a: async function(a, b) {
                let {
                    images: c,
                    downloadSources: k,
                    intl: l,
                    serverConversationId: m,
                    isParagen: n = !1,
                    logIndividualDownloads: o = !0
                } = b, p = 0;
                for (let [b, q] of c.entries()) {
                    if (null == q.src || "completed" !== q.status || q.isPreview) continue;
                    null != m && n && (0, j.c)(a, m, q, "download", "paragen");
                    let r = k?.get(q.id) ?? q.src;
                    null != m && (r = await (0, e.f)({
                        conversationId: null,
                        absoluteImageFilePath: null,
                        hostId: "local",
                        imageAssetResolver: (0, i.c)(m),
                        queryClient: a.queryClient,
                        src: r
                    }));
                    let s = (0, g.c)(r ?? q.src),
                        t = (0, f.a)(q).downloadExtension ?? s ?? "png";
                    r instanceof Blob && t !== s && (r = await (0, h.a)(r).catch(() => null));
                    let u = (0, g.b)(l, t, {
                            title: q.chatGptDisplayTitle,
                            gifSpeed: q.gifPlayback?.speed
                        }),
                        v = !1;
                    if (null != r && await (0, g.d)({
                            downloadSrc: r,
                            onDownloaded: () => {
                                v = !0, null != m && !n && o && (0, j.c)(a, m, q, "download")
                            },
                            suggestedFilename: c.length > 1 ? u.replace(/\.[^.]+$/, `-${b+1}.${t}`) : u
                        })) {
                        if (!v) return "cancelled";
                        p++;
                        continue
                    }
                    return a.get(d.f).danger(l.formatMessage({
                        id: "imageSidePanel.downloadFailure",
                        defaultMessage: "Could not download image"
                    }), {
                        errorAnalytics: {
                            toastId: "imageSidePanel.downloadFailure"
                        }
                    }), "failed"
                }
                return p > 0 ? "downloaded" : "empty"
            }
        })
    }),
    cQW3: (function(a, b, c) {
        var d = c("SavH"),
            e = c("yGJW"),
            f = c("r9i9");
        c.d(b, {}, {
            a: function(a, b, c) {
                return {
                    queryKey: ["chatgpt-image-share", b, c.item.id, c.item.src, c.additionalImages?.map(a => [a.id, a.src])],
                    queryFn: async () => {
                        let g = await (0, f.c)({
                            additionalImages: c.additionalImages,
                            conversationId: b,
                            image: c.item
                        });
                        return c.isDirectLightboxShare && (0, e.a)(a, d.d, {}), g
                    },
                    staleTime: 1 / 0
                }
            }
        })
    }),
    Tywu: (function(a, b, c) {
        var d = c("FS1B"),
            e = c("yGJW");

        function f() {
            let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "https://chatgpt.com/s/native-image-share-capability-check";
            if ("function" != typeof navigator.share) return !1;
            if ("function" != typeof navigator.canShare) return !0;
            try {
                return navigator.canShare({
                    url: a
                })
            } catch {
                return !1
            }
        }
        c.d(b, {}, {
            a: f,
            b: async function(a, b, c, g) {
                let h = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION",
                    i = {
                        url: b.shareLinkUrl
                    };
                if (b.isWorkspaceOnly || !f(i.url)) return "failed";
                let j = {
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_SHARER",
                    attachmentType: "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_IMAGE_SHARE",
                    contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_POST_SLICE",
                    source: h,
                    sheetType: "CHATGPT_SHARE_FLOW_SHEET_TYPE_SYSTEM",
                    conversationId: c,
                    shareSessionId: g,
                    shareId: b.shareLinkId
                };
                try {
                    let b = navigator.share(i);
                    return (0, e.a)(a, d.i, {
                        ...j,
                        action: "CHATGPT_SHARE_FLOW_ACTION_SYSTEM_SHEET_OPENED"
                    }), await b, (0, e.a)(a, d.i, {
                        ...j,
                        action: "CHATGPT_SHARE_FLOW_ACTION_SYSTEM_SHARE_COMPLETED"
                    }), "shared"
                } catch (c) {
                    let b = "object" == typeof c && null != c && "name" in c && "AbortError" === c.name;
                    return (0, e.a)(a, d.i, {
                        ...j,
                        action: b ? "CHATGPT_SHARE_FLOW_ACTION_DISMISSED" : "CHATGPT_SHARE_FLOW_ACTION_FAILED",
                        failureReason: b ? void 0 : "CHATGPT_SHARE_FLOW_FAILURE_REASON_UNSPECIFIED"
                    }), b ? "cancelled" : "failed"
                }
            }
        })
    }),
    k5RO: (function(a, b, c) {
        let d = {
                kind: "native"
            },
            e = {
                kind: "native",
                promptShareTreatment: "image-only"
            },
            f = {
                kind: "custom",
                layout: "one-row",
                unsupportedDestinationFallback: "native-share"
            },
            g = {
                kind: "custom",
                layout: "one-row",
                unsupportedDestinationFallback: "app-store"
            },
            h = {
                kind: "custom",
                layout: "two-rows",
                unsupportedDestinationFallback: "native-share"
            },
            i = {
                ...h,
                promptShareTreatment: "image-only"
            },
            j = {
                ...h,
                promptShareTreatment: "prompt-with-image"
            },
            k = {
                kind: "custom",
                layout: "two-rows",
                unsupportedDestinationFallback: "app-store"
            },
            l = ["whatsapp", "messages", "instagram-stories", "facebook-messenger", "x", "reddit"],
            m = {
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
            n = {
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
        c.d(b, {}, {
            a: "2001123255",
            b: "mweb_image_share_sheet_variant",
            c: function(a, b) {
                return n[a]?.[b] ?? null
            },
            d: function(a) {
                let {
                    destination: b,
                    isAppleDevice: c,
                    shareUrl: d,
                    title: e
                } = a, f = encodeURIComponent(d), g = encodeURIComponent(e ?? "");
                switch (b) {
                    case "messages":
                        return `sms:${c?"&":"?"}body=${f}`;
                    case "whatsapp":
                        return `https://wa.me/?text=${f}`;
                    case "telegram":
                        return `https://t.me/share/url?url=${f}&text=${g}`;
                    case "line":
                        return `https://social-plugins.line.me/lineit/share?url=${f}&text=${g}`;
                    case "linkedin":
                        return `https://www.linkedin.com/shareArticle?url=${f}&text=${g}`;
                    case "reddit":
                        return `https://www.reddit.com/submit?url=${f}&title=${g}`;
                    case "x":
                        return `https://twitter.com/intent/tweet?url=${f}&text=${g}`;
                    case "facebook-messenger":
                    case "facebook-stories":
                    case "instagram-stories":
                    case "kakao-talk":
                    case "snapchat-stories":
                        return null
                }
            },
            e: function(a) {
                let {
                    country: b
                } = a, c = b?.trim().toUpperCase();
                return [...(null == c ? void 0 : m[c]) ?? l]
            },
            f: function(a) {
                let {
                    canUseNativeShare: b,
                    experience: c,
                    isMobileBrowser: d,
                    isPersonalAccount: e
                } = a;
                if (d) return "custom" === c.kind ? c : b && e ? f : void 0
            },
            g: function(a) {
                return null != n[a]
            },
            h: function(a) {
                switch (a) {
                    case "native_with_fallback_no_prompt_switcher":
                        return e;
                    case "custom_one_row_native_fallback":
                    case "new_custom":
                        return f;
                    case "custom_one_row_app_store_redirect":
                        return g;
                    case "custom_two_rows_native_fallback":
                        return h;
                    case "custom_share_sheet_without_prompt_switcher":
                        return i;
                    case "custom_share_sheet_with_prompt_switcher":
                        return j;
                    case "custom_two_rows_app_store_redirect":
                        return k;
                    default:
                        return d
                }
            }
        })
    }),
    aPiu: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("Q840"),
            g = c("Sd8U"),
            h = c("uHE8"),
            i = c("tSEg");
        c.d(b, {}, {
            a: function(a) {
                let b, c, j = (0, e.c)(7),
                    {
                        children: k
                    } = a,
                    l = (0, f.y)(i.a);
                if ("home" === l.value.routeKind) {
                    let a;
                    return j[0] !== k ? (a = (0, d.jsx)(h.a, {
                        children: k
                    }), j[0] = k, j[1] = a) : a = j[1], a
                }
                j[2] !== l ? (b = (0, g.q)(l)?.getOwnValue(g.a) ?? (0, g.c)(l.value, void 0, l.value.clientThreadId), j[2] = l, j[3] = b) : b = j[3];
                let m = b;
                return j[4] !== k || j[5] !== m ? (c = (0, d.jsx)(f.b, {
                    scope: g.a,
                    value: m,
                    children: k
                }), j[4] = k, j[5] = m, j[6] = c) : c = j[6], c
            }
        })
    }),
    TnP0: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("Wf1j"),
            g = c("oyxz"),
            h = c("Sm6l"),
            i = c("mUDD"),
            j = c("bf6R"),
            k = c("evwP"),
            l = c("zLIa"),
            m = c("sX4C");
        c.d(b, {}, {
            a: function(a) {
                let b, c, n, o, p, q, r, s = (0, e.c)(38),
                    {
                        accessControls: t,
                        actionDisabled: u,
                        actionLabel: v,
                        audience: w,
                        compactImageSheetFooter: x,
                        error: y,
                        footer: z,
                        info: A,
                        isBusy: B,
                        isDismissalDisabled: C,
                        notices: D,
                        onClose: E,
                        onOpenAutoFocus: F,
                        onPortalContainerChange: G,
                        onSubmit: H,
                        preview: I,
                        presentation: J,
                        subtitle: K,
                        size: L,
                        threadTitle: M,
                        title: N
                    } = a,
                    O = (0, f.a)();
                s[0] !== M ? (b = M?.trim(), s[0] = M, s[1] = b) : b = s[1];
                let P = b;
                s[2] !== B ? (c = B ? null : (0, d.jsx)(j.Ve, {}), s[2] = B, s[3] = c) : c = s[3], s[4] !== v || s[5] !== c ? (n = (0, d.jsxs)(d.Fragment, {
                    children: [c, v]
                }), s[4] = v, s[5] = c, s[6] = n) : n = s[6];
                let Q = n;
                if (y?.preventsSharing) {
                    let a;
                    s[7] !== y.onRetry ? (a = null != y.onRetry ? (0, d.jsx)(g.a, {
                        id: "shareDialog.thread.retry",
                        defaultMessage: "Try again"
                    }) : (0, d.jsx)(g.a, {
                        id: "shareDialog.thread.close",
                        defaultMessage: "Close"
                    }), s[7] = y.onRetry, s[8] = a) : a = s[8], Q = a
                }
                let R = !y?.preventsSharing && u;
                s[9] !== Q || s[10] !== B || s[11] !== R ? (o = (0, d.jsx)(h.a, {
                    color: "outline",
                    disabled: R,
                    loading: B,
                    size: "medium",
                    type: "submit",
                    children: Q
                }), s[9] = Q, s[10] = B, s[11] = R, s[12] = o) : o = s[12];
                let S = o;
                s[13] !== P || s[14] !== N ? (p = N ?? (P ? (0, d.jsx)(g.a, {
                    id: "shareDialog.thread.namedTitle",
                    defaultMessage: "Share {threadTitle}",
                    values: {
                        threadTitle: P
                    }
                }) : (0, d.jsx)(g.a, {
                    id: "shareDialog.thread.title",
                    defaultMessage: "Share chat"
                })), s[13] = P, s[14] = N, s[15] = p) : p = s[15];
                let T = y?.preventsSharing ? y.onRetry ?? E : H,
                    U = y?.preventsSharing ? S : z ?? S;
                return s[16] !== t || s[17] !== w || s[18] !== y || s[19] !== A || s[20] !== O || s[21] !== D || s[22] !== J || s[23] !== I ? (q = y?.preventsSharing ? (0, d.jsx)(i.e, {
                    className: "py-10",
                    children: (0, d.jsx)("div", {
                        role: "alert",
                        children: (0, d.jsx)(k.a, {
                            children: y.content
                        })
                    })
                }) : (0, d.jsxs)(d.Fragment, {
                    children: ["imageSheet" === J ? I : (0, d.jsx)(i.e, {
                        children: I
                    }), A, D, t ?? (null == w ? null : (0, d.jsx)(i.e, {
                        children: (0, d.jsx)("div", {
                            className: "text-sm text-codex-description",
                            children: w
                        })
                    })), null == y ? null : (0, d.jsx)(i.e, {
                        children: (0, d.jsx)("div", {
                            className: "text-sm text-danger",
                            role: "alert",
                            children: y.content
                        })
                    }), y?.copyUrl == null ? null : (0, d.jsx)(i.e, {
                        children: (0, d.jsx)(l.a, {
                            "aria-label": O.formatMessage({
                                id: "shareDialog.thread.linkLabel",
                                defaultMessage: "Share link"
                            }),
                            readOnly: !0,
                            value: y.copyUrl
                        })
                    })]
                }), s[16] = t, s[17] = w, s[18] = y, s[19] = A, s[20] = O, s[21] = D, s[22] = J, s[23] = I, s[24] = q) : q = s[24], s[25] !== x || s[26] !== C || s[27] !== E || s[28] !== F || s[29] !== G || s[30] !== J || s[31] !== L || s[32] !== K || s[33] !== p || s[34] !== T || s[35] !== U || s[36] !== q ? (r = (0, d.jsx)(m.a, {
                    title: p,
                    subtitle: K,
                    compactImageSheetFooter: x,
                    isDismissalDisabled: C,
                    onClose: E,
                    onOpenAutoFocus: F,
                    onPortalContainerChange: G,
                    onSubmit: T,
                    size: L,
                    presentation: J,
                    footer: U,
                    children: q
                }), s[25] = x, s[26] = C, s[27] = E, s[28] = F, s[29] = G, s[30] = J, s[31] = L, s[32] = K, s[33] = p, s[34] = T, s[35] = U, s[36] = q, s[37] = r) : r = s[37], r
            }
        })
    }),
    qKAH: (function(a, b, c) {
        c.d(b, {
            a: () => s
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("ZDhX"),
            g = c("on57"),
            h = c("Q840"),
            i = c("zd8w"),
            j = c("Wf1j"),
            k = c("oyxz"),
            l = c("Qgfj"),
            m = c("Sm6l"),
            n = c("JNtf"),
            o = c("bf6R"),
            p = c("RNul"),
            q = c("O666");
        let r = {
            default: void 0,
            transcript: void 0,
            image: "size-full",
            response: "p-5"
        };

        function s(a) {
            let b, c, f, i, l, m, n, o = (0, e.c)(25),
                {
                    ariaLabel: s,
                    children: u,
                    classicImagePreviewEligible: v,
                    expandedContent: w,
                    expandedContentLoad: x,
                    expandPreviewEventLogger: y,
                    isLoading: z,
                    presentation: B,
                    variant: C
                } = a,
                D = void 0 === x ? "immediate" : x,
                E = void 0 !== z && z,
                F = void 0 === C ? "default" : C,
                G = (0, j.a)();
            o[0] === Symbol.for("react.memo_cache_sentinel") ? (b = {
                layer: "3136899520",
                parameter: "classic_image_preview"
            }, o[0] = b) : b = o[0];
            let H = (0, h.x)(void 0 !== v && v ? q.b : null, b) ? "border-transparent bg-transparent" : "border-default bg-surface",
                I = "transcript" === F ? "h-auto" : "aspect-[1200/630]";
            o[1] !== H || o[2] !== I ? (c = (0, g.b)("relative min-h-56 overflow-hidden rounded-lg border select-none", H, I), o[1] = H, o[2] = I, o[3] = c) : c = o[3];
            let J = c;
            return null != B && (J = "imageSheetTwoRows" === B ? "imageSheetTwoRowsPreview-bFaioZ" : "imageSheetPreview-rzCCMf"), o[4] !== s || o[5] !== G || o[6] !== F ? (f = s ?? G.formatMessage(A["transcript" === F ? "default" : F]), o[4] = s, o[5] = G, o[6] = F, o[7] = f) : f = o[7], o[8] !== u || o[9] !== E || o[10] !== B || o[11] !== F ? (i = E ? (0, d.jsxs)("div", {
                className: "flex h-full items-center justify-center gap-2 text-sm text-secondary",
                children: [(0, d.jsx)(p.a, {
                    className: "icon-sm"
                }), (0, d.jsx)(k.a, {
                    ...A.loading
                })]
            }) : (0, d.jsxs)("div", {
                "aria-hidden": !0,
                className: r[F],
                inert: !0,
                children: [u, null == B && ("default" === F || "response" === F) && (0, d.jsx)("div", {
                    className: "pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface to-transparent"
                })]
            }), o[8] = u, o[9] = E, o[10] = B, o[11] = F, o[12] = i) : i = o[12], o[13] !== i || o[14] !== f ? (l = (0, d.jsx)("div", {
                className: "h-full",
                role: "img",
                "aria-label": f,
                children: i
            }), o[13] = i, o[14] = f, o[15] = l) : l = o[15], o[16] !== y || o[17] !== w || o[18] !== D || o[19] !== E ? (m = !E && null != w && (0, d.jsx)(t, {
                className: "absolute! end-2 top-2",
                eventLogger: y,
                expandedContentLoad: D,
                children: w
            }), o[16] = y, o[17] = w, o[18] = D, o[19] = E, o[20] = m) : m = o[20], o[21] !== J || o[22] !== l || o[23] !== m ? (n = (0, d.jsxs)("div", {
                className: J,
                children: [l, m]
            }), o[21] = J, o[22] = l, o[23] = m, o[24] = n) : n = o[24], n
        }

        function t(a) {
            let b, c, g, l, p, r, s, t, w, B, C, D, E, F, G, H, I = (0, e.c)(33),
                {
                    className: J,
                    children: K,
                    eventLogger: L,
                    expandedContentLoad: M
                } = a,
                N = (0, j.a)();
            I[0] === Symbol.for("react.memo_cache_sentinel") ? (b = {
                layer: "3136899520",
                parameter: "expand_share_preview"
            }, I[0] = b) : b = I[0];
            let O = (0, h.x)(q.b, b);
            if (I[1] !== L ? (c = () => {
                    L?.eligible()
                }, g = [L], I[1] = L, I[2] = c, I[3] = g) : (c = I[2], g = I[3]), (0, i.useEffect)(c, g), I[4] !== O || I[5] !== L ? (l = () => {
                    O && L?.shown()
                }, p = [O, L], I[4] = O, I[5] = L, I[6] = l, I[7] = p) : (l = I[6], p = I[7]), (0, i.useEffect)(l, p), !O) return null;
            I[8] !== N ? (r = N.formatMessage(A.expand), I[8] = N, I[9] = r) : r = I[9];
            let P = r;
            I[10] === Symbol.for("react.memo_cache_sentinel") ? (s = {
                "aria-describedby": void 0
            }, I[10] = s) : s = I[10], I[11] !== L ? (t = a => {
                a && L?.selected()
            }, I[11] = L, I[12] = t) : t = I[12], I[13] === Symbol.for("react.memo_cache_sentinel") ? (w = (0, d.jsx)(o.Q, {}), I[13] = w) : w = I[13], I[14] !== J || I[15] !== P ? (B = (0, d.jsx)(m.a, {
                className: J,
                color: "mapSurface",
                radius: "full",
                size: "inputIcon",
                "aria-label": P,
                type: "button",
                children: w
            }), I[14] = J, I[15] = P, I[16] = B) : B = I[16], I[17] !== P || I[18] !== B ? (C = (0, d.jsx)(f.a, {
                content: P,
                children: B
            }), I[17] = P, I[18] = B, I[19] = C) : C = I[19], I[20] === Symbol.for("react.memo_cache_sentinel") ? (D = (0, d.jsx)(n.f, {
                className: "sr-only",
                children: (0, d.jsx)(k.a, {
                    ...A.expandedTitle
                })
            }), I[20] = D) : D = I[20], I[21] !== N ? (E = N.formatMessage(A.expandedTitle), I[21] = N, I[22] = E) : E = I[22];
            let Q = "immediate" === M ? L?.loaded : void 0;
            return I[23] !== K || I[24] !== Q ? (F = (0, d.jsx)("fieldset", {
                disabled: !0,
                ref: z,
                onFocusCapture: u,
                onPointerDownCapture: x,
                onPointerUpCapture: x,
                onPointerMoveCapture: x,
                onPointerOverCapture: x,
                onPointerOutCapture: x,
                onMouseDownCapture: x,
                onMouseUpCapture: x,
                onMouseMoveCapture: x,
                onMouseOverCapture: x,
                onMouseOutCapture: x,
                onTouchStartCapture: x,
                onTouchMoveCapture: x,
                onTouchEndCapture: x,
                onWheelCapture: x,
                onKeyDownCapture: x,
                onKeyUpCapture: x,
                onContextMenuCapture: y,
                onDragStartCapture: y,
                onDoubleClickCapture: y,
                onClickCapture: y,
                onAuxClickCapture: y,
                onSubmitCapture: y,
                children: (0, d.jsx)(v, {
                    onLoaded: Q,
                    children: K
                })
            }), I[23] = K, I[24] = Q, I[25] = F) : F = I[25], I[26] !== E || I[27] !== F ? (G = (0, d.jsx)("div", {
                className: "max-h-[80dvh] overflow-auto overscroll-contain px-5 pt-12 pb-5",
                "aria-label": E,
                role: "region",
                tabIndex: 0,
                children: F
            }), I[26] = E, I[27] = F, I[28] = G) : G = I[28], I[29] !== C || I[30] !== G || I[31] !== t ? (H = (0, d.jsxs)(n.a, {
                size: "wide",
                variant: "chatgpt",
                backdrop: "modal",
                autoFocusCloseButton: !0,
                contentProps: s,
                onOpenChange: t,
                triggerContent: C,
                children: [D, G]
            }), I[29] = C, I[30] = G, I[31] = t, I[32] = H) : H = I[32], H
        }

        function u(a) {
            a.stopPropagation(), w(a.target) || a.currentTarget.parentElement?.focus({
                preventScroll: !0
            })
        }

        function v(a) {
            let b, c, f, g = (0, e.c)(5),
                {
                    children: h,
                    onLoaded: j
                } = a;
            return g[0] !== j ? (b = () => {
                j?.()
            }, c = [j], g[0] = j, g[1] = b, g[2] = c) : (b = g[1], c = g[2]), (0, i.useEffect)(b, c), g[3] !== h ? (f = (0, d.jsx)("div", {
                children: h
            }), g[3] = h, g[4] = f) : f = g[4], f
        }

        function w(a) {
            if (!a.matches("div, pre, section, article, ul, ol, table") || !a.matches(":not([role]), [role=region], [role=group], [role=table]")) return !1;
            let {
                overflowX: b,
                overflowY: c
            } = getComputedStyle(a);
            return [b, c].some(a => "auto" === a || "scroll" === a)
        }

        function x(a) {
            a.stopPropagation()
        }

        function y(a) {
            a.preventDefault(), a.stopPropagation()
        }

        function z(a) {
            let b = "dil-renderer, a[href], area[href], [tabindex], [contenteditable], summary, iframe, object, embed, audio[controls], video[controls]";

            function c(a) {
                a.matches("a[href], area[href]") && a.removeAttribute("href"), a.hasAttribute("contenteditable") && "false" !== a.getAttribute("contenteditable") && a.setAttribute("contenteditable", "false"), a.matches("iframe, object, embed") && a.setAttribute("inert", ""), "-1" === a.getAttribute("tabindex") || w(a) || a.setAttribute("tabindex", "-1")
            }

            function d(a) {
                a.matches(b) && c(a), a.querySelectorAll(b).forEach(c)
            }
            d(a);
            let e = new MutationObserver(a => {
                for (let e of a)
                    for (let a of ("attributes" === e.type && e.target instanceof Element && e.target.matches(b) && c(e.target), e.addedNodes)) a instanceof Element && d(a)
            });
            return e.observe(a, {
                subtree: !0,
                childList: !0,
                attributes: !0,
                attributeFilter: ["href", "tabindex", "contenteditable", "controls"]
            }), () => e.disconnect()
        }
        let A = (0, l.f)({
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
                defaultMessage: "Loading preview\u2026"
            },
            response: {
                id: "shareDialog.response.previewLabel",
                defaultMessage: "Preview of the shared response"
            }
        })
    })
};