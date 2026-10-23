const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/24fd10e2-ioos7y5biptszegz.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-mdvd4786a87166cc.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-bcbq46iub1p0ca1t.js", "assets/30901919-s8bko9nrkqwv6i4f.js", "assets/c470f5ab-jwd0o7jx9i9say9k.js", "assets/0e5afe53-hxm3yzzjqriayom4.js", "assets/conversation-small-ep6mlz5m.css", "assets/c2675c8c-oz03twoan08d72ud.js", "assets/82782bc9-b4xbouzwkkyrfqq2.js", "assets/8b34dbc2-lmwubajnld74ksfm.js", "assets/global-modals-dxg9ukpk.css", "assets/09231af0-l43wiceu4nnwg27q.js", "assets/2f772deb-m9fsmajg6xos68k3.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Aq as n,
    Iv as r,
    K5 as i,
    Knt as a,
    LU as o,
    Mw as s,
    N1 as c,
    Nat as l,
    QJ as u,
    QZ as d,
    RZ as f,
    Rv as p,
    Vq as m,
    Wnt as ee,
    ZW as h,
    _W as te,
    _c as g,
    bF as _,
    eY as v,
    jat as y,
    jw as b,
    pc as x,
    q1 as S,
    q5 as C,
    qW as w,
    v1 as T,
    vF as E,
    vG as D,
    vW as O,
    y1 as k,
    zU as A
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as ne,
    G as j,
    Ln as M,
    N,
    Nn as P,
    Nt as F,
    O as I,
    Q as L,
    Rn as R,
    Vn as z,
    cn as re,
    jt as ie,
    l as ae,
    ln as oe,
    s as se,
    wn as B,
    zn as ce
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    A1 as le,
    CW as ue,
    DAt as de,
    Dkt as fe,
    EW as pe,
    Fbt as me,
    Fkt as he,
    Gkt as ge,
    Hkt as _e,
    LW as ve,
    Lkt as ye,
    Nkt as be,
    Okt as xe,
    Pbt as Se,
    RTn as Ce,
    SAt as we,
    SW as Te,
    Skt as Ee,
    TW as De,
    Ukt as V,
    _At as Oe,
    _W as ke,
    e_n as Ae,
    fAt as je,
    gAt as Me,
    hAt as Ne,
    iwt as Pe,
    jW as Fe,
    k1 as Ie,
    kwt as H,
    mAt as Le,
    mX as Re,
    owt as U,
    pAt as ze,
    pW as W,
    pX as Be,
    t_n as G,
    wW as K,
    xW as q,
    zTn as Ve
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Bv as He,
    CC as Ue,
    SC as We,
    Vv as Ge
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    Mm as Ke,
    Nm as qe,
    as as Je,
    es as Ye,
    is as Xe,
    ns as Ze,
    os as Qe,
    ts as $e
} from "./8b34dbc2-lmwubajnld74ksfm.js";
import {
    n as et,
    t as tt
} from "./4f866508-nx1lmkigi4ro0s38.js";
import {
    i as nt,
    n as rt
} from "./04f387fb-m1u5mtit7h22gcqu.js";
import {
    c as it,
    r as at
} from "./fcf5f4da-m2640lkqt2mr4cfw.js";
import {
    i as ot,
    n as st
} from "./a81eda00-m33icidx9uw2ccp4.js";
import {
    a as ct,
    i as lt,
    o as ut,
    s as dt,
    t as ft
} from "./4cf35c7a-fuufw34ubkxvq703.js";
import {
    n as pt,
    r as mt
} from "./a84119fb-onl2fz9bhv93dakf.js";
import {
    n as ht,
    t as gt
} from "./22f0e71d-e8d6gn6n6t37ea1i.js";
import {
    n as _t,
    t as vt
} from "./c253861d-mz5bo4a4pg33jloh.js";

function yt(e) {
    let t = new URLSearchParams(e).getAll(`credit_alert`);
    if (t.length === 0) return;
    let n = t[0];
    return t.length === 1 && n && Ct.test(n) ? n : null
}

function bt() {
    try {
        let e = sessionStorage.getItem(St);
        return e && Ct.test(e) ? e : null
    } catch {
        return null
    }
}

function xt(e) {
    return yt(e) !== void 0 || bt() != null
}
var St, Ct, wt = e((() => {
    St = `finances.credit-alert.login`, Ct = /^[A-Za-z0-9_-]{86}$/
}));

function Tt(e) {
    return e.span === 1 || e.span === 2 ? e.span : e.dashboard_placement === `half` ? 1 : 2
}

function Et(e, t) {
    return {
        widgetConfig: e,
        span: t
    }
}

function Dt(e) {
    let t = [],
        n = [...e];
    for (; n.length > 0;) {
        let e = n.shift();
        if (e == null) break;
        if (Tt(e) === 1) {
            let r = n.findIndex(e => Tt(e) === 1);
            if (r === -1) {
                t.push({
                    items: [Et(e, 2)]
                });
                continue
            }
            let [i] = n.splice(r, 1);
            t.push({
                items: [Et(e, 1), Et(i, 1)]
            });
            continue
        }
        t.push({
            items: [Et(e, 2)]
        })
    }
    return t
}
var Ot = e((() => {}));

