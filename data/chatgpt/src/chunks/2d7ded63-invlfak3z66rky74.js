import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as r,
    A8 as i,
    Ait as a,
    Aw as o,
    I5 as s,
    IU as c,
    J5 as l,
    LU as u,
    Mw as d,
    Ow as f,
    Uat as p,
    act as m,
    eE as h,
    grt as g,
    ict as _,
    jit as v,
    jw as y,
    l7 as b,
    rct as x,
    tot as S,
    u7 as C,
    urt as w,
    xct as T
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    Bn as E,
    Nn as D,
    Rn as O,
    Vn as k,
    wn as A,
    zn as ee
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    B8 as j,
    Elt as M,
    G8 as N,
    I8 as P,
    L8 as te,
    LIn as ne,
    MIn as F,
    Olt as re,
    P8 as I,
    R8 as L,
    SUn as ie,
    V8 as R,
    W8 as z,
    bUn as B,
    da as ae,
    fa as V,
    ia as oe,
    ra as se,
    xUn as ce,
    z8 as le
} from "./conversation-small-fh0oqifngkf5rvl1.js";
import {
    Ax as ue,
    ap as de,
    bv as fe,
    kx as H,
    mg as U,
    op as pe,
    pg as me,
    xv as he
} from "./30901919-cmi3nh547dwrqkxv.js";
import {
    Gd as ge,
    Ud as _e
} from "./8b34dbc2-peb5nzi8z3rrflnv.js";
import {
    n as ve,
    t as ye
} from "./02cd0121-fzdaop6s6qmiz6t6.js";
import {
    n as be,
    t as xe
} from "./bd0b8304-gp6p19oj01lhj1a1.js";
import {
    n as Se,
    t as Ce
} from "./fb0f45f8-nribhj5orhkkbodg.js";
import {
    i as W,
    n as we
} from "./74d67c64-bges2pubtz9ccusq.js";
import {
    n as Te,
    t as Ee
} from "./ff9bbca7-hvnyk9qoangnqaf5.js";
import {
    n as De,
    t as Oe
} from "./e145c156-jruwykpskcby63ic.js";
import {
    n as ke,
    t as Ae
} from "./ea63db5c-hrxt07ksb3oa6xl3.js";
import {
    C as G,
    S as je,
    b as K,
    c as Me,
    g as Ne,
    o as Pe,
    s as Fe,
    w as Ie,
    x as Le,
    y as Re
} from "./2b67bcd8-jz2oqjspu3i9zh7k.js";
import {
    n as ze,
    t as Be
} from "./ecdd5ba5-ghelmvnlwyjqu04x.js";
import {
    a as Ve,
    o as He
} from "./1362c49f-hlf3h2hmna77zirj.js";
import {
    n as Ue,
    r as We
} from "./da07a0d0-mx4c7wfza7gk565l.js";

function Ge(e) {
    "use forget";
    let t = (0, qe.c)(30),
        {
            product_id: n,
            product_title: i,
            product_url: a,
            offer_urls: o,
            onClose: s,
            onBack: c,
            resetKey: l
        } = e,
        u = ee(),
        d = v(),
        {
            data: f
        } = R(x.CommerceProduct),
        p;
    t[0] === o ? p = t[1] : (p = o && o.length > 0 ? {
        offer_urls: JSON.stringify(o)
    } : {}, t[0] = o, t[1] = p);
    let h;
    t[2] !== i || t[3] !== a || t[4] !== p ? (h = {
        [_.EntityName]: i,
        [_.EntityUrl]: a,
        ...p
    }, t[2] = i, t[3] = a, t[4] = p, t[5] = h) : h = t[5];
    let g = j(u, n, x.CommerceProduct, m.Commerce, h),
        y = `Report ${i.length<=30?i:i.substring(0,27)+`...`}`,
        b;
    t[6] === c ? b = t[7] : (b = c ? (0, J.jsx)(r, {
        color: `secondary`,
        onClick: c,
        children: (0, J.jsx)(D, {
            id: `Vuk38f`,
            defaultMessage: `Back`
        })
    }) : void 0, t[6] = c, t[7] = b);
    let S = b,
        C;
    t[8] === f?.reasons ? C = t[9] : (C = f?.reasons ?? [], t[8] = f?.reasons, t[9] = C);
    let w = f?.header,
        T;
    t[10] !== S || t[11] !== s || t[12] !== l || t[13] !== g || t[14] !== C || t[15] !== w || t[16] !== y ? (T = {
        reasons: C,
        submitReport: g,
        title: y,
        onClose: s,
        header: w,
        footerSecondaryButton: S,
        resetKey: l
    }, t[10] = S, t[11] = s, t[12] = l, t[13] = g, t[14] = C, t[15] = w, t[16] = y, t[17] = T) : T = t[17];
    let E = L(T);
    if (d && f != null) return E;
    if (d) {
        let e = f?.header,
            n;
        t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, J.jsx)(D, {
            id: `IC6uIZ`,
            defaultMessage: `Loading report options...`
        }), t[18] = n) : n = t[18];
        let r;
        t[19] === e ? r = t[20] : (r = (0, J.jsx)(I, {
            header: e,
            subHeader: n
        }), t[19] = e, t[20] = r);
        let i;
        return t[21] !== S || t[22] !== r || t[23] !== y ? (i = {
            body: r,
            primaryButton: void 0,
            secondaryButton: S,
            testId: `modal-report-reason-selection`,
            title: y
        }, t[21] = S, t[22] = r, t[23] = y, t[24] = i) : i = t[24], i
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
    t[26] === Symbol.for(`react.memo_cache_sentinel`) ? (k = (0, J.jsx)(r, {
        color: `primary`,
        onClick: q,
        children: (0, J.jsx)(D, {
            id: `report.goToForm`,
            defaultMessage: `Go to Form`
        })
    }), t[26] = k) : k = t[26];
    let A;
    return t[27] !== S || t[28] !== y ? (A = {
        body: O,
        primaryButton: k,
        secondaryButton: S,
        testId: `modal-report-reason-selection`,
        title: y
    }, t[27] = S, t[28] = y, t[29] = A) : A = t[29], A
}

