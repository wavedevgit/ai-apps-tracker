import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $u as t,
    Aat as n,
    Art as r,
    B0 as i,
    BC as a,
    Bot as o,
    F5 as s,
    F9 as c,
    GJ as l,
    Hat as u,
    Iot as d,
    K0 as f,
    L8 as p,
    Lat as m,
    Ort as h,
    P8 as g,
    Q7 as ee,
    Rat as te,
    SJ as ne,
    VC as re,
    Vot as ie,
    WB as ae,
    X8 as oe,
    Z8 as se,
    Zrt as _,
    Zu as v,
    b5 as ce,
    eY as le,
    eot as ue,
    fF as y,
    hrt as de,
    id as b,
    jB as fe,
    k5 as x,
    k8 as pe,
    kat as S,
    ket as me,
    krt as he,
    lrt as ge,
    srt as _e,
    uF as C,
    vF as ve,
    wJ as ye
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bwt as be,
    Cmt as xe,
    Hwt as Se,
    IIn as w,
    ISt as Ce,
    JVn as we,
    LSt as Te,
    Olt as Ee,
    PIn as De,
    Smt as Oe,
    VIn as ke,
    VQt as Ae,
    _mt as je,
    aQt as Me,
    fmt as Ne,
    hmt as Pe,
    klt as Fe,
    nQt as T,
    oQt as Ie,
    qVn as Le,
    tQt as Re,
    wmt as ze,
    zSt as Be
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    a as Ve,
    i as He,
    n as Ue,
    r as We,
    t as Ge
} from "./2f772deb-o1q2t5r785ofb9zp.js";

function Ke(e) {
    return e == null || fe({
        turns: v(e)
    }) == null ? `enriched` : c() ? `source_catalog` : `enriched`
}
var qe = e((() => {
    ae(), me(), t()
}));

