import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    DJ as t,
    Est as n,
    F7 as r,
    Iat as i,
    Jnt as a,
    TJ as o,
    U7 as s,
    Znt as c,
    bV as l,
    cat as u,
    fat as d,
    jat as f,
    nct as p,
    pV as m,
    z7 as h
} from "./4813494d-bo7e0c29ngt4zgx0.js";

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
async function _(e, t, i, a, s = {}) {
    let c = {
            ...y(s),
            ...a ? void 0 : o({
                conversationId: t,
                projectId: s.projectId
            }),
            ...s.requestSource ? {
                "x-chatgpt-sandbox-download-source": s.requestSource
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
            authOption: u.SendIfAvailable,
            signal: s.signal
        }) : await r.safeGet(`/conversation/{conversation_id}/interpreter/download`, {
            parameters: {
                path: {
                    conversation_id: t
                },
                query: {
                    message_id: e,
                    sandbox_path: i,
                    ...s.downloadIntent === void 0 ? {} : {
                        download_intent: s.downloadIntent
                    }
                }
            },
            ...c ? {
                additionalHeaders: c
            } : {},
            signal: s.signal
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
    throw new f(`Could not download file from advanced data analysis`, `error_code` in l ? l.error_code : `unknown_error`)
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
    ownerUserId: t
}) {
    if (!(!e || !l(e))) return {
        "chatgpt-project-id": e,
        ...t ? {
            "chatgpt-conv-owner-id": t
        } : {}
    }
}

function b(e = {}) {
    let t = a(C),
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
    p(), t(), m(), d(), i(), h(), c(), s(), C = `777542316`, w = 4e3, T = 15e3, E = 1.6, D = 6e4
}));
export {
    O as n, v as t
};
//# sourceMappingURL=19ad7347-b7ynbiv92wkds0ei.js.map