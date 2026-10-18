const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/c0f184a5-j2op29j7kgg68i43.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/conversation-small-fym1zmu9zimymmm1.js", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css", "assets/07c7be17-lep3pqzh63ahqu2w.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as n,
    AT as r,
    B6 as i,
    BW as a,
    Bz as o,
    C0 as s,
    CW as c,
    Cit as l,
    DW as u,
    Ga as d,
    HS as f,
    HW as p,
    J8 as m,
    Qit as h,
    Rb as g,
    S0 as _,
    S1 as v,
    Sit as y,
    Srt as b,
    Tit as x,
    Ua as S,
    VS as C,
    VW as w,
    Y2 as ee,
    Y8 as te,
    _s as T,
    a7 as ne,
    b5 as re,
    cat as ie,
    dz as ae,
    e1 as oe,
    fU as se,
    fz as ce,
    i5 as le,
    iat as ue,
    iw as E,
    k1 as D,
    kT as O,
    l7 as de,
    mrt as fe,
    n1 as pe,
    ow as me,
    pU as he,
    ps as k,
    q2 as A,
    u1 as ge,
    y1 as _e,
    y5 as j,
    zb as ve,
    zz as M
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as N,
    Bn as ye,
    Ht as be,
    Ln as P,
    N as xe,
    Nn as F,
    O as Se,
    Pt as Ce,
    Rn as I,
    Rt as we,
    St as Te,
    Vn as L,
    cn as R,
    jt as Ee,
    ln as z,
    lt as De,
    p as Oe,
    s as B,
    wn as ke,
    xt as V,
    zn as Ae
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Bst as je,
    IHt as Me,
    J6 as Ne,
    LHt as Pe,
    NHt as Fe,
    Nbt as H,
    OHt as Ie,
    Ojt as U,
    Pbt as Le,
    RHt as Re,
    Y6 as W,
    c as ze,
    egn as Be,
    kHt as Ve,
    kjt as He,
    s as Ue,
    tgn as We,
    zst as Ge
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    $x as Ke,
    Bv as G,
    Fx as qe,
    Gh as K,
    Hv as Je,
    Ix as Ye,
    Kh as Xe,
    Kx as Ze,
    Nx as Qe,
    Px as $e,
    Qx as et,
    Sv as q,
    Vv as tt,
    _b as nt,
    qx as rt,
    xv as it,
    yb as at,
    zv as J
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    t as ot
} from "./343cb406-d69bck6k47arlhci.js";
import {
    n as st,
    t as ct
} from "./9f7bb6d3-l9ls9y254izawjwa.js";
import {
    n as lt,
    r as ut
} from "./02df22f1-hwozk71o4lp1b1lx.js";
import {
    n as dt,
    t as ft
} from "./9302b335-mgxovmvaj6t7rcdg.js";
import {
    a as pt,
    i as mt
} from "./d8c30629-hxy6vraw9wlimdke.js";
import {
    a as ht,
    c as gt,
    i as _t,
    l as vt,
    n as yt,
    o as bt,
    s as xt,
    t as St
} from "./07c7be17-lep3pqzh63ahqu2w.js";
import {
    i as Ct,
    n as wt,
    r as Tt,
    t as Et
} from "./4f494712-nj4oyiwvx3tckmsq.js";
import {
    n as Dt,
    t as Ot
} from "./b3596021-g68qeogunvktwr6g.js";
import {
    n as kt,
    o as At
} from "./779905f4-lnxlgbttoml8sfyn.js";

function jt(e) {
    return {
        entries: e.entries.map(e => e.is_secret ? {
            isSecret: !0,
            key: e.key,
            previousKey: e.key,
            storedSecret: !0,
            value: ``
        } : {
            isSecret: !1,
            key: e.key,
            previousKey: e.key,
            value: e.value ?? ``
        })
    }
}

function Mt(e, t, n) {
    let r = new Map(e.entries.flatMap(e => e.storedSecret === !0 && e.previousKey != null ? [
        [e.previousKey, e]
    ] : []));
    if (r.size === 0) return t;
    let i = new Map(jt(n).entries.map(e => [e.key, e]));
    return {
        entries: t.entries.flatMap(e => {
            if (e.storedSecret !== !0 || e.previousKey == null) return [e];
            let t = r.get(e.previousKey);
            if (t == null) return [e];
            let n = i.get(t.key);
            return n == null ? [] : [n]
        })
    }
}

function Nt(e) {
    let t = e.entries.map(e => e.key);
    return t.some(e => e.trim().length === 0) ? `missing-key` : new Set(t).size === t.length ? e.entries.some(e => e.storedSecret === !0 && e.previousKey != null && e.value.length === 0 && (!e.isSecret || e.key !== e.previousKey)) ? `stored-secret-needs-value` : null : `duplicate-key`
}

function Pt(e, t) {
    if (Nt(t) != null) return null;
    let n = new Set(t.entries.map(e => Ft(e) ? e.previousKey : e.key));
    return {
        remove: e.entries.filter(e => !n.has(e.key)).map(e => e.key),
        set_values: t.entries.filter(t => !Ft(t) && It(e, t)).map(e => ({
            is_secret: e.isSecret,
            key: e.key,
            type: `envvar`,
            value: e.value
        }))
    }
}

function Ft(e) {
    return e.isSecret && e.storedSecret === !0 && e.previousKey != null && e.key === e.previousKey && e.value.length === 0
}

function It(e, t) {
    let n = e.entries.find(e => e.key === (t.previousKey ?? t.key));
    return n == null || n.is_secret !== t.isSecret || n.key !== t.key || n.value !== t.value
}
var Lt = e((() => {})),
    Rt, zt, Bt, Vt, Ht = e((() => {
        Rt = ke(), d(), s(), zt = ye(), z(), Bt = _(() => R(() => import(`./c0f184a5-j2op29j7kgg68i43.js`).then(e => e.ChangeSiteUrlDialogContent), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))), Vt = e => {
            "use forget";
            let t = (0, Rt.c)(2),
                n;
            return t[0] === e ? n = t[1] : (n = (0, zt.jsx)(S, {
                disableLightDismiss: e.isChanging,
                for: Bt,
                open: !0,
                withProps: e,
                onClose: e.onClose
            }), t[0] = e, t[1] = n), n
        }
    }));

function Ut(e) {
    "use forget";
    let t = (0, dn.c)(92),
        {
            accountId: n,
            defaultDomain: r,
            onSiteProjectRefresh: i,
            projectId: a
        } = e,
        o = Ae(),
        s = xe(),
        c;
    t[0] !== n || t[1] !== a ? (c = ht(n, a), t[0] = n, t[1] = a, t[2] = c) : c = t[2];
    let l = c,
        u;
    t[3] === a ? u = t[4] : (u = () => ne.safeGet(`/websites/{project_id}/custom_domains`, {
        parameters: {
            path: {
                project_id: a
            }
        }
    }), t[3] = a, t[4] = u);
    let d;
    t[5] !== l || t[6] !== u ? (d = {
        queryFn: u,
        queryKey: l,
        retry: !1
    }, t[5] = l, t[6] = u, t[7] = d) : d = t[7];
    let f = Se(d),
        p;
    t[8] === a ? p = t[9] : (p = e => ne.safePost(`/websites/{project_id}/custom_domains`, {
        parameters: {
            path: {
                project_id: a
            }
        },
        requestBody: {
            hostname: e
        }
    }), t[8] = a, t[9] = p);
    let m;
    t[10] !== s || t[11] !== l ? (m = e => {
        rn(s, l, e)
    }, t[10] = s, t[11] = l, t[12] = m) : m = t[12];
    let h;
    t[13] !== p || t[14] !== m ? (h = {
        mutationFn: p,
        onSuccess: m
    }, t[13] = p, t[14] = m, t[15] = h) : h = t[15];
    let g = Oe(h),
        _;
    t[16] !== i || t[17] !== a ? (_ = async e => {
        let t = await ne.safePost(`/websites/{project_id}/custom_domains/{custom_domain_id}/refresh`, {
            parameters: {
                path: {
                    custom_domain_id: e.id,
                    project_id: a
                }
            }
        });
        return e.status !== `active` && t.status === `active` && await i(), t
    }, t[16] = i, t[17] = a, t[18] = _) : _ = t[18];
    let v;
    t[19] !== s || t[20] !== l ? (v = e => {
        rn(s, l, e)
    }, t[19] = s, t[20] = l, t[21] = v) : v = t[21];
    let y;
    t[22] !== _ || t[23] !== v ? (y = {
        mutationFn: _,
        onSuccess: v
    }, t[22] = _, t[23] = v, t[24] = y) : y = t[24];
    let b = Oe(y),
        x;
    t[25] !== i || t[26] !== a ? (x = async e => {
        let t = await ne.safeDelete(`/websites/{project_id}/custom_domains/{custom_domain_id}`, {
            parameters: {
                path: {
                    custom_domain_id: e.id,
                    project_id: a
                }
            }
        });
        return e.status === `active` && await i(), t
    }, t[25] = i, t[26] = a, t[27] = x) : x = t[27];
    let S;
    t[28] !== s || t[29] !== l ? (S = (e, t) => {
        an(s, l, t.id)
    }, t[28] = s, t[29] = l, t[30] = S) : S = t[30];
    let C;
    t[31] !== x || t[32] !== S ? (C = {
        mutationFn: x,
        onSuccess: S
    }, t[31] = x, t[32] = S, t[33] = C) : C = t[33];
    let w = Oe(C),
        [ee, te] = (0, pn.useState)(!1),
        [T, re] = (0, pn.useState)(null),
        [ie, oe] = (0, pn.useState)(null),
        [ce, le] = (0, pn.useState)(null),
        ue = (0, pn.useRef)(null),
        E;
    t[34] === f.data?.items ? E = t[35] : (E = f.data?.items ?? [], t[34] = f.data?.items, t[35] = E);
    let D = E,
        de;
    t[36] === D ? de = t[37] : (de = D.some(Wt), t[36] = D, t[37] = de);
    let fe = de,
        pe = f.data != null && !f.isError && D.length === 0,
        me = b.isPending || w.isPending,
        he;
    t[38] === a ? he = t[39] : (he = {
        projectId: a,
        source: `custom-domains`
    }, t[38] = a, t[39] = he);
    let k = Ve(he),
        A;
    t[40] !== g || t[41] !== k ? (A = async e => {
        let t = k.startCustomDomainAdd();
        try {
            let n = await g.mutateAsync(e);
            return t.succeeded({
                customDomain: {
                    status: n.status
                }
            }), n
        } catch (e) {
            let n = e;
            throw t.failed(), n
        }
    }, t[40] = g, t[41] = k, t[42] = A) : A = t[42];
    let ge = A,
        _e;
    t[43] !== k || t[44] !== o || t[45] !== b ? (_e = async e => {
        let t = e.status,
            n = k.startCustomDomainRefresh({
                previousStatus: t
            });
        try {
            let r = await b.mutateAsync(e);
            n.succeeded({
                customDomain: {
                    previousStatus: t,
                    status: r.status
                }
            })
        } catch {
            n.failed({
                customDomain: {
                    previousStatus: t
                }
            }), se().danger(o.formatMessage(X.refreshError), {
                toastId: `sites_settings_custom_domain_refresh_error`
            })
        }
    }, t[43] = k, t[44] = o, t[45] = b, t[46] = _e) : _e = t[46];
    let j = _e,
        ve;
    t[47] !== k || t[48] !== w ? (ve = async e => {
        let t = e.status,
            n = k.startCustomDomainRemove({
                previousStatus: t
            });
        try {
            let r = await w.mutateAsync(e);
            return n.succeeded({
                customDomain: {
                    previousStatus: t,
                    status: r.status
                }
            }), r
        } catch (e) {
            let r = e;
            throw n.failed({
                customDomain: {
                    previousStatus: t
                }
            }), r
        }
    }, t[47] = k, t[48] = w, t[49] = ve) : ve = t[49];
    let M = ve,
        N;
    t[50] === f ? N = t[51] : (N = async () => {
        ue.current?.focus(), le(`pending`);
        let e = await f.refetch();
        le(e.isError ? `error` : `success`)
    }, t[50] = f, t[51] = N);
    let ye = N,
        be;
    t[52] !== r || t[53] !== fe ? (be = r == null || fe ? null : (0, Y.jsx)(qt, {
        control: (0, Y.jsx)(Gt, {
            domain: r
        }),
        description: (0, Y.jsx)(F, {
            ...X.defaultDomainDescription
        }),
        label: (0, Y.jsx)(F, {
            ...X.defaultDomainLabel
        })
    }), t[52] = r, t[53] = fe, t[54] = be) : be = t[54];
    let P;
    t[55] === o ? P = t[56] : (P = o.formatMessage(X.customDomainRowLabel), t[55] = o, t[56] = P);
    let Ce;
    t[57] === ce ? Ce = t[58] : (Ce = ce === `pending` ? (0, Y.jsx)(F, {
        ...X.loadingDescription
    }) : ce === `error` ? (0, Y.jsx)(F, {
        ...X.errorDescription
    }) : ce === `success` ? (0, Y.jsx)(F, {
        ...X.retrySuccessAnnouncement
    }) : null, t[57] = ce, t[58] = Ce);
    let I;
    t[59] === Ce ? I = t[60] : (I = (0, Y.jsx)(`span`, {
        "aria-atomic": `true`,
        "aria-live": `polite`,
        className: `sr-only`,
        role: `status`,
        children: Ce
    }), t[59] = Ce, t[60] = I);
    let we;
    t[61] !== k || t[62] !== pe || t[63] !== f.isError || t[64] !== f.isLoading || t[65] !== D || t[66] !== j || t[67] !== ye || t[68] !== me || t[69] !== b.isPending || t[70] !== b.variables?.id ? (we = f.isLoading ? (0, Y.jsx)(qt, {
        control: (0, Y.jsx)(ae, {
            className: `icon-sm`
        }),
        description: (0, Y.jsx)(F, {
            ...X.loadingDescription
        }),
        label: (0, Y.jsx)(F, {
            ...X.customDomainRowLabel
        })
    }) : f.isError ? (0, Y.jsx)(qt, {
        control: (0, Y.jsx)(O, {
            color: `secondary`,
            type: `button`,
            onClick: () => void ye(),
            children: (0, Y.jsx)(F, {
                ...X.retry
            })
        }),
        description: (0, Y.jsx)(F, {
            ...X.errorDescription
        }),
        label: (0, Y.jsx)(F, {
            ...X.customDomainRowLabel
        })
    }) : D.length === 0 ? (0, Y.jsx)(qt, {
        control: pe ? (0, Y.jsx)(O, {
            color: `secondary`,
            icon: Xe,
            type: `button`,
            onClick: () => {
                k.customDomainAddModalOpened(), te(!0)
            },
            children: (0, Y.jsx)(F, {
                ...X.add
            })
        }) : null,
        description: (0, Y.jsx)(F, {
            ...X.emptyCustomDomainDescription
        }),
        label: (0, Y.jsx)(F, {
            ...X.customDomainRowLabel
        })
    }) : D.map(e => (0, Y.jsx)(Yt, {
        customDomain: e,
        isMutationPending: me,
        isRefreshing: b.isPending && b.variables?.id === e.id,
        onRefresh: () => void j(e),
        onRemove: () => {
            k.customDomainRemoveModalOpened(), oe(e)
        },
        onSetUp: () => re(e)
    }, e.id)), t[61] = k, t[62] = pe, t[63] = f.isError, t[64] = f.isLoading, t[65] = D, t[66] = j, t[67] = ye, t[68] = me, t[69] = b.isPending, t[70] = b.variables?.id, t[71] = we) : we = t[71];
    let Te;
    t[72] !== P || t[73] !== I || t[74] !== we ? (Te = (0, Y.jsxs)(`div`, {
        "aria-label": P,
        ref: ue,
        role: `group`,
        tabIndex: -1,
        children: [I, we]
    }), t[72] = P, t[73] = I, t[74] = we, t[75] = Te) : Te = t[75];
    let L;
    t[76] !== g || t[77] !== ge || t[78] !== ee ? (L = ee ? (0, Y.jsx)($t, {
        isAdding: g.isPending,
        onAdd: ge,
        onClose: () => te(!1)
    }) : null, t[76] = g, t[77] = ge, t[78] = ee, t[79] = L) : L = t[79];
    let R;
    t[80] === T ? R = t[81] : (R = T == null ? null : (0, Y.jsx)(en, {
        customDomain: T,
        onClose: () => re(null)
    }), t[80] = T, t[81] = R);
    let Ee;
    t[82] !== ie || t[83] !== M || t[84] !== w ? (Ee = ie == null ? null : (0, Y.jsx)(nn, {
        customDomain: ie,
        isRemoving: w.isPending,
        onClose: () => oe(null),
        onRemove: () => M(ie)
    }), t[82] = ie, t[83] = M, t[84] = w, t[85] = Ee) : Ee = t[85];
    let z;
    return t[86] !== be || t[87] !== Te || t[88] !== L || t[89] !== R || t[90] !== Ee ? (z = (0, Y.jsxs)(Y.Fragment, {
        children: [be, Te, L, R, Ee]
    }), t[86] = be, t[87] = Te, t[88] = L, t[89] = R, t[90] = Ee, t[91] = z) : z = t[91], z
}

function Wt(e) {
    return e.status === `active`
}

