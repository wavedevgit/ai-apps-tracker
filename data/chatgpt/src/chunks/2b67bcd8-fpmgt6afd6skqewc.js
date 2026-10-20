import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A0 as t,
    C8 as n,
    CB as r,
    Cat as i,
    EJ as a,
    FC as o,
    Fat as s,
    Hnt as c,
    I0 as l,
    I8 as u,
    IB as d,
    L8 as f,
    Mrt as p,
    PC as m,
    Qu as h,
    R7 as ee,
    Sot as te,
    Wnt as ne,
    Xnt as re,
    Xu as g,
    _ot as ie,
    b8 as _,
    dat as ae,
    drt as oe,
    fF as se,
    h5 as v,
    h8 as ce,
    iF as y,
    lrt as le,
    met as ue,
    nY as de,
    o5 as fe,
    oF as b,
    qJ as x,
    rd as S,
    uat as C,
    urt as pe,
    vat as me,
    wJ as he,
    x5 as w,
    x9 as ge,
    xot as T,
    yat as _e
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    $Zt as E,
    BSt as ve,
    Dmt as ye,
    Emt as be,
    JZt as xe,
    LSt as Se,
    Mlt as Ce,
    PQt as we,
    QZt as Te,
    RSt as Ee,
    Tmt as De,
    Uwt as Oe,
    Vwt as ke,
    YFn as Ae,
    YZt as D,
    ZFn as O,
    bmt as je,
    cVn as Me,
    hmt as Ne,
    jlt as Pe,
    lVn as Fe,
    nIn as Ie,
    vmt as Le
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    a as Re,
    i as ze,
    n as Be,
    r as Ve,
    t as He
} from "./2f772deb-i8iagtnmm0oa4tfr.js";

function Ue(e) {
    return e == null || r({
        turns: g(e)
    }) == null ? `enriched` : ge() ? `source_catalog` : `enriched`
}
var We = e((() => {
    d(), ue(), h()
}));

function Ge() {
    return `${C}/search/product_info_variants`
}
var Ke = e((() => {
    ae(), we()
}));
async function* qe({
    reference: e,
    messageId: t,
    locale: n,
    signal: r
}) {
    let a = !1;
    for await (let i of Be({
        requestBody: ze({
            conversationId: e.conversationId,
            sharedConversationId: e.sharedConversationId,
            messageId: t,
            category: `product`,
            refId: e.refId,
            locale: n
        }),
        signal: r,
        isAuthOptional: !1,
        requestContext: e
    })) {
        if (r.aborted) return;
        if (!a && i.type === `message`) {
            let t = i.data.metadata?.content_references?.find(e => e.type === `product_entity`);
            t?.type === `product_entity` && (a = !0, yield t, r.aborted || e.onResolved?.(t))
        }
        yield* Xe(i)
    }
    if (!a && !r.aborted) throw Error(i)
}
async function Je({
    productLookupKey: e,
    onProductEntity: t
}) {
    let n = D(Ge(), {
            method: `POST`,
            headers: {
                ...p({
                    isAuthOptional: !0
                })
            },
            body: {
                product_lookup_key: e
            },
            routeName: `/search/product_info_variants`
        }),
        r;
    for await (let e of n)`data` in e && (r = e.data, t?.(r));
    return r
}
async function* Ye({
    conversationId: e,
    messageId: t,
    productQuery: n,
    productLookupKey: r,
    isGenericProductSidebarEnabled: i,
    persistConversationToUser: a,
    rewrittenQueries: o,
    cacheOnly: s = !1
}) {
    let c = !!r?.variant_options_query,
        l = {
            conversation_id: e,
            message_id: t,
            supported_encodings: [ie.V1],
            ...i && !c ? {
                category: `generic_entity`,
                generic_entity_params: {
                    name: n,
                    category: `product_rationale_and_reviews`,
                    ...r || o ? {
                        extra_params: {
                            ...r ? {
                                product_lookup_key: r
                            } : {},
                            ...o ? {
                                rewritten_queries: o
                            } : {}
                        }
                    } : {}
                }
            } : {
                category: `product`,
                product_params: {
                    product_query: n,
                    ...r ? {
                        product_lookup_key: r
                    } : {}
                }
            },
            ...a ? {
                debug_params: {
                    persist_conversation_to_user: a
                }
            } : {}
        },
        u = s ? `/sidebar/product/conversation/cache` : `/sidebar/conversation`,
        d = D(`${C}${u}`, {
            method: `POST`,
            headers: {
                ...p({
                    isAuthOptional: !0
                }),
                "Content-Type": `application/json`
            },
            body: l,
            routeName: u
        }),
        f = !1;
    for await (let e of Te(d)) {
        if (!(`data` in e)) continue;
        let t = e.data;
        if (t.type === `__debug`) {
            if (f) continue;
            f = !0
        }
        yield* Xe(t)
    }
}

