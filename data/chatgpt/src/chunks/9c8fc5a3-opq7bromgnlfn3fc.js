const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/65071b67-fjf3p0zrsrkdkiw5.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-tap9fxyhk4ehe0bs.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/30901919-niqyapppecmq5jkn.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $0 as n,
    Av as r,
    Fv as i,
    Mz as a,
    Nh as o,
    Ph as s,
    X0 as c,
    X5 as l,
    Y5 as u,
    Z0 as d,
    jz as f,
    ml as p,
    pl as m
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    Bn as h,
    Nn as g,
    Rn as _,
    Vn as v,
    cn as y,
    l as ee,
    ln as b,
    s as x,
    wn as S,
    zn as C
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Kst as w,
    Qst as T,
    Xst as E,
    ex as D,
    mX as O,
    pX as k,
    qst as A,
    tx as te
} from "./conversation-small-nmt18uiom3b14vca.js";
import {
    Gh as j,
    Kh as M,
    Kv as N,
    Mv as P,
    Nv as F,
    qv as I
} from "./30901919-niqyapppecmq5jkn.js";
import {
    f_ as L,
    p_ as R
} from "./8b34dbc2-ojcl97ddvu2212q0.js";
import {
    Ht as z,
    Vt as B
} from "./c470f5ab-uuoa2gfm4goj6p9f.js";

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
        r = C(),
        i = !n,
        a = i ? `cursor-not-allowed opacity-50` : `hover:bg-token-bg-secondary dark:hover:bg-token-bg-primary`,
        o;
    t[0] === a ? o = t[1] : (o = u(`text-token-text-primary bg-token-bg-primary flex w-full items-center rounded-lg px-2 py-3 text-center text-sm dark:bg-[#353535]`, a), t[0] = a, t[1] = o);
    let s;
    t[2] !== r || t[3] !== i ? (s = i ? r.formatMessage({
        id: `wham.accountSelect.githubAppInstallUrlUnavailable`,
        defaultMessage: `GitHub app installation URL unavailable`
    }) : void 0, t[2] = r, t[3] = i, t[4] = s) : s = t[4];
    let c;
    t[5] === n ? c = t[6] : (c = () => {
        n && V(n)
    }, t[5] = n, t[6] = c);
    let l, d;
    t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (l = (0, G.jsx)(M, {
        "aria-hidden": !0,
        className: `icon-sm me-1`
    }), d = (0, G.jsx)(g, {
        id: `wham.accountSelect.addGitHubAccount`,
        defaultMessage: `Connect GitHub org`
    }), t[7] = l, t[8] = d) : (l = t[7], d = t[8]);
    let f;
    return t[9] !== i || t[10] !== o || t[11] !== s || t[12] !== c ? (f = (0, G.jsx)(`div`, {
        className: `flex items-center justify-center px-2`,
        children: (0, G.jsxs)(`button`, {
            className: o,
            disabled: i,
            title: s,
            onClick: c,
            children: [l, d]
        })
    }), t[9] = i, t[10] = o, t[11] = s, t[12] = c, t[13] = f) : f = t[13], f
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
        c = C(),
        l;
    t[0] === r ? l = t[1] : (l = u(`flex flex-col gap-2`, r), t[0] = r, t[1] = l);
    let d;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, G.jsx)(`p`, {
        className: `text-token-text-primary text-sm font-medium`,
        children: (0, G.jsx)(g, {
            id: `wham.accountSelect.githubOrganization`,
            defaultMessage: `GitHub organization`
        })
    }), t[2] = d) : d = t[2];
    let p;
    t[3] !== n || t[4] !== s || t[5] !== a || t[6] !== o || t[7] !== c || t[8] !== i ? (p = a ? (0, G.jsx)(E, {
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
                    children: (0, G.jsx)(f, {})
                })]
            })
        })]
    }), t[3] = n, t[4] = s, t[5] = a, t[6] = o, t[7] = c, t[8] = i, t[9] = p) : p = t[9];
    let m;
    return t[10] !== l || t[11] !== p ? (m = (0, G.jsxs)(`div`, {
        className: l,
        children: [d, p]
    }), t[10] = l, t[11] = p, t[12] = m) : m = t[12], m
}
var W, G, ne = e((() => {
    W = S(), z(), j(), n(), R(), T(), a(), d(), l(), _(), G = h(), b(), c(() => y(() => import(`./65071b67-fjf3p0zrsrkdkiw5.js`).then(e => e.RedirectAlertModal), __vite__mapDeps([0, 1, 2, 3, 4, 5])))
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
    let s = C(),
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
        d = e.visibility === `private` ? s.formatMessage({
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
        className: u(`flex items-center justify-between gap-2`, i),
        children: [(0, X.jsx)(`div`, {
            className: u(`flex items-start gap-3`, a && `opacity-50`),
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
                    children: [e.language, d].filter(Boolean).map((e, t) => (0, X.jsx)(`span`, {
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
    let s = C(),
        c = a?.(e),
        l = J(e, t);
    return (0, X.jsx)(`button`, {
        className: u(`group flex w-full items-center justify-between gap-2 rounded-md p-3`, c ? `cursor-default select-none` : `hover:bg-token-bg-tertiary cursor-pointer`),
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
        children: (0, X.jsx)(E, {
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
    installationAccountType: c,
    githubConnectorId: l,
    isGitLabConnected: u = !1,
    shouldDisableRow: d,
    disablePill: p
}) {
    let h = C(),
        [_, v] = (0, Y.useState)(``),
        y = te(_.trim(), Q),
        b = (0, Y.useCallback)(e => [...e].sort((e, t) => (e.name ?? ``).localeCompare(t.name ?? ``, void 0, {
            sensitivity: `base`
        })), []);
    (0, Y.useEffect)(() => {
        v(``)
    }, [e, l, o, c, i]);
    let x = e === `gitlab` ? u : i != null && o != null && c != null,
        {
            data: S,
            isPending: T,
            isFetching: E,
            isError: D,
            fetchNextPage: O,
            hasNextPage: A,
            isFetchingNextPage: j
        } = ee({
            queryKey: e === `github` ? [`wham`, `repositories`, i, o, c, l, y] : [`wham`, `repositories`, e, i, o, c, l, y],
            enabled: x,
            initialPageParam: 1,
            queryFn: async ({
                pageParam: t
            }) => {
                if (e === `gitlab`) {
                    let e = await m.searchGitLabRepositories({
                        query: y,
                        limit: Z,
                        page: t,
                        connectorId: l
                    });
                    return {
                        repositories: b((e?.repositories ?? []).slice(0, Z)),
                        hasMore: (e?.repositories?.length ?? 0) >= Z
                    }
                }
                if (i == null || o == null || c == null) return {
                    repositories: [],
                    hasMore: !1
                };
                let n = y.length === 0 ? await m.getRepositoriesByInstallationId(i, t, Z, l) : await m.searchRepositories({
                    account_login: o,
                    account_type: c,
                    query: y,
                    per_page: Z,
                    page: t,
                    connector_id: l
                });
                return {
                    repositories: b((n?.repositories ?? []).slice(0, Z)),
                    hasMore: (n?.repositories?.length ?? 0) >= Z
                }
            },
            getNextPageParam: (e, t) => e.hasMore ? t.length + 1 : void 0
        }),
        M = e === `gitlab` && !x ? [] : S?.pages.flatMap(e => e.repositories ?? []) ?? [],
        N = x && T && M.length === 0,
        P = a ?? r(`installations/${i}`),
        F = (() => {
            if (!a) return `https://github.com`;
            try {
                return new URL(a).origin
            } catch {
                return `https://github.com`
            }
        })(),
        I = !N && D && M.length === 0,
        L = !N && !I && M.length === 0 && (e === `github` || x),
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
                children: [(0, X.jsx)(w, {
                    color: `search`,
                    iconPosition: `left`,
                    icon: s,
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
                }), R && (0, X.jsx)(f, {
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
                            shouldDisableRow: d,
                            disablePill: p
                        }), (0, X.jsx)(`div`, {
                            className: `border-token-border-light border-t`
                        })]
                    }, r.id)), R && M.length === 0 && (0, X.jsxs)(`div`, {
                        className: `text-token-text-secondary flex items-center justify-center gap-2 py-2 text-xs`,
                        children: [(0, X.jsx)(f, {
                            className: `h-4 w-4`
                        }), e === `gitlab` ? (0, X.jsx)(g, {
                            id: `wham.repositorySection.searchingGitLab`,
                            defaultMessage: `Searching GitLab...`
                        }) : (0, X.jsx)(g, {
                            id: `wham.repositorySection.searching`,
                            defaultMessage: `Searching GitHub...`
                        })]
                    }), (A || j) && M.length > 0 && (0, X.jsx)(k, {
                        isFetchingNextPage: !!j,
                        hasNextPage: !!A,
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
    A(), a(), I(), F(), o(), O(), T(), i(), D(), p(), x(), l(), Y = t(v()), _(), X = h(), Z = 20, Q = 300, $ = (0, Y.memo)(ie)
}));
export {
    V as a, U as i, $ as n, ne as o, ae as r, K as t
};
//# sourceMappingURL=9c8fc5a3-opq7bromgnlfn3fc.js.map