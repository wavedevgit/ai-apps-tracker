const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/622fb003-o4i03mia5mrgv4hc.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-qsuygr73qjc6rh65.js", "assets/2340486e-komxp8tzs51ny4jj.js", "assets/root-lelxp0l2.css", "assets/conversation-small-cawdu7il3ha6y70c.js", "assets/30901919-jory365vq6ym5crx.js", "assets/c470f5ab-in0lllrdrzeo67gs.js", "assets/0e5afe53-f9gmgfmgrr83ziw3.js", "assets/conversation-small-czggvj2v.css", "assets/8b34dbc2-d4icgkio4i3wfm6q.js", "assets/82782bc9-jj605vonxg0iyc7p.js", "assets/6601bf01-iv0x4gtlp6n6914u.js", "assets/4f866508-gm32302vy1rviel5.js", "assets/e762572d-eus8emgj0hycazxs.js", "assets/9fe250df-k96fzw3kmsfwjum9.js", "assets/6671b9de-nxgp26gka1i5bjxl.js", "assets/dfee2fd5-dk7obk2zagph72kz.js", "assets/25a66342-m200wemwiiu84ulo.js", "assets/e44193fd-f0hwbdius6v4xt8w.js", "assets/3abc0e9f-j1dh8yba28ioc3mb.js", "assets/d3b04dc9-gpzz3nwjsxwpilf5.js", "assets/cc29053f-hor8lp7jf8xopi3p.js", "assets/69fc29f0-hqzkn2p54yrjb6ud.js", "assets/f94cb8df-k40rbxbxjpfo7qde.js", "assets/a238cce4-kimi7pqmcpq2asy0.js", "assets/e7ad522e-fe6pk5kicr0mlgmk.js", "assets/a52cbd6d-lve3wkvtl17ol3cm.js", "assets/d62a8c8e-r4o2x7os3ps0scbz.js", "assets/4cf35c7a-agd3kz164bjzljfz.js", "assets/b5901a24-dbmfvz58bri9hpdp.js", "assets/4b023495-o50uyv6wxfrxoxoy.js", "assets/46d93d39-jzss7gsmepsh6tds.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bot as n,
    CN as r,
    J0 as i,
    J5 as a,
    M5 as o,
    VU as s,
    Y0 as c,
    Z0 as l,
    _N as u,
    aE as d,
    e2 as f,
    eQ as p,
    eY as ee,
    fF as m,
    j5 as h,
    mtt as g,
    nY as _,
    ptt as v,
    q5 as y,
    qB as te,
    rE as ne,
    tV as re,
    uF as b,
    vN as x,
    yN as S,
    zU as C,
    zZ as ie,
    zot as w
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Hn as ae,
    Tn as T,
    Vn as E,
    ln as D,
    un as O
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    DYt as oe,
    EBt as se,
    EWt as ce,
    EYt as le,
    NWt as k,
    TAt as ue,
    TBt as de,
    a6 as fe,
    dht as pe,
    i6 as A,
    jAt as me,
    lht as j,
    o6 as M,
    r6 as he
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    Ju as ge,
    Ku as _e
} from "./8b34dbc2-d4icgkio4i3wfm6q.js";
import {
    a as ve,
    n as ye,
    r as be,
    t as xe
} from "./824d80d7-cx6fofj0tuoic6ge.js";
import {
    n as Se,
    t as Ce
} from "./e3349b6b-fycbqsesc39mqkw2.js";
import {
    i as we,
    n as Te,
    r as Ee,
    t as De
} from "./1c86a5ac-mgxjsuxkopk8yts6.js";

