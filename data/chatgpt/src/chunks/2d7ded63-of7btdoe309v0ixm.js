import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    BU as r,
    Bst as i,
    Cw as a,
    Dw as o,
    Ew as s,
    Gnt as c,
    Iat as l,
    JT as u,
    P5 as d,
    Rst as f,
    S5 as p,
    Tw as m,
    X5 as h,
    Y5 as g,
    YT as _,
    Znt as v,
    dit as y,
    fit as b,
    g8 as x,
    nct as S,
    wat as C,
    zU as w,
    zst as T
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as E,
    Nn as D,
    Rn as O,
    Vn as k,
    wn as A,
    zn as ee
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    F8 as j,
    FHn as M,
    H8 as N,
    I8 as P,
    IHn as te,
    L8 as F,
    LHn as ne,
    Mlt as re,
    N8 as I,
    P8 as L,
    Plt as ie,
    QFn as R,
    R8 as ae,
    V8 as z,
    da as oe,
    fa as B,
    ia as se,
    j8 as ce,
    qFn as le,
    ra as ue
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    Ax as de,
    ap as fe,
    bv as pe,
    kx as V,
    mg as H,
    op as me,
    pg as he,
    xv as ge
} from "./30901919-e8h11sw136qen6v0.js";
import {
    Bd as _e,
    Hd as ve
} from "./8b34dbc2-dtawqv9t1aqckqj4.js";
import {
    n as ye,
    t as be
} from "./02cd0121-m6hf77idjsoy90rx.js";
import {
    n as xe,
    t as Se
} from "./bd0b8304-dxqbbo24bfei2vm7.js";
import {
    n as Ce,
    t as we
} from "./fb0f45f8-dik0gidnni86862l.js";
import {
    i as U,
    n as Te
} from "./74d67c64-i5tq8yhikirk39fi.js";
import {
    n as Ee,
    t as De
} from "./ff9bbca7-irahfuvz5j33mnrj.js";
import {
    n as Oe,
    t as ke
} from "./e145c156-hf3vwomg8pjld32w.js";
import {
    n as Ae,
    t as je
} from "./ea63db5c-ohapcltuhj7uilc3.js";
import {
    C as W,
    S as Me,
    b as G,
    c as Ne,
    g as Pe,
    o as Fe,
    s as Ie,
    w as Le,
    x as Re,
    y as ze
} from "./2b67bcd8-n5jrkj6wxl5myjnc.js";
import {
    n as Be,
    t as Ve
} from "./ecdd5ba5-nj5cizziuoc6owtf.js";
import {
    a as He,
    o as Ue
} from "./1362c49f-kxqbfemprag3pmdn.js";
import {
    n as We,
    r as K
} from "./da07a0d0-l3v5vywyu9ayfo1u.js";

function Ge(e) {
    "use forget";
    let t = (0, qe.c)(30),
        {
            product_id: n,
            product_title: r,
            product_url: a,
            offer_urls: o,
            onClose: s,
            onBack: c,
            resetKey: l
        } = e,
        d = ee(),
        p = b(),
        {
            data: m
        } = ae(f.CommerceProduct),
        h;
    t[0] === o ? h = t[1] : (h = o && o.length > 0 ? {
        offer_urls: JSON.stringify(o)
    } : {}, t[0] = o, t[1] = h);
    let g;
    t[2] !== r || t[3] !== a || t[4] !== h ? (g = {
        [T.EntityName]: r,
        [T.EntityUrl]: a,
        ...h
    }, t[2] = r, t[3] = a, t[4] = h, t[5] = g) : g = t[5];
    let _ = F(d, n, f.CommerceProduct, i.Commerce, g),
        v = `Report ${r.length<=30?r:r.substring(0,27)+`...`}`,
        y;
    t[6] === c ? y = t[7] : (y = c ? (0, J.jsx)(u, {
        color: `secondary`,
        onClick: c,
        children: (0, J.jsx)(D, {
            id: `Vuk38f`,
            defaultMessage: `Back`
        })
    }) : void 0, t[6] = c, t[7] = y);
    let x = y,
        S;
    t[8] === m?.reasons ? S = t[9] : (S = m?.reasons ?? [], t[8] = m?.reasons, t[9] = S);
    let C = m?.header,
        w;
    t[10] !== x || t[11] !== s || t[12] !== l || t[13] !== _ || t[14] !== S || t[15] !== C || t[16] !== v ? (w = {
        reasons: S,
        submitReport: _,
        title: v,
        onClose: s,
        header: C,
        footerSecondaryButton: x,
        resetKey: l
    }, t[10] = x, t[11] = s, t[12] = l, t[13] = _, t[14] = S, t[15] = C, t[16] = v, t[17] = w) : w = t[17];
    let E = j(w);
    if (p && m != null) return E;
    if (p) {
        let e = m?.header,
            n;
        t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, J.jsx)(D, {
            id: `IC6uIZ`,
            defaultMessage: `Loading report options...`
        }), t[18] = n) : n = t[18];
        let r;
        t[19] === e ? r = t[20] : (r = (0, J.jsx)(ce, {
            header: e,
            subHeader: n
        }), t[19] = e, t[20] = r);
        let i;
        return t[21] !== x || t[22] !== r || t[23] !== v ? (i = {
            body: r,
            primaryButton: void 0,
            secondaryButton: x,
            testId: `modal-report-reason-selection`,
            title: v
        }, t[21] = x, t[22] = r, t[23] = v, t[24] = i) : i = t[24], i
    }
    let O;
    t[25] === Symbol.for(`react.memo_cache_sentinel`) ? (O = (0, J.jsx)(`div`, {
        className: `text-sm`,
        children: (0, J.jsx)(`div`, {
            className: `mb-2`,
            children: (0, J.jsx)(D, {
                id: `report.externalReportFormInstruction`,
                defaultMessage: `Please use this form to report the issue.`
            })
        })
    }), t[25] = O) : O = t[25];
    let k;
    t[26] === Symbol.for(`react.memo_cache_sentinel`) ? (k = (0, J.jsx)(u, {
        color: `primary`,
        onClick: q,
        children: (0, J.jsx)(D, {
            id: `report.goToForm`,
            defaultMessage: `Go to Form`
        })
    }), t[26] = k) : k = t[26];
    let A;
    return t[27] !== x || t[28] !== v ? (A = {
        body: O,
        primaryButton: k,
        secondaryButton: x,
        testId: `modal-report-reason-selection`,
        title: v
    }, t[27] = x, t[28] = v, t[29] = A) : A = t[29], A
}

