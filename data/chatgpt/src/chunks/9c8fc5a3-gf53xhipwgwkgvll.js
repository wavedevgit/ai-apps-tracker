const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/65071b67-hzk3n84d1tdrjs5z.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-nxpmzchfjvwqts17.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/30901919-lgbmg5s09xld40kt.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Fh as n,
    Iv as r,
    Ph as i,
    Rz as a,
    a2 as o,
    c2 as s,
    c7 as c,
    hl as l,
    jv as u,
    l7 as d,
    ml as f,
    o2 as p,
    zz as m
} from "./4813494d-nxpmzchfjvwqts17.js";
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
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Bst as T,
    Kst as E,
    Vst as D,
    Wst as O,
    ex as k,
    mX as A,
    pX as j,
    tx as M
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    Gh as N,
    Kh as P,
    Kv as F,
    Mv as I,
    Nv as L,
    qv as R
} from "./30901919-lgbmg5s09xld40kt.js";
import {
    h_ as z,
    m_ as B
} from "./8b34dbc2-n194ohawifys3bko.js";
import {
    Ht as V,
    Vt as H
} from "./c470f5ab-hgik953cu5ujlhdm.js";

function U(e, {
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

function ee(e) {
    "use forget";
    let t = (0, W.c)(14),
        {
            githubAppInstallationUrl: n
        } = e,
        r = w(),
        i = !n,
        a = i ? `cursor-not-allowed opacity-50` : `hover:bg-token-bg-secondary dark:hover:bg-token-bg-primary`,
        o;
    t[0] === a ? o = t[1] : (o = c(`text-token-text-primary bg-token-bg-primary flex w-full items-center rounded-lg px-2 py-3 text-center text-sm dark:bg-[#353535]`, a), t[0] = a, t[1] = o);
    let s;
    t[2] !== r || t[3] !== i ? (s = i ? r.formatMessage({
        id: `wham.accountSelect.githubAppInstallUrlUnavailable`,
        defaultMessage: `GitHub app installation URL unavailable`
    }) : void 0, t[2] = r, t[3] = i, t[4] = s) : s = t[4];
    let l;
    t[5] === n ? l = t[6] : (l = () => {
        n && U(n)
    }, t[5] = n, t[6] = l);
    let u, d;
    t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, G.jsx)(P, {
        "aria-hidden": !0,
        className: `icon-sm me-1`
    }), d = (0, G.jsx)(g, {
        id: `wham.accountSelect.addGitHubAccount`,
        defaultMessage: `Connect GitHub org`
    }), t[7] = u, t[8] = d) : (u = t[7], d = t[8]);
    let f;
    return t[9] !== i || t[10] !== o || t[11] !== s || t[12] !== l ? (f = (0, G.jsx)(`div`, {
        className: `flex items-center justify-center px-2`,
        children: (0, G.jsxs)(`button`, {
            className: o,
            disabled: i,
            title: s,
            onClick: l,
            children: [u, d]
        })
    }), t[9] = i, t[10] = o, t[11] = s, t[12] = l, t[13] = f) : f = t[13], f
}

