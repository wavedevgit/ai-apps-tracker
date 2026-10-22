import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    CR as r,
    IU as i,
    LU as a,
    Qy as o,
    Sl as s,
    TR as c,
    Zy as l,
    bl as u,
    eE as d,
    fB as f,
    grt as p,
    hl as m,
    l7 as h,
    ml as g,
    o0 as _,
    pB as v,
    q1 as y,
    u7 as b,
    urt as x
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Bn as S,
    N as C,
    Nn as w,
    Q as T,
    Rn as E,
    Tn as D,
    Vn as O,
    it as k,
    p as A,
    s as j,
    wn as M,
    zn as N
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Dun as P,
    dun as F,
    ex as I,
    ib as L,
    rb as ee,
    tx as R
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    Cu as te,
    Gb as ne,
    Tu as re,
    Wb as z
} from "./30901919-k5uqyx4vyplt9toa.js";
import {
    Fv as B,
    Iv as ie,
    i_ as ae,
    n_ as oe
} from "./c2675c8c-jg3tpj8mw86wdc0g.js";
import {
    g_ as se,
    h_ as V
} from "./8b34dbc2-bgocf3s6t6l67twq.js";
import {
    i as ce,
    n as le
} from "./5f4d7fa0-me27tfro8khlo54d.js";

function ue({
    isGitLabConnectorSettingsEnabled: e,
    isGitHubConnected: t,
    isGitLabConnected: n
}) {
    return !e || !n ? `github` : t ? `both` : `gitlab`
}
var de = e((() => {}));

function H(e) {
    return !!e && typeof e == `object` && `pages` in e
}

function fe(e, t) {
    if (t == null) return t;
    let n = {
        ...e ?? {}
    };
    return t.global_review_preference !== void 0 && (n.global_review_preference = t.global_review_preference), t.review_preference == null ? `review_preference` in t && t.review_preference == null && delete n.review_preference : n.review_preference = t.review_preference, t.trigger_policy == null ? `trigger_policy` in t && t.trigger_policy == null && delete n.trigger_policy : n.trigger_policy = t.trigger_policy, t.severity_threshold == null ? `severity_threshold` in t && t.severity_threshold == null && delete n.severity_threshold : n.severity_threshold = t.severity_threshold, t.manual_severity_threshold == null ? `manual_severity_threshold` in t && t.manual_severity_threshold == null && delete n.manual_severity_threshold : n.manual_severity_threshold = t.manual_severity_threshold, t.threat_model_source !== void 0 && (n.threat_model_source = t.threat_model_source), t.threat_model_file_path !== void 0 && (n.threat_model_file_path = t.threat_model_file_path), t.path_rules !== void 0 && (n.path_rules = t.path_rules), t.merge_gate_enabled == null ? `merge_gate_enabled` in t && t.merge_gate_enabled == null && delete n.merge_gate_enabled : n.merge_gate_enabled = t.merge_gate_enabled, t.blocking_severity_threshold == null ? `blocking_severity_threshold` in t && t.blocking_severity_threshold == null && delete n.blocking_severity_threshold : n.blocking_severity_threshold = t.blocking_severity_threshold, n
}

function U() {
    "use no forget";
    let e = C(),
        t = N(),
        n = c(),
        r = _();
    return A({
        mutationFn: e => g.updateCodeReviewRepositories(e, r?.id),
        onMutate: async t => {
            await e.cancelQueries({
                queryKey: [`wham`, `codeReviewRepositories`]
            });
            let i = e.getQueriesData({
                queryKey: [`wham`, `codeReviewRepositories`]
            });
            return e.setQueriesData({
                queryKey: [`wham`, `codeReviewRepositories`]
            }, e => {
                if (!e) return e;
                let i = new Map((t?.repo_review_settings ?? []).map(e => [e.repository, e])),
                    a = n?.email ?? null,
                    o = W(r);
                if (H(e)) return {
                    ...e,
                    pages: e.pages.map(e => ({
                        ...e,
                        repo_review_settings: e.repo_review_settings.map(e => {
                            let t = i.get(e.repository.id);
                            return t === void 0 ? e : pe(e, t, a, o)
                        })
                    }))
                };
                let s = e;
                return {
                    ...s,
                    repo_review_settings: s.repo_review_settings.map(e => {
                        let t = i.get(e.repository.id);
                        return t === void 0 ? e : pe(e, t, a, o)
                    })
                }
            }), {
                previous: i
            }
        },
        onError: (n, r, a) => {
            a?.previous && a.previous.forEach(([t, n]) => {
                e.setQueryData(t, n)
            }), i().danger(t.formatMessage({
                id: `wham.codeReviewPage.teamAutomations.toast.onError`,
                defaultMessage: `Error updating code review preferences`
            }), {
                duration: 2,
                hasCloseButton: !0
            })
        },
        onSettled: async () => {
            await Promise.all([e.invalidateQueries({
                queryKey: [`wham`, `codeReviewRepositories`]
            }), e.invalidateQueries({
                queryKey: [`wham`, `workspaceCodeReviewRepositories`]
            })])
        }
    })
}
var pe, W, G = e((() => {
    y(), r(), a(), m(), j(), E(), pe = (e, t, n, r) => {
        let i = {
            ...e,
            updated_at: new Date().toISOString(),
            last_updated_user_email: n
        };
        return t.review_preference !== void 0 && (i.review_preference = t.review_preference), t.global_review_preference !== void 0 && (i.global_review_preference = t.global_review_preference, (!e.funding_authorization_required || t.authorize_funding) && (i.global_review_account_id = r)), t.code_review_trigger_policy !== void 0 && (i.code_review_trigger_policy = t.code_review_trigger_policy), t.exhaustive_code_review !== void 0 && (i.exhaustive_code_review = t.exhaustive_code_review), t.security_review !== void 0 && (i.security_review = fe(i.security_review, t.security_review)), i
    }, W = e => e?.getWorkspaceId() ?? e?.normalizedAccountUserId ?? null
}));

function me(e = `github`) {
    return x(`3234831587`) && (e === `github` || x(`3733799077`))
}

function he() {
    return x(`579168209`)
}
var ge = e((() => {
    p()
}));

function K(e) {
    return J.some(t => t === e)
}

function q(e, {
    isPlus: t,
    isPro: n,
    selectedValue: r
}) {
    return e !== `team` || t || n || r === `team`
}

function _e(e, t) {
    return e.filter(e => q(e, t))
}

function ve(e, t) {
    return e.filter(e => q(e.value, t))
}
var J, ye = e((() => {
        J = [`everyone`, `team`, `default`]
    })),
    be, Y, xe, X = e((() => {
        be = M(), d(), y(), G(), E(), Y = S(), xe = e => {
            "use forget";
            let t = (0, be.c)(18),
                {
                    repo: r,
                    disabled: i
                } = e,
                a = _(),
                o = N(),
                s = U(),
                c;
            t[0] !== a?.name || t[1] !== o ? (c = a?.name ?? o.formatMessage({
                id: `wham.workspaceReviewControls.selectedAccount`,
                defaultMessage: `the selected account`
            }), t[0] = a?.name, t[1] = o, t[2] = c) : c = t[2];
            let l;
            t[3] === c ? l = t[4] : (l = (0, Y.jsx)(`p`, {
                className: `text-token-text-secondary text-sm`,
                children: (0, Y.jsx)(w, {
                    id: `wham.workspaceReviewControls.reconnectConfirm`,
                    defaultMessage: `Allow {account} to fund automatic reviews for this repository? Review preferences will stay the same.`,
                    values: {
                        account: c
                    }
                })
            }), t[3] = c, t[4] = l);
            let u = i || !a,
                d;
            t[5] !== s || t[6] !== r.funding_generation || t[7] !== r.repository.id || t[8] !== r.review_preference ? (d = () => s.mutate({
                repo_review_settings: [{
                    repository: r.repository.id,
                    review_preference: r.review_preference,
                    funding_generation: r.funding_generation,
                    authorize_funding: !0
                }]
            }), t[5] = s, t[6] = r.funding_generation, t[7] = r.repository.id, t[8] = r.review_preference, t[9] = d) : d = t[9];
            let f;
            t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, Y.jsx)(w, {
                id: `wham.workspaceReviewControls.reconnectButton`,
                defaultMessage: `Allow funding`
            }), t[10] = f) : f = t[10];
            let p;
            t[11] !== s.isPending || t[12] !== u || t[13] !== d ? (p = (0, Y.jsx)(n, {
                type: `button`,
                color: `secondary`,
                disabled: u,
                loading: s.isPending,
                onClick: d,
                children: f
            }), t[11] = s.isPending, t[12] = u, t[13] = d, t[14] = p) : p = t[14];
            let m;
            return t[15] !== l || t[16] !== p ? (m = (0, Y.jsxs)(`div`, {
                className: `flex flex-col items-start gap-2`,
                children: [l, p]
            }), t[15] = l, t[16] = p, t[17] = m) : m = t[17], m
        }
    }));

function Se(e) {
    return qe.some(t => t === e)
}

function Ce(e) {
    return Je.some(t => t === e)
}

function Z(e) {
    return Ye.some(t => t === e)
}

function we(e) {
    return e.global_review_preference === `review_everyone` ? `everyone` : e.review_preference === `team` ? `team` : `default`
}

function Te(e) {
    let t = e.security_review;
    return t ? t.global_review_preference === `review_everyone` ? `everyone` : t.review_preference === `team` ? `team` : `default` : `default`
}

function Ee(e) {
    return e.security_review?.trigger_policy ?? `follow_personal`
}

function De(e, t) {
    let n = {
        global_review_preference: e === `everyone` ? `review_everyone` : `review_if_enabled`,
        review_preference: e === "default" ? `never` : `team`
    };
    return t !== void 0 && (n.trigger_policy = t === `follow_personal` ? null : t), n
}

function Oe(e) {
    return e.code_review_trigger_policy ?? `follow_personal`
}

function ke(e) {
    return e.exhaustive_code_review == null ? `follow_personal` : e.exhaustive_code_review ? `enabled` : `disabled`
}

