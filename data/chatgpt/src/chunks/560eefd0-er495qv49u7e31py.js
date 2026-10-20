import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Fat as t,
    bi as n,
    h8 as r,
    kat as i,
    x5 as a
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    QNt as o,
    XNt as s,
    YNt as c,
    j9t as l,
    qNt as u
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    n as d,
    t as f
} from "./3dcf3d3b-m9girfky08mett6w.js";

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
    queryClient: r
}) {
    n(), p(r, t), p(r, e), r.invalidateQueries({
        queryKey: [`artifact-preview`, `file-version-history`, t],
        refetchType: `all`
    }), r.cancelQueries({
        queryKey: [`library-patch-inline-editor`, t]
    }), r.invalidateQueries({
        queryKey: [`library-patch-inline-editor`, t],
        refetchType: `all`
    })
}

function h({
    error: e,
    fileId: t,
    libraryFileId: n,
    queryClient: r
}) {
    !(e instanceof i) || e.status !== 409 || m({
        fileId: t,
        libraryFileId: n,
        queryClient: r
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
    libraryFileId: n,
    livePatchResultKey: r,
    observationToken: i,
    resultKey: o,
    serverThreadId: c
}) {
    let l = u(),
        f = await s({
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
    l(), f(), r(), t(), o(), c()
}));
export {
    g as a, h as i, v as n, m as r, _ as t
};
//# sourceMappingURL=560eefd0-er495qv49u7e31py.js.map