function N(e, t, n) {
    if (!e) {
        if (n) throw Error(`Invalid checkout session: ${t}`);
        console.warn(`Invalid checkout session: ${t}`)
    }
}
var Oe, ke, Ae, je, P, F, I, Me, L, R, Ne, z, Pe, Fe, B, Ie = e((() => {
        w(), Oe = /^[A-Z]{3}$/, ke = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/i, Ae = /^\+[1-9]\d{1,14}$/, je = [`fee`, `tax`, `fulfillment`, `discount`, `items_discount`, `tip`], P = (e, t, n) => {
            N(e.trim().length > 0, `${t} must be a non-empty string`, n)
        }, F = (e, t, n, r) => {
            N(e.length <= t, `${n} must be ${t} characters or fewer`, r)
        }, I = (e, t, n) => {
            N(Number.isInteger(e), `${t} must be provided in integer minor currency units`, n), N(e >= 0, `${t} must be greater than or equal to 0`, n)
        }, Me = (e, t, n) => {
            N(Number.isInteger(e) && e > 0, `${t} must be a positive integer`, n)
        }, L = e => ke.test(e) && !Number.isNaN(Date.parse(e)), R = (e, t) => {
            N(e.length > 0, `links must include at least one entry (e.g. terms of use or privacy policy)`, t), e.forEach((e, n) => {
                P(e.url, `links[${n}].url`, t);
                try {
                    new URL(e.url)
                } catch {
                    throw Error(`Invalid checkout session: links[${n}].url must be an absolute URL`)
                }
            })
        }, Ne = (e, t) => {
            P(e.name, `fulfillment_address.name`, t), F(e.name, 256, `fulfillment_address.name`, t), P(e.line_one, `fulfillment_address.line_one`, t), F(e.line_one, 60, `fulfillment_address.line_one`, t), e.line_two?.trim() && F(e.line_two, 60, `fulfillment_address.line_two`, t), P(e.city, `fulfillment_address.city`, t), F(e.city, 60, `fulfillment_address.city`, t), P(e.state, `fulfillment_address.state`, t), P(e.country, `fulfillment_address.country`, t), P(e.postal_code, `fulfillment_address.postal_code`, t), F(e.postal_code, 20, `fulfillment_address.postal_code`, t), e.phone_number && N(Ae.test(e.phone_number), `fulfillment_address.phone_number must follow the E.164 format (example: +15551234567)`, t)
        }, z = (e, t) => {
            let n = {
                baseAmount: 0,
                discount: 0,
                subtotal: 0,
                tax: 0,
                total: 0
            };
            for (let [r, i] of e.entries()) {
                P(i.id, `line_items[${r}].id`, t), P(i.item.id, `line_items[${r}].item.id`, t), Me(i.item.quantity, `line_items[${r}].item.quantity`, t), I(i.base_amount, `line_items[${r}].base_amount`, t), I(i.discount, `line_items[${r}].discount`, t), I(i.subtotal, `line_items[${r}].subtotal`, t), I(i.tax, `line_items[${r}].tax`, t), I(i.total, `line_items[${r}].total`, t);
                let e = i.base_amount - i.discount;
                N(i.subtotal === e, `line_items[${r}].subtotal must equal base_amount - discount (${e})`, t);
                let a = i.subtotal + i.tax;
                N(i.total === a, `line_items[${r}].total must equal subtotal + tax (${a})`, t), n.baseAmount += i.base_amount, n.discount += i.discount, n.subtotal += i.subtotal, n.tax += i.tax, n.total += i.total
            }
            return n
        }, Pe = (e, t, n) => {
            N(e.length > 0, `totals must contain at least one entry`, n);
            let r = {};
            for (let [t, i] of e.entries()) {
                I(i.amount, `totals[${t}].amount`, n);
                let e = r[i.type];
                e != null && N(je.includes(i.type), `totals contains duplicate total type "${i.type}"`, n), r[i.type] = (e ?? 0) + i.amount
            }
            N(r.items_base_amount !== void 0, `totals must include an items_base_amount entry`, n), N(r.subtotal !== void 0, `totals must include a subtotal entry`, n), N(r.total !== void 0, `totals must include a total entry`, n);
            let i = r;
            N(i.items_base_amount === t.baseAmount, `totals.items_base_amount (${i.items_base_amount}) must equal the sum of line item base_amounts (${t.baseAmount})`, n), i.items_discount !== void 0 && N(i.items_discount === t.discount, `totals.items_discount (${i.items_discount}) must equal the sum of line item discounts (${t.discount})`, n);
            let a = i.items_discount ?? t.discount,
                o = t.baseAmount - a;
            N(i.subtotal === o, `subtotal must equal items_base_amount - items_discount (${o})`, n);
            let s = i.discount ?? 0,
                c = i.fulfillment ?? 0,
                l = i.tax ?? t.tax,
                u = i.fee ?? 0,
                d = i.tip ?? 0,
                f = t.baseAmount - a - s + c + l + u + d;
            return N(i.total === f, `total must equal items_base_amount - items_discount - discount + fulfillment + tax + fee (${f})`, n), i
        }, Fe = (e, t) => {
            let n = new Map;
            for (let [r, i] of e.entries()) P(i.id, `fulfillment_options[${r}].id`, t), P(i.title, `fulfillment_options[${r}].title`, t), i.type === `shipping` && P(i.subtitle, `fulfillment_options[${r}].subtitle`, t), I(i.subtotal, `fulfillment_options[${r}].subtotal`, t), I(i.tax, `fulfillment_options[${r}].tax`, t), I(i.total, `fulfillment_options[${r}].total`, t), N(i.total === i.subtotal + i.tax, `fulfillment_options[${r}].total must equal subtotal + tax`, t), N(!n.has(i.id), `fulfillment option ids must be unique; duplicate id "${i.id}"`, t), i.type === `shipping` && (P(i.carrier, `fulfillment_options[${r}].carrier`, t), N(L(i.earliest_delivery_time), `fulfillment_options[${r}].earliest_delivery_time must be an RFC 3339 timestamp`, t), N(L(i.latest_delivery_time), `fulfillment_options[${r}].latest_delivery_time must be an RFC 3339 timestamp`, t), N(Date.parse(i.earliest_delivery_time) <= Date.parse(i.latest_delivery_time), `fulfillment_options[${r}].earliest_delivery_time must be before or equal to latest_delivery_time`, t)), n.set(i.id, i);
            return n
        }, B = (e, t = !1) => {
            P(e.id, `id`, t), N(Oe.test(e.currency), `currency "${e.currency}" must be a lower-case ISO 4217 code`, t), N(e.payment_provider.supported_payment_methods.length > 0, `payment_provider.supported_payment_methods must include at least one entry`, t), P(e.payment_provider.merchant_id, `payment_provider.merchant_id`, t), N(e.line_items.length > 0, `line_items must contain at least one entry`, t), N(e.totals.length > 0, `totals must contain at least one entry`, t), R(e.links, t), e.fulfillment_address && Ne(e.fulfillment_address, t);
            let r = z(e.line_items, t),
                i = Pe(e.totals, r, t),
                a = Fe(e.fulfillment_options, t);
            if (e.fulfillment_option_id) {
                let r = n(a.get(e.fulfillment_option_id), `fulfillment_option_id "${e.fulfillment_option_id}" must match an available fulfillment option`);
                N(i.fulfillment !== void 0, `totals must include a fulfillment entry when a fulfillment option is selected`, t), N(i.fulfillment === r.total, `fulfillment total (${i.fulfillment}) must equal the selected fulfillment option total (${r.total})`, t)
            }
        }
    })),
    Le, V = e((() => {
        ye(), be(), Ie(), m(), Le = async ({
            chatSDK: e,
            clientThreadId: t,
            resolvedWidget: n,
            checkoutSession: r
        }) => {
            let i = ve(r);
            return B(i, !1), xe(b(t)).openCheckout(e, n, i)
        }
    }));

