import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $ot as t,
    Aat as n,
    Eat as r,
    J7 as i,
    Q7 as a,
    SK as o,
    V1 as s,
    Zrt as c,
    fat as l,
    kit as u,
    mat as d,
    q1 as f,
    xK as p
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    FTn as m,
    PTn as h,
    _nt as g,
    aFn as _,
    gnt as v,
    iFn as y,
    oFn as b
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    Fx as x,
    Gx as S,
    Hx as C,
    Wx as w,
    aS as T,
    cS as E,
    dS as D,
    eS as O,
    fS as k,
    iS as A,
    lS as j,
    pS as M,
    uS as N
} from "./c2675c8c-otyjprdiowg2v8hl.js";
import {
    n as P,
    t as F
} from "./8d846022-bvik3sltoydb2o43.js";

function I() {
    return JSON.stringify([t()?.user?.id ?? null, t()?.account?.id ?? null, s()?.normalizedAccountUserId ?? null, c({
        isAuthOptional: !0
    })[`ChatGPT-Account-ID`] ?? null])
}
async function L(e, t) {
    return _(((await y(!0, h.CONNECTOR_SETTING, void 0, e, t)).connector_openai_wallet ?? []).filter(e => e.auth_status === `ACTIVE` && [`OAUTH`, `API_KEY`, `NONE`].includes(e.auth_type)))
}
async function R({
    accountId: e,
    linkId: t,
    name: n,
    args: i,
    signal: a,
    context: o
}) {
    if (!U.has(n)) throw Error(`Unknown Wallet enrollment action`);
    let s = await v.safePost(`/mcp`, {
            authOption: r.Required,
            requestBody: {
                jsonrpc: `2.0`,
                id: W,
                method: `tools/call`,
                params: {
                    name: `wallet.${n}`,
                    arguments: i,
                    _meta: {
                        ...o ? {
                            "x-codex-turn-metadata": V(o)
                        } : {},
                        _codex_apps: {
                            resource_uri: `/${B}/${t}/${n}`,
                            returns_pre_shaped_mcp_result: !0
                        },
                        ...typeof window < `u` && window.navigator.language ? {
                            "openai/browserLanguage": window.navigator.language
                        } : {}
                    }
                }
            },
            additionalHeaders: {
                ...p(e),
                [l]: h.CODEX,
                Accept: `application/json`
            },
            disableAutomaticRetry: !0,
            cache: `no-store`,
            signal: a
        }),
        c = G.safeParse(s);
    if (!c.success) throw Error(`Invalid Wallet tool response`);
    if (`error` in c.data) throw Error(`Wallet tool request failed (${c.data.error.code})`);
    let u = c.data.result,
        d = P(u);
    if (!d) throw Error(`Invalid Wallet tool response`);
    return {
        ...d,
        _meta: u._meta,
        structuredContent: u.structuredContent
    }
}
async function z(e, t, n, a) {
    if (a) {
        let t = await i.safeGet(`/ecosystem/widget`, {
                authOption: r.Required,
                parameters: {
                    query: {
                        uri: `connectors://${B}`,
                        template_pointer: H
                    }
                },
                additionalHeaders: {
                    ...p(e),
                    [l]: h.CODEX
                },
                disableAutomaticRetry: !0,
                cache: `no-store`,
                signal: n
            }),
            {
                html: a,
                csp: o,
                domain: s
            } = q.parse(t);
        return {
            html: a,
            csp: o,
            domain: s
        }
    }
    let o = await v.safePost(`/mcp`, {
            authOption: r.Required,
            requestBody: {
                jsonrpc: `2.0`,
                id: W,
                method: `resources/read`,
                params: {
                    uri: H,
                    _meta: {
                        "x-codex-turn-metadata": {
                            mcp_request_meta: {
                                selected_connector_ids: [B],
                                link_id: t
                            }
                        },
                        ...typeof window < `u` && window.navigator.language ? {
                            "openai/browserLanguage": window.navigator.language
                        } : {}
                    }
                }
            },
            additionalHeaders: {
                ...p(e),
                [l]: h.CODEX,
                Accept: `application/json`
            },
            disableAutomaticRetry: !0,
            cache: `no-store`,
            signal: n
        }),
        s = J.safeParse(o);
    if (!s.success) throw Error(`Invalid Wallet widget response`);
    let c = s.data.result.contents[0];
    return {
        html: c.text,
        csp: c._meta[`openai/widgetCSP`],
        domain: null
    }
}
var B, V, H, U, W, G, K, q, J, Y = e((() => {
        b(), m(), g(), f(), u(), n(), d(), a(), o(), F(), x(), B = `connector_openai_wallet`, V = e => ({
            thread_id: e.threadId,
            client_metadata: {
                orbit_id: e.orbitId
            }
        }), H = `internal://wallet-vgs-card-enrollment`, U = new Set([`open_vgs_card_enrollment`, `list_wallet_contact_infos`, `save_wallet_contact_info`, `register_vgs_agentic_token`, `request_vgs_card_verification`, `refresh_vgs_card_verification`, `verify_vgs_card`, `finalize_vgs_card_registration`]), W = 1, G = k([j({
            jsonrpc: O(`2.0`),
            id: O(W),
            result: T({
                content: w(M()),
                structuredContent: E(N(), M()).optional(),
                _meta: E(N(), M()).optional(),
                isError: S().optional()
            })
        }), j({
            jsonrpc: O(`2.0`),
            id: O(W).nullable(),
            error: T({
                code: A(),
                message: N()
            })
        })]), K = T({
            connect_domains: w(N()).nullish(),
            resource_domains: w(N()).nullish(),
            frame_domains: w(N()).nullish(),
            redirect_domains: w(N()).nullish()
        }), q = T({
            html: N().refine(e => e.trim().length > 0),
            is_verified_first_party: O(!0),
            domain: C(),
            csp: K
        }), J = j({
            jsonrpc: O(`2.0`),
            id: O(W),
            result: T({
                contents: D([T({
                    uri: O(H),
                    mimeType: O(`text/html`),
                    text: N().refine(e => e.trim().length > 0),
                    _meta: T({
                        "openai/widgetCSP": K,
                        "openai/widgetDomain": C().optional()
                    })
                })])
            })
        })
    })),
    X, Z = e((() => {
        X = class extends Error {
            constructor() {
                super(`Wallet request is no longer available`)
            }
        }
    }));
export {
    L as a, z as c, R as i, Z as n, I as o, B as r, Y as s, X as t
};
//# sourceMappingURL=1f58b914-eq1wq8vxjtsr0wf3.js.map