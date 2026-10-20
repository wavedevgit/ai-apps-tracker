import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    At as n,
    Q as r,
    Vn as i,
    _t as a
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    AHt as o,
    Azt as s,
    BMn as c,
    FMn as l,
    GMn as ee,
    HMn as te,
    IMn as u,
    JMn as ne,
    KMn as d,
    LMn as f,
    OHt as p,
    PMn as re,
    Pzt as m,
    QMn as ie,
    RMn as h,
    UMn as ae,
    VMn as oe,
    WMn as se,
    XMn as ce,
    YMn as le,
    ZMn as g,
    kHt as _,
    qMn as v,
    wzt as y,
    zMn as ue
} from "./conversation-small-ikg0dwuw782klweb.js";
var b, x, S, C, w, T, E, D, O, k, A, j, M, N, P, F, I, L, R, z = e((() => {
        ie(), b = (e, t) => Object.fromEntries(Object.entries(e).filter(([e]) => e.startsWith(t)).map(([e, n]) => [e.slice(t.length), n])), x = b(l, `CHATGPT_AGENT_BUILDER_ACTION_TYPE_`), S = b(re, `CHATGPT_AGENT_BUILDER_ACTION_RESULT_`), C = b(u, `CHATGPT_AGENT_BUILDER_CHANNEL_TYPE_`), w = b(f, `CHATGPT_AGENT_BUILDER_CONNECTION_MODE_`), T = b(h, `CHATGPT_AGENT_BUILDER_CONNECTOR_WRITE_SAFETY_MODE_`), E = b(ue, `CHATGPT_AGENT_BUILDER_EDITABLE_FIELD_`), D = b(c, `CHATGPT_AGENT_BUILDER_FILE_KIND_`), O = b(oe, `CHATGPT_AGENT_BUILDER_PAGE_`), k = b(te, `CHATGPT_AGENT_BUILDER_PAGE_LOAD_RESULT_`), A = b(ae, `CHATGPT_AGENT_BUILDER_PUBLISH_BLOCK_REASON_`), j = b(se, `CHATGPT_AGENT_BUILDER_SCHEDULE_TYPE_`), M = b(ee, `CHATGPT_AGENT_BUILDER_SHARE_VISIBILITY_`), N = b(d, `CHATGPT_AGENT_BUILDER_SKILL_SOURCE_`), P = b(v, `CHATGPT_AGENT_BUILDER_SKILL_VIEW_MODE_`), F = b(ne, `CHATGPT_AGENT_BUILDER_SLACK_RESPONSE_MODE_`), I = b(le, `CHATGPT_AGENT_BUILDER_SOURCE_`), L = b(ce, `CHATGPT_AGENT_BUILDER_UPLOAD_MODE_`), R = b(g, `CHATGPT_AGENT_BUILDER_UPLOAD_SOURCE_`)
    })),
    B, V = e((() => {
        r(), z(), B = e => {
            if (a(`/agents`, e) != null) return {
                page: O.AGENT_DIRECTORY_HOME
            };
            let t = a(`/agents/a/:gptId`, e);
            if (t != null) {
                let e = t.params.gptId;
                return e == null ? null : {
                    page: O.AGENT_DIRECTORY_DETAIL,
                    resourceId: e
                }
            }
            if (a(`/agents/studio/new`, e) != null) return {
                page: O.NEW_AGENT
            };
            if (a(`/agents/studio/edit/:gptId/preview`, e) != null) return {
                page: O.PREVIEW
            };
            if (a(`/agents/studio/edit/:gptId/analytics`, e) != null) return {
                page: O.ANALYTICS
            };
            if (a(`/agents/studio/edit/:gptId/channels/chatgpt`, e) != null) return {
                page: O.CHANNEL_CHATGPT
            };
            if (a(`/agents/studio/edit/:gptId/channels/slack/setup`, e) != null) return null;
            if (a(`/agents/studio/edit/:gptId/channels/api/:triggerId`, e) != null) return {
                page: O.CHANNEL_API
            };
            let n = a(`/agents/studio/edit/:gptId/channels/slack/:deploymentId`, e);
            if (n != null) {
                let e = n.params.deploymentId;
                return e == null ? null : {
                    page: O.CHANNEL_SLACK,
                    resourceId: e
                }
            }
            let r = a(`/agents/studio/edit/:gptId/connectors/:connectorId`, e);
            if (r != null) {
                let e = r.params.connectorId;
                return e == null ? null : {
                    page: O.CONNECTOR_DETAIL,
                    resourceId: e
                }
            }
            let i = a(`/agents/studio/edit/:gptId/files/:nodeId`, e);
            if (i != null) {
                let e = i.params.nodeId;
                return e == null ? null : {
                    page: O.FILE_DETAIL,
                    resourceId: e
                }
            }
            if (a(`/agents/studio/edit/:gptId/files`, e) != null) return {
                page: O.FILES_ROOT
            };
            if (a(`/agents/studio/edit/:gptId/memory/chatgpt`, e) != null) return {
                page: O.MEMORY_CHATGPT
            };
            let o = a(`/agents/studio/edit/:gptId/memory/slack/:deploymentId`, e);
            if (o != null) {
                let e = o.params.deploymentId;
                return e == null ? null : {
                    page: O.MEMORY_SLACK,
                    resourceId: e
                }
            }
            if (a(`/agents/studio/edit/:gptId/memory`, e) != null) return {
                page: O.MEMORY_ROOT
            };
            let s = a(`/agents/studio/edit/:gptId/skills/:skillId/files/:nodeId`, e);
            if (s != null) {
                let e = s.params.skillId,
                    t = s.params.nodeId;
                return e == null || t == null ? null : {
                    page: O.SKILL_FILE_DETAIL,
                    resourceId: e,
                    subResourceId: t
                }
            }
            let c = a(`/agents/studio/edit/:gptId/skills/:skillId/files`, e);
            if (c != null) {
                let e = c.params.skillId;
                return e == null ? null : {
                    page: O.SKILL_FILES_ROOT,
                    resourceId: e
                }
            }
            let l = a(`/agents/studio/edit/:gptId/skills/:skillId`, e);
            if (l != null) {
                let e = l.params.skillId;
                return e == null ? null : {
                    page: O.SKILL_OVERVIEW,
                    resourceId: e
                }
            }
            return a(`/agents/studio/edit/:gptId`, e) == null ? null : {
                page: O.EDITOR_INSTRUCTIONS
            }
        }
    })),
    H, U, W, G, K = e((() => {
        z(), V(), H = e => B(e), U = () => {
            if (typeof location > `u`) return O.UNKNOWN;
            let e = B(location.pathname);
            return e == null ? O.UNKNOWN : e.page
        }, W = () => typeof location < `u` && G(location.pathname), G = e => e === `/agents/studio` || e.startsWith(`/agents/studio/`)
    })),
    q, J, Y = e((() => {
        s(), p(), K(), q = () => {
            let e = y(),
                t = e.currentGpt;
            return {
                agentId: t.id ?? void 0,
                isReadonly: m(e),
                isPublished: t.id != null && e.lastPublishedGpt?.id === t.id,
                isPreviewVersion: e.previewGpt != null
            }
        }, J = e => {
            let t = U(),
                n = W() ? q() : null;
            _({
                ...e,
                ...n == null ? {} : {
                    agentId: e.agentId ?? n.agentId,
                    isReadonly: e.isReadonly ?? n.isReadonly,
                    isPublished: e.isPublished ?? n.isPublished,
                    isPreviewVersion: e.isPreviewVersion ?? n.isPreviewVersion
                },
                page: t
            })
        }
    })),
    X, Z, Q, $ = e((() => {
        s(), X = t(i()), r(), p(), z(), K(), Z = ({
            enabled: e = !0,
            loadResult: t = k.SUCCESS
        } = {}) => {
            "use no forget";
            let r = n(),
                i = (0, X.useRef)(null);
            (0, X.useEffect)(() => {
                if (!e) return;
                let n = H(r.pathname);
                if (n == null) return;
                let a = `${r.pathname}:${t}`;
                if (i.current === a) return;
                i.current = a;
                let s = G(r.pathname) ? Q() : null;
                o({
                    ...n,
                    loadResult: t,
                    ...s ?? {}
                })
            }, [e, t, r.pathname])
        }, Q = () => {
            let e = y(),
                t = e.currentGpt;
            return {
                agentId: t.id ?? void 0,
                isReadonly: m(e),
                isPublished: t.id != null && e.lastPublishedGpt?.id === t.id,
                isPreviewVersion: e.previewGpt != null
            }
        }
    })),
    de = e((() => {
        p(), z(), Y(), $()
    }));
export {
    R as C, L as S, M as _, J as a, F as b, C as c, E as d, D as f, j as g, A as h, Y as i, w as l, k as m, $ as n, x as o, O as p, Z as r, S as s, de as t, T as u, N as v, z as w, I as x, P as y
};
//# sourceMappingURL=4285e798-lllo1c9bqolpkjno.js.map