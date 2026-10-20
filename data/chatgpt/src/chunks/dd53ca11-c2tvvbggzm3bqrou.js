import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J5 as t,
    Y5 as n
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as r
} from "./2340486e-i7pjxgdhv0bs6apg.js";

function i({
    id: e,
    question: n,
    answer: r,
    isOpen: i,
    onToggle: o
}) {
    let s = `${e??n}-question`,
        c = `${e??n}-answer`;
    return (0, a.jsxs)(`div`, {
        className: `border-token-border-default hover:border-token-border-heavy border-b`,
        children: [(0, a.jsxs)(`button`, {
            onClick: o,
            className: `text-md flex w-full justify-between py-5 text-start text-[17px]`,
            "aria-expanded": i,
            "aria-controls": c,
            id: s,
            "aria-label": `${n} ${i?`close`:`open`}`,
            children: [n, (0, a.jsx)(`span`, {
                className: `ps-4`,
                children: i ? `−` : `+`
            })]
        }), (0, a.jsx)(`div`, {
            className: t(`grid transition-all duration-200`, {
                "grid-rows-[1fr]": i,
                "grid-rows-[0fr]": !i
            }),
            "aria-hidden": !i,
            id: c,
            children: (0, a.jsx)(`div`, {
                className: `overflow-hidden`,
                children: (0, a.jsx)(`div`, {
                    className: `mb-5 text-[14px] opacity-70`,
                    children: r
                })
            })
        })]
    })
}
var a, o = e((() => {
    n(), a = r()
}));
export {
    o as n, i as t
};
//# sourceMappingURL=dd53ca11-c2tvvbggzm3bqrou.js.map