function* Xe(e) {
    if (e.type === `__debug`) {
        let {
            conversation_id: t,
            thread_id: n
        } = e.data;
        if (!t && !n) return;
        yield {
            type: `__debug`,
            data: {
                ...t ? {
                    conversation_link: `/c/${t}`
                } : {},
                ...n ? {
                    sidebar_conversation_sonic_thread_id: n
                } : {}
            }
        };
        return
    }
    yield e;
    for (let t of e.data.metadata?.content_references ?? [])(t.type === `product_reviews` || t.type === `product_rationale`) && (yield t)
}
async function* Ze({
    productQuery: e,
    productLookupKey: t,
    ledgerSource: n
}) {
    let r = D(`${C}/search/product_update`, {
        method: `POST`,
        headers: {
            ...p({
                isAuthOptional: !0
            }),
            ...n ? he({
                conversationId: n.conversation_id
            }) : void 0,
            "Content-Type": `application/json`
        },
        body: {
            product_query: e,
            ...t ? {
                product_lookup_key: t
            } : {},
            ...n ? {
                ledger_source: n
            } : {}
        },
        routeName: `/search/product_update`
    });
    try {
        for await (let e of r)`data` in e && (yield e.data)
    } catch (e) {
        if (n) throw e;
        console.warn(`requestProductUpdate stream failed`, e)
    }
}
var Qe = e((() => {
        a(), He(), Re(), s(), ae(), E(), ee(), xe(), Ke()
    })),
    $e, k, A, et = e((() => {
        le(), re(), te(), $e = {
            fetch_to_all_offers: `product_sidebar_fetch_to_all_offers_ms`,
            fetch_to_first_offer: `product_sidebar_fetch_to_first_offer_ms`,
            render_time_to_all_offers: `product_sidebar_render_to_all_offers_ms`,
            render_time_to_first_offer: `product_sidebar_render_to_first_offer_ms`,
            render_time_to_first_review: `product_sidebar_time_to_reviews_ms`,
            render_time_to_rationale: `product_sidebar_time_to_rationale_ms`
        }, k = new WeakMap, A = class {
            constructor() {
                T(this, `startMs`, performance.now()), T(this, `loggedTimings`, new Set), T(this, `loggedRenderOfferTimings`, new Set)
            }
            reset(e) {
                if (this.startMs = performance.now(), this.loggedTimings.clear(), e == null) {
                    this.loggedRenderOfferTimings = new Set;
                    return
                }
                let t = k.get(e.conversation);
                t ?? (t = new Map, k.set(e.conversation, t));
                let n = JSON.stringify([e.messageId, e.productKey]),
                    r = t.get(n);
                r ?? (r = new Set, t.set(n, r)), this.loggedRenderOfferTimings = r
            }
            logRenderOfferTimings(e, t, n = !1) {
                if (!e) return;
                let r = n ? 0 : void 0;
                this.loggedRenderOfferTimings.has(`render_time_to_first_offer`) || (this.logTimingOnce(`render_time_to_first_offer`, r), this.loggedRenderOfferTimings.add(`render_time_to_first_offer`)), t && !this.loggedRenderOfferTimings.has(`render_time_to_all_offers`) && (this.logTimingOnce(`render_time_to_all_offers`, r), this.loggedRenderOfferTimings.add(`render_time_to_all_offers`))
            }
            hasLoggedTiming(e) {
                return this.loggedTimings.has(e)
            }
            logTimingOnce(e, t) {
                if (this.hasLoggedTiming(e)) return;
                let n = t ?? performance.now() - this.startMs;
                pe.hist(oe.SHOPPING, `product_sidebar_timing_duration_ms`, {
                    timing: e
                }, n);
                let r = $e[e];
                r && c.logEvent(r, n), this.loggedTimings.add(e)
            }
        }
    }));

function tt() {
    return `${Date.now()}:${Math.random().toString(36).slice(2)}`
}

function nt(e, t) {
    return e ? t ? {
        ...e,
        ...t,
        data: {
            ...e.data,
            ...t.data
        }
    } : e : t
}

