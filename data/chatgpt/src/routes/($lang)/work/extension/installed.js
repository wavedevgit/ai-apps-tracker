import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AA as n,
    AT as r,
    B6 as i,
    Btt as a,
    Dw as o,
    Ew as s,
    Fq as c,
    G2 as l,
    HL as u,
    Htt as d,
    K2 as f,
    NL as p,
    NV as m,
    OA as h,
    Ow as g,
    PL as _,
    PV as v,
    Pq as y,
    RU as b,
    Sw as x,
    V6 as S,
    _tt as C,
    b5 as w,
    gtt as T,
    hnt as E,
    i5 as D,
    jA as O,
    jw as k,
    kA as A,
    kT as j,
    lw as M,
    o as N,
    pnt as P,
    s as F,
    uw as ee,
    ww as te,
    y5 as I,
    ynt as L,
    zU as ne
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as re,
    Bn as R,
    Nn as z,
    Rn as B,
    Ut as ie,
    Vn as V,
    Wt as ae,
    wn as H,
    zn as oe
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    UUn as se,
    WUn as ce,
    agn as le,
    ogn as U
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Fv as W,
    Iv as G,
    Mx as ue,
    Sf as de,
    Uv as fe,
    Wv as pe,
    _f as me,
    bf as he,
    dp as ge,
    fp as _e,
    gf as ve,
    hf as ye,
    ib as be,
    jx as xe,
    rb as Se,
    vC as Ce,
    vf as we,
    xf as Te,
    yC as Ee,
    yf as De
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    g as Oe,
    h as ke,
    m as Ae,
    p as je
} from "./c470f5ab-m68dth1hatzjj8yh.js";
import {
    a as Me,
    c as Ne,
    o as Pe
} from "./e19f3910-nriy7br1qc4gkn80.js";

function Fe({
    action: e,
    step: t
}) {
    a.logStructuredEvent(`ChatgptWorkChromeOnboardingInteraction`, {
        action: Ie[e],
        step: Le[t]
    })
}
var Ie, Le, Re = e((() => {
        d(), u(), Ie = {
            step_viewed: p.CHATGPT_WORK_CHROME_ONBOARDING_ACTION_STEP_VIEWED,
            download_clicked: p.CHATGPT_WORK_CHROME_ONBOARDING_ACTION_DOWNLOAD_CLICKED,
            open_existing_app_clicked: p.CHATGPT_WORK_CHROME_ONBOARDING_ACTION_OPEN_EXISTING_APP_CLICKED,
            show_installer_clicked: p.CHATGPT_WORK_CHROME_ONBOARDING_ACTION_SHOW_INSTALLER_CLICKED,
            sidebar_clicked: p.CHATGPT_WORK_CHROME_ONBOARDING_ACTION_SIDEBAR_CLICKED,
            checklist_step_selected: p.CHATGPT_WORK_CHROME_ONBOARDING_ACTION_CHECKLIST_STEP_SELECTED,
            sample_selected: p.CHATGPT_WORK_CHROME_ONBOARDING_ACTION_SAMPLE_SELECTED
        }, Le = {
            page: _.CHATGPT_WORK_CHROME_ONBOARDING_STEP_PAGE,
            download: _.CHATGPT_WORK_CHROME_ONBOARDING_STEP_DOWNLOAD,
            downloading: _.CHATGPT_WORK_CHROME_ONBOARDING_STEP_DOWNLOADING,
            installer_ready: _.CHATGPT_WORK_CHROME_ONBOARDING_STEP_INSTALLER_READY,
            open_sidebar: _.CHATGPT_WORK_CHROME_ONBOARDING_STEP_OPEN_SIDEBAR,
            pin_extension: _.CHATGPT_WORK_CHROME_ONBOARDING_STEP_PIN_EXTENSION,
            sample_gallery: _.CHATGPT_WORK_CHROME_ONBOARDING_STEP_SAMPLE_GALLERY,
            sample_email: _.CHATGPT_WORK_CHROME_ONBOARDING_STEP_SAMPLE_EMAIL,
            sample_report: _.CHATGPT_WORK_CHROME_ONBOARDING_STEP_SAMPLE_REPORT,
            sample_inventory: _.CHATGPT_WORK_CHROME_ONBOARDING_STEP_SAMPLE_INVENTORY
        }
    })),
    ze, K, Be, Ve, He = e((() => {
        ze = H(), r(), ee(), k(), B(), K = R(), Be = e => {
            "use forget";
            let t = (0, ze.c)(15),
                {
                    children: n,
                    onClose: r,
                    title: i
                } = e,
                a = oe(),
                o;
            t[0] === i ? o = t[1] : (o = (0, K.jsx)(g, {
                asChild: !0,
                children: (0, K.jsx)(`h2`, {
                    className: `text-token-text-primary min-w-0 text-lg leading-7 font-semibold`,
                    children: i
                })
            }), t[0] = i, t[1] = o);
            let s;
            t[2] === a ? s = t[3] : (s = a.formatMessage({
                id: `chatgpt.work.chrome.installed.sample_work.modal.button.close`,
                defaultMessage: `Close`
            }), t[2] = a, t[3] = s);
            let c;
            t[4] !== r || t[5] !== s ? (c = (0, K.jsx)(j, {
                type: `button`,
                "aria-label": s,
                className: `size-9 shrink-0 rounded-lg`,
                color: `ghost`,
                icon: M,
                iconClassName: `icon`,
                onClick: r,
                size: `small`
            }), t[4] = r, t[5] = s, t[6] = c) : c = t[6];
            let l;
            t[7] !== o || t[8] !== c ? (l = (0, K.jsxs)(`header`, {
                className: `border-token-border-default flex min-h-16 items-center justify-between gap-4 border-b px-5 sm:px-6`,
                children: [o, c]
            }), t[7] = o, t[8] = c, t[9] = l) : l = t[9];
            let u;
            t[10] === n ? u = t[11] : (u = (0, K.jsx)(`div`, {
                className: `min-h-0 overflow-y-auto`,
                children: n
            }), t[10] = n, t[11] = u);
            let d;
            return t[12] !== l || t[13] !== u ? (d = (0, K.jsxs)(te, {
                "aria-describedby": void 0,
                "aria-modal": `true`,
                className: `bg-token-bg-primary text-token-text-primary shadow-long dark:border-token-border-default dark:bg-token-bg-elevated-primary fixed inset-x-0 top-1/2 z-50 mx-auto flex max-h-[calc(100dvh-2rem)] w-[calc(100vw-2rem)] max-w-[686px] -translate-y-1/2 flex-col overflow-hidden rounded-2xl focus:outline-hidden dark:border`,
                "data-testid": `work-chrome-sample-work-modal`,
                children: [l, u]
            }), t[12] = l, t[13] = u, t[14] = d) : d = t[14], d
        }, Ve = e => {
            "use forget";
            let t = (0, ze.c)(8),
                n;
            t[0] === e ? n = t[1] : (n = t => {
                t || e.onClose()
            }, t[0] = e, t[1] = n);
            let r;
            t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, K.jsx)(s, {
                className: `bg-token-bg-scrim motion-safe:radix-state-open:animate-show fixed inset-0 z-50 backdrop-blur-[1px] dark:bg-black/65`
            }), t[2] = r) : r = t[2];
            let i;
            t[3] === e ? i = t[4] : (i = (0, K.jsxs)(o, {
                children: [r, (0, K.jsx)(Be, {
                    ...e
                })]
            }), t[3] = e, t[4] = i);
            let a;
            return t[5] !== n || t[6] !== i ? (a = (0, K.jsx)(x, {
                open: !0,
                onOpenChange: n,
                children: i
            }), t[5] = n, t[6] = i, t[7] = a) : a = t[7], a
        }
    })),
    Ue, We, q, Ge, Ke = e((() => {
        Ue = H(), r(), ne(), We = t(V()), B(), He(), q = R(), Ge = e => {
            "use forget";
            let t = (0, Ue.c)(13),
                {
                    onClose: n
                } = e,
                [r, i] = (0, We.useState)(!1),
                a;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, q.jsx)(z, {
                id: `chatgpt.work.chrome.installed.sample_work.email.modal.title.sender_name`,
                defaultMessage: `Reply to {senderName}'s message`,
                values: {
                    senderName: `Samuel`
                }
            }), t[0] = a) : a = t[0];
            let o;
            t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, q.jsx)(`header`, {
                className: `border-token-border-default bg-token-bg-secondary-surface text-token-text-tertiary flex h-[62px] shrink-0 items-center border-b px-5 text-base leading-6 font-medium sm:px-6`,
                children: (0, q.jsx)(z, {
                    id: `chatgpt.work.chrome.installed.sample_work.email.modal.inbox.label`,
                    defaultMessage: `Inbox`
                })
            }), t[1] = o) : o = t[1];
            let s;
            t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, q.jsx)(`h3`, {
                id: `work-chrome-sample-email-subject`,
                className: `text-token-text-primary text-xl leading-7 font-semibold tracking-[-0.01em] sm:text-2xl sm:leading-[34px]`,
                children: (0, q.jsx)(z, {
                    id: `chatgpt.work.chrome.installed.sample_work.email.modal.subject`,
                    defaultMessage: `What should I pack for San Francisco?`
                })
            }), t[2] = s) : s = t[2];
            let c, l;
            t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, q.jsxs)(`div`, {
                className: `flex flex-col gap-1`,
                children: [s, (0, q.jsx)(`p`, {
                    className: `text-token-text-secondary text-sm leading-6 whitespace-pre-wrap sm:text-[15px]`,
                    children: (0, q.jsx)(z, {
                        id: `chatgpt.work.chrome.installed.sample_work.email.modal.recipient`,
                        defaultMessage: `To: {recipientName} · {recipientEmail}`,
                        values: {
                            recipientEmail: `samuel@northstar.co`,
                            recipientName: `Samuel`
                        }
                    })
                })]
            }), l = (0, q.jsx)(`hr`, {
                className: `border-token-border-default m-0 w-full border-0 border-t`
            }), t[3] = c, t[4] = l) : (c = t[3], l = t[4]);
            let u;
            t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, q.jsx)(`p`, {
                className: `text-token-text-secondary text-sm leading-6 whitespace-pre-line sm:text-[15px]`,
                children: (0, q.jsx)(z, {
                    id: `chatgpt.work.chrome.installed.sample_work.email.modal.body`,
                    defaultMessage: `Hi {recipientName},{lineBreak}{lineBreak}I’m visiting San Francisco next month and trying to pack light. Is it usually warm during the day, or should I bring a jacket?{lineBreak}{lineBreak}Thanks,{lineBreak}{lineBreak}{senderName}`,
                    values: {
                        lineBreak: `
`,
                        recipientName: `Rissa`,
                        senderName: `Samuel`
                    }
                })
            }), t[5] = u) : u = t[5];
            let d;
            t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, q.jsx)(`label`, {
                className: `sr-only`,
                htmlFor: `work-chrome-sample-email-draft`,
                children: (0, q.jsx)(z, {
                    id: `chatgpt.work.chrome.installed.sample_work.email.modal.draft.label`,
                    defaultMessage: `Draft reply`
                })
            }), t[6] = d) : d = t[6];
            let f;
            t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, q.jsx)(z, {
                id: `chatgpt.work.chrome.installed.sample_work.email.modal.reply.placeholder`,
                defaultMessage: `Reply`,
                children: e => (0, q.jsx)(`textarea`, {
                    id: `work-chrome-sample-email-draft`,
                    name: `work-chrome-sample-email-draft`,
                    className: `text-token-text-primary placeholder:text-token-text-tertiary field-sizing-content min-h-[240px] w-full flex-1 resize-none overflow-hidden border-0 bg-transparent p-0 text-base leading-6 outline-none focus:ring-0 focus:outline-none focus-visible:outline-none`,
                    onChange: () => i(!1),
                    placeholder: e.join(``),
                    rows: 10
                })
            }), t[7] = f) : f = t[7];
            let p;
            t[8] === r ? p = t[9] : (p = (0, q.jsx)(`div`, {
                className: `bg-token-bg-secondary-surface w-full p-4 sm:p-7`,
                children: (0, q.jsxs)(`section`, {
                    "aria-labelledby": `work-chrome-sample-email-subject`,
                    className: `border-token-border-default bg-token-bg-primary flex min-h-[560px] w-full flex-col overflow-hidden rounded-2xl border shadow-sm sm:min-h-[720px]`,
                    children: [o, (0, q.jsxs)(`div`, {
                        className: `flex min-h-0 flex-1 flex-col gap-[18px] px-5 py-5 sm:px-8 sm:pb-6`,
                        children: [c, l, u, (0, q.jsxs)(`div`, {
                            className: `border-token-theme-blue-text/20 bg-token-bg-primary focus-within:border-token-theme-blue-text flex min-h-[264px] flex-1 flex-col rounded-[14px] border px-4 py-3`,
                            children: [d, f, r ? (0, q.jsxs)(`span`, {
                                className: `bg-token-theme-green-background text-token-theme-green-text-on-background inline-flex h-10 shrink-0 items-center gap-1.5 self-end rounded-full px-3 text-[13px] leading-[17px] font-semibold`,
                                role: `status`,
                                children: [(0, q.jsx)(b, {
                                    "aria-hidden": `true`,
                                    className: `icon-xs`
                                }), (0, q.jsx)(z, {
                                    id: `chatgpt.work.chrome.installed.sample_work.email.modal.status.done`,
                                    defaultMessage: `Done`
                                })]
                            }) : (0, q.jsx)(j, {
                                className: `h-10 min-h-10 self-end rounded-full px-5 py-3 text-[13px] leading-4 font-normal tracking-[-0.12px]`,
                                color: `primary`,
                                onClick: () => i(!0),
                                type: `button`,
                                children: (0, q.jsx)(z, {
                                    id: `chatgpt.work.chrome.installed.sample_work.email.modal.button.done`,
                                    defaultMessage: `Done`
                                })
                            })]
                        })]
                    })]
                })
            }), t[8] = r, t[9] = p);
            let m;
            return t[10] !== n || t[11] !== p ? (m = (0, q.jsx)(Ve, {
                onClose: n,
                title: a,
                children: p
            }), t[10] = n, t[11] = p, t[12] = m) : m = t[12], m
        }
    }));

