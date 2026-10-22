const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/d9b4ed06-jfbaqq62y4wn59o1.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-d7xm9wsvhdfbag9a.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-m7dgsxtvvivh3e6t.js", "assets/30901919-lc79rizhhepnsl3q.js", "assets/c470f5ab-lnsrbaizit3lulwq.js", "assets/0e5afe53-lar0ol3v36kqq3ou.js", "assets/conversation-small-ertg9659.css", "assets/8b34dbc2-ik628tlti8ozm9vq.js", "assets/82782bc9-cyj0qqxyrvk6mamy.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as n,
    CN as r,
    IU as i,
    J5 as a,
    LU as o,
    bF as s,
    c2 as c,
    d2 as l,
    fW as u,
    uW as d,
    vF as f,
    wN as ee
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    Bn as p,
    N as te,
    Nt as ne,
    O as re,
    Q as m,
    Rn as ie,
    Vn as h,
    cn as ae,
    ln as g,
    s as _,
    wn as v,
    zn as oe
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    AOt as se,
    Cft as y,
    Dft as b,
    HOt as x,
    Mft as S,
    Nft as C,
    Oft as w,
    Sft as ce,
    Tft as T,
    cft as E,
    kft as D,
    lft as O,
    nft as k,
    oft as A,
    sft as le,
    tft as j,
    uft as M,
    wft as ue
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    $d as de,
    Cf as N,
    Qd as P,
    Sf as F,
    Tf as I,
    Xd as fe,
    Yd as L,
    _f as R,
    bf as z,
    ff as B,
    hf as pe,
    pf as V,
    vf as me,
    wf as H,
    yf as U
} from "./8b34dbc2-ik628tlti8ozm9vq.js";
var W, G, K, q, J, Y, X = e((() => {
        W = v(), f(), u(), c(), R(), x(), B(), n(), o(), r(), _(), G = t(h()), ie(), m(), N(), P(), D(), T(), y(), E(), A(), k(), L(), K = p(), g(), q = `saved-entities-save-success`, J = e => {
            "use forget";
            let t = (0, W.c)(5),
                n;
            t[0] === e.request.saved_target ? n = t[1] : (n = j(e.request.saved_target), t[0] = e.request.saved_target, t[1] = n);
            let r = n,
                i;
            return t[2] !== e || t[3] !== r ? (i = (0, K.jsx)(Y, {
                ...e
            }, r), t[2] = e, t[3] = r, t[4] = i) : i = t[4], i
        }, Y = ({
            analyticsSource: e,
            analyticsSurface: t = z.PRODUCT_SIDEBAR,
            assistantMessageId: n,
            className: r,
            clientThreadId: o,
            messageId: c,
            request: u
        }) => {
            "use no forget";
            let f = s(),
                p = a(() => f?.serverId$()),
                m = oe(),
                ie = ne(),
                h = te(),
                g = C(u.saved_target.sidebar_params.category),
                _ = fe(g ? u : null),
                v = re({
                    ...M,
                    enabled: g,
                    refetchOnMount: !0,
                    retryOnMount: !0
                }),
                [y, b] = (0, G.useState)(),
                [x, S] = (0, G.useState)(!1),
                [w, T] = (0, G.useState)(!1),
                E = (0, G.useRef)(null),
                D = (0, G.useRef)(null),
                k = (0, G.useRef)(null),
                A = (0, G.useRef)(null),
                j = (0, G.useRef)(null),
                N = m.formatMessage(O.updateFailed),
                P = m.formatMessage(O.moveFailed),
                L = de({
                    onToggleError: () => {
                        i().danger(N), d(N, {
                            priority: `high`
                        })
                    }
                }),
                R = !_.isLoading && _.isSaved,
                {
                    libraryFileId: B
                } = _,
                W = n => t === z.SAVE_TOAST ? void 0 : me({
                    entityKind: pe(void 0, u.saved_target),
                    surface: t,
                    source: e ?? (t === z.LIBRARY_LIST || t === z.LIBRARY_GRID ? `library` : f != null || o != null ? `conversation` : `unknown`),
                    action: n
                }),
                J = e => {
                    let r = E.current;
                    if (r != null) return r.claimedByFolder ||= e, r;
                    let i = F();
                    H({
                        clickType: `save`,
                        target: u.saved_target,
                        surface: t,
                        clientThreadId: o,
                        messageId: c,
                        assistantMessageId: n
                    });
                    let a = p != null && n != null ? {
                            ...u,
                            origin: {
                                conversation_id: p,
                                message_id: n
                            }
                        } : u,
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
                            E.current?.promise === s && (E.current = null)
                        }),
                        l = {
                            claimedByFolder: e,
                            promise: s,
                            startedAtMs: i
                        };
                    return E.current = l, l
                },
                Y = async e => {
                    try {
                        if (await e.promise, e.claimedByFolder) return;
                        A.current = V({
                            intl: m,
                            kind: `added`,
                            id: q,
                            onView: () => H({
                                clickType: `toast_action`,
                                target: u.saved_target,
                                surface: z.SAVE_TOAST,
                                clientThreadId: o,
                                messageId: c,
                                assistantMessageId: n
                            })
                        }), I({
                            event: U.SUCCESS_TOAST_RENDERED,
                            target: u.saved_target,
                            surface: z.SAVE_TOAST,
                            action: `save`,
                            clickToSuccessToastMs: F() - e.startedAtMs
                        })
                    } catch {}
                }, X = () => {
                    let e = F();
                    H({
                        clickType: `unsave`,
                        target: u.saved_target,
                        surface: t,
                        clientThreadId: o,
                        messageId: c,
                        assistantMessageId: n
                    }), S(!0);
                    let r = L.mutateAsync({
                        request: u,
                        isSaved: !0,
                        analyticsSurface: t,
                        globalFavoritesAnalytics: W(`unsave`),
                        startedAtMs: e
                    }).then(() => {
                        b(void 0), A.current?.close(), A.current = null, j.current?.close(), j.current = null, V({
                            intl: m,
                            kind: `removed`
                        })
                    }).catch(() => {}).finally(() => {
                        D.current === r && (D.current = null, S(!1))
                    });
                    D.current = r
                }, Z = () => {
                    if (!(E.current != null || D.current != null || k.current != null)) {
                        if (R) {
                            X();
                            return
                        }
                        Y(J(!1))
                    }
                }, Q = (e, t = `added`) => {
                    if (D.current != null || k.current != null) return;
                    let r = y === e.id,
                        a = E.current ?? (!R || B == null ? J(!0) : null);
                    a != null && (a.claimedByFolder = !0), T(!0);
                    let s = (async () => {
                        let s = null;
                        if (a != null) try {
                            s = await a.promise
                        } catch {
                            return
                        }
                        let l = s?.library_file_id ?? B;
                        try {
                            if (l == null) throw Error(`Saved entity response did not include a Library file ID.`);
                            let i = await ae(() => import(`./d9b4ed06-jfbaqq62y4wn59o1.js`), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
                            if (await i.moveSavedEntityLibraryFile({
                                    directoryId: r ? null : e.id,
                                    libraryFileId: l,
                                    queryClient: h
                                }), b(r ? void 0 : e.id), j.current?.close(), j.current = null, r) return;
                            A.current?.close(), A.current = null, j.current = le({
                                folder: e,
                                intl: m,
                                kind: t,
                                onView: () => {
                                    H({
                                        clickType: `toast_action`,
                                        target: u.saved_target,
                                        surface: z.SAVE_TOAST,
                                        clientThreadId: o,
                                        messageId: c,
                                        assistantMessageId: n
                                    }), ie(i.getSavedEntityFolderPath(e.id))
                                }
                            }), a != null && I({
                                event: U.SUCCESS_TOAST_RENDERED,
                                target: u.saved_target,
                                surface: z.SAVE_TOAST,
                                action: `save`,
                                clickToSuccessToastMs: F() - a.startedAtMs
                            })
                        } catch (e) {
                            i().danger(P, {
                                error: e
                            }), d(P, {
                                priority: `high`
                            })
                        }
                    })().finally(() => {
                        k.current === s && (k.current = null, T(!1))
                    });
                    k.current = s
                }, $ = ee(e => {
                    h.cancelQueries({
                        queryKey: M.queryKey,
                        exact: !0
                    }).then(() => {
                        h.setQueryData(M.queryKey, (t = []) => [...t.filter(({
                            id: t
                        }) => t !== e.id), e].sort(se)), h.invalidateQueries({
                            queryKey: M.queryKey,
                            exact: !0
                        })
                    }), Q(e, `created`)
                });
            return !g || _.isError || !R && n != null && f != null && p == null ? null : (0, K.jsx)(ce, {
                className: r,
                folders: v.data ?? [],
                isBusy: x || w,
                isCheckingStatus: _.isLoading,
                isFolderError: v.isError && v.data == null,
                isFolderLoading: v.isLoading,
                isSaved: R,
                onCreateFolder: () => {
                    l(ue, {
                        onCreated: $
                    })
                },
                onOpenChange: e => {
                    e && h.prefetchQuery(M)
                },
                onRetryFolders: () => {
                    v.refetch()
                },
                onSelectFolder: Q,
                onToggleFavorite: Z,
                selectedFolderId: y
            })
        }
    })),
    Z, Q, $, he = e((() => {
        Z = v(), D(), w(), X(), Q = p(), $ = e => {
            "use forget";
            let t = (0, Z.c)(10),
                n, r, i, a;
            if (t[0] !== e) {
                let {
                    visibility: o,
                    ...s
                } = e;
                n = s, a = o === void 0 ? `always` : o, i = S, r = C(n.request.saved_target.sidebar_params.category), t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a
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
                className: b,
                children: s
            }) : s, t[7] = s, t[8] = a, t[9] = c) : c = t[9], c
        }
    }));
export {
    he as n, $ as t
};
//# sourceMappingURL=a5f68020-ikmbgf73sagg1fdx.js.map