function rt(e) {
    return {
        ...e,
        data: {
            ...e.data,
            ...e.data.sonic_thread_id ? {
                product_update_sonic_thread_id: e.data.sonic_thread_id
            } : {}
        }
    }
}
var it, at, ot, st = e((() => {
    et(), ce(), te(), it = class {
        constructor() {
            T(this, `product$`, n(void 0)), T(this, `rationale$`, n(void 0)), T(this, `reviews$`, n(void 0)), T(this, `debug$`, n(void 0)), T(this, `loading$`, n(!1)), T(this, `status$`, n(`idle`)), T(this, `requestToken$`, n(null)), T(this, `error$`, n(void 0)), T(this, `requestKey`, null), T(this, `inFlightPromise`, null), T(this, `profiler`, null), T(this, `cacheOnly`, !1)
        }
        ensureStarted(e) {
            return w(() => this.loading$() && this.requestKey === e.requestKey) ? this.cacheOnly && e.cacheOnly !== !0 ? (this.inFlightPromise ?? Promise.resolve()).then(() => this.ensureStarted(e), () => this.ensureStarted(e)) : this.inFlightPromise ?? Promise.resolve() : w(() => this.status$() === `success` && this.requestKey === e.requestKey) ? Promise.resolve() : this.startStream({
                requestKey: e.requestKey,
                cacheOnly: e.cacheOnly,
                stream: e.requestFn(e)
            })
        }
        ownsRequestKey(e) {
            return this.requestKey === e
        }
        get completion() {
            return this.inFlightPromise ?? Promise.resolve()
        }
        startStream(e) {
            let t = tt();
            this.requestKey = e.requestKey, this.cacheOnly = e.cacheOnly === !0, this.profiler = this.cacheOnly ? null : new A, v(() => {
                this.loading$.set(!0), this.status$.set(`loading`), this.requestToken$.set(t), this.error$.set(void 0)
            });
            let n = this.run(t, e);
            return this.inFlightPromise = n, n
        }
        cancel(e) {
            w(() => this.requestToken$()) === e && (this.requestKey = null, v(() => {
                this.requestToken$.set(null), this.loading$.set(!1), this.status$.set(`idle`), this.inFlightPromise = null
            }))
        }
        async run(e, t) {
            try {
                let n = !1;
                for await (let r of t.stream) if (w(() => this.requestToken$()) === e) switch (r.type) {
                    case `product_entity`:
                        v(() => this.product$.set(r.product));
                        break;
                    case `product_rationale`:
                        n = !0, v(() => {
                            this.rationale$.set(r)
                        }), this.profiler?.logTimingOnce(`time_to_rationale`);
                        break;
                    case `product_reviews`:
                        n = !0, v(() => {
                            this.reviews$.set(r)
                        }), this.profiler?.logTimingOnce(`time_to_first_review`);
                        break;
                    case `__debug`:
                        v(() => {
                            this.debug$.set(nt(this.debug$(), r))
                        });
                        break;
                    default:
                        break
                }
                w(() => this.requestToken$() === e) && v(() => {
                    this.loading$.set(!1), this.status$.set(t.cacheOnly && !n ? `idle` : `success`)
                })
            } catch (t) {
                throw w(() => this.requestToken$() === e) && v(() => {
                    this.loading$.set(!1), this.status$.set(`error`), this.error$.set(t)
                }), t
            } finally {
                w(() => this.requestToken$() === e) && v(() => {
                    this.requestToken$.set(null), this.inFlightPromise = null
                })
            }
        }
    }, at = class {
        constructor(e) {
            T(this, `deps`, void 0), T(this, `entity$`, n(void 0)), T(this, `debug$`, n(void 0)), T(this, `loading$`, n(!1)), T(this, `status$`, n(`idle`)), T(this, `requestToken$`, n(null)), T(this, `error$`, n(void 0)), T(this, `requestKey`, null), T(this, `inFlightPromise`, null), T(this, `profiler`, null), this.deps = e
        }
        ensureStarted(e) {
            return w(() => this.loading$() && this.requestKey === e.requestKey) ? this.inFlightPromise ?? Promise.resolve() : w(() => this.status$() === `success` && this.requestKey === e.requestKey) ? Promise.resolve() : this.start(e)
        }
        start(e) {
            let t = tt();
            this.requestKey = e.requestKey, this.profiler = new A, v(() => {
                this.loading$.set(!0), this.status$.set(`loading`), this.requestToken$.set(t), this.error$.set(void 0)
            });
            let n = this.run(t, e);
            return this.inFlightPromise = n, n
        }
        async run(e, t) {
            try {
                for await (let n of t.requestProductEntity({
                    conversationId: t.conversationId,
                    messageId: t.messageId,
                    shellProduct: t.shellProduct,
                    productLookupKey: t.productLookupKey
                })) if (w(() => this.requestToken$() === e)) switch (n.type) {
                    case `product_entity`: {
                        let e = this.deps.normalizeProductEntityCitation(n, t.productLookupKey);
                        v(() => {
                            this.entity$.set(e)
                        }), this.profiler?.logTimingOnce(`time_to_product_entity`), e.product.shopping_vto?.eligible === !0 && this.profiler?.logTimingOnce(`fetch_to_virtual_try_on_eligible`), (e.product.offers?.length ?? 0) > 0 && this.profiler?.logTimingOnce(`fetch_to_first_offer`), this.deps.applyProductEntityUpdate({
                            conversation: t.conversation,
                            shellProduct: t.shellProduct,
                            nextProduct: e.product
                        });
                        break
                    }
                    case `__debug`:
                        v(() => {
                            this.debug$.set(nt(this.debug$(), rt(n)))
                        });
                        break;
                    default:
                        break
                }
                w(() => this.requestToken$() === e) && (this.profiler?.hasLoggedTiming(`fetch_to_first_offer`) && this.profiler.logTimingOnce(`fetch_to_all_offers`), v(() => {
                    this.loading$.set(!1), this.status$.set(`success`)
                }))
            } catch (t) {
                w(() => this.requestToken$() === e) && v(() => {
                    this.loading$.set(!1), this.status$.set(`error`), this.error$.set(t)
                })
            } finally {
                w(() => this.requestToken$() === e) && v(() => {
                    this.requestToken$.set(null), this.inFlightPromise = null
                })
            }
        }
    }, ot = class {
        constructor() {
            T(this, `entity$`, n(void 0)), T(this, `loading$`, n(!1)), T(this, `status$`, n(`idle`)), T(this, `error$`, n(void 0)), T(this, `requestKey`, null), T(this, `inFlightPromise`, null)
        }
        ensureStarted(e) {
            return w(() => this.loading$() && this.requestKey === e.requestKey) ? this.inFlightPromise ?? Promise.resolve() : w(() => this.status$() === `success` && this.requestKey === e.requestKey) ? Promise.resolve() : this.start(e)
        }
        start(e) {
            this.requestKey = e.requestKey, v(() => {
                this.entity$.set(void 0), this.loading$.set(!0), this.status$.set(`loading`), this.error$.set(void 0)
            });
            let t = this.run(e);
            return this.inFlightPromise = t, t
        }
        async run(e) {
            try {
                let t;
                for await (let n of e.requestFn({
                    conversationId: e.conversationId,
                    messageId: e.messageId,
                    shellProduct: e.shellProduct
                })) t = n;
                if (t == null) throw Error(`Catalog product request returned no product entity`);
                v(() => {
                    this.entity$.set(t), this.loading$.set(!1), this.status$.set(`success`)
                })
            } catch (e) {
                v(() => {
                    this.entity$.set(void 0), this.loading$.set(!1), this.status$.set(`error`), this.error$.set(e)
                })
            } finally {
                this.inFlightPromise = null
            }
        }
    }
}));

