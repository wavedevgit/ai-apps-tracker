import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as n,
    Mnt as r,
    Nnt as i,
    Pnt as a,
    Qit as o,
    _tt as s,
    a7 as c,
    cat as l,
    cot as u,
    fz as d,
    iat as f,
    jtt as p,
    kT as m,
    l7 as h,
    lot as g,
    uz as _
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as v,
    At as y,
    Bn as b,
    Ln as x,
    Nn as S,
    Pt as C,
    Rn as w,
    Ut as T,
    Vn as E,
    wn as D
} from "./2340486e-oc6d2eodbcrmxur3.js";

function O(e) {
    return e instanceof o ? e.isTransportError ? `transport_error` : e.code != null && F.has(e.code) ? e.code : e.status === 404 ? `link_not_found` : e.status === 403 ? `forbidden` : e.status === 409 ? `conflict` : e.status >= 500 ? `server_error` : `unclassified_request_error` : `unknown_error`
}

function k(e, t, n) {
    let r = u().userCountry?.toLowerCase();
    i.count(a.DEFAULT, P, {
        action: e,
        program_id: N,
        device_type: p() ? `mobile` : `desktop`,
        ...r == null ? {} : {
            country: r
        },
        ...t == null ? {} : {
            error_type: t
        },
        ...n == null ? {} : {
            error_reason: n
        }
    })
}
var A, j, M, N, P, F, I, L, R = e((() => {
    v(), A = D(), n(), d(), f(), h(), r(), s(), j = t(E()), w(), g(), M = b(), N = `chatgpt_referral_consumer_free`, P = `chatgpt_referral_link_page_event`, F = new Set([`active_referral_exists`, `email_required`, `link_not_found`, `new_account_required`, `program_unavailable`, `recipient_unavailable`, `reward_capacity_reached`, `self_referral`]), I = T(function() {
        "use forget";
        let e = (0, A.c)(18),
            {
                linkId: t
            } = y(),
            n = C(),
            [r, i] = (0, j.useState)(!1),
            [a, s] = (0, j.useState)(),
            u, d;
        if (e[0] !== t || e[1] !== n ? (u = () => {
                let e = !1;
                return k(`shown`), c.safePost(`/referrals/link/{link_id}/claim`, {
                    parameters: {
                        path: {
                            link_id: t
                        }
                    }
                }).then(() => {
                    e || (k(`claim_succeeded`), n(`/`, {
                        replace: !0
                    }))
                }).catch(t => {
                    e || (k(`backend_error`, t instanceof o ? `request_error` : `unknown_error`, O(t)), t instanceof o && (t.status === 403 || t.status === 409) && s(l(t)), i(!0))
                }), () => {
                    e = !0
                }
            }, d = [t, n], e[0] = t, e[1] = n, e[2] = u, e[3] = d) : (u = e[2], d = e[3]), (0, j.useEffect)(u, d), !r) {
            let t;
            return e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, M.jsx)(`main`, {
                className: `flex min-h-screen items-center justify-center`,
                children: (0, M.jsx)(_, {
                    className: `icon-xl`
                })
            }), e[4] = t) : t = e[4], t
        }
        let f;
        e[5] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, M.jsx)(`h1`, {
            className: `text-token-text-primary text-2xl font-medium`,
            children: (0, M.jsx)(S, {
                ...L.unavailableTitle
            })
        }), e[5] = f) : f = e[5];
        let p;
        e[6] === a ? p = e[7] : (p = a ?? (0, M.jsx)(S, {
            ...L.unavailableDescription
        }), e[6] = a, e[7] = p);
        let h;
        e[8] === p ? h = e[9] : (h = (0, M.jsx)(`p`, {
            className: `text-token-text-secondary mt-2 max-w-sm text-sm`,
            children: p
        }), e[8] = p, e[9] = h);
        let g;
        e[10] === n ? g = e[11] : (g = () => {
            n(`/`)
        }, e[10] = n, e[11] = g);
        let v;
        e[12] === Symbol.for(`react.memo_cache_sentinel`) ? (v = (0, M.jsx)(S, {
            ...L.homeButton
        }), e[12] = v) : v = e[12];
        let b;
        e[13] === g ? b = e[14] : (b = (0, M.jsx)(m, {
            type: `button`,
            color: `primary`,
            className: `mt-6`,
            onClick: g,
            children: v
        }), e[13] = g, e[14] = b);
        let x;
        return e[15] !== h || e[16] !== b ? (x = (0, M.jsxs)(`main`, {
            className: `flex min-h-screen flex-col items-center justify-center px-6 text-center`,
            children: [f, h, b]
        }), e[15] = h, e[16] = b, e[17] = x) : x = e[17], x
    }), L = x({
        unavailableTitle: {
            id: `chatgpt.referrals.share_link.unavailable.title`,
            defaultMessage: `Referral unavailable`
        },
        unavailableDescription: {
            id: `chatgpt.referrals.share_link.unavailable.description`,
            defaultMessage: `This referral link is invalid or no longer available.`
        },
        homeButton: {
            id: `chatgpt.referrals.share_link.unavailable.home_button`,
            defaultMessage: `Go to ChatGPT`
        }
    })
}));
e((() => {
    R()
}))();
export {
    I as
    default
};
//# sourceMappingURL=refer._linkId-ooylyzym.js.map