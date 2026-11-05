import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as n,
    CN as r,
    C_ as i,
    Cnt as a,
    Eat as o,
    HN as s,
    Hot as c,
    J5 as l,
    UN as u,
    Vot as d,
    cst as f,
    d1 as p,
    e5 as m,
    gst as h,
    jnt as g,
    l7 as _,
    mnt as v,
    o5 as y,
    sst as b,
    t5 as x,
    u1 as S,
    u7 as C,
    wN as w,
    w_ as T,
    wat as E,
    x5 as ee,
    yst as te
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Bn as D,
    Kt as O,
    Ln as k,
    Rn as A,
    Vn as j,
    wn as M,
    zn as ne
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    ARn as re,
    Cxn as ie,
    Dzt as ae,
    KWn as oe,
    ORn as N,
    YWn as P,
    _Rt as se,
    fGn as ce,
    fzn as le,
    iGn as F,
    mGn as ue,
    mzn as de,
    nGn as fe,
    vzt as pe,
    wxn as I,
    wzt as me
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    oC as he,
    sC as ge
} from "./30901919-k5uqyx4vyplt9toa.js";
import {
    $ as _e,
    $t as L,
    At as R,
    Ct as z,
    Et as ve,
    G as ye,
    Gt as be,
    H as B,
    J as xe,
    Jt as V,
    K as Se,
    Ot as Ce,
    Q as H,
    Tt as U,
    U as we,
    Ut as W,
    V as Te,
    W as Ee,
    X as De,
    Yt as Oe,
    Z as ke,
    an as G,
    at as Ae,
    et as je,
    ft as Me,
    in as Ne,
    kt as K,
    lt as Pe,
    ot as Fe,
    pt as Ie,
    q as Le,
    rn as Re,
    rt as ze,
    tt as Be,
    ut as Ve,
    vt as He
} from "./82782bc9-loong612qtaq7sd9.js";
import {
    mt as Ue,
    pt as We
} from "./c470f5ab-bhx5jraq636jc4ww.js";
import {
    L as Ge,
    at as Ke
} from "./1c919af1-l4n6ac3ef72w21fi.js";
import {
    r as qe
} from "./4b68ab38-hqs0yc0b0yhvv7p6.js";
import {
    t as Je
} from "./e981ddae-jmgg6ibiidqeeif6.js";
import {
    a as Ye,
    i as Xe
} from "./707eab0c-95zghyijkjk8qk3x.js";
import {
    t as Ze
} from "./a35abcd6-ckxh13c2nv3bytau.js";
import {
    i as Qe,
    n as $e,
    r as et,
    t as tt
} from "./bcae0416-n6d7ishf8x3ix5u5.js";
import {
    a as nt,
    c as rt,
    i as it,
    o as at,
    r as ot,
    s as st,
    t as ct
} from "./85557f11-mqqr1coukt2floak.js";
import {
    f as lt,
    t as ut
} from "./5579e947-d1ven2g0hm2wflz5.js";
import {
    At as dt,
    Ct as ft,
    St as pt,
    kt as mt,
    xt as ht
} from "./8e7d0a25-hjalwed8futvzicp.js";
import {
    S as gt,
    T as _t,
    b as vt,
    f as yt,
    g as bt,
    n as xt,
    p as St,
    t as Ct
} from "./11e71471-onrp5t2fvd2uwc93.js";
import {
    t as wt
} from "./a9fa9fda-my791c29w4x18f97.js";
import {
    n as Tt,
    t as Et
} from "./11d5ad21-omeqhp6tu8mes117.js";
import {
    i as Dt,
    n as Ot
} from "./a6bddaad-inqf414yklrjq6gw.js";
import {
    i as kt,
    n as At,
    r as jt,
    t as Mt
} from "./93c5fc88-c2q9i3zg4hi76mur.js";
import {
    c as Nt,
    u as Pt
} from "./92cd10e6-8ynrnwgxspbksorz.js";

function Ft({
    connectorById: e,
    connectorTools: t,
    fileTree: n,
    hasMemoryTool: r,
    hasImageGenerationTool: i,
    hasWebSearchTool: a,
    skills: o,
    slackDeployments: s
}) {
    let c = [...a ? [{
            id: `tool:web_search`,
            kind: `web_search`,
            mentionId: `web_search`,
            baseLabel: `Web search`,
            searchText: Qt(`web search browse internet search`)
        }] : [], ...r ? [{
            id: `tool:file_persistence`,
            detailPath: `/memory`,
            kind: `file_persistence`,
            mentionId: `file_persistence`,
            baseLabel: `Memory`,
            searchText: Qt(`persistent files file persistence memory files`)
        }] : [], ...i ? [{
            id: `tool:image_generation`,
            kind: `image_generation`,
            mentionId: `image_generation`,
            baseLabel: `Create image`,
            searchText: Qt(`create image image generation generate images`)
        }] : [], ...t.map(t => {
            let n = e.get(t.connectorId),
                r = t.connectorId,
                i = n?.name.trim(),
                a = i || t.connectorId;
            return {
                id: `app:${r}`,
                detailPath: `/connectors/${r}`,
                icon: {
                    kind: `app`,
                    connector: n ? {
                        id: n.id,
                        icon_assets: n.icon_assets,
                        icon_dark_assets: n.icon_dark_assets,
                        logo_url: n.logo_url,
                        logo_url_dark: n.logo_url_dark,
                        name: n.name
                    } : null
                },
                kind: `app`,
                isLoading: !i,
                mentionId: r,
                baseLabel: a,
                searchText: Qt([a, n?.id, t.connectorId].filter(Boolean).join(` `))
            }
        }), ...s.filter(dt).map(e => {
            let t = ft(e),
                n = ht(t),
                r = pt(e);
            return {
                id: `slack_channel:${e.deployment_id}`,
                detailPath: `/channels/slack/${e.deployment_id}`,
                kind: `slack_channel`,
                mentionId: e.deployment_id,
                baseLabel: n,
                searchText: Qt([n, t, r, `slack channel`].filter(Boolean).join(` `))
            }
        }), ...o.map(e => {
            let t = Zt(e);
            return {
                id: `skill:${e.id}`,
                detailPath: `/skills/${e.id}`,
                icon: {
                    kind: `skill`,
                    name: e.icon?.name
                },
                kind: `skill`,
                mentionId: e.id,
                baseLabel: t,
                searchText: Qt([t, e.description, e.id].filter(Boolean).join(` `))
            }
        }), ...nn(n).sort((e, t) => e.name.localeCompare(t.name)).map(e => ({
            detailPath: `/files/${e.id}`,
            id: `file:${e.id}`,
            kind: `file`,
            mentionId: e.id,
            baseLabel: e.name,
            searchText: Qt(e.name)
        }))],
        l = new Map;
    for (let e of c) {
        let t = e.baseLabel.toLowerCase(),
            n = l.get(t);
        if (n) {
            n.push(e);
            continue
        }
        l.set(t, [e])
    }
    return c.map(e => {
        let t = en(e, l.get(e.baseLabel.toLowerCase()) ?? [e]),
            n = e.kind === `file` ? e.baseLabel : t;
        return {
            id: e.id,
            detailPath: e.detailPath,
            icon: e.icon,
            kind: e.kind,
            isLoading: e.isLoading,
            mentionId: e.mentionId,
            rawText: kt({
                label: n,
                mentionId: e.mentionId,
                mentionType: e.kind
            }),
            displayLabel: n,
            searchText: e.searchText
        }
    })
}

function It({
    hasPersistedGpt: e,
    intl: t
}) {
    let n = [{
        id: `connect_app`,
        label: t.formatMessage(on.addApp),
        keywords: [`app`, `apps`, `connect`, `mcp`]
    }, {
        id: `add_skill`,
        label: t.formatMessage(on.addSkill),
        keywords: [`skill`, `skills`, `create`]
    }, {
        id: `upload_file`,
        label: t.formatMessage(on.uploadFile),
        keywords: [`file`, `files`, `upload`]
    }];
    return e ? n : n.filter(e => e.id !== `add_skill` && e.id !== `upload_file`)
}

function Lt(e, t, n) {
    let r = tn(e, n, e => e.searchText),
        i = [];
    for (let a of Vt) {
        let o = a === `file` ? rn(e.filter(e => e.kind === `file`), n) : r.flatMap(({
            item: e
        }) => Ht(e.kind) === a ? [{
            id: e.id,
            icon: e.icon,
            label: e.displayLabel,
            kind: e.kind
        }] : []);
        o.length !== 0 && i.push({
            key: a,
            title: t[a],
            items: o
        })
    }
    return i
}

function Rt(e, t) {
    let n = tn(e, t, e => Qt(`${e.label} ${e.keywords.join(` `)}`)).map(({
        item: e
    }) => e).map(e => ({
        id: e.id,
        label: e.label,
        kind: e.id
    }));
    return n.length === 0 ? [] : [{
        key: `slash`,
        items: n
    }]
}

function zt(e) {
    let {
        selection: t
    } = e.state;
    if (!t.empty) return null;
    let {
        $from: n
    } = t;
    if (!n.parent.isTextblock || n.marks().some(e => e.type.name === `code`)) return null;
    let r = n.parent.textBetween(0, n.parentOffset, `
`, `
`).match(Ut);
    if (!r) return null;
    let i = r[1] ?? ``,
        a = r[2],
        o = r[3] || ``,
        s = n.parent.textBetween(n.parentOffset, n.parent.content.size, `
`, `
`).match(Wt)?.[0] ?? ``,
        c = Kt(`${o}${s}`),
        l = t.from - o.length - 1,
        u = l - (qt(i) ? i.length : 0);
    return {
        kind: a === `/` ? `slash` : `mention`,
        from: l,
        replaceFrom: u,
        to: t.from + s.length,
        query: c
    }
}
var Bt, Vt, Ht, Ut, Wt, Gt, Kt, qt, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, an, on, sn = e((() => {
        mt(), A(), Mt(), Bt = {
            app: `App`,
            file: `File`,
            file_persistence: `Memory`,
            image_generation: `Image generation`,
            skill: `Skill`,
            slack_channel: `Slack channel`,
            web_search: `Web search`
        }, Vt = [`app`, `slack_channel`, `tool`, `skill`, `file`], Ht = e => {
            switch (e) {
                case `file_persistence`:
                case `web_search`:
                case `image_generation`:
                    return `tool`;
                case `slack_channel`:
                    return `slack_channel`;
                case `app`:
                case `skill`:
                case `file`:
                    return e
            }
        }, Ut = /(^|[\s\u200B\uFEFF([{"'`])([/@])([^/@\r\n]*)$/, Wt = /^[^/@\r\n]*/, Gt = /[\u200B\uFEFF]/g, Kt = e => e.replace(Gt, ``), qt = e => e.length > 0 && Kt(e).length === 0, Jt = ({
            itemId: e,
            panelDepth: t
        }) => `instructions-command-menu-${t}-${e}`, Yt = e => e.flatMap(e => e.items), Xt = ({
            path: e,
            sections: t
        }) => {
            let n = Yt(t);
            for (let t of e) {
                let e = n.find(e => e.id === t);
                if (!e?.submenuItems?.length) return [];
                n = [...e.submenuItems]
            }
            return n
        }, Zt = e => {
            let t = e.name.trim();
            return t.length > 0 ? t : e.id
        }, Qt = e => e.toLowerCase(), $t = e => e.replace(/[\s_-]+/g, ``), en = (e, t) => t.length <= 1 ? e.baseLabel : t.some(t => t.kind !== e.kind) ? `${e.baseLabel} (${Bt[e.kind]})` : e.baseLabel, tn = (e, t, n) => {
            let r = Qt(t.trim());
            return r.length === 0 ? e.map((e, t) => ({
                item: e,
                index: t,
                rank: 0
            })) : e.map((e, t) => {
                let i = an(r, n(e));
                return i == null ? null : {
                    item: e,
                    index: t,
                    rank: i
                }
            }).filter(e => e != null).sort((e, t) => e.rank - t.rank || e.index - t.index)
        }, nn = e => {
            if (!e || !Array.isArray(e.nodes) || e.nodes.length === 0) return [];
            let t = [],
                n = e => {
                    if (e.kind === `file` && t.push({
                            id: e.id,
                            name: e.name
                        }), Array.isArray(e.children))
                        for (let t of e.children) n(t)
                },
                r = (() => {
                    if (!e.root_node_id) return e.nodes;
                    let t = e.nodes.find(t => t.id === e.root_node_id);
                    return Array.isArray(t?.children) ? t.children : e.nodes
                })();
            for (let e of r) n(e);
            return t
        }, rn = (e, t) => tn(e, t, e => e.searchText).map(({
            item: e
        }) => ({
            id: e.id,
            label: e.displayLabel,
            kind: `file`
        })), an = (e, t) => {
            let n = $t(e),
                r = $t(t);
            return r.includes(n) ? r.startsWith(n) ? 0 : t.split(/\s+/).some(t => t.startsWith(e)) ? 1 : 2 : null
        }, on = k({
            addApp: {
                id: `Hermes.GptStudio.Builder.InstructionsCommands.addApp`,
                defaultMessage: `Add app`
            },
            addSkill: {
                id: `Hermes.GptStudio.Builder.InstructionsCommands.addSkill`,
                defaultMessage: `Add skill`
            },
            uploadFile: {
                id: `Hermes.GptStudio.Builder.InstructionsCommands.uploadFile`,
                defaultMessage: `Upload file`
            }
        })
    })),
    cn, ln, un, dn, fn, pn, mn, hn, gn, _n, vn, q, yn = e((() => {
        cn = `_7KJy6q_EmptyState`, ln = `_7KJy6q_IconSlot`, un = `_7KJy6q_Item`, dn = `_7KJy6q_Label`, fn = `_7KJy6q_MenuIcon`, pn = `_7KJy6q_Panel`, mn = `_7KJy6q_Row`, hn = `_7KJy6q_SectionTitle`, gn = `_7KJy6q_Separator`, _n = `_7KJy6q_SubmenuChevron`, vn = `_7KJy6q_SubmenuItem`, q = {
            EmptyState: cn,
            IconSlot: ln,
            Item: un,
            Label: dn,
            MenuIcon: fn,
            Panel: pn,
            Row: mn,
            SectionTitle: hn,
            Separator: gn,
            SubmenuChevron: _n,
            SubmenuItem: vn
        }
    })),
    bn, xn, J, Sn, Cn, wn, Tn, En, Dn, On, kn, An, jn, Mn = e((() => {
        bn = M(), Tt(), sn(), Dt(), Ue(), s(), ot(), Ze(), C(), xn = t(j()), yn(), _t(), J = D(), Sn = 240, Cn = 8, wn = -18, Tn = ({
            itemId: e,
            panelDepth: t
        }) => e == null ? null : (() => {
            let n = document.getElementById(Jt({
                itemId: e,
                panelDepth: t
            }));
            return n instanceof HTMLDivElement ? n : null
        })(), En = e => {
            "use forget";
            let t = (0, bn.c)(14),
                {
                    item: n
                } = e;
            if (n.icon?.kind === `app` && n.icon.connector) {
                let e;
                return t[0] === n.icon.connector ? e = t[1] : (e = (0, J.jsx)(Et, {
                    className: `size-5`,
                    iconClassName: `size-5`,
                    connector: n.icon.connector
                }), t[0] = n.icon.connector, t[1] = e), e
            }
            if (n.icon?.kind === `skill`) {
                let e;
                return t[2] === n.icon.name ? e = t[3] : (e = (0, J.jsx)(Ot, {
                    name: n.icon.name,
                    className: q.MenuIcon
                }), t[2] = n.icon.name, t[3] = e), e
            }
            switch (n.kind) {
                case `app`: {
                    let e;
                    return t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, J.jsx)(gt, {
                        className: q.MenuIcon
                    }), t[4] = e) : e = t[4], e
                }
                case `connect_app`: {
                    let e;
                    return t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, J.jsx)(xt, {
                        className: q.MenuIcon
                    }), t[5] = e) : e = t[5], e
                }
                case `file`: {
                    let e;
                    return t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, J.jsx)(Ge, {
                        className: q.MenuIcon
                    }), t[6] = e) : e = t[6], e
                }
                case `file_persistence`: {
                    let e;
                    return t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, J.jsx)(bt, {
                        className: q.MenuIcon
                    }), t[7] = e) : e = t[7], e
                }
                case `image_generation`: {
                    let e;
                    return t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, J.jsx)(St, {
                        className: q.MenuIcon
                    }), t[8] = e) : e = t[8], e
                }
                case `skill`: {
                    let e;
                    return t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, J.jsx)(Ct, {
                        className: q.MenuIcon
                    }), t[9] = e) : e = t[9], e
                }
                case `slack_channel`: {
                    let e;
                    return t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, J.jsx)(We, {
                        className: q.MenuIcon
                    }), t[10] = e) : e = t[10], e
                }
                case `add_skill`: {
                    let e;
                    return t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, J.jsx)(Ct, {
                        className: q.MenuIcon
                    }), t[11] = e) : e = t[11], e
                }
                case `upload_file`: {
                    let e;
                    return t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, J.jsx)(yt, {
                        className: q.MenuIcon
                    }), t[12] = e) : e = t[12], e
                }
                case `web_search`: {
                    let e;
                    return t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, J.jsx)(vt, {
                        className: q.MenuIcon
                    }), t[13] = e) : e = t[13], e
                }
                default:
                    return null
            }
        }, Dn = e => {
            "use forget";
            let t = (0, bn.c)(16),
                {
                    emptyLabel: n,
                    floatingStyles: r,
                    hasItems: i,
                    id: a,
                    innerRef: o,
                    isSubmenu: s,
                    width: c,
                    children: l
                } = e,
                u = s !== void 0 && s,
                d = i ? `listbox` : void 0,
                f = i ? void 0 : ``,
                p = u ? `` : void 0,
                m = c === `auto` ? void 0 : `${c}px`,
                h = c === `auto` ? `max-content` : `${c}px`,
                g;
            t[0] !== r || t[1] !== m || t[2] !== h ? (g = {
                ...r,
                minWidth: m,
                width: h
            }, t[0] = r, t[1] = m, t[2] = h, t[3] = g) : g = t[3];
            let _;
            t[4] !== l || t[5] !== n || t[6] !== i ? (_ = i ? l : (0, J.jsx)(`div`, {
                className: q.EmptyState,
                children: n
            }), t[4] = l, t[5] = n, t[6] = i, t[7] = _) : _ = t[7];
            let v;
            return t[8] !== a || t[9] !== o || t[10] !== d || t[11] !== f || t[12] !== p || t[13] !== g || t[14] !== _ ? (v = (0, J.jsx)(`div`, {
                ref: o,
                id: a,
                role: d,
                className: q.Panel,
                "data-empty": f,
                "data-submenu": p,
                onPointerDown: On,
                style: g,
                children: _
            }), t[8] = a, t[9] = o, t[10] = d, t[11] = f, t[12] = p, t[13] = g, t[14] = _, t[15] = v) : v = t[15], v
        }, On = e => {
            e.preventDefault()
        }, kn = e => {
            "use forget";
            let t = (0, bn.c)(24),
                {
                    active: n,
                    hasSubmenu: r,
                    item: i,
                    onClick: a,
                    onMouseEnter: o,
                    open: s,
                    panelDepth: c
                } = e,
                l = r !== void 0 && r,
                u = s !== void 0 && s,
                d;
            t[0] !== i.id || t[1] !== c ? (d = Jt({
                itemId: i.id,
                panelDepth: c
            }), t[0] = i.id, t[1] = c, t[2] = d) : d = t[2];
            let f = l && q.SubmenuItem,
                p;
            t[3] === f ? p = t[4] : (p = _(q.Item, f), t[3] = f, t[4] = p);
            let m = n ? `` : void 0,
                h = u ? `` : void 0,
                g;
            t[5] === i ? g = t[6] : (g = (0, J.jsx)(`div`, {
                className: q.IconSlot,
                children: (0, J.jsx)(En, {
                    item: i
                })
            }), t[5] = i, t[6] = g);
            let v;
            t[7] === i.label ? v = t[8] : (v = (0, J.jsx)(`div`, {
                className: q.Label,
                children: i.label
            }), t[7] = i.label, t[8] = v);
            let y;
            t[9] !== g || t[10] !== v ? (y = (0, J.jsxs)(`div`, {
                className: q.Row,
                children: [g, v]
            }), t[9] = g, t[10] = v, t[11] = y) : y = t[11];
            let b;
            t[12] === l ? b = t[13] : (b = l ? (0, J.jsx)(qe, {
                className: q.SubmenuChevron
            }) : null, t[12] = l, t[13] = b);
            let x;
            return t[14] !== n || t[15] !== a || t[16] !== o || t[17] !== y || t[18] !== b || t[19] !== d || t[20] !== p || t[21] !== m || t[22] !== h ? (x = (0, J.jsxs)(`div`, {
                id: d,
                role: `option`,
                "aria-selected": n,
                className: p,
                "data-active": m,
                "data-open": h,
                onClick: a,
                onMouseEnter: o,
                onPointerDown: On,
                children: [y, b]
            }), t[14] = n, t[15] = a, t[16] = o, t[17] = y, t[18] = b, t[19] = d, t[20] = p, t[21] = m, t[22] = h, t[23] = x) : x = t[23], x
        }, An = e => {
            "use forget";
            let t = (0, bn.c)(45),
                {
                    activeItemIds: n,
                    boundaryElement: r,
                    depth: i,
                    onCloseSubmenusFromDepth: a,
                    onHighlightItem: o,
                    onOpenSubmenu: s,
                    onSelect: c,
                    openSubmenuPath: l,
                    sections: d
                } = e,
                f = l.slice(0, i),
                p = l[i - 1] ?? null,
                m = Xt({
                    path: f,
                    sections: d
                }),
                h = r ?? void 0,
                g;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (g = it(Cn), t[0] = g) : g = t[0];
            let _;
            t[1] === h ? _ = t[2] : (_ = nt({
                boundary: h,
                padding: Cn
            }), t[1] = h, t[2] = _);
            let v;
            t[3] === h ? v = t[4] : (v = at({
                boundary: h,
                padding: Cn,
                apply(e) {
                    let {
                        availableHeight: t,
                        elements: n
                    } = e;
                    n.floating.style.setProperty(`--instructions-command-menu-available-height`, `${Math.max(0,t)}px`)
                }
            }), t[3] = h, t[4] = v);
            let y;
            t[5] !== _ || t[6] !== v ? (y = {
                middleware: [g, _, v],
                placement: `right-start`,
                strategy: `fixed`,
                whileElementsMounted: rt
            }, t[5] = _, t[6] = v, t[7] = y) : y = t[7];
            let {
                refs: b,
                floatingStyles: x
            } = st(y), S, C;
            t[8] !== i || t[9] !== p || t[10] !== b ? (S = () => {
                b.setReference(Tn({
                    itemId: p,
                    panelDepth: i - 1
                }))
            }, C = [i, p, b], t[8] = i, t[9] = p, t[10] = b, t[11] = S, t[12] = C) : (S = t[11], C = t[12]), u(S, C);
            let w, T;
            if (t[13] !== n || t[14] !== i ? (w = () => {
                    let e = n[i],
                        t = Tn({
                            itemId: e ?? null,
                            panelDepth: i
                        });
                    typeof t?.scrollIntoView == `function` && t.scrollIntoView({
                        block: `nearest`
                    })
                }, T = [n, i], t[13] = n, t[14] = i, t[15] = w, t[16] = T) : (w = t[15], T = t[16]), (0, xn.useEffect)(w, T), m.length === 0) return null;
            let E = Dn,
                ee = `instructions-command-submenu-${i}`,
                te = b.setFloating,
                D = Sn,
                O;
            t[17] !== n || t[18] !== i || t[19] !== a || t[20] !== o || t[21] !== s || t[22] !== c || t[23] !== l ? (O = e => {
                let t = (e.submenuItems?.length ?? 0) > 0;
                return (0, J.jsx)(kn, {
                    active: n[i] === e.id,
                    hasSubmenu: t,
                    onClick: () => {
                        if (t) {
                            s({
                                depth: i,
                                itemId: e.id
                            });
                            return
                        }
                        c(e.id)
                    },
                    onMouseEnter: () => {
                        o({
                            depth: i,
                            itemId: e.id
                        }), t ? s({
                            depth: i,
                            itemId: e.id
                        }) : a(i)
                    },
                    open: l[i] === e.id && t,
                    item: e,
                    panelDepth: i
                }, e.id)
            }, t[17] = n, t[18] = i, t[19] = a, t[20] = o, t[21] = s, t[22] = c, t[23] = l, t[24] = O) : O = t[24];
            let k = m.map(O),
                A;
            t[25] !== E || t[26] !== x || t[27] !== b.setFloating || t[28] !== ee || t[29] !== D || t[30] !== k ? (A = (0, J.jsx)(E, {
                floatingStyles: x,
                hasItems: !0,
                id: ee,
                innerRef: te,
                isSubmenu: !0,
                width: D,
                children: k
            }), t[25] = E, t[26] = x, t[27] = b.setFloating, t[28] = ee, t[29] = D, t[30] = k, t[31] = A) : A = t[31];
            let j;
            t[32] !== n || t[33] !== r || t[34] !== i || t[35] !== a || t[36] !== o || t[37] !== s || t[38] !== c || t[39] !== l || t[40] !== d ? (j = l[i] ? (0, J.jsx)(An, {
                activeItemIds: n,
                boundaryElement: r,
                depth: i + 1,
                onCloseSubmenusFromDepth: a,
                onHighlightItem: o,
                onOpenSubmenu: s,
                onSelect: c,
                openSubmenuPath: l,
                sections: d
            }) : null, t[32] = n, t[33] = r, t[34] = i, t[35] = a, t[36] = o, t[37] = s, t[38] = c, t[39] = l, t[40] = d, t[41] = j) : j = t[41];
            let M;
            return t[42] !== A || t[43] !== j ? (M = (0, J.jsxs)(J.Fragment, {
                children: [A, j]
            }), t[42] = A, t[43] = j, t[44] = M) : M = t[44], M
        }, jn = e => {
            "use forget";
            let t = (0, bn.c)(55),
                {
                    activeItemIds: n,
                    anchorRect: r,
                    boundaryElement: i,
                    emptyLabel: a,
                    onCloseSubmenusFromDepth: o,
                    onHighlightItem: s,
                    onOpenSubmenu: c,
                    onSelect: l,
                    openSubmenuPath: d,
                    sections: f
                } = e,
                p;
            t[0] === f ? p = t[1] : (p = Yt(f), t[0] = f, t[1] = p);
            let m = p.length > 0,
                h = i ?? void 0,
                g;
            t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (g = it({
                mainAxis: Cn,
                alignmentAxis: wn
            }), t[2] = g) : g = t[2];
            let _;
            t[3] === h ? _ = t[4] : (_ = ct({
                boundary: h,
                fallbackPlacements: [`top-start`],
                padding: Cn
            }), t[3] = h, t[4] = _);
            let v;
            t[5] === h ? v = t[6] : (v = nt({
                boundary: h,
                padding: Cn
            }), t[5] = h, t[6] = v);
            let y;
            t[7] === h ? y = t[8] : (y = at({
                boundary: h,
                padding: Cn,
                apply(e) {
                    let {
                        availableHeight: t,
                        elements: n
                    } = e;
                    n.floating.style.setProperty(`--instructions-command-menu-available-height`, `${Math.max(0,t)}px`)
                }
            }), t[7] = h, t[8] = y);
            let b;
            t[9] !== _ || t[10] !== v || t[11] !== y ? (b = {
                middleware: [g, _, v, y],
                placement: `bottom-start`,
                strategy: `fixed`,
                whileElementsMounted: rt
            }, t[9] = _, t[10] = v, t[11] = y, t[12] = b) : b = t[12];
            let {
                refs: x,
                floatingStyles: S
            } = st(b), C, w;
            t[13] !== r || t[14] !== x ? (C = () => {
                x.setReference({
                    getBoundingClientRect: () => new DOMRect(r.left, r.top, r.width, r.height)
                })
            }, w = [r, x], t[13] = r, t[14] = x, t[15] = C, t[16] = w) : (C = t[15], w = t[16]), u(C, w);
            let T;
            t[17] === n[0] ? T = t[18] : (T = () => {
                let e = Tn({
                    itemId: n[0] ?? null,
                    panelDepth: 0
                });
                typeof e?.scrollIntoView == `function` && e.scrollIntoView({
                    block: `nearest`
                })
            }, t[17] = n[0], t[18] = T);
            let E;
            t[19] === n ? E = t[20] : (E = [n], t[19] = n, t[20] = E), (0, xn.useEffect)(T, E);
            let ee = x.setFloating,
                te = m ? Sn : `auto`,
                D;
            if (t[21] !== n[0] || t[22] !== o || t[23] !== s || t[24] !== c || t[25] !== l || t[26] !== d[0] || t[27] !== f) {
                let e;
                t[29] !== n[0] || t[30] !== o || t[31] !== s || t[32] !== c || t[33] !== l || t[34] !== d[0] ? (e = (e, t) => (0, J.jsxs)(xn.Fragment, {
                    children: [t > 0 ? (0, J.jsx)(`div`, {
                        className: q.Separator
                    }) : null, e.title ? (0, J.jsx)(`div`, {
                        className: q.SectionTitle,
                        children: e.title
                    }) : null, e.items.map(e => {
                        let t = (e.submenuItems?.length ?? 0) > 0;
                        return (0, J.jsx)(kn, {
                            active: n[0] === e.id,
                            hasSubmenu: t,
                            onClick: () => {
                                if (t) {
                                    c({
                                        depth: 0,
                                        itemId: e.id
                                    });
                                    return
                                }
                                l(e.id)
                            },
                            onMouseEnter: () => {
                                s({
                                    depth: 0,
                                    itemId: e.id
                                }), t ? c({
                                    depth: 0,
                                    itemId: e.id
                                }) : o(0)
                            },
                            open: d[0] === e.id && t,
                            item: e,
                            panelDepth: 0
                        }, e.id)
                    })]
                }, e.key), t[29] = n[0], t[30] = o, t[31] = s, t[32] = c, t[33] = l, t[34] = d[0], t[35] = e) : e = t[35], D = f.map(e), t[21] = n[0], t[22] = o, t[23] = s, t[24] = c, t[25] = l, t[26] = d[0], t[27] = f, t[28] = D
            } else D = t[28];
            let O;
            t[36] !== a || t[37] !== S || t[38] !== m || t[39] !== x.setFloating || t[40] !== te || t[41] !== D ? (O = (0, J.jsx)(Dn, {
                emptyLabel: a,
                floatingStyles: S,
                hasItems: m,
                id: `instructions-command-menu`,
                innerRef: ee,
                width: te,
                children: D
            }), t[36] = a, t[37] = S, t[38] = m, t[39] = x.setFloating, t[40] = te, t[41] = D, t[42] = O) : O = t[42];
            let k;
            t[43] !== n || t[44] !== i || t[45] !== o || t[46] !== s || t[47] !== c || t[48] !== l || t[49] !== d || t[50] !== f ? (k = d[0] ? (0, J.jsx)(An, {
                activeItemIds: n,
                boundaryElement: i,
                depth: 1,
                onCloseSubmenusFromDepth: o,
                onHighlightItem: s,
                onOpenSubmenu: c,
                onSelect: l,
                openSubmenuPath: d,
                sections: f
            }) : null, t[43] = n, t[44] = i, t[45] = o, t[46] = s, t[47] = c, t[48] = l, t[49] = d, t[50] = f, t[51] = k) : k = t[51];
            let A;
            return t[52] !== O || t[53] !== k ? (A = (0, J.jsxs)(J.Fragment, {
                children: [O, k]
            }), t[52] = O, t[53] = k, t[54] = A) : A = t[54], A
        }
    }));