function Ae(e) {
    let t = e.repository.id ?? e.repository.repository_full_name ?? e.repository.name;
    return t ? t.toString() : `${e.repository.owner?.login??`repo`}-${we(e)}`
}

function je(e, t = `github`) {
    let n = [{
        value: `everyone`,
        title: e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.option.always.title`,
            defaultMessage: `Review all PRs`
        }),
        description: e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.option.always.description`,
            defaultMessage: `Run auto code reviews on every pull request, even from contributors outside this workspace`
        }),
        individual_description: e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.option.always.individual_description`,
            defaultMessage: `Run on every pull request, even from other contributors`
        })
    }, {
        value: `team`,
        title: e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.option.team.title`,
            defaultMessage: `Review team PRs`
        }),
        individual_title: e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.option.always.individual_title`,
            defaultMessage: `Review my PRs`
        }),
        description: e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.option.team.description`,
            defaultMessage: `Only run on pull requests opened by members of this workspace`
        }),
        individual_description: e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.option.team.individual_description`,
            defaultMessage: `Only run on pull requests opened by me`
        })
    }, {
        value: `default`,
        title: e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.option.individuals.title`,
            defaultMessage: `Follow personal`
        }),
        individual_title: e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.option.individuals.individual_title`,
            defaultMessage: `Follow personal`
        }),
        description: e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.option.individuals.description`,
            defaultMessage: `Let users opt in with their personal settings`
        }),
        individual_description: e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.option.individuals.individual_description`,
            defaultMessage: `Run on your own pull requests based on your personal preference`
        })
    }];
    if (t !== `gitlab`) return n;
    let r = {
        everyone: {
            title: e.formatMessage({
                id: `wham.codeReviewPage.teamAutomations.option.always.title.gitlab`,
                defaultMessage: `Review all MRs`
            }),
            description: e.formatMessage({
                id: `wham.codeReviewPage.teamAutomations.option.always.description.gitlab`,
                defaultMessage: `Run auto code reviews on every merge request, even from contributors outside this workspace`
            }),
            individual_description: e.formatMessage({
                id: `wham.codeReviewPage.teamAutomations.option.always.individual_description.gitlab`,
                defaultMessage: `Run on every merge request, even from other contributors`
            })
        },
        team: {
            title: e.formatMessage({
                id: `wham.codeReviewPage.teamAutomations.option.team.title.gitlab`,
                defaultMessage: `Review team MRs`
            }),
            individual_title: e.formatMessage({
                id: `wham.codeReviewPage.teamAutomations.option.team.individual_title.gitlab`,
                defaultMessage: `Review my MRs`
            }),
            description: e.formatMessage({
                id: `wham.codeReviewPage.teamAutomations.option.team.description.gitlab`,
                defaultMessage: `Only run on merge requests opened by members of this workspace`
            }),
            individual_description: e.formatMessage({
                id: `wham.codeReviewPage.teamAutomations.option.team.individual_description.gitlab`,
                defaultMessage: `Only run on merge requests opened by me`
            })
        },
        default: {
            individual_description: e.formatMessage({
                id: `wham.codeReviewPage.teamAutomations.option.individuals.individual_description.gitlab`,
                defaultMessage: `Run on your own merge requests based on your personal preference`
            })
        }
    };
    return n.map(e => ({
        ...e,
        ...r[e.value]
    }))
}

function Me(e, t) {
    return [{
        value: `everyone`,
        title: t ? e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.securityReview.option.always.title.gitlab`,
            defaultMessage: `Review all MRs`
        }) : e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.securityReview.option.always.title`,
            defaultMessage: `Review all PRs`
        }),
        description: t ? e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.securityReview.option.always.description.gitlab`,
            defaultMessage: `Run automatic security reviews on every merge request, even from contributors outside this workspace`
        }) : e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.securityReview.option.always.description`,
            defaultMessage: `Run automatic security reviews on every pull request, even from contributors outside this workspace`
        })
    }, {
        value: `team`,
        title: t ? e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.securityReview.option.team.title.gitlab`,
            defaultMessage: `Review team MRs`
        }) : e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.securityReview.option.team.title`,
            defaultMessage: `Review team PRs`
        }),
        description: t ? e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.securityReview.option.team.description.gitlab`,
            defaultMessage: `Only run automatic security reviews on merge requests opened by members of this workspace`
        }) : e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.securityReview.option.team.description`,
            defaultMessage: `Only run automatic security reviews on pull requests opened by members of this workspace`
        })
    }, {
        value: `default`,
        title: e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.securityReview.option.individuals.title`,
            defaultMessage: `Follow personal`
        }),
        description: e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.securityReview.option.individuals.description`,
            defaultMessage: `Let users opt in with their personal security review settings`
        })
    }]
}

function Ne(e, t = `github`) {
    let n = [{
        value: `follow_personal`,
        title: e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.trigger.followPersonal.title`,
            defaultMessage: `Follow personal`
        }),
        description: e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.trigger.followPersonal.description`,
            defaultMessage: `Use your personal review trigger preference`
        })
    }, {
        value: `pr_open`,
        title: e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.trigger.prOpen.title`,
            defaultMessage: `On PR open`
        }),
        description: e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.trigger.prOpen.description`,
            defaultMessage: `Review when a pull request is opened.`
        })
    }, {
        value: `every_push`,
        title: e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.trigger.everyPush.title`,
            defaultMessage: `On every push`
        }),
        description: e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.trigger.everyPush.description`,
            defaultMessage: `Review again whenever new commits are pushed after the initial review`
        })
    }, {
        value: `smart_detect`,
        title: e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.trigger.smartDetect.title`,
            defaultMessage: `Smart detect (Experimental)`
        }),
        description: e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.trigger.smartDetect.description`,
            defaultMessage: `Codex decides whether to review again based on changes since the last completed review. Experimental and may change.`
        })
    }];
    return t === `gitlab` ? n.map(t => t.value === `pr_open` ? {
        ...t,
        title: e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.trigger.prOpen.title.gitlab`,
            defaultMessage: `On MR open`
        }),
        description: e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.trigger.prOpen.description.gitlab`,
            defaultMessage: `Review when a merge request is opened.`
        })
    } : t) : n
}

function Pe(e, t, n) {
    return [{
        value: `follow_personal`,
        title: e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.securityTrigger.followPersonal.title`,
            defaultMessage: `Follow personal`
        }),
        description: e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.securityTrigger.followPersonal.description`,
            defaultMessage: `Use each contributor's security review trigger preference`
        })
    }, {
        value: `pr_open`,
        title: n ? e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.securityTrigger.prOpen.title.gitlab`,
            defaultMessage: `On MR open`
        }) : e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.securityTrigger.prOpen.title`,
            defaultMessage: `On PR open`
        }),
        description: n ? e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.securityTrigger.prOpen.description.gitlab`,
            defaultMessage: `Review when a merge request is opened.`
        }) : e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.securityTrigger.prOpen.description`,
            defaultMessage: `Review when a pull request is opened.`
        })
    }, {
        value: `every_push`,
        title: e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.securityTrigger.everyPush.title`,
            defaultMessage: `On every push`
        }),
        description: e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.securityTrigger.everyPush.description`,
            defaultMessage: `Review again whenever new commits are pushed after the initial review`
        })
    }, {
        value: `smart_detect`,
        title: e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.securityTrigger.smartDetect.title`,
            defaultMessage: `Smart detect (Experimental)`
        }),
        description: e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.securityTrigger.smartDetect.description`,
            defaultMessage: `Codex decides whether to review again based on changes since the last completed security review. Experimental and may change.`
        })
    }, {
        value: `code_review`,
        title: e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.securityTrigger.codeReview.title`,
            defaultMessage: `Whenever code review runs`
        }),
        description: e.formatMessage({
            id: `wham.codeReviewPage.teamAutomations.securityTrigger.codeReview.description`,
            defaultMessage: `Review whenever Codex runs a code review.`
        })
    }].filter(e => t || e.value !== `smart_detect`)
}

function Fe(e) {
    "use forget";
    let t = (0, Q.c)(61),
        {
            repo: n,
            value: r,
            repoReviewOptions: i,
            isTeamOrEnterprise: a,
            isLegacyEnterprisey: o,
            isPlus: s,
            isPro: c,
            isDisabledRepo: u,
            ownerLogin: d,
            everyoneSetByDifferentAccount: f,
            updateCodeReviewRepositories: p
        } = e,
        m = n.repository.permissions,
        h = [m?.admin, m?.push].some(Boolean),
        g = r === `everyone`,
        _ = g && !h,
        v;
    if (t[0] !== i || t[1] !== r) {
        let e;
        t[3] === r ? e = t[4] : (e = e => e.value === r, t[3] = r, t[4] = e), v = i.find(e), t[0] = i, t[1] = r, t[2] = v
    } else v = t[2];
    let y = v,
        b;
    if (t[5] !== _ || t[6] !== f || t[7] !== a) {
        let e = [];
        if (f) {
            let n;
            t[9] === a ? n = t[10] : (n = a ? (0, $.jsx)(w, {
                id: `wham.codeReviewPage.teamAutomations.everyoneWarningTooltip.differentUser.team`,
                defaultMessage: `This setting was set by a user in a different team.`
            }) : (0, $.jsx)(w, {
                id: `wham.codeReviewPage.teamAutomations.everyoneWarningTooltip.differentUser.individual`,
                defaultMessage: `This setting was set by a different user.`
            }), t[9] = a, t[10] = n), e.push(n)
        }
        if (_) {
            let n;
            t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, $.jsx)(w, {
                id: `wham.codeReviewPage.teamAutomations.everyoneWarningTooltip.noPermissions`,
                defaultMessage: `You must have repo admin or push permissions to change this setting.`
            }), t[11] = n) : n = t[11], e.push(n)
        } else {
            let n;
            t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, $.jsx)(w, {
                id: `wham.codeReviewPage.teamAutomations.everyoneWarningTooltip.changeWarning`,
                defaultMessage: `Changing this setting affects auto code reviews for other contributors to this repository.`
            }), t[12] = n) : n = t[12], e.push(n)
        }
        b = (0, $.jsx)($.Fragment, {
            children: e.map(Ie)
        }), t[5] = _, t[6] = f, t[7] = a, t[8] = b
    } else b = t[8];
    let x = b,
        S;
    t[13] !== n.funding_generation || t[14] !== n.repository.id || t[15] !== p ? (S = e => {
        if (!K(e)) return;
        let t = Ze[e];
        p({
            repo_review_settings: [{
                repository: n.repository.id,
                funding_generation: n.funding_generation,
                review_preference: t.reviewPreference,
                global_review_preference: t.globalReviewPreference
            }]
        })
    }, t[13] = n.funding_generation, t[14] = n.repository.id, t[15] = p, t[16] = S) : S = t[16];
    let C = u || _,
        T = !(g && _) || u,
        E = a ? y?.title : y?.individual_title ?? y?.title,
        D;
    t[17] === E ? D = t[18] : (D = (0, $.jsx)(`div`, {
        className: `flex min-w-0 items-center gap-2 truncate text-sm font-normal`,
        children: E
    }), t[17] = E, t[18] = D);
    let O;
    t[19] !== x || t[20] !== T || t[21] !== D ? (O = (0, $.jsx)(l, {
        label: x,
        withArrow: !0,
        side: `top`,
        sideOffset: 0,
        disabled: T,
        children: D
    }), t[19] = x, t[20] = T, t[21] = D, t[22] = O) : O = t[22];
    let k;
    t[23] === _ ? k = t[24] : (k = _ ? null : (0, $.jsx)(V.Icon, {}), t[23] = _, t[24] = k);
    let A;
    t[25] !== O || t[26] !== k ? (A = (0, $.jsxs)(V.Trigger, {
        className: `w-full min-w-0 justify-between overflow-hidden sm:min-w-[150px]`,
        children: [O, k]
    }), t[25] = O, t[26] = k, t[27] = A) : A = t[27];
    let j;
    t[28] !== _ || t[29] !== x || t[30] !== g ? (j = g && !_ && (0, $.jsx)(V.Item, {
        value: `unselectable`,
        className: `items-start`,
        disabled: !0,
        children: (0, $.jsx)(`div`, {
            className: `flex min-w-[220px] flex-col gap-1`,
            children: (0, $.jsx)(`span`, {
                className: `text-token-text-tertiary text-xs whitespace-normal`,
                children: x
            })
        })
    }, `unselectable`), t[28] = _, t[29] = x, t[30] = g, t[31] = j) : j = t[31];
    let M;
    if (t[32] !== h || t[33] !== o || t[34] !== s || t[35] !== c || t[36] !== a || t[37] !== n.funding_authorization_required || t[38] !== i) {
        let e;
        t[40] !== h || t[41] !== o || t[42] !== s || t[43] !== c || t[44] !== a || t[45] !== n.funding_authorization_required ? (e = e => (0, $.jsx)(V.Item, {
            value: e.value,
            className: `items-start`,
            disabled: e.value === `everyone` && (!h || o || s || n.funding_authorization_required),
            children: (0, $.jsx)(l, {
                label: h ? (0, $.jsxs)($.Fragment, {
                    children: [a && !o && (0, $.jsx)(w, {
                        id: `wham.codeReviewPage.teamAutomations.everyoneCostTooltip.team`,
                        defaultMessage: `Reviews in this repo will consume your workspace's credits`
                    }), s && (0, $.jsx)(w, {
                        id: `wham.codeReviewPage.teamAutomations.everyoneCostTooltip.plus`,
                        defaultMessage: `Upgrade to Pro.`
                    }), c && (0, $.jsx)(w, {
                        id: `wham.codeReviewPage.teamAutomations.everyoneCostTooltip.pro`,
                        defaultMessage: `Review in this repo will count against your plan's usage.`
                    }), a && o && (0, $.jsx)(w, {
                        id: `wham.codeReviewPage.teamAutomations.everyoneCostTooltip.legacyEnterprisey`,
                        defaultMessage: `Ask your ChatGPT admin to upgrade to flexible pricing to enable.`
                    })]
                }) : (0, $.jsx)(w, {
                    id: `wham.codeReviewPage.teamAutomations.everyoneDisabledTooltip`,
                    defaultMessage: `You must have repo admin or push permissions to select this option`
                }),
                disabled: e.value !== `everyone`,
                withArrow: !0,
                side: `top`,
                sideOffset: 0,
                children: (0, $.jsxs)(`div`, {
                    className: `flex min-w-[220px] flex-col gap-1`,
                    children: [(0, $.jsx)(`span`, {
                        className: `text-sm font-normal`,
                        children: a ? e.title : e.individual_title ?? e.title
                    }), (0, $.jsx)(`span`, {
                        className: `text-token-text-tertiary text-xs whitespace-normal`,
                        children: a ? e.description : e.individual_description ?? e.description
                    })]
                })
            })
        }, e.value), t[40] = h, t[41] = o, t[42] = s, t[43] = c, t[44] = a, t[45] = n.funding_authorization_required, t[46] = e) : e = t[46], M = i.map(e), t[32] = h, t[33] = o, t[34] = s, t[35] = c, t[36] = a, t[37] = n.funding_authorization_required, t[38] = i, t[39] = M
    } else M = t[39];
    let N;
    t[47] !== j || t[48] !== M ? (N = (0, $.jsx)(V.Portal, {
        children: (0, $.jsxs)(V.Content, {
            className: `max-w-[340px] min-w-[220px]`,
            "data-unbound-width": ``,
            children: [j, M]
        })
    }), t[47] = j, t[48] = M, t[49] = N) : N = t[49];
    let P;
    t[50] !== A || t[51] !== N || t[52] !== S || t[53] !== C || t[54] !== r ? (P = (0, $.jsxs)(V.Root, {
        value: r,
        onValueChange: S,
        disabled: C,
        children: [A, N]
    }), t[50] = A, t[51] = N, t[52] = S, t[53] = C, t[54] = r, t[55] = P) : P = t[55];
    let F = P;
    if (!u) return F;
    let I;
    t[56] === d ? I = t[57] : (I = (0, $.jsx)(w, {
        id: `wham.codeReviewPage.teamAutomations.repoDisabledTooltip`,
        defaultMessage: `Update the {installation} GitHub installation to enable code review`,
        values: {
            installation: d
        }
    }), t[56] = d, t[57] = I);
    let L;
    return t[58] !== F || t[59] !== I ? (L = (0, $.jsx)(l, {
        label: I,
        withArrow: !0,
        side: `top`,
        sideOffset: 0,
        children: F
    }), t[58] = F, t[59] = I, t[60] = L) : L = t[60], L
}

