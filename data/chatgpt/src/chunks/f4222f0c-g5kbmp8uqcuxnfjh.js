import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as n,
    At as r,
    B6 as i,
    Bz as a,
    Dit as o,
    IU as s,
    K8 as c,
    LU as l,
    My as u,
    b5 as d,
    cn as f,
    hU as p,
    hn as m,
    i5 as h,
    jy as ee,
    kT as g,
    kit as te,
    l0 as ne,
    pU as re,
    pnt as ie,
    r0 as _,
    y5 as v,
    ynt as ae,
    zz as oe
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as y,
    Nn as b,
    Rn as se,
    Vn as x,
    wn as S,
    zn as ce
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $An as le,
    Dlt as ue,
    Dut as C,
    Elt as de,
    GAn as fe,
    Gst as w,
    H3t as T,
    KAn as E,
    Out as D,
    QOn as pe,
    Qen as me,
    TA as O,
    THn as he,
    Tlt as ge,
    Ust as k,
    XAn as _e,
    XOn as A,
    YAn as ve,
    YUn as j,
    bIn as ye,
    etn as be,
    ewt as M,
    ipt as N,
    mbt as xe,
    npt as P,
    nwt as F,
    pbt as I,
    qUn as L,
    tpt as R,
    wA as Se,
    wHn as z,
    yIn as B,
    z3t as V
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    $h as Ce,
    DC as we,
    EC as Te,
    Qv as Ee,
    Uy as De,
    Wy as Oe,
    Zv as ke,
    _r as Ae,
    eg as H,
    ix as je,
    mg as Me,
    ng as Ne,
    pg as Pe,
    rx as Fe,
    tg as Ie,
    vr as Le
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    n as Re,
    t as U
} from "./0e5afe53-dl0nq2u2siu8c8q5.js";
import {
    a as W,
    r as G
} from "./dccfc4ad-gfe9j6ogy0wsemhd.js";
import {
    C as ze,
    i as Be
} from "./2b67bcd8-nnsmutcvg2bqh4j8.js";
import {
    h as Ve,
    m as K,
    p as He
} from "./1362c49f-lrf664dsbb699ksf.js";
import {
    n as Ue,
    r as We
} from "./e1d1ae28-n1sr9wfy5atsgeuv.js";
import {
    E as Ge,
    T as Ke
} from "./6fd89734-camj98pxrr936jpu.js";
import {
    n as qe,
    r as Je
} from "./eda93c10-d23ezzdszh21prd7.js";
import {
    n as q,
    t as Ye
} from "./407dfab1-cnwklcgkf6toq6n7.js";
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
    contentReferenceStartIndex: n,
    productIndex: r,
    product: i,
    isLoading: a,
    suppressOfferAnimations: s = !1,
    onOpenCheckout: l,
    trackContentReferenceEvent: u,
    analyticsMetadata: d,
    showBestPriceOfferTag: ee = !0,
    showBottomBorder: te = !0,
    className: re,
    interactionSource: _,
    initialVisibleOfferCount: ae = 3
}) {
    "use no forget";
    let oe = ie(`3375735072`),
        y = h(ne),
        se = oe && ie(`3109853659`),
        x = oe ? qe() : null,
        S = We(),
        le = p(),
        ue = ce(),
        de = h(() => e?.serverId$()),
        w = h(() => e ? Be(e) : d ?? {}),
        [T, D] = (0, J.useState)(!1),
        pe = (i.variants && Object.values(He(i.variants)).map(e => e.label).join(` • `)) ?? null,
        me = ae,
        O = t.length > 0,
        he = t.slice(0, T ? t.length : me),
        ge = t.length > me,
        k = t.slice(me),
        j = k.length,
        be = st(k),
        M = ot(_),
        P = t.filter(e => e.available).length,
        F = t.filter(e => e.checkoutable).length,
        I = i.analytics_meta ?? {},
        L = i.product_event_uuid,
        R = (0, J.useRef)(a),
        Se = (0, J.useRef)(s),
        z = R.current && !a,
        B = Se.current && !s,
        V = !a && !z && !s && !B;
    (0, J.useEffect)(() => {
        R.current = a, Se.current = s
    }, [a, s]);
    let Ce = ({
        offer: e,
        offerIndex: a,
        offerSource: o,
        feedId: s,
        action: c,
        hadBuyButton: l,
        includeSiteUrl: d
    }) => {
        let f = i.popularity_metadata?.product_tags?.includes(`popular`) ?? !1,
            p = `product_offer_clicked`;
        u(`Product Offer Clicked`, p, `product_entity`, {
            content_reference_start_index: n,
            product_index: r,
            offer_index: a,
            interaction_source: _,
            ...I,
            product_id: i.id,
            product_event_uuid: L,
            product_url: i.url,
            offer_url: e.url,
            offers_count: t.length,
            price: e.price?.toString(),
            action: c,
            merchant_name: e.merchant_name,
            source: i.provider,
            feed_id: s,
            has_popular_tag: f
        }, void 0, e => ye(p, `offer_clicked`, e, {
            productId: i.id,
            interactionSource: _,
            offerCount: t.length,
            offerIndex: a
        })), c === `open_site_clicked` && u(`link_action`, null, `product_entity`, {
            action: `click`,
            link_type: `product_offer`,
            section_location: `sidebar`,
            content_reference_start_index: n,
            product_index: r,
            offer_index: a,
            interaction_source: _,
            product_id: i.id,
            product_event_uuid: L,
            merchant_name: e.merchant_name,
            url: e.url
        }, t => {
            xe({
                action: `click`,
                actionType: fe.CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED,
                analyticsMetadata: t,
                contentReferenceStartIndex: n,
                contentReferenceType: M,
                linkAffordance: ve.CHATGPT_LINK_AFFORDANCE_BUTTON,
                linkType: _e.CHATGPT_LINK_TYPE_PRODUCT_OFFER,
                linkIndex: a + 1,
                parentContext: {
                    entityId: i.id,
                    entityCategory: `product`,
                    contentReferenceStartIndex: n,
                    messageId: t.messageId
                },
                surfaceLocation: E.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR,
                url: e.url
            })
        }), N({
            productOfferInteractionEventType: A.CHATGPT_PRODUCT_OFFER_INTERACTION_EVENT_TYPE_OFFER_CLICKED,
            clientThreadId: w.clientThreadId,
            product: i,
            offerIndex: a,
            offer: e,
            offerCount: t.length,
            contentReferenceType: M,
            messageId: w.messageId,
            contentReferenceStartIndex: n
        });
        let m = {
            content_reference_start_index: n,
            product_index: r,
            interaction_source: _,
            ...I,
            product_id: i.id,
            product_event_uuid: L,
            product_url: i.url,
            action: c,
            section: `product_detail`,
            section_location: `sidebar`,
            section_index: a,
            offer_index: a,
            merchant_name: e.merchant_name,
            price: e.price?.toString(),
            had_buy_button: l,
            variants: pe,
            source: o,
            feed_id: s,
            has_popular_tag: f
        };
        d && (m.site_url = e.url), u(`product_offer`, `product_offer`, `product_entity`, m)
    };
    return (0, J.useEffect)(() => {
        if (a || !O) return;
        let e = {
                ...I,
                product_event_uuid: L,
                total_count: t.length,
                available_count: P,
                checkoutable_count: F,
                interaction_source: _,
                is_variant: !!pe,
                source: i.provider,
                has_popular_tag: i.popularity_metadata?.product_tags?.includes(`popular`) ?? !1
            },
            r = `product_offers_shown`;
        u(`Product Offers Shown`, r, `product_entity`, e, void 0, e => ye(r, `offers_shown`, e, {
            productId: i.id,
            interactionSource: _,
            offerCount: t.length
        })), u(`product_detail`, `product_detail`, `product_entity`, {
            ...I,
            product_event_uuid: L,
            interaction_source: _,
            action: `updated`,
            variants_count: i.variants?.length ?? 0,
            variants_with_selection_count: i.variants?.filter(e => e.selected_option_id).length ?? 0,
            offers_count: P,
            checkoutable_offers_count: F,
            has_popular_tag: i.popularity_metadata?.product_tags?.includes(`popular`) ?? !1
        }), N({
            productOfferInteractionEventType: A.CHATGPT_PRODUCT_OFFER_INTERACTION_EVENT_TYPE_OFFER_LIST_SHOWN,
            clientThreadId: w.clientThreadId,
            product: i,
            offerIndex: void 0,
            offer: void 0,
            offerCount: t.length,
            contentReferenceType: M,
            messageId: w.messageId,
            contentReferenceStartIndex: n
        }), o.addAction(`shopping_checkout.offers_shown`, e)
    }, [O, a, pe]), !a && !O ? null : (0, Y.jsx)(`div`, {
        className: v(re, `relative`),
        children: (0, Y.jsxs)(f.div, {
            layout: !0,
            transition: V ? void 0 : {
                duration: 0
            },
            children: [(0, Y.jsx)(m, {
                initial: !1,
                children: he.map((e, o) => {
                    let s = e.debug_info?.feed_id,
                        d = e.debug_info?.source,
                        p = oe && e.checkoutable,
                        m = e.launcherPayload ?? null,
                        h = m ? c(() => C({
                            ...Xe(m, w.messageId),
                            conversationId: de ?? null
                        })) : null,
                        g = h != null,
                        ne = !y && (g || p);
                    return (0, Y.jsx)(f.div, {
                        layout: !0,
                        initial: V ? {
                            opacity: 0,
                            y: -6
                        } : !1,
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: V ? {
                            opacity: 0,
                            y: -6
                        } : void 0,
                        transition: V ? {
                            duration: .18,
                            ease: `easeOut`
                        } : {
                            duration: 0
                        },
                        children: (0, Y.jsx)(ut, {
                            offer: e,
                            isCheckoutEnabled: oe,
                            isLoading: a,
                            isCheckoutable: p,
                            showCheckoutLauncherButton: g,
                            checkoutLauncherLaunchProps: h,
                            isMultiItemCartEnabled: se,
                            isAddDisabled: S.status === `loading`,
                            showPriceDisclosure: !!i.show_price_disclosure,
                            showBestPriceOfferTag: ee,
                            showBottomBorder: te || ge,
                            isLastVisibleOffer: o === he.length - 1 && !a,
                            onOpenCheckout: (t, n) => {
                                t.stopPropagation(), l(), oe && x && Ve(i) && e.checkout_payload && (x.openNewCheckout({
                                    preloadCustomerSessionClientSecret: n,
                                    metadata: w,
                                    items: [{
                                        id: e.checkout_payload,
                                        productId: i.id,
                                        quantity: 1,
                                        value: e.checkout_payload
                                    }]
                                }), Ce({
                                    offer: e,
                                    offerIndex: o,
                                    offerSource: d,
                                    feedId: s,
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
                                    offerIndex: o,
                                    offerSource: d,
                                    feedId: s,
                                    action: `open_site_clicked`,
                                    hadBuyButton: ne,
                                    includeSiteUrl: !0
                                }), window.open(e.url, `_blank`)
                            },
                            onLaunchCheckout: t => {
                                t.stopPropagation(), Ce({
                                    offer: e,
                                    offerIndex: o,
                                    offerSource: d,
                                    feedId: s,
                                    action: `buy_button_clicked`,
                                    hadBuyButton: !0,
                                    includeSiteUrl: !0
                                })
                            },
                            onShown: () => {
                                u(`product_offer`, `product_offer`, `product_entity`, {
                                    content_reference_start_index: n,
                                    product_index: r,
                                    ...I,
                                    product_id: i.id,
                                    product_event_uuid: L,
                                    product_url: i.url,
                                    action: `shown`,
                                    section: `product_detail`,
                                    section_location: `sidebar`,
                                    section_index: o,
                                    offer_index: o,
                                    merchant_name: e.merchant_name,
                                    price: e.price?.toString(),
                                    had_buy_button: ne,
                                    checkoutable: e.checkoutable,
                                    source: d,
                                    feed_id: s,
                                    has_popular_tag: i.popularity_metadata?.product_tags?.includes(`popular`) ?? !1
                                }), u(`link_action`, null, `product_entity`, {
                                    action: `show`,
                                    link_type: `product_offer`,
                                    section_location: `sidebar`,
                                    content_reference_start_index: n,
                                    product_index: r,
                                    offer_index: o,
                                    interaction_source: _,
                                    product_id: i.id,
                                    product_event_uuid: L,
                                    merchant_name: e.merchant_name,
                                    url: e.url
                                }, t => {
                                    xe({
                                        action: `show`,
                                        actionType: fe.CHATGPT_ENGAGEMENT_ACTION_TYPE_SHOWN,
                                        analyticsMetadata: t,
                                        contentReferenceStartIndex: n,
                                        contentReferenceType: M,
                                        linkAffordance: ve.CHATGPT_LINK_AFFORDANCE_BUTTON,
                                        linkType: _e.CHATGPT_LINK_TYPE_PRODUCT_OFFER,
                                        linkIndex: o + 1,
                                        parentContext: {
                                            entityId: i.id,
                                            entityCategory: `product`,
                                            contentReferenceStartIndex: n,
                                            messageId: t.messageId
                                        },
                                        surfaceLocation: E.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR,
                                        url: e.url
                                    })
                                }), N({
                                    productOfferInteractionEventType: A.CHATGPT_PRODUCT_OFFER_INTERACTION_EVENT_TYPE_OFFER_SHOWN,
                                    clientThreadId: w.clientThreadId,
                                    product: i,
                                    offerIndex: o,
                                    offer: e,
                                    offerCount: t.length,
                                    contentReferenceType: M,
                                    messageId: w.messageId,
                                    contentReferenceStartIndex: n
                                })
                            }
                        })
                    }, ct(e, o))
                })
            }), a && (0, Y.jsx)(`div`, {
                role: `status`,
                "aria-busy": !0,
                className: `space-y-0`,
                children: Array.from({
                    length: me
                }).map((e, t) => (0, Y.jsx)(at, {}, `offer-skeleton-${t}`))
            }), ge && !a && (0, Y.jsx)(f.div, {
                layout: !0,
                transition: V ? {
                    type: `tween`,
                    ease: `easeInOut`,
                    duration: .2
                } : {
                    duration: 0
                },
                children: (0, Y.jsxs)(g, {
                    className: `-ms-3 mt-2 w-fit px-3`,
                    size: `small`,
                    color: `ghost`,
                    onClick: () => D(e => !e),
                    contentWrapperClassName: `gap-1`,
                    "aria-expanded": T,
                    children: [T ? (0, Y.jsx)(b, {
                        id: `Gl3oLS`,
                        defaultMessage: `See less`
                    }) : be ? (0, Y.jsx)(b, {
                        id: `y+cCno`,
                        defaultMessage: `{hiddenOfferCount, plural, one {# other seller} other {# other sellers}} • Starting at {price}`,
                        values: {
                            hiddenOfferCount: j,
                            price: be
                        }
                    }) : (0, Y.jsx)(b, {
                        id: `f9tOaY`,
                        defaultMessage: `See more`
                    }), T ? (0, Y.jsx)(ke, {
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
            children: [(0, Y.jsx)(k, {
                className: `h-4 w-4 rounded-full!`
            }), (0, Y.jsx)(k, {
                className: `h-4 w-28`
            })]
        }), (0, Y.jsx)(k, {
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
                children: (0, Y.jsx)(k, {
                    className: `h-9 w-15 rounded-[18px]!`
                })
            })]
        })
    }), e[1] = n) : n = e[1], n
}

function ot(e) {
    switch (e) {
        case `inline_link`:
            return R.ProductEntity;
        case `carousel`:
            return R.Products;
        default:
            return R.Unrecognized
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
    return de(e) ?? e.url ?? `offer-${t}`
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
            rootRef: n,
            offer: r,
            onVisitMerchant: i,
            onOpenCheckout: a,
            onLaunchCheckout: o,
            isCheckoutEnabled: s,
            isLoading: c,
            isCheckoutable: l,
            showCheckoutLauncherButton: u,
            checkoutLauncherLaunchProps: d,
            isMultiItemCartEnabled: f,
            isAddDisabled: p,
            onAddToCart: m,
            showPriceDisclosure: te,
            showBestPriceOfferTag: re,
            isLastVisibleOffer: ie,
            showBottomBorder: _,
            onShown: ae
        } = e,
        y = re === void 0 || re,
        se = ie !== void 0 && ie,
        x = _ === void 0 || _,
        [S, le] = (0, J.useState)(void 0),
        ue = ce(),
        C = r.price_details,
        de = C?.base && (C.shipping ?? C.tax) && C.total,
        fe = (C?.display_price === `total_price` || de) && te,
        w = C?.display_price === `total_price`,
        T = h(ne),
        E = u && !T,
        D = E ? d : null,
        {
            showDebugConversationTurns: pe
        } = be(),
        me = (0, J.useRef)(!1),
        O;
    t[0] !== c || t[1] !== ae || t[2] !== n ? (O = {
        isLoading: c,
        onShown: ae,
        rootRef: n
    }, t[0] = c, t[1] = ae, t[2] = n, t[3] = O) : O = t[3];
    let he = Qe(O),
        k, _e;
    t[4] !== l || t[5] !== c || t[6] !== T || t[7] !== r.checkout_payload ? (k = () => {
        !c && !T && (async () => {
            if (!c && l && r.checkout_payload && !me.current) {
                me.current = !0;
                let e = await Ke([{
                    id: r.checkout_payload,
                    quantity: 1,
                    value: r.checkout_payload
                }]);
                e.customer_session_client_secret && le(e.customer_session_client_secret)
            }
        })()
    }, _e = [c, l, T, r.checkout_payload], t[4] = l, t[5] = c, t[6] = T, t[7] = r.checkout_payload, t[8] = k, t[9] = _e) : (k = t[8], _e = t[9]), (0, J.useEffect)(k, _e);
    let A = null;
    if (de && C) {
        let e;
        t[10] === C.base ? e = t[11] : (e = (0, Y.jsx)(`div`, {
            children: (0, Y.jsx)(b, {
                id: `offer.breakdown.base`,
                defaultMessage: `Base price: {amount}`,
                values: {
                    amount: C.base
                }
            })
        }), t[10] = C.base, t[11] = e);
        let n;
        t[12] === C.shipping ? n = t[13] : (n = C.shipping && (0, Y.jsx)(`div`, {
            children: (0, Y.jsx)(b, {
                id: `offer.breakdown.shipping`,
                defaultMessage: `Shipping: {amount}`,
                values: {
                    amount: C.shipping
                }
            })
        }), t[12] = C.shipping, t[13] = n);
        let r;
        t[14] === C.tax ? r = t[15] : (r = C.tax && (0, Y.jsx)(`div`, {
            children: (0, Y.jsx)(b, {
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
    } else if (w) {
        let e;
        t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Y.jsx)(b, {
            id: `ur3//V`,
            defaultMessage: `Prices shown include estimated tax and shipping.`
        }), t[20] = e) : e = t[20], A = e
    }
    let ve;
    t[21] !== D || t[22] !== T || t[23] !== o || t[24] !== i ? (ve = e => {
        if (T) {
            i(e);
            return
        }
        o(e), D?.onClick(e)
    }, t[21] = D, t[22] = T, t[23] = o, t[24] = i, t[25] = ve) : ve = t[25];
    let j = ve,
        ye;
    t[26] === i ? ye = t[27] : (ye = e => {
        e.stopPropagation(), i(e)
    }, t[26] = i, t[27] = ye);
    let N = ye,
        xe = E ? N : void 0,
        P;
    t[28] !== s || t[29] !== E || t[30] !== l || t[31] !== T || t[32] !== j || t[33] !== a || t[34] !== i || t[35] !== S ? (P = E ? j : s && l && !T ? e => a(e, S) : i, t[28] = s, t[29] = E, t[30] = l, t[31] = T, t[32] = j, t[33] = a, t[34] = i, t[35] = S, t[36] = P) : P = t[36];
    let F = P,
        I;
    t[37] === r.price ? I = t[38] : (I = (0, Y.jsx)(`span`, {
        className: `text-[15px] leading-5 font-semibold tracking-[-0.23px]`,
        children: r.price
    }), t[37] = r.price, t[38] = I);
    let L = I,
        R = s && l && !T,
        Se = R && f && !!r.checkout_payload,
        z;
    t[39] === r ? z = t[40] : (z = ge(r) ?? r.url, t[39] = r, t[40] = z);
    let B = z,
        V = r.debug_info?.source,
        Ce = r.debug_info?.feed_id,
        we;
    t[41] === r.debug_info ? we = t[42] : (we = Object.entries(r.debug_info ?? {}).filter(dt), t[41] = r.debug_info, t[42] = we);
    let Te = we,
        Ee;
    t[43] === Symbol.for(`react.memo_cache_sentinel`) ? (Ee = v(`hover:bg-token-bg-tertiary -mx-6 cursor-pointer px-6`), t[43] = Ee) : Ee = t[43];
    let De = D?.onPointerEnter,
        Oe = D?.onPointerEnter,
        ke = D?.onFocus,
        Ae = se && x && `border-b`,
        H;
    t[44] === Ae ? H = t[45] : (H = v(`border-token-border-light flex flex-col border-t py-5`, Ae), t[44] = Ae, t[45] = H);
    let Me = E ? void 0 : i,
        Ne;
    t[46] === Symbol.for(`react.memo_cache_sentinel`) ? (Ne = (0, Y.jsx)(Re, {
        className: `text-token-text-tertiary`
    }), t[46] = Ne) : Ne = t[46];
    let Pe;
    t[47] === r.url ? Pe = t[48] : (Pe = (0, Y.jsx)(M, {
        className: `border-token-border-light h-5 w-5 rounded-full border`,
        url: r.url,
        size: 128,
        minSize: 16,
        fallback: Ne
    }), t[47] = r.url, t[48] = Pe);
    let Fe;
    t[49] === B ? Fe = t[50] : (Fe = (0, Y.jsx)(`div`, {
        className: `truncate`,
        children: B
    }), t[49] = B, t[50] = Fe);
    let Ie;
    t[51] !== B || t[52] !== ue ? (Ie = ue.formatMessage({
        id: `rigO8r`,
        defaultMessage: `Open {merchantName} in a new tab`
    }, {
        merchantName: B
    }), t[51] = B, t[52] = ue, t[53] = Ie) : Ie = t[53];
    let Le;
    t[54] === Symbol.for(`react.memo_cache_sentinel`) ? (Le = (0, Y.jsx)(je, {
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
    t[58] !== xe || t[59] !== Pe || t[60] !== Fe || t[61] !== U ? (W = (0, Y.jsxs)(`div`, {
        className: `flex flex-row items-center gap-1.5 text-[15px] leading-5 font-semibold tracking-[-0.23px]`,
        onClick: xe,
        children: [Pe, Fe, U]
    }), t[58] = xe, t[59] = Pe, t[60] = Fe, t[61] = U, t[62] = W) : W = t[62];
    let G;
    t[63] === r.details ? G = t[64] : (G = (0, Y.jsx)(`div`, {
        className: `text-token-text-secondary text-xs leading-4 whitespace-pre-wrap`,
        children: r.details
    }), t[63] = r.details, t[64] = G);
    let ze;
    t[65] !== Me || t[66] !== W || t[67] !== G ? (ze = (0, Y.jsxs)(`div`, {
        className: `group flex flex-col gap-0.5`,
        onClick: Me,
        children: [W, G]
    }), t[65] = Me, t[66] = W, t[67] = G, t[68] = ze) : ze = t[68];
    let Be;
    t[69] !== s || t[70] !== R || t[71] !== c || t[72] !== r.tag || t[73] !== y || t[74] !== u ? (Be = s && !u && ht({
        tag: r.tag,
        showCheckoutLauncherButton: u,
        isInstantCheckoutEnabled: R,
        isLoading: c,
        showBestPriceOfferTag: y
    }) && (0, Y.jsx)(_t, {
        tag: r.tag
    }), t[69] = s, t[70] = R, t[71] = c, t[72] = r.tag, t[73] = y, t[74] = u, t[75] = Be) : Be = t[75];
    let Ve;
    t[76] !== ze || t[77] !== Be ? (Ve = (0, Y.jsxs)(`div`, {
        className: `flex min-w-0 flex-1 flex-col gap-0.5`,
        children: [ze, Be]
    }), t[76] = ze, t[77] = Be, t[78] = Ve) : Ve = t[78];
    let K;
    t[79] === r.original_price ? K = t[80] : (K = r.original_price && (0, Y.jsx)(`span`, {
        className: `text-token-text-secondary text-[15px] leading-5 tracking-[-0.23px] line-through`,
        children: r.original_price
    }), t[79] = r.original_price, t[80] = K);
    let He;
    t[81] !== L || t[82] !== fe || t[83] !== A ? (He = fe && A ? (0, Y.jsx)(ee, {
        label: A,
        children: (0, Y.jsxs)(`span`, {
            className: `flex items-center gap-0.5`,
            children: [L, (0, Y.jsx)(oe, {
                className: `text-token-text-secondary h-3 w-3`
            })]
        })
    }) : L, t[81] = L, t[82] = fe, t[83] = A, t[84] = He) : He = t[84];
    let Ue;
    t[85] !== K || t[86] !== He ? (Ue = (0, Y.jsxs)(`div`, {
        className: `flex flex-col items-end pe-2`,
        children: [K, He]
    }), t[85] = K, t[86] = He, t[87] = Ue) : Ue = t[87];
    let We;
    t[88] !== D?.onFocus || t[89] !== D?.onPointerEnter || t[90] !== p || t[91] !== s || t[92] !== E || t[93] !== R || t[94] !== c || t[95] !== j || t[96] !== m || t[97] !== a || t[98] !== S || t[99] !== Se ? (We = E ? (0, Y.jsx)(`div`, {
        className: `flex flex-col items-end`,
        children: (0, Y.jsx)(g, {
            className: `w-fit truncate px-4`,
            size: `medium`,
            color: `secondary`,
            disabled: c,
            onPointerEnter: D?.onPointerEnter,
            onMouseOver: D?.onPointerEnter,
            onFocus: D?.onFocus,
            onClick: j,
            children: (0, Y.jsx)(b, {
                id: `RVcyxH`,
                defaultMessage: `Open`
            })
        })
    }) : s ? R ? (0, Y.jsxs)(`div`, {
        className: `flex items-center gap-2`,
        children: [Se && (0, Y.jsx)(g, {
            className: `w-fit truncate px-4`,
            disabled: c || p,
            size: `medium`,
            color: `secondary`,
            type: `button`,
            onClick: m,
            children: (0, Y.jsx)(b, {
                id: `scQ8Wu`,
                defaultMessage: `Add`
            })
        }), (0, Y.jsx)(g, {
            className: `w-fit truncate px-4`,
            disabled: c,
            size: `medium`,
            color: `primary`,
            onClick: e => a(e, S),
            children: (0, Y.jsx)(b, {
                id: `vxb4gy`,
                defaultMessage: `Buy`
            })
        })]
    }) : (0, Y.jsx)(g, {
        className: `w-fit truncate px-4`,
        size: `medium`,
        color: `secondary`,
        children: (0, Y.jsx)(b, {
            id: `CvthQr`,
            defaultMessage: `Visit`
        })
    }) : (0, Y.jsx)(g, {
        className: `w-fit min-w-20 truncate px-4`,
        size: `medium`,
        color: `secondary`,
        children: (0, Y.jsx)(b, {
            id: `CvthQr`,
            defaultMessage: `Visit`
        })
    }), t[88] = D?.onFocus, t[89] = D?.onPointerEnter, t[90] = p, t[91] = s, t[92] = E, t[93] = R, t[94] = c, t[95] = j, t[96] = m, t[97] = a, t[98] = S, t[99] = Se, t[100] = We) : We = t[100];
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
    t[107] !== Ce || t[108] !== r.debug_info || t[109] !== Te || t[110] !== pe || t[111] !== V ? (Je = !1, t[107] = Ce, t[108] = r.debug_info, t[109] = Te, t[110] = pe, t[111] = V, t[112] = Je) : Je = t[112];
    let q;
    t[113] !== H || t[114] !== qe || t[115] !== Je ? (q = (0, Y.jsxs)(`div`, {
        className: H,
        children: [qe, Je]
    }), t[113] = H, t[114] = qe, t[115] = Je, t[116] = q) : q = t[116];
    let Ye;
    return t[117] !== F || t[118] !== he || t[119] !== De || t[120] !== Oe || t[121] !== ke || t[122] !== q ? (Ye = (0, Y.jsx)(`div`, {
        ref: he,
        className: Ee,
        onPointerEnter: De,
        onMouseOver: Oe,
        onFocus: ke,
        onClick: F,
        children: q
    }), t[117] = F, t[118] = he, t[119] = De, t[120] = Oe, t[121] = ke, t[122] = q, t[123] = Ye) : Ye = t[123], Ye
}

function dt(e) {
    let [t] = e;
    return t !== `source` && t !== `feed_id`
}

function ft(e) {
    return (0, Y.jsx)(`a`, {
        href: e.href,
        className: v(e.className, `underline`),
        target: `_blank`,
        rel: `noreferrer`,
        children: e.children
    })
}
var pt, J, Y, mt, ht, gt, _t, vt = e((() => {
    pt = S(), B(), P(), n(), Ue(), Ge(), Je(), we(), Ee(), a(), Fe(), Ae(), u(), _(), D(), F(), w(), me(), i(), U(), re(), I(), te(), ae(), pe(), le(), d(), r(), J = t(x()), se(), L(), Ze(), ue(), rt(), ze(), K(), Y = y(), mt = `https://persistent.oaistatic.com/chatgpt/pink_720.jpeg`, ht = ({
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
        return t[0] !== n.text || t[1] !== n.tooltip ? (r = n.tooltip ? (0, Y.jsx)(ee, {
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
                    }), (0, Y.jsx)(j, {
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
                children: [(0, Y.jsx)(oe, {
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
            className: v(`text-token-text-primary flex items-center bg-inherit px-5 py-0 pt-6`, r && `sticky top-0 z-10`),
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
    d(), bt = y()
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
                    children: [(0, X.jsx)(V, {
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
                children: (0, X.jsx)(Se, {
                    text: f
                })
            })
        })
    })
}
var Ct, X, wt = e((() => {
    T(), W(), q(), O(), Ct = t(x()), se(), xt(), X = y()
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
                children: (0, Z.jsx)(V, {
                    size: `small`,
                    className: `-mb-1`,
                    children: e.summary
                })
            }), e.reviews.map((r, o) => {
                let c = Ot[r.sentiment ?? `neutral`],
                    d = u(r);
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
                        className: v(`flex flex-row items-center gap-2`, `not-prose`),
                        children: [(0, Z.jsx)(M, {
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
                            children: (0, Z.jsx)(V, {
                                size: `small`,
                                className: `prose-p:m-0 prose-p:inline inline! w-auto! font-semibold`,
                                children: r.theme
                            })
                        }), (0, Z.jsxs)(`div`, {
                            className: `text-token-text-primary`,
                            children: [(0, Z.jsx)(V, {
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
        chatgptLinkType: _e.CHATGPT_LINK_TYPE_PRODUCT_REVIEW_CITATION,
        chatgptSurfaceLocation: E.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR
    }) : null
}
var Dt, Z, Ot, kt, At = e((() => {
    F(), Ie(), Pe(), Ce(), T(), W(), q(), U(), le(), d(), r(), Dt = t(x()), se(), xt(), Z = y(), Ot = {
        positive: H,
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
        zt = S(), he(), Oe(), d(), se(), Q = y(), Bt = e => {
            "use forget";
            let t = (0, zt.c)(22),
                {
                    options: n,
                    onSelect: r,
                    isErrored: i
                } = e,
                a = i && `border-token-interactive-label-danger-secondary-default`,
                o;
            t[0] === a ? o = t[1] : (o = v(`radix-state-open:border-token-text-primary border-token-border-heavy bg-token-bg-primary text-token-text-secondary hover:bg-token-bg-primary h-12 w-full justify-between rounded-2xl border px-4 py-3 text-start`, a), t[0] = a, t[1] = o);
            let s;
            t[2] === n ? s = t[3] : (s = n?.find(Rt)?.label ?? (0, Q.jsx)(b, {
                id: `FxgwoS`,
                defaultMessage: `Choose an option`
            }), t[2] = n, t[3] = s);
            let c;
            t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, Q.jsx)(De, {
                className: `ms-0.5 h-4 w-4 shrink-0`
            }), t[4] = c) : c = t[4];
            let l;
            t[5] !== o || t[6] !== s ? (l = (0, Q.jsxs)(z.Trigger, {
                className: o,
                children: [s, c]
            }), t[5] = o, t[6] = s, t[7] = l) : l = t[7];
            let u;
            t[8] === r ? u = t[9] : (u = () => r(null, -1), t[8] = r, t[9] = u);
            let d;
            t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, Q.jsx)(b, {
                id: `oVromH`,
                defaultMessage: `--`
            }), t[10] = d) : d = t[10];
            let f;
            t[11] === u ? f = t[12] : (f = (0, Q.jsx)(z.Item, {
                onClick: u,
                children: d
            }), t[11] = u, t[12] = f);
            let p;
            t[13] !== r || t[14] !== n ? (p = n?.map((e, t) => (0, Q.jsx)(z.Item, {
                "aria-label": e.label ?? ``,
                onClick: () => r(e.id, t),
                className: v(e.available === !1 && `text-token-text-tertiary`),
                children: e.label
            }, e.id)), t[13] = r, t[14] = n, t[15] = p) : p = t[15];
            let m;
            t[16] !== f || t[17] !== p ? (m = (0, Q.jsx)(z.Portal, {
                children: (0, Q.jsxs)(z.Content, {
                    children: [f, p]
                })
            }), t[16] = f, t[17] = p, t[18] = m) : m = t[18];
            let h;
            return t[19] !== m || t[20] !== l ? (h = (0, Q.jsxs)(z.Root, {
                children: [l, m]
            }), t[19] = m, t[20] = l, t[21] = h) : h = t[21], h
        }
    })),
    Ht, Ut, Wt, Gt = e((() => {
        Ht = S(), d(), x(), Ut = y(), Wt = e => {
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
                        className: v(`bg-token-bg-tertiary inline-flex min-h-10 min-w-[56px] items-center justify-center rounded-full px-4 text-[13px] leading-[18px] font-medium tracking-[-0.08px] transition-all`, n ? `border-token-text-primary bg-token-bg-primary border-2 px-[15px] shadow-[0_0_0_1px_var(--token-bg-primary)]` : `border-2 border-transparent`, e.available === !1 && `text-token-text-tertiary line-through`),
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
        Kt = S(), d(), x(), qt = y(), Jt = e => {
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
                        className: v(`relative flex h-10 w-10 items-center justify-center rounded-[10px] transition-all`, e.available === !1 && `opacity-50`),
                        onClick: () => r(e.selected ? null : e.id, t),
                        children: [(0, qt.jsx)(`span`, {
                            className: v(`border-token-border-default absolute inset-0 rounded-[10px] border`, n && `ring-token-text-primary ring-offset-token-bg-primary ring-2 ring-offset-2`)
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
                className: v(`flex flex-col gap-2`, r > 0 && `mt-5`),
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
                    children: [(0, $.jsx)(l, {
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
    s(), d(), se(), Lt(), Vt(), Gt(), Yt(), $ = y()
}));
export {
    St as a, xt as c, At as i, it as l, Zt as n, wt as o, Tt as r, yt as s, Xt as t, vt as u
};
//# sourceMappingURL=f4222f0c-g5kbmp8uqcuxnfjh.js.map