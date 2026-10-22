import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Lnt as t,
    znt as n
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    BLn as r,
    ELn as i,
    HPn as a,
    RPn as o,
    TLn as s,
    VPn as c,
    aPn as l,
    iPn as u,
    nPn as d,
    pPn as f,
    rPn as p,
    sPn as m,
    zLn as h
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    Bb as g,
    ib as _,
    sb as v,
    ub as y
} from "./8b34dbc2-bgocf3s6t6l67twq.js";

function b({
    analyticsSession: e,
    canTrackNativeComposerAttachment: t,
    canTrackMountedComposerAttachment: n,
    selectedFiles: i,
    selectedFolderIds: a,
    attachedFileIds: o,
    conversationId: c
}) {
    if (e == null) return w;
    let l = new Set(i.flatMap(e => {
        let i = r(e.id),
            a = i ? e.id : e.file_id;
        return o.has(a) || e.id.length === 0 || (i ? !n : t?.(e.id) !== !0) ? [] : [e.id]
    }));
    for (let e of a) h(e) && d(s(e)) != null && !o.has(e) && l.add(e);
    if (l.size === 0) return w;
    let u = new Map;
    for (let e of l) {
        let t = s(e),
            n = u.get(t) ?? [];
        n.push(e), u.set(t, n)
    }
    let f = new Map(Array.from(u, ([t, n]) => [t, S({
        analyticsSession: e,
        libraryFileIds: n,
        conversationId: c,
        entrypoint: `composer_library_picker`
    })]));
    return {
        getCallbacks: e => f.get(s(e))?.getCallbacks(e),
        complete: () => {
            for (let e of f.values()) e.complete()
        }
    }
}

function x(e) {
    return p(e) == null ? w : S({
        analyticsSession: _(o.CHATGPT_FILE_LIBRARY_VARIANT_DEFAULT),
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
    let a = new Set(n),
        o = Array.from(a),
        s = JSON.stringify({
            libraryFileIds: o
        }).length <= C ? o : void 0,
        l = u(o),
        d = {
            ...e,
            productExperience: c(),
            ...l == null ? {} : {
                provider: l
            },
            entrypoint: i,
            ...s == null ? {} : {
                libraryFileIds: s
            },
            ...r == null ? {} : {
                conversationId: r
            }
        },
        p = new Set,
        h = !1,
        g = !1,
        _ = () => {
            h || (h = !0, t.logStructuredEvent(`ChatgptFileLibraryAttach`, {
                action: m.CHATGPT_FILE_LIBRARY_ATTACH_ACTION_CONFIRMED,
                ...d
            }))
        },
        y = e => {
            if (g) return;
            _(), g = !0;
            let n = v(e);
            t.logStructuredEvent(`ChatgptFileLibraryAttach`, {
                action: m.CHATGPT_FILE_LIBRARY_ATTACH_ACTION_FAILED,
                ...d,
                error: {
                    type: n?.type ?? f.CHATGPT_FILE_LIBRARY_ERROR_TYPE_INVALID_RESPONSE,
                    ...n?.code == null ? {} : {
                        code: n.code
                    }
                }
            })
        };
    return {
        getCallbacks: e => a.has(e) ? {
            onAttachmentSuccess: () => {
                p.add(e)
            },
            onAttachmentError: y
        } : void 0,
        complete: () => {
            g || p.size !== a.size || (_(), g = !0, t.logStructuredEvent(`ChatgptFileLibraryAttach`, {
                action: m.CHATGPT_FILE_LIBRARY_ATTACH_ACTION_ATTACHED,
                ...d
            }))
        }
    }
}
var C, w, T = e((() => {
    a(), l(), y(), i(), n(), g(), C = 2e3, w = {
        getCallbacks: () => void 0,
        complete: () => void 0
    }
}));
export {
    x as n, T as r, b as t
};
//# sourceMappingURL=0fd8fe12-fkv3awzk8ott3dan.js.map