function Gt(e) {
    "use forget";
    let t = (0, dn.c)(9),
        {
            domain: n
        } = e,
        r = Ae(),
        i, a;
    if (t[0] !== n) {
        let e = n.indexOf(`.`),
            r = e > 0 && n.endsWith(`.chatgpt.site`);
        i = r ? n.slice(e) : null, a = r ? n.slice(0, e) : n, t[0] = n, t[1] = i, t[2] = a
    } else i = t[1], a = t[2];
    let o = a,
        s;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, Y.jsx)(F, {
        ...X.defaultDomainEditingComingSoon
    }), t[3] = s) : s = t[3];
    let c;
    return t[4] !== n || t[5] !== i || t[6] !== r || t[7] !== o ? (c = (0, Y.jsx)(U, {
        content: s,
        side: `top-center`,
        children: e => (0, Y.jsxs)(`button`, {
            ...e,
            "aria-disabled": `true`,
            "aria-label": r.formatMessage(X.defaultDomainReadOnlyLabel, {
                domain: n
            }),
            className: `border-token-border-default bg-token-interactive-bg-tertiary-default dark:bg-tertiary keyboard-focused:focus-ring flex min-h-9 w-full max-w-[338px] cursor-not-allowed items-center justify-between gap-2 rounded-lg border px-2.5 py-1.5 text-sm outline-none`,
            type: `button`,
            onClick: Kt,
            children: [(0, Y.jsx)(`span`, {
                className: `text-token-text-primary min-w-0 truncate`,
                children: o
            }), i == null ? null : (0, Y.jsx)(`span`, {
                className: `text-token-text-tertiary shrink-0`,
                children: i
            })]
        })
    }), t[4] = n, t[5] = i, t[6] = r, t[7] = o, t[8] = c) : c = t[8], c
}

function Kt(e) {
    return e.preventDefault()
}

function qt(e) {
    "use forget";
    let t = (0, dn.c)(8),
        {
            control: n,
            description: r,
            label: i
        } = e,
        a;
    t[0] !== r || t[1] !== i ? (a = (0, Y.jsx)(Jt, {
        description: r,
        label: i
    }), t[0] = r, t[1] = i, t[2] = a) : a = t[2];
    let o;
    t[3] === n ? o = t[4] : (o = n == null ? null : (0, Y.jsx)(`div`, {
        className: `text-token-text-tertiary min-w-0 justify-self-stretch md:justify-self-end`,
        children: n
    }), t[3] = n, t[4] = o);
    let s;
    return t[5] !== a || t[6] !== o ? (s = (0, Y.jsx)(`div`, {
        className: `border-token-border-light min-h-[68px] border-b py-4`,
        children: (0, Y.jsxs)(`div`, {
            className: `grid grid-cols-1 items-center gap-[10px] md:grid-cols-[minmax(0,420px)_minmax(0,1fr)]`,
            children: [a, o]
        })
    }), t[5] = a, t[6] = o, t[7] = s) : s = t[7], s
}

function Jt(e) {
    "use forget";
    let t = (0, dn.c)(7),
        {
            description: n,
            label: r
        } = e,
        i;
    t[0] === r ? i = t[1] : (i = (0, Y.jsx)(`div`, {
        className: `text-token-text-primary text-sm`,
        children: r
    }), t[0] = r, t[1] = i);
    let a;
    t[2] === n ? a = t[3] : (a = n == null ? null : (0, Y.jsx)(`div`, {
        className: `text-token-text-tertiary mt-0.5 text-xs leading-4`,
        children: n
    }), t[2] = n, t[3] = a);
    let o;
    return t[4] !== i || t[5] !== a ? (o = (0, Y.jsxs)(`div`, {
        className: `min-w-0`,
        children: [i, a]
    }), t[4] = i, t[5] = a, t[6] = o) : o = t[6], o
}

function Yt(e) {
    "use forget";
    let t = (0, dn.c)(33),
        {
            customDomain: n,
            isMutationPending: r,
            isRefreshing: i,
            onRefresh: a,
            onRemove: o,
            onSetUp: s
        } = e,
        c = Ae(),
        l = n.status === `active`,
        u;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, Y.jsx)(`div`, {
        className: `text-token-text-primary min-w-0 text-sm`,
        children: (0, Y.jsx)(F, {
            ...X.customDomainRowLabel
        })
    }), t[0] = u) : u = t[0];
    let d;
    t[1] === n.hostname ? d = t[2] : (d = (0, Y.jsx)(`div`, {
        className: `text-token-text-primary max-w-60 truncate text-sm`,
        children: n.hostname
    }), t[1] = n.hostname, t[2] = d);
    let f;
    t[3] !== n.status || t[4] !== l ? (f = l ? null : (0, Y.jsxs)(`div`, {
        className: `text-token-text-tertiary flex min-w-0 items-center gap-1 text-xs`,
        children: [n.status === `pending` ? (0, Y.jsx)(J, {
            "aria-hidden": !0,
            className: `icon-xs shrink-0`
        }) : (0, Y.jsx)(M, {
            "aria-hidden": !0,
            className: `icon-xs shrink-0`
        }), (0, Y.jsx)(`span`, {
            className: `truncate`,
            children: (0, Y.jsx)(Xt, {
                status: n.status
            })
        })]
    }), t[3] = n.status, t[4] = l, t[5] = f) : f = t[5];
    let p;
    t[6] === n.last_error ? p = t[7] : (p = n.last_error == null ? null : (0, Y.jsx)(`div`, {
        className: `text-token-text-status-error max-w-80 truncate text-xs`,
        children: (0, Y.jsx)(F, {
            ...X.lastError,
            values: {
                message: n.last_error
            }
        })
    }), t[6] = n.last_error, t[7] = p);
    let m;
    t[8] !== d || t[9] !== f || t[10] !== p ? (m = (0, Y.jsxs)(`div`, {
        className: `flex min-w-0 flex-col items-end gap-0.5 text-end`,
        children: [d, f, p]
    }), t[8] = d, t[9] = f, t[10] = p, t[11] = m) : m = t[11];
    let h;
    t[12] !== n.hostname || t[13] !== c || t[14] !== l || t[15] !== r || t[16] !== i || t[17] !== a || t[18] !== s ? (h = l ? null : (0, Y.jsxs)(Y.Fragment, {
        children: [(0, Y.jsx)(O, {
            className: `size-8 rounded-lg p-0`,
            color: `ghost`,
            disabled: r,
            icon: M,
            label: c.formatMessage(X.setupAriaLabel, {
                hostname: n.hostname
            }),
            size: `small`,
            type: `button`,
            onClick: s
        }), (0, Y.jsx)(O, {
            className: `size-8 rounded-lg p-0`,
            color: `ghost`,
            disabled: r,
            icon: rt,
            label: c.formatMessage(X.refreshAriaLabel, {
                hostname: n.hostname
            }),
            loading: i,
            size: `small`,
            type: `button`,
            onClick: a
        })]
    }), t[12] = n.hostname, t[13] = c, t[14] = l, t[15] = r, t[16] = i, t[17] = a, t[18] = s, t[19] = h) : h = t[19];
    let g;
    t[20] !== n.hostname || t[21] !== c ? (g = c.formatMessage(X.removeAriaLabel, {
        hostname: n.hostname
    }), t[20] = n.hostname, t[21] = c, t[22] = g) : g = t[22];
    let _;
    t[23] !== r || t[24] !== o || t[25] !== g ? (_ = (0, Y.jsx)(O, {
        className: `size-8 rounded-lg p-0`,
        color: `ghost`,
        disabled: r,
        icon: q,
        label: g,
        size: `small`,
        type: `button`,
        onClick: o
    }), t[23] = r, t[24] = o, t[25] = g, t[26] = _) : _ = t[26];
    let v;
    t[27] !== h || t[28] !== _ ? (v = (0, Y.jsxs)(`div`, {
        className: `flex shrink-0 items-center gap-1`,
        children: [h, _]
    }), t[27] = h, t[28] = _, t[29] = v) : v = t[29];
    let y;
    return t[30] !== m || t[31] !== v ? (y = (0, Y.jsx)(`div`, {
        className: `border-token-border-light min-h-[68px] border-b py-4`,
        children: (0, Y.jsxs)(`div`, {
            className: `grid min-w-0 grid-cols-1 items-center gap-[10px] md:grid-cols-[minmax(0,420px)_minmax(0,1fr)]`,
            children: [u, (0, Y.jsxs)(`div`, {
                className: `flex min-w-0 items-center justify-between gap-3 md:justify-self-end`,
                children: [m, v]
            })]
        })
    }), t[30] = m, t[31] = v, t[32] = y) : y = t[32], y
}

function Xt(e) {
    "use forget";
    let t = (0, dn.c)(2),
        {
            status: n
        } = e;
    switch (n) {
        case `failed`: {
            let e;
            return t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Y.jsx)(F, {
                ...X.failedDnsChanges
            }), t[0] = e) : e = t[0], e
        }
        case `pending`: {
            let e;
            return t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Y.jsx)(F, {
                ...X.pendingDnsChanges
            }), t[1] = e) : e = t[1], e
        }
        default:
            return n
    }
}

function Zt(e) {
    "use forget";
    let t = (0, dn.c)(11),
        {
            records: n
        } = e,
        r = Ae();
    if (n.length === 0) return null;
    let i;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, Y.jsxs)(`colgroup`, {
        className: `max-sm:hidden`,
        children: [(0, Y.jsx)(`col`, {
            className: `w-[72px]`
        }), (0, Y.jsx)(`col`, {
            className: `w-[40%]`
        }), (0, Y.jsx)(`col`, {})]
    }), t[0] = i) : i = t[0];
    let a;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, Y.jsx)(`th`, {
        className: `px-0 py-1 text-start font-normal`,
        scope: `col`,
        children: (0, Y.jsx)(F, {
            ...X.dnsType
        })
    }), t[1] = a) : a = t[1];
    let o;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, Y.jsx)(`th`, {
        className: `px-0 py-1 text-start font-normal`,
        scope: `col`,
        children: (0, Y.jsx)(F, {
            ...X.dnsName
        })
    }), t[2] = o) : o = t[2];
    let s;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, Y.jsx)(`thead`, {
        className: `max-sm:sr-only`,
        children: (0, Y.jsxs)(`tr`, {
            className: `border-token-border-light text-token-text-tertiary h-7 border-b text-xs font-normal`,
            children: [a, o, (0, Y.jsx)(`th`, {
                className: `px-0 py-1 text-start font-normal`,
                scope: `col`,
                children: (0, Y.jsx)(F, {
                    ...X.dnsValue
                })
            })]
        })
    }), t[3] = s) : s = t[3];
    let c;
    if (t[4] !== r || t[5] !== n) {
        let e;
        t[7] === r ? e = t[8] : (e = e => (0, Y.jsxs)(`tr`, {
            className: `border-token-border-light text-token-text-primary h-7 border-b text-xs last:border-b-0 max-sm:block`,
            children: [(0, Y.jsx)(`td`, {
                className: `text-token-text-secondary px-0 py-1 max-sm:hidden`,
                children: e.type
            }), (0, Y.jsx)(`td`, {
                className: `px-0 py-1 max-sm:block`,
                children: (0, Y.jsxs)(`div`, {
                    className: `flex min-w-0 items-center justify-between gap-2`,
                    children: [(0, Y.jsx)(`span`, {
                        className: `text-token-text-tertiary me-1 hidden max-sm:inline`,
                        children: e.type
                    }), (0, Y.jsx)(`span`, {
                        className: `min-w-0 truncate`,
                        children: e.name
                    }), (0, Y.jsx)(Qt, {
                        ariaLabel: r.formatMessage(X.copyDnsHostName, {
                            name: e.name,
                            type: e.type
                        }),
                        value: e.name
                    })]
                })
            }), (0, Y.jsx)(`td`, {
                className: `px-0 py-1 max-sm:block`,
                children: (0, Y.jsxs)(`div`, {
                    className: `flex min-w-0 items-center justify-between gap-2`,
                    children: [(0, Y.jsx)(`span`, {
                        className: `min-w-0 truncate`,
                        children: e.value
                    }), (0, Y.jsx)(Qt, {
                        ariaLabel: r.formatMessage(X.copyDnsValue, {
                            name: e.name,
                            type: e.type
                        }),
                        value: e.value
                    })]
                })
            })]
        }, e.id), t[7] = r, t[8] = e), c = n.map(e), t[4] = r, t[5] = n, t[6] = c
    } else c = t[6];
    let l;
    return t[9] === c ? l = t[10] : (l = (0, Y.jsx)(`div`, {
        className: `overflow-hidden`,
        children: (0, Y.jsxs)(`table`, {
            className: `w-full table-fixed border-collapse`,
            children: [i, s, (0, Y.jsx)(`tbody`, {
                children: c
            })]
        })
    }), t[9] = c, t[10] = l), l
}

function Qt(e) {
    "use forget";
    let t = (0, dn.c)(5),
        {
            ariaLabel: n,
            value: r
        } = e,
        i;
    t[0] === r ? i = t[1] : (i = e => C(r, se(), e), t[0] = r, t[1] = i);
    let a;
    return t[2] !== n || t[3] !== i ? (a = (0, Y.jsx)(H, {
        ariaLabel: n,
        buttonText: !0,
        className: `border-token-border-light text-token-text-primary hover:bg-tertiary shrink-0 rounded-full border px-2 py-0.5 text-xs`,
        showIcon: !1,
        onCopy: i
    }), t[2] = n, t[3] = i, t[4] = a) : a = t[4], a
}

function $t(e) {
    "use forget";
    let t = (0, dn.c)(46),
        {
            isAdding: n,
            onAdd: r,
            onClose: i
        } = e,
        a = Ae(),
        [o, s] = (0, pn.useState)(``),
        [c, l] = (0, pn.useState)(null),
        u;
    t[0] === o ? u = t[1] : (u = o.trim(), t[0] = o, t[1] = u);
    let d = u,
        f = d.length === 0 || n,
        p;
    t[2] !== a || t[3] !== f || t[4] !== r || t[5] !== d ? (p = async () => {
        if (!f) try {
            let e = await r(d);
            l(e)
        } catch (e) {
            let t = un(e) ? a.formatMessage(X.publishRequiredErrorDescription) : void 0;
            se().danger(a.formatMessage(X.addError), {
                ...t == null ? {} : {
                    description: t
                },
                loggingTitle: X.addError.defaultMessage,
                toastId: `sites_settings_custom_domain_add_error`
            })
        }
    }, t[2] = a, t[3] = f, t[4] = r, t[5] = d, t[6] = p) : p = t[6];
    let m = p;
    if (c != null) {
        let e;
        return t[7] !== c || t[8] !== i ? (e = (0, Y.jsx)(en, {
            customDomain: c,
            onClose: i
        }), t[7] = c, t[8] = i, t[9] = e) : e = t[9], e
    }
    let h;
    t[10] !== n || t[11] !== i ? (h = () => {
        n || i()
    }, t[10] = n, t[11] = i, t[12] = h) : h = t[12];
    let g;
    t[13] === m ? g = t[14] : (g = () => void m(), t[13] = m, t[14] = g);
    let _;
    t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = (0, Y.jsx)(F, {
        ...X.add
    }), t[15] = _) : _ = t[15];
    let v;
    t[16] !== n || t[17] !== f || t[18] !== g ? (v = (0, Y.jsx)(O, {
        disabled: f,
        loading: n,
        type: `button`,
        onClick: g,
        children: _
    }), t[16] = n, t[17] = f, t[18] = g, t[19] = v) : v = t[19];
    let y;
    t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (y = (0, Y.jsx)(F, {
        ...X.cancel
    }), t[20] = y) : y = t[20];
    let b;
    t[21] !== n || t[22] !== i ? (b = (0, Y.jsx)(O, {
        color: `secondary`,
        disabled: n,
        type: `button`,
        onClick: i,
        children: y
    }), t[21] = n, t[22] = i, t[23] = b) : b = t[23];
    let x;
    t[24] === a ? x = t[25] : (x = a.formatMessage(X.addModalTitle), t[24] = a, t[25] = x);
    let S;
    t[26] === m ? S = t[27] : (S = e => {
        e.preventDefault(), m()
    }, t[26] = m, t[27] = S);
    let C;
    t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (C = (0, Y.jsx)(`p`, {
        className: `text-token-text-secondary text-sm`,
        children: (0, Y.jsx)(F, {
            ...X.addModalDescription
        })
    }), t[28] = C) : C = t[28];
    let w;
    t[29] === Symbol.for(`react.memo_cache_sentinel`) ? (w = (0, Y.jsx)(`label`, {
        className: `text-token-text-primary text-sm font-medium`,
        htmlFor: `site-custom-domain`,
        children: (0, Y.jsx)(F, {
            ...X.customDomainLabel
        })
    }), t[29] = w) : w = t[29];
    let ee;
    t[30] === a ? ee = t[31] : (ee = a.formatMessage(X.customDomainPlaceholder), t[30] = a, t[31] = ee);
    let te;
    t[32] === Symbol.for(`react.memo_cache_sentinel`) ? (te = e => s(e.target.value), t[32] = te) : te = t[32];
    let T;
    t[33] !== o || t[34] !== n || t[35] !== ee ? (T = (0, Y.jsxs)(`div`, {
        className: `flex flex-col gap-1.5`,
        children: [w, (0, Y.jsx)(Ge, {
            ariaLabel: !1,
            className: `w-full py-1.5`,
            disabled: n,
            inputClassName: `font-mono`,
            name: `site-custom-domain`,
            placeholder: ee,
            spellCheck: !1,
            value: o,
            onChange: te
        })]
    }), t[33] = o, t[34] = n, t[35] = ee, t[36] = T) : T = t[36];
    let ne;
    t[37] !== S || t[38] !== T ? (ne = (0, Y.jsxs)(`form`, {
        className: `flex flex-col gap-4`,
        onSubmit: S,
        children: [C, T]
    }), t[37] = S, t[38] = T, t[39] = ne) : ne = t[39];
    let re;
    return t[40] !== ne || t[41] !== h || t[42] !== v || t[43] !== b || t[44] !== x ? (re = (0, Y.jsx)(E, {
        isOpen: !0,
        onClose: h,
        primaryButton: v,
        secondaryButton: b,
        testId: `modal-add-site-custom-domain`,
        title: x,
        children: ne
    }), t[40] = ne, t[41] = h, t[42] = v, t[43] = b, t[44] = x, t[45] = re) : re = t[45], re
}

