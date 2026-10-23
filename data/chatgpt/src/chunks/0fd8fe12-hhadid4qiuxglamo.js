import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Knt as t,
    Wnt as n
} from "./4813494d-mdvd4786a87166cc.js";
import {
    $Ln as r,
    EPn as i,
    QLn as a,
    RLn as o,
    ZPn as s,
    _Pn as c,
    bPn as l,
    eFn as u,
    gPn as d,
    hPn as f,
    tFn as p,
    vPn as m,
    zLn as h
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Bb as g,
    ib as _,
    sb as v,
    ub as y
} from "./8b34dbc2-lmwubajnld74ksfm.js";

function b({
    analyticsSession: e,
    canTrackNativeComposerAttachment: t,
    canTrackMountedComposerAttachment: n,
    selectedFiles: i,
    selectedFolderIds: s,
    attachedFileIds: c,
    conversationId: l
}) {
    if (e == null) return w;
    let u = new Set(i.flatMap(e => {
        let i = r(e.id),
            a = i ? e.id : e.file_id;
        return c.has(a) || e.id.length === 0 || (i ? !n : t?.(e.id) !== !0) ? [] : [e.id]
    }));
    for (let e of s) a(e) && f(o(e)) != null && !c.has(e) && u.add(e);
    if (u.size === 0) return w;
    let d = new Map;
    for (let e of u) {
        let t = o(e),
            n = d.get(t) ?? [];
        n.push(e), d.set(t, n)
    }
    let p = new Map(Array.from(d, ([t, n]) => [t, S({
        analyticsSession: e,
        libraryFileIds: n,
        conversationId: l,
        entrypoint: `composer_library_picker`
    })]));
    return {
        getCallbacks: e => p.get(o(e))?.getCallbacks(e),
        complete: () => {
            for (let e of p.values()) e.complete()
        }
    }
}

function x(e) {
    return d(e) == null ? w : S({
        analyticsSession: _(s.CHATGPT_FILE_LIBRARY_VARIANT_DEFAULT),
        libraryFileIds: [e],
        entrypoint: `at_mention`
    })
}

function S({
    analyticsSession: e,
    libraryFileIds: t,
    conversationId: r,
    entrypoint: a
}) {
    let o = new Set(t),
        s = Array.from(o),
        d = JSON.stringify({
            libraryFileIds: s
        }).length <= C ? s : void 0,
        f = c(s),
        p = {
            ...e,
            productExperience: u(),
            ...f == null ? {} : {
                provider: f
            },
            entrypoint: a,
            ...d == null ? {} : {
                libraryFileIds: d
            },
            ...r == null ? {} : {
                conversationId: r
            }
        },
        m = new Set,
        h = !1,
        g = !1,
        _ = () => {
            h || (h = !0, n.logStructuredEvent(`ChatgptFileLibraryAttach`, {
                action: l.CHATGPT_FILE_LIBRARY_ATTACH_ACTION_CONFIRMED,
                ...p
            }))
        },
        y = e => {
            if (g) return;
            _(), g = !0;
            let t = v(e);
            n.logStructuredEvent(`ChatgptFileLibraryAttach`, {
                action: l.CHATGPT_FILE_LIBRARY_ATTACH_ACTION_FAILED,
                ...p,
                error: {
                    type: t?.type ?? i.CHATGPT_FILE_LIBRARY_ERROR_TYPE_INVALID_RESPONSE,
                    ...t?.code == null ? {} : {
                        code: t.code
                    }
                }
            })
        };
    return {
        getCallbacks: e => o.has(e) ? {
            onAttachmentSuccess: () => {
                m.add(e)
            },
            onAttachmentError: y
        } : void 0,
        complete: () => {
            g || m.size !== o.size || (_(), g = !0, n.logStructuredEvent(`ChatgptFileLibraryAttach`, {
                action: l.CHATGPT_FILE_LIBRARY_ATTACH_ACTION_ATTACHED,
                ...p
            }))
        }
    }
}
var C, w, T = e((() => {
    p(), m(), y(), h(), t(), g(), C = 2e3, w = {
        getCallbacks: () => void 0,
        complete: () => void 0
    }
}));
export {
    x as n, T as r, b as t
};
//# sourceMappingURL=0fd8fe12-hhadid4qiuxglamo.js.map