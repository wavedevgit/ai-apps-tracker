import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as t,
    $u as n,
    A5 as r,
    A8 as i,
    Aat as a,
    Aet as o,
    Art as s,
    B0 as c,
    BC as l,
    F8 as u,
    GJ as d,
    Hot as f,
    I5 as p,
    I9 as m,
    K0 as h,
    Lot as g,
    Q8 as ee,
    Qrt as _,
    R8 as v,
    Rat as te,
    SJ as ne,
    Uat as re,
    VC as ie,
    Vot as y,
    WB as ae,
    Z8 as oe,
    Zu as b,
    crt as se,
    eY as ce,
    fF as x,
    grt as le,
    id as S,
    jB as ue,
    jat as de,
    jrt as fe,
    krt as pe,
    tot as me,
    uF as C,
    urt as he,
    vF as ge,
    wJ as _e,
    x5 as ve,
    zat as ye
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    Bwt as be,
    Cmt as xe,
    Hwt as Se,
    ISt as Ce,
    LIn as we,
    LSt as Te,
    Olt as Ee,
    Smt as De,
    VQt as Oe,
    WIn as w,
    XVn as ke,
    ZVn as Ae,
    _mt as je,
    aQt as Me,
    fmt as Ne,
    hmt as Pe,
    klt as Fe,
    nQt as T,
    oQt as Ie,
    tQt as Le,
    wmt as Re,
    zIn as E,
    zSt as ze
} from "./conversation-small-fh0oqifngkf5rvl1.js";
import {
    a as Be,
    i as Ve,
    n as He,
    r as Ue,
    t as We
} from "./2f772deb-jae6eed48sj5fgz7.js";

function Ge(e) {
    return e == null || ue({
        turns: b(e)
    }) == null ? `enriched` : m() ? `source_catalog` : `enriched`
}
var Ke = e((() => {
    ae(), o(), n()
}));

