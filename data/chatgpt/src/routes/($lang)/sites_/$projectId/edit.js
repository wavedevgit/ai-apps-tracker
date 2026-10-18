import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as n,
    AT as r,
    B6 as i,
    BW as a,
    CW as o,
    Cit as s,
    DW as c,
    HW as l,
    Hit as u,
    Itt as d,
    J8 as f,
    JW as p,
    Nrt as m,
    Prt as h,
    S1 as g,
    Sit as _,
    Srt as v,
    Tit as y,
    Vit as b,
    Y2 as x,
    Y8 as S,
    ZW as C,
    _tt as w,
    a7 as ee,
    dz as T,
    e1 as E,
    fz as te,
    i5 as ne,
    k1 as re,
    kT as D,
    l7 as ie,
    n1 as ae,
    q2 as oe,
    u1 as O,
    y1 as se
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as k,
    Bn as A,
    Ht as j,
    Nn as M,
    O as N,
    Pt as ce,
    Rn as le,
    Rt as ue,
    St as de,
    Vn as fe,
    Zt as P,
    an as F,
    lt as I,
    s as L,
    wn as R,
    xt as z,
    zn as B
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    FHt as V,
    IHt as pe,
    LHt as me,
    Qzn as H,
    Zzn as he,
    c as ge,
    eBn as U,
    s as W
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    i as _e,
    r as ve,
    s as ye
} from "./07c7be17-lep3pqzh63ahqu2w.js";
import {
    a as be,
    o as xe
} from "./6313cbac-e5hl863fl4prr1xq.js";
import {
    n as Se,
    t as Ce
} from "./de78aee8-ejk7e9u4n0mmy0du.js";
async function we({
    projectId: e,
    accountId: t,
    threadId: n,
    prompt: r,
    browserUrl: i,
    hostId: a,
    signal: o
}) {
    o.throwIfAborted();
    let s = n.trim();
    if (!F(s) || d()) return `fallback`;
    let c = new URL(`codex://sites/${encodeURIComponent(e)}/edit`);
    c.searchParams.set(`codex_thread_id`, s), t && c.searchParams.set(`account_id`, t), r != null && c.searchParams.set(`prompt`, r), a?.trim() && c.searchParams.set(`hostId`, a.trim());
    let l = u(i ?? ``);
    return l != null && [`http:`, `https:`].includes(l.protocol) && !l.username && !l.password && c.searchParams.set(`browser_url`, l.toString()), await new Promise((e, t) => {
        let n = !1,
            r = !1,
            i, a = () => {
                window.clearTimeout(i), i = void 0
            },
            s = () => {
                r = !0, a(), window.removeEventListener(`focus`, f), window.removeEventListener(`blur`, a), window.removeEventListener(`pagehide`, d), document.removeEventListener(`visibilitychange`, p), o.removeEventListener(`abort`, u)
            },
            l = t => {
                r || (s(), e(t))
            },
            u = () => {
                r || (s(), t(o.reason))
            },
            d = () => {
                n && l(`opened`)
            },
            f = () => {
                if (a(), !(r || !document.hasFocus() || document.visibilityState !== `visible`) && (i = window.setTimeout(() => l(`fallback`), 1500), !n)) {
                    n = !0;
                    try {
                        xe(c.toString())
                    } catch {
                        l(`fallback`)
                    }
                }
            },
            p = () => {
                n && document.visibilityState === `hidden` ? l(`opened`) : f()
            };
        window.addEventListener(`focus`, f), window.addEventListener(`blur`, a), window.addEventListener(`pagehide`, d), document.addEventListener(`visibilitychange`, p), o.addEventListener(`abort`, u, {
            once: !0
        }), f()
    })
}
var Te = e((() => {
    b(), w(), be(), P()
}));
async function Ee({
    site: e,
    accountId: t,
    conversationId: n,
    codexThreadId: r,
    browserUrl: i,
    hostId: a,
    prompt: o,
    defaultPrompt: s,
    allowBrowserFallback: c = !0,
    signal: l
}) {
    let u = n ? await De(n, l) : null;
    l.throwIfAborted();
    let d = U({
            projectId: e.id,
            title: e.title
        }),
        f = `${d} `;
    o != null && (f = he(o).some(({
        projectId: t
    }) => t === e.id) ? o : `${d} ${o}`);
    let m = new URLSearchParams({
        prompt: u == null && o == null ? s : f,
        promptSource: `codex-app`,
        surface: p.TPP
    });
    return u == null ? r && await we({
        projectId: e.id,
        accountId: t,
        threadId: r,
        prompt: o == null ? null : f,
        browserUrl: i ?? e.live_url,
        hostId: a,
        signal: l
    }) === `opened` || (l.throwIfAborted(), !c) ? null : `/?${m}` : `${u}?${m}`
}
async function De(e, t) {
    try {
        let n = await ee.safeGet(`/conversation/{conversation_id}`, {
            parameters: {
                path: {
                    conversation_id: e
                }
            },
            signal: t
        });
        if (t.throwIfAborted(), !n.is_archived && !n.is_read_only) return `${n.gizmo_id?`/g/${encodeURIComponent(n.gizmo_id)}`:``}/c/${encodeURIComponent(e)}`
    } catch {
        t.throwIfAborted()
    }
    return null
}
var Oe = e((() => {
        H(), C(), Te(), ie()
    })),
    G, ke = e((() => {
        G = {
            id: `sites.edit_site_prompt.with_site_reference`,
            defaultMessage: `{siteReference} make these changes…`,
            description: `Prefill for a new Work conversation opened from a Site's Edit action. {siteReference} is the exact serialized reference to that Site and must remain intact. The user can type the requested edits after this text.`
        }
    }));

