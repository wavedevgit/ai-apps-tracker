const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/24fd10e2-dyxuc0hi40xaqb6z.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-nxpmzchfjvwqts17.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-m08q51xmfe7gjq3d.js", "assets/30901919-lgbmg5s09xld40kt.js", "assets/c470f5ab-hgik953cu5ujlhdm.js", "assets/0e5afe53-i4tqvmyg38miikw0.js", "assets/conversation-small-dtc7tvsx.css", "assets/c2675c8c-otyjprdiowg2v8hl.js", "assets/82782bc9-ca5kcqz13rn6iprj.js", "assets/8b34dbc2-n194ohawifys3bko.js", "assets/global-modals-dxg9ukpk.css", "assets/09231af0-jkll06crbu53ld3h.js", "assets/2f772deb-o1q2t5r785ofb9zp.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Aq as n,
    Cat as r,
    Int as i,
    Iv as a,
    LU as o,
    Mw as s,
    N1 as c,
    QJ as l,
    QZ as u,
    RZ as d,
    Rnt as f,
    Rv as p,
    Tat as m,
    Vq as h,
    ZW as g,
    _W as _,
    _c as v,
    bF as y,
    c7 as b,
    eY as x,
    jw as S,
    l7 as C,
    pc as w,
    q1 as T,
    qW as E,
    v1 as D,
    vF as O,
    vG as k,
    vW as A,
    y1 as j,
    zU as M
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as ee,
    G as N,
    Ln as P,
    N as F,
    Nn as I,
    Nt as L,
    O as R,
    Q as z,
    Rn as B,
    Vn as V,
    cn as te,
    jt as ne,
    l as re,
    ln as ie,
    s as ae,
    wn as H,
    zn as oe
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    A1 as se,
    Bbt as ce,
    Bkt as le,
    CAt as ue,
    CW as de,
    Dkt as fe,
    EW as pe,
    FTn as me,
    Hkt as he,
    Jkt as ge,
    LW as _e,
    Mkt as ve,
    NAt as ye,
    Nkt as be,
    OAt as xe,
    PTn as Se,
    Pwt as Ce,
    Rkt as we,
    SAt as Te,
    SW as U,
    TW as Ee,
    Xgn as De,
    Xkt as Oe,
    Zgn as ke,
    _W as Ae,
    bAt as je,
    dwt as Me,
    jW as W,
    k1 as Ne,
    lwt as G,
    mX as K,
    pW as q,
    pX as Pe,
    qkt as Fe,
    vAt as Ie,
    wW as J,
    xAt as Le,
    xW as Y,
    yAt as Re,
    zbt as ze
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    Hv as Be,
    TC as Ve,
    Uv as He,
    wC as Ue
} from "./30901919-lgbmg5s09xld40kt.js";
import {
    $o as We,
    Mm as Ge,
    as as Ke,
    es as qe,
    is as Je,
    jm as Ye,
    rs as Xe,
    ts as Ze
} from "./8b34dbc2-n194ohawifys3bko.js";
import {
    n as Qe,
    t as $e
} from "./4f866508-lwwle40ltedduaux.js";
import {
    i as et,
    n as tt
} from "./04f387fb-oulqx0rns6bfuggu.js";
import {
    c as nt,
    r as rt
} from "./fcf5f4da-m2640lkqt2mr4cfw.js";
import {
    i as it,
    n as at
} from "./a81eda00-d20jvwsf6m8ygnfm.js";
import {
    a as ot,
    i as st,
    o as ct,
    s as lt,
    t as ut
} from "./4cf35c7a-fuufw34ubkxvq703.js";
import {
    n as dt,
    r as ft
} from "./a84119fb-dceqrj0l5c6olmrw.js";
import {
    n as pt,
    t as mt
} from "./22f0e71d-hnpvkev5jjzai8iq.js";
import {
    n as ht,
    t as gt
} from "./c253861d-hgf6qy1re75z62i7.js";

function _t(e) {
    let t = new URLSearchParams(e).getAll(`credit_alert`);
    if (t.length === 0) return;
    let n = t[0];
    return t.length === 1 && n && xt.test(n) ? n : null
}

function vt() {
    try {
        let e = sessionStorage.getItem(bt);
        return e && xt.test(e) ? e : null
    } catch {
        return null
    }
}

function yt(e) {
    return _t(e) !== void 0 || vt() != null
}
var bt, xt, St = e((() => {
    bt = `finances.credit-alert.login`, xt = /^[A-Za-z0-9_-]{86}$/
}));

function Ct(e) {
    return e.span === 1 || e.span === 2 ? e.span : e.dashboard_placement === `half` ? 1 : 2
}

function wt(e, t) {
    return {
        widgetConfig: e,
        span: t
    }
}