function qe(e) {
    return {
        ...e,
        stock: 0
    }
}

function Je(e) {
    return e.kind === `new_product`
}

function Ye(e) {
    e.currentTarget.select()
}

function Xe(e) {
    return [...e, {
        isDraft: !0,
        kind: `new_product`,
        name: ``,
        stock: 0
    }]
}

function Ze(e) {
    return e.kind === `new_product` ? {
        ...e,
        isDraft: !1
    } : e
}

function Qe(e) {
    return e.map(Ze)
}
var $e, et, J, tt, nt, rt, it, at = e((() => {
    $e = H(), r(), ne(), ye(), et = t(V()), B(), He(), J = R(), tt = e => {
        e?.value === `` && e.focus()
    }, nt = [{
        kind: `wireless_keyboard`,
        name: (0, J.jsx)(z, {
            id: `chatgpt.work.chrome.installed.sample_work.inventory.product.wireless_keyboard.label`,
            defaultMessage: `Wireless keyboard`
        }),
        sku: `KEY-2048`,
        stock: 12
    }, {
        kind: `usb_c_hub`,
        name: (0, J.jsx)(z, {
            id: `chatgpt.work.chrome.installed.sample_work.inventory.product.usb_c_hub.label`,
            defaultMessage: `USB-C hub`
        }),
        sku: `HUB-1180`,
        stock: 21
    }, {
        kind: `laptop_stand`,
        name: (0, J.jsx)(z, {
            id: `chatgpt.work.chrome.installed.sample_work.inventory.product.laptop_stand.label`,
            defaultMessage: `Laptop stand`
        }),
        sku: `STD-4412`,
        stock: 5
    }], rt = e => {
        "use forget";
        let t = (0, $e.c)(3),
            {
                product: n
            } = e;
        if (n.kind === `new_product`) {
            let e;
            return t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, J.jsxs)(`span`, {
                className: `bg-token-theme-blue-background text-token-theme-blue-text-on-background inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs leading-[17px] font-semibold`,
                children: [(0, J.jsx)(ve, {
                    "aria-hidden": `true`,
                    className: `icon-xs`
                }), (0, J.jsx)(z, {
                    id: `chatgpt.work.chrome.installed.sample_work.inventory.status.new`,
                    defaultMessage: `New`
                })]
            }), t[0] = e) : e = t[0], e
        }
        if (n.stock === 0) {
            let e;
            return t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, J.jsxs)(`span`, {
                className: `bg-token-theme-green-background text-token-theme-green-text-on-background inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs leading-[17px] font-semibold`,
                children: [(0, J.jsx)(b, {
                    "aria-hidden": `true`,
                    className: `icon-xs`
                }), (0, J.jsx)(z, {
                    id: `chatgpt.work.chrome.installed.sample_work.inventory.status.sold_out`,
                    defaultMessage: `Sold out`
                })]
            }), t[1] = e) : e = t[1], e
        }
        let r;
        return t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, J.jsx)(`span`, {
            className: `bg-token-bg-tertiary text-token-text-secondary inline-flex items-center rounded-full px-2 py-1 text-xs leading-[17px] font-semibold`,
            children: (0, J.jsx)(z, {
                id: `chatgpt.work.chrome.installed.sample_work.inventory.status.in_stock`,
                defaultMessage: `In stock`
            })
        }), t[2] = r) : r = t[2], r
    }, it = e => {
        "use forget";
        let t = (0, $e.c)(43),
            {
                onClose: n,
                initialSaved: r
            } = e,
            i = r !== void 0 && r,
            a = oe(),
            o;
        t[0] !== i || t[1] !== a ? (o = () => i ? [...nt.map(qe), {
            kind: `new_product`,
            name: a.formatMessage({
                id: `chatgpt.work.chrome.installed.sample_work.inventory.product.desk_mousepad.label`,
                defaultMessage: `Desk mousepad`
            }),
            stock: 5
        }] : nt, t[0] = i, t[1] = a, t[2] = o) : o = t[2];
        let [s, c] = (0, et.useState)(o), [l, u] = (0, et.useState)(i), d, f;
        if (t[3] !== s) {
            let e = s.find(Je);
            d = e !== void 0, f = typeof e?.name == `string` && e.name.trim().length > 0, t[3] = s, t[4] = d, t[5] = f
        } else d = t[4], f = t[5];
        let p = f,
            m;
        t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (m = (0, J.jsx)(z, {
            id: `chatgpt.work.chrome.installed.sample_work.inventory.modal.title`,
            defaultMessage: `Update an inventory system`
        }), t[6] = m) : m = t[6];
        let h;
        t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (h = (0, J.jsx)(`h2`, {
            id: `work-chrome-sample-inventory-heading`,
            className: `text-token-text-primary text-[22px] leading-7 font-semibold`,
            children: (0, J.jsx)(z, {
                id: `chatgpt.work.chrome.installed.sample_work.inventory.form.heading`,
                defaultMessage: `Inventory`
            })
        }), t[7] = h) : h = t[7];
        let g;
        t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, J.jsxs)(`div`, {
            className: `min-w-0`,
            children: [h, (0, J.jsx)(`p`, {
                className: `text-token-text-secondary text-[15px] leading-[22px]`,
                children: (0, J.jsx)(z, {
                    id: `chatgpt.work.chrome.installed.sample_work.inventory.form.metadata`,
                    defaultMessage: `Ecommerce store · Today`
                })
            })]
        }), t[8] = g) : g = t[8];
        let _;
        t[9] === l ? _ = t[10] : (_ = l ? (0, J.jsxs)(`span`, {
            className: `bg-token-theme-green-background text-token-theme-green-text-on-background inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-[13px] leading-[17px] font-semibold`,
            role: `status`,
            children: [(0, J.jsx)(`span`, {
                "aria-hidden": `true`,
                className: `bg-token-theme-green-text-on-background size-1.5 rounded-full`
            }), (0, J.jsx)(z, {
                id: `chatgpt.work.chrome.installed.sample_work.inventory.status.saved`,
                defaultMessage: `Saved`
            })]
        }) : null, t[9] = l, t[10] = _);
        let v;
        t[11] === _ ? v = t[12] : (v = (0, J.jsxs)(`header`, {
            className: `flex min-w-0 items-start justify-between gap-3`,
            children: [g, _]
        }), t[11] = _, t[12] = v);
        let y;
        t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (y = (0, J.jsx)(`hr`, {
            className: `border-token-border-default border-0 border-t`
        }), t[13] = y) : y = t[13];
        let b;
        t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (b = (0, J.jsx)(`h3`, {
            className: `text-token-text-primary text-[15px] leading-[22px] font-semibold`,
            children: (0, J.jsx)(z, {
                id: `chatgpt.work.chrome.installed.sample_work.inventory.products.heading`,
                defaultMessage: `Products`
            })
        }), t[14] = b) : b = t[14];
        let x;
        t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (x = (0, J.jsx)(`caption`, {
            className: `sr-only`,
            children: (0, J.jsx)(z, {
                id: `chatgpt.work.chrome.installed.sample_work.inventory.table.caption`,
                defaultMessage: `Sample ecommerce products, stock quantities, and statuses`
            })
        }), t[15] = x) : x = t[15];
        let S;
        t[16] === Symbol.for(`react.memo_cache_sentinel`) ? (S = (0, J.jsx)(`th`, {
            className: `px-3 py-2.5 text-start font-medium`,
            scope: `col`,
            children: (0, J.jsx)(z, {
                id: `chatgpt.work.chrome.installed.sample_work.inventory.table.column.product`,
                defaultMessage: `Product`
            })
        }), t[16] = S) : S = t[16];
        let C;
        t[17] === Symbol.for(`react.memo_cache_sentinel`) ? (C = (0, J.jsx)(`th`, {
            className: `w-20 px-2 py-2.5 text-start font-medium sm:w-24`,
            id: `work-chrome-sample-inventory-stock-heading`,
            scope: `col`,
            children: (0, J.jsx)(z, {
                id: `chatgpt.work.chrome.installed.sample_work.inventory.table.column.stock`,
                defaultMessage: `Stock`
            })
        }), t[17] = C) : C = t[17];
        let w;
        t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (w = (0, J.jsx)(`thead`, {
            className: `bg-token-bg-secondary-surface text-token-text-secondary text-xs leading-[17px] font-medium`,
            children: (0, J.jsxs)(`tr`, {
                children: [S, C, (0, J.jsx)(`th`, {
                    className: `w-24 px-2 py-2.5 text-start font-medium sm:w-28`,
                    scope: `col`,
                    children: (0, J.jsx)(z, {
                        id: `chatgpt.work.chrome.installed.sample_work.inventory.table.column.status`,
                        defaultMessage: `Status`
                    })
                })]
            })
        }), t[18] = w) : w = t[18];
        let T;
        if (t[19] !== a || t[20] !== s) {
            let e;
            t[22] === a ? e = t[23] : (e = e => {
                let t = `work-chrome-sample-inventory-product-${e.kind}`;
                return (0, J.jsxs)(`tr`, {
                    className: `border-token-border-default h-[60px] border-t ${e.isDraft?`bg-token-theme-blue-background/40`:`bg-token-bg-primary`}`,
                    children: [(0, J.jsxs)(`th`, {
                        className: `min-w-0 px-3 py-2 text-start font-normal`,
                        scope: `row`,
                        children: [e.isDraft ? (0, J.jsxs)(J.Fragment, {
                            children: [(0, J.jsx)(`label`, {
                                className: `sr-only`,
                                htmlFor: t,
                                children: (0, J.jsx)(z, {
                                    id: `chatgpt.work.chrome.installed.sample_work.inventory.product.new.name.label`,
                                    defaultMessage: `Product name`
                                })
                            }), (0, J.jsx)(`input`, {
                                className: `border-token-border-default bg-token-bg-secondary text-token-text-primary focus-visible:outline-token-text-primary h-9 w-full rounded-lg border px-2 text-sm leading-5 font-semibold outline-none focus-visible:outline-2 focus-visible:outline-offset-2`,
                                id: t,
                                name: `new-product-name`,
                                onChange: e => {
                                    let t = e.currentTarget.value;
                                    c(e => e.map(e => e.kind === `new_product` ? {
                                        ...e,
                                        name: t
                                    } : e)), u(!1)
                                },
                                onFocus: Ye,
                                placeholder: a.formatMessage({
                                    id: `chatgpt.work.chrome.installed.sample_work.inventory.product.new.name.placeholder`,
                                    defaultMessage: `Product name`
                                }),
                                ref: tt,
                                type: `text`,
                                value: typeof e.name == `string` ? e.name : ``
                            })]
                        }) : (0, J.jsx)(`span`, {
                            className: `text-token-text-primary block truncate text-sm leading-5 font-semibold`,
                            id: t,
                            children: e.name
                        }), (0, J.jsx)(`span`, {
                            className: `text-token-text-secondary block truncate text-xs leading-[17px]`,
                            children: e.sku == null ? (0, J.jsx)(z, {
                                id: `chatgpt.work.chrome.installed.sample_work.inventory.product.new.description`,
                                defaultMessage: `New product`
                            }) : (0, J.jsx)(z, {
                                id: `chatgpt.work.chrome.installed.sample_work.inventory.product.sku`,
                                defaultMessage: `SKU {sku}`,
                                values: {
                                    sku: e.sku
                                }
                            })
                        })]
                    }), (0, J.jsx)(`td`, {
                        className: `px-2 py-2`,
                        children: (0, J.jsx)(`input`, {
                            "aria-labelledby": `${t} work-chrome-sample-inventory-stock-heading`,
                            className: `border-token-border-default bg-token-bg-secondary text-token-text-primary focus-visible:outline-token-text-primary h-9 w-full rounded-lg border px-2 text-sm leading-5 outline-none focus-visible:outline-2 focus-visible:outline-offset-2`,
                            inputMode: `numeric`,
                            min: 0,
                            name: `stock-${e.kind}`,
                            onChange: t => {
                                let n = Math.max(0, Math.trunc(t.currentTarget.valueAsNumber || 0));
                                c(t => t.map(t => t.kind === e.kind ? {
                                    ...t,
                                    stock: n
                                } : t)), u(!1)
                            },
                            step: 1,
                            type: `number`,
                            value: e.stock
                        })
                    }), (0, J.jsx)(`td`, {
                        className: `px-2 py-2`,
                        children: (0, J.jsx)(rt, {
                            product: e
                        })
                    })]
                }, e.kind)
            }, t[22] = a, t[23] = e), T = s.map(e), t[19] = a, t[20] = s, t[21] = T
        } else T = t[21];
        let E;
        t[24] === T ? E = t[25] : (E = (0, J.jsx)(`div`, {
            className: `border-token-border-default overflow-hidden rounded-xl border`,
            children: (0, J.jsxs)(`table`, {
                className: `w-full border-collapse text-start`,
                children: [x, w, (0, J.jsx)(`tbody`, {
                    children: T
                })]
            })
        }), t[24] = T, t[25] = E);
        let D;
        t[26] === d ? D = t[27] : (D = d ? null : (0, J.jsx)(j, {
            className: `self-start rounded-full`,
            color: `secondary`,
            icon: ve,
            onClick: () => {
                c(Xe), u(!1)
            },
            size: `small`,
            type: `button`,
            children: (0, J.jsx)(z, {
                id: `chatgpt.work.chrome.installed.sample_work.inventory.button.add`,
                defaultMessage: `Add`
            })
        }), t[26] = d, t[27] = D);
        let O;
        t[28] !== E || t[29] !== D ? (O = (0, J.jsxs)(`div`, {
            className: `flex min-w-0 flex-col gap-3`,
            children: [b, E, D]
        }), t[28] = E, t[29] = D, t[30] = O) : O = t[30];
        let k;
        t[31] !== O || t[32] !== v ? (k = (0, J.jsxs)(`div`, {
            className: `flex min-w-0 flex-col gap-4`,
            children: [v, y, O]
        }), t[31] = O, t[32] = v, t[33] = k) : k = t[33];
        let A;
        t[34] !== p || t[35] !== l ? (A = l ? null : (0, J.jsxs)(`footer`, {
            className: `flex shrink-0 items-center justify-end gap-2`,
            children: [(0, J.jsx)(j, {
                className: `h-11 rounded-full px-4 text-[15px] leading-[22px] font-medium`,
                color: `ghost`,
                onClick: () => {
                    c(nt), u(!1)
                },
                size: `medium`,
                type: `button`,
                children: (0, J.jsx)(z, {
                    id: `chatgpt.work.chrome.installed.sample_work.inventory.button.undo`,
                    defaultMessage: `Undo`
                })
            }), (0, J.jsx)(j, {
                "aria-disabled": !p || void 0,
                className: `h-11 rounded-full px-5 text-[15px] leading-[22px] font-semibold`,
                color: `primary`,
                onClick: e => {
                    if (!p) {
                        e.preventDefault();
                        return
                    }
                    c(Qe), u(!0)
                },
                size: `medium`,
                type: `button`,
                visuallyDisabled: !p,
                children: (0, J.jsx)(z, {
                    id: `chatgpt.work.chrome.installed.sample_work.inventory.button.done`,
                    defaultMessage: `Done`
                })
            })]
        }), t[34] = p, t[35] = l, t[36] = A) : A = t[36];
        let M;
        t[37] !== k || t[38] !== A ? (M = (0, J.jsx)(`div`, {
            className: `bg-token-bg-secondary-surface flex min-h-[480px] flex-1 p-4 sm:min-h-[560px] sm:p-6`,
            children: (0, J.jsxs)(`section`, {
                "aria-labelledby": `work-chrome-sample-inventory-heading`,
                className: `border-token-border-default bg-token-bg-primary flex min-w-0 flex-1 flex-col justify-between gap-5 rounded-2xl border p-4 sm:p-6`,
                children: [k, A]
            })
        }), t[37] = k, t[38] = A, t[39] = M) : M = t[39];
        let N;
        return t[40] !== n || t[41] !== M ? (N = (0, J.jsx)(Ve, {
            onClose: n,
            title: m,
            children: M
        }), t[40] = n, t[41] = M, t[42] = N) : N = t[42], N
    }
}));

