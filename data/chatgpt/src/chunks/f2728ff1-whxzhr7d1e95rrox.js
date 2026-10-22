import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as t,
    Oj as n,
    U1 as r,
    ZG as i,
    eE as a,
    eK as o,
    hj as s,
    l7 as c,
    oK as l,
    q1 as u,
    sK as d,
    u7 as f
} from "./4813494d-r54yv6lv29x4ew99.js";
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
    EKn as b,
    MJ as x,
    jJ as S,
    wKn as C
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    $f as w,
    ep as T
} from "./30901919-k5uqyx4vyplt9toa.js";
import {
    t as E
} from "./9ac7a75a-crpgrc4bovdj6lu7.js";
import {
    o as D
} from "./e19f3910-om5goj2s40m5bbt4.js";
import {
    r as O,
    t as k
} from "./fab52ad7-dklpivh95eeg77ey.js";
import {
    n as A,
    r as j
} from "./d848de1a-kfuujudqxqt2xov2.js";
import {
    n as M,
    t as N
} from "./50217878-klqn7yj7okyv7ya0.js";

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
    let n = (0, L.c)(27),
        {
            feature: i,
            requiresCodexCloud: a
        } = e,
        s = i === void 0 ? `codex` : i,
        u = a !== void 0 && a,
        d = g(),
        f = r(),
        {
            data: p
        } = o(f?.getWorkspaceId()),
        m = O(),
        _ = p?.beta_settings.wham_local_access ?? !1,
        v;
    n[0] === p?.permissions ? v = n[1] : (v = p?.permissions?.includes(l.AllowCodexLocalAccess) ?? !1, n[0] = p?.permissions, n[1] = v);
    let y = v,
        b = s === `codex` && f?.isEnterprisey() && _ && y,
        x = s === `codex_security`,
        S;
    n[2] === Symbol.for(`react.memo_cache_sentinel`) ? (S = P(), n[2] = S) : S = n[2];
    let T = S,
        E = I,
        D;
    n[3] === f ? D = n[4] : (D = e => (0, R.jsx)(`a`, {
        href: A(f?.getWorkspaceId(), B) ?? B,
        target: `_blank`,
        rel: `noreferrer`,
        className: `text-token-text-accent hover:text-token-text-accent/80 underline`,
        children: e
    }), n[3] = f, n[4] = D);
    let k = D,
        j, M;
    n[5] === Symbol.for(`react.memo_cache_sentinel`) ? (j = c(`bg-token-bg-elevated-primary`, `border-token-border-subtle`, `mx-auto my-auto flex max-w-xl flex-col gap-6 rounded-2xl border p-8 text-center`, `shadow-(--shadow-lg)`), M = (0, R.jsx)(w, {
        "aria-hidden": !0,
        className: `text-token-text-primary mx-auto h-16 w-16 select-none`
    }), n[5] = j, n[6] = M) : (j = n[5], M = n[6]);
    let F;
    n[7] !== x || n[8] !== u || n[9] !== b ? (F = (0, R.jsx)(`h1`, {
        className: `text-token-text-primary text-3xl font-semibold`,
        children: b ? (0, R.jsx)(h, {
            ...z.localTitle
        }) : x && u ? (0, R.jsx)(h, {
            ...z.securityCloudTitle
        }) : x ? (0, R.jsx)(h, {
            ...z.securityTitle
        }) : (0, R.jsx)(h, {
            ...z.genericTitle
        })
    }), n[7] = x, n[8] = u, n[9] = b, n[10] = F) : F = n[10];
    let V;
    n[11] !== k || n[12] !== x || n[13] !== u || n[14] !== b ? (V = (0, R.jsx)(`p`, {
        className: `text-token-text-secondary text-base`,
        children: b ? (0, R.jsx)(h, {
            ...z.localDescription,
            values: {
                a: k
            }
        }) : x && u ? (0, R.jsx)(h, {
            ...z.securityCloudDescription,
            values: {
                a: k
            }
        }) : x ? (0, R.jsx)(h, {
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
    }), n[11] = k, n[12] = x, n[13] = u, n[14] = b, n[15] = V) : V = n[15];
    let H;
    n[16] !== F || n[17] !== V ? (H = (0, R.jsxs)(`div`, {
        className: `space-y-3`,
        children: [F, V]
    }), n[16] = F, n[17] = V, n[18] = H) : H = n[18];
    let U;
    n[19] !== m || n[20] !== x || n[21] !== d || n[22] !== b ? (U = b ? (0, R.jsxs)(`div`, {
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
        }), !x && m && (0, R.jsx)(t, {
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
    }), n[19] = m, n[20] = x, n[21] = d, n[22] = b, n[23] = U) : U = n[23];
    let W;
    return n[24] !== H || n[25] !== U ? (W = (0, R.jsx)(C, {
        children: (0, R.jsx)(`div`, {
            className: `flex h-full w-full flex-col items-center px-6 py-10`,
            children: (0, R.jsxs)(`div`, {
                className: j,
                children: [M, H, U]
            })
        })
    }), n[24] = H, n[25] = U, n[26] = W) : W = n[26], W
}

function I(e) {
    n(e.href) && S.recordCodexAppSurfaceAction(`codex_access`, `download`, e.analyticsAction)
}
var L, R, z, B, V, H = e((() => {
    L = y(), a(), d(), T(), i(), b(), u(), M(), D(), k(), x(), j(), f(), v(), _(), R = p(), z = m({
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
                    href: s,
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
//# sourceMappingURL=f2728ff1-whxzhr7d1e95rrox.js.map