const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/7aa2b76f-lzr6phm06oy25wum.js","assets/f025431a-ehagpvg3m4e1cduv.js","assets/4813494d-bo7e0c29ngt4zgx0.js","assets/2340486e-i7pjxgdhv0bs6apg.js","assets/root-lelxp0l2.css","assets/conversation-small-ikg0dwuw782klweb.js","assets/30901919-e8h11sw136qen6v0.js","assets/c470f5ab-ab47eubabs8jspdc.js","assets/0e5afe53-esm68l11os61djoy.js","assets/conversation-small-oilgsqfa.css","assets/8b34dbc2-dtawqv9t1aqckqj4.js","assets/82782bc9-fcii2id0x6lspwtj.js"])))=>i.map(i=>d[i]);
import{n as e,r as t,s as n}from"./f025431a-ehagpvg3m4e1cduv.js";import{CN as r,Gnt as i,Gp as a,Hp as o,JT as s,LN as c,Mz as l,N5 as u,P5 as d,RN as f,S2 as p,X0 as m,X5 as h,Xnt as g,Xy as _,Y5 as v,YT as y,Z0 as b,Znt as ee,Zy as x,art as S,bN as C,bU as w,dF as te,drt as T,el as E,fY as ne,frt as D,hF as re,jz as O,ll as k,pF as A,rY as j,rrt as ie,urt as M,vN as N,x2 as ae,xU as oe,yN as P}from"./4813494d-bo7e0c29ngt4zgx0.js";import{Bn as se,Ln as F,Nn as I,Rn as ce,Vn as le,cn as ue,ln as L,wn as de,zn as fe}from"./2340486e-i7pjxgdhv0bs6apg.js";import{$Nt as pe,C6 as me,D6 as R,M6 as he,MUn as ge,Mhn as z,N6 as _e,NUn as ve,O6 as B,P6 as ye,Phn as be,S6 as xe,_C as V,b6 as Se,cVn as Ce,cr as we,dd as Te,ePt as H,iA as Ee,iT as De,k6 as Oe,rT as ke,sA as Ae,sVn as je,sr as Me,tPt as Ne,ud as Pe,vC as U,w6 as Fe,x6 as Ie}from"./conversation-small-ikg0dwuw782klweb.js";import{bS as Le,n_ as Re,nb as ze,r_ as Be,rb as W,yS as Ve}from"./30901919-e8h11sw136qen6v0.js";import{n as He,r as Ue}from"./2ea88c7a-lxyla91xs6iv7odf.js";import{a as We,o as Ge,r as Ke,t as qe}from"./8d846022-bvik3sltoydb2o43.js";import{i as Je,n as Ye,r as Xe}from"./91969468-krj0j03x7rzzcnsp.js";import{n as G,t as Ze}from"./4d271a7b-c4kydxql9a3uefuu.js";import{n as Qe,r as $e}from"./58bafdef-g6g8glewe9cnq8cp.js";import{a as et,i as tt}from"./e01e2324-cbfr5offqgvi28tc.js";import{i as nt,t as rt}from"./5dc32f04-cag93sl5dr4ien19.js";import{c as it,i as at,o as ot,r as st,s as ct,t as lt}from"./56dee4d8-jzvub6hoel5vk1wt.js";import{n as ut,t as dt}from"./72bb039a-e6b65wz2ss8z63ab.js";import{i as ft,n as pt,r as mt,t as ht}from"./9eb56efa-dfip87xu9wy1t0x3.js";import{i as gt,n as _t,r as K,t as vt}from"./cc79834b-nlodpac2bqloe5mb.js";function yt(){return i(`2779568043`)}function q(){return i(`3864712762`)}function bt(){return g(`522383056`,{disableExposureLog:!0}).get(`app_block_library_editing`,!1)}var xt=e((()=>{ee()}));function St({loadSource:e,errorSource:t,errorType:n,networkPolicy:r,outcome:i,readySignal:a,renderMode:o,surface:s,variant:c}){let l={network_policy:r,surface:s};return e!=null&&(l.load_source=e),t!=null&&(l.error_source=t),n!=null&&(l.error_type=n),i!=null&&(l.outcome=i),a!=null&&(l.ready_signal=a),o!=null&&(l.render_mode=o),c!=null&&(l.variant=c),l}function Ct(){return typeof performance<`u`?performance.now():Date.now()}function wt(e){return new TextEncoder().encode(e).byteLength/1024}function Tt(e){return e instanceof Error?e.name:`unknown`}function Et(e,t,n=1){T.count(D.APP_BLOCKS,e,St(t),n)}function Dt(e,t,n){T.hist(D.APP_BLOCKS,e,St(n),t)}function Ot({content:e,metricTags:t,widgetRefSeenAtMs:n}){let r=(0,kt.useRef)(Ct()),i=(0,kt.useRef)(null),a=(0,kt.useRef)(!1),o=(0,kt.useRef)(!1),s=P(()=>{i.current==null||typeof window>`u`||(window.cancelAnimationFrame(i.current),i.current=null)}),c=P((n=e)=>{o.current||(o.current=!0,Dt(Mt,wt(n),t))});return{cancelFirstPaintFrame:s,startRunMetrics:P((e,{deferFirstPaint:o=!1,deferPayloadSize:l=!1}={})=>{let u=Ct(),d=!1,f=!1,p=!1,m=!1,h=null,g=null;s(),l||c(),Et(Ft,t);let _=(e,n)=>{f||(f=!0,Et(Pt,{...t,outcome:e,readySignal:n}))},v=(i,o)=>{if(!e()||p)return;let s=Ct();Dt(Nt,s-i,{...t,readySignal:o}),!a.current&&(a.current=!0,Dt(At,s-r.current,t),n!=null&&Dt(Lt,s-n,t))},y=(e,n)=>{if(s(),typeof window>`u`){v(e,n);return}i.current=window.requestAnimationFrame(()=>{if(t.loadSource===`saved_inline`){i.current=window.requestAnimationFrame(()=>{i.current=null,v(e,n)});return}i.current=null,v(e,n)})},b=()=>{!e()||p||m||h==null||g==null||(m=!0,y(h,g))};return{markFirstPaint:b,markReady:n=>{!e()||d||(d=!0,h=Ct(),g=n,Dt(It,h-u,{...t,readySignal:n}),o||b())},reportFailure:(n,r)=>{!e()||p||(p=!0,s(),Et(jt,{...t,errorSource:n,errorType:r}),_(`failure`))},reportPayloadSize:t=>{!e()||p||c(t)},reportSuccess:t=>{e()&&_(`success`,t)}}})}}var kt,At,jt,Mt,Nt,Pt,Ft,It,Lt,Rt=e((()=>{M(),N(),kt=n(le()),At=`app_block.first_render_time_ms`,jt=`app_block.load.failure`,Mt=`app_block.payload_size_kb`,Nt=`app_block.ready_to_first_paint_ms`,Pt=`app_block.render.outcome`,Ft=`app_block.render.start`,It=`app_block.sandbox_eval_to_ready_ms`,Lt=`app_block.widget_ref_to_first_paint_ms`})),zt,Bt=e((()=>{zt=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{margin:0;padding:0}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(svg){max-width:100%;height:auto}`})),Vt=e((()=>{})),Ht,Ut=e((()=>{Vt(),Ht=`/cdn/assets/app-block-sandbox-foundation-l4fcvweu.css`})),Wt,Gt=e((()=>{Wt=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--white:#fff;--black:#000;--gray-0:#fff;--gray-25:#fcfcfc;--gray-50:#f9f9f9;--gray-75:#f2f2f2;--gray-100:#ececec;--gray-200:#e3e3e3;--gray-750:#2f2f2f;--gray-800:#212121;--gray-950:#0d0d0d;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px;--app-block-accent-blue:var(--lightningcss-light,#3a83f7)var(--lightningcss-dark,#2c67c5);--app-block-accent-green:var(--lightningcss-light,#53b559)var(--lightningcss-dark,#48a04c);--app-block-accent-yellow:var(--lightningcss-light,#f6c543)var(--lightningcss-dark,#d9a337);--app-block-accent-purple:var(--lightningcss-light,#8952ee)var(--lightningcss-dark,#7849d1);--app-block-accent-pink:var(--lightningcss-light,#e0766d)var(--lightningcss-dark,#c96257);--app-block-accent-orange:var(--lightningcss-light,#ee7c37)var(--lightningcss-dark,#d25e28);--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white);--app-block-accent-bg:color-mix(in srgb, var(--app-block-accent) 8%, transparent);--app-block-accent-bg-subtle:color-mix(in srgb, var(--app-block-accent) 5%, transparent);--app-block-form-control-bg:color-mix(in srgb, var(--viz-text) 2%, var(--main-surface-primary));--app-block-form-control-border:color-mix(in srgb, var(--viz-text) 32%, transparent);--app-block-form-control-shadow:0 1px 2px -1px #00000014;--app-block-form-switch-off-bg:color-mix(in srgb, var(--viz-text) 14%, transparent);--app-block-form-switch-thumb-bg:var(--white);--app-block-form-switch-thumb-border:#0000001a;--app-block-select-picker-bg:var(--main-surface-primary);--app-block-select-picker-check-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.0961%202.91371C12.3297%202.68688%2012.6984%202.64794%2012.9779%202.83852C13.2571%203.02905%2013.3554%203.38601%2013.2299%203.68618L13.1615%203.81118L6.91152%2012.9772C6.79412%2013.1494%206.60631%2013.2604%206.39882%2013.2799C6.19137%2013.2994%205.98565%2013.226%205.83828%2013.0788L2.08828%209.32875L1.99843%209.2184C1.81921%208.94677%201.84928%208.57767%202.08828%208.33852C2.3274%208.0994%202.69648%208.06947%202.96816%208.24868L3.07851%208.33852L6.23085%2011.4909L12.0053%203.02211L12.0961%202.91371Z%22/%3E%3C/svg%3E);--app-block-select-picker-hover-bg:#0000000a;--app-block-select-picker-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.1338%205.94433C12.3919%205.77382%2012.7434%205.80202%2012.9707%206.02929C13.1979%206.25656%2013.2261%206.60807%2013.0556%206.8662L12.9707%206.9707L8.47067%2011.4707C8.21097%2011.7304%207.78896%2011.7304%207.52926%2011.4707L3.02926%206.9707L2.9443%206.8662C2.77379%206.60807%202.80199%206.25656%203.02926%206.02929C3.25653%205.80202%203.60804%205.77382%203.86617%205.94433L3.97067%206.02929L7.99996%2010.0586L12.0293%206.02929L12.1338%205.94433Z%22/%3E%3C/svg%3E);--app-block-select-picker-shadow:0 8px 24px #00000014, 0 2px 8px #00000014;--viz-panel:var(--main-surface-secondary);--viz-card:var(--main-surface-primary);--viz-chip-card:var(--gray-75);--viz-border:var(--border-light);--viz-text:var(--text-primary);--viz-muted:var(--text-secondary);--viz-accent:var(--app-block-accent);--viz-accent-text:var(--app-block-accent-text);--viz-accent-bg:var(--app-block-accent-bg);--viz-accent-bg-subtle:var(--app-block-accent-bg-subtle);--viz-series-1:var(--app-block-accent);--viz-series-2:var(--app-block-accent-green);--viz-series-3:var(--app-block-accent-orange);--viz-series-4:var(--app-block-accent-yellow);--viz-series-5:var(--app-block-accent-purple);--viz-series-6:var(--app-block-accent-pink);--color-background-primary:var(--main-surface-primary);--color-background-secondary:var(--main-surface-secondary);--color-border-secondary:var(--border-light);--color-text-primary:var(--text-primary);--color-text-secondary:var(--text-secondary);--color-text-tertiary:var(--text-tertiary);--color-text-inverse:var(--text-primary-inverse)}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root,:root.light{--main-surface-primary:var(--gray-25);--main-surface-secondary:var(--gray-50);--main-surface-tertiary:var(--gray-100);--text-primary:var(--gray-950);--text-secondary:#0009;--text-tertiary:#0000004a;--text-primary-inverse:var(--gray-0);--text-secondary-inverse:#ffffffb3;--text-tertiary-inverse:#ffffff94;--surface-primary-inverse:var(--gray-950);--border-light:#0000001a;--border-medium:#00000026;--interactive-bg-primary-default:var(--gray-950);--interactive-label-primary-default:var(--gray-0);--interactive-border-focus:var(--gray-950);--link:#2964aa}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}@media (prefers-color-scheme:dark){:root:not(.light){--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}:root[data-chat-theme=default],:root[data-chat-theme=black],:root[data-chat-theme=blue]{--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white)}:root[data-chat-theme=green]{--app-block-accent:var(--app-block-accent-green);--app-block-accent-text:var(--white);--viz-series-2:var(--app-block-accent-blue)}:root[data-chat-theme=yellow]{--app-block-accent:var(--app-block-accent-yellow);--app-block-accent-text:var(--gray-950)}:root[data-chat-theme=purple]{--app-block-accent:var(--app-block-accent-purple);--app-block-accent-text:var(--white)}:root[data-chat-theme=pink]{--app-block-accent:var(--app-block-accent-pink);--app-block-accent-text:var(--white);--viz-series-6:var(--app-block-accent-blue)}:root[data-chat-theme=orange]{--app-block-accent:var(--app-block-accent-orange);--app-block-accent-text:var(--white);--viz-series-3:var(--app-block-accent-blue)}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}:root.light[data-app-block-surface=skybridge],:root.light[data-app-block-surface=stage]{--main-surface-primary:var(--white)}:root.dark[data-app-block-surface=skybridge],:root.dark[data-app-block-surface=stage]{--main-surface-primary:var(--gray-800);--main-surface-secondary:var(--gray-750)}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{color:var(--text-primary);margin:0;padding:0;font-family:ui-sans-serif,-apple-system,system-ui,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(a){color:var(--link)}:where(h1,h2,h3,h4,h5,h6,label,strong,output){color:var(--text-primary)}:where(p,small){color:var(--text-secondary)}:where(input,select,textarea,button){font:inherit}:where(button):is(:enabled,:disabled){font-weight:500}button:is(:enabled,:disabled){-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}@media (hover:hover) and (pointer:fine){button:not(:disabled):hover{opacity:.85}}button:not(:disabled):active{opacity:.7}:where(input,select,textarea){background:var(--main-surface-primary);border:1px solid var(--border-medium);border-color:var(--border-medium);color:var(--text-primary);border-radius:12px}:where(){color:var(--text-tertiary)}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus{border-color:var(--border-medium);box-shadow:none;outline:none}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus-visible{border-color:var(--interactive-border-focus);outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where(select:not([multiple])){cursor:pointer;min-height:34px}:where(select:required:invalid){color:var(--text-tertiary)}:where(select option){color:var(--text-primary)}:where(select:disabled){cursor:not-allowed;opacity:.5}@supports (appearance:base-select){:where(select:not([multiple])),:where(select:not([multiple]))::picker(select){appearance:base-select}:where(select:not([multiple])){align-items:center;padding-inline-end:12px}:where(select:not([multiple]))::picker(select){border:1px solid var(--border-light);background:var(--app-block-select-picker-bg);box-shadow:var(--app-block-select-picker-shadow);color:var(--text-primary);border-radius:12px;margin-top:4px;padding:6px}:where(select:not([multiple]))::picker-icon{width:16px;height:16px;color:var(--text-secondary);content:"";-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;align-self:center;margin-inline-start:auto;display:block}:where(select:not([multiple])) option{min-height:32px;color:var(--text-primary);cursor:pointer;background:0 0;border-radius:8px;justify-content:space-between;align-items:center;gap:24px;padding:7px 10px;display:flex}:where(select:not([multiple])) option:checked{background:var(--app-block-select-picker-hover-bg);outline:none}:where(select:not([multiple])) option:is(:hover,:focus-visible){background:var(--app-block-select-picker-hover-bg)}:where(select:not([multiple])):has(option:is(:hover,:focus-visible)) option:checked:not(:is(:hover,:focus-visible)){background:0 0}:where(select:not([multiple])) option:disabled{color:var(--text-tertiary)}:where(select:not([multiple])) option::checkmark{content:"";width:16px;height:16px;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;order:1;margin-inline-start:auto;display:block}}:where(.form-check){align-items:center;gap:6px;min-height:20px;display:flex}:where(.form-check-input){appearance:none;box-sizing:border-box;border:1px solid var(--app-block-form-control-border);width:14px;height:14px;color:var(--app-block-accent-text);cursor:pointer;vertical-align:-2px;background-color:#0000;flex:none;margin:0;padding:0;transition:background-color .12s,border-color .12s,box-shadow .12s;display:inline-block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:5px}:where(.form-check:not(.form-switch) .form-check-input:not(:disabled):not(:checked):hover){background-color:var(--main-surface-secondary)}.form-check:not(.form-switch) .form-check-input:not(:checked):not(:indeterminate){border:1px solid var(--border-medium)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked):before{background:var(--app-block-accent-text);content:"";width:100%;height:100%;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;display:block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate):before{background:var(--app-block-accent-text);content:"";border-radius:9999px;width:8px;height:2px;margin:5px auto;display:block}:where(.form-check-input[type=radio]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:9999px}:where(.form-check-input[type=radio]:checked){border:2px solid var(--viz-accent);background:radial-gradient(circle, var(--app-block-accent-text) 0 2.5px, transparent 3px), var(--viz-accent)}:where(.form-check-input:disabled){cursor:not-allowed;pointer-events:none;opacity:.5}:where(.form-check-input:disabled+.form-check-label){cursor:not-allowed;opacity:.7}:where(.form-check-label){color:var(--viz-text);cursor:pointer}:where(.form-switch .form-check-input[type=checkbox]){background:var(--app-block-form-switch-off-bg);width:32px;height:20px;box-shadow:none;border:0;border-radius:9999px;transition:background-color .2s cubic-bezier(0,0,.2,1);position:relative}:where(.form-switch .form-check-input[type=checkbox]):before{box-sizing:border-box;border:1px solid var(--app-block-form-switch-thumb-border);background:var(--app-block-form-switch-thumb-bg);width:16px;height:16px;box-shadow:var(--app-block-form-control-shadow);content:"";border-radius:9999px;transition:transform .2s cubic-bezier(0,0,.2,1);position:absolute;top:50%;left:0;transform:translate(2px,-50%)}:where(.form-switch .form-check-input[type=checkbox]:checked){background:var(--viz-accent)}:where(.form-switch .form-check-input[type=checkbox]:checked):before{transform:translate(14px,-50%)}:where(input[type=range]){appearance:none;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;background:0 0;border:0;border-radius:9999px;width:100%;min-width:0;height:24px;margin:0;padding:0;display:block}:where(input[type=range]:disabled){cursor:not-allowed;opacity:.4}:where(input[type=range])::-webkit-slider-runnable-track{background:var(--lightningcss-light,#0000000a)var(--lightningcss-dark,#ffffff0f);border:0;border-radius:9999px;height:6px}:where(input[type=range])::-webkit-slider-thumb{appearance:none;box-sizing:border-box;background:var(--white);border:1px solid #0000001a;border-radius:9999px;width:20px;height:20px;margin-top:-7px;transition:transform .15s;box-shadow:0 1px 2px #0000001f}:where(input[type=range])::-moz-range-track{background:var(--lightningcss-light,#0000000a)var(--lightningcss-dark,#ffffff0f);border:0;border-radius:9999px;height:6px}:where(input[type=range])::-moz-range-progress{background:0 0;border-radius:9999px;height:6px}:where(input[type=range])::-moz-range-thumb{box-sizing:border-box;background:var(--white);border:1px solid #0000001a;border-radius:9999px;width:20px;height:20px;transition:transform .15s;box-shadow:0 1px 2px #0000001f}@media (hover:hover) and (pointer:fine){:where(input[type=range]:enabled:hover)::-webkit-slider-thumb{transform:scale(1.05)}:where(input[type=range]:enabled:hover)::-moz-range-thumb{transform:scale(1.05)}}:where(input[type=range]:focus-visible){outline:none}:where(input[type=range]:focus-visible)::-webkit-slider-thumb{outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where(input[type=range]:focus-visible)::-moz-range-thumb{outline:2px solid var(--interactive-border-focus);outline-offset:2px}@media (forced-colors:active){:where(.form-check-input){appearance:auto;display:revert;width:revert;height:revert;margin:revert;padding:revert;border:revert;border-radius:revert;background:revert;box-shadow:revert;vertical-align:revert}:where(.form-check-input):before{content:none}}:where(svg [role=button],svg [tabindex]):focus:not(:focus-visible){outline:none}:where(button:focus-visible){outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where([data-panel]){background:var(--main-surface-secondary)}:where([data-card]){background:var(--viz-card);border-color:var(--border-light)}:where([data-result=primary]){background:var(--interactive-bg-primary-default);color:var(--interactive-label-primary-default)}:where([data-result=primary] :not(a)){color:inherit}.card{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:var(--viz-card);border-radius:16px;padding:12px;overflow:visible}.metric-card{overflow-wrap:break-word;min-width:0;color:var(--viz-text);background:var(--viz-chip-card);border-radius:16px;padding:12px;overflow:visible}.viz-node{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:0 0;border-radius:12px;padding:10px 12px}.viz-stat-value{color:var(--viz-text);font-size:20px;font-weight:500;line-height:1.25}.viz-edge-label,.viz-badge{width:fit-content;color:var(--viz-text);background:var(--viz-accent-bg);border-radius:9999px;align-items:center;padding:3px 8px;font-size:12px;font-weight:500;line-height:1.4;display:inline-flex}.viz-callout{border-left:3px solid var(--viz-accent);color:var(--viz-text);background:var(--viz-accent-bg-subtle);border-radius:0 12px 12px 0;padding:10px 12px}main [data-tooltip]{position:relative}main [data-tooltip]:after{z-index:20;border:1px solid var(--viz-border);width:max-content;max-width:min(220px,100vw - 24px);color:var(--viz-text);background:var(--main-surface-primary);box-shadow:0 2px 8px color-mix(in srgb, var(--viz-text) 8%, transparent);content:attr(data-tooltip);opacity:0;pointer-events:none;text-align:start;border-radius:10px;padding:4px 8px;font-size:12px;line-height:1.4;transition:opacity .12s,transform .12s;position:absolute;bottom:calc(100% + 6px);left:50%;transform:translate(-50%,2px)}main [data-tooltip]:is(:hover,:focus-visible):after{opacity:1;transform:translate(-50%)}main [data-tooltip-placement=bottom]:after{top:calc(100% + 6px);bottom:auto;transform:translate(-50%,-2px)}main [data-tooltip-placement=bottom]:is(:hover,:focus-visible):after{transform:translate(-50%)}main [data-tooltip-placement=left]:after{inset:50% calc(100% + 6px) auto auto;transform:translate(2px,-50%)}main [data-tooltip-placement=left]:is(:hover,:focus-visible):after{transform:translateY(-50%)}main [data-tooltip-placement=right]:after{top:50%;bottom:auto;left:calc(100% + 6px);transform:translate(-2px,-50%)}main [data-tooltip-placement=right]:is(:hover,:focus-visible):after{transform:translateY(-50%)}:where(svg){max-width:100%;height:auto}:root.dark :where(.bg-white){background-color:var(--main-surface-primary)}:root.dark :where(.bg-slate-50,.bg-gray-50,.bg-zinc-50,.bg-neutral-50){background-color:var(--main-surface-secondary)}:root.dark :where(.bg-slate-100,.bg-gray-100,.bg-zinc-100,.bg-neutral-100,.bg-slate-200,.bg-gray-200,.bg-zinc-200,.bg-neutral-200){background-color:var(--main-surface-tertiary)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700){background-color:var(--interactive-bg-primary-default)}:root.dark :where(.text-white){color:var(--text-primary-inverse)}:root.dark :where(.text-black,.text-slate-900,.text-gray-900,.text-zinc-900,.text-neutral-900,.text-slate-950,.text-gray-950,.text-zinc-950,.text-neutral-950){color:var(--text-primary)}:root.dark :where(.text-slate-500,.text-gray-500,.text-zinc-500,.text-neutral-500,.text-slate-600,.text-gray-600,.text-zinc-600,.text-neutral-600,.text-slate-700,.text-gray-700,.text-zinc-700,.text-neutral-700){color:var(--text-secondary)}:root.dark :where(.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-tertiary)}:root.dark :where(.text-blue-500,.text-blue-600,.text-blue-700){color:var(--link)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-white,.text-slate-50,.text-gray-50,.text-zinc-50,.text-neutral-50,.text-slate-100,.text-gray-100,.text-zinc-100,.text-neutral-100){color:var(--text-primary-inverse)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-slate-200,.text-gray-200,.text-zinc-200,.text-neutral-200,.text-slate-300,.text-gray-300,.text-zinc-300,.text-neutral-300,.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-secondary-inverse)}:root.dark :where(.border-slate-200,.border-gray-200,.border-zinc-200,.border-neutral-200){border-color:var(--border-light)}:root.dark :where(.border-slate-300,.border-gray-300,.border-zinc-300,.border-neutral-300,.border-blue-200,.border-blue-300){border-color:var(--border-medium)}`})),Kt=e((()=>{})),qt,Jt=e((()=>{Kt(),qt=`/cdn/assets/app-block-sandbox-b1cs4d5m.css`}));function Yt(e,t){return t||=e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var J=e((()=>{}));function Xt(e){return/<!doctype\b|<html[\s>]/i.test(e)}function Zt(e,t){let n=e.match(/<\/body\s*>(?=\s*(?:<\/html\s*>)?\s*$)/i)??e.match(/<\/html\s*>\s*$/i);if(n?.index==null)return`${e}\n${t}`;let r=n.index;return[e.slice(0,r),t,e.slice(r)].join(`
`)}function Qt(e){let t=e.trim().replaceAll(`_`,`-`);return t.length===0||!/^[A-Za-z0-9-]+$/.test(t)?`en`:t}function Y(e){if(/^https?:\/\//i.test(e)||typeof window>`u`)return e;let t=window.location.origin;return new URL(e,t).toString()}function $t(e){try{return new URL(e).origin}catch{return null}}function en(e){return ln.has(e)?e:`default`}function tn(e=[]){let t=Y(qt),n=Y(Ht),r=[$t(on),$t(sn),$t(t),$t(n),...cn,...e.map($t)];return Array.from(new Set(r.filter(e=>e!=null)))}function nn(e,t=`light`,n=`en`,r=`default`,i=`inline`,{loadTailwind:a=!0,platform:o,progressiveStreaming:s=!1,syncPresentationSurface:c=!1,styleMode:l=`default`}={}){let u=e.trim(),d=c?dn:``;if(!s&&Xt(u))return{html:c?Zt(u,d):u,expectReadySignal:!1};let f=Qt(n),p=l===`open`?zt:Wt,m=Y(l===`open`?Ht:qt),h=en(r),g=t===`dark`?`#212121`:`#ffffff`,_=i===`skybridge`&&o!=null&&o!==`web`||i===`inline`,v=[`color-scheme: ${t};`,_?`background-color: transparent;`:`background-color: var(--main-surface-primary, ${g});`].join(` `);return{expectReadySignal:a,frameColorScheme:t,html:`<!doctype html>
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
</html>`}}var rn,an,on,sn,cn,ln,un,dn,fn,pn=e((()=>{Bt(),Ut(),Gt(),Jt(),J(),on=`https://cdn.tailwindcss.com`,sn=`https://images.openai.com`,cn=[`https://persistent.oaistatic.com`,`https://cdnjs.cloudflare.com`,`https://esm.sh`,`https://cdn.jsdelivr.net`,`https://unpkg.com`,`https://fonts.googleapis.com`,`https://fonts.gstatic.com`,`https://fonts.bunny.net`],ln=new Set([`default`,`blue`,`green`,`yellow`,`purple`,`pink`,`orange`,`black`]),un=`<style>
  @media (prefers-reduced-motion: no-preference) {
    [data-app-block-stream-enter] {
      animation: app-block-stream-enter 160ms ease-out both;
    }

    @keyframes app-block-stream-enter {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  }
</style>`,dn=String.raw(rn||=Yt([`<script>
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
<\/script>`])),fn=String.raw(an||=Yt([`<script>
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
<\/script>`],[`<script>
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
<\/script>`]))}));function mn(){"use forget";let e=(0,hn.useContext)(gn);if(e==null)throw Error(`useAppBlockExpandedView must be used within AppBlockExpandedViewProvider`);return e}var hn,gn,_n=e((()=>{hn=n(le()),gn=(0,hn.createContext)(null)})),vn,yn=e((()=>{b(),L(),vn=m(()=>ue(()=>import(`./7aa2b76f-lzr6phm06oy25wum.js`).then(e=>e.AppBlockFullscreenTurnComposer),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])))}));function bn(e){"use forget";let t=(0,Cn.c)(42),{additionalResourceDomains:n,canSubmitTurn:r,children:i,code:a,conversationId:o,headerAction:s,source:c,styleMode:l,title:u}=e,f=`app-block:${c.appBlockId}:${(0,wn.useId)()}`,p=(0,wn.useRef)(null),[m,h]=(0,wn.useState)(null),g=c.appBlockId,_=c.libraryFileId,v=c.messageId,y=c.refIndex,b=o??null,ee;t[0]!==b||t[1]!==g?(ee={appBlockId:g,conversationId:b},t[0]=b,t[1]=g,t[2]=ee):ee=t[2];let x=ee,S=d(Se),C;t[3]!==S||t[4]!==x?(C=Fe(S,x),t[3]=S,t[4]=x,t[5]=C):C=t[5];let w=C,te=S?.appBlockId===g&&S.conversationId===b&&(S.isOriginalVersion===!0||S.versionNumber!=null),T=w||te,E;t[6]!==S||t[7]!==f||t[8]!==x?(E=R(S,x,f),t[6]=S,t[7]=f,t[8]=x,t[9]=E):E=t[9];let ne=E,D;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(D=()=>{p.current?.focus()},t[10]=D):D=t[10];let re=D,O=m?.supportsAtomicMove?m:void 0,k;t[11]!==g||t[12]!==_||t[13]!==v||t[14]!==y?(k={appBlockId:g,libraryFileId:_,messageId:v,refIndex:y},t[11]=g,t[12]=_,t[13]=v,t[14]=y,t[15]=k):k=t[15];let A;t[16]!==n||t[17]!==r||t[18]!==a||t[19]!==s||t[20]!==l||t[21]!==O||t[22]!==k||t[23]!==u?(A={additionalResourceDomains:n,canSubmitTurn:r,code:a,focusOnClose:re,headerAction:s,sharedPreview:O,source:k,styleMode:l,title:u},t[16]=n,t[17]=r,t[18]=a,t[19]=s,t[20]=l,t[21]=O,t[22]=k,t[23]=u,t[24]=A):A=t[24];let j=A,ie,M;t[25]!==j||t[26]!==w||t[27]!==x?(ie=()=>{w&&B(x,j)},M=[j,w,x],t[25]=j,t[26]=w,t[27]=x,t[28]=ie,t[29]=M):(ie=t[28],M=t[29]),(0,wn.useEffect)(ie,M);let N;t[30]!==j||t[31]!==ne||t[32]!==x?(N=()=>{Ie(x,ne,j)},t[30]=j,t[31]=ne,t[32]=x,t[33]=N):N=t[33];let ae=N,oe;t[34]!==T||t[35]!==te||t[36]!==ae||t[37]!==m?(oe={isExpanded:T,isViewingHistoricalVersion:te,openExpandedView:ae,setSharedPreview:h,sharedPreview:m,triggerRef:p},t[34]=T,t[35]=te,t[36]=ae,t[37]=m,t[38]=oe):oe=t[38];let P=oe,se;return t[39]!==i||t[40]!==P?(se=(0,Tn.jsx)(gn.Provider,{value:P,children:i}),t[39]=i,t[40]=P,t[41]=se):se=t[41],se}function xn(e){"use forget";let t=(0,Cn.c)(17),{canSubmitFullscreenTurn:n,children:r,conversation:i,headerAction:a,headerTitleContent:o,title:s}=e,c=K(),l;t[0]===i?l=t[1]:(l=()=>i==null?0:Pe(i).height$()??0,t[0]=i,t[1]=l);let u=d(l),f=c===`fullscreen`&&n&&i!=null?u:0,p=o??s,m;t[2]===p?m=t[3]:(m=(0,Tn.jsx)(`span`,{className:`text-token-text-primary min-w-0 flex-1 truncate text-base font-semibold`,children:p}),t[2]=p,t[3]=m);let h;t[4]!==a||t[5]!==m?(h=(0,Tn.jsxs)(vt.Header,{className:`pb-1`,children:[m,a]}),t[4]=a,t[5]=m,t[6]=h):h=t[6];let g;t[7]===f?g=t[8]:(g={paddingBottom:f},t[7]=f,t[8]=g);let _;t[9]===r?_=t[10]:(_=(0,Tn.jsx)(`div`,{className:`h-full min-h-0`,children:r}),t[9]=r,t[10]=_);let v;t[11]!==g||t[12]!==_?(v=(0,Tn.jsx)(vt.Body,{className:`bg-token-bg-primary overflow-hidden`,style:g,children:_}),t[11]=g,t[12]=_,t[13]=v):v=t[13];let y;return t[14]!==h||t[15]!==v?(y=(0,Tn.jsxs)(Tn.Fragment,{children:[h,v]}),t[14]=h,t[15]=v,t[16]=y):y=t[16],y}function Sn(e){"use forget";let t=(0,Cn.c)(5),{conversation:n,paneId:r}=e,i=gt(),a=i.usesViewTransition?i.targetPresentation===`fullscreen`:i.presentation===`fullscreen`&&!i.isTransitioning,o;return t[0]!==n||t[1]!==r||t[2]!==i.isTransitioning||t[3]!==a?(o=a?(0,Tn.jsx)(vn,{conversation:n,disableAutoFocus:i.isTransitioning,paneId:r}):null,t[0]=n,t[1]=r,t[2]=i.isTransitioning,t[3]=a,t[4]=o):o=t[4],o}var Cn,wn,Tn,En=e((()=>{Cn=de(),Te(),_t(),u(),wn=n(le()),_n(),me(),yn(),Tn=se()}));function Dn(){"use forget";let e=(0,On.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,kn.jsx)(`div`,{className:`text-token-text-secondary flex h-full min-h-[120px] w-full items-center justify-center p-4 text-center text-sm`,role:`status`,children:(0,kn.jsx)(I,{id:`chatgpt.app_block.preview.code_execution_disabled`,defaultMessage:`Code execution is disabled for this workspace.`})}),e[0]=t):t=e[0],t}var On,kn,An=e((()=>{On=de(),ce(),kn=se()}));function jn(e,t,n){"use forget";let r=(0,Nn.c)(11),i=t===void 0||t,a=fe(),o;r[0]!==a||r[1]!==e?(o=e?a.formatMessage(X.generatingApp,{title:e}):a.formatMessage(X.creatingInterface),r[0]=a,r[1]=e,r[2]=o):o=r[2];let s=o,c;r[3]!==s||r[4]!==a||r[5]!==n?(c=n??[s,a.formatMessage(X.sketchingInterface),a.formatMessage(X.shapingLayout),a.formatMessage(X.arrangingPieces),a.formatMessage(X.polishingVisuals),a.formatMessage(X.tuningInputs),a.formatMessage(X.addingInteractivity),a.formatMessage(X.wiringControls),a.formatMessage(X.composingInteractions),a.formatMessage(X.calibratingPreview),a.formatMessage(X.refiningDetails)],r[3]=s,r[4]=a,r[5]=n,r[6]=c):c=r[6];let l=c,[u,d]=(0,Pn.useState)(0),f,p;return r[7]!==i||r[8]!==l.length?(f=()=>{if(!i)return;let e=window.setInterval(()=>{d(e=>Math.min(e+1,l.length-1))},In);return()=>{window.clearInterval(e)}},p=[i,l.length],r[7]=i,r[8]=l.length,r[9]=f,r[10]=p):(f=r[9],p=r[10]),(0,Pn.useEffect)(f,p),l[u]??l[0]??``}function Mn(e){"use forget";let t=(0,Nn.c)(2),{loadingLabels:n,title:r}=e,i=jn(r,!0,n),a;return t[0]===i?a=t[1]:(a=(0,Fn.jsx)(`div`,{"aria-atomic":`true`,"aria-live":`polite`,className:`not-prose mt-4 mb-1 flex min-h-[220px] w-full cursor-wait`,role:`status`,children:(0,Fn.jsx)(rt,{className:`aspect-auto min-h-0 flex-1 pt-2`,label:i})}),t[0]=i,t[1]=a),a}var Nn,Pn,Fn,In,X,Ln,Rn=e((()=>{Nn=de(),nt(),h(),Pn=n(le()),ce(),Fn=se(),In=2800,X=F({generatingApp:{id:`appBlock.loadingState.generatingApp`,defaultMessage:`Generating {title}`},creatingInterface:{id:`appBlock.loadingState.creatingInterface`,defaultMessage:`Creating the interface`},sketchingInterface:{id:`appBlock.loadingState.sketchingInterface`,defaultMessage:`Sketching the interface`},shapingLayout:{id:`appBlock.loadingState.shapingLayout`,defaultMessage:`Shaping the layout`},arrangingPieces:{id:`appBlock.loadingState.arrangingPieces`,defaultMessage:`Arranging the pieces`},polishingVisuals:{id:`appBlock.loadingState.polishingVisuals`,defaultMessage:`Polishing the visuals`},tuningInputs:{id:`appBlock.loadingState.tuningInputs`,defaultMessage:`Tuning the inputs`},addingInteractivity:{id:`appBlock.loadingState.addingInteractivity`,defaultMessage:`Adding interactivity`},wiringControls:{id:`appBlock.loadingState.wiringControls`,defaultMessage:`Wiring the controls`},composingInteractions:{id:`appBlock.loadingState.composingInteractions`,defaultMessage:`Composing the interactions`},calibratingPreview:{id:`appBlock.loadingState.calibratingPreview`,defaultMessage:`Calibrating the preview`},refiningDetails:{id:`appBlock.loadingState.refiningDetails`,defaultMessage:`Refining the details`}}),Ln=e=>{"use forget";let t=(0,Nn.c)(11),{isVisible:n,title:r}=e,i=jn(r,n),a=!n,o=n?`grid-rows-[1fr] opacity-100`:`grid-rows-[0fr] opacity-0`,s;t[0]===o?s=t[1]:(s=v(`grid shrink-0 transition-[grid-template-rows,opacity] duration-200 ease-out motion-reduce:transition-none`,o),t[0]=o,t[1]=s);let c=n&&`loading-shimmer-pure-text motion-reduce:animate-none`,l;t[2]===c?l=t[3]:(l=v(`text-token-text-secondary inline-block font-sans font-medium`,c),t[2]=c,t[3]=l);let u;t[4]!==i||t[5]!==l?(u=(0,Fn.jsx)(`div`,{className:`min-h-0 overflow-hidden`,children:(0,Fn.jsx)(`div`,{className:`pb-3`,children:(0,Fn.jsx)(`span`,{className:l,children:i})})}),t[4]=i,t[5]=l,t[6]=u):u=t[6];let d;return t[7]!==a||t[8]!==s||t[9]!==u?(d=(0,Fn.jsx)(`div`,{"aria-atomic":`true`,"aria-hidden":a,"aria-live":`polite`,className:s,role:`status`,children:u}),t[7]=a,t[8]=s,t[9]=u,t[10]=d):d=t[10],d}}));function zn({appBlockId:e,conversation:t}){return t==null?null:lt(t).get(e)??null}function Bn(e){return e?.serverId$()??void 0}function Vn({currentContentFileId:e,libraryFileId:t,libraryFileVersionNumber:n,serverThreadId:r,source:i}){let a=i?.libraryFileId??t??null,o=i?.currentContentFileId??e??(a==null?null:H(a));return{contentFileId:o,libraryContentKey:[a,o,i?.latestPatchMessageId??i?.libraryFileVersionNumber??n??i?.currentContentFileId??e??null,r??null].join(`\0`),libraryFileId:a}}function Hn({contentFileId:e,libraryContentKey:t,libraryFileId:n,onContentStateChange:r,serverThreadId:i}){if(n==null||e==null){r(null);return}let o=new AbortController;return pe({abortSignal:o.signal,fileId:e,serverThreadId:i}).then(e=>{o.signal.aborted||r({content:e,key:t,status:`loaded`})}).catch(e=>{o.signal.aborted||r({content:null,key:t,status:a(e)?`missing`:`failed`})}),()=>{o.abort()}}function Un({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryContent:r,libraryContentKey:i,libraryFileId:a,libraryFileVersionNumber:o,source:s}){let c=s??Wn({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:a,libraryFileVersionNumber:o});return c==null?null:r==null||r.key!==i?c.latestPatchMessageId!=null&&c.content==null?{...c,content:null}:c:{...c,content:r.content}}function Wn({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:r,libraryFileVersionNumber:i}){return r==null?null:{appBlockId:e,content:null,currentContentFileId:n??t,entrypoint:null,iconSvg:null,language:`html`,latestPatchMessageId:null,libraryFileId:r,libraryFileName:null,libraryFileVersionNumber:i??null,messageId:``,mimeType:null,refIndex:0,styleMode:null,title:null}}var Gn=e((()=>{o(),Ne(),st()})),Kn=t({AppBlock:()=>Yn,AppBlockCollapsedPreview:()=>rr,AppBlockPreviewLoadingState:()=>mr,AppBlockSandboxPreview:()=>dr});function qn(e){let t=e.search(kr),n=t===-1?e:e.slice(0,t),r=n.toLowerCase(),i=r.lastIndexOf(`<style`);return i>r.lastIndexOf(`</style`)&&(n=n.slice(0,i)),n}function Jn(e){let t=qn(e);if(t.trim()===``)return!1;if(typeof document>`u`)return/<[^>]+>|[^\s<]/.test(t);let n=document.createElement(`template`);n.innerHTML=t;for(let e of n.content.querySelectorAll(Ar))e.remove();return(n.content.textContent?.trim().length??0)>0||n.content.querySelector(jr)!=null}function Yn(e){"use forget";let t=(0,Z.c)(153),{additionalResourceDomains:n,appBlockId:r,authoritativeCode:i,authoritativeSource:a,bind:o,code:s,collapseWhenSuperseded:c,currentContentFileId:l,displayMode:u,editingEnabled:f,expandedHeaderAction:p,expandedViewEnabled:m,id:h,captureConsoleMessages:g,clientThreadId:_,iconSvg:v,inlineHeight:y,isStreaming:b,isTurnStreaming:ee,libraryFileId:x,libraryFileVersionNumber:S,loadingLabels:C,messageId:w,onConsoleMessagesChange:T,onReadyChange:E,previewLoadingLabel:D,progressiveStreaming:O,ref:A,refIndex:j,styleMode:ie,title:M,variant:N,wasStreamingWhenFirstSeen:ae,widgetName:oe,widgetRefSeenAtMs:P}=e,se=c===void 0||c,F=g!==void 0&&g,I=b!==void 0&&b,ce=ee!==void 0&&ee,le=O!==void 0&&O,ue=N===void 0?`inline`:N,L=re(),de=(0,Q.useContext)(dt),fe;t[0]===L?fe=t[1]:(fe=()=>L!=null&&Ce(L),t[0]=L,t[1]=fe);let me=d(fe),R;t[2]!==_||t[3]!==L?(R=_==null?L:te(_),t[2]=_,t[3]=L,t[4]=R):R=t[4];let he=R,ge=w!=null&&j!=null?ct({messageId:w,refIndex:j}):void 0,z=r??ge??ct({messageId:w??h,refIndex:j??0}),_e=d(()=>Ee({conversation:L??null,instanceId:z,messageId:w,refIndex:j}))??u,ve=d(()=>a!=null||_e!=null?null:zn({appBlockId:z,conversation:L??null})),B=a??ve,ye;t[5]===L?ye=t[6]:(ye=()=>Bn(L??null),t[5]=L,t[6]=ye);let be=d(ye),Se=ne(L?.id),we=be??Se,Te;t[7]!==l||t[8]!==x||t[9]!==S||t[10]!==we||t[11]!==B?(Te=Vn({currentContentFileId:l,libraryFileId:x,libraryFileVersionNumber:S,serverThreadId:we,source:B}),t[7]=l,t[8]=x,t[9]=S,t[10]=we,t[11]=B,t[12]=Te):Te=t[12];let H=Te,[De,Oe]=(0,Q.useState)(null),[ke,Ae]=(0,Q.useState)(0),je;t[13]!==ke||t[14]!==H.libraryContentKey?(je=[H.libraryContentKey,ke],t[13]=ke,t[14]=H.libraryContentKey,t[15]=je):je=t[15];let Me=je.join(`\0`),Ne,Pe;t[16]!==i||t[17]!==Me||t[18]!==H.contentFileId||t[19]!==H.libraryFileId||t[20]!==_e||t[21]!==we?(Ne=()=>{if(!(i!=null||_e===`collapsed`))return Hn({contentFileId:H.contentFileId,libraryContentKey:Me,libraryFileId:H.libraryFileId,onContentStateChange:Oe,serverThreadId:we})},Pe=[i,H.contentFileId,H.libraryFileId,Me,_e,we],t[16]=i,t[17]=Me,t[18]=H.contentFileId,t[19]=H.libraryFileId,t[20]=_e,t[21]=we,t[22]=Ne,t[23]=Pe):(Ne=t[22],Pe=t[23]),(0,Q.useEffect)(Ne,Pe);let U=Un({appBlockId:z,contentFileId:H.contentFileId,currentContentFileId:l,libraryContent:De,libraryContentKey:Me,libraryFileId:x,libraryFileVersionNumber:S,source:B}),Fe=De?.key===Me?De:null,Le;t[24]!==U?.libraryFileId||t[25]!==x?(Le=()=>xe(U?.libraryFileId??x),t[24]=U?.libraryFileId,t[25]=x,t[26]=Le):Le=t[26];let Re=d(Le),ze=U?.libraryFileVersionNumber??S,Be=Re!=null&&(ze==null||Re.versionNumber>=ze)?Re.code:void 0,W=Be??i??U?.content??s??null,Ve=U?.iconSvg??v??null,He=U?.libraryFileId??x,Ue=He==null&&i==null&&Be==null&&l==null&&B?.currentContentFileId==null&&B?.latestPatchMessageId==null,We=ae===!1&&ue===`inline`&&Ue,Ge;t[27]!==s||t[28]!==Ue||t[29]!==w||t[30]!==W||t[31]!==j||t[32]!==B?(Ge=Ue?B==null?w!=null&&j!=null&&s!=null&&W===s?{messageId:w,refIndex:j}:null:B.messageId.length>0&&B.content!=null&&W===B.content?{messageId:B.messageId,refIndex:B.refIndex}:null:null,t[27]=s,t[28]=Ue,t[29]=w,t[30]=W,t[31]=j,t[32]=B,t[33]=Ge):Ge=t[33];let Ke=Ge,qe=ue===`artifact`,Je=U?.styleMode??ie??(qe&&le?`open`:void 0),Ye;t[34]!==He||t[35]!==Je?(Ye=ot({explicitStyleMode:Je,libraryFileId:He}),t[34]=He,t[35]=Je,t[36]=Ye):Ye=t[36];let Xe=Ye,G=U?.title??M,Ze;t[37]===L?Ze=t[38]:(Ze=()=>L!=null&&k(L)?`work`:`chat`,t[37]=L,t[38]=Ze);let Qe=d(Ze),$e;t[39]===f?$e=t[40]:($e=f??bt(),t[39]=f,t[40]=$e);let et=$e,tt=m??et,nt=le,rt=qe&&Xe===`open`,it=_e===`collapsed`||_e==null&&se&&U?.latestPatchMessageId!=null&&U.latestPatchMessageId!==w,at=s!=null||l!=null,st;t[41]!==et||t[42]!==_||t[43]!==s||t[44]!==L?.id||t[45]!==l||t[46]!==z||t[47]!==p||t[48]!==S||t[49]!==w||t[50]!==He||t[51]!==Xe||t[52]!==G||t[53]!==j||t[54]!==we||t[55]!==B?.messageId?(st=async e=>{let t=s;if(t==null&&l!=null)try{t=await pe({abortSignal:new AbortController().signal,fileId:l,serverThreadId:we})}catch{return}t!=null&&Ie({appBlockId:z,conversationId:L?.id??_??null,isOriginalVersion:!0,versionNumber:S??void 0},`app-block:${z}:original`,{canSubmitTurn:et,code:t,headerAction:p,focusOnClose:()=>{e.isConnected&&e.focus()},source:{appBlockId:z,libraryFileId:He,messageId:B?.messageId??w,refIndex:j},styleMode:Xe,title:G})},t[41]=et,t[42]=_,t[43]=s,t[44]=L?.id,t[45]=l,t[46]=z,t[47]=p,t[48]=S,t[49]=w,t[50]=He,t[51]=Xe,t[52]=G,t[53]=j,t[54]=we,t[55]=B?.messageId,t[56]=st):st=t[56],L?.id,B?.messageId;let lt=st;if(I&&!nt){let e;return t[57]!==C||t[58]!==G?(e=(0,$.jsx)(Mn,{loadingLabels:C,title:G}),t[57]=C,t[58]=G,t[59]=e):e=t[59],e}let ut=me&&s!=null;if(Fe?.status===`missing`&&!ut)return null;if(it){let e=at?lt:void 0,n;return t[60]!==G||t[61]!==e?(n=(0,$.jsx)(lr,{onView:e,title:G}),t[60]=G,t[61]=e,t[62]=n):n=t[62],n}let ft=W??(nt&&I?``:null);if(ft==null){if(U?.latestPatchMessageId!=null){let e=L?.id??_,n=Fe?.status===`failed`,r;t[63]===Ae?r=t[64]:(r=()=>Ae(Xn),t[63]=Ae,t[64]=r);let i;return t[65]!==z||t[66]!==qe||t[67]!==Ve||t[68]!==D||t[69]!==G||t[70]!==e||t[71]!==n||t[72]!==r?(i=(0,$.jsx)(er,{appBlockId:z,conversationId:e,hasFailed:n,iconSvg:Ve,onRetry:r,previewLoadingLabel:D,showHeader:qe,title:G}),t[65]=z,t[66]=qe,t[67]=Ve,t[68]=D,t[69]=G,t[70]=e,t[71]=n,t[72]=r,t[73]=i):i=t[73],i}let e;return t[74]!==C||t[75]!==G?(e=(0,$.jsx)(Mn,{loadingLabels:C,title:G}),t[74]=C,t[75]=G,t[76]=e):e=t[76],e}let pt;t[77]!==_||t[78]!==Qe||t[79]!==I||t[80]!==ce||t[81]!==w||t[82]!==j?(pt=!I&&!ce&&_!=null&&w!=null&&j!=null&&yt()?{reference:{clientThreadId:_,messageId:w,referenceIndex:j},target:{kind:`app_block`,metadata:{tab:Qe}}}:void 0,t[77]=_,t[78]=Qe,t[79]=I,t[80]=ce,t[81]=w,t[82]=j,t[83]=pt):pt=t[83];let mt=pt;if(de){let e=L?.id??_,r;t[84]!==n||t[85]!==o||t[86]!==F||t[87]!==z||t[88]!==h||t[89]!==y||t[90]!==I||t[91]!==T||t[92]!==E||t[93]!==D||t[94]!==Xe||t[95]!==G||t[96]!==A||t[97]!==ft||t[98]!==nt||t[99]!==e||t[100]!==ue||t[101]!==P?(r=(0,$.jsx)(dr,{additionalResourceDomains:n,appBlockId:z,bind:o,captureConsoleMessages:F,clientThreadId:e,code:ft,id:h,inlineHeight:y,isStreaming:I,onConsoleMessagesChange:T,onReadyChange:E,previewLoadingLabel:D,progressiveStreaming:nt,ref:A,styleMode:Xe,title:G,variant:ue,widgetRefSeenAtMs:P}),t[84]=n,t[85]=o,t[86]=F,t[87]=z,t[88]=h,t[89]=y,t[90]=I,t[91]=T,t[92]=E,t[93]=D,t[94]=Xe,t[95]=G,t[96]=A,t[97]=ft,t[98]=nt,t[99]=e,t[100]=ue,t[101]=P,t[102]=r):r=t[102];let i;return t[103]!==I||t[104]!==Ve||t[105]!==G||t[106]!==rt||t[107]!==r?(i=(0,$.jsx)($n,{canOpen:!1,iconSvg:Ve,isShareReady:!1,isStreaming:I,showArtifactCard:rt,title:G,children:r}),t[103]=I,t[104]=Ve,t[105]=G,t[106]=rt,t[107]=r,t[108]=i):i=t[108],i}let ht=L?.id??_,gt=B?.messageId??w,_t;t[109]!==z||t[110]!==He||t[111]!==j||t[112]!==gt?(_t={appBlockId:z,libraryFileId:He,messageId:gt,refIndex:j},t[109]=z,t[110]=He,t[111]=j,t[112]=gt,t[113]=_t):_t=t[113];let K=rt&&tt&&!I,vt=L?.id??_,q;t[114]!==Ke||t[115]!==oe?(q=Ke==null?void 0:{contentReferenceIndex:Ke.refIndex,messageId:Ke.messageId,widgetName:oe??V.AppBlock,widgetType:V.AppBlock},t[114]=Ke,t[115]=oe,t[116]=q):q=t[116];let xt;t[117]!==n||t[118]!==o||t[119]!==F||t[120]!==z||t[121]!==mt||t[122]!==h||t[123]!==y||t[124]!==We||t[125]!==I||t[126]!==T||t[127]!==E||t[128]!==Ve||t[129]!==D||t[130]!==Xe||t[131]!==G||t[132]!==A||t[133]!==ft||t[134]!==he||t[135]!==nt||t[136]!==rt||t[137]!==K||t[138]!==vt||t[139]!==q||t[140]!==ue||t[141]!==P?(xt=(0,$.jsx)(Zn,{additionalResourceDomains:n,appBlockId:z,bind:o,canOpen:K,captureConsoleMessages:F,clientThreadId:vt,code:ft,feedback:mt,iconSvg:Ve,id:h,inlineHeight:y,isStreaming:I,onConsoleMessagesChange:T,onReadyChange:E,previewLoadingLabel:D,progressiveStreaming:nt,isSavedInlineLoad:We,ref:A,showArtifactCard:rt,shareConversation:he,shareTarget:q,styleMode:Xe,title:G,variant:ue,widgetRefSeenAtMs:P}),t[117]=n,t[118]=o,t[119]=F,t[120]=z,t[121]=mt,t[122]=h,t[123]=y,t[124]=We,t[125]=I,t[126]=T,t[127]=E,t[128]=Ve,t[129]=D,t[130]=Xe,t[131]=G,t[132]=A,t[133]=ft,t[134]=he,t[135]=nt,t[136]=rt,t[137]=K,t[138]=vt,t[139]=q,t[140]=ue,t[141]=P,t[142]=xt):xt=t[142];let St;return t[143]!==n||t[144]!==et||t[145]!==p||t[146]!==Xe||t[147]!==G||t[148]!==ft||t[149]!==ht||t[150]!==_t||t[151]!==xt?(St=(0,$.jsx)(bn,{additionalResourceDomains:n,canSubmitTurn:et,code:ft,conversationId:ht,headerAction:p,styleMode:Xe,source:_t,title:G,children:xt}),t[143]=n,t[144]=et,t[145]=p,t[146]=Xe,t[147]=G,t[148]=ft,t[149]=ht,t[150]=_t,t[151]=xt,t[152]=St):St=t[152],St}function Xn(e){return e+1}function Zn(e){"use forget";let t=(0,Z.c)(72),{additionalResourceDomains:n,appBlockId:r,bind:i,canOpen:a,captureConsoleMessages:o,clientThreadId:s,code:c,feedback:l,iconSvg:u,id:d,inlineHeight:p,isStreaming:m,onConsoleMessagesChange:h,onReadyChange:g,previewLoadingLabel:_,progressiveStreaming:v,isSavedInlineLoad:y,ref:b,shareConversation:ee,shareTarget:x,showArtifactCard:S,styleMode:C,title:w,variant:te,widgetRefSeenAtMs:T}=e,{isExpanded:E,isViewingHistoricalVersion:ne,openExpandedView:D,setSharedPreview:re,sharedPreview:O,triggerRef:k}=mn(),A=(0,Q.useContext)(Me),j;t[0]===n?j=t[1]:(j=n??[],t[0]=n,t[1]=j);let ie;t[2]!==c||t[3]!==d||t[4]!==C||t[5]!==j?(ie=[d,C,c,...j],t[2]=c,t[3]=d,t[4]=C,t[5]=j,t[6]=ie):ie=t[6];let M=ie.join(`\0`),[N,ae]=(0,Q.useState)(null),oe=!m&&N===M,se;t[7]===D?se=t[8]:(se=()=>{ge(),D()},t[7]=D,t[8]=se);let F=se,I;t[9]!==g||t[10]!==M?(I=(e,t)=>{ae(e?M:null),g?.(e,t)},t[9]=g,t[10]=M,t[11]=I):I=t[11];let ce=I,le;t[12]!==n||t[13]!==r||t[14]!==i||t[15]!==o||t[16]!==s||t[17]!==c||t[18]!==ce||t[19]!==d||t[20]!==p||t[21]!==y||t[22]!==m||t[23]!==h||t[24]!==_||t[25]!==v||t[26]!==b||t[27]!==C||t[28]!==w||t[29]!==te||t[30]!==T?(le=(0,$.jsx)(dr,{appBlockId:r,additionalResourceDomains:n,bind:i,code:c,id:d,inlineHeight:p,isStreaming:m,captureConsoleMessages:o,clientThreadId:s,onConsoleMessagesChange:h,onReadyChange:ce,presentationSurface:`inline`,previewLoadingLabel:_,progressiveStreaming:v,isSavedInlineLoad:y,ref:b,styleMode:C,title:w,variant:te,widgetRefSeenAtMs:T}),t[12]=n,t[13]=r,t[14]=i,t[15]=o,t[16]=s,t[17]=c,t[18]=ce,t[19]=d,t[20]=p,t[21]=y,t[22]=m,t[23]=h,t[24]=_,t[25]=v,t[26]=b,t[27]=C,t[28]=w,t[29]=te,t[30]=T,t[31]=le):le=t[31];let ue;t[32]!==A||t[33]!==le?(ue={element:le,sandboxPolicy:A},t[32]=A,t[33]=le,t[34]=ue):ue=t[34];let L=ue,de;t[35]===L?de=t[36]:(de=()=>L,t[35]=L,t[36]=de);let fe=P(de),pe;t[37]!==r||t[38]!==s||t[39]!==fe||t[40]!==re?(pe=e=>{if(e==null)return;let{preview:t,sourceToken:n}=Oe({appBlockId:r,content:fe(),conversationId:s??null,inlineContainer:e});return re(t),()=>{let e=Se();_e(t,n,e?.sharedPreview===t)}},t[37]=r,t[38]=s,t[39]=fe,t[40]=re,t[41]=pe):pe=t[41];let me=pe,R,he;t[42]!==L||t[43]!==O?(he=()=>{O!=null&&ye(O,L)},R=[L,O],t[42]=L,t[43]=O,t[44]=R,t[45]=he):(R=t[44],he=t[45]),f(he,R);let z=ne?F:void 0,ve;t[46]!==u||t[47]!==z||t[48]!==w||t[49]!==k?(ve=(0,$.jsx)(rr,{iconSvg:u,onOpen:z,openButtonRef:k,title:w}),t[46]=u,t[47]=z,t[48]=w,t[49]=k,t[50]=ve):ve=t[50];let B=E?ve:null,be;t[51]===me?be=t[52]:(be=(0,$.jsx)(`div`,{ref:me,className:`w-full`}),t[51]=me,t[52]=be);let xe;t[53]!==a||t[54]!==l||t[55]!==F||t[56]!==u||t[57]!==oe||t[58]!==m||t[59]!==ee||t[60]!==x||t[61]!==S||t[62]!==be||t[63]!==w||t[64]!==k?(xe=(0,$.jsx)($n,{canOpen:a,expandButtonRef:k,feedback:l,iconSvg:u,isShareReady:oe,shareConversation:ee,shareTarget:x,isStreaming:m,showArtifactCard:S,title:w,onOpen:F,children:be}),t[53]=a,t[54]=l,t[55]=F,t[56]=u,t[57]=oe,t[58]=m,t[59]=ee,t[60]=x,t[61]=S,t[62]=be,t[63]=w,t[64]=k,t[65]=xe):xe=t[65];let V;t[66]!==E||t[67]!==xe?(V=(0,$.jsx)(`div`,{hidden:E,children:xe}),t[66]=E,t[67]=xe,t[68]=V):V=t[68];let Ce;return t[69]!==B||t[70]!==V?(Ce=(0,$.jsxs)($.Fragment,{children:[B,V]}),t[69]=B,t[70]=V,t[71]=Ce):Ce=t[71],Ce}function Qn(e){"use forget";let t=(0,Z.c)(14),{action:n,className:r,fallbackTitle:i,leading:a,title:o,titleClassName:s}=e,c;t[0]===r?c=t[1]:(c=v(`flex items-center justify-between gap-3`,r),t[0]=r,t[1]=c);let l=s??`truncate text-base font-semibold`,u;t[2]===l?u=t[3]:(u=v(`text-token-text-primary`,l),t[2]=l,t[3]=u);let d=o??i,f;t[4]!==u||t[5]!==d?(f=(0,$.jsx)(`div`,{className:`min-w-0`,children:(0,$.jsx)(`div`,{className:u,children:d})}),t[4]=u,t[5]=d,t[6]=f):f=t[6];let p;t[7]!==a||t[8]!==f?(p=(0,$.jsxs)(`div`,{className:`flex min-w-0 items-center gap-3`,children:[a,f]}),t[7]=a,t[8]=f,t[9]=p):p=t[9];let m;return t[10]!==n||t[11]!==c||t[12]!==p?(m=(0,$.jsxs)(`div`,{className:c,children:[p,n]}),t[10]=n,t[11]=c,t[12]=p,t[13]=m):m=t[13],m}function $n(e){"use forget";let t=(0,Z.c)(20),{canOpen:n,children:r,expandButtonRef:i,feedback:a,iconSvg:o,isShareReady:s,isStreaming:c,onOpen:l,shareConversation:u,shareTarget:d,showArtifactCard:f,title:p}=e,m=fe(),h;t[0]===m?h=t[1]:(h=m.formatMessage({id:`6z1y4r`,defaultMessage:`App preview`}),t[0]=m,t[1]=h);let g=h,_;t[2]!==n||t[3]!==r||t[4]!==i||t[5]!==g||t[6]!==o||t[7]!==s||t[8]!==c||t[9]!==l||t[10]!==u||t[11]!==d||t[12]!==f||t[13]!==p?(_=f?(0,$.jsxs)(`div`,{className:v(`shadow-xxs border-token-border-default bg-token-bg-primary w-full min-w-0 overflow-clip rounded-3xl border`,c&&`cursor-wait`),"data-testid":`app-block-artifact-card`,children:[(0,$.jsx)(Qn,{action:(0,$.jsx)(Mr,{canOpen:n,conversation:u,expandButtonRef:i,isReady:s,onOpen:l,target:d}),className:`min-h-13 px-4 py-2`,fallbackTitle:g,leading:c?(0,$.jsx)(O,{className:`icon-md text-token-text-primary shrink-0`}):(0,$.jsx)(ar,{iconSvg:o}),title:p}),(0,$.jsx)(`div`,{children:r})]}):(0,$.jsx)(Nr,{conversation:u,isReady:s,target:d,children:r}),t[2]=n,t[3]=r,t[4]=i,t[5]=g,t[6]=o,t[7]=s,t[8]=c,t[9]=l,t[10]=u,t[11]=d,t[12]=f,t[13]=p,t[14]=_):_=t[14];let y;t[15]===a?y=t[16]:(y=a==null?null:(0,$.jsx)(tr,{...a}),t[15]=a,t[16]=y);let b;return t[17]!==_||t[18]!==y?(b=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[_,y]}),t[17]=_,t[18]=y,t[19]=b):b=t[19],b}function er(e){"use forget";let t=(0,Z.c)(18),{appBlockId:n,conversationId:r,hasFailed:i,iconSvg:a,onRetry:o,previewLoadingLabel:s,showHeader:c,title:l}=e,u=d(Se),f=fe(),p;t[0]===f?p=t[1]:(p=f.formatMessage({id:`chatgpt.app_block.preview_shell.fallback_title`,defaultMessage:`App preview`}),t[0]=f,t[1]=p);let m=p;if(Fe(u,{appBlockId:n,conversationId:r??null})){let e;return t[2]!==a||t[3]!==l?(e=(0,$.jsx)(rr,{iconSvg:a,title:l}),t[2]=a,t[3]=l,t[4]=e):e=t[4],e}let h;t[5]!==m||t[6]!==a||t[7]!==c||t[8]!==l?(h=c?(0,$.jsx)(Qn,{className:`mb-2`,fallbackTitle:m,leading:(0,$.jsx)(ar,{iconSvg:a}),title:l}):null,t[5]=m,t[6]=a,t[7]=c,t[8]=l,t[9]=h):h=t[9];let g;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(g={minHeight:gr},t[10]=g):g=t[10];let _;t[11]!==i||t[12]!==o||t[13]!==s?(_=(0,$.jsx)(`div`,{className:`relative w-full`,style:g,children:i?(0,$.jsx)(hr,{onRetry:o}):(0,$.jsx)(mr,{label:s})}),t[11]=i,t[12]=o,t[13]=s,t[14]=_):_=t[14];let v;return t[15]!==h||t[16]!==_?(v=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[h,_]}),t[15]=h,t[16]=_,t[17]=v):v=t[17],v}function tr(e){"use forget";let t=(0,Z.c)(5),{reference:n,target:r}=e,[i,a]=(0,Q.useState)(!1);if(d(nr))return null;let o;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(o=(0,$.jsx)(ke,{}),t[0]=o):o=t[0];let s;return t[1]!==i||t[2]!==n||t[3]!==r?(s=(0,$.jsx)(`div`,{className:`flex justify-end pt-1`,children:(0,$.jsx)(tt,{onOpenChange:a,open:i,reference:n,target:r,triggerButton:o})}),t[1]=i,t[2]=n,t[3]=r,t[4]=s):s=t[4],s}function nr(){return $e()}function rr(e){"use forget";let t=(0,Z.c)(23),{iconSvg:n,onOpen:r,openButtonRef:i,title:a}=e,o=fe(),c,l,u,d,f;t[0]!==o||t[1]!==r||t[2]!==i||t[3]!==a?(l=o.formatMessage({id:`XBBNdF`,defaultMessage:`App preview`}),f=`not-prose relative clear-both my-4 w-full max-w-full`,d=`shadow-xxs border-token-border-default bg-token-bg-primary text-token-text-primary flex h-20 w-full min-w-0 items-center gap-3 overflow-clip rounded-3xl border p-4`,c=Qn,u=r==null?void 0:(0,$.jsx)(s,{ref:i,color:`secondary`,label:o.formatMessage({id:`chatgpt.app_block.collapsed_preview.open.aria_label`,defaultMessage:`Open {title} in side pane`},{title:a??l}),onClick:r,type:`button`,children:(0,$.jsx)(I,{id:`chatgpt.app_block.collapsed_preview.open`,defaultMessage:`Open`})}),t[0]=o,t[1]=r,t[2]=i,t[3]=a,t[4]=c,t[5]=l,t[6]=u,t[7]=d,t[8]=f):(c=t[4],l=t[5],u=t[6],d=t[7],f=t[8]);let p;t[9]===n?p=t[10]:(p=(0,$.jsx)(ir,{iconSvg:n}),t[9]=n,t[10]=p);let m;t[11]!==c||t[12]!==l||t[13]!==u||t[14]!==p||t[15]!==a?(m=(0,$.jsx)(c,{action:u,className:`w-full`,fallbackTitle:l,leading:p,title:a,titleClassName:`truncate text-[17px] leading-6 font-medium tracking-[-0.43px]`}),t[11]=c,t[12]=l,t[13]=u,t[14]=p,t[15]=a,t[16]=m):m=t[16];let h;t[17]!==d||t[18]!==m?(h=(0,$.jsx)(`div`,{className:d,children:m}),t[17]=d,t[18]=m,t[19]=h):h=t[19];let g;return t[20]!==f||t[21]!==h?(g=(0,$.jsx)(`div`,{className:f,children:h}),t[20]=f,t[21]=h,t[22]=g):g=t[22],g}function ir(e){"use forget";let t=(0,Z.c)(2),{iconSvg:n}=e,r;return t[0]===n?r=t[1]:(r=(0,$.jsx)(`div`,{className:`bg-token-bg-tertiary flex size-12 shrink-0 items-center justify-center rounded-xl`,children:(0,$.jsx)(ar,{className:`text-token-text-secondary`,iconSvg:n})}),t[0]=n,t[1]=r),r}function ar(e){"use forget";let t=(0,Z.c)(5),{className:n,iconSvg:r}=e,i=n===void 0?`text-token-text-primary`:n,a;t[0]===r?a=t[1]:(a=or(r),t[0]=r,t[1]=a);let o=a,s;return t[2]!==i||t[3]!==o?(s=o==null?(0,$.jsx)(ze,{"aria-hidden":`true`,className:v(`icon-md shrink-0`,i)}):(0,$.jsx)(`span`,{"aria-hidden":`true`,className:v(`icon-md shrink-0`,i),children:(0,$.jsx)(z,{svgString:o,className:`h-full w-full`})}),t[2]=i,t[3]=o,t[4]=s):s=t[4],s}function or(e){if(e==null)return null;let t=e.trim();if(t.length===0||t.length>wr||!t.startsWith(`<svg `)||!t.endsWith(`</svg>`))return null;let n=0,r=!1,i=!1;for(let e of t.matchAll(Tr)){let a=e.index;if(a==null||t.slice(n,a).trim()!==``)return null;n=a+e[0].length;let o=e[1].toLowerCase(),s=e[2]??``;if(!Dr.has(o))return null;o===`svg`&&(r=!0),o===`path`&&(i=!0);let c=e[0].startsWith(`</`);if(c&&s.trim()!==``||!c&&!sr(s))return null}return t.slice(n).trim()===``&&r&&i?t:null}function sr(e){let t=e.replace(Er,``).trim();if(t!==``&&t!==`/`)return!1;for(let t of e.matchAll(Er)){let e=t[1],n=t[2];if(!Or.has(e)||!cr(e,n))return!1}return!0}function cr(e,t){return e===`xmlns`?t===`http://www.w3.org/2000/svg`:e===`fill`?t===`currentColor`||t===`none`:e===`width`||e===`height`?/^\d+(\.\d+)?$/.test(t):e===`viewBox`?/^[\d.\-\s]+$/.test(t):e===`d`&&/^[AaCcHhLlMmQqSsTtVvZz0-9,.\-\s]+$/.test(t)}function lr(e){"use forget";let t=(0,Z.c)(9),{onView:n,title:r}=e,i=fe(),a;t[0]===i?a=t[1]:(a=i.formatMessage({id:`UPARFQ`,defaultMessage:`app`}),t[0]=i,t[1]=a);let o=r??a,s;t[2]===o?s=t[3]:(s=(0,$.jsx)(`span`,{children:(0,$.jsx)(I,{id:`chatgpt.app_block.history_created`,defaultMessage:`Created {appName}`,values:{appName:o}})}),t[2]=o,t[3]=s);let c;t[4]===n?c=t[5]:(c=n==null?null:(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`span`,{"aria-hidden":`true`,children:(0,$.jsx)(I,{id:`chatgpt.app_block.history_separator`,defaultMessage:`•`})}),(0,$.jsx)(`button`,{className:`text-token-text-secondary hover:text-token-text-primary font-semibold transition-colors`,onClick:e=>{n(e.currentTarget)},type:`button`,children:(0,$.jsx)(I,{id:`chatgpt.app_block.history_view`,defaultMessage:`View`})})]}),t[4]=n,t[5]=c);let l;return t[6]!==s||t[7]!==c?(l=(0,$.jsxs)(`div`,{className:`text-token-text-tertiary my-3 flex w-fit items-center gap-1.5 text-sm`,children:[s,c]}),t[6]=s,t[7]=c,t[8]=l):l=t[8],l}function ur(e){"use forget";let t=(0,Z.c)(12),{className:n,onClick:r,ref:i}=e,a=fe(),o;t[0]===a?o=t[1]:(o=a.formatMessage({id:`I094Lq`,defaultMessage:`Open app`}),t[0]=a,t[1]=o);let c=o,l;t[2]===r?l=t[3]:(l=e=>{e.stopPropagation(),r()},t[2]=r,t[3]=l);let u;t[4]!==c||t[5]!==i||t[6]!==l?(u=(0,$.jsx)(s,{ref:i,type:`button`,icon:Re,color:`ghost`,size:`medium`,label:c,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:l}),t[4]=c,t[5]=i,t[6]=l,t[7]=u):u=t[7];let d;return t[8]!==n||t[9]!==c||t[10]!==u?(d=(0,$.jsx)(_,{label:c,className:n,children:u}),t[8]=n,t[9]=c,t[10]=u,t[11]=d):d=t[11],d}function dr(e){"use forget";let t=(0,Z.c)(190),{appBlockId:n,additionalResourceDomains:i,bind:a,clientThreadId:o,code:s,id:c,captureConsoleMessages:l,inlineHeight:u,isStreaming:m,onConsoleMessagesChange:h,onReadyChange:g,presentationSurface:_,previewLoadingLabel:y,progressiveStreaming:b,isSavedInlineLoad:ee,ref:x,styleMode:C,surface:te,title:T,variant:E,widgetRefSeenAtMs:ne}=e,D=m!==void 0&&m,re=b!==void 0&&b,O=ee!==void 0&&ee,k=C===void 0?`default`:C,A=te===void 0?`inline`:te,j=E===void 0?`inline`:E,ie=fe(),M=(0,Q.useRef)(null),N=(0,Q.useRef)(null),ae=We(a),[oe,se]=(0,Q.useState)(ae.values),F=p(oe,ae.values)?oe:ae.values;F!==oe&&se(F);let ce=[...ae.callbacks.keys()],[le,ue]=(0,Q.useState)(ce),L=p(le,ce)?le:ce;L!==le&&ue(L);let de=(0,Q.useRef)(F),pe=(0,Q.useRef)(L),me=(0,Q.useRef)(ae.callbacks),R=a!=null,he=(0,Q.useRef)(!1),ge=(0,Q.useRef)(!1),z=(0,Q.useRef)(null),_e=(0,Q.useRef)(null),ve=(0,Q.useRef)(null),B=(0,Q.useRef)(null),ye=(0,Q.useRef)(null),be=(0,Q.useRef)(null),xe=(0,Q.useRef)(null),V=(0,Q.useRef)(null),Se=(0,Q.useRef)(0),Ce=(0,Q.useRef)(null),we=(0,Q.useRef)(null),Te;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(Te=[],t[0]=Te):Te=t[0];let H=(0,Q.useRef)(Te),Ee=r(),De=d(w),{isInternalPreview:Oe,networkPolicy:ke}=(0,Q.useContext)(Me),Ae=ke===void 0?`none`:ke,je=Xe()||Oe,Ne=Je(o)&&!Oe,Pe=Ne||Oe&&Ae===`deps-only`,U=Ee?`dark`:`light`,Fe=ie.locale,Ie;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(Ie={status:`streaming`},t[1]=Ie):Ie=t[1];let[Le,Re]=(0,Q.useState)(Ie),ze=Le.status===`finalized`&&Le.html!==s,Be=re&&!D&&(j===`artifact`||Le.status===`failed`),W=re&&A===`inline`&&Le.status!==`static`&&!Be&&!ze,Ve=W&&D&&j===`artifact`&&!Jn(s),qe=Ve?0:_r,Ye=u??`intrinsic-height`,Ze=je?`execution-enabled`:`execution-disabled`,Qe=Pe?`network-enabled`:`network-disabled`,$e=Oe?`internal-preview`:`workspace-preview`,et=R?`bindings-enabled`:`bindings-disabled`,tt=W?`progressive-app-block-stream`:s,nt;t[2]===i?nt=t[3]:(nt=i??[],t[2]=i,t[3]=nt);let rt;t[4]!==De||t[5]!==Fe||t[6]!==k||t[7]!==A||t[8]!==Ye||t[9]!==Ze||t[10]!==Qe||t[11]!==$e||t[12]!==et||t[13]!==tt||t[14]!==nt||t[15]!==U?(rt=[U,De,A,Ye,k,Fe,Ze,Qe,$e,et,tt,...nt],t[4]=De,t[5]=Fe,t[6]=k,t[7]=A,t[8]=Ye,t[9]=Ze,t[10]=Qe,t[11]=$e,t[12]=et,t[13]=tt,t[14]=nt,t[15]=U,t[16]=rt):rt=t[16];let it=rt.join(`\0`),at;t[17]===i?at=t[18]:(at=tn(i),t[17]=i,t[18]=at);let ot=at,st=O?`saved_inline`:void 0,ct=Pe?`deps_only`:`disabled`,lt=A===`inline`?j:void 0,ut=W?`progressive`:`static`,dt;t[19]!==A||t[20]!==st||t[21]!==ct||t[22]!==lt||t[23]!==ut?(dt={loadSource:st,networkPolicy:ct,surface:A,variant:lt,renderMode:ut},t[19]=A,t[20]=st,t[21]=ct,t[22]=lt,t[23]=ut,t[24]=dt):dt=t[24];let ft=dt,[pt,mt]=(0,Q.useState)(0),[ht,gt]=(0,Q.useState)(null),_t=ht?.signature===it?ht.status:null,K=_t===`ready`,vt=K||_t===`failed_after_ready`,yt=W&&_t===`failed`,q=!D&&!W&&_t===`failed`,bt=_??A,xt=bt===`stage`||u!=null,St=u==null?A:`stage`,wt=re&&bt===`inline`&&j===`inline`,Et=W&&bt===`inline`&&D&&!q,Dt;t[25]!==s||t[26]!==ft||t[27]!==ne?(Dt={content:s,metricTags:ft,widgetRefSeenAtMs:ne},t[25]=s,t[26]=ft,t[27]=ne,t[28]=Dt):Dt=t[28];let{cancelFirstPaintFrame:kt,startRunMetrics:At}=Ot(Dt),jt,Mt;t[29]===K?(jt=t[30],Mt=t[31]):(jt=()=>{K&&be.current?.markFirstPaint()},Mt=[K],t[29]=K,t[30]=jt,t[31]=Mt),f(jt,Mt);let Nt,Pt;t[32]!==K||t[33]!==g?(Nt=()=>{g?.(K)},Pt=[K,g],t[32]=K,t[33]=g,t[34]=Nt,t[35]=Pt):(Nt=t[34],Pt=t[35]),(0,Q.useEffect)(Nt,Pt);let Ft,It;t[36]!==L||t[37]!==F||t[38]!==ae.callbacks?(Ft=()=>{de.current=F,pe.current=L,me.current=ae.callbacks},It=[L,F,ae.callbacks],t[36]=L,t[37]=F,t[38]=ae.callbacks,t[39]=Ft,t[40]=It):(Ft=t[39],It=t[40]),f(Ft,It);let Lt;t[41]===Symbol.for(`react.memo_cache_sentinel`)?(Lt=e=>{N.current===e&&M.current?.updateAppBlockMessenger?.(Ke(e,de.current,pe.current))},t[41]=Lt):Lt=t[41];let Rt=P(Lt),zt;t[42]===Rt?zt=t[43]:(zt=e=>{let t=N.current;if(t==null)return;let n=Ge(e,t),r=n&&me.current.get(n.name);if(n!=null&&r){let e=()=>{S.postTask(()=>Rt(t))};try{Promise.resolve(r(...n.args)).then(e,e)}catch{e()}}},t[42]=Rt,t[43]=zt);let Bt=P(zt),Vt;t[44]!==R||t[45]!==K||t[46]!==Rt?(Vt=()=>{let e=N.current;!K||!R||e==null||Rt(e)},t[44]=R,t[45]=K,t[46]=Rt,t[47]=Vt):Vt=t[47];let Ht;t[48]!==L||t[49]!==F||t[50]!==R||t[51]!==K||t[52]!==Rt?(Ht=[L,F,R,K,Rt],t[48]=L,t[49]=F,t[50]=R,t[51]=K,t[52]=Rt,t[53]=Ht):Ht=t[53],(0,Q.useEffect)(Vt,Ht);let Ut,Wt;t[54]!==u||t[55]!==K||t[56]!==_?(Ut=()=>{!K||_==null||M.current?.updateAppBlockSurface?.(u==null?_:`stage`)},Wt=[u,K,_],t[54]=u,t[55]=K,t[56]=_,t[57]=Ut,t[58]=Wt):(Ut=t[57],Wt=t[58]),(0,Q.useEffect)(Ut,Wt);let Gt,Kt;t[59]===Symbol.for(`react.memo_cache_sentinel`)?(Gt=()=>({clearCapturedConsoleMessages:()=>{H.current=[]},captureScreenshotDataUrl:async()=>(await M.current?.screenshot())?.imageBase64??null,focus:()=>{M.current?.focus()}}),Kt=[],t[59]=Gt,t[60]=Kt):(Gt=t[59],Kt=t[60]),(0,Q.useImperativeHandle)(x,Gt,Kt);let qt;t[61]===Symbol.for(`react.memo_cache_sentinel`)?(qt=()=>{Ce.current!=null&&(window.clearTimeout(Ce.current),Ce.current=null)},t[61]=qt):qt=t[61];let Jt=P(qt),Yt;t[62]===Symbol.for(`react.memo_cache_sentinel`)?(Yt=()=>{we.current!=null&&(window.clearTimeout(we.current),we.current=null)},t[62]=Yt):Yt=t[62];let J=P(Yt),Xt;t[63]!==K||t[64]!==W?(Xt=()=>{if(!W||!K||ye.current==null)return;let e=B.current,t=M.current;if(e==null||t?.updateAppBlockStream==null||ge.current)return;let n=Se.current;B.current=null,_e.current=Ct(),ve.current=e.html,e.isFinal&&(ge.current=!0);let r=()=>Se.current!==n||ye.current==null?Promise.resolve():t.updateAppBlockStream?.(e)??Promise.resolve(),i=V.current,a=i==null?r():i.then(r);V.current=a,a.then(()=>{V.current===a&&(V.current=null);let t=ye.current;Se.current!==n||t==null||(Jn(e.html)&&t.markFirstPaint(),e.isFinal&&(t.reportPayloadSize(e.html),Re({status:`finalized`,html:e.html})))},e=>{V.current===a&&(V.current=null),Se.current===n&&(e instanceof DOMException&&e.name===`AbortError`||xe.current?.(`stream_update`,Tt(e)))})},t[63]=K,t[64]=W,t[65]=Xt):Xt=t[65];let Zt=P(Xt),Qt;t[66]!==De||t[67]!==Pe||t[68]!==l||t[69]!==Jt||t[70]!==J||t[71]!==s||t[72]!==St||t[73]!==R||t[74]!==je||t[75]!==ze||t[76]!==O||t[77]!==D||t[78]!==Fe||t[79]!==h||t[80]!==g||t[81]!==_||t[82]!==it||t[83]!==Le.status||t[84]!==Be||t[85]!==W||t[86]!==At||t[87]!==k||t[88]!==U?(Qt=()=>{if(!je)return;if(Le.status===`failed`){if(D)return;Re({status:`static`}),mt(pr);return}(ze||Be&&Le.status!==`static`)&&Re({status:`static`});let e=W&&M.current?.updateAppBlockStream!=null;if(W&&!e){D||Re({status:`static`});return}he.current=!0,ge.current=!1,z.current=null,_e.current=null,ve.current=null,B.current=null,ye.current=null,be.current=null,xe.current=null,V.current=null,J(),Se.current+=1;let t=Se.current;Jt(),gt(null),N.current=R?crypto.randomUUID():null;let{expectReadySignal:n,html:r,frameColorScheme:i}=nn(s,U,Fe,De,St,{loadTailwind:Pe,progressiveStreaming:e,syncPresentationSurface:_!=null,styleMode:k}),a=!1,o=!1,c=!1,u=!1,d=!1,f=()=>Se.current===t,p=()=>e&&o,m=At(f,{deferFirstPaint:e||O,deferPayloadSize:e});O&&(be.current=m),e&&(ye.current=m);let v=e=>{!l||h==null||!f()||(H.current=e,!u&&(u=!0,S.postTask(()=>{u=!1,f()&&h(H.current)},{priority:`background`})))},y=e=>{if(!(!f()||a||c)){if(a=!0,Jt(),m.markReady(e),O){o=!0,gt({signature:it,status:`ready`});return}d||(d=!0,S.postTask(()=>{d=!1,!(!f()||c)&&(o=!0,gt({signature:it,status:`ready`}))},{priority:`background`}))}},b=(t,n)=>{!f()||c||(c=!0,Jt(),J(),B.current=null,ye.current=null,e&&Re({status:`failed`}),gt({signature:it,status:p()?`failed_after_ready`:`failed`,readyTimedOut:n===`ready_timeout`}),m.reportFailure(t,n),S.postTask(()=>{f()&&(e?g?.(!1):g?.(!1,`failure`))},{priority:`background`}))};xe.current=b,H.current=[],v([]),Ce.current=window.setTimeout(()=>{b(`sandbox_eval`,`ready_timeout`)},yr),(async()=>{let e=M.current?.evalAsync({code:r,...N.current==null?{}:{additionalGlobals:{__appBlockMessenger:Ke(N.current,de.current,pe.current)}},expectReadySignal:n,language:`html`,frameColorScheme:i,shouldPreservePreviewOnFatalError:()=>f()&&p()});if(e==null){b(`sandbox_eval`,`missing_generator`);return}for(;;){let t=await e.next();if(t.done){f()&&!a&&b(`sandbox_eval`,`generator_completed_without_ready`);break}f()&&(v([...H.current,t.value]),t.value.type===Ue.ENVIRONMENT_STATUS&&t.value.status===He.RUNNING_CODE&&y(`running_code`),t.value.type===Ue.RUN_COMPLETE&&(t.value.wasFatalError?b(`runtime`,`fatal_runtime_error`):(y(`run_complete`),m.reportSuccess(`run_complete`))),await S.yield())}})().catch(e=>{f()&&(e instanceof DOMException&&e.name===`AbortError`||b(`sandbox_eval`,Tt(e)))})},t[66]=De,t[67]=Pe,t[68]=l,t[69]=Jt,t[70]=J,t[71]=s,t[72]=St,t[73]=R,t[74]=je,t[75]=ze,t[76]=O,t[77]=D,t[78]=Fe,t[79]=h,t[80]=g,t[81]=_,t[82]=it,t[83]=Le.status,t[84]=Be,t[85]=W,t[86]=At,t[87]=k,t[88]=U,t[89]=Qt):Qt=t[89];let Y=P(Qt),$t;t[90]!==Jt||t[91]!==J?($t=()=>{Se.current+=1,he.current=!1,ge.current=!1,z.current=null,ve.current=null,B.current=null,ye.current=null,xe.current=null,V.current=null,Jt(),J(),gt(null),mt(fr)},t[90]=Jt,t[91]=J,t[92]=$t):$t=t[92];let en=P($t),rn;t[93]!==xt||t[94]!==bt?(rn=bt===`inline`&&!xt?{margin:-4,width:`calc(100% + ${vr*2}px)`}:void 0,t[93]=xt,t[94]=bt,t[95]=rn):rn=t[95];let an=rn,on;t[96]!==kt||t[97]!==Jt||t[98]!==J||t[99]!==Y?(on=()=>{Y();let e=M.current;return()=>{Se.current+=1,N.current=null,ye.current=null,be.current=null,xe.current=null,V.current=null,Jt(),J(),kt(),e?.stop()}},t[96]=kt,t[97]=Jt,t[98]=J,t[99]=Y,t[100]=on):on=t[100];let sn;t[101]!==kt||t[102]!==Jt||t[103]!==J||t[104]!==je||t[105]!==it||t[106]!==Y||t[107]!==pt?(sn=[kt,Jt,J,je,it,Y,pt],t[101]=kt,t[102]=Jt,t[103]=J,t[104]=je,t[105]=it,t[106]=Y,t[107]=pt,t[108]=sn):sn=t[108],(0,Q.useEffect)(on,sn);let cn,ln;t[109]!==D||t[110]!==Y||t[111]!==W?(cn=()=>{!W||D||he.current||M.current?.updateAppBlockStream!=null||Y()},ln=[D,Y,W],t[109]=D,t[110]=Y,t[111]=W,t[112]=cn,t[113]=ln):(cn=t[112],ln=t[113]),(0,Q.useEffect)(cn,ln);let un,dn;if(t[114]!==J||t[115]!==s||t[116]!==Zt||t[117]!==q||t[118]!==K||t[119]!==D||t[120]!==W||t[121]!==j?(un=()=>{if(!W||!K||q||ge.current||M.current?.updateAppBlockStream==null)return;let e=D?qn(s):s;if(D&&(B.current?.html??ve.current)===e)return;if(B.current={html:e,isFinal:!D},!D){J(),Zt();return}let t=_e.current;if(t==null&&j===`artifact`&&(z.current??=Ct(),t=z.current),t==null){Zt();return}let n=j===`artifact`?xr:br,r=Ct()-t;if(r>=n){Zt();return}return we.current=window.setTimeout(()=>{we.current=null,Zt()},n-r),J},dn=[J,s,Zt,q,K,D,W,j],t[114]=J,t[115]=s,t[116]=Zt,t[117]=q,t[118]=K,t[119]=D,t[120]=W,t[121]=j,t[122]=un,t[123]=dn):(un=t[122],dn=t[123]),(0,Q.useEffect)(un,dn),!je){let e;return t[124]===Symbol.for(`react.memo_cache_sentinel`)?(e=(0,$.jsx)(Dn,{}),t[124]=e):e=t[124],e}let fn=wt&&`flex-col`,pn=bt===`inline`&&(Ve?`h-0 min-h-0 overflow-hidden`:`min-h-[120px] overflow-visible`),mn=bt===`stage`&&`h-full min-h-0`,hn;t[125]!==fn||t[126]!==pn||t[127]!==mn?(hn=v(`flex w-full`,fn,pn,mn),t[125]=fn,t[126]=pn,t[127]=mn,t[128]=hn):hn=t[128];let gn;t[129]!==wt||t[130]!==Et||t[131]!==T?(gn=wt?(0,$.jsx)(Ln,{isVisible:Et,title:T}):null,t[129]=wt,t[130]=Et,t[131]=T,t[132]=gn):gn=t[132];let _n=!D&&!W&&(_t===`failed`||_t===`failed_after_ready`)&&ht?.readyTimedOut||void 0,vn=bt===`inline`&&!xt?`flex-none`:`w-full`,yn=Et&&`mask-shimmer mask-shimmer-duration-2800 motion-reduce:animate-none`,bn;t[133]!==vn||t[134]!==yn?(bn=v(`relative min-w-0`,vn,yn),t[133]=vn,t[134]=yn,t[135]=bn):bn=t[135];let xn;t[136]!==u||t[137]!==an||t[138]!==bt?(xn=bt===`inline`&&u!=null?{height:u}:an,t[136]=u,t[137]=an,t[138]=bt,t[139]=xn):xn=t[139];let Sn=`${pt}:${Pe?`network-enabled`:`network-disabled`}:${Oe?`internal-preview`:`workspace-preview`}`,Cn;t[140]!==n||t[141]!==o||t[142]!==c?(Cn=JSON.stringify([o??null,n??c]),t[140]=n,t[141]=o,t[142]=c,t[143]=Cn):Cn=t[143];let wn;t[144]===ie?wn=t[145]:(wn=ie.formatMessage({id:`gxcrdR`,defaultMessage:`App block preview`}),t[144]=ie,t[145]=wn);let Tn=Pe?`deps-only`:`none`,En=Ne?Sr:Cr,On=vt?0:-1,kn=R?Bt:void 0,An=bt===`inline`&&!xt,jn=!xt,Mn=W?qe:gr,Nn;t[146]!==c||t[147]!==Oe||t[148]!==Y||t[149]!==ot||t[150]!==Sn||t[151]!==Cn||t[152]!==wn||t[153]!==Tn||t[154]!==En||t[155]!==On||t[156]!==kn||t[157]!==An||t[158]!==jn||t[159]!==Mn?(Nn=(0,$.jsx)(G,{id:c,sandboxOriginId:Cn,title:wn,visuallyHidden:!1,networkPolicy:Tn,disableExternalNavigation:Oe,additionalResourceDomains:ot,sandboxPermissions:En,disablePermissions:!0,enableTransition:!1,enableAnimation:!1,iframeTabIndex:On,onRetryCodeRun:Y,onAppBlockMessage:kn,transparentBackground:An,useIntrinsicHeight:jn,intrinsicHeightFallback:Mn,ref:M},Sn),t[146]=c,t[147]=Oe,t[148]=Y,t[149]=ot,t[150]=Sn,t[151]=Cn,t[152]=wn,t[153]=Tn,t[154]=En,t[155]=On,t[156]=kn,t[157]=An,t[158]=jn,t[159]=Mn,t[160]=Nn):Nn=t[160];let Pn;t[161]===Et?Pn=t[162]:(Pn=Et?(0,$.jsx)(`div`,{"aria-hidden":`true`,className:`absolute inset-0 z-10 cursor-wait`}):null,t[161]=Et,t[162]=Pn);let Fn;t[163]!==yt||t[164]!==q||t[165]!==vt||t[166]!==y||t[167]!==W?(Fn=!vt&&!q&&(!W||yt)?(0,$.jsx)(mr,{label:y}):null,t[163]=yt,t[164]=q,t[165]=vt,t[166]=y,t[167]=W,t[168]=Fn):Fn=t[168];let In;t[169]!==q||t[170]!==en?(In=q?(0,$.jsx)(hr,{onRetry:en}):null,t[169]=q,t[170]=en,t[171]=In):In=t[171];let X;t[172]!==Et||t[173]!==_n||t[174]!==bn||t[175]!==xn||t[176]!==Nn||t[177]!==Pn||t[178]!==Fn||t[179]!==In?(X=(0,$.jsxs)(`div`,{"aria-busy":Et,"data-app-block-ready-timeout":_n,className:bn,style:xn,children:[Nn,Pn,Fn,In]}),t[172]=Et,t[173]=_n,t[174]=bn,t[175]=xn,t[176]=Nn,t[177]=Pn,t[178]=Fn,t[179]=In,t[180]=X):X=t[180];let Rn;t[181]!==y||t[182]!==Et||t[183]!==j?(Rn=Et&&j===`artifact`?(0,$.jsx)(`span`,{"aria-atomic":`true`,"aria-live":`polite`,className:`sr-only`,role:`status`,children:y??(0,$.jsx)(I,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`})}):null,t[181]=y,t[182]=Et,t[183]=j,t[184]=Rn):Rn=t[184];let zn;return t[185]!==hn||t[186]!==gn||t[187]!==X||t[188]!==Rn?(zn=(0,$.jsxs)(`div`,{className:hn,children:[gn,X,Rn]}),t[185]=hn,t[186]=gn,t[187]=X,t[188]=Rn,t[189]=zn):zn=t[189],zn}function fr(e){return e+1}function pr(e){return e+1}function mr(e){"use forget";let t=(0,Z.c)(5),{label:n}=e,r;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=(0,$.jsx)(O,{className:`icon-sm text-token-text-tertiary`}),t[0]=r):r=t[0];let i;t[1]===n?i=t[2]:(i=n??(0,$.jsx)(I,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`}),t[1]=n,t[2]=i);let a;return t[3]===i?a=t[4]:(a=(0,$.jsxs)(`div`,{"aria-live":`polite`,className:`bg-primary absolute inset-0 z-10 flex cursor-wait items-center justify-center gap-2 text-sm`,role:`status`,children:[r,(0,$.jsx)(`span`,{className:`text-token-text-secondary`,children:i})]}),t[3]=i,t[4]=a),a}function hr(e){"use forget";let t=(0,Z.c)(4),{onRetry:n}=e,r;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=(0,$.jsx)(`p`,{className:`text-token-text-secondary text-sm`,children:(0,$.jsx)(I,{id:`chatgpt.app_block.preview_load_failed`,defaultMessage:`This app couldn't load.`})}),t[0]=r):r=t[0];let i;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(i=(0,$.jsx)(I,{id:`chatgpt.app_block.preview_retry`,defaultMessage:`Try again`}),t[1]=i):i=t[1];let a;return t[2]===n?a=t[3]:(a=(0,$.jsxs)(`div`,{className:`bg-primary absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 px-6 text-center`,role:`alert`,children:[r,(0,$.jsx)(s,{type:`button`,color:`secondary`,size:`small`,onClick:n,children:i})]}),t[2]=n,t[3]=a),a}var Z,Q,$,gr,_r,vr,yr,br,xr,Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar,jr,Mr,Nr,Pr=e((()=>{Z=de(),y(),Qe(),we(),De(),l(),oe(),Ze(),x(),W(),Be(),Ve(),ve(),Ye(),A(),je(),ft(),ut(),U(),ie(),u(),j(),be(),E(),C(),c(),N(),et(),pt(),Ne(),qe(),h(),ae(),Q=n(le()),ce(),pn(),Rt(),xt(),En(),me(),An(),_n(),Rn(),it(),he(),Ae(),at(),Gn(),$=se(),gr=432,_r=120,vr=4,yr=15e3,br=100,xr=350,Sr=`allow-scripts allow-same-origin allow-forms`,Cr=`allow-scripts allow-same-origin`,wr=12e3,Tr=/<\/?([a-zA-Z][\w:-]*)(\s[^<>]*)?>/g,Er=/([a-zA-Z_:][\w:.-]*)\s*=\s*"([^"]*)"/g,Dr=new Set([`svg`,`path`]),Or=new Set([`d`,`fill`,`height`,`viewBox`,`width`,`xmlns`]),kr=/<script(?:\s|>)/i,Ar=`script, style, template, link, meta, title, [hidden], [style*="display:none" i], [style*="visibility:hidden" i]`,jr=`audio, br, button, canvas, embed, hr, iframe, img, input, meter, object, picture, progress, select, svg, table, textarea, video`,Mr=e=>{"use forget";let t=(0,Z.c)(13),{canOpen:n,conversation:r,expandButtonRef:i,isReady:a,onOpen:o,target:c}=e,l;t[0]!==n||t[1]!==i||t[2]!==o?(l=n&&o!=null?(0,$.jsx)(ur,{ref:i,className:`shrink-0`,onClick:o}):null,t[0]=n,t[1]=i,t[2]=o,t[3]=l):l=t[3];let u=l;if(r==null)return u;let d;t[4]===c?d=t[5]:(d=c??{contentReferenceIndex:-1,messageId:``},t[4]=c,t[5]=d);let f=d,p=a&&c!=null,m;t[6]===u?m=t[7]:(m=e=>{let{isVisible:t,label:n,onSelect:r}=e;return t?(0,$.jsxs)(`div`,{className:`flex shrink-0 items-center gap-1`,children:[(0,$.jsx)(_,{label:n,children:(0,$.jsx)(s,{type:`button`,icon:Le,color:`ghost`,size:`medium`,label:n,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:e=>{e.stopPropagation(),r()}})}),u]}):u},t[6]=u,t[7]=m);let h;return t[8]!==f||t[9]!==r||t[10]!==p||t[11]!==m?(h=(0,$.jsx)(mt,{category:V.AppBlock,conversation:r,isReady:p,target:f,children:m}),t[8]=f,t[9]=r,t[10]=p,t[11]=m,t[12]=h):h=t[12],h},Nr=e=>{"use forget";let t=(0,Z.c)(9),{children:n,conversation:r,isReady:i,target:a}=e;if(r==null)return n;let o;t[0]===a?o=t[1]:(o=a??{contentReferenceIndex:-1,messageId:``},t[0]=a,t[1]=o);let s=o,c=i&&a!=null,l;t[2]===n?l=t[3]:(l=e=>(0,$.jsxs)(`div`,{className:`group/keyboard-or-hover relative`,children:[n,e.isVisible?(0,$.jsx)(`div`,{className:`pointer-events-none absolute end-2 top-2 z-10`,children:(0,$.jsx)(`div`,{className:`cant-hover:hidden`,children:(0,$.jsx)(ht,{action:e})})}):null]}),t[2]=n,t[3]=l);let u;return t[4]!==s||t[5]!==r||t[6]!==c||t[7]!==l?(u=(0,$.jsx)(mt,{category:V.InlineAppBlock,conversation:r,isReady:c,target:s,children:l}),t[4]=s,t[5]=r,t[6]=c,t[7]=l,t[8]=u):u=t[8],u}}));export{Kn as a,Gn as c,En as d,Ct as f,q as g,bt as h,dr as i,xn as l,xt as m,rr as n,Pr as o,Rt as p,mr as r,zn as s,Yn as t,Sn as u};
//# sourceMappingURL=e3b746a6-b4ua0avjvpu8tl57.js.map