function en(e) {
    "use forget";
    let t = (0, dn.c)(24),
        {
            customDomain: n,
            onClose: r
        } = e,
        i = Ae(),
        a = Ce(),
        o, s;
    t[0] !== n || t[1] !== i ? (o = on(n), s = i.formatMessage(X.askChatGptPrompt, {
        dnsRecords: tn(o),
        hostname: n.hostname
    }), t[0] = n, t[1] = i, t[2] = o, t[3] = s) : (o = t[2], s = t[3]);
    let c = s,
        l;
    t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (l = (0, Y.jsx)(F, {
        ...X.setupComplete
    }), t[4] = l) : l = t[4];
    let u;
    t[5] === r ? u = t[6] : (u = (0, Y.jsx)(O, {
        type: `button`,
        onClick: r,
        children: l
    }), t[5] = r, t[6] = u);
    let d;
    t[7] !== n.hostname || t[8] !== i ? (d = i.formatMessage(X.setupModalTitle, {
        hostname: n.hostname
    }), t[7] = n.hostname, t[8] = i, t[9] = d) : d = t[9];
    let f;
    t[10] !== c || t[11] !== a || t[12] !== r ? (f = (0, Y.jsx)(`p`, {
        className: `text-token-text-secondary text-sm`,
        children: (0, Y.jsx)(F, {
            ...X.setupModalDescription,
            values: {
                chatgptLink: e => (0, Y.jsx)(`button`, {
                    className: `cursor-pointer border-0 bg-transparent p-0 underline decoration-dotted underline-offset-2`,
                    type: `button`,
                    onClick: () => {
                        r(), We(a, {
                            params: new URLSearchParams({
                                [k]: hn,
                                prompt: c,
                                surface: fe.TPP
                            })
                        })
                    },
                    children: e
                }, `chatgpt-link`)
            }
        })
    }), t[10] = c, t[11] = a, t[12] = r, t[13] = f) : f = t[13];
    let p;
    t[14] === o ? p = t[15] : (p = (0, Y.jsx)(Zt, {
        records: o
    }), t[14] = o, t[15] = p);
    let m;
    t[16] !== f || t[17] !== p ? (m = (0, Y.jsxs)(`div`, {
        className: `flex flex-col gap-3`,
        children: [f, p]
    }), t[16] = f, t[17] = p, t[18] = m) : m = t[18];
    let h;
    return t[19] !== r || t[20] !== u || t[21] !== d || t[22] !== m ? (h = (0, Y.jsx)(E, {
        isOpen: !0,
        onClose: r,
        primaryButton: u,
        className: `max-w-[538px]!`,
        closeButtonClassName: `h-6 w-6 rounded-md`,
        contentClassName: `pt-0`,
        headerClassName: `[&_h2]:text-sm [&_h2]:font-medium`,
        showCloseButton: !0,
        size: `large`,
        testId: `modal-complete-site-custom-domain-setup`,
        title: d,
        children: m
    }), t[19] = r, t[20] = u, t[21] = d, t[22] = m, t[23] = h) : h = t[23], h
}

function tn(e) {
    return e.map(e => [e.type, e.name, e.value].join(` `)).join(`
`)
}

function nn(e) {
    "use forget";
    let t = (0, dn.c)(28),
        {
            customDomain: n,
            isRemoving: r,
            onClose: i,
            onRemove: a
        } = e,
        o = Ae(),
        s;
    t[0] !== n.id || t[1] !== o || t[2] !== r || t[3] !== i || t[4] !== a ? (s = async () => {
        if (!r) try {
            await a(n.id), i()
        } catch {
            se().danger(o.formatMessage(X.removeError), {
                toastId: `sites_settings_custom_domain_remove_error`
            })
        }
    }, t[0] = n.id, t[1] = o, t[2] = r, t[3] = i, t[4] = a, t[5] = s) : s = t[5];
    let c = s,
        l;
    t[6] !== r || t[7] !== i ? (l = () => {
        r || i()
    }, t[6] = r, t[7] = i, t[8] = l) : l = t[8];
    let u;
    t[9] === c ? u = t[10] : (u = () => void c(), t[9] = c, t[10] = u);
    let d;
    t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, Y.jsx)(F, {
        ...X.remove
    }), t[11] = d) : d = t[11];
    let f;
    t[12] !== r || t[13] !== u ? (f = (0, Y.jsx)(O, {
        color: `danger`,
        loading: r,
        type: `button`,
        onClick: u,
        children: d
    }), t[12] = r, t[13] = u, t[14] = f) : f = t[14];
    let p;
    t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (p = (0, Y.jsx)(F, {
        ...X.cancel
    }), t[15] = p) : p = t[15];
    let m;
    t[16] !== r || t[17] !== i ? (m = (0, Y.jsx)(O, {
        color: `secondary`,
        disabled: r,
        type: `button`,
        onClick: i,
        children: p
    }), t[16] = r, t[17] = i, t[18] = m) : m = t[18];
    let h;
    t[19] !== n.hostname || t[20] !== o ? (h = o.formatMessage(X.removeModalTitle, {
        hostname: n.hostname
    }), t[19] = n.hostname, t[20] = o, t[21] = h) : h = t[21];
    let g;
    t[22] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, Y.jsx)(`p`, {
        className: `text-token-text-secondary text-sm`,
        children: (0, Y.jsx)(F, {
            ...X.removeModalDescription
        })
    }), t[22] = g) : g = t[22];
    let _;
    return t[23] !== l || t[24] !== f || t[25] !== m || t[26] !== h ? (_ = (0, Y.jsx)(E, {
        isOpen: !0,
        onClose: l,
        primaryButton: f,
        secondaryButton: m,
        testId: `modal-remove-site-custom-domain`,
        title: h,
        type: `danger`,
        children: g
    }), t[23] = l, t[24] = f, t[25] = m, t[26] = h, t[27] = _) : _ = t[27], _
}

function rn(e, t, n) {
    e.setQueryData(t, e => {
        if (e == null) return {
            items: [n]
        };
        let t = e.items.findIndex(e => e.id === n.id);
        return t === -1 ? {
            ...e,
            items: [...e.items, n]
        } : {
            ...e,
            items: e.items.map((e, r) => r === t ? n : e)
        }
    })
}

function an(e, t, n) {
    e.setQueryData(t, e => e == null ? e : {
        ...e,
        items: e.items.filter(e => e.id !== n)
    })
}

function on(e) {
    return [...sn(e), ...e.validation_records.flatMap((e, t) => {
        let n = cn(e.record_type),
            r = cn(e.name),
            i = cn(e.value);
        return n == null || r == null || i == null ? [] : [{
            id: `validation:${t}:${n}:${r}`,
            name: r,
            type: n,
            value: i
        }]
    })]
}

function sn(e) {
    return ln(e.hostname) && e.apex_proxy_ipv4_targets.length > 0 ? e.apex_proxy_ipv4_targets.map((e, t) => ({
        id: `apex:${t}:${e}`,
        name: `@`,
        type: `A`,
        value: e
    })) : e.cname_target == null ? e.apex_proxy_ipv4_targets.map((t, n) => ({
        id: `apex:${n}:${t}`,
        name: e.hostname,
        type: `A`,
        value: t
    })) : [{
        id: `cname`,
        name: e.hostname,
        type: `CNAME`,
        value: e.cname_target
    }]
}

function cn(e) {
    let t = e?.trim();
    return t == null || t.length === 0 ? null : t
}

function ln(e) {
    let t = (0, fn.parse)(e);
    return `domain` in t && t.domain != null && t.domain.toLowerCase() === e.toLowerCase()
}

function un(e) {
    return e instanceof h && e.detail?.type === `invalid_project` && ie(e) === mn
}
var dn, fn, pn, Y, mn, hn, X, gn = e((() => {
    dn = ke(), r(), Le(), je(), ce(), b(), Be(), G(), o(), K(), Ze(), it(), me(), He(), T(), he(), f(), ue(), de(), B(), fn = ot(), pn = t(L()), I(), N(), _t(), Ie(), Y = ye(), mn = `Publish the Site before adding a custom domain`, hn = `site`, X = P({
        add: {
            id: `sites.settings.custom_domains.add`,
            defaultMessage: `Add custom domain`
        },
        defaultDomainLabel: {
            id: `sites.settings.custom_domains.default_domain.label`,
            defaultMessage: `Domain`
        },
        defaultDomainDescription: {
            id: `sites.settings.custom_domains.default_domain.description`,
            defaultMessage: `URL for your site`
        },
        defaultDomainEditingComingSoon: {
            id: `sites.settings.default_domain.editing_unavailable.tooltip`,
            defaultMessage: `Editing the URL is coming soon.`
        },
        defaultDomainReadOnlyLabel: {
            id: `sites.settings.default_domain.read_only_control.aria_label`,
            defaultMessage: `{domain}, read-only Site URL`
        },
        customDomainRowLabel: {
            id: `sites.settings.custom_domains.row.label`,
            defaultMessage: `Custom domain`
        },
        emptyCustomDomainDescription: {
            id: `sites.settings.custom_domains.empty.description`,
            defaultMessage: `Add a domain you own`
        },
        loadingDescription: {
            id: `sites.settings.custom_domains.loading.description`,
            defaultMessage: `Loading custom domains`
        },
        errorDescription: {
            id: `sites.settings.custom_domains.error.description`,
            defaultMessage: `Unable to load custom domains`
        },
        retry: {
            id: `sites.settings.custom_domains.error.retry.button.label`,
            defaultMessage: `Retry`
        },
        retrySuccessAnnouncement: {
            id: `sites.settings.custom_domains.error.retry.status.success`,
            defaultMessage: `Custom domains loaded`
        },
        refreshAriaLabel: {
            id: `sites.settings.custom_domains.refresh.aria_label`,
            defaultMessage: `Refresh {hostname} status`
        },
        setupAriaLabel: {
            id: `sites.settings.custom_domains.setup.aria_label`,
            defaultMessage: `View DNS setup for {hostname}`
        },
        refreshError: {
            id: `sites.settings.custom_domains.refresh.error`,
            defaultMessage: `Unable to refresh domain status`
        },
        removeAriaLabel: {
            id: `sites.settings.custom_domains.remove.aria_label`,
            defaultMessage: `Remove {hostname}`
        },
        lastError: {
            id: `sites.settings.custom_domains.last_error`,
            defaultMessage: `Last error: {message}`
        },
        pendingDnsChanges: {
            id: `sites.settings.custom_domains.pending_dns_changes`,
            defaultMessage: `Pending DNS changes. May take 24h to reflect.`
        },
        failedDnsChanges: {
            id: `sites.settings.custom_domains.failed_dns_changes`,
            defaultMessage: `DNS setup failed`
        },
        dnsType: {
            id: `sites.settings.custom_domains.dns.type`,
            defaultMessage: `Type`
        },
        dnsName: {
            id: `sites.settings.custom_domains.dns.name`,
            defaultMessage: `Host name`
        },
        dnsValue: {
            id: `sites.settings.custom_domains.dns.value`,
            defaultMessage: `Value`
        },
        copyDnsHostName: {
            id: `sites.settings.custom_domains.dns.copy_host_name_for_record`,
            defaultMessage: `Copy {type} DNS host name for {name}`
        },
        copyDnsValue: {
            id: `sites.settings.custom_domains.dns.copy_value_for_record`,
            defaultMessage: `Copy {type} DNS value for {name}`
        },
        addModalTitle: {
            id: `sites.settings.custom_domains.add_modal.title`,
            defaultMessage: `Add custom domain`
        },
        addModalDescription: {
            id: `sites.settings.custom_domains.add_modal.description`,
            defaultMessage: `To use this feature, you need to own a domain and be able to manage its DNS records`
        },
        customDomainLabel: {
            id: `sites.settings.custom_domains.add_modal.input_label`,
            defaultMessage: `Custom domain`
        },
        customDomainPlaceholder: {
            id: `sites.settings.custom_domains.add_modal.placeholder`,
            defaultMessage: `www.example.com`
        },
        addError: {
            id: `sites.settings.custom_domains.add_modal.error`,
            defaultMessage: `Unable to add domain`
        },
        publishRequiredErrorDescription: {
            id: `sites.settings.custom_domains.add_modal.error.publish_required_description`,
            defaultMessage: `Publish this site before adding a custom domain`
        },
        setupModalTitle: {
            id: `sites.settings.custom_domains.setup_modal.title`,
            defaultMessage: `Complete setup for {hostname}`
        },
        setupModalDescription: {
            id: `sites.settings.custom_domains.setup_modal.description`,
            defaultMessage: `Complete your custom domain by copying these values and paste them into the DNS settings at your domain provider. You can also <chatgptLink>ask ChatGPT</chatgptLink> to do it.`
        },
        askChatGptPrompt: {
            id: `sites.settings.custom_domains.setup_modal.ask_chatgpt_prompt.manual_fallback`,
            defaultMessage: `@Sites help me register {hostname} as the custom domain for my site by adding these DNS records at my domain provider. If available, use the in-app browser to make any changes needed (prompt me to log in if needed). If the in-app browser is not available, provide the most detailed instructions you can for me to do it manually {dnsRecords}`
        },
        setupComplete: {
            id: `sites.settings.custom_domains.setup_modal.complete`,
            defaultMessage: `I have added the records at my provider`
        },
        removeModalTitle: {
            id: `sites.settings.custom_domains.remove_modal.title`,
            defaultMessage: `Remove {hostname}?`
        },
        removeModalDescription: {
            id: `sites.settings.custom_domains.remove_modal.description`,
            defaultMessage: `Visitors will no longer be able to use this domain for the site`
        },
        remove: {
            id: `sites.settings.custom_domains.remove_modal.submit`,
            defaultMessage: `Remove`
        },
        removeError: {
            id: `sites.settings.custom_domains.remove_modal.error`,
            defaultMessage: `Unable to remove domain`
        },
        cancel: {
            id: `sites.settings.custom_domains.modal.cancel`,
            defaultMessage: `Cancel`
        }
    })
}));

function _n(e) {
    let t = e.getAll($n);
    if (t.length !== 1) return null;
    let n = t[0]?.trim();
    return n && n.length <= 4096 ? n : null
}

function vn(e) {
    if (typeof e != `object` || !e) return null;
    let t = Reflect.get(e, $n);
    if (typeof t != `string`) return null;
    let n = t.trim();
    return n && n.length <= 4096 ? n : null
}

function yn() {
    "use forget";
    let e = (0, Kn.c)(2);
    if (!p()) {
        let t;
        return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Q.jsx)(De, {
            replace: !0,
            to: `/`
        }), e[0] = t) : t = e[0], t
    }
    let t;
    return e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Q.jsx)(ct, {
        children: (0, Q.jsx)(ft, {
            children: (0, Q.jsx)(xn, {})
        })
    }), e[1] = t) : t = e[1], t
}

function bn() {
    "use forget";
    let e = (0, Kn.c)(7),
        t = Ae(),
        n;
    e[0] === t ? n = e[1] : (n = t.formatMessage($.metaTitle), e[0] = t, e[1] = n);
    let r = n,
        i;
    e[2] === r ? i = e[3] : (i = (0, Q.jsx)(`head`, {
        children: (0, Q.jsx)(`title`, {
            children: r
        })
    }), e[2] = r, e[3] = i);
    let a;
    e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, Q.jsx)(yn, {}), e[4] = a) : a = e[4];
    let o;
    return e[5] === i ? o = e[6] : (o = (0, Q.jsxs)(Q.Fragment, {
        children: [i, a]
    }), e[5] = i, e[6] = o), o
}