function ot(e) {
    return (0, Y.jsxs)(`li`, {
        className: `flex min-h-[60px] items-start gap-3 rounded-xl border p-3 sm:min-h-[68px] sm:gap-4 ${e.isRecommendation?`border-token-theme-green-text-on-background/20 bg-token-theme-green-background`:`border-token-border-default bg-token-bg-secondary-surface`}`,
        children: [(0, Y.jsx)(`span`, {
            className: `shrink-0 text-sm leading-5 font-medium ${e.isRecommendation?`text-token-theme-green-text-on-background`:`text-token-text-tertiary`}`,
            children: e.number
        }), (0, Y.jsx)(`span`, {
            className: `text-token-text-primary w-[88px] shrink-0 text-sm leading-5 font-semibold sm:w-[112px]`,
            children: e.title
        }), (0, Y.jsx)(`span`, {
            className: `text-token-text-secondary min-w-0 flex-1 text-sm leading-5`,
            children: e.detail
        })]
    }, e.number)
}
var st, Y, ct, lt, ut = e((() => {
    st = H(), B(), He(), Y = R(), ct = [{
        number: `01`,
        title: (0, Y.jsx)(z, {
            id: `chatgpt.work.chrome.installed.sample_work.report.modal.key_point.activation.title`,
            defaultMessage: `Activation`
        }),
        detail: (0, Y.jsx)(z, {
            id: `chatgpt.work.chrome.installed.sample_work.report.modal.key_point.activation.description`,
            defaultMessage: `Faster setup lifted first-week completion by 18%.`
        }),
        isRecommendation: !1
    }, {
        number: `02`,
        title: (0, Y.jsx)(z, {
            id: `chatgpt.work.chrome.installed.sample_work.report.modal.key_point.retention.title`,
            defaultMessage: `Retention`
        }),
        detail: (0, Y.jsx)(z, {
            id: `chatgpt.work.chrome.installed.sample_work.report.modal.key_point.retention.description`,
            defaultMessage: `Connected workflows correlate with higher return use.`
        }),
        isRecommendation: !1
    }, {
        number: `03`,
        title: (0, Y.jsx)(z, {
            id: `chatgpt.work.chrome.installed.sample_work.report.modal.key_point.decision.title`,
            defaultMessage: `Decision`
        }),
        detail: (0, Y.jsx)(z, {
            id: `chatgpt.work.chrome.installed.sample_work.report.modal.key_point.decision.description`,
            defaultMessage: `Prioritize guided imports in the next release.`
        }),
        isRecommendation: !0
    }], lt = e => {
        "use forget";
        let t = (0, st.c)(11),
            {
                onClose: n
            } = e,
            r;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, Y.jsx)(z, {
            id: `chatgpt.work.chrome.installed.sample_work.report.modal.title`,
            defaultMessage: `Summarize a report`
        }), t[0] = r) : r = t[0];
        let i;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, Y.jsxs)(`aside`, {
            "aria-hidden": `true`,
            className: `bg-token-bg-secondary-surface flex w-12 shrink-0 flex-col items-center gap-2.5 py-5 sm:w-16`,
            children: [(0, Y.jsx)(`span`, {
                className: `bg-token-text-tertiary/50 h-[3px] w-5 rounded-full`
            }), (0, Y.jsx)(`span`, {
                className: `bg-token-text-tertiary/30 h-[3px] w-3.5 self-center rounded-full`
            }), (0, Y.jsx)(`span`, {
                className: `bg-token-bg-primary mt-4 h-8 w-6 rounded-sm`
            })]
        }), t[1] = i) : i = t[1];
        let a;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, Y.jsx)(`h3`, {
            id: `work-chrome-sample-report-title`,
            className: `text-token-text-primary text-xl leading-7 font-semibold tracking-[-0.01em] sm:text-2xl sm:leading-8`,
            children: (0, Y.jsx)(z, {
                id: `chatgpt.work.chrome.installed.sample_work.report.modal.document.title`,
                defaultMessage: `Q2 customer research synthesis`
            })
        }), t[2] = a) : a = t[2];
        let o;
        t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, Y.jsxs)(`header`, {
            className: `border-token-border-default flex flex-col gap-1 border-b pb-5`,
            children: [a, (0, Y.jsx)(`p`, {
                className: `text-token-text-secondary text-sm leading-5`,
                children: (0, Y.jsx)(z, {
                    id: `chatgpt.work.chrome.installed.sample_work.report.modal.document.metadata`,
                    defaultMessage: `Updated today · {pageCount, plural, one {# page} other {# pages}}`,
                    values: {
                        pageCount: 12
                    }
                })
            })]
        }), t[3] = o) : o = t[3];
        let s;
        t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, Y.jsx)(`h4`, {
            id: `work-chrome-sample-report-summary`,
            className: `text-token-text-primary text-base leading-6 font-semibold sm:text-lg`,
            children: (0, Y.jsx)(z, {
                id: `chatgpt.work.chrome.installed.sample_work.report.modal.summary.title`,
                defaultMessage: `Executive Summary`
            })
        }), t[4] = s) : s = t[4];
        let c;
        t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, Y.jsx)(`p`, {
            className: `text-token-text-secondary text-sm leading-[22px] sm:text-[15px]`,
            children: (0, Y.jsx)(z, {
                id: `chatgpt.work.chrome.installed.sample_work.report.modal.summary.activation`,
                defaultMessage: `Across interviews, teams reached value faster when setup focused on a few guided actions instead of a broad list of features. Participants who connected an existing workflow could start with familiar context and complete a meaningful task sooner.`
            })
        }), t[5] = c) : c = t[5];
        let l;
        t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (l = (0, Y.jsxs)(`section`, {
            "aria-labelledby": `work-chrome-sample-report-summary`,
            className: `flex flex-col gap-3`,
            children: [s, c, (0, Y.jsx)(`p`, {
                className: `text-token-text-secondary text-sm leading-[22px] sm:text-[15px]`,
                children: (0, Y.jsx)(z, {
                    id: `chatgpt.work.chrome.installed.sample_work.report.modal.summary.import_friction`,
                    defaultMessage: `The main point of friction was uncertainty around imports. People wanted to know what would be brought over, what would remain unchanged, and whether they could review the result before continuing.`
                })
            })]
        }), t[6] = l) : l = t[6];
        let u;
        t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, Y.jsx)(`h4`, {
            id: `work-chrome-sample-report-key-points`,
            className: `text-token-text-primary text-base leading-6 font-semibold sm:text-lg`,
            children: (0, Y.jsx)(z, {
                id: `chatgpt.work.chrome.installed.sample_work.report.modal.key_points.title`,
                defaultMessage: `Key points`
            })
        }), t[7] = u) : u = t[7];
        let d;
        t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, Y.jsx)(`div`, {
            className: `bg-token-bg-secondary-surface w-full p-4 sm:p-7`,
            children: (0, Y.jsxs)(`article`, {
                "aria-labelledby": `work-chrome-sample-report-title`,
                className: `border-token-border-default bg-token-bg-primary flex min-h-[480px] w-full overflow-hidden rounded-2xl border sm:min-h-[618px]`,
                children: [i, (0, Y.jsxs)(`div`, {
                    className: `flex min-w-0 flex-1 flex-col gap-6 px-4 py-6 sm:px-7 sm:py-7`,
                    children: [o, l, (0, Y.jsxs)(`section`, {
                        "aria-labelledby": `work-chrome-sample-report-key-points`,
                        className: `flex flex-col gap-3`,
                        children: [u, (0, Y.jsx)(`ol`, {
                            className: `flex flex-col gap-2.5`,
                            children: ct.map(ot)
                        })]
                    })]
                })]
            })
        }), t[8] = d) : d = t[8];
        let f;
        return t[9] === n ? f = t[10] : (f = (0, Y.jsx)(Ve, {
            onClose: n,
            title: r,
            children: d
        }), t[9] = n, t[10] = f), f
    }
}));