function Tt(e) {
    let t = [],
        n = [...e];
    for (; n.length > 0;) {
        let e = n.shift();
        if (e == null) break;
        if (Ct(e) === 1) {
            let r = n.findIndex(e => Ct(e) === 1);
            if (r === -1) {
                t.push({
                    items: [wt(e, 2)]
                });
                continue
            }
            let [i] = n.splice(r, 1);
            t.push({
                items: [wt(e, 1), wt(i, 1)]
            });
            continue
        }
        t.push({
            items: [wt(e, 2)]
        })
    }
    return t
}
var Et = e((() => {}));

function Dt(e) {
    if (!Array.isArray(e.transactions)) return [];
    let t = e.sensitive_values_hidden !== !1;
    return e.transactions.slice(0, 10).flatMap(e => {
        if (typeof e != `object` || !e || Array.isArray(e)) return [];
        let n = e;
        return n.detail_sidebar_enabled !== !0 || typeof n.transaction_id != `string` || !n.transaction_id.trim() || typeof n.display_name != `string` || !n.display_name.trim() ? [] : [it({
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
async function Ot({
    store: e,
    state: t,
    clientThreadId: n,
    locale: r,
    isCurrent: i
}) {
    let a = e.getGeneration(),
        {
            createLedgerTransactionDetailRequest: o
        } = await te(async () => {
            let {
                createLedgerTransactionDetailRequest: e
            } = await import(`./24fd10e2-dyxuc0hi40xaqb6z.js`).then(e => (e.t(), e.a));
            return {
                createLedgerTransactionDetailRequest: e
            }
        }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));
    if (!i() || e.getGeneration() !== a) return;
    let s = Dt(t).flatMap(e => {
        let t = o({
            clientThreadId: n,
            conversationId: l(n) ?? n,
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
var kt = e((() => {
    at(), x(), ie()
}));

function At({
    cardId: e,
    conversation: t,
    navigate: n,
    prompt: r
}) {
    let i = c(),
        a = i?.normalizedAccountUserId;
    if (!g() || !i || !a || !t || !r.trim()) return !1;
    let o = W(r, {
        accountId: i.id,
        accountUserId: a
    }, {
        starter_prompt_id: e,
        suggestion_type: D.Starter
    });
    return v({
        conversation: t,
        nextMode: k.TPP
    }), ke(n, {
        params: new URLSearchParams({
            surface: `work`
        }),
        state: o
    }), !0
}
var jt = e((() => {
        j(), De(), T(), w(), E(), _e()
    })),
    Mt, Nt, Pt = e((() => {
        Mt = `_9X9NtG_widget`, Nt = {
            widget: Mt
        }
    }));

function Ft(e) {
    return !e.id || typeof e.id != `string` || !It(e.widget) ? !1 : e.widget.type.length > 0
}

function It(e) {
    return e == null || Array.isArray(e) || typeof e != `object` || !(`type` in e) ? !1 : typeof e.type == `string`
}

function X(e) {
    return typeof e == `object` && !!e && !Array.isArray(e)
}

function Lt(e) {
    let t = e?.ledger_link_id;
    return typeof t == `string` ? t : void 0
}

function Rt(e) {
    return Array.isArray(e) ? e.filter(e => typeof e == `string`) : []
}

function zt(e) {
    if (!X(e)) return null;
    let t = typeof e.transaction_id == `string` ? e.transaction_id.trim() : ``,
        n = typeof e.target_primary_category == `string` ? e.target_primary_category.trim() : ``;
    return !t || !n ? null : {
        transaction_id: t,
        target_primary_category: n
    }
}

function Bt(e) {
    if (!X(e) || !Array.isArray(e.corrections)) return null;
    let t = [];
    for (let n of e.corrections) {
        let e = zt(n);
        if (!e) return null;
        t.push(e)
    }
    return t
}

function Vt(e) {
    return X(e) ? e.kind === mn && Array.isArray(e.transactionIds) && e.transactionIds.every(e => typeof e == `string`) : !1
}

function Ht(e, t) {
    if (!e) return;
    let n = e.getState();
    if (!n || !Array.isArray(n.transactions)) return;
    let r = new Set(t),
        i = n.transactions.filter(e => {
            if (!X(e)) return !0;
            let t = typeof e.id == `string` ? e.id : void 0;
            return t == null || !r.has(t)
        });
    e.setState({
        transactions: i
    }, !1)
}

function Ut(e) {
    return e.id.startsWith(hn)
}

function Wt(e) {
    let t = e.initial_state;
    if (t == null) return null;
    let n = {
        ...t
    };
    return delete n[ut], Object.keys(n).length === 0 ? null : n
}

function Gt(e) {
    return N([e.id, e.widget, Wt(e)])
}

function Kt(e) {
    return e.items.map(e => Gt(e.widgetConfig)).join(`:`)
}

function qt(e) {
    return e.initial_state ?? void 0
}

function Jt(e) {
    let t = e.initial_state?.[ut];
    return typeof t == `boolean` ? t : void 0
}

function Yt({
    widgets: e,
    variant: t
}) {
    return e.filter(e => Ft(e) ? t === `dashboard` ? !Ut(e) : Ut(e) : !1)
}

function Xt(e) {
    "use forget";
    let t = (0, cn.c)(9),
        {
            hasLedgerConnections: n,
            variant: r,
            starterAnalytics: i,
            className: a
        } = e,
        o = r === void 0 ? `onboarding` : r,
        s = ne(`/finances/:tab`)?.params.tab ?? `dashboard`,
        {
            isLedgerAccountFlowLoading: c,
            loadingOauthLinkId: l,
            onWidgetAction: u
        } = Zt(y(), i?.financeSessionId, s),
        d;
    return t[0] !== a || t[1] !== n || t[2] !== c || t[3] !== l || t[4] !== u || t[5] !== i || t[6] !== s || t[7] !== o ? (d = (0, Q.jsx)(en, {
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

function Zt(e, t, n) {
    "use no forget";
    let a = L(),
        o = (0, Z.useRef)(!1),
        s = F(),
        c = M(),
        {
            isLoading: l,
            loadingOauthLinkId: u,
            open: f
        } = ft(),
        m = Ke({
            skipPostConnectExperience: !0,
            productSku: Se.CONNECTOR_SETTING,
            canReuseLink: p,
            resolveDirectNoAuthConnector: Ze
        }),
        g = oe(),
        {
            sensitiveValuesHidden: _,
            setSensitiveValuesHidden: v
        } = lt(),
        y = (0, Z.useCallback)(async () => (s.getQueryData(ve) ?? await s.fetchQuery({
            queryKey: ve,
            queryFn: le
        }) ?? []).find(Oe)?.id, [s]),
        b = (0, Z.useCallback)(async t => {
            if (!(!e || !f)) try {
                f({
                    autoStartOauthLinkId: t ?? await y(),
                    trackingContext: {
                        entryPoint: `widget`
                    }
                })
            } catch (e) {
                c.danger(g.formatMessage($.connectAccountErrorToast), {
                    error: e
                })
            }
        }, [e, y, g, f, c]),
        x = (0, Z.useCallback)(t => {
            pt({
                ...t,
                conversation: e,
                sensitiveValuesHidden: _
            })
        }, [e, _]),
        S = (0, Z.useCallback)(() => {
            s.invalidateQueries({
                queryKey: fe
            })
        }, [s]);
    return {
        isLedgerAccountFlowLoading: l,
        loadingOauthLinkId: u,
        onWidgetAction: (0, Z.useCallback)(async ({
            type: l,
            payload: u
        }) => {
            if (l === dn) {
                if (!X(u)) return;
                let e = typeof u.ledger_link_id == `string` ? u.ledger_link_id : void 0;
                await b(e);
                return
            }
            if (l === `ledger_set_sensitive_values_hidden`) {
                let e = ot(u);
                if (e == null) return;
                v(e);
                return
            }
            if (l === `ledger_category_review_save`) {
                let e = Bt(u);
                if (!e || e.length === 0) return;
                try {
                    if ((await Me({
                            actionType: l,
                            payload: {
                                corrections: e
                            },
                            toaster: c
                        })).status !== `success`) {
                        c.danger(g.formatMessage($.categoryReviewSaveErrorToast));
                        return
                    }
                    return {
                        kind: mn,
                        transactionIds: e.map(e => e.transaction_id)
                    }
                } catch (e) {
                    c.danger(g.formatMessage($.categoryReviewSaveErrorToast), {
                        error: e
                    });
                    return
                }
            }
            if (l === `open_entity_detail` && X(u) && u.category === fn) {
                let e = X(u.extraParams) ? u.extraParams : void 0;
                if (Ee(e)) {
                    await b(Lt(e));
                    return
                }
                l = Y, u = {
                    card_id: e?.card_id,
                    prompt: u.query,
                    system_hint: e?.system_hint
                }
            }
            if (l === `open_entity_detail` && X(u) && u.category === pn) {
                let t = X(u.extraParams) ? u.extraParams : void 0,
                    n = typeof u.query == `string` ? u.query : void 0,
                    r = Rt(t?.transaction_ids);
                if (!n || !e) return;
                let i = typeof t?.card_id == `string` ? t.card_id : `ledger-low-confidence-category-correction`,
                    a = typeof t?.system_hint == `string` ? h(t.system_hint) ?? xe : xe,
                    {
                        extraStreamParams: o,
                        systemHints: s
                    } = ze(a ? [a] : []);
                await Ge({
                    callsiteId: `request_completion.mattress.ledger_category_correction_widget.1`,
                    conversation: e,
                    promptMessage: d(n, {
                        starter_prompt_id: i,
                        suggestion_type: D.Starter,
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
            if (l !== `mattress_onboarding_card_click`) {
                if (!l || !ln.has(l)) return;
                await nt({
                    actionType: l,
                    payload: X(u) ? u : void 0,
                    context: {
                        openEntitySidebar: x
                    },
                    library: un
                });
                return
            }
            if (!X(u)) return;
            let p = typeof u.card_id == `string` ? u.card_id : void 0;
            if (!p) return;
            let _ = u.action;
            if (_ != null) return !de(_) || !f ? void 0 : (r.addAction(`finance-landing-page.onboarding-card-click`, {
                cardId: p
            }), new Promise(e => {
                let r = f({
                    destination: _.destination,
                    trackingContext: {
                        entryPoint: `widget`,
                        ...p === gn ? {
                            entrypoint: `starter_prompt`
                        } : {}
                    },
                    onSettled: e
                });
                r && t && p === gn && i.logStructuredEvent(`ChatgptFinanceComponentInteraction`, {
                    surfaceName: `home`,
                    componentName: `starter_card`,
                    componentId: gn,
                    financeSessionId: t,
                    tab: n,
                    action: `clicked`
                }), r || e()
            }));
            if (u.thread_mode === `work`) {
                if (typeof u.prompt != `string` || o.current) return;
                o.current = At({
                    cardId: p,
                    conversation: e,
                    navigate: a,
                    prompt: u.prompt
                });
                return
            }
            if (J(p)) return r.addAction(`finance-landing-page.onboarding-card-click`, {
                cardId: p
            }), f ? new Promise(e => {
                We({
                    accountLinkingContext: {
                        source: `widget`
                    },
                    createLedgerConnectorLink: m,
                    ensurePluginEnabled: !0,
                    navigate: a,
                    onConversationReady: S,
                    prompt: g.formatMessage(Ae),
                    queryClient: s,
                    startLedgerAccountFlow: t => f({
                        ...t,
                        onSettled: e
                    })
                }) || e()
            }) : void 0;
            if (pe(p)) {
                await b();
                return
            }
            let y = typeof u.prompt == `string` ? u.prompt : void 0,
                C = typeof u.system_hint == `string` ? h(u.system_hint) : void 0;
            y && (r.addAction(`finance-landing-page.onboarding-card-click`, {
                cardId: p
            }), e && (await Xe({
                cardId: p,
                conversation: e,
                prompt: y,
                systemHint: C
            }), S()))
        }, [e, m, t, S, g, a, x, b, f, s, v, n, c])
    }
}

function Qt(e) {
    "use forget";
    let t = (0, cn.c)(43),
        {
            className: n,
            isRepairLoading: r,
            transactionPrefetchRevision: i,
            onWidgetAction: a,
            widgetConfig: o
        } = e,
        s = r !== void 0 && r,
        c = (0, Z.useRef)(null),
        l;
    t[0] === o ? l = t[1] : (l = Jt(o), t[0] = o, t[1] = l);
    let u = l,
        d = y(),
        f = oe(),
        p = (0, Z.useRef)(!1),
        m = (0, Z.useRef)(!1),
        h;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (h = Te(), t[2] = h) : h = t[2];
    let g = h,
        v;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (v = je(), t[3] = v) : v = t[3];
    let x = v,
        S;
    t[4] !== d || t[5] !== f.locale || t[6] !== u || t[7] !== i || t[8] !== o.id ? (S = () => {
        if (x === 0 || i === 0 || !d || o.id !== `ledger_recent_transactions_widget`) return;
        let e = c.current?.getState();
        if (!e) return;
        let t = {
            ...e,
            sensitive_values_hidden: u ?? e.sensitive_values_hidden
        };
        g.setContext(Le(f.locale, t.sensitive_values_hidden)), Ot({
            store: g,
            state: t,
            clientThreadId: d.id,
            locale: f.locale,
            isCurrent: () => p.current
        }).catch($t)
    }, t[4] = d, t[5] = f.locale, t[6] = u, t[7] = i, t[8] = o.id, t[9] = S) : S = t[9];
    let C = S,
        w, T;
    t[10] === C ? (w = t[11], T = t[12]) : (w = () => (p.current = !0, m.current && C(), () => {
        p.current = !1
    }), T = [C], t[10] = C, t[11] = w, t[12] = T), (0, Z.useEffect)(w, T);
    let E;
    t[13] === a ? E = t[14] : (E = async (e, t) => {
        let n = await a?.(e, t);
        return Vt(n) && Ht(c.current, n.transactionIds), n
    }, t[13] = a, t[14] = E);
    let D = E,
        O, k;
    t[15] === u ? (O = t[16], k = t[17]) : (k = () => {
        u != null && c.current?.setState({
            [ut]: u
        }, !1)
    }, O = [u], t[15] = u, t[16] = O, t[17] = k), (0, Z.useEffect)(k, O);
    let A;
    t[18] !== s || t[19] !== o.initial_state?.ledger_link_id ? (A = () => {
        typeof o.initial_state?.ledger_link_id == `string` && c.current?.setState({
            ledger_repair_initializing: s
        }, !1)
    }, t[18] = s, t[19] = o.initial_state?.ledger_link_id, t[20] = A) : A = t[20];
    let j = o.initial_state?.ledger_link_id,
        M;
    t[21] !== s || t[22] !== j ? (M = [s, j], t[21] = s, t[22] = j, t[23] = M) : M = t[23], (0, Z.useEffect)(A, M);
    let ee = o.id,
        N;
    t[24] === n ? N = t[25] : (N = b(`min-w-0`, Nt.widget, n), t[24] = n, t[25] = N);
    let P = o.widget,
        F;
    t[26] === o ? F = t[27] : (F = qt(o), t[26] = o, t[27] = F);
    let I, L;
    t[28] === C ? (I = t[29], L = t[30]) : (I = () => {
        m.current = !0, C()
    }, L = e => {
        e.scope === `root` && m.current && C()
    }, t[28] = C, t[29] = I, t[30] = L);
    let R;
    t[31] !== D || t[32] !== P || t[33] !== F || t[34] !== I || t[35] !== L ? (R = (0, Q.jsx)(gt, {
        widget: P,
        initialState: F,
        onAction: D,
        onInitialRenderCommit: I,
        onStateMutation: L,
        ref: c
    }), t[31] = D, t[32] = P, t[33] = F, t[34] = I, t[35] = L, t[36] = R) : R = t[36];
    let z;
    t[37] !== N || t[38] !== R ? (z = (0, Q.jsx)(`div`, {
        className: N,
        children: R
    }), t[37] = N, t[38] = R, t[39] = z) : z = t[39];
    let B;
    return t[40] !== z || t[41] !== o.id ? (B = (0, Q.jsx)(_, {
        name: `Mattress Widget`,
        children: z
    }, ee), t[40] = z, t[41] = o.id, t[42] = B) : B = t[42], B
}

function $t() {}

function en(e) {
    "use forget";
    let t = (0, cn.c)(92),
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
        d = oe(),
        f = (0, Z.useId)(),
        [p, m] = (0, Z.useState)(!1),
        [h, g] = (0, Z.useState)(null),
        v = s?.financeSessionId,
        y = s?.viewedCreditStarterSession,
        x, C;
    t[0] !== h || t[1] !== v || t[2] !== c || t[3] !== y ? (x = () => {
        if (!(!h || !v || !y)) return se(h, () => {
            y.current !== v && (y.current = v, i.logStructuredEvent(`ChatgptFinanceComponentViewed`, {
                surfaceName: `home`,
                componentName: `starter_card`,
                componentId: gn,
                financeSessionId: v,
                tab: c
            }))
        })
    }, C = [h, v, c, y], t[0] = h, t[1] = v, t[2] = c, t[3] = y, t[4] = x, t[5] = C) : (x = t[4], C = t[5]), (0, Z.useEffect)(x, C);
    let {
        sensitiveValuesHidden: w
    } = lt(), T;
    t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (T = {
        queryKey: ve,
        queryFn: le,
        enabled: !1
    }, t[6] = T) : T = t[6];
    let E = R(T),
        D;
    t[7] === n ? D = t[8] : (D = Fe(n), t[7] = n, t[8] = D);
    let O;
    t[9] !== E.data || t[10] !== o ? (O = () => o === `dashboard` ? $e(E.data ?? []) : void 0, t[9] = E.data, t[10] = o, t[11] = O) : O = t[11];
    let k = o === `dashboard`,
        A;
    t[12] !== D || t[13] !== O || t[14] !== k ? (A = {
        queryKey: D,
        initialPageParam: 0,
        queryFn: an,
        getNextPageParam: rn,
        refetchOnMount: `always`,
        refetchInterval: O,
        enabled: k
    }, t[12] = D, t[13] = O, t[14] = k, t[15] = A) : A = t[15];
    let j = re(A),
        M;
    t[16] === n ? M = t[17] : (M = [...be, `onboarding`, n], t[16] = n, t[17] = M);
    let ee = o === `onboarding`,
        N;
    t[18] !== M || t[19] !== ee ? (N = {
        queryKey: M,
        queryFn: he,
        refetchOnMount: !0,
        enabled: ee
    }, t[18] = M, t[19] = ee, t[20] = N) : N = t[20];
    let P = R(N);
    j.data?.pages;
    let F;
    t[21] !== j.data?.pages || t[22] !== P.data || t[23] !== o ? (F = o === `dashboard` ? j.data?.pages.flatMap(nn) ?? [] : P.data ?? [], t[21] = j.data?.pages, t[22] = P.data, t[23] = o, t[24] = F) : F = t[24];
    let L;
    t[25] !== w || t[26] !== F ? (L = st(F, w), t[25] = w, t[26] = F, t[27] = L) : L = t[27];
    let z = Yt({
            widgets: L,
            variant: o
        }),
        B;
    t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (B = Te(), t[28] = B) : B = t[28];
    let V = B,
        te;
    t[29] === Symbol.for(`react.memo_cache_sentinel`) ? (te = je(), t[29] = te) : te = t[29];
    let ne = te,
        ie;
    t[30] !== d.locale || t[31] !== w ? (ie = Le(d.locale, w), t[30] = d.locale, t[31] = w, t[32] = ie) : ie = t[32];
    let ae = ie,
        H;
    t[33] === E.data ? H = t[34] : (H = E.data ?? [], t[33] = E.data, t[34] = H);
    let ce;
    t[35] === H ? ce = t[36] : (ce = $e(H), t[35] = H, t[36] = ce);
    let ue = ce != null,
        de, fe;
    t[37] !== ae || t[38] !== o ? (de = () => {
        if (o !== `dashboard` || ne === 0) return;
        V.setContext(ae);
        let e = Re(),
            t = () => {
                V.setActive(Ie(), ne)
            };
        return t(), document.addEventListener(`visibilitychange`, t), window.addEventListener(`online`, t), window.addEventListener(`offline`, t), e?.addEventListener(`change`, t), () => {
            document.removeEventListener(`visibilitychange`, t), window.removeEventListener(`online`, t), window.removeEventListener(`offline`, t), e?.removeEventListener(`change`, t), V.setActive(!1), window.location.pathname.startsWith(`/finances`) || V.endVisit()
        }
    }, fe = [ae, ne, V, o], t[37] = ae, t[38] = o, t[39] = de, t[40] = fe) : (de = t[39], fe = t[40]), (0, Z.useEffect)(de, fe);
    let pe, me;
    t[41] !== j.isFetching || t[42] !== ue ? (pe = () => {
        V.setPaused(ue || j.isFetching)
    }, me = [V, ue, j.isFetching], t[41] = j.isFetching, t[42] = ue, t[43] = pe, t[44] = me) : (pe = t[43], me = t[44]), (0, Z.useEffect)(pe, me);
    let ge = o === `dashboard` ? j.isLoading : P.isLoading,
        _e = (0, Z.useRef)(null),
        [ye, xe] = (0, Z.useState)(!1),
        [Se, Ce] = (0, Z.useState)(!1),
        we;
    t[45] === Symbol.for(`react.memo_cache_sentinel`) ? (we = () => {
        let e = _e.current;
        if (!e) return;
        let t = e.scrollWidth - e.clientWidth;
        xe(e.scrollLeft > 1), Ce(e.scrollLeft < t - 1)
    }, t[45] = we) : we = t[45];
    let U = we,
        Ee;
    t[46] === Symbol.for(`react.memo_cache_sentinel`) ? (Ee = e => {
        let t = _e.current;
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
    }, t[46] = Ee) : Ee = t[46];
    let De = Ee,
        Oe;
    if (t[47] === o ? Oe = t[48] : (Oe = () => {
            if (o !== `onboarding`) return;
            let e = _e.current;
            if (!e) return;
            U();
            let t = requestAnimationFrame(U);
            e.addEventListener(`scroll`, U, {
                passive: !0
            });
            let n = typeof ResizeObserver > `u` ? null : new ResizeObserver(U);
            return n?.observe(e), () => {
                cancelAnimationFrame(t), e.removeEventListener(`scroll`, U), n?.disconnect()
            }
        }, t[47] = o, t[48] = Oe), (0, Z.useEffect)(Oe, [U, o, z.length]), o === `onboarding` && n && p) return null;
    if (ge) {
        let e;
        return t[49] !== u || t[50] !== n || t[51] !== o ? (e = (0, Q.jsx)(on, {
            hasLedgerConnections: n,
            variant: o,
            className: u
        }), t[49] = u, t[50] = n, t[51] = o, t[52] = e) : e = t[52], e
    }
    if (o === `dashboard`) {
        let e = Tt([...z].sort(tn));
        if (e.length === 0 && !j.hasNextPage && !j.isFetchingNextPage) {
            let e;
            return t[53] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Q.jsx)(sn, {}), t[53] = e) : e = t[53], e
        }
        let n;
        t[54] === u ? n = t[55] : (n = b(`flex flex-col gap-4`, u), t[54] = u, t[55] = n);
        let i;
        t[56] !== j.dataUpdatedAt || t[57] !== r || t[58] !== a || t[59] !== l ? (i = e => (0, Q.jsx)(`div`, {
            className: `grid grid-cols-1 gap-4 md:grid-cols-2`,
            children: e.items.map(e => (0, Q.jsx)(_n, {
                className: e.span === 2 ? `md:col-span-2` : void 0,
                isRepairLoading: r && e.widgetConfig.initial_state?.ledger_link_id === a,
                widgetConfig: e.widgetConfig,
                transactionPrefetchRevision: e.widgetConfig.id === `ledger_recent_transactions_widget` ? j.dataUpdatedAt : void 0,
                onWidgetAction: l
            }, Gt(e.widgetConfig)))
        }, Kt(e)), t[56] = j.dataUpdatedAt, t[57] = r, t[58] = a, t[59] = l, t[60] = i) : i = t[60];
        let o;
        return t[61] !== j.fetchNextPage || t[62] !== j.hasNextPage || t[63] !== j.isFetchingNextPage ? (o = (0, Q.jsx)(Pe, {
            isFetchingNextPage: j.isFetchingNextPage,
            hasNextPage: j.hasNextPage,
            fetchNextPage: j.fetchNextPage,
            bgColor: `bg-transparent`,
            rootMargin: `0px 0px 20% 0px`
        }), t[61] = j.fetchNextPage, t[62] = j.hasNextPage, t[63] = j.isFetchingNextPage, t[64] = o) : o = t[64], (0, Q.jsxs)(`div`, {
            className: n,
            children: [e.map(i), o]
        })
    }
    if (z.length === 0) return null;
    let ke = z.map(e => (0, Q.jsx)(_, {
            name: `Mattress Widget`,
            children: (0, Q.jsx)(`div`, {
                ref: e.id === `${hn}:${gn}` ? g : void 0,
                className: b(`mattress-onboarding-widget-card h-[124px] min-w-0 shrink-0 snap-start sm:basis-[calc((100%-12px)/2)]`, z.length === 1 ? `basis-full` : `basis-[78%] lg:basis-[calc((100%-24px)/3)]`),
                "data-testid": `mattress-onboarding-widget-cell`,
                children: (0, Q.jsx)(gt, {
                    widget: e.widget,
                    initialState: qt(e),
                    onAction: l
                })
            })
        }, Gt(e))),
        Ae;
    t[65] === ke ? Ae = t[66] : (Ae = (0, Q.jsx)(`div`, {
        ref: _e,
        className: `no-scrollbar flex w-full snap-x snap-mandatory items-stretch gap-3 overflow-x-auto pb-2`,
        "data-testid": `mattress-onboarding-widgets-grid`,
        children: ke
    }), t[65] = ke, t[66] = Ae);
    let Me = Ae,
        W;
    t[67] === u ? W = t[68] : (W = b(`flex w-full flex-col gap-4`, u), t[67] = u, t[68] = W);
    let Ne;
    t[69] === Symbol.for(`react.memo_cache_sentinel`) ? (Ne = (0, Q.jsx)(I, {
        ...$.onboardingSectionTitle
    }), t[69] = Ne) : Ne = t[69];
    let G;
    t[70] === f ? G = t[71] : (G = (0, Q.jsx)(`h2`, {
        id: f,
        className: `text-heading-3 text-token-text-primary font-medium`,
        children: Ne
    }), t[70] = f, t[71] = G);
    let K;
    t[72] !== ye || t[73] !== Se || t[74] !== n || t[75] !== d || t[76] !== De ? (K = n ? (0, Q.jsxs)(Q.Fragment, {
        children: [(0, Q.jsx)(`button`, {
            "aria-label": d.formatMessage($.previousOnboardingPage),
            className: `hover:bg-token-interactive-bg-tertiary-press bg-token-bg-primary border-token-border-heavy focus-visible:outline-token-border-strong hidden size-9 items-center justify-center rounded-full border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-30 sm:flex`,
            disabled: !ye,
            onClick: () => De(`back`),
            type: `button`,
            children: (0, Q.jsx)(Be, {
                "aria-hidden": `true`,
                className: `icon-sm`
            })
        }), (0, Q.jsx)(`button`, {
            "aria-label": d.formatMessage($.nextOnboardingPage),
            className: `hover:bg-token-interactive-bg-tertiary-press bg-token-bg-primary border-token-border-heavy focus-visible:outline-token-border-strong hidden size-9 items-center justify-center rounded-full border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-30 sm:flex`,
            disabled: !Se,
            onClick: () => De(`forward`),
            type: `button`,
            children: (0, Q.jsx)(Ue, {
                "aria-hidden": `true`,
                className: `icon-sm`
            })
        })]
    }) : null, t[72] = ye, t[73] = Se, t[74] = n, t[75] = d, t[76] = De, t[77] = K) : K = t[77];
    let q;
    t[78] !== n || t[79] !== d ? (q = n ? (0, Q.jsx)(S, {
        "aria-label": d.formatMessage($.dismissOnboardingSection),
        className: `text-token-text-tertiary size-8 shrink-0`,
        onClick: () => {
            m(!0)
        }
    }) : null, t[78] = n, t[79] = d, t[80] = q) : q = t[80];
    let J;
    t[81] !== K || t[82] !== q ? (J = (0, Q.jsxs)(`div`, {
        className: `flex items-center gap-2`,
        children: [K, q]
    }), t[81] = K, t[82] = q, t[83] = J) : J = t[83];
    let Y;
    t[84] !== G || t[85] !== J ? (Y = (0, Q.jsxs)(`div`, {
        className: `flex items-center justify-between gap-3`,
        children: [G, J]
    }), t[84] = G, t[85] = J, t[86] = Y) : Y = t[86];
    let ze;
    return t[87] !== Me || t[88] !== f || t[89] !== W || t[90] !== Y ? (ze = (0, Q.jsxs)(`section`, {
        "aria-labelledby": f,
        className: W,
        children: [Y, Me]
    }), t[87] = Me, t[88] = f, t[89] = W, t[90] = Y, t[91] = ze) : ze = t[91], ze
}

function tn(e, t) {
    return (e.dashboard_rank ?? 2 ** 53 - 1) - (t.dashboard_rank ?? 2 ** 53 - 1)
}

function nn(e) {
    return e.widgets
}

function rn(e) {
    return e.dashboard_next_offset ?? void 0
}

function an(e) {
    let {
        pageParam: t
    } = e;
    return we({
        offset: typeof t == `number` ? t : 0,
        limit: 4
    })
}

function on(e) {
    "use forget";
    let t = (0, cn.c)(11),
        {
            hasLedgerConnections: n,
            variant: r,
            className: i
        } = e,
        a = r === `dashboard` ? `grid w-full self-stretch grid-cols-1 gap-4 md:grid-cols-2` : `no-scrollbar flex w-full snap-x snap-mandatory items-stretch gap-3 overflow-x-auto pb-2`,
        o = r === `onboarding` ? `h-[124px] min-w-0 shrink-0 basis-[78%] snap-start animate-pulse rounded-xl bg-gray-200 sm:basis-[calc((100%-12px)/2)] lg:basis-[calc((100%-24px)/3)] dark:bg-gray-700` : `h-32 w-full animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700`,
        s = r === `onboarding` ? n ? 4 : 1 : 2,
        c;
    t[0] !== i || t[1] !== a ? (c = b(a, i), t[0] = i, t[1] = a, t[2] = c) : c = t[2];
    let l;
    if (t[3] !== o || t[4] !== s) {
        let e;
        t[6] === o ? e = t[7] : (e = (e, t) => (0, Q.jsx)(`div`, {
            className: o,
            "data-testid": `mattress-widgets-loading-card`
        }, t), t[6] = o, t[7] = e), l = Array.from({
            length: s
        }, e), t[3] = o, t[4] = s, t[5] = l
    } else l = t[5];
    let u;
    return t[8] !== c || t[9] !== l ? (u = (0, Q.jsx)(`div`, {
        "aria-hidden": `true`,
        className: c,
        "data-testid": `mattress-widgets-loading-placeholder`,
        children: l
    }), t[8] = c, t[9] = l, t[10] = u) : u = t[10], u
}

function sn() {
    "use forget";
    let e = (0, cn.c)(2),
        t;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Q.jsx)(`p`, {
        className: `text-token-text-primary text-sm font-medium`,
        children: (0, Q.jsx)(I, {
            ...$.dashboardEmptyStateTitle
        })
    }), e[0] = t) : t = e[0];
    let n;
    return e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, Q.jsxs)(`div`, {
        className: `border-token-border-light bg-token-bg-primary rounded-2xl border px-6 py-10 text-center`,
        children: [t, (0, Q.jsx)(`p`, {
            className: `text-token-text-tertiary mt-2 text-sm`,
            children: (0, Q.jsx)(I, {
                ...$.dashboardEmptyStateDescription
            })
        })]
    }), e[1] = n) : n = e[1], n
}
var cn, Z, Q, ln, un, dn, fn, pn, mn, hn, gn, $, _n, vn = e((() => {
    cn = H(), j(), Je(), Ye(), O(), s(), He(), Ve(), K(), tt(), Ce(), rt(), G(), ye(), ge(), Qe(), qe(), ct(), U(), Et(), dt(), mt(), ue(), kt(), jt(), q(), me(), a(), ht(), n(), o(), f(), ce(), m(), A(), Ne(), u(), ae(), Z = t(V()), B(), z(), C(), Pt(), Q = ee(), ln = new Set([`open_entity_detail`, `open_url`]), un = {
        open_entity_detail: et.open_entity_detail,
        open_url: et.open_url
    }, dn = `mattress_ledger_open_account_link`, fn = `ledger_add_account_prompt`, pn = `ledger_category_correction_prompt`, mn = `ledger_category_review_saved`, hn = `ledger_finance_onboarding_widget`, gn = `finance-onboarding-connect-credit`, $ = P({
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
    }), _n = (0, Z.memo)(Qt, (e, t) => e.className === t.className && e.isRepairLoading === t.isRepairLoading && e.transactionPrefetchRevision === t.transactionPrefetchRevision && e.onWidgetAction === t.onWidgetAction && Jt(e.widgetConfig) === Jt(t.widgetConfig) && Gt(e.widgetConfig) === Gt(t.widgetConfig))
}));
export {
    St as a, yt as i, vn as n, _t as o, bt as r, vt as s, Xt as t
};
//# sourceMappingURL=f19e94aa-e8psv7joifhbxlhg.js.map