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
    AMn as o,
    CHt as s,
    CMn as c,
    DMn as l,
    EMn as ee,
    FMn as te,
    IMn as u,
    MMn as ne,
    NMn as d,
    OMn as f,
    Ozt as p,
    PMn as re,
    SHt as m,
    SMn as h,
    TMn as g,
    bMn as ie,
    jMn as ae,
    kMn as oe,
    vMn as se,
    vzt as _,
    wHt as ce,
    wMn as le,
    wzt as v,
    xMn as y,
    yMn as ue
} from "./conversation-small-fym1zmu9zimymmm1.js";
var b, x, S, C, w, T, E, D, O, k, A, j, M, N, P, F, I, L, R, z = e((() => {
        u(), b = (e, t) => Object.fromEntries(Object.entries(e).filter(([e]) => e.startsWith(t)).map(([e, n]) => [e.slice(t.length), n])), x = b(ue, `CHATGPT_AGENT_BUILDER_ACTION_TYPE_`), S = b(se, `CHATGPT_AGENT_BUILDER_ACTION_RESULT_`), C = b(ie, `CHATGPT_AGENT_BUILDER_CHANNEL_TYPE_`), w = b(y, `CHATGPT_AGENT_BUILDER_CONNECTION_MODE_`), T = b(h, `CHATGPT_AGENT_BUILDER_CONNECTOR_WRITE_SAFETY_MODE_`), E = b(c, `CHATGPT_AGENT_BUILDER_EDITABLE_FIELD_`), D = b(le, `CHATGPT_AGENT_BUILDER_FILE_KIND_`), O = b(g, `CHATGPT_AGENT_BUILDER_PAGE_`), k = b(ee, `CHATGPT_AGENT_BUILDER_PAGE_LOAD_RESULT_`), A = b(l, `CHATGPT_AGENT_BUILDER_PUBLISH_BLOCK_REASON_`), j = b(f, `CHATGPT_AGENT_BUILDER_SCHEDULE_TYPE_`), M = b(oe, `CHATGPT_AGENT_BUILDER_SHARE_VISIBILITY_`), N = b(o, `CHATGPT_AGENT_BUILDER_SKILL_SOURCE_`), P = b(ae, `CHATGPT_AGENT_BUILDER_SKILL_VIEW_MODE_`), F = b(ne, `CHATGPT_AGENT_BUILDER_SLACK_RESPONSE_MODE_`), I = b(d, `CHATGPT_AGENT_BUILDER_SOURCE_`), L = b(re, `CHATGPT_AGENT_BUILDER_UPLOAD_MODE_`), R = b(te, `CHATGPT_AGENT_BUILDER_UPLOAD_SOURCE_`)
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
        v(), m(), K(), q = () => {
            let e = _(),
                t = e.currentGpt;
            return {
                agentId: t.id ?? void 0,
                isReadonly: p(e),
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
        v(), X = t(r()), n(), m(), z(), K(), Z = ({
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
                ce({
                    ...i,
                    loadResult: t,
                    ...o ?? {}
                })
            }, [e, t, n.pathname])
        }, Q = () => {
            let e = _(),
                t = e.currentGpt;
            return {
                agentId: t.id ?? void 0,
                isReadonly: p(e),
                isPublished: t.id != null && e.lastPublishedGpt?.id === t.id,
                isPreviewVersion: e.previewGpt != null
            }
        }
    })),
    de = e((() => {
        m(), z(), Y(), $()
    }));
export {
    R as C, L as S, M as _, J as a, F as b, C as c, E as d, D as f, j as g, A as h, Y as i, w as l, k as m, $ as n, x as o, O as p, Z as r, S as s, de as t, T as u, N as v, z as w, I as x, P as y
};
//# sourceMappingURL=4285e798-mb6k70xz6sq0hl39.js.map