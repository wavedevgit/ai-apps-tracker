import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AJ as t,
    B6 as n,
    B8 as r,
    BP as i,
    Bat as a,
    G6 as o,
    Gat as s,
    HP as c,
    Hit as l,
    J6 as u,
    JP as d,
    K7 as f,
    K8 as p,
    Kit as m,
    Mnt as ee,
    Nit as h,
    Nnt as te,
    Nu as ne,
    Pit as re,
    Pnt as ie,
    Qq as ae,
    R9 as oe,
    Ru as g,
    Vit as se,
    Wat as _,
    _B as ce,
    _C as le,
    c8 as ue,
    dnt as de,
    eJ as fe,
    gC as pe,
    iB as me,
    iat as he,
    j8 as ge,
    ju as v,
    l0 as _e,
    l7 as ve,
    pnt as ye,
    r0 as be,
    s8 as xe,
    trt as y,
    xJ as b,
    ynt as Se
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Dlt as Ce,
    FSt as we,
    HZt as Te,
    Iwt as Ee,
    KZt as De,
    LFn as Oe,
    MSt as ke,
    NSt as Ae,
    OQt as je,
    Olt as Me,
    Rwt as Ne,
    Smt as Pe,
    UZt as x,
    WFn as Fe,
    XBn as Ie,
    ZBn as Le,
    bmt as Re,
    hmt as ze,
    pmt as Be,
    qZt as Ve,
    umt as He,
    xmt as Ue,
    zFn as S
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    a as We,
    i as Ge,
    n as Ke,
    r as qe,
    t as Je
} from "./2f772deb-kk5vhpbk02vww2ym.js";

function Ye(e) {
    return e == null || me({
        turns: v(e)
    }) == null ? `enriched` : f() ? `source_catalog` : `enriched`
}
var Xe = e((() => {
    ce(), oe(), ne()
}));

