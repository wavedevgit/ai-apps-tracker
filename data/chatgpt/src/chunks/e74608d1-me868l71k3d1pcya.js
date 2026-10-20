import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    nY as t,
    qJ as n
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Hn as r,
    Vn as i
} from "./conversation-small-cawdu7il3ha6y70c.js";
var a, o = e((() => {
        r(), a = i(e => ({
            currentTime: 0,
            setCurrentTime: t => e(() => ({
                currentTime: t
            })),
            isOpen: !1,
            openSidebar: () => e({
                isOpen: !0
            }),
            closeSidebar: () => e({
                isOpen: !1
            }),
            hoveringSpeakerId: null,
            setHoveringSpeakerId: t => e({
                hoveringSpeakerId: t
            }),
            editingSpeaker: null,
            setEditingSpeaker: t => e({
                editingSpeaker: t
            }),
            speakers: new Map,
            setSpeakers: t => e({
                speakers: t
            }),
            enableDebugger: !1,
            setEnableDebugger: t => e(() => ({
                enableDebugger: t
            })),
            selectedFilters: [`default`, `revive`],
            setSelectedFilters: t => e(() => ({
                selectedFilters: t
            }))
        }))
    })),
    s, c, l, u = e((() => {
        o(), t(), s = e => t => n.findMessage(t, t => {
            let n = t.metadata?.canvas;
            return n?.textdoc_id === e && !!n.hive_id
        })?.metadata?.canvas?.hive_id, c = e => {
            let t = Math.floor(e / 3600),
                n = Math.floor(e % 3600 / 60),
                r = e % 60,
                i = t.toString().padStart(2, `0`),
                a = n.toString().padStart(2, `0`),
                o = r.toString().padStart(2, `0`);
            return t > 0 ? `${i}:${a}:${o}` : `${a}:${o}`
        }, l = e => {
            let {
                setSpeakers: t
            } = a.getState(), n = e.compact_transcript, r = Object.values(e.compact_transcript?.speakers ?? {});
            return t(new Map(r?.map(e => [e.id, {
                name: void 0,
                storedName: e.updated_name,
                placeholderName: e.name,
                isEdited: !1
            }]))), (n?.segments ?? []).map(e => ({
                speakerId: e.speaker_id,
                range: {
                    min: e.start_seconds,
                    max: e.end_seconds
                },
                content: e.content,
                filterDecision: e.filter_decision
            }))
        }
    }));
export {
    o as a, l as i, s as n, a as o, u as r, c as t
};
//# sourceMappingURL=e74608d1-me868l71k3d1pcya.js.map