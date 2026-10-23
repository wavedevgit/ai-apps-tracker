import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $J as r,
    A8 as i,
    Crt as a,
    GJ as o,
    Irt as s,
    Knt as c,
    Lit as l,
    Lrt as u,
    QJ as d,
    QZ as f,
    Rrt as p,
    Srt as m,
    Wnt as h,
    Wot as g,
    Xat as ee,
    Zet as _,
    _rt as v,
    aU as y,
    cot as b,
    eY as x,
    ftt as S,
    gF as C,
    gtt as w,
    lQ as T,
    lot as te,
    oU as E,
    p5 as D,
    rU as O,
    sst as ne,
    vF as re,
    y5 as k
} from "./4813494d-mdvd4786a87166cc.js";
import {
    G as ie,
    Rn as A,
    Vn as ae,
    s as oe,
    wn as se,
    zn as ce
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Zt as j,
    KZt as le,
    Kpt as M,
    WZt as N,
    Ypt as P,
    _At as F,
    _wt as I,
    eLn as ue,
    gAt as de,
    gwt as L,
    hAt as fe,
    mAt as pe,
    qIn as me,
    qZt as he,
    vAt as ge,
    yAt as _e
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Hx as ve,
    _S as R,
    bS as ye,
    fS as z,
    hS as be,
    sS as xe
} from "./c2675c8c-oz03twoan08d72ud.js";
import {
    i as Se,
    n as Ce
} from "./09231af0-l43wiceu4nnwg27q.js";
import {
    a as we,
    i as Te,
    r as B,
    t as Ee
} from "./2f772deb-m9fsmajg6xos68k3.js";

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
    return t?.content_type !== _.Text && t?.content_type !== _.MultimodalText ? !1 : t.parts.some(e => typeof e == `string` && e.trim().length > 0)
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
    u.count(p.DEFAULT, Fe, {
        category: e,
        request_source: t,
        response_status: n.responseStatus,
        entity_metadata_status: n.entityMetadataStatus,
        image_group_status: n.imageGroupStatus,
        model_response_status: n.modelResponseStatus
    })
}
var Fe, Ie = e((() => {
    w(), M(), s(), Fe = `sidebar.response_completeness`
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
    H = n(ae())
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
            if (n != null) return n.type === `Basic` ? U(N(n)) : void 0;
            for (let e of t.metadata?.content_references ?? [])
                if (e.type === `dil`) return he(e.dil) ? e.dil.component === `LedgerCreditScoreDetail` ? U(N(e.dil)) : void 0 : e.dil.type === `Basic` ? U(N(e.dil)) : void 0
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
        ve(), le(), W = be(R(), ye()), He = z({
            appData: W.optional()
        }), Ue = z({
            componentName: R().optional(),
            status: R(),
            state: W.optional()
        }), We = z({
            status: xe(`ready`),
            rating_label: R().trim().min(1),
            rating_color: R().nullable().optional()
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
    return `entity-${e}-${t}-${u!==`en`&&!u.startsWith(`en-`)&&P(e)&&(v(`1747093706`)||m(`4107938382`).get(`translate_labrador_sidebar_entity_attributes`,!1))?`${u}-`:``}${l}${d}-${o}-${s}-${c??0}`
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
    t[0] === n ? l = t[1] : (l = d(n) ?? n, t[0] = n, t[1] = l);
    let u = l,
        f;
    t[2] === o ? f = t[3] : (f = V(o), t[2] = o, t[3] = f);
    let p = f,
        m;
    t[4] !== a || t[5] !== u || t[6] !== p || t[7] !== c.locale || t[8] !== r || t[9] !== i || t[10] !== s ? (m = G({
        category: a,
        query: i,
        locale: c.locale,
        extraParamsSignature: p,
        conversationId: u,
        messageId: r,
        refreshNonce: s
    }), t[4] = a, t[5] = u, t[6] = p, t[7] = c.locale, t[8] = r, t[9] = i, t[10] = s, t[11] = m) : m = t[11];
    let h = m,
        g;
    t[12] === h ? g = t[13] : (g = e => qe(h, e), t[12] = h, t[13] = g);
    let ee = g,
        _;
    t[14] === h ? _ = t[15] : (_ = () => Z[h] ?? null, t[14] = h, t[15] = _);
    let v = (0, X.useSyncExternalStore)(ee, _, Xe),
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
    if (!P(e)) return n;
    let i = n?.entity_lookup_id ?? (E(n?.business_id) ? n.business_id : void 0),
        a = new Map;
    for (let e of r)
        for (let r of e.metadata?.content_references ?? []) {
            if (r.type !== `entity_metadata` || !P(r.entity_type) || r.metadata?.is_loading === !0 || r.layout != null) continue;
            let e = r.entity_data;
            if (e == null || !(`name` in e)) continue;
            let o = O(e);
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
    let s = d(e) ?? e,
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
        await B({
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
        a = L();
    return {
        key: ie([i, r, e.refreshNonce ?? 0]),
        transactionId: t,
        load: async (e, n) => {
            if (await a.wait(), e.throwIfAborted(), L() !== a) throw new DOMException(`Account changed`, `AbortError`);
            let i = {
                messages: [],
                sidebarConversationId: null,
                isStreaming: !0,
                error: null
            };
            if (await B({
                    requestBody: r,
                    signal: e,
                    onEvent: e => {
                        e.type !== `message` || !rt(e.data) || (i = {
                            ...i,
                            messages: it(i.messages, J(e.data)),
                            sidebarConversationId: e.conversation_id ?? i.sidebarConversationId
                        }, n(i))
                    }
                }), !e.aborted && !_e(i.messages, t)) throw Error(ee)
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
        u = c ? `local_business` : i,
        f = c ? void 0 : o,
        p = ne(),
        m = p?.user?.id,
        g = p?.account?.id,
        _ = ce(),
        v = c?.conversationId ?? d(e) ?? e,
        y = ot(),
        b = V(f),
        x = (0, X.useRef)(f),
        S = de(),
        C = u === `ledger_detail_sidebar` && f?.detail_type === `transaction` && pe() > 0 && window.location.pathname.startsWith(`/finances`),
        w = (0, X.useRef)(null);
    (0, X.useEffect)(() => {
        x.current = f
    }, [f]);
    let T = (0, X.useMemo)(() => c ? JSON.stringify([`reference`, v, n, c.refId, c.sharedConversationId, _.locale, c.projectId, c.ownerUserId, a, s]) : G({
            category: u,
            query: l,
            locale: _.locale,
            pinnedImage: a,
            extraParamsSignature: b,
            conversationId: v,
            messageId: n,
            refreshNonce: s
        }), [u, l, _.locale, a, b, v, n, s, c]),
        E = u === `ledger_detail_sidebar` && f?.detail_type === `transaction`,
        D = T + (0, X.useMemo)(() => E ? JSON.stringify([m, g, T, L().version]) : ``, [T, E, m, g]),
        O = C ? null : Z[D],
        [re, k] = (0, X.useState)(O?.messages ?? []),
        [ie, A] = (0, X.useState)(O?.sidebarConversationId ?? null),
        [ae, oe] = (0, X.useState)({}),
        [se, j] = (0, X.useState)(null),
        [le, M] = (0, X.useState)(() => Y(q(O?.messages ?? null))),
        [N, P] = (0, X.useState)(!1);
    (0, X.useEffect)(() => {
        j(null)
    }, [l, u]);
    let F = (0, X.useRef)(null),
        I = (0, X.useCallback)(async t => {
            w.current?.(), w.current = null, F.current && F.current.abort();
            let r = new AbortController;
            F.current = r;
            let i = () => F.current === r,
                o = () => i() && !r.signal.aborted,
                d = C ? $e({
                    conversationId: v,
                    clientThreadId: e,
                    messageId: n,
                    query: l,
                    category: u,
                    extraParams: x.current,
                    locale: _.locale,
                    regenParams: t,
                    refreshNonce: s,
                    debugParams: void 0
                }) : void 0;
            if (d) {
                S.setContext(fe(_.locale, x.current?.sensitive_values_hidden));
                let e = S.open(d, e => {
                    queueMicrotask(() => {
                        o() && (k(e.messages), A(e.sidebarConversationId), M(Y(q(e.messages))), j(e.error), P(e.isStreaming))
                    })
                }, t != null);
                w.current = e.release;
                return
            }
            k([]), K(D, null), M([]), P(!0);
            try {
                j(null);
                let i = {
                        messages: [],
                        sidebarConversationId: null
                    },
                    s = x.current;
                if (u === `ledger_detail_sidebar` && s?.detail_type === `transaction` && typeof s.transaction_id == `string`) {
                    let e = L();
                    if (await e.wait(), r.signal.throwIfAborted(), L() !== e) throw new DOMException(`Account changed`, `AbortError`)
                }
                if (await B({
                        requestBody: c ? {
                            ...Te({
                                conversationId: v,
                                messageId: n,
                                category: `business`,
                                refId: c.refId,
                                sharedConversationId: c.sharedConversationId,
                                multiMessageMode: !0,
                                pinnedImage: a,
                                locale: _.locale
                            }),
                            ...t
                        } : nt({
                            conversationId: v,
                            clientThreadId: e,
                            messageId: n,
                            query: l,
                            category: u,
                            pinnedImage: a,
                            extraParams: s,
                            locale: _.locale,
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
                                e.length > 0 && M(e)
                            }
                            if (n === `message` && r && rt(r)) {
                                let e = J(r);
                                i.messages = it(i.messages, e), k(i.messages), !i.sidebarConversationId && t.conversation_id && (A(t.conversation_id), i.sidebarConversationId = t.conversation_id)
                            }
                            n === `__debug` && r && oe(e => ({
                                ...e,
                                ...r
                            }))
                        }
                    }), o()) {
                    if (c && !i.resolvedEntity) throw Error(ee);
                    let e = Ne({
                        messages: i.messages,
                        category: i.resolvedEntity?.category ?? u
                    });
                    Pe({
                        category: i.resolvedEntity?.category ?? u,
                        requestSource: `foreground`,
                        completeness: e
                    }), e.responseStatus === `complete` && K(D, i), P(!1)
                }
            } catch (e) {
                if (r.signal.aborted || te(e) || !i()) return;
                r.abort(), K(D, null), j(e instanceof Error ? e : Error(String(e))), P(!1)
            } finally {
                i() && (F.current = null)
            }
        }, [D, v, e, t, n, l, u, a, m, g, _.locale, y, s, S, C, c]),
        ue = (0, X.useCallback)(e => {
            let t = {
                    force_regenerate: !0
                },
                r = `default`;
            return e?.forceUseSearch !== void 0 && (t.force_use_search = e.forceUseSearch, r = e.forceUseSearch ? `enabled` : `disabled`), h.logEventWithStatsig(`Sidebar Message Regenerated`, `chatgpt_sidebar_message_regenerated`, {
                message_id: n,
                conversation_id: v,
                category: i,
                surface: `web`,
                search_force_status: r
            }), I(t)
        }, [I, n, v, i]);
    return (0, X.useEffect)(() => {
        let t, n = !1;
        if (C) return queueMicrotask(() => {
            n || I()
        }), () => {
            n = !0, F.current?.abort(), w.current?.(), w.current = null
        };
        let r = Z[D];
        if (r) {
            c && r.resolvedEntity && tt(e, c, r.resolvedEntity), k(r.messages), A(r.sidebarConversationId), M(Y(q(r.messages))), P(!1);
            return
        }
        let i = Q.get(D);
        if (i) {
            P(!0), i.finally(() => {
                if (n) return;
                let e = Z[D];
                if (e) {
                    k(e.messages), A(e.sidebarConversationId), M(Y(q(e.messages))), P(!1);
                    return
                }
                I()
            });
            return
        }
        return I(), () => {
            t &&= (clearTimeout(t), void 0), n = !0, F.current?.abort(), k([]), M([]), P(!1)
        }
    }, [D, v, e, t, n, l, u, b, m, g, _.locale, C, c]), {
        messages: re,
        latestMessage: q(re),
        sidebarConversationId: ie,
        error: se,
        searchModelQueries: le,
        isStreaming: N,
        debugData: ae,
        regenerate: ue,
        refreshFromCache: () => I({
            force_regenerate: !1
        })
    }
}

function tt(e, t, n) {
    let r = C(e),
        i = k(() => ue(r));
    i?.type !== `entity` || i.reference !== t || (D(() => ue.set(r, {
        ...i,
        query: n.name ?? ``,
        businessProfile: Ce(n),
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
    pinnedImage: s,
    extraParams: c,
    locale: l,
    regenParams: u,
    debugParams: d
}) {
    let f = typeof c?.entity_name == `string` ? c.entity_name : void 0,
        p = typeof c?.entity_category == `string` ? c.entity_category : void 0,
        m = o.getMaybeMessage(r(t), n),
        h = m?.metadata?.resolved_model_slug || m?.metadata?.model_slug;
    return {
        conversation_id: e,
        message_id: n,
        ...typeof h == `string` && h.length > 0 ? {
            main_conversation_model_slug: h
        } : {},
        supported_encodings: [g.V1],
        is_client_thread: e === t,
        ...u ?? {},
        ...a === `ask_sidebar` ? {
            category: `ask_sidebar`,
            locale: l,
            ask_sidebar_params: {
                query: i,
                additional_context: c?.context,
                conversation_context_citation: c?.conversation_context_citation
            }
        } : a === `entity_sidebar_follow_up` ? {
            category: `entity_sidebar_follow_up`,
            locale: l,
            entity_sidebar_follow_up_params: {
                query: i,
                additional_context: c?.context,
                entity_name: f,
                entity_category: p
            }
        } : {
            category: `generic_entity`,
            locale: l,
            generic_entity_params: {
                name: i,
                category: a,
                ...s == null ? {} : {
                    pinned_image: s
                },
                extra_params: a === `ledger_detail_sidebar` && c?.detail_type === `transaction` ? {
                    ...c,
                    transaction_category_editing_enabled: !0
                } : c,
                multi_message_mode: !0
            }
        },
        ...d ? {
            debug_params: d
        } : {}
    }
}

function rt(e) {
    return e.author.role === S.Assistant && T(e) && (!e.channel || e.channel === `final`)
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
    at = se(), Se(), w(), re(), me(), i(), we(), M(), y(), x(), l(), c(), j(), b(), f(), a(), X = n(ae()), A(), Ie(), Ee(), ze(), F(), ge(), I(), oe(), Ge(), Z = {}, Q = new Map, $ = new Map, ot = () => void 0
}));
export {
    Ke as a, ze as c, Ye as i, Re as l, Qe as n, Ge as o, et as r, Be as s, st as t
};
//# sourceMappingURL=24fd10e2-ioos7y5biptszegz.js.map