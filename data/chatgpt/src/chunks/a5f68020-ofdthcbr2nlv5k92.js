const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/d9b4ed06-irmcdljba8h0v3g1.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-r54yv6lv29x4ew99.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-dwpaie1hln28efxb.js", "assets/30901919-k5uqyx4vyplt9toa.js", "assets/c470f5ab-bhx5jraq636jc4ww.js", "assets/0e5afe53-d830ix843j2kh0p0.js", "assets/conversation-small-gfjfeahf.css", "assets/8b34dbc2-bgocf3s6t6l67twq.js", "assets/82782bc9-loong612qtaq7sd9.js"]))) => i.map(i => d[i]);
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
} from "./4813494d-r54yv6lv29x4ew99.js";
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
    DOt as oe,
    Eft as S,
    Qdt as C,
    Sft as w,
    Tft as T,
    aft as E,
    bft as D,
    ift as se,
    kft as O,
    oft as ce,
    rft as k,
    sft as A,
    wft as j,
    xft as le,
    yft as ue,
    zOt as M
} from "./conversation-small-dwpaie1hln28efxb.js";
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
} from "./8b34dbc2-bgocf3s6t6l67twq.js";
var W, G, K, q, J, Y, X = e((() => {
        W = y(), f(), u(), c(), R(), M(), B(), n(), o(), r(), v(), G = t(g()), h(), m(), N(), P(), S(), w(), D(), E(), k(), b(), L(), K = p(), _(), q = `saved-entities-save-success`, J = e => {
            "use forget";
            let t = (0, W.c)(5),
                n;
            t[0] === e.request.saved_target ? n = t[1] : (n = C(e.request.saved_target), t[0] = e.request.saved_target, t[1] = n);
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
                m = ae(),
                h = ne(),
                g = te(),
                _ = x(u.saved_target.sidebar_params.category),
                v = fe(_ ? u : null),
                y = re({
                    ...A,
                    enabled: _,
                    refetchOnMount: !0,
                    retryOnMount: !0
                }),
                [b, S] = (0, G.useState)(),
                [C, w] = (0, G.useState)(!1),
                [T, E] = (0, G.useState)(!1),
                D = (0, G.useRef)(null),
                O = (0, G.useRef)(null),
                k = (0, G.useRef)(null),
                j = (0, G.useRef)(null),
                M = (0, G.useRef)(null),
                N = m.formatMessage(ce.updateFailed),
                P = m.formatMessage(ce.moveFailed),
                L = de({
                    onToggleError: () => {
                        i().danger(N), d(N, {
                            priority: `high`
                        })
                    }
                }),
                R = !v.isLoading && v.isSaved,
                {
                    libraryFileId: B
                } = v,
                W = n => t === z.SAVE_TOAST ? void 0 : me({
                    entityKind: pe(void 0, u.saved_target),
                    surface: t,
                    source: e ?? (t === z.LIBRARY_LIST || t === z.LIBRARY_GRID ? `library` : f != null || o != null ? `conversation` : `unknown`),
                    action: n
                }),
                J = e => {
                    let r = D.current;
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
                            D.current?.promise === s && (D.current = null)
                        }),
                        l = {
                            claimedByFolder: e,
                            promise: s,
                            startedAtMs: i
                        };
                    return D.current = l, l
                },
                Y = async e => {
                    try {
                        if (await e.promise, e.claimedByFolder) return;
                        j.current = V({
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
                    }), w(!0);
                    let r = L.mutateAsync({
                        request: u,
                        isSaved: !0,
                        analyticsSurface: t,
                        globalFavoritesAnalytics: W(`unsave`),
                        startedAtMs: e
                    }).then(() => {
                        S(void 0), j.current?.close(), j.current = null, M.current?.close(), M.current = null, V({
                            intl: m,
                            kind: `removed`
                        })
                    }).catch(() => {}).finally(() => {
                        O.current === r && (O.current = null, w(!1))
                    });
                    O.current = r
                }, Z = () => {
                    if (!(D.current != null || O.current != null || k.current != null)) {
                        if (R) {
                            X();
                            return
                        }
                        Y(J(!1))
                    }
                }, Q = (e, t = `added`) => {
                    if (O.current != null || k.current != null) return;
                    let r = b === e.id,
                        a = D.current ?? (!R || B == null ? J(!0) : null);
                    a != null && (a.claimedByFolder = !0), E(!0);
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
                            let i = await ie(() => import(`./d9b4ed06-irmcdljba8h0v3g1.js`), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
                            if (await i.moveSavedEntityLibraryFile({
                                    directoryId: r ? null : e.id,
                                    libraryFileId: l,
                                    queryClient: g
                                }), S(r ? void 0 : e.id), M.current?.close(), M.current = null, r) return;
                            j.current?.close(), j.current = null, M.current = se({
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
                                    }), h(i.getSavedEntityFolderPath(e.id))
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
                        k.current === s && (k.current = null, E(!1))
                    });
                    k.current = s
                }, $ = ee(e => {
                    g.cancelQueries({
                        queryKey: A.queryKey,
                        exact: !0
                    }).then(() => {
                        g.setQueryData(A.queryKey, (t = []) => [...t.filter(({
                            id: t
                        }) => t !== e.id), e].sort(oe)), g.invalidateQueries({
                            queryKey: A.queryKey,
                            exact: !0
                        })
                    }), Q(e, `created`)
                });
            return !_ || v.isError || !R && n != null && f != null && p == null ? null : (0, K.jsx)(ue, {
                className: r,
                folders: y.data ?? [],
                isBusy: C || T,
                isCheckingStatus: v.isLoading,
                isFolderError: y.isError && y.data == null,
                isFolderLoading: y.isLoading,
                isSaved: R,
                onCreateFolder: () => {
                    l(le, {
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
        Z = y(), S(), T(), X(), Q = p(), $ = e => {
            "use forget";
            let t = (0, Z.c)(10),
                n, r, i, a;
            if (t[0] !== e) {
                let {
                    visibility: o,
                    ...s
                } = e;
                n = s, a = o === void 0 ? `always` : o, i = O, r = x(n.request.saved_target.sidebar_params.category), t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a
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
                className: j,
                children: s
            }) : s, t[7] = s, t[8] = a, t[9] = c) : c = t[9], c
        }
    }));
export {
    he as n, $ as t
};
//# sourceMappingURL=a5f68020-ofdthcbr2nlv5k92.js.map