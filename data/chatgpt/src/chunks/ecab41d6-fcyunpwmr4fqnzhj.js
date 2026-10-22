const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/c2825ab1-mjy717bk42ao72v3.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-r54yv6lv29x4ew99.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-dwpaie1hln28efxb.js", "assets/30901919-k5uqyx4vyplt9toa.js", "assets/c470f5ab-bhx5jraq636jc4ww.js", "assets/0e5afe53-d830ix843j2kh0p0.js", "assets/conversation-small-gfjfeahf.css", "assets/f5cccfb7-omfq28qsvhujhxcn.js", "assets/65f98121-jeifqf8rn802gy8u.js", "assets/0f8b28f8-i3tz7tpnu567he5w.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $J as n,
    $i as r,
    A8 as i,
    Ait as a,
    Bet as o,
    Da as s,
    GJ as c,
    J1 as l,
    J5 as u,
    JF as d,
    Ket as f,
    Lnt as p,
    Mtt as m,
    Oa as h,
    QX as g,
    Qy as _,
    Rz as v,
    Zy as y,
    a2 as b,
    btt as x,
    crt as S,
    eY as C,
    ea as w,
    ert as T,
    es as ee,
    f0 as E,
    grt as te,
    jit as D,
    l7 as O,
    nZ as k,
    o0 as A,
    o2 as j,
    os as M,
    p0 as ne,
    q1 as N,
    qF as P,
    qet as F,
    trt as I,
    u7 as L,
    znt as R,
    zz as re
} from "./4813494d-r54yv6lv29x4ew99.js";
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
    _rn as Te,
    a5 as Ee,
    bVn as De,
    c5 as Oe,
    d5 as ke,
    ew as Ae,
    frn as q,
    ipn as je,
    jR as Me,
    k7 as Ne,
    o5 as Pe,
    p5 as Fe,
    rpn as Ie,
    s5 as Le,
    vUn as J,
    wWn as Re,
    xVn as Y,
    yUn as ze,
    zdn as Be
} from "./conversation-small-dwpaie1hln28efxb.js";
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
} from "./30901919-k5uqyx4vyplt9toa.js";
import {
    aa as $e,
    ca as et,
    da as tt,
    fa as nt,
    ha as rt,
    oa as it,
    pa as at
} from "./8b34dbc2-bgocf3s6t6l67twq.js";
import {
    n as ot,
    t as st
} from "./429c9f5e-ocmrswn83mtuwll0.js";
import {
    n as ct,
    r as lt
} from "./1cfd0849-mknf6dnk5sqkrnjp.js";
import {
    n as ut,
    r as dt,
    t as ft
} from "./97fef780-oy0ilrina9bx23ag.js";
import {
    n as pt,
    t as mt
} from "./ee0eeb85-g5jbpbocp9u5no62.js";
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
        className: O(`pointer-events-none absolute z-2 overflow-hidden`, t ? `rounded-b-[inherit]` : `rounded-t-[inherit]`, e ? `end-0` : `start-0`, t ? `bottom-0` : `top-0`, n && `w-full`),
        children: [(0, Z.jsx)(`div`, {
            "data-testid": o,
            onTransitionEnd: l,
            className: O(t ? `bg-linear-to-b` : `bg-linear-to-t`, `from-transparent to-black/30`, `h-20 w-full transition-opacity duration-75 ease-out`, i ? `opacity-100` : `opacity-0 group-focus-within/imagegen-image:opacity-100 group-hover/imagegen-image:opacity-100 focus-within:opacity-100`)
        }), (0, Z.jsx)(`div`, {
            className: O(`absolute inset-0 flex`, c, `p-3`, t ? `items-end` : `items-start`, e ? `justify-end` : `justify-start`, r && `justify-between`),
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
        i = Me(),
        a = (0, X.useCallback)(() => {
            e && (r.current ||= (p.logEvent(`Share Post: Share Button Shown`, {
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
    let [d, f] = (0, X.useState)(!1), [m, h] = (0, X.useState)(null), [g, _] = (0, X.useState)(null), y = (0, X.useRef)(!1), b = ue(), x = r?.asset_pointer ?? n, S = Ie({
        mimeType: r?.mime_type
    }), C = at({
        canPublishPromptShare: t,
        assetPointer: x,
        conversation: i,
        imageGenMessageId: a,
        shareFlowSource: l
    }), w = rt({
        assetPointer: x,
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
    }), te = Me(), D = (o ?? 0) > 1 && T.length > 0, O = u(() => e ? nt() : !1), k = u(() => e && t && ge()), A = he(), j = () => {
        K.imageShared({
            analyticsContext: te,
            source: `image_gen_action_overlay`
        })
    }, M = (e = `media_generation`) => {
        p.logEventWithStatsig(`chatgpt_image_lightbox_share_current_image_selected`, `chatgpt_image_lightbox_share_current_image_selected`), p.logEventWithStatsig(`Share Post: Share Button Clicked`, `chatgpt_post_share_button_clicked`, {
            source: `image_gen_action_overlay`,
            attachment_type: e,
            message_id: a
        }), j()
    }, ne = () => {
        p.logEventWithStatsig(`chatgpt_image_lightbox_share_all_images_selected`, `chatgpt_image_lightbox_share_all_images_selected`), p.logEventWithStatsig(`Share Post: Share Button Clicked`, `chatgpt_post_share_button_clicked`, {
            source: `image_gen_action_overlay`,
            attachment_type: `image_series_share`
        }), j()
    }, N = async (e, t, {
        keepDropdownOpen: n = !1
    } = {}) => {
        y.current = !0, n || h(null), _(null), f(!0);
        try {
            let n = await t();
            n ? (_(n), h(e), await n.autoCopyShareLink()) : h(null)
        } finally {
            f(!1), y.current = !1
        }
    }, P = () => {
        _(null), h(null)
    }, F = async e => {
        h(null), _(null), f(!0);
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
    }, L = async (e, {
        keepDropdownOpen: t = !1
    } = {}) => {
        if (e) {
            await N(`mini-current`, w, {
                keepDropdownOpen: t
            }), M();
            return
        }
        f(!0);
        try {
            await C()
        } finally {
            f(!1)
        }
        M()
    }, R = async (e, {
        keepDropdownOpen: t = !1
    } = {}) => {
        if (e) {
            await N(`mini-series`, E, {
                keepDropdownOpen: t
            }), ne();
            return
        }
        f(!0);
        try {
            await ee()
        } finally {
            f(!1)
        }
        ne()
    }, re = async () => {
        M(`prompt`), f(!0);
        try {
            await C({
                shareType: ye.PromptShare
            })
        } finally {
            f(!1)
        }
    };
    if (!e) return c;
    let z = d ? v : Qe,
        B = (0, Z.jsx)(Q, {
            icon: z,
            variant: `imageGenUpdates`,
            disabled: d,
            onClick: e => {
                e.stopPropagation()
            },
            ariaLabel: b.formatMessage(S.shareLabel)
        });
    return D || k ? (0, Z.jsx)(we, {
        open: m != null,
        side: m === "default" ? void 0 : `right`,
        contentAlign: m === "default" ? void 0 : `end`,
        sideOffset: 8,
        size: `auto`,
        contentClassName: m === "default" ? void 0 : A.contentClassName,
        onOpenChange: e => {
            if (!e) {
                if (y.current) return;
                P();
                return
            }
            if (_(null), h(`default`), D) {
                let e = p.logStructuredEvent(`ChatgptImageLightboxButtonTapped`, {
                    button: `CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_SHARE`,
                    legacyStatsigEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`,
                    selectionState: `CHATGPT_IMAGEGEN_SELECTION_STATE_PENDING_SELECTION`,
                    imageSeriesCount: I(o)
                });
                p.logValueEventWithStatsig({
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
        triggerButton: B,
        children: m === `mini-current` && g ? (0, Z.jsx)(it, {
            imageShareScope: `single_image`,
            isBusinessWorkspace: A.isBusinessWorkspace,
            isResolvingShareLink: d,
            onClose: P,
            shareActions: g
        }) : m === `mini-series` && g ? (0, Z.jsx)(it, {
            imageShareScope: `image_series`,
            isBusinessWorkspace: A.isBusinessWorkspace,
            isResolvingShareLink: d,
            onClose: P,
            shareActions: g
        }) : (0, Z.jsxs)(Z.Fragment, {
            children: [(0, Z.jsx)(J.Item, {
                icon: Ye,
                onSelect: e => {
                    if (t && xe()) {
                        L(!1);
                        return
                    }
                    if (O) {
                        F(w).finally(M);
                        return
                    }
                    let n = tt();
                    n && e.preventDefault(), L(n, {
                        keepDropdownOpen: n
                    })
                },
                children: b.formatMessage(S.shareSelectionLabel)
            }), D && (0, Z.jsx)(J.Item, {
                icon: He,
                onSelect: e => {
                    if (O) {
                        F(E).finally(ne);
                        return
                    }
                    let t = tt();
                    t && e.preventDefault(), R(t, {
                        keepDropdownOpen: t
                    })
                },
                children: b.formatMessage(lt.imageSeries, {
                    imageCount: o
                })
            }), k && (0, Z.jsx)(J.Item, {
                icon: Ze,
                onSelect: () => void re(),
                children: b.formatMessage(lt.promptTemplate)
            })]
        })
    }) : m === `mini-current` && g ? (0, Z.jsx)($e, {
        imageShareScope: `single_image`,
        isResolvingShareLink: d,
        triggerButton: B,
        onClose: P,
        shareActions: g
    }) : (0, Z.jsx)(Q, {
        icon: z,
        variant: `imageGenUpdates`,
        disabled: d,
        onClick: bt(async () => {
            if (t && xe()) {
                await L(!1);
                return
            }
            if (O) {
                await F(w), j();
                return
            }
            if (tt()) {
                await N(`mini-current`, w), j();
                return
            }
            f(!0);
            try {
                await C()
            } finally {
                f(!1)
            }
            K.imageShared({
                analyticsContext: te,
                source: `image_gen_action_overlay`
            })
        }),
        ariaLabel: b.formatMessage(S.shareLabel)
    })
}
var St, X, Z, Ct, wt, Q, Tt, $, Et = e((() => {
        St = le(), C(), k(), ot(), Fe(), je(), Be(), m(), ze(), qe(), Ve(), Xe(), Ke(), Ue(), Ge(), _(), r(), pe(), ve(), G(), Se(), o(), q(), et(), Ce(), M(), de(), P(), i(), re(), N(), E(), ct(), a(), R(), s(), Y(), te(), T(), j(), ce(), L(), X = t(oe()), U(), H(), fe(), me(), _t(), Oe(), Pe(), ut(), mt(), Z = z(), W(), Ct = F.ImageGenWatermarkOverflowMenu, wt = b(() => se(() => import(`./c2825ab1-mjy717bk42ao72v3.js`).then(e => e.ImageGenReferenceActions), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])), {
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
            n[10] !== s || n[11] !== g || n[12] !== _ || n[13] !== v ? (y = O(`pointer-events-auto z-11 flex items-center justify-center text-sm font-medium text-white`, g, _, v, s), n[10] = s, n[11] = g, n[12] = _, n[13] = v, n[14] = y) : y = n[14];
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
            isRenderedImageWatermarked: i = !1,
            fullSizeImageAsset: a,
            canPublishPromptShare: o = !0,
            shareSeriesImageCount: s,
            shareSeriesMessageSliceIds: p,
            downloadFullImage: m = !1,
            messageId: _,
            conversation: v,
            shouldShowOverflow: b = !1,
            alwaysVisible: C,
            shouldShow360Entrypoint: T = !1,
            on360EntrypointClick: E,
            on360EntrypointVisible: te,
            onEditClick: O,
            editButtonAnalytics: k,
            shareFlowSource: j = ee.CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION
        }) => {
            "use no forget";
            let M = u(v.serverId$),
                N = ie(),
                P = ue(),
                F = ae(),
                I = Ie({
                    mimeType: a?.mime_type
                }),
                {
                    isAnimated: L
                } = I,
                R = ke(a, M, _),
                re = A(),
                z = Me(),
                B = D(),
                H = h(),
                U = d(),
                oe = Ae() && B && !H && !U,
                se = u(l),
                W = oe && !se,
                ce = (0, X.use)(gt),
                le = a?.asset_pointer ?? e,
                de = (0, X.useCallback)(() => {
                    k != null && K.conversationImageEditButtonTapped(k), O?.()
                }, [k, O]),
                fe = (0, X.useCallback)(() => Ee(P, void 0, {
                    title: g(c.getMaybeMessage(n(v.id), _))
                }), [P, v.id, _]),
                pe = w(),
                me = Re(),
                he = me?.type === _e.Image && me.image.asset_pointer === e,
                [ge, G] = (0, X.useState)(!1),
                ve = re?.hasPaidSubscription() ?? !1,
                ye = !(H && !B) && !ve && (r || i),
                xe = C !== !1,
                Se = T && E != null,
                Ce = P.formatMessage($.enter360World),
                Oe = (0, X.useCallback)(async ({
                    shouldDownloadWatermark: e = !0
                } = {}) => {
                    if (!t) return null;
                    let n = t,
                        o = e && i,
                        s = e && r && a?.metadata != null ? a.metadata.watermarked_asset_pointer : void 0;
                    if (s && a) try {
                        n = (await De.fetch(N, {
                            asset: {
                                ...a,
                                asset_pointer: s
                            },
                            conversationId: M,
                            downloadIntent: !0
                        })).url, o = !0
                    } catch {} else if (m && a) try {
                        n = (await De.fetch(N, {
                            asset: a,
                            conversationId: M,
                            downloadIntent: !0
                        })).url, o = !1
                    } catch {}
                    return {
                        downloadedWithWatermark: o,
                        urlToDownload: n
                    }
                }, [m, a, r, t, i, N, M]),
                q = (0, X.useCallback)(async ({
                    shouldDownloadWatermark: e = !0
                } = {}) => {
                    let t = await Oe({
                        shouldDownloadWatermark: e
                    });
                    t != null && (await Le({
                        url: t.urlToDownload,
                        fileName: fe(),
                        gifSource: R
                    }), K.download({
                        analyticsContext: z,
                        downloadedWithWatermark: t.downloadedWithWatermark
                    }))
                }, [z, fe, R, Oe]),
                je = (0, X.useCallback)(() => {
                    if (S.logEvent(`chatgpt_image_watermark_download_upgrade_click`, void 0, {
                            source: `overlay`
                        }), !D()) {
                        ne({
                            fallbackScreenHint: `login`,
                            skipLoginModal: !1
                        });
                        return
                    }
                    let t = a ?? (e == null ? null : {
                        asset_pointer: e,
                        content_type: x.ImageAssetPointer,
                        size_bytes: 0,
                        width: 0,
                        height: 0
                    });
                    t != null && pt({
                        asset: t,
                        conversationId: M
                    }), Te({
                        navigate: F,
                        checkoutOriginProvenance: {
                            checkoutOriginProductExperience: be.CHAT,
                            checkoutOriginDeliverySurface: `web`
                        },
                        openModalLocation: Ct
                    })
                }, [a, e, F, M]),
                Pe = P.formatMessage(L ? I.downloadLabel : m ? $.downloadFullSize : $.download),
                Fe = t ? (0, Z.jsx)(y, {
                    label: P.formatMessage(m ? $.downloadTooltipFullSize : $.downloadTooltip),
                    children: (0, Z.jsx)(Q, {
                        icon: We,
                        variant: `imageGenUpdates`,
                        ariaLabel: Pe,
                        onClick: bt(() => {
                            q()
                        })
                    })
                }) : null,
                Y = ye && f({
                    openModalLocation: Ct
                }),
                ze = t && Y ? (0, Z.jsxs)(we, {
                    side: `bottom`,
                    sideOffset: 10,
                    size: `auto`,
                    open: ge,
                    onOpenChange: G,
                    contentClassName: `pointer-events-auto z-11 min-w-fit origin-top-end text-token-text-primary`,
                    triggerButton: (0, Z.jsx)(Q, {
                        icon: We,
                        variant: `imageGenUpdates`,
                        ariaLabel: Pe,
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
                                children: (0, Z.jsx)(V, {
                                    ...I.downloadLabel
                                })
                            })]
                        })
                    }), (0, Z.jsx)(J.Separator, {}), (0, Z.jsx)(J.Item, {
                        className: `py-2`,
                        children: (0, Z.jsxs)(`button`, {
                            type: `button`,
                            onClick: e => {
                                e.preventDefault(), e.stopPropagation(), je(), G(!1)
                            },
                            className: `row text-token-text-primary flex items-center gap-2`,
                            children: [(0, Z.jsx)(We, {}), (0, Z.jsxs)(`div`, {
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
                Be = Y ? ze : Fe,
                Ve = W || Be != null,
                He = O && I.canEdit ? (0, Z.jsx)(Q, {
                    variant: `imageGenUpdates`,
                    onClick: bt(de),
                    ariaLabel: P.formatMessage($.editImage),
                    children: (0, Z.jsx)(V, {
                        id: `imageGenActionOverlay.editButton`,
                        defaultMessage: `Edit`
                    })
                }) : null;
            return (0, Z.jsx)(Z.Fragment, {
                children: pe ? !he && (0, Z.jsx)(vt, {
                    rightAlign: !0,
                    fullWidth: !0,
                    children: (0, Z.jsx)(Q, {
                        icon: Ne,
                        ariaLabel: P.formatMessage(I.expandLabel)
                    })
                }) : (0, Z.jsx)(Z.Fragment, {
                    children: (0, Z.jsx)(yt, {
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
                                children: [R && !H && !U && (0, Z.jsx)(st, {
                                    source: R,
                                    inline: !0
                                }), Se ? (0, Z.jsx)(y, {
                                    label: Ce,
                                    children: (0, Z.jsx)(Q, {
                                        icon: Je,
                                        variant: `imageGenUpdates`,
                                        ariaLabel: Ce,
                                        onClick: bt(E),
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
                                    onOpenChange: G,
                                    onDownload: () => {
                                        q()
                                    },
                                    onDownloadWithoutWatermark: Y ? je : void 0,
                                    showWithoutWatermarkLabel: !r && !ye,
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
                                    shareFlowSource: j
                                }), (0, Z.jsx)(xt, {
                                    canShowShareButton: W,
                                    canPublishPromptShare: o,
                                    assetPointer: e,
                                    fullSizeImageAsset: a,
                                    conversation: v,
                                    messageId: _,
                                    shareSeriesImageCount: s,
                                    shareSeriesMessageSliceIds: p,
                                    fallback: Be,
                                    shareFlowSource: j
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
//# sourceMappingURL=ecab41d6-fcyunpwmr4fqnzhj.js.map