function ct(e) {
    return typeof e == `object` && !!e
}
async function* lt({
    conversationId: e,
    messageId: t,
    shellProduct: n,
    signal: r,
    streamConversation: i = Ve
}) {
    let a = !1,
        o = [];
    if (await i({
            requestBody: {
                conversation_id: e,
                message_id: t,
                supported_encodings: [ie.V1],
                category: `generic_entity`,
                generic_entity_params: {
                    name: n.title,
                    category: `product`,
                    extra_params: {
                        product: n
                    }
                }
            },
            signal: r,
            onEvent: e => {
                if (e.type === `__debug` && e.data.entity_knowledge_source === `source_catalog`) {
                    a = !0;
                    return
                }
                if (e.type === `message`)
                    for (let t of e.data.metadata?.content_references ?? []) ct(t) && t.type === `product_entity` && ct(t.product) && o.push(t)
            }
        }), !a) throw Error(`Catalog product response was not source scoped`);
    let s = o.at(-1);
    if (s == null) throw Error(`Catalog product response did not include a product entity`);
    yield s
}
var ut = e((() => {
    He(), E()
}));

function j(e) {
    return Ie(e) ?? z(e)?.sidebar ?? null
}

function M(e, t) {
    let n = j(e);
    return n?.type === `product_agent` && n.reference && B(e) === t ? `enriched` : t.cite ? Ue(e) : `enriched`
}

function N(e) {
    return V(e) === `source_catalog`
}

function P(e) {
    return JSON.stringify([`reference`, e.reference?.conversationId, e.reference?.sharedConversationId, e.messageId, e.reference?.refId, e.reference?.projectId, e.reference?.ownerUserId])
}

function dt(e) {
    let t = j(e);
    return t?.type === `product_agent` && t.reference ? q(e, P(t)).status$() : `idle`
}

function F(e, t) {
    let n = j(e);
    if (n?.type === `product_agent` && n.reference) {
        let r = q(e, P(n)),
            i = r.product$();
        if (i && L(i) === t) return r
    }
    return q(e, t)
}

function ft({
    conversation: e,
    sidebar: t,
    locale: n
}) {
    let r = new AbortController,
        i = P(t),
        a = q(e, i),
        o = a.startStream({
            requestKey: i,
            stream: qe({
                reference: t.reference,
                messageId: t.messageId,
                locale: n,
                signal: r.signal
            })
        }),
        s = w(() => a.requestToken$());
    return {
        completion: o,
        cancel: () => {
            r.abort(), a.cancel(s)
        }
    }
}