function Ae() {
    return c()
}
var K, q, J, Y, X, Z, je = e((() => {
    K = R(), te(), r(), H(), i(), O(), pe(), _e(), Oe(), ke(), o(), Se(), L(), q = t(fe()), le(), k(), P(), J = A(), Y = () => {
        "use forget";
        let e = (0, K.c)(6),
            {
                projectId: t
            } = ue(),
            [n] = j(),
            r = me();
        if (!t) {
            let t;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, J.jsx)(I, {
                replace: !0,
                to: `/sites`
            }), e[0] = t) : t = e[0], t
        }
        if (n.get(`account_id`)?.trim()) {
            let t;
            return e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, J.jsx)(T, {}), e[1] = t) : t = e[1], t
        }
        let i = `${r??``}:${t}`,
            a;
        return e[2] !== r || e[3] !== t || e[4] !== i ? (a = (0, J.jsx)(X, {
            accountId: r,
            projectId: t
        }, i), e[2] = r, e[3] = t, e[4] = i, e[5] = a) : a = e[5], a
    }, X = e => {
        "use forget";
        let t = (0, K.c)(66),
            {
                accountId: n,
                projectId: r
            } = e,
            i = ce(),
            [a] = j(),
            o = g(),
            s = ne(Ae),
            c, l, u, d;
        t[0] !== n || t[1] !== s || t[2] !== a ? (l = a.get(`codex_thread_id`), c = l != null && F(l.trim()), d = N, u = V({
            accountId: n,
            enabled: s || c
        }), t[0] = n, t[1] = s, t[2] = a, t[3] = c, t[4] = l, t[5] = u, t[6] = d) : (c = t[3], l = t[4], u = t[5], d = t[6]);
        let f;
        t[7] === u ? f = t[8] : (f = {
            ...u,
            refetchOnMount: `always`
        }, t[7] = u, t[8] = f);
        let p = d(f),
            m = (s || c) && !o.isLoading && !p.isFetching && p.isSuccess && p.data.enabled,
            h;
        t[9] !== n || t[10] !== r ? (h = ye(n, r), t[9] = n, t[10] = r, t[11] = h) : h = t[11];
        let _;
        t[12] !== n || t[13] !== r ? (_ = () => ve(r, n), t[12] = n, t[13] = r, t[14] = _) : _ = t[14];
        let v;
        t[15] !== m || t[16] !== h || t[17] !== _ ? (v = {
            enabled: m,
            queryKey: h,
            queryFn: _,
            refetchOnMount: `always`,
            retry: !1
        }, t[15] = m, t[16] = h, t[17] = _, t[18] = v) : v = t[18];
        let y = N(v);
        if (o.isLoading || (s || c) && (p.isPending || p.isFetching)) {
            let e;
            return t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, J.jsx)(T, {}), t[19] = e) : e = t[19], e
        }
        if (!m) {
            let e;
            return t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, J.jsx)(I, {
                replace: !0,
                to: `/sites`
            }), t[20] = e) : e = t[20], e
        }
        if (y.isPending || y.isFetching) {
            let e;
            return t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, J.jsx)(T, {}), t[21] = e) : e = t[21], e
        }
        let b = y.data;
        if (y.isError || b == null || b.status !== `active` || !b.live_url || !b.slug.trim()) {
            let e;
            return t[22] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, J.jsx)(I, {
                replace: !0,
                to: `/sites`
            }), t[22] = e) : e = t[22], e
        }
        if (!s && c) {
            let e = `${n??``}:${b.id}:${a}`,
                r;
            t[23] === a ? r = t[24] : (r = a.get(`browser_url`), t[23] = a, t[24] = r);
            let i;
            t[25] === a ? i = t[26] : (i = a.get(`hostId`), t[25] = a, t[26] = i);
            let o;
            t[27] === a ? o = t[28] : (o = a.get(`prompt`), t[27] = a, t[28] = o);
            let s;
            return t[29] !== n || t[30] !== l || t[31] !== b || t[32] !== o || t[33] !== e || t[34] !== r || t[35] !== i ? (s = (0, J.jsx)(Z, {
                site: b,
                accountId: n,
                conversationId: null,
                codexThreadId: l,
                browserUrl: r,
                hostId: i,
                prompt: o,
                allowBrowserFallback: !1
            }, e), t[29] = n, t[30] = l, t[31] = b, t[32] = o, t[33] = e, t[34] = r, t[35] = i, t[36] = s) : s = t[36], s
        }
        if (a.has(`conversation_id`) || a.has(`codex_thread_id`) || a.has(`prompt`) || a.has(`browser_url`)) {
            let e = `${n??``}:${b.id}:${a}`,
                r;
            t[37] === a ? r = t[38] : (r = a.get(`conversation_id`), t[37] = a, t[38] = r);
            let i;
            t[39] === a ? i = t[40] : (i = a.get(`codex_thread_id`), t[39] = a, t[40] = i);
            let o;
            t[41] === a ? o = t[42] : (o = a.get(`browser_url`), t[41] = a, t[42] = o);
            let s;
            t[43] === a ? s = t[44] : (s = a.get(`hostId`), t[43] = a, t[44] = s);
            let c;
            t[45] === a ? c = t[46] : (c = a.get(`prompt`), t[45] = a, t[46] = c);
            let l;
            return t[47] !== n || t[48] !== b || t[49] !== o || t[50] !== s || t[51] !== c || t[52] !== e || t[53] !== r || t[54] !== i ? (l = (0, J.jsx)(Z, {
                site: b,
                accountId: n,
                conversationId: r,
                codexThreadId: i,
                browserUrl: o,
                hostId: s,
                prompt: c
            }, e), t[47] = n, t[48] = b, t[49] = o, t[50] = s, t[51] = c, t[52] = e, t[53] = r, t[54] = i, t[55] = l) : l = t[55], l
        }
        let x;
        t[56] !== b.id || t[57] !== b.live_url || t[58] !== b.slug || t[59] !== b.title ? (x = {
            projectId: b.id,
            slug: b.slug,
            title: b.title,
            url: b.live_url
        }, t[56] = b.id, t[57] = b.live_url, t[58] = b.slug, t[59] = b.title, t[60] = x) : x = t[60];
        let S;
        t[61] === i ? S = t[62] : (S = () => i(`/sites`, {
            replace: !0
        }), t[61] = i, t[62] = S);
        let C;
        return t[63] !== x || t[64] !== S ? (C = (0, J.jsx)(Ce, {
            resource: x,
            onClose: S
        }), t[63] = x, t[64] = S, t[65] = C) : C = t[65], C
    }, Z = e => {
        "use forget";
        let t = (0, K.c)(35),
            {
                site: n,
                accountId: r,
                conversationId: i,
                codexThreadId: a,
                browserUrl: o,
                hostId: s,
                prompt: c,
                allowBrowserFallback: l
            } = e,
            u = l === void 0 || l,
            d = B(),
            f;
        t[0] !== d || t[1] !== n.id || t[2] !== n.title ? (f = d.formatMessage(G, {
            siteReference: U({
                projectId: n.id,
                title: n.title
            })
        }), t[0] = d, t[1] = n.id, t[2] = n.title, t[3] = f) : f = t[3];
        let p = f,
            [m, h] = (0, q.useState)(!1),
            g;
        t[4] !== r || t[5] !== u || t[6] !== o || t[7] !== a || t[8] !== m || t[9] !== i || t[10] !== p || t[11] !== s || t[12] !== c || t[13] !== n.id ? (g = [`sites-edit-conversation`, r, n.id, i, a, o, s, c, p, m, u], t[4] = r, t[5] = u, t[6] = o, t[7] = a, t[8] = m, t[9] = i, t[10] = p, t[11] = s, t[12] = c, t[13] = n.id, t[14] = g) : g = t[14];
        let _;
        t[15] !== r || t[16] !== u || t[17] !== o || t[18] !== a || t[19] !== m || t[20] !== i || t[21] !== p || t[22] !== s || t[23] !== c || t[24] !== n ? (_ = e => {
            let {
                signal: t
            } = e;
            return Ee({
                site: n,
                accountId: r,
                conversationId: i,
                codexThreadId: m ? null : a,
                browserUrl: o,
                hostId: s,
                prompt: c,
                defaultPrompt: p,
                allowBrowserFallback: u,
                signal: t
            })
        }, t[15] = r, t[16] = u, t[17] = o, t[18] = a, t[19] = m, t[20] = i, t[21] = p, t[22] = s, t[23] = c, t[24] = n, t[25] = _) : _ = t[25];
        let v;
        t[26] !== g || t[27] !== _ ? (v = {
            queryKey: g,
            queryFn: _,
            retry: !1,
            staleTime: 0,
            gcTime: 0,
            refetchOnWindowFocus: !1,
            refetchOnReconnect: !1
        }, t[26] = g, t[27] = _, t[28] = v) : v = t[28];
        let y = N(v);
        if (y.isError) throw y.error;
        if (y.isSuccess && y.data == null) {
            let e;
            return t[29] !== u || t[30] !== y ? (e = (0, J.jsx)(`div`, {
                className: `flex h-full items-center justify-center`,
                children: u ? (0, J.jsx)(D, {
                    type: `button`,
                    color: `primary`,
                    onClick: () => h(!0),
                    children: (0, J.jsx)(M, {
                        id: `sites.edit.continueInBrowser`,
                        defaultMessage: `Continue editing in browser`
                    })
                }) : (0, J.jsx)(D, {
                    type: `button`,
                    color: `primary`,
                    onClick: () => void y.refetch(),
                    children: (0, J.jsx)(M, {
                        id: `sites.edit.openDesktopApp`,
                        defaultMessage: `Open in ChatGPT desktop`
                    })
                })
            }), t[29] = u, t[30] = y, t[31] = e) : e = t[31], e
        }
        if (!y.data) {
            let e;
            return t[32] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, J.jsx)(T, {}), t[32] = e) : e = t[32], e
        }
        let b;
        return t[33] === y.data ? b = t[34] : (b = (0, J.jsx)(I, {
            replace: !0,
            to: y.data
        }), t[33] = y.data, t[34] = b), b
    }
}));

