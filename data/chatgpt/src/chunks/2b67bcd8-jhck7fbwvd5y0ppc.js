import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bat as t,
    Cat as n,
    DJ as r,
    Dot as i,
    Eot as a,
    FC as o,
    IC as s,
    JJ as c,
    L0 as l,
    L8 as u,
    LB as d,
    Lrt as f,
    Oat as p,
    Qu as m,
    R8 as h,
    S5 as g,
    S9 as ee,
    Sot as te,
    TJ as ne,
    Xu as _,
    Ynt as re,
    aF as v,
    g5 as y,
    g8 as ie,
    gat as b,
    grt as ae,
    hat as x,
    het as oe,
    hrt as se,
    j0 as ce,
    mrt as le,
    pF as ue,
    qnt as de,
    rY as fe,
    rd as S,
    s5 as pe,
    sF as C,
    trt as me,
    w8 as w,
    wB as he,
    wat as ge,
    x8 as T,
    z7 as _e
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    $Fn as ve,
    Amt as ye,
    BSt as be,
    Cmt as xe,
    Flt as Se,
    Kwt as Ce,
    LQt as we,
    Omt as Te,
    Plt as Ee,
    QZt as E,
    USt as De,
    VSt as Oe,
    Wwt as ke,
    ZZt as Ae,
    fVn as je,
    kmt as Me,
    nQt as Ne,
    oIn as Pe,
    pVn as Fe,
    tIn as D,
    tQt as Ie,
    vmt as Le,
    xmt as Re
} from "./conversation-small-nmt18uiom3b14vca.js";
import {
    a as ze,
    i as Be,
    n as Ve,
    r as He,
    t as Ue
} from "./2f772deb-lovwlkpfs8jaqjuw.js";

function We(e) {
    return e == null || he({
        turns: _(e)
    }) == null ? `enriched` : ee() ? `source_catalog` : `enriched`
}
var Ge = e((() => {
    d(), oe(), m()
}));

