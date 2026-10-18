const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/6a801ab1-bks015zlh3yviuwn.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/conversation-small-fym1zmu9zimymmm1.js", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css", "assets/c2675c8c-ig7dykzhv7vbqkt7.js", "assets/82782bc9-h658ejxn3ufkvr7a.js", "assets/8b34dbc2-gf9wnwcahty27ylx.js", "assets/global-modals-njebr7y8.css", "assets/f254c486-ogsqyzgltb11du0k.js", "assets/6fd89734-camj98pxrr936jpu.js", "assets/3a792387-bhw353b2h7fl8kp6.js", "assets/411304d4-iliugpn39wth56r4.js", "assets/3e574439-jdddxju5mbw4uiqr.js", "assets/25a66342-dd6xm32a19d6mzzc.js", "assets/2ea88c7a-lxyla91xs6iv7odf.js", "assets/25a66342-j7cd8h2bqav7weve.js"]))) => i.map(i => d[i]);
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B6 as t,
    B8 as n,
    Btt as r,
    C0 as i,
    G6 as a,
    Gat as ee,
    Htt as o,
    J6 as s,
    JP as c,
    O0 as te,
    Qit as ne,
    S0 as l,
    S8 as u,
    T0 as d,
    VP as f,
    Wat as p,
    a7 as re,
    b8 as m,
    dot as h,
    g8 as ie,
    h8 as g,
    iat as _,
    l7 as ae,
    m8 as v,
    p8 as y,
    qP as oe,
    u8 as se,
    uot as ce,
    v8 as b,
    w8 as x,
    x8 as S,
    y8 as C
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    cn as le,
    ln as ue
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    CIn as de,
    SIn as fe
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    n as pe,
    r as me
} from "./f254c486-ogsqyzgltb11du0k.js";

