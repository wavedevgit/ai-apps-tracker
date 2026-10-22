import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bn as t,
    Ln as n,
    Nn as r,
    Rn as i,
    wn as a
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    SRt as o,
    pRt as s
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    K as c,
    W as l
} from "./8e7d0a25-mxr3igm2xq2fndzb.js";
var u, d, f, p, m = e((() => {
    u = a(), s(), l(), i(), d = t(), f = e => {
        "use forget";
        let t = (0, u.c)(18),
            {
                skill: n,
                skillName: i
            } = e,
            a = `chatgpt_skill_id` in n,
            s;
        t[0] === n.id ? s = t[1] : (s = {
            skillId: n.id
        }, t[0] = n.id, t[1] = s);
        let {
            data: l
        } = c(s), f = !a, m;
        t[2] !== n.id || t[3] !== f ? (m = {
            skillId: n.id,
            enabled: f
        }, t[2] = n.id, t[3] = f, t[4] = m) : m = t[4];
        let h = o(m),
            g = a ? l?.file_count ?? 0 : h,
            _ = i ?? l?.display_name ?? l?.skill_name ?? n.name,
            v;
        t[5] === _ ? v = t[6] : (v = (0, d.jsx)(`h3`, {
            className: `sentence text-lg font-normal`,
            children: _
        }), t[5] = _, t[6] = v);
        let y;
        t[7] === a ? y = t[8] : (y = a ? (0, d.jsx)(r, {
            ...p.chatGptSkillLabel
        }) : (0, d.jsx)(r, {
            ...p.skillLabel
        }), t[7] = a, t[8] = y);
        let b;
        t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (b = (0, d.jsx)(`span`, {
            children: ` • `
        }), t[9] = b) : b = t[9];
        let x;
        t[10] === g ? x = t[11] : (x = (0, d.jsx)(`span`, {
            children: (0, d.jsx)(r, {
                ...p.filesCountLabel,
                values: {
                    count: g
                }
            })
        }), t[10] = g, t[11] = x);
        let S;
        t[12] !== y || t[13] !== x ? (S = (0, d.jsxs)(`div`, {
            className: `text-tertiary text-xs`,
            children: [y, b, x]
        }), t[12] = y, t[13] = x, t[14] = S) : S = t[14];
        let C;
        return t[15] !== v || t[16] !== S ? (C = (0, d.jsxs)(`div`, {
            children: [v, S]
        }), t[15] = v, t[16] = S, t[17] = C) : C = t[17], C
    }, p = n({
        skillLabel: {
            id: `Hermes.GptStudio.Builder.SkillHeaderInfo.skillLabel`,
            defaultMessage: `Skill`
        },
        chatGptSkillLabel: {
            id: `Hermes.GptStudio.Builder.SkillHeaderInfo.chatGptSkillLabel`,
            defaultMessage: `ChatGPT skill`
        },
        filesCountLabel: {
            id: `Hermes.GptStudio.Builder.SkillHeaderInfo.filesCountLabel`,
            defaultMessage: `{count, plural, one {# file} other {# files}}`
        }
    })
}));
export {
    m as n, f as t
};
//# sourceMappingURL=081a1911-ib8w92zpr7gau1lp.js.map