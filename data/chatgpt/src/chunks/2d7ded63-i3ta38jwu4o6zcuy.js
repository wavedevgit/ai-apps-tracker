import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as r,
    B6 as i,
    K8 as a,
    Kit as o,
    Nrt as s,
    Prt as c,
    b5 as l,
    cst as u,
    cw as d,
    fU as f,
    i5 as p,
    iat as m,
    iw as h,
    kT as g,
    ost as _,
    ow as v,
    pU as y,
    pnt as b,
    sst as x,
    sw as S,
    wst as C,
    y5 as w,
    ynt as T
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as E,
    Nn as D,
    Rn as O,
    Vn as k,
    wn as A,
    zn as ee
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    A8 as j,
    CHn as M,
    Dlt as N,
    E8 as P,
    I8 as F,
    L8 as te,
    LFn as ne,
    M8 as re,
    MFn as I,
    N8 as L,
    O8 as ie,
    THn as R,
    Tlt as ae,
    da as oe,
    fa as z,
    ia as B,
    j8 as se,
    k8 as ce,
    ra as le,
    wHn as ue
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Ax as de,
    Cv as fe,
    ap as pe,
    kx as V,
    mg as H,
    op as me,
    pg as he,
    wv as ge
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    Vd as _e,
    zd as ve
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    n as ye,
    t as be
} from "./02cd0121-kh96z36dsct983ay.js";
import {
    n as xe,
    t as Se
} from "./bd0b8304-el69xjqfj6a1his0.js";
import {
    n as Ce,
    t as we
} from "./fb0f45f8-ig64oanoox2gax1p.js";
import {
    i as U,
    n as Te
} from "./74d67c64-b7n6l5e5ddu3iy9c.js";
import {
    n as Ee,
    t as De
} from "./ff9bbca7-o607sf7rtpa7ql8v.js";
import {
    n as Oe,
    t as ke
} from "./e145c156-v90uz0y9rjbz0jnt.js";
import {
    n as Ae,
    t as je
} from "./ea63db5c-kmk2dttw10kvzl35.js";
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
} from "./2b67bcd8-nnsmutcvg2bqh4j8.js";
import {
    n as Be,
    t as Ve
} from "./ecdd5ba5-hmyispx1553jxjh4.js";
import {
    a as He,
    o as Ue
} from "./1362c49f-lrf664dsbb699ksf.js";
import {
    n as We,
    r as K
} from "./da07a0d0-ccfob8vb61npz264.js";

