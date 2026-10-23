import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    K5 as t,
    Knt as n,
    Wnt as r,
    q5 as i
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as a,
    wn as o
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    db as s,
    dp as c,
    fp as l,
    lp as u,
    ub as d,
    up as f
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    n as p,
    r as m,
    t as h
} from "./6fd89734-ny5i76ta4bni7dqo.js";
var g, _, v, y, b = e((() => {
    g = o(), m(), s(), l(), u(), i(), _ = a(), v = {
        pptx: c,
        xlsx: f,
        csv: f,
        txt: d,
        md: d,
        markdown: d
    }, y = e => {
        "use forget";
        let n = (0, g.c)(8),
            {
                fileName: r,
                isSandboxDownload: i
            } = e,
            a = i !== void 0 && i;
        if (!r) return null;
        let o;
        n[0] !== r || n[1] !== a ? (o = a ? p(r) : h(r), n[0] = r, n[1] = a, n[2] = o) : o = n[2];
        let s = o,
            c = s ? v[s] : null,
            l = s === `xlsx` || s === `csv`,
            u = s === `pptx`,
            d = s === `txt` || s === `md` || s === `markdown`,
            f;
        return n[3] !== c || n[4] !== u || n[5] !== l || n[6] !== d ? (f = c ? (0, _.jsx)(`div`, {
            className: t(`rounded-md p-1`, l && `bg-[#04b84c]`, u && `bg-orange-300`, d && `bg-token-bg-elevated-secondary border-token-border-light border`),
            children: (0, _.jsx)(c, {
                className: t(`m-0 size-4`, d ? `text-token-text-primary` : `text-white`)
            })
        }) : null, n[3] = c, n[4] = u, n[5] = l, n[6] = d, n[7] = f) : f = n[7], f
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

function S(e, t, n) {
    let {
        structuredEvent: i,
        structuredPayload: a
    } = x(e, t, n);
    r.logStructuredEvent(i, a)
}
var C, w, T = e((() => {
    n(), C = function(e) {
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
//# sourceMappingURL=81fe9c28-kxj7xxdrl811mvxv.js.map