function te(e) {
    "use forget";
    let t = (0, W.c)(13),
        {
            children: n,
            className: r,
            selectedInstallationId: i,
            githubInstallationsLoading: o,
            handleValueChange: s,
            githubAppInstallationUrl: l
        } = e,
        u = w(),
        d;
    t[0] === r ? d = t[1] : (d = c(`flex flex-col gap-2`, r), t[0] = r, t[1] = d);
    let f;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, G.jsx)(`p`, {
        className: `text-token-text-primary text-sm font-medium`,
        children: (0, G.jsx)(g, {
            id: `wham.accountSelect.githubOrganization`,
            defaultMessage: `GitHub organization`
        })
    }), t[2] = f) : f = t[2];
    let p;
    t[3] !== n || t[4] !== l || t[5] !== o || t[6] !== s || t[7] !== u || t[8] !== i ? (p = o ? (0, G.jsx)(O, {
        className: `h-9 w-52`
    }) : (0, G.jsxs)(B.Root, {
        value: o ? `` : i?.toString() ?? ``,
        onValueChange: s,
        disabled: o,
        children: [(0, G.jsx)(B.Trigger, {
            className: `border-token-border-heavy bg-token-bg-primary flex w-52 rounded-md border`,
            "aria-label": u.formatMessage({
                id: `wham.accountSelect.openOrganizationMenu`,
                defaultMessage: `Open organization menu`
            }),
            children: (0, G.jsxs)(`div`, {
                className: `flex w-full items-center justify-between`,
                children: [(0, G.jsxs)(`div`, {
                    className: `flex w-0 flex-1 items-center`,
                    children: [(0, G.jsx)(H, {
                        "aria-hidden": !0,
                        className: `icon-sm me-1.5`
                    }), (0, G.jsx)(`div`, {
                        className: `truncate`,
                        children: (0, G.jsx)(B.Value, {
                            placeholder: u.formatMessage({
                                id: `wham.accountSelect.selectOrganization`,
                                defaultMessage: `Select organization`
                            })
                        })
                    })]
                }), (0, G.jsx)(B.Icon, {})]
            })
        }), (0, G.jsx)(B.Portal, {
            children: (0, G.jsxs)(B.Content, {
                align: `start`,
                className: `rounded-lg`,
                children: [n, (0, G.jsx)(B.Separator, {
                    className: `mx-3!`
                }), (0, G.jsx)(ee, {
                    githubAppInstallationUrl: l
                }), o && (0, G.jsx)(`div`, {
                    className: `flex justify-center p-2`,
                    children: (0, G.jsx)(a, {})
                })]
            })
        })]
    }), t[3] = n, t[4] = l, t[5] = o, t[6] = s, t[7] = u, t[8] = i, t[9] = p) : p = t[9];
    let m;
    return t[10] !== d || t[11] !== p ? (m = (0, G.jsxs)(`div`, {
        className: d,
        children: [f, p]
    }), t[10] = d, t[11] = p, t[12] = m) : m = t[12], m
}
var W, G, ne = e((() => {
    W = C(), V(), N(), s(), z(), E(), m(), p(), d(), _(), G = h(), x(), o(() => y(() => import(`./65071b67-hzk3n84d1tdrjs5z.js`).then(e => e.RedirectAlertModal), __vite__mapDeps([0, 1, 2, 3, 4, 5])))
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
        l = J(e, t),
        u = (() => {
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
        className: c(`flex items-center justify-between gap-2`, i),
        children: [(0, X.jsx)(`div`, {
            className: c(`flex items-start gap-3`, a && `opacity-50`),
            children: (0, X.jsxs)(`div`, {
                className: `flex flex-col`,
                children: [(0, X.jsxs)(`div`, {
                    className: `flex flex-row items-center gap-2`,
                    children: [(0, X.jsx)(`p`, {
                        className: `text-token-text-primary text-start text-sm font-medium`,
                        children: l
                    }), (0, X.jsx)(`a`, {
                        href: u,
                        target: `_blank`,
                        rel: `noopener noreferrer`,
                        className: `text-token-text-secondary opacity-0 group-hover:opacity-100`,
                        "aria-label": t === `gitlab` ? s.formatMessage({
                            id: `wham.repositorySection.viewGitLabRepositoryAriaLabel`,
                            defaultMessage: `Link to view {repository} in GitLab`
                        }, {
                            repository: l
                        }) : s.formatMessage({
                            id: `wham.repositorySection.viewRepositoryAriaLabel`,
                            defaultMessage: `Link to view {repository} in GitHub`
                        }, {
                            repository: l
                        }),
                        onClick: e => {
                            e.stopPropagation()
                        },
                        children: (0, X.jsx)(F, {
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
            children: (0, X.jsx)(I, {
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
        l = a?.(e),
        u = J(e, t);
    return (0, X.jsx)(`button`, {
        className: c(`group flex w-full items-center justify-between gap-2 rounded-md p-3`, l ? `cursor-default select-none` : `hover:bg-token-bg-tertiary cursor-pointer`),
        "aria-label": s.formatMessage({
            id: `wham.repositorySection.repositoryAriaLabel`,
            defaultMessage: `Select repository {repository} to create an environment with`
        }, {
            repository: u
        }),
        disabled: l,
        onClick: i,
        type: `button`,
        children: (0, X.jsx)(K, {
            repository: e,
            provider: t,
            repositoryWebBaseUrl: n,
            isSelected: r,
            className: `w-full`,
            isDisabled: l,
            disablePill: o
        })
    })
}

function q() {
    return (0, X.jsx)(`div`, {
        className: `flex w-full items-center justify-between gap-2 rounded-md`,
        children: (0, X.jsx)(O, {
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
    installationHtmlUrl: o,
    installationAccountLogin: s,
    installationAccountType: c,
    githubConnectorId: l,
    isGitLabConnected: d = !1,
    shouldDisableRow: p,
    disablePill: m
}) {
    let h = w(),
        [_, v] = (0, Y.useState)(``),
        y = M(_.trim(), Q),
        x = (0, Y.useCallback)(e => [...e].sort((e, t) => (e.name ?? ``).localeCompare(t.name ?? ``, void 0, {
            sensitivity: `base`
        })), []);
    (0, Y.useEffect)(() => {
        v(``)
    }, [e, l, s, c, i]);
    let S = e === `gitlab` ? d : i != null && s != null && c != null,
        {
            data: C,
            isPending: E,
            isFetching: D,
            isError: O,
            fetchNextPage: k,
            hasNextPage: A,
            isFetchingNextPage: N
        } = b({
            queryKey: e === `github` ? [`wham`, `repositories`, i, s, c, l, y] : [`wham`, `repositories`, e, i, s, c, l, y],
            enabled: S,
            initialPageParam: 1,
            queryFn: async ({
                pageParam: t
            }) => {
                if (e === `gitlab`) {
                    let e = await f.searchGitLabRepositories({
                        query: y,
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
                let n = y.length === 0 ? await f.getRepositoriesByInstallationId(i, t, Z, l) : await f.searchRepositories({
                    account_login: s,
                    account_type: c,
                    query: y,
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
        P = e === `gitlab` && !S ? [] : C?.pages.flatMap(e => e.repositories ?? []) ?? [],
        F = S && E && P.length === 0,
        I = o ?? u(`installations/${i}`),
        L = (() => {
            if (!o) return `https://github.com`;
            try {
                return new URL(o).origin
            } catch {
                return `https://github.com`
            }
        })(),
        R = !F && O && P.length === 0,
        z = !F && !R && P.length === 0 && (e === `github` || S),
        B = D && !N && y.length > 0;
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
                children: [(0, X.jsx)(T, {
                    color: `search`,
                    iconPosition: `left`,
                    icon: n,
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
                }), B && (0, X.jsx)(a, {
                    className: `text-token-text-tertiary absolute end-2 top-1/2 h-4 w-4 -translate-y-1/2`
                })]
            })
        }), (0, X.jsxs)(`div`, {
            className: `border-token-border-heavy bg-token-bg-primary flex flex-col gap-2 rounded-lg border p-3`,
            children: [(0, X.jsx)(`div`, {
                className: `flex max-h-56 flex-col overflow-y-auto`,
                children: F ? (0, X.jsxs)(`div`, {
                    className: `flex h-full flex-col gap-2`,
                    children: [(0, X.jsx)(q, {}), (0, X.jsx)(q, {}), (0, X.jsx)(q, {}), (0, X.jsx)(q, {})]
                }) : R ? (0, X.jsx)(`div`, {
                    className: `text-token-text-primary flex h-full items-center justify-center text-sm`,
                    children: e === `gitlab` ? (0, X.jsx)(g, {
                        id: `wham.createEnvironments.repositorySection.gitlabError`,
                        defaultMessage: `Failed to load repositories. Make sure your GitLab account is connected.`
                    }) : (0, X.jsx)(g, {
                        id: `wham.createEnvironments.repositorySection.error`,
                        defaultMessage: `Failed to load repositories. Please ensure you have connected your GitHub account.`
                    })
                }) : (0, X.jsxs)(X.Fragment, {
                    children: [z ? (0, X.jsx)(`div`, {
                        className: `text-md text-token-text-secondary flex h-24 w-full items-center justify-center`,
                        children: (0, X.jsx)(g, {
                            id: `wham.createEnvironments.repositorySection.noRepositories.short`,
                            defaultMessage: `No repositories found`
                        })
                    }) : P.map(n => (0, X.jsxs)(`div`, {
                        children: [(0, X.jsx)(re, {
                            repository: n,
                            provider: e,
                            repositoryWebBaseUrl: e === `github` ? L : void 0,
                            isSelected: t === n.id,
                            onClick: () => r(n.id, n.repository_full_name, n.name),
                            shouldDisableRow: p,
                            disablePill: m
                        }), (0, X.jsx)(`div`, {
                            className: `border-token-border-light border-t`
                        })]
                    }, n.id)), B && P.length === 0 && (0, X.jsxs)(`div`, {
                        className: `text-token-text-secondary flex items-center justify-center gap-2 py-2 text-xs`,
                        children: [(0, X.jsx)(a, {
                            className: `h-4 w-4`
                        }), e === `gitlab` ? (0, X.jsx)(g, {
                            id: `wham.repositorySection.searchingGitLab`,
                            defaultMessage: `Searching GitLab...`
                        }) : (0, X.jsx)(g, {
                            id: `wham.repositorySection.searching`,
                            defaultMessage: `Searching GitHub...`
                        })]
                    }), (A || N) && P.length > 0 && (0, X.jsx)(j, {
                        isFetchingNextPage: !!N,
                        hasNextPage: !!A,
                        fetchNextPage: () => k()
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
                                href: I,
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
    D(), m(), R(), L(), i(), A(), E(), r(), k(), l(), S(), d(), Y = t(v()), _(), X = h(), Z = 20, Q = 300, $ = (0, Y.memo)(ie)
}));
export {
    U as a, te as i, $ as n, ne as o, ae as r, K as t
};
//# sourceMappingURL=9c8fc5a3-gf53xhipwgwkgvll.js.map