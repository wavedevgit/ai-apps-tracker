import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ea as n,
    JP as r,
    Jo as i,
    Ko as a,
    Lz as o,
    Qit as s,
    Rz as c,
    Ta as l,
    UP as u,
    a7 as d,
    cat as f,
    dz as p,
    fz as m,
    iat as h,
    is as g,
    l7 as _,
    os as v
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as y,
    At as b,
    Bn as x,
    O as S,
    Pt as C,
    Ut as w,
    Vn as T,
    s as E
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    GBn as D,
    WBn as O
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    c as k,
    l as A
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    n as j,
    t as M
} from "./1a794ff6-kiv7bk0z9t8iwufy.js";
import {
    n as N,
    t as P
} from "./a64f0856-nasi2emndn6acs8s.js";

function F(e) {
    let t = e.sharedConversationId,
        n = C(),
        r = c(),
        {
            data: o,
            isError: m,
            error: h
        } = S({
            queryKey: [`shared-conversation/${t}`],
            queryFn: () => d.safeGet(`/share/{shared_conversation_id}`, {
                parameters: {
                    path: {
                        shared_conversation_id: t
                    }
                }
            })
        }),
        [g] = (0, I.useState)(() => u({
            sharedConversationId: t
        })),
        _ = g.id,
        [y, b] = (0, I.useState)(!1),
        x = (0, I.useRef)(null),
        w = h instanceof s ? f(h) : void 0;
    return (0, I.useEffect)(() => {
        m && (r({
            id: `share_not_found`,
            fallback: `generic`,
            message: w
        }), n(`/`, {
            replace: !0
        }))
    }, [m, n, w, r]), (0, I.useEffect)(() => {
        o && _ && (D(g, o, {
            skipIfExisting: !0,
            continuingFromSharedConversationId: t
        }), b(!0))
    }, [g, o, t, _]), (0, I.useEffect)(() => {
        !y || !o || x.current === t || (x.current = t, v({
            action: a.CHATGPT_SHARE_FLOW_ACTION_SHARED_CONTENT_VIEWED,
            shareId: t,
            contentType: i.CHATGPT_SHARE_FLOW_CONTENT_TYPE_SHARED_CONVERSATION
        }))
    }, [o, y, t]), y && o ? (0, L.jsxs)(l.Provider, {
        value: {
            serverSharedThreadId: e.sharedConversationId
        },
        children: [(0, L.jsx)(P, {
            conversation: g
        }), (0, L.jsx)(k, {
            clientThreadId: _
        })]
    }) : (0, L.jsx)(`div`, {
        className: `flex h-full items-center justify-center`,
        children: (0, L.jsx)(p, {
            className: `text-token-text-tertiary`
        })
    })
}
var I, L, R, z = e((() => {
    y(), A(), j(), r(), O(), N(), m(), o(), n(), h(), _(), g(), E(), I = t(T()), L = x(), R = w(function() {
        let e = b();
        if (e.loginRequired) return (0, L.jsx)(M, {
            contentType: `conversation`,
            loginModalExperiment: `441314509`,
            returnPath: e.returnPath,
            ssoConnection: e.ssoConnection,
            ssoRequired: e.ssoRequired
        }, e.returnPath);
        let {
            sharedConversationId: t,
            ...n
        } = e;
        return (0, L.jsx)(F, {
            ...n,
            sharedConversationId: t
        })
    })
}));
e((() => {
    z()
}))();
export {
    R as
    default
};
//# sourceMappingURL=share.e._shareId.(_action)-k8fn2fo0.js.map