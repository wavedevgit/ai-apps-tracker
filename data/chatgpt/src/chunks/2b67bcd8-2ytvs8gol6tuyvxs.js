import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $u as t,
    A8 as n,
    B0 as r,
    BC as i,
    Crt as a,
    F8 as o,
    GJ as s,
    Gat as c,
    I7 as l,
    Irt as u,
    Jot as d,
    K0 as f,
    Kat as p,
    Lat as m,
    Lrt as ee,
    Q8 as te,
    R8 as h,
    Rat as ne,
    Rrt as re,
    SJ as ie,
    VC as g,
    WB as ae,
    Wot as oe,
    Xat as se,
    Yot as _,
    Z8 as ce,
    Zu as v,
    _rt as le,
    ait as y,
    cot as ue,
    eY as de,
    fF as b,
    hrt as fe,
    i5 as pe,
    id as x,
    jB as me,
    met as he,
    p5 as S,
    uF as C,
    vF as ge,
    wJ as _e,
    y5 as w,
    y9 as ve
} from "./4813494d-mdvd4786a87166cc.js";
import {
    $Zt as ye,
    Elt as be,
    Fwt as xe,
    JZt as Se,
    Lwt as Ce,
    MSt as we,
    PQt as Te,
    PSt as Ee,
    QZt as De,
    Tlt as Oe,
    YIn as T,
    YZt as E,
    bmt as ke,
    eLn as D,
    fmt as O,
    jSt as Ae,
    lmt as je,
    mmt as Me,
    oHn as Ne,
    qIn as Pe,
    sHn as Fe,
    xmt as Ie,
    ymt as Le
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    a as Re,
    i as ze,
    n as Be,
    r as Ve,
    t as He
} from "./2f772deb-m9fsmajg6xos68k3.js";

function Ue(e) {
    return e == null || me({
        turns: v(e)
    }) == null ? `enriched` : ve() ? `source_catalog` : `enriched`
}
var We = e((() => {
    ae(), he(), t()
}));

