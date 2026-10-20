const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/d9b4ed06-p8rgahkqyuo5tef3.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-dfpv67hlp00pbohr.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-cy5f8pl0g26s86so.js", "assets/30901919-7dzdc1ou0jtwkwpt.js", "assets/c470f5ab-d4g7lc53n1e1ao7o.js", "assets/0e5afe53-o2mcfq1ky1uaktz5.js", "assets/conversation-small-j5v9ogf2.css", "assets/8b34dbc2-k1zgxrtsww83602u.js", "assets/82782bc9-mb60yg1xlggwvqri.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    N5 as n,
    Q0 as r,
    RU as i,
    _N as a,
    fF as o,
    fW as s,
    h8 as c,
    mF as l,
    mW as u,
    t2 as d,
    vN as ee,
    zU as f
} from "./4813494d-dfpv67hlp00pbohr.js";
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
    Aft as b,
    Dft as oe,
    Eft as x,
    Fft as S,
    Ift as C,
    Mft as w,
    Oft as T,
    Tft as se,
    UOt as E,
    aft as D,
    dft as O,
    fft as k,
    ift as A,
    jOt as ce,
    jft as j,
    lft as M,
    pft as N,
    uft as le
} from "./conversation-small-cy5f8pl0g26s86so.js";
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
} from "./8b34dbc2-k1zgxrtsww83602u.js";
var W, G, K, q, J, Y, X = e((() => {
        W = y(), o(), u(), r(), B(), E(), z(), c(), f(), a(), v(), G = t(g()), h(), m(), L(), F(), w(), T(), x(), O(), M(), D(), P(), K = p(), _(), q = `saved-entities-save-success`, J = e => {
            "use forget";
            let t = (0, W.c)(5),
                n;
            t[0] === e.request.saved_target ? n = t[1] : (n = A(e.request.saved_target), t[0] = e.request.saved_target, t[1] = n);
            let r = n,
                i;
            return t[2] !== e || t[3] !== r ? (i = (0, K.jsx)(Y, {
                ...e
            }, r), t[2] = e, t[3] = r, t[4] = i) : i = t[4], i
        }, Y = ({
            analyticsSource: e,
            analyticsSurface: t = I.PRODUCT_SIDEBAR,
            assistantMessageId: r,
            className: a,
            clientThreadId: o,
            messageId: c,
            request: u
        }) => {
            "use no forget";
            let f = l(),
                p = n(() => f?.serverId$()),
                m = ae(),
                h = ne(),
                g = te(),
                _ = C(u.saved_target.sidebar_params.category),
                v = me(_ ? u : null),
                y = re({
                    ...N,
                    enabled: _,
                    refetchOnMount: !0,
                    retryOnMount: !0
                }),
                [b, x] = (0, G.useState)(),
                [S, w] = (0, G.useState)(!1),
                [T, E] = (0, G.useState)(!1),
                D = (0, G.useRef)(null),
                O = (0, G.useRef)(null),
                A = (0, G.useRef)(null),
                j = (0, G.useRef)(null),
                M = (0, G.useRef)(null),
                P = m.formatMessage(k.updateFailed),
                F = m.formatMessage(k.moveFailed),
                L = de({
                    onToggleError: () => {
                        i().danger(P), s(P, {
                            priority: `high`
                        })
                    }
                }),
                z = !v.isLoading && v.isSaved,
                {
                    libraryFileId: B
                } = v,
                W = n => t === I.SAVE_TOAST ? void 0 : pe({
                    entityKind: fe(void 0, u.saved_target),
                    surface: t,
                    source: e ?? (t === I.LIBRARY_LIST || t === I.LIBRARY_GRID ? `library` : f != null || o != null ? `conversation` : `unknown`),
                    action: n
                }),
                J = e => {
                    let n = D.current;
                    if (n != null) return n.claimedByFolder ||= e, n;
                    let i = U();
                    H({
                        clickType: `save`,
                        target: u.saved_target,
                        surface: t,
                        clientThreadId: o,
                        messageId: c,
                        assistantMessageId: r
                    });
                    let a = p != null && r != null ? {
                            ...u,
                            origin: {
                                conversation_id: p,
                                message_id: r
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
                                surface: I.SAVE_TOAST,
                                clientThreadId: o,
                                messageId: c,
                                assistantMessageId: r
                            })
                        }), ue({
                            event: R.SUCCESS_TOAST_RENDERED,
                            target: u.saved_target,
                            surface: I.SAVE_TOAST,
                            action: `save`,
                            clickToSuccessToastMs: U() - e.startedAtMs
                        })
                    } catch {}
                }, X = () => {
                    let e = U();
                    H({
                        clickType: `unsave`,
                        target: u.saved_target,
                        surface: t,
                        clientThreadId: o,
                        messageId: c,
                        assistantMessageId: r
                    }), w(!0);
                    let n = L.mutateAsync({
                        request: u,
                        isSaved: !0,
                        analyticsSurface: t,
                        globalFavoritesAnalytics: W(`unsave`),
                        startedAtMs: e
                    }).then(() => {
                        x(void 0), j.current?.close(), j.current = null, M.current?.close(), M.current = null, V({
                            intl: m,
                            kind: `removed`
                        })
                    }).catch(() => {}).finally(() => {
                        O.current === n && (O.current = null, w(!1))
                    });
                    O.current = n
                }, Z = () => {
                    if (!(D.current != null || O.current != null || A.current != null)) {
                        if (z) {
                            X();
                            return
                        }
                        Y(J(!1))
                    }
                }, Q = (e, t = `added`) => {
                    if (O.current != null || A.current != null) return;
                    let n = b === e.id,
                        a = D.current ?? (!z || B == null ? J(!0) : null);
                    a != null && (a.claimedByFolder = !0), E(!0);
                    let l = (async () => {
                        let l = null;
                        if (a != null) try {
                            l = await a.promise
                        } catch {
                            return
                        }
                        let d = l?.library_file_id ?? B;
                        try {
                            if (d == null) throw Error(`Saved entity response did not include a Library file ID.`);
                            let i = await ie(() => import(`./d9b4ed06-p8rgahkqyuo5tef3.js`), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
                            if (await i.moveSavedEntityLibraryFile({
                                    directoryId: n ? null : e.id,
                                    libraryFileId: d,
                                    queryClient: g
                                }), x(n ? void 0 : e.id), M.current?.close(), M.current = null, n) return;
                            j.current?.close(), j.current = null, M.current = le({
                                folder: e,
                                intl: m,
                                kind: t,
                                onView: () => {
                                    H({
                                        clickType: `toast_action`,
                                        target: u.saved_target,
                                        surface: I.SAVE_TOAST,
                                        clientThreadId: o,
                                        messageId: c,
                                        assistantMessageId: r
                                    }), h(i.getSavedEntityFolderPath(e.id))
                                }
                            }), a != null && ue({
                                event: R.SUCCESS_TOAST_RENDERED,
                                target: u.saved_target,
                                surface: I.SAVE_TOAST,
                                action: `save`,
                                clickToSuccessToastMs: U() - a.startedAtMs
                            })
                        } catch (e) {
                            i().danger(F, {
                                error: e
                            }), s(F, {
                                priority: `high`
                            })
                        }
                    })().finally(() => {
                        A.current === l && (A.current = null, E(!1))
                    });
                    A.current = l
                }, $ = ee(e => {
                    g.cancelQueries({
                        queryKey: N.queryKey,
                        exact: !0
                    }).then(() => {
                        g.setQueryData(N.queryKey, (t = []) => [...t.filter(({
                            id: t
                        }) => t !== e.id), e].sort(ce)), g.invalidateQueries({
                            queryKey: N.queryKey,
                            exact: !0
                        })
                    }), Q(e, `created`)
                });
            return !_ || v.isError || !z && r != null && f != null && p == null ? null : (0, K.jsx)(se, {
                className: a,
                folders: y.data ?? [],
                isBusy: S || T,
                isCheckingStatus: v.isLoading,
                isFolderError: y.isError && y.data == null,
                isFolderLoading: y.isLoading,
                isSaved: z,
                onCreateFolder: () => {
                    d(oe, {
                        onCreated: $
                    })
                },
                onOpenChange: e => {
                    e && g.prefetchQuery(N)
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
        Z = y(), w(), j(), X(), Q = p(), $ = e => {
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
//# sourceMappingURL=a5f68020-b0pi4kn4c7slcs2h.js.map