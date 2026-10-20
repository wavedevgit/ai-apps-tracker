import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    At as n,
    Dw as r,
    Eq as i,
    I1 as a,
    J5 as o,
    JU as s,
    Jm as c,
    Ki as l,
    Ktt as u,
    M1 as d,
    M5 as f,
    Mq as p,
    Ow as m,
    Qtt as h,
    RU as g,
    S8 as _,
    Sh as v,
    YU as y,
    Z0 as ee,
    aW as b,
    ah as x,
    aq as S,
    bot as te,
    ch as ne,
    cn as C,
    cp as w,
    e2 as T,
    ih as E,
    m8 as D,
    np as O,
    op as re,
    ph as ie,
    q5 as k,
    qi as ae,
    qm as A,
    rp as j,
    sW as oe,
    sp as M,
    ux as N,
    vh as P,
    vq as se,
    vx as F,
    yot as I,
    zU as ce
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as L,
    Hn as R,
    Rn as z,
    Tn as B,
    Vn as V,
    zn as H
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    AGt as le,
    M4 as ue,
    MX as de,
    N4 as fe,
    OGt as pe,
    Q1 as me,
    RHn as U,
    Y1 as W,
    cx as G,
    jGt as he,
    jX as ge,
    l6t as _e,
    lfn as ve,
    lv as ye,
    nY as be,
    sx as xe,
    tY as Se,
    u6t as Ce,
    ufn as we,
    uv as Te,
    zHn as Ee
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    Dg as De,
    Hm as Oe,
    Og as ke,
    Um as Ae
} from "./30901919-jory365vq6ym5crx.js";
import {
    At as je,
    B as Me,
    Ct as Ne,
    Et as Pe,
    Tt as Fe,
    U as Ie,
    W as Le,
    X as Re,
    Z as ze,
    at as Be,
    ut as Ve,
    z as He
} from "./82782bc9-jj605vonxg0iyc7p.js";
import {
    $_ as Ue,
    Q_ as We,
    Z_ as Ge,
    _S as Ke,
    av as qe,
    dc as Je,
    dw as Ye,
    ev as Xe,
    fS as Ze,
    fc as Qe,
    fw as $e,
    iv as et,
    nv as tt,
    rv as nt,
    tv as rt,
    uc as it
} from "./8b34dbc2-d4icgkio4i3wfm6q.js";
import {
    i as at,
    n as ot,
    r as st,
    t as ct
} from "./bcae0416-e5l18ni9ewukogaz.js";
import {
    n as lt,
    r as ut
} from "./149834c7-i5v58izn5rg11ahy.js";

function dt(e) {
    "use forget";
    let t = (0, ft.c)(13),
        {
            accountUserId: n,
            size: r,
            allowViewingProfile: i,
            fallbackClassName: a,
            maskImageUrl: o
        } = e,
        s = w(n),
        c = M(n),
        l;
    t[0] !== c || t[1] !== s ? (l = s != null && c != null ? {
        name: s,
        picture: c
    } : void 0, t[0] = c, t[1] = s, t[2] = l) : l = t[2];
    let u = l,
        d;
    t[3] !== a || t[4] !== o || t[5] !== r || t[6] !== u ? (d = (0, pt.jsx)(P, {
        user: u,
        size: r,
        fallbackClassName: a,
        maskImageUrl: o
    }), t[3] = a, t[4] = o, t[5] = r, t[6] = u, t[7] = d) : d = t[7];
    let f = d;
    if (i) {
        let e;
        t[8] === n ? e = t[9] : (e = () => {
            T(_e, {
                accountUserId: n
            })
        }, t[8] = n, t[9] = e);
        let r;
        return t[10] !== f || t[11] !== e ? (r = (0, pt.jsx)(`button`, {
            type: `button`,
            onClick: e,
            className: `relative z-10`,
            children: f
        }), t[10] = f, t[11] = e, t[12] = r) : r = t[12], r
    }
    return f
}
var ft, pt, mt = e((() => {
    ft = B(), v(), Ce(), j(), ee(), pt = V()
}));

function ht() {
    return {
        queryText: ``,
        active: !1,
        range: void 0
    }
}

function gt(e, t) {
    return e.setMeta(K, t), e
}

function _t(e) {
    e.dispatch(gt(e.state.tr, ht()))
}

function vt(e, t, n, r) {
    let i = e.state.tr;
    gt(i, ht()), i.insertText(t + ` `, n, r), e.dispatch(i)
}

