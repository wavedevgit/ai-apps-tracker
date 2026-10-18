const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/bbbe3e8f-dp36vgf1nzqcxubf.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/8b34dbc2-gf9wnwcahty27ylx.js", "assets/conversation-small-fym1zmu9zimymmm1.js", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css", "assets/82782bc9-h658ejxn3ufkvr7a.js", "assets/b2cbd5c7-m8w403w5kiq0u2w6.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ant as n,
    Hx as r,
    Nrt as i,
    Prt as a,
    UL as o,
    Ux as s,
    WL as c,
    fU as l,
    knt as u,
    o1 as d,
    pU as f,
    rot as p,
    u1 as m
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as h,
    Bn as g,
    Ht as ee,
    Ln as _,
    N as te,
    O as ne,
    Pt as re,
    Rn as v,
    Rt as ie,
    Ut as y,
    Vn as b,
    cn as x,
    jt as ae,
    ln as S,
    s as C,
    wn as w,
    zn as oe
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Art as se,
    Cit as ce,
    EWt as T,
    Gwn as E,
    JX as D,
    Mrt as le,
    NWt as O,
    UX as ue,
    WX as de,
    Wwn as fe,
    cNt as pe,
    dwn as me,
    fwn as he,
    jrt as k,
    krt as ge,
    oNt as A,
    qrt as j,
    wWt as _e,
    xit as ve,
    ywn as ye
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Fv as be,
    Hv as M,
    Ju as N,
    Ku as xe,
    Ov as Se,
    Pv as Ce,
    Sv as we,
    Uv as Te,
    Vv as Ee,
    uv as De,
    zv as Oe
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    n as ke,
    t as P
} from "./65b7af15-ch0fbrpmec4wd9eo.js";
import {
    n as Ae,
    r as F
} from "./db2560a5-hvp8sdtr5ycd1znw.js";
import {
    n as I,
    t as L
} from "./1a794ff6-kiv7bk0z9t8iwufy.js";
import {
    n as R,
    r as z
} from "./5fec77d9-jex9n8b8mif0vo5x.js";
var B, V = e((() => {
    O(), B = e => e === T.SlackDelegationFallback || e === T.MicrosoftTeamsDelegationFallback
}));