function xn() {
    "use forget";
    let e = (0, Kn.c)(131),
        {
            projectId: t
        } = we(),
        n = Ee(),
        [r, i] = be(),
        a;
    e[0] === r ? a = e[1] : (a = _n(r), e[0] = r, e[1] = a);
    let o = a,
        s;
    e[2] !== n.state || e[3] !== o ? (s = o ?? vn(n.state), e[2] = n.state, e[3] = o, e[4] = s) : s = e[4];
    let c = s,
        l = v(),
        u;
    e[5] === Symbol.for(`react.memo_cache_sentinel`) ? (u = p(), e[5] = u) : u = e[5];
    let d = u,
        f = le(En),
        m = t != null && d && f,
        h;
    e[6] === m ? h = e[7] : (h = {
        enabled: m
    }, e[6] = m, e[7] = h);
    let g = Re(h),
        _ = m && g.data?.enabled === !0,
        y = Pe(),
        b = xe(),
        x = Ae(),
        [S, C] = (0, Z.useState)(`idle`),
        [ee, te] = (0, Z.useState)(0),
        [T, re] = (0, Z.useState)(null),
        [ie, ae] = (0, Z.useState)(null),
        [oe, ce] = (0, Z.useState)(!1),
        ue = (0, Z.useRef)(null),
        E;
    e[8] !== c || e[9] !== f || e[10] !== t || e[11] !== r ? (E = t != null && c != null && !r.has(`account_id`) && d && f, e[8] = c, e[9] = f, e[10] = t, e[11] = r, e[12] = E) : E = e[12];
    let D = E,
        de;
    e[13] !== c || e[14] !== t ? (de = () => yt(t ?? ``, c ?? ``), e[13] = c, e[14] = t, e[15] = de) : de = e[15];
    let fe;
    e[16] !== c || e[17] !== y || e[18] !== t ? (fe = [`appgen`, `site-access-request-review`, y, t, c], e[16] = c, e[17] = y, e[18] = t, e[19] = fe) : fe = e[19];
    let pe;
    e[20] !== D || e[21] !== de || e[22] !== fe ? (pe = {
        enabled: D,
        gcTime: 0,
        queryFn: de,
        queryKey: fe,
        retry: !1
    }, e[20] = D, e[21] = de, e[22] = fe, e[23] = pe) : pe = e[23];
    let me = Se(pe),
        he;
    e[24] === x ? he = e[25] : (he = e => {
        se().danger(x.formatMessage($.accessRequestApproveError), {
            error: e,
            toastId: `sites_access_request_approve_error`
        })
    }, e[24] = x, e[25] = he);
    let k;
    e[26] !== y || e[27] !== x || e[28] !== t || e[29] !== b ? (k = async (e, n) => {
        let {
            token: r
        } = n;
        ae(r), t != null && (await b.invalidateQueries({
            exact: !0,
            queryKey: W(t),
            refetchType: `all`
        }), ce(!0), se().success(x.formatMessage($.accessRequestApprovedToast, {
            requesterName: e.requester_name
        })), b.invalidateQueries({
            exact: !0,
            queryKey: xt(y, t)
        }), b.invalidateQueries({
            queryKey: qn
        }))
    }, e[26] = y, e[27] = x, e[28] = t, e[29] = b, e[30] = k) : k = e[30];
    let A;
    e[31] !== he || e[32] !== k ? (A = {
        mutationFn: Tn,
        onError: he,
        onSuccess: k
    }, e[31] = he, e[32] = k, e[33] = A) : A = e[33];
    let ge = Oe(A),
        _e = t != null && _,
        j;
    e[34] === t ? j = e[35] : (j = () => ne.safeGet(`/websites/{project_id}`, {
        parameters: {
            path: {
                project_id: t ?? ``
            }
        }
    }), e[34] = t, e[35] = j);
    let ve = t ?? ``,
        M;
    e[36] !== y || e[37] !== ve ? (M = xt(y, ve), e[36] = y, e[37] = ve, e[38] = M) : M = e[38];
    let N;
    e[39] === T ? N = e[40] : (N = e => T != null && e.state.data?.slug !== T && 1e3, e[39] = T, e[40] = N);
    let ye;
    e[41] !== _e || e[42] !== j || e[43] !== M || e[44] !== N ? (ye = {
        enabled: _e,
        queryFn: j,
        queryKey: M,
        refetchInterval: N,
        refetchOnMount: !0,
        retry: !1,
        retryOnMount: !0,
        staleTime: mt
    }, e[41] = _e, e[42] = j, e[43] = M, e[44] = N, e[45] = ye) : ye = e[45];
    let P = Se(ye),
        Ce = t != null && _,
        I;
    e[46] === t ? I = e[47] : (I = () => ne.safeGet(`/websites/{project_id}/environment`, {
        parameters: {
            path: {
                project_id: t ?? ``
            }
        }
    }), e[46] = t, e[47] = I);
    let Te = t ?? ``,
        L;
    e[48] !== y || e[49] !== Te ? (L = bt(y, Te), e[48] = y, e[49] = Te, e[50] = L) : L = e[50];
    let R;
    e[51] !== Ce || e[52] !== I || e[53] !== L ? (R = {
        enabled: Ce,
        queryFn: I,
        queryKey: L,
        retry: !1
    }, e[51] = Ce, e[52] = I, e[53] = L, e[54] = R) : R = e[54];
    let z = Se(R),
        B = l.isLoading || g.isLoading || P.isLoading || z.isLoading,
        ke = P.data?.title,
        V;
    e[55] !== x || e[56] !== B || e[57] !== ke ? (V = B ? void 0 : ke?.trim() ? ke : x.formatMessage($.pageTitle), e[55] = x, e[56] = B, e[57] = ke, e[58] = V) : V = e[58];
    let je = V,
        Me = B ? `\xA0` : void 0,
        Ne;
    e[59] !== t || e[60] !== P.data ? (Ne = {
        project: P.data,
        projectId: t,
        source: `settings`
    }, e[59] = t, e[60] = P.data, e[61] = Ne) : Ne = e[61];
    let H = Ve(Ne),
        Ie, U;
    e[62] !== n.state || e[63] !== r || e[64] !== i || e[65] !== o ? (Ie = () => {
        if (!r.has($n) || r.has(`account_id`) && o != null) return;
        let e = new URLSearchParams(r);
        e.delete($n), e.delete(`account_id`), i(e, {
            replace: !0,
            state: {
                ...n.state != null && typeof n.state == `object` ? n.state : {},
                [$n]: o
            }
        })
    }, U = [n.state, r, i, o], e[62] = n.state, e[63] = r, e[64] = i, e[65] = o, e[66] = Ie, e[67] = U) : (Ie = e[66], U = e[67]), (0, Z.useEffect)(Ie, U);
    let Le, ze;
    e[68] !== me.isError || e[69] !== c || e[70] !== x ? (Le = () => {
        !me.isError || c == null || ue.current === c || (ue.current = c, se().danger(x.formatMessage($.accessRequestUnavailable), {
            toastId: `sites_access_request_unavailable`
        }))
    }, ze = [me.isError, c, x], e[68] = me.isError, e[69] = c, e[70] = x, e[71] = Le, e[72] = ze) : (Le = e[71], ze = e[72]), (0, Z.useEffect)(Le, ze);
    let Be, He;
    e[73] === S ? (Be = e[74], He = e[75]) : (Be = () => {
        if (S !== `saved`) return;
        let e = window.setTimeout(() => C(`idle`), Zn);
        return () => window.clearTimeout(e)
    }, He = [S], e[73] = S, e[74] = Be, e[75] = He), (0, Z.useEffect)(Be, He);
    let Ue = g.data?.custom_domains_enabled === !0,
        We = P.isError || z.isError || P.data == null || z.data == null,
        Ge = P.isLoading || z.isLoading,
        Ke;
    e[76] !== y || e[77] !== _ || e[78] !== t || e[79] !== P.data || e[80] !== Ue || e[81] !== We || e[82] !== Ge ? (Ke = {
        accountId: y,
        canLoadSiteSettings: _,
        customDomainsEnabled: Ue,
        isError: We,
        isLoading: Ge,
        project: P.data,
        projectId: t
    }, e[76] = y, e[77] = _, e[78] = t, e[79] = P.data, e[80] = Ue, e[81] = We, e[82] = Ge, e[83] = Ke) : Ke = e[83], Fe(Ke);
    let G, qe;
    if (e[84] !== je || e[85] !== Me ? (G = () => (ut.set({
            onUpload: wn,
            title: je,
            titlePlaceholder: Me,
            uploadDisabled: !0,
            showUploadButton: !1
        }), Cn), qe = [je, Me], e[84] = je, e[85] = Me, e[86] = G, e[87] = qe) : (G = e[86], qe = e[87]), (0, Z.useEffect)(G, qe), t == null) {
        let t;
        return e[88] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Q.jsx)(De, {
            replace: !0,
            to: `/sites`
        }), e[88] = t) : t = e[88], t
    }
    if (!d || !l.isLoading && !f) {
        let t;
        return e[89] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Q.jsx)(De, {
            replace: !0,
            to: `/`
        }), e[89] = t) : t = e[89], t
    }
    if (m && (g.isError || !g.isLoading && !_)) {
        let t;
        return e[90] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Q.jsx)(De, {
            replace: !0,
            to: `/sites`
        }), e[90] = t) : t = e[90], t
    }
    let K = P.data,
        Je = z.data,
        Ye = P.isError || z.isError || !B && (K == null || Je == null),
        Xe = `/sites/${encodeURIComponent(t)}/settings`,
        Ze = `/sites/${encodeURIComponent(t)}/analytics`,
        Qe = me.data,
        $e = c != null && ie === c,
        et;
    e[91] === Symbol.for(`react.memo_cache_sentinel`) ? (et = w(), e[91] = et) : et = e[91];
    let q;
    e[92] !== H || e[93] !== B || e[94] !== K ? (q = B ? (0, Q.jsx)(`div`, {
        "aria-hidden": `true`,
        className: `skeleton-child h-9 w-[136px] rounded-full`
    }) : K?.live_url == null ? null : (0, Q.jsx)(Tt, {
        site: K,
        onEdit: () => H.editWithChatClicked(),
        onVisit: () => H.siteOpened()
    }), e[92] = H, e[93] = B, e[94] = K, e[95] = q) : q = e[95];
    let tt;
    e[96] !== x || e[97] !== K ? (tt = K == null ? {
        title: x.formatMessage($.pageTitle)
    } : {
        displayUrl: An(K.live_url),
        screenshotUrl: K.screenshot_url,
        slug: K.slug,
        title: K.title.trim() ? K.title : x.formatMessage($.pageTitle)
    }, e[96] = x, e[97] = K, e[98] = tt) : tt = e[98];
    let nt;
    e[99] !== S || e[100] !== K ? (nt = K == null ? null : (0, Q.jsx)(tr, {
        status: S,
        onRetry: () => te(Sn)
    }), e[99] = S, e[100] = K, e[101] = nt) : nt = e[101];
    let rt;
    e[102] !== oe || e[103] !== y || e[104] !== H || e[105] !== ee || e[106] !== Je || e[107] !== z || e[108] !== Ye || e[109] !== B || e[110] !== T || e[111] !== K || e[112] !== P || e[113] !== g.data?.custom_domains_enabled || e[114] !== g.data?.slug_change_enabled ? (rt = B ? (0, Q.jsx)(On, {}) : Ye || K == null || Je == null ? (0, Q.jsxs)(`div`, {
        className: `flex min-h-64 flex-col items-center justify-center gap-3 text-center`,
        children: [(0, Q.jsx)(`p`, {
            className: `text-token-text-primary text-base font-medium`,
            children: (0, Q.jsx)(F, {
                ...$.loadErrorTitle
            })
        }), (0, Q.jsx)(`p`, {
            className: `text-token-text-secondary max-w-sm text-sm`,
            children: (0, Q.jsx)(F, {
                ...$.loadErrorDescription
            })
        }), (0, Q.jsx)(O, {
            color: `secondary`,
            onClick: () => {
                H.loadRetried(`site-settings`), Promise.all([P.refetch(), z.refetch()])
            },
            children: (0, Q.jsx)(F, {
                ...$.retry
            })
        })]
    }) : (0, Q.jsx)(Mn, {
        accountId: y,
        customDomainsEnabled: g.data?.custom_domains_enabled === !0,
        environment: Je,
        onAutosaveStatusChange: C,
        onPendingSlugChange: re,
        onShareModalOpenChange: ce,
        pendingSlug: T,
        retryAutosaveRequestId: ee,
        shareModalOpen: oe,
        site: K,
        slugChangeEnabled: g.data?.slug_change_enabled === !0
    }, K.id), e[102] = oe, e[103] = y, e[104] = H, e[105] = ee, e[106] = Je, e[107] = z, e[108] = Ye, e[109] = B, e[110] = T, e[111] = K, e[112] = P, e[113] = g.data?.custom_domains_enabled, e[114] = g.data?.slug_change_enabled, e[115] = rt) : rt = e[115];
    let it;
    e[116] !== ge || e[117] !== Qe || e[118] !== c || e[119] !== $e || e[120] !== t ? (it = !$e && Qe != null && c != null && t != null ? (0, Q.jsx)(Dn, {
        accessRequest: Qe,
        isApproving: ge.isPending,
        onApprove: () => ge.mutate({
            projectId: t,
            token: c
        }),
        onClose: () => ae(c)
    }) : null, e[116] = ge, e[117] = Qe, e[118] = c, e[119] = $e, e[120] = t, e[121] = it) : it = e[121];
    let at;
    return e[122] !== Ze || e[123] !== B || e[124] !== Xe || e[125] !== q || e[126] !== tt || e[127] !== nt || e[128] !== rt || e[129] !== it ? (at = (0, Q.jsxs)(Et, {
        analyticsEnabled: et,
        analyticsTo: Ze,
        backTo: `/sites`,
        headerAction: q,
        isLoading: B,
        selectedTab: `settings`,
        settingsTo: Xe,
        site: tt,
        titleSuffix: nt,
        children: [rt, it]
    }), e[122] = Ze, e[123] = B, e[124] = Xe, e[125] = q, e[126] = tt, e[127] = nt, e[128] = rt, e[129] = it, e[130] = at) : at = e[130], at
}

function Sn(e) {
    return e + 1
}

function Cn() {
    ut.set(null)
}

function wn() {}

function Tn(e) {
    let {
        projectId: t,
        token: n
    } = e;
    return St(t, n)
}

function En() {
    return u()
}

function Dn(e) {
    "use forget";
    let t = (0, Kn.c)(36),
        {
            accessRequest: n,
            isApproving: r,
            onApprove: i,
            onClose: a
        } = e,
        o = Ae(),
        s, c, l, u, d, f, p, m;
    if (t[0] !== n.project_title || t[1] !== n.requester_name || t[2] !== o || t[3] !== r || t[4] !== i || t[5] !== a) {
        let e = n.requester_name.trim(),
            h;
        t[14] === n.project_title ? h = t[15] : (h = n.project_title.trim(), t[14] = n.project_title, t[15] = h), c = h, s = E, l = !0, u = a;
        let g;
        t[16] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, Q.jsx)(F, {
            ...$.accessRequestAllow
        }), t[16] = g) : g = t[16], t[17] !== r || t[18] !== i ? (d = (0, Q.jsx)(O, {
            loading: r,
            onClick: i,
            children: g
        }), t[17] = r, t[18] = i, t[19] = d) : d = t[19];
        let _;
        t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = (0, Q.jsx)(F, {
            ...$.accessRequestNotNow
        }), t[20] = _) : _ = t[20], t[21] !== r || t[22] !== a ? (f = (0, Q.jsx)(O, {
            color: `secondary`,
            disabled: r,
            onClick: a,
            children: _
        }), t[21] = r, t[22] = a, t[23] = f) : f = t[23], p = `modal-sites-access-request-review`, m = o.formatMessage($.accessRequestPendingTitle, {
            requesterName: e
        }), t[0] = n.project_title, t[1] = n.requester_name, t[2] = o, t[3] = r, t[4] = i, t[5] = a, t[6] = s, t[7] = c, t[8] = l, t[9] = u, t[10] = d, t[11] = f, t[12] = p, t[13] = m
    } else s = t[6], c = t[7], l = t[8], u = t[9], d = t[10], f = t[11], p = t[12], m = t[13];
    let h;
    t[24] !== n.requester_email || t[25] !== c ? (h = (0, Q.jsx)(`p`, {
        className: `text-token-text-secondary text-sm`,
        children: (0, Q.jsx)(F, {
            ...$.accessRequestPendingDescription,
            values: {
                projectTitle: c,
                requesterEmail: n.requester_email
            }
        })
    }), t[24] = n.requester_email, t[25] = c, t[26] = h) : h = t[26];
    let g;
    return t[27] !== s || t[28] !== l || t[29] !== u || t[30] !== d || t[31] !== f || t[32] !== p || t[33] !== m || t[34] !== h ? (g = (0, Q.jsx)(s, {
        isOpen: l,
        onClose: u,
        primaryButton: d,
        secondaryButton: f,
        testId: p,
        title: m,
        children: h
    }), t[27] = s, t[28] = l, t[29] = u, t[30] = d, t[31] = f, t[32] = p, t[33] = m, t[34] = h, t[35] = g) : g = t[35], g
}

