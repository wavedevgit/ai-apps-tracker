const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/6a801ab1-jhglx2arwjh95cq2.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-r54yv6lv29x4ew99.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-dwpaie1hln28efxb.js", "assets/30901919-k5uqyx4vyplt9toa.js", "assets/c470f5ab-bhx5jraq636jc4ww.js", "assets/0e5afe53-d830ix843j2kh0p0.js", "assets/conversation-small-gfjfeahf.css", "assets/c2675c8c-jg3tpj8mw86wdc0g.js", "assets/82782bc9-loong612qtaq7sd9.js", "assets/8b34dbc2-bgocf3s6t6l67twq.js", "assets/global-modals-dxg9ukpk.css", "assets/f254c486-hfw37rcdavkvc2cj.js", "assets/6fd89734-odivrvqrbnk1lxc9.js", "assets/3a792387-ithdidj17yv5xqyq.js", "assets/411304d4-ga1uex9l1bs5dkl8.js", "assets/f4a8359c-bghyi7u7xpnfpnuu.js", "assets/3e574439-khpdmddbc4jenjfl.js", "assets/25a66342-jphxkuox75vuywjp.js", "assets/2ea88c7a-lxyla91xs6iv7odf.js", "assets/25a66342-j7cd8h2bqav7weve.js"]))) => i.map(i => d[i]);
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as t,
    A5 as n,
    A8 as r,
    F8 as i,
    Hot as a,
    Lnt as o,
    R8 as s,
    Vot as c,
    Y7 as ee,
    Yat as l,
    _F as u,
    a2 as d,
    a5 as f,
    c2 as p,
    c5 as m,
    cst as h,
    d2 as g,
    d5 as _,
    dF as te,
    e5 as ne,
    f5 as v,
    i5 as y,
    l5 as b,
    m5 as x,
    o2 as re,
    o5 as ie,
    r5 as S,
    sst as ae,
    tot as oe,
    u5 as C,
    vF as se,
    znt as ce
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    cn as le,
    ln as ue
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    bLn as de,
    yLn as fe
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    n as pe,
    r as me
} from "./f254c486-hfw37rcdavkvc2cj.js";

