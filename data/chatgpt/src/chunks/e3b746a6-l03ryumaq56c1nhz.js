const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/7aa2b76f-abl9ecpfrnrmaxjj.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-qsuygr73qjc6rh65.js", "assets/2340486e-komxp8tzs51ny4jj.js", "assets/root-lelxp0l2.css", "assets/conversation-small-cawdu7il3ha6y70c.js", "assets/30901919-jory365vq6ym5crx.js", "assets/c470f5ab-in0lllrdrzeo67gs.js", "assets/0e5afe53-f9gmgfmgrr83ziw3.js", "assets/conversation-small-czggvj2v.css", "assets/8b34dbc2-d4icgkio4i3wfm6q.js", "assets/82782bc9-jj605vonxg0iyc7p.js"]))) => i.map(i => d[i]);
import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $c as r,
    Az as i,
    Hnt as a,
    IN as o,
    J0 as s,
    J5 as c,
    JT as l,
    Jnt as u,
    LN as d,
    M5 as f,
    SN as p,
    Vp as m,
    Wp as h,
    Xy as g,
    Y0 as _,
    Yy as v,
    _N as y,
    b2 as b,
    bU as ee,
    cl as x,
    crt as S,
    dY as te,
    ert as C,
    fF as w,
    j5 as T,
    jz as E,
    lrt as D,
    mF as ne,
    nY as O,
    nrt as re,
    q5 as k,
    qT as A,
    qnt as j,
    srt as M,
    uF as ie,
    vN as N,
    y2 as ae,
    yN as oe,
    yU as se
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as ce,
    Hn as le,
    Pn as P,
    Rn as F,
    Tn as ue,
    Vn as I,
    ln as L,
    un as de,
    zn as fe
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    A6 as pe,
    Ahn as me,
    E6 as he,
    FUn as ge,
    JNt as R,
    Ohn as _e,
    PUn as ve,
    T6 as z,
    YNt as B,
    _6 as ye,
    _C as be,
    b6 as V,
    cr as H,
    gC as U,
    iA as W,
    j6 as xe,
    k6 as Se,
    lVn as Ce,
    ld as we,
    nT as Te,
    qNt as Ee,
    rT as De,
    sr as Oe,
    tA as ke,
    uVn as Ae,
    ud as je,
    v6 as Me,
    w6 as G,
    x6 as Ne,
    y6 as Pe
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    bS as Fe,
    n_ as Ie,
    nb as Le,
    r_ as Re,
    rb as K,
    yS as ze
} from "./30901919-jory365vq6ym5crx.js";
import {
    n as Be,
    r as Ve
} from "./2ea88c7a-lxyla91xs6iv7odf.js";
import {
    a as He,
    o as Ue,
    r as We,
    t as Ge
} from "./8d846022-bvik3sltoydb2o43.js";
import {
    i as Ke,
    n as qe,
    r as Je
} from "./91969468-bkzmjjpmmnvm9ngq.js";
import {
    n as q,
    t as Ye
} from "./4d271a7b-o0mxja3gckmk1ykl.js";
import {
    n as Xe,
    r as Ze
} from "./58bafdef-e37ztwhy6y06i0v6.js";
import {
    a as Qe,
    i as $e
} from "./e01e2324-gw4vrvd9lu7s24tu.js";
import {
    i as et,
    t as tt
} from "./5dc32f04-g5imzpk85m2o7r95.js";
import {
    c as nt,
    i as rt,
    o as it,
    r as at,
    s as ot,
    t as st
} from "./56dee4d8-kroyytxr89762zgt.js";
import {
    n as ct,
    t as lt
} from "./72bb039a-ddvtieo8obt4in6u.js";
import {
    i as ut,
    n as dt,
    r as ft,
    t as pt
} from "./9eb56efa-mri5s4bm6mz5t8hk.js";
import {
    i as mt,
    n as ht,
    r as J,
    t as gt
} from "./cc79834b-i2xbr9ctpahv31cm.js";

function _t() {
    return a(`2779568043`)
}

function Y() {
    return a(`3864712762`)
}

function vt() {
    return j(`522383056`, {
        disableExposureLog: !0
    }).get(`app_block_library_editing`, !1)
}
var yt = e((() => {
    u()
}));