function On() {
    "use forget";
    let e = (0, Kn.c)(6),
        t;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Q.jsx)(`span`, {
        className: `sr-only`,
        children: (0, Q.jsx)(F, {
            ...$.loading
        })
    }), e[0] = t) : t = e[0];
    let n;
    e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, Q.jsx)(`div`, {
        className: `skeleton-child h-3.5 w-16 rounded-md`
    }), e[1] = n) : n = e[1];
    let r;
    e[2] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, Q.jsxs)(`div`, {
        className: `flex flex-col gap-4`,
        children: [n, (0, Q.jsxs)(`div`, {
            className: `border-token-border-light border-t`,
            children: [(0, Q.jsx)(kn, {
                controlWidth: `w-full max-w-[338px]`
            }), (0, Q.jsx)(kn, {
                controlWidth: `w-40`
            })]
        })]
    }), e[2] = r) : r = e[2];
    let i;
    e[3] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, Q.jsx)(`div`, {
        className: `border-token-border-light flex flex-col gap-4 border-b pb-4`,
        children: (0, Q.jsxs)(`div`, {
            className: `flex items-center justify-between gap-4`,
            children: [(0, Q.jsxs)(`div`, {
                children: [(0, Q.jsx)(`div`, {
                    className: `skeleton-child h-3.5 w-32 rounded-md`
                }), (0, Q.jsx)(`div`, {
                    className: `skeleton-child mt-2 h-3 w-72 max-w-[70vw] rounded-md`
                })]
            }), (0, Q.jsx)(`div`, {
                className: `skeleton-child h-8 w-28 shrink-0 rounded-full`
            })]
        })
    }), e[3] = i) : i = e[3];
    let a;
    e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, Q.jsx)(`div`, {
        className: `skeleton-child h-3.5 w-20 rounded-md`
    }), e[4] = a) : a = e[4];
    let o;
    return e[5] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, Q.jsxs)(`section`, {
        "aria-busy": `true`,
        className: `group skeleton flex flex-col gap-12 [--skeleton-opacity:0.75]`,
        "data-testid": `sites-settings-loading-skeleton`,
        role: `status`,
        children: [t, r, i, (0, Q.jsxs)(`div`, {
            className: `flex flex-col gap-4`,
            children: [a, (0, Q.jsx)(`div`, {
                className: `border-token-border-light border-t`,
                children: (0, Q.jsx)(kn, {
                    controlWidth: `w-24`,
                    showBottomBorder: !1
                })
            })]
        })]
    }), e[5] = o) : o = e[5], o
}

function kn(e) {
    "use forget";
    let t = (0, Kn.c)(10),
        {
            controlWidth: n,
            showBottomBorder: r
        } = e,
        i = (r === void 0 || r) && `border-token-border-light border-b`,
        a;
    t[0] === i ? a = t[1] : (a = j(`grid min-h-[68px] grid-cols-1 items-center gap-[10px] py-4 md:grid-cols-[minmax(0,420px)_minmax(0,1fr)]`, i), t[0] = i, t[1] = a);
    let o;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, Q.jsxs)(`div`, {
        className: `min-w-0`,
        children: [(0, Q.jsx)(`div`, {
            className: `skeleton-child h-3.5 w-24 rounded-md`
        }), (0, Q.jsx)(`div`, {
            className: `skeleton-child mt-2 h-3 w-48 max-w-[80%] rounded-md`
        })]
    }), t[2] = o) : o = t[2];
    let s;
    t[3] === n ? s = t[4] : (s = j(`skeleton-child h-8 max-w-full justify-self-stretch rounded-lg md:justify-self-end`, n), t[3] = n, t[4] = s);
    let c;
    t[5] === s ? c = t[6] : (c = (0, Q.jsx)(`div`, {
        className: s
    }), t[5] = s, t[6] = c);
    let l;
    return t[7] !== a || t[8] !== c ? (l = (0, Q.jsxs)(`div`, {
        className: a,
        children: [o, c]
    }), t[7] = a, t[8] = c, t[9] = l) : l = t[9], l
}

function An(e) {
    if (e == null) return null;
    try {
        return new URL(e).host
    } catch {
        return e
    }
}

function jn(e) {
    let t = e.indexOf(`.`),
        n = [`.appgarden.ai`, `.appgardenapps.dev`, `.chatgpt.app`, `.chatgpt.site`, `.chatgpt-team.site`].some(t => e.endsWith(t));
    return t > 0 && n ? e.slice(t) : null
}

