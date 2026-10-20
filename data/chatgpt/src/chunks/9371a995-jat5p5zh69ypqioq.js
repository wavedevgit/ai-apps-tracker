import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B4 as n,
    C_ as r,
    Nrt as i,
    S_ as a,
    V4 as o,
    crt as s,
    ist as c,
    rst as l,
    srt as u,
    z7 as d
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    N as f,
    Rn as p,
    Vn as m,
    s as h,
    zn as g
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Ctt as _,
    QZt as v,
    Qln as y,
    Stt as b,
    Yln as x,
    ZZt as S
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    n as C,
    t as w
} from "./b51f9083-ozn7kgz2eah12bl6.js";
import {
    d as T,
    o as E
} from "./cf64444f-khnaxgxsfoy2l12t.js";

function D(e, t, n) {
    "use no forget";
    let r = g(),
        [i, o] = (0, P.useState)(n ? r.formatMessage({
            id: `wham.useStreamTurn.preparingTask`,
            defaultMessage: `Working on your task`
        }) : ``),
        [s, c] = (0, P.useState)(i);
    (0, P.useEffect)(() => {
        let e = a(() => c(i), 200);
        return e(), e.cancel
    }, [i]);
    let l = (0, P.useMemo)(() => `last-event-${e}-${n??``}-${Math.random().toString(36).slice(2)}`, [e, n]);
    return O(e, n, [`task_turn_event`], {
        enabled: !!n && !T(t),
        subscriberId: l,
        onEvent: e => o(e.task_turn_event.text)
    }), s
}

function O(e, t, n, {
    enabled: r = !0,
    subscriberId: i,
    onEvent: a,
    onComplete: o
}) {
    "use no forget";
    let s = _(a),
        c = _(o),
        l = C(n),
        u = f(),
        d = (0, P.useCallback)(e => {
            s.current(e)
        }, [s]),
        p = (0, P.useCallback)(() => {
            c.current?.()
        }, [c]);
    (0, P.useEffect)(() => {
        if (!(!t || !r)) return B.retainTurnStream(u, e, t, i, l, d, p), () => {
            B.releaseTurnStream(e, t, i)
        }
    }, [e, t, i, l, r, u, d, p])
}
async function* k({
    taskId: e,
    turnId: t,
    abortSignal: n,
    types: r
}) {
    let a = `https://chatgpt.com/backend-api/wham/tasks/${e}/turns/${t}/stream`;
    if (r.length > 0) {
        let e = r.map(e => `item_type=${encodeURIComponent(e)}`).join(`&`);
        a += `?${e}`
    }
    let o = v(a, {
        method: `GET`,
        signal: n,
        headers: {
            ...i({
                isAuthOptional: !1
            }),
            "Content-Type": `text/event-stream`
        },
        routeName: `/wham/tasks/{task_id}/turns/{task_turn_id}/stream`,
        observer: {
            onClose: (e, t) => {
                if (t && !j(t)) throw t
            }
        }
    });
    try {
        for await (let e of o) {
            let t = A(e);
            t && (!r || r.includes(t.item_type) ? yield t: s.warn(`Unknown event type`, {
                event: e
            }))
        }
    } catch (e) {
        if (j(e)) return;
        throw e
    }
}

function A(e) {
    return !(`data` in e) || !e.data || e.event === `heartbeat` ? null : e.data
}

function j(e) {
    return !!e && typeof e == `object` && e.name === `AbortError`
}

function M(e, t) {
    return `${e}:${t}`
}

function N(e, t, n, r) {
    let i;
    return R(a => {
        let o = a.turnStreams[t];
        if (!o) return;
        if (o.initPromise) {
            i = o.initPromise;
            return
        }
        let {
            abortController: s
        } = o, c = (async () => {
            let i = 0,
                a = e => {
                    let n = [];
                    R(r => {
                        let i = r.turnStreams[t];
                        i && (i.seenEventIds.has(e.id) || (i.seenEventIds.add(e.id), i.emittedEvents.push(e), Object.values(i.subscribers).forEach(t => {
                            if (!t.types.includes(e.item_type)) return;
                            let r = t.lastTimestamps[e.item_type];
                            r && e.timestamp <= r || (t.lastTimestamps[e.item_type] = e.timestamp, n.push(t.onEvent))
                        })))
                    }), n.forEach(t => t(e))
                };
            for (; !s.signal.aborted && i < z;) {
                try {
                    let e = k({
                        taskId: n,
                        turnId: r,
                        abortSignal: s.signal,
                        types: F
                    });
                    for await (let t of e) {
                        if (s.signal.aborted) break;
                        a(t)
                    }
                } catch (e) {
                    if (j(e) || s.signal.aborted) break
                }
                let t = x(n, r),
                    o = T((await e.fetchQuery(t)).turn.turn_status);
                if (o && await Promise.all([e.refetchQueries({
                        queryKey: [`wham`, `task`, n]
                    }), e.invalidateQueries({
                        queryKey: [`wham`, `tasks`]
                    })]), i += 1, i >= z || s.signal.aborted || o) break;
                let c = Math.min(16e3, 1e3 * 2 ** i) + Math.random() * 500;
                await new Promise(e => setTimeout(e, c))
            }
            if (!s.signal.aborted) {
                let e = L().turnStreams[t]?.subscribers;
                Object.values(e ?? {}).forEach(e => {
                    e.onComplete?.()
                })
            }
        })().finally(() => {
            R(e => {
                let n = e.turnStreams[t];
                n && n.initPromise === c && (n.initPromise = null, Object.keys(n.subscribers).length || delete e.turnStreams[t])
            })
        });
        o.initPromise = c, i = c
    }), i ?? L().turnStreams[t]?.initPromise ?? Promise.resolve()
}
var P, F, I, L, R, z, B, V = e((() => {
    u(), d(), S(), w(), b(), E(), y(), h(), r(), P = t(m()), p(), c(), o(), F = [`task_turn_event`, `work_log_message`, `log`, `task_title_generated`, `app_server_event`, `thread_event`], I = l(n(() => ({
        turnStreams: {}
    }))), L = I.getState, R = I.setState, z = 20, B = {
        async retainTurnStream(e, t, n, r, i, a, o) {
            let s = M(t, n),
                c = !1;
            R(e => {
                let t = e.turnStreams[s];
                t ? t.initPromise || (c = !0, t.abortController = new AbortController) : (c = !0, t = {
                    subscribers: {},
                    abortController: new AbortController,
                    initPromise: null,
                    emittedEvents: [],
                    seenEventIds: new Set
                }, e.turnStreams[s] = t);
                let n = t.subscribers[r];
                n ? (n.types = Array.from(i), n.onEvent = a, n.onComplete = o) : t.subscribers[r] = {
                    subscriberId: r,
                    types: Array.from(i),
                    onEvent: a,
                    onComplete: o,
                    lastTimestamps: {}
                }
            });
            let l = L().turnStreams[s].emittedEvents;
            for (let e of l) i.includes(e.item_type) && a(e);
            c && await N(e, s, t, n)
        },
        releaseTurnStream(e, t, n) {
            let r = M(e, t),
                i = !1,
                a;
            R(e => {
                let t = e.turnStreams[r];
                t && t.subscribers[n] && (delete t.subscribers[n], Object.keys(t.subscribers).length || (i = !0, a = t.abortController, delete e.turnStreams[r]))
            }), i && a && a.abort()
        }
    }
}));
export {
    O as i, j as n, D as r, V as t
};
//# sourceMappingURL=9371a995-jat5p5zh69ypqioq.js.map