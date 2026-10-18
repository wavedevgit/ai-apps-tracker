import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as n,
    B6 as r,
    Btt as i,
    Htt as a,
    dz as o,
    fz as s,
    i5 as c,
    int as l,
    kT as u,
    rnt as d
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as f,
    Ln as p,
    Rn as m,
    Vn as h,
    zn as g
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    A5 as _,
    CHn as v,
    G8 as y,
    JL as b,
    THn as x,
    W8 as S,
    ahn as C,
    dhn as w,
    fhn as T,
    ihn as E,
    j5 as D,
    ohn as O,
    qL as k,
    rhn as A,
    wHn as j
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Rm as M,
    lp as N,
    oC as P,
    sC as F,
    up as I,
    zm as L
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    ca as R,
    pa as z
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
var B, V = e((() => {
        w(), O(), E(), B = T({
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
        D(), n(), x(), I(), F(), L(), b(), R(), y(), r(), s(), V(), a(), d(), H = t(h()), m(), U = f(), W = ({
            assetPointer: e,
            messageId: t,
            isAnimated: n = !1,
            conversation: r,
            canPublishPromptShare: a = !0,
            seriesMessageSliceIds: s,
            seriesAssetPointers: d,
            seriesImageCount: f,
            shareFlowSource: p,
            variant: m = `legacy`
        }) => {
            "use no forget";
            let h = g(),
                [y, b] = (0, H.useState)(!1),
                x = z({
                    canPublishPromptShare: a,
                    assetPointer: e,
                    conversation: r,
                    imageGenMessageId: t,
                    shareFlowSource: p
                }),
                C = z({
                    conversation: r,
                    imageGenMessageIds: s,
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
                    b(!0);
                    try {
                        await x()
                    } finally {
                        b(!1)
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
                    e === S.PromptShare && w(`prompt`), b(!0);
                    try {
                        await x({
                            shareType: e
                        })
                    } finally {
                        b(!1)
                    }
                    i.logEventWithStatsig(`chatgpt_image_lightbox_share_current_image_selected`, `chatgpt_image_lightbox_share_current_image_selected`), e === S.ImageGen && w(`media_generation`)
                }, [w, x]),
                D = (0, H.useCallback)(async () => {
                    b(!0);
                    try {
                        await C()
                    } finally {
                        b(!1)
                    }
                    i.logEventWithStatsig(`chatgpt_image_lightbox_share_all_images_selected`, `chatgpt_image_lightbox_share_all_images_selected`), w(`image_series_share`)
                }, [w, C]),
                O = h.formatMessage({
                    id: `lqgWN2`,
                    defaultMessage: `Share`
                }),
                A = m !== `revamp`,
                F = m === `revamp` && (f ?? 0) > 1 && (s?.length ?? 0) > 0,
                I = c(() => a && k());
            return !F && !I ? (0, U.jsx)(u, {
                color: `primary`,
                icon: A ? y ? o : B : void 0,
                loading: !A && y,
                onClick: T,
                disabled: y,
                children: O
            }) : (0, U.jsxs)(v, {
                side: `bottom`,
                sideOffset: 10,
                size: `auto`,
                onOpenChange: e => {
                    if (!e) return;
                    let t = i.logStructuredEvent(`ChatgptImageLightboxButtonTapped`, {
                        button: `CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_SHARE`,
                        legacyStatsigEventName: `chatgpt_web_image_library_lightbox_image_share_clicked`,
                        selectionState: `CHATGPT_IMAGEGEN_SELECTION_STATE_PENDING_SELECTION`,
                        imageSeriesCount: l(f)
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
                triggerButton: (0, U.jsx)(u, {
                    color: `primary`,
                    icon: A ? y ? o : B : void 0,
                    loading: !A && y,
                    disabled: y,
                    children: O
                }),
                children: [(0, U.jsx)(j.Item, {
                    icon: P,
                    onClick: () => E(S.ImageGen),
                    children: h.formatMessage(_({
                        isAnimated: n
                    }).shareSelectionLabel)
                }), F && (0, U.jsx)(j.Item, {
                    icon: M,
                    onClick: D,
                    children: h.formatMessage(G.imageSeries, {
                        imageCount: f
                    })
                }), I && (0, U.jsx)(j.Item, {
                    icon: N,
                    onClick: () => E(S.PromptShare),
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
//# sourceMappingURL=1cfd0849-modcf4gb5s2fz5n2.js.map