function pt({
    messageId: e,
    productCitation: t
}) {
    return JSON.stringify([e, t ?? null])
}

function I(e) {
    if (!N(e)) return null;
    let t = j(e),
        n = B(e);
    return !O(t, `product_agent`) || n == null ? null : Y(e, pt({
        messageId: t.messageId,
        productCitation: n.cite
    }))
}

function mt(e) {
    return e.flatMap(e => {
        if (typeof e.url != `string`) return [];
        let t = _e(e.url.trim());
        return t?.protocol !== `https:` && t?.protocol !== `http:` ? [] : [ht(e)]
    })
}

function ht(e) {
    let t = {
            ...e
        },
        n = [`merchant_name`, `product_name`, `price`],
        r = [`merchant_subtitle`, `marketplace_seller`, `seller_name`, `brand`, `details`, `original_price`, `shop_id`, `provider`, `checkout_payload`];
    for (let e of n) typeof t[e] != `string` && (t[e] = ``);
    for (let e of r) {
        let n = t[e];
        n != null && typeof n != `string` && delete t[e]
    }
    let i = e.available,
        a = e.checkoutable;
    return t.available = typeof i == `boolean` && i, t.checkoutable = typeof a == `boolean` && a, e.is_digital != null && typeof e.is_digital != `boolean` && delete t.is_digital, t.checkoutable || delete t.checkout_payload, t
}

function gt(e, t) {
    let n = w(() => H(e));
    n != null && U(e, n).set(t)
}

function _t(e, t, n) {
    let r = L(t);
    K(e, r).set(n)
}

function vt(e, t, n) {
    gt(e, n(w(() => X(e) ?? t)))
}

function yt({
    conversation: e,
    shellProduct: t,
    updatedVariants: n,
    variantOptionsQuery: r,
    optionGroupId: i,
    productLookupKey: a
}) {
    vt(e, t, e => Bt({
        currentProduct: e,
        updatedVariants: n,
        variantOptionsQuery: r,
        optionGroupId: i,
        productLookupKey: a
    }))
}

function bt({
    conversation: e,
    shellProduct: t,
    nextProduct: n,
    productLookupKey: r,
    hasFetchedVariant: i = !0
}) {
    vt(e, t, e => Vt({
        currentProduct: e,
        nextProduct: n,
        productLookupKey: r
    })), _t(e, t, i)
}

function xt(e, t) {
    let n = w(() => H(e));
    n != null && v(() => {
        G(e, n).set(t)
    })
}

function L(e) {
    return e.id || e.query || e.title
}

function St({
    conversation: e,
    shellProduct: t,
    statefulProduct: n = t,
    conversationId: r,
    messageId: i,
    persistConversationToUser: a,
    requestProductInfo: o,
    cacheOnly: s
}) {
    if (w(() => M(e, t) === `source_catalog`)) return Promise.resolve();
    let c = L(t),
        l = n.product_lookup_key,
        u = w(() => It(e, i)),
        d = w(() => F(e, c)),
        f = Tt({
            conversationId: r,
            messageId: i,
            shellProduct: t,
            productLookupKey: l,
            rewrittenQueries: u
        }),
        p = w(() => Ie(e));
    if (p?.type === `product_agent` && p.reference?.conversationId === r && p.messageId === i && o == null && JSON.stringify(l?.variant_options_query ?? null) === JSON.stringify(t.product_lookup_key?.variant_options_query ?? null) && d.ownsRequestKey(P(p))) return d.completion;
    let m = o ?? (({
        conversationId: e,
        messageId: t,
        shellProduct: n,
        productLookupKey: r,
        rewrittenQueries: i,
        cacheOnly: o
    }) => Ye({
        conversationId: e,
        messageId: t,
        productQuery: n.title,
        productLookupKey: r,
        isGenericProductSidebarEnabled: !0,
        persistConversationToUser: a,
        rewrittenQueries: i,
        cacheOnly: o
    }));
    return d.ensureStarted({
        requestKey: f,
        requestFn: m,
        conversationId: r,
        messageId: i,
        shellProduct: t,
        productLookupKey: l,
        rewrittenQueries: u,
        cacheOnly: s
    })
}

function Ct(e) {
    return fe(() => e.shellProduct.id.startsWith(`query_mode_entity_${e.messageId}_`) ? o(e.conversation) : !1, () => {
        wt(e)
    }, {
        fireImmediately: !0
    })
}

