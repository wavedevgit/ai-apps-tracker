const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/6a801ab1-kg976z8ife6dkxem.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-dfpv67hlp00pbohr.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-cy5f8pl0g26s86so.js", "assets/30901919-7dzdc1ou0jtwkwpt.js", "assets/c470f5ab-d4g7lc53n1e1ao7o.js", "assets/0e5afe53-o2mcfq1ky1uaktz5.js", "assets/conversation-small-j5v9ogf2.css", "assets/c2675c8c-9bs3zsr3vq259es7.js", "assets/82782bc9-mb60yg1xlggwvqri.js", "assets/8b34dbc2-k1zgxrtsww83602u.js", "assets/global-modals-lv5n3ujm.css", "assets/f254c486-gt8xqag2dm096578.js", "assets/6fd89734-brd4j82z73mzve1c.js", "assets/3a792387-exr5gujokko8346h.js", "assets/411304d4-h60hu8tnw5anxgr0.js", "assets/3e574439-njaurgx9tjwgt3tm.js", "assets/25a66342-m7l5n4a5w24tz8pa.js", "assets/2ea88c7a-lxyla91xs6iv7odf.js", "assets/25a66342-j7cd8h2bqav7weve.js"]))) => i.map(i => d[i]);
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $8 as t,
    C8 as n,
    Fat as r,
    G8 as i,
    H8 as a,
    Hot as o,
    J8 as s,
    P7 as ee,
    Q0 as te,
    R7 as c,
    Sot as l,
    U8 as u,
    Vot as d,
    W8 as f,
    X0 as p,
    X8 as m,
    Y0 as ne,
    Y8 as h,
    Z8 as g,
    _nt as _,
    aF as v,
    b8 as y,
    dF as re,
    fF as ie,
    h5 as b,
    h8 as ae,
    kat as oe,
    q8 as x,
    t2 as se,
    xot as S,
    ynt as ce,
    z8 as le
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    cn as ue,
    ln as de
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    FIn as fe,
    PIn as pe
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    n as me,
    r as he
} from "./f254c486-gt8xqag2dm096578.js";

