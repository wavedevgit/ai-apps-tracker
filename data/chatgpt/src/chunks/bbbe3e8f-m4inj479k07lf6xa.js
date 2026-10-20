import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CK as n,
    Fot as r,
    I1 as i,
    L7 as a,
    Mot as o,
    N7 as s,
    Not as c,
    Pot as l,
    b1 as u,
    b5 as d,
    cit as f,
    m8 as p,
    wK as m,
    x5 as h
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    X as g,
    s as _,
    w as v
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    Mu as y,
    Nu as b
} from "./8b34dbc2-d4icgkio4i3wfm6q.js";
import {
    n as x,
    t as S
} from "./b2cbd5c7-hd37ib03ip1ftahc.js";
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
    let n = o();
    return !l() && n?.user?.id === e && n.account?.id === t
}

function E(e) {
    return T(e) && d(x)
}
async function D(e, t) {
    let {
        queryKey: r
    } = w(t), i = e.getQueryData(r);
    if (!(!E(t) || i?.status !== `ready`)) {
        e.setQueryData(r, {
            ...i,
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
                    connected_plugin_ids: i.pluginIds
                },
                additionalHeaders: n(t.accountId)
            }), e.setQueryData(r, {
                ...i,
                status: `success`
            })
        } catch {
            e.setQueryData(r, {
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
    requestContext: c
}) {
    let l = new URL(t, window.location.origin),
        f = l.searchParams.get(`bundle`);
    if (l.origin !== window.location.origin || l.pathname !== `/plugin-suggestions` || !f || f.length > 4096) return;
    let p = {
        reference: f,
        userId: a,
        accountId: o
    };
    if (T(p)) {
        if (d(u).isPending) {
            let e = new AbortController,
                t = r(() => {
                    T(p) || e.abort()
                });
            try {
                if (await h(() => !u().isPending, {
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
                        reference: f
                    }
                },
                additionalHeaders: n(o)
            }), y({
                queryClient: e,
                pluginId: i,
                requestContext: {
                    ...c,
                    accountId: o
                },
                forceRefresh: !0
            })]);
            if (!t.suggestions.some(e => e.plugin_id === i) || !r?.pluginInstalled || !r.pluginEnabled || r.requiresPersonalTemplateDetails || r.installAction.kind !== `install`) return;
            await O(e, p, i, t.suggestions.length === 1)
        } catch {
            E(p) && e.setQueryData(w(p).queryKey, {
                pluginIds: [i],
                status: `error`
            })
        }
    }
}
var A = e((() => {
    b(), f(), p(), i(), c(), S(), a(), m(), _()
}));
export {
    C as a, w as i, D as n, A as r, O as t
};
//# sourceMappingURL=bbbe3e8f-m4inj479k07lf6xa.js.map