function yt(e) {
    if (e.depth === 0) return;
    let t = (e.nodeBefore?.text ?? ``).match(/(?:^|\s)@(\w*)$/);
    if (t) return {
        range: {
            from: e.pos - t[1].length - 1,
            to: e.pos
        },
        queryText: t[1]
    }
}

function bt() {
    return new Fe({
        key: K,
        state: {
            init() {
                return ht()
            },
            apply(e, t, n, r) {
                let i = {
                    ...t,
                    ...e.getMeta(K)
                };
                if (e.selection.from === e.selection.to && !r.doc.eq(n.doc)) {
                    let t = yt(e.selection.$from);
                    i.active = !!t, t && (i.range = t.range, i.queryText = t.queryText)
                }
                return i.onMentionMatch?.(i.active && i.range ? {
                    text: i.queryText,
                    range: i.range
                } : void 0), i
            }
        }
    })
}
var K, xt = e((() => {
    je(), K = new Pe(`calpicoMentionPlugin`)
}));

function St(e, t, n) {
    "use no forget";
    let r = L(),
        i = O(),
        a = d()?.normalizedAccountUserId ?? null,
        o = f(() => i.rooms$().get(e)?.members$() ?? []),
        [s, c] = (0, q.useState)(void 0),
        [l, u] = (0, q.useState)(0);
    (0, q.useEffect)(() => {
        t.dispatch(gt(t.state.tr, {
            onMentionMatch(e) {
                c(e)
            }
        }))
    }, [t]);
    let p = r.formatMessage({
            id: `chatgpt.calpico.group_chat.composer.mentions.chatgpt.description`,
            defaultMessage: `Ask anything`
        }),
        m = (0, q.useMemo)(() => {
            if (!s) return [];
            let e = s.text.trim().toLowerCase(),
                t = e.length === 0,
                n = {
                    kind: `assistant`,
                    text: `@ChatGPT`,
                    displayName: `ChatGPT`,
                    description: p
                },
                r = t || n.text.replace(/^@/, ``).toLowerCase().includes(e) || n.displayName.toLowerCase().includes(e),
                i = [];
            r && i.push(n);
            let c = o.filter(e => e.role === `user`).filter(e => e.accountUserId !== a).flatMap(n => {
                let r = n.username.trim().toLowerCase();
                if (!r) return [];
                let i = `@${r}`,
                    a = n.name.trim().toLowerCase();
                return t || i.includes(e) || a.includes(e) ? [{
                    kind: `member`,
                    text: i,
                    displayName: n.name,
                    description: i,
                    accountUserId: n.accountUserId
                }] : []
            }).sort((e, t) => e.displayName.localeCompare(t.displayName));
            return i.concat(c)
        }, [s, p, o, a]),
        h = s != null && m.length > 0;
    (0, q.useEffect)(() => {
        u(0)
    }, [m]);
    let g = y(() => {
            if (!s) return !1;
            let e = m[l] ?? m[0];
            return e ? (vt(t, e.text, s.range.from, s.range.to), !0) : !1
        }),
        _ = y(e => {
            u(t => {
                let n = m.length;
                return n === 0 ? 0 : (e(t) % n + n) % n
            })
        });
    return (0, q.useEffect)(() => {
        if (h) return Xe(t, e => {
            if (e === `up`) n(), _(e => e - 1);
            else if (e === `down`) n(), _(e => e + 1);
            else if (e === `cancel`) Ue(t), _t(t);
            else if (e === `submit` || e === `checkMatch`) return g()
        }), () => {
            t.isDestroyed || Ue(t)
        }
    }, [h, t, n]), {
        suggestions: m,
        isSuggestorOpen: h,
        selectedIndex: l,
        setSelectedIndex: _,
        saveMention: g
    }
}