function kt(e) {
    if (!Array.isArray(e.transactions)) return [];
    let t = e.sensitive_values_hidden !== !1;
    return e.transactions.slice(0, 10).flatMap(e => {
        if (typeof e != `object` || !e || Array.isArray(e)) return [];
        let n = e;
        return n.detail_sidebar_enabled !== !0 || typeof n.transaction_id != `string` || !n.transaction_id.trim() || typeof n.display_name != `string` || !n.display_name.trim() ? [] : [ot({
            type: `entity`,
            category: `ledger_detail_sidebar`,
            messageId: `mattress-ledger-widget`,
            contentReferenceStartIndex: 0,
            query: `${n.display_name} transaction`,
            extraParams: {
                detail_type: `transaction`,
                displayTitle: n.display_name,
                alwaysShowFollowUpButton: !0,
                disableFooterActions: !0,
                transaction_id: n.transaction_id,
                logo_url: n.logo_url ?? ``,
                category_icon: n.category_icon,
                merchant_name: n.merchant_name,
                transaction_date: n.date,
                date_label: n.date_label,
                amount_label: t ? n.masked_amount_label : n.amount_label,
                amount_value: t ? null : n.amount_value,
                currency_code: n.currency_code,
                account_id: n.account_id ?? ``,
                account_name: n.account_detail,
                primary_category: n.category_label,
                primary_category_key: n.primary_category_key,
                primary_category_id: n.primary_category_id,
                category_confidence_level: n.category_confidence_level ?? ``,
                category_confidence_label: n.category_confidence_label ?? ``,
                pending: n.pending,
                month_start: n.month_start,
                sensitive_values_hidden: t
            }
        }, t)]
    })
}
async function At({
    store: e,
    state: t,
    clientThreadId: n,
    locale: r,
    isCurrent: i
}) {
    let a = e.getGeneration(),
        {
            createLedgerTransactionDetailRequest: o
        } = await re(async () => {
            let {
                createLedgerTransactionDetailRequest: e
            } = await import(`./24fd10e2-ioos7y5biptszegz.js`).then(e => (e.t(), e.a));
            return {
                createLedgerTransactionDetailRequest: e
            }
        }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));
    if (!i() || e.getGeneration() !== a) return;
    let s = kt(t).flatMap(e => {
        let t = o({
            clientThreadId: n,
            conversationId: u(n) ?? n,
            messageId: e.messageId,
            category: `ledger_detail_sidebar`,
            query: e.query,
            extraParams: e.extraParams,
            locale: r
        });
        return t ? [t] : []
    });
    e.enqueue(s)
}
var jt = e((() => {
    st(), v(), oe()
}));

function Mt({
    cardId: e,
    conversation: t,
    navigate: n,
    prompt: r
}) {
    let i = c(),
        a = i?.normalizedAccountUserId;
    if (!h() || !i || !a || !t || !r.trim()) return !1;
    let o = Fe(r, {
        accountId: i.id,
        accountUserId: a
    }, {
        starter_prompt_id: e,
        suggestion_type: T.Starter
    });
    return g({
        conversation: t,
        nextMode: D.TPP
    }), G(n, {
        params: new URLSearchParams({
            surface: `work`
        }),
        state: o
    }), !0
}
var Nt = e((() => {
        k(), Ae(), S(), x(), w(), ve()
    })),
    Pt, Ft, It = e((() => {
        Pt = `_9X9NtG_widget`, Ft = {
            widget: Pt
        }
    }));

function Lt(e) {
    return !e.id || typeof e.id != `string` || !Rt(e.widget) ? !1 : e.widget.type.length > 0
}

function Rt(e) {
    return e == null || Array.isArray(e) || typeof e != `object` || !(`type` in e) ? !1 : typeof e.type == `string`
}

function J(e) {
    return typeof e == `object` && !!e && !Array.isArray(e)
}

function zt(e) {
    let t = e?.ledger_link_id;
    return typeof t == `string` ? t : void 0
}

function Bt(e) {
    return Array.isArray(e) ? e.filter(e => typeof e == `string`) : []
}

function Vt(e) {
    if (!J(e)) return null;
    let t = typeof e.transaction_id == `string` ? e.transaction_id.trim() : ``,
        n = typeof e.target_primary_category == `string` ? e.target_primary_category.trim() : ``;
    return !t || !n ? null : {
        transaction_id: t,
        target_primary_category: n
    }
}

function Ht(e) {
    if (!J(e) || !Array.isArray(e.corrections)) return null;
    let t = [];
    for (let n of e.corrections) {
        let e = Vt(n);
        if (!e) return null;
        t.push(e)
    }
    return t
}

function Ut(e) {
    return J(e) ? e.kind === hn && Array.isArray(e.transactionIds) && e.transactionIds.every(e => typeof e == `string`) : !1
}

function Wt(e, t) {
    if (!e) return;
    let n = e.getState();
    if (!n || !Array.isArray(n.transactions)) return;
    let r = new Set(t),
        i = n.transactions.filter(e => {
            if (!J(e)) return !0;
            let t = typeof e.id == `string` ? e.id : void 0;
            return t == null || !r.has(t)
        });
    e.setState({
        transactions: i
    }, !1)
}

function Gt(e) {
    return e.id.startsWith(gn)
}

function Kt(e) {
    let t = e.initial_state;
    if (t == null) return null;
    let n = {
        ...t
    };
    return delete n[ft], Object.keys(n).length === 0 ? null : n
}

function qt(e) {
    return j([e.id, e.widget, Kt(e)])
}

function Jt(e) {
    return e.items.map(e => qt(e.widgetConfig)).join(`:`)
}