function Me(e) {
    let t = new URL(e.url);
    throw z(`/auth/login/?${new URLSearchParams({next:t.pathname+t.search})}`)
}
async function Ne(e) {
    let t = new URL(e.url),
        r = t.searchParams.get(`account_id`)?.trim();
    if (!r) return !1;
    t.searchParams.delete(`account_id`);
    let i = t.pathname + t.search + t.hash;
    if (r === (_.getCookie(y.Workspace) ?? `personal`)) throw z(i);
    let a = f(),
        o = E(await a.ensureQueryData(ae())).find(e => r === `personal` ? e.isPersonalAccount() : e.id === r);
    if (o == null) throw z(`/sites`);
    if (!o.canAccessWithCurrentSession) return await n({
        fallbackScreenHint: `login`,
        callbackUrl: e.url,
        ...o.ssoConnectionName == null ? {} : {
            additionalAuthParams: {
                connection: o.ssoConnectionName
            }
        }
    }), !0;
    let {
        updatedAccount: s
    } = await se(a, o.id);
    throw s ? (await oe(), de(i)) : z(`/sites`)
}
var Q, $, Pe = e((() => {
    a(), v(), O(), re(), m(), s(), S(), x(), W(), k(), je(), Q = async ({
        request: e
    }) => {
        if (ge(), h() || Me(e), await Ne(e)) return null;
        if (!l()) throw z(`/library`);
        return null
    }, Q.hydrate = !0, $ = ({
        currentParams: e,
        nextParams: t,
        nextUrl: n
    }) => e.projectId !== t.projectId || !!n.searchParams.get(`account_id`)?.trim()
}));
e((() => {
    Pe()
}))();
export {
    Q as clientLoader, Y as
    default, $ as shouldRevalidate
};
//# sourceMappingURL=(_lang).sites_._projectId.edit-lw9ska8w.js.map