function wt({
    conversation: e,
    shellProduct: t,
    conversationId: n,
    messageId: r,
    requestProductEntity: i,
    requestSourceCatalogProduct: a
}) {
    if (w(() => M(e, t) === `source_catalog`)) {
        let i = pt({
                messageId: r,
                productCitation: t.cite
            }),
            o = Y(e, i),
            s = a ?? (e => lt(e));
        return o.ensureStarted({
            requestKey: i,
            requestFn: s,
            conversationId: n,
            messageId: r,
            shellProduct: t
        })
    }
    let s = L(t),
        c = t.product_lookup_key,
        u = w(() => S(e)),
        d = x.getNodeIfExists(u, r)?.message,
        f = !w(l) && !w(() => Me(e)) && d?.metadata?.citation_ledger_pending_products?.includes(t.id) && t.id.startsWith(`query_mode_entity_${r}_`) && !c ? {
            conversation_id: n,
            message_id: r,
            product_id: t.id
        } : void 0;
    if (f && w(() => o(e)) && x.getParentPromptNode(u, r)?.id === x.getParentPromptNode(u)?.id) return Promise.resolve();
    let p = Et({
            productKey: s,
            productLookupKey: c
        }),
        m = J(e, s),
        h = i ?? (({
            shellProduct: e,
            productLookupKey: t
        }) => Ze({
            productQuery: e.title,
            productLookupKey: t,
            ledgerSource: f
        }));
    return m.ensureStarted({
        conversation: e,
        requestKey: p,
        requestProductEntity: h,
        conversationId: n,
        messageId: r,
        shellProduct: t,
        productLookupKey: c
    })
}

function Tt({
    conversationId: e,
    messageId: t,
    shellProduct: n,
    productLookupKey: r,
    rewrittenQueries: i
}) {
    return JSON.stringify([e, t, L(n), r?.variant_options_query ?? null, i ?? null])
}

function Et({
    productKey: e,
    productLookupKey: t
}) {
    let n = Ot(t);
    return JSON.stringify([e, n?.known_ids ?? null, n?.metadata_sources ?? null, t?.variant_options_query ?? null])
}

function Dt(e) {
    return typeof e == `object` && !!e
}

function Ot(e) {
    if (!e?.data) return null;
    try {
        let t = JSON.parse(e.data);
        return Dt(t) ? t : null
    } catch {
        return null
    }
}

function kt(e, t) {
    let n = [...e];
    for (let e of t) n.includes(e) || n.push(e);
    return n
}

function At(e, t) {
    let n = [];
    for (let r of [...e, ...t]) n.includes(r) || n.push(r);
    return n
}

function jt(e, t) {
    return {
        ...e,
        product: {
            ...e.product,
            product_lookup_key: {
                ...e.product.product_lookup_key,
                variant_options_query: t?.variant_options_query
            }
        }
    }
}

function Mt({
    conversation: e,
    shellProduct: t,
    nextProduct: n
}) {
    let r = L(t);
    if (w(() => K(e, r)())) return;
    let i = U(e, r)() ?? t;
    v(() => {
        n.shopping_vto != null && W(e, r).set(n.shopping_vto.eligible), U(e, r).set(R({
            currentProduct: i,
            nextProduct: n
        }))
    })
}

function Nt(e, t) {
    return t == null ? e : e == null ? t : R({
        currentProduct: e,
        nextProduct: t
    })
}

function Pt({
    shellProduct: e,
    statefulProduct: t,
    hasFetchedVariant: n
}) {
    return n ? t?.title ?? e?.title ?? `` : e?.title ?? t?.title ?? ``
}

function Ft({
    displayTitle: e,
    description: t,
    rationale: n,
    reviewsSummary: r
}) {
    return [e, t, n, r].filter(Boolean).join(`

`).trim()
}

function It(e, t) {
    let n = w(() => j(e));
    if (O(n, `product_agent`) && n.messageId === t) {
        let e = n.rewrittenQueries?.filter(e => typeof e == `string` && e !== ``);
        if (e != null && e.length > 0) return e
    }
    let r = w(() => S(e));
    if (!r) return;
    let i = x.getNodeIfExists(r, t);
    for (; i;) {
        if (i.message.author.role === `assistant`) {
            let e = i.message.metadata?.shopping?.rewritten_queries;
            if (Array.isArray(e)) {
                let t = e.filter(e => typeof e == `string` && e !== ``);
                return t.length > 0 ? t : void 0
            }
        }
        if (!i.parentId) return;
        i = x.getNodeIfExists(r, i.parentId)
    }
}

function Lt(e, t) {
    return e ? t ? {
        ...e,
        ...t,
        data: {
            ...e.data,
            ...t.data
        }
    } : e : t
}

function Rt({
    shellProduct: e,
    statefulProduct: t
}) {
    let n = e?.offers ?? [],
        r = t?.offers ?? n,
        i = [...n];
    for (let e of r) {
        let t = i.findIndex(t => Ce(t, e));
        if (t === -1) {
            i.push(e);
            continue
        }
        i[t] = e
    }
    return i
}

