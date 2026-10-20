import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as t,
    CK as n,
    F7 as r,
    Git as i,
    I1 as a,
    Tat as o,
    Uit as s,
    b5 as c,
    j7 as l,
    jat as u,
    rat as d,
    sat as f,
    wK as p,
    x5 as m
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    s as ee,
    w as h
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Iwn as g,
    KCn as _,
    NWt as v,
    QCn as y,
    _nt as b,
    ewn as x,
    gWt as S,
    iTn as C,
    rTn as w,
    vnt as T,
    zwn as E
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    Qv as D,
    Xs as O,
    Ys as te,
    ey as k,
    ty as ne
} from "./c2675c8c-fpv9s4kvd412dyap.js";
async function A(e, t, n, r, i = ``) {
    let a = i.trim(),
        {
            identityId: o,
            ownerScope: s,
            ...c
        } = r;
    if (a) {
        let r = await y().safePost(`/v2/connectors/{connector_id}/github_repositories/search`, {
            authOption: _,
            parameters: {
                path: {
                    connector_id: e.id
                }
            },
            requestBody: {
                identity_id: o,
                owner_scope: s,
                installation_id: t,
                query: a,
                page: n + 1
            },
            ...c
        });
        return {
            repositories: r.repositories,
            hasMore: r.has_more,
            searchLimitReached: r.search_limit_reached
        }
    }
    let u = I(await l.safePost(`/ecosystem/call_mcp`, {
        requestBody: {
            app_uri: `connectors://${e.id}`,
            tool_name: `list_repositories_by_installation`,
            tool_input: {
                installation_id: t,
                page_size: 100,
                page_offset: n
            }
        },
        ...c
    }));
    if (!Array.isArray(u.repositories)) throw Error(`GitHub repository discovery returned an invalid response`);
    let d = [];
    for (let e of u.repositories) {
        if (!E(e) || !E(e.permissions)) throw Error(`GitHub repository discovery returned an invalid response`);
        let t = Number(e.id);
        if (!Number.isSafeInteger(t) || t <= 0 || typeof e.repository_full_name != `string`) throw Error(`GitHub repository discovery returned an invalid response`);
        e.permissions.push === !0 && d.push({
            id: t,
            name: e.repository_full_name
        })
    }
    return {
        repositories: d,
        hasMore: u.repositories.length === 100
    }
}

function j(e, t, n) {
    return [`service-account-connector-links`, e, t, ...n == null ? [] : [n]]
}
async function M(e, t) {
    return (await y().safePost(`/v2/service_accounts/links/list`, {
        authOption: _,
        requestBody: {
            service_account_account_user_id: e
        },
        ...W(t)
    })).links
}
async function N(e, t, n) {
    return (await y().safeGet(`/v2/connectors/{connector_id}/auth_methods`, {
        authOption: _,
        parameters: {
            path: {
                connector_id: t.id
            },
            query: {
                identity_id: e
            }
        },
        ...W(n)
    })).auth_methods
}
async function P(e, t, n) {
    return await F(t, {
        identityId: e,
        ownerScope: `service_account`,
        ...W(n)
    })
}
async function F(e, {
    identityId: t,
    ownerScope: n,
    additionalHeaders: r,
    signal: i
}) {
    let a = {
            additionalHeaders: r,
            ...i ? {
                signal: i
            } : {}
        },
        o = I(await l.safePost(`/ecosystem/call_mcp`, {
            requestBody: {
                app_uri: `connectors://${e.id}`,
                tool_name: `list_installations`,
                tool_input: {
                    manageable_only: !0
                }
            },
            ...a
        }));
    if (!Array.isArray(o.installations)) throw Error(`GitHub installation discovery returned an invalid response`);
    let s = o.installations.filter(e => E(e) && typeof e.id == `number` && typeof e.account_login == `string` && typeof e.account_type == `string` && typeof e.account_avatar_url == `string` && typeof e.html_url == `string`);
    if (s.length > 0 || e.id === S) return {
        installations: s,
        ...o.allow_all_repositories_for_testing === !0 ? {
            allow_all_repositories_for_testing: !0
        } : {}
    };
    let {
        url: c
    } = await y().safeGet(`/v2/connectors/{connector_id}/github_app_installation_url`, {
        authOption: _,
        parameters: {
            path: {
                connector_id: e.id
            },
            query: {
                identity_id: t,
                ...n === `workspace` ? {
                    owner_scope: n
                } : {}
            }
        },
        ...a
    });
    return {
        installations: s,
        installation_url: c
    }
}

