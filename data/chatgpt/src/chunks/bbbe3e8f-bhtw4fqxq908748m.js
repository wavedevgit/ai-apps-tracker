import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as n,
    A8 as r,
    I7 as i,
    Lit as a,
    M7 as o,
    SK as s,
    b5 as c,
    cst as l,
    lst as u,
    q1 as d,
    sst as f,
    ust as p,
    xK as m,
    y5 as h
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Y as g,
    s as _,
    w as v
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Fu as y,
    Iu as b
} from "./8b34dbc2-lmwubajnld74ksfm.js";
import {
    n as x,
    t as S
} from "./b2cbd5c7-5wvc8mg94bjjggd5.js";
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
    let n = f();
    return !u() && n?.user?.id === e && n.account?.id === t
}

function E(e) {
    return T(e) && h(x)
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
            await o.safePost(`/messaging/plugin-suggestions/{reference}/continue`, {
                parameters: {
                    path: {
                        reference: t.reference
                    }
                },
                requestBody: {
                    connected_plugin_ids: r.pluginIds
                },
                additionalHeaders: m(t.accountId)
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
    pluginId: r,
    userId: i,
    accountId: a,
    requestContext: s
}) {
    let l = new URL(t, window.location.origin),
        u = l.searchParams.get(`bundle`);
    if (l.origin !== window.location.origin || l.pathname !== `/plugin-suggestions` || !u || u.length > 4096) return;
    let d = {
        reference: u,
        userId: i,
        accountId: a
    };
    if (T(d)) {
        if (h(n).isPending) {
            let e = new AbortController,
                t = p(() => {
                    T(d) || e.abort()
                });
            try {
                if (await c(() => !n().isPending, {
                        signal: e.signal
                    }), e.signal.aborted) return
            } catch (t) {
                if (!e.signal.aborted) throw t;
                return
            } finally {
                t()
            }
        }
        if (E(d)) try {
            let [t, n] = await Promise.all([o.safeGet(`/messaging/plugin-suggestions/{reference}`, {
                parameters: {
                    path: {
                        reference: u
                    }
                },
                additionalHeaders: m(a)
            }), y({
                queryClient: e,
                pluginId: r,
                requestContext: {
                    ...s,
                    accountId: a
                },
                forceRefresh: !0
            })]);
            if (!t.suggestions.some(e => e.plugin_id === r) || !n?.pluginInstalled || !n.pluginEnabled || n.requiresPersonalTemplateDetails || n.installAction.kind !== `install`) return;
            await O(e, d, r, t.suggestions.length === 1)
        } catch {
            E(d) && e.setQueryData(w(d).queryKey, {
                pluginIds: [r],
                status: `error`
            })
        }
    }
}
var A = e((() => {
    b(), a(), r(), d(), l(), S(), i(), s(), _()
}));
export {
    C as a, w as i, D as n, A as r, O as t
};
//# sourceMappingURL=bbbe3e8f-bhtw4fqxq908748m.js.map