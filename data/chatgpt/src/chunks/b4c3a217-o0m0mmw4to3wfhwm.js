import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    JSt as t,
    KSt as n,
    Kht as r,
    NGn as i,
    Wht as a,
    aGn as o,
    bGn as s,
    cGn as c,
    jGn as l,
    vGn as u
} from "./conversation-small-bcbq46iub1p0ca1t.js";
var d, f, p, m, h, g = e((() => {
    n(), l(), a(), o(), u(), d = `codex-file-citation`, f = `codex-terminal-citation`, p = `task-stub`, m = `codex-image-citation`, h = () => e => {
        s(e, e => {
            if (!t(e)) return;
            let n = e.data ??= {};
            switch (e.name) {
                case d: {
                    n.hName = d;
                    let t = parseInt(e.attributes?.line_range_start ?? `0`, 10),
                        r = parseInt(e.attributes?.line_range_end ?? e.attributes?.line_range_start ?? `0`, 10);
                    n.hProperties = {
                        path: e.attributes?.path,
                        lineRangeStart: t,
                        lineRangeEnd: r,
                        gitUrl: e.attributes?.git_url
                    };
                    break
                }
                case f: {
                    n.hName = f;
                    let t = parseInt(e.attributes?.line_range_start ?? `0`, 10),
                        r = parseInt(e.attributes?.line_range_end ?? e.attributes?.line_range_start ?? `0`, 10);
                    n.hProperties = {
                        chunkId: e.attributes?.terminal_chunk_id,
                        lineRangeStart: t,
                        lineRangeEnd: r
                    };
                    break
                }
                case p: {
                    let t;
                    try {
                        t = c().use(r).stringify({
                            type: `root`,
                            children: e.children
                        })
                    } catch {
                        t = i({
                            type: `root`,
                            children: e.children ?? []
                        })
                    }
                    n.hName = p, n.hProperties = {
                        title: e.attributes?.title,
                        prompt: t
                    };
                    break
                }
                case m:
                    n.hName = m, n.hProperties = {
                        assetPointer: e.attributes?.asset_pointer
                    };
                    break
            }
        })
    }
}));
export {
    g as a, f as i, m as n, h as o, p as r, d as t
};
//# sourceMappingURL=b4c3a217-o0m0mmw4to3wfhwm.js.map