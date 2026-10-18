const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/622fb003-kkel59b7jksst9ih.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/conversation-small-fym1zmu9zimymmm1.js", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css", "assets/8b34dbc2-gf9wnwcahty27ylx.js", "assets/82782bc9-h658ejxn3ufkvr7a.js", "assets/6601bf01-l2hvb3ulv1nxkphc.js", "assets/4f866508-khnwgwvmnmyh78fa.js", "assets/e762572d-d9m2q4bht39qycrh.js", "assets/9fe250df-ntdcuck4r9hf61tb.js", "assets/6671b9de-nxgp26gka1i5bjxl.js", "assets/dfee2fd5-kokd9ew07i5al9ne.js", "assets/25a66342-dcvz86tueu6kzw9v.js", "assets/e44193fd-f0hwbdius6v4xt8w.js", "assets/3abc0e9f-fr12yekp7vjg3k5x.js", "assets/d3b04dc9-km1lkmtbx0c4vhi5.js", "assets/cc29053f-j12gufyutn4tb76x.js", "assets/69fc29f0-cqs6excx0tzav66g.js", "assets/f94cb8df-fgnv7e4k3dur7g9e.js", "assets/a238cce4-iimtntycc9g7mr46.js", "assets/e7ad522e-l4y3c7qtp2zd7qrm.js", "assets/a52cbd6d-b3akc51auciks7qa.js", "assets/d62a8c8e-hwqn8qg8powcy3qr.js", "assets/4cf35c7a-drgejtr1y0lhb3xn.js", "assets/b5901a24-duvmjkx79b210rzz.js", "assets/4b023495-d2flisgvg6vl9b4p.js", "assets/46d93d39-k73qvgloed71u1j6.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $M as n,
    AJ as r,
    C0 as i,
    IB as a,
    JP as o,
    KP as s,
    O0 as c,
    OB as l,
    OJ as u,
    OZ as d,
    Ret as f,
    S0 as p,
    T0 as m,
    VT as ee,
    aN as te,
    b5 as ne,
    dot as h,
    eN as g,
    hU as re,
    i5 as ie,
    pU as _,
    pZ as ae,
    r5 as oe,
    tN as v,
    uot as y,
    y5 as b,
    zT as x,
    zet as S
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as se,
    Vn as C,
    cn as w,
    ln as T,
    wn as E
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    CAt as ce,
    CYt as le,
    EBt as ue,
    EWt as de,
    NWt as D,
    TBt as fe,
    i6 as pe,
    kAt as O,
    lht as me,
    n6 as he,
    r6 as ge,
    sht as k,
    t6 as _e,
    wYt as A
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Ju as ve,
    Ku as ye
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    a as be,
    n as xe,
    r as Se,
    t as Ce
} from "./824d80d7-e0wasqya10t0ofva.js";
import {
    n as we,
    t as Te
} from "./e3349b6b-gk6p37ontdqd6u55.js";
import {
    i as Ee,
    n as De,
    r as Oe,
    t as ke
} from "./1c86a5ac-g8o3s7m87lyivalf.js";

function j(e, t, n) {
    if (!e) {
        if (n) throw Error(`Invalid checkout session: ${t}`);
        console.warn(`Invalid checkout session: ${t}`)
    }
}
var Ae, je, Me, Ne, M, N, P, Pe, F, I, Fe, L, Ie, Le, R, Re = e((() => {
        y(), Ae = /^[A-Z]{3}$/, je = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/i, Me = /^\+[1-9]\d{1,14}$/, Ne = [`fee`, `tax`, `fulfillment`, `discount`, `items_discount`, `tip`], M = (e, t, n) => {
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
                let n = h(i.get(e.fulfillment_option_id), `fulfillment_option_id "${e.fulfillment_option_id}" must match an available fulfillment option`);
                j(r.fulfillment !== void 0, `totals must include a fulfillment entry when a fulfillment option is selected`, t), j(r.fulfillment === n.total, `fulfillment total (${r.fulfillment}) must equal the selected fulfillment option total (${n.total})`, t)
            }
        }
    })),
    ze, z = e((() => {
        xe(), Se(), Re(), o(), ze = async ({
            chatSDK: e,
            clientThreadId: t,
            resolvedWidget: n,
            checkoutSession: r
        }) => {
            let i = be(r);
            return R(i, !1), Ce(s(t)).openCheckout(e, n, i)
        }
    }));

