import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    I7 as t,
    IU as n,
    LU as r,
    M7 as i,
    q1 as a,
    z1 as o
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Ln as s,
    N as c,
    Rn as l,
    p as u,
    s as d,
    zn as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";

function p(e) {
    let t = c(),
        r = f(),
        a = n();
    return u({
        mutationFn: ({
            name: t,
            profilePictureId: n,
            profilePictureUrl: r
        }) => i.safePatch(`/accounts/{account_id}`, {
            parameters: {
                path: {
                    account_id: e
                }
            },
            requestBody: {
                name: t,
                profile_picture_id: n === null ? `` : n,
                profile_picture_url: r === null ? `` : r
            }
        }),
        onError: () => {
            a.danger(r.formatMessage(m.saveError), {
                toastId: `workspace_appearance_modal`,
                loggingTitle: m.saveError.defaultMessage,
                loggingDescription: `Failed to save workspace appearance`
            })
        },
        onSuccess: () => {
            t.invalidateQueries(o())
        }
    })
}
var m, h = e((() => {
    a(), r(), t(), d(), l(), m = s({
        modalTitle: {
            id: `workspaceAppearanceModal.title`,
            defaultMessage: `Workspace appearance`
        },
        modalSubmit: {
            id: `workspaceAppearanceModal.submit`,
            defaultMessage: `Save`
        },
        modalCancel: {
            id: `workspaceAppearanceModal.cancel`,
            defaultMessage: `Cancel`
        },
        modalReset: {
            id: `workspaceAppearanceModal.reset`,
            defaultMessage: `Reset`
        },
        workspaceName: {
            id: `workspaceAppearanceModal.workspaceName`,
            defaultMessage: `Workspace name`
        },
        workspaceNameDescription: {
            id: `workspaceAppearanceModal.workspaceNameDescription`,
            defaultMessage: `Update the name of the workspace.`
        },
        workspaceAvatar: {
            id: `workspaceAppearanceModal.workspaceAvatar`,
            defaultMessage: `Workspace image`
        },
        workspaceAvatarDescription: {
            id: `workspaceAppearanceModal.workspaceAvatarDescription`,
            defaultMessage: `Upload a JPEG or PNG workspace image for your team. (Minimum {size}×{size}px recommended.)`
        },
        propagationWarning: {
            id: `workspaceAppearanceModal.propagationWarning`,
            defaultMessage: `Changes to the workspace name and image may take some time to take effect.`
        },
        saveError: {
            id: `workspaceAppearanceModal.saveError`,
            defaultMessage: `Failed to save workspace appearance`
        }
    })
}));
export {
    p as n, h as t
};
//# sourceMappingURL=2e14c65d-o7qdvdi5zhuyfj8o.js.map