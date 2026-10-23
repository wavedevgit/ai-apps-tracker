const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/7aa2b76f-9zobcfsr8y4xzn7g.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-mdvd4786a87166cc.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-bcbq46iub1p0ca1t.js", "assets/30901919-s8bko9nrkqwv6i4f.js", "assets/c470f5ab-jwd0o7jx9i9say9k.js", "assets/0e5afe53-hxm3yzzjqriayom4.js", "assets/conversation-small-ep6mlz5m.css", "assets/8b34dbc2-lmwubajnld74ksfm.js", "assets/82782bc9-b4xbouzwkkyrfqq2.js"]))) => i.map(i => d[i]);
import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as r,
    A2 as i,
    A5 as a,
    CN as o,
    Crt as s,
    HN as c,
    Irt as l,
    K5 as u,
    Kp as d,
    Lrt as f,
    ON as p,
    Qy as m,
    Rrt as h,
    Rz as g,
    Srt as _,
    TN as v,
    UN as y,
    Up as b,
    Zy as x,
    _U as S,
    _rt as C,
    a2 as w,
    bF as ee,
    eE as te,
    eY as T,
    gF as ne,
    j2 as E,
    j5 as re,
    jrt as ie,
    krt as D,
    lY as O,
    o2 as k,
    q5 as A,
    tl as ae,
    ul as j,
    vF as oe,
    vU as se,
    wN as M,
    zz as N
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as ce,
    Ln as P,
    Nn as F,
    Rn as le,
    Vn as I,
    cn as ue,
    ln as L,
    wn as de,
    zn as fe
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    A6 as pe,
    C6 as me,
    D6 as R,
    DWn as he,
    E6 as z,
    F6 as ge,
    GNt as _e,
    I6 as B,
    L6 as ve,
    M6 as ye,
    OWn as be,
    T6 as xe,
    UNt as V,
    WNt as H,
    _C as Se,
    aA as Ce,
    cA as we,
    cr as U,
    dd as Te,
    ggn as Ee,
    iT as De,
    j6 as Oe,
    mgn as ke,
    nHn as Ae,
    rHn as je,
    rT as Me,
    sr as Ne,
    ud as W,
    vC as Pe,
    w6 as Fe
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    _S as Ie,
    e_ as Le,
    eb as Re,
    t_ as ze,
    tb as G,
    vS as Be
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    n as Ve,
    r as He
} from "./2ea88c7a-lxyla91xs6iv7odf.js";
import {
    a as Ue,
    o as We,
    r as Ge,
    t as Ke
} from "./8d846022-bvik3sltoydb2o43.js";
import {
    i as qe,
    n as Je,
    r as Ye
} from "./91969468-il486zvgkkxm3ghn.js";
import {
    n as K,
    t as Xe
} from "./4d271a7b-df7bh6fcr9kmugr5.js";
import {
    n as Ze,
    r as Qe
} from "./58bafdef-fdsw3oyi205yo2g7.js";
import {
    a as $e,
    i as et
} from "./e01e2324-fbtshbfw3qr9um6g.js";
import {
    i as tt,
    t as nt
} from "./5dc32f04-og5fioa85d8ewkep.js";
import {
    c as rt,
    i as it,
    o as at,
    r as ot,
    s as st,
    t as ct
} from "./56dee4d8-ltugsd768vbpvhik.js";
import {
    n as lt,
    t as ut
} from "./72bb039a-e6b65wz2ss8z63ab.js";
import {
    i as dt,
    n as ft,
    r as pt,
    t as mt
} from "./9eb56efa-dqkp2fb0zk3pe4g5.js";
import {
    i as ht,
    n as gt,
    r as q,
    t as _t
} from "./cc79834b-buwuy33jyf7okc7o.js";

function vt() {
    return C(`2779568043`)
}

function J() {
    return C(`3864712762`)
}

function yt() {
    return _(`522383056`, {
        disableExposureLog: !0
    }).get(`app_block_library_editing`, !1)
}
var bt = e((() => {
    s()
}));

function xt({
    loadSource: e,
    errorSource: t,
    errorType: n,
    networkPolicy: r,
    outcome: i,
    readySignal: a,
    renderMode: o,
    surface: s,
    variant: c
}) {
    let l = {
        network_policy: r,
        surface: s
    };
    return e != null && (l.load_source = e), t != null && (l.error_source = t), n != null && (l.error_type = n), i != null && (l.outcome = i), a != null && (l.ready_signal = a), o != null && (l.render_mode = o), c != null && (l.variant = c), l
}

function St() {
    return typeof performance < `u` ? performance.now() : Date.now()
}

function Ct(e) {
    return new TextEncoder().encode(e).byteLength / 1024
}

function wt(e) {
    return e instanceof Error ? e.name : `unknown`
}

function Tt(e, t, n = 1) {
    f.count(h.APP_BLOCKS, e, xt(t), n)
}

function Et(e, t, n) {
    f.hist(h.APP_BLOCKS, e, xt(n), t)
}

function Dt({
    content: e,
    metricTags: t,
    widgetRefSeenAtMs: n
}) {
    let r = (0, Ot.useRef)(St()),
        i = (0, Ot.useRef)(null),
        a = (0, Ot.useRef)(!1),
        o = (0, Ot.useRef)(!1),
        s = M(() => {
            i.current == null || typeof window > `u` || (window.cancelAnimationFrame(i.current), i.current = null)
        }),
        c = M((n = e) => {
            o.current || (o.current = !0, Et(jt, Ct(n), t))
        });
    return {
        cancelFirstPaintFrame: s,
        startRunMetrics: M((e, {
            deferFirstPaint: o = !1,
            deferPayloadSize: l = !1
        } = {}) => {
            let u = St(),
                d = !1,
                f = !1,
                p = !1,
                m = !1,
                h = null,
                g = null;
            s(), l || c(), Tt(Pt, t);
            let _ = (e, n) => {
                    f || (f = !0, Tt(Nt, {
                        ...t,
                        outcome: e,
                        readySignal: n
                    }))
                },
                v = (i, o) => {
                    if (!e() || p) return;
                    let s = St();
                    Et(Mt, s - i, {
                        ...t,
                        readySignal: o
                    }), !a.current && (a.current = !0, Et(kt, s - r.current, t), n != null && Et(It, s - n, t))
                },
                y = (e, n) => {
                    if (s(), typeof window > `u`) {
                        v(e, n);
                        return
                    }
                    i.current = window.requestAnimationFrame(() => {
                        if (t.loadSource === `saved_inline`) {
                            i.current = window.requestAnimationFrame(() => {
                                i.current = null, v(e, n)
                            });
                            return
                        }
                        i.current = null, v(e, n)
                    })
                },
                b = () => {
                    !e() || p || m || h == null || g == null || (m = !0, y(h, g))
                };
            return {
                markFirstPaint: b,
                markReady: n => {
                    !e() || d || (d = !0, h = St(), g = n, Et(Ft, h - u, {
                        ...t,
                        readySignal: n
                    }), o || b())
                },
                reportFailure: (n, r) => {
                    !e() || p || (p = !0, s(), Tt(At, {
                        ...t,
                        errorSource: n,
                        errorType: r
                    }), _(`failure`))
                },
                reportPayloadSize: t => {
                    !e() || p || c(t)
                },
                reportSuccess: t => {
                    e() && _(`success`, t)
                }
            }
        })
    }
}
var Ot, kt, At, jt, Mt, Nt, Pt, Ft, It, Lt = e((() => {
        l(), o(), Ot = n(I()), kt = `app_block.first_render_time_ms`, At = `app_block.load.failure`, jt = `app_block.payload_size_kb`, Mt = `app_block.ready_to_first_paint_ms`, Nt = `app_block.render.outcome`, Pt = `app_block.render.start`, Ft = `app_block.sandbox_eval_to_ready_ms`, It = `app_block.widget_ref_to_first_paint_ms`
    })),
    Rt, zt = e((() => {
        Rt = `:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{margin:0;padding:0}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(svg){max-width:100%;height:auto}`
    })),
    Bt = e((() => {})),
    Vt, Ht = e((() => {
        Bt(), Vt = `/cdn/assets/app-block-sandbox-foundation-l4fcvweu.css`
    })),
    Ut, Wt = e((() => {
        Ut = `:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--white:#fff;--black:#000;--gray-0:#fff;--gray-25:#fcfcfc;--gray-50:#f9f9f9;--gray-75:#f2f2f2;--gray-100:#ececec;--gray-200:#e3e3e3;--gray-750:#2f2f2f;--gray-800:#212121;--gray-950:#0d0d0d;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px;--app-block-accent-blue:var(--lightningcss-light,#3a83f7)var(--lightningcss-dark,#2c67c5);--app-block-accent-green:var(--lightningcss-light,#53b559)var(--lightningcss-dark,#48a04c);--app-block-accent-yellow:var(--lightningcss-light,#f6c543)var(--lightningcss-dark,#d9a337);--app-block-accent-purple:var(--lightningcss-light,#8952ee)var(--lightningcss-dark,#7849d1);--app-block-accent-pink:var(--lightningcss-light,#e0766d)var(--lightningcss-dark,#c96257);--app-block-accent-orange:var(--lightningcss-light,#ee7c37)var(--lightningcss-dark,#d25e28);--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white);--app-block-accent-bg:color-mix(in srgb, var(--app-block-accent) 8%, transparent);--app-block-accent-bg-subtle:color-mix(in srgb, var(--app-block-accent) 5%, transparent);--app-block-form-control-bg:color-mix(in srgb, var(--viz-text) 2%, var(--main-surface-primary));--app-block-form-control-border:color-mix(in srgb, var(--viz-text) 32%, transparent);--app-block-form-control-shadow:0 1px 2px -1px #00000014;--app-block-form-switch-off-bg:color-mix(in srgb, var(--viz-text) 14%, transparent);--app-block-form-switch-thumb-bg:var(--white);--app-block-form-switch-thumb-border:#0000001a;--app-block-select-picker-bg:var(--main-surface-primary);--app-block-select-picker-check-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.0961%202.91371C12.3297%202.68688%2012.6984%202.64794%2012.9779%202.83852C13.2571%203.02905%2013.3554%203.38601%2013.2299%203.68618L13.1615%203.81118L6.91152%2012.9772C6.79412%2013.1494%206.60631%2013.2604%206.39882%2013.2799C6.19137%2013.2994%205.98565%2013.226%205.83828%2013.0788L2.08828%209.32875L1.99843%209.2184C1.81921%208.94677%201.84928%208.57767%202.08828%208.33852C2.3274%208.0994%202.69648%208.06947%202.96816%208.24868L3.07851%208.33852L6.23085%2011.4909L12.0053%203.02211L12.0961%202.91371Z%22/%3E%3C/svg%3E);--app-block-select-picker-hover-bg:#0000000a;--app-block-select-picker-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.1338%205.94433C12.3919%205.77382%2012.7434%205.80202%2012.9707%206.02929C13.1979%206.25656%2013.2261%206.60807%2013.0556%206.8662L12.9707%206.9707L8.47067%2011.4707C8.21097%2011.7304%207.78896%2011.7304%207.52926%2011.4707L3.02926%206.9707L2.9443%206.8662C2.77379%206.60807%202.80199%206.25656%203.02926%206.02929C3.25653%205.80202%203.60804%205.77382%203.86617%205.94433L3.97067%206.02929L7.99996%2010.0586L12.0293%206.02929L12.1338%205.94433Z%22/%3E%3C/svg%3E);--app-block-select-picker-shadow:0 8px 24px #00000014, 0 2px 8px #00000014;--viz-panel:var(--main-surface-secondary);--viz-card:var(--main-surface-primary);--viz-chip-card:var(--gray-75);--viz-border:var(--border-light);--viz-text:var(--text-primary);--viz-muted:var(--text-secondary);--viz-accent:var(--app-block-accent);--viz-accent-text:var(--app-block-accent-text);--viz-accent-bg:var(--app-block-accent-bg);--viz-accent-bg-subtle:var(--app-block-accent-bg-subtle);--viz-series-1:var(--app-block-accent);--viz-series-2:var(--app-block-accent-green);--viz-series-3:var(--app-block-accent-orange);--viz-series-4:var(--app-block-accent-yellow);--viz-series-5:var(--app-block-accent-purple);--viz-series-6:var(--app-block-accent-pink);--color-background-primary:var(--main-surface-primary);--color-background-secondary:var(--main-surface-secondary);--color-border-secondary:var(--border-light);--color-text-primary:var(--text-primary);--color-text-secondary:var(--text-secondary);--color-text-tertiary:var(--text-tertiary);--color-text-inverse:var(--text-primary-inverse)}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root,:root.light{--main-surface-primary:var(--gray-25);--main-surface-secondary:var(--gray-50);--main-surface-tertiary:var(--gray-100);--text-primary:var(--gray-950);--text-secondary:#0009;--text-tertiary:#0000004a;--text-primary-inverse:var(--gray-0);--text-secondary-inverse:#ffffffb3;--text-tertiary-inverse:#ffffff94;--surface-primary-inverse:var(--gray-950);--border-light:#0000001a;--border-medium:#00000026;--interactive-bg-primary-default:var(--gray-950);--interactive-label-primary-default:var(--gray-0);--interactive-border-focus:var(--gray-950);--link:#2964aa}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}@media (prefers-color-scheme:dark){:root:not(.light){--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}:root[data-chat-theme=default],:root[data-chat-theme=black],:root[data-chat-theme=blue]{--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white)}:root[data-chat-theme=green]{--app-block-accent:var(--app-block-accent-green);--app-block-accent-text:var(--white);--viz-series-2:var(--app-block-accent-blue)}:root[data-chat-theme=yellow]{--app-block-accent:var(--app-block-accent-yellow);--app-block-accent-text:var(--gray-950)}:root[data-chat-theme=purple]{--app-block-accent:var(--app-block-accent-purple);--app-block-accent-text:var(--white)}:root[data-chat-theme=pink]{--app-block-accent:var(--app-block-accent-pink);--app-block-accent-text:var(--white);--viz-series-6:var(--app-block-accent-blue)}:root[data-chat-theme=orange]{--app-block-accent:var(--app-block-accent-orange);--app-block-accent-text:var(--white);--viz-series-3:var(--app-block-accent-blue)}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}:root.light[data-app-block-surface=skybridge],:root.light[data-app-block-surface=stage]{--main-surface-primary:var(--white)}:root.dark[data-app-block-surface=skybridge],:root.dark[data-app-block-surface=stage]{--main-surface-primary:var(--gray-800);--main-surface-secondary:var(--gray-750)}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{color:var(--text-primary);margin:0;padding:0;font-family:ui-sans-serif,-apple-system,system-ui,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(a){color:var(--link)}:where(h1,h2,h3,h4,h5,h6,label,strong,output){color:var(--text-primary)}:where(p,small){color:var(--text-secondary)}:where(input,select,textarea,button){font:inherit}:where(button):is(:enabled,:disabled){font-weight:500}button:is(:enabled,:disabled){-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}@media (hover:hover) and (pointer:fine){button:not(:disabled):hover{opacity:.85}}button:not(:disabled):active{opacity:.7}:where(input,select,textarea){background:var(--main-surface-primary);border:1px solid var(--border-medium);border-color:var(--border-medium);color:var(--text-primary);border-radius:12px}:where(){color:var(--text-tertiary)}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus{border-color:var(--border-medium);box-shadow:none;outline:none}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus-visible{border-color:var(--interactive-border-focus);outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where(select:not([multiple])){cursor:pointer;min-height:34px}:where(select:required:invalid){color:var(--text-tertiary)}:where(select option){color:var(--text-primary)}:where(select:disabled){cursor:not-allowed;opacity:.5}@supports (appearance:base-select){:where(select:not([multiple])),:where(select:not([multiple]))::picker(select){appearance:base-select}:where(select:not([multiple])){align-items:center;padding-inline-end:12px}:where(select:not([multiple]))::picker(select){border:1px solid var(--border-light);background:var(--app-block-select-picker-bg);box-shadow:var(--app-block-select-picker-shadow);color:var(--text-primary);border-radius:12px;margin-top:4px;padding:6px}:where(select:not([multiple]))::picker-icon{width:16px;height:16px;color:var(--text-secondary);content:"";-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;align-self:center;margin-inline-start:auto;display:block}:where(select:not([multiple])) option{min-height:32px;color:var(--text-primary);cursor:pointer;background:0 0;border-radius:8px;justify-content:space-between;align-items:center;gap:24px;padding:7px 10px;display:flex}:where(select:not([multiple])) option:checked{background:var(--app-block-select-picker-hover-bg);outline:none}:where(select:not([multiple])) option:is(:hover,:focus-visible){background:var(--app-block-select-picker-hover-bg)}:where(select:not([multiple])):has(option:is(:hover,:focus-visible)) option:checked:not(:is(:hover,:focus-visible)){background:0 0}:where(select:not([multiple])) option:disabled{color:var(--text-tertiary)}:where(select:not([multiple])) option::checkmark{content:"";width:16px;height:16px;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;order:1;margin-inline-start:auto;display:block}}:where(.form-check){align-items:center;gap:6px;min-height:20px;display:flex}:where(.form-check-input){appearance:none;box-sizing:border-box;border:1px solid var(--app-block-form-control-border);width:14px;height:14px;color:var(--app-block-accent-text);cursor:pointer;vertical-align:-2px;background-color:#0000;flex:none;margin:0;padding:0;transition:background-color .12s,border-color .12s,box-shadow .12s;display:inline-block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:5px}:where(.form-check:not(.form-switch) .form-check-input:not(:disabled):not(:checked):hover){background-color:var(--main-surface-secondary)}.form-check:not(.form-switch) .form-check-input:not(:checked):not(:indeterminate){border:1px solid var(--border-medium)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked):before{background:var(--app-block-accent-text);content:"";width:100%;height:100%;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;display:block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate):before{background:var(--app-block-accent-text);content:"";border-radius:9999px;width:8px;height:2px;margin:5px auto;display:block}:where(.form-check-input[type=radio]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:9999px}:where(.form-check-input[type=radio]:checked){border:2px solid var(--viz-accent);background:radial-gradient(circle, var(--app-block-accent-text) 0 2.5px, transparent 3px), var(--viz-accent)}:where(.form-check-input:disabled){cursor:not-allowed;pointer-events:none;opacity:.5}:where(.form-check-input:disabled+.form-check-label){cursor:not-allowed;opacity:.7}:where(.form-check-label){color:var(--viz-text);cursor:pointer}:where(.form-switch .form-check-input[type=checkbox]){background:var(--app-block-form-switch-off-bg);width:32px;height:20px;box-shadow:none;border:0;border-radius:9999px;transition:background-color .2s cubic-bezier(0,0,.2,1);position:relative}:where(.form-switch .form-check-input[type=checkbox]):before{box-sizing:border-box;border:1px solid var(--app-block-form-switch-thumb-border);background:var(--app-block-form-switch-thumb-bg);width:16px;height:16px;box-shadow:var(--app-block-form-control-shadow);content:"";border-radius:9999px;transition:transform .2s cubic-bezier(0,0,.2,1);position:absolute;top:50%;left:0;transform:translate(2px,-50%)}:where(.form-switch .form-check-input[type=checkbox]:checked){background:var(--viz-accent)}:where(.form-switch .form-check-input[type=checkbox]:checked):before{transform:translate(14px,-50%)}:where(input[type=range]){appearance:none;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;background:0 0;border:0;border-radius:9999px;width:100%;min-width:0;height:24px;margin:0;padding:0;display:block}:where(input[type=range]:disabled){cursor:not-allowed;opacity:.4}:where(input[type=range])::-webkit-slider-runnable-track{background:var(--lightningcss-light,#0000000a)var(--lightningcss-dark,#ffffff0f);border:0;border-radius:9999px;height:6px}:where(input[type=range])::-webkit-slider-thumb{appearance:none;box-sizing:border-box;background:var(--white);border:1px solid #0000001a;border-radius:9999px;width:20px;height:20px;margin-top:-7px;transition:transform .15s;box-shadow:0 1px 2px #0000001f}:where(input[type=range])::-moz-range-track{background:var(--lightningcss-light,#0000000a)var(--lightningcss-dark,#ffffff0f);border:0;border-radius:9999px;height:6px}:where(input[type=range])::-moz-range-progress{background:0 0;border-radius:9999px;height:6px}:where(input[type=range])::-moz-range-thumb{box-sizing:border-box;background:var(--white);border:1px solid #0000001a;border-radius:9999px;width:20px;height:20px;transition:transform .15s;box-shadow:0 1px 2px #0000001f}@media (hover:hover) and (pointer:fine){:where(input[type=range]:enabled:hover)::-webkit-slider-thumb{transform:scale(1.05)}:where(input[type=range]:enabled:hover)::-moz-range-thumb{transform:scale(1.05)}}:where(input[type=range]:focus-visible){outline:none}:where(input[type=range]:focus-visible)::-webkit-slider-thumb{outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where(input[type=range]:focus-visible)::-moz-range-thumb{outline:2px solid var(--interactive-border-focus);outline-offset:2px}@media (forced-colors:active){:where(.form-check-input){appearance:auto;display:revert;width:revert;height:revert;margin:revert;padding:revert;border:revert;border-radius:revert;background:revert;box-shadow:revert;vertical-align:revert}:where(.form-check-input):before{content:none}}:where(svg [role=button],svg [tabindex]):focus:not(:focus-visible){outline:none}:where(button:focus-visible){outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where([data-panel]){background:var(--main-surface-secondary)}:where([data-card]){background:var(--viz-card);border-color:var(--border-light)}:where([data-result=primary]){background:var(--interactive-bg-primary-default);color:var(--interactive-label-primary-default)}:where([data-result=primary] :not(a)){color:inherit}.card{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:var(--viz-card);border-radius:16px;padding:12px;overflow:visible}.metric-card{overflow-wrap:break-word;min-width:0;color:var(--viz-text);background:var(--viz-chip-card);border-radius:16px;padding:12px;overflow:visible}.viz-node{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:0 0;border-radius:12px;padding:10px 12px}.viz-stat-value{color:var(--viz-text);font-size:20px;font-weight:500;line-height:1.25}.viz-edge-label,.viz-badge{width:fit-content;color:var(--viz-text);background:var(--viz-accent-bg);border-radius:9999px;align-items:center;padding:3px 8px;font-size:12px;font-weight:500;line-height:1.4;display:inline-flex}.viz-callout{border-left:3px solid var(--viz-accent);color:var(--viz-text);background:var(--viz-accent-bg-subtle);border-radius:0 12px 12px 0;padding:10px 12px}main [data-tooltip]{position:relative}main [data-tooltip]:after{z-index:20;border:1px solid var(--viz-border);width:max-content;max-width:min(220px,100vw - 24px);color:var(--viz-text);background:var(--main-surface-primary);box-shadow:0 2px 8px color-mix(in srgb, var(--viz-text) 8%, transparent);content:attr(data-tooltip);opacity:0;pointer-events:none;text-align:start;border-radius:10px;padding:4px 8px;font-size:12px;line-height:1.4;transition:opacity .12s,transform .12s;position:absolute;bottom:calc(100% + 6px);left:50%;transform:translate(-50%,2px)}main [data-tooltip]:is(:hover,:focus-visible):after{opacity:1;transform:translate(-50%)}main [data-tooltip-placement=bottom]:after{top:calc(100% + 6px);bottom:auto;transform:translate(-50%,-2px)}main [data-tooltip-placement=bottom]:is(:hover,:focus-visible):after{transform:translate(-50%)}main [data-tooltip-placement=left]:after{inset:50% calc(100% + 6px) auto auto;transform:translate(2px,-50%)}main [data-tooltip-placement=left]:is(:hover,:focus-visible):after{transform:translateY(-50%)}main [data-tooltip-placement=right]:after{top:50%;bottom:auto;left:calc(100% + 6px);transform:translate(-2px,-50%)}main [data-tooltip-placement=right]:is(:hover,:focus-visible):after{transform:translateY(-50%)}:where(svg){max-width:100%;height:auto}:root.dark :where(.bg-white){background-color:var(--main-surface-primary)}:root.dark :where(.bg-slate-50,.bg-gray-50,.bg-zinc-50,.bg-neutral-50){background-color:var(--main-surface-secondary)}:root.dark :where(.bg-slate-100,.bg-gray-100,.bg-zinc-100,.bg-neutral-100,.bg-slate-200,.bg-gray-200,.bg-zinc-200,.bg-neutral-200){background-color:var(--main-surface-tertiary)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700){background-color:var(--interactive-bg-primary-default)}:root.dark :where(.text-white){color:var(--text-primary-inverse)}:root.dark :where(.text-black,.text-slate-900,.text-gray-900,.text-zinc-900,.text-neutral-900,.text-slate-950,.text-gray-950,.text-zinc-950,.text-neutral-950){color:var(--text-primary)}:root.dark :where(.text-slate-500,.text-gray-500,.text-zinc-500,.text-neutral-500,.text-slate-600,.text-gray-600,.text-zinc-600,.text-neutral-600,.text-slate-700,.text-gray-700,.text-zinc-700,.text-neutral-700){color:var(--text-secondary)}:root.dark :where(.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-tertiary)}:root.dark :where(.text-blue-500,.text-blue-600,.text-blue-700){color:var(--link)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-white,.text-slate-50,.text-gray-50,.text-zinc-50,.text-neutral-50,.text-slate-100,.text-gray-100,.text-zinc-100,.text-neutral-100){color:var(--text-primary-inverse)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-slate-200,.text-gray-200,.text-zinc-200,.text-neutral-200,.text-slate-300,.text-gray-300,.text-zinc-300,.text-neutral-300,.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-secondary-inverse)}:root.dark :where(.border-slate-200,.border-gray-200,.border-zinc-200,.border-neutral-200){border-color:var(--border-light)}:root.dark :where(.border-slate-300,.border-gray-300,.border-zinc-300,.border-neutral-300,.border-blue-200,.border-blue-300){border-color:var(--border-medium)}`
    })),
    Gt = e((() => {})),
    Kt, qt = e((() => {
        Gt(), Kt = `/cdn/assets/app-block-sandbox-b1cs4d5m.css`
    }));

