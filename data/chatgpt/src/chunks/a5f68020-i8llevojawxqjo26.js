const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/d9b4ed06-eblb7b214ouhzb0a.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-qsuygr73qjc6rh65.js", "assets/2340486e-komxp8tzs51ny4jj.js", "assets/root-lelxp0l2.css", "assets/conversation-small-cawdu7il3ha6y70c.js", "assets/30901919-jory365vq6ym5crx.js", "assets/c470f5ab-in0lllrdrzeo67gs.js", "assets/0e5afe53-f9gmgfmgrr83ziw3.js", "assets/conversation-small-czggvj2v.css", "assets/8b34dbc2-d4icgkio4i3wfm6q.js", "assets/82782bc9-jj605vonxg0iyc7p.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    M5 as n,
    RU as r,
    Z0 as i,
    _N as a,
    e2 as o,
    fF as s,
    fW as c,
    m8 as l,
    mF as u,
    mW as d,
    vN as ee,
    zU as f
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    $ as p,
    Bn as te,
    Hn as m,
    N as ne,
    O as re,
    Pt as ie,
    Tn as h,
    Vn as g,
    ln as ae,
    s as _,
    un as v,
    zn as y
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    Aft as b,
    BOt as x,
    Cft as oe,
    Eft as S,
    Nft as C,
    OOt as se,
    Oft as w,
    Pft as T,
    Tft as ce,
    cft as le,
    dft as E,
    kft as D,
    lft as O,
    nft as k,
    rft as A,
    sft as j,
    uft as ue,
    wft as M
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    Gd as N,
    Jd as P,
    Kd as de,
    Yd as fe,
    bf as F,
    cf as I,
    df as pe,
    gf as L,
    hf as R,
    lf as z,
    mf as me,
    pf as B,
    vf as V,
    xf as H,
    yf as U
} from "./8b34dbc2-d4icgkio4i3wfm6q.js";
var W, G, K, q, J, Y, X = e((() => {
        W = h(), s(), d(), i(), B(), x(), I(), l(), f(), a(), _(), G = t(m()), y(), p(), U(), P(), b(), S(), M(), O(), j(), A(), N(), K = g(), v(), q = `saved-entities-save-success`, J = e => {
            "use forget";
            let t = (0, W.c)(5),
                n;
            t[0] === e.request.saved_target ? n = t[1] : (n = k(e.request.saved_target), t[0] = e.request.saved_target, t[1] = n);
            let r = n,
                i;
            return t[2] !== e || t[3] !== r ? (i = (0, K.jsx)(Y, {
                ...e
            }, r), t[2] = e, t[3] = r, t[4] = i) : i = t[4], i
        }, Y = ({
            analyticsSource: e,
            analyticsSurface: t = L.PRODUCT_SIDEBAR,
            assistantMessageId: i,
            className: a,
            clientThreadId: s,
            messageId: l,
            request: d
        }) => {
            "use no forget";
            let f = u(),
                p = n(() => f?.serverId$()),
                m = te(),
                h = ie(),
                g = ne(),
                _ = T(d.saved_target.sidebar_params.category),
                v = de(_ ? d : null),
                y = re({
                    ...E,
                    enabled: _,
                    refetchOnMount: !0,
                    retryOnMount: !0
                }),
                [b, x] = (0, G.useState)(),
                [S, C] = (0, G.useState)(!1),
                [w, D] = (0, G.useState)(!1),
                O = (0, G.useRef)(null),
                k = (0, G.useRef)(null),
                A = (0, G.useRef)(null),
                j = (0, G.useRef)(null),
                M = (0, G.useRef)(null),
                N = m.formatMessage(ue.updateFailed),
                P = m.formatMessage(ue.moveFailed),
                I = fe({
                    onToggleError: () => {
                        r().danger(N), c(N, {
                            priority: `high`
                        })
                    }
                }),
                B = !v.isLoading && v.isSaved,
                {
                    libraryFileId: U
                } = v,
                W = n => t === L.SAVE_TOAST ? void 0 : me({
                    entityKind: pe(void 0, d.saved_target),
                    surface: t,
                    source: e ?? (t === L.LIBRARY_LIST || t === L.LIBRARY_GRID ? `library` : f != null || s != null ? `conversation` : `unknown`),
                    action: n
                }),
                J = e => {
                    let n = O.current;
                    if (n != null) return n.claimedByFolder ||= e, n;
                    let r = V();
                    F({
                        clickType: `save`,
                        target: d.saved_target,
                        surface: t,
                        clientThreadId: s,
                        messageId: l,
                        assistantMessageId: i
                    });
                    let a = p != null && i != null ? {
                            ...d,
                            origin: {
                                conversation_id: p,
                                message_id: i
                            }
                        } : d,
                        o = I.mutateAsync({
                            request: a,
                            isSaved: !1,
                            analyticsSurface: t,
                            globalFavoritesAnalytics: e ? void 0 : W(`save`),
                            startedAtMs: r
                        }).then(e => {
                            if (e == null) throw Error(`Saved entity response was empty.`);
                            return e
                        }).finally(() => {
                            O.current?.promise === o && (O.current = null)
                        }),
                        c = {
                            claimedByFolder: e,
                            promise: o,
                            startedAtMs: r
                        };
                    return O.current = c, c
                },
                Y = async e => {
                    try {
                        if (await e.promise, e.claimedByFolder) return;
                        j.current = z({
                            intl: m,
                            kind: `added`,
                            id: q,
                            onView: () => F({
                                clickType: `toast_action`,
                                target: d.saved_target,
                                surface: L.SAVE_TOAST,
                                clientThreadId: s,
                                messageId: l,
                                assistantMessageId: i
                            })
                        }), H({
                            event: R.SUCCESS_TOAST_RENDERED,
                            target: d.saved_target,
                            surface: L.SAVE_TOAST,
                            action: `save`,
                            clickToSuccessToastMs: V() - e.startedAtMs
                        })
                    } catch {}
                }, X = () => {
                    let e = V();
                    F({
                        clickType: `unsave`,
                        target: d.saved_target,
                        surface: t,
                        clientThreadId: s,
                        messageId: l,
                        assistantMessageId: i
                    }), C(!0);
                    let n = I.mutateAsync({
                        request: d,
                        isSaved: !0,
                        analyticsSurface: t,
                        globalFavoritesAnalytics: W(`unsave`),
                        startedAtMs: e
                    }).then(() => {
                        x(void 0), j.current?.close(), j.current = null, M.current?.close(), M.current = null, z({
                            intl: m,
                            kind: `removed`
                        })
                    }).catch(() => {}).finally(() => {
                        k.current === n && (k.current = null, C(!1))
                    });
                    k.current = n
                }, Z = () => {
                    if (!(O.current != null || k.current != null || A.current != null)) {
                        if (B) {
                            X();
                            return
                        }
                        Y(J(!1))
                    }
                }, Q = (e, t = `added`) => {
                    if (k.current != null || A.current != null) return;
                    let n = b === e.id,
                        a = O.current ?? (!B || U == null ? J(!0) : null);
                    a != null && (a.claimedByFolder = !0), D(!0);
                    let o = (async () => {
                        let o = null;
                        if (a != null) try {
                            o = await a.promise
                        } catch {
                            return
                        }
                        let u = o?.library_file_id ?? U;
                        try {
                            if (u == null) throw Error(`Saved entity response did not include a Library file ID.`);
                            let r = await ae(() => import(`./d9b4ed06-eblb7b214ouhzb0a.js`), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
                            if (await r.moveSavedEntityLibraryFile({
                                    directoryId: n ? null : e.id,
                                    libraryFileId: u,
                                    queryClient: g
                                }), x(n ? void 0 : e.id), M.current?.close(), M.current = null, n) return;
                            j.current?.close(), j.current = null, M.current = le({
                                folder: e,
                                intl: m,
                                kind: t,
                                onView: () => {
                                    F({
                                        clickType: `toast_action`,
                                        target: d.saved_target,
                                        surface: L.SAVE_TOAST,
                                        clientThreadId: s,
                                        messageId: l,
                                        assistantMessageId: i
                                    }), h(r.getSavedEntityFolderPath(e.id))
                                }
                            }), a != null && H({
                                event: R.SUCCESS_TOAST_RENDERED,
                                target: d.saved_target,
                                surface: L.SAVE_TOAST,
                                action: `save`,
                                clickToSuccessToastMs: V() - a.startedAtMs
                            })
                        } catch (e) {
                            r().danger(P, {
                                error: e
                            }), c(P, {
                                priority: `high`
                            })
                        }
                    })().finally(() => {
                        A.current === o && (A.current = null, D(!1))
                    });
                    A.current = o
                }, $ = ee(e => {
                    g.cancelQueries({
                        queryKey: E.queryKey,
                        exact: !0
                    }).then(() => {
                        g.setQueryData(E.queryKey, (t = []) => [...t.filter(({
                            id: t
                        }) => t !== e.id), e].sort(se)), g.invalidateQueries({
                            queryKey: E.queryKey,
                            exact: !0
                        })
                    }), Q(e, `created`)
                });
            return !_ || v.isError || !B && i != null && f != null && p == null ? null : (0, K.jsx)(oe, {
                className: a,
                folders: y.data ?? [],
                isBusy: S || w,
                isCheckingStatus: v.isLoading,
                isFolderError: y.isError && y.data == null,
                isFolderLoading: y.isLoading,
                isSaved: B,
                onCreateFolder: () => {
                    o(ce, {
                        onCreated: $
                    })
                },
                onOpenChange: e => {
                    e && g.prefetchQuery(E)
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
        Z = h(), b(), D(), X(), Q = g(), $ = e => {
            "use forget";
            let t = (0, Z.c)(10),
                n, r, i, a;
            if (t[0] !== e) {
                let {
                    visibility: o,
                    ...s
                } = e;
                n = s, a = o === void 0 ? `always` : o, i = C, r = T(n.request.saved_target.sidebar_params.category), t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a
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
                className: w,
                children: s
            }) : s, t[7] = s, t[8] = a, t[9] = c) : c = t[9], c
        }
    }));
export {
    he as n, $ as t
};
//# sourceMappingURL=a5f68020-i8llevojawxqjo26.js.map