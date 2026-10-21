const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/6a801ab1-du0dftbqjcrdcqja.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-lxa3wniynbx9ka2a.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-kzsalymynzuddxee.js", "assets/30901919-i8ip8r0znvgcym38.js", "assets/c470f5ab-poh7ivjvb3j2jlfz.js", "assets/0e5afe53-dz59mkfveu52getp.js", "assets/conversation-small-bwtqiuwj.css", "assets/c2675c8c-ossqum2x3eut0sh8.js", "assets/82782bc9-idqd90kxtp4zogpp.js", "assets/8b34dbc2-ba6wt3zxvh7jce7p.js", "assets/global-modals-lv5n3ujm.css", "assets/f254c486-ejl98xn50xmlbwmr.js", "assets/6fd89734-fg5i0da0538g7i4x.js", "assets/3a792387-gpbtvfkkin03fxhd.js", "assets/411304d4-l2xtfzmx4evg91yf.js", "assets/3e574439-h2t4b6uz1r6djrp1.js", "assets/25a66342-kiy8nj5a5phqlewo.js", "assets/2ea88c7a-lxyla91xs6iv7odf.js", "assets/25a66342-j7cd8h2bqav7weve.js"]))) => i.map(i => d[i]);
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $0 as t,
    B8 as n,
    Bat as r,
    Dot as i,
    Eot as a,
    F7 as ee,
    G8 as o,
    J8 as s,
    K8 as c,
    Kot as l,
    Pat as te,
    Q8 as u,
    Snt as d,
    U8 as f,
    W8 as p,
    X0 as ne,
    X8 as m,
    Y8 as h,
    Z0 as re,
    Z8 as g,
    e5 as _,
    fF as v,
    g5 as y,
    g8 as ie,
    n2 as ae,
    oF as oe,
    pF as se,
    qot as b,
    w8 as x,
    wnt as ce,
    x8 as S,
    z7 as le
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    cn as ue,
    ln as de
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    RIn as fe,
    zIn as pe
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    n as me,
    r as he
} from "./f254c486-ejl98xn50xmlbwmr.js";

