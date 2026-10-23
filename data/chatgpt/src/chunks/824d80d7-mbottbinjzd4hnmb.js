const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/6a801ab1-cg43olwaosm0s7gy.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-mdvd4786a87166cc.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-bcbq46iub1p0ca1t.js", "assets/30901919-s8bko9nrkqwv6i4f.js", "assets/c470f5ab-jwd0o7jx9i9say9k.js", "assets/0e5afe53-hxm3yzzjqriayom4.js", "assets/conversation-small-ep6mlz5m.css", "assets/c2675c8c-oz03twoan08d72ud.js", "assets/82782bc9-b4xbouzwkkyrfqq2.js", "assets/8b34dbc2-lmwubajnld74ksfm.js", "assets/global-modals-dxg9ukpk.css", "assets/f254c486-fp3zemoro6u0ho9f.js", "assets/6fd89734-yboteogplx9e2x4r.js", "assets/3a792387-oatpqkn2u97o3mhg.js", "assets/411304d4-b57qxssehyucc3t3.js", "assets/f4a8359c-ksribxeyvjlrakom.js", "assets/3e574439-njvhxdk9cfxaurqk.js", "assets/25a66342-babsu7zrrg2k0adu.js", "assets/2ea88c7a-lxyla91xs6iv7odf.js", "assets/25a66342-j7cd8h2bqav7weve.js"]))) => i.map(i => d[i]);
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    Att as n,
    Btt as r,
    F8 as i,
    Ftt as a,
    Htt as o,
    I7 as s,
    Itt as c,
    Jot as l,
    Knt as ee,
    M7 as te,
    Ntt as u,
    Ptt as d,
    R8 as f,
    Rtt as p,
    Vtt as m,
    Wnt as ne,
    Wtt as h,
    Yot as g,
    _F as _,
    a2 as v,
    c2 as y,
    cot as re,
    d2 as ie,
    dF as ae,
    hst as b,
    mst as oe,
    not as se,
    o2 as ce,
    p5 as x,
    vF as le,
    ztt as S
} from "./4813494d-mdvd4786a87166cc.js";
import {
    cn as ue,
    ln as de
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    MLn as fe,
    NLn as pe
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    n as me,
    r as he
} from "./f254c486-fp3zemoro6u0ho9f.js";

