const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/f8943f1a-ews228whudayuqoc.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/conversation-small-fym1zmu9zimymmm1.js", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css", "assets/707eab0c-joqgzfzs0dn7ukcc.js", "assets/c2675c8c-ig7dykzhv7vbqkt7.js", "assets/82782bc9-h658ejxn3ufkvr7a.js", "assets/8b34dbc2-gf9wnwcahty27ylx.js", "assets/global-modals-njebr7y8.css", "assets/9d60841e-bx3dwc8nyvp30a4s.js", "assets/bcae0416-eho3k65xd82h5dgh.js", "assets/d4c740a3-grm4mqv12ru1q0ee.js", "assets/Button-ijivgymd.css", "assets/b15d5b53-dc3ccc7s4e22frpt.js", "assets/06dfbf77-ccpm2eo5a4df2zww.js", "assets/94e0eb8c-bt3osepxf0748soh.js", "assets/47ed0b35-ju28grcwo7z0qhyt.js", "assets/760cdbab-j3xiau99es34zdrv.js", "assets/d5b03218-knpkk3kr8qzc2jcv.js", "assets/7517017f-m0e7hb8h6fyirvew.js", "assets/832dbd3a-8ils21g1hok0as2u.js", "assets/35efed7b-maxibsyj8u9alggl.js", "assets/e1258b01-dvyn277oke1zy2e2.js", "assets/51994dd8-f73dt6fz3csyx3bu.js", "assets/99a48954-kcp7qbxopdlqkg42.js", "assets/7f8fbef9-co69js5r8wxurwm5.js", "assets/5e9a123c-lsjdd1fkaoerp9mv.js", "assets/50ec8f21-b2m7e4aenkl4kos1.js"]))) => i.map(i => d[i]);
import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    C0 as r,
    S0 as i,
    ist as a,
    wst as o
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as s,
    Vn as c,
    cn as l,
    ln as u,
    wn as d
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Py as f,
    Vy as p
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    i as m,
    n as h,
    t as g
} from "./56d77f0a-mygmkjeex8fwpulz.js";
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
    y = d(), o(), f(), m(), r(), b = n(c()), x = s(), u(), S = i(() => l(() => import(`./f8943f1a-ews228whudayuqoc.js`).then(e => e.AdminPluginTeamsSyncSetupModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]))), C = e => {
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
            o = p(),
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
//# sourceMappingURL=7cc0c434-dq3vu17sb852x1af.js.map