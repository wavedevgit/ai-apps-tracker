import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    fz as n,
    o1 as r,
    u1 as i,
    uz as a
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as o,
    Bn as s,
    Ln as c,
    Rn as l,
    Rt as u,
    Ut as d,
    Vn as f,
    jt as p,
    zn as m
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Cy as h,
    Jvn as g,
    Ty as _,
    Yvn as v,
    wy as y
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    n as b,
    t as x
} from "./62b1bc77-co12ysbfd3dutqn5.js";
var S, C, w, T, E = e((() => {
    o(), b(), y(), v(), n(), i(), S = t(f()), l(), C = s(), w = d(function() {
        let e = (0, S.useRef)(!1),
            {
                hash: t
            } = p(),
            {
                code: n,
                error: i,
                error_description: o,
                state: s
            } = Object.fromEntries(new URLSearchParams(t.substring(1)).entries()),
            c = u().pluginId,
            l = m(),
            d = r();
        return (0, S.useEffect)(() => {
            if (e.current) return;
            c && n && s && (e.current = !0);
            async function t() {
                if (i && c && (_({
                        success: !1,
                        pluginId: c,
                        error: i,
                        errorType: i,
                        errorDesc: o
                    }), window.close()), !(!c || !n || !s)) {
                    if (s.startsWith(`v2__`)) try {
                        let e = await g.user_connection_oauth_callback(c, n, s);
                        _({
                            success: !0,
                            pluginId: c,
                            redirectTo: e.redirect_to ?? void 0
                        }), window.close()
                    } catch (e) {
                        let t = x(e),
                            n = l.formatMessage(T.connectedDriveErrorDesc),
                            r = `unknown`;
                        t && (r = t.error_type, n = l.formatMessage({
                            id: `Xjmi4X`,
                            defaultMessage: `Failed to connect your account: {error}`
                        }, {
                            error: t.message
                        })), h.postMessage({
                            success: !1,
                            pluginId: c,
                            errorType: r,
                            error: n
                        }), window.close();
                        return
                    } else if (s.startsWith(`aqs__`) && d) try {
                        let e = await g.admin_connect_and_quickstart(d.id, c, n, s);
                        _({
                            success: !0,
                            pluginId: c,
                            redirectTo: e.redirect_to ?? void 0
                        }), window.close()
                    } catch (e) {
                        let t = x(e),
                            n = l.formatMessage(T.connectedDriveErrorDesc),
                            r = `unknown`;
                        t && (r = t.error_type, n = l.formatMessage({
                            id: `Xjmi4X`,
                            defaultMessage: `Failed to connect your account: {error}`
                        }, {
                            error: t.message
                        })), h.postMessage({
                            success: !1,
                            pluginId: c,
                            errorType: r,
                            error: n
                        }), window.close();
                        return
                    }
                }
            }
            t()
        }, [c, n, s, l, i, o, d]), (0, C.jsx)(a, {
            className: `icon-xl`
        })
    }), T = c({
        connectedDriveErrorDesc: {
            id: `CACallback.connectedDriveErrorDesc.1`,
            defaultMessage: `We encountered an issue. Please retry and contact your admin if this issue persists.`
        }
    })
}));
e((() => {
    E()
}))();
export {
    w as
    default
};
//# sourceMappingURL=ca._pluginId.oauth.callback-ijapdxbv.js.map