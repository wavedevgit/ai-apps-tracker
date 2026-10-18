import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as n,
    AT as r,
    BD as i,
    Nrt as a,
    PD as o,
    Prt as s,
    S1 as c,
    dz as l,
    fz as u,
    k1 as d,
    kT as f,
    r1 as p,
    u1 as m
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as h,
    Bn as g,
    Ht as ee,
    Ln as _,
    Nn as v,
    Pt as y,
    Rn as b,
    Ut as x,
    Vn as S,
    jt as C,
    zn as w
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Cn as T,
    Dn as E,
    Mn as D,
    Pn as O,
    bsn as k,
    kn as te,
    wn as ne,
    xsn as re
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Jn as A,
    g_ as j,
    h_ as M,
    qn as N
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    r as P,
    t as F
} from "./b453068a-lz9p8iypelcxzs6g.js";
import {
    n as I,
    t as L
} from "./da2e4f1d-hjo3ad3fmcgvexi4.js";
import {
    a as R,
    d as z,
    f as B,
    i as V,
    o as H,
    r as U
} from "./d4df9516-fw5h3kvf0vj3ebma.js";

function W(e, t) {
    return !t?.redirect_to && e === `manual`
}

function G({
    triggerSource: e,
    claimBenefitHandler: t,
    hasStartedActionRef: n,
    onGranted: r
}) {
    n.current = `grant`;
    let i = t();
    if (!i) {
        W(e, void 0) && (n.current = null);
        return
    }
    Promise.resolve(i).then(t => {
        let i = t ?? void 0;
        if (i?.redirect_to) {
            r();
            return
        }
        W(e, i) && (n.current = null)
    })
}

function ie({
    enrollmentState: e,
    hasGrantedCredits: t,
    intl: n,
    isLoggedIn: r,
    modalErrorKind: i,
    modalErrorMessage: a,
    needsPersonalWorkspace: o,
    redirectedFromSheerId: s
}) {
    if (t) return {
        title: `Your credits are ready`,
        description: `$100 in credits for Codex has been added to your account. They'll expire in 12 months.`
    };
    if (!r) return {
        title: `Redirecting to sign in`,
        description: `We need to sign you in before we can verify student status.`
    };
    if (o) return {
        title: `Switch to your personal workspace`,
        description: `This offer can only be redeemed on your personal workspace. Switch workspaces, then continue.`
    };
    if (a && i === `verification`) return {
        title: `Finishing your verification`,
        description: `We're still confirming your verification. You can try again.`
    };
    if (a) return {
        title: `We couldn't confirm your eligibility yet`,
        description: `Please try again.`
    };
    switch (e.name) {
        case `coming-soon`:
            return {
                title: `Offer unavailable`, description: `This offer is not available for your account right now.`
            };
        case `logged-out`:
            return {
                title: `Redirecting to sign in`, description: `We need to sign you in before we can verify student status.`
            };
        case `loading`:
            return {
                title: s ? `Finishing your verification` : `Verifying eligibility`, description: s ? `You're almost there. We're doing one last verification check.` : `We're checking whether you qualify for this promotion. You will need to verify your student status next.`
            };
        case `needs-verification`:
            return {
                title: s ? `Finishing your verification` : `Opening student verification`, description: s ? `You're almost there. We're doing one last verification check.` : `Verify you're a student at a degree-granting school in the US or Canada.`
            };
        case `verified`:
            return {
                title: n.formatMessage({
                    id: `students.codexOffer.redeeming.title`,
                    defaultMessage: `Redeeming your credits`
                }), description: n.formatMessage({
                    id: `students.codexOffer.redeeming.description`,
                    defaultMessage: `Your student status is verified. We're applying the offer now.`
                })
            };
        case `enrolled`:
            return {
                title: n.formatMessage({
                    id: `students.codexOffer.alreadyRedeemed.title`,
                    defaultMessage: `You have already redeemed this offer`
                }), description: n.formatMessage({
                    id: `students.codexOffer.alreadyRedeemed.description`,
                    defaultMessage: `$100 in credits has already been added to your account. Credits expire in 12 months.`
                })
            };
        case `error`:
            return {
                title: `We couldn't confirm your eligibility yet`, description: `Please try again.`
            }
    }
}
var K = e((() => {}));

