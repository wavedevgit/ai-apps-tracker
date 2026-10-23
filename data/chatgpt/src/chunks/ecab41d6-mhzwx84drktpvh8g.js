const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/c2825ab1-mkj3tbyu535hnido.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-mdvd4786a87166cc.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-bcbq46iub1p0ca1t.js", "assets/30901919-s8bko9nrkqwv6i4f.js", "assets/c470f5ab-jwd0o7jx9i9say9k.js", "assets/0e5afe53-hxm3yzzjqriayom4.js", "assets/conversation-small-ep6mlz5m.css", "assets/f5cccfb7-omfq28qsvhujhxcn.js", "assets/65f98121-b0hm1sj1awwl75d3.js", "assets/0f8b28f8-dtwtjpmoksw7w998.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $J as n,
    $i as r,
    A8 as i,
    Aet as a,
    Crt as o,
    Da as s,
    GJ as c,
    J1 as l,
    JF as u,
    K5 as d,
    Knt as f,
    Lit as p,
    Oa as m,
    QX as h,
    Qy as g,
    Rit as _,
    Rz as v,
    Wnt as y,
    Zy as b,
    a2 as x,
    crt as S,
    eY as C,
    ea as w,
    es as T,
    f0 as ee,
    gtt as E,
    hrt as te,
    itt as ne,
    j5 as re,
    jet as D,
    nZ as O,
    o0 as k,
    o2 as A,
    os as j,
    p0 as M,
    q1 as N,
    q5 as P,
    qF as F,
    srt as I,
    wet as L,
    zz as ie
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as R,
    Ln as z,
    N as ae,
    Nn as B,
    Nt as oe,
    Q as V,
    Rn as H,
    Vn as se,
    cn as ce,
    ln as U,
    s as le,
    wn as ue,
    zn as de
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $8 as fe,
    AR as pe,
    AUn as me,
    Ftt as he,
    Hdn as ge,
    IL as _e,
    IWn as ve,
    JL as ye,
    LWn as be,
    MUn as W,
    N7 as xe,
    NVn as Se,
    Nl as Ce,
    PVn as we,
    Pl as Te,
    Ptt as G,
    Q8 as Ee,
    Udn as De,
    XL as K,
    YC as q,
    YL as Oe,
    a5 as ke,
    brn as Ae,
    c5 as je,
    cpn as Me,
    d5 as Ne,
    ew as Pe,
    hrn as J,
    jR as Fe,
    jUn as Y,
    k7 as Ie,
    o5 as Le,
    p5 as Re,
    s5 as ze,
    spn as Be
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    $y as Ve,
    Im as He,
    Lm as Ue,
    Qy as We,
    _S as Ge,
    aC as Ke,
    cp as qe,
    fb as Je,
    iC as Ye,
    mb as Xe,
    sp as Ze,
    vS as Qe
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    aa as $e,
    ca as et,
    da as tt,
    fa as nt,
    ha as rt,
    oa as it,
    pa as at
} from "./8b34dbc2-lmwubajnld74ksfm.js";
import {
    n as ot,
    t as st
} from "./429c9f5e-w4f7zzxzbrcu9103.js";
import {
    n as ct,
    r as lt
} from "./1cfd0849-m5jfawnegpiinkdt.js";
import {
    n as ut,
    r as dt,
    t as ft
} from "./97fef780-dx3m5xlt5j8nomh5.js";
import {
    n as pt,
    t as mt
} from "./ee0eeb85-lwe5xt47dzwpuna6.js";
var ht, gt, _t = e((() => {
    ht = t(se()), gt = (0, ht.createContext)(null)
}));