function B(e) {
    return e.distributionChannel === f.OPENAI && e.connectorId || null
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
    S(), U = new Map
}));

function He() {
    for (let [e, t] of Object.entries(q)) H({
        connectorId: ce,
        view: e
    }, t)
}
var G, K, q, Ue = e((() => {
    W(), O(), Te(), i(), T(), G = p(() => we(w(() => import(`./622fb003-kkel59b7jksst9ih.js`).then(e => e.FinanceAccountLinkingValdiRenderer), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27])))), K = p(() => we(w(() => import(`./d62a8c8e-hwqn8qg8powcy3qr.js`).then(e => e.FinanceCreditAccountDetailValdiRenderer), __vite__mapDeps([28, 1, 2, 3, 4, 29, 30, 18, 19, 15, 16, 17, 20, 31, 5, 6, 7, 8, 9, 13, 21, 22, 24, 25, 27, 32])))), q = {
        accountLinking: {
            component: G,
            supportsExternalPresentation: !0
        },
        creditAccountDetail: {
            component: K
        }
    }
}));

function J() {
    He()
}
var We = e((() => {
        Ue()
    })),
    Y, Ge, Ke = e((() => {
        Y = ({
            body: e
        }) => e.trim().length > 0 ? {
            description: e
        } : void 0, Ge = (e, t) => {
            let n = Y(t);
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

function X(e, t) {
    return (0, Z.jsxs)(`div`, {
        className: `flex items-center justify-between gap-4 py-4`,
        children: [(0, Z.jsx)(Q, {
            className: `h-[18px] w-[92px] rounded-md`
        }), (0, Z.jsx)(Q, {
            className: `h-[18px] w-[150px] rounded-md`
        })]
    }, t)
}

function qe(e, t) {
    return (0, Z.jsxs)(`div`, {
        className: `flex items-center gap-3 py-3`,
        children: [(0, Z.jsx)(Q, {
            className: `h-8 w-8 rounded-full`
        }), (0, Z.jsxs)(`div`, {
            className: `min-w-0 flex-1`,
            children: [(0, Z.jsx)(Q, {
                className: `h-4 w-[76px] rounded-md`
            }), (0, Z.jsx)(`div`, {
                className: `pt-1`,
                children: (0, Z.jsx)(Q, {
                    className: `h-[14px] w-[54px] rounded-md`
                })
            })]
        }), (0, Z.jsx)(Q, {
            className: `h-4 w-16 rounded-md`
        })]
    }, t)
}
var Je, Ye, Z, Xe, Q, Ze, Qe, $e, et = e((() => {
    Je = E(), ve(), D(), m(), z(), We(), W(), Ee(), De(), he(), pe(), A(), Ke(), oe(), r(), _(), k(), d(), y(), v(), a(), x(), n(), ne(), fe(), Ye = t(C()), Z = se(), J(), Xe = e => e?.order != null, Q = e => {
        "use forget";
        let t = (0, Je.c)(4),
            {
                className: n
            } = e,
            r;
        t[0] === n ? r = t[1] : (r = b(`loading-results-shimmer`, n), t[0] = n, t[1] = r);
        let i;
        return t[2] === r ? i = t[3] : (i = (0, Z.jsx)(`div`, {
            className: r,
            "data-testid": `ecosystem-focused-object-loading-block`
        }), t[2] = r, t[3] = i), i
    }, Ze = e => typeof e == `object` && !!e && !Array.isArray(e), Qe = () => {
        "use forget";
        let e = (0, Je.c)(8),
            t;
        e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Z.jsx)(`div`, {
            className: `flex items-center justify-end pb-4`,
            children: (0, Z.jsx)(Q, {
                className: `h-9 w-9 rounded-full`
            })
        }), e[0] = t) : t = e[0];
        let n;
        e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, Z.jsx)(Q, {
            className: `h-10 w-10 rounded-full`
        }), e[1] = n) : n = e[1];
        let r;
        e[2] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, Z.jsx)(Q, {
            className: `h-[18px] w-[170px] rounded-md`
        }), e[2] = r) : r = e[2];
        let i;
        e[3] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-3`,
            children: [n, (0, Z.jsxs)(`div`, {
                className: `min-w-0 flex-1`,
                children: [r, (0, Z.jsx)(`div`, {
                    className: `pt-1`,
                    children: (0, Z.jsx)(Q, {
                        className: `h-9 w-[164px] rounded-md`
                    })
                })]
            })]
        }), e[3] = i) : i = e[3];
        let a;
        e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, Z.jsxs)(`div`, {
            className: `flex gap-2 pt-4`,
            children: [(0, Z.jsx)(Q, {
                className: `h-10 w-24 rounded-full`
            }), (0, Z.jsx)(Q, {
                className: `h-10 w-[140px] rounded-full`
            })]
        }), e[4] = a) : a = e[4];
        let o;
        e[5] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, Z.jsx)(`div`, {
            className: `mt-5 divide-y divide-black/5 border-y border-black/5 dark:divide-white/10 dark:border-white/10`,
            children: Array.from({
                length: 5
            }, X)
        }), e[5] = o) : o = e[5];
        let s;
        e[6] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, Z.jsx)(`div`, {
            className: `pt-6`,
            children: (0, Z.jsx)(Q, {
                className: `h-6 w-[196px] rounded-md`
            })
        }), e[6] = s) : s = e[6];
        let c;
        return e[7] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, Z.jsxs)(`div`, {
            "aria-hidden": `true`,
            className: `bg-token-bg-primary pointer-events-none absolute inset-0 z-10 overflow-hidden px-5 pt-4 pb-6`,
            "data-testid": `ecosystem-focused-object-loading-state`,
            children: [t, i, a, o, s, (0, Z.jsx)(`div`, {
                className: `pt-4`,
                children: Array.from({
                    length: 3
                }, qe)
            })]
        }), e[7] = c) : c = e[7], c
    }, $e = e => {
        "use forget";
        let t = (0, Je.c)(168),
            {
                heightHint: n,
                safeArea: r,
                widgetRef: i,
                conversation: a,
                chatSDK: o,
                clientThreadId: s,
                resolvedWidget: d,
                onReady: f,
                onClose: p,
                onRefreshOrigin: m,
                onCanGoBack: ne,
                onCanGoForward: _,
                onCheckoutComplete: oe,
                onSetOpenInAppUrl: v,
                onUpdateWidgetState: y,
                onSendFollowUpMessage: x,
                createTargetedReplyContent: S,
                domain: se,
                html: C,
                attributionId: w,
                widgetId: T,
                widgetParent: E,
                suggestionMessageId: ce,
                widgetType: D,
                features: fe,
                subdomain: pe,
                csp: O,
                locale: he,
                params: k,
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
        t[0] === a ? De = t[1] : (De = _e(a), t[0] = a, t[1] = De);
        let j = De,
            [Ae, je] = (0, Ye.useState)(Ce),
            [Me, Ne] = (0, Ye.useState)(!1),
            M = ee(i, (0, Ye.useRef)(null)),
            N = te(),
            P = re(),
            {
                targetedContent: Pe,
                setTargetedContent: F
            } = me(),
            I;
        t[2] !== o || t[3] !== j ? (I = () => j.getWidgetStateAndProps$(o), t[2] = o, t[3] = j, t[4] = I) : I = t[4];
        let {
            toolInput: Fe,
            toolOutput: L,
            widgetState: Ie,
            toolResponseMetadata: Le
        } = ie(I), R;
        t[5] !== o || t[6] !== Se || t[7] !== Fe || t[8] !== L ? (R = le(o, Fe, L, Se), t[5] = o, t[6] = Se, t[7] = Fe, t[8] = L, t[9] = R) : R = t[9];
        let Re = R,
            z;
        t[10] === s ? z = t[11] : (z = u(s), t[10] = s, t[11] = z);
        let B = z,
            V = Ze(k) ? k : null,
            Be;
        t[12] !== o || t[13] !== V ? (Be = Ve(o, V), t[12] = o, t[13] = V, t[14] = Be) : Be = t[14];
        let H = Be,
            U = V?.loadingState === `detail`,
            W = V?.enableTargetedReply === !0,
            He;
        t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (He = () => {
            Ne(!1)
        }, t[15] = He) : He = t[15];
        let G;
        t[16] === C ? G = t[17] : (G = [C], t[16] = C, t[17] = G), (0, Ye.useEffect)(He, G);
        let K;
        t[18] !== a.id || t[19] !== S || t[20] !== F ? (K = e => {
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
                    promptMessage: ue({}, e.promptMessage, {
                        metadata: {
                            targeted_reply: r,
                            targeted_reply_label: r
                        }
                    }),
                    appendMessages: [...e.appendMessages ?? [], ae(r)]
                })
            };
            F({
                ...i,
                conversationId: a.id
            })
        }, t[18] = a.id, t[19] = S, t[20] = F, t[21] = K) : K = t[21];
        let q = g(K),
            Ue;
        t[22] !== a.id || t[23] !== x || t[24] !== F || t[25] !== Pe?.conversationId ? (Ue = e => {
            Pe?.conversationId === a.id && F(void 0), x?.(e)
        }, t[22] = a.id, t[23] = x, t[24] = F, t[25] = Pe?.conversationId, t[26] = Ue) : Ue = t[26];
        let J = g(Ue),
            We;
        t[27] === o ? We = t[28] : (We = (e, t) => new Promise(n => {
            let r = e ?? o.connectorId;
            if (!r) {
                n({
                    didConnect: !1
                });
                return
            }
            c(ye, {
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
        }), t[27] = o, t[28] = We);
        let Y = We,
            Ke;
        t[29] === f ? Ke = t[30] : (Ke = () => {
            Ne(!0), f()
        }, t[29] = f, t[30] = Ke);
        let X = g(Ke),
            qe, Q;
        if (t[31] !== X || t[32] !== H ? (qe = () => {
                H && X()
            }, Q = [X, H], t[31] = X, t[32] = H, t[33] = qe, t[34] = Q) : (qe = t[33], Q = t[34]), (0, Ye.useEffect)(qe, Q), H != null) {
            let e = H.component,
                n = we && `h-full`,
                r = Te && `w-full`,
                i;
            t[35] !== n || t[36] !== r ? (i = b(`min-h-0 max-h-full flex-shrink overflow-y-auto`, n, r), t[35] = n, t[36] = r, t[37] = i) : i = t[37];
            let s;
            t[38] === V ? s = t[39] : (s = V ?? {}, t[38] = V, t[39] = s);
            let c;
            t[40] !== e || t[41] !== o || t[42] !== a || t[43] !== A || t[44] !== p || t[45] !== m || t[46] !== s ? (c = (0, Z.jsx)(e, {
                chatSDK: o,
                conversation: a,
                displayMode: A,
                onClose: p,
                onRefreshOrigin: m,
                params: s
            }), t[40] = e, t[41] = o, t[42] = a, t[43] = A, t[44] = p, t[45] = m, t[46] = s, t[47] = c) : c = t[47];
            let l;
            return t[48] !== i || t[49] !== c ? (l = (0, Z.jsx)(`div`, {
                className: i,
                children: c
            }), t[48] = i, t[49] = c, t[50] = l) : l = t[50], l
        }
        let $e = U && `relative`,
            et = !Ee && `max-h-full flex-shrink overflow-y-auto`,
            tt = we && `h-full`,
            nt = Te && `w-full`,
            rt;
        t[51] !== $e || t[52] !== et || t[53] !== tt || t[54] !== nt ? (rt = b($e, et, tt, nt), t[51] = $e, t[52] = et, t[53] = tt, t[54] = nt, t[55] = rt) : rt = t[55];
        let it = we ? void 0 : Math.max(Ae ?? 0, Ce ?? 0),
            at;
        t[56] === it ? at = t[57] : (at = {
            height: it
        }, t[56] = it, t[57] = at);
        let ot;
        t[58] !== U || t[59] !== Me ? (ot = !Me && U ? (0, Z.jsx)(Qe, {}) : null, t[58] = U, t[59] = Me, t[60] = ot) : ot = t[60];
        let st = N ?? `light`,
            ct;
        t[61] === Symbol.for(`react.memo_cache_sentinel`) ? (ct = e => {
            je(e)
        }, t[61] = ct) : ct = t[61];
        let lt;
        if (t[62] !== w || t[63] !== o || t[64] !== s || t[65] !== O || t[66] !== se || t[67] !== W || t[68] !== j || t[69] !== ne || t[70] !== _ || t[71] !== oe || t[72] !== p || t[73] !== x || t[74] !== v || t[75] !== y || t[76] !== Y || t[77] !== q || t[78] !== d || t[79] !== J || t[80] !== B || t[81] !== P || t[82] !== T || t[83] !== E || t[84] !== D) {
            let e;
            t[86] === p ? e = t[87] : (e = () => p(`request_close`), t[86] = p, t[87] = e);
            let n;
            t[88] !== W || t[89] !== q ? (n = W ? {
                requestTargetedReply: q
            } : {}, t[88] = W, t[89] = q, t[90] = n) : n = t[90];
            let r;
            t[91] !== x || t[92] !== J ? (r = x ? {
                sendFollowUpMessage: J
            } : {}, t[91] = x, t[92] = J, t[93] = r) : r = t[93];
            let i;
            t[94] === p ? i = t[95] : (i = () => p(`escape_key`), t[94] = p, t[95] = i);
            let a;
            t[96] !== o || t[97] !== s || t[98] !== oe || t[99] !== d ? (a = async e => {
                let t = await ze({
                    chatSDK: o,
                    clientThreadId: s,
                    checkoutSession: e,
                    resolvedWidget: d
                });
                return Xe(t) && oe?.(t), t
            }, t[96] = o, t[97] = s, t[98] = oe, t[99] = d, t[100] = a) : a = t[100];
            let c;
            t[101] !== ne || t[102] !== _ ? (c = e => {
                let {
                    canGoBack: t,
                    canGoForward: n
                } = e;
                ne(t), _?.(n)
            }, t[101] = ne, t[102] = _, t[103] = c) : c = t[103];
            let u;
            t[104] === P ? u = t[105] : (u = e => Ge(P, e), t[104] = P, t[105] = u);
            let f;
            t[106] === v ? f = t[107] : (f = e => v?.(e), t[106] = v, t[107] = f);
            let m, ee;
            t[108] !== o.metadata || t[109] !== o.widgetSessionId || t[110] !== j || t[111] !== T || t[112] !== E ? (m = (e, t) => j.callTool$({
                appUri: h(E),
                name: e,
                args: t,
                callContext: {
                    messageId: T,
                    resourceName: o.metadata.resource_name ?? null,
                    connectorToolTargetMeta: o.metadata,
                    widgetContext: {
                        appUri: E,
                        widgetId: T,
                        widgetSessionId: o.widgetSessionId,
                        source: `iframe`
                    }
                }
            }), ee = e => j.callMcp$(h(E), e, {
                messageId: T,
                resourceName: o.metadata.resource_name ?? null,
                connectorToolTargetMeta: o.metadata,
                widgetContext: {
                    appUri: E,
                    widgetId: T,
                    widgetSessionId: o.widgetSessionId,
                    source: `iframe`
                }
            }), t[108] = o.metadata, t[109] = o.widgetSessionId, t[110] = j, t[111] = T, t[112] = E, t[113] = m, t[114] = ee) : (m = t[113], ee = t[114]);
            let te, g, re;
            t[115] !== j || t[116] !== E ? (te = (e, t) => j.uploadFile$(h(E), e, t), g = e => j.getFileDownloadUrl$(h(E), e.fileId), re = e => j.getFileMetadata$(h(E), e.fileId), t[115] = j, t[116] = E, t[117] = te, t[118] = g, t[119] = re) : (te = t[117], g = t[118], re = t[119]);
            let ie, ae;
            t[120] === Y ? (ie = t[121], ae = t[122]) : (ie = e => {
                let {
                    connectorId: t
                } = e;
                return Y(t)
            }, ae = e => Y(void 0, e), t[120] = Y, t[121] = ie, t[122] = ae);
            let b;
            t[123] !== j || t[124] !== E ? (b = () => j.selectFiles$(h(E)), t[123] = j, t[124] = E, t[125] = b) : b = t[125];
            let S;
            t[126] !== o.metadata || t[127] !== o.widgetSessionId || t[128] !== j || t[129] !== y || t[130] !== T || t[131] !== E ? (S = async (e, t, n) => {
                if (y) return y(e, t, n);
                let r = {
                    appUri: E,
                    widgetId: T,
                    widgetSessionId: o.widgetSessionId,
                    source: `iframe`
                };
                if (!n?.waitForPersistence) return j.enqueueWidgetState$(e, t, {
                    hydratedRevision: o.metadata.widget_state_revision ?? 0,
                    widgetContext: r
                }), {
                    ok: !0
                };
                try {
                    return await j.enqueueWidgetState$(e, t, {
                        hydratedRevision: o.metadata.widget_state_revision ?? 0,
                        waitForPersistence: !0,
                        widgetContext: r
                    }), {
                        ok: !0
                    }
                } catch (e) {
                    return ge(e)
                }
            }, t[126] = o.metadata, t[127] = o.widgetSessionId, t[128] = j, t[129] = y, t[130] = T, t[131] = E, t[132] = S) : S = t[132], lt = {
                notifyIntrinsicHeight: ct,
                openExternal(e) {
                    let {
                        href: t,
                        redirectUrl: n,
                        openMode: r
                    } = e, i = n === !1 ? null : B ? new URL(l(B), window.location.origin).toString() : new URL(window.location.href).toString();
                    Oe({
                        attributionId: w,
                        conversationId: B,
                        href: t,
                        csp: O,
                        messageId: T,
                        redirectDomains: d.redirectDomains,
                        resolvedPineappleUri: o.metadata.resolved_pineapple_uri ?? null,
                        domain: se,
                        distributionChannel: o.distributionChannel,
                        redirectUrl: i,
                        openMode: r,
                        sectionLocation: `focused_object`,
                        widgetName: D,
                        widgetSessionId: o.widgetSessionId
                    })
                },
                requestClose: e,
                ...n,
                ...r,
                notifyEscapeKey: i,
                requestCheckout: a,
                notifyNavigation: c,
                showToast: u,
                setOpenInAppUrl: f,
                callTool: m,
                callMcp: ee,
                uploadFile: te,
                getFileDownloadUrl: g,
                getFileMetadata: re,
                requestLinkToConnector: ie,
                requestConnectSheet: ae,
                selectFiles: b,
                updateWidgetState: S
            }, t[62] = w, t[63] = o, t[64] = s, t[65] = O, t[66] = se, t[67] = W, t[68] = j, t[69] = ne, t[70] = _, t[71] = oe, t[72] = p, t[73] = x, t[74] = v, t[75] = y, t[76] = Y, t[77] = q, t[78] = d, t[79] = J, t[80] = B, t[81] = P, t[82] = T, t[83] = E, t[84] = D, t[85] = lt
        } else lt = t[85];
        let $;
        t[133] !== Re || t[134] !== w || t[135] !== o.distributionChannel || t[136] !== o.metadata || t[137] !== o.oaiSubjectId || t[138] !== o.widgetSessionId || t[139] !== O || t[140] !== A || t[141] !== fe || t[142] !== M || t[143] !== X || t[144] !== C || t[145] !== he || t[146] !== k || t[147] !== d.name || t[148] !== d.permissions || t[149] !== d.toolInfo || t[150] !== r || t[151] !== B || t[152] !== pe || t[153] !== ce || t[154] !== st || t[155] !== lt || t[156] !== L || t[157] !== Le || t[158] !== T || t[159] !== E || t[160] !== Ie || t[161] !== D ? ($ = (0, Z.jsx)(ke, {
            host: `chatgpt`,
            html: C,
            ref: M,
            theme: st,
            attributionId: w,
            appDisplayName: d.name,
            measureWidth: !1,
            onReady: X,
            conversationId: B,
            widgetId: T,
            widgetSessionId: o.widgetSessionId,
            widgetParent: E,
            connectorToolTargetMeta: o.metadata,
            widgetDistributionChannel: o.distributionChannel,
            suggestionMessageId: ce,
            widgetType: D,
            subdomain: pe,
            widgetState: Ie,
            toolInput: Re,
            toolOutput: L,
            toolResponseMetadata: Le,
            toolInfo: d.toolInfo,
            subjectId: o.oaiSubjectId,
            features: fe,
            permissions: d.permissions,
            viewParams: k,
            safeArea: r,
            displayMode: A,
            api: lt,
            csp: O,
            locale: he
        }), t[133] = Re, t[134] = w, t[135] = o.distributionChannel, t[136] = o.metadata, t[137] = o.oaiSubjectId, t[138] = o.widgetSessionId, t[139] = O, t[140] = A, t[141] = fe, t[142] = M, t[143] = X, t[144] = C, t[145] = he, t[146] = k, t[147] = d.name, t[148] = d.permissions, t[149] = d.toolInfo, t[150] = r, t[151] = B, t[152] = pe, t[153] = ce, t[154] = st, t[155] = lt, t[156] = L, t[157] = Le, t[158] = T, t[159] = E, t[160] = Ie, t[161] = D, t[162] = $) : $ = t[162];
        let ut;
        return t[163] !== rt || t[164] !== at || t[165] !== ot || t[166] !== $ ? (ut = (0, Z.jsxs)(`div`, {
            className: rt,
            style: at,
            children: [ot, $]
        }), t[163] = rt, t[164] = at, t[165] = ot, t[166] = $, t[167] = ut) : ut = t[167], ut
    }
}));
export {
    Ve as a, z as c, Ge as i, et as n, W as o, Ke as r, ze as s, $e as t
};
//# sourceMappingURL=f7e0bf69-hdoaxjv4q8h43ul9.js.map