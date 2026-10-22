const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/622fb003-eqnhfvialgfr8fty.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-d7xm9wsvhdfbag9a.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-m7dgsxtvvivh3e6t.js", "assets/30901919-lc79rizhhepnsl3q.js", "assets/c470f5ab-lnsrbaizit3lulwq.js", "assets/0e5afe53-lar0ol3v36kqq3ou.js", "assets/conversation-small-ertg9659.css", "assets/8b34dbc2-ik628tlti8ozm9vq.js", "assets/82782bc9-cyj0qqxyrvk6mamy.js", "assets/6601bf01-cv017wvicdz2f7ow.js", "assets/4f866508-6ga8e9nxmlp2qc0c.js", "assets/e762572d-hplb1nd79ppn7q2q.js", "assets/9fe250df-jsdj1yik7vblqtlo.js", "assets/6671b9de-nxgp26gka1i5bjxl.js", "assets/dfee2fd5-m8ou3lgbndgvxfnx.js", "assets/25a66342-nr8gszzpq9esjmev.js", "assets/e44193fd-f0hwbdius6v4xt8w.js", "assets/3abc0e9f-ggh7rsl8d13yj8m9.js", "assets/d3b04dc9-cvnj1c9mvfc9a6jz.js", "assets/cc29053f-ljs6fq7i66p2aais.js", "assets/69fc29f0-maseh8bk2a49713j.js", "assets/f94cb8df-em0qeb62dox5r7bj.js", "assets/a238cce4-dj8r1tvhbdqxspiy.js", "assets/e7ad522e-srjnkbgxiw4z797w.js", "assets/a52cbd6d-hb54yjibbww2x29u.js", "assets/d62a8c8e-e7qas34m7z5xm41d.js", "assets/4cf35c7a-fuufw34ubkxvq703.js", "assets/b5901a24-lf9tyby1b7iurr0s.js", "assets/4b023495-gkjyjr4gpql3h7gv.js", "assets/46d93d39-icb551za08fy0xmy.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CN as n,
    J5 as r,
    LU as i,
    LZ as a,
    Mtt as o,
    QJ as s,
    QZ as c,
    TN as l,
    a2 as u,
    c2 as d,
    cst as f,
    d2 as ee,
    dE as te,
    eY as p,
    gF as m,
    jtt as h,
    kN as ne,
    l7 as g,
    lE as re,
    lV as _,
    o2 as v,
    q5 as y,
    sst as b,
    tV as ie,
    u7 as x,
    vF as S,
    wN as C,
    zU as ae
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    Bn as oe,
    Vn as w,
    cn as T,
    ln as E,
    wn as D
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    DAt as se,
    IWt as O,
    IYt as ce,
    LYt as le,
    NAt as ue,
    OBt as k,
    d6 as de,
    dht as fe,
    f6 as pe,
    kBt as me,
    kWt as he,
    l6 as ge,
    lht as _e,
    u6 as A
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    Qu as ve,
    Xu as ye
} from "./8b34dbc2-ik628tlti8ozm9vq.js";
import {
    a as be,
    n as xe,
    r as Se,
    t as Ce
} from "./824d80d7-eiehljajxu2blgrb.js";
import {
    n as we,
    t as Te
} from "./e3349b6b-iqapg459coifzg9f.js";
import {
    i as Ee,
    n as De,
    r as Oe,
    t as ke
} from "./1c86a5ac-lual4mtli3m8o3sx.js";

