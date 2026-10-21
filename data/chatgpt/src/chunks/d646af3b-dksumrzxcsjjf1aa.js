const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/d4c3e8a1-ed7j3va6y1yw7jt7.js", "assets/f025431a-ehagpvg3m4e1cduv.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    BU as n,
    Cw as r,
    HU as i,
    Mz as a,
    Tw as o,
    aat as s,
    bnt as c,
    jz as l,
    sat as u,
    vnt as d
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as f,
    Ln as p,
    N as m,
    Nn as h,
    Rn as g,
    Vn as _,
    cn as v,
    ln as y,
    s as b,
    zn as x
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Swn as S,
    lyt as C,
    vyt as w,
    xwn as T
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    Hm as E,
    Mv as D,
    Nv as O,
    Um as k
} from "./30901919-e8h11sw136qen6v0.js";
import {
    S as A,
    x as j
} from "./82782bc9-fcii2id0x6lspwtj.js";
import {
    i as M,
    n as N
} from "./328817d4-wn134jgkbavnfsbe.js";
import {
    n as P,
    t as F
} from "./62507501-cyvtx4ltpvct6h6u.js";
import {
    n as I,
    r as L,
    t as R
} from "./11defd9b-iu3si34g8k55vvf7.js";
import {
    n as z,
    r as B
} from "./35c8cfbc-c5bpl20zw9n7vpvm.js";
async function V(e) {
    if (e.name.toLowerCase() === `skill.md`) return {
        "SKILL.md": e
    };
    let {
        unzipSync: t
    } = await v(async () => {
        let {
            unzipSync: e
        } = await import(`./d4c3e8a1-ed7j3va6y1yw7jt7.js`).then(e => (e.n(), e.t));
        return {
            unzipSync: e
        }
    }, __vite__mapDeps([0, 1])), n = t(new Uint8Array(await e.arrayBuffer())), {
        normalizedFiles: r
    } = B(Object.fromEntries(Object.entries(n).filter(([e]) => !e.endsWith(`/`))));
    return Object.fromEntries(Object.entries(r).map(([e, t]) => [e, new File([Uint8Array.from(t)], e.split(`/`).pop() ?? e, {
        type: N(e)
    })]))
}

