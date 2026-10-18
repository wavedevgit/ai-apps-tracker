import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Btt as t,
    Htt as n
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    BNn as r,
    HIn as i,
    OIn as a,
    UIn as o,
    UNn as s,
    WNn as c,
    aNn as l,
    hNn as u,
    iNn as d,
    kIn as f,
    lNn as p,
    oNn as m,
    sNn as h
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Lb as g,
    ib as _,
    sb as v,
    tb as y
} from "./8b34dbc2-gf9wnwcahty27ylx.js";

function b({
    analyticsSession: e,
    canTrackNativeComposerAttachment: t,
    canTrackMountedComposerAttachment: n,
    selectedFiles: r,
    selectedFolderIds: s,
    attachedFileIds: c,
    conversationId: l
}) {
    if (e == null) return w;
    let u = new Set(r.flatMap(e => {
        let r = o(e.id),
            i = r ? e.id : e.file_id;
        return c.has(i) || e.id.length === 0 || (r ? !n : t?.(e.id) !== !0) ? [] : [e.id]
    }));
    for (let e of s) i(e) && d(a(e)) != null && !c.has(e) && u.add(e);
    if (u.size === 0) return w;
    let f = new Map;
    for (let e of u) {
        let t = a(e),
            n = f.get(t) ?? [];
        n.push(e), f.set(t, n)
    }
    let p = new Map(Array.from(f, ([t, n]) => [t, S({
        analyticsSession: e,
        libraryFileIds: n,
        conversationId: l,
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
    return l(e) == null ? w : S({
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
    let a = new Set(n),
        o = Array.from(a),
        c = JSON.stringify({
            libraryFileIds: o
        }).length <= C ? o : void 0,
        l = m(o),
        d = {
            ...e,
            productExperience: s(),
            ...l == null ? {} : {
                provider: l
            },
            entrypoint: i,
            ...c == null ? {} : {
                libraryFileIds: c
            },
            ...r == null ? {} : {
                conversationId: r
            }
        },
        f = new Set,
        h = !1,
        g = !1,
        v = () => {
            h || (h = !0, t.logStructuredEvent(`ChatgptFileLibraryAttach`, {
                action: p.CHATGPT_FILE_LIBRARY_ATTACH_ACTION_CONFIRMED,
                ...d
            }))
        },
        y = e => {
            if (g) return;
            v(), g = !0;
            let n = _(e);
            t.logStructuredEvent(`ChatgptFileLibraryAttach`, {
                action: p.CHATGPT_FILE_LIBRARY_ATTACH_ACTION_FAILED,
                ...d,
                error: {
                    type: n?.type ?? u.CHATGPT_FILE_LIBRARY_ERROR_TYPE_INVALID_RESPONSE,
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
            g || f.size !== a.size || (v(), g = !0, t.logStructuredEvent(`ChatgptFileLibraryAttach`, {
                action: p.CHATGPT_FILE_LIBRARY_ATTACH_ACTION_ATTACHED,
                ...d
            }))
        }
    }
}
var C, w, T = e((() => {
    c(), h(), v(), f(), n(), g(), C = 2e3, w = {
        getCallbacks: () => void 0,
        complete: () => void 0
    }
}));
export {
    x as n, T as r, b as t
};
//# sourceMappingURL=0fd8fe12-db3m8fmys8m4ajiq.js.map