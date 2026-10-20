import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Cat as r,
    Fat as i,
    Iat as a,
    Pot as o,
    Wnt as s,
    Xnt as c,
    Ynt as l,
    Zet as u,
    _nt as d,
    _ot as f,
    aU as p,
    cU as m,
    dQ as h,
    drt as g,
    eQ as _,
    eY as ee,
    fF as v,
    ftt as y,
    gtt as b,
    h5 as x,
    h8 as S,
    lrt as C,
    nY as w,
    qJ as T,
    sU as E,
    tY as D,
    uF as te,
    uit as O,
    urt as k,
    x5 as ne,
    ynt as A
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    G as re,
    Rn as j,
    Vn as M,
    s as ie,
    wn as ae,
    zn as oe
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Zt as N,
    CAt as se,
    Cwt as ce,
    EAt as P,
    KZt as le,
    Qpt as F,
    SAt as ue,
    Swt as I,
    TAt as L,
    WZt as R,
    YFn as de,
    nIn as fe,
    qZt as pe,
    tmt as z,
    wAt as me,
    xAt as he
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Lx as ge,
    fS as B,
    hS as _e,
    nS as ve,
    sS as ye,
    uS as be
} from "./c2675c8c-9bs3zsr3vq259es7.js";
import {
    n as xe,
    r as Se
} from "./09231af0-mb9azias91zaxsma.js";
import {
    a as Ce,
    i as we,
    r as Te,
    t as Ee
} from "./2f772deb-i8iagtnmm0oa4tfr.js";

function De(e) {
    return e.flatMap(e => e.metadata?.content_references ?? [])
}

function Oe(e) {
    return e.some(e => e.type === `entity_metadata` && e.entity_data != null && e.metadata?.is_loading !== !0)
}

function ke(e) {
    return e.some(e => e.type === `image_group` && e.images.some(e => e.image_result != null))
}

function Ae(e) {
    if (e.end_turn !== !1) return !1;
    let t = e.metadata?.content_references ?? [];
    return t.some(e => e.type === `entity_metadata`) && t.some(e => e.type === `image_group` || e.matched_text.startsWith(`image_group`))
}

function je(e) {
    let t = e.content;
    return t?.content_type !== u.Text && t?.content_type !== u.MultimodalText ? !1 : t.parts.some(e => typeof e == `string` && e.trim().length > 0)
}

function Me(e) {
    let [t] = e, n = (t != null && Ae(t) ? e.slice(1) : e).filter(je);
    return n.length === 0 ? `missing` : n.some(e => e.status !== `finished_successfully`) ? `partial` : `complete`
}

function Ne({
    messages: e,
    category: t
}) {
    let n = De(e),
        r = e.length > 0 && e.every(e => e.status === `finished_successfully`),
        i = z(t) ? Oe(n) ? `complete` : `missing` : `not_applicable`,
        a = ke(n) || r ? `complete` : `missing`,
        o = Me(e);
    return {
        responseStatus: r && i !== `missing` && a !== `missing` && o === `complete` ? `complete` : `incomplete`,
        entityMetadataStatus: i,
        imageGroupStatus: a,
        modelResponseStatus: o
    }
}

function Pe({
    category: e,
    requestSource: t,
    completeness: n
}) {
    k.count(g.DEFAULT, Fe, {
        category: e,
        request_source: t,
        response_status: n.responseStatus,
        entity_metadata_status: n.entityMetadataStatus,
        image_group_status: n.imageGroupStatus,
        model_response_status: n.modelResponseStatus
    })
}
var Fe, Ie = e((() => {
    b(), F(), C(), Fe = `sidebar.response_completeness`
}));

function Le(e) {
    if (!(!e || Object.keys(e).length === 0)) return e
}

function V(e) {
    if (!e || Object.keys(e).length === 0) return `{}`;
    let t = {};
    return Object.keys(e).sort().forEach(n => {
        t[n] = e[n]
    }), JSON.stringify(t)
}

