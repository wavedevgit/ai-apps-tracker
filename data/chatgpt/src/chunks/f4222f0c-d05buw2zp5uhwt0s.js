import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    A8 as r,
    At as i,
    B0 as a,
    Crt as o,
    K0 as s,
    K5 as c,
    LU as l,
    Nat as u,
    Qy as d,
    Zy as f,
    _rt as p,
    cn as m,
    eE as h,
    fB as ee,
    hn as te,
    j5 as ne,
    jat as re,
    oW as ie,
    pB as g,
    q5 as _,
    sW as v,
    y5 as ae,
    zU as oe
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as y,
    Nn as b,
    Rn as se,
    Vn as x,
    wn as S,
    zn as ce
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Ct as le,
    $ft as ue,
    $jn as de,
    AA as C,
    ALn as fe,
    Clt as w,
    Eut as T,
    I3t as pe,
    Kst as E,
    MUn as D,
    N3t as O,
    Qjn as me,
    Stn as he,
    Tlt as ge,
    Tut as _e,
    Wst as k,
    btn as ve,
    dbt as ye,
    eAn as A,
    eGn as j,
    ept as M,
    jA as N,
    jUn as P,
    kLn as F,
    nAn as I,
    nGn as be,
    nMn as xe,
    npt as L,
    oMn as R,
    rMn as Se,
    twt as z,
    ubt as B,
    wlt as V
} from "./conversation-small-bcbq46iub1p0ca1t.js";
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
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    n as Re,
    t as U
} from "./0e5afe53-hxm3yzzjqriayom4.js";
import {
    a as W,
    r as G
} from "./dccfc4ad-0onpofo0a2tcgx3m.js";
import {
    C as ze,
    i as Be
} from "./2b67bcd8-2ytvs8gol6tuyvxs.js";
import {
    f as Ve,
    m as K,
    p as He
} from "./1362c49f-nwbtgdjfbczptgw9.js";
import {
    n as Ue,
    r as We
} from "./e1d1ae28-yeq1vs9510a6294i.js";
import {
    E as Ge,
    T as Ke
} from "./6fd89734-yboteogplx9e2x4r.js";
import {
    n as qe,
    r as Je
} from "./eda93c10-djze51yfybdo0uyh.js";
import {
    n as q,
    t as Ye
} from "./407dfab1-50o0v3vdq84q5stn.js";
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
    suppressOfferAnimations: l = !1,
    onOpenCheckout: u,
    trackContentReferenceEvent: d,
    analyticsMetadata: f,
    showBestPriceOfferTag: h = !0,
    showBottomBorder: ee = !0,
    className: ie,
    interactionSource: g,
    initialVisibleOfferCount: _ = 3
}) {
    "use no forget";
    let v = p(`3375735072`),
        y = ne(s),
        se = v && p(`3109853659`),
        x = v ? qe() : null,
        S = We(),
        le = oe(),
        ue = ce(),
        C = ne(() => e?.serverId$()),
        w = ne(() => e ? Be(e) : f ?? {}),
        [T, pe] = (0, J.useState)(!1),
        E = (a.variants && Object.values(Ve(a.variants)).map(e => e.label).join(` • `)) ?? null,
        D = _,
        O = t.length > 0,
        he = t.slice(0, T ? t.length : D),
        ge = t.length > D,
        k = t.slice(D),
        ve = k.length,
        j = st(k),
        M = ot(g),
        N = t.filter(e => e.available).length,
        P = t.filter(e => e.checkoutable).length,
        F = a.analytics_meta ?? {},
        I = a.product_event_uuid,
        be = (0, J.useRef)(o),
        R = (0, J.useRef)(l),
        z = be.current && !o,
        B = R.current && !l,
        V = !o && !z && !l && !B;
    (0, J.useEffect)(() => {
        be.current = o, R.current = l
    }, [o, l]);
    let Ce = ({
        offer: e,
        offerIndex: n,
        offerSource: o,
        feedId: s,
        action: c,
        hadBuyButton: l,
        includeSiteUrl: u
    }) => {
        let f = a.popularity_metadata?.product_tags?.includes(`popular`) ?? !1,
            p = `product_offer_clicked`;
        d(`Product Offer Clicked`, p, `product_entity`, {
            content_reference_start_index: r,
            product_index: i,
            offer_index: n,
            interaction_source: g,
            ...F,
            product_id: a.id,
            product_event_uuid: I,
            product_url: a.url,
            offer_url: e.url,
            offers_count: t.length,
            price: e.price?.toString(),
            action: c,
            merchant_name: e.merchant_name,
            source: a.provider,
            feed_id: s,
            has_popular_tag: f
        }, void 0, e => fe(p, `offer_clicked`, e, {
            productId: a.id,
            interactionSource: g,
            offerCount: t.length,
            offerIndex: n
        })), c === `open_site_clicked` && d(`link_action`, null, `product_entity`, {
            action: `click`,
            link_type: `product_offer`,
            section_location: `sidebar`,
            content_reference_start_index: r,
            product_index: i,
            offer_index: n,
            interaction_source: g,
            product_id: a.id,
            product_event_uuid: I,
            merchant_name: e.merchant_name,
            url: e.url
        }, t => {
            ye({
                action: `click`,
                actionType: me.CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED,
                analyticsMetadata: t,
                contentReferenceStartIndex: r,
                contentReferenceType: M,
                linkAffordance: xe.CHATGPT_LINK_AFFORDANCE_BUTTON,
                linkType: Se.CHATGPT_LINK_TYPE_PRODUCT_OFFER,
                linkIndex: n + 1,
                parentContext: {
                    entityId: a.id,
                    entityCategory: `product`,
                    contentReferenceStartIndex: r,
                    messageId: t.messageId
                },
                surfaceLocation: de.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR,
                url: e.url
            })
        }), L({
            productOfferInteractionEventType: A.CHATGPT_PRODUCT_OFFER_INTERACTION_EVENT_TYPE_OFFER_CLICKED,
            clientThreadId: w.clientThreadId,
            product: a,
            offerIndex: n,
            offer: e,
            offerCount: t.length,
            contentReferenceType: M,
            messageId: w.messageId,
            contentReferenceStartIndex: r
        });
        let m = {
            content_reference_start_index: r,
            product_index: i,
            interaction_source: g,
            ...F,
            product_id: a.id,
            product_event_uuid: I,
            product_url: a.url,
            action: c,
            section: `product_detail`,
            section_location: `sidebar`,
            section_index: n,
            offer_index: n,
            merchant_name: e.merchant_name,
            price: e.price?.toString(),
            had_buy_button: l,
            variants: E,
            source: o,
            feed_id: s,
            has_popular_tag: f
        };
        u && (m.site_url = e.url), d(`product_offer`, `product_offer`, `product_entity`, m)
    };
    return (0, J.useEffect)(() => {
        if (o || !O) return;
        let e = {
                ...F,
                product_event_uuid: I,
                total_count: t.length,
                available_count: N,
                checkoutable_count: P,
                interaction_source: g,
                is_variant: !!E,
                source: a.provider,
                has_popular_tag: a.popularity_metadata?.product_tags?.includes(`popular`) ?? !1
            },
            n = `product_offers_shown`;
        d(`Product Offers Shown`, n, `product_entity`, e, void 0, e => fe(n, `offers_shown`, e, {
            productId: a.id,
            interactionSource: g,
            offerCount: t.length
        })), d(`product_detail`, `product_detail`, `product_entity`, {
            ...F,
            product_event_uuid: I,
            interaction_source: g,
            action: `updated`,
            variants_count: a.variants?.length ?? 0,
            variants_with_selection_count: a.variants?.filter(e => e.selected_option_id).length ?? 0,
            offers_count: N,
            checkoutable_offers_count: P,
            has_popular_tag: a.popularity_metadata?.product_tags?.includes(`popular`) ?? !1
        }), L({
            productOfferInteractionEventType: A.CHATGPT_PRODUCT_OFFER_INTERACTION_EVENT_TYPE_OFFER_LIST_SHOWN,
            clientThreadId: w.clientThreadId,
            product: a,
            offerIndex: void 0,
            offer: void 0,
            offerCount: t.length,
            contentReferenceType: M,
            messageId: w.messageId,
            contentReferenceStartIndex: r
        }), re.addAction(`shopping_checkout.offers_shown`, e)
    }, [O, o, E]), !o && !O ? null : (0, Y.jsx)(`div`, {
        className: c(ie, `relative`),
        children: (0, Y.jsxs)(m.div, {
            layout: !0,
            transition: V ? void 0 : {
                duration: 0
            },
            children: [(0, Y.jsx)(te, {
                initial: !1,
                children: he.map((e, n) => {
                    let s = e.debug_info?.feed_id,
                        c = e.debug_info?.source,
                        l = v && e.checkoutable,
                        f = e.launcherPayload ?? null,
                        p = f ? ae(() => _e({
                            ...Xe(f, w.messageId),
                            conversationId: C ?? null
                        })) : null,
                        te = p != null,
                        ne = !y && (te || l);
                    return (0, Y.jsx)(m.div, {
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
                            isCheckoutEnabled: v,
                            isLoading: o,
                            isCheckoutable: l,
                            showCheckoutLauncherButton: te,
                            checkoutLauncherLaunchProps: p,
                            isMultiItemCartEnabled: se,
                            isAddDisabled: S.status === `loading`,
                            showPriceDisclosure: !!a.show_price_disclosure,
                            showBestPriceOfferTag: h,
                            showBottomBorder: ee || ge,
                            isLastVisibleOffer: n === he.length - 1 && !o,
                            onOpenCheckout: (t, r) => {
                                t.stopPropagation(), u(), v && x && K(a) && e.checkout_payload && (x.openNewCheckout({
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
                                    offerSource: c,
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
                                    offerIndex: n,
                                    offerSource: c,
                                    feedId: s,
                                    action: `open_site_clicked`,
                                    hadBuyButton: ne,
                                    includeSiteUrl: !0
                                }), window.open(e.url, `_blank`)
                            },
                            onLaunchCheckout: t => {
                                t.stopPropagation(), Ce({
                                    offer: e,
                                    offerIndex: n,
                                    offerSource: c,
                                    feedId: s,
                                    action: `buy_button_clicked`,
                                    hadBuyButton: !0,
                                    includeSiteUrl: !0
                                })
                            },
                            onShown: () => {
                                d(`product_offer`, `product_offer`, `product_entity`, {
                                    content_reference_start_index: r,
                                    product_index: i,
                                    ...F,
                                    product_id: a.id,
                                    product_event_uuid: I,
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
                                    source: c,
                                    feed_id: s,
                                    has_popular_tag: a.popularity_metadata?.product_tags?.includes(`popular`) ?? !1
                                }), d(`link_action`, null, `product_entity`, {
                                    action: `show`,
                                    link_type: `product_offer`,
                                    section_location: `sidebar`,
                                    content_reference_start_index: r,
                                    product_index: i,
                                    offer_index: n,
                                    interaction_source: g,
                                    product_id: a.id,
                                    product_event_uuid: I,
                                    merchant_name: e.merchant_name,
                                    url: e.url
                                }, t => {
                                    ye({
                                        action: `show`,
                                        actionType: me.CHATGPT_ENGAGEMENT_ACTION_TYPE_SHOWN,
                                        analyticsMetadata: t,
                                        contentReferenceStartIndex: r,
                                        contentReferenceType: M,
                                        linkAffordance: xe.CHATGPT_LINK_AFFORDANCE_BUTTON,
                                        linkType: Se.CHATGPT_LINK_TYPE_PRODUCT_OFFER,
                                        linkIndex: n + 1,
                                        parentContext: {
                                            entityId: a.id,
                                            entityCategory: `product`,
                                            contentReferenceStartIndex: r,
                                            messageId: t.messageId
                                        },
                                        surfaceLocation: de.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR,
                                        url: e.url
                                    })
                                }), L({
                                    productOfferInteractionEventType: A.CHATGPT_PRODUCT_OFFER_INTERACTION_EVENT_TYPE_OFFER_SHOWN,
                                    clientThreadId: w.clientThreadId,
                                    product: a,
                                    offerIndex: n,
                                    offer: e,
                                    offerCount: t.length,
                                    contentReferenceType: M,
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
                    length: D
                }).map((e, t) => (0, Y.jsx)(at, {}, `offer-skeleton-${t}`))
            }), ge && !o && (0, Y.jsx)(m.div, {
                layout: !0,
                transition: V ? {
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
                    onClick: () => pe(e => !e),
                    contentWrapperClassName: `gap-1`,
                    "aria-expanded": T,
                    children: [T ? (0, Y.jsx)(b, {
                        id: `Gl3oLS`,
                        defaultMessage: `See less`
                    }) : j ? (0, Y.jsx)(b, {
                        id: `y+cCno`,
                        defaultMessage: `{hiddenOfferCount, plural, one {# other seller} other {# other sellers}} • Starting at {price}`,
                        values: {
                            hiddenOfferCount: ve,
                            price: j
                        }
                    }) : (0, Y.jsx)(b, {
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
            return ue.ProductEntity;
        case `carousel`:
            return ue.Products;
        default:
            return ue.Unrecognized
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
            onLaunchCheckout: l,
            isCheckoutEnabled: u,
            isLoading: d,
            isCheckoutable: p,
            showCheckoutLauncherButton: m,
            checkoutLauncherLaunchProps: h,
            isMultiItemCartEnabled: te,
            isAddDisabled: re,
            onAddToCart: ie,
            showPriceDisclosure: g,
            showBestPriceOfferTag: _,
            isLastVisibleOffer: v,
            showBottomBorder: ae,
            onShown: oe
        } = e,
        y = _ === void 0 || _,
        se = v !== void 0 && v,
        x = ae === void 0 || ae,
        [S, ue] = (0, J.useState)(void 0),
        de = ce(),
        C = i.price_details,
        fe = C?.base && (C.shipping ?? C.tax) && C.total,
        T = (C?.display_price === `total_price` || fe) && g,
        pe = C?.display_price === `total_price`,
        E = ne(s),
        D = m && !E,
        O = D ? h : null,
        {
            showDebugConversationTurns: me
        } = he(),
        ge = (0, J.useRef)(!1),
        _e;
    t[0] !== d || t[1] !== oe || t[2] !== r ? (_e = {
        isLoading: d,
        onShown: oe,
        rootRef: r
    }, t[0] = d, t[1] = oe, t[2] = r, t[3] = _e) : _e = t[3];
    let k = Qe(_e),
        ve, ye;
    t[4] !== p || t[5] !== d || t[6] !== E || t[7] !== i.checkout_payload ? (ve = () => {
        !d && !E && (async () => {
            if (!d && p && i.checkout_payload && !ge.current) {
                ge.current = !0;
                let e = await Ke([{
                    id: i.checkout_payload,
                    quantity: 1,
                    value: i.checkout_payload
                }]);
                e.customer_session_client_secret && ue(e.customer_session_client_secret)
            }
        })()
    }, ye = [d, p, E, i.checkout_payload], t[4] = p, t[5] = d, t[6] = E, t[7] = i.checkout_payload, t[8] = ve, t[9] = ye) : (ve = t[8], ye = t[9]), (0, J.useEffect)(ve, ye);
    let A = null;
    if (fe && C) {
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
    } else if (pe) {
        let e;
        t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Y.jsx)(b, {
            id: `ur3//V`,
            defaultMessage: `Prices shown include estimated tax and shipping.`
        }), t[20] = e) : e = t[20], A = e
    }
    let j;
    t[21] !== O || t[22] !== E || t[23] !== l || t[24] !== a ? (j = e => {
        if (E) {
            a(e);
            return
        }
        l(e), O?.onClick(e)
    }, t[21] = O, t[22] = E, t[23] = l, t[24] = a, t[25] = j) : j = t[25];
    let M = j,
        N;
    t[26] === a ? N = t[27] : (N = e => {
        e.stopPropagation(), a(e)
    }, t[26] = a, t[27] = N);
    let P = N,
        F = D ? P : void 0,
        I;
    t[28] !== u || t[29] !== D || t[30] !== p || t[31] !== E || t[32] !== M || t[33] !== o || t[34] !== a || t[35] !== S ? (I = D ? M : u && p && !E ? e => o(e, S) : a, t[28] = u, t[29] = D, t[30] = p, t[31] = E, t[32] = M, t[33] = o, t[34] = a, t[35] = S, t[36] = I) : I = t[36];
    let be = I,
        xe;
    t[37] === i.price ? xe = t[38] : (xe = (0, Y.jsx)(`span`, {
        className: `text-[15px] leading-5 font-semibold tracking-[-0.23px]`,
        children: i.price
    }), t[37] = i.price, t[38] = xe);
    let L = xe,
        R = u && p && !E,
        Se = R && te && !!i.checkout_payload,
        z;
    t[39] === i ? z = t[40] : (z = w(i) ?? i.url, t[39] = i, t[40] = z);
    let B = z,
        V = i.debug_info?.source,
        we = i.debug_info?.feed_id,
        Te;
    t[41] === i.debug_info ? Te = t[42] : (Te = Object.entries(i.debug_info ?? {}).filter(dt), t[41] = i.debug_info, t[42] = Te);
    let Ee = Te,
        De;
    t[43] === Symbol.for(`react.memo_cache_sentinel`) ? (De = c(`hover:bg-token-bg-tertiary -mx-6 cursor-pointer px-6`), t[43] = De) : De = t[43];
    let Oe = O?.onPointerEnter,
        ke = O?.onPointerEnter,
        Ae = O?.onFocus,
        je = se && x && `border-b`,
        H;
    t[44] === je ? H = t[45] : (H = c(`border-token-border-light flex flex-col border-t py-5`, je), t[44] = je, t[45] = H);
    let Me = D ? void 0 : a,
        Ne;
    t[46] === Symbol.for(`react.memo_cache_sentinel`) ? (Ne = (0, Y.jsx)(Re, {
        className: `text-token-text-tertiary`
    }), t[46] = Ne) : Ne = t[46];
    let Pe;
    t[47] === i.url ? Pe = t[48] : (Pe = (0, Y.jsx)(le, {
        className: `border-token-border-light h-5 w-5 rounded-full border`,
        url: i.url,
        size: 128,
        minSize: 16,
        fallback: Ne
    }), t[47] = i.url, t[48] = Pe);
    let Fe;
    t[49] === B ? Fe = t[50] : (Fe = (0, Y.jsx)(`div`, {
        className: `truncate`,
        children: B
    }), t[49] = B, t[50] = Fe);
    let Ie;
    t[51] !== B || t[52] !== de ? (Ie = de.formatMessage({
        id: `rigO8r`,
        defaultMessage: `Open {merchantName} in a new tab`
    }, {
        merchantName: B
    }), t[51] = B, t[52] = de, t[53] = Ie) : Ie = t[53];
    let Le;
    t[54] === Symbol.for(`react.memo_cache_sentinel`) ? (Le = (0, Y.jsx)(Ce, {
        className: `text-token-text-secondary mt-0.5 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100`
    }), t[54] = Le) : Le = t[54];
    let U;
    t[55] !== P || t[56] !== Ie ? (U = (0, Y.jsx)(`button`, {
        type: `button`,
        "aria-label": Ie,
        className: `shrink-0`,
        onClick: P,
        children: Le
    }), t[55] = P, t[56] = Ie, t[57] = U) : U = t[57];
    let W;
    t[58] !== F || t[59] !== Pe || t[60] !== Fe || t[61] !== U ? (W = (0, Y.jsxs)(`div`, {
        className: `flex flex-row items-center gap-1.5 text-[15px] leading-5 font-semibold tracking-[-0.23px]`,
        onClick: F,
        children: [Pe, Fe, U]
    }), t[58] = F, t[59] = Pe, t[60] = Fe, t[61] = U, t[62] = W) : W = t[62];
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
    t[69] !== u || t[70] !== R || t[71] !== d || t[72] !== i.tag || t[73] !== y || t[74] !== m ? (Be = u && !m && ht({
        tag: i.tag,
        showCheckoutLauncherButton: m,
        isInstantCheckoutEnabled: R,
        isLoading: d,
        showBestPriceOfferTag: y
    }) && (0, Y.jsx)(_t, {
        tag: i.tag
    }), t[69] = u, t[70] = R, t[71] = d, t[72] = i.tag, t[73] = y, t[74] = m, t[75] = Be) : Be = t[75];
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
    t[81] !== L || t[82] !== T || t[83] !== A ? (He = T && A ? (0, Y.jsx)(f, {
        label: A,
        children: (0, Y.jsxs)(`span`, {
            className: `flex items-center gap-0.5`,
            children: [L, (0, Y.jsx)(ee, {
                className: `text-token-text-secondary h-3 w-3`
            })]
        })
    }) : L, t[81] = L, t[82] = T, t[83] = A, t[84] = He) : He = t[84];
    let Ue;
    t[85] !== K || t[86] !== He ? (Ue = (0, Y.jsxs)(`div`, {
        className: `flex flex-col items-end pe-2`,
        children: [K, He]
    }), t[85] = K, t[86] = He, t[87] = Ue) : Ue = t[87];
    let We;
    t[88] !== O?.onFocus || t[89] !== O?.onPointerEnter || t[90] !== re || t[91] !== u || t[92] !== D || t[93] !== R || t[94] !== d || t[95] !== M || t[96] !== ie || t[97] !== o || t[98] !== S || t[99] !== Se ? (We = D ? (0, Y.jsx)(`div`, {
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
            children: (0, Y.jsx)(b, {
                id: `RVcyxH`,
                defaultMessage: `Open`
            })
        })
    }) : u ? R ? (0, Y.jsxs)(`div`, {
        className: `flex items-center gap-2`,
        children: [Se && (0, Y.jsx)(n, {
            className: `w-fit truncate px-4`,
            disabled: d || re,
            size: `medium`,
            color: `secondary`,
            type: `button`,
            onClick: ie,
            children: (0, Y.jsx)(b, {
                id: `scQ8Wu`,
                defaultMessage: `Add`
            })
        }), (0, Y.jsx)(n, {
            className: `w-fit truncate px-4`,
            disabled: d,
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
    }), t[88] = O?.onFocus, t[89] = O?.onPointerEnter, t[90] = re, t[91] = u, t[92] = D, t[93] = R, t[94] = d, t[95] = M, t[96] = ie, t[97] = o, t[98] = S, t[99] = Se, t[100] = We) : We = t[100];
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
    t[107] !== we || t[108] !== i.debug_info || t[109] !== Ee || t[110] !== me || t[111] !== V ? (Je = !1, t[107] = we, t[108] = i.debug_info, t[109] = Ee, t[110] = me, t[111] = V, t[112] = Je) : Je = t[112];
    let q;
    t[113] !== H || t[114] !== qe || t[115] !== Je ? (q = (0, Y.jsxs)(`div`, {
        className: H,
        children: [qe, Je]
    }), t[113] = H, t[114] = qe, t[115] = Je, t[116] = q) : q = t[116];
    let Ye;
    return t[117] !== be || t[118] !== k || t[119] !== Oe || t[120] !== ke || t[121] !== Ae || t[122] !== q ? (Ye = (0, Y.jsx)(`div`, {
        ref: k,
        className: De,
        onPointerEnter: Oe,
        onMouseOver: ke,
        onFocus: Ae,
        onClick: be,
        children: q
    }), t[117] = be, t[118] = k, t[119] = Oe, t[120] = ke, t[121] = Ae, t[122] = q, t[123] = Ye) : Ye = t[123], Ye
}

function dt(e) {
    let [t] = e;
    return t !== `source` && t !== `feed_id`
}

function ft(e) {
    return (0, Y.jsx)(`a`, {
        href: e.href,
        className: c(e.className, `underline`),
        target: `_blank`,
        rel: `noreferrer`,
        children: e.children
    })
}
var pt, J, Y, mt, ht, gt, _t, vt = e((() => {
    pt = S(), F(), M(), h(), Ue(), Ge(), Je(), ke(), Fe(), g(), Ee(), Pe(), d(), a(), T(), z(), E(), ve(), r(), U(), l(), B(), u(), o(), I(), R(), _(), i(), J = t(x()), se(), j(), Ze(), ge(), rt(), ze(), He(), Y = y(), mt = `https://persistent.oaistatic.com/chatgpt/pink_720.jpeg`, ht = ({
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
                    }), (0, Y.jsx)(be, {
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
            className: c(`text-token-text-primary flex items-center bg-inherit px-5 py-0 pt-6`, r && `sticky top-0 z-10`),
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
    _(), bt = y()
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
                    children: [(0, X.jsx)(O, {
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
                children: (0, X.jsx)(C, {
                    text: f
                })
            })
        })
    })
}
var Ct, X, wt = e((() => {
    pe(), W(), q(), N(), Ct = t(x()), se(), xt(), X = y()
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
    let l = (0, Dt.useRef)(!1);
    (0, Dt.useEffect)(() => {
        e && !l.current && (l.current = !0, o?.logTimingOnce(`render_time_to_first_review`), t(`Product Sidebar Reviews Loaded`, `product_sidebar_reviews_loaded`, `product_reviews`, {
            ...i ?? {},
            ...a ? {
                product_event_uuid: a
            } : {}
        }))
    }, [i, a, e, o, t]);

    function u(e) {
        try {
            return new URL(e).hostname.replace(/^www\./, ``)
        } catch {
            return ``
        }
    }

    function d(t) {
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
                children: (0, Z.jsx)(O, {
                    size: `small`,
                    className: `-mb-1`,
                    children: e.summary
                })
            }), e.reviews.map((r, o) => {
                let l = Ot[r.sentiment ?? `neutral`],
                    f = d(r);
                return (0, Z.jsxs)(m.div, {
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
                        className: c(`flex flex-row items-center gap-2`, `not-prose`),
                        children: [(0, Z.jsx)(le, {
                            url: f ?? ``,
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
                                    children: f ? u(f) : ``
                                }), r.sentiment && l && (0, Z.jsxs)(Z.Fragment, {
                                    children: [`·`, (0, Z.jsx)(l, {
                                        className: `icon-sm text-token-text-secondary`
                                    }), kt[r.sentiment]]
                                })]
                            })]
                        })]
                    }), (0, Z.jsxs)(`div`, {
                        children: [r.theme && (0, Z.jsx)(`div`, {
                            className: `text-token-text-primary`,
                            children: (0, Z.jsx)(O, {
                                size: `small`,
                                className: `prose-p:m-0 prose-p:inline inline! w-auto! font-semibold`,
                                children: r.theme
                            })
                        }), (0, Z.jsxs)(`div`, {
                            className: `text-token-text-primary`,
                            children: [(0, Z.jsx)(O, {
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
        chatgptLinkType: Se.CHATGPT_LINK_TYPE_PRODUCT_REVIEW_CITATION,
        chatgptSurfaceLocation: de.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR
    }) : null
}
var Dt, Z, Ot, kt, At = e((() => {
    z(), we(), je(), Ae(), pe(), W(), q(), U(), R(), _(), i(), Dt = t(x()), se(), xt(), Z = y(), Ot = {
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
        zt = S(), D(), Le(), _(), se(), Q = y(), Bt = e => {
            "use forget";
            let t = (0, zt.c)(22),
                {
                    options: n,
                    onSelect: r,
                    isErrored: i
                } = e,
                a = i && `border-token-interactive-label-danger-secondary-default`,
                o;
            t[0] === a ? o = t[1] : (o = c(`radix-state-open:border-token-text-primary border-token-border-heavy bg-token-bg-primary text-token-text-secondary hover:bg-token-bg-primary h-12 w-full justify-between rounded-2xl border px-4 py-3 text-start`, a), t[0] = a, t[1] = o);
            let s;
            t[2] === n ? s = t[3] : (s = n?.find(Rt)?.label ?? (0, Q.jsx)(b, {
                id: `FxgwoS`,
                defaultMessage: `Choose an option`
            }), t[2] = n, t[3] = s);
            let l;
            t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (l = (0, Q.jsx)(Oe, {
                className: `ms-0.5 h-4 w-4 shrink-0`
            }), t[4] = l) : l = t[4];
            let u;
            t[5] !== o || t[6] !== s ? (u = (0, Q.jsxs)(P.Trigger, {
                className: o,
                children: [s, l]
            }), t[5] = o, t[6] = s, t[7] = u) : u = t[7];
            let d;
            t[8] === r ? d = t[9] : (d = () => r(null, -1), t[8] = r, t[9] = d);
            let f;
            t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, Q.jsx)(b, {
                id: `oVromH`,
                defaultMessage: `--`
            }), t[10] = f) : f = t[10];
            let p;
            t[11] === d ? p = t[12] : (p = (0, Q.jsx)(P.Item, {
                onClick: d,
                children: f
            }), t[11] = d, t[12] = p);
            let m;
            t[13] !== r || t[14] !== n ? (m = n?.map((e, t) => (0, Q.jsx)(P.Item, {
                "aria-label": e.label ?? ``,
                onClick: () => r(e.id, t),
                className: c(e.available === !1 && `text-token-text-tertiary`),
                children: e.label
            }, e.id)), t[13] = r, t[14] = n, t[15] = m) : m = t[15];
            let h;
            t[16] !== p || t[17] !== m ? (h = (0, Q.jsx)(P.Portal, {
                children: (0, Q.jsxs)(P.Content, {
                    children: [p, m]
                })
            }), t[16] = p, t[17] = m, t[18] = h) : h = t[18];
            let ee;
            return t[19] !== h || t[20] !== u ? (ee = (0, Q.jsxs)(P.Root, {
                children: [u, h]
            }), t[19] = h, t[20] = u, t[21] = ee) : ee = t[21], ee
        }
    })),
    Ht, Ut, Wt, Gt = e((() => {
        Ht = S(), _(), x(), Ut = y(), Wt = e => {
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
                        className: c(`bg-token-bg-tertiary inline-flex min-h-10 min-w-[56px] items-center justify-center rounded-full px-4 text-[13px] leading-[18px] font-medium tracking-[-0.08px] transition-all`, n ? `border-token-text-primary bg-token-bg-primary border-2 px-[15px] shadow-[0_0_0_1px_var(--token-bg-primary)]` : `border-2 border-transparent`, e.available === !1 && `text-token-text-tertiary line-through`),
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
        Kt = S(), _(), x(), qt = y(), Jt = e => {
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
                        className: c(`relative flex h-10 w-10 items-center justify-center rounded-[10px] transition-all`, e.available === !1 && `opacity-50`),
                        onClick: () => r(e.selected ? null : e.id, t),
                        children: [(0, qt.jsx)(`span`, {
                            className: c(`border-token-border-default absolute inset-0 rounded-[10px] border`, n && `ring-token-text-primary ring-offset-token-bg-primary ring-2 ring-offset-2`)
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
                className: c(`flex flex-col gap-2`, r > 0 && `mt-5`),
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
    ie(), _(), se(), Lt(), Vt(), Gt(), Yt(), $ = y()
}));
export {
    St as a, xt as c, At as i, it as l, Zt as n, wt as o, Tt as r, yt as s, Xt as t, vt as u
};
//# sourceMappingURL=f4222f0c-d05buw2zp5uhwt0s.js.map