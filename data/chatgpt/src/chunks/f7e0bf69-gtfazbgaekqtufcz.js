const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/622fb003-f77x4dm6o0zwbnb4.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-nxpmzchfjvwqts17.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-m08q51xmfe7gjq3d.js", "assets/30901919-lgbmg5s09xld40kt.js", "assets/c470f5ab-hgik953cu5ujlhdm.js", "assets/0e5afe53-i4tqvmyg38miikw0.js", "assets/conversation-small-dtc7tvsx.css", "assets/8b34dbc2-n194ohawifys3bko.js", "assets/82782bc9-ca5kcqz13rn6iprj.js", "assets/6601bf01-cvdbvsqw7mgi4cso.js", "assets/4f866508-lwwle40ltedduaux.js", "assets/e762572d-hplb1nd79ppn7q2q.js", "assets/9fe250df-jsdj1yik7vblqtlo.js", "assets/6671b9de-nxgp26gka1i5bjxl.js", "assets/dfee2fd5-m8ou3lgbndgvxfnx.js", "assets/25a66342-nr8gszzpq9esjmev.js", "assets/e44193fd-f0hwbdius6v4xt8w.js", "assets/3abc0e9f-ggh7rsl8d13yj8m9.js", "assets/d3b04dc9-f24lhe64nnckxh3h.js", "assets/cc29053f-ljs6fq7i66p2aais.js", "assets/69fc29f0-maseh8bk2a49713j.js", "assets/f94cb8df-em0qeb62dox5r7bj.js", "assets/a238cce4-dj8r1tvhbdqxspiy.js", "assets/e7ad522e-srjnkbgxiw4z797w.js", "assets/a52cbd6d-hb54yjibbww2x29u.js", "assets/d62a8c8e-cb9qd07c45ev38av.js", "assets/4cf35c7a-fuufw34ubkxvq703.js", "assets/b5901a24-lf9tyby1b7iurr0s.js", "assets/4b023495-ilupjw81e6gv3u9z.js", "assets/46d93d39-icb551za08fy0xmy.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Att as n,
    CN as r,
    K5 as i,
    LU as a,
    LZ as o,
    QJ as s,
    QZ as c,
    TN as l,
    a2 as u,
    c2 as d,
    c7 as f,
    d2 as ee,
    dE as te,
    eY as p,
    gF as m,
    jtt as h,
    kN as ne,
    l7 as re,
    lE as g,
    lV as _,
    o2 as v,
    ost as y,
    q5 as ie,
    sst as b,
    tV as ae,
    vF as x,
    wN as S,
    zU as oe
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as se,
    Vn as C,
    cn as w,
    ln as T,
    wn as E
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    DAt as ce,
    IWt as D,
    IYt as le,
    LYt as ue,
    NAt as de,
    OBt as O,
    d6 as fe,
    dht as pe,
    f6 as me,
    kBt as he,
    kWt as ge,
    l6 as _e,
    lht as ve,
    u6 as k
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    Yu as ye,
    Zu as be
} from "./8b34dbc2-n194ohawifys3bko.js";
import {
    a as xe,
    n as Se,
    r as Ce,
    t as we
} from "./824d80d7-d6vm83qi82dced6j.js";
import {
    n as Te,
    t as Ee
} from "./e3349b6b-kuubivvzgbec1ngk.js";
import {
    i as De,
    n as Oe,
    r as ke,
    t as Ae
} from "./1c86a5ac-ht954xa6vg3pnar2.js";

