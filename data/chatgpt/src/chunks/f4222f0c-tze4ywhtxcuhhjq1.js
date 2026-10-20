import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A0 as n,
    At as r,
    I0 as i,
    J5 as a,
    JT as o,
    N5 as s,
    VU as c,
    Wnt as l,
    Xnt as u,
    Xy as d,
    Y5 as f,
    Zy as p,
    aB as m,
    cW as h,
    cn as g,
    h8 as ee,
    hn as te,
    iB as ne,
    iat as re,
    lW as _,
    oat as ie,
    qT as ae,
    x5 as oe,
    zU as v
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as y,
    Nn as b,
    Rn as se,
    Vn as x,
    wn as S,
    zn as ce
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Alt as le,
    DA as ue,
    EA as C,
    MIn as de,
    Mut as w,
    NHn as T,
    P3t as E,
    PHn as D,
    Yst as O,
    apt as k,
    awt as fe,
    cjn as pe,
    ckn as A,
    cpt as me,
    djn as j,
    ftn as he,
    iWn as M,
    ijn as ge,
    j3t as N,
    jIn as P,
    jlt as F,
    jut as _e,
    klt as ve,
    mtn as I,
    nWn as L,
    okn as ye,
    opt as R,
    qst as z,
    rjn as B,
    sjn as be,
    swt as V,
    vbt as H,
    ybt as xe
} from "./conversation-small-cy5f8pl0g26s86so.js";
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
} from "./30901919-7dzdc1ou0jtwkwpt.js";
import {
    n as Re,
    t as U
} from "./0e5afe53-o2mcfq1ky1uaktz5.js";
import {
    a as W,
    r as G
} from "./dccfc4ad-8yxcpeo5on09ogxy.js";
import {
    C as ze,
    i as Be
} from "./2b67bcd8-fpmgt6afd6skqewc.js";
import {
    h as Ve,
    m as K,
    p as He
} from "./1362c49f-nxy6oz4peicqgmlj.js";
import {
    n as Ue,
    r as We
} from "./e1d1ae28-him27qfcxvk0xidz.js";
import {
    E as Ge,
    T as Ke
} from "./6fd89734-brd4j82z73mzve1c.js";
import {
    n as qe,
    r as Je
} from "./eda93c10-g61aqfdx62809l7k.js";
import {
    n as q,
    t as Ye
} from "./407dfab1-c62s3fxkuegiix7d.js";
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
    product: o,
    isLoading: u,
    suppressOfferAnimations: d = !1,
    onOpenCheckout: f,
    trackContentReferenceEvent: p,
    analyticsMetadata: m,
    showBestPriceOfferTag: h = !0,
    showBottomBorder: ee = !0,
    className: ne,
    interactionSource: _,
    initialVisibleOfferCount: ie = 3
}) {
    "use no forget";
    let v = l(`3375735072`),
        y = s(i),
        se = v && l(`3109853659`),
        x = v ? qe() : null,
        S = We(),
        le = c(),
        ue = ce(),
        C = s(() => e?.serverId$()),
        w = s(() => e ? Be(e) : m ?? {}),
        [T, E] = (0, J.useState)(!1),
        D = (o.variants && Object.values(He(o.variants)).map(e => e.label).join(` • `)) ?? null,
        O = ie,
        k = t.length > 0,
        fe = t.slice(0, T ? t.length : O),
        A = t.length > O,
        j = t.slice(O),
        he = j.length,
        M = st(j),
        N = ot(_),
        P = t.filter(e => e.available).length,
        F = t.filter(e => e.checkoutable).length,
        ve = o.analytics_meta ?? {},
        I = o.product_event_uuid,
        L = (0, J.useRef)(u),
        R = (0, J.useRef)(d),
        z = L.current && !u,
        V = R.current && !d,
        H = !u && !z && !d && !V;
    (0, J.useEffect)(() => {
        L.current = u, R.current = d
    }, [u, d]);
    let Se = ({
        offer: e,
        offerIndex: i,
        offerSource: a,
        feedId: s,
        action: c,
        hadBuyButton: l,
        includeSiteUrl: u
    }) => {
        let d = o.popularity_metadata?.product_tags?.includes(`popular`) ?? !1,
            f = `product_offer_clicked`;
        p(`Product Offer Clicked`, f, `product_entity`, {
            content_reference_start_index: n,
            product_index: r,
            offer_index: i,
            interaction_source: _,
            ...ve,
            product_id: o.id,
            product_event_uuid: I,
            product_url: o.url,
            offer_url: e.url,
            offers_count: t.length,
            price: e.price?.toString(),
            action: c,
            merchant_name: e.merchant_name,
            source: o.provider,
            feed_id: s,
            has_popular_tag: d
        }, void 0, e => de(f, `offer_clicked`, e, {
            productId: o.id,
            interactionSource: _,
            offerCount: t.length,
            offerIndex: i
        })), c === `open_site_clicked` && p(`link_action`, null, `product_entity`, {
            action: `click`,
            link_type: `product_offer`,
            section_location: `sidebar`,
            content_reference_start_index: n,
            product_index: r,
            offer_index: i,
            interaction_source: _,
            product_id: o.id,
            product_event_uuid: I,
            merchant_name: e.merchant_name,
            url: e.url
        }, t => {
            xe({
                action: `click`,
                actionType: B.CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED,
                analyticsMetadata: t,
                contentReferenceStartIndex: n,
                contentReferenceType: N,
                linkAffordance: be.CHATGPT_LINK_AFFORDANCE_BUTTON,
                linkType: pe.CHATGPT_LINK_TYPE_PRODUCT_OFFER,
                linkIndex: i + 1,
                parentContext: {
                    entityId: o.id,
                    entityCategory: `product`,
                    contentReferenceStartIndex: n,
                    messageId: t.messageId
                },
                surfaceLocation: ge.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR,
                url: e.url
            })
        }), me({
            productOfferInteractionEventType: ye.CHATGPT_PRODUCT_OFFER_INTERACTION_EVENT_TYPE_OFFER_CLICKED,
            clientThreadId: w.clientThreadId,
            product: o,
            offerIndex: i,
            offer: e,
            offerCount: t.length,
            contentReferenceType: N,
            messageId: w.messageId,
            contentReferenceStartIndex: n
        });
        let m = {
            content_reference_start_index: n,
            product_index: r,
            interaction_source: _,
            ...ve,
            product_id: o.id,
            product_event_uuid: I,
            product_url: o.url,
            action: c,
            section: `product_detail`,
            section_location: `sidebar`,
            section_index: i,
            offer_index: i,
            merchant_name: e.merchant_name,
            price: e.price?.toString(),
            had_buy_button: l,
            variants: D,
            source: a,
            feed_id: s,
            has_popular_tag: d
        };
        u && (m.site_url = e.url), p(`product_offer`, `product_offer`, `product_entity`, m)
    };
    return (0, J.useEffect)(() => {
        if (u || !k) return;
        let e = {
                ...ve,
                product_event_uuid: I,
                total_count: t.length,
                available_count: P,
                checkoutable_count: F,
                interaction_source: _,
                is_variant: !!D,
                source: o.provider,
                has_popular_tag: o.popularity_metadata?.product_tags?.includes(`popular`) ?? !1
            },
            r = `product_offers_shown`;
        p(`Product Offers Shown`, r, `product_entity`, e, void 0, e => de(r, `offers_shown`, e, {
            productId: o.id,
            interactionSource: _,
            offerCount: t.length
        })), p(`product_detail`, `product_detail`, `product_entity`, {
            ...ve,
            product_event_uuid: I,
            interaction_source: _,
            action: `updated`,
            variants_count: o.variants?.length ?? 0,
            variants_with_selection_count: o.variants?.filter(e => e.selected_option_id).length ?? 0,
            offers_count: P,
            checkoutable_offers_count: F,
            has_popular_tag: o.popularity_metadata?.product_tags?.includes(`popular`) ?? !1
        }), me({
            productOfferInteractionEventType: ye.CHATGPT_PRODUCT_OFFER_INTERACTION_EVENT_TYPE_OFFER_LIST_SHOWN,
            clientThreadId: w.clientThreadId,
            product: o,
            offerIndex: void 0,
            offer: void 0,
            offerCount: t.length,
            contentReferenceType: N,
            messageId: w.messageId,
            contentReferenceStartIndex: n
        }), re.addAction(`shopping_checkout.offers_shown`, e)
    }, [k, u, D]), !u && !k ? null : (0, Y.jsx)(`div`, {
        className: a(ne, `relative`),
        children: (0, Y.jsxs)(g.div, {
            layout: !0,
            transition: H ? void 0 : {
                duration: 0
            },
            children: [(0, Y.jsx)(te, {
                initial: !1,
                children: fe.map((e, i) => {
                    let a = e.debug_info?.feed_id,
                        s = e.debug_info?.source,
                        c = v && e.checkoutable,
                        l = e.launcherPayload ?? null,
                        d = l ? oe(() => _e({
                            ...Xe(l, w.messageId),
                            conversationId: C ?? null
                        })) : null,
                        m = d != null,
                        te = !y && (m || c);
                    return (0, Y.jsx)(g.div, {
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
                            isLoading: u,
                            isCheckoutable: c,
                            showCheckoutLauncherButton: m,
                            checkoutLauncherLaunchProps: d,
                            isMultiItemCartEnabled: se,
                            isAddDisabled: S.status === `loading`,
                            showPriceDisclosure: !!o.show_price_disclosure,
                            showBestPriceOfferTag: h,
                            showBottomBorder: ee || A,
                            isLastVisibleOffer: i === fe.length - 1 && !u,
                            onOpenCheckout: (t, n) => {
                                t.stopPropagation(), f(), v && x && Ve(o) && e.checkout_payload && (x.openNewCheckout({
                                    preloadCustomerSessionClientSecret: n,
                                    metadata: w,
                                    items: [{
                                        id: e.checkout_payload,
                                        productId: o.id,
                                        quantity: 1,
                                        value: e.checkout_payload
                                    }]
                                }), Se({
                                    offer: e,
                                    offerIndex: i,
                                    offerSource: s,
                                    feedId: a,
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
                                t.stopPropagation(), Se({
                                    offer: e,
                                    offerIndex: i,
                                    offerSource: s,
                                    feedId: a,
                                    action: `open_site_clicked`,
                                    hadBuyButton: te,
                                    includeSiteUrl: !0
                                }), window.open(e.url, `_blank`)
                            },
                            onLaunchCheckout: t => {
                                t.stopPropagation(), Se({
                                    offer: e,
                                    offerIndex: i,
                                    offerSource: s,
                                    feedId: a,
                                    action: `buy_button_clicked`,
                                    hadBuyButton: !0,
                                    includeSiteUrl: !0
                                })
                            },
                            onShown: () => {
                                p(`product_offer`, `product_offer`, `product_entity`, {
                                    content_reference_start_index: n,
                                    product_index: r,
                                    ...ve,
                                    product_id: o.id,
                                    product_event_uuid: I,
                                    product_url: o.url,
                                    action: `shown`,
                                    section: `product_detail`,
                                    section_location: `sidebar`,
                                    section_index: i,
                                    offer_index: i,
                                    merchant_name: e.merchant_name,
                                    price: e.price?.toString(),
                                    had_buy_button: te,
                                    checkoutable: e.checkoutable,
                                    source: s,
                                    feed_id: a,
                                    has_popular_tag: o.popularity_metadata?.product_tags?.includes(`popular`) ?? !1
                                }), p(`link_action`, null, `product_entity`, {
                                    action: `show`,
                                    link_type: `product_offer`,
                                    section_location: `sidebar`,
                                    content_reference_start_index: n,
                                    product_index: r,
                                    offer_index: i,
                                    interaction_source: _,
                                    product_id: o.id,
                                    product_event_uuid: I,
                                    merchant_name: e.merchant_name,
                                    url: e.url
                                }, t => {
                                    xe({
                                        action: `show`,
                                        actionType: B.CHATGPT_ENGAGEMENT_ACTION_TYPE_SHOWN,
                                        analyticsMetadata: t,
                                        contentReferenceStartIndex: n,
                                        contentReferenceType: N,
                                        linkAffordance: be.CHATGPT_LINK_AFFORDANCE_BUTTON,
                                        linkType: pe.CHATGPT_LINK_TYPE_PRODUCT_OFFER,
                                        linkIndex: i + 1,
                                        parentContext: {
                                            entityId: o.id,
                                            entityCategory: `product`,
                                            contentReferenceStartIndex: n,
                                            messageId: t.messageId
                                        },
                                        surfaceLocation: ge.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR,
                                        url: e.url
                                    })
                                }), me({
                                    productOfferInteractionEventType: ye.CHATGPT_PRODUCT_OFFER_INTERACTION_EVENT_TYPE_OFFER_SHOWN,
                                    clientThreadId: w.clientThreadId,
                                    product: o,
                                    offerIndex: i,
                                    offer: e,
                                    offerCount: t.length,
                                    contentReferenceType: N,
                                    messageId: w.messageId,
                                    contentReferenceStartIndex: n
                                })
                            }
                        })
                    }, ct(e, i))
                })
            }), u && (0, Y.jsx)(`div`, {
                role: `status`,
                "aria-busy": !0,
                className: `space-y-0`,
                children: Array.from({
                    length: O
                }).map((e, t) => (0, Y.jsx)(at, {}, `offer-skeleton-${t}`))
            }), A && !u && (0, Y.jsx)(g.div, {
                layout: !0,
                transition: H ? {
                    type: `tween`,
                    ease: `easeInOut`,
                    duration: .2
                } : {
                    duration: 0
                },
                children: (0, Y.jsxs)(ae, {
                    className: `-ms-3 mt-2 w-fit px-3`,
                    size: `small`,
                    color: `ghost`,
                    onClick: () => E(e => !e),
                    contentWrapperClassName: `gap-1`,
                    "aria-expanded": T,
                    children: [T ? (0, Y.jsx)(b, {
                        id: `Gl3oLS`,
                        defaultMessage: `See less`
                    }) : M ? (0, Y.jsx)(b, {
                        id: `y+cCno`,
                        defaultMessage: `{hiddenOfferCount, plural, one {# other seller} other {# other sellers}} • Starting at {price}`,
                        values: {
                            hiddenOfferCount: he,
                            price: M
                        }
                    }) : (0, Y.jsx)(b, {
                        id: `f9tOaY`,
                        defaultMessage: `See more`
                    }), T ? (0, Y.jsx)(Ee, {
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
            children: [(0, Y.jsx)(z, {
                className: `h-4 w-4 rounded-full!`
            }), (0, Y.jsx)(z, {
                className: `h-4 w-28`
            })]
        }), (0, Y.jsx)(z, {
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
                children: (0, Y.jsx)(z, {
                    className: `h-9 w-15 rounded-[18px]!`
                })
            })]
        })
    }), e[1] = n) : n = e[1], n
}

function ot(e) {
    switch (e) {
        case `inline_link`:
            return k.ProductEntity;
        case `carousel`:
            return k.Products;
        default:
            return k.Unrecognized
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
    return le(e) ?? e.url ?? `offer-${t}`
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
            onVisitMerchant: o,
            onOpenCheckout: c,
            onLaunchCheckout: l,
            isCheckoutEnabled: u,
            isLoading: f,
            isCheckoutable: p,
            showCheckoutLauncherButton: m,
            checkoutLauncherLaunchProps: h,
            isMultiItemCartEnabled: g,
            isAddDisabled: ee,
            onAddToCart: te,
            showPriceDisclosure: re,
            showBestPriceOfferTag: _,
            isLastVisibleOffer: ie,
            showBottomBorder: oe,
            onShown: v
        } = e,
        y = _ === void 0 || _,
        se = ie !== void 0 && ie,
        x = oe === void 0 || oe,
        [S, le] = (0, J.useState)(void 0),
        ue = ce(),
        C = r.price_details,
        de = C?.base && (C.shipping ?? C.tax) && C.total,
        w = (C?.display_price === `total_price` || de) && re,
        T = C?.display_price === `total_price`,
        E = s(i),
        D = m && !E,
        O = D ? h : null,
        {
            showDebugConversationTurns: k
        } = I(),
        pe = (0, J.useRef)(!1),
        A;
    t[0] !== f || t[1] !== v || t[2] !== n ? (A = {
        isLoading: f,
        onShown: v,
        rootRef: n
    }, t[0] = f, t[1] = v, t[2] = n, t[3] = A) : A = t[3];
    let me = Qe(A),
        j, he;
    t[4] !== p || t[5] !== f || t[6] !== E || t[7] !== r.checkout_payload ? (j = () => {
        !f && !E && (async () => {
            if (!f && p && r.checkout_payload && !pe.current) {
                pe.current = !0;
                let e = await Ke([{
                    id: r.checkout_payload,
                    quantity: 1,
                    value: r.checkout_payload
                }]);
                e.customer_session_client_secret && le(e.customer_session_client_secret)
            }
        })()
    }, he = [f, p, E, r.checkout_payload], t[4] = p, t[5] = f, t[6] = E, t[7] = r.checkout_payload, t[8] = j, t[9] = he) : (j = t[8], he = t[9]), (0, J.useEffect)(j, he);
    let M = null;
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
        }), t[16] = e, t[17] = n, t[18] = r, t[19] = i) : i = t[19], M = i
    } else if (T) {
        let e;
        t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Y.jsx)(b, {
            id: `ur3//V`,
            defaultMessage: `Prices shown include estimated tax and shipping.`
        }), t[20] = e) : e = t[20], M = e
    }
    let ge;
    t[21] !== O || t[22] !== E || t[23] !== l || t[24] !== o ? (ge = e => {
        if (E) {
            o(e);
            return
        }
        l(e), O?.onClick(e)
    }, t[21] = O, t[22] = E, t[23] = l, t[24] = o, t[25] = ge) : ge = t[25];
    let N = ge,
        P;
    t[26] === o ? P = t[27] : (P = e => {
        e.stopPropagation(), o(e)
    }, t[26] = o, t[27] = P);
    let F = P,
        _e = D ? F : void 0,
        L;
    t[28] !== u || t[29] !== D || t[30] !== p || t[31] !== E || t[32] !== N || t[33] !== c || t[34] !== o || t[35] !== S ? (L = D ? N : u && p && !E ? e => c(e, S) : o, t[28] = u, t[29] = D, t[30] = p, t[31] = E, t[32] = N, t[33] = c, t[34] = o, t[35] = S, t[36] = L) : L = t[36];
    let ye = L,
        R;
    t[37] === r.price ? R = t[38] : (R = (0, Y.jsx)(`span`, {
        className: `text-[15px] leading-5 font-semibold tracking-[-0.23px]`,
        children: r.price
    }), t[37] = r.price, t[38] = R);
    let z = R,
        B = u && p && !E,
        be = B && g && !!r.checkout_payload,
        V;
    t[39] === r ? V = t[40] : (V = ve(r) ?? r.url, t[39] = r, t[40] = V);
    let H = V,
        xe = r.debug_info?.source,
        Se = r.debug_info?.feed_id,
        Ce;
    t[41] === r.debug_info ? Ce = t[42] : (Ce = Object.entries(r.debug_info ?? {}).filter(dt), t[41] = r.debug_info, t[42] = Ce);
    let we = Ce,
        Te;
    t[43] === Symbol.for(`react.memo_cache_sentinel`) ? (Te = a(`hover:bg-token-bg-tertiary -mx-6 cursor-pointer px-6`), t[43] = Te) : Te = t[43];
    let Ee = O?.onPointerEnter,
        De = O?.onPointerEnter,
        Oe = O?.onFocus,
        ke = se && x && `border-b`,
        Ae;
    t[44] === ke ? Ae = t[45] : (Ae = a(`border-token-border-light flex flex-col border-t py-5`, ke), t[44] = ke, t[45] = Ae);
    let je = D ? void 0 : o,
        Me;
    t[46] === Symbol.for(`react.memo_cache_sentinel`) ? (Me = (0, Y.jsx)(Re, {
        className: `text-token-text-tertiary`
    }), t[46] = Me) : Me = t[46];
    let Ne;
    t[47] === r.url ? Ne = t[48] : (Ne = (0, Y.jsx)(fe, {
        className: `border-token-border-light h-5 w-5 rounded-full border`,
        url: r.url,
        size: 128,
        minSize: 16,
        fallback: Me
    }), t[47] = r.url, t[48] = Ne);
    let Pe;
    t[49] === H ? Pe = t[50] : (Pe = (0, Y.jsx)(`div`, {
        className: `truncate`,
        children: H
    }), t[49] = H, t[50] = Pe);
    let Fe;
    t[51] !== H || t[52] !== ue ? (Fe = ue.formatMessage({
        id: `rigO8r`,
        defaultMessage: `Open {merchantName} in a new tab`
    }, {
        merchantName: H
    }), t[51] = H, t[52] = ue, t[53] = Fe) : Fe = t[53];
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
    t[63] === r.details ? G = t[64] : (G = (0, Y.jsx)(`div`, {
        className: `text-token-text-secondary text-xs leading-4 whitespace-pre-wrap`,
        children: r.details
    }), t[63] = r.details, t[64] = G);
    let ze;
    t[65] !== je || t[66] !== W || t[67] !== G ? (ze = (0, Y.jsxs)(`div`, {
        className: `group flex flex-col gap-0.5`,
        onClick: je,
        children: [W, G]
    }), t[65] = je, t[66] = W, t[67] = G, t[68] = ze) : ze = t[68];
    let Be;
    t[69] !== u || t[70] !== B || t[71] !== f || t[72] !== r.tag || t[73] !== y || t[74] !== m ? (Be = u && !m && ht({
        tag: r.tag,
        showCheckoutLauncherButton: m,
        isInstantCheckoutEnabled: B,
        isLoading: f,
        showBestPriceOfferTag: y
    }) && (0, Y.jsx)(_t, {
        tag: r.tag
    }), t[69] = u, t[70] = B, t[71] = f, t[72] = r.tag, t[73] = y, t[74] = m, t[75] = Be) : Be = t[75];
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
    t[81] !== z || t[82] !== w || t[83] !== M ? (He = w && M ? (0, Y.jsx)(d, {
        label: M,
        children: (0, Y.jsxs)(`span`, {
            className: `flex items-center gap-0.5`,
            children: [z, (0, Y.jsx)(ne, {
                className: `text-token-text-secondary h-3 w-3`
            })]
        })
    }) : z, t[81] = z, t[82] = w, t[83] = M, t[84] = He) : He = t[84];
    let Ue;
    t[85] !== K || t[86] !== He ? (Ue = (0, Y.jsxs)(`div`, {
        className: `flex flex-col items-end pe-2`,
        children: [K, He]
    }), t[85] = K, t[86] = He, t[87] = Ue) : Ue = t[87];
    let We;
    t[88] !== O?.onFocus || t[89] !== O?.onPointerEnter || t[90] !== ee || t[91] !== u || t[92] !== D || t[93] !== B || t[94] !== f || t[95] !== N || t[96] !== te || t[97] !== c || t[98] !== S || t[99] !== be ? (We = D ? (0, Y.jsx)(`div`, {
        className: `flex flex-col items-end`,
        children: (0, Y.jsx)(ae, {
            className: `w-fit truncate px-4`,
            size: `medium`,
            color: `secondary`,
            disabled: f,
            onPointerEnter: O?.onPointerEnter,
            onMouseOver: O?.onPointerEnter,
            onFocus: O?.onFocus,
            onClick: N,
            children: (0, Y.jsx)(b, {
                id: `RVcyxH`,
                defaultMessage: `Open`
            })
        })
    }) : u ? B ? (0, Y.jsxs)(`div`, {
        className: `flex items-center gap-2`,
        children: [be && (0, Y.jsx)(ae, {
            className: `w-fit truncate px-4`,
            disabled: f || ee,
            size: `medium`,
            color: `secondary`,
            type: `button`,
            onClick: te,
            children: (0, Y.jsx)(b, {
                id: `scQ8Wu`,
                defaultMessage: `Add`
            })
        }), (0, Y.jsx)(ae, {
            className: `w-fit truncate px-4`,
            disabled: f,
            size: `medium`,
            color: `primary`,
            onClick: e => c(e, S),
            children: (0, Y.jsx)(b, {
                id: `vxb4gy`,
                defaultMessage: `Buy`
            })
        })]
    }) : (0, Y.jsx)(ae, {
        className: `w-fit truncate px-4`,
        size: `medium`,
        color: `secondary`,
        children: (0, Y.jsx)(b, {
            id: `CvthQr`,
            defaultMessage: `Visit`
        })
    }) : (0, Y.jsx)(ae, {
        className: `w-fit min-w-20 truncate px-4`,
        size: `medium`,
        color: `secondary`,
        children: (0, Y.jsx)(b, {
            id: `CvthQr`,
            defaultMessage: `Visit`
        })
    }), t[88] = O?.onFocus, t[89] = O?.onPointerEnter, t[90] = ee, t[91] = u, t[92] = D, t[93] = B, t[94] = f, t[95] = N, t[96] = te, t[97] = c, t[98] = S, t[99] = be, t[100] = We) : We = t[100];
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
    t[107] !== Se || t[108] !== r.debug_info || t[109] !== we || t[110] !== k || t[111] !== xe ? (Je = !1, t[107] = Se, t[108] = r.debug_info, t[109] = we, t[110] = k, t[111] = xe, t[112] = Je) : Je = t[112];
    let q;
    t[113] !== Ae || t[114] !== qe || t[115] !== Je ? (q = (0, Y.jsxs)(`div`, {
        className: Ae,
        children: [qe, Je]
    }), t[113] = Ae, t[114] = qe, t[115] = Je, t[116] = q) : q = t[116];
    let Ye;
    return t[117] !== ye || t[118] !== me || t[119] !== Ee || t[120] !== De || t[121] !== Oe || t[122] !== q ? (Ye = (0, Y.jsx)(`div`, {
        ref: me,
        className: Te,
        onPointerEnter: Ee,
        onMouseOver: De,
        onFocus: Oe,
        onClick: ye,
        children: q
    }), t[117] = ye, t[118] = me, t[119] = Ee, t[120] = De, t[121] = Oe, t[122] = q, t[123] = Ye) : Ye = t[123], Ye
}