function Ie(e, t) {
    return (0, $.jsxs)(`span`, {
        children: [e, ` `]
    }, t)
}

function Le(e) {
    "use forget";
    let t = (0, Q.c)(50),
        {
            repo: n,
            provider: r,
            isDisabledRepo: i,
            ownerLogin: a,
            updateCodeReviewRepositories: o
        } = e,
        s = N(),
        c = n.repository.permissions,
        u = [c?.admin, c?.push].some(Boolean),
        d = u && !i,
        f, p, m, h, g, _, v, y, b, x;
    if (t[0] !== d || t[1] !== s || t[2] !== r || t[3] !== n || t[4] !== o) {
        let e = Ne(s, r),
            i;
        t[15] === n ? i = t[16] : (i = Oe(n), t[15] = n, t[16] = i);
        let a = i,
            c;
        t[17] === a ? c = t[18] : (c = e => e.value === a, t[17] = a, t[18] = c);
        let l = e.find(c);
        m = V.Root, v = a, t[19] !== n.funding_generation || t[20] !== n.global_review_preference || t[21] !== n.repository.id || t[22] !== n.review_preference || t[23] !== o ? (y = e => {
            if (!Se(e)) return;
            let t = Qe[e];
            o({
                repo_review_settings: [{
                    repository: n.repository.id,
                    funding_generation: n.funding_generation,
                    review_preference: n.review_preference,
                    ...n.global_review_preference ? {
                        global_review_preference: n.global_review_preference
                    } : {},
                    code_review_trigger_policy: t
                }]
            })
        }, t[19] = n.funding_generation, t[20] = n.global_review_preference, t[21] = n.repository.id, t[22] = n.review_preference, t[23] = o, t[24] = y) : y = t[24], b = !d;
        let u;
        t[25] === d ? u = t[26] : (u = d ? (0, $.jsx)(V.Icon, {}) : null, t[25] = d, t[26] = u), x = (0, $.jsxs)(V.Trigger, {
            className: `w-full min-w-0 justify-between overflow-hidden sm:min-w-[150px]`,
            children: [(0, $.jsx)(`div`, {
                className: `min-w-0 truncate text-sm font-normal`,
                children: l?.title
            }), u]
        }), p = V.Portal, f = V.Content, h = `max-w-[360px] min-w-[260px]`, g = ``, _ = e.map(Re), t[0] = d, t[1] = s, t[2] = r, t[3] = n, t[4] = o, t[5] = f, t[6] = p, t[7] = m, t[8] = h, t[9] = g, t[10] = _, t[11] = v, t[12] = y, t[13] = b, t[14] = x
    } else f = t[5], p = t[6], m = t[7], h = t[8], g = t[9], _ = t[10], v = t[11], y = t[12], b = t[13], x = t[14];
    let S;
    t[27] !== f || t[28] !== h || t[29] !== g || t[30] !== _ ? (S = (0, $.jsx)(f, {
        className: h,
        "data-unbound-width": g,
        children: _
    }), t[27] = f, t[28] = h, t[29] = g, t[30] = _, t[31] = S) : S = t[31];
    let C;
    t[32] !== p || t[33] !== S ? (C = (0, $.jsx)(p, {
        children: S
    }), t[32] = p, t[33] = S, t[34] = C) : C = t[34];
    let T;
    t[35] !== m || t[36] !== v || t[37] !== y || t[38] !== b || t[39] !== x || t[40] !== C ? (T = (0, $.jsxs)(m, {
        value: v,
        onValueChange: y,
        disabled: b,
        children: [x, C]
    }), t[35] = m, t[36] = v, t[37] = y, t[38] = b, t[39] = x, t[40] = C, t[41] = T) : T = t[41];
    let E = T;
    if (i) {
        let e;
        t[42] === a ? e = t[43] : (e = (0, $.jsx)(w, {
            id: `wham.codeReviewPage.teamAutomations.repoDisabledTooltip`,
            defaultMessage: `Update the {installation} GitHub installation to enable code review`,
            values: {
                installation: a
            }
        }), t[42] = a, t[43] = e);
        let n;
        return t[44] !== E || t[45] !== e ? (n = (0, $.jsx)(l, {
            label: e,
            withArrow: !0,
            side: `top`,
            sideOffset: 0,
            children: E
        }), t[44] = E, t[45] = e, t[46] = n) : n = t[46], n
    }
    if (!u) {
        let e;
        t[47] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(w, {
            id: `wham.codeReviewPage.teamAutomations.triggerDisabledTooltip`,
            defaultMessage: `You must have repo admin or push permissions to change review triggers.`
        }), t[47] = e) : e = t[47];
        let n;
        return t[48] === E ? n = t[49] : (n = (0, $.jsx)(l, {
            label: e,
            withArrow: !0,
            side: `top`,
            sideOffset: 0,
            children: E
        }), t[48] = E, t[49] = n), n
    }
    return E
}