function A(e, t, n) {
    if (!e) {
        if (n) throw Error(`Invalid checkout session: ${t}`);
        console.warn(`Invalid checkout session: ${t}`)
    }
}
var je, Me, Ne, Pe, j, M, N, Fe, P, F, Ie, I, Le, Re, L, ze = e((() => {
        y(), je = /^[A-Z]{3}$/, Me = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/i, Ne = /^\+[1-9]\d{1,14}$/, Pe = [`fee`, `tax`, `fulfillment`, `discount`, `items_discount`, `tip`], j = (e, t, n) => {
            A(e.trim().length > 0, `${t} must be a non-empty string`, n)
        }, M = (e, t, n, r) => {
            A(e.length <= t, `${n} must be ${t} characters or fewer`, r)
        }, N = (e, t, n) => {
            A(Number.isInteger(e), `${t} must be provided in integer minor currency units`, n), A(e >= 0, `${t} must be greater than or equal to 0`, n)
        }, Fe = (e, t, n) => {
            A(Number.isInteger(e) && e > 0, `${t} must be a positive integer`, n)
        }, P = e => Me.test(e) && !Number.isNaN(Date.parse(e)), F = (e, t) => {
            A(e.length > 0, `links must include at least one entry (e.g. terms of use or privacy policy)`, t), e.forEach((e, n) => {
                j(e.url, `links[${n}].url`, t);
                try {
                    new URL(e.url)
                } catch {
                    throw Error(`Invalid checkout session: links[${n}].url must be an absolute URL`)
                }
            })
        }, Ie = (e, t) => {
            j(e.name, `fulfillment_address.name`, t), M(e.name, 256, `fulfillment_address.name`, t), j(e.line_one, `fulfillment_address.line_one`, t), M(e.line_one, 60, `fulfillment_address.line_one`, t), e.line_two?.trim() && M(e.line_two, 60, `fulfillment_address.line_two`, t), j(e.city, `fulfillment_address.city`, t), M(e.city, 60, `fulfillment_address.city`, t), j(e.state, `fulfillment_address.state`, t), j(e.country, `fulfillment_address.country`, t), j(e.postal_code, `fulfillment_address.postal_code`, t), M(e.postal_code, 20, `fulfillment_address.postal_code`, t), e.phone_number && A(Ne.test(e.phone_number), `fulfillment_address.phone_number must follow the E.164 format (example: +15551234567)`, t)
        }, I = (e, t) => {
            let n = {
                baseAmount: 0,
                discount: 0,
                subtotal: 0,
                tax: 0,
                total: 0
            };
            for (let [r, i] of e.entries()) {
                j(i.id, `line_items[${r}].id`, t), j(i.item.id, `line_items[${r}].item.id`, t), Fe(i.item.quantity, `line_items[${r}].item.quantity`, t), N(i.base_amount, `line_items[${r}].base_amount`, t), N(i.discount, `line_items[${r}].discount`, t), N(i.subtotal, `line_items[${r}].subtotal`, t), N(i.tax, `line_items[${r}].tax`, t), N(i.total, `line_items[${r}].total`, t);
                let e = i.base_amount - i.discount;
                A(i.subtotal === e, `line_items[${r}].subtotal must equal base_amount - discount (${e})`, t);
                let a = i.subtotal + i.tax;
                A(i.total === a, `line_items[${r}].total must equal subtotal + tax (${a})`, t), n.baseAmount += i.base_amount, n.discount += i.discount, n.subtotal += i.subtotal, n.tax += i.tax, n.total += i.total
            }
            return n
        }, Le = (e, t, n) => {
            A(e.length > 0, `totals must contain at least one entry`, n);
            let r = {};
            for (let [t, i] of e.entries()) {
                N(i.amount, `totals[${t}].amount`, n);
                let e = r[i.type];
                e != null && A(Pe.includes(i.type), `totals contains duplicate total type "${i.type}"`, n), r[i.type] = (e ?? 0) + i.amount
            }
            A(r.items_base_amount !== void 0, `totals must include an items_base_amount entry`, n), A(r.subtotal !== void 0, `totals must include a subtotal entry`, n), A(r.total !== void 0, `totals must include a total entry`, n);
            let i = r;
            A(i.items_base_amount === t.baseAmount, `totals.items_base_amount (${i.items_base_amount}) must equal the sum of line item base_amounts (${t.baseAmount})`, n), i.items_discount !== void 0 && A(i.items_discount === t.discount, `totals.items_discount (${i.items_discount}) must equal the sum of line item discounts (${t.discount})`, n);
            let a = i.items_discount ?? t.discount,
                o = t.baseAmount - a;
            A(i.subtotal === o, `subtotal must equal items_base_amount - items_discount (${o})`, n);
            let s = i.discount ?? 0,
                c = i.fulfillment ?? 0,
                l = i.tax ?? t.tax,
                u = i.fee ?? 0,
                d = i.tip ?? 0,
                f = t.baseAmount - a - s + c + l + u + d;
            return A(i.total === f, `total must equal items_base_amount - items_discount - discount + fulfillment + tax + fee (${f})`, n), i
        }, Re = (e, t) => {
            let n = new Map;
            for (let [r, i] of e.entries()) j(i.id, `fulfillment_options[${r}].id`, t), j(i.title, `fulfillment_options[${r}].title`, t), i.type === `shipping` && j(i.subtitle, `fulfillment_options[${r}].subtitle`, t), N(i.subtotal, `fulfillment_options[${r}].subtotal`, t), N(i.tax, `fulfillment_options[${r}].tax`, t), N(i.total, `fulfillment_options[${r}].total`, t), A(i.total === i.subtotal + i.tax, `fulfillment_options[${r}].total must equal subtotal + tax`, t), A(!n.has(i.id), `fulfillment option ids must be unique; duplicate id "${i.id}"`, t), i.type === `shipping` && (j(i.carrier, `fulfillment_options[${r}].carrier`, t), A(P(i.earliest_delivery_time), `fulfillment_options[${r}].earliest_delivery_time must be an RFC 3339 timestamp`, t), A(P(i.latest_delivery_time), `fulfillment_options[${r}].latest_delivery_time must be an RFC 3339 timestamp`, t), A(Date.parse(i.earliest_delivery_time) <= Date.parse(i.latest_delivery_time), `fulfillment_options[${r}].earliest_delivery_time must be before or equal to latest_delivery_time`, t)), n.set(i.id, i);
            return n
        }, L = (e, t = !1) => {
            j(e.id, `id`, t), A(je.test(e.currency), `currency "${e.currency}" must be a lower-case ISO 4217 code`, t), A(e.payment_provider.supported_payment_methods.length > 0, `payment_provider.supported_payment_methods must include at least one entry`, t), j(e.payment_provider.merchant_id, `payment_provider.merchant_id`, t), A(e.line_items.length > 0, `line_items must contain at least one entry`, t), A(e.totals.length > 0, `totals must contain at least one entry`, t), F(e.links, t), e.fulfillment_address && Ie(e.fulfillment_address, t);
            let n = I(e.line_items, t),
                r = Le(e.totals, n, t),
                i = Re(e.fulfillment_options, t);
            if (e.fulfillment_option_id) {
                let n = b(i.get(e.fulfillment_option_id), `fulfillment_option_id "${e.fulfillment_option_id}" must match an available fulfillment option`);
                A(r.fulfillment !== void 0, `totals must include a fulfillment entry when a fulfillment option is selected`, t), A(r.fulfillment === n.total, `fulfillment total (${r.fulfillment}) must equal the selected fulfillment option total (${n.total})`, t)
            }
        }
    })),
    Be, R = e((() => {
        Se(), Ce(), ze(), x(), Be = async ({
            chatSDK: e,
            clientThreadId: t,
            resolvedWidget: n,
            checkoutSession: r
        }) => {
            let i = xe(r);
            return L(i, !1), we(m(t)).openCheckout(e, n, i)
        }
    }));