function Nn(e, t, n, r = {}) {
    if (e == null) return null;
    let i = (Array.isArray(n) ? n : [n]).filter(x);
    return t.nodes[e].createAndFill(r, i) ?? null
}
var Pn = e((() => {
        m()
    })),
    Fn, In, Ln, Rn, Y = e((() => {
        Fn = class {
            dependencies() {
                return []
            }
            unifiedInitializationHook(e) {
                return e
            }
        }, In = class extends Fn {
            unistToProseMirrorTest(e) {
                return e.type === this.unistNodeName()
            }
            proseMirrorInputRules(e) {
                return []
            }
            proseMirrorKeymap(e) {
                return {}
            }
            postUnistToProseMirrorHook(e) {}
        }, Ln = class extends In {
            proseMirrorToUnistTest(e) {
                return this.proseMirrorNodeName() === e.type.name
            }
            proseMirrorNodeView() {
                return null
            }
            proseMirrorNodeName() {
                let e = Reflect.get(this.constructor, `proseMirrorNodeName`);
                if (typeof e != `function`) throw Error(`Method not implemented.`);
                let t = e.call(this.constructor);
                if (typeof t != `string`) throw Error(`Method not implemented.`);
                return t
            }
            static proseMirrorNodeName() {
                throw Error(`Method not implemented.`)
            }
        }, Rn = class extends In {
            proseMirrorMarkName() {
                let e = Reflect.get(this.constructor, `proseMirrorMarkName`);
                if (typeof e != `function`) throw Error(`Method not implemented.`);
                let t = e.call(this.constructor);
                if (typeof t != `string`) throw Error(`Method not implemented.`);
                return t
            }
            static proseMirrorMarkName() {
                throw Error(`Method not implemented.`)
            }
        }
    }));

function zn(e) {
    return `children` in e
}
var Bn = e((() => {})),
    Vn, Hn = e((() => {
        Vn = `paragraph`
    }));

function Un(e) {
    let t = e.schema.nodes[Vn],
        n = e.doc.lastChild;
    return !t || !n || e.doc.childCount < 2 || n.type !== t || n.content.size !== 0 ? null : e.doc.childCount - 1
}

function Wn(e) {
    let t = [],
        {
            selection: n
        } = e,
        r = Un(e);
    return e.doc.forEach((e, r, i) => {
        let a = r,
            o = r + e.nodeSize;
        (n.empty ? n.from >= a && n.from <= o : n.from <= o && n.to >= a) && t.push({
            index: i,
            node: e,
            outerFrom: a,
            outerTo: o,
            from: r + 1,
            to: r + e.nodeSize - 1
        })
    }), t.length > 1 && r != null && t.at(-1)?.index === r && t.pop(), t
}

function Gn(e) {
    if (e.selection.empty) return e.selection instanceof K ? e.selection : null;
    let t = Wn(e);
    if (t.length === 0) return null;
    let n = t[0],
        r = t.at(-1) ?? n,
        i = Math.max(n.from, e.selection.from),
        a = Math.min(r.to, e.selection.to);
    return i > a ? null : K.create(e.doc, i, a)
}
var Kn = e((() => {
    R(), Hn()
}));

function qn(e, t, n) {
    if (!(e.selection instanceof K) || !e.selection.empty) return !1;
    let {
        $cursor: r
    } = e.selection;
    if (!r || r.depth < 2) return !1;
    let i = r.node(r.depth - 1);
    return i.type !== n.item || i.childCount !== 1 || r.parent.type !== n.paragraph || r.parent.content.size > 0 ? !1 : _e(n.item)(e, t) || Be(n.item)(e, t)
}

function Jn(e, t) {
    if (!(e.selection instanceof K) || !e.selection.empty) return null;
    let {
        $cursor: n
    } = e.selection;
    if (!n || n.depth !== 3 || n.parent.type !== t.paragraph) return null;
    let r = n.node(2),
        i = n.node(1);
    return r.type !== t.item || r.childCount !== 1 || r.firstChild?.type !== t.paragraph || i.type !== t.ordered && i.type !== t.bullet ? null : {
        $cursor: n,
        paragraph: n.parent,
        itemIndex: n.index(1),
        list: i,
        listIndex: n.index(0),
        listPos: n.before(1)
    }
}

function Yn(e, t) {
    if (!(e.selection instanceof K) || !e.selection.empty) return null;
    let {
        $cursor: n
    } = e.selection;
    if (!n || n.depth < 3 || n.parent.type !== t.paragraph) return null;
    let r = n.depth - 1,
        i = r - 1,
        a = n.node(i),
        o = n.node(r);
    return o.type !== t.item || a.type !== t.ordered && a.type !== t.bullet ? null : {
        $cursor: n,
        item: o,
        itemDepth: r,
        itemIndex: n.index(r - 1),
        itemPos: n.before(r),
        list: a,
        listPos: n.before(i)
    }
}

function Xn(e, t, n) {
    if (!(e.selection instanceof K) || !e.selection.empty) return !1;
    let {
        $cursor: r
    } = e.selection;
    if (!r || r.depth !== 1 || r.parent.type !== n.paragraph || r.parentOffset !== 0) return !1;
    let i = r.index(0);
    if (i === 0) return !1;
    let a = e.doc.child(i - 1);
    if (a.type !== n.ordered && a.type !== n.bullet) return !1;
    let o = a.lastChild;
    if (!o) return !1;
    let s = o?.firstChild;
    if (s?.type !== n.paragraph) return !1;
    let c = r.before(1);
    if (r.parent.content.size > 0) return t ? Ie(e, e => {
        let n = c + r.parent.nodeSize,
            i = e.mapping.map(n, -1);
        be(e.doc, i) && e.join(i), t(e)
    }) : Ie(e, t);
    let l = c - 1 - o.nodeSize + 2 + s.content.size,
        u = ir(e.doc, i, n.paragraph);
    if (t) {
        let n = e.tr;
        u || n.delete(c, c + r.parent.nodeSize), t(n.setSelection(K.create(n.doc, l)).scrollIntoView())
    }
    return !0
}

function Zn(e, t, n) {
    let r = Yn(e, n);
    if (!r || r.$cursor.parentOffset !== 0 || r.$cursor.index(r.itemDepth) === 0) return !1;
    let i = r.$cursor.before(r.$cursor.depth) - r.itemPos - 1,
        a = r.item.content.cut(0, i),
        o = r.item.content.cut(i + r.$cursor.parent.nodeSize),
        s = r.item.copy(a),
        c = r.itemPos - r.listPos - 1,
        l = r.list.content.cut(0, c).append(L.from(s)),
        u = r.list.content.cut(c + r.item.nodeSize),
        d = r.list.type.create(r.list.attrs, l),
        f = u.size > 0 ? r.list.type.create(r.list.attrs, u) : null,
        p = L.from(d).append(L.from(r.$cursor.parent)).append(o).append(f ? L.from(f) : L.empty);
    if (t) {
        let n = e.tr.replaceWith(r.listPos, r.listPos + r.list.nodeSize, p);
        t(n.setSelection(K.create(n.doc, r.listPos + d.nodeSize + 1)).scrollIntoView())
    }
    return !0
}

function Qn(e, t, n) {
    let r = Yn(e, n);
    if (!r || r.$cursor.parentOffset !== 0 || r.$cursor.index(r.itemDepth) !== 0) return !1;
    if (r.itemDepth === 2) return _e(n.item)(e, t);
    let i = r.itemPos - r.listPos - 1,
        a = r.list.content.cut(0, i),
        o = r.list.content.cut(i + r.item.nodeSize),
        s = a.size > 0 ? r.list.type.create(r.list.attrs, a) : null,
        c = o.size > 0 ? r.list.type.create(r.list.attrs, o) : null,
        l = L.empty.append(s ? L.from(s) : L.empty).append(r.item.content).append(c ? L.from(c) : L.empty);
    if (t) {
        let n = e.tr.replaceWith(r.listPos, r.listPos + r.list.nodeSize, l);
        t(n.setSelection(K.create(n.doc, r.listPos + (s?.nodeSize ?? 0) + 1)).scrollIntoView())
    }
    return !0
}

function $n(e, t) {
    let n = e.lastChild;
    return !n || n.type !== t.ordered && n.type !== t.bullet ? null : n
}

function er(e, t, n) {
    let r = Yn(e, n);
    if (!r) return je(n.item)(e, t);
    if (r.$cursor.index(r.itemDepth) > 0 || r.itemIndex === 0) return !0;
    let i = $n(r.item, n);
    if (!i) return je(n.item)(e, t);
    if (!t) return !0;
    let a = r.list.child(r.itemIndex - 1),
        o = r.itemPos - a.nodeSize,
        s = r.item.content.size - i.nodeSize,
        c = r.item.copy(r.item.content.cut(0, s)),
        l = L.from(c).append(i.content),
        u = $n(a, n),
        d, f;
    if (u?.type === r.list.type) {
        let e = o + 1 + a.content.size - u.nodeSize,
            t = a.content.cut(0, a.content.size - u.nodeSize),
            n = u.copy(u.content.append(l));
        d = e + 1 + u.content.size, f = a.copy(t.append(L.from(n)))
    } else {
        let e = o + 1 + a.content.size,
            t = r.list.type.create(r.list.attrs, l);
        d = e + 1, f = a.copy(a.content.append(L.from(t)))
    }
    let p = e.tr.replaceWith(o, r.itemPos + r.item.nodeSize, f);
    return t(p.setSelection(K.create(p.doc, d + 2)).scrollIntoView()), !0
}

function tr(e, t, n) {
    let r = Yn(e, n);
    return r && (r.$cursor.index(r.itemDepth) > 0 || r.itemDepth === 2) || _e(n.item)(e, t)
}

function nr(e, t) {
    let n = Jn(e, t);
    return !n || n.$cursor.parentOffset !== n.paragraph.content.size || n.paragraph.content.size === 0 || n.itemIndex !== n.list.childCount - 1 ? !1 : ir(e.doc, n.listIndex + 1, t.paragraph)
}

function rr(e, t, n) {
    return e === n.ordered && t === n.bullet || e === n.bullet && t === n.ordered
}

function ir(e, t, n) {
    if (t >= e.childCount) return !1;
    for (let r = t; r < e.childCount; r += 1) {
        let t = e.child(r);
        if (t.type !== n || t.content.size !== 0) return !1
    }
    return !0
}

