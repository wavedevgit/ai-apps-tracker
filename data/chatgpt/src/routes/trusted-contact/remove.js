import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as n,
    Ait as r,
    Ant as i,
    Pit as a,
    Qit as o,
    a7 as s,
    dz as c,
    fz as l,
    iat as u,
    iw as d,
    kT as f,
    knt as p,
    l7 as m,
    ow as h
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as g,
    At as _,
    Bn as v,
    Ln as y,
    Nn as b,
    Pt as x,
    Rn as S,
    Ut as C,
    Vn as w,
    zn as T
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    c as E,
    l as D
} from "./8b34dbc2-gf9wnwcahty27ylx.js";

function O(e) {
    return e.status === 400 || e.status === 404 ? {
        status: `error`,
        errorKind: `invalidLink`
    } : {
        status: `error`,
        errorKind: `generic`
    }
}
async function k(e) {
    try {
        return {
            status: `success`,
            ownerName: (await s.safePost(`/trusted_contact/removal`, {
                requestBody: {
                    token: e,
                    trusted_contact_id: e
                },
                authOption: r.SendIfAvailable
            })).user_name ?? null
        }
    } catch (e) {
        return e instanceof o ? O(e) : (i.error(`Unexpected trusted contact removal link failure`, {
            error: e
        }), {
            status: `error`,
            errorKind: `generic`
        })
    }
}
var A, j, M, N, P = e((() => {
    g(), n(), D(), h(), l(), a(), u(), p(), m(), A = t(w()), S(), j = v(), M = C(function() {
        "use no forget";
        let e = T(),
            t = x(),
            n = _(),
            [r, i] = (0, A.useState)(() => n.initialErrorState == null ? {
                status: `loading`
            } : n.initialErrorState);
        (0, A.useEffect)(() => {
            if (n.token == null || n.initialErrorState != null) return;
            let e = !1;
            return k(n.token).then(t => {
                e || i(t)
            }), () => {
                e = !0
            }
        }, [n.initialErrorState, n.token]);
        let a = r.status === `success` && r.ownerName?.trim() || null,
            o = r.status === `loading` ? e.formatMessage(N.loadingDescription) : r.status === `success` ? a ? e.formatMessage(N.successDescription, {
                name: a
            }) : e.formatMessage(N.successDescriptionFallback) : r.errorKind === `invalidLink` ? e.formatMessage(N.invalidLinkError) : e.formatMessage(N.genericError);
        return (0, j.jsx)(E, {
            children: (0, j.jsx)(d, {
                testId: `modal-trusted-contact-public-removal`,
                isOpen: !0,
                onClose: () => t(`/`, {
                    replace: !0
                }),
                shouldIgnoreClickOutside: !0,
                showOverlayBackground: !1,
                overlayClassName: `bg-black/40`,
                headerClassName: `justify-center`,
                size: `custom`,
                className: `max-w-[520px] rounded-[28px] border border-black/5 p-8 shadow-[0_28px_80px_rgba(0,0,0,0.18)]`,
                footerContent: r.status === `loading` ? null : (0, j.jsx)(f, {
                    color: `primary`,
                    fullWidth: !0,
                    size: `large`,
                    className: `rounded-full`,
                    onClick: () => t(`/`, {
                        replace: !0
                    }),
                    children: (0, j.jsx)(b, {
                        ...N.closeButton
                    })
                }),
                title: (0, j.jsx)(`span`, {
                    className: `text-center text-[2rem] leading-[1.05] font-semibold tracking-[-0.03em] text-balance`,
                    children: e.formatMessage(r.status === `loading` ? N.loadingTitle : r.status === `success` ? N.successTitle : N.errorTitle)
                }),
                children: (0, j.jsxs)(`div`, {
                    className: `mb-6 flex flex-col items-center gap-4`,
                    children: [r.status === `loading` ? (0, j.jsx)(c, {
                        className: `text-token-text-primary h-8 w-8`
                    }) : null, (0, j.jsx)(`p`, {
                        className: `text-token-text-secondary text-center text-lg leading-7 text-balance`,
                        children: o
                    })]
                })
            })
        })
    }), N = y({
        loadingTitle: {
            id: `trustedContact.publicRemoval.loading.title`,
            defaultMessage: `Removing trusted contact...`
        },
        loadingDescription: {
            id: `trustedContact.publicRemoval.loading.description`,
            defaultMessage: `One moment while we update this trusted contact.`
        },
        successTitle: {
            id: `trustedContact.publicRemoval.success.title`,
            defaultMessage: `You've been removed as a trusted contact`
        },
        successDescription: {
            id: `trustedContact.publicRemoval.success.description.named`,
            defaultMessage: `We'll let {name} know.`
        },
        successDescriptionFallback: {
            id: `trustedContact.publicRemoval.success.description.fallback`,
            defaultMessage: `We'll let them know.`
        },
        errorTitle: {
            id: `trustedContact.publicRemoval.error.title`,
            defaultMessage: `We couldn't remove you as a trusted contact`
        },
        invalidLinkError: {
            id: `trustedContact.publicRemoval.error.invalidLink`,
            defaultMessage: `This removal link is invalid or has expired.`
        },
        genericError: {
            id: `trustedContact.publicRemoval.error.generic`,
            defaultMessage: `We couldn't complete that request. Please try again.`
        },
        closeButton: {
            id: `trustedContact.publicRemoval.closeButton`,
            defaultMessage: `Close`
        }
    })
}));
e((() => {
    P()
}))();
export {
    M as
    default
};
//# sourceMappingURL=trusted-contact.remove-om7bbq99.js.map