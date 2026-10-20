import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Cot as t,
    DJ as n,
    FC as r,
    Gnt as i,
    IC as a,
    Iat as o,
    JJ as s,
    L0 as c,
    L8 as l,
    LB as u,
    Nrt as d,
    Qu as f,
    R8 as p,
    S5 as m,
    S9 as h,
    Sot as g,
    TJ as ee,
    Unt as te,
    Xu as _,
    Znt as ne,
    aF as v,
    bat as re,
    dat as y,
    drt as ie,
    fat as b,
    frt as ae,
    g5 as x,
    g8 as oe,
    het as se,
    j0 as ce,
    pF as le,
    rY as ue,
    rd as S,
    s5 as de,
    sF as C,
    urt as fe,
    vot as pe,
    w8 as w,
    wB as me,
    wat as he,
    x8 as T,
    yat as ge,
    z7 as _e
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Amt as ve,
    BSt as ye,
    Cmt as be,
    Flt as xe,
    Kwt as Se,
    LQt as Ce,
    Omt as we,
    Plt as Te,
    QFn as Ee,
    QZt as E,
    USt as De,
    VSt as Oe,
    Wwt as ke,
    ZZt as Ae,
    aIn as je,
    dVn as Me,
    eIn as D,
    fVn as Ne,
    kmt as Pe,
    nQt as Fe,
    tQt as Ie,
    vmt as Le,
    xmt as Re
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    a as ze,
    i as Be,
    n as Ve,
    r as He,
    t as Ue
} from "./2f772deb-o1excjo3b8aemp87.js";

function We(e) {
    return e == null || me({
        turns: _(e)
    }) == null ? `enriched` : h() ? `source_catalog` : `enriched`
}
var Ge = e((() => {
    u(), se(), f()
}));

