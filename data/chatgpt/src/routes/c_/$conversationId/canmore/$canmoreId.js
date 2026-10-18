import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AJ as n,
    CJ as r,
    Itt as i,
    JP as a,
    KP as o,
    O$ as s,
    Ptt as ee,
    _8 as c,
    _tt as l,
    cz as te,
    i_ as u,
    k$ as d,
    lz as f,
    pet as ne,
    r_ as p,
    u8 as m,
    w8 as h,
    zP as g,
    zet as _
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as v,
    Bn as y,
    Ht as re,
    N as ie,
    Pt as b,
    Rt as x,
    Ut as S,
    Vn as C,
    s as w
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $Hn as ae,
    QHn as T,
    U7 as E,
    W7 as D,
    aUn as O,
    c as k,
    dUn as A,
    iUn as j,
    s as M,
    sUn as N,
    wUn as P,
    xUn as F,
    yUn as I
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    C_ as L,
    _ as R,
    v as z,
    w_ as B
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    i as oe,
    n as V,
    r as H,
    t as U
} from "./ea4fa2d6-jvpfd5u9a2100vul.js";
import {
    o as W,
    s as G
} from "./cc445a0e-jju75u42jeqwnklg.js";
import {
    i as K,
    n as q,
    r as J,
    t as se
} from "./ac476d6c-gcthb4dugyo1p65r.js";
import {
    n as ce,
    r as le
} from "./4d271a7b-hn3ub85v554gjvmq.js";
var Y, X, Z, Q, $, ue = e((() => {
    v(), _(), m(), F(), j(), oe(), G(), ae(), K(), D(), N(), q(), V(), le(), B(), a(), f(), R(), n(), l(), w(), u(), s(), Y = t(C()), M(), X = y(), Z = () => (k(), null), Q = S(function() {
        let e = x(),
            [t] = re(),
            n = b(),
            a = h(e.conversationId),
            s = c(t.get(`readonly`), !1),
            l = c(t.get(`isFullScreen`), !1),
            u = c(t.get(`header`), !0),
            d = c(t.get(`appPreview`), !1),
            f = ee(),
            p = i(),
            m = c(t.get(`hideBottomComposer`), !!s),
            _ = h(e.canmoreId),
            v = (0, Y.useMemo)(() => o(a), [a]),
            y = O();
        (0, Y.useEffect)(() => {
            P({
                type: I.Textdoc,
                textdocId: _
            })
        }, [_]), z(v.id, {
            kind: ne.PrimaryAssistant
        });
        let S = ie();
        if ((0, Y.useEffect)(() => (r.retainThread(v.id), () => {
                S.invalidateQueries({
                    queryKey: [`conversation`, v.id],
                    refetchType: `none`
                }), r.releaseThread(v.id)
            }), [v.id, S]), (0, Y.useEffect)(() => {
                _ || n(`/`)
            }, [_, n]), (0, Y.useEffect)(() => {
                T().sendMessage({
                    type: J.Loaded
                })
            }, [_]), !_ || y?.type !== I.Textdoc) return null;
        let C = () => {
                T().sendMessage({
                    type: J.Close
                })
            },
            w = s && !u;
        return (0, X.jsxs)(`div`, {
            className: `h-full w-full overflow-hidden contain-content`,
            children: [(0, X.jsx)(`meta`, {
                name: `viewport`,
                content: `width=device-width, initial-scale=1, maximum-scale=1`
            }), (0, X.jsx)(g.Provider, {
                value: o(v.id),
                children: (0, X.jsx)(L, {
                    conversation: v,
                    children: (0, X.jsx)(E, {
                        conversation: v,
                        children: d ? (0, X.jsx)(te, {
                            children: (0, X.jsx)($, {
                                textdocId: y.textdocId
                            })
                        }) : w ? (0, X.jsxs)(X.Fragment, {
                            children: [(0, X.jsx)(U, {
                                disableScroll: !f,
                                textdocId: y.textdocId
                            }), (0, X.jsx)(H, {})]
                        }) : (0, X.jsx)(se, {
                            isEmbedded: !0,
                            hideRunCode: !f,
                            isFullScreen: l,
                            hideHeader: !u,
                            hideBottomComposer: m,
                            isReadonlyFromQueryParam: s,
                            hideRenameButton: p,
                            conversation: v,
                            focusedTextdoc: y,
                            onClose: C
                        }, `textdocContent`)
                    })
                })
            })]
        })
    }), $ = ({
        textdocId: e
    }) => {
        let t = (0, Y.useRef)(null),
            n = A(e),
            [r, i] = (0, Y.useState)(!1),
            a = d(n?.versions ?? []),
            o = (0, Y.useCallback)(p(async e => {
                let n = W(e.type, e.content);
                if (t.current && (n === `react` || n === `html`)) {
                    i(!0);
                    let r = t.current.evalAsync({
                        language: n,
                        code: e.content
                    });
                    for await (let e of r) console.debug(e)
                }
                i(!1)
            }, 100), []);
        return (0, Y.useEffect)(() => {
            a && o(a)
        }, [a, o]), (0, X.jsx)(ce, {
            id: e,
            visuallyHidden: !r,
            ref: t,
            enableTransition: !0,
            title: ``
        })
    }
}));
e((() => {
    ue()
}))();
export {
    Z as clientLoader, Q as
    default
};
//# sourceMappingURL=c_._conversationId.canmore._canmoreId-m7d2bdfx.js.map