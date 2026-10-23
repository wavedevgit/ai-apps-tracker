import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    A8 as r,
    Knt as i,
    Rz as a,
    Wnt as o,
    crt as s,
    eE as c,
    j5 as l,
    srt as u,
    zz as d
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as f,
    Ln as p,
    Rn as m,
    Vn as h,
    zn as g
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $8 as _,
    AUn as v,
    JL as y,
    MUn as b,
    Q8 as x,
    YL as S,
    agn as C,
    cpn as w,
    dgn as T,
    fgn as E,
    ign as D,
    jUn as O,
    ogn as k,
    rgn as A,
    spn as j
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Im as M,
    Lm as N,
    aC as P,
    cp as F,
    iC as I,
    sp as L
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    ca as R,
    pa as z
} from "./8b34dbc2-lmwubajnld74ksfm.js";
var B, V = e((() => {
        T(), k(), D(), B = E({
            id: `imagegen-share`,
            icons: {
                share: {
                    normal: A,
                    small: C
                }
            }
        }).Share
    })),
    H, U, W, G, K = e((() => {
        w(), c(), b(), F(), P(), N(), S(), R(), _(), r(), d(), V(), i(), u(), H = t(h()), m(), U = f(), W = ({
            assetPointer: e,
            messageId: t,
            isAnimated: r = !1,
            conversation: i,
            canPublishPromptShare: c = !0,
            seriesMessageSliceIds: u,
            seriesAssetPointers: d,
            seriesImageCount: f,
            shareFlowSource: p,
            variant: m = `legacy`
        }) => {
            "use no forget";
            let h = g(),
                [_, b] = (0, H.useState)(!1),
                S = z({
                    canPublishPromptShare: c,
                    assetPointer: e,
                    conversation: i,
                    imageGenMessageId: t,
                    shareFlowSource: p
                }),
                C = z({
                    conversation: i,
                    imageGenMessageIds: u,
                    imageGenAssetPointers: d,
                    shareFlowSource: p
                }),
                w = (0, H.useCallback)(e => {
                    o.logEventWithStatsig(`Share Post: Share Button Clicked`, `chatgpt_post_share_button_clicked`, {
                        source: `image_library_lightbox`,
                        attachment_type: e,
                        ...e === `image_series_share` ? {} : {
                            message_id: t
                        }
                    })
                }, [t]),
                T = (0, H.useCallback)(async () => {
                    b(!0);
                    try {
                        await S()
                    } finally {
                        b(!1)
                    }
                    let e = o.logStructuredEvent(`ChatgptImageLightboxShareRequestReturned`, {
                        legacyStatsigEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`
                    });
                    o.logValueEventWithStatsig({
                        segmentEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`,
                        statsigEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`,
                        eventId: e
                    }), w(`media_generation`)
                }, [w, S]),
                E = (0, H.useCallback)(async e => {
                    e === x.PromptShare && w(`prompt`), b(!0);
                    try {
                        await S({
                            shareType: e
                        })
                    } finally {
                        b(!1)
                    }
                    o.logEventWithStatsig(`chatgpt_image_lightbox_share_current_image_selected`, `chatgpt_image_lightbox_share_current_image_selected`), e === x.ImageGen && w(`media_generation`)
                }, [w, S]),
                D = (0, H.useCallback)(async () => {
                    b(!0);
                    try {
                        await C()
                    } finally {
                        b(!1)
                    }
                    o.logEventWithStatsig(`chatgpt_image_lightbox_share_all_images_selected`, `chatgpt_image_lightbox_share_all_images_selected`), w(`image_series_share`)
                }, [w, C]),
                k = h.formatMessage({
                    id: `lqgWN2`,
                    defaultMessage: `Share`
                }),
                A = m !== `revamp`,
                N = m === `revamp` && (f ?? 0) > 1 && (u?.length ?? 0) > 0,
                P = l(() => c && y());
            return !N && !P ? (0, U.jsx)(n, {
                color: `primary`,
                icon: A ? _ ? a : B : void 0,
                loading: !A && _,
                onClick: T,
                disabled: _,
                children: k
            }) : (0, U.jsxs)(v, {
                side: `bottom`,
                sideOffset: 10,
                size: `auto`,
                onOpenChange: e => {
                    if (!e) return;
                    let t = o.logStructuredEvent(`ChatgptImageLightboxButtonTapped`, {
                        button: `CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_SHARE`,
                        legacyStatsigEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`,
                        selectionState: `CHATGPT_IMAGEGEN_SELECTION_STATE_PENDING_SELECTION`,
                        imageSeriesCount: s(f)
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
                triggerButton: (0, U.jsx)(n, {
                    color: `primary`,
                    icon: A ? _ ? a : B : void 0,
                    loading: !A && _,
                    disabled: _,
                    children: k
                }),
                children: [(0, U.jsx)(O.Item, {
                    icon: I,
                    onClick: () => E(x.ImageGen),
                    children: h.formatMessage(j({
                        isAnimated: r
                    }).shareSelectionLabel)
                }), N && (0, U.jsx)(O.Item, {
                    icon: M,
                    onClick: D,
                    children: h.formatMessage(G.imageSeries, {
                        imageCount: f
                    })
                }), P && (0, U.jsx)(O.Item, {
                    icon: L,
                    onClick: () => E(x.PromptShare),
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
//# sourceMappingURL=1cfd0849-m5jfawnegpiinkdt.js.map