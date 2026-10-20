import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as t,
    Art as n,
    CK as r,
    Git as i,
    I1 as a,
    L7 as o,
    Mot as s,
    N7 as c,
    aat as l,
    cit as u,
    lat as d,
    qit as f,
    wK as p
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    CPn as m,
    TPn as h,
    _nt as g,
    aTn as _,
    iTn as v,
    vnt as y,
    wPn as b
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    DS as x,
    GS as S,
    HS as C,
    JS as w,
    KS as T,
    LS as E,
    OS as D,
    TS as O,
    VS as k,
    XS as A,
    YS as j,
    qS as M,
    vS as N
} from "./c2675c8c-nxl2ic2ofk2vw70s.js";
import {
    n as P,
    t as F
} from "./8d846022-bvik3sltoydb2o43.js";

function I() {
    return JSON.stringify([s()?.user?.id ?? null, s()?.account?.id ?? null, t()?.normalizedAccountUserId ?? null, n({
        isAuthOptional: !0
    })[`ChatGPT-Account-ID`] ?? null])
}
async function L(e, t) {
    return b(((await m(!0, v.CONNECTOR_SETTING, void 0, e, t)).connector_openai_wallet ?? []).filter(e => e.auth_status === `ACTIVE` && [`OAUTH`, `API_KEY`, `NONE`].includes(e.auth_type)))
}
async function R({
    accountId: e,
    linkId: t,
    name: n,
    args: a,
    signal: o,
    context: s
}) {
    if (!U.has(n)) throw Error(`Unknown Wallet enrollment action`);
    let c = await g.safePost(`/mcp`, {
            authOption: l.Required,
            requestBody: {
                jsonrpc: `2.0`,
                id: W,
                method: `tools/call`,
                params: {
                    name: `wallet.${n}`,
                    arguments: a,
                    _meta: {
                        ...s ? {
                            "x-codex-turn-metadata": V(s)
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
                ...r(e),
                [i]: v.CODEX,
                Accept: `application/json`
            },
            disableAutomaticRetry: !0,
            cache: `no-store`,
            signal: o
        }),
        u = G.safeParse(c);
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
async function z(e, t, n, a) {
    if (a) {
        let t = await c.safeGet(`/ecosystem/widget`, {
                authOption: l.Required,
                parameters: {
                    query: {
                        uri: `connectors://${B}`,
                        template_pointer: H
                    }
                },
                additionalHeaders: {
                    ...r(e),
                    [i]: v.CODEX
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
    let o = await g.safePost(`/mcp`, {
            authOption: l.Required,
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
                ...r(e),
                [i]: v.CODEX,
                Accept: `application/json`
            },
            disableAutomaticRetry: !0,
            cache: `no-store`,
            signal: n
        }),
        s = J.safeParse(o);
    if (!s.success) throw Error(`Invalid Wallet widget response`);
    let u = s.data.result.contents[0];
    return {
        html: u.text,
        csp: u._meta[`openai/widgetCSP`],
        domain: null
    }
}
var B, V, H, U, W, G, K, q, J, Y = e((() => {
        h(), _(), y(), a(), u(), d(), f(), o(), p(), F(), N(), B = `connector_openai_wallet`, V = e => ({
            thread_id: e.threadId,
            client_metadata: {
                orbit_id: e.orbitId
            }
        }), H = `internal://wallet-vgs-card-enrollment`, U = new Set([`open_vgs_card_enrollment`, `list_wallet_contact_infos`, `save_wallet_contact_info`, `register_vgs_agentic_token`, `request_vgs_card_verification`, `refresh_vgs_card_verification`, `verify_vgs_card`, `finalize_vgs_card_registration`]), W = 1, G = j([T({
            jsonrpc: E(`2.0`),
            id: E(W),
            result: C({
                content: x(A()),
                structuredContent: S(M(), A()).optional(),
                _meta: S(M(), A()).optional(),
                isError: D().optional()
            })
        }), T({
            jsonrpc: E(`2.0`),
            id: E(W).nullable(),
            error: C({
                code: k(),
                message: M()
            })
        })]), K = C({
            connect_domains: x(M()).nullish(),
            resource_domains: x(M()).nullish(),
            frame_domains: x(M()).nullish(),
            redirect_domains: x(M()).nullish()
        }), q = C({
            html: M().refine(e => e.trim().length > 0),
            is_verified_first_party: E(!0),
            domain: O(),
            csp: K
        }), J = T({
            jsonrpc: E(`2.0`),
            id: E(W),
            result: C({
                contents: w([C({
                    uri: E(H),
                    mimeType: E(`text/html`),
                    text: M().refine(e => e.trim().length > 0),
                    _meta: C({
                        "openai/widgetCSP": K,
                        "openai/widgetDomain": O().optional()
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
//# sourceMappingURL=1f58b914-bgvg7ujh3t0jtjp7.js.map