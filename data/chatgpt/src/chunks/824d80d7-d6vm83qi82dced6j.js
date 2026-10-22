const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/6a801ab1-f7merhglxiyf987q.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-nxpmzchfjvwqts17.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-m08q51xmfe7gjq3d.js", "assets/30901919-lgbmg5s09xld40kt.js", "assets/c470f5ab-hgik953cu5ujlhdm.js", "assets/0e5afe53-i4tqvmyg38miikw0.js", "assets/conversation-small-dtc7tvsx.css", "assets/c2675c8c-otyjprdiowg2v8hl.js", "assets/82782bc9-ca5kcqz13rn6iprj.js", "assets/8b34dbc2-n194ohawifys3bko.js", "assets/global-modals-dxg9ukpk.css", "assets/f254c486-c7dca33hbmzonvtk.js", "assets/6fd89734-kace36dopzvvvq6j.js", "assets/3a792387-k2b1mdt61swp6e2c.js", "assets/411304d4-z87hd0wytlhxi4un.js", "assets/3e574439-f5qd3wikm9n1hb3m.js", "assets/25a66342-gbc20u63txeyvr18.js", "assets/2ea88c7a-lxyla91xs6iv7odf.js", "assets/25a66342-j7cd8h2bqav7weve.js"]))) => i.map(i => d[i]);
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $8 as t,
    Bot as n,
    Int as r,
    J7 as i,
    Jat as a,
    L8 as o,
    P8 as s,
    Q7 as c,
    Rnt as l,
    Vot as u,
    _F as ee,
    a2 as te,
    a5 as d,
    c2 as f,
    c5 as p,
    d2 as ne,
    d5 as m,
    dF as re,
    eot as ie,
    i5 as h,
    k5 as g,
    k8 as ae,
    l5 as _,
    n5 as v,
    o2 as oe,
    ost as se,
    p5 as y,
    r5 as b,
    s5 as x,
    sst as S,
    u5 as C,
    vF as ce
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    cn as le,
    ln as ue
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    bLn as de,
    yLn as fe
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    n as pe,
    r as me
} from "./f254c486-c7dca33hbmzonvtk.js";

