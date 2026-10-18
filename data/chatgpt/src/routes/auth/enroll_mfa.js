import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Fz as n,
    Iz as r,
    Pz as i,
    Qit as a,
    a7 as o,
    iat as s,
    iy as c,
    l7 as l,
    qv as u
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as d,
    Ht as f,
    O as p,
    Ut as m,
    Vn as h,
    s as g,
    w as _
} from "./2340486e-oc6d2eodbcrmxur3.js";
var v, y = e((() => {
        c(), n(), s(), l(), g(), v = _({
            queryKey: [`mfaToken`],
            queryFn: async () => {
                try {
                    let e = await o.safePost(`/accounts/mfa/user/request_mfa_token_in_house`, {});
                    if (!e || !e.state_token) throw Error(`Failed to fetch MFA token`);
                    return e.state_token
                } catch (e) {
                    if (e instanceof a && e.detail?.code === `mfa_email_required`) {
                        window.location.href = r(i.ENABLE_MFA_EMAIL_REQUIRED, `/#settings/${u.Account}`);
                        return
                    }
                    window.location.href = r(i.ENABLE_MFA_ERROR, `/#settings/${u.Security}`)
                }
            }
        })
    })),
    b, x, S = e((() => {
        d(), y(), g(), b = t(h()), x = m(function() {
            let [e] = f(), t = e.get(`factor`) ?? `totp`, n = e.get(`app`) ?? `ChatGPT`, r = e.get(`redirect_path`) ?? void 0, i = e.get(`mfa_source`) ?? void 0, {
                data: a
            } = p(v);
            return (0, b.useEffect)(() => {
                if (!a) return;
                let e = new URLSearchParams({
                    origin_app_name: n,
                    mfa_token: a
                });
                r && e.set(`redirect_path`, r), t === `passkey` ? window.location.href = `https://auth.openai.com/passkey-enroll?${e.toString()}` : (i !== void 0 && e.set(`mfa_source`, i), window.location.href = `https://auth.openai.com/totp_enroll?${e.toString()}`)
            }, [a, n, r, t, i]), null
        })
    }));
e((() => {
    S()
}))();
export {
    x as
    default
};
//# sourceMappingURL=auth.enroll_mfa-j5pg7spj.js.map