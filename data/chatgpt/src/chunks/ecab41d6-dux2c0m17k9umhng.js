const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/c2825ab1-abihhjtdhr8crtui.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/conversation-small-fym1zmu9zimymmm1.js", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css", "assets/f5cccfb7-kismu693jk268w4g.js", "assets/65f98121-o2sqiuiqqgoerkgb.js", "assets/0f8b28f8-e5c0k4mvm0hz0bbl.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $9 as n,
    $i as r,
    A1 as i,
    AJ as a,
    B6 as o,
    Btt as s,
    C0 as c,
    C1 as l,
    CF as u,
    Da as d,
    Det as f,
    Ea as p,
    Htt as m,
    MX as h,
    My as g,
    Nrt as _,
    OX as v,
    Prt as y,
    Qi as b,
    Qo as x,
    S0 as S,
    b5 as C,
    d1 as ee,
    dnt as te,
    dz as ne,
    eet as w,
    fz as T,
    i5 as re,
    int as ie,
    is as E,
    jy as D,
    k1 as O,
    kJ as k,
    q9 as A,
    rnt as j,
    u1 as M,
    wF as N,
    xJ as P,
    y5 as F,
    ynt as I,
    zet as ae
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as L,
    Bn as R,
    Ln as z,
    N as oe,
    Nn as B,
    Pt as se,
    Rn as V,
    Vn as ce,
    cn as le,
    ln as H,
    s as ue,
    wn as de,
    zn as fe
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $8 as pe,
    A5 as me,
    AR as he,
    AUn as ge,
    CBn as _e,
    CHn as ve,
    FL as ye,
    G8 as be,
    I7 as xe,
    JL as Se,
    Jnn as Ce,
    KC as we,
    M7 as Te,
    Ml as Ee,
    Nl as De,
    Ntt as U,
    Ptt as W,
    Q8 as Oe,
    THn as ke,
    Unn as Ae,
    W8 as je,
    YL as G,
    Z8 as Me,
    ZC as Ne,
    a5 as Pe,
    cdn as K,
    e5 as Fe,
    j5 as Ie,
    kR as Le,
    kUn as q,
    qL as Re,
    r5 as ze,
    sdn as Be,
    wBn as Ve,
    wHn as J
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Rm as He,
    _b as Ue,
    bS as We,
    ib as Ge,
    lp as Ke,
    oC as qe,
    rb as Y,
    sC as Je,
    up as Ye,
    yS as Xe,
    yb as Ze,
    zm as Qe
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    aa as $e,
    ca as et,
    da as tt,
    fa as nt,
    ha as rt,
    oa as it,
    pa as at
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    n as ot,
    t as st
} from "./429c9f5e-eahacevj3ceu5yzs.js";
import {
    n as ct,
    r as lt
} from "./1cfd0849-modcf4gb5s2fz5n2.js";
import {
    n as ut,
    r as dt,
    t as ft
} from "./97fef780-oogamicphsh3med0.js";
import {
    n as pt,
    t as mt
} from "./ee0eeb85-dfujvmq4b9s3yr8f.js";
var ht, gt, _t = e((() => {
    ht = t(ce()), gt = (0, ht.createContext)(null)
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
        className: F(`pointer-events-none absolute z-2 overflow-hidden`, t ? `rounded-b-[inherit]` : `rounded-t-[inherit]`, e ? `end-0` : `start-0`, t ? `bottom-0` : `top-0`, n && `w-full`),
        children: [(0, Z.jsx)(`div`, {
            "data-testid": o,
            onTransitionEnd: l,
            className: F(t ? `bg-linear-to-b` : `bg-linear-to-t`, `from-transparent to-black/30`, `h-20 w-full transition-opacity duration-75 ease-out`, i ? `opacity-100` : `opacity-0 group-focus-within/imagegen-image:opacity-100 group-hover/imagegen-image:opacity-100 focus-within:opacity-100`)
        }), (0, Z.jsx)(`div`, {
            className: F(`absolute inset-0 flex`, c, `p-3`, t ? `items-end` : `items-start`, e ? `justify-end` : `justify-start`, r && `justify-between`),
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
        i = he(),
        a = (0, X.useCallback)(() => {
            e && (r.current ||= (s.logEvent(`Share Post: Share Button Shown`, {
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
    shareSeriesMessageSliceIds: c,
    fallback: l = null,
    shareFlowSource: u
}) {
    "use no forget";
    let [d, f] = (0, X.useState)(!1), [p, m] = (0, X.useState)(null), [h, g] = (0, X.useState)(null), _ = (0, X.useRef)(!1), v = fe(), y = r?.asset_pointer ?? n, b = me({
        mimeType: r?.mime_type
    }), x = at({
        canPublishPromptShare: t,
        assetPointer: y,
        conversation: i,
        imageGenMessageId: a,
        shareFlowSource: u
    }), S = rt({
        assetPointer: y,
        conversation: i,
        imageGenMessageId: a,
        shareFlowSource: u
    }), C = (0, X.useMemo)(() => Array.from(new Set((c ?? []).filter(Boolean))), [c]), ee = at({
        conversation: i,
        imageGenMessageIds: C,
        shareFlowSource: u
    }), te = rt({
        conversation: i,
        imageGenMessageIds: C,
        shareFlowSource: u
    }), w = he(), T = (o ?? 0) > 1 && C.length > 0, E = re(() => e ? nt() : !1), D = re(() => e && t && Re()), O = ye(), k = () => {
        U.imageShared({
            analyticsContext: w,
            source: `image_gen_action_overlay`
        })
    }, A = (e = `media_generation`) => {
        s.logEventWithStatsig(`chatgpt_image_lightbox_share_current_image_selected`, `chatgpt_image_lightbox_share_current_image_selected`), s.logEventWithStatsig(`Share Post: Share Button Clicked`, `chatgpt_post_share_button_clicked`, {
            source: `image_gen_action_overlay`,
            attachment_type: e,
            message_id: a
        }), k()
    }, j = () => {
        s.logEventWithStatsig(`chatgpt_image_lightbox_share_all_images_selected`, `chatgpt_image_lightbox_share_all_images_selected`), s.logEventWithStatsig(`Share Post: Share Button Clicked`, `chatgpt_post_share_button_clicked`, {
            source: `image_gen_action_overlay`,
            attachment_type: `image_series_share`
        }), k()
    }, M = async (e, t, {
        keepDropdownOpen: n = !1
    } = {}) => {
        _.current = !0, n || m(null), g(null), f(!0);
        try {
            let n = await t();
            n ? (g(n), m(e), await n.autoCopyShareLink()) : m(null)
        } finally {
            f(!1), _.current = !1
        }
    }, N = () => {
        g(null), m(null)
    }, P = async e => {
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
    }, F = async (e, {
        keepDropdownOpen: t = !1
    } = {}) => {
        if (e) {
            await M(`mini-current`, S, {
                keepDropdownOpen: t
            }), A();
            return
        }
        f(!0);
        try {
            await x()
        } finally {
            f(!1)
        }
        A()
    }, I = async (e, {
        keepDropdownOpen: t = !1
    } = {}) => {
        if (e) {
            await M(`mini-series`, te, {
                keepDropdownOpen: t
            }), j();
            return
        }
        f(!0);
        try {
            await ee()
        } finally {
            f(!1)
        }
        j()
    }, ae = async () => {
        A(`prompt`), f(!0);
        try {
            await x({
                shareType: je.PromptShare
            })
        } finally {
            f(!1)
        }
    };
    if (!e) return l;
    let L = d ? ne : We,
        R = (0, Z.jsx)(Q, {
            icon: L,
            variant: `imageGenUpdates`,
            disabled: d,
            onClick: e => {
                e.stopPropagation()
            },
            ariaLabel: v.formatMessage(b.shareLabel)
        });
    return T || D ? (0, Z.jsx)(ve, {
        open: p != null,
        side: p === "default" ? void 0 : `right`,
        contentAlign: p === "default" ? void 0 : `end`,
        sideOffset: 8,
        size: `auto`,
        contentClassName: p === "default" ? void 0 : O.contentClassName,
        onOpenChange: e => {
            if (!e) {
                if (_.current) return;
                N();
                return
            }
            if (g(null), m(`default`), T) {
                let e = s.logStructuredEvent(`ChatgptImageLightboxButtonTapped`, {
                    button: `CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_SHARE`,
                    legacyStatsigEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`,
                    selectionState: `CHATGPT_IMAGEGEN_SELECTION_STATE_PENDING_SELECTION`,
                    imageSeriesCount: ie(o)
                });
                s.logValueEventWithStatsig({
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
        triggerButton: R,
        children: p === `mini-current` && h ? (0, Z.jsx)(it, {
            imageShareScope: `single_image`,
            isBusinessWorkspace: O.isBusinessWorkspace,
            isResolvingShareLink: d,
            onClose: N,
            shareActions: h
        }) : p === `mini-series` && h ? (0, Z.jsx)(it, {
            imageShareScope: `image_series`,
            isBusinessWorkspace: O.isBusinessWorkspace,
            isResolvingShareLink: d,
            onClose: N,
            shareActions: h
        }) : (0, Z.jsxs)(Z.Fragment, {
            children: [(0, Z.jsx)(J.Item, {
                icon: qe,
                onSelect: e => {
                    if (t && G()) {
                        F(!1);
                        return
                    }
                    if (E) {
                        P(S).finally(A);
                        return
                    }
                    let n = tt();
                    n && e.preventDefault(), F(n, {
                        keepDropdownOpen: n
                    })
                },
                children: v.formatMessage(b.shareSelectionLabel)
            }), T && (0, Z.jsx)(J.Item, {
                icon: He,
                onSelect: e => {
                    if (E) {
                        P(te).finally(j);
                        return
                    }
                    let t = tt();
                    t && e.preventDefault(), I(t, {
                        keepDropdownOpen: t
                    })
                },
                children: v.formatMessage(lt.imageSeries, {
                    imageCount: o
                })
            }), D && (0, Z.jsx)(J.Item, {
                icon: Ke,
                onSelect: () => void ae(),
                children: v.formatMessage(lt.promptTemplate)
            })]
        })
    }) : p === `mini-current` && h ? (0, Z.jsx)($e, {
        imageShareScope: `single_image`,
        isResolvingShareLink: d,
        triggerButton: R,
        onClose: N,
        shareActions: h
    }) : (0, Z.jsx)(Q, {
        icon: L,
        variant: `imageGenUpdates`,
        disabled: d,
        onClick: bt(async () => {
            if (t && G()) {
                await F(!1);
                return
            }
            if (E) {
                await P(S), k();
                return
            }
            if (tt()) {
                await M(`mini-current`, S), k();
                return
            }
            f(!0);
            try {
                await x()
            } finally {
                f(!1)
            }
            U.imageShared({
                analyticsContext: w,
                source: `image_gen_action_overlay`
            })
        }),
        ariaLabel: v.formatMessage(b.shareLabel)
    })
}
var St, X, Z, Ct, wt, Q, Tt, $, Et = e((() => {
        St = de(), a(), h(), ot(), Pe(), Ie(), K(), ae(), ke(), Ye(), Ge(), Ze(), Je(), Qe(), Xe(), g(), b(), q(), De(), xe(), we(), A(), Ae(), et(), Se(), E(), be(), u(), o(), T(), M(), O(), ct(), _(), m(), p(), Ve(), I(), j(), c(), ue(), C(), X = t(ce()), V(), L(), Le(), W(), _t(), Fe(), Oe(), ut(), mt(), Z = R(), H(), Ct = w.ImageGenWatermarkOverflowMenu, wt = S(() => le(() => import(`./c2825ab1-abihhjtdhr8crtui.js`).then(e => e.ImageGenReferenceActions), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])), {
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
            n[10] !== s || n[11] !== g || n[12] !== _ || n[13] !== v ? (y = F(`pointer-events-auto z-11 flex items-center justify-center text-sm font-medium text-white`, g, _, v, s), n[10] = s, n[11] = g, n[12] = _, n[13] = v, n[14] = y) : y = n[14];
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
            hasWatermarkedDownload: a = !1,
            isRenderedImageWatermarked: o = !1,
            fullSizeImageAsset: s,
            canPublishPromptShare: c = !0,
            shareSeriesImageCount: u,
            shareSeriesMessageSliceIds: p,
            downloadFullImage: m = !1,
            messageId: h,
            conversation: g,
            shouldShowOverflow: _ = !1,
            alwaysVisible: b,
            shouldShow360Entrypoint: S = !1,
            on360EntrypointClick: C,
            on360EntrypointVisible: ne,
            onEditClick: w,
            editButtonAnalytics: T,
            shareFlowSource: ie = x.CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION
        }) => {
            "use no forget";
            let E = re(g.serverId$),
                O = oe(),
                A = fe(),
                j = se(),
                M = me({
                    mimeType: s?.mime_type
                }),
                {
                    isAnimated: F
                } = M,
                I = ze(s, E, h),
                ae = l(),
                L = he(),
                R = y(),
                z = d(),
                V = N(),
                ce = Ne() && R && !z && !V,
                le = re(ee),
                H = ce && !le,
                ue = (0, X.use)(gt),
                de = s?.asset_pointer ?? e,
                ye = (0, X.useCallback)(() => {
                    T != null && U.conversationImageEditButtonTapped(T), w?.()
                }, [T, w]),
                be = (0, X.useCallback)(() => Me(A, void 0, {
                    title: v(P.getMaybeMessage(k(g.id), h))
                }), [A, g.id, h]),
                xe = r(),
                Se = ge(),
                we = Se?.type === Ee.Image && Se.image.asset_pointer === e,
                [De, W] = (0, X.useState)(!1),
                Oe = ae?.hasPaidSubscription() ?? !1,
                ke = !(z && !R) && !Oe && (a || o),
                Ae = b !== !1,
                je = S && C != null,
                G = A.formatMessage($.enter360World),
                Pe = (0, X.useCallback)(async ({
                    shouldDownloadWatermark: e = !0
                } = {}) => {
                    if (!t) return null;
                    let n = t,
                        r = e && o,
                        i = e && a && s?.metadata != null ? s.metadata.watermarked_asset_pointer : void 0;
                    if (i && s) try {
                        n = (await _e.fetch(O, {
                            asset: {
                                ...s,
                                asset_pointer: i
                            },
                            conversationId: E,
                            downloadIntent: !0
                        })).url, r = !0
                    } catch {} else if (m && s) try {
                        n = (await _e.fetch(O, {
                            asset: s,
                            conversationId: E,
                            downloadIntent: !0
                        })).url, r = !1
                    } catch {}
                    return {
                        downloadedWithWatermark: r,
                        urlToDownload: n
                    }
                }, [m, s, a, t, o, O, E]),
                K = (0, X.useCallback)(async ({
                    shouldDownloadWatermark: e = !0
                } = {}) => {
                    let t = await Pe({
                        shouldDownloadWatermark: e
                    });
                    t != null && (await pe({
                        url: t.urlToDownload,
                        fileName: be(),
                        gifSource: I
                    }), U.download({
                        analyticsContext: L,
                        downloadedWithWatermark: t.downloadedWithWatermark
                    }))
                }, [L, be, I, Pe]),
                Fe = (0, X.useCallback)(() => {
                    if (te.logEvent(`chatgpt_image_watermark_download_upgrade_click`, void 0, {
                            source: `overlay`
                        }), !y()) {
                        i({
                            fallbackScreenHint: `login`,
                            skipLoginModal: !1
                        });
                        return
                    }
                    let t = s ?? (e == null ? null : {
                        asset_pointer: e,
                        content_type: f.ImageAssetPointer,
                        size_bytes: 0,
                        width: 0,
                        height: 0
                    });
                    t != null && pt({
                        asset: t,
                        conversationId: E
                    }), Ce({
                        navigate: j,
                        checkoutOriginProvenance: {
                            checkoutOriginProductExperience: Be.CHAT,
                            checkoutOriginDeliverySurface: `web`
                        },
                        openModalLocation: Ct
                    })
                }, [s, e, j, E]),
                Ie = A.formatMessage(F ? M.downloadLabel : m ? $.downloadFullSize : $.download),
                Le = t ? (0, Z.jsx)(D, {
                    label: A.formatMessage(m ? $.downloadTooltipFullSize : $.downloadTooltip),
                    children: (0, Z.jsx)(Q, {
                        icon: Y,
                        variant: `imageGenUpdates`,
                        ariaLabel: Ie,
                        onClick: bt(() => {
                            K()
                        })
                    })
                }) : null,
                q = ke && n({
                    openModalLocation: Ct
                }),
                Re = t && q ? (0, Z.jsxs)(ve, {
                    side: `bottom`,
                    sideOffset: 10,
                    size: `auto`,
                    open: De,
                    onOpenChange: W,
                    contentClassName: `pointer-events-auto z-11 min-w-fit origin-top-end text-token-text-primary`,
                    triggerButton: (0, Z.jsx)(Q, {
                        icon: Y,
                        variant: `imageGenUpdates`,
                        ariaLabel: Ie,
                        onClick: e => {
                            e.stopPropagation()
                        }
                    }),
                    children: [(0, Z.jsx)(J.Item, {
                        className: `py-2`,
                        children: (0, Z.jsxs)(`button`, {
                            type: `button`,
                            onClick: e => {
                                e.preventDefault(), e.stopPropagation(), K(), W(!1)
                            },
                            className: `row text-token-text-primary flex items-center gap-2`,
                            children: [(0, Z.jsx)(Y, {}), (0, Z.jsx)(`span`, {
                                className: `font-semibold`,
                                children: (0, Z.jsx)(B, {
                                    ...M.downloadLabel
                                })
                            })]
                        })
                    }), (0, Z.jsx)(J.Separator, {}), (0, Z.jsx)(J.Item, {
                        className: `py-2`,
                        children: (0, Z.jsxs)(`button`, {
                            type: `button`,
                            onClick: e => {
                                e.preventDefault(), e.stopPropagation(), Fe(), W(!1)
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
                Ve = q ? Re : Le,
                He = H || Ve != null,
                We = w && M.canEdit ? (0, Z.jsx)(Q, {
                    variant: `imageGenUpdates`,
                    onClick: bt(ye),
                    ariaLabel: A.formatMessage($.editImage),
                    children: (0, Z.jsx)(B, {
                        id: `imageGenActionOverlay.editButton`,
                        defaultMessage: `Edit`
                    })
                }) : null;
            return (0, Z.jsx)(Z.Fragment, {
                children: xe ? !we && (0, Z.jsx)(vt, {
                    rightAlign: !0,
                    fullWidth: !0,
                    children: (0, Z.jsx)(Q, {
                        icon: Te,
                        ariaLabel: A.formatMessage(M.expandLabel)
                    })
                }) : (0, Z.jsx)(Z.Fragment, {
                    children: (0, Z.jsx)(yt, {
                        canShowShareButton: H,
                        bottomAlign: !0,
                        rightAlign: !0,
                        fullWidth: !0,
                        alwaysVisible: Ae,
                        onOverlayVisible: je ? ne : void 0,
                        testId: `image-gen-overlay-actions`,
                        children: (0, Z.jsxs)(`div`, {
                            className: `flex w-full items-center justify-between`,
                            children: [(0, Z.jsxs)(`div`, {
                                className: `pointer-events-auto flex items-end gap-2`,
                                "data-testid": `image-gen-overlay-left-actions`,
                                children: [I && !z && !V && (0, Z.jsx)(st, {
                                    source: I,
                                    inline: !0
                                }), je ? (0, Z.jsx)(D, {
                                    label: G,
                                    children: (0, Z.jsx)(Q, {
                                        icon: Ue,
                                        variant: `imageGenUpdates`,
                                        ariaLabel: G,
                                        onClick: bt(C),
                                        children: (0, Z.jsx)(`span`, {
                                            "aria-hidden": !0,
                                            className: `ms-1.5 pe-0.5`,
                                            children: 360
                                        })
                                    })
                                }) : null, z || V ? We : (0, Z.jsx)(wt, {
                                    conversation: g,
                                    fallback: We,
                                    messageId: h
                                }), _ && !He && (0, Z.jsx)(ft, {
                                    isAnimated: F,
                                    onOpenChange: W,
                                    onDownload: () => {
                                        K()
                                    },
                                    onDownloadWithoutWatermark: q ? Fe : void 0,
                                    showWithoutWatermarkLabel: !a && !ke,
                                    triggerClassName: `pointer-events-auto z-11 flex h-10 w-10 items-center justify-center rounded-xl bg-transparent hover:bg-token-icon-surface/10 focus:bg-token-icon-surface/10 focus-visible:bg-token-icon-surface/10`,
                                    iconClassName: `icon-lg fill-transparent text-white`,
                                    dropdownClassName: `pointer-events-auto z-11 min-w-fit origin-top-end text-token-text-primary`
                                })]
                            }), (0, Z.jsxs)(`div`, {
                                className: `pointer-events-auto flex gap-2`,
                                "data-testid": `image-gen-overlay-right-actions`,
                                children: [H && de != null && ue?.({
                                    conversation: g,
                                    assetPointer: de,
                                    imageGenMessageId: h,
                                    shareFlowSource: ie
                                }), (0, Z.jsx)(xt, {
                                    canShowShareButton: H,
                                    canPublishPromptShare: c,
                                    assetPointer: e,
                                    fullSizeImageAsset: s,
                                    conversation: g,
                                    messageId: h,
                                    shareSeriesImageCount: u,
                                    shareSeriesMessageSliceIds: p,
                                    fallback: Ve,
                                    shareFlowSource: ie
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
//# sourceMappingURL=ecab41d6-dux2c0m17k9umhng.js.map