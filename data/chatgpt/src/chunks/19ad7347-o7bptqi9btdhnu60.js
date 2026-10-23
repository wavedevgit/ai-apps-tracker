import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B7 as t,
    Crt as n,
    DV as r,
    I7 as i,
    M7 as a,
    Oct as o,
    Pat as s,
    Qst as c,
    Rat as l,
    SJ as u,
    bV as d,
    brt as f,
    cot as p,
    rot as m,
    wJ as h
} from "./4813494d-mdvd4786a87166cc.js";

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
async function _(e, t, n, r, i = {}) {
    let o = {
            ...y(i),
            ...r ? void 0 : u({
                conversationId: t,
                projectId: i.projectId
            }),
            ...i.requestSource ? {
                "x-chatgpt-sandbox-download-source": i.requestSource
            } : {}
        },
        l = r ? await a.safeGet(`/share/{shared_conversation_id}/file_from_message/{message_id}`, {
            parameters: {
                path: {
                    shared_conversation_id: t,
                    message_id: e
                },
                query: {
                    file_path: n
                }
            },
            authOption: s.SendIfAvailable,
            signal: i.signal
        }) : await a.safeGet(`/conversation/{conversation_id}/interpreter/download`, {
            parameters: {
                path: {
                    conversation_id: t
                },
                query: {
                    message_id: e,
                    sandbox_path: n,
                    ...i.downloadIntent === void 0 ? {} : {
                        download_intent: i.downloadIntent
                    }
                }
            },
            ...o ? {
                additionalHeaders: o
            } : {},
            signal: i.signal
        });
    if (l.status === c.Success) {
        let e = r ? void 0 : g(l.metadata),
            t = l.metadata?.file_id;
        return {
            status: c.Success,
            download_url: l.download_url,
            ...e ? {
                libraryFileReference: e
            } : {},
            ...typeof t == `string` ? {
                file_id: t
            } : {}
        }
    }
    if (l.status === c.Retry) return {
        status: c.Retry
    };
    throw new m(`Could not download file from advanced data analysis`, `error_code` in l ? l.error_code : `unknown_error`)
}
async function v(e, t, n, r, i = {}) {
    let a = b(i.waitForLibraryFileReference ? {
            ...i,
            maxAttempts: i.maxAttempts ?? 20,
            maxRetryDurationMs: i.maxRetryDurationMs ?? 6e4
        } : i),
        o = performance.now(),
        s = a.initialDelayMs,
        l = 0;
    for (;;) {
        i.signal?.throwIfAborted(), l += 1;
        let u = await _(e, t, n, r, i),
            d = i.waitForLibraryFileReference === !0 && u.status === c.Success && u.libraryFileReference == null;
        if (u.status !== c.Retry && !d || l >= a.maxAttempts) return u;
        let f = a.maxRetryDurationMs - (performance.now() - o);
        if (f <= 0) return u;
        await S(Math.min(s, f), i.signal), s = Math.min(Math.ceil(s * a.backoffMultiplier), a.maxDelayMs)
    }
}

function y({
    projectId: e,
    ownerUserId: t
}) {
    if (!(!e || !r(e))) return {
        "chatgpt-project-id": e,
        ...t ? {
            "chatgpt-conv-owner-id": t
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
    o(), h(), d(), l(), p(), i(), n(), t(), C = `777542316`, w = 4e3, T = 15e3, E = 1.6, D = 6e4
}));
export {
    O as n, v as t
};
//# sourceMappingURL=19ad7347-o7bptqi9btdhnu60.js.map