const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/c2825ab1-nry45a7taff4dtbb.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-dfpv67hlp00pbohr.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-cy5f8pl0g26s86so.js", "assets/30901919-7dzdc1ou0jtwkwpt.js", "assets/c470f5ab-d4g7lc53n1e1ao7o.js", "assets/0e5afe53-o2mcfq1ky1uaktz5.js", "assets/conversation-small-j5v9ogf2.css", "assets/f5cccfb7-omfq28qsvhujhxcn.js", "assets/65f98121-n773r5fluvmnyw5h.js", "assets/0f8b28f8-gc7f3x1s30kgjde6.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $i as n,
    $o as r,
    Aet as i,
    Az as a,
    Da as o,
    Ea as s,
    Fnt as c,
    HF as l,
    Hnt as u,
    J5 as d,
    L1 as f,
    N5 as p,
    Pnt as m,
    Qi as h,
    R1 as g,
    VF as _,
    X0 as v,
    X1 as y,
    Xnt as b,
    Xy as x,
    Y0 as S,
    Y5 as C,
    Zy as w,
    _nt as T,
    as as E,
    dit as ee,
    eZ as te,
    gtt as D,
    h8 as O,
    iZ as k,
    itt as ne,
    jet as A,
    jz as j,
    n0 as M,
    nY as N,
    qJ as P,
    r0 as F,
    tY as I,
    uit as L,
    wet as R,
    ynt as re
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as z,
    Ln as B,
    N as ie,
    Nn as V,
    Nt as ae,
    Q as H,
    Rn as U,
    Vn as oe,
    cn as se,
    ln as W,
    s as ce,
    wn as le,
    zn as ue
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $8 as de,
    $C as fe,
    Cdn as pe,
    FBn as me,
    IBn as he,
    JC as ge,
    K8 as _e,
    LL as ve,
    Ltt as G,
    M5 as ye,
    MHn as be,
    MR as xe,
    Ml as Se,
    N5 as Ce,
    NHn as K,
    Nl as q,
    P7 as we,
    PHn as Te,
    R7 as Ee,
    RUn as De,
    Rtt as Oe,
    Sdn as ke,
    XL as Ae,
    YL as je,
    ZL as J,
    a5 as Me,
    crn as Ne,
    e5 as Pe,
    jR as Fe,
    n5 as Ie,
    q8 as Y,
    rrn as Le,
    s5 as Re,
    t5 as ze,
    zUn as Be
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Rm as Ve,
    bS as He,
    eb as Ue,
    gb as We,
    lp as Ge,
    mb as Ke,
    oC as qe,
    sC as Je,
    tb as Ye,
    up as Xe,
    yS as Ze,
    zm as Qe
} from "./30901919-7dzdc1ou0jtwkwpt.js";
import {
    aa as $e,
    ca as et,
    da as tt,
    fa as nt,
    ha as rt,
    oa as it,
    pa as at
} from "./8b34dbc2-k1zgxrtsww83602u.js";
import {
    n as ot,
    t as st
} from "./429c9f5e-ebprh0kerza3bl1v.js";
import {
    n as ct,
    r as lt
} from "./1cfd0849-kdpo1agyyui6hejc.js";
import {
    n as ut,
    r as dt,
    t as ft
} from "./97fef780-dce3c95gl1j00guf.js";
import {
    n as pt,
    t as mt
} from "./ee0eeb85-ou6pcfcs5ah597oz.js";
var ht, gt, _t = e((() => {
    ht = t(oe()), gt = (0, ht.createContext)(null)
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
        i = xe(),
        a = (0, X.useCallback)(() => {
            e && (r.current ||= (T.logEvent(`Share Post: Share Button Shown`, {
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
    messageId: o,
    shareSeriesImageCount: s,
    shareSeriesMessageSliceIds: l,
    fallback: u = null,
    shareFlowSource: d
}) {
    "use no forget";
    let [f, m] = (0, X.useState)(!1), [h, g] = (0, X.useState)(null), [_, v] = (0, X.useState)(null), y = (0, X.useRef)(!1), b = ue(), x = r?.asset_pointer ?? n, S = ye({
        mimeType: r?.mime_type
    }), C = at({
        canPublishPromptShare: t,
        assetPointer: x,
        conversation: i,
        imageGenMessageId: o,
        shareFlowSource: d
    }), w = rt({
        assetPointer: x,
        conversation: i,
        imageGenMessageId: o,
        shareFlowSource: d
    }), E = (0, X.useMemo)(() => Array.from(new Set((l ?? []).filter(Boolean))), [l]), ee = at({
        conversation: i,
        imageGenMessageIds: E,
        shareFlowSource: d
    }), te = rt({
        conversation: i,
        imageGenMessageIds: E,
        shareFlowSource: d
    }), D = xe(), O = (s ?? 0) > 1 && E.length > 0, k = p(() => e ? nt() : !1), ne = p(() => e && t && je()), A = ve(), j = () => {
        G.imageShared({
            analyticsContext: D,
            source: `image_gen_action_overlay`
        })
    }, M = (e = `media_generation`) => {
        T.logEventWithStatsig(`chatgpt_image_lightbox_share_current_image_selected`, `chatgpt_image_lightbox_share_current_image_selected`), T.logEventWithStatsig(`Share Post: Share Button Clicked`, `chatgpt_post_share_button_clicked`, {
            source: `image_gen_action_overlay`,
            attachment_type: e,
            message_id: o
        }), j()
    }, N = () => {
        T.logEventWithStatsig(`chatgpt_image_lightbox_share_all_images_selected`, `chatgpt_image_lightbox_share_all_images_selected`), T.logEventWithStatsig(`Share Post: Share Button Clicked`, `chatgpt_post_share_button_clicked`, {
            source: `image_gen_action_overlay`,
            attachment_type: `image_series_share`
        }), j()
    }, P = async (e, t, {
        keepDropdownOpen: n = !1
    } = {}) => {
        y.current = !0, n || g(null), v(null), m(!0);
        try {
            let n = await t();
            n ? (v(n), g(e), await n.autoCopyShareLink()) : g(null)
        } finally {
            m(!1), y.current = !1
        }
    }, F = () => {
        v(null), g(null)
    }, I = async e => {
        g(null), v(null), m(!0);
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
            m(!1)
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
        m(!0);
        try {
            await C()
        } finally {
            m(!1)
        }
        M()
    }, R = async (e, {
        keepDropdownOpen: t = !1
    } = {}) => {
        if (e) {
            await P(`mini-series`, te, {
                keepDropdownOpen: t
            }), N();
            return
        }
        m(!0);
        try {
            await ee()
        } finally {
            m(!1)
        }
        N()
    }, re = async () => {
        M(`prompt`), m(!0);
        try {
            await C({
                shareType: _e.PromptShare
            })
        } finally {
            m(!1)
        }
    };
    if (!e) return u;
    let z = f ? a : He,
        B = (0, Z.jsx)(Q, {
            icon: z,
            variant: `imageGenUpdates`,
            disabled: f,
            onClick: e => {
                e.stopPropagation()
            },
            ariaLabel: b.formatMessage(S.shareLabel)
        });
    return O || ne ? (0, Z.jsx)(be, {
        open: h != null,
        side: h === "default" ? void 0 : `right`,
        contentAlign: h === "default" ? void 0 : `end`,
        sideOffset: 8,
        size: `auto`,
        contentClassName: h === "default" ? void 0 : A.contentClassName,
        onOpenChange: e => {
            if (!e) {
                if (y.current) return;
                F();
                return
            }
            if (v(null), g(`default`), O) {
                let e = T.logStructuredEvent(`ChatgptImageLightboxButtonTapped`, {
                    button: `CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_SHARE`,
                    legacyStatsigEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`,
                    selectionState: `CHATGPT_IMAGEGEN_SELECTION_STATE_PENDING_SELECTION`,
                    imageSeriesCount: c(s)
                });
                T.logValueEventWithStatsig({
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
        triggerButton: B,
        children: h === `mini-current` && _ ? (0, Z.jsx)(it, {
            imageShareScope: `single_image`,
            isBusinessWorkspace: A.isBusinessWorkspace,
            isResolvingShareLink: f,
            onClose: F,
            shareActions: _
        }) : h === `mini-series` && _ ? (0, Z.jsx)(it, {
            imageShareScope: `image_series`,
            isBusinessWorkspace: A.isBusinessWorkspace,
            isResolvingShareLink: f,
            onClose: F,
            shareActions: _
        }) : (0, Z.jsxs)(Z.Fragment, {
            children: [(0, Z.jsx)(K.Item, {
                icon: qe,
                onSelect: e => {
                    if (t && J()) {
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
            }), O && (0, Z.jsx)(K.Item, {
                icon: Ve,
                onSelect: e => {
                    if (k) {
                        I(te).finally(N);
                        return
                    }
                    let t = tt();
                    t && e.preventDefault(), R(t, {
                        keepDropdownOpen: t
                    })
                },
                children: b.formatMessage(lt.imageSeries, {
                    imageCount: s
                })
            }), ne && (0, Z.jsx)(K.Item, {
                icon: Ge,
                onSelect: () => void re(),
                children: b.formatMessage(lt.promptTemplate)
            })]
        })
    }) : h === `mini-current` && _ ? (0, Z.jsx)($e, {
        imageShareScope: `single_image`,
        isResolvingShareLink: f,
        triggerButton: B,
        onClose: F,
        shareActions: _
    }) : (0, Z.jsx)(Q, {
        icon: z,
        variant: `imageGenUpdates`,
        disabled: f,
        onClick: bt(async () => {
            if (t && J()) {
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
            m(!0);
            try {
                await C()
            } finally {
                m(!1)
            }
            G.imageShared({
                analyticsContext: D,
                source: `image_gen_action_overlay`
            })
        }),
        ariaLabel: b.formatMessage(S.shareLabel)
    })
}
var St, X, Z, Ct, wt, Q, Tt, $, Et = e((() => {
        St = le(), N(), k(), ot(), Re(), Ce(), pe(), D(), Te(), Xe(), Ye(), We(), Je(), Qe(), Ze(), w(), h(), De(), q(), Ee(), ge(), R(), Le(), et(), Ae(), E(), Y(), _(), O(), j(), f(), M(), ct(), L(), re(), s(), he(), b(), m(), v(), ce(), C(), X = t(oe()), U(), H(), Fe(), Oe(), _t(), Ie(), Pe(), ut(), mt(), Z = z(), W(), Ct = A.ImageGenWatermarkOverflowMenu, wt = S(() => se(() => import(`./c2825ab1-nry45a7taff4dtbb.js`).then(e => e.ImageGenReferenceActions), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])), {
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
            hasWatermarkedDownload: a = !1,
            isRenderedImageWatermarked: s = !1,
            fullSizeImageAsset: c,
            canPublishPromptShare: d = !0,
            shareSeriesImageCount: f,
            shareSeriesMessageSliceIds: m,
            downloadFullImage: h = !1,
            messageId: _,
            conversation: v,
            shouldShowOverflow: b = !1,
            alwaysVisible: S,
            shouldShow360Entrypoint: C = !1,
            on360EntrypointClick: w,
            on360EntrypointVisible: T,
            onEditClick: E,
            editButtonAnalytics: D,
            shareFlowSource: O = r.CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION
        }) => {
            "use no forget";
            let k = p(v.serverId$),
                A = ie(),
                j = ue(),
                M = ae(),
                N = ye({
                    mimeType: c?.mime_type
                }),
                {
                    isAnimated: L
                } = N,
                R = Me(c, k, _),
                re = y(),
                z = xe(),
                B = ee(),
                H = o(),
                U = l(),
                oe = fe() && B && !H && !U,
                se = p(g),
                W = oe && !se,
                ce = (0, X.use)(gt),
                le = c?.asset_pointer ?? e,
                pe = (0, X.useCallback)(() => {
                    D != null && G.conversationImageEditButtonTapped(D), E?.()
                }, [D, E]),
                he = (0, X.useCallback)(() => de(j, void 0, {
                    title: te(P.getMaybeMessage(I(v.id), _))
                }), [j, v.id, _]),
                ge = n(),
                _e = Be(),
                ve = _e?.type === Se.Image && _e.image.asset_pointer === e,
                [Ce, q] = (0, X.useState)(!1),
                Te = re?.hasPaidSubscription() ?? !1,
                Ee = !(H && !B) && !Te && (a || s),
                De = S !== !1,
                Oe = C && w != null,
                Ae = j.formatMessage($.enter360World),
                je = (0, X.useCallback)(async ({
                    shouldDownloadWatermark: e = !0
                } = {}) => {
                    if (!t) return null;
                    let n = t,
                        r = e && s,
                        i = e && a && c?.metadata != null ? c.metadata.watermarked_asset_pointer : void 0;
                    if (i && c) try {
                        n = (await me.fetch(A, {
                            asset: {
                                ...c,
                                asset_pointer: i
                            },
                            conversationId: k,
                            downloadIntent: !0
                        })).url, r = !0
                    } catch {} else if (h && c) try {
                        n = (await me.fetch(A, {
                            asset: c,
                            conversationId: k,
                            downloadIntent: !0
                        })).url, r = !1
                    } catch {}
                    return {
                        downloadedWithWatermark: r,
                        urlToDownload: n
                    }
                }, [h, c, a, t, s, A, k]),
                J = (0, X.useCallback)(async ({
                    shouldDownloadWatermark: e = !0
                } = {}) => {
                    let t = await je({
                        shouldDownloadWatermark: e
                    });
                    t != null && (await ze({
                        url: t.urlToDownload,
                        fileName: he(),
                        gifSource: R
                    }), G.download({
                        analyticsContext: z,
                        downloadedWithWatermark: t.downloadedWithWatermark
                    }))
                }, [z, he, R, je]),
                Pe = (0, X.useCallback)(() => {
                    if (u.logEvent(`chatgpt_image_watermark_download_upgrade_click`, void 0, {
                            source: `overlay`
                        }), !ee()) {
                        F({
                            fallbackScreenHint: `login`,
                            skipLoginModal: !1
                        });
                        return
                    }
                    let t = c ?? (e == null ? null : {
                        asset_pointer: e,
                        content_type: ne.ImageAssetPointer,
                        size_bytes: 0,
                        width: 0,
                        height: 0
                    });
                    t != null && pt({
                        asset: t,
                        conversationId: k
                    }), Ne({
                        navigate: M,
                        checkoutOriginProvenance: {
                            checkoutOriginProductExperience: ke.CHAT,
                            checkoutOriginDeliverySurface: `web`
                        },
                        openModalLocation: Ct
                    })
                }, [c, e, M, k]),
                Fe = j.formatMessage(L ? N.downloadLabel : h ? $.downloadFullSize : $.download),
                Ie = t ? (0, Z.jsx)(x, {
                    label: j.formatMessage(h ? $.downloadTooltipFullSize : $.downloadTooltip),
                    children: (0, Z.jsx)(Q, {
                        icon: Ue,
                        variant: `imageGenUpdates`,
                        ariaLabel: Fe,
                        onClick: bt(() => {
                            J()
                        })
                    })
                }) : null,
                Y = Ee && i({
                    openModalLocation: Ct
                }),
                Le = t && Y ? (0, Z.jsxs)(be, {
                    side: `bottom`,
                    sideOffset: 10,
                    size: `auto`,
                    open: Ce,
                    onOpenChange: q,
                    contentClassName: `pointer-events-auto z-11 min-w-fit origin-top-end text-token-text-primary`,
                    triggerButton: (0, Z.jsx)(Q, {
                        icon: Ue,
                        variant: `imageGenUpdates`,
                        ariaLabel: Fe,
                        onClick: e => {
                            e.stopPropagation()
                        }
                    }),
                    children: [(0, Z.jsx)(K.Item, {
                        className: `py-2`,
                        children: (0, Z.jsxs)(`button`, {
                            type: `button`,
                            onClick: e => {
                                e.preventDefault(), e.stopPropagation(), J(), q(!1)
                            },
                            className: `row text-token-text-primary flex items-center gap-2`,
                            children: [(0, Z.jsx)(Ue, {}), (0, Z.jsx)(`span`, {
                                className: `font-semibold`,
                                children: (0, Z.jsx)(V, {
                                    ...N.downloadLabel
                                })
                            })]
                        })
                    }), (0, Z.jsx)(K.Separator, {}), (0, Z.jsx)(K.Item, {
                        className: `py-2`,
                        children: (0, Z.jsxs)(`button`, {
                            type: `button`,
                            onClick: e => {
                                e.preventDefault(), e.stopPropagation(), Pe(), q(!1)
                            },
                            className: `row text-token-text-primary flex items-center gap-2`,
                            children: [(0, Z.jsx)(Ue, {}), (0, Z.jsxs)(`div`, {
                                className: `flex flex-col items-start`,
                                children: [(0, Z.jsx)(`span`, {
                                    className: `font-semibold`,
                                    children: (0, Z.jsx)(V, {
                                        ...dt.downloadWithoutLogo
                                    })
                                }), (0, Z.jsx)(`span`, {
                                    className: `text-token-text-secondary`,
                                    children: (0, Z.jsx)(V, {
                                        ...dt.upgradePlan
                                    })
                                })]
                            })]
                        })
                    })]
                }) : null,
                Re = Y ? Le : Ie,
                Ve = W || Re != null,
                He = E && N.canEdit ? (0, Z.jsx)(Q, {
                    variant: `imageGenUpdates`,
                    onClick: bt(pe),
                    ariaLabel: j.formatMessage($.editImage),
                    children: (0, Z.jsx)(V, {
                        id: `imageGenActionOverlay.editButton`,
                        defaultMessage: `Edit`
                    })
                }) : null;
            return (0, Z.jsx)(Z.Fragment, {
                children: ge ? !ve && (0, Z.jsx)(vt, {
                    rightAlign: !0,
                    fullWidth: !0,
                    children: (0, Z.jsx)(Q, {
                        icon: we,
                        ariaLabel: j.formatMessage(N.expandLabel)
                    })
                }) : (0, Z.jsx)(Z.Fragment, {
                    children: (0, Z.jsx)(yt, {
                        canShowShareButton: W,
                        bottomAlign: !0,
                        rightAlign: !0,
                        fullWidth: !0,
                        alwaysVisible: De,
                        onOverlayVisible: Oe ? T : void 0,
                        testId: `image-gen-overlay-actions`,
                        children: (0, Z.jsxs)(`div`, {
                            className: `flex w-full items-center justify-between`,
                            children: [(0, Z.jsxs)(`div`, {
                                className: `pointer-events-auto flex items-end gap-2`,
                                "data-testid": `image-gen-overlay-left-actions`,
                                children: [R && !H && !U && (0, Z.jsx)(st, {
                                    source: R,
                                    inline: !0
                                }), Oe ? (0, Z.jsx)(x, {
                                    label: Ae,
                                    children: (0, Z.jsx)(Q, {
                                        icon: Ke,
                                        variant: `imageGenUpdates`,
                                        ariaLabel: Ae,
                                        onClick: bt(w),
                                        children: (0, Z.jsx)(`span`, {
                                            "aria-hidden": !0,
                                            className: `ms-1.5 pe-0.5`,
                                            children: 360
                                        })
                                    })
                                }) : null, H || U ? He : (0, Z.jsx)(wt, {
                                    conversation: v,
                                    fallback: He,
                                    messageId: _
                                }), b && !Ve && (0, Z.jsx)(ft, {
                                    isAnimated: L,
                                    onOpenChange: q,
                                    onDownload: () => {
                                        J()
                                    },
                                    onDownloadWithoutWatermark: Y ? Pe : void 0,
                                    showWithoutWatermarkLabel: !a && !Ee,
                                    triggerClassName: `pointer-events-auto z-11 flex h-10 w-10 items-center justify-center rounded-xl bg-transparent hover:bg-token-icon-surface/10 focus:bg-token-icon-surface/10 focus-visible:bg-token-icon-surface/10`,
                                    iconClassName: `icon-lg fill-transparent text-white`,
                                    dropdownClassName: `pointer-events-auto z-11 min-w-fit origin-top-end text-token-text-primary`
                                })]
                            }), (0, Z.jsxs)(`div`, {
                                className: `pointer-events-auto flex gap-2`,
                                "data-testid": `image-gen-overlay-right-actions`,
                                children: [W && le != null && ce?.({
                                    conversation: v,
                                    assetPointer: le,
                                    imageGenMessageId: _,
                                    shareFlowSource: O
                                }), (0, Z.jsx)(xt, {
                                    canShowShareButton: W,
                                    canPublishPromptShare: d,
                                    assetPointer: e,
                                    fullSizeImageAsset: c,
                                    conversation: v,
                                    messageId: _,
                                    shareSeriesImageCount: f,
                                    shareSeriesMessageSliceIds: m,
                                    fallback: Re,
                                    shareFlowSource: O
                                })]
                            })]
                        })
                    })
                })
            })
        }, $ = B({
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
//# sourceMappingURL=ecab41d6-ota3eb54go5a3928.js.map