function zt({
    shellProduct: e,
    statefulProduct: t,
    hasFetchedVariant: n
}) {
    return n ? t?.image_urls ?? e?.image_urls ?? [] : At(t?.image_urls?.filter(be) ?? [], kt(e?.image_urls ?? [], t?.image_urls ?? []))
}

function Bt({
    currentProduct: e,
    updatedVariants: t,
    variantOptionsQuery: n,
    optionGroupId: r,
    productLookupKey: i
}) {
    return {
        ...e,
        variants: t,
        product_lookup_key: i === void 0 ? {
            ...e.product_lookup_key,
            variant_options_query: n,
            last_variant_selection_group_id: r
        } : i
    }
}

function Vt({
    currentProduct: e,
    nextProduct: t,
    productLookupKey: n
}) {
    return R({
        currentProduct: e,
        nextProduct: {
            ...t,
            title: t.title || e.title,
            product_lookup_key: n
        }
    })
}

function R({
    currentProduct: e,
    nextProduct: t
}) {
    return {
        ...t,
        image_urls: ye([], t.image_urls ?? e.image_urls ?? []),
        ...Le({
            currentProduct: e,
            nextProduct: t
        }),
        analytics_meta: t.analytics_meta ?? e.analytics_meta,
        product_event_uuid: e.product_event_uuid,
        url: t.url || e.url,
        popularity_metadata: t.popularity_metadata ?? e.popularity_metadata,
        num_reviews: t.num_reviews ?? e.num_reviews,
        rating: t.rating ?? e.rating,
        price_history: t.price_history ?? e.price_history
    }
}

