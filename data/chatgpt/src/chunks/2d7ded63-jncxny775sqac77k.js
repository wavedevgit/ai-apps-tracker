import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as r,
    Aw as i,
    Bat as a,
    Dit as o,
    F5 as s,
    IU as c,
    LU as l,
    Mw as u,
    Oit as d,
    Ow as f,
    Qat as p,
    c7 as m,
    eE as h,
    ect as g,
    jw as _,
    k8 as v,
    l7 as y,
    nct as b,
    prt as x,
    q5 as S,
    srt as C,
    tct as w,
    vct as T
} from "./4813494d-itnrgnth03y1sm9d.js";
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
    Dlt as M,
    F8 as N,
    I8 as P,
    L8 as te,
    N8 as ne,
    R8 as re,
    Tlt as ie,
    U8 as F,
    W8 as I,
    _In as ae,
    da as oe,
    eUn as L,
    fIn as R,
    fa as z,
    ia as B,
    nUn as se,
    ra as ce,
    tUn as le,
    z8 as ue
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    Ax as de,
    ap as fe,
    bv as pe,
    kx as V,
    mg as H,
    op as me,
    pg as he,
    xv as ge
} from "./30901919-ikyi1r55w2i02fom.js";
import {
    Hd as _e,
    Wd as ve
} from "./8b34dbc2-m4883pai3e8fx8q6.js";
import {
    n as ye,
    t as be
} from "./02cd0121-l4b0nh21cln23gkm.js";
import {
    n as xe,
    t as Se
} from "./bd0b8304-bqv15v73bxdw7ii8.js";
import {
    n as Ce,
    t as we
} from "./fb0f45f8-ktdslx7t2r29c0zy.js";
import {
    i as U,
    n as Te
} from "./74d67c64-nnao7gq77e2fjj6g.js";
import {
    n as Ee,
    t as De
} from "./ff9bbca7-au7szfus7j2axt5q.js";
import {
    n as Oe,
    t as ke
} from "./e145c156-zn63pee33i9dagti.js";
import {
    n as Ae,
    t as je
} from "./ea63db5c-ea3srllyzdek6qo3.js";
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
} from "./2b67bcd8-pdc70myf240vjt6d.js";
import {
    n as Be,
    t as Ve
} from "./ecdd5ba5-e56qiuhph1e6k8qk.js";
import {
    a as He,
    o as Ue
} from "./1362c49f-c4fxh2axsxvjt8we.js";
import {
    n as We,
    r as K
} from "./da07a0d0-j7qful2a5j62uz3y.js";

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
        f = d(),
        {
            data: p
        } = j(g.CommerceProduct),
        m;
    t[0] === o ? m = t[1] : (m = o && o.length > 0 ? {
        offer_urls: JSON.stringify(o)
    } : {}, t[0] = o, t[1] = m);
    let h;
    t[2] !== i || t[3] !== a || t[4] !== m ? (h = {
        [w.EntityName]: i,
        [w.EntityUrl]: a,
        ...m
    }, t[2] = i, t[3] = a, t[4] = m, t[5] = h) : h = t[5];
    let _ = ue(u, n, g.CommerceProduct, b.Commerce, h),
        v = `Report ${i.length<=30?i:i.substring(0,27)+`...`}`,
        y;
    t[6] === c ? y = t[7] : (y = c ? (0, J.jsx)(r, {
        color: `secondary`,
        onClick: c,
        children: (0, J.jsx)(D, {
            id: `Vuk38f`,
            defaultMessage: `Back`
        })
    }) : void 0, t[6] = c, t[7] = y);
    let x = y,
        S;
    t[8] === p?.reasons ? S = t[9] : (S = p?.reasons ?? [], t[8] = p?.reasons, t[9] = S);
    let C = p?.header,
        T;
    t[10] !== x || t[11] !== s || t[12] !== l || t[13] !== _ || t[14] !== S || t[15] !== C || t[16] !== v ? (T = {
        reasons: S,
        submitReport: _,
        title: v,
        onClose: s,
        header: C,
        footerSecondaryButton: x,
        resetKey: l
    }, t[10] = x, t[11] = s, t[12] = l, t[13] = _, t[14] = S, t[15] = C, t[16] = v, t[17] = T) : T = t[17];
    let E = te(T);
    if (f && p != null) return E;
    if (f) {
        let e = p?.header,
            n;
        t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, J.jsx)(D, {
            id: `IC6uIZ`,
            defaultMessage: `Loading report options...`
        }), t[18] = n) : n = t[18];
        let r;
        t[19] === e ? r = t[20] : (r = (0, J.jsx)(ne, {
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
    t[26] === Symbol.for(`react.memo_cache_sentinel`) ? (k = (0, J.jsx)(r, {
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
    qe = A(), T(), h(), i(), P(), o(), re(), O(), J = E()
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
        u = d(),
        f;
    t[0] === l ? f = t[1] : (f = Xe(l), t[0] = l, t[1] = f);
    let p = f,
        m;
    t[2] === a ? m = t[3] : (m = a ? {
        shop_id: a
    } : {}, t[2] = a, t[3] = m);
    let h;
    t[4] !== n || t[5] !== i || t[6] !== m ? (h = {
        [w.EntityName]: n,
        [w.EntityUrl]: i,
        ...m
    }, t[4] = n, t[5] = i, t[6] = m, t[7] = h) : h = t[7];
    let _ = ue(l, i, g.CommerceSeller, b.Commerce, h),
        v = `Report ${n.length<=30?n:n.substring(0,27)+`...`}`,
        y;
    t[8] === s ? y = t[9] : (y = s ? (0, Y.jsx)(r, {
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
    t[12] !== x || t[13] !== o || t[14] !== c || t[15] !== p || t[16] !== _ || t[17] !== S || t[18] !== v ? (C = {
        reasons: p,
        submitReport: _,
        title: v,
        onClose: o,
        header: S,
        footerSecondaryButton: x,
        resetKey: c,
        buildSubmitPayload: rt
    }, t[12] = x, t[13] = o, t[14] = c, t[15] = p, t[16] = _, t[17] = S, t[18] = v, t[19] = C) : C = t[19];
    let T = te(C);
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
    it = A(), T(), h(), i(), P(), o(), re(), O(), $e(), Y = E(), at = `seller_report_reason_category_id`, ot = `seller_report_reason_category_label`, st = `seller_report_reason_subcategory_id`, ct = `seller_report_reason_subcategory_label`
}));

function ut(e) {
    if (!e || e.length === 0) return [];
    let t = new Map;
    for (let n of e) {
        let e = ie(n),
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
            children: [(0, X.jsxs)(F.Root, {
                value: n,
                onValueChange: i,
                className: `flex flex-col gap-3`,
                children: [(0, X.jsx)(F.Item, {
                    value: `product`,
                    label: (0, X.jsx)(D, {
                        id: `Z7zGTf`,
                        defaultMessage: `Issue with product`
                    }),
                    children: (0, X.jsx)(F.Indicator, {})
                }), (0, X.jsx)(F.Item, {
                    value: `seller`,
                    disabled: !e,
                    label: (0, X.jsx)(`span`, {
                        className: m(!e && `text-token-text-tertiary`),
                        children: (0, X.jsx)(D, {
                            id: `LLBNns`,
                            defaultMessage: `Issue with seller`
                        })
                    }),
                    children: (0, X.jsx)(F.Indicator, {})
                })]
            }), !e && (0, X.jsx)(`div`, {
                className: `mt-3`,
                children: (0, X.jsx)(N, {
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
            children: [(0, X.jsx)(ne, {
                header: (0, X.jsx)(D, {
                    id: `uo+gFL`,
                    defaultMessage: `Select a seller`
                })
            }), (0, X.jsx)(F.Root, {
                value: i,
                onValueChange: e => o(e),
                className: `flex flex-col gap-3`,
                children: a.map(e => (0, X.jsx)(F.Item, {
                    value: e.selectionKey,
                    label: e.name,
                    children: (0, X.jsx)(F.Indicator, {})
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
    _t = A(), h(), i(), P(), I(), y(), vt = n(k()), O(), M(), Je(), lt(), X = E()
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
        h = ee(),
        [g, _] = (0, St.useState)(!1),
        [v, y] = (0, St.useState)(!1),
        [b, x] = (0, St.useState)(!1),
        S;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (S = e => {
        _(e)
    }, t[0] = S) : S = t[0];
    let C;
    t[1] === u ? C = t[2] : (C = m(`keyboard-focused:focus-ring hover:bg-token-bg-tertiary pointer-events-auto flex h-9 w-9 items-center justify-center rounded-lg transition-colors`, u), t[1] = u, t[2] = C);
    let w;
    t[3] === h ? w = t[4] : (w = h.formatMessage({
        id: `G4IkJB`,
        defaultMessage: `Open product options`
    }), t[3] = h, t[4] = w);
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
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (O = (0, Z.jsx)(le.Item, {
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
    t[12] === d ? A = t[13] : (A = d && (0, Z.jsx)(le.Item, {
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
    t[14] !== g || t[15] !== E || t[16] !== k || t[17] !== A ? (j = (0, Z.jsxs)(L, {
        open: g,
        onOpenChange: S,
        side: `bottom`,
        contentAlign: `start`,
        triggerButton: E,
        size: `auto`,
        children: [O, k, A]
    }), t[14] = g, t[15] = E, t[16] = k, t[17] = A, t[18] = j) : j = t[18];
    let M;
    t[19] !== a || t[20] !== s || t[21] !== v || t[22] !== o || t[23] !== n || t[24] !== r || t[25] !== i ? (M = v && (0, Z.jsx)(We, {
        clientThreadId: a,
        messageId: o,
        contentReferenceStartIndex: s,
        productId: n,
        productTitle: r,
        productUrl: i,
        onClose: () => y(!1)
    }), t[19] = a, t[20] = s, t[21] = v, t[22] = o, t[23] = n, t[24] = r, t[25] = i, t[26] = M) : M = t[26];
    let N;
    t[27] !== f || t[28] !== b || t[29] !== c || t[30] !== l || t[31] !== n || t[32] !== r || t[33] !== i ? (N = b && (f ? (0, Z.jsx)(mt, {
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
    })), t[27] = f, t[28] = b, t[29] = c, t[30] = l, t[31] = n, t[32] = r, t[33] = i, t[34] = N) : N = t[34];
    let P;
    return t[35] !== M || t[36] !== N || t[37] !== j ? (P = (0, Z.jsxs)(Z.Fragment, {
        children: [j, M, N]
    }), t[35] = M, t[36] = N, t[37] = j, t[38] = P) : P = t[38], P
}
var xt, St, Z, Ct = e((() => {
        xt = A(), se(), de(), ge(), he(), ye(), K(), y(), St = n(k()), O(), yt(), Je(), Z = E()
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
    let u = S(l);
    if (!u) return null;
    let d;
    t[2] === n ? d = t[3] : (d = () => R(n), t[2] = n, t[3] = d);
    let f;
    return t[4] !== n || t[5] !== o || t[6] !== u || t[7] !== r || t[8] !== d || t[9] !== c || t[10] !== s ? (f = (0, $.jsx)(Ot, {
        product: u,
        sidebar: r,
        clientThreadId: n.id,
        conversation: n,
        turnIndex: c,
        handleCloseThreadSidebar: d,
        initialVisibleOfferCount: o,
        type: s
    }), t[4] = n, t[5] = o, t[6] = u, t[7] = r, t[8] = d, t[9] = c, t[10] = s, t[11] = f) : f = t[11], f
}

function Et(e) {
    "use forget";
    let t = (0, jt.c)(29),
        {
            conversation: n,
            sidebar: i,
            initialVisibleOfferCount: o,
            type: l
        } = e,
        u = o === void 0 ? 3 : o,
        d = l === void 0 ? `sidebar` : l,
        p = ee(),
        [m, h] = (0, Q.useState)(0),
        {
            reference: g,
            messageId: _
        } = i,
        v;
    t[0] !== n || t[1] !== p.locale || t[2] !== _ || t[3] !== g ? (v = () => {
        if (!g) return;
        let e = !1,
            t = Le({
                conversation: n,
                sidebar: {
                    messageId: _,
                    reference: g
                },
                locale: p.locale
            });
        return t.completion.catch(() => {
            !e && s(() => G(n)) && c().danger(a)
        }), () => {
            e = !0, t.cancel()
        }
    }, t[0] = n, t[1] = p.locale, t[2] = _, t[3] = g, t[4] = v) : v = t[4];
    let y;
    t[5] !== n || t[6] !== p.locale || t[7] !== _ || t[8] !== g || t[9] !== m ? (y = [n, g, _, p.locale, m], t[5] = n, t[6] = p.locale, t[7] = _, t[8] = g, t[9] = m, t[10] = y) : y = t[10], (0, Q.useEffect)(v, y);
    let b;
    t[11] !== n || t[12] !== i.product ? (b = () => ({
        product: G(n) ?? i.product,
        referenceStatus: Pe(n)
    }), t[11] = n, t[12] = i.product, t[13] = b) : b = t[13];
    let {
        product: x,
        referenceStatus: C
    } = S(b);
    if (!x) {
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
                onClick: () => h(Dt),
                children: (0, $.jsx)(D, {
                    id: `chatgpt.search.product_details.reference.error.retry_button.label`,
                    defaultMessage: `Try again`
                })
            })]
        }) : (0, $.jsx)(ke, {}), t[14] = C, t[15] = e);
        let i = e,
            a;
        return t[16] !== i || t[17] !== n || t[18] !== d ? (a = d === `sidebar` ? (0, $.jsx)(ce, {
            ariaLabel: ``,
            handleClose: () => R(n),
            children: i
        }) : (0, $.jsx)(f, {
            isOpen: !0,
            showCloseButton: !0,
            onClose: () => R(n),
            children: i
        }), t[16] = i, t[17] = n, t[18] = d, t[19] = a) : a = t[19], a
    }
    let w;
    t[20] === n ? w = t[21] : (w = () => R(n), t[20] = n, t[21] = w);
    let T;
    return t[22] !== n || t[23] !== u || t[24] !== x || t[25] !== i || t[26] !== w || t[27] !== d ? (T = (0, $.jsx)(Ot, {
        product: x,
        sidebar: i,
        clientThreadId: n.id,
        conversation: n,
        handleCloseThreadSidebar: w,
        initialVisibleOfferCount: u,
        type: d
    }), t[22] = n, t[23] = u, t[24] = x, t[25] = i, t[26] = w, t[27] = d, t[28] = T) : T = t[28], T
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
            onFollowUp: l,
            initialVisibleOfferCount: u,
            type: p
        } = e,
        h = u === void 0 ? 3 : u,
        g = p === void 0 ? `sidebar` : p,
        v = ee(),
        y = (0, Q.useId)(),
        b = (0, Q.useRef)(null),
        [x, w] = (0, Q.useState)(0),
        T = (0, Q.useRef)(null),
        E;
    t[0] !== a || t[1] !== n ? (E = () => {
        let e = Ne(a),
            t = Re(a);
        return {
            productDetailDataScope: e,
            resolvedProductDetailData: ze(a),
            statefulProduct: t ?? n
        }
    }, t[0] = a, t[1] = n, t[2] = E) : E = t[2];
    let {
        productDetailDataScope: O,
        resolvedProductDetailData: k,
        statefulProduct: A
    } = S(E), j;
    t[3] !== a || t[4] !== n.title || t[5] !== O ? (j = () => {
        let e = Fe(a);
        return O === `source_catalog` ? e : e || n.title || ``
    }, t[3] = a, t[4] = n.title, t[5] = O, t[6] = j) : j = t[6];
    let M = S(j),
        N;
    t[7] === a ? N = t[8] : (N = () => Ie(a), t[7] = a, t[8] = N);
    let P = S(N),
        te;
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (te = () => {
        w(0)
    }, t[9] = te) : te = t[9];
    let ne;
    t[10] === n.id ? ne = t[11] : (ne = [n.id], t[10] = n.id, t[11] = ne), (0, Q.useEffect)(te, ne);
    let re, ie;
    t[12] === g ? (re = t[13], ie = t[14]) : (re = () => {
        if (g === `sidebar`) return;
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
    }, ie = [g], t[12] = g, t[13] = re, t[14] = ie), (0, Q.useEffect)(re, ie);
    let {
        messageId: F,
        contentReferenceStartIndex: I,
        productIndex: ae
    } = r, L = r.type === `product_agent` ? r.publicEntityShareId : void 0, R = g === `modal` && L != null, z = `${F}-${I}-${ae}`, B = P === -1 || x <= P, se = g === `sidebar`, le = l ?? (L == null ? void 0 : c), ue = R ? `aspect-square max-h-[50dvh]` : void 0, de = g !== `sidebar`, pe;
    t[15] !== i || t[16] !== I || t[17] !== a || t[18] !== h || t[19] !== F || t[20] !== n || t[21] !== ae || t[22] !== r || t[23] !== se || t[24] !== le || t[25] !== ue || t[26] !== de || t[27] !== o ? (pe = (0, $.jsx)(Ve, {
        product: n,
        clientThreadId: i,
        messageId: F,
        contentReferenceStartIndex: I,
        turnIndex: o,
        productIndex: ae,
        conversation: a,
        offsetTopMargin: se,
        sidebar: r,
        onFollowUp: le,
        galleryAspect: ue,
        isModal: de,
        interactionSource: r.interactionSource,
        initialVisibleOfferCount: h
    }), t[15] = i, t[16] = I, t[17] = a, t[18] = h, t[19] = F, t[20] = n, t[21] = ae, t[22] = r, t[23] = se, t[24] = le, t[25] = ue, t[26] = de, t[27] = o, t[28] = pe) : pe = t[28];
    let V = pe,
        H, me;
    t[29] !== n.offers || t[30] !== O || t[31] !== k?.offers || t[32] !== A.offers ? (H = O === `source_catalog` ? k?.offers ?? [] : A.offers ?? n.offers ?? [], me = Array.from(new Set(H.map(At))).filter(kt), t[29] = n.offers, t[30] = O, t[31] = k?.offers, t[32] = A.offers, t[33] = H, t[34] = me) : (H = t[33], me = t[34]);
    let he = me,
        ge = he.length > 0,
        ve;
    t[35] === ge ? ve = t[36] : (ve = ge && C(`1961970013`), t[35] = ge, t[36] = ve);
    let ye = ve,
        be = ye,
        xe = r.type === `product_agent` ? r.libraryOrigin : void 0,
        Ce = xe != null,
        U = r.type === `product_agent` ? r.savedEntityRequest : void 0,
        Ee = r.type === `product_agent` && r.assistantMessageId !== void 0 ? r.assistantMessageId : F,
        Oe;
    if (t[37] !== a || t[38] !== F || t[39] !== n || t[40] !== O || t[41] !== U || t[42] !== r.product || t[43] !== r.type || t[44] !== A) {
        let e;
        t[46] !== a || t[47] !== F ? (e = () => Me(a, F), t[46] = a, t[47] = F, t[48] = e) : e = t[48];
        let i = s(e);
        Oe = O === `source_catalog` ? null : U ?? _e({
            product: r.type === `product_agent` ? r.product ?? n : A,
            fallbackProduct: n,
            sidebarQuery: n.title,
            rewrittenQueries: i
        }), t[37] = a, t[38] = F, t[39] = n, t[40] = O, t[41] = U, t[42] = r.product, t[43] = r.type, t[44] = A, t[45] = Oe
    } else Oe = t[45];
    let ke = Oe,
        Ae;
    t[49] === R ? Ae = t[50] : (Ae = R ? `bg-token-bg-primary/60 hover:bg-token-bg-primary/70 h-9! w-9! shrink-0 rounded-lg! backdrop-blur-xl backdrop-filter` : Te(), t[49] = R, t[50] = Ae);
    let W = Ae,
        G;
    t[51] !== W || t[52] !== Ee || t[53] !== a || t[54] !== F || t[55] !== L || t[56] !== ke || t[57] !== U ? (G = ke != null && (L == null || d()) ? (0, $.jsx)(He, {
        analyticsSource: L == null ? U == null ? `conversation` : `library` : `unknown`,
        className: W,
        request: ke,
        clientThreadId: L == null ? a.id : void 0,
        messageId: L == null ? F : void 0,
        assistantMessageId: U == null && L == null ? Ee ?? void 0 : void 0
    }) : void 0, t[51] = W, t[52] = Ee, t[53] = a, t[54] = F, t[55] = L, t[56] = ke, t[57] = U, t[58] = G) : G = t[58];
    let Pe = G,
        Le = A.url ?? ``,
        Be = Ce ? xe : void 0,
        Ue;
    t[59] !== W || t[60] !== i || t[61] !== I || t[62] !== ye || t[63] !== be || t[64] !== F || t[65] !== he || t[66] !== H || t[67] !== A.id || t[68] !== A.title || t[69] !== Le || t[70] !== Be ? (Ue = (0, $.jsx)(bt, {
        product_id: A.id,
        product_title: A.title,
        product_url: Le,
        clientThreadId: i,
        messageId: F,
        contentReferenceStartIndex: I,
        offer_urls: he,
        offers: H,
        className: W,
        enableReporting: ye,
        enableSellerReporting: be,
        libraryOrigin: Be
    }), t[59] = W, t[60] = i, t[61] = I, t[62] = ye, t[63] = be, t[64] = F, t[65] = he, t[66] = H, t[67] = A.id, t[68] = A.title, t[69] = Le, t[70] = Be, t[71] = Ue) : Ue = t[71];
    let We = Ue,
        K;
    t[72] !== W || t[73] !== n || t[74] !== O || t[75] !== L || t[76] !== r.product || t[77] !== r.type || t[78] !== A ? (K = O !== `source_catalog` && (0, $.jsx)(we, {
        product: r.type === `product_agent` ? r.product ?? n : A,
        hydratedProduct: A,
        publicEntityShareId: L,
        className: W
    }), t[72] = W, t[73] = n, t[74] = O, t[75] = L, t[76] = r.product, t[77] = r.type, t[78] = A, t[79] = K) : K = t[79];
    let Ge;
    t[80] !== We || t[81] !== Pe || t[82] !== K ? (Ge = (0, $.jsxs)($.Fragment, {
        children: [Pe, K, We]
    }), t[80] = We, t[81] = Pe, t[82] = K, t[83] = Ge) : Ge = t[83];
    let q = Ge,
        Ke = r.type === `product_agent` ? r.shopImageOrigin : void 0,
        qe;
    t[84] !== W || t[85] !== a || t[86] !== Ke ? (qe = Ke ? (0, $.jsxs)(`button`, {
        type: `button`,
        className: W,
        onClick: () => je(a, Ke),
        children: [(0, $.jsx)(fe, {
            className: `icon`
        }), (0, $.jsx)(`span`, {
            className: `sr-only`,
            children: (0, $.jsx)(D, {
                id: `shopping.imageSidebar.product.back.label`,
                defaultMessage: `Back to results`
            })
        })]
    }) : void 0, t[84] = W, t[85] = a, t[86] = Ke, t[87] = qe) : qe = t[87];
    let J = qe;
    if (R) {
        let e;
        t[88] !== y || t[89] !== M ? (e = (0, $.jsx)(`h1`, {
            className: `sr-only`,
            id: y,
            children: M
        }), t[88] = y, t[89] = M, t[90] = e) : e = t[90];
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
        t[95] === W ? i = t[96] : (i = m(`pointer-events-auto`, W), t[95] = W, t[96] = i);
        let a;
        t[97] !== c || t[98] !== i ? (a = (0, $.jsx)(_, {
            ref: b,
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
        return t[103] !== y || t[104] !== z || t[105] !== e || t[106] !== n || t[107] !== o ? (s = (0, $.jsxs)(Se, {
            titleId: y,
            closeRef: b,
            className: `transform-gpu [--product-flyout-sticky-header-height:56px]`,
            children: [e, n, o]
        }, z), t[103] = y, t[104] = z, t[105] = e, t[106] = n, t[107] = o, t[108] = s) : s = t[108], s
    }
    switch (g) {
        case `sidebar`: {
            let e;
            t[109] !== q || t[110] !== J || t[111] !== M || t[112] !== B ? (e = e => {
                let {
                    handleClose: t
                } = e;
                return (0, $.jsx)(oe, {
                    name: `product-header`,
                    type: `primary`,
                    className: m(`flex h-14 items-center bg-transparent!`, B && `pointer-events-none`),
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
            t[114] === v ? n = t[115] : (n = v.formatMessage({
                id: `region.sidebar.product`,
                defaultMessage: `Product details`
            }), t[114] = v, t[115] = n);
            let r;
            return t[116] !== c || t[117] !== z || t[118] !== V || t[119] !== e || t[120] !== n ? (r = (0, $.jsx)(ce, {
                className: `[--product-flyout-sticky-header-height:56px]`,
                handleClose: c,
                onScroll: w,
                renderLeading: e,
                ariaLabel: n,
                children: V
            }, z), t[116] = c, t[117] = z, t[118] = V, t[119] = e, t[120] = n, t[121] = r) : r = t[121], r
        }
        case `modal`: {
            let e;
            t[122] !== q || t[123] !== J || t[124] !== c || t[125] !== M || t[126] !== B ? (e = (0, $.jsx)(De, {
                className: `absolute inset-x-0 top-0 z-10`,
                title: M,
                actions: q,
                leadingAction: J,
                isTransparent: B,
                usePageBackground: !1,
                onClose: c
            }), t[122] = q, t[123] = J, t[124] = c, t[125] = M, t[126] = B, t[127] = e) : e = t[127];
            let n;
            return t[128] !== c || t[129] !== M || t[130] !== z || t[131] !== V || t[132] !== e ? (n = (0, $.jsxs)(f, {
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
                children: [V, e]
            }, z), t[128] = c, t[129] = M, t[130] = z, t[131] = V, t[132] = e, t[133] = n) : n = t[133], n
        }
        case `fullscreen`: {
            let e;
            t[134] === V ? e = t[135] : (e = (0, $.jsx)(`div`, {
                ref: T,
                className: `h-full overflow-y-auto`,
                children: V
            }), t[134] = V, t[135] = e);
            let n;
            t[136] !== q || t[137] !== J || t[138] !== c || t[139] !== M || t[140] !== B ? (n = (0, $.jsx)(De, {
                className: `absolute inset-x-0 top-0 z-10`,
                title: M,
                actions: q,
                leadingAction: J,
                isTransparent: B,
                usePageBackground: !1,
                onClose: c
            }), t[136] = q, t[137] = J, t[138] = c, t[139] = M, t[140] = B, t[141] = n) : n = t[141];
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
    jt = A(), h(), u(), xe(), i(), Oe(), z(), Ee(), me(), Ae(), U(), B(), ae(), v(), x(), p(), l(), y(), Q = n(k()), O(), ve(), W(), o(), Ce(), Be(), Ct(), Ue(), $ = E()
}));
export {
    wt as n, Mt as r, Ot as t
};
//# sourceMappingURL=2d7ded63-jncxny775sqac77k.js.map