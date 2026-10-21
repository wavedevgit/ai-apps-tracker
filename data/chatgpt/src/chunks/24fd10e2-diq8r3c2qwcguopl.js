import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Fot as r,
    Gnt as i,
    Iat as a,
    JJ as o,
    Lat as s,
    Qet as c,
    S5 as l,
    Xnt as u,
    Znt as d,
    _tt as f,
    bnt as p,
    cU as m,
    dF as h,
    dit as g,
    drt as _,
    fQ as v,
    frt as y,
    g5 as b,
    g8 as x,
    lU as S,
    nY as C,
    oU as w,
    pF as T,
    ptt as ee,
    rY as E,
    tQ as D,
    tY as te,
    urt as ne,
    vnt as re,
    vot as O,
    wat as ie
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    G as ae,
    Rn as k,
    Vn as A,
    s as oe,
    wn as se,
    zn as ce
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    DAt as j,
    EAt as le,
    Ewt as ue,
    OAt as M,
    QFn as de,
    TAt as fe,
    Twt as N,
    XZt as P,
    YZt as F,
    aIn as I,
    imt as L,
    kAt as pe,
    nQt as me,
    qZt as R,
    tmt as he,
    wAt as ge
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    Lx as _e,
    fS as z,
    hS as ve,
    nS as ye,
    sS as B,
    uS as be
} from "./c2675c8c-ejvs9hq3rwjwsbcv.js";
import {
    n as xe,
    r as Se
} from "./09231af0-nzzz6dkbnqvey7m6.js";
import {
    a as Ce,
    i as we,
    r as Te,
    t as Ee
} from "./2f772deb-o1excjo3b8aemp87.js";

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
    return t?.content_type !== c.Text && t?.content_type !== c.MultimodalText ? !1 : t.parts.some(e => typeof e == `string` && e.trim().length > 0)
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
        i = L(t) ? Oe(n) ? `complete` : `missing` : `not_applicable`,
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
    _.count(y.DEFAULT, Fe, {
        category: e,
        request_source: t,
        response_status: n.responseStatus,
        entity_metadata_status: n.entityMetadataStatus,
        image_group_status: n.imageGroupStatus,
        model_response_status: n.modelResponseStatus
    })
}
var Fe, Ie = e((() => {
    f(), he(), ne(), Fe = `sidebar.response_completeness`
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
    H = n(A())
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
                if (e.type === `dil`) return P(e.dil) ? e.dil.component === `LedgerCreditScoreDetail` ? U(R(e.dil)) : void 0 : e.dil.type === `Basic` ? U(R(e.dil)) : void 0
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
        _e(), F(), W = be(z(), ve()), He = B({
            appData: W.optional()
        }), Ue = B({
            componentName: z().optional(),
            status: z(),
            state: W.optional()
        }), We = B({
            status: ye(`ready`),
            rating_label: z().trim().min(1),
            rating_color: z().nullable().optional()
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
    extraParams: a,
    extraParamsSignature: o,
    conversationId: s,
    messageId: c,
    refreshNonce: l
}) {
    let d = o ?? V(a),
        f = n.replaceAll(`_`, `-`).toLowerCase(),
        p = r == null ? `` : `-pinned-image-${JSON.stringify([r.url,r.content_url,r.thumbnail_url])}`;
    return `entity-${e}-${t}-${f!==`en`&&!f.startsWith(`en-`)&&L(e)&&(i(`1747093706`)||u(`4107938382`).get(`translate_labrador_sidebar_entity_attributes`,!1))?`${f}-`:``}${d}${p}-${s}-${c}-${l??0}`
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
        c = ce(),
        l;
    t[0] === n ? l = t[1] : (l = te(n) ?? n, t[0] = n, t[1] = l);
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
    if (!L(e)) return n;
    let i = n?.entity_lookup_id ?? (S(n?.business_id) ? n.business_id : void 0),
        a = new Map;
    for (let e of r)
        for (let r of e.metadata?.content_references ?? []) {
            if (r.type !== `entity_metadata` || !L(r.entity_type) || r.metadata?.is_loading === !0 || r.layout != null) continue;
            let e = r.entity_data;
            if (e == null || !(`name` in e)) continue;
            let o = w(e);
            o?.entityId != null && (i == null ? typeof n?.business_id == `string` && !S(e.id) ? e.id === n.business_id && (n.provider == null || e.provider === n.provider) : t.trim().length > 0 && e.name.trim().toLowerCase() === t.trim().toLowerCase() : o.entityId === i) && a.set(o.entityId, o.entityKey)
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
    let s = te(e) ?? e,
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
        i = fe(e.locale, e.extraParams.sensitive_values_hidden),
        a = N();
    return {
        key: ae([i, r, e.refreshNonce ?? 0]),
        transactionId: t,
        load: async (e, n) => {
            if (await a.wait(), e.throwIfAborted(), N() !== a) throw new DOMException(`Account changed`, `AbortError`);
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
                }), !e.aborted && !pe(i.messages, t)) throw Error(ie)
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
    category: a,
    pinnedImage: o,
    extraParams: c,
    refreshNonce: l,
    reference: u
}) {
    "use no forget";
    let d = u ? `` : i,
        f = u ? `local_business` : a,
        p = u ? void 0 : c,
        m = r(),
        h = m?.user?.id,
        g = m?.account?.id,
        _ = ce(),
        v = u?.conversationId ?? te(e) ?? e,
        y = ot(),
        b = V(p),
        x = (0, X.useRef)(p),
        S = le(),
        C = f === `ledger_detail_sidebar` && p?.detail_type === `transaction` && ge() > 0 && window.location.pathname.startsWith(`/finances`),
        w = (0, X.useRef)(null);
    (0, X.useEffect)(() => {
        x.current = p
    }, [p]);
    let T = (0, X.useMemo)(() => u ? JSON.stringify([`reference`, v, n, u.refId, u.sharedConversationId, _.locale, u.projectId, u.ownerUserId, o, l]) : G({
            category: f,
            query: d,
            locale: _.locale,
            pinnedImage: o,
            extraParamsSignature: b,
            conversationId: v,
            messageId: n,
            refreshNonce: l
        }), [f, d, _.locale, o, b, v, n, l, u]),
        ee = f === `ledger_detail_sidebar` && p?.detail_type === `transaction`,
        E = T + (0, X.useMemo)(() => ee ? JSON.stringify([h, g, T, N().version]) : ``, [T, ee, h, g]),
        D = C ? null : Z[E],
        [ne, O] = (0, X.useState)(D?.messages ?? []),
        [ae, k] = (0, X.useState)(D?.sidebarConversationId ?? null),
        [A, oe] = (0, X.useState)({}),
        [se, j] = (0, X.useState)(null),
        [ue, M] = (0, X.useState)(() => Y(q(D?.messages ?? null))),
        [de, P] = (0, X.useState)(!1);
    (0, X.useEffect)(() => {
        j(null)
    }, [d, f]);
    let F = (0, X.useRef)(null),
        I = (0, X.useCallback)(async t => {
            w.current?.(), w.current = null, F.current && F.current.abort();
            let r = new AbortController;
            F.current = r;
            let i = () => F.current === r,
                a = () => i() && !r.signal.aborted,
                c = C ? $e({
                    conversationId: v,
                    clientThreadId: e,
                    messageId: n,
                    query: d,
                    category: f,
                    extraParams: x.current,
                    locale: _.locale,
                    regenParams: t,
                    refreshNonce: l,
                    debugParams: void 0
                }) : void 0;
            if (c) {
                S.setContext(fe(_.locale, x.current?.sensitive_values_hidden));
                let e = S.open(c, e => {
                    queueMicrotask(() => {
                        a() && (O(e.messages), k(e.sidebarConversationId), M(Y(q(e.messages))), j(e.error), P(e.isStreaming))
                    })
                }, t != null);
                w.current = e.release;
                return
            }
            O([]), K(E, null), M([]), P(!0);
            try {
                j(null);
                let i = {
                        messages: [],
                        sidebarConversationId: null
                    },
                    s = x.current;
                if (f === `ledger_detail_sidebar` && s?.detail_type === `transaction` && typeof s.transaction_id == `string`) {
                    let e = N();
                    if (await e.wait(), r.signal.throwIfAborted(), N() !== e) throw new DOMException(`Account changed`, `AbortError`)
                }
                if (await Te({
                        requestBody: u ? {
                            ...we({
                                conversationId: v,
                                messageId: n,
                                category: `business`,
                                refId: u.refId,
                                sharedConversationId: u.sharedConversationId,
                                multiMessageMode: !0,
                                pinnedImage: o,
                                locale: _.locale
                            }),
                            ...t
                        } : nt({
                            conversationId: v,
                            clientThreadId: e,
                            messageId: n,
                            query: d,
                            category: f,
                            pinnedImage: o,
                            extraParams: s,
                            locale: _.locale,
                            regenParams: t,
                            debugParams: void 0
                        }),
                        signal: r.signal,
                        isAuthOptional: !u && void 0,
                        requestContext: u,
                        onEvent: t => {
                            if (!a()) return;
                            let {
                                type: n,
                                data: r
                            } = t;
                            if (u && !i.resolvedEntity && n === `message`) {
                                let t = r.metadata?.content_references?.find(e => e.type === `entity` && e.status === `done`);
                                if (t?.type === `entity`) {
                                    i.resolvedEntity = t, tt(e, u, t);
                                    return
                                }
                            }
                            if (n === `message` && r) {
                                let e = Y(r);
                                e.length > 0 && M(e)
                            }
                            if (n === `message` && r && rt(r)) {
                                let e = J(r);
                                i.messages = it(i.messages, e), O(i.messages), !i.sidebarConversationId && t.conversation_id && (k(t.conversation_id), i.sidebarConversationId = t.conversation_id)
                            }
                            n === `__debug` && r && oe(e => ({
                                ...e,
                                ...r
                            }))
                        }
                    }), a()) {
                    if (u && !i.resolvedEntity) throw Error(ie);
                    let e = Ne({
                        messages: i.messages,
                        category: i.resolvedEntity?.category ?? f
                    });
                    Pe({
                        category: i.resolvedEntity?.category ?? f,
                        requestSource: `foreground`,
                        completeness: e
                    }), e.responseStatus === `complete` && K(E, i), P(!1)
                }
            } catch (e) {
                if (r.signal.aborted || s(e) || !i()) return;
                r.abort(), K(E, null), j(e instanceof Error ? e : Error(String(e))), P(!1)
            } finally {
                i() && (F.current = null)
            }
        }, [E, v, e, t, n, d, f, o, h, g, _.locale, y, l, S, C, u]),
        L = (0, X.useCallback)(e => {
            let t = {
                    force_regenerate: !0
                },
                r = `default`;
            return e?.forceUseSearch !== void 0 && (t.force_use_search = e.forceUseSearch, r = e.forceUseSearch ? `enabled` : `disabled`), re.logEventWithStatsig(`Sidebar Message Regenerated`, `chatgpt_sidebar_message_regenerated`, {
                message_id: n,
                conversation_id: v,
                category: a,
                surface: `web`,
                search_force_status: r
            }), I(t)
        }, [I, n, v, a]);
    return (0, X.useEffect)(() => {
        let t, n = !1;
        if (C) return queueMicrotask(() => {
            n || I()
        }), () => {
            n = !0, F.current?.abort(), w.current?.(), w.current = null
        };
        let r = Z[E];
        if (r) {
            u && r.resolvedEntity && tt(e, u, r.resolvedEntity), O(r.messages), k(r.sidebarConversationId), M(Y(q(r.messages))), P(!1);
            return
        }
        let i = Q.get(E);
        if (i) {
            P(!0), i.finally(() => {
                if (n) return;
                let e = Z[E];
                if (e) {
                    O(e.messages), k(e.sidebarConversationId), M(Y(q(e.messages))), P(!1);
                    return
                }
                I()
            });
            return
        }
        return I(), () => {
            t &&= (clearTimeout(t), void 0), n = !0, F.current?.abort(), O([]), M([]), P(!1)
        }
    }, [E, v, e, t, n, d, f, b, h, g, _.locale, C, u]), {
        messages: ne,
        latestMessage: q(ne),
        sidebarConversationId: ae,
        error: se,
        searchModelQueries: ue,
        isStreaming: de,
        debugData: A,
        regenerate: L,
        refreshFromCache: () => I({
            force_regenerate: !1
        })
    }
}

function tt(e, t, n) {
    let r = h(e),
        i = l(() => I(r));
    i?.type !== `entity` || i.reference !== t || (b(() => I.set(r, {
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
    extraParams: s,
    locale: c,
    regenParams: l,
    debugParams: u
}) {
    let d = typeof s?.entity_name == `string` ? s.entity_name : void 0,
        f = typeof s?.entity_category == `string` ? s.entity_category : void 0,
        p = o.getMaybeMessage(C(t), n),
        m = p?.metadata?.resolved_model_slug || p?.metadata?.model_slug;
    return {
        conversation_id: e,
        message_id: n,
        ...typeof m == `string` && m.length > 0 ? {
            main_conversation_model_slug: m
        } : {},
        supported_encodings: [O.V1],
        is_client_thread: e === t,
        ...l ?? {},
        ...i === `ask_sidebar` ? {
            category: `ask_sidebar`,
            locale: c,
            ask_sidebar_params: {
                query: r,
                additional_context: s?.context,
                conversation_context_citation: s?.conversation_context_citation
            }
        } : i === `entity_sidebar_follow_up` ? {
            category: `entity_sidebar_follow_up`,
            locale: c,
            entity_sidebar_follow_up_params: {
                query: r,
                additional_context: s?.context,
                entity_name: d,
                entity_category: f
            }
        } : {
            category: `generic_entity`,
            locale: c,
            generic_entity_params: {
                name: r,
                category: i,
                ...a == null ? {} : {
                    pinned_image: a
                },
                extra_params: i === `ledger_detail_sidebar` && s?.detail_type === `transaction` ? {
                    ...s,
                    transaction_category_editing_enabled: !0
                } : s,
                multi_message_mode: !0
            }
        },
        ...u ? {
            debug_params: u
        } : {}
    }
}

function rt(e) {
    return e.author.role === ee.Assistant && v(e) && (!e.channel || e.channel === `final`)
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
    at = se(), Se(), f(), T(), de(), x(), Ce(), he(), m(), E(), g(), p(), me(), a(), D(), d(), X = n(A()), k(), Ie(), Ee(), ze(), j(), M(), ue(), oe(), Ge(), Z = {}, Q = new Map, $ = new Map, ot = () => void 0
}));
export {
    Ke as a, ze as c, Ye as i, Re as l, Qe as n, Ge as o, et as r, Be as s, st as t
};
//# sourceMappingURL=24fd10e2-diq8r3c2qwcguopl.js.map