function Mn(e) {
    "use forget";
    let t = (0, Kn.c)(197),
        {
            accountId: n,
            customDomainsEnabled: r,
            environment: i,
            onAutosaveStatusChange: a,
            onPendingSlugChange: o,
            onShareModalOpenChange: s,
            pendingSlug: c,
            retryAutosaveRequestId: l,
            shareModalOpen: u,
            site: d,
            slugChangeEnabled: f
        } = e,
        p = Ae(),
        m = Ce(),
        g = xe(),
        [_, v] = (0, Z.useState)(d.title),
        y = (0, Z.useRef)(d.title),
        b = (0, Z.useRef)(d.title),
        [x, S] = (0, Z.useState)(d.title),
        C = (0, Z.useRef)(0),
        w = (0, Z.useRef)(!1),
        ee = (0, Z.useRef)(null),
        te = (0, Z.useRef)(null),
        T = (0, Z.useRef)(null),
        re = (0, Z.useRef)(!1),
        [ie, ae] = (0, Z.useState)(`idle`),
        [oe, ce] = (0, Z.useState)(!1),
        [le, ue] = (0, Z.useState)(!1),
        E;
    t[0] === i ? E = t[1] : (E = () => jt(i), t[0] = i, t[1] = E);
    let [D, de] = (0, Z.useState)(E), fe = (0, Z.useRef)(D), pe = (0, Z.useRef)(i), [me, he] = (0, Z.useState)(i), k = (0, Z.useRef)(0), A = (0, Z.useRef)(!1), ge = (0, Z.useRef)(null), _e = (0, Z.useRef)(null), [ve, M] = (0, Z.useState)(`idle`), [N, ye] = (0, Z.useState)(!1), [be, P] = (0, Z.useState)(!1), [Se, I] = (0, Z.useState)(!1), [we, Te] = (0, Z.useState)(!1), L = u ?? we, R = s ?? Te, [Ee, z] = (0, Z.useState)(!1), De;
    t[2] === D ? De = t[3] : (De = Nt(D), t[2] = D, t[3] = De);
    let B = De,
        ke;
    t[4] === _ ? ke = t[5] : (ke = _.trim(), t[4] = _, t[5] = ke);
    let V = ke.length === 0,
        je;
    t[6] !== D || t[7] !== me ? (je = Pt(me, D), t[6] = D, t[7] = me, t[8] = je) : je = t[8];
    let Me = je,
        Ne = B != null || Me != null && (Me.remove.length > 0 || Me.set_values.length > 0),
        Pe;
    t[9] === _ ? Pe = t[10] : (Pe = _.trim(), t[9] = _, t[10] = Pe);
    let Fe = Pe !== x,
        H = c != null && c !== d.slug,
        Ie = c != null && c === d.slug,
        U = oe || N || le || H,
        Le = ie === `error` || ve === `error`,
        Re = !Fe && !Ne && (ie === `saved` || ve === `saved` || Ie),
        W = d.live_url,
        ze;
    t[11] === W ? ze = t[12] : (ze = An(W) ?? W, t[11] = W, t[12] = ze);
    let Be = ze,
        He, Ue;
    t[13] !== d.hosted_url || t[14] !== W ? (He = An(d.hosted_url ?? W), Ue = He == null ? null : jn(He), t[13] = d.hosted_url, t[14] = W, t[15] = He, t[16] = Ue) : (He = t[15], Ue = t[16]);
    let We = Ue,
        Ke;
    t[17] === d.id ? Ke = t[18] : (Ke = {
        mutationFn: async () => {
            await ne.safeDelete(`/websites/{project_id}`, {
                parameters: {
                    path: {
                        project_id: d.id
                    }
                }
            })
        }
    }, t[17] = d.id, t[18] = Ke);
    let G = Oe(Ke),
        qe;
    t[19] === d ? qe = t[20] : (qe = {
        project: d,
        source: `settings`
    }, t[19] = d, t[20] = qe);
    let K = Ve(qe),
        Je, Ye;
    t[21] !== Le || t[22] !== Re || t[23] !== U || t[24] !== a ? (Je = () => {
        a(U ? `saving` : Le ? `error` : Re ? `saved` : `idle`)
    }, Ye = [Le, Re, U, a], t[21] = Le, t[22] = Re, t[23] = U, t[24] = a, t[25] = Je, t[26] = Ye) : (Je = t[25], Ye = t[26]), (0, Z.useEffect)(Je, Ye);
    let Xe;
    t[27] !== p || t[28] !== o ? (Xe = () => {
        o(null), se().danger(p.formatMessage($.slugSaveTimeout), {
            toastId: `sites_settings_slug_save_timeout`
        })
    }, t[27] = p, t[28] = o, t[29] = Xe) : Xe = t[29];
    let Ze = (0, Z.useEffectEvent)(Xe),
        Qe;
    t[30] !== Ze || t[31] !== H ? (Qe = () => {
        if (!H) return;
        let e = window.setTimeout(Ze, Qn);
        return () => window.clearTimeout(e)
    }, t[30] = Ze, t[31] = H, t[32] = Qe) : Qe = t[32];
    let $e;
    t[33] === H ? $e = t[34] : ($e = [H], t[33] = H, t[34] = $e), (0, Z.useEffect)(Qe, $e);
    let et;
    if (t[35] !== n || t[36] !== K || t[37] !== p || t[38] !== g || t[39] !== d.id) {
        let e = () => {
            if (te.current != null) return;
            let t = (async () => {
                for (; w.current;) {
                    w.current = !1;
                    let e = ee.current;
                    if (e == null || e.title.length === 0 || e.title === b.current) {
                        e?.generation === C.current && ae(`saved`);
                        continue
                    }
                    let t = K.startSettingsSave({
                        environmentVariableSetCount: 0,
                        removedEntryCount: 0,
                        secretSetCount: 0,
                        titleChanged: !0
                    });
                    ce(!0), ae(`saving`);
                    try {
                        await g.cancelQueries({
                            exact: !0,
                            queryKey: xt(n, d.id)
                        });
                        let r = await ne.safePost(`/websites/{project_id}/metadata`, {
                            parameters: {
                                path: {
                                    project_id: d.id
                                }
                            },
                            requestBody: {
                                title: e.title
                            }
                        });
                        await g.cancelQueries({
                            exact: !0,
                            queryKey: xt(n, d.id)
                        }), b.current = r.title, S(r.title), e.generation === C.current && (y.current = r.title, v(r.title)), g.setQueryData(xt(n, d.id), e => e == null ? r : {
                            ...e,
                            title: r.title,
                            updated_at: r.updated_at
                        }), g.invalidateQueries({
                            queryKey: qn
                        }), t.succeeded(), ae(e.generation === C.current ? `saved` : `idle`)
                    } catch {
                        if (w.current = !1, t.failed(), y.current.trim() === b.current) {
                            ae(`saved`);
                            return
                        }
                        ae(`error`), se().danger(p.formatMessage($.saveError), {
                            toastId: `sites_settings_save_error`
                        });
                        return
                    }
                }
            })().finally(() => {
                ce(!1), te.current === t && (te.current = null), w.current && e()
            });
            te.current = t
        };
        et = () => {
            T.current != null && (window.clearTimeout(T.current), T.current = null);
            let t = y.current.trim();
            if (t.length !== 0) {
                if (t === b.current && te.current == null && !w.current) {
                    y.current = t, v(t), ae(`saved`);
                    return
                }
                ee.current = {
                    generation: C.current,
                    title: t
                }, w.current = !0, e()
            }
        }, t[35] = n, t[36] = K, t[37] = p, t[38] = g, t[39] = d.id, t[40] = et
    } else et = t[40];
    let q = et,
        tt;
    t[41] === q ? tt = t[42] : (tt = e => {
        y.current = e, C.current += 1, v(e);
        let t = e.trim(),
            n = t.length > 0 && (t !== b.current || te.current != null || w.current);
        ae(e => e === `error` && n ? e : `idle`), T.current != null && window.clearTimeout(T.current), n ? T.current = window.setTimeout(q, Xn) : T.current = null
    }, t[41] = q, t[42] = tt);
    let nt = tt,
        rt;
    t[43] !== n || t[44] !== p || t[45] !== H || t[46] !== le || t[47] !== o || t[48] !== g || t[49] !== d.id || t[50] !== d.slug || t[51] !== f ? (rt = async e => {
        if (!f || le || H || e === d.slug) return !1;
        ue(!0);
        try {
            let {
                project: t,
                slugChange: r
            } = await vt(d.id, e);
            return o(r.requested_slug), r.status === `complete` ? g.setQueryData(xt(n, d.id), e => e == null ? t : {
                ...e,
                hosted_url: t.hosted_url,
                live_url: t.live_url,
                slug: t.slug
            }) : g.invalidateQueries({
                exact: !0,
                queryKey: xt(n, d.id)
            }), g.invalidateQueries({
                queryKey: qn
            }), ue(!1), !0
        } catch {
            return ue(!1), g.invalidateQueries({
                exact: !0,
                queryKey: gt(n, d.id, e)
            }), se().danger(p.formatMessage($.saveError), {
                toastId: `sites_settings_slug_save_error`
            }), !1
        }
    }, t[43] = n, t[44] = p, t[45] = H, t[46] = le, t[47] = o, t[48] = g, t[49] = d.id, t[50] = d.slug, t[51] = f, t[52] = rt) : rt = t[52];
    let it = rt,
        at;
    if (t[53] !== n || t[54] !== K || t[55] !== p || t[56] !== g || t[57] !== d.id) {
        let e = () => {
            if (_e.current != null) return;
            let t = (async () => {
                for (; A.current;) {
                    A.current = !1;
                    let e = ge.current;
                    if (e == null) continue;
                    let t = pe.current,
                        r = Pt(t, e.draft);
                    if (r == null) {
                        P(!0);
                        continue
                    }
                    if (r.remove.length === 0 && r.set_values.length === 0) {
                        e.generation === k.current && M(`saved`);
                        continue
                    }
                    let {
                        addedEnvironmentVariableCount: i,
                        addedSecretCount: a
                    } = In(t, e.draft), o = K.startSettingsSave({
                        environmentVariableSetCount: r.set_values.filter(Fn).length,
                        removedEntryCount: r.remove.length,
                        secretSetCount: r.set_values.filter(Pn).length,
                        titleChanged: !1
                    });
                    ye(!0), M(`saving`);
                    try {
                        let t = bt(n, d.id);
                        await g.cancelQueries({
                            exact: !0,
                            queryKey: t
                        });
                        let s = await ne.safePost(`/websites/{project_id}/environment`, {
                            parameters: {
                                path: {
                                    project_id: d.id
                                }
                            },
                            requestBody: r
                        });
                        await g.cancelQueries({
                            exact: !0,
                            queryKey: t
                        }), pe.current = s, he(s), g.setQueryData(t, s), i > 0 && K.environmentVariablesAdded(i), a > 0 && K.secretsAdded(a);
                        let c = e.generation === k.current ? jt(s) : Mt(e.draft, fe.current, s);
                        fe.current = c, de(c);
                        let l = ge.current;
                        A.current && l != null && l.generation === k.current && (ge.current = {
                            ...l,
                            draft: Mt(e.draft, l.draft, s)
                        }), o.succeeded(), M(e.generation === k.current ? `saved` : `idle`)
                    } catch (e) {
                        let t = e;
                        A.current = !1, o.failed(), M(`error`);
                        let n = t instanceof h ? t.detail?.type : void 0,
                            r = p.formatMessage($.saveError);
                        n === `environment_requires_secrets` ? r = p.formatMessage({
                            id: `sitesSettings.save.secretsRequired`,
                            defaultMessage: `Environment variables aren’t supported for this Site due to its geographic restrictions. Enable Secret for each value, then try again.`
                        }) : n === `invalid_secret_name` ? r = p.formatMessage({
                            id: `sitesSettings.save.invalidSecretName`,
                            defaultMessage: `Secret names must be 1–100 characters, start with A–Z, a–z, or _, and contain only A–Z, a–z, 0–9, or _. Choose a valid name and update references in your app.`
                        }) : n === `regional_environment_unavailable` && (r = p.formatMessage({
                            id: `sitesSettings.save.regionalEnvironmentUnavailable`,
                            defaultMessage: `Use the Sites agent to add, update, or remove secrets for this Site`
                        })), se().danger(r, {
                            toastId: `sites_settings_save_error`
                        });
                        return
                    }
                }
            })().finally(() => {
                ye(!1), _e.current === t && (_e.current = null), A.current && e()
            });
            _e.current = t
        };
        at = (t, n) => {
            let r = t ?? fe.current,
                i = n ?? k.current;
            if (Nt(r) != null) {
                P(!0);
                return
            }
            P(!1), ge.current = {
                draft: r,
                generation: i
            }, A.current = !0, e()
        }, t[53] = n, t[54] = K, t[55] = p, t[56] = g, t[57] = d.id, t[58] = at
    } else at = t[58];
    let J = at,
        ot;
    t[59] === J ? ot = t[60] : (ot = (e, t) => {
        let {
            requestSave: n,
            resetValidation: r
        } = t === void 0 ? {} : t, i = n !== void 0 && n, a = r !== void 0 && r, o = {
            entries: e
        };
        fe.current = o, k.current += 1;
        let s = k.current;
        de(o), a && P(!1), M(Nn), i && J(o, s)
    }, t[59] = J, t[60] = ot);
    let st = ot,
        ct;
    t[61] !== ve || t[62] !== J || t[63] !== q || t[64] !== ie ? (ct = () => {
        ie === `error` && q(), ve === `error` && J()
    }, t[61] = ve, t[62] = J, t[63] = q, t[64] = ie, t[65] = ct) : ct = t[65];
    let lt = (0, Z.useEffectEvent)(ct),
        ut;
    t[66] !== lt || t[67] !== l ? (ut = () => {
        if (l > 0) {
            let e = window.setTimeout(() => lt(), 0);
            return () => window.clearTimeout(e)
        }
    }, t[66] = lt, t[67] = l, t[68] = ut) : ut = t[68];
    let dt;
    t[69] === l ? dt = t[70] : (dt = [l], t[69] = l, t[70] = dt), (0, Z.useEffect)(ut, dt);
    let ft;
    t[71] !== J || t[72] !== q ? (ft = () => {
        if (re.current) return;
        T.current != null && (window.clearTimeout(T.current), T.current = null);
        let e = y.current.trim();
        e.length > 0 && (e !== b.current || te.current != null || w.current) && q();
        let t = Pt(pe.current, fe.current);
        t != null && (t.remove.length > 0 || t.set_values.length > 0 || _e.current != null || A.current) && J()
    }, t[71] = J, t[72] = q, t[73] = ft) : ft = t[73];
    let pt = (0, Z.useEffectEvent)(ft),
        mt;
    t[74] === pt ? mt = t[75] : (mt = () => () => pt(), t[74] = pt, t[75] = mt);
    let _t;
    t[76] === Symbol.for(`react.memo_cache_sentinel`) ? (_t = [], t[76] = _t) : _t = t[76], (0, Z.useEffect)(mt, _t);
    let yt;
    t[77] !== n || t[78] !== K || t[79] !== G || t[80] !== p || t[81] !== U || t[82] !== m || t[83] !== g || t[84] !== J || t[85] !== q || t[86] !== d.id || t[87] !== d.title ? (yt = async () => {
        if (U || G.isPending) return;
        re.current = !0, T.current != null && (window.clearTimeout(T.current), T.current = null);
        let e = K.startDeleteSite();
        try {
            await G.mutateAsync(), await g.invalidateQueries({
                queryKey: qn
            }), se().success(p.formatMessage($.deleteSuccess, {
                title: d.title
            })), e.succeeded(), m(`/sites`), g.removeQueries({
                exact: !0,
                queryKey: xt(n, d.id)
            }), g.removeQueries({
                exact: !0,
                queryKey: bt(n, d.id)
            }), g.removeQueries({
                exact: !0,
                queryKey: ht(n, d.id)
            })
        } catch {
            re.current = !1, q(), J(), e.failed(), se().danger(p.formatMessage($.deleteError), {
                toastId: `sites_settings_delete_error`
            })
        }
    }, t[77] = n, t[78] = K, t[79] = G, t[80] = p, t[81] = U, t[82] = m, t[83] = g, t[84] = J, t[85] = q, t[86] = d.id, t[87] = d.title, t[88] = yt) : yt = t[88];
    let St = yt,
        Ct;
    t[89] !== J || t[90] !== q ? (Ct = e => {
        e.preventDefault(), q(), J()
    }, t[89] = J, t[90] = q, t[91] = Ct) : Ct = t[91];
    let wt;
    t[92] === Symbol.for(`react.memo_cache_sentinel`) ? (wt = (0, Q.jsx)(F, {
        ...$.generalTitle
    }), t[92] = wt) : wt = t[92];
    let Tt;
    t[93] === Symbol.for(`react.memo_cache_sentinel`) ? (Tt = (0, Q.jsx)(Ln, {
        description: (0, Q.jsx)(F, {
            ...$.siteTitleDescription
        }),
        label: (0, Q.jsx)(F, {
            ...$.siteTitleLabel
        })
    }), t[93] = Tt) : Tt = t[93];
    let Et = V ? `site-settings-title-error` : void 0,
        Dt;
    t[94] === p ? Dt = t[95] : (Dt = p.formatMessage($.siteTitleInputLabel), t[94] = p, t[95] = Dt);
    let kt;
    t[96] === Symbol.for(`react.memo_cache_sentinel`) ? (kt = j(Jn, `w-full px-2.5! py-1.5!`), t[96] = kt) : kt = t[96];
    let At;
    t[97] === nt ? At = t[98] : (At = e => nt(e.target.value), t[97] = nt, t[98] = At);
    let Ft;
    t[99] === q ? Ft = t[100] : (Ft = e => {
        e.key === `Enter` && (e.preventDefault(), q())
    }, t[99] = q, t[100] = Ft);
    let It;
    t[101] !== G.isPending || t[102] !== V || t[103] !== q || t[104] !== Et || t[105] !== Dt || t[106] !== At || t[107] !== Ft || t[108] !== _ ? (It = (0, Q.jsx)(Ge, {
        "aria-describedby": Et,
        "aria-invalid": V,
        ariaLabel: Dt,
        className: kt,
        color: `neutral`,
        disabled: G.isPending,
        inputClassName: `text-sm!`,
        maxLength: 100,
        name: `site-settings-title`,
        value: _,
        onBlur: q,
        onChange: At,
        onKeyDown: Ft
    }), t[101] = G.isPending, t[102] = V, t[103] = q, t[104] = Et, t[105] = Dt, t[106] = At, t[107] = Ft, t[108] = _, t[109] = It) : It = t[109];
    let Lt;
    t[110] === V ? Lt = t[111] : (Lt = V ? (0, Q.jsx)(`div`, {
        className: `text-token-interactive-label-warning-secondary mt-1 text-xs`,
        id: `site-settings-title-error`,
        role: `alert`,
        children: (0, Q.jsx)(F, {
            ...$.titleRequired
        })
    }) : null, t[110] = V, t[111] = Lt);
    let Rt;
    t[112] !== It || t[113] !== Lt ? (Rt = (0, Q.jsx)(Bn, {
        children: (0, Q.jsxs)(`div`, {
            className: Yn,
            children: [Tt, (0, Q.jsxs)(`div`, {
                className: `w-full max-w-[338px] justify-self-stretch md:justify-self-end`,
                children: [It, Lt]
            })]
        })
    }), t[112] = It, t[113] = Lt, t[114] = Rt) : Rt = t[114];
    let zt;
    t[115] !== G.isPending || t[116] !== We || t[117] !== He || t[118] !== H || t[119] !== le || t[120] !== Be || t[121] !== W || t[122] !== f ? (zt = W == null ? null : (0, Q.jsx)(Bn, {
        children: (0, Q.jsxs)(`div`, {
            className: Yn,
            children: [(0, Q.jsx)(Ln, {
                description: (0, Q.jsx)(F, {
                    ...$.siteUrlDescription
                }),
                label: (0, Q.jsx)(F, {
                    ...$.siteUrlLabel
                })
            }), (0, Q.jsx)(`div`, {
                className: `w-full min-w-0 justify-self-stretch md:justify-self-end`,
                children: f && We != null ? (0, Q.jsxs)(`div`, {
                    className: `flex min-w-0 items-center justify-end gap-3`,
                    children: [(0, Q.jsx)(`span`, {
                        className: `text-token-text-secondary min-w-0 truncate text-sm`,
                        title: He ?? void 0,
                        children: He
                    }), (0, Q.jsx)(O, {
                        color: `secondary`,
                        disabled: G.isPending || le || H,
                        size: `small`,
                        type: `button`,
                        onClick: () => z(!0),
                        children: (0, Q.jsx)(F, {
                            ...$.changeSiteUrl
                        })
                    })]
                }) : (0, Q.jsx)(`div`, {
                    className: `flex justify-end`,
                    children: (0, Q.jsx)(Gt, {
                        domain: Be ?? W
                    })
                })
            })]
        })
    }), t[115] = G.isPending, t[116] = We, t[117] = He, t[118] = H, t[119] = le, t[120] = Be, t[121] = W, t[122] = f, t[123] = zt) : zt = t[123];
    let Bt;
    t[124] !== n || t[125] !== r || t[126] !== g || t[127] !== d.id ? (Bt = r ? (0, Q.jsx)(Ut, {
        accountId: n,
        onSiteProjectRefresh: async () => {
            await Promise.all([g.refetchQueries({
                exact: !0,
                queryKey: xt(n, d.id),
                type: `active`
            }, {
                throwOnError: !0
            }), g.invalidateQueries({
                queryKey: qn
            })])
        },
        projectId: d.id
    }) : null, t[124] = n, t[125] = r, t[126] = g, t[127] = d.id, t[128] = Bt) : Bt = t[128];
    let Ht;
    t[129] !== K || t[130] !== p || t[131] !== R || t[132] !== d || t[133] !== W ? (Ht = W == null ? null : (0, Q.jsx)(Bn, {
        children: (0, Q.jsxs)(`div`, {
            className: Yn,
            children: [(0, Q.jsx)(Ln, {
                description: (0, Q.jsx)(F, {
                    ...$.sharingDescription
                }),
                label: (0, Q.jsx)(F, {
                    ...$.sharingLabel
                })
            }), (0, Q.jsxs)(`div`, {
                className: `flex min-w-0 items-center justify-between gap-3 md:justify-self-end`,
                children: [(0, Q.jsxs)(`span`, {
                    className: `text-token-text-secondary flex min-w-0 items-center gap-1.5 text-sm`,
                    children: [(0, Q.jsx)(nr, {
                        site: d
                    }), (0, Q.jsx)(`span`, {
                        className: `min-w-0 truncate`,
                        children: Wn(d, p)
                    })]
                }), (0, Q.jsx)(O, {
                    className: `text-sm!`,
                    color: `secondary`,
                    type: `button`,
                    onClick: () => {
                        K.shareOpened(), R(!0)
                    },
                    children: (0, Q.jsx)(F, {
                        ...$.manageSharing
                    })
                })]
            })]
        })
    }), t[129] = K, t[130] = p, t[131] = R, t[132] = d, t[133] = W, t[134] = Ht) : Ht = t[134];
    let Wt;
    t[135] !== Rt || t[136] !== zt || t[137] !== Bt || t[138] !== Ht ? (Wt = (0, Q.jsx)(Rn, {
        title: wt,
        children: (0, Q.jsxs)(zn, {
            children: [Rt, zt, Bt, Ht]
        })
    }), t[135] = Rt, t[136] = zt, t[137] = Bt, t[138] = Ht, t[139] = Wt) : Wt = t[139];
    let Kt;
    t[140] === Symbol.for(`react.memo_cache_sentinel`) ? (Kt = (0, Q.jsx)(F, {
        ...$.environmentDescription
    }), t[140] = Kt) : Kt = t[140];
    let qt = me.requires_secrets === !0,
        Jt;
    t[141] === Symbol.for(`react.memo_cache_sentinel`) ? (Jt = (0, Q.jsx)(F, {
        ...$.environmentTitle
    }), t[141] = Jt) : Jt = t[141];
    let Yt, Xt, Zt;
    t[142] === st ? (Yt = t[143], Xt = t[144], Zt = t[145]) : (Yt = e => st(e, {
        resetValidation: !0
    }), Xt = e => st(e), Zt = e => st(e, {
        requestSave: !0
    }), t[142] = st, t[143] = Yt, t[144] = Xt, t[145] = Zt);
    let Qt;
    t[146] !== G.isPending || t[147] !== D.entries || t[148] !== B || t[149] !== N || t[150] !== be || t[151] !== qt || t[152] !== Yt || t[153] !== Xt || t[154] !== Zt ? (Qt = (0, Q.jsx)(Vn, {
        description: Kt,
        disabled: G.isPending,
        entries: D.entries,
        isSaving: N,
        requiresSecrets: qt,
        showValidationError: be,
        title: Jt,
        validationError: B,
        onAdd: Yt,
        onChange: Xt,
        onCommit: Zt
    }), t[146] = G.isPending, t[147] = D.entries, t[148] = B, t[149] = N, t[150] = be, t[151] = qt, t[152] = Yt, t[153] = Xt, t[154] = Zt, t[155] = Qt) : Qt = t[155];
    let $t;
    t[156] === Symbol.for(`react.memo_cache_sentinel`) ? ($t = (0, Q.jsx)(F, {
        ...$.dangerTitle
    }), t[156] = $t) : $t = t[156];
    let en;
    t[157] === Symbol.for(`react.memo_cache_sentinel`) ? (en = (0, Q.jsx)(Ln, {
        description: (0, Q.jsx)(F, {
            ...$.deleteDescription
        }),
        label: (0, Q.jsx)(F, {
            ...$.deleteLabel
        })
    }), t[157] = en) : en = t[157];
    let tn = U || G.isPending,
        nn;
    t[158] === K ? nn = t[159] : (nn = () => {
        K.deleteModalOpened(), I(!0)
    }, t[158] = K, t[159] = nn);
    let rn;
    t[160] === Symbol.for(`react.memo_cache_sentinel`) ? (rn = (0, Q.jsx)(F, {
        ...$.deleteButton
    }), t[160] = rn) : rn = t[160];
    let an;
    t[161] !== tn || t[162] !== nn ? (an = (0, Q.jsx)(Rn, {
        title: $t,
        children: (0, Q.jsx)(zn, {
            children: (0, Q.jsx)(Bn, {
                showBottomBorder: !1,
                children: (0, Q.jsxs)(`div`, {
                    className: Yn,
                    children: [en, (0, Q.jsx)(O, {
                        className: `justify-self-start text-sm! md:justify-self-end`,
                        color: `danger-outline`,
                        disabled: tn,
                        type: `button`,
                        onClick: nn,
                        children: rn
                    })]
                })
            })
        })
    }), t[161] = tn, t[162] = nn, t[163] = an) : an = t[163];
    let on;
    t[164] !== Ct || t[165] !== Wt || t[166] !== Qt || t[167] !== an ? (on = (0, Q.jsxs)(`form`, {
        className: `relative flex flex-col gap-12`,
        onSubmit: Ct,
        children: [Wt, Qt, an]
    }), t[164] = Ct, t[165] = Wt, t[166] = Qt, t[167] = an, t[168] = on) : on = t[168];
    let sn;
    t[169] !== n || t[170] !== We || t[171] !== le || t[172] !== it || t[173] !== Ee || t[174] !== d.id || t[175] !== d.slug || t[176] !== f ? (sn = Ee && f && We != null ? (0, Q.jsx)(Vt, {
        accountId: n,
        currentSlug: d.slug,
        domainSuffix: We,
        isChanging: le,
        projectId: d.id,
        onChangeUrl: it,
        onClose: () => z(!1)
    }) : null, t[169] = n, t[170] = We, t[171] = le, t[172] = it, t[173] = Ee, t[174] = d.id, t[175] = d.slug, t[176] = f, t[177] = sn) : sn = t[177];
    let cn;
    t[178] !== n || t[179] !== g || t[180] !== R || t[181] !== L || t[182] !== d || t[183] !== W ? (cn = L && W != null ? (0, Q.jsx)(Ot, {
        analyticsSource: `settings`,
        resource: {
            accessMode: d.sharing.access_mode,
            projectId: d.id,
            title: d.title,
            url: W
        },
        onAccessPolicyChange: e => {
            Gn(g, n, d, e)
        },
        onClose: () => R(!1)
    }) : null, t[178] = n, t[179] = g, t[180] = R, t[181] = L, t[182] = d, t[183] = W, t[184] = cn) : cn = t[184];
    let ln;
    t[185] !== K || t[186] !== G.isPending || t[187] !== St || t[188] !== U || t[189] !== Se || t[190] !== d ? (ln = Se ? (0, Q.jsx)(Hn, {
        isDeleting: U || G.isPending,
        site: d,
        onClose: () => {
            K.deleteModalCanceled(), I(!1)
        },
        onDelete: () => void St()
    }) : null, t[185] = K, t[186] = G.isPending, t[187] = St, t[188] = U, t[189] = Se, t[190] = d, t[191] = ln) : ln = t[191];
    let un;
    return t[192] !== on || t[193] !== sn || t[194] !== cn || t[195] !== ln ? (un = (0, Q.jsxs)(Q.Fragment, {
        children: [on, sn, cn, ln]
    }), t[192] = on, t[193] = sn, t[194] = cn, t[195] = ln, t[196] = un) : un = t[196], un
}

function Nn(e) {
    return e === `error` ? e : `idle`
}

function Pn(e) {
    return e.is_secret
}

function Fn(e) {
    return !e.is_secret
}

function In(e, t) {
    let n = new Map(e.entries.map(({
            key: e,
            is_secret: t
        }) => [e, !!t])),
        r = new Set(t.entries.map(({
            previousKey: e
        }) => e)),
        i = ({
            isSecret: e,
            key: t,
            previousKey: i
        }) => i == null ? n.get(t) !== e || r.has(t) : n.get(i) !== e;
    return {
        addedEnvironmentVariableCount: t.entries.filter(e => !e.isSecret && i(e)).length,
        addedSecretCount: t.entries.filter(e => e.isSecret && i(e)).length
    }
}

function Ln(e) {
    "use forget";
    let t = (0, Kn.c)(7),
        {
            description: n,
            label: r
        } = e,
        i;
    t[0] === r ? i = t[1] : (i = (0, Q.jsx)(`div`, {
        className: `text-token-text-primary text-sm`,
        children: r
    }), t[0] = r, t[1] = i);
    let a;
    t[2] === n ? a = t[3] : (a = (0, Q.jsx)(`div`, {
        className: `text-token-text-tertiary mt-0.5 text-xs leading-4 text-balance`,
        children: n
    }), t[2] = n, t[3] = a);
    let o;
    return t[4] !== i || t[5] !== a ? (o = (0, Q.jsxs)(`div`, {
        className: `min-w-0`,
        children: [i, a]
    }), t[4] = i, t[5] = a, t[6] = o) : o = t[6], o
}

