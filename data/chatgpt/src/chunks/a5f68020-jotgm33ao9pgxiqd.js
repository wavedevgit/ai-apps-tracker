const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/d9b4ed06-girc1b4vxwmf9l1p.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/conversation-small-fym1zmu9zimymmm1.js", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css", "assets/8b34dbc2-gf9wnwcahty27ylx.js", "assets/82782bc9-h658ejxn3ufkvr7a.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $M as n,
    B6 as r,
    BU as i,
    HU as a,
    JP as o,
    O0 as s,
    T0 as c,
    XP as l,
    eN as u,
    fU as d,
    i5 as ee,
    pU as f
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as p,
    Bn as m,
    N as te,
    O as ne,
    Pt as re,
    Rn as h,
    Vn as g,
    cn as ie,
    ln as _,
    s as v,
    wn as y,
    zn as ae
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Cft as oe,
    Dft as b,
    EOt as se,
    Eft as x,
    Mft as S,
    Oft as C,
    ROt as w,
    Sft as T,
    aft as E,
    cft as D,
    eft as O,
    jft as k,
    lft as A,
    oft as ce,
    sft as j,
    tft as M,
    wft as N,
    xft as le
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Gd as P,
    Jd as F,
    Kd as ue,
    Yd as de,
    bf as I,
    cf as L,
    df as fe,
    gf as R,
    hf as z,
    lf as B,
    mf as pe,
    pf as V,
    vf as H,
    xf as U,
    yf as W
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
var G, K, q, J, Y, X, me = e((() => {
        G = y(), o(), a(), c(), V(), w(), L(), r(), f(), n(), v(), K = t(g()), h(), p(), W(), F(), C(), N(), T(), j(), E(), M(), P(), q = m(), _(), J = `saved-entities-save-success`, Y = e => {
            "use forget";
            let t = (0, G.c)(5),
                n;
            t[0] === e.request.saved_target ? n = t[1] : (n = O(e.request.saved_target), t[0] = e.request.saved_target, t[1] = n);
            let r = n,
                i;
            return t[2] !== e || t[3] !== r ? (i = (0, q.jsx)(X, {
                ...e
            }, r), t[2] = e, t[3] = r, t[4] = i) : i = t[4], i
        }, X = ({
            analyticsSource: e,
            analyticsSurface: t = R.PRODUCT_SIDEBAR,
            assistantMessageId: n,
            className: r,
            clientThreadId: a,
            messageId: o,
            request: c
        }) => {
            "use no forget";
            let f = l(),
                p = ee(() => f?.serverId$()),
                m = ae(),
                h = re(),
                g = te(),
                _ = S(c.saved_target.sidebar_params.category),
                v = ue(_ ? c : null),
                y = ne({
                    ...A,
                    enabled: _,
                    refetchOnMount: !0,
                    retryOnMount: !0
                }),
                [b, x] = (0, K.useState)(),
                [C, w] = (0, K.useState)(!1),
                [T, E] = (0, K.useState)(!1),
                O = (0, K.useRef)(null),
                k = (0, K.useRef)(null),
                j = (0, K.useRef)(null),
                M = (0, K.useRef)(null),
                N = (0, K.useRef)(null),
                P = m.formatMessage(D.updateFailed),
                F = m.formatMessage(D.moveFailed),
                L = de({
                    onToggleError: () => {
                        d().danger(P), i(P, {
                            priority: `high`
                        })
                    }
                }),
                V = !v.isLoading && v.isSaved,
                {
                    libraryFileId: W
                } = v,
                G = n => t === R.SAVE_TOAST ? void 0 : pe({
                    entityKind: fe(void 0, c.saved_target),
                    surface: t,
                    source: e ?? (t === R.LIBRARY_LIST || t === R.LIBRARY_GRID ? `library` : f != null || a != null ? `conversation` : `unknown`),
                    action: n
                }),
                Y = e => {
                    let r = O.current;
                    if (r != null) return r.claimedByFolder ||= e, r;
                    let i = H();
                    I({
                        clickType: `save`,
                        target: c.saved_target,
                        surface: t,
                        clientThreadId: a,
                        messageId: o,
                        assistantMessageId: n
                    });
                    let s = p != null && n != null ? {
                            ...c,
                            origin: {
                                conversation_id: p,
                                message_id: n
                            }
                        } : c,
                        l = L.mutateAsync({
                            request: s,
                            isSaved: !1,
                            analyticsSurface: t,
                            globalFavoritesAnalytics: e ? void 0 : G(`save`),
                            startedAtMs: i
                        }).then(e => {
                            if (e == null) throw Error(`Saved entity response was empty.`);
                            return e
                        }).finally(() => {
                            O.current?.promise === l && (O.current = null)
                        }),
                        u = {
                            claimedByFolder: e,
                            promise: l,
                            startedAtMs: i
                        };
                    return O.current = u, u
                },
                X = async e => {
                    try {
                        if (await e.promise, e.claimedByFolder) return;
                        M.current = B({
                            intl: m,
                            kind: `added`,
                            id: J,
                            onView: () => I({
                                clickType: `toast_action`,
                                target: c.saved_target,
                                surface: R.SAVE_TOAST,
                                clientThreadId: a,
                                messageId: o,
                                assistantMessageId: n
                            })
                        }), U({
                            event: z.SUCCESS_TOAST_RENDERED,
                            target: c.saved_target,
                            surface: R.SAVE_TOAST,
                            action: `save`,
                            clickToSuccessToastMs: H() - e.startedAtMs
                        })
                    } catch {}
                }, me = () => {
                    let e = H();
                    I({
                        clickType: `unsave`,
                        target: c.saved_target,
                        surface: t,
                        clientThreadId: a,
                        messageId: o,
                        assistantMessageId: n
                    }), w(!0);
                    let r = L.mutateAsync({
                        request: c,
                        isSaved: !0,
                        analyticsSurface: t,
                        globalFavoritesAnalytics: G(`unsave`),
                        startedAtMs: e
                    }).then(() => {
                        x(void 0), M.current?.close(), M.current = null, N.current?.close(), N.current = null, B({
                            intl: m,
                            kind: `removed`
                        })
                    }).catch(() => {}).finally(() => {
                        k.current === r && (k.current = null, w(!1))
                    });
                    k.current = r
                }, Z = () => {
                    if (!(O.current != null || k.current != null || j.current != null)) {
                        if (V) {
                            me();
                            return
                        }
                        X(Y(!1))
                    }
                }, Q = (e, t = `added`) => {
                    if (k.current != null || j.current != null) return;
                    let r = b === e.id,
                        s = O.current ?? (!V || W == null ? Y(!0) : null);
                    s != null && (s.claimedByFolder = !0), E(!0);
                    let l = (async () => {
                        let l = null;
                        if (s != null) try {
                            l = await s.promise
                        } catch {
                            return
                        }
                        let u = l?.library_file_id ?? W;
                        try {
                            if (u == null) throw Error(`Saved entity response did not include a Library file ID.`);
                            let i = await ie(() => import(`./d9b4ed06-girc1b4vxwmf9l1p.js`), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
                            if (await i.moveSavedEntityLibraryFile({
                                    directoryId: r ? null : e.id,
                                    libraryFileId: u,
                                    queryClient: g
                                }), x(r ? void 0 : e.id), N.current?.close(), N.current = null, r) return;
                            M.current?.close(), M.current = null, N.current = ce({
                                folder: e,
                                intl: m,
                                kind: t,
                                onView: () => {
                                    I({
                                        clickType: `toast_action`,
                                        target: c.saved_target,
                                        surface: R.SAVE_TOAST,
                                        clientThreadId: a,
                                        messageId: o,
                                        assistantMessageId: n
                                    }), h(i.getSavedEntityFolderPath(e.id))
                                }
                            }), s != null && U({
                                event: z.SUCCESS_TOAST_RENDERED,
                                target: c.saved_target,
                                surface: R.SAVE_TOAST,
                                action: `save`,
                                clickToSuccessToastMs: H() - s.startedAtMs
                            })
                        } catch (e) {
                            d().danger(F, {
                                error: e
                            }), i(F, {
                                priority: `high`
                            })
                        }
                    })().finally(() => {
                        j.current === l && (j.current = null, E(!1))
                    });
                    j.current = l
                }, $ = u(e => {
                    g.cancelQueries({
                        queryKey: A.queryKey,
                        exact: !0
                    }).then(() => {
                        g.setQueryData(A.queryKey, (t = []) => [...t.filter(({
                            id: t
                        }) => t !== e.id), e].sort(se)), g.invalidateQueries({
                            queryKey: A.queryKey,
                            exact: !0
                        })
                    }), Q(e, `created`)
                });
            return !_ || v.isError || !V && n != null && f != null && p == null ? null : (0, q.jsx)(le, {
                className: r,
                folders: y.data ?? [],
                isBusy: C || T,
                isCheckingStatus: v.isLoading,
                isFolderError: y.isError && y.data == null,
                isFolderLoading: y.isLoading,
                isSaved: V,
                onCreateFolder: () => {
                    s(oe, {
                        onCreated: $
                    })
                },
                onOpenChange: e => {
                    e && g.prefetchQuery(A)
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
        Z = y(), C(), b(), me(), Q = m(), $ = e => {
            "use forget";
            let t = (0, Z.c)(10),
                n, r, i, a;
            if (t[0] !== e) {
                let {
                    visibility: o,
                    ...s
                } = e;
                n = s, a = o === void 0 ? `always` : o, i = k, r = S(n.request.saved_target.sidebar_params.category), t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a
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
                className: x,
                children: s
            }) : s, t[7] = s, t[8] = a, t[9] = c) : c = t[9], c
        }
    }));
export {
    he as n, $ as t
};
//# sourceMappingURL=a5f68020-jotgm33ao9pgxiqd.js.map