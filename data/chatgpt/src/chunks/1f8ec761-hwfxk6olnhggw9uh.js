import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J5 as t,
    q5 as n
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Pn as r,
    Vn as i,
    zn as a
} from "./2340486e-komxp8tzs51ny4jj.js";

function o({
    className: e,
    linesAdded: t,
    linesRemoved: i
}) {
    return !t && !i ? null : (0, s.jsxs)(`div`, {
        className: n(`flex flex-row gap-1 font-medium`, e),
        children: [(0, s.jsx)(`span`, {
            className: `text-green-500`,
            children: (0, s.jsx)(r, {
                id: `wham.message.modal.repoAndDiffStats.linesAdded`,
                defaultMessage: `+{linesAdded}`,
                values: {
                    linesAdded: t
                }
            })
        }), (0, s.jsx)(`span`, {
            className: `text-red-500`,
            children: (0, s.jsx)(r, {
                id: `wham.message.modal.repoAndDiffStats.linesRemoved`,
                defaultMessage: `-{linesRemoved}`,
                values: {
                    linesRemoved: i
                }
            })
        })]
    })
}
var s, c = e((() => {
    t(), a(), s = i()
}));
export {
    c as n, o as t
};
//# sourceMappingURL=1f8ec761-hwfxk6olnhggw9uh.js.map