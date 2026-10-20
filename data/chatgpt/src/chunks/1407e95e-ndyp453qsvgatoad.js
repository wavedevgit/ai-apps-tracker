import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A5 as n,
    At as r,
    Dw as i,
    Eq as a,
    G5 as o,
    I1 as s,
    JU as c,
    Jm as l,
    K5 as u,
    Ki as d,
    M1 as f,
    Mq as p,
    Ow as m,
    RU as h,
    Sh as g,
    Wtt as _,
    Xtt as ee,
    YU as te,
    Z0 as ne,
    _ot as v,
    aW as y,
    ah as b,
    aq as x,
    b8 as S,
    ch as re,
    cn as C,
    cp as w,
    e2 as T,
    f8 as E,
    ih as D,
    np as O,
    op as ie,
    ph as ae,
    qi as oe,
    qm as k,
    rp as A,
    sW as se,
    sp as j,
    ux as M,
    vh as N,
    vot as P,
    vq as ce,
    vx as le,
    zU as ue
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    Bn as F,
    Ln as I,
    Rn as L,
    Vn as R,
    wn as z,
    zn as B
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    AGt as de,
    LHn as V,
    M4 as H,
    MX as U,
    N4 as fe,
    OGt as pe,
    Q1 as me,
    RHn as W,
    Y1 as G,
    cfn as he,
    cx as ge,
    jGt as _e,
    jX as ve,
    l6t as ye,
    lfn as be,
    lv as xe,
    nY as Se,
    sx as Ce,
    tY as we,
    u6t as Te,
    uv as Ee
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    Dg as De,
    Hm as Oe,
    Og as ke,
    Um as Ae
} from "./30901919-om7b3qf5hp4j9x4l.js";
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
} from "./82782bc9-cz4jkhg31tycbqqf.js";
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
} from "./8b34dbc2-j8rcexxiltkm8ucr.js";
import {
    i as at,
    n as ot,
    r as st,
    t as ct
} from "./bcae0416-nrdsbxz64t89v0qe.js";
import {
    n as lt,
    r as ut
} from "./149834c7-mrceqp4tsiibu39q.js";

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
        c = j(n),
        l;
    t[0] !== c || t[1] !== s ? (l = s != null && c != null ? {
        name: s,
        picture: c
    } : void 0, t[0] = c, t[1] = s, t[2] = l) : l = t[2];
    let u = l,
        d;
    t[3] !== a || t[4] !== o || t[5] !== r || t[6] !== u ? (d = (0, pt.jsx)(N, {
        user: u,
        size: r,
        fallbackClassName: a,
        maskImageUrl: o
    }), t[3] = a, t[4] = o, t[5] = r, t[6] = u, t[7] = d) : d = t[7];
    let f = d;
    if (i) {
        let e;
        t[8] === n ? e = t[9] : (e = () => {
            T(ye, {
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
    ft = z(), g(), Te(), A(), ne(), pt = F()
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

function St(e, t, r) {
    "use no forget";
    let i = B(),
        a = O(),
        o = f()?.normalizedAccountUserId ?? null,
        s = n(() => a.rooms$().get(e)?.members$() ?? []),
        [c, l] = (0, q.useState)(void 0),
        [u, d] = (0, q.useState)(0);
    (0, q.useEffect)(() => {
        t.dispatch(gt(t.state.tr, {
            onMentionMatch(e) {
                l(e)
            }
        }))
    }, [t]);
    let p = i.formatMessage({
            id: `chatgpt.calpico.group_chat.composer.mentions.chatgpt.description`,
            defaultMessage: `Ask anything`
        }),
        m = (0, q.useMemo)(() => {
            if (!c) return [];
            let e = c.text.trim().toLowerCase(),
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
            let a = s.filter(e => e.role === `user`).filter(e => e.accountUserId !== o).flatMap(n => {
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
            return i.concat(a)
        }, [c, p, s, o]),
        h = c != null && m.length > 0;
    (0, q.useEffect)(() => {
        d(0)
    }, [m]);
    let g = te(() => {
            if (!c) return !1;
            let e = m[u] ?? m[0];
            return e ? (vt(t, e.text, c.range.from, c.range.to), !0) : !1
        }),
        _ = te(e => {
            d(t => {
                let n = m.length;
                return n === 0 ? 0 : (e(t) % n + n) % n
            })
        });
    return (0, q.useEffect)(() => {
        if (h) return Xe(t, e => {
            if (e === `up`) r(), _(e => e - 1);
            else if (e === `down`) r(), _(e => e + 1);
            else if (e === `cancel`) Ue(t), _t(t);
            else if (e === `submit` || e === `checkMatch`) return g()
        }), () => {
            t.isDestroyed || Ue(t)
        }
    }, [h, t, r]), {
        suggestions: m,
        isSuggestorOpen: h,
        selectedIndex: u,
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
    t[2] !== r || t[3] !== u || t[4] !== c || t[5] !== l || t[6] !== o ? (f = o.map((e, t) => (0, J.jsx)(M, {
        as: `div`,
        autoFocus: !1,
        className: `rounded-lg px-3 py-2`,
        highlighted: t === c,
        hasManagedFocus: !0,
        icon: e.kind === `assistant` ? (0, J.jsx)(ae, {
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
    Tt = z(), g(), mt(), xt(), A(), le(), rt(), E(), s(), q = t(R()), L(), c(), J = F()
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
    l(), E(), Y = t(R()), kt = F(), P(), At = class {
        constructor(e) {
            v(this, `roomId`, void 0), v(this, `attachments$`, void 0), v(this, `replyTo$`, void 0), v(this, `focusComposer$`, void 0), this.roomId = e, this.attachments$ = S([]), this.replyTo$ = S(null), this.focusComposer$ = S(!1)
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
            let n = k(e, 200);
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
    return e.size <= n ? !0 : (h().danger(t.formatMessage({
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
    b(), ue(), Lt = 1024 * 1024
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
    let n = S({
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
        className: o(`h-10 w-10 rounded-lg object-cover`, t)
    })
}
var Ut, Wt, Gt = e((() => {
    E(), u(), Ut = t(R()), L(), Wt = F()
}));

function Kt({
    roomId: e,
    scrollToBottom: t,
    disabled: r = !1,
    preserveDraftOnFailure: i = !1
}) {
    "use no forget";
    let s = ie(),
        {
            assistantParticipant: c
        } = s.presentation,
        l = s.presentation.respectLegacyWriteBlock && re(),
        u = n(fe),
        f = r || l || u,
        p = B(),
        m = h(),
        g = s.uploadCalpicoFile$,
        _ = (0, Z.useRef)(null),
        ne = (0, Z.useRef)(null),
        v = (0, Z.useRef)(null),
        [y] = (0, Z.useState)(() => S(!1)),
        [b, x] = (0, Z.useState)(null),
        [w] = (0, Z.useState)(() => S(``)),
        [T] = (0, Z.useState)(() => S(null)),
        E = Ot(),
        D;
    D = l ? p.formatMessage(s.presentation.composerDisabledMessage ?? {
        id: `chatgpt.calpico.group_chat.composer.disabled.region_message`,
        defaultMessage: `Group chat is no longer available in your region`,
        description: `Status message shown inside the disabled composer at the bottom of an existing ChatGPT group chat when group chat write actions are unavailable in the end user's region. It explains why the user cannot send messages.`
    }) : s.presentation.composerPlaceholderMessage ? p.formatMessage(s.presentation.composerPlaceholderMessage) : p.formatMessage({
        id: `3MYRWW`,
        defaultMessage: `Send a message or @ChatGPT`
    });
    let O = n(() => E.replyTo$()),
        ae = n(() => w()),
        oe = n(() => y()),
        k = n(() => T()),
        A = k != null,
        se = qt(b, _, ae),
        j = A || se,
        M = n(ce) ? de : pe,
        N = (0, Z.useCallback)(e => It(e, p), [p]),
        P = (0, Z.useCallback)(e => {
            E.attachments$.set(t => [...t, {
                kind: `fileUpload`,
                calpicoFileId: ``,
                state: e
            }])
        }, [E]),
        le = (0, Z.useCallback)(t => {
            if (!(f || !t))
                for (let n of Array.from(t)) {
                    if (!N(n)) continue;
                    let t = Vt(n, t => g(e, t));
                    P(t)
                }
        }, [P, e, N, g, f]),
        ue = (0, Z.useCallback)(e => {
            le(e.target.files), e.target.value = ``
        }, [le]),
        F = (0, Z.useCallback)(() => {
            f || ne.current?.click()
        }, [f]),
        I = (0, Z.useCallback)(e => {
            T.set(t => t === e ? t : e)
        }, [T]),
        L = (0, Z.useCallback)(e => {
            T.set(t => t === e ? null : t)
        }, [T]),
        R = n(() => E.attachments$()),
        z = R.length > 0 || j ? `-mb-2.5` : `-my-2.5`,
        H = n(() => {
            let e = R.some(e => e.kind === `fileUpload` && e.state().state !== `complete`);
            return !f && !e && (w().trim() !== `` || R.length > 0)
        }),
        U = te(async () => {
            if (f || b == null || y()) return;
            let n = Ze(b.state.doc).content;
            if (H) {
                let r = [];
                for (let e of R) switch (e.kind) {
                    case `fileUpload`: {
                        let t = e.state();
                        t.state === `complete` && r.push({
                            attachment: {
                                type: `file`,
                                file_id: t.calpicoFileId
                            },
                            metadata: null
                        });
                        break
                    }
                    case `link`:
                        r.push({
                            attachment: {
                                type: `link`,
                                url: e.attachment.url
                            },
                            metadata: null
                        });
                        break;
                    case `post`:
                        r.push({
                            attachment: {
                                type: `post`,
                                post_id: e.attachment.post_id
                            },
                            metadata: null
                        });
                        break;
                    case `sticker`:
                        r.push({
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
                let a = {
                        content: {
                            text: n === `` ? null : n,
                            ...r.length > 0 && {
                                attachments: r.map(e => e.attachment)
                            },
                            system_hints: k ? [k] : []
                        },
                        reply_to: O?.messageId ? {
                            message_id: O.messageId
                        } : void 0
                    },
                    o = JSON.stringify([e, a]),
                    c = v.current?.payloadKey === o ? v.current.requestId : crypto.randomUUID();
                a.request_id = c;
                let l = s.sendMessage$(e, a, r.map(e => e.metadata));
                if (i) {
                    y.set(!0);
                    let t = !1;
                    try {
                        await l, t = s.rooms$().get(e)?.viewMessages$().some(e => e.role === `user` && e.requestId === c && e.deliveryState === `failed`) ?? !1
                    } catch {
                        t = !0
                    }
                    if (y.set(!1), t) {
                        v.current = {
                            payloadKey: o,
                            requestId: c
                        }, m.danger(p.formatMessage({
                            id: `chatgpt.calpico.group_chat.composer.send_error.toast`,
                            defaultMessage: `Couldn't send message. Try again.`
                        }));
                        return
                    }
                }
                v.current = null, b && b.dispatch(b.state.tr.delete(0, b.state.doc.content.size)), E.attachments$.set([]), E.clearReplyTo(), T.set(null), t({
                    animation: `instant`
                })
            }
        });
    (0, Z.useEffect)(() => {
        let t = _.current;
        if (!t) return;
        let n = zt({
            disabled: f,
            editorValue$: w,
            placeholderText: D
        });
        x(n);
        let r = qe(n, {
            Enter: e => e.shiftKey ? !1 : (e.preventDefault(), U(), !0)
        });
        t.appendChild(n.dom);
        let i = lt(),
            a = () => {
                f || i({
                    roomId: e,
                    path: s.respondingHeartbeatPath
                })
            },
            o = t => {
                if (f) return;
                let n = Array.from(t.clipboardData?.files ?? []).filter(N);
                n.length === 0 || n.length > 16 || (t.preventDefault(), n.forEach(t => {
                    let n = Vt(t, t => g(e, t));
                    P(n)
                }))
            };
        return n.dom.addEventListener(`keydown`, a), n.dom.addEventListener(`paste`, o), f || n.focus(), () => {
            n.dom.removeEventListener(`keydown`, a), n.dom.removeEventListener(`paste`, o), i.cancel(), r(), n.destroy(), x(null)
        }
    }, [e, w, p, E, s, N, P, g, D, f]);
    let me = n(() => E.focusComposer$());
    (0, Z.useEffect)(() => {
        !f && me && b && (b.focus(), E.focusComposer$.set(!1))
    }, [me, b, E, f]);
    let W = ve(a.Research),
        G = ve(a.PictureV2),
        ge = (0, Q.jsxs)(Q.Fragment, {
            children: [(0, Q.jsx)(V.Group, {
                separator: !1,
                children: (0, Q.jsx)(V.Item, {
                    icon: (0, Q.jsx)(Ae, {
                        className: `icon`
                    }),
                    label: p.formatMessage($.addPhotosAndFiles),
                    onClick: F
                }, `add-files`)
            }), c ? (0, Q.jsxs)(V.Group, {
                children: [(0, Q.jsx)(V.Item, {
                    icon: W ? (0, Q.jsx)(W, {
                        className: `icon`
                    }) : void 0,
                    label: p.formatMessage($.webSearch),
                    onClick: () => I(a.Search)
                }, a.Search), (0, Q.jsx)(V.Item, {
                    icon: G ? (0, Q.jsx)(G, {
                        className: `icon`
                    }) : void 0,
                    label: p.formatMessage($.createImage),
                    onClick: () => I(a.PictureV2)
                }, a.PictureV2)]
            }) : null]
        }),
        _e = j || R.length > 0 || O;
    return (0, Q.jsxs)(Q.Fragment, {
        children: [(0, Q.jsx)(d, {}), (0, Q.jsxs)(`div`, {
            className: `relative w-full`,
            inert: oe || u,
            children: [c && !f && b != null && (0, Q.jsx)(Ct, {
                editorView: b,
                roomId: e
            }), (0, Q.jsxs)(C.div, {
                layout: !0,
                transition: M,
                className: o(`shadow-short bg-token-bg-elevated-primary overflow-hidden`, _e ? `rounded-3xl` : `rounded-full`),
                children: [O != null && (0, Q.jsx)(`div`, {
                    children: (0, Q.jsx)(we, {
                        replyRegions: [{
                            type: O.messageType,
                            value: O.previewText,
                            onRemoveRegion: () => E.clearReplyTo()
                        }]
                    })
                }), R.length > 0 && (0, Q.jsx)(`div`, {
                    className: `px-4 pt-4 pb-2`,
                    children: (0, Q.jsx)(Zt, {
                        attachments: R,
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
                    ref: ne,
                    type: `file`,
                    disabled: f,
                    className: `hidden`,
                    onChange: ue
                }), (0, Q.jsxs)(C.div, {
                    layout: `position`,
                    transition: M,
                    className: o(`grid grid-cols-[auto_1fr_auto] gap-x-2 px-3 py-2.5`, j ? A ? `gap-y-2 [grid-template-areas:'primary_primary_primary'_'leading_tools_trailing']` : `gap-y-2 [grid-template-areas:'primary_primary_primary'_'leading_._trailing']` : `items-center [grid-template-areas:'leading_primary_trailing']`),
                    children: [(0, Q.jsx)(C.div, {
                        layout: `position`,
                        transition: M,
                        className: `flex items-center [grid-area:leading]`,
                        children: (0, Q.jsx)(it, {
                            items: ge,
                            children: (0, Q.jsx)(Je, {
                                disabled: f,
                                onDoubleClick: F
                            })
                        })
                    }), (0, Q.jsx)(C.div, {
                        layout: `position`,
                        transition: M,
                        className: o(z, `flex min-h-14 flex-1 items-center [grid-area:primary]`),
                        children: (0, Q.jsx)(`div`, {
                            ref: _,
                            className: o(`bg-token-bg-elevated-primary min-h-12 w-full rounded-2xl px-2`, Ee[`prosemirror-parent`], ee() ? `firefox` : `default-browser`)
                        })
                    }), (0, Q.jsx)(C.div, {
                        layout: `position`,
                        transition: M,
                        className: `flex items-center justify-end [grid-area:trailing]`,
                        children: (0, Q.jsx)(`button`, {
                            "aria-label": p.formatMessage(he.sendMessageTooltip),
                            className: `composer-submit-btn composer-submit-button-color h-9 w-9`,
                            disabled: !H,
                            onClick: () => {
                                U()
                            },
                            children: (0, Q.jsx)(ke, {
                                className: `icon-sm`
                            })
                        })
                    }), A && (0, Q.jsx)(C.div, {
                        layout: `position`,
                        transition: M,
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
                            children: k && (0, Q.jsx)(Ce, {
                                icon: k === a.Search ? W && (0, Q.jsx)(W, {
                                    className: `icon`
                                }) : G && (0, Q.jsx)(G, {
                                    className: `icon`
                                }),
                                label: k === a.Search ? p.formatMessage($.webSearch) : p.formatMessage($.createImage),
                                removable: !0,
                                onRemove: () => L(k)
                            }, k)
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
            s = y({
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
            fileAttachment: r
        } = e,
        i;
    t[0] === r ? i = t[1] : (i = () => r.state(), t[0] = r, t[1] = i);
    let a = n(i);
    if (Nt(a.file.type) || a.file.type.startsWith(`image/`)) {
        let e = a.state === `complete` ? void 0 : `opacity-50`,
            n;
        return t[2] !== e || t[3] !== a.file ? (n = (0, Q.jsx)(Ht, {
            file: a.file,
            className: e
        }), t[2] = e, t[3] = a.file, t[4] = n) : n = t[4], n
    }
    let o;
    return t[5] !== a.file || t[6] !== a.state ? (o = (0, Q.jsx)(Xt, {
        file: a.file,
        state: a.state
    }), t[5] = a.file, t[6] = a.state, t[7] = o) : o = t[7], o
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
        s;
    t[0] !== n.type || t[1] !== i ? (s = n.type && n.type !== `` ? Pt(n.type, i) : i.formatMessage({
        id: `chatgpt.calpico.group_chat.composer.attachment.unknown_file_type.label`,
        defaultMessage: `Unknown file type`
    }), t[0] = n.type, t[1] = i, t[2] = s) : s = t[2];
    let c = s,
        l = !a && `opacity-50`,
        u;
    t[3] === l ? u = t[4] : (u = o(`border-token-border-light bg-token-bg-tertiary flex max-w-xs items-center gap-2 rounded-lg border px-3 py-2 text-start`, l), t[3] = l, t[4] = u);
    let d;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, Q.jsx)(G, {
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
    t[11] === c ? m = t[12] : (m = (0, Q.jsx)(`div`, {
        className: `text-token-text-secondary truncate text-xs`,
        children: c
    }), t[11] = c, t[12] = m);
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
                children: (0, Q.jsx)(i, {
                    className: `icon-xs`
                })
            })]
        }, r))
    })
}
var X, Z, Q, Qt, $, $t = e((() => {
    X = z(), Et(), Mt(), Ft(), b(), Rt(), ut(), Bt(), A(), W(), m(), De(), Oe(), Gt(), me(), Qe(), be(), oe(), H(), et(), Ke(), xe(), Se(), ge(), _e(), E(), U(), p(), ue(), se(), x(), _(), u(), r(), Z = t(R()), L(), c(), Q = F(), Qt = 1, $ = I({
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
//# sourceMappingURL=1407e95e-ndyp453qsvgatoad.js.map