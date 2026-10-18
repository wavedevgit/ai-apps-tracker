import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    IB as n,
    JP as r,
    OB as i,
    UP as a,
    dz as o,
    fz as s,
    o1 as c,
    u1 as l
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as u,
    Bn as d,
    Ht as f,
    Pt as p,
    Rt as m,
    Ut as h,
    Vn as g
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    GBn as _,
    Jqt as v,
    S as y,
    WBn as b,
    Yqt as x,
    x as S
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    c as C,
    l as w
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
var T, E, D, O, k = e((() => {
    u(), w(), r(), b(), v(), s(), l(), S(), n(), T = t(g()), E = d(), D = ({
        projectSharedClientId: e,
        projectOwnerUserId: t,
        projectId: n
    }) => {
        let [r] = (0, T.useState)(() => a({
            urlGizmoId: n
        })), i = y(e), [o, s] = (0, T.useState)(!1);
        return (0, T.useEffect)(() => {
            i && (_(r, i, {
                sharedProjectConversationOwnerId: t,
                continuingFromSharedProjectConversationId: e
            }), s(!0))
        }, [r, e, t, i]), o ? (0, E.jsx)(C, {
            gizmoId: n,
            clientThreadId: r.id
        }) : null
    }, O = h(function() {
        let {
            conversationId: e
        } = m(), t = c(), n = p(), [r] = f(), a = r.get(`owner_user_id`) ?? void 0, s = x(), l = a === t?.normalizedAccountUserId;
        return (0, T.useEffect)(() => {
            l && t?.normalizedAccountUserId && s && n(i(e, {
                project: {
                    id: s
                },
                ownerUserId: a,
                accountUserId: t.normalizedAccountUserId
            }))
        }, [l, n, e, a, t?.normalizedAccountUserId, s]), t && s && l && n(i(e, {
            project: {
                id: s
            },
            ownerUserId: a,
            accountUserId: t.normalizedAccountUserId
        }), {
            replace: !0
        }), e ? (0, E.jsx)(D, {
            projectSharedClientId: e,
            projectOwnerUserId: a,
            projectId: s
        }) : (0, E.jsx)(`div`, {
            className: `flex h-full items-center justify-center`,
            children: (0, E.jsx)(o, {
                className: `text-token-text-tertiary`
            })
        })
    })
}));
e((() => {
    k()
}))();
export {
    O as
    default
};
//# sourceMappingURL=g._gizmoId.shared.c._conversationId-o1wv25yh.js.map