function q() {
    let e = w(),
        t = y(),
        r = C(),
        [a] = ee(),
        {
            data: o
        } = c(),
        {
            data: u
        } = i(),
        d = p(o),
        m = (0, J.useMemo)(() => u?.find(e => e.isPersonalAccount()) ?? null, [u]),
        h = a.get(`partner_id`) ?? te(),
        g = a.get(ne) === `true`,
        _ = B(M, {
            shouldPollAfterSheerIdReturn: g
        }),
        {
            isLoading: b,
            modalErrorKind: x,
            modalErrorMessage: S
        } = R(),
        O = (0, J.useRef)(null),
        k = s(),
        [A, j] = (0, J.useState)(!1),
        [N, P] = (0, J.useState)(!1),
        F = H(_.name === `needs-verification` ? _.verificationId ?? null : null, _.name === `needs-verification` ? _.accountVerificationId ?? null : null, M, h),
        I = V(_.name === `verified` ? _.accountVerificationId : ``, M, {
            navigateOnSuccess: !1
        }),
        z = k && d != null && !d.isPersonalAccount(),
        U = k && !z && !A && _.name === `verified`;
    (0, J.useEffect)(() => {
        let e = M.sentinelFlow;
        if (!U || !e) return;
        let t = new AbortController;
        return re(e, {
            signal: t.signal
        }), () => t.abort()
    }, [d?.id, U]), (0, J.useEffect)(() => {
        a.get(`partner_id`) != null && E(a)
    }, [a]), (0, J.useEffect)(() => {
        !k && O.current !== `auth` && (O.current = `auth`, n({
            fallbackScreenHint: `login`,
            callbackUrl: D(M.landingPath, T)
        }))
    }, [k]), (0, J.useEffect)(() => {
        if (!(!k || b || z)) {
            if (_.name === `needs-verification` && !g && O.current !== `verify`) {
                O.current = `verify`, F();
                return
            }
            if (_.name === `verified` && O.current !== `grant`) {
                G({
                    triggerSource: `auto`,
                    claimBenefitHandler: I,
                    hasStartedActionRef: O,
                    onGranted: () => j(!0)
                });
                return
            }
        }
    }, [I, _, b, k, z, g, F]);
    let W = (0, J.useMemo)(() => ie({
            enrollmentState: _,
            hasGrantedCredits: A,
            intl: e,
            isLoggedIn: k,
            modalErrorKind: x,
            modalErrorMessage: S,
            needsPersonalWorkspace: z,
            redirectedFromSheerId: g
        }), [_, A, e, k, x, S, z, g]),
        K = !z && (!!S || _.name === `error` || g && _.name === `needs-verification`),
        q = !z && !A && _.name !== `enrolled` && _.name !== `error` && !S,
        X = !z && (A || _.name === `enrolled`),
        Z = `${r.pathname}${r.search}`;
    return (0, Y.jsx)(`div`, {
        className: `bg-token-main-surface-primary flex min-h-screen items-center justify-center px-6`,
        children: (0, Y.jsxs)(`div`, {
            className: `flex max-w-[520px] flex-col items-center text-center`,
            children: [q ? (0, Y.jsx)(l, {
                className: `text-token-text-tertiary mb-6 h-10 w-10`
            }) : null, (0, Y.jsx)(`h1`, {
                className: `text-3xl font-medium`,
                children: W.title
            }), (0, Y.jsx)(`p`, {
                className: `text-token-text-secondary mt-3 text-base`,
                children: W.description
            }), z ? (0, Y.jsx)(`div`, {
                className: `mt-8 w-full text-start`,
                children: m ? (0, Y.jsx)(`div`, {
                    className: `bg-token-main-surface-secondary overflow-hidden rounded-2xl border`,
                    "data-testid": `student-codex-personal-workspace-switcher`,
                    children: (0, Y.jsx)(L, {
                        data: [m],
                        redirectUrl: Z
                    })
                }) : (0, Y.jsx)(`div`, {
                    className: `text-token-text-secondary rounded-2xl border p-4 text-center text-sm`,
                    children: (0, Y.jsx)(v, {
                        id: `QCmk0W`,
                        defaultMessage: `We could not find your personal workspace. Refresh this page and try again.`
                    })
                })
            }) : null, S ? (0, Y.jsx)(`div`, {
                className: `text-token-text-error mt-4`,
                children: S
            }) : null, K ? (0, Y.jsx)(`div`, {
                className: `mt-8`,
                children: (0, Y.jsx)(f, {
                    onClick: () => {
                        if (_.name === `verified`) {
                            G({
                                triggerSource: `manual`,
                                claimBenefitHandler: I,
                                hasStartedActionRef: O,
                                onGranted: () => j(!0)
                            });
                            return
                        }
                        if (g && _.name === `needs-verification`) {
                            window.location.reload();
                            return
                        }
                        O.current = `verify`, F()
                    },
                    children: g && _.name === `needs-verification` ? (0, Y.jsx)(v, {
                        id: `eN1+HE`,
                        defaultMessage: `Check again`
                    }) : (0, Y.jsx)(v, {
                        id: `llaCvd`,
                        defaultMessage: `Try again`
                    })
                })
            }) : null, X ? (0, Y.jsx)(`div`, {
                className: `mt-8`,
                children: (0, Y.jsx)(f, {
                    disabled: N,
                    loading: N,
                    onClick: () => {
                        P(!0), t(`/codex/cloud`)
                    },
                    children: A ? (0, Y.jsx)(v, {
                        id: `students.codexOffer.success.cta`,
                        defaultMessage: `Get started with Codex`
                    }) : (0, Y.jsx)(v, {
                        id: `students.codexOffer.alreadyRedeemed.cta`,
                        defaultMessage: `Continue to Codex`
                    })
                })
            }) : null]
        })
    })
}
var J, Y, X, Z, Q, $, ae = e((() => {
    h(), o(), I(), r(), u(), m(), d(), j(), K(), z(), A(), U(), O(), a(), k(), P(), J = t(S()), b(), Y = g(), X = x(function() {
        let e = w(),
            t = e.formatMessage($.metaTitle),
            n = e.formatMessage($.metaDescription),
            r = N(M),
            i = y();
        return (0, J.useEffect)(() => {
            r || i(`/`, {
                replace: !0
            })
        }, [r, i]), r ? (0, Y.jsxs)(Y.Fragment, {
            children: [(0, Y.jsxs)(`head`, {
                children: [(0, Y.jsx)(`title`, {
                    children: t
                }), (0, Y.jsx)(`meta`, {
                    name: `description`,
                    content: n
                }), (0, Y.jsx)(`meta`, {
                    property: `og:title`,
                    content: t
                }), (0, Y.jsx)(`meta`, {
                    property: `og:description`,
                    content: n
                })]
            }), (0, Y.jsx)(q, {})]
        }) : null
    }), Z = {
        hasRouteMeta: !0
    }, Q = () => [{
        property: `og:site_name`,
        content: `ChatGPT`
    }, {
        property: `og:type`,
        content: `website`
    }, {
        property: `og:url`,
        content: `https://chatgpt.com/codex/offers/students`
    }, {
        property: `og:image`,
        content: F
    }, {
        property: `og:image:width`,
        content: `1994`
    }, {
        property: `og:image:height`,
        content: `1328`
    }, {
        property: `twitter:card`,
        content: `summary_large_image`
    }, {
        name: `twitter:image`,
        content: F
    }], $ = _({
        metaTitle: {
            id: `students.codexOffer.meta.title`,
            defaultMessage: `Student offer for Codex | ChatGPT`
        },
        metaDescription: {
            id: `students.codexOffer.meta.description`,
            defaultMessage: `Verify your student status and redeem credits.`
        }
    })
}));
e((() => {
    ae()
}))();
export {
    X as
    default, Z as handle, Q as meta
};
//# sourceMappingURL=codex.offers.students-gxbc6ri2.js.map