import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $J as r,
    $at as i,
    Bat as a,
    Dit as o,
    Drt as s,
    Ert as c,
    F5 as l,
    GJ as u,
    Int as d,
    Ort as f,
    Pnt as p,
    Pot as m,
    QJ as h,
    QZ as g,
    Qat as _,
    Ttt as v,
    Zot as y,
    aU as b,
    eY as x,
    frt as S,
    gF as C,
    k5 as w,
    k8 as T,
    ktt as E,
    lQ as D,
    oU as O,
    prt as ee,
    rU as k,
    srt as A,
    utt as j,
    vF as M
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    G as te,
    Rn as N,
    Vn as ne,
    s as re,
    wn as ie,
    zn as ae
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    BZt as P,
    HZt as oe,
    Jpt as F,
    SAt as se,
    SIn as I,
    UZt as L,
    YZt as R,
    Zpt as z,
    _At as ce,
    bAt as le,
    hIn as ue,
    vAt as de,
    vwt as B,
    xAt as fe,
    yAt as pe,
    ywt as me
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    $x as he,
    Px as ge,
    fS as _e,
    iS as ve,
    lS as V,
    sS as ye
} from "./c2675c8c-p3x4d0bnf7e77o1n.js";
import {
    n as be,
    r as xe
} from "./09231af0-j2cxxbo2zk32ftcd.js";
import {
    a as Se,
    i as Ce,
    r as we,
    t as Te
} from "./2f772deb-0zerbzr36ln1j8s6.js";

function Ee(e) {
    return e.flatMap(e => e.metadata?.content_references ?? [])
}

function De(e) {
    return e.some(e => e.type === `entity_metadata` && e.entity_data != null && e.metadata?.is_loading !== !0)
}

function Oe(e) {
    return e.some(e => e.type === `image_group` && e.images.some(e => e.image_result != null))
}

function ke(e) {
    if (e.end_turn !== !1) return !1;
    let t = e.metadata?.content_references ?? [];
    return t.some(e => e.type === `entity_metadata`) && t.some(e => e.type === `image_group` || e.matched_text.startsWith(`image_group`))
}

function Ae(e) {
    let t = e.content;
    return t?.content_type !== j.Text && t?.content_type !== j.MultimodalText ? !1 : t.parts.some(e => typeof e == `string` && e.trim().length > 0)
}

function je(e) {
    let [t] = e, n = (t != null && ke(t) ? e.slice(1) : e).filter(Ae);
    return n.length === 0 ? `missing` : n.some(e => e.status !== `finished_successfully`) ? `partial` : `complete`
}

function Me({
    messages: e,
    category: t
}) {
    let n = Ee(e),
        r = e.length > 0 && e.every(e => e.status === `finished_successfully`),
        i = z(t) ? De(n) ? `complete` : `missing` : `not_applicable`,
        a = Oe(n) || r ? `complete` : `missing`,
        o = je(e);
    return {
        responseStatus: r && i !== `missing` && a !== `missing` && o === `complete` ? `complete` : `incomplete`,
        entityMetadataStatus: i,
        imageGroupStatus: a,
        modelResponseStatus: o
    }
}

function Ne({
    category: e,
    requestSource: t,
    completeness: n
}) {
    s.count(f.DEFAULT, Pe, {
        category: e,
        request_source: t,
        response_status: n.responseStatus,
        entity_metadata_status: n.entityMetadataStatus,
        image_group_status: n.imageGroupStatus,
        model_response_status: n.modelResponseStatus
    })
}
var Pe, Fe = e((() => {
    E(), F(), c(), Pe = `sidebar.response_completeness`
}));

function Ie(e) {
    if (!(!e || Object.keys(e).length === 0)) return e
}

function H(e) {
    if (!e || Object.keys(e).length === 0) return `{}`;
    let t = {};
    return Object.keys(e).sort().forEach(n => {
        t[n] = e[n]
    }), JSON.stringify(t)
}

