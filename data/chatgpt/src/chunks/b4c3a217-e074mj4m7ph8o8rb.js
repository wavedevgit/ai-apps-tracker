import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $St as t,
    QWn as n,
    YWn as r,
    Yht as i,
    ZSt as a,
    aGn as o,
    bGn as s,
    qht as c,
    sGn as l,
    vGn as u
} from "./conversation-small-fh0oqifngkf5rvl1.js";
var d, f, p, m, h, g = e((() => {
    a(), u(), c(), r(), o(), d = `codex-file-citation`, f = `codex-terminal-citation`, p = `task-stub`, m = `codex-image-citation`, h = () => e => {
        l(e, e => {
            if (!t(e)) return;
            let r = e.data ??= {};
            switch (e.name) {
                case d: {
                    r.hName = d;
                    let t = parseInt(e.attributes?.line_range_start ?? `0`, 10),
                        n = parseInt(e.attributes?.line_range_end ?? e.attributes?.line_range_start ?? `0`, 10);
                    r.hProperties = {
                        path: e.attributes?.path,
                        lineRangeStart: t,
                        lineRangeEnd: n,
                        gitUrl: e.attributes?.git_url
                    };
                    break
                }
                case f: {
                    r.hName = f;
                    let t = parseInt(e.attributes?.line_range_start ?? `0`, 10),
                        n = parseInt(e.attributes?.line_range_end ?? e.attributes?.line_range_start ?? `0`, 10);
                    r.hProperties = {
                        chunkId: e.attributes?.terminal_chunk_id,
                        lineRangeStart: t,
                        lineRangeEnd: n
                    };
                    break
                }
                case p: {
                    let t;
                    try {
                        t = n().use(i).stringify({
                            type: `root`,
                            children: e.children
                        })
                    } catch {
                        t = s({
                            type: `root`,
                            children: e.children ?? []
                        })
                    }
                    r.hName = p, r.hProperties = {
                        title: e.attributes?.title,
                        prompt: t
                    };
                    break
                }
                case m:
                    r.hName = m, r.hProperties = {
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
//# sourceMappingURL=b4c3a217-e074mj4m7ph8o8rb.js.map