function q() {
    window.open(`https://openai.com/form/report-content`, `_blank`)
}

function Ke(e) {
    "use forget";
    let t = (0, qe.c)(7),
        n = Ge(e),
        r;
    return t[0] !== n.body || t[1] !== n.primaryButton || t[2] !== n.secondaryButton || t[3] !== n.testId || t[4] !== n.title || t[5] !== e.onClose ? (r = (0, J.jsx)(a, {
        testId: n.testId,
        title: n.title,
        onClose: e.onClose,
        isOpen: !0,
        showCloseButton: !0,
        type: `success`,
        secondaryButton: n.secondaryButton,
        primaryButton: n.primaryButton,
        children: n.body
    }), t[0] = n.body, t[1] = n.primaryButton, t[2] = n.secondaryButton, t[3] = n.testId, t[4] = n.title, t[5] = e.onClose, t[6] = r) : r = t[6], r
}
var qe, J, Je = e((() => {
    qe = A(), S(), _(), m(), L(), y(), P(), O(), J = E()
}));

function Ye(e, t) {
    let n = e.formatMessage(t.label);
    return {
        id: t.id,
        cta: n,
        details_placeholder: t.subcategories == null ? e.formatMessage(Qe) : null,
        sub_reasons: t.subcategories?.map(t => Ye(e, t))
    }
}

function Xe(e) {
    return Ze.map(t => Ye(e, t))
}
var Ze, Qe, $e = e((() => {
    Ze = [{
        id: `scam_or_fraud`,
        label: {
            id: `report.seller.category.scamOrFraud`,
            defaultMessage: `Scam, fraud, or suspicious activity`,
            description: `Top-level seller report category for scam or fraud concerns`
        },
        subcategories: [{
            id: `unauthorized_charges`,
            label: {
                id: `report.seller.subcategory.unauthorizedCharges`,
                defaultMessage: `Unauthorized charges`,
                description: `Seller report subcategory for unauthorized charges`
            }
        }, {
            id: `pay_outside_platform`,
            label: {
                id: `report.seller.subcategory.payOutsidePlatform`,
                defaultMessage: `Asked to pay outside the platform`,
                description: `Seller report subcategory for being asked to pay outside the platform`
            }
        }, {
            id: `pretending_brand_or_seller`,
            label: {
                id: `report.seller.subcategory.pretendingBrandOrSeller`,
                defaultMessage: `Pretending to be a real brand or seller`,
                description: `Seller report subcategory for impersonating a real brand or seller`
            }
        }, {
            id: `suspicious_pricing_or_branding`,
            label: {
                id: `report.seller.subcategory.suspiciousPricingOrBranding`,
                defaultMessage: `Suspicious pricing or branding`,
                description: `Seller report subcategory for suspicious pricing or branding`
            }
        }, {
            id: `scam_other`,
            label: {
                id: `report.seller.subcategory.scamOther`,
                defaultMessage: `Something else`,
                description: `Catch-all seller report subcategory for other scam or fraud concerns`
            }
        }]
    }, {
        id: `order_or_service_problem`,
        label: {
            id: `report.seller.category.orderOrServiceProblem`,
            defaultMessage: `Problem with an order or service`,
            description: `Top-level seller report category for order or service problems`
        },
        subcategories: [{
            id: `item_not_received`,
            label: {
                id: `report.seller.subcategory.itemNotReceived`,
                defaultMessage: `Item never received or very delayed`,
                description: `Seller report subcategory for an item never received or very delayed`
            }
        }, {
            id: `wrong_item_received`,
            label: {
                id: `report.seller.subcategory.wrongItemReceived`,
                defaultMessage: `Wrong item received`,
                description: `Seller report subcategory for receiving the wrong item`
            }
        }, {
            id: `refund_delayed`,
            label: {
                id: `report.seller.subcategory.refundDelayed`,
                defaultMessage: `Refund delayed or no refund`,
                description: `Seller report subcategory for delayed or missing refunds`
            }
        }, {
            id: `poor_customer_support`,
            label: {
                id: `report.seller.subcategory.poorCustomerSupport`,
                defaultMessage: `Poor customer support`,
                description: `Seller report subcategory for poor customer support`
            }
        }, {
            id: `order_other`,
            label: {
                id: `report.seller.subcategory.orderOther`,
                defaultMessage: `Something else`,
                description: `Catch-all seller report subcategory for other order or service problems`
            }
        }]
    }, {
        id: `illegal_or_unsafe_products`,
        label: {
            id: `report.seller.category.illegalOrUnsafeProducts`,
            defaultMessage: `Seller is offering illegal or unsafe products`,
            description: `Top-level seller report category for illegal or unsafe product concerns`
        },
        subcategories: [{
            id: `prohibited_or_illegal_products`,
            label: {
                id: `report.seller.subcategory.prohibitedOrIllegalProducts`,
                defaultMessage: `Selling prohibited or illegal products`,
                description: `Seller report subcategory for selling prohibited or illegal products`
            }
        }, {
            id: `counterfeit_products`,
            label: {
                id: `report.seller.subcategory.counterfeitProducts`,
                defaultMessage: `Selling counterfeit products`,
                description: `Seller report subcategory for selling counterfeit products`
            }
        }, {
            id: `product_caused_harm`,
            label: {
                id: `report.seller.subcategory.productCausedHarm`,
                defaultMessage: `Product caused physical harm`,
                description: `Seller report subcategory for products that caused physical harm`
            }
        }, {
            id: `missing_safety_warnings`,
            label: {
                id: `report.seller.subcategory.missingSafetyWarnings`,
                defaultMessage: `Missing required safety warnings or disclosures`,
                description: `Seller report subcategory for missing safety warnings or disclosures`
            }
        }, {
            id: `unsafe_other`,
            label: {
                id: `report.seller.subcategory.unsafeOther`,
                defaultMessage: `Something else`,
                description: `Catch-all seller report subcategory for other illegal or unsafe product concerns`
            }
        }]
    }, {
        id: `seller_other`,
        label: {
            id: `report.seller.category.other`,
            defaultMessage: `Something else`,
            description: `Top-level catch-all seller report category for other concerns`
        }
    }], Qe = {
        id: `report.seller.detailsPlaceholder`,
        defaultMessage: `Please provide more details`,
        description: `Placeholder text for seller report additional details`
    }
}));

