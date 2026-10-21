const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/622fb003-lib25hsv0tbgzv5r.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-tap9fxyhk4ehe0bs.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-nmt18uiom3b14vca.js", "assets/30901919-niqyapppecmq5jkn.js", "assets/c470f5ab-uuoa2gfm4goj6p9f.js", "assets/0e5afe53-f7up6uuou2fv3lyg.js", "assets/conversation-small-bwtqiuwj.css", "assets/8b34dbc2-ojcl97ddvu2212q0.js", "assets/82782bc9-g3liom11amtlr9kq.js", "assets/6601bf01-mbrd8r50codtlrec.js", "assets/4f866508-geemeg1hblp1tef0.js", "assets/e762572d-hplb1nd79ppn7q2q.js", "assets/9fe250df-jsdj1yik7vblqtlo.js", "assets/6671b9de-nxgp26gka1i5bjxl.js", "assets/dfee2fd5-m8ou3lgbndgvxfnx.js", "assets/25a66342-nr8gszzpq9esjmev.js", "assets/e44193fd-f0hwbdius6v4xt8w.js", "assets/3abc0e9f-ggh7rsl8d13yj8m9.js", "assets/d3b04dc9-pjpnxiu0mfvez4ao.js", "assets/cc29053f-ljs6fq7i66p2aais.js", "assets/69fc29f0-maseh8bk2a49713j.js", "assets/f94cb8df-em0qeb62dox5r7bj.js", "assets/a238cce4-dj8r1tvhbdqxspiy.js", "assets/e7ad522e-srjnkbgxiw4z797w.js", "assets/a52cbd6d-hb54yjibbww2x29u.js", "assets/d62a8c8e-iflbadqlefdhj8c8.js", "assets/4cf35c7a-fuufw34ubkxvq703.js", "assets/b5901a24-lf9tyby1b7iurr0s.js", "assets/4b023495-dq5ne9ufde5qejdy.js", "assets/46d93d39-icb551za08fy0xmy.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $0 as n,
    BU as r,
    BZ as i,
    HU as a,
    JB as o,
    Kot as s,
    N5 as c,
    P5 as l,
    X0 as u,
    X5 as d,
    Y5 as f,
    Z0 as p,
    _tt as m,
    bN as h,
    dF as g,
    gtt as ee,
    iE as _,
    n2 as te,
    nV as v,
    oE as ne,
    pF as y,
    qot as b,
    rY as x,
    tQ as S,
    tY as re,
    vN as C,
    wN as ie,
    yN as w
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    Bn as ae,
    Vn as T,
    cn as E,
    ln as D,
    wn as O
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    LAt as oe,
    MBt as se,
    MWt as ce,
    MYt as le,
    NYt as k,
    _ht as ue,
    c6 as de,
    hht as fe,
    jAt as pe,
    jBt as A,
    l6 as me,
    o6 as he,
    s6 as j,
    zWt as M
} from "./conversation-small-nmt18uiom3b14vca.js";
import {
    Yu as ge,
    qu as _e
} from "./8b34dbc2-ojcl97ddvu2212q0.js";
import {
    a as ve,
    n as ye,
    r as be,
    t as xe
} from "./824d80d7-gytf9zsfgq3vhu2y.js";
import {
    n as Se,
    t as Ce
} from "./e3349b6b-leexa41532m3ov97.js";
import {
    i as we,
    n as Te,
    r as Ee,
    t as De
} from "./1c86a5ac-jc6sdmh39g815mqh.js";

function N(e, t, n) {
    if (!e) {
        if (n) throw Error(`Invalid checkout session: ${t}`);
        console.warn(`Invalid checkout session: ${t}`)
    }
}
var Oe, ke, Ae, je, P, F, I, Me, L, R, Ne, z, Pe, Fe, B, Ie = e((() => {
        s(), Oe = /^[A-Z]{3}$/, ke = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/i, Ae = /^\+[1-9]\d{1,14}$/, je = [`fee`, `tax`, `fulfillment`, `discount`, `items_discount`, `tip`], P = (e, t, n) => {
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
            let n = z(e.line_items, t),
                r = Pe(e.totals, n, t),
                i = Fe(e.fulfillment_options, t);
            if (e.fulfillment_option_id) {
                let n = b(i.get(e.fulfillment_option_id), `fulfillment_option_id "${e.fulfillment_option_id}" must match an available fulfillment option`);
                N(r.fulfillment !== void 0, `totals must include a fulfillment entry when a fulfillment option is selected`, t), N(r.fulfillment === n.total, `fulfillment total (${r.fulfillment}) must equal the selected fulfillment option total (${n.total})`, t)
            }
        }
    })),
    Le, V = e((() => {
        ye(), be(), Ie(), y(), Le = async ({
            chatSDK: e,
            clientThreadId: t,
            resolvedWidget: n,
            checkoutSession: r
        }) => {
            let i = ve(r);
            return B(i, !1), xe(g(t)).openCheckout(e, n, i)
        }
    }));

