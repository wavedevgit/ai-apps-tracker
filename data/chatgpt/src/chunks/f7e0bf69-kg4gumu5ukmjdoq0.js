const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/622fb003-g57ppyr4xbbs5wnf.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-mdvd4786a87166cc.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-bcbq46iub1p0ca1t.js", "assets/30901919-s8bko9nrkqwv6i4f.js", "assets/c470f5ab-jwd0o7jx9i9say9k.js", "assets/0e5afe53-hxm3yzzjqriayom4.js", "assets/conversation-small-ep6mlz5m.css", "assets/8b34dbc2-lmwubajnld74ksfm.js", "assets/82782bc9-b4xbouzwkkyrfqq2.js", "assets/6601bf01-mgwixdesah84q5n2.js", "assets/4f866508-nx1lmkigi4ro0s38.js", "assets/25a66342-jf724cxji0x4lls3.js", "assets/6ba0bdec-mvcxt3etr0emavay.js", "assets/9fe250df-osxeis4qnqthjvir.js", "assets/f03d8fe5-l7ngnwibt944es9z.js", "assets/e762572d-hplb1nd79ppn7q2q.js", "assets/80d298c9-g8514ljd3fn3cnv2.js", "assets/d3b04dc9-gpun33km6jnzih4v.js", "assets/cc29053f-doj1b618x9y6adia.js", "assets/ea3668e1-j5nmq4u1dro47k0w.js", "assets/dfee2fd5-cskt5ca94q9pgt9w.js", "assets/69fc29f0-jr60wx4pbn7c1bb0.js", "assets/d64aaa75-d0d9955d9erd0nuh.js", "assets/33133228-ir00eqrg0x0cl5zh.js", "assets/e7ad522e-lc8f32q22zfx17j9.js", "assets/02946ba1-m8b193bdfih5vg1p.js", "assets/2c86142d-gg68rb29o6p9m6j8.js", "assets/d62a8c8e-k977yus8seeyg71y.js", "assets/4cf35c7a-fuufw34ubkxvq703.js", "assets/b5901a24-lf9tyby1b7iurr0s.js", "assets/4b023495-dyefza7uukpx0yls.js", "assets/46d93d39-om46qlcv7hhp168d.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A5 as n,
    CN as r,
    K5 as i,
    LU as a,
    LZ as o,
    QJ as s,
    QZ as c,
    TN as l,
    a2 as u,
    c2 as d,
    d2 as f,
    dE as ee,
    eY as p,
    gF as m,
    gtt as h,
    hst as g,
    htt as _,
    j5 as te,
    kN as ne,
    lE as v,
    lV as re,
    mst as y,
    o2 as b,
    q5 as x,
    tV as ie,
    vF as S,
    wN as C,
    zU as ae
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as oe,
    Vn as w,
    cn as T,
    ln as E,
    wn as D
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    DAt as se,
    OYt as ce,
    SBt as le,
    SWt as ue,
    cht as de,
    d6 as fe,
    f6 as O,
    kWt as pe,
    kYt as me,
    l6 as he,
    oht as k,
    u6 as ge,
    xAt as A,
    xBt as j
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Qu as _e,
    Xu as ve
} from "./8b34dbc2-lmwubajnld74ksfm.js";
import {
    a as ye,
    n as be,
    r as xe,
    t as Se
} from "./824d80d7-mbottbinjzd4hnmb.js";
import {
    n as Ce,
    t as we
} from "./e3349b6b-mzabrdjh37ydj1sx.js";
import {
    i as Te,
    n as Ee,
    r as De,
    t as Oe
} from "./1c86a5ac-lb07v6ixov4iwl90.js";