function he(e) {
    if (!(e instanceof ne)) return null;
    let t = e.json?.errors ?? e.detail?.errors,
        n = w(t);
    return n ? n.original_error ?? n : null
}
var ge, w, T, E, D = e((() => {
        _(), ge = e => !!e && typeof e == `object` && e.should_display === !1 && `original_error` in e, w = e => Array.isArray(e) ? e.find(ge) ?? null : null, T = e => !!e && typeof e == `object` && e.should_display === !0, E = e => Array.isArray(e) ? e.filter(T).map(e => e.original_error).filter(Boolean) : []
    })),
    O, k, A, j, M, N, P, F, I = e((() => {
        c(), o(), de(), O = ({
            conversation: e,
            checkoutId: t,
            connectorId: n,
            messageId: i
        }, a) => {
            r.logEventWithStatsig(`product_checkout`, `product_checkout`, {
                ...fe({
                    clientThreadId: oe(e),
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
        se(), pe(), Te(), V = g({
            id: x,
            item: g({
                id: x,
                quantity: m
            }),
            name: x,
            description: x,
            images: y(x),
            base_amount: m,
            discount: m,
            subtotal: m,
            tax: m,
            total: m
        }), H = g({
            type: v(Ce),
            display_text: x,
            amount: m
        }), Ee = g({
            id: x,
            type: () => `shipping`,
            title: x,
            subtitle: x,
            subtotal: m,
            tax: m,
            total: m,
            carrier: x,
            earliest_delivery_time: x,
            latest_delivery_time: x
        }), De = g({
            id: x,
            type: () => `digital`,
            title: x,
            subtitle: x,
            subtotal: m,
            tax: m,
            total: m
        }), U = e => {
            switch (b(u(e)?.type, Se)) {
                case `shipping`:
                    return Ee(e);
                case `digital`:
                    return De(e)
            }
        }, W = v(xe), Oe = g({
            type: () => `info`,
            param: x,
            content_type: W,
            content: x
        }), G = g({
            type: () => `error`,
            code: v(ye),
            param: x,
            content_type: W,
            content: x
        }), ke = e => {
            let t = u(e, {}),
                n = {};
            for (let [e, r] of Object.entries(t)) typeof r == `string` && (n[e] = r);
            return n
        }, K = e => {
            switch (b(u(e)?.type, be)) {
                case `info`:
                    return Oe(e);
                case `error`:
                    return G(e)
            }
        }, q = g({
            type: v(ve),
            url: x
        }), J = g({
            name: x,
            line_one: x,
            line_two: x,
            city: x,
            state: x,
            country: e => me(e) ?? `US`,
            postal_code: x
        }), Ae = g({
            id: x,
            checkout_session_id: x,
            permalink_url: x
        }), Y = e => b(x(e).toLowerCase(), z), X = e => b(x(e).toLowerCase(), _e, `unknown`), je = e => {
            let t = u(e);
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
            return y(je)(t)
        }, Ne = g({
            id: x,
            type: Y,
            display_name: x,
            display_last4: x,
            display_brand: X
        }), Pe = g({
            merchant_id: x,
            provider: v(R),
            supported_payment_methods: Me,
            managed_payment_methods: y(Ne)
        }), Z = e => x(e).toUpperCase(), Fe = v(we), Q = g({
            id: x,
            payment_provider: Pe,
            payment_mode: Fe,
            status: v(B),
            currency: Z,
            metadata: S(ke),
            line_items: y(V),
            totals: y(H),
            fulfillment_options: y(U),
            fulfillment_address: C(J),
            fulfillment_option_id: S(x),
            messages: y(K),
            links: y(q)
        }), Ie = g({
            id: x,
            buyer: g({
                email: x,
                phone_number: S(x)
            }),
            status: v(B),
            currency: Z,
            line_items: y(V),
            totals: y(H),
            fulfillment_options: y(U),
            fulfillment_address: C(J),
            fulfillment_option_id: S(x),
            messages: y(K),
            links: y(q),
            order: S(Ae),
            continue_url: S(C(x))
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
        D(), I(), Re(), c(), d(), t(), ce(), ae(), i(), ee(), ue(), ze = l(() => le(() => import(`./6a801ab1-bks015zlh3yviuwn.js`).then(e => e.EcosystemCheckoutModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]))), Be = class {
            constructor(e) {
                p(this, `conversation`, void 0), p(this, `checkoutPromise$`, s(null)), p(this, `chatSDK$`, s(null)), p(this, `resolvedWidget$`, s(null)), p(this, `isLoadingPayment$`, s(!0)), p(this, `checkoutSession$`, s(null)), p(this, `grandTotal$`, a(() => this.checkoutSession$()?.totals.find(e => e.type === `total`))), p(this, `status$`, s(`idle`)), p(this, `messages$`, s([])), p(this, `errorMessages$`, a(() => this.messages$().filter(e => e.type === `error`))), p(this, `paymentDetails$`, s(null)), p(this, `managedPaymentMethodDetails$`, s([])), p(this, `savedPaymentMethodDetails$`, s([])), p(this, `paymentMethodSelectionScreenConfig$`, s(null)), p(this, `paymentTypes$`, s([])), p(this, `allowedCountries$`, s([])), p(this, `paymentSheetButtonCta$`, s(``)), p(this, `publishableKey$`, s(null)), p(this, `customerId$`, s(null)), p(this, `footerMessage$`, s(null)), p(this, `sellerDetails$`, s(null)), p(this, `orderId$`, s(null)), p(this, `billingAddress$`, s(null)), p(this, `billingAddressComplete$`, a(() => this.billingAddress$() ? !!this.billingAddress$()?.name && !!this.billingAddress$()?.line_one && !!this.billingAddress$()?.city && !!this.billingAddress$()?.state && !!this.billingAddress$()?.country && !!this.billingAddress$()?.postal_code : !1)), p(this, `toPaymentMethodDetails`, e => (e ?? []).map(e => ({
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
                }))), p(this, `openCheckout`, (e, t, r) => new Promise((i, a) => {
                    n(() => {
                        this.checkoutPromise$.set({
                            resolve: i,
                            reject: a
                        }), this.chatSDK$.set(e), this.resolvedWidget$.set(t), this.checkoutSession$.set(r), this.billingAddress$.set(r.fulfillment_address ?? null), this.paymentDetails$.set(null), te(ze, {
                            conversation: this.conversation
                        })
                    })
                })), p(this, `toCancelledCompleteCheckoutSession`, e => ({
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
                })), p(this, `closeCheckout`, () => n(() => {
                    this.messages$.set([]), this.chatSDK$.set(null), this.checkoutSession$.set(null), this.billingAddress$.set(null), this.paymentSheetButtonCta$.set(``), this.checkoutPromise$.set(null), this.status$.set(`idle`), this.paymentDetails$.set(null), this.managedPaymentMethodDetails$.set([]), this.savedPaymentMethodDetails$.set([]), this.paymentMethodSelectionScreenConfig$.set(null), this.billingAddress$.set(null)
                })), p(this, `cancelCheckout$`, () => {
                    let e = this.checkoutPromise$(),
                        t = this.checkoutSession$();
                    e && t ? e.resolve(this.toCancelledCompleteCheckoutSession(t)) : e?.reject(), this.closeCheckout()
                }), p(this, `completeCheckout$`, e => {
                    this.status$.set(`complete`), this.checkoutPromise$()?.resolve?.(e)
                }), p(this, `addErrorMessage$`, e => {
                    this.messages$.set([...this.messages$(), G({
                        code: `invalid`,
                        content: e
                    })])
                }), p(this, `fetchStripeSession$`, async () => {
                    let e = window.location.href,
                        t = e.includes(`/share/`),
                        r = this.conversation.serverId$(),
                        {
                            widgetParent: i,
                            connectorId: a
                        } = h(this.chatSDK$()),
                        {
                            name: ee,
                            logoUrl: o
                        } = h(this.resolvedWidget$()),
                        s = h(this.checkoutSession$());
                    try {
                        let {
                            cart: c,
                            customer_id: te,
                            id: ne,
                            customer_session_client_secret: l,
                            publishable_key: u,
                            allowed_countries: d,
                            payment_surfaces_and_types: f,
                            managed_payment_method_details: p,
                            saved_payment_method_details: m,
                            payment_method_selection_screen_config: h,
                            seller_details: ie,
                            payment_sheet_button_cta: g
                        } = await re.safePost(`/shopping/ecosystem/checkout_v2`, {
                            requestBody: {
                                ...s,
                                logo_url: o ?? null,
                                merchant: {
                                    name: ee ?? ``
                                },
                                ...r ? {
                                    conversation_id: r
                                } : {},
                                shared_conversation_url: t ? e : null,
                                ecosystem_app_uri: i,
                                connector_id: a
                            }
                        }), _ = w(c?.errors);
                        if (_) {
                            let e = _.original_error;
                            return A({
                                conversation: this.conversation,
                                checkoutId: s.id,
                                connectorId: a,
                                messageId: this.chatSDK$()?.toolMessageId ?? null
                            }, `non_displayable_cart_error`, e), this.checkoutPromise$()?.reject(e ?? _), this.closeCheckout(), {
                                error: `Failed to load cart session (ecosystem)`
                            }
                        }
                        return !l || !u ? (A({
                            conversation: this.conversation,
                            checkoutId: s.id,
                            connectorId: a,
                            messageId: this.chatSDK$()?.toolMessageId ?? null
                        }, `error_response_from_endpoint`, `Missing customer_session_client_secret or publishable_key`), {
                            error: `Failed to load cart session (ecosystem)`
                        }) : (n(() => {
                            this.orderId$.set(ne), this.footerMessage$.set(c?.footer_level_message ?? null), this.publishableKey$.set(u), this.customerId$.set(te), this.paymentTypes$.set(f?.filter(e => e.surface === `payment_sheet`).flatMap(e => e.types) ?? []), this.allowedCountries$.set(d), this.managedPaymentMethodDetails$.set(this.toPaymentMethodDetails(p)), this.savedPaymentMethodDetails$.set(this.toPaymentMethodDetails(m)), this.paymentMethodSelectionScreenConfig$.set(h), this.sellerDetails$.set(ie), this.paymentSheetButtonCta$.set(g)
                        }), {
                            client_secret: l,
                            publishable_key: u
                        })
                    } catch (e) {
                        throw A({
                            conversation: this.conversation,
                            checkoutId: s.id,
                            connectorId: a,
                            messageId: this.chatSDK$()?.toolMessageId ?? null
                        }, `error_thrown_from_endpoint`, e instanceof Error ? e.message : `Unknown error`), e
                    }
                }), this.conversation = e
            }
        }, Ve = f(e => new Be(e))
    }));
export {
    w as _, Q as a, I as c, P as d, j as f, E as g, he as h, K as i, k as l, F as m, He as n, $ as o, M as p, Re as r, Le as s, Ve as t, N as u, D as v
};
//# sourceMappingURL=824d80d7-e0wasqya10t0ofva.js.map