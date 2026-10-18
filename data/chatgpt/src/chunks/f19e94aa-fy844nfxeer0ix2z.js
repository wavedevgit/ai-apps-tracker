const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/24fd10e2-biooxlb55mr6we7j.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/conversation-small-fym1zmu9zimymmm1.js", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css", "assets/c2675c8c-ig7dykzhv7vbqkt7.js", "assets/82782bc9-h658ejxn3ufkvr7a.js", "assets/8b34dbc2-gf9wnwcahty27ylx.js", "assets/global-modals-njebr7y8.css", "assets/09231af0-l2cuain30zx243gi.js", "assets/2f772deb-kk5vhpbk02vww2ym.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AJ as n,
    Btt as r,
    CW as i,
    DW as a,
    Dit as o,
    Htt as s,
    I$ as c,
    JP as l,
    JU as u,
    JW as d,
    L$ as f,
    OJ as p,
    OZ as m,
    X$ as h,
    XP as ee,
    _q as g,
    b5 as _,
    cw as v,
    dc as y,
    gv as b,
    hU as x,
    hc as S,
    kit as C,
    mZ as w,
    oq as T,
    pU as E,
    qU as te,
    sw as ne,
    u1 as D,
    vv as O,
    y5 as re
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as ie,
    Bn as k,
    G as A,
    Ln as j,
    Mt as M,
    N,
    Nn as P,
    O as F,
    Pt as I,
    Rn as L,
    Vn as ae,
    cn as oe,
    l as se,
    ln as ce,
    s as le,
    wn as R,
    zn as ue
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Awt as z,
    Ckt as B,
    Gwn as de,
    Ikt as fe,
    Kkt as pe,
    Lbt as me,
    MW as he,
    Okt as ge,
    Pkt as _e,
    Rbt as ve,
    Rkt as ye,
    S1 as be,
    TW as xe,
    Ukt as Se,
    Wkt as Ce,
    Wwn as we,
    _At as Te,
    _W as Ee,
    awt as De,
    bW as V,
    cX as Oe,
    dW as ke,
    egn as Ae,
    gAt as je,
    gW as Me,
    hAt as Ne,
    hW as Pe,
    kAt as Fe,
    kkt as Ie,
    lX as Le,
    mAt as Re,
    sW as H,
    swt as ze,
    tgn as U,
    vAt as Be,
    vW as W,
    wAt as G,
    x1 as K,
    yAt as q,
    yW as Ve
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Gv as He,
    Kv as Ue,
    TC as We,
    wC as Ge
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    $o as Ke,
    Om as qe,
    as as Je,
    es as Ye,
    is as Xe,
    km as Ze,
    rs as Qe,
    ts as $e
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    n as et,
    t as tt
} from "./4f866508-khnwgwvmnmyh78fa.js";
import {
    i as nt,
    n as rt
} from "./04f387fb-cmovpptevei0e5gi.js";
import {
    c as it,
    r as at
} from "./fcf5f4da-m2640lkqt2mr4cfw.js";
import {
    i as ot,
    n as st
} from "./a81eda00-hs3al4bqbebqodp6.js";
import {
    a as ct,
    i as lt,
    o as ut,
    s as dt,
    t as ft
} from "./4cf35c7a-drgejtr1y0lhb3xn.js";
import {
    n as pt,
    r as mt
} from "./a84119fb-kyktunv8quaqjfyt.js";
import {
    n as ht,
    t as gt
} from "./22f0e71d-kbnfec4fah3y3ipk.js";
import {
    n as _t,
    t as vt
} from "./c253861d-j4tvkph2hk82jrqt.js";

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
        } = await oe(async () => {
            let {
                createLedgerTransactionDetailRequest: e
            } = await import(`./24fd10e2-biooxlb55mr6we7j.js`).then(e => (e.t(), e.a));
            return {
                createLedgerTransactionDetailRequest: e
            }
        }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));
    if (!i() || e.getGeneration() !== a) return;
    let s = kt(t).flatMap(e => {
        let t = o({
            clientThreadId: n,
            conversationId: p(n) ?? n,
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
    st(), n(), ce()
}));

function Mt({
    cardId: e,
    conversation: t,
    navigate: n,
    prompt: r
}) {
    let i = h(),
        o = i?.normalizedAccountUserId;
    if (!a() || !i || !o || !t || !r.trim()) return !1;
    let s = xe(r, {
        accountId: i.id,
        accountUserId: o
    }, {
        starter_prompt_id: e,
        suggestion_type: c.Starter
    });
    return S({
        conversation: t,
        nextMode: d.TPP
    }), U(n, {
        params: new URLSearchParams({
            surface: `work`
        }),
        state: s
    }), !0
}
var Nt = e((() => {
        f(), Ae(), D(), y(), i(), he()
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
    return A([e.id, e.widget, Kt(e)])
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
        s = M(`/finances/:tab`)?.params.tab ?? `dashboard`,
        {
            isLedgerAccountFlowLoading: c,
            loadingOauthLinkId: l,
            onWidgetAction: u
        } = $t(ee(), i?.financeSessionId, s),
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
    let i = I(),
        a = (0, X.useRef)(!1),
        s = N(),
        l = x(),
        {
            isLoading: u,
            loadingOauthLinkId: d,
            open: f
        } = mt(),
        p = Je({
            skipPostConnectExperience: !0,
            productSku: we.CONNECTOR_SETTING,
            canReuseLink: O,
            resolveDirectNoAuthConnector: $e
        }),
        m = ue(),
        {
            sensitiveValuesHidden: h,
            setSensitiveValuesHidden: ee
        } = dt(),
        _ = (0, X.useCallback)(async () => (s.getQueryData(ge) ?? await s.fetchQuery({
            queryKey: ge,
            queryFn: fe
        }) ?? []).find(pe)?.id, [s]),
        v = (0, X.useCallback)(async t => {
            if (!(!e || !f)) try {
                f({
                    autoStartOauthLinkId: t ?? await _(),
                    trackingContext: {
                        entryPoint: `widget`
                    }
                })
            } catch (e) {
                l.danger(m.formatMessage($.connectAccountErrorToast), {
                    error: e
                })
            }
        }, [e, _, m, f, l]),
        y = (0, X.useCallback)(t => {
            ht({
                ...t,
                conversation: e,
                sensitiveValuesHidden: h
            })
        }, [e, h]),
        b = (0, X.useCallback)(() => {
            s.invalidateQueries({
                queryKey: B
            })
        }, [s]);
    return {
        isLedgerAccountFlowLoading: u,
        loadingOauthLinkId: d,
        onWidgetAction: (0, X.useCallback)(async ({
            type: u,
            payload: d
        }) => {
            if (u === fn) {
                if (!J(d)) return;
                let e = typeof d.ledger_link_id == `string` ? d.ledger_link_id : void 0;
                await v(e);
                return
            }
            if (u === `ledger_set_sensitive_values_hidden`) {
                let e = ct(d);
                if (e == null) return;
                ee(e);
                return
            }
            if (u === `ledger_category_review_save`) {
                let e = Ht(d);
                if (!e || e.length === 0) return;
                try {
                    if ((await ze({
                            actionType: u,
                            payload: {
                                corrections: e
                            },
                            toaster: l
                        })).status !== `success`) {
                        l.danger(m.formatMessage($.categoryReviewSaveErrorToast));
                        return
                    }
                    return {
                        kind: hn,
                        transactionIds: e.map(e => e.transaction_id)
                    }
                } catch (e) {
                    l.danger(m.formatMessage($.categoryReviewSaveErrorToast), {
                        error: e
                    });
                    return
                }
            }
            if (u === `open_entity_detail` && J(d) && d.category === pn) {
                let e = J(d.extraParams) ? d.extraParams : void 0;
                if (Ve(e)) {
                    await v(zt(e));
                    return
                }
                u = Pe, d = {
                    card_id: e?.card_id,
                    prompt: d.query,
                    system_hint: e?.system_hint
                }
            }
            if (u === `open_entity_detail` && J(d) && d.category === mn) {
                let t = J(d.extraParams) ? d.extraParams : void 0,
                    n = typeof d.query == `string` ? d.query : void 0,
                    r = Bt(t?.transaction_ids);
                if (!n || !e) return;
                let i = typeof t?.card_id == `string` ? t.card_id : `ledger-low-confidence-category-correction`,
                    a = typeof t?.system_hint == `string` ? g(t.system_hint) ?? G : G,
                    {
                        extraStreamParams: o,
                        systemHints: s
                    } = me(a ? [a] : []);
                await Ze({
                    callsiteId: `request_completion.mattress.ledger_category_correction_widget.1`,
                    conversation: e,
                    promptMessage: w(n, {
                        starter_prompt_id: i,
                        suggestion_type: c.Starter,
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
            if (u !== `mattress_onboarding_card_click`) {
                if (!u || !un.has(u)) return;
                await it({
                    actionType: u,
                    payload: J(d) ? d : void 0,
                    context: {
                        openEntitySidebar: y
                    },
                    library: dn
                });
                return
            }
            if (!J(d)) return;
            let h = typeof d.card_id == `string` ? d.card_id : void 0;
            if (!h) return;
            let _ = d.action;
            if (_ != null) return !Ee(_) || !f ? void 0 : (o.addAction(`finance-landing-page.onboarding-card-click`, {
                cardId: h
            }), new Promise(e => {
                let i = f({
                    destination: _.destination,
                    trackingContext: {
                        entryPoint: `widget`,
                        ...h === Q ? {
                            entrypoint: `starter_prompt`
                        } : {}
                    },
                    onSettled: e
                });
                i && t && h === Q && r.logStructuredEvent(`ChatgptFinanceComponentInteraction`, {
                    surfaceName: `home`,
                    componentName: `starter_card`,
                    componentId: Q,
                    financeSessionId: t,
                    tab: n,
                    action: `clicked`
                }), i || e()
            }));
            if (d.thread_mode === `work`) {
                if (typeof d.prompt != `string` || a.current) return;
                a.current = Mt({
                    cardId: h,
                    conversation: e,
                    navigate: i,
                    prompt: d.prompt
                });
                return
            }
            if (W(h)) return o.addAction(`finance-landing-page.onboarding-card-click`, {
                cardId: h
            }), f ? new Promise(e => {
                Ke({
                    accountLinkingContext: {
                        source: `widget`
                    },
                    createLedgerConnectorLink: p,
                    ensurePluginEnabled: !0,
                    navigate: i,
                    onConversationReady: b,
                    prompt: m.formatMessage(ke),
                    queryClient: s,
                    startLedgerAccountFlow: t => f({
                        ...t,
                        onSettled: e
                    })
                }) || e()
            }) : void 0;
            if (V(h)) {
                await v();
                return
            }
            let x = typeof d.prompt == `string` ? d.prompt : void 0,
                S = typeof d.system_hint == `string` ? g(d.system_hint) : void 0;
            x && (o.addAction(`finance-landing-page.onboarding-card-click`, {
                cardId: h
            }), e && (await Qe({
                cardId: h,
                conversation: e,
                prompt: x,
                systemHint: S
            }), b()))
        }, [e, p, t, b, m, i, y, v, f, s, ee, n, l])
    }
}

function en(e) {
    "use forget";
    let t = (0, Y.c)(43),
        {
            className: n,
            isRepairLoading: r,
            transactionPrefetchRevision: i,
            onWidgetAction: a,
            widgetConfig: o
        } = e,
        s = r !== void 0 && r,
        c = (0, X.useRef)(null),
        l;
    t[0] === o ? l = t[1] : (l = Xt(o), t[0] = o, t[1] = l);
    let u = l,
        d = ee(),
        f = ue(),
        p = (0, X.useRef)(!1),
        m = (0, X.useRef)(!1),
        h;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (h = Be(), t[2] = h) : h = t[2];
    let g = h,
        _;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = je(), t[3] = _) : _ = t[3];
    let v = _,
        y;
    t[4] !== d || t[5] !== f.locale || t[6] !== u || t[7] !== i || t[8] !== o.id ? (y = () => {
        if (v === 0 || i === 0 || !d || o.id !== `ledger_recent_transactions_widget`) return;
        let e = c.current?.getState();
        if (!e) return;
        let t = {
            ...e,
            sensitive_values_hidden: u ?? e.sensitive_values_hidden
        };
        g.setContext(Te(f.locale, t.sensitive_values_hidden)), At({
            store: g,
            state: t,
            clientThreadId: d.id,
            locale: f.locale,
            isCurrent: () => p.current
        }).catch(tn)
    }, t[4] = d, t[5] = f.locale, t[6] = u, t[7] = i, t[8] = o.id, t[9] = y) : y = t[9];
    let b = y,
        x, S;
    t[10] === b ? (x = t[11], S = t[12]) : (x = () => (p.current = !0, m.current && b(), () => {
        p.current = !1
    }), S = [b], t[10] = b, t[11] = x, t[12] = S), (0, X.useEffect)(x, S);
    let C;
    t[13] === a ? C = t[14] : (C = async (e, t) => {
        let n = await a?.(e, t);
        return Ut(n) && Wt(c.current, n.transactionIds), n
    }, t[13] = a, t[14] = C);
    let w = C,
        T, E;
    t[15] === u ? (T = t[16], E = t[17]) : (E = () => {
        u != null && c.current?.setState({
            [ft]: u
        }, !1)
    }, T = [u], t[15] = u, t[16] = T, t[17] = E), (0, X.useEffect)(E, T);
    let ne;
    t[18] !== s || t[19] !== o.initial_state?.ledger_link_id ? (ne = () => {
        typeof o.initial_state?.ledger_link_id == `string` && c.current?.setState({
            ledger_repair_initializing: s
        }, !1)
    }, t[18] = s, t[19] = o.initial_state?.ledger_link_id, t[20] = ne) : ne = t[20];
    let D = o.initial_state?.ledger_link_id,
        O;
    t[21] !== s || t[22] !== D ? (O = [s, D], t[21] = s, t[22] = D, t[23] = O) : O = t[23], (0, X.useEffect)(ne, O);
    let ie = o.id,
        k;
    t[24] === n ? k = t[25] : (k = re(`min-w-0`, Ft.widget, n), t[24] = n, t[25] = k);
    let A = o.widget,
        j;
    t[26] === o ? j = t[27] : (j = Yt(o), t[26] = o, t[27] = j);
    let M, N;
    t[28] === b ? (M = t[29], N = t[30]) : (M = () => {
        m.current = !0, b()
    }, N = e => {
        e.scope === `root` && m.current && b()
    }, t[28] = b, t[29] = M, t[30] = N);
    let P;
    t[31] !== w || t[32] !== A || t[33] !== j || t[34] !== M || t[35] !== N ? (P = (0, Z.jsx)(vt, {
        widget: A,
        initialState: j,
        onAction: w,
        onInitialRenderCommit: M,
        onStateMutation: N,
        ref: c
    }), t[31] = w, t[32] = A, t[33] = j, t[34] = M, t[35] = N, t[36] = P) : P = t[36];
    let F;
    t[37] !== k || t[38] !== P ? (F = (0, Z.jsx)(`div`, {
        className: k,
        children: P
    }), t[37] = k, t[38] = P, t[39] = F) : F = t[39];
    let I;
    return t[40] !== F || t[41] !== o.id ? (I = (0, Z.jsx)(te, {
        name: `Mattress Widget`,
        children: F
    }, ie), t[40] = F, t[41] = o.id, t[42] = I) : I = t[42], I
}

function tn() {}

function nn(e) {
    "use forget";
    let t = (0, Y.c)(92),
        {
            hasLedgerConnections: n,
            isLedgerAccountFlowLoading: i,
            loadingOauthLinkId: a,
            variant: o,
            starterAnalytics: s,
            tab: c,
            onWidgetAction: l,
            className: u
        } = e,
        d = ue(),
        f = (0, X.useId)(),
        [p, m] = (0, X.useState)(!1),
        [h, ee] = (0, X.useState)(null),
        g = s?.financeSessionId,
        _ = s?.viewedCreditStarterSession,
        v, y;
    t[0] !== h || t[1] !== g || t[2] !== c || t[3] !== _ ? (v = () => {
        if (!(!h || !g || !_)) return be(h, () => {
            _.current !== g && (_.current = g, r.logStructuredEvent(`ChatgptFinanceComponentViewed`, {
                surfaceName: `home`,
                componentName: `starter_card`,
                componentId: Q,
                financeSessionId: g,
                tab: c
            }))
        })
    }, y = [h, g, c, _], t[0] = h, t[1] = g, t[2] = c, t[3] = _, t[4] = v, t[5] = y) : (v = t[4], y = t[5]), (0, X.useEffect)(v, y);
    let {
        sensitiveValuesHidden: b
    } = dt(), x;
    t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (x = {
        queryKey: ge,
        queryFn: fe,
        enabled: !1
    }, t[6] = x) : x = t[6];
    let S = F(x),
        C;
    t[7] === n ? C = t[8] : (C = Se(n), t[7] = n, t[8] = C);
    let w;
    t[9] !== S.data || t[10] !== o ? (w = () => o === `dashboard` ? tt(S.data ?? []) : void 0, t[9] = S.data, t[10] = o, t[11] = w) : w = t[11];
    let T = o === `dashboard`,
        E;
    t[12] !== C || t[13] !== w || t[14] !== T ? (E = {
        queryKey: C,
        initialPageParam: 0,
        queryFn: sn,
        getNextPageParam: on,
        refetchOnMount: `always`,
        refetchInterval: w,
        enabled: T
    }, t[12] = C, t[13] = w, t[14] = T, t[15] = E) : E = t[15];
    let D = se(E),
        O;
    t[16] === n ? O = t[17] : (O = [...Ie, `onboarding`, n], t[16] = n, t[17] = O);
    let ie = o === `onboarding`,
        k;
    t[18] !== O || t[19] !== ie ? (k = {
        queryKey: O,
        queryFn: ye,
        refetchOnMount: !0,
        enabled: ie
    }, t[18] = O, t[19] = ie, t[20] = k) : k = t[20];
    let A = F(k);
    D.data?.pages;
    let j;
    t[21] !== D.data?.pages || t[22] !== A.data || t[23] !== o ? (j = o === `dashboard` ? D.data?.pages.flatMap(an) ?? [] : A.data ?? [], t[21] = D.data?.pages, t[22] = A.data, t[23] = o, t[24] = j) : j = t[24];
    let M;
    t[25] !== b || t[26] !== j ? (M = lt(j, b), t[25] = b, t[26] = j, t[27] = M) : M = t[27];
    let N = Zt({
            widgets: M,
            variant: o
        }),
        I;
    t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (I = Be(), t[28] = I) : I = t[28];
    let L = I,
        ae;
    t[29] === Symbol.for(`react.memo_cache_sentinel`) ? (ae = je(), t[29] = ae) : ae = t[29];
    let oe = ae,
        ce;
    t[30] !== d.locale || t[31] !== b ? (ce = Te(d.locale, b), t[30] = d.locale, t[31] = b, t[32] = ce) : ce = t[32];
    let le = ce,
        R;
    t[33] === S.data ? R = t[34] : (R = S.data ?? [], t[33] = S.data, t[34] = R);
    let z;
    t[35] === R ? z = t[36] : (z = tt(R), t[35] = R, t[36] = z);
    let B = z != null,
        de, pe;
    t[37] !== le || t[38] !== o ? (de = () => {
        if (o !== `dashboard` || oe === 0) return;
        L.setContext(le);
        let e = Ne(),
            t = () => {
                L.setActive(Re(), oe)
            };
        return t(), document.addEventListener(`visibilitychange`, t), window.addEventListener(`online`, t), window.addEventListener(`offline`, t), e?.addEventListener(`change`, t), () => {
            document.removeEventListener(`visibilitychange`, t), window.removeEventListener(`online`, t), window.removeEventListener(`offline`, t), e?.removeEventListener(`change`, t), L.setActive(!1), window.location.pathname.startsWith(`/finances`) || L.endVisit()
        }
    }, pe = [le, oe, L, o], t[37] = le, t[38] = o, t[39] = de, t[40] = pe) : (de = t[39], pe = t[40]), (0, X.useEffect)(de, pe);
    let me, he;
    t[41] !== D.isFetching || t[42] !== B ? (me = () => {
        L.setPaused(B || D.isFetching)
    }, he = [L, B, D.isFetching], t[41] = D.isFetching, t[42] = B, t[43] = me, t[44] = he) : (me = t[43], he = t[44]), (0, X.useEffect)(me, he);
    let _e = o === `dashboard` ? D.isLoading : A.isLoading,
        ve = (0, X.useRef)(null),
        [xe, Ce] = (0, X.useState)(!1),
        [we, Ee] = (0, X.useState)(!1),
        De;
    t[45] === Symbol.for(`react.memo_cache_sentinel`) ? (De = () => {
        let e = ve.current;
        if (!e) return;
        let t = e.scrollWidth - e.clientWidth;
        Ce(e.scrollLeft > 1), Ee(e.scrollLeft < t - 1)
    }, t[45] = De) : De = t[45];
    let V = De,
        ke;
    t[46] === Symbol.for(`react.memo_cache_sentinel`) ? (ke = e => {
        let t = ve.current;
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
    }, t[46] = ke) : ke = t[46];
    let Ae = ke,
        Me;
    if (t[47] === o ? Me = t[48] : (Me = () => {
            if (o !== `onboarding`) return;
            let e = ve.current;
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
        }, t[47] = o, t[48] = Me), (0, X.useEffect)(Me, [V, o, N.length]), o === `onboarding` && n && p) return null;
    if (_e) {
        let e;
        return t[49] !== u || t[50] !== n || t[51] !== o ? (e = (0, Z.jsx)(cn, {
            hasLedgerConnections: n,
            variant: o,
            className: u
        }), t[49] = u, t[50] = n, t[51] = o, t[52] = e) : e = t[52], e
    }
    if (o === `dashboard`) {
        let e = Dt([...N].sort(rn));
        if (e.length === 0 && !D.hasNextPage && !D.isFetchingNextPage) {
            let e;
            return t[53] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Z.jsx)(ln, {}), t[53] = e) : e = t[53], e
        }
        let n;
        t[54] === u ? n = t[55] : (n = re(`flex flex-col gap-4`, u), t[54] = u, t[55] = n);
        let r;
        t[56] !== D.dataUpdatedAt || t[57] !== i || t[58] !== a || t[59] !== l ? (r = e => (0, Z.jsx)(`div`, {
            className: `grid grid-cols-1 gap-4 md:grid-cols-2`,
            children: e.items.map(e => (0, Z.jsx)(_n, {
                className: e.span === 2 ? `md:col-span-2` : void 0,
                isRepairLoading: i && e.widgetConfig.initial_state?.ledger_link_id === a,
                widgetConfig: e.widgetConfig,
                transactionPrefetchRevision: e.widgetConfig.id === `ledger_recent_transactions_widget` ? D.dataUpdatedAt : void 0,
                onWidgetAction: l
            }, qt(e.widgetConfig)))
        }, Jt(e)), t[56] = D.dataUpdatedAt, t[57] = i, t[58] = a, t[59] = l, t[60] = r) : r = t[60];
        let o;
        return t[61] !== D.fetchNextPage || t[62] !== D.hasNextPage || t[63] !== D.isFetchingNextPage ? (o = (0, Z.jsx)(Oe, {
            isFetchingNextPage: D.isFetchingNextPage,
            hasNextPage: D.hasNextPage,
            fetchNextPage: D.fetchNextPage,
            bgColor: `bg-transparent`,
            rootMargin: `0px 0px 20% 0px`
        }), t[61] = D.fetchNextPage, t[62] = D.hasNextPage, t[63] = D.isFetchingNextPage, t[64] = o) : o = t[64], (0, Z.jsxs)(`div`, {
            className: n,
            children: [e.map(r), o]
        })
    }
    if (N.length === 0) return null;
    let Pe = N.map(e => (0, Z.jsx)(te, {
            name: `Mattress Widget`,
            children: (0, Z.jsx)(`div`, {
                ref: e.id === `${gn}:${Q}` ? ee : void 0,
                className: re(`mattress-onboarding-widget-card h-[124px] min-w-0 shrink-0 snap-start sm:basis-[calc((100%-12px)/2)]`, N.length === 1 ? `basis-full` : `basis-[78%] lg:basis-[calc((100%-24px)/3)]`),
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
        ref: ve,
        className: `no-scrollbar flex w-full snap-x snap-mandatory items-stretch gap-3 overflow-x-auto pb-2`,
        "data-testid": `mattress-onboarding-widgets-grid`,
        children: Pe
    }), t[65] = Pe, t[66] = Fe);
    let Le = Fe,
        H;
    t[67] === u ? H = t[68] : (H = re(`flex w-full flex-col gap-4`, u), t[67] = u, t[68] = H);
    let ze;
    t[69] === Symbol.for(`react.memo_cache_sentinel`) ? (ze = (0, Z.jsx)(P, {
        ...$.onboardingSectionTitle
    }), t[69] = ze) : ze = t[69];
    let U;
    t[70] === f ? U = t[71] : (U = (0, Z.jsx)(`h2`, {
        id: f,
        className: `text-heading-3 text-token-text-primary font-medium`,
        children: ze
    }), t[70] = f, t[71] = U);
    let W;
    t[72] !== xe || t[73] !== we || t[74] !== n || t[75] !== d || t[76] !== Ae ? (W = n ? (0, Z.jsxs)(Z.Fragment, {
        children: [(0, Z.jsx)(`button`, {
            "aria-label": d.formatMessage($.previousOnboardingPage),
            className: `hover:bg-token-interactive-bg-tertiary-press bg-token-bg-primary border-token-border-heavy focus-visible:outline-token-border-strong hidden size-9 items-center justify-center rounded-full border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-30 sm:flex`,
            disabled: !xe,
            onClick: () => Ae(`back`),
            type: `button`,
            children: (0, Z.jsx)(He, {
                "aria-hidden": `true`,
                className: `icon-sm`
            })
        }), (0, Z.jsx)(`button`, {
            "aria-label": d.formatMessage($.nextOnboardingPage),
            className: `hover:bg-token-interactive-bg-tertiary-press bg-token-bg-primary border-token-border-heavy focus-visible:outline-token-border-strong hidden size-9 items-center justify-center rounded-full border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-30 sm:flex`,
            disabled: !we,
            onClick: () => Ae(`forward`),
            type: `button`,
            children: (0, Z.jsx)(Ge, {
                "aria-hidden": `true`,
                className: `icon-sm`
            })
        })]
    }) : null, t[72] = xe, t[73] = we, t[74] = n, t[75] = d, t[76] = Ae, t[77] = W) : W = t[77];
    let G;
    t[78] !== n || t[79] !== d ? (G = n ? (0, Z.jsx)(ne, {
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
    return t[87] !== Le || t[88] !== f || t[89] !== H || t[90] !== q ? (Ve = (0, Z.jsxs)(`section`, {
        "aria-labelledby": f,
        className: H,
        children: [q, Le]
    }), t[87] = Le, t[88] = f, t[89] = H, t[90] = q, t[91] = Ve) : Ve = t[91], Ve
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
    return _e({
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
            className: i
        } = e,
        a = r === `dashboard` ? `grid w-full self-stretch grid-cols-1 gap-4 md:grid-cols-2` : `no-scrollbar flex w-full snap-x snap-mandatory items-stretch gap-3 overflow-x-auto pb-2`,
        o = r === `onboarding` ? `h-[124px] min-w-0 shrink-0 basis-[78%] snap-start animate-pulse rounded-xl bg-gray-200 sm:basis-[calc((100%-12px)/2)] lg:basis-[calc((100%-24px)/3)] dark:bg-gray-700` : `h-32 w-full animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700`,
        s = r === `onboarding` ? n ? 4 : 1 : 2,
        c;
    t[0] !== i || t[1] !== a ? (c = re(a, i), t[0] = i, t[1] = a, t[2] = c) : c = t[2];
    let l;
    if (t[3] !== o || t[4] !== s) {
        let e;
        t[6] === o ? e = t[7] : (e = (e, t) => (0, Z.jsx)(`div`, {
            className: o,
            "data-testid": `mattress-widgets-loading-card`
        }, t), t[6] = o, t[7] = e), l = Array.from({
            length: s
        }, e), t[3] = o, t[4] = s, t[5] = l
    } else l = t[5];
    let u;
    return t[8] !== c || t[9] !== l ? (u = (0, Z.jsx)(`div`, {
        "aria-hidden": `true`,
        className: c,
        "data-testid": `mattress-widgets-loading-placeholder`,
        children: l
    }), t[8] = c, t[9] = l, t[10] = u) : u = t[10], u
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
    Y = R(), f(), Xe(), qe(), l(), v(), Ue(), We(), Le(), rt(), z(), at(), De(), Fe(), Ce(), et(), Ye(), ut(), Me(), Ot(), pt(), gt(), q(), jt(), Nt(), H(), de(), b(), _t(), T(), E(), s(), ve(), C(), u(), K(), m(), le(), X = t(ae()), L(), ie(), _(), It(), Z = k(), un = new Set([`open_entity_detail`, `open_url`]), dn = {
        open_entity_detail: nt.open_entity_detail,
        open_url: nt.open_url
    }, fn = `mattress_ledger_open_account_link`, pn = `ledger_add_account_prompt`, mn = `ledger_category_correction_prompt`, hn = `ledger_category_review_saved`, gn = `ledger_finance_onboarding_widget`, Q = `finance-onboarding-connect-credit`, $ = j({
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
//# sourceMappingURL=f19e94aa-fy844nfxeer0ix2z.js.map