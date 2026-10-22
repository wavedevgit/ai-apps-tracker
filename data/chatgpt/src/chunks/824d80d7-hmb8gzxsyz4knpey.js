const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/6a801ab1-l77kc5vm47e6u2ti.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-itnrgnth03y1sm9d.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-i79e9c315w50am5f.js", "assets/30901919-ikyi1r55w2i02fom.js", "assets/c470f5ab-lpy67c9in1skobas.js", "assets/0e5afe53-jfvcgv06snw44wce.js", "assets/conversation-small-dl8qqd6x.css", "assets/c2675c8c-d62p1sdq1sy52umm.js", "assets/82782bc9-o75a7wf6pmueiskp.js", "assets/8b34dbc2-m4883pai3e8fx8q6.js", "assets/global-modals-dxg9ukpk.css", "assets/f254c486-cdlpvsrmzhzmg7dt.js", "assets/6fd89734-e3cv17shubjcjxgn.js", "assets/3a792387-kz1v1h17uw8ybxv2.js", "assets/411304d4-ke39fmaa0dzagkle.js", "assets/3e574439-g8g6wxduza4405l1.js", "assets/25a66342-g3hzpau130damt8s.js", "assets/2ea88c7a-lxyla91xs6iv7odf.js", "assets/25a66342-j7cd8h2bqav7weve.js"]))) => i.map(i => d[i]);
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $8 as t,
    Int as n,
    J7 as r,
    Kat as i,
    L8 as a,
    P8 as o,
    Pnt as ee,
    Q7 as s,
    Qat as c,
    Rot as l,
    _F as u,
    a2 as te,
    a5 as d,
    ast as f,
    c2 as p,
    c5 as m,
    d2 as h,
    d5 as g,
    dF as ne,
    i5 as _,
    ist as re,
    k5 as v,
    k8 as y,
    l5 as b,
    n5 as x,
    o2 as ie,
    p5 as S,
    r5 as C,
    s5 as w,
    u5 as T,
    vF as ae,
    zot as oe
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    cn as se,
    ln as ce
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    nLn as le,
    rLn as ue
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    n as de,
    r as fe
} from "./f254c486-cdlpvsrmzhzmg7dt.js";