function ar(e, t, n) {
    let r = Jn(e, n),
        i = e.doc.maybeChild((r?.listIndex ?? -1) + 1),
        a = i?.firstChild;
    if (!r || r.$cursor.parentOffset !== r.paragraph.content.size || r.itemIndex !== r.list.childCount - 1 || !i || !a || !rr(r.list.type, i.type, n)) return !1;
    let o = e,
        s = e => {
            o = o.apply(e), t && t(e)
        },
        c = r.listPos + r.list.nodeSize;
    return i.childCount > 1 && s(o.tr.split(c + 1 + a.nodeSize, 1)), s(o.tr.setNodeMarkup(c, r.list.type, r.list.attrs)), Me(o, s) && Me(o, s) && Me(o, s)
}
var or, sr = e((() => {
        Ve(), G(), H(), R(), Oe(), Pn(), Y(), or = class extends Ln {
            unistNodeName() {
                return `listItem`
            }
            static proseMirrorNodeName() {
                return `regular_list_item`
            }
            proseMirrorNodeSpec() {
                return {
                    content: `paragraph block*`,
                    defining: !0,
                    group: `list_item`,
                    parseDOM: [{
                        tag: `li`
                    }],
                    toDOM() {
                        return [`li`, 0]
                    }
                }
            }
            unistToProseMirrorTest(e) {
                return e.type === this.unistNodeName()
            }
            proseMirrorKeymap(e) {
                let t = {
                        item: e.nodes[this.proseMirrorNodeName()],
                        paragraph: e.nodes.paragraph,
                        ordered: e.nodes.ordered_list,
                        bullet: e.nodes.list
                    },
                    n = Be(t.item);
                return {
                    Enter: n,
                    "Shift-Enter": n,
                    "Alt-Enter": n,
                    Backspace: (e, n) => qn(e, n, t) || Xn(e, n, t) || Zn(e, n, t) || Qn(e, n, t),
                    Delete: (e, n) => qn(e, n, t) || ar(e, n, t) || nr(e, t),
                    "Shift-Tab": (e, n) => tr(e, n, t),
                    Tab: (e, n) => er(e, n, t)
                }
            }
            unistNodeToProseMirrorNodes({
                schema: e,
                convertedChildren: t,
                attrs: n
            }) {
                return Nn(this.proseMirrorNodeName(), e, t, n)
            }
            proseMirrorNodeToUnistNodes(e, t) {
                return [{
                    type: this.unistNodeName(),
                    children: t
                }]
            }
        }
    })),
    cr, lr, ur, dr, fr = e((() => {
        Ve(), H(), cr = (e, t) => {
            let n = t.filter(e => e != null);
            if (n.length === 0) return !1;
            let {
                $from: r
            } = e.selection, i = new Set(n);
            for (let e = r.depth; e >= 0; e--)
                if (i.has(r.node(e).type)) return !0;
            return !1
        }, lr = (e, t, n, r = []) => {
            if (!n) return !0;
            let i = dr(r);
            if (i.length === 0) return !0;
            for (; cr(e(), i);)
                if (!_e(n)(e(), t)) return !1;
            return !0
        }, ur = (e, t, n) => !n || cr(e(), [n]) ? !0 : He(n)(e(), t), dr = e => e.filter(e => e != null)
    })),
    pr, mr, hr, gr = e((() => {
        Kn(), Ve(), Pn(), Y(), sr(), Hn(), fr(), pr = {
            content: `inline*`,
            group: `block`,
            parseDOM: [{
                tag: `p`
            }],
            toDOM() {
                return [`p`, 0]
            }
        }, mr = `paragraph`, hr = class e extends Ln {
            static paragraphStyleCommand(t) {
                return (n, r) => {
                    let i = t.nodes[e.proseMirrorNodeName()],
                        a = t.nodes.ordered_list,
                        o = t.nodes.list,
                        s = t.nodes[or.proseMirrorNodeName()];
                    if (!i) return !1;
                    let c = n,
                        l = () => c,
                        u = e => {
                            c = c.apply(e), r && r(e)
                        };
                    if (!lr(l, u, s, [a, o])) return !1;
                    let d = Gn(l());
                    return d && u(l().tr.setSelection(d)), He(i)(l(), u)
                }
            }
            unistNodeName() {
                return mr
            }
            static proseMirrorNodeName() {
                return Vn
            }
            proseMirrorNodeSpec() {
                return pr
            }
            proseMirrorKeymap(t) {
                return {
                    "Alt-Mod-0": e.paragraphStyleCommand(t)
                }
            }
            unistNodeToProseMirrorNodes({
                schema: e,
                convertedChildren: t,
                attrs: n
            }) {
                return Nn(this.proseMirrorNodeName(), e, t, n)
            }
            proseMirrorNodeToUnistNodes(e, t) {
                return [{
                    type: this.unistNodeName(),
                    children: t
                }]
            }
        }
    }));

function _r(e) {
    return e.type === yr
}

function vr() {
    let e = this.data();
    e.fromMarkdownExtensions ??= [], e.fromMarkdownExtensions.push({
        enter: {
            lineEndingBlank(e) {
                this.enter({
                    type: yr
                }, e)
            }
        },
        exit: {
            lineEndingBlank(e) {
                this.exit(e)
            }
        }
    });
    let t = (e, n = 0) => {
        if (!zn(e)) return;
        let {
            children: r
        } = e, i = 0, a = null, o = null, s = r.length;
        for (let c = 0; c < s; c++) {
            let l = r[c - i];
            t(l, n + 1);
            let {
                type: u
            } = l, d = c === s - 1 && u === yr;
            if (u === yr && a == null ? a = c : u !== yr && a != null ? o = c : d && a != null && (o = c + 1), a != null && o != null) {
                let t = br({
                    startIndex: a,
                    endIndex: o,
                    depth: n,
                    isLastChild: d,
                    parent: e
                });
                r.splice(a - i, t), a = null, o = null, i += t
            }
        }
    };
    return e => {
        t(e)
    }
}
var yr, br, xr, Sr = e((() => {
    Pn(), Y(), Bn(), gr(), yr = `lineEndingBlank`, br = ({
        startIndex: e,
        endIndex: t,
        depth: n,
        isLastChild: r,
        parent: i = null
    }) => {
        let a = t - e;
        return n > 0 && i?.type !== `list` ? a : r || e === 0 ? a - Math.floor((a + 1) / 2) : a - Math.floor((a - 1) / 2)
    }, xr = class extends Ln {
        unistNodeName() {
            return yr
        }
        static proseMirrorNodeName() {
            return `paragraph`
        }
        proseMirrorNodeSpec() {
            return pr
        }
        unistNodeToProseMirrorNodes({
            schema: e,
            convertedChildren: t,
            attrs: n
        }) {
            return Nn(this.proseMirrorNodeName(), e, t, n)
        }
        proseMirrorNodeToUnistNodes(e, t) {
            return [{
                type: mr,
                children: t
            }]
        }
        unifiedInitializationHook(e) {
            return e.use(vr)
        }
    }
}));

function Cr(e, t) {
    if (!(e == null || t == null)) return {
        start: {
            ...e
        },
        end: {
            ...t
        }
    }
}

function wr(e) {
    return e?.type === `list` && `ordered` in e && e.ordered !== !0
}

function Tr(e) {
    return `children` in e && Array.isArray(e.children)
}

function Er(e) {
    if (Tr(e)) {
        for (let t of e.children) Er(t);
        for (let t = 1; t < e.children.length;) {
            let n = e.children[t - 1],
                r = e.children[t];
            if (!wr(n) || !wr(r)) {
                t += 1;
                continue
            }
            n.children.push(...r.children), n.spread = n.spread || r.spread, n.position = Cr(n.position?.start, r.position?.end), e.children.splice(t, 1)
        }
    }
}
var Dr, Or = e((() => {
        Sr(), b(), S(), fe(), Dr = () => e => {
            F(e, `list`, (e, t, n) => {
                if (n == null || t == null) return;
                let r = [],
                    i = [],
                    a = 0;
                for (; a < e.children.length;) {
                    let t = e.children[a];
                    if (_r(t)) {
                        let t = [];
                        for (; a < e.children.length && _r(e.children[a]);) {
                            let n = e.children[a];
                            if (!_r(n)) break;
                            t.push(n), a++
                        }
                        if (i.length === 0) throw Error(`Unexpected state: currentListItems is empty after encountering blank lines.`);
                        let n = i[0],
                            o = f(p(i)),
                            s = Cr(n.position?.start ?? e.position?.start, o.position?.end ?? e.position?.end),
                            c = {
                                type: `list`,
                                ordered: e.ordered,
                                start: e.start,
                                spread: e.spread,
                                children: i,
                                position: s
                            };
                        r.push(c), i = [], r.push(...t.map(e => ({
                            type: `lineEndingBlank`,
                            position: e.position
                        })))
                    } else i.push(t), a++
                }
                if (i.length > 0) {
                    let t = i[0],
                        n = i[i.length - 1],
                        a = Cr(t.position?.start ?? e.position?.start, n.position?.end ?? e.position?.end),
                        o = {
                            type: `list`,
                            ordered: e.ordered,
                            start: e.start,
                            spread: e.spread,
                            children: i,
                            position: a
                        };
                    r.push(o)
                }
                n.children.splice(t, 1, ...r)
            }), Er(e)
        }
    })),
    kr, Ar = e((() => {
        Nt(), N(), Or(), kr = [
            [re, {
                singleTilde: !0
            }], Pt, Dr
        ]
    })),
    jr, Mr = e((() => {
        jr = `startend`
    })),
    Nr, Pr = e((() => {
        m(), v(), Ve(), Mr(), Y(), Nr = class extends Ln {
            unistNodeName() {
                return `break`
            }
            static proseMirrorNodeName() {
                return `hard_break`
            }
            proseMirrorNodeSpec() {
                return {
                    inline: !0,
                    group: `inline`,
                    selectable: !1,
                    parseDOM: [{
                        tag: `br`
                    }],
                    marks: jr,
                    toDOM() {
                        return [`br`]
                    }
                }
            }
            proseMirrorKeymap(e) {
                let t = Fe(Pe, (t, n) => (n && n(t.tr.replaceSelectionWith(e.nodes[this.proseMirrorNodeName()].create()).scrollIntoView()), !0));
                return {
                    "Mod-Enter": t,
                    ...(g() || a()) && {
                        "Ctrl-Enter": t
                    }
                }
            }
            unistNodeToProseMirrorNodes({
                schema: e,
                convertedChildren: t,
                attrs: n
            }) {
                return e.nodes[this.proseMirrorNodeName()].createAndFill(n, t.filter(x))
            }
            proseMirrorNodeToUnistNodes() {
                return [{
                    type: this.unistNodeName()
                }]
            }
        }
    }));

function Fr(e, t, n, r) {
    for (let i = 0; i < t.length; i++) {
        let {
            $from: a,
            $to: o
        } = t[i], s = a.depth === 0 && e.inlineContent && e.type.allowsMarkType(n);
        if (e.nodesBetween(a.pos, o.pos, (e, t) => {
                if (s || !r && e.isAtom && e.isInline && t >= a.pos && t + e.nodeSize <= o.pos) return !1;
                s = e.inlineContent && e.type.allowsMarkType(n)
            }), s) return !0
    }
    return !1
}
var Ir = e((() => {}));

function Lr(e) {
    let t = Gn(e);
    if (!t) return null;
    let n = e.doc.textBetween(t.from, t.to, `
`, `
`),
        r = n.match(/^\s*/)?.[0].length ?? 0,
        i = n.match(/\s*$/)?.[0].length ?? 0,
        a = t.from + r,
        o = t.to - i;
    return a < o ? {
        from: a,
        to: o
    } : null
}

function Rr(e, t) {
    if (e.selection.empty) return (e.storedMarks ?? e.selection.$from.marks()).some(e => e.type === t);
    let n = Lr(e);
    if (!n) return !1;
    let r = !1,
        i = !0;
    return e.doc.nodesBetween(n.from, n.to, e => !e.isText || !(e.text ?? ``).trim() ? !0 : (r = !0, e.marks.some(e => e.type === t) ? !0 : (i = !1, !1))), r && i
}
var zr = e((() => {
        Kn()
    })),
    Br, Vr = e((() => {
        Y(), Br = class extends Rn {
            unistNodeName() {
                return `startend`
            }
            static proseMirrorMarkName() {
                return `startend`
            }
            proseMirrorMarkSpec() {
                return {
                    attrs: {
                        start: {},
                        end: {}
                    },
                    toDOM() {
                        return [`span`, 0]
                    }
                }
            }
            unistNodeToProseMirrorNodes({
                schema: e,
                convertedChildren: t,
                attrs: n
            }) {
                return t.map(t => t.mark(t.marks.concat([e.marks[this.proseMirrorMarkName()].create(n)])))
            }
            processConvertedUnistNode(e) {
                return {
                    type: this.unistNodeName(),
                    children: [e]
                }
            }
        }
    }));

function Hr(e) {
    return /^\s*/.exec(e)?.[0]?.length ?? 0
}

function Ur(e) {
    return /\s*$/.exec(e)?.[0]?.length ?? 0
}

function Wr(e, t, n) {
    for (; t > 0;) {
        let r = t - 1;
        if (!e.rangeHasMark(r, t, n)) break;
        t = r
    }
    return t
}

function Gr(e, t, n) {
    for (; t < e.content.size && e.rangeHasMark(t, t + 1, n);) t += 1;
    return t
}

function Kr(e, t, n, r = null) {
    let i = e.tr,
        a = e;
    if (!e.selection.empty) {
        let t = Gn(e);
        if (!t) return !1;
        (!(e.selection instanceof K) || !e.selection.eq(t)) && (i = i.setSelection(t), a = e.apply(i))
    }
    let {
        selection: o
    } = a;
    if (!(o instanceof K)) return !1;
    let {
        empty: s,
        $cursor: c,
        ranges: l
    } = o;
    if (s && !c || !Fr(a.doc, l, n, !0)) return !1;
    if (c) n.isInSet(a.storedMarks || c.marks()) ? t(i.removeStoredMark(n)) : t(i.addStoredMark(n.create(r)));
    else {
        let e = Rr(a, n);
        for (let t = 0; t < l.length; t++) {
            let {
                $from: o,
                $to: s
            } = l[t], c = o.pos, u = s.pos, d = a.doc.textBetween(c, u, `
`);
            if (/^\s*$/.test(d)) continue;
            let f = o.nodeBefore?.text ?? ``,
                p = o.nodeAfter?.text ?? ``,
                m = s.nodeBefore?.text ?? ``,
                h = s.nodeAfter?.text ?? ``;
            if (e) {
                let e = Ur(f),
                    t = Hr(h);
                c -= e, u += t, i.removeMark(c, u, n)
            } else {
                let e = Hr(p),
                    t = Ur(m);
                c + e < u && (c += e, u -= t), c = Wr(a.doc, c, n), u = Gr(a.doc, u, n), i.removeMark(c, u, a.schema.marks[Br.proseMirrorMarkName()]), i.addMark(c, u, n.create(r))
            }
        }
        t(i.scrollIntoView())
    }
    return !0
}

function qr(e, t = null) {
    return (n, r) => !r || Kr(n, r, e, t)
}
var Jr = e((() => {
        R(), Ir(), zr(), Vr(), Kn()
    })),
    Yr, Xr = e((() => {
        Se(), R(), c(), Yr = class e extends ye {
            constructor(e, t, n = {}) {
                super(e, (e, t, n, r) => this.markHandler(e, t, n, r)), d(this, `markType`, void 0), d(this, `matchStartOffset`, void 0), d(this, `textGroup`, void 0), d(this, `trailingTextGroup`, void 0), this.markType = t, this.matchStartOffset = n.matchStartOffset ?? (() => 0), this.textGroup = n.textGroup ?? 1, this.trailingTextGroup = n.trailingTextGroup === void 0 ? 2 : n.trailingTextGroup
            }
            static markApplies(e, t, n) {
                for (let r of t) {
                    let {
                        $from: t,
                        $to: i
                    } = r, a = t.depth === 0 && e.type.allowsMarkType(n);
                    if (e.nodesBetween(t.pos, i.pos, e => a ? !1 : (a = e.inlineContent && e.type.allowsMarkType(n), !0)), a) return !0
                }
                return !1
            }
            static isEscaped(e, t) {
                return t <= 0 ? !1 : (e.textBetween(Math.max(0, t - 8), t, `
`, `
`).match(/\\+$/)?.[0].length ?? 0) % 2 == 1
            }
            markHandler(t, n, r, i) {
                if (!(t.selection instanceof K)) return null;
                let a = r + this.matchStartOffset(n),
                    o = n[this.textGroup];
                if (typeof o != `string` || e.isEscaped(t.doc, a)) return null;
                let s = [new Ce(t.doc.resolve(a), t.doc.resolve(i))];
                if (!e.markApplies(t.doc, s, this.markType)) return null;
                let c = t.doc.nodeAt(a)?.marks.map(e => e.type) ?? [];
                c.push(this.markType);
                let l = t.tr.replaceWith(a, i, this.markType.schema.text(o));
                for (let e of c) l.addMark(l.mapping.map(a), l.mapping.map(i), e.create(null));
                for (let e of c) l.removeStoredMark(e);
                let u = this.trailingTextGroup == null ? void 0 : n[this.trailingTextGroup];
                return typeof u != `string` || u.length === 0 ? l : l.insertText(u)
            }
        }
    }));

function Zr(e, t) {
    let n = [],
        r = [];
    for (let t of e.marks) {
        if (t.type.name === Qr) {
            n.push(t);
            continue
        }
        r.push(t)
    }
    return e.mark([...r, t, ...n])
}
var Qr, $r = e((() => {
        Vr(), Qr = Br.proseMirrorMarkName()
    })),
    ei, ti = e((() => {
        Jr(), Y(), Xr(), $r(), ei = class extends Rn {
            unistNodeName() {
                return `strong`
            }
            static proseMirrorMarkName() {
                return `strong`
            }
            proseMirrorMarkSpec() {
                return {
                    parseDOM: [{
                        tag: `b`
                    }, {
                        tag: `strong`
                    }, {
                        style: `font-weight`,
                        getAttrs: e => /^(bold(er)?|[5-9]\d{2,})$/.test(e) && null
                    }],
                    toDOM() {
                        return [`strong`]
                    }
                }
            }
            proseMirrorInputRules(e) {
                return [new Yr(/\*\*([^\s](?:.*[^\s])?)\*\*$/, e.marks[this.proseMirrorMarkName()]), new Yr(/__([^\s](?:.*[^\s])?)__$/, e.marks[this.proseMirrorMarkName()])]
            }
            proseMirrorKeymap(e) {
                let t = e.marks[this.proseMirrorMarkName()];
                return {
                    "Mod-b": qr(t),
                    "Mod-B": qr(t)
                }
            }
            unistNodeToProseMirrorNodes({
                schema: e,
                convertedChildren: t,
                attrs: n
            }) {
                return t.map(t => Zr(t, e.marks[this.proseMirrorMarkName()].create(n)))
            }
            processConvertedUnistNode(e) {
                return {
                    type: this.unistNodeName(),
                    children: [e]
                }
            }
        }
    })),
    ni, ri = e((() => {
        Mr(), Y(), ni = class extends Ln {
            unistNodeName() {
                return `text`
            }
            static proseMirrorNodeName() {
                return `text`
            }
            proseMirrorNodeSpec() {
                return {
                    group: `inline`
                }
            }
            unistNodeToProseMirrorNodes({
                node: e,
                schema: t,
                attrs: n
            }) {
                if (e.value.length === 0) return null;
                let r = t.marks.startend?.create(n) ?? null,
                    i = r ? [r] : [];
                return t.text(e.value, i)
            }
            proseMirrorNodeToUnistNodes(e) {
                return [{
                    type: this.unistNodeName(),
                    value: e.text ?? ``
                }]
            }
        }
    }));

