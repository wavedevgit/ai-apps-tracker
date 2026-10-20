import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AWn as t,
    MWn as n,
    QSt as r,
    Qht as i,
    Xht as a,
    _Wn as o,
    eCt as s,
    sWn as c,
    uWn as l,
    yWn as u
} from "./conversation-small-cy5f8pl0g26s86so.js";
var d, f, p, m, h, g = e((() => {
    r(), t(), a(), c(), o(), d = `codex-file-citation`, f = `codex-terminal-citation`, p = `task-stub`, m = `codex-image-citation`, h = () => e => {
        u(e, e => {
            if (!s(e)) return;
            let t = e.data ??= {};
            switch (e.name) {
                case d: {
                    t.hName = d;
                    let n = parseInt(e.attributes?.line_range_start ?? `0`, 10),
                        r = parseInt(e.attributes?.line_range_end ?? e.attributes?.line_range_start ?? `0`, 10);
                    t.hProperties = {
                        path: e.attributes?.path,
                        lineRangeStart: n,
                        lineRangeEnd: r,
                        gitUrl: e.attributes?.git_url
                    };
                    break
                }
                case f: {
                    t.hName = f;
                    let n = parseInt(e.attributes?.line_range_start ?? `0`, 10),
                        r = parseInt(e.attributes?.line_range_end ?? e.attributes?.line_range_start ?? `0`, 10);
                    t.hProperties = {
                        chunkId: e.attributes?.terminal_chunk_id,
                        lineRangeStart: n,
                        lineRangeEnd: r
                    };
                    break
                }
                case p: {
                    let r;
                    try {
                        r = l().use(i).stringify({
                            type: `root`,
                            children: e.children
                        })
                    } catch {
                        r = n({
                            type: `root`,
                            children: e.children ?? []
                        })
                    }
                    t.hName = p, t.hProperties = {
                        title: e.attributes?.title,
                        prompt: r
                    };
                    break
                }
                case m:
                    t.hName = m, t.hProperties = {
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
//# sourceMappingURL=b4c3a217-h917gn8jglxmajtg.js.map