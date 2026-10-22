import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    F5 as t,
    Jat as n,
    eot as r,
    k8 as i,
    xi as a
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    JNt as o,
    KNt as s,
    R9t as c,
    YNt as l,
    ZNt as u
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    n as d,
    t as f
} from "./3dcf3d3b-mq2rvs3t8ezkuzbr.js";

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
    fileId: n,
    libraryFileId: r,
    livePatchResultKey: i,
    observationToken: a,
    resultKey: o,
    serverThreadId: c
}) {
    let u = s(),
        f = await l({
            abortSignal: e,
            fileId: n,
            serverThreadId: c
        });
    return t(() => d(r)) ? `skipped_multiplayer` : u.applyAuthoritativeExternalCommit({
        content: f,
        fileId: n,
        libraryFileId: r,
        livePatchResultKey: i,
        observationToken: a,
        resultKey: o
    })
}
var v = e((() => {
    c(), f(), i(), r(), u(), o()
}));
export {
    g as a, h as i, v as n, m as r, _ as t
};
//# sourceMappingURL=560eefd0-g23sund9xmav1wm7.js.map