function he(e) {
    if (!(e instanceof a)) return null;
    let t = e.json?.errors ?? e.detail?.errors,
        n = w(t);
    return n ? n.original_error ?? n : null
}
var ge, w, T, E, D = e((() => {
        ie(), ge = e => !!e && typeof e == `object` && e.should_display === !1 && `original_error` in e, w = e => Array.isArray(e) ? e.find(ge) ?? null : null, T = e => !!e && typeof e == `object` && e.should_display === !0, E = e => Array.isArray(e) ? e.filter(T).map(e => e.original_error).filter(Boolean) : []
    })),
    O, k, A, j, M, N, P, F, I = e((() => {
        ce(), l(), de(), O = ({
            conversation: e,
            checkoutId: t,
            connectorId: n,
            messageId: i
        }, a) => {
            r.logEventWithStatsig(`product_checkout`, `product_checkout`, {
                ...fe({
                    clientThreadId: ee(e),
                    messageId: i ?? void 0
                }),
                ...t ? {
                    checkout_id: t
                } : {},
                ...n ? {
                    connector_id: n
                } : {},
                merchant_platform: `ecosystem`,
                ...a
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
        t(), pe(), Te(), V = h({
            id: y,
            item: h({
                id: y,
                quantity: _
            }),
            name: y,
            description: y,
            images: v(y),
            base_amount: _,
            discount: _,
            subtotal: _,
            tax: _,
            total: _
        }), H = h({
            type: b(Ce),
            display_text: y,
            amount: _
        }), Ee = h({
            id: y,
            type: () => `shipping`,
            title: y,
            subtitle: y,
            subtotal: _,
            tax: _,
            total: _,
            carrier: y,
            earliest_delivery_time: y,
            latest_delivery_time: y
        }), De = h({
            id: y,
            type: () => `digital`,
            title: y,
            subtitle: y,
            subtotal: _,
            tax: _,
            total: _
        }), U = e => {
            switch (x(m(e)?.type, Se)) {
                case `shipping`:
                    return Ee(e);
                case `digital`:
                    return De(e)
            }
        }, W = b(xe), Oe = h({
            type: () => `info`,
            param: y,
            content_type: W,
            content: y
        }), G = h({
            type: () => `error`,
            code: b(ye),
            param: y,
            content_type: W,
            content: y
        }), ke = e => {
            let t = m(e, {}),
                n = {};
            for (let [e, r] of Object.entries(t)) typeof r == `string` && (n[e] = r);
            return n
        }, K = e => {
            switch (x(m(e)?.type, be)) {
                case `info`:
                    return Oe(e);
                case `error`:
                    return G(e)
            }
        }, q = h({
            type: b(ve),
            url: y
        }), J = h({
            name: y,
            line_one: y,
            line_two: y,
            city: y,
            state: y,
            country: e => me(e) ?? `US`,
            postal_code: y
        }), Ae = h({
            id: y,
            checkout_session_id: y,
            permalink_url: y
        }), Y = e => x(y(e).toLowerCase(), z), X = e => x(y(e).toLowerCase(), _e, `unknown`), je = e => {
            let t = m(e);
            return t ? {
                type: Y(t.type),
                ...t.allowed_card_brands === void 0 ? {} : {
                    allowed_card_brands: d(t.allowed_card_brands, X)
                }
            } : {
                type: Y(e)
            }
        }, Me = e => {
            let t = e;
            if (typeof e == `string`) try {
                t = JSON.parse(e)
            } catch {}
            return v(je)(t)
        }, Ne = h({
            id: y,
            type: Y,
            display_name: y,
            display_last4: y,
            display_brand: X
        }), Pe = h({
            merchant_id: y,
            provider: b(R),
            supported_payment_methods: Me,
            managed_payment_methods: v(Ne)
        }), Z = e => y(e).toUpperCase(), Fe = b(we), Q = h({
            id: y,
            payment_provider: Pe,
            payment_mode: Fe,
            status: b(B),
            currency: Z,
            metadata: C(ke),
            line_items: v(V),
            totals: v(H),
            fulfillment_options: v(U),
            fulfillment_address: p(J),
            fulfillment_option_id: C(y),
            messages: v(K),
            links: v(q)
        }), Ie = h({
            id: y,
            buyer: h({
                email: y,
                phone_number: C(y)
            }),
            status: b(B),
            currency: Z,
            line_items: v(V),
            totals: v(H),
            fulfillment_options: v(U),
            fulfillment_address: p(J),
            fulfillment_option_id: C(y),
            messages: v(K),
            links: v(q),
            order: C(Ae),
            continue_url: C(p(y))
        }), $ = e => {
            let t = Ie(e);
            if (t.status === `completed` && t.order == null) throw Error(`Missing order in complete checkout response for completed status`);
            return t
        }, Le = e => {
            let t = e.response,
                n = m(t);
            return $(n)
        }
    })),
    ze, Be, Ve, He = e((() => {
        D(), I(), Re(), ce(), f(), ae(), se(), c(), oe(), u(), ue(), ze = te(() => le(() => import(`./6a801ab1-f7merhglxiyf987q.js`).then(e => e.EcosystemCheckoutModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]))), Be = class {
            constructor(e) {
                n(this, `conversation`, void 0), n(this, `checkoutPromise$`, o(null)), n(this, `chatSDK$`, o(null)), n(this, `resolvedWidget$`, o(null)), n(this, `isLoadingPayment$`, o(!0)), n(this, `checkoutSession$`, o(null)), n(this, `grandTotal$`, s(() => this.checkoutSession$()?.totals.find(e => e.type === `total`))), n(this, `status$`, o(`idle`)), n(this, `messages$`, o([])), n(this, `errorMessages$`, s(() => this.messages$().filter(e => e.type === `error`))), n(this, `paymentDetails$`, o(null)), n(this, `managedPaymentMethodDetails$`, o([])), n(this, `savedPaymentMethodDetails$`, o([])), n(this, `paymentMethodSelectionScreenConfig$`, o(null)), n(this, `paymentTypes$`, o([])), n(this, `allowedCountries$`, o([])), n(this, `paymentSheetButtonCta$`, o(``)), n(this, `publishableKey$`, o(null)), n(this, `customerId$`, o(null)), n(this, `footerMessage$`, o(null)), n(this, `sellerDetails$`, o(null)), n(this, `orderId$`, o(null)), n(this, `billingAddress$`, o(null)), n(this, `billingAddressComplete$`, s(() => this.billingAddress$() ? !!this.billingAddress$()?.name && !!this.billingAddress$()?.line_one && !!this.billingAddress$()?.city && !!this.billingAddress$()?.state && !!this.billingAddress$()?.country && !!this.billingAddress$()?.postal_code : !1)), n(this, `toPaymentMethodDetails`, e => (e ?? []).map(e => ({
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
                }))), n(this, `openCheckout`, (e, t, n) => new Promise((r, i) => {
                    g(() => {
                        this.checkoutPromise$.set({
                            resolve: r,
                            reject: i
                        }), this.chatSDK$.set(e), this.resolvedWidget$.set(t), this.checkoutSession$.set(n), this.billingAddress$.set(n.fulfillment_address ?? null), this.paymentDetails$.set(null), ne(ze, {
                            conversation: this.conversation
                        })
                    })
                })), n(this, `toCancelledCompleteCheckoutSession`, e => ({
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
                })), n(this, `closeCheckout`, () => g(() => {
                    this.messages$.set([]), this.chatSDK$.set(null), this.checkoutSession$.set(null), this.billingAddress$.set(null), this.paymentSheetButtonCta$.set(``), this.checkoutPromise$.set(null), this.status$.set(`idle`), this.paymentDetails$.set(null), this.managedPaymentMethodDetails$.set([]), this.savedPaymentMethodDetails$.set([]), this.paymentMethodSelectionScreenConfig$.set(null), this.billingAddress$.set(null)
                })), n(this, `cancelCheckout$`, () => {
                    let e = this.checkoutPromise$(),
                        t = this.checkoutSession$();
                    e && t ? e.resolve(this.toCancelledCompleteCheckoutSession(t)) : e?.reject(), this.closeCheckout()
                }), n(this, `completeCheckout$`, e => {
                    this.status$.set(`complete`), this.checkoutPromise$()?.resolve?.(e)
                }), n(this, `addErrorMessage$`, e => {
                    this.messages$.set([...this.messages$(), G({
                        code: `invalid`,
                        content: e
                    })])
                }), n(this, `fetchStripeSession$`, async () => {
                    let e = window.location.href,
                        t = e.includes(`/share/`),
                        n = this.conversation.serverId$(),
                        {
                            widgetParent: r,
                            connectorId: a,
                            linkId: o
                        } = S(this.chatSDK$()),
                        {
                            name: s,
                            logoUrl: c
                        } = S(this.resolvedWidget$()),
                        l = S(this.checkoutSession$());
                    try {
                        let {
                            cart: u,
                            customer_id: ee,
                            id: te,
                            customer_session_client_secret: d,
                            publishable_key: f,
                            allowed_countries: p,
                            payment_surfaces_and_types: ne,
                            managed_payment_method_details: m,
                            saved_payment_method_details: re,
                            payment_method_selection_screen_config: ie,
                            seller_details: h,
                            payment_sheet_button_cta: ae
                        } = await i.safePost(`/shopping/ecosystem/checkout_v2`, {
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
                                connector_id: a,
                                link_id: o
                            }
                        }), _ = w(u?.errors);
                        if (_) {
                            let e = _.original_error;
                            return A({
                                conversation: this.conversation,
                                checkoutId: l.id,
                                connectorId: a,
                                messageId: this.chatSDK$()?.toolMessageId ?? null
                            }, `non_displayable_cart_error`, e), this.checkoutPromise$()?.reject(e ?? _), this.closeCheckout(), {
                                error: `Failed to load cart session (ecosystem)`
                            }
                        }
                        return !d || !f ? (A({
                            conversation: this.conversation,
                            checkoutId: l.id,
                            connectorId: a,
                            messageId: this.chatSDK$()?.toolMessageId ?? null
                        }, `error_response_from_endpoint`, `Missing customer_session_client_secret or publishable_key`), {
                            error: `Failed to load cart session (ecosystem)`
                        }) : (g(() => {
                            this.orderId$.set(te), this.footerMessage$.set(u?.footer_level_message ?? null), this.publishableKey$.set(f), this.customerId$.set(ee), this.paymentTypes$.set(ne?.filter(e => e.surface === `payment_sheet`).flatMap(e => e.types) ?? []), this.allowedCountries$.set(p), this.managedPaymentMethodDetails$.set(this.toPaymentMethodDetails(m)), this.savedPaymentMethodDetails$.set(this.toPaymentMethodDetails(re)), this.paymentMethodSelectionScreenConfig$.set(ie), this.sellerDetails$.set(h), this.paymentSheetButtonCta$.set(ae)
                        }), {
                            client_secret: d,
                            publishable_key: f
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
        }, Ve = re(e => new Be(e))
    }));
export {
    w as _, Q as a, I as c, P as d, j as f, E as g, he as h, K as i, k as l, F as m, He as n, $ as o, M as p, Re as r, Le as s, Ve as t, N as u, D as v
};
//# sourceMappingURL=824d80d7-d6vm83qi82dced6j.js.map