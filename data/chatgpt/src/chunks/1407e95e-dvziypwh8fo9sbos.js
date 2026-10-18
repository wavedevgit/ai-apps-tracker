import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Am as n,
    At as r,
    B6 as i,
    Bm as a,
    CU as o,
    Ctt as s,
    FU as c,
    Gat as l,
    Hf as u,
    J6 as d,
    KK as f,
    Kb as p,
    Ki as m,
    NK as h,
    NU as g,
    O0 as _,
    Rf as v,
    SU as ee,
    T0 as y,
    Uf as b,
    Vm as x,
    Wat as S,
    Wf as C,
    Wm as te,
    Ym as w,
    _tt as T,
    b5 as E,
    cn as D,
    eh as O,
    eq as k,
    ex as ne,
    fU as re,
    i5 as A,
    ih as ie,
    km as j,
    lw as M,
    o1 as ae,
    oq as N,
    pU as P,
    qi as F,
    u1 as I,
    uw as oe,
    y5 as L,
    zf as R
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as z,
    Ln as B,
    Rn as V,
    Vn as H,
    wn as U,
    zn as W
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $J as se,
    A4 as ce,
    AX as le,
    DGt as ue,
    OGt as de,
    TGt as fe,
    THn as G,
    X1 as K,
    Xdn as pe,
    Ydn as me,
    ax as he,
    cv as ge,
    eY as _e,
    j4 as ve,
    kX as ye,
    ox as be,
    q1 as xe,
    sv as Se,
    v6t as Ce,
    wHn as q,
    y6t as we
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Dg as Te,
    Hm as Ee,
    Og as De,
    Um as Oe
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    At as ke,
    B as Ae,
    Ct as je,
    Et as Me,
    Tt as Ne,
    U as Pe,
    W as Fe,
    X as Ie,
    Z as Le,
    at as Re,
    ut as ze,
    z as Be
} from "./82782bc9-h658ejxn3ufkvr7a.js";
import {
    $_ as Ve,
    Q_ as He,
    Z_ as Ue,
    _S as We,
    av as Ge,
    dc as Ke,
    dw as qe,
    ev as Je,
    fS as Ye,
    fc as Xe,
    fw as Ze,
    iv as Qe,
    nv as $e,
    rv as et,
    tv as tt,
    uc as nt
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    i as rt,
    n as it,
    r as at,
    t as ot
} from "./bcae0416-b8j62rdz8whj83jx.js";
import {
    n as st,
    r as ct
} from "./149834c7-ke43zu3bod0dbk2p.js";

function lt(e) {
    "use forget";
    let t = (0, ut.c)(13),
        {
            accountUserId: n,
            size: r,
            allowViewingProfile: i,
            fallbackClassName: a,
            maskImageUrl: o
        } = e,
        s = C(n),
        c = b(n),
        l;
    t[0] !== c || t[1] !== s ? (l = s != null && c != null ? {
        name: s,
        picture: c
    } : void 0, t[0] = c, t[1] = s, t[2] = l) : l = t[2];
    let u = l,
        d;
    t[3] !== a || t[4] !== o || t[5] !== r || t[6] !== u ? (d = (0, dt.jsx)(O, {
        user: u,
        size: r,
        fallbackClassName: a,
        maskImageUrl: o
    }), t[3] = a, t[4] = o, t[5] = r, t[6] = u, t[7] = d) : d = t[7];
    let f = d;
    if (i) {
        let e;
        t[8] === n ? e = t[9] : (e = () => {
            _(Ce, {
                accountUserId: n
            })
        }, t[8] = n, t[9] = e);
        let r;
        return t[10] !== f || t[11] !== e ? (r = (0, dt.jsx)(`button`, {
            type: `button`,
            onClick: e,
            className: `relative z-10`,
            children: f
        }), t[10] = f, t[11] = e, t[12] = r) : r = t[12], r
    }
    return f
}
var ut, dt, ft = e((() => {
    ut = U(), ie(), we(), R(), y(), dt = z()
}));

