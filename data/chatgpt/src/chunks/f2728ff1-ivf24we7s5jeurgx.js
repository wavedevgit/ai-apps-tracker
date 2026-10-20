import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $G as t,
    G5 as n,
    I1 as r,
    JT as i,
    K5 as a,
    M1 as o,
    Sj as s,
    cK as c,
    lK as l,
    lj as u,
    nK as d,
    qT as f
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    $ as p,
    Bn as m,
    Ln as h,
    Nn as g,
    Pt as _,
    Rn as v,
    wn as y
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    GGn as b,
    OJ as x,
    UGn as S,
    kJ as C
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    np as w,
    tp as T
} from "./30901919-om7b3qf5hp4j9x4l.js";
import {
    t as E
} from "./9ac7a75a-jtc585w9qerwt9l2.js";
import {
    o as D
} from "./e19f3910-e4e73fwjl8xw3qih.js";
import {
    r as O,
    t as k
} from "./fab52ad7-e4xspyknfv1fiwjg.js";
import {
    n as A,
    r as j
} from "./d848de1a-olin5gtuxvy5ecu2.js";
import {
    n as M,
    t as N
} from "./50217878-lex5hpmayeh7scmu.js";

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
            feature: r,
            requiresCodexCloud: i
        } = e,
        a = r === void 0 ? `codex` : r,
        s = i !== void 0 && i,
        l = _(),
        u = o(),
        {
            data: p
        } = d(u?.getWorkspaceId()),
        m = O(),
        h = p?.beta_settings.wham_local_access ?? !1,
        v;
    t[0] === p?.permissions ? v = t[1] : (v = p?.permissions?.includes(c.AllowCodexLocalAccess) ?? !1, t[0] = p?.permissions, t[1] = v);
    let y = v,
        b = a === `codex` && u?.isEnterprisey() && h && y,
        x = a === `codex_security`,
        C;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (C = P(), t[2] = C) : C = t[2];
    let w = C,
        E = I,
        D;
    t[3] === u ? D = t[4] : (D = e => (0, R.jsx)(`a`, {
        href: A(u?.getWorkspaceId(), B) ?? B,
        target: `_blank`,
        rel: `noreferrer`,
        className: `text-token-text-accent hover:text-token-text-accent/80 underline`,
        children: e
    }), t[3] = u, t[4] = D);
    let k = D,
        j, M;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (j = n(`bg-token-bg-elevated-primary`, `border-token-border-subtle`, `mx-auto my-auto flex max-w-xl flex-col gap-6 rounded-2xl border p-8 text-center`, `shadow-(--shadow-lg)`), M = (0, R.jsx)(T, {
        "aria-hidden": !0,
        className: `text-token-text-primary mx-auto h-16 w-16 select-none`
    }), t[5] = j, t[6] = M) : (j = t[5], M = t[6]);
    let F;
    t[7] !== x || t[8] !== s || t[9] !== b ? (F = (0, R.jsx)(`h1`, {
        className: `text-token-text-primary text-3xl font-semibold`,
        children: b ? (0, R.jsx)(g, {
            ...z.localTitle
        }) : x && s ? (0, R.jsx)(g, {
            ...z.securityCloudTitle
        }) : x ? (0, R.jsx)(g, {
            ...z.securityTitle
        }) : (0, R.jsx)(g, {
            ...z.genericTitle
        })
    }), t[7] = x, t[8] = s, t[9] = b, t[10] = F) : F = t[10];
    let V;
    t[11] !== k || t[12] !== x || t[13] !== s || t[14] !== b ? (V = (0, R.jsx)(`p`, {
        className: `text-token-text-secondary text-base`,
        children: b ? (0, R.jsx)(g, {
            ...z.localDescription,
            values: {
                a: k
            }
        }) : x && s ? (0, R.jsx)(g, {
            ...z.securityCloudDescription,
            values: {
                a: k
            }
        }) : x ? (0, R.jsx)(g, {
            ...z.securityDescription,
            values: {
                a: k
            }
        }) : (0, R.jsx)(g, {
            ...z.genericDescription,
            values: {
                a: k
            }
        })
    }), t[11] = k, t[12] = x, t[13] = s, t[14] = b, t[15] = V) : V = t[15];
    let H;
    t[16] !== F || t[17] !== V ? (H = (0, R.jsxs)(`div`, {
        className: `space-y-3`,
        children: [F, V]
    }), t[16] = F, t[17] = V, t[18] = H) : H = t[18];
    let U;
    t[19] !== m || t[20] !== x || t[21] !== l || t[22] !== b ? (U = b ? (0, R.jsxs)(`div`, {
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
                l(`/codex/cloud/settings/analytics`, {
                    state: {
                        embed: !0
                    }
                })
            },
            children: (0, R.jsx)(g, {
                ...z.localAnalyticsCta
            })
        })]
    }) : (0, R.jsxs)(`div`, {
        className: `flex flex-col items-center justify-center gap-3 sm:flex-row`,
        children: [(0, R.jsx)(f, {
            color: `secondary`,
            size: `large`,
            onClick: () => {
                l(`/`)
            },
            children: (0, R.jsx)(g, {
                ...z.genericBackToChatCta
            })
        }), !x && m && (0, R.jsx)(f, {
            color: `primary`,
            size: `large`,
            onClick: () => {
                l(`/codex/cloud/settings/analytics`, {
                    state: {
                        embed: !0
                    }
                })
            },
            children: (0, R.jsx)(g, {
                ...z.genericAnalyticsCta
            })
        })]
    }), t[19] = m, t[20] = x, t[21] = l, t[22] = b, t[23] = U) : U = t[23];
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
    s(e.href) && x.recordCodexAppSurfaceAction(`codex_access`, `download`, e.analyticsAction)
}
var L, R, z, B, V, H = e((() => {
    L = y(), i(), l(), w(), t(), b(), r(), M(), D(), k(), C(), j(), a(), v(), p(), R = m(), z = h({
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
                    href: u,
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
//# sourceMappingURL=f2728ff1-ivf24we7s5jeurgx.js.map