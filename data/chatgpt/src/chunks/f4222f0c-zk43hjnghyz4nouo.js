import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    A8 as r,
    At as i,
    B0 as a,
    Eat as o,
    I5 as s,
    J5 as c,
    K0 as l,
    LU as u,
    Qy as d,
    Zy as f,
    cn as p,
    eE as m,
    fB as ee,
    grt as te,
    hn as ne,
    l7 as h,
    oW as re,
    pB as g,
    sW as ie,
    u7 as _,
    urt as ae,
    wat as oe,
    zU as se
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Bn as v,
    Nn as y,
    Rn as b,
    Vn as x,
    wn as S,
    zn as ce
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $ft as le,
    AA as ue,
    B3t as C,
    Clt as w,
    Eut as T,
    Gjn as de,
    Hjn as fe,
    Kjn as E,
    Kkn as D,
    Kst as O,
    L3t as k,
    Tlt as pe,
    Tut as me,
    UWn as he,
    VWn as ge,
    Vjn as _e,
    Wkn as A,
    Wst as j,
    Yjn as M,
    _Ln as ve,
    _tn as N,
    ept as P,
    fbt as F,
    gLn as ye,
    jA as I,
    npt as L,
    pbt as R,
    rwt as z,
    twt as be,
    vUn as B,
    wlt as V,
    yUn as xe,
    ytn as Se
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    $b as Ce,
    $h as we,
    Kv as Te,
    Qb as Ee,
    Qh as De,
    Ry as Oe,
    TC as ke,
    Zh as Ae,
    dg as je,
    eg as H,
    fg as Me,
    gr as Ne,
    hr as Pe,
    qv as Fe,
    wC as Ie,
    zy as Le
} from "./30901919-k5uqyx4vyplt9toa.js";
import {
    n as Re,
    t as U
} from "./0e5afe53-d830ix843j2kh0p0.js";
import {
    a as W,
    r as G
} from "./dccfc4ad-g550gyn0rmeyan9b.js";
import {
    C as ze,
    i as Be
} from "./2b67bcd8-flkzsbsq2vplszif.js";
import {
    h as Ve,
    m as K,
    p as He
} from "./1362c49f-o7ut20g5vd9ausr7.js";
import {
    n as Ue,
    r as We
} from "./e1d1ae28-kvd8n16a4g2gy1nz.js";
import {
    E as Ge,
    T as Ke
} from "./6fd89734-odivrvqrbnk1lxc9.js";
import {
    n as qe,
    r as Je
} from "./eda93c10-ons3o38t0n7niuc5.js";
import {
    n as q,
    t as Ye
} from "./407dfab1-ez494lhei377bi0v.js";
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
    isLoading: o,
    suppressOfferAnimations: u = !1,
    onOpenCheckout: d,
    trackContentReferenceEvent: f,
    analyticsMetadata: m,
    showBestPriceOfferTag: ee = !0,
    showBottomBorder: te = !0,
    className: re,
    interactionSource: g,
    initialVisibleOfferCount: ie = 3
}) {
    "use no forget";
    let _ = ae(`3375735072`),
        v = c(l),
        b = _ && ae(`3109853659`),
        x = _ ? qe() : null,
        S = We(),
        le = se(),
        ue = ce(),
        C = c(() => e?.serverId$()),
        w = c(() => e ? Be(e) : m ?? {}),
        [T, D] = (0, J.useState)(!1),
        O = (a.variants && Object.values(He(a.variants)).map(e => e.label).join(` • `)) ?? null,
        k = ie,
        pe = t.length > 0,
        he = t.slice(0, T ? t.length : k),
        ge = t.length > k,
        j = t.slice(k),
        M = j.length,
        N = st(j),
        P = ot(g),
        F = t.filter(e => e.available).length,
        ye = t.filter(e => e.checkoutable).length,
        I = a.analytics_meta ?? {},
        z = a.product_event_uuid,
        be = (0, J.useRef)(o),
        B = (0, J.useRef)(u),
        V = be.current && !o,
        xe = B.current && !u,
        Se = !o && !V && !u && !xe;
    (0, J.useEffect)(() => {
        be.current = o, B.current = u
    }, [o, u]);
    let Ce = ({
        offer: e,
        offerIndex: n,
        offerSource: o,
        feedId: s,
        action: c,
        hadBuyButton: l,
        includeSiteUrl: u
    }) => {
        let d = a.popularity_metadata?.product_tags?.includes(`popular`) ?? !1,
            p = `product_offer_clicked`;
        f(`Product Offer Clicked`, p, `product_entity`, {
            content_reference_start_index: r,
            product_index: i,
            offer_index: n,
            interaction_source: g,
            ...I,
            product_id: a.id,
            product_event_uuid: z,
            product_url: a.url,
            offer_url: e.url,
            offers_count: t.length,
            price: e.price?.toString(),
            action: c,
            merchant_name: e.merchant_name,
            source: a.provider,
            feed_id: s,
            has_popular_tag: d
        }, void 0, e => ve(p, `offer_clicked`, e, {
            productId: a.id,
            interactionSource: g,
            offerCount: t.length,
            offerIndex: n
        })), c === `open_site_clicked` && f(`link_action`, null, `product_entity`, {
            action: `click`,
            link_type: `product_offer`,
            section_location: `sidebar`,
            content_reference_start_index: r,
            product_index: i,
            offer_index: n,
            interaction_source: g,
            product_id: a.id,
            product_event_uuid: z,
            merchant_name: e.merchant_name,
            url: e.url
        }, t => {
            R({
                action: `click`,
                actionType: _e.CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED,
                analyticsMetadata: t,
                contentReferenceStartIndex: r,
                contentReferenceType: P,
                linkAffordance: de.CHATGPT_LINK_AFFORDANCE_BUTTON,
                linkType: E.CHATGPT_LINK_TYPE_PRODUCT_OFFER,
                linkIndex: n + 1,
                parentContext: {
                    entityId: a.id,
                    entityCategory: `product`,
                    contentReferenceStartIndex: r,
                    messageId: t.messageId
                },
                surfaceLocation: fe.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR,
                url: e.url
            })
        }), L({
            productOfferInteractionEventType: A.CHATGPT_PRODUCT_OFFER_INTERACTION_EVENT_TYPE_OFFER_CLICKED,
            clientThreadId: w.clientThreadId,
            product: a,
            offerIndex: n,
            offer: e,
            offerCount: t.length,
            contentReferenceType: P,
            messageId: w.messageId,
            contentReferenceStartIndex: r
        });
        let m = {
            content_reference_start_index: r,
            product_index: i,
            interaction_source: g,
            ...I,
            product_id: a.id,
            product_event_uuid: z,
            product_url: a.url,
            action: c,
            section: `product_detail`,
            section_location: `sidebar`,
            section_index: n,
            offer_index: n,
            merchant_name: e.merchant_name,
            price: e.price?.toString(),
            had_buy_button: l,
            variants: O,
            source: o,
            feed_id: s,
            has_popular_tag: d
        };
        u && (m.site_url = e.url), f(`product_offer`, `product_offer`, `product_entity`, m)
    };
    return (0, J.useEffect)(() => {
        if (o || !pe) return;
        let e = {
                ...I,
                product_event_uuid: z,
                total_count: t.length,
                available_count: F,
                checkoutable_count: ye,
                interaction_source: g,
                is_variant: !!O,
                source: a.provider,
                has_popular_tag: a.popularity_metadata?.product_tags?.includes(`popular`) ?? !1
            },
            n = `product_offers_shown`;
        f(`Product Offers Shown`, n, `product_entity`, e, void 0, e => ve(n, `offers_shown`, e, {
            productId: a.id,
            interactionSource: g,
            offerCount: t.length
        })), f(`product_detail`, `product_detail`, `product_entity`, {
            ...I,
            product_event_uuid: z,
            interaction_source: g,
            action: `updated`,
            variants_count: a.variants?.length ?? 0,
            variants_with_selection_count: a.variants?.filter(e => e.selected_option_id).length ?? 0,
            offers_count: F,
            checkoutable_offers_count: ye,
            has_popular_tag: a.popularity_metadata?.product_tags?.includes(`popular`) ?? !1
        }), L({
            productOfferInteractionEventType: A.CHATGPT_PRODUCT_OFFER_INTERACTION_EVENT_TYPE_OFFER_LIST_SHOWN,
            clientThreadId: w.clientThreadId,
            product: a,
            offerIndex: void 0,
            offer: void 0,
            offerCount: t.length,
            contentReferenceType: P,
            messageId: w.messageId,
            contentReferenceStartIndex: r
        }), oe.addAction(`shopping_checkout.offers_shown`, e)
    }, [pe, o, O]), !o && !pe ? null : (0, Y.jsx)(`div`, {
        className: h(re, `relative`),
        children: (0, Y.jsxs)(p.div, {
            layout: !0,
            transition: Se ? void 0 : {
                duration: 0
            },
            children: [(0, Y.jsx)(ne, {
                initial: !1,
                children: he.map((e, n) => {
                    let c = e.debug_info?.feed_id,
                        l = e.debug_info?.source,
                        u = _ && e.checkoutable,
                        m = e.launcherPayload ?? null,
                        ne = m ? s(() => me({
                            ...Xe(m, w.messageId),
                            conversationId: C ?? null
                        })) : null,
                        h = ne != null,
                        re = !v && (h || u);
                    return (0, Y.jsx)(p.div, {
                        layout: !0,
                        initial: Se ? {
                            opacity: 0,
                            y: -6
                        } : !1,
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: Se ? {
                            opacity: 0,
                            y: -6
                        } : void 0,
                        transition: Se ? {
                            duration: .18,
                            ease: `easeOut`
                        } : {
                            duration: 0
                        },
                        children: (0, Y.jsx)(ut, {
                            offer: e,
                            isCheckoutEnabled: _,
                            isLoading: o,
                            isCheckoutable: u,
                            showCheckoutLauncherButton: h,
                            checkoutLauncherLaunchProps: ne,
                            isMultiItemCartEnabled: b,
                            isAddDisabled: S.status === `loading`,
                            showPriceDisclosure: !!a.show_price_disclosure,
                            showBestPriceOfferTag: ee,
                            showBottomBorder: te || ge,
                            isLastVisibleOffer: n === he.length - 1 && !o,
                            onOpenCheckout: (t, r) => {
                                t.stopPropagation(), d(), _ && x && Ve(a) && e.checkout_payload && (x.openNewCheckout({
                                    preloadCustomerSessionClientSecret: r,
                                    metadata: w,
                                    items: [{
                                        id: e.checkout_payload,
                                        productId: a.id,
                                        quantity: 1,
                                        value: e.checkout_payload
                                    }]
                                }), Ce({
                                    offer: e,
                                    offerIndex: n,
                                    offerSource: l,
                                    feedId: c,
                                    action: `buy_button_clicked`,
                                    hadBuyButton: !0,
                                    includeSiteUrl: !1
                                }))
                            },
                            onAddToCart: async t => {
                                t.stopPropagation(), e.checkout_payload && (await S.addItem(e.checkout_payload) ? le.success(ue.formatMessage({
                                    id: `3u8eef`,
                                    defaultMessage: `Added to cart`
                                }), {
                                    duration: 2
                                }) : le.danger(ue.formatMessage({
                                    id: `IZjwsE`,
                                    defaultMessage: `Failed to add to cart`
                                }), {
                                    duration: 3
                                }))
                            },
                            onVisitMerchant: t => {
                                t.stopPropagation(), Ce({
                                    offer: e,
                                    offerIndex: n,
                                    offerSource: l,
                                    feedId: c,
                                    action: `open_site_clicked`,
                                    hadBuyButton: re,
                                    includeSiteUrl: !0
                                }), window.open(e.url, `_blank`)
                            },
                            onLaunchCheckout: t => {
                                t.stopPropagation(), Ce({
                                    offer: e,
                                    offerIndex: n,
                                    offerSource: l,
                                    feedId: c,
                                    action: `buy_button_clicked`,
                                    hadBuyButton: !0,
                                    includeSiteUrl: !0
                                })
                            },
                            onShown: () => {
                                f(`product_offer`, `product_offer`, `product_entity`, {
                                    content_reference_start_index: r,
                                    product_index: i,
                                    ...I,
                                    product_id: a.id,
                                    product_event_uuid: z,
                                    product_url: a.url,
                                    action: `shown`,
                                    section: `product_detail`,
                                    section_location: `sidebar`,
                                    section_index: n,
                                    offer_index: n,
                                    merchant_name: e.merchant_name,
                                    price: e.price?.toString(),
                                    had_buy_button: re,
                                    checkoutable: e.checkoutable,
                                    source: l,
                                    feed_id: c,
                                    has_popular_tag: a.popularity_metadata?.product_tags?.includes(`popular`) ?? !1
                                }), f(`link_action`, null, `product_entity`, {
                                    action: `show`,
                                    link_type: `product_offer`,
                                    section_location: `sidebar`,
                                    content_reference_start_index: r,
                                    product_index: i,
                                    offer_index: n,
                                    interaction_source: g,
                                    product_id: a.id,
                                    product_event_uuid: z,
                                    merchant_name: e.merchant_name,
                                    url: e.url
                                }, t => {
                                    R({
                                        action: `show`,
                                        actionType: _e.CHATGPT_ENGAGEMENT_ACTION_TYPE_SHOWN,
                                        analyticsMetadata: t,
                                        contentReferenceStartIndex: r,
                                        contentReferenceType: P,
                                        linkAffordance: de.CHATGPT_LINK_AFFORDANCE_BUTTON,
                                        linkType: E.CHATGPT_LINK_TYPE_PRODUCT_OFFER,
                                        linkIndex: n + 1,
                                        parentContext: {
                                            entityId: a.id,
                                            entityCategory: `product`,
                                            contentReferenceStartIndex: r,
                                            messageId: t.messageId
                                        },
                                        surfaceLocation: fe.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR,
                                        url: e.url
                                    })
                                }), L({
                                    productOfferInteractionEventType: A.CHATGPT_PRODUCT_OFFER_INTERACTION_EVENT_TYPE_OFFER_SHOWN,
                                    clientThreadId: w.clientThreadId,
                                    product: a,
                                    offerIndex: n,
                                    offer: e,
                                    offerCount: t.length,
                                    contentReferenceType: P,
                                    messageId: w.messageId,
                                    contentReferenceStartIndex: r
                                })
                            }
                        })
                    }, ct(e, n))
                })
            }), o && (0, Y.jsx)(`div`, {
                role: `status`,
                "aria-busy": !0,
                className: `space-y-0`,
                children: Array.from({
                    length: k
                }).map((e, t) => (0, Y.jsx)(at, {}, `offer-skeleton-${t}`))
            }), ge && !o && (0, Y.jsx)(p.div, {
                layout: !0,
                transition: Se ? {
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
                    onClick: () => D(e => !e),
                    contentWrapperClassName: `gap-1`,
                    "aria-expanded": T,
                    children: [T ? (0, Y.jsx)(y, {
                        id: `Gl3oLS`,
                        defaultMessage: `See less`
                    }) : N ? (0, Y.jsx)(y, {
                        id: `y+cCno`,
                        defaultMessage: `{hiddenOfferCount, plural, one {# other seller} other {# other sellers}} • Starting at {price}`,
                        values: {
                            hiddenOfferCount: M,
                            price: N
                        }
                    }) : (0, Y.jsx)(y, {
                        id: `f9tOaY`,
                        defaultMessage: `See more`
                    }), T ? (0, Y.jsx)(Te, {
                        className: `mt-0.5`
                    }) : (0, Y.jsx)(Ie, {})]
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
            children: [(0, Y.jsx)(j, {
                className: `h-4 w-4 rounded-full!`
            }), (0, Y.jsx)(j, {
                className: `h-4 w-28`
            })]
        }), (0, Y.jsx)(j, {
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
                children: (0, Y.jsx)(j, {
                    className: `h-9 w-15 rounded-[18px]!`
                })
            })]
        })
    }), e[1] = n) : n = e[1], n
}