function et(e, t) {
    let n = {
        ...t ?? {}
    };
    return e[0] && (n[at] = e[0].id, n[ot] = e[0].cta), e[1] && (n[st] = e[1].id, n[ct] = e[1].cta), n
}

function tt(e) {
    "use forget";
    let t = (0, it.c)(25),
        {
            sellerName: n,
            sellerUrl: r,
            sellerShopId: a,
            onClose: o,
            onBack: s,
            resetKey: c
        } = e,
        l = ee(),
        d = b(),
        p;
    t[0] === l ? p = t[1] : (p = Xe(l), t[0] = l, t[1] = p);
    let m = p,
        h;
    t[2] === a ? h = t[3] : (h = a ? {
        shop_id: a
    } : {}, t[2] = a, t[3] = h);
    let g;
    t[4] !== n || t[5] !== r || t[6] !== h ? (g = {
        [T.EntityName]: n,
        [T.EntityUrl]: r,
        ...h
    }, t[4] = n, t[5] = r, t[6] = h, t[7] = g) : g = t[7];
    let _ = F(l, r, f.CommerceSeller, i.Commerce, g),
        v = `Report ${n.length<=30?n:n.substring(0,27)+`...`}`,
        y;
    t[8] === s ? y = t[9] : (y = s ? (0, Y.jsx)(u, {
        color: `secondary`,
        onClick: s,
        children: (0, Y.jsx)(D, {
            id: `NXm4qA`,
            defaultMessage: `Back`
        })
    }) : void 0, t[8] = s, t[9] = y);
    let x = y,
        S;
    t[10] === l ? S = t[11] : (S = l.formatMessage({
        id: `report.seller.header`,
        defaultMessage: `Please tell us why you are reporting`
    }), t[10] = l, t[11] = S);
    let C;
    t[12] !== x || t[13] !== o || t[14] !== c || t[15] !== m || t[16] !== _ || t[17] !== S || t[18] !== v ? (C = {
        reasons: m,
        submitReport: _,
        title: v,
        onClose: o,
        header: S,
        footerSecondaryButton: x,
        resetKey: c,
        buildSubmitPayload: rt
    }, t[12] = x, t[13] = o, t[14] = c, t[15] = m, t[16] = _, t[17] = S, t[18] = v, t[19] = C) : C = t[19];
    let w = j(C);
    if (d) return w;
    let E;
    t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (E = (0, Y.jsx)(`div`, {
        className: `text-sm`,
        children: (0, Y.jsx)(`div`, {
            className: `mb-2`,
            children: (0, Y.jsx)(D, {
                id: `report.externalReportFormInstruction`,
                defaultMessage: `Please use this form to report the issue.`
            })
        })
    }), t[20] = E) : E = t[20];
    let O;
    t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (O = (0, Y.jsx)(u, {
        color: `primary`,
        onClick: nt,
        children: (0, Y.jsx)(D, {
            id: `report.goToForm`,
            defaultMessage: `Go to Form`
        })
    }), t[21] = O) : O = t[21];
    let k;
    return t[22] !== x || t[23] !== v ? (k = {
        body: E,
        primaryButton: O,
        secondaryButton: x,
        testId: `modal-report-seller-details`,
        title: v
    }, t[22] = x, t[23] = v, t[24] = k) : k = t[24], k
}

function nt() {
    window.open(`https://openai.com/form/report-content`, `_blank`)
}

function rt(e) {
    let {
        selectedReasonPath: t,
        details: n,
        additionalFieldsValues: r
    } = e;
    return {
        reason: {
            id: `other`,
            ...n.trim() ? {
                details: n.trim()
            } : {}
        },
        additional_fields_values: et(t, r)
    }
}
var it, Y, at, ot, st, ct, lt = e((() => {
    it = A(), S(), _(), m(), L(), y(), P(), O(), $e(), Y = E(), at = `seller_report_reason_category_id`, ot = `seller_report_reason_category_label`, st = `seller_report_reason_subcategory_id`, ct = `seller_report_reason_subcategory_label`
}));

function ut(e) {
    if (!e || e.length === 0) return [];
    let t = new Map;
    for (let n of e) {
        let e = re(n),
            r = n.url.trim();
        if (!e || !r) continue;
        let i = n.shop_id?.trim() || void 0,
            a = dt(e, r, i);
        t.has(a) || t.set(a, {
            selectionKey: a,
            name: e,
            url: r,
            shopId: i
        })
    }
    return Array.from(t.values())
}

function dt(e, t, n) {
    let r = e.trim().toLowerCase(),
        i = t.trim();
    if (!i) return `raw:${r}`;
    try {
        let e;
        try {
            e = new URL(i)
        } catch {
            if (i.startsWith(`//`)) return `raw:${i}:${r}`;
            e = new URL(`https://${i}`)
        }
        let t = e.host.toLowerCase();
        return t ? n ? `${t}:${n}:${r}` : `${t}:${r}` : `raw:${i}:${r}`
    } catch {
        return `raw:${i}:${r}`
    }
}

