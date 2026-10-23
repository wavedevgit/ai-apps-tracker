import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as t,
    K5 as n,
    Oj as r,
    U1 as i,
    ZG as a,
    eE as o,
    eK as s,
    hj as c,
    oK as l,
    q1 as u,
    q5 as d,
    sK as f
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as p,
    Ln as m,
    Nn as h,
    Nt as g,
    Q as _,
    Rn as v,
    wn as y
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    BKn as b,
    HKn as x,
    MJ as S,
    jJ as C
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    $f as w,
    ep as T
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    t as E
} from "./9ac7a75a-b2xe2u6rqme9vdc9.js";
import {
    o as D
} from "./e19f3910-nqncd9m6rjdlfk2l.js";
import {
    r as O,
    t as k
} from "./fab52ad7-oopbgdnnknf2q0nm.js";
import {
    n as A,
    r as j
} from "./d848de1a-djb3cmbfh4fsqptl.js";
import {
    n as M,
    t as N
} from "./50217878-n04sj0jm4npgyvrv.js";

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
    let r = (0, L.c)(27),
        {
            feature: a,
            requiresCodexCloud: o
        } = e,
        c = a === void 0 ? `codex` : a,
        u = o !== void 0 && o,
        d = g(),
        f = i(),
        {
            data: p
        } = s(f?.getWorkspaceId()),
        m = O(),
        _ = p?.beta_settings.wham_local_access ?? !1,
        v;
    r[0] === p?.permissions ? v = r[1] : (v = p?.permissions?.includes(l.AllowCodexLocalAccess) ?? !1, r[0] = p?.permissions, r[1] = v);
    let y = v,
        x = c === `codex` && f?.isEnterprisey() && _ && y,
        S = c === `codex_security`,
        C;
    r[2] === Symbol.for(`react.memo_cache_sentinel`) ? (C = P(), r[2] = C) : C = r[2];
    let T = C,
        E = I,
        D;
    r[3] === f ? D = r[4] : (D = e => (0, R.jsx)(`a`, {
        href: A(f?.getWorkspaceId(), B) ?? B,
        target: `_blank`,
        rel: `noreferrer`,
        className: `text-token-text-accent hover:text-token-text-accent/80 underline`,
        children: e
    }), r[3] = f, r[4] = D);
    let k = D,
        j, M;
    r[5] === Symbol.for(`react.memo_cache_sentinel`) ? (j = n(`bg-token-bg-elevated-primary`, `border-token-border-subtle`, `mx-auto my-auto flex max-w-xl flex-col gap-6 rounded-2xl border p-8 text-center`, `shadow-(--shadow-lg)`), M = (0, R.jsx)(w, {
        "aria-hidden": !0,
        className: `text-token-text-primary mx-auto h-16 w-16 select-none`
    }), r[5] = j, r[6] = M) : (j = r[5], M = r[6]);
    let F;
    r[7] !== S || r[8] !== u || r[9] !== x ? (F = (0, R.jsx)(`h1`, {
        className: `text-token-text-primary text-3xl font-semibold`,
        children: x ? (0, R.jsx)(h, {
            ...z.localTitle
        }) : S && u ? (0, R.jsx)(h, {
            ...z.securityCloudTitle
        }) : S ? (0, R.jsx)(h, {
            ...z.securityTitle
        }) : (0, R.jsx)(h, {
            ...z.genericTitle
        })
    }), r[7] = S, r[8] = u, r[9] = x, r[10] = F) : F = r[10];
    let V;
    r[11] !== k || r[12] !== S || r[13] !== u || r[14] !== x ? (V = (0, R.jsx)(`p`, {
        className: `text-token-text-secondary text-base`,
        children: x ? (0, R.jsx)(h, {
            ...z.localDescription,
            values: {
                a: k
            }
        }) : S && u ? (0, R.jsx)(h, {
            ...z.securityCloudDescription,
            values: {
                a: k
            }
        }) : S ? (0, R.jsx)(h, {
            ...z.securityDescription,
            values: {
                a: k
            }
        }) : (0, R.jsx)(h, {
            ...z.genericDescription,
            values: {
                a: k
            }
        })
    }), r[11] = k, r[12] = S, r[13] = u, r[14] = x, r[15] = V) : V = r[15];
    let H;
    r[16] !== F || r[17] !== V ? (H = (0, R.jsxs)(`div`, {
        className: `space-y-3`,
        children: [F, V]
    }), r[16] = F, r[17] = V, r[18] = H) : H = r[18];
    let U;
    r[19] !== m || r[20] !== S || r[21] !== d || r[22] !== x ? (U = x ? (0, R.jsxs)(`div`, {
        className: `flex flex-row items-center justify-center gap-3`,
        children: [(0, R.jsx)(N, {
            data: T,
            className: `w-auto`,
            buttonWidthClassName: `w-auto`,
            onLinkClick: E
        }), (0, R.jsx)(t, {
            color: `secondary`,
            size: `large`,
            onClick: () => {
                d(`/codex/cloud/settings/analytics`, {
                    state: {
                        embed: !0
                    }
                })
            },
            children: (0, R.jsx)(h, {
                ...z.localAnalyticsCta
            })
        })]
    }) : (0, R.jsxs)(`div`, {
        className: `flex flex-col items-center justify-center gap-3 sm:flex-row`,
        children: [(0, R.jsx)(t, {
            color: `secondary`,
            size: `large`,
            onClick: () => {
                d(`/`)
            },
            children: (0, R.jsx)(h, {
                ...z.genericBackToChatCta
            })
        }), !S && m && (0, R.jsx)(t, {
            color: `primary`,
            size: `large`,
            onClick: () => {
                d(`/codex/cloud/settings/analytics`, {
                    state: {
                        embed: !0
                    }
                })
            },
            children: (0, R.jsx)(h, {
                ...z.genericAnalyticsCta
            })
        })]
    }), r[19] = m, r[20] = S, r[21] = d, r[22] = x, r[23] = U) : U = r[23];
    let W;
    return r[24] !== H || r[25] !== U ? (W = (0, R.jsx)(b, {
        children: (0, R.jsx)(`div`, {
            className: `flex h-full w-full flex-col items-center px-6 py-10`,
            children: (0, R.jsxs)(`div`, {
                className: j,
                children: [M, H, U]
            })
        })
    }), r[24] = H, r[25] = U, r[26] = W) : W = r[26], W
}

function I(e) {
    r(e.href) && C.recordCodexAppSurfaceAction(`codex_access`, `download`, e.analyticsAction)
}
var L, R, z, B, V, H = e((() => {
    L = y(), o(), f(), T(), a(), x(), u(), M(), D(), k(), S(), j(), d(), v(), _(), R = p(), z = m({
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
                    href: c,
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
//# sourceMappingURL=f2728ff1-at752uc4fgib5xo3.js.map