function pt() {
    return {
        queryText: ``,
        active: !1,
        range: void 0
    }
}

function mt(e, t) {
    return e.setMeta(J, t), e
}

function ht(e) {
    e.dispatch(mt(e.state.tr, pt()))
}

function gt(e, t, n, r) {
    let i = e.state.tr;
    mt(i, pt()), i.insertText(t + ` `, n, r), e.dispatch(i)
}

function _t(e) {
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

function vt() {
    return new Ne({
        key: J,
        state: {
            init() {
                return pt()
            },
            apply(e, t, n, r) {
                let i = {
                    ...t,
                    ...e.getMeta(J)
                };
                if (e.selection.from === e.selection.to && !r.doc.eq(n.doc)) {
                    let t = _t(e.selection.$from);
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
var J, yt = e((() => {
    ke(), J = new Me(`calpicoMentionPlugin`)
}));

function bt(e, t, n) {
    "use no forget";
    let r = W(),
        i = v(),
        a = ae()?.normalizedAccountUserId ?? null,
        s = A(() => i.rooms$().get(e)?.members$() ?? []),
        [c, l] = (0, Y.useState)(void 0),
        [u, d] = (0, Y.useState)(0);
    (0, Y.useEffect)(() => {
        t.dispatch(mt(t.state.tr, {
            onMentionMatch(e) {
                l(e)
            }
        }))
    }, [t]);
    let f = r.formatMessage({
            id: `chatgpt.calpico.group_chat.composer.mentions.chatgpt.description`,
            defaultMessage: `Ask anything`
        }),
        p = (0, Y.useMemo)(() => {
            if (!c) return [];
            let e = c.text.trim().toLowerCase(),
                t = e.length === 0,
                n = {
                    kind: `assistant`,
                    text: `@ChatGPT`,
                    displayName: `ChatGPT`,
                    description: f
                },
                r = t || n.text.replace(/^@/, ``).toLowerCase().includes(e) || n.displayName.toLowerCase().includes(e),
                i = [];
            r && i.push(n);
            let o = s.filter(e => e.role === `user`).filter(e => e.accountUserId !== a).flatMap(n => {
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
            return i.concat(o)
        }, [c, f, s, a]),
        m = c != null && p.length > 0;
    (0, Y.useEffect)(() => {
        d(0)
    }, [p]);
    let h = o(() => {
            if (!c) return !1;
            let e = p[u] ?? p[0];
            return e ? (gt(t, e.text, c.range.from, c.range.to), !0) : !1
        }),
        g = o(e => {
            d(t => {
                let n = p.length;
                return n === 0 ? 0 : (e(t) % n + n) % n
            })
        });
    return (0, Y.useEffect)(() => {
        if (m) return Je(t, e => {
            if (e === `up`) n(), g(e => e - 1);
            else if (e === `down`) n(), g(e => e + 1);
            else if (e === `cancel`) Ve(t), ht(t);
            else if (e === `submit` || e === `checkMatch`) return h()
        }), () => {
            t.isDestroyed || Ve(t)
        }
    }, [m, t, n]), {
        suggestions: p,
        isSuggestorOpen: m,
        selectedIndex: u,
        setSelectedIndex: g,
        saveMention: h
    }
}

function xt(e) {
    "use forget";
    let t = (0, Ct.c)(10),
        {
            roomId: n,
            editorView: r
        } = e,
        i = (0, Y.useRef)(`mouse`),
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
    } = bt(n, r, a);
    if (!s) return null;
    let d;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (d = () => {
        i.current = `mouse`
    }, t[1] = d) : d = t[1];
    let f;
    t[2] !== r || t[3] !== u || t[4] !== c || t[5] !== l || t[6] !== o ? (f = o.map((e, t) => (0, X.jsx)(p, {
        as: `div`,
        autoFocus: !1,
        className: `rounded-lg px-3 py-2`,
        highlighted: t === c,
        hasManagedFocus: !0,
        icon: e.kind === `assistant` ? (0, X.jsx)(w, {
            iconName: `openai`,
            size: `small`
        }) : (0, X.jsx)(lt, {
            accountUserId: e.accountUserId,
            size: `small`
        }),
        onMouseOver: () => {
            i.current === `mouse` && l(() => t)
        },
        onClick: () => {
            u(), r.focus()
        },
        children: (0, X.jsxs)(`span`, {
            children: [(0, X.jsx)(`span`, {
                className: `font-medium`,
                children: e.displayName
            }), (0, X.jsxs)(`span`, {
                className: `text-token-text-secondary`,
                children: [` · `, e.description]
            })]
        })
    }, e.kind === `member` ? e.accountUserId : `assistant-` + e.text)), t[2] = r, t[3] = u, t[4] = c, t[5] = l, t[6] = o, t[7] = f) : f = t[7];
    let m;
    return t[8] === f ? m = t[9] : (m = (0, X.jsx)(`div`, {
        className: `shadow-long popover bg-token-bg-primary absolute start-0 end-0 bottom-full z-20 mb-2 max-h-56 max-w-xs overflow-y-auto rounded-2xl py-1.5`,
        onMouseDown: St,
        onMouseMove: d,
        children: f
    }), t[8] = f, t[9] = m), m
}

function St(e) {
    e.preventDefault()
}
var Ct, Y, X, wt = e((() => {
    Ct = U(), ie(), ft(), yt(), R(), ne(), tt(), i(), I(), Y = t(H()), V(), ee(), X = z()
}));

function Tt(e) {
    let [t] = (0, Dt.useState)(() => `controller` in e ? e.controller : new kt(e.roomId));
    if (!t) throw Error(`CalpicoRoomControllerProvider: roomId or controller is required`);
    return (0, Ot.jsx)(At.Provider, {
        value: t,
        children: e.children
    })
}

function Et() {
    return (0, Dt.use)(At)
}
var Dt, Ot, kt, At, jt = e((() => {
    n(), i(), Dt = t(H()), Ot = z(), l(), kt = class {
        constructor(e) {
            S(this, `roomId`, void 0), S(this, `attachments$`, void 0), S(this, `replyTo$`, void 0), S(this, `focusComposer$`, void 0), this.roomId = e, this.attachments$ = d([]), this.replyTo$ = d(null), this.focusComposer$ = d(!1)
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
            let n = j(e, 200);
            n.length === 0 ? this.setReplyToImage(e.id, t) : this.replyTo$.set({
                messageId: e.id,
                messageType: `text`,
                previewText: n
            }), this.focusComposer$.set(!0)
        }
        clearReplyTo() {
            this.replyTo$.set(null)
        }
    }, At = (0, Dt.createContext)({})
}));

function Mt(e) {
    return e != null && e.startsWith(`image/`)
}

function Nt(e, t) {
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
var Pt = e((() => {}));

function Ft(e, t) {
    let n = a();
    return e.size <= n ? !0 : (re().danger(t.formatMessage({
        id: `chatgpt.calpico.group_chat.composer.attachment.upload_size_limit.error`,
        defaultMessage: `Files must be {maxSize} MB or smaller.`
    }, {
        maxSize: t.formatNumber(n / It, {
            maximumFractionDigits: 1,
            minimumFractionDigits: 0
        })
    }), {
        id: `calpico_file_upload_size_limit`,
        toastId: `calpico_file_upload_size_limit`
    }), !1)
}
var It, Lt = e((() => {
    x(), P(), It = 1024 * 1024
}));

function Rt({
    disabled: e,
    editorValue$: t,
    placeholderText: n
}) {
    let r = new Pe(null, {
        editable: () => !e,
        ...e ? {
            attributes: {
                role: `textbox`,
                "aria-disabled": `true`,
                "aria-readonly": `true`,
                "aria-label": n
            }
        } : {},
        state: je.create({
            schema: Ze,
            plugins: [ot(), $e(), vt(), He(n), et(), Le({
                ...Re,
                "Shift-Enter": Re.Enter,
                "Mod-z": rt,
                "Mod-y": at,
                "Mod-Shift-z": at
            }), Be()]
        }),
        dispatchTransaction(e) {
            let n = r.state.apply(e);
            r.updateState(n), t.set(n.doc.textContent)
        }
    });
    return r
}
var zt = e((() => {
    yt(), Qe(), tt(), Ue(), qe(), ze(), Ae(), it(), Ie(), ke(), Fe()
}));

function Bt(e, t) {
    let n = d({
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

function Vt({
    file: e,
    className: t
}) {
    let n = W();
    return (0, Ut.jsx)(`img`, {
        src: (0, Ht.useMemo)(() => URL.createObjectURL(e), [e]),
        alt: n.formatMessage({
            id: `H7BtDz`,
            defaultMessage: `Image preview`
        }),
        className: L(`h-10 w-10 rounded-lg object-cover`, t)
    })
}
var Ht, Ut, Wt = e((() => {
    i(), E(), Ht = t(H()), V(), Ut = z()
}));

function Gt({
    roomId: e,
    scrollToBottom: t,
    disabled: n = !1,
    preserveDraftOnFailure: r = !1
}) {
    "use no forget";
    let i = u(),
        {
            assistantParticipant: a
        } = i.presentation,
        c = i.presentation.respectLegacyWriteBlock && te(),
        l = A(ve),
        p = n || c || l,
        h = W(),
        g = re(),
        _ = i.uploadCalpicoFile$,
        v = (0, Z.useRef)(null),
        ee = (0, Z.useRef)(null),
        y = (0, Z.useRef)(null),
        [b] = (0, Z.useState)(() => d(!1)),
        [x, S] = (0, Z.useState)(null),
        [C] = (0, Z.useState)(() => d(``)),
        [w] = (0, Z.useState)(() => d(null)),
        T = Et(),
        E;
    E = c ? h.formatMessage(i.presentation.composerDisabledMessage ?? {
        id: `chatgpt.calpico.group_chat.composer.disabled.region_message`,
        defaultMessage: `Group chat is no longer available in your region`,
        description: `Status message shown inside the disabled composer at the bottom of an existing ChatGPT group chat when group chat write actions are unavailable in the end user's region. It explains why the user cannot send messages.`
    }) : i.presentation.composerPlaceholderMessage ? h.formatMessage(i.presentation.composerPlaceholderMessage) : h.formatMessage({
        id: `3MYRWW`,
        defaultMessage: `Send a message or @ChatGPT`
    });
    let O = A(() => T.replyTo$()),
        ne = A(() => C()),
        ie = A(() => b()),
        j = A(() => w()),
        M = j != null,
        ae = Kt(x, v, ne),
        N = M || ae,
        P = A(f) ? ue : fe,
        F = (0, Z.useCallback)(e => Ft(e, h), [h]),
        I = (0, Z.useCallback)(e => {
            T.attachments$.set(t => [...t, {
                kind: `fileUpload`,
                calpicoFileId: ``,
                state: e
            }])
        }, [T]),
        oe = (0, Z.useCallback)(t => {
            if (!(p || !t))
                for (let n of Array.from(t)) {
                    if (!F(n)) continue;
                    let t = Bt(n, t => _(e, t));
                    I(t)
                }
        }, [I, e, F, _, p]),
        R = (0, Z.useCallback)(e => {
            oe(e.target.files), e.target.value = ``
        }, [oe]),
        z = (0, Z.useCallback)(() => {
            p || ee.current?.click()
        }, [p]),
        B = (0, Z.useCallback)(e => {
            w.set(t => t === e ? t : e)
        }, [w]),
        V = (0, Z.useCallback)(e => {
            w.set(t => t === e ? null : t)
        }, [w]),
        H = A(() => T.attachments$()),
        U = H.length > 0 || N ? `-mb-2.5` : `-my-2.5`,
        ce = A(() => {
            let e = H.some(e => e.kind === `fileUpload` && e.state().state !== `complete`);
            return !p && !e && (C().trim() !== `` || H.length > 0)
        }),
        le = o(async () => {
            if (p || x == null || b()) return;
            let n = Ye(x.state.doc).content;
            if (ce) {
                let a = [];
                for (let e of H) switch (e.kind) {
                    case `fileUpload`: {
                        let t = e.state();
                        t.state === `complete` && a.push({
                            attachment: {
                                type: `file`,
                                file_id: t.calpicoFileId
                            },
                            metadata: null
                        });
                        break
                    }
                    case `link`:
                        a.push({
                            attachment: {
                                type: `link`,
                                url: e.attachment.url
                            },
                            metadata: null
                        });
                        break;
                    case `post`:
                        a.push({
                            attachment: {
                                type: `post`,
                                post_id: e.attachment.post_id
                            },
                            metadata: null
                        });
                        break;
                    case `sticker`:
                        a.push({
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
                            ...a.length > 0 && {
                                attachments: a.map(e => e.attachment)
                            },
                            system_hints: j ? [j] : []
                        },
                        reply_to: O?.messageId ? {
                            message_id: O.messageId
                        } : void 0
                    },
                    s = JSON.stringify([e, o]),
                    c = y.current?.payloadKey === s ? y.current.requestId : crypto.randomUUID();
                o.request_id = c;
                let l = i.sendMessage$(e, o, a.map(e => e.metadata));
                if (r) {
                    b.set(!0);
                    let t = !1;
                    try {
                        await l, t = i.rooms$().get(e)?.viewMessages$().some(e => e.role === `user` && e.requestId === c && e.deliveryState === `failed`) ?? !1
                    } catch {
                        t = !0
                    }
                    if (b.set(!1), t) {
                        y.current = {
                            payloadKey: s,
                            requestId: c
                        }, g.danger(h.formatMessage({
                            id: `chatgpt.calpico.group_chat.composer.send_error.toast`,
                            defaultMessage: `Couldn't send message. Try again.`
                        }));
                        return
                    }
                }
                y.current = null, x && x.dispatch(x.state.tr.delete(0, x.state.doc.content.size)), T.attachments$.set([]), T.clearReplyTo(), w.set(null), t({
                    animation: `instant`
                })
            }
        });
    (0, Z.useEffect)(() => {
        let t = v.current;
        if (!t) return;
        let n = Rt({
            disabled: p,
            editorValue$: C,
            placeholderText: E
        });
        S(n);
        let r = Ge(n, {
            Enter: e => e.shiftKey ? !1 : (e.preventDefault(), le(), !0)
        });
        t.appendChild(n.dom);
        let a = st(),
            o = () => {
                p || a({
                    roomId: e,
                    path: i.respondingHeartbeatPath
                })
            },
            s = t => {
                if (p) return;
                let n = Array.from(t.clipboardData?.files ?? []).filter(F);
                n.length === 0 || n.length > 16 || (t.preventDefault(), n.forEach(t => {
                    let n = Bt(t, t => _(e, t));
                    I(n)
                }))
            };
        return n.dom.addEventListener(`keydown`, o), n.dom.addEventListener(`paste`, s), p || n.focus(), () => {
            n.dom.removeEventListener(`keydown`, o), n.dom.removeEventListener(`paste`, s), a.cancel(), r(), n.destroy(), S(null)
        }
    }, [e, C, h, T, i, F, I, _, E, p]);
    let de = A(() => T.focusComposer$());
    (0, Z.useEffect)(() => {
        !p && de && x && (x.focus(), T.focusComposer$.set(!1))
    }, [de, x, T, p]);
    let G = ye(k.Research),
        K = ye(k.PictureV2),
        pe = (0, Q.jsxs)(Q.Fragment, {
            children: [(0, Q.jsx)(q.Group, {
                separator: !1,
                children: (0, Q.jsx)(q.Item, {
                    icon: (0, Q.jsx)(Oe, {
                        className: `icon`
                    }),
                    label: h.formatMessage($.addPhotosAndFiles),
                    onClick: z
                }, `add-files`)
            }), a ? (0, Q.jsxs)(q.Group, {
                children: [(0, Q.jsx)(q.Item, {
                    icon: G ? (0, Q.jsx)(G, {
                        className: `icon`
                    }) : void 0,
                    label: h.formatMessage($.webSearch),
                    onClick: () => B(k.Search)
                }, k.Search), (0, Q.jsx)(q.Item, {
                    icon: K ? (0, Q.jsx)(K, {
                        className: `icon`
                    }) : void 0,
                    label: h.formatMessage($.createImage),
                    onClick: () => B(k.PictureV2)
                }, k.PictureV2)]
            }) : null]
        }),
        _e = N || H.length > 0 || O;
    return (0, Q.jsxs)(Q.Fragment, {
        children: [(0, Q.jsx)(m, {}), (0, Q.jsxs)(`div`, {
            className: `relative w-full`,
            inert: ie || l,
            children: [a && !p && x != null && (0, Q.jsx)(xt, {
                editorView: x,
                roomId: e
            }), (0, Q.jsxs)(D.div, {
                layout: !0,
                transition: P,
                className: L(`shadow-short bg-token-bg-elevated-primary overflow-hidden`, _e ? `rounded-3xl` : `rounded-full`),
                children: [O != null && (0, Q.jsx)(`div`, {
                    children: (0, Q.jsx)(se, {
                        replyRegions: [{
                            type: O.messageType,
                            value: O.previewText,
                            onRemoveRegion: () => T.clearReplyTo()
                        }]
                    })
                }), H.length > 0 && (0, Q.jsx)(`div`, {
                    className: `px-4 pt-4 pb-2`,
                    children: (0, Q.jsx)(Xt, {
                        attachments: H,
                        onRemove: e => T.attachments$.set(t => t.filter(t => t !== e)),
                        render: e => {
                            switch (e.kind) {
                                case `fileUpload`:
                                    return (0, Q.jsx)(Jt, {
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
                    disabled: p,
                    className: `hidden`,
                    onChange: R
                }), (0, Q.jsxs)(D.div, {
                    layout: `position`,
                    transition: P,
                    className: L(`grid grid-cols-[auto_1fr_auto] gap-x-2 px-3 py-2.5`, N ? M ? `gap-y-2 [grid-template-areas:'primary_primary_primary'_'leading_tools_trailing']` : `gap-y-2 [grid-template-areas:'primary_primary_primary'_'leading_._trailing']` : `items-center [grid-template-areas:'leading_primary_trailing']`),
                    children: [(0, Q.jsx)(D.div, {
                        layout: `position`,
                        transition: P,
                        className: `flex items-center [grid-area:leading]`,
                        children: (0, Q.jsx)(nt, {
                            items: pe,
                            children: (0, Q.jsx)(Ke, {
                                disabled: p,
                                onDoubleClick: z
                            })
                        })
                    }), (0, Q.jsx)(D.div, {
                        layout: `position`,
                        transition: P,
                        className: L(U, `flex min-h-14 flex-1 items-center [grid-area:primary]`),
                        children: (0, Q.jsx)(`div`, {
                            ref: v,
                            className: L(`bg-token-bg-elevated-primary min-h-12 w-full rounded-2xl px-2`, ge[`prosemirror-parent`], s() ? `firefox` : `default-browser`)
                        })
                    }), (0, Q.jsx)(D.div, {
                        layout: `position`,
                        transition: P,
                        className: `flex items-center justify-end [grid-area:trailing]`,
                        children: (0, Q.jsx)(`button`, {
                            "aria-label": h.formatMessage(me.sendMessageTooltip),
                            className: `composer-submit-btn composer-submit-button-color h-9 w-9`,
                            disabled: !ce,
                            onClick: () => {
                                le()
                            },
                            children: (0, Q.jsx)(De, {
                                className: `icon-sm`
                            })
                        })
                    }), M && (0, Q.jsx)(D.div, {
                        layout: `position`,
                        transition: P,
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
                            children: j && (0, Q.jsx)(he, {
                                icon: j === k.Search ? G && (0, Q.jsx)(G, {
                                    className: `icon`
                                }) : K && (0, Q.jsx)(K, {
                                    className: `icon`
                                }),
                                label: j === k.Search ? h.formatMessage($.webSearch) : h.formatMessage($.createImage),
                                removable: !0,
                                onRemove: () => V(j)
                            }, j)
                        })
                    })]
                })]
            })]
        })]
    })
}

function Kt(e, t, n) {
    "use forget";
    let r = (0, Zt.c)(5),
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
                let t = (e ?? r.offsetHeight) - qt(n, r) > Qt;
                a(e => t ? !0 : o ? e : !1)
            },
            s = g({
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

function qt(e, t) {
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

function Jt(e) {
    "use forget";
    let t = (0, Zt.c)(8),
        {
            fileAttachment: n
        } = e,
        r;
    t[0] === n ? r = t[1] : (r = () => n.state(), t[0] = n, t[1] = r);
    let i = A(r);
    if (Mt(i.file.type) || i.file.type.startsWith(`image/`)) {
        let e = i.state === `complete` ? void 0 : `opacity-50`,
            n;
        return t[2] !== e || t[3] !== i.file ? (n = (0, Q.jsx)(Vt, {
            file: i.file,
            className: e
        }), t[2] = e, t[3] = i.file, t[4] = n) : n = t[4], n
    }
    let a;
    return t[5] !== i.file || t[6] !== i.state ? (a = (0, Q.jsx)(Yt, {
        file: i.file,
        state: i.state
    }), t[5] = i.file, t[6] = i.state, t[7] = a) : a = t[7], a
}

function Yt(e) {
    "use forget";
    let t = (0, Zt.c)(19),
        {
            file: n,
            state: r
        } = e,
        i = W(),
        a = r === `complete`,
        o;
    t[0] !== n.type || t[1] !== i ? (o = n.type && n.type !== `` ? Nt(n.type, i) : i.formatMessage({
        id: `chatgpt.calpico.group_chat.composer.attachment.unknown_file_type.label`,
        defaultMessage: `Unknown file type`
    }), t[0] = n.type, t[1] = i, t[2] = o) : o = t[2];
    let s = o,
        c = !a && `opacity-50`,
        l;
    t[3] === c ? l = t[4] : (l = L(`border-token-border-light bg-token-bg-tertiary flex max-w-xs items-center gap-2 rounded-lg border px-3 py-2 text-start`, c), t[3] = c, t[4] = l);
    let u;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, Q.jsx)(xe, {
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

function Xt({
    attachments: e,
    onRemove: t,
    render: n
}) {
    return e.length === 0 ? null : (0, Q.jsx)(`div`, {
        className: `flex gap-2`,
        children: e.map((e, r) => (0, Q.jsxs)(`div`, {
            className: `group relative`,
            children: [n(e), (0, Q.jsx)(`button`, {
                type: `button`,
                onClick: () => t(e),
                className: `border-token-border-heavy bg-token-bg-primary text-token-text-secondary invisible absolute -end-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full border group-hover:visible`,
                children: (0, Q.jsx)(M, {
                    className: `icon-xs`
                })
            })]
        }, r))
    })
}
var Zt, Z, Q, Qt, $, $t = e((() => {
    Zt = U(), wt(), jt(), Pt(), x(), Lt(), ct(), zt(), R(), G(), oe(), Te(), Ee(), Wt(), K(), Xe(), pe(), F(), ce(), Qe(), We(), Se(), _e(), be(), de(), i(), le(), N(), P(), c(), h(), T(), E(), r(), Z = t(H()), V(), ee(), Q = z(), Qt = 1, $ = B({
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
    V(), tn = B({
        groupchat: {
            id: `ISN8OO`,
            defaultMessage: `ChatGPT can make mistakes. Check important info. Your personal ChatGPT memory is never used in group chats.`
        }
    })
}));
export {
    Bt as a, Ft as c, Mt as d, Tt as f, ft as g, lt as h, $t as i, Nt as l, Et as m, nn as n, Wt as o, jt as p, Gt as r, Lt as s, en as t, Pt as u
};
//# sourceMappingURL=1407e95e-dvziypwh8fo9sbos.js.map