const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/d9b4ed06-jwa4rli6o8ldkp5l.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-itnrgnth03y1sm9d.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-i79e9c315w50am5f.js", "assets/30901919-ikyi1r55w2i02fom.js", "assets/c470f5ab-lpy67c9in1skobas.js", "assets/0e5afe53-jfvcgv06snw44wce.js", "assets/conversation-small-dl8qqd6x.css", "assets/8b34dbc2-m4883pai3e8fx8q6.js", "assets/82782bc9-o75a7wf6pmueiskp.js"]))) => i.map(i => d[i]);
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
} from "./4813494d-itnrgnth03y1sm9d.js";
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
    Mft as ce,
    Oft as S,
    Sft as C,
    aft as w,
    cft as T,
    eft as E,
    jft as D,
    lft as O,
    oft as le,
    sft as k,
    tft as A,
    wft as j,
    xft as ue,
    zOt as M
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    Cf as N,
    Jd as P,
    Qd as de,
    Sf as F,
    Yd as fe,
    Zd as I,
    _f as pe,
    df as L,
    ff as R,
    gf as z,
    mf as me,
    vf as B,
    wf as V,
    xf as H,
    yf as U
} from "./8b34dbc2-m4883pai3e8fx8q6.js";
var W, G, K, q, J, Y, X = e((() => {
        W = y(), f(), c(), o(), z(), M(), L(), l(), i(), n(), v(), G = t(g()), h(), m(), F(), I(), S(), j(), C(), k(), w(), A(), P(), K = p(), _(), q = `saved-entities-save-success`, J = e => {
            "use forget";
            let t = (0, W.c)(5),
                n;
            t[0] === e.request.saved_target ? n = t[1] : (n = E(e.request.saved_target), t[0] = e.request.saved_target, t[1] = n);
            let r = n,
                i;
            return t[2] !== e || t[3] !== r ? (i = (0, K.jsx)(Y, {
                ...e
            }, r), t[2] = e, t[3] = r, t[4] = i) : i = t[4], i
        }, Y = ({
            analyticsSource: e,
            analyticsSurface: t = U.PRODUCT_SIDEBAR,
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
                _ = ce(l.saved_target.sidebar_params.category),
                v = fe(_ ? l : null),
                y = re({
                    ...O,
                    enabled: _,
                    refetchOnMount: !0,
                    retryOnMount: !0
                }),
                [b, x] = (0, G.useState)(),
                [S, C] = (0, G.useState)(!1),
                [w, E] = (0, G.useState)(!1),
                D = (0, G.useRef)(null),
                k = (0, G.useRef)(null),
                A = (0, G.useRef)(null),
                j = (0, G.useRef)(null),
                M = (0, G.useRef)(null),
                P = m.formatMessage(T.updateFailed),
                F = m.formatMessage(T.moveFailed),
                I = de({
                    onToggleError: () => {
                        r().danger(P), d(P, {
                            priority: `high`
                        })
                    }
                }),
                L = !v.isLoading && v.isSaved,
                {
                    libraryFileId: z
                } = v,
                W = n => t === U.SAVE_TOAST ? void 0 : pe({
                    entityKind: me(void 0, l.saved_target),
                    surface: t,
                    source: e ?? (t === U.LIBRARY_LIST || t === U.LIBRARY_GRID ? `library` : f != null || o != null ? `conversation` : `unknown`),
                    action: n
                }),
                J = e => {
                    let r = D.current;
                    if (r != null) return r.claimedByFolder ||= e, r;
                    let i = H();
                    N({
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
                        s = I.mutateAsync({
                            request: a,
                            isSaved: !1,
                            analyticsSurface: t,
                            globalFavoritesAnalytics: e ? void 0 : W(`save`),
                            startedAtMs: i
                        }).then(e => {
                            if (e == null) throw Error(`Saved entity response was empty.`);
                            return e
                        }).finally(() => {
                            D.current?.promise === s && (D.current = null)
                        }),
                        u = {
                            claimedByFolder: e,
                            promise: s,
                            startedAtMs: i
                        };
                    return D.current = u, u
                },
                Y = async e => {
                    try {
                        if (await e.promise, e.claimedByFolder) return;
                        j.current = R({
                            intl: m,
                            kind: `added`,
                            id: q,
                            onView: () => N({
                                clickType: `toast_action`,
                                target: l.saved_target,
                                surface: U.SAVE_TOAST,
                                clientThreadId: o,
                                messageId: c,
                                assistantMessageId: n
                            })
                        }), V({
                            event: B.SUCCESS_TOAST_RENDERED,
                            target: l.saved_target,
                            surface: U.SAVE_TOAST,
                            action: `save`,
                            clickToSuccessToastMs: H() - e.startedAtMs
                        })
                    } catch {}
                }, X = () => {
                    let e = H();
                    N({
                        clickType: `unsave`,
                        target: l.saved_target,
                        surface: t,
                        clientThreadId: o,
                        messageId: c,
                        assistantMessageId: n
                    }), C(!0);
                    let r = I.mutateAsync({
                        request: l,
                        isSaved: !0,
                        analyticsSurface: t,
                        globalFavoritesAnalytics: W(`unsave`),
                        startedAtMs: e
                    }).then(() => {
                        x(void 0), j.current?.close(), j.current = null, M.current?.close(), M.current = null, R({
                            intl: m,
                            kind: `removed`
                        })
                    }).catch(() => {}).finally(() => {
                        k.current === r && (k.current = null, C(!1))
                    });
                    k.current = r
                }, Z = () => {
                    if (!(D.current != null || k.current != null || A.current != null)) {
                        if (L) {
                            X();
                            return
                        }
                        Y(J(!1))
                    }
                }, Q = (e, t = `added`) => {
                    if (k.current != null || A.current != null) return;
                    let i = b === e.id,
                        a = D.current ?? (!L || z == null ? J(!0) : null);
                    a != null && (a.claimedByFolder = !0), E(!0);
                    let s = (async () => {
                        let s = null;
                        if (a != null) try {
                            s = await a.promise
                        } catch {
                            return
                        }
                        let u = s?.library_file_id ?? z;
                        try {
                            if (u == null) throw Error(`Saved entity response did not include a Library file ID.`);
                            let r = await ie(() => import(`./d9b4ed06-jwa4rli6o8ldkp5l.js`), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
                            if (await r.moveSavedEntityLibraryFile({
                                    directoryId: i ? null : e.id,
                                    libraryFileId: u,
                                    queryClient: g
                                }), x(i ? void 0 : e.id), M.current?.close(), M.current = null, i) return;
                            j.current?.close(), j.current = null, M.current = le({
                                folder: e,
                                intl: m,
                                kind: t,
                                onView: () => {
                                    N({
                                        clickType: `toast_action`,
                                        target: l.saved_target,
                                        surface: U.SAVE_TOAST,
                                        clientThreadId: o,
                                        messageId: c,
                                        assistantMessageId: n
                                    }), h(r.getSavedEntityFolderPath(e.id))
                                }
                            }), a != null && V({
                                event: B.SUCCESS_TOAST_RENDERED,
                                target: l.saved_target,
                                surface: U.SAVE_TOAST,
                                action: `save`,
                                clickToSuccessToastMs: H() - a.startedAtMs
                            })
                        } catch (e) {
                            r().danger(F, {
                                error: e
                            }), d(F, {
                                priority: `high`
                            })
                        }
                    })().finally(() => {
                        A.current === s && (A.current = null, E(!1))
                    });
                    A.current = s
                }, $ = ee(e => {
                    g.cancelQueries({
                        queryKey: O.queryKey,
                        exact: !0
                    }).then(() => {
                        g.setQueryData(O.queryKey, (t = []) => [...t.filter(({
                            id: t
                        }) => t !== e.id), e].sort(se)), g.invalidateQueries({
                            queryKey: O.queryKey,
                            exact: !0
                        })
                    }), Q(e, `created`)
                });
            return !_ || v.isError || !L && n != null && f != null && p == null ? null : (0, K.jsx)(ue, {
                className: i,
                folders: y.data ?? [],
                isBusy: S || w,
                isCheckingStatus: v.isLoading,
                isFolderError: y.isError && y.data == null,
                isFolderLoading: y.isLoading,
                isSaved: L,
                onCreateFolder: () => {
                    s(oe, {
                        onCreated: $
                    })
                },
                onOpenChange: e => {
                    e && g.prefetchQuery(O)
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
        Z = y(), S(), b(), X(), Q = p(), $ = e => {
            "use forget";
            let t = (0, Z.c)(10),
                n, r, i, a;
            if (t[0] !== e) {
                let {
                    visibility: o,
                    ...s
                } = e;
                n = s, a = o === void 0 ? `always` : o, i = D, r = ce(n.request.saved_target.sidebar_params.category), t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a
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
//# sourceMappingURL=a5f68020-odd53djtkb7qxpnl.js.map