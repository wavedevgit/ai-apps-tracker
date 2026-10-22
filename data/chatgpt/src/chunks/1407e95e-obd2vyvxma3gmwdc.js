import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $0 as n,
    $tt as r,
    At as i,
    BU as a,
    Ch as o,
    Dot as s,
    Dq as c,
    Eot as l,
    Jm as u,
    Ki as d,
    Nq as f,
    Ow as p,
    P1 as m,
    P5 as h,
    R1 as g,
    X5 as _,
    XU as v,
    Y5 as y,
    YU as b,
    Ym as x,
    ah as ee,
    ant as te,
    cW as S,
    cn as C,
    cp as w,
    dx as T,
    g8 as E,
    ip as D,
    kw as ne,
    lh as re,
    lp as ie,
    mh as O,
    n2 as k,
    oW as ae,
    oh as A,
    oq as j,
    qi as M,
    rp as N,
    sp as oe,
    w8 as P,
    yh as se,
    yq as ce,
    yx as le,
    zU as ue
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    Bn as F,
    Ln as I,
    Rn as L,
    Vn as R,
    wn as z,
    zn as B
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    F4 as de,
    FX as fe,
    I4 as pe,
    IGt as me,
    LGt as V,
    LHn as H,
    PGt as he,
    PX as ge,
    Q1 as U,
    RHn as W,
    aY as _e,
    cx as ve,
    dv as ye,
    iY as be,
    lx as xe,
    m6t as Se,
    mfn as Ce,
    p6t as we,
    pfn as Te,
    t0 as Ee,
    uv as De
} from "./conversation-small-nmt18uiom3b14vca.js";
import {
    Dg as Oe,
    Hm as ke,
    Og as Ae,
    Um as je
} from "./30901919-niqyapppecmq5jkn.js";
import {
    At as Me,
    B as Ne,
    Ct as Pe,
    Et as Fe,
    Tt as Ie,
    U as Le,
    W as Re,
    X as ze,
    Z as Be,
    at as Ve,
    ut as He,
    z as Ue
} from "./82782bc9-g3liom11amtlr9kq.js";
import {
    $_ as We,
    Q_ as Ge,
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
    ov as nt,
    rv as rt,
    tv as it,
    uc as at
} from "./8b34dbc2-ojcl97ddvu2212q0.js";
import {
    i as ot,
    n as st,
    r as ct,
    t as lt
} from "./bcae0416-hovub9z7ufk8htsh.js";
import {
    n as ut,
    r as dt
} from "./149834c7-mvcc1j0k82qbnkbz.js";

function ft(e) {
    "use forget";
    let t = (0, pt.c)(13),
        {
            accountUserId: n,
            size: r,
            allowViewingProfile: i,
            fallbackClassName: a,
            maskImageUrl: o
        } = e,
        s = ie(n),
        c = w(n),
        l;
    t[0] !== c || t[1] !== s ? (l = s != null && c != null ? {
        name: s,
        picture: c
    } : void 0, t[0] = c, t[1] = s, t[2] = l) : l = t[2];
    let u = l,
        d;
    t[3] !== a || t[4] !== o || t[5] !== r || t[6] !== u ? (d = (0, mt.jsx)(se, {
        user: u,
        size: r,
        fallbackClassName: a,
        maskImageUrl: o
    }), t[3] = a, t[4] = o, t[5] = r, t[6] = u, t[7] = d) : d = t[7];
    let f = d;
    if (i) {
        let e;
        t[8] === n ? e = t[9] : (e = () => {
            k(we, {
                accountUserId: n
            })
        }, t[8] = n, t[9] = e);
        let r;
        return t[10] !== f || t[11] !== e ? (r = (0, mt.jsx)(`button`, {
            type: `button`,
            onClick: e,
            className: `relative z-10`,
            children: f
        }), t[10] = f, t[11] = e, t[12] = r) : r = t[12], r
    }
    return f
}
var pt, mt, ht = e((() => {
    pt = z(), o(), Se(), D(), n(), mt = F()
}));

function gt() {
    return {
        queryText: ``,
        active: !1,
        range: void 0
    }
}

function _t(e, t) {
    return e.setMeta(G, t), e
}

