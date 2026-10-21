import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $ht as t,
    CWn as n,
    IWn as r,
    PWn as i,
    dWn as a,
    mWn as o,
    rCt as s,
    tCt as c,
    tgt as l,
    xWn as u
} from "./conversation-small-kzsalymynzuddxee.js";
var d, f, p, m, h, g = e((() => {
    c(), i(), t(), a(), u(), d = `codex-file-citation`, f = `codex-terminal-citation`, p = `task-stub`, m = `codex-image-citation`, h = () => e => {
        n(e, e => {
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
                    let n;
                    try {
                        n = o().use(l).stringify({
                            type: `root`,
                            children: e.children
                        })
                    } catch {
                        n = r({
                            type: `root`,
                            children: e.children ?? []
                        })
                    }
                    t.hName = p, t.hProperties = {
                        title: e.attributes?.title,
                        prompt: n
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
//# sourceMappingURL=b4c3a217-ncsgy12sxeh90ztz.js.map