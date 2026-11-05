import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as t,
    DV as n,
    Dat as r,
    Gst as i,
    SJ as a,
    Xat as o,
    Y7 as s,
    bV as c,
    grt as l,
    jat as u,
    prt as d,
    r9 as f,
    tot as p,
    wJ as m,
    xct as h
} from "./4813494d-r54yv6lv29x4ew99.js";

function g(e) {
    if (typeof e != `object` || !e) return;
    let t = Reflect.get(e, `library_file_reference`);
    if (typeof t != `object` || !t) return;
    let n = Reflect.get(t, `file_id`),
        r = Reflect.get(t, `library_file_id`),
        i = Reflect.get(t, `file_name`),
        a = Reflect.get(t, `directory_id`);
    if (!(typeof n != `string` || typeof r != `string` || typeof i != `string` || a != null && typeof a != `string`)) return {
        fileId: n,
        libraryFileId: r,
        fileName: i,
        directoryId: a ?? null
    }
}
async function _(e, t, n, c, l = {}) {
    let u = {
            ...y(l),
            ...c ? void 0 : a({
                conversationId: t,
                projectId: l.projectId
            }),
            ...l.requestSource ? {
                "x-chatgpt-sandbox-download-source": l.requestSource
            } : {}
        },
        d = c ? await s.safeGet(`/share/{shared_conversation_id}/file_from_message/{message_id}`, {
            parameters: {
                path: {
                    shared_conversation_id: t,
                    message_id: e
                },
                query: {
                    file_path: n
                }
            },
            authOption: r.SendIfAvailable,
            signal: l.signal
        }) : await s.safeGet(`/conversation/{conversation_id}/interpreter/download`, {
            parameters: {
                path: {
                    conversation_id: t
                },
                query: {
                    message_id: e,
                    sandbox_path: n,
                    ...l.downloadIntent === void 0 ? {} : {
                        download_intent: l.downloadIntent
                    }
                }
            },
            ...u ? {
                additionalHeaders: u
            } : {},
            signal: l.signal
        });
    if (d.status === i.Success) {
        let e = c ? void 0 : g(d.metadata),
            t = d.metadata?.file_id;
        return {
            status: i.Success,
            download_url: d.download_url,
            ...e ? {
                libraryFileReference: e
            } : {},
            ...typeof t == `string` ? {
                file_id: t
            } : {}
        }
    }
    if (d.status === i.Retry) return {
        status: i.Retry
    };
    throw new o(`Could not download file from advanced data analysis`, `error_code` in d ? d.error_code : `unknown_error`)
}
async function v(e, t, n, r, a = {}) {
    let o = b(a.waitForLibraryFileReference ? {
            ...a,
            maxAttempts: a.maxAttempts ?? 20,
            maxRetryDurationMs: a.maxRetryDurationMs ?? 6e4
        } : a),
        s = performance.now(),
        c = o.initialDelayMs,
        l = 0;
    for (;;) {
        a.signal?.throwIfAborted(), l += 1;
        let u = await _(e, t, n, r, a),
            d = a.waitForLibraryFileReference === !0 && u.status === i.Success && u.libraryFileReference == null;
        if (u.status !== i.Retry && !d || l >= o.maxAttempts) return u;
        let f = o.maxRetryDurationMs - (performance.now() - s);
        if (f <= 0) return u;
        await S(Math.min(c, f), a.signal), c = Math.min(Math.ceil(c * o.backoffMultiplier), o.maxDelayMs)
    }
}

function y({
    projectId: e,
    ownerUserId: t
}) {
    if (!(!e || !n(e))) return {
        "chatgpt-project-id": e,
        ...t ? {
            "chatgpt-conv-owner-id": t
        } : {}
    }
}

function b(e = {}) {
    let t = d(C),
        n = x(e.initialRetryDelayMs ?? e.retryIntervalMs ?? t.get(`initial_retry_delay_ms`, 500), 500, 250, w),
        r = x(e.maxAttempts ?? t.get(`max_attempts`, 10), 10, 1, 20);
    return {
        initialDelayMs: n,
        maxDelayMs: x(e.maxRetryDelayMs ?? t.get(`max_retry_delay_ms`, 4e3), w, n, D),
        maxRetryDurationMs: x(e.maxRetryDurationMs ?? t.get(`max_retry_duration_ms`, 15e3), T, 0, D),
        backoffMultiplier: x(e.retryBackoffMultiplier ?? t.get(`backoff_multiplier`, 1.6), E, 1, 10),
        maxAttempts: r
    }
}

function x(e, t, n, r) {
    let i = Number(e);
    return Number.isFinite(i) ? Math.min(Math.max(i, n), r) : t
}

function S(e, t) {
    return new Promise((n, r) => {
        if (t?.aborted) {
            r(Object.assign(Error(`Aborted`), {
                name: `AbortError`
            }));
            return
        }
        let i = setTimeout(() => {
                t?.removeEventListener(`abort`, a), n()
            }, e),
            a = () => {
                clearTimeout(i), r(Object.assign(Error(`Aborted`), {
                    name: `AbortError`
                }))
            };
        t?.addEventListener(`abort`, a, {
            once: !0
        })
    })
}
var C, w, T, E, D, O = e((() => {
    h(), m(), c(), u(), p(), t(), l(), f(), C = `777542316`, w = 4e3, T = 15e3, E = 1.6, D = 6e4
}));
export {
    O as n, v as t
};
//# sourceMappingURL=19ad7347-d40f0e1pcetdv00l.js.map