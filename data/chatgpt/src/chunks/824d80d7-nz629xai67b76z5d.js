const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/6a801ab1-j06jbttzhuze56oe.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-bo7e0c29ngt4zgx0.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-ikg0dwuw782klweb.js", "assets/30901919-e8h11sw136qen6v0.js", "assets/c470f5ab-ab47eubabs8jspdc.js", "assets/0e5afe53-esm68l11os61djoy.js", "assets/conversation-small-oilgsqfa.css", "assets/c2675c8c-ejvs9hq3rwjwsbcv.js", "assets/82782bc9-fcii2id0x6lspwtj.js", "assets/8b34dbc2-dtawqv9t1aqckqj4.js", "assets/global-modals-lv5n3ujm.css", "assets/f254c486-n08yd9crbbhzwcww.js", "assets/6fd89734-hczsrr62bupthkyg.js", "assets/3a792387-exk3bl25fdnroj5c.js", "assets/411304d4-ihgd4gpejimna3zh.js", "assets/3e574439-bb1l9ylugse4n76k.js", "assets/25a66342-fyxcour1v5qeyhn6.js", "assets/2ea88c7a-lxyla91xs6iv7odf.js", "assets/25a66342-j7cd8h2bqav7weve.js"]))) => i.map(i => d[i]);
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $0 as t,
    Aat as n,
    B8 as r,
    Cot as i,
    F7 as a,
    G8 as o,
    Hot as s,
    Iat as c,
    J8 as l,
    K8 as u,
    Q8 as d,
    Sot as f,
    U8 as p,
    Uot as m,
    W8 as h,
    X0 as ee,
    X8 as g,
    Y8 as _,
    Z0 as te,
    Z8 as v,
    bnt as y,
    e5 as b,
    fF as ne,
    g5 as x,
    g8 as re,
    n2 as ie,
    oF as ae,
    pF as oe,
    vnt as se,
    w8 as S,
    x8 as C,
    z7 as ce
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    cn as le,
    ln as ue
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    LIn as de,
    RIn as fe
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    n as pe,
    r as me
} from "./f254c486-n08yd9crbbhzwcww.js";