function ge(e) {
    if (!(e instanceof te)) return null;
    let t = e.json?.errors ?? e.detail?.errors,
        n = C(t);
    return n ? n.original_error ?? n : null
}
var _e, C, w, T, E = e((() => {
        r(), _e = e => !!e && typeof e == `object` && e.should_display === !1 && `original_error` in e, C = e => Array.isArray(e) ? e.find(_e) ?? null : null, w = e => !!e && typeof e == `object` && e.should_display === !0, T = e => Array.isArray(e) ? e.filter(w).map(e => e.original_error).filter(Boolean) : []
    })),
    D, O, k, A, j, M, N, P, F = e((() => {
        se(), ce(), pe(), D = ({
            conversation: e,
            checkoutId: t,
            connectorId: n,
            messageId: r
        }, i) => {
            d.logEventWithStatsig(`product_checkout`, `product_checkout`, {
                ...fe({
                    clientThreadId: v(e),
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
        n(), me(), Te(), V = o({
            id: _,
            item: o({
                id: _,
                quantity: m
            }),
            name: _,
            description: _,
            images: f(_),
            base_amount: m,
            discount: m,
            subtotal: m,
            tax: m,
            total: m
        }), H = o({
            type: p(Ce),
            display_text: _,
            amount: m
        }), Ee = o({
            id: _,
            type: () => `shipping`,
            title: _,
            subtitle: _,
            subtotal: m,
            tax: m,
            total: m,
            carrier: _,
            earliest_delivery_time: _,
            latest_delivery_time: _
        }), De = o({
            id: _,
            type: () => `digital`,
            title: _,
            subtitle: _,
            subtotal: m,
            tax: m,
            total: m
        }), U = e => {
            switch (s(u(e)?.type, Se)) {
                case `shipping`:
                    return Ee(e);
                case `digital`:
                    return De(e)
            }
        }, W = p(xe), Oe = o({
            type: () => `info`,
            param: _,
            content_type: W,
            content: _
        }), G = o({
            type: () => `error`,
            code: p(ye),
            param: _,
            content_type: W,
            content: _
        }), ke = e => {
            let t = u(e, {}),
                n = {};
            for (let [e, r] of Object.entries(t)) typeof r == `string` && (n[e] = r);
            return n
        }, K = e => {
            switch (s(u(e)?.type, be)) {
                case `info`:
                    return Oe(e);
                case `error`:
                    return G(e)
            }
        }, q = o({
            type: p(ve),
            url: _
        }), J = o({
            name: _,
            line_one: _,
            line_two: _,
            city: _,
            state: _,
            country: e => he(e) ?? `US`,
            postal_code: _
        }), Ae = o({
            id: _,
            checkout_session_id: _,
            permalink_url: _
        }), Y = e => s(_(e).toLowerCase(), R), X = e => s(_(e).toLowerCase(), z, `unknown`), je = e => {
            let t = u(e);
            return t ? {
                type: Y(t.type),
                ...t.allowed_card_brands === void 0 ? {} : {
                    allowed_card_brands: c(t.allowed_card_brands, X)
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
        }, Ne = o({
            id: _,
            type: Y,
            display_name: _,
            display_last4: _,
            display_brand: X
        }), Pe = o({
            merchant_id: _,
            provider: p(L),
            supported_payment_methods: Me,
            managed_payment_methods: f(Ne)
        }), Z = e => _(e).toUpperCase(), Fe = p(we), Q = o({
            id: _,
            payment_provider: Pe,
            payment_mode: Fe,
            status: p(B),
            currency: Z,
            metadata: g(ke),
            line_items: f(V),
            totals: f(H),
            fulfillment_options: f(U),
            fulfillment_address: h(J),
            fulfillment_option_id: g(_),
            messages: f(K),
            links: f(q)
        }), Ie = o({
            id: _,
            buyer: o({
                email: _,
                phone_number: g(_)
            }),
            status: p(B),
            currency: Z,
            line_items: f(V),
            totals: f(H),
            fulfillment_options: f(U),
            fulfillment_address: h(J),
            fulfillment_option_id: g(_),
            messages: f(K),
            links: f(q),
            order: g(Ae),
            continue_url: g(h(_))
        }), $ = e => {
            let t = Ie(e);
            if (t.status === `completed` && t.order == null) throw Error(`Missing order in complete checkout response for completed status`);
            return t
        }, Le = e => {
            let t = e.response,
                n = u(t);
            return $(n)
        }
    })),
    ze, Be, Ve, He = e((() => {
        E(), F(), Re(), se(), t(), ie(), l(), le(), re(), i(), de(), ze = ne(() => ue(() => import(`./6a801ab1-du0dftbqjcrdcqja.js`).then(e => e.EcosystemCheckoutModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]))), Be = class {
            constructor(e) {
                a(this, `conversation`, void 0), a(this, `checkoutPromise$`, x(null)), a(this, `chatSDK$`, x(null)), a(this, `resolvedWidget$`, x(null)), a(this, `isLoadingPayment$`, x(!0)), a(this, `checkoutSession$`, x(null)), a(this, `grandTotal$`, S(() => this.checkoutSession$()?.totals.find(e => e.type === `total`))), a(this, `status$`, x(`idle`)), a(this, `messages$`, x([])), a(this, `errorMessages$`, S(() => this.messages$().filter(e => e.type === `error`))), a(this, `paymentDetails$`, x(null)), a(this, `managedPaymentMethodDetails$`, x([])), a(this, `savedPaymentMethodDetails$`, x([])), a(this, `paymentMethodSelectionScreenConfig$`, x(null)), a(this, `paymentTypes$`, x([])), a(this, `allowedCountries$`, x([])), a(this, `paymentSheetButtonCta$`, x(``)), a(this, `publishableKey$`, x(null)), a(this, `customerId$`, x(null)), a(this, `footerMessage$`, x(null)), a(this, `sellerDetails$`, x(null)), a(this, `orderId$`, x(null)), a(this, `billingAddress$`, x(null)), a(this, `billingAddressComplete$`, S(() => this.billingAddress$() ? !!this.billingAddress$()?.name && !!this.billingAddress$()?.line_one && !!this.billingAddress$()?.city && !!this.billingAddress$()?.state && !!this.billingAddress$()?.country && !!this.billingAddress$()?.postal_code : !1)), a(this, `toPaymentMethodDetails`, e => (e ?? []).map(e => ({
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
                }))), a(this, `openCheckout`, (e, t, n) => new Promise((r, i) => {
                    y(() => {
                        this.checkoutPromise$.set({
                            resolve: r,
                            reject: i
                        }), this.chatSDK$.set(e), this.resolvedWidget$.set(t), this.checkoutSession$.set(n), this.billingAddress$.set(n.fulfillment_address ?? null), this.paymentDetails$.set(null), ae(ze, {
                            conversation: this.conversation
                        })
                    })
                })), a(this, `toCancelledCompleteCheckoutSession`, e => ({
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
                })), a(this, `closeCheckout`, () => y(() => {
                    this.messages$.set([]), this.chatSDK$.set(null), this.checkoutSession$.set(null), this.billingAddress$.set(null), this.paymentSheetButtonCta$.set(``), this.checkoutPromise$.set(null), this.status$.set(`idle`), this.paymentDetails$.set(null), this.managedPaymentMethodDetails$.set([]), this.savedPaymentMethodDetails$.set([]), this.paymentMethodSelectionScreenConfig$.set(null), this.billingAddress$.set(null)
                })), a(this, `cancelCheckout$`, () => {
                    let e = this.checkoutPromise$(),
                        t = this.checkoutSession$();
                    e && t ? e.resolve(this.toCancelledCompleteCheckoutSession(t)) : e?.reject(), this.closeCheckout()
                }), a(this, `completeCheckout$`, e => {
                    this.status$.set(`complete`), this.checkoutPromise$()?.resolve?.(e)
                }), a(this, `addErrorMessage$`, e => {
                    this.messages$.set([...this.messages$(), G({
                        code: `invalid`,
                        content: e
                    })])
                }), a(this, `fetchStripeSession$`, async () => {
                    let e = window.location.href,
                        t = e.includes(`/share/`),
                        n = this.conversation.serverId$(),
                        {
                            widgetParent: r,
                            connectorId: i,
                            linkId: a
                        } = b(this.chatSDK$()),
                        {
                            name: o,
                            logoUrl: s
                        } = b(this.resolvedWidget$()),
                        c = b(this.checkoutSession$());
                    try {
                        let {
                            cart: l,
                            customer_id: te,
                            id: u,
                            customer_session_client_secret: d,
                            publishable_key: f,
                            allowed_countries: p,
                            payment_surfaces_and_types: ne,
                            managed_payment_method_details: m,
                            saved_payment_method_details: h,
                            payment_method_selection_screen_config: re,
                            seller_details: g,
                            payment_sheet_button_cta: _
                        } = await ee.safePost(`/shopping/ecosystem/checkout_v2`, {
                            requestBody: {
                                ...c,
                                logo_url: s ?? null,
                                merchant: {
                                    name: o ?? ``
                                },
                                ...n ? {
                                    conversation_id: n
                                } : {},
                                shared_conversation_url: t ? e : null,
                                ecosystem_app_uri: r,
                                connector_id: i,
                                link_id: a
                            }
                        }), v = C(l?.errors);
                        if (v) {
                            let e = v.original_error;
                            return k({
                                conversation: this.conversation,
                                checkoutId: c.id,
                                connectorId: i,
                                messageId: this.chatSDK$()?.toolMessageId ?? null
                            }, `non_displayable_cart_error`, e), this.checkoutPromise$()?.reject(e ?? v), this.closeCheckout(), {
                                error: `Failed to load cart session (ecosystem)`
                            }
                        }
                        return !d || !f ? (k({
                            conversation: this.conversation,
                            checkoutId: c.id,
                            connectorId: i,
                            messageId: this.chatSDK$()?.toolMessageId ?? null
                        }, `error_response_from_endpoint`, `Missing customer_session_client_secret or publishable_key`), {
                            error: `Failed to load cart session (ecosystem)`
                        }) : (y(() => {
                            this.orderId$.set(u), this.footerMessage$.set(l?.footer_level_message ?? null), this.publishableKey$.set(f), this.customerId$.set(te), this.paymentTypes$.set(ne?.filter(e => e.surface === `payment_sheet`).flatMap(e => e.types) ?? []), this.allowedCountries$.set(p), this.managedPaymentMethodDetails$.set(this.toPaymentMethodDetails(m)), this.savedPaymentMethodDetails$.set(this.toPaymentMethodDetails(h)), this.paymentMethodSelectionScreenConfig$.set(re), this.sellerDetails$.set(g), this.paymentSheetButtonCta$.set(_)
                        }), {
                            client_secret: d,
                            publishable_key: f
                        })
                    } catch (e) {
                        throw k({
                            conversation: this.conversation,
                            checkoutId: c.id,
                            connectorId: i,
                            messageId: this.chatSDK$()?.toolMessageId ?? null
                        }, `error_thrown_from_endpoint`, e instanceof Error ? e.message : `Unknown error`), e
                    }
                }), this.conversation = e
            }
        }, Ve = oe(e => new Be(e))
    }));
export {
    C as _, Q as a, F as c, N as d, A as f, T as g, ge as h, K as i, O as l, P as m, He as n, $ as o, j as p, Re as r, Le as s, Ve as t, M as u, E as v
};
//# sourceMappingURL=824d80d7-n35qzyzuj8rei6sp.js.map