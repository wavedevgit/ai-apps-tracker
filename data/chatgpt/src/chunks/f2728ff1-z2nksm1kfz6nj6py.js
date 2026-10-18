import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AG as t,
    AT as n,
    DG as r,
    GA as i,
    IG as a,
    LG as o,
    b5 as s,
    ij as c,
    kT as l,
    o1 as u,
    u1 as d,
    y5 as f
} from "./4813494d-cb22y2w19zwyshmt.js";
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
    AGn as b,
    DJ as x,
    EJ as S,
    MGn as C
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    np as w,
    tp as T
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    t as E
} from "./9ac7a75a-fqy7qnhwh7jd5rfv.js";
import {
    o as D
} from "./e19f3910-nriy7br1qc4gkn80.js";
import {
    r as O,
    t as k
} from "./fab52ad7-c6tze5skxh7lv3b4.js";
import {
    n as A,
    t as j
} from "./50217878-lz2bqkpw2xcytqxi.js";

function M() {
    let e = E();
    return e == null ? B : {
        ...B,
        windows: [
            [{
                links: [{
                    label: R.localDownloadAppCta,
                    href: e,
                    analyticsAction: `codex_access_download_app`
                }]
            }]
        ]
    }
}

function N(e) {
    "use forget";
    let n = (0, I.c)(24),
        {
            feature: r,
            requiresCodexCloud: i
        } = e,
        o = r === void 0 ? `codex` : r,
        s = i !== void 0 && i,
        c = _(),
        d = u(),
        {
            data: p
        } = t(d?.getWorkspaceId()),
        m = O(),
        h = p?.beta_settings.wham_local_access ?? !1,
        v;
    n[0] === p?.permissions ? v = n[1] : (v = p?.permissions?.includes(a.AllowCodexLocalAccess) ?? !1, n[0] = p?.permissions, n[1] = v);
    let y = v,
        x = o === `codex` && d?.isEnterprisey() && h && y,
        S = o === `codex_security`,
        C;
    n[2] === Symbol.for(`react.memo_cache_sentinel`) ? (C = M(), n[2] = C) : C = n[2];
    let w = C,
        E = F,
        D = P,
        k, A;
    n[3] === Symbol.for(`react.memo_cache_sentinel`) ? (k = f(`bg-token-bg-elevated-primary`, `border-token-border-subtle`, `mx-auto my-auto flex max-w-xl flex-col gap-6 rounded-2xl border p-8 text-center`, `shadow-(--shadow-lg)`), A = (0, L.jsx)(T, {
        "aria-hidden": !0,
        className: `text-token-text-primary mx-auto h-16 w-16 select-none`
    }), n[3] = k, n[4] = A) : (k = n[3], A = n[4]);
    let N;
    n[5] !== S || n[6] !== s || n[7] !== x ? (N = (0, L.jsx)(`h1`, {
        className: `text-token-text-primary text-3xl font-semibold`,
        children: x ? (0, L.jsx)(g, {
            ...R.localTitle
        }) : S && s ? (0, L.jsx)(g, {
            ...R.securityCloudTitle
        }) : S ? (0, L.jsx)(g, {
            ...R.securityTitle
        }) : (0, L.jsx)(g, {
            ...R.genericTitle
        })
    }), n[5] = S, n[6] = s, n[7] = x, n[8] = N) : N = n[8];
    let z;
    n[9] !== S || n[10] !== s || n[11] !== x ? (z = (0, L.jsx)(`p`, {
        className: `text-token-text-secondary text-base`,
        children: x ? (0, L.jsx)(g, {
            ...R.localDescription,
            values: {
                a: D
            }
        }) : S && s ? (0, L.jsx)(g, {
            ...R.securityCloudDescription,
            values: {
                a: D
            }
        }) : S ? (0, L.jsx)(g, {
            ...R.securityDescription,
            values: {
                a: D
            }
        }) : (0, L.jsx)(g, {
            ...R.genericDescription,
            values: {
                a: D
            }
        })
    }), n[9] = S, n[10] = s, n[11] = x, n[12] = z) : z = n[12];
    let B;
    n[13] !== N || n[14] !== z ? (B = (0, L.jsxs)(`div`, {
        className: `space-y-3`,
        children: [N, z]
    }), n[13] = N, n[14] = z, n[15] = B) : B = n[15];
    let V;
    n[16] !== m || n[17] !== S || n[18] !== c || n[19] !== x ? (V = x ? (0, L.jsxs)(`div`, {
        className: `flex flex-row items-center justify-center gap-3`,
        children: [(0, L.jsx)(j, {
            data: w,
            className: `w-auto`,
            buttonWidthClassName: `w-auto`,
            onLinkClick: E
        }), (0, L.jsx)(l, {
            color: `secondary`,
            size: `large`,
            onClick: () => {
                c(`/codex/cloud/settings/analytics`, {
                    state: {
                        embed: !0
                    }
                })
            },
            children: (0, L.jsx)(g, {
                ...R.localAnalyticsCta
            })
        })]
    }) : (0, L.jsxs)(`div`, {
        className: `flex flex-col items-center justify-center gap-3 sm:flex-row`,
        children: [(0, L.jsx)(l, {
            color: `secondary`,
            size: `large`,
            onClick: () => {
                c(`/`)
            },
            children: (0, L.jsx)(g, {
                ...R.genericBackToChatCta
            })
        }), !S && m && (0, L.jsx)(l, {
            color: `primary`,
            size: `large`,
            onClick: () => {
                c(`/codex/cloud/settings/analytics`, {
                    state: {
                        embed: !0
                    }
                })
            },
            children: (0, L.jsx)(g, {
                ...R.genericAnalyticsCta
            })
        })]
    }), n[16] = m, n[17] = S, n[18] = c, n[19] = x, n[20] = V) : V = n[20];
    let H;
    return n[21] !== V || n[22] !== B ? (H = (0, L.jsx)(b, {
        children: (0, L.jsx)(`div`, {
            className: `flex h-full w-full flex-col items-center px-6 py-10`,
            children: (0, L.jsxs)(`div`, {
                className: k,
                children: [A, B, V]
            })
        })
    }), n[21] = V, n[22] = B, n[23] = H) : H = n[23], H
}

