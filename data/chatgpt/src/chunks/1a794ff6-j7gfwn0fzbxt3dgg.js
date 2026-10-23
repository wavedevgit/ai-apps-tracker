const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/90f621d9-op3ve2mqm99k22zx.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-mdvd4786a87166cc.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/30901919-s8bko9nrkqwv6i4f.js", "assets/966be48d-b10k5mjerksmjkb7.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Crt as n,
    E0 as r,
    IR as i,
    JR as a,
    LR as o,
    QR as s,
    VR as c,
    XR as l,
    YR as u,
    a2 as d,
    c2 as f,
    d2 as p,
    ez as m,
    f0 as h,
    o2 as g,
    p0 as _,
    r2 as v,
    rz as y,
    s2 as b,
    t2 as x,
    vrt as S,
    w0 as C,
    xrt as w
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Nt as T,
    Q as E,
    Vn as D,
    cn as O,
    ln as k,
    wn as A
} from "./2340486e-i7pjxgdhv0bs6apg.js";
var j, M = e((() => {
    g(), k(), j = d(() => O(() => import(`./90f621d9-op3ve2mqm99k22zx.js`).then(e => e.WorkspaceShareSsoModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6])))
}));

function N() {}

function P() {
    b(j), b(x)
}

function F() {
    return b(x)
}
var I, L, R, z = e((() => {
    I = A(), i(), f(), v(), M(), r(), h(), n(), y(), L = t(D()), E(), R = e => {
        "use forget";
        let t = (0, I.c)(10),
            {
                contentType: n,
                entryCta: r,
                loginModalExperiment: i,
                returnPath: d,
                ssoConnection: f,
                ssoRequired: h,
                workspaceId: g
            } = e,
            v = T(),
            y = (0, L.useRef)(!1),
            x, E;
        return t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== v || t[4] !== d || t[5] !== f || t[6] !== h || t[7] !== g ? (x = () => {
            if (i != null) {
                let e = w(i).get(`show_login_modal`, !1);
                if (S().catch(N), !e) return
            }
            let e = g == null ? window.location.href : `/auth/login?${new URLSearchParams({next:d+window.location.hash,wId:g})}`;
            return f == null ? (_({
                callbackUrl: e,
                skipLoginModal: !1,
                onLoginModalDismiss: () => v(`/`, {
                    replace: !0
                }),
                callback: () => {
                    y.current || (y.current = !0, o({
                        actionType: a.ACCESS_FLOW_ENTRY_ACTION_TYPE_PAGE_LOADED,
                        entryPoint: u.ACCESS_FLOW_ENTRY_POINT_LOGIN_MODAL,
                        entryTrigger: l.ACCESS_FLOW_ENTRY_TRIGGER_AUTOMATIC,
                        cta: r ?? (n === `app` ? `app_connect_sign_in` : n === `gpt` ? `workspace_gpt_sign_in` : `workspace_share_sign_in`)
                    }))
                }
            }), F) : (y.current || (y.current = !0, o({
                actionType: a.ACCESS_FLOW_ENTRY_ACTION_TYPE_PAGE_LOADED,
                entryPoint: u.ACCESS_FLOW_ENTRY_POINT_LOGIN_MODAL,
                entryTrigger: l.ACCESS_FLOW_ENTRY_TRIGGER_AUTOMATIC,
                cta: r ?? (n === `app` ? `app_connect_sso_sign_in` : n === `gpt` ? `workspace_gpt_sso_sign_in` : `workspace_share_sso_sign_in`)
            })), p(j, {
                contentType: n,
                ssoRequired: h,
                onClose: () => v(`/`, {
                    replace: !0
                }),
                onContinueWithSso: () => {
                    c(C(), m.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_SSO, s.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_MODAL);
                    let e = new URLSearchParams({
                        next: d + window.location.hash,
                        sso: `true`,
                        connection: f
                    });
                    g != null && e.set(`wId`, g), window.location.replace(`/auth/login?${e}`)
                },
                onUseAnotherSignInMethod: () => {
                    c(C(), m.ACCESS_FLOW_USER_ACTION_TYPE_SWITCH_TO_GENERIC_LOGIN_CLICKED, s.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_MODAL), b(j), _({
                        callbackUrl: e,
                        skipLoginModal: !1,
                        onLoginModalDismiss: () => v(`/`, {
                            replace: !0
                        })
                    })
                }
            }), P)
        }, E = [n, r, i, v, d, f, h, g], t[0] = n, t[1] = r, t[2] = i, t[3] = v, t[4] = d, t[5] = f, t[6] = h, t[7] = g, t[8] = x, t[9] = E) : (x = t[8], E = t[9]), (0, L.useEffect)(x, E), null
    }
}));
export {
    z as n, R as t
};
//# sourceMappingURL=1a794ff6-j7gfwn0fzbxt3dgg.js.map