function M(e, t, n) {
    if (!e) {
        if (n) throw Error(`Invalid checkout session: ${t}`);
        console.warn(`Invalid checkout session: ${t}`)
    }
}
var ke, Ae, je, Me, N, P, F, Ne, I, L, Pe, R, Fe, Ie, z, Le = e((() => {
        y(), ke = /^[A-Z]{3}$/, Ae = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/i, je = /^\+[1-9]\d{1,14}$/, Me = [`fee`, `tax`, `fulfillment`, `discount`, `items_discount`, `tip`], N = (e, t, n) => {
            M(e.trim().length > 0, `${t} must be a non-empty string`, n)
        }, P = (e, t, n, r) => {
            M(e.length <= t, `${n} must be ${t} characters or fewer`, r)
        }, F = (e, t, n) => {
            M(Number.isInteger(e), `${t} must be provided in integer minor currency units`, n), M(e >= 0, `${t} must be greater than or equal to 0`, n)
        }, Ne = (e, t, n) => {
            M(Number.isInteger(e) && e > 0, `${t} must be a positive integer`, n)
        }, I = e => Ae.test(e) && !Number.isNaN(Date.parse(e)), L = (e, t) => {
            M(e.length > 0, `links must include at least one entry (e.g. terms of use or privacy policy)`, t), e.forEach((e, n) => {
                N(e.url, `links[${n}].url`, t);
                try {
                    new URL(e.url)
                } catch {
                    throw Error(`Invalid checkout session: links[${n}].url must be an absolute URL`)
                }
            })
        }, Pe = (e, t) => {
            N(e.name, `fulfillment_address.name`, t), P(e.name, 256, `fulfillment_address.name`, t), N(e.line_one, `fulfillment_address.line_one`, t), P(e.line_one, 60, `fulfillment_address.line_one`, t), e.line_two?.trim() && P(e.line_two, 60, `fulfillment_address.line_two`, t), N(e.city, `fulfillment_address.city`, t), P(e.city, 60, `fulfillment_address.city`, t), N(e.state, `fulfillment_address.state`, t), N(e.country, `fulfillment_address.country`, t), N(e.postal_code, `fulfillment_address.postal_code`, t), P(e.postal_code, 20, `fulfillment_address.postal_code`, t), e.phone_number && M(je.test(e.phone_number), `fulfillment_address.phone_number must follow the E.164 format (example: +15551234567)`, t)
        }, R = (e, t) => {
            let n = {
                baseAmount: 0,
                discount: 0,
                subtotal: 0,
                tax: 0,
                total: 0
            };
            for (let [r, i] of e.entries()) {
                N(i.id, `line_items[${r}].id`, t), N(i.item.id, `line_items[${r}].item.id`, t), Ne(i.item.quantity, `line_items[${r}].item.quantity`, t), F(i.base_amount, `line_items[${r}].base_amount`, t), F(i.discount, `line_items[${r}].discount`, t), F(i.subtotal, `line_items[${r}].subtotal`, t), F(i.tax, `line_items[${r}].tax`, t), F(i.total, `line_items[${r}].total`, t);
                let e = i.base_amount - i.discount;
                M(i.subtotal === e, `line_items[${r}].subtotal must equal base_amount - discount (${e})`, t);
                let a = i.subtotal + i.tax;
                M(i.total === a, `line_items[${r}].total must equal subtotal + tax (${a})`, t), n.baseAmount += i.base_amount, n.discount += i.discount, n.subtotal += i.subtotal, n.tax += i.tax, n.total += i.total
            }
            return n
        }, Fe = (e, t, n) => {
            M(e.length > 0, `totals must contain at least one entry`, n);
            let r = {};
            for (let [t, i] of e.entries()) {
                F(i.amount, `totals[${t}].amount`, n);
                let e = r[i.type];
                e != null && M(Me.includes(i.type), `totals contains duplicate total type "${i.type}"`, n), r[i.type] = (e ?? 0) + i.amount
            }
            M(r.items_base_amount !== void 0, `totals must include an items_base_amount entry`, n), M(r.subtotal !== void 0, `totals must include a subtotal entry`, n), M(r.total !== void 0, `totals must include a total entry`, n);
            let i = r;
            M(i.items_base_amount === t.baseAmount, `totals.items_base_amount (${i.items_base_amount}) must equal the sum of line item base_amounts (${t.baseAmount})`, n), i.items_discount !== void 0 && M(i.items_discount === t.discount, `totals.items_discount (${i.items_discount}) must equal the sum of line item discounts (${t.discount})`, n);
            let a = i.items_discount ?? t.discount,
                o = t.baseAmount - a;
            M(i.subtotal === o, `subtotal must equal items_base_amount - items_discount (${o})`, n);
            let s = i.discount ?? 0,
                c = i.fulfillment ?? 0,
                l = i.tax ?? t.tax,
                u = i.fee ?? 0,
                d = i.tip ?? 0,
                f = t.baseAmount - a - s + c + l + u + d;
            return M(i.total === f, `total must equal items_base_amount - items_discount - discount + fulfillment + tax + fee (${f})`, n), i
        }, Ie = (e, t) => {
            let n = new Map;
            for (let [r, i] of e.entries()) N(i.id, `fulfillment_options[${r}].id`, t), N(i.title, `fulfillment_options[${r}].title`, t), i.type === `shipping` && N(i.subtitle, `fulfillment_options[${r}].subtitle`, t), F(i.subtotal, `fulfillment_options[${r}].subtotal`, t), F(i.tax, `fulfillment_options[${r}].tax`, t), F(i.total, `fulfillment_options[${r}].total`, t), M(i.total === i.subtotal + i.tax, `fulfillment_options[${r}].total must equal subtotal + tax`, t), M(!n.has(i.id), `fulfillment option ids must be unique; duplicate id "${i.id}"`, t), i.type === `shipping` && (N(i.carrier, `fulfillment_options[${r}].carrier`, t), M(I(i.earliest_delivery_time), `fulfillment_options[${r}].earliest_delivery_time must be an RFC 3339 timestamp`, t), M(I(i.latest_delivery_time), `fulfillment_options[${r}].latest_delivery_time must be an RFC 3339 timestamp`, t), M(Date.parse(i.earliest_delivery_time) <= Date.parse(i.latest_delivery_time), `fulfillment_options[${r}].earliest_delivery_time must be before or equal to latest_delivery_time`, t)), n.set(i.id, i);
            return n
        }, z = (e, t = !1) => {
            N(e.id, `id`, t), M(ke.test(e.currency), `currency "${e.currency}" must be a lower-case ISO 4217 code`, t), M(e.payment_provider.supported_payment_methods.length > 0, `payment_provider.supported_payment_methods must include at least one entry`, t), N(e.payment_provider.merchant_id, `payment_provider.merchant_id`, t), M(e.line_items.length > 0, `line_items must contain at least one entry`, t), M(e.totals.length > 0, `totals must contain at least one entry`, t), L(e.links, t), e.fulfillment_address && Pe(e.fulfillment_address, t);
            let n = R(e.line_items, t),
                r = Fe(e.totals, n, t),
                i = Ie(e.fulfillment_options, t);
            if (e.fulfillment_option_id) {
                let n = g(i.get(e.fulfillment_option_id), `fulfillment_option_id "${e.fulfillment_option_id}" must match an available fulfillment option`);
                M(r.fulfillment !== void 0, `totals must include a fulfillment entry when a fulfillment option is selected`, t), M(r.fulfillment === n.total, `fulfillment total (${r.fulfillment}) must equal the selected fulfillment option total (${n.total})`, t)
            }
        }
    })),
    Re, B = e((() => {
        be(), xe(), Le(), S(), Re = async ({
            chatSDK: e,
            clientThreadId: t,
            resolvedWidget: n,
            checkoutSession: r
        }) => {
            let i = ye(r);
            return z(i, !1), Se(m(t)).openCheckout(e, n, i)
        }
    }));