function j(e, t, n) {
    if (!e) {
        if (n) throw Error(`Invalid checkout session: ${t}`);
        console.warn(`Invalid checkout session: ${t}`)
    }
}
var Ae, je, Me, Ne, M, N, P, Pe, F, I, Fe, L, Ie, Le, R, Re = e((() => {
        b(), Ae = /^[A-Z]{3}$/, je = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/i, Me = /^\+[1-9]\d{1,14}$/, Ne = [`fee`, `tax`, `fulfillment`, `discount`, `items_discount`, `tip`], M = (e, t, n) => {
            j(e.trim().length > 0, `${t} must be a non-empty string`, n)
        }, N = (e, t, n, r) => {
            j(e.length <= t, `${n} must be ${t} characters or fewer`, r)
        }, P = (e, t, n) => {
            j(Number.isInteger(e), `${t} must be provided in integer minor currency units`, n), j(e >= 0, `${t} must be greater than or equal to 0`, n)
        }, Pe = (e, t, n) => {
            j(Number.isInteger(e) && e > 0, `${t} must be a positive integer`, n)
        }, F = e => je.test(e) && !Number.isNaN(Date.parse(e)), I = (e, t) => {
            j(e.length > 0, `links must include at least one entry (e.g. terms of use or privacy policy)`, t), e.forEach((e, n) => {
                M(e.url, `links[${n}].url`, t);
                try {
                    new URL(e.url)
                } catch {
                    throw Error(`Invalid checkout session: links[${n}].url must be an absolute URL`)
                }
            })
        }, Fe = (e, t) => {
            M(e.name, `fulfillment_address.name`, t), N(e.name, 256, `fulfillment_address.name`, t), M(e.line_one, `fulfillment_address.line_one`, t), N(e.line_one, 60, `fulfillment_address.line_one`, t), e.line_two?.trim() && N(e.line_two, 60, `fulfillment_address.line_two`, t), M(e.city, `fulfillment_address.city`, t), N(e.city, 60, `fulfillment_address.city`, t), M(e.state, `fulfillment_address.state`, t), M(e.country, `fulfillment_address.country`, t), M(e.postal_code, `fulfillment_address.postal_code`, t), N(e.postal_code, 20, `fulfillment_address.postal_code`, t), e.phone_number && j(Me.test(e.phone_number), `fulfillment_address.phone_number must follow the E.164 format (example: +15551234567)`, t)
        }, L = (e, t) => {
            let n = {
                baseAmount: 0,
                discount: 0,
                subtotal: 0,
                tax: 0,
                total: 0
            };
            for (let [r, i] of e.entries()) {
                M(i.id, `line_items[${r}].id`, t), M(i.item.id, `line_items[${r}].item.id`, t), Pe(i.item.quantity, `line_items[${r}].item.quantity`, t), P(i.base_amount, `line_items[${r}].base_amount`, t), P(i.discount, `line_items[${r}].discount`, t), P(i.subtotal, `line_items[${r}].subtotal`, t), P(i.tax, `line_items[${r}].tax`, t), P(i.total, `line_items[${r}].total`, t);
                let e = i.base_amount - i.discount;
                j(i.subtotal === e, `line_items[${r}].subtotal must equal base_amount - discount (${e})`, t);
                let a = i.subtotal + i.tax;
                j(i.total === a, `line_items[${r}].total must equal subtotal + tax (${a})`, t), n.baseAmount += i.base_amount, n.discount += i.discount, n.subtotal += i.subtotal, n.tax += i.tax, n.total += i.total
            }
            return n
        }, Ie = (e, t, n) => {
            j(e.length > 0, `totals must contain at least one entry`, n);
            let r = {};
            for (let [t, i] of e.entries()) {
                P(i.amount, `totals[${t}].amount`, n);
                let e = r[i.type];
                e != null && j(Ne.includes(i.type), `totals contains duplicate total type "${i.type}"`, n), r[i.type] = (e ?? 0) + i.amount
            }
            j(r.items_base_amount !== void 0, `totals must include an items_base_amount entry`, n), j(r.subtotal !== void 0, `totals must include a subtotal entry`, n), j(r.total !== void 0, `totals must include a total entry`, n);
            let i = r;
            j(i.items_base_amount === t.baseAmount, `totals.items_base_amount (${i.items_base_amount}) must equal the sum of line item base_amounts (${t.baseAmount})`, n), i.items_discount !== void 0 && j(i.items_discount === t.discount, `totals.items_discount (${i.items_discount}) must equal the sum of line item discounts (${t.discount})`, n);
            let a = i.items_discount ?? t.discount,
                o = t.baseAmount - a;
            j(i.subtotal === o, `subtotal must equal items_base_amount - items_discount (${o})`, n);
            let s = i.discount ?? 0,
                c = i.fulfillment ?? 0,
                l = i.tax ?? t.tax,
                u = i.fee ?? 0,
                d = i.tip ?? 0,
                f = t.baseAmount - a - s + c + l + u + d;
            return j(i.total === f, `total must equal items_base_amount - items_discount - discount + fulfillment + tax + fee (${f})`, n), i
        }, Le = (e, t) => {
            let n = new Map;
            for (let [r, i] of e.entries()) M(i.id, `fulfillment_options[${r}].id`, t), M(i.title, `fulfillment_options[${r}].title`, t), i.type === `shipping` && M(i.subtitle, `fulfillment_options[${r}].subtitle`, t), P(i.subtotal, `fulfillment_options[${r}].subtotal`, t), P(i.tax, `fulfillment_options[${r}].tax`, t), P(i.total, `fulfillment_options[${r}].total`, t), j(i.total === i.subtotal + i.tax, `fulfillment_options[${r}].total must equal subtotal + tax`, t), j(!n.has(i.id), `fulfillment option ids must be unique; duplicate id "${i.id}"`, t), i.type === `shipping` && (M(i.carrier, `fulfillment_options[${r}].carrier`, t), j(F(i.earliest_delivery_time), `fulfillment_options[${r}].earliest_delivery_time must be an RFC 3339 timestamp`, t), j(F(i.latest_delivery_time), `fulfillment_options[${r}].latest_delivery_time must be an RFC 3339 timestamp`, t), j(Date.parse(i.earliest_delivery_time) <= Date.parse(i.latest_delivery_time), `fulfillment_options[${r}].earliest_delivery_time must be before or equal to latest_delivery_time`, t)), n.set(i.id, i);
            return n
        }, R = (e, t = !1) => {
            M(e.id, `id`, t), j(Ae.test(e.currency), `currency "${e.currency}" must be a lower-case ISO 4217 code`, t), j(e.payment_provider.supported_payment_methods.length > 0, `payment_provider.supported_payment_methods must include at least one entry`, t), M(e.payment_provider.merchant_id, `payment_provider.merchant_id`, t), j(e.line_items.length > 0, `line_items must contain at least one entry`, t), j(e.totals.length > 0, `totals must contain at least one entry`, t), I(e.links, t), e.fulfillment_address && Fe(e.fulfillment_address, t);
            let n = L(e.line_items, t),
                r = Ie(e.totals, n, t),
                i = Le(e.fulfillment_options, t);
            if (e.fulfillment_option_id) {
                let n = f(i.get(e.fulfillment_option_id), `fulfillment_option_id "${e.fulfillment_option_id}" must match an available fulfillment option`);
                j(r.fulfillment !== void 0, `totals must include a fulfillment entry when a fulfillment option is selected`, t), j(r.fulfillment === n.total, `fulfillment total (${r.fulfillment}) must equal the selected fulfillment option total (${n.total})`, t)
            }
        }
    })),
    ze, z = e((() => {
        xe(), Se(), Re(), S(), ze = async ({
            chatSDK: e,
            clientThreadId: t,
            resolvedWidget: n,
            checkoutSession: r
        }) => {
            let i = be(r);
            return R(i, !1), Ce(m(t)).openCheckout(e, n, i)
        }
    }));

