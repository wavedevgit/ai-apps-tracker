import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $G as t,
    I1 as n,
    J5 as r,
    JT as i,
    M1 as a,
    Sj as o,
    cK as s,
    lK as c,
    lj as l,
    nK as u,
    q5 as d,
    qT as f
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    $ as p,
    Pn as m,
    Pt as h,
    Rn as g,
    Tn as _,
    Vn as v,
    zn as y
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    KGn as b,
    OJ as x,
    WGn as S,
    kJ as C
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    np as w,
    tp as T
} from "./30901919-jory365vq6ym5crx.js";
import {
    t as E
} from "./9ac7a75a-o42ejieyzry8c3s2.js";
import {
    o as D
} from "./e19f3910-gqf6e2pgn5z6k0mv.js";
import {
    r as O,
    t as k
} from "./fab52ad7-genei07950isk3m5.js";
import {
    n as A,
    r as j
} from "./d848de1a-jvqez4zk5hv8l51j.js";
import {
    n as M,
    t as N
} from "./50217878-jiqz6xihz0msoh0e.js";

function P() {
    let e = E();
    return e == null ? V : {
        ...V,
        windows: [
            [{
                links: [{
                    label: z.localDownloadAppCta,
                    href: e,
                    analyticsAction: `codex_access_download_app`
                }]
            }]
        ]
    }
}