function Rn(e) {
    "use forget";
    let t = (0, Kn.c)(15),
        {
            children: n,
            description: r,
            headerTrailingContent: i,
            title: a
        } = e,
        o;
    t[0] === a ? o = t[1] : (o = (0, Q.jsx)(`h2`, {
        className: `text-token-text-primary text-sm font-medium`,
        children: a
    }), t[0] = a, t[1] = o);
    let s;
    t[2] === r ? s = t[3] : (s = r == null ? null : (0, Q.jsx)(`div`, {
        className: `text-token-text-tertiary mt-1 text-xs leading-4`,
        children: r
    }), t[2] = r, t[3] = s);
    let c;
    t[4] !== o || t[5] !== s ? (c = (0, Q.jsxs)(`div`, {
        className: `min-w-0`,
        children: [o, s]
    }), t[4] = o, t[5] = s, t[6] = c) : c = t[6];
    let l;
    t[7] === i ? l = t[8] : (l = i == null ? null : (0, Q.jsx)(`div`, {
        className: `shrink-0`,
        children: i
    }), t[7] = i, t[8] = l);
    let u;
    t[9] !== c || t[10] !== l ? (u = (0, Q.jsxs)(`div`, {
        className: `flex items-start justify-between gap-4`,
        children: [c, l]
    }), t[9] = c, t[10] = l, t[11] = u) : u = t[11];
    let d;
    return t[12] !== n || t[13] !== u ? (d = (0, Q.jsxs)(`section`, {
        className: `flex flex-col gap-4`,
        children: [u, n]
    }), t[12] = n, t[13] = u, t[14] = d) : d = t[14], d
}

function zn(e) {
    "use forget";
    let t = (0, Kn.c)(2),
        {
            children: n
        } = e,
        r;
    return t[0] === n ? r = t[1] : (r = (0, Q.jsx)(`div`, {
        className: `border-token-border-light border-t`,
        children: n
    }), t[0] = n, t[1] = r), r
}

function Bn(e) {
    "use forget";
    let t = (0, Kn.c)(5),
        {
            children: n,
            showBottomBorder: r
        } = e,
        i = (r === void 0 || r) && `border-token-border-light border-b`,
        a;
    t[0] === i ? a = t[1] : (a = j(`min-h-[68px] py-4`, i), t[0] = i, t[1] = a);
    let o;
    return t[2] !== n || t[3] !== a ? (o = (0, Q.jsx)(`div`, {
        className: a,
        children: n
    }), t[2] = n, t[3] = a, t[4] = o) : o = t[4], o
}

function Vn(e) {
    "use forget";
    let t = (0, Kn.c)(27),
        {
            description: n,
            disabled: r,
            entries: i,
            isSaving: a,
            requiresSecrets: o,
            showValidationError: s,
            validationError: c,
            onAdd: l,
            onChange: u,
            onCommit: d,
            title: f
        } = e,
        p = Ae(),
        m = (0, Z.useRef)(null),
        h;
    t[0] !== i || t[1] !== l || t[2] !== o ? (h = () => l([...i, {
        isSecret: o,
        key: ``,
        value: ``
    }]), t[0] = i, t[1] = l, t[2] = o, t[3] = h) : h = t[3];
    let _;
    t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = (0, Q.jsx)(F, {
        ...$.addVariable
    }), t[4] = _) : _ = t[4];
    let v;
    t[5] !== r || t[6] !== h ? (v = (0, Q.jsx)(O, {
        className: `text-sm!`,
        color: `secondary`,
        disabled: r,
        icon: Xe,
        type: `button`,
        onClick: h,
        children: _
    }), t[5] = r, t[6] = h, t[7] = v) : v = t[7];
    let y;
    t[8] !== r || t[9] !== i || t[10] !== p || t[11] !== a || t[12] !== u || t[13] !== d || t[14] !== o || t[15] !== s || t[16] !== c ? (y = i.length === 0 ? null : (0, Q.jsxs)(`div`, {
        className: `border-token-border-light grid grid-cols-12 items-center gap-x-2 gap-y-2 border-t pt-4 max-sm:gap-y-4`,
        children: [(0, Q.jsxs)(`div`, {
            className: `text-token-text-tertiary contents text-xs font-medium select-none max-sm:hidden`,
            children: [(0, Q.jsx)(`div`, {
                className: `col-span-5`,
                children: (0, Q.jsx)(F, {
                    ...$.environmentKeyLabel
                })
            }), (0, Q.jsx)(`div`, {
                className: `col-span-5`,
                children: (0, Q.jsx)(F, {
                    ...$.environmentValueLabel
                })
            }), (0, Q.jsx)(`div`, {
                className: `col-span-1 text-center`,
                children: (0, Q.jsx)(F, {
                    ...$.environmentSecretLabel
                })
            }), (0, Q.jsx)(`span`, {
                "aria-hidden": `true`,
                className: `col-span-1`
            })]
        }), i.map((e, t) => {
            let n = e.storedSecret === !0,
                l = a && n,
                f = n && e.value.length === 0 && e.isReplacingStoredSecretValue !== !0,
                h = e.key.length > 0 && i.filter(t => {
                    let {
                        key: n
                    } = t;
                    return n === e.key
                }).length > 1,
                _ = s && (c === `missing-key` && e.key.trim().length === 0 || c === `duplicate-key` && h),
                v = `site-settings-environment-replace-${t}`,
                y = `site-settings-environment-remove-${t}`,
                b = `environment-value-${t}`,
                x = e.previousKey ?? e.key,
                S = e.key.length === 0 ? p.formatMessage($.environmentSecretUnnamedLabel, {
                    rowNumber: t + 1
                }) : p.formatMessage($.environmentSecretNamedLabel, {
                    key: e.key
                });
            return (0, Q.jsxs)(`div`, {
                className: j(`contents max-sm:col-span-12 max-sm:grid max-sm:grid-cols-[minmax(0,1fr)_auto] max-sm:gap-2`, t > 0 && `max-sm:border-token-border-light max-sm:border-t max-sm:pt-4`),
                onBlurCapture: t => {
                    n && e.isReplacingStoredSecretValue === !0 && t.target instanceof HTMLInputElement && t.target.name === b || t.relatedTarget instanceof Node && t.currentTarget.contains(t.relatedTarget) || d(i)
                },
                children: [(0, Q.jsxs)(`div`, {
                    className: `col-span-5 min-w-0 max-sm:col-span-2`,
                    children: [(0, Q.jsx)(`span`, {
                        className: `text-token-text-tertiary mb-1 hidden text-xs font-medium max-sm:block`,
                        children: (0, Q.jsx)(F, {
                            ...$.environmentKeyLabel
                        })
                    }), (0, Q.jsx)(U, {
                        content: (0, Q.jsx)(F, {
                            ...$.environmentStoredSecretLockedHelp
                        }),
                        disabled: !n,
                        showOnTouch: n,
                        side: `top-center`,
                        children: a => (0, Q.jsx)(`div`, {
                            ...a,
                            "aria-label": n ? p.formatMessage($.environmentStoredSecretLockedAriaLabel, {
                                key: e.key
                            }) : void 0,
                            className: j(n && `keyboard-focused:focus-ring cursor-not-allowed rounded-lg outline-none`),
                            role: n ? `group` : void 0,
                            tabIndex: n ? 0 : void 0,
                            children: (0, Q.jsx)(Ge, {
                                "aria-describedby": _ ? `site-settings-environment-error` : void 0,
                                "aria-invalid": _,
                                ariaLabel: p.formatMessage($.environmentKeyLabel),
                                className: j(Jn, `min-w-0 px-2.5! py-1.5!`, n && `pointer-events-none opacity-60`),
                                color: `neutral`,
                                disabled: r || n,
                                inputClassName: `font-mono`,
                                name: `environment-key-${t}`,
                                placeholder: p.formatMessage($.environmentKeyPlaceholder),
                                value: e.key,
                                onChange: e => {
                                    u(i.map((n, r) => r === t ? {
                                        ...n,
                                        key: e.target.value
                                    } : n))
                                }
                            })
                        })
                    })]
                }), (0, Q.jsxs)(`div`, {
                    className: `col-span-5 min-w-0 max-sm:col-span-2`,
                    children: [(0, Q.jsx)(`span`, {
                        className: `text-token-text-tertiary mb-1 hidden text-xs font-medium max-sm:block`,
                        children: (0, Q.jsx)(F, {
                            ...$.environmentValueLabel
                        })
                    }), f ? (0, Q.jsx)(U, {
                        content: (0, Q.jsx)(F, {
                            ...$.environmentStoredSecretValueHelp
                        }),
                        side: `top-center`,
                        children: n => (0, Q.jsxs)(O, {
                            ...n,
                            "aria-label": p.formatMessage($.environmentReplaceStoredSecretValueAriaLabel, {
                                key: e.key
                            }),
                            className: j(Jn, `keyboard-focused:focus-ring h-9 w-full min-w-0 border! px-2.5! py-1.5! text-sm! outline-none`),
                            color: `ghost`,
                            contentWrapperClassName: `min-w-0 justify-between! gap-2`,
                            contentsFullWidth: !0,
                            disabled: r || l,
                            id: v,
                            type: `button`,
                            onClick: () => {
                                u(i.map((e, n) => n === t ? {
                                    ...e,
                                    isReplacingStoredSecretValue: !0
                                } : e)), window.requestAnimationFrame(() => {
                                    document.getElementById(b)?.focus()
                                })
                            },
                            children: [(0, Q.jsx)(`span`, {
                                className: `text-token-text-secondary truncate text-xs`,
                                children: (0, Q.jsx)(`span`, {
                                    "aria-hidden": `true`,
                                    children: er
                                })
                            }), (0, Q.jsx)(Ye, {
                                className: `text-token-text-secondary size-4 shrink-0`
                            })]
                        })
                    }) : (0, Q.jsx)(`div`, {
                        children: (0, Q.jsx)(Ge, {
                            ariaLabel: p.formatMessage(n ? $.environmentStoredSecretReplacementAriaLabel : $.environmentValueLabel, n ? {
                                key: x
                            } : void 0),
                            autoComplete: e.isSecret ? `new-password` : `off`,
                            className: j(Jn, `min-w-0 px-2.5! py-1.5!`),
                            color: `neutral`,
                            disabled: r || l,
                            inputClassName: `font-mono`,
                            name: b,
                            placeholder: p.formatMessage(n ? $.environmentStoredSecretReplacementPlaceholder : $.environmentValuePlaceholder),
                            type: e.isSecret ? `password` : `text`,
                            value: e.value,
                            spellCheck: !e.isSecret && void 0,
                            onBlur: r => {
                                if (!n || e.value.length > 0 && r.relatedTarget instanceof HTMLElement && r.relatedTarget.id === y) return;
                                let a = m.current === v;
                                if (a && (m.current = null), a || e.value.length === 0) {
                                    u(i.map((e, n) => n === t ? {
                                        ...e,
                                        isReplacingStoredSecretValue: !1,
                                        value: a ? `` : e.value
                                    } : e)), a && window.requestAnimationFrame(() => {
                                        document.getElementById(v)?.focus()
                                    });
                                    return
                                }
                                d(i)
                            },
                            onChange: e => {
                                u(i.map((n, r) => r === t ? {
                                    ...n,
                                    value: e.target.value
                                } : n))
                            },
                            onKeyDown: e => {
                                e.key !== `Escape` || !n || (e.preventDefault(), m.current = v, e.currentTarget.blur())
                            }
                        })
                    })]
                }), (0, Q.jsxs)(`div`, {
                    className: `col-span-1 flex items-center justify-center gap-2 max-sm:justify-start`,
                    children: [(0, Q.jsx)(`span`, {
                        className: `text-token-text-tertiary hidden text-xs font-medium max-sm:inline`,
                        children: (0, Q.jsx)(F, {
                            ...$.environmentSecretLabel
                        })
                    }), (0, Q.jsx)(U, {
                        content: (0, Q.jsx)(F, {
                            ...o ? $.environmentSecretRequiredHelp : $.environmentStoredSecretLockedHelp
                        }),
                        disabled: !n && !o,
                        side: `top-center`,
                        children: a => (0, Q.jsx)(`div`, {
                            ...a,
                            "aria-label": o ? S : void 0,
                            role: o ? `group` : void 0,
                            tabIndex: o ? 0 : void 0,
                            className: j(`inline-flex`, (n || o) && `cursor-not-allowed`),
                            children: (0, Q.jsx)(g, {
                                "aria-label": S,
                                checked: e.isSecret,
                                className: j((n || o) && `pointer-events-none`),
                                disabled: r || n || o,
                                size: `small`,
                                onCheckedChange: e => {
                                    d(i.map((n, r) => r === t ? {
                                        ...n,
                                        isSecret: e
                                    } : n))
                                }
                            })
                        })
                    })]
                }), (0, Q.jsx)(`div`, {
                    className: `col-span-1 flex justify-end`,
                    children: (0, Q.jsx)(O, {
                        className: `size-8 rounded-lg p-0`,
                        color: `ghost`,
                        disabled: r || l,
                        icon: q,
                        id: y,
                        label: p.formatMessage(e.key.length > 0 ? $.removeNamedEnvironmentEntry : $.removeEnvironmentEntry, e.key.length > 0 ? {
                            key: e.key
                        } : void 0),
                        size: `small`,
                        type: `button`,
                        onClick: () => {
                            d(i.filter((e, n) => n !== t))
                        }
                    })
                })]
            }, `${e.previousKey??`new`}-${t}`)
        })]
    }), t[8] = r, t[9] = i, t[10] = p, t[11] = a, t[12] = u, t[13] = d, t[14] = o, t[15] = s, t[16] = c, t[17] = y) : y = t[17];
    let b;
    t[18] !== s || t[19] !== c ? (b = s && c != null && c !== `stored-secret-needs-value` ? (0, Q.jsx)(`div`, {
        className: `text-token-interactive-label-warning-secondary mt-2 text-xs`,
        id: `site-settings-environment-error`,
        role: `alert`,
        children: c === `duplicate-key` ? (0, Q.jsx)(F, {
            ...$.duplicateEnvironmentKey
        }) : c === `missing-key` ? (0, Q.jsx)(F, {
            ...$.environmentKeyRequired
        }) : null
    }) : null, t[18] = s, t[19] = c, t[20] = b) : b = t[20];
    let x;
    return t[21] !== n || t[22] !== v || t[23] !== y || t[24] !== b || t[25] !== f ? (x = (0, Q.jsx)(`div`, {
        className: `border-token-border-light border-b pb-4`,
        children: (0, Q.jsxs)(Rn, {
            description: n,
            headerTrailingContent: v,
            title: f,
            children: [y, b]
        })
    }), t[21] = n, t[22] = v, t[23] = y, t[24] = b, t[25] = f, t[26] = x) : x = t[26], x
}

function Hn(e) {
    "use forget";
    let t = (0, Kn.c)(31),
        {
            isDeleting: n,
            onClose: r,
            onDelete: i,
            site: a
        } = e,
        o = Ae(),
        [s, c] = (0, Z.useState)(``),
        l = !(s === a.slug && !n),
        u;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, Q.jsx)(F, {
        ...$.deletePermanently
    }), t[0] = u) : u = t[0];
    let d;
    t[1] !== n || t[2] !== i || t[3] !== l ? (d = (0, Q.jsx)(O, {
        color: `danger`,
        disabled: l,
        loading: n,
        onClick: i,
        children: u
    }), t[1] = n, t[2] = i, t[3] = l, t[4] = d) : d = t[4];
    let f;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, Q.jsx)(F, {
        ...$.cancel
    }), t[5] = f) : f = t[5];
    let p;
    t[6] !== n || t[7] !== r ? (p = (0, Q.jsx)(O, {
        color: `secondary`,
        disabled: n,
        onClick: r,
        children: f
    }), t[6] = n, t[7] = r, t[8] = p) : p = t[8];
    let m;
    t[9] !== o || t[10] !== a.title ? (m = o.formatMessage($.deleteModalTitle, {
        title: a.title
    }), t[9] = o, t[10] = a.title, t[11] = m) : m = t[11];
    let h;
    t[12] === a.slug ? h = t[13] : (h = (0, Q.jsx)(`p`, {
        className: `text-token-text-secondary text-sm`,
        children: (0, Q.jsx)(F, {
            ...$.deleteModalDescription,
            values: {
                slug: a.slug,
                strong: Un
            }
        })
    }), t[12] = a.slug, t[13] = h);
    let g;
    t[14] === o ? g = t[15] : (g = o.formatMessage($.deleteConfirmationLabel), t[14] = o, t[15] = g);
    let _;
    t[16] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = e => c(e.target.value), t[16] = _) : _ = t[16];
    let v;
    t[17] !== s || t[18] !== n || t[19] !== a.slug || t[20] !== g ? (v = (0, Q.jsx)(Ge, {
        ariaLabel: g,
        disabled: n,
        name: `site-delete-confirmation`,
        placeholder: a.slug,
        value: s,
        onChange: _
    }), t[17] = s, t[18] = n, t[19] = a.slug, t[20] = g, t[21] = v) : v = t[21];
    let y;
    t[22] !== v || t[23] !== h ? (y = (0, Q.jsxs)(`div`, {
        className: `flex flex-col gap-4`,
        children: [h, v]
    }), t[22] = v, t[23] = h, t[24] = y) : y = t[24];
    let b;
    return t[25] !== r || t[26] !== y || t[27] !== d || t[28] !== p || t[29] !== m ? (b = (0, Q.jsx)(E, {
        isOpen: !0,
        onClose: r,
        primaryButton: d,
        secondaryButton: p,
        testId: `modal-delete-owned-site`,
        title: m,
        type: `danger`,
        children: y
    }), t[25] = r, t[26] = y, t[27] = d, t[28] = p, t[29] = m, t[30] = b) : b = t[30], b
}

function Un(e) {
    return (0, Q.jsx)(`strong`, {
        className: `text-token-text-primary font-semibold`,
        children: e
    })
}

