const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/622fb003-h2pfk2vpuxapeb6k.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-itnrgnth03y1sm9d.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-i79e9c315w50am5f.js", "assets/30901919-ikyi1r55w2i02fom.js", "assets/c470f5ab-lpy67c9in1skobas.js", "assets/0e5afe53-jfvcgv06snw44wce.js", "assets/conversation-small-dl8qqd6x.css", "assets/8b34dbc2-m4883pai3e8fx8q6.js", "assets/82782bc9-o75a7wf6pmueiskp.js", "assets/6601bf01-pebta4n56bbdhhr3.js", "assets/4f866508-y8f5czon24a6giq7.js", "assets/e762572d-hplb1nd79ppn7q2q.js", "assets/9fe250df-jsdj1yik7vblqtlo.js", "assets/6671b9de-nxgp26gka1i5bjxl.js", "assets/dfee2fd5-m8ou3lgbndgvxfnx.js", "assets/25a66342-nr8gszzpq9esjmev.js", "assets/e44193fd-f0hwbdius6v4xt8w.js", "assets/3abc0e9f-ggh7rsl8d13yj8m9.js", "assets/d3b04dc9-ilwyrbq8gnej9vfz.js", "assets/cc29053f-ljs6fq7i66p2aais.js", "assets/69fc29f0-maseh8bk2a49713j.js", "assets/f94cb8df-em0qeb62dox5r7bj.js", "assets/a238cce4-dj8r1tvhbdqxspiy.js", "assets/e7ad522e-srjnkbgxiw4z797w.js", "assets/a52cbd6d-hb54yjibbww2x29u.js", "assets/d62a8c8e-l0bbflf6en80itbv.js", "assets/4cf35c7a-fuufw34ubkxvq703.js", "assets/b5901a24-lf9tyby1b7iurr0s.js", "assets/4b023495-h9vlilyvucirsgqx.js", "assets/46d93d39-icb551za08fy0xmy.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CN as n,
    K5 as r,
    LU as i,
    LZ as a,
    Ott as o,
    QJ as s,
    QZ as c,
    TN as l,
    a2 as u,
    ast as d,
    c2 as f,
    c7 as p,
    d2 as ee,
    dE as te,
    eY as m,
    gF as h,
    ist as g,
    kN as ne,
    ktt as re,
    l7 as _,
    lE as v,
    lV as y,
    o2 as b,
    q5 as ie,
    tV as ae,
    vF as x,
    wN as S,
    zU as oe
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Bn as se,
    Vn as C,
    cn as w,
    ln as T,
    wn as E
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    AAt as ce,
    EYt as D,
    MWt as le,
    TBt as ue,
    TWt as de,
    TYt as fe,
    c6 as pe,
    cht as me,
    d6 as O,
    l6 as he,
    u6 as ge,
    uht as _e,
    wAt as k,
    wBt as A
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    Yu as ve,
    Zu as ye
} from "./8b34dbc2-m4883pai3e8fx8q6.js";
import {
    a as be,
    n as xe,
    r as Se,
    t as Ce
} from "./824d80d7-hmb8gzxsyz4knpey.js";
import {
    n as we,
    t as Te
} from "./e3349b6b-bwwxi1k4i0mmuvmd.js";
import {
    i as Ee,
    n as De,
    r as Oe,
    t as ke
} from "./1c86a5ac-hup25agwdipwyaew.js";

function j(e, t, n) {
    if (!e) {
        if (n) throw Error(`Invalid checkout session: ${t}`);
        console.warn(`Invalid checkout session: ${t}`)
    }
}
var Ae, je, Me, Ne, M, N, P, Pe, F, I, Fe, L, Ie, Le, R, Re = e((() => {
        g(), Ae = /^[A-Z]{3}$/, je = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/i, Me = /^\+[1-9]\d{1,14}$/, Ne = [`fee`, `tax`, `fulfillment`, `discount`, `items_discount`, `tip`], M = (e, t, n) => {
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
                let n = d(i.get(e.fulfillment_option_id), `fulfillment_option_id "${e.fulfillment_option_id}" must match an available fulfillment option`);
                j(r.fulfillment !== void 0, `totals must include a fulfillment entry when a fulfillment option is selected`, t), j(r.fulfillment === n.total, `fulfillment total (${r.fulfillment}) must equal the selected fulfillment option total (${n.total})`, t)
            }
        }
    })),
    ze, z = e((() => {
        xe(), Se(), Re(), x(), ze = async ({
            chatSDK: e,
            clientThreadId: t,
            resolvedWidget: n,
            checkoutSession: r
        }) => {
            let i = be(r);
            return R(i, !1), Ce(h(t)).openCheckout(e, n, i)
        }
    }));

