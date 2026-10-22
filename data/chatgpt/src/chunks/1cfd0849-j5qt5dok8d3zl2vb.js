import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    Int as r,
    Pnt as i,
    Qnt as a,
    Rz as o,
    Znt as s,
    eE as c,
    k8 as l,
    q5 as u,
    zz as d
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Bn as f,
    Ln as p,
    Rn as m,
    Vn as h,
    zn as g
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Bfn as _,
    Ghn as v,
    Ihn as y,
    JL as b,
    Lhn as x,
    Q8 as S,
    Rhn as C,
    Vfn as w,
    Whn as T,
    Z8 as E,
    eUn as D,
    nUn as O,
    qL as k,
    tUn as A,
    zhn as j
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    Rm as M,
    lp as N,
    oC as P,
    sC as F,
    up as I,
    zm as L
} from "./30901919-ikyi1r55w2i02fom.js";
import {
    ca as R,
    pa as z
} from "./8b34dbc2-m4883pai3e8fx8q6.js";
var B, V = e((() => {
        T(), j(), x(), B = v({
            id: `imagegen-share`,
            icons: {
                share: {
                    normal: y,
                    small: C
                }
            }
        }).Share
    })),
    H, U, W, G, K = e((() => {
        w(), c(), O(), I(), F(), L(), b(), R(), S(), l(), d(), V(), r(), s(), H = t(h()), m(), U = f(), W = ({
            assetPointer: e,
            messageId: t,
            isAnimated: r = !1,
            conversation: s,
            canPublishPromptShare: c = !0,
            seriesMessageSliceIds: l,
            seriesAssetPointers: d,
            seriesImageCount: f,
            shareFlowSource: p,
            variant: m = `legacy`
        }) => {
            "use no forget";
            let h = g(),
                [v, y] = (0, H.useState)(!1),
                b = z({
                    canPublishPromptShare: c,
                    assetPointer: e,
                    conversation: s,
                    imageGenMessageId: t,
                    shareFlowSource: p
                }),
                x = z({
                    conversation: s,
                    imageGenMessageIds: l,
                    imageGenAssetPointers: d,
                    shareFlowSource: p
                }),
                S = (0, H.useCallback)(e => {
                    i.logEventWithStatsig(`Share Post: Share Button Clicked`, `chatgpt_post_share_button_clicked`, {
                        source: `image_library_lightbox`,
                        attachment_type: e,
                        ...e === `image_series_share` ? {} : {
                            message_id: t
                        }
                    })
                }, [t]),
                C = (0, H.useCallback)(async () => {
                    y(!0);
                    try {
                        await b()
                    } finally {
                        y(!1)
                    }
                    let e = i.logStructuredEvent(`ChatgptImageLightboxShareRequestReturned`, {
                        legacyStatsigEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`
                    });
                    i.logValueEventWithStatsig({
                        segmentEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`,
                        statsigEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`,
                        eventId: e
                    }), S(`media_generation`)
                }, [S, b]),
                w = (0, H.useCallback)(async e => {
                    e === E.PromptShare && S(`prompt`), y(!0);
                    try {
                        await b({
                            shareType: e
                        })
                    } finally {
                        y(!1)
                    }
                    i.logEventWithStatsig(`chatgpt_image_lightbox_share_current_image_selected`, `chatgpt_image_lightbox_share_current_image_selected`), e === E.ImageGen && S(`media_generation`)
                }, [S, b]),
                T = (0, H.useCallback)(async () => {
                    y(!0);
                    try {
                        await x()
                    } finally {
                        y(!1)
                    }
                    i.logEventWithStatsig(`chatgpt_image_lightbox_share_all_images_selected`, `chatgpt_image_lightbox_share_all_images_selected`), S(`image_series_share`)
                }, [S, x]),
                O = h.formatMessage({
                    id: `lqgWN2`,
                    defaultMessage: `Share`
                }),
                j = m !== `revamp`,
                F = m === `revamp` && (f ?? 0) > 1 && (l?.length ?? 0) > 0,
                I = u(() => c && k());
            return !F && !I ? (0, U.jsx)(n, {
                color: `primary`,
                icon: j ? v ? o : B : void 0,
                loading: !j && v,
                onClick: C,
                disabled: v,
                children: O
            }) : (0, U.jsxs)(D, {
                side: `bottom`,
                sideOffset: 10,
                size: `auto`,
                onOpenChange: e => {
                    if (!e) return;
                    let t = i.logStructuredEvent(`ChatgptImageLightboxButtonTapped`, {
                        button: `CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_SHARE`,
                        legacyStatsigEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`,
                        selectionState: `CHATGPT_IMAGEGEN_SELECTION_STATE_PENDING_SELECTION`,
                        imageSeriesCount: a(f)
                    });
                    i.logValueEventWithStatsig({
                        segmentEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`,
                        statsigEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`,
                        data: {
                            selection_state: `pending_selection`,
                            image_series_count: f
                        },
                        eventId: t
                    })
                },
                triggerButton: (0, U.jsx)(n, {
                    color: `primary`,
                    icon: j ? v ? o : B : void 0,
                    loading: !j && v,
                    disabled: v,
                    children: O
                }),
                children: [(0, U.jsx)(A.Item, {
                    icon: P,
                    onClick: () => w(E.ImageGen),
                    children: h.formatMessage(_({
                        isAnimated: r
                    }).shareSelectionLabel)
                }), F && (0, U.jsx)(A.Item, {
                    icon: M,
                    onClick: T,
                    children: h.formatMessage(G.imageSeries, {
                        imageCount: f
                    })
                }), I && (0, U.jsx)(A.Item, {
                    icon: N,
                    onClick: () => w(E.PromptShare),
                    children: h.formatMessage(G.promptTemplate)
                })]
            })
        }, G = p({
            imageSeries: {
                id: `dk/Wt8`,
                defaultMessage: `All {imageCount, plural, one {# image} other {# images}} in this series`
            },
            promptTemplate: {
                id: `imageGenShareButton.promptTemplate`,
                defaultMessage: `Share prompt template`
            }
        })
    }));
export {
    K as n, G as r, W as t
};
//# sourceMappingURL=1cfd0849-j5qt5dok8d3zl2vb.js.map