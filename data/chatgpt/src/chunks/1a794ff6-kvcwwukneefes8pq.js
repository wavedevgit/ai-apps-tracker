const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/90f621d9-b17az2j4f7q3cp5h.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-bo7e0c29ngt4zgx0.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/30901919-e8h11sw136qen6v0.js", "assets/966be48d-kt0akpg9tmx4onkc.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $0 as n,
    GR as r,
    HR as i,
    IR as a,
    J0 as o,
    K0 as s,
    Knt as c,
    MR as l,
    Q0 as u,
    UR as d,
    VR as f,
    X0 as p,
    XR as m,
    Ynt as h,
    Z0 as g,
    Znt as _,
    _0 as v,
    h0 as y,
    i0 as b,
    jR as x,
    n2 as S,
    qR as C,
    r0 as w
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Nt as T,
    Q as E,
    Vn as D,
    cn as O,
    ln as k,
    wn as A
} from "./2340486e-i7pjxgdhv0bs6apg.js";
var j, M = e((() => {
    g(), k(), j = p(() => O(() => import(`./90f621d9-b17az2j4f7q3cp5h.js`).then(e => e.WorkspaceShareSsoModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6])))
}));

function N() {}

function P() {
    u(j), u(s)
}

function F() {
    return u(s)
}
var I, L, R, z = e((() => {
    I = A(), x(), n(), o(), M(), v(), w(), _(), m(), L = t(D()), E(), R = e => {
        "use forget";
        let t = (0, I.c)(10),
            {
                contentType: n,
                entryCta: o,
                loginModalExperiment: s,
                returnPath: p,
                ssoConnection: m,
                ssoRequired: g,
                workspaceId: _
            } = e,
            v = T(),
            x = (0, L.useRef)(!1),
            w, E;
        return t[0] !== n || t[1] !== o || t[2] !== s || t[3] !== v || t[4] !== p || t[5] !== m || t[6] !== g || t[7] !== _ ? (w = () => {
            if (s != null) {
                let e = h(s).get(`show_login_modal`, !1);
                if (c().catch(N), !e) return
            }
            let e = _ == null ? window.location.href : `/auth/login?${new URLSearchParams({next:p+window.location.hash,wId:_})}`;
            return m == null ? (b({
                callbackUrl: e,
                skipLoginModal: !1,
                onLoginModalDismiss: () => v(`/`, {
                    replace: !0
                }),
                callback: () => {
                    x.current || (x.current = !0, l({
                        actionType: f.ACCESS_FLOW_ENTRY_ACTION_TYPE_PAGE_LOADED,
                        entryPoint: i.ACCESS_FLOW_ENTRY_POINT_LOGIN_MODAL,
                        entryTrigger: d.ACCESS_FLOW_ENTRY_TRIGGER_AUTOMATIC,
                        cta: o ?? (n === `app` ? `app_connect_sign_in` : n === `gpt` ? `workspace_gpt_sign_in` : `workspace_share_sign_in`)
                    }))
                }
            }), F) : (x.current || (x.current = !0, l({
                actionType: f.ACCESS_FLOW_ENTRY_ACTION_TYPE_PAGE_LOADED,
                entryPoint: i.ACCESS_FLOW_ENTRY_POINT_LOGIN_MODAL,
                entryTrigger: d.ACCESS_FLOW_ENTRY_TRIGGER_AUTOMATIC,
                cta: o ?? (n === `app` ? `app_connect_sso_sign_in` : n === `gpt` ? `workspace_gpt_sso_sign_in` : `workspace_share_sso_sign_in`)
            })), S(j, {
                contentType: n,
                ssoRequired: g,
                onClose: () => v(`/`, {
                    replace: !0
                }),
                onContinueWithSso: () => {
                    a(y(), C.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_SSO, r.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_MODAL);
                    let e = new URLSearchParams({
                        next: p + window.location.hash,
                        sso: `true`,
                        connection: m
                    });
                    _ != null && e.set(`wId`, _), window.location.replace(`/auth/login?${e}`)
                },
                onUseAnotherSignInMethod: () => {
                    a(y(), C.ACCESS_FLOW_USER_ACTION_TYPE_SWITCH_TO_GENERIC_LOGIN_CLICKED, r.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_MODAL), u(j), b({
                        callbackUrl: e,
                        skipLoginModal: !1,
                        onLoginModalDismiss: () => v(`/`, {
                            replace: !0
                        })
                    })
                }
            }), P)
        }, E = [n, o, s, v, p, m, g, _], t[0] = n, t[1] = o, t[2] = s, t[3] = v, t[4] = p, t[5] = m, t[6] = g, t[7] = _, t[8] = w, t[9] = E) : (w = t[8], E = t[9]), (0, L.useEffect)(w, E), null
    }
}));
export {
    z as n, R as t
};
//# sourceMappingURL=1a794ff6-kvcwwukneefes8pq.js.map