function Yt(e) {
    return e.initial_state ?? void 0
}

function Xt(e) {
    let t = e.initial_state?.[ft];
    return typeof t == `boolean` ? t : void 0
}

function Zt({
    widgets: e,
    variant: t
}) {
    return e.filter(e => Lt(e) ? t === `dashboard` ? !Gt(e) : Gt(e) : !1)
}

function Qt(e) {
    "use forget";
    let t = (0, Y.c)(9),
        {
            hasLedgerConnections: n,
            variant: r,
            starterAnalytics: i,
            className: a
        } = e,
        o = r === void 0 ? `onboarding` : r,
        s = ie(`/finances/:tab`)?.params.tab ?? `dashboard`,
        {
            isLedgerAccountFlowLoading: c,
            loadingOauthLinkId: l,
            onWidgetAction: u
        } = $t(_(), i?.financeSessionId, s),
        d;
    return t[0] !== a || t[1] !== n || t[2] !== c || t[3] !== l || t[4] !== u || t[5] !== i || t[6] !== s || t[7] !== o ? (d = (0, Z.jsx)(nn, {
        hasLedgerConnections: n,
        isLedgerAccountFlowLoading: c,
        loadingOauthLinkId: l,
        variant: o,
        starterAnalytics: i,
        tab: s,
        onWidgetAction: u,
        className: a
    }), t[0] = a, t[1] = n, t[2] = c, t[3] = l, t[4] = u, t[5] = i, t[6] = s, t[7] = o, t[8] = d) : d = t[8], d
}

function $t(e, t, n) {
    "use no forget";
    let r = F(),
        i = (0, X.useRef)(!1),
        a = N(),
        o = A(),
        {
            isLoading: s,
            loadingOauthLinkId: c,
            open: l
        } = mt(),
        u = Qe({
            skipPostConnectExperience: !0,
            productSku: Ce.CONNECTOR_SETTING,
            canReuseLink: p,
            resolveDirectNoAuthConnector: Ze
        }),
        d = ce(),
        {
            sensitiveValuesHidden: h,
            setSensitiveValuesHidden: te
        } = dt(),
        g = (0, X.useCallback)(async () => (a.getQueryData(fe) ?? await a.fetchQuery({
            queryKey: fe,
            queryFn: he
        }) ?? []).find(ge)?.id, [a]),
        _ = (0, X.useCallback)(async t => {
            if (!(!e || !l)) try {
                l({
                    autoStartOauthLinkId: t ?? await g(),
                    trackingContext: {
                        entryPoint: `widget`
                    }
                })
            } catch (e) {
                o.danger(d.formatMessage($.connectAccountErrorToast), {
                    error: e
                })
            }
        }, [e, g, d, l, o]),
        v = (0, X.useCallback)(t => {
            ht({
                ...t,
                conversation: e,
                sensitiveValuesHidden: h
            })
        }, [e, h]),
        b = (0, X.useCallback)(() => {
            a.invalidateQueries({
                queryKey: Ee
            })
        }, [a]);
    return {
        isLedgerAccountFlowLoading: s,
        loadingOauthLinkId: c,
        onWidgetAction: (0, X.useCallback)(async ({
            type: s,
            payload: c
        }) => {
            if (s === fn) {
                if (!J(c)) return;
                let e = typeof c.ledger_link_id == `string` ? c.ledger_link_id : void 0;
                await _(e);
                return
            }
            if (s === `ledger_set_sensitive_values_hidden`) {
                let e = ct(c);
                if (e == null) return;
                te(e);
                return
            }
            if (s === `ledger_category_review_save`) {
                let e = Ht(c);
                if (!e || e.length === 0) return;
                try {
                    if ((await U({
                            actionType: s,
                            payload: {
                                corrections: e
                            },
                            toaster: o
                        })).status !== `success`) {
                        o.danger(d.formatMessage($.categoryReviewSaveErrorToast));
                        return
                    }
                    return {
                        kind: hn,
                        transactionIds: e.map(e => e.transaction_id)
                    }
                } catch (e) {
                    o.danger(d.formatMessage($.categoryReviewSaveErrorToast), {
                        error: e
                    });
                    return
                }
            }
            if (s === `open_entity_detail` && J(c) && c.category === pn) {
                let e = J(c.extraParams) ? c.extraParams : void 0;
                if (De(e)) {
                    await _(zt(e));
                    return
                }
                s = q, c = {
                    card_id: e?.card_id,
                    prompt: c.query,
                    system_hint: e?.system_hint
                }
            }
            if (s === `open_entity_detail` && J(c) && c.category === mn) {
                let t = J(c.extraParams) ? c.extraParams : void 0,
                    n = typeof c.query == `string` ? c.query : void 0,
                    r = Bt(t?.transaction_ids);
                if (!n || !e) return;
                let i = typeof t?.card_id == `string` ? t.card_id : `ledger-low-confidence-category-correction`,
                    a = typeof t?.system_hint == `string` ? m(t.system_hint) ?? we : we,
                    {
                        extraStreamParams: o,
                        systemHints: s
                    } = Se(a ? [a] : []);
                await qe({
                    callsiteId: `request_completion.mattress.ledger_category_correction_widget.1`,
                    conversation: e,
                    promptMessage: f(n, {
                        starter_prompt_id: i,
                        suggestion_type: T.Starter,
                        ...r.length > 0 ? {
                            ledger_transaction_ids: r
                        } : {},
                        ...s.length > 0 ? {
                            system_hints: s
                        } : {}
                    }),
                    eventSource: `mouse`,
                    extraStreamParams: o
                });
                return
            }
            if (s !== `mattress_onboarding_card_click`) {
                if (!s || !un.has(s)) return;
                await it({
                    actionType: s,
                    payload: J(c) ? c : void 0,
                    context: {
                        openEntitySidebar: v
                    },
                    library: dn
                });
                return
            }
            if (!J(c)) return;
            let p = typeof c.card_id == `string` ? c.card_id : void 0;
            if (!p) return;
            let h = c.action;
            if (h != null) return !ue(h) || !l ? void 0 : (y.addAction(`finance-landing-page.onboarding-card-click`, {
                cardId: p
            }), new Promise(e => {
                let r = l({
                    destination: h.destination,
                    trackingContext: {
                        entryPoint: `widget`,
                        ...p === Q ? {
                            entrypoint: `starter_prompt`
                        } : {}
                    },
                    onSettled: e
                });
                r && t && p === Q && ee.logStructuredEvent(`ChatgptFinanceComponentInteraction`, {
                    surfaceName: `home`,
                    componentName: `starter_card`,
                    componentId: Q,
                    financeSessionId: t,
                    tab: n,
                    action: `clicked`
                }), r || e()
            }));
            if (c.thread_mode === `work`) {
                if (typeof c.prompt != `string` || i.current) return;
                i.current = Mt({
                    cardId: p,
                    conversation: e,
                    navigate: r,
                    prompt: c.prompt
                });
                return
            }
            if (K(p)) return y.addAction(`finance-landing-page.onboarding-card-click`, {
                cardId: p
            }), l ? new Promise(e => {
                Ye({
                    accountLinkingContext: {
                        source: `widget`
                    },
                    createLedgerConnectorLink: u,
                    ensurePluginEnabled: !0,
                    navigate: r,
                    onConversationReady: b,
                    prompt: d.formatMessage(ke),
                    queryClient: a,
                    startLedgerAccountFlow: t => l({
                        ...t,
                        onSettled: e
                    })
                }) || e()
            }) : void 0;
            if (pe(p)) {
                await _();
                return
            }
            let g = typeof c.prompt == `string` ? c.prompt : void 0,
                x = typeof c.system_hint == `string` ? m(c.system_hint) : void 0;
            g && (y.addAction(`finance-landing-page.onboarding-card-click`, {
                cardId: p
            }), e && (await Xe({
                cardId: p,
                conversation: e,
                prompt: g,
                systemHint: x
            }), b()))
        }, [e, u, t, b, d, r, v, _, l, a, te, n, o])
    }
}