function Re({
    initialQuery: e,
    initialCategory: t,
    initialExtraParams: n
}) {
    let [r, i] = (0, H.useState)(null), a = r?.query ?? e, o = r?.category ?? t, s = r?.hasExtraParamsOverride ?? !1 ? r?.extraParams : n, c = (0, H.useMemo)(() => V(n), [n]);
    return (0, H.useEffect)(() => {
        i(null)
    }, [t, c, e]), {
        query: a,
        category: o,
        extraParams: s,
        handleEntityContextChange: (0, H.useCallback)(n => {
            let r = Le(n.extraParams),
                a = V(r);
            if (n.query === e && n.category === t && a === c) {
                i(null);
                return
            }
            i({
                query: n.query,
                category: n.category,
                extraParams: r,
                hasExtraParamsOverride: !0
            })
        }, [t, c, e])
    }
}
var H, ze = e((() => {
    H = n(M())
}));

function Be(e, t, n, r) {
    if (e.category !== `ledger_detail_sidebar` || e.extraParams?.detail_type !== `credit_health`) return e;
    let i = e.extraParams?.displayTitle,
        a = typeof i == `string` && i.trim() ? i : e.query,
        o = e.clientParams?.entitySidebarPresentation,
        s = t !== `fullscreen` && o?.titlePlacement === `chrome` && a.trim().length > 0 && n != null;
    return {
        ...e,
        clientParams: {
            ...e.clientParams,
            entitySidebarPresentation: o ? {
                ...o,
                titleSuffix: s ? n : void 0
            } : void 0
        },
        widgetStateOverride: {
            ...e.widgetStateOverride,
            entity_title_in_header: t !== `fullscreen` && o?.titlePlacement === `chrome` && a.trim().length > 0,
            entity_summary_in_header: !1,
            entity_rating_in_header: s,
            sensitive_values_hidden: r ?? !0
        }
    }
}

function Ve(e, t) {
    if (!(t.category !== `ledger_detail_sidebar` || t.extraParams?.detail_type !== `credit_health`))
        for (let t of [...e].reverse()) {
            let e = t.metadata?.model_dil_v2,
                n = t.metadata?.model_dil?.dil ?? t.metadata?.chatgpt_sdk?.dil;
            if (e != null) {
                let t = He.safeParse(e).data;
                if (t == null) return;
                let n = W.safeParse(t.appData?.opGenui).data,
                    r = W.safeParse(n?.componentResults).data,
                    i = Object.entries(r ?? {});
                if (i.length !== 1) return;
                for (let [e, t] of i) {
                    let n = Ue.safeParse(t).data,
                        r = n?.componentName;
                    if (r == null) try {
                        let t = JSON.parse(e);
                        Array.isArray(t) && t[0] === `LedgerCreditScoreDetail` && (r = t[0])
                    } catch {
                        continue
                    }
                    if (r === `LedgerCreditScoreDetail`) return n?.status === `resolved` ? U(n.state) : void 0
                }
                return
            }
            if (n != null) return n.type === `Basic` ? U(R(n)) : void 0;
            for (let e of t.metadata?.content_references ?? [])
                if (e.type === `dil`) return pe(e.dil) ? e.dil.component === `LedgerCreditScoreDetail` ? U(R(e.dil)) : void 0 : e.dil.type === `Basic` ? U(R(e.dil)) : void 0
        }
}

function U(e) {
    let t = We.safeParse(e).data;
    if (t != null) return {
        text: t.rating_label,
        isSensitive: !0,
        tone: t.rating_color === `green-400` ? `success` : t.rating_color === `yellow-400` ? `caution` : t.rating_color === `red-500` ? `danger` : `secondary`
    }
}
var W, He, Ue, We, Ge = e((() => {
        ge(), le(), W = be(B(), _e()), He = ye({
            appData: W.optional()
        }), Ue = ye({
            componentName: B().optional(),
            status: B(),
            state: W.optional()
        }), We = ye({
            status: ve(`ready`),
            rating_label: B().trim().min(1),
            rating_color: B().nullable().optional()
        })
    })),
    Ke = t({
        createLedgerTransactionDetailRequest: () => $e,
        getEntityInfoCacheKey: () => G,
        getEntityInfoImageThumbnailUrl: () => Je,
        prefetchEntityInfo: () => Qe,
        useEntityInfo: () => et,
        useEntityInfoSaveData: () => Ye
    });

