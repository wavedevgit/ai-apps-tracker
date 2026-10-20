import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    _nt as t,
    ynt as n
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    $Nn as r,
    BIn as i,
    ONn as a,
    SNn as o,
    VIn as s,
    _Nn as c,
    bNn as l,
    eLn as u,
    nPn as d,
    rPn as f,
    tLn as p,
    vNn as m,
    yNn as h
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Lb as g,
    ib as _,
    sb as v,
    tb as y
} from "./8b34dbc2-k1zgxrtsww83602u.js";

function b({
    analyticsSession: e,
    canTrackNativeComposerAttachment: t,
    canTrackMountedComposerAttachment: n,
    selectedFiles: r,
    selectedFolderIds: a,
    attachedFileIds: o,
    conversationId: s
}) {
    if (e == null) return w;
    let l = new Set(r.flatMap(e => {
        let r = p(e.id),
            i = r ? e.id : e.file_id;
        return o.has(i) || e.id.length === 0 || (r ? !n : t?.(e.id) !== !0) ? [] : [e.id]
    }));
    for (let e of a) u(e) && c(i(e)) != null && !o.has(e) && l.add(e);
    if (l.size === 0) return w;
    let d = new Map;
    for (let e of l) {
        let t = i(e),
            n = d.get(t) ?? [];
        n.push(e), d.set(t, n)
    }
    let f = new Map(Array.from(d, ([t, n]) => [t, S({
        analyticsSession: e,
        libraryFileIds: n,
        conversationId: s,
        entrypoint: `composer_library_picker`
    })]));
    return {
        getCallbacks: e => f.get(i(e))?.getCallbacks(e),
        complete: () => {
            for (let e of f.values()) e.complete()
        }
    }
}

function x(e) {
    return m(e) == null ? w : S({
        analyticsSession: y(r.CHATGPT_FILE_LIBRARY_VARIANT_DEFAULT),
        libraryFileIds: [e],
        entrypoint: `at_mention`
    })
}

function S({
    analyticsSession: e,
    libraryFileIds: n,
    conversationId: r,
    entrypoint: i
}) {
    let s = new Set(n),
        c = Array.from(s),
        l = JSON.stringify({
            libraryFileIds: c
        }).length <= C ? c : void 0,
        u = h(c),
        f = {
            ...e,
            productExperience: d(),
            ...u == null ? {} : {
                provider: u
            },
            entrypoint: i,
            ...l == null ? {} : {
                libraryFileIds: l
            },
            ...r == null ? {} : {
                conversationId: r
            }
        },
        p = new Set,
        m = !1,
        g = !1,
        v = () => {
            m || (m = !0, t.logStructuredEvent(`ChatgptFileLibraryAttach`, {
                action: o.CHATGPT_FILE_LIBRARY_ATTACH_ACTION_CONFIRMED,
                ...f
            }))
        },
        y = e => {
            if (g) return;
            v(), g = !0;
            let n = _(e);
            t.logStructuredEvent(`ChatgptFileLibraryAttach`, {
                action: o.CHATGPT_FILE_LIBRARY_ATTACH_ACTION_FAILED,
                ...f,
                error: {
                    type: n?.type ?? a.CHATGPT_FILE_LIBRARY_ERROR_TYPE_INVALID_RESPONSE,
                    ...n?.code == null ? {} : {
                        code: n.code
                    }
                }
            })
        };
    return {
        getCallbacks: e => s.has(e) ? {
            onAttachmentSuccess: () => {
                p.add(e)
            },
            onAttachmentError: y
        } : void 0,
        complete: () => {
            g || p.size !== s.size || (v(), g = !0, t.logStructuredEvent(`ChatgptFileLibraryAttach`, {
                action: o.CHATGPT_FILE_LIBRARY_ATTACH_ACTION_ATTACHED,
                ...f
            }))
        }
    }
}
var C, w, T = e((() => {
    f(), l(), v(), s(), n(), g(), C = 2e3, w = {
        getCallbacks: () => void 0,
        complete: () => void 0
    }
}));
export {
    x as n, T as r, b as t
};
//# sourceMappingURL=0fd8fe12-ro1elyk99bqoljv6.js.map