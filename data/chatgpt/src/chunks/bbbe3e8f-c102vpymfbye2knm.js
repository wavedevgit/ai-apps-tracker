import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $ot as n,
    A1 as r,
    Dit as i,
    F5 as a,
    I5 as o,
    J7 as s,
    Q7 as c,
    Qot as l,
    SK as u,
    Zot as d,
    est as f,
    k8 as p,
    q1 as m,
    xK as h
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    Y as g,
    s as _,
    w as v
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Mu as y,
    Nu as b
} from "./8b34dbc2-egl8cz04n8nmlktg.js";
import {
    n as x,
    t as S
} from "./b2cbd5c7-nda6yazkoyc4aek7.js";
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
    let r = d();
    return !n() && r?.user?.id === e && r.account?.id === t
}

function E(e) {
    return T(e) && a(x)
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
            await s.safePost(`/messaging/plugin-suggestions/{reference}/continue`, {
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
    accountId: c,
    requestContext: l
}) {
    let u = new URL(t, window.location.origin),
        d = u.searchParams.get(`bundle`);
    if (u.origin !== window.location.origin || u.pathname !== `/plugin-suggestions` || !d || d.length > 4096) return;
    let p = {
        reference: d,
        userId: i,
        accountId: c
    };
    if (T(p)) {
        if (a(r).isPending) {
            let e = new AbortController,
                t = f(() => {
                    T(p) || e.abort()
                });
            try {
                if (await o(() => !r().isPending, {
                        signal: e.signal
                    }), e.signal.aborted) return
            } catch (t) {
                if (!e.signal.aborted) throw t;
                return
            } finally {
                t()
            }
        }
        if (E(p)) try {
            let [t, r] = await Promise.all([s.safeGet(`/messaging/plugin-suggestions/{reference}`, {
                parameters: {
                    path: {
                        reference: d
                    }
                },
                additionalHeaders: h(c)
            }), y({
                queryClient: e,
                pluginId: n,
                requestContext: {
                    ...l,
                    accountId: c
                },
                forceRefresh: !0
            })]);
            if (!t.suggestions.some(e => e.plugin_id === n) || !r?.pluginInstalled || !r.pluginEnabled || r.requiresPersonalTemplateDetails || r.installAction.kind !== `install`) return;
            await O(e, p, n, t.suggestions.length === 1)
        } catch {
            E(p) && e.setQueryData(w(p).queryKey, {
                pluginIds: [n],
                status: `error`
            })
        }
    }
}
var A = e((() => {
    b(), i(), p(), m(), l(), S(), c(), u(), _()
}));
export {
    C as a, w as i, D as n, A as r, O as t
};
//# sourceMappingURL=bbbe3e8f-c102vpymfbye2knm.js.map