function V(e) {
    return e.distributionChannel === _.OPENAI && e.connectorId || null
}

function H({
    connectorId: e,
    view: t
}) {
    return `${e}:${t}`
}

function ze(e, t) {
    let n = V(e),
        r = t?.view ?? e.metadata.view_params?.view;
    return n && r ? {
        connectorId: n,
        view: r
    } : null
}

function U(e, t) {
    W.set(H(e), t)
}

function Be(e, t) {
    let n = ze(e, t);
    if (!n) return null;
    let r = W.get(H(n));
    return r && (r.isEnabled?.() ?? !0) ? r : null
}
var W, G = e((() => {
    h(), W = new Map
}));

function Ve() {
    for (let [e, t] of Object.entries(q)) U({
        connectorId: A,
        view: e
    }, t)
}
var K, He, q, Ue = e((() => {
    G(), se(), we(), b(), E(), K = u(() => Ce(T(() => import(`./622fb003-g57ppyr4xbbs5wnf.js`).then(e => e.FinanceAccountLinkingValdiRenderer), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29])))), He = u(() => Ce(T(() => import(`./d62a8c8e-k977yus8seeyg71y.js`).then(e => e.FinanceCreditAccountDetailValdiRenderer), __vite__mapDeps([30, 1, 2, 3, 4, 14, 15, 16, 17, 31, 32, 33, 5, 6, 7, 8, 9, 13, 20, 21, 22, 23, 25, 26, 28, 34])))), q = {
        accountLinking: {
            component: K,
            supportsExternalPresentation: !0
        },
        creditAccountDetail: {
            component: He
        }
    }
}));

