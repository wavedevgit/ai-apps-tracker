const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/c2825ab1-f8ihk9jz5bbeagew.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-nxpmzchfjvwqts17.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-m08q51xmfe7gjq3d.js", "assets/30901919-lgbmg5s09xld40kt.js", "assets/c470f5ab-hgik953cu5ujlhdm.js", "assets/0e5afe53-i4tqvmyg38miikw0.js", "assets/conversation-small-dtc7tvsx.css", "assets/f5cccfb7-omfq28qsvhujhxcn.js", "assets/65f98121-ij5yrdnda3sa1plo.js", "assets/0f8b28f8-ogesunhwybv3h96y.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $J as n,
    $i as r,
    $nt as i,
    Ait as a,
    Da as o,
    GJ as s,
    Get as c,
    Int as l,
    J1 as u,
    JF as d,
    Ket as f,
    Oa as p,
    QX as m,
    Qy as h,
    Rnt as g,
    Rz as _,
    Zy as v,
    a2 as y,
    c7 as b,
    eY as x,
    ea as S,
    ert as ee,
    es as C,
    f0 as w,
    hrt as te,
    jtt as T,
    k8 as E,
    kit as D,
    l7 as O,
    nZ as k,
    o0 as A,
    o2 as j,
    os as M,
    p0 as N,
    q1 as P,
    q5 as F,
    qF as I,
    srt as L,
    ytt as R,
    zet as z,
    zz as ne
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as B,
    Ln as V,
    N as re,
    Nn as ie,
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
    AR as fe,
    CWn as pe,
    Ftt as me,
    IL as he,
    JL as ge,
    N7 as G,
    Nl as _e,
    Pl as ve,
    Ptt as K,
    Q8 as ye,
    Rdn as be,
    XL as xe,
    YC as Se,
    YL as Ce,
    _Un as we,
    a5 as Te,
    bVn as Ee,
    c5 as De,
    d5 as Oe,
    ew as ke,
    ipn as q,
    jR as Ae,
    k7 as je,
    o5 as Me,
    p5 as Ne,
    prn as Pe,
    rpn as Fe,
    s5 as Ie,
    vUn as J,
    vrn as Le,
    wWn as Re,
    xVn as ze,
    yUn as Be,
    zdn as Ve
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    Rm as He,
    bS as Ue,
    eb as We,
    gb as Ge,
    lp as Ke,
    mb as qe,
    oC as Je,
    sC as Ye,
    tb as Xe,
    up as Ze,
    yS as Qe,
    zm as $e
} from "./30901919-lgbmg5s09xld40kt.js";
import {
    aa as et,
    ca as tt,
    da as nt,
    fa as rt,
    ha as it,
    oa as at,
    pa as ot
} from "./8b34dbc2-n194ohawifys3bko.js";
import {
    n as st,
    t as ct
} from "./429c9f5e-fhm0tyohndrvynbi.js";
import {
    n as lt,
    r as ut
} from "./1cfd0849-muzmkjjie5xsgnaf.js";
import {
    n as dt,
    r as ft,
    t as pt
} from "./97fef780-gygqnky566kf9vje.js";
import {
    n as mt,
    t as ht
} from "./ee0eeb85-hy5t0r0dfod4cgwn.js";
var gt, _t, vt = e((() => {
    gt = t(oe()), _t = (0, gt.createContext)(null)
}));