function Ct(e) {
    "use forget";
    let t = (0, Tt.c)(10),
        {
            roomId: n,
            editorView: r
        } = e,
        i = (0, q.useRef)(`mouse`),
        a;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (a = () => {
        i.current = `keyboard`
    }, t[0] = a) : a = t[0];
    let {
        suggestions: o,
        isSuggestorOpen: s,
        selectedIndex: c,
        setSelectedIndex: l,
        saveMention: u
    } = St(n, r, a);
    if (!s) return null;
    let d;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (d = () => {
        i.current = `mouse`
    }, t[1] = d) : d = t[1];
    let f;
    t[2] !== r || t[3] !== u || t[4] !== c || t[5] !== l || t[6] !== o ? (f = o.map((e, t) => (0, J.jsx)(N, {
        as: `div`,
        autoFocus: !1,
        className: `rounded-lg px-3 py-2`,
        highlighted: t === c,
        hasManagedFocus: !0,
        icon: e.kind === `assistant` ? (0, J.jsx)(ie, {
            iconName: `openai`,
            size: `small`
        }) : (0, J.jsx)(dt, {
            accountUserId: e.accountUserId,
            size: `small`
        }),
        onMouseOver: () => {
            i.current === `mouse` && l(() => t)
        },
        onClick: () => {
            u(), r.focus()
        },
        children: (0, J.jsxs)(`span`, {
            children: [(0, J.jsx)(`span`, {
                className: `font-medium`,
                children: e.displayName
            }), (0, J.jsxs)(`span`, {
                className: `text-token-text-secondary`,
                children: [` · `, e.description]
            })]
        })
    }, e.kind === `member` ? e.accountUserId : `assistant-` + e.text)), t[2] = r, t[3] = u, t[4] = c, t[5] = l, t[6] = o, t[7] = f) : f = t[7];
    let p;
    return t[8] === f ? p = t[9] : (p = (0, J.jsx)(`div`, {
        className: `shadow-long popover bg-token-bg-primary absolute start-0 end-0 bottom-full z-20 mb-2 max-h-56 max-w-xs overflow-y-auto rounded-2xl py-1.5`,
        onMouseDown: wt,
        onMouseMove: d,
        children: f
    }), t[8] = f, t[9] = p), p
}

function wt(e) {
    e.preventDefault()
}
var Tt, q, J, Et = e((() => {
    Tt = B(), v(), mt(), xt(), j(), F(), rt(), D(), a(), q = t(R()), H(), s(), J = V()
}));

function Dt(e) {
    let [t] = (0, Y.useState)(() => `controller` in e ? e.controller : new At(e.roomId));
    if (!t) throw Error(`CalpicoRoomControllerProvider: roomId or controller is required`);
    return (0, kt.jsx)(jt.Provider, {
        value: t,
        children: e.children
    })
}

function Ot() {
    return (0, Y.use)(jt)
}
var Y, kt, At, jt, Mt = e((() => {
    c(), D(), Y = t(R()), kt = V(), te(), At = class {
        constructor(e) {
            I(this, `roomId`, void 0), I(this, `attachments$`, void 0), I(this, `replyTo$`, void 0), I(this, `focusComposer$`, void 0), this.roomId = e, this.attachments$ = _([]), this.replyTo$ = _(null), this.focusComposer$ = _(!1)
        }
        setReplyToImage(e, t) {
            this.replyTo$.set({
                messageId: e,
                messageType: `object`,
                previewText: t.formatMessage({
                    id: `chatgpt.calpico.group_chat.message.preview.image.label`,
                    defaultMessage: `Image`
                })
            })
        }
        setReplyToMessage(e, t) {
            let n = A(e, 200);
            n.length === 0 ? this.setReplyToImage(e.id, t) : this.replyTo$.set({
                messageId: e.id,
                messageType: `text`,
                previewText: n
            }), this.focusComposer$.set(!0)
        }
        clearReplyTo() {
            this.replyTo$.set(null)
        }
    }, jt = (0, Y.createContext)({})
}));

function Nt(e) {
    return e != null && e.startsWith(`image/`)
}

function Pt(e, t) {
    switch (e) {
        case `application/pdf`:
            return t.formatMessage({
                id: `chatgpt.calpico.group_chat.attachment.file_type.pdf.label`,
                defaultMessage: `PDF`
            });
        case `application/vnd.openxmlformats-officedocument.wordprocessingml.document`:
            return t.formatMessage({
                id: `chatgpt.calpico.group_chat.attachment.file_type.document.label`,
                defaultMessage: `Document`
            });
        case `text/plain`:
            return t.formatMessage({
                id: `chatgpt.calpico.group_chat.attachment.file_type.text.label`,
                defaultMessage: `Text`
            });
        case `image/png`:
        case `image/jpeg`:
        case `image/gif`:
        case `image/webp`:
            return t.formatMessage({
                id: `chatgpt.calpico.group_chat.attachment.file_type.image.label`,
                defaultMessage: `Image`
            });
        default:
            return t.formatMessage({
                id: `chatgpt.calpico.group_chat.attachment.file_type.file.label`,
                defaultMessage: `File`
            })
    }
}
var Ft = e((() => {}));

