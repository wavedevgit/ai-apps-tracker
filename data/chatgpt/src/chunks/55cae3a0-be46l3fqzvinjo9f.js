import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bn as t,
    Rn as n,
    Tn as r,
    Vn as i,
    zn as a
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    dzt as o,
    wzt as s
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    d as c,
    t as l
} from "./707eab0c-hquix1of0ixypvkq.js";
import {
    i as u,
    n as d,
    t as f
} from "./a6bddaad-gamfzkaf9gmaexiw.js";
import {
    a as p,
    t as m
} from "./064f6ac1-nmt5fmv9pguxrx40.js";
var h, g, _, v, y, b, x = e((() => {
    h = r(), s(), l(), m(), a(), u(), g = i(), _ = e => {
        "use forget";
        let n = (0, h.c)(16),
            {
                disabled: r,
                skill: i
            } = e,
            a = t(),
            s = i.icon?.name ?? `default`,
            l;
        n[0] === a ? l = n[1] : (l = a.formatMessage(b.openIconPicker), n[0] = a, n[1] = l);
        let u;
        n[2] === s ? u = n[3] : (u = (0, g.jsx)(d, {
            name: s,
            className: `size-11`
        }), n[2] = s, n[3] = u);
        let f;
        n[4] !== r || n[5] !== l || n[6] !== u ? (f = (0, g.jsx)(p.Trigger, {
            children: (0, g.jsx)(c, {
                variant: `ghost`,
                color: `secondary`,
                disabled: r,
                size: `2xl`,
                uniform: !0,
                className: `before:-inset-1`,
                "aria-label": l,
                children: u
            })
        }), n[4] = r, n[5] = l, n[6] = u, n[7] = f) : f = n[7];
        let m;
        n[8] === i.id ? m = n[9] : (m = e => {
            o.setSkillIconName({
                skillId: i.id,
                name: e
            })
        }, n[8] = i.id, n[9] = m);
        let _;
        n[10] !== s || n[11] !== m ? (_ = (0, g.jsx)(y, {
            value: s,
            onChange: m
        }), n[10] = s, n[11] = m, n[12] = _) : _ = n[12];
        let v;
        return n[13] !== f || n[14] !== _ ? (v = (0, g.jsxs)(p, {
            children: [f, _]
        }), n[13] = f, n[14] = _, n[15] = v) : v = n[15], v
    }, v = e => {
        "use forget";
        let n = (0, h.c)(13),
            {
                onChange: r,
                value: i
            } = e,
            a = t(),
            o;
        n[0] === a ? o = n[1] : (o = a.formatMessage(b.openIconPicker), n[0] = a, n[1] = o);
        let s;
        n[2] === i ? s = n[3] : (s = (0, g.jsx)(d, {
            name: i,
            className: `size-5`
        }), n[2] = i, n[3] = s);
        let l;
        n[4] !== o || n[5] !== s ? (l = (0, g.jsx)(p.Trigger, {
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
        }), n[4] = o, n[5] = s, n[6] = l) : l = n[6];
        let u;
        n[7] !== r || n[8] !== i ? (u = (0, g.jsx)(y, {
            value: i,
            onChange: r
        }), n[7] = r, n[8] = i, n[9] = u) : u = n[9];
        let f;
        return n[10] !== l || n[11] !== u ? (f = (0, g.jsxs)(p, {
            children: [l, u]
        }), n[10] = l, n[11] = u, n[12] = f) : f = n[12], f
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
//# sourceMappingURL=55cae3a0-be46l3fqzvinjo9f.js.map