function en(e) {
    "use forget";
    let t = (0, Y.c)(43),
        {
            className: n,
            isRepairLoading: r,
            transactionPrefetchRevision: a,
            onWidgetAction: o,
            widgetConfig: s
        } = e,
        c = r !== void 0 && r,
        l = (0, X.useRef)(null),
        u;
    t[0] === s ? u = t[1] : (u = Xt(s), t[0] = s, t[1] = u);
    let d = u,
        f = _(),
        p = ce(),
        m = (0, X.useRef)(!1),
        ee = (0, X.useRef)(!1),
        h;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (h = Me(), t[2] = h) : h = t[2];
    let g = h,
        v;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (v = Le(), t[3] = v) : v = t[3];
    let y = v,
        b;
    t[4] !== f || t[5] !== p.locale || t[6] !== d || t[7] !== a || t[8] !== s.id ? (b = () => {
        if (y === 0 || a === 0 || !f || s.id !== `ledger_recent_transactions_widget`) return;
        let e = l.current?.getState();
        if (!e) return;
        let t = {
            ...e,
            sensitive_values_hidden: d ?? e.sensitive_values_hidden
        };
        g.setContext(Ne(p.locale, t.sensitive_values_hidden)), At({
            store: g,
            state: t,
            clientThreadId: f.id,
            locale: p.locale,
            isCurrent: () => m.current
        }).catch(tn)
    }, t[4] = f, t[5] = p.locale, t[6] = d, t[7] = a, t[8] = s.id, t[9] = b) : b = t[9];
    let x = b,
        S, C;
    t[10] === x ? (S = t[11], C = t[12]) : (S = () => (m.current = !0, ee.current && x(), () => {
        m.current = !1
    }), C = [x], t[10] = x, t[11] = S, t[12] = C), (0, X.useEffect)(S, C);
    let w;
    t[13] === o ? w = t[14] : (w = async (e, t) => {
        let n = await o?.(e, t);
        return Ut(n) && Wt(l.current, n.transactionIds), n
    }, t[13] = o, t[14] = w);
    let T = w,
        E, D;
    t[15] === d ? (E = t[16], D = t[17]) : (D = () => {
        d != null && l.current?.setState({
            [ft]: d
        }, !1)
    }, E = [d], t[15] = d, t[16] = E, t[17] = D), (0, X.useEffect)(D, E);
    let O;
    t[18] !== c || t[19] !== s.initial_state?.ledger_link_id ? (O = () => {
        typeof s.initial_state?.ledger_link_id == `string` && l.current?.setState({
            ledger_repair_initializing: c
        }, !1)
    }, t[18] = c, t[19] = s.initial_state?.ledger_link_id, t[20] = O) : O = t[20];
    let k = s.initial_state?.ledger_link_id,
        A;
    t[21] !== c || t[22] !== k ? (A = [c, k], t[21] = c, t[22] = k, t[23] = A) : A = t[23], (0, X.useEffect)(O, A);
    let ne = s.id,
        j;
    t[24] === n ? j = t[25] : (j = i(`min-w-0`, Ft.widget, n), t[24] = n, t[25] = j);
    let M = s.widget,
        N;
    t[26] === s ? N = t[27] : (N = Yt(s), t[26] = s, t[27] = N);
    let P, F;
    t[28] === x ? (P = t[29], F = t[30]) : (P = () => {
        ee.current = !0, x()
    }, F = e => {
        e.scope === `root` && ee.current && x()
    }, t[28] = x, t[29] = P, t[30] = F);
    let I;
    t[31] !== T || t[32] !== M || t[33] !== N || t[34] !== P || t[35] !== F ? (I = (0, Z.jsx)(vt, {
        widget: M,
        initialState: N,
        onAction: T,
        onInitialRenderCommit: P,
        onStateMutation: F,
        ref: l
    }), t[31] = T, t[32] = M, t[33] = N, t[34] = P, t[35] = F, t[36] = I) : I = t[36];
    let L;
    t[37] !== j || t[38] !== I ? (L = (0, Z.jsx)(`div`, {
        className: j,
        children: I
    }), t[37] = j, t[38] = I, t[39] = L) : L = t[39];
    let R;
    return t[40] !== L || t[41] !== s.id ? (R = (0, Z.jsx)(te, {
        name: `Mattress Widget`,
        children: L
    }, ne), t[40] = L, t[41] = s.id, t[42] = R) : R = t[42], R
}

