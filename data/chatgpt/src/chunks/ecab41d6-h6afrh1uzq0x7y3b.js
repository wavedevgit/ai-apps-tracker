const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/c2825ab1-o7o1oqe4fv6d1yi3.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-i89nb6zlze66idsz.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-fh0oqifngkf5rvl1.js", "assets/30901919-cmi3nh547dwrqkxv.js", "assets/c470f5ab-ctk9cdujw17c2exz.js", "assets/0e5afe53-fofrudqqfgiodxgc.js", "assets/conversation-small-7l2sfhqg.css", "assets/f5cccfb7-omfq28qsvhujhxcn.js", "assets/65f98121-jnt2tw0p2yupszka.js", "assets/0f8b28f8-knse9yp2mroubb6c.js"]))) => i.map(i => d[i]);
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
    p0 as N,
    q1 as P,
    qF as F,
    qet as I,
    trt as L,
    u7 as R,
    znt as z,
    zz as ne
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    Bn as B,
    Ln as V,
    N as re,
    Nn as ie,
    Nt as ae,
    Q as H,
    Rn as oe,
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
    CVn as me,
    DWn as he,
    EWn as ge,
    Ftt as _e,
    Hdn as ve,
    IL as ye,
    JL as W,
    N7 as be,
    Nl as xe,
    Pl as Se,
    Ptt as G,
    Q8 as Ce,
    SUn as we,
    Vdn as Te,
    XL as K,
    YC as Ee,
    YL as q,
    a5 as De,
    bUn as Oe,
    brn as ke,
    c5 as Ae,
    d5 as je,
    ew as Me,
    hrn as Ne,
    jR as Pe,
    k7 as Fe,
    o5 as Ie,
    opn as Le,
    p5 as J,
    s5 as Re,
    spn as ze,
    wVn as Be,
    xUn as Y
} from "./conversation-small-fh0oqifngkf5rvl1.js";
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
} from "./30901919-cmi3nh547dwrqkxv.js";
import {
    aa as $e,
    ca as et,
    da as tt,
    fa as nt,
    ha as rt,
    oa as it,
    pa as at
} from "./8b34dbc2-peb5nzi8z3rrflnv.js";
import {
    n as ot,
    t as st
} from "./429c9f5e-hbd17wa3036jz731.js";
import {
    n as ct,
    r as lt
} from "./1cfd0849-o6ezixod8nddtktn.js";
import {
    n as ut,
    r as dt,
    t as ft
} from "./97fef780-fgwfpxa3qv4htigk.js";
import {
    n as pt,
    t as mt
} from "./ee0eeb85-b2k9oblldj3ey51g.js";
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
        i = Pe(),
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
    let [d, f] = (0, X.useState)(!1), [m, h] = (0, X.useState)(null), [g, _] = (0, X.useState)(null), y = (0, X.useRef)(!1), b = de(), x = r?.asset_pointer ?? n, S = Le({
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
    }), te = Pe(), D = (o ?? 0) > 1 && T.length > 0, O = u(() => e ? nt() : !1), k = u(() => e && t && W()), A = ye(), j = () => {
        G.imageShared({
            analyticsContext: te,
            source: `image_gen_action_overlay`
        })
    }, M = (e = `media_generation`) => {
        p.logEventWithStatsig(`chatgpt_image_lightbox_share_current_image_selected`, `chatgpt_image_lightbox_share_current_image_selected`), p.logEventWithStatsig(`Share Post: Share Button Clicked`, `chatgpt_post_share_button_clicked`, {
            source: `image_gen_action_overlay`,
            attachment_type: e,
            message_id: a
        }), j()
    }, N = () => {
        p.logEventWithStatsig(`chatgpt_image_lightbox_share_all_images_selected`, `chatgpt_image_lightbox_share_all_images_selected`), p.logEventWithStatsig(`Share Post: Share Button Clicked`, `chatgpt_post_share_button_clicked`, {
            source: `image_gen_action_overlay`,
            attachment_type: `image_series_share`
        }), j()
    }, P = async (e, t, {
        keepDropdownOpen: n = !1
    } = {}) => {
        y.current = !0, n || h(null), _(null), f(!0);
        try {
            let n = await t();
            n ? (_(n), h(e), await n.autoCopyShareLink()) : h(null)
        } finally {
            f(!1), y.current = !1
        }
    }, F = () => {
        _(null), h(null)
    }, I = async e => {
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
    }, R = async (e, {
        keepDropdownOpen: t = !1
    } = {}) => {
        if (e) {
            await P(`mini-current`, w, {
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
    }, z = async (e, {
        keepDropdownOpen: t = !1
    } = {}) => {
        if (e) {
            await P(`mini-series`, E, {
                keepDropdownOpen: t
            }), N();
            return
        }
        f(!0);
        try {
            await ee()
        } finally {
            f(!1)
        }
        N()
    }, ne = async () => {
        M(`prompt`), f(!0);
        try {
            await C({
                shareType: Ce.PromptShare
            })
        } finally {
            f(!1)
        }
    };
    if (!e) return c;
    let B = d ? v : He,
        V = (0, Z.jsx)(Q, {
            icon: B,
            variant: `imageGenUpdates`,
            disabled: d,
            onClick: e => {
                e.stopPropagation()
            },
            ariaLabel: b.formatMessage(S.shareLabel)
        });
    return D || k ? (0, Z.jsx)(Oe, {
        open: m != null,
        side: m === "default" ? void 0 : `right`,
        contentAlign: m === "default" ? void 0 : `end`,
        sideOffset: 8,
        size: `auto`,
        contentClassName: m === "default" ? void 0 : A.contentClassName,
        onOpenChange: e => {
            if (!e) {
                if (y.current) return;
                F();
                return
            }
            if (_(null), h(`default`), D) {
                let e = p.logStructuredEvent(`ChatgptImageLightboxButtonTapped`, {
                    button: `CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_SHARE`,
                    legacyStatsigEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`,
                    selectionState: `CHATGPT_IMAGEGEN_SELECTION_STATE_PENDING_SELECTION`,
                    imageSeriesCount: L(o)
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
        triggerButton: V,
        children: m === `mini-current` && g ? (0, Z.jsx)(it, {
            imageShareScope: `single_image`,
            isBusinessWorkspace: A.isBusinessWorkspace,
            isResolvingShareLink: d,
            onClose: F,
            shareActions: g
        }) : m === `mini-series` && g ? (0, Z.jsx)(it, {
            imageShareScope: `image_series`,
            isBusinessWorkspace: A.isBusinessWorkspace,
            isResolvingShareLink: d,
            onClose: F,
            shareActions: g
        }) : (0, Z.jsxs)(Z.Fragment, {
            children: [(0, Z.jsx)(Y.Item, {
                icon: qe,
                onSelect: e => {
                    if (t && K()) {
                        R(!1);
                        return
                    }
                    if (O) {
                        I(w).finally(M);
                        return
                    }
                    let n = tt();
                    n && e.preventDefault(), R(n, {
                        keepDropdownOpen: n
                    })
                },
                children: b.formatMessage(S.shareSelectionLabel)
            }), D && (0, Z.jsx)(Y.Item, {
                icon: Ve,
                onSelect: e => {
                    if (O) {
                        I(E).finally(N);
                        return
                    }
                    let t = tt();
                    t && e.preventDefault(), z(t, {
                        keepDropdownOpen: t
                    })
                },
                children: b.formatMessage(lt.imageSeries, {
                    imageCount: o
                })
            }), k && (0, Z.jsx)(Y.Item, {
                icon: Ge,
                onSelect: () => void ne(),
                children: b.formatMessage(lt.promptTemplate)
            })]
        })
    }) : m === `mini-current` && g ? (0, Z.jsx)($e, {
        imageShareScope: `single_image`,
        isResolvingShareLink: d,
        triggerButton: V,
        onClose: F,
        shareActions: g
    }) : (0, Z.jsx)(Q, {
        icon: B,
        variant: `imageGenUpdates`,
        disabled: d,
        onClick: bt(async () => {
            if (t && K()) {
                await R(!1);
                return
            }
            if (O) {
                await I(w), j();
                return
            }
            if (tt()) {
                await P(`mini-current`, w), j();
                return
            }
            f(!0);
            try {
                await C()
            } finally {
                f(!1)
            }
            G.imageShared({
                analyticsContext: te,
                source: `image_gen_action_overlay`
            })
        }),
        ariaLabel: b.formatMessage(S.shareLabel)
    })
}
var St, X, Z, Ct, wt, Q, Tt, $, Et = e((() => {
        St = ue(), C(), k(), ot(), J(), ze(), ve(), m(), we(), Xe(), Ye(), We(), Je(), Qe(), Ze(), _(), r(), ge(), Se(), be(), Ee(), o(), Ne(), et(), q(), M(), fe(), F(), i(), ne(), P(), E(), ct(), a(), z(), s(), Be(), te(), T(), j(), le(), R(), X = t(se()), oe(), H(), pe(), _e(), _t(), Ae(), Ie(), ut(), mt(), Z = B(), U(), Ct = I.ImageGenWatermarkOverflowMenu, wt = b(() => ce(() => import(`./c2825ab1-o7o1oqe4fv6d1yi3.js`).then(e => e.ImageGenReferenceActions), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])), {
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
                P = re(),
                F = de(),
                I = ae(),
                L = Le({
                    mimeType: a?.mime_type
                }),
                {
                    isAnimated: R
                } = L,
                z = je(a, M, _),
                ne = A(),
                B = Pe(),
                V = D(),
                H = h(),
                oe = d(),
                se = Me() && V && !H && !oe,
                ce = u(l),
                U = se && !ce,
                le = (0, X.use)(gt),
                ue = a?.asset_pointer ?? e,
                fe = (0, X.useCallback)(() => {
                    k != null && G.conversationImageEditButtonTapped(k), O?.()
                }, [k, O]),
                pe = (0, X.useCallback)(() => De(F, void 0, {
                    title: g(c.getMaybeMessage(n(v.id), _))
                }), [F, v.id, _]),
                ge = w(),
                _e = he(),
                ve = _e?.type === xe.Image && _e.image.asset_pointer === e,
                [ye, W] = (0, X.useState)(!1),
                be = ne?.hasPaidSubscription() ?? !1,
                Se = !(H && !V) && !be && (r || i),
                Ce = C !== !1,
                we = T && E != null,
                K = F.formatMessage($.enter360World),
                Ee = (0, X.useCallback)(async ({
                    shouldDownloadWatermark: e = !0
                } = {}) => {
                    if (!t) return null;
                    let n = t,
                        o = e && i,
                        s = e && r && a?.metadata != null ? a.metadata.watermarked_asset_pointer : void 0;
                    if (s && a) try {
                        n = (await me.fetch(P, {
                            asset: {
                                ...a,
                                asset_pointer: s
                            },
                            conversationId: M,
                            downloadIntent: !0
                        })).url, o = !0
                    } catch {} else if (m && a) try {
                        n = (await me.fetch(P, {
                            asset: a,
                            conversationId: M,
                            downloadIntent: !0
                        })).url, o = !1
                    } catch {}
                    return {
                        downloadedWithWatermark: o,
                        urlToDownload: n
                    }
                }, [m, a, r, t, i, P, M]),
                q = (0, X.useCallback)(async ({
                    shouldDownloadWatermark: e = !0
                } = {}) => {
                    let t = await Ee({
                        shouldDownloadWatermark: e
                    });
                    t != null && (await Re({
                        url: t.urlToDownload,
                        fileName: pe(),
                        gifSource: z
                    }), G.download({
                        analyticsContext: B,
                        downloadedWithWatermark: t.downloadedWithWatermark
                    }))
                }, [B, pe, z, Ee]),
                Ae = (0, X.useCallback)(() => {
                    if (S.logEvent(`chatgpt_image_watermark_download_upgrade_click`, void 0, {
                            source: `overlay`
                        }), !D()) {
                        N({
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
                    }), ke({
                        navigate: I,
                        checkoutOriginProvenance: {
                            checkoutOriginProductExperience: Te.CHAT,
                            checkoutOriginDeliverySurface: `web`
                        },
                        openModalLocation: Ct
                    })
                }, [a, e, I, M]),
                Ne = F.formatMessage(R ? L.downloadLabel : m ? $.downloadFullSize : $.download),
                Ie = t ? (0, Z.jsx)(y, {
                    label: F.formatMessage(m ? $.downloadTooltipFullSize : $.downloadTooltip),
                    children: (0, Z.jsx)(Q, {
                        icon: Ue,
                        variant: `imageGenUpdates`,
                        ariaLabel: Ne,
                        onClick: bt(() => {
                            q()
                        })
                    })
                }) : null,
                J = Se && f({
                    openModalLocation: Ct
                }),
                ze = t && J ? (0, Z.jsxs)(Oe, {
                    side: `bottom`,
                    sideOffset: 10,
                    size: `auto`,
                    open: ye,
                    onOpenChange: W,
                    contentClassName: `pointer-events-auto z-11 min-w-fit origin-top-end text-token-text-primary`,
                    triggerButton: (0, Z.jsx)(Q, {
                        icon: Ue,
                        variant: `imageGenUpdates`,
                        ariaLabel: Ne,
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
                            children: [(0, Z.jsx)(Ue, {}), (0, Z.jsx)(`span`, {
                                className: `font-semibold`,
                                children: (0, Z.jsx)(ie, {
                                    ...L.downloadLabel
                                })
                            })]
                        })
                    }), (0, Z.jsx)(Y.Separator, {}), (0, Z.jsx)(Y.Item, {
                        className: `py-2`,
                        children: (0, Z.jsxs)(`button`, {
                            type: `button`,
                            onClick: e => {
                                e.preventDefault(), e.stopPropagation(), Ae(), W(!1)
                            },
                            className: `row text-token-text-primary flex items-center gap-2`,
                            children: [(0, Z.jsx)(Ue, {}), (0, Z.jsxs)(`div`, {
                                className: `flex flex-col items-start`,
                                children: [(0, Z.jsx)(`span`, {
                                    className: `font-semibold`,
                                    children: (0, Z.jsx)(ie, {
                                        ...dt.downloadWithoutLogo
                                    })
                                }), (0, Z.jsx)(`span`, {
                                    className: `text-token-text-secondary`,
                                    children: (0, Z.jsx)(ie, {
                                        ...dt.upgradePlan
                                    })
                                })]
                            })]
                        })
                    })]
                }) : null,
                Be = J ? ze : Ie,
                Ve = U || Be != null,
                He = O && L.canEdit ? (0, Z.jsx)(Q, {
                    variant: `imageGenUpdates`,
                    onClick: bt(fe),
                    ariaLabel: F.formatMessage($.editImage),
                    children: (0, Z.jsx)(ie, {
                        id: `imageGenActionOverlay.editButton`,
                        defaultMessage: `Edit`
                    })
                }) : null;
            return (0, Z.jsx)(Z.Fragment, {
                children: ge ? !ve && (0, Z.jsx)(vt, {
                    rightAlign: !0,
                    fullWidth: !0,
                    children: (0, Z.jsx)(Q, {
                        icon: Fe,
                        ariaLabel: F.formatMessage(L.expandLabel)
                    })
                }) : (0, Z.jsx)(Z.Fragment, {
                    children: (0, Z.jsx)(yt, {
                        canShowShareButton: U,
                        bottomAlign: !0,
                        rightAlign: !0,
                        fullWidth: !0,
                        alwaysVisible: Ce,
                        onOverlayVisible: we ? te : void 0,
                        testId: `image-gen-overlay-actions`,
                        children: (0, Z.jsxs)(`div`, {
                            className: `flex w-full items-center justify-between`,
                            children: [(0, Z.jsxs)(`div`, {
                                className: `pointer-events-auto flex items-end gap-2`,
                                "data-testid": `image-gen-overlay-left-actions`,
                                children: [z && !H && !oe && (0, Z.jsx)(st, {
                                    source: z,
                                    inline: !0
                                }), we ? (0, Z.jsx)(y, {
                                    label: K,
                                    children: (0, Z.jsx)(Q, {
                                        icon: Ke,
                                        variant: `imageGenUpdates`,
                                        ariaLabel: K,
                                        onClick: bt(E),
                                        children: (0, Z.jsx)(`span`, {
                                            "aria-hidden": !0,
                                            className: `ms-1.5 pe-0.5`,
                                            children: 360
                                        })
                                    })
                                }) : null, H || oe ? He : (0, Z.jsx)(wt, {
                                    conversation: v,
                                    fallback: He,
                                    messageId: _
                                }), b && !Ve && (0, Z.jsx)(ft, {
                                    isAnimated: R,
                                    onOpenChange: W,
                                    onDownload: () => {
                                        q()
                                    },
                                    onDownloadWithoutWatermark: J ? Ae : void 0,
                                    showWithoutWatermarkLabel: !r && !Se,
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
                                    imageGenMessageId: _,
                                    shareFlowSource: j
                                }), (0, Z.jsx)(xt, {
                                    canShowShareButton: U,
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
//# sourceMappingURL=ecab41d6-h6afrh1uzq0x7y3b.js.map