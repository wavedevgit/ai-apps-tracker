const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/24fd10e2-fn7fbbu5p3fnvh0w.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-d7xm9wsvhdfbag9a.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-m7dgsxtvvivh3e6t.js", "assets/30901919-lc79rizhhepnsl3q.js", "assets/c470f5ab-lnsrbaizit3lulwq.js", "assets/0e5afe53-lar0ol3v36kqq3ou.js", "assets/conversation-small-ertg9659.css", "assets/c2675c8c-f8x469cgefxzeo6l.js", "assets/82782bc9-cyj0qqxyrvk6mamy.js", "assets/8b34dbc2-ik628tlti8ozm9vq.js", "assets/global-modals-dxg9ukpk.css", "assets/09231af0-uq8zl71w3t7cxbv8.js", "assets/2f772deb-mpq885b5hb4d2g9w.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Aq as n,
    Eat as r,
    Iv as i,
    LU as a,
    Lnt as o,
    Mw as s,
    N1 as c,
    QJ as l,
    QZ as u,
    RZ as d,
    Rv as f,
    Vq as p,
    ZW as m,
    _W as h,
    _c as g,
    bF as ee,
    eY as _,
    jw as v,
    l7 as y,
    pc as b,
    q1 as x,
    qW as S,
    u7 as C,
    v1 as w,
    vF as T,
    vG as E,
    vW as D,
    wat as O,
    y1 as k,
    zU as A,
    znt as j
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    Bn as te,
    G as M,
    Ln as N,
    N as P,
    Nn as F,
    Nt as I,
    O as L,
    Q as R,
    Rn as z,
    Vn as B,
    cn as ne,
    jt as re,
    l as ie,
    ln as ae,
    s as oe,
    wn as V,
    zn as se
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $gn as ce,
    A1 as le,
    Bbt as ue,
    Bkt as de,
    CAt as fe,
    CW as pe,
    Dkt as me,
    EW as he,
    Hkt as ge,
    Jkt as _e,
    LTn as ve,
    LW as ye,
    Mkt as be,
    NAt as xe,
    Nkt as Se,
    OAt as Ce,
    Pwt as we,
    RTn as Te,
    Rkt as H,
    SAt as Ee,
    SW as De,
    TW as Oe,
    Xkt as ke,
    _W as Ae,
    bAt as je,
    dwt as Me,
    e_n as Ne,
    jW as U,
    k1 as Pe,
    lwt as W,
    mX as G,
    pW as K,
    pX as Fe,
    qkt as Ie,
    vAt as Le,
    wW as q,
    xAt as Re,
    xW as J,
    yAt as ze,
    zbt as Be
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    Hv as Ve,
    TC as He,
    Uv as Ue,
    wC as We
} from "./30901919-lc79rizhhepnsl3q.js";
import {
    Mm as Ge,
    Nm as Ke,
    as as qe,
    es as Je,
    is as Ye,
    ns as Xe,
    os as Ze,
    ts as Qe
} from "./8b34dbc2-ik628tlti8ozm9vq.js";
import {
    n as $e,
    t as et
} from "./4f866508-6ga8e9nxmlp2qc0c.js";
import {
    i as tt,
    n as nt
} from "./04f387fb-jn4r2hx3yp2sd3o9.js";
import {
    c as rt,
    r as it
} from "./fcf5f4da-m2640lkqt2mr4cfw.js";
import {
    i as at,
    n as ot
} from "./a81eda00-fzi606un66ipjon1.js";
import {
    a as st,
    i as ct,
    o as lt,
    s as ut,
    t as dt
} from "./4cf35c7a-fuufw34ubkxvq703.js";
import {
    n as ft,
    r as pt
} from "./a84119fb-d9siriaq50m52ccy.js";
import {
    n as mt,
    t as ht
} from "./22f0e71d-hrdzmeuh88fbdvew.js";
import {
    n as gt,
    t as _t
} from "./c253861d-iprlsf5kq5kvkz09.js";

function vt(e) {
    let t = new URLSearchParams(e).getAll(`credit_alert`);
    if (t.length === 0) return;
    let n = t[0];
    return t.length === 1 && n && St.test(n) ? n : null
}

function yt() {
    try {
        let e = sessionStorage.getItem(xt);
        return e && St.test(e) ? e : null
    } catch {
        return null
    }
}

function bt(e) {
    return vt(e) !== void 0 || yt() != null
}
var xt, St, Ct = e((() => {
    xt = `finances.credit-alert.login`, St = /^[A-Za-z0-9_-]{86}$/
}));

function wt(e) {
    return e.span === 1 || e.span === 2 ? e.span : e.dashboard_placement === `half` ? 1 : 2
}

function Tt(e, t) {
    return {
        widgetConfig: e,
        span: t
    }
}

