import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ait as t,
    Nrt as n,
    Pit as r,
    QG as i,
    ZG as a,
    a7 as o,
    git as s,
    i1 as c,
    l7 as l,
    rot as u,
    trt as d,
    u1 as f,
    vit as p
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Gwn as m,
    Wwn as h,
    cPn as g,
    gnt as _,
    hnt as v,
    oPn as y,
    sPn as b
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    AS as x,
    BS as S,
    FS as C,
    HS as w,
    PS as T,
    RS as E,
    US as D,
    VS as O,
    bS as k,
    dS as A,
    vS as j,
    xS as M,
    zS as N
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    n as P,
    t as F
} from "./8d846022-bvik3sltoydb2o43.js";

function I() {
    return JSON.stringify([u()?.user?.id ?? null, u()?.account?.id ?? null, c()?.normalizedAccountUserId ?? null, d({
        isAuthOptional: !0
    })[`ChatGPT-Account-ID`] ?? null])
}
async function L(e, t) {
    return b(((await y(!0, h.CONNECTOR_SETTING, void 0, e, t)).connector_openai_wallet ?? []).filter(e => e.auth_status === `ACTIVE` && [`OAUTH`, `API_KEY`, `NONE`].includes(e.auth_type)))
}
async function R({
    accountId: e,
    linkId: n,
    name: r,
    args: i,
    signal: o,
    context: c
}) {
    if (!U.has(r)) throw Error(`Unknown Wallet enrollment action`);
    let l = await v.safePost(`/mcp`, {
            authOption: t.Required,
            requestBody: {
                jsonrpc: `2.0`,
                id: W,
                method: `tools/call`,
                params: {
                    name: `wallet.${r}`,
                    arguments: i,
                    _meta: {
                        ...c ? {
                            "x-codex-turn-metadata": V(c)
                        } : {},
                        _codex_apps: {
                            resource_uri: `/${B}/${n}/${r}`,
                            returns_pre_shaped_mcp_result: !0
                        },
                        ...typeof window < `u` && window.navigator.language ? {
                            "openai/browserLanguage": window.navigator.language
                        } : {}
                    }
                }
            },
            additionalHeaders: {
                ...a(e),
                [s]: h.CODEX,
                Accept: `application/json`
            },
            disableAutomaticRetry: !0,
            cache: `no-store`,
            signal: o
        }),
        u = G.safeParse(l);
    if (!u.success) throw Error(`Invalid Wallet tool response`);
    if (`error` in u.data) throw Error(`Wallet tool request failed (${u.data.error.code})`);
    let d = u.data.result,
        f = P(d);
    if (!f) throw Error(`Invalid Wallet tool response`);
    return {
        ...f,
        _meta: d._meta,
        structuredContent: d.structuredContent
    }
}
async function z(e, n, r, i) {
    if (i) {
        let n = await o.safeGet(`/ecosystem/widget`, {
                authOption: t.Required,
                parameters: {
                    query: {
                        uri: `connectors://${B}`,
                        template_pointer: H
                    }
                },
                additionalHeaders: {
                    ...a(e),
                    [s]: h.CODEX
                },
                disableAutomaticRetry: !0,
                cache: `no-store`,
                signal: r
            }),
            {
                html: i,
                csp: c,
                domain: l
            } = q.parse(n);
        return {
            html: i,
            csp: c,
            domain: l
        }
    }
    let c = await v.safePost(`/mcp`, {
            authOption: t.Required,
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
                                link_id: n
                            }
                        },
                        ...typeof window < `u` && window.navigator.language ? {
                            "openai/browserLanguage": window.navigator.language
                        } : {}
                    }
                }
            },
            additionalHeaders: {
                ...a(e),
                [s]: h.CODEX,
                Accept: `application/json`
            },
            disableAutomaticRetry: !0,
            cache: `no-store`,
            signal: r
        }),
        l = J.safeParse(c);
    if (!l.success) throw Error(`Invalid Wallet widget response`);
    let u = l.data.result.contents[0];
    return {
        html: u.text,
        csp: u._meta[`openai/widgetCSP`],
        domain: null
    }
}
var B, V, H, U, W, G, K, q, J, Y = e((() => {
        g(), m(), _(), f(), n(), r(), p(), l(), i(), F(), A(), B = `connector_openai_wallet`, V = e => ({
            thread_id: e.threadId,
            client_metadata: {
                orbit_id: e.orbitId
            }
        }), H = `internal://wallet-vgs-card-enrollment`, U = new Set([`open_vgs_card_enrollment`, `list_wallet_contact_infos`, `save_wallet_contact_info`, `register_vgs_agentic_token`, `request_vgs_card_verification`, `refresh_vgs_card_verification`, `verify_vgs_card`, `finalize_vgs_card_registration`]), W = 1, G = w([N({
            jsonrpc: x(`2.0`),
            id: x(W),
            result: C({
                content: k(D()),
                structuredContent: E(S(), D()).optional(),
                _meta: E(S(), D()).optional(),
                isError: M().optional()
            })
        }), N({
            jsonrpc: x(`2.0`),
            id: x(W).nullable(),
            error: C({
                code: T(),
                message: S()
            })
        })]), K = C({
            connect_domains: k(S()).nullish(),
            resource_domains: k(S()).nullish(),
            frame_domains: k(S()).nullish(),
            redirect_domains: k(S()).nullish()
        }), q = C({
            html: S().refine(e => e.trim().length > 0),
            is_verified_first_party: x(!0),
            domain: j(),
            csp: K
        }), J = N({
            jsonrpc: x(`2.0`),
            id: x(W),
            result: C({
                contents: O([C({
                    uri: x(H),
                    mimeType: x(`text/html`),
                    text: S().refine(e => e.trim().length > 0),
                    _meta: C({
                        "openai/widgetCSP": K,
                        "openai/widgetDomain": j().optional()
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
//# sourceMappingURL=1f58b914-m9fycvi51wda4een.js.map