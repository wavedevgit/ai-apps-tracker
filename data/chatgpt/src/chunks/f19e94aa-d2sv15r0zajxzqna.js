const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/24fd10e2-bxrvd7wzvzgx6egy.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-qsuygr73qjc6rh65.js", "assets/2340486e-komxp8tzs51ny4jj.js", "assets/root-lelxp0l2.css", "assets/conversation-small-cawdu7il3ha6y70c.js", "assets/30901919-jory365vq6ym5crx.js", "assets/c470f5ab-in0lllrdrzeo67gs.js", "assets/0e5afe53-f9gmgfmgrr83ziw3.js", "assets/conversation-small-czggvj2v.css", "assets/c2675c8c-nxl2ic2ofk2vw70s.js", "assets/82782bc9-jj605vonxg0iyc7p.js", "assets/8b34dbc2-d4icgkio4i3wfm6q.js", "assets/global-modals-lv5n3ujm.css", "assets/09231af0-obbsb67b6cd011ss.js", "assets/2f772deb-f3scov9t3z9bxxzw.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $W as n,
    BZ as r,
    Ew as i,
    I1 as a,
    Iv as o,
    J5 as s,
    Mq as c,
    Pv as l,
    S1 as u,
    Tw as d,
    Uq as f,
    VU as p,
    YW as m,
    _nt as h,
    bG as g,
    bW as _,
    c1 as v,
    dc as y,
    eQ as b,
    eY as x,
    fF as S,
    hc as C,
    hnt as ee,
    iat as w,
    l1 as T,
    mF as te,
    nY as E,
    nat as D,
    q5 as ne,
    yW as re,
    zU as O
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    $ as ie,
    Bn as ae,
    G as k,
    Hn as A,
    Mt as j,
    N as M,
    O as N,
    Pn as P,
    Pt as F,
    Rn as I,
    Tn as L,
    Vn as oe,
    l as se,
    ln as ce,
    s as le,
    un as R,
    zn as z
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    Akt as ue,
    Bbt as de,
    Bkt as fe,
    C1 as pe,
    DW as me,
    EAt as B,
    Gkt as he,
    Ikt as ge,
    Jkt as _e,
    Kkt as ve,
    Mwt as ye,
    PW as be,
    Rkt as xe,
    SW as Se,
    Tkt as Ce,
    _At as we,
    _W as Te,
    aTn as Ee,
    bAt as De,
    bW as V,
    dX as Oe,
    gAt as ke,
    hgn as Ae,
    iTn as je,
    jAt as Me,
    jkt as Ne,
    lW as Pe,
    lwt as Fe,
    mgn as H,
    pW as Ie,
    swt as U,
    uX as Le,
    vAt as Re,
    vW as W,
    w1 as ze,
    xAt as G,
    xW as K,
    yAt as Be,
    yW as q,
    zbt as Ve
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    Hv as He,
    TC as Ue,
    Uv as We,
    wC as Ge
} from "./30901919-jory365vq6ym5crx.js";
import {
    $o as Ke,
    Om as qe,
    as as Je,
    es as Ye,
    is as Xe,
    km as Ze,
    rs as Qe,
    ts as $e
} from "./8b34dbc2-d4icgkio4i3wfm6q.js";
import {
    n as et,
    t as tt
} from "./4f866508-gm32302vy1rviel5.js";
import {
    i as nt,
    n as rt
} from "./04f387fb-duiptcsi88d7x300.js";
import {
    c as it,
    r as at
} from "./fcf5f4da-m2640lkqt2mr4cfw.js";
import {
    i as ot,
    n as st
} from "./a81eda00-ot6y8uo50czwe2c7.js";
import {
    a as ct,
    i as lt,
    o as ut,
    s as dt,
    t as ft
} from "./4cf35c7a-agd3kz164bjzljfz.js";
import {
    n as pt,
    r as mt
} from "./a84119fb-hruy0jbony4v8z5j.js";
import {
    n as ht,
    t as gt
} from "./22f0e71d-hu5jhtrpbe57duel.js";
import {
    n as _t,
    t as vt
} from "./c253861d-jhkxyqmckvgqydgj.js";

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
        } = await ce(async () => {
            let {
                createLedgerTransactionDetailRequest: e
            } = await import(`./24fd10e2-bxrvd7wzvzgx6egy.js`).then(e => (e.t(), e.a));
            return {
                createLedgerTransactionDetailRequest: e
            }
        }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));
    if (!i() || e.getGeneration() !== a) return;
    let s = kt(t).flatMap(e => {
        let t = o({
            clientThreadId: n,
            conversationId: x(n) ?? n,
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
    st(), E(), R()
}));

function Mt({
    cardId: e,
    conversation: t,
    navigate: r,
    prompt: i
}) {
    let a = u(),
        o = a?.normalizedAccountUserId;
    if (!n() || !a || !o || !t || !i.trim()) return !1;
    let s = me(i, {
        accountId: a.id,
        accountUserId: o
    }, {
        starter_prompt_id: e,
        suggestion_type: v.Starter
    });
    return C({
        conversation: t,
        nextMode: g.TPP
    }), Ae(r, {
        params: new URLSearchParams({
            surface: `work`
        }),
        state: s
    }), !0
}
var Nt = e((() => {
        T(), H(), a(), y(), m(), be()
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
    return k([e.id, e.widget, Kt(e)])
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
        s = j(`/finances/:tab`)?.params.tab ?? `dashboard`,
        {
            isLedgerAccountFlowLoading: c,
            loadingOauthLinkId: l,
            onWidgetAction: u
        } = $t(te(), i?.financeSessionId, s),
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
    let i = F(),
        a = (0, X.useRef)(!1),
        s = M(),
        c = p(),
        {
            isLoading: l,
            loadingOauthLinkId: u,
            open: d
        } = mt(),
        m = Je({
            skipPostConnectExperience: !0,
            productSku: je.CONNECTOR_SETTING,
            canReuseLink: o,
            resolveDirectNoAuthConnector: $e
        }),
        h = ae(),
        {
            sensitiveValuesHidden: g,
            setSensitiveValuesHidden: _
        } = dt(),
        y = (0, X.useCallback)(async () => (s.getQueryData(ue) ?? await s.fetchQuery({
            queryKey: ue,
            queryFn: xe
        }) ?? []).find(_e)?.id, [s]),
        b = (0, X.useCallback)(async t => {
            if (!(!e || !d)) try {
                d({
                    autoStartOauthLinkId: t ?? await y(),
                    trackingContext: {
                        entryPoint: `widget`
                    }
                })
            } catch (e) {
                c.danger(h.formatMessage($.connectAccountErrorToast), {
                    error: e
                })
            }
        }, [e, y, h, d, c]),
        x = (0, X.useCallback)(t => {
            ht({
                ...t,
                conversation: e,
                sensitiveValuesHidden: g
            })
        }, [e, g]),
        S = (0, X.useCallback)(() => {
            s.invalidateQueries({
                queryKey: Ce
            })
        }, [s]);
    return {
        isLedgerAccountFlowLoading: l,
        loadingOauthLinkId: u,
        onWidgetAction: (0, X.useCallback)(async ({
            type: o,
            payload: l
        }) => {
            if (o === fn) {
                if (!J(l)) return;
                let e = typeof l.ledger_link_id == `string` ? l.ledger_link_id : void 0;
                await b(e);
                return
            }
            if (o === `ledger_set_sensitive_values_hidden`) {
                let e = ct(l);
                if (e == null) return;
                _(e);
                return
            }
            if (o === `ledger_category_review_save`) {
                let e = Ht(l);
                if (!e || e.length === 0) return;
                try {
                    if ((await Fe({
                            actionType: o,
                            payload: {
                                corrections: e
                            },
                            toaster: c
                        })).status !== `success`) {
                        c.danger(h.formatMessage($.categoryReviewSaveErrorToast));
                        return
                    }
                    return {
                        kind: hn,
                        transactionIds: e.map(e => e.transaction_id)
                    }
                } catch (e) {
                    c.danger(h.formatMessage($.categoryReviewSaveErrorToast), {
                        error: e
                    });
                    return
                }
            }
            if (o === `open_entity_detail` && J(l) && l.category === pn) {
                let e = J(l.extraParams) ? l.extraParams : void 0;
                if (K(e)) {
                    await b(zt(e));
                    return
                }
                o = Te, l = {
                    card_id: e?.card_id,
                    prompt: l.query,
                    system_hint: e?.system_hint
                }
            }
            if (o === `open_entity_detail` && J(l) && l.category === mn) {
                let t = J(l.extraParams) ? l.extraParams : void 0,
                    n = typeof l.query == `string` ? l.query : void 0,
                    i = Bt(t?.transaction_ids);
                if (!n || !e) return;
                let a = typeof t?.card_id == `string` ? t.card_id : `ledger-low-confidence-category-correction`,
                    o = typeof t?.system_hint == `string` ? f(t.system_hint) ?? B : B,
                    {
                        extraStreamParams: s,
                        systemHints: c
                    } = Ve(o ? [o] : []);
                await Ze({
                    callsiteId: `request_completion.mattress.ledger_category_correction_widget.1`,
                    conversation: e,
                    promptMessage: r(n, {
                        starter_prompt_id: a,
                        suggestion_type: v.Starter,
                        ...i.length > 0 ? {
                            ledger_transaction_ids: i
                        } : {},
                        ...c.length > 0 ? {
                            system_hints: c
                        } : {}
                    }),
                    eventSource: `mouse`,
                    extraStreamParams: s
                });
                return
            }
            if (o !== `mattress_onboarding_card_click`) {
                if (!o || !un.has(o)) return;
                await it({
                    actionType: o,
                    payload: J(l) ? l : void 0,
                    context: {
                        openEntitySidebar: x
                    },
                    library: dn
                });
                return
            }
            if (!J(l)) return;
            let u = typeof l.card_id == `string` ? l.card_id : void 0;
            if (!u) return;
            let p = l.action;
            if (p != null) return !q(p) || !d ? void 0 : (D.addAction(`finance-landing-page.onboarding-card-click`, {
                cardId: u
            }), new Promise(e => {
                let r = d({
                    destination: p.destination,
                    trackingContext: {
                        entryPoint: `widget`,
                        ...u === Q ? {
                            entrypoint: `starter_prompt`
                        } : {}
                    },
                    onSettled: e
                });
                r && t && u === Q && ee.logStructuredEvent(`ChatgptFinanceComponentInteraction`, {
                    surfaceName: `home`,
                    componentName: `starter_card`,
                    componentId: Q,
                    financeSessionId: t,
                    tab: n,
                    action: `clicked`
                }), r || e()
            }));
            if (l.thread_mode === `work`) {
                if (typeof l.prompt != `string` || a.current) return;
                a.current = Mt({
                    cardId: u,
                    conversation: e,
                    navigate: i,
                    prompt: l.prompt
                });
                return
            }
            if (V(u)) return D.addAction(`finance-landing-page.onboarding-card-click`, {
                cardId: u
            }), d ? new Promise(e => {
                Ke({
                    accountLinkingContext: {
                        source: `widget`
                    },
                    createLedgerConnectorLink: m,
                    ensurePluginEnabled: !0,
                    navigate: i,
                    onConversationReady: S,
                    prompt: h.formatMessage(Ie),
                    queryClient: s,
                    startLedgerAccountFlow: t => d({
                        ...t,
                        onSettled: e
                    })
                }) || e()
            }) : void 0;
            if (Se(u)) {
                await b();
                return
            }
            let g = typeof l.prompt == `string` ? l.prompt : void 0,
                y = typeof l.system_hint == `string` ? f(l.system_hint) : void 0;
            g && (D.addAction(`finance-landing-page.onboarding-card-click`, {
                cardId: u
            }), e && (await Qe({
                cardId: u,
                conversation: e,
                prompt: g,
                systemHint: y
            }), S()))
        }, [e, m, t, S, h, i, x, b, d, s, _, n, c])
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
        d = te(),
        f = ae(),
        p = (0, X.useRef)(!1),
        m = (0, X.useRef)(!1),
        h;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (h = De(), t[2] = h) : h = t[2];
    let g = h,
        _;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = Re(), t[3] = _) : _ = t[3];
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
        g.setContext(Be(f.locale, t.sensitive_values_hidden)), At({
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
    let ee = C,
        w, T;
    t[15] === u ? (w = t[16], T = t[17]) : (T = () => {
        u != null && c.current?.setState({
            [ft]: u
        }, !1)
    }, w = [u], t[15] = u, t[16] = w, t[17] = T), (0, X.useEffect)(T, w);
    let E;
    t[18] !== s || t[19] !== o.initial_state?.ledger_link_id ? (E = () => {
        typeof o.initial_state?.ledger_link_id == `string` && c.current?.setState({
            ledger_repair_initializing: s
        }, !1)
    }, t[18] = s, t[19] = o.initial_state?.ledger_link_id, t[20] = E) : E = t[20];
    let D = o.initial_state?.ledger_link_id,
        O;
    t[21] !== s || t[22] !== D ? (O = [s, D], t[21] = s, t[22] = D, t[23] = O) : O = t[23], (0, X.useEffect)(E, O);
    let ie = o.id,
        k;
    t[24] === n ? k = t[25] : (k = ne(`min-w-0`, Ft.widget, n), t[24] = n, t[25] = k);
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
    t[31] !== ee || t[32] !== A || t[33] !== j || t[34] !== M || t[35] !== N ? (P = (0, Z.jsx)(vt, {
        widget: A,
        initialState: j,
        onAction: ee,
        onInitialRenderCommit: M,
        onStateMutation: N,
        ref: c
    }), t[31] = ee, t[32] = A, t[33] = j, t[34] = M, t[35] = N, t[36] = P) : P = t[36];
    let F;
    t[37] !== k || t[38] !== P ? (F = (0, Z.jsx)(`div`, {
        className: k,
        children: P
    }), t[37] = k, t[38] = P, t[39] = F) : F = t[39];
    let I;
    return t[40] !== F || t[41] !== o.id ? (I = (0, Z.jsx)(re, {
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
            isLedgerAccountFlowLoading: r,
            loadingOauthLinkId: i,
            variant: a,
            starterAnalytics: o,
            tab: s,
            onWidgetAction: c,
            className: l
        } = e,
        u = ae(),
        f = (0, X.useId)(),
        [p, m] = (0, X.useState)(!1),
        [h, g] = (0, X.useState)(null),
        _ = o?.financeSessionId,
        v = o?.viewedCreditStarterSession,
        y, b;
    t[0] !== h || t[1] !== _ || t[2] !== s || t[3] !== v ? (y = () => {
        if (!(!h || !_ || !v)) return ze(h, () => {
            v.current !== _ && (v.current = _, ee.logStructuredEvent(`ChatgptFinanceComponentViewed`, {
                surfaceName: `home`,
                componentName: `starter_card`,
                componentId: Q,
                financeSessionId: _,
                tab: s
            }))
        })
    }, b = [h, _, s, v], t[0] = h, t[1] = _, t[2] = s, t[3] = v, t[4] = y, t[5] = b) : (y = t[4], b = t[5]), (0, X.useEffect)(y, b);
    let {
        sensitiveValuesHidden: x
    } = dt(), S;
    t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (S = {
        queryKey: ue,
        queryFn: xe,
        enabled: !1
    }, t[6] = S) : S = t[6];
    let C = N(S),
        w;
    t[7] === n ? w = t[8] : (w = he(n), t[7] = n, t[8] = w);
    let T;
    t[9] !== C.data || t[10] !== a ? (T = () => a === `dashboard` ? tt(C.data ?? []) : void 0, t[9] = C.data, t[10] = a, t[11] = T) : T = t[11];
    let te = a === `dashboard`,
        E;
    t[12] !== w || t[13] !== T || t[14] !== te ? (E = {
        queryKey: w,
        initialPageParam: 0,
        queryFn: sn,
        getNextPageParam: on,
        refetchOnMount: `always`,
        refetchInterval: T,
        enabled: te
    }, t[12] = w, t[13] = T, t[14] = te, t[15] = E) : E = t[15];
    let D = se(E),
        O;
    t[16] === n ? O = t[17] : (O = [...Ne, `onboarding`, n], t[16] = n, t[17] = O);
    let ie = a === `onboarding`,
        k;
    t[18] !== O || t[19] !== ie ? (k = {
        queryKey: O,
        queryFn: fe,
        refetchOnMount: !0,
        enabled: ie
    }, t[18] = O, t[19] = ie, t[20] = k) : k = t[20];
    let A = N(k);
    D.data?.pages;
    let j;
    t[21] !== D.data?.pages || t[22] !== A.data || t[23] !== a ? (j = a === `dashboard` ? D.data?.pages.flatMap(an) ?? [] : A.data ?? [], t[21] = D.data?.pages, t[22] = A.data, t[23] = a, t[24] = j) : j = t[24];
    let M;
    t[25] !== x || t[26] !== j ? (M = lt(j, x), t[25] = x, t[26] = j, t[27] = M) : M = t[27];
    let F = Zt({
            widgets: M,
            variant: a
        }),
        I;
    t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (I = De(), t[28] = I) : I = t[28];
    let L = I,
        oe;
    t[29] === Symbol.for(`react.memo_cache_sentinel`) ? (oe = Re(), t[29] = oe) : oe = t[29];
    let ce = oe,
        le;
    t[30] !== u.locale || t[31] !== x ? (le = Be(u.locale, x), t[30] = u.locale, t[31] = x, t[32] = le) : le = t[32];
    let R = le,
        z;
    t[33] === C.data ? z = t[34] : (z = C.data ?? [], t[33] = C.data, t[34] = z);
    let de;
    t[35] === z ? de = t[36] : (de = tt(z), t[35] = z, t[36] = de);
    let pe = de != null,
        me, B;
    t[37] !== R || t[38] !== a ? (me = () => {
        if (a !== `dashboard` || ce === 0) return;
        L.setContext(R);
        let e = we(),
            t = () => {
                L.setActive(ke(), ce)
            };
        return t(), document.addEventListener(`visibilitychange`, t), window.addEventListener(`online`, t), window.addEventListener(`offline`, t), e?.addEventListener(`change`, t), () => {
            document.removeEventListener(`visibilitychange`, t), window.removeEventListener(`online`, t), window.removeEventListener(`offline`, t), e?.removeEventListener(`change`, t), L.setActive(!1), window.location.pathname.startsWith(`/finances`) || L.endVisit()
        }
    }, B = [R, ce, L, a], t[37] = R, t[38] = a, t[39] = me, t[40] = B) : (me = t[39], B = t[40]), (0, X.useEffect)(me, B);
    let ge, _e;
    t[41] !== D.isFetching || t[42] !== pe ? (ge = () => {
        L.setPaused(pe || D.isFetching)
    }, _e = [L, pe, D.isFetching], t[41] = D.isFetching, t[42] = pe, t[43] = ge, t[44] = _e) : (ge = t[43], _e = t[44]), (0, X.useEffect)(ge, _e);
    let ve = a === `dashboard` ? D.isLoading : A.isLoading,
        ye = (0, X.useRef)(null),
        [be, Se] = (0, X.useState)(!1),
        [Ce, Te] = (0, X.useState)(!1),
        Ee;
    t[45] === Symbol.for(`react.memo_cache_sentinel`) ? (Ee = () => {
        let e = ye.current;
        if (!e) return;
        let t = e.scrollWidth - e.clientWidth;
        Se(e.scrollLeft > 1), Te(e.scrollLeft < t - 1)
    }, t[45] = Ee) : Ee = t[45];
    let V = Ee,
        Oe;
    t[46] === Symbol.for(`react.memo_cache_sentinel`) ? (Oe = e => {
        let t = ye.current;
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
    let Ae = Oe,
        je;
    if (t[47] === a ? je = t[48] : (je = () => {
            if (a !== `onboarding`) return;
            let e = ye.current;
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
        }, t[47] = a, t[48] = je), (0, X.useEffect)(je, [V, a, F.length]), a === `onboarding` && n && p) return null;
    if (ve) {
        let e;
        return t[49] !== l || t[50] !== n || t[51] !== a ? (e = (0, Z.jsx)(cn, {
            hasLedgerConnections: n,
            variant: a,
            className: l
        }), t[49] = l, t[50] = n, t[51] = a, t[52] = e) : e = t[52], e
    }
    if (a === `dashboard`) {
        let e = Dt([...F].sort(rn));
        if (e.length === 0 && !D.hasNextPage && !D.isFetchingNextPage) {
            let e;
            return t[53] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Z.jsx)(ln, {}), t[53] = e) : e = t[53], e
        }
        let n;
        t[54] === l ? n = t[55] : (n = ne(`flex flex-col gap-4`, l), t[54] = l, t[55] = n);
        let a;
        t[56] !== D.dataUpdatedAt || t[57] !== r || t[58] !== i || t[59] !== c ? (a = e => (0, Z.jsx)(`div`, {
            className: `grid grid-cols-1 gap-4 md:grid-cols-2`,
            children: e.items.map(e => (0, Z.jsx)(_n, {
                className: e.span === 2 ? `md:col-span-2` : void 0,
                isRepairLoading: r && e.widgetConfig.initial_state?.ledger_link_id === i,
                widgetConfig: e.widgetConfig,
                transactionPrefetchRevision: e.widgetConfig.id === `ledger_recent_transactions_widget` ? D.dataUpdatedAt : void 0,
                onWidgetAction: c
            }, qt(e.widgetConfig)))
        }, Jt(e)), t[56] = D.dataUpdatedAt, t[57] = r, t[58] = i, t[59] = c, t[60] = a) : a = t[60];
        let o;
        return t[61] !== D.fetchNextPage || t[62] !== D.hasNextPage || t[63] !== D.isFetchingNextPage ? (o = (0, Z.jsx)(Le, {
            isFetchingNextPage: D.isFetchingNextPage,
            hasNextPage: D.hasNextPage,
            fetchNextPage: D.fetchNextPage,
            bgColor: `bg-transparent`,
            rootMargin: `0px 0px 20% 0px`
        }), t[61] = D.fetchNextPage, t[62] = D.hasNextPage, t[63] = D.isFetchingNextPage, t[64] = o) : o = t[64], (0, Z.jsxs)(`div`, {
            className: n,
            children: [e.map(a), o]
        })
    }
    if (F.length === 0) return null;
    let Me = F.map(e => (0, Z.jsx)(re, {
            name: `Mattress Widget`,
            children: (0, Z.jsx)(`div`, {
                ref: e.id === `${gn}:${Q}` ? g : void 0,
                className: ne(`mattress-onboarding-widget-card h-[124px] min-w-0 shrink-0 snap-start sm:basis-[calc((100%-12px)/2)]`, F.length === 1 ? `basis-full` : `basis-[78%] lg:basis-[calc((100%-24px)/3)]`),
                "data-testid": `mattress-onboarding-widget-cell`,
                children: (0, Z.jsx)(vt, {
                    widget: e.widget,
                    initialState: Yt(e),
                    onAction: c
                })
            })
        }, qt(e))),
        Pe;
    t[65] === Me ? Pe = t[66] : (Pe = (0, Z.jsx)(`div`, {
        ref: ye,
        className: `no-scrollbar flex w-full snap-x snap-mandatory items-stretch gap-3 overflow-x-auto pb-2`,
        "data-testid": `mattress-onboarding-widgets-grid`,
        children: Me
    }), t[65] = Me, t[66] = Pe);
    let Fe = Pe,
        H;
    t[67] === l ? H = t[68] : (H = ne(`flex w-full flex-col gap-4`, l), t[67] = l, t[68] = H);
    let Ie;
    t[69] === Symbol.for(`react.memo_cache_sentinel`) ? (Ie = (0, Z.jsx)(P, {
        ...$.onboardingSectionTitle
    }), t[69] = Ie) : Ie = t[69];
    let U;
    t[70] === f ? U = t[71] : (U = (0, Z.jsx)(`h2`, {
        id: f,
        className: `text-heading-3 text-token-text-primary font-medium`,
        children: Ie
    }), t[70] = f, t[71] = U);
    let W;
    t[72] !== be || t[73] !== Ce || t[74] !== n || t[75] !== u || t[76] !== Ae ? (W = n ? (0, Z.jsxs)(Z.Fragment, {
        children: [(0, Z.jsx)(`button`, {
            "aria-label": u.formatMessage($.previousOnboardingPage),
            className: `hover:bg-token-interactive-bg-tertiary-press bg-token-bg-primary border-token-border-heavy focus-visible:outline-token-border-strong hidden size-9 items-center justify-center rounded-full border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-30 sm:flex`,
            disabled: !be,
            onClick: () => Ae(`back`),
            type: `button`,
            children: (0, Z.jsx)(He, {
                "aria-hidden": `true`,
                className: `icon-sm`
            })
        }), (0, Z.jsx)(`button`, {
            "aria-label": u.formatMessage($.nextOnboardingPage),
            className: `hover:bg-token-interactive-bg-tertiary-press bg-token-bg-primary border-token-border-heavy focus-visible:outline-token-border-strong hidden size-9 items-center justify-center rounded-full border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-30 sm:flex`,
            disabled: !Ce,
            onClick: () => Ae(`forward`),
            type: `button`,
            children: (0, Z.jsx)(Ge, {
                "aria-hidden": `true`,
                className: `icon-sm`
            })
        })]
    }) : null, t[72] = be, t[73] = Ce, t[74] = n, t[75] = u, t[76] = Ae, t[77] = W) : W = t[77];
    let G;
    t[78] !== n || t[79] !== u ? (G = n ? (0, Z.jsx)(d, {
        "aria-label": u.formatMessage($.dismissOnboardingSection),
        className: `text-token-text-tertiary size-8 shrink-0`,
        onClick: () => {
            m(!0)
        }
    }) : null, t[78] = n, t[79] = u, t[80] = G) : G = t[80];
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
    return t[87] !== Fe || t[88] !== f || t[89] !== H || t[90] !== q ? (Ve = (0, Z.jsxs)(`section`, {
        "aria-labelledby": f,
        className: H,
        children: [q, Fe]
    }), t[87] = Fe, t[88] = f, t[89] = H, t[90] = q, t[91] = Ve) : Ve = t[91], Ve
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
    return ge({
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
    t[0] !== i || t[1] !== a ? (c = ne(a, i), t[0] = i, t[1] = a, t[2] = c) : c = t[2];
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
    Y = L(), T(), Xe(), qe(), S(), i(), We(), Ue(), Oe(), rt(), ye(), at(), U(), Me(), ve(), et(), Ye(), ut(), W(), Ot(), pt(), gt(), G(), jt(), Nt(), Pe(), Ee(), l(), _t(), c(), O(), h(), de(), w(), _(), pe(), b(), le(), X = t(A()), z(), ie(), s(), It(), Z = oe(), un = new Set([`open_entity_detail`, `open_url`]), dn = {
        open_entity_detail: nt.open_entity_detail,
        open_url: nt.open_url
    }, fn = `mattress_ledger_open_account_link`, pn = `ledger_add_account_prompt`, mn = `ledger_category_correction_prompt`, hn = `ledger_category_review_saved`, gn = `ledger_finance_onboarding_widget`, Q = `finance-onboarding-connect-credit`, $ = I({
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
//# sourceMappingURL=f19e94aa-d2sv15r0zajxzqna.js.map