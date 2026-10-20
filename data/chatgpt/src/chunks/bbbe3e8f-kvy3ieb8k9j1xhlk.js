import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CK as n,
    Fot as r,
    Iot as i,
    L1 as a,
    Lot as o,
    P7 as s,
    Pot as c,
    R7 as l,
    S5 as u,
    b1 as d,
    h8 as f,
    uit as p,
    wK as m,
    x5 as h
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Y as g,
    s as _,
    w as v
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Mu as y,
    Nu as b
} from "./8b34dbc2-k1zgxrtsww83602u.js";
import {
    n as x,
    t as S
} from "./b2cbd5c7-lhap1zsj5rctb6w7.js";
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
    let n = c();
    return !i() && n?.user?.id === e && n.account?.id === t
}

function E(e) {
    return T(e) && h(x)
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
    pluginId: r,
    userId: i,
    accountId: a,
    requestContext: c
}) {
    let l = new URL(t, window.location.origin),
        f = l.searchParams.get(`bundle`);
    if (l.origin !== window.location.origin || l.pathname !== `/plugin-suggestions` || !f || f.length > 4096) return;
    let p = {
        reference: f,
        userId: i,
        accountId: a
    };
    if (T(p)) {
        if (h(d).isPending) {
            let e = new AbortController,
                t = o(() => {
                    T(p) || e.abort()
                });
            try {
                if (await u(() => !d().isPending, {
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
            let [t, i] = await Promise.all([s.safeGet(`/messaging/plugin-suggestions/{reference}`, {
                parameters: {
                    path: {
                        reference: f
                    }
                },
                additionalHeaders: n(a)
            }), y({
                queryClient: e,
                pluginId: r,
                requestContext: {
                    ...c,
                    accountId: a
                },
                forceRefresh: !0
            })]);
            if (!t.suggestions.some(e => e.plugin_id === r) || !i?.pluginInstalled || !i.pluginEnabled || i.requiresPersonalTemplateDetails || i.installAction.kind !== `install`) return;
            await O(e, p, r, t.suggestions.length === 1)
        } catch {
            E(p) && e.setQueryData(w(p).queryKey, {
                pluginIds: [r],
                status: `error`
            })
        }
    }
}
var A = e((() => {
    b(), p(), f(), a(), r(), S(), l(), m(), _()
}));
export {
    C as a, w as i, D as n, A as r, O as t
};
//# sourceMappingURL=bbbe3e8f-kvy3ieb8k9j1xhlk.js.map