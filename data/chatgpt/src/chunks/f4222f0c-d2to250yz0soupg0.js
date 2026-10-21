import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    At as r,
    B0 as i,
    Cat as a,
    F5 as o,
    K0 as s,
    LU as c,
    Qy as l,
    Zy as u,
    c7 as d,
    cn as f,
    eE as p,
    fB as m,
    hn as h,
    k8 as ee,
    l7 as g,
    oW as te,
    pB as _,
    prt as ne,
    q5 as re,
    sW as v,
    srt as ie,
    xat as ae,
    zU as oe
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    Bn as y,
    Nn as b,
    Rn as se,
    Vn as x,
    wn as S,
    zn as ce
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Hn as C,
    A3t as le,
    AA as w,
    Ajn as T,
    Cjn as ue,
    D3t as E,
    Djn as D,
    Dkn as O,
    Dlt as k,
    Dut as de,
    Ejn as fe,
    Elt as A,
    Gst as pe,
    Out as j,
    QIn as me,
    SWn as M,
    Sjn as he,
    Tkn as N,
    Tlt as ge,
    Ust as P,
    ZIn as _e,
    eUn as F,
    hbt as ve,
    ipt as ye,
    kA as I,
    ltn as be,
    mbt as L,
    npt as R,
    rwt as z,
    stn as B,
    tpt as V,
    twt as xe,
    wWn as H
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    $h as Se,
    By as Ce,
    DC as we,
    EC as Te,
    Jv as Ee,
    Vy as De,
    Yv as Oe,
    _r as ke,
    eg as Ae,
    ex as je,
    mg as Me,
    ng as Ne,
    pg as Pe,
    tg as Fe,
    tx as Ie,
    vr as Le
} from "./30901919-r9pahacmzqudnt4f.js";
import {
    n as Re,
    t as U
} from "./0e5afe53-bfccq9og5d2mon04.js";
import {
    a as W,
    r as G
} from "./dccfc4ad-jhptlverh03cm6tn.js";
import {
    C as ze,
    i as Be
} from "./2b67bcd8-i5p5e5frrx3qx1zs.js";
import {
    h as Ve,
    m as K,
    p as He
} from "./1362c49f-ene2m3354kl6blsm.js";
import {
    n as Ue,
    r as We
} from "./e1d1ae28-c1b3reb9m6awbhcs.js";
import {
    E as Ge,
    T as Ke
} from "./6fd89734-eec7l804t4n2eckf.js";
import {
    n as qe,
    r as Je
} from "./eda93c10-jjtpjjwsujug36ng.js";
import {
    n as q,
    t as Ye
} from "./407dfab1-ku3uxhjph1qq818p.js";
var Xe, Ze = e((() => {
    Xe = (e, t) => t ? {
        ...e,
        sourceMessageId: t
    } : e
}));

function Qe(e) {
    "use forget";
    let t = (0, tt.c)(9),
        {
            isLoading: n,
            onShown: r,
            rootRef: i
        } = e,
        a = (0, nt.useRef)(null),
        o = (0, nt.useRef)(!1),
        s;
    t[0] === r ? s = t[1] : (s = () => {
        r()
    }, t[0] = r, t[1] = s);
    let c = (0, nt.useEffectEvent)(s),
        l;
    t[2] === i ? l = t[3] : (l = e => {
        a.current = e, et(i, e)
    }, t[2] = i, t[3] = l);
    let u = l,
        d;
    t[4] !== c || t[5] !== n ? (d = () => {
        if (n || o.current) return;
        let e = a.current;
        if (!e || typeof IntersectionObserver > `u`) return;
        let t = new IntersectionObserver(e => {
            !e.some($e) || o.current || (o.current = !0, c(), t.disconnect())
        }, {
            root: null,
            rootMargin: `0px`,
            threshold: 0
        });
        return t.observe(e), () => {
            t.disconnect()
        }
    }, t[4] = c, t[5] = n, t[6] = d) : d = t[6];
    let f;
    return t[7] === n ? f = t[8] : (f = [n], t[7] = n, t[8] = f), (0, nt.useEffect)(d, f), u
}

function $e(e) {
    return e.isIntersecting && e.intersectionRatio > 0
}

function et(e, t) {
    if (e) {
        if (typeof e == `function`) {
            e(t);
            return
        }
        e.current = t
    }
}
var tt, nt, rt = e((() => {
    tt = S(), nt = t(x())
}));