function G({
    category: e,
    query: t,
    locale: n,
    pinnedImage: r,
    extraParams: i,
    extraParamsSignature: a,
    conversationId: o,
    messageId: c,
    refreshNonce: u
}) {
    let d = a ?? V(i),
        f = n.replaceAll(`_`, `-`).toLowerCase(),
        p = r == null ? `` : `-pinned-image-${JSON.stringify([r.url,r.content_url,r.thumbnail_url])}`;
    return `entity-${e}-${t}-${f!==`en`&&!f.startsWith(`en-`)&&z(e)&&(s(`1747093706`)||l(`4107938382`).get(`translate_labrador_sidebar_entity_attributes`,!1))?`${f}-`:``}${d}${p}-${o}-${c}-${u??0}`
}

function K(e, t) {
    Z[e] = t, $.get(e)?.forEach(e => e())
}

function qe(e, t) {
    let n = $.get(e) ?? new Set;
    return n.add(t), $.set(e, n), () => {
        n.delete(t), n.size === 0 && $.delete(e)
    }
}

function Je(e) {
    for (let t of e)
        for (let e of t.metadata?.content_references ?? []) {
            if (e.type === `entity_metadata` && e.entity_data) {
                let t = e.entity_data,
                    n = Array.isArray(t.image_urls) ? t.image_urls[0] : void 0,
                    r = [t.image_url, n, t.thumbnail_url].find(e => typeof e == `string` && e.length > 0);
                if (r != null) return r
            }
            if (e.type === `image_group`)
                for (let t of e.images) {
                    let e = t.image_result?.thumbnail_url ?? t.image_result?.content_url;
                    if (typeof e == `string` && e.length > 0) return e
                }
        }
}

function Ye(e) {
    "use forget";
    let t = (0, at.c)(32),
        {
            clientThreadId: n,
            messageId: r,
            query: i,
            category: a,
            extraParams: o,
            refreshNonce: s
        } = e,
        c = oe(),
        l;
    t[0] === n ? l = t[1] : (l = ee(n) ?? n, t[0] = n, t[1] = l);
    let u = l,
        d;
    t[2] === o ? d = t[3] : (d = V(o), t[2] = o, t[3] = d);
    let f = d,
        p;
    t[4] !== a || t[5] !== u || t[6] !== f || t[7] !== c.locale || t[8] !== r || t[9] !== i || t[10] !== s ? (p = G({
        category: a,
        query: i,
        locale: c.locale,
        extraParamsSignature: f,
        conversationId: u,
        messageId: r,
        refreshNonce: s
    }), t[4] = a, t[5] = u, t[6] = f, t[7] = c.locale, t[8] = r, t[9] = i, t[10] = s, t[11] = p) : p = t[11];
    let m = p,
        h;
    t[12] === m ? h = t[13] : (h = e => qe(m, e), t[12] = m, t[13] = h);
    let g = h,
        _;
    t[14] === m ? _ = t[15] : (_ = () => Z[m] ?? null, t[14] = m, t[15] = _);
    let v = (0, X.useSyncExternalStore)(g, _, Xe),
        y = v != null,
        b;
    t[16] !== v || t[17] !== a || t[18] !== o ? (b = v == null ? void 0 : Ve(v.messages, {
        category: a,
        extraParams: o
    }), t[16] = v, t[17] = a, t[18] = o, t[19] = b) : b = t[19];
    let x;
    t[20] !== v?.messages || t[21] !== a || t[22] !== o || t[23] !== i ? (x = Ze({
        category: a,
        query: i,
        extraParams: o,
        messages: v?.messages ?? []
    }), t[20] = v?.messages, t[21] = a, t[22] = o, t[23] = i, t[24] = x) : x = t[24];
    let S;
    t[25] === v ? S = t[26] : (S = v == null ? void 0 : Je(v.messages), t[25] = v, t[26] = S);
    let C;
    return t[27] !== y || t[28] !== b || t[29] !== x || t[30] !== S ? (C = {
        isReady: y,
        creditScoreTitleSuffix: b,
        sharingExtraParams: x,
        imageThumbnailUrl: S
    }, t[27] = y, t[28] = b, t[29] = x, t[30] = S, t[31] = C) : C = t[31], C
}