function Ge() {
    return `${m}/search/product_info_variants`
}
var Ke = e((() => {
    ne(), Te()
}));
async function* qe({
    reference: e,
    messageId: t,
    locale: n,
    signal: r
}) {
    let i = !1;
    for await (let a of Be({
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
        if (!i && a.type === `message`) {
            let t = a.data.metadata?.content_references?.find(e => e.type === `product_entity`);
            t?.type === `product_entity` && (i = !0, yield t, r.aborted || e.onResolved?.(t))
        }
        yield* Xe(a)
    }
    if (!i && !r.aborted) throw Error(se)
}
async function Je({
    productLookupKey: e,
    onProductEntity: t
}) {
    let n = E(Ge(), {
            method: `POST`,
            headers: {
                ...y({
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
            supported_encodings: [oe.V1],
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
        d = E(`${m}${u}`, {
            method: `POST`,
            headers: {
                ...y({
                    isAuthOptional: !0
                }),
                "Content-Type": `application/json`
            },
            body: l,
            routeName: u
        }),
        f = !1;
    for await (let e of De(d)) {
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
    let r = E(`${m}/search/product_update`, {
        method: `POST`,
        headers: {
            ...y({
                isAuthOptional: !0
            }),
            ...n ? ie({
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
        _e(), He(), Re(), ue(), ne(), ye(), l(), Se(), Ke()
    })),
    $e, k, A, et = e((() => {
        u(), a(), _(), $e = {
            fetch_to_all_offers: `product_sidebar_fetch_to_all_offers_ms`,
            fetch_to_first_offer: `product_sidebar_fetch_to_first_offer_ms`,
            render_time_to_all_offers: `product_sidebar_render_to_all_offers_ms`,
            render_time_to_first_offer: `product_sidebar_render_to_first_offer_ms`,
            render_time_to_first_review: `product_sidebar_time_to_reviews_ms`,
            render_time_to_rationale: `product_sidebar_time_to_rationale_ms`
        }, k = new WeakMap, A = class {
            constructor() {
                d(this, `startMs`, performance.now()), d(this, `loggedTimings`, new Set), d(this, `loggedRenderOfferTimings`, new Set)
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
                ee.hist(re.SHOPPING, `product_sidebar_timing_duration_ms`, {
                    timing: e
                }, n);
                let r = $e[e];
                r && fe.logEvent(r, n), this.loggedTimings.add(e)
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
    et(), n(), _(), it = class {
        constructor() {
            d(this, `product$`, h(void 0)), d(this, `rationale$`, h(void 0)), d(this, `reviews$`, h(void 0)), d(this, `debug$`, h(void 0)), d(this, `loading$`, h(!1)), d(this, `status$`, h(`idle`)), d(this, `requestToken$`, h(null)), d(this, `error$`, h(void 0)), d(this, `requestKey`, null), d(this, `inFlightPromise`, null), d(this, `profiler`, null), d(this, `cacheOnly`, !1)
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
            this.requestKey = e.requestKey, this.cacheOnly = e.cacheOnly === !0, this.profiler = this.cacheOnly ? null : new A, S(() => {
                this.loading$.set(!0), this.status$.set(`loading`), this.requestToken$.set(t), this.error$.set(void 0)
            });
            let n = this.run(t, e);
            return this.inFlightPromise = n, n
        }
        cancel(e) {
            w(() => this.requestToken$()) === e && (this.requestKey = null, S(() => {
                this.requestToken$.set(null), this.loading$.set(!1), this.status$.set(`idle`), this.inFlightPromise = null
            }))
        }
        async run(e, t) {
            try {
                let n = !1;
                for await (let r of t.stream) if (w(() => this.requestToken$()) === e) switch (r.type) {
                    case `product_entity`:
                        S(() => this.product$.set(r.product));
                        break;
                    case `product_rationale`:
                        n = !0, S(() => {
                            this.rationale$.set(r)
                        }), this.profiler?.logTimingOnce(`time_to_rationale`);
                        break;
                    case `product_reviews`:
                        n = !0, S(() => {
                            this.reviews$.set(r)
                        }), this.profiler?.logTimingOnce(`time_to_first_review`);
                        break;
                    case `__debug`:
                        S(() => {
                            this.debug$.set(nt(this.debug$(), r))
                        });
                        break;
                    default:
                        break
                }
                w(() => this.requestToken$() === e) && S(() => {
                    this.loading$.set(!1), this.status$.set(t.cacheOnly && !n ? `idle` : `success`)
                })
            } catch (t) {
                throw w(() => this.requestToken$() === e) && S(() => {
                    this.loading$.set(!1), this.status$.set(`error`), this.error$.set(t)
                }), t
            } finally {
                w(() => this.requestToken$() === e) && S(() => {
                    this.requestToken$.set(null), this.inFlightPromise = null
                })
            }
        }
    }, at = class {
        constructor(e) {
            d(this, `deps`, void 0), d(this, `entity$`, h(void 0)), d(this, `debug$`, h(void 0)), d(this, `loading$`, h(!1)), d(this, `status$`, h(`idle`)), d(this, `requestToken$`, h(null)), d(this, `error$`, h(void 0)), d(this, `requestKey`, null), d(this, `inFlightPromise`, null), d(this, `profiler`, null), this.deps = e
        }
        ensureStarted(e) {
            return w(() => this.loading$() && this.requestKey === e.requestKey) ? this.inFlightPromise ?? Promise.resolve() : w(() => this.status$() === `success` && this.requestKey === e.requestKey) ? Promise.resolve() : this.start(e)
        }
        start(e) {
            let t = tt();
            this.requestKey = e.requestKey, this.profiler = new A, S(() => {
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
                        S(() => {
                            this.entity$.set(e)
                        }), this.profiler?.logTimingOnce(`time_to_product_entity`), e.product.shopping_vto?.eligible === !0 && this.profiler?.logTimingOnce(`fetch_to_virtual_try_on_eligible`), (e.product.offers?.length ?? 0) > 0 && this.profiler?.logTimingOnce(`fetch_to_first_offer`), this.deps.applyProductEntityUpdate({
                            conversation: t.conversation,
                            shellProduct: t.shellProduct,
                            nextProduct: e.product
                        });
                        break
                    }
                    case `__debug`:
                        S(() => {
                            this.debug$.set(nt(this.debug$(), rt(n)))
                        });
                        break;
                    default:
                        break
                }
                w(() => this.requestToken$() === e) && (this.profiler?.hasLoggedTiming(`fetch_to_first_offer`) && this.profiler.logTimingOnce(`fetch_to_all_offers`), S(() => {
                    this.loading$.set(!1), this.status$.set(`success`)
                }))
            } catch (t) {
                w(() => this.requestToken$() === e) && S(() => {
                    this.loading$.set(!1), this.status$.set(`error`), this.error$.set(t)
                })
            } finally {
                w(() => this.requestToken$() === e) && S(() => {
                    this.requestToken$.set(null), this.inFlightPromise = null
                })
            }
        }
    }, ot = class {
        constructor() {
            d(this, `entity$`, h(void 0)), d(this, `loading$`, h(!1)), d(this, `status$`, h(`idle`)), d(this, `error$`, h(void 0)), d(this, `requestKey`, null), d(this, `inFlightPromise`, null)
        }
        ensureStarted(e) {
            return w(() => this.loading$() && this.requestKey === e.requestKey) ? this.inFlightPromise ?? Promise.resolve() : w(() => this.status$() === `success` && this.requestKey === e.requestKey) ? Promise.resolve() : this.start(e)
        }
        start(e) {
            this.requestKey = e.requestKey, S(() => {
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
                S(() => {
                    this.entity$.set(t), this.loading$.set(!1), this.status$.set(`success`)
                })
            } catch (e) {
                S(() => {
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
                supported_encodings: [oe.V1],
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
    He(), ye()
}));

function j(e) {
    return D(e) ?? z(e)?.sidebar ?? null
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
    return !T(t, `product_agent`) || n == null ? null : Y(e, pt({
        messageId: t.messageId,
        productCitation: n.cite
    }))
}

function mt(e) {
    return e.flatMap(e => {
        if (typeof e.url != `string`) return [];
        let t = p(e.url.trim());
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
    n != null && S(() => {
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
        p = w(() => D(e));
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
    return pe(() => e.shellProduct.id.startsWith(`query_mode_entity_${e.messageId}_`) ? g(e.conversation) : !1, () => {
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
    let o = L(t),
        c = t.product_lookup_key,
        l = w(() => x(e)),
        u = s.getNodeIfExists(l, r)?.message,
        d = !w(f) && !w(() => Ne(e)) && u?.metadata?.citation_ledger_pending_products?.includes(t.id) && t.id.startsWith(`query_mode_entity_${r}_`) && !c ? {
            conversation_id: n,
            message_id: r,
            product_id: t.id
        } : void 0;
    if (d && w(() => g(e)) && s.getParentPromptNode(l, r)?.id === s.getParentPromptNode(l)?.id) return Promise.resolve();
    let p = Et({
            productKey: o,
            productLookupKey: c
        }),
        m = J(e, o),
        ee = i ?? (({
            shellProduct: e,
            productLookupKey: t
        }) => Ze({
            productQuery: e.title,
            productLookupKey: t,
            ledgerSource: d
        }));
    return m.ensureStarted({
        conversation: e,
        requestKey: p,
        requestProductEntity: ee,
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
    S(() => {
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
    if (T(n, `product_agent`) && n.messageId === t) {
        let e = n.rewrittenQueries?.filter(e => typeof e == `string` && e !== ``);
        if (e != null && e.length > 0) return e
    }
    let r = w(() => x(e));
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
        let t = i.findIndex(t => be(t, e));
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
    return n ? t?.image_urls ?? e?.image_urls ?? [] : At(t?.image_urls?.filter(ke) ?? [], kt(e?.image_urls ?? [], t?.image_urls ?? []))
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
        image_urls: Ie([], t.image_urls ?? e.image_urls ?? []),
        ...O({
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
    let r = Ae({
        turns: v(e),
        productId: n.id,
        messageId: t
    });
    return r?.messageId !== t || !r.product.shopping_vto?.generated_images?.length ? n : {
        ...n,
        ...O({
            currentProduct: r.product,
            nextProduct: {
                ...n,
                shopping_vto: n.shopping_vto ?? r.product.shopping_vto
            }
        })
    }
}
var z, B, V, H, U, W, G, K, q, J, Y, X, Z, Ut, Wt, Q, $, Gt, Kt, qt, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn = e((() => {
    r(), Fe(), We(), ge(), t(), i(), xe(), je(), Pe(), Ee(), Oe(), Le(), Qe(), st(), ut(), n(), de(), ce(), c(), a(), z = C(() => h(null)), B = C(e => o(() => {
        let t = j(e);
        if (T(t, `product_agent`)) {
            if (t.reference) {
                let n = q(e, P(t)).product$() ?? null;
                return Ht(e, t.messageId, n)
            }
            let n = x(e);
            return Ce(n && s.getMaybeMessage(n, t.messageId)?.metadata) ? Ht(e, t.messageId, t.product) : (t.product?.shopping_vto?.eligible ? Ae({
                turns: v(e),
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
        if (T(t, `product`)) {
            let {
                product: n
            } = we({
                thread: x(e),
                messageId: t.messageId,
                contentReferenceStartIndex: t.contentReferenceStartIndex,
                productIndex: t.productIndex
            });
            return n ?? z(e)?.product ?? null
        }
        return T(t, `entity`) && (t.category === `product` || t.category === `product_link`) ? {
            id: ``,
            query: t.query,
            title: t.query,
            provider: ``,
            url: ``
        } : null
    })), V = C(e => o(() => {
        let t = j(e),
            n = B(e);
        return T(t, `product_agent`) && n ? M(e, n) : `enriched`
    })), H = C(e => o(() => {
        let t = B(e);
        return t ? L(t) : null
    })), U = b((e, t) => h(null)), W = b((e, t) => h(null)), G = b((e, t) => h(-1)), K = b((e, t) => h(!1)), q = b((e, t) => new it), J = b((e, t) => new at({
        normalizeProductEntityCitation: jt,
        applyProductEntityUpdate: Mt
    })), Y = b((e, t) => new ot), X = C(e => o(() => {
        let t = B(e);
        if (V(e) === `source_catalog`) return I(e)?.entity$()?.product ?? null;
        let n = H(e);
        return n == null ? null : Nt(t, U(e, n)())
    })), Z = C(e => o(() => N(e) ? X(e)?.title ?? `` : Pt({
        shellProduct: B(e),
        statefulProduct: X(e),
        hasFetchedVariant: Xt(e)
    }))), Ut = C(e => o(() => {
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
            offers: le(`3375735072`) ? n.offers?.length ? n.offers : t.offers ?? [] : Qt(e)
        }
    }, {
        equals: te
    })), Wt = C(e => o(() => {
        let t = H(e);
        return t == null ? -1 : G(e, t)()
    })), Q = C(e => o(() => {
        if (N(e)) return;
        let t = H(e);
        if (t != null) return F(e, t).rationale$()
    })), $ = C(e => o(() => {
        if (N(e)) return;
        let t = H(e);
        if (t != null) return F(e, t).reviews$()
    })), Gt = C(e => o(() => {
        if (N(e)) return;
        let t = H(e);
        if (t != null) return Lt(J(e, t).debug$(), F(e, t).debug$())
    })), Kt = C(e => o(() => {
        if (N(e)) return !1;
        let t = H(e);
        return t != null && F(e, t).loading$()
    })), qt = C(e => o(() => {
        if (N(e)) return I(e)?.entity$();
        let t = H(e);
        if (t != null) return J(e, t).entity$()
    })), Jt = C(e => o(() => {
        if (N(e)) return I(e)?.loading$() ?? !1;
        let t = H(e);
        return t != null && J(e, t).loading$()
    })), Yt = C(e => o(() => {
        if (N(e)) return I(e)?.status$() ?? `idle`;
        let t = H(e);
        return t == null ? `idle` : J(e, t).status$()
    })), Xt = C(e => o(() => {
        let t = H(e);
        return t != null && K(e, t)()
    })), Zt = C(e => o(() => {
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
        return Me({
            product: r ?? n,
            imageUrls: i
        })
    })), Qt = C(e => o(() => N(e) ? X(e)?.offers ?? [] : Rt({
        shellProduct: B(e),
        statefulProduct: X(e)
    }))), $t = C(e => o(() => {
        if (N(e)) return [];
        let t = j(e);
        if (!T(t, `product`) && !T(t, `product_agent`)) return [];
        let n = B(e),
            r = x(e);
        if (!n || !r) return [];
        let i = s.getMaybeMessage(r, t.messageId)?.metadata?.content_references ?? [],
            a = new Set([n.id]),
            o = [];
        for (let e of i) {
            let t = e.type === `products` || e.type === `explore_more` || e.type === `product_group` ? e.products ?? [] : e.type === `product` || e.type === `product_entity` ? [e.product] : [];
            for (let e of t) a.has(e.id) || (a.add(e.id), o.push(e))
        }
        return o
    })), en = C(e => o(() => {
        let t = !N(e);
        return Ft({
            displayTitle: Z(e),
            description: X(e)?.description,
            rationale: t ? Q(e)?.rationale : void 0,
            reviewsSummary: t ? $(e)?.summary : void 0
        })
    })), tn = C(e => o(() => {
        let t = j(e),
            n = x(e),
            r = e => n != null && Ce(s.getMaybeMessage(n, e)?.metadata);
        return T(t, `product`) ? {
            clientThreadId: e.id,
            messageId: t.messageId,
            turnIndex: t.turnIndex,
            isGenui: r(t.messageId)
        } : T(t, `product_agent`) ? {
            clientThreadId: e.id,
            messageId: t.messageId,
            turnIndex: 0,
            isGenui: r(t.messageId)
        } : T(t, `entity`) && (t.category === `product` || t.category === `product_link`) ? {
            clientThreadId: e.id,
            messageId: t.messageId,
            isGenui: r(t.messageId)
        } : {
            clientThreadId: e.id,
            isGenui: !1
        }
    }, {
        equals: te
    }))
}));
export {
    Ct as A, Ue as B, nn as C, W as D, U as E, Je as F, Qe as I, Ze as L, St as M, A as N, xt as O, et as P, Ge as R, It as S, K as T, We as V, $ as _, en as a, B as b, V as c, Yt as d, Zt as f, dt as g, Q as h, tn as i, wt as j, z as k, qt as l, Kt as m, bt as n, Z as o, Gt as p, L as r, Wt as s, yt as t, Jt as u, $t as v, ft as w, X as x, Ut as y, Ke as z
};
//# sourceMappingURL=2b67bcd8-2ytvs8gol6tuyvxs.js.map