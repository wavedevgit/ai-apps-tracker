const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/65071b67-g84qhln57u9wq7x2.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-qsuygr73qjc6rh65.js", "assets/2340486e-komxp8tzs51ny4jj.js", "assets/root-lelxp0l2.css", "assets/30901919-jory365vq6ym5crx.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Az as n,
    J0 as r,
    J5 as i,
    Mh as a,
    Nh as o,
    Pv as s,
    Y0 as c,
    Z0 as l,
    fl as u,
    jz as d,
    kv as f,
    pl as p,
    q5 as m
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as h,
    Hn as g,
    Pn as _,
    Tn as v,
    Vn as y,
    l as ee,
    ln as b,
    s as x,
    un as S,
    zn as C
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    $b as w,
    Gst as T,
    Hst as E,
    Vst as te,
    dX as D,
    ex as O,
    qst as k,
    uX as A
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    Gh as j,
    Kh as M,
    Kv as N,
    Mv as P,
    Nv as F,
    qv as I
} from "./30901919-jory365vq6ym5crx.js";
import {
    d_ as L,
    f_ as R
} from "./8b34dbc2-d4icgkio4i3wfm6q.js";
import {
    Ht as z,
    Vt as B
} from "./c470f5ab-in0lllrdrzeo67gs.js";

function V(e, {
    forceRedirect: t,
    includeQueryParamForRedirect: n
} = {}) {
    if (n) {
        let t = window.location,
            n = encodeURIComponent(JSON.stringify({
                client_redirect_to: `${t.pathname}${t.search}${t.hash??``}`
            }));
        window.open(`${e}?state=${n}`, `_blank`)
    } else window.open(e, `_blank`)
}

function H(e) {
    "use forget";
    let t = (0, W.c)(14),
        {
            githubAppInstallationUrl: n
        } = e,
        r = h(),
        i = !n,
        a = i ? `cursor-not-allowed opacity-50` : `hover:bg-token-bg-secondary dark:hover:bg-token-bg-primary`,
        o;
    t[0] === a ? o = t[1] : (o = m(`text-token-text-primary bg-token-bg-primary flex w-full items-center rounded-lg px-2 py-3 text-center text-sm dark:bg-[#353535]`, a), t[0] = a, t[1] = o);
    let s;
    t[2] !== r || t[3] !== i ? (s = i ? r.formatMessage({
        id: `wham.accountSelect.githubAppInstallUrlUnavailable`,
        defaultMessage: `GitHub app installation URL unavailable`
    }) : void 0, t[2] = r, t[3] = i, t[4] = s) : s = t[4];
    let c;
    t[5] === n ? c = t[6] : (c = () => {
        n && V(n)
    }, t[5] = n, t[6] = c);
    let l, u;
    t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (l = (0, G.jsx)(M, {
        "aria-hidden": !0,
        className: `icon-sm me-1`
    }), u = (0, G.jsx)(_, {
        id: `wham.accountSelect.addGitHubAccount`,
        defaultMessage: `Connect GitHub org`
    }), t[7] = l, t[8] = u) : (l = t[7], u = t[8]);
    let d;
    return t[9] !== i || t[10] !== o || t[11] !== s || t[12] !== c ? (d = (0, G.jsx)(`div`, {
        className: `flex items-center justify-center px-2`,
        children: (0, G.jsxs)(`button`, {
            className: o,
            disabled: i,
            title: s,
            onClick: c,
            children: [l, u]
        })
    }), t[9] = i, t[10] = o, t[11] = s, t[12] = c, t[13] = d) : d = t[13], d
}