function Ke() {
    return `${x}/search/product_info_variants`
}
var qe = e((() => {
    b(), we()
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
    if (!i && !r.aborted) throw Error(p)
}
async function Ye({
    productLookupKey: e,
    onProductEntity: t
}) {
    let n = E(Ke(), {
            method: `POST`,
            headers: {
                ...f({
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
            supported_encodings: [te.V1],
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
        d = E(`${x}${u}`, {
            method: `POST`,
            headers: {
                ...f({
                    isAuthOptional: !0
                }),
                "Content-Type": `application/json`
            },
            body: l,
            routeName: u
        }),
        p = !1;
    for await (let e of Ie(d)) {
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
async function* O({
    productQuery: e,
    productLookupKey: t,
    ledgerSource: n
}) {
    let r = E(`${x}/search/product_update`, {
        method: `POST`,
        headers: {
            ...f({
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
var Qe = e((() => {
        r(), Ue(), ze(), t(), b(), Ne(), _e(), Ae(), qe()
    })),
    $e, k, A, et = e((() => {
        le(), me(), i(), $e = {
            fetch_to_all_offers: `product_sidebar_fetch_to_all_offers_ms`,
            fetch_to_first_offer: `product_sidebar_fetch_to_first_offer_ms`,
            render_time_to_all_offers: `product_sidebar_render_to_all_offers_ms`,
            render_time_to_first_offer: `product_sidebar_render_to_first_offer_ms`,
            render_time_to_first_review: `product_sidebar_time_to_reviews_ms`,
            render_time_to_rationale: `product_sidebar_time_to_rationale_ms`
        }, k = new WeakMap, A = class {
            constructor() {
                a(this, `startMs`, performance.now()), a(this, `loggedTimings`, new Set), a(this, `loggedRenderOfferTimings`, new Set)
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
                se.hist(ae.SHOPPING, `product_sidebar_timing_duration_ms`, {
                    timing: e
                }, n);
                let r = $e[e];
                r && de.logEvent(r, n), this.loggedTimings.add(e)
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
    et(), ie(), i(), it = class {
        constructor() {
            a(this, `product$`, w(void 0)), a(this, `rationale$`, w(void 0)), a(this, `reviews$`, w(void 0)), a(this, `debug$`, w(void 0)), a(this, `loading$`, w(!1)), a(this, `status$`, w(`idle`)), a(this, `requestToken$`, w(null)), a(this, `error$`, w(void 0)), a(this, `requestKey`, null), a(this, `inFlightPromise`, null), a(this, `profiler`, null), a(this, `cacheOnly`, !1)
        }
        ensureStarted(e) {
            return g(() => this.loading$() && this.requestKey === e.requestKey) ? this.cacheOnly && e.cacheOnly !== !0 ? (this.inFlightPromise ?? Promise.resolve()).then(() => this.ensureStarted(e), () => this.ensureStarted(e)) : this.inFlightPromise ?? Promise.resolve() : g(() => this.status$() === `success` && this.requestKey === e.requestKey) ? Promise.resolve() : this.startStream({
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
            this.requestKey = e.requestKey, this.cacheOnly = e.cacheOnly === !0, this.profiler = this.cacheOnly ? null : new A, y(() => {
                this.loading$.set(!0), this.status$.set(`loading`), this.requestToken$.set(t), this.error$.set(void 0)
            });
            let n = this.run(t, e);
            return this.inFlightPromise = n, n
        }
        cancel(e) {
            g(() => this.requestToken$()) === e && (this.requestKey = null, y(() => {
                this.requestToken$.set(null), this.loading$.set(!1), this.status$.set(`idle`), this.inFlightPromise = null
            }))
        }
        async run(e, t) {
            try {
                let n = !1;
                for await (let r of t.stream) if (g(() => this.requestToken$()) === e) switch (r.type) {
                    case `product_entity`:
                        y(() => this.product$.set(r.product));
                        break;
                    case `product_rationale`:
                        n = !0, y(() => {
                            this.rationale$.set(r)
                        }), this.profiler?.logTimingOnce(`time_to_rationale`);
                        break;
                    case `product_reviews`:
                        n = !0, y(() => {
                            this.reviews$.set(r)
                        }), this.profiler?.logTimingOnce(`time_to_first_review`);
                        break;
                    case `__debug`:
                        y(() => {
                            this.debug$.set(nt(this.debug$(), r))
                        });
                        break;
                    default:
                        break
                }
                g(() => this.requestToken$() === e) && y(() => {
                    this.loading$.set(!1), this.status$.set(t.cacheOnly && !n ? `idle` : `success`)
                })
            } catch (t) {
                throw g(() => this.requestToken$() === e) && y(() => {
                    this.loading$.set(!1), this.status$.set(`error`), this.error$.set(t)
                }), t
            } finally {
                g(() => this.requestToken$() === e) && y(() => {
                    this.requestToken$.set(null), this.inFlightPromise = null
                })
            }
        }
    }, at = class {
        constructor(e) {
            a(this, `deps`, void 0), a(this, `entity$`, w(void 0)), a(this, `debug$`, w(void 0)), a(this, `loading$`, w(!1)), a(this, `status$`, w(`idle`)), a(this, `requestToken$`, w(null)), a(this, `error$`, w(void 0)), a(this, `requestKey`, null), a(this, `inFlightPromise`, null), a(this, `profiler`, null), this.deps = e
        }
        ensureStarted(e) {
            return g(() => this.loading$() && this.requestKey === e.requestKey) ? this.inFlightPromise ?? Promise.resolve() : g(() => this.status$() === `success` && this.requestKey === e.requestKey) ? Promise.resolve() : this.start(e)
        }
        start(e) {
            let t = tt();
            this.requestKey = e.requestKey, this.profiler = new A, y(() => {
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
                })) if (g(() => this.requestToken$() === e)) switch (n.type) {
                    case `product_entity`: {
                        let e = this.deps.normalizeProductEntityCitation(n, t.productLookupKey);
                        y(() => {
                            this.entity$.set(e)
                        }), this.profiler?.logTimingOnce(`time_to_product_entity`), e.product.shopping_vto?.eligible === !0 && this.profiler?.logTimingOnce(`fetch_to_virtual_try_on_eligible`), (e.product.offers?.length ?? 0) > 0 && this.profiler?.logTimingOnce(`fetch_to_first_offer`), this.deps.applyProductEntityUpdate({
                            conversation: t.conversation,
                            shellProduct: t.shellProduct,
                            nextProduct: e.product
                        });
                        break
                    }
                    case `__debug`:
                        y(() => {
                            this.debug$.set(nt(this.debug$(), rt(n)))
                        });
                        break;
                    default:
                        break
                }
                g(() => this.requestToken$() === e) && (this.profiler?.hasLoggedTiming(`fetch_to_first_offer`) && this.profiler.logTimingOnce(`fetch_to_all_offers`), y(() => {
                    this.loading$.set(!1), this.status$.set(`success`)
                }))
            } catch (t) {
                g(() => this.requestToken$() === e) && y(() => {
                    this.loading$.set(!1), this.status$.set(`error`), this.error$.set(t)
                })
            } finally {
                g(() => this.requestToken$() === e) && y(() => {
                    this.requestToken$.set(null), this.inFlightPromise = null
                })
            }
        }
    }, ot = class {
        constructor() {
            a(this, `entity$`, w(void 0)), a(this, `loading$`, w(!1)), a(this, `status$`, w(`idle`)), a(this, `error$`, w(void 0)), a(this, `requestKey`, null), a(this, `inFlightPromise`, null)
        }
        ensureStarted(e) {
            return g(() => this.loading$() && this.requestKey === e.requestKey) ? this.inFlightPromise ?? Promise.resolve() : g(() => this.status$() === `success` && this.requestKey === e.requestKey) ? Promise.resolve() : this.start(e)
        }
        start(e) {
            this.requestKey = e.requestKey, y(() => {
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
                y(() => {
                    this.entity$.set(t), this.loading$.set(!1), this.status$.set(`success`)
                })
            } catch (e) {
                y(() => {
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
    streamConversation: i = He
}) {
    let a = !1,
        o = [];
    if (await i({
            requestBody: {
                conversation_id: e,
                message_id: t,
                supported_encodings: [te.V1],
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
    Ue(), Ne()
}));

function j(e) {
    return Pe(e) ?? z(e)?.sidebar ?? null
}

function M(e, t) {
    let n = j(e);
    return n?.type === `product_agent` && n.reference && B(e) === t ? `enriched` : t.cite ? We(e) : `enriched`
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
            stream: Je({
                reference: t.reference,
                messageId: t.messageId,
                locale: n,
                signal: r.signal
            })
        }),
        s = g(() => a.requestToken$());
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
    return !D(t, `product_agent`) || n == null ? null : Y(e, pt({
        messageId: t.messageId,
        productCitation: n.cite
    }))
}

function mt(e) {
    return e.flatMap(e => {
        if (typeof e.url != `string`) return [];
        let t = ge(e.url.trim());
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
    let n = g(() => H(e));
    n != null && U(e, n).set(t)
}

function _t(e, t, n) {
    let r = L(t);
    K(e, r).set(n)
}

function vt(e, t, n) {
    gt(e, n(g(() => X(e) ?? t)))
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
    let n = g(() => H(e));
    n != null && y(() => {
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
    if (g(() => M(e, t) === `source_catalog`)) return Promise.resolve();
    let c = L(t),
        l = n.product_lookup_key,
        u = g(() => It(e, i)),
        d = g(() => F(e, c)),
        f = Tt({
            conversationId: r,
            messageId: i,
            shellProduct: t,
            productLookupKey: l,
            rewrittenQueries: u
        }),
        p = g(() => Pe(e));
    if (p?.type === `product_agent` && p.reference?.conversationId === r && p.messageId === i && o == null && JSON.stringify(l?.variant_options_query ?? null) === JSON.stringify(t.product_lookup_key?.variant_options_query ?? null) && d.ownsRequestKey(P(p))) return d.completion;
    let m = o ?? (({
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
    return pe(() => e.shellProduct.id.startsWith(`query_mode_entity_${e.messageId}_`) ? s(e.conversation) : !1, () => {
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
    if (g(() => M(e, t) === `source_catalog`)) {
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
        u = t.product_lookup_key,
        d = g(() => S(e)),
        f = c.getNodeIfExists(d, r)?.message,
        p = !g(l) && !g(() => je(e)) && f?.metadata?.citation_ledger_pending_products?.includes(t.id) && t.id.startsWith(`query_mode_entity_${r}_`) && !u ? {
            conversation_id: n,
            message_id: r,
            product_id: t.id
        } : void 0;
    if (p && g(() => s(e)) && c.getParentPromptNode(d, r)?.id === c.getParentPromptNode(d)?.id) return Promise.resolve();
    let m = Et({
            productKey: o,
            productLookupKey: u
        }),
        h = J(e, o),
        ee = i ?? (({
            shellProduct: e,
            productLookupKey: t
        }) => O({
            productQuery: e.title,
            productLookupKey: t,
            ledgerSource: p
        }));
    return h.ensureStarted({
        conversation: e,
        requestKey: m,
        requestProductEntity: ee,
        conversationId: n,
        messageId: r,
        shellProduct: t,
        productLookupKey: u
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
    if (g(() => K(e, r)())) return;
    let i = U(e, r)() ?? t;
    y(() => {
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
    let n = g(() => j(e));
    if (D(n, `product_agent`) && n.messageId === t) {
        let e = n.rewrittenQueries?.filter(e => typeof e == `string` && e !== ``);
        if (e != null && e.length > 0) return e
    }
    let r = g(() => S(e));
    if (!r) return;
    let i = c.getNodeIfExists(r, t);
    for (; i;) {
        if (i.message.author.role === `assistant`) {
            let e = i.message.metadata?.shopping?.rewritten_queries;
            if (Array.isArray(e)) {
                let t = e.filter(e => typeof e == `string` && e !== ``);
                return t.length > 0 ? t : void 0
            }
        }
        if (!i.parentId) return;
        i = c.getNodeIfExists(r, i.parentId)
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
        let t = i.findIndex(t => Se(t, e));
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
    return n ? t?.image_urls ?? e?.image_urls ?? [] : At(t?.image_urls?.filter(Me) ?? [], kt(e?.image_urls ?? [], t?.image_urls ?? []))
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

function Ht(e, t, n) {
    if (n == null) return null;
    let r = be({
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
var z, B, V, H, U, W, G, K, q, J, Y, X, Z, Ut, Wt, Q, $, Gt, Kt, qt, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn = e((() => {
    ce(), Fe(), Ge(), ue(), m(), o(), ke(), Le(), ve(), De(), Ee(), Te(), Qe(), st(), ut(), ie(), fe(), u(), n(), me(), z = v(() => w(null)), B = v(e => T(() => {
        let t = j(e);
        if (D(t, `product_agent`)) {
            if (t.reference) {
                let n = q(e, P(t)).product$() ?? null;
                return Ht(e, t.messageId, n)
            }
            let n = S(e);
            return Ce(n && c.getMaybeMessage(n, t.messageId)?.metadata) ? Ht(e, t.messageId, t.product) : (t.product?.shopping_vto?.eligible ? be({
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
            return n ?? z(e)?.product ?? null
        }
        return D(t, `entity`) && (t.category === `product` || t.category === `product_link`) ? {
            id: ``,
            query: t.query,
            title: t.query,
            provider: ``,
            url: ``
        } : null
    })), V = v(e => T(() => {
        let t = j(e),
            n = B(e);
        return D(t, `product_agent`) && n ? M(e, n) : `enriched`
    })), H = v(e => T(() => {
        let t = B(e);
        return t ? L(t) : null
    })), U = C((e, t) => w(null)), W = C((e, t) => w(null)), G = C((e, t) => w(-1)), K = C((e, t) => w(!1)), q = C((e, t) => new it), J = C((e, t) => new at({
        normalizeProductEntityCitation: jt,
        applyProductEntityUpdate: Mt
    })), Y = C((e, t) => new ot), X = v(e => T(() => {
        let t = B(e);
        if (V(e) === `source_catalog`) return I(e)?.entity$()?.product ?? null;
        let n = H(e);
        return n == null ? null : Nt(t, U(e, n)())
    })), Z = v(e => T(() => N(e) ? X(e)?.title ?? `` : Pt({
        shellProduct: B(e),
        statefulProduct: X(e),
        hasFetchedVariant: Xt(e)
    }))), Ut = v(e => T(() => {
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
            offers: re(`3375735072`) ? n.offers?.length ? n.offers : t.offers ?? [] : Qt(e)
        }
    }, {
        equals: h
    })), Wt = v(e => T(() => {
        let t = H(e);
        return t == null ? -1 : G(e, t)()
    })), Q = v(e => T(() => {
        if (N(e)) return;
        let t = H(e);
        if (t != null) return F(e, t).rationale$()
    })), $ = v(e => T(() => {
        if (N(e)) return;
        let t = H(e);
        if (t != null) return F(e, t).reviews$()
    })), Gt = v(e => T(() => {
        if (N(e)) return;
        let t = H(e);
        if (t != null) return Lt(J(e, t).debug$(), F(e, t).debug$())
    })), Kt = v(e => T(() => {
        if (N(e)) return !1;
        let t = H(e);
        return t != null && F(e, t).loading$()
    })), qt = v(e => T(() => {
        if (N(e)) return I(e)?.entity$();
        let t = H(e);
        if (t != null) return J(e, t).entity$()
    })), Jt = v(e => T(() => {
        if (N(e)) return I(e)?.loading$() ?? !1;
        let t = H(e);
        return t != null && J(e, t).loading$()
    })), Yt = v(e => T(() => {
        if (N(e)) return I(e)?.status$() ?? `idle`;
        let t = H(e);
        return t == null ? `idle` : J(e, t).status$()
    })), Xt = v(e => T(() => {
        let t = H(e);
        return t != null && K(e, t)()
    })), Zt = v(e => T(() => {
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
        return xe({
            product: r ?? n,
            imageUrls: i
        })
    })), Qt = v(e => T(() => N(e) ? X(e)?.offers ?? [] : Rt({
        shellProduct: B(e),
        statefulProduct: X(e)
    }))), $t = v(e => T(() => {
        if (N(e)) return [];
        let t = j(e);
        if (!D(t, `product`) && !D(t, `product_agent`)) return [];
        let n = B(e),
            r = S(e);
        if (!n || !r) return [];
        let i = c.getMaybeMessage(r, t.messageId)?.metadata?.content_references ?? [],
            a = new Set([n.id]),
            o = [];
        for (let e of i) {
            let t = e.type === `products` || e.type === `explore_more` || e.type === `product_group` ? e.products ?? [] : e.type === `product` || e.type === `product_entity` ? [e.product] : [];
            for (let e of t) a.has(e.id) || (a.add(e.id), o.push(e))
        }
        return o
    })), en = v(e => T(() => {
        let t = !N(e);
        return Ft({
            displayTitle: Z(e),
            description: X(e)?.description,
            rationale: t ? Q(e)?.rationale : void 0,
            reviewsSummary: t ? $(e)?.summary : void 0
        })
    })), tn = v(e => T(() => {
        let t = j(e),
            n = S(e),
            r = e => n != null && Ce(c.getMaybeMessage(n, e)?.metadata);
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
        equals: h
    }))
}));
export {
    Ct as A, We as B, nn as C, W as D, U as E, Ye as F, Qe as I, O as L, St as M, A as N, xt as O, et as P, Ke as R, It as S, K as T, Ge as V, $ as _, en as a, B as b, V as c, Yt as d, Zt as f, dt as g, Q as h, tn as i, wt as j, z as k, qt as l, Kt as m, bt as n, Z as o, Gt as p, L as r, Wt as s, yt as t, Jt as u, $t as v, ft as w, X as x, Ut as y, qe as z
};
//# sourceMappingURL=2b67bcd8-jhck7fbwvd5y0ppc.js.map