function Re(e) {
    return (0, $.jsx)(V.Item, {
        value: e.value,
        className: `items-start`,
        children: (0, $.jsxs)(`div`, {
            className: `flex min-w-[240px] flex-col gap-1`,
            children: [(0, $.jsx)(`span`, {
                className: `text-sm font-normal`,
                children: e.title
            }), (0, $.jsx)(`span`, {
                className: `text-token-text-tertiary text-xs whitespace-normal`,
                children: e.description
            })]
        })
    }, e.value)
}

function ze(e) {
    "use forget";
    let t = (0, Q.c)(50),
        {
            repo: n,
            isPlus: r,
            isPro: i,
            isDisabledRepo: a,
            ownerLogin: o,
            updateCodeReviewRepositories: s
        } = e,
        c = N(),
        d = n.repository.permissions,
        f = [d?.admin, d?.push].some(Boolean),
        p = f && !a,
        m, h, g, _, v, y, b, x, S, C;
    if (t[0] !== p || t[1] !== c || t[2] !== r || t[3] !== i || t[4] !== n || t[5] !== s) {
        let e = Te(n),
            a;
        t[16] === n.repository.id ? a = t[17] : (a = u(n.repository.id), t[16] = n.repository.id, t[17] = a);
        let o = ve(Me(c, a === `gitlab`), {
                isPlus: r,
                isPro: i,
                selectedValue: e
            }),
            l = o.find(t => t.value === e);
        g = V.Root, b = e, t[18] !== n.funding_generation || t[19] !== n.repository.id || t[20] !== n.review_preference || t[21] !== s ? (x = e => {
            K(e) && s({
                repo_review_settings: [{
                    repository: n.repository.id,
                    funding_generation: n.funding_generation,
                    review_preference: n.review_preference,
                    security_review: De(e)
                }]
            })
        }, t[18] = n.funding_generation, t[19] = n.repository.id, t[20] = n.review_preference, t[21] = s, t[22] = x) : x = t[22], S = !p;
        let d;
        t[23] === p ? d = t[24] : (d = p ? (0, $.jsx)(V.Icon, {}) : null, t[23] = p, t[24] = d), C = (0, $.jsxs)(V.Trigger, {
            className: `w-full min-w-0 justify-between overflow-hidden sm:min-w-[150px]`,
            children: [(0, $.jsx)(`div`, {
                className: `min-w-0 truncate text-sm font-normal`,
                children: l?.title
            }), d]
        }), h = V.Portal, m = V.Content, _ = `max-w-[360px] min-w-[260px]`, v = ``;
        let f;
        t[25] === n.funding_authorization_required ? f = t[26] : (f = e => (0, $.jsx)(V.Item, {
            value: e.value,
            className: `items-start`,
            disabled: e.value === `everyone` && n.funding_authorization_required,
            children: (0, $.jsxs)(`div`, {
                className: `flex min-w-[240px] flex-col gap-1`,
                children: [(0, $.jsx)(`span`, {
                    className: `text-sm font-normal`,
                    children: e.title
                }), (0, $.jsx)(`span`, {
                    className: `text-token-text-tertiary text-xs whitespace-normal`,
                    children: e.description
                })]
            })
        }, e.value), t[25] = n.funding_authorization_required, t[26] = f), y = o.map(f), t[0] = p, t[1] = c, t[2] = r, t[3] = i, t[4] = n, t[5] = s, t[6] = m, t[7] = h, t[8] = g, t[9] = _, t[10] = v, t[11] = y, t[12] = b, t[13] = x, t[14] = S, t[15] = C
    } else m = t[6], h = t[7], g = t[8], _ = t[9], v = t[10], y = t[11], b = t[12], x = t[13], S = t[14], C = t[15];
    let T;
    t[27] !== m || t[28] !== _ || t[29] !== v || t[30] !== y ? (T = (0, $.jsx)(m, {
        className: _,
        "data-unbound-width": v,
        children: y
    }), t[27] = m, t[28] = _, t[29] = v, t[30] = y, t[31] = T) : T = t[31];
    let E;
    t[32] !== h || t[33] !== T ? (E = (0, $.jsx)(h, {
        children: T
    }), t[32] = h, t[33] = T, t[34] = E) : E = t[34];
    let D;
    t[35] !== g || t[36] !== b || t[37] !== x || t[38] !== S || t[39] !== C || t[40] !== E ? (D = (0, $.jsxs)(g, {
        value: b,
        onValueChange: x,
        disabled: S,
        children: [C, E]
    }), t[35] = g, t[36] = b, t[37] = x, t[38] = S, t[39] = C, t[40] = E, t[41] = D) : D = t[41];
    let O = D;
    if (a) {
        let e;
        t[42] === o ? e = t[43] : (e = (0, $.jsx)(w, {
            id: `wham.codeReviewPage.teamAutomations.repoDisabledTooltip`,
            defaultMessage: `Update the {installation} GitHub installation to enable code review`,
            values: {
                installation: o
            }
        }), t[42] = o, t[43] = e);
        let n;
        return t[44] !== O || t[45] !== e ? (n = (0, $.jsx)(l, {
            label: e,
            withArrow: !0,
            side: `top`,
            sideOffset: 0,
            children: O
        }), t[44] = O, t[45] = e, t[46] = n) : n = t[46], n
    }
    if (!f) {
        let e;
        t[47] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(w, {
            id: `wham.codeReviewPage.teamAutomations.securityReviewDisabledTooltip`,
            defaultMessage: `You must have repo admin or push permissions to change security review.`
        }), t[47] = e) : e = t[47];
        let n;
        return t[48] === O ? n = t[49] : (n = (0, $.jsx)(l, {
            label: e,
            withArrow: !0,
            side: `top`,
            sideOffset: 0,
            children: O
        }), t[48] = O, t[49] = n), n
    }
    return O
}

function Be(e) {
    "use forget";
    let t = (0, Q.c)(49),
        {
            repo: n,
            isDisabledRepo: r,
            ownerLogin: i,
            updateCodeReviewRepositories: a
        } = e,
        o = N(),
        s = n.repository.permissions,
        c = [s?.admin, s?.push].some(Boolean),
        d = c && !r,
        f;
    t[0] === n ? f = t[1] : (f = Ee(n), t[0] = n, t[1] = f);
    let p = f,
        m, h, g, _, v, y, b, x, S, C;
    if (t[2] !== d || t[3] !== o || t[4] !== n || t[5] !== a || t[6] !== p) {
        let e;
        t[17] === n.repository.id ? e = t[18] : (e = u(n.repository.id), t[17] = n.repository.id, t[18] = e);
        let r = Pe(o, he() || p === `smart_detect`, e === `gitlab`),
            i;
        t[19] === p ? i = t[20] : (i = e => e.value === p, t[19] = p, t[20] = i);
        let s = r.find(i);
        g = V.Root, b = p, t[21] !== n || t[22] !== a ? (x = e => {
            Ce(e) && a({
                repo_review_settings: [{
                    repository: n.repository.id,
                    funding_generation: n.funding_generation,
                    review_preference: n.review_preference,
                    security_review: De(Te(n), e)
                }]
            })
        }, t[21] = n, t[22] = a, t[23] = x) : x = t[23], S = !d;
        let c;
        t[24] === d ? c = t[25] : (c = d ? (0, $.jsx)(V.Icon, {}) : null, t[24] = d, t[25] = c), C = (0, $.jsxs)(V.Trigger, {
            className: `w-full min-w-0 justify-between overflow-hidden sm:min-w-[150px]`,
            children: [(0, $.jsx)(`div`, {
                className: `min-w-0 truncate text-sm font-normal`,
                children: s?.title
            }), c]
        }), h = V.Portal, m = V.Content, _ = `max-w-[360px] min-w-[260px]`, v = ``, y = r.map(Ve), t[2] = d, t[3] = o, t[4] = n, t[5] = a, t[6] = p, t[7] = m, t[8] = h, t[9] = g, t[10] = _, t[11] = v, t[12] = y, t[13] = b, t[14] = x, t[15] = S, t[16] = C
    } else m = t[7], h = t[8], g = t[9], _ = t[10], v = t[11], y = t[12], b = t[13], x = t[14], S = t[15], C = t[16];
    let T;
    t[26] !== m || t[27] !== _ || t[28] !== v || t[29] !== y ? (T = (0, $.jsx)(m, {
        className: _,
        "data-unbound-width": v,
        children: y
    }), t[26] = m, t[27] = _, t[28] = v, t[29] = y, t[30] = T) : T = t[30];
    let E;
    t[31] !== h || t[32] !== T ? (E = (0, $.jsx)(h, {
        children: T
    }), t[31] = h, t[32] = T, t[33] = E) : E = t[33];
    let D;
    t[34] !== g || t[35] !== E || t[36] !== b || t[37] !== x || t[38] !== S || t[39] !== C ? (D = (0, $.jsxs)(g, {
        value: b,
        onValueChange: x,
        disabled: S,
        children: [C, E]
    }), t[34] = g, t[35] = E, t[36] = b, t[37] = x, t[38] = S, t[39] = C, t[40] = D) : D = t[40];
    let O = D;
    if (r) {
        let e;
        t[41] === i ? e = t[42] : (e = (0, $.jsx)(w, {
            id: `wham.codeReviewPage.teamAutomations.repoDisabledTooltip`,
            defaultMessage: `Update the {installation} GitHub installation to enable code review`,
            values: {
                installation: i
            }
        }), t[41] = i, t[42] = e);
        let n;
        return t[43] !== O || t[44] !== e ? (n = (0, $.jsx)(l, {
            label: e,
            withArrow: !0,
            side: `top`,
            sideOffset: 0,
            children: O
        }), t[43] = O, t[44] = e, t[45] = n) : n = t[45], n
    }
    if (!c) {
        let e;
        t[46] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(w, {
            id: `wham.codeReviewPage.teamAutomations.securityReviewDisabledTooltip`,
            defaultMessage: `You must have repo admin or push permissions to change security review.`
        }), t[46] = e) : e = t[46];
        let n;
        return t[47] === O ? n = t[48] : (n = (0, $.jsx)(l, {
            label: e,
            withArrow: !0,
            side: `top`,
            sideOffset: 0,
            children: O
        }), t[47] = O, t[48] = n), n
    }
    return O
}

