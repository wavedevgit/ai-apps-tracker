import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    I5 as n,
    Yat as r,
    tot as i,
    xi as a
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    GNt as o,
    JNt as s,
    KNt as c,
    L9t as l,
    UNt as u
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    n as d,
    t as f
} from "./3dcf3d3b-ok44haa58cfmzq1p.js";

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
    a(), p(n, t), p(n, e), n.invalidateQueries({
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
    let r = u(),
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
    libraryFileId: r,
    livePatchResultKey: i,
    observationToken: a,
    resultKey: o,
    serverThreadId: s
}) {
    let l = u(),
        f = await c({
            abortSignal: e,
            fileId: t,
            serverThreadId: s
        });
    return n(() => d(r)) ? `skipped_multiplayer` : l.applyAuthoritativeExternalCommit({
        content: f,
        fileId: t,
        libraryFileId: r,
        livePatchResultKey: i,
        observationToken: a,
        resultKey: o
    })
}
var v = e((() => {
    l(), f(), t(), i(), s(), o()
}));
export {
    g as a, h as i, v as n, m as r, _ as t
};
//# sourceMappingURL=560eefd0-ha8e59282cv0m22n.js.map