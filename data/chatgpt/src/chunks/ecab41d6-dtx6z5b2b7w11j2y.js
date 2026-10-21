const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/c2825ab1-ge9nw60jjkk86e4d.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-lxa3wniynbx9ka2a.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-kzsalymynzuddxee.js", "assets/30901919-i8ip8r0znvgcym38.js", "assets/c470f5ab-poh7ivjvb3j2jlfz.js", "assets/0e5afe53-dz59mkfveu52getp.js", "assets/conversation-small-bwtqiuwj.css", "assets/f5cccfb7-omfq28qsvhujhxcn.js", "assets/65f98121-ml09rjf5efbc83r7.js", "assets/0f8b28f8-p0zb0dt56h7w99g2.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $i as n,
    $o as r,
    Bnt as i,
    Da as a,
    Ea as o,
    HF as s,
    JJ as c,
    Met as l,
    Mz as u,
    P5 as d,
    Qi as f,
    R1 as p,
    Snt as m,
    Tet as h,
    UF as g,
    X0 as _,
    X5 as v,
    Xy as y,
    Y5 as b,
    Z0 as x,
    Z1 as S,
    Zy as C,
    _tt as w,
    aZ as T,
    as as E,
    att as ee,
    g8 as D,
    git as O,
    hit as k,
    i0 as te,
    jet as ne,
    jz as A,
    nY as j,
    qnt as M,
    r0 as N,
    rY as P,
    tZ as F,
    trt as I,
    wnt as L,
    z1 as re,
    znt as ie
} from "./4813494d-lxa3wniynbx9ka2a.js";
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
    $L as fe,
    BBn as pe,
    BL as me,
    Btt as W,
    Edn as he,
    F5 as ge,
    FR as _e,
    HUn as ve,
    I5 as ye,
    IHn as be,
    L7 as xe,
    LHn as G,
    Nl as Se,
    PR as K,
    Pl as Ce,
    QL as we,
    RHn as Te,
    Tdn as Ee,
    UUn as De,
    V7 as Oe,
    Vtt as ke,
    X8 as Ae,
    Y8 as q,
    YC as je,
    a5 as Me,
    c5 as Ne,
    drn as Pe,
    eR as Fe,
    ew as Ie,
    i5 as Le,
    n5 as Re,
    orn as J,
    r5 as ze,
    u5 as Be,
    zBn as Ve
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    Rm as He,
    bS as Ue,
    eb as Y,
    gb as We,
    lp as Ge,
    mb as Ke,
    oC as qe,
    sC as Je,
    tb as Ye,
    up as Xe,
    yS as Ze,
    zm as Qe
} from "./30901919-i8ip8r0znvgcym38.js";
import {
    aa as $e,
    ca as et,
    da as tt,
    fa as nt,
    ha as rt,
    oa as it,
    pa as at
} from "./8b34dbc2-ba6wt3zxvh7jce7p.js";
import {
    n as ot,
    t as st
} from "./429c9f5e-lp2rcy8xpavhw4bl.js";
import {
    n as ct,
    r as lt
} from "./1cfd0849-kbtvtdqywop3epfq.js";
import {
    n as ut,
    r as dt,
    t as ft
} from "./97fef780-hn1bj96bt59qpn6v.js";
import {
    n as pt,
    t as mt
} from "./ee0eeb85-hj2gmtkfkhj7r2i5.js";
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
        className: b(`pointer-events-none absolute z-2 overflow-hidden`, t ? `rounded-b-[inherit]` : `rounded-t-[inherit]`, e ? `end-0` : `start-0`, t ? `bottom-0` : `top-0`, n && `w-full`),
        children: [(0, Z.jsx)(`div`, {
            "data-testid": o,
            onTransitionEnd: l,
            className: b(t ? `bg-linear-to-b` : `bg-linear-to-t`, `from-transparent to-black/30`, `h-20 w-full transition-opacity duration-75 ease-out`, i ? `opacity-100` : `opacity-0 group-focus-within/imagegen-image:opacity-100 group-hover/imagegen-image:opacity-100 focus-within:opacity-100`)
        }), (0, Z.jsx)(`div`, {
            className: b(`absolute inset-0 flex`, c, `p-3`, t ? `items-end` : `items-start`, e ? `justify-end` : `justify-start`, r && `justify-between`),
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
        i = _e(),
        a = (0, X.useCallback)(() => {
            e && (r.current ||= (m.logEvent(`Share Post: Share Button Shown`, {
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
    conversation: a,
    messageId: o,
    shareSeriesImageCount: s,
    shareSeriesMessageSliceIds: c,
    fallback: l = null,
    shareFlowSource: u
}) {
    "use no forget";
    let [f, p] = (0, X.useState)(!1), [h, g] = (0, X.useState)(null), [_, v] = (0, X.useState)(null), y = (0, X.useRef)(!1), b = de(), x = r?.asset_pointer ?? n, S = ge({
        mimeType: r?.mime_type
    }), C = at({
        canPublishPromptShare: t,
        assetPointer: x,
        conversation: a,
        imageGenMessageId: o,
        shareFlowSource: u
    }), w = rt({
        assetPointer: x,
        conversation: a,
        imageGenMessageId: o,
        shareFlowSource: u
    }), T = (0, X.useMemo)(() => Array.from(new Set((c ?? []).filter(Boolean))), [c]), E = at({
        conversation: a,
        imageGenMessageIds: T,
        shareFlowSource: u
    }), ee = rt({
        conversation: a,
        imageGenMessageIds: T,
        shareFlowSource: u
    }), D = _e(), O = (s ?? 0) > 1 && T.length > 0, k = d(() => e ? nt() : !1), te = d(() => e && t && we()), ne = me(), j = () => {
        W.imageShared({
            analyticsContext: D,
            source: `image_gen_action_overlay`
        })
    }, M = (e = `media_generation`) => {
        m.logEventWithStatsig(`chatgpt_image_lightbox_share_current_image_selected`, `chatgpt_image_lightbox_share_current_image_selected`), m.logEventWithStatsig(`Share Post: Share Button Clicked`, `chatgpt_post_share_button_clicked`, {
            source: `image_gen_action_overlay`,
            attachment_type: e,
            message_id: o
        }), j()
    }, N = () => {
        m.logEventWithStatsig(`chatgpt_image_lightbox_share_all_images_selected`, `chatgpt_image_lightbox_share_all_images_selected`), m.logEventWithStatsig(`Share Post: Share Button Clicked`, `chatgpt_post_share_button_clicked`, {
            source: `image_gen_action_overlay`,
            attachment_type: `image_series_share`
        }), j()
    }, P = async (e, t, {
        keepDropdownOpen: n = !1
    } = {}) => {
        y.current = !0, n || g(null), v(null), p(!0);
        try {
            let n = await t();
            n ? (v(n), g(e), await n.autoCopyShareLink()) : g(null)
        } finally {
            p(!1), y.current = !1
        }
    }, F = () => {
        v(null), g(null)
    }, I = async e => {
        g(null), v(null), p(!0);
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
            p(!1)
        }
    }, L = async (e, {
        keepDropdownOpen: t = !1
    } = {}) => {
        if (e) {
            await P(`mini-current`, w, {
                keepDropdownOpen: t
            }), M();
            return
        }
        p(!0);
        try {
            await C()
        } finally {
            p(!1)
        }
        M()
    }, re = async (e, {
        keepDropdownOpen: t = !1
    } = {}) => {
        if (e) {
            await P(`mini-series`, ee, {
                keepDropdownOpen: t
            }), N();
            return
        }
        p(!0);
        try {
            await E()
        } finally {
            p(!1)
        }
        N()
    }, ie = async () => {
        M(`prompt`), p(!0);
        try {
            await C({
                shareType: q.PromptShare
            })
        } finally {
            p(!1)
        }
    };
    if (!e) return l;
    let R = f ? A : Ue,
        z = (0, Z.jsx)(Q, {
            icon: R,
            variant: `imageGenUpdates`,
            disabled: f,
            onClick: e => {
                e.stopPropagation()
            },
            ariaLabel: b.formatMessage(S.shareLabel)
        });
    return O || te ? (0, Z.jsx)(be, {
        open: h != null,
        side: h === "default" ? void 0 : `right`,
        contentAlign: h === "default" ? void 0 : `end`,
        sideOffset: 8,
        size: `auto`,
        contentClassName: h === "default" ? void 0 : ne.contentClassName,
        onOpenChange: e => {
            if (!e) {
                if (y.current) return;
                F();
                return
            }
            if (v(null), g(`default`), O) {
                let e = m.logStructuredEvent(`ChatgptImageLightboxButtonTapped`, {
                    button: `CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_SHARE`,
                    legacyStatsigEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`,
                    selectionState: `CHATGPT_IMAGEGEN_SELECTION_STATE_PENDING_SELECTION`,
                    imageSeriesCount: i(s)
                });
                m.logValueEventWithStatsig({
                    segmentEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`,
                    statsigEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`,
                    data: {
                        selection_state: `pending_selection`,
                        image_series_count: s
                    },
                    eventId: e
                })
            }
        },
        triggerButton: z,
        children: h === `mini-current` && _ ? (0, Z.jsx)(it, {
            imageShareScope: `single_image`,
            isBusinessWorkspace: ne.isBusinessWorkspace,
            isResolvingShareLink: f,
            onClose: F,
            shareActions: _
        }) : h === `mini-series` && _ ? (0, Z.jsx)(it, {
            imageShareScope: `image_series`,
            isBusinessWorkspace: ne.isBusinessWorkspace,
            isResolvingShareLink: f,
            onClose: F,
            shareActions: _
        }) : (0, Z.jsxs)(Z.Fragment, {
            children: [(0, Z.jsx)(G.Item, {
                icon: qe,
                onSelect: e => {
                    if (t && Fe()) {
                        L(!1);
                        return
                    }
                    if (k) {
                        I(w).finally(M);
                        return
                    }
                    let n = tt();
                    n && e.preventDefault(), L(n, {
                        keepDropdownOpen: n
                    })
                },
                children: b.formatMessage(S.shareSelectionLabel)
            }), O && (0, Z.jsx)(G.Item, {
                icon: He,
                onSelect: e => {
                    if (k) {
                        I(ee).finally(N);
                        return
                    }
                    let t = tt();
                    t && e.preventDefault(), re(t, {
                        keepDropdownOpen: t
                    })
                },
                children: b.formatMessage(lt.imageSeries, {
                    imageCount: s
                })
            }), te && (0, Z.jsx)(G.Item, {
                icon: Ge,
                onSelect: () => void ie(),
                children: b.formatMessage(lt.promptTemplate)
            })]
        })
    }) : h === `mini-current` && _ ? (0, Z.jsx)($e, {
        imageShareScope: `single_image`,
        isResolvingShareLink: f,
        triggerButton: z,
        onClose: F,
        shareActions: _
    }) : (0, Z.jsx)(Q, {
        icon: R,
        variant: `imageGenUpdates`,
        disabled: f,
        onClick: bt(async () => {
            if (t && Fe()) {
                await L(!1);
                return
            }
            if (k) {
                await I(w), j();
                return
            }
            if (tt()) {
                await P(`mini-current`, w), j();
                return
            }
            p(!0);
            try {
                await C()
            } finally {
                p(!1)
            }
            W.imageShared({
                analyticsContext: D,
                source: `image_gen_action_overlay`
            })
        }),
        ariaLabel: b.formatMessage(S.shareLabel)
    })
}
var St, X, Z, Ct, wt, Q, Tt, $, Et = e((() => {
        St = ue(), P(), T(), ot(), Be(), ye(), he(), w(), Te(), Xe(), Ye(), We(), Je(), Qe(), Ze(), C(), f(), ve(), Ce(), Oe(), je(), h(), J(), et(), fe(), E(), Ae(), s(), D(), u(), p(), N(), ct(), k(), L(), o(), pe(), I(), ie(), x(), le(), v(), X = t(se()), H(), V(), K(), ke(), _t(), Me(), ze(), ut(), mt(), Z = R(), U(), Ct = l.ImageGenWatermarkOverflowMenu, wt = _(() => ce(() => import(`./c2825ab1-ge9nw60jjkk86e4d.js`).then(e => e.ImageGenReferenceActions), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])), {
            loading: ({
                fallback: e
            }) => e,
            fallback: ({
                fallback: e
            }) => e
        }), Q = (0, X.forwardRef)(function(e, t) {
            "use forget";
            let n = (0, St.c)(28),
                r, i, a, o, s, c, l, u, d;
            n[0] === e ? (r = n[1], i = n[2], a = n[3], o = n[4], s = n[5], c = n[6], l = n[7], u = n[8], d = n[9]) : ({
                icon: r,
                children: o,
                className: s,
                disabled: c,
                onClick: l,
                ariaLabel: i,
                selected: u,
                variant: d,
                ...a
            } = e, n[0] = e, n[1] = r, n[2] = i, n[3] = a, n[4] = o, n[5] = s, n[6] = c, n[7] = l, n[8] = u, n[9] = d);
            let f = u !== void 0 && u,
                p = (d === void 0 ? `default` : d) === `imageGenUpdates`,
                m = o == null,
                h = p && m,
                g = h && `group`,
                _ = p ? m ? `h-10 w-10` : `h-10 gap-0 rounded-full bg-black/15 px-3 backdrop-blur-md hover:bg-black/30 focus:bg-black/30` : `gap-1 rounded-xl hover:bg-white/15 hover:backdrop-blur-md focus:bg-white/15 focus:backdrop-blur-md`,
                v = !p && (m ? `h-10 w-10` : `h-10 px-2`),
                y;
            n[10] !== s || n[11] !== g || n[12] !== _ || n[13] !== v ? (y = b(`pointer-events-auto z-11 flex items-center justify-center text-sm font-medium text-white`, g, _, v, s), n[10] = s, n[11] = g, n[12] = _, n[13] = v, n[14] = y) : y = n[14];
            let x;
            n[15] !== r || n[16] !== o || n[17] !== h ? (x = h ? (0, Z.jsx)(`span`, {
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
            }), n[15] = r, n[16] = o, n[17] = h, n[18] = x) : x = n[18];
            let S;
            return n[19] !== i || n[20] !== a || n[21] !== c || n[22] !== l || n[23] !== t || n[24] !== f || n[25] !== y || n[26] !== x ? (S = (0, Z.jsx)(`button`, {
                ref: t,
                type: `button`,
                "aria-pressed": f,
                className: y,
                onClick: l,
                disabled: c,
                "aria-label": i,
                ...a,
                children: x
            }), n[19] = i, n[20] = a, n[21] = c, n[22] = l, n[23] = t, n[24] = f, n[25] = y, n[26] = x, n[27] = S) : S = n[27], S
        }), Tt = ({
            imageAssetPointer: e,
            imageUrl: t,
            hasWatermarkedDownload: i = !1,
            isRenderedImageWatermarked: o = !1,
            fullSizeImageAsset: s,
            canPublishPromptShare: l = !0,
            shareSeriesImageCount: u,
            shareSeriesMessageSliceIds: f,
            downloadFullImage: p = !1,
            messageId: m,
            conversation: h,
            shouldShowOverflow: _ = !1,
            alwaysVisible: v,
            shouldShow360Entrypoint: b = !1,
            on360EntrypointClick: x,
            on360EntrypointVisible: C,
            onEditClick: w,
            editButtonAnalytics: T,
            shareFlowSource: E = r.CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION
        }) => {
            "use no forget";
            let D = d(h.serverId$),
                k = ae(),
                A = de(),
                N = oe(),
                P = ge({
                    mimeType: s?.mime_type
                }),
                {
                    isAnimated: I
                } = P,
                L = Ne(s, D, m),
                ie = S(),
                R = _e(),
                z = O(),
                V = a(),
                H = g(),
                se = Ie() && z && !V && !H,
                ce = d(re),
                U = se && !ce,
                le = (0, X.use)(gt),
                ue = s?.asset_pointer ?? e,
                fe = (0, X.useCallback)(() => {
                    T != null && W.conversationImageEditButtonTapped(T), w?.()
                }, [T, w]),
                pe = (0, X.useCallback)(() => Re(A, void 0, {
                    title: F(c.getMaybeMessage(j(h.id), m))
                }), [A, h.id, m]),
                me = n(),
                he = De(),
                ve = he?.type === Se.Image && he.image.asset_pointer === e,
                [ye, K] = (0, X.useState)(!1),
                Ce = ie?.hasPaidSubscription() ?? !1,
                we = !(V && !z) && !Ce && (i || o),
                Te = v !== !1,
                Oe = b && x != null,
                ke = A.formatMessage($.enter360World),
                Ae = (0, X.useCallback)(async ({
                    shouldDownloadWatermark: e = !0
                } = {}) => {
                    if (!t) return null;
                    let n = t,
                        r = e && o,
                        a = e && i && s?.metadata != null ? s.metadata.watermarked_asset_pointer : void 0;
                    if (a && s) try {
                        n = (await Ve.fetch(k, {
                            asset: {
                                ...s,
                                asset_pointer: a
                            },
                            conversationId: D,
                            downloadIntent: !0
                        })).url, r = !0
                    } catch {} else if (p && s) try {
                        n = (await Ve.fetch(k, {
                            asset: s,
                            conversationId: D,
                            downloadIntent: !0
                        })).url, r = !1
                    } catch {}
                    return {
                        downloadedWithWatermark: r,
                        urlToDownload: n
                    }
                }, [p, s, i, t, o, k, D]),
                q = (0, X.useCallback)(async ({
                    shouldDownloadWatermark: e = !0
                } = {}) => {
                    let t = await Ae({
                        shouldDownloadWatermark: e
                    });
                    t != null && (await Le({
                        url: t.urlToDownload,
                        fileName: pe(),
                        gifSource: L
                    }), W.download({
                        analyticsContext: R,
                        downloadedWithWatermark: t.downloadedWithWatermark
                    }))
                }, [R, pe, L, Ae]),
                je = (0, X.useCallback)(() => {
                    if (M.logEvent(`chatgpt_image_watermark_download_upgrade_click`, void 0, {
                            source: `overlay`
                        }), !O()) {
                        te({
                            fallbackScreenHint: `login`,
                            skipLoginModal: !1
                        });
                        return
                    }
                    let t = s ?? (e == null ? null : {
                        asset_pointer: e,
                        content_type: ee.ImageAssetPointer,
                        size_bytes: 0,
                        width: 0,
                        height: 0
                    });
                    t != null && pt({
                        asset: t,
                        conversationId: D
                    }), Pe({
                        navigate: N,
                        checkoutOriginProvenance: {
                            checkoutOriginProductExperience: Ee.CHAT,
                            checkoutOriginDeliverySurface: `web`
                        },
                        openModalLocation: Ct
                    })
                }, [s, e, N, D]),
                Me = A.formatMessage(I ? P.downloadLabel : p ? $.downloadFullSize : $.download),
                Fe = t ? (0, Z.jsx)(y, {
                    label: A.formatMessage(p ? $.downloadTooltipFullSize : $.downloadTooltip),
                    children: (0, Z.jsx)(Q, {
                        icon: Y,
                        variant: `imageGenUpdates`,
                        ariaLabel: Me,
                        onClick: bt(() => {
                            q()
                        })
                    })
                }) : null,
                J = we && ne({
                    openModalLocation: Ct
                }),
                ze = t && J ? (0, Z.jsxs)(be, {
                    side: `bottom`,
                    sideOffset: 10,
                    size: `auto`,
                    open: ye,
                    onOpenChange: K,
                    contentClassName: `pointer-events-auto z-11 min-w-fit origin-top-end text-token-text-primary`,
                    triggerButton: (0, Z.jsx)(Q, {
                        icon: Y,
                        variant: `imageGenUpdates`,
                        ariaLabel: Me,
                        onClick: e => {
                            e.stopPropagation()
                        }
                    }),
                    children: [(0, Z.jsx)(G.Item, {
                        className: `py-2`,
                        children: (0, Z.jsxs)(`button`, {
                            type: `button`,
                            onClick: e => {
                                e.preventDefault(), e.stopPropagation(), q(), K(!1)
                            },
                            className: `row text-token-text-primary flex items-center gap-2`,
                            children: [(0, Z.jsx)(Y, {}), (0, Z.jsx)(`span`, {
                                className: `font-semibold`,
                                children: (0, Z.jsx)(B, {
                                    ...P.downloadLabel
                                })
                            })]
                        })
                    }), (0, Z.jsx)(G.Separator, {}), (0, Z.jsx)(G.Item, {
                        className: `py-2`,
                        children: (0, Z.jsxs)(`button`, {
                            type: `button`,
                            onClick: e => {
                                e.preventDefault(), e.stopPropagation(), je(), K(!1)
                            },
                            className: `row text-token-text-primary flex items-center gap-2`,
                            children: [(0, Z.jsx)(Y, {}), (0, Z.jsxs)(`div`, {
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
                Be = J ? ze : Fe,
                He = U || Be != null,
                Ue = w && P.canEdit ? (0, Z.jsx)(Q, {
                    variant: `imageGenUpdates`,
                    onClick: bt(fe),
                    ariaLabel: A.formatMessage($.editImage),
                    children: (0, Z.jsx)(B, {
                        id: `imageGenActionOverlay.editButton`,
                        defaultMessage: `Edit`
                    })
                }) : null;
            return (0, Z.jsx)(Z.Fragment, {
                children: me ? !ve && (0, Z.jsx)(vt, {
                    rightAlign: !0,
                    fullWidth: !0,
                    children: (0, Z.jsx)(Q, {
                        icon: xe,
                        ariaLabel: A.formatMessage(P.expandLabel)
                    })
                }) : (0, Z.jsx)(Z.Fragment, {
                    children: (0, Z.jsx)(yt, {
                        canShowShareButton: U,
                        bottomAlign: !0,
                        rightAlign: !0,
                        fullWidth: !0,
                        alwaysVisible: Te,
                        onOverlayVisible: Oe ? C : void 0,
                        testId: `image-gen-overlay-actions`,
                        children: (0, Z.jsxs)(`div`, {
                            className: `flex w-full items-center justify-between`,
                            children: [(0, Z.jsxs)(`div`, {
                                className: `pointer-events-auto flex items-end gap-2`,
                                "data-testid": `image-gen-overlay-left-actions`,
                                children: [L && !V && !H && (0, Z.jsx)(st, {
                                    source: L,
                                    inline: !0
                                }), Oe ? (0, Z.jsx)(y, {
                                    label: ke,
                                    children: (0, Z.jsx)(Q, {
                                        icon: Ke,
                                        variant: `imageGenUpdates`,
                                        ariaLabel: ke,
                                        onClick: bt(x),
                                        children: (0, Z.jsx)(`span`, {
                                            "aria-hidden": !0,
                                            className: `ms-1.5 pe-0.5`,
                                            children: 360
                                        })
                                    })
                                }) : null, V || H ? Ue : (0, Z.jsx)(wt, {
                                    conversation: h,
                                    fallback: Ue,
                                    messageId: m
                                }), _ && !He && (0, Z.jsx)(ft, {
                                    isAnimated: I,
                                    onOpenChange: K,
                                    onDownload: () => {
                                        q()
                                    },
                                    onDownloadWithoutWatermark: J ? je : void 0,
                                    showWithoutWatermarkLabel: !i && !we,
                                    triggerClassName: `pointer-events-auto z-11 flex h-10 w-10 items-center justify-center rounded-xl bg-transparent hover:bg-token-icon-surface/10 focus:bg-token-icon-surface/10 focus-visible:bg-token-icon-surface/10`,
                                    iconClassName: `icon-lg fill-transparent text-white`,
                                    dropdownClassName: `pointer-events-auto z-11 min-w-fit origin-top-end text-token-text-primary`
                                })]
                            }), (0, Z.jsxs)(`div`, {
                                className: `pointer-events-auto flex gap-2`,
                                "data-testid": `image-gen-overlay-right-actions`,
                                children: [U && ue != null && le?.({
                                    conversation: h,
                                    assetPointer: ue,
                                    imageGenMessageId: m,
                                    shareFlowSource: E
                                }), (0, Z.jsx)(xt, {
                                    canShowShareButton: U,
                                    canPublishPromptShare: l,
                                    assetPointer: e,
                                    fullSizeImageAsset: s,
                                    conversation: h,
                                    messageId: m,
                                    shareSeriesImageCount: u,
                                    shareSeriesMessageSliceIds: f,
                                    fallback: Be,
                                    shareFlowSource: E
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
//# sourceMappingURL=ecab41d6-dtx6z5b2b7w11j2y.js.map