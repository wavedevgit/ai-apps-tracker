import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ait as t,
    Btt as n,
    Dit as r,
    Htt as i,
    Pit as a,
    a7 as o,
    iy as s,
    kit as c,
    l7 as l,
    qv as u,
    ynt as d
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as f
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    CIn as p,
    F3t as m,
    NBn as h,
    SIn as g,
    kBn as _
} from "./conversation-small-fym1zmu9zimymmm1.js";
var v, y, b, x, S = e((() => {
        a(), c(), l(), v = async e => await o.safePost(`/shopping/customer`, {
            requestBody: {
                items: e.map(e => ({
                    id: e.id,
                    value: e.value,
                    quantity: e.quantity
                }))
            },
            authOption: t.SendIfAvailable
        }), y = async ({
            conversationId: e,
            sharedConversationUrl: n,
            existing_customer_session_client_secret: r,
            items: i,
            cart: a
        }) => {
            let s = {
                    items: a ? void 0 : (i ?? []).map(e => ({
                        id: e.id,
                        value: e.value,
                        quantity: e.quantity
                    })),
                    cart: a,
                    conversation_id: e,
                    shared_conversation_url: n,
                    existing_customer_session_client_secret: r
                },
                c = async () => await o.safePost(`/shopping/checkout`, {
                    requestBody: s,
                    authOption: t.SendIfAvailable
                });
            try {
                return await c()
            } catch {
                return await c()
            }
        }, b = async (e, {
            shippingMethodId: n,
            shippingAddress: i,
            items: a
        }) => {
            let s = performance.now(),
                c = {
                    items: a.map(e => ({
                        id: e.id,
                        value: e.value,
                        quantity: e.quantity
                    }))
                };
            n != null && (c.shipping_option_id = n), i != null && (c.shipping_address = {
                name: i.name ?? void 0,
                line_one: i.addressLine1 ?? void 0,
                line_two: i.addressLine2,
                city: i.city,
                state: i.state,
                postal_code: i.postalCode,
                country: i.country,
                phone_number: i.phoneNumber ?? void 0
            }), c.items = a.map(e => ({
                id: e.id,
                value: e.value,
                quantity: e.quantity
            }));
            let l = await o.safePatch(`/shopping/checkout/{checkout_session_id}/update`, {
                parameters: {
                    path: {
                        checkout_session_id: e
                    }
                },
                requestBody: c,
                authOption: t.SendIfAvailable
            });
            return r.addAction(`shopping_checkout.update`, {
                durationMs: performance.now() - s
            }), l
        }, x = async (e, n, r, i, a) => await o.safePost(`/shopping/checkout/{checkout_session_id}/complete`, {
            parameters: {
                path: {
                    checkout_session_id: e
                }
            },
            requestBody: {
                items: n.map(e => ({
                    id: e.id,
                    value: e.value,
                    quantity: e.quantity
                })),
                payment_method: r,
                attempt_id: i,
                shipping_address: a
            },
            authOption: t.SendIfAvailable
        })
    })),
    C, w = e((() => {
        C = {
            cartUpdateShippingAddressErrorMessage: {
                id: `cart.updateShippingAddressError`,
                defaultMessage: `Failed to update shipping address. Please try again.`,
                description: `Error message shown when failed to update shipping address`
            },
            cartUpdateGeneralErrorMessage: {
                id: `cart.updateGeneralError`,
                defaultMessage: `Failed to update the cart. Please try again.`,
                description: `Error message shown when failed to update the cart`
            },
            cartUpdateGeneralErrorRetryMessage: {
                id: `cart.updateGeneralErrorRetry`,
                defaultMessage: `Failed to update the cart. Please close the cart and try again.`,
                description: `Error message shown when failed to update the cart`
            },
            cartUpdateQuantityErrorMessage: {
                id: `cart.updateQuantityError`,
                defaultMessage: `Failed to update cart quantity. Please try again.`,
                description: `Error message shown when failed to update cart quantity`
            },
            stripeLoadingPaymentMethodError: {
                id: `cart.stripeLoadingPaymentMethodError`,
                defaultMessage: `Failed to load previous payment method. Please add a new payment method.`,
                description: `Error message for failed to load payment method`
            },
            stripeLoadingShippingAddressError: {
                id: `cart.stripeLoadingShippingAddressError`,
                defaultMessage: `Failed to load previous shipping address. Please enter a new shipping address.`,
                description: `Error message for failed to load shipping address`
            },
            stripeLoadingBillingAddressError: {
                id: `cart.stripeLoadingBillingAddressError`,
                defaultMessage: `Failed to load previous billing address. Please enter a new billing address.`,
                description: `Error message for failed to load billing address`
            },
            cartAgreementsRequiredErrorMessage: {
                id: `cart.updateAgreementsError`,
                defaultMessage: `Please check the {count, plural, one {box} other {boxes}} to agree before continuing.`,
                description: `Message to show when the user has not accepted all required agreements`
            }
        }
    })),
    T, E, D, O, k = e((() => {
        i(), p(), T = (e, t, r, i, a) => {
            if (!i) return;
            let o = r.find(e => e.id === i);
            n.logEventWithStatsig(`product_checkout`, `product_checkout`, {
                ...g(e.cartMetadata ?? {}),
                checkout_id: t,
                prefill: a === `prefill`,
                action: e.shippingMethodId ? `shipping_method_updated` : `shipping_method_added`,
                shipping_method_name: o?.title,
                shipping_method_price: o?.subtotal,
                shipping_method_index: r.findIndex(e => e.id === i)
            })
        }, E = (e, t, r, i) => {
            n.logEventWithStatsig(`product_checkout`, `product_checkout`, {
                ...g(e.cartMetadata ?? {}),
                checkout_id: t,
                prefill: i === `prefill`,
                action: e.shippingAddress ? `shipping_address_updated` : `shipping_address_added`,
                shipping_city: r?.city,
                shipping_state: r?.state,
                shipping_postal_code: r?.postalCode,
                shipping_country: r?.country
            })
        }, D = (e, t, r) => {
            n.logEventWithStatsig(`product_checkout`, `product_checkout`, {
                ...g(e.cartMetadata ?? {}),
                checkout_id: e.cartId,
                credit_card_type: t,
                prefill: r === `prefill`,
                action: e.paymentDetails?.paymentMethodId ? `payment_method_updated` : `payment_method_added`
            })
        }, O = (e, t) => {
            n.logEventWithStatsig(`product_checkout`, `product_checkout`, {
                ...g(e.cartMetadata ?? {}),
                checkout_id: e.cartId,
                credit_card_type: t,
                action: `payment_method_removed`
            })
        }
    })),
    A = e((() => {
        f()
    })),
    j, M = e((() => {
        m(), s(), d(), A(), S(), f(), j = (e, t) => {
            let [n, r] = window.location.hash.split(`?`), i = new URLSearchParams(r);
            t ? i.set(`order`, t) : i.delete(`order`), e(`#settings/${u.Orders}${i.toString()?`?${i.toString()}`:``}`, {
                replace: !0
            })
        }
    }));