function vt({
    rightAlign: e = !1,
    bottomAlign: t = !1,
    fullWidth: n = !1,
    justifyBetween: r = !1,
    alwaysVisible: i = !1,
    onOverlayVisible: a,
    testId: o,
    children: s
}) {
    "use no forget";
    let c = i ? `opacity-100 pointer-events-none` : `opacity-0 pointer-events-none group-focus-within/imagegen-image:opacity-100 group-hover/imagegen-image:opacity-100 focus-within:opacity-100 group-focus-within/imagegen-image:pointer-events-auto group-hover/imagegen-image:pointer-events-auto focus-within:pointer-events-auto`,
        l = (0, X.useCallback)(e => {
            e.propertyName === `opacity` && a?.()
        }, [a]);
    return (0, X.useEffect)(() => {
        i && a?.()
    }, [i, a]), (0, Z.jsxs)(`div`, {
        className: d(`pointer-events-none absolute z-2 overflow-hidden`, t ? `rounded-b-[inherit]` : `rounded-t-[inherit]`, e ? `end-0` : `start-0`, t ? `bottom-0` : `top-0`, n && `w-full`),
        children: [(0, Z.jsx)(`div`, {
            "data-testid": o,
            onTransitionEnd: l,
            className: d(t ? `bg-linear-to-b` : `bg-linear-to-t`, `from-transparent to-black/30`, `h-20 w-full transition-opacity duration-75 ease-out`, i ? `opacity-100` : `opacity-0 group-focus-within/imagegen-image:opacity-100 group-hover/imagegen-image:opacity-100 focus-within:opacity-100`)
        }), (0, Z.jsx)(`div`, {
            className: d(`absolute inset-0 flex`, c, `p-3`, t ? `items-end` : `items-start`, e ? `justify-end` : `justify-start`, r && `justify-between`),
            children: s
        })]
    })
}

function yt({
    canShowShareButton: e,
    onOverlayVisible: t,
    ...n
}) {
    "use no forget";
    let r = (0, X.useRef)(!1),
        i = Fe(),
        a = (0, X.useCallback)(() => {
            e && (r.current ||= (y.logEvent(`Share Post: Share Button Shown`, {
                source: `image_gen_action_overlay`,
                ...i
            }), !0))
        }, [i, e]),
        o = (0, X.useCallback)(() => {
            t?.(), a()
        }, [a, t]);
    return (0, Z.jsx)(vt, {
        ...n,
        onOverlayVisible: o
    })
}

function bt(e) {
    return t => {
        t.stopPropagation(), e()
    }
}

