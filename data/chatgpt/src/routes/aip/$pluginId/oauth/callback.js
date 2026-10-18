import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Fz as n,
    Iz as r,
    Pz as i,
    a7 as a,
    hU as o,
    l7 as s,
    pU as c
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as l,
    At as u,
    Bn as d,
    Pt as f,
    Ut as p,
    Vn as m
} from "./2340486e-oc6d2eodbcrmxur3.js";

function h(e) {
    return e instanceof URL ? e : typeof e == `string` ? new URL(e, v) : typeof window < `u` && window.location?.origin ? new URL(window.location.origin) : new URL(v)
}

function g(e, t) {
    let n = h(t),
        r = new URL(n.origin),
        i = new URL(e, r);
    if (i.href === `chatgpt://oauth_complete`) return i;
    if (i.origin !== r.origin) throw Error(`Invalid redirect URL: would redirect off site.`);
    if (!_.some(e => e === i.protocol)) throw Error(`Invalid redirect URL: unsafe protocol.`);
    return i
}
var _, v, y = e((() => {
    _ = [`http:`, `https:`, `mailto:`, `tel:`], v = `https://chatgpt.com`
}));
async function b(e, t, n, r) {
    let i = await a.safeGet(`/aip/p/{id}/user-settings/oauth/callback`, {
        parameters: {
            path: {
                id: e
            },
            query: {
                code: t,
                redirect_uri: n,
                ...r == null ? {} : {
                    state: r
                }
            }
        }
    });
    return {
        ...i,
        redirect_path: g(i.redirect_path).toString()
    }
}
var x, S, C, w, T = e((() => {
    l(), c(), n(), s(), y(), x = t(m()), S = d(), C = `chatgpt://oauth_complete`, w = p(function() {
        let {
            pluginId: e,
            code: t,
            state: n,
            error: a,
            errorDesc: s
        } = u(), c = f(), l = (0, x.useRef)(!1);
        (0, x.useEffect)(() => {
            if (l.current) return;
            l.current = !0;
            async function a() {
                let a = `https://chat.openai.com/aip/${e}/oauth/callback`;
                try {
                    let o = await b(e, t, a, n);
                    if (o.success && o.redirect_path === C) {
                        window.location.href = C;
                        return
                    }
                    let s = new URL(o.success ? r(i.OAUTH_SUCCESS, o.redirect_path) : r(i.CUSTOM_ERROR, o.redirect_path, o.error ?? o.message), location.origin);
                    o.success && s.searchParams.set(`oauth_success`, `true`);
                    let l = s.searchParams.getAll(`oauth_return_surface`),
                        u = l.length === 1 ? l[0] : void 0;
                    if (u === `merge` || u !== `classic` && o.success && s.searchParams.has(`gpt_action_oauth`)) {
                        window.location.replace(s.href);
                        return
                    }
                    c(s.pathname + s.search + s.hash)
                } catch {
                    c({
                        pathname: `/`,
                        search: new URLSearchParams({
                            model: `gpt-4-plugins`,
                            loginAip: e,
                            loginSuccess: `false`
                        }).toString()
                    })
                }
            }
            a()
        }, [e, t, n, c]);
        let d = o();
        return (0, x.useEffect)(() => {
            a && d.danger(`${a}${s?`: ${s}`:``}`, {
                duration: 5,
                toastId: `oauth_callback: AIPOauth`,
                loggingTitle: a,
                loggingDescription: s ?? ``
            })
        }, [a, s, d]), (0, S.jsx)(`div`, {})
    })
}));
e((() => {
    T()
}))();
export {
    w as
    default
};
//# sourceMappingURL=aip._pluginId.oauth.callback-k5w8l4zd.js.map