function dt(e) {
    let [t] = e;
    return t !== `source` && t !== `feed_id`
}

function ft(e) {
    return (0, Y.jsx)(`a`, {
        href: e.href,
        className: a(e.className, `underline`),
        target: `_blank`,
        rel: `noreferrer`,
        children: e.children
    })
}
var pt, J, Y, mt, ht, gt, _t, vt = e((() => {
    pt = S(), P(), R(), o(), Ue(), Ge(), Je(), we(), Oe(), m(), je(), ke(), p(), n(), w(), V(), O(), he(), ee(), U(), v(), H(), ie(), u(), A(), j(), f(), r(), J = t(x()), se(), L(), Ze(), F(), rt(), ze(), K(), Y = y(), mt = `https://persistent.oaistatic.com/chatgpt/pink_720.jpeg`, ht = ({
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
                    }), (0, Y.jsx)(M, {
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
                children: [(0, Y.jsx)(ne, {
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
            className: a(`text-token-text-primary flex items-center bg-inherit px-5 py-0 pt-6`, r && `sticky top-0 z-10`),
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
    f(), bt = y()
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
                    children: [(0, X.jsx)(N, {
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
    E(), W(), q(), ue(), Ct = t(x()), se(), xt(), X = y()
}));

function Tt({
    contentReference: e,
    trackContentReferenceEvent: t,
    disableAnimation: n,
    headerRef: r,
    productAnalyticsMeta: i,
    productEventUuid: o,
    renderProfiler: s,
    messageId: c
}) {
    let l = (0, Dt.useRef)(!1);
    (0, Dt.useEffect)(() => {
        e && !l.current && (l.current = !0, s?.logTimingOnce(`render_time_to_first_review`), t(`Product Sidebar Reviews Loaded`, `product_sidebar_reviews_loaded`, `product_reviews`, {
            ...i ?? {},
            ...o ? {
                product_event_uuid: o
            } : {}
        }))
    }, [i, o, e, s, t]);

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
                children: (0, Z.jsx)(N, {
                    size: `small`,
                    className: `-mb-1`,
                    children: e.summary
                })
            }), e.reviews.map((r, s) => {
                let l = Ot[r.sentiment ?? `neutral`],
                    f = d(r);
                return (0, Z.jsxs)(g.div, {
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
                        className: a(`flex flex-row items-center gap-2`, `not-prose`),
                        children: [(0, Z.jsx)(fe, {
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
                            children: (0, Z.jsx)(N, {
                                size: `small`,
                                className: `prose-p:m-0 prose-p:inline inline! w-auto! font-semibold`,
                                children: r.theme
                            })
                        }), (0, Z.jsxs)(`div`, {
                            className: `text-token-text-primary`,
                            children: [(0, Z.jsx)(N, {
                                size: `small`,
                                className: `prose-p:m-0 prose-p:inline inline! w-auto!`,
                                children: r.summary
                            }), (0, Z.jsx)(Et, {
                                cite: r.cite,
                                contentReference: e,
                                messageId: c,
                                reviewIndex: s,
                                trackContentReferenceEvent: t,
                                analyticsMetadata: {
                                    ...i ?? {},
                                    ...o ? {
                                        product_event_uuid: o
                                    } : {}
                                }
                            })]
                        })]
                    })]
                }, s)
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
        chatgptLinkType: pe.CHATGPT_LINK_TYPE_PRODUCT_REVIEW_CITATION,
        chatgptSurfaceLocation: ge.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR
    }) : null
}
var Dt, Z, Ot, kt, At = e((() => {
    V(), Fe(), Pe(), Se(), E(), W(), q(), U(), j(), f(), r(), Dt = t(x()), se(), xt(), Z = y(), Ot = {
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
        zt = S(), D(), De(), f(), se(), Q = y(), Bt = e => {
            "use forget";
            let t = (0, zt.c)(22),
                {
                    options: n,
                    onSelect: r,
                    isErrored: i
                } = e,
                o = i && `border-token-interactive-label-danger-secondary-default`,
                s;
            t[0] === o ? s = t[1] : (s = a(`radix-state-open:border-token-text-primary border-token-border-heavy bg-token-bg-primary text-token-text-secondary hover:bg-token-bg-primary h-12 w-full justify-between rounded-2xl border px-4 py-3 text-start`, o), t[0] = o, t[1] = s);
            let c;
            t[2] === n ? c = t[3] : (c = n?.find(Rt)?.label ?? (0, Q.jsx)(b, {
                id: `FxgwoS`,
                defaultMessage: `Choose an option`
            }), t[2] = n, t[3] = c);
            let l;
            t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (l = (0, Q.jsx)(Ce, {
                className: `ms-0.5 h-4 w-4 shrink-0`
            }), t[4] = l) : l = t[4];
            let u;
            t[5] !== s || t[6] !== c ? (u = (0, Q.jsxs)(T.Trigger, {
                className: s,
                children: [c, l]
            }), t[5] = s, t[6] = c, t[7] = u) : u = t[7];
            let d;
            t[8] === r ? d = t[9] : (d = () => r(null, -1), t[8] = r, t[9] = d);
            let f;
            t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, Q.jsx)(b, {
                id: `oVromH`,
                defaultMessage: `--`
            }), t[10] = f) : f = t[10];
            let p;
            t[11] === d ? p = t[12] : (p = (0, Q.jsx)(T.Item, {
                onClick: d,
                children: f
            }), t[11] = d, t[12] = p);
            let m;
            t[13] !== r || t[14] !== n ? (m = n?.map((e, t) => (0, Q.jsx)(T.Item, {
                "aria-label": e.label ?? ``,
                onClick: () => r(e.id, t),
                className: a(e.available === !1 && `text-token-text-tertiary`),
                children: e.label
            }, e.id)), t[13] = r, t[14] = n, t[15] = m) : m = t[15];
            let h;
            t[16] !== p || t[17] !== m ? (h = (0, Q.jsx)(T.Portal, {
                children: (0, Q.jsxs)(T.Content, {
                    children: [p, m]
                })
            }), t[16] = p, t[17] = m, t[18] = h) : h = t[18];
            let g;
            return t[19] !== h || t[20] !== u ? (g = (0, Q.jsxs)(T.Root, {
                children: [u, h]
            }), t[19] = h, t[20] = u, t[21] = g) : g = t[21], g
        }
    })),
    Ht, Ut, Wt, Gt = e((() => {
        Ht = S(), f(), x(), Ut = y(), Wt = e => {
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
                        className: a(`bg-token-bg-tertiary inline-flex min-h-10 min-w-[56px] items-center justify-center rounded-full px-4 text-[13px] leading-[18px] font-medium tracking-[-0.08px] transition-all`, n ? `border-token-text-primary bg-token-bg-primary border-2 px-[15px] shadow-[0_0_0_1px_var(--token-bg-primary)]` : `border-2 border-transparent`, e.available === !1 && `text-token-text-tertiary line-through`),
                        onClick: () => r(e.selected ? null : e.id, t),
                        children: e.label
                    }, e.id)
                }, t[3] = r, t[4] = e), i = n.map(e), t[0] = r, t[1] = n, t[2] = i
            } else i = t[2];
            let o;
            return t[5] === i ? o = t[6] : (o = (0, Ut.jsx)(`div`, {
                className: `flex flex-wrap gap-2.5`,
                children: i
            }), t[5] = i, t[6] = o), o
        }
    })),
    Kt, qt, Jt, Yt = e((() => {
        Kt = S(), f(), x(), qt = y(), Jt = e => {
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
                        className: a(`relative flex h-10 w-10 items-center justify-center rounded-[10px] transition-all`, e.available === !1 && `opacity-50`),
                        onClick: () => r(e.selected ? null : e.id, t),
                        children: [(0, qt.jsx)(`span`, {
                            className: a(`border-token-border-default absolute inset-0 rounded-[10px] border`, n && `ring-token-text-primary ring-offset-token-bg-primary ring-2 ring-offset-2`)
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
            let o;
            return t[5] === i ? o = t[6] : (o = (0, qt.jsx)(`div`, {
                className: `flex flex-wrap items-center gap-3`,
                children: i
            }), t[5] = i, t[6] = o), o
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
                o = e.options.map(t => ({
                    ...t,
                    label: Nt({
                        groupLabel: e.label,
                        label: t.label
                    })
                }));
            return (0, $.jsxs)(`div`, {
                className: a(`flex flex-col gap-2`, r > 0 && `mt-5`),
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
                    options: o,
                    onSelect: (n, r) => t(e.id, n, r)
                }) : e.type === `pill` ? (0, $.jsx)(Wt, {
                    options: o,
                    onSelect: (n, r) => t(e.id, n, r)
                }) : (0, $.jsx)(Bt, {
                    options: o,
                    onSelect: (n, r) => t(e.id, n, r),
                    isErrored: n && !e.selected_option_id
                }), !i && n && (0, $.jsxs)(`div`, {
                    className: `text-token-interactive-label-danger-secondary-default flex items-center gap-1 text-sm`,
                    children: [(0, $.jsx)(_, {
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
    h(), f(), se(), Lt(), Vt(), Gt(), Yt(), $ = y()
}));
export {
    St as a, xt as c, At as i, it as l, Zt as n, wt as o, Tt as r, yt as s, Xt as t, vt as u
};
//# sourceMappingURL=f4222f0c-tze4ywhtxcuhhjq1.js.map