function It(e, t) {
    let n = E();
    return e.size <= n ? !0 : (g().danger(t.formatMessage({
        id: `chatgpt.calpico.group_chat.composer.attachment.upload_size_limit.error`,
        defaultMessage: `Files must be {maxSize} MB or smaller.`
    }, {
        maxSize: t.formatNumber(n / Lt, {
            maximumFractionDigits: 1,
            minimumFractionDigits: 0
        })
    }), {
        id: `calpico_file_upload_size_limit`,
        toastId: `calpico_file_upload_size_limit`
    }), !1)
}
var Lt, Rt = e((() => {
    x(), ce(), Lt = 1024 * 1024
}));

function zt({
    disabled: e,
    editorValue$: t,
    placeholderText: n
}) {
    let r = new Ie(null, {
        editable: () => !e,
        ...e ? {
            attributes: {
                role: `textbox`,
                "aria-disabled": `true`,
                "aria-readonly": `true`,
                "aria-label": n
            }
        } : {},
        state: Ne.create({
            schema: $e,
            plugins: [ct(), tt(), bt(), We(n), nt(), ze({
                ...Be,
                "Shift-Enter": Be.Enter,
                "Mod-z": at,
                "Mod-y": st,
                "Mod-Shift-z": st
            }), He()]
        }),
        dispatchTransaction(e) {
            let n = r.state.apply(e);
            r.updateState(n), t.set(n.doc.textContent)
        }
    });
    return r
}
var Bt = e((() => {
    xt(), et(), rt(), Ge(), Ye(), Ve(), Me(), ot(), Re(), je(), Le()
}));

function Vt(e, t) {
    let n = _({
        file: e,
        state: `pending`
    });
    return (async function() {
        try {
            let r = await t(e);
            n.set({
                ...r,
                file: e,
                state: `complete`
            })
        } catch {
            n.set({
                file: e,
                state: `error`
            })
        }
    })(), n
}

function Ht({
    file: e,
    className: t
}) {
    let n = L();
    return (0, Wt.jsx)(`img`, {
        src: (0, Ut.useMemo)(() => URL.createObjectURL(e), [e]),
        alt: n.formatMessage({
            id: `H7BtDz`,
            defaultMessage: `Image preview`
        }),
        className: k(`h-10 w-10 rounded-lg object-cover`, t)
    })
}
var Ut, Wt, Gt = e((() => {
    D(), o(), Ut = t(R()), H(), Wt = V()
}));