function H(e) {
    return e.distributionChannel === v.OPENAI && e.connectorId || null
}

function U({
    connectorId: e,
    view: t
}) {
    return `${e}:${t}`
}

function Re(e, t) {
    let n = H(e),
        r = t?.view ?? e.metadata.view_params?.view;
    return n && r ? {
        connectorId: n,
        view: r
    } : null
}

function W(e, t) {
    G.set(U(e), t)
}

function ze(e, t) {
    let n = Re(e, t);
    if (!n) return null;
    let r = G.get(U(n));
    return r && (r.isEnabled?.() ?? !0) ? r : null
}
var G, K = e((() => {
    g(), G = new Map
}));

function Be() {
    for (let [e, t] of Object.entries(q)) W({
        connectorId: ue,
        view: e
    }, t)
}
var Ve, He, q, Ue = e((() => {
    K(), me(), Ce(), c(), O(), Ve = i(() => Se(D(() => import(`./622fb003-o4i03mia5mrgv4hc.js`).then(e => e.FinanceAccountLinkingValdiRenderer), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27])))), He = i(() => Se(D(() => import(`./d62a8c8e-r4o2x7os3ps0scbz.js`).then(e => e.FinanceCreditAccountDetailValdiRenderer), __vite__mapDeps([28, 1, 2, 3, 4, 29, 30, 18, 19, 15, 16, 17, 20, 31, 5, 6, 7, 8, 9, 13, 21, 22, 24, 25, 27, 32])))), q = {
        accountLinking: {
            component: Ve,
            supportsExternalPresentation: !0
        },
        creditAccountDetail: {
            component: He
        }
    }
}));

