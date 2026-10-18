const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/65071b67-dl4scue7n1769p2b.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/30901919-e33mbl5u1y88w5wu.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    C0 as n,
    Jc as r,
    S0 as i,
    T0 as a,
    Yc as o,
    b5 as s,
    dv as c,
    dz as l,
    fz as u,
    gv as d,
    hh as f,
    mh as p,
    y5 as m
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as h,
    Nn as g,
    Rn as _,
    Vn as v,
    cn as y,
    l as b,
    ln as x,
    s as S,
    wn as C,
    zn as w
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Bst as T,
    Gst as E,
    Qb as ee,
    Ust as D,
    Zb as O,
    cX as te,
    lX as k,
    zst as A
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Fv as j,
    Gh as M,
    Iv as N,
    Kh as P,
    Xv as F,
    Yv as I
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    d_ as L,
    f_ as R
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    Ht as z,
    Vt as B
} from "./c470f5ab-m68dth1hatzjj8yh.js";

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
        r = w(),
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
    t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (l = (0, G.jsx)(P, {
        "aria-hidden": !0,
        className: `icon-sm me-1`
    }), u = (0, G.jsx)(g, {
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
            children: n,
            className: r,
            selectedInstallationId: i,
            githubInstallationsLoading: a,
            handleValueChange: o,
            githubAppInstallationUrl: s
        } = e,
        c = w(),
        u;
    t[0] === r ? u = t[1] : (u = m(`flex flex-col gap-2`, r), t[0] = r, t[1] = u);
    let d;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, G.jsx)(`p`, {
        className: `text-token-text-primary text-sm font-medium`,
        children: (0, G.jsx)(g, {
            id: `wham.accountSelect.githubOrganization`,
            defaultMessage: `GitHub organization`
        })
    }), t[2] = d) : d = t[2];
    let f;
    t[3] !== n || t[4] !== s || t[5] !== a || t[6] !== o || t[7] !== c || t[8] !== i ? (f = a ? (0, G.jsx)(D, {
        className: `h-9 w-52`
    }) : (0, G.jsxs)(L.Root, {
        value: a ? `` : i?.toString() ?? ``,
        onValueChange: o,
        disabled: a,
        children: [(0, G.jsx)(L.Trigger, {
            className: `border-token-border-heavy bg-token-bg-primary flex w-52 rounded-md border`,
            "aria-label": c.formatMessage({
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
                            placeholder: c.formatMessage({
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
                children: [n, (0, G.jsx)(L.Separator, {
                    className: `mx-3!`
                }), (0, G.jsx)(H, {
                    githubAppInstallationUrl: s
                }), a && (0, G.jsx)(`div`, {
                    className: `flex justify-center p-2`,
                    children: (0, G.jsx)(l, {})
                })]
            })
        })]
    }), t[3] = n, t[4] = s, t[5] = a, t[6] = o, t[7] = c, t[8] = i, t[9] = f) : f = t[9];
    let p;
    return t[10] !== u || t[11] !== f ? (p = (0, G.jsxs)(`div`, {
        className: u,
        children: [d, f]
    }), t[10] = u, t[11] = f, t[12] = p) : p = t[12], p
}
var W, G, ne = e((() => {
    W = C(), z(), M(), a(), R(), E(), u(), n(), s(), _(), G = h(), x(), i(() => y(() => import(`./65071b67-dl4scue7n1769p2b.js`).then(e => e.RedirectAlertModal), __vite__mapDeps([0, 1, 2, 3, 4, 5])))
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
    let s = w(),
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
                        children: (0, X.jsx)(I, {
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
            children: (0, X.jsx)(j, {
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
    let s = w(),
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
        children: (0, X.jsx)(D, {
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
    onSelect: n,
    installationId: i,
    installationHtmlUrl: a,
    installationAccountLogin: o,
    installationAccountType: s,
    githubConnectorId: u,
    isGitLabConnected: d = !1,
    shouldDisableRow: p,
    disablePill: m
}) {
    let h = w(),
        [_, v] = (0, Y.useState)(``),
        y = ee(_.trim(), Q),
        x = (0, Y.useCallback)(e => [...e].sort((e, t) => (e.name ?? ``).localeCompare(t.name ?? ``, void 0, {
            sensitivity: `base`
        })), []);
    (0, Y.useEffect)(() => {
        v(``)
    }, [e, u, o, s, i]);
    let S = e === `gitlab` ? d : i != null && o != null && s != null,
        {
            data: C,
            isPending: T,
            isFetching: E,
            isError: D,
            fetchNextPage: O,
            hasNextPage: k,
            isFetchingNextPage: j
        } = b({
            queryKey: e === `github` ? [`wham`, `repositories`, i, o, s, u, y] : [`wham`, `repositories`, e, i, o, s, u, y],
            enabled: S,
            initialPageParam: 1,
            queryFn: async ({
                pageParam: t
            }) => {
                if (e === `gitlab`) {
                    let e = await r.searchGitLabRepositories({
                        query: y,
                        limit: Z,
                        page: t,
                        connectorId: u
                    });
                    return {
                        repositories: x((e?.repositories ?? []).slice(0, Z)),
                        hasMore: (e?.repositories?.length ?? 0) >= Z
                    }
                }
                if (i == null || o == null || s == null) return {
                    repositories: [],
                    hasMore: !1
                };
                let n = y.length === 0 ? await r.getRepositoriesByInstallationId(i, t, Z, u) : await r.searchRepositories({
                    account_login: o,
                    account_type: s,
                    query: y,
                    per_page: Z,
                    page: t,
                    connector_id: u
                });
                return {
                    repositories: x((n?.repositories ?? []).slice(0, Z)),
                    hasMore: (n?.repositories?.length ?? 0) >= Z
                }
            },
            getNextPageParam: (e, t) => e.hasMore ? t.length + 1 : void 0
        }),
        M = e === `gitlab` && !S ? [] : C?.pages.flatMap(e => e.repositories ?? []) ?? [],
        N = S && T && M.length === 0,
        P = a ?? c(`installations/${i}`),
        F = (() => {
            if (!a) return `https://github.com`;
            try {
                return new URL(a).origin
            } catch {
                return `https://github.com`
            }
        })(),
        I = !N && D && M.length === 0,
        L = !N && !I && M.length === 0 && (e === `github` || S),
        R = E && !j && y.length > 0;
    return (0, X.jsxs)(`div`, {
        className: `flex flex-col gap-4`,
        children: [(0, X.jsx)(`p`, {
            className: `text-token-text-primary text-sm font-medium`,
            children: (0, X.jsx)(g, {
                id: `wham.createEnvironments.repository`,
                defaultMessage: `Repository`
            })
        }), (0, X.jsx)(`div`, {
            className: `flex justify-between`,
            children: (0, X.jsxs)(`div`, {
                className: `relative w-full`,
                children: [(0, X.jsx)(A, {
                    color: `search`,
                    iconPosition: `left`,
                    icon: f,
                    className: `text-token-text-tertiary flex h-8 w-full items-center rounded-md!`,
                    inputClassName: `text-token-text-primary w-full`,
                    containerInputClassName: `w-full`,
                    name: `search-repos`,
                    type: `text`,
                    value: _,
                    onChange: e => v(e.target.value),
                    placeholder: h.formatMessage({
                        id: `wham.repositorySection.searchPlaceholder`,
                        defaultMessage: `Search`
                    }),
                    ariaLabel: h.formatMessage({
                        id: `wham.repositorySection.searchAria`,
                        defaultMessage: `Search`
                    })
                }), R && (0, X.jsx)(l, {
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
                    children: e === `gitlab` ? (0, X.jsx)(g, {
                        id: `wham.createEnvironments.repositorySection.gitlabError`,
                        defaultMessage: `Failed to load repositories. Make sure your GitLab account is connected.`
                    }) : (0, X.jsx)(g, {
                        id: `wham.createEnvironments.repositorySection.error`,
                        defaultMessage: `Failed to load repositories. Please ensure you have connected your GitHub account.`
                    })
                }) : (0, X.jsxs)(X.Fragment, {
                    children: [L ? (0, X.jsx)(`div`, {
                        className: `text-md text-token-text-secondary flex h-24 w-full items-center justify-center`,
                        children: (0, X.jsx)(g, {
                            id: `wham.createEnvironments.repositorySection.noRepositories.short`,
                            defaultMessage: `No repositories found`
                        })
                    }) : M.map(r => (0, X.jsxs)(`div`, {
                        children: [(0, X.jsx)(re, {
                            repository: r,
                            provider: e,
                            repositoryWebBaseUrl: e === `github` ? F : void 0,
                            isSelected: t === r.id,
                            onClick: () => n(r.id, r.repository_full_name, r.name),
                            shouldDisableRow: p,
                            disablePill: m
                        }), (0, X.jsx)(`div`, {
                            className: `border-token-border-light border-t`
                        })]
                    }, r.id)), R && M.length === 0 && (0, X.jsxs)(`div`, {
                        className: `text-token-text-secondary flex items-center justify-center gap-2 py-2 text-xs`,
                        children: [(0, X.jsx)(l, {
                            className: `h-4 w-4`
                        }), e === `gitlab` ? (0, X.jsx)(g, {
                            id: `wham.repositorySection.searchingGitLab`,
                            defaultMessage: `Searching GitLab...`
                        }) : (0, X.jsx)(g, {
                            id: `wham.repositorySection.searching`,
                            defaultMessage: `Searching GitHub...`
                        })]
                    }), (k || j) && M.length > 0 && (0, X.jsx)(te, {
                        isFetchingNextPage: !!j,
                        hasNextPage: !!k,
                        fetchNextPage: () => O()
                    })]
                })
            }), e === `github` && i && (0, X.jsxs)(X.Fragment, {
                children: [(0, X.jsx)(`p`, {
                    className: `text-token-text-secondary pt-3 text-start text-xs leading-none`,
                    children: (0, X.jsx)(g, {
                        id: `wham.createEnvironments.repositorySection.access`,
                        defaultMessage: `This list only includes repositories that you have access to in GitHub and can use with Codex.`
                    })
                }), (0, X.jsx)(`p`, {
                    className: `text-token-text-secondary text-start text-xs leading-none`,
                    children: i ? (0, X.jsx)(g, {
                        id: `wham.createEnvironments.repositorySection.noRepositories`,
                        defaultMessage: `Missing a repo? <link>Configure repository access</link>.`,
                        values: {
                            link: e => (0, X.jsx)(`a`, {
                                href: P,
                                target: `_blank`,
                                rel: `noopener noreferrer`,
                                className: `underline`,
                                "aria-label": h.formatMessage({
                                    id: `wham.repositorySection.configureRepositoryAccessAriaLabel`,
                                    defaultMessage: `Link to configure repository access in GitHub installations settings page`
                                }),
                                children: e
                            })
                        }
                    }) : (0, X.jsx)(g, {
                        id: `wham.createEnvironments.repositorySection.selectAccount`,
                        defaultMessage: `Select an account to connect to`
                    })
                })]
            })]
        })]
    })
}
var Y, X, Z, Q, $, ae = e((() => {
    T(), u(), F(), N(), p(), k(), E(), d(), O(), o(), S(), s(), Y = t(v()), _(), X = h(), Z = 20, Q = 300, $ = (0, Y.memo)(ie)
}));
export {
    V as a, U as i, $ as n, ne as o, ae as r, K as t
};
//# sourceMappingURL=9c8fc5a3-dzgmul5a3zn71rtg.js.map