import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $ot as n,
    A1 as r,
    F5 as i,
    I5 as a,
    J7 as o,
    Q7 as s,
    SK as c,
    est as l,
    k8 as u,
    kit as d,
    nst as f,
    q1 as p,
    tst as m,
    xK as h
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Y as g,
    s as _,
    w as v
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Fu as y,
    Pu as b
} from "./8b34dbc2-n194ohawifys3bko.js";
import {
    n as x,
    t as S
} from "./b2cbd5c7-fzfs2y6bewpxhodm.js";
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
    let r = n();
    return !m() && r?.user?.id === e && r.account?.id === t
}

function E(e) {
    return T(e) && i(x)
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
    userId: s,
    accountId: c,
    requestContext: l
}) {
    let u = new URL(t, window.location.origin),
        d = u.searchParams.get(`bundle`);
    if (u.origin !== window.location.origin || u.pathname !== `/plugin-suggestions` || !d || d.length > 4096) return;
    let p = {
        reference: d,
        userId: s,
        accountId: c
    };
    if (T(p)) {
        if (i(r).isPending) {
            let e = new AbortController,
                t = f(() => {
                    T(p) || e.abort()
                });
            try {
                if (await a(() => !r().isPending, {
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
            let [t, r] = await Promise.all([o.safeGet(`/messaging/plugin-suggestions/{reference}`, {
                parameters: {
                    path: {
                        reference: d
                    }
                },
                additionalHeaders: h(c)
            }), b({
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
    y(), d(), u(), p(), l(), S(), s(), c(), _()
}));
export {
    C as a, w as i, D as n, A as r, O as t
};
//# sourceMappingURL=bbbe3e8f-d5f6ymcgjx9mzrnj.js.map