function Ke() {
    return `${y}/search/product_info_variants`
}
var qe = e((() => {
    b(), Ce()
}));
async function* Je({
    reference: e,
    messageId: t,
    locale: n,
    signal: r
}) {
    let i = !1;
    for await (let a of Ve({
        requestBody: Be({
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
        if (!i && a.type === `message`) {
            let t = a.data.metadata?.content_references?.find(e => e.type === `product_entity`);
            t?.type === `product_entity` && (i = !0, yield t, r.aborted || e.onResolved?.(t))
        }
        yield* Ze(a)
    }
    if (!i && !r.aborted) throw Error(he)
}
async function Ye({
    productLookupKey: e,
    onProductEntity: t
}) {
    let n = E(Ke(), {
            method: `POST`,
            headers: {
                ...d({
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
async function* Xe({
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
            supported_encodings: [pe.V1],
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
        f = E(`${y}${u}`, {
            method: `POST`,
            headers: {
                ...d({
                    isAuthOptional: !0
                }),
                "Content-Type": `application/json`
            },
            body: l,
            routeName: u
        }),
        p = !1;
    for await (let e of Ie(f)) {
        if (!(`data` in e)) continue;
        let t = e.data;
        if (t.type === `__debug`) {
            if (p) continue;
            p = !0
        }
        yield* Ze(t)
    }
}

function* Ze(e) {
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
async function* Qe({
    productQuery: e,
    productLookupKey: t,
    ledgerSource: n
}) {
    let r = E(`${y}/search/product_update`, {
        method: `POST`,
        headers: {
            ...d({
                isAuthOptional: !0
            }),
            ...n ? ee({
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
var $e = e((() => {
        n(), Ue(), ze(), o(), b(), Fe(), _e(), Ae(), qe()
    })),
    et, O, k, tt = e((() => {
        fe(), ne(), t(), et = {
            fetch_to_all_offers: `product_sidebar_fetch_to_all_offers_ms`,
            fetch_to_first_offer: `product_sidebar_fetch_to_first_offer_ms`,
            render_time_to_all_offers: `product_sidebar_render_to_all_offers_ms`,
            render_time_to_first_offer: `product_sidebar_render_to_first_offer_ms`,
            render_time_to_first_review: `product_sidebar_time_to_reviews_ms`,
            render_time_to_rationale: `product_sidebar_time_to_rationale_ms`
        }, O = new WeakMap, k = class {
            constructor() {
                g(this, `startMs`, performance.now()), g(this, `loggedTimings`, new Set), g(this, `loggedRenderOfferTimings`, new Set)
            }
            reset(e) {
                if (this.startMs = performance.now(), this.loggedTimings.clear(), e == null) {
                    this.loggedRenderOfferTimings = new Set;
                    return
                }
                let t = O.get(e.conversation);
                t ?? (t = new Map, O.set(e.conversation, t));
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
                ie.hist(ae.SHOPPING, `product_sidebar_timing_duration_ms`, {
                    timing: e
                }, n);
                let r = et[e];
                r && te.logEvent(r, n), this.loggedTimings.add(e)
            }
        }
    }));

function nt() {
    return `${Date.now()}:${Math.random().toString(36).slice(2)}`
}

function rt(e, t) {
    return e ? t ? {
        ...e,
        ...t,
        data: {
            ...e.data,
            ...t.data
        }
    } : e : t
}

function it(e) {
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
var at, ot, st, ct = e((() => {
    tt(), oe(), t(), at = class {
        constructor() {
            g(this, `product$`, w(void 0)), g(this, `rationale$`, w(void 0)), g(this, `reviews$`, w(void 0)), g(this, `debug$`, w(void 0)), g(this, `loading$`, w(!1)), g(this, `status$`, w(`idle`)), g(this, `requestToken$`, w(null)), g(this, `error$`, w(void 0)), g(this, `requestKey`, null), g(this, `inFlightPromise`, null), g(this, `profiler`, null), g(this, `cacheOnly`, !1)
        }
        ensureStarted(e) {
            return m(() => this.loading$() && this.requestKey === e.requestKey) ? this.cacheOnly && e.cacheOnly !== !0 ? (this.inFlightPromise ?? Promise.resolve()).then(() => this.ensureStarted(e), () => this.ensureStarted(e)) : this.inFlightPromise ?? Promise.resolve() : m(() => this.status$() === `success` && this.requestKey === e.requestKey) ? Promise.resolve() : this.startStream({
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
            let t = nt();
            this.requestKey = e.requestKey, this.cacheOnly = e.cacheOnly === !0, this.profiler = this.cacheOnly ? null : new k, x(() => {
                this.loading$.set(!0), this.status$.set(`loading`), this.requestToken$.set(t), this.error$.set(void 0)
            });
            let n = this.run(t, e);
            return this.inFlightPromise = n, n
        }
        cancel(e) {
            m(() => this.requestToken$()) === e && (this.requestKey = null, x(() => {
                this.requestToken$.set(null), this.loading$.set(!1), this.status$.set(`idle`), this.inFlightPromise = null
            }))
        }
        async run(e, t) {
            try {
                let n = !1;
                for await (let r of t.stream) if (m(() => this.requestToken$()) === e) switch (r.type) {
                    case `product_entity`:
                        x(() => this.product$.set(r.product));
                        break;
                    case `product_rationale`:
                        n = !0, x(() => {
                            this.rationale$.set(r)
                        }), this.profiler?.logTimingOnce(`time_to_rationale`);
                        break;
                    case `product_reviews`:
                        n = !0, x(() => {
                            this.reviews$.set(r)
                        }), this.profiler?.logTimingOnce(`time_to_first_review`);
                        break;
                    case `__debug`:
                        x(() => {
                            this.debug$.set(rt(this.debug$(), r))
                        });
                        break;
                    default:
                        break
                }
                m(() => this.requestToken$() === e) && x(() => {
                    this.loading$.set(!1), this.status$.set(t.cacheOnly && !n ? `idle` : `success`)
                })
            } catch (t) {
                throw m(() => this.requestToken$() === e) && x(() => {
                    this.loading$.set(!1), this.status$.set(`error`), this.error$.set(t)
                }), t
            } finally {
                m(() => this.requestToken$() === e) && x(() => {
                    this.requestToken$.set(null), this.inFlightPromise = null
                })
            }
        }
    }, ot = class {
        constructor(e) {
            g(this, `deps`, void 0), g(this, `entity$`, w(void 0)), g(this, `debug$`, w(void 0)), g(this, `loading$`, w(!1)), g(this, `status$`, w(`idle`)), g(this, `requestToken$`, w(null)), g(this, `error$`, w(void 0)), g(this, `requestKey`, null), g(this, `inFlightPromise`, null), g(this, `profiler`, null), this.deps = e
        }
        ensureStarted(e) {
            return m(() => this.loading$() && this.requestKey === e.requestKey) ? this.inFlightPromise ?? Promise.resolve() : m(() => this.status$() === `success` && this.requestKey === e.requestKey) ? Promise.resolve() : this.start(e)
        }
        start(e) {
            let t = nt();
            this.requestKey = e.requestKey, this.profiler = new k, x(() => {
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
                })) if (m(() => this.requestToken$() === e)) switch (n.type) {
                    case `product_entity`: {
                        let e = this.deps.normalizeProductEntityCitation(n, t.productLookupKey);
                        x(() => {
                            this.entity$.set(e)
                        }), this.profiler?.logTimingOnce(`time_to_product_entity`), e.product.shopping_vto?.eligible === !0 && this.profiler?.logTimingOnce(`fetch_to_virtual_try_on_eligible`), (e.product.offers?.length ?? 0) > 0 && this.profiler?.logTimingOnce(`fetch_to_first_offer`), this.deps.applyProductEntityUpdate({
                            conversation: t.conversation,
                            shellProduct: t.shellProduct,
                            nextProduct: e.product
                        });
                        break
                    }
                    case `__debug`:
                        x(() => {
                            this.debug$.set(rt(this.debug$(), it(n)))
                        });
                        break;
                    default:
                        break
                }
                m(() => this.requestToken$() === e) && (this.profiler?.hasLoggedTiming(`fetch_to_first_offer`) && this.profiler.logTimingOnce(`fetch_to_all_offers`), x(() => {
                    this.loading$.set(!1), this.status$.set(`success`)
                }))
            } catch (t) {
                m(() => this.requestToken$() === e) && x(() => {
                    this.loading$.set(!1), this.status$.set(`error`), this.error$.set(t)
                })
            } finally {
                m(() => this.requestToken$() === e) && x(() => {
                    this.requestToken$.set(null), this.inFlightPromise = null
                })
            }
        }
    }, st = class {
        constructor() {
            g(this, `entity$`, w(void 0)), g(this, `loading$`, w(!1)), g(this, `status$`, w(`idle`)), g(this, `error$`, w(void 0)), g(this, `requestKey`, null), g(this, `inFlightPromise`, null)
        }
        ensureStarted(e) {
            return m(() => this.loading$() && this.requestKey === e.requestKey) ? this.inFlightPromise ?? Promise.resolve() : m(() => this.status$() === `success` && this.requestKey === e.requestKey) ? Promise.resolve() : this.start(e)
        }
        start(e) {
            this.requestKey = e.requestKey, x(() => {
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
                x(() => {
                    this.entity$.set(t), this.loading$.set(!1), this.status$.set(`success`)
                })
            } catch (e) {
                x(() => {
                    this.entity$.set(void 0), this.loading$.set(!1), this.status$.set(`error`), this.error$.set(e)
                })
            } finally {
                this.inFlightPromise = null
            }
        }
    }
}));

function lt(e) {
    return typeof e == `object` && !!e
}
async function* ut({
    conversationId: e,
    messageId: t,
    shellProduct: n,
    signal: r,
    streamConversation: i = He
}) {
    let a = !1,
        o = [];
    if (await i({
            requestBody: {
                conversation_id: e,
                message_id: t,
                supported_encodings: [pe.V1],
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
                    for (let t of e.data.metadata?.content_references ?? []) lt(t) && t.type === `product_entity` && lt(t.product) && o.push(t)
            }
        }), !a) throw Error(`Catalog product response was not source scoped`);
    let s = o.at(-1);
    if (s == null) throw Error(`Catalog product response did not include a product entity`);
    yield s
}
var dt = e((() => {
    Ue(), Fe()
}));

function A(e) {
    return je(e) ?? R(e)?.sidebar ?? null
}

function j(e, t) {
    let n = A(e);
    return n?.type === `product_agent` && n.reference && z(e) === t ? `enriched` : t.cite ? We(e) : `enriched`
}

function M(e) {
    return B(e) === `source_catalog`
}

function N(e) {
    return JSON.stringify([`reference`, e.reference?.conversationId, e.reference?.sharedConversationId, e.messageId, e.reference?.refId, e.reference?.projectId, e.reference?.ownerUserId])
}

function ft(e) {
    let t = A(e);
    return t?.type === `product_agent` && t.reference ? K(e, N(t)).status$() : `idle`
}

function P(e, t) {
    let n = A(e);
    if (n?.type === `product_agent` && n.reference) {
        let r = K(e, N(n)),
            i = r.product$();
        if (i && I(i) === t) return r
    }
    return K(e, t)
}

function pt({
    conversation: e,
    sidebar: t,
    locale: n
}) {
    let r = new AbortController,
        i = N(t),
        a = K(e, i),
        o = a.startStream({
            requestKey: i,
            stream: Je({
                reference: t.reference,
                messageId: t.messageId,
                locale: n,
                signal: r.signal
            })
        }),
        s = m(() => a.requestToken$());
    return {
        completion: o,
        cancel: () => {
            r.abort(), a.cancel(s)
        }
    }
}

function mt({
    messageId: e,
    productCitation: t
}) {
    return JSON.stringify([e, t ?? null])
}

function F(e) {
    if (!M(e)) return null;
    let t = A(e),
        n = z(e);
    return !D(t, `product_agent`) || n == null ? null : J(e, mt({
        messageId: t.messageId,
        productCitation: n.cite
    }))
}

function ht(e) {
    return e.flatMap(e => {
        if (typeof e.url != `string`) return [];
        let t = re(e.url.trim());
        return t?.protocol !== `https:` && t?.protocol !== `http:` ? [] : [gt(e)]
    })
}

function gt(e) {
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

function _t(e, t) {
    let n = m(() => V(e));
    n != null && H(e, n).set(t)
}

function vt(e, t, n) {
    let r = I(t);
    G(e, r).set(n)
}

function yt(e, t, n) {
    _t(e, n(m(() => Y(e) ?? t)))
}

function bt({
    conversation: e,
    shellProduct: t,
    updatedVariants: n,
    variantOptionsQuery: r,
    optionGroupId: i,
    productLookupKey: a
}) {
    yt(e, t, e => Vt({
        currentProduct: e,
        updatedVariants: n,
        variantOptionsQuery: r,
        optionGroupId: i,
        productLookupKey: a
    }))
}

function xt({
    conversation: e,
    shellProduct: t,
    nextProduct: n,
    productLookupKey: r,
    hasFetchedVariant: i = !0
}) {
    yt(e, t, e => Ht({
        currentProduct: e,
        nextProduct: n,
        productLookupKey: r
    })), vt(e, t, i)
}

function St(e, t) {
    let n = m(() => V(e));
    n != null && x(() => {
        W(e, n).set(t)
    })
}

function I(e) {
    return e.id || e.query || e.title
}

function Ct({
    conversation: e,
    shellProduct: t,
    statefulProduct: n = t,
    conversationId: r,
    messageId: i,
    persistConversationToUser: a,
    requestProductInfo: o,
    cacheOnly: s
}) {
    if (m(() => j(e, t) === `source_catalog`)) return Promise.resolve();
    let c = I(t),
        l = n.product_lookup_key,
        u = m(() => Lt(e, i)),
        d = m(() => P(e, c)),
        f = Et({
            conversationId: r,
            messageId: i,
            shellProduct: t,
            productLookupKey: l,
            rewrittenQueries: u
        }),
        p = m(() => je(e));
    if (p?.type === `product_agent` && p.reference?.conversationId === r && p.messageId === i && o == null && JSON.stringify(l?.variant_options_query ?? null) === JSON.stringify(t.product_lookup_key?.variant_options_query ?? null) && d.ownsRequestKey(N(p))) return d.completion;
    let h = o ?? (({
        conversationId: e,
        messageId: t,
        shellProduct: n,
        productLookupKey: r,
        rewrittenQueries: i,
        cacheOnly: o
    }) => Xe({
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
        requestFn: h,
        conversationId: r,
        messageId: i,
        shellProduct: t,
        productLookupKey: l,
        rewrittenQueries: u,
        cacheOnly: s
    })
}

function wt(e) {
    return de(() => e.shellProduct.id.startsWith(`query_mode_entity_${e.messageId}_`) ? a(e.conversation) : !1, () => {
        Tt(e)
    }, {
        fireImmediately: !0
    })
}

function Tt({
    conversation: e,
    shellProduct: t,
    conversationId: n,
    messageId: r,
    requestProductEntity: i,
    requestSourceCatalogProduct: o
}) {
    if (m(() => j(e, t) === `source_catalog`)) {
        let i = mt({
                messageId: r,
                productCitation: t.cite
            }),
            a = J(e, i),
            s = o ?? (e => ut(e));
        return a.ensureStarted({
            requestKey: i,
            requestFn: s,
            conversationId: n,
            messageId: r,
            shellProduct: t
        })
    }
    let l = I(t),
        u = t.product_lookup_key,
        d = m(() => S(e)),
        f = s.getNodeIfExists(d, r)?.message,
        p = !m(c) && !m(() => Me(e)) && f?.metadata?.citation_ledger_pending_products?.includes(t.id) && t.id.startsWith(`query_mode_entity_${r}_`) && !u ? {
            conversation_id: n,
            message_id: r,
            product_id: t.id
        } : void 0;
    if (p && m(() => a(e)) && s.getParentPromptNode(d, r)?.id === s.getParentPromptNode(d)?.id) return Promise.resolve();
    let h = Dt({
            productKey: l,
            productLookupKey: u
        }),
        g = q(e, l),
        ee = i ?? (({
            shellProduct: e,
            productLookupKey: t
        }) => Qe({
            productQuery: e.title,
            productLookupKey: t,
            ledgerSource: p
        }));
    return g.ensureStarted({
        conversation: e,
        requestKey: h,
        requestProductEntity: ee,
        conversationId: n,
        messageId: r,
        shellProduct: t,
        productLookupKey: u
    })
}

function Et({
    conversationId: e,
    messageId: t,
    shellProduct: n,
    productLookupKey: r,
    rewrittenQueries: i
}) {
    return JSON.stringify([e, t, I(n), r?.variant_options_query ?? null, i ?? null])
}

function Dt({
    productKey: e,
    productLookupKey: t
}) {
    let n = kt(t);
    return JSON.stringify([e, n?.known_ids ?? null, n?.metadata_sources ?? null, t?.variant_options_query ?? null])
}

function Ot(e) {
    return typeof e == `object` && !!e
}

function kt(e) {
    if (!e?.data) return null;
    try {
        let t = JSON.parse(e.data);
        return Ot(t) ? t : null
    } catch {
        return null
    }
}

function At(e, t) {
    let n = [...e];
    for (let e of t) n.includes(e) || n.push(e);
    return n
}

function jt(e, t) {
    let n = [];
    for (let r of [...e, ...t]) n.includes(r) || n.push(r);
    return n
}

function Mt(e, t) {
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

function Nt({
    conversation: e,
    shellProduct: t,
    nextProduct: n
}) {
    let r = I(t);
    if (m(() => G(e, r)())) return;
    let i = H(e, r)() ?? t;
    x(() => {
        n.shopping_vto != null && U(e, r).set(n.shopping_vto.eligible), H(e, r).set(L({
            currentProduct: i,
            nextProduct: n
        }))
    })
}

function Pt(e, t) {
    return t == null ? e : e == null ? t : L({
        currentProduct: e,
        nextProduct: t
    })
}

function Ft({
    shellProduct: e,
    statefulProduct: t,
    hasFetchedVariant: n
}) {
    return n ? t?.title ?? e?.title ?? `` : e?.title ?? t?.title ?? ``
}

function It({
    displayTitle: e,
    description: t,
    rationale: n,
    reviewsSummary: r
}) {
    return [e, t, n, r].filter(Boolean).join(`

`).trim()
}

function Lt(e, t) {
    let n = m(() => A(e));
    if (D(n, `product_agent`) && n.messageId === t) {
        let e = n.rewrittenQueries?.filter(e => typeof e == `string` && e !== ``);
        if (e != null && e.length > 0) return e
    }
    let r = m(() => S(e));
    if (!r) return;
    let i = s.getNodeIfExists(r, t);
    for (; i;) {
        if (i.message.author.role === `assistant`) {
            let e = i.message.metadata?.shopping?.rewritten_queries;
            if (Array.isArray(e)) {
                let t = e.filter(e => typeof e == `string` && e !== ``);
                return t.length > 0 ? t : void 0
            }
        }
        if (!i.parentId) return;
        i = s.getNodeIfExists(r, i.parentId)
    }
}

function Rt(e, t) {
    return e ? t ? {
        ...e,
        ...t,
        data: {
            ...e.data,
            ...t.data
        }
    } : e : t
}

function zt({
    shellProduct: e,
    statefulProduct: t
}) {
    let n = e?.offers ?? [],
        r = t?.offers ?? n,
        i = [...n];
    for (let e of r) {
        let t = i.findIndex(t => xe(t, e));
        if (t === -1) {
            i.push(e);
            continue
        }
        i[t] = e
    }
    return i
}

function Bt({
    shellProduct: e,
    statefulProduct: t,
    hasFetchedVariant: n
}) {
    return n ? t?.image_urls ?? e?.image_urls ?? [] : jt(t?.image_urls?.filter(Pe) ?? [], At(e?.image_urls ?? [], t?.image_urls ?? []))
}

function Vt({
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

function Ht({
    currentProduct: e,
    nextProduct: t,
    productLookupKey: n
}) {
    return L({
        currentProduct: e,
        nextProduct: {
            ...t,
            title: t.title || e.title,
            product_lookup_key: n
        }
    })
}

function L({
    currentProduct: e,
    nextProduct: t
}) {
    return {
        ...t,
        image_urls: ve([], t.image_urls ?? e.image_urls ?? []),
        ...Re({
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

function Ut(e, t, n) {
    if (n == null) return null;
    let r = ye({
        turns: _(e),
        productId: n.id,
        messageId: t
    });
    return r?.messageId !== t || !r.product.shopping_vto?.generated_images?.length ? n : {
        ...n,
        ...Re({
            currentProduct: r.product,
            nextProduct: {
                ...n,
                shopping_vto: n.shopping_vto ?? r.product.shopping_vto
            }
        })
    }
}
var R, z, B, V, H, U, W, G, K, q, J, Y, X, Wt, Gt, Z, Q, Kt, qt, Jt, Yt, Xt, Zt, Qt, $t, en, tn, $, nn = e((() => {
    ce(), Ne(), Ge(), le(), f(), r(), ke(), Le(), Ee(), De(), Te(), we(), $e(), ct(), dt(), oe(), ue(), l(), ge(), ne(), R = v(() => w(null)), z = v(e => T(() => {
        let t = A(e);
        if (D(t, `product_agent`)) {
            if (t.reference) {
                let n = K(e, N(t)).product$() ?? null;
                return Ut(e, t.messageId, n)
            }
            let n = S(e);
            return Se(n && s.getMaybeMessage(n, t.messageId)?.metadata) ? Ut(e, t.messageId, t.product) : (t.product?.shopping_vto?.eligible ? ye({
                turns: _(e),
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
        if (D(t, `product`)) {
            let {
                product: n
            } = Oe({
                thread: S(e),
                messageId: t.messageId,
                contentReferenceStartIndex: t.contentReferenceStartIndex,
                productIndex: t.productIndex
            });
            return n ?? R(e)?.product ?? null
        }
        return D(t, `entity`) && (t.category === `product` || t.category === `product_link`) ? {
            id: ``,
            query: t.query,
            title: t.query,
            provider: ``,
            url: ``
        } : null
    })), B = v(e => T(() => {
        let t = A(e),
            n = z(e);
        return D(t, `product_agent`) && n ? j(e, n) : `enriched`
    })), V = v(e => T(() => {
        let t = z(e);
        return t ? I(t) : null
    })), H = C((e, t) => w(null)), U = C((e, t) => w(null)), W = C((e, t) => w(-1)), G = C((e, t) => w(!1)), K = C((e, t) => new at), q = C((e, t) => new ot({
        normalizeProductEntityCitation: Mt,
        applyProductEntityUpdate: Nt
    })), J = C((e, t) => new st), Y = v(e => T(() => {
        let t = z(e);
        if (B(e) === `source_catalog`) return F(e)?.entity$()?.product ?? null;
        let n = V(e);
        return n == null ? null : Pt(t, H(e, n)())
    })), X = v(e => T(() => M(e) ? Y(e)?.title ?? `` : Ft({
        shellProduct: z(e),
        statefulProduct: Y(e),
        hasFetchedVariant: Zt(e)
    }))), Wt = v(e => T(() => {
        let t = z(e);
        if (t == null) return null;
        if (B(e) === `source_catalog`) {
            let t = Y(e);
            return t == null ? null : {
                product: t,
                offers: ht(t.offers ?? [])
            }
        }
        let n = Y(e) ?? t;
        return {
            product: n,
            offers: i(`3375735072`) ? n.offers?.length ? n.offers : t.offers ?? [] : $t(e)
        }
    }, {
        equals: p
    })), Gt = v(e => T(() => {
        let t = V(e);
        return t == null ? -1 : W(e, t)()
    })), Z = v(e => T(() => {
        if (M(e)) return;
        let t = V(e);
        if (t != null) return P(e, t).rationale$()
    })), Q = v(e => T(() => {
        if (M(e)) return;
        let t = V(e);
        if (t != null) return P(e, t).reviews$()
    })), Kt = v(e => T(() => {
        if (M(e)) return;
        let t = V(e);
        if (t != null) return Rt(q(e, t).debug$(), P(e, t).debug$())
    })), qt = v(e => T(() => {
        if (M(e)) return !1;
        let t = V(e);
        return t != null && P(e, t).loading$()
    })), Jt = v(e => T(() => {
        if (M(e)) return F(e)?.entity$();
        let t = V(e);
        if (t != null) return q(e, t).entity$()
    })), Yt = v(e => T(() => {
        if (M(e)) return F(e)?.loading$() ?? !1;
        let t = V(e);
        return t != null && q(e, t).loading$()
    })), Xt = v(e => T(() => {
        if (M(e)) return F(e)?.status$() ?? `idle`;
        let t = V(e);
        return t == null ? `idle` : q(e, t).status$()
    })), Zt = v(e => T(() => {
        let t = V(e);
        return t != null && G(e, t)()
    })), Qt = v(e => T(() => {
        let t = V(e),
            n = z(e),
            r = Y(e);
        if (M(e)) return r?.image_urls ?? [];
        if (t == null) return n?.image_urls ?? [];
        let i = Bt({
            shellProduct: n,
            statefulProduct: r,
            hasFetchedVariant: G(e, t)()
        });
        return be({
            product: r ?? n,
            imageUrls: i
        })
    })), $t = v(e => T(() => M(e) ? Y(e)?.offers ?? [] : zt({
        shellProduct: z(e),
        statefulProduct: Y(e)
    }))), en = v(e => T(() => {
        if (M(e)) return [];
        let t = A(e);
        if (!D(t, `product`) && !D(t, `product_agent`)) return [];
        let n = z(e),
            r = S(e);
        if (!n || !r) return [];
        let i = s.getMaybeMessage(r, t.messageId)?.metadata?.content_references ?? [],
            a = new Set([n.id]),
            o = [];
        for (let e of i) {
            let t = e.type === `products` || e.type === `explore_more` || e.type === `product_group` ? e.products ?? [] : e.type === `product` || e.type === `product_entity` ? [e.product] : [];
            for (let e of t) a.has(e.id) || (a.add(e.id), o.push(e))
        }
        return o
    })), tn = v(e => T(() => {
        let t = !M(e);
        return It({
            displayTitle: X(e),
            description: Y(e)?.description,
            rationale: t ? Z(e)?.rationale : void 0,
            reviewsSummary: t ? Q(e)?.summary : void 0
        })
    })), $ = v(e => T(() => {
        let t = A(e),
            n = S(e),
            r = e => n != null && Se(s.getMaybeMessage(n, e)?.metadata);
        return D(t, `product`) ? {
            clientThreadId: e.id,
            messageId: t.messageId,
            turnIndex: t.turnIndex,
            isGenui: r(t.messageId)
        } : D(t, `product_agent`) ? {
            clientThreadId: e.id,
            messageId: t.messageId,
            turnIndex: 0,
            isGenui: r(t.messageId)
        } : D(t, `entity`) && (t.category === `product` || t.category === `product_link`) ? {
            clientThreadId: e.id,
            messageId: t.messageId,
            isGenui: r(t.messageId)
        } : {
            clientThreadId: e.id,
            isGenui: !1
        }
    }, {
        equals: p
    }))
}));
export {
    wt as A, We as B, nn as C, U as D, H as E, Ye as F, $e as I, Qe as L, Ct as M, k as N, St as O, tt as P, Ke as R, Lt as S, G as T, Ge as V, Q as _, tn as a, z as b, B as c, Xt as d, Qt as f, ft as g, Z as h, $ as i, Tt as j, R as k, Jt as l, qt as m, xt as n, X as o, Kt as p, I as r, Gt as s, bt as t, Yt as u, en as v, pt as w, Y as x, Wt as y, qe as z
};
//# sourceMappingURL=2b67bcd8-n5jrkj6wxl5myjnc.js.map