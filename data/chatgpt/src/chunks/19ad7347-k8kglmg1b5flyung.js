import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    DV as t,
    Hst as n,
    J7 as r,
    Oat as i,
    Q7 as a,
    Qat as o,
    SJ as s,
    bV as c,
    n9 as l,
    prt as u,
    qat as d,
    urt as f,
    vct as p,
    wJ as m,
    wat as h
} from "./4813494d-t80q9ew944ej0mgk.js";

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
async function _(e, t, i, a, o = {}) {
    let c = {
            ...y(o),
            ...a ? void 0 : s({
                conversationId: t,
                projectId: o.projectId
            }),
            ...o.requestSource ? {
                "x-chatgpt-sandbox-download-source": o.requestSource
            } : {}
        },
        l = a ? await r.safeGet(`/share/{shared_conversation_id}/file_from_message/{message_id}`, {
            parameters: {
                path: {
                    shared_conversation_id: t,
                    message_id: e
                },
                query: {
                    file_path: i
                }
            },
            authOption: h.SendIfAvailable,
            signal: o.signal
        }) : await r.safeGet(`/conversation/{conversation_id}/interpreter/download`, {
            parameters: {
                path: {
                    conversation_id: t
                },
                query: {
                    message_id: e,
                    sandbox_path: i,
                    ...o.downloadIntent === void 0 ? {} : {
                        download_intent: o.downloadIntent
                    }
                }
            },
            ...c ? {
                additionalHeaders: c
            } : {},
            signal: o.signal
        });
    if (l.status === n.Success) {
        let e = a ? void 0 : g(l.metadata),
            t = l.metadata?.file_id;
        return {
            status: n.Success,
            download_url: l.download_url,
            ...e ? {
                libraryFileReference: e
            } : {},
            ...typeof t == `string` ? {
                file_id: t
            } : {}
        }
    }
    if (l.status === n.Retry) return {
        status: n.Retry
    };
    throw new d(`Could not download file from advanced data analysis`, `error_code` in l ? l.error_code : `unknown_error`)
}
async function v(e, t, r, i, a = {}) {
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
        let u = await _(e, t, r, i, a),
            d = a.waitForLibraryFileReference === !0 && u.status === n.Success && u.libraryFileReference == null;
        if (u.status !== n.Retry && !d || l >= o.maxAttempts) return u;
        let f = o.maxRetryDurationMs - (performance.now() - s);
        if (f <= 0) return u;
        await S(Math.min(c, f), a.signal), c = Math.min(Math.ceil(c * o.backoffMultiplier), o.maxDelayMs)
    }
}

function y({
    projectId: e,
    ownerUserId: n
}) {
    if (!(!e || !t(e))) return {
        "chatgpt-project-id": e,
        ...n ? {
            "chatgpt-conv-owner-id": n
        } : {}
    }
}

function b(e = {}) {
    let t = f(C),
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
    p(), m(), c(), i(), o(), a(), u(), l(), C = `777542316`, w = 4e3, T = 15e3, E = 1.6, D = 6e4
}));
export {
    O as n, v as t
};
//# sourceMappingURL=19ad7347-k8kglmg1b5flyung.js.map