function ii(e) {
    return typeof e == `number` && e >= 3 ? 3 : e === 2 ? 2 : 1
}
var ai, oi = e((() => {
        Kn(), Ve(), Se(), Pn(), Y(), gr(), ri(), fr(), ai = class e extends Ln {
            static clearEmptyHeadingCommand(e) {
                return (t, n) => {
                    if (!t.selection.empty) return !1;
                    let {
                        $anchor: r
                    } = t.selection, i = r.parent;
                    if (i.type.name !== `heading` || i.content.size > 0) return !1;
                    let a = e.nodes.paragraph;
                    return a ? (n === void 0 || n(t.tr.setNodeMarkup(r.before(r.depth), a)), !0) : !1
                }
            }
            static headingStyleCommand(e, t) {
                return (n, r) => {
                    let i = e.nodes[this.proseMirrorNodeName()];
                    if (!i) return !1;
                    let a = e.nodes.ordered_list,
                        o = e.nodes.list,
                        s = e.nodes.regular_list_item,
                        c = n,
                        l = () => c,
                        u = e => {
                            c = c.apply(e), r && r(e)
                        };
                    if (!lr(l, u, s, [a, o])) return !1;
                    let d = Gn(l());
                    return d && u(l().tr.setSelection(d)), He(i, {
                        level: t
                    })(l(), u)
                }
            }
            dependencies() {
                return [new hr, new ni]
            }
            unistNodeName() {
                return `heading`
            }
            static proseMirrorNodeName() {
                return `heading`
            }
            proseMirrorNodeSpec() {
                return {
                    attrs: {
                        level: {
                            default: 1
                        }
                    },
                    content: `text*`,
                    group: `block`,
                    defining: !0,
                    parseDOM: [{
                        tag: `h1`,
                        attrs: {
                            level: 1
                        }
                    }, {
                        tag: `h2`,
                        attrs: {
                            level: 2
                        }
                    }, {
                        tag: `h3`,
                        attrs: {
                            level: 3
                        }
                    }],
                    toDOM(e) {
                        return [`h` + ii(e.attrs.level).toString(), 0]
                    }
                }
            }
            proseMirrorInputRules(e) {
                return [xe(/^\s{0,3}(#{1,3})\s$/, e.nodes[this.proseMirrorNodeName()], e => ({
                    level: e[1].length
                }))]
            }
            proseMirrorKeymap(t) {
                let n = e.clearEmptyHeadingCommand(t);
                return {
                    Backspace: n,
                    Delete: n,
                    "Alt-Mod-1": e.headingStyleCommand(t, 1),
                    "Alt-Mod-2": e.headingStyleCommand(t, 2),
                    "Alt-Mod-3": e.headingStyleCommand(t, 3)
                }
            }
            unistNodeToProseMirrorNodes({
                node: e,
                schema: t,
                convertedChildren: n,
                attrs: r
            }) {
                return Nn(this.proseMirrorNodeName(), t, n, {
                    ...r,
                    level: ii(e.depth)
                })
            }
            proseMirrorNodeToUnistNodes(e, t) {
                return [{
                    type: this.unistNodeName(),
                    depth: ii(e.attrs.level),
                    children: t
                }]
            }
        }
    })),
    si, ci = e((() => {
        Mr(), Jr(), Y(), Xr(), si = class extends Rn {
            unistNodeName() {
                return `inlineCode`
            }
            static proseMirrorMarkName() {
                return `code`
            }
            proseMirrorMarkSpec() {
                return {
                    inclusive: !1,
                    parseDOM: [{
                        tag: `code`
                    }],
                    toDOM() {
                        return [`code`]
                    }
                }
            }
            proseMirrorInputRules(e) {
                return [new Yr(/`([^\s](?:.*[^\s])?)`$/, e.marks[this.proseMirrorMarkName()])]
            }
            proseMirrorKeymap(e) {
                let t = e.marks[this.proseMirrorMarkName()];
                return {
                    "Ctrl-`": qr(t)
                }
            }
            unistNodeToProseMirrorNodes({
                node: e,
                schema: t,
                attrs: n
            }) {
                if (e.value.length > 0) {
                    let r = t.marks.startend?.create(n) ?? null,
                        i = [...r ? [r] : [], t.marks[this.proseMirrorMarkName()].create(n)];
                    return [t.text(e.value, i)]
                }
                return []
            }
            processConvertedUnistNode(e) {
                return {
                    type: this.unistNodeName(),
                    value: e.value
                }
            }
        }
    })),
    li, ui, di, fi, pi, mi, hi, gi, _i = e((() => {
        Mt(), A(), Pn(), Y(), li = `instructionsMention`, ui = `instructions_mention`, di = e => {
            switch (e) {
                case `image_generation`:
                    return gi.imageGenerationTooltip;
                case `web_search`:
                    return gi.webSearchTooltip;
                case `app`:
                case `file`:
                case `file_persistence`:
                case `skill`:
                case `slack_channel`:
                    return ``
            }
        }, fi = ({
            kind: e,
            mentionId: t,
            mentionType: n
        }) => At({
            mentionId: typeof t == `string` ? t : void 0,
            value: String(e ?? n ?? ``)
        }) ?? `app`, pi = ({
            kind: e,
            mentionId: t
        }) => {
            switch (e) {
                case `app`:
                    return `/connectors/${t}`;
                case `file`:
                    return `/files/${t}`;
                case `file_persistence`:
                    return `/memory`;
                case `image_generation`:
                    return ``;
                case `skill`:
                    return `/skills/${t}`;
                case `slack_channel`:
                    return `/channels/slack/${t}`;
                case `web_search`:
                    return ``
            }
        }, mi = {
            inline: !0,
            group: `inline`,
            atom: !0,
            selectable: !0,
            marks: ``,
            attrs: {
                isLoading: {
                    default: !1
                },
                isMissing: {
                    default: !1
                },
                kind: {
                    default: `unknown`
                },
                label: {},
                mentionId: {}
            },
            toDOM(e) {
                let t = String(e.attrs.mentionId ?? ``);
                if (t.length === 0) {
                    let t = document.createElement(`span`);
                    return t.textContent = String(e.attrs.label ?? ``), {
                        dom: t
                    }
                }
                let n = fi({
                        kind: e.attrs.kind ?? e.attrs.mentionType,
                        mentionId: t
                    }),
                    r = !!e.attrs.isLoading,
                    i = !!e.attrs.isMissing,
                    a = i ? `` : pi({
                        kind: n,
                        mentionId: t
                    }),
                    o = String(e.attrs.label),
                    s = document.createElement(`span`);
                s.setAttribute(`aria-label`, r ? `Loading mentioned item` : i ? `Missing mentioned item: ${o}` : `Mentioned item: ${o}`), s.contentEditable = `false`, s.dataset.instructionsMentionNode = ``, s.dataset.mentionId = t, s.dataset.mentionKind = n, r && (s.ariaBusy = `true`, s.dataset.loading = ``), i ? s.dataset.missing = `` : a.length > 0 && (s.dataset.detailPath = a);
                let c = document.createElement(`span`);
                c.ariaHidden = `true`, c.dataset.instructionsMentionIcon = ``, r && (c.dataset.loading = ``), s.append(c);
                let l = document.createElement(`span`);
                l.dataset.instructionsMention = ``, l.textContent = o, s.append(l);
                let u = document.createElement(`span`);
                return u.dataset.instructionsMentionTooltip = ``, s.append(u), {
                    dom: s
                }
            }
        }, hi = class extends Ln {
            unistNodeName() {
                return li
            }
            static proseMirrorNodeName() {
                return ui
            }
            proseMirrorNodeSpec() {
                return mi
            }
            unistNodeToProseMirrorNodes({
                schema: e,
                node: t,
                attrs: n
            }) {
                let r = At({
                    mentionId: t.mentionId,
                    value: t.mentionType
                }) ?? `app`;
                return Nn(this.proseMirrorNodeName(), e, null, {
                    ...n,
                    isLoading: !1,
                    isMissing: !1,
                    kind: r,
                    label: t.label,
                    mentionId: t.mentionId
                })
            }
            proseMirrorNodeToUnistNodes(e) {
                let t = fi(e.attrs);
                return [{
                    type: this.unistNodeName(),
                    label: String(e.attrs.label),
                    mentionId: String(e.attrs.mentionId),
                    mentionType: t
                }]
            }
        }, gi = k({
            imageGenerationTooltip: {
                id: `Hermes.GptStudio.Builder.InstructionsMentionTooltip.imageGeneration`,
                defaultMessage: `Create and edit images`
            },
            webSearchTooltip: {
                id: `Hermes.GptStudio.Builder.InstructionsMentionTooltip.webSearch`,
                defaultMessage: `Search the web for current information`
            }
        })
    })),
    vi, yi = e((() => {
        Jr(), Y(), Xr(), $r(), vi = class extends Rn {
            unistNodeName() {
                return `emphasis`
            }
            static proseMirrorMarkName() {
                return `em`
            }
            proseMirrorMarkSpec() {
                return {
                    parseDOM: [{
                        tag: `i`
                    }, {
                        tag: `em`
                    }, {
                        style: `font-style`,
                        getAttrs: e => e === `italic` && null
                    }],
                    toDOM() {
                        return [`em`]
                    }
                }
            }
            proseMirrorInputRules(e) {
                return [new Yr(/(^|[^*])\*([^\s*](?:.*[^\s])?)\*$/, e.marks[this.proseMirrorMarkName()], {
                    matchStartOffset: e => e[1].length,
                    textGroup: 2,
                    trailingTextGroup: null
                }), new Yr(/(^|[^_])_([^\s_](?:.*[^\s])?)_$/, e.marks[this.proseMirrorMarkName()], {
                    matchStartOffset: e => e[1].length,
                    textGroup: 2,
                    trailingTextGroup: null
                })]
            }
            proseMirrorKeymap(e) {
                let t = e.marks[this.proseMirrorMarkName()];
                return {
                    "Mod-i": qr(t),
                    "Mod-I": qr(t)
                }
            }
            unistNodeToProseMirrorNodes({
                schema: e,
                convertedChildren: t,
                attrs: n
            }) {
                return t.map(t => Zr(t, e.marks[this.proseMirrorMarkName()].create(n)))
            }
            processConvertedUnistNode(e) {
                return {
                    type: this.unistNodeName(),
                    children: [e]
                }
            }
        }
    }));

function bi(e) {
    return e.type === `list` && `ordered` in e
}

function xi(e) {
    return e instanceof HTMLElement ? {
        spread: e.getAttribute(`data-spread`) === `true`
    } : {
        spread: !1
    }
}

function Si(e) {
    return e.attrs.spread === !0
}
var Ci, wi = e((() => {
    H(), Pn(), Y(), sr(), gr(), fr(), Ci = class e extends Ln {
        static unorderedListCommand(e) {
            return (t, n) => {
                let r = e.nodes[this.proseMirrorNodeName()],
                    i = e.nodes.ordered_list,
                    a = e.nodes[or.proseMirrorNodeName()],
                    o = e.nodes[hr.proseMirrorNodeName()];
                if (!r) return !1;
                let s = t,
                    c = () => s,
                    l = e => {
                        s = s.apply(e), n && n(e)
                    };
                return cr(c(), [r]) ? lr(c, l, a, [i, r]) : !lr(c, l, a, [i]) || !ur(c, l, o) ? !1 : ze(r)(c(), l)
            }
        }
        dependencies() {
            return [new or]
        }
        unistNodeName() {
            return `list`
        }
        unistToProseMirrorTest(e) {
            return bi(e) && e.ordered !== !0
        }
        static proseMirrorNodeName() {
            return `list`
        }
        proseMirrorNodeSpec() {
            return {
                content: `list_item+`,
                group: `block`,
                attrs: {
                    spread: {
                        default: !1
                    }
                },
                parseDOM: [{
                    getAttrs: xi,
                    tag: `ul`
                }],
                toDOM(e) {
                    return [`ul`, {
                        "data-spread": Si(e)
                    }, 0]
                }
            }
        }
        proseMirrorKeymap(t) {
            let n = e.unorderedListCommand(t);
            return {
                "Shift-Mod-8": n,
                "Alt-Mod-5": n
            }
        }
        unistNodeToProseMirrorNodes({
            node: e,
            schema: t,
            convertedChildren: n,
            attrs: r
        }) {
            let {
                spread: i
            } = e;
            return Nn(this.proseMirrorNodeName(), t, n, {
                ...r,
                spread: i
            })
        }
        proseMirrorNodeToUnistNodes(e, t) {
            let n = Si(e);
            return [{
                type: this.unistNodeName(),
                ordered: !1,
                spread: n,
                children: t.map(e => (e.spread = n, e))
            }]
        }
    }
}));

function Ti(e) {
    return e.type === `list` && `ordered` in e
}

function Ei(e) {
    if (!(e instanceof HTMLElement)) return {
        spread: !1,
        startingNumber: 1
    };
    let t = e.getAttribute(`start`);
    return {
        spread: e.getAttribute(`data-spread`) === `true`,
        startingNumber: t == null ? 1 : parseInt(t, 10)
    }
}

function Di(e) {
    return e.attrs.spread === !0
}

function Oi(e) {
    return typeof e.attrs.startingNumber == `number` ? e.attrs.startingNumber : 1
}
var ki, Ai = e((() => {
        H(), Pn(), Y(), sr(), gr(), fr(), wi(), ki = class e extends Ln {
            static orderedListCommand(e) {
                return (t, n) => {
                    let r = e.nodes[this.proseMirrorNodeName()],
                        i = e.nodes[Ci.proseMirrorNodeName()],
                        a = e.nodes[or.proseMirrorNodeName()],
                        o = e.nodes[hr.proseMirrorNodeName()];
                    if (!r) return !1;
                    let s = t,
                        c = () => s,
                        l = e => {
                            s = s.apply(e), n && n(e)
                        };
                    return cr(c(), [r]) ? lr(c, l, a, [r, i]) : !lr(c, l, a, [i]) || !ur(c, l, o) ? !1 : ze(r)(c(), l)
                }
            }
            dependencies() {
                return [new or]
            }
            unistNodeName() {
                return `list`
            }
            unistToProseMirrorTest(e) {
                return Ti(e) && e.ordered === !0
            }
            static proseMirrorNodeName() {
                return `ordered_list`
            }
            proseMirrorNodeSpec() {
                return {
                    content: `list_item+`,
                    group: `block`,
                    attrs: {
                        spread: {
                            default: !1
                        },
                        startingNumber: {
                            default: 1
                        }
                    },
                    parseDOM: [{
                        getAttrs: Ei,
                        tag: `ol`
                    }],
                    toDOM(e) {
                        return [`ol`, {
                            "data-spread": Di(e),
                            start: Oi(e)
                        }, 0]
                    }
                }
            }
            proseMirrorKeymap(t) {
                let n = e.orderedListCommand(t);
                return {
                    "Shift-Mod-9": n,
                    "Alt-Mod-4": n
                }
            }
            unistNodeToProseMirrorNodes({
                node: e,
                schema: t,
                convertedChildren: n,
                attrs: r
            }) {
                let {
                    spread: i,
                    start: a
                } = e;
                return Nn(this.proseMirrorNodeName(), t, n, {
                    ...r,
                    spread: i,
                    startingNumber: a ?? 1
                })
            }
            proseMirrorNodeToUnistNodes(e, t) {
                let n = Di(e);
                return [{
                    type: this.unistNodeName(),
                    ordered: !0,
                    spread: n,
                    start: Oi(e),
                    children: t.map(e => (e.spread = n, e))
                }]
            }
        }
    })),
    ji, Mi = e((() => {
        Pn(), Y(), ji = class extends Ln {
            unistNodeName() {
                return `root`
            }
            static proseMirrorNodeName() {
                return `doc`
            }
            proseMirrorNodeSpec() {
                return {
                    content: `block+`
                }
            }
            unistNodeToProseMirrorNodes({
                schema: e,
                convertedChildren: t,
                attrs: n
            }) {
                return Nn(this.proseMirrorNodeName(), e, t, n)
            }
            proseMirrorNodeToUnistNodes(e, t) {
                return [{
                    type: this.unistNodeName(),
                    children: t
                }]
            }
        }
    })),
    Ni, Pi = e((() => {
        Y(), Xr(), $r(), Ni = class extends Rn {
            unistNodeName() {
                return `delete`
            }
            static proseMirrorMarkName() {
                return `strikethrough`
            }
            proseMirrorMarkSpec() {
                return {
                    parseDOM: [{
                        tag: `s`
                    }, {
                        tag: `del`
                    }, {
                        style: `text-decoration`,
                        getAttrs: e => /(^|[\s])line-through([\s]|$)/.test(e) && null
                    }],
                    toDOM() {
                        return [`s`]
                    }
                }
            }
            proseMirrorInputRules(e) {
                return [new Yr(/~([^\s](?:.*[^\s~])?)~$/, e.marks[this.proseMirrorMarkName()]), new Yr(/~~([^\s](?:.*[^\s])?)~~$/, e.marks[this.proseMirrorMarkName()])]
            }
            unistNodeToProseMirrorNodes({
                schema: e,
                convertedChildren: t
            }) {
                return t.map(t => Zr(t, e.marks[this.proseMirrorMarkName()].create()))
            }
            processConvertedUnistNode(e) {
                return {
                    type: this.unistNodeName(),
                    children: [e]
                }
            }
        }
    }));

function Fi() {
    let e = this;
    e.compiler = t;

    function t(t) {
        return de(t, {
            ...e.data(`settings`),
            fences: !0,
            bullet: `-`,
            bulletOther: `*`,
            listItemIndent: `one`,
            resourceLink: !0,
            tightDefinitions: !0,
            rule: `-`,
            handlers: {
                text: Li,
                instructionsMention: zi,
                startend: Ii,
                inlineMath: Ri
            },
            extensions: e.data(`toMarkdownExtensions`) || []
        })
    }
}
var Ii, Li, Ri, zi, Bi = e((() => {
        Mt(), le(), Ii = (e, t, n, r) => e.children.map(e => n.handle(e, void 0, n, r)).join(``), Li = (e, t, n, r) => {
            let i = n.safe(e.value, r).replaceAll(`\\[`, `[`).replaceAll(`\\&`, `&`),
                a = e.value.match(/\\+$/)?.[0].length ?? 0;
            if (a > 0) {
                let e = `\\`.repeat(a * 2);
                i.endsWith(e) && (i = i.slice(0, -e.length) + `\\`.repeat(a))
            }
            let o = e.value.match(/^ +/)?.[0].length ?? 0;
            for (let e = 0; e < o && i.startsWith(`&#x20;`); e += 1) i = ` ${i.slice(6)}`;
            let s = e.value.match(/ +$/)?.[0].length ?? 0;
            for (let e = 0; e < s && i.endsWith(`&#x20;`); e += 1) i = `${i.slice(0,-6)} `;
            return i
        }, Ri = e => `\\(${e.value}\\)`, zi = e => kt({
            label: e.label,
            mentionId: e.mentionId,
            mentionType: e.mentionType
        })
    })),
    Vi, Hi = e((() => {
        ce(), Ar(), Pr(), ti(), oi(), ci(), _i(), yi(), Sr(), sr(), Ai(), gr(), Mi(), Vr(), Pi(), ri(), wi(), Bi(), Y(), Vi = class extends Fn {
            dependencies() {
                return [new xr, new hr, new ei, new Nr, new ai, new si, new hi, new vi, new or, new ki, new ji, new ni, new Ci, new Ni, new Br]
            }
            unifiedInitializationHook(e) {
                return e.use(ue).use(kr).use(Fi)
            }
        }
    })),
    Ui, Wi = e((() => {
        Se(), c(), Ui = class {
            constructor(e, t) {
                d(this, `rules`, void 0), this.rules = e.syntaxExtensions().flatMap(e => e.proseMirrorInputRules(t))
            }
            build() {
                return Le({
                    rules: this.rules
                })
            }
        }
    })),
    Gi, Ki = e((() => {
        b(), Ve(), De(), c(), Gi = class {
            constructor(e, t) {
                d(this, `keymap`, void 0), this.keymap = new Map;
                for (let n of e.syntaxExtensions()) this.addKeymap(n.proseMirrorKeymap(t))
            }
            build() {
                let e = {};
                return this.keymap.forEach((t, n) => {
                    e[n] = Fe(...t)
                }), ke(e)
            }
            addKeymap(e) {
                for (let t in e) this.keymap.get(t) || this.keymap.set(t, []), f(this.keymap.get(t)).push(e[t])
            }
        }
    })),
    qi, Ji = e((() => {
        o(), G(), c(), qi = class {
            constructor(e) {
                d(this, `nodes`, {}), d(this, `marks`, {});
                for (let t of e.nodeExtensions()) {
                    let e = t.proseMirrorNodeName(),
                        n = t.proseMirrorNodeSpec();
                    e != null && n != null && (e !== `text` && (n.attrs = {
                        ...n.attrs,
                        start: {
                            default: void 0
                        },
                        end: {
                            default: void 0
                        }
                    }), this.nodes[e] = n)
                }
                for (let t of e.markExtensions()) {
                    let e = t.proseMirrorMarkName(),
                        n = t.proseMirrorMarkSpec();
                    e != null && n != null && (this.marks[e] = n)
                }
            }
            build() {
                try {
                    return new Re({
                        nodes: this.nodes,
                        marks: this.marks
                    })
                } catch (e) {
                    E.addError(e, {
                        nodes: this.nodes
                    })
                }
                return new Re({
                    nodes: {
                        doc: {
                            content: `block+`
                        },
                        paragraph: {
                            content: `inline*`,
                            group: `block`,
                            parseDOM: [{
                                tag: `p`,
                                preserveWhitespace: `full`
                            }],
                            toDOM: () => [`p`, 0]
                        },
                        text: {
                            group: `inline`
                        }
                    },
                    marks: this.marks
                })
            }
        }
    })),
    Yi, Xi = e((() => {
        oe(), c(), Yi = class {
            constructor(e) {
                d(this, `extensionManager`, void 0), this.extensionManager = e
            }
            build() {
                let e = P();
                for (let t of this.extensionManager.extensions()) e = t.unifiedInitializationHook(e);
                return e
            }
        }
    }));

function Zi(e) {
    return e instanceof Ln
}

