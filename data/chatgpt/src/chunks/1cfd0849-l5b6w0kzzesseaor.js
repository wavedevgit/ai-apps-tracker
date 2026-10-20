import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Az as n,
    JT as r,
    M5 as i,
    Mnt as a,
    Nnt as o,
    _nt as s,
    hnt as c,
    jz as l,
    m8 as u,
    qT as d
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as f,
    Hn as p,
    Rn as m,
    Vn as h,
    zn as g
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    Ehn as _,
    K8 as v,
    LHn as y,
    M5 as b,
    N5 as x,
    RHn as S,
    Thn as C,
    XL as w,
    YL as T,
    _hn as E,
    bhn as D,
    q8 as O,
    vhn as k,
    yhn as A,
    zHn as j
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    Rm as M,
    lp as N,
    oC as P,
    sC as F,
    up as I,
    zm as L
} from "./30901919-jory365vq6ym5crx.js";
import {
    ca as R,
    pa as z
} from "./8b34dbc2-d4icgkio4i3wfm6q.js";
var B, V = e((() => {
        C(), D(), k(), B = _({
            id: `imagegen-share`,
            icons: {
                share: {
                    normal: E,
                    small: A
                }
            }
        }).Share
    })),
    H, U, W, G, K = e((() => {
        x(), r(), j(), I(), F(), L(), w(), R(), O(), u(), l(), V(), s(), a(), H = t(p()), g(), U = h(), W = ({
            assetPointer: e,
            messageId: t,
            isAnimated: r = !1,
            conversation: a,
            canPublishPromptShare: s = !0,
            seriesMessageSliceIds: l,
            seriesAssetPointers: u,
            seriesImageCount: p,
            shareFlowSource: m,
            variant: h = `legacy`
        }) => {
            "use no forget";
            let g = f(),
                [_, x] = (0, H.useState)(!1),
                C = z({
                    canPublishPromptShare: s,
                    assetPointer: e,
                    conversation: a,
                    imageGenMessageId: t,
                    shareFlowSource: m
                }),
                w = z({
                    conversation: a,
                    imageGenMessageIds: l,
                    imageGenAssetPointers: u,
                    shareFlowSource: m
                }),
                E = (0, H.useCallback)(e => {
                    c.logEventWithStatsig(`Share Post: Share Button Clicked`, `chatgpt_post_share_button_clicked`, {
                        source: `image_library_lightbox`,
                        attachment_type: e,
                        ...e === `image_series_share` ? {} : {
                            message_id: t
                        }
                    })
                }, [t]),
                D = (0, H.useCallback)(async () => {
                    x(!0);
                    try {
                        await C()
                    } finally {
                        x(!1)
                    }
                    let e = c.logStructuredEvent(`ChatgptImageLightboxShareRequestReturned`, {
                        legacyStatsigEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`
                    });
                    c.logValueEventWithStatsig({
                        segmentEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`,
                        statsigEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`,
                        eventId: e
                    }), E(`media_generation`)
                }, [E, C]),
                O = (0, H.useCallback)(async e => {
                    e === v.PromptShare && E(`prompt`), x(!0);
                    try {
                        await C({
                            shareType: e
                        })
                    } finally {
                        x(!1)
                    }
                    c.logEventWithStatsig(`chatgpt_image_lightbox_share_current_image_selected`, `chatgpt_image_lightbox_share_current_image_selected`), e === v.ImageGen && E(`media_generation`)
                }, [E, C]),
                k = (0, H.useCallback)(async () => {
                    x(!0);
                    try {
                        await w()
                    } finally {
                        x(!1)
                    }
                    c.logEventWithStatsig(`chatgpt_image_lightbox_share_all_images_selected`, `chatgpt_image_lightbox_share_all_images_selected`), E(`image_series_share`)
                }, [E, w]),
                A = g.formatMessage({
                    id: `lqgWN2`,
                    defaultMessage: `Share`
                }),
                j = h !== `revamp`,
                F = h === `revamp` && (p ?? 0) > 1 && (l?.length ?? 0) > 0,
                I = i(() => s && T());
            return !F && !I ? (0, U.jsx)(d, {
                color: `primary`,
                icon: j ? _ ? n : B : void 0,
                loading: !j && _,
                onClick: D,
                disabled: _,
                children: A
            }) : (0, U.jsxs)(y, {
                side: `bottom`,
                sideOffset: 10,
                size: `auto`,
                onOpenChange: e => {
                    if (!e) return;
                    let t = c.logStructuredEvent(`ChatgptImageLightboxButtonTapped`, {
                        button: `CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_SHARE`,
                        legacyStatsigEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`,
                        selectionState: `CHATGPT_IMAGEGEN_SELECTION_STATE_PENDING_SELECTION`,
                        imageSeriesCount: o(p)
                    });
                    c.logValueEventWithStatsig({
                        segmentEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`,
                        statsigEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`,
                        data: {
                            selection_state: `pending_selection`,
                            image_series_count: p
                        },
                        eventId: t
                    })
                },
                triggerButton: (0, U.jsx)(d, {
                    color: `primary`,
                    icon: j ? _ ? n : B : void 0,
                    loading: !j && _,
                    disabled: _,
                    children: A
                }),
                children: [(0, U.jsx)(S.Item, {
                    icon: P,
                    onClick: () => O(v.ImageGen),
                    children: g.formatMessage(b({
                        isAnimated: r
                    }).shareSelectionLabel)
                }), F && (0, U.jsx)(S.Item, {
                    icon: M,
                    onClick: k,
                    children: g.formatMessage(G.imageSeries, {
                        imageCount: p
                    })
                }), I && (0, U.jsx)(S.Item, {
                    icon: N,
                    onClick: () => O(v.PromptShare),
                    children: g.formatMessage(G.promptTemplate)
                })]
            })
        }, G = m({
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
//# sourceMappingURL=1cfd0849-l5b6w0kzzesseaor.js.map