function Jt(e, t) {
    return t ||= e.slice(0), Object.freeze(Object.defineProperties(e, {
        raw: {
            value: Object.freeze(t)
        }
    }))
}
var Y = e((() => {}));

function Yt(e) {
    return /<!doctype\b|<html[\s>]/i.test(e)
}

function Xt(e, t) {
    let n = e.match(/<\/body\s*>(?=\s*(?:<\/html\s*>)?\s*$)/i) ?? e.match(/<\/html\s*>\s*$/i);
    if (n?.index == null) return `${e}\n${t}`;
    let r = n.index;
    return [e.slice(0, r), t, e.slice(r)].join(`
`)
}

function Zt(e) {
    let t = e.trim().replaceAll(`_`, `-`);
    return t.length === 0 || !/^[A-Za-z0-9-]+$/.test(t) ? `en` : t
}

function Qt(e) {
    if (/^https?:\/\//i.test(e) || typeof window > `u`) return e;
    let t = window.location.origin;
    return new URL(e, t).toString()
}

function $t(e) {
    try {
        return new URL(e).origin
    } catch {
        return null
    }
}

function en(e) {
    return ln.has(e) ? e : `default`
}

function tn(e = []) {
    let t = Qt(Kt),
        n = Qt(Vt),
        r = [$t(on), $t(sn), $t(t), $t(n), ...cn, ...e.map($t)];
    return Array.from(new Set(r.filter(e => e != null)))
}

function nn(e, t = `light`, n = `en`, r = `default`, i = `inline`, {
    loadTailwind: a = !0,
    platform: o,
    progressiveStreaming: s = !1,
    syncPresentationSurface: c = !1,
    styleMode: l = `default`
} = {}) {
    let u = e.trim(),
        d = c ? dn : ``;
    if (!s && Yt(u)) return {
        html: c ? Xt(u, d) : u,
        expectReadySignal: !1
    };
    let f = Zt(n),
        p = l === `open` ? Rt : Ut,
        m = Qt(l === `open` ? Vt : Kt),
        h = en(r),
        g = t === `dark` ? `#212121` : `#ffffff`,
        _ = i === `skybridge` && o != null && o !== `web` || i === `inline`,
        v = [`color-scheme: ${t};`, _ ? `background-color: transparent;` : `background-color: var(--main-surface-primary, ${g});`].join(` `);
    return {
        expectReadySignal: a,
        frameColorScheme: t,
        html: `<!doctype html>
<html ${[`lang="${f}"`,`class="${t}"`,`data-chat-theme="${h}"`,`data-app-block-surface="${i}"`,`data-app-block-style-mode="${l}"`,o==null?null:`data-app-block-platform="${o}"`,`style="${v}"`].filter(e=>e!=null).join(` `)}>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="color-scheme" content="${t}" />
    ${a?`<script>
      window.tailwind = window.tailwind || {};
      window.tailwind.config = { darkMode: "class" };
    <\/script>
    <script id="app-block-tailwind" src="${on}" defer><\/script>
    <script>
      (() => {
        const tailwindScript = document.getElementById("app-block-tailwind");
        const markFatal = () => {
          document.documentElement.setAttribute("data-fatal", "");
        };

        if (!(tailwindScript instanceof HTMLScriptElement)) {
          markFatal();
          return;
        }

        tailwindScript.addEventListener("error", markFatal, { once: true });
        tailwindScript.addEventListener(
          "load",
          () => {
            const readinessProbe = document.createElement("div");
            readinessProbe.className = "hidden";
            readinessProbe.setAttribute("aria-hidden", "true");

            const markReadyWhenStyled = () => {
              if (getComputedStyle(readinessProbe).display !== "none") {
                return;
              }

              styleObserver.disconnect();
              readinessProbe.remove();
              document.documentElement.setAttribute("data-ready", "");
            };
            const styleObserver = new MutationObserver(markReadyWhenStyled);
            styleObserver.observe(document.head, {
              childList: true,
              characterData: true,
              subtree: true,
            });

            document.body.append(readinessProbe);
            markReadyWhenStyled();
          },
          { once: true }
        );
      })();
    <\/script>`:``}
    ${a?`<link rel="stylesheet" href="${m}" />`:`<style>${p}</style>`}
    ${s?un:``}
  </head>
  <body>
    <main>
${s?``:u}
    </main>
    ${d}
    ${s?fn:``}
  </body>
</html>`
    }
}
var rn, an, on, sn, cn, ln, un, dn, fn, pn = e((() => {
    zt(), Ht(), Wt(), qt(), Y(), on = `https://cdn.tailwindcss.com`, sn = `https://images.openai.com`, cn = [`https://persistent.oaistatic.com`, `https://cdnjs.cloudflare.com`, `https://esm.sh`, `https://cdn.jsdelivr.net`, `https://unpkg.com`, `https://fonts.googleapis.com`, `https://fonts.gstatic.com`, `https://fonts.bunny.net`], ln = new Set([`default`, `blue`, `green`, `yellow`, `purple`, `pink`, `orange`, `black`]), un = `<style>
  @media (prefers-reduced-motion: no-preference) {
    [data-app-block-stream-enter] {
      animation: app-block-stream-enter 160ms ease-out both;
    }

    @keyframes app-block-stream-enter {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  }
</style>`, dn = String.raw(rn ||= Jt([`<script>
  (() => {
    function updateSurface(surface) {
      if (surface !== "inline" && surface !== "stage") {
        return;
      }

      const root = document.documentElement;
      const isDarkMode = root.classList.contains("dark");
      const stageBackground = isDarkMode ? "#212121" : "#ffffff";
      root.setAttribute("data-app-block-surface", surface);
      root.style.backgroundColor =
        surface === "inline"
          ? "transparent"
          : "var(--main-surface-primary, " + stageBackground + ")";
    }

    window.addEventListener("openai:set_globals", (event) => {
      const surface = event.detail?.globals?.__appBlockSurface;
      if (surface != null) {
        updateSurface(surface);
      }
    });

    const initialSurface =
      window.openai?.__appBlockSurface ??
      document.documentElement.getAttribute("data-app-block-surface") ??
      "inline";
    updateSurface(initialSurface);
  })();
<\/script>`])), fn = String.raw(an ||= Jt([`<script>
  (() => {
    const root = document.querySelector("main");
    if (!(root instanceof HTMLElement)) {
      return;
    }

    let hasFinalized = false;
    let previousHtml = null;

    function getRenderableHtml(html, isFinal) {
      if (isFinal) {
        return html;
      }

      let renderableHtml = html;
      const trailingTagStart = renderableHtml.lastIndexOf("<");
      if (trailingTagStart >= 0) {
        const trailingTag = renderableHtml.slice(trailingTagStart).toLowerCase();
        if ("</appblock>".startsWith(trailingTag)) {
          renderableHtml = renderableHtml.slice(0, trailingTagStart);
        }
      }

      const lowercaseHtml = renderableHtml.toLowerCase();
      const lastStyleStart = lowercaseHtml.lastIndexOf("<style");
      const lastStyleEnd = lowercaseHtml.lastIndexOf("</style");
      if (lastStyleStart > lastStyleEnd) {
        return renderableHtml.slice(0, lastStyleStart);
      }

      return renderableHtml;
    }

    function removePartialExecutionAttributes(fragment) {
      for (const element of fragment.querySelectorAll("*")) {
        for (const attribute of Array.from(element.attributes)) {
          const attributeName = attribute.name.toLowerCase();
          if (attributeName.startsWith("on") || attributeName === "srcdoc") {
            element.removeAttribute(attribute.name);
            continue;
          }

          if (
            /^(?:href|src|action|formaction|xlink:href)$/i.test(attribute.name) &&
            /^s*javascript:/i.test(attribute.value)
          ) {
            element.removeAttribute(attribute.name);
          }
        }

        if (element.matches("button, input, select, textarea, fieldset")) {
          element.setAttribute("disabled", "");
        }
        if (element.matches("a[href]")) {
          element.removeAttribute("href");
          element.setAttribute("aria-disabled", "true");
        }
        if (element.hasAttribute("contenteditable")) {
          element.setAttribute("contenteditable", "false");
        }
      }
    }

    function markNewElement(node) {
      if (!(node instanceof Element) || node.tagName === "STYLE") {
        return;
      }

      node.setAttribute("data-app-block-stream-enter", "");
      node.addEventListener(
        "animationend",
        () => node.removeAttribute("data-app-block-stream-enter"),
        { once: true }
      );
    }

    function synchronizeAttributes(currentElement, nextElement) {
      for (const attribute of Array.from(currentElement.attributes)) {
        if (
          attribute.name !== "data-app-block-stream-enter" &&
          !nextElement.hasAttribute(attribute.name)
        ) {
          currentElement.removeAttribute(attribute.name);
        }
      }

      for (const attribute of Array.from(nextElement.attributes)) {
        if (currentElement.getAttribute(attribute.name) !== attribute.value) {
          currentElement.setAttribute(attribute.name, attribute.value);
        }
      }
    }

    function synchronizeChildren(currentParent, nextParent, isFinal) {
      let currentChild = currentParent.firstChild;

      for (const nextChild of Array.from(nextParent.childNodes)) {
        if (currentChild === null) {
          const insertedChild = nextChild.cloneNode(true);
          currentParent.appendChild(insertedChild);
          markNewElement(insertedChild);
          continue;
        }

        const isMatchingNode =
          currentChild.nodeType === nextChild.nodeType &&
          currentChild.nodeName === nextChild.nodeName;
        if (!isMatchingNode) {
          const insertedChild = nextChild.cloneNode(true);
          currentParent.replaceChild(insertedChild, currentChild);
          markNewElement(insertedChild);
          currentChild = insertedChild.nextSibling;
          continue;
        }

        if (currentChild instanceof Element && nextChild instanceof Element) {
          synchronizeAttributes(currentChild, nextChild);
          synchronizeChildren(currentChild, nextChild, isFinal);
        } else if (currentChild.nodeValue !== nextChild.nodeValue) {
          currentChild.nodeValue = nextChild.nodeValue;
        }

        currentChild = currentChild.nextSibling;
      }

      if (!isFinal) {
        return;
      }

      while (currentChild !== null) {
        const nextCurrentChild = currentChild.nextSibling;
        currentChild.remove();
        currentChild = nextCurrentChild;
      }
    }

    function applyStreamUpdate(update) {
      if (
        hasFinalized ||
        update === null ||
        typeof update !== "object" ||
        typeof update.html !== "string"
      ) {
        return;
      }

      const isFinal = update.isFinal === true;
      if (!isFinal && previousHtml === update.html) {
        return;
      }
      previousHtml = update.html;

      const template = document.createElement("template");
      template.innerHTML = getRenderableHtml(update.html, isFinal);
      const scripts = Array.from(template.content.querySelectorAll("script"));
      for (const script of scripts) {
        script.remove();
      }

      if (!isFinal) {
        removePartialExecutionAttributes(template.content);
      }

      synchronizeChildren(root, template.content, isFinal);

      if (!isFinal) {
        return;
      }

      hasFinalized = true;
      for (const sourceScript of scripts) {
        const executableScript = document.createElement("script");
        for (const attribute of Array.from(sourceScript.attributes)) {
          executableScript.setAttribute(attribute.name, attribute.value);
        }
        executableScript.textContent = sourceScript.textContent;
        root.appendChild(executableScript);
      }
    }

    window.addEventListener("openai:set_globals", (event) => {
      const globals = event.detail && event.detail.globals;
      if (globals && Object.hasOwn(globals, "__appBlockStream")) {
        applyStreamUpdate(globals.__appBlockStream);
      }
    });

    if (window.openai && window.openai.__appBlockStream) {
      applyStreamUpdate(window.openai.__appBlockStream);
    }
  })();
<\/script>`], [`<script>
  (() => {
    const root = document.querySelector("main");
    if (!(root instanceof HTMLElement)) {
      return;
    }

    let hasFinalized = false;
    let previousHtml = null;

    function getRenderableHtml(html, isFinal) {
      if (isFinal) {
        return html;
      }

      let renderableHtml = html;
      const trailingTagStart = renderableHtml.lastIndexOf("<");
      if (trailingTagStart >= 0) {
        const trailingTag = renderableHtml.slice(trailingTagStart).toLowerCase();
        if ("</appblock>".startsWith(trailingTag)) {
          renderableHtml = renderableHtml.slice(0, trailingTagStart);
        }
      }

      const lowercaseHtml = renderableHtml.toLowerCase();
      const lastStyleStart = lowercaseHtml.lastIndexOf("<style");
      const lastStyleEnd = lowercaseHtml.lastIndexOf("</style");
      if (lastStyleStart > lastStyleEnd) {
        return renderableHtml.slice(0, lastStyleStart);
      }

      return renderableHtml;
    }

    function removePartialExecutionAttributes(fragment) {
      for (const element of fragment.querySelectorAll("*")) {
        for (const attribute of Array.from(element.attributes)) {
          const attributeName = attribute.name.toLowerCase();
          if (attributeName.startsWith("on") || attributeName === "srcdoc") {
            element.removeAttribute(attribute.name);
            continue;
          }

          if (
            /^(?:href|src|action|formaction|xlink:href)$/i.test(attribute.name) &&
            /^\\s*javascript:/i.test(attribute.value)
          ) {
            element.removeAttribute(attribute.name);
          }
        }

        if (element.matches("button, input, select, textarea, fieldset")) {
          element.setAttribute("disabled", "");
        }
        if (element.matches("a[href]")) {
          element.removeAttribute("href");
          element.setAttribute("aria-disabled", "true");
        }
        if (element.hasAttribute("contenteditable")) {
          element.setAttribute("contenteditable", "false");
        }
      }
    }

    function markNewElement(node) {
      if (!(node instanceof Element) || node.tagName === "STYLE") {
        return;
      }

      node.setAttribute("data-app-block-stream-enter", "");
      node.addEventListener(
        "animationend",
        () => node.removeAttribute("data-app-block-stream-enter"),
        { once: true }
      );
    }

    function synchronizeAttributes(currentElement, nextElement) {
      for (const attribute of Array.from(currentElement.attributes)) {
        if (
          attribute.name !== "data-app-block-stream-enter" &&
          !nextElement.hasAttribute(attribute.name)
        ) {
          currentElement.removeAttribute(attribute.name);
        }
      }

      for (const attribute of Array.from(nextElement.attributes)) {
        if (currentElement.getAttribute(attribute.name) !== attribute.value) {
          currentElement.setAttribute(attribute.name, attribute.value);
        }
      }
    }

    function synchronizeChildren(currentParent, nextParent, isFinal) {
      let currentChild = currentParent.firstChild;

      for (const nextChild of Array.from(nextParent.childNodes)) {
        if (currentChild === null) {
          const insertedChild = nextChild.cloneNode(true);
          currentParent.appendChild(insertedChild);
          markNewElement(insertedChild);
          continue;
        }

        const isMatchingNode =
          currentChild.nodeType === nextChild.nodeType &&
          currentChild.nodeName === nextChild.nodeName;
        if (!isMatchingNode) {
          const insertedChild = nextChild.cloneNode(true);
          currentParent.replaceChild(insertedChild, currentChild);
          markNewElement(insertedChild);
          currentChild = insertedChild.nextSibling;
          continue;
        }

        if (currentChild instanceof Element && nextChild instanceof Element) {
          synchronizeAttributes(currentChild, nextChild);
          synchronizeChildren(currentChild, nextChild, isFinal);
        } else if (currentChild.nodeValue !== nextChild.nodeValue) {
          currentChild.nodeValue = nextChild.nodeValue;
        }

        currentChild = currentChild.nextSibling;
      }

      if (!isFinal) {
        return;
      }

      while (currentChild !== null) {
        const nextCurrentChild = currentChild.nextSibling;
        currentChild.remove();
        currentChild = nextCurrentChild;
      }
    }

    function applyStreamUpdate(update) {
      if (
        hasFinalized ||
        update === null ||
        typeof update !== "object" ||
        typeof update.html !== "string"
      ) {
        return;
      }

      const isFinal = update.isFinal === true;
      if (!isFinal && previousHtml === update.html) {
        return;
      }
      previousHtml = update.html;

      const template = document.createElement("template");
      template.innerHTML = getRenderableHtml(update.html, isFinal);
      const scripts = Array.from(template.content.querySelectorAll("script"));
      for (const script of scripts) {
        script.remove();
      }

      if (!isFinal) {
        removePartialExecutionAttributes(template.content);
      }

      synchronizeChildren(root, template.content, isFinal);

      if (!isFinal) {
        return;
      }

      hasFinalized = true;
      for (const sourceScript of scripts) {
        const executableScript = document.createElement("script");
        for (const attribute of Array.from(sourceScript.attributes)) {
          executableScript.setAttribute(attribute.name, attribute.value);
        }
        executableScript.textContent = sourceScript.textContent;
        root.appendChild(executableScript);
      }
    }

    window.addEventListener("openai:set_globals", (event) => {
      const globals = event.detail && event.detail.globals;
      if (globals && Object.hasOwn(globals, "__appBlockStream")) {
        applyStreamUpdate(globals.__appBlockStream);
      }
    });

    if (window.openai && window.openai.__appBlockStream) {
      applyStreamUpdate(window.openai.__appBlockStream);
    }
  })();
<\/script>`]))
}));

function mn() {
    "use forget";
    let e = (0, hn.useContext)(gn);
    if (e == null) throw Error(`useAppBlockExpandedView must be used within AppBlockExpandedViewProvider`);
    return e
}
var hn, gn, _n = e((() => {
        hn = n(I()), gn = (0, hn.createContext)(null)
    })),
    vn, yn = e((() => {
        k(), L(), vn = w(() => ue(() => import(`./7aa2b76f-9zobcfsr8y4xzn7g.js`).then(e => e.AppBlockFullscreenTurnComposer), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])))
    }));

