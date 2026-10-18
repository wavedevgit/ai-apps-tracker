import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    C1 as t,
    b5 as n,
    dz as r,
    fz as i,
    u1 as a,
    y5 as o
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as s,
    Bn as c,
    Ln as l,
    Nn as u,
    Rn as d,
    Ut as f,
    lt as p,
    wn as m,
    zn as h
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    l1 as g,
    u1 as _
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Qo as v,
    Xv as y,
    Yo as b,
    Zo as x,
    Zv as S,
    is as C,
    rs as w,
    ts as T
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    n as E,
    t as D
} from "./9f2e6d33-favh86igrrldl3up.js";
import {
    r as O,
    t as k
} from "./8c6976e5-ibz7fcap50r267b6.js";

function A() {
    "use forget";
    let e = (0, U.c)(46),
        n = h(),
        i = t()?.id,
        a = _(i),
        o, s, c, l, d, f, p;
    if (e[0] !== a.data?.data || e[1] !== a.isError || e[2] !== a.isLoading || e[3] !== n) {
        let t = [...a.data?.data ?? []].sort(j).slice(0, G),
            i;
        e[11] === n ? i = e[12] : (i = n.formatMessage(J.browserTitle), e[11] = n, e[12] = i), e[13] === i ? f = e[14] : (f = (0, W.jsx)(D, {
            children: (0, W.jsx)(`title`, {
                children: i
            })
        }), e[13] = i, e[14] = f);
        let m;
        e[15] === n ? m = e[16] : (m = n.formatMessage(J.billingBreadcrumb), e[15] = n, e[16] = m);
        let h;
        e[17] === m ? h = e[18] : (h = {
            label: m,
            href: `/admin/billing`
        }, e[17] = m, e[18] = h);
        let g;
        e[19] === n ? g = e[20] : (g = n.formatMessage(J.pageTitle), e[19] = n, e[20] = g);
        let _;
        e[21] === g ? _ = e[22] : (_ = {
            label: g
        }, e[21] = g, e[22] = _);
        let x;
        e[23] !== _ || e[24] !== h ? (x = (0, W.jsx)(w, {
            items: [h, _]
        }), e[23] = _, e[24] = h, e[25] = x) : x = e[25];
        let S;
        e[26] === n ? S = e[27] : (S = n.formatMessage(J.pageTitle), e[26] = n, e[27] = S);
        let C;
        e[28] === n ? C = e[29] : (C = n.formatMessage(J.pageSubtitle), e[28] = n, e[29] = C), e[30] !== x || e[31] !== S || e[32] !== C ? (p = (0, W.jsx)(T, {
            navigation: x,
            title: S,
            subtitle: C
        }), e[30] = x, e[31] = S, e[32] = C, e[33] = p) : p = e[33], o = v, l = !1, d = `pb-10`, s = `mt-6`, c = a.isLoading ? (0, W.jsx)(`div`, {
            className: `flex min-h-[40vh] items-center justify-center`,
            children: (0, W.jsx)(r, {})
        }) : a.isError ? (0, W.jsx)(b, {
            className: `text-token-text-secondary`,
            children: (0, W.jsx)(u, {
                ...J.loadError
            })
        }) : (0, W.jsxs)(y.Root, {
            bordered: !0,
            fixed: !0,
            size: `normal`,
            className: `overflow-x-auto`,
            children: [(0, W.jsxs)(`colgroup`, {
                children: [(0, W.jsx)(`col`, {
                    className: `w-[20%]`
                }), (0, W.jsx)(`col`, {
                    className: `w-[20%]`
                }), (0, W.jsx)(`col`, {
                    className: `w-[15%]`
                }), (0, W.jsx)(`col`, {
                    className: `w-[14%]`
                }), (0, W.jsx)(`col`, {
                    className: `w-[15%]`
                }), (0, W.jsx)(`col`, {
                    className: `w-[16%]`
                })]
            }), (0, W.jsxs)(y.Header, {
                children: [(0, W.jsx)(y.HeaderCell, {
                    className: K,
                    children: (0, W.jsx)(u, {
                        ...J.amountGrantedColumn
                    })
                }), (0, W.jsx)(y.HeaderCell, {
                    className: K,
                    children: (0, W.jsx)(u, {
                        ...J.amountRemainingColumn
                    })
                }), (0, W.jsx)(y.HeaderCell, {
                    className: K,
                    children: (0, W.jsx)(u, {
                        ...J.descriptionColumn
                    })
                }), (0, W.jsx)(y.HeaderCell, {
                    textAlign: `right`,
                    className: K,
                    children: (0, W.jsx)(u, {
                        ...J.percentageUsedColumn
                    })
                }), (0, W.jsx)(y.HeaderCell, {
                    className: K,
                    children: (0, W.jsx)(u, {
                        ...J.grantDateColumn
                    })
                }), (0, W.jsx)(y.HeaderCell, {
                    className: K,
                    children: (0, W.jsx)(u, {
                        ...J.expiryDateColumn
                    })
                })]
            }), (0, W.jsxs)(y.Body, {
                children: [t.map(e => (0, W.jsxs)(y.Row, {
                    className: `[&>td]:py-3`,
                    children: [(0, W.jsx)(M, {
                        children: N(n, e.amount_granted)
                    }), (0, W.jsx)(M, {
                        children: P(n, e)
                    }), (0, W.jsx)(M, {
                        children: I(n, e)
                    }), (0, W.jsx)(M, {
                        textAlign: `right`,
                        children: F(n, e)
                    }), (0, W.jsx)(M, {
                        children: L(n, e.grant_date)
                    }), (0, W.jsx)(M, {
                        children: L(n, e.expiry_date)
                    })]
                }, e.id)), t.length === 0 ? (0, W.jsx)(y.Row, {
                    className: `[&>td]:py-3`,
                    children: (0, W.jsx)(y.Cell, {
                        colSpan: 6,
                        children: (0, W.jsx)(`div`, {
                            className: `text-token-text-tertiary`,
                            children: (0, W.jsx)(u, {
                                ...J.emptyState
                            })
                        })
                    })
                }) : null]
            })]
        }), e[0] = a.data?.data, e[1] = a.isError, e[2] = a.isLoading, e[3] = n, e[4] = o, e[5] = s, e[6] = c, e[7] = l, e[8] = d, e[9] = f, e[10] = p
    } else o = e[4], s = e[5], c = e[6], l = e[7], d = e[8], f = e[9], p = e[10];
    let m;
    e[34] !== s || e[35] !== c ? (m = (0, W.jsx)(`div`, {
        className: s,
        children: c
    }), e[34] = s, e[35] = c, e[36] = m) : m = e[36];
    let g;
    e[37] !== o || e[38] !== l || e[39] !== d || e[40] !== m ? (g = (0, W.jsx)(o, {
        showSpinner: l,
        className: d,
        children: m
    }), e[37] = o, e[38] = l, e[39] = d, e[40] = m, e[41] = g) : g = e[41];
    let x;
    return e[42] !== f || e[43] !== p || e[44] !== g ? (x = (0, W.jsxs)(W.Fragment, {
        children: [f, p, g]
    }), e[42] = f, e[43] = p, e[44] = g, e[45] = x) : x = e[45], x
}