function z(e) {
    return e.distributionChannel === n.OPENAI && e.connectorId || null
}

function B({
    connectorId: e,
    view: t
}) {
    return `${e}:${t}`
}

function Ve(e, t) {
    let n = z(e),
        r = t?.view ?? e.metadata.view_params?.view;
    return n && r ? {
        connectorId: n,
        view: r
    } : null
}

function V(e, t) {
    H.set(B(e), t)
}

function He(e, t) {
    let n = Ve(e, t);
    if (!n) return null;
    let r = H.get(B(n));
    return r && (r.isEnabled?.() ?? !0) ? r : null
}
var H, U = e((() => {
    h(), H = new Map
}));

function Ue() {
    for (let [e, t] of Object.entries(K)) V({
        connectorId: ce,
        view: e
    }, t)
}
var W, G, K, We = e((() => {
    U(), de(), Ee(), v(), T(), W = u(() => Te(w(() => import(`./622fb003-f77x4dm6o0zwbnb4.js`).then(e => e.FinanceAccountLinkingValdiRenderer), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27])))), G = u(() => Te(w(() => import(`./d62a8c8e-cb9qd07c45ev38av.js`).then(e => e.FinanceCreditAccountDetailValdiRenderer), __vite__mapDeps([28, 1, 2, 3, 4, 29, 30, 18, 19, 15, 16, 17, 20, 31, 5, 6, 7, 8, 9, 13, 21, 22, 24, 25, 27, 32])))), K = {
        accountLinking: {
            component: W,
            supportsExternalPresentation: !0
        },
        creditAccountDetail: {
            component: G
        }
    }
}));