function it({
    conversation: e,
    offers: t,
    contentReferenceStartIndex: r,
    productIndex: i,
    product: a,
    isLoading: c,
    suppressOfferAnimations: l = !1,
    onOpenCheckout: u,
    trackContentReferenceEvent: p,
    analyticsMetadata: m,
    showBestPriceOfferTag: ee = !0,
    showBottomBorder: g = !0,
    className: te,
    interactionSource: _,
    initialVisibleOfferCount: ne = 3
}) {
    "use no forget";
    let v = ie(`3375735072`),
        y = re(s),
        se = v && ie(`3109853659`),
        x = v ? qe() : null,
        S = We(),
        C = oe(),
        le = ce(),
        w = re(() => e?.serverId$()),
        T = re(() => e ? Be(e) : m ?? {}),
        [E, O] = (0, J.useState)(!1),
        k = (a.variants && Object.values(He(a.variants)).map(e => e.label).join(` • `)) ?? null,
        A = ne,
        pe = t.length > 0,
        j = t.slice(0, E ? t.length : A),
        M = t.length > A,
        ge = t.slice(A),
        P = ge.length,
        _e = st(ge),
        F = ot(_),
        I = t.filter(e => e.available).length,
        be = t.filter(e => e.checkoutable).length,
        L = a.analytics_meta ?? {},
        R = a.product_event_uuid,
        z = (0, J.useRef)(c),
        B = (0, J.useRef)(l),
        V = z.current && !c,
        xe = B.current && !l,
        H = !c && !V && !l && !xe;
    (0, J.useEffect)(() => {
        z.current = c, B.current = l
    }, [c, l]);
    let Se = ({
        offer: e,
        offerIndex: n,
        offerSource: o,
        feedId: s,
        action: c,
        hadBuyButton: l,
        includeSiteUrl: u
    }) => {
        let d = a.popularity_metadata?.product_tags?.includes(`popular`) ?? !1,
            f = `product_offer_clicked`;
        p(`Product Offer Clicked`, f, `product_entity`, {
            content_reference_start_index: r,
            product_index: i,
            offer_index: n,
            interaction_source: _,
            ...L,
            product_id: a.id,
            product_event_uuid: R,
            product_url: a.url,
            offer_url: e.url,
            offers_count: t.length,
            price: e.price?.toString(),
            action: c,
            merchant_name: e.merchant_name,
            source: a.provider,
            feed_id: s,
            has_popular_tag: d
        }, void 0, e => me(f, `offer_clicked`, e, {
            productId: a.id,
            interactionSource: _,
            offerCount: t.length,
            offerIndex: n
        })), c === `open_site_clicked` && p(`link_action`, null, `product_entity`, {
            action: `click`,
            link_type: `product_offer`,
            section_location: `sidebar`,
            content_reference_start_index: r,
            product_index: i,
            offer_index: n,
            interaction_source: _,
            product_id: a.id,
            product_event_uuid: R,
            merchant_name: e.merchant_name,
            url: e.url
        }, t => {
            ve({
                action: `click`,
                actionType: he.CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED,
                analyticsMetadata: t,
                contentReferenceStartIndex: r,
                contentReferenceType: F,
                linkAffordance: fe.CHATGPT_LINK_AFFORDANCE_BUTTON,
                linkType: D.CHATGPT_LINK_TYPE_PRODUCT_OFFER,
                linkIndex: n + 1,
                parentContext: {
                    entityId: a.id,
                    entityCategory: `product`,
                    contentReferenceStartIndex: r,
                    messageId: t.messageId
                },
                surfaceLocation: ue.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR,
                url: e.url
            })
        }), ye({
            productOfferInteractionEventType: N.CHATGPT_PRODUCT_OFFER_INTERACTION_EVENT_TYPE_OFFER_CLICKED,
            clientThreadId: T.clientThreadId,
            product: a,
            offerIndex: n,
            offer: e,
            offerCount: t.length,
            contentReferenceType: F,
            messageId: T.messageId,
            contentReferenceStartIndex: r
        });
        let m = {
            content_reference_start_index: r,
            product_index: i,
            interaction_source: _,
            ...L,
            product_id: a.id,
            product_event_uuid: R,
            product_url: a.url,
            action: c,
            section: `product_detail`,
            section_location: `sidebar`,
            section_index: n,
            offer_index: n,
            merchant_name: e.merchant_name,
            price: e.price?.toString(),
            had_buy_button: l,
            variants: k,
            source: o,
            feed_id: s,
            has_popular_tag: d
        };
        u && (m.site_url = e.url), p(`product_offer`, `product_offer`, `product_entity`, m)
    };
    return (0, J.useEffect)(() => {
        if (c || !pe) return;
        let e = {
                ...L,
                product_event_uuid: R,
                total_count: t.length,
                available_count: I,
                checkoutable_count: be,
                interaction_source: _,
                is_variant: !!k,
                source: a.provider,
                has_popular_tag: a.popularity_metadata?.product_tags?.includes(`popular`) ?? !1
            },
            n = `product_offers_shown`;
        p(`Product Offers Shown`, n, `product_entity`, e, void 0, e => me(n, `offers_shown`, e, {
            productId: a.id,
            interactionSource: _,
            offerCount: t.length
        })), p(`product_detail`, `product_detail`, `product_entity`, {
            ...L,
            product_event_uuid: R,
            interaction_source: _,
            action: `updated`,
            variants_count: a.variants?.length ?? 0,
            variants_with_selection_count: a.variants?.filter(e => e.selected_option_id).length ?? 0,
            offers_count: I,
            checkoutable_offers_count: be,
            has_popular_tag: a.popularity_metadata?.product_tags?.includes(`popular`) ?? !1
        }), ye({
            productOfferInteractionEventType: N.CHATGPT_PRODUCT_OFFER_INTERACTION_EVENT_TYPE_OFFER_LIST_SHOWN,
            clientThreadId: T.clientThreadId,
            product: a,
            offerIndex: void 0,
            offer: void 0,
            offerCount: t.length,
            contentReferenceType: F,
            messageId: T.messageId,
            contentReferenceStartIndex: r
        }), ae.addAction(`shopping_checkout.offers_shown`, e)
    }, [pe, c, k]), !c && !pe ? null : (0, Y.jsx)(`div`, {
        className: d(te, `relative`),
        children: (0, Y.jsxs)(f.div, {
            layout: !0,
            transition: H ? void 0 : {
                duration: 0
            },
            children: [(0, Y.jsx)(h, {
                initial: !1,
                children: j.map((e, n) => {
                    let s = e.debug_info?.feed_id,
                        l = e.debug_info?.source,
                        d = v && e.checkoutable,
                        m = e.launcherPayload ?? null,
                        h = m ? o(() => de({
                            ...Xe(m, T.messageId),
                            conversationId: w ?? null
                        })) : null,
                        te = h != null,
                        ne = !y && (te || d);
                    return (0, Y.jsx)(f.div, {
                        layout: !0,
                        initial: H ? {
                            opacity: 0,
                            y: -6
                        } : !1,
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: H ? {
                            opacity: 0,
                            y: -6
                        } : void 0,
                        transition: H ? {
                            duration: .18,
                            ease: `easeOut`
                        } : {
                            duration: 0
                        },
                        children: (0, Y.jsx)(ut, {
                            offer: e,
                            isCheckoutEnabled: v,
                            isLoading: c,
                            isCheckoutable: d,
                            showCheckoutLauncherButton: te,
                            checkoutLauncherLaunchProps: h,
                            isMultiItemCartEnabled: se,
                            isAddDisabled: S.status === `loading`,
                            showPriceDisclosure: !!a.show_price_disclosure,
                            showBestPriceOfferTag: ee,
                            showBottomBorder: g || M,
                            isLastVisibleOffer: n === j.length - 1 && !c,
                            onOpenCheckout: (t, r) => {
                                t.stopPropagation(), u(), v && x && Ve(a) && e.checkout_payload && (x.openNewCheckout({
                                    preloadCustomerSessionClientSecret: r,
                                    metadata: T,
                                    items: [{
                                        id: e.checkout_payload,
                                        productId: a.id,
                                        quantity: 1,
                                        value: e.checkout_payload
                                    }]
                                }), Se({
                                    offer: e,
                                    offerIndex: n,
                                    offerSource: l,
                                    feedId: s,
                                    action: `buy_button_clicked`,
                                    hadBuyButton: !0,
                                    includeSiteUrl: !1
                                }))
                            },
                            onAddToCart: async t => {
                                t.stopPropagation(), e.checkout_payload && (await S.addItem(e.checkout_payload) ? C.success(le.formatMessage({
                                    id: `3u8eef`,
                                    defaultMessage: `Added to cart`
                                }), {
                                    duration: 2
                                }) : C.danger(le.formatMessage({
                                    id: `IZjwsE`,
                                    defaultMessage: `Failed to add to cart`
                                }), {
                                    duration: 3
                                }))
                            },
                            onVisitMerchant: t => {
                                t.stopPropagation(), Se({
                                    offer: e,
                                    offerIndex: n,
                                    offerSource: l,
                                    feedId: s,
                                    action: `open_site_clicked`,
                                    hadBuyButton: ne,
                                    includeSiteUrl: !0
                                }), window.open(e.url, `_blank`)
                            },
                            onLaunchCheckout: t => {
                                t.stopPropagation(), Se({
                                    offer: e,
                                    offerIndex: n,
                                    offerSource: l,
                                    feedId: s,
                                    action: `buy_button_clicked`,
                                    hadBuyButton: !0,
                                    includeSiteUrl: !0
                                })
                            },
                            onShown: () => {
                                p(`product_offer`, `product_offer`, `product_entity`, {
                                    content_reference_start_index: r,
                                    product_index: i,
                                    ...L,
                                    product_id: a.id,
                                    product_event_uuid: R,
                                    product_url: a.url,
                                    action: `shown`,
                                    section: `product_detail`,
                                    section_location: `sidebar`,
                                    section_index: n,
                                    offer_index: n,
                                    merchant_name: e.merchant_name,
                                    price: e.price?.toString(),
                                    had_buy_button: ne,
                                    checkoutable: e.checkoutable,
                                    source: l,
                                    feed_id: s,
                                    has_popular_tag: a.popularity_metadata?.product_tags?.includes(`popular`) ?? !1
                                }), p(`link_action`, null, `product_entity`, {
                                    action: `show`,
                                    link_type: `product_offer`,
                                    section_location: `sidebar`,
                                    content_reference_start_index: r,
                                    product_index: i,
                                    offer_index: n,
                                    interaction_source: _,
                                    product_id: a.id,
                                    product_event_uuid: R,
                                    merchant_name: e.merchant_name,
                                    url: e.url
                                }, t => {
                                    ve({
                                        action: `show`,
                                        actionType: he.CHATGPT_ENGAGEMENT_ACTION_TYPE_SHOWN,
                                        analyticsMetadata: t,
                                        contentReferenceStartIndex: r,
                                        contentReferenceType: F,
                                        linkAffordance: fe.CHATGPT_LINK_AFFORDANCE_BUTTON,
                                        linkType: D.CHATGPT_LINK_TYPE_PRODUCT_OFFER,
                                        linkIndex: n + 1,
                                        parentContext: {
                                            entityId: a.id,
                                            entityCategory: `product`,
                                            contentReferenceStartIndex: r,
                                            messageId: t.messageId
                                        },
                                        surfaceLocation: ue.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR,
                                        url: e.url
                                    })
                                }), ye({
                                    productOfferInteractionEventType: N.CHATGPT_PRODUCT_OFFER_INTERACTION_EVENT_TYPE_OFFER_SHOWN,
                                    clientThreadId: T.clientThreadId,
                                    product: a,
                                    offerIndex: n,
                                    offer: e,
                                    offerCount: t.length,
                                    contentReferenceType: F,
                                    messageId: T.messageId,
                                    contentReferenceStartIndex: r
                                })
                            }
                        })
                    }, ct(e, n))
                })
            }), c && (0, Y.jsx)(`div`, {
                role: `status`,
                "aria-busy": !0,
                className: `space-y-0`,
                children: Array.from({
                    length: A
                }).map((e, t) => (0, Y.jsx)(at, {}, `offer-skeleton-${t}`))
            }), M && !c && (0, Y.jsx)(f.div, {
                layout: !0,
                transition: H ? {
                    type: `tween`,
                    ease: `easeInOut`,
                    duration: .2
                } : {
                    duration: 0
                },
                children: (0, Y.jsxs)(n, {
                    className: `-ms-3 mt-2 w-fit px-3`,
                    size: `small`,
                    color: `ghost`,
                    onClick: () => O(e => !e),
                    contentWrapperClassName: `gap-1`,
                    "aria-expanded": E,
                    children: [E ? (0, Y.jsx)(b, {
                        id: `Gl3oLS`,
                        defaultMessage: `See less`
                    }) : _e ? (0, Y.jsx)(b, {
                        id: `y+cCno`,
                        defaultMessage: `{hiddenOfferCount, plural, one {# other seller} other {# other sellers}} • Starting at {price}`,
                        values: {
                            hiddenOfferCount: P,
                            price: _e
                        }
                    }) : (0, Y.jsx)(b, {
                        id: `f9tOaY`,
                        defaultMessage: `See more`
                    }), E ? (0, Y.jsx)(Ee, {
                        className: `mt-0.5`
                    }) : (0, Y.jsx)(Te, {})]
                })
            })]
        })
    })
}