function Ve(e) {
    return (0, $.jsx)(V.Item, {
        value: e.value,
        className: `items-start`,
        children: (0, $.jsxs)(`div`, {
            className: `flex min-w-[240px] flex-col gap-1`,
            children: [(0, $.jsx)(`span`, {
                className: `text-sm font-normal`,
                children: e.title
            }), (0, $.jsx)(`span`, {
                className: `text-token-text-tertiary text-xs whitespace-normal`,
                children: e.description
            })]
        })
    }, e.value)
}

function He(e) {
    "use forget";
    let t = (0, Q.c)(30),
        {
            repo: n,
            isDisabledRepo: r,
            ownerLogin: i,
            updateCodeReviewRepositories: a
        } = e,
        o = n.repository.permissions,
        s = [o?.admin, o?.push].some(Boolean),
        c = s && !r,
        u;
    t[0] === n ? u = t[1] : (u = ke(n), t[0] = n, t[1] = u);
    let d = u,
        f;
    t[2] !== n.funding_generation || t[3] !== n.repository.id || t[4] !== n.review_preference || t[5] !== a ? (f = e => {
        Z(e) && a({
            repo_review_settings: [{
                repository: n.repository.id,
                funding_generation: n.funding_generation,
                review_preference: n.review_preference,
                exhaustive_code_review: e === `follow_personal` ? null : e === `enabled`
            }]
        })
    }, t[2] = n.funding_generation, t[3] = n.repository.id, t[4] = n.review_preference, t[5] = a, t[6] = f) : f = t[6];
    let p = !c,
        m;
    t[7] === d ? m = t[8] : (m = (0, $.jsx)(`div`, {
        className: `min-w-0 truncate text-sm font-normal`,
        children: d === `follow_personal` ? (0, $.jsx)(w, {
            id: `wham.codeReviewPage.teamAutomations.exhaustiveCodeReview.followPersonal`,
            defaultMessage: `Follow personal`
        }) : d === `enabled` ? (0, $.jsx)(w, {
            id: `wham.codeReviewPage.teamAutomations.exhaustiveCodeReview.enabled`,
            defaultMessage: `Enabled`
        }) : (0, $.jsx)(w, {
            id: `wham.codeReviewPage.teamAutomations.exhaustiveCodeReview.disabled`,
            defaultMessage: `Disabled`
        })
    }), t[7] = d, t[8] = m);
    let h;
    t[9] === c ? h = t[10] : (h = c ? (0, $.jsx)(V.Icon, {}) : null, t[9] = c, t[10] = h);
    let g;
    t[11] !== m || t[12] !== h ? (g = (0, $.jsxs)(V.Trigger, {
        className: `w-full min-w-0 justify-between overflow-hidden sm:min-w-[120px]`,
        children: [m, h]
    }), t[11] = m, t[12] = h, t[13] = g) : g = t[13];
    let _;
    t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = (0, $.jsx)(V.Item, {
        value: `follow_personal`,
        children: (0, $.jsx)(`span`, {
            className: `text-sm font-normal`,
            children: (0, $.jsx)(w, {
                id: `wham.codeReviewPage.teamAutomations.exhaustiveCodeReview.followPersonal.option`,
                defaultMessage: `Follow personal`
            })
        })
    }), t[14] = _) : _ = t[14];
    let v;
    t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (v = (0, $.jsx)(V.Item, {
        value: `enabled`,
        children: (0, $.jsx)(`span`, {
            className: `text-sm font-normal`,
            children: (0, $.jsx)(w, {
                id: `wham.codeReviewPage.teamAutomations.exhaustiveCodeReview.enabled.option`,
                defaultMessage: `Enabled`
            })
        })
    }), t[15] = v) : v = t[15];
    let y;
    t[16] === Symbol.for(`react.memo_cache_sentinel`) ? (y = (0, $.jsx)(V.Portal, {
        children: (0, $.jsxs)(V.Content, {
            className: `min-w-[180px]`,
            "data-unbound-width": ``,
            children: [_, v, (0, $.jsx)(V.Item, {
                value: `disabled`,
                children: (0, $.jsx)(`span`, {
                    className: `text-sm font-normal`,
                    children: (0, $.jsx)(w, {
                        id: `wham.codeReviewPage.teamAutomations.exhaustiveCodeReview.disabled.option`,
                        defaultMessage: `Disabled`
                    })
                })
            })]
        })
    }), t[16] = y) : y = t[16];
    let b;
    t[17] !== f || t[18] !== p || t[19] !== g || t[20] !== d ? (b = (0, $.jsxs)(V.Root, {
        value: d,
        onValueChange: f,
        disabled: p,
        children: [g, y]
    }), t[17] = f, t[18] = p, t[19] = g, t[20] = d, t[21] = b) : b = t[21];
    let x = b;
    if (r) {
        let e;
        t[22] === i ? e = t[23] : (e = (0, $.jsx)(w, {
            id: `wham.codeReviewPage.teamAutomations.repoDisabledTooltip`,
            defaultMessage: `Update the {installation} GitHub installation to enable code review`,
            values: {
                installation: i
            }
        }), t[22] = i, t[23] = e);
        let n;
        return t[24] !== x || t[25] !== e ? (n = (0, $.jsx)(l, {
            label: e,
            withArrow: !0,
            side: `top`,
            sideOffset: 0,
            children: x
        }), t[24] = x, t[25] = e, t[26] = n) : n = t[26], n
    }
    if (!s) {
        let e;
        t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(w, {
            id: `wham.codeReviewPage.teamAutomations.exhaustiveCodeReviewDisabledTooltip`,
            defaultMessage: `You must have repo admin or push permissions to change exhaustive code review.`
        }), t[27] = e) : e = t[27];
        let n;
        return t[28] === x ? n = t[29] : (n = (0, $.jsx)(l, {
            label: e,
            withArrow: !0,
            side: `top`,
            sideOffset: 0,
            children: x
        }), t[28] = x, t[29] = n), n
    }
    return x
}

function Ue(e) {
    "use forget";
    let t = (0, Q.c)(22),
        {
            columnClassName: n,
            lastUpdatedBy: r,
            lastUpdatedByTooltipLabel: i,
            lastUpdatedRelativeTime: a,
            tooltipLabel: o
        } = e,
        s;
    t[0] === n ? s = t[1] : (s = h(n, `min-w-0`), t[0] = n, t[1] = s);
    let c = !a,
        u;
    t[2] === c ? u = t[3] : (u = h(`min-w-0 truncate text-start`, {
        "col-span-2": c
    }), t[2] = c, t[3] = u);
    let d;
    t[4] !== r || t[5] !== u ? (d = (0, $.jsx)(`span`, {
        className: u,
        children: r
    }), t[4] = r, t[5] = u, t[6] = d) : d = t[6];
    let p;
    t[7] !== i || t[8] !== d ? (p = (0, $.jsx)(l, {
        triggerAs: null,
        label: i,
        side: `top`,
        align: `start`,
        labelTextAlign: `left`,
        labelClassName: `text-xs`,
        children: d
    }), t[7] = i, t[8] = d, t[9] = p) : p = t[9];
    let m;
    t[10] === a ? m = t[11] : (m = a ? (0, $.jsx)(`span`, {
        className: `text-token-text-tertiary shrink-0 truncate`,
        children: a
    }) : null, t[10] = a, t[11] = m);
    let g;
    t[12] !== p || t[13] !== m ? (g = (0, $.jsxs)(`div`, {
        className: `hidden w-full min-w-0 items-center gap-3 text-xs sm:text-sm md:flex`,
        children: [p, m]
    }), t[12] = p, t[13] = m, t[14] = g) : g = t[14];
    let _;
    t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = (0, $.jsx)(f, {
        className: `icon-sm text-token-text-secondary shrink-0`
    }), t[15] = _) : _ = t[15];
    let v;
    t[16] === o ? v = t[17] : (v = (0, $.jsx)(l, {
        className: `flex w-full justify-end md:hidden`,
        label: o,
        labelTextAlign: `left`,
        labelClassName: `text-xs`,
        align: `start`,
        children: _
    }), t[16] = o, t[17] = v);
    let y;
    return t[18] !== s || t[19] !== g || t[20] !== v ? (y = (0, $.jsxs)(B.Cell, {
        textAlign: `left`,
        className: s,
        children: [g, v]
    }), t[18] = s, t[19] = g, t[20] = v, t[21] = y) : y = t[21], y
}