function U(e) {
    "use forget";
    let t = (0, W.c)(13),
        {
            children: r,
            className: i,
            selectedInstallationId: a,
            githubInstallationsLoading: o,
            handleValueChange: s,
            githubAppInstallationUrl: c
        } = e,
        l = h(),
        u;
    t[0] === i ? u = t[1] : (u = m(`flex flex-col gap-2`, i), t[0] = i, t[1] = u);
    let d;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, G.jsx)(`p`, {
        className: `text-token-text-primary text-sm font-medium`,
        children: (0, G.jsx)(_, {
            id: `wham.accountSelect.githubOrganization`,
            defaultMessage: `GitHub organization`
        })
    }), t[2] = d) : d = t[2];
    let f;
    t[3] !== r || t[4] !== c || t[5] !== o || t[6] !== s || t[7] !== l || t[8] !== a ? (f = o ? (0, G.jsx)(T, {
        className: `h-9 w-52`
    }) : (0, G.jsxs)(L.Root, {
        value: o ? `` : a?.toString() ?? ``,
        onValueChange: s,
        disabled: o,
        children: [(0, G.jsx)(L.Trigger, {
            className: `border-token-border-heavy bg-token-bg-primary flex w-52 rounded-md border`,
            "aria-label": l.formatMessage({
                id: `wham.accountSelect.openOrganizationMenu`,
                defaultMessage: `Open organization menu`
            }),
            children: (0, G.jsxs)(`div`, {
                className: `flex w-full items-center justify-between`,
                children: [(0, G.jsxs)(`div`, {
                    className: `flex w-0 flex-1 items-center`,
                    children: [(0, G.jsx)(B, {
                        "aria-hidden": !0,
                        className: `icon-sm me-1.5`
                    }), (0, G.jsx)(`div`, {
                        className: `truncate`,
                        children: (0, G.jsx)(L.Value, {
                            placeholder: l.formatMessage({
                                id: `wham.accountSelect.selectOrganization`,
                                defaultMessage: `Select organization`
                            })
                        })
                    })]
                }), (0, G.jsx)(L.Icon, {})]
            })
        }), (0, G.jsx)(L.Portal, {
            children: (0, G.jsxs)(L.Content, {
                align: `start`,
                className: `rounded-lg`,
                children: [r, (0, G.jsx)(L.Separator, {
                    className: `mx-3!`
                }), (0, G.jsx)(H, {
                    githubAppInstallationUrl: c
                }), o && (0, G.jsx)(`div`, {
                    className: `flex justify-center p-2`,
                    children: (0, G.jsx)(n, {})
                })]
            })
        })]
    }), t[3] = r, t[4] = c, t[5] = o, t[6] = s, t[7] = l, t[8] = a, t[9] = f) : f = t[9];
    let p;
    return t[10] !== u || t[11] !== f ? (p = (0, G.jsxs)(`div`, {
        className: u,
        children: [d, f]
    }), t[10] = u, t[11] = f, t[12] = p) : p = t[12], p
}
var W, G, ne = e((() => {
    W = v(), z(), j(), l(), R(), k(), d(), c(), i(), C(), G = y(), S(), r(() => b(() => import(`./65071b67-g84qhln57u9wq7x2.js`).then(e => e.RedirectAlertModal), __vite__mapDeps([0, 1, 2, 3, 4, 5])))
}));

