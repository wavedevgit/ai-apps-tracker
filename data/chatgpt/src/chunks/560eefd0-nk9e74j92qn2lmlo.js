import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bat as t,
    Pat as n,
    S5 as r,
    bi as i,
    g8 as a
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    $Nt as o,
    P9t as s,
    QNt as c,
    XNt as l,
    tPt as u
} from "./conversation-small-nmt18uiom3b14vca.js";
import {
    n as d,
    t as f
} from "./3dcf3d3b-bzdv0f4ewdfgyjfo.js";

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
    libraryFileId: r,
    queryClient: i
}) {
    !(e instanceof n) || e.status !== 409 || m({
        fileId: t,
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
    s(), f(), a(), t(), u(), c()
}));
export {
    g as a, h as i, v as n, m as r, _ as t
};
//# sourceMappingURL=560eefd0-nk9e74j92qn2lmlo.js.map