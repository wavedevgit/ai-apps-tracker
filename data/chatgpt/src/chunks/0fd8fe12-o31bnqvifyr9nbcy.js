import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Int as t,
    Pnt as n
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    BNn as r,
    CLn as i,
    HNn as a,
    SLn as o,
    TPn as s,
    VNn as c,
    WNn as l,
    XNn as u,
    cLn as d,
    lLn as f,
    wPn as p,
    xPn as m,
    zNn as h
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    lb as g,
    ob as _,
    rb as v,
    zb as y
} from "./8b34dbc2-m4883pai3e8fx8q6.js";

function b({
    analyticsSession: e,
    canTrackNativeComposerAttachment: t,
    canTrackMountedComposerAttachment: n,
    selectedFiles: r,
    selectedFolderIds: a,
    attachedFileIds: s,
    conversationId: c
}) {
    if (e == null) return w;
    let l = new Set(r.flatMap(e => {
        let r = i(e.id),
            a = r ? e.id : e.file_id;
        return s.has(a) || e.id.length === 0 || (r ? !n : t?.(e.id) !== !0) ? [] : [e.id]
    }));
    for (let e of a) o(e) && h(d(e)) != null && !s.has(e) && l.add(e);
    if (l.size === 0) return w;
    let u = new Map;
    for (let e of l) {
        let t = d(e),
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
        getCallbacks: e => f.get(d(e))?.getCallbacks(e),
        complete: () => {
            for (let e of f.values()) e.complete()
        }
    }
}

function x(e) {
    return r(e) == null ? w : S({
        analyticsSession: v(m.CHATGPT_FILE_LIBRARY_VARIANT_DEFAULT),
        libraryFileIds: [e],
        entrypoint: `at_mention`
    })
}

function S({
    analyticsSession: e,
    libraryFileIds: t,
    conversationId: r,
    entrypoint: i
}) {
    let a = new Set(t),
        o = Array.from(a),
        s = JSON.stringify({
            libraryFileIds: o
        }).length <= C ? o : void 0,
        d = c(o),
        f = {
            ...e,
            productExperience: p(),
            ...d == null ? {} : {
                provider: d
            },
            entrypoint: i,
            ...s == null ? {} : {
                libraryFileIds: s
            },
            ...r == null ? {} : {
                conversationId: r
            }
        },
        m = new Set,
        h = !1,
        g = !1,
        v = () => {
            h || (h = !0, n.logStructuredEvent(`ChatgptFileLibraryAttach`, {
                action: l.CHATGPT_FILE_LIBRARY_ATTACH_ACTION_CONFIRMED,
                ...f
            }))
        },
        y = e => {
            if (g) return;
            v(), g = !0;
            let t = _(e);
            n.logStructuredEvent(`ChatgptFileLibraryAttach`, {
                action: l.CHATGPT_FILE_LIBRARY_ATTACH_ACTION_FAILED,
                ...f,
                error: {
                    type: t?.type ?? u.CHATGPT_FILE_LIBRARY_ERROR_TYPE_INVALID_RESPONSE,
                    ...t?.code == null ? {} : {
                        code: t.code
                    }
                }
            })
        };
    return {
        getCallbacks: e => a.has(e) ? {
            onAttachmentSuccess: () => {
                m.add(e)
            },
            onAttachmentError: y
        } : void 0,
        complete: () => {
            g || m.size !== a.size || (v(), g = !0, n.logStructuredEvent(`ChatgptFileLibraryAttach`, {
                action: l.CHATGPT_FILE_LIBRARY_ATTACH_ACTION_ATTACHED,
                ...f
            }))
        }
    }
}
var C, w, T = e((() => {
    s(), a(), g(), f(), t(), y(), C = 2e3, w = {
        getCallbacks: () => void 0,
        complete: () => void 0
    }
}));
export {
    x as n, T as r, b as t
};
//# sourceMappingURL=0fd8fe12-o31bnqvifyr9nbcy.js.map