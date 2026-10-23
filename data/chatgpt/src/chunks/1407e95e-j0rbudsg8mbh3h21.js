import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as n,
    Aq as r,
    At as i,
    Dnt as a,
    IU as o,
    Ji as s,
    Jot as c,
    K5 as l,
    KU as u,
    LU as d,
    Nw as f,
    Pw as p,
    R8 as m,
    U1 as h,
    Xm as g,
    Ym as ee,
    Yot as _,
    aW as v,
    ap as y,
    bh as te,
    bx as b,
    c2 as x,
    cn as S,
    cp as ne,
    d2 as C,
    fx as w,
    gq as re,
    hh as T,
    ip as ie,
    j5 as E,
    lp as ae,
    oh as D,
    q1 as O,
    q5 as oe,
    qU as se,
    qi as ce,
    rW as k,
    rq as A,
    sh as j,
    uh as le,
    up as M,
    wh as N,
    wq as P,
    xnt as ue
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as F,
    Ln as I,
    Rn as L,
    Vn as R,
    wn as z,
    zn as B
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Afn as de,
    CGt as fe,
    EGt as V,
    FX as H,
    MUn as pe,
    PX as me,
    R4 as U,
    TGt as he,
    aY as W,
    cx as ge,
    dv as _e,
    f6t as ve,
    i0 as ye,
    iY as be,
    jUn as G,
    jfn as xe,
    lx as Se,
    p6t as Ce,
    t0 as we,
    uv as Te,
    z4 as Ee
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Bm as De,
    Eg as Oe,
    Tg as ke,
    Vm as Ae
} from "./30901919-s8bko9nrkqwv6i4f.js";
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
} from "./82782bc9-b4xbouzwkkyrfqq2.js";
import {
    av as Ue,
    bS as We,
    cv as Ge,
    dc as Ke,
    fc as qe,
    hS as Je,
    hw as Ye,
    iv as Xe,
    lv as Ze,
    mw as Qe,
    nv as $e,
    ov as et,
    pc as tt,
    rv as nt,
    sv as rt,
    tv as it
} from "./8b34dbc2-lmwubajnld74ksfm.js";
import {
    i as at,
    n as ot,
    r as st,
    t as ct
} from "./bcae0416-ca1o0vsrlv3npyag.js";
import {
    n as lt,
    r as ut
} from "./149834c7-msda0nwzr4hxk7xk.js";

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
        s = M(n),
        c = ae(n),
        l;
    t[0] !== c || t[1] !== s ? (l = s != null && c != null ? {
        name: s,
        picture: c
    } : void 0, t[0] = c, t[1] = s, t[2] = l) : l = t[2];
    let u = l,
        d;
    t[3] !== a || t[4] !== o || t[5] !== r || t[6] !== u ? (d = (0, pt.jsx)(te, {
        user: u,
        size: r,
        fallbackClassName: a,
        maskImageUrl: o
    }), t[3] = a, t[4] = o, t[5] = r, t[6] = u, t[7] = d) : d = t[7];
    let f = d;
    if (i) {
        let e;
        t[8] === n ? e = t[9] : (e = () => {
            C(ve, {
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
    ft = z(), N(), Ce(), y(), x(), pt = F()
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
    let r = B(),
        i = ie(),
        a = h()?.normalizedAccountUserId ?? null,
        o = E(() => i.rooms$().get(e)?.members$() ?? []),
        [s, c] = (0, q.useState)(void 0),
        [l, u] = (0, q.useState)(0);
    (0, q.useEffect)(() => {
        t.dispatch(gt(t.state.tr, {
            onMentionMatch(e) {
                c(e)
            }
        }))
    }, [t]);
    let d = r.formatMessage({
            id: `chatgpt.calpico.group_chat.composer.mentions.chatgpt.description`,
            defaultMessage: `Ask anything`
        }),
        f = (0, q.useMemo)(() => {
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
    (0, q.useEffect)(() => {
        u(0)
    }, [f]);
    let m = se(() => {
            if (!s) return !1;
            let e = f[l] ?? f[0];
            return e ? (vt(t, e.text, s.range.from, s.range.to), !0) : !1
        }),
        g = se(e => {
            u(t => {
                let n = f.length;
                return n === 0 ? 0 : (e(t) % n + n) % n
            })
        });
    return (0, q.useEffect)(() => {
        if (p) return Xe(t, e => {
            if (e === `up`) n(), g(e => e - 1);
            else if (e === `down`) n(), g(e => e + 1);
            else if (e === `cancel`) nt(t), _t(t);
            else if (e === `submit` || e === `checkMatch`) return m()
        }), () => {
            t.isDestroyed || nt(t)
        }
    }, [p, t, n]), {
        suggestions: f,
        isSuggestorOpen: p,
        selectedIndex: l,
        setSelectedIndex: g,
        saveMention: m
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
    t[2] !== r || t[3] !== u || t[4] !== c || t[5] !== l || t[6] !== o ? (f = o.map((e, t) => (0, J.jsx)(w, {
        as: `div`,
        autoFocus: !1,
        className: `rounded-lg px-3 py-2`,
        highlighted: t === c,
        hasManagedFocus: !0,
        icon: e.kind === `assistant` ? (0, J.jsx)(T, {
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
    Tt = z(), N(), mt(), xt(), y(), b(), Ue(), n(), O(), q = t(R()), L(), u(), J = F()
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
    g(), n(), Y = t(R()), kt = F(), _(), At = class {
        constructor(e) {
            c(this, `roomId`, void 0), c(this, `attachments$`, void 0), c(this, `replyTo$`, void 0), c(this, `focusComposer$`, void 0), this.roomId = e, this.attachments$ = m([]), this.replyTo$ = m(null), this.focusComposer$ = m(!1)
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
            let n = ee(e, 200);
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
    let n = D();
    return e.size <= n ? !0 : (o().danger(t.formatMessage({
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
    j(), d(), Lt = 1024 * 1024
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
            schema: Ye,
            plugins: [ct(), et(), bt(), $e(n), rt(), ze({
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
    xt(), Ge(), Ue(), it(), Qe(), Ve(), Me(), ot(), Re(), je(), Le()
}));

function Vt(e, t) {
    let n = m({
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
        className: l(`h-10 w-10 rounded-lg object-cover`, t)
    })
}
var Ut, Wt, Gt = e((() => {
    n(), oe(), Ut = t(R()), L(), Wt = F()
}));

function Kt({
    roomId: e,
    scrollToBottom: t,
    disabled: n = !1,
    preserveDraftOnFailure: r = !1
}) {
    "use no forget";
    let i = ne(),
        {
            assistantParticipant: s
        } = i.presentation,
        c = i.presentation.respectLegacyWriteBlock && le(),
        u = E(Ee),
        d = n || c || u,
        f = B(),
        p = o(),
        h = i.uploadCalpicoFile$,
        g = (0, Z.useRef)(null),
        ee = (0, Z.useRef)(null),
        _ = (0, Z.useRef)(null),
        [v] = (0, Z.useState)(() => m(!1)),
        [y, te] = (0, Z.useState)(null),
        [b] = (0, Z.useState)(() => m(``)),
        [x] = (0, Z.useState)(() => m(null)),
        C = Ot(),
        w;
    w = c ? f.formatMessage(i.presentation.composerDisabledMessage ?? {
        id: `chatgpt.calpico.group_chat.composer.disabled.region_message`,
        defaultMessage: `Group chat is no longer available in your region`,
        description: `Status message shown inside the disabled composer at the bottom of an existing ChatGPT group chat when group chat write actions are unavailable in the end user's region. It explains why the user cannot send messages.`
    }) : i.presentation.composerPlaceholderMessage ? f.formatMessage(i.presentation.composerPlaceholderMessage) : f.formatMessage({
        id: `3MYRWW`,
        defaultMessage: `Send a message or @ChatGPT`
    });
    let T = E(() => C.replyTo$()),
        ie = E(() => b()),
        ae = E(() => v()),
        D = E(() => x()),
        O = D != null,
        oe = qt(y, g, ie),
        k = O || oe,
        A = E(re) ? he : fe,
        j = (0, Z.useCallback)(e => It(e, f), [f]),
        M = (0, Z.useCallback)(e => {
            C.attachments$.set(t => [...t, {
                kind: `fileUpload`,
                calpicoFileId: ``,
                state: e
            }])
        }, [C]),
        N = (0, Z.useCallback)(t => {
            if (!(d || !t))
                for (let n of Array.from(t)) {
                    if (!j(n)) continue;
                    let t = Vt(n, t => h(e, t));
                    M(t)
                }
        }, [M, e, j, h, d]),
        ue = (0, Z.useCallback)(e => {
            N(e.target.files), e.target.value = ``
        }, [N]),
        F = (0, Z.useCallback)(() => {
            d || ee.current?.click()
        }, [d]),
        I = (0, Z.useCallback)(e => {
            x.set(t => t === e ? t : e)
        }, [x]),
        L = (0, Z.useCallback)(e => {
            x.set(t => t === e ? null : t)
        }, [x]),
        R = E(() => C.attachments$()),
        z = R.length > 0 || k ? `-mb-2.5` : `-my-2.5`,
        V = E(() => {
            let e = R.some(e => e.kind === `fileUpload` && e.state().state !== `complete`);
            return !d && !e && (b().trim() !== `` || R.length > 0)
        }),
        H = se(async () => {
            if (d || y == null || v()) return;
            let n = Je(y.state.doc).content;
            if (V) {
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
                            system_hints: D ? [D] : []
                        },
                        reply_to: T?.messageId ? {
                            message_id: T.messageId
                        } : void 0
                    },
                    s = JSON.stringify([e, o]),
                    c = _.current?.payloadKey === s ? _.current.requestId : crypto.randomUUID();
                o.request_id = c;
                let l = i.sendMessage$(e, o, a.map(e => e.metadata));
                if (r) {
                    v.set(!0);
                    let t = !1;
                    try {
                        await l, t = i.rooms$().get(e)?.viewMessages$().some(e => e.role === `user` && e.requestId === c && e.deliveryState === `failed`) ?? !1
                    } catch {
                        t = !0
                    }
                    if (v.set(!1), t) {
                        _.current = {
                            payloadKey: s,
                            requestId: c
                        }, p.danger(f.formatMessage({
                            id: `chatgpt.calpico.group_chat.composer.send_error.toast`,
                            defaultMessage: `Couldn't send message. Try again.`
                        }));
                        return
                    }
                }
                _.current = null, y && y.dispatch(y.state.tr.delete(0, y.state.doc.content.size)), C.attachments$.set([]), C.clearReplyTo(), x.set(null), t({
                    animation: `instant`
                })
            }
        });
    (0, Z.useEffect)(() => {
        let t = g.current;
        if (!t) return;
        let n = zt({
            disabled: d,
            editorValue$: b,
            placeholderText: w
        });
        te(n);
        let r = Ze(n, {
            Enter: e => e.shiftKey ? !1 : (e.preventDefault(), H(), !0)
        });
        t.appendChild(n.dom);
        let a = lt(),
            o = () => {
                d || a({
                    roomId: e,
                    path: i.respondingHeartbeatPath
                })
            },
            s = t => {
                if (d) return;
                let n = Array.from(t.clipboardData?.files ?? []).filter(j);
                n.length === 0 || n.length > 16 || (t.preventDefault(), n.forEach(t => {
                    let n = Vt(t, t => h(e, t));
                    M(n)
                }))
            };
        return n.dom.addEventListener(`keydown`, o), n.dom.addEventListener(`paste`, s), d || n.focus(), () => {
            n.dom.removeEventListener(`keydown`, o), n.dom.removeEventListener(`paste`, s), a.cancel(), r(), n.destroy(), te(null)
        }
    }, [e, b, f, C, i, j, M, h, w, d]);
    let pe = E(() => C.focusComposer$());
    (0, Z.useEffect)(() => {
        !d && pe && y && (y.focus(), C.focusComposer$.set(!1))
    }, [pe, y, C, d]);
    let U = me(P.Research),
        W = me(P.PictureV2),
        ve = (0, Q.jsxs)(Q.Fragment, {
            children: [(0, Q.jsx)(G.Group, {
                separator: !1,
                children: (0, Q.jsx)(G.Item, {
                    icon: (0, Q.jsx)(Ae, {
                        className: `icon`
                    }),
                    label: f.formatMessage($.addPhotosAndFiles),
                    onClick: F
                }, `add-files`)
            }), s ? (0, Q.jsxs)(G.Group, {
                children: [(0, Q.jsx)(G.Item, {
                    icon: U ? (0, Q.jsx)(U, {
                        className: `icon`
                    }) : void 0,
                    label: f.formatMessage($.webSearch),
                    onClick: () => I(P.Search)
                }, P.Search), (0, Q.jsx)(G.Item, {
                    icon: W ? (0, Q.jsx)(W, {
                        className: `icon`
                    }) : void 0,
                    label: f.formatMessage($.createImage),
                    onClick: () => I(P.PictureV2)
                }, P.PictureV2)]
            }) : null]
        }),
        ye = k || R.length > 0 || T;
    return (0, Q.jsxs)(Q.Fragment, {
        children: [(0, Q.jsx)(ce, {}), (0, Q.jsxs)(`div`, {
            className: `relative w-full`,
            inert: ae || u,
            children: [s && !d && y != null && (0, Q.jsx)(Ct, {
                editorView: y,
                roomId: e
            }), (0, Q.jsxs)(S.div, {
                layout: !0,
                transition: A,
                className: l(`shadow-short bg-token-bg-elevated-primary overflow-hidden`, ye ? `rounded-3xl` : `rounded-full`),
                children: [T != null && (0, Q.jsx)(`div`, {
                    children: (0, Q.jsx)(be, {
                        replyRegions: [{
                            type: T.messageType,
                            value: T.previewText,
                            onRemoveRegion: () => C.clearReplyTo()
                        }]
                    })
                }), R.length > 0 && (0, Q.jsx)(`div`, {
                    className: `px-4 pt-4 pb-2`,
                    children: (0, Q.jsx)(Zt, {
                        attachments: R,
                        onRemove: e => C.attachments$.set(t => t.filter(t => t !== e)),
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
                    disabled: d,
                    className: `hidden`,
                    onChange: ue
                }), (0, Q.jsxs)(S.div, {
                    layout: `position`,
                    transition: A,
                    className: l(`grid grid-cols-[auto_1fr_auto] gap-x-2 px-3 py-2.5`, k ? O ? `gap-y-2 [grid-template-areas:'primary_primary_primary'_'leading_tools_trailing']` : `gap-y-2 [grid-template-areas:'primary_primary_primary'_'leading_._trailing']` : `items-center [grid-template-areas:'leading_primary_trailing']`),
                    children: [(0, Q.jsx)(S.div, {
                        layout: `position`,
                        transition: A,
                        className: `flex items-center [grid-area:leading]`,
                        children: (0, Q.jsx)(Ke, {
                            items: ve,
                            children: (0, Q.jsx)(qe, {
                                disabled: d,
                                onDoubleClick: F
                            })
                        })
                    }), (0, Q.jsx)(S.div, {
                        layout: `position`,
                        transition: A,
                        className: l(z, `flex min-h-14 flex-1 items-center [grid-area:primary]`),
                        children: (0, Q.jsx)(`div`, {
                            ref: g,
                            className: l(`bg-token-bg-elevated-primary min-h-12 w-full rounded-2xl px-2`, _e[`prosemirror-parent`], a() ? `firefox` : `default-browser`)
                        })
                    }), (0, Q.jsx)(S.div, {
                        layout: `position`,
                        transition: A,
                        className: `flex items-center justify-end [grid-area:trailing]`,
                        children: (0, Q.jsx)(`button`, {
                            "aria-label": f.formatMessage(de.sendMessageTooltip),
                            className: `composer-submit-btn composer-submit-button-color h-9 w-9`,
                            disabled: !V,
                            onClick: () => {
                                H()
                            },
                            children: (0, Q.jsx)(Oe, {
                                className: `icon-sm`
                            })
                        })
                    }), O && (0, Q.jsx)(S.div, {
                        layout: `position`,
                        transition: A,
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
                            children: D && (0, Q.jsx)(ge, {
                                icon: D === P.Search ? U && (0, Q.jsx)(U, {
                                    className: `icon`
                                }) : W && (0, Q.jsx)(W, {
                                    className: `icon`
                                }),
                                label: D === P.Search ? f.formatMessage($.webSearch) : f.formatMessage($.createImage),
                                removable: !0,
                                onRemove: () => L(D)
                            }, D)
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
            s = k({
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
    let i = E(r);
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
        i = B(),
        a = r === `complete`,
        o;
    t[0] !== n.type || t[1] !== i ? (o = n.type && n.type !== `` ? Pt(n.type, i) : i.formatMessage({
        id: `chatgpt.calpico.group_chat.composer.attachment.unknown_file_type.label`,
        defaultMessage: `Unknown file type`
    }), t[0] = n.type, t[1] = i, t[2] = o) : o = t[2];
    let s = o,
        c = !a && `opacity-50`,
        u;
    t[3] === c ? u = t[4] : (u = l(`border-token-border-light bg-token-bg-tertiary flex max-w-xs items-center gap-2 rounded-lg border px-3 py-2 text-start`, c), t[3] = c, t[4] = u);
    let d;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, Q.jsx)(we, {
        className: `icon-sm`
    }), t[5] = d) : d = t[5];
    let f;
    t[6] !== n.name || t[7] !== i ? (f = n.name || i.formatMessage({
        id: `chatgpt.calpico.group_chat.composer.attachment.document.label`,
        defaultMessage: `Document`
    }), t[6] = n.name, t[7] = i, t[8] = f) : f = t[8];
    let p;
    t[9] === f ? p = t[10] : (p = (0, Q.jsx)(`div`, {
        className: `text-token-text-primary truncate text-sm font-medium`,
        children: f
    }), t[9] = f, t[10] = p);
    let m;
    t[11] === s ? m = t[12] : (m = (0, Q.jsx)(`div`, {
        className: `text-token-text-secondary truncate text-xs`,
        children: s
    }), t[11] = s, t[12] = m);
    let h;
    t[13] !== p || t[14] !== m ? (h = (0, Q.jsxs)(`div`, {
        className: `min-w-0`,
        children: [p, m]
    }), t[13] = p, t[14] = m, t[15] = h) : h = t[15];
    let g;
    return t[16] !== u || t[17] !== h ? (g = (0, Q.jsxs)(`div`, {
        className: u,
        children: [d, h]
    }), t[16] = u, t[17] = h, t[18] = g) : g = t[18], g
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
                children: (0, Q.jsx)(f, {
                    className: `icon-xs`
                })
            })]
        }, r))
    })
}
var X, Z, Q, Qt, $, $t = e((() => {
    X = z(), Et(), Mt(), Ft(), j(), Rt(), ut(), Bt(), y(), pe(), p(), ke(), De(), Gt(), ye(), tt(), xe(), s(), U(), Ge(), We(), Te(), W(), Se(), V(), n(), H(), r(), d(), v(), A(), ue(), oe(), i(), Z = t(R()), L(), u(), Q = F(), Qt = 1, $ = I({
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
    Vt as a, It as c, Nt as d, Dt as f, mt as g, dt as h, $t as i, Pt as l, Ot as m, nn as n, Gt as o, Mt as p, Kt as r, Rt as s, en as t, Ft as u
};
//# sourceMappingURL=1407e95e-j0rbudsg8mbh3h21.js.map