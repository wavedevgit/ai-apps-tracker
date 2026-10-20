const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/f8943f1a-jplmqj8go5lpek04.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-qsuygr73qjc6rh65.js", "assets/2340486e-komxp8tzs51ny4jj.js", "assets/root-lelxp0l2.css", "assets/conversation-small-cawdu7il3ha6y70c.js", "assets/30901919-jory365vq6ym5crx.js", "assets/c470f5ab-in0lllrdrzeo67gs.js", "assets/0e5afe53-f9gmgfmgrr83ziw3.js", "assets/conversation-small-czggvj2v.css", "assets/707eab0c-hquix1of0ixypvkq.js", "assets/c2675c8c-nxl2ic2ofk2vw70s.js", "assets/82782bc9-jj605vonxg0iyc7p.js", "assets/8b34dbc2-d4icgkio4i3wfm6q.js", "assets/global-modals-lv5n3ujm.css", "assets/9d60841e-iq8jqsevylx8yfuv.js", "assets/bcae0416-id11cwjb6ybczrya.js", "assets/d4c740a3-ejmx8mw37mgqphty.js", "assets/Button-ijivgymd.css", "assets/b15d5b53-e6cp4e2z003z2wgw.js", "assets/06dfbf77-h0lre1ra65kdsbtv.js", "assets/94e0eb8c-ythfm4ybtszwhr06.js", "assets/47ed0b35-bw9gmwpxovpkglbv.js", "assets/760cdbab-f8c494pab89fqmuf.js", "assets/d5b03218-btuc4i67rdlk712k.js", "assets/7517017f-m0e7hb8h6fyirvew.js", "assets/832dbd3a-klwywsa40rwcjix6.js", "assets/35efed7b-erfaeg1cma06avez.js", "assets/e1258b01-gguen6vzza2gncx4.js", "assets/51994dd8-k24c1llm089y6pog.js", "assets/99a48954-b5oyjy59r8mv6u45.js", "assets/7f8fbef9-gwiwk0bxkmzopqir.js", "assets/5e9a123c-gzo5l4mey5rp7r90.js", "assets/50ec8f21-b2m7e4aenkl4kos1.js"]))) => i.map(i => d[i]);
import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $st as r,
    J0 as i,
    Nst as a,
    Y0 as o
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Hn as s,
    Tn as c,
    Vn as l,
    ln as u,
    un as d
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    My as f,
    Ty as p
} from "./c2675c8c-nxl2ic2ofk2vw70s.js";
import {
    i as m,
    n as h,
    t as g
} from "./56d77f0a-gmlt8vol6jqhj6l6.js";
var _ = t({
    AdminPluginAppSyncSetupProvider: () => C
});

function v(e) {
    let {
        key: t
    } = e;
    return t === `teams_admin`
}
var y, b, x, S, C, w, T = e((() => {
    y = c(), r(), p(), m(), o(), b = n(s()), x = l(), d(), S = i(() => u(() => import(`./f8943f1a-jplmqj8go5lpek04.js`).then(e => e.AdminPluginTeamsSyncSetupModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]))), C = e => {
        "use forget";
        let t = (0, y.c)(3),
            {
                children: n,
                workspaceId: r
            } = e,
            i;
        return t[0] !== n || t[1] !== r ? (i = (0, x.jsx)(h, {
            connectorReadScope: `plugin-admin-v2`,
            children: (0, x.jsx)(w, {
                workspaceId: r,
                children: n
            })
        }), t[0] = n, t[1] = r, t[2] = i) : i = t[2], i
    }, w = e => {
        "use forget";
        let t = (0, y.c)(10),
            {
                children: n,
                workspaceId: r
            } = e,
            i = (0, b.useContext)(g),
            o = f(),
            [s, c] = (0, b.useState)(null),
            l;
        t[0] === i ? l = t[1] : (l = e => {
            if (e?.openToAdminSync === !0 && e.app.primaryConnector.type === a.TEAMS_CONNECTOR && e.app.knowledgeConfig.some(v)) {
                c(e);
                return
            }
            e ?? c(null), i(e)
        }, t[0] = i, t[1] = l);
        let u;
        t[2] !== o || t[3] !== s || t[4] !== r ? (u = s == null ? null : (0, x.jsx)(S, {
            app: s.app,
            skipParameterConstraintsPreflight: s.skipParameterConstraintsPreflight,
            workspaceId: r,
            onClose: () => {
                c(null), o(), s.onClose?.()
            }
        }), t[2] = o, t[3] = s, t[4] = r, t[5] = u) : u = t[5];
        let d;
        return t[6] !== n || t[7] !== l || t[8] !== u ? (d = (0, x.jsxs)(g.Provider, {
            value: l,
            children: [u, n]
        }), t[6] = n, t[7] = l, t[8] = u, t[9] = d) : d = t[9], d
    }
}));
export {
    _ as n, T as r, C as t
};
//# sourceMappingURL=7cc0c434-d6xcc34ps31m0s7b.js.map