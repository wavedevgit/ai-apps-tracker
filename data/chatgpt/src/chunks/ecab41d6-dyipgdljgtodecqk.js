const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/c2825ab1-5cdtfizwtto37jfl.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-qsuygr73qjc6rh65.js", "assets/2340486e-komxp8tzs51ny4jj.js", "assets/root-lelxp0l2.css", "assets/conversation-small-cawdu7il3ha6y70c.js", "assets/30901919-jory365vq6ym5crx.js", "assets/c470f5ab-in0lllrdrzeo67gs.js", "assets/0e5afe53-f9gmgfmgrr83ziw3.js", "assets/conversation-small-czggvj2v.css", "assets/f5cccfb7-f2qxapfkg3le0yt6.js", "assets/65f98121-ee8hs4jh149zzem6.js", "assets/0f8b28f8-j8ln3bigusw26ixg.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $i as n,
    Az as r,
    Bnt as i,
    Da as a,
    Ea as o,
    HF as s,
    I1 as c,
    J0 as l,
    J5 as u,
    Jnt as d,
    L1 as f,
    M5 as p,
    Mnt as m,
    Nnt as h,
    Oet as g,
    Qi as _,
    Qo as v,
    Set as y,
    VF as b,
    Xy as x,
    Y0 as S,
    Y1 as C,
    Yy as w,
    _nt as T,
    cit as E,
    eZ as ee,
    hnt as D,
    iZ as O,
    is as k,
    jz as A,
    ket as j,
    lit as M,
    m8 as N,
    mtt as P,
    n0 as te,
    nY as F,
    ntt as I,
    q5 as L,
    qJ as R,
    t0 as ne,
    tY as re
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    $ as z,
    Bn as ie,
    Hn as B,
    N as ae,
    Pn as V,
    Pt as oe,
    Rn as H,
    Tn as se,
    Vn as ce,
    ln as le,
    s as U,
    un as ue,
    zn as de
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    $8 as fe,
    $C as pe,
    BBn as me,
    Ftt as he,
    Itt as ge,
    JC as _e,
    K8 as ve,
    LHn as ye,
    LL as be,
    M5 as xe,
    MR as Se,
    Ml as Ce,
    N5 as we,
    Nl as Te,
    P7 as Ee,
    R7 as W,
    RHn as G,
    Sdn as De,
    UUn as Oe,
    VBn as ke,
    WUn as Ae,
    XL as je,
    YL as Me,
    ZL as K,
    a5 as Ne,
    e5 as q,
    jR as Pe,
    n5 as Fe,
    nrn as Ie,
    q8 as J,
    s5 as Le,
    srn as Re,
    t5 as ze,
    xdn as Be,
    zHn as Ve
} from "./conversation-small-cawdu7il3ha6y70c.js";
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
} from "./30901919-jory365vq6ym5crx.js";
import {
    aa as $e,
    ca as et,
    da as tt,
    fa as nt,
    ha as rt,
    oa as it,
    pa as at
} from "./8b34dbc2-d4icgkio4i3wfm6q.js";
import {
    n as ot,
    t as st
} from "./429c9f5e-m0tji0vn328m4gi2.js";
import {
    n as ct,
    r as lt
} from "./1cfd0849-l5b6w0kzzesseaor.js";
import {
    n as ut,
    r as dt,
    t as ft
} from "./97fef780-h38m38biazn0s57l.js";
import {
    n as pt,
    t as mt
} from "./ee0eeb85-esy5yi1u758etn9b.js";
var ht, gt, _t = e((() => {
    ht = t(B()), gt = (0, ht.createContext)(null)
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
        className: L(`pointer-events-none absolute z-2 overflow-hidden`, t ? `rounded-b-[inherit]` : `rounded-t-[inherit]`, e ? `end-0` : `start-0`, t ? `bottom-0` : `top-0`, n && `w-full`),
        children: [(0, Z.jsx)(`div`, {
            "data-testid": o,
            onTransitionEnd: l,
            className: L(t ? `bg-linear-to-b` : `bg-linear-to-t`, `from-transparent to-black/30`, `h-20 w-full transition-opacity duration-75 ease-out`, i ? `opacity-100` : `opacity-0 group-focus-within/imagegen-image:opacity-100 group-hover/imagegen-image:opacity-100 focus-within:opacity-100`)
        }), (0, Z.jsx)(`div`, {
            className: L(`absolute inset-0 flex`, c, `p-3`, t ? `items-end` : `items-start`, e ? `justify-end` : `justify-start`, r && `justify-between`),
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
        i = Se(),
        a = (0, X.useCallback)(() => {
            e && (r.current ||= (D.logEvent(`Share Post: Share Button Shown`, {
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
    fullSizeImageAsset: i,
    conversation: a,
    messageId: o,
    shareSeriesImageCount: s,
    shareSeriesMessageSliceIds: c,
    fallback: l = null,
    shareFlowSource: u
}) {
    "use no forget";
    let [d, f] = (0, X.useState)(!1), [m, g] = (0, X.useState)(null), [_, v] = (0, X.useState)(null), y = (0, X.useRef)(!1), b = ie(), x = i?.asset_pointer ?? n, S = xe({
        mimeType: i?.mime_type
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
    }), O = Se(), k = (s ?? 0) > 1 && T.length > 0, A = p(() => e ? nt() : !1), j = p(() => e && t && Me()), M = be(), N = () => {
        he.imageShared({
            analyticsContext: O,
            source: `image_gen_action_overlay`
        })
    }, P = (e = `media_generation`) => {
        D.logEventWithStatsig(`chatgpt_image_lightbox_share_current_image_selected`, `chatgpt_image_lightbox_share_current_image_selected`), D.logEventWithStatsig(`Share Post: Share Button Clicked`, `chatgpt_post_share_button_clicked`, {
            source: `image_gen_action_overlay`,
            attachment_type: e,
            message_id: o
        }), N()
    }, te = () => {
        D.logEventWithStatsig(`chatgpt_image_lightbox_share_all_images_selected`, `chatgpt_image_lightbox_share_all_images_selected`), D.logEventWithStatsig(`Share Post: Share Button Clicked`, `chatgpt_post_share_button_clicked`, {
            source: `image_gen_action_overlay`,
            attachment_type: `image_series_share`
        }), N()
    }, F = async (e, t, {
        keepDropdownOpen: n = !1
    } = {}) => {
        y.current = !0, n || g(null), v(null), f(!0);
        try {
            let n = await t();
            n ? (v(n), g(e), await n.autoCopyShareLink()) : g(null)
        } finally {
            f(!1), y.current = !1
        }
    }, I = () => {
        v(null), g(null)
    }, L = async e => {
        g(null), v(null), f(!0);
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
            f(!1)
        }
    }, R = async (e, {
        keepDropdownOpen: t = !1
    } = {}) => {
        if (e) {
            await F(`mini-current`, w, {
                keepDropdownOpen: t
            }), P();
            return
        }
        f(!0);
        try {
            await C()
        } finally {
            f(!1)
        }
        P()
    }, ne = async (e, {
        keepDropdownOpen: t = !1
    } = {}) => {
        if (e) {
            await F(`mini-series`, ee, {
                keepDropdownOpen: t
            }), te();
            return
        }
        f(!0);
        try {
            await E()
        } finally {
            f(!1)
        }
        te()
    }, re = async () => {
        P(`prompt`), f(!0);
        try {
            await C({
                shareType: ve.PromptShare
            })
        } finally {
            f(!1)
        }
    };
    if (!e) return l;
    let z = d ? r : Ue,
        B = (0, Z.jsx)(Q, {
            icon: z,
            variant: `imageGenUpdates`,
            disabled: d,
            onClick: e => {
                e.stopPropagation()
            },
            ariaLabel: b.formatMessage(S.shareLabel)
        });
    return k || j ? (0, Z.jsx)(ye, {
        open: m != null,
        side: m === "default" ? void 0 : `right`,
        contentAlign: m === "default" ? void 0 : `end`,
        sideOffset: 8,
        size: `auto`,
        contentClassName: m === "default" ? void 0 : M.contentClassName,
        onOpenChange: e => {
            if (!e) {
                if (y.current) return;
                I();
                return
            }
            if (v(null), g(`default`), k) {
                let e = D.logStructuredEvent(`ChatgptImageLightboxButtonTapped`, {
                    button: `CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_SHARE`,
                    legacyStatsigEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`,
                    selectionState: `CHATGPT_IMAGEGEN_SELECTION_STATE_PENDING_SELECTION`,
                    imageSeriesCount: h(s)
                });
                D.logValueEventWithStatsig({
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
        children: m === `mini-current` && _ ? (0, Z.jsx)(it, {
            imageShareScope: `single_image`,
            isBusinessWorkspace: M.isBusinessWorkspace,
            isResolvingShareLink: d,
            onClose: I,
            shareActions: _
        }) : m === `mini-series` && _ ? (0, Z.jsx)(it, {
            imageShareScope: `image_series`,
            isBusinessWorkspace: M.isBusinessWorkspace,
            isResolvingShareLink: d,
            onClose: I,
            shareActions: _
        }) : (0, Z.jsxs)(Z.Fragment, {
            children: [(0, Z.jsx)(G.Item, {
                icon: qe,
                onSelect: e => {
                    if (t && K()) {
                        R(!1);
                        return
                    }
                    if (A) {
                        L(w).finally(P);
                        return
                    }
                    let n = tt();
                    n && e.preventDefault(), R(n, {
                        keepDropdownOpen: n
                    })
                },
                children: b.formatMessage(S.shareSelectionLabel)
            }), k && (0, Z.jsx)(G.Item, {
                icon: He,
                onSelect: e => {
                    if (A) {
                        L(ee).finally(te);
                        return
                    }
                    let t = tt();
                    t && e.preventDefault(), ne(t, {
                        keepDropdownOpen: t
                    })
                },
                children: b.formatMessage(lt.imageSeries, {
                    imageCount: s
                })
            }), j && (0, Z.jsx)(G.Item, {
                icon: Ge,
                onSelect: () => void re(),
                children: b.formatMessage(lt.promptTemplate)
            })]
        })
    }) : m === `mini-current` && _ ? (0, Z.jsx)($e, {
        imageShareScope: `single_image`,
        isResolvingShareLink: d,
        triggerButton: B,
        onClose: I,
        shareActions: _
    }) : (0, Z.jsx)(Q, {
        icon: z,
        variant: `imageGenUpdates`,
        disabled: d,
        onClick: bt(async () => {
            if (t && K()) {
                await R(!1);
                return
            }
            if (A) {
                await L(w), N();
                return
            }
            if (tt()) {
                await F(`mini-current`, w), N();
                return
            }
            f(!0);
            try {
                await C()
            } finally {
                f(!1)
            }
            he.imageShared({
                analyticsContext: O,
                source: `image_gen_action_overlay`
            })
        }),
        ariaLabel: b.formatMessage(S.shareLabel)
    })
}
var St, X, Z, Ct, wt, Q, Tt, $, Et = e((() => {
        St = se(), F(), O(), ot(), Le(), we(), De(), P(), Ve(), Xe(), Ye(), We(), Je(), Qe(), Ze(), x(), _(), Oe(), Te(), W(), _e(), y(), Ie(), et(), je(), k(), J(), b(), N(), A(), c(), ne(), ct(), E(), T(), o(), ke(), d(), m(), S(), U(), u(), X = t(B()), de(), z(), Pe(), ge(), _t(), Fe(), q(), ut(), mt(), Z = ce(), ue(), Ct = j.ImageGenWatermarkOverflowMenu, wt = l(() => le(() => import(`./c2825ab1-5cdtfizwtto37jfl.js`).then(e => e.ImageGenReferenceActions), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])), {
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
            n[10] !== s || n[11] !== g || n[12] !== _ || n[13] !== v ? (y = L(`pointer-events-auto z-11 flex items-center justify-center text-sm font-medium text-white`, g, _, v, s), n[10] = s, n[11] = g, n[12] = _, n[13] = v, n[14] = y) : y = n[14];
            let b;
            n[15] !== r || n[16] !== o || n[17] !== h ? (b = h ? (0, Z.jsx)(`span`, {
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
            }), n[15] = r, n[16] = o, n[17] = h, n[18] = b) : b = n[18];
            let x;
            return n[19] !== i || n[20] !== a || n[21] !== c || n[22] !== l || n[23] !== t || n[24] !== f || n[25] !== y || n[26] !== b ? (x = (0, Z.jsx)(`button`, {
                ref: t,
                type: `button`,
                "aria-pressed": f,
                className: y,
                onClick: l,
                disabled: c,
                "aria-label": i,
                ...a,
                children: b
            }), n[19] = i, n[20] = a, n[21] = c, n[22] = l, n[23] = t, n[24] = f, n[25] = y, n[26] = b, n[27] = x) : x = n[27], x
        }), Tt = ({
            imageAssetPointer: e,
            imageUrl: t,
            hasWatermarkedDownload: r = !1,
            isRenderedImageWatermarked: o = !1,
            fullSizeImageAsset: c,
            canPublishPromptShare: l = !0,
            shareSeriesImageCount: u,
            shareSeriesMessageSliceIds: d,
            downloadFullImage: m = !1,
            messageId: h,
            conversation: _,
            shouldShowOverflow: y = !1,
            alwaysVisible: b,
            shouldShow360Entrypoint: x = !1,
            on360EntrypointClick: S,
            on360EntrypointVisible: T,
            onEditClick: E,
            editButtonAnalytics: D,
            shareFlowSource: O = v.CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION
        }) => {
            "use no forget";
            let k = p(_.serverId$),
                A = ae(),
                j = ie(),
                N = oe(),
                P = xe({
                    mimeType: c?.mime_type
                }),
                {
                    isAnimated: F
                } = P,
                L = Ne(c, k, h),
                ne = C(),
                z = Se(),
                B = M(),
                H = a(),
                se = s(),
                ce = pe() && B && !H && !se,
                le = p(f),
                U = ce && !le,
                ue = (0, X.use)(gt),
                de = c?.asset_pointer ?? e,
                ge = (0, X.useCallback)(() => {
                    D != null && he.conversationImageEditButtonTapped(D), E?.()
                }, [D, E]),
                _e = (0, X.useCallback)(() => fe(j, void 0, {
                    title: ee(R.getMaybeMessage(re(_.id), h))
                }), [j, _.id, h]),
                ve = n(),
                be = Ae(),
                we = be?.type === Ce.Image && be.image.asset_pointer === e,
                [Te, W] = (0, X.useState)(!1),
                De = ne?.hasPaidSubscription() ?? !1,
                Oe = !(H && !B) && !De && (r || o),
                ke = b !== !1,
                je = x && S != null,
                Me = j.formatMessage($.enter360World),
                K = (0, X.useCallback)(async ({
                    shouldDownloadWatermark: e = !0
                } = {}) => {
                    if (!t) return null;
                    let n = t,
                        i = e && o,
                        a = e && r && c?.metadata != null ? c.metadata.watermarked_asset_pointer : void 0;
                    if (a && c) try {
                        n = (await me.fetch(A, {
                            asset: {
                                ...c,
                                asset_pointer: a
                            },
                            conversationId: k,
                            downloadIntent: !0
                        })).url, i = !0
                    } catch {} else if (m && c) try {
                        n = (await me.fetch(A, {
                            asset: c,
                            conversationId: k,
                            downloadIntent: !0
                        })).url, i = !1
                    } catch {}
                    return {
                        downloadedWithWatermark: i,
                        urlToDownload: n
                    }
                }, [m, c, r, t, o, A, k]),
                q = (0, X.useCallback)(async ({
                    shouldDownloadWatermark: e = !0
                } = {}) => {
                    let t = await K({
                        shouldDownloadWatermark: e
                    });
                    t != null && (await ze({
                        url: t.urlToDownload,
                        fileName: _e(),
                        gifSource: L
                    }), he.download({
                        analyticsContext: z,
                        downloadedWithWatermark: t.downloadedWithWatermark
                    }))
                }, [z, _e, L, K]),
                Pe = (0, X.useCallback)(() => {
                    if (i.logEvent(`chatgpt_image_watermark_download_upgrade_click`, void 0, {
                            source: `overlay`
                        }), !M()) {
                        te({
                            fallbackScreenHint: `login`,
                            skipLoginModal: !1
                        });
                        return
                    }
                    let t = c ?? (e == null ? null : {
                        asset_pointer: e,
                        content_type: I.ImageAssetPointer,
                        size_bytes: 0,
                        width: 0,
                        height: 0
                    });
                    t != null && pt({
                        asset: t,
                        conversationId: k
                    }), Re({
                        navigate: N,
                        checkoutOriginProvenance: {
                            checkoutOriginProductExperience: Be.CHAT,
                            checkoutOriginDeliverySurface: `web`
                        },
                        openModalLocation: Ct
                    })
                }, [c, e, N, k]),
                Fe = j.formatMessage(F ? P.downloadLabel : m ? $.downloadFullSize : $.download),
                Ie = t ? (0, Z.jsx)(w, {
                    label: j.formatMessage(m ? $.downloadTooltipFullSize : $.downloadTooltip),
                    children: (0, Z.jsx)(Q, {
                        icon: Y,
                        variant: `imageGenUpdates`,
                        ariaLabel: Fe,
                        onClick: bt(() => {
                            q()
                        })
                    })
                }) : null,
                J = Oe && g({
                    openModalLocation: Ct
                }),
                Le = t && J ? (0, Z.jsxs)(ye, {
                    side: `bottom`,
                    sideOffset: 10,
                    size: `auto`,
                    open: Te,
                    onOpenChange: W,
                    contentClassName: `pointer-events-auto z-11 min-w-fit origin-top-end text-token-text-primary`,
                    triggerButton: (0, Z.jsx)(Q, {
                        icon: Y,
                        variant: `imageGenUpdates`,
                        ariaLabel: Fe,
                        onClick: e => {
                            e.stopPropagation()
                        }
                    }),
                    children: [(0, Z.jsx)(G.Item, {
                        className: `py-2`,
                        children: (0, Z.jsxs)(`button`, {
                            type: `button`,
                            onClick: e => {
                                e.preventDefault(), e.stopPropagation(), q(), W(!1)
                            },
                            className: `row text-token-text-primary flex items-center gap-2`,
                            children: [(0, Z.jsx)(Y, {}), (0, Z.jsx)(`span`, {
                                className: `font-semibold`,
                                children: (0, Z.jsx)(V, {
                                    ...P.downloadLabel
                                })
                            })]
                        })
                    }), (0, Z.jsx)(G.Separator, {}), (0, Z.jsx)(G.Item, {
                        className: `py-2`,
                        children: (0, Z.jsxs)(`button`, {
                            type: `button`,
                            onClick: e => {
                                e.preventDefault(), e.stopPropagation(), Pe(), W(!1)
                            },
                            className: `row text-token-text-primary flex items-center gap-2`,
                            children: [(0, Z.jsx)(Y, {}), (0, Z.jsxs)(`div`, {
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
                Ve = J ? Le : Ie,
                He = U || Ve != null,
                Ue = E && P.canEdit ? (0, Z.jsx)(Q, {
                    variant: `imageGenUpdates`,
                    onClick: bt(ge),
                    ariaLabel: j.formatMessage($.editImage),
                    children: (0, Z.jsx)(V, {
                        id: `imageGenActionOverlay.editButton`,
                        defaultMessage: `Edit`
                    })
                }) : null;
            return (0, Z.jsx)(Z.Fragment, {
                children: ve ? !we && (0, Z.jsx)(vt, {
                    rightAlign: !0,
                    fullWidth: !0,
                    children: (0, Z.jsx)(Q, {
                        icon: Ee,
                        ariaLabel: j.formatMessage(P.expandLabel)
                    })
                }) : (0, Z.jsx)(Z.Fragment, {
                    children: (0, Z.jsx)(yt, {
                        canShowShareButton: U,
                        bottomAlign: !0,
                        rightAlign: !0,
                        fullWidth: !0,
                        alwaysVisible: ke,
                        onOverlayVisible: je ? T : void 0,
                        testId: `image-gen-overlay-actions`,
                        children: (0, Z.jsxs)(`div`, {
                            className: `flex w-full items-center justify-between`,
                            children: [(0, Z.jsxs)(`div`, {
                                className: `pointer-events-auto flex items-end gap-2`,
                                "data-testid": `image-gen-overlay-left-actions`,
                                children: [L && !H && !se && (0, Z.jsx)(st, {
                                    source: L,
                                    inline: !0
                                }), je ? (0, Z.jsx)(w, {
                                    label: Me,
                                    children: (0, Z.jsx)(Q, {
                                        icon: Ke,
                                        variant: `imageGenUpdates`,
                                        ariaLabel: Me,
                                        onClick: bt(S),
                                        children: (0, Z.jsx)(`span`, {
                                            "aria-hidden": !0,
                                            className: `ms-1.5 pe-0.5`,
                                            children: 360
                                        })
                                    })
                                }) : null, H || se ? Ue : (0, Z.jsx)(wt, {
                                    conversation: _,
                                    fallback: Ue,
                                    messageId: h
                                }), y && !He && (0, Z.jsx)(ft, {
                                    isAnimated: F,
                                    onOpenChange: W,
                                    onDownload: () => {
                                        q()
                                    },
                                    onDownloadWithoutWatermark: J ? Pe : void 0,
                                    showWithoutWatermarkLabel: !r && !Oe,
                                    triggerClassName: `pointer-events-auto z-11 flex h-10 w-10 items-center justify-center rounded-xl bg-transparent hover:bg-token-icon-surface/10 focus:bg-token-icon-surface/10 focus-visible:bg-token-icon-surface/10`,
                                    iconClassName: `icon-lg fill-transparent text-white`,
                                    dropdownClassName: `pointer-events-auto z-11 min-w-fit origin-top-end text-token-text-primary`
                                })]
                            }), (0, Z.jsxs)(`div`, {
                                className: `pointer-events-auto flex gap-2`,
                                "data-testid": `image-gen-overlay-right-actions`,
                                children: [U && de != null && ue?.({
                                    conversation: _,
                                    assetPointer: de,
                                    imageGenMessageId: h,
                                    shareFlowSource: O
                                }), (0, Z.jsx)(xt, {
                                    canShowShareButton: U,
                                    canPublishPromptShare: l,
                                    assetPointer: e,
                                    fullSizeImageAsset: c,
                                    conversation: _,
                                    messageId: h,
                                    shareSeriesImageCount: u,
                                    shareSeriesMessageSliceIds: d,
                                    fallback: Ve,
                                    shareFlowSource: O
                                })]
                            })]
                        })
                    })
                })
            })
        }, $ = H({
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
//# sourceMappingURL=ecab41d6-dyipgdljgtodecqk.js.map