function xt({
    canShowShareButton: e,
    canPublishPromptShare: t,
    assetPointer: n,
    fullSizeImageAsset: r,
    conversation: i,
    messageId: a,
    shareSeriesImageCount: o,
    shareSeriesMessageSliceIds: s,
    fallback: c = null,
    shareFlowSource: l
}) {
    "use no forget";
    let [u, d] = (0, X.useState)(!1), [f, p] = (0, X.useState)(null), [m, h] = (0, X.useState)(null), g = (0, X.useRef)(!1), _ = de(), b = r?.asset_pointer ?? n, x = Be({
        mimeType: r?.mime_type
    }), C = at({
        canPublishPromptShare: t,
        assetPointer: b,
        conversation: i,
        imageGenMessageId: a,
        shareFlowSource: l
    }), w = rt({
        assetPointer: b,
        conversation: i,
        imageGenMessageId: a,
        shareFlowSource: l
    }), T = (0, X.useMemo)(() => Array.from(new Set((s ?? []).filter(Boolean))), [s]), ee = at({
        conversation: i,
        imageGenMessageIds: T,
        shareFlowSource: l
    }), E = rt({
        conversation: i,
        imageGenMessageIds: T,
        shareFlowSource: l
    }), te = Fe(), ne = (o ?? 0) > 1 && T.length > 0, D = re(() => e ? nt() : !1), O = re(() => e && t && ye()), k = _e(), A = () => {
        G.imageShared({
            analyticsContext: te,
            source: `image_gen_action_overlay`
        })
    }, j = (e = `media_generation`) => {
        y.logEventWithStatsig(`chatgpt_image_lightbox_share_current_image_selected`, `chatgpt_image_lightbox_share_current_image_selected`), y.logEventWithStatsig(`Share Post: Share Button Clicked`, `chatgpt_post_share_button_clicked`, {
            source: `image_gen_action_overlay`,
            attachment_type: e,
            message_id: a
        }), A()
    }, M = () => {
        y.logEventWithStatsig(`chatgpt_image_lightbox_share_all_images_selected`, `chatgpt_image_lightbox_share_all_images_selected`), y.logEventWithStatsig(`Share Post: Share Button Clicked`, `chatgpt_post_share_button_clicked`, {
            source: `image_gen_action_overlay`,
            attachment_type: `image_series_share`
        }), A()
    }, N = async (e, t, {
        keepDropdownOpen: n = !1
    } = {}) => {
        g.current = !0, n || p(null), h(null), d(!0);
        try {
            let n = await t();
            n ? (h(n), p(e), await n.autoCopyShareLink()) : p(null)
        } finally {
            d(!1), g.current = !1
        }
    }, P = () => {
        h(null), p(null)
    }, F = async e => {
        p(null), h(null), d(!0);
        try {
            let t = await e();
            if (!t) return;
            await t.copyShareLinkWithStreamingClipboard({
                shouldShowModerationBlockedToast: !0,
                successToastVariant: `successNeutral`
            }, {
                omitSheetType: !0
            })
        } finally {
            d(!1)
        }
    }, I = async (e, {
        keepDropdownOpen: t = !1
    } = {}) => {
        if (e) {
            await N(`mini-current`, w, {
                keepDropdownOpen: t
            }), j();
            return
        }
        d(!0);
        try {
            await C()
        } finally {
            d(!1)
        }
        j()
    }, L = async (e, {
        keepDropdownOpen: t = !1
    } = {}) => {
        if (e) {
            await N(`mini-series`, E, {
                keepDropdownOpen: t
            }), M();
            return
        }
        d(!0);
        try {
            await ee()
        } finally {
            d(!1)
        }
        M()
    }, ie = async () => {
        j(`prompt`), d(!0);
        try {
            await C({
                shareType: Ee.PromptShare
            })
        } finally {
            d(!1)
        }
    };
    if (!e) return c;
    let R = u ? v : Qe,
        z = (0, Z.jsx)(Q, {
            icon: R,
            variant: `imageGenUpdates`,
            disabled: u,
            onClick: e => {
                e.stopPropagation()
            },
            ariaLabel: _.formatMessage(x.shareLabel)
        });
    return ne || O ? (0, Z.jsx)(me, {
        open: f != null,
        side: f === "default" ? void 0 : `right`,
        contentAlign: f === "default" ? void 0 : `end`,
        sideOffset: 8,
        size: `auto`,
        contentClassName: f === "default" ? void 0 : k.contentClassName,
        onOpenChange: e => {
            if (!e) {
                if (g.current) return;
                P();
                return
            }
            if (h(null), p(`default`), ne) {
                let e = y.logStructuredEvent(`ChatgptImageLightboxButtonTapped`, {
                    button: `CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_SHARE`,
                    legacyStatsigEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`,
                    selectionState: `CHATGPT_IMAGEGEN_SELECTION_STATE_PENDING_SELECTION`,
                    imageSeriesCount: S(o)
                });
                y.logValueEventWithStatsig({
                    segmentEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`,
                    statsigEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`,
                    data: {
                        selection_state: `pending_selection`,
                        image_series_count: o
                    },
                    eventId: e
                })
            }
        },
        triggerButton: z,
        children: f === `mini-current` && m ? (0, Z.jsx)(it, {
            imageShareScope: `single_image`,
            isBusinessWorkspace: k.isBusinessWorkspace,
            isResolvingShareLink: u,
            onClose: P,
            shareActions: m
        }) : f === `mini-series` && m ? (0, Z.jsx)(it, {
            imageShareScope: `image_series`,
            isBusinessWorkspace: k.isBusinessWorkspace,
            isResolvingShareLink: u,
            onClose: P,
            shareActions: m
        }) : (0, Z.jsxs)(Z.Fragment, {
            children: [(0, Z.jsx)(Y.Item, {
                icon: Ye,
                onSelect: e => {
                    if (t && K()) {
                        I(!1);
                        return
                    }
                    if (D) {
                        F(w).finally(j);
                        return
                    }
                    let n = tt();
                    n && e.preventDefault(), I(n, {
                        keepDropdownOpen: n
                    })
                },
                children: _.formatMessage(x.shareSelectionLabel)
            }), ne && (0, Z.jsx)(Y.Item, {
                icon: He,
                onSelect: e => {
                    if (D) {
                        F(E).finally(M);
                        return
                    }
                    let t = tt();
                    t && e.preventDefault(), L(t, {
                        keepDropdownOpen: t
                    })
                },
                children: _.formatMessage(lt.imageSeries, {
                    imageCount: o
                })
            }), O && (0, Z.jsx)(Y.Item, {
                icon: Ze,
                onSelect: () => void ie(),
                children: _.formatMessage(lt.promptTemplate)
            })]
        })
    }) : f === `mini-current` && m ? (0, Z.jsx)($e, {
        imageShareScope: `single_image`,
        isResolvingShareLink: u,
        triggerButton: z,
        onClose: P,
        shareActions: m
    }) : (0, Z.jsx)(Q, {
        icon: R,
        variant: `imageGenUpdates`,
        disabled: u,
        onClick: bt(async () => {
            if (t && K()) {
                await I(!1);
                return
            }
            if (D) {
                await F(w), A();
                return
            }
            if (tt()) {
                await N(`mini-current`, w), A();
                return
            }
            d(!0);
            try {
                await C()
            } finally {
                d(!1)
            }
            G.imageShared({
                analyticsContext: te,
                source: `image_gen_action_overlay`
            })
        }),
        ariaLabel: _.formatMessage(x.shareLabel)
    })
}
var St, X, Z, Ct, wt, Q, Tt, $, Et = e((() => {
        St = ue(), C(), O(), ot(), Re(), Me(), De(), E(), W(), qe(), Ve(), Xe(), Ke(), Ue(), Ge(), g(), r(), ve(), Te(), xe(), q(), L(), J(), et(), Oe(), j(), fe(), F(), i(), ie(), N(), ee(), ct(), p(), f(), s(), we(), o(), I(), A(), le(), P(), X = t(se()), H(), V(), pe(), he(), _t(), je(), Le(), ut(), mt(), Z = R(), U(), Ct = D.ImageGenWatermarkOverflowMenu, wt = x(() => ce(() => import(`./c2825ab1-mkj3tbyu535hnido.js`).then(e => e.ImageGenReferenceActions), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])), {
            loading: ({
                fallback: e
            }) => e,
            fallback: ({
                fallback: e
            }) => e
        }), Q = (0, X.forwardRef)(function(e, t) {
            "use forget";
            let n = (0, St.c)(28),
                r, i, a, o, s, c, l, u, f;
            n[0] === e ? (r = n[1], i = n[2], a = n[3], o = n[4], s = n[5], c = n[6], l = n[7], u = n[8], f = n[9]) : ({
                icon: r,
                children: o,
                className: s,
                disabled: c,
                onClick: l,
                ariaLabel: i,
                selected: u,
                variant: f,
                ...a
            } = e, n[0] = e, n[1] = r, n[2] = i, n[3] = a, n[4] = o, n[5] = s, n[6] = c, n[7] = l, n[8] = u, n[9] = f);
            let p = u !== void 0 && u,
                m = (f === void 0 ? `default` : f) === `imageGenUpdates`,
                h = o == null,
                g = m && h,
                _ = g && `group`,
                v = m ? h ? `h-10 w-10` : `h-10 gap-0 rounded-full bg-black/15 px-3 backdrop-blur-md hover:bg-black/30 focus:bg-black/30` : `gap-1 rounded-xl hover:bg-white/15 hover:backdrop-blur-md focus:bg-white/15 focus:backdrop-blur-md`,
                y = !m && (h ? `h-10 w-10` : `h-10 px-2`),
                b;
            n[10] !== s || n[11] !== _ || n[12] !== v || n[13] !== y ? (b = d(`pointer-events-auto z-11 flex items-center justify-center text-sm font-medium text-white`, _, v, y, s), n[10] = s, n[11] = _, n[12] = v, n[13] = y, n[14] = b) : b = n[14];
            let x;
            n[15] !== r || n[16] !== o || n[17] !== g ? (x = g ? (0, Z.jsx)(`span`, {
                className: `flex h-9 w-9 items-center justify-center rounded-full bg-black/15 backdrop-blur-md group-hover:bg-black/30 group-focus:bg-black/30`,
                children: r != null && (0, Z.jsx)(r, {
                    style: {
                        filter: `drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15))`
                    },
                    className: `icon fill-current`
                })
            }) : (0, Z.jsxs)(Z.Fragment, {
                children: [r != null && (0, Z.jsx)(r, {
                    style: {
                        filter: `drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15))`
                    },
                    className: `icon fill-current`
                }), o]
            }), n[15] = r, n[16] = o, n[17] = g, n[18] = x) : x = n[18];
            let S;
            return n[19] !== i || n[20] !== a || n[21] !== c || n[22] !== l || n[23] !== t || n[24] !== p || n[25] !== b || n[26] !== x ? (S = (0, Z.jsx)(`button`, {
                ref: t,
                type: `button`,
                "aria-pressed": p,
                className: b,
                onClick: l,
                disabled: c,
                "aria-label": i,
                ...a,
                children: x
            }), n[19] = i, n[20] = a, n[21] = c, n[22] = l, n[23] = t, n[24] = p, n[25] = b, n[26] = x, n[27] = S) : S = n[27], S
        }), Tt = ({
            imageAssetPointer: e,
            imageUrl: t,
            hasWatermarkedDownload: r = !1,
            isRenderedImageWatermarked: i = !1,
            fullSizeImageAsset: o,
            canPublishPromptShare: s = !0,
            shareSeriesImageCount: d,
            shareSeriesMessageSliceIds: f,
            downloadFullImage: p = !1,
            messageId: g,
            conversation: v,
            shouldShowOverflow: y = !1,
            alwaysVisible: x,
            shouldShow360Entrypoint: S = !1,
            on360EntrypointClick: C,
            on360EntrypointVisible: ee,
            onEditClick: E,
            editButtonAnalytics: D,
            shareFlowSource: O = T.CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION
        }) => {
            "use no forget";
            let A = re(v.serverId$),
                j = ae(),
                N = de(),
                P = oe(),
                F = Be({
                    mimeType: o?.mime_type
                }),
                {
                    isAnimated: I
                } = F,
                L = Ne(o, A, g),
                ie = k(),
                R = Fe(),
                z = _(),
                V = m(),
                H = u(),
                se = Pe() && z && !V && !H,
                ce = re(l),
                U = se && !ce,
                le = (0, X.use)(gt),
                ue = o?.asset_pointer ?? e,
                fe = (0, X.useCallback)(() => {
                    D != null && G.conversationImageEditButtonTapped(D), E?.()
                }, [D, E]),
                pe = (0, X.useCallback)(() => ke(N, void 0, {
                    title: h(c.getMaybeMessage(n(v.id), g))
                }), [N, v.id, g]),
                he = w(),
                _e = be(),
                ve = _e?.type === Ce.Image && _e.image.asset_pointer === e,
                [ye, W] = (0, X.useState)(!1),
                xe = ie?.hasPaidSubscription() ?? !1,
                we = !(V && !z) && !xe && (r || i),
                Te = x !== !1,
                Ee = S && C != null,
                De = N.formatMessage($.enter360World),
                K = (0, X.useCallback)(async ({
                    shouldDownloadWatermark: e = !0
                } = {}) => {
                    if (!t) return null;
                    let n = t,
                        a = e && i,
                        s = e && r && o?.metadata != null ? o.metadata.watermarked_asset_pointer : void 0;
                    if (s && o) try {
                        n = (await Se.fetch(j, {
                            asset: {
                                ...o,
                                asset_pointer: s
                            },
                            conversationId: A,
                            downloadIntent: !0
                        })).url, a = !0
                    } catch {} else if (p && o) try {
                        n = (await Se.fetch(j, {
                            asset: o,
                            conversationId: A,
                            downloadIntent: !0
                        })).url, a = !1
                    } catch {}
                    return {
                        downloadedWithWatermark: a,
                        urlToDownload: n
                    }
                }, [p, o, r, t, i, j, A]),
                q = (0, X.useCallback)(async ({
                    shouldDownloadWatermark: e = !0
                } = {}) => {
                    let t = await K({
                        shouldDownloadWatermark: e
                    });
                    t != null && (await ze({
                        url: t.urlToDownload,
                        fileName: pe(),
                        gifSource: L
                    }), G.download({
                        analyticsContext: R,
                        downloadedWithWatermark: t.downloadedWithWatermark
                    }))
                }, [R, pe, L, K]),
                Oe = (0, X.useCallback)(() => {
                    if (te.logEvent(`chatgpt_image_watermark_download_upgrade_click`, void 0, {
                            source: `overlay`
                        }), !_()) {
                        M({
                            fallbackScreenHint: `login`,
                            skipLoginModal: !1
                        });
                        return
                    }
                    let t = o ?? (e == null ? null : {
                        asset_pointer: e,
                        content_type: ne.ImageAssetPointer,
                        size_bytes: 0,
                        width: 0,
                        height: 0
                    });
                    t != null && pt({
                        asset: t,
                        conversationId: A
                    }), Ae({
                        navigate: P,
                        checkoutOriginProvenance: {
                            checkoutOriginProductExperience: ge.CHAT,
                            checkoutOriginDeliverySurface: `web`
                        },
                        openModalLocation: Ct
                    })
                }, [o, e, P, A]),
                je = N.formatMessage(I ? F.downloadLabel : p ? $.downloadFullSize : $.download),
                Me = t ? (0, Z.jsx)(b, {
                    label: N.formatMessage(p ? $.downloadTooltipFullSize : $.downloadTooltip),
                    children: (0, Z.jsx)(Q, {
                        icon: We,
                        variant: `imageGenUpdates`,
                        ariaLabel: je,
                        onClick: bt(() => {
                            q()
                        })
                    })
                }) : null,
                J = we && a({
                    openModalLocation: Ct
                }),
                Le = t && J ? (0, Z.jsxs)(me, {
                    side: `bottom`,
                    sideOffset: 10,
                    size: `auto`,
                    open: ye,
                    onOpenChange: W,
                    contentClassName: `pointer-events-auto z-11 min-w-fit origin-top-end text-token-text-primary`,
                    triggerButton: (0, Z.jsx)(Q, {
                        icon: We,
                        variant: `imageGenUpdates`,
                        ariaLabel: je,
                        onClick: e => {
                            e.stopPropagation()
                        }
                    }),
                    children: [(0, Z.jsx)(Y.Item, {
                        className: `py-2`,
                        children: (0, Z.jsxs)(`button`, {
                            type: `button`,
                            onClick: e => {
                                e.preventDefault(), e.stopPropagation(), q(), W(!1)
                            },
                            className: `row text-token-text-primary flex items-center gap-2`,
                            children: [(0, Z.jsx)(We, {}), (0, Z.jsx)(`span`, {
                                className: `font-semibold`,
                                children: (0, Z.jsx)(B, {
                                    ...F.downloadLabel
                                })
                            })]
                        })
                    }), (0, Z.jsx)(Y.Separator, {}), (0, Z.jsx)(Y.Item, {
                        className: `py-2`,
                        children: (0, Z.jsxs)(`button`, {
                            type: `button`,
                            onClick: e => {
                                e.preventDefault(), e.stopPropagation(), Oe(), W(!1)
                            },
                            className: `row text-token-text-primary flex items-center gap-2`,
                            children: [(0, Z.jsx)(We, {}), (0, Z.jsxs)(`div`, {
                                className: `flex flex-col items-start`,
                                children: [(0, Z.jsx)(`span`, {
                                    className: `font-semibold`,
                                    children: (0, Z.jsx)(B, {
                                        ...dt.downloadWithoutLogo
                                    })
                                }), (0, Z.jsx)(`span`, {
                                    className: `text-token-text-secondary`,
                                    children: (0, Z.jsx)(B, {
                                        ...dt.upgradePlan
                                    })
                                })]
                            })]
                        })
                    })]
                }) : null,
                Re = J ? Le : Me,
                Ve = U || Re != null,
                He = E && F.canEdit ? (0, Z.jsx)(Q, {
                    variant: `imageGenUpdates`,
                    onClick: bt(fe),
                    ariaLabel: N.formatMessage($.editImage),
                    children: (0, Z.jsx)(B, {
                        id: `imageGenActionOverlay.editButton`,
                        defaultMessage: `Edit`
                    })
                }) : null;
            return (0, Z.jsx)(Z.Fragment, {
                children: he ? !ve && (0, Z.jsx)(vt, {
                    rightAlign: !0,
                    fullWidth: !0,
                    children: (0, Z.jsx)(Q, {
                        icon: Ie,
                        ariaLabel: N.formatMessage(F.expandLabel)
                    })
                }) : (0, Z.jsx)(Z.Fragment, {
                    children: (0, Z.jsx)(yt, {
                        canShowShareButton: U,
                        bottomAlign: !0,
                        rightAlign: !0,
                        fullWidth: !0,
                        alwaysVisible: Te,
                        onOverlayVisible: Ee ? ee : void 0,
                        testId: `image-gen-overlay-actions`,
                        children: (0, Z.jsxs)(`div`, {
                            className: `flex w-full items-center justify-between`,
                            children: [(0, Z.jsxs)(`div`, {
                                className: `pointer-events-auto flex items-end gap-2`,
                                "data-testid": `image-gen-overlay-left-actions`,
                                children: [L && !V && !H && (0, Z.jsx)(st, {
                                    source: L,
                                    inline: !0
                                }), Ee ? (0, Z.jsx)(b, {
                                    label: De,
                                    children: (0, Z.jsx)(Q, {
                                        icon: Je,
                                        variant: `imageGenUpdates`,
                                        ariaLabel: De,
                                        onClick: bt(C),
                                        children: (0, Z.jsx)(`span`, {
                                            "aria-hidden": !0,
                                            className: `ms-1.5 pe-0.5`,
                                            children: 360
                                        })
                                    })
                                }) : null, V || H ? He : (0, Z.jsx)(wt, {
                                    conversation: v,
                                    fallback: He,
                                    messageId: g
                                }), y && !Ve && (0, Z.jsx)(ft, {
                                    isAnimated: I,
                                    onOpenChange: W,
                                    onDownload: () => {
                                        q()
                                    },
                                    onDownloadWithoutWatermark: J ? Oe : void 0,
                                    showWithoutWatermarkLabel: !r && !we,
                                    triggerClassName: `pointer-events-auto z-11 flex h-10 w-10 items-center justify-center rounded-xl bg-transparent hover:bg-token-icon-surface/10 focus:bg-token-icon-surface/10 focus-visible:bg-token-icon-surface/10`,
                                    iconClassName: `icon-lg fill-transparent text-white`,
                                    dropdownClassName: `pointer-events-auto z-11 min-w-fit origin-top-end text-token-text-primary`
                                })]
                            }), (0, Z.jsxs)(`div`, {
                                className: `pointer-events-auto flex gap-2`,
                                "data-testid": `image-gen-overlay-right-actions`,
                                children: [U && ue != null && le?.({
                                    conversation: v,
                                    assetPointer: ue,
                                    imageGenMessageId: g,
                                    shareFlowSource: O
                                }), (0, Z.jsx)(xt, {
                                    canShowShareButton: U,
                                    canPublishPromptShare: s,
                                    assetPointer: e,
                                    fullSizeImageAsset: o,
                                    conversation: v,
                                    messageId: g,
                                    shareSeriesImageCount: d,
                                    shareSeriesMessageSliceIds: f,
                                    fallback: Re,
                                    shareFlowSource: O
                                })]
                            })]
                        })
                    })
                })
            })
        }, $ = z({
            download: {
                id: `imageGenActionOverlay.download`,
                defaultMessage: `Download this image`
            },
            downloadFullSize: {
                id: `imageGenActionOverlay.downloadFullSize`,
                defaultMessage: `Download full size image`
            },
            downloadTooltip: {
                id: `0EYire`,
                defaultMessage: `Download`
            },
            downloadTooltipFullSize: {
                id: `imageGenActionOverlay.downloadTooltipFullSize`,
                defaultMessage: `Download full size`
            },
            editImage: {
                id: `imageGenActionOverlay.editImage`,
                defaultMessage: `Edit image`
            },
            enter360World: {
                id: `imageGenActionOverlay.enter360World`,
                defaultMessage: `Enter 360 world`
            }
        })
    })),
    Dt, Ot, kt = e((() => {
        Dt = `data:image/svg+xml;base64,PHN2ZwogIHdpZHRoPSIzNiIKICBoZWlnaHQ9IjM2IgogIHZpZXdCb3g9IjAgMCAzNiAzNiIKICBmaWxsPSJub25lIgogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKPgogIDxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF80NjY1XzIzMzApIj4KICAgIDxyZWN0IHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgZmlsbD0id2hpdGUiIC8+CiAgICA8cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIGZpbGw9IiMxRTFFMUUiIC8+CiAgICA8cmVjdCB4PSIxOCIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiBmaWxsPSJibGFjayIgLz4KICAgIDxyZWN0IHg9IjE4IiB5PSIxOCIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiBmaWxsPSIjMUUxRTFFIiAvPgogICAgPHJlY3QgeT0iMTgiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgZmlsbD0iYmxhY2siIC8+CiAgPC9nPgogIDxkZWZzPgogICAgPGNsaXBQYXRoIGlkPSJjbGlwMF80NjY1XzIzMzAiPgogICAgICA8cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9IndoaXRlIiAvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+Cjwvc3ZnPgo=`, Ot = `data:image/svg+xml;base64,PHN2ZwogIHdpZHRoPSIzNiIKICBoZWlnaHQ9IjM2IgogIHZpZXdCb3g9IjAgMCAzNiAzNiIKICBmaWxsPSJub25lIgogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKPgogIDxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF80NjY1XzIzMTkpIj4KICAgIDxyZWN0IHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgZmlsbD0id2hpdGUiIC8+CiAgICA8cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIGZpbGw9IiNFRkVGRjAiIC8+CiAgICA8cmVjdCB4PSIxOCIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiBmaWxsPSJ3aGl0ZSIgLz4KICAgIDxyZWN0IHg9IjE4IiB5PSIxOCIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiBmaWxsPSIjRUZFRkYwIiAvPgogICAgPHJlY3QgeT0iMTgiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgZmlsbD0id2hpdGUiIC8+CiAgPC9nPgogIDxkZWZzPgogICAgPGNsaXBQYXRoIGlkPSJjbGlwMF80NjY1XzIzMTkiPgogICAgICA8cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9IndoaXRlIiAvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+Cjwvc3ZnPgo=`
    }));
export {
    Et as a, Tt as i, Ot as n, kt as r, Dt as t
};
//# sourceMappingURL=ecab41d6-mhzwx84drktpvh8g.js.map