function bn(e) {
    "use forget";
    let t = (0, Cn.c)(42),
        {
            additionalResourceDomains: n,
            canSubmitTurn: r,
            children: i,
            code: a,
            conversationId: o,
            headerAction: s,
            source: c,
            styleMode: l,
            title: u
        } = e,
        d = `app-block:${c.appBlockId}:${(0,wn.useId)()}`,
        f = (0, wn.useRef)(null),
        [p, m] = (0, wn.useState)(null),
        h = c.appBlockId,
        g = c.libraryFileId,
        _ = c.messageId,
        v = c.refIndex,
        y = o ?? null,
        b;
    t[0] !== y || t[1] !== h ? (b = {
        appBlockId: h,
        conversationId: y
    }, t[0] = y, t[1] = h, t[2] = b) : b = t[2];
    let x = b,
        S = re(me),
        C;
    t[3] !== S || t[4] !== x ? (C = R(S, x), t[3] = S, t[4] = x, t[5] = C) : C = t[5];
    let w = C,
        ee = S?.appBlockId === h && S.conversationId === y && (S.isOriginalVersion === !0 || S.versionNumber != null),
        te = w || ee,
        T;
    t[6] !== S || t[7] !== d || t[8] !== x ? (T = pe(S, x, d), t[6] = S, t[7] = d, t[8] = x, t[9] = T) : T = t[9];
    let ne = T,
        E;
    t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (E = () => {
        f.current?.focus()
    }, t[10] = E) : E = t[10];
    let ie = E,
        D = p?.supportsAtomicMove ? p : void 0,
        O;
    t[11] !== h || t[12] !== g || t[13] !== _ || t[14] !== v ? (O = {
        appBlockId: h,
        libraryFileId: g,
        messageId: _,
        refIndex: v
    }, t[11] = h, t[12] = g, t[13] = _, t[14] = v, t[15] = O) : O = t[15];
    let k;
    t[16] !== n || t[17] !== r || t[18] !== a || t[19] !== s || t[20] !== l || t[21] !== D || t[22] !== O || t[23] !== u ? (k = {
        additionalResourceDomains: n,
        canSubmitTurn: r,
        code: a,
        focusOnClose: ie,
        headerAction: s,
        sharedPreview: D,
        source: O,
        styleMode: l,
        title: u
    }, t[16] = n, t[17] = r, t[18] = a, t[19] = s, t[20] = l, t[21] = D, t[22] = O, t[23] = u, t[24] = k) : k = t[24];
    let A = k,
        ae, j;
    t[25] !== A || t[26] !== w || t[27] !== x ? (ae = () => {
        w && Oe(x, A)
    }, j = [A, w, x], t[25] = A, t[26] = w, t[27] = x, t[28] = ae, t[29] = j) : (ae = t[28], j = t[29]), (0, wn.useEffect)(ae, j);
    let oe;
    t[30] !== A || t[31] !== ne || t[32] !== x ? (oe = () => {
        Fe(x, ne, A)
    }, t[30] = A, t[31] = ne, t[32] = x, t[33] = oe) : oe = t[33];
    let se = oe,
        M;
    t[34] !== te || t[35] !== ee || t[36] !== se || t[37] !== p ? (M = {
        isExpanded: te,
        isViewingHistoricalVersion: ee,
        openExpandedView: se,
        setSharedPreview: m,
        sharedPreview: p,
        triggerRef: f
    }, t[34] = te, t[35] = ee, t[36] = se, t[37] = p, t[38] = M) : M = t[38];
    let N = M,
        ce;
    return t[39] !== i || t[40] !== N ? (ce = (0, Tn.jsx)(gn.Provider, {
        value: N,
        children: i
    }), t[39] = i, t[40] = N, t[41] = ce) : ce = t[41], ce
}