function q() {
    window.open(`https://openai.com/form/report-content`, `_blank`)
}

function Ke(e) {
    "use forget";
    let t = (0, qe.c)(7),
        n = Ge(e),
        r;
    return t[0] !== n.body || t[1] !== n.primaryButton || t[2] !== n.secondaryButton || t[3] !== n.testId || t[4] !== n.title || t[5] !== e.onClose ? (r = (0, J.jsx)(f, {
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
    qe = A(), T(), h(), o(), te(), a(), le(), O(), J = E()
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
            sellerUrl: i,
            sellerShopId: a,
            onClose: o,
            onBack: s,
            resetKey: c
        } = e,
        l = ee(),
        u = v(),
        d;
    t[0] === l ? d = t[1] : (d = Xe(l), t[0] = l, t[1] = d);
    let f = d,
        p;
    t[2] === a ? p = t[3] : (p = a ? {
        shop_id: a
    } : {}, t[2] = a, t[3] = p);
    let h;
    t[4] !== n || t[5] !== i || t[6] !== p ? (h = {
        [_.EntityName]: n,
        [_.EntityUrl]: i,
        ...p
    }, t[4] = n, t[5] = i, t[6] = p, t[7] = h) : h = t[7];
    let g = j(l, i, x.CommerceSeller, m.Commerce, h),
        y = `Report ${n.length<=30?n:n.substring(0,27)+`...`}`,
        b;
    t[8] === s ? b = t[9] : (b = s ? (0, Y.jsx)(r, {
        color: `secondary`,
        onClick: s,
        children: (0, Y.jsx)(D, {
            id: `NXm4qA`,
            defaultMessage: `Back`
        })
    }) : void 0, t[8] = s, t[9] = b);
    let S = b,
        C;
    t[10] === l ? C = t[11] : (C = l.formatMessage({
        id: `report.seller.header`,
        defaultMessage: `Please tell us why you are reporting`
    }), t[10] = l, t[11] = C);
    let w;
    t[12] !== S || t[13] !== o || t[14] !== c || t[15] !== f || t[16] !== g || t[17] !== C || t[18] !== y ? (w = {
        reasons: f,
        submitReport: g,
        title: y,
        onClose: o,
        header: C,
        footerSecondaryButton: S,
        resetKey: c,
        buildSubmitPayload: rt
    }, t[12] = S, t[13] = o, t[14] = c, t[15] = f, t[16] = g, t[17] = C, t[18] = y, t[19] = w) : w = t[19];
    let T = L(w);
    if (u) return T;
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
    t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (O = (0, Y.jsx)(r, {
        color: `primary`,
        onClick: nt,
        children: (0, Y.jsx)(D, {
            id: `report.goToForm`,
            defaultMessage: `Go to Form`
        })
    }), t[21] = O) : O = t[21];
    let k;
    return t[22] !== S || t[23] !== y ? (k = {
        body: E,
        primaryButton: O,
        secondaryButton: S,
        testId: `modal-report-seller-details`,
        title: y
    }, t[22] = S, t[23] = y, t[24] = k) : k = t[24], k
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
    it = A(), T(), h(), o(), te(), a(), le(), O(), $e(), Y = E(), at = `seller_report_reason_category_id`, ot = `seller_report_reason_category_label`, st = `seller_report_reason_subcategory_id`, ct = `seller_report_reason_subcategory_label`
}));

