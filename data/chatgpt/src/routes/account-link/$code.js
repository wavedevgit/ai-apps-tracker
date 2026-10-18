import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as n,
    AT as r,
    Ait as i,
    Btt as a,
    Htt as o,
    Nrt as s,
    Pit as c,
    Q1 as l,
    Y1 as u,
    Zot as d,
    a7 as f,
    k1 as p,
    kT as m,
    l7 as h,
    rot as g,
    wst as _
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as v,
    At as y,
    Bn as b,
    Nn as x,
    Rn as S,
    Ut as C,
    Vn as w,
    p as T,
    s as E,
    zn as D
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    bC as O,
    xC as k
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    a as A,
    i as j,
    n as M,
    o as N,
    r as P,
    t as F
} from "./a0af22f2-k3hu8e294ifmjtp5.js";

function I(e, t) {
    setTimeout(() => {
        window.location.href = t
    }, e * 1e3)
}

function L({
    phoneNumber: e,
    onAllowClick: t,
    onCancelClick: n,
    isOnAllowClickPending: r,
    isOnCancelClickPending: i
}) {
    let o = D();
    return (0, z.useEffect)(() => {
        a.logEventWithStatsig(`Account Link: Confirm UI Shown`, `chatgpt_account_link_confirm_ui_shown`)
    }, []), (0, B.jsxs)(`div`, {
        className: `flex w-full flex-col items-center justify-center px-4 py-10`,
        children: [(0, B.jsx)(`header`, {
            className: `oai-header`,
            children: (0, B.jsx)(O, {
                alt: o.formatMessage({
                    id: `login.openAiLogo`,
                    defaultMessage: `OpenAI Logo`
                }),
                className: `h-10 w-10`
            })
        }), (0, B.jsx)(`h1`, {
            className: `mt-10 text-center text-3xl font-semibold`,
            children: (0, B.jsx)(x, {
                id: `account-link.confirm.title`,
                defaultMessage: `Confirm account linking`
            })
        }), (0, B.jsx)(`p`, {
            className: `text-token-text-secondary mt-6 text-center`,
            children: (0, B.jsx)(x, {
                id: `account-link.confirm-link.description.chatgpt-conversation`,
                defaultMessage: `By clicking "Allow", your WhatsApp number {phoneValue} and conversation with 1-800-ChatGPT will be linked to your ChatGPT account and subject to data controls in your account settings. <learnMoreLink>Learn more.</learnMoreLink>`,
                values: {
                    phoneValue: e,
                    learnMoreLink: e => (0, B.jsx)(`a`, {
                        href: F,
                        target: `_blank`,
                        rel: `noopener noreferrer`,
                        className: `text-token-link hover:text-token-link-hover`,
                        children: e
                    })
                }
            })
        }), (0, B.jsxs)(`div`, {
            className: `mt-6 flex w-full flex-col gap-3`,
            children: [(0, B.jsx)(m, {
                className: `w-full rounded-md`,
                color: `green`,
                type: `submit`,
                onClick: () => {
                    a.logEventWithStatsig(`Account Link: "Allow WhatsApp Linking" Button Clicked`, `chatgpt_account_link_allow_clicked`), t()
                },
                disabled: r || i,
                loading: r,
                children: (0, B.jsx)(x, {
                    id: `account-link.confirm.button`,
                    defaultMessage: `Allow`
                })
            }), (0, B.jsx)(m, {
                className: `w-full rounded-md`,
                color: `secondary`,
                onClick: () => {
                    a.logEventWithStatsig(`Account Link: "Cancel WhatsApp Linking" Button Clicked`, `chatgpt_account_link_cancel_clicked`), n()
                },
                disabled: i || r,
                children: (0, B.jsx)(x, {
                    id: `account-link.confirm.cancel`,
                    defaultMessage: `Cancel`
                })
            })]
        })]
    })
}

function R() {
    let e = D();
    return (0, z.useEffect)(() => {
        a.logEventWithStatsig(`Account Link: Success`, `chatgpt_account_link_success`)
    }, []), (0, B.jsxs)(`div`, {
        className: `flex w-full flex-col items-center justify-center px-4 py-10`,
        children: [(0, B.jsx)(`header`, {
            className: `oai-header`,
            children: (0, B.jsx)(O, {
                alt: e.formatMessage({
                    id: `login.openAiLogo`,
                    defaultMessage: `OpenAI Logo`
                }),
                className: `h-10 w-10`
            })
        }), (0, B.jsx)(`h1`, {
            className: `mt-10 text-center text-3xl font-semibold`,
            children: (0, B.jsx)(x, {
                id: `account-link.success.title`,
                defaultMessage: `Successfully linked your ChatGPT account`
            })
        }), (0, B.jsx)(`p`, {
            className: `text-token-text-secondary mt-6 text-center`,
            children: (0, B.jsx)(x, {
                id: `account-link.success.description`,
                defaultMessage: `You can now close this window and return to WhatsApp, or you will be automatically redirected momentarily.`
            })
        })]
    })
}
var z, B, V, H = e((() => {
    v(), _(), r(), k(), p(), N(), s(), l(), o(), c(), h(), E(), z = t(w()), S(), B = b(), V = C(function() {
        let [e, t] = (0, z.useState)(!1), {
            identifier: r,
            proof: o,
            nextAction: s,
            entityId: c
        } = y(), l = s === M.Authenticate, p = s === M.LinkAccount && !e, m = s === M.LinkAccount && e, {
            mutate: h,
            isPending: _
        } = T({
            mutationFn: async e => {
                try {
                    if (e === P.Cancel) return {
                        success: !1
                    };
                    if (!g()) return {
                        success: !1,
                        errorCode: d.SessionExpired
                    };
                    let {
                        success: t,
                        error_code: n
                    } = await f.safePost(`/ai/account_linking`, {
                        requestBody: {
                            proof: o,
                            identifier: r
                        },
                        authOption: i.Required
                    });
                    return {
                        success: t,
                        errorCode: n
                    }
                } catch {
                    return {
                        success: !1
                    }
                }
            },
            onSuccess: (e, n) => {
                if (!e.success && n === P.Cancel) {
                    window.location.href = j;
                    return
                } else if (!e.success) {
                    let t = new URLSearchParams;
                    t.set(`reason`, e.errorCode ?? ``), t.set(`wid`, c ?? ``), window.location.href = `/account-link/error?${t.toString()}`;
                    return
                }
                return t(!0), I(2, A)
            }
        });
        return (0, z.useEffect)(() => {
            if (l) {
                if (!r) return;
                a.logEventWithStatsig(`Account Link: Redirect to Authenticate`, `chatgpt_account_link_redirect_authenticate`), n({
                    fallbackScreenHint: `signup`,
                    callbackUrl: `${location.pathname}${location.search}${location.hash}`,
                    additionalAuthParams: {
                        [u]: `true`
                    }
                })
            }
        }, [l, r]), (0, B.jsxs)(`div`, {
            className: `mx-auto w-full max-w-sm sm:max-w-md`,
            children: [p && (0, B.jsx)(L, {
                phoneNumber: r,
                onAllowClick: () => h(P.Allow),
                onCancelClick: () => h(P.Cancel),
                isOnAllowClickPending: _,
                isOnCancelClickPending: _
            }), m && (0, B.jsx)(R, {})]
        })
    })
}));
e((() => {
    H()
}))();
export {
    V as
    default
};
//# sourceMappingURL=account-link._code-otzxeuif.js.map