function qe() {
    return `${a}/search/product_info_variants`
}
var Je = e((() => {
    de(), Oe()
}));
async function* Ye({
    reference: e,
    messageId: t,
    locale: n,
    signal: r
}) {
    let i = !1;
    for await (let a of He({
        requestBody: Ve({
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
        yield* Qe(a)
    }
    if (!i && !r.aborted) throw Error(re)
}
async function Xe({
    productLookupKey: e,
    onProductEntity: t
}) {
    let n = T(qe(), {
            method: `POST`,
            headers: {
                ..._({
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
async function* Ze({
    conversationId: e,
    messageId: t,
    productQuery: n,
    productLookupKey: r,
    isGenericProductSidebarEnabled: i,
    persistConversationToUser: o,
    rewrittenQueries: s,
    cacheOnly: c = !1
}) {
    let l = !!r?.variant_options_query,
        u = {
            conversation_id: e,
            message_id: t,
            supported_encodings: [g.V1],
            ...i && !l ? {
                category: `generic_entity`,
                generic_entity_params: {
                    name: n,
                    category: `product_rationale_and_reviews`,
                    ...r || s ? {
                        extra_params: {
                            ...r ? {
                                product_lookup_key: r
                            } : {},
                            ...s ? {
                                rewritten_queries: s
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
            ...o ? {
                debug_params: {
                    persist_conversation_to_user: o
                }
            } : {}
        },
        d = c ? `/sidebar/product/conversation/cache` : `/sidebar/conversation`,
        f = T(`${a}${d}`, {
            method: `POST`,
            headers: {
                ..._({
                    isAuthOptional: !0
                }),
                "Content-Type": `application/json`
            },
            body: u,
            routeName: d
        }),
        p = !1;
    for await (let e of Me(f)) {
        if (!(`data` in e)) continue;
        let t = e.data;
        if (t.type === `__debug`) {
            if (p) continue;
            p = !0
        }
        yield* Qe(t)
    }
}

function* Qe(e) {
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
async function* $e({
    productQuery: e,
    productLookupKey: t,
    ledgerSource: n
}) {
    let r = T(`${a}/search/product_update`, {
        method: `POST`,
        headers: {
            ..._({
                isAuthOptional: !0
            }),
            ...n ? ne({
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
var D = e((() => {
        _e(), We(), Be(), me(), de(), Ie(), t(), Le(), Je()
    })),
    O, k, A, et = e((() => {
        pe(), le(), f(), O = {
            fetch_to_all_offers: `product_sidebar_fetch_to_all_offers_ms`,
            fetch_to_first_offer: `product_sidebar_fetch_to_first_offer_ms`,
            render_time_to_all_offers: `product_sidebar_render_to_all_offers_ms`,
            render_time_to_first_offer: `product_sidebar_render_to_first_offer_ms`,
            render_time_to_first_review: `product_sidebar_time_to_reviews_ms`,
            render_time_to_rationale: `product_sidebar_time_to_rationale_ms`
        }, k = new WeakMap, A = class {
            constructor() {
                y(this, `startMs`, performance.now()), y(this, `loggedTimings`, new Set), y(this, `loggedRenderOfferTimings`, new Set)
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
                s.hist(fe.SHOPPING, `product_sidebar_timing_duration_ms`, {
                    timing: e
                }, n);
                let r = O[e];
                r && se.logEvent(r, n), this.loggedTimings.add(e)
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
    et(), i(), f(), it = class {
        constructor() {
            y(this, `product$`, v(void 0)), y(this, `rationale$`, v(void 0)), y(this, `reviews$`, v(void 0)), y(this, `debug$`, v(void 0)), y(this, `loading$`, v(!1)), y(this, `status$`, v(`idle`)), y(this, `requestToken$`, v(null)), y(this, `error$`, v(void 0)), y(this, `requestKey`, null), y(this, `inFlightPromise`, null), y(this, `profiler`, null), y(this, `cacheOnly`, !1)
        }
        ensureStarted(e) {
            return p(() => this.loading$() && this.requestKey === e.requestKey) ? this.cacheOnly && e.cacheOnly !== !0 ? (this.inFlightPromise ?? Promise.resolve()).then(() => this.ensureStarted(e), () => this.ensureStarted(e)) : this.inFlightPromise ?? Promise.resolve() : p(() => this.status$() === `success` && this.requestKey === e.requestKey) ? Promise.resolve() : this.startStream({
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
            this.requestKey = e.requestKey, this.cacheOnly = e.cacheOnly === !0, this.profiler = this.cacheOnly ? null : new A, r(() => {
                this.loading$.set(!0), this.status$.set(`loading`), this.requestToken$.set(t), this.error$.set(void 0)
            });
            let n = this.run(t, e);
            return this.inFlightPromise = n, n
        }
        cancel(e) {
            p(() => this.requestToken$()) === e && (this.requestKey = null, r(() => {
                this.requestToken$.set(null), this.loading$.set(!1), this.status$.set(`idle`), this.inFlightPromise = null
            }))
        }
        async run(e, t) {
            try {
                let n = !1;
                for await (let i of t.stream) if (p(() => this.requestToken$()) === e) switch (i.type) {
                    case `product_entity`:
                        r(() => this.product$.set(i.product));
                        break;
                    case `product_rationale`:
                        n = !0, r(() => {
                            this.rationale$.set(i)
                        }), this.profiler?.logTimingOnce(`time_to_rationale`);
                        break;
                    case `product_reviews`:
                        n = !0, r(() => {
                            this.reviews$.set(i)
                        }), this.profiler?.logTimingOnce(`time_to_first_review`);
                        break;
                    case `__debug`:
                        r(() => {
                            this.debug$.set(nt(this.debug$(), i))
                        });
                        break;
                    default:
                        break
                }
                p(() => this.requestToken$() === e) && r(() => {
                    this.loading$.set(!1), this.status$.set(t.cacheOnly && !n ? `idle` : `success`)
                })
            } catch (t) {
                throw p(() => this.requestToken$() === e) && r(() => {
                    this.loading$.set(!1), this.status$.set(`error`), this.error$.set(t)
                }), t
            } finally {
                p(() => this.requestToken$() === e) && r(() => {
                    this.requestToken$.set(null), this.inFlightPromise = null
                })
            }
        }
    }, at = class {
        constructor(e) {
            y(this, `deps`, void 0), y(this, `entity$`, v(void 0)), y(this, `debug$`, v(void 0)), y(this, `loading$`, v(!1)), y(this, `status$`, v(`idle`)), y(this, `requestToken$`, v(null)), y(this, `error$`, v(void 0)), y(this, `requestKey`, null), y(this, `inFlightPromise`, null), y(this, `profiler`, null), this.deps = e
        }
        ensureStarted(e) {
            return p(() => this.loading$() && this.requestKey === e.requestKey) ? this.inFlightPromise ?? Promise.resolve() : p(() => this.status$() === `success` && this.requestKey === e.requestKey) ? Promise.resolve() : this.start(e)
        }
        start(e) {
            let t = tt();
            this.requestKey = e.requestKey, this.profiler = new A, r(() => {
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
                })) if (p(() => this.requestToken$() === e)) switch (n.type) {
                    case `product_entity`: {
                        let e = this.deps.normalizeProductEntityCitation(n, t.productLookupKey);
                        r(() => {
                            this.entity$.set(e)
                        }), this.profiler?.logTimingOnce(`time_to_product_entity`), e.product.shopping_vto?.eligible === !0 && this.profiler?.logTimingOnce(`fetch_to_virtual_try_on_eligible`), (e.product.offers?.length ?? 0) > 0 && this.profiler?.logTimingOnce(`fetch_to_first_offer`), this.deps.applyProductEntityUpdate({
                            conversation: t.conversation,
                            shellProduct: t.shellProduct,
                            nextProduct: e.product
                        });
                        break
                    }
                    case `__debug`:
                        r(() => {
                            this.debug$.set(nt(this.debug$(), rt(n)))
                        });
                        break;
                    default:
                        break
                }
                p(() => this.requestToken$() === e) && (this.profiler?.hasLoggedTiming(`fetch_to_first_offer`) && this.profiler.logTimingOnce(`fetch_to_all_offers`), r(() => {
                    this.loading$.set(!1), this.status$.set(`success`)
                }))
            } catch (t) {
                p(() => this.requestToken$() === e) && r(() => {
                    this.loading$.set(!1), this.status$.set(`error`), this.error$.set(t)
                })
            } finally {
                p(() => this.requestToken$() === e) && r(() => {
                    this.requestToken$.set(null), this.inFlightPromise = null
                })
            }
        }
    }, ot = class {
        constructor() {
            y(this, `entity$`, v(void 0)), y(this, `loading$`, v(!1)), y(this, `status$`, v(`idle`)), y(this, `error$`, v(void 0)), y(this, `requestKey`, null), y(this, `inFlightPromise`, null)
        }
        ensureStarted(e) {
            return p(() => this.loading$() && this.requestKey === e.requestKey) ? this.inFlightPromise ?? Promise.resolve() : p(() => this.status$() === `success` && this.requestKey === e.requestKey) ? Promise.resolve() : this.start(e)
        }
        start(e) {
            this.requestKey = e.requestKey, r(() => {
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
                r(() => {
                    this.entity$.set(t), this.loading$.set(!1), this.status$.set(`success`)
                })
            } catch (e) {
                r(() => {
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
    streamConversation: i = Ue
}) {
    let a = !1,
        o = [];
    if (await i({
            requestBody: {
                conversation_id: e,
                message_id: t,
                supported_encodings: [g.V1],
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
    We(), Ie()
}));

function j(e) {
    return w(e) ?? z(e)?.sidebar ?? null
}

function M(e, t) {
    let n = j(e);
    return n?.type === `product_agent` && n.reference && B(e) === t ? `enriched` : t.cite ? Ge(e) : `enriched`
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
            stream: Ye({
                reference: t.reference,
                messageId: t.messageId,
                locale: n,
                signal: r.signal
            })
        }),
        s = p(() => a.requestToken$());
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
    return !E(t, `product_agent`) || n == null ? null : Y(e, pt({
        messageId: t.messageId,
        productCitation: n.cite
    }))
}

function mt(e) {
    return e.flatMap(e => {
        if (typeof e.url != `string`) return [];
        let t = ye(e.url.trim());
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
    let n = p(() => H(e));
    n != null && U(e, n).set(t)
}

function _t(e, t, n) {
    let r = L(t);
    K(e, r).set(n)
}

function vt(e, t, n) {
    gt(e, n(p(() => X(e) ?? t)))
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
    let n = p(() => H(e));
    n != null && r(() => {
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
    if (p(() => M(e, t) === `source_catalog`)) return Promise.resolve();
    let c = L(t),
        l = n.product_lookup_key,
        u = p(() => It(e, i)),
        d = p(() => F(e, c)),
        f = Tt({
            conversationId: r,
            messageId: i,
            shellProduct: t,
            productLookupKey: l,
            rewrittenQueries: u
        }),
        m = p(() => w(e));
    if (m?.type === `product_agent` && m.reference?.conversationId === r && m.messageId === i && o == null && JSON.stringify(l?.variant_options_query ?? null) === JSON.stringify(t.product_lookup_key?.variant_options_query ?? null) && d.ownsRequestKey(P(m))) return d.completion;
    let h = o ?? (({
        conversationId: e,
        messageId: t,
        shellProduct: n,
        productLookupKey: r,
        rewrittenQueries: i,
        cacheOnly: o
    }) => Ze({
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

function Ct(e) {
    return ve(() => e.shellProduct.id.startsWith(`query_mode_entity_${e.messageId}_`) ? ie(e.conversation) : !1, () => {
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
    if (p(() => M(e, t) === `source_catalog`)) {
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
    let o = L(t),
        s = t.product_lookup_key,
        c = p(() => S(e)),
        l = d.getNodeIfExists(c, r)?.message,
        u = !p(h) && !p(() => ke(e)) && l?.metadata?.citation_ledger_pending_products?.includes(t.id) && t.id.startsWith(`query_mode_entity_${r}_`) && !s ? {
            conversation_id: n,
            message_id: r,
            product_id: t.id
        } : void 0;
    if (u && p(() => ie(e)) && d.getParentPromptNode(c, r)?.id === d.getParentPromptNode(c)?.id) return Promise.resolve();
    let f = Et({
            productKey: o,
            productLookupKey: s
        }),
        m = J(e, o),
        g = i ?? (({
            shellProduct: e,
            productLookupKey: t
        }) => $e({
            productQuery: e.title,
            productLookupKey: t,
            ledgerSource: u
        }));
    return m.ensureStarted({
        conversation: e,
        requestKey: f,
        requestProductEntity: g,
        conversationId: n,
        messageId: r,
        shellProduct: t,
        productLookupKey: s
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
    let i = L(t);
    if (p(() => K(e, i)())) return;
    let a = U(e, i)() ?? t;
    r(() => {
        n.shopping_vto != null && W(e, i).set(n.shopping_vto.eligible), U(e, i).set(R({
            currentProduct: a,
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
    let n = p(() => j(e));
    if (E(n, `product_agent`) && n.messageId === t) {
        let e = n.rewrittenQueries?.filter(e => typeof e == `string` && e !== ``);
        if (e != null && e.length > 0) return e
    }
    let r = p(() => S(e));
    if (!r) return;
    let i = d.getNodeIfExists(r, t);
    for (; i;) {
        if (i.message.author.role === `assistant`) {
            let e = i.message.metadata?.shopping?.rewritten_queries;
            if (Array.isArray(e)) {
                let t = e.filter(e => typeof e == `string` && e !== ``);
                return t.length > 0 ? t : void 0
            }
        }
        if (!i.parentId) return;
        i = d.getNodeIfExists(r, i.parentId)
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
        let t = i.findIndex(t => Fe(t, e));
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
    return n ? t?.image_urls ?? e?.image_urls ?? [] : At(t?.image_urls?.filter(xe) ?? [], kt(e?.image_urls ?? [], t?.image_urls ?? []))
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
        image_urls: Re([], t.image_urls ?? e.image_urls ?? []),
        ...Pe({
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
    let r = Ce({
        turns: b(e),
        productId: n.id,
        messageId: t
    });
    return r?.messageId !== t || !r.product.shopping_vto?.generated_images?.length ? n : {
        ...n,
        ...Pe({
            currentProduct: r.product,
            nextProduct: {
                ...n,
                shopping_vto: n.shopping_vto ?? r.product.shopping_vto
            }
        })
    }
}
var z, B, V, H, U, W, G, K, q, J, Y, X, Z, Ut, Wt, Q, $, Gt, Kt, qt, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn = e((() => {
    c(), Ae(), Ke(), ge(), n(), l(), be(), Ne(), we(), ze(), Ee(), De(), D(), st(), ut(), i(), ce(), oe(), te(), le(), z = C(() => v(null)), B = C(e => u(() => {
        let t = j(e);
        if (E(t, `product_agent`)) {
            if (t.reference) {
                let n = q(e, P(t)).product$() ?? null;
                return Ht(e, t.messageId, n)
            }
            let n = S(e);
            return Se(n && d.getMaybeMessage(n, t.messageId)?.metadata) ? Ht(e, t.messageId, t.product) : (t.product?.shopping_vto?.eligible ? Ce({
                turns: b(e),
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
        if (E(t, `product`)) {
            let {
                product: n
            } = Te({
                thread: S(e),
                messageId: t.messageId,
                contentReferenceStartIndex: t.contentReferenceStartIndex,
                productIndex: t.productIndex
            });
            return n ?? z(e)?.product ?? null
        }
        return E(t, `entity`) && (t.category === `product` || t.category === `product_link`) ? {
            id: ``,
            query: t.query,
            title: t.query,
            provider: ``,
            url: ``
        } : null
    })), V = C(e => u(() => {
        let t = j(e),
            n = B(e);
        return E(t, `product_agent`) && n ? M(e, n) : `enriched`
    })), H = C(e => u(() => {
        let t = B(e);
        return t ? L(t) : null
    })), U = x((e, t) => v(null)), W = x((e, t) => v(null)), G = x((e, t) => v(-1)), K = x((e, t) => v(!1)), q = x((e, t) => new it), J = x((e, t) => new at({
        normalizeProductEntityCitation: jt,
        applyProductEntityUpdate: Mt
    })), Y = x((e, t) => new ot), X = C(e => u(() => {
        let t = B(e);
        if (V(e) === `source_catalog`) return I(e)?.entity$()?.product ?? null;
        let n = H(e);
        return n == null ? null : Nt(t, U(e, n)())
    })), Z = C(e => u(() => N(e) ? X(e)?.title ?? `` : Pt({
        shellProduct: B(e),
        statefulProduct: X(e),
        hasFetchedVariant: Xt(e)
    }))), Ut = C(e => u(() => {
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
            offers: he(`3375735072`) ? n.offers?.length ? n.offers : t.offers ?? [] : Qt(e)
        }
    }, {
        equals: ee
    })), Wt = C(e => u(() => {
        let t = H(e);
        return t == null ? -1 : G(e, t)()
    })), Q = C(e => u(() => {
        if (N(e)) return;
        let t = H(e);
        if (t != null) return F(e, t).rationale$()
    })), $ = C(e => u(() => {
        if (N(e)) return;
        let t = H(e);
        if (t != null) return F(e, t).reviews$()
    })), Gt = C(e => u(() => {
        if (N(e)) return;
        let t = H(e);
        if (t != null) return Lt(J(e, t).debug$(), F(e, t).debug$())
    })), Kt = C(e => u(() => {
        if (N(e)) return !1;
        let t = H(e);
        return t != null && F(e, t).loading$()
    })), qt = C(e => u(() => {
        if (N(e)) return I(e)?.entity$();
        let t = H(e);
        if (t != null) return J(e, t).entity$()
    })), Jt = C(e => u(() => {
        if (N(e)) return I(e)?.loading$() ?? !1;
        let t = H(e);
        return t != null && J(e, t).loading$()
    })), Yt = C(e => u(() => {
        if (N(e)) return I(e)?.status$() ?? `idle`;
        let t = H(e);
        return t == null ? `idle` : J(e, t).status$()
    })), Xt = C(e => u(() => {
        let t = H(e);
        return t != null && K(e, t)()
    })), Zt = C(e => u(() => {
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
    })), Qt = C(e => u(() => N(e) ? X(e)?.offers ?? [] : Rt({
        shellProduct: B(e),
        statefulProduct: X(e)
    }))), $t = C(e => u(() => {
        if (N(e)) return [];
        let t = j(e);
        if (!E(t, `product`) && !E(t, `product_agent`)) return [];
        let n = B(e),
            r = S(e);
        if (!n || !r) return [];
        let i = d.getMaybeMessage(r, t.messageId)?.metadata?.content_references ?? [],
            a = new Set([n.id]),
            o = [];
        for (let e of i) {
            let t = e.type === `products` || e.type === `explore_more` || e.type === `product_group` ? e.products ?? [] : e.type === `product` || e.type === `product_entity` ? [e.product] : [];
            for (let e of t) a.has(e.id) || (a.add(e.id), o.push(e))
        }
        return o
    })), en = C(e => u(() => {
        let t = !N(e);
        return Ft({
            displayTitle: Z(e),
            description: X(e)?.description,
            rationale: t ? Q(e)?.rationale : void 0,
            reviewsSummary: t ? $(e)?.summary : void 0
        })
    })), tn = C(e => u(() => {
        let t = j(e),
            n = S(e),
            r = e => n != null && Se(d.getMaybeMessage(n, e)?.metadata);
        return E(t, `product`) ? {
            clientThreadId: e.id,
            messageId: t.messageId,
            turnIndex: t.turnIndex,
            isGenui: r(t.messageId)
        } : E(t, `product_agent`) ? {
            clientThreadId: e.id,
            messageId: t.messageId,
            turnIndex: 0,
            isGenui: r(t.messageId)
        } : E(t, `entity`) && (t.category === `product` || t.category === `product_link`) ? {
            clientThreadId: e.id,
            messageId: t.messageId,
            isGenui: r(t.messageId)
        } : {
            clientThreadId: e.id,
            isGenui: !1
        }
    }, {
        equals: ee
    }))
}));
export {
    Ct as A, Ge as B, nn as C, W as D, U as E, Xe as F, D as I, $e as L, St as M, A as N, xt as O, et as P, qe as R, It as S, K as T, Ke as V, $ as _, en as a, B as b, V as c, Yt as d, Zt as f, dt as g, Q as h, tn as i, wt as j, z as k, qt as l, Kt as m, bt as n, Z as o, Gt as p, L as r, Wt as s, yt as t, Jt as u, $t as v, ft as w, X as x, Ut as y, Je as z
};
//# sourceMappingURL=2b67bcd8-jz2oqjspu3i9zh7k.js.map