function xn(e) {
    "use forget";
    let t = (0, Cn.c)(17),
        {
            canSubmitFullscreenTurn: n,
            children: r,
            conversation: i,
            headerAction: a,
            headerTitleContent: o,
            title: s
        } = e,
        c = q(),
        l;
    t[0] === i ? l = t[1] : (l = () => i == null ? 0 : W(i).height$() ?? 0, t[0] = i, t[1] = l);
    let u = re(l),
        d = c === `fullscreen` && n && i != null ? u : 0,
        f = o ?? s,
        p;
    t[2] === f ? p = t[3] : (p = (0, Tn.jsx)(`span`, {
        className: `text-token-text-primary min-w-0 flex-1 truncate text-base font-semibold`,
        children: f
    }), t[2] = f, t[3] = p);
    let m;
    t[4] !== a || t[5] !== p ? (m = (0, Tn.jsxs)(_t.Header, {
        className: `pb-1`,
        children: [p, a]
    }), t[4] = a, t[5] = p, t[6] = m) : m = t[6];
    let h;
    t[7] === d ? h = t[8] : (h = {
        paddingBottom: d
    }, t[7] = d, t[8] = h);
    let g;
    t[9] === r ? g = t[10] : (g = (0, Tn.jsx)(`div`, {
        className: `h-full min-h-0`,
        children: r
    }), t[9] = r, t[10] = g);
    let _;
    t[11] !== h || t[12] !== g ? (_ = (0, Tn.jsx)(_t.Body, {
        className: `bg-token-bg-primary overflow-hidden`,
        style: h,
        children: g
    }), t[11] = h, t[12] = g, t[13] = _) : _ = t[13];
    let v;
    return t[14] !== m || t[15] !== _ ? (v = (0, Tn.jsxs)(Tn.Fragment, {
        children: [m, _]
    }), t[14] = m, t[15] = _, t[16] = v) : v = t[16], v
}

function Sn(e) {
    "use forget";
    let t = (0, Cn.c)(5),
        {
            conversation: n,
            paneId: r
        } = e,
        i = ht(),
        a = i.usesViewTransition ? i.targetPresentation === `fullscreen` : i.presentation === `fullscreen` && !i.isTransitioning,
        o;
    return t[0] !== n || t[1] !== r || t[2] !== i.isTransitioning || t[3] !== a ? (o = a ? (0, Tn.jsx)(vn, {
        conversation: n,
        disableAutoFocus: i.isTransitioning,
        paneId: r
    }) : null, t[0] = n, t[1] = r, t[2] = i.isTransitioning, t[3] = a, t[4] = o) : o = t[4], o
}
var Cn, wn, Tn, En = e((() => {
    Cn = de(), Te(), gt(), a(), wn = n(I()), _n(), z(), yn(), Tn = ce()
}));

function Dn() {
    "use forget";
    let e = (0, On.c)(1),
        t;
    return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, kn.jsx)(`div`, {
        className: `text-token-text-secondary flex h-full min-h-[120px] w-full items-center justify-center p-4 text-center text-sm`,
        role: `status`,
        children: (0, kn.jsx)(F, {
            id: `chatgpt.app_block.preview.code_execution_disabled`,
            defaultMessage: `Code execution is disabled for this workspace.`
        })
    }), e[0] = t) : t = e[0], t
}
var On, kn, An = e((() => {
    On = de(), le(), kn = ce()
}));

function jn(e, t, n) {
    "use forget";
    let r = (0, Nn.c)(11),
        i = t === void 0 || t,
        a = fe(),
        o;
    r[0] !== a || r[1] !== e ? (o = e ? a.formatMessage(X.generatingApp, {
        title: e
    }) : a.formatMessage(X.creatingInterface), r[0] = a, r[1] = e, r[2] = o) : o = r[2];
    let s = o,
        c;
    r[3] !== s || r[4] !== a || r[5] !== n ? (c = n ?? [s, a.formatMessage(X.sketchingInterface), a.formatMessage(X.shapingLayout), a.formatMessage(X.arrangingPieces), a.formatMessage(X.polishingVisuals), a.formatMessage(X.tuningInputs), a.formatMessage(X.addingInteractivity), a.formatMessage(X.wiringControls), a.formatMessage(X.composingInteractions), a.formatMessage(X.calibratingPreview), a.formatMessage(X.refiningDetails)], r[3] = s, r[4] = a, r[5] = n, r[6] = c) : c = r[6];
    let l = c,
        [u, d] = (0, Pn.useState)(0),
        f, p;
    return r[7] !== i || r[8] !== l.length ? (f = () => {
        if (!i) return;
        let e = window.setInterval(() => {
            d(e => Math.min(e + 1, l.length - 1))
        }, In);
        return () => {
            window.clearInterval(e)
        }
    }, p = [i, l.length], r[7] = i, r[8] = l.length, r[9] = f, r[10] = p) : (f = r[9], p = r[10]), (0, Pn.useEffect)(f, p), l[u] ?? l[0] ?? ``
}

function Mn(e) {
    "use forget";
    let t = (0, Nn.c)(2),
        {
            loadingLabels: n,
            title: r
        } = e,
        i = jn(r, !0, n),
        a;
    return t[0] === i ? a = t[1] : (a = (0, Fn.jsx)(`div`, {
        "aria-atomic": `true`,
        "aria-live": `polite`,
        className: `not-prose mt-4 mb-1 flex min-h-[220px] w-full cursor-wait`,
        role: `status`,
        children: (0, Fn.jsx)(nt, {
            className: `aspect-auto min-h-0 flex-1 pt-2`,
            label: i
        })
    }), t[0] = i, t[1] = a), a
}
var Nn, Pn, Fn, In, X, Ln, Rn = e((() => {
    Nn = de(), tt(), A(), Pn = n(I()), le(), Fn = ce(), In = 2800, X = P({
        generatingApp: {
            id: `appBlock.loadingState.generatingApp`,
            defaultMessage: `Generating {title}`
        },
        creatingInterface: {
            id: `appBlock.loadingState.creatingInterface`,
            defaultMessage: `Creating the interface`
        },
        sketchingInterface: {
            id: `appBlock.loadingState.sketchingInterface`,
            defaultMessage: `Sketching the interface`
        },
        shapingLayout: {
            id: `appBlock.loadingState.shapingLayout`,
            defaultMessage: `Shaping the layout`
        },
        arrangingPieces: {
            id: `appBlock.loadingState.arrangingPieces`,
            defaultMessage: `Arranging the pieces`
        },
        polishingVisuals: {
            id: `appBlock.loadingState.polishingVisuals`,
            defaultMessage: `Polishing the visuals`
        },
        tuningInputs: {
            id: `appBlock.loadingState.tuningInputs`,
            defaultMessage: `Tuning the inputs`
        },
        addingInteractivity: {
            id: `appBlock.loadingState.addingInteractivity`,
            defaultMessage: `Adding interactivity`
        },
        wiringControls: {
            id: `appBlock.loadingState.wiringControls`,
            defaultMessage: `Wiring the controls`
        },
        composingInteractions: {
            id: `appBlock.loadingState.composingInteractions`,
            defaultMessage: `Composing the interactions`
        },
        calibratingPreview: {
            id: `appBlock.loadingState.calibratingPreview`,
            defaultMessage: `Calibrating the preview`
        },
        refiningDetails: {
            id: `appBlock.loadingState.refiningDetails`,
            defaultMessage: `Refining the details`
        }
    }), Ln = e => {
        "use forget";
        let t = (0, Nn.c)(11),
            {
                isVisible: n,
                title: r
            } = e,
            i = jn(r, n),
            a = !n,
            o = n ? `grid-rows-[1fr] opacity-100` : `grid-rows-[0fr] opacity-0`,
            s;
        t[0] === o ? s = t[1] : (s = u(`grid shrink-0 transition-[grid-template-rows,opacity] duration-200 ease-out motion-reduce:transition-none`, o), t[0] = o, t[1] = s);
        let c = n && `loading-shimmer-pure-text motion-reduce:animate-none`,
            l;
        t[2] === c ? l = t[3] : (l = u(`text-token-text-secondary inline-block font-sans font-medium`, c), t[2] = c, t[3] = l);
        let d;
        t[4] !== i || t[5] !== l ? (d = (0, Fn.jsx)(`div`, {
            className: `min-h-0 overflow-hidden`,
            children: (0, Fn.jsx)(`div`, {
                className: `pb-3`,
                children: (0, Fn.jsx)(`span`, {
                    className: l,
                    children: i
                })
            })
        }), t[4] = i, t[5] = l, t[6] = d) : d = t[6];
        let f;
        return t[7] !== a || t[8] !== s || t[9] !== d ? (f = (0, Fn.jsx)(`div`, {
            "aria-atomic": `true`,
            "aria-hidden": a,
            "aria-live": `polite`,
            className: s,
            role: `status`,
            children: d
        }), t[7] = a, t[8] = s, t[9] = d, t[10] = f) : f = t[10], f
    }
}));

function zn({
    appBlockId: e,
    conversation: t
}) {
    return t == null ? null : ct(t).get(e) ?? null
}

function Bn(e) {
    return e?.serverId$() ?? void 0
}

function Vn({
    currentContentFileId: e,
    libraryFileId: t,
    libraryFileVersionNumber: n,
    serverThreadId: r,
    source: i
}) {
    let a = i?.libraryFileId ?? t ?? null,
        o = i?.currentContentFileId ?? e ?? (a == null ? null : H(a));
    return {
        contentFileId: o,
        libraryContentKey: [a, o, i?.latestPatchMessageId ?? i?.libraryFileVersionNumber ?? n ?? i?.currentContentFileId ?? e ?? null, r ?? null].join(`\0`),
        libraryFileId: a
    }
}

function Hn({
    contentFileId: e,
    libraryContentKey: t,
    libraryFileId: n,
    onContentStateChange: r,
    serverThreadId: i
}) {
    if (n == null || e == null) {
        r(null);
        return
    }
    let a = new AbortController;
    return V({
        abortSignal: a.signal,
        fileId: e,
        serverThreadId: i
    }).then(e => {
        a.signal.aborted || r({
            content: e,
            key: t,
            status: `loaded`
        })
    }).catch(e => {
        a.signal.aborted || r({
            content: null,
            key: t,
            status: d(e) ? `missing` : `failed`
        })
    }), () => {
        a.abort()
    }
}

function Un({
    appBlockId: e,
    contentFileId: t,
    currentContentFileId: n,
    libraryContent: r,
    libraryContentKey: i,
    libraryFileId: a,
    libraryFileVersionNumber: o,
    source: s
}) {
    let c = s ?? Wn({
        appBlockId: e,
        contentFileId: t,
        currentContentFileId: n,
        libraryFileId: a,
        libraryFileVersionNumber: o
    });
    return c == null ? null : r == null || r.key !== i ? c.latestPatchMessageId != null && c.content == null ? {
        ...c,
        content: null
    } : c : {
        ...c,
        content: r.content
    }
}

function Wn({
    appBlockId: e,
    contentFileId: t,
    currentContentFileId: n,
    libraryFileId: r,
    libraryFileVersionNumber: i
}) {
    return r == null ? null : {
        appBlockId: e,
        content: null,
        currentContentFileId: n ?? t,
        entrypoint: null,
        iconSvg: null,
        language: `html`,
        latestPatchMessageId: null,
        libraryFileId: r,
        libraryFileName: null,
        libraryFileVersionNumber: i ?? null,
        messageId: ``,
        mimeType: null,
        refIndex: 0,
        styleMode: null,
        title: null
    }
}
var Gn = e((() => {
        b(), _e(), ot()
    })),
    Kn = t({
        AppBlock: () => Yn,
        AppBlockCollapsedPreview: () => rr,
        AppBlockPreviewLoadingState: () => mr,
        AppBlockSandboxPreview: () => dr
    });

function qn(e) {
    let t = e.search(kr),
        n = t === -1 ? e : e.slice(0, t),
        r = n.toLowerCase(),
        i = r.lastIndexOf(`<style`);
    return i > r.lastIndexOf(`</style`) && (n = n.slice(0, i)), n
}

function Jn(e) {
    let t = qn(e);
    if (t.trim() === ``) return !1;
    if (typeof document > `u`) return /<[^>]+>|[^\s<]/.test(t);
    let n = document.createElement(`template`);
    n.innerHTML = t;
    for (let e of n.content.querySelectorAll(Ar)) e.remove();
    return (n.content.textContent?.trim().length ?? 0) > 0 || n.content.querySelector(jr) != null
}

