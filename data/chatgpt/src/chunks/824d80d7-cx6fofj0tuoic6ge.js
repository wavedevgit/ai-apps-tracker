const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/6a801ab1-mruvqryxio66pvww.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-qsuygr73qjc6rh65.js", "assets/2340486e-komxp8tzs51ny4jj.js", "assets/root-lelxp0l2.css", "assets/conversation-small-cawdu7il3ha6y70c.js", "assets/30901919-jory365vq6ym5crx.js", "assets/c470f5ab-in0lllrdrzeo67gs.js", "assets/0e5afe53-f9gmgfmgrr83ziw3.js", "assets/conversation-small-czggvj2v.css", "assets/c2675c8c-nxl2ic2ofk2vw70s.js", "assets/82782bc9-jj605vonxg0iyc7p.js", "assets/8b34dbc2-d4icgkio4i3wfm6q.js", "assets/global-modals-lv5n3ujm.css", "assets/f254c486-gouw7jk2cvt4b5hp.js", "assets/6fd89734-n8h3nmvcynx9bon3.js", "assets/3a792387-fsbob474c7c6mwo4.js", "assets/411304d4-sygo5ixhxgtoaway.js", "assets/3e574439-jn02o5jsc1bd5pl6.js", "assets/25a66342-cnfcsfdh2ydiex1n.js", "assets/2ea88c7a-lxyla91xs6iv7odf.js", "assets/25a66342-j7cd8h2bqav7weve.js"]))) => i.map(i => d[i]);
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bot as t,
    Dat as n,
    H8 as r,
    J0 as i,
    J8 as a,
    K8 as o,
    L7 as ee,
    N7 as te,
    Nat as s,
    Q8 as c,
    R8 as l,
    S8 as u,
    U8 as d,
    V8 as f,
    W8 as ne,
    X8 as p,
    Y0 as re,
    Y8 as m,
    Z0 as h,
    _nt as g,
    aF as _,
    bot as ie,
    dF as ae,
    e2 as oe,
    fF as se,
    hnt as ce,
    m5 as v,
    m8 as le,
    q8 as y,
    y8 as b,
    yot as x,
    zot as ue
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    ln as de,
    un as fe
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    BIn as pe,
    zIn as me
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    n as he,
    r as ge
} from "./f254c486-gouw7jk2cvt4b5hp.js";