function K({
    repository: e,
    provider: t = `github`,
    repositoryWebBaseUrl: n,
    isSelected: r,
    className: i,
    isDisabled: a,
    disablePill: o
}) {
    let s = h(),
        c = J(e, t),
        l = (() => {
            if (n) return `${n}/${e.repository_full_name}`;
            try {
                let n = new URL(e.clone_url);
                return t === `gitlab` ? (n.username = ``, n.password = ``, n.search = ``, n.hash = ``, n.pathname = n.pathname.replace(/\.git$/, ``), n.toString()) : `${n.origin}/${e.repository_full_name}`
            } catch {
                return `${t===`gitlab`?`https://gitlab.com`:`https://github.com`}/${e.repository_full_name}`
            }
        })(),
        u = e.visibility === `private` ? s.formatMessage({
            id: `wham.repositorySection.private`,
            defaultMessage: `Private`
        }) : t === `gitlab` && e.visibility === `internal` ? s.formatMessage({
            id: `wham.repositorySection.internal`,
            defaultMessage: `Internal`
        }) : s.formatMessage({
            id: `wham.repositorySection.public`,
            defaultMessage: `Public`
        });
    return (0, X.jsxs)(`div`, {
        className: m(`flex items-center justify-between gap-2`, i),
        children: [(0, X.jsx)(`div`, {
            className: m(`flex items-start gap-3`, a && `opacity-50`),
            children: (0, X.jsxs)(`div`, {
                className: `flex flex-col`,
                children: [(0, X.jsxs)(`div`, {
                    className: `flex flex-row items-center gap-2`,
                    children: [(0, X.jsx)(`p`, {
                        className: `text-token-text-primary text-start text-sm font-medium`,
                        children: c
                    }), (0, X.jsx)(`a`, {
                        href: l,
                        target: `_blank`,
                        rel: `noopener noreferrer`,
                        className: `text-token-text-secondary opacity-0 group-hover:opacity-100`,
                        "aria-label": t === `gitlab` ? s.formatMessage({
                            id: `wham.repositorySection.viewGitLabRepositoryAriaLabel`,
                            defaultMessage: `Link to view {repository} in GitLab`
                        }, {
                            repository: c
                        }) : s.formatMessage({
                            id: `wham.repositorySection.viewRepositoryAriaLabel`,
                            defaultMessage: `Link to view {repository} in GitHub`
                        }, {
                            repository: c
                        }),
                        onClick: e => {
                            e.stopPropagation()
                        },
                        children: (0, X.jsx)(N, {
                            className: `icon-sm`
                        })
                    })]
                }), (0, X.jsx)(`div`, {
                    className: `text-token-text-secondary text-start text-sm leading-tight font-normal`,
                    children: [e.language, u].filter(Boolean).map((e, t) => (0, X.jsx)(`span`, {
                        className: `after:mx-1 after:content-['\\u00b7'] last:after:content-[none]`,
                        children: e
                    }, t))
                })]
            })
        }), a && o ? o : r ? (0, X.jsx)(`div`, {
            className: `flex items-center gap-2`,
            children: (0, X.jsx)(P, {
                className: `icon-sm`
            })
        }) : null]
    })
}

function re({
    repository: e,
    provider: t,
    repositoryWebBaseUrl: n,
    isSelected: r,
    onClick: i,
    shouldDisableRow: a,
    disablePill: o
}) {
    let s = h(),
        c = a?.(e),
        l = J(e, t);
    return (0, X.jsx)(`button`, {
        className: m(`group flex w-full items-center justify-between gap-2 rounded-md p-3`, c ? `cursor-default select-none` : `hover:bg-token-bg-tertiary cursor-pointer`),
        "aria-label": s.formatMessage({
            id: `wham.repositorySection.repositoryAriaLabel`,
            defaultMessage: `Select repository {repository} to create an environment with`
        }, {
            repository: l
        }),
        disabled: c,
        onClick: i,
        type: `button`,
        children: (0, X.jsx)(K, {
            repository: e,
            provider: t,
            repositoryWebBaseUrl: n,
            isSelected: r,
            className: `w-full`,
            isDisabled: c,
            disablePill: o
        })
    })
}

function q() {
    return (0, X.jsx)(`div`, {
        className: `flex w-full items-center justify-between gap-2 rounded-md`,
        children: (0, X.jsx)(T, {
            className: `h-14 w-full`
        })
    })
}

function J(e, t) {
    return t === `gitlab` ? e.repository_full_name : e.name
}

