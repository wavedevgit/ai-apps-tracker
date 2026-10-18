import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as n,
    AT as r,
    HS as i,
    VS as a,
    a7 as o,
    aot as s,
    dit as c,
    iot as l,
    k1 as u,
    kT as d,
    l7 as f,
    oot as p,
    rot as m,
    vit as h
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as g,
    Bn as _,
    Ht as v,
    In as y,
    Nn as b,
    O as x,
    Pt as S,
    Rn as C,
    Ut as w,
    Vn as T,
    s as E,
    wn as D,
    zn as O
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Flt as k,
    Nbt as A,
    Nlt as j,
    Pbt as M,
    YUn as N,
    qUn as P
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    BS as F,
    dS as I
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";

function L(e) {
    let {
        children: t,
        href: n
    } = e;
    return (0, z.jsx)(`a`, {
        href: n,
        target: `_blank`,
        rel: `noopener noreferrer`,
        children: t
    })
}
var R, z, B, V, H = e((() => {
    R = D(), r(), M(), k(), i(), C(), P(), z = _(), B = y({
        id: `chatgpt.orbit.safety_findings.page.title`,
        defaultMessage: `Safety findings`
    }), V = e => {
        "use forget";
        let t = (0, R.c)(21),
            {
                explanation: n,
                loading: r,
                onClose: i,
                onRetry: o,
                onSignIn: s
            } = e,
            c = O(),
            l;
        t[0] === i ? l = t[1] : (l = e => {
            e || i()
        }, t[0] = i, t[1] = l);
        let u;
        t[2] === c ? u = t[3] : (u = c.formatMessage(B), t[2] = c, t[3] = u);
        let f;
        t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, z.jsx)(`meta`, {
            name: `referrer`,
            content: `no-referrer`
        }), t[4] = f) : f = t[4];
        let p;
        t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (p = (0, z.jsx)(`h1`, {
            className: `flex-1 text-base font-semibold`,
            children: (0, z.jsx)(b, {
                ...B
            })
        }), t[5] = p) : p = t[5];
        let m;
        t[6] === c ? m = t[7] : (m = c.formatMessage({
            id: `chatgpt.orbit.safety_findings.button.close`,
            defaultMessage: `Close`
        }), t[6] = c, t[7] = m);
        let h;
        t[8] === m ? h = t[9] : (h = (0, z.jsxs)(j.Header, {
            children: [p, (0, z.jsx)(j.CloseButton, {
                "aria-label": m
            })]
        }), t[8] = m, t[9] = h);
        let g;
        t[10] !== n || t[11] !== c || t[12] !== r || t[13] !== o || t[14] !== s ? (g = (0, z.jsx)(j.Contents, {
            children: (0, z.jsx)(`main`, {
                className: `mx-auto max-w-3xl space-y-6 px-4 py-6 md:px-6`,
                children: r ? (0, z.jsx)(`p`, {
                    role: `status`,
                    className: `text-token-text-secondary`,
                    children: (0, z.jsx)(b, {
                        id: `chatgpt.orbit.safety_findings.status.loading`,
                        defaultMessage: `Loading findings…`
                    })
                }) : n == null ? (0, z.jsxs)(`div`, {
                    className: `space-y-4`,
                    children: [(0, z.jsx)(`p`, {
                        role: `status`,
                        className: `text-token-text-secondary`,
                        children: (0, z.jsx)(b, {
                            id: `chatgpt.orbit.safety_findings.status.unavailable`,
                            defaultMessage: `These findings aren’t available. Make sure you’re signed in to the account and workspace you use with your dot.`
                        })
                    }), o && (0, z.jsx)(d, {
                        type: `button`,
                        color: `secondary`,
                        onClick: o,
                        children: (0, z.jsx)(b, {
                            id: `chatgpt.orbit.safety_findings.button.retry`,
                            defaultMessage: `Try again`
                        })
                    }), s && (0, z.jsx)(d, {
                        type: `button`,
                        color: `primary`,
                        onClick: s,
                        children: (0, z.jsx)(b, {
                            id: `chatgpt.orbit.safety_findings.button.sign_in`,
                            defaultMessage: `Log in`
                        })
                    })]
                }) : (0, z.jsxs)(z.Fragment, {
                    children: [(0, z.jsx)(`p`, {
                        className: `text-token-text-secondary`,
                        children: (0, z.jsx)(b, {
                            id: `chatgpt.orbit.safety_findings.description.return`,
                            defaultMessage: `Return to your dot after reviewing these findings. Viewing this page does not resume your dot.`
                        })
                    }), (0, z.jsxs)(`section`, {
                        "aria-labelledby": `safety-findings-heading`,
                        className: `space-y-4`,
                        children: [(0, z.jsxs)(`div`, {
                            className: `flex items-center gap-2`,
                            children: [(0, z.jsx)(`h2`, {
                                id: `safety-findings-heading`,
                                className: `font-semibold`,
                                children: (0, z.jsx)(b, {
                                    id: `chatgpt.orbit.safety_findings.heading.explanation`,
                                    defaultMessage: `What we detected`
                                })
                            }), (0, z.jsx)(A, {
                                iconOnly: !0,
                                ariaLabel: c.formatMessage({
                                    id: `chatgpt.orbit.safety_findings.button.copy`,
                                    defaultMessage: `Copy explanation`
                                }),
                                onCopy: () => a(n)
                            })]
                        }), (0, z.jsx)(`div`, {
                            className: `prose text-token-text-secondary max-w-none text-base break-words [&_pre]:overflow-x-auto`,
                            children: (0, z.jsx)(N, {
                                skipHtml: !0,
                                disallowedElements: [`img`],
                                components: {
                                    a: L
                                },
                                children: n
                            })
                        })]
                    })]
                })
            })
        }), t[10] = n, t[11] = c, t[12] = r, t[13] = o, t[14] = s, t[15] = g) : g = t[15];
        let _;
        return t[16] !== l || t[17] !== u || t[18] !== h || t[19] !== g ? (_ = (0, z.jsxs)(j, {
            open: !0,
            renderInPlace: !0,
            onOpenChange: l,
            accessibleTitle: u,
            children: [f, h, g]
        }), t[16] = l, t[17] = u, t[18] = h, t[19] = g, t[20] = _) : _ = t[20], _
    }
}));
async function U({
    orbitId: e,
    accountId: t,
    userId: n,
    signal: r
}) {
    let i = () => {
            r.throwIfAborted();
            let e = m();
            if (s() || e?.account?.id !== t || e.user?.id !== n) throw Error(`Account changed`);
            return e
        },
        a = i(),
        {
            detailed_explanation: l
        } = await o.safeGet(`/tbo/{tbo_id}/misalignment-review`, {
            parameters: {
                path: {
                    tbo_id: e
                }
            },
            accessToken: a.accessToken,
            additionalHeaders: {
                [c]: t
            },
            disableAutomaticRetry: !0,
            cache: `no-store`,
            referrerPolicy: `no-referrer`,
            signal: r
        });
    return i(), l?.trim() ? l : null
}
var W = e((() => {
        l(), h(), f()
    })),
    G, K, q, J, Y, X, Z = e((() => {
        G = D(), u(), l(), E(), K = t(T()), g(), I(), H(), W(), q = _(), J = F().trim().min(1).max(512), Y = () => {
            "use forget";
            let e = (0, G.c)(9),
                t = S(),
                [r] = v(),
                i = J.safeParse(r.get(`orbit_id`)),
                a = (0, K.useSyncExternalStore)(p, m, m),
                o = (0, K.useSyncExternalStore)(p, s, s),
                c = a?.account?.id,
                l = a?.user?.id,
                u;
            e[0] === t ? u = e[1] : (u = () => void t(`/`, {
                replace: !0
            }), e[0] = t, e[1] = u);
            let d = u;
            if (!i.success || !c || !l || o) return (0, q.jsx)(V, {
                explanation: null,
                loading: !1,
                onClose: d,
                onSignIn: i.success && a == null ? () => {
                    n({
                        callbackUrl: `/misalignment-review?${new URLSearchParams({orbit_id:i.data})}`,
                        fallbackScreenHint: `login`,
                        useFallbackScreenHint: !0
                    })
                } : void 0
            });
            let f = X,
                h = JSON.stringify([c, l, i.data]),
                g;
            return e[2] !== f || e[3] !== c || e[4] !== d || e[5] !== h || e[6] !== i.data || e[7] !== l ? (g = (0, q.jsx)(f, {
                orbitId: i.data,
                accountId: c,
                userId: l,
                onClose: d
            }, h), e[2] = f, e[3] = c, e[4] = d, e[5] = h, e[6] = i.data, e[7] = l, e[8] = g) : g = e[8], g
        }, X = e => {
            "use forget";
            let t = (0, G.c)(12),
                {
                    orbitId: n,
                    accountId: r,
                    userId: i,
                    onClose: a
                } = e,
                o;
            t[0] !== r || t[1] !== n || t[2] !== i ? (o = {
                queryKey: [`orbit-safety-findings`, r, i, n],
                queryFn: e => {
                    let {
                        signal: t
                    } = e;
                    return U({
                        orbitId: n,
                        accountId: r,
                        userId: i,
                        signal: t
                    })
                },
                staleTime: 0,
                gcTime: 0,
                retry: !1,
                refetchOnMount: `always`,
                throwOnError: !1
            }, t[0] = r, t[1] = n, t[2] = i, t[3] = o) : o = t[3];
            let {
                data: s,
                isPending: c,
                isError: l,
                refetch: u
            } = x(o), d = l ? null : s ?? null, f;
            t[4] !== l || t[5] !== u ? (f = l ? () => void u() : void 0, t[4] = l, t[5] = u, t[6] = f) : f = t[6];
            let p;
            return t[7] !== c || t[8] !== a || t[9] !== d || t[10] !== f ? (p = (0, q.jsx)(V, {
                explanation: d,
                loading: c,
                onClose: a,
                onRetry: f
            }), t[7] = c, t[8] = a, t[9] = d, t[10] = f, t[11] = p) : p = t[11], p
        }
    })),
    Q, $ = e((() => {
        g(), Z(), Q = w(Y)
    }));
e((() => {
    $()
}))();
export {
    Q as
    default
};
//# sourceMappingURL=misalignment-review-dly1jfjm.js.map