function H(e) {
    return e.distributionChannel === ee.OPENAI && e.connectorId || null
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
    m(), G = new Map
}));

function Be() {
    for (let [e, t] of Object.entries(Y)) W({
        connectorId: pe,
        view: e
    }, t)
}
var q, J, Y, Ve = e((() => {
    K(), oe(), Ce(), p(), D(), q = u(() => Se(E(() => import(`./622fb003-lib25hsv0tbgzv5r.js`).then(e => e.FinanceAccountLinkingValdiRenderer), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27])))), J = u(() => Se(E(() => import(`./d62a8c8e-iflbadqlefdhj8c8.js`).then(e => e.FinanceCreditAccountDetailValdiRenderer), __vite__mapDeps([28, 1, 2, 3, 4, 29, 30, 18, 19, 15, 16, 17, 20, 31, 5, 6, 7, 8, 9, 13, 21, 22, 24, 25, 27, 32])))), Y = {
        accountLinking: {
            component: q,
            supportsExternalPresentation: !0
        },
        creditAccountDetail: {
            component: J
        }
    }
}));

function He() {
    Be()
}
var Ue = e((() => {
        Ve()
    })),
    X, We, Ge = e((() => {
        X = ({
            body: e
        }) => e.trim().length > 0 ? {
            description: e
        } : void 0, We = (e, t) => {
            let n = X(t);
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

function Z(e, t) {
    return (0, Q.jsxs)(`div`, {
        className: `flex items-center justify-between gap-4 py-4`,
        children: [(0, Q.jsx)($, {
            className: `h-[18px] w-[92px] rounded-md`
        }), (0, Q.jsx)($, {
            className: `h-[18px] w-[150px] rounded-md`
        })]
    }, t)
}

function Ke(e, t) {
    return (0, Q.jsxs)(`div`, {
        className: `flex items-center gap-3 py-3`,
        children: [(0, Q.jsx)($, {
            className: `h-8 w-8 rounded-full`
        }), (0, Q.jsxs)(`div`, {
            className: `min-w-0 flex-1`,
            children: [(0, Q.jsx)($, {
                className: `h-4 w-[76px] rounded-md`
            }), (0, Q.jsx)(`div`, {
                className: `pt-1`,
                children: (0, Q.jsx)($, {
                    className: `h-[14px] w-[54px] rounded-md`
                })
            })]
        }), (0, Q.jsx)($, {
            className: `h-4 w-16 rounded-md`
        })]
    }, t)
}
var qe, Je, Q, Ye, $, Xe, Ze, Qe, $e = e((() => {
    qe = O(), ge(), M(), n(), V(), Ue(), K(), we(), Te(), j(), me(), k(), Ge(), c(), x(), r(), fe(), S(), s(), h(), v(), _(), C(), d(), A(), Je = t(T()), Q = ae(), He(), Ye = e => e?.order != null, $ = e => {
        "use forget";
        let t = (0, qe.c)(4),
            {
                className: n
            } = e,
            r;
        t[0] === n ? r = t[1] : (r = f(`loading-results-shimmer`, n), t[0] = n, t[1] = r);
        let i;
        return t[2] === r ? i = t[3] : (i = (0, Q.jsx)(`div`, {
            className: r,
            "data-testid": `ecosystem-focused-object-loading-block`
        }), t[2] = r, t[3] = i), i
    }, Xe = e => typeof e == `object` && !!e && !Array.isArray(e), Ze = () => {
        "use forget";
        let e = (0, qe.c)(8),
            t;
        e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Q.jsx)(`div`, {
            className: `flex items-center justify-end pb-4`,
            children: (0, Q.jsx)($, {
                className: `h-9 w-9 rounded-full`
            })
        }), e[0] = t) : t = e[0];
        let n;
        e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, Q.jsx)($, {
            className: `h-10 w-10 rounded-full`
        }), e[1] = n) : n = e[1];
        let r;
        e[2] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, Q.jsx)($, {
            className: `h-[18px] w-[170px] rounded-md`
        }), e[2] = r) : r = e[2];
        let i;
        e[3] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, Q.jsxs)(`div`, {
            className: `flex items-center gap-3`,
            children: [n, (0, Q.jsxs)(`div`, {
                className: `min-w-0 flex-1`,
                children: [r, (0, Q.jsx)(`div`, {
                    className: `pt-1`,
                    children: (0, Q.jsx)($, {
                        className: `h-9 w-[164px] rounded-md`
                    })
                })]
            })]
        }), e[3] = i) : i = e[3];
        let a;
        e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, Q.jsxs)(`div`, {
            className: `flex gap-2 pt-4`,
            children: [(0, Q.jsx)($, {
                className: `h-10 w-24 rounded-full`
            }), (0, Q.jsx)($, {
                className: `h-10 w-[140px] rounded-full`
            })]
        }), e[4] = a) : a = e[4];
        let o;
        e[5] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, Q.jsx)(`div`, {
            className: `mt-5 divide-y divide-black/5 border-y border-black/5 dark:divide-white/10 dark:border-white/10`,
            children: Array.from({
                length: 5
            }, Z)
        }), e[5] = o) : o = e[5];
        let s;
        e[6] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, Q.jsx)(`div`, {
            className: `pt-6`,
            children: (0, Q.jsx)($, {
                className: `h-6 w-[196px] rounded-md`
            })
        }), e[6] = s) : s = e[6];
        let c;
        return e[7] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, Q.jsxs)(`div`, {
            "aria-hidden": `true`,
            className: `bg-token-bg-primary pointer-events-none absolute inset-0 z-10 overflow-hidden px-5 pt-4 pb-6`,
            "data-testid": `ecosystem-focused-object-loading-state`,
            children: [t, i, a, o, s, (0, Q.jsx)(`div`, {
                className: `pt-4`,
                children: Array.from({
                    length: 3
                }, Ke)
            })]
        }), e[7] = c) : c = e[7], c
    }, Qe = e => {
        "use forget";
        let t = (0, qe.c)(168),
            {
                heightHint: n,
                safeArea: r,
                widgetRef: s,
                conversation: c,
                chatSDK: u,
                clientThreadId: d,
                resolvedWidget: p,
                onReady: m,
                onClose: h,
                onRefreshOrigin: g,
                onCanGoBack: ee,
                onCanGoForward: _,
                onCheckoutComplete: v,
                onSetOpenInAppUrl: y,
                onUpdateWidgetState: x,
                onSendFollowUpMessage: S,
                createTargetedReplyContent: C,
                domain: ae,
                html: T,
                attributionId: E,
                widgetId: D,
                widgetParent: O,
                suggestionMessageId: oe,
                widgetType: k,
                features: fe,
                subdomain: pe,
                csp: A,
                locale: me,
                params: j,
                displayMode: M,
                forceFullHeight: ge,
                forceFullWidth: ve,
                forceIntrinsicHeight: ye,
                isToolInputAuthorized: be
            } = e,
            xe = n === void 0 ? null : n,
            Se = ge !== void 0 && ge,
            Ce = ve !== void 0 && ve,
            we = ye !== void 0 && ye,
            Te;
        t[0] === c ? Te = t[1] : (Te = he(c), t[0] = c, t[1] = Te);
        let N = Te,
            [Oe, ke] = (0, Je.useState)(xe),
            [Ae, je] = (0, Je.useState)(!1),
            P = ne(s, (0, Je.useRef)(null)),
            F = ie(),
            I = a(),
            {
                targetedContent: Me,
                setTargetedContent: L
            } = ue(),
            R;
        t[2] !== u || t[3] !== N ? (R = () => N.getWidgetStateAndProps$(u), t[2] = u, t[3] = N, t[4] = R) : R = t[4];
        let {
            toolInput: Ne,
            toolOutput: z,
            widgetState: Pe,
            toolResponseMetadata: Fe
        } = l(R), B;
        t[5] !== u || t[6] !== be || t[7] !== Ne || t[8] !== z ? (B = le(u, Ne, z, be), t[5] = u, t[6] = be, t[7] = Ne, t[8] = z, t[9] = B) : B = t[9];
        let Ie = B,
            V;
        t[10] === d ? V = t[11] : (V = re(d), t[10] = d, t[11] = V);
        let H = V,
            U = Xe(j) ? j : null,
            Re;
        t[12] !== u || t[13] !== U ? (Re = ze(u, U), t[12] = u, t[13] = U, t[14] = Re) : Re = t[14];
        let W = Re,
            G = U?.loadingState === `detail`,
            K = U?.enableTargetedReply === !0,
            Be;
        t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (Be = () => {
            je(!1)
        }, t[15] = Be) : Be = t[15];
        let q;
        t[16] === T ? q = t[17] : (q = [T], t[16] = T, t[17] = q), (0, Je.useEffect)(Be, q);
        let J;
        t[18] !== c.id || t[19] !== C || t[20] !== L ? (J = e => {
            let {
                text: t,
                context: n
            } = e;
            if (typeof t != `string`) return;
            let r = t.trim();
            if (!r) return;
            let a = C ? C({
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
                    appendMessages: [...e.appendMessages ?? [], i(r)]
                })
            };
            L({
                ...a,
                conversationId: c.id
            })
        }, t[18] = c.id, t[19] = C, t[20] = L, t[21] = J) : J = t[21];
        let Y = w(J),
            Ve;
        t[22] !== c.id || t[23] !== S || t[24] !== L || t[25] !== Me?.conversationId ? (Ve = e => {
            Me?.conversationId === c.id && L(void 0), S?.(e)
        }, t[22] = c.id, t[23] = S, t[24] = L, t[25] = Me?.conversationId, t[26] = Ve) : Ve = t[26];
        let He = w(Ve),
            Ue;
        t[27] === u ? Ue = t[28] : (Ue = (e, t) => new Promise(n => {
            let r = e ?? u.connectorId;
            if (!r) {
                n({
                    didConnect: !1
                });
                return
            }
            te(_e, {
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
        }), t[27] = u, t[28] = Ue);
        let X = Ue,
            Ge;
        t[29] === m ? Ge = t[30] : (Ge = () => {
            je(!0), m()
        }, t[29] = m, t[30] = Ge);
        let Z = w(Ge),
            Ke, $;
        if (t[31] !== Z || t[32] !== W ? (Ke = () => {
                W && Z()
            }, $ = [Z, W], t[31] = Z, t[32] = W, t[33] = Ke, t[34] = $) : (Ke = t[33], $ = t[34]), (0, Je.useEffect)(Ke, $), W != null) {
            let e = W.component,
                n = Se && `h-full`,
                r = Ce && `w-full`,
                i;
            t[35] !== n || t[36] !== r ? (i = f(`min-h-0 max-h-full flex-shrink overflow-y-auto`, n, r), t[35] = n, t[36] = r, t[37] = i) : i = t[37];
            let a;
            t[38] === U ? a = t[39] : (a = U ?? {}, t[38] = U, t[39] = a);
            let o;
            t[40] !== e || t[41] !== u || t[42] !== c || t[43] !== M || t[44] !== h || t[45] !== g || t[46] !== a ? (o = (0, Q.jsx)(e, {
                chatSDK: u,
                conversation: c,
                displayMode: M,
                onClose: h,
                onRefreshOrigin: g,
                params: a
            }), t[40] = e, t[41] = u, t[42] = c, t[43] = M, t[44] = h, t[45] = g, t[46] = a, t[47] = o) : o = t[47];
            let s;
            return t[48] !== i || t[49] !== o ? (s = (0, Q.jsx)(`div`, {
                className: i,
                children: o
            }), t[48] = i, t[49] = o, t[50] = s) : s = t[50], s
        }
        let Qe = G && `relative`,
            $e = !we && `max-h-full flex-shrink overflow-y-auto`,
            et = Se && `h-full`,
            tt = Ce && `w-full`,
            nt;
        t[51] !== Qe || t[52] !== $e || t[53] !== et || t[54] !== tt ? (nt = f(Qe, $e, et, tt), t[51] = Qe, t[52] = $e, t[53] = et, t[54] = tt, t[55] = nt) : nt = t[55];
        let rt = Se ? void 0 : Math.max(Oe ?? 0, xe ?? 0),
            it;
        t[56] === rt ? it = t[57] : (it = {
            height: rt
        }, t[56] = rt, t[57] = it);
        let at;
        t[58] !== G || t[59] !== Ae ? (at = !Ae && G ? (0, Q.jsx)(Ze, {}) : null, t[58] = G, t[59] = Ae, t[60] = at) : at = t[60];
        let ot = F ?? `light`,
            st;
        t[61] === Symbol.for(`react.memo_cache_sentinel`) ? (st = e => {
            ke(e)
        }, t[61] = st) : st = t[61];
        let ct;
        if (t[62] !== E || t[63] !== u || t[64] !== d || t[65] !== A || t[66] !== ae || t[67] !== K || t[68] !== N || t[69] !== ee || t[70] !== _ || t[71] !== v || t[72] !== h || t[73] !== S || t[74] !== y || t[75] !== x || t[76] !== X || t[77] !== Y || t[78] !== p || t[79] !== He || t[80] !== H || t[81] !== I || t[82] !== D || t[83] !== O || t[84] !== k) {
            let e;
            t[86] === h ? e = t[87] : (e = () => h(`request_close`), t[86] = h, t[87] = e);
            let n;
            t[88] !== K || t[89] !== Y ? (n = K ? {
                requestTargetedReply: Y
            } : {}, t[88] = K, t[89] = Y, t[90] = n) : n = t[90];
            let r;
            t[91] !== S || t[92] !== He ? (r = S ? {
                sendFollowUpMessage: He
            } : {}, t[91] = S, t[92] = He, t[93] = r) : r = t[93];
            let i;
            t[94] === h ? i = t[95] : (i = () => h(`escape_key`), t[94] = h, t[95] = i);
            let a;
            t[96] !== u || t[97] !== d || t[98] !== v || t[99] !== p ? (a = async e => {
                let t = await Le({
                    chatSDK: u,
                    clientThreadId: d,
                    checkoutSession: e,
                    resolvedWidget: p
                });
                return Ye(t) && v?.(t), t
            }, t[96] = u, t[97] = d, t[98] = v, t[99] = p, t[100] = a) : a = t[100];
            let s;
            t[101] !== ee || t[102] !== _ ? (s = e => {
                let {
                    canGoBack: t,
                    canGoForward: n
                } = e;
                ee(t), _?.(n)
            }, t[101] = ee, t[102] = _, t[103] = s) : s = t[103];
            let c;
            t[104] === I ? c = t[105] : (c = e => We(I, e), t[104] = I, t[105] = c);
            let l;
            t[106] === y ? l = t[107] : (l = e => y?.(e), t[106] = y, t[107] = l);
            let f, m;
            t[108] !== u.metadata || t[109] !== u.widgetSessionId || t[110] !== N || t[111] !== D || t[112] !== O ? (f = (e, t) => N.callTool$({
                appUri: b(O),
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
            }), m = e => N.callMcp$(b(O), e, {
                messageId: D,
                resourceName: u.metadata.resource_name ?? null,
                connectorToolTargetMeta: u.metadata,
                widgetContext: {
                    appUri: O,
                    widgetId: D,
                    widgetSessionId: u.widgetSessionId,
                    source: `iframe`
                }
            }), t[108] = u.metadata, t[109] = u.widgetSessionId, t[110] = N, t[111] = D, t[112] = O, t[113] = f, t[114] = m) : (f = t[113], m = t[114]);
            let g, te, ne;
            t[115] !== N || t[116] !== O ? (g = (e, t) => N.uploadFile$(b(O), e, t), te = e => N.getFileDownloadUrl$(b(O), e.fileId), ne = e => N.getFileMetadata$(b(O), e.fileId), t[115] = N, t[116] = O, t[117] = g, t[118] = te, t[119] = ne) : (g = t[117], te = t[118], ne = t[119]);
            let re, C;
            t[120] === X ? (re = t[121], C = t[122]) : (re = e => {
                let {
                    connectorId: t
                } = e;
                return X(t)
            }, C = e => X(void 0, e), t[120] = X, t[121] = re, t[122] = C);
            let ie;
            t[123] !== N || t[124] !== O ? (ie = () => N.selectFiles$(b(O)), t[123] = N, t[124] = O, t[125] = ie) : ie = t[125];
            let w;
            t[126] !== u.metadata || t[127] !== u.widgetSessionId || t[128] !== N || t[129] !== x || t[130] !== D || t[131] !== O ? (w = async (e, t, n) => {
                if (x) return x(e, t, n);
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
                    return de(e)
                }
            }, t[126] = u.metadata, t[127] = u.widgetSessionId, t[128] = N, t[129] = x, t[130] = D, t[131] = O, t[132] = w) : w = t[132], ct = {
                notifyIntrinsicHeight: st,
                openExternal(e) {
                    let {
                        href: t,
                        redirectUrl: n,
                        openMode: r
                    } = e, i = n === !1 ? null : H ? new URL(o(H), window.location.origin).toString() : new URL(window.location.href).toString();
                    Ee({
                        attributionId: E,
                        conversationId: H,
                        href: t,
                        csp: A,
                        messageId: D,
                        redirectDomains: p.redirectDomains,
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
                ...n,
                ...r,
                notifyEscapeKey: i,
                requestCheckout: a,
                notifyNavigation: s,
                showToast: c,
                setOpenInAppUrl: l,
                callTool: f,
                callMcp: m,
                uploadFile: g,
                getFileDownloadUrl: te,
                getFileMetadata: ne,
                requestLinkToConnector: re,
                requestConnectSheet: C,
                selectFiles: ie,
                updateWidgetState: w
            }, t[62] = E, t[63] = u, t[64] = d, t[65] = A, t[66] = ae, t[67] = K, t[68] = N, t[69] = ee, t[70] = _, t[71] = v, t[72] = h, t[73] = S, t[74] = y, t[75] = x, t[76] = X, t[77] = Y, t[78] = p, t[79] = He, t[80] = H, t[81] = I, t[82] = D, t[83] = O, t[84] = k, t[85] = ct
        } else ct = t[85];
        let lt;
        t[133] !== Ie || t[134] !== E || t[135] !== u.distributionChannel || t[136] !== u.metadata || t[137] !== u.oaiSubjectId || t[138] !== u.widgetSessionId || t[139] !== A || t[140] !== M || t[141] !== fe || t[142] !== P || t[143] !== Z || t[144] !== T || t[145] !== me || t[146] !== j || t[147] !== p.name || t[148] !== p.permissions || t[149] !== p.toolInfo || t[150] !== r || t[151] !== H || t[152] !== pe || t[153] !== oe || t[154] !== ot || t[155] !== ct || t[156] !== z || t[157] !== Fe || t[158] !== D || t[159] !== O || t[160] !== Pe || t[161] !== k ? (lt = (0, Q.jsx)(De, {
            host: `chatgpt`,
            html: T,
            ref: P,
            theme: ot,
            attributionId: E,
            appDisplayName: p.name,
            measureWidth: !1,
            onReady: Z,
            conversationId: H,
            widgetId: D,
            widgetSessionId: u.widgetSessionId,
            widgetParent: O,
            connectorToolTargetMeta: u.metadata,
            widgetDistributionChannel: u.distributionChannel,
            suggestionMessageId: oe,
            widgetType: k,
            subdomain: pe,
            widgetState: Pe,
            toolInput: Ie,
            toolOutput: z,
            toolResponseMetadata: Fe,
            toolInfo: p.toolInfo,
            subjectId: u.oaiSubjectId,
            features: fe,
            permissions: p.permissions,
            viewParams: j,
            safeArea: r,
            displayMode: M,
            api: ct,
            csp: A,
            locale: me
        }), t[133] = Ie, t[134] = E, t[135] = u.distributionChannel, t[136] = u.metadata, t[137] = u.oaiSubjectId, t[138] = u.widgetSessionId, t[139] = A, t[140] = M, t[141] = fe, t[142] = P, t[143] = Z, t[144] = T, t[145] = me, t[146] = j, t[147] = p.name, t[148] = p.permissions, t[149] = p.toolInfo, t[150] = r, t[151] = H, t[152] = pe, t[153] = oe, t[154] = ot, t[155] = ct, t[156] = z, t[157] = Fe, t[158] = D, t[159] = O, t[160] = Pe, t[161] = k, t[162] = lt) : lt = t[162];
        let ut;
        return t[163] !== nt || t[164] !== it || t[165] !== at || t[166] !== lt ? (ut = (0, Q.jsxs)(`div`, {
            className: nt,
            style: it,
            children: [at, lt]
        }), t[163] = nt, t[164] = it, t[165] = at, t[166] = lt, t[167] = ut) : ut = t[167], ut
    }
}));
export {
    ze as a, V as c, We as i, $e as n, K as o, Ge as r, Le as s, Qe as t
};
//# sourceMappingURL=f7e0bf69-c1n3vzr134i7omfb.js.map