function j(e, t) {
    return B(t.grant_date) - B(e.grant_date)
}

function M(e) {
    "use forget";
    let t = (0, U.c)(9),
        {
            children: n,
            textAlign: r
        } = e,
        i = r === void 0 ? `left` : r,
        a = typeof n == `string` ? n : void 0,
        s = i === `right` && `text-end`,
        c;
    t[0] === s ? c = t[1] : (c = o(`block max-w-full min-w-0 truncate`, s), t[0] = s, t[1] = c);
    let l;
    t[2] !== n || t[3] !== c || t[4] !== a ? (l = (0, W.jsx)(`span`, {
        className: c,
        title: a,
        children: n
    }), t[2] = n, t[3] = c, t[4] = a, t[5] = l) : l = t[5];
    let u;
    return t[6] !== l || t[7] !== i ? (u = (0, W.jsx)(y.Cell, {
        textAlign: i,
        divClassName: q,
        children: l
    }), t[6] = l, t[7] = i, t[8] = u) : u = t[8], u
}

function N(e, t) {
    let n = H(t);
    return n == null ? e.formatMessage(J.unavailableValue) : e.formatMessage(J.creditAmountValue, {
        credits: n
    })
}

function P(e, t) {
    return R(t) ? e.formatMessage(J.unavailableValue) : N(e, t.amount_remaining)
}

function F(e, t) {
    if (R(t)) return e.formatMessage(J.unavailableValue);
    let n = H(t.amount_granted),
        r = H(t.amount_remaining);
    if (n == null || r == null || n <= 0) return e.formatMessage(J.unavailableValue);
    let i = Math.min(Math.max((n - r) / n, 0), 1);
    return e.formatNumber(i, {
        style: `percent`,
        maximumFractionDigits: 1
    })
}

function I(e, t) {
    switch (t.grant_type) {
        case `subscription`:
            return e.formatMessage(J.subscriptionGrantType);
        case `referral`:
            return e.formatMessage(J.referralGrantType);
        case `other`:
            return e.formatMessage(J.otherGrantType)
    }
}