function We() {
    Be()
}
var Ge = e((() => {
        Ue()
    })),
    J, Ke, qe = e((() => {
        J = ({
            body: e
        }) => e.trim().length > 0 ? {
            description: e
        } : void 0, Ke = (e, t) => {
            let n = J(t);
            switch (t.level) {
                case `warning`:
                    e.warning(t.title, n);
                    return;
                case `success`:
                    e.success(t.title, n);
                    return;
                case `danger`:
                    e.danger(t.title, n);
                    return
            }
        }
    }));

function Y(e, t) {
    return (0, X.jsxs)(`div`, {
        className: `flex items-center justify-between gap-4 py-4`,
        children: [(0, X.jsx)(Z, {
            className: `h-[18px] w-[92px] rounded-md`
        }), (0, X.jsx)(Z, {
            className: `h-[18px] w-[150px] rounded-md`
        })]
    }, t)
}

function Je(e, t) {
    return (0, X.jsxs)(`div`, {
        className: `flex items-center gap-3 py-3`,
        children: [(0, X.jsx)(Z, {
            className: `h-8 w-8 rounded-full`
        }), (0, X.jsxs)(`div`, {
            className: `min-w-0 flex-1`,
            children: [(0, X.jsx)(Z, {
                className: `h-4 w-[76px] rounded-md`
            }), (0, X.jsx)(`div`, {
                className: `pt-1`,
                children: (0, X.jsx)(Z, {
                    className: `h-[14px] w-[54px] rounded-md`
                })
            })]
        }), (0, X.jsx)(Z, {
            className: `h-4 w-16 rounded-md`
        })]
    }, t)
}
var Ye, Xe, X, Ze, Z, Qe, $e, et, tt = e((() => {
    Ye = T(), ge(), k(), l(), V(), Ge(), K(), we(), Te(), A(), M(), oe(), qe(), h(), _(), C(), j(), p(), w(), S(), re(), ne(), u(), a(), de(), Xe = t(ae()), X = E(), We(), Ze = e => e?.order != null, Z = e => {
        "use forget";
        let t = (0, Ye.c)(4),
            {
                className: n
            } = e,
            r;
        t[0] === n ? r = t[1] : (r = y(`loading-results-shimmer`, n), t[0] = n, t[1] = r);
        let i;
        return t[2] === r ? i = t[3] : (i = (0, X.jsx)(`div`, {
            className: r,
            "data-testid": `ecosystem-focused-object-loading-block`
        }), t[2] = r, t[3] = i), i
    }, Qe = e => typeof e == `object` && !!e && !Array.isArray(e), $e = () => {
        "use forget";
        let e = (0, Ye.c)(8),
            t;
        e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, X.jsx)(`div`, {
            className: `flex items-center justify-end pb-4`,
            children: (0, X.jsx)(Z, {
                className: `h-9 w-9 rounded-full`
            })
        }), e[0] = t) : t = e[0];
        let n;
        e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, X.jsx)(Z, {
            className: `h-10 w-10 rounded-full`
        }), e[1] = n) : n = e[1];
        let r;
        e[2] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, X.jsx)(Z, {
            className: `h-[18px] w-[170px] rounded-md`
        }), e[2] = r) : r = e[2];
        let i;
        e[3] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, X.jsxs)(`div`, {
            className: `flex items-center gap-3`,
            children: [n, (0, X.jsxs)(`div`, {
                className: `min-w-0 flex-1`,
                children: [r, (0, X.jsx)(`div`, {
                    className: `pt-1`,
                    children: (0, X.jsx)(Z, {
                        className: `h-9 w-[164px] rounded-md`
                    })
                })]
            })]
        }), e[3] = i) : i = e[3];
        let a;
        e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, X.jsxs)(`div`, {
            className: `flex gap-2 pt-4`,
            children: [(0, X.jsx)(Z, {
                className: `h-10 w-24 rounded-full`
            }), (0, X.jsx)(Z, {
                className: `h-10 w-[140px] rounded-full`
            })]
        }), e[4] = a) : a = e[4];
        let o;
        e[5] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, X.jsx)(`div`, {
            className: `mt-5 divide-y divide-black/5 border-y border-black/5 dark:divide-white/10 dark:border-white/10`,
            children: Array.from({
                length: 5
            }, Y)
        }), e[5] = o) : o = e[5];
        let s;
        e[6] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, X.jsx)(`div`, {
            className: `pt-6`,
            children: (0, X.jsx)(Z, {
                className: `h-6 w-[196px] rounded-md`
            })
        }), e[6] = s) : s = e[6];
        let c;
        return e[7] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, X.jsxs)(`div`, {
            "aria-hidden": `true`,
            className: `bg-token-bg-primary pointer-events-none absolute inset-0 z-10 overflow-hidden px-5 pt-4 pb-6`,
            "data-testid": `ecosystem-focused-object-loading-state`,
            children: [t, i, a, o, s, (0, X.jsx)(`div`, {
                className: `pt-4`,
                children: Array.from({
                    length: 3
                }, Je)
            })]
        }), e[7] = c) : c = e[7], c
    }, et = e => {
        "use forget";
        let t = (0, Ye.c)(168),
            {
                heightHint: i,
                safeArea: a,
                widgetRef: c,
                conversation: l,
                chatSDK: u,
                clientThreadId: p,
                resolvedWidget: m,
                onReady: h,
                onClose: g,
                onRefreshOrigin: _,
                onCanGoBack: v,
                onCanGoForward: ne,
                onCheckoutComplete: re,
                onSetOpenInAppUrl: b,
                onUpdateWidgetState: S,
                onSendFollowUpMessage: C,
                createTargetedReplyContent: w,
                domain: ae,
                html: T,
                attributionId: E,
                widgetId: D,
                widgetParent: O,
                suggestionMessageId: oe,
                widgetType: k,
                features: ue,
                subdomain: de,
                csp: A,
                locale: me,
                params: j,
                displayMode: M,
                forceFullHeight: ge,
                forceFullWidth: ve,
                forceIntrinsicHeight: ye,
                isToolInputAuthorized: be
            } = e,
            xe = i === void 0 ? null : i,
            Se = ge !== void 0 && ge,
            Ce = ve !== void 0 && ve,
            we = ye !== void 0 && ye,
            Te;
        t[0] === l ? Te = t[1] : (Te = he(l), t[0] = l, t[1] = Te);
        let N = Te,
            [Oe, ke] = (0, Xe.useState)(xe),
            [Ae, je] = (0, Xe.useState)(!1),
            P = d(c, (0, Xe.useRef)(null)),
            F = r(),
            I = s(),
            {
                targetedContent: Me,
                setTargetedContent: L
            } = pe(),
            R;
        t[2] !== u || t[3] !== N ? (R = () => N.getWidgetStateAndProps$(u), t[2] = u, t[3] = N, t[4] = R) : R = t[4];
        let {
            toolInput: Ne,
            toolOutput: z,
            widgetState: Pe,
            toolResponseMetadata: Fe
        } = o(R), B;
        t[5] !== u || t[6] !== be || t[7] !== Ne || t[8] !== z ? (B = le(u, Ne, z, be), t[5] = u, t[6] = be, t[7] = Ne, t[8] = z, t[9] = B) : B = t[9];
        let Ie = B,
            V;
        t[10] === p ? V = t[11] : (V = ee(p), t[10] = p, t[11] = V);
        let H = V,
            U = Qe(j) ? j : null,
            Re;
        t[12] !== u || t[13] !== U ? (Re = ze(u, U), t[12] = u, t[13] = U, t[14] = Re) : Re = t[14];
        let W = Re,
            G = U?.loadingState === `detail`,
            K = U?.enableTargetedReply === !0,
            Be;
        t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (Be = () => {
            je(!1)
        }, t[15] = Be) : Be = t[15];
        let Ve;
        t[16] === T ? Ve = t[17] : (Ve = [T], t[16] = T, t[17] = Ve), (0, Xe.useEffect)(Be, Ve);
        let He;
        t[18] !== l.id || t[19] !== w || t[20] !== L ? (He = e => {
            let {
                text: t,
                context: n
            } = e;
            if (typeof t != `string`) return;
            let r = t.trim();
            if (!r) return;
            let i = w ? w({
                text: r,
                context: typeof n == `string` ? n : void 0
            }) : {
                type: `text`,
                label: r,
                createNewCompletionParams: e => ({
                    ...e,
                    promptMessage: se({}, e.promptMessage, {
                        metadata: {
                            targeted_reply: r,
                            targeted_reply_label: r
                        }
                    }),
                    appendMessages: [...e.appendMessages ?? [], ie(r)]
                })
            };
            L({
                ...i,
                conversationId: l.id
            })
        }, t[18] = l.id, t[19] = w, t[20] = L, t[21] = He) : He = t[21];
        let q = x(He),
            Ue;
        t[22] !== l.id || t[23] !== C || t[24] !== L || t[25] !== Me?.conversationId ? (Ue = e => {
            Me?.conversationId === l.id && L(void 0), C?.(e)
        }, t[22] = l.id, t[23] = C, t[24] = L, t[25] = Me?.conversationId, t[26] = Ue) : Ue = t[26];
        let We = x(Ue),
            Ge;
        t[27] === u ? Ge = t[28] : (Ge = (e, t) => new Promise(n => {
            let r = e ?? u.connectorId;
            if (!r) {
                n({
                    didConnect: !1
                });
                return
            }
            f(_e, {
                checkInstallationPolicy: !0,
                connectorId: r,
                redirectAfter: window.location.href,
                noRedirect: !0,
                referrer: ce.WidgetConnectSheet,
                postConnectExperienceSource: `elicitation`,
                requireAuth: t?.requireAuth,
                onComplete: e => n({
                    didConnect: !0,
                    linkId: typeof e?.linkId == `string` ? e.linkId : void 0
                }),
                onClose: () => n({
                    didConnect: !1
                })
            })
        }), t[27] = u, t[28] = Ge);
        let J = Ge,
            qe;
        t[29] === h ? qe = t[30] : (qe = () => {
            je(!0), h()
        }, t[29] = h, t[30] = qe);
        let Y = x(qe),
            Je, Z;
        if (t[31] !== Y || t[32] !== W ? (Je = () => {
                W && Y()
            }, Z = [Y, W], t[31] = Y, t[32] = W, t[33] = Je, t[34] = Z) : (Je = t[33], Z = t[34]), (0, Xe.useEffect)(Je, Z), W != null) {
            let e = W.component,
                n = Se && `h-full`,
                r = Ce && `w-full`,
                i;
            t[35] !== n || t[36] !== r ? (i = y(`min-h-0 max-h-full flex-shrink overflow-y-auto`, n, r), t[35] = n, t[36] = r, t[37] = i) : i = t[37];
            let a;
            t[38] === U ? a = t[39] : (a = U ?? {}, t[38] = U, t[39] = a);
            let o;
            t[40] !== e || t[41] !== u || t[42] !== l || t[43] !== M || t[44] !== g || t[45] !== _ || t[46] !== a ? (o = (0, X.jsx)(e, {
                chatSDK: u,
                conversation: l,
                displayMode: M,
                onClose: g,
                onRefreshOrigin: _,
                params: a
            }), t[40] = e, t[41] = u, t[42] = l, t[43] = M, t[44] = g, t[45] = _, t[46] = a, t[47] = o) : o = t[47];
            let s;
            return t[48] !== i || t[49] !== o ? (s = (0, X.jsx)(`div`, {
                className: i,
                children: o
            }), t[48] = i, t[49] = o, t[50] = s) : s = t[50], s
        }
        let et = G && `relative`,
            tt = !we && `max-h-full flex-shrink overflow-y-auto`,
            nt = Se && `h-full`,
            rt = Ce && `w-full`,
            Q;
        t[51] !== et || t[52] !== tt || t[53] !== nt || t[54] !== rt ? (Q = y(et, tt, nt, rt), t[51] = et, t[52] = tt, t[53] = nt, t[54] = rt, t[55] = Q) : Q = t[55];
        let it = Se ? void 0 : Math.max(Oe ?? 0, xe ?? 0),
            at;
        t[56] === it ? at = t[57] : (at = {
            height: it
        }, t[56] = it, t[57] = at);
        let ot;
        t[58] !== G || t[59] !== Ae ? (ot = !Ae && G ? (0, X.jsx)($e, {}) : null, t[58] = G, t[59] = Ae, t[60] = ot) : ot = t[60];
        let st = F ?? `light`,
            ct;
        t[61] === Symbol.for(`react.memo_cache_sentinel`) ? (ct = e => {
            ke(e)
        }, t[61] = ct) : ct = t[61];
        let lt;
        if (t[62] !== E || t[63] !== u || t[64] !== p || t[65] !== A || t[66] !== ae || t[67] !== K || t[68] !== N || t[69] !== v || t[70] !== ne || t[71] !== re || t[72] !== g || t[73] !== C || t[74] !== b || t[75] !== S || t[76] !== J || t[77] !== q || t[78] !== m || t[79] !== We || t[80] !== H || t[81] !== I || t[82] !== D || t[83] !== O || t[84] !== k) {
            let e;
            t[86] === g ? e = t[87] : (e = () => g(`request_close`), t[86] = g, t[87] = e);
            let r;
            t[88] !== K || t[89] !== q ? (r = K ? {
                requestTargetedReply: q
            } : {}, t[88] = K, t[89] = q, t[90] = r) : r = t[90];
            let i;
            t[91] !== C || t[92] !== We ? (i = C ? {
                sendFollowUpMessage: We
            } : {}, t[91] = C, t[92] = We, t[93] = i) : i = t[93];
            let a;
            t[94] === g ? a = t[95] : (a = () => g(`escape_key`), t[94] = g, t[95] = a);
            let o;
            t[96] !== u || t[97] !== p || t[98] !== re || t[99] !== m ? (o = async e => {
                let t = await Le({
                    chatSDK: u,
                    clientThreadId: p,
                    checkoutSession: e,
                    resolvedWidget: m
                });
                return Ze(t) && re?.(t), t
            }, t[96] = u, t[97] = p, t[98] = re, t[99] = m, t[100] = o) : o = t[100];
            let s;
            t[101] !== v || t[102] !== ne ? (s = e => {
                let {
                    canGoBack: t,
                    canGoForward: n
                } = e;
                v(t), ne?.(n)
            }, t[101] = v, t[102] = ne, t[103] = s) : s = t[103];
            let c;
            t[104] === I ? c = t[105] : (c = e => Ke(I, e), t[104] = I, t[105] = c);
            let l;
            t[106] === b ? l = t[107] : (l = e => b?.(e), t[106] = b, t[107] = l);
            let d, f;
            t[108] !== u.metadata || t[109] !== u.widgetSessionId || t[110] !== N || t[111] !== D || t[112] !== O ? (d = (e, t) => N.callTool$({
                appUri: n(O),
                name: e,
                args: t,
                callContext: {
                    messageId: D,
                    resourceName: u.metadata.resource_name ?? null,
                    connectorToolTargetMeta: u.metadata,
                    widgetContext: {
                        appUri: O,
                        widgetId: D,
                        widgetSessionId: u.widgetSessionId,
                        source: `iframe`
                    }
                }
            }), f = e => N.callMcp$(n(O), e, {
                messageId: D,
                resourceName: u.metadata.resource_name ?? null,
                connectorToolTargetMeta: u.metadata,
                widgetContext: {
                    appUri: O,
                    widgetId: D,
                    widgetSessionId: u.widgetSessionId,
                    source: `iframe`
                }
            }), t[108] = u.metadata, t[109] = u.widgetSessionId, t[110] = N, t[111] = D, t[112] = O, t[113] = d, t[114] = f) : (d = t[113], f = t[114]);
            let ee, h, _;
            t[115] !== N || t[116] !== O ? (ee = (e, t) => N.uploadFile$(n(O), e, t), h = e => N.getFileDownloadUrl$(n(O), e.fileId), _ = e => N.getFileMetadata$(n(O), e.fileId), t[115] = N, t[116] = O, t[117] = ee, t[118] = h, t[119] = _) : (ee = t[117], h = t[118], _ = t[119]);
            let y, x;
            t[120] === J ? (y = t[121], x = t[122]) : (y = e => {
                let {
                    connectorId: t
                } = e;
                return J(t)
            }, x = e => J(void 0, e), t[120] = J, t[121] = y, t[122] = x);
            let ie;
            t[123] !== N || t[124] !== O ? (ie = () => N.selectFiles$(n(O)), t[123] = N, t[124] = O, t[125] = ie) : ie = t[125];
            let w;
            t[126] !== u.metadata || t[127] !== u.widgetSessionId || t[128] !== N || t[129] !== S || t[130] !== D || t[131] !== O ? (w = async (e, t, n) => {
                if (S) return S(e, t, n);
                let r = {
                    appUri: O,
                    widgetId: D,
                    widgetSessionId: u.widgetSessionId,
                    source: `iframe`
                };
                if (!n?.waitForPersistence) return N.enqueueWidgetState$(e, t, {
                    hydratedRevision: u.metadata.widget_state_revision ?? 0,
                    widgetContext: r
                }), {
                    ok: !0
                };
                try {
                    return await N.enqueueWidgetState$(e, t, {
                        hydratedRevision: u.metadata.widget_state_revision ?? 0,
                        waitForPersistence: !0,
                        widgetContext: r
                    }), {
                        ok: !0
                    }
                } catch (e) {
                    return fe(e)
                }
            }, t[126] = u.metadata, t[127] = u.widgetSessionId, t[128] = N, t[129] = S, t[130] = D, t[131] = O, t[132] = w) : w = t[132], lt = {
                notifyIntrinsicHeight: ct,
                openExternal(e) {
                    let {
                        href: t,
                        redirectUrl: n,
                        openMode: r
                    } = e, i = n === !1 ? null : H ? new URL(te(H), window.location.origin).toString() : new URL(window.location.href).toString();
                    Ee({
                        attributionId: E,
                        conversationId: H,
                        href: t,
                        csp: A,
                        messageId: D,
                        redirectDomains: m.redirectDomains,
                        resolvedPineappleUri: u.metadata.resolved_pineapple_uri ?? null,
                        domain: ae,
                        distributionChannel: u.distributionChannel,
                        redirectUrl: i,
                        openMode: r,
                        sectionLocation: `focused_object`,
                        widgetName: k,
                        widgetSessionId: u.widgetSessionId
                    })
                },
                requestClose: e,
                ...r,
                ...i,
                notifyEscapeKey: a,
                requestCheckout: o,
                notifyNavigation: s,
                showToast: c,
                setOpenInAppUrl: l,
                callTool: d,
                callMcp: f,
                uploadFile: ee,
                getFileDownloadUrl: h,
                getFileMetadata: _,
                requestLinkToConnector: y,
                requestConnectSheet: x,
                selectFiles: ie,
                updateWidgetState: w
            }, t[62] = E, t[63] = u, t[64] = p, t[65] = A, t[66] = ae, t[67] = K, t[68] = N, t[69] = v, t[70] = ne, t[71] = re, t[72] = g, t[73] = C, t[74] = b, t[75] = S, t[76] = J, t[77] = q, t[78] = m, t[79] = We, t[80] = H, t[81] = I, t[82] = D, t[83] = O, t[84] = k, t[85] = lt
        } else lt = t[85];
        let $;
        t[133] !== Ie || t[134] !== E || t[135] !== u.distributionChannel || t[136] !== u.metadata || t[137] !== u.oaiSubjectId || t[138] !== u.widgetSessionId || t[139] !== A || t[140] !== M || t[141] !== ue || t[142] !== P || t[143] !== Y || t[144] !== T || t[145] !== me || t[146] !== j || t[147] !== m.name || t[148] !== m.permissions || t[149] !== m.toolInfo || t[150] !== a || t[151] !== H || t[152] !== de || t[153] !== oe || t[154] !== st || t[155] !== lt || t[156] !== z || t[157] !== Fe || t[158] !== D || t[159] !== O || t[160] !== Pe || t[161] !== k ? ($ = (0, X.jsx)(De, {
            host: `chatgpt`,
            html: T,
            ref: P,
            theme: st,
            attributionId: E,
            appDisplayName: m.name,
            measureWidth: !1,
            onReady: Y,
            conversationId: H,
            widgetId: D,
            widgetSessionId: u.widgetSessionId,
            widgetParent: O,
            connectorToolTargetMeta: u.metadata,
            widgetDistributionChannel: u.distributionChannel,
            suggestionMessageId: oe,
            widgetType: k,
            subdomain: de,
            widgetState: Pe,
            toolInput: Ie,
            toolOutput: z,
            toolResponseMetadata: Fe,
            toolInfo: m.toolInfo,
            subjectId: u.oaiSubjectId,
            features: ue,
            permissions: m.permissions,
            viewParams: j,
            safeArea: a,
            displayMode: M,
            api: lt,
            csp: A,
            locale: me
        }), t[133] = Ie, t[134] = E, t[135] = u.distributionChannel, t[136] = u.metadata, t[137] = u.oaiSubjectId, t[138] = u.widgetSessionId, t[139] = A, t[140] = M, t[141] = ue, t[142] = P, t[143] = Y, t[144] = T, t[145] = me, t[146] = j, t[147] = m.name, t[148] = m.permissions, t[149] = m.toolInfo, t[150] = a, t[151] = H, t[152] = de, t[153] = oe, t[154] = st, t[155] = lt, t[156] = z, t[157] = Fe, t[158] = D, t[159] = O, t[160] = Pe, t[161] = k, t[162] = $) : $ = t[162];
        let ut;
        return t[163] !== Q || t[164] !== at || t[165] !== ot || t[166] !== $ ? (ut = (0, X.jsxs)(`div`, {
            className: Q,
            style: at,
            children: [ot, $]
        }), t[163] = Q, t[164] = at, t[165] = ot, t[166] = $, t[167] = ut) : ut = t[167], ut
    }
}));
export {
    ze as a, V as c, Ke as i, tt as n, K as o, qe as r, Le as s, et as t
};
//# sourceMappingURL=f7e0bf69-dfh33vyqyj8mpiiq.js.map