function Yn(e) {
    "use forget";
    let t = (0, Z.c)(153),
        {
            additionalResourceDomains: n,
            appBlockId: r,
            authoritativeCode: i,
            authoritativeSource: a,
            bind: o,
            code: s,
            collapseWhenSuperseded: c,
            currentContentFileId: l,
            displayMode: u,
            editingEnabled: d,
            expandedHeaderAction: f,
            expandedViewEnabled: p,
            id: m,
            captureConsoleMessages: h,
            clientThreadId: g,
            iconSvg: _,
            inlineHeight: v,
            isStreaming: y,
            isTurnStreaming: b,
            libraryFileId: x,
            libraryFileVersionNumber: S,
            loadingLabels: C,
            messageId: w,
            onConsoleMessagesChange: te,
            onReadyChange: T,
            previewLoadingLabel: E,
            progressiveStreaming: ie,
            ref: D,
            refIndex: k,
            styleMode: A,
            title: ae,
            variant: oe,
            wasStreamingWhenFirstSeen: se,
            widgetName: M,
            widgetRefSeenAtMs: N
        } = e,
        ce = c === void 0 || c,
        P = h !== void 0 && h,
        F = y !== void 0 && y,
        le = b !== void 0 && b,
        I = ie !== void 0 && ie,
        ue = oe === void 0 ? `inline` : oe,
        L = ee(),
        de = (0, Q.useContext)(ut),
        fe;
    t[0] === L ? fe = t[1] : (fe = () => L != null && je(L), t[0] = L, t[1] = fe);
    let pe = re(fe),
        me;
    t[2] !== g || t[3] !== L ? (me = g == null ? L : ne(g), t[2] = g, t[3] = L, t[4] = me) : me = t[4];
    let R = me,
        he = w != null && k != null ? st({
            messageId: w,
            refIndex: k
        }) : void 0,
        z = r ?? he ?? st({
            messageId: w ?? m,
            refIndex: k ?? 0
        }),
        ge = re(() => Ce({
            conversation: L ?? null,
            instanceId: z,
            messageId: w,
            refIndex: k
        })) ?? u,
        _e = re(() => a != null || ge != null ? null : zn({
            appBlockId: z,
            conversation: L ?? null
        })),
        B = a ?? _e,
        ve;
    t[5] === L ? ve = t[6] : (ve = () => Bn(L ?? null), t[5] = L, t[6] = ve);
    let ye = re(ve),
        be = O(L?.id),
        H = ye ?? be,
        we;
    t[7] !== l || t[8] !== x || t[9] !== S || t[10] !== H || t[11] !== B ? (we = Vn({
        currentContentFileId: l,
        libraryFileId: x,
        libraryFileVersionNumber: S,
        serverThreadId: H,
        source: B
    }), t[7] = l, t[8] = x, t[9] = S, t[10] = H, t[11] = B, t[12] = we) : we = t[12];
    let U = we,
        [Te, Ee] = (0, Q.useState)(null),
        [De, Oe] = (0, Q.useState)(0),
        ke;
    t[13] !== De || t[14] !== U.libraryContentKey ? (ke = [U.libraryContentKey, De], t[13] = De, t[14] = U.libraryContentKey, t[15] = ke) : ke = t[15];
    let Ae = ke.join(`\0`),
        Me, Ne;
    t[16] !== i || t[17] !== Ae || t[18] !== U.contentFileId || t[19] !== U.libraryFileId || t[20] !== ge || t[21] !== H ? (Me = () => {
        if (!(i != null || ge === `collapsed`)) return Hn({
            contentFileId: U.contentFileId,
            libraryContentKey: Ae,
            libraryFileId: U.libraryFileId,
            onContentStateChange: Ee,
            serverThreadId: H
        })
    }, Ne = [i, U.contentFileId, U.libraryFileId, Ae, ge, H], t[16] = i, t[17] = Ae, t[18] = U.contentFileId, t[19] = U.libraryFileId, t[20] = ge, t[21] = H, t[22] = Me, t[23] = Ne) : (Me = t[22], Ne = t[23]), (0, Q.useEffect)(Me, Ne);
    let W = Un({
            appBlockId: z,
            contentFileId: U.contentFileId,
            currentContentFileId: l,
            libraryContent: Te,
            libraryContentKey: Ae,
            libraryFileId: x,
            libraryFileVersionNumber: S,
            source: B
        }),
        Pe = Te?.key === Ae ? Te : null,
        Ie;
    t[24] !== W?.libraryFileId || t[25] !== x ? (Ie = () => xe(W?.libraryFileId ?? x), t[24] = W?.libraryFileId, t[25] = x, t[26] = Ie) : Ie = t[26];
    let Le = re(Ie),
        Re = W?.libraryFileVersionNumber ?? S,
        ze = Le != null && (Re == null || Le.versionNumber >= Re) ? Le.code : void 0,
        G = ze ?? i ?? W?.content ?? s ?? null,
        Be = W?.iconSvg ?? _ ?? null,
        Ve = W?.libraryFileId ?? x,
        He = Ve == null && i == null && ze == null && l == null && B?.currentContentFileId == null && B?.latestPatchMessageId == null,
        Ue = se === !1 && ue === `inline` && He,
        We;
    t[27] !== s || t[28] !== He || t[29] !== w || t[30] !== G || t[31] !== k || t[32] !== B ? (We = He ? B == null ? w != null && k != null && s != null && G === s ? {
        messageId: w,
        refIndex: k
    } : null : B.messageId.length > 0 && B.content != null && G === B.content ? {
        messageId: B.messageId,
        refIndex: B.refIndex
    } : null : null, t[27] = s, t[28] = He, t[29] = w, t[30] = G, t[31] = k, t[32] = B, t[33] = We) : We = t[33];
    let Ge = We,
        Ke = ue === `artifact`,
        qe = W?.styleMode ?? A ?? (Ke && I ? `open` : void 0),
        Je;
    t[34] !== Ve || t[35] !== qe ? (Je = at({
        explicitStyleMode: qe,
        libraryFileId: Ve
    }), t[34] = Ve, t[35] = qe, t[36] = Je) : Je = t[36];
    let Ye = Je,
        K = W?.title ?? ae,
        Xe;
    t[37] === L ? Xe = t[38] : (Xe = () => L != null && j(L) ? `work` : `chat`, t[37] = L, t[38] = Xe);
    let Ze = re(Xe),
        Qe;
    t[39] === d ? Qe = t[40] : (Qe = d ?? yt(), t[39] = d, t[40] = Qe);
    let $e = Qe,
        et = p ?? $e,
        tt = I,
        nt = Ke && Ye === `open`,
        rt = ge === `collapsed` || ge == null && ce && W?.latestPatchMessageId != null && W.latestPatchMessageId !== w,
        it = s != null || l != null,
        ot;
    t[41] !== $e || t[42] !== g || t[43] !== s || t[44] !== L?.id || t[45] !== l || t[46] !== z || t[47] !== f || t[48] !== S || t[49] !== w || t[50] !== Ve || t[51] !== Ye || t[52] !== K || t[53] !== k || t[54] !== H || t[55] !== B?.messageId ? (ot = async e => {
        let t = s;
        if (t == null && l != null) try {
            t = await V({
                abortSignal: new AbortController().signal,
                fileId: l,
                serverThreadId: H
            })
        } catch {
            return
        }
        t != null && Fe({
            appBlockId: z,
            conversationId: L?.id ?? g ?? null,
            isOriginalVersion: !0,
            versionNumber: S ?? void 0
        }, `app-block:${z}:original`, {
            canSubmitTurn: $e,
            code: t,
            headerAction: f,
            focusOnClose: () => {
                e.isConnected && e.focus()
            },
            source: {
                appBlockId: z,
                libraryFileId: Ve,
                messageId: B?.messageId ?? w,
                refIndex: k
            },
            styleMode: Ye,
            title: K
        })
    }, t[41] = $e, t[42] = g, t[43] = s, t[44] = L?.id, t[45] = l, t[46] = z, t[47] = f, t[48] = S, t[49] = w, t[50] = Ve, t[51] = Ye, t[52] = K, t[53] = k, t[54] = H, t[55] = B?.messageId, t[56] = ot) : ot = t[56], L?.id, B?.messageId;
    let ct = ot;
    if (F && !tt) {
        let e;
        return t[57] !== C || t[58] !== K ? (e = (0, $.jsx)(Mn, {
            loadingLabels: C,
            title: K
        }), t[57] = C, t[58] = K, t[59] = e) : e = t[59], e
    }
    let lt = pe && s != null;
    if (Pe?.status === `missing` && !lt) return null;
    if (rt) {
        let e = it ? ct : void 0,
            n;
        return t[60] !== K || t[61] !== e ? (n = (0, $.jsx)(lr, {
            onView: e,
            title: K
        }), t[60] = K, t[61] = e, t[62] = n) : n = t[62], n
    }
    let dt = G ?? (tt && F ? `` : null);
    if (dt == null) {
        if (W?.latestPatchMessageId != null) {
            let e = L?.id ?? g,
                n = Pe?.status === `failed`,
                r;
            t[63] === Oe ? r = t[64] : (r = () => Oe(Xn), t[63] = Oe, t[64] = r);
            let i;
            return t[65] !== z || t[66] !== Ke || t[67] !== Be || t[68] !== E || t[69] !== K || t[70] !== e || t[71] !== n || t[72] !== r ? (i = (0, $.jsx)(er, {
                appBlockId: z,
                conversationId: e,
                hasFailed: n,
                iconSvg: Be,
                onRetry: r,
                previewLoadingLabel: E,
                showHeader: Ke,
                title: K
            }), t[65] = z, t[66] = Ke, t[67] = Be, t[68] = E, t[69] = K, t[70] = e, t[71] = n, t[72] = r, t[73] = i) : i = t[73], i
        }
        let e;
        return t[74] !== C || t[75] !== K ? (e = (0, $.jsx)(Mn, {
            loadingLabels: C,
            title: K
        }), t[74] = C, t[75] = K, t[76] = e) : e = t[76], e
    }
    let ft;
    t[77] !== g || t[78] !== Ze || t[79] !== F || t[80] !== le || t[81] !== w || t[82] !== k ? (ft = !F && !le && g != null && w != null && k != null && vt() ? {
        reference: {
            clientThreadId: g,
            messageId: w,
            referenceIndex: k
        },
        target: {
            kind: `app_block`,
            metadata: {
                tab: Ze
            }
        }
    } : void 0, t[77] = g, t[78] = Ze, t[79] = F, t[80] = le, t[81] = w, t[82] = k, t[83] = ft) : ft = t[83];
    let pt = ft;
    if (de) {
        let e = L?.id ?? g,
            r;
        t[84] !== n || t[85] !== o || t[86] !== P || t[87] !== z || t[88] !== m || t[89] !== v || t[90] !== F || t[91] !== te || t[92] !== T || t[93] !== E || t[94] !== Ye || t[95] !== K || t[96] !== D || t[97] !== dt || t[98] !== tt || t[99] !== e || t[100] !== ue || t[101] !== N ? (r = (0, $.jsx)(dr, {
            additionalResourceDomains: n,
            appBlockId: z,
            bind: o,
            captureConsoleMessages: P,
            clientThreadId: e,
            code: dt,
            id: m,
            inlineHeight: v,
            isStreaming: F,
            onConsoleMessagesChange: te,
            onReadyChange: T,
            previewLoadingLabel: E,
            progressiveStreaming: tt,
            ref: D,
            styleMode: Ye,
            title: K,
            variant: ue,
            widgetRefSeenAtMs: N
        }), t[84] = n, t[85] = o, t[86] = P, t[87] = z, t[88] = m, t[89] = v, t[90] = F, t[91] = te, t[92] = T, t[93] = E, t[94] = Ye, t[95] = K, t[96] = D, t[97] = dt, t[98] = tt, t[99] = e, t[100] = ue, t[101] = N, t[102] = r) : r = t[102];
        let i;
        return t[103] !== F || t[104] !== Be || t[105] !== K || t[106] !== nt || t[107] !== r ? (i = (0, $.jsx)($n, {
            canOpen: !1,
            iconSvg: Be,
            isShareReady: !1,
            isStreaming: F,
            showArtifactCard: nt,
            title: K,
            children: r
        }), t[103] = F, t[104] = Be, t[105] = K, t[106] = nt, t[107] = r, t[108] = i) : i = t[108], i
    }
    let mt = L?.id ?? g,
        ht = B?.messageId ?? w,
        gt;
    t[109] !== z || t[110] !== Ve || t[111] !== k || t[112] !== ht ? (gt = {
        appBlockId: z,
        libraryFileId: Ve,
        messageId: ht,
        refIndex: k
    }, t[109] = z, t[110] = Ve, t[111] = k, t[112] = ht, t[113] = gt) : gt = t[113];
    let q = nt && et && !F,
        _t = L?.id ?? g,
        J;
    t[114] !== Ge || t[115] !== M ? (J = Ge == null ? void 0 : {
        contentReferenceIndex: Ge.refIndex,
        messageId: Ge.messageId,
        widgetName: M ?? Se.AppBlock,
        widgetType: Se.AppBlock
    }, t[114] = Ge, t[115] = M, t[116] = J) : J = t[116];
    let bt;
    t[117] !== n || t[118] !== o || t[119] !== P || t[120] !== z || t[121] !== pt || t[122] !== m || t[123] !== v || t[124] !== Ue || t[125] !== F || t[126] !== te || t[127] !== T || t[128] !== Be || t[129] !== E || t[130] !== Ye || t[131] !== K || t[132] !== D || t[133] !== dt || t[134] !== R || t[135] !== tt || t[136] !== nt || t[137] !== q || t[138] !== _t || t[139] !== J || t[140] !== ue || t[141] !== N ? (bt = (0, $.jsx)(Zn, {
        additionalResourceDomains: n,
        appBlockId: z,
        bind: o,
        canOpen: q,
        captureConsoleMessages: P,
        clientThreadId: _t,
        code: dt,
        feedback: pt,
        iconSvg: Be,
        id: m,
        inlineHeight: v,
        isStreaming: F,
        onConsoleMessagesChange: te,
        onReadyChange: T,
        previewLoadingLabel: E,
        progressiveStreaming: tt,
        isSavedInlineLoad: Ue,
        ref: D,
        showArtifactCard: nt,
        shareConversation: R,
        shareTarget: J,
        styleMode: Ye,
        title: K,
        variant: ue,
        widgetRefSeenAtMs: N
    }), t[117] = n, t[118] = o, t[119] = P, t[120] = z, t[121] = pt, t[122] = m, t[123] = v, t[124] = Ue, t[125] = F, t[126] = te, t[127] = T, t[128] = Be, t[129] = E, t[130] = Ye, t[131] = K, t[132] = D, t[133] = dt, t[134] = R, t[135] = tt, t[136] = nt, t[137] = q, t[138] = _t, t[139] = J, t[140] = ue, t[141] = N, t[142] = bt) : bt = t[142];
    let xt;
    return t[143] !== n || t[144] !== $e || t[145] !== f || t[146] !== Ye || t[147] !== K || t[148] !== dt || t[149] !== mt || t[150] !== gt || t[151] !== bt ? (xt = (0, $.jsx)(bn, {
        additionalResourceDomains: n,
        canSubmitTurn: $e,
        code: dt,
        conversationId: mt,
        headerAction: f,
        styleMode: Ye,
        source: gt,
        title: K,
        children: bt
    }), t[143] = n, t[144] = $e, t[145] = f, t[146] = Ye, t[147] = K, t[148] = dt, t[149] = mt, t[150] = gt, t[151] = bt, t[152] = xt) : xt = t[152], xt
}

function Xn(e) {
    return e + 1
}

function Zn(e) {
    "use forget";
    let t = (0, Z.c)(72),
        {
            additionalResourceDomains: n,
            appBlockId: r,
            bind: i,
            canOpen: a,
            captureConsoleMessages: o,
            clientThreadId: s,
            code: c,
            feedback: l,
            iconSvg: u,
            id: d,
            inlineHeight: f,
            isStreaming: p,
            onConsoleMessagesChange: m,
            onReadyChange: h,
            previewLoadingLabel: g,
            progressiveStreaming: _,
            isSavedInlineLoad: v,
            ref: b,
            shareConversation: x,
            shareTarget: S,
            showArtifactCard: C,
            styleMode: w,
            title: ee,
            variant: te,
            widgetRefSeenAtMs: T
        } = e,
        {
            isExpanded: ne,
            isViewingHistoricalVersion: E,
            openExpandedView: re,
            setSharedPreview: ie,
            sharedPreview: D,
            triggerRef: O
        } = mn(),
        k = (0, Q.useContext)(Ne),
        A;
    t[0] === n ? A = t[1] : (A = n ?? [], t[0] = n, t[1] = A);
    let ae;
    t[2] !== c || t[3] !== d || t[4] !== w || t[5] !== A ? (ae = [d, w, c, ...A], t[2] = c, t[3] = d, t[4] = w, t[5] = A, t[6] = ae) : ae = t[6];
    let j = ae.join(`\0`),
        [oe, se] = (0, Q.useState)(null),
        N = !p && oe === j,
        ce;
    t[7] === re ? ce = t[8] : (ce = () => {
        he(), re()
    }, t[7] = re, t[8] = ce);
    let P = ce,
        F;
    t[9] !== h || t[10] !== j ? (F = (e, t) => {
        se(e ? j : null), h?.(e, t)
    }, t[9] = h, t[10] = j, t[11] = F) : F = t[11];
    let le = F,
        I;
    t[12] !== n || t[13] !== r || t[14] !== i || t[15] !== o || t[16] !== s || t[17] !== c || t[18] !== le || t[19] !== d || t[20] !== f || t[21] !== v || t[22] !== p || t[23] !== m || t[24] !== g || t[25] !== _ || t[26] !== b || t[27] !== w || t[28] !== ee || t[29] !== te || t[30] !== T ? (I = (0, $.jsx)(dr, {
        appBlockId: r,
        additionalResourceDomains: n,
        bind: i,
        code: c,
        id: d,
        inlineHeight: f,
        isStreaming: p,
        captureConsoleMessages: o,
        clientThreadId: s,
        onConsoleMessagesChange: m,
        onReadyChange: le,
        presentationSurface: `inline`,
        previewLoadingLabel: g,
        progressiveStreaming: _,
        isSavedInlineLoad: v,
        ref: b,
        styleMode: w,
        title: ee,
        variant: te,
        widgetRefSeenAtMs: T
    }), t[12] = n, t[13] = r, t[14] = i, t[15] = o, t[16] = s, t[17] = c, t[18] = le, t[19] = d, t[20] = f, t[21] = v, t[22] = p, t[23] = m, t[24] = g, t[25] = _, t[26] = b, t[27] = w, t[28] = ee, t[29] = te, t[30] = T, t[31] = I) : I = t[31];
    let ue;
    t[32] !== k || t[33] !== I ? (ue = {
        element: I,
        sandboxPolicy: k
    }, t[32] = k, t[33] = I, t[34] = ue) : ue = t[34];
    let L = ue,
        de;
    t[35] === L ? de = t[36] : (de = () => L, t[35] = L, t[36] = de);
    let fe = M(de),
        pe;
    t[37] !== r || t[38] !== s || t[39] !== fe || t[40] !== ie ? (pe = e => {
        if (e == null) return;
        let {
            preview: t,
            sourceToken: n
        } = ye({
            appBlockId: r,
            content: fe(),
            conversationId: s ?? null,
            inlineContainer: e
        });
        return ie(t), () => {
            let e = me();
            B(t, n, e?.sharedPreview === t)
        }
    }, t[37] = r, t[38] = s, t[39] = fe, t[40] = ie, t[41] = pe) : pe = t[41];
    let R = pe,
        z, ge;
    t[42] !== L || t[43] !== D ? (ge = () => {
        D != null && ve(D, L)
    }, z = [L, D], t[42] = L, t[43] = D, t[44] = z, t[45] = ge) : (z = t[44], ge = t[45]), y(ge, z);
    let _e = E ? P : void 0,
        be;
    t[46] !== u || t[47] !== _e || t[48] !== ee || t[49] !== O ? (be = (0, $.jsx)(rr, {
        iconSvg: u,
        onOpen: _e,
        openButtonRef: O,
        title: ee
    }), t[46] = u, t[47] = _e, t[48] = ee, t[49] = O, t[50] = be) : be = t[50];
    let xe = ne ? be : null,
        V;
    t[51] === R ? V = t[52] : (V = (0, $.jsx)(`div`, {
        ref: R,
        className: `w-full`
    }), t[51] = R, t[52] = V);
    let H;
    t[53] !== a || t[54] !== l || t[55] !== P || t[56] !== u || t[57] !== N || t[58] !== p || t[59] !== x || t[60] !== S || t[61] !== C || t[62] !== V || t[63] !== ee || t[64] !== O ? (H = (0, $.jsx)($n, {
        canOpen: a,
        expandButtonRef: O,
        feedback: l,
        iconSvg: u,
        isShareReady: N,
        shareConversation: x,
        shareTarget: S,
        isStreaming: p,
        showArtifactCard: C,
        title: ee,
        onOpen: P,
        children: V
    }), t[53] = a, t[54] = l, t[55] = P, t[56] = u, t[57] = N, t[58] = p, t[59] = x, t[60] = S, t[61] = C, t[62] = V, t[63] = ee, t[64] = O, t[65] = H) : H = t[65];
    let Se;
    t[66] !== ne || t[67] !== H ? (Se = (0, $.jsx)(`div`, {
        hidden: ne,
        children: H
    }), t[66] = ne, t[67] = H, t[68] = Se) : Se = t[68];
    let Ce;
    return t[69] !== xe || t[70] !== Se ? (Ce = (0, $.jsxs)($.Fragment, {
        children: [xe, Se]
    }), t[69] = xe, t[70] = Se, t[71] = Ce) : Ce = t[71], Ce
}