function We(e) {
    "use forget";
    let t = (0, Q.c)(3),
        {
            visibility: n,
            provider: r
        } = e;
    if (r === `gitlab` && n === `internal`) {
        let e;
        return t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(w, {
            id: `wham.codeReviewPage.teamAutomations.repositoryVisibility.internal.gitlab`,
            defaultMessage: `Internal`
        }), t[0] = e) : e = t[0], e
    }
    if (n === `private`) {
        let e;
        return t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(w, {
            id: `wham.codeReviewPage.teamAutomations.repositoryVisibility.private`,
            defaultMessage: `Private`
        }), t[1] = e) : e = t[1], e
    }
    let i;
    return t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, $.jsx)(w, {
        id: `wham.codeReviewPage.teamAutomations.repositoryVisibility.public`,
        defaultMessage: `Public`
    }), t[2] = i) : i = t[2], i
}

function Ge({
    label: e,
    children: t
}) {
    "use no forget";
    return (0, $.jsxs)(`div`, {
        className: `flex w-full min-w-0 items-center gap-2`,
        children: [(0, $.jsx)(`span`, {
            className: `text-token-text-tertiary w-16 shrink-0 text-xs`,
            children: e
        }), (0, $.jsx)(`div`, {
            className: `min-w-0 flex-1`,
            children: t
        })]
    })
}

