import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bot as n,
    C5 as r,
    F7 as i,
    Hot as a,
    R1 as o,
    S5 as s,
    TK as c,
    Vot as l,
    g8 as u,
    hit as d,
    wK as f,
    x1 as p,
    z7 as m,
    zot as h
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    Y as g,
    s as _,
    w as v
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Mu as y,
    Nu as b
} from "./8b34dbc2-ojcl97ddvu2212q0.js";
import {
    n as x,
    t as S
} from "./b2cbd5c7-by65t3fgspihyg2d.js";
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
    let n = h();
    return !l() && n?.user?.id === e && n.account?.id === t
}

function E(e) {
    return T(e) && s(x)
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
            await i.safePost(`/messaging/plugin-suggestions/{reference}/continue`, {
                parameters: {
                    path: {
                        reference: t.reference
                    }
                },
                requestBody: {
                    connected_plugin_ids: r.pluginIds
                },
                additionalHeaders: f(t.accountId)
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
    userId: o,
    accountId: c,
    requestContext: l
}) {
    let u = new URL(t, window.location.origin),
        d = u.searchParams.get(`bundle`);
    if (u.origin !== window.location.origin || u.pathname !== `/plugin-suggestions` || !d || d.length > 4096) return;
    let m = {
        reference: d,
        userId: o,
        accountId: c
    };
    if (T(m)) {
        if (s(p).isPending) {
            let e = new AbortController,
                t = a(() => {
                    T(m) || e.abort()
                });
            try {
                if (await r(() => !p().isPending, {
                        signal: e.signal
                    }), e.signal.aborted) return
            } catch (t) {
                if (!e.signal.aborted) throw t;
                return
            } finally {
                t()
            }
        }
        if (E(m)) try {
            let [t, r] = await Promise.all([i.safeGet(`/messaging/plugin-suggestions/{reference}`, {
                parameters: {
                    path: {
                        reference: d
                    }
                },
                additionalHeaders: f(c)
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
            await O(e, m, n, t.suggestions.length === 1)
        } catch {
            E(m) && e.setQueryData(w(m).queryKey, {
                pluginIds: [n],
                status: `error`
            })
        }
    }
}
var A = e((() => {
    b(), d(), u(), o(), n(), S(), m(), c(), _()
}));
export {
    C as a, w as i, D as n, A as r, O as t
};
//# sourceMappingURL=bbbe3e8f-mt72x1uw2kyvxes7.js.map