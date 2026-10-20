import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    X5 as t,
    Xy as n,
    Y5 as r,
    Zy as i,
    dx as a,
    yx as o
} from "./4813494d-bo7e0c29ngt4zgx0.js";
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
    let t = (0, m.c)(33),
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
    t[0] === y ? b = t[1] : (b = r(`cant-hover:hidden`, y), t[0] = y, t[1] = b);
    let x = !i.tooltip,
        S = !p && i.secondary,
        C;
    t[2] !== i.secondary || t[3] !== i.title || t[4] !== d || t[5] !== p || t[6] !== u ? (C = p && (0, h.jsxs)(`div`, {
        className: `me-24 flex min-w-0 flex-1 items-baseline gap-3`,
        children: [(0, h.jsx)(`span`, {
            className: r(`max-w-full min-w-0 shrink-0 truncate`, u),
            children: i.title
        }), i.secondary && (0, h.jsx)(`span`, {
            className: r(`min-w-0 truncate`, d ?? `text-token-text-secondary group-data-[highlighted]:text-token-text-primary group-focus-visible:text-token-text-primary group-hover:text-token-text-primary transition-colors`),
            children: i.secondary
        })]
    }), t[2] = i.secondary, t[3] = i.title, t[4] = d, t[5] = p, t[6] = u, t[7] = C) : C = t[7];
    let w;
    t[8] !== i.title || t[9] !== p || t[10] !== u ? (w = !p && (0, h.jsx)(`span`, {
        className: r(`break-words`, u),
        children: i.title
    }), t[8] = i.title, t[9] = p, t[10] = u, t[11] = w) : w = t[11];
    let T;
    t[12] !== l || t[13] !== o || t[14] !== i.color || t[15] !== i.disabled || t[16] !== i.icon || t[17] !== i.trailing || t[18] !== i.trailingColor || t[19] !== c || t[20] !== s || t[21] !== p || t[22] !== w || t[23] !== S || t[24] !== C ? (T = (0, h.jsxs)(a, {
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
    }), t[12] = l, t[13] = o, t[14] = i.color, t[15] = i.disabled, t[16] = i.icon, t[17] = i.trailing, t[18] = i.trailingColor, t[19] = c, t[20] = s, t[21] = p, t[22] = w, t[23] = S, t[24] = C, t[25] = T) : T = t[25];
    let E;
    return t[26] !== T || t[27] !== g || t[28] !== _ || t[29] !== v || t[30] !== b || t[31] !== x ? (E = (0, h.jsx)(n, {
        side: `bottom`,
        align: `start`,
        label: g,
        secondaryLabel: _,
        labelTextAlign: v,
        contentClassName: b,
        triggerAs: null,
        disabled: x,
        children: T
    }), t[26] = T, t[27] = g, t[28] = _, t[29] = v, t[30] = b, t[31] = x, t[32] = E) : E = t[32], E
}
var m, h, g = e((() => {
    m = l(), o(), i(), t(), c(), h = s()
}));
export {
    u as a, f as i, g as n, d as r, p as t
};
//# sourceMappingURL=79f982eb-l7cfnqbz7cd7p650.js.map