function F(e) {
    "use forget";
    let t = (0, L.c)(27),
        {
            feature: n,
            requiresCodexCloud: r
        } = e,
        i = n === void 0 ? `codex` : n,
        o = r !== void 0 && r,
        c = h(),
        l = a(),
        {
            data: p
        } = u(l?.getWorkspaceId()),
        g = O(),
        _ = p?.beta_settings.wham_local_access ?? !1,
        v;
    t[0] === p?.permissions ? v = t[1] : (v = p?.permissions?.includes(s.AllowCodexLocalAccess) ?? !1, t[0] = p?.permissions, t[1] = v);
    let y = v,
        b = i === `codex` && l?.isEnterprisey() && _ && y,
        x = i === `codex_security`,
        C;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (C = P(), t[2] = C) : C = t[2];
    let w = C,
        E = I,
        D;
    t[3] === l ? D = t[4] : (D = e => (0, R.jsx)(`a`, {
        href: A(l?.getWorkspaceId(), B) ?? B,
        target: `_blank`,
        rel: `noreferrer`,
        className: `text-token-text-accent hover:text-token-text-accent/80 underline`,
        children: e
    }), t[3] = l, t[4] = D);
    let k = D,
        j, M;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (j = d(`bg-token-bg-elevated-primary`, `border-token-border-subtle`, `mx-auto my-auto flex max-w-xl flex-col gap-6 rounded-2xl border p-8 text-center`, `shadow-(--shadow-lg)`), M = (0, R.jsx)(T, {
        "aria-hidden": !0,
        className: `text-token-text-primary mx-auto h-16 w-16 select-none`
    }), t[5] = j, t[6] = M) : (j = t[5], M = t[6]);
    let F;
    t[7] !== x || t[8] !== o || t[9] !== b ? (F = (0, R.jsx)(`h1`, {
        className: `text-token-text-primary text-3xl font-semibold`,
        children: b ? (0, R.jsx)(m, {
            ...z.localTitle
        }) : x && o ? (0, R.jsx)(m, {
            ...z.securityCloudTitle
        }) : x ? (0, R.jsx)(m, {
            ...z.securityTitle
        }) : (0, R.jsx)(m, {
            ...z.genericTitle
        })
    }), t[7] = x, t[8] = o, t[9] = b, t[10] = F) : F = t[10];
    let V;
    t[11] !== k || t[12] !== x || t[13] !== o || t[14] !== b ? (V = (0, R.jsx)(`p`, {
        className: `text-token-text-secondary text-base`,
        children: b ? (0, R.jsx)(m, {
            ...z.localDescription,
            values: {
                a: k
            }
        }) : x && o ? (0, R.jsx)(m, {
            ...z.securityCloudDescription,
            values: {
                a: k
            }
        }) : x ? (0, R.jsx)(m, {
            ...z.securityDescription,
            values: {
                a: k
            }
        }) : (0, R.jsx)(m, {
            ...z.genericDescription,
            values: {
                a: k
            }
        })
    }), t[11] = k, t[12] = x, t[13] = o, t[14] = b, t[15] = V) : V = t[15];
    let H;
    t[16] !== F || t[17] !== V ? (H = (0, R.jsxs)(`div`, {
        className: `space-y-3`,
        children: [F, V]
    }), t[16] = F, t[17] = V, t[18] = H) : H = t[18];
    let U;
    t[19] !== g || t[20] !== x || t[21] !== c || t[22] !== b ? (U = b ? (0, R.jsxs)(`div`, {
        className: `flex flex-row items-center justify-center gap-3`,
        children: [(0, R.jsx)(N, {
            data: w,
            className: `w-auto`,
            buttonWidthClassName: `w-auto`,
            onLinkClick: E
        }), (0, R.jsx)(f, {
            color: `secondary`,
            size: `large`,
            onClick: () => {
                c(`/codex/cloud/settings/analytics`, {
                    state: {
                        embed: !0
                    }
                })
            },
            children: (0, R.jsx)(m, {
                ...z.localAnalyticsCta
            })
        })]
    }) : (0, R.jsxs)(`div`, {
        className: `flex flex-col items-center justify-center gap-3 sm:flex-row`,
        children: [(0, R.jsx)(f, {
            color: `secondary`,
            size: `large`,
            onClick: () => {
                c(`/`)
            },
            children: (0, R.jsx)(m, {
                ...z.genericBackToChatCta
            })
        }), !x && g && (0, R.jsx)(f, {
            color: `primary`,
            size: `large`,
            onClick: () => {
                c(`/codex/cloud/settings/analytics`, {
                    state: {
                        embed: !0
                    }
                })
            },
            children: (0, R.jsx)(m, {
                ...z.genericAnalyticsCta
            })
        })]
    }), t[19] = g, t[20] = x, t[21] = c, t[22] = b, t[23] = U) : U = t[23];
    let W;
    return t[24] !== H || t[25] !== U ? (W = (0, R.jsx)(S, {
        children: (0, R.jsx)(`div`, {
            className: `flex h-full w-full flex-col items-center px-6 py-10`,
            children: (0, R.jsxs)(`div`, {
                className: j,
                children: [M, H, U]
            })
        })
    }), t[24] = H, t[25] = U, t[26] = W) : W = t[26], W
}