function at() {
    "use forget";
    let e = (0, pt.c)(2),
        t;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Y.jsxs)(`div`, {
        className: `flex min-w-0 flex-1 flex-col gap-1`,
        children: [(0, Y.jsxs)(`div`, {
            className: `flex flex-row items-center gap-1.5`,
            children: [(0, Y.jsx)(P, {
                className: `h-4 w-4 rounded-full!`
            }), (0, Y.jsx)(P, {
                className: `h-4 w-28`
            })]
        }), (0, Y.jsx)(P, {
            className: `h-3.5 w-50`
        })]
    }), e[0] = t) : t = e[0];
    let n;
    return e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, Y.jsx)(`div`, {
        className: `border-token-border-light border-t py-5 first:border-t`,
        children: (0, Y.jsxs)(`div`, {
            className: `flex flex-row items-center gap-3`,
            children: [t, (0, Y.jsx)(`div`, {
                className: `flex flex-row items-center gap-2`,
                children: (0, Y.jsx)(P, {
                    className: `h-9 w-15 rounded-[18px]!`
                })
            })]
        })
    }), e[1] = n) : n = e[1], n
}

function ot(e) {
    switch (e) {
        case `inline_link`:
            return V.ProductEntity;
        case `carousel`:
            return V.Products;
        default:
            return V.Unrecognized
    }
}

function st(e) {
    let t = 1 / 0,
        n = null;
    for (let r of e) {
        let e = lt(r.price);
        e != null && e < t && (t = e, n = r.price)
    }
    return n
}

function ct(e, t) {
    return A(e) ?? e.url ?? `offer-${t}`
}

function lt(e) {
    if (!e) return null;
    let t = Number.parseFloat(e.replace(/[^0-9.]/g, ``));
    return Number.isFinite(t) ? t : null
}