function Qi(e) {
    return e instanceof Rn
}
var $i, ea = e((() => {
        Y(), c(), $i = class {
            constructor(e) {
                d(this, `markExtensionList`, void 0), d(this, `nodeExtensionList`, void 0), d(this, `otherExtensionList`, void 0), this.markExtensionList = new Map, this.nodeExtensionList = new Map, this.otherExtensionList = new Map;
                for (let t of e) this.add(t)
            }
            extensions() {
                return [...this.syntaxExtensions(), ...Array.from(this.otherExtensionList.values())]
            }
            markExtensions() {
                return Array.from(this.markExtensionList.values())
            }
            nodeExtensions() {
                return Array.from(this.nodeExtensionList.values())
            }
            syntaxExtensions() {
                return [...this.nodeExtensions(), ...this.markExtensions()]
            }
            add(e) {
                for (let t of e.dependencies()) this.add(t);
                if (Qi(e)) {
                    this.markExtensionList.set(e.constructor, e);
                    return
                }
                if (Zi(e)) {
                    this.nodeExtensionList.set(e.constructor, e);
                    return
                }
                this.otherExtensionList.set(e.constructor, e)
            }
        }
    })),
    ta, na = e((() => {
        c(), ta = class {
            constructor(e) {
                d(this, `extensionManager`, void 0), this.extensionManager = e
            }
            convert(e) {
                let t = this.convertNode(e);
                if (t.length !== 1) throw Error(`Couldn't find any way to convert the root ProseMirror node.`);
                return t[0]
            }
            convertNode(e) {
                let t = null,
                    n = [];
                for (let r of this.extensionManager.nodeExtensions()) {
                    if (!r.proseMirrorToUnistTest(e)) continue;
                    n.push(r);
                    let i = [];
                    for (let t = 0; t < e.childCount; ++t) i = i.concat(this.convertNode(e.child(t)));
                    t = r.proseMirrorNodeToUnistNodes(e, i)
                }
                return t == null ? [] : t.map(t => {
                    for (let r of e.marks) {
                        let {
                            type: {
                                name: e
                            }
                        } = r;
                        if (!n.some(t => {
                                let n = t.proseMirrorNodeSpec()?.marks;
                                return n != null && !n.includes(e)
                            })) {
                            for (let e of this.extensionManager.markExtensions())
                                if (r.type.name === e.proseMirrorMarkName()) {
                                    t = e.processConvertedUnistNode(t, r);
                                    break
                                }
                        }
                    }
                    return t
                })
            }
        }
    })),
    ra, ia, aa, oa, sa = e((() => {
        m(), c(), ra = new Set([`link`, `linkReference`]), ia = new Set([`blockquote`, `table`, `tableRow`, `tableCell`]), aa = new Set([`code`, `html`]), oa = class e {
            constructor(e, t) {
                d(this, `extensionManager`, void 0), d(this, `proseMirrorSchema`, void 0), this.extensionManager = e, this.proseMirrorSchema = t
            }
            static unistNodeIsParent(e) {
                return `children` in e
            }
            convert(e) {
                let t = {},
                    n = this.convertNode(e, t);
                for (let e of this.extensionManager.syntaxExtensions()) e.postUnistToProseMirrorHook(t);
                if (n.length !== 1) throw Error(`Couldn't find any way to convert the root unist node.`);
                return n[0]
            }
            convertNode(t, n) {
                let r = 0,
                    i = (t, n) => {
                        for (let a of this.extensionManager.syntaxExtensions()) {
                            if (!a.unistToProseMirrorTest(t)) continue;
                            let o = [];
                            e.unistNodeIsParent(t) && (o = t.children.flatMap(e => i(e, n)));
                            let {
                                position: s
                            } = t, c = s?.start.offset ?? r, l = s?.end.offset;
                            if (l == null && `value` in t && typeof t.value == `string`) {
                                let {
                                    value: e
                                } = t;
                                l = c + e.length
                            }
                            l ??= c, r = l;
                            let u = {
                                start: c,
                                end: l
                            };
                            return y(a.unistNodeToProseMirrorNodes({
                                node: t,
                                schema: this.proseMirrorSchema,
                                convertedChildren: o,
                                context: n,
                                attrs: u
                            })).filter(x)
                        }
                        return this.fallbackNodesForUnsupportedNode(t, n, i)
                    };
                return i(t, n)
            }
            fallbackNodesForUnsupportedNode(t, n, r) {
                if (ra.has(t.type) && e.unistNodeIsParent(t)) return t.children.flatMap(e => r(e, n));
                if (ia.has(t.type) && e.unistNodeIsParent(t)) {
                    let e = t.children.flatMap(e => r(e, n));
                    if (e.length === 0) return [];
                    if (e.every(e => e.isInline)) {
                        let t = this.proseMirrorSchema.nodes.paragraph?.createAndFill(void 0, e);
                        return t ? [t] : []
                    }
                    return e
                }
                if (aa.has(t.type) && `value` in t && typeof t.value == `string` && t.value.length > 0) {
                    let e = this.proseMirrorSchema.text(t.value),
                        n = this.proseMirrorSchema.nodes.paragraph?.createAndFill(void 0, [e]);
                    return n ? [n] : []
                }
                return []
            }
        }
    })),
    ca, la, ua = e((() => {
        o(), G(), Wi(), Ki(), Ji(), Xi(), ea(), na(), sa(), c(), ca = 5, la = class {
            constructor(e = []) {
                d(this, `builtSchema`, void 0), d(this, `inputRulesBuilder`, void 0), d(this, `keymapBuilder`, void 0), d(this, `unistToProseMirrorConverter`, void 0), d(this, `proseMirrorToUnistConverter`, void 0), d(this, `unified`, void 0), d(this, `memoizedProsemirrorDocs`, new Map);
                let t = new $i(e);
                this.builtSchema = new qi(t).build(), this.inputRulesBuilder = new Ui(t, this.builtSchema), this.keymapBuilder = new Gi(t, this.builtSchema), this.unistToProseMirrorConverter = new oa(t, this.builtSchema), this.proseMirrorToUnistConverter = new ta(t), this.unified = new Yi(t).build()
            }
            parse(e) {
                try {
                    let t = this.memoizedProsemirrorDocs.get(e);
                    if (t != null) return t;
                    let n = this.unistToProseMirrorConverter.convert(this.parseUnist(e));
                    if (this.memoizedProsemirrorDocs.set(e, n), this.memoizedProsemirrorDocs.size > ca) {
                        let e = this.memoizedProsemirrorDocs.keys().next().value;
                        typeof e == `string` && this.memoizedProsemirrorDocs.delete(e)
                    }
                    return n
                } catch (e) {
                    E.addError(e)
                }
                return this.fallbackDocFromSource(e)
            }
            parseUnist(e) {
                return this.unified.runSync(this.unified.parse(e))
            }
            schema() {
                return this.builtSchema
            }
            inputRulesPlugin() {
                return this.inputRulesBuilder.build()
            }
            keymapPlugin() {
                return this.keymapBuilder.build()
            }
            serialize(e) {
                let t = this.proseMirrorToUnistConverter.convert(e);
                return this.unified.stringify(t)
            }
            fallbackDocFromSource(e) {
                let t = this.builtSchema.nodes.paragraph,
                    n = e.length > 0 ? this.builtSchema.text(e) : null,
                    r = t?.createAndFill(void 0, n ? [n] : void 0);
                return this.builtSchema.topNodeType.createAndFill(void 0, r ? [r] : void 0) || this.builtSchema.topNodeType.createChecked(void 0, r ? L.from(r) : L.empty)
            }
        }
    }));

function da() {
    let e = ma(),
        t = e.nodes[hr.proseMirrorNodeName()]?.create();
    return (t ? e.topNodeType.createAndFill(void 0, t) : null) || e.topNodeType.createAndFill() || e.topNodeType.createChecked(void 0, t ? L.from(t) : L.empty)
}

function fa(e) {
    let t = ma();
    return e.type === t.topNodeType ? e : t.topNodeType.createAndFill(void 0, e) ?? da()
}
var pa, ma, ha = e((() => {
    te(), G(), Hi(), gr(), ua(), pa = h(() => new la([new Vi])), ma = h(() => pa().schema())
}));

function ga(e) {
    return `${e.type.name}:${JSON.stringify(e.attrs??{})}`
}

function _a(e, t) {
    if (!e || e.length !== t.length) return !1;
    let n = new Set(t.map(ga));
    return e.every(e => n.has(ga(e)))
}

function va() {
    return new U({
        appendTransaction(e, t, n) {
            if (!e.some(e => e.docChanged) || !n.selection.empty) return null;
            let {
                storedMarks: r
            } = n;
            if (!r || r.length === 0) return null;
            let i = n.selection.$from.marks();
            return _a(r, i) ? null : n.tr.setStoredMarks(i.length > 0 ? i : [])
        }
    })
}

function ya(e, t) {
    let n = t.type.schema.nodes[hr.proseMirrorNodeName()];
    return e.type === n && e.content.size === 0
}

function ba(e) {
    return e.type.schema.nodes[hr.proseMirrorNodeName()]?.createAndFill() ?? null
}

function xa(e) {
    let t = 0,
        n = Array.from({
            length: e.childCount
        }, (t, n) => e.child(n));
    for (let r = n.length - 1; r >= 0 && ya(n[r], e); --r) t += 1;
    return t
}

function Sa(e) {
    let t = ba(e);
    if (!t) return e;
    let n = xa(e);
    if (n > 0) return n === e.childCount && n > 1 ? e.type.createChecked(e.attrs, L.from(t)) : e;
    let r = Array.from({
        length: e.childCount
    }, (t, n) => e.child(n));
    return e.type.createChecked(e.attrs, L.fromArray([...r, t]))
}

function Ca(e, t) {
    if (e.childCount <= 1) return e;
    let n = e.lastChild;
    return !n || !ya(n, t) ? e : L.fromArray(Array.from({
        length: e.childCount - 1
    }, (t, n) => e.child(n)))
}

function wa() {
    return new U({
        appendTransaction(e, t, n) {
            if (!e.some(e => e.docChanged)) return null;
            let r = xa(n.doc);
            if (r > 0) return r === n.doc.childCount && r > 1 ? n.tr.delete(n.doc.child(0).nodeSize, n.doc.content.size).setMeta(`addToHistory`, !1) : null;
            let i = ba(n.doc);
            return i ? n.tr.insert(n.doc.content.size, i).setMeta(`addToHistory`, !1) : null
        }
    })
}
var Ta = e((() => {
    G(), R(), gr()
}));

function Ea(e) {
    return Sa(fa(pa().parse(e)))
}

function Da(e) {
    return pa().serialize(fa(e))
}
var Oa = e((() => {
        ha(), Ta()
    })),
    ka, Aa, ja, X, Ma, Na, Pa, Fa, Ia, La, Ra, za = e((() => {
        ka = M(), Mt(), _i(), ge(), Ue(), r(), Ze(), Xe(), Aa = t(j()), ja = t(O()), A(), Tt(), Dt(), _t(), X = D(), Ma = ({
            mentionId: e,
            value: t
        }) => At({
            mentionId: e,
            value: t ?? ``
        }) ?? `app`, Na = ({
            nextKeyRef: e,
            slot: t,
            slotKeys: n
        }) => {
            let r = t.closest(`[data-instructions-mention-node]`);
            if (!r) return null;
            let i = r.dataset.mentionId ?? ``;
            if (i.length === 0) return null;
            let a = r.querySelector(`[data-instructions-mention-tooltip]`),
                o = n.get(t);
            return o || (o = `instructions-mention-icon-${e.current++}`, n.set(t, o)), {
                isLoading: r.dataset.loading !== void 0 || t.dataset.loading !== void 0,
                isMissing: r.dataset.missing !== void 0,
                key: o,
                kind: Ma({
                    mentionId: i,
                    value: r.dataset.mentionKind
                }),
                mentionId: i,
                slot: t,
                tooltipSlot: a
            }
        }, Pa = (e, t) => e.length === t.length && e.every((e, n) => {
            let r = t[n];
            return e.isLoading === r.isLoading && e.isMissing === r.isMissing && e.key === r.key && e.kind === r.kind && e.mentionId === r.mentionId && e.slot === r.slot && e.tooltipSlot === r.tooltipSlot
        }), Fa = e => {
            "use forget";
            let t = (0, ka.c)(14),
                {
                    isLoading: n,
                    isMissing: r,
                    kind: i,
                    mentionId: a,
                    mentionEntities: o
                } = e,
                s;
            t[0] !== i || t[1] !== o || t[2] !== a ? (s = o.find(e => e.kind === i && e.mentionId === a) ?? o.find(e => e.mentionId === a), t[0] = i, t[1] = o, t[2] = a, t[3] = s) : s = t[3];
            let c = s;
            if (n) return null;
            if (r) {
                let e;
                return t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, X.jsx)(Je, {
                    className: `text-danger size-full`
                }), t[4] = e) : e = t[4], e
            }
            switch (i) {
                case `app`: {
                    let e;
                    return t[5] === c ? e = t[6] : (e = c?.icon?.kind === `app` ? (0, X.jsx)(Et, {
                        className: `size-full`,
                        iconClassName: `size-full`,
                        borderStyle: `normal`,
                        connector: c.icon.connector
                    }) : (0, X.jsx)(he, {
                        "aria-hidden": !0,
                        className: `size-full text-inherit`
                    }), t[5] = c, t[6] = e), e
                }
                case `skill`: {
                    let e = c?.icon?.kind === `skill` ? c.icon.name : void 0,
                        n;
                    return t[7] === e ? n = t[8] : (n = (0, X.jsx)(Ot, {
                        name: e,
                        className: `size-full`
                    }), t[7] = e, t[8] = n), n
                }
                case `slack_channel`: {
                    let e;
                    return t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, X.jsx)(We, {
                        className: `size-full`
                    }), t[9] = e) : e = t[9], e
                }
                case `file`: {
                    let e;
                    return t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, X.jsx)(Ke, {
                        className: `size-full`
                    }), t[10] = e) : e = t[10], e
                }
                case `file_persistence`: {
                    let e;
                    return t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, X.jsx)(bt, {
                        className: `size-full`
                    }), t[11] = e) : e = t[11], e
                }
                case `image_generation`: {
                    let e;
                    return t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, X.jsx)(St, {
                        className: `size-full`
                    }), t[12] = e) : e = t[12], e
                }
                case `web_search`: {
                    let e;
                    return t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, X.jsx)(vt, {
                        className: `size-full`
                    }), t[13] = e) : e = t[13], e
                }
            }
        }, Ia = e => {
            "use forget";
            let t = (0, ka.c)(8),
                {
                    children: n,
                    kind: r
                } = e,
                i = ne(),
                a, o;
            if (t[0] !== n || t[1] !== i || t[2] !== r) {
                o = Symbol.for(`react.early_return_sentinel`);
                bb0: {
                    let e = di(r);
                    if (!e) {
                        o = n;
                        break bb0
                    }
                    a = i.formatMessage(e)
                }
                t[0] = n, t[1] = i, t[2] = r, t[3] = a, t[4] = o
            } else a = t[3], o = t[4];
            if (o !== Symbol.for(`react.early_return_sentinel`)) return o;
            let s = a,
                c;
            return t[5] !== n || t[6] !== s ? (c = (0, X.jsx)(Ye, {
                compact: !0,
                content: s,
                maxWidth: `none`,
                children: n
            }), t[5] = n, t[6] = s, t[7] = c) : c = t[7], c
        }, La = e => {
            "use forget";
            let t = (0, ka.c)(9),
                {
                    kind: n
                } = e,
                r = ne(),
                i, a;
            if (t[0] !== r || t[1] !== n) {
                a = Symbol.for(`react.early_return_sentinel`);
                bb0: {
                    let e = di(n);
                    if (!e) {
                        a = null;
                        break bb0
                    }
                    i = r.formatMessage(e)
                }
                t[0] = r, t[1] = n, t[2] = i, t[3] = a
            } else i = t[2], a = t[3];
            if (a !== Symbol.for(`react.early_return_sentinel`)) return a;
            let o = i,
                s;
            t[4] === o ? s = t[5] : (s = (0, X.jsx)(`span`, {
                "aria-label": o,
                className: `cursor-inherit absolute inset-0 z-[1]`
            }), t[4] = o, t[5] = s);
            let c;
            return t[6] !== s || t[7] !== o ? (c = (0, X.jsx)(Ye, {
                compact: !0,
                content: o,
                maxWidth: `none`,
                children: s
            }), t[6] = s, t[7] = o, t[8] = c) : c = t[8], c
        }, Ra = e => {
            "use forget";
            let t = (0, ka.c)(17),
                n;
            t[0] === e ? n = t[1] : (n = e === void 0 ? {} : e, t[0] = e, t[1] = n);
            let {
                mentionEntities: r
            } = n, i;
            t[2] === r ? i = t[3] : (i = r === void 0 ? [] : r, t[2] = r, t[3] = i);
            let a = i,
                o = (0, Aa.useRef)(0),
                s;
            t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (s = new WeakMap, t[4] = s) : s = t[4];
            let c = (0, Aa.useRef)(s),
                l;
            t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (l = [], t[5] = l) : l = t[5];
            let [u, d] = (0, Aa.useState)(l), f;
            t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (f = e => {
                if (!e) {
                    d([]);
                    return
                }
                let t = Array.from(e.querySelectorAll(`[data-instructions-mention-icon]`)).flatMap(e => {
                    let t = Na({
                        nextKeyRef: o,
                        slot: e,
                        slotKeys: c.current
                    });
                    return t ? [t] : []
                });
                d(e => Pa(e, t) ? e : t)
            }, t[6] = f) : f = t[6];
            let p = w(f),
                m;
            t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (m = () => {
                d([])
            }, t[7] = m) : m = t[7];
            let h = w(m),
                g;
            if (t[8] !== a || t[9] !== u) {
                let e;
                t[11] === a ? e = t[12] : (e = e => {
                    let {
                        isLoading: t,
                        isMissing: n,
                        key: r,
                        kind: i,
                        mentionId: o,
                        slot: s,
                        tooltipSlot: c
                    } = e, l = (0, ja.createPortal)((0, X.jsx)(Fa, {
                        isLoading: t,
                        isMissing: n,
                        kind: i,
                        mentionId: o,
                        mentionEntities: a
                    }), s, r), u = di(i);
                    return !c || !u ? [l] : [l, (0, ja.createPortal)((0, X.jsx)(La, {
                        kind: i
                    }), c, `${r}-tooltip`)]
                }, t[11] = a, t[12] = e), g = u.flatMap(e), t[8] = a, t[9] = u, t[10] = g
            } else g = t[10];
            let _ = g,
                v;
            return t[13] !== h || t[14] !== _ || t[15] !== p ? (v = {
                clearEntityTags: h,
                entityTagPortals: _,
                syncEntityTags: p
            }, t[13] = h, t[14] = _, t[15] = p, t[16] = v) : v = t[16], v
        }
    })),
    Ba, Va, Ha, Ua, Wa = e((() => {
        Ba = `﻿`, Va = () => {
            let e = document.createElement(`span`);
            return e.dataset.instructionsCursorTarget = ``, e.setAttribute(`aria-hidden`, `true`), e.textContent = Ba, e
        }, Ha = () => {
            let e = Va();
            return e.setAttribute(`contenteditable`, `false`), e
        }, Ua = Va
    })),
    Ga, Ka, qa, Ja, Ya, Xa, Za, Qa, $a, eo, to, no, ro, io, ao, oo, so, co, lo, uo = e((() => {
        G(), R(), Oe(), Ee(), Wa(), Mt(), _i(), Ga = e => e.type.schema.nodes[ui], Ka = new ve(`instructionsMention`), qa = e => e === `​` || e === `﻿`, Ja = e => e?.isText ? e.text ?? `` : ``, Ya = e => {
            let t = 0;
            for (; t < e.length && qa(e[t] ?? ``);) t += 1;
            return t
        }, Xa = e => {
            let t = e.length;
            for (; t > 0 && qa(e[t - 1] ?? ``);) --t;
            return e.length - t
        }, Za = e => {
            let t = Ga(e),
                n = [];
            return e.descendants((e, r) => {
                if (e.type === t) return n.push(Te.widget(r + e.nodeSize, Ha, {
                    key: `instructions-mention-cursor-end-${r}`,
                    raw: !0,
                    side: 1
                })), !1
            }), B.create(e, n)
        }, Qa = ({
            entity: e,
            label: t = e.displayLabel
        }) => ({
            isLoading: e.isLoading ?? !1,
            isMissing: !1,
            kind: e.kind,
            label: t,
            mentionId: e.mentionId
        }), $a = ({
            doc: e,
            entity: t,
            label: n
        }) => Ga(e).create(Qa({
            entity: t,
            label: n
        })), eo = ({
            mentionId: e,
            mentionType: t
        }) => `${t}:${e}`, to = ({
            doc: e,
            kind: t,
            label: n,
            mentionId: r
        }) => Ga(e).create({
            isLoading: !1,
            isMissing: !0,
            kind: t,
            label: n,
            mentionId: r
        }), no = ({
            doc: e,
            entities: t,
            allowedMentionTombstoneKinds: n = []
        }) => {
            let r = Ga(e),
                i = new Set(n),
                a = new Map(t.map(e => [eo({
                    mentionId: e.mentionId,
                    mentionType: e.kind
                }), e])),
                o = new Map(t.map(e => [e.mentionId, e])),
                s = [],
                c = [];
            return e.descendants((t, n) => {
                if (t.type === r) {
                    let r = String(t.attrs.mentionId),
                        l = At({
                            mentionId: r,
                            value: String(t.attrs.kind || t.attrs.mentionType || ``)
                        }),
                        u = String(t.attrs.label),
                        d = (l ? a.get(eo({
                            mentionId: r,
                            mentionType: l
                        })) : void 0) ?? o.get(r);
                    if (!d) {
                        if (!l || !i.has(l)) return t.attrs.isMissing && l && s.push({
                            from: n,
                            node: e.type.schema.text(kt({
                                label: u,
                                mentionId: r,
                                mentionType: l
                            })),
                            to: n + t.nodeSize
                        }), !1;
                        let a = {
                            isLoading: !1,
                            isMissing: !0,
                            kind: l,
                            label: u,
                            mentionId: r
                        };
                        return (!!t.attrs.isLoading !== a.isLoading || !!t.attrs.isMissing !== a.isMissing || String(t.attrs.kind) !== a.kind || String(t.attrs.label) !== a.label || String(t.attrs.mentionId) !== a.mentionId) && c.push({
                            attrs: a,
                            pos: n
                        }), !1
                    }
                    let f = Qa({
                        entity: d,
                        label: d.isLoading ? u : void 0
                    });
                    return (!!t.attrs.isLoading !== f.isLoading || !!t.attrs.isMissing !== f.isMissing || String(t.attrs.kind) !== f.kind || String(t.attrs.label) !== f.label || String(t.attrs.mentionId) !== f.mentionId) && c.push({
                        attrs: f,
                        pos: n
                    }), !1
                }
                if (!(!t.isText || !t.text)) {
                    if (t.marks.some(e => e.type.name === `code`)) return !1;
                    for (let r = 0; r < t.text.length;) {
                        let c = jt(t.text, r);
                        if (!c) {
                            r += 1;
                            continue
                        }
                        let l = (c.mentionType ? a.get(eo({
                            mentionId: c.mentionId,
                            mentionType: c.mentionType
                        })) : void 0) ?? o.get(c.mentionId);
                        if (!l) {
                            c.mentionType && i.has(c.mentionType) && s.push({
                                from: n + c.start,
                                node: to({
                                    doc: e,
                                    kind: c.mentionType,
                                    label: c.label,
                                    mentionId: c.mentionId
                                }),
                                to: n + c.end
                            }), r = c.end;
                            continue
                        }
                        s.push({
                            from: n + c.start,
                            node: $a({
                                doc: e,
                                entity: l,
                                label: l.isLoading ? c.label : void 0
                            }),
                            to: n + c.end
                        }), r = c.end
                    }
                    return !1
                }
            }), c.length === 0 && s.length === 0 ? null : {
                updates: c,
                replacements: s
            }
        }, ro = (e, {
            replacements: t,
            updates: n
        }) => {
            for (let {
                    pos: t,
                    attrs: r
                }
                of n) {
                let n = e.doc.nodeAt(t);
                n && e.setNodeMarkup(t, void 0, {
                    ...n.attrs,
                    ...r
                })
            }
            for (let {
                    from: n,
                    node: r,
                    to: i
                }
                of t.reverse()) {
                if (r) {
                    e.replaceWith(n, i, r);
                    continue
                }
                e.delete(n, i)
            }
        }, io = e => {
            let t = Ga(e.doc),
                {
                    selection: n
                } = e;
            if (!n.empty) return null;
            let r = n.$from.nodeBefore;
            if (r?.type !== t) return null;
            let i = n.from - r.nodeSize,
                a = n.from,
                o = e.doc.resolve(i);
            return {
                from: i - Xa(Ja(o.nodeBefore)),
                to: a + Ya(Ja(n.$from.nodeAfter))
            }
        }, ao = (e, t) => {
            let n = Ga(e.doc),
                {
                    selection: r
                } = e;
            if (!r.empty) return null;
            if (t === `ArrowRight`) {
                let e = r.$from.nodeAfter;
                return e?.type === n ? r.from + e.nodeSize : null
            }
            if (t === `ArrowLeft`) {
                let e = r.$from.nodeBefore;
                return e?.type === n ? r.from - e.nodeSize : null
            }
            return null
        }, oo = () => new U({
            key: Ka,
            state: {
                init: (e, t) => Za(t.doc),
                apply: (e, t, n, r) => e.docChanged ? Za(r.doc) : t
            },
            props: {
                decorations(e) {
                    return Ka.getState(e) ?? B.empty
                },
                handleKeyDown(e, t) {
                    if ((t.key === `ArrowLeft` || t.key === `ArrowRight`) && !t.altKey && !t.ctrlKey && !t.metaKey && !t.shiftKey) {
                        let n = ao(e.state, t.key);
                        if (n != null) return t.preventDefault(), e.dispatch(e.state.tr.setSelection(K.create(e.state.doc, n)).scrollIntoView()), !0
                    }
                    if (t.key !== `Backspace` || t.altKey || t.ctrlKey || t.metaKey) return !1;
                    let n = io(e.state);
                    return n ? (t.preventDefault(), e.dispatch(e.state.tr.delete(n.from, n.to).scrollIntoView()), !0) : !1
                }
            }
        }), so = ({
            editorView: e,
            entities: t,
            allowedMentionTombstoneKinds: n = []
        }) => {
            let r = no({
                doc: e.state.doc,
                entities: t,
                allowedMentionTombstoneKinds: n
            });
            if (!r) return !1;
            let i = e.state.tr;
            return ro(i, r), e.dispatch(i.setMeta(`addToHistory`, !1)), !0
        }, co = ({
            doc: e,
            entities: t,
            allowedMentionTombstoneKinds: n = []
        }) => {
            let r = no({
                doc: e,
                entities: t,
                allowedMentionTombstoneKinds: n
            });
            if (!r) return e;
            let i = new W(e);
            return ro(i, r), i.doc
        }, lo = ({
            editorView: e,
            entity: t,
            from: n,
            to: r
        }) => {
            e.dispatch(e.state.tr.replaceWith(n, r, L.fromArray([$a({
                doc: e.state.doc,
                entity: t
            }), e.state.schema.text(` `)])).scrollIntoView())
        }
    })),
    fo, Z, po, mo, ho, go, _o, vo = e((() => {
        fo = M(), Oa(), za(), uo(), Mt(), _i(), Z = D(), po = ({
            keyPrefix: e,
            mentionEntities: t,
            node: n
        }) => {
            let r = [];
            return n.type.name === `paragraph` && n.content.size === 0 ? (0, Z.jsx)(`br`, {
                className: `ProseMirror-trailingBreak`
            }, `${e}-0`) : (n.forEach((n, i, a) => {
                r.push(go({
                    key: `${e}-${a}`,
                    mentionEntities: t,
                    node: n
                }))
            }), r)
        }, mo = ({
            content: e,
            keyPrefix: t,
            marks: n
        }) => n.reduceRight((e, n, r) => {
            switch (n.type.name) {
                case `strong`:
                    return (0, Z.jsx)(`strong`, {
                        children: e
                    }, `${t}-strong-${r}`);
                case `em`:
                    return (0, Z.jsx)(`em`, {
                        children: e
                    }, `${t}-em-${r}`);
                case `strikethrough`:
                    return (0, Z.jsx)(`s`, {
                        children: e
                    }, `${t}-strikethrough-${r}`);
                case `code`:
                    return (0, Z.jsx)(`code`, {
                        children: e
                    }, `${t}-code-${r}`);
                default:
                    return e
            }
        }, e), ho = ({
            key: e,
            mentionEntities: t,
            node: n
        }) => {
            let r = String(n.attrs.mentionId ?? ``),
                i = String(n.attrs.label ?? ``);
            if (r.length === 0) return i;
            let a = At({
                    mentionId: r,
                    value: String(n.attrs.kind ?? n.attrs.mentionType ?? ``)
                }) ?? `app`,
                o = !!n.attrs.isLoading,
                s = !!n.attrs.isMissing;
            return (0, Z.jsx)(Ia, {
                kind: a,
                children: (0, Z.jsxs)(`span`, {
                    contentEditable: !1,
                    "data-instructions-mention-node": ``,
                    "data-mention-id": r,
                    "data-mention-kind": a,
                    "data-missing": s ? `` : void 0,
                    children: [(0, Z.jsx)(`span`, {
                        "aria-hidden": `true`,
                        "data-instructions-mention-icon": ``,
                        children: (0, Z.jsx)(Fa, {
                            isLoading: o,
                            isMissing: s,
                            kind: a,
                            mentionId: r,
                            mentionEntities: t
                        })
                    }), (0, Z.jsx)(`span`, {
                        "data-instructions-mention": ``,
                        children: i
                    })]
                })
            }, e)
        }, go = ({
            key: e,
            mentionEntities: t,
            node: n
        }) => {
            if (n.isText) return mo({
                content: n.text ?? ``,
                keyPrefix: e,
                marks: n.marks
            });
            switch (n.type.name) {
                case `paragraph`:
                    return (0, Z.jsx)(`p`, {
                        children: po({
                            keyPrefix: e,
                            mentionEntities: t,
                            node: n
                        })
                    }, e);
                case `heading`:
                    return (0, Z.jsx)(`h${n.attrs.level===2?2:n.attrs.level===3?3:1}`, {
                        children: po({
                            keyPrefix: e,
                            mentionEntities: t,
                            node: n
                        })
                    }, e);
                case `list`:
                    return (0, Z.jsx)(`ul`, {
                        "data-spread": n.attrs.spread === !0,
                        children: po({
                            keyPrefix: e,
                            mentionEntities: t,
                            node: n
                        })
                    }, e);
                case `ordered_list`:
                    return (0, Z.jsx)(`ol`, {
                        "data-spread": n.attrs.spread === !0,
                        start: typeof n.attrs.startingNumber == `number` ? n.attrs.startingNumber : 1,
                        children: po({
                            keyPrefix: e,
                            mentionEntities: t,
                            node: n
                        })
                    }, e);
                case `regular_list_item`:
                    return (0, Z.jsx)(`li`, {
                        children: po({
                            keyPrefix: e,
                            mentionEntities: t,
                            node: n
                        })
                    }, e);
                case `hard_break`:
                    return (0, Z.jsx)(`br`, {}, e);
                case ui:
                    return ho({
                        key: e,
                        mentionEntities: t,
                        node: n
                    });
                default:
                    return po({
                        keyPrefix: e,
                        mentionEntities: t,
                        node: n
                    })
            }
        }, _o = e => {
            "use forget";
            let t = (0, fo.c)(11),
                {
                    labelId: n,
                    markdown: r,
                    mentionEntities: i,
                    allowedMentionTombstoneKinds: a
                } = e,
                o;
            t[0] === i ? o = t[1] : (o = i === void 0 ? [] : i, t[0] = i, t[1] = o);
            let s = o,
                c;
            t[2] === a ? c = t[3] : (c = a === void 0 ? [] : a, t[2] = a, t[3] = c);
            let l = c,
                u;
            if (t[4] !== l || t[5] !== r || t[6] !== s) {
                let e = co({
                    doc: Ea(r),
                    entities: s,
                    allowedMentionTombstoneKinds: l
                });
                u = po({
                    keyPrefix: `instructions-preview`,
                    mentionEntities: s,
                    node: e
                }), t[4] = l, t[5] = r, t[6] = s, t[7] = u
            } else u = t[7];
            let d = u,
                f;
            return t[8] !== n || t[9] !== d ? (f = (0, Z.jsx)(`div`, {
                className: `ProseMirror`,
                "aria-labelledby": n,
                "aria-multiline": `true`,
                "aria-readonly": `true`,
                role: `textbox`,
                children: d
            }), t[8] = n, t[9] = d, t[10] = f) : f = t[10], f
        }
    })),
    yo, bo, xo, So, Co = e((() => {
        yo = `LIW90W_EditorRoot`, bo = `LIW90W_EditorSurface`, xo = `LIW90W_thread`, So = {
            EditorRoot: yo,
            EditorSurface: bo,
            thread: xo
        }
    }));

