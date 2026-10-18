const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/d885dbc7-lxdqbwkxhvshhknd.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/3e88eafe-eiaidml4de0vsorb.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AJ as n,
    AP as r,
    C0 as i,
    CJ as ee,
    J8 as a,
    JP as o,
    JW as s,
    O0 as c,
    OP as l,
    S0 as u,
    Srt as d,
    T0 as f,
    UP as te,
    Y8 as p,
    ZW as m,
    _0 as h,
    a7 as g,
    cW as _,
    dz as ne,
    fU as re,
    fz as v,
    g0 as ie,
    l7 as y,
    mrt as b,
    pU as x,
    yW as S
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as C,
    Bn as w,
    Ln as T,
    Pt as E,
    Rn as D,
    Rt as O,
    Ut as k,
    Vn as A,
    cn as j,
    jt as M,
    ln as N,
    wn as P,
    zn as F
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    GBn as ae,
    WBn as I
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    ci as L,
    li as R,
    oi as z,
    si as B,
    ui as V
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    n as H,
    r as U
} from "./3e88eafe-eiaidml4de0vsorb.js";
import {
    i as W,
    n as G
} from "./58459bbe-oiqyxcbpm6us4dkw.js";
var K, q = e((() => {
    i(), N(), K = u(() => j(() => import(`./d885dbc7-lxdqbwkxhvshhknd.js`).then(e => e.SitesPreviewHandoffModal), __vite__mapDeps([0, 1, 2, 3, 4, 5])))
}));

function J(e, t) {
    if (t == null || t.models.size === 0) throw Error(`Work models response did not include an available model`);
    return {
        ...e,
        conversation_origin: b.TPP,
        default_model_slug: void 0
    }
}
var oe = e((() => {
    d()
}));

function se(e) {
    return e ? a().ensureQueryData(S()) : Promise.resolve(null)
}
var Y, X, Z, Q, $, ce = e((() => {
    C(), Y = P(), f(), q(), H(), W(), h(), o(), I(), v(), l(), n(), x(), m(), _(), L(), oe(), p(), y(), X = t(A()), D(), Z = w(), Q = k(function() {
        "use forget";
        let e = (0, Y.c)(18),
            {
                conversationId: t,
                messageId: n
            } = O(),
            i = M(),
            a = E(),
            o;
        e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (o = re(), e[0] = o) : o = e[0];
        let l = o,
            u = F(),
            d, f, p, m;
        if (e[1] !== i.search) {
            let t = new URLSearchParams(i.search);
            f = t.get(`temporary-chat`) === `true` || t.get(`training_disabled`) === `true` ? `?${ie}=true` : void 0, d = f != null || void 0, p = t.get(`surface`) === s.TPP, m = B(t.get(z)), e[1] = i.search, e[2] = d, e[3] = f, e[4] = p, e[5] = m
        } else d = e[2], f = e[3], p = e[4], m = e[5];
        let h = m,
            _, v;
        e[6] !== d || e[7] !== f || e[8] !== t || e[9] !== u || e[10] !== p || e[11] !== i.search || e[12] !== n || e[13] !== a || e[14] !== h ? (_ = () => {
            let e = !1;
            return (async function() {
                if (!t || !n) {
                    a(`/`, {
                        replace: !0
                    });
                    return
                }
                if (new URLSearchParams(i.search).has(`site_preview`)) {
                    let e = G(i.search, n);
                    a(`/c/${t}`, {
                        replace: !0
                    }), p && e != null ? c(K, {
                        target: e
                    }) : l.danger(u.formatMessage(U.sourceChanged));
                    return
                }
                try {
                    let i = te(),
                        [o, s] = await Promise.all([g.safePost(`/conversation/new_branch`, {
                            requestBody: {
                                conversation_id: t,
                                message_id: n
                            }
                        }), se(p)]);
                    if (e) return;
                    let c = o.conversation,
                        l = c;
                    p && (l = J(c, s)), r(i.id, l, `branch`), ae(i, l, {
                        branchingFromConversationId: t,
                        branchingFromMessageId: n,
                        hideFromHistory: d
                    }), ee.retainThread(i.id), p && V(h), a({
                        pathname: `/c/${i.id}`,
                        search: f
                    }, {
                        replace: !0
                    })
                } catch {
                    if (e) return;
                    p && R(h), l.danger(u.formatMessage($.errorToast)), a({
                        pathname: `/c/${t}`,
                        search: f
                    })
                }
            })(), () => {
                e = !0
            }
        }, v = [f, d, t, u, p, i.search, n, a, l, h], e[6] = d, e[7] = f, e[8] = t, e[9] = u, e[10] = p, e[11] = i.search, e[12] = n, e[13] = a, e[14] = h, e[15] = _, e[16] = v) : (_ = e[15], v = e[16]), (0, X.useEffect)(_, v);
        let y;
        return e[17] === Symbol.for(`react.memo_cache_sentinel`) ? (y = (0, Z.jsx)(`div`, {
            className: `flex h-full items-center justify-center`,
            children: (0, Z.jsx)(ne, {
                className: `text-token-text-tertiary`
            })
        }), e[17] = y) : y = e[17], y
    }), $ = T({
        errorToast: {
            id: `BranchTurnActionButton.errorToast`,
            defaultMessage: `Failed to branch conversation`
        }
    })
}));
e((() => {
    ce()
}))();
export {
    Q as
    default
};
//# sourceMappingURL=branch._conversationId._messageId-len9na6b.js.map