function I(e) {
    if (!E(e)) throw Error(`GitHub installation discovery returned an invalid response`);
    let t = Array.isArray(e.content) ? e.content.find(e => E(e) && e.type === `text` && typeof e.text == `string`) : void 0;
    if (e.isError === !0) {
        let e = t?.text ?? `GitHub installation discovery failed`;
        throw o.createWithErrorMessage(`/ecosystem/call_mcp`, `client`, e, void 0, Error(e))
    }
    let n = e.structuredContent ?? e.structured_content ?? (t ? JSON.parse(t.text) : void 0);
    if (!E(n)) throw Error(`GitHub discovery returned an invalid response`);
    return n
}
async function L(e, t) {
    return (await y().safePost(`/v2/links/auth_method/setup_connectors/as`, {
        authOption: _,
        requestBody: {
            identity_id: e
        },
        ...W(t)
    })).connectors
}

function R(e, t, n, r, i) {
    return l.safePost(`/aip/connectors/service_accounts/links/noauth`, {
        requestBody: {
            service_account_account_user_id: e,
            connector_id: t.id,
            name: t.name,
            action_names: [],
            link_params: n
        },
        ...W(r),
        ...i ? {
            signal: i
        } : {}
    })
}

function z(e, t, n, r, i, a) {
    return l.safePost(`/aip/connectors/service_accounts/links/api_key`, {
        requestBody: {
            service_account_account_user_id: e,
            connector_id: t.id,
            name: t.name,
            action_names: [],
            key: n,
            link_params: r
        },
        ...W(i),
        ...a ? {
            signal: a
        } : {}
    })
}

function B(e, t, n, r, i, a, o, s) {
    return l.safePost(`/aip/connectors/service_accounts/links/api_key`, {
        requestBody: {
            service_account_account_user_id: e,
            connector_id: t.id,
            strategy_id: n,
            name: t.name,
            action_names: i,
            configuration: r,
            link_params: a
        },
        ...W(o),
        ...s ? {
            signal: s
        } : {}
    })
}

function V(e, t) {
    return ({
        requestBody: n
    }) => l.safePost(`/aip/connectors/service_accounts/links/oauth`, {
        requestBody: G(e, n),
        ...W(t)
    })
}

function H(e, t) {
    return l.safeDelete(`/aip/connectors/service_accounts/links/{link_id}`, {
        parameters: {
            path: {
                link_id: e
            }
        },
        ...W(t)
    })
}
async function U(e, t, r, i) {
    let a = n(e);
    if (a == null) throw Error(`A workspace is required to manage this connection`);
    return await b.safePatch(`/v2/links/{link_id}`, {
        authOption: _,
        parameters: {
            path: {
                link_id: t
            }
        },
        requestBody: {
            is_read_only: r
        },
        additionalHeaders: {
            ...W(i).additionalHeaders,
            ...a
        }
    })
}

function W(e) {
    let t = e ?? te();
    return t ? {
        additionalHeaders: {
            [s]: t
        }
    } : {}
}

function G(e, t) {
    return {
        service_account_account_user_id: e,
        connector_id: t.connector_id,
        name: t.name,
        action_names: t.action_names,
        oauth_client_id: t.oauth_client_id,
        requested_scopes: t.requested_scopes,
        callback_url: t.callback_url,
        post_auth_url: t.post_auth_url,
        link_params: t.link_params,
        labels: t.labels,
        verification_token: t.verification_token
    }
}
var K, q = e((() => {
    g(), v(), x(), u(), i(), r(), T(), p(), O(), K = (e, t, n, r, i, a, o) => A(t, n, r, {
        identityId: e,
        ownerScope: `service_account`,
        ...W(a),
        signal: i
    }, o)
}));

function J(e, t = w.ADMIN_SETTING) {
    let r = n(e);
    if (r == null) throw Error(`A workspace is required to manage workspace connections`);
    return {
        authOption: d.Required,
        disableAutomaticRetry: !0,
        additionalHeaders: {
            ...r,
            [s]: t
        }
    }
}

function Y(e, n) {
    if (n?.throwIfAborted(), t()?.getWorkspaceId() !== e) throw Error(`The active workspace changed`)
}

function X(e) {
    if (e != null && Object.keys(e).length > 0) throw Error(`Action-specific workspace connection parameters are not supported`)
}