function Qn(e) {
    "use forget";
    let t = (0, Z.c)(14),
        {
            action: n,
            className: r,
            fallbackTitle: i,
            leading: a,
            title: o,
            titleClassName: s
        } = e,
        c;
    t[0] === r ? c = t[1] : (c = u(`flex items-center justify-between gap-3`, r), t[0] = r, t[1] = c);
    let l = s ?? `truncate text-base font-semibold`,
        d;
    t[2] === l ? d = t[3] : (d = u(`text-token-text-primary`, l), t[2] = l, t[3] = d);
    let f = o ?? i,
        p;
    t[4] !== d || t[5] !== f ? (p = (0, $.jsx)(`div`, {
        className: `min-w-0`,
        children: (0, $.jsx)(`div`, {
            className: d,
            children: f
        })
    }), t[4] = d, t[5] = f, t[6] = p) : p = t[6];
    let m;
    t[7] !== a || t[8] !== p ? (m = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-3`,
        children: [a, p]
    }), t[7] = a, t[8] = p, t[9] = m) : m = t[9];
    let h;
    return t[10] !== n || t[11] !== c || t[12] !== m ? (h = (0, $.jsxs)(`div`, {
        className: c,
        children: [m, n]
    }), t[10] = n, t[11] = c, t[12] = m, t[13] = h) : h = t[13], h
}

function $n(e) {
    "use forget";
    let t = (0, Z.c)(20),
        {
            canOpen: n,
            children: r,
            expandButtonRef: i,
            feedback: a,
            iconSvg: o,
            isShareReady: s,
            isStreaming: c,
            onOpen: l,
            shareConversation: d,
            shareTarget: f,
            showArtifactCard: p,
            title: m
        } = e,
        h = fe(),
        _;
    t[0] === h ? _ = t[1] : (_ = h.formatMessage({
        id: `6z1y4r`,
        defaultMessage: `App preview`
    }), t[0] = h, t[1] = _);
    let v = _,
        y;
    t[2] !== n || t[3] !== r || t[4] !== i || t[5] !== v || t[6] !== o || t[7] !== s || t[8] !== c || t[9] !== l || t[10] !== d || t[11] !== f || t[12] !== p || t[13] !== m ? (y = p ? (0, $.jsxs)(`div`, {
        className: u(`shadow-xxs border-token-border-default bg-token-bg-primary w-full min-w-0 overflow-clip rounded-3xl border`, c && `cursor-wait`),
        "data-testid": `app-block-artifact-card`,
        children: [(0, $.jsx)(Qn, {
            action: (0, $.jsx)(Mr, {
                canOpen: n,
                conversation: d,
                expandButtonRef: i,
                isReady: s,
                onOpen: l,
                target: f
            }),
            className: `min-h-13 px-4 py-2`,
            fallbackTitle: v,
            leading: c ? (0, $.jsx)(g, {
                className: `icon-md text-token-text-primary shrink-0`
            }) : (0, $.jsx)(ar, {
                iconSvg: o
            }),
            title: m
        }), (0, $.jsx)(`div`, {
            children: r
        })]
    }) : (0, $.jsx)(Nr, {
        conversation: d,
        isReady: s,
        target: f,
        children: r
    }), t[2] = n, t[3] = r, t[4] = i, t[5] = v, t[6] = o, t[7] = s, t[8] = c, t[9] = l, t[10] = d, t[11] = f, t[12] = p, t[13] = m, t[14] = y) : y = t[14];
    let b;
    t[15] === a ? b = t[16] : (b = a == null ? null : (0, $.jsx)(tr, {
        ...a
    }), t[15] = a, t[16] = b);
    let x;
    return t[17] !== y || t[18] !== b ? (x = (0, $.jsxs)(`div`, {
        className: `group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,
        "data-app-block-preview": `true`,
        children: [y, b]
    }), t[17] = y, t[18] = b, t[19] = x) : x = t[19], x
}

