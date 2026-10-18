const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/90f621d9-n7lunvhyx49kyp2i.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/966be48d-knoyz9r6e2bop0ms.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as n,
    AR as r,
    C0 as i,
    CR as a,
    DR as o,
    O0 as s,
    S0 as c,
    SR as l,
    T0 as u,
    TR as d,
    U1 as f,
    V1 as p,
    _nt as m,
    b0 as h,
    dR as g,
    fR as _,
    gR as v,
    k1 as y,
    mnt as b,
    v0 as x,
    w0 as S,
    xR as C,
    ynt as w
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as T,
    Pt as E,
    Vn as D,
    cn as O,
    ln as k,
    wn as A
} from "./2340486e-oc6d2eodbcrmxur3.js";
var j, M = e((() => {
    i(), k(), j = c(() => O(() => import(`./90f621d9-n7lunvhyx49kyp2i.js`).then(e => e.WorkspaceShareSsoModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6])))
}));

function N() {}

function P() {
    S(j), S(x)
}

function F() {
    return S(x)
}
var I, L, R, z = e((() => {
    I = A(), g(), u(), h(), M(), f(), y(), w(), r(), L = t(D()), T(), R = e => {
        "use forget";
        let t = (0, I.c)(10),
            {
                contentType: r,
                entryCta: i,
                loginModalExperiment: c,
                returnPath: u,
                ssoConnection: f,
                ssoRequired: h,
                workspaceId: g
            } = e,
            y = E(),
            x = (0, L.useRef)(!1),
            w, T;
        return t[0] !== r || t[1] !== i || t[2] !== c || t[3] !== y || t[4] !== u || t[5] !== f || t[6] !== h || t[7] !== g ? (w = () => {
            if (c != null) {
                let e = m(c).get(`show_login_modal`, !1);
                if (b().catch(N), !e) return
            }
            let e = g == null ? window.location.href : `/auth/login?${new URLSearchParams({next:u+window.location.hash,wId:g})}`;
            return f == null ? (n({
                callbackUrl: e,
                skipLoginModal: !1,
                onLoginModalDismiss: () => y(`/`, {
                    replace: !0
                }),
                callback: () => {
                    x.current || (x.current = !0, _({
                        actionType: C.ACCESS_FLOW_ENTRY_ACTION_TYPE_PAGE_LOADED,
                        entryPoint: l.ACCESS_FLOW_ENTRY_POINT_LOGIN_MODAL,
                        entryTrigger: a.ACCESS_FLOW_ENTRY_TRIGGER_AUTOMATIC,
                        cta: i ?? (r === `app` ? `app_connect_sign_in` : r === `gpt` ? `workspace_gpt_sign_in` : `workspace_share_sign_in`)
                    }))
                }
            }), F) : (x.current || (x.current = !0, _({
                actionType: C.ACCESS_FLOW_ENTRY_ACTION_TYPE_PAGE_LOADED,
                entryPoint: l.ACCESS_FLOW_ENTRY_POINT_LOGIN_MODAL,
                entryTrigger: a.ACCESS_FLOW_ENTRY_TRIGGER_AUTOMATIC,
                cta: i ?? (r === `app` ? `app_connect_sso_sign_in` : r === `gpt` ? `workspace_gpt_sso_sign_in` : `workspace_share_sso_sign_in`)
            })), s(j, {
                contentType: r,
                ssoRequired: h,
                onClose: () => y(`/`, {
                    replace: !0
                }),
                onContinueWithSso: () => {
                    v(p(), o.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_SSO, d.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_MODAL);
                    let e = new URLSearchParams({
                        next: u + window.location.hash,
                        sso: `true`,
                        connection: f
                    });
                    g != null && e.set(`wId`, g), window.location.replace(`/auth/login?${e}`)
                },
                onUseAnotherSignInMethod: () => {
                    v(p(), o.ACCESS_FLOW_USER_ACTION_TYPE_SWITCH_TO_GENERIC_LOGIN_CLICKED, d.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_MODAL), S(j), n({
                        callbackUrl: e,
                        skipLoginModal: !1,
                        onLoginModalDismiss: () => y(`/`, {
                            replace: !0
                        })
                    })
                }
            }), P)
        }, T = [r, i, c, y, u, f, h, g], t[0] = r, t[1] = i, t[2] = c, t[3] = y, t[4] = u, t[5] = f, t[6] = h, t[7] = g, t[8] = w, t[9] = T) : (w = t[8], T = t[9]), (0, L.useEffect)(w, T), null
    }
}));
export {
    z as n, R as t
};
//# sourceMappingURL=1a794ff6-kiv7bk0z9t8iwufy.js.map