function B(e) {
    return e.distributionChannel === o.OPENAI && e.connectorId || null
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
    re(), U = new Map
}));

function He() {
    for (let [e, t] of Object.entries(q)) H({
        connectorId: k,
        view: e
    }, t)
}
var G, K, q, Ue = e((() => {
    W(), ce(), Te(), b(), T(), G = u(() => we(w(() => import(`./622fb003-h2pfk2vpuxapeb6k.js`).then(e => e.FinanceAccountLinkingValdiRenderer), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27])))), K = u(() => we(w(() => import(`./d62a8c8e-l0bbflf6en80itbv.js`).then(e => e.FinanceCreditAccountDetailValdiRenderer), __vite__mapDeps([28, 1, 2, 3, 4, 29, 30, 18, 19, 15, 16, 17, 20, 31, 5, 6, 7, 8, 9, 13, 21, 22, 24, 25, 27, 32])))), q = {
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
    Ye = E(), ye(), le(), f(), z(), Ge(), W(), Ee(), De(), he(), O(), D(), qe(), r(), m(), i(), me(), c(), g(), l(), y(), v(), n(), _(), A(), Xe = t(C()), X = se(), We(), Ze = e => e?.order != null, Z = e => {
        "use forget";
        let t = (0, Ye.c)(4),
            {
                className: n
            } = e,
            r;
        t[0] === n ? r = t[1] : (r = p(`loading-results-shimmer`, n), t[0] = n, t[1] = r);
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
                safeArea: r,
                widgetRef: i,
                conversation: o,
                chatSDK: c,
                clientThreadId: l,
                resolvedWidget: u,
                onReady: f,
                onClose: m,
                onRefreshOrigin: h,
                onCanGoBack: g,
                onCanGoForward: re,
                onCheckoutComplete: _,
                onSetOpenInAppUrl: v,
                onUpdateWidgetState: y,
                onSendFollowUpMessage: b,
                createTargetedReplyContent: x,
                domain: se,
                html: C,
                attributionId: w,
                widgetId: T,
                widgetParent: E,
                suggestionMessageId: ce,
                widgetType: D,
                features: le,
                subdomain: me,
                csp: O,
                locale: he,
                params: k,
                displayMode: A,
                forceFullHeight: ye,
                forceFullWidth: be,
                forceIntrinsicHeight: xe,
                isToolInputAuthorized: Se
            } = e,
            Ce = n === void 0 ? null : n,
            we = ye !== void 0 && ye,
            Te = be !== void 0 && be,
            Ee = xe !== void 0 && xe,
            De;
        t[0] === o ? De = t[1] : (De = pe(o), t[0] = o, t[1] = De);
        let j = De,
            [Ae, je] = (0, Xe.useState)(Ce),
            [Me, Ne] = (0, Xe.useState)(!1),
            M = te(i, (0, Xe.useRef)(null)),
            N = ne(),
            P = oe(),
            {
                targetedContent: Pe,
                setTargetedContent: F
            } = _e(),
            I;
        t[2] !== c || t[3] !== j ? (I = () => j.getWidgetStateAndProps$(c), t[2] = c, t[3] = j, t[4] = I) : I = t[4];
        let {
            toolInput: Fe,
            toolOutput: L,
            widgetState: Ie,
            toolResponseMetadata: Le
        } = ie(I), R;
        t[5] !== c || t[6] !== Se || t[7] !== Fe || t[8] !== L ? (R = fe(c, Fe, L, Se), t[5] = c, t[6] = Se, t[7] = Fe, t[8] = L, t[9] = R) : R = t[9];
        let Re = R,
            z;
        t[10] === l ? z = t[11] : (z = s(l), t[10] = l, t[11] = z);
        let B = z,
            V = Qe(k) ? k : null,
            Be;
        t[12] !== c || t[13] !== V ? (Be = Ve(c, V), t[12] = c, t[13] = V, t[14] = Be) : Be = t[14];
        let H = Be,
            U = V?.loadingState === `detail`,
            W = V?.enableTargetedReply === !0,
            He;
        t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (He = () => {
            Ne(!1)
        }, t[15] = He) : He = t[15];
        let G;
        t[16] === C ? G = t[17] : (G = [C], t[16] = C, t[17] = G), (0, Xe.useEffect)(He, G);
        let K;
        t[18] !== o.id || t[19] !== x || t[20] !== F ? (K = e => {
            let {
                text: t,
                context: n
            } = e;
            if (typeof t != `string`) return;
            let r = t.trim();
            if (!r) return;
            let i = x ? x({
                text: r,
                context: typeof n == `string` ? n : void 0
            }) : {
                type: `text`,
                label: r,
                createNewCompletionParams: e => ({
                    ...e,
                    promptMessage: ue({}, e.promptMessage, {
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
                conversationId: o.id
            })
        }, t[18] = o.id, t[19] = x, t[20] = F, t[21] = K) : K = t[21];
        let q = S(K),
            Ue;
        t[22] !== o.id || t[23] !== b || t[24] !== F || t[25] !== Pe?.conversationId ? (Ue = e => {
            Pe?.conversationId === o.id && F(void 0), b?.(e)
        }, t[22] = o.id, t[23] = b, t[24] = F, t[25] = Pe?.conversationId, t[26] = Ue) : Ue = t[26];
        let We = S(Ue),
            Ge;
        t[27] === c ? Ge = t[28] : (Ge = (e, t) => new Promise(n => {
            let r = e ?? c.connectorId;
            if (!r) {
                n({
                    didConnect: !1
                });
                return
            }
            ee(ve, {
                checkInstallationPolicy: !0,
                connectorId: r,
                redirectAfter: window.location.href,
                noRedirect: !0,
                referrer: de.WidgetConnectSheet,
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
        }), t[27] = c, t[28] = Ge);
        let J = Ge,
            qe;
        t[29] === f ? qe = t[30] : (qe = () => {
            Ne(!0), f()
        }, t[29] = f, t[30] = qe);
        let Y = S(qe),
            Je, Z;
        if (t[31] !== Y || t[32] !== H ? (Je = () => {
                H && Y()
            }, Z = [Y, H], t[31] = Y, t[32] = H, t[33] = Je, t[34] = Z) : (Je = t[33], Z = t[34]), (0, Xe.useEffect)(Je, Z), H != null) {
            let e = H.component,
                n = we && `h-full`,
                r = Te && `w-full`,
                i;
            t[35] !== n || t[36] !== r ? (i = p(`min-h-0 max-h-full flex-shrink overflow-y-auto`, n, r), t[35] = n, t[36] = r, t[37] = i) : i = t[37];
            let a;
            t[38] === V ? a = t[39] : (a = V ?? {}, t[38] = V, t[39] = a);
            let s;
            t[40] !== e || t[41] !== c || t[42] !== o || t[43] !== A || t[44] !== m || t[45] !== h || t[46] !== a ? (s = (0, X.jsx)(e, {
                chatSDK: c,
                conversation: o,
                displayMode: A,
                onClose: m,
                onRefreshOrigin: h,
                params: a
            }), t[40] = e, t[41] = c, t[42] = o, t[43] = A, t[44] = m, t[45] = h, t[46] = a, t[47] = s) : s = t[47];
            let l;
            return t[48] !== i || t[49] !== s ? (l = (0, X.jsx)(`div`, {
                className: i,
                children: s
            }), t[48] = i, t[49] = s, t[50] = l) : l = t[50], l
        }
        let et = U && `relative`,
            tt = !Ee && `max-h-full flex-shrink overflow-y-auto`,
            nt = we && `h-full`,
            rt = Te && `w-full`,
            Q;
        t[51] !== et || t[52] !== tt || t[53] !== nt || t[54] !== rt ? (Q = p(et, tt, nt, rt), t[51] = et, t[52] = tt, t[53] = nt, t[54] = rt, t[55] = Q) : Q = t[55];
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
        if (t[62] !== w || t[63] !== c || t[64] !== l || t[65] !== O || t[66] !== se || t[67] !== W || t[68] !== j || t[69] !== g || t[70] !== re || t[71] !== _ || t[72] !== m || t[73] !== b || t[74] !== v || t[75] !== y || t[76] !== J || t[77] !== q || t[78] !== u || t[79] !== We || t[80] !== B || t[81] !== P || t[82] !== T || t[83] !== E || t[84] !== D) {
            let e;
            t[86] === m ? e = t[87] : (e = () => m(`request_close`), t[86] = m, t[87] = e);
            let n;
            t[88] !== W || t[89] !== q ? (n = W ? {
                requestTargetedReply: q
            } : {}, t[88] = W, t[89] = q, t[90] = n) : n = t[90];
            let r;
            t[91] !== b || t[92] !== We ? (r = b ? {
                sendFollowUpMessage: We
            } : {}, t[91] = b, t[92] = We, t[93] = r) : r = t[93];
            let i;
            t[94] === m ? i = t[95] : (i = () => m(`escape_key`), t[94] = m, t[95] = i);
            let a;
            t[96] !== c || t[97] !== l || t[98] !== _ || t[99] !== u ? (a = async e => {
                let t = await ze({
                    chatSDK: c,
                    clientThreadId: l,
                    checkoutSession: e,
                    resolvedWidget: u
                });
                return Ze(t) && _?.(t), t
            }, t[96] = c, t[97] = l, t[98] = _, t[99] = u, t[100] = a) : a = t[100];
            let o;
            t[101] !== g || t[102] !== re ? (o = e => {
                let {
                    canGoBack: t,
                    canGoForward: n
                } = e;
                g(t), re?.(n)
            }, t[101] = g, t[102] = re, t[103] = o) : o = t[103];
            let s;
            t[104] === P ? s = t[105] : (s = e => Ke(P, e), t[104] = P, t[105] = s);
            let f;
            t[106] === v ? f = t[107] : (f = e => v?.(e), t[106] = v, t[107] = f);
            let p, ee;
            t[108] !== c.metadata || t[109] !== c.widgetSessionId || t[110] !== j || t[111] !== T || t[112] !== E ? (p = (e, t) => j.callTool$({
                appUri: d(E),
                name: e,
                args: t,
                callContext: {
                    messageId: T,
                    resourceName: c.metadata.resource_name ?? null,
                    connectorToolTargetMeta: c.metadata,
                    widgetContext: {
                        appUri: E,
                        widgetId: T,
                        widgetSessionId: c.widgetSessionId,
                        source: `iframe`
                    }
                }
            }), ee = e => j.callMcp$(d(E), e, {
                messageId: T,
                resourceName: c.metadata.resource_name ?? null,
                connectorToolTargetMeta: c.metadata,
                widgetContext: {
                    appUri: E,
                    widgetId: T,
                    widgetSessionId: c.widgetSessionId,
                    source: `iframe`
                }
            }), t[108] = c.metadata, t[109] = c.widgetSessionId, t[110] = j, t[111] = T, t[112] = E, t[113] = p, t[114] = ee) : (p = t[113], ee = t[114]);
            let te, h, ne;
            t[115] !== j || t[116] !== E ? (te = (e, t) => j.uploadFile$(d(E), e, t), h = e => j.getFileDownloadUrl$(d(E), e.fileId), ne = e => j.getFileMetadata$(d(E), e.fileId), t[115] = j, t[116] = E, t[117] = te, t[118] = h, t[119] = ne) : (te = t[117], h = t[118], ne = t[119]);
            let ie, x;
            t[120] === J ? (ie = t[121], x = t[122]) : (ie = e => {
                let {
                    connectorId: t
                } = e;
                return J(t)
            }, x = e => J(void 0, e), t[120] = J, t[121] = ie, t[122] = x);
            let S;
            t[123] !== j || t[124] !== E ? (S = () => j.selectFiles$(d(E)), t[123] = j, t[124] = E, t[125] = S) : S = t[125];
            let oe;
            t[126] !== c.metadata || t[127] !== c.widgetSessionId || t[128] !== j || t[129] !== y || t[130] !== T || t[131] !== E ? (oe = async (e, t, n) => {
                if (y) return y(e, t, n);
                let r = {
                    appUri: E,
                    widgetId: T,
                    widgetSessionId: c.widgetSessionId,
                    source: `iframe`
                };
                if (!n?.waitForPersistence) return j.enqueueWidgetState$(e, t, {
                    hydratedRevision: c.metadata.widget_state_revision ?? 0,
                    widgetContext: r
                }), {
                    ok: !0
                };
                try {
                    return await j.enqueueWidgetState$(e, t, {
                        hydratedRevision: c.metadata.widget_state_revision ?? 0,
                        waitForPersistence: !0,
                        widgetContext: r
                    }), {
                        ok: !0
                    }
                } catch (e) {
                    return ge(e)
                }
            }, t[126] = c.metadata, t[127] = c.widgetSessionId, t[128] = j, t[129] = y, t[130] = T, t[131] = E, t[132] = oe) : oe = t[132], lt = {
                notifyIntrinsicHeight: ct,
                openExternal(e) {
                    let {
                        href: t,
                        redirectUrl: n,
                        openMode: r
                    } = e, i = n === !1 ? null : B ? new URL(ae(B), window.location.origin).toString() : new URL(window.location.href).toString();
                    Oe({
                        attributionId: w,
                        conversationId: B,
                        href: t,
                        csp: O,
                        messageId: T,
                        redirectDomains: u.redirectDomains,
                        resolvedPineappleUri: c.metadata.resolved_pineapple_uri ?? null,
                        domain: se,
                        distributionChannel: c.distributionChannel,
                        redirectUrl: i,
                        openMode: r,
                        sectionLocation: `focused_object`,
                        widgetName: D,
                        widgetSessionId: c.widgetSessionId
                    })
                },
                requestClose: e,
                ...n,
                ...r,
                notifyEscapeKey: i,
                requestCheckout: a,
                notifyNavigation: o,
                showToast: s,
                setOpenInAppUrl: f,
                callTool: p,
                callMcp: ee,
                uploadFile: te,
                getFileDownloadUrl: h,
                getFileMetadata: ne,
                requestLinkToConnector: ie,
                requestConnectSheet: x,
                selectFiles: S,
                updateWidgetState: oe
            }, t[62] = w, t[63] = c, t[64] = l, t[65] = O, t[66] = se, t[67] = W, t[68] = j, t[69] = g, t[70] = re, t[71] = _, t[72] = m, t[73] = b, t[74] = v, t[75] = y, t[76] = J, t[77] = q, t[78] = u, t[79] = We, t[80] = B, t[81] = P, t[82] = T, t[83] = E, t[84] = D, t[85] = lt
        } else lt = t[85];
        let $;
        t[133] !== Re || t[134] !== w || t[135] !== c.distributionChannel || t[136] !== c.metadata || t[137] !== c.oaiSubjectId || t[138] !== c.widgetSessionId || t[139] !== O || t[140] !== A || t[141] !== le || t[142] !== M || t[143] !== Y || t[144] !== C || t[145] !== he || t[146] !== k || t[147] !== u.name || t[148] !== u.permissions || t[149] !== u.toolInfo || t[150] !== r || t[151] !== B || t[152] !== me || t[153] !== ce || t[154] !== st || t[155] !== lt || t[156] !== L || t[157] !== Le || t[158] !== T || t[159] !== E || t[160] !== Ie || t[161] !== D ? ($ = (0, X.jsx)(ke, {
            host: `chatgpt`,
            html: C,
            ref: M,
            theme: st,
            attributionId: w,
            appDisplayName: u.name,
            measureWidth: !1,
            onReady: Y,
            conversationId: B,
            widgetId: T,
            widgetSessionId: c.widgetSessionId,
            widgetParent: E,
            connectorToolTargetMeta: c.metadata,
            widgetDistributionChannel: c.distributionChannel,
            suggestionMessageId: ce,
            widgetType: D,
            subdomain: me,
            widgetState: Ie,
            toolInput: Re,
            toolOutput: L,
            toolResponseMetadata: Le,
            toolInfo: u.toolInfo,
            subjectId: c.oaiSubjectId,
            features: le,
            permissions: u.permissions,
            viewParams: k,
            safeArea: r,
            displayMode: A,
            api: lt,
            csp: O,
            locale: he
        }), t[133] = Re, t[134] = w, t[135] = c.distributionChannel, t[136] = c.metadata, t[137] = c.oaiSubjectId, t[138] = c.widgetSessionId, t[139] = O, t[140] = A, t[141] = le, t[142] = M, t[143] = Y, t[144] = C, t[145] = he, t[146] = k, t[147] = u.name, t[148] = u.permissions, t[149] = u.toolInfo, t[150] = r, t[151] = B, t[152] = me, t[153] = ce, t[154] = st, t[155] = lt, t[156] = L, t[157] = Le, t[158] = T, t[159] = E, t[160] = Ie, t[161] = D, t[162] = $) : $ = t[162];
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
//# sourceMappingURL=f7e0bf69-cfpyp1h2kfkt4f9j.js.map