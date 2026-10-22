import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    $nt as r,
    Int as i,
    Rnt as a,
    Rz as o,
    eE as s,
    ert as c,
    k8 as l,
    q5 as u,
    zz as d
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as f,
    Ln as p,
    Rn as m,
    Vn as h,
    zn as g
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $8 as _,
    $hn as v,
    JL as y,
    Q8 as b,
    YL as x,
    _Un as S,
    cgn as C,
    egn as w,
    ipn as T,
    ngn as E,
    rpn as D,
    sgn as O,
    tgn as k,
    vUn as A,
    yUn as j
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    Rm as M,
    lp as N,
    oC as P,
    sC as F,
    up as I,
    zm as L
} from "./30901919-lgbmg5s09xld40kt.js";
import {
    ca as R,
    pa as z
} from "./8b34dbc2-n194ohawifys3bko.js";
var B, V = e((() => {
        O(), E(), w(), B = C({
            id: `imagegen-share`,
            icons: {
                share: {
                    normal: v,
                    small: k
                }
            }
        }).Share
    })),
    H, U, W, G, K = e((() => {
        T(), s(), j(), I(), F(), L(), x(), R(), _(), l(), d(), V(), a(), r(), H = t(h()), m(), U = f(), W = ({
            assetPointer: e,
            messageId: t,
            isAnimated: r = !1,
            conversation: a,
            canPublishPromptShare: s = !0,
            seriesMessageSliceIds: l,
            seriesAssetPointers: d,
            seriesImageCount: f,
            shareFlowSource: p,
            variant: m = `legacy`
        }) => {
            "use no forget";
            let h = g(),
                [_, v] = (0, H.useState)(!1),
                x = z({
                    canPublishPromptShare: s,
                    assetPointer: e,
                    conversation: a,
                    imageGenMessageId: t,
                    shareFlowSource: p
                }),
                C = z({
                    conversation: a,
                    imageGenMessageIds: l,
                    imageGenAssetPointers: d,
                    shareFlowSource: p
                }),
                w = (0, H.useCallback)(e => {
                    i.logEventWithStatsig(`Share Post: Share Button Clicked`, `chatgpt_post_share_button_clicked`, {
                        source: `image_library_lightbox`,
                        attachment_type: e,
                        ...e === `image_series_share` ? {} : {
                            message_id: t
                        }
                    })
                }, [t]),
                T = (0, H.useCallback)(async () => {
                    v(!0);
                    try {
                        await x()
                    } finally {
                        v(!1)
                    }
                    let e = i.logStructuredEvent(`ChatgptImageLightboxShareRequestReturned`, {
                        legacyStatsigEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`
                    });
                    i.logValueEventWithStatsig({
                        segmentEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`,
                        statsigEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`,
                        eventId: e
                    }), w(`media_generation`)
                }, [w, x]),
                E = (0, H.useCallback)(async e => {
                    e === b.PromptShare && w(`prompt`), v(!0);
                    try {
                        await x({
                            shareType: e
                        })
                    } finally {
                        v(!1)
                    }
                    i.logEventWithStatsig(`chatgpt_image_lightbox_share_current_image_selected`, `chatgpt_image_lightbox_share_current_image_selected`), e === b.ImageGen && w(`media_generation`)
                }, [w, x]),
                O = (0, H.useCallback)(async () => {
                    v(!0);
                    try {
                        await C()
                    } finally {
                        v(!1)
                    }
                    i.logEventWithStatsig(`chatgpt_image_lightbox_share_all_images_selected`, `chatgpt_image_lightbox_share_all_images_selected`), w(`image_series_share`)
                }, [w, C]),
                k = h.formatMessage({
                    id: `lqgWN2`,
                    defaultMessage: `Share`
                }),
                j = m !== `revamp`,
                F = m === `revamp` && (f ?? 0) > 1 && (l?.length ?? 0) > 0,
                I = u(() => s && y());
            return !F && !I ? (0, U.jsx)(n, {
                color: `primary`,
                icon: j ? _ ? o : B : void 0,
                loading: !j && _,
                onClick: T,
                disabled: _,
                children: k
            }) : (0, U.jsxs)(S, {
                side: `bottom`,
                sideOffset: 10,
                size: `auto`,
                onOpenChange: e => {
                    if (!e) return;
                    let t = i.logStructuredEvent(`ChatgptImageLightboxButtonTapped`, {
                        button: `CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_SHARE`,
                        legacyStatsigEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`,
                        selectionState: `CHATGPT_IMAGEGEN_SELECTION_STATE_PENDING_SELECTION`,
                        imageSeriesCount: c(f)
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
                    icon: j ? _ ? o : B : void 0,
                    loading: !j && _,
                    disabled: _,
                    children: k
                }),
                children: [(0, U.jsx)(A.Item, {
                    icon: P,
                    onClick: () => E(b.ImageGen),
                    children: h.formatMessage(D({
                        isAnimated: r
                    }).shareSelectionLabel)
                }), F && (0, U.jsx)(A.Item, {
                    icon: M,
                    onClick: O,
                    children: h.formatMessage(G.imageSeries, {
                        imageCount: f
                    })
                }), I && (0, U.jsx)(A.Item, {
                    icon: N,
                    onClick: () => E(b.PromptShare),
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
//# sourceMappingURL=1cfd0849-muzmkjjie5xsgnaf.js.map