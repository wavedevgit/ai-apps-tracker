const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/90f621d9-i6py0fufglluk4js.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-lxa3wniynbx9ka2a.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/30901919-i8ip8r0znvgcym38.js", "assets/966be48d-jrzi63bfn1sr71qw.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $0 as n,
    $nt as r,
    GR as i,
    HR as a,
    IR as o,
    J0 as s,
    K0 as c,
    MR as l,
    Q0 as u,
    UR as d,
    VR as f,
    X0 as p,
    XR as m,
    Xnt as h,
    Z0 as g,
    _0 as _,
    h0 as v,
    i0 as y,
    jR as b,
    n2 as x,
    qR as S,
    r0 as C,
    trt as w
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    Nt as T,
    Q as E,
    Vn as D,
    cn as O,
    ln as k,
    wn as A
} from "./2340486e-i7pjxgdhv0bs6apg.js";
var j, M = e((() => {
    g(), k(), j = p(() => O(() => import(`./90f621d9-i6py0fufglluk4js.js`).then(e => e.WorkspaceShareSsoModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6])))
}));

function N() {}

function P() {
    u(j), u(c)
}

function F() {
    return u(c)
}
var I, L, R, z = e((() => {
    I = A(), b(), n(), s(), M(), _(), C(), w(), m(), L = t(D()), E(), R = e => {
        "use forget";
        let t = (0, I.c)(10),
            {
                contentType: n,
                entryCta: s,
                loginModalExperiment: c,
                returnPath: p,
                ssoConnection: m,
                ssoRequired: g,
                workspaceId: _
            } = e,
            b = T(),
            C = (0, L.useRef)(!1),
            w, E;
        return t[0] !== n || t[1] !== s || t[2] !== c || t[3] !== b || t[4] !== p || t[5] !== m || t[6] !== g || t[7] !== _ ? (w = () => {
            if (c != null) {
                let e = r(c).get(`show_login_modal`, !1);
                if (h().catch(N), !e) return
            }
            let e = _ == null ? window.location.href : `/auth/login?${new URLSearchParams({next:p+window.location.hash,wId:_})}`;
            return m == null ? (y({
                callbackUrl: e,
                skipLoginModal: !1,
                onLoginModalDismiss: () => b(`/`, {
                    replace: !0
                }),
                callback: () => {
                    C.current || (C.current = !0, l({
                        actionType: f.ACCESS_FLOW_ENTRY_ACTION_TYPE_PAGE_LOADED,
                        entryPoint: a.ACCESS_FLOW_ENTRY_POINT_LOGIN_MODAL,
                        entryTrigger: d.ACCESS_FLOW_ENTRY_TRIGGER_AUTOMATIC,
                        cta: s ?? (n === `app` ? `app_connect_sign_in` : n === `gpt` ? `workspace_gpt_sign_in` : `workspace_share_sign_in`)
                    }))
                }
            }), F) : (C.current || (C.current = !0, l({
                actionType: f.ACCESS_FLOW_ENTRY_ACTION_TYPE_PAGE_LOADED,
                entryPoint: a.ACCESS_FLOW_ENTRY_POINT_LOGIN_MODAL,
                entryTrigger: d.ACCESS_FLOW_ENTRY_TRIGGER_AUTOMATIC,
                cta: s ?? (n === `app` ? `app_connect_sso_sign_in` : n === `gpt` ? `workspace_gpt_sso_sign_in` : `workspace_share_sso_sign_in`)
            })), x(j, {
                contentType: n,
                ssoRequired: g,
                onClose: () => b(`/`, {
                    replace: !0
                }),
                onContinueWithSso: () => {
                    o(v(), S.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_SSO, i.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_MODAL);
                    let e = new URLSearchParams({
                        next: p + window.location.hash,
                        sso: `true`,
                        connection: m
                    });
                    _ != null && e.set(`wId`, _), window.location.replace(`/auth/login?${e}`)
                },
                onUseAnotherSignInMethod: () => {
                    o(v(), S.ACCESS_FLOW_USER_ACTION_TYPE_SWITCH_TO_GENERIC_LOGIN_CLICKED, i.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_MODAL), u(j), y({
                        callbackUrl: e,
                        skipLoginModal: !1,
                        onLoginModalDismiss: () => b(`/`, {
                            replace: !0
                        })
                    })
                }
            }), P)
        }, E = [n, s, c, b, p, m, g, _], t[0] = n, t[1] = s, t[2] = c, t[3] = b, t[4] = p, t[5] = m, t[6] = g, t[7] = _, t[8] = w, t[9] = E) : (w = t[8], E = t[9]), (0, L.useEffect)(w, E), null
    }
}));
export {
    z as n, R as t
};
//# sourceMappingURL=1a794ff6-nr2cokodjvxe1us1.js.map