function I(e) {
    o(e.href) && x.recordCodexAppSurfaceAction(`codex_access`, `download`, e.analyticsAction)
}
var L, R, z, B, V, H = e((() => {
    L = _(), i(), c(), w(), t(), b(), n(), M(), D(), k(), C(), j(), r(), y(), p(), R = v(), z = g({
        localTitle: {
            defaultMessage: `Use Codex locally to get started`,
            id: `wham.businessUpsell.title`
        },
        localDescription: {
            defaultMessage: `Your admin has turned off Codex Cloud, but you can continue using Codex locally in your IDE, CLI or with the Codex app. Workspace admins can re-enable it in <a>Admin permissions</a>.`,
            id: `wham.businessUpsell.description`
        },
        localAnalyticsCta: {
            defaultMessage: `View Codex analytics`,
            id: `wham.businessUpsell.learnMore`
        },
        localDownloadAppCta: {
            defaultMessage: `Download app`,
            id: `wham.businessUpsell.downloadApp`
        },
        localTryInIdeCta: {
            defaultMessage: `Try in your IDE`,
            id: `wham.businessUpsell.tryInIde`
        },
        vsCode: {
            defaultMessage: `VS Code`,
            id: `wham.businessUpsell.vscode`
        },
        cursor: {
            defaultMessage: `Cursor`,
            id: `wham.businessUpsell.cursor`
        },
        jetBrains: {
            defaultMessage: `JetBrains`,
            id: `wham.businessUpsell.jetbrains`
        },
        warp: {
            defaultMessage: `Warp`,
            id: `wham.businessUpsell.warp`
        },
        genericTitle: {
            defaultMessage: `Ask your admin to enable Codex`,
            id: `wham.businessUpsell.genericTitle`
        },
        genericDescription: {
            defaultMessage: `Codex helps your teams ship faster, but your workspace admin has turned off Codex Web. Reach out so they can enable it for everyone in <a>Admin permissions</a>.`,
            id: `wham.businessUpsell.genericDescription`
        },
        genericBackToChatCta: {
            defaultMessage: `Back to ChatGPT`,
            id: `wham.businessUpsell.genericBackToChat`
        },
        genericAnalyticsCta: {
            defaultMessage: `View Codex analytics`,
            id: `wham.businessUpsell.genericAnalytics`
        },
        securityTitle: {
            defaultMessage: `Ask your admin to enable Codex Security`,
            id: `wham.businessUpsell.securityTitle`
        },
        securityDescription: {
            defaultMessage: `Codex Security helps your team identify and fix vulnerabilities faster, but your workspace admin has turned it off. Reach out so they can enable it for everyone in <a>Admin permissions</a>.`,
            id: `wham.businessUpsell.securityDescription`
        },
        securityCloudTitle: {
            defaultMessage: `Ask your admin to enable Codex and Codex Security`,
            id: `wham.businessUpsell.securityCloudTitle`
        },
        securityCloudDescription: {
            defaultMessage: `Codex Security requires both Codex Cloud and Codex Security to be enabled for your workspace. Reach out to your admin so they can turn them on for everyone in <a>Admin permissions</a>.`,
            id: `wham.businessUpsell.securityCloudDescription`
        }
    }), B = `https://chatgpt.com/admin/permissions`, V = {
        mac: [
            [{
                links: [{
                    label: z.localDownloadAppCta,
                    href: l,
                    analyticsAction: `codex_access_download_app`
                }]
            }]
        ],
        windows: [
            [{
                dropdownCtaLabel: z.localTryInIdeCta,
                links: [{
                    label: z.vsCode,
                    href: `vscode:extension/openai.chatgpt`,
                    analyticsAction: `codex_access_vscode`
                }, {
                    label: z.cursor,
                    href: `cursor:extension/openai.chatgpt`,
                    analyticsAction: `codex_access_cursor`
                }, {
                    label: z.jetBrains,
                    href: `https://blog.jetbrains.com/ai/2026/01/codex-in-jetbrains-ides/`,
                    analyticsAction: `codex_access_jetbrains`
                }, {
                    label: z.warp,
                    href: `http://warp.dev/codex`,
                    analyticsAction: `codex_access_warp`
                }]
            }]
        ],
        desktop: [
            [{
                dropdownCtaLabel: z.localTryInIdeCta,
                links: [{
                    label: z.vsCode,
                    href: `vscode:extension/openai.chatgpt`,
                    analyticsAction: `codex_access_vscode_desktop`
                }, {
                    label: z.cursor,
                    href: `cursor:extension/openai.chatgpt`,
                    analyticsAction: `codex_access_cursor_desktop`
                }, {
                    label: z.jetBrains,
                    href: `https://blog.jetbrains.com/ai/2026/01/codex-in-jetbrains-ides/`,
                    analyticsAction: `codex_access_jetbrains_desktop`
                }, {
                    label: z.warp,
                    href: `http://warp.dev/codex`,
                    analyticsAction: `codex_access_warp_desktop`
                }]
            }]
        ],
        mobile: [
            [{
                links: [{
                    label: z.localTryInIdeCta,
                    href: ``
                }]
            }]
        ]
    }
}));
export {
    H as n, F as t
};
//# sourceMappingURL=f2728ff1-mh3w5wajiu8gd2ln.js.map