function ge(e) {
    if (!(e instanceof se)) return null;
    let t = e.json?.errors ?? e.detail?.errors,
        n = w(t);
    return n ? n.original_error ?? n : null
}
var C, w, T, E, D = e((() => {
        re(), C = e => !!e && typeof e == `object` && e.should_display === !1 && `original_error` in e, w = e => Array.isArray(e) ? e.find(C) ?? null : null, T = e => !!e && typeof e == `object` && e.should_display === !0, E = e => Array.isArray(e) ? e.filter(T).map(e => e.original_error).filter(Boolean) : []
    })),
    O, k, A, j, M, N, P, F, I = e((() => {
        le(), ee(), pe(), O = ({
            conversation: e,
            checkoutId: t,
            connectorId: n,
            messageId: r
        }, i) => {
            ne.logEventWithStatsig(`product_checkout`, `product_checkout`, {
                ...fe({
                    clientThreadId: _(e),
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
        n(), me(), Te(), V = a({
            id: h,
            item: a({
                id: h,
                quantity: r
            }),
            name: h,
            description: h,
            images: u(h),
            base_amount: r,
            discount: r,
            subtotal: r,
            tax: r,
            total: r
        }), H = a({
            type: d(Ce),
            display_text: h,
            amount: r
        }), Ee = a({
            id: h,
            type: () => `shipping`,
            title: h,
            subtitle: h,
            subtotal: r,
            tax: r,
            total: r,
            carrier: h,
            earliest_delivery_time: h,
            latest_delivery_time: h
        }), De = a({
            id: h,
            type: () => `digital`,
            title: h,
            subtitle: h,
            subtotal: r,
            tax: r,
            total: r
        }), U = e => {
            switch (p(o(e)?.type, Se)) {
                case `shipping`:
                    return Ee(e);
                case `digital`:
                    return De(e)
            }
        }, W = d(xe), Oe = a({
            type: () => `info`,
            param: h,
            content_type: W,
            content: h
        }), G = a({
            type: () => `error`,
            code: d(ye),
            param: h,
            content_type: W,
            content: h
        }), ke = e => {
            let t = o(e, {}),
                n = {};
            for (let [e, r] of Object.entries(t)) typeof r == `string` && (n[e] = r);
            return n
        }, K = e => {
            switch (p(o(e)?.type, be)) {
                case `info`:
                    return Oe(e);
                case `error`:
                    return G(e)
            }
        }, q = a({
            type: d(ve),
            url: h
        }), J = a({
            name: h,
            line_one: h,
            line_two: h,
            city: h,
            state: h,
            country: e => he(e) ?? `US`,
            postal_code: h
        }), Ae = a({
            id: h,
            checkout_session_id: h,
            permalink_url: h
        }), Y = e => p(h(e).toLowerCase(), z), X = e => p(h(e).toLowerCase(), _e, `unknown`), je = e => {
            let t = o(e);
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
            return u(je)(t)
        }, Ne = a({
            id: h,
            type: Y,
            display_name: h,
            display_last4: h,
            display_brand: X
        }), Pe = a({
            merchant_id: h,
            provider: d(R),
            supported_payment_methods: Me,
            managed_payment_methods: u(Ne)
        }), Z = e => h(e).toUpperCase(), Fe = d(we), Q = a({
            id: h,
            payment_provider: Pe,
            payment_mode: Fe,
            status: d(B),
            currency: Z,
            metadata: m(ke),
            line_items: u(V),
            totals: u(H),
            fulfillment_options: u(U),
            fulfillment_address: S(J),
            fulfillment_option_id: m(h),
            messages: u(K),
            links: u(q)
        }), Ie = a({
            id: h,
            buyer: a({
                email: h,
                phone_number: m(h)
            }),
            status: d(B),
            currency: Z,
            line_items: u(V),
            totals: u(H),
            fulfillment_options: u(U),
            fulfillment_address: S(J),
            fulfillment_option_id: m(h),
            messages: u(K),
            links: u(q),
            order: m(Ae),
            continue_url: m(S(h))
        }), $ = e => {
            let t = Ie(e);
            if (t.status === `completed` && t.order == null) throw Error(`Missing order in complete checkout response for completed status`);
            return t
        }, Le = e => {
            let t = e.response,
                n = o(t);
            return $(n)
        }
    })),
    ze, Be, Ve, He = e((() => {
        D(), I(), Re(), le(), y(), t(), oe(), s(), ce(), g(), de(), ze = v(() => ue(() => import(`./6a801ab1-cg43olwaosm0s7gy.js`).then(e => e.EcosystemCheckoutModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]))), Be = class {
            constructor(e) {
                l(this, `conversation`, void 0), l(this, `checkoutPromise$`, f(null)), l(this, `chatSDK$`, f(null)), l(this, `resolvedWidget$`, f(null)), l(this, `isLoadingPayment$`, f(!0)), l(this, `checkoutSession$`, f(null)), l(this, `grandTotal$`, i(() => this.checkoutSession$()?.totals.find(e => e.type === `total`))), l(this, `status$`, f(`idle`)), l(this, `messages$`, f([])), l(this, `errorMessages$`, i(() => this.messages$().filter(e => e.type === `error`))), l(this, `paymentDetails$`, f(null)), l(this, `managedPaymentMethodDetails$`, f([])), l(this, `savedPaymentMethodDetails$`, f([])), l(this, `paymentMethodSelectionScreenConfig$`, f(null)), l(this, `paymentTypes$`, f([])), l(this, `allowedCountries$`, f([])), l(this, `paymentSheetButtonCta$`, f(``)), l(this, `publishableKey$`, f(null)), l(this, `customerId$`, f(null)), l(this, `footerMessage$`, f(null)), l(this, `sellerDetails$`, f(null)), l(this, `orderId$`, f(null)), l(this, `billingAddress$`, f(null)), l(this, `billingAddressComplete$`, i(() => this.billingAddress$() ? !!this.billingAddress$()?.name && !!this.billingAddress$()?.line_one && !!this.billingAddress$()?.city && !!this.billingAddress$()?.state && !!this.billingAddress$()?.country && !!this.billingAddress$()?.postal_code : !1)), l(this, `toPaymentMethodDetails`, e => (e ?? []).map(e => ({
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
                    x(() => {
                        this.checkoutPromise$.set({
                            resolve: r,
                            reject: i
                        }), this.chatSDK$.set(e), this.resolvedWidget$.set(t), this.checkoutSession$.set(n), this.billingAddress$.set(n.fulfillment_address ?? null), this.paymentDetails$.set(null), ie(ze, {
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
                })), l(this, `closeCheckout`, () => x(() => {
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
                            customer_id: ee,
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
                        } = await te.safePost(`/shopping/ecosystem/checkout_v2`, {
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
                        }), y = w(l?.errors);
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
                        }) : (x(() => {
                            this.orderId$.set(u), this.footerMessage$.set(l?.footer_level_message ?? null), this.publishableKey$.set(f), this.customerId$.set(ee), this.paymentTypes$.set(m?.filter(e => e.surface === `payment_sheet`).flatMap(e => e.types) ?? []), this.allowedCountries$.set(p), this.managedPaymentMethodDetails$.set(this.toPaymentMethodDetails(ne)), this.savedPaymentMethodDetails$.set(this.toPaymentMethodDetails(h)), this.paymentMethodSelectionScreenConfig$.set(g), this.sellerDetails$.set(_), this.paymentSheetButtonCta$.set(v)
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
        }, Ve = ae(e => new Be(e))
    }));
export {
    w as _, Q as a, I as c, P as d, j as f, E as g, ge as h, K as i, k as l, F as m, He as n, $ as o, M as p, Re as r, Le as s, Ve as t, N as u, D as v
};
//# sourceMappingURL=824d80d7-mbottbinjzd4hnmb.js.map