function ut(e) {
    if (!e || e.length === 0) return [];
    let t = new Map;
    for (let n of e) {
        let e = M(n),
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
    setSelectedIssue: i
}) {
    return {
        body: (0, X.jsxs)(X.Fragment, {
            children: [(0, X.jsxs)(z.Root, {
                value: n,
                onValueChange: i,
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
                        className: b(!e && `text-token-text-tertiary`),
                        children: (0, X.jsx)(D, {
                            id: `LLBNns`,
                            defaultMessage: `Issue with seller`
                        })
                    }),
                    children: (0, X.jsx)(z.Indicator, {})
                })]
            }), !e && (0, X.jsx)(`div`, {
                className: `mt-3`,
                children: (0, X.jsx)(P, {
                    children: (0, X.jsx)(D, {
                        id: `soN94U`,
                        defaultMessage: `No sellers are available to report for this product.`
                    })
                })
            })]
        }),
        primaryButton: (0, X.jsx)(r, {
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
    selectedSellerId: i,
    sellers: a,
    setSelectedSellerId: o
}) {
    return {
        body: (0, X.jsxs)(X.Fragment, {
            children: [(0, X.jsx)(I, {
                header: (0, X.jsx)(D, {
                    id: `uo+gFL`,
                    defaultMessage: `Select a seller`
                })
            }), (0, X.jsx)(z.Root, {
                value: i,
                onValueChange: e => o(e),
                className: `flex flex-col gap-3`,
                children: a.map(e => (0, X.jsx)(z.Item, {
                    value: e.selectionKey,
                    label: e.name,
                    children: (0, X.jsx)(z.Indicator, {})
                }, e.selectionKey))
            })]
        }),
        primaryButton: (0, X.jsx)(r, {
            color: `primary`,
            onClick: e,
            disabled: !n,
            children: (0, X.jsx)(D, {
                id: `6CCWxi`,
                defaultMessage: `Next`
            })
        }),
        secondaryButton: (0, X.jsx)(r, {
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
            offerUrls: a,
            offers: o,
            onClose: s
        } = e,
        [c, l] = (0, vt.useState)(`issue_selection`),
        [u, d] = (0, vt.useState)(),
        [p, m] = (0, vt.useState)(),
        [h, g] = (0, vt.useState)(0),
        [_, v] = (0, vt.useState)(0),
        y;
    t[0] === o ? y = t[1] : (y = ut(o), t[0] = o, t[1] = y);
    let b = y,
        x = b.length > 0,
        S = b.find(e => e.selectionKey === p) ?? null,
        C;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (C = () => l(`issue_selection`), t[2] = C) : C = t[2];
    let w;
    t[3] !== a || t[4] !== s || t[5] !== h || t[6] !== n || t[7] !== r || t[8] !== i ? (w = {
        product_id: n,
        product_title: r,
        product_url: i,
        offer_urls: a,
        onClose: s,
        onBack: C,
        resetKey: h
    }, t[3] = a, t[4] = s, t[5] = h, t[6] = n, t[7] = r, t[8] = i, t[9] = w) : w = t[9];
    let T = Ge(w),
        E;
    t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (E = () => l(`seller_selection`), t[10] = E) : E = t[10];
    let D = tt({
            sellerName: S?.name ?? ``,
            sellerUrl: S?.url ?? ``,
            sellerShopId: S?.shopId,
            onClose: s,
            onBack: E,
            resetKey: _
        }),
        O;
    bb0: switch (c) {
        case `product_report`:
            O = T;
            break bb0;
        case `seller_selection`: {
            let e;
            t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (e = () => l(`issue_selection`), t[11] = e) : e = t[11], O = pt({
                onAdvance: () => {
                    S && (v(gt), l(`seller_report`))
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
            t[12] === u ? e = t[13] : (e = () => {
                if (u === `product`) {
                    g(ht), l(`product_report`);
                    return
                }
                u === `seller` && l(`seller_selection`)
            }, t[12] = u, t[13] = e);
            let n;
            t[14] !== x || t[15] !== u || t[16] !== e ? (n = ft({
                hasSellers: x,
                onAdvance: e,
                selectedIssue: u,
                setSelectedIssue: d
            }), t[14] = x, t[15] = u, t[16] = e, t[17] = n) : n = t[17], O = n
        }
    }
    let k;
    return t[18] !== O.body || t[19] !== O.primaryButton || t[20] !== O.secondaryButton || t[21] !== O.testId || t[22] !== O.title || t[23] !== s ? (k = (0, X.jsx)(f, {
        testId: O.testId,
        title: O.title,
        onClose: s,
        isOpen: !0,
        showCloseButton: !0,
        type: `success`,
        secondaryButton: O.secondaryButton,
        primaryButton: O.primaryButton,
        children: O.body
    }), t[18] = O.body, t[19] = O.primaryButton, t[20] = O.secondaryButton, t[21] = O.testId, t[22] = O.title, t[23] = s, t[24] = k) : k = t[24], k
}

function ht(e) {
    return e + 1
}

function gt(e) {
    return e + 1
}
var _t, vt, X, yt = e((() => {
    _t = A(), h(), o(), te(), N(), C(), vt = n(k()), O(), re(), Je(), lt(), X = E()
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
        [h, g] = (0, St.useState)(!1),
        [_, v] = (0, St.useState)(!1),
        [y, x] = (0, St.useState)(!1),
        S;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (S = e => {
        g(e)
    }, t[0] = S) : S = t[0];
    let C;
    t[1] === u ? C = t[2] : (C = b(`keyboard-focused:focus-ring hover:bg-token-bg-tertiary pointer-events-auto flex h-9 w-9 items-center justify-center rounded-lg transition-colors`, u), t[1] = u, t[2] = C);
    let w;
    t[3] === m ? w = t[4] : (w = m.formatMessage({
        id: `G4IkJB`,
        defaultMessage: `Open product options`
    }), t[3] = m, t[4] = w);
    let T;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (T = (0, Z.jsx)(H, {
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
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (O = (0, Z.jsx)(ce.Item, {
        icon: U,
        onClick: () => {
            v(!0)
        },
        children: (0, Z.jsx)(D, {
            id: `chatgpt.shopping.feedback.product_detail.menu_item.label`,
            defaultMessage: `Give feedback`
        })
    }), t[9] = O) : O = t[9];
    let k;
    t[10] === p ? k = t[11] : (k = p != null && (0, Z.jsx)(ye, {
        conversationId: p.conversationId,
        messageId: p.messageId
    }), t[10] = p, t[11] = k);
    let A;
    t[12] === d ? A = t[13] : (A = d && (0, Z.jsx)(ce.Item, {
        icon: fe,
        onClick: () => {
            x(!0)
        },
        children: (0, Z.jsx)(D, {
            id: `thread.reportProduct`,
            defaultMessage: `Report`
        })
    }), t[12] = d, t[13] = A);
    let j;
    t[14] !== h || t[15] !== E || t[16] !== k || t[17] !== A ? (j = (0, Z.jsxs)(B, {
        open: h,
        onOpenChange: S,
        side: `bottom`,
        contentAlign: `start`,
        triggerButton: E,
        size: `auto`,
        children: [O, k, A]
    }), t[14] = h, t[15] = E, t[16] = k, t[17] = A, t[18] = j) : j = t[18];
    let M;
    t[19] !== a || t[20] !== s || t[21] !== _ || t[22] !== o || t[23] !== n || t[24] !== r || t[25] !== i ? (M = _ && (0, Z.jsx)(Ue, {
        clientThreadId: a,
        messageId: o,
        contentReferenceStartIndex: s,
        productId: n,
        productTitle: r,
        productUrl: i,
        onClose: () => v(!1)
    }), t[19] = a, t[20] = s, t[21] = _, t[22] = o, t[23] = n, t[24] = r, t[25] = i, t[26] = M) : M = t[26];
    let N;
    t[27] !== f || t[28] !== y || t[29] !== c || t[30] !== l || t[31] !== n || t[32] !== r || t[33] !== i ? (N = y && (f ? (0, Z.jsx)(mt, {
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
    })), t[27] = f, t[28] = y, t[29] = c, t[30] = l, t[31] = n, t[32] = r, t[33] = i, t[34] = N) : N = t[34];
    let P;
    return t[35] !== M || t[36] !== N || t[37] !== j ? (P = (0, Z.jsxs)(Z.Fragment, {
        children: [j, M, N]
    }), t[35] = M, t[36] = N, t[37] = j, t[38] = P) : P = t[38], P
}
var xt, St, Z, Ct = e((() => {
        xt = A(), ie(), ue(), he(), me(), ve(), We(), C(), St = n(k()), O(), yt(), Je(), Z = E()
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
        u;
    t[0] === n ? u = t[1] : (u = () => K(n), t[0] = n, t[1] = u);
    let d = l(u);
    if (!d) return null;
    let f;
    t[2] === n ? f = t[3] : (f = () => F(n), t[2] = n, t[3] = f);
    let p;
    return t[4] !== n || t[5] !== o || t[6] !== d || t[7] !== r || t[8] !== f || t[9] !== c || t[10] !== s ? (p = (0, $.jsx)(Ot, {
        product: d,
        sidebar: r,
        clientThreadId: n.id,
        conversation: n,
        turnIndex: c,
        handleCloseThreadSidebar: f,
        initialVisibleOfferCount: o,
        type: s
    }), t[4] = n, t[5] = o, t[6] = d, t[7] = r, t[8] = f, t[9] = c, t[10] = s, t[11] = p) : p = t[11], p
}

function Et(e) {
    "use forget";
    let t = (0, jt.c)(29),
        {
            conversation: n,
            sidebar: i,
            initialVisibleOfferCount: a,
            type: o
        } = e,
        u = a === void 0 ? 3 : a,
        d = o === void 0 ? `sidebar` : o,
        m = ee(),
        [h, g] = (0, Q.useState)(0),
        {
            reference: _,
            messageId: v
        } = i,
        y;
    t[0] !== n || t[1] !== m.locale || t[2] !== v || t[3] !== _ ? (y = () => {
        if (!_) return;
        let e = !1,
            t = Ie({
                conversation: n,
                sidebar: {
                    messageId: v,
                    reference: _
                },
                locale: m.locale
            });
        return t.completion.catch(() => {
            !e && s(() => K(n)) && c().danger(p)
        }), () => {
            e = !0, t.cancel()
        }
    }, t[0] = n, t[1] = m.locale, t[2] = v, t[3] = _, t[4] = y) : y = t[4];
    let b;
    t[5] !== n || t[6] !== m.locale || t[7] !== v || t[8] !== _ || t[9] !== h ? (b = [n, _, v, m.locale, h], t[5] = n, t[6] = m.locale, t[7] = v, t[8] = _, t[9] = h, t[10] = b) : b = t[10], (0, Q.useEffect)(y, b);
    let x;
    t[11] !== n || t[12] !== i.product ? (x = () => ({
        product: K(n) ?? i.product,
        referenceStatus: Ne(n)
    }), t[11] = n, t[12] = i.product, t[13] = x) : x = t[13];
    let {
        product: S,
        referenceStatus: C
    } = l(x);
    if (!S) {
        let e;
        t[14] === C ? e = t[15] : (e = C === `error` ? (0, $.jsxs)(`div`, {
            role: `alert`,
            className: `flex min-h-[420px] flex-col items-center justify-center text-center`,
            children: [(0, $.jsx)(`p`, {
                className: `text-token-text-secondary max-w-xs text-sm`,
                children: (0, $.jsx)(D, {
                    id: `chatgpt.search.product_details.reference.error.message`,
                    defaultMessage: `We couldn't load this product.`
                })
            }), (0, $.jsx)(r, {
                type: `button`,
                className: `mt-4`,
                color: `secondary`,
                size: `small`,
                onClick: () => g(Dt),
                children: (0, $.jsx)(D, {
                    id: `chatgpt.search.product_details.reference.error.retry_button.label`,
                    defaultMessage: `Try again`
                })
            })]
        }) : (0, $.jsx)(Oe, {}), t[14] = C, t[15] = e);
        let i = e,
            a;
        return t[16] !== i || t[17] !== n || t[18] !== d ? (a = d === `sidebar` ? (0, $.jsx)(se, {
            ariaLabel: ``,
            handleClose: () => F(n),
            children: i
        }) : (0, $.jsx)(f, {
            isOpen: !0,
            showCloseButton: !0,
            onClose: () => F(n),
            children: i
        }), t[16] = i, t[17] = n, t[18] = d, t[19] = a) : a = t[19], a
    }
    let w;
    t[20] === n ? w = t[21] : (w = () => F(n), t[20] = n, t[21] = w);
    let T;
    return t[22] !== n || t[23] !== u || t[24] !== S || t[25] !== i || t[26] !== w || t[27] !== d ? (T = (0, $.jsx)(Ot, {
        product: S,
        sidebar: i,
        clientThreadId: n.id,
        conversation: n,
        handleCloseThreadSidebar: w,
        initialVisibleOfferCount: u,
        type: d
    }), t[22] = n, t[23] = u, t[24] = S, t[25] = i, t[26] = w, t[27] = d, t[28] = T) : T = t[28], T
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
            conversation: a,
            turnIndex: o,
            handleCloseThreadSidebar: c,
            onFollowUp: u,
            initialVisibleOfferCount: d,
            type: p
        } = e,
        m = d === void 0 ? 3 : d,
        h = p === void 0 ? `sidebar` : p,
        g = ee(),
        _ = (0, Q.useId)(),
        x = (0, Q.useRef)(null),
        [S, C] = (0, Q.useState)(0),
        T = (0, Q.useRef)(null),
        E;
    t[0] !== a || t[1] !== n ? (E = () => {
        let e = Me(a),
            t = Le(a);
        return {
            productDetailDataScope: e,
            resolvedProductDetailData: Re(a),
            statefulProduct: t ?? n
        }
    }, t[0] = a, t[1] = n, t[2] = E) : E = t[2];
    let {
        productDetailDataScope: O,
        resolvedProductDetailData: k,
        statefulProduct: A
    } = l(E), j;
    t[3] !== a || t[4] !== n.title || t[5] !== O ? (j = () => {
        let e = Pe(a);
        return O === `source_catalog` ? e : e || n.title || ``
    }, t[3] = a, t[4] = n.title, t[5] = O, t[6] = j) : j = t[6];
    let M = l(j),
        N;
    t[7] === a ? N = t[8] : (N = () => Fe(a), t[7] = a, t[8] = N);
    let P = l(N),
        te;
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (te = () => {
        C(0)
    }, t[9] = te) : te = t[9];
    let ne;
    t[10] === n.id ? ne = t[11] : (ne = [n.id], t[10] = n.id, t[11] = ne), (0, Q.useEffect)(te, ne);
    let F, re;
    t[12] === h ? (F = t[13], re = t[14]) : (F = () => {
        if (h === `sidebar`) return;
        let e = T.current;
        if (!e) return;
        let t = () => {
            C(e.scrollTop)
        };
        return t(), e.addEventListener(`scroll`, t, {
            passive: !0
        }), () => {
            e.removeEventListener(`scroll`, t)
        }
    }, re = [h], t[12] = h, t[13] = F, t[14] = re), (0, Q.useEffect)(F, re);
    let {
        messageId: I,
        contentReferenceStartIndex: L,
        productIndex: ie
    } = r, R = r.type === `product_agent` ? r.publicEntityShareId : void 0, z = h === `modal` && R != null, B = `${I}-${L}-${ie}`, V = P === -1 || S <= P, oe = h === `sidebar`, ce = u ?? (R == null ? void 0 : c), le = z ? `aspect-square max-h-[50dvh]` : void 0, ue = h !== `sidebar`, fe;
    t[15] !== i || t[16] !== L || t[17] !== a || t[18] !== m || t[19] !== I || t[20] !== n || t[21] !== ie || t[22] !== r || t[23] !== oe || t[24] !== ce || t[25] !== le || t[26] !== ue || t[27] !== o ? (fe = (0, $.jsx)(Be, {
        product: n,
        clientThreadId: i,
        messageId: I,
        contentReferenceStartIndex: L,
        turnIndex: o,
        productIndex: ie,
        conversation: a,
        offsetTopMargin: oe,
        sidebar: r,
        onFollowUp: ce,
        galleryAspect: le,
        isModal: ue,
        interactionSource: r.interactionSource,
        initialVisibleOfferCount: m
    }), t[15] = i, t[16] = L, t[17] = a, t[18] = m, t[19] = I, t[20] = n, t[21] = ie, t[22] = r, t[23] = oe, t[24] = ce, t[25] = le, t[26] = ue, t[27] = o, t[28] = fe) : fe = t[28];
    let H = fe,
        U, pe;
    t[29] !== n.offers || t[30] !== O || t[31] !== k?.offers || t[32] !== A.offers ? (U = O === `source_catalog` ? k?.offers ?? [] : A.offers ?? n.offers ?? [], pe = Array.from(new Set(U.map(At))).filter(kt), t[29] = n.offers, t[30] = O, t[31] = k?.offers, t[32] = A.offers, t[33] = U, t[34] = pe) : (U = t[33], pe = t[34]);
    let me = pe,
        he = me.length > 0,
        ge;
    t[35] === he ? ge = t[36] : (ge = he && w(`1961970013`), t[35] = he, t[36] = ge);
    let ve = ge,
        ye = ve,
        be = r.type === `product_agent` ? r.libraryOrigin : void 0,
        Se = be != null,
        W = r.type === `product_agent` ? r.savedEntityRequest : void 0,
        Te = r.type === `product_agent` && r.assistantMessageId !== void 0 ? r.assistantMessageId : I,
        De;
    if (t[37] !== a || t[38] !== I || t[39] !== n || t[40] !== O || t[41] !== W || t[42] !== r.product || t[43] !== r.type || t[44] !== A) {
        let e;
        t[46] !== a || t[47] !== I ? (e = () => je(a, I), t[46] = a, t[47] = I, t[48] = e) : e = t[48];
        let i = s(e);
        De = O === `source_catalog` ? null : W ?? _e({
            product: r.type === `product_agent` ? r.product ?? n : A,
            fallbackProduct: n,
            sidebarQuery: n.title,
            rewrittenQueries: i
        }), t[37] = a, t[38] = I, t[39] = n, t[40] = O, t[41] = W, t[42] = r.product, t[43] = r.type, t[44] = A, t[45] = De
    } else De = t[45];
    let Oe = De,
        ke;
    t[49] === z ? ke = t[50] : (ke = z ? `bg-token-bg-primary/60 hover:bg-token-bg-primary/70 h-9! w-9! shrink-0 rounded-lg! backdrop-blur-xl backdrop-filter` : we(), t[49] = z, t[50] = ke);
    let G = ke,
        K;
    t[51] !== G || t[52] !== Te || t[53] !== a || t[54] !== I || t[55] !== R || t[56] !== Oe || t[57] !== W ? (K = Oe != null && (R == null || v()) ? (0, $.jsx)(Ve, {
        analyticsSource: R == null ? W == null ? `conversation` : `library` : `unknown`,
        className: G,
        request: Oe,
        clientThreadId: R == null ? a.id : void 0,
        messageId: R == null ? I : void 0,
        assistantMessageId: W == null && R == null ? Te ?? void 0 : void 0
    }) : void 0, t[51] = G, t[52] = Te, t[53] = a, t[54] = I, t[55] = R, t[56] = Oe, t[57] = W, t[58] = K) : K = t[58];
    let Ne = K,
        Ie = A.url ?? ``,
        ze = Se ? be : void 0,
        He;
    t[59] !== G || t[60] !== i || t[61] !== L || t[62] !== ve || t[63] !== ye || t[64] !== I || t[65] !== me || t[66] !== U || t[67] !== A.id || t[68] !== A.title || t[69] !== Ie || t[70] !== ze ? (He = (0, $.jsx)(bt, {
        product_id: A.id,
        product_title: A.title,
        product_url: Ie,
        clientThreadId: i,
        messageId: I,
        contentReferenceStartIndex: L,
        offer_urls: me,
        offers: U,
        className: G,
        enableReporting: ve,
        enableSellerReporting: ye,
        libraryOrigin: ze
    }), t[59] = G, t[60] = i, t[61] = L, t[62] = ve, t[63] = ye, t[64] = I, t[65] = me, t[66] = U, t[67] = A.id, t[68] = A.title, t[69] = Ie, t[70] = ze, t[71] = He) : He = t[71];
    let Ue = He,
        We;
    t[72] !== G || t[73] !== n || t[74] !== O || t[75] !== R || t[76] !== r.product || t[77] !== r.type || t[78] !== A ? (We = O !== `source_catalog` && (0, $.jsx)(Ce, {
        product: r.type === `product_agent` ? r.product ?? n : A,
        hydratedProduct: A,
        publicEntityShareId: R,
        className: G
    }), t[72] = G, t[73] = n, t[74] = O, t[75] = R, t[76] = r.product, t[77] = r.type, t[78] = A, t[79] = We) : We = t[79];
    let Ge;
    t[80] !== Ue || t[81] !== Ne || t[82] !== We ? (Ge = (0, $.jsxs)($.Fragment, {
        children: [Ne, We, Ue]
    }), t[80] = Ue, t[81] = Ne, t[82] = We, t[83] = Ge) : Ge = t[83];
    let q = Ge,
        Ke = r.type === `product_agent` ? r.shopImageOrigin : void 0,
        qe;
    t[84] !== G || t[85] !== a || t[86] !== Ke ? (qe = Ke ? (0, $.jsxs)(`button`, {
        type: `button`,
        className: G,
        onClick: () => Ae(a, Ke),
        children: [(0, $.jsx)(de, {
            className: `icon`
        }), (0, $.jsx)(`span`, {
            className: `sr-only`,
            children: (0, $.jsx)(D, {
                id: `shopping.imageSidebar.product.back.label`,
                defaultMessage: `Back to results`
            })
        })]
    }) : void 0, t[84] = G, t[85] = a, t[86] = Ke, t[87] = qe) : qe = t[87];
    let J = qe;
    if (z) {
        let e;
        t[88] !== _ || t[89] !== M ? (e = (0, $.jsx)(`h1`, {
            className: `sr-only`,
            id: _,
            children: M
        }), t[88] = _, t[89] = M, t[90] = e) : e = t[90];
        let n;
        t[91] === H ? n = t[92] : (n = (0, $.jsx)(`div`, {
            ref: T,
            className: `min-h-0 min-w-0 flex-1 overflow-x-hidden overflow-y-auto`,
            children: H
        }), t[91] = H, t[92] = n);
        let r;
        t[93] === q ? r = t[94] : (r = (0, $.jsx)(`div`, {
            className: `pointer-events-auto flex items-center gap-2`,
            children: q
        }), t[93] = q, t[94] = r);
        let i;
        t[95] === G ? i = t[96] : (i = b(`pointer-events-auto`, G), t[95] = G, t[96] = i);
        let a;
        t[97] !== c || t[98] !== i ? (a = (0, $.jsx)(y, {
            ref: x,
            type: `button`,
            className: i,
            onClick: c
        }), t[97] = c, t[98] = i, t[99] = a) : a = t[99];
        let o;
        t[100] !== r || t[101] !== a ? (o = (0, $.jsxs)(`div`, {
            className: `pointer-events-none absolute inset-x-6 top-4 z-10 flex items-center justify-between sm:top-6`,
            children: [r, a]
        }), t[100] = r, t[101] = a, t[102] = o) : o = t[102];
        let s;
        return t[103] !== _ || t[104] !== B || t[105] !== e || t[106] !== n || t[107] !== o ? (s = (0, $.jsxs)(xe, {
            titleId: _,
            closeRef: x,
            className: `transform-gpu [--product-flyout-sticky-header-height:56px]`,
            children: [e, n, o]
        }, B), t[103] = _, t[104] = B, t[105] = e, t[106] = n, t[107] = o, t[108] = s) : s = t[108], s
    }
    switch (h) {
        case `sidebar`: {
            let e;
            t[109] !== q || t[110] !== J || t[111] !== M || t[112] !== V ? (e = e => {
                let {
                    handleClose: t
                } = e;
                return (0, $.jsx)(ae, {
                    name: `product-header`,
                    type: `primary`,
                    className: b(`flex h-14 items-center bg-transparent!`, V && `pointer-events-none`),
                    children: (0, $.jsx)(Ee, {
                        onClose: t,
                        isTransparent: V,
                        title: M,
                        actions: q,
                        leadingAction: J
                    })
                })
            }, t[109] = q, t[110] = J, t[111] = M, t[112] = V, t[113] = e) : e = t[113];
            let n;
            t[114] === g ? n = t[115] : (n = g.formatMessage({
                id: `region.sidebar.product`,
                defaultMessage: `Product details`
            }), t[114] = g, t[115] = n);
            let r;
            return t[116] !== c || t[117] !== B || t[118] !== H || t[119] !== e || t[120] !== n ? (r = (0, $.jsx)(se, {
                className: `[--product-flyout-sticky-header-height:56px]`,
                handleClose: c,
                onScroll: C,
                renderLeading: e,
                ariaLabel: n,
                children: H
            }, B), t[116] = c, t[117] = B, t[118] = H, t[119] = e, t[120] = n, t[121] = r) : r = t[121], r
        }
        case `modal`: {
            let e;
            t[122] !== q || t[123] !== J || t[124] !== c || t[125] !== M || t[126] !== V ? (e = (0, $.jsx)(Ee, {
                className: `absolute inset-x-0 top-0 z-10`,
                title: M,
                actions: q,
                leadingAction: J,
                isTransparent: V,
                usePageBackground: !1,
                onClose: c
            }), t[122] = q, t[123] = J, t[124] = c, t[125] = M, t[126] = V, t[127] = e) : e = t[127];
            let n;
            return t[128] !== c || t[129] !== M || t[130] !== B || t[131] !== H || t[132] !== e ? (n = (0, $.jsxs)(f, {
                testId: `modal-chat-screen-product-flyout`,
                className: `focus-none relative max-w-2xl shadow-none! outline-hidden [--product-flyout-sticky-header-height:56px]`,
                size: `custom`,
                type: `success`,
                position: `end`,
                noPadding: !0,
                title: M,
                visuallyHiddenHeader: !0,
                isOpen: !0,
                onClose: c,
                rootClassName: `z-0`,
                contentRef: T,
                children: [H, e]
            }, B), t[128] = c, t[129] = M, t[130] = B, t[131] = H, t[132] = e, t[133] = n) : n = t[133], n
        }
        case `fullscreen`: {
            let e;
            t[134] === H ? e = t[135] : (e = (0, $.jsx)(`div`, {
                ref: T,
                className: `h-full overflow-y-auto`,
                children: H
            }), t[134] = H, t[135] = e);
            let n;
            t[136] !== q || t[137] !== J || t[138] !== c || t[139] !== M || t[140] !== V ? (n = (0, $.jsx)(Ee, {
                className: `absolute inset-x-0 top-0 z-10`,
                title: M,
                actions: q,
                leadingAction: J,
                isTransparent: V,
                usePageBackground: !1,
                onClose: c
            }), t[136] = q, t[137] = J, t[138] = c, t[139] = M, t[140] = V, t[141] = n) : n = t[141];
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
    jt = A(), h(), d(), be(), o(), De(), V(), Te(), pe(), ke(), W(), oe(), ne(), i(), g(), S(), u(), C(), Q = n(k()), O(), ge(), G(), a(), Se(), ze(), Ct(), He(), $ = E()
}));
export {
    wt as n, Mt as r, Ot as t
};
//# sourceMappingURL=2d7ded63-invlfak3z66rky74.js.map