function Xe() {
    return null
}

function Ze({
    category: e,
    query: t,
    extraParams: n,
    messages: r
}) {
    if (!z(e)) return n;
    let i = n?.entity_lookup_id ?? (m(n?.business_id) ? n.business_id : void 0),
        a = new Map;
    for (let e of r)
        for (let r of e.metadata?.content_references ?? []) {
            if (r.type !== `entity_metadata` || !z(r.entity_type) || r.metadata?.is_loading === !0 || r.layout != null) continue;
            let e = r.entity_data;
            if (e == null || !(`name` in e)) continue;
            let o = p(e);
            o?.entityId != null && (i == null ? typeof n?.business_id == `string` && !m(e.id) ? e.id === n.business_id && (n.provider == null || e.provider === n.provider) : t.trim().length > 0 && e.name.trim().toLowerCase() === t.trim().toLowerCase() : o.entityId === i) && a.set(o.entityId, o.entityKey)
        }
    if (a.size !== 1) return n;
    let [o] = a;
    if (o == null) return n;
    let [s, c] = o;
    return {
        ...n,
        entity_lookup_id: s,
        entity_key: c
    }
}

function Qe({
    clientThreadId: e,
    messageId: t,
    query: n,
    category: r,
    pinnedImage: i,
    extraParams: a,
    locale: o
}) {
    let s = ee(e) ?? e,
        c = G({
            category: r,
            query: n,
            locale: o,
            pinnedImage: i,
            extraParams: a,
            conversationId: s,
            messageId: t
        }),
        l = Q.get(c);
    if (Z[c] || l) return l;
    let u = (async () => {
        let l = null,
            u = [];
        await Te({
            requestBody: nt({
                conversationId: s,
                clientThreadId: e,
                messageId: t,
                query: n,
                category: r,
                pinnedImage: i,
                extraParams: a,
                locale: o
            }),
            onEvent: e => {
                let {
                    type: t,
                    data: n
                } = e;
                if (t === `message` && n && rt(n)) {
                    let t = J(n);
                    u = it(u, t), !l && e.conversation_id && (l = e.conversation_id)
                }
            }
        });
        let d = Ne({
            messages: u,
            category: r
        });
        Pe({
            category: r,
            requestSource: `prefetch`,
            completeness: d
        }), d.responseStatus === `complete` && K(c, {
            messages: u,
            sidebarConversationId: l
        })
    })();
    return Q.set(c, u), u.finally(() => {
        Q.delete(c)
    }), u
}

function $e(e) {
    let t = e.extraParams?.transaction_id;
    if (e.category !== `ledger_detail_sidebar` || e.extraParams?.detail_type !== `transaction` || typeof t != `string` || t.trim().length === 0) return;
    let n = e.debugParams ?? void 0;
    if (n?.persist_conversation_to_user === !0 || n?.is_cacheable === !0 || n?.params_overrides?.force_regenerate === !0) return;
    let i = nt({
            ...e,
            debugParams: n
        }),
        a = ue(e.locale, e.extraParams.sensitive_values_hidden),
        o = I();
    return {
        key: re([a, i, e.refreshNonce ?? 0]),
        transactionId: t,
        load: async (e, n) => {
            if (await o.wait(), e.throwIfAborted(), I() !== o) throw new DOMException(`Account changed`, `AbortError`);
            let a = {
                messages: [],
                sidebarConversationId: null,
                isStreaming: !0,
                error: null
            };
            if (await Te({
                    requestBody: i,
                    signal: e,
                    onEvent: e => {
                        e.type !== `message` || !rt(e.data) || (a = {
                            ...a,
                            messages: it(a.messages, J(e.data)),
                            sidebarConversationId: e.conversation_id ?? a.sidebarConversationId
                        }, n(a))
                    }
                }), !e.aborted && !P(a.messages, t)) throw Error(r)
        }
    }
}