function ge(e) {
    if (!(e instanceof oe)) return null;
    let t = e.json?.errors ?? e.detail?.errors,
        n = w(t);
    return n ? n.original_error ?? n : null
}
var C, w, T, E, D = e((() => {
        r(), C = e => !!e && typeof e == `object` && e.should_display === !1 && `original_error` in e, w = e => Array.isArray(e) ? e.find(C) ?? null : null, T = e => !!e && typeof e == `object` && e.should_display === !0, E = e => Array.isArray(e) ? e.filter(T).map(e => e.original_error).filter(Boolean) : []
    })),
    O, k, A, j, M, N, P, F, I = e((() => {
        ie(), ce(), fe(), O = ({
            conversation: e,
            checkoutId: t,
            connectorId: n,
            messageId: r
        }, i) => {
            _.logEventWithStatsig(`product_checkout`, `product_checkout`, {
                ...pe({
                    clientThreadId: re(e),
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
        le(), me(), Te(), V = f({
            id: t,
            item: f({
                id: t,
                quantity: h
            }),
            name: t,
            description: t,
            images: a(t),
            base_amount: h,
            discount: h,
            subtotal: h,
            tax: h,
            total: h
        }), H = f({
            type: u(Ce),
            display_text: t,
            amount: h
        }), Ee = f({
            id: t,
            type: () => `shipping`,
            title: t,
            subtitle: t,
            subtotal: h,
            tax: h,
            total: h,
            carrier: t,
            earliest_delivery_time: t,
            latest_delivery_time: t
        }), De = f({
            id: t,
            type: () => `digital`,
            title: t,
            subtitle: t,
            subtotal: h,
            tax: h,
            total: h
        }), U = e => {
            switch (x(g(e)?.type, Se)) {
                case `shipping`:
                    return Ee(e);
                case `digital`:
                    return De(e)
            }
        }, W = u(xe), Oe = f({
            type: () => `info`,
            param: t,
            content_type: W,
            content: t
        }), G = f({
            type: () => `error`,
            code: u(ye),
            param: t,
            content_type: W,
            content: t
        }), ke = e => {
            let t = g(e, {}),
                n = {};
            for (let [e, r] of Object.entries(t)) typeof r == `string` && (n[e] = r);
            return n
        }, K = e => {
            switch (x(g(e)?.type, be)) {
                case `info`:
                    return Oe(e);
                case `error`:
                    return G(e)
            }
        }, q = f({
            type: u(ve),
            url: t
        }), J = f({
            name: t,
            line_one: t,
            line_two: t,
            city: t,
            state: t,
            country: e => he(e) ?? `US`,
            postal_code: t
        }), Ae = f({
            id: t,
            checkout_session_id: t,
            permalink_url: t
        }), Y = e => x(t(e).toLowerCase(), z), X = e => x(t(e).toLowerCase(), _e, `unknown`), je = e => {
            let t = g(e);
            return t ? {
                type: Y(t.type),
                ...t.allowed_card_brands === void 0 ? {} : {
                    allowed_card_brands: i(t.allowed_card_brands, X)
                }
            } : {
                type: Y(e)
            }
        }, Me = e => {
            let t = e;
            if (typeof e == `string`) try {
                t = JSON.parse(e)
            } catch {}
            return a(je)(t)
        }, Ne = f({
            id: t,
            type: Y,
            display_name: t,
            display_last4: t,
            display_brand: X
        }), Pe = f({
            merchant_id: t,
            provider: u(R),
            supported_payment_methods: Me,
            managed_payment_methods: a(Ne)
        }), Z = e => t(e).toUpperCase(), Fe = u(we), Q = f({
            id: t,
            payment_provider: Pe,
            payment_mode: Fe,
            status: u(B),
            currency: Z,
            metadata: m(ke),
            line_items: a(V),
            totals: a(H),
            fulfillment_options: a(U),
            fulfillment_address: s(J),
            fulfillment_option_id: m(t),
            messages: a(K),
            links: a(q)
        }), Ie = f({
            id: t,
            buyer: f({
                email: t,
                phone_number: m(t)
            }),
            status: u(B),
            currency: Z,
            line_items: a(V),
            totals: a(H),
            fulfillment_options: a(U),
            fulfillment_address: s(J),
            fulfillment_option_id: m(t),
            messages: a(K),
            links: a(q),
            order: m(Ae),
            continue_url: m(s(t))
        }), $ = e => {
            let t = Ie(e);
            if (t.status === `completed` && t.order == null) throw Error(`Missing order in complete checkout response for completed status`);
            return t
        }, Le = e => {
            let t = e.response,
                n = g(t);
            return $(n)
        }
    })),
    ze, Be, Ve, He = e((() => {
        D(), I(), Re(), ie(), te(), ae(), d(), c(), p(), l(), de(), ze = ne(() => ue(() => import(`./6a801ab1-kg976z8ife6dkxem.js`).then(e => e.EcosystemCheckoutModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]))), Be = class {
            constructor(e) {
                S(this, `conversation`, void 0), S(this, `checkoutPromise$`, n(null)), S(this, `chatSDK$`, n(null)), S(this, `resolvedWidget$`, n(null)), S(this, `isLoadingPayment$`, n(!0)), S(this, `checkoutSession$`, n(null)), S(this, `grandTotal$`, y(() => this.checkoutSession$()?.totals.find(e => e.type === `total`))), S(this, `status$`, n(`idle`)), S(this, `messages$`, n([])), S(this, `errorMessages$`, y(() => this.messages$().filter(e => e.type === `error`))), S(this, `paymentDetails$`, n(null)), S(this, `managedPaymentMethodDetails$`, n([])), S(this, `savedPaymentMethodDetails$`, n([])), S(this, `paymentMethodSelectionScreenConfig$`, n(null)), S(this, `paymentTypes$`, n([])), S(this, `allowedCountries$`, n([])), S(this, `paymentSheetButtonCta$`, n(``)), S(this, `publishableKey$`, n(null)), S(this, `customerId$`, n(null)), S(this, `footerMessage$`, n(null)), S(this, `sellerDetails$`, n(null)), S(this, `orderId$`, n(null)), S(this, `billingAddress$`, n(null)), S(this, `billingAddressComplete$`, y(() => this.billingAddress$() ? !!this.billingAddress$()?.name && !!this.billingAddress$()?.line_one && !!this.billingAddress$()?.city && !!this.billingAddress$()?.state && !!this.billingAddress$()?.country && !!this.billingAddress$()?.postal_code : !1)), S(this, `toPaymentMethodDetails`, e => (e ?? []).map(e => ({
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
                }))), S(this, `openCheckout`, (e, t, n) => new Promise((r, i) => {
                    b(() => {
                        this.checkoutPromise$.set({
                            resolve: r,
                            reject: i
                        }), this.chatSDK$.set(e), this.resolvedWidget$.set(t), this.checkoutSession$.set(n), this.billingAddress$.set(n.fulfillment_address ?? null), this.paymentDetails$.set(null), se(ze, {
                            conversation: this.conversation
                        })
                    })
                })), S(this, `toCancelledCompleteCheckoutSession`, e => ({
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
                })), S(this, `closeCheckout`, () => b(() => {
                    this.messages$.set([]), this.chatSDK$.set(null), this.checkoutSession$.set(null), this.billingAddress$.set(null), this.paymentSheetButtonCta$.set(``), this.checkoutPromise$.set(null), this.status$.set(`idle`), this.paymentDetails$.set(null), this.managedPaymentMethodDetails$.set([]), this.savedPaymentMethodDetails$.set([]), this.paymentMethodSelectionScreenConfig$.set(null), this.billingAddress$.set(null)
                })), S(this, `cancelCheckout$`, () => {
                    let e = this.checkoutPromise$(),
                        t = this.checkoutSession$();
                    e && t ? e.resolve(this.toCancelledCompleteCheckoutSession(t)) : e?.reject(), this.closeCheckout()
                }), S(this, `completeCheckout$`, e => {
                    this.status$.set(`complete`), this.checkoutPromise$()?.resolve?.(e)
                }), S(this, `addErrorMessage$`, e => {
                    this.messages$.set([...this.messages$(), G({
                        code: `invalid`,
                        content: e
                    })])
                }), S(this, `fetchStripeSession$`, async () => {
                    let e = window.location.href,
                        t = e.includes(`/share/`),
                        n = this.conversation.serverId$(),
                        {
                            widgetParent: r,
                            connectorId: i,
                            linkId: a
                        } = o(this.chatSDK$()),
                        {
                            name: s,
                            logoUrl: te
                        } = o(this.resolvedWidget$()),
                        c = o(this.checkoutSession$());
                    try {
                        let {
                            cart: o,
                            customer_id: l,
                            id: u,
                            customer_session_client_secret: d,
                            publishable_key: f,
                            allowed_countries: p,
                            payment_surfaces_and_types: m,
                            managed_payment_method_details: ne,
                            saved_payment_method_details: h,
                            payment_method_selection_screen_config: g,
                            seller_details: _,
                            payment_sheet_button_cta: v
                        } = await ee.safePost(`/shopping/ecosystem/checkout_v2`, {
                            requestBody: {
                                ...c,
                                logo_url: te ?? null,
                                merchant: {
                                    name: s ?? ``
                                },
                                ...n ? {
                                    conversation_id: n
                                } : {},
                                shared_conversation_url: t ? e : null,
                                ecosystem_app_uri: r,
                                connector_id: i,
                                link_id: a
                            }
                        }), y = w(o?.errors);
                        if (y) {
                            let e = y.original_error;
                            return A({
                                conversation: this.conversation,
                                checkoutId: c.id,
                                connectorId: i,
                                messageId: this.chatSDK$()?.toolMessageId ?? null
                            }, `non_displayable_cart_error`, e), this.checkoutPromise$()?.reject(e ?? y), this.closeCheckout(), {
                                error: `Failed to load cart session (ecosystem)`
                            }
                        }
                        return !d || !f ? (A({
                            conversation: this.conversation,
                            checkoutId: c.id,
                            connectorId: i,
                            messageId: this.chatSDK$()?.toolMessageId ?? null
                        }, `error_response_from_endpoint`, `Missing customer_session_client_secret or publishable_key`), {
                            error: `Failed to load cart session (ecosystem)`
                        }) : (b(() => {
                            this.orderId$.set(u), this.footerMessage$.set(o?.footer_level_message ?? null), this.publishableKey$.set(f), this.customerId$.set(l), this.paymentTypes$.set(m?.filter(e => e.surface === `payment_sheet`).flatMap(e => e.types) ?? []), this.allowedCountries$.set(p), this.managedPaymentMethodDetails$.set(this.toPaymentMethodDetails(ne)), this.savedPaymentMethodDetails$.set(this.toPaymentMethodDetails(h)), this.paymentMethodSelectionScreenConfig$.set(g), this.sellerDetails$.set(_), this.paymentSheetButtonCta$.set(v)
                        }), {
                            client_secret: d,
                            publishable_key: f
                        })
                    } catch (e) {
                        throw A({
                            conversation: this.conversation,
                            checkoutId: c.id,
                            connectorId: i,
                            messageId: this.chatSDK$()?.toolMessageId ?? null
                        }, `error_thrown_from_endpoint`, e instanceof Error ? e.message : `Unknown error`), e
                    }
                }), this.conversation = e
            }
        }, Ve = v(e => new Be(e))
    }));
export {
    w as _, Q as a, I as c, P as d, j as f, E as g, ge as h, K as i, k as l, F as m, He as n, $ as o, M as p, Re as r, Le as s, Ve as t, N as u, D as v
};
//# sourceMappingURL=824d80d7-cc17dyqqkzo8bmaz.js.map