function vt(e) {
    e.dispatch(_t(e.state.tr, gt()))
}

function yt(e, t, n, r) {
    let i = e.state.tr;
    _t(i, gt()), i.insertText(t + ` `, n, r), e.dispatch(i)
}

function bt(e) {
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

function xt() {
    return new Ie({
        key: G,
        state: {
            init() {
                return gt()
            },
            apply(e, t, n, r) {
                let i = {
                    ...t,
                    ...e.getMeta(G)
                };
                if (e.selection.from === e.selection.to && !r.doc.eq(n.doc)) {
                    let t = bt(e.selection.$from);
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
var G, St = e((() => {
    Me(), G = new Fe(`calpicoMentionPlugin`)
}));

function Ct(e, t, n) {
    "use no forget";
    let r = B(),
        i = N(),
        a = m()?.normalizedAccountUserId ?? null,
        o = h(() => i.rooms$().get(e)?.members$() ?? []),
        [s, c] = (0, K.useState)(void 0),
        [l, u] = (0, K.useState)(0);
    (0, K.useEffect)(() => {
        t.dispatch(_t(t.state.tr, {
            onMentionMatch(e) {
                c(e)
            }
        }))
    }, [t]);
    let d = r.formatMessage({
            id: `chatgpt.calpico.group_chat.composer.mentions.chatgpt.description`,
            defaultMessage: `Ask anything`
        }),
        f = (0, K.useMemo)(() => {
            if (!s) return [];
            let e = s.text.trim().toLowerCase(),
                t = e.length === 0,
                n = {
                    kind: `assistant`,
                    text: `@ChatGPT`,
                    displayName: `ChatGPT`,
                    description: d
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
        }, [s, d, o, a]),
        p = s != null && f.length > 0;
    (0, K.useEffect)(() => {
        u(0)
    }, [f]);
    let g = v(() => {
            if (!s) return !1;
            let e = f[l] ?? f[0];
            return e ? (yt(t, e.text, s.range.from, s.range.to), !0) : !1
        }),
        _ = v(e => {
            u(t => {
                let n = f.length;
                return n === 0 ? 0 : (e(t) % n + n) % n
            })
        });
    return (0, K.useEffect)(() => {
        if (p) return it(t, e => {
            if (e === `up`) n(), _(e => e - 1);
            else if (e === `down`) n(), _(e => e + 1);
            else if (e === `cancel`) Xe(t), vt(t);
            else if (e === `submit` || e === `checkMatch`) return g()
        }), () => {
            t.isDestroyed || Xe(t)
        }
    }, [p, t, n]), {
        suggestions: f,
        isSuggestorOpen: p,
        selectedIndex: l,
        setSelectedIndex: _,
        saveMention: g
    }
}

function wt(e) {
    "use forget";
    let t = (0, Et.c)(10),
        {
            roomId: n,
            editorView: r
        } = e,
        i = (0, K.useRef)(`mouse`),
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
    } = Ct(n, r, a);
    if (!s) return null;
    let d;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (d = () => {
        i.current = `mouse`
    }, t[1] = d) : d = t[1];
    let f;
    t[2] !== r || t[3] !== u || t[4] !== c || t[5] !== l || t[6] !== o ? (f = o.map((e, t) => (0, q.jsx)(T, {
        as: `div`,
        autoFocus: !1,
        className: `rounded-lg px-3 py-2`,
        highlighted: t === c,
        hasManagedFocus: !0,
        icon: e.kind === `assistant` ? (0, q.jsx)(O, {
            iconName: `openai`,
            size: `small`
        }) : (0, q.jsx)(ft, {
            accountUserId: e.accountUserId,
            size: `small`
        }),
        onMouseOver: () => {
            i.current === `mouse` && l(() => t)
        },
        onClick: () => {
            u(), r.focus()
        },
        children: (0, q.jsxs)(`span`, {
            children: [(0, q.jsx)(`span`, {
                className: `font-medium`,
                children: e.displayName
            }), (0, q.jsxs)(`span`, {
                className: `text-token-text-secondary`,
                children: [` · `, e.description]
            })]
        })
    }, e.kind === `member` ? e.accountUserId : `assistant-` + e.text)), t[2] = r, t[3] = u, t[4] = c, t[5] = l, t[6] = o, t[7] = f) : f = t[7];
    let p;
    return t[8] === f ? p = t[9] : (p = (0, q.jsx)(`div`, {
        className: `shadow-long popover bg-token-bg-primary absolute start-0 end-0 bottom-full z-20 mb-2 max-h-56 max-w-xs overflow-y-auto rounded-2xl py-1.5`,
        onMouseDown: Tt,
        onMouseMove: d,
        children: f
    }), t[8] = f, t[9] = p), p
}

function Tt(e) {
    e.preventDefault()
}
var Et, K, q, Dt = e((() => {
    Et = z(), o(), ht(), St(), D(), le(), tt(), E(), g(), K = t(R()), L(), b(), q = F()
}));

function Ot(e) {
    let [t] = (0, J.useState)(() => `controller` in e ? e.controller : new jt(e.roomId));
    if (!t) throw Error(`CalpicoRoomControllerProvider: roomId or controller is required`);
    return (0, At.jsx)(Mt.Provider, {
        value: t,
        children: e.children
    })
}

function kt() {
    return (0, J.use)(Mt)
}
var J, At, jt, Mt, Nt = e((() => {
    x(), E(), J = t(R()), At = F(), s(), jt = class {
        constructor(e) {
            l(this, `roomId`, void 0), l(this, `attachments$`, void 0), l(this, `replyTo$`, void 0), l(this, `focusComposer$`, void 0), this.roomId = e, this.attachments$ = P([]), this.replyTo$ = P(null), this.focusComposer$ = P(!1)
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
            let n = u(e, 200);
            n.length === 0 ? this.setReplyToImage(e.id, t) : this.replyTo$.set({
                messageId: e.id,
                messageType: `text`,
                previewText: n
            }), this.focusComposer$.set(!0)
        }
        clearReplyTo() {
            this.replyTo$.set(null)
        }
    }, Mt = (0, J.createContext)({})
}));

function Pt(e) {
    return e != null && e.startsWith(`image/`)
}

function Ft(e, t) {
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
var It = e((() => {}));

function Lt(e, t) {
    let n = ee();
    return e.size <= n ? !0 : (ue().danger(t.formatMessage({
        id: `chatgpt.calpico.group_chat.composer.attachment.upload_size_limit.error`,
        defaultMessage: `Files must be {maxSize} MB or smaller.`
    }, {
        maxSize: t.formatNumber(n / Rt, {
            maximumFractionDigits: 1,
            minimumFractionDigits: 0
        })
    }), {
        id: `calpico_file_upload_size_limit`,
        toastId: `calpico_file_upload_size_limit`
    }), !1)
}
var Rt, zt = e((() => {
    A(), a(), Rt = 1024 * 1024
}));

function Bt({
    disabled: e,
    editorValue$: t,
    placeholderText: n
}) {
    let r = new Le(null, {
        editable: () => !e,
        ...e ? {
            attributes: {
                role: `textbox`,
                "aria-disabled": `true`,
                "aria-readonly": `true`,
                "aria-label": n
            }
        } : {},
        state: Pe.create({
            schema: $e,
            plugins: [lt(), rt(), xt(), We(n), et(), Be({
                ...Ve,
                "Shift-Enter": Ve.Enter,
                "Mod-z": ot,
                "Mod-y": ct,
                "Mod-Shift-z": ct
            }), Ue()]
        }),
        dispatchTransaction(e) {
            let n = r.state.apply(e);
            r.updateState(n), t.set(n.doc.textContent)
        }
    });
    return r
}
var Vt = e((() => {
    St(), qe(), tt(), Ge(), Ye(), He(), Ne(), st(), ze(), Me(), Re()
}));

function Y(e, t) {
    let n = P({
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
    let n = B();
    return (0, Wt.jsx)(`img`, {
        src: (0, Ut.useMemo)(() => URL.createObjectURL(e), [e]),
        alt: n.formatMessage({
            id: `H7BtDz`,
            defaultMessage: `Image preview`
        }),
        className: y(`h-10 w-10 rounded-lg object-cover`, t)
    })
}
var Ut, Wt, Gt = e((() => {
    E(), _(), Ut = t(R()), L(), Wt = F()
}));

function Kt({
    roomId: e,
    scrollToBottom: t,
    disabled: n = !1,
    preserveDraftOnFailure: r = !1
}) {
    "use no forget";
    let i = oe(),
        {
            assistantParticipant: a
        } = i.presentation,
        o = i.presentation.respectLegacyWriteBlock && re(),
        s = h(pe),
        l = n || o || s,
        u = B(),
        f = ue(),
        p = i.uploadCalpicoFile$,
        m = (0, Z.useRef)(null),
        g = (0, Z.useRef)(null),
        _ = (0, Z.useRef)(null),
        [b] = (0, Z.useState)(() => P(!1)),
        [x, ee] = (0, Z.useState)(null),
        [S] = (0, Z.useState)(() => P(``)),
        [w] = (0, Z.useState)(() => P(null)),
        T = kt(),
        E;
    E = o ? u.formatMessage(i.presentation.composerDisabledMessage ?? {
        id: `chatgpt.calpico.group_chat.composer.disabled.region_message`,
        defaultMessage: `Group chat is no longer available in your region`,
        description: `Status message shown inside the disabled composer at the bottom of an existing ChatGPT group chat when group chat write actions are unavailable in the end user's region. It explains why the user cannot send messages.`
    }) : i.presentation.composerPlaceholderMessage ? u.formatMessage(i.presentation.composerPlaceholderMessage) : u.formatMessage({
        id: `3MYRWW`,
        defaultMessage: `Send a message or @ChatGPT`
    });
    let D = h(() => T.replyTo$()),
        ne = h(() => S()),
        ie = h(() => b()),
        O = h(() => w()),
        k = O != null,
        ae = qt(x, m, ne),
        A = k || ae,
        j = h(ce) ? me : he,
        M = (0, Z.useCallback)(e => Lt(e, u), [u]),
        N = (0, Z.useCallback)(e => {
            T.attachments$.set(t => [...t, {
                kind: `fileUpload`,
                calpicoFileId: ``,
                state: e
            }])
        }, [T]),
        se = (0, Z.useCallback)(t => {
            if (!(l || !t))
                for (let n of Array.from(t)) {
                    if (!M(n)) continue;
                    let t = Y(n, t => p(e, t));
                    N(t)
                }
        }, [N, e, M, p, l]),
        le = (0, Z.useCallback)(e => {
            se(e.target.files), e.target.value = ``
        }, [se]),
        F = (0, Z.useCallback)(() => {
            l || g.current?.click()
        }, [l]),
        I = (0, Z.useCallback)(e => {
            w.set(t => t === e ? t : e)
        }, [w]),
        L = (0, Z.useCallback)(e => {
            w.set(t => t === e ? null : t)
        }, [w]),
        R = h(() => T.attachments$()),
        z = R.length > 0 || A ? `-mb-2.5` : `-my-2.5`,
        de = h(() => {
            let e = R.some(e => e.kind === `fileUpload` && e.state().state !== `complete`);
            return !l && !e && (S().trim() !== `` || R.length > 0)
        }),
        fe = v(async () => {
            if (l || x == null || b()) return;
            let n = Ze(x.state.doc).content;
            if (de) {
                let a = [];
                for (let e of R) switch (e.kind) {
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
                            system_hints: O ? [O] : []
                        },
                        reply_to: D?.messageId ? {
                            message_id: D.messageId
                        } : void 0
                    },
                    s = JSON.stringify([e, o]),
                    c = _.current?.payloadKey === s ? _.current.requestId : crypto.randomUUID();
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
                        _.current = {
                            payloadKey: s,
                            requestId: c
                        }, f.danger(u.formatMessage({
                            id: `chatgpt.calpico.group_chat.composer.send_error.toast`,
                            defaultMessage: `Couldn't send message. Try again.`
                        }));
                        return
                    }
                }
                _.current = null, x && x.dispatch(x.state.tr.delete(0, x.state.doc.content.size)), T.attachments$.set([]), T.clearReplyTo(), w.set(null), t({
                    animation: `instant`
                })
            }
        });
    (0, Z.useEffect)(() => {
        let t = m.current;
        if (!t) return;
        let n = Bt({
            disabled: l,
            editorValue$: S,
            placeholderText: E
        });
        ee(n);
        let r = nt(n, {
            Enter: e => e.shiftKey ? !1 : (e.preventDefault(), fe(), !0)
        });
        t.appendChild(n.dom);
        let a = ut(),
            o = () => {
                l || a({
                    roomId: e,
                    path: i.respondingHeartbeatPath
                })
            },
            s = t => {
                if (l) return;
                let n = Array.from(t.clipboardData?.files ?? []).filter(M);
                n.length === 0 || n.length > 16 || (t.preventDefault(), n.forEach(t => {
                    let n = Y(t, t => p(e, t));
                    N(n)
                }))
            };
        return n.dom.addEventListener(`keydown`, o), n.dom.addEventListener(`paste`, s), l || n.focus(), () => {
            n.dom.removeEventListener(`keydown`, o), n.dom.removeEventListener(`paste`, s), a.cancel(), r(), n.destroy(), ee(null)
        }
    }, [e, S, u, T, i, M, N, p, E, l]);
    let V = h(() => T.focusComposer$());
    (0, Z.useEffect)(() => {
        !l && V && x && (x.focus(), T.focusComposer$.set(!1))
    }, [V, x, T, l]);
    let U = ge(c.Research),
        W = ge(c.PictureV2),
        _e = (0, Q.jsxs)(Q.Fragment, {
            children: [(0, Q.jsx)(H.Group, {
                separator: !1,
                children: (0, Q.jsx)(H.Item, {
                    icon: (0, Q.jsx)(je, {
                        className: `icon`
                    }),
                    label: u.formatMessage($.addPhotosAndFiles),
                    onClick: F
                }, `add-files`)
            }), a ? (0, Q.jsxs)(H.Group, {
                children: [(0, Q.jsx)(H.Item, {
                    icon: U ? (0, Q.jsx)(U, {
                        className: `icon`
                    }) : void 0,
                    label: u.formatMessage($.webSearch),
                    onClick: () => I(c.Search)
                }, c.Search), (0, Q.jsx)(H.Item, {
                    icon: W ? (0, Q.jsx)(W, {
                        className: `icon`
                    }) : void 0,
                    label: u.formatMessage($.createImage),
                    onClick: () => I(c.PictureV2)
                }, c.PictureV2)]
            }) : null]
        }),
        xe = A || R.length > 0 || D;
    return (0, Q.jsxs)(Q.Fragment, {
        children: [(0, Q.jsx)(d, {}), (0, Q.jsxs)(`div`, {
            className: `relative w-full`,
            inert: ie || s,
            children: [a && !l && x != null && (0, Q.jsx)(wt, {
                editorView: x,
                roomId: e
            }), (0, Q.jsxs)(C.div, {
                layout: !0,
                transition: j,
                className: y(`shadow-short bg-token-bg-elevated-primary overflow-hidden`, xe ? `rounded-3xl` : `rounded-full`),
                children: [D != null && (0, Q.jsx)(`div`, {
                    children: (0, Q.jsx)(be, {
                        replyRegions: [{
                            type: D.messageType,
                            value: D.previewText,
                            onRemoveRegion: () => T.clearReplyTo()
                        }]
                    })
                }), R.length > 0 && (0, Q.jsx)(`div`, {
                    className: `px-4 pt-4 pb-2`,
                    children: (0, Q.jsx)(Zt, {
                        attachments: R,
                        onRemove: e => T.attachments$.set(t => t.filter(t => t !== e)),
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
                    ref: g,
                    type: `file`,
                    disabled: l,
                    className: `hidden`,
                    onChange: le
                }), (0, Q.jsxs)(C.div, {
                    layout: `position`,
                    transition: j,
                    className: y(`grid grid-cols-[auto_1fr_auto] gap-x-2 px-3 py-2.5`, A ? k ? `gap-y-2 [grid-template-areas:'primary_primary_primary'_'leading_tools_trailing']` : `gap-y-2 [grid-template-areas:'primary_primary_primary'_'leading_._trailing']` : `items-center [grid-template-areas:'leading_primary_trailing']`),
                    children: [(0, Q.jsx)(C.div, {
                        layout: `position`,
                        transition: j,
                        className: `flex items-center [grid-area:leading]`,
                        children: (0, Q.jsx)(at, {
                            items: _e,
                            children: (0, Q.jsx)(Je, {
                                disabled: l,
                                onDoubleClick: F
                            })
                        })
                    }), (0, Q.jsx)(C.div, {
                        layout: `position`,
                        transition: j,
                        className: y(z, `flex min-h-14 flex-1 items-center [grid-area:primary]`),
                        children: (0, Q.jsx)(`div`, {
                            ref: m,
                            className: y(`bg-token-bg-elevated-primary min-h-12 w-full rounded-2xl px-2`, ye[`prosemirror-parent`], te() ? `firefox` : `default-browser`)
                        })
                    }), (0, Q.jsx)(C.div, {
                        layout: `position`,
                        transition: j,
                        className: `flex items-center justify-end [grid-area:trailing]`,
                        children: (0, Q.jsx)(`button`, {
                            "aria-label": u.formatMessage(Te.sendMessageTooltip),
                            className: `composer-submit-btn composer-submit-button-color h-9 w-9`,
                            disabled: !de,
                            onClick: () => {
                                fe()
                            },
                            children: (0, Q.jsx)(Ae, {
                                className: `icon-sm`
                            })
                        })
                    }), k && (0, Q.jsx)(C.div, {
                        layout: `position`,
                        transition: j,
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
                            children: O && (0, Q.jsx)(ve, {
                                icon: O === c.Search ? U && (0, Q.jsx)(U, {
                                    className: `icon`
                                }) : W && (0, Q.jsx)(W, {
                                    className: `icon`
                                }),
                                label: O === c.Search ? u.formatMessage($.webSearch) : u.formatMessage($.createImage),
                                removable: !0,
                                onRemove: () => L(O)
                            }, O)
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
            s = ae({
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
    let i = h(r);
    if (Pt(i.file.type) || i.file.type.startsWith(`image/`)) {
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
        i = B(),
        a = r === `complete`,
        o;
    t[0] !== n.type || t[1] !== i ? (o = n.type && n.type !== `` ? Ft(n.type, i) : i.formatMessage({
        id: `chatgpt.calpico.group_chat.composer.attachment.unknown_file_type.label`,
        defaultMessage: `Unknown file type`
    }), t[0] = n.type, t[1] = i, t[2] = o) : o = t[2];
    let s = o,
        c = !a && `opacity-50`,
        l;
    t[3] === c ? l = t[4] : (l = y(`border-token-border-light bg-token-bg-tertiary flex max-w-xs items-center gap-2 rounded-lg border px-3 py-2 text-start`, c), t[3] = c, t[4] = l);
    let u;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, Q.jsx)(U, {
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
        children: e.map((e, r) => (0, Q.jsxs)(`div`, {
            className: `group relative`,
            children: [n(e), (0, Q.jsx)(`button`, {
                type: `button`,
                onClick: () => t(e),
                className: `border-token-border-heavy bg-token-bg-primary text-token-text-secondary invisible absolute -end-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full border group-hover:visible`,
                children: (0, Q.jsx)(p, {
                    className: `icon-xs`
                })
            })]
        }, r))
    })
}
var X, Z, Q, Qt, $, $t = e((() => {
    X = z(), Dt(), Nt(), It(), A(), zt(), dt(), Vt(), D(), W(), ne(), Oe(), ke(), Gt(), Ee(), Qe(), Ce(), M(), de(), qe(), Ke(), De(), _e(), xe(), V(), E(), fe(), f(), a(), S(), j(), r(), _(), i(), Z = t(R()), L(), b(), Q = F(), Qt = 1, $ = I({
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
    L(), tn = I({
        groupchat: {
            id: `ISN8OO`,
            defaultMessage: `ChatGPT can make mistakes. Check important info. Your personal ChatGPT memory is never used in group chats.`
        }
    })
}));
export {
    Y as a, Lt as c, Pt as d, Ot as f, ht as g, ft as h, $t as i, Ft as l, kt as m, nn as n, Gt as o, Nt as p, Kt as r, zt as s, en as t, It as u
};
//# sourceMappingURL=1407e95e-obd2vyvxma3gmwdc.js.map