function ut(e) {
    "use forget";
    let t = (0, pt.c)(124),
        {
            rootRef: r,
            offer: i,
            onVisitMerchant: a,
            onOpenCheckout: o,
            onLaunchCheckout: c,
            isCheckoutEnabled: l,
            isLoading: f,
            isCheckoutable: p,
            showCheckoutLauncherButton: h,
            checkoutLauncherLaunchProps: ee,
            isMultiItemCartEnabled: g,
            isAddDisabled: te,
            onAddToCart: _,
            showPriceDisclosure: ne,
            showBestPriceOfferTag: v,
            isLastVisibleOffer: ie,
            showBottomBorder: ae,
            onShown: oe
        } = e,
        y = v === void 0 || v,
        se = ie !== void 0 && ie,
        x = ae === void 0 || ae,
        [S, C] = (0, J.useState)(void 0),
        le = ce(),
        w = i.price_details,
        T = w?.base && (w.shipping ?? w.tax) && w.total,
        ue = (w?.display_price === `total_price` || T) && ne,
        E = w?.display_price === `total_price`,
        D = re(s),
        O = h && !D,
        k = O ? ee : null,
        {
            showDebugConversationTurns: de
        } = be(),
        fe = (0, J.useRef)(!1),
        A;
    t[0] !== f || t[1] !== oe || t[2] !== r ? (A = {
        isLoading: f,
        onShown: oe,
        rootRef: r
    }, t[0] = f, t[1] = oe, t[2] = r, t[3] = A) : A = t[3];
    let pe = Qe(A),
        j, me;
    t[4] !== p || t[5] !== f || t[6] !== D || t[7] !== i.checkout_payload ? (j = () => {
        !f && !D && (async () => {
            if (!f && p && i.checkout_payload && !fe.current) {
                fe.current = !0;
                let e = await Ke([{
                    id: i.checkout_payload,
                    quantity: 1,
                    value: i.checkout_payload
                }]);
                e.customer_session_client_secret && C(e.customer_session_client_secret)
            }
        })()
    }, me = [f, p, D, i.checkout_payload], t[4] = p, t[5] = f, t[6] = D, t[7] = i.checkout_payload, t[8] = j, t[9] = me) : (j = t[8], me = t[9]), (0, J.useEffect)(j, me);
    let M = null;
    if (T && w) {
        let e;
        t[10] === w.base ? e = t[11] : (e = (0, Y.jsx)(`div`, {
            children: (0, Y.jsx)(b, {
                id: `offer.breakdown.base`,
                defaultMessage: `Base price: {amount}`,
                values: {
                    amount: w.base
                }
            })
        }), t[10] = w.base, t[11] = e);
        let n;
        t[12] === w.shipping ? n = t[13] : (n = w.shipping && (0, Y.jsx)(`div`, {
            children: (0, Y.jsx)(b, {
                id: `offer.breakdown.shipping`,
                defaultMessage: `Shipping: {amount}`,
                values: {
                    amount: w.shipping
                }
            })
        }), t[12] = w.shipping, t[13] = n);
        let r;
        t[14] === w.tax ? r = t[15] : (r = w.tax && (0, Y.jsx)(`div`, {
            children: (0, Y.jsx)(b, {
                id: `offer.breakdown.tax`,
                defaultMessage: `Tax: {amount}`,
                values: {
                    amount: w.tax
                }
            })
        }), t[14] = w.tax, t[15] = r);
        let i;
        t[16] !== e || t[17] !== n || t[18] !== r ? (i = (0, Y.jsxs)(`div`, {
            className: `space-y-1 text-sm`,
            children: [e, n, r]
        }), t[16] = e, t[17] = n, t[18] = r, t[19] = i) : i = t[19], M = i
    } else if (E) {
        let e;
        t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Y.jsx)(b, {
            id: `ur3//V`,
            defaultMessage: `Prices shown include estimated tax and shipping.`
        }), t[20] = e) : e = t[20], M = e
    }
    let he;
    t[21] !== k || t[22] !== D || t[23] !== c || t[24] !== a ? (he = e => {
        if (D) {
            a(e);
            return
        }
        c(e), k?.onClick(e)
    }, t[21] = k, t[22] = D, t[23] = c, t[24] = a, t[25] = he) : he = t[25];
    let N = he,
        P;
    t[26] === a ? P = t[27] : (P = e => {
        e.stopPropagation(), a(e)
    }, t[26] = a, t[27] = P);
    let _e = P,
        F = O ? _e : void 0,
        ve;
    t[28] !== l || t[29] !== O || t[30] !== p || t[31] !== D || t[32] !== N || t[33] !== o || t[34] !== a || t[35] !== S ? (ve = O ? N : l && p && !D ? e => o(e, S) : a, t[28] = l, t[29] = O, t[30] = p, t[31] = D, t[32] = N, t[33] = o, t[34] = a, t[35] = S, t[36] = ve) : ve = t[36];
    let ye = ve,
        I;
    t[37] === i.price ? I = t[38] : (I = (0, Y.jsx)(`span`, {
        className: `text-[15px] leading-5 font-semibold tracking-[-0.23px]`,
        children: i.price
    }), t[37] = i.price, t[38] = I);
    let L = I,
        R = l && p && !D,
        z = R && g && !!i.checkout_payload,
        B;
    t[39] === i ? B = t[40] : (B = ge(i) ?? i.url, t[39] = i, t[40] = B);
    let V = B,
        H = i.debug_info?.source,
        Se = i.debug_info?.feed_id,
        Ce;
    t[41] === i.debug_info ? Ce = t[42] : (Ce = Object.entries(i.debug_info ?? {}).filter(dt), t[41] = i.debug_info, t[42] = Ce);
    let we = Ce,
        Te;
    t[43] === Symbol.for(`react.memo_cache_sentinel`) ? (Te = d(`hover:bg-token-bg-tertiary -mx-6 cursor-pointer px-6`), t[43] = Te) : Te = t[43];
    let Ee = k?.onPointerEnter,
        De = k?.onPointerEnter,
        Oe = k?.onFocus,
        ke = se && x && `border-b`,
        Ae;
    t[44] === ke ? Ae = t[45] : (Ae = d(`border-token-border-light flex flex-col border-t py-5`, ke), t[44] = ke, t[45] = Ae);
    let je = O ? void 0 : a,
        Me;
    t[46] === Symbol.for(`react.memo_cache_sentinel`) ? (Me = (0, Y.jsx)(Re, {
        className: `text-token-text-tertiary`
    }), t[46] = Me) : Me = t[46];
    let Ne;
    t[47] === i.url ? Ne = t[48] : (Ne = (0, Y.jsx)(xe, {
        className: `border-token-border-light h-5 w-5 rounded-full border`,
        url: i.url,
        size: 128,
        minSize: 16,
        fallback: Me
    }), t[47] = i.url, t[48] = Ne);
    let Pe;
    t[49] === V ? Pe = t[50] : (Pe = (0, Y.jsx)(`div`, {
        className: `truncate`,
        children: V
    }), t[49] = V, t[50] = Pe);
    let Fe;
    t[51] !== V || t[52] !== le ? (Fe = le.formatMessage({
        id: `rigO8r`,
        defaultMessage: `Open {merchantName} in a new tab`
    }, {
        merchantName: V
    }), t[51] = V, t[52] = le, t[53] = Fe) : Fe = t[53];
    let Le;
    t[54] === Symbol.for(`react.memo_cache_sentinel`) ? (Le = (0, Y.jsx)(Ie, {
        className: `text-token-text-secondary mt-0.5 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100`
    }), t[54] = Le) : Le = t[54];
    let U;
    t[55] !== _e || t[56] !== Fe ? (U = (0, Y.jsx)(`button`, {
        type: `button`,
        "aria-label": Fe,
        className: `shrink-0`,
        onClick: _e,
        children: Le
    }), t[55] = _e, t[56] = Fe, t[57] = U) : U = t[57];
    let W;
    t[58] !== F || t[59] !== Ne || t[60] !== Pe || t[61] !== U ? (W = (0, Y.jsxs)(`div`, {
        className: `flex flex-row items-center gap-1.5 text-[15px] leading-5 font-semibold tracking-[-0.23px]`,
        onClick: F,
        children: [Ne, Pe, U]
    }), t[58] = F, t[59] = Ne, t[60] = Pe, t[61] = U, t[62] = W) : W = t[62];
    let G;
    t[63] === i.details ? G = t[64] : (G = (0, Y.jsx)(`div`, {
        className: `text-token-text-secondary text-xs leading-4 whitespace-pre-wrap`,
        children: i.details
    }), t[63] = i.details, t[64] = G);
    let ze;
    t[65] !== je || t[66] !== W || t[67] !== G ? (ze = (0, Y.jsxs)(`div`, {
        className: `group flex flex-col gap-0.5`,
        onClick: je,
        children: [W, G]
    }), t[65] = je, t[66] = W, t[67] = G, t[68] = ze) : ze = t[68];
    let Be;
    t[69] !== l || t[70] !== R || t[71] !== f || t[72] !== i.tag || t[73] !== y || t[74] !== h ? (Be = l && !h && ht({
        tag: i.tag,
        showCheckoutLauncherButton: h,
        isInstantCheckoutEnabled: R,
        isLoading: f,
        showBestPriceOfferTag: y
    }) && (0, Y.jsx)(_t, {
        tag: i.tag
    }), t[69] = l, t[70] = R, t[71] = f, t[72] = i.tag, t[73] = y, t[74] = h, t[75] = Be) : Be = t[75];
    let Ve;
    t[76] !== ze || t[77] !== Be ? (Ve = (0, Y.jsxs)(`div`, {
        className: `flex min-w-0 flex-1 flex-col gap-0.5`,
        children: [ze, Be]
    }), t[76] = ze, t[77] = Be, t[78] = Ve) : Ve = t[78];
    let K;
    t[79] === i.original_price ? K = t[80] : (K = i.original_price && (0, Y.jsx)(`span`, {
        className: `text-token-text-secondary text-[15px] leading-5 tracking-[-0.23px] line-through`,
        children: i.original_price
    }), t[79] = i.original_price, t[80] = K);
    let He;
    t[81] !== L || t[82] !== ue || t[83] !== M ? (He = ue && M ? (0, Y.jsx)(u, {
        label: M,
        children: (0, Y.jsxs)(`span`, {
            className: `flex items-center gap-0.5`,
            children: [L, (0, Y.jsx)(m, {
                className: `text-token-text-secondary h-3 w-3`
            })]
        })
    }) : L, t[81] = L, t[82] = ue, t[83] = M, t[84] = He) : He = t[84];
    let Ue;
    t[85] !== K || t[86] !== He ? (Ue = (0, Y.jsxs)(`div`, {
        className: `flex flex-col items-end pe-2`,
        children: [K, He]
    }), t[85] = K, t[86] = He, t[87] = Ue) : Ue = t[87];
    let We;
    t[88] !== k?.onFocus || t[89] !== k?.onPointerEnter || t[90] !== te || t[91] !== l || t[92] !== O || t[93] !== R || t[94] !== f || t[95] !== N || t[96] !== _ || t[97] !== o || t[98] !== S || t[99] !== z ? (We = O ? (0, Y.jsx)(`div`, {
        className: `flex flex-col items-end`,
        children: (0, Y.jsx)(n, {
            className: `w-fit truncate px-4`,
            size: `medium`,
            color: `secondary`,
            disabled: f,
            onPointerEnter: k?.onPointerEnter,
            onMouseOver: k?.onPointerEnter,
            onFocus: k?.onFocus,
            onClick: N,
            children: (0, Y.jsx)(b, {
                id: `RVcyxH`,
                defaultMessage: `Open`
            })
        })
    }) : l ? R ? (0, Y.jsxs)(`div`, {
        className: `flex items-center gap-2`,
        children: [z && (0, Y.jsx)(n, {
            className: `w-fit truncate px-4`,
            disabled: f || te,
            size: `medium`,
            color: `secondary`,
            type: `button`,
            onClick: _,
            children: (0, Y.jsx)(b, {
                id: `scQ8Wu`,
                defaultMessage: `Add`
            })
        }), (0, Y.jsx)(n, {
            className: `w-fit truncate px-4`,
            disabled: f,
            size: `medium`,
            color: `primary`,
            onClick: e => o(e, S),
            children: (0, Y.jsx)(b, {
                id: `vxb4gy`,
                defaultMessage: `Buy`
            })
        })]
    }) : (0, Y.jsx)(n, {
        className: `w-fit truncate px-4`,
        size: `medium`,
        color: `secondary`,
        children: (0, Y.jsx)(b, {
            id: `CvthQr`,
            defaultMessage: `Visit`
        })
    }) : (0, Y.jsx)(n, {
        className: `w-fit min-w-20 truncate px-4`,
        size: `medium`,
        color: `secondary`,
        children: (0, Y.jsx)(b, {
            id: `CvthQr`,
            defaultMessage: `Visit`
        })
    }), t[88] = k?.onFocus, t[89] = k?.onPointerEnter, t[90] = te, t[91] = l, t[92] = O, t[93] = R, t[94] = f, t[95] = N, t[96] = _, t[97] = o, t[98] = S, t[99] = z, t[100] = We) : We = t[100];
    let Ge;
    t[101] !== Ue || t[102] !== We ? (Ge = (0, Y.jsxs)(`div`, {
        className: `flex flex-row items-center`,
        children: [Ue, We]
    }), t[101] = Ue, t[102] = We, t[103] = Ge) : Ge = t[103];
    let qe;
    t[104] !== Ve || t[105] !== Ge ? (qe = (0, Y.jsxs)(`div`, {
        className: `flex flex-row items-center gap-3`,
        children: [Ve, Ge]
    }), t[104] = Ve, t[105] = Ge, t[106] = qe) : qe = t[106];
    let Je;
    t[107] !== Se || t[108] !== i.debug_info || t[109] !== we || t[110] !== de || t[111] !== H ? (Je = !1, t[107] = Se, t[108] = i.debug_info, t[109] = we, t[110] = de, t[111] = H, t[112] = Je) : Je = t[112];
    let q;
    t[113] !== Ae || t[114] !== qe || t[115] !== Je ? (q = (0, Y.jsxs)(`div`, {
        className: Ae,
        children: [qe, Je]
    }), t[113] = Ae, t[114] = qe, t[115] = Je, t[116] = q) : q = t[116];
    let Ye;
    return t[117] !== ye || t[118] !== pe || t[119] !== Ee || t[120] !== De || t[121] !== Oe || t[122] !== q ? (Ye = (0, Y.jsx)(`div`, {
        ref: pe,
        className: Te,
        onPointerEnter: Ee,
        onMouseOver: De,
        onFocus: Oe,
        onClick: ye,
        children: q
    }), t[117] = ye, t[118] = pe, t[119] = Ee, t[120] = De, t[121] = Oe, t[122] = q, t[123] = Ye) : Ye = t[123], Ye
}

