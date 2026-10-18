import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B6 as t,
    K8 as n,
    Qit as r,
    bi as i,
    iat as a
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    GNt as o,
    HNt as s,
    WNt as c,
    qNt as l,
    v9t as u
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    n as d,
    t as f
} from "./3dcf3d3b-g5o24tflpbs5pxfo.js";

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
    libraryFileId: r,
    livePatchResultKey: i,
    observationToken: a,
    resultKey: c,
    serverThreadId: l
}) {
    let u = s(),
        f = await o({
            abortSignal: e,
            fileId: t,
            serverThreadId: l
        });
    return n(() => d(r)) ? `skipped_multiplayer` : u.applyAuthoritativeExternalCommit({
        content: f,
        fileId: t,
        libraryFileId: r,
        livePatchResultKey: i,
        observationToken: a,
        resultKey: c
    })
}
var v = e((() => {
    u(), f(), t(), a(), l(), c()
}));
export {
    g as a, h as i, v as n, m as r, _ as t
};
//# sourceMappingURL=560eefd0-dsjkwwdx4281qp6m.js.map