function q() {
    Ue()
}
var Ge = e((() => {
        We()
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
    Ye = E(), be(), D(), d(), R(), Ge(), U(), De(), Oe(), k(), me(), ue(), qe(), i(), p(), a(), ve(), c(), y(), l(), _(), g(), r(), re(), O(), Xe = t(C()), X = se(), q(), Ze = e => e?.order != null, Z = e => {
        "use forget";
        let t = (0, Ye.c)(4),
            {
                className: n
            } = e,
            r;
        t[0] === n ? r = t[1] : (r = f(`loading-results-shimmer`, n), t[0] = n, t[1] = r);
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
                conversation: a,
                chatSDK: c,
                clientThreadId: l,
                resolvedWidget: u,
                onReady: d,
                onClose: p,
                onRefreshOrigin: m,
                onCanGoBack: h,
                onCanGoForward: re,
                onCheckoutComplete: g,
                onSetOpenInAppUrl: _,
                onUpdateWidgetState: v,
                onSendFollowUpMessage: y,
                createTargetedReplyContent: x,
                domain: se,
                html: C,
                attributionId: w,
                widgetId: T,
                widgetParent: E,
                suggestionMessageId: ce,
                widgetType: D,
                features: ue,
                subdomain: de,
                csp: O,
                locale: me,
                params: ve,
                displayMode: k,
                forceFullHeight: be,
                forceFullWidth: xe,
                forceIntrinsicHeight: Se,
                isToolInputAuthorized: Ce
            } = e,
            we = n === void 0 ? null : n,
            Te = be !== void 0 && be,
            Ee = xe !== void 0 && xe,
            De = Se !== void 0 && Se,
            Oe;
        t[0] === a ? Oe = t[1] : (Oe = _e(a), t[0] = a, t[1] = Oe);
        let A = Oe,
            [je, Me] = (0, Xe.useState)(we),
            [Ne, Pe] = (0, Xe.useState)(!1),
            j = te(i, (0, Xe.useRef)(null)),
            M = ne(),
            N = oe(),
            {
                targetedContent: Fe,
                setTargetedContent: P
            } = pe(),
            F;
        t[2] !== c || t[3] !== A ? (F = () => A.getWidgetStateAndProps$(c), t[2] = c, t[3] = A, t[4] = F) : F = t[4];
        let {
            toolInput: Ie,
            toolOutput: I,
            widgetState: Le,
            toolResponseMetadata: Re
        } = ie(F), L;
        t[5] !== c || t[6] !== Ce || t[7] !== Ie || t[8] !== I ? (L = le(c, Ie, I, Ce), t[5] = c, t[6] = Ce, t[7] = Ie, t[8] = I, t[9] = L) : L = t[9];
        let ze = L,
            R;
        t[10] === l ? R = t[11] : (R = s(l), t[10] = l, t[11] = R);
        let z = R,
            B = Qe(ve) ? ve : null,
            Ve;
        t[12] !== c || t[13] !== B ? (Ve = He(c, B), t[12] = c, t[13] = B, t[14] = Ve) : Ve = t[14];
        let V = Ve,
            H = B?.loadingState === `detail`,
            U = B?.enableTargetedReply === !0,
            Ue;
        t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (Ue = () => {
            Pe(!1)
        }, t[15] = Ue) : Ue = t[15];
        let W;
        t[16] === C ? W = t[17] : (W = [C], t[16] = C, t[17] = W), (0, Xe.useEffect)(Ue, W);
        let G;
        t[18] !== a.id || t[19] !== x || t[20] !== P ? (G = e => {
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
                    promptMessage: he({}, e.promptMessage, {
                        metadata: {
                            targeted_reply: r,
                            targeted_reply_label: r
                        }
                    }),
                    appendMessages: [...e.appendMessages ?? [], o(r)]
                })
            };
            P({
                ...i,
                conversationId: a.id
            })
        }, t[18] = a.id, t[19] = x, t[20] = P, t[21] = G) : G = t[21];
        let K = S(G),
            We;
        t[22] !== a.id || t[23] !== y || t[24] !== P || t[25] !== Fe?.conversationId ? (We = e => {
            Fe?.conversationId === a.id && P(void 0), y?.(e)
        }, t[22] = a.id, t[23] = y, t[24] = P, t[25] = Fe?.conversationId, t[26] = We) : We = t[26];
        let q = S(We),
            Ge;
        t[27] === c ? Ge = t[28] : (Ge = (e, t) => new Promise(n => {
            let r = e ?? c.connectorId;
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
                referrer: ge.WidgetConnectSheet,
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
        t[29] === d ? qe = t[30] : (qe = () => {
            Pe(!0), d()
        }, t[29] = d, t[30] = qe);
        let Y = S(qe),
            Je, Z;
        if (t[31] !== Y || t[32] !== V ? (Je = () => {
                V && Y()
            }, Z = [Y, V], t[31] = Y, t[32] = V, t[33] = Je, t[34] = Z) : (Je = t[33], Z = t[34]), (0, Xe.useEffect)(Je, Z), V != null) {
            let e = V.component,
                n = Te && `h-full`,
                r = Ee && `w-full`,
                i;
            t[35] !== n || t[36] !== r ? (i = f(`min-h-0 max-h-full flex-shrink overflow-y-auto`, n, r), t[35] = n, t[36] = r, t[37] = i) : i = t[37];
            let o;
            t[38] === B ? o = t[39] : (o = B ?? {}, t[38] = B, t[39] = o);
            let s;
            t[40] !== e || t[41] !== c || t[42] !== a || t[43] !== k || t[44] !== p || t[45] !== m || t[46] !== o ? (s = (0, X.jsx)(e, {
                chatSDK: c,
                conversation: a,
                displayMode: k,
                onClose: p,
                onRefreshOrigin: m,
                params: o
            }), t[40] = e, t[41] = c, t[42] = a, t[43] = k, t[44] = p, t[45] = m, t[46] = o, t[47] = s) : s = t[47];
            let l;
            return t[48] !== i || t[49] !== s ? (l = (0, X.jsx)(`div`, {
                className: i,
                children: s
            }), t[48] = i, t[49] = s, t[50] = l) : l = t[50], l
        }
        let et = H && `relative`,
            tt = !De && `max-h-full flex-shrink overflow-y-auto`,
            nt = Te && `h-full`,
            rt = Ee && `w-full`,
            Q;
        t[51] !== et || t[52] !== tt || t[53] !== nt || t[54] !== rt ? (Q = f(et, tt, nt, rt), t[51] = et, t[52] = tt, t[53] = nt, t[54] = rt, t[55] = Q) : Q = t[55];
        let it = Te ? void 0 : Math.max(je ?? 0, we ?? 0),
            at;
        t[56] === it ? at = t[57] : (at = {
            height: it
        }, t[56] = it, t[57] = at);
        let ot;
        t[58] !== H || t[59] !== Ne ? (ot = !Ne && H ? (0, X.jsx)($e, {}) : null, t[58] = H, t[59] = Ne, t[60] = ot) : ot = t[60];
        let st = M ?? `light`,
            ct;
        t[61] === Symbol.for(`react.memo_cache_sentinel`) ? (ct = e => {
            Me(e)
        }, t[61] = ct) : ct = t[61];
        let lt;
        if (t[62] !== w || t[63] !== c || t[64] !== l || t[65] !== O || t[66] !== se || t[67] !== U || t[68] !== A || t[69] !== h || t[70] !== re || t[71] !== g || t[72] !== p || t[73] !== y || t[74] !== _ || t[75] !== v || t[76] !== J || t[77] !== K || t[78] !== u || t[79] !== q || t[80] !== z || t[81] !== N || t[82] !== T || t[83] !== E || t[84] !== D) {
            let e;
            t[86] === p ? e = t[87] : (e = () => p(`request_close`), t[86] = p, t[87] = e);
            let n;
            t[88] !== U || t[89] !== K ? (n = U ? {
                requestTargetedReply: K
            } : {}, t[88] = U, t[89] = K, t[90] = n) : n = t[90];
            let r;
            t[91] !== y || t[92] !== q ? (r = y ? {
                sendFollowUpMessage: q
            } : {}, t[91] = y, t[92] = q, t[93] = r) : r = t[93];
            let i;
            t[94] === p ? i = t[95] : (i = () => p(`escape_key`), t[94] = p, t[95] = i);
            let a;
            t[96] !== c || t[97] !== l || t[98] !== g || t[99] !== u ? (a = async e => {
                let t = await Be({
                    chatSDK: c,
                    clientThreadId: l,
                    checkoutSession: e,
                    resolvedWidget: u
                });
                return Ze(t) && g?.(t), t
            }, t[96] = c, t[97] = l, t[98] = g, t[99] = u, t[100] = a) : a = t[100];
            let o;
            t[101] !== h || t[102] !== re ? (o = e => {
                let {
                    canGoBack: t,
                    canGoForward: n
                } = e;
                h(t), re?.(n)
            }, t[101] = h, t[102] = re, t[103] = o) : o = t[103];
            let s;
            t[104] === N ? s = t[105] : (s = e => Ke(N, e), t[104] = N, t[105] = s);
            let d;
            t[106] === _ ? d = t[107] : (d = e => _?.(e), t[106] = _, t[107] = d);
            let f, ee;
            t[108] !== c.metadata || t[109] !== c.widgetSessionId || t[110] !== A || t[111] !== T || t[112] !== E ? (f = (e, t) => A.callTool$({
                appUri: b(E),
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
            }), ee = e => A.callMcp$(b(E), e, {
                messageId: T,
                resourceName: c.metadata.resource_name ?? null,
                connectorToolTargetMeta: c.metadata,
                widgetContext: {
                    appUri: E,
                    widgetId: T,
                    widgetSessionId: c.widgetSessionId,
                    source: `iframe`
                }
            }), t[108] = c.metadata, t[109] = c.widgetSessionId, t[110] = A, t[111] = T, t[112] = E, t[113] = f, t[114] = ee) : (f = t[113], ee = t[114]);
            let te, m, ne;
            t[115] !== A || t[116] !== E ? (te = (e, t) => A.uploadFile$(b(E), e, t), m = e => A.getFileDownloadUrl$(b(E), e.fileId), ne = e => A.getFileMetadata$(b(E), e.fileId), t[115] = A, t[116] = E, t[117] = te, t[118] = m, t[119] = ne) : (te = t[117], m = t[118], ne = t[119]);
            let ie, x;
            t[120] === J ? (ie = t[121], x = t[122]) : (ie = e => {
                let {
                    connectorId: t
                } = e;
                return J(t)
            }, x = e => J(void 0, e), t[120] = J, t[121] = ie, t[122] = x);
            let S;
            t[123] !== A || t[124] !== E ? (S = () => A.selectFiles$(b(E)), t[123] = A, t[124] = E, t[125] = S) : S = t[125];
            let oe;
            t[126] !== c.metadata || t[127] !== c.widgetSessionId || t[128] !== A || t[129] !== v || t[130] !== T || t[131] !== E ? (oe = async (e, t, n) => {
                if (v) return v(e, t, n);
                let r = {
                    appUri: E,
                    widgetId: T,
                    widgetSessionId: c.widgetSessionId,
                    source: `iframe`
                };
                if (!n?.waitForPersistence) return A.enqueueWidgetState$(e, t, {
                    hydratedRevision: c.metadata.widget_state_revision ?? 0,
                    widgetContext: r
                }), {
                    ok: !0
                };
                try {
                    return await A.enqueueWidgetState$(e, t, {
                        hydratedRevision: c.metadata.widget_state_revision ?? 0,
                        waitForPersistence: !0,
                        widgetContext: r
                    }), {
                        ok: !0
                    }
                } catch (e) {
                    return fe(e)
                }
            }, t[126] = c.metadata, t[127] = c.widgetSessionId, t[128] = A, t[129] = v, t[130] = T, t[131] = E, t[132] = oe) : oe = t[132], lt = {
                notifyIntrinsicHeight: ct,
                openExternal(e) {
                    let {
                        href: t,
                        redirectUrl: n,
                        openMode: r
                    } = e, i = n === !1 ? null : z ? new URL(ae(z), window.location.origin).toString() : new URL(window.location.href).toString();
                    ke({
                        attributionId: w,
                        conversationId: z,
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
                setOpenInAppUrl: d,
                callTool: f,
                callMcp: ee,
                uploadFile: te,
                getFileDownloadUrl: m,
                getFileMetadata: ne,
                requestLinkToConnector: ie,
                requestConnectSheet: x,
                selectFiles: S,
                updateWidgetState: oe
            }, t[62] = w, t[63] = c, t[64] = l, t[65] = O, t[66] = se, t[67] = U, t[68] = A, t[69] = h, t[70] = re, t[71] = g, t[72] = p, t[73] = y, t[74] = _, t[75] = v, t[76] = J, t[77] = K, t[78] = u, t[79] = q, t[80] = z, t[81] = N, t[82] = T, t[83] = E, t[84] = D, t[85] = lt
        } else lt = t[85];
        let $;
        t[133] !== ze || t[134] !== w || t[135] !== c.distributionChannel || t[136] !== c.metadata || t[137] !== c.oaiSubjectId || t[138] !== c.widgetSessionId || t[139] !== O || t[140] !== k || t[141] !== ue || t[142] !== j || t[143] !== Y || t[144] !== C || t[145] !== me || t[146] !== ve || t[147] !== u.name || t[148] !== u.permissions || t[149] !== u.toolInfo || t[150] !== r || t[151] !== z || t[152] !== de || t[153] !== ce || t[154] !== st || t[155] !== lt || t[156] !== I || t[157] !== Re || t[158] !== T || t[159] !== E || t[160] !== Le || t[161] !== D ? ($ = (0, X.jsx)(Ae, {
            host: `chatgpt`,
            html: C,
            ref: j,
            theme: st,
            attributionId: w,
            appDisplayName: u.name,
            measureWidth: !1,
            onReady: Y,
            conversationId: z,
            widgetId: T,
            widgetSessionId: c.widgetSessionId,
            widgetParent: E,
            connectorToolTargetMeta: c.metadata,
            widgetDistributionChannel: c.distributionChannel,
            suggestionMessageId: ce,
            widgetType: D,
            subdomain: de,
            widgetState: Le,
            toolInput: ze,
            toolOutput: I,
            toolResponseMetadata: Re,
            toolInfo: u.toolInfo,
            subjectId: c.oaiSubjectId,
            features: ue,
            permissions: u.permissions,
            viewParams: ve,
            safeArea: r,
            displayMode: k,
            api: lt,
            csp: O,
            locale: me
        }), t[133] = ze, t[134] = w, t[135] = c.distributionChannel, t[136] = c.metadata, t[137] = c.oaiSubjectId, t[138] = c.widgetSessionId, t[139] = O, t[140] = k, t[141] = ue, t[142] = j, t[143] = Y, t[144] = C, t[145] = me, t[146] = ve, t[147] = u.name, t[148] = u.permissions, t[149] = u.toolInfo, t[150] = r, t[151] = z, t[152] = de, t[153] = ce, t[154] = st, t[155] = lt, t[156] = I, t[157] = Re, t[158] = T, t[159] = E, t[160] = Le, t[161] = D, t[162] = $) : $ = t[162];
        let ut;
        return t[163] !== Q || t[164] !== at || t[165] !== ot || t[166] !== $ ? (ut = (0, X.jsxs)(`div`, {
            className: Q,
            style: at,
            children: [ot, $]
        }), t[163] = Q, t[164] = at, t[165] = ot, t[166] = $, t[167] = ut) : ut = t[167], ut
    }
}));
export {
    He as a, R as c, Ke as i, tt as n, U as o, qe as r, Be as s, et as t
};
//# sourceMappingURL=f7e0bf69-gtfazbgaekqtufcz.js.map