function dt(e) {
    let [t] = e;
    return t !== `source` && t !== `feed_id`
}

function ft(e) {
    return (0, Y.jsx)(`a`, {
        href: e.href,
        className: d(e.className, `underline`),
        target: `_blank`,
        rel: `noreferrer`,
        children: e.children
    })
}
var pt, J, Y, mt, ht, gt, _t, vt = e((() => {
    pt = S(), _e(), R(), p(), Ue(), Ge(), Je(), we(), Oe(), _(), je(), ke(), l(), i(), j(), z(), pe(), B(), ee(), U(), c(), L(), a(), ne(), O(), T(), g(), r(), J = t(x()), se(), M(), Ze(), k(), rt(), ze(), K(), Y = y(), mt = `https://persistent.oaistatic.com/chatgpt/pink_720.jpeg`, ht = ({
        tag: e,
        showCheckoutLauncherButton: t,
        isInstantCheckoutEnabled: n,
        isLoading: r,
        showBestPriceOfferTag: i
    }) => !e || !i && gt(e) || r && gt(e) ? !1 : t ? !0 : !(e.tooltip?.type === `instant_checkout` && !n), gt = e => e.text.trim().toLowerCase() === `best price`, _t = e => {
        "use forget";
        let t = (0, pt.c)(3),
            {
                tag: n
            } = e;
        if (!n) return null;
        let r;
        return t[0] !== n.text || t[1] !== n.tooltip ? (r = n.tooltip ? (0, Y.jsx)(u, {
            label: (0, Y.jsxs)(`div`, {
                className: `flex flex-col items-center justify-center overflow-hidden`,
                children: [(0, Y.jsxs)(`div`, {
                    className: `relative flex h-44 w-full items-center justify-center overflow-hidden`,
                    children: [(0, Y.jsx)(`div`, {
                        className: `bg-token-bg-elevated-secondary absolute inset-0 h-44 w-full overflow-hidden`,
                        children: (0, Y.jsx)(`img`, {
                            src: mt,
                            alt: `tag background`
                        })
                    }), (0, Y.jsx)(`div`, {
                        className: `outline-token-border-light z-1 inline-flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-white shadow-lg outline`,
                        children: (0, Y.jsx)(Le, {
                            className: `h-4.5 w-4.5 text-black`
                        })
                    })]
                }), (0, Y.jsxs)(`div`, {
                    className: `flex flex-col items-center justify-start gap-2 self-stretch p-6 text-start`,
                    children: [(0, Y.jsx)(`div`, {
                        className: `w-full text-base leading-normal`,
                        children: n.tooltip?.title
                    }), (0, Y.jsx)(H, {
                        className: `text-token-text-secondary text-sm leading-relaxed font-normal`,
                        components: {
                            a: ft
                        },
                        children: n.tooltip?.body_markdown
                    })]
                })]
            }),
            theme: `primary`,
            side: `top`,
            align: `start`,
            customPaddingClassName: `p-0`,
            cornerRadius: `2xl`,
            contentClassName: `bg-token-bg-primary shadow-xl`,
            interactive: !0,
            delayDuration: 500,
            children: (0, Y.jsxs)(`div`, {
                className: `text-token-interactive-label-accent-default flex items-center gap-1 text-xs`,
                children: [(0, Y.jsx)(m, {
                    className: `mt-px h-3 w-3`
                }), (0, Y.jsx)(`span`, {
                    className: `leading-3`,
                    children: n.text
                })]
            })
        }) : (0, Y.jsx)(`div`, {
            className: `text-token-interactive-label-accent-default flex items-center gap-1 text-xs`,
            children: (0, Y.jsx)(`span`, {
                className: `leading-3`,
                children: n.text
            })
        }), t[0] = n.text, t[1] = n.tooltip, t[2] = r) : r = t[2], r
    }
}));