function H({
    onClose: e,
    admin: t = !1
}) {
    "use no forget";
    let n = x(),
        a = i(),
        o = m(),
        [c, u] = (0, U.useState)([]),
        [f, p] = (0, U.useState)(null),
        {
            mutateAsync: g
        } = w({
            admin: t
        }),
        _ = (0, U.useCallback)(async (e, t) => {
            let r = t?.applyResolution ?? !1;
            try {
                let t = (await g({
                    archiveFile: e.file,
                    applyResolution: r
                }))?.hazelnuts?.[0]?.id ?? null;
                if (t) try {
                    o.setQueryData(T(t), await V(e.file))
                } catch (e) {
                    s.addError(e)
                }
                u(t => t.map(t => t.id === e.id ? {
                    ...t,
                    status: `complete`
                } : t)), p(t => t?.uploadId === e.id ? null : t), a.success(n.formatMessage(G.uploadSuccess)), d.logStructuredEvent(`ChatgptWebSkillCreateZipSuccess`, {
                    hazelnutId: t ?? ``
                }), d.logEventWithStatsig(`chatgpt_web_skill_creation_method_selected`, `chatgpt_web_skill_creation_method_selected`, {
                    method: `zip`,
                    hazelnut_id: t ?? ``
                })
            } catch (t) {
                let i = r ? null : R(t),
                    o = I({
                        error: t,
                        intl: n,
                        fallbackMessage: G.uploadFailed
                    });
                if (u(t => t.map(t => t.id === e.id ? {
                        ...t,
                        status: `error`,
                        errorMessage: o
                    } : t)), i?.resolution) {
                    p({
                        uploadId: e.id,
                        skillName: i.skillName,
                        resolution: i.resolution
                    });
                    return
                }
                a.danger(o)
            }
        }, [g, n, o, a]),
        v = (0, U.useCallback)(() => {
            if (!f) return;
            let e = c.find(e => e.id === f.uploadId);
            if (!e) {
                p(null);
                return
            }
            u(t => t.map(t => t.id === e.id ? {
                ...t,
                status: `uploading`,
                errorMessage: void 0
            } : t)), p(null), _(e, {
                applyResolution: !0
            })
        }, [f, c, _]),
        y = (0, U.useCallback)(() => {
            p(null)
        }, []),
        b = (0, U.useCallback)(e => {
            let t = e.name.toLowerCase();
            return t.endsWith(`.zip`) || t.endsWith(`.skill`) || t === `skill.md` ? null : t.endsWith(`.md`) ? {
                code: `file-invalid-type`,
                message: `Only .zip files or SKILL.md are accepted.`
            } : null
        }, []),
        S = (0, U.useCallback)(e => {
            if (e.length === 0) return;
            let t = e.map(e => ({
                id: `${e.name}-${e.size}-${e.lastModified}-${Math.random().toString(36).slice(2,10)}`,
                file: e,
                status: `uploading`
            }));
            u(e => [...e, ...t]), t.forEach(e => {
                _(e)
            })
        }, [_]),
        {
            getRootProps: C,
            getInputProps: E,
            isDragActive: O,
            fileRejections: j
        } = A({
            multiple: !0,
            noKeyboard: !0,
            accept: {
                "application/zip": [`.zip`, `.skill`],
                "application/x-zip-compressed": [`.zip`, `.skill`],
                "text/markdown": [`.md`],
                "text/plain": [`.md`]
            },
            maxSize: K,
            validator: b,
            onDropAccepted: S
        }),
        M = j.some(e => e.errors.some(e => e.code === `file-too-large`)),
        N = [`border-token-border-light bg-token-main-surface-primary`, `border border-dashed rounded-2xl px-4 py-14 text-center transition`, `focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-border-strong`, O ? `border-token-border-strong bg-token-main-surface-secondary` : `hover:bg-token-main-surface-secondary`, `cursor-pointer`].join(` `);
    return (0, W.jsx)(r, {
        isOpen: !0,
        onClose: () => e(),
        shouldIgnoreClickOutside: !0,
        title: f ? void 0 : (0, W.jsx)(h, {
            ...G.modalUploadSectionTitle
        }),
        showCloseButton: !0,
        testId: `modal-hazelnut-upload-modal`,
        children: f ? (0, W.jsx)(F, {
            skillName: f.skillName,
            resolution: f.resolution,
            mode: `upload`,
            onCancel: y,
            onConfirm: v
        }) : (0, W.jsxs)(`div`, {
            className: `flex flex-col gap-4`,
            children: [(0, W.jsxs)(`div`, {
                ...C({
                    className: N
                }),
                children: [(0, W.jsx)(`input`, {
                    ...E()
                }), (0, W.jsxs)(`div`, {
                    className: `text-token-text-tertiary text-sm`,
                    children: [(0, W.jsx)(k, {
                        className: `me-2 inline-block`
                    }), O ? (0, W.jsx)(h, {
                        ...G.dropActive
                    }) : (0, W.jsx)(h, {
                        ...G.dropPrompt
                    })]
                })]
            }), c.length > 0 && (0, W.jsx)(`div`, {
                className: `flex flex-col gap-2`,
                children: c.map(e => (0, W.jsxs)(`div`, {
                    className: `bg-token-main-surface border-token-border-light flex min-h-8 items-center gap-2 rounded-xl border px-3 py-2 text-sm`,
                    children: [(0, W.jsx)(`div`, {
                        className: `min-w-0 flex-1 truncate font-medium`,
                        children: e.file.name
                    }), e.status === `uploading` && (0, W.jsx)(l, {
                        className: `icon-sm text-token-text-tertiary`
                    }), e.status === `complete` && (0, W.jsx)(D, {
                        className: `icon-sm shrink-0 text-green-400`
                    }), e.status === `error` && (0, W.jsx)(`span`, {
                        className: `text-token-text-status-warning text-sm font-medium`,
                        title: e.errorMessage ?? n.formatMessage(G.uploadFailed),
                        children: (0, W.jsx)(h, {
                            ...G.uploadError
                        })
                    })]
                }, e.id))
            }), j.length > 0 && (0, W.jsx)(`div`, {
                className: `text-token-interactive-label-warning-secondary text-sm`,
                children: (0, W.jsx)(h, {
                    ...M ? G.fileTooLarge : G.invalidFile
                })
            }), (0, W.jsx)(`div`, {
                className: `text-token-text-tertiary text-xs`,
                children: (0, W.jsx)(h, {
                    ...G.uploadDescription
                })
            })]
        })
    })
}
var U, W, G, K, q = e((() => {
    O(), E(), o(), z(), M(), P(), L(), S(), C(), a(), n(), c(), u(), b(), U = t(_()), j(), g(), W = f(), y(), G = p({
        modalUploadSectionTitle: {
            defaultMessage: `Upload a skill`,
            id: `hazelnutsSettings.modalUploadSectionTitle`
        },
        uploadDescription: {
            defaultMessage: `Third-party skills pose elevated risks and may try to access your data. Only upload skills from trusted sources and review them before use.`,
            id: `hazelnutsSettings.uploadDescription`
        },
        dropPrompt: {
            defaultMessage: `Drag and drop a .zip/.skill file or SKILL.md to upload`,
            id: `hazelnutsSettings.dropPrompt`
        },
        dropActive: {
            defaultMessage: `Drop the .zip/.skill file or SKILL.md here…`,
            id: `hazelnutsSettings.dropActive`
        },
        uploadError: {
            defaultMessage: `Invalid skill`,
            id: `hazelnutsSettings.uploadError`
        },
        invalidFile: {
            defaultMessage: `Only .zip/.skill files or SKILL.md are accepted.`,
            id: `hazelnutsSettings.invalidFile`
        },
        fileTooLarge: {
            defaultMessage: `File must be 25 MB or smaller.`,
            id: `hazelnutsSettings.fileTooLarge`
        },
        uploadSuccess: {
            defaultMessage: `Skill uploaded`,
            id: `hazelnutsSettings.uploadSuccess`
        },
        uploadFailed: {
            defaultMessage: `Failed to upload skill. Please try again.`,
            id: `hazelnutsSettings.uploadFailed`
        }
    }), K = 25 * 1024 * 1024
}));
export {
    q as n, H as t
};
//# sourceMappingURL=d646af3b-dksumrzxcsjjf1aa.js.map