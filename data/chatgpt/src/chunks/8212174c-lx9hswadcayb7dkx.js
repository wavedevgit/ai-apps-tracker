import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Aat as t,
    F7 as n,
    Iat as r,
    X5 as i,
    Y5 as a,
    z7 as o
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as s,
    Ln as c,
    Nn as l,
    O as u,
    Rn as d,
    s as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";

function p({
    className: e
}) {
    return (0, _.jsx)(`span`, {
        className: a(C, e),
        children: (0, _.jsx)(l, {
            ...S.systemGroupBadge
        })
    })
}

function m(e) {
    return e ? e.system_use_case === v : !1
}

function h(e, t) {
    return u({
        queryKey: [e, `restricted-safe-mode`, `ensure`],
        enabled: !t,
        queryFn: () => n.safeGet(`/rbac/workspaces/{workspace_id}/rbac/restricted-safe-mode/ensure`, {
            parameters: {
                query: {
                    account_id: e
                },
                path: {
                    workspace_id: e
                }
            }
        })
    })
}

function g(e, n, r) {
    if (!(n instanceof t)) return;
    let {
        targetIsRestrictedSafeModeGroup: i = !1
    } = r ?? {};
    switch (n.code) {
        case y:
            return e.formatMessage(i ? S.membershipExclusiveViolationRestricted : S.membershipExclusiveViolationOther);
        case b:
            return e.formatMessage(S.groupRoleImmutable);
        case x:
            return e.formatMessage(S.roleTargetMismatch);
        default:
            return
    }
}
var _, v, y, b, x, S, C, w = e((() => {
    r(), o(), f(), i(), d(), _ = s(), v = `RESTRICTED_SAFE_MODE`, y = `RSM_MEMBER_EXCLUSIVITY_VIOLATION`, b = `RSM_GROUP_ROLE_IMMUTABLE`, x = `RSM_ROLE_TARGET_MISMATCH`, S = c({
        lockedBadge: {
            id: `MH8AIZ`,
            defaultMessage: `Locked`
        },
        systemGroupBadge: {
            id: `piuhxD`,
            defaultMessage: `System group`
        },
        membershipExclusiveViolationRestricted: {
            id: `aPqCXG`,
            defaultMessage: `Member is already in other groups. Remove them before adding to Restricted Safe Mode.`
        },
        membershipExclusiveViolationOther: {
            id: `wxxAkL`,
            defaultMessage: `Member is already in Restricted Safe Mode. Remove them before adding to other groups.`
        },
        roleTargetMismatch: {
            id: `BipQIU`,
            defaultMessage: `This role can only be assigned to the Restricted Safe Mode group.`
        },
        groupRoleImmutable: {
            id: `XuMCiy`,
            defaultMessage: `This group’s role set is locked.`
        },
        lockedPermissionTooltip: {
            id: `8amiJ9`,
            defaultMessage: `Permissions are locked for Restricted Safe Mode roles.`
        }
    }), C = `text-token-text-tertiary border-token-border-default inline-flex items-center gap-1 rounded-full border px-2 py-[2px] text-[10px] font-semibold uppercase tracking-wide`
}));
export {
    h as a, m as i, g as n, w as r, p as t
};
//# sourceMappingURL=8212174c-lx9hswadcayb7dkx.js.map