function Kt({
    roomId: e,
    scrollToBottom: t,
    disabled: n = !1,
    preserveDraftOnFailure: r = !1
}) {
    "use no forget";
    let a = re(),
        {
            assistantParticipant: o
        } = a.presentation,
        s = a.presentation.respectLegacyWriteBlock && ne(),
        c = f(fe),
        u = n || s || c,
        d = L(),
        p = g(),
        m = a.uploadCalpicoFile$,
        v = (0, Z.useRef)(null),
        ee = (0, Z.useRef)(null),
        b = (0, Z.useRef)(null),
        [x] = (0, Z.useState)(() => _(!1)),
        [S, te] = (0, Z.useState)(null),
        [w] = (0, Z.useState)(() => _(``)),
        [T] = (0, Z.useState)(() => _(null)),
        E = Ot(),
        D;
    D = s ? d.formatMessage(a.presentation.composerDisabledMessage ?? {
        id: `chatgpt.calpico.group_chat.composer.disabled.region_message`,
        defaultMessage: `Group chat is no longer available in your region`,
        description: `Status message shown inside the disabled composer at the bottom of an existing ChatGPT group chat when group chat write actions are unavailable in the end user's region. It explains why the user cannot send messages.`
    }) : a.presentation.composerPlaceholderMessage ? d.formatMessage(a.presentation.composerPlaceholderMessage) : d.formatMessage({
        id: `3MYRWW`,
        defaultMessage: `Send a message or @ChatGPT`
    });
    let O = f(() => E.replyTo$()),
        ie = f(() => w()),
        ae = f(() => x()),
        A = f(() => T()),
        j = A != null,
        oe = qt(S, v, ie),
        M = j || oe,
        N = f(se) ? le : pe,
        P = (0, Z.useCallback)(e => It(e, d), [d]),
        F = (0, Z.useCallback)(e => {
            E.attachments$.set(t => [...t, {
                kind: `fileUpload`,
                calpicoFileId: ``,
                state: e
            }])
        }, [E]),
        I = (0, Z.useCallback)(t => {
            if (!(u || !t))
                for (let n of Array.from(t)) {
                    if (!P(n)) continue;
                    let t = Vt(n, t => m(e, t));
                    F(t)
                }
        }, [F, e, P, m, u]),
        ce = (0, Z.useCallback)(e => {
            I(e.target.files), e.target.value = ``
        }, [I]),
        R = (0, Z.useCallback)(() => {
            u || ee.current?.click()
        }, [u]),
        z = (0, Z.useCallback)(e => {
            T.set(t => t === e ? t : e)
        }, [T]),
        B = (0, Z.useCallback)(e => {
            T.set(t => t === e ? null : t)
        }, [T]),
        V = f(() => E.attachments$()),
        H = V.length > 0 || M ? `-mb-2.5` : `-my-2.5`,
        ue = f(() => {
            let e = V.some(e => e.kind === `fileUpload` && e.state().state !== `complete`);
            return !u && !e && (w().trim() !== `` || V.length > 0)
        }),
        de = y(async () => {
            if (u || S == null || x()) return;
            let n = Ze(S.state.doc).content;
            if (ue) {
                let i = [];
                for (let e of V) switch (e.kind) {
                    case `fileUpload`: {
                        let t = e.state();
                        t.state === `complete` && i.push({
                            attachment: {
                                type: `file`,
                                file_id: t.calpicoFileId
                            },
                            metadata: null
                        });
                        break
                    }
                    case `link`:
                        i.push({
                            attachment: {
                                type: `link`,
                                url: e.attachment.url
                            },
                            metadata: null
                        });
                        break;
                    case `post`:
                        i.push({
                            attachment: {
                                type: `post`,
                                post_id: e.attachment.post_id
                            },
                            metadata: null
                        });
                        break;
                    case `sticker`:
                        i.push({
                            attachment: {
                                type: `sticker`,
                                sticker_id: e.stickerId
                            },
                            metadata: {
                                type: `sticker`,
                                sticker_id: e.stickerId,
                                image_url: e.imageUrl,
                                image_metadata: null,
                                file_id: null
                            }
                        });
                        break
                }
                let o = {
                        content: {
                            text: n === `` ? null : n,
                            ...i.length > 0 && {
                                attachments: i.map(e => e.attachment)
                            },
                            system_hints: A ? [A] : []
                        },
                        reply_to: O?.messageId ? {
                            message_id: O.messageId
                        } : void 0
                    },
                    s = JSON.stringify([e, o]),
                    c = b.current?.payloadKey === s ? b.current.requestId : crypto.randomUUID();
                o.request_id = c;
                let l = a.sendMessage$(e, o, i.map(e => e.metadata));
                if (r) {
                    x.set(!0);
                    let t = !1;
                    try {
                        await l, t = a.rooms$().get(e)?.viewMessages$().some(e => e.role === `user` && e.requestId === c && e.deliveryState === `failed`) ?? !1
                    } catch {
                        t = !0
                    }
                    if (x.set(!1), t) {
                        b.current = {
                            payloadKey: s,
                            requestId: c
                        }, p.danger(d.formatMessage({
                            id: `chatgpt.calpico.group_chat.composer.send_error.toast`,
                            defaultMessage: `Couldn't send message. Try again.`
                        }));
                        return
                    }
                }
                b.current = null, S && S.dispatch(S.state.tr.delete(0, S.state.doc.content.size)), E.attachments$.set([]), E.clearReplyTo(), T.set(null), t({
                    animation: `instant`
                })
            }
        });
    (0, Z.useEffect)(() => {
        let t = v.current;
        if (!t) return;
        let n = zt({
            disabled: u,
            editorValue$: w,
            placeholderText: D
        });
        te(n);
        let r = qe(n, {
            Enter: e => e.shiftKey ? !1 : (e.preventDefault(), de(), !0)
        });
        t.appendChild(n.dom);
        let i = lt(),
            o = () => {
                u || i({
                    roomId: e,
                    path: a.respondingHeartbeatPath
                })
            },
            s = t => {
                if (u) return;
                let n = Array.from(t.clipboardData?.files ?? []).filter(P);
                n.length === 0 || n.length > 16 || (t.preventDefault(), n.forEach(t => {
                    let n = Vt(t, t => m(e, t));
                    F(n)
                }))
            };
        return n.dom.addEventListener(`keydown`, o), n.dom.addEventListener(`paste`, s), u || n.focus(), () => {
            n.dom.removeEventListener(`keydown`, o), n.dom.removeEventListener(`paste`, s), i.cancel(), r(), n.destroy(), te(null)
        }
    }, [e, w, d, E, a, P, F, m, D, u]);
    let me = f(() => E.focusComposer$());
    (0, Z.useEffect)(() => {
        !u && me && S && (S.focus(), E.focusComposer$.set(!1))
    }, [me, S, E, u]);
    let W = ge(i.Research),
        G = ge(i.PictureV2),
        he = (0, Q.jsxs)(Q.Fragment, {
            children: [(0, Q.jsx)(U.Group, {
                separator: !1,
                children: (0, Q.jsx)(U.Item, {
                    icon: (0, Q.jsx)(Ae, {
                        className: `icon`
                    }),
                    label: d.formatMessage($.addPhotosAndFiles),
                    onClick: R
                }, `add-files`)
            }), o ? (0, Q.jsxs)(U.Group, {
                children: [(0, Q.jsx)(U.Item, {
                    icon: W ? (0, Q.jsx)(W, {
                        className: `icon`
                    }) : void 0,
                    label: d.formatMessage($.webSearch),
                    onClick: () => z(i.Search)
                }, i.Search), (0, Q.jsx)(U.Item, {
                    icon: G ? (0, Q.jsx)(G, {
                        className: `icon`
                    }) : void 0,
                    label: d.formatMessage($.createImage),
                    onClick: () => z(i.PictureV2)
                }, i.PictureV2)]
            }) : null]
        }),
        _e = M || V.length > 0 || O;
    return (0, Q.jsxs)(Q.Fragment, {
        children: [(0, Q.jsx)(l, {}), (0, Q.jsxs)(`div`, {
            className: `relative w-full`,
            inert: ae || c,
            children: [o && !u && S != null && (0, Q.jsx)(Ct, {
                editorView: S,
                roomId: e
            }), (0, Q.jsxs)(C.div, {
                layout: !0,
                transition: N,
                className: k(`shadow-short bg-token-bg-elevated-primary overflow-hidden`, _e ? `rounded-3xl` : `rounded-full`),
                children: [O != null && (0, Q.jsx)(`div`, {
                    children: (0, Q.jsx)(Se, {
                        replyRegions: [{
                            type: O.messageType,
                            value: O.previewText,
                            onRemoveRegion: () => E.clearReplyTo()
                        }]
                    })
                }), V.length > 0 && (0, Q.jsx)(`div`, {
                    className: `px-4 pt-4 pb-2`,
                    children: (0, Q.jsx)(Zt, {
                        attachments: V,
                        onRemove: e => E.attachments$.set(t => t.filter(t => t !== e)),
                        render: e => {
                            switch (e.kind) {
                                case `fileUpload`:
                                    return (0, Q.jsx)(Yt, {
                                        fileAttachment: e
                                    });
                                case `sticker`:
                                    return null;
                                default:
                                    return null
                            }
                        }
                    })
                }), (0, Q.jsx)(`input`, {
                    ref: ee,
                    type: `file`,
                    disabled: u,
                    className: `hidden`,
                    onChange: ce
                }), (0, Q.jsxs)(C.div, {
                    layout: `position`,
                    transition: N,
                    className: k(`grid grid-cols-[auto_1fr_auto] gap-x-2 px-3 py-2.5`, M ? j ? `gap-y-2 [grid-template-areas:'primary_primary_primary'_'leading_tools_trailing']` : `gap-y-2 [grid-template-areas:'primary_primary_primary'_'leading_._trailing']` : `items-center [grid-template-areas:'leading_primary_trailing']`),
                    children: [(0, Q.jsx)(C.div, {
                        layout: `position`,
                        transition: N,
                        className: `flex items-center [grid-area:leading]`,
                        children: (0, Q.jsx)(it, {
                            items: he,
                            children: (0, Q.jsx)(Je, {
                                disabled: u,
                                onDoubleClick: R
                            })
                        })
                    }), (0, Q.jsx)(C.div, {
                        layout: `position`,
                        transition: N,
                        className: k(H, `flex min-h-14 flex-1 items-center [grid-area:primary]`),
                        children: (0, Q.jsx)(`div`, {
                            ref: v,
                            className: k(`bg-token-bg-elevated-primary min-h-12 w-full rounded-2xl px-2`, Te[`prosemirror-parent`], h() ? `firefox` : `default-browser`)
                        })
                    }), (0, Q.jsx)(C.div, {
                        layout: `position`,
                        transition: N,
                        className: `flex items-center justify-end [grid-area:trailing]`,
                        children: (0, Q.jsx)(`button`, {
                            "aria-label": d.formatMessage(ve.sendMessageTooltip),
                            className: `composer-submit-btn composer-submit-button-color h-9 w-9`,
                            disabled: !ue,
                            onClick: () => {
                                de()
                            },
                            children: (0, Q.jsx)(ke, {
                                className: `icon-sm`
                            })
                        })
                    }), j && (0, Q.jsx)(C.div, {
                        layout: `position`,
                        transition: N,
                        className: `min-w-0 [grid-area:tools]`,
                        initial: {
                            opacity: 0,
                            y: -6
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        children: (0, Q.jsx)(`div`, {
                            className: `flex flex-wrap gap-2`,
                            children: A && (0, Q.jsx)(xe, {
                                icon: A === i.Search ? W && (0, Q.jsx)(W, {
                                    className: `icon`
                                }) : G && (0, Q.jsx)(G, {
                                    className: `icon`
                                }),
                                label: A === i.Search ? d.formatMessage($.webSearch) : d.formatMessage($.createImage),
                                removable: !0,
                                onRemove: () => B(A)
                            }, A)
                        })
                    })]
                })]
            })]
        })]
    })
}

function qt(e, t, n) {
    "use forget";
    let r = (0, X.c)(5),
        [i, a] = (0, Z.useState)(!1),
        o = n !== ``,
        s, c;
    return r[0] !== t || r[1] !== e || r[2] !== o ? (s = () => {
        let n = t.current,
            r = e && e.dom ? e.dom : null;
        if (!n || !r) return;
        let i = e => {
                if (!n.isConnected || !r.isConnected) {
                    a(!1);
                    return
                }
                let t = (e ?? r.offsetHeight) - Jt(n, r) > Qt;
                a(e => t ? !0 : o ? e : !1)
            },
            s = b({
                axis: `height`,
                debounce: !0,
                target: r,
                onChange: e => {
                    let {
                        height: t
                    } = e;
                    return i(t)
                }
            });
        return i(r.offsetHeight), () => {
            s?.()
        }
    }, c = [e, t, o], r[0] = t, r[1] = e, r[2] = o, r[3] = s, r[4] = c) : (s = r[3], c = r[4]), (0, Z.useEffect)(s, c), i
}

function Jt(e, t) {
    let n = getComputedStyle(t),
        r = Number.parseFloat(n.paddingTop) ?? 0,
        i = Number.parseFloat(n.paddingBottom) ?? 0,
        a = Number.parseFloat(n.lineHeight);
    if (!Number.isNaN(a)) return a + r + i;
    let o = e.ownerDocument.createElement(`span`);
    o.textContent = `\xA0`, o.style.visibility = `hidden`, o.style.position = `absolute`, o.style.font = n.font, o.style.lineHeight = n.lineHeight, o.style.paddingTop = n.paddingTop, o.style.paddingBottom = n.paddingBottom, e.appendChild(o);
    let s = o.offsetHeight;
    return e.removeChild(o), s
}

function Yt(e) {
    "use forget";
    let t = (0, X.c)(8),
        {
            fileAttachment: n
        } = e,
        r;
    t[0] === n ? r = t[1] : (r = () => n.state(), t[0] = n, t[1] = r);
    let i = f(r);
    if (Nt(i.file.type) || i.file.type.startsWith(`image/`)) {
        let e = i.state === `complete` ? void 0 : `opacity-50`,
            n;
        return t[2] !== e || t[3] !== i.file ? (n = (0, Q.jsx)(Ht, {
            file: i.file,
            className: e
        }), t[2] = e, t[3] = i.file, t[4] = n) : n = t[4], n
    }
    let a;
    return t[5] !== i.file || t[6] !== i.state ? (a = (0, Q.jsx)(Xt, {
        file: i.file,
        state: i.state
    }), t[5] = i.file, t[6] = i.state, t[7] = a) : a = t[7], a
}

function Xt(e) {
    "use forget";
    let t = (0, X.c)(19),
        {
            file: n,
            state: r
        } = e,
        i = L(),
        a = r === `complete`,
        o;
    t[0] !== n.type || t[1] !== i ? (o = n.type && n.type !== `` ? Pt(n.type, i) : i.formatMessage({
        id: `chatgpt.calpico.group_chat.composer.attachment.unknown_file_type.label`,
        defaultMessage: `Unknown file type`
    }), t[0] = n.type, t[1] = i, t[2] = o) : o = t[2];
    let s = o,
        c = !a && `opacity-50`,
        l;
    t[3] === c ? l = t[4] : (l = k(`border-token-border-light bg-token-bg-tertiary flex max-w-xs items-center gap-2 rounded-lg border px-3 py-2 text-start`, c), t[3] = c, t[4] = l);
    let u;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, Q.jsx)(W, {
        className: `icon-sm`
    }), t[5] = u) : u = t[5];
    let d;
    t[6] !== n.name || t[7] !== i ? (d = n.name || i.formatMessage({
        id: `chatgpt.calpico.group_chat.composer.attachment.document.label`,
        defaultMessage: `Document`
    }), t[6] = n.name, t[7] = i, t[8] = d) : d = t[8];
    let f;
    t[9] === d ? f = t[10] : (f = (0, Q.jsx)(`div`, {
        className: `text-token-text-primary truncate text-sm font-medium`,
        children: d
    }), t[9] = d, t[10] = f);
    let p;
    t[11] === s ? p = t[12] : (p = (0, Q.jsx)(`div`, {
        className: `text-token-text-secondary truncate text-xs`,
        children: s
    }), t[11] = s, t[12] = p);
    let m;
    t[13] !== f || t[14] !== p ? (m = (0, Q.jsxs)(`div`, {
        className: `min-w-0`,
        children: [f, p]
    }), t[13] = f, t[14] = p, t[15] = m) : m = t[15];
    let h;
    return t[16] !== l || t[17] !== m ? (h = (0, Q.jsxs)(`div`, {
        className: l,
        children: [u, m]
    }), t[16] = l, t[17] = m, t[18] = h) : h = t[18], h
}