function dt(e) {
    return e.preventDefault()
}

function ft(e) {
    let {
        isCompleted: t
    } = e;
    return t
}

function pt(e) {
    return (e ?? 0) + 1
}
var X, Z, Q, mt, ht, gt, _t, vt, yt, bt, xt, St, Ct, wt = e((() => {
    X = H(), r(), ce(), U(), pe(), G(), de(), be(), he(), Oe(), Ae(), we(), Ce(), xe(), ge(), m(), Pe(), w(), Z = t(V()), B(), Ke(), at(), ut(), Q = R(), mt = {
        sidebar: `open_sidebar`,
        pin: `pin_extension`,
        try: `sample_gallery`
    }, ht = {
        status: `idle`
    }, gt = e => {
        "use forget";
        let t = (0, X.c)(25),
            {
                installerStatus: n,
                onInteraction: r,
                resolution: i
            } = e,
            a = oe();
        if (n.status === `downloading`) {
            let e;
            t[0] === n.progressPercent ? e = t[1] : (e = n.progressPercent == null ? (0, Q.jsx)(ue, {
                "aria-hidden": `true`,
                className: `size-6 motion-safe:animate-spin`
            }) : (0, Q.jsx)(`span`, {
                "aria-hidden": `true`,
                children: (0, Q.jsx)(le, {
                    percentage: n.progressPercent,
                    sizeOverride: 24,
                    backgroundStrokeClassName: `stroke-current opacity-35`
                })
            }), t[0] = n.progressPercent, t[1] = e);
            let r;
            t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, Q.jsx)(z, {
                id: `chatgpt.work.chrome.installed.download.button.downloading`,
                defaultMessage: `Downloading`
            }), t[2] = r) : r = t[2];
            let i;
            t[3] === e ? i = t[4] : (i = (0, Q.jsx)(j, {
                type: `button`,
                color: `primary`,
                size: `large`,
                className: `min-h-[52px] max-w-full cursor-not-allowed rounded-full px-5 text-base leading-5 font-medium whitespace-normal sm:min-h-[63px] sm:px-6 sm:text-xl`,
                "aria-disabled": !0,
                visuallyDisabled: !0,
                onClick: dt,
                children: (0, Q.jsxs)(`span`, {
                    className: `flex items-center justify-center gap-2`,
                    children: [e, r]
                })
            }), t[3] = e, t[4] = i);
            let o;
            t[5] === a ? o = t[6] : (o = a.formatMessage({
                id: `chatgpt.work.chrome.installed.download.progress.label`,
                defaultMessage: `ChatGPT download progress`
            }), t[5] = a, t[6] = o);
            let s = n.progressPercent ?? void 0,
                c;
            t[7] !== o || t[8] !== s ? (c = (0, Q.jsx)(`span`, {
                "aria-label": o,
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-valuenow": s,
                className: `sr-only`,
                role: `progressbar`
            }), t[7] = o, t[8] = s, t[9] = c) : c = t[9];
            let l;
            return t[10] !== i || t[11] !== c ? (l = (0, Q.jsxs)(Q.Fragment, {
                children: [i, c]
            }), t[10] = i, t[11] = c, t[12] = l) : l = t[12], l
        }
        if (n.status === `downloaded`) {
            let e;
            t[13] === r ? e = t[14] : (e = () => r?.({
                action: `show_installer_clicked`,
                step: `installer_ready`
            }), t[13] = r, t[14] = e);
            let n;
            t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, Q.jsx)(z, {
                id: `chatgpt.work.chrome.installed.download.button.show_installer`,
                defaultMessage: `Show installer`
            }), t[15] = n) : n = t[15];
            let i;
            return t[16] === e ? i = t[17] : (i = (0, Q.jsx)(j, {
                type: `button`,
                color: `primary`,
                size: `large`,
                className: `min-h-[52px] max-w-full rounded-full px-5 text-base leading-5 font-medium whitespace-normal sm:min-h-[63px] sm:px-6 sm:text-xl`,
                contentWrapperClassName: `gap-2`,
                icon: me,
                iconClassName: `size-6`,
                "data-chatgpt-extension-action": `show-codex-installer`,
                onClick: e,
                children: n
            }), t[16] = e, t[17] = i), i
        }
        let o = i.type === `mobile_learn_more` || i.type === `unknown_download` ? Se : i.type === `windows_download_url` ? je : ke,
            s;
        if (t[18] !== r || t[19] !== i || t[20] !== o) {
            let e;
            t[22] !== r || t[23] !== i.type ? (e = () => {
                (i.type === `mac_download_url` || i.type === `mac_download_options` || i.type === `windows_download_url` || i.type === `unknown_download`) && r?.({
                    action: `download_clicked`,
                    step: `download`
                })
            }, t[22] = r, t[23] = i.type, t[24] = e) : e = t[24], s = Me({
                className: `min-h-[52px] max-w-full rounded-full px-5 text-base leading-5 font-medium whitespace-normal sm:min-h-[63px] sm:px-6 sm:text-xl`,
                contentWrapperClassName: `gap-2`,
                icon: o,
                iconClassName: `size-6`,
                learnMoreUrl: v(`/codex`),
                onClick: e,
                resolution: i,
                signalSurface: `work_chrome_installed`
            }), t[18] = r, t[19] = i, t[20] = o, t[21] = s
        } else s = t[21];
        return s
    }, _t = e => {
        "use forget";
        let t = (0, X.c)(42),
            {
                browserName: n,
                isAppInstalled: r,
                isExtensionPinned: i,
                isSampleWorkCompleted: a,
                isSidePanelOpen: o,
                onSelectStep: s,
                requiresDesktopApp: c,
                selectedStep: l,
                usesMenuPinning: u
            } = e,
            d = !c || r,
            f = o && (!u || i),
            p;
        t[0] === u ? p = t[1] : (p = u ? (0, Q.jsx)(z, {
            id: `chatgpt.work.chrome.installed.checklist.step.sidebar.open_and_pin`,
            defaultMessage: `Open and pin the extension`
        }) : (0, Q.jsx)(z, {
            id: `chatgpt.work.chrome.installed.checklist.step.sidebar.open_extension`,
            defaultMessage: `Open the extension in the sidebar`
        }), t[0] = u, t[1] = p);
        let m;
        t[2] !== d || t[3] !== f || t[4] !== p ? (m = {
            step: `sidebar`,
            isCompleted: f,
            isEnabled: d,
            label: p
        }, t[2] = d, t[3] = f, t[4] = p, t[5] = m) : m = t[5];
        let h = d && o,
            g;
        t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, Q.jsx)(z, {
            id: `chatgpt.work.chrome.installed.checklist.step.pin`,
            defaultMessage: `Pin the extension`
        }), t[6] = g) : g = t[6];
        let _;
        t[7] !== i || t[8] !== h ? (_ = {
            step: `pin`,
            isCompleted: i,
            isEnabled: h,
            label: g
        }, t[7] = i, t[8] = h, t[9] = _) : _ = t[9];
        let v = d && o && i,
            y;
        t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (y = (0, Q.jsx)(z, {
            id: `chatgpt.work.chrome.installed.checklist.step.sample_work`,
            defaultMessage: `Try ChatGPT on sample work`
        }), t[10] = y) : y = t[10];
        let b;
        t[11] !== a || t[12] !== v ? (b = {
            step: `try`,
            isCompleted: a,
            isEnabled: v,
            label: y
        }, t[11] = a, t[12] = v, t[13] = b) : b = t[13];
        let x;
        t[14] !== m || t[15] !== _ || t[16] !== b ? (x = [m, _, b], t[14] = m, t[15] = _, t[16] = b, t[17] = x) : x = t[17];
        let S = x,
            C;
        t[18] !== S || t[19] !== u ? (C = S.filter(e => {
            let {
                step: t
            } = e;
            return !u || t !== `pin`
        }), t[18] = S, t[19] = u, t[20] = C) : C = t[20];
        let w = C,
            T = Number(c && r),
            E;
        t[21] === w ? E = t[22] : (E = w.filter(ft), t[21] = w, t[22] = E);
        let D = T + E.length,
            O;
        t[23] === n ? O = t[24] : (O = (0, Q.jsx)(`h2`, {
            id: `work-chrome-setup-heading`,
            className: `px-1.5 pt-1.5 text-[13px] leading-5 font-normal tracking-[-0.01em]`,
            children: (0, Q.jsx)(z, {
                id: `chatgpt.work.chrome.installed.checklist.heading.browser_name`,
                defaultMessage: `Set up your ChatGPT {browser} Extension`,
                values: {
                    browser: n
                }
            })
        }), t[23] = n, t[24] = O);
        let k = `max(5px, ${D/(w.length+Number(c))*100}%)`,
            A;
        t[25] === k ? A = t[26] : (A = (0, Q.jsx)(`div`, {
            "aria-hidden": `true`,
            className: `bg-token-bg-tertiary mx-1.5 mt-2 h-1.5 overflow-hidden rounded-full`,
            children: (0, Q.jsx)(`span`, {
                className: `bg-token-text-primary block h-full rounded-full motion-safe:transition-[width] motion-safe:duration-300`,
                style: {
                    width: k
                }
            })
        }), t[25] = k, t[26] = A);
        let j;
        t[27] !== r || t[28] !== c ? (j = c ? (0, Q.jsxs)(`li`, {
            className: `flex items-center gap-1.5 px-2 py-1.5`,
            children: [r ? (0, Q.jsx)(W, {
                "aria-hidden": `true`,
                className: `text-token-theme-green-text size-5 shrink-0`
            }) : (0, Q.jsx)(`span`, {
                "aria-hidden": `true`,
                className: `border-token-border-heavy m-[2.5px] size-[15px] shrink-0 rounded-full border`
            }), (0, Q.jsx)(`span`, {
                children: (0, Q.jsx)(z, {
                    id: `chatgpt.work.chrome.installed.checklist.step.download`,
                    defaultMessage: `Download and install the ChatGPT app`
                })
            }), r ? (0, Q.jsx)(`span`, {
                className: `sr-only`,
                children: (0, Q.jsx)(z, {
                    id: `chatgpt.work.chrome.installed.checklist.step.download.completed`,
                    defaultMessage: `Completed`
                })
            }) : null]
        }) : null, t[27] = r, t[28] = c, t[29] = j) : j = t[29];
        let M;
        t[30] !== d || t[31] !== s || t[32] !== l || t[33] !== w ? (M = w.map(e => {
            let {
                isCompleted: t,
                isEnabled: n,
                label: r,
                step: i
            } = e;
            return (0, Q.jsx)(`li`, {
                children: (0, Q.jsxs)(`button`, {
                    type: `button`,
                    className: `interactive-button-secondary flex w-full items-center gap-1.5 rounded-sm border-0 px-2 py-1.5 text-start aria-disabled:opacity-100`,
                    "aria-current": d && l === i ? `step` : void 0,
                    "aria-disabled": !n || void 0,
                    onClick: e => {
                        if (!n) {
                            e.preventDefault();
                            return
                        }
                        s(i)
                    },
                    children: [t ? (0, Q.jsx)(W, {
                        "aria-hidden": `true`,
                        className: `text-token-theme-green-text size-5 shrink-0`
                    }) : (0, Q.jsx)(`span`, {
                        "aria-hidden": `true`,
                        className: `border-token-border-heavy m-[2.5px] size-[15px] shrink-0 rounded-full border`
                    }), (0, Q.jsx)(`span`, {
                        children: r
                    }), t ? (0, Q.jsx)(`span`, {
                        className: `sr-only`,
                        children: (0, Q.jsx)(z, {
                            id: `chatgpt.work.chrome.installed.checklist.step.completed`,
                            defaultMessage: `Completed`
                        })
                    }) : null]
                })
            }, i)
        }), t[30] = d, t[31] = s, t[32] = l, t[33] = w, t[34] = M) : M = t[34];
        let N;
        t[35] !== j || t[36] !== M ? (N = (0, Q.jsxs)(`ol`, {
            className: `mt-2.5 flex list-none flex-col p-0 text-[13px] leading-5 tracking-[-0.012em]`,
            children: [j, M]
        }), t[35] = j, t[36] = M, t[37] = N) : N = t[37];
        let P;
        return t[38] !== O || t[39] !== A || t[40] !== N ? (P = (0, Q.jsxs)(`aside`, {
            "aria-labelledby": `work-chrome-setup-heading`,
            className: `border-token-border-heavy bg-token-bg-primary rounded-2xl border p-2.5`,
            children: [O, A, N]
        }), t[38] = O, t[39] = A, t[40] = N, t[41] = P) : P = t[41], P
    }, vt = {
        email: `sample_email`,
        report: `sample_report`,
        inventory: `sample_inventory`
    }, yt = e => {
        "use forget";
        let t = (0, X.c)(37),
            {
                description: n,
                kind: r,
                onTry: i,
                prompt: a,
                title: o
            } = e,
            s = r === `email` ? De : r === `report` ? Te : _e,
            c = `work-chrome-sample-${r}-heading`,
            l = `/images/work/chrome/onboarding-sample-${r}-light.png`,
            u;
        t[0] === l ? u = t[1] : (u = (0, Q.jsx)(`img`, {
            src: l,
            alt: ``,
            width: 564,
            height: 419,
            className: `h-full w-full object-contain dark:hidden`
        }), t[0] = l, t[1] = u);
        let d = `/images/work/chrome/onboarding-sample-${r}-dark.png`,
            f;
        t[2] === d ? f = t[3] : (f = (0, Q.jsx)(`img`, {
            src: d,
            alt: ``,
            width: 564,
            height: 419,
            className: `hidden h-full w-full object-contain dark:block`
        }), t[2] = d, t[3] = f);
        let p;
        t[4] !== u || t[5] !== f ? (p = (0, Q.jsxs)(`div`, {
            "aria-hidden": `true`,
            className: `h-full min-h-0 w-[42%] max-w-[282px] flex-none max-lg:h-[180px] max-sm:w-full max-sm:self-center lg:[@media(max-height:880px)]:w-[38%]`,
            children: [u, f]
        }), t[4] = u, t[5] = f, t[6] = p) : p = t[6];
        let m = r === `email` ? `bg-yellow-75 flex size-7 shrink-0 items-center justify-center rounded-md text-yellow-500 dark:bg-yellow-900 dark:text-yellow-300` : r === `report` ? `bg-blue-75 flex size-7 shrink-0 items-center justify-center rounded-md text-blue-400 dark:bg-blue-900 dark:text-blue-300` : `bg-green-75 flex size-7 shrink-0 items-center justify-center rounded-md text-green-500 dark:bg-green-900 dark:text-green-400`,
            h;
        t[7] === s ? h = t[8] : (h = (0, Q.jsx)(s, {
            "aria-hidden": `true`,
            className: `icon-sm sm:size-5`
        }), t[7] = s, t[8] = h);
        let g;
        t[9] !== m || t[10] !== h ? (g = (0, Q.jsx)(`span`, {
            className: m,
            children: h
        }), t[9] = m, t[10] = h, t[11] = g) : g = t[11];
        let _ = `work-chrome-sample-${r}-heading`,
            v;
        t[12] !== _ || t[13] !== o ? (v = (0, Q.jsx)(`h3`, {
            id: _,
            className: `text-heading-2 min-w-0 font-semibold tracking-[0.07px] max-sm:text-xl/6 lg:[@media(max-height:880px)]:text-xl/6`,
            children: o
        }), t[12] = _, t[13] = o, t[14] = v) : v = t[14];
        let y;
        t[15] !== v || t[16] !== g ? (y = (0, Q.jsxs)(`div`, {
            className: `flex min-h-7 min-w-0 items-center gap-3`,
            children: [g, v]
        }), t[15] = v, t[16] = g, t[17] = y) : y = t[17];
        let b;
        t[18] === n ? b = t[19] : (b = (0, Q.jsx)(`p`, {
            className: `text-token-text-secondary dark:text-gray-solid-400 mx-10 text-base leading-6 tracking-[-0.02em] max-sm:mx-0 lg:[@media(max-height:880px)]:mx-0 lg:[@media(max-height:880px)]:text-sm/5`,
            children: n
        }), t[18] = n, t[19] = b);
        let x;
        t[20] !== y || t[21] !== b ? (x = (0, Q.jsxs)(`div`, {
            className: `flex flex-col gap-2`,
            children: [y, b]
        }), t[20] = y, t[21] = b, t[22] = x) : x = t[22];
        let S;
        t[23] !== r || t[24] !== i ? (S = () => i(r), t[23] = r, t[24] = i, t[25] = S) : S = t[25];
        let C;
        t[26] === Symbol.for(`react.memo_cache_sentinel`) ? (C = (0, Q.jsx)(z, {
            id: `chatgpt.work.chrome.installed.sample_work.button.try`,
            defaultMessage: `Try it`
        }), t[26] = C) : C = t[26];
        let w;
        t[27] !== a || t[28] !== S ? (w = (0, Q.jsx)(j, {
            type: `button`,
            color: `secondary`,
            size: `medium`,
            fullWidth: !0,
            className: `min-h-11 shrink-0 rounded-full bg-transparent text-sm leading-5 lg:[@media(max-height:880px)]:min-h-9`,
            "data-chatgpt-extension-action": `open-side-panel`,
            "data-chatgpt-extension-prompt": a,
            onClick: S,
            children: C
        }), t[27] = a, t[28] = S, t[29] = w) : w = t[29];
        let T;
        t[30] !== x || t[31] !== w ? (T = (0, Q.jsxs)(`div`, {
            className: `flex min-w-0 flex-1 flex-col justify-center gap-10 max-xl:gap-6 lg:[@media(max-height:880px)]:gap-4`,
            children: [x, w]
        }), t[30] = x, t[31] = w, t[32] = T) : T = t[32];
        let E;
        return t[33] !== c || t[34] !== T || t[35] !== p ? (E = (0, Q.jsxs)(`article`, {
            "aria-labelledby": c,
            className: `border-token-border-default bg-token-bg-secondary-surface dark:bg-gray-solid-900 flex min-h-0 flex-1 items-center gap-6 rounded-2xl border p-3 max-xl:gap-4 max-lg:min-h-[200px] max-sm:flex-none max-sm:flex-col max-sm:items-stretch dark:border-gray-950`,
            children: [p, T]
        }), t[33] = c, t[34] = T, t[35] = p, t[36] = E) : E = t[36], E
    }, bt = e => {
        "use forget";
        let t = (0, X.c)(19),
            {
                onTry: n
            } = e,
            r = oe(),
            i;
        t[0] === r ? i = t[1] : (i = r.formatMessage({
            id: `chatgpt.work.chrome.installed.sample_work.email.prompt.sender_name`,
            defaultMessage: `Reply to {senderName}'s message on this page`
        }, {
            senderName: `Samuel`
        }), t[0] = r, t[1] = i);
        let a, o;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, Q.jsx)(z, {
            id: `chatgpt.work.chrome.installed.sample_work.email.title`,
            defaultMessage: `Draft an email`
        }), o = (0, Q.jsx)(z, {
            id: `chatgpt.work.chrome.installed.sample_work.email.description`,
            defaultMessage: `Write a reply, follow-up, or new message in the tone you choose.`
        }), t[2] = a, t[3] = o) : (a = t[2], o = t[3]);
        let s;
        t[4] !== n || t[5] !== i ? (s = (0, Q.jsx)(yt, {
            kind: `email`,
            onTry: n,
            prompt: i,
            title: a,
            description: o
        }), t[4] = n, t[5] = i, t[6] = s) : s = t[6];
        let c, l;
        t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, Q.jsx)(z, {
            id: `chatgpt.work.chrome.installed.sample_work.report.title`,
            defaultMessage: `Summarize a report`
        }), l = (0, Q.jsx)(z, {
            id: `chatgpt.work.chrome.installed.sample_work.report.description`,
            defaultMessage: `Pull out the key findings, supporting evidence, and recommendations.`
        }), t[7] = c, t[8] = l) : (c = t[7], l = t[8]);
        let u;
        t[9] === n ? u = t[10] : (u = (0, Q.jsx)(yt, {
            kind: `report`,
            onTry: n,
            prompt: `Summarize this report`,
            title: c,
            description: l
        }), t[9] = n, t[10] = u);
        let d, f;
        t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, Q.jsx)(z, {
            id: `chatgpt.work.chrome.installed.sample_work.inventory.title`,
            defaultMessage: `Update an inventory system`
        }), f = (0, Q.jsx)(z, {
            id: `chatgpt.work.chrome.installed.sample_work.inventory.description`,
            defaultMessage: `Mark sold-out products and add a new item to the inventory.`
        }), t[11] = d, t[12] = f) : (d = t[11], f = t[12]);
        let p;
        t[13] === n ? p = t[14] : (p = (0, Q.jsx)(yt, {
            kind: `inventory`,
            onTry: n,
            prompt: `I sold out of these 3 products today but ordered 5 new desk mousepads. Update the stock and save the inventory.`,
            title: d,
            description: f
        }), t[13] = n, t[14] = p);
        let m;
        return t[15] !== p || t[16] !== s || t[17] !== u ? (m = (0, Q.jsxs)(`section`, {
            "aria-labelledby": `work-chrome-onboarding-heading`,
            className: `flex h-full min-h-0 w-full flex-col gap-3`,
            children: [s, u, p]
        }), t[15] = p, t[16] = s, t[17] = u, t[18] = m) : m = t[18], m
    }, xt = () => {
        "use forget";
        let e = (0, X.c)(3),
            t;
        e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Q.jsx)(`span`, {
            className: `bg-token-theme-green-background text-token-theme-green-text-on-background flex size-9 shrink-0 items-center justify-center rounded-full`,
            children: (0, Q.jsx)(Ee, {
                "aria-hidden": `true`,
                className: `icon-sm`
            })
        }), e[0] = t) : t = e[0];
        let n;
        e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, Q.jsx)(`span`, {
            className: `text-sm leading-5 font-semibold`,
            children: (0, Q.jsx)(z, {
                id: `chatgpt.work.chrome.installed.sample_work.prompt.added_to_side_chat`,
                defaultMessage: `Added to Side Chat`
            })
        }), e[1] = n) : n = e[1];
        let r;
        return e[2] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, Q.jsxs)(`div`, {
            role: `status`,
            "aria-live": `polite`,
            "aria-atomic": `true`,
            className: `border-token-border-default bg-token-bg-primary text-token-text-primary shadow-long pointer-events-none fixed end-4 bottom-5 z-[60] flex w-[min(calc(100vw-2rem),320px)] items-center gap-3 rounded-2xl border px-4 py-3 sm:end-6 sm:bottom-6`,
            children: [t, (0, Q.jsxs)(`span`, {
                className: `flex min-w-0 flex-1 flex-col gap-0.5`,
                children: [n, (0, Q.jsx)(`span`, {
                    className: `text-token-text-secondary truncate text-xs leading-4`,
                    children: (0, Q.jsx)(z, {
                        id: `chatgpt.work.chrome.installed.sample_work.prompt.confirmation.subtitle`,
                        defaultMessage: `Press send to try out the demo`
                    })
                })]
            }), (0, Q.jsx)(fe, {
                "aria-hidden": `true`,
                className: `text-token-text-secondary icon-sm shrink-0`
            })]
        }), e[2] = r) : r = e[2], r
    }, St = e => {
        "use forget";
        let t = (0, X.c)(47),
            {
                action: n,
                description: r,
                footer: i,
                image: a,
                title: o
            } = e,
            s = a.name,
            c = a.name === `download` && `lg:pb-12`,
            l;
        t[0] === c ? l = t[1] : (l = I(`border-token-border-default bg-token-bg-secondary-surface dark:bg-gray-solid-900 flex min-h-0 flex-col items-center overflow-hidden rounded-2xl border p-5 pb-8 text-center lg:h-full lg:p-6 dark:border-gray-950`, c, `lg:[@media(max-height:760px)]:pt-5 lg:[@media(max-height:760px)]:pb-6`), t[0] = c, t[1] = l);
        let u = a.name === `download` ? `[--artwork-frame-width:1005] [--artwork-frame-height:449.4] [--artwork-unit:min(calc(100cqw/1005),calc(100cqh/449.4))]` : `[--artwork-frame-width:649] [--artwork-frame-height:469] [--artwork-unit:min(calc(100cqw/649),calc(100cqh/469))]`,
            d = a.name === `pin-sidebar` ? `[--artwork-width:681.5] [--artwork-height:525.5] [--artwork-offset:0] [--artwork-top:0]` : a.name === `download` ? `[--artwork-width:1005] [--artwork-height:643.5] [--artwork-offset:0] [--artwork-top:0]` : `[--artwork-width:1005] [--artwork-height:517.5] [--artwork-offset:-99.5] [--artwork-top:-12]`,
            f;
        t[2] !== u || t[3] !== d ? (f = I(`flex h-[280px] min-h-0 w-full flex-none items-center justify-center [container-type:size] lg:h-auto lg:flex-1`, u, d), t[2] = u, t[3] = d, t[4] = f) : f = t[4];
        let p = `/images/work/chrome/onboarding-${a.name}-light.png`,
            m = a.alt,
            h;
        t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (h = I(`absolute end-[calc(var(--artwork-unit)*var(--artwork-offset))] top-[calc(var(--artwork-unit)*var(--artwork-top))] h-[calc(var(--artwork-unit)*var(--artwork-height))] w-[calc(var(--artwork-unit)*var(--artwork-width))] max-w-none`, `dark:hidden`), t[5] = h) : h = t[5];
        let g;
        t[6] !== a.alt || t[7] !== p ? (g = (0, Q.jsx)(`img`, {
            src: p,
            alt: m,
            className: h
        }), t[6] = a.alt, t[7] = p, t[8] = g) : g = t[8];
        let _ = `/images/work/chrome/onboarding-${a.name}-dark.png`,
            v = a.alt,
            y;
        t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (y = I(`absolute end-[calc(var(--artwork-unit)*var(--artwork-offset))] top-[calc(var(--artwork-unit)*var(--artwork-top))] h-[calc(var(--artwork-unit)*var(--artwork-height))] w-[calc(var(--artwork-unit)*var(--artwork-width))] max-w-none`, `hidden dark:block`), t[9] = y) : y = t[9];
        let b;
        t[10] !== a.alt || t[11] !== _ ? (b = (0, Q.jsx)(`img`, {
            src: _,
            alt: v,
            className: y
        }), t[10] = a.alt, t[11] = _, t[12] = b) : b = t[12];
        let x;
        t[13] !== g || t[14] !== b ? (x = (0, Q.jsxs)(`div`, {
            className: `relative h-[calc(var(--artwork-unit)*var(--artwork-frame-height))] w-[min(100%,calc(var(--artwork-unit)*var(--artwork-frame-width)))] overflow-hidden`,
            children: [g, b]
        }), t[13] = g, t[14] = b, t[15] = x) : x = t[15];
        let S;
        t[16] !== x || t[17] !== f ? (S = (0, Q.jsx)(`div`, {
            dir: `ltr`,
            className: f,
            children: x
        }), t[16] = x, t[17] = f, t[18] = S) : S = t[18];
        let C = a.name !== `download` && `lg:min-h-[208px] lg:max-xl:[@media(min-height:761px)]:min-h-[280px] lg:[@media(max-height:760px)]:min-h-[180px]`,
            w;
        t[19] === C ? w = t[20] : (w = I(`relative mt-3 flex w-full flex-none flex-col items-center`, C), t[19] = C, t[20] = w);
        let T = a.name === `pin-sidebar` && `max-w-[415px] text-wrap`,
            E;
        t[21] === T ? E = t[22] : (E = I(`font-oai text-[28px] leading-[1.1] font-medium tracking-[-0.02em] lg:text-[36px] lg:[@media(max-height:760px)]:text-[30px]`, T), t[21] = T, t[22] = E);
        let D;
        t[23] !== E || t[24] !== o ? (D = (0, Q.jsx)(`h2`, {
            id: `work-chrome-download-heading`,
            "aria-live": `polite`,
            className: E,
            children: o
        }), t[23] = E, t[24] = o, t[25] = D) : D = t[25];
        let O = a.name === `open-sidebar` ? `dark:text-white` : `dark:text-gray-solid-400`,
            k = a.name === `pin-sidebar` ? `max-w-[392px] text-balance` : `max-w-[640px]`,
            A;
        t[26] !== O || t[27] !== k ? (A = I(`text-token-text-secondary mt-2 w-full text-base leading-[1.5] font-normal tracking-[0.07px] lg:text-xl lg:[@media(max-height:760px)]:text-base`, O, k), t[26] = O, t[27] = k, t[28] = A) : A = t[28];
        let j;
        t[29] !== r || t[30] !== A ? (j = (0, Q.jsx)(`p`, {
            className: A,
            children: r
        }), t[29] = r, t[30] = A, t[31] = j) : j = t[31];
        let M;
        t[32] === n ? M = t[33] : (M = n == null ? null : (0, Q.jsx)(`div`, {
            className: `mt-8 max-w-full lg:[@media(max-height:760px)]:mt-5`,
            children: n
        }), t[32] = n, t[33] = M);
        let N;
        t[34] === i ? N = t[35] : (N = i == null ? null : (0, Q.jsx)(`p`, {
            className: `text-token-text-secondary mt-3 text-sm`,
            children: i
        }), t[34] = i, t[35] = N);
        let P;
        t[36] !== w || t[37] !== D || t[38] !== j || t[39] !== M || t[40] !== N ? (P = (0, Q.jsxs)(`div`, {
            className: w,
            children: [D, j, M, N]
        }), t[36] = w, t[37] = D, t[38] = j, t[39] = M, t[40] = N, t[41] = P) : P = t[41];
        let F;
        return t[42] !== a.name || t[43] !== S || t[44] !== P || t[45] !== l ? (F = (0, Q.jsxs)(`section`, {
            "aria-labelledby": `work-chrome-download-heading`,
            "data-artwork": s,
            className: l,
            children: [S, P]
        }), t[42] = a.name, t[43] = S, t[44] = P, t[45] = l, t[46] = F) : F = t[46], F
    }, Ct = e => {
        "use forget";
        let t = (0, X.c)(111),
            {
                browserName: n,
                downloadResolution: r,
                hasResolvedExtensionStatus: i,
                installerStatus: a,
                isAppInstalled: o,
                isExtensionPinned: s,
                isSidePanelOpen: c,
                onInteraction: l,
                requiresDesktopApp: u
            } = e,
            d = i === void 0 || i,
            f = a === void 0 ? ht : a,
            p = o !== void 0 && o,
            m = s !== void 0 && s,
            h = c !== void 0 && c,
            g = u === void 0 || u,
            _ = oe(),
            v = !g || p,
            y = n !== `Chrome`,
            b = h && m ? `try` : h && !y ? `pin` : `sidebar`,
            [x, S] = (0, Z.useState)(null),
            [C, w] = (0, Z.useState)(!1),
            [T, E] = (0, Z.useState)(null),
            [D, O] = (0, Z.useState)(null),
            k = (0, Z.useRef)(null),
            A = x?.automaticStep === b ? x.selectedStep : b,
            M = v && h && m && A === `try`,
            N = v && T != null ? vt[T] : M ? `sample_gallery` : v ? A === `pin` ? `pin_extension` : `open_sidebar` : f.status === `downloading` ? `downloading` : f.status === `downloaded` ? `installer_ready` : !d || r.type === `loading` ? null : `download`,
            P, F;
        t[0] !== l || t[1] !== N ? (P = () => {
            l != null && (k.current ??= (l({
                action: `step_viewed`,
                step: `page`
            }), `page`), !(N == null || k.current === N) && (l({
                action: `step_viewed`,
                step: N
            }), k.current = N))
        }, F = [l, N], t[0] = l, t[1] = N, t[2] = P, t[3] = F) : (P = t[2], F = t[3]), (0, Z.useEffect)(P, F);
        let ee, te;
        t[4] === D ? (ee = t[5], te = t[6]) : (te = () => {
            if (D == null) return;
            let e = window.setTimeout(() => {
                O(null)
            }, 1e4);
            return () => window.clearTimeout(e)
        }, ee = [D], t[4] = D, t[5] = ee, t[6] = te), (0, Z.useEffect)(te, ee);
        let L;
        if (!v) {
            let e;
            t[7] !== r || t[8] !== f || t[9] !== l ? (e = (0, Q.jsx)(gt, {
                installerStatus: f,
                onInteraction: l,
                resolution: r
            }), t[7] = r, t[8] = f, t[9] = l, t[10] = e) : e = t[10];
            let i;
            t[11] !== r || t[12] !== f.status || t[13] !== l ? (i = f.status !== `downloading` && (r.type === `mac_download_url` || r.type === `mac_download_options` || r.type === `windows_download_url`) ? (0, Q.jsx)(z, {
                id: `chatgpt.work.chrome.installed.download.already_installed`,
                defaultMessage: `Or <openApp>open the app</openApp> if already installed`,
                values: {
                    openApp: e => (0, Q.jsx)(se, {
                        className: `font-medium underline-offset-2`,
                        href: `codex://launch`,
                        onClick: () => l?.({
                            action: `open_existing_app_clicked`,
                            step: f.status === `downloaded` ? `installer_ready` : `download`
                        }),
                        children: e
                    })
                }
            }) : null, t[11] = r, t[12] = f.status, t[13] = l, t[14] = i) : i = t[14];
            let a;
            t[15] === _ ? a = t[16] : (a = _.formatMessage({
                id: `chatgpt.work.chrome.installed.download.image.alt`,
                defaultMessage: `Example prompt: Look across my Google Calendar, Slack and Google Drive and create a leadership brief.`
            }), t[15] = _, t[16] = a);
            let o;
            t[17] === a ? o = t[18] : (o = {
                name: `download`,
                alt: a
            }, t[17] = a, t[18] = o);
            let s;
            t[19] !== n || t[20] !== f.status ? (s = f.status === `downloaded` ? (0, Q.jsx)(z, {
                id: `chatgpt.work.chrome.installed.download.description.finish_installation`,
                defaultMessage: `Open the downloaded installer, follow the installation steps, then launch ChatGPT. We’ll continue automatically once it’s ready.`
            }) : (0, Q.jsx)(z, {
                id: `chatgpt.work.chrome.installed.download.description.browser_name`,
                defaultMessage: `The ChatGPT desktop app is required to use this extension. Download and install it, then return to {browser} to finish setup.`,
                values: {
                    browser: n
                }
            }), t[19] = n, t[20] = f.status, t[21] = s) : s = t[21];
            let c;
            t[22] === f.status ? c = t[23] : (c = f.status === `downloaded` ? (0, Q.jsx)(z, {
                id: `chatgpt.work.chrome.installed.download.heading.downloaded`,
                defaultMessage: `Open ChatGPT to finish installation`
            }) : (0, Q.jsx)(z, {
                id: `chatgpt.work.chrome.installed.download.heading`,
                defaultMessage: `Download ChatGPT`
            }), t[22] = f.status, t[23] = c);
            let u;
            t[24] !== e || t[25] !== i || t[26] !== o || t[27] !== s || t[28] !== c ? (u = {
                action: e,
                footer: i,
                image: o,
                description: s,
                title: c
            }, t[24] = e, t[25] = i, t[26] = o, t[27] = s, t[28] = c, t[29] = u) : u = t[29], L = u
        } else if (A === `pin` || y) {
            let e;
            t[30] === y ? e = t[31] : (e = y ? (0, Q.jsx)(z, {
                id: `chatgpt.work.chrome.installed.pin.description.open_and_pin`,
                defaultMessage: `Pin ChatGPT in the Extensions menu, then click ChatGPT in your toolbar to open the sidebar.`
            }) : (0, Q.jsx)(z, {
                id: `chatgpt.work.chrome.installed.pin.description`,
                defaultMessage: `Pin the extension so you can open ChatGPT quickly from any tab.`
            }), t[30] = y, t[31] = e);
            let r = y ? `pin-menu` : `pin-sidebar`,
                i;
            t[32] !== n || t[33] !== _ || t[34] !== y ? (i = y ? _.formatMessage({
                id: `chatgpt.work.chrome.installed.pin.image.alt.browser_name`,
                defaultMessage: `The {browser} Extensions menu showing how to pin ChatGPT to the toolbar.`
            }, {
                browser: n
            }) : _.formatMessage({
                id: `chatgpt.work.chrome.installed.pin.image.alt.sidebar`,
                defaultMessage: `The pin button at the top of the ChatGPT sidebar adds the extension to the Chrome toolbar.`
            }), t[32] = n, t[33] = _, t[34] = y, t[35] = i) : i = t[35];
            let a;
            t[36] !== r || t[37] !== i ? (a = {
                name: r,
                alt: i
            }, t[36] = r, t[37] = i, t[38] = a) : a = t[38];
            let o;
            t[39] === n ? o = t[40] : (o = (0, Q.jsx)(z, {
                id: `chatgpt.work.chrome.installed.pin.heading.browser_name`,
                defaultMessage: `Add ChatGPT to your {browser} toolbar`,
                values: {
                    browser: n
                }
            }), t[39] = n, t[40] = o);
            let s;
            t[41] !== e || t[42] !== a || t[43] !== o ? (s = {
                action: null,
                description: e,
                footer: null,
                image: a,
                title: o
            }, t[41] = e, t[42] = a, t[43] = o, t[44] = s) : s = t[44], L = s
        } else {
            let e;
            t[45] === l ? e = t[46] : (e = () => l?.({
                action: `sidebar_clicked`,
                step: `open_sidebar`
            }), t[45] = l, t[46] = e);
            let r;
            t[47] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, Q.jsx)(z, {
                id: `chatgpt.work.chrome.installed.sidebar.button.open`,
                defaultMessage: `Open sidebar`
            }), t[47] = r) : r = t[47];
            let i;
            t[48] === e ? i = t[49] : (i = (0, Q.jsx)(j, {
                type: `button`,
                color: `secondary`,
                size: `large`,
                className: `min-h-[52px] max-w-full rounded-full px-5 text-base leading-5 font-medium whitespace-normal sm:min-h-[63px] sm:px-6 sm:text-xl`,
                contentWrapperClassName: `gap-2`,
                icon: Ee,
                iconClassName: `size-6`,
                "data-chatgpt-extension-action": `open-side-panel`,
                onClick: e,
                children: r
            }), t[48] = e, t[49] = i);
            let a;
            t[50] === n ? a = t[51] : (a = (0, Q.jsx)(z, {
                id: `chatgpt.work.chrome.installed.sidebar.description.browser_name`,
                defaultMessage: `Click the Extensions icon in your {browser} toolbar, then select ChatGPT. Or click the sidebar button below.`,
                values: {
                    browser: n
                }
            }), t[50] = n, t[51] = a);
            let o;
            t[52] !== n || t[53] !== _ ? (o = _.formatMessage({
                id: `chatgpt.work.chrome.installed.sidebar.image.alt.browser_name`,
                defaultMessage: `The {browser} Extensions menu with ChatGPT selected.`
            }, {
                browser: n
            }), t[52] = n, t[53] = _, t[54] = o) : o = t[54];
            let s;
            t[55] === o ? s = t[56] : (s = {
                name: `open-sidebar`,
                alt: o
            }, t[55] = o, t[56] = s);
            let c;
            t[57] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, Q.jsx)(z, {
                id: `chatgpt.work.chrome.installed.sidebar.heading`,
                defaultMessage: `Open the ChatGPT extension`
            }), t[57] = c) : c = t[57];
            let u;
            t[58] !== i || t[59] !== a || t[60] !== s ? (u = {
                action: i,
                description: a,
                footer: null,
                image: s,
                title: c
            }, t[58] = i, t[59] = a, t[60] = s, t[61] = u) : u = t[61], L = u
        }
        let ne = M && `lg:pe-6`,
            re;
        t[62] === ne ? re = t[63] : (re = I(`bg-token-bg-primary text-token-text-primary flex min-h-dvh flex-col gap-6 p-5 sm:p-6 lg:gap-8 lg:p-12 lg:pb-6 dark:bg-black lg:[@media(min-height:600px)]:h-dvh lg:[@media(max-height:760px)]:gap-6 lg:[@media(max-height:760px)]:px-8 lg:[@media(max-height:760px)]:py-6`, ne), t[62] = ne, t[63] = re);
        let R;
        t[64] === n ? R = t[65] : (R = (0, Q.jsx)(`h1`, {
            id: `work-chrome-onboarding-heading`,
            "aria-live": `polite`,
            className: `font-oai text-[clamp(32px,5.6vw,64px)] leading-none font-medium tracking-[-0.02em] lg:[@media(max-height:760px)]:text-[44px]`,
            children: (0, Q.jsx)(z, {
                id: `chatgpt.work.chrome.installed.page.heading.browser`,
                defaultMessage: `Welcome to ChatGPT for {browser}.`,
                values: {
                    browser: n
                }
            })
        }), t[64] = n, t[65] = R);
        let B;
        t[66] === M ? B = t[67] : (B = M ? (0, Q.jsx)(z, {
            id: `chatgpt.work.chrome.installed.sample_work.ready_announcement`,
            defaultMessage: `Try ChatGPT on sample work.`
        }) : null, t[66] = M, t[67] = B);
        let ie;
        t[68] === B ? ie = t[69] : (ie = (0, Q.jsx)(`span`, {
            "aria-live": `polite`,
            className: `sr-only`,
            children: B
        }), t[68] = B, t[69] = ie);
        let V;
        t[70] !== b || t[71] !== l ? (V = e => {
            let t = mt[e];
            l?.({
                action: `checklist_step_selected`,
                step: t
            }), S({
                automaticStep: b,
                selectedStep: e
            })
        }, t[70] = b, t[71] = l, t[72] = V) : V = t[72];
        let ae;
        t[73] !== n || t[74] !== p || t[75] !== m || t[76] !== C || t[77] !== h || t[78] !== g || t[79] !== A || t[80] !== V || t[81] !== y ? (ae = (0, Q.jsx)(_t, {
            browserName: n,
            isAppInstalled: p,
            isExtensionPinned: m,
            isSampleWorkCompleted: C,
            isSidePanelOpen: h,
            onSelectStep: V,
            requiresDesktopApp: g,
            selectedStep: A,
            usesMenuPinning: y
        }), t[73] = n, t[74] = p, t[75] = m, t[76] = C, t[77] = h, t[78] = g, t[79] = A, t[80] = V, t[81] = y, t[82] = ae) : ae = t[82];
        let H;
        t[83] !== L || t[84] !== M || t[85] !== l ? (H = M ? (0, Q.jsx)(bt, {
            onTry: e => {
                l?.({
                    action: `sample_selected`,
                    step: vt[e]
                }), w(!0), E(e), O(pt)
            }
        }) : (0, Q.jsx)(St, {
            ...L
        }), t[83] = L, t[84] = M, t[85] = l, t[86] = H) : H = t[86];
        let ce;
        t[87] !== ae || t[88] !== H ? (ce = (0, Q.jsxs)(`div`, {
            className: `grid min-h-0 grid-cols-1 items-start gap-6 lg:flex-1 lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[minmax(260px,340px)_minmax(0,1fr)] xl:gap-8`,
            children: [ae, H]
        }), t[87] = ae, t[88] = H, t[89] = ce) : ce = t[89];
        let le;
        t[90] !== T || t[91] !== v ? (le = v && T === `email` ? (0, Q.jsx)(Ge, {
            onClose: () => E(null)
        }) : null, t[90] = T, t[91] = v, t[92] = le) : le = t[92];
        let U;
        t[93] !== T || t[94] !== v ? (U = v && T === `report` ? (0, Q.jsx)(lt, {
            onClose: () => E(null)
        }) : null, t[93] = T, t[94] = v, t[95] = U) : U = t[95];
        let W;
        t[96] !== T || t[97] !== v ? (W = v && T === `inventory` ? (0, Q.jsx)(it, {
            onClose: () => E(null)
        }) : null, t[96] = T, t[97] = v, t[98] = W) : W = t[98];
        let G;
        t[99] !== v || t[100] !== D ? (G = !v || D == null ? null : (0, Q.jsx)(xt, {}), t[99] = v, t[100] = D, t[101] = G) : G = t[101];
        let ue;
        return t[102] !== re || t[103] !== R || t[104] !== ie || t[105] !== ce || t[106] !== le || t[107] !== U || t[108] !== W || t[109] !== G ? (ue = (0, Q.jsxs)(`main`, {
            className: re,
            children: [R, ie, ce, le, U, W, G]
        }), t[102] = re, t[103] = R, t[104] = ie, t[105] = ce, t[106] = le, t[107] = U, t[108] = W, t[109] = G, t[110] = ue) : ue = t[110], ue
    }
}));