function re(e, t) {
    return b.safeGet(`/v2/workspace/connections`, {
        ...J(e),
        signal: t
    })
}
async function ie(e, t) {
    Y(e), await b.safeDelete(`/v2/workspace/connections/{link_id}`, {
        ...J(e),
        parameters: {
            path: {
                link_id: t
            }
        }
    })
}
async function ae(e, t, n, r) {
    return Y(e, r), await b.safePatch(`/v2/workspace/connections/{link_id}`, {
        ...J(e),
        parameters: {
            path: {
                link_id: t
            }
        },
        requestBody: {
            service_account_access: n
        },
        signal: r
    })
}
async function oe(e, t, n, r) {
    return Y(e, r), await b.safePatch(`/v2/workspace/connections/{link_id}`, {
        ...J(e),
        parameters: {
            path: {
                link_id: t
            }
        },
        requestBody: {
            workspace_user_access: n
        },
        signal: r
    })
}
async function se(e, t, n, r) {
    return Y(e, r), await b.safePatch(`/v2/workspace/connections/{link_id}`, {
        ...J(e),
        parameters: {
            path: {
                link_id: t
            }
        },
        requestBody: {
            team_access: n
        },
        signal: r
    })
}
async function ce(e, t, n) {
    return Y(e), await b.safePatch(`/v2/links/{link_id}`, {
        ...J(e),
        parameters: {
            path: {
                link_id: t
            }
        },
        requestBody: n
    })
}

function Z(e, t) {
    return {
        listAuthMethods: async n => (Y(e, t), await c().fetchQuery(Q(e, n.id, t))),
        listGithubInstallations: async n => (Y(e, t), await F(n, {
            identityId: e,
            ownerScope: `workspace`,
            ...J(e),
            signal: t
        })),
        listGithubRepositories: async (n, r, i, a, o) => {
            let s = t ? AbortSignal.any([t, a]) : a;
            return Y(e, s), i === 0 && await c().invalidateQueries({
                queryKey: k(`github-repositories`, e, n.id, r),
                refetchType: `none`
            }), await c().fetchQuery($(e, n, r, i, s, o))
        },
        addAuthMethod: async (n, r, i, a, o) => (Y(e, t), await b.safePost(`/v2/workspace/connections/auth_method`, {
            ...J(e),
            requestBody: {
                identity_type: `workspace`,
                identity_id: e,
                connector_id: n.id,
                strategy_id: r,
                configuration: i,
                action_names: a,
                name: n.name,
                link_params: o
            },
            signal: t
        })),
        addNoAuth: async (n, r, i) => (Y(e, t), X(i), await b.safePost(`/v2/workspace/connections/noauth`, {
            ...J(e),
            requestBody: {
                identity_type: `workspace`,
                identity_id: e,
                connector_id: n.id,
                name: n.name,
                action_names: [],
                link_params: r
            },
            signal: t
        })),
        addApiKey: async (n, r, i, a) => (Y(e, t), X(a), await b.safePost(`/v2/workspace/connections/api_key`, {
            ...J(e),
            requestBody: {
                identity_type: `workspace`,
                identity_id: e,
                connector_id: n.id,
                name: n.name,
                action_names: [],
                link_params: i,
                key: r
            },
            signal: t
        })),
        startOauth: async ({
            requestBody: n,
            productSku: r
        }) => (Y(e, t), await b.safePost(`/v2/workspace/connections/oauth`, {
            ...J(e, r),
            requestBody: {
                identity_type: `workspace`,
                identity_id: e,
                connector_id: n.connector_id,
                name: n.name,
                action_names: n.action_names ?? [],
                link_params: n.link_params,
                oauth_client_id: n.oauth_client_id,
                requested_scopes: n.requested_scopes,
                callback_url: n.callback_url,
                post_auth_url: n.post_auth_url,
                labels: n.labels,
                verification_token: n.verification_token
            },
            signal: t
        }))
    }
}
var Q, $, le = e((() => {
    q(), C(), T(), a(), f(), i(), m(), p(), ee(), ne(), Q = (e, t, n) => h({
        queryKey: k(`workspace-auth-methods`, e, t),
        queryFn: async ({
            signal: r
        }) => (await b.safeGet(`/v2/workspace/connectors/{connector_id}/auth_methods`, {
            ...J(e),
            parameters: {
                path: {
                    connector_id: t
                }
            },
            signal: n ? AbortSignal.any([r, n]) : r
        })).auth_methods,
        staleTime: D,
        retry: !1
    }), $ = (e, t, n, r, i, a = ``) => h({
        queryKey: k(`github-repositories`, e, t.id, n, a, r),
        queryFn: async ({
            signal: o
        }) => {
            let s = AbortSignal.any([i, o]);
            Y(e, s);
            let c = await A(t, n, r, {
                identityId: e,
                ownerScope: `workspace`,
                ...J(e),
                signal: s
            }, a);
            return Y(e, s), c
        },
        staleTime: D,
        retry: !1
    })
}));
export {
    P as _, ae as a, U as b, ce as c, R as d, H as f, M as g, N as h, re as i, z as l, q as m, ie as n, se as o, j as p, le as r, oe as s, Z as t, B as u, K as v, V as x, L as y
};
//# sourceMappingURL=6d433d1f-c8691vxkd5tmtbc2.js.map