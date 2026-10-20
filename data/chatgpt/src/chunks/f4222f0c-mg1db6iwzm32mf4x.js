import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    At as n,
    F0 as r,
    Hnt as i,
    J5 as a,
    JT as o,
    Jnt as s,
    M5 as c,
    VU as l,
    Xy as u,
    Yy as d,
    aB as f,
    b5 as p,
    cW as m,
    cn as h,
    hn as ee,
    iB as te,
    iat as ne,
    k0 as re,
    lW as g,
    m8 as ie,
    nat as ae,
    q5 as _,
    qT as oe,
    zU as v
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as se,
    Hn as y,
    Pn as b,
    Tn as ce,
    Vn as x,
    zn as S
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    A3t as C,
    Aut as le,
    DA as w,
    Dlt as T,
    EA as E,
    Gst as D,
    IIn as ue,
    LIn as O,
    N3t as k,
    Olt as A,
    RHn as j,
    cjn as de,
    djn as fe,
    dkn as pe,
    dtn as me,
    fjn as he,
    gbt as M,
    hbt as ge,
    hjn as N,
    ipt as P,
    iwt as F,
    klt as _e,
    kut as ve,
    lWn as ye,
    nwt as I,
    opt as L,
    pkn as R,
    ptn as be,
    qst as z,
    rpt as B,
    sWn as xe,
    sjn as V,
    zHn as H
} from "./conversation-small-cawdu7il3ha6y70c.js";
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
} from "./30901919-jory365vq6ym5crx.js";
import {
    n as Re,
    t as U
} from "./0e5afe53-f9gmgfmgrr83ziw3.js";
import {
    a as W,
    r as G
} from "./dccfc4ad-e0yu6cagqlv3hrm9.js";
import {
    C as ze,
    i as Be
} from "./2b67bcd8-e8trjgoqarc7t9c2.js";
import {
    h as Ve,
    m as K,
    p as He
} from "./1362c49f-b4tydasw50b32hvj.js";
import {
    n as Ue,
    r as We
} from "./e1d1ae28-owy30khf9pzbeneu.js";
import {
    E as Ge,
    T as Ke
} from "./6fd89734-n8h3nmvcynx9bon3.js";
import {
    n as qe,
    r as Je
} from "./eda93c10-k2gripak03lxumxx.js";
import {
    n as q,
    t as Ye
} from "./407dfab1-i1crgvswuuyuhjju.js";
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
    tt = ce(), nt = t(y())
}));