function _e(e) {
    if (!(e instanceof n)) return null;
    let t = e.json?.errors ?? e.detail?.errors,
        r = C(t);
    return r ? r.original_error ?? r : null
}
var S, C, w, T, E = e((() => {
        s(), S = e => !!e && typeof e == `object` && e.should_display === !1 && `original_error` in e, C = e => Array.isArray(e) ? e.find(S) ?? null : null, w = e => !!e && typeof e == `object` && e.should_display === !0, T = e => Array.isArray(e) ? e.filter(w).map(e => e.original_error).filter(Boolean) : []
    })),
    D, O, k, A, j, M, N, P, F = e((() => {
        se(), g(), pe(), D = ({
            conversation: e,
            checkoutId: t,
            connectorId: n,
            messageId: r
        }, i) => {
            ce.logEventWithStatsig(`product_checkout`, `product_checkout`, {
                ...me({
                    clientThreadId: ae(e),
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
        }, O = (e, t) => D(e, {
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
        }), k = (e, t, n) => D(e, {
            action: `cart_load_failed`,
            reason: t,
            ...n ? {
                error_message: n
            } : {}
        }), A = (e, {
            label: t,
            source: n,
            hasExistingPaymentMethod: r
        }) => D(e, {
            credit_card_type: t ?? void 0,
            prefill: n === `prefill`,
            action: r ? `payment_method_updated` : `payment_method_added`
        }), j = (e, t) => D(e, {
            credit_card_type: t ?? void 0,
            action: `payment_method_removed`
        }), M = (e, {
            paymentMethod: t,
            attemptId: n
        }) => D(e, {
            payment_method: t ?? void 0,
            action: `express_checkout_button_clicked`,
            ...n ? {
                attempt_id: n
            } : {}
        }), N = (e, {
            paymentMethod: t,
            attemptId: n,
            isExpressCheckout: r,
            merchantName: i,
            merchantUrl: a
        }) => D(e, {
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
        }), P = (e, {
            attemptId: t,
            reason: n,
            errorMessage: r,
            succeeded: i
        }) => D(e, {
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
    I, L, R, z, ve, ye, be, xe, Se, Ce, B, we, Te = e((() => {
        I = () => e => e, L = I()([`stripe`, `paypal`, `adyen`, `braintree`, `fiserv`, `worldpay`, `jpmorgan`, `checkout`, `merchant`]), R = I()([`card`, `link`, `apple_pay`, `google_pay`]), z = I()([`amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `jcb`, `link`, `mastercard`, `unionpay`, `visa`, `unknown`]), ve = I()([`terms_of_use`, `privacy_policy`, `seller_shop_policies`, `product_link`, `support_url`, `return_policy`, `collection_notice`]), ye = I()([`missing`, `invalid`, `out_of_stock`, `payment_declined`, `requires_sign_in`, `requires_3ds`, `price_change`]), be = I()([`info`, `error`]), xe = I()([`plain`, `markdown`]), Se = I()([`shipping`, `digital`]), Ce = I()([`items_base_amount`, `items_discount`, `subtotal`, `discount`, `fulfillment`, `tax`, `fee`, `tip`, `total`]), B = I()([`not_ready_for_payment`, `ready_for_payment`, `completed`, `canceled`, `requires_escalation`]), we = I()([`live`, `test`])
    })),
    V, H, Ee, De, U, W, Oe, G, ke, K, q, J, Ae, Y, X, je, Me, Ne, Pe, Z, Fe, Q, Ie, $, Le, Re = e((() => {
        l(), he(), Te(), V = d({
            id: c,
            item: d({
                id: c,
                quantity: a
            }),
            name: c,
            description: c,
            images: f(c),
            base_amount: a,
            discount: a,
            subtotal: a,
            tax: a,
            total: a
        }), H = d({
            type: r(Ce),
            display_text: c,
            amount: a
        }), Ee = d({
            id: c,
            type: () => `shipping`,
            title: c,
            subtitle: c,
            subtotal: a,
            tax: a,
            total: a,
            carrier: c,
            earliest_delivery_time: c,
            latest_delivery_time: c
        }), De = d({
            id: c,
            type: () => `digital`,
            title: c,
            subtitle: c,
            subtotal: a,
            tax: a,
            total: a
        }), U = e => {
            switch (o(p(e)?.type, Se)) {
                case `shipping`:
                    return Ee(e);
                case `digital`:
                    return De(e)
            }
        }, W = r(xe), Oe = d({
            type: () => `info`,
            param: c,
            content_type: W,
            content: c
        }), G = d({
            type: () => `error`,
            code: r(ye),
            param: c,
            content_type: W,
            content: c
        }), ke = e => {
            let t = p(e, {}),
                n = {};
            for (let [e, r] of Object.entries(t)) typeof r == `string` && (n[e] = r);
            return n
        }, K = e => {
            switch (o(p(e)?.type, be)) {
                case `info`:
                    return Oe(e);
                case `error`:
                    return G(e)
            }
        }, q = d({
            type: r(ve),
            url: c
        }), J = d({
            name: c,
            line_one: c,
            line_two: c,
            city: c,
            state: c,
            country: e => ge(e) ?? `US`,
            postal_code: c
        }), Ae = d({
            id: c,
            checkout_session_id: c,
            permalink_url: c
        }), Y = e => o(c(e).toLowerCase(), R), X = e => o(c(e).toLowerCase(), z, `unknown`), je = e => {
            let t = p(e);
            return t ? {
                type: Y(t.type),
                ...t.allowed_card_brands === void 0 ? {} : {
                    allowed_card_brands: ne(t.allowed_card_brands, X)
                }
            } : {
                type: Y(e)
            }
        }, Me = e => {
            let t = e;
            if (typeof e == `string`) try {
                t = JSON.parse(e)
            } catch {}
            return f(je)(t)
        }, Ne = d({
            id: c,
            type: Y,
            display_name: c,
            display_last4: c,
            display_brand: X
        }), Pe = d({
            merchant_id: c,
            provider: r(L),
            supported_payment_methods: Me,
            managed_payment_methods: f(Ne)
        }), Z = e => c(e).toUpperCase(), Fe = r(we), Q = d({
            id: c,
            payment_provider: Pe,
            payment_mode: Fe,
            status: r(B),
            currency: Z,
            metadata: m(ke),
            line_items: f(V),
            totals: f(H),
            fulfillment_options: f(U),
            fulfillment_address: y(J),
            fulfillment_option_id: m(c),
            messages: f(K),
            links: f(q)
        }), Ie = d({
            id: c,
            buyer: d({
                email: c,
                phone_number: m(c)
            }),
            status: r(B),
            currency: Z,
            line_items: f(V),
            totals: f(H),
            fulfillment_options: f(U),
            fulfillment_address: y(J),
            fulfillment_option_id: m(c),
            messages: f(K),
            links: f(q),
            order: m(Ae),
            continue_url: m(y(c))
        }), $ = e => {
            let t = Ie(e);
            if (t.status === `completed` && t.order == null) throw Error(`Missing order in complete checkout response for completed status`);
            return t
        }, Le = e => {
            let t = e.response,
                n = p(t);
            return $(n)
        }
    })),
    ze, Be, Ve, He = e((() => {
        E(), F(), Re(), se(), h(), le(), ue(), ee(), re(), ie(), fe(), ze = i(() => de(() => import(`./6a801ab1-mruvqryxio66pvww.js`).then(e => e.EcosystemCheckoutModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]))), Be = class {
            constructor(e) {
                x(this, `conversation`, void 0), x(this, `checkoutPromise$`, u(null)), x(this, `chatSDK$`, u(null)), x(this, `resolvedWidget$`, u(null)), x(this, `isLoadingPayment$`, u(!0)), x(this, `checkoutSession$`, u(null)), x(this, `grandTotal$`, b(() => this.checkoutSession$()?.totals.find(e => e.type === `total`))), x(this, `status$`, u(`idle`)), x(this, `messages$`, u([])), x(this, `errorMessages$`, b(() => this.messages$().filter(e => e.type === `error`))), x(this, `paymentDetails$`, u(null)), x(this, `managedPaymentMethodDetails$`, u([])), x(this, `savedPaymentMethodDetails$`, u([])), x(this, `paymentMethodSelectionScreenConfig$`, u(null)), x(this, `paymentTypes$`, u([])), x(this, `allowedCountries$`, u([])), x(this, `paymentSheetButtonCta$`, u(``)), x(this, `publishableKey$`, u(null)), x(this, `customerId$`, u(null)), x(this, `footerMessage$`, u(null)), x(this, `sellerDetails$`, u(null)), x(this, `orderId$`, u(null)), x(this, `billingAddress$`, u(null)), x(this, `billingAddressComplete$`, b(() => this.billingAddress$() ? !!this.billingAddress$()?.name && !!this.billingAddress$()?.line_one && !!this.billingAddress$()?.city && !!this.billingAddress$()?.state && !!this.billingAddress$()?.country && !!this.billingAddress$()?.postal_code : !1)), x(this, `toPaymentMethodDetails`, e => (e ?? []).map(e => ({
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
                }))), x(this, `openCheckout`, (e, t, n) => new Promise((r, i) => {
                    v(() => {
                        this.checkoutPromise$.set({
                            resolve: r,
                            reject: i
                        }), this.chatSDK$.set(e), this.resolvedWidget$.set(t), this.checkoutSession$.set(n), this.billingAddress$.set(n.fulfillment_address ?? null), this.paymentDetails$.set(null), oe(ze, {
                            conversation: this.conversation
                        })
                    })
                })), x(this, `toCancelledCompleteCheckoutSession`, e => ({
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
                })), x(this, `closeCheckout`, () => v(() => {
                    this.messages$.set([]), this.chatSDK$.set(null), this.checkoutSession$.set(null), this.billingAddress$.set(null), this.paymentSheetButtonCta$.set(``), this.checkoutPromise$.set(null), this.status$.set(`idle`), this.paymentDetails$.set(null), this.managedPaymentMethodDetails$.set([]), this.savedPaymentMethodDetails$.set([]), this.paymentMethodSelectionScreenConfig$.set(null), this.billingAddress$.set(null)
                })), x(this, `cancelCheckout$`, () => {
                    let e = this.checkoutPromise$(),
                        t = this.checkoutSession$();
                    e && t ? e.resolve(this.toCancelledCompleteCheckoutSession(t)) : e?.reject(), this.closeCheckout()
                }), x(this, `completeCheckout$`, e => {
                    this.status$.set(`complete`), this.checkoutPromise$()?.resolve?.(e)
                }), x(this, `addErrorMessage$`, e => {
                    this.messages$.set([...this.messages$(), G({
                        code: `invalid`,
                        content: e
                    })])
                }), x(this, `fetchStripeSession$`, async () => {
                    let e = window.location.href,
                        n = e.includes(`/share/`),
                        r = this.conversation.serverId$(),
                        {
                            widgetParent: i,
                            connectorId: a
                        } = t(this.chatSDK$()),
                        {
                            name: o,
                            logoUrl: ee
                        } = t(this.resolvedWidget$()),
                        s = t(this.checkoutSession$());
                    try {
                        let {
                            cart: t,
                            customer_id: c,
                            id: l,
                            customer_session_client_secret: u,
                            publishable_key: d,
                            allowed_countries: f,
                            payment_surfaces_and_types: ne,
                            managed_payment_method_details: p,
                            saved_payment_method_details: re,
                            payment_method_selection_screen_config: m,
                            seller_details: h,
                            payment_sheet_button_cta: g
                        } = await te.safePost(`/shopping/ecosystem/checkout_v2`, {
                            requestBody: {
                                ...s,
                                logo_url: ee ?? null,
                                merchant: {
                                    name: o ?? ``
                                },
                                ...r ? {
                                    conversation_id: r
                                } : {},
                                shared_conversation_url: n ? e : null,
                                ecosystem_app_uri: i,
                                connector_id: a
                            }
                        }), _ = C(t?.errors);
                        if (_) {
                            let e = _.original_error;
                            return k({
                                conversation: this.conversation,
                                checkoutId: s.id,
                                connectorId: a,
                                messageId: this.chatSDK$()?.toolMessageId ?? null
                            }, `non_displayable_cart_error`, e), this.checkoutPromise$()?.reject(e ?? _), this.closeCheckout(), {
                                error: `Failed to load cart session (ecosystem)`
                            }
                        }
                        return !u || !d ? (k({
                            conversation: this.conversation,
                            checkoutId: s.id,
                            connectorId: a,
                            messageId: this.chatSDK$()?.toolMessageId ?? null
                        }, `error_response_from_endpoint`, `Missing customer_session_client_secret or publishable_key`), {
                            error: `Failed to load cart session (ecosystem)`
                        }) : (v(() => {
                            this.orderId$.set(l), this.footerMessage$.set(t?.footer_level_message ?? null), this.publishableKey$.set(d), this.customerId$.set(c), this.paymentTypes$.set(ne?.filter(e => e.surface === `payment_sheet`).flatMap(e => e.types) ?? []), this.allowedCountries$.set(f), this.managedPaymentMethodDetails$.set(this.toPaymentMethodDetails(p)), this.savedPaymentMethodDetails$.set(this.toPaymentMethodDetails(re)), this.paymentMethodSelectionScreenConfig$.set(m), this.sellerDetails$.set(h), this.paymentSheetButtonCta$.set(g)
                        }), {
                            client_secret: u,
                            publishable_key: d
                        })
                    } catch (e) {
                        throw k({
                            conversation: this.conversation,
                            checkoutId: s.id,
                            connectorId: a,
                            messageId: this.chatSDK$()?.toolMessageId ?? null
                        }, `error_thrown_from_endpoint`, e instanceof Error ? e.message : `Unknown error`), e
                    }
                }), this.conversation = e
            }
        }, Ve = _(e => new Be(e))
    }));
export {
    C as _, Q as a, F as c, N as d, A as f, T as g, _e as h, K as i, O as l, P as m, He as n, $ as o, j as p, Re as r, Le as s, Ve as t, M as u, E as v
};
//# sourceMappingURL=824d80d7-cx6fofj0tuoic6ge.js.map