function yt({
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

function bt({
    canShowShareButton: e,
    onOverlayVisible: t,
    ...n
}) {
    "use no forget";
    let r = (0, X.useRef)(!1),
        i = Ae(),
        a = (0, X.useCallback)(() => {
            e && (r.current ||= (l.logEvent(`Share Post: Share Button Shown`, {
                source: `image_gen_action_overlay`,
                ...i
            }), !0))
        }, [i, e]),
        o = (0, X.useCallback)(() => {
            t?.(), a()
        }, [a, t]);
    return (0, Z.jsx)(yt, {
        ...n,
        onOverlayVisible: o
    })
}

function Y(e) {
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
    shareFlowSource: u
}) {
    "use no forget";
    let [d, f] = (0, X.useState)(!1), [p, m] = (0, X.useState)(null), [h, g] = (0, X.useState)(null), v = (0, X.useRef)(!1), y = ue(), b = r?.asset_pointer ?? n, x = Fe({
        mimeType: r?.mime_type
    }), S = ot({
        canPublishPromptShare: t,
        assetPointer: b,
        conversation: i,
        imageGenMessageId: a,
        shareFlowSource: u
    }), C = it({
        assetPointer: b,
        conversation: i,
        imageGenMessageId: a,
        shareFlowSource: u
    }), w = (0, X.useMemo)(() => Array.from(new Set((s ?? []).filter(Boolean))), [s]), te = ot({
        conversation: i,
        imageGenMessageIds: w,
        shareFlowSource: u
    }), T = it({
        conversation: i,
        imageGenMessageIds: w,
        shareFlowSource: u
    }), E = Ae(), D = (o ?? 0) > 1 && w.length > 0, O = F(() => e ? rt() : !1), k = F(() => e && t && ge()), A = he(), j = () => {
        K.imageShared({
            analyticsContext: E,
            source: `image_gen_action_overlay`
        })
    }, M = (e = `media_generation`) => {
        l.logEventWithStatsig(`chatgpt_image_lightbox_share_current_image_selected`, `chatgpt_image_lightbox_share_current_image_selected`), l.logEventWithStatsig(`Share Post: Share Button Clicked`, `chatgpt_post_share_button_clicked`, {
            source: `image_gen_action_overlay`,
            attachment_type: e,
            message_id: a
        }), j()
    }, N = () => {
        l.logEventWithStatsig(`chatgpt_image_lightbox_share_all_images_selected`, `chatgpt_image_lightbox_share_all_images_selected`), l.logEventWithStatsig(`Share Post: Share Button Clicked`, `chatgpt_post_share_button_clicked`, {
            source: `image_gen_action_overlay`,
            attachment_type: `image_series_share`
        }), j()
    }, P = async (e, t, {
        keepDropdownOpen: n = !1
    } = {}) => {
        v.current = !0, n || m(null), g(null), f(!0);
        try {
            let n = await t();
            n ? (g(n), m(e), await n.autoCopyShareLink()) : m(null)
        } finally {
            f(!1), v.current = !1
        }
    }, I = () => {
        g(null), m(null)
    }, L = async e => {
        m(null), g(null), f(!0);
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
            await P(`mini-current`, C, {
                keepDropdownOpen: t
            }), M();
            return
        }
        f(!0);
        try {
            await S()
        } finally {
            f(!1)
        }
        M()
    }, z = async (e, {
        keepDropdownOpen: t = !1
    } = {}) => {
        if (e) {
            await P(`mini-series`, T, {
                keepDropdownOpen: t
            }), N();
            return
        }
        f(!0);
        try {
            await te()
        } finally {
            f(!1)
        }
        N()
    }, ne = async () => {
        M(`prompt`), f(!0);
        try {
            await S({
                shareType: ye.PromptShare
            })
        } finally {
            f(!1)
        }
    };
    if (!e) return c;
    let B = d ? _ : Ue,
        V = (0, Z.jsx)(Q, {
            icon: B,
            variant: `imageGenUpdates`,
            disabled: d,
            onClick: e => {
                e.stopPropagation()
            },
            ariaLabel: y.formatMessage(x.shareLabel)
        });
    return D || k ? (0, Z.jsx)(we, {
        open: p != null,
        side: p === "default" ? void 0 : `right`,
        contentAlign: p === "default" ? void 0 : `end`,
        sideOffset: 8,
        size: `auto`,
        contentClassName: p === "default" ? void 0 : A.contentClassName,
        onOpenChange: e => {
            if (!e) {
                if (v.current) return;
                I();
                return
            }
            if (g(null), m(`default`), D) {
                let e = l.logStructuredEvent(`ChatgptImageLightboxButtonTapped`, {
                    button: `CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_SHARE`,
                    legacyStatsigEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`,
                    selectionState: `CHATGPT_IMAGEGEN_SELECTION_STATE_PENDING_SELECTION`,
                    imageSeriesCount: ee(o)
                });
                l.logValueEventWithStatsig({
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
        triggerButton: V,
        children: p === `mini-current` && h ? (0, Z.jsx)(at, {
            imageShareScope: `single_image`,
            isBusinessWorkspace: A.isBusinessWorkspace,
            isResolvingShareLink: d,
            onClose: I,
            shareActions: h
        }) : p === `mini-series` && h ? (0, Z.jsx)(at, {
            imageShareScope: `image_series`,
            isBusinessWorkspace: A.isBusinessWorkspace,
            isResolvingShareLink: d,
            onClose: I,
            shareActions: h
        }) : (0, Z.jsxs)(Z.Fragment, {
            children: [(0, Z.jsx)(J.Item, {
                icon: Je,
                onSelect: e => {
                    if (t && xe()) {
                        R(!1);
                        return
                    }
                    if (O) {
                        L(C).finally(M);
                        return
                    }
                    let n = nt();
                    n && e.preventDefault(), R(n, {
                        keepDropdownOpen: n
                    })
                },
                children: y.formatMessage(x.shareSelectionLabel)
            }), D && (0, Z.jsx)(J.Item, {
                icon: He,
                onSelect: e => {
                    if (O) {
                        L(T).finally(N);
                        return
                    }
                    let t = nt();
                    t && e.preventDefault(), z(t, {
                        keepDropdownOpen: t
                    })
                },
                children: y.formatMessage(ut.imageSeries, {
                    imageCount: o
                })
            }), k && (0, Z.jsx)(J.Item, {
                icon: Ke,
                onSelect: () => void ne(),
                children: y.formatMessage(ut.promptTemplate)
            })]
        })
    }) : p === `mini-current` && h ? (0, Z.jsx)(et, {
        imageShareScope: `single_image`,
        isResolvingShareLink: d,
        triggerButton: V,
        onClose: I,
        shareActions: h
    }) : (0, Z.jsx)(Q, {
        icon: B,
        variant: `imageGenUpdates`,
        disabled: d,
        onClick: Y(async () => {
            if (t && xe()) {
                await R(!1);
                return
            }
            if (O) {
                await L(C), j();
                return
            }
            if (nt()) {
                await P(`mini-current`, C), j();
                return
            }
            f(!0);
            try {
                await S()
            } finally {
                f(!1)
            }
            K.imageShared({
                analyticsContext: E,
                source: `image_gen_action_overlay`
            })
        }),
        ariaLabel: y.formatMessage(x.shareLabel)
    })
}
var St, X, Z, Ct, wt, Q, Tt, $, Et = e((() => {
        St = le(), x(), k(), st(), Ne(), q(), Ve(), T(), Be(), Ze(), Xe(), Ge(), Ye(), $e(), Qe(), h(), r(), pe(), ve(), G(), Se(), z(), Pe(), tt(), Ce(), M(), de(), I(), E(), ne(), P(), w(), lt(), D(), g(), o(), ze(), te(), i(), j(), ce(), O(), X = t(oe()), U(), H(), fe(), me(), vt(), De(), Me(), dt(), ht(), Z = B(), W(), Ct = f.ImageGenWatermarkOverflowMenu, wt = y(() => se(() => import(`./c2825ab1-f8ihk9jz5bbeagew.js`).then(e => e.ImageGenReferenceActions), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])), {
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
            hasWatermarkedDownload: r = !1,
            isRenderedImageWatermarked: i = !1,
            fullSizeImageAsset: o,
            canPublishPromptShare: l = !0,
            shareSeriesImageCount: f,
            shareSeriesMessageSliceIds: h,
            downloadFullImage: g = !1,
            messageId: _,
            conversation: y,
            shouldShowOverflow: b = !1,
            alwaysVisible: x,
            shouldShow360Entrypoint: ee = !1,
            on360EntrypointClick: w,
            on360EntrypointVisible: te,
            onEditClick: T,
            editButtonAnalytics: E,
            shareFlowSource: D = C.CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION
        }) => {
            "use no forget";
            let O = F(y.serverId$),
                k = re(),
                j = ue(),
                M = ae(),
                P = Fe({
                    mimeType: o?.mime_type
                }),
                {
                    isAnimated: I
                } = P,
                z = Oe(o, O, _),
                ne = A(),
                B = Ae(),
                V = a(),
                H = p(),
                U = d(),
                oe = ke() && V && !H && !U,
                se = F(u),
                W = oe && !se,
                ce = (0, X.use)(_t),
                le = o?.asset_pointer ?? e,
                de = (0, X.useCallback)(() => {
                    E != null && K.conversationImageEditButtonTapped(E), T?.()
                }, [E, T]),
                fe = (0, X.useCallback)(() => Te(j, void 0, {
                    title: m(s.getMaybeMessage(n(y.id), _))
                }), [j, y.id, _]),
                pe = S(),
                me = Re(),
                he = me?.type === _e.Image && me.image.asset_pointer === e,
                [ge, G] = (0, X.useState)(!1),
                ve = ne?.hasPaidSubscription() ?? !1,
                ye = !(H && !V) && !ve && (r || i),
                xe = x !== !1,
                Se = ee && w != null,
                Ce = j.formatMessage($.enter360World),
                De = (0, X.useCallback)(async ({
                    shouldDownloadWatermark: e = !0
                } = {}) => {
                    if (!t) return null;
                    let n = t,
                        a = e && i,
                        s = e && r && o?.metadata != null ? o.metadata.watermarked_asset_pointer : void 0;
                    if (s && o) try {
                        n = (await Ee.fetch(k, {
                            asset: {
                                ...o,
                                asset_pointer: s
                            },
                            conversationId: O,
                            downloadIntent: !0
                        })).url, a = !0
                    } catch {} else if (g && o) try {
                        n = (await Ee.fetch(k, {
                            asset: o,
                            conversationId: O,
                            downloadIntent: !0
                        })).url, a = !1
                    } catch {}
                    return {
                        downloadedWithWatermark: a,
                        urlToDownload: n
                    }
                }, [g, o, r, t, i, k, O]),
                q = (0, X.useCallback)(async ({
                    shouldDownloadWatermark: e = !0
                } = {}) => {
                    let t = await De({
                        shouldDownloadWatermark: e
                    });
                    t != null && (await Ie({
                        url: t.urlToDownload,
                        fileName: fe(),
                        gifSource: z
                    }), K.download({
                        analyticsContext: B,
                        downloadedWithWatermark: t.downloadedWithWatermark
                    }))
                }, [B, fe, z, De]),
                Me = (0, X.useCallback)(() => {
                    if (L.logEvent(`chatgpt_image_watermark_download_upgrade_click`, void 0, {
                            source: `overlay`
                        }), !a()) {
                        N({
                            fallbackScreenHint: `login`,
                            skipLoginModal: !1
                        });
                        return
                    }
                    let t = o ?? (e == null ? null : {
                        asset_pointer: e,
                        content_type: R.ImageAssetPointer,
                        size_bytes: 0,
                        width: 0,
                        height: 0
                    });
                    t != null && mt({
                        asset: t,
                        conversationId: O
                    }), Le({
                        navigate: M,
                        checkoutOriginProvenance: {
                            checkoutOriginProductExperience: be.CHAT,
                            checkoutOriginDeliverySurface: `web`
                        },
                        openModalLocation: Ct
                    })
                }, [o, e, M, O]),
                Ne = j.formatMessage(I ? P.downloadLabel : g ? $.downloadFullSize : $.download),
                Pe = t ? (0, Z.jsx)(v, {
                    label: j.formatMessage(g ? $.downloadTooltipFullSize : $.downloadTooltip),
                    children: (0, Z.jsx)(Q, {
                        icon: We,
                        variant: `imageGenUpdates`,
                        ariaLabel: Ne,
                        onClick: Y(() => {
                            q()
                        })
                    })
                }) : null,
                ze = ye && c({
                    openModalLocation: Ct
                }),
                Be = t && ze ? (0, Z.jsxs)(we, {
                    side: `bottom`,
                    sideOffset: 10,
                    size: `auto`,
                    open: ge,
                    onOpenChange: G,
                    contentClassName: `pointer-events-auto z-11 min-w-fit origin-top-end text-token-text-primary`,
                    triggerButton: (0, Z.jsx)(Q, {
                        icon: We,
                        variant: `imageGenUpdates`,
                        ariaLabel: Ne,
                        onClick: e => {
                            e.stopPropagation()
                        }
                    }),
                    children: [(0, Z.jsx)(J.Item, {
                        className: `py-2`,
                        children: (0, Z.jsxs)(`button`, {
                            type: `button`,
                            onClick: e => {
                                e.preventDefault(), e.stopPropagation(), q(), G(!1)
                            },
                            className: `row text-token-text-primary flex items-center gap-2`,
                            children: [(0, Z.jsx)(We, {}), (0, Z.jsx)(`span`, {
                                className: `font-semibold`,
                                children: (0, Z.jsx)(ie, {
                                    ...P.downloadLabel
                                })
                            })]
                        })
                    }), (0, Z.jsx)(J.Separator, {}), (0, Z.jsx)(J.Item, {
                        className: `py-2`,
                        children: (0, Z.jsxs)(`button`, {
                            type: `button`,
                            onClick: e => {
                                e.preventDefault(), e.stopPropagation(), Me(), G(!1)
                            },
                            className: `row text-token-text-primary flex items-center gap-2`,
                            children: [(0, Z.jsx)(We, {}), (0, Z.jsxs)(`div`, {
                                className: `flex flex-col items-start`,
                                children: [(0, Z.jsx)(`span`, {
                                    className: `font-semibold`,
                                    children: (0, Z.jsx)(ie, {
                                        ...ft.downloadWithoutLogo
                                    })
                                }), (0, Z.jsx)(`span`, {
                                    className: `text-token-text-secondary`,
                                    children: (0, Z.jsx)(ie, {
                                        ...ft.upgradePlan
                                    })
                                })]
                            })]
                        })
                    })]
                }) : null,
                Ve = ze ? Be : Pe,
                He = W || Ve != null,
                Ue = T && P.canEdit ? (0, Z.jsx)(Q, {
                    variant: `imageGenUpdates`,
                    onClick: Y(de),
                    ariaLabel: j.formatMessage($.editImage),
                    children: (0, Z.jsx)(ie, {
                        id: `imageGenActionOverlay.editButton`,
                        defaultMessage: `Edit`
                    })
                }) : null;
            return (0, Z.jsx)(Z.Fragment, {
                children: pe ? !he && (0, Z.jsx)(yt, {
                    rightAlign: !0,
                    fullWidth: !0,
                    children: (0, Z.jsx)(Q, {
                        icon: je,
                        ariaLabel: j.formatMessage(P.expandLabel)
                    })
                }) : (0, Z.jsx)(Z.Fragment, {
                    children: (0, Z.jsx)(bt, {
                        canShowShareButton: W,
                        bottomAlign: !0,
                        rightAlign: !0,
                        fullWidth: !0,
                        alwaysVisible: xe,
                        onOverlayVisible: Se ? te : void 0,
                        testId: `image-gen-overlay-actions`,
                        children: (0, Z.jsxs)(`div`, {
                            className: `flex w-full items-center justify-between`,
                            children: [(0, Z.jsxs)(`div`, {
                                className: `pointer-events-auto flex items-end gap-2`,
                                "data-testid": `image-gen-overlay-left-actions`,
                                children: [z && !H && !U && (0, Z.jsx)(ct, {
                                    source: z,
                                    inline: !0
                                }), Se ? (0, Z.jsx)(v, {
                                    label: Ce,
                                    children: (0, Z.jsx)(Q, {
                                        icon: qe,
                                        variant: `imageGenUpdates`,
                                        ariaLabel: Ce,
                                        onClick: Y(w),
                                        children: (0, Z.jsx)(`span`, {
                                            "aria-hidden": !0,
                                            className: `ms-1.5 pe-0.5`,
                                            children: 360
                                        })
                                    })
                                }) : null, H || U ? Ue : (0, Z.jsx)(wt, {
                                    conversation: y,
                                    fallback: Ue,
                                    messageId: _
                                }), b && !He && (0, Z.jsx)(pt, {
                                    isAnimated: I,
                                    onOpenChange: G,
                                    onDownload: () => {
                                        q()
                                    },
                                    onDownloadWithoutWatermark: ze ? Me : void 0,
                                    showWithoutWatermarkLabel: !r && !ye,
                                    triggerClassName: `pointer-events-auto z-11 flex h-10 w-10 items-center justify-center rounded-xl bg-transparent hover:bg-token-icon-surface/10 focus:bg-token-icon-surface/10 focus-visible:bg-token-icon-surface/10`,
                                    iconClassName: `icon-lg fill-transparent text-white`,
                                    dropdownClassName: `pointer-events-auto z-11 min-w-fit origin-top-end text-token-text-primary`
                                })]
                            }), (0, Z.jsxs)(`div`, {
                                className: `pointer-events-auto flex gap-2`,
                                "data-testid": `image-gen-overlay-right-actions`,
                                children: [W && le != null && ce?.({
                                    conversation: y,
                                    assetPointer: le,
                                    imageGenMessageId: _,
                                    shareFlowSource: D
                                }), (0, Z.jsx)(xt, {
                                    canShowShareButton: W,
                                    canPublishPromptShare: l,
                                    assetPointer: e,
                                    fullSizeImageAsset: o,
                                    conversation: y,
                                    messageId: _,
                                    shareSeriesImageCount: f,
                                    shareSeriesMessageSliceIds: h,
                                    fallback: Ve,
                                    shareFlowSource: D
                                })]
                            })]
                        })
                    })
                })
            })
        }, $ = V({
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
//# sourceMappingURL=ecab41d6-g9a6j9kv4q2m0z4v.js.map