function N(e, t, n) {
    return {
        name: t,
        addressLine1: e.line1,
        addressLine2: e.line2,
        city: e.city,
        state: e.state,
        postalCode: e.postal_code,
        country: e.country,
        phoneNumber: n ?? void 0
    }
}

function P(e, t) {
    return {
        name: e.name,
        address: {
            line1: e.addressLine1,
            line2: e.addressLine2,
            city: e.city,
            state: e.state,
            postal_code: e.postalCode,
            country: e.country ?? ``
        },
        phone: t ? e.phoneNumber : void 0
    }
}

function F(e) {
    return {
        name: e.name,
        line_one: e.addressLine1,
        line_two: e.addressLine2,
        city: e.city,
        state: e.state,
        postal_code: e.postalCode,
        country: e.country ?? ``,
        phone_number: e.phoneNumber
    }
}

function I(e) {
    return {
        name: e.name ?? null,
        addressLine1: e.line_one ?? null,
        addressLine2: e.line_two ?? null,
        city: e.city ?? null,
        state: e.state ?? null,
        postalCode: e.postal_code ?? null,
        country: e.country ?? null,
        phoneNumber: e.phone_number ?? void 0
    }
}
var L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z = e((() => {
    h(), i(), p(), c(), w(), k(), M(), S(), L = e => e.every(e => `metadata` in e ? e.metadata?.isDigital : !0), R = e => {
        let t = e;
        return {
            paymentMethodId: t.value.payment_method?.id,
            paymentMethodType: t.value.payment_method?.type,
            label: t.preview?.label ?? ``,
            sublabel: t.preview?.sublabel ?? ``,
            icon: t.preview?.icon ?? null
        }
    }, z = async ({
        store: e,
        fields: t,
        errorMessage: r,
        onLocalMutationComplete: i,
        source: a,
        skipLogging: o
    }) => {
        try {
            e.setCartStatus(`updating`), t.shippingAddress && (o || E(e, e.cartId, t.shippingAddress, a), e.setShippingAddress(t.shippingAddress)), t.shippingMethodId && (o || T(e, e.cartId, e.shippingOptions, t.shippingMethodId, a), e.setShippingMethodId(t.shippingMethodId)), i?.();
            let r = await b(e.cartId, t);
            r.cart.errors.length > 0 && n.logEventWithStatsig(`product_checkout`, `product_checkout`, {
                ...g(e.cartMetadata ?? {}),
                action: `cart_update_failed`,
                reason: `bad_response_from_endpoint`,
                error_message: JSON.stringify(r.cart.errors)
            }), e.updateCart(r)
        } catch (t) {
            n.logEventWithStatsig(`product_checkout`, `product_checkout`, {
                ...g(e.cartMetadata ?? {}),
                action: `cart_update_failed`,
                reason: `error_response_from_endpoint`,
                error_message: t
            }), e.setErrors([{
                group: `general`,
                message: r
            }]), e.setCartStatus(`idle`)
        }
    }, B = (e, t) => {
        e.cartStatus !== `submitting` && (e.closeCheckout(!0), n.logEventWithStatsig(`product_checkout`, `product_checkout`, {
            ...g(e.cartMetadata ?? {}),
            checkout_id: e.cartId,
            reason: t,
            action: `abandoned`
        }), r.addAction(`shopping_checkout.abandoned`, {
            merchant_id: e.merchant?.externalId,
            merchant_network_id: e.merchant?.networkId,
            cart_total: e.grandTotal.value,
            reason: t
        }))
    }, V = (e, t) => {
        let n = (r = 3, i = 1) => {
            let a = H(e);
            if (a) {
                let e = U(a);
                if (e) {
                    let t = a.getBoundingClientRect(),
                        n = e.getBoundingClientRect();
                    e.scrollTo({
                        top: t.top - n.top + e.scrollTop,
                        behavior: `smooth`
                    })
                } else a.scrollIntoView({
                    behavior: `smooth`
                });
                t?.()
            } else r > 1 && setTimeout(() => n(r - 1, i + 1), 200 * i)
        };
        setTimeout(() => n(), 50)
    }, H = e => document.querySelector(`[data-order-id="${e}"]`), U = e => {
        let t = e.parentElement;
        for (; t;) {
            let {
                overflowY: e
            } = window.getComputedStyle(t);
            if (e === `auto` || e === `scroll`) return t;
            t = t.parentElement
        }
        return null
    }, W = (e, t, n) => L(e) ? [{
        id: `na`,
        amount: 0,
        displayName: n.formatMessage({
            id: `tLRVwj`,
            defaultMessage: `Digital delivery`
        })
    }] : t.map(e => ({
        id: e.id,
        amount: e.subtotal_minor,
        displayName: e.title
    })), G = 1e3, K = async ({
        store: e,
        order: t,
        navigate: n
    }) => {
        let i = !1;
        e.setCartStatus(`complete`);
        let a = performance.now();
        t.conversation_id && await _(t.conversation_id, {
            forceNetworkFetch: !0,
            source: `shopping_checkout_complete`
        }), performance.now() - a < G && (H(e.cartId) && (i = !0, r.addAction(`shopping_checkout.receipt`, {
            durationMs: performance.now() - a,
            merchant_id: e.merchant?.externalId,
            merchant_network_id: e.merchant?.networkId
        })), await new Promise(e => setTimeout(e, G - (performance.now() - a)))), t.conversation_id ? V(e.cartId, () => {
            i || r.addAction(`shopping_checkout.receipt`, {
                durationMs: performance.now() - a,
                merchant_id: e.merchant?.externalId,
                merchant_network_id: e.merchant?.networkId
            })
        }) : j(n, t.id)
    }, q = (e, t) => {
        let n = !e.additionalFields?.includes(`shipping_address_phone_number`) || !!t?.phoneNumber;
        return !!t?.complete && !!t?.addressLine1 && n
    }, J = e => !e || !e.some(e => e.is_required && !e.is_checked), Y = (e, t) => J(e.agreements) ? !0 : (X(e, t), !1), X = (e, t) => {
        e.setErrors([{
            group: `general`,
            message: t.formatMessage(C.cartAgreementsRequiredErrorMessage, {
                count: e.agreements?.filter(e => e.is_required).length
            })
        }])
    }
}));
export {
    x as C, b as D, S as E, w as S, v as T, D as _, J as a, T as b, F as c, N as d, R as f, k as g, Y as h, K as i, P as l, z as m, B as n, Z as o, X as p, W as r, q as s, L as t, I as u, O as v, y as w, C as x, E as y
};
//# sourceMappingURL=6fd89734-camj98pxrr936jpu.js.map