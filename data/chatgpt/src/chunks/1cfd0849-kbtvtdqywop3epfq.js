import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bnt as n,
    JT as r,
    Mz as i,
    P5 as a,
    Snt as o,
    YT as s,
    g8 as c,
    jz as l,
    wnt as u,
    znt as d
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    Bn as f,
    Ln as p,
    Rn as m,
    Vn as h,
    zn as g
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $L as _,
    Ahn as v,
    Chn as y,
    F5 as b,
    I5 as x,
    IHn as S,
    LHn as C,
    QL as w,
    RHn as T,
    Shn as E,
    X8 as D,
    Y8 as O,
    khn as k,
    whn as A,
    xhn as j
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    Rm as M,
    lp as N,
    oC as P,
    sC as F,
    up as I,
    zm as L
} from "./30901919-i8ip8r0znvgcym38.js";
import {
    ca as R,
    pa as z
} from "./8b34dbc2-ba6wt3zxvh7jce7p.js";
var B, V = e((() => {
        k(), A(), E(), B = v({
            id: `imagegen-share`,
            icons: {
                share: {
                    normal: j,
                    small: y
                }
            }
        }).Share
    })),
    H, U, W, G, K = e((() => {
        x(), s(), T(), I(), F(), L(), _(), R(), D(), c(), i(), V(), u(), d(), H = t(h()), m(), U = f(), W = ({
            assetPointer: e,
            messageId: t,
            isAnimated: i = !1,
            conversation: s,
            canPublishPromptShare: c = !0,
            seriesMessageSliceIds: u,
            seriesAssetPointers: d,
            seriesImageCount: f,
            shareFlowSource: p,
            variant: m = `legacy`
        }) => {
            "use no forget";
            let h = g(),
                [_, v] = (0, H.useState)(!1),
                y = z({
                    canPublishPromptShare: c,
                    assetPointer: e,
                    conversation: s,
                    imageGenMessageId: t,
                    shareFlowSource: p
                }),
                x = z({
                    conversation: s,
                    imageGenMessageIds: u,
                    imageGenAssetPointers: d,
                    shareFlowSource: p
                }),
                T = (0, H.useCallback)(e => {
                    o.logEventWithStatsig(`Share Post: Share Button Clicked`, `chatgpt_post_share_button_clicked`, {
                        source: `image_library_lightbox`,
                        attachment_type: e,
                        ...e === `image_series_share` ? {} : {
                            message_id: t
                        }
                    })
                }, [t]),
                E = (0, H.useCallback)(async () => {
                    v(!0);
                    try {
                        await y()
                    } finally {
                        v(!1)
                    }
                    let e = o.logStructuredEvent(`ChatgptImageLightboxShareRequestReturned`, {
                        legacyStatsigEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`
                    });
                    o.logValueEventWithStatsig({
                        segmentEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`,
                        statsigEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`,
                        eventId: e
                    }), T(`media_generation`)
                }, [T, y]),
                D = (0, H.useCallback)(async e => {
                    e === O.PromptShare && T(`prompt`), v(!0);
                    try {
                        await y({
                            shareType: e
                        })
                    } finally {
                        v(!1)
                    }
                    o.logEventWithStatsig(`chatgpt_image_lightbox_share_current_image_selected`, `chatgpt_image_lightbox_share_current_image_selected`), e === O.ImageGen && T(`media_generation`)
                }, [T, y]),
                k = (0, H.useCallback)(async () => {
                    v(!0);
                    try {
                        await x()
                    } finally {
                        v(!1)
                    }
                    o.logEventWithStatsig(`chatgpt_image_lightbox_share_all_images_selected`, `chatgpt_image_lightbox_share_all_images_selected`), T(`image_series_share`)
                }, [T, x]),
                A = h.formatMessage({
                    id: `lqgWN2`,
                    defaultMessage: `Share`
                }),
                j = m !== `revamp`,
                F = m === `revamp` && (f ?? 0) > 1 && (u?.length ?? 0) > 0,
                I = a(() => c && w());
            return !F && !I ? (0, U.jsx)(r, {
                color: `primary`,
                icon: j ? _ ? l : B : void 0,
                loading: !j && _,
                onClick: E,
                disabled: _,
                children: A
            }) : (0, U.jsxs)(S, {
                side: `bottom`,
                sideOffset: 10,
                size: `auto`,
                onOpenChange: e => {
                    if (!e) return;
                    let t = o.logStructuredEvent(`ChatgptImageLightboxButtonTapped`, {
                        button: `CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_SHARE`,
                        legacyStatsigEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`,
                        selectionState: `CHATGPT_IMAGEGEN_SELECTION_STATE_PENDING_SELECTION`,
                        imageSeriesCount: n(f)
                    });
                    o.logValueEventWithStatsig({
                        segmentEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`,
                        statsigEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`,
                        data: {
                            selection_state: `pending_selection`,
                            image_series_count: f
                        },
                        eventId: t
                    })
                },
                triggerButton: (0, U.jsx)(r, {
                    color: `primary`,
                    icon: j ? _ ? l : B : void 0,
                    loading: !j && _,
                    disabled: _,
                    children: A
                }),
                children: [(0, U.jsx)(C.Item, {
                    icon: P,
                    onClick: () => D(O.ImageGen),
                    children: h.formatMessage(b({
                        isAnimated: i
                    }).shareSelectionLabel)
                }), F && (0, U.jsx)(C.Item, {
                    icon: M,
                    onClick: k,
                    children: h.formatMessage(G.imageSeries, {
                        imageCount: f
                    })
                }), I && (0, U.jsx)(C.Item, {
                    icon: N,
                    onClick: () => D(O.PromptShare),
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
//# sourceMappingURL=1cfd0849-kbtvtdqywop3epfq.js.map