function Ht(e, t, n) {
    if (n == null) return null;
    let r = Se({
        turns: g(e),
        productId: n.id,
        messageId: t
    });
    return r?.messageId !== t || !r.product.shopping_vto?.generated_images?.length ? n : {
        ...n,
        ...Le({
            currentProduct: r.product,
            nextProduct: {
                ...n,
                shopping_vto: n.shopping_vto ?? r.product.shopping_vto
            }
        })
    }
}
var z, B, V, H, U, W, G, K, q, J, Y, X, Z, Ut, Wt, Q, $, Gt, Kt, qt, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn = e((() => {
    t(), Fe(), We(), se(), h(), m(), ke(), Ne(), Ae(), ve(), Pe(), De(), Qe(), st(), ut(), ce(), de(), u(), me(), re(), z = y(() => n(null)), B = y(e => _(() => {
        let t = j(e);
        if (O(t, `product_agent`)) {
            if (t.reference) {
                let n = q(e, P(t)).product$() ?? null;
                return Ht(e, t.messageId, n)
            }
            let n = S(e);
            return Oe(n && x.getMaybeMessage(n, t.messageId)?.metadata) ? Ht(e, t.messageId, t.product) : (t.product?.shopping_vto?.eligible ? Se({
                turns: g(e),
                productId: t.product.id,
                messageId: t.messageId,
                source: {
                    product_id: t.product.id,
                    source_message_id: t.messageId,
                    content_reference_start_index: t.contentReferenceStartIndex,
                    product_index: t.productIndex
                }
            })?.product : void 0) ?? t.product
        }
        if (O(t, `product`)) {
            let {
                product: n
            } = Ee({
                thread: S(e),
                messageId: t.messageId,
                contentReferenceStartIndex: t.contentReferenceStartIndex,
                productIndex: t.productIndex
            });
            return n ?? z(e)?.product ?? null
        }
        return O(t, `entity`) && (t.category === `product` || t.category === `product_link`) ? {
            id: ``,
            query: t.query,
            title: t.query,
            provider: ``,
            url: ``
        } : null
    })), V = y(e => _(() => {
        let t = j(e),
            n = B(e);
        return O(t, `product_agent`) && n ? M(e, n) : `enriched`
    })), H = y(e => _(() => {
        let t = B(e);
        return t ? L(t) : null
    })), U = b((e, t) => n(null)), W = b((e, t) => n(null)), G = b((e, t) => n(-1)), K = b((e, t) => n(!1)), q = b((e, t) => new it), J = b((e, t) => new at({
        normalizeProductEntityCitation: jt,
        applyProductEntityUpdate: Mt
    })), Y = b((e, t) => new ot), X = y(e => _(() => {
        let t = B(e);
        if (V(e) === `source_catalog`) return I(e)?.entity$()?.product ?? null;
        let n = H(e);
        return n == null ? null : Nt(t, U(e, n)())
    })), Z = y(e => _(() => N(e) ? X(e)?.title ?? `` : Pt({
        shellProduct: B(e),
        statefulProduct: X(e),
        hasFetchedVariant: Xt(e)
    }))), Ut = y(e => _(() => {
        let t = B(e);
        if (t == null) return null;
        if (V(e) === `source_catalog`) {
            let t = X(e);
            return t == null ? null : {
                product: t,
                offers: mt(t.offers ?? [])
            }
        }
        let n = X(e) ?? t;
        return {
            product: n,
            offers: ne(`3375735072`) ? n.offers?.length ? n.offers : t.offers ?? [] : Qt(e)
        }
    }, {
        equals: f
    })), Wt = y(e => _(() => {
        let t = H(e);
        return t == null ? -1 : G(e, t)()
    })), Q = y(e => _(() => {
        if (N(e)) return;
        let t = H(e);
        if (t != null) return F(e, t).rationale$()
    })), $ = y(e => _(() => {
        if (N(e)) return;
        let t = H(e);
        if (t != null) return F(e, t).reviews$()
    })), Gt = y(e => _(() => {
        if (N(e)) return;
        let t = H(e);
        if (t != null) return Lt(J(e, t).debug$(), F(e, t).debug$())
    })), Kt = y(e => _(() => {
        if (N(e)) return !1;
        let t = H(e);
        return t != null && F(e, t).loading$()
    })), qt = y(e => _(() => {
        if (N(e)) return I(e)?.entity$();
        let t = H(e);
        if (t != null) return J(e, t).entity$()
    })), Jt = y(e => _(() => {
        if (N(e)) return I(e)?.loading$() ?? !1;
        let t = H(e);
        return t != null && J(e, t).loading$()
    })), Yt = y(e => _(() => {
        if (N(e)) return I(e)?.status$() ?? `idle`;
        let t = H(e);
        return t == null ? `idle` : J(e, t).status$()
    })), Xt = y(e => _(() => {
        let t = H(e);
        return t != null && K(e, t)()
    })), Zt = y(e => _(() => {
        let t = H(e),
            n = B(e),
            r = X(e);
        if (N(e)) return r?.image_urls ?? [];
        if (t == null) return n?.image_urls ?? [];
        let i = zt({
            shellProduct: n,
            statefulProduct: r,
            hasFetchedVariant: K(e, t)()
        });
        return je({
            product: r ?? n,
            imageUrls: i
        })
    })), Qt = y(e => _(() => N(e) ? X(e)?.offers ?? [] : Rt({
        shellProduct: B(e),
        statefulProduct: X(e)
    }))), $t = y(e => _(() => {
        if (N(e)) return [];
        let t = j(e);
        if (!O(t, `product`) && !O(t, `product_agent`)) return [];
        let n = B(e),
            r = S(e);
        if (!n || !r) return [];
        let i = x.getMaybeMessage(r, t.messageId)?.metadata?.content_references ?? [],
            a = new Set([n.id]),
            o = [];
        for (let e of i) {
            let t = e.type === `products` || e.type === `explore_more` || e.type === `product_group` ? e.products ?? [] : e.type === `product` || e.type === `product_entity` ? [e.product] : [];
            for (let e of t) a.has(e.id) || (a.add(e.id), o.push(e))
        }
        return o
    })), en = y(e => _(() => {
        let t = !N(e);
        return Ft({
            displayTitle: Z(e),
            description: X(e)?.description,
            rationale: t ? Q(e)?.rationale : void 0,
            reviewsSummary: t ? $(e)?.summary : void 0
        })
    })), tn = y(e => _(() => {
        let t = j(e),
            n = S(e),
            r = e => n != null && Oe(x.getMaybeMessage(n, e)?.metadata);
        return O(t, `product`) ? {
            clientThreadId: e.id,
            messageId: t.messageId,
            turnIndex: t.turnIndex,
            isGenui: r(t.messageId)
        } : O(t, `product_agent`) ? {
            clientThreadId: e.id,
            messageId: t.messageId,
            turnIndex: 0,
            isGenui: r(t.messageId)
        } : O(t, `entity`) && (t.category === `product` || t.category === `product_link`) ? {
            clientThreadId: e.id,
            messageId: t.messageId,
            isGenui: r(t.messageId)
        } : {
            clientThreadId: e.id,
            isGenui: !1
        }
    }, {
        equals: f
    }))
}));
export {
    Ct as A, Ue as B, nn as C, W as D, U as E, Je as F, Qe as I, Ze as L, St as M, A as N, xt as O, et as P, Ge as R, It as S, K as T, We as V, $ as _, en as a, B as b, V as c, Yt as d, Zt as f, dt as g, Q as h, tn as i, wt as j, z as k, qt as l, Kt as m, bt as n, Z as o, Gt as p, L as r, Wt as s, yt as t, Jt as u, $t as v, ft as w, X as x, Ut as y, Ke as z
};
//# sourceMappingURL=2b67bcd8-fpmgt6afd6skqewc.js.map