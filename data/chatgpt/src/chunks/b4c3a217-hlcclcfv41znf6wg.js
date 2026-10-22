import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $St as t,
    KWn as n,
    YWn as r,
    Yht as i,
    ZSt as a,
    _Gn as o,
    hGn as s,
    iGn as c,
    nGn as l,
    qht as u
} from "./conversation-small-m08q51xmfe7gjq3d.js";
var d, f, p, m, h, g = e((() => {
    a(), s(), u(), n(), l(), d = `codex-file-citation`, f = `codex-terminal-citation`, p = `task-stub`, m = `codex-image-citation`, h = () => e => {
        c(e, e => {
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
                        t = r().use(i).stringify({
                            type: `root`,
                            children: e.children
                        })
                    } catch {
                        t = o({
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
//# sourceMappingURL=b4c3a217-hlcclcfv41znf6wg.js.map