import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $J as r,
    A5 as i,
    A8 as a,
    Ait as o,
    Art as s,
    GJ as c,
    I5 as l,
    Lnt as u,
    Lot as d,
    Mtt as f,
    Ott as p,
    QJ as m,
    QZ as h,
    Uat as g,
    aU as _,
    eY as v,
    est as y,
    gF as b,
    grt as x,
    hrt as S,
    jrt as C,
    krt as w,
    lQ as T,
    not as ee,
    oU as E,
    ptt as D,
    rU as te,
    tot as O,
    urt as k,
    vF as ne,
    znt as A
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    G as re,
    Rn as j,
    Vn as ie,
    s as ae,
    wn as oe,
    zn as se
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Zt as M,
    CAt as ce,
    LIn as N,
    Qpt as P,
    SAt as le,
    Swt as F,
    TAt as I,
    WIn as L,
    Ypt as ue,
    ZZt as R,
    bAt as de,
    eQt as fe,
    oQt as pe,
    wAt as me,
    xAt as he,
    xwt as z
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    Vx as ge,
    dS as _e,
    gS as B,
    mS as ve,
    oS as ye,
    yS as be
} from "./c2675c8c-f8x469cgefxzeo6l.js";
import {
    n as xe,
    r as Se
} from "./09231af0-uq8zl71w3t7cxbv8.js";
import {
    a as Ce,
    i as we,
    r as Te,
    t as Ee
} from "./2f772deb-mpq885b5hb4d2g9w.js";

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
    return t?.content_type !== D.Text && t?.content_type !== D.MultimodalText ? !1 : t.parts.some(e => typeof e == `string` && e.trim().length > 0)
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
        i = P(t) ? Oe(n) ? `complete` : `missing` : `not_applicable`,
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
    s.count(C.DEFAULT, Fe, {
        category: e,
        request_source: t,
        response_status: n.responseStatus,
        entity_metadata_status: n.entityMetadataStatus,
        image_group_status: n.imageGroupStatus,
        model_response_status: n.modelResponseStatus
    })
}
var Fe, Ie = e((() => {
    f(), ue(), w(), Fe = `sidebar.response_completeness`
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
    H = n(ie())
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
                if (e.type === `dil`) return fe(e.dil) ? e.dil.component === `LedgerCreditScoreDetail` ? U(R(e.dil)) : void 0 : e.dil.type === `Basic` ? U(R(e.dil)) : void 0
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
        ge(), M(), W = ve(B(), be()), He = _e({
            appData: W.optional()
        }), Ue = _e({
            componentName: B().optional(),
            status: B(),
            state: W.optional()
        }), We = _e({
            status: ye(`ready`),
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
    messageId: s,
    refreshNonce: c
}) {
    let l = a ?? V(i),
        u = n.replaceAll(`_`, `-`).toLowerCase(),
        d = r == null ? `` : `-pinned-image-${JSON.stringify([r.url,r.content_url,r.thumbnail_url])}`;
    return `entity-${e}-${t}-${u!==`en`&&!u.startsWith(`en-`)&&P(e)&&(k(`1747093706`)||S(`4107938382`).get(`translate_labrador_sidebar_entity_attributes`,!1))?`${u}-`:``}${l}${d}-${o}-${s}-${c??0}`
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
        c = se(),
        l;
    t[0] === n ? l = t[1] : (l = m(n) ?? n, t[0] = n, t[1] = l);
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
    let h = p,
        g;
    t[12] === h ? g = t[13] : (g = e => qe(h, e), t[12] = h, t[13] = g);
    let _ = g,
        v;
    t[14] === h ? v = t[15] : (v = () => Z[h] ?? null, t[14] = h, t[15] = v);
    let y = (0, X.useSyncExternalStore)(_, v, Xe),
        b = y != null,
        x;
    t[16] !== y || t[17] !== a || t[18] !== o ? (x = y == null ? void 0 : Ve(y.messages, {
        category: a,
        extraParams: o
    }), t[16] = y, t[17] = a, t[18] = o, t[19] = x) : x = t[19];
    let S;
    t[20] !== y?.messages || t[21] !== a || t[22] !== o || t[23] !== i ? (S = Ze({
        category: a,
        query: i,
        extraParams: o,
        messages: y?.messages ?? []
    }), t[20] = y?.messages, t[21] = a, t[22] = o, t[23] = i, t[24] = S) : S = t[24];
    let C;
    t[25] === y ? C = t[26] : (C = y == null ? void 0 : Je(y.messages), t[25] = y, t[26] = C);
    let w;
    return t[27] !== b || t[28] !== x || t[29] !== S || t[30] !== C ? (w = {
        isReady: b,
        creditScoreTitleSuffix: x,
        sharingExtraParams: S,
        imageThumbnailUrl: C
    }, t[27] = b, t[28] = x, t[29] = S, t[30] = C, t[31] = w) : w = t[31], w
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
    if (!P(e)) return n;
    let i = n?.entity_lookup_id ?? (E(n?.business_id) ? n.business_id : void 0),
        a = new Map;
    for (let e of r)
        for (let r of e.metadata?.content_references ?? []) {
            if (r.type !== `entity_metadata` || !P(r.entity_type) || r.metadata?.is_loading === !0 || r.layout != null) continue;
            let e = r.entity_data;
            if (e == null || !(`name` in e)) continue;
            let o = te(e);
            o?.entityId != null && (i == null ? typeof n?.business_id == `string` && !E(e.id) ? e.id === n.business_id && (n.provider == null || e.provider === n.provider) : t.trim().length > 0 && e.name.trim().toLowerCase() === t.trim().toLowerCase() : o.entityId === i) && a.set(o.entityId, o.entityKey)
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
    let s = m(e) ?? e,
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
    let r = nt({
            ...e,
            debugParams: n
        }),
        i = he(e.locale, e.extraParams.sensitive_values_hidden),
        a = z();
    return {
        key: re([i, r, e.refreshNonce ?? 0]),
        transactionId: t,
        load: async (e, n) => {
            if (await a.wait(), e.throwIfAborted(), z() !== a) throw new DOMException(`Account changed`, `AbortError`);
            let i = {
                messages: [],
                sidebarConversationId: null,
                isStreaming: !0,
                error: null
            };
            if (await Te({
                    requestBody: r,
                    signal: e,
                    onEvent: e => {
                        e.type !== `message` || !rt(e.data) || (i = {
                            ...i,
                            messages: it(i.messages, J(e.data)),
                            sidebarConversationId: e.conversation_id ?? i.sidebarConversationId
                        }, n(i))
                    }
                }), !e.aborted && !I(i.messages, t)) throw Error(g)
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
    query: r,
    category: i,
    pinnedImage: a,
    extraParams: o,
    refreshNonce: s,
    reference: c
}) {
    "use no forget";
    let l = c ? `` : r,
        d = c ? `local_business` : i,
        f = c ? void 0 : o,
        p = y(),
        h = p?.user?.id,
        _ = p?.account?.id,
        v = se(),
        b = c?.conversationId ?? m(e) ?? e,
        x = ot(),
        S = V(f),
        C = (0, X.useRef)(f),
        w = le(),
        T = d === `ledger_detail_sidebar` && f?.detail_type === `transaction` && de() > 0 && window.location.pathname.startsWith(`/finances`),
        E = (0, X.useRef)(null);
    (0, X.useEffect)(() => {
        C.current = f
    }, [f]);
    let D = (0, X.useMemo)(() => c ? JSON.stringify([`reference`, b, n, c.refId, c.sharedConversationId, v.locale, c.projectId, c.ownerUserId, a, s]) : G({
            category: d,
            query: l,
            locale: v.locale,
            pinnedImage: a,
            extraParamsSignature: S,
            conversationId: b,
            messageId: n,
            refreshNonce: s
        }), [d, l, v.locale, a, S, b, n, s, c]),
        te = d === `ledger_detail_sidebar` && f?.detail_type === `transaction`,
        O = D + (0, X.useMemo)(() => te ? JSON.stringify([h, _, D, z().version]) : ``, [D, te, h, _]),
        k = T ? null : Z[O],
        [ne, A] = (0, X.useState)(k?.messages ?? []),
        [re, j] = (0, X.useState)(k?.sidebarConversationId ?? null),
        [ie, ae] = (0, X.useState)({}),
        [oe, M] = (0, X.useState)(null),
        [ce, N] = (0, X.useState)(() => Y(q(k?.messages ?? null))),
        [P, F] = (0, X.useState)(!1);
    (0, X.useEffect)(() => {
        M(null)
    }, [l, d]);
    let I = (0, X.useRef)(null),
        L = (0, X.useCallback)(async t => {
            E.current?.(), E.current = null, I.current && I.current.abort();
            let r = new AbortController;
            I.current = r;
            let i = () => I.current === r,
                o = () => i() && !r.signal.aborted,
                u = T ? $e({
                    conversationId: b,
                    clientThreadId: e,
                    messageId: n,
                    query: l,
                    category: d,
                    extraParams: C.current,
                    locale: v.locale,
                    regenParams: t,
                    refreshNonce: s,
                    debugParams: void 0
                }) : void 0;
            if (u) {
                w.setContext(he(v.locale, C.current?.sensitive_values_hidden));
                let e = w.open(u, e => {
                    queueMicrotask(() => {
                        o() && (A(e.messages), j(e.sidebarConversationId), N(Y(q(e.messages))), M(e.error), F(e.isStreaming))
                    })
                }, t != null);
                E.current = e.release;
                return
            }
            A([]), K(O, null), N([]), F(!0);
            try {
                M(null);
                let i = {
                        messages: [],
                        sidebarConversationId: null
                    },
                    s = C.current;
                if (d === `ledger_detail_sidebar` && s?.detail_type === `transaction` && typeof s.transaction_id == `string`) {
                    let e = z();
                    if (await e.wait(), r.signal.throwIfAborted(), z() !== e) throw new DOMException(`Account changed`, `AbortError`)
                }
                if (await Te({
                        requestBody: c ? {
                            ...we({
                                conversationId: b,
                                messageId: n,
                                category: `business`,
                                refId: c.refId,
                                sharedConversationId: c.sharedConversationId,
                                multiMessageMode: !0,
                                pinnedImage: a,
                                locale: v.locale
                            }),
                            ...t
                        } : nt({
                            conversationId: b,
                            clientThreadId: e,
                            messageId: n,
                            query: l,
                            category: d,
                            pinnedImage: a,
                            extraParams: s,
                            locale: v.locale,
                            regenParams: t,
                            debugParams: void 0
                        }),
                        signal: r.signal,
                        isAuthOptional: !c && void 0,
                        requestContext: c,
                        onEvent: t => {
                            if (!o()) return;
                            let {
                                type: n,
                                data: r
                            } = t;
                            if (c && !i.resolvedEntity && n === `message`) {
                                let t = r.metadata?.content_references?.find(e => e.type === `entity` && e.status === `done`);
                                if (t?.type === `entity`) {
                                    i.resolvedEntity = t, tt(e, c, t);
                                    return
                                }
                            }
                            if (n === `message` && r) {
                                let e = Y(r);
                                e.length > 0 && N(e)
                            }
                            if (n === `message` && r && rt(r)) {
                                let e = J(r);
                                i.messages = it(i.messages, e), A(i.messages), !i.sidebarConversationId && t.conversation_id && (j(t.conversation_id), i.sidebarConversationId = t.conversation_id)
                            }
                            n === `__debug` && r && ae(e => ({
                                ...e,
                                ...r
                            }))
                        }
                    }), o()) {
                    if (c && !i.resolvedEntity) throw Error(g);
                    let e = Ne({
                        messages: i.messages,
                        category: i.resolvedEntity?.category ?? d
                    });
                    Pe({
                        category: i.resolvedEntity?.category ?? d,
                        requestSource: `foreground`,
                        completeness: e
                    }), e.responseStatus === `complete` && K(O, i), F(!1)
                }
            } catch (e) {
                if (r.signal.aborted || ee(e) || !i()) return;
                r.abort(), K(O, null), M(e instanceof Error ? e : Error(String(e))), F(!1)
            } finally {
                i() && (I.current = null)
            }
        }, [O, b, e, t, n, l, d, a, h, _, v.locale, x, s, w, T, c]),
        ue = (0, X.useCallback)(e => {
            let t = {
                    force_regenerate: !0
                },
                r = `default`;
            return e?.forceUseSearch !== void 0 && (t.force_use_search = e.forceUseSearch, r = e.forceUseSearch ? `enabled` : `disabled`), u.logEventWithStatsig(`Sidebar Message Regenerated`, `chatgpt_sidebar_message_regenerated`, {
                message_id: n,
                conversation_id: b,
                category: i,
                surface: `web`,
                search_force_status: r
            }), L(t)
        }, [L, n, b, i]);
    return (0, X.useEffect)(() => {
        let t, n = !1;
        if (T) return queueMicrotask(() => {
            n || L()
        }), () => {
            n = !0, I.current?.abort(), E.current?.(), E.current = null
        };
        let r = Z[O];
        if (r) {
            c && r.resolvedEntity && tt(e, c, r.resolvedEntity), A(r.messages), j(r.sidebarConversationId), N(Y(q(r.messages))), F(!1);
            return
        }
        let i = Q.get(O);
        if (i) {
            F(!0), i.finally(() => {
                if (n) return;
                let e = Z[O];
                if (e) {
                    A(e.messages), j(e.sidebarConversationId), N(Y(q(e.messages))), F(!1);
                    return
                }
                L()
            });
            return
        }
        return L(), () => {
            t &&= (clearTimeout(t), void 0), n = !0, I.current?.abort(), A([]), N([]), F(!1)
        }
    }, [O, b, e, t, n, l, d, S, h, _, v.locale, T, c]), {
        messages: ne,
        latestMessage: q(ne),
        sidebarConversationId: re,
        error: oe,
        searchModelQueries: ce,
        isStreaming: P,
        debugData: ie,
        regenerate: ue,
        refreshFromCache: () => L({
            force_regenerate: !1
        })
    }
}

function tt(e, t, n) {
    let r = b(e),
        a = l(() => L(r));
    a?.type !== `entity` || a.reference !== t || (i(() => L.set(r, {
        ...a,
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
    query: i,
    category: a,
    pinnedImage: o,
    extraParams: s,
    locale: l,
    regenParams: u,
    debugParams: f
}) {
    let p = typeof s?.entity_name == `string` ? s.entity_name : void 0,
        m = typeof s?.entity_category == `string` ? s.entity_category : void 0,
        h = c.getMaybeMessage(r(t), n),
        g = h?.metadata?.resolved_model_slug || h?.metadata?.model_slug;
    return {
        conversation_id: e,
        message_id: n,
        ...typeof g == `string` && g.length > 0 ? {
            main_conversation_model_slug: g
        } : {},
        supported_encodings: [d.V1],
        is_client_thread: e === t,
        ...u ?? {},
        ...a === `ask_sidebar` ? {
            category: `ask_sidebar`,
            locale: l,
            ask_sidebar_params: {
                query: i,
                additional_context: s?.context,
                conversation_context_citation: s?.conversation_context_citation
            }
        } : a === `entity_sidebar_follow_up` ? {
            category: `entity_sidebar_follow_up`,
            locale: l,
            entity_sidebar_follow_up_params: {
                query: i,
                additional_context: s?.context,
                entity_name: p,
                entity_category: m
            }
        } : {
            category: `generic_entity`,
            locale: l,
            generic_entity_params: {
                name: i,
                category: a,
                ...o == null ? {} : {
                    pinned_image: o
                },
                extra_params: a === `ledger_detail_sidebar` && s?.detail_type === `transaction` ? {
                    ...s,
                    transaction_category_editing_enabled: !0
                } : s,
                multi_message_mode: !0
            }
        },
        ...f ? {
            debug_params: f
        } : {}
    }
}

function rt(e) {
    return e.author.role === p.Assistant && T(e) && (!e.channel || e.channel === `final`)
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
    at = oe(), Se(), f(), ne(), N(), a(), Ce(), ue(), _(), v(), o(), A(), pe(), O(), h(), x(), X = n(ie()), j(), Ie(), Ee(), ze(), ce(), me(), F(), ae(), Ge(), Z = {}, Q = new Map, $ = new Map, ot = () => void 0
}));
export {
    Ke as a, ze as c, Ye as i, Re as l, Qe as n, Ge as o, et as r, Be as s, st as t
};
//# sourceMappingURL=24fd10e2-fn7fbbu5p3fnvh0w.js.map