function er(e) {
    "use forget";
    let t = (0, Z.c)(18),
        {
            appBlockId: n,
            conversationId: r,
            hasFailed: i,
            iconSvg: a,
            onRetry: o,
            previewLoadingLabel: s,
            showHeader: c,
            title: l
        } = e,
        u = re(me),
        d = fe(),
        f;
    t[0] === d ? f = t[1] : (f = d.formatMessage({
        id: `chatgpt.app_block.preview_shell.fallback_title`,
        defaultMessage: `App preview`
    }), t[0] = d, t[1] = f);
    let p = f;
    if (R(u, {
            appBlockId: n,
            conversationId: r ?? null
        })) {
        let e;
        return t[2] !== a || t[3] !== l ? (e = (0, $.jsx)(rr, {
            iconSvg: a,
            title: l
        }), t[2] = a, t[3] = l, t[4] = e) : e = t[4], e
    }
    let m;
    t[5] !== p || t[6] !== a || t[7] !== c || t[8] !== l ? (m = c ? (0, $.jsx)(Qn, {
        className: `mb-2`,
        fallbackTitle: p,
        leading: (0, $.jsx)(ar, {
            iconSvg: a
        }),
        title: l
    }) : null, t[5] = p, t[6] = a, t[7] = c, t[8] = l, t[9] = m) : m = t[9];
    let h;
    t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (h = {
        minHeight: gr
    }, t[10] = h) : h = t[10];
    let g;
    t[11] !== i || t[12] !== o || t[13] !== s ? (g = (0, $.jsx)(`div`, {
        className: `relative w-full`,
        style: h,
        children: i ? (0, $.jsx)(hr, {
            onRetry: o
        }) : (0, $.jsx)(mr, {
            label: s
        })
    }), t[11] = i, t[12] = o, t[13] = s, t[14] = g) : g = t[14];
    let _;
    return t[15] !== m || t[16] !== g ? (_ = (0, $.jsxs)(`div`, {
        className: `group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,
        "data-app-block-preview": `true`,
        children: [m, g]
    }), t[15] = m, t[16] = g, t[17] = _) : _ = t[17], _
}

function tr(e) {
    "use forget";
    let t = (0, Z.c)(5),
        {
            reference: n,
            target: r
        } = e,
        [i, a] = (0, Q.useState)(!1);
    if (re(nr)) return null;
    let o;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, $.jsx)(Me, {}), t[0] = o) : o = t[0];
    let s;
    return t[1] !== i || t[2] !== n || t[3] !== r ? (s = (0, $.jsx)(`div`, {
        className: `flex justify-end pt-1`,
        children: (0, $.jsx)(et, {
            onOpenChange: a,
            open: i,
            reference: n,
            target: r,
            triggerButton: o
        })
    }), t[1] = i, t[2] = n, t[3] = r, t[4] = s) : s = t[4], s
}

function nr() {
    return Qe()
}

function rr(e) {
    "use forget";
    let t = (0, Z.c)(23),
        {
            iconSvg: n,
            onOpen: i,
            openButtonRef: a,
            title: o
        } = e,
        s = fe(),
        c, l, u, d, f;
    t[0] !== s || t[1] !== i || t[2] !== a || t[3] !== o ? (l = s.formatMessage({
        id: `XBBNdF`,
        defaultMessage: `App preview`
    }), f = `not-prose relative clear-both my-4 w-full max-w-full`, d = `shadow-xxs border-token-border-default bg-token-bg-primary text-token-text-primary flex h-20 w-full min-w-0 items-center gap-3 overflow-clip rounded-3xl border p-4`, c = Qn, u = i == null ? void 0 : (0, $.jsx)(r, {
        ref: a,
        color: `secondary`,
        label: s.formatMessage({
            id: `chatgpt.app_block.collapsed_preview.open.aria_label`,
            defaultMessage: `Open {title} in side pane`
        }, {
            title: o ?? l
        }),
        onClick: i,
        type: `button`,
        children: (0, $.jsx)(F, {
            id: `chatgpt.app_block.collapsed_preview.open`,
            defaultMessage: `Open`
        })
    }), t[0] = s, t[1] = i, t[2] = a, t[3] = o, t[4] = c, t[5] = l, t[6] = u, t[7] = d, t[8] = f) : (c = t[4], l = t[5], u = t[6], d = t[7], f = t[8]);
    let p;
    t[9] === n ? p = t[10] : (p = (0, $.jsx)(ir, {
        iconSvg: n
    }), t[9] = n, t[10] = p);
    let m;
    t[11] !== c || t[12] !== l || t[13] !== u || t[14] !== p || t[15] !== o ? (m = (0, $.jsx)(c, {
        action: u,
        className: `w-full`,
        fallbackTitle: l,
        leading: p,
        title: o,
        titleClassName: `truncate text-[17px] leading-6 font-medium tracking-[-0.43px]`
    }), t[11] = c, t[12] = l, t[13] = u, t[14] = p, t[15] = o, t[16] = m) : m = t[16];
    let h;
    t[17] !== d || t[18] !== m ? (h = (0, $.jsx)(`div`, {
        className: d,
        children: m
    }), t[17] = d, t[18] = m, t[19] = h) : h = t[19];
    let g;
    return t[20] !== f || t[21] !== h ? (g = (0, $.jsx)(`div`, {
        className: f,
        children: h
    }), t[20] = f, t[21] = h, t[22] = g) : g = t[22], g
}

function ir(e) {
    "use forget";
    let t = (0, Z.c)(2),
        {
            iconSvg: n
        } = e,
        r;
    return t[0] === n ? r = t[1] : (r = (0, $.jsx)(`div`, {
        className: `bg-token-bg-tertiary flex size-12 shrink-0 items-center justify-center rounded-xl`,
        children: (0, $.jsx)(ar, {
            className: `text-token-text-secondary`,
            iconSvg: n
        })
    }), t[0] = n, t[1] = r), r
}

function ar(e) {
    "use forget";
    let t = (0, Z.c)(5),
        {
            className: n,
            iconSvg: r
        } = e,
        i = n === void 0 ? `text-token-text-primary` : n,
        a;
    t[0] === r ? a = t[1] : (a = or(r), t[0] = r, t[1] = a);
    let o = a,
        s;
    return t[2] !== i || t[3] !== o ? (s = o == null ? (0, $.jsx)(Re, {
        "aria-hidden": `true`,
        className: u(`icon-md shrink-0`, i)
    }) : (0, $.jsx)(`span`, {
        "aria-hidden": `true`,
        className: u(`icon-md shrink-0`, i),
        children: (0, $.jsx)(ke, {
            svgString: o,
            className: `h-full w-full`
        })
    }), t[2] = i, t[3] = o, t[4] = s) : s = t[4], s
}

function or(e) {
    if (e == null) return null;
    let t = e.trim();
    if (t.length === 0 || t.length > wr || !t.startsWith(`<svg `) || !t.endsWith(`</svg>`)) return null;
    let n = 0,
        r = !1,
        i = !1;
    for (let e of t.matchAll(Tr)) {
        let a = e.index;
        if (a == null || t.slice(n, a).trim() !== ``) return null;
        n = a + e[0].length;
        let o = e[1].toLowerCase(),
            s = e[2] ?? ``;
        if (!Dr.has(o)) return null;
        o === `svg` && (r = !0), o === `path` && (i = !0);
        let c = e[0].startsWith(`</`);
        if (c && s.trim() !== `` || !c && !sr(s)) return null
    }
    return t.slice(n).trim() === `` && r && i ? t : null
}

function sr(e) {
    let t = e.replace(Er, ``).trim();
    if (t !== `` && t !== `/`) return !1;
    for (let t of e.matchAll(Er)) {
        let e = t[1],
            n = t[2];
        if (!Or.has(e) || !cr(e, n)) return !1
    }
    return !0
}

function cr(e, t) {
    return e === `xmlns` ? t === `http://www.w3.org/2000/svg` : e === `fill` ? t === `currentColor` || t === `none` : e === `width` || e === `height` ? /^\d+(\.\d+)?$/.test(t) : e === `viewBox` ? /^[\d.\-\s]+$/.test(t) : e === `d` && /^[AaCcHhLlMmQqSsTtVvZz0-9,.\-\s]+$/.test(t)
}

function lr(e) {
    "use forget";
    let t = (0, Z.c)(9),
        {
            onView: n,
            title: r
        } = e,
        i = fe(),
        a;
    t[0] === i ? a = t[1] : (a = i.formatMessage({
        id: `UPARFQ`,
        defaultMessage: `app`
    }), t[0] = i, t[1] = a);
    let o = r ?? a,
        s;
    t[2] === o ? s = t[3] : (s = (0, $.jsx)(`span`, {
        children: (0, $.jsx)(F, {
            id: `chatgpt.app_block.history_created`,
            defaultMessage: `Created {appName}`,
            values: {
                appName: o
            }
        })
    }), t[2] = o, t[3] = s);
    let c;
    t[4] === n ? c = t[5] : (c = n == null ? null : (0, $.jsxs)($.Fragment, {
        children: [(0, $.jsx)(`span`, {
            "aria-hidden": `true`,
            children: (0, $.jsx)(F, {
                id: `chatgpt.app_block.history_separator`,
                defaultMessage: `•`
            })
        }), (0, $.jsx)(`button`, {
            className: `text-token-text-secondary hover:text-token-text-primary font-semibold transition-colors`,
            onClick: e => {
                n(e.currentTarget)
            },
            type: `button`,
            children: (0, $.jsx)(F, {
                id: `chatgpt.app_block.history_view`,
                defaultMessage: `View`
            })
        })]
    }), t[4] = n, t[5] = c);
    let l;
    return t[6] !== s || t[7] !== c ? (l = (0, $.jsxs)(`div`, {
        className: `text-token-text-tertiary my-3 flex w-fit items-center gap-1.5 text-sm`,
        children: [s, c]
    }), t[6] = s, t[7] = c, t[8] = l) : l = t[8], l
}

function ur(e) {
    "use forget";
    let t = (0, Z.c)(12),
        {
            className: n,
            onClick: i,
            ref: a
        } = e,
        o = fe(),
        s;
    t[0] === o ? s = t[1] : (s = o.formatMessage({
        id: `I094Lq`,
        defaultMessage: `Open app`
    }), t[0] = o, t[1] = s);
    let c = s,
        l;
    t[2] === i ? l = t[3] : (l = e => {
        e.stopPropagation(), i()
    }, t[2] = i, t[3] = l);
    let u;
    t[4] !== c || t[5] !== a || t[6] !== l ? (u = (0, $.jsx)(r, {
        ref: a,
        type: `button`,
        icon: Le,
        color: `ghost`,
        size: `medium`,
        label: c,
        className: `size-9 rounded-full border-0 px-2 py-2 shadow-none`,
        onClick: l
    }), t[4] = c, t[5] = a, t[6] = l, t[7] = u) : u = t[7];
    let d;
    return t[8] !== n || t[9] !== c || t[10] !== u ? (d = (0, $.jsx)(x, {
        label: c,
        className: n,
        children: u
    }), t[8] = n, t[9] = c, t[10] = u, t[11] = d) : d = t[11], d
}

function dr(e) {
    "use forget";
    let t = (0, Z.c)(190),
        {
            appBlockId: n,
            additionalResourceDomains: r,
            bind: i,
            clientThreadId: a,
            code: o,
            id: s,
            captureConsoleMessages: c,
            inlineHeight: l,
            isStreaming: d,
            onConsoleMessagesChange: f,
            onReadyChange: m,
            presentationSurface: h,
            previewLoadingLabel: g,
            progressiveStreaming: _,
            isSavedInlineLoad: v,
            ref: b,
            styleMode: x,
            surface: C,
            title: w,
            variant: ee,
            widgetRefSeenAtMs: te
        } = e,
        T = d !== void 0 && d,
        ne = _ !== void 0 && _,
        D = v !== void 0 && v,
        O = x === void 0 ? `default` : x,
        k = C === void 0 ? `inline` : C,
        A = ee === void 0 ? `inline` : ee,
        ae = fe(),
        j = (0, Q.useRef)(null),
        oe = (0, Q.useRef)(null),
        se = Ue(i),
        [N, ce] = (0, Q.useState)(se.values),
        P = E(N, se.values) ? N : se.values;
    P !== N && ce(P);
    let le = [...se.callbacks.keys()],
        [I, ue] = (0, Q.useState)(le),
        L = E(I, le) ? I : le;
    L !== I && ue(L);
    let de = (0, Q.useRef)(P),
        pe = (0, Q.useRef)(L),
        me = (0, Q.useRef)(se.callbacks),
        R = i != null,
        he = (0, Q.useRef)(!1),
        z = (0, Q.useRef)(!1),
        ge = (0, Q.useRef)(null),
        _e = (0, Q.useRef)(null),
        B = (0, Q.useRef)(null),
        ve = (0, Q.useRef)(null),
        ye = (0, Q.useRef)(null),
        be = (0, Q.useRef)(null),
        xe = (0, Q.useRef)(null),
        V = (0, Q.useRef)(null),
        H = (0, Q.useRef)(0),
        Se = (0, Q.useRef)(null),
        Ce = (0, Q.useRef)(null),
        we;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (we = [], t[0] = we) : we = t[0];
    let U = (0, Q.useRef)(we),
        Te = p(),
        Ee = re(S),
        {
            isInternalPreview: De,
            networkPolicy: Oe
        } = (0, Q.useContext)(Ne),
        ke = Oe === void 0 ? `none` : Oe,
        Ae = Ye() || De,
        je = qe(a) && !De,
        Me = je || De && ke === `deps-only`,
        W = Te ? `dark` : `light`,
        Pe = ae.locale,
        Fe;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (Fe = {
        status: `streaming`
    }, t[1] = Fe) : Fe = t[1];
    let [Ie, Le] = (0, Q.useState)(Fe), Re = Ie.status === `finalized` && Ie.html !== o, ze = ne && !T && (A === `artifact` || Ie.status === `failed`), G = ne && k === `inline` && Ie.status !== `static` && !ze && !Re, Be = G && T && A === `artifact` && !Jn(o), Ke = Be ? 0 : _r, Je = l ?? `intrinsic-height`, Xe = Ae ? `execution-enabled` : `execution-disabled`, Ze = Me ? `network-enabled` : `network-disabled`, Qe = De ? `internal-preview` : `workspace-preview`, $e = R ? `bindings-enabled` : `bindings-disabled`, et = G ? `progressive-app-block-stream` : o, tt;
    t[2] === r ? tt = t[3] : (tt = r ?? [], t[2] = r, t[3] = tt);
    let nt;
    t[4] !== Ee || t[5] !== Pe || t[6] !== O || t[7] !== k || t[8] !== Je || t[9] !== Xe || t[10] !== Ze || t[11] !== Qe || t[12] !== $e || t[13] !== et || t[14] !== tt || t[15] !== W ? (nt = [W, Ee, k, Je, O, Pe, Xe, Ze, Qe, $e, et, ...tt], t[4] = Ee, t[5] = Pe, t[6] = O, t[7] = k, t[8] = Je, t[9] = Xe, t[10] = Ze, t[11] = Qe, t[12] = $e, t[13] = et, t[14] = tt, t[15] = W, t[16] = nt) : nt = t[16];
    let rt = nt.join(`\0`),
        it;
    t[17] === r ? it = t[18] : (it = tn(r), t[17] = r, t[18] = it);
    let at = it,
        ot = D ? `saved_inline` : void 0,
        st = Me ? `deps_only` : `disabled`,
        ct = k === `inline` ? A : void 0,
        lt = G ? `progressive` : `static`,
        ut;
    t[19] !== k || t[20] !== ot || t[21] !== st || t[22] !== ct || t[23] !== lt ? (ut = {
        loadSource: ot,
        networkPolicy: st,
        surface: k,
        variant: ct,
        renderMode: lt
    }, t[19] = k, t[20] = ot, t[21] = st, t[22] = ct, t[23] = lt, t[24] = ut) : ut = t[24];
    let dt = ut,
        [ft, pt] = (0, Q.useState)(0),
        [mt, ht] = (0, Q.useState)(null),
        gt = mt?.signature === rt ? mt.status : null,
        q = gt === `ready`,
        _t = q || gt === `failed_after_ready`,
        vt = G && gt === `failed`,
        J = !T && !G && gt === `failed`,
        yt = h ?? k,
        bt = yt === `stage` || l != null,
        xt = l == null ? k : `stage`,
        Ct = ne && yt === `inline` && A === `inline`,
        Tt = G && yt === `inline` && T && !J,
        Et;
    t[25] !== o || t[26] !== dt || t[27] !== te ? (Et = {
        content: o,
        metricTags: dt,
        widgetRefSeenAtMs: te
    }, t[25] = o, t[26] = dt, t[27] = te, t[28] = Et) : Et = t[28];
    let {
        cancelFirstPaintFrame: Ot,
        startRunMetrics: kt
    } = Dt(Et), At, jt;
    t[29] === q ? (At = t[30], jt = t[31]) : (At = () => {
        q && be.current?.markFirstPaint()
    }, jt = [q], t[29] = q, t[30] = At, t[31] = jt), y(At, jt);
    let Mt, Nt;
    t[32] !== q || t[33] !== m ? (Mt = () => {
        m?.(q)
    }, Nt = [q, m], t[32] = q, t[33] = m, t[34] = Mt, t[35] = Nt) : (Mt = t[34], Nt = t[35]), (0, Q.useEffect)(Mt, Nt);
    let Pt, Ft;
    t[36] !== L || t[37] !== P || t[38] !== se.callbacks ? (Pt = () => {
        de.current = P, pe.current = L, me.current = se.callbacks
    }, Ft = [L, P, se.callbacks], t[36] = L, t[37] = P, t[38] = se.callbacks, t[39] = Pt, t[40] = Ft) : (Pt = t[39], Ft = t[40]), y(Pt, Ft);
    let It;
    t[41] === Symbol.for(`react.memo_cache_sentinel`) ? (It = e => {
        oe.current === e && j.current?.updateAppBlockMessenger?.(Ge(e, de.current, pe.current))
    }, t[41] = It) : It = t[41];
    let Lt = M(It),
        Rt;
    t[42] === Lt ? Rt = t[43] : (Rt = e => {
        let t = oe.current;
        if (t == null) return;
        let n = We(e, t),
            r = n && me.current.get(n.name);
        if (n != null && r) {
            let e = () => {
                ie.postTask(() => Lt(t))
            };
            try {
                Promise.resolve(r(...n.args)).then(e, e)
            } catch {
                e()
            }
        }
    }, t[42] = Lt, t[43] = Rt);
    let zt = M(Rt),
        Bt;
    t[44] !== R || t[45] !== q || t[46] !== Lt ? (Bt = () => {
        let e = oe.current;
        !q || !R || e == null || Lt(e)
    }, t[44] = R, t[45] = q, t[46] = Lt, t[47] = Bt) : Bt = t[47];
    let Vt;
    t[48] !== L || t[49] !== P || t[50] !== R || t[51] !== q || t[52] !== Lt ? (Vt = [L, P, R, q, Lt], t[48] = L, t[49] = P, t[50] = R, t[51] = q, t[52] = Lt, t[53] = Vt) : Vt = t[53], (0, Q.useEffect)(Bt, Vt);
    let Ht, Ut;
    t[54] !== l || t[55] !== q || t[56] !== h ? (Ht = () => {
        !q || h == null || j.current?.updateAppBlockSurface?.(l == null ? h : `stage`)
    }, Ut = [l, q, h], t[54] = l, t[55] = q, t[56] = h, t[57] = Ht, t[58] = Ut) : (Ht = t[57], Ut = t[58]), (0, Q.useEffect)(Ht, Ut);
    let Wt, Gt;
    t[59] === Symbol.for(`react.memo_cache_sentinel`) ? (Wt = () => ({
        clearCapturedConsoleMessages: () => {
            U.current = []
        },
        captureScreenshotDataUrl: async () => (await j.current?.screenshot())?.imageBase64 ?? null,
        focus: () => {
            j.current?.focus()
        }
    }), Gt = [], t[59] = Wt, t[60] = Gt) : (Wt = t[59], Gt = t[60]), (0, Q.useImperativeHandle)(b, Wt, Gt);
    let Kt;
    t[61] === Symbol.for(`react.memo_cache_sentinel`) ? (Kt = () => {
        Se.current != null && (window.clearTimeout(Se.current), Se.current = null)
    }, t[61] = Kt) : Kt = t[61];
    let qt = M(Kt),
        Jt;
    t[62] === Symbol.for(`react.memo_cache_sentinel`) ? (Jt = () => {
        Ce.current != null && (window.clearTimeout(Ce.current), Ce.current = null)
    }, t[62] = Jt) : Jt = t[62];
    let Y = M(Jt),
        Yt;
    t[63] !== q || t[64] !== G ? (Yt = () => {
        if (!G || !q || ye.current == null) return;
        let e = ve.current,
            t = j.current;
        if (e == null || t?.updateAppBlockStream == null || z.current) return;
        let n = H.current;
        ve.current = null, _e.current = St(), B.current = e.html, e.isFinal && (z.current = !0);
        let r = () => H.current !== n || ye.current == null ? Promise.resolve() : t.updateAppBlockStream?.(e) ?? Promise.resolve(),
            i = V.current,
            a = i == null ? r() : i.then(r);
        V.current = a, a.then(() => {
            V.current === a && (V.current = null);
            let t = ye.current;
            H.current !== n || t == null || (Jn(e.html) && t.markFirstPaint(), e.isFinal && (t.reportPayloadSize(e.html), Le({
                status: `finalized`,
                html: e.html
            })))
        }, e => {
            V.current === a && (V.current = null), H.current === n && (e instanceof DOMException && e.name === `AbortError` || xe.current?.(`stream_update`, wt(e)))
        })
    }, t[63] = q, t[64] = G, t[65] = Yt) : Yt = t[65];
    let Xt = M(Yt),
        Zt;
    t[66] !== Ee || t[67] !== Me || t[68] !== c || t[69] !== qt || t[70] !== Y || t[71] !== o || t[72] !== xt || t[73] !== R || t[74] !== Ae || t[75] !== Re || t[76] !== D || t[77] !== T || t[78] !== Pe || t[79] !== f || t[80] !== m || t[81] !== h || t[82] !== rt || t[83] !== Ie.status || t[84] !== ze || t[85] !== G || t[86] !== kt || t[87] !== O || t[88] !== W ? (Zt = () => {
        if (!Ae) return;
        if (Ie.status === `failed`) {
            if (T) return;
            Le({
                status: `static`
            }), pt(pr);
            return
        }(Re || ze && Ie.status !== `static`) && Le({
            status: `static`
        });
        let e = G && j.current?.updateAppBlockStream != null;
        if (G && !e) {
            T || Le({
                status: `static`
            });
            return
        }
        he.current = !0, z.current = !1, ge.current = null, _e.current = null, B.current = null, ve.current = null, ye.current = null, be.current = null, xe.current = null, V.current = null, Y(), H.current += 1;
        let t = H.current;
        qt(), ht(null), oe.current = R ? crypto.randomUUID() : null;
        let {
            expectReadySignal: n,
            html: r,
            frameColorScheme: i
        } = nn(o, W, Pe, Ee, xt, {
            loadTailwind: Me,
            progressiveStreaming: e,
            syncPresentationSurface: h != null,
            styleMode: O
        }), a = !1, s = !1, l = !1, u = !1, d = !1, p = () => H.current === t, g = () => e && s, _ = kt(p, {
            deferFirstPaint: e || D,
            deferPayloadSize: e
        });
        D && (be.current = _), e && (ye.current = _);
        let v = e => {
                !c || f == null || !p() || (U.current = e, !u && (u = !0, ie.postTask(() => {
                    u = !1, p() && f(U.current)
                }, {
                    priority: `background`
                })))
            },
            y = e => {
                if (!(!p() || a || l)) {
                    if (a = !0, qt(), _.markReady(e), D) {
                        s = !0, ht({
                            signature: rt,
                            status: `ready`
                        });
                        return
                    }
                    d || (d = !0, ie.postTask(() => {
                        d = !1, !(!p() || l) && (s = !0, ht({
                            signature: rt,
                            status: `ready`
                        }))
                    }, {
                        priority: `background`
                    }))
                }
            },
            b = (t, n) => {
                !p() || l || (l = !0, qt(), Y(), ve.current = null, ye.current = null, e && Le({
                    status: `failed`
                }), ht({
                    signature: rt,
                    status: g() ? `failed_after_ready` : `failed`,
                    readyTimedOut: n === `ready_timeout`
                }), _.reportFailure(t, n), ie.postTask(() => {
                    p() && (e ? m?.(!1) : m?.(!1, `failure`))
                }, {
                    priority: `background`
                }))
            };
        xe.current = b, U.current = [], v([]), Se.current = window.setTimeout(() => {
            b(`sandbox_eval`, `ready_timeout`)
        }, yr), (async () => {
            let e = j.current?.evalAsync({
                code: r,
                ...oe.current == null ? {} : {
                    additionalGlobals: {
                        __appBlockMessenger: Ge(oe.current, de.current, pe.current)
                    }
                },
                expectReadySignal: n,
                language: `html`,
                frameColorScheme: i,
                shouldPreservePreviewOnFatalError: () => p() && g()
            });
            if (e == null) {
                b(`sandbox_eval`, `missing_generator`);
                return
            }
            for (;;) {
                let t = await e.next();
                if (t.done) {
                    p() && !a && b(`sandbox_eval`, `generator_completed_without_ready`);
                    break
                }
                p() && (v([...U.current, t.value]), t.value.type === He.ENVIRONMENT_STATUS && t.value.status === Ve.RUNNING_CODE && y(`running_code`), t.value.type === He.RUN_COMPLETE && (t.value.wasFatalError ? b(`runtime`, `fatal_runtime_error`) : (y(`run_complete`), _.reportSuccess(`run_complete`))), await ie.yield())
            }
        })().catch(e => {
            p() && (e instanceof DOMException && e.name === `AbortError` || b(`sandbox_eval`, wt(e)))
        })
    }, t[66] = Ee, t[67] = Me, t[68] = c, t[69] = qt, t[70] = Y, t[71] = o, t[72] = xt, t[73] = R, t[74] = Ae, t[75] = Re, t[76] = D, t[77] = T, t[78] = Pe, t[79] = f, t[80] = m, t[81] = h, t[82] = rt, t[83] = Ie.status, t[84] = ze, t[85] = G, t[86] = kt, t[87] = O, t[88] = W, t[89] = Zt) : Zt = t[89];
    let Qt = M(Zt),
        $t;
    t[90] !== qt || t[91] !== Y ? ($t = () => {
        H.current += 1, he.current = !1, z.current = !1, ge.current = null, B.current = null, ve.current = null, ye.current = null, xe.current = null, V.current = null, qt(), Y(), ht(null), pt(fr)
    }, t[90] = qt, t[91] = Y, t[92] = $t) : $t = t[92];
    let en = M($t),
        rn;
    t[93] !== bt || t[94] !== yt ? (rn = yt === `inline` && !bt ? {
        margin: -4,
        width: `calc(100% + ${vr*2}px)`
    } : void 0, t[93] = bt, t[94] = yt, t[95] = rn) : rn = t[95];
    let an = rn,
        on;
    t[96] !== Ot || t[97] !== qt || t[98] !== Y || t[99] !== Qt ? (on = () => {
        Qt();
        let e = j.current;
        return () => {
            H.current += 1, oe.current = null, ye.current = null, be.current = null, xe.current = null, V.current = null, qt(), Y(), Ot(), e?.stop()
        }
    }, t[96] = Ot, t[97] = qt, t[98] = Y, t[99] = Qt, t[100] = on) : on = t[100];
    let sn;
    t[101] !== Ot || t[102] !== qt || t[103] !== Y || t[104] !== Ae || t[105] !== rt || t[106] !== Qt || t[107] !== ft ? (sn = [Ot, qt, Y, Ae, rt, Qt, ft], t[101] = Ot, t[102] = qt, t[103] = Y, t[104] = Ae, t[105] = rt, t[106] = Qt, t[107] = ft, t[108] = sn) : sn = t[108], (0, Q.useEffect)(on, sn);
    let cn, ln;
    t[109] !== T || t[110] !== Qt || t[111] !== G ? (cn = () => {
        !G || T || he.current || j.current?.updateAppBlockStream != null || Qt()
    }, ln = [T, Qt, G], t[109] = T, t[110] = Qt, t[111] = G, t[112] = cn, t[113] = ln) : (cn = t[112], ln = t[113]), (0, Q.useEffect)(cn, ln);
    let un, dn;
    if (t[114] !== Y || t[115] !== o || t[116] !== Xt || t[117] !== J || t[118] !== q || t[119] !== T || t[120] !== G || t[121] !== A ? (un = () => {
            if (!G || !q || J || z.current || j.current?.updateAppBlockStream == null) return;
            let e = T ? qn(o) : o;
            if (T && (ve.current?.html ?? B.current) === e) return;
            if (ve.current = {
                    html: e,
                    isFinal: !T
                }, !T) {
                Y(), Xt();
                return
            }
            let t = _e.current;
            if (t == null && A === `artifact` && (ge.current ??= St(), t = ge.current), t == null) {
                Xt();
                return
            }
            let n = A === `artifact` ? xr : br,
                r = St() - t;
            if (r >= n) {
                Xt();
                return
            }
            return Ce.current = window.setTimeout(() => {
                Ce.current = null, Xt()
            }, n - r), Y
        }, dn = [Y, o, Xt, J, q, T, G, A], t[114] = Y, t[115] = o, t[116] = Xt, t[117] = J, t[118] = q, t[119] = T, t[120] = G, t[121] = A, t[122] = un, t[123] = dn) : (un = t[122], dn = t[123]), (0, Q.useEffect)(un, dn), !Ae) {
        let e;
        return t[124] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(Dn, {}), t[124] = e) : e = t[124], e
    }
    let fn = Ct && `flex-col`,
        pn = yt === `inline` && (Be ? `h-0 min-h-0 overflow-hidden` : `min-h-[120px] overflow-visible`),
        mn = yt === `stage` && `h-full min-h-0`,
        hn;
    t[125] !== fn || t[126] !== pn || t[127] !== mn ? (hn = u(`flex w-full`, fn, pn, mn), t[125] = fn, t[126] = pn, t[127] = mn, t[128] = hn) : hn = t[128];
    let gn;
    t[129] !== Ct || t[130] !== Tt || t[131] !== w ? (gn = Ct ? (0, $.jsx)(Ln, {
        isVisible: Tt,
        title: w
    }) : null, t[129] = Ct, t[130] = Tt, t[131] = w, t[132] = gn) : gn = t[132];
    let _n = !T && !G && (gt === `failed` || gt === `failed_after_ready`) && mt?.readyTimedOut || void 0,
        vn = yt === `inline` && !bt ? `flex-none` : `w-full`,
        yn = Tt && `mask-shimmer mask-shimmer-duration-2800 motion-reduce:animate-none`,
        bn;
    t[133] !== vn || t[134] !== yn ? (bn = u(`relative min-w-0`, vn, yn), t[133] = vn, t[134] = yn, t[135] = bn) : bn = t[135];
    let xn;
    t[136] !== l || t[137] !== an || t[138] !== yt ? (xn = yt === `inline` && l != null ? {
        height: l
    } : an, t[136] = l, t[137] = an, t[138] = yt, t[139] = xn) : xn = t[139];
    let Sn = `${ft}:${Me?`network-enabled`:`network-disabled`}:${De?`internal-preview`:`workspace-preview`}`,
        Cn;
    t[140] !== n || t[141] !== a || t[142] !== s ? (Cn = JSON.stringify([a ?? null, n ?? s]), t[140] = n, t[141] = a, t[142] = s, t[143] = Cn) : Cn = t[143];
    let wn;
    t[144] === ae ? wn = t[145] : (wn = ae.formatMessage({
        id: `gxcrdR`,
        defaultMessage: `App block preview`
    }), t[144] = ae, t[145] = wn);
    let Tn = Me ? `deps-only` : `none`,
        En = je ? Sr : Cr,
        On = _t ? 0 : -1,
        kn = R ? zt : void 0,
        An = yt === `inline` && !bt,
        jn = !bt,
        Mn = G ? Ke : gr,
        Nn;
    t[146] !== s || t[147] !== De || t[148] !== Qt || t[149] !== at || t[150] !== Sn || t[151] !== Cn || t[152] !== wn || t[153] !== Tn || t[154] !== En || t[155] !== On || t[156] !== kn || t[157] !== An || t[158] !== jn || t[159] !== Mn ? (Nn = (0, $.jsx)(K, {
        id: s,
        sandboxOriginId: Cn,
        title: wn,
        visuallyHidden: !1,
        networkPolicy: Tn,
        disableExternalNavigation: De,
        additionalResourceDomains: at,
        sandboxPermissions: En,
        disablePermissions: !0,
        enableTransition: !1,
        enableAnimation: !1,
        iframeTabIndex: On,
        onRetryCodeRun: Qt,
        onAppBlockMessage: kn,
        transparentBackground: An,
        useIntrinsicHeight: jn,
        intrinsicHeightFallback: Mn,
        ref: j
    }, Sn), t[146] = s, t[147] = De, t[148] = Qt, t[149] = at, t[150] = Sn, t[151] = Cn, t[152] = wn, t[153] = Tn, t[154] = En, t[155] = On, t[156] = kn, t[157] = An, t[158] = jn, t[159] = Mn, t[160] = Nn) : Nn = t[160];
    let Pn;
    t[161] === Tt ? Pn = t[162] : (Pn = Tt ? (0, $.jsx)(`div`, {
        "aria-hidden": `true`,
        className: `absolute inset-0 z-10 cursor-wait`
    }) : null, t[161] = Tt, t[162] = Pn);
    let Fn;
    t[163] !== vt || t[164] !== J || t[165] !== _t || t[166] !== g || t[167] !== G ? (Fn = !_t && !J && (!G || vt) ? (0, $.jsx)(mr, {
        label: g
    }) : null, t[163] = vt, t[164] = J, t[165] = _t, t[166] = g, t[167] = G, t[168] = Fn) : Fn = t[168];
    let In;
    t[169] !== J || t[170] !== en ? (In = J ? (0, $.jsx)(hr, {
        onRetry: en
    }) : null, t[169] = J, t[170] = en, t[171] = In) : In = t[171];
    let X;
    t[172] !== Tt || t[173] !== _n || t[174] !== bn || t[175] !== xn || t[176] !== Nn || t[177] !== Pn || t[178] !== Fn || t[179] !== In ? (X = (0, $.jsxs)(`div`, {
        "aria-busy": Tt,
        "data-app-block-ready-timeout": _n,
        className: bn,
        style: xn,
        children: [Nn, Pn, Fn, In]
    }), t[172] = Tt, t[173] = _n, t[174] = bn, t[175] = xn, t[176] = Nn, t[177] = Pn, t[178] = Fn, t[179] = In, t[180] = X) : X = t[180];
    let Rn;
    t[181] !== g || t[182] !== Tt || t[183] !== A ? (Rn = Tt && A === `artifact` ? (0, $.jsx)(`span`, {
        "aria-atomic": `true`,
        "aria-live": `polite`,
        className: `sr-only`,
        role: `status`,
        children: g ?? (0, $.jsx)(F, {
            id: `chatgpt.app_block.preview_loading`,
            defaultMessage: `Loading app`
        })
    }) : null, t[181] = g, t[182] = Tt, t[183] = A, t[184] = Rn) : Rn = t[184];
    let zn;
    return t[185] !== hn || t[186] !== gn || t[187] !== X || t[188] !== Rn ? (zn = (0, $.jsxs)(`div`, {
        className: hn,
        children: [gn, X, Rn]
    }), t[185] = hn, t[186] = gn, t[187] = X, t[188] = Rn, t[189] = zn) : zn = t[189], zn
}

function fr(e) {
    return e + 1
}

function pr(e) {
    return e + 1
}

function mr(e) {
    "use forget";
    let t = (0, Z.c)(5),
        {
            label: n
        } = e,
        r;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, $.jsx)(g, {
        className: `icon-sm text-token-text-tertiary`
    }), t[0] = r) : r = t[0];
    let i;
    t[1] === n ? i = t[2] : (i = n ?? (0, $.jsx)(F, {
        id: `chatgpt.app_block.preview_loading`,
        defaultMessage: `Loading app`
    }), t[1] = n, t[2] = i);
    let a;
    return t[3] === i ? a = t[4] : (a = (0, $.jsxs)(`div`, {
        "aria-live": `polite`,
        className: `bg-primary absolute inset-0 z-10 flex cursor-wait items-center justify-center gap-2 text-sm`,
        role: `status`,
        children: [r, (0, $.jsx)(`span`, {
            className: `text-token-text-secondary`,
            children: i
        })]
    }), t[3] = i, t[4] = a), a
}

