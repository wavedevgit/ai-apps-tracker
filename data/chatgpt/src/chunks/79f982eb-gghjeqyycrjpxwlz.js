import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    K5 as t,
    Qy as n,
    Zy as r,
    bx as i,
    fx as a,
    q5 as o
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as s,
    Vn as c,
    wn as l
} from "./2340486e-i7pjxgdhv0bs6apg.js";

function u(e) {
    return {
        id: `${e.type??`unknown`}:${e.command}:${e.systemHintType??``}`,
        title: e.title,
        disabled: e.disabled,
        icon: e.icon,
        secondary: e.secondary,
        trailing: e.trailing,
        tooltip: e.tooltip,
        color: e.color,
        trailingColor: e.trailingColor,
        matchText: [e.command, ...e.aliases ?? []],
        insertText: e.insertText,
        onSelect: e.onSelect,
        shouldRestoreComposerFocusAfterSelect: e.shouldRestoreComposerFocusAfterSelect,
        noMatchEmpty: e.noMatchEmpty,
        showFor: e.type === `app` && e.isConnected ? [`at_command`, `slash_command`] : e.type === `project` ? [`slash_command`] : [`at_command`],
        searchParameters: {
            targets: [e.command, ...e.aliases ?? [], ...e.regexMatches ?? [], e.secondary ? `${e.title} ${e.secondary}` : e.title],
            weight: e.matchWeight
        },
        meta: {
            isApp: e.type === `app`,
            isConnected: e.isConnected,
            isHeadPlugin: e.isHeadPlugin,
            isProject: e.type === `project`,
            systemHintType: e.systemHintType,
            mention: e.mention,
            unifiedComposerMenuCategory: e.type === `gizmo` ? `gpts` : void 0
        }
    }
}
var d, f = e((() => {
    d = function(e) {
        return e.Gizmo = `gizmo`, e.App = `app`, e.Project = `project`, e
    }({})
}));

function p(e) {
    "use forget";
    let n = (0, m.c)(33),
        {
            item: i,
            isHighlighted: o,
            onHighlight: s,
            onClick: c,
            className: l,
            titleClassName: u,
            secondaryClassName: d,
            secondaryLayout: f
        } = e,
        p = (f === void 0 ? `stacked` : f) === `inline`,
        g = i.tooltip?.primary,
        _ = i.tooltip?.secondary,
        v = i.tooltip?.labelTextAlign,
        y = i.disabled && `suggestion-item-disabled-tooltip`,
        b;
    n[0] === y ? b = n[1] : (b = t(`cant-hover:hidden`, y), n[0] = y, n[1] = b);
    let x = !i.tooltip,
        S = !p && i.secondary,
        C;
    n[2] !== i.secondary || n[3] !== i.title || n[4] !== d || n[5] !== p || n[6] !== u ? (C = p && (0, h.jsxs)(`div`, {
        className: `me-24 flex min-w-0 flex-1 items-baseline gap-3`,
        children: [(0, h.jsx)(`span`, {
            className: t(`max-w-full min-w-0 shrink-0 truncate`, u),
            children: i.title
        }), i.secondary && (0, h.jsx)(`span`, {
            className: t(`min-w-0 truncate`, d ?? `text-token-text-secondary group-data-[highlighted]:text-token-text-primary group-focus-visible:text-token-text-primary group-hover:text-token-text-primary transition-colors`),
            children: i.secondary
        })]
    }), n[2] = i.secondary, n[3] = i.title, n[4] = d, n[5] = p, n[6] = u, n[7] = C) : C = n[7];
    let w;
    n[8] !== i.title || n[9] !== p || n[10] !== u ? (w = !p && (0, h.jsx)(`span`, {
        className: t(`break-words`, u),
        children: i.title
    }), n[8] = i.title, n[9] = p, n[10] = u, n[11] = w) : w = n[11];
    let T;
    n[12] !== l || n[13] !== o || n[14] !== i.color || n[15] !== i.disabled || n[16] !== i.icon || n[17] !== i.trailing || n[18] !== i.trailingColor || n[19] !== c || n[20] !== s || n[21] !== p || n[22] !== w || n[23] !== S || n[24] !== C ? (T = (0, h.jsxs)(a, {
        as: `div`,
        hasManagedFocus: !0,
        fillContainer: p,
        highlighted: o,
        onPointerMove: s,
        onClick: c,
        disabled: i.disabled,
        icon: i.icon,
        secondary: S,
        trailing: i.trailing,
        color: i.color,
        trailingColor: i.trailingColor,
        className: l,
        children: [C, w]
    }), n[12] = l, n[13] = o, n[14] = i.color, n[15] = i.disabled, n[16] = i.icon, n[17] = i.trailing, n[18] = i.trailingColor, n[19] = c, n[20] = s, n[21] = p, n[22] = w, n[23] = S, n[24] = C, n[25] = T) : T = n[25];
    let E;
    return n[26] !== T || n[27] !== g || n[28] !== _ || n[29] !== v || n[30] !== b || n[31] !== x ? (E = (0, h.jsx)(r, {
        side: `bottom`,
        align: `start`,
        label: g,
        secondaryLabel: _,
        labelTextAlign: v,
        contentClassName: b,
        triggerAs: null,
        disabled: x,
        children: T
    }), n[26] = T, n[27] = g, n[28] = _, n[29] = v, n[30] = b, n[31] = x, n[32] = E) : E = n[32], E
}
var m, h, g = e((() => {
    m = l(), i(), n(), o(), c(), h = s()
}));
export {
    u as a, f as i, g as n, d as r, p as t
};
//# sourceMappingURL=79f982eb-gghjeqyycrjpxwlz.js.map