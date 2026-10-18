import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B6 as n,
    J$ as r,
    K8 as i,
    Nrt as a,
    QG as o,
    ZG as s,
    a7 as c,
    aot as l,
    iot as u,
    l7 as d,
    oot as f,
    q8 as p,
    rot as m,
    u1 as h
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    X as g,
    s as _,
    w as v
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Mu as y,
    Nu as b
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    n as x,
    t as S
} from "./b2cbd5c7-m8w403w5kiq0u2w6.js";
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
    let n = m();
    return !l() && n?.user?.id === e && n.account?.id === t
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
            await c.safePost(`/messaging/plugin-suggestions/{reference}/continue`, {
                parameters: {
                    path: {
                        reference: t.reference
                    }
                },
                requestBody: {
                    connected_plugin_ids: r.pluginIds
                },
                additionalHeaders: s(t.accountId)
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
    userId: a,
    accountId: o,
    requestContext: l
}) {
    let u = new URL(t, window.location.origin),
        d = u.searchParams.get(`bundle`);
    if (u.origin !== window.location.origin || u.pathname !== `/plugin-suggestions` || !d || d.length > 4096) return;
    let m = {
        reference: d,
        userId: a,
        accountId: o
    };
    if (T(m)) {
        if (i(r).isPending) {
            let e = new AbortController,
                t = f(() => {
                    T(m) || e.abort()
                });
            try {
                if (await p(() => !r().isPending, {
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
            let [t, r] = await Promise.all([c.safeGet(`/messaging/plugin-suggestions/{reference}`, {
                parameters: {
                    path: {
                        reference: d
                    }
                },
                additionalHeaders: s(o)
            }), y({
                queryClient: e,
                pluginId: n,
                requestContext: {
                    ...l,
                    accountId: o
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
    b(), a(), n(), h(), u(), S(), d(), o(), _()
}));
export {
    C as a, w as i, D as n, A as r, O as t
};
//# sourceMappingURL=bbbe3e8f-dp36vgf1nzqcxubf.js.map