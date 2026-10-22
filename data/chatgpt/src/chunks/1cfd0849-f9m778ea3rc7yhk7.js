import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    A8 as r,
    J5 as i,
    Lnt as a,
    Rz as o,
    eE as s,
    ert as c,
    trt as l,
    znt as u,
    zz as d
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    Bn as f,
    Ln as p,
    Rn as m,
    Vn as h,
    zn as g
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $8 as _,
    JL as v,
    Q8 as y,
    SUn as b,
    YL as x,
    agn as S,
    bUn as C,
    dgn as w,
    ign as T,
    ngn as E,
    opn as D,
    rgn as O,
    spn as k,
    ugn as A,
    xUn as j
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    Rm as M,
    lp as N,
    oC as P,
    sC as F,
    up as I,
    zm as L
} from "./30901919-lc79rizhhepnsl3q.js";
import {
    ca as R,
    pa as z
} from "./8b34dbc2-ik628tlti8ozm9vq.js";
var B, V = e((() => {
        A(), S(), O(), B = w({
            id: `imagegen-share`,
            icons: {
                share: {
                    normal: E,
                    small: T
                }
            }
        }).Share
    })),
    H, U, W, G, K = e((() => {
        k(), s(), b(), I(), F(), L(), x(), R(), _(), r(), d(), V(), u(), c(), H = t(h()), m(), U = f(), W = ({
            assetPointer: e,
            messageId: t,
            isAnimated: r = !1,
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
                [_, b] = (0, H.useState)(!1),
                x = z({
                    canPublishPromptShare: c,
                    assetPointer: e,
                    conversation: s,
                    imageGenMessageId: t,
                    shareFlowSource: p
                }),
                S = z({
                    conversation: s,
                    imageGenMessageIds: u,
                    imageGenAssetPointers: d,
                    shareFlowSource: p
                }),
                w = (0, H.useCallback)(e => {
                    a.logEventWithStatsig(`Share Post: Share Button Clicked`, `chatgpt_post_share_button_clicked`, {
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
                        await x()
                    } finally {
                        b(!1)
                    }
                    let e = a.logStructuredEvent(`ChatgptImageLightboxShareRequestReturned`, {
                        legacyStatsigEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`
                    });
                    a.logValueEventWithStatsig({
                        segmentEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`,
                        statsigEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`,
                        eventId: e
                    }), w(`media_generation`)
                }, [w, x]),
                E = (0, H.useCallback)(async e => {
                    e === y.PromptShare && w(`prompt`), b(!0);
                    try {
                        await x({
                            shareType: e
                        })
                    } finally {
                        b(!1)
                    }
                    a.logEventWithStatsig(`chatgpt_image_lightbox_share_current_image_selected`, `chatgpt_image_lightbox_share_current_image_selected`), e === y.ImageGen && w(`media_generation`)
                }, [w, x]),
                O = (0, H.useCallback)(async () => {
                    b(!0);
                    try {
                        await S()
                    } finally {
                        b(!1)
                    }
                    a.logEventWithStatsig(`chatgpt_image_lightbox_share_all_images_selected`, `chatgpt_image_lightbox_share_all_images_selected`), w(`image_series_share`)
                }, [w, S]),
                k = h.formatMessage({
                    id: `lqgWN2`,
                    defaultMessage: `Share`
                }),
                A = m !== `revamp`,
                F = m === `revamp` && (f ?? 0) > 1 && (u?.length ?? 0) > 0,
                I = i(() => c && v());
            return !F && !I ? (0, U.jsx)(n, {
                color: `primary`,
                icon: A ? _ ? o : B : void 0,
                loading: !A && _,
                onClick: T,
                disabled: _,
                children: k
            }) : (0, U.jsxs)(C, {
                side: `bottom`,
                sideOffset: 10,
                size: `auto`,
                onOpenChange: e => {
                    if (!e) return;
                    let t = a.logStructuredEvent(`ChatgptImageLightboxButtonTapped`, {
                        button: `CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_SHARE`,
                        legacyStatsigEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`,
                        selectionState: `CHATGPT_IMAGEGEN_SELECTION_STATE_PENDING_SELECTION`,
                        imageSeriesCount: l(f)
                    });
                    a.logValueEventWithStatsig({
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
                    icon: A ? _ ? o : B : void 0,
                    loading: !A && _,
                    disabled: _,
                    children: k
                }),
                children: [(0, U.jsx)(j.Item, {
                    icon: P,
                    onClick: () => E(y.ImageGen),
                    children: h.formatMessage(D({
                        isAnimated: r
                    }).shareSelectionLabel)
                }), F && (0, U.jsx)(j.Item, {
                    icon: M,
                    onClick: O,
                    children: h.formatMessage(G.imageSeries, {
                        imageCount: f
                    })
                }), I && (0, U.jsx)(j.Item, {
                    icon: N,
                    onClick: () => E(y.PromptShare),
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
//# sourceMappingURL=1cfd0849-f9m778ea3rc7yhk7.js.map