function Et(e) {
    let t = [],
        n = [...e];
    for (; n.length > 0;) {
        let e = n.shift();
        if (e == null) break;
        if (wt(e) === 1) {
            let r = n.findIndex(e => wt(e) === 1);
            if (r === -1) {
                t.push({
                    items: [Tt(e, 2)]
                });
                continue
            }
            let [i] = n.splice(r, 1);
            t.push({
                items: [Tt(e, 1), Tt(i, 1)]
            });
            continue
        }
        t.push({
            items: [Tt(e, 2)]
        })
    }
    return t
}
var Dt = e((() => {}));

function Ot(e) {
    if (!Array.isArray(e.transactions)) return [];
    let t = e.sensitive_values_hidden !== !1;
    return e.transactions.slice(0, 10).flatMap(e => {
        if (typeof e != `object` || !e || Array.isArray(e)) return [];
        let n = e;
        return n.detail_sidebar_enabled !== !0 || typeof n.transaction_id != `string` || !n.transaction_id.trim() || typeof n.display_name != `string` || !n.display_name.trim() ? [] : [at({
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
async function kt({
    store: e,
    state: t,
    clientThreadId: n,
    locale: r,
    isCurrent: i
}) {
    let a = e.getGeneration(),
        {
            createLedgerTransactionDetailRequest: o
        } = await ne(async () => {
            let {
                createLedgerTransactionDetailRequest: e
            } = await import(`./24fd10e2-fn7fbbu5p3fnvh0w.js`).then(e => (e.t(), e.a));
            return {
                createLedgerTransactionDetailRequest: e
            }
        }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));
    if (!i() || e.getGeneration() !== a) return;
    let s = Ot(t).flatMap(e => {
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
var At = e((() => {
    ot(), _(), ae()
}));

function jt({
    cardId: e,
    conversation: t,
    navigate: n,
    prompt: r
}) {
    let i = c(),
        a = i?.normalizedAccountUserId;
    if (!m() || !i || !a || !t || !r.trim()) return !1;
    let o = U(r, {
        accountId: i.id,
        accountUserId: a
    }, {
        starter_prompt_id: e,
        suggestion_type: w.Starter
    });
    return g({
        conversation: t,
        nextMode: E.TPP
    }), Ne(n, {
        params: new URLSearchParams({
            surface: `work`
        }),
        state: o
    }), !0
}
var Mt = e((() => {
        k(), ce(), x(), b(), S(), ye()
    })),
    Nt, Pt, Ft = e((() => {
        Nt = `_9X9NtG_widget`, Pt = {
            widget: Nt
        }
    }));

function It(e) {
    return !e.id || typeof e.id != `string` || !Lt(e.widget) ? !1 : e.widget.type.length > 0
}

function Lt(e) {
    return e == null || Array.isArray(e) || typeof e != `object` || !(`type` in e) ? !1 : typeof e.type == `string`
}

function Y(e) {
    return typeof e == `object` && !!e && !Array.isArray(e)
}

function Rt(e) {
    let t = e?.ledger_link_id;
    return typeof t == `string` ? t : void 0
}

function zt(e) {
    return Array.isArray(e) ? e.filter(e => typeof e == `string`) : []
}

function Bt(e) {
    if (!Y(e)) return null;
    let t = typeof e.transaction_id == `string` ? e.transaction_id.trim() : ``,
        n = typeof e.target_primary_category == `string` ? e.target_primary_category.trim() : ``;
    return !t || !n ? null : {
        transaction_id: t,
        target_primary_category: n
    }
}

function Vt(e) {
    if (!Y(e) || !Array.isArray(e.corrections)) return null;
    let t = [];
    for (let n of e.corrections) {
        let e = Bt(n);
        if (!e) return null;
        t.push(e)
    }
    return t
}

function Ht(e) {
    return Y(e) ? e.kind === mn && Array.isArray(e.transactionIds) && e.transactionIds.every(e => typeof e == `string`) : !1
}

function Ut(e, t) {
    if (!e) return;
    let n = e.getState();
    if (!n || !Array.isArray(n.transactions)) return;
    let r = new Set(t),
        i = n.transactions.filter(e => {
            if (!Y(e)) return !0;
            let t = typeof e.id == `string` ? e.id : void 0;
            return t == null || !r.has(t)
        });
    e.setState({
        transactions: i
    }, !1)
}

function Wt(e) {
    return e.id.startsWith(hn)
}

function Gt(e) {
    let t = e.initial_state;
    if (t == null) return null;
    let n = {
        ...t
    };
    return delete n[dt], Object.keys(n).length === 0 ? null : n
}

function Kt(e) {
    return M([e.id, e.widget, Gt(e)])
}

function qt(e) {
    return e.items.map(e => Kt(e.widgetConfig)).join(`:`)
}

function Jt(e) {
    return e.initial_state ?? void 0
}

function Yt(e) {
    let t = e.initial_state?.[dt];
    return typeof t == `boolean` ? t : void 0
}

function Xt({
    widgets: e,
    variant: t
}) {
    return e.filter(e => It(e) ? t === `dashboard` ? !Wt(e) : Wt(e) : !1)
}

function Zt(e) {
    "use forget";
    let t = (0, X.c)(9),
        {
            hasLedgerConnections: n,
            variant: r,
            starterAnalytics: i,
            className: a
        } = e,
        o = r === void 0 ? `onboarding` : r,
        s = re(`/finances/:tab`)?.params.tab ?? `dashboard`,
        {
            isLedgerAccountFlowLoading: c,
            loadingOauthLinkId: l,
            onWidgetAction: u
        } = Qt(ee(), i?.financeSessionId, s),
        d;
    return t[0] !== a || t[1] !== n || t[2] !== c || t[3] !== l || t[4] !== u || t[5] !== i || t[6] !== s || t[7] !== o ? (d = (0, Q.jsx)(tn, {
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

function Qt(e, t, n) {
    "use no forget";
    let r = I(),
        i = (0, Z.useRef)(!1),
        a = P(),
        s = A(),
        {
            isLoading: c,
            loadingOauthLinkId: l,
            open: u
        } = pt(),
        m = Ze({
            skipPostConnectExperience: !0,
            productSku: ve.CONNECTOR_SETTING,
            canReuseLink: f,
            resolveDirectNoAuthConnector: Xe
        }),
        h = se(),
        {
            sensitiveValuesHidden: g,
            setSensitiveValuesHidden: ee
        } = ut(),
        _ = (0, Z.useCallback)(async () => (a.getQueryData(be) ?? await a.fetchQuery({
            queryKey: be,
            queryFn: de
        }) ?? []).find(ke)?.id, [a]),
        v = (0, Z.useCallback)(async t => {
            if (!(!e || !u)) try {
                u({
                    autoStartOauthLinkId: t ?? await _(),
                    trackingContext: {
                        entryPoint: `widget`
                    }
                })
            } catch (e) {
                s.danger(h.formatMessage($.connectAccountErrorToast), {
                    error: e
                })
            }
        }, [e, _, h, u, s]),
        y = (0, Z.useCallback)(t => {
            mt({
                ...t,
                conversation: e,
                sensitiveValuesHidden: g
            })
        }, [e, g]),
        b = (0, Z.useCallback)(() => {
            a.invalidateQueries({
                queryKey: me
            })
        }, [a]);
    return {
        isLedgerAccountFlowLoading: c,
        loadingOauthLinkId: l,
        onWidgetAction: (0, Z.useCallback)(async ({
            type: c,
            payload: l
        }) => {
            if (c === dn) {
                if (!Y(l)) return;
                let e = typeof l.ledger_link_id == `string` ? l.ledger_link_id : void 0;
                await v(e);
                return
            }
            if (c === `ledger_set_sensitive_values_hidden`) {
                let e = st(l);
                if (e == null) return;
                ee(e);
                return
            }
            if (c === `ledger_category_review_save`) {
                let e = Vt(l);
                if (!e || e.length === 0) return;
                try {
                    if ((await Me({
                            actionType: c,
                            payload: {
                                corrections: e
                            },
                            toaster: s
                        })).status !== `success`) {
                        s.danger(h.formatMessage($.categoryReviewSaveErrorToast));
                        return
                    }
                    return {
                        kind: mn,
                        transactionIds: e.map(e => e.transaction_id)
                    }
                } catch (e) {
                    s.danger(h.formatMessage($.categoryReviewSaveErrorToast), {
                        error: e
                    });
                    return
                }
            }
            if (c === `open_entity_detail` && Y(l) && l.category === fn) {
                let e = Y(l.extraParams) ? l.extraParams : void 0;
                if (Oe(e)) {
                    await v(Rt(e));
                    return
                }
                c = J, l = {
                    card_id: e?.card_id,
                    prompt: l.query,
                    system_hint: e?.system_hint
                }
            }
            if (c === `open_entity_detail` && Y(l) && l.category === pn) {
                let t = Y(l.extraParams) ? l.extraParams : void 0,
                    n = typeof l.query == `string` ? l.query : void 0,
                    r = zt(t?.transaction_ids);
                if (!n || !e) return;
                let i = typeof t?.card_id == `string` ? t.card_id : `ledger-low-confidence-category-correction`,
                    a = typeof t?.system_hint == `string` ? p(t.system_hint) ?? Ce : Ce,
                    {
                        extraStreamParams: o,
                        systemHints: s
                    } = Be(a ? [a] : []);
                await Ke({
                    callsiteId: `request_completion.mattress.ledger_category_correction_widget.1`,
                    conversation: e,
                    promptMessage: d(n, {
                        starter_prompt_id: i,
                        suggestion_type: w.Starter,
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
            if (c !== `mattress_onboarding_card_click`) {
                if (!c || !ln.has(c)) return;
                await rt({
                    actionType: c,
                    payload: Y(l) ? l : void 0,
                    context: {
                        openEntitySidebar: y
                    },
                    library: un
                });
                return
            }
            if (!Y(l)) return;
            let f = typeof l.card_id == `string` ? l.card_id : void 0;
            if (!f) return;
            let g = l.action;
            if (g != null) return !pe(g) || !u ? void 0 : (O.addAction(`finance-landing-page.onboarding-card-click`, {
                cardId: f
            }), new Promise(e => {
                let r = u({
                    destination: g.destination,
                    trackingContext: {
                        entryPoint: `widget`,
                        ...f === gn ? {
                            entrypoint: `starter_prompt`
                        } : {}
                    },
                    onSettled: e
                });
                r && t && f === gn && o.logStructuredEvent(`ChatgptFinanceComponentInteraction`, {
                    surfaceName: `home`,
                    componentName: `starter_card`,
                    componentId: gn,
                    financeSessionId: t,
                    tab: n,
                    action: `clicked`
                }), r || e()
            }));
            if (l.thread_mode === `work`) {
                if (typeof l.prompt != `string` || i.current) return;
                i.current = jt({
                    cardId: f,
                    conversation: e,
                    navigate: r,
                    prompt: l.prompt
                });
                return
            }
            if (q(f)) return O.addAction(`finance-landing-page.onboarding-card-click`, {
                cardId: f
            }), u ? new Promise(e => {
                Je({
                    accountLinkingContext: {
                        source: `widget`
                    },
                    createLedgerConnectorLink: m,
                    ensurePluginEnabled: !0,
                    navigate: r,
                    onConversationReady: b,
                    prompt: h.formatMessage(Ae),
                    queryClient: a,
                    startLedgerAccountFlow: t => u({
                        ...t,
                        onSettled: e
                    })
                }) || e()
            }) : void 0;
            if (he(f)) {
                await v();
                return
            }
            let _ = typeof l.prompt == `string` ? l.prompt : void 0,
                x = typeof l.system_hint == `string` ? p(l.system_hint) : void 0;
            _ && (O.addAction(`finance-landing-page.onboarding-card-click`, {
                cardId: f
            }), e && (await Ye({
                cardId: f,
                conversation: e,
                prompt: _,
                systemHint: x
            }), b()))
        }, [e, m, t, b, h, r, y, v, u, a, ee, n, s])
    }
}

function $t(e) {
    "use forget";
    let t = (0, X.c)(43),
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
    t[0] === o ? l = t[1] : (l = Yt(o), t[0] = o, t[1] = l);
    let u = l,
        d = ee(),
        f = se(),
        p = (0, Z.useRef)(!1),
        m = (0, Z.useRef)(!1),
        g;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (g = Ee(), t[2] = g) : g = t[2];
    let _ = g,
        v;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (v = je(), t[3] = v) : v = t[3];
    let b = v,
        x;
    t[4] !== d || t[5] !== f.locale || t[6] !== u || t[7] !== i || t[8] !== o.id ? (x = () => {
        if (b === 0 || i === 0 || !d || o.id !== `ledger_recent_transactions_widget`) return;
        let e = c.current?.getState();
        if (!e) return;
        let t = {
            ...e,
            sensitive_values_hidden: u ?? e.sensitive_values_hidden
        };
        _.setContext(Re(f.locale, t.sensitive_values_hidden)), kt({
            store: _,
            state: t,
            clientThreadId: d.id,
            locale: f.locale,
            isCurrent: () => p.current
        }).catch(en)
    }, t[4] = d, t[5] = f.locale, t[6] = u, t[7] = i, t[8] = o.id, t[9] = x) : x = t[9];
    let S = x,
        C, w;
    t[10] === S ? (C = t[11], w = t[12]) : (C = () => (p.current = !0, m.current && S(), () => {
        p.current = !1
    }), w = [S], t[10] = S, t[11] = C, t[12] = w), (0, Z.useEffect)(C, w);
    let T;
    t[13] === a ? T = t[14] : (T = async (e, t) => {
        let n = await a?.(e, t);
        return Ht(n) && Ut(c.current, n.transactionIds), n
    }, t[13] = a, t[14] = T);
    let E = T,
        D, O;
    t[15] === u ? (D = t[16], O = t[17]) : (O = () => {
        u != null && c.current?.setState({
            [dt]: u
        }, !1)
    }, D = [u], t[15] = u, t[16] = D, t[17] = O), (0, Z.useEffect)(O, D);
    let k;
    t[18] !== s || t[19] !== o.initial_state?.ledger_link_id ? (k = () => {
        typeof o.initial_state?.ledger_link_id == `string` && c.current?.setState({
            ledger_repair_initializing: s
        }, !1)
    }, t[18] = s, t[19] = o.initial_state?.ledger_link_id, t[20] = k) : k = t[20];
    let A = o.initial_state?.ledger_link_id,
        j;
    t[21] !== s || t[22] !== A ? (j = [s, A], t[21] = s, t[22] = A, t[23] = j) : j = t[23], (0, Z.useEffect)(k, j);
    let te = o.id,
        M;
    t[24] === n ? M = t[25] : (M = y(`min-w-0`, Pt.widget, n), t[24] = n, t[25] = M);
    let N = o.widget,
        P;
    t[26] === o ? P = t[27] : (P = Jt(o), t[26] = o, t[27] = P);
    let F, I;
    t[28] === S ? (F = t[29], I = t[30]) : (F = () => {
        m.current = !0, S()
    }, I = e => {
        e.scope === `root` && m.current && S()
    }, t[28] = S, t[29] = F, t[30] = I);
    let L;
    t[31] !== E || t[32] !== N || t[33] !== P || t[34] !== F || t[35] !== I ? (L = (0, Q.jsx)(_t, {
        widget: N,
        initialState: P,
        onAction: E,
        onInitialRenderCommit: F,
        onStateMutation: I,
        ref: c
    }), t[31] = E, t[32] = N, t[33] = P, t[34] = F, t[35] = I, t[36] = L) : L = t[36];
    let R;
    t[37] !== M || t[38] !== L ? (R = (0, Q.jsx)(`div`, {
        className: M,
        children: L
    }), t[37] = M, t[38] = L, t[39] = R) : R = t[39];
    let z;
    return t[40] !== R || t[41] !== o.id ? (z = (0, Q.jsx)(h, {
        name: `Mattress Widget`,
        children: R
    }, te), t[40] = R, t[41] = o.id, t[42] = z) : z = t[42], z
}

function en() {}

function tn(e) {
    "use forget";
    let t = (0, X.c)(92),
        {
            hasLedgerConnections: n,
            isLedgerAccountFlowLoading: r,
            loadingOauthLinkId: i,
            variant: a,
            starterAnalytics: s,
            tab: c,
            onWidgetAction: l,
            className: u
        } = e,
        d = se(),
        f = (0, Z.useId)(),
        [p, m] = (0, Z.useState)(!1),
        [g, ee] = (0, Z.useState)(null),
        _ = s?.financeSessionId,
        b = s?.viewedCreditStarterSession,
        x, S;
    t[0] !== g || t[1] !== _ || t[2] !== c || t[3] !== b ? (x = () => {
        if (!(!g || !_ || !b)) return le(g, () => {
            b.current !== _ && (b.current = _, o.logStructuredEvent(`ChatgptFinanceComponentViewed`, {
                surfaceName: `home`,
                componentName: `starter_card`,
                componentId: gn,
                financeSessionId: _,
                tab: c
            }))
        })
    }, S = [g, _, c, b], t[0] = g, t[1] = _, t[2] = c, t[3] = b, t[4] = x, t[5] = S) : (x = t[4], S = t[5]), (0, Z.useEffect)(x, S);
    let {
        sensitiveValuesHidden: C
    } = ut(), w;
    t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (w = {
        queryKey: be,
        queryFn: de,
        enabled: !1
    }, t[6] = w) : w = t[6];
    let T = L(w),
        E;
    t[7] === n ? E = t[8] : (E = Ie(n), t[7] = n, t[8] = E);
    let D;
    t[9] !== T.data || t[10] !== a ? (D = () => a === `dashboard` ? et(T.data ?? []) : void 0, t[9] = T.data, t[10] = a, t[11] = D) : D = t[11];
    let O = a === `dashboard`,
        k;
    t[12] !== E || t[13] !== D || t[14] !== O ? (k = {
        queryKey: E,
        initialPageParam: 0,
        queryFn: on,
        getNextPageParam: an,
        refetchOnMount: `always`,
        refetchInterval: D,
        enabled: O
    }, t[12] = E, t[13] = D, t[14] = O, t[15] = k) : k = t[15];
    let A = ie(k),
        j;
    t[16] === n ? j = t[17] : (j = [...Se, `onboarding`, n], t[16] = n, t[17] = j);
    let te = a === `onboarding`,
        M;
    t[18] !== j || t[19] !== te ? (M = {
        queryKey: j,
        queryFn: ge,
        refetchOnMount: !0,
        enabled: te
    }, t[18] = j, t[19] = te, t[20] = M) : M = t[20];
    let N = L(M);
    A.data?.pages;
    let P;
    t[21] !== A.data?.pages || t[22] !== N.data || t[23] !== a ? (P = a === `dashboard` ? A.data?.pages.flatMap(rn) ?? [] : N.data ?? [], t[21] = A.data?.pages, t[22] = N.data, t[23] = a, t[24] = P) : P = t[24];
    let I;
    t[25] !== C || t[26] !== P ? (I = ct(P, C), t[25] = C, t[26] = P, t[27] = I) : I = t[27];
    let R = Xt({
            widgets: I,
            variant: a
        }),
        z;
    t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (z = Ee(), t[28] = z) : z = t[28];
    let B = z,
        ne;
    t[29] === Symbol.for(`react.memo_cache_sentinel`) ? (ne = je(), t[29] = ne) : ne = t[29];
    let re = ne,
        ae;
    t[30] !== d.locale || t[31] !== C ? (ae = Re(d.locale, C), t[30] = d.locale, t[31] = C, t[32] = ae) : ae = t[32];
    let oe = ae,
        V;
    t[33] === T.data ? V = t[34] : (V = T.data ?? [], t[33] = T.data, t[34] = V);
    let ce;
    t[35] === V ? ce = t[36] : (ce = et(V), t[35] = V, t[36] = ce);
    let ue = ce != null,
        fe, pe;
    t[37] !== oe || t[38] !== a ? (fe = () => {
        if (a !== `dashboard` || re === 0) return;
        B.setContext(oe);
        let e = ze(),
            t = () => {
                B.setActive(Le(), re)
            };
        return t(), document.addEventListener(`visibilitychange`, t), window.addEventListener(`online`, t), window.addEventListener(`offline`, t), e?.addEventListener(`change`, t), () => {
            document.removeEventListener(`visibilitychange`, t), window.removeEventListener(`online`, t), window.removeEventListener(`offline`, t), e?.removeEventListener(`change`, t), B.setActive(!1), window.location.pathname.startsWith(`/finances`) || B.endVisit()
        }
    }, pe = [oe, re, B, a], t[37] = oe, t[38] = a, t[39] = fe, t[40] = pe) : (fe = t[39], pe = t[40]), (0, Z.useEffect)(fe, pe);
    let me, he;
    t[41] !== A.isFetching || t[42] !== ue ? (me = () => {
        B.setPaused(ue || A.isFetching)
    }, he = [B, ue, A.isFetching], t[41] = A.isFetching, t[42] = ue, t[43] = me, t[44] = he) : (me = t[43], he = t[44]), (0, Z.useEffect)(me, he);
    let _e = a === `dashboard` ? A.isLoading : N.isLoading,
        ve = (0, Z.useRef)(null),
        [ye, xe] = (0, Z.useState)(!1),
        [Ce, we] = (0, Z.useState)(!1),
        Te;
    t[45] === Symbol.for(`react.memo_cache_sentinel`) ? (Te = () => {
        let e = ve.current;
        if (!e) return;
        let t = e.scrollWidth - e.clientWidth;
        xe(e.scrollLeft > 1), we(e.scrollLeft < t - 1)
    }, t[45] = Te) : Te = t[45];
    let H = Te,
        De;
    t[46] === Symbol.for(`react.memo_cache_sentinel`) ? (De = e => {
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
    }, t[46] = De) : De = t[46];
    let Oe = De,
        ke;
    if (t[47] === a ? ke = t[48] : (ke = () => {
            if (a !== `onboarding`) return;
            let e = ve.current;
            if (!e) return;
            H();
            let t = requestAnimationFrame(H);
            e.addEventListener(`scroll`, H, {
                passive: !0
            });
            let n = typeof ResizeObserver > `u` ? null : new ResizeObserver(H);
            return n?.observe(e), () => {
                cancelAnimationFrame(t), e.removeEventListener(`scroll`, H), n?.disconnect()
            }
        }, t[47] = a, t[48] = ke), (0, Z.useEffect)(ke, [H, a, R.length]), a === `onboarding` && n && p) return null;
    if (_e) {
        let e;
        return t[49] !== u || t[50] !== n || t[51] !== a ? (e = (0, Q.jsx)(sn, {
            hasLedgerConnections: n,
            variant: a,
            className: u
        }), t[49] = u, t[50] = n, t[51] = a, t[52] = e) : e = t[52], e
    }
    if (a === `dashboard`) {
        let e = Et([...R].sort(nn));
        if (e.length === 0 && !A.hasNextPage && !A.isFetchingNextPage) {
            let e;
            return t[53] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Q.jsx)(cn, {}), t[53] = e) : e = t[53], e
        }
        let n;
        t[54] === u ? n = t[55] : (n = y(`flex flex-col gap-4`, u), t[54] = u, t[55] = n);
        let a;
        t[56] !== A.dataUpdatedAt || t[57] !== r || t[58] !== i || t[59] !== l ? (a = e => (0, Q.jsx)(`div`, {
            className: `grid grid-cols-1 gap-4 md:grid-cols-2`,
            children: e.items.map(e => (0, Q.jsx)(_n, {
                className: e.span === 2 ? `md:col-span-2` : void 0,
                isRepairLoading: r && e.widgetConfig.initial_state?.ledger_link_id === i,
                widgetConfig: e.widgetConfig,
                transactionPrefetchRevision: e.widgetConfig.id === `ledger_recent_transactions_widget` ? A.dataUpdatedAt : void 0,
                onWidgetAction: l
            }, Kt(e.widgetConfig)))
        }, qt(e)), t[56] = A.dataUpdatedAt, t[57] = r, t[58] = i, t[59] = l, t[60] = a) : a = t[60];
        let o;
        return t[61] !== A.fetchNextPage || t[62] !== A.hasNextPage || t[63] !== A.isFetchingNextPage ? (o = (0, Q.jsx)(Fe, {
            isFetchingNextPage: A.isFetchingNextPage,
            hasNextPage: A.hasNextPage,
            fetchNextPage: A.fetchNextPage,
            bgColor: `bg-transparent`,
            rootMargin: `0px 0px 20% 0px`
        }), t[61] = A.fetchNextPage, t[62] = A.hasNextPage, t[63] = A.isFetchingNextPage, t[64] = o) : o = t[64], (0, Q.jsxs)(`div`, {
            className: n,
            children: [e.map(a), o]
        })
    }
    if (R.length === 0) return null;
    let Ae = R.map(e => (0, Q.jsx)(h, {
            name: `Mattress Widget`,
            children: (0, Q.jsx)(`div`, {
                ref: e.id === `${hn}:${gn}` ? ee : void 0,
                className: y(`mattress-onboarding-widget-card h-[124px] min-w-0 shrink-0 snap-start sm:basis-[calc((100%-12px)/2)]`, R.length === 1 ? `basis-full` : `basis-[78%] lg:basis-[calc((100%-24px)/3)]`),
                "data-testid": `mattress-onboarding-widget-cell`,
                children: (0, Q.jsx)(_t, {
                    widget: e.widget,
                    initialState: Jt(e),
                    onAction: l
                })
            })
        }, Kt(e))),
        Me;
    t[65] === Ae ? Me = t[66] : (Me = (0, Q.jsx)(`div`, {
        ref: ve,
        className: `no-scrollbar flex w-full snap-x snap-mandatory items-stretch gap-3 overflow-x-auto pb-2`,
        "data-testid": `mattress-onboarding-widgets-grid`,
        children: Ae
    }), t[65] = Ae, t[66] = Me);
    let Ne = Me,
        U;
    t[67] === u ? U = t[68] : (U = y(`flex w-full flex-col gap-4`, u), t[67] = u, t[68] = U);
    let Pe;
    t[69] === Symbol.for(`react.memo_cache_sentinel`) ? (Pe = (0, Q.jsx)(F, {
        ...$.onboardingSectionTitle
    }), t[69] = Pe) : Pe = t[69];
    let W;
    t[70] === f ? W = t[71] : (W = (0, Q.jsx)(`h2`, {
        id: f,
        className: `text-heading-3 text-token-text-primary font-medium`,
        children: Pe
    }), t[70] = f, t[71] = W);
    let G;
    t[72] !== ye || t[73] !== Ce || t[74] !== n || t[75] !== d || t[76] !== Oe ? (G = n ? (0, Q.jsxs)(Q.Fragment, {
        children: [(0, Q.jsx)(`button`, {
            "aria-label": d.formatMessage($.previousOnboardingPage),
            className: `hover:bg-token-interactive-bg-tertiary-press bg-token-bg-primary border-token-border-heavy focus-visible:outline-token-border-strong hidden size-9 items-center justify-center rounded-full border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-30 sm:flex`,
            disabled: !ye,
            onClick: () => Oe(`back`),
            type: `button`,
            children: (0, Q.jsx)(Ve, {
                "aria-hidden": `true`,
                className: `icon-sm`
            })
        }), (0, Q.jsx)(`button`, {
            "aria-label": d.formatMessage($.nextOnboardingPage),
            className: `hover:bg-token-interactive-bg-tertiary-press bg-token-bg-primary border-token-border-heavy focus-visible:outline-token-border-strong hidden size-9 items-center justify-center rounded-full border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-30 sm:flex`,
            disabled: !Ce,
            onClick: () => Oe(`forward`),
            type: `button`,
            children: (0, Q.jsx)(We, {
                "aria-hidden": `true`,
                className: `icon-sm`
            })
        })]
    }) : null, t[72] = ye, t[73] = Ce, t[74] = n, t[75] = d, t[76] = Oe, t[77] = G) : G = t[77];
    let K;
    t[78] !== n || t[79] !== d ? (K = n ? (0, Q.jsx)(v, {
        "aria-label": d.formatMessage($.dismissOnboardingSection),
        className: `text-token-text-tertiary size-8 shrink-0`,
        onClick: () => {
            m(!0)
        }
    }) : null, t[78] = n, t[79] = d, t[80] = K) : K = t[80];
    let q;
    t[81] !== G || t[82] !== K ? (q = (0, Q.jsxs)(`div`, {
        className: `flex items-center gap-2`,
        children: [G, K]
    }), t[81] = G, t[82] = K, t[83] = q) : q = t[83];
    let J;
    t[84] !== W || t[85] !== q ? (J = (0, Q.jsxs)(`div`, {
        className: `flex items-center justify-between gap-3`,
        children: [W, q]
    }), t[84] = W, t[85] = q, t[86] = J) : J = t[86];
    let Be;
    return t[87] !== Ne || t[88] !== f || t[89] !== U || t[90] !== J ? (Be = (0, Q.jsxs)(`section`, {
        "aria-labelledby": f,
        className: U,
        children: [J, Ne]
    }), t[87] = Ne, t[88] = f, t[89] = U, t[90] = J, t[91] = Be) : Be = t[91], Be
}

function nn(e, t) {
    return (e.dashboard_rank ?? 2 ** 53 - 1) - (t.dashboard_rank ?? 2 ** 53 - 1)
}

function rn(e) {
    return e.widgets
}

function an(e) {
    return e.dashboard_next_offset ?? void 0
}

function on(e) {
    let {
        pageParam: t
    } = e;
    return H({
        offset: typeof t == `number` ? t : 0,
        limit: 4
    })
}

function sn(e) {
    "use forget";
    let t = (0, X.c)(11),
        {
            hasLedgerConnections: n,
            variant: r,
            className: i
        } = e,
        a = r === `dashboard` ? `grid w-full self-stretch grid-cols-1 gap-4 md:grid-cols-2` : `no-scrollbar flex w-full snap-x snap-mandatory items-stretch gap-3 overflow-x-auto pb-2`,
        o = r === `onboarding` ? `h-[124px] min-w-0 shrink-0 basis-[78%] snap-start animate-pulse rounded-xl bg-gray-200 sm:basis-[calc((100%-12px)/2)] lg:basis-[calc((100%-24px)/3)] dark:bg-gray-700` : `h-32 w-full animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700`,
        s = r === `onboarding` ? n ? 4 : 1 : 2,
        c;
    t[0] !== i || t[1] !== a ? (c = y(a, i), t[0] = i, t[1] = a, t[2] = c) : c = t[2];
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

function cn() {
    "use forget";
    let e = (0, X.c)(2),
        t;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Q.jsx)(`p`, {
        className: `text-token-text-primary text-sm font-medium`,
        children: (0, Q.jsx)(F, {
            ...$.dashboardEmptyStateTitle
        })
    }), e[0] = t) : t = e[0];
    let n;
    return e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, Q.jsxs)(`div`, {
        className: `border-token-border-light bg-token-bg-primary rounded-2xl border px-6 py-10 text-center`,
        children: [t, (0, Q.jsx)(`p`, {
            className: `text-token-text-tertiary mt-2 text-sm`,
            children: (0, Q.jsx)(F, {
                ...$.dashboardEmptyStateDescription
            })
        })]
    }), e[1] = n) : n = e[1], n
}
var X, Z, Q, ln, un, dn, fn, pn, mn, hn, gn, $, _n, vn = e((() => {
    X = V(), k(), qe(), Ge(), T(), s(), Ue(), He(), G(), nt(), we(), it(), W(), xe(), _e(), $e(), Qe(), lt(), De(), Dt(), ft(), ht(), fe(), At(), Mt(), K(), Te(), i(), gt(), n(), a(), j(), ue(), r(), D(), Pe(), u(), oe(), Z = t(B()), z(), R(), C(), Ft(), Q = te(), ln = new Set([`open_entity_detail`, `open_url`]), un = {
        open_entity_detail: tt.open_entity_detail,
        open_url: tt.open_url
    }, dn = `mattress_ledger_open_account_link`, fn = `ledger_add_account_prompt`, pn = `ledger_category_correction_prompt`, mn = `ledger_category_review_saved`, hn = `ledger_finance_onboarding_widget`, gn = `finance-onboarding-connect-credit`, $ = N({
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
    }), _n = (0, Z.memo)($t, (e, t) => e.className === t.className && e.isRepairLoading === t.isRepairLoading && e.transactionPrefetchRevision === t.transactionPrefetchRevision && e.onWidgetAction === t.onWidgetAction && Yt(e.widgetConfig) === Yt(t.widgetConfig) && Kt(e.widgetConfig) === Kt(t.widgetConfig))
}));
export {
    Ct as a, bt as i, vn as n, vt as o, xt as r, yt as s, Zt as t
};
//# sourceMappingURL=f19e94aa-cwo246ji4s7x7hq9.js.map