function P(e) {
    return (0, L.jsx)(`a`, {
        href: z,
        target: `_blank`,
        rel: `noreferrer`,
        className: `text-token-text-accent hover:text-token-text-accent/80 underline`,
        children: e
    })
}

function F(e) {
    c(e.href) && S.recordCodexAppSurfaceAction(`codex_access`, `download`, e.analyticsAction)
}
var I, L, R, z, B, V = e((() => {
    I = y(), n(), o(), w(), r(), C(), d(), A(), D(), k(), x(), s(), v(), p(), L = m(), R = h({
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
    }), z = `https://chatgpt.com/admin/permissions`, B = {
        mac: [
            [{
                links: [{
                    label: R.localDownloadAppCta,
                    href: i,
                    analyticsAction: `codex_access_download_app`
                }]
            }]
        ],
        windows: [
            [{
                dropdownCtaLabel: R.localTryInIdeCta,
                links: [{
                    label: R.vsCode,
                    href: `vscode:extension/openai.chatgpt`,
                    analyticsAction: `codex_access_vscode`
                }, {
                    label: R.cursor,
                    href: `cursor:extension/openai.chatgpt`,
                    analyticsAction: `codex_access_cursor`
                }, {
                    label: R.jetBrains,
                    href: `https://blog.jetbrains.com/ai/2026/01/codex-in-jetbrains-ides/`,
                    analyticsAction: `codex_access_jetbrains`
                }, {
                    label: R.warp,
                    href: `http://warp.dev/codex`,
                    analyticsAction: `codex_access_warp`
                }]
            }]
        ],
        desktop: [
            [{
                dropdownCtaLabel: R.localTryInIdeCta,
                links: [{
                    label: R.vsCode,
                    href: `vscode:extension/openai.chatgpt`,
                    analyticsAction: `codex_access_vscode_desktop`
                }, {
                    label: R.cursor,
                    href: `cursor:extension/openai.chatgpt`,
                    analyticsAction: `codex_access_cursor_desktop`
                }, {
                    label: R.jetBrains,
                    href: `https://blog.jetbrains.com/ai/2026/01/codex-in-jetbrains-ides/`,
                    analyticsAction: `codex_access_jetbrains_desktop`
                }, {
                    label: R.warp,
                    href: `http://warp.dev/codex`,
                    analyticsAction: `codex_access_warp_desktop`
                }]
            }]
        ],
        mobile: [
            [{
                links: [{
                    label: R.localTryInIdeCta,
                    href: ``
                }]
            }]
        ]
    }
}));
export {
    V as n, N as t
};
//# sourceMappingURL=f2728ff1-z2nksm1kfz6nj6py.js.map