function ft({
    hasSellers: e,
    onAdvance: t,
    selectedIssue: n,
    setSelectedIssue: r
}) {
    return {
        body: (0, X.jsxs)(X.Fragment, {
            children: [(0, X.jsxs)(z.Root, {
                value: n,
                onValueChange: r,
                className: `flex flex-col gap-3`,
                children: [(0, X.jsx)(z.Item, {
                    value: `product`,
                    label: (0, X.jsx)(D, {
                        id: `Z7zGTf`,
                        defaultMessage: `Issue with product`
                    }),
                    children: (0, X.jsx)(z.Indicator, {})
                }), (0, X.jsx)(z.Item, {
                    value: `seller`,
                    disabled: !e,
                    label: (0, X.jsx)(`span`, {
                        className: g(!e && `text-token-text-tertiary`),
                        children: (0, X.jsx)(D, {
                            id: `LLBNns`,
                            defaultMessage: `Issue with seller`
                        })
                    }),
                    children: (0, X.jsx)(z.Indicator, {})
                })]
            }), !e && (0, X.jsx)(`div`, {
                className: `mt-3`,
                children: (0, X.jsx)(I, {
                    children: (0, X.jsx)(D, {
                        id: `soN94U`,
                        defaultMessage: `No sellers are available to report for this product.`
                    })
                })
            })]
        }),
        primaryButton: (0, X.jsx)(u, {
            color: `primary`,
            onClick: t,
            disabled: !n || n === `seller` && !e,
            children: (0, X.jsx)(D, {
                id: `EjtKTu`,
                defaultMessage: `Next`
            })
        }),
        secondaryButton: void 0,
        testId: `modal-product-report-issue-selection`,
        title: (0, X.jsx)(D, {
            id: `gevqrQ`,
            defaultMessage: `Report`
        })
    }
}

function pt({
    onAdvance: e,
    onBack: t,
    selectedSeller: n,
    selectedSellerId: r,
    sellers: i,
    setSelectedSellerId: a
}) {
    return {
        body: (0, X.jsxs)(X.Fragment, {
            children: [(0, X.jsx)(ce, {
                header: (0, X.jsx)(D, {
                    id: `uo+gFL`,
                    defaultMessage: `Select a seller`
                })
            }), (0, X.jsx)(z.Root, {
                value: r,
                onValueChange: e => a(e),
                className: `flex flex-col gap-3`,
                children: i.map(e => (0, X.jsx)(z.Item, {
                    value: e.selectionKey,
                    label: e.name,
                    children: (0, X.jsx)(z.Indicator, {})
                }, e.selectionKey))
            })]
        }),
        primaryButton: (0, X.jsx)(u, {
            color: `primary`,
            onClick: e,
            disabled: !n,
            children: (0, X.jsx)(D, {
                id: `6CCWxi`,
                defaultMessage: `Next`
            })
        }),
        secondaryButton: (0, X.jsx)(u, {
            color: `secondary`,
            onClick: t,
            children: (0, X.jsx)(D, {
                id: `Vuk38f`,
                defaultMessage: `Back`
            })
        }),
        testId: `modal-product-report-seller-selection`,
        title: (0, X.jsx)(D, {
            id: `HLCyXd`,
            defaultMessage: `Report`
        })
    }
}

function mt(e) {
    "use forget";
    let t = (0, _t.c)(25),
        {
            productId: n,
            productTitle: r,
            productUrl: i,
            offerUrls: o,
            offers: s,
            onClose: c
        } = e,
        [l, u] = (0, vt.useState)(`issue_selection`),
        [d, f] = (0, vt.useState)(),
        [p, m] = (0, vt.useState)(),
        [h, g] = (0, vt.useState)(0),
        [_, v] = (0, vt.useState)(0),
        y;
    t[0] === s ? y = t[1] : (y = ut(s), t[0] = s, t[1] = y);
    let b = y,
        x = b.length > 0,
        S = b.find(e => e.selectionKey === p) ?? null,
        C;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (C = () => u(`issue_selection`), t[2] = C) : C = t[2];
    let w;
    t[3] !== o || t[4] !== c || t[5] !== h || t[6] !== n || t[7] !== r || t[8] !== i ? (w = {
        product_id: n,
        product_title: r,
        product_url: i,
        offer_urls: o,
        onClose: c,
        onBack: C,
        resetKey: h
    }, t[3] = o, t[4] = c, t[5] = h, t[6] = n, t[7] = r, t[8] = i, t[9] = w) : w = t[9];
    let T = Ge(w),
        E;
    t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (E = () => u(`seller_selection`), t[10] = E) : E = t[10];
    let D = tt({
            sellerName: S?.name ?? ``,
            sellerUrl: S?.url ?? ``,
            sellerShopId: S?.shopId,
            onClose: c,
            onBack: E,
            resetKey: _
        }),
        O;
    bb0: switch (l) {
        case `product_report`:
            O = T;
            break bb0;
        case `seller_selection`: {
            let e;
            t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (e = () => u(`issue_selection`), t[11] = e) : e = t[11], O = pt({
                onAdvance: () => {
                    S && (v(gt), u(`seller_report`))
                },
                onBack: e,
                selectedSeller: S,
                selectedSellerId: p,
                sellers: b,
                setSelectedSellerId: m
            });
            break bb0
        }
        case `seller_report`:
            O = D;
            break bb0;
        case `issue_selection`:
        default: {
            let e;
            t[12] === d ? e = t[13] : (e = () => {
                if (d === `product`) {
                    g(ht), u(`product_report`);
                    return
                }
                d === `seller` && u(`seller_selection`)
            }, t[12] = d, t[13] = e);
            let n;
            t[14] !== x || t[15] !== d || t[16] !== e ? (n = ft({
                hasSellers: x,
                onAdvance: e,
                selectedIssue: d,
                setSelectedIssue: f
            }), t[14] = x, t[15] = d, t[16] = e, t[17] = n) : n = t[17], O = n
        }
    }
    let k;
    return t[18] !== O.body || t[19] !== O.primaryButton || t[20] !== O.secondaryButton || t[21] !== O.testId || t[22] !== O.title || t[23] !== c ? (k = (0, X.jsx)(a, {
        testId: O.testId,
        title: O.title,
        onClose: c,
        isOpen: !0,
        showCloseButton: !0,
        type: `success`,
        secondaryButton: O.secondaryButton,
        primaryButton: O.primaryButton,
        children: O.body
    }), t[18] = O.body, t[19] = O.primaryButton, t[20] = O.secondaryButton, t[21] = O.testId, t[22] = O.title, t[23] = c, t[24] = k) : k = t[24], k
}

function ht(e) {
    return e + 1
}

function gt(e) {
    return e + 1
}
var _t, vt, X, yt = e((() => {
    _t = A(), _(), m(), L(), N(), h(), vt = n(k()), O(), ie(), Je(), lt(), X = E()
}));

