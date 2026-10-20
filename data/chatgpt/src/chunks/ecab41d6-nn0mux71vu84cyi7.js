const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/c2825ab1-bkcslfyiqosdrqe9.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-ed29bs6yiwucn7st.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/conversation-small-l6tnsr2xfn2d55kk.js", "assets/30901919-om7b3qf5hp4j9x4l.js", "assets/c470f5ab-d0jxi6yggehv1yt2.js", "assets/0e5afe53-goyw8fd3qndq8rq5.js", "assets/conversation-small-ixfdle4i.css", "assets/f5cccfb7-kismu693jk268w4g.js", "assets/65f98121-eo8c4clxcdx6zd4e.js", "assets/0f8b28f8-j5ug7fnmndk49zcq.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $i as n,
    A5 as r,
    Ant as i,
    Az as a,
    Da as o,
    Det as s,
    Ea as c,
    Eet as l,
    G5 as u,
    HF as d,
    I1 as f,
    J0 as p,
    K5 as m,
    Knt as h,
    L1 as g,
    Qi as _,
    Qo as v,
    Rnt as y,
    VF as b,
    Xy as x,
    Y0 as S,
    Y1 as C,
    Yy as w,
    bet as ee,
    eZ as te,
    ett as ne,
    f8 as T,
    ftt as E,
    hnt as D,
    iZ as O,
    is as k,
    jnt as A,
    jz as j,
    n0 as M,
    nY as N,
    oit as P,
    pnt as F,
    qJ as I,
    sit as L,
    t0 as re,
    tY as ie
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    $ as R,
    Bn as z,
    Ln as B,
    N as ae,
    Nn as V,
    Pt as oe,
    Rn as H,
    Vn as se,
    cn as ce,
    ln as U,
    s as le,
    wn as ue,
    zn as de
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $8 as fe,
    $C as pe,
    BBn as me,
    Ftt as W,
    HUn as he,
    IHn as ge,
    Itt as _e,
    JC as ve,
    K8 as ye,
    LHn as G,
    LL as be,
    M5 as xe,
    MR as Se,
    Ml as Ce,
    N5 as K,
    Nl as we,
    P7 as Te,
    R7 as Ee,
    RHn as De,
    UUn as Oe,
    XL as ke,
    YL as Ae,
    ZL as q,
    a5 as je,
    bdn as Me,
    e5 as J,
    jR as Ne,
    n5 as Pe,
    orn as Fe,
    q8 as Ie,
    s5 as Y,
    t5 as Le,
    trn as Re,
    xdn as ze,
    zBn as Be
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
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
} from "./30901919-om7b3qf5hp4j9x4l.js";
import {
    aa as $e,
    ca as et,
    da as tt,
    fa as nt,
    ha as rt,
    oa as it,
    pa as at
} from "./8b34dbc2-j8rcexxiltkm8ucr.js";
import {
    n as ot,
    t as st
} from "./429c9f5e-jy1skaj3v66kv0xk.js";
import {
    n as ct,
    r as lt
} from "./1cfd0849-imc3cbc63gs1fvh6.js";
import {
    n as ut,
    r as dt,
    t as ft
} from "./97fef780-nd1ra4bu52pd1ujp.js";
import {
    n as pt,
    t as mt
} from "./ee0eeb85-cyaek5u5purl3lf2.js";
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
        className: u(`pointer-events-none absolute z-2 overflow-hidden`, t ? `rounded-b-[inherit]` : `rounded-t-[inherit]`, e ? `end-0` : `start-0`, t ? `bottom-0` : `top-0`, n && `w-full`),
        children: [(0, Z.jsx)(`div`, {
            "data-testid": o,
            onTransitionEnd: l,
            className: u(t ? `bg-linear-to-b` : `bg-linear-to-t`, `from-transparent to-black/30`, `h-20 w-full transition-opacity duration-75 ease-out`, i ? `opacity-100` : `opacity-0 group-focus-within/imagegen-image:opacity-100 group-hover/imagegen-image:opacity-100 focus-within:opacity-100`)
        }), (0, Z.jsx)(`div`, {
            className: u(`absolute inset-0 flex`, c, `p-3`, t ? `items-end` : `items-start`, e ? `justify-end` : `justify-start`, r && `justify-between`),
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
            e && (r.current ||= (F.logEvent(`Share Post: Share Button Shown`, {
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
    conversation: o,
    messageId: s,
    shareSeriesImageCount: c,
    shareSeriesMessageSliceIds: l,
    fallback: u = null,
    shareFlowSource: d
}) {
    "use no forget";
    let [f, p] = (0, X.useState)(!1), [m, h] = (0, X.useState)(null), [g, _] = (0, X.useState)(null), v = (0, X.useRef)(!1), y = de(), b = i?.asset_pointer ?? n, x = xe({
        mimeType: i?.mime_type
    }), S = at({
        canPublishPromptShare: t,
        assetPointer: b,
        conversation: o,
        imageGenMessageId: s,
        shareFlowSource: d
    }), C = rt({
        assetPointer: b,
        conversation: o,
        imageGenMessageId: s,
        shareFlowSource: d
    }), w = (0, X.useMemo)(() => Array.from(new Set((l ?? []).filter(Boolean))), [l]), ee = at({
        conversation: o,
        imageGenMessageIds: w,
        shareFlowSource: d
    }), te = rt({
        conversation: o,
        imageGenMessageIds: w,
        shareFlowSource: d
    }), ne = Se(), T = (c ?? 0) > 1 && w.length > 0, E = r(() => e ? nt() : !1), D = r(() => e && t && Ae()), O = be(), k = () => {
        W.imageShared({
            analyticsContext: ne,
            source: `image_gen_action_overlay`
        })
    }, j = (e = `media_generation`) => {
        F.logEventWithStatsig(`chatgpt_image_lightbox_share_current_image_selected`, `chatgpt_image_lightbox_share_current_image_selected`), F.logEventWithStatsig(`Share Post: Share Button Clicked`, `chatgpt_post_share_button_clicked`, {
            source: `image_gen_action_overlay`,
            attachment_type: e,
            message_id: s
        }), k()
    }, M = () => {
        F.logEventWithStatsig(`chatgpt_image_lightbox_share_all_images_selected`, `chatgpt_image_lightbox_share_all_images_selected`), F.logEventWithStatsig(`Share Post: Share Button Clicked`, `chatgpt_post_share_button_clicked`, {
            source: `image_gen_action_overlay`,
            attachment_type: `image_series_share`
        }), k()
    }, N = async (e, t, {
        keepDropdownOpen: n = !1
    } = {}) => {
        v.current = !0, n || h(null), _(null), p(!0);
        try {
            let n = await t();
            n ? (_(n), h(e), await n.autoCopyShareLink()) : h(null)
        } finally {
            p(!1), v.current = !1
        }
    }, P = () => {
        _(null), h(null)
    }, I = async e => {
        h(null), _(null), p(!0);
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
            await N(`mini-current`, C, {
                keepDropdownOpen: t
            }), j();
            return
        }
        p(!0);
        try {
            await S()
        } finally {
            p(!1)
        }
        j()
    }, re = async (e, {
        keepDropdownOpen: t = !1
    } = {}) => {
        if (e) {
            await N(`mini-series`, te, {
                keepDropdownOpen: t
            }), M();
            return
        }
        p(!0);
        try {
            await ee()
        } finally {
            p(!1)
        }
        M()
    }, ie = async () => {
        j(`prompt`), p(!0);
        try {
            await S({
                shareType: ye.PromptShare
            })
        } finally {
            p(!1)
        }
    };
    if (!e) return u;
    let R = f ? a : He,
        z = (0, Z.jsx)(Q, {
            icon: R,
            variant: `imageGenUpdates`,
            disabled: f,
            onClick: e => {
                e.stopPropagation()
            },
            ariaLabel: y.formatMessage(x.shareLabel)
        });
    return T || D ? (0, Z.jsx)(ge, {
        open: m != null,
        side: m === "default" ? void 0 : `right`,
        contentAlign: m === "default" ? void 0 : `end`,
        sideOffset: 8,
        size: `auto`,
        contentClassName: m === "default" ? void 0 : O.contentClassName,
        onOpenChange: e => {
            if (!e) {
                if (v.current) return;
                P();
                return
            }
            if (_(null), h(`default`), T) {
                let e = F.logStructuredEvent(`ChatgptImageLightboxButtonTapped`, {
                    button: `CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_SHARE`,
                    legacyStatsigEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`,
                    selectionState: `CHATGPT_IMAGEGEN_SELECTION_STATE_PENDING_SELECTION`,
                    imageSeriesCount: A(c)
                });
                F.logValueEventWithStatsig({
                    segmentEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`,
                    statsigEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`,
                    data: {
                        selection_state: `pending_selection`,
                        image_series_count: c
                    },
                    eventId: e
                })
            }
        },
        triggerButton: z,
        children: m === `mini-current` && g ? (0, Z.jsx)(it, {
            imageShareScope: `single_image`,
            isBusinessWorkspace: O.isBusinessWorkspace,
            isResolvingShareLink: f,
            onClose: P,
            shareActions: g
        }) : m === `mini-series` && g ? (0, Z.jsx)(it, {
            imageShareScope: `image_series`,
            isBusinessWorkspace: O.isBusinessWorkspace,
            isResolvingShareLink: f,
            onClose: P,
            shareActions: g
        }) : (0, Z.jsxs)(Z.Fragment, {
            children: [(0, Z.jsx)(G.Item, {
                icon: qe,
                onSelect: e => {
                    if (t && q()) {
                        L(!1);
                        return
                    }
                    if (E) {
                        I(C).finally(j);
                        return
                    }
                    let n = tt();
                    n && e.preventDefault(), L(n, {
                        keepDropdownOpen: n
                    })
                },
                children: y.formatMessage(x.shareSelectionLabel)
            }), T && (0, Z.jsx)(G.Item, {
                icon: Ve,
                onSelect: e => {
                    if (E) {
                        I(te).finally(M);
                        return
                    }
                    let t = tt();
                    t && e.preventDefault(), re(t, {
                        keepDropdownOpen: t
                    })
                },
                children: y.formatMessage(lt.imageSeries, {
                    imageCount: c
                })
            }), D && (0, Z.jsx)(G.Item, {
                icon: Ge,
                onSelect: () => void ie(),
                children: y.formatMessage(lt.promptTemplate)
            })]
        })
    }) : m === `mini-current` && g ? (0, Z.jsx)($e, {
        imageShareScope: `single_image`,
        isResolvingShareLink: f,
        triggerButton: z,
        onClose: P,
        shareActions: g
    }) : (0, Z.jsx)(Q, {
        icon: R,
        variant: `imageGenUpdates`,
        disabled: f,
        onClick: bt(async () => {
            if (t && q()) {
                await L(!1);
                return
            }
            if (E) {
                await I(C), k();
                return
            }
            if (tt()) {
                await N(`mini-current`, C), k();
                return
            }
            p(!0);
            try {
                await S()
            } finally {
                p(!1)
            }
            W.imageShared({
                analyticsContext: ne,
                source: `image_gen_action_overlay`
            })
        }),
        ariaLabel: y.formatMessage(x.shareLabel)
    })
}
var St, X, Z, Ct, wt, Q, Tt, $, Et = e((() => {
        St = ue(), N(), O(), ot(), Y(), K(), ze(), E(), De(), Xe(), Ye(), We(), Je(), Qe(), Ze(), x(), _(), he(), we(), Ee(), ve(), ee(), Re(), et(), ke(), k(), Ie(), b(), T(), j(), f(), re(), ct(), P(), D(), c(), me(), h(), i(), S(), le(), m(), X = t(se()), H(), R(), Ne(), _e(), _t(), Pe(), J(), ut(), mt(), Z = z(), U(), Ct = s.ImageGenWatermarkOverflowMenu, wt = p(() => ce(() => import(`./c2825ab1-bkcslfyiqosdrqe9.js`).then(e => e.ImageGenReferenceActions), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])), {
            loading: ({
                fallback: e
            }) => e,
            fallback: ({
                fallback: e
            }) => e
        }), Q = (0, X.forwardRef)(function(e, t) {
            "use forget";
            let n = (0, St.c)(28),
                r, i, a, o, s, c, l, d, f;
            n[0] === e ? (r = n[1], i = n[2], a = n[3], o = n[4], s = n[5], c = n[6], l = n[7], d = n[8], f = n[9]) : ({
                icon: r,
                children: o,
                className: s,
                disabled: c,
                onClick: l,
                ariaLabel: i,
                selected: d,
                variant: f,
                ...a
            } = e, n[0] = e, n[1] = r, n[2] = i, n[3] = a, n[4] = o, n[5] = s, n[6] = c, n[7] = l, n[8] = d, n[9] = f);
            let p = d !== void 0 && d,
                m = (f === void 0 ? `default` : f) === `imageGenUpdates`,
                h = o == null,
                g = m && h,
                _ = g && `group`,
                v = m ? h ? `h-10 w-10` : `h-10 gap-0 rounded-full bg-black/15 px-3 backdrop-blur-md hover:bg-black/30 focus:bg-black/30` : `gap-1 rounded-xl hover:bg-white/15 hover:backdrop-blur-md focus:bg-white/15 focus:backdrop-blur-md`,
                y = !m && (h ? `h-10 w-10` : `h-10 px-2`),
                b;
            n[10] !== s || n[11] !== _ || n[12] !== v || n[13] !== y ? (b = u(`pointer-events-auto z-11 flex items-center justify-center text-sm font-medium text-white`, _, v, y, s), n[10] = s, n[11] = _, n[12] = v, n[13] = y, n[14] = b) : b = n[14];
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
            hasWatermarkedDownload: i = !1,
            isRenderedImageWatermarked: a = !1,
            fullSizeImageAsset: s,
            canPublishPromptShare: c = !0,
            shareSeriesImageCount: u,
            shareSeriesMessageSliceIds: f,
            downloadFullImage: p = !1,
            messageId: m,
            conversation: h,
            shouldShowOverflow: _ = !1,
            alwaysVisible: b,
            shouldShow360Entrypoint: x = !1,
            on360EntrypointClick: S,
            on360EntrypointVisible: ee,
            onEditClick: T,
            editButtonAnalytics: E,
            shareFlowSource: D = v.CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION
        }) => {
            "use no forget";
            let O = r(h.serverId$),
                k = ae(),
                A = de(),
                j = oe(),
                N = xe({
                    mimeType: s?.mime_type
                }),
                {
                    isAnimated: P
                } = N,
                F = je(s, O, m),
                re = C(),
                R = Se(),
                z = L(),
                B = o(),
                H = d(),
                se = pe() && z && !B && !H,
                ce = r(g),
                U = se && !ce,
                le = (0, X.use)(gt),
                ue = s?.asset_pointer ?? e,
                me = (0, X.useCallback)(() => {
                    E != null && W.conversationImageEditButtonTapped(E), T?.()
                }, [E, T]),
                he = (0, X.useCallback)(() => fe(A, void 0, {
                    title: te(I.getMaybeMessage(ie(h.id), m))
                }), [A, h.id, m]),
                _e = n(),
                ve = Oe(),
                ye = ve?.type === Ce.Image && ve.image.asset_pointer === e,
                [be, K] = (0, X.useState)(!1),
                we = re?.hasPaidSubscription() ?? !1,
                Ee = !(B && !z) && !we && (i || a),
                De = b !== !1,
                ke = x && S != null,
                Ae = A.formatMessage($.enter360World),
                q = (0, X.useCallback)(async ({
                    shouldDownloadWatermark: e = !0
                } = {}) => {
                    if (!t) return null;
                    let n = t,
                        r = e && a,
                        o = e && i && s?.metadata != null ? s.metadata.watermarked_asset_pointer : void 0;
                    if (o && s) try {
                        n = (await Be.fetch(k, {
                            asset: {
                                ...s,
                                asset_pointer: o
                            },
                            conversationId: O,
                            downloadIntent: !0
                        })).url, r = !0
                    } catch {} else if (p && s) try {
                        n = (await Be.fetch(k, {
                            asset: s,
                            conversationId: O,
                            downloadIntent: !0
                        })).url, r = !1
                    } catch {}
                    return {
                        downloadedWithWatermark: r,
                        urlToDownload: n
                    }
                }, [p, s, i, t, a, k, O]),
                J = (0, X.useCallback)(async ({
                    shouldDownloadWatermark: e = !0
                } = {}) => {
                    let t = await q({
                        shouldDownloadWatermark: e
                    });
                    t != null && (await Le({
                        url: t.urlToDownload,
                        fileName: he(),
                        gifSource: F
                    }), W.download({
                        analyticsContext: R,
                        downloadedWithWatermark: t.downloadedWithWatermark
                    }))
                }, [R, he, F, q]),
                Ne = (0, X.useCallback)(() => {
                    if (y.logEvent(`chatgpt_image_watermark_download_upgrade_click`, void 0, {
                            source: `overlay`
                        }), !L()) {
                        M({
                            fallbackScreenHint: `login`,
                            skipLoginModal: !1
                        });
                        return
                    }
                    let t = s ?? (e == null ? null : {
                        asset_pointer: e,
                        content_type: ne.ImageAssetPointer,
                        size_bytes: 0,
                        width: 0,
                        height: 0
                    });
                    t != null && pt({
                        asset: t,
                        conversationId: O
                    }), Fe({
                        navigate: j,
                        checkoutOriginProvenance: {
                            checkoutOriginProductExperience: Me.CHAT,
                            checkoutOriginDeliverySurface: `web`
                        },
                        openModalLocation: Ct
                    })
                }, [s, e, j, O]),
                Pe = A.formatMessage(P ? N.downloadLabel : p ? $.downloadFullSize : $.download),
                Ie = t ? (0, Z.jsx)(w, {
                    label: A.formatMessage(p ? $.downloadTooltipFullSize : $.downloadTooltip),
                    children: (0, Z.jsx)(Q, {
                        icon: Ue,
                        variant: `imageGenUpdates`,
                        ariaLabel: Pe,
                        onClick: bt(() => {
                            J()
                        })
                    })
                }) : null,
                Y = Ee && l({
                    openModalLocation: Ct
                }),
                Re = t && Y ? (0, Z.jsxs)(ge, {
                    side: `bottom`,
                    sideOffset: 10,
                    size: `auto`,
                    open: be,
                    onOpenChange: K,
                    contentClassName: `pointer-events-auto z-11 min-w-fit origin-top-end text-token-text-primary`,
                    triggerButton: (0, Z.jsx)(Q, {
                        icon: Ue,
                        variant: `imageGenUpdates`,
                        ariaLabel: Pe,
                        onClick: e => {
                            e.stopPropagation()
                        }
                    }),
                    children: [(0, Z.jsx)(G.Item, {
                        className: `py-2`,
                        children: (0, Z.jsxs)(`button`, {
                            type: `button`,
                            onClick: e => {
                                e.preventDefault(), e.stopPropagation(), J(), K(!1)
                            },
                            className: `row text-token-text-primary flex items-center gap-2`,
                            children: [(0, Z.jsx)(Ue, {}), (0, Z.jsx)(`span`, {
                                className: `font-semibold`,
                                children: (0, Z.jsx)(V, {
                                    ...N.downloadLabel
                                })
                            })]
                        })
                    }), (0, Z.jsx)(G.Separator, {}), (0, Z.jsx)(G.Item, {
                        className: `py-2`,
                        children: (0, Z.jsxs)(`button`, {
                            type: `button`,
                            onClick: e => {
                                e.preventDefault(), e.stopPropagation(), Ne(), K(!1)
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
                ze = Y ? Re : Ie,
                Ve = U || ze != null,
                He = T && N.canEdit ? (0, Z.jsx)(Q, {
                    variant: `imageGenUpdates`,
                    onClick: bt(me),
                    ariaLabel: A.formatMessage($.editImage),
                    children: (0, Z.jsx)(V, {
                        id: `imageGenActionOverlay.editButton`,
                        defaultMessage: `Edit`
                    })
                }) : null;
            return (0, Z.jsx)(Z.Fragment, {
                children: _e ? !ye && (0, Z.jsx)(vt, {
                    rightAlign: !0,
                    fullWidth: !0,
                    children: (0, Z.jsx)(Q, {
                        icon: Te,
                        ariaLabel: A.formatMessage(N.expandLabel)
                    })
                }) : (0, Z.jsx)(Z.Fragment, {
                    children: (0, Z.jsx)(yt, {
                        canShowShareButton: U,
                        bottomAlign: !0,
                        rightAlign: !0,
                        fullWidth: !0,
                        alwaysVisible: De,
                        onOverlayVisible: ke ? ee : void 0,
                        testId: `image-gen-overlay-actions`,
                        children: (0, Z.jsxs)(`div`, {
                            className: `flex w-full items-center justify-between`,
                            children: [(0, Z.jsxs)(`div`, {
                                className: `pointer-events-auto flex items-end gap-2`,
                                "data-testid": `image-gen-overlay-left-actions`,
                                children: [F && !B && !H && (0, Z.jsx)(st, {
                                    source: F,
                                    inline: !0
                                }), ke ? (0, Z.jsx)(w, {
                                    label: Ae,
                                    children: (0, Z.jsx)(Q, {
                                        icon: Ke,
                                        variant: `imageGenUpdates`,
                                        ariaLabel: Ae,
                                        onClick: bt(S),
                                        children: (0, Z.jsx)(`span`, {
                                            "aria-hidden": !0,
                                            className: `ms-1.5 pe-0.5`,
                                            children: 360
                                        })
                                    })
                                }) : null, B || H ? He : (0, Z.jsx)(wt, {
                                    conversation: h,
                                    fallback: He,
                                    messageId: m
                                }), _ && !Ve && (0, Z.jsx)(ft, {
                                    isAnimated: P,
                                    onOpenChange: K,
                                    onDownload: () => {
                                        J()
                                    },
                                    onDownloadWithoutWatermark: Y ? Ne : void 0,
                                    showWithoutWatermarkLabel: !i && !Ee,
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
                                    shareFlowSource: D
                                }), (0, Z.jsx)(xt, {
                                    canShowShareButton: U,
                                    canPublishPromptShare: c,
                                    assetPointer: e,
                                    fullSizeImageAsset: s,
                                    conversation: h,
                                    messageId: m,
                                    shareSeriesImageCount: u,
                                    shareSeriesMessageSliceIds: f,
                                    fallback: ze,
                                    shareFlowSource: D
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
//# sourceMappingURL=ecab41d6-nn0mux71vu84cyi7.js.map