function Ge(e) {
    "use forget";
    let t = (0, qe.c)(30),
        {
            product_id: n,
            product_title: r,
            product_url: i,
            offer_urls: a,
            onClose: o,
            onBack: s,
            resetKey: l
        } = e,
        d = ee(),
        f = c(),
        {
            data: p
        } = L(_.CommerceProduct),
        m;
    t[0] === a ? m = t[1] : (m = a && a.length > 0 ? {
        offer_urls: JSON.stringify(a)
    } : {}, t[0] = a, t[1] = m);
    let h;
    t[2] !== r || t[3] !== i || t[4] !== m ? (h = {
        [x.EntityName]: r,
        [x.EntityUrl]: i,
        ...m
    }, t[2] = r, t[3] = i, t[4] = m, t[5] = h) : h = t[5];
    let v = re(d, n, _.CommerceProduct, u.Commerce, h),
        y = `Report ${r.length<=30?r:r.substring(0,27)+`...`}`,
        b;
    t[6] === s ? b = t[7] : (b = s ? (0, J.jsx)(g, {
        color: `secondary`,
        onClick: s,
        children: (0, J.jsx)(D, {
            id: `Vuk38f`,
            defaultMessage: `Back`
        })
    }) : void 0, t[6] = s, t[7] = b);
    let S = b,
        C;
    t[8] === p?.reasons ? C = t[9] : (C = p?.reasons ?? [], t[8] = p?.reasons, t[9] = C);
    let w = p?.header,
        T;
    t[10] !== S || t[11] !== o || t[12] !== l || t[13] !== v || t[14] !== C || t[15] !== w || t[16] !== y ? (T = {
        reasons: C,
        submitReport: v,
        title: y,
        onClose: o,
        header: w,
        footerSecondaryButton: S,
        resetKey: l
    }, t[10] = S, t[11] = o, t[12] = l, t[13] = v, t[14] = C, t[15] = w, t[16] = y, t[17] = T) : T = t[17];
    let E = j(T);
    if (f && p != null) return E;
    if (f) {
        let e = p?.header,
            n;
        t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, J.jsx)(D, {
            id: `IC6uIZ`,
            defaultMessage: `Loading report options...`
        }), t[18] = n) : n = t[18];
        let r;
        t[19] === e ? r = t[20] : (r = (0, J.jsx)(P, {
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
    t[26] === Symbol.for(`react.memo_cache_sentinel`) ? (k = (0, J.jsx)(g, {
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
    return t[0] !== n.body || t[1] !== n.primaryButton || t[2] !== n.secondaryButton || t[3] !== n.testId || t[4] !== n.title || t[5] !== e.onClose ? (r = (0, J.jsx)(h, {
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
    qe = A(), C(), r(), v(), ce(), s(), se(), O(), J = E()
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
            sellerShopId: i,
            onClose: a,
            onBack: o,
            resetKey: s
        } = e,
        l = ee(),
        d = c(),
        f;
    t[0] === l ? f = t[1] : (f = Xe(l), t[0] = l, t[1] = f);
    let p = f,
        m;
    t[2] === i ? m = t[3] : (m = i ? {
        shop_id: i
    } : {}, t[2] = i, t[3] = m);
    let h;
    t[4] !== n || t[5] !== r || t[6] !== m ? (h = {
        [x.EntityName]: n,
        [x.EntityUrl]: r,
        ...m
    }, t[4] = n, t[5] = r, t[6] = m, t[7] = h) : h = t[7];
    let v = re(l, r, _.CommerceSeller, u.Commerce, h),
        y = `Report ${n.length<=30?n:n.substring(0,27)+`...`}`,
        b;
    t[8] === o ? b = t[9] : (b = o ? (0, Y.jsx)(g, {
        color: `secondary`,
        onClick: o,
        children: (0, Y.jsx)(D, {
            id: `NXm4qA`,
            defaultMessage: `Back`
        })
    }) : void 0, t[8] = o, t[9] = b);
    let S = b,
        C;
    t[10] === l ? C = t[11] : (C = l.formatMessage({
        id: `report.seller.header`,
        defaultMessage: `Please tell us why you are reporting`
    }), t[10] = l, t[11] = C);
    let w;
    t[12] !== S || t[13] !== a || t[14] !== s || t[15] !== p || t[16] !== v || t[17] !== C || t[18] !== y ? (w = {
        reasons: p,
        submitReport: v,
        title: y,
        onClose: a,
        header: C,
        footerSecondaryButton: S,
        resetKey: s,
        buildSubmitPayload: rt
    }, t[12] = S, t[13] = a, t[14] = s, t[15] = p, t[16] = v, t[17] = C, t[18] = y, t[19] = w) : w = t[19];
    let T = j(w);
    if (d) return T;
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
    t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (O = (0, Y.jsx)(g, {
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
    it = A(), C(), r(), v(), ce(), s(), se(), O(), $e(), Y = E(), at = `seller_report_reason_category_id`, ot = `seller_report_reason_category_label`, st = `seller_report_reason_subcategory_id`, ct = `seller_report_reason_subcategory_label`
}));

function ut(e) {
    if (!e || e.length === 0) return [];
    let t = new Map;
    for (let n of e) {
        let e = ae(n),
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
            children: [(0, X.jsxs)(F.Root, {
                value: n,
                onValueChange: r,
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
                        className: w(!e && `text-token-text-tertiary`),
                        children: (0, X.jsx)(D, {
                            id: `LLBNns`,
                            defaultMessage: `Issue with seller`
                        })
                    }),
                    children: (0, X.jsx)(F.Indicator, {})
                })]
            }), !e && (0, X.jsx)(`div`, {
                className: `mt-3`,
                children: (0, X.jsx)(ie, {
                    children: (0, X.jsx)(D, {
                        id: `soN94U`,
                        defaultMessage: `No sellers are available to report for this product.`
                    })
                })
            })]
        }),
        primaryButton: (0, X.jsx)(g, {
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
            children: [(0, X.jsx)(P, {
                header: (0, X.jsx)(D, {
                    id: `uo+gFL`,
                    defaultMessage: `Select a seller`
                })
            }), (0, X.jsx)(F.Root, {
                value: r,
                onValueChange: e => a(e),
                className: `flex flex-col gap-3`,
                children: i.map(e => (0, X.jsx)(F.Item, {
                    value: e.selectionKey,
                    label: e.name,
                    children: (0, X.jsx)(F.Indicator, {})
                }, e.selectionKey))
            })]
        }),
        primaryButton: (0, X.jsx)(g, {
            color: `primary`,
            onClick: e,
            disabled: !n,
            children: (0, X.jsx)(D, {
                id: `6CCWxi`,
                defaultMessage: `Next`
            })
        }),
        secondaryButton: (0, X.jsx)(g, {
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
        [f, p] = (0, vt.useState)(),
        [m, g] = (0, vt.useState)(0),
        [_, v] = (0, vt.useState)(0),
        y;
    t[0] === o ? y = t[1] : (y = ut(o), t[0] = o, t[1] = y);
    let b = y,
        x = b.length > 0,
        S = b.find(e => e.selectionKey === f) ?? null,
        C;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (C = () => l(`issue_selection`), t[2] = C) : C = t[2];
    let w;
    t[3] !== a || t[4] !== s || t[5] !== m || t[6] !== n || t[7] !== r || t[8] !== i ? (w = {
        product_id: n,
        product_title: r,
        product_url: i,
        offer_urls: a,
        onClose: s,
        onBack: C,
        resetKey: m
    }, t[3] = a, t[4] = s, t[5] = m, t[6] = n, t[7] = r, t[8] = i, t[9] = w) : w = t[9];
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
                selectedSellerId: f,
                sellers: b,
                setSelectedSellerId: p
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
    return t[18] !== O.body || t[19] !== O.primaryButton || t[20] !== O.secondaryButton || t[21] !== O.testId || t[22] !== O.title || t[23] !== s ? (k = (0, X.jsx)(h, {
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
    _t = A(), r(), v(), ce(), te(), l(), vt = n(k()), O(), N(), Je(), lt(), X = E()
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
        [y, b] = (0, St.useState)(!1),
        x;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (x = e => {
        g(e)
    }, t[0] = x) : x = t[0];
    let S;
    t[1] === u ? S = t[2] : (S = w(`keyboard-focused:focus-ring hover:bg-token-bg-tertiary pointer-events-auto flex h-9 w-9 items-center justify-center rounded-lg transition-colors`, u), t[1] = u, t[2] = S);
    let C;
    t[3] === m ? C = t[4] : (C = m.formatMessage({
        id: `G4IkJB`,
        defaultMessage: `Open product options`
    }), t[3] = m, t[4] = C);
    let T;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (T = (0, Z.jsx)(V, {
        className: `icon`
    }), t[5] = T) : T = t[5];
    let E;
    t[6] !== S || t[7] !== C ? (E = (0, Z.jsx)(`button`, {
        type: `button`,
        className: S,
        "aria-label": C,
        "data-testid": `product-options-button`,
        children: T
    }), t[6] = S, t[7] = C, t[8] = E) : E = t[8];
    let O;
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (O = (0, Z.jsx)(ue.Item, {
        icon: H,
        onClick: () => {
            v(!0)
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
    t[12] === d ? A = t[13] : (A = d && (0, Z.jsx)(ue.Item, {
        icon: fe,
        onClick: () => {
            b(!0)
        },
        children: (0, Z.jsx)(D, {
            id: `thread.reportProduct`,
            defaultMessage: `Report`
        })
    }), t[12] = d, t[13] = A);
    let j;
    t[14] !== h || t[15] !== E || t[16] !== k || t[17] !== A ? (j = (0, Z.jsxs)(M, {
        open: h,
        onOpenChange: x,
        side: `bottom`,
        contentAlign: `start`,
        triggerButton: E,
        size: `auto`,
        children: [O, k, A]
    }), t[14] = h, t[15] = E, t[16] = k, t[17] = A, t[18] = j) : j = t[18];
    let N;
    t[19] !== a || t[20] !== s || t[21] !== _ || t[22] !== o || t[23] !== n || t[24] !== r || t[25] !== i ? (N = _ && (0, Z.jsx)(We, {
        clientThreadId: a,
        messageId: o,
        contentReferenceStartIndex: s,
        productId: n,
        productTitle: r,
        productUrl: i,
        onClose: () => v(!1)
    }), t[19] = a, t[20] = s, t[21] = _, t[22] = o, t[23] = n, t[24] = r, t[25] = i, t[26] = N) : N = t[26];
    let P;
    t[27] !== f || t[28] !== y || t[29] !== c || t[30] !== l || t[31] !== n || t[32] !== r || t[33] !== i ? (P = y && (f ? (0, Z.jsx)(mt, {
        productId: n,
        productTitle: r,
        productUrl: i,
        offerUrls: c,
        offers: l,
        onClose: () => b(!1)
    }) : (0, Z.jsx)(Ke, {
        product_id: n,
        product_title: r,
        product_url: i,
        offer_urls: c,
        onClose: () => b(!1)
    })), t[27] = f, t[28] = y, t[29] = c, t[30] = l, t[31] = n, t[32] = r, t[33] = i, t[34] = P) : P = t[34];
    let F;
    return t[35] !== N || t[36] !== P || t[37] !== j ? (F = (0, Z.jsxs)(Z.Fragment, {
        children: [j, N, P]
    }), t[35] = N, t[36] = P, t[37] = j, t[38] = F) : F = t[38], F
}
var xt, St, Z, Ct = e((() => {
        xt = A(), R(), de(), ge(), he(), ye(), K(), l(), St = n(k()), O(), yt(), Je(), Z = E()
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
    let u = p(l);
    if (!u) return null;
    let d;
    t[2] === n ? d = t[3] : (d = () => I(n), t[2] = n, t[3] = d);
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
            sidebar: r,
            initialVisibleOfferCount: i,
            type: s
        } = e,
        c = i === void 0 ? 3 : i,
        l = s === void 0 ? `sidebar` : s,
        u = ee(),
        [d, m] = (0, Q.useState)(0),
        {
            reference: _,
            messageId: v
        } = r,
        y;
    t[0] !== n || t[1] !== u.locale || t[2] !== v || t[3] !== _ ? (y = () => {
        if (!_) return;
        let e = !1,
            t = Le({
                conversation: n,
                sidebar: {
                    messageId: v,
                    reference: _
                },
                locale: u.locale
            });
        return t.completion.catch(() => {
            !e && a(() => G(n)) && f().danger(o)
        }), () => {
            e = !0, t.cancel()
        }
    }, t[0] = n, t[1] = u.locale, t[2] = v, t[3] = _, t[4] = y) : y = t[4];
    let b;
    t[5] !== n || t[6] !== u.locale || t[7] !== v || t[8] !== _ || t[9] !== d ? (b = [n, _, v, u.locale, d], t[5] = n, t[6] = u.locale, t[7] = v, t[8] = _, t[9] = d, t[10] = b) : b = t[10], (0, Q.useEffect)(y, b);
    let x;
    t[11] !== n || t[12] !== r.product ? (x = () => ({
        product: G(n) ?? r.product,
        referenceStatus: Pe(n)
    }), t[11] = n, t[12] = r.product, t[13] = x) : x = t[13];
    let {
        product: S,
        referenceStatus: C
    } = p(x);
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
            }), (0, $.jsx)(g, {
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
        }) : (0, $.jsx)(ke, {}), t[14] = C, t[15] = e);
        let r = e,
            i;
        return t[16] !== r || t[17] !== n || t[18] !== l ? (i = l === `sidebar` ? (0, $.jsx)(le, {
            ariaLabel: ``,
            handleClose: () => I(n),
            children: r
        }) : (0, $.jsx)(h, {
            isOpen: !0,
            showCloseButton: !0,
            onClose: () => I(n),
            children: r
        }), t[16] = r, t[17] = n, t[18] = l, t[19] = i) : i = t[19], i
    }
    let w;
    t[20] === n ? w = t[21] : (w = () => I(n), t[20] = n, t[21] = w);
    let T;
    return t[22] !== n || t[23] !== c || t[24] !== S || t[25] !== r || t[26] !== w || t[27] !== l ? (T = (0, $.jsx)(Ot, {
        product: S,
        sidebar: r,
        clientThreadId: n.id,
        conversation: n,
        handleCloseThreadSidebar: w,
        initialVisibleOfferCount: c,
        type: l
    }), t[22] = n, t[23] = c, t[24] = S, t[25] = r, t[26] = w, t[27] = l, t[28] = T) : T = t[28], T
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
            turnIndex: s,
            handleCloseThreadSidebar: l,
            onFollowUp: u,
            initialVisibleOfferCount: d,
            type: f
        } = e,
        m = d === void 0 ? 3 : d,
        g = f === void 0 ? `sidebar` : f,
        _ = ee(),
        v = (0, Q.useId)(),
        y = (0, Q.useRef)(null),
        [x, C] = (0, Q.useState)(0),
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
    } = p(E), j;
    t[3] !== o || t[4] !== n.title || t[5] !== O ? (j = () => {
        let e = Fe(o);
        return O === `source_catalog` ? e : e || n.title || ``
    }, t[3] = o, t[4] = n.title, t[5] = O, t[6] = j) : j = t[6];
    let M = p(j),
        N;
    t[7] === o ? N = t[8] : (N = () => Ie(o), t[7] = o, t[8] = N);
    let P = p(N),
        F;
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (F = () => {
        C(0)
    }, t[9] = F) : F = t[9];
    let te;
    t[10] === n.id ? te = t[11] : (te = [n.id], t[10] = n.id, t[11] = te), (0, Q.useEffect)(F, te);
    let ne, re;
    t[12] === g ? (ne = t[13], re = t[14]) : (ne = () => {
        if (g === `sidebar`) return;
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
    }, re = [g], t[12] = g, t[13] = ne, t[14] = re), (0, Q.useEffect)(ne, re);
    let {
        messageId: I,
        contentReferenceStartIndex: L,
        productIndex: ie
    } = r, R = r.type === `product_agent` ? r.publicEntityShareId : void 0, ae = g === `modal` && R != null, z = `${I}-${L}-${ie}`, B = P === -1 || x <= P, se = g === `sidebar`, ce = u ?? (R == null ? void 0 : l), ue = ae ? `aspect-square max-h-[50dvh]` : void 0, de = g !== `sidebar`, fe;
    t[15] !== i || t[16] !== L || t[17] !== o || t[18] !== m || t[19] !== I || t[20] !== n || t[21] !== ie || t[22] !== r || t[23] !== se || t[24] !== ce || t[25] !== ue || t[26] !== de || t[27] !== s ? (fe = (0, $.jsx)(Ve, {
        product: n,
        clientThreadId: i,
        messageId: I,
        contentReferenceStartIndex: L,
        turnIndex: s,
        productIndex: ie,
        conversation: o,
        offsetTopMargin: se,
        sidebar: r,
        onFollowUp: ce,
        galleryAspect: ue,
        isModal: de,
        interactionSource: r.interactionSource,
        initialVisibleOfferCount: m
    }), t[15] = i, t[16] = L, t[17] = o, t[18] = m, t[19] = I, t[20] = n, t[21] = ie, t[22] = r, t[23] = se, t[24] = ce, t[25] = ue, t[26] = de, t[27] = s, t[28] = fe) : fe = t[28];
    let V = fe,
        H, me;
    t[29] !== n.offers || t[30] !== O || t[31] !== k?.offers || t[32] !== A.offers ? (H = O === `source_catalog` ? k?.offers ?? [] : A.offers ?? n.offers ?? [], me = Array.from(new Set(H.map(At))).filter(kt), t[29] = n.offers, t[30] = O, t[31] = k?.offers, t[32] = A.offers, t[33] = H, t[34] = me) : (H = t[33], me = t[34]);
    let he = me,
        ge = he.length > 0,
        _e;
    t[35] === ge ? _e = t[36] : (_e = ge && b(`1961970013`), t[35] = ge, t[36] = _e);
    let ye = _e,
        be = ye,
        xe = r.type === `product_agent` ? r.libraryOrigin : void 0,
        Ce = xe != null,
        U = r.type === `product_agent` ? r.savedEntityRequest : void 0,
        Ee = r.type === `product_agent` && r.assistantMessageId !== void 0 ? r.assistantMessageId : I,
        Oe;
    if (t[37] !== o || t[38] !== I || t[39] !== n || t[40] !== O || t[41] !== U || t[42] !== r.product || t[43] !== r.type || t[44] !== A) {
        let e;
        t[46] !== o || t[47] !== I ? (e = () => Me(o, I), t[46] = o, t[47] = I, t[48] = e) : e = t[48];
        let i = a(e);
        Oe = O === `source_catalog` ? null : U ?? ve({
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
    t[51] !== W || t[52] !== Ee || t[53] !== o || t[54] !== I || t[55] !== R || t[56] !== ke || t[57] !== U ? (G = ke != null && (R == null || c()) ? (0, $.jsx)(He, {
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
        children: [(0, $.jsx)(pe, {
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
        t[88] !== v || t[89] !== M ? (e = (0, $.jsx)(`h1`, {
            className: `sr-only`,
            id: v,
            children: M
        }), t[88] = v, t[89] = M, t[90] = e) : e = t[90];
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
        t[95] === W ? i = t[96] : (i = w(`pointer-events-auto`, W), t[95] = W, t[96] = i);
        let a;
        t[97] !== l || t[98] !== i ? (a = (0, $.jsx)(S, {
            ref: y,
            type: `button`,
            className: i,
            onClick: l
        }), t[97] = l, t[98] = i, t[99] = a) : a = t[99];
        let o;
        t[100] !== r || t[101] !== a ? (o = (0, $.jsxs)(`div`, {
            className: `pointer-events-none absolute inset-x-6 top-4 z-10 flex items-center justify-between sm:top-6`,
            children: [r, a]
        }), t[100] = r, t[101] = a, t[102] = o) : o = t[102];
        let s;
        return t[103] !== v || t[104] !== z || t[105] !== e || t[106] !== n || t[107] !== o ? (s = (0, $.jsxs)(Se, {
            titleId: v,
            closeRef: y,
            className: `transform-gpu [--product-flyout-sticky-header-height:56px]`,
            children: [e, n, o]
        }, z), t[103] = v, t[104] = z, t[105] = e, t[106] = n, t[107] = o, t[108] = s) : s = t[108], s
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
                    className: w(`flex h-14 items-center bg-transparent!`, B && `pointer-events-none`),
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
            t[114] === _ ? n = t[115] : (n = _.formatMessage({
                id: `region.sidebar.product`,
                defaultMessage: `Product details`
            }), t[114] = _, t[115] = n);
            let r;
            return t[116] !== l || t[117] !== z || t[118] !== V || t[119] !== e || t[120] !== n ? (r = (0, $.jsx)(le, {
                className: `[--product-flyout-sticky-header-height:56px]`,
                handleClose: l,
                onScroll: C,
                renderLeading: e,
                ariaLabel: n,
                children: V
            }, z), t[116] = l, t[117] = z, t[118] = V, t[119] = e, t[120] = n, t[121] = r) : r = t[121], r
        }
        case `modal`: {
            let e;
            t[122] !== q || t[123] !== J || t[124] !== l || t[125] !== M || t[126] !== B ? (e = (0, $.jsx)(De, {
                className: `absolute inset-x-0 top-0 z-10`,
                title: M,
                actions: q,
                leadingAction: J,
                isTransparent: B,
                usePageBackground: !1,
                onClose: l
            }), t[122] = q, t[123] = J, t[124] = l, t[125] = M, t[126] = B, t[127] = e) : e = t[127];
            let n;
            return t[128] !== l || t[129] !== M || t[130] !== z || t[131] !== V || t[132] !== e ? (n = (0, $.jsxs)(h, {
                testId: `modal-chat-screen-product-flyout`,
                className: `focus-none relative max-w-2xl shadow-none! outline-hidden [--product-flyout-sticky-header-height:56px]`,
                size: `custom`,
                type: `success`,
                position: `end`,
                noPadding: !0,
                title: M,
                visuallyHiddenHeader: !0,
                isOpen: !0,
                onClose: l,
                rootClassName: `z-0`,
                contentRef: T,
                children: [V, e]
            }, z), t[128] = l, t[129] = M, t[130] = z, t[131] = V, t[132] = e, t[133] = n) : n = t[133], n
        }
        case `fullscreen`: {
            let e;
            t[134] === V ? e = t[135] : (e = (0, $.jsx)(`div`, {
                ref: T,
                className: `h-full overflow-y-auto`,
                children: V
            }), t[134] = V, t[135] = e);
            let n;
            t[136] !== q || t[137] !== J || t[138] !== l || t[139] !== M || t[140] !== B ? (n = (0, $.jsx)(De, {
                className: `absolute inset-x-0 top-0 z-10`,
                title: M,
                actions: q,
                leadingAction: J,
                isTransparent: B,
                usePageBackground: !1,
                onClose: l
            }), t[136] = q, t[137] = J, t[138] = l, t[139] = M, t[140] = B, t[141] = n) : n = t[141];
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
    jt = A(), r(), d(), xe(), v(), Oe(), z(), Ee(), me(), Ae(), U(), B(), ne(), i(), T(), m(), y(), l(), Q = n(k()), O(), _e(), W(), s(), Ce(), Be(), Ct(), Ue(), $ = E()
}));
export {
    wt as n, Mt as r, Ot as t
};
//# sourceMappingURL=2d7ded63-i3ta38jwu4o6zcuy.js.map