function ot(e) {
    switch (e) {
        case `inline_link`:
            return le.ProductEntity;
        case `carousel`:
            return le.Products;
        default:
            return le.Unrecognized
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
    return V(e) ?? e.url ?? `offer-${t}`
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
            onLaunchCheckout: s,
            isCheckoutEnabled: u,
            isLoading: d,
            isCheckoutable: p,
            showCheckoutLauncherButton: m,
            checkoutLauncherLaunchProps: te,
            isMultiItemCartEnabled: ne,
            isAddDisabled: re,
            onAddToCart: g,
            showPriceDisclosure: ie,
            showBestPriceOfferTag: _,
            isLastVisibleOffer: ae,
            showBottomBorder: oe,
            onShown: se
        } = e,
        v = _ === void 0 || _,
        b = ae !== void 0 && ae,
        x = oe === void 0 || oe,
        [S, le] = (0, J.useState)(void 0),
        ue = ce(),
        C = i.price_details,
        T = C?.base && (C.shipping ?? C.tax) && C.total,
        de = (C?.display_price === `total_price` || T) && ie,
        fe = C?.display_price === `total_price`,
        E = c(l),
        D = m && !E,
        O = D ? te : null,
        {
            showDebugConversationTurns: k
        } = Se(),
        pe = (0, J.useRef)(!1),
        me;
    t[0] !== d || t[1] !== se || t[2] !== r ? (me = {
        isLoading: d,
        onShown: se,
        rootRef: r
    }, t[0] = d, t[1] = se, t[2] = r, t[3] = me) : me = t[3];
    let he = Qe(me),
        ge, _e;
    t[4] !== p || t[5] !== d || t[6] !== E || t[7] !== i.checkout_payload ? (ge = () => {
        !d && !E && (async () => {
            if (!d && p && i.checkout_payload && !pe.current) {
                pe.current = !0;
                let e = await Ke([{
                    id: i.checkout_payload,
                    quantity: 1,
                    value: i.checkout_payload
                }]);
                e.customer_session_client_secret && le(e.customer_session_client_secret)
            }
        })()
    }, _e = [d, p, E, i.checkout_payload], t[4] = p, t[5] = d, t[6] = E, t[7] = i.checkout_payload, t[8] = ge, t[9] = _e) : (ge = t[8], _e = t[9]), (0, J.useEffect)(ge, _e);
    let A = null;
    if (T && C) {
        let e;
        t[10] === C.base ? e = t[11] : (e = (0, Y.jsx)(`div`, {
            children: (0, Y.jsx)(y, {
                id: `offer.breakdown.base`,
                defaultMessage: `Base price: {amount}`,
                values: {
                    amount: C.base
                }
            })
        }), t[10] = C.base, t[11] = e);
        let n;
        t[12] === C.shipping ? n = t[13] : (n = C.shipping && (0, Y.jsx)(`div`, {
            children: (0, Y.jsx)(y, {
                id: `offer.breakdown.shipping`,
                defaultMessage: `Shipping: {amount}`,
                values: {
                    amount: C.shipping
                }
            })
        }), t[12] = C.shipping, t[13] = n);
        let r;
        t[14] === C.tax ? r = t[15] : (r = C.tax && (0, Y.jsx)(`div`, {
            children: (0, Y.jsx)(y, {
                id: `offer.breakdown.tax`,
                defaultMessage: `Tax: {amount}`,
                values: {
                    amount: C.tax
                }
            })
        }), t[14] = C.tax, t[15] = r);
        let i;
        t[16] !== e || t[17] !== n || t[18] !== r ? (i = (0, Y.jsxs)(`div`, {
            className: `space-y-1 text-sm`,
            children: [e, n, r]
        }), t[16] = e, t[17] = n, t[18] = r, t[19] = i) : i = t[19], A = i
    } else if (fe) {
        let e;
        t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Y.jsx)(y, {
            id: `ur3//V`,
            defaultMessage: `Prices shown include estimated tax and shipping.`
        }), t[20] = e) : e = t[20], A = e
    }
    let j;
    t[21] !== O || t[22] !== E || t[23] !== s || t[24] !== a ? (j = e => {
        if (E) {
            a(e);
            return
        }
        s(e), O?.onClick(e)
    }, t[21] = O, t[22] = E, t[23] = s, t[24] = a, t[25] = j) : j = t[25];
    let M = j,
        ve;
    t[26] === a ? ve = t[27] : (ve = e => {
        e.stopPropagation(), a(e)
    }, t[26] = a, t[27] = ve);
    let N = ve,
        P = D ? N : void 0,
        F;
    t[28] !== u || t[29] !== D || t[30] !== p || t[31] !== E || t[32] !== M || t[33] !== o || t[34] !== a || t[35] !== S ? (F = D ? M : u && p && !E ? e => o(e, S) : a, t[28] = u, t[29] = D, t[30] = p, t[31] = E, t[32] = M, t[33] = o, t[34] = a, t[35] = S, t[36] = F) : F = t[36];
    let ye = F,
        I;
    t[37] === i.price ? I = t[38] : (I = (0, Y.jsx)(`span`, {
        className: `text-[15px] leading-5 font-semibold tracking-[-0.23px]`,
        children: i.price
    }), t[37] = i.price, t[38] = I);
    let L = I,
        R = u && p && !E,
        z = R && ne && !!i.checkout_payload,
        B;
    t[39] === i ? B = t[40] : (B = w(i) ?? i.url, t[39] = i, t[40] = B);
    let V = B,
        xe = i.debug_info?.source,
        we = i.debug_info?.feed_id,
        Te;
    t[41] === i.debug_info ? Te = t[42] : (Te = Object.entries(i.debug_info ?? {}).filter(dt), t[41] = i.debug_info, t[42] = Te);
    let Ee = Te,
        De;
    t[43] === Symbol.for(`react.memo_cache_sentinel`) ? (De = h(`hover:bg-token-bg-tertiary -mx-6 cursor-pointer px-6`), t[43] = De) : De = t[43];
    let Oe = O?.onPointerEnter,
        ke = O?.onPointerEnter,
        Ae = O?.onFocus,
        je = b && x && `border-b`,
        H;
    t[44] === je ? H = t[45] : (H = h(`border-token-border-light flex flex-col border-t py-5`, je), t[44] = je, t[45] = H);
    let Me = D ? void 0 : a,
        Ne;
    t[46] === Symbol.for(`react.memo_cache_sentinel`) ? (Ne = (0, Y.jsx)(Re, {
        className: `text-token-text-tertiary`
    }), t[46] = Ne) : Ne = t[46];
    let Pe;
    t[47] === i.url ? Pe = t[48] : (Pe = (0, Y.jsx)(be, {
        className: `border-token-border-light h-5 w-5 rounded-full border`,
        url: i.url,
        size: 128,
        minSize: 16,
        fallback: Ne
    }), t[47] = i.url, t[48] = Pe);
    let Fe;
    t[49] === V ? Fe = t[50] : (Fe = (0, Y.jsx)(`div`, {
        className: `truncate`,
        children: V
    }), t[49] = V, t[50] = Fe);
    let Ie;
    t[51] !== V || t[52] !== ue ? (Ie = ue.formatMessage({
        id: `rigO8r`,
        defaultMessage: `Open {merchantName} in a new tab`
    }, {
        merchantName: V
    }), t[51] = V, t[52] = ue, t[53] = Ie) : Ie = t[53];
    let Le;
    t[54] === Symbol.for(`react.memo_cache_sentinel`) ? (Le = (0, Y.jsx)(Ce, {
        className: `text-token-text-secondary mt-0.5 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100`
    }), t[54] = Le) : Le = t[54];
    let U;
    t[55] !== N || t[56] !== Ie ? (U = (0, Y.jsx)(`button`, {
        type: `button`,
        "aria-label": Ie,
        className: `shrink-0`,
        onClick: N,
        children: Le
    }), t[55] = N, t[56] = Ie, t[57] = U) : U = t[57];
    let W;
    t[58] !== P || t[59] !== Pe || t[60] !== Fe || t[61] !== U ? (W = (0, Y.jsxs)(`div`, {
        className: `flex flex-row items-center gap-1.5 text-[15px] leading-5 font-semibold tracking-[-0.23px]`,
        onClick: P,
        children: [Pe, Fe, U]
    }), t[58] = P, t[59] = Pe, t[60] = Fe, t[61] = U, t[62] = W) : W = t[62];
    let G;
    t[63] === i.details ? G = t[64] : (G = (0, Y.jsx)(`div`, {
        className: `text-token-text-secondary text-xs leading-4 whitespace-pre-wrap`,
        children: i.details
    }), t[63] = i.details, t[64] = G);
    let ze;
    t[65] !== Me || t[66] !== W || t[67] !== G ? (ze = (0, Y.jsxs)(`div`, {
        className: `group flex flex-col gap-0.5`,
        onClick: Me,
        children: [W, G]
    }), t[65] = Me, t[66] = W, t[67] = G, t[68] = ze) : ze = t[68];
    let Be;
    t[69] !== u || t[70] !== R || t[71] !== d || t[72] !== i.tag || t[73] !== v || t[74] !== m ? (Be = u && !m && ht({
        tag: i.tag,
        showCheckoutLauncherButton: m,
        isInstantCheckoutEnabled: R,
        isLoading: d,
        showBestPriceOfferTag: v
    }) && (0, Y.jsx)(_t, {
        tag: i.tag
    }), t[69] = u, t[70] = R, t[71] = d, t[72] = i.tag, t[73] = v, t[74] = m, t[75] = Be) : Be = t[75];
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
    t[81] !== L || t[82] !== de || t[83] !== A ? (He = de && A ? (0, Y.jsx)(f, {
        label: A,
        children: (0, Y.jsxs)(`span`, {
            className: `flex items-center gap-0.5`,
            children: [L, (0, Y.jsx)(ee, {
                className: `text-token-text-secondary h-3 w-3`
            })]
        })
    }) : L, t[81] = L, t[82] = de, t[83] = A, t[84] = He) : He = t[84];
    let Ue;
    t[85] !== K || t[86] !== He ? (Ue = (0, Y.jsxs)(`div`, {
        className: `flex flex-col items-end pe-2`,
        children: [K, He]
    }), t[85] = K, t[86] = He, t[87] = Ue) : Ue = t[87];
    let We;
    t[88] !== O?.onFocus || t[89] !== O?.onPointerEnter || t[90] !== re || t[91] !== u || t[92] !== D || t[93] !== R || t[94] !== d || t[95] !== M || t[96] !== g || t[97] !== o || t[98] !== S || t[99] !== z ? (We = D ? (0, Y.jsx)(`div`, {
        className: `flex flex-col items-end`,
        children: (0, Y.jsx)(n, {
            className: `w-fit truncate px-4`,
            size: `medium`,
            color: `secondary`,
            disabled: d,
            onPointerEnter: O?.onPointerEnter,
            onMouseOver: O?.onPointerEnter,
            onFocus: O?.onFocus,
            onClick: M,
            children: (0, Y.jsx)(y, {
                id: `RVcyxH`,
                defaultMessage: `Open`
            })
        })
    }) : u ? R ? (0, Y.jsxs)(`div`, {
        className: `flex items-center gap-2`,
        children: [z && (0, Y.jsx)(n, {
            className: `w-fit truncate px-4`,
            disabled: d || re,
            size: `medium`,
            color: `secondary`,
            type: `button`,
            onClick: g,
            children: (0, Y.jsx)(y, {
                id: `scQ8Wu`,
                defaultMessage: `Add`
            })
        }), (0, Y.jsx)(n, {
            className: `w-fit truncate px-4`,
            disabled: d,
            size: `medium`,
            color: `primary`,
            onClick: e => o(e, S),
            children: (0, Y.jsx)(y, {
                id: `vxb4gy`,
                defaultMessage: `Buy`
            })
        })]
    }) : (0, Y.jsx)(n, {
        className: `w-fit truncate px-4`,
        size: `medium`,
        color: `secondary`,
        children: (0, Y.jsx)(y, {
            id: `CvthQr`,
            defaultMessage: `Visit`
        })
    }) : (0, Y.jsx)(n, {
        className: `w-fit min-w-20 truncate px-4`,
        size: `medium`,
        color: `secondary`,
        children: (0, Y.jsx)(y, {
            id: `CvthQr`,
            defaultMessage: `Visit`
        })
    }), t[88] = O?.onFocus, t[89] = O?.onPointerEnter, t[90] = re, t[91] = u, t[92] = D, t[93] = R, t[94] = d, t[95] = M, t[96] = g, t[97] = o, t[98] = S, t[99] = z, t[100] = We) : We = t[100];
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
    t[107] !== we || t[108] !== i.debug_info || t[109] !== Ee || t[110] !== k || t[111] !== xe ? (Je = !1, t[107] = we, t[108] = i.debug_info, t[109] = Ee, t[110] = k, t[111] = xe, t[112] = Je) : Je = t[112];
    let q;
    t[113] !== H || t[114] !== qe || t[115] !== Je ? (q = (0, Y.jsxs)(`div`, {
        className: H,
        children: [qe, Je]
    }), t[113] = H, t[114] = qe, t[115] = Je, t[116] = q) : q = t[116];
    let Ye;
    return t[117] !== ye || t[118] !== he || t[119] !== Oe || t[120] !== ke || t[121] !== Ae || t[122] !== q ? (Ye = (0, Y.jsx)(`div`, {
        ref: he,
        className: De,
        onPointerEnter: Oe,
        onMouseOver: ke,
        onFocus: Ae,
        onClick: ye,
        children: q
    }), t[117] = ye, t[118] = he, t[119] = Oe, t[120] = ke, t[121] = Ae, t[122] = q, t[123] = Ye) : Ye = t[123], Ye
}

