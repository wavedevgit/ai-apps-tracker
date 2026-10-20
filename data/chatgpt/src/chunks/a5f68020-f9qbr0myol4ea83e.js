const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/d9b4ed06-jwtxa11129dieaih.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-bo7e0c29ngt4zgx0.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-ikg0dwuw782klweb.js", "assets/30901919-e8h11sw136qen6v0.js", "assets/c470f5ab-ab47eubabs8jspdc.js", "assets/0e5afe53-esm68l11os61djoy.js", "assets/conversation-small-oilgsqfa.css", "assets/8b34dbc2-dtawqv9t1aqckqj4.js", "assets/82782bc9-fcii2id0x6lspwtj.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $0 as n,
    BU as r,
    P5 as i,
    g8 as a,
    hF as o,
    hW as s,
    n2 as c,
    pF as l,
    pW as u,
    vN as d,
    yN as ee,
    zU as f
} from "./4813494d-bo7e0c29ngt4zgx0.js";
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
    Aft as oe,
    Fft as b,
    KOt as x,
    Nft as S,
    Oft as se,
    POt as ce,
    Pft as C,
    Rft as w,
    cft as T,
    fft as E,
    gft as D,
    hft as O,
    jft as k,
    kft as A,
    mft as j,
    pft as le,
    sft as M,
    zft as N
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    Kd as P,
    Sf as F,
    Xd as ue,
    Yd as I,
    _f as L,
    bf as R,
    ff as de,
    gf as z,
    hf as fe,
    lf as B,
    mf as V,
    qd as pe,
    uf as H,
    xf as U,
    yf as W
} from "./8b34dbc2-dtawqv9t1aqckqj4.js";
var G, K, q, J, Y, X, me = e((() => {
        G = y(), l(), s(), n(), V(), x(), B(), a(), r(), d(), v(), K = t(g()), h(), m(), R(), I(), b(), k(), A(), j(), E(), T(), P(), q = p(), _(), J = `saved-entities-save-success`, Y = e => {
            "use forget";
            let t = (0, G.c)(5),
                n;
            t[0] === e.request.saved_target ? n = t[1] : (n = M(e.request.saved_target), t[0] = e.request.saved_target, t[1] = n);
            let r = n,
                i;
            return t[2] !== e || t[3] !== r ? (i = (0, q.jsx)(X, {
                ...e
            }, r), t[2] = e, t[3] = r, t[4] = i) : i = t[4], i
        }, X = ({
            analyticsSource: e,
            analyticsSurface: t = L.PRODUCT_SIDEBAR,
            assistantMessageId: n,
            className: r,
            clientThreadId: a,
            messageId: s,
            request: l
        }) => {
            "use no forget";
            let d = o(),
                p = i(() => d?.serverId$()),
                m = ae(),
                h = ne(),
                g = te(),
                _ = N(l.saved_target.sidebar_params.category),
                v = pe(_ ? l : null),
                y = re({
                    ...D,
                    enabled: _,
                    refetchOnMount: !0,
                    retryOnMount: !0
                }),
                [b, x] = (0, K.useState)(),
                [S, C] = (0, K.useState)(!1),
                [w, T] = (0, K.useState)(!1),
                E = (0, K.useRef)(null),
                k = (0, K.useRef)(null),
                A = (0, K.useRef)(null),
                j = (0, K.useRef)(null),
                M = (0, K.useRef)(null),
                P = m.formatMessage(O.updateFailed),
                I = m.formatMessage(O.moveFailed),
                R = ue({
                    onToggleError: () => {
                        f().danger(P), u(P, {
                            priority: `high`
                        })
                    }
                }),
                B = !v.isLoading && v.isSaved,
                {
                    libraryFileId: V
                } = v,
                G = n => t === L.SAVE_TOAST ? void 0 : fe({
                    entityKind: de(void 0, l.saved_target),
                    surface: t,
                    source: e ?? (t === L.LIBRARY_LIST || t === L.LIBRARY_GRID ? `library` : d != null || a != null ? `conversation` : `unknown`),
                    action: n
                }),
                Y = e => {
                    let r = E.current;
                    if (r != null) return r.claimedByFolder ||= e, r;
                    let i = W();
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
                            E.current?.promise === c && (E.current = null)
                        }),
                        u = {
                            claimedByFolder: e,
                            promise: c,
                            startedAtMs: i
                        };
                    return E.current = u, u
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
                                surface: L.SAVE_TOAST,
                                clientThreadId: a,
                                messageId: s,
                                assistantMessageId: n
                            })
                        }), F({
                            event: z.SUCCESS_TOAST_RENDERED,
                            target: l.saved_target,
                            surface: L.SAVE_TOAST,
                            action: `save`,
                            clickToSuccessToastMs: W() - e.startedAtMs
                        })
                    } catch {}
                }, me = () => {
                    let e = W();
                    U({
                        clickType: `unsave`,
                        target: l.saved_target,
                        surface: t,
                        clientThreadId: a,
                        messageId: s,
                        assistantMessageId: n
                    }), C(!0);
                    let r = R.mutateAsync({
                        request: l,
                        isSaved: !0,
                        analyticsSurface: t,
                        globalFavoritesAnalytics: G(`unsave`),
                        startedAtMs: e
                    }).then(() => {
                        x(void 0), j.current?.close(), j.current = null, M.current?.close(), M.current = null, H({
                            intl: m,
                            kind: `removed`
                        })
                    }).catch(() => {}).finally(() => {
                        k.current === r && (k.current = null, C(!1))
                    });
                    k.current = r
                }, Z = () => {
                    if (!(E.current != null || k.current != null || A.current != null)) {
                        if (B) {
                            me();
                            return
                        }
                        X(Y(!1))
                    }
                }, Q = (e, t = `added`) => {
                    if (k.current != null || A.current != null) return;
                    let r = b === e.id,
                        i = E.current ?? (!B || V == null ? Y(!0) : null);
                    i != null && (i.claimedByFolder = !0), T(!0);
                    let o = (async () => {
                        let o = null;
                        if (i != null) try {
                            o = await i.promise
                        } catch {
                            return
                        }
                        let c = o?.library_file_id ?? V;
                        try {
                            if (c == null) throw Error(`Saved entity response did not include a Library file ID.`);
                            let o = await ie(() => import(`./d9b4ed06-jwtxa11129dieaih.js`), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
                            if (await o.moveSavedEntityLibraryFile({
                                    directoryId: r ? null : e.id,
                                    libraryFileId: c,
                                    queryClient: g
                                }), x(r ? void 0 : e.id), M.current?.close(), M.current = null, r) return;
                            j.current?.close(), j.current = null, M.current = le({
                                folder: e,
                                intl: m,
                                kind: t,
                                onView: () => {
                                    U({
                                        clickType: `toast_action`,
                                        target: l.saved_target,
                                        surface: L.SAVE_TOAST,
                                        clientThreadId: a,
                                        messageId: s,
                                        assistantMessageId: n
                                    }), h(o.getSavedEntityFolderPath(e.id))
                                }
                            }), i != null && F({
                                event: z.SUCCESS_TOAST_RENDERED,
                                target: l.saved_target,
                                surface: L.SAVE_TOAST,
                                action: `save`,
                                clickToSuccessToastMs: W() - i.startedAtMs
                            })
                        } catch (e) {
                            f().danger(I, {
                                error: e
                            }), u(I, {
                                priority: `high`
                            })
                        }
                    })().finally(() => {
                        A.current === o && (A.current = null, T(!1))
                    });
                    A.current = o
                }, $ = ee(e => {
                    g.cancelQueries({
                        queryKey: D.queryKey,
                        exact: !0
                    }).then(() => {
                        g.setQueryData(D.queryKey, (t = []) => [...t.filter(({
                            id: t
                        }) => t !== e.id), e].sort(ce)), g.invalidateQueries({
                            queryKey: D.queryKey,
                            exact: !0
                        })
                    }), Q(e, `created`)
                });
            return !_ || v.isError || !B && n != null && d != null && p == null ? null : (0, q.jsx)(se, {
                className: r,
                folders: y.data ?? [],
                isBusy: S || w,
                isCheckingStatus: v.isLoading,
                isFolderError: y.isError && y.data == null,
                isFolderLoading: y.isLoading,
                isSaved: B,
                onCreateFolder: () => {
                    c(oe, {
                        onCreated: $
                    })
                },
                onOpenChange: e => {
                    e && g.prefetchQuery(D)
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
        Z = y(), b(), C(), me(), Q = p(), $ = e => {
            "use forget";
            let t = (0, Z.c)(10),
                n, r, i, a;
            if (t[0] !== e) {
                let {
                    visibility: o,
                    ...s
                } = e;
                n = s, a = o === void 0 ? `always` : o, i = w, r = N(n.request.saved_target.sidebar_params.category), t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a
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
                className: S,
                children: s
            }) : s, t[7] = s, t[8] = a, t[9] = c) : c = t[9], c
        }
    }));
export {
    he as n, $ as t
};
//# sourceMappingURL=a5f68020-f9qbr0myol4ea83e.js.map