function Ke(e) {
    "use forget";
    let t = (0, Q.c)(215),
        {
            repo: n,
            provider: r,
            isTeamOrEnterprise: i,
            isLegacyEnterprisey: a,
            isPlus: o,
            isPro: s,
            disabledInstallations: c,
            updateCodeReviewRepositories: u,
            currentAccountOwnerId: d,
            currentUserEmail: f,
            columnWidths: p,
            layout: m,
            showDivider: g,
            showSecurityReviewSettings: _,
            showActionsColumn: v,
            removalAction: y
        } = e,
        b = v === void 0 ? _ : v,
        x = N(),
        S = n.repository.owner?.login,
        C;
    t[0] !== c || t[1] !== S ? (C = S ? c.includes(S) : !1, t[0] = c, t[1] = S, t[2] = C) : C = t[2];
    let T = C,
        E, O, A;
    t[3] !== d || t[4] !== x || t[5] !== o || t[6] !== s || t[7] !== r || t[8] !== n ? (E = we(n), O = E === `everyone` && n.global_review_account_id !== d, A = ve(je(x, r), {
        isPlus: o,
        isPro: s,
        selectedValue: E
    }), t[3] = d, t[4] = x, t[5] = o, t[6] = s, t[7] = r, t[8] = n, t[9] = E, t[10] = O, t[11] = A) : (E = t[9], O = t[10], A = t[11]);
    let j = A,
        M, P, F, I, L;
    if (t[12] !== E || t[13] !== O || t[14] !== T || t[15] !== a || t[16] !== o || t[17] !== s || t[18] !== i || t[19] !== m || t[20] !== S || t[21] !== r || t[22] !== n || t[23] !== j || t[24] !== u) {
        let e = h(`flex w-full min-w-0 flex-col items-start overflow-hidden`, m !== `mobile` && `max-w-[250px]`),
            c = h(e, `gap-2`),
            l;
        t[30] !== T || t[31] !== n ? (l = n.funding_authorization_required && (0, $.jsx)(xe, {
            repo: n,
            disabled: T || ![n.repository.permissions?.admin, n.repository.permissions?.push].some(Boolean)
        }), t[30] = T, t[31] = n, t[32] = l) : l = t[32];
        let d = !!O,
            f;
        t[33] !== E || t[34] !== T || t[35] !== a || t[36] !== o || t[37] !== s || t[38] !== i || t[39] !== S || t[40] !== n || t[41] !== j || t[42] !== d || t[43] !== u ? (f = (0, $.jsx)(Fe, {
            repo: n,
            value: E,
            repoReviewOptions: j,
            isTeamOrEnterprise: i,
            isLegacyEnterprisey: a,
            isPlus: o,
            isPro: s,
            isDisabledRepo: T,
            ownerLogin: S,
            everyoneSetByDifferentAccount: d,
            updateCodeReviewRepositories: u
        }), t[33] = E, t[34] = T, t[35] = a, t[36] = o, t[37] = s, t[38] = i, t[39] = S, t[40] = n, t[41] = j, t[42] = d, t[43] = u, t[44] = f) : f = t[44], M = (0, $.jsxs)(`div`, {
            className: c,
            children: [l, f]
        });
        let p;
        t[45] !== T || t[46] !== S || t[47] !== r || t[48] !== n || t[49] !== u ? (p = (0, $.jsx)(Le, {
            repo: n,
            provider: r,
            isDisabledRepo: T,
            ownerLogin: S,
            updateCodeReviewRepositories: u
        }), t[45] = T, t[46] = S, t[47] = r, t[48] = n, t[49] = u, t[50] = p) : p = t[50], L = (0, $.jsx)(`div`, {
            className: h(e, `gap-1`),
            children: p
        });
        let g;
        t[51] !== T || t[52] !== o || t[53] !== s || t[54] !== S || t[55] !== n || t[56] !== u ? (g = (0, $.jsx)(ze, {
            repo: n,
            isPlus: o,
            isPro: s,
            isDisabledRepo: T,
            ownerLogin: S,
            updateCodeReviewRepositories: u
        }), t[51] = T, t[52] = o, t[53] = s, t[54] = S, t[55] = n, t[56] = u, t[57] = g) : g = t[57], P = (0, $.jsx)(`div`, {
            className: h(e, `gap-1`),
            children: g
        });
        let _;
        t[58] !== T || t[59] !== S || t[60] !== n || t[61] !== u ? (_ = (0, $.jsx)(Be, {
            repo: n,
            isDisabledRepo: T,
            ownerLogin: S,
            updateCodeReviewRepositories: u
        }), t[58] = T, t[59] = S, t[60] = n, t[61] = u, t[62] = _) : _ = t[62], F = (0, $.jsx)(`div`, {
            className: h(e, `gap-1`),
            children: _
        }), I = h(e, `gap-1`), t[12] = E, t[13] = O, t[14] = T, t[15] = a, t[16] = o, t[17] = s, t[18] = i, t[19] = m, t[20] = S, t[21] = r, t[22] = n, t[23] = j, t[24] = u, t[25] = M, t[26] = P, t[27] = F, t[28] = I, t[29] = L
    } else M = t[25], P = t[26], F = t[27], I = t[28], L = t[29];
    let R;
    t[63] !== T || t[64] !== S || t[65] !== n || t[66] !== u ? (R = (0, $.jsx)(He, {
        repo: n,
        isDisabledRepo: T,
        ownerLogin: S,
        updateCodeReviewRepositories: u
    }), t[63] = T, t[64] = S, t[65] = n, t[66] = u, t[67] = R) : R = t[67];
    let re;
    t[68] !== I || t[69] !== R ? (re = (0, $.jsx)(`div`, {
        className: I,
        children: R
    }), t[68] = I, t[69] = R, t[70] = re) : re = t[70];
    let z = re,
        ie;
    t[71] === Symbol.for(`react.memo_cache_sentinel`) ? (ie = (0, $.jsx)(w, {
        id: `wham.codeReviewPage.teamAutomations.table.codeReview.auto`,
        defaultMessage: `Auto review`
    }), t[71] = ie) : ie = t[71];
    let ae;
    t[72] === M ? ae = t[73] : (ae = (0, $.jsx)(Ge, {
        label: ie,
        children: M
    }), t[72] = M, t[73] = ae);
    let oe;
    t[74] === Symbol.for(`react.memo_cache_sentinel`) ? (oe = (0, $.jsx)(w, {
        id: `wham.codeReviewPage.teamAutomations.table.codeReview.trigger`,
        defaultMessage: `Trigger`
    }), t[74] = oe) : oe = t[74];
    let se;
    t[75] === L ? se = t[76] : (se = (0, $.jsx)(Ge, {
        label: oe,
        children: L
    }), t[75] = L, t[76] = se);
    let V;
    t[77] === Symbol.for(`react.memo_cache_sentinel`) ? (V = (0, $.jsx)(w, {
        id: `wham.codeReviewPage.teamAutomations.table.codeReview.exhaustive`,
        defaultMessage: `Exhaustive`
    }), t[77] = V) : V = t[77];
    let ce;
    t[78] === z ? ce = t[79] : (ce = (0, $.jsx)(Ge, {
        label: V,
        children: z
    }), t[78] = z, t[79] = ce);
    let le;
    t[80] !== se || t[81] !== ce || t[82] !== ae ? (le = (0, $.jsxs)(`div`, {
        className: `flex w-full min-w-0 flex-col gap-1`,
        children: [ae, se, ce]
    }), t[80] = se, t[81] = ce, t[82] = ae, t[83] = le) : le = t[83];
    let ue = le,
        de;
    t[84] === Symbol.for(`react.memo_cache_sentinel`) ? (de = (0, $.jsx)(w, {
        id: `wham.codeReviewPage.teamAutomations.table.securityReview.auto`,
        defaultMessage: `Auto review`
    }), t[84] = de) : de = t[84];
    let H;
    t[85] === P ? H = t[86] : (H = (0, $.jsx)(Ge, {
        label: de,
        children: P
    }), t[85] = P, t[86] = H);
    let fe;
    t[87] === Symbol.for(`react.memo_cache_sentinel`) ? (fe = (0, $.jsx)(w, {
        id: `wham.codeReviewPage.teamAutomations.table.securityReview.trigger`,
        defaultMessage: `Trigger`
    }), t[87] = fe) : fe = t[87];
    let U;
    t[88] === F ? U = t[89] : (U = (0, $.jsx)(Ge, {
        label: fe,
        children: F
    }), t[88] = F, t[89] = U);
    let pe;
    t[90] !== H || t[91] !== U ? (pe = (0, $.jsxs)(`div`, {
        className: `flex w-full min-w-0 flex-col gap-1`,
        children: [H, U]
    }), t[90] = H, t[91] = U, t[92] = pe) : pe = t[92];
    let W = pe,
        G;
    t[93] !== P || t[94] !== F || t[95] !== _ ? (G = _ ? (0, $.jsxs)($.Fragment, {
        children: [P, F]
    }) : null, t[93] = P, t[94] = F, t[95] = _, t[96] = G) : G = t[96];
    let me;
    t[97] !== M || t[98] !== z || t[99] !== G || t[100] !== L ? (me = (0, $.jsxs)(`div`, {
        className: `flex flex-col items-end gap-2`,
        children: [M, L, z, G]
    }), t[97] = M, t[98] = z, t[99] = G, t[100] = L, t[101] = me) : me = t[101];
    let he = me,
        ge;
    t[102] !== x || t[103] !== n.repository.name || t[104] !== n.repository.repository_full_name ? (ge = n.repository.repository_full_name ?? n.repository.name ?? x.formatMessage({
        id: `wham.codeReviewPage.teamAutomations.unknownRepository`,
        defaultMessage: `Unknown repository`
    }), t[102] = x, t[103] = n.repository.name, t[104] = n.repository.repository_full_name, t[105] = ge) : ge = t[105];
    let K = ge;
    if (m === `condensed`) {
        let e = g && `border-token-border-light border-t`,
            n;
        t[106] === e ? n = t[107] : (n = h(`flex items-center justify-between gap-3 py-3 ps-4 pe-1`, e), t[106] = e, t[107] = n);
        let r;
        t[108] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, $.jsx)(te, {
            className: `icon-sm shrink-0`
        }), t[108] = r) : r = t[108];
        let i;
        t[109] === K ? i = t[110] : (i = (0, $.jsxs)(`div`, {
            className: `flex min-w-0 items-center gap-2`,
            children: [r, (0, $.jsx)(`span`, {
                className: `truncate text-sm font-medium`,
                children: K
            })]
        }), t[109] = K, t[110] = i);
        let a;
        t[111] === he ? a = t[112] : (a = (0, $.jsx)(`div`, {
            className: `flex-shrink-0`,
            children: he
        }), t[111] = he, t[112] = a);
        let o;
        return t[113] !== n || t[114] !== i || t[115] !== a ? (o = (0, $.jsxs)(`div`, {
            className: n,
            children: [i, a]
        }), t[113] = n, t[114] = i, t[115] = a, t[116] = o) : o = t[116], o
    }
    if (m === `mobile`) {
        let e = g && `border-token-border-light border-t`,
            i;
        t[117] === e ? i = t[118] : (i = h(`flex flex-col gap-4 px-4 py-4`, e), t[117] = e, t[118] = i);
        let a;
        t[119] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, $.jsx)(te, {
            className: `icon-sm shrink-0`
        }), t[119] = a) : a = t[119];
        let o;
        t[120] === K ? o = t[121] : (o = (0, $.jsx)(`span`, {
            className: `flex-1 truncate text-sm font-medium`,
            children: K
        }), t[120] = K, t[121] = o);
        let s;
        t[122] !== y || t[123] !== o ? (s = (0, $.jsxs)(`div`, {
            className: `flex min-w-0 items-center gap-2`,
            children: [a, o, y]
        }), t[122] = y, t[123] = o, t[124] = s) : s = t[124];
        let c;
        t[125] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, $.jsx)(`span`, {
            className: `text-token-text-tertiary text-xs`,
            children: (0, $.jsx)(w, {
                id: `wham.codeReviewPage.teamAutomations.table.visibility`,
                defaultMessage: `Visibility`
            })
        }), t[125] = c) : c = t[125];
        let l;
        t[126] !== r || t[127] !== n.repository.visibility ? (l = (0, $.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [c, (0, $.jsx)(We, {
                visibility: n.repository.visibility,
                provider: r
            })]
        }), t[126] = r, t[127] = n.repository.visibility, t[128] = l) : l = t[128];
        let u;
        t[129] !== x || t[130] !== T || t[131] !== n.repository.id || t[132] !== _ ? (u = _ ? (0, $.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [(0, $.jsx)(`span`, {
                className: `text-token-text-tertiary text-xs`,
                children: (0, $.jsx)(w, {
                    id: `wham.codeReviewPage.teamAutomations.table.configure`,
                    defaultMessage: `Settings`
                })
            }), T ? (0, $.jsx)(`button`, {
                type: `button`,
                className: `flex h-8 w-8 items-center justify-center rounded-md opacity-50`,
                "aria-label": x.formatMessage({
                    id: `wham.codeReviewPage.teamAutomations.configureRepo`,
                    defaultMessage: `Open more repository settings`
                }),
                disabled: !0,
                children: (0, $.jsx)(ne, {
                    className: `icon-sm text-token-text-secondary`
                })
            }) : (0, $.jsx)(k, {
                to: `/codex/cloud/settings/code-review?repoId=${encodeURIComponent(n.repository.id)}`,
                className: `hover:bg-token-bg-tertiary flex h-8 w-8 items-center justify-center rounded-md`,
                "aria-label": x.formatMessage({
                    id: `wham.codeReviewPage.teamAutomations.configureRepo`,
                    defaultMessage: `Open more repository settings`
                }),
                children: (0, $.jsx)(ne, {
                    className: `icon-sm text-token-text-secondary`
                })
            })]
        }) : null, t[129] = x, t[130] = T, t[131] = n.repository.id, t[132] = _, t[133] = u) : u = t[133];
        let d;
        t[134] !== l || t[135] !== u ? (d = (0, $.jsxs)(`div`, {
            className: `flex flex-wrap items-center gap-x-6 gap-y-2 text-sm`,
            children: [l, u]
        }), t[134] = l, t[135] = u, t[136] = d) : d = t[136];
        let f = _ && `sm:grid-cols-2`,
            p;
        t[137] === f ? p = t[138] : (p = h(`grid gap-4`, f), t[137] = f, t[138] = p);
        let m;
        t[139] === Symbol.for(`react.memo_cache_sentinel`) ? (m = (0, $.jsx)(`h3`, {
            className: `text-sm font-medium`,
            children: (0, $.jsx)(w, {
                id: `wham.codeReviewPage.teamAutomations.table.groupedCodeReview`,
                defaultMessage: `Code review`
            })
        }), t[139] = m) : m = t[139];
        let v;
        t[140] === ue ? v = t[141] : (v = (0, $.jsxs)(`div`, {
            className: `flex flex-col gap-2`,
            children: [m, ue]
        }), t[140] = ue, t[141] = v);
        let b;
        t[142] !== W || t[143] !== _ ? (b = _ ? (0, $.jsxs)(`div`, {
            className: `flex flex-col gap-2`,
            children: [(0, $.jsx)(`h3`, {
                className: `text-sm font-medium`,
                children: (0, $.jsx)(w, {
                    id: `wham.codeReviewPage.teamAutomations.table.securityReview`,
                    defaultMessage: `Security review`
                })
            }), W]
        }) : null, t[142] = W, t[143] = _, t[144] = b) : b = t[144];
        let S;
        t[145] !== p || t[146] !== v || t[147] !== b ? (S = (0, $.jsxs)(`div`, {
            className: p,
            children: [v, b]
        }), t[145] = p, t[146] = v, t[147] = b, t[148] = S) : S = t[148];
        let C;
        return t[149] !== i || t[150] !== s || t[151] !== d || t[152] !== S ? (C = (0, $.jsxs)(`div`, {
            className: i,
            children: [s, d, S]
        }), t[149] = i, t[150] = s, t[151] = d, t[152] = S, t[153] = C) : C = t[153], C
    }
    let q, _e;
    if (t[154] !== x || t[155] !== n.updated_at) {
        let e = n.updated_at ? new Date(n.updated_at) : null,
            r = !!(e && !Number.isNaN(e.getTime()));
        q = r && e ? (0, $.jsx)(D, {
            value: e,
            year: `numeric`,
            month: `short`,
            day: `2-digit`
        }) : null, _e = r && e ? ee({
            givenDate: e,
            now: new Date,
            intl: x,
            format: `descriptive`
        }) : null, t[154] = x, t[155] = n.updated_at, t[156] = q, t[157] = _e
    } else q = t[156], _e = t[157];
    let J = _e,
        ye;
    t[158] !== q || t[159] !== J ? (ye = J ?? q ?? (0, $.jsx)(w, {
        id: `wham.codeReviewPage.teamAutomations.lastUpdatedUnknown`,
        defaultMessage: `Not recorded`
    }), t[158] = q, t[159] = J, t[160] = ye) : ye = t[160];
    let be = ye,
        Y = null,
        X = null;
    if (O && n.last_updated_by_github_id) {
        X = n.last_updated_by_github_id;
        let e = `https://github.com/${n.last_updated_by_github_id}`,
            r;
        t[161] !== n.last_updated_by_github_id || t[162] !== e ? (r = (0, $.jsx)(k, {
            className: `font-medium`,
            target: `_blank`,
            to: e,
            children: n.last_updated_by_github_id
        }), t[161] = n.last_updated_by_github_id, t[162] = e, t[163] = r) : r = t[163], Y = r
    } else if (n.last_updated_user_email === f) {
        let e;
        t[164] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(w, {
            id: `wham.codeReviewPage.teamAutomations.lastUpdatedByUser`,
            defaultMessage: `me`
        }), t[164] = e) : e = t[164], Y = e, X = f
    } else i && (Y = n.last_updated_user_email, X = n.last_updated_user_email);
    let Se;
    t[165] !== Y || t[166] !== be ? (Se = (0, $.jsx)(w, {
        id: `wham.codeReviewPage.teamAutomations.lastUpdatedBy`,
        defaultMessage: `{date} by {user}`,
        values: {
            date: be,
            user: Y
        }
    }), t[165] = Y, t[166] = be, t[167] = Se) : Se = t[167];
    let Ce = Se,
        Z = p ?? Xe,
        Te = _ ? 4 : 5,
        Ee;
    t[168] === Z[0] ? Ee = t[169] : (Ee = h(Z[0], `min-w-[150px] ps-3`), t[168] = Z[0], t[169] = Ee);
    let De;
    t[170] === Symbol.for(`react.memo_cache_sentinel`) ? (De = (0, $.jsx)(te, {
        className: `icon-md shrink-0`
    }), t[170] = De) : De = t[170];
    let Oe;
    t[171] === K ? Oe = t[172] : (Oe = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-2`,
        children: [De, (0, $.jsx)(`p`, {
            className: `truncate text-sm`,
            children: K
        })]
    }), t[171] = K, t[172] = Oe);
    let ke;
    t[173] !== Ee || t[174] !== Oe ? (ke = (0, $.jsx)(B.Cell, {
        className: Ee,
        children: Oe
    }), t[173] = Ee, t[174] = Oe, t[175] = ke) : ke = t[175];
    let Ae;
    t[176] === Z[1] ? Ae = t[177] : (Ae = h(Z[1], `min-w-0`), t[176] = Z[1], t[177] = Ae);
    let Me;
    t[178] !== r || t[179] !== n.repository.visibility ? (Me = (0, $.jsx)(`div`, {
        className: `text-token-text-secondary flex w-full items-start justify-start ps-3 text-sm`,
        children: (0, $.jsx)(We, {
            visibility: n.repository.visibility,
            provider: r
        })
    }), t[178] = r, t[179] = n.repository.visibility, t[180] = Me) : Me = t[180];
    let Ne;
    t[181] !== Ae || t[182] !== Me ? (Ne = (0, $.jsx)(B.Cell, {
        textAlign: `left`,
        className: Ae,
        children: Me
    }), t[181] = Ae, t[182] = Me, t[183] = Ne) : Ne = t[183];
    let Pe;
    t[184] !== M || t[185] !== ue || t[186] !== z || t[187] !== W || t[188] !== _ || t[189] !== L || t[190] !== Z[2] || t[191] !== Z[3] || t[192] !== Z[4] ? (Pe = _ ? (0, $.jsxs)($.Fragment, {
        children: [(0, $.jsx)(B.Cell, {
            textAlign: `left`,
            className: h(Z[2], `min-w-0`),
            children: (0, $.jsx)(`div`, {
                className: `flex w-full min-w-0 flex-col gap-1 ps-3 pt-2`,
                children: ue
            })
        }), (0, $.jsx)(B.Cell, {
            textAlign: `left`,
            className: h(Z[3], `min-w-0`),
            children: (0, $.jsx)(`div`, {
                className: `flex w-full min-w-0 flex-col gap-1 ps-3 pt-2`,
                children: W
            })
        })]
    }) : (0, $.jsxs)($.Fragment, {
        children: [(0, $.jsx)(B.Cell, {
            textAlign: `left`,
            className: h(Z[2], `min-w-0`),
            children: (0, $.jsx)(`div`, {
                className: `flex w-full min-w-0 items-start justify-start ps-3`,
                children: M
            })
        }), (0, $.jsx)(B.Cell, {
            textAlign: `left`,
            className: h(Z[3], `min-w-0`),
            children: (0, $.jsx)(`div`, {
                className: `flex w-full min-w-0 items-start justify-start ps-3`,
                children: L
            })
        }), (0, $.jsx)(B.Cell, {
            textAlign: `left`,
            className: h(Z[4], `min-w-0`),
            children: (0, $.jsx)(`div`, {
                className: `flex w-full min-w-0 items-start justify-start ps-3`,
                children: z
            })
        })]
    }), t[184] = M, t[185] = ue, t[186] = z, t[187] = W, t[188] = _, t[189] = L, t[190] = Z[2], t[191] = Z[3], t[192] = Z[4], t[193] = Pe) : Pe = t[193];
    let Ie = Z[Te],
        Re;
    t[194] !== Y || t[195] !== X || t[196] !== J || t[197] !== Ie || t[198] !== Ce ? (Re = (0, $.jsx)(Ue, {
        columnClassName: Ie,
        lastUpdatedBy: Y,
        lastUpdatedByTooltipLabel: X,
        lastUpdatedRelativeTime: J,
        tooltipLabel: Ce
    }), t[194] = Y, t[195] = X, t[196] = J, t[197] = Ie, t[198] = Ce, t[199] = Re) : Re = t[199];
    let Ve;
    t[200] !== x || t[201] !== T || t[202] !== S || t[203] !== y || t[204] !== n.repository.id || t[205] !== b || t[206] !== _ || t[207] !== Z ? (Ve = b ? (0, $.jsx)(B.Cell, {
        textAlign: `center`,
        className: h(Z[_ ? 5 : 6], `min-w-0 last:pe-3`),
        children: (0, $.jsxs)(`div`, {
            className: `flex items-center justify-end gap-1`,
            children: [_ && (T ? (0, $.jsx)(l, {
                label: (0, $.jsx)(w, {
                    id: `wham.codeReviewPage.teamAutomations.repoDisabledTooltip`,
                    defaultMessage: `Update the {installation} GitHub installation to enable code review`,
                    values: {
                        installation: S
                    }
                }),
                withArrow: !0,
                side: `top`,
                sideOffset: 0,
                children: (0, $.jsx)(`span`, {
                    className: `flex h-8 w-8 items-center justify-center rounded-md`,
                    children: (0, $.jsx)(`button`, {
                        type: `button`,
                        className: `flex h-8 w-8 items-center justify-center rounded-md opacity-50`,
                        "aria-label": x.formatMessage({
                            id: `wham.codeReviewPage.teamAutomations.configureRepo`,
                            defaultMessage: `Open more repository settings`
                        }),
                        disabled: !0,
                        children: (0, $.jsx)(ne, {
                            className: `icon-sm text-token-text-secondary`
                        })
                    })
                })
            }) : (0, $.jsx)(k, {
                to: `/codex/cloud/settings/code-review?repoId=${encodeURIComponent(n.repository.id)}`,
                className: `hover:bg-token-bg-tertiary flex h-8 w-8 items-center justify-center rounded-md`,
                "aria-label": x.formatMessage({
                    id: `wham.codeReviewPage.teamAutomations.configureRepo`,
                    defaultMessage: `Open more repository settings`
                }),
                children: (0, $.jsx)(ne, {
                    className: `icon-sm text-token-text-secondary`
                })
            })), y]
        })
    }) : null, t[200] = x, t[201] = T, t[202] = S, t[203] = y, t[204] = n.repository.id, t[205] = b, t[206] = _, t[207] = Z, t[208] = Ve) : Ve = t[208];
    let Ke;
    return t[209] !== ke || t[210] !== Ne || t[211] !== Pe || t[212] !== Re || t[213] !== Ve ? (Ke = (0, $.jsxs)(B.Row, {
        children: [ke, Ne, Pe, Re, Ve]
    }), t[209] = ke, t[210] = Ne, t[211] = Pe, t[212] = Re, t[213] = Ve, t[214] = Ke) : Ke = t[214], Ke
}
var Q, $, qe, Je, Ye, Xe, Ze, Qe, $e = e((() => {
    Q = M(), re(), v(), z(), se(), ie(), o(), L(), ye(), ge(), X(), s(), b(), E(), T(), $ = S(), qe = [`follow_personal`, `pr_open`, `every_push`, `smart_detect`], Je = [`follow_personal`, `pr_open`, `every_push`, `smart_detect`, `code_review`], Ye = [`follow_personal`, `enabled`, `disabled`], Xe = [`w-[20%]`, `w-[8%]`, `w-[15%]`, `w-[14%]`, `w-[14%]`, `w-[14%]`, `w-[12%]`, `w-[7%]`], Ze = {
        everyone: {
            globalReviewPreference: `review_everyone`,
            reviewPreference: `team`
        },
        team: {
            globalReviewPreference: `review_if_enabled`,
            reviewPreference: `team`
        },
        default: {
            globalReviewPreference: `review_if_enabled`,
            reviewPreference: `never`
        }
    }, Qe = {
        follow_personal: null,
        pr_open: `pr_open`,
        every_push: `every_push`,
        smart_detect: `smart_detect`
    }
}));

function et() {
    return x(`3220695551`)
}
var tt = e((() => {
    p()
}));

function nt({
    provider: e = `github`,
    connectorId: t,
    isConnectorLoading: n
} = {}) {
    "use no forget";
    let [r, i] = (0, rt.useState)(``), [a, o] = (0, rt.useState)(!0), s = R(r, 300).trim(), {
        connectorId: c,
        isLoading: l
    } = ce({
        redirectAfter: `/codex/cloud/settings/code-review`
    }), u = t ?? c, d = n ?? l, {
        data: f,
        isLoading: p,
        isFetching: m,
        fetchNextPage: h,
        hasNextPage: g,
        isFetchingNextPage: _
    } = P(s, {
        provider: e,
        connectorId: u,
        enabled: !d,
        includeArchived: !a
    }), {
        mutate: v
    } = U(), y = (0, rt.useMemo)(() => (f?.pages ?? []).flatMap(e => e.repo_review_settings ?? []).filter(e => !!e), [f]), b = (0, rt.useMemo)(() => y, [y]), x = r.length === 0 && !g && !_ && b.length === 20, S = !p && b.length > 0 && (!!g || !!_), C = et(), w = ae() && !C;
    return {
        queryInput: r,
        setQueryInput: i,
        hideArchivedRepositories: a,
        setHideArchivedRepositories: o,
        filteredSettings: b,
        isLoading: p || d,
        isFetching: m,
        fetchNextPage: h,
        hasNextPage: g,
        isFetchingNextPage: _,
        isLegacyEnterprisey: w,
        shouldShowMaxSuggestionsNote: x,
        shouldShowInfiniteScrollRow: S,
        updateCodeReviewRepositories: v
    }
}
var rt, it = e((() => {
    le(), tt(), oe(), G(), I(), F(), rt = t(O())
}));
export {
    U as _, $e as a, J as c, K as d, ge as f, W as g, G as h, Ae as i, _e as l, he as m, nt as n, xe as o, me as p, Ke as r, X as s, it as t, ye as u, ue as v, de as y
};
//# sourceMappingURL=40e925e3-lwd8zod7knx8hr87.js.map