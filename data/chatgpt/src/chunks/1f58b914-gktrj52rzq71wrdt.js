import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    I7 as t,
    Lit as n,
    M7 as r,
    Pat as i,
    Rat as a,
    SK as o,
    Sat as s,
    V1 as c,
    ait as l,
    bat as u,
    q1 as d,
    sst as f,
    xK as p
} from "./4813494d-mdvd4786a87166cc.js";
import {
    RTn as m,
    _Fn as h,
    _nt as g,
    gnt as _,
    vFn as v,
    yFn as y,
    zTn as b
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Hx as x,
    Qx as S,
    Yx as C,
    Zx as w,
    _S as T,
    bS as E,
    dS as D,
    fS as O,
    gS as k,
    hS as A,
    sS as j,
    vS as M,
    yS as N
} from "./c2675c8c-oz03twoan08d72ud.js";
import {
    n as P,
    t as F
} from "./8d846022-bvik3sltoydb2o43.js";

function I() {
    return JSON.stringify([f()?.user?.id ?? null, f()?.account?.id ?? null, c()?.normalizedAccountUserId ?? null, l({
        isAuthOptional: !0
    })[`ChatGPT-Account-ID`] ?? null])
}
async function L(e, t) {
    return v(((await h(!0, m.CONNECTOR_SETTING, void 0, e, t)).connector_openai_wallet ?? []).filter(e => e.auth_status === `ACTIVE` && [`OAUTH`, `API_KEY`, `NONE`].includes(e.auth_type)))
}
async function R({
    accountId: e,
    linkId: t,
    name: n,
    args: r,
    signal: a,
    context: o
}) {
    if (!U.has(n)) throw Error(`Unknown Wallet enrollment action`);
    let s = await _.safePost(`/mcp`, {
            authOption: i.Required,
            requestBody: {
                jsonrpc: `2.0`,
                id: W,
                method: `tools/call`,
                params: {
                    name: `wallet.${n}`,
                    arguments: r,
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
                [u]: m.CODEX,
                Accept: `application/json`
            },
            disableAutomaticRetry: !0,
            cache: `no-store`,
            signal: a
        }),
        c = G.safeParse(s);
    if (!c.success) throw Error(`Invalid Wallet tool response`);
    if (`error` in c.data) throw Error(`Wallet tool request failed (${c.data.error.code})`);
    let l = c.data.result,
        d = P(l);
    if (!d) throw Error(`Invalid Wallet tool response`);
    return {
        ...d,
        _meta: l._meta,
        structuredContent: l.structuredContent
    }
}
async function z(e, t, n, a) {
    if (a) {
        let t = await r.safeGet(`/ecosystem/widget`, {
                authOption: i.Required,
                parameters: {
                    query: {
                        uri: `connectors://${B}`,
                        template_pointer: H
                    }
                },
                additionalHeaders: {
                    ...p(e),
                    [u]: m.CODEX
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
    let o = await _.safePost(`/mcp`, {
            authOption: i.Required,
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
                [u]: m.CODEX,
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
        y(), b(), g(), d(), n(), a(), s(), t(), o(), F(), x(), B = `connector_openai_wallet`, V = e => ({
            thread_id: e.threadId,
            client_metadata: {
                orbit_id: e.orbitId
            }
        }), H = `internal://wallet-vgs-card-enrollment`, U = new Set([`open_vgs_card_enrollment`, `list_wallet_contact_infos`, `save_wallet_contact_info`, `register_vgs_agentic_token`, `request_vgs_card_verification`, `refresh_vgs_card_verification`, `verify_vgs_card`, `finalize_vgs_card_registration`]), W = 1, G = N([k({
            jsonrpc: j(`2.0`),
            id: j(W),
            result: O({
                content: w(E()),
                structuredContent: A(T(), E()).optional(),
                _meta: A(T(), E()).optional(),
                isError: S().optional()
            })
        }), k({
            jsonrpc: j(`2.0`),
            id: j(W).nullable(),
            error: O({
                code: D(),
                message: T()
            })
        })]), K = O({
            connect_domains: w(T()).nullish(),
            resource_domains: w(T()).nullish(),
            frame_domains: w(T()).nullish(),
            redirect_domains: w(T()).nullish()
        }), q = O({
            html: T().refine(e => e.trim().length > 0),
            is_verified_first_party: j(!0),
            domain: C(),
            csp: K
        }), J = k({
            jsonrpc: j(`2.0`),
            id: j(W),
            result: O({
                contents: M([O({
                    uri: j(H),
                    mimeType: j(`text/html`),
                    text: T().refine(e => e.trim().length > 0),
                    _meta: O({
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
//# sourceMappingURL=1f58b914-gktrj52rzq71wrdt.js.map