import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as n,
    A1 as r,
    A8 as i,
    Ait as a,
    I5 as o,
    L5 as s,
    SK as c,
    Y7 as l,
    est as u,
    nst as d,
    q1 as f,
    rst as p,
    tst as m,
    xK as h
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    Y as g,
    s as _,
    w as v
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Fu as y,
    Iu as b
} from "./8b34dbc2-ik628tlti8ozm9vq.js";
import {
    n as x,
    t as S
} from "./b2cbd5c7-jn40ux47l814knoa.js";
var C = t({
    completePluginSuggestionOAuth: () => k,
    completePluginSuggestionSetup: () => O,
    continuePluginSuggestions: () => D,
    pluginSuggestionCompletionOptions: () => w
});

function w(e) {
    return v({
        queryKey: [`orbit-plugin-suggestion-completion`, e],
        queryFn: g,
        initialData: () => ({
            pluginIds: [],
            status: `idle`
        }),
        staleTime: 1 / 0
    })
}

function T({
    userId: e,
    accountId: t
}) {
    let n = u();
    return !d() && n?.user?.id === e && n.account?.id === t
}

function E(e) {
    return T(e) && o(x)
}
async function D(e, t) {
    let {
        queryKey: n
    } = w(t), r = e.getQueryData(n);
    if (!(!E(t) || r?.status !== `ready`)) {
        e.setQueryData(n, {
            ...r,
            status: `pending`
        });
        try {
            await l.safePost(`/messaging/plugin-suggestions/{reference}/continue`, {
                parameters: {
                    path: {
                        reference: t.reference
                    }
                },
                requestBody: {
                    connected_plugin_ids: r.pluginIds
                },
                additionalHeaders: h(t.accountId)
            }), e.setQueryData(n, {
                ...r,
                status: `success`
            })
        } catch {
            e.setQueryData(n, {
                ...r,
                status: `error`
            })
        }
    }
}
async function O(e, t, n, r) {
    if (!E(t)) return;
    let {
        queryKey: i
    } = w(t);
    e.setQueryData(i, e => ({
        pluginIds: [...new Set([...e?.pluginIds ?? [], n])],
        status: e && e.status !== `idle` ? e.status : `ready`
    })), r && await D(e, t)
}
async function k({
    queryClient: e,
    returnTo: t,
    pluginId: n,
    userId: i,
    accountId: a,
    requestContext: c
}) {
    let u = new URL(t, window.location.origin),
        d = u.searchParams.get(`bundle`);
    if (u.origin !== window.location.origin || u.pathname !== `/plugin-suggestions` || !d || d.length > 4096) return;
    let f = {
        reference: d,
        userId: i,
        accountId: a
    };
    if (T(f)) {
        if (o(r).isPending) {
            let e = new AbortController,
                t = p(() => {
                    T(f) || e.abort()
                });
            try {
                if (await s(() => !r().isPending, {
                        signal: e.signal
                    }), e.signal.aborted) return
            } catch (t) {
                if (!e.signal.aborted) throw t;
                return
            } finally {
                t()
            }
        }
        if (E(f)) try {
            let [t, r] = await Promise.all([l.safeGet(`/messaging/plugin-suggestions/{reference}`, {
                parameters: {
                    path: {
                        reference: d
                    }
                },
                additionalHeaders: h(a)
            }), y({
                queryClient: e,
                pluginId: n,
                requestContext: {
                    ...c,
                    accountId: a
                },
                forceRefresh: !0
            })]);
            if (!t.suggestions.some(e => e.plugin_id === n) || !r?.pluginInstalled || !r.pluginEnabled || r.requiresPersonalTemplateDetails || r.installAction.kind !== `install`) return;
            await O(e, f, n, t.suggestions.length === 1)
        } catch {
            E(f) && e.setQueryData(w(f).queryKey, {
                pluginIds: [n],
                status: `error`
            })
        }
    }
}
var A = e((() => {
    b(), a(), i(), f(), m(), S(), n(), c(), _()
}));
export {
    C as a, w as i, D as n, A as r, O as t
};
//# sourceMappingURL=bbbe3e8f-fj18872wh22vyzsl.js.map