function bt(e) {
    "use forget";
    let t = (0, xt.c)(39),
        {
            product_id: n,
            product_title: r,
            product_url: i,
            clientThreadId: a,
            messageId: o,
            contentReferenceStartIndex: s,
            offer_urls: c,
            offers: l,
            className: u,
            enableReporting: d,
            enableSellerReporting: f,
            libraryOrigin: p
        } = e,
        m = ee(),
        [h, _] = (0, St.useState)(!1),
        [v, y] = (0, St.useState)(!1),
        [b, x] = (0, St.useState)(!1),
        S;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (S = e => {
        _(e)
    }, t[0] = S) : S = t[0];
    let C;
    t[1] === u ? C = t[2] : (C = g(`keyboard-focused:focus-ring hover:bg-token-bg-tertiary pointer-events-auto flex h-9 w-9 items-center justify-center rounded-lg transition-colors`, u), t[1] = u, t[2] = C);
    let w;
    t[3] === m ? w = t[4] : (w = m.formatMessage({
        id: `G4IkJB`,
        defaultMessage: `Open product options`
    }), t[3] = m, t[4] = w);
    let T;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (T = (0, Z.jsx)(V, {
        className: `icon`
    }), t[5] = T) : T = t[5];
    let E;
    t[6] !== C || t[7] !== w ? (E = (0, Z.jsx)(`button`, {
        type: `button`,
        className: C,
        "aria-label": w,
        "data-testid": `product-options-button`,
        children: T
    }), t[6] = C, t[7] = w, t[8] = E) : E = t[8];
    let O;
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (O = (0, Z.jsx)(te.Item, {
        icon: H,
        onClick: () => {
            y(!0)
        },
        children: (0, Z.jsx)(D, {
            id: `chatgpt.shopping.feedback.product_detail.menu_item.label`,
            defaultMessage: `Give feedback`
        })
    }), t[9] = O) : O = t[9];
    let k;
    t[10] === p ? k = t[11] : (k = p != null && (0, Z.jsx)(be, {
        conversationId: p.conversationId,
        messageId: p.messageId
    }), t[10] = p, t[11] = k);
    let A;
    t[12] === d ? A = t[13] : (A = d && (0, Z.jsx)(te.Item, {
        icon: pe,
        onClick: () => {
            x(!0)
        },
        children: (0, Z.jsx)(D, {
            id: `thread.reportProduct`,
            defaultMessage: `Report`
        })
    }), t[12] = d, t[13] = A);
    let j;
    t[14] !== h || t[15] !== E || t[16] !== k || t[17] !== A ? (j = (0, Z.jsxs)(M, {
        open: h,
        onOpenChange: S,
        side: `bottom`,
        contentAlign: `start`,
        triggerButton: E,
        size: `auto`,
        children: [O, k, A]
    }), t[14] = h, t[15] = E, t[16] = k, t[17] = A, t[18] = j) : j = t[18];
    let N;
    t[19] !== a || t[20] !== s || t[21] !== v || t[22] !== o || t[23] !== n || t[24] !== r || t[25] !== i ? (N = v && (0, Z.jsx)(We, {
        clientThreadId: a,
        messageId: o,
        contentReferenceStartIndex: s,
        productId: n,
        productTitle: r,
        productUrl: i,
        onClose: () => y(!1)
    }), t[19] = a, t[20] = s, t[21] = v, t[22] = o, t[23] = n, t[24] = r, t[25] = i, t[26] = N) : N = t[26];
    let P;
    t[27] !== f || t[28] !== b || t[29] !== c || t[30] !== l || t[31] !== n || t[32] !== r || t[33] !== i ? (P = b && (f ? (0, Z.jsx)(mt, {
        productId: n,
        productTitle: r,
        productUrl: i,
        offerUrls: c,
        offers: l,
        onClose: () => x(!1)
    }) : (0, Z.jsx)(Ke, {
        product_id: n,
        product_title: r,
        product_url: i,
        offer_urls: c,
        onClose: () => x(!1)
    })), t[27] = f, t[28] = b, t[29] = c, t[30] = l, t[31] = n, t[32] = r, t[33] = i, t[34] = P) : P = t[34];
    let F;
    return t[35] !== N || t[36] !== P || t[37] !== j ? (F = (0, Z.jsxs)(Z.Fragment, {
        children: [j, N, P]
    }), t[35] = N, t[36] = P, t[37] = j, t[38] = F) : F = t[38], F
}
var xt, St, Z, Ct = e((() => {
        xt = A(), ne(), de(), ge(), he(), ye(), K(), h(), St = n(k()), O(), yt(), Je(), Z = E()
    })),
    wt = t({
        ChatScreenAgentProductFlyout: () => Et,
        ChatScreenProductFlyout: () => Tt,
        ProductFlyout: () => Ot
    });

function Tt(e) {
    "use forget";
    let t = (0, jt.c)(12),
        {
            conversation: n,
            sidebar: r,
            initialVisibleOfferCount: i,
            type: a
        } = e,
        o = i === void 0 ? 3 : i,
        s = a === void 0 ? `sidebar` : a,
        {
            turnIndex: c
        } = r,
        l;
    t[0] === n ? l = t[1] : (l = () => G(n), t[0] = n, t[1] = l);
    let u = d(l);
    if (!u) return null;
    let f;
    t[2] === n ? f = t[3] : (f = () => le(n), t[2] = n, t[3] = f);
    let p;
    return t[4] !== n || t[5] !== o || t[6] !== u || t[7] !== r || t[8] !== f || t[9] !== c || t[10] !== s ? (p = (0, $.jsx)(Ot, {
        product: u,
        sidebar: r,
        clientThreadId: n.id,
        conversation: n,
        turnIndex: c,
        handleCloseThreadSidebar: f,
        initialVisibleOfferCount: o,
        type: s
    }), t[4] = n, t[5] = o, t[6] = u, t[7] = r, t[8] = f, t[9] = c, t[10] = s, t[11] = p) : p = t[11], p
}