function he(e) {
    if (!(e instanceof l)) return null;
    let t = e.json?.errors ?? e.detail?.errors,
        n = w(t);
    return n ? n.original_error ?? n : null
}
var ge, w, T, E, D = e((() => {
        oe(), ge = e => !!e && typeof e == `object` && e.should_display === !1 && `original_error` in e, w = e => Array.isArray(e) ? e.find(ge) ?? null : null, T = e => !!e && typeof e == `object` && e.should_display === !0, E = e => Array.isArray(e) ? e.filter(T).map(e => e.original_error).filter(Boolean) : []
    })),
    O, k, A, j, M, N, P, F, I = e((() => {
        se(), ce(), de(), O = ({
            conversation: e,
            checkoutId: t,
            connectorId: n,
            messageId: r
        }, i) => {
            o.logEventWithStatsig(`product_checkout`, `product_checkout`, {
                ...fe({
                    clientThreadId: u(e),
                    messageId: r ?? void 0
                }),
                ...t ? {
                    checkout_id: t
                } : {},
                ...n ? {
                    connector_id: n
                } : {},
                merchant_platform: `ecosystem`,
                ...i
            })
        }, k = (e, t) => O(e, {
            action: `shown`,
            ...t.merchantName ? {
                merchant_name: t.merchantName
            } : {},
            ...t.merchantUrl ? {
                merchant_url: t.merchantUrl
            } : {},
            ...t.hadSavedPaymentMethod === void 0 ? {} : {
                hadSavedPaymentMethod: t.hadSavedPaymentMethod
            }
        }), A = (e, t, n) => O(e, {
            action: `cart_load_failed`,
            reason: t,
            ...n ? {
                error_message: n
            } : {}
        }), j = (e, {
            label: t,
            source: n,
            hasExistingPaymentMethod: r
        }) => O(e, {
            credit_card_type: t ?? void 0,
            prefill: n === `prefill`,
            action: r ? `payment_method_updated` : `payment_method_added`
        }), M = (e, t) => O(e, {
            credit_card_type: t ?? void 0,
            action: `payment_method_removed`
        }), N = (e, {
            paymentMethod: t,
            attemptId: n
        }) => O(e, {
            payment_method: t ?? void 0,
            action: `express_checkout_button_clicked`,
            ...n ? {
                attempt_id: n
            } : {}
        }), P = (e, {
            paymentMethod: t,
            attemptId: n,
            isExpressCheckout: r,
            merchantName: i,
            merchantUrl: a
        }) => O(e, {
            action: `pay_button_clicked`,
            ...t ? {
                payment_method: t
            } : {},
            ...i ? {
                merchant_name: i
            } : {},
            ...a ? {
                merchant_url: a
            } : {},
            ...n ? {
                attempt_id: n
            } : {},
            ...r === void 0 ? {} : {
                is_express_checkout: r
            }
        }), F = (e, {
            attemptId: t,
            reason: n,
            errorMessage: r,
            succeeded: i
        }) => O(e, {
            action: i ? `payment_succeeded` : `payment_failed`,
            ...t ? {
                attempt_id: t
            } : {},
            ...n ? {
                reason: n
            } : {},
            ...r ? {
                error_message: r
            } : {}
        })
    })),
    L, R, z, _e, ve, ye, be, xe, Se, Ce, B, we, Te = e((() => {
        L = () => e => e, R = L()([`stripe`, `paypal`, `adyen`, `braintree`, `fiserv`, `worldpay`, `jpmorgan`, `checkout`, `merchant`]), z = L()([`card`, `link`, `apple_pay`, `google_pay`]), _e = L()([`amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `jcb`, `link`, `mastercard`, `unionpay`, `visa`, `unknown`]), ve = L()([`terms_of_use`, `privacy_policy`, `seller_shop_policies`, `product_link`, `support_url`, `return_policy`, `collection_notice`]), ye = L()([`missing`, `invalid`, `out_of_stock`, `payment_declined`, `requires_sign_in`, `requires_3ds`, `price_change`]), be = L()([`info`, `error`]), xe = L()([`plain`, `markdown`]), Se = L()([`shipping`, `digital`]), Ce = L()([`items_base_amount`, `items_discount`, `subtotal`, `discount`, `fulfillment`, `tax`, `fee`, `tip`, `total`]), B = L()([`not_ready_for_payment`, `ready_for_payment`, `completed`, `canceled`, `requires_escalation`]), we = L()([`live`, `test`])
    })),
    V, H, Ee, De, U, W, Oe, G, ke, K, q, J, Ae, Y, X, je, Me, Ne, Pe, Z, Fe, Q, Ie, $, Le, Re = e((() => {
        ne(), pe(), Te(), V = f({
            id: x,
            item: f({
                id: x,
                quantity: C
            }),
            name: x,
            description: x,
            images: S(x),
            base_amount: C,
            discount: C,
            subtotal: C,
            tax: C,
            total: C
        }), H = f({
            type: y(Ce),
            display_text: x,
            amount: C
        }), Ee = f({
            id: x,
            type: () => `shipping`,
            title: x,
            subtitle: x,
            subtotal: C,
            tax: C,
            total: C,
            carrier: x,
            earliest_delivery_time: x,
            latest_delivery_time: x
        }), De = f({
            id: x,
            type: () => `digital`,
            title: x,
            subtitle: x,
            subtotal: C,
            tax: C,
            total: C
        }), U = e => {
            switch (m(v(e)?.type, Se)) {
                case `shipping`:
                    return Ee(e);
                case `digital`:
                    return De(e)
            }
        }, W = y(xe), Oe = f({
            type: () => `info`,
            param: x,
            content_type: W,
            content: x
        }), G = f({
            type: () => `error`,
            code: y(ye),
            param: x,
            content_type: W,
            content: x
        }), ke = e => {
            let t = v(e, {}),
                n = {};
            for (let [e, r] of Object.entries(t)) typeof r == `string` && (n[e] = r);
            return n
        }, K = e => {
            switch (m(v(e)?.type, be)) {
                case `info`:
                    return Oe(e);
                case `error`:
                    return G(e)
            }
        }, q = f({
            type: y(ve),
            url: x
        }), J = f({
            name: x,
            line_one: x,
            line_two: x,
            city: x,
            state: x,
            country: e => me(e) ?? `US`,
            postal_code: x
        }), Ae = f({
            id: x,
            checkout_session_id: x,
            permalink_url: x
        }), Y = e => m(x(e).toLowerCase(), z), X = e => m(x(e).toLowerCase(), _e, `unknown`), je = e => {
            let t = v(e);
            return t ? {
                type: Y(t.type),
                ...t.allowed_card_brands === void 0 ? {} : {
                    allowed_card_brands: ie(t.allowed_card_brands, X)
                }
            } : {
                type: Y(e)
            }
        }, Me = e => {
            let t = e;
            if (typeof e == `string`) try {
                t = JSON.parse(e)
            } catch {}
            return S(je)(t)
        }, Ne = f({
            id: x,
            type: Y,
            display_name: x,
            display_last4: x,
            display_brand: X
        }), Pe = f({
            merchant_id: x,
            provider: y(R),
            supported_payment_methods: Me,
            managed_payment_methods: S(Ne)
        }), Z = e => x(e).toUpperCase(), Fe = y(we), Q = f({
            id: x,
            payment_provider: Pe,
            payment_mode: Fe,
            status: y(B),
            currency: Z,
            metadata: _(ke),
            line_items: S(V),
            totals: S(H),
            fulfillment_options: S(U),
            fulfillment_address: b(J),
            fulfillment_option_id: _(x),
            messages: S(K),
            links: S(q)
        }), Ie = f({
            id: x,
            buyer: f({
                email: x,
                phone_number: _(x)
            }),
            status: y(B),
            currency: Z,
            line_items: S(V),
            totals: S(H),
            fulfillment_options: S(U),
            fulfillment_address: b(J),
            fulfillment_option_id: _(x),
            messages: S(K),
            links: S(q),
            order: _(Ae),
            continue_url: _(b(x))
        }), $ = e => {
            let t = Ie(e);
            if (t.status === `completed` && t.order == null) throw Error(`Missing order in complete checkout response for completed status`);
            return t
        }, Le = e => {
            let t = e.response,
                n = v(t);
            return $(n)
        }
    })),
    ze, Be, Ve, He = e((() => {
        D(), I(), Re(), se(), p(), r(), ae(), t(), re(), a(), ue(), ze = d(() => le(() => import(`./6a801ab1-jhglx2arwjh95cq2.js`).then(e => e.EcosystemCheckoutModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]))), Be = class {
            constructor(e) {
                c(this, `conversation`, void 0), c(this, `checkoutPromise$`, s(null)), c(this, `chatSDK$`, s(null)), c(this, `resolvedWidget$`, s(null)), c(this, `isLoadingPayment$`, s(!0)), c(this, `checkoutSession$`, s(null)), c(this, `grandTotal$`, i(() => this.checkoutSession$()?.totals.find(e => e.type === `total`))), c(this, `status$`, s(`idle`)), c(this, `messages$`, s([])), c(this, `errorMessages$`, i(() => this.messages$().filter(e => e.type === `error`))), c(this, `paymentDetails$`, s(null)), c(this, `managedPaymentMethodDetails$`, s([])), c(this, `savedPaymentMethodDetails$`, s([])), c(this, `paymentMethodSelectionScreenConfig$`, s(null)), c(this, `paymentTypes$`, s([])), c(this, `allowedCountries$`, s([])), c(this, `paymentSheetButtonCta$`, s(``)), c(this, `publishableKey$`, s(null)), c(this, `customerId$`, s(null)), c(this, `footerMessage$`, s(null)), c(this, `sellerDetails$`, s(null)), c(this, `orderId$`, s(null)), c(this, `billingAddress$`, s(null)), c(this, `billingAddressComplete$`, i(() => this.billingAddress$() ? !!this.billingAddress$()?.name && !!this.billingAddress$()?.line_one && !!this.billingAddress$()?.city && !!this.billingAddress$()?.state && !!this.billingAddress$()?.country && !!this.billingAddress$()?.postal_code : !1)), c(this, `toPaymentMethodDetails`, e => (e ?? []).map(e => ({
                    paymentMethodId: e.payment_method_id,
                    paymentMethodType: e.payment_method_type,
                    label: e.label,
                    sublabel: e.sublabel,
                    badge: e.badge,
                    billingAddress: e.billing_address,
                    icon: null,
                    iconUrl: e.icon_url,
                    managed_by: e.managed_by,
                    complete: !0
                }))), c(this, `openCheckout`, (e, t, r) => new Promise((i, a) => {
                    n(() => {
                        this.checkoutPromise$.set({
                            resolve: i,
                            reject: a
                        }), this.chatSDK$.set(e), this.resolvedWidget$.set(t), this.checkoutSession$.set(r), this.billingAddress$.set(r.fulfillment_address ?? null), this.paymentDetails$.set(null), g(ze, {
                            conversation: this.conversation
                        })
                    })
                })), c(this, `toCancelledCompleteCheckoutSession`, e => ({
                    id: e.id,
                    buyer: {
                        email: ``
                    },
                    status: `canceled`,
                    currency: e.currency,
                    line_items: e.line_items,
                    order: null,
                    fulfillment_options: e.fulfillment_options,
                    fulfillment_address: e.fulfillment_address ?? null,
                    fulfillment_option_id: e.fulfillment_option_id,
                    messages: e.messages,
                    totals: e.totals,
                    links: e.links,
                    continue_url: null
                })), c(this, `closeCheckout`, () => n(() => {
                    this.messages$.set([]), this.chatSDK$.set(null), this.checkoutSession$.set(null), this.billingAddress$.set(null), this.paymentSheetButtonCta$.set(``), this.checkoutPromise$.set(null), this.status$.set(`idle`), this.paymentDetails$.set(null), this.managedPaymentMethodDetails$.set([]), this.savedPaymentMethodDetails$.set([]), this.paymentMethodSelectionScreenConfig$.set(null), this.billingAddress$.set(null)
                })), c(this, `cancelCheckout$`, () => {
                    let e = this.checkoutPromise$(),
                        t = this.checkoutSession$();
                    e && t ? e.resolve(this.toCancelledCompleteCheckoutSession(t)) : e?.reject(), this.closeCheckout()
                }), c(this, `completeCheckout$`, e => {
                    this.status$.set(`complete`), this.checkoutPromise$()?.resolve?.(e)
                }), c(this, `addErrorMessage$`, e => {
                    this.messages$.set([...this.messages$(), G({
                        code: `invalid`,
                        content: e
                    })])
                }), c(this, `fetchStripeSession$`, async () => {
                    let e = window.location.href,
                        t = e.includes(`/share/`),
                        r = this.conversation.serverId$(),
                        {
                            widgetParent: i,
                            connectorId: a,
                            linkId: o
                        } = h(this.chatSDK$()),
                        {
                            name: s,
                            logoUrl: c
                        } = h(this.resolvedWidget$()),
                        l = h(this.checkoutSession$());
                    try {
                        let {
                            cart: u,
                            customer_id: d,
                            id: f,
                            customer_session_client_secret: p,
                            publishable_key: m,
                            allowed_countries: h,
                            payment_surfaces_and_types: g,
                            managed_payment_method_details: _,
                            saved_payment_method_details: te,
                            payment_method_selection_screen_config: ne,
                            seller_details: v,
                            payment_sheet_button_cta: y
                        } = await ee.safePost(`/shopping/ecosystem/checkout_v2`, {
                            requestBody: {
                                ...l,
                                logo_url: c ?? null,
                                merchant: {
                                    name: s ?? ``
                                },
                                ...r ? {
                                    conversation_id: r
                                } : {},
                                shared_conversation_url: t ? e : null,
                                ecosystem_app_uri: i,
                                connector_id: a,
                                link_id: o
                            }
                        }), b = w(u?.errors);
                        if (b) {
                            let e = b.original_error;
                            return A({
                                conversation: this.conversation,
                                checkoutId: l.id,
                                connectorId: a,
                                messageId: this.chatSDK$()?.toolMessageId ?? null
                            }, `non_displayable_cart_error`, e), this.checkoutPromise$()?.reject(e ?? b), this.closeCheckout(), {
                                error: `Failed to load cart session (ecosystem)`
                            }
                        }
                        return !p || !m ? (A({
                            conversation: this.conversation,
                            checkoutId: l.id,
                            connectorId: a,
                            messageId: this.chatSDK$()?.toolMessageId ?? null
                        }, `error_response_from_endpoint`, `Missing customer_session_client_secret or publishable_key`), {
                            error: `Failed to load cart session (ecosystem)`
                        }) : (n(() => {
                            this.orderId$.set(f), this.footerMessage$.set(u?.footer_level_message ?? null), this.publishableKey$.set(m), this.customerId$.set(d), this.paymentTypes$.set(g?.filter(e => e.surface === `payment_sheet`).flatMap(e => e.types) ?? []), this.allowedCountries$.set(h), this.managedPaymentMethodDetails$.set(this.toPaymentMethodDetails(_)), this.savedPaymentMethodDetails$.set(this.toPaymentMethodDetails(te)), this.paymentMethodSelectionScreenConfig$.set(ne), this.sellerDetails$.set(v), this.paymentSheetButtonCta$.set(y)
                        }), {
                            client_secret: p,
                            publishable_key: m
                        })
                    } catch (e) {
                        throw A({
                            conversation: this.conversation,
                            checkoutId: l.id,
                            connectorId: a,
                            messageId: this.chatSDK$()?.toolMessageId ?? null
                        }, `error_thrown_from_endpoint`, e instanceof Error ? e.message : `Unknown error`), e
                    }
                }), this.conversation = e
            }
        }, Ve = te(e => new Be(e))
    }));
export {
    w as _, Q as a, I as c, P as d, j as f, E as g, he as h, K as i, k as l, F as m, He as n, $ as o, M as p, Re as r, Le as s, Ve as t, N as u, D as v
};
//# sourceMappingURL=824d80d7-prwbzp0uqcoak4m8.js.map