function hr(e) {
    "use forget";
    let t = (0, Z.c)(4),
        {
            onRetry: n
        } = e,
        i;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, $.jsx)(`p`, {
        className: `text-token-text-secondary text-sm`,
        children: (0, $.jsx)(F, {
            id: `chatgpt.app_block.preview_load_failed`,
            defaultMessage: `This app couldn't load.`
        })
    }), t[0] = i) : i = t[0];
    let a;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, $.jsx)(F, {
        id: `chatgpt.app_block.preview_retry`,
        defaultMessage: `Try again`
    }), t[1] = a) : a = t[1];
    let o;
    return t[2] === n ? o = t[3] : (o = (0, $.jsxs)(`div`, {
        className: `bg-primary absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 px-6 text-center`,
        role: `alert`,
        children: [i, (0, $.jsx)(r, {
            type: `button`,
            color: `secondary`,
            size: `small`,
            onClick: n,
            children: a
        })]
    }), t[2] = n, t[3] = o), o
}
var Z, Q, $, gr, _r, vr, yr, br, xr, Sr, Cr, wr, Tr, Er, Dr, Or, kr, Ar, jr, Mr, Nr, Pr = e((() => {
    Z = de(), te(), Ze(), U(), De(), N(), se(), Xe(), m(), G(), ze(), Ie(), be(), Je(), oe(), Ae(), dt(), lt(), Pe(), D(), a(), T(), Ee(), ae(), v(), c(), o(), $e(), ft(), _e(), Ke(), A(), i(), Q = n(I()), le(), pn(), Lt(), bt(), En(), z(), An(), _n(), Rn(), rt(), ge(), we(), it(), Gn(), $ = ce(), gr = 432, _r = 120, vr = 4, yr = 15e3, br = 100, xr = 350, Sr = `allow-scripts allow-same-origin allow-forms`, Cr = `allow-scripts allow-same-origin`, wr = 12e3, Tr = /<\/?([a-zA-Z][\w:-]*)(\s[^<>]*)?>/g, Er = /([a-zA-Z_:][\w:.-]*)\s*=\s*"([^"]*)"/g, Dr = new Set([`svg`, `path`]), Or = new Set([`d`, `fill`, `height`, `viewBox`, `width`, `xmlns`]), kr = /<script(?:\s|>)/i, Ar = `script, style, template, link, meta, title, [hidden], [style*="display:none" i], [style*="visibility:hidden" i]`, jr = `audio, br, button, canvas, embed, hr, iframe, img, input, meter, object, picture, progress, select, svg, table, textarea, video`, Mr = e => {
        "use forget";
        let t = (0, Z.c)(13),
            {
                canOpen: n,
                conversation: i,
                expandButtonRef: a,
                isReady: o,
                onOpen: s,
                target: c
            } = e,
            l;
        t[0] !== n || t[1] !== a || t[2] !== s ? (l = n && s != null ? (0, $.jsx)(ur, {
            ref: a,
            className: `shrink-0`,
            onClick: s
        }) : null, t[0] = n, t[1] = a, t[2] = s, t[3] = l) : l = t[3];
        let u = l;
        if (i == null) return u;
        let d;
        t[4] === c ? d = t[5] : (d = c ?? {
            contentReferenceIndex: -1,
            messageId: ``
        }, t[4] = c, t[5] = d);
        let f = d,
            p = o && c != null,
            m;
        t[6] === u ? m = t[7] : (m = e => {
            let {
                isVisible: t,
                label: n,
                onSelect: i
            } = e;
            return t ? (0, $.jsxs)(`div`, {
                className: `flex shrink-0 items-center gap-1`,
                children: [(0, $.jsx)(x, {
                    label: n,
                    children: (0, $.jsx)(r, {
                        type: `button`,
                        icon: Be,
                        color: `ghost`,
                        size: `medium`,
                        label: n,
                        className: `size-9 rounded-full border-0 px-2 py-2 shadow-none`,
                        onClick: e => {
                            e.stopPropagation(), i()
                        }
                    })
                }), u]
            }) : u
        }, t[6] = u, t[7] = m);
        let h;
        return t[8] !== f || t[9] !== i || t[10] !== p || t[11] !== m ? (h = (0, $.jsx)(pt, {
            category: Se.AppBlock,
            conversation: i,
            isReady: p,
            target: f,
            children: m
        }), t[8] = f, t[9] = i, t[10] = p, t[11] = m, t[12] = h) : h = t[12], h
    }, Nr = e => {
        "use forget";
        let t = (0, Z.c)(9),
            {
                children: n,
                conversation: r,
                isReady: i,
                target: a
            } = e;
        if (r == null) return n;
        let o;
        t[0] === a ? o = t[1] : (o = a ?? {
            contentReferenceIndex: -1,
            messageId: ``
        }, t[0] = a, t[1] = o);
        let s = o,
            c = i && a != null,
            l;
        t[2] === n ? l = t[3] : (l = e => (0, $.jsxs)(`div`, {
            className: `group/keyboard-or-hover relative`,
            children: [n, e.isVisible ? (0, $.jsx)(`div`, {
                className: `pointer-events-none absolute end-2 top-2 z-10`,
                children: (0, $.jsx)(`div`, {
                    className: `cant-hover:hidden`,
                    children: (0, $.jsx)(mt, {
                        action: e
                    })
                })
            }) : null]
        }), t[2] = n, t[3] = l);
        let u;
        return t[4] !== s || t[5] !== r || t[6] !== c || t[7] !== l ? (u = (0, $.jsx)(pt, {
            category: Se.InlineAppBlock,
            conversation: r,
            isReady: c,
            target: s,
            children: l
        }), t[4] = s, t[5] = r, t[6] = c, t[7] = l, t[8] = u) : u = t[8], u
    }
}));
export {
    Kn as a, Gn as c, En as d, St as f, J as g, yt as h, dr as i, xn as l, bt as m, rr as n, Pr as o, Lt as p, mr as r, zn as s, Yn as t, Sn as u
};
//# sourceMappingURL=e3b746a6-d5ygcla7m65akt17.js.map