import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Lnt as t,
    znt as n
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    GPn as r,
    HLn as i,
    OLn as a,
    ULn as o,
    VPn as s,
    WPn as c,
    aPn as l,
    cPn as u,
    gPn as d,
    kLn as f,
    oPn as p,
    sPn as m,
    uPn as h
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    Bb as g,
    ib as _,
    sb as v,
    ub as y
} from "./8b34dbc2-ik628tlti8ozm9vq.js";

function b({
    analyticsSession: e,
    canTrackNativeComposerAttachment: t,
    canTrackMountedComposerAttachment: n,
    selectedFiles: r,
    selectedFolderIds: s,
    attachedFileIds: c,
    conversationId: u
}) {
    if (e == null) return w;
    let d = new Set(r.flatMap(e => {
        let r = o(e.id),
            i = r ? e.id : e.file_id;
        return c.has(i) || e.id.length === 0 || (r ? !n : t?.(e.id) !== !0) ? [] : [e.id]
    }));
    for (let e of s) i(e) && l(a(e)) != null && !c.has(e) && d.add(e);
    if (d.size === 0) return w;
    let f = new Map;
    for (let e of d) {
        let t = a(e),
            n = f.get(t) ?? [];
        n.push(e), f.set(t, n)
    }
    let p = new Map(Array.from(f, ([t, n]) => [t, S({
        analyticsSession: e,
        libraryFileIds: n,
        conversationId: u,
        entrypoint: `composer_library_picker`
    })]));
    return {
        getCallbacks: e => p.get(a(e))?.getCallbacks(e),
        complete: () => {
            for (let e of p.values()) e.complete()
        }
    }
}

function x(e) {
    return p(e) == null ? w : S({
        analyticsSession: _(s.CHATGPT_FILE_LIBRARY_VARIANT_DEFAULT),
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
        l = m(o),
        u = {
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
        f = new Set,
        p = !1,
        g = !1,
        _ = () => {
            p || (p = !0, t.logStructuredEvent(`ChatgptFileLibraryAttach`, {
                action: h.CHATGPT_FILE_LIBRARY_ATTACH_ACTION_CONFIRMED,
                ...u
            }))
        },
        y = e => {
            if (g) return;
            _(), g = !0;
            let n = v(e);
            t.logStructuredEvent(`ChatgptFileLibraryAttach`, {
                action: h.CHATGPT_FILE_LIBRARY_ATTACH_ACTION_FAILED,
                ...u,
                error: {
                    type: n?.type ?? d.CHATGPT_FILE_LIBRARY_ERROR_TYPE_INVALID_RESPONSE,
                    ...n?.code == null ? {} : {
                        code: n.code
                    }
                }
            })
        };
    return {
        getCallbacks: e => a.has(e) ? {
            onAttachmentSuccess: () => {
                f.add(e)
            },
            onAttachmentError: y
        } : void 0,
        complete: () => {
            g || f.size !== a.size || (_(), g = !0, t.logStructuredEvent(`ChatgptFileLibraryAttach`, {
                action: h.CHATGPT_FILE_LIBRARY_ATTACH_ACTION_ATTACHED,
                ...u
            }))
        }
    }
}
var C, w, T = e((() => {
    r(), u(), y(), f(), n(), g(), C = 2e3, w = {
        getCallbacks: () => void 0,
        complete: () => void 0
    }
}));
export {
    x as n, T as r, b as t
};
//# sourceMappingURL=0fd8fe12-eeopn3v6r1h6iyf2.js.map