function wo(e, t) {
    let n = e,
        r = t.firstChild?.textContent.match(/^ +/)?.[0].length ?? 0;
    for (let e = 0; e < r; e += 1) {
        if (n.startsWith(`&#x20;`)) {
            n = ` ${n.slice(6)}`;
            continue
        }
        if (n.startsWith(`\\ `)) {
            n = ` ${n.slice(2)}`;
            continue
        }
        break
    }
    let i = t.lastChild?.textContent.match(/ +$/)?.[0].length ?? 0;
    for (let e = 0; e < i; e += 1) {
        if (n.endsWith(`&#x20;`)) {
            n = `${n.slice(0,-6)} `;
            continue
        }
        if (n.endsWith(`\\ `)) {
            n = `${n.slice(0,-2)} `;
            continue
        }
        break
    }
    return n
}

function To(e, t) {
    let n = [];
    return e.forEach(e => {
        if (e.type.name === `instructions_mention`) {
            n.push(t.text(String(e.attrs.label)));
            return
        }
        if (e.isLeaf) {
            n.push(e);
            return
        }
        n.push(e.copy(To(e.content, t)))
    }), L.fromArray(n)
}

function Eo(e) {
    let t = ma();
    return {
        instructionsSchema: t,
        normalizedFragment: Ca(To(e, t), da())
    }
}

function Do(e) {
    let {
        normalizedFragment: t
    } = Eo(e);
    return Mo(t)
}

function Oo(e, t = !1) {
    let {
        instructionsSchema: n,
        normalizedFragment: r
    } = Eo(e);
    return wo(t ? r.textBetween(0, r.size, `

`) : ko(r, n), r)
}

function ko(e, t) {
    let n = [];
    return e.forEach(e => {
        n.push(Ao(e, t))
    }), n.length === 0 ? `` : `${n.join(`

`)}\n`
}

function Ao(e, t) {
    if (jo(e)) return e.textContent;
    let n = t.topNodeType.createAndFill(void 0, e);
    return n ? pa().serialize(n).replace(/\n+$/, ``) : e.textContent
}

function jo(e) {
    if (e.type.name !== hr.proseMirrorNodeName()) return !1;
    let t = !0;
    return e.descendants(e => !e.isText || e.marks.some(e => e.type.name !== `startend`) ? (t = !1, !1) : !0), t
}

function Mo(e) {
    let t = 0,
        n = !1;
    return e.forEach(e => {
        if (!n) {
            if (e.type.name === Nr.proseMirrorNodeName()) {
                n = !0;
                return
            }
            if (e.isBlock && (t += 1, t > 1)) {
                n = !0;
                return
            }
            Mo(e) && (n = !0)
        }
    }), n
}

function No(e) {
    let t = fa(pa().parse(e)),
        n = t.firstChild;
    return t.childCount === 1 && n?.type.name === hr.proseMirrorNodeName() ? new Ne(n.content, 0, 0) : new Ne(t.content, 0, 0)
}

function Po(e, t) {
    let n = t.split(/\r?\n/);
    if (n.length === 1) {
        let t = n[0] ?? ``;
        return t.length === 0 ? Ne.empty : new Ne(L.from(e.text(t)), 0, 0)
    }
    let r = e.nodes[hr.proseMirrorNodeName()];
    if (!r) return new Ne(L.from(e.text(t)), 0, 0);
    let i = n.map(t => r.create(null, t.length > 0 ? e.text(t) : null));
    return Ne.maxOpen(L.fromArray(i))
}

function Fo(e, t) {
    if (e.openStart !== 0 || e.openEnd !== 0) return e;
    let n = Ca(e.content, t.topNodeType.createAndFill() ?? da());
    return n.eq(e.content) ? e : new Ne(n, e.openStart, e.openEnd)
}
var Io = e((() => {
        G(), Pr(), Mr(), _i(), gr(), ha(), Ta()
    })),
    Lo = e((() => {
        ti(), yi(), Pi(), ei.proseMirrorMarkName(), vi.proseMirrorMarkName(), Ni.proseMirrorMarkName()
    }));

function Ro(e, t) {
    let n = !1;
    return e.nodesBetween(t, e.content.size, e => !e.isText || !(e.text ?? ``).trim() ? !0 : (n = !0, !1)), n
}

function zo(e, t, n) {
    if (!t.empty) return [];
    let r = t.$from.parent;
    if (t.$from.depth !== 1 || !r.isTextblock || r.content.size > 0) return [];
    let i = ``;
    if (r.type.name === hr.proseMirrorNodeName()) i = n.paragraph;
    else if (r.type.name === ai.proseMirrorNodeName()) {
        let e = Number(r.attrs.level);
        e === 1 ? i = n.heading1 : e === 2 ? i = n.heading2 : e === 3 && (i = n.heading3)
    }
    let a = r.type.name === ai.proseMirrorNodeName();
    if (i.length === 0) return [];
    let o = t.$from.before(),
        s = o + r.nodeSize;
    return !a && Ro(e, s) ? [] : [Te.node(o, s, {
        class: `placeholder`,
        "data-placeholder": i
    })]
}

function Bo(e) {
    return !e || e.to <= e.from ? [] : [Te.inline(e.from, e.to, {
        class: `instructions-command-token`,
        "data-has-hint": e.text.length > 0 ? `` : void 0
    }), Te.widget(e.to, Ua, {
        ignoreSelection: !0,
        key: `instructions-command-cursor-end`,
        raw: !0,
        side: -1
    }), ...e.text.length > 0 ? [Te.widget(e.to, () => {
        let t = document.createElement(`span`);
        return t.className = `instructions-command-hint`, t.textContent = e.text, t.setAttribute(`aria-hidden`, `true`), t
    }, {
        side: 1
    })] : []]
}

function Vo(e, t) {
    return e?.from === t?.from && e?.to === t?.to && e?.text === t?.text
}

function Ho(e) {
    return typeof e == `object` && !!e && (Object.prototype.hasOwnProperty.call(e, `placeholderText`) || Object.prototype.hasOwnProperty.call(e, `commandHint`) || Object.keys(e).length === 0)
}

function Uo({
    commandHint: e,
    doc: t,
    selection: n,
    placeholderText: r
}) {
    return B.create(t, [...zo(t, n, r), ...Bo(e)])
}

function Wo(e = {
    paragraph: ``,
    heading1: ``,
    heading2: ``,
    heading3: ``
}) {
    return new U({
        key: qo,
        state: {
            init(t, n) {
                return {
                    commandHint: null,
                    decorations: Uo({
                        commandHint: null,
                        doc: n.doc,
                        selection: n.selection,
                        placeholderText: e
                    }),
                    placeholderText: e
                }
            },
            apply(e, t) {
                let n = e.getMeta(qo),
                    r = Ho(n) ? n : void 0,
                    i = r?.placeholderText ?? t.placeholderText,
                    a = r && Object.prototype.hasOwnProperty.call(r, `commandHint`) ? r.commandHint ?? null : t.commandHint;
                return !e.docChanged && !e.selectionSet && i === t.placeholderText && Vo(a, t.commandHint) ? t : {
                    commandHint: a,
                    decorations: Uo({
                        commandHint: a,
                        doc: e.doc,
                        selection: e.selection,
                        placeholderText: i
                    }),
                    placeholderText: i
                }
            }
        },
        props: {
            decorations(e) {
                return qo.getState(e)?.decorations ?? null
            }
        }
    })
}

function Go(e, t) {
    e.dispatch(e.state.tr.setMeta(qo, {
        placeholderText: t
    }))
}

function Ko(e, t) {
    e.dispatch(e.state.tr.setMeta(qo, {
        commandHint: t
    }))
}
var qo, Jo = e((() => {
    R(), Ee(), Wa(), oi(), gr(), qo = new ve(`instructionsLinePlaceholder`)
}));

function Yo(e, t) {
    let n = fa(e),
        r = Ea(t);
    return n.eq(r) || Da(n) === Da(r)
}

function Xo(e, t, n) {
    let r = Ea(t),
        i = fa(e.state.doc);
    if (i.eq(r) || Da(i) === Da(r)) return !1;
    let a = e.state.tr.replaceWith(0, e.state.doc.content.size, r.content);
    return n?.addToHistory === !1 && a.setMeta(`addToHistory`, !1), e.hasFocus() && (n?.moveSelectionToEnd ?? !0) && a.setSelection(K.atEnd(a.doc)).scrollIntoView(), e.dispatch(a), !0
}
var Zo = e((() => {
    R(), ha(), Oa()
}));

function Qo(e) {
    return `children` in e
}

function $o(e) {
    return ns.has(e.type) ? !0 : Qo(e) ? e.children.some(e => $o(e)) : !1
}