function Et(e) {
    "use forget";
    let t = (0, jt.c)(29),
        {
            conversation: n,
            sidebar: r,
            initialVisibleOfferCount: i,
            type: o
        } = e,
        s = i === void 0 ? 3 : i,
        c = o === void 0 ? `sidebar` : o,
        l = ee(),
        [f, m] = (0, Q.useState)(0),
        {
            reference: h,
            messageId: g
        } = r,
        _;
    t[0] !== n || t[1] !== l.locale || t[2] !== g || t[3] !== h ? (_ = () => {
        if (!h) return;
        let e = !1,
            t = Le({
                conversation: n,
                sidebar: {
                    messageId: g,
                    reference: h
                },
                locale: l.locale
            });
        return t.completion.catch(() => {
            !e && p(() => G(n)) && w().danger(C)
        }), () => {
            e = !0, t.cancel()
        }
    }, t[0] = n, t[1] = l.locale, t[2] = g, t[3] = h, t[4] = _) : _ = t[4];
    let v;
    t[5] !== n || t[6] !== l.locale || t[7] !== g || t[8] !== h || t[9] !== f ? (v = [n, h, g, l.locale, f], t[5] = n, t[6] = l.locale, t[7] = g, t[8] = h, t[9] = f, t[10] = v) : v = t[10], (0, Q.useEffect)(_, v);
    let y;
    t[11] !== n || t[12] !== r.product ? (y = () => ({
        product: G(n) ?? r.product,
        referenceStatus: Pe(n)
    }), t[11] = n, t[12] = r.product, t[13] = y) : y = t[13];
    let {
        product: b,
        referenceStatus: x
    } = d(y);
    if (!b) {
        let e;
        t[14] === x ? e = t[15] : (e = x === `error` ? (0, $.jsxs)(`div`, {
            role: `alert`,
            className: `flex min-h-[420px] flex-col items-center justify-center text-center`,
            children: [(0, $.jsx)(`p`, {
                className: `text-token-text-secondary max-w-xs text-sm`,
                children: (0, $.jsx)(D, {
                    id: `chatgpt.search.product_details.reference.error.message`,
                    defaultMessage: `We couldn't load this product.`
                })
            }), (0, $.jsx)(u, {
                type: `button`,
                className: `mt-4`,
                color: `secondary`,
                size: `small`,
                onClick: () => m(Dt),
                children: (0, $.jsx)(D, {
                    id: `chatgpt.search.product_details.reference.error.retry_button.label`,
                    defaultMessage: `Try again`
                })
            })]
        }) : (0, $.jsx)(ke, {}), t[14] = x, t[15] = e);
        let r = e,
            i;
        return t[16] !== r || t[17] !== n || t[18] !== c ? (i = c === `sidebar` ? (0, $.jsx)(ue, {
            ariaLabel: ``,
            handleClose: () => le(n),
            children: r
        }) : (0, $.jsx)(a, {
            isOpen: !0,
            showCloseButton: !0,
            onClose: () => le(n),
            children: r
        }), t[16] = r, t[17] = n, t[18] = c, t[19] = i) : i = t[19], i
    }
    let S;
    t[20] === n ? S = t[21] : (S = () => le(n), t[20] = n, t[21] = S);
    let T;
    return t[22] !== n || t[23] !== s || t[24] !== b || t[25] !== r || t[26] !== S || t[27] !== c ? (T = (0, $.jsx)(Ot, {
        product: b,
        sidebar: r,
        clientThreadId: n.id,
        conversation: n,
        handleCloseThreadSidebar: S,
        initialVisibleOfferCount: s,
        type: c
    }), t[22] = n, t[23] = s, t[24] = b, t[25] = r, t[26] = S, t[27] = c, t[28] = T) : T = t[28], T
}

function Dt(e) {
    return e + 1
}