function bt({
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

function xt() {
    return typeof performance < `u` ? performance.now() : Date.now()
}

function St(e) {
    return new TextEncoder().encode(e).byteLength / 1024
}

function Ct(e) {
    return e instanceof Error ? e.name : `unknown`
}

function wt(e, t, n = 1) {
    S.count(D.APP_BLOCKS, e, bt(t), n)
}

function Tt(e, t, n) {
    S.hist(D.APP_BLOCKS, e, bt(n), t)
}

function Et({
    content: e,
    metricTags: t,
    widgetRefSeenAtMs: n
}) {
    let r = (0, Dt.useRef)(xt()),
        i = (0, Dt.useRef)(null),
        a = (0, Dt.useRef)(!1),
        o = (0, Dt.useRef)(!1),
        s = N(() => {
            i.current == null || typeof window > `u` || (window.cancelAnimationFrame(i.current), i.current = null)
        }),
        c = N((n = e) => {
            o.current || (o.current = !0, Tt(At, St(n), t))
        });
    return {
        cancelFirstPaintFrame: s,
        startRunMetrics: N((e, {
            deferFirstPaint: o = !1,
            deferPayloadSize: l = !1
        } = {}) => {
            let u = xt(),
                d = !1,
                f = !1,
                p = !1,
                m = !1,
                h = null,
                g = null;
            s(), l || c(), wt(Nt, t);
            let _ = (e, n) => {
                    f || (f = !0, wt(Mt, {
                        ...t,
                        outcome: e,
                        readySignal: n
                    }))
                },
                v = (i, o) => {
                    if (!e() || p) return;
                    let s = xt();
                    Tt(jt, s - i, {
                        ...t,
                        readySignal: o
                    }), !a.current && (a.current = !0, Tt(Ot, s - r.current, t), n != null && Tt(Ft, s - n, t))
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
                    !e() || d || (d = !0, h = xt(), g = n, Tt(Pt, h - u, {
                        ...t,
                        readySignal: n
                    }), o || b())
                },
                reportFailure: (n, r) => {
                    !e() || p || (p = !0, s(), wt(kt, {
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
var Dt, Ot, kt, At, jt, Mt, Nt, Pt, Ft, It = e((() => {
        M(), y(), Dt = n(le()), Ot = `app_block.first_render_time_ms`, kt = `app_block.load.failure`, At = `app_block.payload_size_kb`, jt = `app_block.ready_to_first_paint_ms`, Mt = `app_block.render.outcome`, Nt = `app_block.render.start`, Pt = `app_block.sandbox_eval_to_ready_ms`, Ft = `app_block.widget_ref_to_first_paint_ms`
    })),
    Lt, Rt = e((() => {
        Lt = `:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{margin:0;padding:0}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(svg){max-width:100%;height:auto}`
    })),
    zt = e((() => {})),
    Bt, Vt = e((() => {
        zt(), Bt = `/cdn/assets/app-block-sandbox-foundation-l4fcvweu.css`
    })),
    Ht, Ut = e((() => {
        Ht = `:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--white:#fff;--black:#000;--gray-0:#fff;--gray-25:#fcfcfc;--gray-50:#f9f9f9;--gray-75:#f2f2f2;--gray-100:#ececec;--gray-200:#e3e3e3;--gray-750:#2f2f2f;--gray-800:#212121;--gray-950:#0d0d0d;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px;--app-block-accent-blue:var(--lightningcss-light,#3a83f7)var(--lightningcss-dark,#2c67c5);--app-block-accent-green:var(--lightningcss-light,#53b559)var(--lightningcss-dark,#48a04c);--app-block-accent-yellow:var(--lightningcss-light,#f6c543)var(--lightningcss-dark,#d9a337);--app-block-accent-purple:var(--lightningcss-light,#8952ee)var(--lightningcss-dark,#7849d1);--app-block-accent-pink:var(--lightningcss-light,#e0766d)var(--lightningcss-dark,#c96257);--app-block-accent-orange:var(--lightningcss-light,#ee7c37)var(--lightningcss-dark,#d25e28);--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white);--app-block-accent-bg:color-mix(in srgb, var(--app-block-accent) 8%, transparent);--app-block-accent-bg-subtle:color-mix(in srgb, var(--app-block-accent) 5%, transparent);--app-block-form-control-bg:color-mix(in srgb, var(--viz-text) 2%, var(--main-surface-primary));--app-block-form-control-border:color-mix(in srgb, var(--viz-text) 32%, transparent);--app-block-form-control-shadow:0 1px 2px -1px #00000014;--app-block-form-switch-off-bg:color-mix(in srgb, var(--viz-text) 14%, transparent);--app-block-form-switch-thumb-bg:var(--white);--app-block-form-switch-thumb-border:#0000001a;--app-block-select-picker-bg:var(--main-surface-primary);--app-block-select-picker-check-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.0961%202.91371C12.3297%202.68688%2012.6984%202.64794%2012.9779%202.83852C13.2571%203.02905%2013.3554%203.38601%2013.2299%203.68618L13.1615%203.81118L6.91152%2012.9772C6.79412%2013.1494%206.60631%2013.2604%206.39882%2013.2799C6.19137%2013.2994%205.98565%2013.226%205.83828%2013.0788L2.08828%209.32875L1.99843%209.2184C1.81921%208.94677%201.84928%208.57767%202.08828%208.33852C2.3274%208.0994%202.69648%208.06947%202.96816%208.24868L3.07851%208.33852L6.23085%2011.4909L12.0053%203.02211L12.0961%202.91371Z%22/%3E%3C/svg%3E);--app-block-select-picker-hover-bg:#0000000a;--app-block-select-picker-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.1338%205.94433C12.3919%205.77382%2012.7434%205.80202%2012.9707%206.02929C13.1979%206.25656%2013.2261%206.60807%2013.0556%206.8662L12.9707%206.9707L8.47067%2011.4707C8.21097%2011.7304%207.78896%2011.7304%207.52926%2011.4707L3.02926%206.9707L2.9443%206.8662C2.77379%206.60807%202.80199%206.25656%203.02926%206.02929C3.25653%205.80202%203.60804%205.77382%203.86617%205.94433L3.97067%206.02929L7.99996%2010.0586L12.0293%206.02929L12.1338%205.94433Z%22/%3E%3C/svg%3E);--app-block-select-picker-shadow:0 8px 24px #00000014, 0 2px 8px #00000014;--viz-panel:var(--main-surface-secondary);--viz-card:var(--main-surface-primary);--viz-chip-card:var(--gray-75);--viz-border:var(--border-light);--viz-text:var(--text-primary);--viz-muted:var(--text-secondary);--viz-accent:var(--app-block-accent);--viz-accent-text:var(--app-block-accent-text);--viz-accent-bg:var(--app-block-accent-bg);--viz-accent-bg-subtle:var(--app-block-accent-bg-subtle);--viz-series-1:var(--app-block-accent);--viz-series-2:var(--app-block-accent-green);--viz-series-3:var(--app-block-accent-orange);--viz-series-4:var(--app-block-accent-yellow);--viz-series-5:var(--app-block-accent-purple);--viz-series-6:var(--app-block-accent-pink);--color-background-primary:var(--main-surface-primary);--color-background-secondary:var(--main-surface-secondary);--color-border-secondary:var(--border-light);--color-text-primary:var(--text-primary);--color-text-secondary:var(--text-secondary);--color-text-tertiary:var(--text-tertiary);--color-text-inverse:var(--text-primary-inverse)}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root,:root.light{--main-surface-primary:var(--gray-25);--main-surface-secondary:var(--gray-50);--main-surface-tertiary:var(--gray-100);--text-primary:var(--gray-950);--text-secondary:#0009;--text-tertiary:#0000004a;--text-primary-inverse:var(--gray-0);--text-secondary-inverse:#ffffffb3;--text-tertiary-inverse:#ffffff94;--surface-primary-inverse:var(--gray-950);--border-light:#0000001a;--border-medium:#00000026;--interactive-bg-primary-default:var(--gray-950);--interactive-label-primary-default:var(--gray-0);--interactive-border-focus:var(--gray-950);--link:#2964aa}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}@media (prefers-color-scheme:dark){:root:not(.light){--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}:root[data-chat-theme=default],:root[data-chat-theme=black],:root[data-chat-theme=blue]{--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white)}:root[data-chat-theme=green]{--app-block-accent:var(--app-block-accent-green);--app-block-accent-text:var(--white);--viz-series-2:var(--app-block-accent-blue)}:root[data-chat-theme=yellow]{--app-block-accent:var(--app-block-accent-yellow);--app-block-accent-text:var(--gray-950)}:root[data-chat-theme=purple]{--app-block-accent:var(--app-block-accent-purple);--app-block-accent-text:var(--white)}:root[data-chat-theme=pink]{--app-block-accent:var(--app-block-accent-pink);--app-block-accent-text:var(--white);--viz-series-6:var(--app-block-accent-blue)}:root[data-chat-theme=orange]{--app-block-accent:var(--app-block-accent-orange);--app-block-accent-text:var(--white);--viz-series-3:var(--app-block-accent-blue)}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}:root.light[data-app-block-surface=skybridge],:root.light[data-app-block-surface=stage]{--main-surface-primary:var(--white)}:root.dark[data-app-block-surface=skybridge],:root.dark[data-app-block-surface=stage]{--main-surface-primary:var(--gray-800);--main-surface-secondary:var(--gray-750)}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{color:var(--text-primary);margin:0;padding:0;font-family:ui-sans-serif,-apple-system,system-ui,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(a){color:var(--link)}:where(h1,h2,h3,h4,h5,h6,label,strong,output){color:var(--text-primary)}:where(p,small){color:var(--text-secondary)}:where(input,select,textarea,button){font:inherit}:where(button):is(:enabled,:disabled){font-weight:500}button:is(:enabled,:disabled){-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}@media (hover:hover) and (pointer:fine){button:not(:disabled):hover{opacity:.85}}button:not(:disabled):active{opacity:.7}:where(input,select,textarea){background:var(--main-surface-primary);border:1px solid var(--border-medium);border-color:var(--border-medium);color:var(--text-primary);border-radius:12px}:where(){color:var(--text-tertiary)}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus{border-color:var(--border-medium);box-shadow:none;outline:none}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus-visible{border-color:var(--interactive-border-focus);outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where(select:not([multiple])){cursor:pointer;min-height:34px}:where(select:required:invalid){color:var(--text-tertiary)}:where(select option){color:var(--text-primary)}:where(select:disabled){cursor:not-allowed;opacity:.5}@supports (appearance:base-select){:where(select:not([multiple])),:where(select:not([multiple]))::picker(select){appearance:base-select}:where(select:not([multiple])){align-items:center;padding-inline-end:12px}:where(select:not([multiple]))::picker(select){border:1px solid var(--border-light);background:var(--app-block-select-picker-bg);box-shadow:var(--app-block-select-picker-shadow);color:var(--text-primary);border-radius:12px;margin-top:4px;padding:6px}:where(select:not([multiple]))::picker-icon{width:16px;height:16px;color:var(--text-secondary);content:"";-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;align-self:center;margin-inline-start:auto;display:block}:where(select:not([multiple])) option{min-height:32px;color:var(--text-primary);cursor:pointer;background:0 0;border-radius:8px;justify-content:space-between;align-items:center;gap:24px;padding:7px 10px;display:flex}:where(select:not([multiple])) option:checked{background:var(--app-block-select-picker-hover-bg);outline:none}:where(select:not([multiple])) option:is(:hover,:focus-visible){background:var(--app-block-select-picker-hover-bg)}:where(select:not([multiple])):has(option:is(:hover,:focus-visible)) option:checked:not(:is(:hover,:focus-visible)){background:0 0}:where(select:not([multiple])) option:disabled{color:var(--text-tertiary)}:where(select:not([multiple])) option::checkmark{content:"";width:16px;height:16px;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;order:1;margin-inline-start:auto;display:block}}:where(.form-check){align-items:center;gap:6px;min-height:20px;display:flex}:where(.form-check-input){appearance:none;box-sizing:border-box;border:1px solid var(--app-block-form-control-border);width:14px;height:14px;color:var(--app-block-accent-text);cursor:pointer;vertical-align:-2px;background-color:#0000;flex:none;margin:0;padding:0;transition:background-color .12s,border-color .12s,box-shadow .12s;display:inline-block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:5px}:where(.form-check:not(.form-switch) .form-check-input:not(:disabled):not(:checked):hover){background-color:var(--main-surface-secondary)}.form-check:not(.form-switch) .form-check-input:not(:checked):not(:indeterminate){border:1px solid var(--border-medium)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked):before{background:var(--app-block-accent-text);content:"";width:100%;height:100%;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;display:block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate):before{background:var(--app-block-accent-text);content:"";border-radius:9999px;width:8px;height:2px;margin:5px auto;display:block}:where(.form-check-input[type=radio]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:9999px}:where(.form-check-input[type=radio]:checked){border:2px solid var(--viz-accent);background:radial-gradient(circle, var(--app-block-accent-text) 0 2.5px, transparent 3px), var(--viz-accent)}:where(.form-check-input:disabled){cursor:not-allowed;pointer-events:none;opacity:.5}:where(.form-check-input:disabled+.form-check-label){cursor:not-allowed;opacity:.7}:where(.form-check-label){color:var(--viz-text);cursor:pointer}:where(.form-switch .form-check-input[type=checkbox]){background:var(--app-block-form-switch-off-bg);width:32px;height:20px;box-shadow:none;border:0;border-radius:9999px;transition:background-color .2s cubic-bezier(0,0,.2,1);position:relative}:where(.form-switch .form-check-input[type=checkbox]):before{box-sizing:border-box;border:1px solid var(--app-block-form-switch-thumb-border);background:var(--app-block-form-switch-thumb-bg);width:16px;height:16px;box-shadow:var(--app-block-form-control-shadow);content:"";border-radius:9999px;transition:transform .2s cubic-bezier(0,0,.2,1);position:absolute;top:50%;left:0;transform:translate(2px,-50%)}:where(.form-switch .form-check-input[type=checkbox]:checked){background:var(--viz-accent)}:where(.form-switch .form-check-input[type=checkbox]:checked):before{transform:translate(14px,-50%)}:where(input[type=range]){appearance:none;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;background:0 0;border:0;border-radius:9999px;width:100%;min-width:0;height:24px;margin:0;padding:0;display:block}:where(input[type=range]:disabled){cursor:not-allowed;opacity:.4}:where(input[type=range])::-webkit-slider-runnable-track{background:var(--lightningcss-light,#0000000a)var(--lightningcss-dark,#ffffff0f);border:0;border-radius:9999px;height:6px}:where(input[type=range])::-webkit-slider-thumb{appearance:none;box-sizing:border-box;background:var(--white);border:1px solid #0000001a;border-radius:9999px;width:20px;height:20px;margin-top:-7px;transition:transform .15s;box-shadow:0 1px 2px #0000001f}:where(input[type=range])::-moz-range-track{background:var(--lightningcss-light,#0000000a)var(--lightningcss-dark,#ffffff0f);border:0;border-radius:9999px;height:6px}:where(input[type=range])::-moz-range-progress{background:0 0;border-radius:9999px;height:6px}:where(input[type=range])::-moz-range-thumb{box-sizing:border-box;background:var(--white);border:1px solid #0000001a;border-radius:9999px;width:20px;height:20px;transition:transform .15s;box-shadow:0 1px 2px #0000001f}@media (hover:hover) and (pointer:fine){:where(input[type=range]:enabled:hover)::-webkit-slider-thumb{transform:scale(1.05)}:where(input[type=range]:enabled:hover)::-moz-range-thumb{transform:scale(1.05)}}:where(input[type=range]:focus-visible){outline:none}:where(input[type=range]:focus-visible)::-webkit-slider-thumb{outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where(input[type=range]:focus-visible)::-moz-range-thumb{outline:2px solid var(--interactive-border-focus);outline-offset:2px}@media (forced-colors:active){:where(.form-check-input){appearance:auto;display:revert;width:revert;height:revert;margin:revert;padding:revert;border:revert;border-radius:revert;background:revert;box-shadow:revert;vertical-align:revert}:where(.form-check-input):before{content:none}}:where(svg [role=button],svg [tabindex]):focus:not(:focus-visible){outline:none}:where(button:focus-visible){outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where([data-panel]){background:var(--main-surface-secondary)}:where([data-card]){background:var(--viz-card);border-color:var(--border-light)}:where([data-result=primary]){background:var(--interactive-bg-primary-default);color:var(--interactive-label-primary-default)}:where([data-result=primary] :not(a)){color:inherit}.card{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:var(--viz-card);border-radius:16px;padding:12px;overflow:visible}.metric-card{overflow-wrap:break-word;min-width:0;color:var(--viz-text);background:var(--viz-chip-card);border-radius:16px;padding:12px;overflow:visible}.viz-node{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:0 0;border-radius:12px;padding:10px 12px}.viz-stat-value{color:var(--viz-text);font-size:20px;font-weight:500;line-height:1.25}.viz-edge-label,.viz-badge{width:fit-content;color:var(--viz-text);background:var(--viz-accent-bg);border-radius:9999px;align-items:center;padding:3px 8px;font-size:12px;font-weight:500;line-height:1.4;display:inline-flex}.viz-callout{border-left:3px solid var(--viz-accent);color:var(--viz-text);background:var(--viz-accent-bg-subtle);border-radius:0 12px 12px 0;padding:10px 12px}main [data-tooltip]{position:relative}main [data-tooltip]:after{z-index:20;border:1px solid var(--viz-border);width:max-content;max-width:min(220px,100vw - 24px);color:var(--viz-text);background:var(--main-surface-primary);box-shadow:0 2px 8px color-mix(in srgb, var(--viz-text) 8%, transparent);content:attr(data-tooltip);opacity:0;pointer-events:none;text-align:start;border-radius:10px;padding:4px 8px;font-size:12px;line-height:1.4;transition:opacity .12s,transform .12s;position:absolute;bottom:calc(100% + 6px);left:50%;transform:translate(-50%,2px)}main [data-tooltip]:is(:hover,:focus-visible):after{opacity:1;transform:translate(-50%)}main [data-tooltip-placement=bottom]:after{top:calc(100% + 6px);bottom:auto;transform:translate(-50%,-2px)}main [data-tooltip-placement=bottom]:is(:hover,:focus-visible):after{transform:translate(-50%)}main [data-tooltip-placement=left]:after{inset:50% calc(100% + 6px) auto auto;transform:translate(2px,-50%)}main [data-tooltip-placement=left]:is(:hover,:focus-visible):after{transform:translateY(-50%)}main [data-tooltip-placement=right]:after{top:50%;bottom:auto;left:calc(100% + 6px);transform:translate(-2px,-50%)}main [data-tooltip-placement=right]:is(:hover,:focus-visible):after{transform:translateY(-50%)}:where(svg){max-width:100%;height:auto}:root.dark :where(.bg-white){background-color:var(--main-surface-primary)}:root.dark :where(.bg-slate-50,.bg-gray-50,.bg-zinc-50,.bg-neutral-50){background-color:var(--main-surface-secondary)}:root.dark :where(.bg-slate-100,.bg-gray-100,.bg-zinc-100,.bg-neutral-100,.bg-slate-200,.bg-gray-200,.bg-zinc-200,.bg-neutral-200){background-color:var(--main-surface-tertiary)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700){background-color:var(--interactive-bg-primary-default)}:root.dark :where(.text-white){color:var(--text-primary-inverse)}:root.dark :where(.text-black,.text-slate-900,.text-gray-900,.text-zinc-900,.text-neutral-900,.text-slate-950,.text-gray-950,.text-zinc-950,.text-neutral-950){color:var(--text-primary)}:root.dark :where(.text-slate-500,.text-gray-500,.text-zinc-500,.text-neutral-500,.text-slate-600,.text-gray-600,.text-zinc-600,.text-neutral-600,.text-slate-700,.text-gray-700,.text-zinc-700,.text-neutral-700){color:var(--text-secondary)}:root.dark :where(.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-tertiary)}:root.dark :where(.text-blue-500,.text-blue-600,.text-blue-700){color:var(--link)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-white,.text-slate-50,.text-gray-50,.text-zinc-50,.text-neutral-50,.text-slate-100,.text-gray-100,.text-zinc-100,.text-neutral-100){color:var(--text-primary-inverse)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-slate-200,.text-gray-200,.text-zinc-200,.text-neutral-200,.text-slate-300,.text-gray-300,.text-zinc-300,.text-neutral-300,.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-secondary-inverse)}:root.dark :where(.border-slate-200,.border-gray-200,.border-zinc-200,.border-neutral-200){border-color:var(--border-light)}:root.dark :where(.border-slate-300,.border-gray-300,.border-zinc-300,.border-neutral-300,.border-blue-200,.border-blue-300){border-color:var(--border-medium)}`
    })),
    Wt = e((() => {})),
    Gt, Kt = e((() => {
        Wt(), Gt = `/cdn/assets/app-block-sandbox-b1cs4d5m.css`
    }));

function qt(e, t) {
    return t ||= e.slice(0), Object.freeze(Object.defineProperties(e, {
        raw: {
            value: Object.freeze(t)
        }
    }))
}
var X = e((() => {}));

function Jt(e) {
    return /<!doctype\b|<html[\s>]/i.test(e)
}

function Yt(e, t) {
    let n = e.match(/<\/body\s*>(?=\s*(?:<\/html\s*>)?\s*$)/i) ?? e.match(/<\/html\s*>\s*$/i);
    if (n?.index == null) return `${e}\n${t}`;
    let r = n.index;
    return [e.slice(0, r), t, e.slice(r)].join(`
`)
}

function Xt(e) {
    let t = e.trim().replaceAll(`_`, `-`);
    return t.length === 0 || !/^[A-Za-z0-9-]+$/.test(t) ? `en` : t
}

function Zt(e) {
    if (/^https?:\/\//i.test(e) || typeof window > `u`) return e;
    let t = window.location.origin;
    return new URL(e, t).toString()
}

function Qt(e) {
    try {
        return new URL(e).origin
    } catch {
        return null
    }
}

function $t(e) {
    return cn.has(e) ? e : `default`
}

function en(e = []) {
    let t = Zt(Gt),
        n = Zt(Bt),
        r = [Qt(an), Qt(on), Qt(t), Qt(n), ...sn, ...e.map(Qt)];
    return Array.from(new Set(r.filter(e => e != null)))
}

function tn(e, t = `light`, n = `en`, r = `default`, i = `inline`, {
    loadTailwind: a = !0,
    platform: o,
    progressiveStreaming: s = !1,
    syncPresentationSurface: c = !1,
    styleMode: l = `default`
} = {}) {
    let u = e.trim(),
        d = c ? un : ``;
    if (!s && Jt(u)) return {
        html: c ? Yt(u, d) : u,
        expectReadySignal: !1
    };
    let f = Xt(n),
        p = l === `open` ? Lt : Ht,
        m = Zt(l === `open` ? Bt : Gt),
        h = $t(r),
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
    <script id="app-block-tailwind" src="${an}" defer><\/script>
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
    ${s?ln:``}
  </head>
  <body>
    <main>
${s?``:u}
    </main>
    ${d}
    ${s?dn:``}
  </body>
</html>`
    }
}
var nn, rn, an, on, sn, cn, ln, un, dn, fn = e((() => {
    Rt(), Vt(), Ut(), Kt(), X(), an = `https://cdn.tailwindcss.com`, on = `https://images.openai.com`, sn = [`https://persistent.oaistatic.com`, `https://cdnjs.cloudflare.com`, `https://esm.sh`, `https://cdn.jsdelivr.net`, `https://unpkg.com`, `https://fonts.googleapis.com`, `https://fonts.gstatic.com`, `https://fonts.bunny.net`], cn = new Set([`default`, `blue`, `green`, `yellow`, `purple`, `pink`, `orange`, `black`]), ln = `<style>
  @media (prefers-reduced-motion: no-preference) {
    [data-app-block-stream-enter] {
      animation: app-block-stream-enter 160ms ease-out both;
    }

    @keyframes app-block-stream-enter {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  }
</style>`, un = String.raw(nn ||= qt([`<script>
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
<\/script>`])), dn = String.raw(rn ||= qt([`<script>
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

function pn() {
    "use forget";
    let e = (0, mn.useContext)(hn);
    if (e == null) throw Error(`useAppBlockExpandedView must be used within AppBlockExpandedViewProvider`);
    return e
}
var mn, hn, gn = e((() => {
        mn = n(le()), hn = (0, mn.createContext)(null)
    })),
    _n, vn = e((() => {
        _(), de(), _n = s(() => L(() => import(`./7aa2b76f-abl9ecpfrnrmaxjj.js`).then(e => e.AppBlockFullscreenTurnComposer), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])))
    }));

function yn(e) {
    "use forget";
    let t = (0, Sn.c)(42),
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
        d = `app-block:${c.appBlockId}:${(0,Cn.useId)()}`,
        p = (0, Cn.useRef)(null),
        [m, h] = (0, Cn.useState)(null),
        g = c.appBlockId,
        _ = c.libraryFileId,
        v = c.messageId,
        y = c.refIndex,
        b = o ?? null,
        ee;
    t[0] !== b || t[1] !== g ? (ee = {
        appBlockId: g,
        conversationId: b
    }, t[0] = b, t[1] = g, t[2] = ee) : ee = t[2];
    let x = ee,
        S = f(ye),
        te;
    t[3] !== S || t[4] !== x ? (te = Ne(S, x), t[3] = S, t[4] = x, t[5] = te) : te = t[5];
    let C = te,
        w = S?.appBlockId === g && S.conversationId === b && (S.isOriginalVersion === !0 || S.versionNumber != null),
        T = C || w,
        E;
    t[6] !== S || t[7] !== d || t[8] !== x ? (E = G(S, x, d), t[6] = S, t[7] = d, t[8] = x, t[9] = E) : E = t[9];
    let D = E,
        ne;
    t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (ne = () => {
        p.current?.focus()
    }, t[10] = ne) : ne = t[10];
    let O = ne,
        re = m?.supportsAtomicMove ? m : void 0,
        k;
    t[11] !== g || t[12] !== _ || t[13] !== v || t[14] !== y ? (k = {
        appBlockId: g,
        libraryFileId: _,
        messageId: v,
        refIndex: y
    }, t[11] = g, t[12] = _, t[13] = v, t[14] = y, t[15] = k) : k = t[15];
    let A;
    t[16] !== n || t[17] !== r || t[18] !== a || t[19] !== s || t[20] !== l || t[21] !== re || t[22] !== k || t[23] !== u ? (A = {
        additionalResourceDomains: n,
        canSubmitTurn: r,
        code: a,
        focusOnClose: O,
        headerAction: s,
        sharedPreview: re,
        source: k,
        styleMode: l,
        title: u
    }, t[16] = n, t[17] = r, t[18] = a, t[19] = s, t[20] = l, t[21] = re, t[22] = k, t[23] = u, t[24] = A) : A = t[24];
    let j = A,
        M, ie;
    t[25] !== j || t[26] !== C || t[27] !== x ? (M = () => {
        C && z(x, j)
    }, ie = [j, C, x], t[25] = j, t[26] = C, t[27] = x, t[28] = M, t[29] = ie) : (M = t[28], ie = t[29]), (0, Cn.useEffect)(M, ie);
    let N;
    t[30] !== j || t[31] !== D || t[32] !== x ? (N = () => {
        Me(x, D, j)
    }, t[30] = j, t[31] = D, t[32] = x, t[33] = N) : N = t[33];
    let ae = N,
        oe;
    t[34] !== T || t[35] !== w || t[36] !== ae || t[37] !== m ? (oe = {
        isExpanded: T,
        isViewingHistoricalVersion: w,
        openExpandedView: ae,
        setSharedPreview: h,
        sharedPreview: m,
        triggerRef: p
    }, t[34] = T, t[35] = w, t[36] = ae, t[37] = m, t[38] = oe) : oe = t[38];
    let se = oe,
        ce;
    return t[39] !== i || t[40] !== se ? (ce = (0, wn.jsx)(hn.Provider, {
        value: se,
        children: i
    }), t[39] = i, t[40] = se, t[41] = ce) : ce = t[41], ce
}

function bn(e) {
    "use forget";
    let t = (0, Sn.c)(17),
        {
            canSubmitFullscreenTurn: n,
            children: r,
            conversation: i,
            headerAction: a,
            headerTitleContent: o,
            title: s
        } = e,
        c = J(),
        l;
    t[0] === i ? l = t[1] : (l = () => i == null ? 0 : we(i).height$() ?? 0, t[0] = i, t[1] = l);
    let u = f(l),
        d = c === `fullscreen` && n && i != null ? u : 0,
        p = o ?? s,
        m;
    t[2] === p ? m = t[3] : (m = (0, wn.jsx)(`span`, {
        className: `text-token-text-primary min-w-0 flex-1 truncate text-base font-semibold`,
        children: p
    }), t[2] = p, t[3] = m);
    let h;
    t[4] !== a || t[5] !== m ? (h = (0, wn.jsxs)(gt.Header, {
        className: `pb-1`,
        children: [m, a]
    }), t[4] = a, t[5] = m, t[6] = h) : h = t[6];
    let g;
    t[7] === d ? g = t[8] : (g = {
        paddingBottom: d
    }, t[7] = d, t[8] = g);
    let _;
    t[9] === r ? _ = t[10] : (_ = (0, wn.jsx)(`div`, {
        className: `h-full min-h-0`,
        children: r
    }), t[9] = r, t[10] = _);
    let v;
    t[11] !== g || t[12] !== _ ? (v = (0, wn.jsx)(gt.Body, {
        className: `bg-token-bg-primary overflow-hidden`,
        style: g,
        children: _
    }), t[11] = g, t[12] = _, t[13] = v) : v = t[13];
    let y;
    return t[14] !== h || t[15] !== v ? (y = (0, wn.jsxs)(wn.Fragment, {
        children: [h, v]
    }), t[14] = h, t[15] = v, t[16] = y) : y = t[16], y
}

function xn(e) {
    "use forget";
    let t = (0, Sn.c)(5),
        {
            conversation: n,
            paneId: r
        } = e,
        i = mt(),
        a = i.usesViewTransition ? i.targetPresentation === `fullscreen` : i.presentation === `fullscreen` && !i.isTransitioning,
        o;
    return t[0] !== n || t[1] !== r || t[2] !== i.isTransitioning || t[3] !== a ? (o = a ? (0, wn.jsx)(_n, {
        conversation: n,
        disableAutoFocus: i.isTransitioning,
        paneId: r
    }) : null, t[0] = n, t[1] = r, t[2] = i.isTransitioning, t[3] = a, t[4] = o) : o = t[4], o
}
var Sn, Cn, wn, Tn = e((() => {
    Sn = ue(), je(), ht(), T(), Cn = n(le()), gn(), V(), vn(), wn = I()
}));

function En() {
    "use forget";
    let e = (0, Dn.c)(1),
        t;
    return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, On.jsx)(`div`, {
        className: `text-token-text-secondary flex h-full min-h-[120px] w-full items-center justify-center p-4 text-center text-sm`,
        role: `status`,
        children: (0, On.jsx)(P, {
            id: `chatgpt.app_block.preview.code_execution_disabled`,
            defaultMessage: `Code execution is disabled for this workspace.`
        })
    }), e[0] = t) : t = e[0], t
}
var Dn, On, kn = e((() => {
    Dn = ue(), fe(), On = I()
}));

function An(e, t, n) {
    "use forget";
    let r = (0, Mn.c)(11),
        i = t === void 0 || t,
        a = ce(),
        o;
    r[0] !== a || r[1] !== e ? (o = e ? a.formatMessage(Z.generatingApp, {
        title: e
    }) : a.formatMessage(Z.creatingInterface), r[0] = a, r[1] = e, r[2] = o) : o = r[2];
    let s = o,
        c;
    r[3] !== s || r[4] !== a || r[5] !== n ? (c = n ?? [s, a.formatMessage(Z.sketchingInterface), a.formatMessage(Z.shapingLayout), a.formatMessage(Z.arrangingPieces), a.formatMessage(Z.polishingVisuals), a.formatMessage(Z.tuningInputs), a.formatMessage(Z.addingInteractivity), a.formatMessage(Z.wiringControls), a.formatMessage(Z.composingInteractions), a.formatMessage(Z.calibratingPreview), a.formatMessage(Z.refiningDetails)], r[3] = s, r[4] = a, r[5] = n, r[6] = c) : c = r[6];
    let l = c,
        [u, d] = (0, Nn.useState)(0),
        f, p;
    return r[7] !== i || r[8] !== l.length ? (f = () => {
        if (!i) return;
        let e = window.setInterval(() => {
            d(e => Math.min(e + 1, l.length - 1))
        }, Fn);
        return () => {
            window.clearInterval(e)
        }
    }, p = [i, l.length], r[7] = i, r[8] = l.length, r[9] = f, r[10] = p) : (f = r[9], p = r[10]), (0, Nn.useEffect)(f, p), l[u] ?? l[0] ?? ``
}

function jn(e) {
    "use forget";
    let t = (0, Mn.c)(2),
        {
            loadingLabels: n,
            title: r
        } = e,
        i = An(r, !0, n),
        a;
    return t[0] === i ? a = t[1] : (a = (0, Pn.jsx)(`div`, {
        "aria-atomic": `true`,
        "aria-live": `polite`,
        className: `not-prose mt-4 mb-1 flex min-h-[220px] w-full cursor-wait`,
        role: `status`,
        children: (0, Pn.jsx)(tt, {
            className: `aspect-auto min-h-0 flex-1 pt-2`,
            label: i
        })
    }), t[0] = i, t[1] = a), a
}
var Mn, Nn, Pn, Fn, Z, In, Ln = e((() => {
    Mn = ue(), et(), c(), Nn = n(le()), fe(), Pn = I(), Fn = 2800, Z = F({
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
    }), In = e => {
        "use forget";
        let t = (0, Mn.c)(11),
            {
                isVisible: n,
                title: r
            } = e,
            i = An(r, n),
            a = !n,
            o = n ? `grid-rows-[1fr] opacity-100` : `grid-rows-[0fr] opacity-0`,
            s;
        t[0] === o ? s = t[1] : (s = k(`grid shrink-0 transition-[grid-template-rows,opacity] duration-200 ease-out motion-reduce:transition-none`, o), t[0] = o, t[1] = s);
        let c = n && `loading-shimmer-pure-text motion-reduce:animate-none`,
            l;
        t[2] === c ? l = t[3] : (l = k(`text-token-text-secondary inline-block font-sans font-medium`, c), t[2] = c, t[3] = l);
        let u;
        t[4] !== i || t[5] !== l ? (u = (0, Pn.jsx)(`div`, {
            className: `min-h-0 overflow-hidden`,
            children: (0, Pn.jsx)(`div`, {
                className: `pb-3`,
                children: (0, Pn.jsx)(`span`, {
                    className: l,
                    children: i
                })
            })
        }), t[4] = i, t[5] = l, t[6] = u) : u = t[6];
        let d;
        return t[7] !== a || t[8] !== s || t[9] !== u ? (d = (0, Pn.jsx)(`div`, {
            "aria-atomic": `true`,
            "aria-hidden": a,
            "aria-live": `polite`,
            className: s,
            role: `status`,
            children: u
        }), t[7] = a, t[8] = s, t[9] = u, t[10] = d) : d = t[10], d
    }
}));

function Rn({
    appBlockId: e,
    conversation: t
}) {
    return t == null ? null : st(t).get(e) ?? null
}

function zn(e) {
    return e?.serverId$() ?? void 0
}

function Bn({
    currentContentFileId: e,
    libraryFileId: t,
    libraryFileVersionNumber: n,
    serverThreadId: r,
    source: i
}) {
    let a = i?.libraryFileId ?? t ?? null,
        o = i?.currentContentFileId ?? e ?? (a == null ? null : R(a));
    return {
        contentFileId: o,
        libraryContentKey: [a, o, i?.latestPatchMessageId ?? i?.libraryFileVersionNumber ?? n ?? i?.currentContentFileId ?? e ?? null, r ?? null].join(`\0`),
        libraryFileId: a
    }
}

function Vn({
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
    return Ee({
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
            status: h(e) ? `missing` : `failed`
        })
    }), () => {
        a.abort()
    }
}

function Hn({
    appBlockId: e,
    contentFileId: t,
    currentContentFileId: n,
    libraryContent: r,
    libraryContentKey: i,
    libraryFileId: a,
    libraryFileVersionNumber: o,
    source: s
}) {
    let c = s ?? Un({
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

function Un({
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
var Wn = e((() => {
        m(), B(), at()
    })),
    Gn = t({
        AppBlock: () => Jn,
        AppBlockCollapsedPreview: () => nr,
        AppBlockPreviewLoadingState: () => pr,
        AppBlockSandboxPreview: () => ur
    });

function Kn(e) {
    let t = e.search(kr),
        n = t === -1 ? e : e.slice(0, t),
        r = n.toLowerCase(),
        i = r.lastIndexOf(`<style`);
    return i > r.lastIndexOf(`</style`) && (n = n.slice(0, i)), n
}

function qn(e) {
    let t = Kn(e);
    if (t.trim() === ``) return !1;
    if (typeof document > `u`) return /<[^>]+>|[^\s<]/.test(t);
    let n = document.createElement(`template`);
    n.innerHTML = t;
    for (let e of n.content.querySelectorAll(Ar)) e.remove();
    return (n.content.textContent?.trim().length ?? 0) > 0 || n.content.querySelector(jr) != null
}

function Jn(e) {
    "use forget";
    let t = (0, hr.c)(153),
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
            expandedHeaderAction: p,
            expandedViewEnabled: m,
            id: h,
            captureConsoleMessages: g,
            clientThreadId: _,
            iconSvg: v,
            inlineHeight: y,
            isStreaming: b,
            isTurnStreaming: ee,
            libraryFileId: S,
            libraryFileVersionNumber: C,
            loadingLabels: w,
            messageId: T,
            onConsoleMessagesChange: E,
            onReadyChange: D,
            previewLoadingLabel: O,
            progressiveStreaming: re,
            ref: k,
            refIndex: A,
            styleMode: j,
            title: M,
            variant: N,
            wasStreamingWhenFirstSeen: ae,
            widgetName: oe,
            widgetRefSeenAtMs: se
        } = e,
        ce = c === void 0 || c,
        le = g !== void 0 && g,
        P = b !== void 0 && b,
        F = ee !== void 0 && ee,
        ue = re !== void 0 && re,
        I = N === void 0 ? `inline` : N,
        L = ne(),
        de = (0, Q.useContext)(lt),
        fe;
    t[0] === L ? fe = t[1] : (fe = () => L != null && Ae(L), t[0] = L, t[1] = fe);
    let pe = f(fe),
        me;
    t[2] !== _ || t[3] !== L ? (me = _ == null ? L : ie(_), t[2] = _, t[3] = L, t[4] = me) : me = t[4];
    let he = me,
        ge = T != null && A != null ? ot({
            messageId: T,
            refIndex: A
        }) : void 0,
        R = r ?? ge ?? ot({
            messageId: T ?? h,
            refIndex: A ?? 0
        }),
        _e = f(() => ke({
            conversation: L ?? null,
            instanceId: R,
            messageId: T,
            refIndex: A
        })) ?? u,
        ve = f(() => a != null || _e != null ? null : Rn({
            appBlockId: R,
            conversation: L ?? null
        })),
        z = a ?? ve,
        B;
    t[5] === L ? B = t[6] : (B = () => zn(L ?? null), t[5] = L, t[6] = B);
    let ye = f(B),
        be = te(L?.id),
        V = ye ?? be,
        H;
    t[7] !== l || t[8] !== S || t[9] !== C || t[10] !== V || t[11] !== z ? (H = Bn({
        currentContentFileId: l,
        libraryFileId: S,
        libraryFileVersionNumber: C,
        serverThreadId: V,
        source: z
    }), t[7] = l, t[8] = S, t[9] = C, t[10] = V, t[11] = z, t[12] = H) : H = t[12];
    let W = H,
        [xe, Se] = (0, Q.useState)(null),
        [Ce, we] = (0, Q.useState)(0),
        Te;
    t[13] !== Ce || t[14] !== W.libraryContentKey ? (Te = [W.libraryContentKey, Ce], t[13] = Ce, t[14] = W.libraryContentKey, t[15] = Te) : Te = t[15];
    let De = Te.join(`\0`),
        Oe, je;
    t[16] !== i || t[17] !== De || t[18] !== W.contentFileId || t[19] !== W.libraryFileId || t[20] !== _e || t[21] !== V ? (Oe = () => {
        if (!(i != null || _e === `collapsed`)) return Vn({
            contentFileId: W.contentFileId,
            libraryContentKey: De,
            libraryFileId: W.libraryFileId,
            onContentStateChange: Se,
            serverThreadId: V
        })
    }, je = [i, W.contentFileId, W.libraryFileId, De, _e, V], t[16] = i, t[17] = De, t[18] = W.contentFileId, t[19] = W.libraryFileId, t[20] = _e, t[21] = V, t[22] = Oe, t[23] = je) : (Oe = t[22], je = t[23]), (0, Q.useEffect)(Oe, je);
    let G = Hn({
            appBlockId: R,
            contentFileId: W.contentFileId,
            currentContentFileId: l,
            libraryContent: xe,
            libraryContentKey: De,
            libraryFileId: S,
            libraryFileVersionNumber: C,
            source: z
        }),
        Ne = xe?.key === De ? xe : null,
        Fe;
    t[24] !== G?.libraryFileId || t[25] !== S ? (Fe = () => Pe(G?.libraryFileId ?? S), t[24] = G?.libraryFileId, t[25] = S, t[26] = Fe) : Fe = t[26];
    let Ie = f(Fe),
        Le = G?.libraryFileVersionNumber ?? C,
        Re = Ie != null && (Le == null || Ie.versionNumber >= Le) ? Ie.code : void 0,
        K = Re ?? i ?? G?.content ?? s ?? null,
        ze = G?.iconSvg ?? v ?? null,
        Be = G?.libraryFileId ?? S,
        Ve = Be == null && i == null && Re == null && l == null && z?.currentContentFileId == null && z?.latestPatchMessageId == null,
        He = ae === !1 && I === `inline` && Ve,
        Ue;
    t[27] !== s || t[28] !== Ve || t[29] !== T || t[30] !== K || t[31] !== A || t[32] !== z ? (Ue = Ve ? z == null ? T != null && A != null && s != null && K === s ? {
        messageId: T,
        refIndex: A
    } : null : z.messageId.length > 0 && z.content != null && K === z.content ? {
        messageId: z.messageId,
        refIndex: z.refIndex
    } : null : null, t[27] = s, t[28] = Ve, t[29] = T, t[30] = K, t[31] = A, t[32] = z, t[33] = Ue) : Ue = t[33];
    let We = Ue,
        Ge = I === `artifact`,
        Ke = G?.styleMode ?? j ?? (Ge && ue ? `open` : void 0),
        qe;
    t[34] !== Be || t[35] !== Ke ? (qe = it({
        explicitStyleMode: Ke,
        libraryFileId: Be
    }), t[34] = Be, t[35] = Ke, t[36] = qe) : qe = t[36];
    let Je = qe,
        q = G?.title ?? M,
        Ye;
    t[37] === L ? Ye = t[38] : (Ye = () => L != null && x(L) ? `work` : `chat`, t[37] = L, t[38] = Ye);
    let Xe = f(Ye),
        Ze;
    t[39] === d ? Ze = t[40] : (Ze = d ?? vt(), t[39] = d, t[40] = Ze);
    let Qe = Ze,
        $e = m ?? Qe,
        et = ue,
        tt = Ge && Je === `open`,
        nt = _e === `collapsed` || _e == null && ce && G?.latestPatchMessageId != null && G.latestPatchMessageId !== T,
        rt = s != null || l != null,
        at;
    t[41] !== Qe || t[42] !== _ || t[43] !== s || t[44] !== L?.id || t[45] !== l || t[46] !== R || t[47] !== p || t[48] !== C || t[49] !== T || t[50] !== Be || t[51] !== Je || t[52] !== q || t[53] !== A || t[54] !== V || t[55] !== z?.messageId ? (at = async e => {
        let t = s;
        if (t == null && l != null) try {
            t = await Ee({
                abortSignal: new AbortController().signal,
                fileId: l,
                serverThreadId: V
            })
        } catch {
            return
        }
        t != null && Me({
            appBlockId: R,
            conversationId: L?.id ?? _ ?? null,
            isOriginalVersion: !0,
            versionNumber: C ?? void 0
        }, `app-block:${R}:original`, {
            canSubmitTurn: Qe,
            code: t,
            headerAction: p,
            focusOnClose: () => {
                e.isConnected && e.focus()
            },
            source: {
                appBlockId: R,
                libraryFileId: Be,
                messageId: z?.messageId ?? T,
                refIndex: A
            },
            styleMode: Je,
            title: q
        })
    }, t[41] = Qe, t[42] = _, t[43] = s, t[44] = L?.id, t[45] = l, t[46] = R, t[47] = p, t[48] = C, t[49] = T, t[50] = Be, t[51] = Je, t[52] = q, t[53] = A, t[54] = V, t[55] = z?.messageId, t[56] = at) : at = t[56], L?.id, z?.messageId;
    let st = at;
    if (P && !et) {
        let e;
        return t[57] !== w || t[58] !== q ? (e = (0, $.jsx)(jn, {
            loadingLabels: w,
            title: q
        }), t[57] = w, t[58] = q, t[59] = e) : e = t[59], e
    }
    let ct = pe && s != null;
    if (Ne?.status === `missing` && !ct) return null;
    if (nt) {
        let e = rt ? st : void 0,
            n;
        return t[60] !== q || t[61] !== e ? (n = (0, $.jsx)(cr, {
            onView: e,
            title: q
        }), t[60] = q, t[61] = e, t[62] = n) : n = t[62], n
    }
    let ut = K ?? (et && P ? `` : null);
    if (ut == null) {
        if (G?.latestPatchMessageId != null) {
            let e = L?.id ?? _,
                n = Ne?.status === `failed`,
                r;
            t[63] === we ? r = t[64] : (r = () => we(Yn), t[63] = we, t[64] = r);
            let i;
            return t[65] !== R || t[66] !== Ge || t[67] !== ze || t[68] !== O || t[69] !== q || t[70] !== e || t[71] !== n || t[72] !== r ? (i = (0, $.jsx)($n, {
                appBlockId: R,
                conversationId: e,
                hasFailed: n,
                iconSvg: ze,
                onRetry: r,
                previewLoadingLabel: O,
                showHeader: Ge,
                title: q
            }), t[65] = R, t[66] = Ge, t[67] = ze, t[68] = O, t[69] = q, t[70] = e, t[71] = n, t[72] = r, t[73] = i) : i = t[73], i
        }
        let e;
        return t[74] !== w || t[75] !== q ? (e = (0, $.jsx)(jn, {
            loadingLabels: w,
            title: q
        }), t[74] = w, t[75] = q, t[76] = e) : e = t[76], e
    }
    let dt;
    t[77] !== _ || t[78] !== Xe || t[79] !== P || t[80] !== F || t[81] !== T || t[82] !== A ? (dt = !P && !F && _ != null && T != null && A != null && _t() ? {
        reference: {
            clientThreadId: _,
            messageId: T,
            referenceIndex: A
        },
        target: {
            kind: `app_block`,
            metadata: {
                tab: Xe
            }
        }
    } : void 0, t[77] = _, t[78] = Xe, t[79] = P, t[80] = F, t[81] = T, t[82] = A, t[83] = dt) : dt = t[83];
    let ft = dt;
    if (de) {
        let e = L?.id ?? _,
            r;
        t[84] !== n || t[85] !== o || t[86] !== le || t[87] !== R || t[88] !== h || t[89] !== y || t[90] !== P || t[91] !== E || t[92] !== D || t[93] !== O || t[94] !== Je || t[95] !== q || t[96] !== k || t[97] !== ut || t[98] !== et || t[99] !== e || t[100] !== I || t[101] !== se ? (r = (0, $.jsx)(ur, {
            additionalResourceDomains: n,
            appBlockId: R,
            bind: o,
            captureConsoleMessages: le,
            clientThreadId: e,
            code: ut,
            id: h,
            inlineHeight: y,
            isStreaming: P,
            onConsoleMessagesChange: E,
            onReadyChange: D,
            previewLoadingLabel: O,
            progressiveStreaming: et,
            ref: k,
            styleMode: Je,
            title: q,
            variant: I,
            widgetRefSeenAtMs: se
        }), t[84] = n, t[85] = o, t[86] = le, t[87] = R, t[88] = h, t[89] = y, t[90] = P, t[91] = E, t[92] = D, t[93] = O, t[94] = Je, t[95] = q, t[96] = k, t[97] = ut, t[98] = et, t[99] = e, t[100] = I, t[101] = se, t[102] = r) : r = t[102];
        let i;
        return t[103] !== P || t[104] !== ze || t[105] !== q || t[106] !== tt || t[107] !== r ? (i = (0, $.jsx)(Qn, {
            canOpen: !1,
            iconSvg: ze,
            isShareReady: !1,
            isStreaming: P,
            showArtifactCard: tt,
            title: q,
            children: r
        }), t[103] = P, t[104] = ze, t[105] = q, t[106] = tt, t[107] = r, t[108] = i) : i = t[108], i
    }
    let pt = L?.id ?? _,
        mt = z?.messageId ?? T,
        ht;
    t[109] !== R || t[110] !== Be || t[111] !== A || t[112] !== mt ? (ht = {
        appBlockId: R,
        libraryFileId: Be,
        messageId: mt,
        refIndex: A
    }, t[109] = R, t[110] = Be, t[111] = A, t[112] = mt, t[113] = ht) : ht = t[113];
    let J = tt && $e && !P,
        gt = L?.id ?? _,
        Y;
    t[114] !== We || t[115] !== oe ? (Y = We == null ? void 0 : {
        contentReferenceIndex: We.refIndex,
        messageId: We.messageId,
        widgetName: oe ?? U.AppBlock,
        widgetType: U.AppBlock
    }, t[114] = We, t[115] = oe, t[116] = Y) : Y = t[116];
    let yt;
    t[117] !== n || t[118] !== o || t[119] !== le || t[120] !== R || t[121] !== ft || t[122] !== h || t[123] !== y || t[124] !== He || t[125] !== P || t[126] !== E || t[127] !== D || t[128] !== ze || t[129] !== O || t[130] !== Je || t[131] !== q || t[132] !== k || t[133] !== ut || t[134] !== he || t[135] !== et || t[136] !== tt || t[137] !== J || t[138] !== gt || t[139] !== Y || t[140] !== I || t[141] !== se ? (yt = (0, $.jsx)(Xn, {
        additionalResourceDomains: n,
        appBlockId: R,
        bind: o,
        canOpen: J,
        captureConsoleMessages: le,
        clientThreadId: gt,
        code: ut,
        feedback: ft,
        iconSvg: ze,
        id: h,
        inlineHeight: y,
        isStreaming: P,
        onConsoleMessagesChange: E,
        onReadyChange: D,
        previewLoadingLabel: O,
        progressiveStreaming: et,
        isSavedInlineLoad: He,
        ref: k,
        showArtifactCard: tt,
        shareConversation: he,
        shareTarget: Y,
        styleMode: Je,
        title: q,
        variant: I,
        widgetRefSeenAtMs: se
    }), t[117] = n, t[118] = o, t[119] = le, t[120] = R, t[121] = ft, t[122] = h, t[123] = y, t[124] = He, t[125] = P, t[126] = E, t[127] = D, t[128] = ze, t[129] = O, t[130] = Je, t[131] = q, t[132] = k, t[133] = ut, t[134] = he, t[135] = et, t[136] = tt, t[137] = J, t[138] = gt, t[139] = Y, t[140] = I, t[141] = se, t[142] = yt) : yt = t[142];
    let bt;
    return t[143] !== n || t[144] !== Qe || t[145] !== p || t[146] !== Je || t[147] !== q || t[148] !== ut || t[149] !== pt || t[150] !== ht || t[151] !== yt ? (bt = (0, $.jsx)(yn, {
        additionalResourceDomains: n,
        canSubmitTurn: Qe,
        code: ut,
        conversationId: pt,
        headerAction: p,
        styleMode: Je,
        source: ht,
        title: q,
        children: yt
    }), t[143] = n, t[144] = Qe, t[145] = p, t[146] = Je, t[147] = q, t[148] = ut, t[149] = pt, t[150] = ht, t[151] = yt, t[152] = bt) : bt = t[152], bt
}

function Yn(e) {
    return e + 1
}

function Xn(e) {
    "use forget";
    let t = (0, hr.c)(72),
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
            id: f,
            inlineHeight: p,
            isStreaming: m,
            onConsoleMessagesChange: h,
            onReadyChange: g,
            previewLoadingLabel: _,
            progressiveStreaming: v,
            isSavedInlineLoad: y,
            ref: b,
            shareConversation: ee,
            shareTarget: x,
            showArtifactCard: S,
            styleMode: te,
            title: C,
            variant: w,
            widgetRefSeenAtMs: T
        } = e,
        {
            isExpanded: E,
            isViewingHistoricalVersion: D,
            openExpandedView: ne,
            setSharedPreview: O,
            sharedPreview: re,
            triggerRef: k
        } = pn(),
        A = (0, Q.useContext)(Oe),
        j;
    t[0] === n ? j = t[1] : (j = n ?? [], t[0] = n, t[1] = j);
    let M;
    t[2] !== c || t[3] !== f || t[4] !== te || t[5] !== j ? (M = [f, te, c, ...j], t[2] = c, t[3] = f, t[4] = te, t[5] = j, t[6] = M) : M = t[6];
    let ie = M.join(`\0`),
        [ae, oe] = (0, Q.useState)(null),
        se = !m && ae === ie,
        ce;
    t[7] === ne ? ce = t[8] : (ce = () => {
        ve(), ne()
    }, t[7] = ne, t[8] = ce);
    let le = ce,
        P;
    t[9] !== g || t[10] !== ie ? (P = (e, t) => {
        oe(e ? ie : null), g?.(e, t)
    }, t[9] = g, t[10] = ie, t[11] = P) : P = t[11];
    let F = P,
        ue;
    t[12] !== n || t[13] !== r || t[14] !== i || t[15] !== o || t[16] !== s || t[17] !== c || t[18] !== F || t[19] !== f || t[20] !== p || t[21] !== y || t[22] !== m || t[23] !== h || t[24] !== _ || t[25] !== v || t[26] !== b || t[27] !== te || t[28] !== C || t[29] !== w || t[30] !== T ? (ue = (0, $.jsx)(ur, {
        appBlockId: r,
        additionalResourceDomains: n,
        bind: i,
        code: c,
        id: f,
        inlineHeight: p,
        isStreaming: m,
        captureConsoleMessages: o,
        clientThreadId: s,
        onConsoleMessagesChange: h,
        onReadyChange: F,
        presentationSurface: `inline`,
        previewLoadingLabel: _,
        progressiveStreaming: v,
        isSavedInlineLoad: y,
        ref: b,
        styleMode: te,
        title: C,
        variant: w,
        widgetRefSeenAtMs: T
    }), t[12] = n, t[13] = r, t[14] = i, t[15] = o, t[16] = s, t[17] = c, t[18] = F, t[19] = f, t[20] = p, t[21] = y, t[22] = m, t[23] = h, t[24] = _, t[25] = v, t[26] = b, t[27] = te, t[28] = C, t[29] = w, t[30] = T, t[31] = ue) : ue = t[31];
    let I;
    t[32] !== A || t[33] !== ue ? (I = {
        element: ue,
        sandboxPolicy: A
    }, t[32] = A, t[33] = ue, t[34] = I) : I = t[34];
    let L = I,
        de;
    t[35] === L ? de = t[36] : (de = () => L, t[35] = L, t[36] = de);
    let fe = N(de),
        me;
    t[37] !== r || t[38] !== s || t[39] !== fe || t[40] !== O ? (me = e => {
        if (e == null) return;
        let {
            preview: t,
            sourceToken: n
        } = he({
            appBlockId: r,
            content: fe(),
            conversationId: s ?? null,
            inlineContainer: e
        });
        return O(t), () => {
            let e = ye();
            pe(t, n, e?.sharedPreview === t)
        }
    }, t[37] = r, t[38] = s, t[39] = fe, t[40] = O, t[41] = me) : me = t[41];
    let ge = me,
        R, _e;
    t[42] !== L || t[43] !== re ? (_e = () => {
        re != null && xe(re, L)
    }, R = [L, re], t[42] = L, t[43] = re, t[44] = R, t[45] = _e) : (R = t[44], _e = t[45]), d(_e, R);
    let z = D ? le : void 0,
        B;
    t[46] !== u || t[47] !== z || t[48] !== C || t[49] !== k ? (B = (0, $.jsx)(nr, {
        iconSvg: u,
        onOpen: z,
        openButtonRef: k,
        title: C
    }), t[46] = u, t[47] = z, t[48] = C, t[49] = k, t[50] = B) : B = t[50];
    let be = E ? B : null,
        V;
    t[51] === ge ? V = t[52] : (V = (0, $.jsx)(`div`, {
        ref: ge,
        className: `w-full`
    }), t[51] = ge, t[52] = V);
    let H;
    t[53] !== a || t[54] !== l || t[55] !== le || t[56] !== u || t[57] !== se || t[58] !== m || t[59] !== ee || t[60] !== x || t[61] !== S || t[62] !== V || t[63] !== C || t[64] !== k ? (H = (0, $.jsx)(Qn, {
        canOpen: a,
        expandButtonRef: k,
        feedback: l,
        iconSvg: u,
        isShareReady: se,
        shareConversation: ee,
        shareTarget: x,
        isStreaming: m,
        showArtifactCard: S,
        title: C,
        onOpen: le,
        children: V
    }), t[53] = a, t[54] = l, t[55] = le, t[56] = u, t[57] = se, t[58] = m, t[59] = ee, t[60] = x, t[61] = S, t[62] = V, t[63] = C, t[64] = k, t[65] = H) : H = t[65];
    let U;
    t[66] !== E || t[67] !== H ? (U = (0, $.jsx)(`div`, {
        hidden: E,
        children: H
    }), t[66] = E, t[67] = H, t[68] = U) : U = t[68];
    let W;
    return t[69] !== be || t[70] !== U ? (W = (0, $.jsxs)($.Fragment, {
        children: [be, U]
    }), t[69] = be, t[70] = U, t[71] = W) : W = t[71], W
}

function Zn(e) {
    "use forget";
    let t = (0, hr.c)(14),
        {
            action: n,
            className: r,
            fallbackTitle: i,
            leading: a,
            title: o,
            titleClassName: s
        } = e,
        c;
    t[0] === r ? c = t[1] : (c = k(`flex items-center justify-between gap-3`, r), t[0] = r, t[1] = c);
    let l = s ?? `truncate text-base font-semibold`,
        u;
    t[2] === l ? u = t[3] : (u = k(`text-token-text-primary`, l), t[2] = l, t[3] = u);
    let d = o ?? i,
        f;
    t[4] !== u || t[5] !== d ? (f = (0, $.jsx)(`div`, {
        className: `min-w-0`,
        children: (0, $.jsx)(`div`, {
            className: u,
            children: d
        })
    }), t[4] = u, t[5] = d, t[6] = f) : f = t[6];
    let p;
    t[7] !== a || t[8] !== f ? (p = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-3`,
        children: [a, f]
    }), t[7] = a, t[8] = f, t[9] = p) : p = t[9];
    let m;
    return t[10] !== n || t[11] !== c || t[12] !== p ? (m = (0, $.jsxs)(`div`, {
        className: c,
        children: [p, n]
    }), t[10] = n, t[11] = c, t[12] = p, t[13] = m) : m = t[13], m
}

function Qn(e) {
    "use forget";
    let t = (0, hr.c)(20),
        {
            canOpen: n,
            children: r,
            expandButtonRef: a,
            feedback: o,
            iconSvg: s,
            isShareReady: c,
            isStreaming: l,
            onOpen: u,
            shareConversation: d,
            shareTarget: f,
            showArtifactCard: p,
            title: m
        } = e,
        h = ce(),
        g;
    t[0] === h ? g = t[1] : (g = h.formatMessage({
        id: `6z1y4r`,
        defaultMessage: `App preview`
    }), t[0] = h, t[1] = g);
    let _ = g,
        v;
    t[2] !== n || t[3] !== r || t[4] !== a || t[5] !== _ || t[6] !== s || t[7] !== c || t[8] !== l || t[9] !== u || t[10] !== d || t[11] !== f || t[12] !== p || t[13] !== m ? (v = p ? (0, $.jsxs)(`div`, {
        className: k(`shadow-xxs border-token-border-default bg-token-bg-primary w-full min-w-0 overflow-clip rounded-3xl border`, l && `cursor-wait`),
        "data-testid": `app-block-artifact-card`,
        children: [(0, $.jsx)(Zn, {
            action: (0, $.jsx)(Mr, {
                canOpen: n,
                conversation: d,
                expandButtonRef: a,
                isReady: c,
                onOpen: u,
                target: f
            }),
            className: `min-h-13 px-4 py-2`,
            fallbackTitle: _,
            leading: l ? (0, $.jsx)(i, {
                className: `icon-md text-token-text-primary shrink-0`
            }) : (0, $.jsx)(ir, {
                iconSvg: s
            }),
            title: m
        }), (0, $.jsx)(`div`, {
            children: r
        })]
    }) : (0, $.jsx)(Nr, {
        conversation: d,
        isReady: c,
        target: f,
        children: r
    }), t[2] = n, t[3] = r, t[4] = a, t[5] = _, t[6] = s, t[7] = c, t[8] = l, t[9] = u, t[10] = d, t[11] = f, t[12] = p, t[13] = m, t[14] = v) : v = t[14];
    let y;
    t[15] === o ? y = t[16] : (y = o == null ? null : (0, $.jsx)(er, {
        ...o
    }), t[15] = o, t[16] = y);
    let b;
    return t[17] !== v || t[18] !== y ? (b = (0, $.jsxs)(`div`, {
        className: `group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,
        "data-app-block-preview": `true`,
        children: [v, y]
    }), t[17] = v, t[18] = y, t[19] = b) : b = t[19], b
}

function $n(e) {
    "use forget";
    let t = (0, hr.c)(18),
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
        u = f(ye),
        d = ce(),
        p;
    t[0] === d ? p = t[1] : (p = d.formatMessage({
        id: `chatgpt.app_block.preview_shell.fallback_title`,
        defaultMessage: `App preview`
    }), t[0] = d, t[1] = p);
    let m = p;
    if (Ne(u, {
            appBlockId: n,
            conversationId: r ?? null
        })) {
        let e;
        return t[2] !== a || t[3] !== l ? (e = (0, $.jsx)(nr, {
            iconSvg: a,
            title: l
        }), t[2] = a, t[3] = l, t[4] = e) : e = t[4], e
    }
    let h;
    t[5] !== m || t[6] !== a || t[7] !== c || t[8] !== l ? (h = c ? (0, $.jsx)(Zn, {
        className: `mb-2`,
        fallbackTitle: m,
        leading: (0, $.jsx)(ir, {
            iconSvg: a
        }),
        title: l
    }) : null, t[5] = m, t[6] = a, t[7] = c, t[8] = l, t[9] = h) : h = t[9];
    let g;
    t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (g = {
        minHeight: gr
    }, t[10] = g) : g = t[10];
    let _;
    t[11] !== i || t[12] !== o || t[13] !== s ? (_ = (0, $.jsx)(`div`, {
        className: `relative w-full`,
        style: g,
        children: i ? (0, $.jsx)(mr, {
            onRetry: o
        }) : (0, $.jsx)(pr, {
            label: s
        })
    }), t[11] = i, t[12] = o, t[13] = s, t[14] = _) : _ = t[14];
    let v;
    return t[15] !== h || t[16] !== _ ? (v = (0, $.jsxs)(`div`, {
        className: `group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,
        "data-app-block-preview": `true`,
        children: [h, _]
    }), t[15] = h, t[16] = _, t[17] = v) : v = t[17], v
}

function er(e) {
    "use forget";
    let t = (0, hr.c)(5),
        {
            reference: n,
            target: r
        } = e,
        [i, a] = (0, Q.useState)(!1);
    if (f(tr)) return null;
    let o;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, $.jsx)(Te, {}), t[0] = o) : o = t[0];
    let s;
    return t[1] !== i || t[2] !== n || t[3] !== r ? (s = (0, $.jsx)(`div`, {
        className: `flex justify-end pt-1`,
        children: (0, $.jsx)($e, {
            onOpenChange: a,
            open: i,
            reference: n,
            target: r,
            triggerButton: o
        })
    }), t[1] = i, t[2] = n, t[3] = r, t[4] = s) : s = t[4], s
}

function tr() {
    return Ze()
}

function nr(e) {
    "use forget";
    let t = (0, hr.c)(23),
        {
            iconSvg: n,
            onOpen: r,
            openButtonRef: i,
            title: a
        } = e,
        o = ce(),
        s, c, l, u, d;
    t[0] !== o || t[1] !== r || t[2] !== i || t[3] !== a ? (c = o.formatMessage({
        id: `XBBNdF`,
        defaultMessage: `App preview`
    }), d = `not-prose relative clear-both my-4 w-full max-w-full`, u = `shadow-xxs border-token-border-default bg-token-bg-primary text-token-text-primary flex h-20 w-full min-w-0 items-center gap-3 overflow-clip rounded-3xl border p-4`, s = Zn, l = r == null ? void 0 : (0, $.jsx)(A, {
        ref: i,
        color: `secondary`,
        label: o.formatMessage({
            id: `chatgpt.app_block.collapsed_preview.open.aria_label`,
            defaultMessage: `Open {title} in side pane`
        }, {
            title: a ?? c
        }),
        onClick: r,
        type: `button`,
        children: (0, $.jsx)(P, {
            id: `chatgpt.app_block.collapsed_preview.open`,
            defaultMessage: `Open`
        })
    }), t[0] = o, t[1] = r, t[2] = i, t[3] = a, t[4] = s, t[5] = c, t[6] = l, t[7] = u, t[8] = d) : (s = t[4], c = t[5], l = t[6], u = t[7], d = t[8]);
    let f;
    t[9] === n ? f = t[10] : (f = (0, $.jsx)(rr, {
        iconSvg: n
    }), t[9] = n, t[10] = f);
    let p;
    t[11] !== s || t[12] !== c || t[13] !== l || t[14] !== f || t[15] !== a ? (p = (0, $.jsx)(s, {
        action: l,
        className: `w-full`,
        fallbackTitle: c,
        leading: f,
        title: a,
        titleClassName: `truncate text-[17px] leading-6 font-medium tracking-[-0.43px]`
    }), t[11] = s, t[12] = c, t[13] = l, t[14] = f, t[15] = a, t[16] = p) : p = t[16];
    let m;
    t[17] !== u || t[18] !== p ? (m = (0, $.jsx)(`div`, {
        className: u,
        children: p
    }), t[17] = u, t[18] = p, t[19] = m) : m = t[19];
    let h;
    return t[20] !== d || t[21] !== m ? (h = (0, $.jsx)(`div`, {
        className: d,
        children: m
    }), t[20] = d, t[21] = m, t[22] = h) : h = t[22], h
}

function rr(e) {
    "use forget";
    let t = (0, hr.c)(2),
        {
            iconSvg: n
        } = e,
        r;
    return t[0] === n ? r = t[1] : (r = (0, $.jsx)(`div`, {
        className: `bg-token-bg-tertiary flex size-12 shrink-0 items-center justify-center rounded-xl`,
        children: (0, $.jsx)(ir, {
            className: `text-token-text-secondary`,
            iconSvg: n
        })
    }), t[0] = n, t[1] = r), r
}

function ir(e) {
    "use forget";
    let t = (0, hr.c)(5),
        {
            className: n,
            iconSvg: r
        } = e,
        i = n === void 0 ? `text-token-text-primary` : n,
        a;
    t[0] === r ? a = t[1] : (a = ar(r), t[0] = r, t[1] = a);
    let o = a,
        s;
    return t[2] !== i || t[3] !== o ? (s = o == null ? (0, $.jsx)(Le, {
        "aria-hidden": `true`,
        className: k(`icon-md shrink-0`, i)
    }) : (0, $.jsx)(`span`, {
        "aria-hidden": `true`,
        className: k(`icon-md shrink-0`, i),
        children: (0, $.jsx)(_e, {
            svgString: o,
            className: `h-full w-full`
        })
    }), t[2] = i, t[3] = o, t[4] = s) : s = t[4], s
}

function ar(e) {
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
        if (c && s.trim() !== `` || !c && !or(s)) return null
    }
    return t.slice(n).trim() === `` && r && i ? t : null
}

function or(e) {
    let t = e.replace(Er, ``).trim();
    if (t !== `` && t !== `/`) return !1;
    for (let t of e.matchAll(Er)) {
        let e = t[1],
            n = t[2];
        if (!Or.has(e) || !sr(e, n)) return !1
    }
    return !0
}

function sr(e, t) {
    return e === `xmlns` ? t === `http://www.w3.org/2000/svg` : e === `fill` ? t === `currentColor` || t === `none` : e === `width` || e === `height` ? /^\d+(\.\d+)?$/.test(t) : e === `viewBox` ? /^[\d.\-\s]+$/.test(t) : e === `d` && /^[AaCcHhLlMmQqSsTtVvZz0-9,.\-\s]+$/.test(t)
}

function cr(e) {
    "use forget";
    let t = (0, hr.c)(9),
        {
            onView: n,
            title: r
        } = e,
        i = ce(),
        a;
    t[0] === i ? a = t[1] : (a = i.formatMessage({
        id: `UPARFQ`,
        defaultMessage: `app`
    }), t[0] = i, t[1] = a);
    let o = r ?? a,
        s;
    t[2] === o ? s = t[3] : (s = (0, $.jsx)(`span`, {
        children: (0, $.jsx)(P, {
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
            children: (0, $.jsx)(P, {
                id: `chatgpt.app_block.history_separator`,
                defaultMessage: `•`
            })
        }), (0, $.jsx)(`button`, {
            className: `text-token-text-secondary hover:text-token-text-primary font-semibold transition-colors`,
            onClick: e => {
                n(e.currentTarget)
            },
            type: `button`,
            children: (0, $.jsx)(P, {
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

function lr(e) {
    "use forget";
    let t = (0, hr.c)(12),
        {
            className: n,
            onClick: r,
            ref: i
        } = e,
        a = ce(),
        o;
    t[0] === a ? o = t[1] : (o = a.formatMessage({
        id: `I094Lq`,
        defaultMessage: `Open app`
    }), t[0] = a, t[1] = o);
    let s = o,
        c;
    t[2] === r ? c = t[3] : (c = e => {
        e.stopPropagation(), r()
    }, t[2] = r, t[3] = c);
    let l;
    t[4] !== s || t[5] !== i || t[6] !== c ? (l = (0, $.jsx)(A, {
        ref: i,
        type: `button`,
        icon: Ie,
        color: `ghost`,
        size: `medium`,
        label: s,
        className: `size-9 rounded-full border-0 px-2 py-2 shadow-none`,
        onClick: c
    }), t[4] = s, t[5] = i, t[6] = c, t[7] = l) : l = t[7];
    let u;
    return t[8] !== n || t[9] !== s || t[10] !== l ? (u = (0, $.jsx)(v, {
        label: s,
        className: n,
        children: l
    }), t[8] = n, t[9] = s, t[10] = l, t[11] = u) : u = t[11], u
}

function ur(e) {
    "use forget";
    let t = (0, hr.c)(190),
        {
            appBlockId: n,
            additionalResourceDomains: r,
            bind: i,
            clientThreadId: a,
            code: o,
            id: s,
            captureConsoleMessages: c,
            inlineHeight: l,
            isStreaming: u,
            onConsoleMessagesChange: m,
            onReadyChange: h,
            presentationSurface: g,
            previewLoadingLabel: _,
            progressiveStreaming: v,
            isSavedInlineLoad: y,
            ref: ee,
            styleMode: x,
            surface: S,
            title: te,
            variant: C,
            widgetRefSeenAtMs: w
        } = e,
        T = u !== void 0 && u,
        E = v !== void 0 && v,
        D = y !== void 0 && y,
        ne = x === void 0 ? `default` : x,
        O = S === void 0 ? `inline` : S,
        A = C === void 0 ? `inline` : C,
        j = ce(),
        M = (0, Q.useRef)(null),
        ie = (0, Q.useRef)(null),
        ae = He(i),
        [oe, le] = (0, Q.useState)(ae.values),
        F = b(oe, ae.values) ? oe : ae.values;
    F !== oe && le(F);
    let ue = [...ae.callbacks.keys()],
        [I, L] = (0, Q.useState)(ue),
        de = b(I, ue) ? I : ue;
    de !== I && L(de);
    let fe = (0, Q.useRef)(F),
        pe = (0, Q.useRef)(de),
        me = (0, Q.useRef)(ae.callbacks),
        he = i != null,
        ge = (0, Q.useRef)(!1),
        R = (0, Q.useRef)(!1),
        _e = (0, Q.useRef)(null),
        ve = (0, Q.useRef)(null),
        z = (0, Q.useRef)(null),
        B = (0, Q.useRef)(null),
        ye = (0, Q.useRef)(null),
        be = (0, Q.useRef)(null),
        V = (0, Q.useRef)(null),
        H = (0, Q.useRef)(null),
        U = (0, Q.useRef)(0),
        W = (0, Q.useRef)(null),
        xe = (0, Q.useRef)(null),
        Se;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (Se = [], t[0] = Se) : Se = t[0];
    let Ce = (0, Q.useRef)(Se),
        we = p(),
        Te = f(se),
        {
            isInternalPreview: Ee,
            networkPolicy: De
        } = (0, Q.useContext)(Oe),
        ke = De === void 0 ? `none` : De,
        Ae = Je() || Ee,
        je = Ke(a) && !Ee,
        Me = je || Ee && ke === `deps-only`,
        G = we ? `dark` : `light`,
        Ne = j.locale,
        Pe;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (Pe = {
        status: `streaming`
    }, t[1] = Pe) : Pe = t[1];
    let [Fe, Ie] = (0, Q.useState)(Pe), Le = Fe.status === `finalized` && Fe.html !== o, Re = E && !T && (A === `artifact` || Fe.status === `failed`), K = E && O === `inline` && Fe.status !== `static` && !Re && !Le, ze = K && T && A === `artifact` && !qn(o), Ge = ze ? 0 : _r, qe = l ?? `intrinsic-height`, Ye = Ae ? `execution-enabled` : `execution-disabled`, Xe = Me ? `network-enabled` : `network-disabled`, Ze = Ee ? `internal-preview` : `workspace-preview`, Qe = he ? `bindings-enabled` : `bindings-disabled`, $e = K ? `progressive-app-block-stream` : o, et;
    t[2] === r ? et = t[3] : (et = r ?? [], t[2] = r, t[3] = et);
    let tt;
    t[4] !== Te || t[5] !== Ne || t[6] !== ne || t[7] !== O || t[8] !== qe || t[9] !== Ye || t[10] !== Xe || t[11] !== Ze || t[12] !== Qe || t[13] !== $e || t[14] !== et || t[15] !== G ? (tt = [G, Te, O, qe, ne, Ne, Ye, Xe, Ze, Qe, $e, ...et], t[4] = Te, t[5] = Ne, t[6] = ne, t[7] = O, t[8] = qe, t[9] = Ye, t[10] = Xe, t[11] = Ze, t[12] = Qe, t[13] = $e, t[14] = et, t[15] = G, t[16] = tt) : tt = t[16];
    let nt = tt.join(`\0`),
        rt;
    t[17] === r ? rt = t[18] : (rt = en(r), t[17] = r, t[18] = rt);
    let it = rt,
        at = D ? `saved_inline` : void 0,
        ot = Me ? `deps_only` : `disabled`,
        st = O === `inline` ? A : void 0,
        ct = K ? `progressive` : `static`,
        lt;
    t[19] !== O || t[20] !== at || t[21] !== ot || t[22] !== st || t[23] !== ct ? (lt = {
        loadSource: at,
        networkPolicy: ot,
        surface: O,
        variant: st,
        renderMode: ct
    }, t[19] = O, t[20] = at, t[21] = ot, t[22] = st, t[23] = ct, t[24] = lt) : lt = t[24];
    let ut = lt,
        [dt, ft] = (0, Q.useState)(0),
        [pt, mt] = (0, Q.useState)(null),
        ht = pt?.signature === nt ? pt.status : null,
        J = ht === `ready`,
        gt = J || ht === `failed_after_ready`,
        _t = K && ht === `failed`,
        Y = !T && !K && ht === `failed`,
        vt = g ?? O,
        yt = vt === `stage` || l != null,
        bt = l == null ? O : `stage`,
        St = E && vt === `inline` && A === `inline`,
        wt = K && vt === `inline` && T && !Y,
        Tt;
    t[25] !== o || t[26] !== ut || t[27] !== w ? (Tt = {
        content: o,
        metricTags: ut,
        widgetRefSeenAtMs: w
    }, t[25] = o, t[26] = ut, t[27] = w, t[28] = Tt) : Tt = t[28];
    let {
        cancelFirstPaintFrame: Dt,
        startRunMetrics: Ot
    } = Et(Tt), kt, At;
    t[29] === J ? (kt = t[30], At = t[31]) : (kt = () => {
        J && be.current?.markFirstPaint()
    }, At = [J], t[29] = J, t[30] = kt, t[31] = At), d(kt, At);
    let jt, Mt;
    t[32] !== J || t[33] !== h ? (jt = () => {
        h?.(J)
    }, Mt = [J, h], t[32] = J, t[33] = h, t[34] = jt, t[35] = Mt) : (jt = t[34], Mt = t[35]), (0, Q.useEffect)(jt, Mt);
    let Nt, Pt;
    t[36] !== de || t[37] !== F || t[38] !== ae.callbacks ? (Nt = () => {
        fe.current = F, pe.current = de, me.current = ae.callbacks
    }, Pt = [de, F, ae.callbacks], t[36] = de, t[37] = F, t[38] = ae.callbacks, t[39] = Nt, t[40] = Pt) : (Nt = t[39], Pt = t[40]), d(Nt, Pt);
    let Ft;
    t[41] === Symbol.for(`react.memo_cache_sentinel`) ? (Ft = e => {
        ie.current === e && M.current?.updateAppBlockMessenger?.(We(e, fe.current, pe.current))
    }, t[41] = Ft) : Ft = t[41];
    let It = N(Ft),
        Lt;
    t[42] === It ? Lt = t[43] : (Lt = e => {
        let t = ie.current;
        if (t == null) return;
        let n = Ue(e, t),
            r = n && me.current.get(n.name);
        if (n != null && r) {
            let e = () => {
                re.postTask(() => It(t))
            };
            try {
                Promise.resolve(r(...n.args)).then(e, e)
            } catch {
                e()
            }
        }
    }, t[42] = It, t[43] = Lt);
    let Rt = N(Lt),
        zt;
    t[44] !== he || t[45] !== J || t[46] !== It ? (zt = () => {
        let e = ie.current;
        !J || !he || e == null || It(e)
    }, t[44] = he, t[45] = J, t[46] = It, t[47] = zt) : zt = t[47];
    let Bt;
    t[48] !== de || t[49] !== F || t[50] !== he || t[51] !== J || t[52] !== It ? (Bt = [de, F, he, J, It], t[48] = de, t[49] = F, t[50] = he, t[51] = J, t[52] = It, t[53] = Bt) : Bt = t[53], (0, Q.useEffect)(zt, Bt);
    let Vt, Ht;
    t[54] !== l || t[55] !== J || t[56] !== g ? (Vt = () => {
        !J || g == null || M.current?.updateAppBlockSurface?.(l == null ? g : `stage`)
    }, Ht = [l, J, g], t[54] = l, t[55] = J, t[56] = g, t[57] = Vt, t[58] = Ht) : (Vt = t[57], Ht = t[58]), (0, Q.useEffect)(Vt, Ht);
    let Ut, Wt;
    t[59] === Symbol.for(`react.memo_cache_sentinel`) ? (Ut = () => ({
        clearCapturedConsoleMessages: () => {
            Ce.current = []
        },
        captureScreenshotDataUrl: async () => (await M.current?.screenshot())?.imageBase64 ?? null,
        focus: () => {
            M.current?.focus()
        }
    }), Wt = [], t[59] = Ut, t[60] = Wt) : (Ut = t[59], Wt = t[60]), (0, Q.useImperativeHandle)(ee, Ut, Wt);
    let Gt;
    t[61] === Symbol.for(`react.memo_cache_sentinel`) ? (Gt = () => {
        W.current != null && (window.clearTimeout(W.current), W.current = null)
    }, t[61] = Gt) : Gt = t[61];
    let Kt = N(Gt),
        qt;
    t[62] === Symbol.for(`react.memo_cache_sentinel`) ? (qt = () => {
        xe.current != null && (window.clearTimeout(xe.current), xe.current = null)
    }, t[62] = qt) : qt = t[62];
    let X = N(qt),
        Jt;
    t[63] !== J || t[64] !== K ? (Jt = () => {
        if (!K || !J || ye.current == null) return;
        let e = B.current,
            t = M.current;
        if (e == null || t?.updateAppBlockStream == null || R.current) return;
        let n = U.current;
        B.current = null, ve.current = xt(), z.current = e.html, e.isFinal && (R.current = !0);
        let r = () => U.current !== n || ye.current == null ? Promise.resolve() : t.updateAppBlockStream?.(e) ?? Promise.resolve(),
            i = H.current,
            a = i == null ? r() : i.then(r);
        H.current = a, a.then(() => {
            H.current === a && (H.current = null);
            let t = ye.current;
            U.current !== n || t == null || (qn(e.html) && t.markFirstPaint(), e.isFinal && (t.reportPayloadSize(e.html), Ie({
                status: `finalized`,
                html: e.html
            })))
        }, e => {
            H.current === a && (H.current = null), U.current === n && (e instanceof DOMException && e.name === `AbortError` || V.current?.(`stream_update`, Ct(e)))
        })
    }, t[63] = J, t[64] = K, t[65] = Jt) : Jt = t[65];
    let Yt = N(Jt),
        Xt;
    t[66] !== Te || t[67] !== Me || t[68] !== c || t[69] !== Kt || t[70] !== X || t[71] !== o || t[72] !== bt || t[73] !== he || t[74] !== Ae || t[75] !== Le || t[76] !== D || t[77] !== T || t[78] !== Ne || t[79] !== m || t[80] !== h || t[81] !== g || t[82] !== nt || t[83] !== Fe.status || t[84] !== Re || t[85] !== K || t[86] !== Ot || t[87] !== ne || t[88] !== G ? (Xt = () => {
        if (!Ae) return;
        if (Fe.status === `failed`) {
            if (T) return;
            Ie({
                status: `static`
            }), ft(fr);
            return
        }(Le || Re && Fe.status !== `static`) && Ie({
            status: `static`
        });
        let e = K && M.current?.updateAppBlockStream != null;
        if (K && !e) {
            T || Ie({
                status: `static`
            });
            return
        }
        ge.current = !0, R.current = !1, _e.current = null, ve.current = null, z.current = null, B.current = null, ye.current = null, be.current = null, V.current = null, H.current = null, X(), U.current += 1;
        let t = U.current;
        Kt(), mt(null), ie.current = he ? crypto.randomUUID() : null;
        let {
            expectReadySignal: n,
            html: r,
            frameColorScheme: i
        } = tn(o, G, Ne, Te, bt, {
            loadTailwind: Me,
            progressiveStreaming: e,
            syncPresentationSurface: g != null,
            styleMode: ne
        }), a = !1, s = !1, l = !1, u = !1, d = !1, f = () => U.current === t, p = () => e && s, _ = Ot(f, {
            deferFirstPaint: e || D,
            deferPayloadSize: e
        });
        D && (be.current = _), e && (ye.current = _);
        let v = e => {
                !c || m == null || !f() || (Ce.current = e, !u && (u = !0, re.postTask(() => {
                    u = !1, f() && m(Ce.current)
                }, {
                    priority: `background`
                })))
            },
            y = e => {
                if (!(!f() || a || l)) {
                    if (a = !0, Kt(), _.markReady(e), D) {
                        s = !0, mt({
                            signature: nt,
                            status: `ready`
                        });
                        return
                    }
                    d || (d = !0, re.postTask(() => {
                        d = !1, !(!f() || l) && (s = !0, mt({
                            signature: nt,
                            status: `ready`
                        }))
                    }, {
                        priority: `background`
                    }))
                }
            },
            b = (t, n) => {
                !f() || l || (l = !0, Kt(), X(), B.current = null, ye.current = null, e && Ie({
                    status: `failed`
                }), mt({
                    signature: nt,
                    status: p() ? `failed_after_ready` : `failed`,
                    readyTimedOut: n === `ready_timeout`
                }), _.reportFailure(t, n), re.postTask(() => {
                    f() && (e ? h?.(!1) : h?.(!1, `failure`))
                }, {
                    priority: `background`
                }))
            };
        V.current = b, Ce.current = [], v([]), W.current = window.setTimeout(() => {
            b(`sandbox_eval`, `ready_timeout`)
        }, yr), (async () => {
            let e = M.current?.evalAsync({
                code: r,
                ...ie.current == null ? {} : {
                    additionalGlobals: {
                        __appBlockMessenger: We(ie.current, fe.current, pe.current)
                    }
                },
                expectReadySignal: n,
                language: `html`,
                frameColorScheme: i,
                shouldPreservePreviewOnFatalError: () => f() && p()
            });
            if (e == null) {
                b(`sandbox_eval`, `missing_generator`);
                return
            }
            for (;;) {
                let t = await e.next();
                if (t.done) {
                    f() && !a && b(`sandbox_eval`, `generator_completed_without_ready`);
                    break
                }
                f() && (v([...Ce.current, t.value]), t.value.type === Ve.ENVIRONMENT_STATUS && t.value.status === Be.RUNNING_CODE && y(`running_code`), t.value.type === Ve.RUN_COMPLETE && (t.value.wasFatalError ? b(`runtime`, `fatal_runtime_error`) : (y(`run_complete`), _.reportSuccess(`run_complete`))), await re.yield())
            }
        })().catch(e => {
            f() && (e instanceof DOMException && e.name === `AbortError` || b(`sandbox_eval`, Ct(e)))
        })
    }, t[66] = Te, t[67] = Me, t[68] = c, t[69] = Kt, t[70] = X, t[71] = o, t[72] = bt, t[73] = he, t[74] = Ae, t[75] = Le, t[76] = D, t[77] = T, t[78] = Ne, t[79] = m, t[80] = h, t[81] = g, t[82] = nt, t[83] = Fe.status, t[84] = Re, t[85] = K, t[86] = Ot, t[87] = ne, t[88] = G, t[89] = Xt) : Xt = t[89];
    let Zt = N(Xt),
        Qt;
    t[90] !== Kt || t[91] !== X ? (Qt = () => {
        U.current += 1, ge.current = !1, R.current = !1, _e.current = null, z.current = null, B.current = null, ye.current = null, V.current = null, H.current = null, Kt(), X(), mt(null), ft(dr)
    }, t[90] = Kt, t[91] = X, t[92] = Qt) : Qt = t[92];
    let $t = N(Qt),
        nn;
    t[93] !== yt || t[94] !== vt ? (nn = vt === `inline` && !yt ? {
        margin: -4,
        width: `calc(100% + ${vr*2}px)`
    } : void 0, t[93] = yt, t[94] = vt, t[95] = nn) : nn = t[95];
    let rn = nn,
        an;
    t[96] !== Dt || t[97] !== Kt || t[98] !== X || t[99] !== Zt ? (an = () => {
        Zt();
        let e = M.current;
        return () => {
            U.current += 1, ie.current = null, ye.current = null, be.current = null, V.current = null, H.current = null, Kt(), X(), Dt(), e?.stop()
        }
    }, t[96] = Dt, t[97] = Kt, t[98] = X, t[99] = Zt, t[100] = an) : an = t[100];
    let on;
    t[101] !== Dt || t[102] !== Kt || t[103] !== X || t[104] !== Ae || t[105] !== nt || t[106] !== Zt || t[107] !== dt ? (on = [Dt, Kt, X, Ae, nt, Zt, dt], t[101] = Dt, t[102] = Kt, t[103] = X, t[104] = Ae, t[105] = nt, t[106] = Zt, t[107] = dt, t[108] = on) : on = t[108], (0, Q.useEffect)(an, on);
    let sn, cn;
    t[109] !== T || t[110] !== Zt || t[111] !== K ? (sn = () => {
        !K || T || ge.current || M.current?.updateAppBlockStream != null || Zt()
    }, cn = [T, Zt, K], t[109] = T, t[110] = Zt, t[111] = K, t[112] = sn, t[113] = cn) : (sn = t[112], cn = t[113]), (0, Q.useEffect)(sn, cn);
    let ln, un;
    if (t[114] !== X || t[115] !== o || t[116] !== Yt || t[117] !== Y || t[118] !== J || t[119] !== T || t[120] !== K || t[121] !== A ? (ln = () => {
            if (!K || !J || Y || R.current || M.current?.updateAppBlockStream == null) return;
            let e = T ? Kn(o) : o;
            if (T && (B.current?.html ?? z.current) === e) return;
            if (B.current = {
                    html: e,
                    isFinal: !T
                }, !T) {
                X(), Yt();
                return
            }
            let t = ve.current;
            if (t == null && A === `artifact` && (_e.current ??= xt(), t = _e.current), t == null) {
                Yt();
                return
            }
            let n = A === `artifact` ? xr : br,
                r = xt() - t;
            if (r >= n) {
                Yt();
                return
            }
            return xe.current = window.setTimeout(() => {
                xe.current = null, Yt()
            }, n - r), X
        }, un = [X, o, Yt, Y, J, T, K, A], t[114] = X, t[115] = o, t[116] = Yt, t[117] = Y, t[118] = J, t[119] = T, t[120] = K, t[121] = A, t[122] = ln, t[123] = un) : (ln = t[122], un = t[123]), (0, Q.useEffect)(ln, un), !Ae) {
        let e;
        return t[124] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(En, {}), t[124] = e) : e = t[124], e
    }
    let dn = St && `flex-col`,
        fn = vt === `inline` && (ze ? `h-0 min-h-0 overflow-hidden` : `min-h-[120px] overflow-visible`),
        pn = vt === `stage` && `h-full min-h-0`,
        mn;
    t[125] !== dn || t[126] !== fn || t[127] !== pn ? (mn = k(`flex w-full`, dn, fn, pn), t[125] = dn, t[126] = fn, t[127] = pn, t[128] = mn) : mn = t[128];
    let hn;
    t[129] !== St || t[130] !== wt || t[131] !== te ? (hn = St ? (0, $.jsx)(In, {
        isVisible: wt,
        title: te
    }) : null, t[129] = St, t[130] = wt, t[131] = te, t[132] = hn) : hn = t[132];
    let gn = !T && !K && (ht === `failed` || ht === `failed_after_ready`) && pt?.readyTimedOut || void 0,
        _n = vt === `inline` && !yt ? `flex-none` : `w-full`,
        vn = wt && `mask-shimmer mask-shimmer-duration-2800 motion-reduce:animate-none`,
        yn;
    t[133] !== _n || t[134] !== vn ? (yn = k(`relative min-w-0`, _n, vn), t[133] = _n, t[134] = vn, t[135] = yn) : yn = t[135];
    let bn;
    t[136] !== l || t[137] !== rn || t[138] !== vt ? (bn = vt === `inline` && l != null ? {
        height: l
    } : rn, t[136] = l, t[137] = rn, t[138] = vt, t[139] = bn) : bn = t[139];
    let xn = `${dt}:${Me?`network-enabled`:`network-disabled`}:${Ee?`internal-preview`:`workspace-preview`}`,
        Sn;
    t[140] !== n || t[141] !== a || t[142] !== s ? (Sn = JSON.stringify([a ?? null, n ?? s]), t[140] = n, t[141] = a, t[142] = s, t[143] = Sn) : Sn = t[143];
    let Cn;
    t[144] === j ? Cn = t[145] : (Cn = j.formatMessage({
        id: `gxcrdR`,
        defaultMessage: `App block preview`
    }), t[144] = j, t[145] = Cn);
    let wn = Me ? `deps-only` : `none`,
        Tn = je ? Sr : Cr,
        Dn = gt ? 0 : -1,
        On = he ? Rt : void 0,
        kn = vt === `inline` && !yt,
        An = !yt,
        jn = K ? Ge : gr,
        Mn;
    t[146] !== s || t[147] !== Ee || t[148] !== Zt || t[149] !== it || t[150] !== xn || t[151] !== Sn || t[152] !== Cn || t[153] !== wn || t[154] !== Tn || t[155] !== Dn || t[156] !== On || t[157] !== kn || t[158] !== An || t[159] !== jn ? (Mn = (0, $.jsx)(q, {
        id: s,
        sandboxOriginId: Sn,
        title: Cn,
        visuallyHidden: !1,
        networkPolicy: wn,
        disableExternalNavigation: Ee,
        additionalResourceDomains: it,
        sandboxPermissions: Tn,
        disablePermissions: !0,
        enableTransition: !1,
        enableAnimation: !1,
        iframeTabIndex: Dn,
        onRetryCodeRun: Zt,
        onAppBlockMessage: On,
        transparentBackground: kn,
        useIntrinsicHeight: An,
        intrinsicHeightFallback: jn,
        ref: M
    }, xn), t[146] = s, t[147] = Ee, t[148] = Zt, t[149] = it, t[150] = xn, t[151] = Sn, t[152] = Cn, t[153] = wn, t[154] = Tn, t[155] = Dn, t[156] = On, t[157] = kn, t[158] = An, t[159] = jn, t[160] = Mn) : Mn = t[160];
    let Nn;
    t[161] === wt ? Nn = t[162] : (Nn = wt ? (0, $.jsx)(`div`, {
        "aria-hidden": `true`,
        className: `absolute inset-0 z-10 cursor-wait`
    }) : null, t[161] = wt, t[162] = Nn);
    let Pn;
    t[163] !== _t || t[164] !== Y || t[165] !== gt || t[166] !== _ || t[167] !== K ? (Pn = !gt && !Y && (!K || _t) ? (0, $.jsx)(pr, {
        label: _
    }) : null, t[163] = _t, t[164] = Y, t[165] = gt, t[166] = _, t[167] = K, t[168] = Pn) : Pn = t[168];
    let Fn;
    t[169] !== Y || t[170] !== $t ? (Fn = Y ? (0, $.jsx)(mr, {
        onRetry: $t
    }) : null, t[169] = Y, t[170] = $t, t[171] = Fn) : Fn = t[171];
    let Z;
    t[172] !== wt || t[173] !== gn || t[174] !== yn || t[175] !== bn || t[176] !== Mn || t[177] !== Nn || t[178] !== Pn || t[179] !== Fn ? (Z = (0, $.jsxs)(`div`, {
        "aria-busy": wt,
        "data-app-block-ready-timeout": gn,
        className: yn,
        style: bn,
        children: [Mn, Nn, Pn, Fn]
    }), t[172] = wt, t[173] = gn, t[174] = yn, t[175] = bn, t[176] = Mn, t[177] = Nn, t[178] = Pn, t[179] = Fn, t[180] = Z) : Z = t[180];
    let Ln;
    t[181] !== _ || t[182] !== wt || t[183] !== A ? (Ln = wt && A === `artifact` ? (0, $.jsx)(`span`, {
        "aria-atomic": `true`,
        "aria-live": `polite`,
        className: `sr-only`,
        role: `status`,
        children: _ ?? (0, $.jsx)(P, {
            id: `chatgpt.app_block.preview_loading`,
            defaultMessage: `Loading app`
        })
    }) : null, t[181] = _, t[182] = wt, t[183] = A, t[184] = Ln) : Ln = t[184];
    let Rn;
    return t[185] !== mn || t[186] !== hn || t[187] !== Z || t[188] !== Ln ? (Rn = (0, $.jsxs)(`div`, {
        className: mn,
        children: [hn, Z, Ln]
    }), t[185] = mn, t[186] = hn, t[187] = Z, t[188] = Ln, t[189] = Rn) : Rn = t[189], Rn
}

function dr(e) {
    return e + 1
}

function fr(e) {
    return e + 1
}

function pr(e) {
    "use forget";
    let t = (0, hr.c)(5),
        {
            label: n
        } = e,
        r;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, $.jsx)(i, {
        className: `icon-sm text-token-text-tertiary`
    }), t[0] = r) : r = t[0];
    let a;
    t[1] === n ? a = t[2] : (a = n ?? (0, $.jsx)(P, {
        id: `chatgpt.app_block.preview_loading`,
        defaultMessage: `Loading app`
    }), t[1] = n, t[2] = a);
    let o;
    return t[3] === a ? o = t[4] : (o = (0, $.jsxs)(`div`, {
        "aria-live": `polite`,
        className: `bg-primary absolute inset-0 z-10 flex cursor-wait items-center justify-center gap-2 text-sm`,
        role: `status`,
        children: [r, (0, $.jsx)(`span`, {
            className: `text-token-text-secondary`,
            children: a
        })]
    }), t[3] = a, t[4] = o), o
}

function mr(e) {
    "use forget";
    let t = (0, hr.c)(4),
        {
            onRetry: n
        } = e,
        r;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, $.jsx)(`p`, {
        className: `text-token-text-secondary text-sm`,
        children: (0, $.jsx)(P, {
            id: `chatgpt.app_block.preview_load_failed`,
            defaultMessage: `This app couldn't load.`
        })
    }), t[0] = r) : r = t[0];
    let i;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, $.jsx)(P, {
        id: `chatgpt.app_block.preview_retry`,
        defaultMessage: `Try again`
    }), t[1] = i) : i = t[1];
    let a;
    return t[2] === n ? a = t[3] : (a = (0, $.jsxs)(`div`, {
        className: `bg-primary absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 px-6 text-center`,
        role: `alert`,
        children: [r, (0, $.jsx)(A, {
            type: `button`,
            color: `secondary`,
            size: `small`,
            onClick: n,
            children: i
        })]
    }), t[2] = n, t[3] = a), a
}
var hr, Q, $, gr, _r, vr, yr, br, xr, Sr, Cr, wr, Tr, Er, Dr, Or, kr, Ar, jr, Mr, Nr, Pr = e((() => {
    hr = ue(), l(), Xe(), H(), De(), E(), ee(), Ye(), g(), K(), Re(), ze(), ge(), qe(), w(), Ce(), ut(), ct(), be(), C(), T(), O(), me(), r(), oe(), o(), y(), Qe(), dt(), B(), Ge(), c(), ae(), Q = n(le()), fe(), fn(), It(), yt(), Tn(), V(), kn(), gn(), Ln(), nt(), Se(), W(), rt(), Wn(), $ = I(), gr = 432, _r = 120, vr = 4, yr = 15e3, br = 100, xr = 350, Sr = `allow-scripts allow-same-origin allow-forms`, Cr = `allow-scripts allow-same-origin`, wr = 12e3, Tr = /<\/?([a-zA-Z][\w:-]*)(\s[^<>]*)?>/g, Er = /([a-zA-Z_:][\w:.-]*)\s*=\s*"([^"]*)"/g, Dr = new Set([`svg`, `path`]), Or = new Set([`d`, `fill`, `height`, `viewBox`, `width`, `xmlns`]), kr = /<script(?:\s|>)/i, Ar = `script, style, template, link, meta, title, [hidden], [style*="display:none" i], [style*="visibility:hidden" i]`, jr = `audio, br, button, canvas, embed, hr, iframe, img, input, meter, object, picture, progress, select, svg, table, textarea, video`, Mr = e => {
        "use forget";
        let t = (0, hr.c)(13),
            {
                canOpen: n,
                conversation: r,
                expandButtonRef: i,
                isReady: a,
                onOpen: o,
                target: s
            } = e,
            c;
        t[0] !== n || t[1] !== i || t[2] !== o ? (c = n && o != null ? (0, $.jsx)(lr, {
            ref: i,
            className: `shrink-0`,
            onClick: o
        }) : null, t[0] = n, t[1] = i, t[2] = o, t[3] = c) : c = t[3];
        let l = c;
        if (r == null) return l;
        let u;
        t[4] === s ? u = t[5] : (u = s ?? {
            contentReferenceIndex: -1,
            messageId: ``
        }, t[4] = s, t[5] = u);
        let d = u,
            f = a && s != null,
            p;
        t[6] === l ? p = t[7] : (p = e => {
            let {
                isVisible: t,
                label: n,
                onSelect: r
            } = e;
            return t ? (0, $.jsxs)(`div`, {
                className: `flex shrink-0 items-center gap-1`,
                children: [(0, $.jsx)(v, {
                    label: n,
                    children: (0, $.jsx)(A, {
                        type: `button`,
                        icon: Fe,
                        color: `ghost`,
                        size: `medium`,
                        label: n,
                        className: `size-9 rounded-full border-0 px-2 py-2 shadow-none`,
                        onClick: e => {
                            e.stopPropagation(), r()
                        }
                    })
                }), l]
            }) : l
        }, t[6] = l, t[7] = p);
        let m;
        return t[8] !== d || t[9] !== r || t[10] !== f || t[11] !== p ? (m = (0, $.jsx)(ft, {
            category: U.AppBlock,
            conversation: r,
            isReady: f,
            target: d,
            children: p
        }), t[8] = d, t[9] = r, t[10] = f, t[11] = p, t[12] = m) : m = t[12], m
    }, Nr = e => {
        "use forget";
        let t = (0, hr.c)(9),
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
                    children: (0, $.jsx)(pt, {
                        action: e
                    })
                })
            }) : null]
        }), t[2] = n, t[3] = l);
        let u;
        return t[4] !== s || t[5] !== r || t[6] !== c || t[7] !== l ? (u = (0, $.jsx)(ft, {
            category: U.InlineAppBlock,
            conversation: r,
            isReady: c,
            target: s,
            children: l
        }), t[4] = s, t[5] = r, t[6] = c, t[7] = l, t[8] = u) : u = t[8], u
    }
}));
export {
    Gn as a, Wn as c, Tn as d, xt as f, Y as g, vt as h, ur as i, bn as l, yt as m, nr as n, Pr as o, It as p, pr as r, Rn as s, Jn as t, xn as u
};
//# sourceMappingURL=e3b746a6-l03ryumaq56c1nhz.js.map