function dt(e) {
    let [t] = e;
    return t !== `source` && t !== `feed_id`
}

function ft(e) {
    return (0, Y.jsx)(`a`, {
        href: e.href,
        className: h(e.className, `underline`),
        target: `_blank`,
        rel: `noreferrer`,
        children: e.children
    })
}
var pt, J, Y, mt, ht, gt, _t, vt = e((() => {
    pt = S(), ye(), P(), m(), Ue(), Ge(), Je(), ke(), Fe(), g(), Ee(), Pe(), d(), a(), T(), z(), O(), N(), r(), U(), u(), F(), o(), te(), D(), M(), _(), i(), J = t(x()), b(), ge(), Ze(), pe(), rt(), ze(), K(), Y = v(), mt = `https://persistent.oaistatic.com/chatgpt/pink_720.jpeg`, ht = ({
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
        return t[0] !== n.text || t[1] !== n.tooltip ? (r = n.tooltip ? (0, Y.jsx)(f, {
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
                        children: (0, Y.jsx)(Ne, {
                            className: `h-4.5 w-4.5 text-black`
                        })
                    })]
                }), (0, Y.jsxs)(`div`, {
                    className: `flex flex-col items-center justify-start gap-2 self-stretch p-6 text-start`,
                    children: [(0, Y.jsx)(`div`, {
                        className: `w-full text-base leading-normal`,
                        children: n.tooltip?.title
                    }), (0, Y.jsx)(he, {
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
                children: [(0, Y.jsx)(ee, {
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
            className: h(`text-token-text-primary flex items-center bg-inherit px-5 py-0 pt-6`, r && `sticky top-0 z-10`),
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
    _(), bt = v()
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
        title: (0, X.jsx)(y, {
            id: `/LSf9O`,
            defaultMessage: `What to know`
        }),
        children: (0, X.jsx)(`div`, {
            children: u ? (0, X.jsx)(Ye, {
                isDisabled: n,
                children: (0, X.jsxs)(`div`, {
                    className: `text-token-text-primary`,
                    children: [(0, X.jsx)(k, {
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
                children: (0, X.jsx)(ue, {
                    text: f
                })
            })
        })
    })
}
var Ct, X, wt = e((() => {
    C(), W(), q(), I(), Ct = t(x()), b(), xt(), X = v()
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
        title: (0, Z.jsx)(y, {
            id: `p8XHcJ`,
            defaultMessage: `What people are saying`
        }),
        children: (0, Z.jsxs)(`div`, {
            className: `flex flex-col gap-5`,
            children: [e.summary && (0, Z.jsx)(Ye, {
                isDisabled: n,
                children: (0, Z.jsx)(k, {
                    size: `small`,
                    className: `-mb-1`,
                    children: e.summary
                })
            }), e.reviews.map((r, o) => {
                let c = Ot[r.sentiment ?? `neutral`],
                    d = u(r);
                return (0, Z.jsxs)(p.div, {
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
                        className: h(`flex flex-row items-center gap-2`, `not-prose`),
                        children: [(0, Z.jsx)(be, {
                            url: d ?? ``,
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
                                    children: d ? l(d) : ``
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
                            children: (0, Z.jsx)(k, {
                                size: `small`,
                                className: `prose-p:m-0 prose-p:inline inline! w-auto! font-semibold`,
                                children: r.theme
                            })
                        }), (0, Z.jsxs)(`div`, {
                            className: `text-token-text-primary`,
                            children: [(0, Z.jsx)(k, {
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
        chatgptLinkType: E.CHATGPT_LINK_TYPE_PRODUCT_REVIEW_CITATION,
        chatgptSurfaceLocation: fe.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR
    }) : null
}
var Dt, Z, Ot, kt, At = e((() => {
    z(), we(), je(), Ae(), C(), W(), q(), U(), M(), _(), i(), Dt = t(x()), b(), xt(), Z = v(), Ot = {
        positive: De,
        negative: H,
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
        zt = S(), xe(), Le(), _(), b(), Q = v(), Bt = e => {
            "use forget";
            let t = (0, zt.c)(22),
                {
                    options: n,
                    onSelect: r,
                    isErrored: i
                } = e,
                a = i && `border-token-interactive-label-danger-secondary-default`,
                o;
            t[0] === a ? o = t[1] : (o = h(`radix-state-open:border-token-text-primary border-token-border-heavy bg-token-bg-primary text-token-text-secondary hover:bg-token-bg-primary h-12 w-full justify-between rounded-2xl border px-4 py-3 text-start`, a), t[0] = a, t[1] = o);
            let s;
            t[2] === n ? s = t[3] : (s = n?.find(Rt)?.label ?? (0, Q.jsx)(y, {
                id: `FxgwoS`,
                defaultMessage: `Choose an option`
            }), t[2] = n, t[3] = s);
            let c;
            t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, Q.jsx)(Oe, {
                className: `ms-0.5 h-4 w-4 shrink-0`
            }), t[4] = c) : c = t[4];
            let l;
            t[5] !== o || t[6] !== s ? (l = (0, Q.jsxs)(B.Trigger, {
                className: o,
                children: [s, c]
            }), t[5] = o, t[6] = s, t[7] = l) : l = t[7];
            let u;
            t[8] === r ? u = t[9] : (u = () => r(null, -1), t[8] = r, t[9] = u);
            let d;
            t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, Q.jsx)(y, {
                id: `oVromH`,
                defaultMessage: `--`
            }), t[10] = d) : d = t[10];
            let f;
            t[11] === u ? f = t[12] : (f = (0, Q.jsx)(B.Item, {
                onClick: u,
                children: d
            }), t[11] = u, t[12] = f);
            let p;
            t[13] !== r || t[14] !== n ? (p = n?.map((e, t) => (0, Q.jsx)(B.Item, {
                "aria-label": e.label ?? ``,
                onClick: () => r(e.id, t),
                className: h(e.available === !1 && `text-token-text-tertiary`),
                children: e.label
            }, e.id)), t[13] = r, t[14] = n, t[15] = p) : p = t[15];
            let m;
            t[16] !== f || t[17] !== p ? (m = (0, Q.jsx)(B.Portal, {
                children: (0, Q.jsxs)(B.Content, {
                    children: [f, p]
                })
            }), t[16] = f, t[17] = p, t[18] = m) : m = t[18];
            let ee;
            return t[19] !== m || t[20] !== l ? (ee = (0, Q.jsxs)(B.Root, {
                children: [l, m]
            }), t[19] = m, t[20] = l, t[21] = ee) : ee = t[21], ee
        }
    })),
    Ht, Ut, Wt, Gt = e((() => {
        Ht = S(), _(), x(), Ut = v(), Wt = e => {
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
                        className: h(`bg-token-bg-tertiary inline-flex min-h-10 min-w-[56px] items-center justify-center rounded-full px-4 text-[13px] leading-[18px] font-medium tracking-[-0.08px] transition-all`, n ? `border-token-text-primary bg-token-bg-primary border-2 px-[15px] shadow-[0_0_0_1px_var(--token-bg-primary)]` : `border-2 border-transparent`, e.available === !1 && `text-token-text-tertiary line-through`),
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
        Kt = S(), _(), x(), qt = v(), Jt = e => {
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
                        className: h(`relative flex h-10 w-10 items-center justify-center rounded-[10px] transition-all`, e.available === !1 && `opacity-50`),
                        onClick: () => r(e.selected ? null : e.id, t),
                        children: [(0, qt.jsx)(`span`, {
                            className: h(`border-token-border-default absolute inset-0 rounded-[10px] border`, n && `ring-token-text-primary ring-offset-token-bg-primary ring-2 ring-offset-2`)
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
                className: h(`flex flex-col gap-2`, r > 0 && `mt-5`),
                children: [(0, $.jsxs)(`div`, {
                    className: `flex items-center gap-1 text-[14px] leading-5 tracking-[-0.18px]`,
                    children: [(0, $.jsx)(`span`, {
                        className: `text-sm font-medium capitalize`,
                        children: It(e.label)
                    }), e.type !== `dropdown` && i && (0, $.jsxs)($.Fragment, {
                        children: [(0, $.jsx)(y, {
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
                    children: [(0, $.jsx)(ie, {
                        className: `icon-sm`
                    }), (0, $.jsx)(y, {
                        id: `UsAVv3`,
                        defaultMessage: `Choose an option`
                    })]
                })]
            }, e.id)
        })
    }) : null
}
var $, Zt = e((() => {
    re(), _(), b(), Lt(), Vt(), Gt(), Yt(), $ = v()
}));
export {
    St as a, xt as c, At as i, it as l, Zt as n, wt as o, Tt as r, yt as s, Xt as t, vt as u
};
//# sourceMappingURL=f4222f0c-zk43hjnghyz4nouo.js.map