function B(e) {
    return e.distributionChannel === h.OPENAI && e.connectorId || null
}

function V({
    connectorId: e,
    view: t
}) {
    return `${e}:${t}`
}

function Be(e, t) {
    let n = B(e),
        r = t?.view ?? e.metadata.view_params?.view;
    return n && r ? {
        connectorId: n,
        view: r
    } : null
}

function H(e, t) {
    U.set(V(e), t)
}

function Ve(e, t) {
    let n = Be(e, t);
    if (!n) return null;
    let r = U.get(V(n));
    return r && (r.isEnabled?.() ?? !0) ? r : null
}
var U, W = e((() => {
    o(), U = new Map
}));

function He() {
    for (let [e, t] of Object.entries(q)) H({
        connectorId: se,
        view: e
    }, t)
}
var G, K, q, Ue = e((() => {
    W(), ue(), Te(), v(), E(), G = u(() => we(T(() => import(`./622fb003-eqnhfvialgfr8fty.js`).then(e => e.FinanceAccountLinkingValdiRenderer), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27])))), K = u(() => we(T(() => import(`./d62a8c8e-e7qas34m7z5xm41d.js`).then(e => e.FinanceCreditAccountDetailValdiRenderer), __vite__mapDeps([28, 1, 2, 3, 4, 29, 30, 18, 19, 15, 16, 17, 20, 31, 5, 6, 7, 8, 9, 13, 21, 22, 24, 25, 27, 32])))), q = {
        accountLinking: {
            component: G,
            supportsExternalPresentation: !0
        },
        creditAccountDetail: {
            component: K
        }
    }
}));

