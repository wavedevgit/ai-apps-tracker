const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/c2825ab1-lypwd5n1pt7il4hk.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-bo7e0c29ngt4zgx0.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-ikg0dwuw782klweb.js", "assets/30901919-e8h11sw136qen6v0.js", "assets/c470f5ab-ab47eubabs8jspdc.js", "assets/0e5afe53-esm68l11os61djoy.js", "assets/conversation-small-oilgsqfa.css", "assets/f5cccfb7-omfq28qsvhujhxcn.js", "assets/65f98121-huzrlgb44eq2nq0o.js", "assets/0f8b28f8-gaoy0kfkunlh897t.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $i as n,
    $o as r,
    Da as i,
    Ea as a,
    Fnt as o,
    HF as s,
    Int as c,
    JJ as l,
    Met as u,
    Mz as d,
    P5 as f,
    Qi as p,
    R1 as m,
    Tet as h,
    UF as g,
    Unt as _,
    X0 as v,
    X5 as y,
    Xy as b,
    Y5 as x,
    Z0 as S,
    Z1 as C,
    Znt as w,
    Zy as T,
    _tt as E,
    aZ as D,
    as as O,
    att as ee,
    bnt as k,
    dit as A,
    fit as j,
    g8 as M,
    i0 as N,
    jet as P,
    jz as F,
    nY as I,
    r0 as L,
    rY as R,
    tZ as te,
    vnt as z,
    z1 as ne
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as B,
    Ln as V,
    N as re,
    Nn as H,
    Nt as ie,
    Q as U,
    Rn as W,
    Vn as ae,
    cn as oe,
    ln as G,
    s as se,
    wn as ce,
    zn as le
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $L as ue,
    BL as de,
    Btt as K,
    Edn as fe,
    F5 as pe,
    FHn as me,
    FR as he,
    HUn as ge,
    I5 as _e,
    IHn as q,
    L7 as ve,
    LHn as ye,
    Nl as be,
    PR as xe,
    Pl as J,
    QL as Se,
    RBn as Ce,
    Tdn as we,
    V7 as Te,
    VUn as Ee,
    Vtt as De,
    X8 as Oe,
    Y8 as ke,
    YC as Y,
    a5 as Ae,
    c5 as je,
    drn as Me,
    eR as Ne,
    ew as Pe,
    i5 as Fe,
    n5 as Ie,
    orn as Le,
    r5 as Re,
    u5 as ze,
    zBn as Be
} from "./conversation-small-ikg0dwuw782klweb.js";
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
} from "./30901919-e8h11sw136qen6v0.js";
import {
    aa as $e,
    ca as et,
    da as tt,
    fa as nt,
    ha as rt,
    oa as it,
    pa as at
} from "./8b34dbc2-dtawqv9t1aqckqj4.js";
import {
    n as ot,
    t as st
} from "./429c9f5e-jayjo26gbyyne7cf.js";
import {
    n as ct,
    r as lt
} from "./1cfd0849-cstfhrhsh5t65i40.js";
import {
    n as ut,
    r as dt,
    t as ft
} from "./97fef780-bn3a0srl5okayskg.js";
import {
    n as pt,
    t as mt
} from "./ee0eeb85-ogu5n050pym7fbik.js";
var ht, gt, _t = e((() => {
    ht = t(ae()), gt = (0, ht.createContext)(null)
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
        className: x(`pointer-events-none absolute z-2 overflow-hidden`, t ? `rounded-b-[inherit]` : `rounded-t-[inherit]`, e ? `end-0` : `start-0`, t ? `bottom-0` : `top-0`, n && `w-full`),
        children: [(0, Z.jsx)(`div`, {
            "data-testid": o,
            onTransitionEnd: l,
            className: x(t ? `bg-linear-to-b` : `bg-linear-to-t`, `from-transparent to-black/30`, `h-20 w-full transition-opacity duration-75 ease-out`, i ? `opacity-100` : `opacity-0 group-focus-within/imagegen-image:opacity-100 group-hover/imagegen-image:opacity-100 focus-within:opacity-100`)
        }), (0, Z.jsx)(`div`, {
            className: x(`absolute inset-0 flex`, c, `p-3`, t ? `items-end` : `items-start`, e ? `justify-end` : `justify-start`, r && `justify-between`),
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
            e && (r.current ||= (z.logEvent(`Share Post: Share Button Shown`, {
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
    fallback: l = null,
    shareFlowSource: u
}) {
    "use no forget";
    let [d, p] = (0, X.useState)(!1), [m, h] = (0, X.useState)(null), [g, _] = (0, X.useState)(null), v = (0, X.useRef)(!1), y = le(), b = r?.asset_pointer ?? n, x = pe({
        mimeType: r?.mime_type
    }), S = at({
        canPublishPromptShare: t,
        assetPointer: b,
        conversation: i,
        imageGenMessageId: a,
        shareFlowSource: u
    }), C = rt({
        assetPointer: b,
        conversation: i,
        imageGenMessageId: a,
        shareFlowSource: u
    }), w = (0, X.useMemo)(() => Array.from(new Set((s ?? []).filter(Boolean))), [s]), T = at({
        conversation: i,
        imageGenMessageIds: w,
        shareFlowSource: u
    }), E = rt({
        conversation: i,
        imageGenMessageIds: w,
        shareFlowSource: u
    }), D = he(), O = (o ?? 0) > 1 && w.length > 0, ee = f(() => e ? nt() : !1), k = f(() => e && t && Se()), A = de(), j = () => {
        K.imageShared({
            analyticsContext: D,
            source: `image_gen_action_overlay`
        })
    }, M = (e = `media_generation`) => {
        z.logEventWithStatsig(`chatgpt_image_lightbox_share_current_image_selected`, `chatgpt_image_lightbox_share_current_image_selected`), z.logEventWithStatsig(`Share Post: Share Button Clicked`, `chatgpt_post_share_button_clicked`, {
            source: `image_gen_action_overlay`,
            attachment_type: e,
            message_id: a
        }), j()
    }, N = () => {
        z.logEventWithStatsig(`chatgpt_image_lightbox_share_all_images_selected`, `chatgpt_image_lightbox_share_all_images_selected`), z.logEventWithStatsig(`Share Post: Share Button Clicked`, `chatgpt_post_share_button_clicked`, {
            source: `image_gen_action_overlay`,
            attachment_type: `image_series_share`
        }), j()
    }, P = async (e, t, {
        keepDropdownOpen: n = !1
    } = {}) => {
        v.current = !0, n || h(null), _(null), p(!0);
        try {
            let n = await t();
            n ? (_(n), h(e), await n.autoCopyShareLink()) : h(null)
        } finally {
            p(!1), v.current = !1
        }
    }, I = () => {
        _(null), h(null)
    }, L = async e => {
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
    }, R = async (e, {
        keepDropdownOpen: t = !1
    } = {}) => {
        if (e) {
            await P(`mini-current`, C, {
                keepDropdownOpen: t
            }), M();
            return
        }
        p(!0);
        try {
            await S()
        } finally {
            p(!1)
        }
        M()
    }, te = async (e, {
        keepDropdownOpen: t = !1
    } = {}) => {
        if (e) {
            await P(`mini-series`, E, {
                keepDropdownOpen: t
            }), N();
            return
        }
        p(!0);
        try {
            await T()
        } finally {
            p(!1)
        }
        N()
    }, ne = async () => {
        M(`prompt`), p(!0);
        try {
            await S({
                shareType: ke.PromptShare
            })
        } finally {
            p(!1)
        }
    };
    if (!e) return l;
    let B = d ? F : He,
        V = (0, Z.jsx)(Q, {
            icon: B,
            variant: `imageGenUpdates`,
            disabled: d,
            onClick: e => {
                e.stopPropagation()
            },
            ariaLabel: y.formatMessage(x.shareLabel)
        });
    return O || k ? (0, Z.jsx)(me, {
        open: m != null,
        side: m === "default" ? void 0 : `right`,
        contentAlign: m === "default" ? void 0 : `end`,
        sideOffset: 8,
        size: `auto`,
        contentClassName: m === "default" ? void 0 : A.contentClassName,
        onOpenChange: e => {
            if (!e) {
                if (v.current) return;
                I();
                return
            }
            if (_(null), h(`default`), O) {
                let e = z.logStructuredEvent(`ChatgptImageLightboxButtonTapped`, {
                    button: `CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_SHARE`,
                    legacyStatsigEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`,
                    selectionState: `CHATGPT_IMAGEGEN_SELECTION_STATE_PENDING_SELECTION`,
                    imageSeriesCount: c(o)
                });
                z.logValueEventWithStatsig({
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
        children: m === `mini-current` && g ? (0, Z.jsx)(it, {
            imageShareScope: `single_image`,
            isBusinessWorkspace: A.isBusinessWorkspace,
            isResolvingShareLink: d,
            onClose: I,
            shareActions: g
        }) : m === `mini-series` && g ? (0, Z.jsx)(it, {
            imageShareScope: `image_series`,
            isBusinessWorkspace: A.isBusinessWorkspace,
            isResolvingShareLink: d,
            onClose: I,
            shareActions: g
        }) : (0, Z.jsxs)(Z.Fragment, {
            children: [(0, Z.jsx)(q.Item, {
                icon: qe,
                onSelect: e => {
                    if (t && Ne()) {
                        R(!1);
                        return
                    }
                    if (ee) {
                        L(C).finally(M);
                        return
                    }
                    let n = tt();
                    n && e.preventDefault(), R(n, {
                        keepDropdownOpen: n
                    })
                },
                children: y.formatMessage(x.shareSelectionLabel)
            }), O && (0, Z.jsx)(q.Item, {
                icon: Ve,
                onSelect: e => {
                    if (ee) {
                        L(E).finally(N);
                        return
                    }
                    let t = tt();
                    t && e.preventDefault(), te(t, {
                        keepDropdownOpen: t
                    })
                },
                children: y.formatMessage(lt.imageSeries, {
                    imageCount: o
                })
            }), k && (0, Z.jsx)(q.Item, {
                icon: Ge,
                onSelect: () => void ne(),
                children: y.formatMessage(lt.promptTemplate)
            })]
        })
    }) : m === `mini-current` && g ? (0, Z.jsx)($e, {
        imageShareScope: `single_image`,
        isResolvingShareLink: d,
        triggerButton: V,
        onClose: I,
        shareActions: g
    }) : (0, Z.jsx)(Q, {
        icon: B,
        variant: `imageGenUpdates`,
        disabled: d,
        onClick: bt(async () => {
            if (t && Ne()) {
                await R(!1);
                return
            }
            if (ee) {
                await L(C), j();
                return
            }
            if (tt()) {
                await P(`mini-current`, C), j();
                return
            }
            p(!0);
            try {
                await S()
            } finally {
                p(!1)
            }
            K.imageShared({
                analyticsContext: D,
                source: `image_gen_action_overlay`
            })
        }),
        ariaLabel: y.formatMessage(x.shareLabel)
    })
}
var St, X, Z, Ct, wt, Q, Tt, $, Et = e((() => {
        St = ce(), R(), D(), ot(), ze(), _e(), fe(), E(), ye(), Xe(), Ye(), We(), Je(), Qe(), Ze(), T(), p(), Ee(), J(), Te(), Y(), h(), Le(), et(), ue(), O(), Oe(), s(), M(), d(), m(), L(), ct(), A(), k(), a(), Be(), w(), o(), S(), se(), y(), X = t(ae()), W(), U(), xe(), De(), _t(), Ae(), Re(), ut(), mt(), Z = B(), G(), Ct = u.ImageGenWatermarkOverflowMenu, wt = v(() => oe(() => import(`./c2825ab1-lypwd5n1pt7il4hk.js`).then(e => e.ImageGenReferenceActions), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])), {
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
            n[10] !== s || n[11] !== g || n[12] !== _ || n[13] !== v ? (y = x(`pointer-events-auto z-11 flex items-center justify-center text-sm font-medium text-white`, g, _, v, s), n[10] = s, n[11] = g, n[12] = _, n[13] = v, n[14] = y) : y = n[14];
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
            let S;
            return n[19] !== i || n[20] !== a || n[21] !== c || n[22] !== l || n[23] !== t || n[24] !== f || n[25] !== y || n[26] !== b ? (S = (0, Z.jsx)(`button`, {
                ref: t,
                type: `button`,
                "aria-pressed": f,
                className: y,
                onClick: l,
                disabled: c,
                "aria-label": i,
                ...a,
                children: b
            }), n[19] = i, n[20] = a, n[21] = c, n[22] = l, n[23] = t, n[24] = f, n[25] = y, n[26] = b, n[27] = S) : S = n[27], S
        }), Tt = ({
            imageAssetPointer: e,
            imageUrl: t,
            hasWatermarkedDownload: a = !1,
            isRenderedImageWatermarked: o = !1,
            fullSizeImageAsset: s,
            canPublishPromptShare: c = !0,
            shareSeriesImageCount: u,
            shareSeriesMessageSliceIds: d,
            downloadFullImage: p = !1,
            messageId: m,
            conversation: h,
            shouldShowOverflow: v = !1,
            alwaysVisible: y,
            shouldShow360Entrypoint: x = !1,
            on360EntrypointClick: S,
            on360EntrypointVisible: w,
            onEditClick: T,
            editButtonAnalytics: E,
            shareFlowSource: D = r.CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION
        }) => {
            "use no forget";
            let O = f(h.serverId$),
                k = re(),
                A = le(),
                M = ie(),
                F = pe({
                    mimeType: s?.mime_type
                }),
                {
                    isAnimated: L
                } = F,
                R = je(s, O, m),
                z = C(),
                B = he(),
                V = j(),
                U = i(),
                W = g(),
                ae = Pe() && V && !U && !W,
                oe = f(ne),
                G = ae && !oe,
                se = (0, X.use)(gt),
                ce = s?.asset_pointer ?? e,
                ue = (0, X.useCallback)(() => {
                    E != null && K.conversationImageEditButtonTapped(E), T?.()
                }, [E, T]),
                de = (0, X.useCallback)(() => Ie(A, void 0, {
                    title: te(l.getMaybeMessage(I(h.id), m))
                }), [A, h.id, m]),
                fe = n(),
                _e = ge(),
                ye = _e?.type === be.Image && _e.image.asset_pointer === e,
                [xe, J] = (0, X.useState)(!1),
                Se = z?.hasPaidSubscription() ?? !1,
                Te = !(U && !V) && !Se && (a || o),
                Ee = y !== !1,
                De = x && S != null,
                Oe = A.formatMessage($.enter360World),
                ke = (0, X.useCallback)(async ({
                    shouldDownloadWatermark: e = !0
                } = {}) => {
                    if (!t) return null;
                    let n = t,
                        r = e && o,
                        i = e && a && s?.metadata != null ? s.metadata.watermarked_asset_pointer : void 0;
                    if (i && s) try {
                        n = (await Ce.fetch(k, {
                            asset: {
                                ...s,
                                asset_pointer: i
                            },
                            conversationId: O,
                            downloadIntent: !0
                        })).url, r = !0
                    } catch {} else if (p && s) try {
                        n = (await Ce.fetch(k, {
                            asset: s,
                            conversationId: O,
                            downloadIntent: !0
                        })).url, r = !1
                    } catch {}
                    return {
                        downloadedWithWatermark: r,
                        urlToDownload: n
                    }
                }, [p, s, a, t, o, k, O]),
                Y = (0, X.useCallback)(async ({
                    shouldDownloadWatermark: e = !0
                } = {}) => {
                    let t = await ke({
                        shouldDownloadWatermark: e
                    });
                    t != null && (await Fe({
                        url: t.urlToDownload,
                        fileName: de(),
                        gifSource: R
                    }), K.download({
                        analyticsContext: B,
                        downloadedWithWatermark: t.downloadedWithWatermark
                    }))
                }, [B, de, R, ke]),
                Ae = (0, X.useCallback)(() => {
                    if (_.logEvent(`chatgpt_image_watermark_download_upgrade_click`, void 0, {
                            source: `overlay`
                        }), !j()) {
                        N({
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
                        conversationId: O
                    }), Me({
                        navigate: M,
                        checkoutOriginProvenance: {
                            checkoutOriginProductExperience: we.CHAT,
                            checkoutOriginDeliverySurface: `web`
                        },
                        openModalLocation: Ct
                    })
                }, [s, e, M, O]),
                Ne = A.formatMessage(L ? F.downloadLabel : p ? $.downloadFullSize : $.download),
                Le = t ? (0, Z.jsx)(b, {
                    label: A.formatMessage(p ? $.downloadTooltipFullSize : $.downloadTooltip),
                    children: (0, Z.jsx)(Q, {
                        icon: Ue,
                        variant: `imageGenUpdates`,
                        ariaLabel: Ne,
                        onClick: bt(() => {
                            Y()
                        })
                    })
                }) : null,
                Re = Te && P({
                    openModalLocation: Ct
                }),
                ze = t && Re ? (0, Z.jsxs)(me, {
                    side: `bottom`,
                    sideOffset: 10,
                    size: `auto`,
                    open: xe,
                    onOpenChange: J,
                    contentClassName: `pointer-events-auto z-11 min-w-fit origin-top-end text-token-text-primary`,
                    triggerButton: (0, Z.jsx)(Q, {
                        icon: Ue,
                        variant: `imageGenUpdates`,
                        ariaLabel: Ne,
                        onClick: e => {
                            e.stopPropagation()
                        }
                    }),
                    children: [(0, Z.jsx)(q.Item, {
                        className: `py-2`,
                        children: (0, Z.jsxs)(`button`, {
                            type: `button`,
                            onClick: e => {
                                e.preventDefault(), e.stopPropagation(), Y(), J(!1)
                            },
                            className: `row text-token-text-primary flex items-center gap-2`,
                            children: [(0, Z.jsx)(Ue, {}), (0, Z.jsx)(`span`, {
                                className: `font-semibold`,
                                children: (0, Z.jsx)(H, {
                                    ...F.downloadLabel
                                })
                            })]
                        })
                    }), (0, Z.jsx)(q.Separator, {}), (0, Z.jsx)(q.Item, {
                        className: `py-2`,
                        children: (0, Z.jsxs)(`button`, {
                            type: `button`,
                            onClick: e => {
                                e.preventDefault(), e.stopPropagation(), Ae(), J(!1)
                            },
                            className: `row text-token-text-primary flex items-center gap-2`,
                            children: [(0, Z.jsx)(Ue, {}), (0, Z.jsxs)(`div`, {
                                className: `flex flex-col items-start`,
                                children: [(0, Z.jsx)(`span`, {
                                    className: `font-semibold`,
                                    children: (0, Z.jsx)(H, {
                                        ...dt.downloadWithoutLogo
                                    })
                                }), (0, Z.jsx)(`span`, {
                                    className: `text-token-text-secondary`,
                                    children: (0, Z.jsx)(H, {
                                        ...dt.upgradePlan
                                    })
                                })]
                            })]
                        })
                    })]
                }) : null,
                Be = Re ? ze : Le,
                Ve = G || Be != null,
                He = T && F.canEdit ? (0, Z.jsx)(Q, {
                    variant: `imageGenUpdates`,
                    onClick: bt(ue),
                    ariaLabel: A.formatMessage($.editImage),
                    children: (0, Z.jsx)(H, {
                        id: `imageGenActionOverlay.editButton`,
                        defaultMessage: `Edit`
                    })
                }) : null;
            return (0, Z.jsx)(Z.Fragment, {
                children: fe ? !ye && (0, Z.jsx)(vt, {
                    rightAlign: !0,
                    fullWidth: !0,
                    children: (0, Z.jsx)(Q, {
                        icon: ve,
                        ariaLabel: A.formatMessage(F.expandLabel)
                    })
                }) : (0, Z.jsx)(Z.Fragment, {
                    children: (0, Z.jsx)(yt, {
                        canShowShareButton: G,
                        bottomAlign: !0,
                        rightAlign: !0,
                        fullWidth: !0,
                        alwaysVisible: Ee,
                        onOverlayVisible: De ? w : void 0,
                        testId: `image-gen-overlay-actions`,
                        children: (0, Z.jsxs)(`div`, {
                            className: `flex w-full items-center justify-between`,
                            children: [(0, Z.jsxs)(`div`, {
                                className: `pointer-events-auto flex items-end gap-2`,
                                "data-testid": `image-gen-overlay-left-actions`,
                                children: [R && !U && !W && (0, Z.jsx)(st, {
                                    source: R,
                                    inline: !0
                                }), De ? (0, Z.jsx)(b, {
                                    label: Oe,
                                    children: (0, Z.jsx)(Q, {
                                        icon: Ke,
                                        variant: `imageGenUpdates`,
                                        ariaLabel: Oe,
                                        onClick: bt(S),
                                        children: (0, Z.jsx)(`span`, {
                                            "aria-hidden": !0,
                                            className: `ms-1.5 pe-0.5`,
                                            children: 360
                                        })
                                    })
                                }) : null, U || W ? He : (0, Z.jsx)(wt, {
                                    conversation: h,
                                    fallback: He,
                                    messageId: m
                                }), v && !Ve && (0, Z.jsx)(ft, {
                                    isAnimated: L,
                                    onOpenChange: J,
                                    onDownload: () => {
                                        Y()
                                    },
                                    onDownloadWithoutWatermark: Re ? Ae : void 0,
                                    showWithoutWatermarkLabel: !a && !Te,
                                    triggerClassName: `pointer-events-auto z-11 flex h-10 w-10 items-center justify-center rounded-xl bg-transparent hover:bg-token-icon-surface/10 focus:bg-token-icon-surface/10 focus-visible:bg-token-icon-surface/10`,
                                    iconClassName: `icon-lg fill-transparent text-white`,
                                    dropdownClassName: `pointer-events-auto z-11 min-w-fit origin-top-end text-token-text-primary`
                                })]
                            }), (0, Z.jsxs)(`div`, {
                                className: `pointer-events-auto flex gap-2`,
                                "data-testid": `image-gen-overlay-right-actions`,
                                children: [G && ce != null && se?.({
                                    conversation: h,
                                    assetPointer: ce,
                                    imageGenMessageId: m,
                                    shareFlowSource: D
                                }), (0, Z.jsx)(xt, {
                                    canShowShareButton: G,
                                    canPublishPromptShare: c,
                                    assetPointer: e,
                                    fullSizeImageAsset: s,
                                    conversation: h,
                                    messageId: m,
                                    shareSeriesImageCount: u,
                                    shareSeriesMessageSliceIds: d,
                                    fallback: Be,
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
//# sourceMappingURL=ecab41d6-ecd3t6qfb6ii0cw9.js.map