function he(e) {
    if (!(e instanceof n)) return null;
    let t = e.json?.errors ?? e.detail?.errors,
        r = w(t);
    return r ? r.original_error ?? r : null
}
var ge, w, T, E, D = e((() => {
        c(), ge = e => !!e && typeof e == `object` && e.should_display === !1 && `original_error` in e, w = e => Array.isArray(e) ? e.find(ge) ?? null : null, T = e => !!e && typeof e == `object` && e.should_display === !0, E = e => Array.isArray(e) ? e.filter(T).map(e => e.original_error).filter(Boolean) : []
    })),
    O, k, A, j, M, N, P, F, I = e((() => {
        oe(), y(), fe(), O = ({
            conversation: e,
            checkoutId: t,
            connectorId: n,
            messageId: r
        }, i) => {
            se.logEventWithStatsig(`product_checkout`, `product_checkout`, {
                ...de({
                    clientThreadId: ne(e),
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
        r(), pe(), Te(), V = o({
            id: b,
            item: o({
                id: b,
                quantity: g
            }),
            name: b,
            description: b,
            images: p(b),
            base_amount: g,
            discount: g,
            subtotal: g,
            tax: g,
            total: g
        }), H = o({
            type: h(Ce),
            display_text: b,
            amount: g
        }), Ee = o({
            id: b,
            type: () => `shipping`,
            title: b,
            subtitle: b,
            subtotal: g,
            tax: g,
            total: g,
            carrier: b,
            earliest_delivery_time: b,
            latest_delivery_time: b
        }), De = o({
            id: b,
            type: () => `digital`,
            title: b,
            subtitle: b,
            subtotal: g,
            tax: g,
            total: g
        }), U = e => {
            switch (l(d(e)?.type, Se)) {
                case `shipping`:
                    return Ee(e);
                case `digital`:
                    return De(e)
            }
        }, W = h(xe), Oe = o({
            type: () => `info`,
            param: b,
            content_type: W,
            content: b
        }), G = o({
            type: () => `error`,
            code: h(ye),
            param: b,
            content_type: W,
            content: b
        }), ke = e => {
            let t = d(e, {}),
                n = {};
            for (let [e, r] of Object.entries(t)) typeof r == `string` && (n[e] = r);
            return n
        }, K = e => {
            switch (l(d(e)?.type, be)) {
                case `info`:
                    return Oe(e);
                case `error`:
                    return G(e)
            }
        }, q = o({
            type: h(ve),
            url: b
        }), J = o({
            name: b,
            line_one: b,
            line_two: b,
            city: b,
            state: b,
            country: e => me(e) ?? `US`,
            postal_code: b
        }), Ae = o({
            id: b,
            checkout_session_id: b,
            permalink_url: b
        }), Y = e => l(b(e).toLowerCase(), z), X = e => l(b(e).toLowerCase(), _e, `unknown`), je = e => {
            let t = d(e);
            return t ? {
                type: Y(t.type),
                ...t.allowed_card_brands === void 0 ? {} : {
                    allowed_card_brands: u(t.allowed_card_brands, X)
                }
            } : {
                type: Y(e)
            }
        }, Me = e => {
            let t = e;
            if (typeof e == `string`) try {
                t = JSON.parse(e)
            } catch {}
            return p(je)(t)
        }, Ne = o({
            id: b,
            type: Y,
            display_name: b,
            display_last4: b,
            display_brand: X
        }), Pe = o({
            merchant_id: b,
            provider: h(R),
            supported_payment_methods: Me,
            managed_payment_methods: p(Ne)
        }), Z = e => b(e).toUpperCase(), Fe = h(we), Q = o({
            id: b,
            payment_provider: Pe,
            payment_mode: Fe,
            status: h(B),
            currency: Z,
            metadata: v(ke),
            line_items: p(V),
            totals: p(H),
            fulfillment_options: p(U),
            fulfillment_address: _(J),
            fulfillment_option_id: v(b),
            messages: p(K),
            links: p(q)
        }), Ie = o({
            id: b,
            buyer: o({
                email: b,
                phone_number: v(b)
            }),
            status: h(B),
            currency: Z,
            line_items: p(V),
            totals: p(H),
            fulfillment_options: p(U),
            fulfillment_address: _(J),
            fulfillment_option_id: v(b),
            messages: p(K),
            links: p(q),
            order: v(Ae),
            continue_url: v(_(b))
        }), $ = e => {
            let t = Ie(e);
            if (t.status === `completed` && t.order == null) throw Error(`Missing order in complete checkout response for completed status`);
            return t
        }, Le = e => {
            let t = e.response,
                n = d(t);
            return $(n)
        }
    })),
    ze, Be, Ve, He = e((() => {
        D(), I(), Re(), oe(), t(), re(), s(), ce(), te(), i(), ue(), ze = ee(() => le(() => import(`./6a801ab1-j06jbttzhuze56oe.js`).then(e => e.EcosystemCheckoutModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]))), Be = class {
            constructor(e) {
                f(this, `conversation`, void 0), f(this, `checkoutPromise$`, S(null)), f(this, `chatSDK$`, S(null)), f(this, `resolvedWidget$`, S(null)), f(this, `isLoadingPayment$`, S(!0)), f(this, `checkoutSession$`, S(null)), f(this, `grandTotal$`, C(() => this.checkoutSession$()?.totals.find(e => e.type === `total`))), f(this, `status$`, S(`idle`)), f(this, `messages$`, S([])), f(this, `errorMessages$`, C(() => this.messages$().filter(e => e.type === `error`))), f(this, `paymentDetails$`, S(null)), f(this, `managedPaymentMethodDetails$`, S([])), f(this, `savedPaymentMethodDetails$`, S([])), f(this, `paymentMethodSelectionScreenConfig$`, S(null)), f(this, `paymentTypes$`, S([])), f(this, `allowedCountries$`, S([])), f(this, `paymentSheetButtonCta$`, S(``)), f(this, `publishableKey$`, S(null)), f(this, `customerId$`, S(null)), f(this, `footerMessage$`, S(null)), f(this, `sellerDetails$`, S(null)), f(this, `orderId$`, S(null)), f(this, `billingAddress$`, S(null)), f(this, `billingAddressComplete$`, C(() => this.billingAddress$() ? !!this.billingAddress$()?.name && !!this.billingAddress$()?.line_one && !!this.billingAddress$()?.city && !!this.billingAddress$()?.state && !!this.billingAddress$()?.country && !!this.billingAddress$()?.postal_code : !1)), f(this, `toPaymentMethodDetails`, e => (e ?? []).map(e => ({
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
                }))), f(this, `openCheckout`, (e, t, n) => new Promise((r, i) => {
                    x(() => {
                        this.checkoutPromise$.set({
                            resolve: r,
                            reject: i
                        }), this.chatSDK$.set(e), this.resolvedWidget$.set(t), this.checkoutSession$.set(n), this.billingAddress$.set(n.fulfillment_address ?? null), this.paymentDetails$.set(null), ie(ze, {
                            conversation: this.conversation
                        })
                    })
                })), f(this, `toCancelledCompleteCheckoutSession`, e => ({
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
                })), f(this, `closeCheckout`, () => x(() => {
                    this.messages$.set([]), this.chatSDK$.set(null), this.checkoutSession$.set(null), this.billingAddress$.set(null), this.paymentSheetButtonCta$.set(``), this.checkoutPromise$.set(null), this.status$.set(`idle`), this.paymentDetails$.set(null), this.managedPaymentMethodDetails$.set([]), this.savedPaymentMethodDetails$.set([]), this.paymentMethodSelectionScreenConfig$.set(null), this.billingAddress$.set(null)
                })), f(this, `cancelCheckout$`, () => {
                    let e = this.checkoutPromise$(),
                        t = this.checkoutSession$();
                    e && t ? e.resolve(this.toCancelledCompleteCheckoutSession(t)) : e?.reject(), this.closeCheckout()
                }), f(this, `completeCheckout$`, e => {
                    this.status$.set(`complete`), this.checkoutPromise$()?.resolve?.(e)
                }), f(this, `addErrorMessage$`, e => {
                    this.messages$.set([...this.messages$(), G({
                        code: `invalid`,
                        content: e
                    })])
                }), f(this, `fetchStripeSession$`, async () => {
                    let e = window.location.href,
                        t = e.includes(`/share/`),
                        n = this.conversation.serverId$(),
                        {
                            widgetParent: r,
                            connectorId: i,
                            linkId: o
                        } = m(this.chatSDK$()),
                        {
                            name: s,
                            logoUrl: c
                        } = m(this.resolvedWidget$()),
                        l = m(this.checkoutSession$());
                    try {
                        let {
                            cart: u,
                            customer_id: d,
                            id: f,
                            customer_session_client_secret: p,
                            publishable_key: m,
                            allowed_countries: h,
                            payment_surfaces_and_types: ee,
                            managed_payment_method_details: g,
                            saved_payment_method_details: _,
                            payment_method_selection_screen_config: te,
                            seller_details: v,
                            payment_sheet_button_cta: y
                        } = await a.safePost(`/shopping/ecosystem/checkout_v2`, {
                            requestBody: {
                                ...l,
                                logo_url: c ?? null,
                                merchant: {
                                    name: s ?? ``
                                },
                                ...n ? {
                                    conversation_id: n
                                } : {},
                                shared_conversation_url: t ? e : null,
                                ecosystem_app_uri: r,
                                connector_id: i,
                                link_id: o
                            }
                        }), b = w(u?.errors);
                        if (b) {
                            let e = b.original_error;
                            return A({
                                conversation: this.conversation,
                                checkoutId: l.id,
                                connectorId: i,
                                messageId: this.chatSDK$()?.toolMessageId ?? null
                            }, `non_displayable_cart_error`, e), this.checkoutPromise$()?.reject(e ?? b), this.closeCheckout(), {
                                error: `Failed to load cart session (ecosystem)`
                            }
                        }
                        return !p || !m ? (A({
                            conversation: this.conversation,
                            checkoutId: l.id,
                            connectorId: i,
                            messageId: this.chatSDK$()?.toolMessageId ?? null
                        }, `error_response_from_endpoint`, `Missing customer_session_client_secret or publishable_key`), {
                            error: `Failed to load cart session (ecosystem)`
                        }) : (x(() => {
                            this.orderId$.set(f), this.footerMessage$.set(u?.footer_level_message ?? null), this.publishableKey$.set(m), this.customerId$.set(d), this.paymentTypes$.set(ee?.filter(e => e.surface === `payment_sheet`).flatMap(e => e.types) ?? []), this.allowedCountries$.set(h), this.managedPaymentMethodDetails$.set(this.toPaymentMethodDetails(g)), this.savedPaymentMethodDetails$.set(this.toPaymentMethodDetails(_)), this.paymentMethodSelectionScreenConfig$.set(te), this.sellerDetails$.set(v), this.paymentSheetButtonCta$.set(y)
                        }), {
                            client_secret: p,
                            publishable_key: m
                        })
                    } catch (e) {
                        throw A({
                            conversation: this.conversation,
                            checkoutId: l.id,
                            connectorId: i,
                            messageId: this.chatSDK$()?.toolMessageId ?? null
                        }, `error_thrown_from_endpoint`, e instanceof Error ? e.message : `Unknown error`), e
                    }
                }), this.conversation = e
            }
        }, Ve = ae(e => new Be(e))
    }));
export {
    w as _, Q as a, I as c, P as d, j as f, E as g, he as h, K as i, k as l, F as m, He as n, $ as o, M as p, Re as r, Le as s, Ve as t, N as u, D as v
};
//# sourceMappingURL=824d80d7-nz629xai67b76z5d.js.map