function pe(e) {
    if (!(e instanceof i)) return null;
    let t = e.json?.errors ?? e.detail?.errors,
        n = E(t);
    return n ? n.original_error ?? n : null
}
var me, E, D, O, k = e((() => {
        c(), me = e => !!e && typeof e == `object` && e.should_display === !1 && `original_error` in e, E = e => Array.isArray(e) ? e.find(me) ?? null : null, D = e => !!e && typeof e == `object` && e.should_display === !0, O = e => Array.isArray(e) ? e.filter(D).map(e => e.original_error).filter(Boolean) : []
    })),
    A, j, M, N, P, F, I, L, R = e((() => {
        ae(), n(), ue(), A = ({
            conversation: e,
            checkoutId: t,
            connectorId: n,
            messageId: r
        }, i) => {
            ee.logEventWithStatsig(`product_checkout`, `product_checkout`, {
                ...le({
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
        }, j = (e, t) => A(e, {
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
        }), M = (e, t, n) => A(e, {
            action: `cart_load_failed`,
            reason: t,
            ...n ? {
                error_message: n
            } : {}
        }), N = (e, {
            label: t,
            source: n,
            hasExistingPaymentMethod: r
        }) => A(e, {
            credit_card_type: t ?? void 0,
            prefill: n === `prefill`,
            action: r ? `payment_method_updated` : `payment_method_added`
        }), P = (e, t) => A(e, {
            credit_card_type: t ?? void 0,
            action: `payment_method_removed`
        }), F = (e, {
            paymentMethod: t,
            attemptId: n
        }) => A(e, {
            payment_method: t ?? void 0,
            action: `express_checkout_button_clicked`,
            ...n ? {
                attempt_id: n
            } : {}
        }), I = (e, {
            paymentMethod: t,
            attemptId: n,
            isExpressCheckout: r,
            merchantName: i,
            merchantUrl: a
        }) => A(e, {
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
        }), L = (e, {
            attemptId: t,
            reason: n,
            errorMessage: r,
            succeeded: i
        }) => A(e, {
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
    z, he, ge, _e, ve, ye, be, xe, Se, Ce, B, we, Te = e((() => {
        z = () => e => e, he = z()([`stripe`, `paypal`, `adyen`, `braintree`, `fiserv`, `worldpay`, `jpmorgan`, `checkout`, `merchant`]), ge = z()([`card`, `link`, `apple_pay`, `google_pay`]), _e = z()([`amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `jcb`, `link`, `mastercard`, `unionpay`, `visa`, `unknown`]), ve = z()([`terms_of_use`, `privacy_policy`, `seller_shop_policies`, `product_link`, `support_url`, `return_policy`, `collection_notice`]), ye = z()([`missing`, `invalid`, `out_of_stock`, `payment_declined`, `requires_sign_in`, `requires_3ds`, `price_change`]), be = z()([`info`, `error`]), xe = z()([`plain`, `markdown`]), Se = z()([`shipping`, `digital`]), Ce = z()([`items_base_amount`, `items_discount`, `subtotal`, `discount`, `fulfillment`, `tax`, `fee`, `tip`, `total`]), B = z()([`not_ready_for_payment`, `ready_for_payment`, `completed`, `canceled`, `requires_escalation`]), we = z()([`live`, `test`])
    })),
    V, H, Ee, De, U, W, Oe, G, ke, K, q, J, Ae, Y, X, je, Me, Ne, Pe, Z, Fe, Q, Ie, $, Le, Re = e((() => {
        t(), de(), Te(), V = _({
            id: S,
            item: _({
                id: S,
                quantity: b
            }),
            name: S,
            description: S,
            images: x(S),
            base_amount: b,
            discount: b,
            subtotal: b,
            tax: b,
            total: b
        }), H = _({
            type: C(Ce),
            display_text: S,
            amount: b
        }), Ee = _({
            id: S,
            type: () => `shipping`,
            title: S,
            subtitle: S,
            subtotal: b,
            tax: b,
            total: b,
            carrier: S,
            earliest_delivery_time: S,
            latest_delivery_time: S
        }), De = _({
            id: S,
            type: () => `digital`,
            title: S,
            subtitle: S,
            subtotal: b,
            tax: b,
            total: b
        }), U = e => {
            switch (w(g(e)?.type, Se)) {
                case `shipping`:
                    return Ee(e);
                case `digital`:
                    return De(e)
            }
        }, W = C(xe), Oe = _({
            type: () => `info`,
            param: S,
            content_type: W,
            content: S
        }), G = _({
            type: () => `error`,
            code: C(ye),
            param: S,
            content_type: W,
            content: S
        }), ke = e => {
            let t = g(e, {}),
                n = {};
            for (let [e, r] of Object.entries(t)) typeof r == `string` && (n[e] = r);
            return n
        }, K = e => {
            switch (w(g(e)?.type, be)) {
                case `info`:
                    return Oe(e);
                case `error`:
                    return G(e)
            }
        }, q = _({
            type: C(ve),
            url: S
        }), J = _({
            name: S,
            line_one: S,
            line_two: S,
            city: S,
            state: S,
            country: e => fe(e) ?? `US`,
            postal_code: S
        }), Ae = _({
            id: S,
            checkout_session_id: S,
            permalink_url: S
        }), Y = e => w(S(e).toLowerCase(), ge), X = e => w(S(e).toLowerCase(), _e, `unknown`), je = e => {
            let t = g(e);
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
            return x(je)(t)
        }, Ne = _({
            id: S,
            type: Y,
            display_name: S,
            display_last4: S,
            display_brand: X
        }), Pe = _({
            merchant_id: S,
            provider: C(he),
            supported_payment_methods: Me,
            managed_payment_methods: x(Ne)
        }), Z = e => S(e).toUpperCase(), Fe = C(we), Q = _({
            id: S,
            payment_provider: Pe,
            payment_mode: Fe,
            status: C(B),
            currency: Z,
            metadata: T(ke),
            line_items: x(V),
            totals: x(H),
            fulfillment_options: x(U),
            fulfillment_address: m(J),
            fulfillment_option_id: T(S),
            messages: x(K),
            links: x(q)
        }), Ie = _({
            id: S,
            buyer: _({
                email: S,
                phone_number: T(S)
            }),
            status: C(B),
            currency: Z,
            line_items: x(V),
            totals: x(H),
            fulfillment_options: x(U),
            fulfillment_address: m(J),
            fulfillment_option_id: T(S),
            messages: x(K),
            links: x(q),
            order: T(Ae),
            continue_url: T(m(S))
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
        k(), R(), Re(), ae(), p(), y(), re(), s(), ie(), oe(), ce(), ze = te(() => se(() => import(`./6a801ab1-l77kc5vm47e6u2ti.js`).then(e => e.EcosystemCheckoutModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]))), Be = class {
            constructor(e) {
                l(this, `conversation`, void 0), l(this, `checkoutPromise$`, a(null)), l(this, `chatSDK$`, a(null)), l(this, `resolvedWidget$`, a(null)), l(this, `isLoadingPayment$`, a(!0)), l(this, `checkoutSession$`, a(null)), l(this, `grandTotal$`, o(() => this.checkoutSession$()?.totals.find(e => e.type === `total`))), l(this, `status$`, a(`idle`)), l(this, `messages$`, a([])), l(this, `errorMessages$`, o(() => this.messages$().filter(e => e.type === `error`))), l(this, `paymentDetails$`, a(null)), l(this, `managedPaymentMethodDetails$`, a([])), l(this, `savedPaymentMethodDetails$`, a([])), l(this, `paymentMethodSelectionScreenConfig$`, a(null)), l(this, `paymentTypes$`, a([])), l(this, `allowedCountries$`, a([])), l(this, `paymentSheetButtonCta$`, a(``)), l(this, `publishableKey$`, a(null)), l(this, `customerId$`, a(null)), l(this, `footerMessage$`, a(null)), l(this, `sellerDetails$`, a(null)), l(this, `orderId$`, a(null)), l(this, `billingAddress$`, a(null)), l(this, `billingAddressComplete$`, o(() => this.billingAddress$() ? !!this.billingAddress$()?.name && !!this.billingAddress$()?.line_one && !!this.billingAddress$()?.city && !!this.billingAddress$()?.state && !!this.billingAddress$()?.country && !!this.billingAddress$()?.postal_code : !1)), l(this, `toPaymentMethodDetails`, e => (e ?? []).map(e => ({
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
                }))), l(this, `openCheckout`, (e, t, n) => new Promise((r, i) => {
                    v(() => {
                        this.checkoutPromise$.set({
                            resolve: r,
                            reject: i
                        }), this.chatSDK$.set(e), this.resolvedWidget$.set(t), this.checkoutSession$.set(n), this.billingAddress$.set(n.fulfillment_address ?? null), this.paymentDetails$.set(null), h(ze, {
                            conversation: this.conversation
                        })
                    })
                })), l(this, `toCancelledCompleteCheckoutSession`, e => ({
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
                })), l(this, `closeCheckout`, () => v(() => {
                    this.messages$.set([]), this.chatSDK$.set(null), this.checkoutSession$.set(null), this.billingAddress$.set(null), this.paymentSheetButtonCta$.set(``), this.checkoutPromise$.set(null), this.status$.set(`idle`), this.paymentDetails$.set(null), this.managedPaymentMethodDetails$.set([]), this.savedPaymentMethodDetails$.set([]), this.paymentMethodSelectionScreenConfig$.set(null), this.billingAddress$.set(null)
                })), l(this, `cancelCheckout$`, () => {
                    let e = this.checkoutPromise$(),
                        t = this.checkoutSession$();
                    e && t ? e.resolve(this.toCancelledCompleteCheckoutSession(t)) : e?.reject(), this.closeCheckout()
                }), l(this, `completeCheckout$`, e => {
                    this.status$.set(`complete`), this.checkoutPromise$()?.resolve?.(e)
                }), l(this, `addErrorMessage$`, e => {
                    this.messages$.set([...this.messages$(), G({
                        code: `invalid`,
                        content: e
                    })])
                }), l(this, `fetchStripeSession$`, async () => {
                    let e = window.location.href,
                        t = e.includes(`/share/`),
                        n = this.conversation.serverId$(),
                        {
                            widgetParent: i,
                            connectorId: a,
                            linkId: o
                        } = f(this.chatSDK$()),
                        {
                            name: ee,
                            logoUrl: s
                        } = f(this.resolvedWidget$()),
                        c = f(this.checkoutSession$());
                    try {
                        let {
                            cart: l,
                            customer_id: u,
                            id: te,
                            customer_session_client_secret: d,
                            publishable_key: f,
                            allowed_countries: p,
                            payment_surfaces_and_types: m,
                            managed_payment_method_details: h,
                            saved_payment_method_details: g,
                            payment_method_selection_screen_config: ne,
                            seller_details: _,
                            payment_sheet_button_cta: re
                        } = await r.safePost(`/shopping/ecosystem/checkout_v2`, {
                            requestBody: {
                                ...c,
                                logo_url: s ?? null,
                                merchant: {
                                    name: ee ?? ``
                                },
                                ...n ? {
                                    conversation_id: n
                                } : {},
                                shared_conversation_url: t ? e : null,
                                ecosystem_app_uri: i,
                                connector_id: a,
                                link_id: o
                            }
                        }), y = E(l?.errors);
                        if (y) {
                            let e = y.original_error;
                            return M({
                                conversation: this.conversation,
                                checkoutId: c.id,
                                connectorId: a,
                                messageId: this.chatSDK$()?.toolMessageId ?? null
                            }, `non_displayable_cart_error`, e), this.checkoutPromise$()?.reject(e ?? y), this.closeCheckout(), {
                                error: `Failed to load cart session (ecosystem)`
                            }
                        }
                        return !d || !f ? (M({
                            conversation: this.conversation,
                            checkoutId: c.id,
                            connectorId: a,
                            messageId: this.chatSDK$()?.toolMessageId ?? null
                        }, `error_response_from_endpoint`, `Missing customer_session_client_secret or publishable_key`), {
                            error: `Failed to load cart session (ecosystem)`
                        }) : (v(() => {
                            this.orderId$.set(te), this.footerMessage$.set(l?.footer_level_message ?? null), this.publishableKey$.set(f), this.customerId$.set(u), this.paymentTypes$.set(m?.filter(e => e.surface === `payment_sheet`).flatMap(e => e.types) ?? []), this.allowedCountries$.set(p), this.managedPaymentMethodDetails$.set(this.toPaymentMethodDetails(h)), this.savedPaymentMethodDetails$.set(this.toPaymentMethodDetails(g)), this.paymentMethodSelectionScreenConfig$.set(ne), this.sellerDetails$.set(_), this.paymentSheetButtonCta$.set(re)
                        }), {
                            client_secret: d,
                            publishable_key: f
                        })
                    } catch (e) {
                        throw M({
                            conversation: this.conversation,
                            checkoutId: c.id,
                            connectorId: a,
                            messageId: this.chatSDK$()?.toolMessageId ?? null
                        }, `error_thrown_from_endpoint`, e instanceof Error ? e.message : `Unknown error`), e
                    }
                }), this.conversation = e
            }
        }, Ve = ne(e => new Be(e))
    }));
export {
    E as _, Q as a, R as c, I as d, N as f, O as g, pe as h, K as i, j as l, L as m, He as n, $ as o, P as p, Re as r, Le as s, Ve as t, F as u, k as v
};
//# sourceMappingURL=824d80d7-hmb8gzxsyz4knpey.js.map