function We() {
    He()
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
    Ye = D(), ve(), O(), d(), z(), Ge(), W(), Ee(), De(), A(), pe(), le(), qe(), y(), p(), i(), _e(), c(), b(), l(), _(), re(), n(), x(), k(), Xe = t(w()), X = oe(), We(), Ze = e => e?.order != null, Z = e => {
        "use forget";
        let t = (0, Ye.c)(4),
            {
                className: n
            } = e,
            r;
        t[0] === n ? r = t[1] : (r = g(`loading-results-shimmer`, n), t[0] = n, t[1] = r);
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
                heightHint: n,
                safeArea: i,
                widgetRef: o,
                conversation: c,
                chatSDK: l,
                clientThreadId: u,
                resolvedWidget: d,
                onReady: p,
                onClose: m,
                onRefreshOrigin: h,
                onCanGoBack: re,
                onCanGoForward: _,
                onCheckoutComplete: v,
                onSetOpenInAppUrl: y,
                onUpdateWidgetState: b,
                onSendFollowUpMessage: x,
                createTargetedReplyContent: S,
                domain: oe,
                html: w,
                attributionId: T,
                widgetId: E,
                widgetParent: D,
                suggestionMessageId: se,
                widgetType: O,
                features: le,
                subdomain: ue,
                csp: k,
                locale: pe,
                params: _e,
                displayMode: A,
                forceFullHeight: ve,
                forceFullWidth: be,
                forceIntrinsicHeight: xe,
                isToolInputAuthorized: Se
            } = e,
            Ce = n === void 0 ? null : n,
            we = ve !== void 0 && ve,
            Te = be !== void 0 && be,
            Ee = xe !== void 0 && xe,
            De;
        t[0] === c ? De = t[1] : (De = ge(c), t[0] = c, t[1] = De);
        let j = De,
            [Ae, je] = (0, Xe.useState)(Ce),
            [Me, Ne] = (0, Xe.useState)(!1),
            M = te(o, (0, Xe.useRef)(null)),
            N = ne(),
            P = ae(),
            {
                targetedContent: Pe,
                setTargetedContent: F
            } = fe(),
            I;
        t[2] !== l || t[3] !== j ? (I = () => j.getWidgetStateAndProps$(l), t[2] = l, t[3] = j, t[4] = I) : I = t[4];
        let {
            toolInput: Fe,
            toolOutput: L,
            widgetState: Ie,
            toolResponseMetadata: Le
        } = r(I), R;
        t[5] !== l || t[6] !== Se || t[7] !== Fe || t[8] !== L ? (R = ce(l, Fe, L, Se), t[5] = l, t[6] = Se, t[7] = Fe, t[8] = L, t[9] = R) : R = t[9];
        let Re = R,
            z;
        t[10] === u ? z = t[11] : (z = s(u), t[10] = u, t[11] = z);
        let B = z,
            V = Qe(_e) ? _e : null,
            Be;
        t[12] !== l || t[13] !== V ? (Be = Ve(l, V), t[12] = l, t[13] = V, t[14] = Be) : Be = t[14];
        let H = Be,
            U = V?.loadingState === `detail`,
            W = V?.enableTargetedReply === !0,
            He;
        t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (He = () => {
            Ne(!1)
        }, t[15] = He) : He = t[15];
        let G;
        t[16] === w ? G = t[17] : (G = [w], t[16] = w, t[17] = G), (0, Xe.useEffect)(He, G);
        let K;
        t[18] !== c.id || t[19] !== S || t[20] !== F ? (K = e => {
            let {
                text: t,
                context: n
            } = e;
            if (typeof t != `string`) return;
            let r = t.trim();
            if (!r) return;
            let i = S ? S({
                text: r,
                context: typeof n == `string` ? n : void 0
            }) : {
                type: `text`,
                label: r,
                createNewCompletionParams: e => ({
                    ...e,
                    promptMessage: me({}, e.promptMessage, {
                        metadata: {
                            targeted_reply: r,
                            targeted_reply_label: r
                        }
                    }),
                    appendMessages: [...e.appendMessages ?? [], a(r)]
                })
            };
            F({
                ...i,
                conversationId: c.id
            })
        }, t[18] = c.id, t[19] = S, t[20] = F, t[21] = K) : K = t[21];
        let q = C(K),
            Ue;
        t[22] !== c.id || t[23] !== x || t[24] !== F || t[25] !== Pe?.conversationId ? (Ue = e => {
            Pe?.conversationId === c.id && F(void 0), x?.(e)
        }, t[22] = c.id, t[23] = x, t[24] = F, t[25] = Pe?.conversationId, t[26] = Ue) : Ue = t[26];
        let We = C(Ue),
            Ge;
        t[27] === l ? Ge = t[28] : (Ge = (e, t) => new Promise(n => {
            let r = e ?? l.connectorId;
            if (!r) {
                n({
                    didConnect: !1
                });
                return
            }
            ee(ye, {
                checkInstallationPolicy: !0,
                connectorId: r,
                redirectAfter: window.location.href,
                noRedirect: !0,
                referrer: he.WidgetConnectSheet,
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
        }), t[27] = l, t[28] = Ge);
        let J = Ge,
            qe;
        t[29] === p ? qe = t[30] : (qe = () => {
            Ne(!0), p()
        }, t[29] = p, t[30] = qe);
        let Y = C(qe),
            Je, Z;
        if (t[31] !== Y || t[32] !== H ? (Je = () => {
                H && Y()
            }, Z = [Y, H], t[31] = Y, t[32] = H, t[33] = Je, t[34] = Z) : (Je = t[33], Z = t[34]), (0, Xe.useEffect)(Je, Z), H != null) {
            let e = H.component,
                n = we && `h-full`,
                r = Te && `w-full`,
                i;
            t[35] !== n || t[36] !== r ? (i = g(`min-h-0 max-h-full flex-shrink overflow-y-auto`, n, r), t[35] = n, t[36] = r, t[37] = i) : i = t[37];
            let a;
            t[38] === V ? a = t[39] : (a = V ?? {}, t[38] = V, t[39] = a);
            let o;
            t[40] !== e || t[41] !== l || t[42] !== c || t[43] !== A || t[44] !== m || t[45] !== h || t[46] !== a ? (o = (0, X.jsx)(e, {
                chatSDK: l,
                conversation: c,
                displayMode: A,
                onClose: m,
                onRefreshOrigin: h,
                params: a
            }), t[40] = e, t[41] = l, t[42] = c, t[43] = A, t[44] = m, t[45] = h, t[46] = a, t[47] = o) : o = t[47];
            let s;
            return t[48] !== i || t[49] !== o ? (s = (0, X.jsx)(`div`, {
                className: i,
                children: o
            }), t[48] = i, t[49] = o, t[50] = s) : s = t[50], s
        }
        let et = U && `relative`,
            tt = !Ee && `max-h-full flex-shrink overflow-y-auto`,
            nt = we && `h-full`,
            rt = Te && `w-full`,
            Q;
        t[51] !== et || t[52] !== tt || t[53] !== nt || t[54] !== rt ? (Q = g(et, tt, nt, rt), t[51] = et, t[52] = tt, t[53] = nt, t[54] = rt, t[55] = Q) : Q = t[55];
        let it = we ? void 0 : Math.max(Ae ?? 0, Ce ?? 0),
            at;
        t[56] === it ? at = t[57] : (at = {
            height: it
        }, t[56] = it, t[57] = at);
        let ot;
        t[58] !== U || t[59] !== Me ? (ot = !Me && U ? (0, X.jsx)($e, {}) : null, t[58] = U, t[59] = Me, t[60] = ot) : ot = t[60];
        let st = N ?? `light`,
            ct;
        t[61] === Symbol.for(`react.memo_cache_sentinel`) ? (ct = e => {
            je(e)
        }, t[61] = ct) : ct = t[61];
        let lt;
        if (t[62] !== T || t[63] !== l || t[64] !== u || t[65] !== k || t[66] !== oe || t[67] !== W || t[68] !== j || t[69] !== re || t[70] !== _ || t[71] !== v || t[72] !== m || t[73] !== x || t[74] !== y || t[75] !== b || t[76] !== J || t[77] !== q || t[78] !== d || t[79] !== We || t[80] !== B || t[81] !== P || t[82] !== E || t[83] !== D || t[84] !== O) {
            let e;
            t[86] === m ? e = t[87] : (e = () => m(`request_close`), t[86] = m, t[87] = e);
            let n;
            t[88] !== W || t[89] !== q ? (n = W ? {
                requestTargetedReply: q
            } : {}, t[88] = W, t[89] = q, t[90] = n) : n = t[90];
            let r;
            t[91] !== x || t[92] !== We ? (r = x ? {
                sendFollowUpMessage: We
            } : {}, t[91] = x, t[92] = We, t[93] = r) : r = t[93];
            let i;
            t[94] === m ? i = t[95] : (i = () => m(`escape_key`), t[94] = m, t[95] = i);
            let a;
            t[96] !== l || t[97] !== u || t[98] !== v || t[99] !== d ? (a = async e => {
                let t = await ze({
                    chatSDK: l,
                    clientThreadId: u,
                    checkoutSession: e,
                    resolvedWidget: d
                });
                return Ze(t) && v?.(t), t
            }, t[96] = l, t[97] = u, t[98] = v, t[99] = d, t[100] = a) : a = t[100];
            let o;
            t[101] !== re || t[102] !== _ ? (o = e => {
                let {
                    canGoBack: t,
                    canGoForward: n
                } = e;
                re(t), _?.(n)
            }, t[101] = re, t[102] = _, t[103] = o) : o = t[103];
            let s;
            t[104] === P ? s = t[105] : (s = e => Ke(P, e), t[104] = P, t[105] = s);
            let c;
            t[106] === y ? c = t[107] : (c = e => y?.(e), t[106] = y, t[107] = c);
            let ee, te;
            t[108] !== l.metadata || t[109] !== l.widgetSessionId || t[110] !== j || t[111] !== E || t[112] !== D ? (ee = (e, t) => j.callTool$({
                appUri: f(D),
                name: e,
                args: t,
                callContext: {
                    messageId: E,
                    resourceName: l.metadata.resource_name ?? null,
                    connectorToolTargetMeta: l.metadata,
                    widgetContext: {
                        appUri: D,
                        widgetId: E,
                        widgetSessionId: l.widgetSessionId,
                        source: `iframe`
                    }
                }
            }), te = e => j.callMcp$(f(D), e, {
                messageId: E,
                resourceName: l.metadata.resource_name ?? null,
                connectorToolTargetMeta: l.metadata,
                widgetContext: {
                    appUri: D,
                    widgetId: E,
                    widgetSessionId: l.widgetSessionId,
                    source: `iframe`
                }
            }), t[108] = l.metadata, t[109] = l.widgetSessionId, t[110] = j, t[111] = E, t[112] = D, t[113] = ee, t[114] = te) : (ee = t[113], te = t[114]);
            let p, h, ne;
            t[115] !== j || t[116] !== D ? (p = (e, t) => j.uploadFile$(f(D), e, t), h = e => j.getFileDownloadUrl$(f(D), e.fileId), ne = e => j.getFileMetadata$(f(D), e.fileId), t[115] = j, t[116] = D, t[117] = p, t[118] = h, t[119] = ne) : (p = t[117], h = t[118], ne = t[119]);
            let g, S;
            t[120] === J ? (g = t[121], S = t[122]) : (g = e => {
                let {
                    connectorId: t
                } = e;
                return J(t)
            }, S = e => J(void 0, e), t[120] = J, t[121] = g, t[122] = S);
            let C;
            t[123] !== j || t[124] !== D ? (C = () => j.selectFiles$(f(D)), t[123] = j, t[124] = D, t[125] = C) : C = t[125];
            let ae;
            t[126] !== l.metadata || t[127] !== l.widgetSessionId || t[128] !== j || t[129] !== b || t[130] !== E || t[131] !== D ? (ae = async (e, t, n) => {
                if (b) return b(e, t, n);
                let r = {
                    appUri: D,
                    widgetId: E,
                    widgetSessionId: l.widgetSessionId,
                    source: `iframe`
                };
                if (!n?.waitForPersistence) return j.enqueueWidgetState$(e, t, {
                    hydratedRevision: l.metadata.widget_state_revision ?? 0,
                    widgetContext: r
                }), {
                    ok: !0
                };
                try {
                    return await j.enqueueWidgetState$(e, t, {
                        hydratedRevision: l.metadata.widget_state_revision ?? 0,
                        waitForPersistence: !0,
                        widgetContext: r
                    }), {
                        ok: !0
                    }
                } catch (e) {
                    return de(e)
                }
            }, t[126] = l.metadata, t[127] = l.widgetSessionId, t[128] = j, t[129] = b, t[130] = E, t[131] = D, t[132] = ae) : ae = t[132], lt = {
                notifyIntrinsicHeight: ct,
                openExternal(e) {
                    let {
                        href: t,
                        redirectUrl: n,
                        openMode: r
                    } = e, i = n === !1 ? null : B ? new URL(ie(B), window.location.origin).toString() : new URL(window.location.href).toString();
                    Oe({
                        attributionId: T,
                        conversationId: B,
                        href: t,
                        csp: k,
                        messageId: E,
                        redirectDomains: d.redirectDomains,
                        resolvedPineappleUri: l.metadata.resolved_pineapple_uri ?? null,
                        domain: oe,
                        distributionChannel: l.distributionChannel,
                        redirectUrl: i,
                        openMode: r,
                        sectionLocation: `focused_object`,
                        widgetName: O,
                        widgetSessionId: l.widgetSessionId
                    })
                },
                requestClose: e,
                ...n,
                ...r,
                notifyEscapeKey: i,
                requestCheckout: a,
                notifyNavigation: o,
                showToast: s,
                setOpenInAppUrl: c,
                callTool: ee,
                callMcp: te,
                uploadFile: p,
                getFileDownloadUrl: h,
                getFileMetadata: ne,
                requestLinkToConnector: g,
                requestConnectSheet: S,
                selectFiles: C,
                updateWidgetState: ae
            }, t[62] = T, t[63] = l, t[64] = u, t[65] = k, t[66] = oe, t[67] = W, t[68] = j, t[69] = re, t[70] = _, t[71] = v, t[72] = m, t[73] = x, t[74] = y, t[75] = b, t[76] = J, t[77] = q, t[78] = d, t[79] = We, t[80] = B, t[81] = P, t[82] = E, t[83] = D, t[84] = O, t[85] = lt
        } else lt = t[85];
        let $;
        t[133] !== Re || t[134] !== T || t[135] !== l.distributionChannel || t[136] !== l.metadata || t[137] !== l.oaiSubjectId || t[138] !== l.widgetSessionId || t[139] !== k || t[140] !== A || t[141] !== le || t[142] !== M || t[143] !== Y || t[144] !== w || t[145] !== pe || t[146] !== _e || t[147] !== d.name || t[148] !== d.permissions || t[149] !== d.toolInfo || t[150] !== i || t[151] !== B || t[152] !== ue || t[153] !== se || t[154] !== st || t[155] !== lt || t[156] !== L || t[157] !== Le || t[158] !== E || t[159] !== D || t[160] !== Ie || t[161] !== O ? ($ = (0, X.jsx)(ke, {
            host: `chatgpt`,
            html: w,
            ref: M,
            theme: st,
            attributionId: T,
            appDisplayName: d.name,
            measureWidth: !1,
            onReady: Y,
            conversationId: B,
            widgetId: E,
            widgetSessionId: l.widgetSessionId,
            widgetParent: D,
            connectorToolTargetMeta: l.metadata,
            widgetDistributionChannel: l.distributionChannel,
            suggestionMessageId: se,
            widgetType: O,
            subdomain: ue,
            widgetState: Ie,
            toolInput: Re,
            toolOutput: L,
            toolResponseMetadata: Le,
            toolInfo: d.toolInfo,
            subjectId: l.oaiSubjectId,
            features: le,
            permissions: d.permissions,
            viewParams: _e,
            safeArea: i,
            displayMode: A,
            api: lt,
            csp: k,
            locale: pe
        }), t[133] = Re, t[134] = T, t[135] = l.distributionChannel, t[136] = l.metadata, t[137] = l.oaiSubjectId, t[138] = l.widgetSessionId, t[139] = k, t[140] = A, t[141] = le, t[142] = M, t[143] = Y, t[144] = w, t[145] = pe, t[146] = _e, t[147] = d.name, t[148] = d.permissions, t[149] = d.toolInfo, t[150] = i, t[151] = B, t[152] = ue, t[153] = se, t[154] = st, t[155] = lt, t[156] = L, t[157] = Le, t[158] = E, t[159] = D, t[160] = Ie, t[161] = O, t[162] = $) : $ = t[162];
        let ut;
        return t[163] !== Q || t[164] !== at || t[165] !== ot || t[166] !== $ ? (ut = (0, X.jsxs)(`div`, {
            className: Q,
            style: at,
            children: [ot, $]
        }), t[163] = Q, t[164] = at, t[165] = ot, t[166] = $, t[167] = ut) : ut = t[167], ut
    }
}));
export {
    Ve as a, z as c, Ke as i, tt as n, W as o, qe as r, ze as s, et as t
};
//# sourceMappingURL=f7e0bf69-d0ino2qi50dsktc0.js.map