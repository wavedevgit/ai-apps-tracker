import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AWn as t,
    DWn as n,
    JSt as r,
    Jht as i,
    Kht as a,
    LWn as o,
    QWn as s,
    XSt as c,
    XWn as l,
    zWn as u
} from "./conversation-small-ocicxxw6jegn4vux.js";
var d, f, p, m, h, g = e((() => {
    r(), l(), a(), n(), o(), d = `codex-file-citation`, f = `codex-terminal-citation`, p = `task-stub`, m = `codex-image-citation`, h = () => e => {
        u(e, e => {
            if (!c(e)) return;
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
                        r = t().use(i).stringify({
                            type: `root`,
                            children: e.children
                        })
                    } catch {
                        r = s({
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
//# sourceMappingURL=b4c3a217-lmmruoma98w95sm2.js.map