function q(e) {
    return !e || e.length === 0 ? null : e[e.length - 1]
}

function J(e) {
    let t = e.metadata?.debug_sonic_thread_id ?? e.metadata?.__internal?.sonic_thread_id ?? null,
        n = e.metadata?.__internal?.sonic_user_id ?? null,
        r = e;
    if (t || n) {
        let i = {
            ...e.metadata ?? {}
        };
        t && i.debug_sonic_thread_id == null && (i.debug_sonic_thread_id = t);
        let a = {
            ...i.__internal ?? {}
        };
        t && a.sonic_thread_id == null && (a.sonic_thread_id = t), n && a.sonic_user_id == null && (a.sonic_user_id = n), i.__internal = a, r = {
            ...e,
            metadata: i
        }
    }
    return r
}

function et({
    clientThreadId: e,
    debugThreadId: t,
    messageId: n,
    query: i,
    category: s,
    pinnedImage: c,
    extraParams: l,
    refreshNonce: u,
    reference: f
}) {
    "use no forget";
    let p = f ? `` : i,
        m = f ? `local_business` : s,
        h = f ? void 0 : l,
        g = o(),
        _ = g?.user?.id,
        v = g?.account?.id,
        y = oe(),
        b = f?.conversationId ?? ee(e) ?? e,
        x = ot(),
        S = V(h),
        C = (0, X.useRef)(h),
        w = se(),
        T = m === `ledger_detail_sidebar` && h?.detail_type === `transaction` && he() > 0 && window.location.pathname.startsWith(`/finances`),
        E = (0, X.useRef)(null);
    (0, X.useEffect)(() => {
        C.current = h
    }, [h]);
    let D = (0, X.useMemo)(() => f ? JSON.stringify([`reference`, b, n, f.refId, f.sharedConversationId, y.locale, f.projectId, f.ownerUserId, c, u]) : G({
            category: m,
            query: p,
            locale: y.locale,
            pinnedImage: c,
            extraParamsSignature: S,
            conversationId: b,
            messageId: n,
            refreshNonce: u
        }), [m, p, y.locale, c, S, b, n, u, f]),
        te = m === `ledger_detail_sidebar` && h?.detail_type === `transaction`,
        O = D + (0, X.useMemo)(() => te ? JSON.stringify([_, v, D, I().version]) : ``, [D, te, _, v]),
        k = T ? null : Z[O],
        [ne, A] = (0, X.useState)(k?.messages ?? []),
        [re, j] = (0, X.useState)(k?.sidebarConversationId ?? null),
        [M, ie] = (0, X.useState)({}),
        [ae, N] = (0, X.useState)(null),
        [ce, P] = (0, X.useState)(() => Y(q(k?.messages ?? null))),
        [le, F] = (0, X.useState)(!1);
    (0, X.useEffect)(() => {
        N(null)
    }, [p, m]);
    let L = (0, X.useRef)(null),
        R = (0, X.useCallback)(async t => {
            E.current?.(), E.current = null, L.current && L.current.abort();
            let i = new AbortController;
            L.current = i;
            let o = () => L.current === i,
                s = () => o() && !i.signal.aborted,
                l = T ? $e({
                    conversationId: b,
                    clientThreadId: e,
                    messageId: n,
                    query: p,
                    category: m,
                    extraParams: C.current,
                    locale: y.locale,
                    regenParams: t,
                    refreshNonce: u,
                    debugParams: void 0
                }) : void 0;
            if (l) {
                w.setContext(ue(y.locale, C.current?.sensitive_values_hidden));
                let e = w.open(l, e => {
                    queueMicrotask(() => {
                        s() && (A(e.messages), j(e.sidebarConversationId), P(Y(q(e.messages))), N(e.error), F(e.isStreaming))
                    })
                }, t != null);
                E.current = e.release;
                return
            }
            A([]), K(O, null), P([]), F(!0);
            try {
                N(null);
                let a = {
                        messages: [],
                        sidebarConversationId: null
                    },
                    o = C.current;
                if (m === `ledger_detail_sidebar` && o?.detail_type === `transaction` && typeof o.transaction_id == `string`) {
                    let e = I();
                    if (await e.wait(), i.signal.throwIfAborted(), I() !== e) throw new DOMException(`Account changed`, `AbortError`)
                }
                if (await Te({
                        requestBody: f ? {
                            ...we({
                                conversationId: b,
                                messageId: n,
                                category: `business`,
                                refId: f.refId,
                                sharedConversationId: f.sharedConversationId,
                                multiMessageMode: !0,
                                pinnedImage: c,
                                locale: y.locale
                            }),
                            ...t
                        } : nt({
                            conversationId: b,
                            clientThreadId: e,
                            messageId: n,
                            query: p,
                            category: m,
                            pinnedImage: c,
                            extraParams: o,
                            locale: y.locale,
                            regenParams: t,
                            debugParams: void 0
                        }),
                        signal: i.signal,
                        isAuthOptional: !f && void 0,
                        requestContext: f,
                        onEvent: t => {
                            if (!s()) return;
                            let {
                                type: n,
                                data: r
                            } = t;
                            if (f && !a.resolvedEntity && n === `message`) {
                                let t = r.metadata?.content_references?.find(e => e.type === `entity` && e.status === `done`);
                                if (t?.type === `entity`) {
                                    a.resolvedEntity = t, tt(e, f, t);
                                    return
                                }
                            }
                            if (n === `message` && r) {
                                let e = Y(r);
                                e.length > 0 && P(e)
                            }
                            if (n === `message` && r && rt(r)) {
                                let e = J(r);
                                a.messages = it(a.messages, e), A(a.messages), !a.sidebarConversationId && t.conversation_id && (j(t.conversation_id), a.sidebarConversationId = t.conversation_id)
                            }
                            n === `__debug` && r && ie(e => ({
                                ...e,
                                ...r
                            }))
                        }
                    }), s()) {
                    if (f && !a.resolvedEntity) throw Error(r);
                    let e = Ne({
                        messages: a.messages,
                        category: a.resolvedEntity?.category ?? m
                    });
                    Pe({
                        category: a.resolvedEntity?.category ?? m,
                        requestSource: `foreground`,
                        completeness: e
                    }), e.responseStatus === `complete` && K(O, a), F(!1)
                }
            } catch (e) {
                if (i.signal.aborted || a(e) || !o()) return;
                i.abort(), K(O, null), N(e instanceof Error ? e : Error(String(e))), F(!1)
            } finally {
                o() && (L.current = null)
            }
        }, [O, b, e, t, n, p, m, c, _, v, y.locale, x, u, w, T, f]),
        de = (0, X.useCallback)(e => {
            let t = {
                    force_regenerate: !0
                },
                r = `default`;
            return e?.forceUseSearch !== void 0 && (t.force_use_search = e.forceUseSearch, r = e.forceUseSearch ? `enabled` : `disabled`), d.logEventWithStatsig(`Sidebar Message Regenerated`, `chatgpt_sidebar_message_regenerated`, {
                message_id: n,
                conversation_id: b,
                category: s,
                surface: `web`,
                search_force_status: r
            }), R(t)
        }, [R, n, b, s]);
    return (0, X.useEffect)(() => {
        let t, n = !1;
        if (T) return queueMicrotask(() => {
            n || R()
        }), () => {
            n = !0, L.current?.abort(), E.current?.(), E.current = null
        };
        let r = Z[O];
        if (r) {
            f && r.resolvedEntity && tt(e, f, r.resolvedEntity), A(r.messages), j(r.sidebarConversationId), P(Y(q(r.messages))), F(!1);
            return
        }
        let i = Q.get(O);
        if (i) {
            F(!0), i.finally(() => {
                if (n) return;
                let e = Z[O];
                if (e) {
                    A(e.messages), j(e.sidebarConversationId), P(Y(q(e.messages))), F(!1);
                    return
                }
                R()
            });
            return
        }
        return R(), () => {
            t &&= (clearTimeout(t), void 0), n = !0, L.current?.abort(), A([]), P([]), F(!1)
        }
    }, [O, b, e, t, n, p, m, S, _, v, y.locale, T, f]), {
        messages: ne,
        latestMessage: q(ne),
        sidebarConversationId: re,
        error: ae,
        searchModelQueries: ce,
        isStreaming: le,
        debugData: M,
        regenerate: de,
        refreshFromCache: () => R({
            force_regenerate: !1
        })
    }
}

