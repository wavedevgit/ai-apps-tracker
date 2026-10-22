const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/90f621d9-ek77gszzyvy6wd4k.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-nxpmzchfjvwqts17.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/30901919-lgbmg5s09xld40kt.js", "assets/966be48d-orxineso9kx18zqz.js"]))) => i.map(i => d[i]);
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
    d2 as f,
    ez as p,
    f0 as m,
    hrt as h,
    o2 as g,
    p0 as _,
    prt as v,
    r2 as y,
    rz as b,
    s2 as x,
    t2 as S,
    urt as C,
    w0 as w
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Nt as T,
    Q as E,
    Vn as D,
    cn as O,
    ln as k,
    wn as A
} from "./2340486e-i7pjxgdhv0bs6apg.js";
var j, M = e((() => {
    g(), k(), j = u(() => O(() => import(`./90f621d9-ek77gszzyvy6wd4k.js`).then(e => e.WorkspaceShareSsoModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6])))
}));

function N() {}

function P() {
    x(j), x(S)
}

function F() {
    return x(S)
}
var I, L, R, z = e((() => {
    I = A(), r(), d(), y(), M(), n(), m(), h(), b(), L = t(D()), E(), R = e => {
        "use forget";
        let t = (0, I.c)(10),
            {
                contentType: n,
                entryCta: r,
                loginModalExperiment: u,
                returnPath: d,
                ssoConnection: m,
                ssoRequired: h,
                workspaceId: g
            } = e,
            y = T(),
            b = (0, L.useRef)(!1),
            S, E;
        return t[0] !== n || t[1] !== r || t[2] !== u || t[3] !== y || t[4] !== d || t[5] !== m || t[6] !== h || t[7] !== g ? (S = () => {
            if (u != null) {
                let e = v(u).get(`show_login_modal`, !1);
                if (C().catch(N), !e) return
            }
            let e = g == null ? window.location.href : `/auth/login?${new URLSearchParams({next:d+window.location.hash,wId:g})}`;
            return m == null ? (_({
                callbackUrl: e,
                skipLoginModal: !1,
                onLoginModalDismiss: () => y(`/`, {
                    replace: !0
                }),
                callback: () => {
                    b.current || (b.current = !0, a({
                        actionType: i.ACCESS_FLOW_ENTRY_ACTION_TYPE_PAGE_LOADED,
                        entryPoint: l.ACCESS_FLOW_ENTRY_POINT_LOGIN_MODAL,
                        entryTrigger: c.ACCESS_FLOW_ENTRY_TRIGGER_AUTOMATIC,
                        cta: r ?? (n === `app` ? `app_connect_sign_in` : n === `gpt` ? `workspace_gpt_sign_in` : `workspace_share_sign_in`)
                    }))
                }
            }), F) : (b.current || (b.current = !0, a({
                actionType: i.ACCESS_FLOW_ENTRY_ACTION_TYPE_PAGE_LOADED,
                entryPoint: l.ACCESS_FLOW_ENTRY_POINT_LOGIN_MODAL,
                entryTrigger: c.ACCESS_FLOW_ENTRY_TRIGGER_AUTOMATIC,
                cta: r ?? (n === `app` ? `app_connect_sso_sign_in` : n === `gpt` ? `workspace_gpt_sso_sign_in` : `workspace_share_sso_sign_in`)
            })), f(j, {
                contentType: n,
                ssoRequired: h,
                onClose: () => y(`/`, {
                    replace: !0
                }),
                onContinueWithSso: () => {
                    s(w(), p.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_SSO, o.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_MODAL);
                    let e = new URLSearchParams({
                        next: d + window.location.hash,
                        sso: `true`,
                        connection: m
                    });
                    g != null && e.set(`wId`, g), window.location.replace(`/auth/login?${e}`)
                },
                onUseAnotherSignInMethod: () => {
                    s(w(), p.ACCESS_FLOW_USER_ACTION_TYPE_SWITCH_TO_GENERIC_LOGIN_CLICKED, o.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_MODAL), x(j), _({
                        callbackUrl: e,
                        skipLoginModal: !1,
                        onLoginModalDismiss: () => y(`/`, {
                            replace: !0
                        })
                    })
                }
            }), P)
        }, E = [n, r, u, y, d, m, h, g], t[0] = n, t[1] = r, t[2] = u, t[3] = y, t[4] = d, t[5] = m, t[6] = h, t[7] = g, t[8] = S, t[9] = E) : (S = t[8], E = t[9]), (0, L.useEffect)(S, E), null
    }
}));
export {
    z as n, R as t
};
//# sourceMappingURL=1a794ff6-i6hgc1lgsx6ldemh.js.map