function Je() {
    return `${S}/search/product_info_variants`
}
var Ye = e((() => {
    n(), Ae()
}));
async function* Xe({
    reference: e,
    messageId: t,
    locale: n,
    signal: r
}) {
    let i = !1;
    for await (let a of Ue({
        requestBody: He({
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
        yield* $e(a)
    }
    if (!i && !r.aborted) throw Error(u)
}
async function Ze({
    productLookupKey: e,
    onProductEntity: t
}) {
    let n = T(Je(), {
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
async function* Qe({
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
            supported_encodings: [d.V1],
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
        f = T(`${S}${u}`, {
            method: `POST`,
            headers: {
                ..._({
                    isAuthOptional: !0
                }),
                "Content-Type": `application/json`
            },
            body: l,
            routeName: u
        }),
        p = !1;
    for await (let e of Me(f)) {
        if (!(`data` in e)) continue;
        let t = e.data;
        if (t.type === `__debug`) {
            if (p) continue;
            p = !0
        }
        yield* $e(t)
    }
}

function* $e(e) {
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
async function* et({
    productQuery: e,
    productLookupKey: t,
    ledgerSource: n
}) {
    let r = T(`${S}/search/product_update`, {
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
var E = e((() => {
        ye(), Ge(), Ve(), ue(), n(), Ie(), ee(), Re(), Ye()
    })),
    D, O, k, tt = e((() => {
        h(), de(), ie(), D = {
            fetch_to_all_offers: `product_sidebar_fetch_to_all_offers_ms`,
            fetch_to_first_offer: `product_sidebar_fetch_to_first_offer_ms`,
            render_time_to_all_offers: `product_sidebar_render_to_all_offers_ms`,
            render_time_to_first_offer: `product_sidebar_render_to_first_offer_ms`,
            render_time_to_first_review: `product_sidebar_time_to_reviews_ms`,
            render_time_to_rationale: `product_sidebar_time_to_rationale_ms`
        }, O = new WeakMap, k = class {
            constructor() {
                o(this, `startMs`, performance.now()), o(this, `loggedTimings`, new Set), o(this, `loggedRenderOfferTimings`, new Set)
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
                he.hist(r.SHOPPING, `product_sidebar_timing_duration_ms`, {
                    timing: e
                }, n);
                let i = D[e];
                i && _e.logEvent(i, n), this.loggedTimings.add(e)
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
    tt(), pe(), ie(), at = class {
        constructor() {
            o(this, `product$`, p(void 0)), o(this, `rationale$`, p(void 0)), o(this, `reviews$`, p(void 0)), o(this, `debug$`, p(void 0)), o(this, `loading$`, p(!1)), o(this, `status$`, p(`idle`)), o(this, `requestToken$`, p(null)), o(this, `error$`, p(void 0)), o(this, `requestKey`, null), o(this, `inFlightPromise`, null), o(this, `profiler`, null), o(this, `cacheOnly`, !1)
        }
        ensureStarted(e) {
            return s(() => this.loading$() && this.requestKey === e.requestKey) ? this.cacheOnly && e.cacheOnly !== !0 ? (this.inFlightPromise ?? Promise.resolve()).then(() => this.ensureStarted(e), () => this.ensureStarted(e)) : this.inFlightPromise ?? Promise.resolve() : s(() => this.status$() === `success` && this.requestKey === e.requestKey) ? Promise.resolve() : this.startStream({
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
            s(() => this.requestToken$()) === e && (this.requestKey = null, x(() => {
                this.requestToken$.set(null), this.loading$.set(!1), this.status$.set(`idle`), this.inFlightPromise = null
            }))
        }
        async run(e, t) {
            try {
                let n = !1;
                for await (let r of t.stream) if (s(() => this.requestToken$()) === e) switch (r.type) {
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
                s(() => this.requestToken$() === e) && x(() => {
                    this.loading$.set(!1), this.status$.set(t.cacheOnly && !n ? `idle` : `success`)
                })
            } catch (t) {
                throw s(() => this.requestToken$() === e) && x(() => {
                    this.loading$.set(!1), this.status$.set(`error`), this.error$.set(t)
                }), t
            } finally {
                s(() => this.requestToken$() === e) && x(() => {
                    this.requestToken$.set(null), this.inFlightPromise = null
                })
            }
        }
    }, ot = class {
        constructor(e) {
            o(this, `deps`, void 0), o(this, `entity$`, p(void 0)), o(this, `debug$`, p(void 0)), o(this, `loading$`, p(!1)), o(this, `status$`, p(`idle`)), o(this, `requestToken$`, p(null)), o(this, `error$`, p(void 0)), o(this, `requestKey`, null), o(this, `inFlightPromise`, null), o(this, `profiler`, null), this.deps = e
        }
        ensureStarted(e) {
            return s(() => this.loading$() && this.requestKey === e.requestKey) ? this.inFlightPromise ?? Promise.resolve() : s(() => this.status$() === `success` && this.requestKey === e.requestKey) ? Promise.resolve() : this.start(e)
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
                })) if (s(() => this.requestToken$() === e)) switch (n.type) {
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
                s(() => this.requestToken$() === e) && (this.profiler?.hasLoggedTiming(`fetch_to_first_offer`) && this.profiler.logTimingOnce(`fetch_to_all_offers`), x(() => {
                    this.loading$.set(!1), this.status$.set(`success`)
                }))
            } catch (t) {
                s(() => this.requestToken$() === e) && x(() => {
                    this.loading$.set(!1), this.status$.set(`error`), this.error$.set(t)
                })
            } finally {
                s(() => this.requestToken$() === e) && x(() => {
                    this.requestToken$.set(null), this.inFlightPromise = null
                })
            }
        }
    }, st = class {
        constructor() {
            o(this, `entity$`, p(void 0)), o(this, `loading$`, p(!1)), o(this, `status$`, p(`idle`)), o(this, `error$`, p(void 0)), o(this, `requestKey`, null), o(this, `inFlightPromise`, null)
        }
        ensureStarted(e) {
            return s(() => this.loading$() && this.requestKey === e.requestKey) ? this.inFlightPromise ?? Promise.resolve() : s(() => this.status$() === `success` && this.requestKey === e.requestKey) ? Promise.resolve() : this.start(e)
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
    streamConversation: i = We
}) {
    let a = !1,
        o = [];
    if (await i({
            requestBody: {
                conversation_id: e,
                message_id: t,
                supported_encodings: [d.V1],
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
    Ge(), Ie()
}));

function A(e) {
    return ke(e) ?? R(e)?.sidebar ?? null
}

function j(e, t) {
    let n = A(e);
    return n?.type === `product_agent` && n.reference && z(e) === t ? `enriched` : t.cite ? Ke(e) : `enriched`
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
            stream: Xe({
                reference: t.reference,
                messageId: t.messageId,
                locale: n,
                signal: r.signal
            })
        }),
        c = s(() => a.requestToken$());
    return {
        completion: o,
        cancel: () => {
            r.abort(), a.cancel(c)
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
    return !w(t, `product_agent`) || n == null ? null : J(e, mt({
        messageId: t.messageId,
        productCitation: n.cite
    }))
}

function ht(e) {
    return e.flatMap(e => {
        if (typeof e.url != `string`) return [];
        let t = te(e.url.trim());
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
    let n = s(() => V(e));
    n != null && H(e, n).set(t)
}

function vt(e, t, n) {
    let r = I(t);
    G(e, r).set(n)
}

function yt(e, t, n) {
    _t(e, n(s(() => Y(e) ?? t)))
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
    let n = s(() => V(e));
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
    cacheOnly: c
}) {
    if (s(() => j(e, t) === `source_catalog`)) return Promise.resolve();
    let l = I(t),
        u = n.product_lookup_key,
        d = s(() => Lt(e, i)),
        f = s(() => P(e, l)),
        p = Et({
            conversationId: r,
            messageId: i,
            shellProduct: t,
            productLookupKey: u,
            rewrittenQueries: d
        }),
        m = s(() => ke(e));
    if (m?.type === `product_agent` && m.reference?.conversationId === r && m.messageId === i && o == null && JSON.stringify(u?.variant_options_query ?? null) === JSON.stringify(t.product_lookup_key?.variant_options_query ?? null) && f.ownsRequestKey(N(m))) return f.completion;
    let h = o ?? (({
        conversationId: e,
        messageId: t,
        shellProduct: n,
        productLookupKey: r,
        rewrittenQueries: i,
        cacheOnly: o
    }) => Qe({
        conversationId: e,
        messageId: t,
        productQuery: n.title,
        productLookupKey: r,
        isGenericProductSidebarEnabled: !0,
        persistConversationToUser: a,
        rewrittenQueries: i,
        cacheOnly: o
    }));
    return f.ensureStarted({
        requestKey: p,
        requestFn: h,
        conversationId: r,
        messageId: i,
        shellProduct: t,
        productLookupKey: u,
        rewrittenQueries: d,
        cacheOnly: c
    })
}

function wt(e) {
    return ce(() => e.shellProduct.id.startsWith(`query_mode_entity_${e.messageId}_`) ? re(e.conversation) : !1, () => {
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
    requestSourceCatalogProduct: a
}) {
    if (s(() => j(e, t) === `source_catalog`)) {
        let i = mt({
                messageId: r,
                productCitation: t.cite
            }),
            o = J(e, i),
            s = a ?? (e => ut(e));
        return o.ensureStarted({
            requestKey: i,
            requestFn: s,
            conversationId: n,
            messageId: r,
            shellProduct: t
        })
    }
    let o = I(t),
        c = t.product_lookup_key,
        u = s(() => b(e)),
        d = l.getNodeIfExists(u, r)?.message,
        p = !s(f) && !s(() => Le(e)) && d?.metadata?.citation_ledger_pending_products?.includes(t.id) && t.id.startsWith(`query_mode_entity_${r}_`) && !c ? {
            conversation_id: n,
            message_id: r,
            product_id: t.id
        } : void 0;
    if (p && s(() => re(e)) && l.getParentPromptNode(u, r)?.id === l.getParentPromptNode(u)?.id) return Promise.resolve();
    let m = Dt({
            productKey: o,
            productLookupKey: c
        }),
        h = q(e, o),
        g = i ?? (({
            shellProduct: e,
            productLookupKey: t
        }) => et({
            productQuery: e.title,
            productLookupKey: t,
            ledgerSource: p
        }));
    return h.ensureStarted({
        conversation: e,
        requestKey: m,
        requestProductEntity: g,
        conversationId: n,
        messageId: r,
        shellProduct: t,
        productLookupKey: c
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
    if (s(() => G(e, r)())) return;
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
    let n = s(() => A(e));
    if (w(n, `product_agent`) && n.messageId === t) {
        let e = n.rewrittenQueries?.filter(e => typeof e == `string` && e !== ``);
        if (e != null && e.length > 0) return e
    }
    let r = s(() => b(e));
    if (!r) return;
    let i = l.getNodeIfExists(r, t);
    for (; i;) {
        if (i.message.author.role === `assistant`) {
            let e = i.message.metadata?.shopping?.rewritten_queries;
            if (Array.isArray(e)) {
                let t = e.filter(e => typeof e == `string` && e !== ``);
                return t.length > 0 ? t : void 0
            }
        }
        if (!i.parentId) return;
        i = l.getNodeIfExists(r, i.parentId)
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
        let t = i.findIndex(t => Fe(t, e));
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
    return n ? t?.image_urls ?? e?.image_urls ?? [] : jt(t?.image_urls?.filter(xe) ?? [], At(e?.image_urls ?? [], t?.image_urls ?? []))
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
        image_urls: ze([], t.image_urls ?? e.image_urls ?? []),
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

function Ut(e, t, n) {
    if (n == null) return null;
    let r = Ce({
        turns: v(e),
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
var R, z, B, V, H, U, W, G, K, q, J, Y, X, Wt, Gt, Z, Q, Kt, qt, $, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn = e((() => {
    i(), we(), qe(), ve(), t(), a(), be(), Ne(), De(), Be(), Ee(), Oe(), E(), ct(), dt(), pe(), le(), oe(), m(), de(), R = C(() => p(null)), z = C(e => g(() => {
        let t = A(e);
        if (w(t, `product_agent`)) {
            if (t.reference) {
                let n = K(e, N(t)).product$() ?? null;
                return Ut(e, t.messageId, n)
            }
            let n = b(e);
            return Se(n && l.getMaybeMessage(n, t.messageId)?.metadata) ? Ut(e, t.messageId, t.product) : (t.product?.shopping_vto?.eligible ? Ce({
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
        if (w(t, `product`)) {
            let {
                product: n
            } = Te({
                thread: b(e),
                messageId: t.messageId,
                contentReferenceStartIndex: t.contentReferenceStartIndex,
                productIndex: t.productIndex
            });
            return n ?? R(e)?.product ?? null
        }
        return w(t, `entity`) && (t.category === `product` || t.category === `product_link`) ? {
            id: ``,
            query: t.query,
            title: t.query,
            provider: ``,
            url: ``
        } : null
    })), B = C(e => g(() => {
        let t = A(e),
            n = z(e);
        return w(t, `product_agent`) && n ? j(e, n) : `enriched`
    })), V = C(e => g(() => {
        let t = z(e);
        return t ? I(t) : null
    })), H = y((e, t) => p(null)), U = y((e, t) => p(null)), W = y((e, t) => p(-1)), G = y((e, t) => p(!1)), K = y((e, t) => new at), q = y((e, t) => new ot({
        normalizeProductEntityCitation: Mt,
        applyProductEntityUpdate: Nt
    })), J = y((e, t) => new st), Y = C(e => g(() => {
        let t = z(e);
        if (B(e) === `source_catalog`) return F(e)?.entity$()?.product ?? null;
        let n = V(e);
        return n == null ? null : Pt(t, H(e, n)())
    })), X = C(e => g(() => M(e) ? Y(e)?.title ?? `` : Ft({
        shellProduct: z(e),
        statefulProduct: Y(e),
        hasFetchedVariant: Xt(e)
    }))), Wt = C(e => g(() => {
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
            offers: ge(`3375735072`) ? n.offers?.length ? n.offers : t.offers ?? [] : Qt(e)
        }
    }, {
        equals: se
    })), Gt = C(e => g(() => {
        let t = V(e);
        return t == null ? -1 : W(e, t)()
    })), Z = C(e => g(() => {
        if (M(e)) return;
        let t = V(e);
        if (t != null) return P(e, t).rationale$()
    })), Q = C(e => g(() => {
        if (M(e)) return;
        let t = V(e);
        if (t != null) return P(e, t).reviews$()
    })), Kt = C(e => g(() => {
        if (M(e)) return;
        let t = V(e);
        if (t != null) return Rt(q(e, t).debug$(), P(e, t).debug$())
    })), qt = C(e => g(() => {
        if (M(e)) return !1;
        let t = V(e);
        return t != null && P(e, t).loading$()
    })), $ = C(e => g(() => {
        if (M(e)) return F(e)?.entity$();
        let t = V(e);
        if (t != null) return q(e, t).entity$()
    })), Jt = C(e => g(() => {
        if (M(e)) return F(e)?.loading$() ?? !1;
        let t = V(e);
        return t != null && q(e, t).loading$()
    })), Yt = C(e => g(() => {
        if (M(e)) return F(e)?.status$() ?? `idle`;
        let t = V(e);
        return t == null ? `idle` : q(e, t).status$()
    })), Xt = C(e => g(() => {
        let t = V(e);
        return t != null && G(e, t)()
    })), Zt = C(e => g(() => {
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
        return je({
            product: r ?? n,
            imageUrls: i
        })
    })), Qt = C(e => g(() => M(e) ? Y(e)?.offers ?? [] : zt({
        shellProduct: z(e),
        statefulProduct: Y(e)
    }))), $t = C(e => g(() => {
        if (M(e)) return [];
        let t = A(e);
        if (!w(t, `product`) && !w(t, `product_agent`)) return [];
        let n = z(e),
            r = b(e);
        if (!n || !r) return [];
        let i = l.getMaybeMessage(r, t.messageId)?.metadata?.content_references ?? [],
            a = new Set([n.id]),
            o = [];
        for (let e of i) {
            let t = e.type === `products` || e.type === `explore_more` || e.type === `product_group` ? e.products ?? [] : e.type === `product` || e.type === `product_entity` ? [e.product] : [];
            for (let e of t) a.has(e.id) || (a.add(e.id), o.push(e))
        }
        return o
    })), en = C(e => g(() => {
        let t = !M(e);
        return It({
            displayTitle: X(e),
            description: Y(e)?.description,
            rationale: t ? Z(e)?.rationale : void 0,
            reviewsSummary: t ? Q(e)?.summary : void 0
        })
    })), tn = C(e => g(() => {
        let t = A(e),
            n = b(e),
            r = e => n != null && Se(l.getMaybeMessage(n, e)?.metadata);
        return w(t, `product`) ? {
            clientThreadId: e.id,
            messageId: t.messageId,
            turnIndex: t.turnIndex,
            isGenui: r(t.messageId)
        } : w(t, `product_agent`) ? {
            clientThreadId: e.id,
            messageId: t.messageId,
            turnIndex: 0,
            isGenui: r(t.messageId)
        } : w(t, `entity`) && (t.category === `product` || t.category === `product_link`) ? {
            clientThreadId: e.id,
            messageId: t.messageId,
            isGenui: r(t.messageId)
        } : {
            clientThreadId: e.id,
            isGenui: !1
        }
    }, {
        equals: se
    }))
}));
export {
    wt as A, Ke as B, nn as C, U as D, H as E, Ze as F, E as I, et as L, Ct as M, k as N, St as O, tt as P, Je as R, Lt as S, G as T, qe as V, Q as _, en as a, z as b, B as c, Yt as d, Zt as f, ft as g, Z as h, tn as i, Tt as j, R as k, $ as l, qt as m, xt as n, X as o, Kt as p, I as r, Gt as s, bt as t, Jt as u, $t as v, pt as w, Y as x, Wt as y, Ye as z
};
//# sourceMappingURL=2b67bcd8-f74p2b0wecft5hwv.js.map