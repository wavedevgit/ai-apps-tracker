import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Aat as t,
    Iat as n,
    S5 as r,
    bi as i,
    g8 as a
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    $Nt as o,
    P9t as s,
    QNt as c,
    XNt as l,
    tPt as u
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    n as d,
    t as f
} from "./3dcf3d3b-g4ex3dfhfia1hxwe.js";

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
    fileId: n,
    libraryFileId: r,
    queryClient: i
}) {
    !(e instanceof t) || e.status !== 409 || m({
        fileId: n,
        libraryFileId: r,
        queryClient: i
    })
}

function g({
    libraryFileId: e,
    queryClient: t,
    savedContent: n
}) {
    let r = l(),
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
    livePatchResultKey: i,
    observationToken: a,
    resultKey: s,
    serverThreadId: c
}) {
    let u = l(),
        f = await o({
            abortSignal: e,
            fileId: t,
            serverThreadId: c
        });
    return r(() => d(n)) ? `skipped_multiplayer` : u.applyAuthoritativeExternalCommit({
        content: f,
        fileId: t,
        libraryFileId: n,
        livePatchResultKey: i,
        observationToken: a,
        resultKey: s
    })
}
var v = e((() => {
    s(), f(), a(), n(), u(), c()
}));
export {
    g as a, h as i, v as n, m as r, _ as t
};
//# sourceMappingURL=560eefd0-ohfhqgei7qobfd0w.js.map