import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Snt as t,
    X5 as n,
    Y5 as r,
    wnt as i
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    Bn as a,
    wn as o
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    dp as s,
    fb as c,
    fp as l,
    mp as u,
    pb as d,
    pp as f
} from "./30901919-niqyapppecmq5jkn.js";
import {
    n as p,
    r as m,
    t as h
} from "./6fd89734-ny5i76ta4bni7dqo.js";
var g, _, v, y, b = e((() => {
    g = o(), m(), d(), u(), s(), n(), _ = a(), v = {
        pptx: f,
        xlsx: l,
        csv: l,
        txt: c,
        md: c,
        markdown: c
    }, y = e => {
        "use forget";
        let t = (0, g.c)(8),
            {
                fileName: n,
                isSandboxDownload: i
            } = e,
            a = i !== void 0 && i;
        if (!n) return null;
        let o;
        t[0] !== n || t[1] !== a ? (o = a ? p(n) : h(n), t[0] = n, t[1] = a, t[2] = o) : o = t[2];
        let s = o,
            c = s ? v[s] : null,
            l = s === `xlsx` || s === `csv`,
            u = s === `pptx`,
            d = s === `txt` || s === `md` || s === `markdown`,
            f;
        return t[3] !== c || t[4] !== u || t[5] !== l || t[6] !== d ? (f = c ? (0, _.jsx)(`div`, {
            className: r(`rounded-md p-1`, l && `bg-[#04b84c]`, u && `bg-orange-300`, d && `bg-token-bg-elevated-secondary border-token-border-light border`),
            children: (0, _.jsx)(c, {
                className: r(`m-0 size-4`, d ? `text-token-text-primary` : `text-white`)
            })
        }) : null, t[3] = c, t[4] = u, t[5] = l, t[6] = d, t[7] = f) : f = t[7], f
    }
}));

function x(e, t, n) {
    let {
        artifactSurface: r
    } = w[e], {
        artifactId: i,
        conversationId: a,
        messageId: o
    } = n ?? {};
    return {
        structuredEvent: `ChatgptWebArtifactAction`,
        structuredPayload: {
            artifactId: i,
            artifactAction: e,
            artifactExtension: t,
            artifactSurface: r,
            conversationId: a,
            messageId: o
        }
    }
}

function S(e, n, r) {
    let {
        structuredEvent: i,
        structuredPayload: a
    } = x(e, n, r);
    t.logStructuredEvent(i, a)
}
var C, w, T = e((() => {
    i(), C = function(e) {
        return e.AgentInlineCitationDownload = `agent_inline_citation_download`, e.AgentInlineCitationExpand = `agent_inline_citation_expand`, e.FocusedViewHeaderDirectExport = `focused_view_header_direct_export`, e.FocusedViewHeaderRemoteDownload = `focused_view_header_remote_download`, e.SandboxInlineCitationDownload = `sandbox_inline_citation_download`, e.FocusedViewHeaderWorkerExport = `focused_view_header_worker_export`, e
    }({}), w = {
        agent_inline_citation_download: {
            artifactSurface: `agent_inline_citation_download`
        },
        agent_inline_citation_expand: {
            artifactSurface: `agent_inline_citation_expand`
        },
        focused_view_header_direct_export: {
            artifactSurface: `focused_view_header`
        },
        focused_view_header_remote_download: {
            artifactSurface: `focused_view_header`
        },
        sandbox_inline_citation_download: {
            artifactSurface: `sandbox_inline_citation_download`
        },
        focused_view_header_worker_export: {
            artifactSurface: `focused_view_header_worker_export`
        }
    }
}));
export {
    b as a, y as i, T as n, S as r, C as t
};
//# sourceMappingURL=81fe9c28-g4z7pxcc7pzdxdl9.js.map