function We() {
    Ve()
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
    Ye = D(), _e(), pe(), d(), B(), Ge(), G(), Te(), Ee(), ge(), O(), me(), qe(), n(), p(), a(), k(), c(), y(), l(), re(), v(), r(), x(), j(), Xe = t(w()), X = oe(), We(), Ze = e => e?.order != null, Z = e => {
        "use forget";
        let t = (0, Ye.c)(4),
            {
                className: n
            } = e,
            r;
        t[0] === n ? r = t[1] : (r = i(`loading-results-shimmer`, n), t[0] = n, t[1] = r);
        let a;
        return t[2] === r ? a = t[3] : (a = (0, X.jsx)(`div`, {
            className: r,
            "data-testid": `ecosystem-focused-object-loading-block`
        }), t[2] = r, t[3] = a), a
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
                widgetRef: a,
                conversation: c,
                chatSDK: l,
                clientThreadId: u,
                resolvedWidget: d,
                onReady: p,
                onClose: m,
                onRefreshOrigin: h,
                onCanGoBack: _,
                onCanGoForward: v,
                onCheckoutComplete: re,
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
                features: pe,
                subdomain: me,
                csp: k,
                locale: ge,
                params: A,
                displayMode: j,
                forceFullHeight: _e,
                forceFullWidth: ye,
                forceIntrinsicHeight: be,
                isToolInputAuthorized: xe
            } = e,
            Se = n === void 0 ? null : n,
            Ce = _e !== void 0 && _e,
            we = ye !== void 0 && ye,
            Te = be !== void 0 && be,
            Ee;
        t[0] === c ? Ee = t[1] : (Ee = he(c), t[0] = c, t[1] = Ee);
        let M = Ee,
            [ke, Ae] = (0, Xe.useState)(Se),
            [je, Me] = (0, Xe.useState)(!1),
            N = ee(a, (0, Xe.useRef)(null)),
            P = ne(),
            F = ae(),
            {
                targetedContent: Ne,
                setTargetedContent: I
            } = de(),
            L;
        t[2] !== l || t[3] !== M ? (L = () => M.getWidgetStateAndProps$(l), t[2] = l, t[3] = M, t[4] = L) : L = t[4];
        let {
            toolInput: Pe,
            toolOutput: R,
            widgetState: Fe,
            toolResponseMetadata: Ie
        } = te(L), z;
        t[5] !== l || t[6] !== xe || t[7] !== Pe || t[8] !== R ? (z = ce(l, Pe, R, xe), t[5] = l, t[6] = xe, t[7] = Pe, t[8] = R, t[9] = z) : z = t[9];
        let Le = z,
            B;
        t[10] === u ? B = t[11] : (B = s(u), t[10] = u, t[11] = B);
        let V = B,
            H = Qe(A) ? A : null,
            ze;
        t[12] !== l || t[13] !== H ? (ze = Be(l, H), t[12] = l, t[13] = H, t[14] = ze) : ze = t[14];
        let U = ze,
            W = H?.loadingState === `detail`,
            G = H?.enableTargetedReply === !0,
            Ve;
        t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (Ve = () => {
            Me(!1)
        }, t[15] = Ve) : Ve = t[15];
        let K;
        t[16] === w ? K = t[17] : (K = [w], t[16] = w, t[17] = K), (0, Xe.useEffect)(Ve, K);
        let He;
        t[18] !== c.id || t[19] !== S || t[20] !== I ? (He = e => {
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
                    promptMessage: le({}, e.promptMessage, {
                        metadata: {
                            targeted_reply: r,
                            targeted_reply_label: r
                        }
                    }),
                    appendMessages: [...e.appendMessages ?? [], o(r)]
                })
            };
            I({
                ...i,
                conversationId: c.id
            })
        }, t[18] = c.id, t[19] = S, t[20] = I, t[21] = He) : He = t[21];
        let q = C(He),
            Ue;
        t[22] !== c.id || t[23] !== x || t[24] !== I || t[25] !== Ne?.conversationId ? (Ue = e => {
            Ne?.conversationId === c.id && I(void 0), x?.(e)
        }, t[22] = c.id, t[23] = x, t[24] = I, t[25] = Ne?.conversationId, t[26] = Ue) : Ue = t[26];
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
            f(ve, {
                checkInstallationPolicy: !0,
                connectorId: r,
                redirectAfter: window.location.href,
                noRedirect: !0,
                referrer: ue.WidgetConnectSheet,
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
            Me(!0), p()
        }, t[29] = p, t[30] = qe);
        let Y = C(qe),
            Je, Z;
        if (t[31] !== Y || t[32] !== U ? (Je = () => {
                U && Y()
            }, Z = [Y, U], t[31] = Y, t[32] = U, t[33] = Je, t[34] = Z) : (Je = t[33], Z = t[34]), (0, Xe.useEffect)(Je, Z), U != null) {
            let e = U.component,
                n = Ce && `h-full`,
                r = we && `w-full`,
                a;
            t[35] !== n || t[36] !== r ? (a = i(`min-h-0 max-h-full flex-shrink overflow-y-auto`, n, r), t[35] = n, t[36] = r, t[37] = a) : a = t[37];
            let o;
            t[38] === H ? o = t[39] : (o = H ?? {}, t[38] = H, t[39] = o);
            let s;
            t[40] !== e || t[41] !== l || t[42] !== c || t[43] !== j || t[44] !== m || t[45] !== h || t[46] !== o ? (s = (0, X.jsx)(e, {
                chatSDK: l,
                conversation: c,
                displayMode: j,
                onClose: m,
                onRefreshOrigin: h,
                params: o
            }), t[40] = e, t[41] = l, t[42] = c, t[43] = j, t[44] = m, t[45] = h, t[46] = o, t[47] = s) : s = t[47];
            let u;
            return t[48] !== a || t[49] !== s ? (u = (0, X.jsx)(`div`, {
                className: a,
                children: s
            }), t[48] = a, t[49] = s, t[50] = u) : u = t[50], u
        }
        let et = W && `relative`,
            tt = !Te && `max-h-full flex-shrink overflow-y-auto`,
            nt = Ce && `h-full`,
            rt = we && `w-full`,
            Q;
        t[51] !== et || t[52] !== tt || t[53] !== nt || t[54] !== rt ? (Q = i(et, tt, nt, rt), t[51] = et, t[52] = tt, t[53] = nt, t[54] = rt, t[55] = Q) : Q = t[55];
        let it = Ce ? void 0 : Math.max(ke ?? 0, Se ?? 0),
            at;
        t[56] === it ? at = t[57] : (at = {
            height: it
        }, t[56] = it, t[57] = at);
        let ot;
        t[58] !== W || t[59] !== je ? (ot = !je && W ? (0, X.jsx)($e, {}) : null, t[58] = W, t[59] = je, t[60] = ot) : ot = t[60];
        let st = P ?? `light`,
            ct;
        t[61] === Symbol.for(`react.memo_cache_sentinel`) ? (ct = e => {
            Ae(e)
        }, t[61] = ct) : ct = t[61];
        let lt;
        if (t[62] !== T || t[63] !== l || t[64] !== u || t[65] !== k || t[66] !== oe || t[67] !== G || t[68] !== M || t[69] !== _ || t[70] !== v || t[71] !== re || t[72] !== m || t[73] !== x || t[74] !== y || t[75] !== b || t[76] !== J || t[77] !== q || t[78] !== d || t[79] !== We || t[80] !== V || t[81] !== F || t[82] !== E || t[83] !== D || t[84] !== O) {
            let e;
            t[86] === m ? e = t[87] : (e = () => m(`request_close`), t[86] = m, t[87] = e);
            let n;
            t[88] !== G || t[89] !== q ? (n = G ? {
                requestTargetedReply: q
            } : {}, t[88] = G, t[89] = q, t[90] = n) : n = t[90];
            let r;
            t[91] !== x || t[92] !== We ? (r = x ? {
                sendFollowUpMessage: We
            } : {}, t[91] = x, t[92] = We, t[93] = r) : r = t[93];
            let i;
            t[94] === m ? i = t[95] : (i = () => m(`escape_key`), t[94] = m, t[95] = i);
            let a;
            t[96] !== l || t[97] !== u || t[98] !== re || t[99] !== d ? (a = async e => {
                let t = await Re({
                    chatSDK: l,
                    clientThreadId: u,
                    checkoutSession: e,
                    resolvedWidget: d
                });
                return Ze(t) && re?.(t), t
            }, t[96] = l, t[97] = u, t[98] = re, t[99] = d, t[100] = a) : a = t[100];
            let o;
            t[101] !== _ || t[102] !== v ? (o = e => {
                let {
                    canGoBack: t,
                    canGoForward: n
                } = e;
                _(t), v?.(n)
            }, t[101] = _, t[102] = v, t[103] = o) : o = t[103];
            let s;
            t[104] === F ? s = t[105] : (s = e => Ke(F, e), t[104] = F, t[105] = s);
            let c;
            t[106] === y ? c = t[107] : (c = e => y?.(e), t[106] = y, t[107] = c);
            let f, ee;
            t[108] !== l.metadata || t[109] !== l.widgetSessionId || t[110] !== M || t[111] !== E || t[112] !== D ? (f = (e, t) => M.callTool$({
                appUri: g(D),
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
            }), ee = e => M.callMcp$(g(D), e, {
                messageId: E,
                resourceName: l.metadata.resource_name ?? null,
                connectorToolTargetMeta: l.metadata,
                widgetContext: {
                    appUri: D,
                    widgetId: E,
                    widgetSessionId: l.widgetSessionId,
                    source: `iframe`
                }
            }), t[108] = l.metadata, t[109] = l.widgetSessionId, t[110] = M, t[111] = E, t[112] = D, t[113] = f, t[114] = ee) : (f = t[113], ee = t[114]);
            let p, h, te;
            t[115] !== M || t[116] !== D ? (p = (e, t) => M.uploadFile$(g(D), e, t), h = e => M.getFileDownloadUrl$(g(D), e.fileId), te = e => M.getFileMetadata$(g(D), e.fileId), t[115] = M, t[116] = D, t[117] = p, t[118] = h, t[119] = te) : (p = t[117], h = t[118], te = t[119]);
            let ne, S;
            t[120] === J ? (ne = t[121], S = t[122]) : (ne = e => {
                let {
                    connectorId: t
                } = e;
                return J(t)
            }, S = e => J(void 0, e), t[120] = J, t[121] = ne, t[122] = S);
            let C;
            t[123] !== M || t[124] !== D ? (C = () => M.selectFiles$(g(D)), t[123] = M, t[124] = D, t[125] = C) : C = t[125];
            let ae;
            t[126] !== l.metadata || t[127] !== l.widgetSessionId || t[128] !== M || t[129] !== b || t[130] !== E || t[131] !== D ? (ae = async (e, t, n) => {
                if (b) return b(e, t, n);
                let r = {
                    appUri: D,
                    widgetId: E,
                    widgetSessionId: l.widgetSessionId,
                    source: `iframe`
                };
                if (!n?.waitForPersistence) return M.enqueueWidgetState$(e, t, {
                    hydratedRevision: l.metadata.widget_state_revision ?? 0,
                    widgetContext: r
                }), {
                    ok: !0
                };
                try {
                    return await M.enqueueWidgetState$(e, t, {
                        hydratedRevision: l.metadata.widget_state_revision ?? 0,
                        waitForPersistence: !0,
                        widgetContext: r
                    }), {
                        ok: !0
                    }
                } catch (e) {
                    return fe(e)
                }
            }, t[126] = l.metadata, t[127] = l.widgetSessionId, t[128] = M, t[129] = b, t[130] = E, t[131] = D, t[132] = ae) : ae = t[132], lt = {
                notifyIntrinsicHeight: ct,
                openExternal(e) {
                    let {
                        href: t,
                        redirectUrl: n,
                        openMode: r
                    } = e, i = n === !1 ? null : V ? new URL(ie(V), window.location.origin).toString() : new URL(window.location.href).toString();
                    De({
                        attributionId: T,
                        conversationId: V,
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
                callTool: f,
                callMcp: ee,
                uploadFile: p,
                getFileDownloadUrl: h,
                getFileMetadata: te,
                requestLinkToConnector: ne,
                requestConnectSheet: S,
                selectFiles: C,
                updateWidgetState: ae
            }, t[62] = T, t[63] = l, t[64] = u, t[65] = k, t[66] = oe, t[67] = G, t[68] = M, t[69] = _, t[70] = v, t[71] = re, t[72] = m, t[73] = x, t[74] = y, t[75] = b, t[76] = J, t[77] = q, t[78] = d, t[79] = We, t[80] = V, t[81] = F, t[82] = E, t[83] = D, t[84] = O, t[85] = lt
        } else lt = t[85];
        let $;
        t[133] !== Le || t[134] !== T || t[135] !== l.distributionChannel || t[136] !== l.metadata || t[137] !== l.oaiSubjectId || t[138] !== l.widgetSessionId || t[139] !== k || t[140] !== j || t[141] !== pe || t[142] !== N || t[143] !== Y || t[144] !== w || t[145] !== ge || t[146] !== A || t[147] !== d.name || t[148] !== d.permissions || t[149] !== d.toolInfo || t[150] !== r || t[151] !== V || t[152] !== me || t[153] !== se || t[154] !== st || t[155] !== lt || t[156] !== R || t[157] !== Ie || t[158] !== E || t[159] !== D || t[160] !== Fe || t[161] !== O ? ($ = (0, X.jsx)(Oe, {
            host: `chatgpt`,
            html: w,
            ref: N,
            theme: st,
            attributionId: T,
            appDisplayName: d.name,
            measureWidth: !1,
            onReady: Y,
            conversationId: V,
            widgetId: E,
            widgetSessionId: l.widgetSessionId,
            widgetParent: D,
            connectorToolTargetMeta: l.metadata,
            widgetDistributionChannel: l.distributionChannel,
            suggestionMessageId: se,
            widgetType: O,
            subdomain: me,
            widgetState: Fe,
            toolInput: Le,
            toolOutput: R,
            toolResponseMetadata: Ie,
            toolInfo: d.toolInfo,
            subjectId: l.oaiSubjectId,
            features: pe,
            permissions: d.permissions,
            viewParams: A,
            safeArea: r,
            displayMode: j,
            api: lt,
            csp: k,
            locale: ge
        }), t[133] = Le, t[134] = T, t[135] = l.distributionChannel, t[136] = l.metadata, t[137] = l.oaiSubjectId, t[138] = l.widgetSessionId, t[139] = k, t[140] = j, t[141] = pe, t[142] = N, t[143] = Y, t[144] = w, t[145] = ge, t[146] = A, t[147] = d.name, t[148] = d.permissions, t[149] = d.toolInfo, t[150] = r, t[151] = V, t[152] = me, t[153] = se, t[154] = st, t[155] = lt, t[156] = R, t[157] = Ie, t[158] = E, t[159] = D, t[160] = Fe, t[161] = O, t[162] = $) : $ = t[162];
        let ut;
        return t[163] !== Q || t[164] !== at || t[165] !== ot || t[166] !== $ ? (ut = (0, X.jsxs)(`div`, {
            className: Q,
            style: at,
            children: [ot, $]
        }), t[163] = Q, t[164] = at, t[165] = ot, t[166] = $, t[167] = ut) : ut = t[167], ut
    }
}));
export {
    Be as a, B as c, Ke as i, tt as n, G as o, qe as r, Re as s, et as t
};
//# sourceMappingURL=f7e0bf69-kg4gumu5ukmjdoq0.js.map