function tn() {}

function nn(e) {
    "use forget";
    let t = (0, Y.c)(92),
        {
            hasLedgerConnections: n,
            isLedgerAccountFlowLoading: r,
            loadingOauthLinkId: a,
            variant: o,
            starterAnalytics: s,
            tab: c,
            onWidgetAction: l,
            className: u
        } = e,
        d = ce(),
        f = (0, X.useId)(),
        [p, m] = (0, X.useState)(!1),
        [h, g] = (0, X.useState)(null),
        _ = s?.financeSessionId,
        v = s?.viewedCreditStarterSession,
        y, x;
    t[0] !== h || t[1] !== _ || t[2] !== c || t[3] !== v ? (y = () => {
        if (!(!h || !_ || !v)) return le(h, () => {
            v.current !== _ && (v.current = _, ee.logStructuredEvent(`ChatgptFinanceComponentViewed`, {
                surfaceName: `home`,
                componentName: `starter_card`,
                componentId: Q,
                financeSessionId: _,
                tab: c
            }))
        })
    }, x = [h, _, c, v], t[0] = h, t[1] = _, t[2] = c, t[3] = v, t[4] = y, t[5] = x) : (y = t[4], x = t[5]), (0, X.useEffect)(y, x);
    let {
        sensitiveValuesHidden: S
    } = dt(), C;
    t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (C = {
        queryKey: fe,
        queryFn: he,
        enabled: !1
    }, t[6] = C) : C = t[6];
    let w = I(C),
        T;
    t[7] === n ? T = t[8] : (T = _e(n), t[7] = n, t[8] = T);
    let E;
    t[9] !== w.data || t[10] !== o ? (E = () => o === `dashboard` ? tt(w.data ?? []) : void 0, t[9] = w.data, t[10] = o, t[11] = E) : E = t[11];
    let D = o === `dashboard`,
        O;
    t[12] !== T || t[13] !== E || t[14] !== D ? (O = {
        queryKey: T,
        initialPageParam: 0,
        queryFn: sn,
        getNextPageParam: on,
        refetchOnMount: `always`,
        refetchInterval: E,
        enabled: D
    }, t[12] = T, t[13] = E, t[14] = D, t[15] = O) : O = t[15];
    let k = ae(O),
        A;
    t[16] === n ? A = t[17] : (A = [...xe, `onboarding`, n], t[16] = n, t[17] = A);
    let ne = o === `onboarding`,
        j;
    t[18] !== A || t[19] !== ne ? (j = {
        queryKey: A,
        queryFn: ye,
        refetchOnMount: !0,
        enabled: ne
    }, t[18] = A, t[19] = ne, t[20] = j) : j = t[20];
    let M = I(j);
    k.data?.pages;
    let N;
    t[21] !== k.data?.pages || t[22] !== M.data || t[23] !== o ? (N = o === `dashboard` ? k.data?.pages.flatMap(an) ?? [] : M.data ?? [], t[21] = k.data?.pages, t[22] = M.data, t[23] = o, t[24] = N) : N = t[24];
    let F;
    t[25] !== S || t[26] !== N ? (F = lt(N, S), t[25] = S, t[26] = N, t[27] = F) : F = t[27];
    let L = Zt({
            widgets: F,
            variant: o
        }),
        R;
    t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (R = Me(), t[28] = R) : R = t[28];
    let z = R,
        re;
    t[29] === Symbol.for(`react.memo_cache_sentinel`) ? (re = Le(), t[29] = re) : re = t[29];
    let ie = re,
        oe;
    t[30] !== d.locale || t[31] !== S ? (oe = Ne(d.locale, S), t[30] = d.locale, t[31] = S, t[32] = oe) : oe = t[32];
    let se = oe,
        B;
    t[33] === w.data ? B = t[34] : (B = w.data ?? [], t[33] = w.data, t[34] = B);
    let ue;
    t[35] === B ? ue = t[36] : (ue = tt(B), t[35] = B, t[36] = ue);
    let de = ue != null,
        pe, me;
    t[37] !== se || t[38] !== o ? (pe = () => {
        if (o !== `dashboard` || ie === 0) return;
        z.setContext(se);
        let e = ze(),
            t = () => {
                z.setActive(je(), ie)
            };
        return t(), document.addEventListener(`visibilitychange`, t), window.addEventListener(`online`, t), window.addEventListener(`offline`, t), e?.addEventListener(`change`, t), () => {
            document.removeEventListener(`visibilitychange`, t), window.removeEventListener(`online`, t), window.removeEventListener(`offline`, t), e?.removeEventListener(`change`, t), z.setActive(!1), window.location.pathname.startsWith(`/finances`) || z.endVisit()
        }
    }, me = [se, ie, z, o], t[37] = se, t[38] = o, t[39] = pe, t[40] = me) : (pe = t[39], me = t[40]), (0, X.useEffect)(pe, me);
    let ge, ve;
    t[41] !== k.isFetching || t[42] !== de ? (ge = () => {
        z.setPaused(de || k.isFetching)
    }, ve = [z, de, k.isFetching], t[41] = k.isFetching, t[42] = de, t[43] = ge, t[44] = ve) : (ge = t[43], ve = t[44]), (0, X.useEffect)(ge, ve);
    let be = o === `dashboard` ? k.isLoading : M.isLoading,
        Se = (0, X.useRef)(null),
        [Ce, we] = (0, X.useState)(!1),
        [Te, Ee] = (0, X.useState)(!1),
        De;
    t[45] === Symbol.for(`react.memo_cache_sentinel`) ? (De = () => {
        let e = Se.current;
        if (!e) return;
        let t = e.scrollWidth - e.clientWidth;
        we(e.scrollLeft > 1), Ee(e.scrollLeft < t - 1)
    }, t[45] = De) : De = t[45];
    let V = De,
        Oe;
    t[46] === Symbol.for(`react.memo_cache_sentinel`) ? (Oe = e => {
        let t = Se.current;
        if (!t) return;
        let n = t.firstElementChild,
            r = n instanceof HTMLElement ? n.getBoundingClientRect().width : 0,
            i = getComputedStyle(t),
            a = Number.parseFloat(i.columnGap || i.gap) || 0,
            o = r > 0 ? Math.max(1, Math.floor((t.clientWidth + a) / (r + a))) : 1,
            s = r > 0 ? (r + a) * o : t.clientWidth;
        t.scrollBy({
            left: e === `forward` ? s : -s,
            behavior: `smooth`
        })
    }, t[46] = Oe) : Oe = t[46];
    let ke = Oe,
        Ae;
    if (t[47] === o ? Ae = t[48] : (Ae = () => {
            if (o !== `onboarding`) return;
            let e = Se.current;
            if (!e) return;
            V();
            let t = requestAnimationFrame(V);
            e.addEventListener(`scroll`, V, {
                passive: !0
            });
            let n = typeof ResizeObserver > `u` ? null : new ResizeObserver(V);
            return n?.observe(e), () => {
                cancelAnimationFrame(t), e.removeEventListener(`scroll`, V), n?.disconnect()
            }
        }, t[47] = o, t[48] = Ae), (0, X.useEffect)(Ae, [V, o, L.length]), o === `onboarding` && n && p) return null;
    if (be) {
        let e;
        return t[49] !== u || t[50] !== n || t[51] !== o ? (e = (0, Z.jsx)(cn, {
            hasLedgerConnections: n,
            variant: o,
            className: u
        }), t[49] = u, t[50] = n, t[51] = o, t[52] = e) : e = t[52], e
    }
    if (o === `dashboard`) {
        let e = Dt([...L].sort(rn));
        if (e.length === 0 && !k.hasNextPage && !k.isFetchingNextPage) {
            let e;
            return t[53] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Z.jsx)(ln, {}), t[53] = e) : e = t[53], e
        }
        let n;
        t[54] === u ? n = t[55] : (n = i(`flex flex-col gap-4`, u), t[54] = u, t[55] = n);
        let o;
        t[56] !== k.dataUpdatedAt || t[57] !== r || t[58] !== a || t[59] !== l ? (o = e => (0, Z.jsx)(`div`, {
            className: `grid grid-cols-1 gap-4 md:grid-cols-2`,
            children: e.items.map(e => (0, Z.jsx)(_n, {
                className: e.span === 2 ? `md:col-span-2` : void 0,
                isRepairLoading: r && e.widgetConfig.initial_state?.ledger_link_id === a,
                widgetConfig: e.widgetConfig,
                transactionPrefetchRevision: e.widgetConfig.id === `ledger_recent_transactions_widget` ? k.dataUpdatedAt : void 0,
                onWidgetAction: l
            }, qt(e.widgetConfig)))
        }, Jt(e)), t[56] = k.dataUpdatedAt, t[57] = r, t[58] = a, t[59] = l, t[60] = o) : o = t[60];
        let s;
        return t[61] !== k.fetchNextPage || t[62] !== k.hasNextPage || t[63] !== k.isFetchingNextPage ? (s = (0, Z.jsx)(Be, {
            isFetchingNextPage: k.isFetchingNextPage,
            hasNextPage: k.hasNextPage,
            fetchNextPage: k.fetchNextPage,
            bgColor: `bg-transparent`,
            rootMargin: `0px 0px 20% 0px`
        }), t[61] = k.fetchNextPage, t[62] = k.hasNextPage, t[63] = k.isFetchingNextPage, t[64] = s) : s = t[64], (0, Z.jsxs)(`div`, {
            className: n,
            children: [e.map(o), s]
        })
    }
    if (L.length === 0) return null;
    let Pe = L.map(e => (0, Z.jsx)(te, {
            name: `Mattress Widget`,
            children: (0, Z.jsx)(`div`, {
                ref: e.id === `${gn}:${Q}` ? g : void 0,
                className: i(`mattress-onboarding-widget-card h-[124px] min-w-0 shrink-0 snap-start sm:basis-[calc((100%-12px)/2)]`, L.length === 1 ? `basis-full` : `basis-[78%] lg:basis-[calc((100%-24px)/3)]`),
                "data-testid": `mattress-onboarding-widget-cell`,
                children: (0, Z.jsx)(vt, {
                    widget: e.widget,
                    initialState: Yt(e),
                    onAction: l
                })
            })
        }, qt(e))),
        Fe;
    t[65] === Pe ? Fe = t[66] : (Fe = (0, Z.jsx)(`div`, {
        ref: Se,
        className: `no-scrollbar flex w-full snap-x snap-mandatory items-stretch gap-3 overflow-x-auto pb-2`,
        "data-testid": `mattress-onboarding-widgets-grid`,
        children: Pe
    }), t[65] = Pe, t[66] = Fe);
    let Ie = Fe,
        H;
    t[67] === u ? H = t[68] : (H = i(`flex w-full flex-col gap-4`, u), t[67] = u, t[68] = H);
    let Re;
    t[69] === Symbol.for(`react.memo_cache_sentinel`) ? (Re = (0, Z.jsx)(P, {
        ...$.onboardingSectionTitle
    }), t[69] = Re) : Re = t[69];
    let U;
    t[70] === f ? U = t[71] : (U = (0, Z.jsx)(`h2`, {
        id: f,
        className: `text-heading-3 text-token-text-primary font-medium`,
        children: Re
    }), t[70] = f, t[71] = U);
    let W;
    t[72] !== Ce || t[73] !== Te || t[74] !== n || t[75] !== d || t[76] !== ke ? (W = n ? (0, Z.jsxs)(Z.Fragment, {
        children: [(0, Z.jsx)(`button`, {
            "aria-label": d.formatMessage($.previousOnboardingPage),
            className: `hover:bg-token-interactive-bg-tertiary-press bg-token-bg-primary border-token-border-heavy focus-visible:outline-token-border-strong hidden size-9 items-center justify-center rounded-full border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-30 sm:flex`,
            disabled: !Ce,
            onClick: () => ke(`back`),
            type: `button`,
            children: (0, Z.jsx)(He, {
                "aria-hidden": `true`,
                className: `icon-sm`
            })
        }), (0, Z.jsx)(`button`, {
            "aria-label": d.formatMessage($.nextOnboardingPage),
            className: `hover:bg-token-interactive-bg-tertiary-press bg-token-bg-primary border-token-border-heavy focus-visible:outline-token-border-strong hidden size-9 items-center justify-center rounded-full border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-30 sm:flex`,
            disabled: !Te,
            onClick: () => ke(`forward`),
            type: `button`,
            children: (0, Z.jsx)(We, {
                "aria-hidden": `true`,
                className: `icon-sm`
            })
        })]
    }) : null, t[72] = Ce, t[73] = Te, t[74] = n, t[75] = d, t[76] = ke, t[77] = W) : W = t[77];
    let G;
    t[78] !== n || t[79] !== d ? (G = n ? (0, Z.jsx)(b, {
        "aria-label": d.formatMessage($.dismissOnboardingSection),
        className: `text-token-text-tertiary size-8 shrink-0`,
        onClick: () => {
            m(!0)
        }
    }) : null, t[78] = n, t[79] = d, t[80] = G) : G = t[80];
    let K;
    t[81] !== W || t[82] !== G ? (K = (0, Z.jsxs)(`div`, {
        className: `flex items-center gap-2`,
        children: [W, G]
    }), t[81] = W, t[82] = G, t[83] = K) : K = t[83];
    let q;
    t[84] !== U || t[85] !== K ? (q = (0, Z.jsxs)(`div`, {
        className: `flex items-center justify-between gap-3`,
        children: [U, K]
    }), t[84] = U, t[85] = K, t[86] = q) : q = t[86];
    let Ve;
    return t[87] !== Ie || t[88] !== f || t[89] !== H || t[90] !== q ? (Ve = (0, Z.jsxs)(`section`, {
        "aria-labelledby": f,
        className: H,
        children: [q, Ie]
    }), t[87] = Ie, t[88] = f, t[89] = H, t[90] = q, t[91] = Ve) : Ve = t[91], Ve
}

