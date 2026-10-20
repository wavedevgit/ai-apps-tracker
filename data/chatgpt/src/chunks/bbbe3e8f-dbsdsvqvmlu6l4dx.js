import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    C5 as n,
    F7 as r,
    Fot as i,
    Iot as a,
    Lot as o,
    R1 as s,
    Rot as c,
    S5 as l,
    TK as u,
    dit as d,
    g8 as f,
    wK as p,
    x1 as m,
    z7 as h
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Y as g,
    s as _,
    w as v
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Mu as y,
    Nu as b
} from "./8b34dbc2-dtawqv9t1aqckqj4.js";
import {
    n as x,
    t as S
} from "./b2cbd5c7-b7smo6k8uxpi3t28.js";
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
    let n = i();
    return !o() && n?.user?.id === e && n.account?.id === t
}

function E(e) {
    return T(e) && l(x)
}
async function D(e, t) {
    let {
        queryKey: n
    } = w(t), i = e.getQueryData(n);
    if (!(!E(t) || i?.status !== `ready`)) {
        e.setQueryData(n, {
            ...i,
            status: `pending`
        });
        try {
            await r.safePost(`/messaging/plugin-suggestions/{reference}/continue`, {
                parameters: {
                    path: {
                        reference: t.reference
                    }
                },
                requestBody: {
                    connected_plugin_ids: i.pluginIds
                },
                additionalHeaders: p(t.accountId)
            }), e.setQueryData(n, {
                ...i,
                status: `success`
            })
        } catch {
            e.setQueryData(n, {
                ...i,
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
    pluginId: i,
    userId: a,
    accountId: o,
    requestContext: s
}) {
    let u = new URL(t, window.location.origin),
        d = u.searchParams.get(`bundle`);
    if (u.origin !== window.location.origin || u.pathname !== `/plugin-suggestions` || !d || d.length > 4096) return;
    let f = {
        reference: d,
        userId: a,
        accountId: o
    };
    if (T(f)) {
        if (l(m).isPending) {
            let e = new AbortController,
                t = c(() => {
                    T(f) || e.abort()
                });
            try {
                if (await n(() => !m().isPending, {
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
            let [t, n] = await Promise.all([r.safeGet(`/messaging/plugin-suggestions/{reference}`, {
                parameters: {
                    path: {
                        reference: d
                    }
                },
                additionalHeaders: p(o)
            }), y({
                queryClient: e,
                pluginId: i,
                requestContext: {
                    ...s,
                    accountId: o
                },
                forceRefresh: !0
            })]);
            if (!t.suggestions.some(e => e.plugin_id === i) || !n?.pluginInstalled || !n.pluginEnabled || n.requiresPersonalTemplateDetails || n.installAction.kind !== `install`) return;
            await O(e, f, i, t.suggestions.length === 1)
        } catch {
            E(f) && e.setQueryData(w(f).queryKey, {
                pluginIds: [i],
                status: `error`
            })
        }
    }
}
var A = e((() => {
    b(), d(), f(), s(), a(), S(), h(), u(), _()
}));
export {
    C as a, w as i, D as n, A as r, O as t
};
//# sourceMappingURL=bbbe3e8f-dbsdsvqvmlu6l4dx.js.map