function yt({
    title: e,
    children: t,
    headerRef: n,
    stickyHeader: r = !0,
    showBorder: i = !0
}) {
    return (0, bt.jsxs)(`div`, {
        className: `bg-inherit`,
        children: [i && (0, bt.jsx)(`div`, {
            className: `border-token-border-light mx-5 border-t`
        }), (0, bt.jsx)(`div`, {
            ref: n,
            className: d(`text-token-text-primary flex items-center bg-inherit px-5 py-0 pt-6`, r && `sticky top-0 z-10`),
            children: (0, bt.jsx)(`div`, {
                className: `text-[18px] leading-[26px] font-semibold tracking-[-0.45px]`,
                children: e
            })
        }), (0, bt.jsx)(`div`, {
            className: `px-5 pt-2 pb-6`,
            children: t
        })]
    })
}
var bt, xt = e((() => {
    g(), bt = y()
}));

function St({
    contentReference: e,
    trackContentReferenceEvent: t,
    disableAnimation: n,
    isLoading: r = !1,
    headerRef: i,
    productAnalyticsMeta: a,
    productEventUuid: o,
    renderProfiler: s
}) {
    let c = ce(),
        l = (0, Ct.useRef)(!1),
        u = e?.rationale,
        d = !u && r;
    if ((0, Ct.useEffect)(() => {
            u && !l.current && (l.current = !0, s?.logTimingOnce(`render_time_to_rationale`), t(`Product Sidebar Rationale Loaded`, `product_sidebar_rationale_loaded`, `product_rationale`, {
                ...a ?? {},
                ...o ? {
                    product_event_uuid: o
                } : {}
            }))
        }, [a, o, u, s, t]), !u && !d) return null;
    let f = c.formatMessage({
        id: `rYk+aj`,
        defaultMessage: `Looking up product details`
    });
    return (0, X.jsx)(yt, {
        headerRef: i,
        stickyHeader: !1,
        showBorder: !1,
        title: (0, X.jsx)(b, {
            id: `/LSf9O`,
            defaultMessage: `What to know`
        }),
        children: (0, X.jsx)(`div`, {
            children: u ? (0, X.jsx)(Ye, {
                isDisabled: n,
                children: (0, X.jsxs)(`div`, {
                    className: `text-token-text-primary`,
                    children: [(0, X.jsx)(E, {
                        size: `small`,
                        className: `prose-p:m-0 prose-p:inline inline! w-auto!`,
                        children: u
                    }), e?.grouped_citation && (0, X.jsx)(G, {
                        webpageItem: e.grouped_citation,
                        trackContentReferenceEvent: t,
                        className: `align-baseline`,
                        analyticsMetadata: {
                            ...a ?? {},
                            ...o ? {
                                product_event_uuid: o
                            } : {},
                            section: `product_rationale`,
                            section_location: `sidebar`
                        },
                        isLastHovered: !0
                    })]
                })
            }) : (0, X.jsx)(`div`, {
                className: `text-token-text-secondary`,
                children: (0, X.jsx)(I, {
                    text: f
                })
            })
        })
    })
}
var Ct, X, wt = e((() => {
    le(), W(), q(), w(), Ct = t(x()), se(), xt(), X = y()
}));