function Ot(e) {
    "use forget";
    let t = (0, jt.c)(145),
        {
            product: n,
            sidebar: r,
            clientThreadId: i,
            conversation: o,
            turnIndex: l,
            handleCloseThreadSidebar: u,
            onFollowUp: f,
            initialVisibleOfferCount: m,
            type: h
        } = e,
        _ = m === void 0 ? 3 : m,
        v = h === void 0 ? `sidebar` : h,
        y = ee(),
        x = (0, Q.useId)(),
        S = (0, Q.useRef)(null),
        [C, w] = (0, Q.useState)(0),
        T = (0, Q.useRef)(null),
        E;
    t[0] !== o || t[1] !== n ? (E = () => {
        let e = Ne(o),
            t = Re(o);
        return {
            productDetailDataScope: e,
            resolvedProductDetailData: ze(o),
            statefulProduct: t ?? n
        }
    }, t[0] = o, t[1] = n, t[2] = E) : E = t[2];
    let {
        productDetailDataScope: O,
        resolvedProductDetailData: k,
        statefulProduct: A
    } = d(E), j;
    t[3] !== o || t[4] !== n.title || t[5] !== O ? (j = () => {
        let e = Fe(o);
        return O === `source_catalog` ? e : e || n.title || ``
    }, t[3] = o, t[4] = n.title, t[5] = O, t[6] = j) : j = t[6];
    let M = d(j),
        N;
    t[7] === o ? N = t[8] : (N = () => Ie(o), t[7] = o, t[8] = N);
    let P = d(N),
        te;
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (te = () => {
        w(0)
    }, t[9] = te) : te = t[9];
    let F;
    t[10] === n.id ? F = t[11] : (F = [n.id], t[10] = n.id, t[11] = F), (0, Q.useEffect)(te, F);
    let ne, re;
    t[12] === v ? (ne = t[13], re = t[14]) : (ne = () => {
        if (v === `sidebar`) return;
        let e = T.current;
        if (!e) return;
        let t = () => {
            w(e.scrollTop)
        };
        return t(), e.addEventListener(`scroll`, t, {
            passive: !0
        }), () => {
            e.removeEventListener(`scroll`, t)
        }
    }, re = [v], t[12] = v, t[13] = ne, t[14] = re), (0, Q.useEffect)(ne, re);
    let {
        messageId: I,
        contentReferenceStartIndex: L,
        productIndex: ie
    } = r, R = r.type === `product_agent` ? r.publicEntityShareId : void 0, ae = v === `modal` && R != null, z = `${I}-${L}-${ie}`, B = P === -1 || C <= P, se = v === `sidebar`, ce = f ?? (R == null ? void 0 : u), le = ae ? `aspect-square max-h-[50dvh]` : void 0, de = v !== `sidebar`, pe;
    t[15] !== i || t[16] !== L || t[17] !== o || t[18] !== _ || t[19] !== I || t[20] !== n || t[21] !== ie || t[22] !== r || t[23] !== se || t[24] !== ce || t[25] !== le || t[26] !== de || t[27] !== l ? (pe = (0, $.jsx)(Ve, {
        product: n,
        clientThreadId: i,
        messageId: I,
        contentReferenceStartIndex: L,
        turnIndex: l,
        productIndex: ie,
        conversation: o,
        offsetTopMargin: se,
        sidebar: r,
        onFollowUp: ce,
        galleryAspect: le,
        isModal: de,
        interactionSource: r.interactionSource,
        initialVisibleOfferCount: _
    }), t[15] = i, t[16] = L, t[17] = o, t[18] = _, t[19] = I, t[20] = n, t[21] = ie, t[22] = r, t[23] = se, t[24] = ce, t[25] = le, t[26] = de, t[27] = l, t[28] = pe) : pe = t[28];
    let V = pe,
        H, me;
    t[29] !== n.offers || t[30] !== O || t[31] !== k?.offers || t[32] !== A.offers ? (H = O === `source_catalog` ? k?.offers ?? [] : A.offers ?? n.offers ?? [], me = Array.from(new Set(H.map(At))).filter(kt), t[29] = n.offers, t[30] = O, t[31] = k?.offers, t[32] = A.offers, t[33] = H, t[34] = me) : (H = t[33], me = t[34]);
    let he = me,
        ge = he.length > 0,
        ve;
    t[35] === ge ? ve = t[36] : (ve = ge && c(`1961970013`), t[35] = ge, t[36] = ve);
    let ye = ve,
        be = ye,
        xe = r.type === `product_agent` ? r.libraryOrigin : void 0,
        Ce = xe != null,
        U = r.type === `product_agent` ? r.savedEntityRequest : void 0,
        Ee = r.type === `product_agent` && r.assistantMessageId !== void 0 ? r.assistantMessageId : I,
        Oe;
    if (t[37] !== o || t[38] !== I || t[39] !== n || t[40] !== O || t[41] !== U || t[42] !== r.product || t[43] !== r.type || t[44] !== A) {
        let e;
        t[46] !== o || t[47] !== I ? (e = () => Me(o, I), t[46] = o, t[47] = I, t[48] = e) : e = t[48];
        let i = p(e);
        Oe = O === `source_catalog` ? null : U ?? _e({
            product: r.type === `product_agent` ? r.product ?? n : A,
            fallbackProduct: n,
            sidebarQuery: n.title,
            rewrittenQueries: i
        }), t[37] = o, t[38] = I, t[39] = n, t[40] = O, t[41] = U, t[42] = r.product, t[43] = r.type, t[44] = A, t[45] = Oe
    } else Oe = t[45];
    let ke = Oe,
        Ae;
    t[49] === ae ? Ae = t[50] : (Ae = ae ? `bg-token-bg-primary/60 hover:bg-token-bg-primary/70 h-9! w-9! shrink-0 rounded-lg! backdrop-blur-xl backdrop-filter` : Te(), t[49] = ae, t[50] = Ae);
    let W = Ae,
        G;
    t[51] !== W || t[52] !== Ee || t[53] !== o || t[54] !== I || t[55] !== R || t[56] !== ke || t[57] !== U ? (G = ke != null && (R == null || b()) ? (0, $.jsx)(He, {
        analyticsSource: R == null ? U == null ? `conversation` : `library` : `unknown`,
        className: W,
        request: ke,
        clientThreadId: R == null ? o.id : void 0,
        messageId: R == null ? I : void 0,
        assistantMessageId: U == null && R == null ? Ee ?? void 0 : void 0
    }) : void 0, t[51] = W, t[52] = Ee, t[53] = o, t[54] = I, t[55] = R, t[56] = ke, t[57] = U, t[58] = G) : G = t[58];
    let Pe = G,
        Le = A.url ?? ``,
        Be = Ce ? xe : void 0,
        Ue;
    t[59] !== W || t[60] !== i || t[61] !== L || t[62] !== ye || t[63] !== be || t[64] !== I || t[65] !== he || t[66] !== H || t[67] !== A.id || t[68] !== A.title || t[69] !== Le || t[70] !== Be ? (Ue = (0, $.jsx)(bt, {
        product_id: A.id,
        product_title: A.title,
        product_url: Le,
        clientThreadId: i,
        messageId: I,
        contentReferenceStartIndex: L,
        offer_urls: he,
        offers: H,
        className: W,
        enableReporting: ye,
        enableSellerReporting: be,
        libraryOrigin: Be
    }), t[59] = W, t[60] = i, t[61] = L, t[62] = ye, t[63] = be, t[64] = I, t[65] = he, t[66] = H, t[67] = A.id, t[68] = A.title, t[69] = Le, t[70] = Be, t[71] = Ue) : Ue = t[71];
    let We = Ue,
        K;
    t[72] !== W || t[73] !== n || t[74] !== O || t[75] !== R || t[76] !== r.product || t[77] !== r.type || t[78] !== A ? (K = O !== `source_catalog` && (0, $.jsx)(we, {
        product: r.type === `product_agent` ? r.product ?? n : A,
        hydratedProduct: A,
        publicEntityShareId: R,
        className: W
    }), t[72] = W, t[73] = n, t[74] = O, t[75] = R, t[76] = r.product, t[77] = r.type, t[78] = A, t[79] = K) : K = t[79];
    let Ge;
    t[80] !== We || t[81] !== Pe || t[82] !== K ? (Ge = (0, $.jsxs)($.Fragment, {
        children: [Pe, K, We]
    }), t[80] = We, t[81] = Pe, t[82] = K, t[83] = Ge) : Ge = t[83];
    let q = Ge,
        Ke = r.type === `product_agent` ? r.shopImageOrigin : void 0,
        qe;
    t[84] !== W || t[85] !== o || t[86] !== Ke ? (qe = Ke ? (0, $.jsxs)(`button`, {
        type: `button`,
        className: W,
        onClick: () => je(o, Ke),
        children: [(0, $.jsx)(fe, {
            className: `icon`
        }), (0, $.jsx)(`span`, {
            className: `sr-only`,
            children: (0, $.jsx)(D, {
                id: `shopping.imageSidebar.product.back.label`,
                defaultMessage: `Back to results`
            })
        })]
    }) : void 0, t[84] = W, t[85] = o, t[86] = Ke, t[87] = qe) : qe = t[87];
    let J = qe;
    if (ae) {
        let e;
        t[88] !== x || t[89] !== M ? (e = (0, $.jsx)(`h1`, {
            className: `sr-only`,
            id: x,
            children: M
        }), t[88] = x, t[89] = M, t[90] = e) : e = t[90];
        let n;
        t[91] === V ? n = t[92] : (n = (0, $.jsx)(`div`, {
            ref: T,
            className: `min-h-0 min-w-0 flex-1 overflow-x-hidden overflow-y-auto`,
            children: V
        }), t[91] = V, t[92] = n);
        let r;
        t[93] === q ? r = t[94] : (r = (0, $.jsx)(`div`, {
            className: `pointer-events-auto flex items-center gap-2`,
            children: q
        }), t[93] = q, t[94] = r);
        let i;
        t[95] === W ? i = t[96] : (i = g(`pointer-events-auto`, W), t[95] = W, t[96] = i);
        let a;
        t[97] !== u || t[98] !== i ? (a = (0, $.jsx)(s, {
            ref: S,
            type: `button`,
            className: i,
            onClick: u
        }), t[97] = u, t[98] = i, t[99] = a) : a = t[99];
        let o;
        t[100] !== r || t[101] !== a ? (o = (0, $.jsxs)(`div`, {
            className: `pointer-events-none absolute inset-x-6 top-4 z-10 flex items-center justify-between sm:top-6`,
            children: [r, a]
        }), t[100] = r, t[101] = a, t[102] = o) : o = t[102];
        let c;
        return t[103] !== x || t[104] !== z || t[105] !== e || t[106] !== n || t[107] !== o ? (c = (0, $.jsxs)(Se, {
            titleId: x,
            closeRef: S,
            className: `transform-gpu [--product-flyout-sticky-header-height:56px]`,
            children: [e, n, o]
        }, z), t[103] = x, t[104] = z, t[105] = e, t[106] = n, t[107] = o, t[108] = c) : c = t[108], c
    }
    switch (v) {
        case `sidebar`: {
            let e;
            t[109] !== q || t[110] !== J || t[111] !== M || t[112] !== B ? (e = e => {
                let {
                    handleClose: t
                } = e;
                return (0, $.jsx)(oe, {
                    name: `product-header`,
                    type: `primary`,
                    className: g(`flex h-14 items-center bg-transparent!`, B && `pointer-events-none`),
                    children: (0, $.jsx)(De, {
                        onClose: t,
                        isTransparent: B,
                        title: M,
                        actions: q,
                        leadingAction: J
                    })
                })
            }, t[109] = q, t[110] = J, t[111] = M, t[112] = B, t[113] = e) : e = t[113];
            let n;
            t[114] === y ? n = t[115] : (n = y.formatMessage({
                id: `region.sidebar.product`,
                defaultMessage: `Product details`
            }), t[114] = y, t[115] = n);
            let r;
            return t[116] !== u || t[117] !== z || t[118] !== V || t[119] !== e || t[120] !== n ? (r = (0, $.jsx)(ue, {
                className: `[--product-flyout-sticky-header-height:56px]`,
                handleClose: u,
                onScroll: w,
                renderLeading: e,
                ariaLabel: n,
                children: V
            }, z), t[116] = u, t[117] = z, t[118] = V, t[119] = e, t[120] = n, t[121] = r) : r = t[121], r
        }
        case `modal`: {
            let e;
            t[122] !== q || t[123] !== J || t[124] !== u || t[125] !== M || t[126] !== B ? (e = (0, $.jsx)(De, {
                className: `absolute inset-x-0 top-0 z-10`,
                title: M,
                actions: q,
                leadingAction: J,
                isTransparent: B,
                usePageBackground: !1,
                onClose: u
            }), t[122] = q, t[123] = J, t[124] = u, t[125] = M, t[126] = B, t[127] = e) : e = t[127];
            let n;
            return t[128] !== u || t[129] !== M || t[130] !== z || t[131] !== V || t[132] !== e ? (n = (0, $.jsxs)(a, {
                testId: `modal-chat-screen-product-flyout`,
                className: `focus-none relative max-w-2xl shadow-none! outline-hidden [--product-flyout-sticky-header-height:56px]`,
                size: `custom`,
                type: `success`,
                position: `end`,
                noPadding: !0,
                title: M,
                visuallyHiddenHeader: !0,
                isOpen: !0,
                onClose: u,
                rootClassName: `z-0`,
                contentRef: T,
                children: [V, e]
            }, z), t[128] = u, t[129] = M, t[130] = z, t[131] = V, t[132] = e, t[133] = n) : n = t[133], n
        }
        case `fullscreen`: {
            let e;
            t[134] === V ? e = t[135] : (e = (0, $.jsx)(`div`, {
                ref: T,
                className: `h-full overflow-y-auto`,
                children: V
            }), t[134] = V, t[135] = e);
            let n;
            t[136] !== q || t[137] !== J || t[138] !== u || t[139] !== M || t[140] !== B ? (n = (0, $.jsx)(De, {
                className: `absolute inset-x-0 top-0 z-10`,
                title: M,
                actions: q,
                leadingAction: J,
                isTransparent: B,
                usePageBackground: !1,
                onClose: u
            }), t[136] = q, t[137] = J, t[138] = u, t[139] = M, t[140] = B, t[141] = n) : n = t[141];
            let r;
            return t[142] !== e || t[143] !== n ? (r = (0, $.jsxs)(`div`, {
                className: `bg-token-bg-primary absolute inset-0`,
                children: [e, n]
            }), t[142] = e, t[143] = n, t[144] = r) : r = t[144], r
        }
    }
}

function kt(e) {
    return !!e
}

function At(e) {
    return e.url?.trim()
}
var jt, Q, $, Mt = e((() => {
    jt = A(), _(), o(), xe(), m(), Oe(), B(), Ee(), me(), Ae(), U(), se(), R(), x(), v(), l(), r(), h(), Q = n(k()), O(), ve(), W(), y(), Ce(), Be(), Ct(), Ue(), $ = E()
}));
export {
    wt as n, Mt as r, Ot as t
};
//# sourceMappingURL=2d7ded63-of7btdoe309v0ixm.js.map