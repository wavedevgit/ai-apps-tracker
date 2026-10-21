import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bn as t,
    Ln as n,
    Rn as r,
    wn as i,
    zn as a
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Azt as o,
    _zt as s
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    d as c,
    t as l
} from "./707eab0c-dz0lipu7j9i9zym4.js";
import {
    i as u,
    n as d,
    t as f
} from "./a6bddaad-cdj3e79pli609yfh.js";
import {
    a as p,
    t as m
} from "./064f6ac1-hlyb31rus7w7sw5w.js";
var h, g, _, v, y, b, x = e((() => {
    h = i(), o(), l(), m(), r(), u(), g = t(), _ = e => {
        "use forget";
        let t = (0, h.c)(16),
            {
                disabled: n,
                skill: r
            } = e,
            i = a(),
            o = r.icon?.name ?? `default`,
            l;
        t[0] === i ? l = t[1] : (l = i.formatMessage(b.openIconPicker), t[0] = i, t[1] = l);
        let u;
        t[2] === o ? u = t[3] : (u = (0, g.jsx)(d, {
            name: o,
            className: `size-11`
        }), t[2] = o, t[3] = u);
        let f;
        t[4] !== n || t[5] !== l || t[6] !== u ? (f = (0, g.jsx)(p.Trigger, {
            children: (0, g.jsx)(c, {
                variant: `ghost`,
                color: `secondary`,
                disabled: n,
                size: `2xl`,
                uniform: !0,
                className: `before:-inset-1`,
                "aria-label": l,
                children: u
            })
        }), t[4] = n, t[5] = l, t[6] = u, t[7] = f) : f = t[7];
        let m;
        t[8] === r.id ? m = t[9] : (m = e => {
            s.setSkillIconName({
                skillId: r.id,
                name: e
            })
        }, t[8] = r.id, t[9] = m);
        let _;
        t[10] !== o || t[11] !== m ? (_ = (0, g.jsx)(y, {
            value: o,
            onChange: m
        }), t[10] = o, t[11] = m, t[12] = _) : _ = t[12];
        let v;
        return t[13] !== f || t[14] !== _ ? (v = (0, g.jsxs)(p, {
            children: [f, _]
        }), t[13] = f, t[14] = _, t[15] = v) : v = t[15], v
    }, v = e => {
        "use forget";
        let t = (0, h.c)(13),
            {
                onChange: n,
                value: r
            } = e,
            i = a(),
            o;
        t[0] === i ? o = t[1] : (o = i.formatMessage(b.openIconPicker), t[0] = i, t[1] = o);
        let s;
        t[2] === r ? s = t[3] : (s = (0, g.jsx)(d, {
            name: r,
            className: `size-5`
        }), t[2] = r, t[3] = s);
        let l;
        t[4] !== o || t[5] !== s ? (l = (0, g.jsx)(p.Trigger, {
            children: (0, g.jsx)(c, {
                variant: `outline`,
                color: `secondary`,
                size: `lg`,
                uniform: !0,
                pill: !0,
                className: `rounded-lg`,
                "aria-label": o,
                children: s
            })
        }), t[4] = o, t[5] = s, t[6] = l) : l = t[6];
        let u;
        t[7] !== n || t[8] !== r ? (u = (0, g.jsx)(y, {
            value: r,
            onChange: n
        }), t[7] = n, t[8] = r, t[9] = u) : u = t[9];
        let f;
        return t[10] !== l || t[11] !== u ? (f = (0, g.jsxs)(p, {
            children: [l, u]
        }), t[10] = l, t[11] = u, t[12] = f) : f = t[12], f
    }, y = e => {
        "use forget";
        let t = (0, h.c)(5),
            {
                value: n,
                onChange: r
            } = e,
            i;
        t[0] !== r || t[1] !== n ? (i = f.map(e => (0, g.jsx)(c, {
            onClick: () => r(e),
            selected: e === n,
            uniform: !0,
            size: `xl`,
            color: `secondary`,
            variant: `ghost`,
            children: (0, g.jsx)(d, {
                name: e,
                className: `size-6`
            })
        }, e)), t[0] = r, t[1] = n, t[2] = i) : i = t[2];
        let a;
        return t[3] === i ? a = t[4] : (a = (0, g.jsx)(p.Content, {
            width: 320,
            minWidth: 320,
            side: `bottom`,
            align: `start`,
            alignOffset: -10,
            className: `flex flex-wrap gap-1 p-2`,
            children: i
        }), t[3] = i, t[4] = a), a
    }, b = n({
        openIconPicker: {
            id: `Hermes.GptStudio.Builder.SkillIconPicker.openIconPicker`,
            defaultMessage: `Open icon picker`
        }
    })
}));
export {
    v as n, x as r, _ as t
};
//# sourceMappingURL=55cae3a0-mxgi9k7m8xvs948w.js.map