function Zt({
    attachments: e,
    onRemove: t,
    render: n
}) {
    return e.length === 0 ? null : (0, Q.jsx)(`div`, {
        className: `flex gap-2`,
        children: e.map((e, i) => (0, Q.jsxs)(`div`, {
            className: `group relative`,
            children: [n(e), (0, Q.jsx)(`button`, {
                type: `button`,
                onClick: () => t(e),
                className: `border-token-border-heavy bg-token-bg-primary text-token-text-secondary invisible absolute -end-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full border group-hover:visible`,
                children: (0, Q.jsx)(r, {
                    className: `icon-xs`
                })
            })]
        }, i))
    })
}
var X, Z, Q, Qt, $, $t = e((() => {
    X = B(), Et(), Mt(), Ft(), x(), Rt(), ut(), Bt(), j(), Ee(), m(), De(), Oe(), Gt(), me(), Qe(), we(), ae(), ue(), et(), Ke(), ye(), be(), G(), he(), D(), de(), p(), ce(), oe(), S(), u(), o(), n(), Z = t(R()), H(), s(), Q = V(), Qt = 1, $ = z({
        addPhotosAndFiles: {
            defaultMessage: `Add photos & files`,
            id: `calpico.composer.plusMenu.addPhotosAndFiles`
        },
        webSearch: {
            defaultMessage: `Web search`,
            id: `calpico.composer.plusMenu.webSearch`
        },
        createImage: {
            defaultMessage: `Create image`,
            id: `calpico.composer.plusMenu.createImage`
        }
    })
}));

function en(e) {
    return e ?? tn.groupchat
}
var tn, nn = e((() => {
    H(), tn = z({
        groupchat: {
            id: `ISN8OO`,
            defaultMessage: `ChatGPT can make mistakes. Check important info. Your personal ChatGPT memory is never used in group chats.`
        }
    })
}));
export {
    Vt as a, It as c, Nt as d, Dt as f, mt as g, dt as h, $t as i, Pt as l, Ot as m, nn as n, Gt as o, Mt as p, Kt as r, Rt as s, en as t, Ft as u
};
//# sourceMappingURL=1407e95e-m6vcm9k5g4pqxgoc.js.map