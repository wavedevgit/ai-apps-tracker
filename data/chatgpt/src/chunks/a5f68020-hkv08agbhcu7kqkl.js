const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/d9b4ed06-gv2smo5t3saglxnq.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-mdvd4786a87166cc.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-bcbq46iub1p0ca1t.js", "assets/30901919-s8bko9nrkqwv6i4f.js", "assets/c470f5ab-jwd0o7jx9i9say9k.js", "assets/0e5afe53-hxm3yzzjqriayom4.js", "assets/conversation-small-ep6mlz5m.css", "assets/8b34dbc2-lmwubajnld74ksfm.js", "assets/82782bc9-b4xbouzwkkyrfqq2.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as n,
    CN as r,
    IU as i,
    LU as a,
    bF as o,
    c2 as s,
    d2 as c,
    fW as l,
    j5 as u,
    uW as d,
    vF as f,
    wN as ee
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as p,
    N as te,
    Nt as ne,
    O as re,
    Q as m,
    Rn as h,
    Vn as g,
    cn as ie,
    ln as _,
    s as v,
    wn as y,
    zn as ae
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $dt as b,
    Aft as x,
    Eft as S,
    LOt as C,
    Qdt as w,
    Sft as T,
    TOt as oe,
    Tft as E,
    aft as D,
    bft as O,
    ift as se,
    kft as k,
    oft as A,
    rft as j,
    sft as M,
    wft as N,
    xft as ce,
    yft as le
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    $d as ue,
    Cf as P,
    Qd as F,
    Sf as I,
    Tf as L,
    Xd as de,
    Yd as R,
    _f as z,
    bf as B,
    ff as V,
    hf as fe,
    pf as H,
    vf as pe,
    wf as U,
    yf as W
} from "./8b34dbc2-lmwubajnld74ksfm.js";
var G, K, q, J, Y, X, me = e((() => {
        G = y(), f(), l(), s(), z(), C(), V(), n(), a(), r(), v(), K = t(g()), h(), m(), P(), F(), S(), T(), O(), D(), j(), b(), R(), q = p(), _(), J = `saved-entities-save-success`, Y = e => {
            "use forget";
            let t = (0, G.c)(5),
                n;
            t[0] === e.request.saved_target ? n = t[1] : (n = w(e.request.saved_target), t[0] = e.request.saved_target, t[1] = n);
            let r = n,
                i;
            return t[2] !== e || t[3] !== r ? (i = (0, q.jsx)(X, {
                ...e
            }, r), t[2] = e, t[3] = r, t[4] = i) : i = t[4], i
        }, X = ({
            analyticsSource: e,
            analyticsSurface: t = B.PRODUCT_SIDEBAR,
            assistantMessageId: n,
            className: r,
            clientThreadId: a,
            messageId: s,
            request: l
        }) => {
            "use no forget";
            let f = o(),
                p = u(() => f?.serverId$()),
                m = ae(),
                h = ne(),
                g = te(),
                _ = x(l.saved_target.sidebar_params.category),
                v = de(_ ? l : null),
                y = re({
                    ...M,
                    enabled: _,
                    refetchOnMount: !0,
                    retryOnMount: !0
                }),
                [b, S] = (0, K.useState)(),
                [C, w] = (0, K.useState)(!1),
                [T, E] = (0, K.useState)(!1),
                D = (0, K.useRef)(null),
                O = (0, K.useRef)(null),
                k = (0, K.useRef)(null),
                j = (0, K.useRef)(null),
                N = (0, K.useRef)(null),
                P = m.formatMessage(A.updateFailed),
                F = m.formatMessage(A.moveFailed),
                R = ue({
                    onToggleError: () => {
                        i().danger(P), d(P, {
                            priority: `high`
                        })
                    }
                }),
                z = !v.isLoading && v.isSaved,
                {
                    libraryFileId: V
                } = v,
                G = n => t === B.SAVE_TOAST ? void 0 : pe({
                    entityKind: fe(void 0, l.saved_target),
                    surface: t,
                    source: e ?? (t === B.LIBRARY_LIST || t === B.LIBRARY_GRID ? `library` : f != null || a != null ? `conversation` : `unknown`),
                    action: n
                }),
                Y = e => {
                    let r = D.current;
                    if (r != null) return r.claimedByFolder ||= e, r;
                    let i = I();
                    U({
                        clickType: `save`,
                        target: l.saved_target,
                        surface: t,
                        clientThreadId: a,
                        messageId: s,
                        assistantMessageId: n
                    });
                    let o = p != null && n != null ? {
                            ...l,
                            origin: {
                                conversation_id: p,
                                message_id: n
                            }
                        } : l,
                        c = R.mutateAsync({
                            request: o,
                            isSaved: !1,
                            analyticsSurface: t,
                            globalFavoritesAnalytics: e ? void 0 : G(`save`),
                            startedAtMs: i
                        }).then(e => {
                            if (e == null) throw Error(`Saved entity response was empty.`);
                            return e
                        }).finally(() => {
                            D.current?.promise === c && (D.current = null)
                        }),
                        u = {
                            claimedByFolder: e,
                            promise: c,
                            startedAtMs: i
                        };
                    return D.current = u, u
                },
                X = async e => {
                    try {
                        if (await e.promise, e.claimedByFolder) return;
                        j.current = H({
                            intl: m,
                            kind: `added`,
                            id: J,
                            onView: () => U({
                                clickType: `toast_action`,
                                target: l.saved_target,
                                surface: B.SAVE_TOAST,
                                clientThreadId: a,
                                messageId: s,
                                assistantMessageId: n
                            })
                        }), L({
                            event: W.SUCCESS_TOAST_RENDERED,
                            target: l.saved_target,
                            surface: B.SAVE_TOAST,
                            action: `save`,
                            clickToSuccessToastMs: I() - e.startedAtMs
                        })
                    } catch {}
                }, me = () => {
                    let e = I();
                    U({
                        clickType: `unsave`,
                        target: l.saved_target,
                        surface: t,
                        clientThreadId: a,
                        messageId: s,
                        assistantMessageId: n
                    }), w(!0);
                    let r = R.mutateAsync({
                        request: l,
                        isSaved: !0,
                        analyticsSurface: t,
                        globalFavoritesAnalytics: G(`unsave`),
                        startedAtMs: e
                    }).then(() => {
                        S(void 0), j.current?.close(), j.current = null, N.current?.close(), N.current = null, H({
                            intl: m,
                            kind: `removed`
                        })
                    }).catch(() => {}).finally(() => {
                        O.current === r && (O.current = null, w(!1))
                    });
                    O.current = r
                }, Z = () => {
                    if (!(D.current != null || O.current != null || k.current != null)) {
                        if (z) {
                            me();
                            return
                        }
                        X(Y(!1))
                    }
                }, Q = (e, t = `added`) => {
                    if (O.current != null || k.current != null) return;
                    let r = b === e.id,
                        o = D.current ?? (!z || V == null ? Y(!0) : null);
                    o != null && (o.claimedByFolder = !0), E(!0);
                    let c = (async () => {
                        let c = null;
                        if (o != null) try {
                            c = await o.promise
                        } catch {
                            return
                        }
                        let u = c?.library_file_id ?? V;
                        try {
                            if (u == null) throw Error(`Saved entity response did not include a Library file ID.`);
                            let i = await ie(() => import(`./d9b4ed06-gv2smo5t3saglxnq.js`), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
                            if (await i.moveSavedEntityLibraryFile({
                                    directoryId: r ? null : e.id,
                                    libraryFileId: u,
                                    queryClient: g
                                }), S(r ? void 0 : e.id), N.current?.close(), N.current = null, r) return;
                            j.current?.close(), j.current = null, N.current = se({
                                folder: e,
                                intl: m,
                                kind: t,
                                onView: () => {
                                    U({
                                        clickType: `toast_action`,
                                        target: l.saved_target,
                                        surface: B.SAVE_TOAST,
                                        clientThreadId: a,
                                        messageId: s,
                                        assistantMessageId: n
                                    }), h(i.getSavedEntityFolderPath(e.id))
                                }
                            }), o != null && L({
                                event: W.SUCCESS_TOAST_RENDERED,
                                target: l.saved_target,
                                surface: B.SAVE_TOAST,
                                action: `save`,
                                clickToSuccessToastMs: I() - o.startedAtMs
                            })
                        } catch (e) {
                            i().danger(F, {
                                error: e
                            }), d(F, {
                                priority: `high`
                            })
                        }
                    })().finally(() => {
                        k.current === c && (k.current = null, E(!1))
                    });
                    k.current = c
                }, $ = ee(e => {
                    g.cancelQueries({
                        queryKey: M.queryKey,
                        exact: !0
                    }).then(() => {
                        g.setQueryData(M.queryKey, (t = []) => [...t.filter(({
                            id: t
                        }) => t !== e.id), e].sort(oe)), g.invalidateQueries({
                            queryKey: M.queryKey,
                            exact: !0
                        })
                    }), Q(e, `created`)
                });
            return !_ || v.isError || !z && n != null && f != null && p == null ? null : (0, q.jsx)(le, {
                className: r,
                folders: y.data ?? [],
                isBusy: C || T,
                isCheckingStatus: v.isLoading,
                isFolderError: y.isError && y.data == null,
                isFolderLoading: y.isLoading,
                isSaved: z,
                onCreateFolder: () => {
                    c(ce, {
                        onCreated: $
                    })
                },
                onOpenChange: e => {
                    e && g.prefetchQuery(M)
                },
                onRetryFolders: () => {
                    y.refetch()
                },
                onSelectFolder: Q,
                onToggleFavorite: Z,
                selectedFolderId: b
            })
        }
    })),
    Z, Q, $, he = e((() => {
        Z = y(), S(), E(), me(), Q = p(), $ = e => {
            "use forget";
            let t = (0, Z.c)(10),
                n, r, i, a;
            if (t[0] !== e) {
                let {
                    visibility: o,
                    ...s
                } = e;
                n = s, a = o === void 0 ? `always` : o, i = k, r = x(n.request.saved_target.sidebar_params.category), t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a
            } else n = t[1], r = t[2], i = t[3], a = t[4];
            if (!i({
                    disableExposureLog: !r
                })) return null;
            let o;
            t[5] === n ? o = t[6] : (o = (0, Q.jsx)(Y, {
                ...n
            }), t[5] = n, t[6] = o);
            let s = o,
                c;
            return t[7] !== s || t[8] !== a ? (c = a === `hover` ? (0, Q.jsx)(`div`, {
                className: N,
                children: s
            }) : s, t[7] = s, t[8] = a, t[9] = c) : c = t[9], c
        }
    }));
export {
    he as n, $ as t
};
//# sourceMappingURL=a5f68020-hkv08agbhcu7kqkl.js.map