function it({
    conversation: e,
    offers: t,
    contentReferenceStartIndex: n,
    productIndex: a,
    product: o,
    isLoading: s,
    suppressOfferAnimations: u = !1,
    onOpenCheckout: d,
    trackContentReferenceEvent: f,
    analyticsMetadata: m,
    showBestPriceOfferTag: te = !0,
    showBottomBorder: ne = !0,
    className: re,
    interactionSource: g,
    initialVisibleOfferCount: ie = 3
}) {
    "use no forget";
    let v = i(`3375735072`),
        y = c(r),
        ce = v && i(`3109853659`),
        x = v ? qe() : null,
        S = We(),
        C = l(),
        le = se(),
        w = c(() => e?.serverId$()),
        T = c(() => e ? Be(e) : m ?? {}),
        [E, D] = (0, J.useState)(!1),
        ue = (o.variants && Object.values(He(o.variants)).map(e => e.label).join(` • `)) ?? null,
        k = ie,
        A = t.length > 0,
        j = t.slice(0, E ? t.length : k),
        me = t.length > k,
        ge = t.slice(k),
        N = ge.length,
        P = st(ge),
        F = ot(g),
        _e = t.filter(e => e.available).length,
        ye = t.filter(e => e.checkoutable).length,
        I = o.analytics_meta ?? {},
        R = o.product_event_uuid,
        be = (0, J.useRef)(s),
        z = (0, J.useRef)(u),
        B = be.current && !s,
        xe = z.current && !u,
        H = !s && !B && !u && !xe;
    (0, J.useEffect)(() => {
        be.current = s, z.current = u
    }, [s, u]);
    let Se = ({
        offer: e,
        offerIndex: r,
        offerSource: i,
        feedId: s,
        action: c,
        hadBuyButton: l,
        includeSiteUrl: u
    }) => {
        let d = o.popularity_metadata?.product_tags?.includes(`popular`) ?? !1,
            p = `product_offer_clicked`;
        f(`Product Offer Clicked`, p, `product_entity`, {
            content_reference_start_index: n,
            product_index: a,
            offer_index: r,
            interaction_source: g,
            ...I,
            product_id: o.id,
            product_event_uuid: R,
            product_url: o.url,
            offer_url: e.url,
            offers_count: t.length,
            price: e.price?.toString(),
            action: c,
            merchant_name: e.merchant_name,
            source: o.provider,
            feed_id: s,
            has_popular_tag: d
        }, void 0, e => O(p, `offer_clicked`, e, {
            productId: o.id,
            interactionSource: g,
            offerCount: t.length,
            offerIndex: r
        })), c === `open_site_clicked` && f(`link_action`, null, `product_entity`, {
            action: `click`,
            link_type: `product_offer`,
            section_location: `sidebar`,
            content_reference_start_index: n,
            product_index: a,
            offer_index: r,
            interaction_source: g,
            product_id: o.id,
            product_event_uuid: R,
            merchant_name: e.merchant_name,
            url: e.url
        }, t => {
            M({
                action: `click`,
                actionType: V.CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED,
                analyticsMetadata: t,
                contentReferenceStartIndex: n,
                contentReferenceType: F,
                linkAffordance: fe.CHATGPT_LINK_AFFORDANCE_BUTTON,
                linkType: he.CHATGPT_LINK_TYPE_PRODUCT_OFFER,
                linkIndex: r + 1,
                parentContext: {
                    entityId: o.id,
                    entityCategory: `product`,
                    contentReferenceStartIndex: n,
                    messageId: t.messageId
                },
                surfaceLocation: de.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR,
                url: e.url
            })
        }), L({
            productOfferInteractionEventType: pe.CHATGPT_PRODUCT_OFFER_INTERACTION_EVENT_TYPE_OFFER_CLICKED,
            clientThreadId: T.clientThreadId,
            product: o,
            offerIndex: r,
            offer: e,
            offerCount: t.length,
            contentReferenceType: F,
            messageId: T.messageId,
            contentReferenceStartIndex: n
        });
        let m = {
            content_reference_start_index: n,
            product_index: a,
            interaction_source: g,
            ...I,
            product_id: o.id,
            product_event_uuid: R,
            product_url: o.url,
            action: c,
            section: `product_detail`,
            section_location: `sidebar`,
            section_index: r,
            offer_index: r,
            merchant_name: e.merchant_name,
            price: e.price?.toString(),
            had_buy_button: l,
            variants: ue,
            source: i,
            feed_id: s,
            has_popular_tag: d
        };
        u && (m.site_url = e.url), f(`product_offer`, `product_offer`, `product_entity`, m)
    };
    return (0, J.useEffect)(() => {
        if (s || !A) return;
        let e = {
                ...I,
                product_event_uuid: R,
                total_count: t.length,
                available_count: _e,
                checkoutable_count: ye,
                interaction_source: g,
                is_variant: !!ue,
                source: o.provider,
                has_popular_tag: o.popularity_metadata?.product_tags?.includes(`popular`) ?? !1
            },
            r = `product_offers_shown`;
        f(`Product Offers Shown`, r, `product_entity`, e, void 0, e => O(r, `offers_shown`, e, {
            productId: o.id,
            interactionSource: g,
            offerCount: t.length
        })), f(`product_detail`, `product_detail`, `product_entity`, {
            ...I,
            product_event_uuid: R,
            interaction_source: g,
            action: `updated`,
            variants_count: o.variants?.length ?? 0,
            variants_with_selection_count: o.variants?.filter(e => e.selected_option_id).length ?? 0,
            offers_count: _e,
            checkoutable_offers_count: ye,
            has_popular_tag: o.popularity_metadata?.product_tags?.includes(`popular`) ?? !1
        }), L({
            productOfferInteractionEventType: pe.CHATGPT_PRODUCT_OFFER_INTERACTION_EVENT_TYPE_OFFER_LIST_SHOWN,
            clientThreadId: T.clientThreadId,
            product: o,
            offerIndex: void 0,
            offer: void 0,
            offerCount: t.length,
            contentReferenceType: F,
            messageId: T.messageId,
            contentReferenceStartIndex: n
        }), ae.addAction(`shopping_checkout.offers_shown`, e)
    }, [A, s, ue]), !s && !A ? null : (0, Y.jsx)(`div`, {
        className: _(re, `relative`),
        children: (0, Y.jsxs)(h.div, {
            layout: !0,
            transition: H ? void 0 : {
                duration: 0
            },
            children: [(0, Y.jsx)(ee, {
                initial: !1,
                children: j.map((e, r) => {
                    let i = e.debug_info?.feed_id,
                        c = e.debug_info?.source,
                        l = v && e.checkoutable,
                        u = e.launcherPayload ?? null,
                        m = u ? p(() => ve({
                            ...Xe(u, T.messageId),
                            conversationId: w ?? null
                        })) : null,
                        ee = m != null,
                        re = !y && (ee || l);
                    return (0, Y.jsx)(h.div, {
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
                            isLoading: s,
                            isCheckoutable: l,
                            showCheckoutLauncherButton: ee,
                            checkoutLauncherLaunchProps: m,
                            isMultiItemCartEnabled: ce,
                            isAddDisabled: S.status === `loading`,
                            showPriceDisclosure: !!o.show_price_disclosure,
                            showBestPriceOfferTag: te,
                            showBottomBorder: ne || me,
                            isLastVisibleOffer: r === j.length - 1 && !s,
                            onOpenCheckout: (t, n) => {
                                t.stopPropagation(), d(), v && x && Ve(o) && e.checkout_payload && (x.openNewCheckout({
                                    preloadCustomerSessionClientSecret: n,
                                    metadata: T,
                                    items: [{
                                        id: e.checkout_payload,
                                        productId: o.id,
                                        quantity: 1,
                                        value: e.checkout_payload
                                    }]
                                }), Se({
                                    offer: e,
                                    offerIndex: r,
                                    offerSource: c,
                                    feedId: i,
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
                                    offerIndex: r,
                                    offerSource: c,
                                    feedId: i,
                                    action: `open_site_clicked`,
                                    hadBuyButton: re,
                                    includeSiteUrl: !0
                                }), window.open(e.url, `_blank`)
                            },
                            onLaunchCheckout: t => {
                                t.stopPropagation(), Se({
                                    offer: e,
                                    offerIndex: r,
                                    offerSource: c,
                                    feedId: i,
                                    action: `buy_button_clicked`,
                                    hadBuyButton: !0,
                                    includeSiteUrl: !0
                                })
                            },
                            onShown: () => {
                                f(`product_offer`, `product_offer`, `product_entity`, {
                                    content_reference_start_index: n,
                                    product_index: a,
                                    ...I,
                                    product_id: o.id,
                                    product_event_uuid: R,
                                    product_url: o.url,
                                    action: `shown`,
                                    section: `product_detail`,
                                    section_location: `sidebar`,
                                    section_index: r,
                                    offer_index: r,
                                    merchant_name: e.merchant_name,
                                    price: e.price?.toString(),
                                    had_buy_button: re,
                                    checkoutable: e.checkoutable,
                                    source: c,
                                    feed_id: i,
                                    has_popular_tag: o.popularity_metadata?.product_tags?.includes(`popular`) ?? !1
                                }), f(`link_action`, null, `product_entity`, {
                                    action: `show`,
                                    link_type: `product_offer`,
                                    section_location: `sidebar`,
                                    content_reference_start_index: n,
                                    product_index: a,
                                    offer_index: r,
                                    interaction_source: g,
                                    product_id: o.id,
                                    product_event_uuid: R,
                                    merchant_name: e.merchant_name,
                                    url: e.url
                                }, t => {
                                    M({
                                        action: `show`,
                                        actionType: V.CHATGPT_ENGAGEMENT_ACTION_TYPE_SHOWN,
                                        analyticsMetadata: t,
                                        contentReferenceStartIndex: n,
                                        contentReferenceType: F,
                                        linkAffordance: fe.CHATGPT_LINK_AFFORDANCE_BUTTON,
                                        linkType: he.CHATGPT_LINK_TYPE_PRODUCT_OFFER,
                                        linkIndex: r + 1,
                                        parentContext: {
                                            entityId: o.id,
                                            entityCategory: `product`,
                                            contentReferenceStartIndex: n,
                                            messageId: t.messageId
                                        },
                                        surfaceLocation: de.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR,
                                        url: e.url
                                    })
                                }), L({
                                    productOfferInteractionEventType: pe.CHATGPT_PRODUCT_OFFER_INTERACTION_EVENT_TYPE_OFFER_SHOWN,
                                    clientThreadId: T.clientThreadId,
                                    product: o,
                                    offerIndex: r,
                                    offer: e,
                                    offerCount: t.length,
                                    contentReferenceType: F,
                                    messageId: T.messageId,
                                    contentReferenceStartIndex: n
                                })
                            }
                        })
                    }, ct(e, r))
                })
            }), s && (0, Y.jsx)(`div`, {
                role: `status`,
                "aria-busy": !0,
                className: `space-y-0`,
                children: Array.from({
                    length: k
                }).map((e, t) => (0, Y.jsx)(at, {}, `offer-skeleton-${t}`))
            }), me && !s && (0, Y.jsx)(h.div, {
                layout: !0,
                transition: H ? {
                    type: `tween`,
                    ease: `easeInOut`,
                    duration: .2
                } : {
                    duration: 0
                },
                children: (0, Y.jsxs)(oe, {
                    className: `-ms-3 mt-2 w-fit px-3`,
                    size: `small`,
                    color: `ghost`,
                    onClick: () => D(e => !e),
                    contentWrapperClassName: `gap-1`,
                    "aria-expanded": E,
                    children: [E ? (0, Y.jsx)(b, {
                        id: `Gl3oLS`,
                        defaultMessage: `See less`
                    }) : P ? (0, Y.jsx)(b, {
                        id: `y+cCno`,
                        defaultMessage: `{hiddenOfferCount, plural, one {# other seller} other {# other sellers}} • Starting at {price}`,
                        values: {
                            hiddenOfferCount: N,
                            price: P
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
            children: [(0, Y.jsx)(D, {
                className: `h-4 w-4 rounded-full!`
            }), (0, Y.jsx)(D, {
                className: `h-4 w-28`
            })]
        }), (0, Y.jsx)(D, {
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
                children: (0, Y.jsx)(D, {
                    className: `h-9 w-15 rounded-[18px]!`
                })
            })]
        })
    }), e[1] = n) : n = e[1], n
}

function ot(e) {
    switch (e) {
        case `inline_link`:
            return B.ProductEntity;
        case `carousel`:
            return B.Products;
        default:
            return B.Unrecognized
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
            rootRef: n,
            offer: i,
            onVisitMerchant: a,
            onOpenCheckout: o,
            onLaunchCheckout: s,
            isCheckoutEnabled: l,
            isLoading: u,
            isCheckoutable: f,
            showCheckoutLauncherButton: p,
            checkoutLauncherLaunchProps: m,
            isMultiItemCartEnabled: h,
            isAddDisabled: ee,
            onAddToCart: ne,
            showPriceDisclosure: re,
            showBestPriceOfferTag: g,
            isLastVisibleOffer: ie,
            showBottomBorder: ae,
            onShown: v
        } = e,
        y = g === void 0 || g,
        ce = ie !== void 0 && ie,
        x = ae === void 0 || ae,
        [S, C] = (0, J.useState)(void 0),
        le = se(),
        w = i.price_details,
        E = w?.base && (w.shipping ?? w.tax) && w.total,
        D = (w?.display_price === `total_price` || E) && re,
        ue = w?.display_price === `total_price`,
        O = c(r),
        k = p && !O,
        A = k ? m : null,
        {
            showDebugConversationTurns: j
        } = be(),
        de = (0, J.useRef)(!1),
        fe;
    t[0] !== u || t[1] !== v || t[2] !== n ? (fe = {
        isLoading: u,
        onShown: v,
        rootRef: n
    }, t[0] = u, t[1] = v, t[2] = n, t[3] = fe) : fe = t[3];
    let pe = Qe(fe),
        me, he;
    t[4] !== f || t[5] !== u || t[6] !== O || t[7] !== i.checkout_payload ? (me = () => {
        !u && !O && (async () => {
            if (!u && f && i.checkout_payload && !de.current) {
                de.current = !0;
                let e = await Ke([{
                    id: i.checkout_payload,
                    quantity: 1,
                    value: i.checkout_payload
                }]);
                e.customer_session_client_secret && C(e.customer_session_client_secret)
            }
        })()
    }, he = [u, f, O, i.checkout_payload], t[4] = f, t[5] = u, t[6] = O, t[7] = i.checkout_payload, t[8] = me, t[9] = he) : (me = t[8], he = t[9]), (0, J.useEffect)(me, he);
    let M = null;
    if (E && w) {
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
    } else if (ue) {
        let e;
        t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Y.jsx)(b, {
            id: `ur3//V`,
            defaultMessage: `Prices shown include estimated tax and shipping.`
        }), t[20] = e) : e = t[20], M = e
    }
    let ge;
    t[21] !== A || t[22] !== O || t[23] !== s || t[24] !== a ? (ge = e => {
        if (O) {
            a(e);
            return
        }
        s(e), A?.onClick(e)
    }, t[21] = A, t[22] = O, t[23] = s, t[24] = a, t[25] = ge) : ge = t[25];
    let N = ge,
        P;
    t[26] === a ? P = t[27] : (P = e => {
        e.stopPropagation(), a(e)
    }, t[26] = a, t[27] = P);
    let F = P,
        _e = k ? F : void 0,
        ve;
    t[28] !== l || t[29] !== k || t[30] !== f || t[31] !== O || t[32] !== N || t[33] !== o || t[34] !== a || t[35] !== S ? (ve = k ? N : l && f && !O ? e => o(e, S) : a, t[28] = l, t[29] = k, t[30] = f, t[31] = O, t[32] = N, t[33] = o, t[34] = a, t[35] = S, t[36] = ve) : ve = t[36];
    let ye = ve,
        L;
    t[37] === i.price ? L = t[38] : (L = (0, Y.jsx)(`span`, {
        className: `text-[15px] leading-5 font-semibold tracking-[-0.23px]`,
        children: i.price
    }), t[37] = i.price, t[38] = L);
    let R = L,
        z = l && f && !O,
        B = z && h && !!i.checkout_payload,
        xe;
    t[39] === i ? xe = t[40] : (xe = T(i) ?? i.url, t[39] = i, t[40] = xe);
    let V = xe,
        H = i.debug_info?.source,
        Se = i.debug_info?.feed_id,
        Ce;
    t[41] === i.debug_info ? Ce = t[42] : (Ce = Object.entries(i.debug_info ?? {}).filter(dt), t[41] = i.debug_info, t[42] = Ce);
    let we = Ce,
        Te;
    t[43] === Symbol.for(`react.memo_cache_sentinel`) ? (Te = _(`hover:bg-token-bg-tertiary -mx-6 cursor-pointer px-6`), t[43] = Te) : Te = t[43];
    let Ee = A?.onPointerEnter,
        De = A?.onPointerEnter,
        Oe = A?.onFocus,
        ke = ce && x && `border-b`,
        Ae;
    t[44] === ke ? Ae = t[45] : (Ae = _(`border-token-border-light flex flex-col border-t py-5`, ke), t[44] = ke, t[45] = Ae);
    let je = k ? void 0 : a,
        Me;
    t[46] === Symbol.for(`react.memo_cache_sentinel`) ? (Me = (0, Y.jsx)(Re, {
        className: `text-token-text-tertiary`
    }), t[46] = Me) : Me = t[46];
    let Ne;
    t[47] === i.url ? Ne = t[48] : (Ne = (0, Y.jsx)(I, {
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
    t[55] !== F || t[56] !== Fe ? (U = (0, Y.jsx)(`button`, {
        type: `button`,
        "aria-label": Fe,
        className: `shrink-0`,
        onClick: F,
        children: Le
    }), t[55] = F, t[56] = Fe, t[57] = U) : U = t[57];
    let W;
    t[58] !== _e || t[59] !== Ne || t[60] !== Pe || t[61] !== U ? (W = (0, Y.jsxs)(`div`, {
        className: `flex flex-row items-center gap-1.5 text-[15px] leading-5 font-semibold tracking-[-0.23px]`,
        onClick: _e,
        children: [Ne, Pe, U]
    }), t[58] = _e, t[59] = Ne, t[60] = Pe, t[61] = U, t[62] = W) : W = t[62];
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
    t[69] !== l || t[70] !== z || t[71] !== u || t[72] !== i.tag || t[73] !== y || t[74] !== p ? (Be = l && !p && ht({
        tag: i.tag,
        showCheckoutLauncherButton: p,
        isInstantCheckoutEnabled: z,
        isLoading: u,
        showBestPriceOfferTag: y
    }) && (0, Y.jsx)(_t, {
        tag: i.tag
    }), t[69] = l, t[70] = z, t[71] = u, t[72] = i.tag, t[73] = y, t[74] = p, t[75] = Be) : Be = t[75];
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
    t[81] !== R || t[82] !== D || t[83] !== M ? (He = D && M ? (0, Y.jsx)(d, {
        label: M,
        children: (0, Y.jsxs)(`span`, {
            className: `flex items-center gap-0.5`,
            children: [R, (0, Y.jsx)(te, {
                className: `text-token-text-secondary h-3 w-3`
            })]
        })
    }) : R, t[81] = R, t[82] = D, t[83] = M, t[84] = He) : He = t[84];
    let Ue;
    t[85] !== K || t[86] !== He ? (Ue = (0, Y.jsxs)(`div`, {
        className: `flex flex-col items-end pe-2`,
        children: [K, He]
    }), t[85] = K, t[86] = He, t[87] = Ue) : Ue = t[87];
    let We;
    t[88] !== A?.onFocus || t[89] !== A?.onPointerEnter || t[90] !== ee || t[91] !== l || t[92] !== k || t[93] !== z || t[94] !== u || t[95] !== N || t[96] !== ne || t[97] !== o || t[98] !== S || t[99] !== B ? (We = k ? (0, Y.jsx)(`div`, {
        className: `flex flex-col items-end`,
        children: (0, Y.jsx)(oe, {
            className: `w-fit truncate px-4`,
            size: `medium`,
            color: `secondary`,
            disabled: u,
            onPointerEnter: A?.onPointerEnter,
            onMouseOver: A?.onPointerEnter,
            onFocus: A?.onFocus,
            onClick: N,
            children: (0, Y.jsx)(b, {
                id: `RVcyxH`,
                defaultMessage: `Open`
            })
        })
    }) : l ? z ? (0, Y.jsxs)(`div`, {
        className: `flex items-center gap-2`,
        children: [B && (0, Y.jsx)(oe, {
            className: `w-fit truncate px-4`,
            disabled: u || ee,
            size: `medium`,
            color: `secondary`,
            type: `button`,
            onClick: ne,
            children: (0, Y.jsx)(b, {
                id: `scQ8Wu`,
                defaultMessage: `Add`
            })
        }), (0, Y.jsx)(oe, {
            className: `w-fit truncate px-4`,
            disabled: u,
            size: `medium`,
            color: `primary`,
            onClick: e => o(e, S),
            children: (0, Y.jsx)(b, {
                id: `vxb4gy`,
                defaultMessage: `Buy`
            })
        })]
    }) : (0, Y.jsx)(oe, {
        className: `w-fit truncate px-4`,
        size: `medium`,
        color: `secondary`,
        children: (0, Y.jsx)(b, {
            id: `CvthQr`,
            defaultMessage: `Visit`
        })
    }) : (0, Y.jsx)(oe, {
        className: `w-fit min-w-20 truncate px-4`,
        size: `medium`,
        color: `secondary`,
        children: (0, Y.jsx)(b, {
            id: `CvthQr`,
            defaultMessage: `Visit`
        })
    }), t[88] = A?.onFocus, t[89] = A?.onPointerEnter, t[90] = ee, t[91] = l, t[92] = k, t[93] = z, t[94] = u, t[95] = N, t[96] = ne, t[97] = o, t[98] = S, t[99] = B, t[100] = We) : We = t[100];
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
    t[107] !== Se || t[108] !== i.debug_info || t[109] !== we || t[110] !== j || t[111] !== H ? (Je = !1, t[107] = Se, t[108] = i.debug_info, t[109] = we, t[110] = j, t[111] = H, t[112] = Je) : Je = t[112];
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
        className: _(e.className, `underline`),
        target: `_blank`,
        rel: `noreferrer`,
        children: e.children
    })
}
var pt, J, Y, mt, ht, gt, _t, vt = e((() => {
    pt = ce(), ue(), P(), o(), Ue(), Ge(), Je(), we(), Oe(), f(), je(), ke(), u(), re(), le(), F(), z(), me(), ie(), U(), v(), ge(), ne(), s(), R(), N(), a(), n(), J = t(y()), S(), xe(), Ze(), _e(), rt(), ze(), K(), Y = x(), mt = `https://persistent.oaistatic.com/chatgpt/pink_720.jpeg`, ht = ({
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
        return t[0] !== n.text || t[1] !== n.tooltip ? (r = n.tooltip ? (0, Y.jsx)(d, {
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
                    }), (0, Y.jsx)(ye, {
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
                children: [(0, Y.jsx)(te, {
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
            className: _(`text-token-text-primary flex items-center bg-inherit px-5 py-0 pt-6`, r && `sticky top-0 z-10`),
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
    a(), bt = x()
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
    let c = se(),
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
                    children: [(0, X.jsx)(C, {
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
                children: (0, X.jsx)(E, {
                    text: f
                })
            })
        })
    })
}
var Ct, X, wt = e((() => {
    k(), W(), q(), w(), Ct = t(y()), S(), xt(), X = x()
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
                children: (0, Z.jsx)(C, {
                    size: `small`,
                    className: `-mb-1`,
                    children: e.summary
                })
            }), e.reviews.map((r, o) => {
                let c = Ot[r.sentiment ?? `neutral`],
                    d = u(r);
                return (0, Z.jsxs)(h.div, {
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
                        className: _(`flex flex-row items-center gap-2`, `not-prose`),
                        children: [(0, Z.jsx)(I, {
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
                            children: (0, Z.jsx)(C, {
                                size: `small`,
                                className: `prose-p:m-0 prose-p:inline inline! w-auto! font-semibold`,
                                children: r.theme
                            })
                        }), (0, Z.jsxs)(`div`, {
                            className: `text-token-text-primary`,
                            children: [(0, Z.jsx)(C, {
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
        chatgptLinkType: he.CHATGPT_LINK_TYPE_PRODUCT_REVIEW_CITATION,
        chatgptSurfaceLocation: de.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR
    }) : null
}
var Dt, Z, Ot, kt, At = e((() => {
    F(), Fe(), Pe(), Se(), k(), W(), q(), U(), N(), a(), n(), Dt = t(y()), S(), xt(), Z = x(), Ot = {
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
        zt = ce(), H(), De(), a(), S(), Q = x(), Bt = e => {
            "use forget";
            let t = (0, zt.c)(22),
                {
                    options: n,
                    onSelect: r,
                    isErrored: i
                } = e,
                a = i && `border-token-interactive-label-danger-secondary-default`,
                o;
            t[0] === a ? o = t[1] : (o = _(`radix-state-open:border-token-text-primary border-token-border-heavy bg-token-bg-primary text-token-text-secondary hover:bg-token-bg-primary h-12 w-full justify-between rounded-2xl border px-4 py-3 text-start`, a), t[0] = a, t[1] = o);
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
            t[5] !== o || t[6] !== s ? (l = (0, Q.jsxs)(j.Trigger, {
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
            t[11] === u ? f = t[12] : (f = (0, Q.jsx)(j.Item, {
                onClick: u,
                children: d
            }), t[11] = u, t[12] = f);
            let p;
            t[13] !== r || t[14] !== n ? (p = n?.map((e, t) => (0, Q.jsx)(j.Item, {
                "aria-label": e.label ?? ``,
                onClick: () => r(e.id, t),
                className: _(e.available === !1 && `text-token-text-tertiary`),
                children: e.label
            }, e.id)), t[13] = r, t[14] = n, t[15] = p) : p = t[15];
            let m;
            t[16] !== f || t[17] !== p ? (m = (0, Q.jsx)(j.Portal, {
                children: (0, Q.jsxs)(j.Content, {
                    children: [f, p]
                })
            }), t[16] = f, t[17] = p, t[18] = m) : m = t[18];
            let h;
            return t[19] !== m || t[20] !== l ? (h = (0, Q.jsxs)(j.Root, {
                children: [l, m]
            }), t[19] = m, t[20] = l, t[21] = h) : h = t[21], h
        }
    })),
    Ht, Ut, Wt, Gt = e((() => {
        Ht = ce(), a(), y(), Ut = x(), Wt = e => {
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
                        className: _(`bg-token-bg-tertiary inline-flex min-h-10 min-w-[56px] items-center justify-center rounded-full px-4 text-[13px] leading-[18px] font-medium tracking-[-0.08px] transition-all`, n ? `border-token-text-primary bg-token-bg-primary border-2 px-[15px] shadow-[0_0_0_1px_var(--token-bg-primary)]` : `border-2 border-transparent`, e.available === !1 && `text-token-text-tertiary line-through`),
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
        Kt = ce(), a(), y(), qt = x(), Jt = e => {
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
                        className: _(`relative flex h-10 w-10 items-center justify-center rounded-[10px] transition-all`, e.available === !1 && `opacity-50`),
                        onClick: () => r(e.selected ? null : e.id, t),
                        children: [(0, qt.jsx)(`span`, {
                            className: _(`border-token-border-default absolute inset-0 rounded-[10px] border`, n && `ring-token-text-primary ring-offset-token-bg-primary ring-2 ring-offset-2`)
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
                className: _(`flex flex-col gap-2`, r > 0 && `mt-5`),
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
                    children: [(0, $.jsx)(g, {
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
    m(), a(), S(), Lt(), Vt(), Gt(), Yt(), $ = x()
}));
export {
    St as a, xt as c, At as i, it as l, Zt as n, wt as o, Tt as r, yt as s, Xt as t, vt as u
};
//# sourceMappingURL=f4222f0c-mg1db6iwzm32mf4x.js.map