function H() {
    "use forget";
    let e = (0, U.c)(13),
        t = ae(),
        [n] = ee(),
        r = ce();
    if (!a()) {
        let i = n.get(`sso_required`),
            a;
        e[0] === r ? a = e[1] : (a = B(r) ? r : void 0, e[0] = r, e[1] = a);
        let o = `${t.pathname}${t.search}`,
            s;
        e[2] === n ? s = e[3] : (s = n.get(`sso_connection`)?.trim() || null, e[2] = n, e[3] = s);
        let c = i === `true` || i !== `false` && null,
            l;
        e[4] === n ? l = e[5] : (l = n.get(`workspace_id`)?.trim() || void 0, e[4] = n, e[5] = l);
        let u;
        return e[6] !== a || e[7] !== o || e[8] !== s || e[9] !== c || e[10] !== l ? (u = (0, G.jsx)(L, {
            contentType: `app`,
            entryCta: a,
            returnPath: o,
            ssoConnection: s,
            ssoRequired: c,
            workspaceId: l
        }), e[6] = a, e[7] = o, e[8] = s, e[9] = c, e[10] = l, e[11] = u) : u = e[11], u
    }
    let i;
    return e[12] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, G.jsx)(K, {}), e[12] = i) : i = e[12], i
}
async function je(e) {
    try {
        let {
            completePluginSuggestionOAuth: t
        } = await x(async () => {
            let {
                completePluginSuggestionOAuth: e
            } = await import(`./bbbe3e8f-dp36vgf1nzqcxubf.js`).then(e => (e.r(), e.a));
            return {
                completePluginSuggestionOAuth: e
            }
        }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));
        await t(e)
    } catch {
        n.warn(`plugin_suggestion_continuation_unavailable`)
    }
}
var U, W, G, Me, Ne, K, q, J, Y = e((() => {
    h(), U = w(), P(), ye(), F(), I(), N(), V(), r(), D(), j(), O(), E(), k(), M(), be(), m(), f(), i(), A(), o(), u(), C(), W = t(b()), v(), z(), G = g(), S(), Me = e => e.replace(/\/connect\/?$/, ``), Ne = (e, t) => {
        let n = e.indexOf(`?`);
        return n !== -1 && new URLSearchParams(e.slice(n + 1)).has(t)
    }, K = () => {
        "use forget";
        let e = (0, U.c)(77),
            t = oe(),
            {
                id: n
            } = ie(),
            r = ae(),
            i = re(),
            o = te(),
            u;
        e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (u = l(), e[0] = u) : u = e[0];
        let f = u,
            [m] = ee(),
            h;
        e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (h = a(), e[1] = h) : h = e[1];
        let g = h,
            _ = (0, W.useRef)(!1),
            v = (0, W.useRef)(!1),
            y = ve(),
            b = ce(),
            x;
        e[2] === r.pathname ? x = e[3] : (x = Me(r.pathname), e[2] = r.pathname, e[3] = x);
        let S = `${x}${r.search}`,
            C, w, E, D, O, k, A;
        if (e[4] !== S || e[5] !== n || e[6] !== r.hash || e[7] !== r.pathname || e[8] !== r.search || e[9] !== m) {
            let t = m.get(De),
                i = t && c(t) ? t : void 0;
            O = we(i);
            let a;
            e[17] === m ? a = e[18] : (a = m.get(`mfa_continuation`), e[17] = m, e[18] = a);
            let o = a === `1`,
                l = n && O ? se({
                    connectorId: n,
                    installAttemptId: O
                }) : void 0;
            E = l?.accountId ?? (n ? Ee({
                appId: n,
                installAttemptId: O
            }) : void 0);
            let u;
            e[19] === Symbol.for(`react.memo_cache_sentinel`) ? (u = d(), e[19] = u) : u = e[19];
            let f = u;
            D = g && (o && (!O || !l?.accountId || !l?.normalizedAccountUserId) || E !== void 0 && f?.id !== E || l?.normalizedAccountUserId !== void 0 && f?.normalizedAccountUserId !== l.normalizedAccountUserId);
            let p = m.get(_e),
                h = p && c(p) ? p : void 0,
                ee = i ?? h ?? `${S}${r.hash}`,
                _ = i ?? h ?? S;
            if (k = O && !Ce(m).isNativeMobileView ? `${r.pathname}${r.search}${r.hash}` : _, A = s(_) ? k : void 0, C = Se({
                    returnTo: ee
                }), w = Se({
                    returnTo: _
                }), O && !Ce(m).isNativeMobileView) {
                let e = new URL(w, `https://chatgpt.com`);
                for (let t of [de, ue, `add_source`]) {
                    let n = m.get(t);
                    n && !e.searchParams.has(t) && e.searchParams.set(t, n)
                }
                w = `${e.pathname}${e.search}${e.hash}`
            }
            e[4] = S, e[5] = n, e[6] = r.hash, e[7] = r.pathname, e[8] = r.search, e[9] = m, e[10] = C, e[11] = w, e[12] = E, e[13] = D, e[14] = O, e[15] = k, e[16] = A
        } else C = e[10], w = e[11], E = e[12], D = e[13], O = e[14], k = e[15], A = e[16];
        let j = Ae({
                defaultPlatform: `chat`,
                locale: t.locale,
                searchParams: m
            }),
            ye = pe(),
            be = ne({
                ...he(n, ye ? j : {
                    ...j,
                    workspace: d()?.isWorkspaceAccount() ?? !1
                }, ye ? `directoryDetails` : `appsContent`),
                enabled: !!n && !D
            }),
            M = me(n, j),
            N = g && !!n && !D,
            P;
        e[20] !== M || e[21] !== N ? (P = {
            ...M,
            enabled: N
        }, e[20] = M, e[21] = N, e[22] = P) : P = e[22];
        let F = ne(P),
            I = be.data?.name,
            L;
        e[23] !== r.hash || e[24] !== y ? (L = Ne(r.hash, `product-sku`) ? y ?? fe.CONNECTOR_SETTING : fe.CONNECTOR_SETTING, e[23] = r.hash, e[24] = y, e[25] = L) : L = e[25];
        let R = L,
            z;
        e[26] !== r.hash || e[27] !== b ? (z = Ne(r.hash, `referrer`) ? b ?? T.PCAConnectorSuggestionBeacon : T.PCAConnectorSuggestionBeacon, e[26] = r.hash, e[27] = b, e[28] = z) : z = e[28];
        let B = z,
            V;
        e[29] !== C || e[30] !== O || e[31] !== r.state || e[32] !== i ? (V = () => {
            v.current || (Oe(O, {
                requireMatchingAttempt: !0
            }), ge(O), i(C, {
                replace: !0,
                state: r.state
            }))
        }, e[29] = C, e[30] = O, e[31] = r.state, e[32] = i, e[33] = V) : V = e[33];
        let H = V,
            K, q;
        e[34] !== H || e[35] !== D || e[36] !== t ? (q = () => {
            D && (f.danger(t.formatMessage(J.pluginInstallFailed)), H())
        }, K = [H, D, t, f], e[34] = H, e[35] = D, e[36] = t, e[37] = K, e[38] = q) : (K = e[37], q = e[38]), (0, W.useEffect)(q, K);
        let Y;
        e[39] !== I || e[40] !== j.country || e[41] !== j.locale || e[42] !== j.platform || e[43] !== w || e[44] !== n || e[45] !== O || e[46] !== t || e[47] !== r.state || e[48] !== i || e[49] !== o ? (Y = async e => {
            let {
                showAlreadyConnectedToast: a,
                connectorLinkConfirmed: s
            } = e, c = s !== void 0 && s;
            if (!n) return;
            let l = p(),
                u = await Te({
                    appId: n,
                    installAttemptId: O,
                    queryClient: o,
                    onInstalled: async e => {
                        !l?.user?.id || !l.account?.id || await je({
                            queryClient: o,
                            returnTo: w,
                            pluginId: e,
                            userId: l.user.id,
                            accountId: l.account.id,
                            requestContext: {
                                country: j.country,
                                platform: j.platform,
                                locale: j.locale,
                                hasWorkspace: d()?.isWorkspaceAccount() ?? !1
                            }
                        })
                    },
                    requestContext: {
                        country: j.country,
                        platform: j.platform,
                        locale: j.locale,
                        hasWorkspace: d()?.isWorkspaceAccount() ?? !1
                    }
                });
            le({
                connectorId: n,
                installAttemptId: O,
                installResult: u,
                connectorLinkConfirmed: c
            }), u === `failed` ? f.danger(t.formatMessage(J.pluginInstallFailed)) : u === `absent` && a && I && f.info(t.formatMessage(J.alreadyConnected, {
                appName: I
            })), i(w, {
                replace: !0,
                state: r.state
            })
        }, e[39] = I, e[40] = j.country, e[41] = j.locale, e[42] = j.platform, e[43] = w, e[44] = n, e[45] = O, e[46] = t, e[47] = r.state, e[48] = i, e[49] = o, e[50] = Y) : Y = e[50];
        let X = Y,
            Z;
        e[51] !== n || e[52] !== X || e[53] !== o ? (Z = async e => {
            if (n && (v.current = !0, !_.current)) {
                _.current = !0;
                try {
                    await ke(o, n), await X({
                        showAlreadyConnectedToast: !1,
                        connectorLinkConfirmed: typeof e?.linkId == `string` && e.linkId.length > 0
                    })
                } catch (e) {
                    let t = e;
                    throw v.current = !1, _.current = !1, t
                }
            }
        }, e[51] = n, e[52] = X, e[53] = o, e[54] = Z) : Z = e[54];
        let Pe = Z,
            Q;
        e[55] !== F.data?.installed || e[56] !== I || e[57] !== D || e[58] !== n || e[59] !== X ? (Q = () => {
            !n || D || !F.data?.installed || !I || _.current || (_.current = !0, X({
                showAlreadyConnectedToast: !0
            }))
        }, e[55] = F.data?.installed, e[56] = I, e[57] = D, e[58] = n, e[59] = X, e[60] = Q) : Q = e[60];
        let Fe = F.data?.installed,
            $;
        if (e[61] !== I || e[62] !== D || e[63] !== n || e[64] !== X || e[65] !== Fe ? ($ = [Fe, I, D, n, X], e[61] = I, e[62] = D, e[63] = n, e[64] = X, e[65] = Fe, e[66] = $) : $ = e[66], (0, W.useEffect)(Q, $), D || g && F.isLoading || F.data?.installed) return null;
        let Ie;
        return e[67] !== E || e[68] !== H || e[69] !== Pe || e[70] !== n || e[71] !== O || e[72] !== k || e[73] !== R || e[74] !== A || e[75] !== B ? (Ie = (0, G.jsx)(xe, {
            accountId: E,
            checkInstallationPolicy: !0,
            connectorId: n,
            redirectAfter: k,
            oauthRedirectAfter: A,
            pluginInstallAttemptId: O,
            productSku: R,
            noRedirect: !0,
            referrer: B,
            postConnectExperienceSource: `plugin_install`,
            onComplete: Pe,
            awaitOnComplete: !0,
            onClose: H
        }), e[67] = E, e[68] = H, e[69] = Pe, e[70] = n, e[71] = O, e[72] = k, e[73] = R, e[74] = A, e[75] = B, e[76] = Ie) : Ie = e[76], Ie
    }, q = y(function() {
        "use forget";
        let e = (0, U.c)(1),
            t;
        return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, G.jsx)(H, {}), e[0] = t) : t = e[0], t
    }), J = _({
        pluginInstallFailed: {
            id: `chatgpt.plugins.connect.install.toast.failure`,
            defaultMessage: `Couldn't add plugin`
        },
        alreadyConnected: {
            id: `7Il4u9`,
            defaultMessage: `{appName} is already connected`
        }
    })
}));
e((() => {
    Y()
}))();
export {
    R as clientLoader, q as
    default
};
//# sourceMappingURL=apps._name._id.connect-3mpxl73q.js.map