function es(e) {
    return /(^|[^\\])(\\\\)*\\(?:[*_~`])/.test(e)
}

function ts(e, t) {
    return t.length > 0 || es(e) ? !1 : $o(pa().parseUnist(e))
}
var ns, rs = e((() => {
    ha(), ns = new Set([`delete`, `emphasis`, `heading`, `inlineCode`, `list`, `strong`])
}));

function is(e) {
    return (e.spec.group ?? ``).split(/\s+/).filter(Boolean).includes(ls)
}

function as() {
    return new U({
        props: {
            handleTextInput(e, t, n, r) {
                if (e.composing) return !1;
                let i = e.state.schema.nodes.ordered_list,
                    a = e.state.schema.nodes.list,
                    o = e.state.schema.nodes.regular_list_item;
                if (!i || !a || !o) return !1;
                let s = e.state.doc.resolve(t);
                if (s.parent.type.spec.code) return !1;
                let c = s.parent.textBetween(Math.max(0, s.parentOffset - os), s.parentOffset, null, `￼`) + r,
                    l = ss.exec(c);
                if (l) {
                    let a = Number(l[1]);
                    return fs({
                        view: e,
                        listType: i,
                        regularListItemType: o,
                        from: t,
                        to: n,
                        matchLength: l[0].length,
                        typedTextLength: r.length,
                        listAttrs: {
                            startingNumber: a
                        },
                        isJoinCompatible: e => {
                            let t = typeof e.attrs.startingNumber == `number` ? e.attrs.startingNumber : 1;
                            return e.childCount + t === a
                        }
                    })
                }
                let u = cs.exec(c);
                return u ? fs({
                    view: e,
                    listType: a,
                    regularListItemType: o,
                    from: t,
                    to: n,
                    matchLength: u[0].length,
                    typedTextLength: r.length
                }) : !1
            }
        }
    })
}
var os, ss, cs, ls, us, ds, fs, ps = e((() => {
    R(), Oe(), os = 500, ss = /^\s{0,3}(\d+)\.\s$/, cs = /^\s{0,3}([-+*])\s$/, ls = `list_item`, us = (e, t) => {
        let {
            $from: n
        } = e.selection;
        for (let r = n.depth; r > 0; --r) {
            let i = n.node(r);
            if (is(i.type)) return i.type === t ? e : e.setNodeMarkup(n.before(r), t)
        }
        return e
    }, ds = (e, t, n, r) => {
        let i = e.doc.resolve(t - 1).nodeBefore;
        return !i || i.type !== n || !be(e.doc, t - 1) || r && !r(i) ? e : e.join(t - 1)
    }, fs = ({
        view: e,
        listType: t,
        regularListItemType: n,
        from: r,
        to: i,
        matchLength: a,
        typedTextLength: o,
        listAttrs: s,
        isJoinCompatible: c
    }) => {
        let l = r - (a - o),
            u = e.state.tr.delete(l, i),
            d = u.doc.resolve(l).blockRange(),
            f = d && V(d, t, s);
        return !d || !f ? !1 : (u = u.wrap(d, f), u = ds(u, l, t, c), u = us(u, n), e.dispatch(u), !0)
    }
}));

function ms(e, t) {
    let n = _s.getState(e.state);
    if (!gs(n)) throw Error(`Missing instructions transaction event state`);
    let {
        eventTarget: r
    } = n;
    return r.addEventListener(vs, t), () => {
        r.removeEventListener(vs, t)
    }
}

function hs(e) {
    return new U({
        key: _s,
        state: {
            init() {
                return {
                    eventTarget: e
                }
            },
            apply(e, t) {
                return t
            }
        }
    })
}

function gs(e) {
    return typeof e == `object` && !!e && `eventTarget` in e && e.eventTarget instanceof EventTarget
}
var _s, vs, ys = e((() => {
    R(), _s = new ve(`instructionsTransactionEventPlugin`), vs = `instructionsProsemirrorDispatchTransaction`
}));

function bs() {
    "use no forget";
    return !0
}

function xs(e) {
    let t = new EventTarget,
        n = Ea(``),
        r = pa(),
        i = ma(),
        a = new we(null, {
            scrollThreshold: Cs,
            scrollMargin: ws,
            state: z.create({
                schema: i,
                doc: n,
                plugins: [tt({
                    newGroupDelay: Ss
                }), as(), r.inputRulesPlugin(), r.keymapPlugin(), ke({
                    ...Ae,
                    "Shift-Enter": Ae.Enter,
                    "Alt-Enter": Ae.Enter,
                    Tab: bs,
                    "Shift-Tab": bs,
                    "Mod-z": Qe,
                    "Mod-y": et,
                    "Mod-Shift-z": et
                }), hs(t), Wo(), va(), wa(), oo()]
            }),
            dispatchTransaction(n) {
                let {
                    state: r,
                    transactions: i
                } = a.state.applyTransaction(n);
                a.updateState(r), e?.onViewUpdated?.(a), i.some(e => e.docChanged) && (so({
                    editorView: a,
                    entities: e?.getMentionEntities?.() ?? [],
                    allowedMentionTombstoneKinds: e?.getAllowedMentionTombstoneKinds?.() ?? []
                }) || t.dispatchEvent(new Event(vs)))
            },
            handlePaste(e, t) {
                let n = t.clipboardData?.getData(`text/plain`);
                if (n === void 0) return !1;
                let r = t.clipboardData?.getData(`text/html`) ?? ``;
                return t.defaultPrevented ? !0 : ts(n, r) ? (e.dispatch(e.state.tr.replaceSelection(No(n))), e.dispatch(e.state.tr.scrollIntoView()), !0) : r.length > 0 ? !1 : (e.dispatch(e.state.tr.replaceSelection(Po(e.state.schema, n)).scrollIntoView()), !0)
            },
            clipboardTextSerializer(e) {
                return Oo(e.content, !Do(e.content))
            },
            transformPasted(e) {
                return Fo(e, i)
            }
        });
    return so({
        editorView: a,
        entities: e?.getMentionEntities?.() ?? [],
        allowedMentionTombstoneKinds: e?.getAllowedMentionTombstoneKinds?.() ?? []
    }), a
}
var Ss, Cs, ws, Ts = e((() => {
    o(), Ve(), $e(), De(), R(), Ee(), ha(), Io(), Oa(), Lo(), Jo(), Ta(), Zo(), rs(), uo(), ps(), ys(), Ss = 250, Cs = 120, ws = 130
}));

function Es(e, t) {
    e.dom.setAttribute(`aria-readonly`, t ? `true` : `false`), e.setProps({
        editable: () => !t
    })
}

function Ds({
    getMentionEntities: e,
    getAllowedMentionTombstoneKinds: t,
    isReadonly: n,
    onBlur: r,
    onDocChanged: i,
    onInteraction: a,
    onViewUpdated: o,
    root: s
}) {
    let c = xs({
        getMentionEntities: e,
        getAllowedMentionTombstoneKinds: t,
        onViewUpdated: o
    });
    s.append(c.dom), c.dom.dataset.virtualkeyboard = `true`, c.dom.setAttribute(`role`, `textbox`), c.dom.setAttribute(`aria-multiline`, `true`), Es(c, n);
    let l = e => {
            if (e.defaultPrevented || e.button !== 0 || c.dom.getAttribute(`aria-readonly`) === `true` || e.target !== c.dom) return;
            let t = c.dom.lastElementChild;
            t instanceof HTMLElement && e.clientY <= t.getBoundingClientRect().bottom || (e.preventDefault(), e.stopImmediatePropagation(), c.focus(), c.dispatch(c.state.tr.setSelection(K.atEnd(c.state.doc))), a())
        },
        u = ms(c, i);
    return c.dom.addEventListener(`blur`, r), c.dom.addEventListener(`keyup`, a), c.dom.addEventListener(`mouseup`, a), c.dom.addEventListener(`focus`, a), c.dom.addEventListener(`mousedown`, l, !0), {
        editorView: c,
        destroy() {
            u(), c.dom.removeEventListener(`blur`, r), c.dom.removeEventListener(`keyup`, a), c.dom.removeEventListener(`mouseup`, a), c.dom.removeEventListener(`focus`, a), c.dom.removeEventListener(`mousedown`, l, !0), c.destroy()
        }
    }
}
var Os = e((() => {
        R(), Ts(), ys()
    })),
    ks, As, js = e((() => {
        n(), Ts(), ks = (e, t) => e.prompt === t.prompt && e.promptUpdate.revision === t.promptUpdate.revision && e.promptUpdate.source === t.promptUpdate.source, As = ({
            cancelPendingPromptSync: e,
            editorView: t,
            promptSyncState$: n,
            skipNextPromptSync: r
        }) => {
            let i = (n, {
                source: i
            }) => {
                i === `programmatic` && e(), !(i === `editor` && t.hasFocus()) && (Yo(t.state.doc, n) || (i === `programmatic` && r(), Xo(t, n, {
                    addToHistory: !1,
                    moveSelectionToEnd: i !== `programmatic`
                })))
            };
            return ee(n, e => {
                i(e.prompt, {
                    source: e.promptUpdate.source
                })
            }, {
                equals: ks,
                fireImmediately: !0
            })
        }
    })),
    Ms, Ns, Ps, Fs, Is = e((() => {
        Ms = M(), I(), r(), Ns = t(j()), Ps = e => {
            if (!e) return null;
            let t = ie(e, `y`);
            return t instanceof HTMLElement ? t : null
        }, Fs = e => {
            "use forget";
            let t = (0, Ms.c)(10),
                n = (0, Ns.useRef)(null),
                r = (0, Ns.useRef)(null),
                i;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = () => {
                n.current && (n.current.style.overflowY = r.current ?? ``, n.current = null, r.current = null)
            }, t[0] = i) : i = t[0];
            let a = w(i),
                o;
            t[1] !== e || t[2] !== a ? (o = () => {
                let t = Ps(e.current);
                if (!t) {
                    a();
                    return
                }
                n.current !== t && (a(), n.current = t, r.current = t.style.overflowY, t.style.overflowY = `hidden`)
            }, t[1] = e, t[2] = a, t[3] = o) : o = t[3];
            let s = w(o),
                c, l;
            t[4] === a ? (c = t[5], l = t[6]) : (c = () => a, l = [a], t[4] = a, t[5] = c, t[6] = l), (0, Ns.useEffect)(c, l);
            let u;
            return t[7] !== s || t[8] !== a ? (u = {
                lockScroll: s,
                unlockScroll: a
            }, t[7] = s, t[8] = a, t[9] = u) : u = t[9], u
        }
    }));

function Ls(e) {
    "use forget";
    let t = (0, zs.c)(122),
        {
            commandConfig: n,
            mentionEntities: r,
            allowedMentionTombstoneKinds: a,
            readonly: o,
            labelId: s,
            onBlur: c,
            onChange: l,
            onChangeDebounceMs: u,
            onIsEmptyChange: d,
            placeholderText: f,
            promptSyncState$: p
        } = e,
        m = u === void 0 ? Bs : u,
        h = ne(),
        g = (0, Q.useRef)(null),
        _ = (0, Q.useRef)(null),
        v = (0, Q.useRef)(0),
        y = (0, Q.useRef)(null),
        b = (0, Q.useRef)(null),
        x = (0, Q.useRef)(null),
        S = (0, Q.useRef)(null),
        {
            heading1: C,
            heading2: T,
            heading3: E,
            paragraph: ee
        } = f,
        te;
    t[0] === r ? te = t[1] : (te = {
        mentionEntities: r
    }, t[0] = r, t[1] = te);
    let {
        clearEntityTags: D,
        entityTagPortals: O,
        syncEntityTags: k
    } = Ra(te), A;
    t[2] === r ? A = t[3] : (A = () => r, t[2] = r, t[3] = A);
    let j = w(A),
        M;
    t[4] === a ? M = t[5] : (M = () => a, t[4] = a, t[5] = M);
    let re = w(M),
        ie;
    t[6] === p ? ie = t[7] : (ie = () => p(), t[6] = p, t[7] = ie);
    let ae = w(ie),
        oe;
    t[8] !== l || t[9] !== o ? (oe = () => {
        if (o) return;
        let e = g.current;
        if (!e) return;
        let t = Da(e.state.doc);
        l(t)
    }, t[8] = l, t[9] = o, t[10] = oe) : oe = t[10];
    let N = w(oe),
        P;
    t[11] === d ? P = t[12] : (P = () => {
        let e = g.current;
        e && d(Da(e.state.doc).trim().length === 0)
    }, t[11] = d, t[12] = P);
    let se = w(P),
        ce;
    t[13] === N ? ce = t[14] : (ce = () => N(), t[13] = N, t[14] = ce);
    let le;
    t[15] !== m || t[16] !== ce ? (le = i(ce, m, {
        trailing: !0
    }), t[15] = m, t[16] = ce, t[17] = le) : le = t[17];
    let F = le,
        ue;
    t[18] !== F || t[19] !== m || t[20] !== N ? (ue = () => {
        if (m === 0) {
            N();
            return
        }
        F()
    }, t[18] = F, t[19] = m, t[20] = N, t[21] = ue) : ue = t[21];
    let de = w(ue),
        fe;
    t[22] !== F || t[23] !== m ? (fe = () => {
        m !== 0 && F.flush()
    }, t[22] = F, t[23] = m, t[24] = fe) : fe = t[24];
    let pe = w(fe),
        [I, me] = (0, Q.useState)(null),
        [he, ge] = (0, Q.useState)(!1),
        {
            lockScroll: _e,
            unlockScroll: L
        } = Fs(_),
        R;
    t[25] !== _e || t[26] !== L ? (R = e => {
        let t = typeof e == `function` ? e(b.current) : e;
        t ? _e() : L(), b.current = t, me(t)
    }, t[25] = _e, t[26] = L, t[27] = R) : R = t[27];
    let z = w(R),
        ve;
    t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (ve = e => {
        let t = g.current;
        if (!t) return;
        let {
            selection: n
        } = t.state, r = t.state.tr;
        if (typeof e == `object`) r = r.insertText(e.insertText);
        else if (!n.empty) r = r.deleteSelection();
        else if (e === `backspace`) {
            if (n.from <= 0) return;
            r = r.delete(n.from - 1, n.from)
        } else {
            let e = t.state.doc.content.size;
            if (n.from >= e) return;
            r = r.delete(n.from, n.from + 1)
        }
        t.focus(), t.dispatch(r)
    }, t[28] = ve) : ve = t[28];
    let ye = w(ve),
        be;
    t[29] === o ? be = t[30] : (be = e => {
        if (o) return;
        let t = g.current;
        !t || !t.state.selection.empty || (S.current = {
            kind: e === `/` ? `slash` : `mention`,
            from: t.state.selection.from
        })
    }, t[29] = o, t[30] = be);
    let B = w(be),
        xe;
    t[31] === z ? xe = t[32] : (xe = () => {
        x.current = null, S.current = null;
        let e = g.current;
        e && Ko(e, null), z(null)
    }, t[31] = z, t[32] = xe);
    let V = w(xe),
        Se;
    t[33] !== n || t[34] !== V || t[35] !== h || t[36] !== r || t[37] !== o || t[38] !== z ? (Se = () => {
        if (o) {
            V();
            return
        }
        let e = g.current;
        if (!e) {
            V();
            return
        }
        let t = zt(e);
        if (!t) {
            V();
            return
        }
        let i = n;
        if (t.kind === `slash` && i == null) {
            V();
            return
        }
        let a = b.current,
            s = S.current,
            c = a?.kind === t.kind && a.from === t.from,
            l = s?.kind === t.kind && s.from === t.from;
        if (!c && !l) {
            V();
            return
        }
        let u = l ? Ks(t, e.state.selection.from) : t;
        if (u.query.includes(`  `)) {
            V();
            return
        }
        let d = `${u.kind}:${u.from}`;
        x.current?.key !== d && (x.current = null);
        let f = e.coordsAtPos(u.from),
            p = u.kind === `slash` && i ? Rt(i.slashActions, u.query) : Lt(r, {
                app: h.formatMessage(Js.appsGroup),
                file: h.formatMessage(Js.filesGroup),
                skill: h.formatMessage(Js.skillsGroup),
                slack_channel: h.formatMessage(Js.slackChannelsGroup),
                tool: h.formatMessage(Js.toolsGroup)
            }, u.query);
        if (Yt(p).length > 0 || u.query.length === 0) x.current = null;
        else {
            let e = x.current?.queryLength ?? u.query.length;
            if (u.query.length > e + Vs) {
                V();
                return
            }
            x.current = {
                key: d,
                queryLength: e
            }
        }
        let m = qs({
            currentMenu: a,
            sections: p,
            anchorRect: Us(f),
            kind: u.kind,
            from: u.from,
            replaceFrom: u.replaceFrom,
            to: u.to,
            query: u.query
        });
        Ko(e, {
            from: u.from,
            to: u.to,
            text: u.query.length === 0 ? h.formatMessage(Js.typeToSearch) : ``
        }), z(m)
    }, t[33] = n, t[34] = V, t[35] = h, t[36] = r, t[37] = o, t[38] = z, t[39] = Se) : Se = t[39];
    let Ce = w(Se),
        H;
    t[40] === Symbol.for(`react.memo_cache_sentinel`) ? (H = () => {
        typeof window > `u` || y.current == null || (cancelAnimationFrame(y.current), y.current = null)
    }, t[40] = H) : H = t[40];
    let U = w(H),
        we;
    t[41] === Ce ? we = t[42] : (we = () => {
        typeof window > `u` || y.current != null || (y.current = requestAnimationFrame(() => {
            y.current = null, Ce()
        }))
    }, t[41] = Ce, t[42] = we);
    let W = w(we),
        Te;
    t[43] === z ? Te = t[44] : (Te = e => {
        let t = b.current;
        if (!t) return;
        let n = t.activePanelDepth,
            r = Hs({
                activeItemId: t.activeItemIds[n] ?? null,
                direction: e,
                itemIds: Ws({
                    openSubmenuPath: t.openSubmenuPath,
                    sections: t.sections,
                    depth: n
                }).map(Rs)
            });
        if (r == null) return;
        let i = t.activeItemIds.slice(0, n + 1);
        i[n] = r, z({
            ...t,
            activeItemIds: i
        })
    }, t[43] = z, t[44] = Te);
    let Ee = w(Te),
        De;
    t[45] === z ? De = t[46] : (De = e => {
        let {
            depth: t,
            itemId: n
        } = e, r = b.current;
        if (!r || !Gs({
                openSubmenuPath: r.openSubmenuPath,
                sections: r.sections,
                depth: t,
                itemId: n
            })) return;
        let i = r.activeItemIds.slice(0, t + 1);
        i[t] = n, z({
            ...r,
            activeItemIds: i,
            activePanelDepth: t
        })
    }, t[45] = z, t[46] = De);
    let Oe = w(De),
        ke;
    t[47] === z ? ke = t[48] : (ke = e => {
        let {
            activateFirstItem: t,
            depth: n,
            itemId: r
        } = e, i = t !== void 0 && t, a = b.current, o = r ?? a?.activeItemIds[n] ?? null;
        if (!a || o == null) return;
        let s = Gs({
            openSubmenuPath: a.openSubmenuPath,
            sections: a.sections,
            depth: n,
            itemId: o
        });
        if (!s?.submenuItems?.length) return;
        let c = a.activeItemIds.slice(0, n + 2);
        c[n] = o, c[n + 1] = i ? s.submenuItems[0]?.id ?? null : a.activeItemIds[n + 1] && s.submenuItems.some(e => e.id === a.activeItemIds[n + 1]) ? a.activeItemIds[n + 1] : null;
        let l = a.openSubmenuPath.slice(0, n);
        l[n] = o, z({
            ...a,
            activeItemIds: c,
            activePanelDepth: i ? n + 1 : n,
            openSubmenuPath: l
        })
    }, t[47] = z, t[48] = ke);
    let G = w(ke),
        Ae;
    t[49] === z ? Ae = t[50] : (Ae = e => {
        let t = b.current;
        if (!t) return;
        let n = t.activeItemIds.slice(0, e + 1),
            r = t.openSubmenuPath.slice(0, e);
        z({
            ...t,
            activeItemIds: n,
            activePanelDepth: Math.min(t.activePanelDepth, e),
            openSubmenuPath: r
        })
    }, t[49] = z, t[50] = Ae);
    let je = w(Ae),
        Me;
    t[51] !== n || t[52] !== V || t[53] !== r || t[54] !== W || t[55] !== N ? (Me = e => {
        let t = g.current,
            i = b.current;
        if (!t || !i || !e) return;
        if (t.focus(), i.kind === `mention`) {
            let n = r.find(t => t.id === e);
            if (!n) return;
            lo({
                editorView: t,
                entity: n,
                from: i.replaceFrom,
                to: i.to
            }), N(), W();
            return
        }
        let a = n;
        if (!a) return;
        let o = a.slashActions.find(t => t.id === e);
        o && (t.dispatch(t.state.tr.insertText(``, i.replaceFrom, i.to).setMeta(`addToHistory`, !1)), N(), V(), a.onRunSlashAction(o.id))
    }, t[51] = n, t[52] = V, t[53] = r, t[54] = W, t[55] = N, t[56] = Me) : Me = t[56];
    let Ne = w(Me),
        K;
    t[57] !== je || t[58] !== ye || t[59] !== V || t[60] !== B || t[61] !== Ee || t[62] !== G || t[63] !== Ne ? (K = e => {
        !e.isComposing && e.keyCode !== 229 && !e.altKey && !e.ctrlKey && !e.metaKey && (e.key === `/` || e.key === `@`) && B(e.key);
        let t = b.current;
        if (!(!t || e.isComposing || e.keyCode === 229) && !(e.altKey || e.ctrlKey || e.metaKey)) {
            if (e.key === `Escape`) {
                e.preventDefault(), e.stopPropagation(), V(), g.current?.focus();
                return
            }
            if (e.key === `ArrowDown`) {
                e.preventDefault(), e.stopPropagation(), Ee(`next`);
                return
            }
            if (e.key === `ArrowUp`) {
                e.preventDefault(), e.stopPropagation(), Ee(`previous`);
                return
            }
            if (e.key === `ArrowRight`) {
                let n = Gs({
                    openSubmenuPath: t.openSubmenuPath,
                    sections: t.sections,
                    depth: t.activePanelDepth,
                    itemId: t.activeItemIds[t.activePanelDepth] ?? null
                });
                if (!n?.submenuItems?.length) return;
                e.preventDefault(), e.stopPropagation(), G({
                    activateFirstItem: !0,
                    depth: t.activePanelDepth,
                    itemId: n.id
                });
                return
            }
            if (e.key === `ArrowLeft`) {
                if (t.activePanelDepth === 0) return;
                e.preventDefault(), e.stopPropagation(), je(t.activePanelDepth - 1);
                return
            }
            if (e.key === `Enter` || e.key === `Tab`) {
                e.preventDefault(), e.stopPropagation();
                let n = t.activePanelDepth,
                    r = Gs({
                        openSubmenuPath: t.openSubmenuPath,
                        sections: t.sections,
                        depth: n,
                        itemId: t.activeItemIds[n] ?? null
                    }) ?? Ws({
                        openSubmenuPath: t.openSubmenuPath,
                        sections: t.sections,
                        depth: n
                    }).at(0) ?? null;
                if (r == null) return;
                if (r.submenuItems?.length) {
                    G({
                        activateFirstItem: !0,
                        depth: n,
                        itemId: r.id
                    });
                    return
                }
                Ne(r.id);
                return
            }
            if (e.key === `Backspace` || e.key === `Delete`) {
                e.preventDefault(), e.stopPropagation(), ye(e.key === `Backspace` ? `backspace` : `delete`);
                return
            }
            e.key.length === 1 && (e.preventDefault(), e.stopPropagation(), ye({
                insertText: e.key
            }))
        }
    }, t[57] = je, t[58] = ye, t[59] = V, t[60] = B, t[61] = Ee, t[62] = G, t[63] = Ne, t[64] = K) : K = t[64];
    let Pe = w(K),
        Fe;
    t[65] !== pe || t[66] !== c || t[67] !== W ? (Fe = () => {
        pe();
        let e = g.current;
        e != null && c?.(Da(e.state.doc)), W()
    }, t[65] = pe, t[66] = c, t[67] = W, t[68] = Fe) : Fe = t[68];
    let Ie = w(Fe),
        Le = (0, Q.useRef)(o),
        Re, ze;
    t[69] !== U || t[70] !== D || t[71] !== F || t[72] !== pe || t[73] !== re || t[74] !== j || t[75] !== Ie || t[76] !== ae || t[77] !== W || t[78] !== de || t[79] !== k || t[80] !== se ? (Re = () => {
        let e = _.current;
        if (!e) return;
        ge(!1);
        let t = Le.current,
            n = Ds({
                getMentionEntities: j,
                getAllowedMentionTombstoneKinds: re,
                root: e,
                isReadonly: t,
                onBlur: Ie,
                onDocChanged: () => {
                    let e = g.current;
                    if (e) {
                        if (W(), se(), v.current > 0) {
                            --v.current;
                            return
                        }
                        e.hasFocus() && de()
                    }
                },
                onInteraction: () => {
                    W()
                },
                onViewUpdated: e => {
                    k(e.dom)
                }
            }),
            {
                editorView: r
            } = n;
        g.current = r, k(r.dom);
        let i = As({
            cancelPendingPromptSync: F.cancel,
            editorView: r,
            promptSyncState$: ae,
            skipNextPromptSync: () => {
                v.current += 1
            }
        });
        W();
        let a = requestAnimationFrame(() => {
            ge(!0)
        });
        return () => {
            cancelAnimationFrame(a), i(), U(), S.current = null, pe(), F.cancel(), D(), n.destroy(), g.current = null
        }
    }, ze = [F, pe, de, D, U, Ie, ae, W, se, j, re, k], t[69] = U, t[70] = D, t[71] = F, t[72] = pe, t[73] = re, t[74] = j, t[75] = Ie, t[76] = ae, t[77] = W, t[78] = de, t[79] = k, t[80] = se, t[81] = Re, t[82] = ze) : (Re = t[81], ze = t[82]), (0, Q.useEffect)(Re, ze);
    let Be, Ve;
    t[83] !== V || t[84] !== o || t[85] !== W ? (Be = () => {
        let e = g.current;
        if (e) {
            if (Es(e, o), o) {
                V(), e.dom.blur();
                return
            }
            W()
        }
    }, Ve = [V, o, W], t[83] = V, t[84] = o, t[85] = W, t[86] = Be, t[87] = Ve) : (Be = t[86], Ve = t[87]), (0, Q.useEffect)(Be, Ve);
    let He, Ue;
    t[88] !== C || t[89] !== T || t[90] !== E || t[91] !== s || t[92] !== ee || t[93] !== W ? (He = () => {
        let e = g.current;
        e && (e.dom.setAttribute(`aria-labelledby`, s), Go(e, {
            heading1: C,
            heading2: T,
            heading3: E,
            paragraph: ee
        }), W())
    }, Ue = [s, C, T, E, ee, W], t[88] = C, t[89] = T, t[90] = E, t[91] = s, t[92] = ee, t[93] = W, t[94] = He, t[95] = Ue) : (He = t[94], Ue = t[95]), (0, Q.useEffect)(He, Ue);
    let We, Ge;
    t[96] === W ? (We = t[97], Ge = t[98]) : (We = () => {
        if (typeof document > `u` || typeof window > `u`) return;
        let e = () => {
            W()
        };
        return window.addEventListener(`resize`, e), document.addEventListener(`selectionchange`, e), () => {
            window.removeEventListener(`resize`, e), document.removeEventListener(`selectionchange`, e)
        }
    }, Ge = [W], t[96] = W, t[97] = We, t[98] = Ge), (0, Q.useEffect)(We, Ge);
    let Ke, qe;
    t[99] !== Pe || t[100] !== B ? (Ke = () => {
        let e = g.current;
        if (!e) return;
        let t = e => {
            e.inputType === `insertText` && (e.data === `/` || e.data === `@`) && B(e.data)
        };
        return e.dom.addEventListener(`keydown`, Pe, !0), e.dom.addEventListener(`beforeinput`, t), () => {
            e.dom.removeEventListener(`keydown`, Pe, !0), e.dom.removeEventListener(`beforeinput`, t)
        }
    }, qe = [Pe, B], t[99] = Pe, t[100] = B, t[101] = Ke, t[102] = qe) : (Ke = t[101], qe = t[102]), (0, Q.useEffect)(Ke, qe);
    let Je, Ye;
    t[103] !== a || t[104] !== r || t[105] !== W || t[106] !== k || t[107] !== N ? (Je = () => {
        let e = g.current;
        if (!e) return;
        let t = so({
            editorView: e,
            entities: r,
            allowedMentionTombstoneKinds: a
        });
        k(e.dom), t && N(), W()
    }, Ye = [a, r, W, N, k], t[103] = a, t[104] = r, t[105] = W, t[106] = k, t[107] = N, t[108] = Je, t[109] = Ye) : (Je = t[108], Ye = t[109]), (0, Q.useEffect)(Je, Ye);
    let Xe, Ze;
    t[110] === I ? (Xe = t[111], Ze = t[112]) : (Xe = () => {
        let e = g.current;
        if (e) {
            if (I) {
                e.dom.setAttribute(`aria-controls`, `instructions-command-menu`), e.dom.setAttribute(`aria-expanded`, `true`);
                let t = I.activeItemIds[I.activePanelDepth] == null ? null : Jt({
                    itemId: I.activeItemIds[I.activePanelDepth] ?? ``,
                    panelDepth: I.activePanelDepth
                });
                t ? e.dom.setAttribute(`aria-activedescendant`, t) : e.dom.removeAttribute(`aria-activedescendant`);
                return
            }
            e.dom.removeAttribute(`aria-controls`), e.dom.removeAttribute(`aria-expanded`), e.dom.removeAttribute(`aria-activedescendant`)
        }
    }, Ze = [I], t[110] = I, t[111] = Xe, t[112] = Ze), (0, Q.useEffect)(Xe, Ze);
    let Qe;
    t[113] === Symbol.for(`react.memo_cache_sentinel`) ? (Qe = () => {
        g.current?.focus()
    }, t[113] = Qe) : Qe = t[113];
    let $e;
    return t[114] !== je || t[115] !== I || t[116] !== O || t[117] !== he || t[118] !== G || t[119] !== Ne || t[120] !== Oe ? ($e = {
        commandMenu: I,
        entityTagPortals: O,
        focusEditor: Qe,
        isEditorReady: he,
        openCommandSubmenu: G,
        rootRef: _,
        closeCommandSubmenusFromDepth: je,
        setActiveCommandMenuItem: Oe,
        selectCommandItem: Ne
    }, t[114] = je, t[115] = I, t[116] = O, t[117] = he, t[118] = G, t[119] = Ne, t[120] = Oe, t[121] = $e) : $e = t[121], $e
}

function Rs(e) {
    return e.id
}
var zs, Q, Bs, Vs, Hs, Us, Ws, Gs, Ks, qs, Js, Ys = e((() => {
    zs = M(), r(), T(), Q = t(j()), A(), sn(), Ts(), Os(), za(), uo(), js(), Is(), Bs = 1e3, Vs = 2, Hs = ({
        activeItemId: e,
        direction: t,
        itemIds: n
    }) => {
        if (n.length === 0) return null;
        if (e == null) return t === `next` ? n[0] : n[n.length - 1];
        let r = n.indexOf(e);
        return r === -1 ? t === `next` ? n[0] : n[n.length - 1] : n[(r + (t === `next` ? 1 : -1) + n.length) % n.length]
    }, Us = e => ({
        bottom: e.bottom,
        height: Math.max(0, e.bottom - e.top),
        left: e.left,
        right: e.right,
        top: e.top,
        width: Math.max(0, e.right - e.left)
    }), Ws = ({
        openSubmenuPath: e,
        sections: t,
        depth: n
    }) => Xt({
        path: e.slice(0, n),
        sections: t
    }), Gs = ({
        openSubmenuPath: e,
        sections: t,
        depth: n,
        itemId: r
    }) => r == null ? null : Ws({
        openSubmenuPath: e,
        sections: t,
        depth: n
    }).find(e => e.id === r) ?? null, Ks = (e, t) => {
        let n = Math.max(0, t - e.from - 1);
        return {
            ...e,
            query: e.query.slice(0, n),
            to: t
        }
    }, qs = ({
        currentMenu: e,
        sections: t,
        anchorRect: n,
        kind: r,
        from: i,
        replaceFrom: a,
        to: o,
        query: s
    }) => {
        let c = Yt(t),
            l = [e?.activeItemIds[0] && c.some(t => t.id === e.activeItemIds[0]) ? e.activeItemIds[0] : c[0]?.id ?? null],
            u = [];
        for (let n = 0;; n += 1) {
            let r = e?.openSubmenuPath[n];
            if (r == null || !Gs({
                    openSubmenuPath: u,
                    sections: t,
                    depth: n,
                    itemId: r
                })?.submenuItems?.length || l[n] !== r) break;
            u.push(r);
            let i = Ws({
                    openSubmenuPath: u,
                    sections: t,
                    depth: n + 1
                }),
                a = e?.activeItemIds[n + 1];
            l[n + 1] = a && i.some(e => e.id === a) ? a : e?.activePanelDepth === n + 1 ? i[0]?.id ?? null : null
        }
        return {
            activeItemIds: l,
            activePanelDepth: Math.min(e?.activePanelDepth ?? 0, u.length),
            anchorRect: n,
            kind: r,
            from: i,
            openSubmenuPath: u,
            replaceFrom: a,
            to: o,
            query: s,
            sections: t
        }
    }, Js = k({
        appsGroup: {
            id: `Hermes.GptStudio.Builder.UseInstructionsTextAreaController.appsGroup`,
            defaultMessage: `Apps`
        },
        slackChannelsGroup: {
            id: `Hermes.GptStudio.Builder.UseInstructionsTextAreaController.slackChannelsGroup`,
            defaultMessage: `Slack channels`
        },
        toolsGroup: {
            id: `Hermes.GptStudio.Builder.UseInstructionsTextAreaController.toolsGroup`,
            defaultMessage: `Tools`
        },
        skillsGroup: {
            id: `Hermes.GptStudio.Builder.UseInstructionsTextAreaController.skillsGroup`,
            defaultMessage: `Skills`
        },
        filesGroup: {
            id: `Hermes.GptStudio.Builder.UseInstructionsTextAreaController.filesGroup`,
            defaultMessage: `Files`
        },
        typeToSearch: {
            id: `Hermes.GptStudio.Builder.UseInstructionsTextAreaController.typeToSearch`,
            defaultMessage: `Type to search`
        }
    })
}));

function Xs() {}

function Zs() {
    return ae(pe())
}

function Qs(e) {
    !nc(e.target) || e.button !== 0 || (e.preventDefault(), e.stopPropagation())
}

function $s(e) {
    let t = nc(e.target);
    if (!t) return;
    let n = t.dataset.detailPath;
    n && (e.preventDefault(), e.stopPropagation(), ut.navigate(n))
}
var ec, tc, $, nc, rc, ic, ac = e((() => {
    ec = M(), lt(), n(), Xe(), C(), tc = t(j()), A(), me(), Mn(), vo(), Co(), Ys(), $ = D(), nc = e => {
        if (!(e instanceof Element)) return null;
        let t = e.closest(`[data-instructions-mention-node][data-detail-path]`);
        return t instanceof HTMLElement ? t : null
    }, rc = k({
        heading1Placeholder: {
            id: `Hermes.GptStudio.Builder.InstructionsTextArea.heading1Placeholder`,
            defaultMessage: `Heading 1`
        },
        heading2Placeholder: {
            id: `Hermes.GptStudio.Builder.InstructionsTextArea.heading2Placeholder`,
            defaultMessage: `Heading 2`
        },
        heading3Placeholder: {
            id: `Hermes.GptStudio.Builder.InstructionsTextArea.heading3Placeholder`,
            defaultMessage: `Heading 3`
        },
        paragraphPlaceholderWithSlash: {
            id: `Hermes.GptStudio.Builder.InstructionsTextArea.paragraphPlaceholderWithSlash`,
            defaultMessage: `Type ‘/’ for commands`
        },
        paragraphPlaceholderWithMentions: {
            id: `Hermes.GptStudio.Builder.InstructionsTextArea.paragraphPlaceholderWithMentions`,
            defaultMessage: `Type ‘@’ to mention or ‘/’ for commands`
        },
        noCommands: {
            id: `Hermes.GptStudio.Builder.InstructionsTextArea.noCommands`,
            defaultMessage: `No matching commands`
        },
        noMentions: {
            id: `Hermes.GptStudio.Builder.InstructionsTextArea.noMentions`,
            defaultMessage: `No matching mentions`
        },
        noMentionTargets: {
            id: `Hermes.GptStudio.Builder.InstructionsTextArea.noMentionTargets`,
            defaultMessage: `No items to mention`
        },
        noCommandsAvailable: {
            id: `Hermes.GptStudio.Builder.InstructionsTextArea.noCommandsAvailable`,
            defaultMessage: `No commands available`
        }
    }), ic = e => {
        "use forget";
        let t = (0, ec.c)(88),
            {
                className: n,
                commandConfig: r,
                mentionEntities: i,
                allowedMentionTombstoneKinds: a,
                readonly: o,
                label: s,
                labelTooltip: c,
                onBlur: u,
                onChange: d,
                placeholder: f,
                onChangeDebounceMs: p,
                promptSyncState$: m
            } = e,
            h = o !== void 0 && o,
            g = d === void 0 ? Xs : d,
            v = ne(),
            y = (0, tc.useId)(),
            b;
        t[0] === m ? b = t[1] : (b = () => m().prompt, t[0] = m, t[1] = b);
        let x = l(b),
            S = l(Zs),
            C;
        t[2] === x ? C = t[3] : (C = () => x.trim().length === 0, t[2] = x, t[3] = C);
        let [w, T] = (0, tc.useState)(C), [E, ee] = (0, tc.useState)(null), te;
        t[4] === i ? te = t[5] : (te = i ?? [], t[4] = i, t[5] = te);
        let D = te,
            O = r != null,
            k;
        bb0: {
            if (h) {
                k = ``;
                break bb0
            }
            if (w) {
                k = f;
                break bb0
            }
            if (D.length > 0) {
                let e;
                t[6] !== O || t[7] !== v ? (e = O ? v.formatMessage(rc.paragraphPlaceholderWithMentions) : ``, t[6] = O, t[7] = v, t[8] = e) : e = t[8], k = e;
                break bb0
            }
            let e;t[9] !== O || t[10] !== v ? (e = O ? v.formatMessage(rc.paragraphPlaceholderWithSlash) : ``, t[9] = O, t[10] = v, t[11] = e) : e = t[11],
            k = e
        }
        let A = k,
            j;
        t[12] === a ? j = t[13] : (j = a ?? [], t[12] = a, t[13] = j);
        let M = j,
            re;
        t[14] === v ? re = t[15] : (re = v.formatMessage(rc.heading1Placeholder), t[14] = v, t[15] = re);
        let ie;
        t[16] === v ? ie = t[17] : (ie = v.formatMessage(rc.heading2Placeholder), t[16] = v, t[17] = ie);
        let ae;
        t[18] === v ? ae = t[19] : (ae = v.formatMessage(rc.heading3Placeholder), t[18] = v, t[19] = ae);
        let oe;
        t[20] !== A || t[21] !== ae || t[22] !== re || t[23] !== ie ? (oe = {
            paragraph: A,
            heading1: re,
            heading2: ie,
            heading3: ae
        }, t[20] = A, t[21] = ae, t[22] = re, t[23] = ie, t[24] = oe) : oe = t[24];
        let N;
        t[25] !== r || t[26] !== y || t[27] !== u || t[28] !== g || t[29] !== p || t[30] !== m || t[31] !== h || t[32] !== M || t[33] !== D || t[34] !== oe ? (N = {
            commandConfig: r,
            mentionEntities: D,
            allowedMentionTombstoneKinds: M,
            readonly: h,
            labelId: y,
            onBlur: u,
            onChange: g,
            onIsEmptyChange: T,
            placeholderText: oe,
            onChangeDebounceMs: p,
            promptSyncState$: m
        }, t[25] = r, t[26] = y, t[27] = u, t[28] = g, t[29] = p, t[30] = m, t[31] = h, t[32] = M, t[33] = D, t[34] = oe, t[35] = N) : N = t[35];
        let {
            commandMenu: P,
            entityTagPortals: se,
            focusEditor: ce,
            isEditorReady: le,
            openCommandSubmenu: F,
            rootRef: ue,
            closeCommandSubmenusFromDepth: de,
            setActiveCommandMenuItem: fe,
            selectCommandItem: pe
        } = Ls(N), I = !le, me = null;
        if (P)
            if (P.kind === `mention` && D.length === 0) {
                let e;
                t[36] === v ? e = t[37] : (e = v.formatMessage(rc.noMentionTargets), t[36] = v, t[37] = e), me = e
            } else if (P.kind === `slash` && r?.slashActions.length === 0) {
            let e;
            t[38] === v ? e = t[39] : (e = v.formatMessage(rc.noCommandsAvailable), t[38] = v, t[39] = e), me = e
        } else {
            let e;
            t[40] !== P.kind || t[41] !== v ? (e = v.formatMessage(P.kind === `mention` ? rc.noMentions : rc.noCommands), t[40] = P.kind, t[41] = v, t[42] = e) : e = t[42], me = e
        }
        let he = Qs,
            ge = $s,
            _e;
        t[43] === Symbol.for(`react.memo_cache_sentinel`) ? (_e = e => {
            ee(e)
        }, t[43] = _e) : _e = t[43];
        let L = _e,
            R;
        t[44] !== ce || t[45] !== s || t[46] !== y ? (R = (0, $.jsx)(`label`, {
            id: y,
            className: `text-tertiary text-sm`,
            onClick: ce,
            children: s
        }), t[44] = ce, t[45] = s, t[46] = y, t[47] = R) : R = t[47];
        let z = R,
            ve;
        t[48] === n ? ve = t[49] : (ve = _(`text-token-text-primary flex flex-col`, n), t[48] = n, t[49] = ve);
        let ye;
        t[50] !== z || t[51] !== c ? (ye = (0, $.jsx)(`div`, {
            className: `m-auto mb-3 w-full max-w-(--builder-content-width)`,
            children: c == null ? z : (0, $.jsx)(Ye, {
                content: c,
                side: `left`,
                sideOffset: 10,
                compact: !0,
                maxWidth: 230,
                children: (0, $.jsx)(Ye.TriggerDecorator, {
                    className: `decoration-solid underline-offset-1`,
                    children: z
                })
            })
        }), t[50] = z, t[51] = c, t[52] = ye) : ye = t[52];
        let be;
        t[53] !== S || t[54] !== y || t[55] !== x || t[56] !== h || t[57] !== M || t[58] !== D || t[59] !== A || t[60] !== I ? (be = I && (0, $.jsx)(`div`, {
            className: So.EditorRoot,
            "data-assistant-focus": `instructions-editor`,
            "data-readonly": h ? `` : void 0,
            "data-remix": S ? `true` : void 0,
            children: x.trim().length > 0 ? (0, $.jsx)(_o, {
                labelId: y,
                markdown: x,
                mentionEntities: D,
                allowedMentionTombstoneKinds: M
            }) : (0, $.jsx)(`div`, {
                className: `ProseMirror`,
                "aria-labelledby": y,
                "aria-multiline": `true`,
                "aria-readonly": `true`,
                role: `textbox`,
                children: (0, $.jsx)(`p`, {
                    className: `placeholder`,
                    "data-placeholder": A,
                    children: (0, $.jsx)(`br`, {})
                })
            })
        }), t[53] = S, t[54] = y, t[55] = x, t[56] = h, t[57] = M, t[58] = D, t[59] = A, t[60] = I, t[61] = be) : be = t[61];
        let B = h ? `` : void 0,
            xe = S ? `true` : void 0,
            V;
        t[62] === I ? V = t[63] : (V = I ? {
            display: `none`
        } : void 0, t[62] = I, t[63] = V);
        let Se;
        t[64] !== ue || t[65] !== B || t[66] !== xe || t[67] !== V ? (Se = (0, $.jsx)(`div`, {
            ref: ue,
            className: So.EditorRoot,
            "data-assistant-focus": `instructions-editor`,
            "data-readonly": B,
            "data-remix": xe,
            style: V
        }), t[64] = ue, t[65] = B, t[66] = xe, t[67] = V, t[68] = Se) : Se = t[68];
        let Ce;
        t[69] !== de || t[70] !== P || t[71] !== me || t[72] !== F || t[73] !== h || t[74] !== pe || t[75] !== fe || t[76] !== I || t[77] !== E ? (Ce = !h && !I && P && (0, $.jsx)(jn, {
            activeItemIds: P.activeItemIds,
            anchorRect: P.anchorRect,
            boundaryElement: E,
            emptyLabel: me ?? ``,
            onCloseSubmenusFromDepth: de,
            onHighlightItem: fe,
            onOpenSubmenu: F,
            onSelect: pe,
            openSubmenuPath: P.openSubmenuPath,
            sections: P.sections
        }), t[69] = de, t[70] = P, t[71] = me, t[72] = F, t[73] = h, t[74] = pe, t[75] = fe, t[76] = I, t[77] = E, t[78] = Ce) : Ce = t[78];
        let H;
        t[79] !== se || t[80] !== be || t[81] !== Se || t[82] !== Ce ? (H = (0, $.jsxs)(`div`, {
            ref: L,
            className: So.EditorSurface,
            onClick: ge,
            onPointerDownCapture: he,
            children: [be, Se, Ce, se]
        }), t[79] = se, t[80] = be, t[81] = Se, t[82] = Ce, t[83] = H) : H = t[83];
        let U;
        return t[84] !== ve || t[85] !== ye || t[86] !== H ? (U = (0, $.jsxs)(`div`, {
            className: ve,
            children: [ye, H]
        }), t[84] = ve, t[85] = ye, t[86] = H, t[87] = U) : U = t[87], U
    }
}));

function oc() {
    let e = pe();
    return {
        currentFileTreeId: e.currentGpt.fileTreeId,
        isBuilderLoading: e.isLoading,
        slackDeployments: e.currentGpt.deployments.slack
    }
}
var sc, cc, lc = e((() => {
    sc = M(), me(), n(), sn(), wt(), cc = e => {
        "use forget";
        let t = (0, sc.c)(17),
            {
                canUseWebSearch: n,
                connectorById: r,
                connectorTools: i,
                hasPersistedGpt: a,
                memoryTool: o,
                skills: s
            } = e,
            {
                currentFileTreeId: c,
                isBuilderLoading: u,
                slackDeployments: d
            } = l(oc),
            f;
        t[0] === a ? f = t[1] : (f = {
            depth: null,
            enabled: a
        }, t[0] = a, t[1] = f);
        let {
            data: p,
            isFetched: m
        } = se(f), h = o != null, g;
        t[2] !== n || t[3] !== r || t[4] !== i || t[5] !== p || t[6] !== s || t[7] !== d || t[8] !== h ? (g = Ft({
            connectorById: r,
            connectorTools: i,
            fileTree: p,
            hasMemoryTool: h,
            hasImageGenerationTool: !0,
            hasWebSearchTool: n,
            skills: s,
            slackDeployments: d
        }), t[2] = n, t[3] = r, t[4] = i, t[5] = p, t[6] = s, t[7] = d, t[8] = h, t[9] = g) : g = t[9];
        let _ = g,
            v;
        bb0: {
            if (u) {
                let e;
                t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (e = [], t[10] = e) : e = t[10], v = e;
                break bb0
            }
            let e;t[11] !== c || t[12] !== m ? (e = [`app`, `file_persistence`, `skill`, `slack_channel`, `web_search`, `image_generation`], (c == null || m) && e.push(`file`), t[11] = c, t[12] = m, t[13] = e) : e = t[13],
            v = e
        }
        let y = v,
            b;
        return t[14] !== y || t[15] !== _ ? (b = {
            allowedMentionTombstoneKinds: y,
            mentionEntities: _
        }, t[14] = y, t[15] = _, t[16] = b) : b = t[16], b
    }
}));
export {
    It as a, ac as i, cc as n, sn as o, ic as r, lc as t
};
//# sourceMappingURL=17ffbb22-o1tt74gv2daquxz8.js.map