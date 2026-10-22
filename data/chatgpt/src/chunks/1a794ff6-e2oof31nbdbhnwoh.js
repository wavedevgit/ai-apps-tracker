const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/90f621d9-m5uuqzcepgbar2qf.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-itnrgnth03y1sm9d.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/30901919-ikyi1r55w2i02fom.js", "assets/966be48d-jnsxoc1eun57iueo.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    E0 as n,
    IR as r,
    JR as i,
    LR as a,
    QR as o,
    VR as s,
    XR as c,
    YR as l,
    a2 as u,
    c2 as d,
    crt as f,
    d2 as p,
    drt as m,
    ez as h,
    f0 as g,
    o2 as _,
    p0 as v,
    prt as y,
    r2 as b,
    rz as x,
    s2 as S,
    t2 as C,
    w0 as w
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Nt as T,
    Q as E,
    Vn as D,
    cn as O,
    ln as k,
    wn as A
} from "./2340486e-i7pjxgdhv0bs6apg.js";
var j, M = e((() => {
    _(), k(), j = u(() => O(() => import(`./90f621d9-m5uuqzcepgbar2qf.js`).then(e => e.WorkspaceShareSsoModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6])))
}));

function N() {}

function P() {
    S(j), S(C)
}

function F() {
    return S(C)
}
var I, L, R, z = e((() => {
    I = A(), r(), d(), b(), M(), n(), g(), y(), x(), L = t(D()), E(), R = e => {
        "use forget";
        let t = (0, I.c)(10),
            {
                contentType: n,
                entryCta: r,
                loginModalExperiment: u,
                returnPath: d,
                ssoConnection: g,
                ssoRequired: _,
                workspaceId: y
            } = e,
            b = T(),
            x = (0, L.useRef)(!1),
            C, E;
        return t[0] !== n || t[1] !== r || t[2] !== u || t[3] !== b || t[4] !== d || t[5] !== g || t[6] !== _ || t[7] !== y ? (C = () => {
            if (u != null) {
                let e = m(u).get(`show_login_modal`, !1);
                if (f().catch(N), !e) return
            }
            let e = y == null ? window.location.href : `/auth/login?${new URLSearchParams({next:d+window.location.hash,wId:y})}`;
            return g == null ? (v({
                callbackUrl: e,
                skipLoginModal: !1,
                onLoginModalDismiss: () => b(`/`, {
                    replace: !0
                }),
                callback: () => {
                    x.current || (x.current = !0, a({
                        actionType: i.ACCESS_FLOW_ENTRY_ACTION_TYPE_PAGE_LOADED,
                        entryPoint: l.ACCESS_FLOW_ENTRY_POINT_LOGIN_MODAL,
                        entryTrigger: c.ACCESS_FLOW_ENTRY_TRIGGER_AUTOMATIC,
                        cta: r ?? (n === `app` ? `app_connect_sign_in` : n === `gpt` ? `workspace_gpt_sign_in` : `workspace_share_sign_in`)
                    }))
                }
            }), F) : (x.current || (x.current = !0, a({
                actionType: i.ACCESS_FLOW_ENTRY_ACTION_TYPE_PAGE_LOADED,
                entryPoint: l.ACCESS_FLOW_ENTRY_POINT_LOGIN_MODAL,
                entryTrigger: c.ACCESS_FLOW_ENTRY_TRIGGER_AUTOMATIC,
                cta: r ?? (n === `app` ? `app_connect_sso_sign_in` : n === `gpt` ? `workspace_gpt_sso_sign_in` : `workspace_share_sso_sign_in`)
            })), p(j, {
                contentType: n,
                ssoRequired: _,
                onClose: () => b(`/`, {
                    replace: !0
                }),
                onContinueWithSso: () => {
                    s(w(), h.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_SSO, o.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_MODAL);
                    let e = new URLSearchParams({
                        next: d + window.location.hash,
                        sso: `true`,
                        connection: g
                    });
                    y != null && e.set(`wId`, y), window.location.replace(`/auth/login?${e}`)
                },
                onUseAnotherSignInMethod: () => {
                    s(w(), h.ACCESS_FLOW_USER_ACTION_TYPE_SWITCH_TO_GENERIC_LOGIN_CLICKED, o.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_MODAL), S(j), v({
                        callbackUrl: e,
                        skipLoginModal: !1,
                        onLoginModalDismiss: () => b(`/`, {
                            replace: !0
                        })
                    })
                }
            }), P)
        }, E = [n, r, u, b, d, g, _, y], t[0] = n, t[1] = r, t[2] = u, t[3] = b, t[4] = d, t[5] = g, t[6] = _, t[7] = y, t[8] = C, t[9] = E) : (C = t[8], E = t[9]), (0, L.useEffect)(C, E), null
    }
}));
export {
    z as n, R as t
};
//# sourceMappingURL=1a794ff6-e2oof31nbdbhnwoh.js.map