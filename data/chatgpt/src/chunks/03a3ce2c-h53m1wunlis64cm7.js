import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    DO as t,
    Ynt as n,
    kO as r,
    lK as i,
    trt as a,
    uK as o,
    vO as s,
    wO as c
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    Ln as l,
    Rn as u
} from "./2340486e-i7pjxgdhv0bs6apg.js";
var d, f, p, m, h, g, _, v, y, b, x, S, C, w, T, E, D = e((() => {
    o(), r(), a(), u(), d = l({
        adminPreviewModelDescription: {
            id: `chatgpt.admin.models.admin_preview.model_description`,
            defaultMessage: `Choose who can use {model} during admin preview and after launch.`
        },
        reasoningModelAccessTitle: {
            id: `T4a7MN`,
            defaultMessage: `Reasoning Model Access`
        },
        reasoningModelAccessDescription: {
            id: `chatgpt.workspace_permissions.models.reasoning.description`,
            defaultMessage: `Let members use reasoning models for complex, multi-step tasks.`
        },
        proModelAccessTitle: {
            id: `Mb1oj2`,
            defaultMessage: `Pro Model Access`
        },
        proModelAccessDescription: {
            id: `chatgpt.workspace_permissions.models.pro.description`,
            defaultMessage: `Let members use pro models available to the workspace.`
        },
        gpt5ThinkingDescription: {
            id: `UGs+bi`,
            defaultMessage: `Legacy Model. Thinks longer for better answers.`
        },
        gpt52ThinkingDescription: {
            id: `a5p19/`,
            defaultMessage: `Thinks longer for better answers.`
        },
        gpt51ThinkingProDescription: {
            id: `498LmS`,
            defaultMessage: `Legacy Model. Research-grade intelligence.`
        },
        gpt52ProDescription: {
            id: `p3BU+T`,
            defaultMessage: `Research-grade intelligence.`
        }
    }), f = `283976050`, p = `155753734`, m = `353378782`, h = () => n(`1133826212`) && c() && (n(`155753734`) || n(`353378782`)) && n(`283976050`), g = () => h() && s(), _ = () => g(), v = e => h() && t() && e, y = e => e ? [{
        rbac: !0,
        title: d.reasoningModelAccessTitle,
        description: d.reasoningModelAccessDescription,
        hipaaMetadata: {
            isCovered: !0
        },
        permissionName: i.ReasoningModelAccess
    }, {
        rbac: !0,
        title: d.proModelAccessTitle,
        description: d.proModelAccessDescription,
        hipaaMetadata: {
            isCovered: !0
        },
        permissionName: i.ProModelAccess
    }] : [{
        rbac: !0,
        title: `GPT-5.2 Thinking`,
        description: d.gpt52ThinkingDescription,
        hipaaMetadata: {
            isCovered: !0
        },
        permissionName: i.GPT52ReasoningAccess
    }, {
        rbac: !0,
        title: `GPT-5.2 Pro`,
        description: d.gpt52ProDescription,
        hipaaMetadata: {
            isCovered: !0
        },
        permissionName: i.GPT52ProAccess
    }, {
        rbac: !0,
        title: `GPT-5.1 Thinking`,
        description: d.gpt5ThinkingDescription,
        hipaaMetadata: {
            isCovered: !0
        },
        permissionName: i.GPT51ReasoningAccess
    }, {
        rbac: !0,
        title: `GPT-5.1 Pro`,
        description: d.gpt51ThinkingProDescription,
        hipaaMetadata: {
            isCovered: !0
        },
        permissionName: i.GPT51ProAccess
    }], b = [{
        slug: `gpt-5.6-sol`,
        aliases: [`gpt-5.6-sol-wm`, `gpt-5.6-sol-priority`, `gpt-5-6`, `gpt-5-6-instant`, `gpt-5-6-thinking`, `gpt-5-6-auto-thinking`, `gpt-5-6-pro`],
        displayName: `5.6 Sol`,
        category: `frontier`,
        recommended: !0,
        permission: i.GPT56SolAccess,
        rolloutGate: `1486450116`
    }, {
        slug: `gpt-5.6-terra`,
        aliases: [`gpt-5.6-terra-wm`, `gpt-5.6-terra-priority`],
        displayName: `5.6 Terra`,
        category: `frontier`,
        permission: i.GPT56TerraAccess,
        rolloutGate: `1486450116`
    }, {
        slug: `gpt-5.6-luna`,
        aliases: [`gpt-5.6-luna-wm`, `gpt-5.6-luna-priority`],
        displayName: `5.6 Luna`,
        category: `frontier`,
        permission: i.GPT56LunaAccess,
        rolloutGate: `1486450116`
    }, {
        slug: `gpt-rosalind-5.5`,
        aliases: [`gpt-lifesciences`, `GPT-Rosalind-Preview`, `gpt-rosalind-5.5-wm`, `gpt-rosalind-discovery`, `gpt-rosalind-discovery-wm`],
        displayName: `Rosalind`,
        category: `lifeSciences`,
        permission: i.GPTLifeSciencesAccess,
        rolloutGate: `3238683062`
    }, {
        slug: `gpt-daybreak-5.6-sol`,
        aliases: [`gpt-daybreak-blue-latest`],
        displayName: `Daybreak Blue`,
        category: `cybersecurity`,
        permission: i.GPTDaybreak56SolAccess,
        rolloutGate: `4188439793`
    }, {
        slug: `gpt-daybreak-red-5.6-sol`,
        aliases: [`gpt-5.4-cyber`, `gpt-5.5-cyber-preview`, `gpt-5.6-cyber`, `gpt-daybreak-red-latest`],
        displayName: `Daybreak Red`,
        category: `cybersecurity`,
        permission: i.GPTDaybreakRed56SolAccess,
        rolloutGate: `1229583455`
    }], x = (e, t) => e.slug === t || `aliases` in e && e.aliases.some(e => e === t), S = e => b.find(t => x(t, e)), C = e => T(e), w = (e, t = []) => {
        let n = [...t, ...b.filter(C)].filter(e => e.category === `frontier`);
        if (![i.GPT56SolAccess, i.GPT56TerraAccess, i.GPT56LunaAccess].every(e => n.some(t => t.permission === e))) return;
        let r = n.filter(t => e.includes(t.permission));
        return r.length === 1 ? r[0]?.permission : void 0
    }, T = (e, t) => n(e.rolloutGate, t), E = (e, t, n) => Object.entries(e ?? {}).flatMap(([e, r]) => {
        if (r.length !== 1) return [];
        let i = t.find(e => r.includes(e.permission));
        return i == null ? [] : [{
            adminPreviewFeature: e,
            name: i.displayName,
            description: n.formatMessage(d.adminPreviewModelDescription, {
                model: i.displayName
            }),
            newReleaseEntries: [{
                rbac: !0,
                title: i.displayName,
                permissionName: i.permission
            }],
            releaseDate: void 0,
            helpCenterLink: void 0
        }]
    })
}));
export {
    g as a, w as c, D as d, T as f, x as h, f as i, S as l, v as m, p as n, _ as o, C as p, b as r, E as s, m as t, y as u
};
//# sourceMappingURL=03a3ce2c-h53m1wunlis64cm7.js.map