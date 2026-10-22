import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    I5 as n,
    Yat as r,
    tot as i,
    xi as a
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    B9t as o,
    JNt as s,
    KNt as c,
    YNt as l,
    ZNt as u
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    n as d,
    t as f
} from "./3dcf3d3b-c0me3fmwuk25ykf6.js";

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
    let r = c(),
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
    let u = c(),
        f = await l({
            abortSignal: e,
            fileId: t,
            serverThreadId: s
        });
    return n(() => d(r)) ? `skipped_multiplayer` : u.applyAuthoritativeExternalCommit({
        content: f,
        fileId: t,
        libraryFileId: r,
        livePatchResultKey: i,
        observationToken: a,
        resultKey: o
    })
}
var v = e((() => {
    o(), f(), t(), i(), u(), s()
}));
export {
    g as a, h as i, v as n, m as r, _ as t
};
//# sourceMappingURL=560eefd0-jrwqv6pwvs7ae68e.js.map