function Tt({
    contentReference: e,
    trackContentReferenceEvent: t,
    disableAnimation: n,
    headerRef: r,
    productAnalyticsMeta: i,
    productEventUuid: a,
    renderProfiler: o,
    messageId: s
}) {
    let c = (0, Dt.useRef)(!1);
    (0, Dt.useEffect)(() => {
        e && !c.current && (c.current = !0, o?.logTimingOnce(`render_time_to_first_review`), t(`Product Sidebar Reviews Loaded`, `product_sidebar_reviews_loaded`, `product_reviews`, {
            ...i ?? {},
            ...a ? {
                product_event_uuid: a
            } : {}
        }))
    }, [i, a, e, o, t]);

    function l(e) {
        try {
            return new URL(e).hostname.replace(/^www\./, ``)
        } catch {
            return ``
        }
    }

    function u(t) {
        if (!e) return null;
        let n = t.cite && e.cite_map[t.cite]?.url;
        if (n) return n;
        try {
            let e = new URL(t.cite_url ?? ``);
            return e.protocol === `https:` || e.protocol === `http:` ? t.cite_url : null
        } catch {
            return null
        }
    }
    return e ? (0, Z.jsx)(yt, {
        headerRef: r,
        stickyHeader: !1,
        title: (0, Z.jsx)(b, {
            id: `p8XHcJ`,
            defaultMessage: `What people are saying`
        }),
        children: (0, Z.jsxs)(`div`, {
            className: `flex flex-col gap-5`,
            children: [e.summary && (0, Z.jsx)(Ye, {
                isDisabled: n,
                children: (0, Z.jsx)(E, {
                    size: `small`,
                    className: `-mb-1`,
                    children: e.summary
                })
            }), e.reviews.map((r, o) => {
                let c = Ot[r.sentiment ?? `neutral`],
                    p = u(r);
                return (0, Z.jsxs)(f.div, {
                    className: `relative flex flex-col gap-3`,
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: n ? 0 : .4
                    },
                    children: [(0, Z.jsxs)(`div`, {
                        className: d(`flex flex-row items-center gap-2`, `not-prose`),
                        children: [(0, Z.jsx)(xe, {
                            url: p ?? ``,
                            className: `h-8 w-8 rounded-full`,
                            size: 128,
                            minSize: 16,
                            fallback: (0, Z.jsx)(Re, {
                                className: `text-token-text-tertiary`
                            })
                        }), (0, Z.jsxs)(`div`, {
                            className: `flex flex-col`,
                            children: [(0, Z.jsx)(`div`, {
                                className: `text-[14px] leading-5 font-medium tracking-[-0.18px]`,
                                children: r.source
                            }), (0, Z.jsxs)(`div`, {
                                className: `text-token-text-secondary flex flex-row gap-1 text-xs leading-4`,
                                children: [(0, Z.jsx)(`div`, {
                                    children: p ? l(p) : ``
                                }), r.sentiment && c && (0, Z.jsxs)(Z.Fragment, {
                                    children: [`·`, (0, Z.jsx)(c, {
                                        className: `icon-sm text-token-text-secondary`
                                    }), kt[r.sentiment]]
                                })]
                            })]
                        })]
                    }), (0, Z.jsxs)(`div`, {
                        children: [r.theme && (0, Z.jsx)(`div`, {
                            className: `text-token-text-primary`,
                            children: (0, Z.jsx)(E, {
                                size: `small`,
                                className: `prose-p:m-0 prose-p:inline inline! w-auto! font-semibold`,
                                children: r.theme
                            })
                        }), (0, Z.jsxs)(`div`, {
                            className: `text-token-text-primary`,
                            children: [(0, Z.jsx)(E, {
                                size: `small`,
                                className: `prose-p:m-0 prose-p:inline inline! w-auto!`,
                                children: r.summary
                            }), (0, Z.jsx)(Et, {
                                cite: r.cite,
                                contentReference: e,
                                messageId: s,
                                reviewIndex: o,
                                trackContentReferenceEvent: t,
                                analyticsMetadata: {
                                    ...i ?? {},
                                    ...a ? {
                                        product_event_uuid: a
                                    } : {}
                                }
                            })]
                        })]
                    })]
                }, o)
            })]
        })
    }) : null
}

function Et({
    cite: e,
    contentReference: t,
    messageId: n,
    reviewIndex: r,
    trackContentReferenceEvent: i,
    analyticsMetadata: a
}) {
    let {
        cite_map: o
    } = t, s = e ? o[e] : null;
    return s ? (0, Z.jsx)(G, {
        webpageItem: s,
        trackContentReferenceEvent: i,
        analyticsMetadata: {
            ...a,
            section: `product_reviews`,
            section_location: `sidebar`
        },
        isLastHovered: !0,
        noMarginStart: !0,
        impressionKey: `product-review-${n}-${t.start_idx}-${r}`,
        chatgptLinkType: D.CHATGPT_LINK_TYPE_PRODUCT_REVIEW_CITATION,
        chatgptSurfaceLocation: ue.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR
    }) : null
}
var Dt, Z, Ot, kt, At = e((() => {
    z(), Fe(), Pe(), Se(), le(), W(), q(), U(), T(), g(), r(), Dt = t(x()), se(), xt(), Z = y(), Ot = {
        positive: Ae,
        negative: Ne,
        neutral: Me,
        mixed: Me
    }, kt = {
        positive: `Positive`,
        negative: `Negative`,
        neutral: `Mixed`,
        mixed: `Mixed`
    }
}));

function jt(e) {
    return Pt.test(It(e))
}

function Mt(e) {
    let t = e.toLowerCase();
    return Ft.has(t) || /^\d+xl$/.test(t)
}

function Nt({
    groupLabel: e,
    label: t
}) {
    let n = It(t);
    return !jt(e) || !Mt(n) ? n : n.toUpperCase()
}
var Pt, Ft, It, Lt = e((() => {
    Pt = /\bsize(s)?\b/i, Ft = new Set([`xxxs`, `xxs`, `xs`, `s`, `m`, `l`, `xl`, `xxl`, `xxxl`, `xxxxl`, `x/s`, `s/m`, `m/l`, `l/xl`, `xl/xxl`]), It = e => e?.replace(/_/g, ` `).replace(/\s+/g, ` `).trim() ?? ``
}));

