import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $ as n,
    Vn as r,
    jt as i,
    vt as a
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    BMn as o,
    CHt as s,
    FMn as c,
    GMn as l,
    HMn as u,
    IMn as ee,
    JMn as d,
    KMn as f,
    LMn as p,
    Ozt as m,
    PMn as te,
    QMn as ne,
    RMn as re,
    SHt as h,
    UMn as g,
    VMn as ie,
    WMn as _,
    XMn as ae,
    YMn as oe,
    ZMn as se,
    qMn as ce,
    vzt as v,
    wHt as le,
    wzt as y,
    zMn as ue
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
var b, x, S, C, w, T, E, D, O, k, A, j, M, N, P, F, I, L, R, z = e((() => {
        ne(), b = (e, t) => Object.fromEntries(Object.entries(e).filter(([e]) => e.startsWith(t)).map(([e, n]) => [e.slice(t.length), n])), x = b(c, `CHATGPT_AGENT_BUILDER_ACTION_TYPE_`), S = b(te, `CHATGPT_AGENT_BUILDER_ACTION_RESULT_`), C = b(ee, `CHATGPT_AGENT_BUILDER_CHANNEL_TYPE_`), w = b(p, `CHATGPT_AGENT_BUILDER_CONNECTION_MODE_`), T = b(re, `CHATGPT_AGENT_BUILDER_CONNECTOR_WRITE_SAFETY_MODE_`), E = b(ue, `CHATGPT_AGENT_BUILDER_EDITABLE_FIELD_`), D = b(o, `CHATGPT_AGENT_BUILDER_FILE_KIND_`), O = b(ie, `CHATGPT_AGENT_BUILDER_PAGE_`), k = b(u, `CHATGPT_AGENT_BUILDER_PAGE_LOAD_RESULT_`), A = b(g, `CHATGPT_AGENT_BUILDER_PUBLISH_BLOCK_REASON_`), j = b(_, `CHATGPT_AGENT_BUILDER_SCHEDULE_TYPE_`), M = b(l, `CHATGPT_AGENT_BUILDER_SHARE_VISIBILITY_`), N = b(f, `CHATGPT_AGENT_BUILDER_SKILL_SOURCE_`), P = b(ce, `CHATGPT_AGENT_BUILDER_SKILL_VIEW_MODE_`), F = b(d, `CHATGPT_AGENT_BUILDER_SLACK_RESPONSE_MODE_`), I = b(oe, `CHATGPT_AGENT_BUILDER_SOURCE_`), L = b(ae, `CHATGPT_AGENT_BUILDER_UPLOAD_MODE_`), R = b(se, `CHATGPT_AGENT_BUILDER_UPLOAD_SOURCE_`)
    })),
    B, V = e((() => {
        n(), z(), B = e => {
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
        y(), h(), K(), q = () => {
            let e = v(),
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
            s({
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
        y(), X = t(r()), n(), h(), z(), K(), Z = ({
            enabled: e = !0,
            loadResult: t = k.SUCCESS
        } = {}) => {
            "use no forget";
            let n = i(),
                r = (0, X.useRef)(null);
            (0, X.useEffect)(() => {
                if (!e) return;
                let i = H(n.pathname);
                if (i == null) return;
                let a = `${n.pathname}:${t}`;
                if (r.current === a) return;
                r.current = a;
                let o = G(n.pathname) ? Q() : null;
                le({
                    ...i,
                    loadResult: t,
                    ...o ?? {}
                })
            }, [e, t, n.pathname])
        }, Q = () => {
            let e = v(),
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
        h(), z(), Y(), $()
    }));
export {
    R as C, L as S, M as _, J as a, F as b, C as c, E as d, D as f, j as g, A as h, Y as i, w as l, k as m, $ as n, x as o, O as p, Z as r, S as s, de as t, T as u, N as v, z as w, I as x, P as y
};
//# sourceMappingURL=4285e798-jv6dhkkljo44ybd3.js.map