function Tt(e) {
    let t = A();
    if (t == null) return null;
    let n = t.capabilities?.[`sidePanel.state.read`] === !0 && t.sidePanel?.currentWindow === `open`,
        r = t.capabilities?.[`toolbar.pin.read`] === !0 && t.toolbar?.pin !== `unsupported`,
        i = t.capabilities != null && (t.capabilities[`toolbar.pin.read`] !== !0 || t.toolbar?.pin === `unsupported`);
    return {
        hasResolvedExtensionStatus: !0,
        installerStatus: (e ? t.installer : null) ?? Pt.installerStatus,
        isAppInstalled: e && t.capabilities?.[`nativeHost.status`] === !0 && t.nativeHost?.transport === `connected`,
        isExtensionPinned: r && t.toolbar?.pin === `pinned` || n && i,
        isSidePanelOpen: n
    }
}

function Et() {
    return y(T())
}

function Dt() {
    return y(T(), !1)
}

function Ot() {
    return Nt()
}
var kt, $, At, jt, Mt, Nt, Pt, Ft, It, Lt, Rt = e((() => {
    re(), kt = H(), c(), Re(), wt(), h(), i(), L(), l(), C(), Pe(), F(), $ = t(V()), B(), At = R(), jt = {
        hasRouteMeta: !0,
        useScrollRestoration: !0
    }, Mt = () => [{
        name: `robots`,
        content: `noindex, follow`
    }], Nt = S(() => P(`490793646`), e => {
        let t = E();
        return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
    }), Pt = {
        hasResolvedExtensionStatus: !1,
        installerStatus: {
            status: `idle`
        },
        isAppInstalled: !1,
        isExtensionPinned: !1,
        isSidePanelOpen: !1
    }, Ft = () => {
        "use forget";
        let e = (0, kt.c)(29),
            t = oe(),
            r = f(Et, Dt),
            i = !D(Ot),
            a;
        e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (a = {
            type: `loading`
        }, e[0] = a) : a = e[0];
        let [o, s] = (0, $.useState)(a), [c, l] = (0, $.useState)(Pt), u;
        e[1] !== r || e[2] !== t ? (u = t.formatMessage({
            id: `chatgpt.work.chrome.installed.page.title.browser`,
            defaultMessage: `ChatGPT for {browser}`
        }, {
            browser: r
        }), e[1] = r, e[2] = t, e[3] = u) : u = e[3];
        let d = u,
            p, m;
        e[4] === i ? (p = e[5], m = e[6]) : (p = () => {
            if (!i) return;
            let e = !1;
            return Ne().then(t => {
                e || s(t)
            }), () => {
                e = !0
            }
        }, m = [i], e[4] = i, e[5] = p, e[6] = m), (0, $.useEffect)(p, m);
        let h;
        e[7] === i ? h = e[8] : (h = () => Tt(i), e[7] = i, e[8] = h);
        let g = (0, $.useEffectEvent)(h),
            _;
        e[9] === i ? _ = e[10] : (_ = e => (!i || e.isAppInstalled) && e.isExtensionPinned && e.isSidePanelOpen, e[9] = i, e[10] = _);
        let v = (0, $.useEffectEvent)(_),
            y;
        e[11] !== v || e[12] !== g ? (y = () => {
            let e = Pt,
                t = () => {
                    let t = g();
                    t != null && (e = {
                        ...t,
                        isAppInstalled: e.isAppInstalled || t.isAppInstalled,
                        isExtensionPinned: e.isExtensionPinned || t.isExtensionPinned,
                        isSidePanelOpen: e.isSidePanelOpen || t.isSidePanelOpen
                    }, l(e))
                },
                r = () => {
                    !v(e) && document.visibilityState !== `hidden` && n()
                },
                i = O(t);
            window.addEventListener(`focus`, r), document.addEventListener(`visibilitychange`, r), t(), r();
            let a = window.setInterval(r, 2e3);
            return () => {
                window.clearInterval(a), i(), window.removeEventListener(`focus`, r), document.removeEventListener(`visibilitychange`, r)
            }
        }, e[11] = v, e[12] = g, e[13] = y) : y = e[13];
        let b;
        e[14] === Symbol.for(`react.memo_cache_sentinel`) ? (b = [], e[14] = b) : b = e[14], (0, $.useEffect)(y, b);
        let x;
        e[15] === d ? x = e[16] : (x = (0, At.jsx)(`head`, {
            children: (0, At.jsx)(`title`, {
                children: d
            })
        }), e[15] = d, e[16] = x);
        let S;
        e[17] !== r || e[18] !== o || e[19] !== c.hasResolvedExtensionStatus || e[20] !== c.installerStatus || e[21] !== c.isAppInstalled || e[22] !== c.isExtensionPinned || e[23] !== c.isSidePanelOpen || e[24] !== i ? (S = (0, At.jsx)(Ct, {
            browserName: r,
            downloadResolution: o,
            hasResolvedExtensionStatus: c.hasResolvedExtensionStatus,
            installerStatus: c.installerStatus,
            isAppInstalled: c.isAppInstalled,
            isExtensionPinned: c.isExtensionPinned,
            isSidePanelOpen: c.isSidePanelOpen,
            onInteraction: Fe,
            requiresDesktopApp: i
        }), e[17] = r, e[18] = o, e[19] = c.hasResolvedExtensionStatus, e[20] = c.installerStatus, e[21] = c.isAppInstalled, e[22] = c.isExtensionPinned, e[23] = c.isSidePanelOpen, e[24] = i, e[25] = S) : S = e[25];
        let C;
        return e[26] !== x || e[27] !== S ? (C = (0, At.jsxs)(At.Fragment, {
            children: [x, S]
        }), e[26] = x, e[27] = S, e[28] = C) : C = e[28], C
    }, It = ie(Ft), Lt = ae(N)
}));
e((() => {
    Rt()
}))();
export {
    Lt as ErrorBoundary, It as
    default, jt as handle, Mt as meta
};
//# sourceMappingURL=(_lang).work.extension.installed-eltvcm07.js.map