function Le({
    initialQuery: e,
    initialCategory: t,
    initialExtraParams: n
}) {
    let [r, i] = (0, U.useState)(null), a = r?.query ?? e, o = r?.category ?? t, s = r?.hasExtraParamsOverride ?? !1 ? r?.extraParams : n, c = (0, U.useMemo)(() => H(n), [n]);
    return (0, U.useEffect)(() => {
        i(null)
    }, [t, c, e]), {
        query: a,
        category: o,
        extraParams: s,
        handleEntityContextChange: (0, U.useCallback)(n => {
            let r = Ie(n.extraParams),
                a = H(r);
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
var U, Re = e((() => {
    U = n(ne())
}));

function ze(e, t, n, r) {
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

function Be(e, t) {
    if (!(t.category !== `ledger_detail_sidebar` || t.extraParams?.detail_type !== `credit_health`))
        for (let t of [...e].reverse()) {
            let e = t.metadata?.model_dil_v2,
                n = t.metadata?.model_dil?.dil ?? t.metadata?.chatgpt_sdk?.dil;
            if (e != null) {
                let t = Ve.safeParse(e).data;
                if (t == null) return;
                let n = G.safeParse(t.appData?.opGenui).data,
                    r = G.safeParse(n?.componentResults).data,
                    i = Object.entries(r ?? {});
                if (i.length !== 1) return;
                for (let [e, t] of i) {
                    let n = He.safeParse(t).data,
                        r = n?.componentName;
                    if (r == null) try {
                        let t = JSON.parse(e);
                        Array.isArray(t) && t[0] === `LedgerCreditScoreDetail` && (r = t[0])
                    } catch {
                        continue
                    }
                    if (r === `LedgerCreditScoreDetail`) return n?.status === `resolved` ? W(n.state) : void 0
                }
                return
            }
            if (n != null) return n.type === `Basic` ? W(P(n)) : void 0;
            for (let e of t.metadata?.content_references ?? [])
                if (e.type === `dil`) return L(e.dil) ? e.dil.component === `LedgerCreditScoreDetail` ? W(P(e.dil)) : void 0 : e.dil.type === `Basic` ? W(P(e.dil)) : void 0
        }
}

function W(e) {
    let t = Ue.safeParse(e).data;
    if (t != null) return {
        text: t.rating_label,
        isSensitive: !0,
        tone: t.rating_color === `green-400` ? `success` : t.rating_color === `yellow-400` ? `caution` : t.rating_color === `red-500` ? `danger` : `secondary`
    }
}
var G, Ve, He, Ue, We = e((() => {
        ge(), oe(), G = ye(V(), _e()), Ve = ve({
            appData: G.optional()
        }), He = ve({
            componentName: V().optional(),
            status: V(),
            state: G.optional()
        }), Ue = ve({
            status: he(`ready`),
            rating_label: V().trim().min(1),
            rating_color: V().nullable().optional()
        })
    })),
    Ge = t({
        createLedgerTransactionDetailRequest: () => Qe,
        getEntityInfoCacheKey: () => K,
        getEntityInfoImageThumbnailUrl: () => qe,
        prefetchEntityInfo: () => Ze,
        useEntityInfo: () => et,
        useEntityInfoSaveData: () => Je
    });

function K({
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
    let l = a ?? H(i),
        u = n.replaceAll(`_`, `-`).toLowerCase(),
        d = r == null ? `` : `-pinned-image-${JSON.stringify([r.url,r.content_url,r.thumbnail_url])}`;
    return `entity-${e}-${t}-${u!==`en`&&!u.startsWith(`en-`)&&z(e)&&(A(`1747093706`)||S(`4107938382`).get(`translate_labrador_sidebar_entity_attributes`,!1))?`${u}-`:``}${l}${d}-${o}-${s}-${c??0}`
}

function q(e, t) {
    Z[e] = t, $.get(e)?.forEach(e => e())
}

function Ke(e, t) {
    let n = $.get(e) ?? new Set;
    return n.add(t), $.set(e, n), () => {
        n.delete(t), n.size === 0 && $.delete(e)
    }
}

function qe(e) {
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

function Je(e) {
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
        c = ae(),
        l;
    t[0] === n ? l = t[1] : (l = h(n) ?? n, t[0] = n, t[1] = l);
    let u = l,
        d;
    t[2] === o ? d = t[3] : (d = H(o), t[2] = o, t[3] = d);
    let f = d,
        p;
    t[4] !== a || t[5] !== u || t[6] !== f || t[7] !== c.locale || t[8] !== r || t[9] !== i || t[10] !== s ? (p = K({
        category: a,
        query: i,
        locale: c.locale,
        extraParamsSignature: f,
        conversationId: u,
        messageId: r,
        refreshNonce: s
    }), t[4] = a, t[5] = u, t[6] = f, t[7] = c.locale, t[8] = r, t[9] = i, t[10] = s, t[11] = p) : p = t[11];
    let m = p,
        g;
    t[12] === m ? g = t[13] : (g = e => Ke(m, e), t[12] = m, t[13] = g);
    let _ = g,
        v;
    t[14] === m ? v = t[15] : (v = () => Z[m] ?? null, t[14] = m, t[15] = v);
    let y = (0, X.useSyncExternalStore)(_, v, Ye),
        b = y != null,
        x;
    t[16] !== y || t[17] !== a || t[18] !== o ? (x = y == null ? void 0 : Be(y.messages, {
        category: a,
        extraParams: o
    }), t[16] = y, t[17] = a, t[18] = o, t[19] = x) : x = t[19];
    let S;
    t[20] !== y?.messages || t[21] !== a || t[22] !== o || t[23] !== i ? (S = Xe({
        category: a,
        query: i,
        extraParams: o,
        messages: y?.messages ?? []
    }), t[20] = y?.messages, t[21] = a, t[22] = o, t[23] = i, t[24] = S) : S = t[24];
    let C;
    t[25] === y ? C = t[26] : (C = y == null ? void 0 : qe(y.messages), t[25] = y, t[26] = C);
    let w;
    return t[27] !== b || t[28] !== x || t[29] !== S || t[30] !== C ? (w = {
        isReady: b,
        creditScoreTitleSuffix: x,
        sharingExtraParams: S,
        imageThumbnailUrl: C
    }, t[27] = b, t[28] = x, t[29] = S, t[30] = C, t[31] = w) : w = t[31], w
}

function Ye() {
    return null
}

function Xe({
    category: e,
    query: t,
    extraParams: n,
    messages: r
}) {
    if (!z(e)) return n;
    let i = n?.entity_lookup_id ?? (O(n?.business_id) ? n.business_id : void 0),
        a = new Map;
    for (let e of r)
        for (let r of e.metadata?.content_references ?? []) {
            if (r.type !== `entity_metadata` || !z(r.entity_type) || r.metadata?.is_loading === !0 || r.layout != null) continue;
            let e = r.entity_data;
            if (e == null || !(`name` in e)) continue;
            let o = k(e);
            o?.entityId != null && (i == null ? typeof n?.business_id == `string` && !O(e.id) ? e.id === n.business_id && (n.provider == null || e.provider === n.provider) : t.trim().length > 0 && e.name.trim().toLowerCase() === t.trim().toLowerCase() : o.entityId === i) && a.set(o.entityId, o.entityKey)
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

function Ze({
    clientThreadId: e,
    messageId: t,
    query: n,
    category: r,
    pinnedImage: i,
    extraParams: a,
    locale: o
}) {
    let s = h(e) ?? e,
        c = K({
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
        await we({
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
                    let t = $e(n);
                    u = it(u, t), !l && e.conversation_id && (l = e.conversation_id)
                }
            }
        });
        let d = Me({
            messages: u,
            category: r
        });
        Ne({
            category: r,
            requestSource: `prefetch`,
            completeness: d
        }), d.responseStatus === `complete` && q(c, {
            messages: u,
            sidebarConversationId: l
        })
    })();
    return Q.set(c, u), u.finally(() => {
        Q.delete(c)
    }), u
}

function Qe(e) {
    let t = e.extraParams?.transaction_id;
    if (e.category !== `ledger_detail_sidebar` || e.extraParams?.detail_type !== `transaction` || typeof t != `string` || t.trim().length === 0) return;
    let n = e.debugParams ?? void 0;
    if (n?.persist_conversation_to_user === !0 || n?.is_cacheable === !0 || n?.params_overrides?.force_regenerate === !0) return;
    let r = nt({
            ...e,
            debugParams: n
        }),
        i = de(e.locale, e.extraParams.sensitive_values_hidden),
        o = B();
    return {
        key: te([i, r, e.refreshNonce ?? 0]),
        transactionId: t,
        load: async (e, n) => {
            if (await o.wait(), e.throwIfAborted(), B() !== o) throw new DOMException(`Account changed`, `AbortError`);
            let i = {
                messages: [],
                sidebarConversationId: null,
                isStreaming: !0,
                error: null
            };
            if (await we({
                    requestBody: r,
                    signal: e,
                    onEvent: e => {
                        e.type !== `message` || !rt(e.data) || (i = {
                            ...i,
                            messages: it(i.messages, $e(e.data)),
                            sidebarConversationId: e.conversation_id ?? i.sidebarConversationId
                        }, n(i))
                    }
                }), !e.aborted && !se(i.messages, t)) throw Error(a)
        }
    }
}

function J(e) {
    return !e || e.length === 0 ? null : e[e.length - 1]
}

function $e(e) {
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
    category: o,
    pinnedImage: s,
    extraParams: c,
    refreshNonce: l,
    reference: u
}) {
    "use no forget";
    let d = u ? `` : r,
        f = u ? `local_business` : o,
        m = u ? void 0 : c,
        g = y(),
        _ = g?.user?.id,
        v = g?.account?.id,
        b = ae(),
        x = u?.conversationId ?? h(e) ?? e,
        S = ot(),
        C = H(m),
        w = (0, X.useRef)(m),
        T = pe(),
        E = f === `ledger_detail_sidebar` && m?.detail_type === `transaction` && ce() > 0 && window.location.pathname.startsWith(`/finances`),
        D = (0, X.useRef)(null);
    (0, X.useEffect)(() => {
        w.current = m
    }, [m]);
    let O = (0, X.useMemo)(() => u ? JSON.stringify([`reference`, x, n, u.refId, u.sharedConversationId, b.locale, u.projectId, u.ownerUserId, s, l]) : K({
            category: f,
            query: d,
            locale: b.locale,
            pinnedImage: s,
            extraParamsSignature: C,
            conversationId: x,
            messageId: n,
            refreshNonce: l
        }), [f, d, b.locale, s, C, x, n, l, u]),
        ee = f === `ledger_detail_sidebar` && m?.detail_type === `transaction`,
        k = O + (0, X.useMemo)(() => ee ? JSON.stringify([_, v, O, B().version]) : ``, [O, ee, _, v]),
        A = E ? null : Z[k],
        [j, M] = (0, X.useState)(A?.messages ?? []),
        [te, N] = (0, X.useState)(A?.sidebarConversationId ?? null),
        [ne, re] = (0, X.useState)({}),
        [ie, P] = (0, X.useState)(null),
        [oe, F] = (0, X.useState)(() => Y(J(A?.messages ?? null))),
        [se, I] = (0, X.useState)(!1);
    (0, X.useEffect)(() => {
        P(null)
    }, [d, f]);
    let L = (0, X.useRef)(null),
        R = (0, X.useCallback)(async t => {
            D.current?.(), D.current = null, L.current && L.current.abort();
            let r = new AbortController;
            L.current = r;
            let o = () => L.current === r,
                c = () => o() && !r.signal.aborted,
                p = E ? Qe({
                    conversationId: x,
                    clientThreadId: e,
                    messageId: n,
                    query: d,
                    category: f,
                    extraParams: w.current,
                    locale: b.locale,
                    regenParams: t,
                    refreshNonce: l,
                    debugParams: void 0
                }) : void 0;
            if (p) {
                T.setContext(de(b.locale, w.current?.sensitive_values_hidden));
                let e = T.open(p, e => {
                    queueMicrotask(() => {
                        c() && (M(e.messages), N(e.sidebarConversationId), F(Y(J(e.messages))), P(e.error), I(e.isStreaming))
                    })
                }, t != null);
                D.current = e.release;
                return
            }
            M([]), q(k, null), F([]), I(!0);
            try {
                P(null);
                let i = {
                        messages: [],
                        sidebarConversationId: null
                    },
                    o = w.current;
                if (f === `ledger_detail_sidebar` && o?.detail_type === `transaction` && typeof o.transaction_id == `string`) {
                    let e = B();
                    if (await e.wait(), r.signal.throwIfAborted(), B() !== e) throw new DOMException(`Account changed`, `AbortError`)
                }
                if (await we({
                        requestBody: u ? {
                            ...Ce({
                                conversationId: x,
                                messageId: n,
                                category: `business`,
                                refId: u.refId,
                                sharedConversationId: u.sharedConversationId,
                                multiMessageMode: !0,
                                pinnedImage: s,
                                locale: b.locale
                            }),
                            ...t
                        } : nt({
                            conversationId: x,
                            clientThreadId: e,
                            messageId: n,
                            query: d,
                            category: f,
                            pinnedImage: s,
                            extraParams: o,
                            locale: b.locale,
                            regenParams: t,
                            debugParams: void 0
                        }),
                        signal: r.signal,
                        isAuthOptional: !u && void 0,
                        requestContext: u,
                        onEvent: t => {
                            if (!c()) return;
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
                                e.length > 0 && F(e)
                            }
                            if (n === `message` && r && rt(r)) {
                                let e = $e(r);
                                i.messages = it(i.messages, e), M(i.messages), !i.sidebarConversationId && t.conversation_id && (N(t.conversation_id), i.sidebarConversationId = t.conversation_id)
                            }
                            n === `__debug` && r && re(e => ({
                                ...e,
                                ...r
                            }))
                        }
                    }), c()) {
                    if (u && !i.resolvedEntity) throw Error(a);
                    let e = Me({
                        messages: i.messages,
                        category: i.resolvedEntity?.category ?? f
                    });
                    Ne({
                        category: i.resolvedEntity?.category ?? f,
                        requestSource: `foreground`,
                        completeness: e
                    }), e.responseStatus === `complete` && q(k, i), I(!1)
                }
            } catch (e) {
                if (r.signal.aborted || i(e) || !o()) return;
                r.abort(), q(k, null), P(e instanceof Error ? e : Error(String(e))), I(!1)
            } finally {
                o() && (L.current = null)
            }
        }, [k, x, e, t, n, d, f, s, _, v, b.locale, S, l, T, E, u]),
        z = (0, X.useCallback)(e => {
            let t = {
                    force_regenerate: !0
                },
                r = `default`;
            return e?.forceUseSearch !== void 0 && (t.force_use_search = e.forceUseSearch, r = e.forceUseSearch ? `enabled` : `disabled`), p.logEventWithStatsig(`Sidebar Message Regenerated`, `chatgpt_sidebar_message_regenerated`, {
                message_id: n,
                conversation_id: x,
                category: o,
                surface: `web`,
                search_force_status: r
            }), R(t)
        }, [R, n, x, o]);
    return (0, X.useEffect)(() => {
        let t, n = !1;
        if (E) return queueMicrotask(() => {
            n || R()
        }), () => {
            n = !0, L.current?.abort(), D.current?.(), D.current = null
        };
        let r = Z[k];
        if (r) {
            u && r.resolvedEntity && tt(e, u, r.resolvedEntity), M(r.messages), N(r.sidebarConversationId), F(Y(J(r.messages))), I(!1);
            return
        }
        let i = Q.get(k);
        if (i) {
            I(!0), i.finally(() => {
                if (n) return;
                let e = Z[k];
                if (e) {
                    M(e.messages), N(e.sidebarConversationId), F(Y(J(e.messages))), I(!1);
                    return
                }
                R()
            });
            return
        }
        return R(), () => {
            t &&= (clearTimeout(t), void 0), n = !0, L.current?.abort(), M([]), F([]), I(!1)
        }
    }, [k, x, e, t, n, d, f, C, _, v, b.locale, E, u]), {
        messages: j,
        latestMessage: J(j),
        sidebarConversationId: te,
        error: ie,
        searchModelQueries: oe,
        isStreaming: se,
        debugData: ne,
        regenerate: z,
        refreshFromCache: () => R({
            force_regenerate: !1
        })
    }
}

function tt(e, t, n) {
    let r = C(e),
        i = l(() => I(r));
    i?.type !== `entity` || i.reference !== t || (w(() => I.set(r, {
        ...i,
        query: n.name ?? ``,
        businessProfile: be(n),
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
    locale: c,
    regenParams: l,
    debugParams: d
}) {
    let f = typeof s?.entity_name == `string` ? s.entity_name : void 0,
        p = typeof s?.entity_category == `string` ? s.entity_category : void 0,
        h = u.getMaybeMessage(r(t), n),
        g = h?.metadata?.resolved_model_slug || h?.metadata?.model_slug;
    return {
        conversation_id: e,
        message_id: n,
        ...typeof g == `string` && g.length > 0 ? {
            main_conversation_model_slug: g
        } : {},
        supported_encodings: [m.V1],
        is_client_thread: e === t,
        ...l ?? {},
        ...a === `ask_sidebar` ? {
            category: `ask_sidebar`,
            locale: c,
            ask_sidebar_params: {
                query: i,
                additional_context: s?.context,
                conversation_context_citation: s?.conversation_context_citation
            }
        } : a === `entity_sidebar_follow_up` ? {
            category: `entity_sidebar_follow_up`,
            locale: c,
            entity_sidebar_follow_up_params: {
                query: i,
                additional_context: s?.context,
                entity_name: f,
                entity_category: p
            }
        } : {
            category: `generic_entity`,
            locale: c,
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
        ...d ? {
            debug_params: d
        } : {}
    }
}

function rt(e) {
    return e.author.role === v.Assistant && D(e) && (!e.channel || e.channel === `final`)
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
    at = ie(), xe(), E(), M(), ue(), T(), Se(), F(), b(), x(), o(), d(), R(), _(), g(), ee(), X = n(ne()), N(), Fe(), Te(), Re(), le(), fe(), me(), re(), We(), Z = {}, Q = new Map, $ = new Map, ot = () => void 0
}));
export {
    Ge as a, Re as c, Je as i, Le as l, Ze as n, We as o, et as r, ze as s, st as t
};
//# sourceMappingURL=24fd10e2-culkyncb4w2uxl0v.js.map