function ie({
    provider: e = `github`,
    selectedRepository: t,
    onSelect: r,
    installationId: i,
    installationHtmlUrl: a,
    installationAccountLogin: s,
    installationAccountType: c,
    githubConnectorId: l,
    isGitLabConnected: d = !1,
    shouldDisableRow: p,
    disablePill: m
}) {
    let g = h(),
        [v, y] = (0, Y.useState)(``),
        b = O(v.trim(), Q),
        x = (0, Y.useCallback)(e => [...e].sort((e, t) => (e.name ?? ``).localeCompare(t.name ?? ``, void 0, {
            sensitivity: `base`
        })), []);
    (0, Y.useEffect)(() => {
        y(``)
    }, [e, l, s, c, i]);
    let S = e === `gitlab` ? d : i != null && s != null && c != null,
        {
            data: C,
            isPending: w,
            isFetching: T,
            isError: E,
            fetchNextPage: D,
            hasNextPage: k,
            isFetchingNextPage: j
        } = ee({
            queryKey: e === `github` ? [`wham`, `repositories`, i, s, c, l, b] : [`wham`, `repositories`, e, i, s, c, l, b],
            enabled: S,
            initialPageParam: 1,
            queryFn: async ({
                pageParam: t
            }) => {
                if (e === `gitlab`) {
                    let e = await u.searchGitLabRepositories({
                        query: b,
                        limit: Z,
                        page: t,
                        connectorId: l
                    });
                    return {
                        repositories: x((e?.repositories ?? []).slice(0, Z)),
                        hasMore: (e?.repositories?.length ?? 0) >= Z
                    }
                }
                if (i == null || s == null || c == null) return {
                    repositories: [],
                    hasMore: !1
                };
                let n = b.length === 0 ? await u.getRepositoriesByInstallationId(i, t, Z, l) : await u.searchRepositories({
                    account_login: s,
                    account_type: c,
                    query: b,
                    per_page: Z,
                    page: t,
                    connector_id: l
                });
                return {
                    repositories: x((n?.repositories ?? []).slice(0, Z)),
                    hasMore: (n?.repositories?.length ?? 0) >= Z
                }
            },
            getNextPageParam: (e, t) => e.hasMore ? t.length + 1 : void 0
        }),
        M = e === `gitlab` && !S ? [] : C?.pages.flatMap(e => e.repositories ?? []) ?? [],
        N = S && w && M.length === 0,
        P = a ?? f(`installations/${i}`),
        F = (() => {
            if (!a) return `https://github.com`;
            try {
                return new URL(a).origin
            } catch {
                return `https://github.com`
            }
        })(),
        I = !N && E && M.length === 0,
        L = !N && !I && M.length === 0 && (e === `github` || S),
        R = T && !j && b.length > 0;
    return (0, X.jsxs)(`div`, {
        className: `flex flex-col gap-4`,
        children: [(0, X.jsx)(`p`, {
            className: `text-token-text-primary text-sm font-medium`,
            children: (0, X.jsx)(_, {
                id: `wham.createEnvironments.repository`,
                defaultMessage: `Repository`
            })
        }), (0, X.jsx)(`div`, {
            className: `flex justify-between`,
            children: (0, X.jsxs)(`div`, {
                className: `relative w-full`,
                children: [(0, X.jsx)(te, {
                    color: `search`,
                    iconPosition: `left`,
                    icon: o,
                    className: `text-token-text-tertiary flex h-8 w-full items-center rounded-md!`,
                    inputClassName: `text-token-text-primary w-full`,
                    containerInputClassName: `w-full`,
                    name: `search-repos`,
                    type: `text`,
                    value: v,
                    onChange: e => y(e.target.value),
                    placeholder: g.formatMessage({
                        id: `wham.repositorySection.searchPlaceholder`,
                        defaultMessage: `Search`
                    }),
                    ariaLabel: g.formatMessage({
                        id: `wham.repositorySection.searchAria`,
                        defaultMessage: `Search`
                    })
                }), R && (0, X.jsx)(n, {
                    className: `text-token-text-tertiary absolute end-2 top-1/2 h-4 w-4 -translate-y-1/2`
                })]
            })
        }), (0, X.jsxs)(`div`, {
            className: `border-token-border-heavy bg-token-bg-primary flex flex-col gap-2 rounded-lg border p-3`,
            children: [(0, X.jsx)(`div`, {
                className: `flex max-h-56 flex-col overflow-y-auto`,
                children: N ? (0, X.jsxs)(`div`, {
                    className: `flex h-full flex-col gap-2`,
                    children: [(0, X.jsx)(q, {}), (0, X.jsx)(q, {}), (0, X.jsx)(q, {}), (0, X.jsx)(q, {})]
                }) : I ? (0, X.jsx)(`div`, {
                    className: `text-token-text-primary flex h-full items-center justify-center text-sm`,
                    children: e === `gitlab` ? (0, X.jsx)(_, {
                        id: `wham.createEnvironments.repositorySection.gitlabError`,
                        defaultMessage: `Failed to load repositories. Make sure your GitLab account is connected.`
                    }) : (0, X.jsx)(_, {
                        id: `wham.createEnvironments.repositorySection.error`,
                        defaultMessage: `Failed to load repositories. Please ensure you have connected your GitHub account.`
                    })
                }) : (0, X.jsxs)(X.Fragment, {
                    children: [L ? (0, X.jsx)(`div`, {
                        className: `text-md text-token-text-secondary flex h-24 w-full items-center justify-center`,
                        children: (0, X.jsx)(_, {
                            id: `wham.createEnvironments.repositorySection.noRepositories.short`,
                            defaultMessage: `No repositories found`
                        })
                    }) : M.map(n => (0, X.jsxs)(`div`, {
                        children: [(0, X.jsx)(re, {
                            repository: n,
                            provider: e,
                            repositoryWebBaseUrl: e === `github` ? F : void 0,
                            isSelected: t === n.id,
                            onClick: () => r(n.id, n.repository_full_name, n.name),
                            shouldDisableRow: p,
                            disablePill: m
                        }), (0, X.jsx)(`div`, {
                            className: `border-token-border-light border-t`
                        })]
                    }, n.id)), R && M.length === 0 && (0, X.jsxs)(`div`, {
                        className: `text-token-text-secondary flex items-center justify-center gap-2 py-2 text-xs`,
                        children: [(0, X.jsx)(n, {
                            className: `h-4 w-4`
                        }), e === `gitlab` ? (0, X.jsx)(_, {
                            id: `wham.repositorySection.searchingGitLab`,
                            defaultMessage: `Searching GitLab...`
                        }) : (0, X.jsx)(_, {
                            id: `wham.repositorySection.searching`,
                            defaultMessage: `Searching GitHub...`
                        })]
                    }), (k || j) && M.length > 0 && (0, X.jsx)(A, {
                        isFetchingNextPage: !!j,
                        hasNextPage: !!k,
                        fetchNextPage: () => D()
                    })]
                })
            }), e === `github` && i && (0, X.jsxs)(X.Fragment, {
                children: [(0, X.jsx)(`p`, {
                    className: `text-token-text-secondary pt-3 text-start text-xs leading-none`,
                    children: (0, X.jsx)(_, {
                        id: `wham.createEnvironments.repositorySection.access`,
                        defaultMessage: `This list only includes repositories that you have access to in GitHub and can use with Codex.`
                    })
                }), (0, X.jsx)(`p`, {
                    className: `text-token-text-secondary text-start text-xs leading-none`,
                    children: i ? (0, X.jsx)(_, {
                        id: `wham.createEnvironments.repositorySection.noRepositories`,
                        defaultMessage: `Missing a repo? <link>Configure repository access</link>.`,
                        values: {
                            link: e => (0, X.jsx)(`a`, {
                                href: P,
                                target: `_blank`,
                                rel: `noopener noreferrer`,
                                className: `underline`,
                                "aria-label": g.formatMessage({
                                    id: `wham.repositorySection.configureRepositoryAccessAriaLabel`,
                                    defaultMessage: `Link to configure repository access in GitHub installations settings page`
                                }),
                                children: e
                            })
                        }
                    }) : (0, X.jsx)(_, {
                        id: `wham.createEnvironments.repositorySection.selectAccount`,
                        defaultMessage: `Select an account to connect to`
                    })
                })]
            })]
        })]
    })
}
var Y, X, Z, Q, $, ae = e((() => {
    E(), d(), I(), F(), a(), D(), k(), s(), w(), p(), x(), i(), Y = t(g()), C(), X = y(), Z = 20, Q = 300, $ = (0, Y.memo)(ie)
}));
export {
    V as a, U as i, $ as n, ne as o, ae as r, K as t
};
//# sourceMappingURL=9c8fc5a3-jcrxflr3ak8m6ya6.js.map