function rn(e, t) {
    return (e.dashboard_rank ?? 2 ** 53 - 1) - (t.dashboard_rank ?? 2 ** 53 - 1)
}

function an(e) {
    return e.widgets
}

function on(e) {
    return e.dashboard_next_offset ?? void 0
}

function sn(e) {
    let {
        pageParam: t
    } = e;
    return be({
        offset: typeof t == `number` ? t : 0,
        limit: 4
    })
}

function cn(e) {
    "use forget";
    let t = (0, Y.c)(11),
        {
            hasLedgerConnections: n,
            variant: r,
            className: a
        } = e,
        o = r === `dashboard` ? `grid w-full self-stretch grid-cols-1 gap-4 md:grid-cols-2` : `no-scrollbar flex w-full snap-x snap-mandatory items-stretch gap-3 overflow-x-auto pb-2`,
        s = r === `onboarding` ? `h-[124px] min-w-0 shrink-0 basis-[78%] snap-start animate-pulse rounded-xl bg-gray-200 sm:basis-[calc((100%-12px)/2)] lg:basis-[calc((100%-24px)/3)] dark:bg-gray-700` : `h-32 w-full animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700`,
        c = r === `onboarding` ? n ? 4 : 1 : 2,
        l;
    t[0] !== a || t[1] !== o ? (l = i(o, a), t[0] = a, t[1] = o, t[2] = l) : l = t[2];
    let u;
    if (t[3] !== s || t[4] !== c) {
        let e;
        t[6] === s ? e = t[7] : (e = (e, t) => (0, Z.jsx)(`div`, {
            className: s,
            "data-testid": `mattress-widgets-loading-card`
        }, t), t[6] = s, t[7] = e), u = Array.from({
            length: c
        }, e), t[3] = s, t[4] = c, t[5] = u
    } else u = t[5];
    let d;
    return t[8] !== l || t[9] !== u ? (d = (0, Z.jsx)(`div`, {
        "aria-hidden": `true`,
        className: l,
        "data-testid": `mattress-widgets-loading-placeholder`,
        children: u
    }), t[8] = l, t[9] = u, t[10] = d) : d = t[10], d
}

