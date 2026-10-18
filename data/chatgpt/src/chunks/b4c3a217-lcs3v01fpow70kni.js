import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CWn as t,
    Ght as n,
    QUn as r,
    YSt as i,
    cWn as a,
    qSt as o,
    qht as s,
    tWn as c,
    uWn as l,
    xWn as u
} from "./conversation-small-fym1zmu9zimymmm1.js";
var d, f, p, m, h, g = e((() => {
    o(), u(), n(), r(), a(), d = `codex-file-citation`, f = `codex-terminal-citation`, p = `task-stub`, m = `codex-image-citation`, h = () => e => {
        l(e, e => {
            if (!i(e)) return;
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
                    let r;
                    try {
                        r = c().use(s).stringify({
                            type: `root`,
                            children: e.children
                        })
                    } catch {
                        r = t({
                            type: `root`,
                            children: e.children ?? []
                        })
                    }
                    n.hName = p, n.hProperties = {
                        title: e.attributes?.title,
                        prompt: r
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
//# sourceMappingURL=b4c3a217-lcs3v01fpow70kni.js.map