const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/90f621d9-nukn7t0zi89oelzb.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-dfpv67hlp00pbohr.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/30901919-7dzdc1ou0jtwkwpt.js", "assets/966be48d-bpma7pzmscd8899l.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AR as n,
    BR as r,
    FR as i,
    G0 as a,
    Gnt as o,
    HR as s,
    Jnt as c,
    KR as l,
    Q0 as u,
    VR as d,
    WR as f,
    X0 as p,
    Xnt as m,
    Y0 as h,
    YR as g,
    Z0 as _,
    g0 as v,
    jR as y,
    m0 as b,
    n0 as x,
    q0 as S,
    r0 as C,
    t2 as w
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Nt as T,
    Q as E,
    Vn as D,
    cn as O,
    ln as k,
    wn as A
} from "./2340486e-i7pjxgdhv0bs6apg.js";
var j, M = e((() => {
    p(), k(), j = h(() => O(() => import(`./90f621d9-nukn7t0zi89oelzb.js`).then(e => e.WorkspaceShareSsoModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6])))
}));

function N() {}

function P() {
    _(j), _(a)
}

function F() {
    return _(a)
}
var I, L, R, z = e((() => {
    I = A(), n(), u(), S(), M(), v(), x(), m(), g(), L = t(D()), E(), R = e => {
        "use forget";
        let t = (0, I.c)(10),
            {
                contentType: n,
                entryCta: a,
                loginModalExperiment: u,
                returnPath: p,
                ssoConnection: m,
                ssoRequired: h,
                workspaceId: g
            } = e,
            v = T(),
            x = (0, L.useRef)(!1),
            S, E;
        return t[0] !== n || t[1] !== a || t[2] !== u || t[3] !== v || t[4] !== p || t[5] !== m || t[6] !== h || t[7] !== g ? (S = () => {
            if (u != null) {
                let e = c(u).get(`show_login_modal`, !1);
                if (o().catch(N), !e) return
            }
            let e = g == null ? window.location.href : `/auth/login?${new URLSearchParams({next:p+window.location.hash,wId:g})}`;
            return m == null ? (C({
                callbackUrl: e,
                skipLoginModal: !1,
                onLoginModalDismiss: () => v(`/`, {
                    replace: !0
                }),
                callback: () => {
                    x.current || (x.current = !0, y({
                        actionType: r.ACCESS_FLOW_ENTRY_ACTION_TYPE_PAGE_LOADED,
                        entryPoint: d.ACCESS_FLOW_ENTRY_POINT_LOGIN_MODAL,
                        entryTrigger: s.ACCESS_FLOW_ENTRY_TRIGGER_AUTOMATIC,
                        cta: a ?? (n === `app` ? `app_connect_sign_in` : n === `gpt` ? `workspace_gpt_sign_in` : `workspace_share_sign_in`)
                    }))
                }
            }), F) : (x.current || (x.current = !0, y({
                actionType: r.ACCESS_FLOW_ENTRY_ACTION_TYPE_PAGE_LOADED,
                entryPoint: d.ACCESS_FLOW_ENTRY_POINT_LOGIN_MODAL,
                entryTrigger: s.ACCESS_FLOW_ENTRY_TRIGGER_AUTOMATIC,
                cta: a ?? (n === `app` ? `app_connect_sso_sign_in` : n === `gpt` ? `workspace_gpt_sso_sign_in` : `workspace_share_sso_sign_in`)
            })), w(j, {
                contentType: n,
                ssoRequired: h,
                onClose: () => v(`/`, {
                    replace: !0
                }),
                onContinueWithSso: () => {
                    i(b(), l.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_SSO, f.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_MODAL);
                    let e = new URLSearchParams({
                        next: p + window.location.hash,
                        sso: `true`,
                        connection: m
                    });
                    g != null && e.set(`wId`, g), window.location.replace(`/auth/login?${e}`)
                },
                onUseAnotherSignInMethod: () => {
                    i(b(), l.ACCESS_FLOW_USER_ACTION_TYPE_SWITCH_TO_GENERIC_LOGIN_CLICKED, f.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_MODAL), _(j), C({
                        callbackUrl: e,
                        skipLoginModal: !1,
                        onLoginModalDismiss: () => v(`/`, {
                            replace: !0
                        })
                    })
                }
            }), P)
        }, E = [n, a, u, v, p, m, h, g], t[0] = n, t[1] = a, t[2] = u, t[3] = v, t[4] = p, t[5] = m, t[6] = h, t[7] = g, t[8] = S, t[9] = E) : (S = t[8], E = t[9]), (0, L.useEffect)(S, E), null
    }
}));
export {
    z as n, R as t
};
//# sourceMappingURL=1a794ff6-mt36jpmrsmsh3py8.js.map