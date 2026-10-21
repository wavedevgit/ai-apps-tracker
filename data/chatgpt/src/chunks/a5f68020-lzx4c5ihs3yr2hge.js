const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/d9b4ed06-fc5elbjw0vw65duf.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-t80q9ew944ej0mgk.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-ocicxxw6jegn4vux.js", "assets/30901919-r9pahacmzqudnt4f.js", "assets/c470f5ab-py8gip6x11wq9s88.js", "assets/0e5afe53-bfccq9og5d2mon04.js", "assets/conversation-small-ht8gwtl7.css", "assets/8b34dbc2-egl8cz04n8nmlktg.js", "assets/82782bc9-dyzlhaxotei12n1t.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CN as n,
    IU as r,
    LU as i,
    bF as a,
    c2 as o,
    d2 as s,
    fW as c,
    k8 as l,
    q5 as u,
    uW as d,
    vF as f,
    wN as ee
} from "./4813494d-t80q9ew944ej0mgk.js";
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
    Cft as oe,
    DOt as se,
    Dft as b,
    Eft as x,
    Mft as S,
    Oft as C,
    Sft as w,
    aft as T,
    cft as E,
    eft as D,
    jft as O,
    lft as k,
    oft as ce,
    sft as A,
    tft as j,
    wft as M,
    xft as le,
    zOt as N
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    Kd as P,
    Sf as ue,
    Xd as de,
    Yd as F,
    _f as I,
    bf as L,
    ff as fe,
    gf as R,
    hf as pe,
    lf as z,
    mf as B,
    qd as me,
    uf as V,
    xf as H,
    yf as U
} from "./8b34dbc2-egl8cz04n8nmlktg.js";
var W, G, K, q, J, Y, X = e((() => {
        W = y(), f(), c(), o(), B(), N(), z(), l(), i(), n(), v(), G = t(g()), h(), m(), L(), F(), C(), M(), w(), A(), T(), j(), P(), K = p(), _(), q = `saved-entities-save-success`, J = e => {
            "use forget";
            let t = (0, W.c)(5),
                n;
            t[0] === e.request.saved_target ? n = t[1] : (n = D(e.request.saved_target), t[0] = e.request.saved_target, t[1] = n);
            let r = n,
                i;
            return t[2] !== e || t[3] !== r ? (i = (0, K.jsx)(Y, {
                ...e
            }, r), t[2] = e, t[3] = r, t[4] = i) : i = t[4], i
        }, Y = ({
            analyticsSource: e,
            analyticsSurface: t = I.PRODUCT_SIDEBAR,
            assistantMessageId: n,
            className: i,
            clientThreadId: o,
            messageId: c,
            request: l
        }) => {
            "use no forget";
            let f = a(),
                p = u(() => f?.serverId$()),
                m = ae(),
                h = ne(),
                g = te(),
                _ = S(l.saved_target.sidebar_params.category),
                v = me(_ ? l : null),
                y = re({
                    ...k,
                    enabled: _,
                    refetchOnMount: !0,
                    retryOnMount: !0
                }),
                [b, x] = (0, G.useState)(),
                [C, w] = (0, G.useState)(!1),
                [T, D] = (0, G.useState)(!1),
                O = (0, G.useRef)(null),
                A = (0, G.useRef)(null),
                j = (0, G.useRef)(null),
                M = (0, G.useRef)(null),
                N = (0, G.useRef)(null),
                P = m.formatMessage(E.updateFailed),
                F = m.formatMessage(E.moveFailed),
                L = de({
                    onToggleError: () => {
                        r().danger(P), d(P, {
                            priority: `high`
                        })
                    }
                }),
                z = !v.isLoading && v.isSaved,
                {
                    libraryFileId: B
                } = v,
                W = n => t === I.SAVE_TOAST ? void 0 : pe({
                    entityKind: fe(void 0, l.saved_target),
                    surface: t,
                    source: e ?? (t === I.LIBRARY_LIST || t === I.LIBRARY_GRID ? `library` : f != null || o != null ? `conversation` : `unknown`),
                    action: n
                }),
                J = e => {
                    let r = O.current;
                    if (r != null) return r.claimedByFolder ||= e, r;
                    let i = U();
                    H({
                        clickType: `save`,
                        target: l.saved_target,
                        surface: t,
                        clientThreadId: o,
                        messageId: c,
                        assistantMessageId: n
                    });
                    let a = p != null && n != null ? {
                            ...l,
                            origin: {
                                conversation_id: p,
                                message_id: n
                            }
                        } : l,
                        s = L.mutateAsync({
                            request: a,
                            isSaved: !1,
                            analyticsSurface: t,
                            globalFavoritesAnalytics: e ? void 0 : W(`save`),
                            startedAtMs: i
                        }).then(e => {
                            if (e == null) throw Error(`Saved entity response was empty.`);
                            return e
                        }).finally(() => {
                            O.current?.promise === s && (O.current = null)
                        }),
                        u = {
                            claimedByFolder: e,
                            promise: s,
                            startedAtMs: i
                        };
                    return O.current = u, u
                },
                Y = async e => {
                    try {
                        if (await e.promise, e.claimedByFolder) return;
                        M.current = V({
                            intl: m,
                            kind: `added`,
                            id: q,
                            onView: () => H({
                                clickType: `toast_action`,
                                target: l.saved_target,
                                surface: I.SAVE_TOAST,
                                clientThreadId: o,
                                messageId: c,
                                assistantMessageId: n
                            })
                        }), ue({
                            event: R.SUCCESS_TOAST_RENDERED,
                            target: l.saved_target,
                            surface: I.SAVE_TOAST,
                            action: `save`,
                            clickToSuccessToastMs: U() - e.startedAtMs
                        })
                    } catch {}
                }, X = () => {
                    let e = U();
                    H({
                        clickType: `unsave`,
                        target: l.saved_target,
                        surface: t,
                        clientThreadId: o,
                        messageId: c,
                        assistantMessageId: n
                    }), w(!0);
                    let r = L.mutateAsync({
                        request: l,
                        isSaved: !0,
                        analyticsSurface: t,
                        globalFavoritesAnalytics: W(`unsave`),
                        startedAtMs: e
                    }).then(() => {
                        x(void 0), M.current?.close(), M.current = null, N.current?.close(), N.current = null, V({
                            intl: m,
                            kind: `removed`
                        })
                    }).catch(() => {}).finally(() => {
                        A.current === r && (A.current = null, w(!1))
                    });
                    A.current = r
                }, Z = () => {
                    if (!(O.current != null || A.current != null || j.current != null)) {
                        if (z) {
                            X();
                            return
                        }
                        Y(J(!1))
                    }
                }, Q = (e, t = `added`) => {
                    if (A.current != null || j.current != null) return;
                    let i = b === e.id,
                        a = O.current ?? (!z || B == null ? J(!0) : null);
                    a != null && (a.claimedByFolder = !0), D(!0);
                    let s = (async () => {
                        let s = null;
                        if (a != null) try {
                            s = await a.promise
                        } catch {
                            return
                        }
                        let u = s?.library_file_id ?? B;
                        try {
                            if (u == null) throw Error(`Saved entity response did not include a Library file ID.`);
                            let r = await ie(() => import(`./d9b4ed06-fc5elbjw0vw65duf.js`), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
                            if (await r.moveSavedEntityLibraryFile({
                                    directoryId: i ? null : e.id,
                                    libraryFileId: u,
                                    queryClient: g
                                }), x(i ? void 0 : e.id), N.current?.close(), N.current = null, i) return;
                            M.current?.close(), M.current = null, N.current = ce({
                                folder: e,
                                intl: m,
                                kind: t,
                                onView: () => {
                                    H({
                                        clickType: `toast_action`,
                                        target: l.saved_target,
                                        surface: I.SAVE_TOAST,
                                        clientThreadId: o,
                                        messageId: c,
                                        assistantMessageId: n
                                    }), h(r.getSavedEntityFolderPath(e.id))
                                }
                            }), a != null && ue({
                                event: R.SUCCESS_TOAST_RENDERED,
                                target: l.saved_target,
                                surface: I.SAVE_TOAST,
                                action: `save`,
                                clickToSuccessToastMs: U() - a.startedAtMs
                            })
                        } catch (e) {
                            r().danger(F, {
                                error: e
                            }), d(F, {
                                priority: `high`
                            })
                        }
                    })().finally(() => {
                        j.current === s && (j.current = null, D(!1))
                    });
                    j.current = s
                }, $ = ee(e => {
                    g.cancelQueries({
                        queryKey: k.queryKey,
                        exact: !0
                    }).then(() => {
                        g.setQueryData(k.queryKey, (t = []) => [...t.filter(({
                            id: t
                        }) => t !== e.id), e].sort(se)), g.invalidateQueries({
                            queryKey: k.queryKey,
                            exact: !0
                        })
                    }), Q(e, `created`)
                });
            return !_ || v.isError || !z && n != null && f != null && p == null ? null : (0, K.jsx)(le, {
                className: i,
                folders: y.data ?? [],
                isBusy: C || T,
                isCheckingStatus: v.isLoading,
                isFolderError: y.isError && y.data == null,
                isFolderLoading: y.isLoading,
                isSaved: z,
                onCreateFolder: () => {
                    s(oe, {
                        onCreated: $
                    })
                },
                onOpenChange: e => {
                    e && g.prefetchQuery(k)
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
        Z = y(), C(), b(), X(), Q = p(), $ = e => {
            "use forget";
            let t = (0, Z.c)(10),
                n, r, i, a;
            if (t[0] !== e) {
                let {
                    visibility: o,
                    ...s
                } = e;
                n = s, a = o === void 0 ? `always` : o, i = O, r = S(n.request.saved_target.sidebar_params.category), t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a
            } else n = t[1], r = t[2], i = t[3], a = t[4];
            if (!i({
                    disableExposureLog: !r
                })) return null;
            let o;
            t[5] === n ? o = t[6] : (o = (0, Q.jsx)(J, {
                ...n
            }), t[5] = n, t[6] = o);
            let s = o,
                c;
            return t[7] !== s || t[8] !== a ? (c = a === `hover` ? (0, Q.jsx)(`div`, {
                className: x,
                children: s
            }) : s, t[7] = s, t[8] = a, t[9] = c) : c = t[9], c
        }
    }));
export {
    he as n, $ as t
};
//# sourceMappingURL=a5f68020-lzx4c5ihs3yr2hge.js.map