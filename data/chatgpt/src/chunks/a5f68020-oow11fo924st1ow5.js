const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/d9b4ed06-emz0dpogmi100xum.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-nxpmzchfjvwqts17.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-m08q51xmfe7gjq3d.js", "assets/30901919-lgbmg5s09xld40kt.js", "assets/c470f5ab-hgik953cu5ujlhdm.js", "assets/0e5afe53-i4tqvmyg38miikw0.js", "assets/conversation-small-dtc7tvsx.css", "assets/8b34dbc2-n194ohawifys3bko.js", "assets/82782bc9-ca5kcqz13rn6iprj.js"]))) => i.map(i => d[i]);
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
    uW as ee,
    vF as d,
    wN as te
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as f,
    N as ne,
    Nt as re,
    O as ie,
    Q as p,
    Rn as m,
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
} from "./conversation-small-m08q51xmfe7gjq3d.js";
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
} from "./8b34dbc2-n194ohawifys3bko.js";
var W, G, K, q, J, Y, X = e((() => {
        W = v(), d(), c(), o(), z(), x(), L(), l(), i(), n(), _(), G = t(h()), m(), p(), F(), I(), D(), T(), y(), E(), A(), k(), P(), K = f(), g(), q = `saved-entities-save-success`, J = e => {
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
            analyticsSurface: t = U.PRODUCT_SIDEBAR,
            assistantMessageId: n,
            className: i,
            clientThreadId: o,
            messageId: c,
            request: l
        }) => {
            "use no forget";
            let d = a(),
                f = u(() => d?.serverId$()),
                p = oe(),
                m = re(),
                h = ne(),
                g = C(l.saved_target.sidebar_params.category),
                _ = fe(g ? l : null),
                v = ie({
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
                P = p.formatMessage(O.updateFailed),
                F = p.formatMessage(O.moveFailed),
                I = de({
                    onToggleError: () => {
                        r().danger(P), ee(P, {
                            priority: `high`
                        })
                    }
                }),
                L = !_.isLoading && _.isSaved,
                {
                    libraryFileId: z
                } = _,
                W = n => t === U.SAVE_TOAST ? void 0 : pe({
                    entityKind: me(void 0, l.saved_target),
                    surface: t,
                    source: e ?? (t === U.LIBRARY_LIST || t === U.LIBRARY_GRID ? `library` : d != null || o != null ? `conversation` : `unknown`),
                    action: n
                }),
                J = e => {
                    let r = E.current;
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
                    let a = f != null && n != null ? {
                            ...l,
                            origin: {
                                conversation_id: f,
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
                            E.current?.promise === s && (E.current = null)
                        }),
                        u = {
                            claimedByFolder: e,
                            promise: s,
                            startedAtMs: i
                        };
                    return E.current = u, u
                },
                Y = async e => {
                    try {
                        if (await e.promise, e.claimedByFolder) return;
                        A.current = R({
                            intl: p,
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
                    }), S(!0);
                    let r = I.mutateAsync({
                        request: l,
                        isSaved: !0,
                        analyticsSurface: t,
                        globalFavoritesAnalytics: W(`unsave`),
                        startedAtMs: e
                    }).then(() => {
                        b(void 0), A.current?.close(), A.current = null, j.current?.close(), j.current = null, R({
                            intl: p,
                            kind: `removed`
                        })
                    }).catch(() => {}).finally(() => {
                        D.current === r && (D.current = null, S(!1))
                    });
                    D.current = r
                }, Z = () => {
                    if (!(E.current != null || D.current != null || k.current != null)) {
                        if (L) {
                            X();
                            return
                        }
                        Y(J(!1))
                    }
                }, Q = (e, t = `added`) => {
                    if (D.current != null || k.current != null) return;
                    let i = y === e.id,
                        a = E.current ?? (!L || z == null ? J(!0) : null);
                    a != null && (a.claimedByFolder = !0), T(!0);
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
                            let r = await ae(() => import(`./d9b4ed06-emz0dpogmi100xum.js`), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
                            if (await r.moveSavedEntityLibraryFile({
                                    directoryId: i ? null : e.id,
                                    libraryFileId: u,
                                    queryClient: h
                                }), b(i ? void 0 : e.id), j.current?.close(), j.current = null, i) return;
                            A.current?.close(), A.current = null, j.current = le({
                                folder: e,
                                intl: p,
                                kind: t,
                                onView: () => {
                                    N({
                                        clickType: `toast_action`,
                                        target: l.saved_target,
                                        surface: U.SAVE_TOAST,
                                        clientThreadId: o,
                                        messageId: c,
                                        assistantMessageId: n
                                    }), m(r.getSavedEntityFolderPath(e.id))
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
                            }), ee(F, {
                                priority: `high`
                            })
                        }
                    })().finally(() => {
                        k.current === s && (k.current = null, T(!1))
                    });
                    k.current = s
                }, $ = te(e => {
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
            return !g || _.isError || !L && n != null && d != null && f == null ? null : (0, K.jsx)(ce, {
                className: i,
                folders: v.data ?? [],
                isBusy: x || w,
                isCheckingStatus: _.isLoading,
                isFolderError: v.isError && v.data == null,
                isFolderLoading: v.isLoading,
                isSaved: L,
                onCreateFolder: () => {
                    s(ue, {
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
        Z = v(), D(), w(), X(), Q = f(), $ = e => {
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
//# sourceMappingURL=a5f68020-oow11fo924st1ow5.js.map