function Rt(e) {
    return e.selected
}
var zt, Q, Bt, Vt = e((() => {
        zt = S(), F(), De(), g(), se(), Q = y(), Bt = e => {
            "use forget";
            let t = (0, zt.c)(22),
                {
                    options: n,
                    onSelect: r,
                    isErrored: i
                } = e,
                a = i && `border-token-interactive-label-danger-secondary-default`,
                o;
            t[0] === a ? o = t[1] : (o = d(`radix-state-open:border-token-text-primary border-token-border-heavy bg-token-bg-primary text-token-text-secondary hover:bg-token-bg-primary h-12 w-full justify-between rounded-2xl border px-4 py-3 text-start`, a), t[0] = a, t[1] = o);
            let s;
            t[2] === n ? s = t[3] : (s = n?.find(Rt)?.label ?? (0, Q.jsx)(b, {
                id: `FxgwoS`,
                defaultMessage: `Choose an option`
            }), t[2] = n, t[3] = s);
            let c;
            t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, Q.jsx)(Ce, {
                className: `ms-0.5 h-4 w-4 shrink-0`
            }), t[4] = c) : c = t[4];
            let l;
            t[5] !== o || t[6] !== s ? (l = (0, Q.jsxs)(C.Trigger, {
                className: o,
                children: [s, c]
            }), t[5] = o, t[6] = s, t[7] = l) : l = t[7];
            let u;
            t[8] === r ? u = t[9] : (u = () => r(null, -1), t[8] = r, t[9] = u);
            let f;
            t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, Q.jsx)(b, {
                id: `oVromH`,
                defaultMessage: `--`
            }), t[10] = f) : f = t[10];
            let p;
            t[11] === u ? p = t[12] : (p = (0, Q.jsx)(C.Item, {
                onClick: u,
                children: f
            }), t[11] = u, t[12] = p);
            let m;
            t[13] !== r || t[14] !== n ? (m = n?.map((e, t) => (0, Q.jsx)(C.Item, {
                "aria-label": e.label ?? ``,
                onClick: () => r(e.id, t),
                className: d(e.available === !1 && `text-token-text-tertiary`),
                children: e.label
            }, e.id)), t[13] = r, t[14] = n, t[15] = m) : m = t[15];
            let h;
            t[16] !== p || t[17] !== m ? (h = (0, Q.jsx)(C.Portal, {
                children: (0, Q.jsxs)(C.Content, {
                    children: [p, m]
                })
            }), t[16] = p, t[17] = m, t[18] = h) : h = t[18];
            let ee;
            return t[19] !== h || t[20] !== l ? (ee = (0, Q.jsxs)(C.Root, {
                children: [l, h]
            }), t[19] = h, t[20] = l, t[21] = ee) : ee = t[21], ee
        }
    })),
    Ht, Ut, Wt, Gt = e((() => {
        Ht = S(), g(), x(), Ut = y(), Wt = e => {
            "use forget";
            let t = (0, Ht.c)(7),
                {
                    options: n,
                    onSelect: r
                } = e,
                i;
            if (t[0] !== r || t[1] !== n) {
                let e;
                t[3] === r ? e = t[4] : (e = (e, t) => {
                    let n = e.selected;
                    return (0, Ut.jsx)(`button`, {
                        type: `button`,
                        "aria-label": e.label,
                        className: d(`bg-token-bg-tertiary inline-flex min-h-10 min-w-[56px] items-center justify-center rounded-full px-4 text-[13px] leading-[18px] font-medium tracking-[-0.08px] transition-all`, n ? `border-token-text-primary bg-token-bg-primary border-2 px-[15px] shadow-[0_0_0_1px_var(--token-bg-primary)]` : `border-2 border-transparent`, e.available === !1 && `text-token-text-tertiary line-through`),
                        onClick: () => r(e.selected ? null : e.id, t),
                        children: e.label
                    }, e.id)
                }, t[3] = r, t[4] = e), i = n.map(e), t[0] = r, t[1] = n, t[2] = i
            } else i = t[2];
            let a;
            return t[5] === i ? a = t[6] : (a = (0, Ut.jsx)(`div`, {
                className: `flex flex-wrap gap-2.5`,
                children: i
            }), t[5] = i, t[6] = a), a
        }
    })),
    Kt, qt, Jt, Yt = e((() => {
        Kt = S(), g(), x(), qt = y(), Jt = e => {
            "use forget";
            let t = (0, Kt.c)(7),
                {
                    options: n,
                    onSelect: r
                } = e,
                i;
            if (t[0] !== r || t[1] !== n) {
                let e;
                t[3] === r ? e = t[4] : (e = (e, t) => {
                    let n = e.selected;
                    return (0, qt.jsxs)(`button`, {
                        type: `button`,
                        "aria-label": e.label,
                        className: d(`relative flex h-10 w-10 items-center justify-center rounded-[10px] transition-all`, e.available === !1 && `opacity-50`),
                        onClick: () => r(e.selected ? null : e.id, t),
                        children: [(0, qt.jsx)(`span`, {
                            className: d(`border-token-border-default absolute inset-0 rounded-[10px] border`, n && `ring-token-text-primary ring-offset-token-bg-primary ring-2 ring-offset-2`)
                        }), e.swatch_color_hex ? (0, qt.jsx)(`span`, {
                            className: `block h-10 w-10 rounded-[10px] border border-black/10`,
                            style: {
                                backgroundColor: e.swatch_color_hex
                            }
                        }) : e.swatch_image_url ? (0, qt.jsx)(`img`, {
                            className: `h-10 w-10 rounded-[10px] object-cover`,
                            src: e.swatch_image_url,
                            alt: e.label
                        }) : null]
                    }, e.id)
                }, t[3] = r, t[4] = e), i = n.map(e), t[0] = r, t[1] = n, t[2] = i
            } else i = t[2];
            let a;
            return t[5] === i ? a = t[6] : (a = (0, qt.jsx)(`div`, {
                className: `flex flex-wrap items-center gap-3`,
                children: i
            }), t[5] = i, t[6] = a), a
        }
    }));

function Xt({
    options: e,
    updateOption: t,
    showErrors: n
}) {
    return e ? (0, $.jsx)($.Fragment, {
        children: e.map((e, r) => {
            let i = e.options.find(t => t.id === e.selected_option_id) ?? null,
                a = e.options.map(t => ({
                    ...t,
                    label: Nt({
                        groupLabel: e.label,
                        label: t.label
                    })
                }));
            return (0, $.jsxs)(`div`, {
                className: d(`flex flex-col gap-2`, r > 0 && `mt-5`),
                children: [(0, $.jsxs)(`div`, {
                    className: `flex items-center gap-1 text-[14px] leading-5 tracking-[-0.18px]`,
                    children: [(0, $.jsx)(`span`, {
                        className: `text-sm font-medium capitalize`,
                        children: It(e.label)
                    }), e.type !== `dropdown` && i && (0, $.jsxs)($.Fragment, {
                        children: [(0, $.jsx)(b, {
                            id: `6JW/+Y`,
                            defaultMessage: `•`
                        }), (0, $.jsx)(`span`, {
                            className: `text-token-text-secondary text-sm`,
                            children: Nt({
                                groupLabel: e.label,
                                label: i.label
                            })
                        })]
                    })]
                }), e.type === `swatch` ? (0, $.jsx)(Jt, {
                    options: a,
                    onSelect: (n, r) => t(e.id, n, r)
                }) : e.type === `pill` ? (0, $.jsx)(Wt, {
                    options: a,
                    onSelect: (n, r) => t(e.id, n, r)
                }) : (0, $.jsx)(Bt, {
                    options: a,
                    onSelect: (n, r) => t(e.id, n, r),
                    isErrored: n && !e.selected_option_id
                }), !i && n && (0, $.jsxs)(`div`, {
                    className: `text-token-interactive-label-danger-secondary-default flex items-center gap-1 text-sm`,
                    children: [(0, $.jsx)(v, {
                        className: `icon-sm`
                    }), (0, $.jsx)(b, {
                        id: `UsAVv3`,
                        defaultMessage: `Choose an option`
                    })]
                })]
            }, e.id)
        })
    }) : null
}
var $, Zt = e((() => {
    te(), g(), se(), Lt(), Vt(), Gt(), Yt(), $ = y()
}));
export {
    St as a, xt as c, At as i, it as l, Zt as n, wt as o, Tt as r, yt as s, Xt as t, vt as u
};
//# sourceMappingURL=f4222f0c-d2to250yz0soupg0.js.map