function L(e, t) {
    if (t == null) return e.formatMessage(J.unavailableValue);
    let n = V(t);
    return Number.isFinite(n.getTime()) ? e.formatDate(n, {
        month: `short`,
        day: `numeric`,
        year: `numeric`
    }) : e.formatMessage(J.unavailableValue)
}

function R(e) {
    let t = B(e.expiry_date);
    return t > 0 && t < z()
}

function z() {
    let e = new Date;
    return e.setHours(0, 0, 0, 0), e.getTime()
}

function B(e) {
    let t = V(e);
    return Number.isFinite(t.getTime()) ? t.getTime() : 0
}

function V(e) {
    if (e == null) return new Date(NaN);
    let t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(e);
    if (t != null) {
        let [, e, n, r] = t;
        return new Date(Number(e), Number(n) - 1, Number(r))
    }
    return new Date(e)
}

function H(e) {
    let t = Number.parseFloat(e);
    return Number.isFinite(t) ? t : null
}
var U, W, G, K, q, J, Y = e((() => {
        U = m(), C(), g(), x(), S(), i(), a(), E(), n(), d(), W = c(), G = 10, K = `text-token-text-secondary text-sm font-medium leading-snug`, q = `min-h-[44px] min-w-0 items-center`, J = l({
            billingBreadcrumb: {
                id: `organizationBillingInfo.creditGrants.billingBreadcrumb`,
                defaultMessage: `Billing`
            },
            browserTitle: {
                id: `organizationBillingInfo.creditGrants.browserTitle`,
                defaultMessage: `ChatGPT - Admin | Credit grants`
            },
            creditAmountValue: {
                id: `organizationBillingInfo.creditGrants.creditAmountValue`,
                defaultMessage: `{credits, plural, one {# credit} other {# credits}}`
            },
            emptyState: {
                id: `organizationBillingInfo.creditGrants.emptyState`,
                defaultMessage: `No credit grants found.`
            },
            expiryDateColumn: {
                id: `organizationBillingInfo.creditGrants.expiryDateColumn`,
                defaultMessage: `Expiry date`
            },
            amountGrantedColumn: {
                id: `organizationBillingInfo.creditGrants.amountGrantedColumn`,
                defaultMessage: `Amount granted`
            },
            amountRemainingColumn: {
                id: `organizationBillingInfo.creditGrants.amountRemainingColumn`,
                defaultMessage: `Amount remaining`
            },
            descriptionColumn: {
                id: `organizationBillingInfo.creditGrants.descriptionColumn`,
                defaultMessage: `Description`
            },
            percentageUsedColumn: {
                id: `organizationBillingInfo.creditGrants.percentageUsedColumn`,
                defaultMessage: `Used`
            },
            grantDateColumn: {
                id: `organizationBillingInfo.creditGrants.grantDateColumn`,
                defaultMessage: `Grant date`
            },
            loadError: {
                id: `organizationBillingInfo.creditGrants.loadError`,
                defaultMessage: `Unable to load credit grants.`
            },
            pageTitle: {
                id: `organizationBillingInfo.creditGrants.pageTitle`,
                defaultMessage: `Credit grants`
            },
            pageSubtitle: {
                id: `organizationBillingInfo.creditGrants.pageSubtitle`,
                defaultMessage: `Showing the 10 most recent active grants, newest grant date first`
            },
            otherGrantType: {
                id: `organizationBillingInfo.creditGrants.otherGrantType`,
                defaultMessage: `Other`
            },
            referralGrantType: {
                id: `organizationBillingInfo.creditGrants.referralGrantType`,
                defaultMessage: `Referral reward`
            },
            subscriptionGrantType: {
                id: `organizationBillingInfo.creditGrants.subscriptionGrantType`,
                defaultMessage: `Subscription`
            },
            unavailableValue: {
                id: `organizationBillingInfo.creditGrants.unavailableValue`,
                defaultMessage: `-`
            }
        })
    })),
    X, Z, Q, $ = e((() => {
        s(), X = m(), Y(), a(), k(), Z = c(), Q = f(function() {
            "use forget";
            let e = (0, X.c)(2);
            O();
            let n = t();
            if (n == null) return null;
            if (!n.isEnterprisey()) {
                let t;
                return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Z.jsx)(p, {
                    to: `/admin/billing`,
                    replace: !0
                }), e[0] = t) : t = e[0], t
            }
            let r;
            return e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, Z.jsx)(A, {}), e[1] = r) : r = e[1], r
        })
    }));
e((() => {
    $()
}))();
export {
    Q as
    default
};
//# sourceMappingURL=admin.billing.credit_grants-o0s0dyou.js.map