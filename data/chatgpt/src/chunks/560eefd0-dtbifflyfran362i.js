import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    cot as n,
    not as r,
    xi as i,
    y5 as a
} from "./4813494d-mdvd4786a87166cc.js";
import {
    B9t as o,
    BNt as s,
    GNt as c,
    HNt as l,
    UNt as u
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    n as d,
    t as f
} from "./3dcf3d3b-fh6pwdwtoafskdvs.js";

function p(e, t) {
    let n = e.getQueryCache().findAll({
        queryKey: [`file-preview`, t]
    });
    for (let t of n) {
        let n = t.state.data;
        typeof n == `string` && e.invalidateQueries({
            queryKey: [`file-preview-contents`, n],
            refetchType: `all`
        })
    }
    e.invalidateQueries({
        queryKey: [`file-preview`, t],
        refetchType: `all`
    })
}

function m({
    fileId: e,
    libraryFileId: t,
    queryClient: n
}) {
    i(), p(n, t), p(n, e), n.invalidateQueries({
        queryKey: [`artifact-preview`, `file-version-history`, t],
        refetchType: `all`
    }), n.cancelQueries({
        queryKey: [`library-patch-inline-editor`, t]
    }), n.invalidateQueries({
        queryKey: [`library-patch-inline-editor`, t],
        refetchType: `all`
    })
}

function h({
    error: e,
    fileId: t,
    libraryFileId: n,
    queryClient: i
}) {
    !(e instanceof r) || e.status !== 409 || m({
        fileId: t,
        libraryFileId: n,
        queryClient: i
    })
}

function g({
    libraryFileId: e,
    queryClient: t,
    savedContent: n
}) {
    let r = s(),
        i = r.getSessionSnapshot(e)?.fileId,
        a = new Set([e]);
    i != null && a.add(i), r.acknowledgeLocalSave({
        libraryFileId: e,
        content: n,
        fileId: i
    });
    for (let e of a) p(t, e)
}
async function _({
    abortSignal: e,
    fileId: t,
    libraryFileId: n,
    livePatchResultKey: r,
    observationToken: i,
    resultKey: o,
    serverThreadId: c
}) {
    let l = s(),
        f = await u({
            abortSignal: e,
            fileId: t,
            serverThreadId: c
        });
    return a(() => d(n)) ? `skipped_multiplayer` : l.applyAuthoritativeExternalCommit({
        content: f,
        fileId: t,
        libraryFileId: n,
        livePatchResultKey: r,
        observationToken: i,
        resultKey: o
    })
}
var v = e((() => {
    o(), f(), t(), n(), c(), l()
}));
export {
    g as a, h as i, v as n, m as r, _ as t
};
//# sourceMappingURL=560eefd0-dtbifflyfran362i.js.map