function Ze() {
    return `${h}/search/product_info_variants`
}
var C = e((() => {
    re(), je()
}));
async function* Qe({
    reference: e,
    messageId: t,
    locale: n,
    signal: r
}) {
    let i = !1;
    for await (let a of Ke({
        requestBody: Ge({
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
        yield* w(a)
    }
    if (!i && !r.aborted) throw Error(m)
}
async function $e({
    productLookupKey: e,
    onProductEntity: t
}) {
    let n = x(Ze(), {
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
async function* et({
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
            supported_encodings: [a.V1],
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
        f = x(`${h}${d}`, {
            method: `POST`,
            headers: {
                ...y({
                    isAuthOptional: !0
                }),
                "Content-Type": `application/json`
            },
            body: u,
            routeName: d
        }),
        p = !1;
    for await (let e of De(f)) {
        if (!(`data` in e)) continue;
        let t = e.data;
        if (t.type === `__debug`) {
            if (p) continue;
            p = !0
        }
        yield* w(t)
    }
}

function* w(e) {
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
async function* T({
    productQuery: e,
    productLookupKey: t,
    ledgerSource: n
}) {
    let r = x(`${h}/search/product_update`, {
        method: `POST`,
        headers: {
            ...y({
                isAuthOptional: !0
            }),
            ...n ? ae({
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
        fe(), Je(), We(), he(), re(), Ve(), ve(), Te(), C()
    })),
    D, O, k, tt = e((() => {
        ee(), Se(), s(), D = {
            fetch_to_all_offers: `product_sidebar_fetch_to_all_offers_ms`,
            fetch_to_first_offer: `product_sidebar_fetch_to_first_offer_ms`,
            render_time_to_all_offers: `product_sidebar_render_to_all_offers_ms`,
            render_time_to_first_offer: `product_sidebar_render_to_first_offer_ms`,
            render_time_to_first_review: `product_sidebar_time_to_reviews_ms`,
            render_time_to_rationale: `product_sidebar_time_to_rationale_ms`
        }, O = new WeakMap, k = class {
            constructor() {
                _(this, `startMs`, performance.now()), _(this, `loggedTimings`, new Set), _(this, `loggedRenderOfferTimings`, new Set)
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
                te.hist(ie.SHOPPING, `product_sidebar_timing_duration_ms`, {
                    timing: e
                }, n);
                let r = D[e];
                r && de.logEvent(r, n), this.loggedTimings.add(e)
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
    tt(), n(), s(), at = class {
        constructor() {
            _(this, `product$`, u(void 0)), _(this, `rationale$`, u(void 0)), _(this, `reviews$`, u(void 0)), _(this, `debug$`, u(void 0)), _(this, `loading$`, u(!1)), _(this, `status$`, u(`idle`)), _(this, `requestToken$`, u(null)), _(this, `error$`, u(void 0)), _(this, `requestKey`, null), _(this, `inFlightPromise`, null), _(this, `profiler`, null), _(this, `cacheOnly`, !1)
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
            let t = nt();
            this.requestKey = e.requestKey, this.cacheOnly = e.cacheOnly === !0, this.profiler = this.cacheOnly ? null : new k, r(() => {
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
                            this.debug$.set(rt(this.debug$(), i))
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
    }, ot = class {
        constructor(e) {
            _(this, `deps`, void 0), _(this, `entity$`, u(void 0)), _(this, `debug$`, u(void 0)), _(this, `loading$`, u(!1)), _(this, `status$`, u(`idle`)), _(this, `requestToken$`, u(null)), _(this, `error$`, u(void 0)), _(this, `requestKey`, null), _(this, `inFlightPromise`, null), _(this, `profiler`, null), this.deps = e
        }
        ensureStarted(e) {
            return p(() => this.loading$() && this.requestKey === e.requestKey) ? this.inFlightPromise ?? Promise.resolve() : p(() => this.status$() === `success` && this.requestKey === e.requestKey) ? Promise.resolve() : this.start(e)
        }
        start(e) {
            let t = nt();
            this.requestKey = e.requestKey, this.profiler = new k, r(() => {
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
                            this.debug$.set(rt(this.debug$(), it(n)))
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
    }, st = class {
        constructor() {
            _(this, `entity$`, u(void 0)), _(this, `loading$`, u(!1)), _(this, `status$`, u(`idle`)), _(this, `error$`, u(void 0)), _(this, `requestKey`, null), _(this, `inFlightPromise`, null)
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

function lt(e) {
    return typeof e == `object` && !!e
}
async function* ut({
    conversationId: e,
    messageId: t,
    shellProduct: n,
    signal: r,
    streamConversation: i = qe
}) {
    let o = !1,
        s = [];
    if (await i({
            requestBody: {
                conversation_id: e,
                message_id: t,
                supported_encodings: [a.V1],
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
                    o = !0;
                    return
                }
                if (e.type === `message`)
                    for (let t of e.data.metadata?.content_references ?? []) lt(t) && t.type === `product_entity` && lt(t.product) && s.push(t)
            }
        }), !o) throw Error(`Catalog product response was not source scoped`);
    let c = s.at(-1);
    if (c == null) throw Error(`Catalog product response did not include a product entity`);
    yield c
}
var dt = e((() => {
    Je(), Ve()
}));

function A(e) {
    return Fe(e) ?? R(e)?.sidebar ?? null
}

function j(e, t) {
    let n = A(e);
    return n?.type === `product_agent` && n.reference && z(e) === t ? `enriched` : t.cite ? Ye(e) : `enriched`
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
            stream: Qe({
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
    return !S(t, `product_agent`) || n == null ? null : J(e, mt({
        messageId: t.messageId,
        productCitation: n.cite
    }))
}

function ht(e) {
    return e.flatMap(e => {
        if (typeof e.url != `string`) return [];
        let t = l(e.url.trim());
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
    let n = p(() => V(e));
    n != null && H(e, n).set(t)
}

function vt(e, t, n) {
    let r = I(t);
    G(e, r).set(n)
}

function yt(e, t, n) {
    _t(e, n(p(() => Y(e) ?? t)))
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
    let n = p(() => V(e));
    n != null && r(() => {
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
    if (p(() => j(e, t) === `source_catalog`)) return Promise.resolve();
    let c = I(t),
        l = n.product_lookup_key,
        u = p(() => Lt(e, i)),
        d = p(() => P(e, c)),
        f = Et({
            conversationId: r,
            messageId: i,
            shellProduct: t,
            productLookupKey: l,
            rewrittenQueries: u
        }),
        m = p(() => Fe(e));
    if (m?.type === `product_agent` && m.reference?.conversationId === r && m.messageId === i && o == null && JSON.stringify(l?.variant_options_query ?? null) === JSON.stringify(t.product_lookup_key?.variant_options_query ?? null) && d.ownsRequestKey(N(m))) return d.completion;
    let ee = o ?? (({
        conversationId: e,
        messageId: t,
        shellProduct: n,
        productLookupKey: r,
        rewrittenQueries: i,
        cacheOnly: o
    }) => et({
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
        requestFn: ee,
        conversationId: r,
        messageId: i,
        shellProduct: t,
        productLookupKey: l,
        rewrittenQueries: u,
        cacheOnly: s
    })
}

function wt(e) {
    return ge(() => e.shellProduct.id.startsWith(`query_mode_entity_${e.messageId}_`) ? le(e.conversation) : !1, () => {
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
    if (p(() => j(e, t) === `source_catalog`)) {
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
        s = t.product_lookup_key,
        c = p(() => g(e)),
        l = b.getNodeIfExists(c, r)?.message,
        u = !p(_e) && !p(() => Ie(e)) && l?.metadata?.citation_ledger_pending_products?.includes(t.id) && t.id.startsWith(`query_mode_entity_${r}_`) && !s ? {
            conversation_id: n,
            message_id: r,
            product_id: t.id
        } : void 0;
    if (u && p(() => le(e)) && b.getParentPromptNode(c, r)?.id === b.getParentPromptNode(c)?.id) return Promise.resolve();
    let d = Dt({
            productKey: o,
            productLookupKey: s
        }),
        f = q(e, o),
        m = i ?? (({
            shellProduct: e,
            productLookupKey: t
        }) => T({
            productQuery: e.title,
            productLookupKey: t,
            ledgerSource: u
        }));
    return f.ensureStarted({
        conversation: e,
        requestKey: d,
        requestProductEntity: m,
        conversationId: n,
        messageId: r,
        shellProduct: t,
        productLookupKey: s
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
    let i = I(t);
    if (p(() => G(e, i)())) return;
    let a = H(e, i)() ?? t;
    r(() => {
        n.shopping_vto != null && U(e, i).set(n.shopping_vto.eligible), H(e, i).set(L({
            currentProduct: a,
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
    let n = p(() => A(e));
    if (S(n, `product_agent`) && n.messageId === t) {
        let e = n.rewrittenQueries?.filter(e => typeof e == `string` && e !== ``);
        if (e != null && e.length > 0) return e
    }
    let r = p(() => g(e));
    if (!r) return;
    let i = b.getNodeIfExists(r, t);
    for (; i;) {
        if (i.message.author.role === `assistant`) {
            let e = i.message.metadata?.shopping?.rewritten_queries;
            if (Array.isArray(e)) {
                let t = e.filter(e => typeof e == `string` && e !== ``);
                return t.length > 0 ? t : void 0
            }
        }
        if (!i.parentId) return;
        i = b.getNodeIfExists(r, i.parentId)
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
        let t = i.findIndex(t => Me(t, e));
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
    return n ? t?.image_urls ?? e?.image_urls ?? [] : jt(t?.image_urls?.filter(Ue) ?? [], At(e?.image_urls ?? [], t?.image_urls ?? []))
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
        image_urls: Pe([], t.image_urls ?? e.image_urls ?? []),
        ...Be({
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
    let r = ke({
        turns: v(e),
        productId: n.id,
        messageId: t
    });
    return r?.messageId !== t || !r.product.shopping_vto?.generated_images?.length ? n : {
        ...n,
        ...Be({
            currentProduct: r.product,
            nextProduct: {
                ...n,
                shopping_vto: n.shopping_vto ?? r.product.shopping_vto
            }
        })
    }
}
var R, z, B, V, H, U, W, G, K, q, J, Y, X, Wt, Gt, Z, Q, Kt, qt, $, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn = e((() => {
    be(), Le(), Xe(), d(), ne(), pe(), Ee(), He(), Oe(), we(), Ce(), Re(), E(), ct(), dt(), n(), t(), xe(), se(), Se(), R = i(() => u(null)), z = i(e => o(() => {
        let t = A(e);
        if (S(t, `product_agent`)) {
            if (t.reference) {
                let n = K(e, N(t)).product$() ?? null;
                return Ut(e, t.messageId, n)
            }
            let n = g(e);
            return Ne(n && b.getMaybeMessage(n, t.messageId)?.metadata) ? Ut(e, t.messageId, t.product) : (t.product?.shopping_vto?.eligible ? ke({
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
        if (S(t, `product`)) {
            let {
                product: n
            } = Ae({
                thread: g(e),
                messageId: t.messageId,
                contentReferenceStartIndex: t.contentReferenceStartIndex,
                productIndex: t.productIndex
            });
            return n ?? R(e)?.product ?? null
        }
        return S(t, `entity`) && (t.category === `product` || t.category === `product_link`) ? {
            id: ``,
            query: t.query,
            title: t.query,
            provider: ``,
            url: ``
        } : null
    })), B = i(e => o(() => {
        let t = A(e),
            n = z(e);
        return S(t, `product_agent`) && n ? j(e, n) : `enriched`
    })), V = i(e => o(() => {
        let t = z(e);
        return t ? I(t) : null
    })), H = c((e, t) => u(null)), U = c((e, t) => u(null)), W = c((e, t) => u(-1)), G = c((e, t) => u(!1)), K = c((e, t) => new at), q = c((e, t) => new ot({
        normalizeProductEntityCitation: Mt,
        applyProductEntityUpdate: Nt
    })), J = c((e, t) => new st), Y = i(e => o(() => {
        let t = z(e);
        if (B(e) === `source_catalog`) return F(e)?.entity$()?.product ?? null;
        let n = V(e);
        return n == null ? null : Pt(t, H(e, n)())
    })), X = i(e => o(() => M(e) ? Y(e)?.title ?? `` : Ft({
        shellProduct: z(e),
        statefulProduct: Y(e),
        hasFetchedVariant: Xt(e)
    }))), Wt = i(e => o(() => {
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
            offers: ye(`3375735072`) ? n.offers?.length ? n.offers : t.offers ?? [] : Qt(e)
        }
    }, {
        equals: ue
    })), Gt = i(e => o(() => {
        let t = V(e);
        return t == null ? -1 : W(e, t)()
    })), Z = i(e => o(() => {
        if (M(e)) return;
        let t = V(e);
        if (t != null) return P(e, t).rationale$()
    })), Q = i(e => o(() => {
        if (M(e)) return;
        let t = V(e);
        if (t != null) return P(e, t).reviews$()
    })), Kt = i(e => o(() => {
        if (M(e)) return;
        let t = V(e);
        if (t != null) return Rt(q(e, t).debug$(), P(e, t).debug$())
    })), qt = i(e => o(() => {
        if (M(e)) return !1;
        let t = V(e);
        return t != null && P(e, t).loading$()
    })), $ = i(e => o(() => {
        if (M(e)) return F(e)?.entity$();
        let t = V(e);
        if (t != null) return q(e, t).entity$()
    })), Jt = i(e => o(() => {
        if (M(e)) return F(e)?.loading$() ?? !1;
        let t = V(e);
        return t != null && q(e, t).loading$()
    })), Yt = i(e => o(() => {
        if (M(e)) return F(e)?.status$() ?? `idle`;
        let t = V(e);
        return t == null ? `idle` : q(e, t).status$()
    })), Xt = i(e => o(() => {
        let t = V(e);
        return t != null && G(e, t)()
    })), Zt = i(e => o(() => {
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
        return ze({
            product: r ?? n,
            imageUrls: i
        })
    })), Qt = i(e => o(() => M(e) ? Y(e)?.offers ?? [] : zt({
        shellProduct: z(e),
        statefulProduct: Y(e)
    }))), $t = i(e => o(() => {
        if (M(e)) return [];
        let t = A(e);
        if (!S(t, `product`) && !S(t, `product_agent`)) return [];
        let n = z(e),
            r = g(e);
        if (!n || !r) return [];
        let i = b.getMaybeMessage(r, t.messageId)?.metadata?.content_references ?? [],
            a = new Set([n.id]),
            o = [];
        for (let e of i) {
            let t = e.type === `products` || e.type === `explore_more` || e.type === `product_group` ? e.products ?? [] : e.type === `product` || e.type === `product_entity` ? [e.product] : [];
            for (let e of t) a.has(e.id) || (a.add(e.id), o.push(e))
        }
        return o
    })), en = i(e => o(() => {
        let t = !M(e);
        return It({
            displayTitle: X(e),
            description: Y(e)?.description,
            rationale: t ? Z(e)?.rationale : void 0,
            reviewsSummary: t ? Q(e)?.summary : void 0
        })
    })), tn = i(e => o(() => {
        let t = A(e),
            n = g(e),
            r = e => n != null && Ne(b.getMaybeMessage(n, e)?.metadata);
        return S(t, `product`) ? {
            clientThreadId: e.id,
            messageId: t.messageId,
            turnIndex: t.turnIndex,
            isGenui: r(t.messageId)
        } : S(t, `product_agent`) ? {
            clientThreadId: e.id,
            messageId: t.messageId,
            turnIndex: 0,
            isGenui: r(t.messageId)
        } : S(t, `entity`) && (t.category === `product` || t.category === `product_link`) ? {
            clientThreadId: e.id,
            messageId: t.messageId,
            isGenui: r(t.messageId)
        } : {
            clientThreadId: e.id,
            isGenui: !1
        }
    }, {
        equals: ue
    }))
}));
export {
    wt as A, Ye as B, nn as C, U as D, H as E, $e as F, E as I, T as L, Ct as M, k as N, St as O, tt as P, Ze as R, Lt as S, G as T, Xe as V, Q as _, en as a, z as b, B as c, Yt as d, Zt as f, ft as g, Z as h, tn as i, Tt as j, R as k, $ as l, qt as m, xt as n, X as o, Kt as p, I as r, Gt as s, bt as t, Jt as u, $t as v, pt as w, Y as x, Wt as y, C as z
};
//# sourceMappingURL=2b67bcd8-nnsmutcvg2bqh4j8.js.map