function Wn(e, t) {
    switch (e.sharing.access_mode) {
        case `public`:
            return t.formatMessage($.sharingPublic);
        case `workspace_all`:
            return t.formatMessage($.sharingWorkspace);
        case `admins_only`:
        case `custom`:
            return e.sharing.counts_available === !1 ? t.formatMessage($.sharingRestricted) : e.sharing.user_count > 0 && e.sharing.group_count > 0 ? t.formatMessage($.sharingPeopleAndGroups) : e.sharing.user_count > 0 ? t.formatMessage($.sharingPeople, {
                count: e.sharing.user_count
            }) : e.sharing.group_count > 0 ? t.formatMessage($.sharingGroups, {
                count: e.sharing.group_count
            }) : t.formatMessage($.sharingOwnerOnly);
        default:
            return t.formatMessage($.sharingOwnerOnly)
    }
}
async function Gn(e, t, n, r) {
    let i = xt(t, n.id);
    await e.cancelQueries({
        exact: !0,
        queryKey: i
    });
    let a = {
        access_mode: r.access_mode,
        group_count: r.groups.length,
        user_count: kt(r)
    };
    e.setQueryData(i, e => ({
        ...e ?? n,
        sharing: a
    })), e.invalidateQueries({
        queryKey: qn,
        refetchType: `none`
    })
}
var Kn, Z, Q, qn, Jn, Yn, Xn, Zn, Qn, $n, er, tr, nr, $, rr = e((() => {
    Kn = ke(), r(), je(), a(), st(), me(), Je(), at(), et(), Qe(), qe(), K(), it(), He(), ve(), dt(), lt(), i(), ge(), Dt(), Ne(), c(), he(), ue(), de(), At(), B(), re(), Z = t(L()), I(), N(), Lt(), _t(), Me(), Ct(), wt(), Ht(), gn(), Ie(), pt(), Q = ye(), qn = [`appgen`, `projects`], Jn = `border-token-border-default! focus-within:border-token-border-heavy! focus-within:ring-token-text-secondary! bg-token-interactive-bg-tertiary-default! hover:bg-token-interactive-bg-tertiary-default! focus-within:bg-token-interactive-bg-tertiary-default! dark:bg-tertiary! dark:hover:bg-tertiary! dark:focus-within:bg-tertiary! rounded-lg! focus-within:ring-1!`, Yn = `grid grid-cols-1 items-center gap-[10px] md:grid-cols-[minmax(0,420px)_minmax(0,1fr)]`, Xn = 900, Zn = 2e3, Qn = 10 * 6e4, $n = `sites_access_request_token`, er = `••••••••`, tr = e => {
        "use forget";
        let t = (0, Kn.c)(13),
            {
                onRetry: n,
                status: r
            } = e,
            i = r === `idle` && `max-sm:min-h-0 max-sm:min-w-0`,
            a;
        t[0] === i ? a = t[1] : (a = j(`flex min-h-8 min-w-16 items-center gap-1.5 text-xs`, i), t[0] = i, t[1] = a);
        let o;
        t[2] === r ? o = t[3] : (o = r === `saving` ? (0, Q.jsx)(F, {
            ...$.autosaveSaving
        }) : r === `saved` ? (0, Q.jsx)(F, {
            ...$.autosaveSaved
        }) : null, t[2] = r, t[3] = o);
        let s;
        t[4] === o ? s = t[5] : (s = (0, Q.jsx)(`span`, {
            "aria-atomic": `true`,
            "aria-live": `polite`,
            className: `text-token-text-tertiary flex items-center`,
            role: `status`,
            children: o
        }), t[4] = o, t[5] = s);
        let c;
        t[6] !== n || t[7] !== r ? (c = r === `error` ? (0, Q.jsxs)(Q.Fragment, {
            children: [(0, Q.jsx)(`span`, {
                className: `text-token-interactive-label-warning-secondary`,
                role: `alert`,
                children: (0, Q.jsx)(F, {
                    ...$.autosaveError
                })
            }), (0, Q.jsx)(O, {
                color: `ghost`,
                size: `small`,
                type: `button`,
                onClick: n,
                children: (0, Q.jsx)(F, {
                    ...$.autosaveRetry
                })
            })]
        }) : null, t[6] = n, t[7] = r, t[8] = c) : c = t[8];
        let l;
        return t[9] !== a || t[10] !== s || t[11] !== c ? (l = (0, Q.jsxs)(`div`, {
            className: a,
            children: [s, c]
        }), t[9] = a, t[10] = s, t[11] = c, t[12] = l) : l = t[12], l
    }, nr = e => {
        "use forget";
        let t = (0, Kn.c)(4),
            {
                site: n
            } = e;
        if (n.sharing.access_mode === `public`) {
            let e;
            return t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Q.jsx)(nt, {
                "aria-hidden": `true`,
                className: `icon-xs shrink-0`
            }), t[0] = e) : e = t[0], e
        }
        if (n.sharing.access_mode === `workspace_all`) {
            let e;
            return t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Q.jsx)(tt, {
                "aria-hidden": `true`,
                className: `icon-xs shrink-0`
            }), t[1] = e) : e = t[1], e
        }
        if (n.sharing.counts_available === !1 || n.sharing.user_count > 0 || n.sharing.group_count > 0) {
            let e;
            return t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Q.jsx)($e, {
                "aria-hidden": `true`,
                className: `icon-xs shrink-0`
            }), t[2] = e) : e = t[2], e
        }
        let r;
        return t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, Q.jsx)(Ke, {
            "aria-hidden": `true`,
            className: `icon-xs shrink-0`
        }), t[3] = r) : r = t[3], r
    }, $ = P({
        metaTitle: {
            id: `sites.settings.meta.title`,
            defaultMessage: `ChatGPT - Site settings`
        },
        pageTitle: {
            id: `sites.settings.page_title`,
            defaultMessage: `Site settings`
        },
        loading: {
            id: `sites.settings.loading`,
            defaultMessage: `Loading Site settings`
        },
        loadErrorTitle: {
            id: `sites.settings.load_error.title`,
            defaultMessage: `Site settings couldn’t be loaded`
        },
        loadErrorDescription: {
            id: `sites.settings.load_error.description`,
            defaultMessage: `Check your connection and try again.`
        },
        retry: {
            id: `sites.settings.load_error.retry`,
            defaultMessage: `Retry`
        },
        accessRequestPendingTitle: {
            id: `sites.settings.access_request.pending.title`,
            defaultMessage: `{requesterName} wants to view`
        },
        accessRequestPendingDescription: {
            id: `sites.settings.access_request.pending.description`,
            defaultMessage: `{requesterEmail} requested access to view “{projectTitle}”.`
        },
        accessRequestAllow: {
            id: `sites.settings.access_request.pending.allow.button`,
            defaultMessage: `Allow access`
        },
        accessRequestNotNow: {
            id: `sites.settings.access_request.pending.not_now.button`,
            defaultMessage: `Not now`
        },
        accessRequestApprovedToast: {
            id: `sites.settings.access_request.approved.toast`,
            defaultMessage: `{requesterName} can now view this site`
        },
        accessRequestUnavailable: {
            id: `sites.settings.access_request.unavailable.toast`,
            defaultMessage: `This access request is no longer available.`
        },
        accessRequestApproveError: {
            id: `sites.settings.access_request.approve_error.toast`,
            defaultMessage: `Unable to allow access`
        },
        generalTitle: {
            id: `sites.settings.general.title`,
            defaultMessage: `General`
        },
        siteTitleLabel: {
            id: `sites.settings.general.site_title.label`,
            defaultMessage: `Name`
        },
        siteTitleDescription: {
            id: `sites.settings.general.site_title.description`,
            defaultMessage: `Name for your site`
        },
        siteTitleInputLabel: {
            id: `sites.settings.general.site_title.input_label`,
            defaultMessage: `Site title`
        },
        siteUrlLabel: {
            id: `sites.settings.general.site_url.label`,
            defaultMessage: `URL`
        },
        siteUrlDescription: {
            id: `sites.settings.general.site_url.description`,
            defaultMessage: `Web address`
        },
        changeSiteUrl: {
            id: `sites.settings.general.site_url.change.button.label`,
            defaultMessage: `Change`
        },
        slugSaveTimeout: {
            id: `sites.settings.general.site_url.save_timeout`,
            defaultMessage: `The Site URL update is taking longer than expected. Try again.`
        },
        sharingLabel: {
            id: `sites.settings.sharing.label`,
            defaultMessage: `Sharing`
        },
        sharingDescription: {
            id: `sites.settings.sharing.description`,
            defaultMessage: `Who can view your site`
        },
        manageSharing: {
            id: `sites.settings.sharing.manage`,
            defaultMessage: `Manage`
        },
        sharingPublic: {
            id: `sites.settings.sharing.public`,
            defaultMessage: `Everyone`
        },
        sharingWorkspace: {
            id: `sites.settings.sharing.visibility.workspace`,
            defaultMessage: `Visible to your workspace`
        },
        sharingRestricted: {
            id: `sites.settings.sharing.restricted`,
            defaultMessage: `Restricted access`
        },
        sharingOwnerOnly: {
            id: `sites.settings.sharing.visibility.owner_only`,
            defaultMessage: `Only visible to you`
        },
        sharingPeople: {
            id: `sites.settings.sharing.people`,
            defaultMessage: `{count, plural, one {# person} other {# people}}`
        },
        sharingGroups: {
            id: `sites.settings.sharing.groups`,
            defaultMessage: `{count, plural, one {# group} other {# groups}}`
        },
        sharingPeopleAndGroups: {
            id: `sites.settings.sharing.people_and_groups`,
            defaultMessage: `People and groups`
        },
        environmentTitle: {
            id: `sites.settings.environment.title`,
            defaultMessage: `Environment variables`
        },
        environmentDescription: {
            id: `sites.settings.environment.description`,
            defaultMessage: `Add API keys and other environment variables your site needs`
        },
        addVariable: {
            id: `sites.settings.environment.add`,
            defaultMessage: `Add variable`
        },
        environmentKeyLabel: {
            id: `sites.settings.environment.key.label`,
            defaultMessage: `Key`
        },
        environmentKeyPlaceholder: {
            id: `sites.settings.environment.key.placeholder`,
            defaultMessage: `Key`
        },
        environmentValueLabel: {
            id: `sites.settings.environment.value.label`,
            defaultMessage: `Value`
        },
        environmentValuePlaceholder: {
            id: `sites.settings.environment.value.placeholder`,
            defaultMessage: `Value`
        },
        environmentSecretLabel: {
            id: `sites.settings.environment.secret.label`,
            defaultMessage: `Secret`
        },
        environmentSecretUnnamedLabel: {
            id: `sites.settings.environment.secret.unnamed_label`,
            defaultMessage: `Treat environment variable {rowNumber} as a secret`
        },
        environmentSecretNamedLabel: {
            id: `sites.settings.environment.secret.named_label`,
            defaultMessage: `Treat {key} as a secret`
        },
        environmentSecretRequiredHelp: {
            id: `sites.settings.environment.secret.required.help_text`,
            defaultMessage: `Data residency requires all values to be secrets`
        },
        environmentStoredSecretLockedHelp: {
            id: `sites.settings.environment.stored_secret.locked.help_text`,
            defaultMessage: `Stored secret keys and types can’t be changed. Delete this secret and add a new one.`
        },
        environmentStoredSecretLockedAriaLabel: {
            id: `sites.settings.environment.stored_secret.locked.aria_label`,
            defaultMessage: `Stored secret settings for {key} are locked`
        },
        environmentReplaceStoredSecretValueAriaLabel: {
            id: `sites.settings.environment.stored_secret.replace.button.aria_label`,
            defaultMessage: `Replace stored secret value for {key}`
        },
        environmentStoredSecretValueHelp: {
            id: `sites.settings.environment.stored_secret.replacement.help_text`,
            defaultMessage: `Saved secret values can’t be viewed. Select to replace.`
        },
        environmentStoredSecretReplacementPlaceholder: {
            id: `sites.settings.environment.stored_secret.replacement.placeholder`,
            defaultMessage: `Enter new value`
        },
        environmentStoredSecretReplacementAriaLabel: {
            id: `sites.settings.environment.stored_secret.replacement.input.aria_label`,
            defaultMessage: `New secret value for {key}`
        },
        removeEnvironmentEntry: {
            id: `sites.settings.environment.remove`,
            defaultMessage: `Remove entry`
        },
        removeNamedEnvironmentEntry: {
            id: `sites.settings.environment.remove_named`,
            defaultMessage: `Remove {key}`
        },
        dangerTitle: {
            id: `sites.settings.danger.title`,
            defaultMessage: `Danger zone`
        },
        deleteLabel: {
            id: `sites.settings.danger.delete.label`,
            defaultMessage: `Delete site`
        },
        deleteDescription: {
            id: `sites.settings.danger.delete.description`,
            defaultMessage: `Permanently delete this site`
        },
        deleteButton: {
            id: `sites.settings.danger.delete.button`,
            defaultMessage: `Delete site`
        },
        saveError: {
            id: `sites.settings.save.error`,
            defaultMessage: `Unable to save Site settings`
        },
        autosaveSaving: {
            id: `sites.settings.autosave.status.saving`,
            defaultMessage: `Saving…`
        },
        autosaveSaved: {
            id: `sites.settings.autosave.status.saved`,
            defaultMessage: `Saved`
        },
        autosaveError: {
            id: `sites.settings.autosave.status.error`,
            defaultMessage: `Changes couldn’t be saved`
        },
        autosaveRetry: {
            id: `sites.settings.autosave.retry.button.label`,
            defaultMessage: `Retry`
        },
        titleRequired: {
            id: `sites.settings.general.site_title.required`,
            defaultMessage: `Site title is required`
        },
        duplicateEnvironmentKey: {
            id: `sites.settings.environment.duplicate_key`,
            defaultMessage: `Keys must be unique across environment variables and secrets`
        },
        environmentKeyRequired: {
            id: `sites.settings.environment.key_required`,
            defaultMessage: `Each environment variable and secret needs a key`
        },
        deleteModalTitle: {
            id: `sites.settings.delete_modal.title`,
            defaultMessage: `Delete {title}?`
        },
        deleteModalDescription: {
            id: `sites.settings.delete_modal.description`,
            defaultMessage: `Deleting your site will take it offline permanently and delete any data users have uploaded. Please type <strong>{slug}</strong> below:`
        },
        deleteConfirmationLabel: {
            id: `sites.settings.delete_modal.confirmation_label`,
            defaultMessage: `Site slug`
        },
        deletePermanently: {
            id: `sites.settings.delete_modal.confirm`,
            defaultMessage: `Permanently delete`
        },
        cancel: {
            id: `sites.settings.delete_modal.cancel`,
            defaultMessage: `Cancel`
        },
        deleteSuccess: {
            id: `sites.settings.delete.success`,
            defaultMessage: `{title} deleted`
        },
        deleteError: {
            id: `sites.settings.delete.error`,
            defaultMessage: `Unable to delete Site`
        }
    })
}));

function ir() {
    "use forget";
    let e = (0, ar.c)(1),
        t;
    return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, or.jsx)(bn, {}), e[0] = t) : t = e[0], t
}
var ar, or, sr = e((() => {
    ar = ke(), rr(), or = ye()
}));

function cr(e) {
    let t = e.searchParams.getAll(dr);
    if (t.length !== 1) return null;
    let n = t[0]?.trim();
    return n && n.length <= 4096 ? n : null
}

function lr(e) {
    return cr(e) != null
}
async function ur(e, t) {
    let r = new URL(e.url),
        i = r.searchParams.get(`account_id`)?.trim(),
        a = cr(r);
    if (!i || a == null || t == null) return !1;
    r.searchParams.delete(`account_id`);
    let o = r.pathname + r.search + r.hash;
    if (i === (y.getCookie(x.Workspace) ?? `personal`)) throw V(o, {
        headers: fr
    });
    let s = m(),
        c = oe(await s.ensureQueryData(pe())).find(e => i === `personal` ? e.isPersonalAccount() : e.id === i);
    if (c == null) throw V(`/`, {
        headers: fr
    });
    if (!c.canAccessWithCurrentSession) return await n({
        fallbackScreenHint: `login`,
        callbackUrl: e.url,
        ...c.ssoConnectionName == null ? {} : {
            additionalAuthParams: {
                connection: c.ssoConnectionName
            }
        }
    }), !0;
    try {
        await yt(t, a, c.id)
    } catch {
        throw V(o, {
            headers: fr
        })
    }
    let {
        updatedAccount: l
    } = await _e(s, c.id);
    throw l ? (await A(), Te(o, {
        headers: fr
    })) : V(`/`)
}
var dr, fr, pr, mr, hr = e((() => {
    a(), b(), ge(), D(), _t(), l(), te(), ee(), Ue(), N(), sr(), dr = `sites_access_request_token`, fr = {
        "Referrer-Policy": `no-referrer`
    }, pr = async ({
        params: e,
        request: t
    }) => {
        if (ze(), await ur(t, e.projectId)) return null;
        if (!p()) throw V(`/library`);
        return null
    }, pr.hydrate = !0, mr = ({
        nextUrl: e
    }) => !!(e.searchParams.get(`account_id`)?.trim() && lr(e))
}));
e((() => {
    hr()
}))();
export {
    pr as clientLoader, ir as
    default, mr as shouldRevalidate
};
//# sourceMappingURL=(_lang).sites_._projectId.settings-cpq7rv7s.js.map