function tt(e, t, n) {
    let r = te(e),
        i = ne(() => fe(r));
    i?.type !== `entity` || i.reference !== t || (x(() => fe.set(r, {
        ...i,
        query: n.name ?? ``,
        businessProfile: xe(n),
        category: n.category ?? `local_business`,
        entityId: n.id ?? void 0,
        extraParams: n.extra_params ?? void 0
    })), t.onResolved?.(n))
}

function nt({
    conversationId: e,
    clientThreadId: t,
    messageId: n,
    query: r,
    category: i,
    pinnedImage: a,
    extraParams: o,
    locale: s,
    regenParams: c,
    debugParams: l
}) {
    let u = typeof o?.entity_name == `string` ? o.entity_name : void 0,
        d = typeof o?.entity_category == `string` ? o.entity_category : void 0,
        p = T.getMaybeMessage(D(t), n),
        m = p?.metadata?.resolved_model_slug || p?.metadata?.model_slug;
    return {
        conversation_id: e,
        message_id: n,
        ...typeof m == `string` && m.length > 0 ? {
            main_conversation_model_slug: m
        } : {},
        supported_encodings: [f.V1],
        is_client_thread: e === t,
        ...c ?? {},
        ...i === `ask_sidebar` ? {
            category: `ask_sidebar`,
            locale: s,
            ask_sidebar_params: {
                query: r,
                additional_context: o?.context,
                conversation_context_citation: o?.conversation_context_citation
            }
        } : i === `entity_sidebar_follow_up` ? {
            category: `entity_sidebar_follow_up`,
            locale: s,
            entity_sidebar_follow_up_params: {
                query: r,
                additional_context: o?.context,
                entity_name: u,
                entity_category: d
            }
        } : {
            category: `generic_entity`,
            locale: s,
            generic_entity_params: {
                name: r,
                category: i,
                ...a == null ? {} : {
                    pinned_image: a
                },
                extra_params: i === `ledger_detail_sidebar` && o?.detail_type === `transaction` ? {
                    ...o,
                    transaction_category_editing_enabled: !0
                } : o,
                multi_message_mode: !0
            }
        },
        ...l ? {
            debug_params: l
        } : {}
    }
}

function rt(e) {
    return e.author.role === y.Assistant && h(e) && (!e.channel || e.channel === `final`)
}

function it(e, t) {
    let n = e.findIndex(e => e.id === t.id);
    if (n === -1) return [...e, t];
    let r = [...e];
    return r[n] = t, r
}

function Y(e) {
    let t = e?.metadata?.search_model_queries?.queries;
    return Array.isArray(t) ? t : []
}
var at, X, Z, Q, $, ot, st = e((() => {
    at = ae(), Se(), b(), v(), de(), S(), Ce(), F(), E(), w(), O(), A(), N(), i(), _(), c(), X = n(M()), j(), Ie(), Ee(), ze(), me(), L(), ce(), ie(), Ge(), Z = {}, Q = new Map, $ = new Map, ot = () => void 0
}));
export {
    Ke as a, ze as c, Ye as i, Re as l, Qe as n, Ge as o, et as r, Be as s, st as t
};
//# sourceMappingURL=24fd10e2-abtkt6x6e458c01b.js.map