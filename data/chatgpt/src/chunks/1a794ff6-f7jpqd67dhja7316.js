const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/90f621d9-mzvnl65s9dsjgqqc.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-ed29bs6yiwucn7st.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/30901919-om7b3qf5hp4j9x4l.js", "assets/966be48d-n6xjoodz3xdd7qzw.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AR as n,
    BR as r,
    FR as i,
    HR as a,
    J0 as o,
    K0 as s,
    KR as c,
    Knt as l,
    VR as u,
    Vnt as d,
    W0 as f,
    WR as p,
    Wnt as m,
    X0 as h,
    Y0 as g,
    YR as _,
    Z0 as v,
    e2 as y,
    h0 as b,
    jR as x,
    n0 as S,
    p0 as C,
    t0 as w
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    $ as T,
    Pt as E,
    Vn as D,
    cn as O,
    ln as k,
    wn as A
} from "./2340486e-oc6d2eodbcrmxur3.js";
var j, M = e((() => {
    g(), k(), j = o(() => O(() => import(`./90f621d9-mzvnl65s9dsjgqqc.js`).then(e => e.WorkspaceShareSsoModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6])))
}));

function N() {}

function P() {
    h(j), h(f)
}

function F() {
    return h(f)
}
var I, L, R, z = e((() => {
    I = A(), n(), v(), s(), M(), b(), w(), l(), _(), L = t(D()), T(), R = e => {
        "use forget";
        let t = (0, I.c)(10),
            {
                contentType: n,
                entryCta: o,
                loginModalExperiment: s,
                returnPath: l,
                ssoConnection: f,
                ssoRequired: g,
                workspaceId: _
            } = e,
            v = E(),
            b = (0, L.useRef)(!1),
            w, T;
        return t[0] !== n || t[1] !== o || t[2] !== s || t[3] !== v || t[4] !== l || t[5] !== f || t[6] !== g || t[7] !== _ ? (w = () => {
            if (s != null) {
                let e = m(s).get(`show_login_modal`, !1);
                if (d().catch(N), !e) return
            }
            let e = _ == null ? window.location.href : `/auth/login?${new URLSearchParams({next:l+window.location.hash,wId:_})}`;
            return f == null ? (S({
                callbackUrl: e,
                skipLoginModal: !1,
                onLoginModalDismiss: () => v(`/`, {
                    replace: !0
                }),
                callback: () => {
                    b.current || (b.current = !0, x({
                        actionType: r.ACCESS_FLOW_ENTRY_ACTION_TYPE_PAGE_LOADED,
                        entryPoint: u.ACCESS_FLOW_ENTRY_POINT_LOGIN_MODAL,
                        entryTrigger: a.ACCESS_FLOW_ENTRY_TRIGGER_AUTOMATIC,
                        cta: o ?? (n === `app` ? `app_connect_sign_in` : n === `gpt` ? `workspace_gpt_sign_in` : `workspace_share_sign_in`)
                    }))
                }
            }), F) : (b.current || (b.current = !0, x({
                actionType: r.ACCESS_FLOW_ENTRY_ACTION_TYPE_PAGE_LOADED,
                entryPoint: u.ACCESS_FLOW_ENTRY_POINT_LOGIN_MODAL,
                entryTrigger: a.ACCESS_FLOW_ENTRY_TRIGGER_AUTOMATIC,
                cta: o ?? (n === `app` ? `app_connect_sso_sign_in` : n === `gpt` ? `workspace_gpt_sso_sign_in` : `workspace_share_sso_sign_in`)
            })), y(j, {
                contentType: n,
                ssoRequired: g,
                onClose: () => v(`/`, {
                    replace: !0
                }),
                onContinueWithSso: () => {
                    i(C(), c.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_SSO, p.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_MODAL);
                    let e = new URLSearchParams({
                        next: l + window.location.hash,
                        sso: `true`,
                        connection: f
                    });
                    _ != null && e.set(`wId`, _), window.location.replace(`/auth/login?${e}`)
                },
                onUseAnotherSignInMethod: () => {
                    i(C(), c.ACCESS_FLOW_USER_ACTION_TYPE_SWITCH_TO_GENERIC_LOGIN_CLICKED, p.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_MODAL), h(j), S({
                        callbackUrl: e,
                        skipLoginModal: !1,
                        onLoginModalDismiss: () => v(`/`, {
                            replace: !0
                        })
                    })
                }
            }), P)
        }, T = [n, o, s, v, l, f, g, _], t[0] = n, t[1] = o, t[2] = s, t[3] = v, t[4] = l, t[5] = f, t[6] = g, t[7] = _, t[8] = w, t[9] = T) : (w = t[8], T = t[9]), (0, L.useEffect)(w, T), null
    }
}));
export {
    z as n, R as t
};
//# sourceMappingURL=1a794ff6-f7jpqd67dhja7316.js.map