function ln() {
    "use forget";
    let e = (0, Y.c)(2),
        t;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Z.jsx)(`p`, {
        className: `text-token-text-primary text-sm font-medium`,
        children: (0, Z.jsx)(P, {
            ...$.dashboardEmptyStateTitle
        })
    }), e[0] = t) : t = e[0];
    let n;
    return e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, Z.jsxs)(`div`, {
        className: `border-token-border-light bg-token-bg-primary rounded-2xl border px-6 py-10 text-center`,
        children: [t, (0, Z.jsx)(`p`, {
            className: `text-token-text-tertiary mt-2 text-sm`,
            children: (0, Z.jsx)(P, {
                ...$.dashboardEmptyStateDescription
            })
        })]
    }), e[1] = n) : n = e[1], n
}
var Y, X, Z, un, dn, fn, pn, mn, hn, gn, Q, $, _n, vn = e((() => {
    Y = B(), k(), Je(), Ke(), E(), s(), Ge(), Ue(), Re(), rt(), H(), at(), Pe(), de(), V(), et(), $e(), ut(), Te(), Ot(), pt(), gt(), Oe(), jt(), Nt(), W(), Ve(), r(), _t(), n(), o(), a(), me(), l(), O(), Ie(), d(), se(), X = t(z()), R(), L(), C(), It(), Z = ne(), un = new Set([`open_entity_detail`, `open_url`]), dn = {
        open_entity_detail: nt.open_entity_detail,
        open_url: nt.open_url
    }, fn = `mattress_ledger_open_account_link`, pn = `ledger_add_account_prompt`, mn = `ledger_category_correction_prompt`, hn = `ledger_category_review_saved`, gn = `ledger_finance_onboarding_widget`, Q = `finance-onboarding-connect-credit`, $ = M({
        onboardingSectionTitle: {
            id: `mattress.widgets.onboarding.section.title`,
            defaultMessage: `Get started`
        },
        dismissOnboardingSection: {
            id: `mattress.widgets.onboarding.dismiss.button.label`,
            defaultMessage: `Close Get started`
        },
        previousOnboardingPage: {
            id: `mattress.widgets.onboarding.previous.button.label`,
            defaultMessage: `Previous page`
        },
        nextOnboardingPage: {
            id: `mattress.widgets.onboarding.next.button.label`,
            defaultMessage: `Next page`
        },
        dashboardEmptyStateTitle: {
            id: `mattress.widgets.dashboard.empty_state.title`,
            defaultMessage: `Your dashboard will populate as your Finances data becomes available`
        },
        dashboardEmptyStateDescription: {
            id: `mattress.widgets.dashboard.empty_state.description`,
            defaultMessage: `Connect accounts and sync recent transactions to see personalized finance widgets here.`
        },
        connectAccountErrorToast: {
            id: `mattress.widgets.account_connection.error.toast`,
            defaultMessage: `Error connecting account`
        },
        categoryReviewSaveErrorToast: {
            id: `mattress.widgets.category_review.save.error.toast`,
            defaultMessage: `Could not save category edits`
        }
    }), _n = (0, X.memo)(en, (e, t) => e.className === t.className && e.isRepairLoading === t.isRepairLoading && e.transactionPrefetchRevision === t.transactionPrefetchRevision && e.onWidgetAction === t.onWidgetAction && Xt(e.widgetConfig) === Xt(t.widgetConfig) && qt(e.widgetConfig) === qt(t.widgetConfig))
}));
export {
    wt as a, xt as i, vn as n, yt as o, St as r, bt as s, Qt as t
};
//# sourceMappingURL=f19e94aa-f1j37gmgipmi4l60.js.map