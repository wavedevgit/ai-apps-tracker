exports.id = 878, exports.ids = [878], exports.modules = {
    2878: (e, t, r) => {
        "use strict";
        r.d(t, {
            SandboxUnsupportedError: () => L,
            resolveSandboxPolicyForWorkspace: () => Q,
            spawnInSandbox: () => F
        });
        var n = r(6760),
            o = r(1066),
            i = r(1455),
            s = r(8161),
            a = r(3516);
        let c;

        function p(e) {
            const t = Object.keys(e).filter(e => "path" === e.toLowerCase());
            if (0 !== t.length) return "win32" === process.platform ? t.find(e => "Path" === e) ?? t[0] : t.find(e => "PATH" === e) ?? t[0]
        }

        function l(e, t) {
            const r = (0, n.dirname)(t);
            if (!r || "." === r) return e;
            const o = function(e) {
                const t = p(e);
                return void 0 !== t ? e[t] ?? "" : ""
            }(e).split(n.delimiter).filter(Boolean);
            return function(e, t) {
                const r = p(e) ?? ("win32" === process.platform ? "Path" : "PATH"),
                    n = {
                        ...e
                    };
                for (const e of Object.keys(n)) e !== r && "path" === e.toLowerCase() && delete n[e];
                return n[r] = t, n
            }(e, [r, ...o.filter(e => e !== r)].join(n.delimiter))
        }
        var d = r(1421),
            u = r(3024);

        function f(e) {
            const t = e || process.env,
                {
                    ELECTRON_RUN_AS_NODE: r,
                    ...n
                } = t;
            return n
        }
        const h = ["SSH_AUTH_SOCK", "DBUS_SESSION_BUS_ADDRESS", "XDG_RUNTIME_DIR", "WAYLAND_DISPLAY"];

        function y(e) {
            const t = {
                ...e
            };
            for (const e of h) delete t[e];
            return t
        }
        var w = r(7598);
        const g = "cursor-sandbox-cache";
        let b;

        function k() {
            const e = (0, n.join)((0, s.tmpdir)(), g, (b || (b = (0, w.randomBytes)(16).toString("hex")), b));
            return {
                NPM_CONFIG_CACHE: (0, n.join)(e, "npm"),
                PNPM_STORE_PATH: (0, n.join)(e, "pnpm-store"),
                GOCACHE: (0, n.join)(e, "go-build"),
                GOMODCACHE: (0, n.join)(e, "go-mod"),
                CARGO_TARGET_DIR: (0, n.join)(e, "cargo-target"),
                PIP_CACHE_DIR: (0, n.join)(e, "pip"),
                UV_CACHE_DIR: (0, n.join)(e, "uv"),
                BUN_INSTALL_CACHE_DIR: (0, n.join)(e, "bun"),
                YARN_CACHE_FOLDER: (0, n.join)(e, "yarn"),
                npm_config_devdir: (0, n.join)(e, "node-gyp"),
                PLAYWRIGHT_BROWSERS_PATH: (0, n.join)(e, "playwright"),
                PUPPETEER_CACHE_DIR: (0, n.join)(e, "puppeteer"),
                TURBO_CACHE_DIR: (0, n.join)(e, "turbo"),
                GRADLE_USER_HOME: (0, n.join)(e, "gradle"),
                CONDA_PKGS_DIRS: (0, n.join)(e, "conda"),
                POETRY_CACHE_DIR: (0, n.join)(e, "poetry"),
                GEM_SPEC_CACHE: (0, n.join)(e, "gem-specs"),
                BUNDLE_PATH: (0, n.join)(e, "bundle"),
                COMPOSER_HOME: (0, n.join)(e, "composer"),
                HOMEBREW_CACHE: (0, n.join)(e, "homebrew"),
                CYPRESS_CACHE_FOLDER: (0, n.join)(e, "cypress"),
                NX_CACHE_DIRECTORY: (0, n.join)(e, "nx"),
                NUGET_PACKAGES: (0, n.join)(e, "nuget"),
                CCACHE_DIR: (0, n.join)(e, "ccache"),
                CP_HOME_DIR: (0, n.join)(e, "cocoapods")
            }
        }
        r(6613);
        const _ = [{
            type: "workspace",
            pattern: "**/.cursor/*.json"
        }, {
            type: "workspace",
            pattern: "**/.cursor/**/*.json"
        }, {
            type: "workspace",
            pattern: "**/.cursor/.workspace-trusted"
        }, {
            type: "workspace",
            pattern: "!**/.cursor/rules"
        }, {
            type: "workspace",
            pattern: "!**/.cursor/rules/**"
        }, {
            type: "workspace",
            pattern: "!**/.cursor/commands"
        }, {
            type: "workspace",
            pattern: "!**/.cursor/commands/**"
        }, {
            type: "workspace",
            pattern: "!**/.cursor/worktrees"
        }, {
            type: "workspace",
            pattern: "!**/.cursor/worktrees/**"
        }, {
            type: "workspace",
            pattern: "!**/.cursor/skills"
        }, {
            type: "workspace",
            pattern: "!**/.cursor/skills/**"
        }, {
            type: "workspace",
            pattern: "!**/.cursor/agents"
        }, {
            type: "workspace",
            pattern: "!**/.cursor/agents/**"
        }, {
            type: "workspace",
            pattern: "**/.claude/*.json"
        }, {
            type: "workspace",
            pattern: "**/.claude/**/*.json"
        }, {
            type: "workspace",
            pattern: "**/.vscode/**"
        }, {
            type: "workspace",
            pattern: "**/*.code-workspace"
        }, {
            type: "workspace",
            pattern: "**/.cursorignore"
        }, {
            type: "workspace",
            pattern: "**/.workspace-trusted"
        }, {
            type: "workspace",
            pattern: "**/.cursor/**/cli.json"
        }, {
            type: "workspace",
            pattern: "**/.cursor/**/cli-config.json"
        }, {
            type: "workspace",
            pattern: "**/.cursor/**/mcp.json"
        }, {
            type: "workspace",
            pattern: "**/.cursor/**/mcp-approvals.json"
        }, {
            type: "workspace",
            pattern: "**/.cursor/**/permissions.json"
        }, {
            type: "git",
            pattern: "**/.git/hooks/**"
        }, {
            type: "git",
            pattern: "**/.git/config"
        }, {
            type: "git",
            pattern: "**/.git/config.worktree"
        }, {
            type: "git",
            pattern: "**/.git/info/attributes"
        }, {
            type: "worktree",
            pattern: ".git"
        }, {
            type: "absolute",
            pattern: "/etc/ssl/cert.pem"
        }, {
            type: "absolute",
            pattern: "/etc/ssl/ca-bundle.pem"
        }, {
            type: "absolute",
            pattern: "/private/etc/ssl/cert.pem"
        }, {
            type: "absolute",
            pattern: "/etc/ssl/certs/ca-certificates.crt"
        }, {
            type: "absolute",
            pattern: "/etc/pki/tls/certs/ca-bundle.crt"
        }, {
            type: "absolute",
            pattern: "/etc/pki/ca-trust/extracted/pem/tls-ca-bundle.pem"
        }, {
            type: "home",
            pattern: ".ssh"
        }];

        function S(e) {
            const t = _.filter(e => "workspace" === e.type).map(e => e.pattern);
            return {
                [e]: t
            }
        }

        function m(e) {
            const t = _.filter(e => "worktree" === e.type).map(e => e.pattern);
            return {
                [e]: t
            }
        }
        _.filter(e => "git" === e.type).map(e => e.pattern), _.filter(e => "workspace" === e.type && e.pattern.startsWith("!") && !e.pattern.endsWith("/**")).map(e => e.pattern.replace(/^!(\*\*\/)?/, ""));
        const P = [];
        new Map, "win32" === process.platform || process.platform;
        const v = new WeakMap;

        function E(e) {
            return void 0 !== e && ("allow" === e.default || void 0 !== e.allow && e.allow.length > 0)
        }
        const R = "darwin" === process.platform,
            C = "linux" === process.platform,
            x = (0, a.h)("shell-exec:sandbox");

        function $(e) {
            const t = w.randomBytes(8).toString("hex"),
                r = n.join(s.tmpdir(), `sandbox-policy-${t}`);
            return u.writeFileSync(r, e, {
                encoding: "utf-8",
                mode: 384
            }), r
        }
        let D;

        function j() {
            return D
        }

        function A(e) {
            "linux" === process.platform && Object.assign(e, function(e) {
                return c && (0, n.isAbsolute)(c) ? {
                    ...l(e, c),
                    CURSOR_RIPGREP_PATH: c
                } : e
            }(e))
        }
        let O = null,
            M = null,
            B = null,
            H = null;

        function T(e) {
            if (null !== O) return !!O;
            try {
                const t = j();
                return x.info(e, `[checkBinaryAvailable] Resolved binary path: ${t}`), t ? (O = u.existsSync(t), O ? x.info(e, `[checkBinaryAvailable] Binary path exists: ${O}`) : (M = new Error(`Sandbox binary not found at ${t}`), x.info(e, `[checkBinaryAvailable] Binary not found at: ${t}`)), !!O) : (M = new Error("Sandbox binary path was not configured"), O = !1, x.info(e, "[checkBinaryAvailable] Binary path not set, returning false"), !1)
            } catch (t) {
                return M = t, O = !1, x.info(e, `[checkBinaryAvailable] Exception checking binary: ${t}`), !1
            }
        }

        function U(e, t = [], r = {}, o) {
            const i = (0, a.q6)();
            if (r.env = f(r.env), !T(i)) throw new Error(`Sandbox binary not available: ${M?.message||"binary not configured"}. Please build the binary or use 'insecure_none' policy.`);
            if ("insecure_none" === o.type) return (0, d.spawn)(e, t, r);
            if ("workspace_readwrite" === o.type || "workspace_readonly" === o.type) return function(e, t, r, o) {
                if ("workspace_readwrite" !== o.type && "workspace_readonly" !== o.type) throw new Error("Expected workspace_readwrite or workspace_readonly policy");
                const i = String(r.cwd ?? process.cwd()),
                    s = o.sandboxWorkspaceRoot ?? i;
                let a, c = e,
                    p = t;
                r.shell && ("win32" === process.platform ? (c = "string" == typeof r.shell ? r.shell : "cmd.exe", p = ["/c", `${e} ${t.join(" ")}`]) : (c = "string" == typeof r.shell ? r.shell : "/bin/sh", p = ["-c", `${e} ${t.join(" ")}`])), o.ignoreMapping && (a = W(o.ignoreMapping));
                const l = function(e, t, r) {
                        const o = e && e.length > 0 ? function(...e) {
                                const t = {};
                                for (const r of e) {
                                    let e = !1;
                                    try {
                                        e = (0, u.existsSync)(r) && (0, u.statSync)(r).isDirectory()
                                    } catch {}
                                    if (e) t[r] || (t[r] = []), t[r].push("**");
                                    else {
                                        const e = r.lastIndexOf("/"),
                                            n = e > 0 ? r.slice(0, e) : "/",
                                            o = e >= 0 ? r.slice(e + 1) : r;
                                        t[n] || (t[n] = []), o ? t[n].push(o, `${o}/**`) : t[n].push("**")
                                    }
                                }
                                return t
                            }(...e) : {},
                            i = function(e) {
                                let t = n.resolve(e);
                                for (;;) {
                                    try {
                                        const e = n.join(t, ".git");
                                        if (u.existsSync(e)) return !0
                                    } catch {}
                                    const e = n.dirname(t);
                                    if (e === t) return !1;
                                    t = e
                                }
                            }(r),
                            s = !C || i ? t ?? {} : {},
                            a = {
                                ...o
                            };
                        for (const [e, t] of Object.entries(s)) a[e] ? a[e] = [...a[e], ...t] : a[e] = t;
                        if (0 !== Object.keys(a).length) return W(a)
                    }(o.additionalReadonlyPaths, o.writeProtectionMapping, s),
                    f = E(o.networkPolicy),
                    h = "workspace_readonly" === o.type ? {
                        type: "workspace_readonly",
                        cwd: s,
                        additionalReadonlyPaths: l,
                        networkAccess: f,
                        ignoreMapping: a
                    } : {
                        type: "workspace_readwrite",
                        cwd: s,
                        additionalReadwritePaths: o.additionalReadwritePaths || [],
                        additionalReadonlyPaths: l,
                        networkAccess: f,
                        disableTmpWrite: o.disableTmpWrite || !1,
                        ignoreMapping: a
                    },
                    w = function(e) {
                        if ("insecure_none" === e.type) return;
                        const t = e.networkPolicy;
                        if (void 0 === t) return;
                        if (!E(t)) return;
                        const r = void 0 !== t.deny && t.deny.length > 0;
                        return "allow" !== t.default || r ? {
                            version: 1,
                            ...t
                        } : void 0
                    }(o),
                    g = {
                        sandbox: h
                    };
                void 0 !== w && (g.networkPolicy = w), !1 === o.networkPolicyStrict && (g.networkPolicyStrict = !1);
                const b = ["--policy", $(JSON.stringify(g)), "--", c, ...p],
                    k = {
                        ..."linux" === process.platform ? y(process.env) : process.env,
                        ..."linux" === process.platform && r.env ? y(r.env) : r.env,
                        CURSOR_SANDBOX: "native"
                    };
                A(k);
                const _ = {
                    cwd: r.cwd || i,
                    env: k,
                    stdio: r.stdio || ["pipe", "pipe", "pipe"]
                };
                try {
                    const e = new Date,
                        t = (0, d.spawn)(String(j()), b, _);
                    return R && t.pid && function(e, t) {
                        v.set(e, t)
                    }(t, {
                        startTime: e,
                        pid: t.pid
                    }), t
                } catch (e) {
                    throw new Error(`Failed to spawn sandboxed process: ${e}`)
                }
            }(e, t, r, o);
            throw new Error(`Unsupported sandbox policy: ${String(o)}`)
        }

        function W(e, t, r, n) {
            const o = {};
            for (const [t, r] of Object.entries(e)) {
                const e = t.startsWith("file://") ? I(t) : t;
                o[e] = r;
                const n = N(e);
                n !== e && (o[n] = r)
            }
            return o
        }

        function I(e) {
            let t = e.replace(/^file:\/\//, "");
            return t = decodeURIComponent(t), t.length > 1 && t.endsWith("/") && (t = t.slice(0, -1)), t
        }

        function N(e) {
            try {
                return (0, u.realpathSync)(e)
            } catch {
                return e
            }
        }
        class L extends Error {
            reason;
            constructor(e, t) {
                super(e), this.reason = t, this.name = "SandboxUnsupportedError"
            }
        }

        function F(e, t = [], r = {}, n) {
            if (r.env = f(r.env), n.enableSharedBuildCache && (r = {
                    ...r,
                    env: {
                        ...f(process.env),
                        ...k(),
                        ...r.env
                    }
                }), "insecure_none" !== n.type) {
                if (function() {
                        if (null !== H) return H;
                        const e = (0, a.q6)();
                        if (x.info(e, "[isSandboxHelperSupported] Starting sandbox support check..."), !T(e)) {
                            const t = M?.message || "Binary check failed";
                            return B = t, x.info(e, `[isSandboxHelperSupported] Binary not available, returning false. Reason: ${t}`), H = !1, H
                        }
                        if ("win32" === process.platform) return B = "Windows sandbox helper only provides network proxy, not filesystem isolation", x.info(e, "[isSandboxHelperSupported] win32: returning false (proxy-only, no filesystem sandbox)"), H = !1, H;
                        if ("darwin" === process.platform) return B = null, x.info(e, `[isSandboxHelperSupported] ${process.platform} platform, binary available, sandbox supported!`), H = !0, H;
                        try {
                            const t = process.cwd(),
                                r = {
                                    sandbox: {
                                        type: "workspace_readwrite",
                                        cwd: t,
                                        additionalReadwritePaths: [],
                                        networkAccess: !1,
                                        disableTmpWrite: !1,
                                        ignoreMapping: void 0
                                    }
                                },
                                n = String(j());
                            x.info(e, `[isSandboxHelperSupported] Running preflight with binary: ${n}`), x.info(e, `[isSandboxHelperSupported] CWD: ${t}`);
                            const o = {
                                ...process.env
                            };
                            A(o);
                            const i = $(JSON.stringify(r));
                            return (0, d.execFileSync)(n, ["--policy", i, "--preflight-only", "--", "/bin/true"], {
                                stdio: ["ignore", "ignore", "pipe"],
                                timeout: 15e3,
                                env: o,
                                shell: !1
                            }), B = null, x.info(e, "[isSandboxHelperSupported] Preflight succeeded, sandbox supported!"), H = !0, H
                        } catch (t) {
                            const r = t,
                                n = r.stderr?.toString?.() || "";
                            return x.error(e, `[isSandboxHelperSupported] Preflight failed: ${r.message}`), x.error(e, `[isSandboxHelperSupported] Exit status: ${r?.status}`), n && x.error(e, `[isSandboxHelperSupported] Stderr: ${n}`), "number" == typeof r?.status && 2 === r.status ? (B = `Linux preflight failed with exit code 2 (unsupported kernel features). stderr: ${n||"none"}`, H = !1, H) : (B = `Linux preflight failed: ${r.message||"unknown error"}. Exit status: ${r?.status}. stderr: ${n||"none"}`, H = !1, H)
                        }
                    }()) return U(e, t, r, n);
                const o = B;
                throw new L(`Sandbox policy '${n.type}' is not supported on this system. Ensure the sandbox helper binary is available, or use 'insecure_none'. Reason: ${o||"unknown"}`, o ?? void 0)
            }
            return function(e, t, r) {
                return (0, d.spawn)(e, t, r)
            }(e, t, r)
        }
        var G, z, Y, K;

        function X(...e) {
            return e.some(e => !0 === e)
        }

        function Z(...e) {
            const t = new Set;
            for (const r of e)
                if (r)
                    for (const e of r) t.add(q(e));
            return [...t]
        }

        function q(e) {
            const t = e.replace(/\\/g, "/").replace(/\/+$/, "");
            return "" === t ? "/" : /^[a-zA-Z]:$/.test(t) ? `${t}/` : t
        }

        function J(...e) {
            const t = e.filter(e => void 0 !== e);
            if (0 === t.length) return;
            const r = {};
            for (const e of t)
                for (const [t, n] of Object.entries(e)) {
                    const e = r[t];
                    if (e) {
                        const o = new Set(e);
                        for (const e of n) o.has(e) && o.delete(e), o.add(e);
                        r[t] = [...o]
                    } else r[t] = [...n]
                }
            return 0 !== Object.keys(r).length ? r : void 0
        }

        function V(...e) {
            for (let t = e.length - 1; t >= 0; t--)
                if (void 0 !== e[t]) return e[t]
        }
        async function Q(e, t) {
            if (!t) return {
                policy: {
                    type: "insecure_none"
                }
            };
            const r = await (0, i.stat)((0, n.join)(e, ".git")).then(e => e, () => null),
                s = r?.isFile() ?? !1,
                a = null !== r;
            if ("workspace_readwrite" === (c = t, c.teamAdmin?.type ?? c.perRepo?.type ?? c.perUser?.type ?? "insecure_none")) {
                let r = e;
                if (s) {
                    const i = await (0, o.DP)("git", ["rev-parse", "--git-common-dir"], {
                        cwd: e
                    }).then(t => (0, n.resolve)(e, t.trim()), () => null);
                    if (i) {
                        r = (0, n.dirname)(i);
                        const o = t.perRepo,
                            s = o?.ignoreMapping;
                        t = {
                            ...t,
                            perRepo: {
                                ...o,
                                type: "workspace_readwrite",
                                additionalReadwritePaths: [...o?.additionalReadwritePaths ?? [], i],
                                ignoreMapping: s,
                                writeProtectionMapping: J(o?.writeProtectionMapping, m(e))
                            }
                        }
                    }
                }
                if (a) return ee(t, {
                    workspaceDir: e,
                    gitDirParent: r
                })
            }
            var c;
            return ee(t, {
                workspaceDir: e
            })
        }

        function ee(e, t) {
            const r = function(e) {
                const {
                    perUser: t,
                    perRepo: r,
                    teamAdmin: n
                } = e, o = [t, r, n].filter(e => void 0 !== e);
                if (0 === o.length) return;
                const i = o[0].type;
                for (const e of o)
                    if (e.type !== i) throw new Error(`Cannot merge policies of different types: found "${i}" and "${e.type}". All policies must be of the same type (all workspace_readwrite, all workspace_readonly, or all insecure_none).`);
                return i
            }(e);
            if (void 0 === r) return ne(e, t);
            switch (r) {
                case "workspace_readwrite":
                    return ne(e, t);
                case "workspace_readonly":
                    return function(e, t) {
                        const r = t?.debug,
                            n = te(e, t),
                            o = {
                                policy: re({
                                    type: "workspace_readonly",
                                    disableTmpWrite: n.disableTmpWrite,
                                    networkPolicyStrict: n.networkPolicyStrict,
                                    additionalReadonlyPaths: n.additionalReadonlyPaths,
                                    networkPolicy: n.networkPolicy,
                                    debugOutputDir: n.debugOutputDir,
                                    captureDenies: n.captureDenies,
                                    enableSharedBuildCache: n.enableSharedBuildCache,
                                    ignoreMapping: n.ignoreMapping,
                                    writeProtectionMapping: n.writeProtectionMapping
                                }, "workspace_readonly")
                            };
                        return r && (o.debug = {
                            fieldSources: n.fieldSources
                        }), o
                    }(e, t);
                case "insecure_none":
                    return function(e, t) {
                        const {
                            perUser: r,
                            perRepo: n,
                            teamAdmin: o
                        } = e, i = t?.debug, s = {
                            type: "insecure_none",
                            allowlistEscalated: X(r?.allowlistEscalated, n?.allowlistEscalated, o?.allowlistEscalated) || void 0,
                            debugOutputDir: V(r?.debugOutputDir, n?.debugOutputDir, o?.debugOutputDir),
                            captureDenies: X(r?.captureDenies, n?.captureDenies, o?.captureDenies) || void 0,
                            enableSharedBuildCache: V(r?.enableSharedBuildCache, n?.enableSharedBuildCache, o?.enableSharedBuildCache)
                        }, a = Object.fromEntries(Object.entries(s).filter(([e, t]) => void 0 !== t));
                        a.type = "insecure_none";
                        const c = {
                            policy: a
                        };
                        return i && (c.debug = {
                            fieldSources: {}
                        }), c
                    }(e, t);
                default:
                    throw new Error(`Unknown policy type: ${r}`)
            }
        }

        function te(e, t) {
            const r = t?.debug,
                {
                    perUser: o,
                    perRepo: i,
                    teamAdmin: a
                } = e,
                c = t?.workspaceDir ?? process.cwd(),
                p = function(e) {
                    const t = function() {
                            if (0 !== P.length) return {
                                version: 1,
                                deny: [...P]
                            }
                        }(),
                        r = s.homedir(),
                        o = [];
                    for (const e of _) switch (e.type) {
                        case "workspace":
                        case "git":
                        case "worktree":
                            break;
                        case "absolute":
                            o.push(e.pattern);
                            break;
                        case "home":
                            r.length > 0 && o.push((0, n.join)(r, e.pattern));
                            break;
                        default: {
                            const t = e.type;
                            throw new Error(`Unknown entry type: ${t}`)
                        }
                    }
                    return {
                        type: "workspace_readwrite",
                        additionalReadonlyPaths: o,
                        writeProtectionMapping: S(e),
                        ...t && {
                            networkPolicy: t
                        },
                        networkPolicyStrict: !0
                    }
                }(c),
                l = {},
                d = [o, i, a],
                u = ["perUser", "perRepo", "teamAdmin", "hardcoded"],
                f = (e, t) => {
                    r && (l[e] = u[t] ?? "unknown")
                },
                h = X(o?.disableTmpWrite, i?.disableTmpWrite, a?.disableTmpWrite);
            for (let e = d.length - 1; e >= 0; e--)
                if (!0 === d[e]?.disableTmpWrite) {
                    f("disableTmpWrite", e);
                    break
                } const y = X(o?.networkPolicyStrict, i?.networkPolicyStrict, a?.networkPolicyStrict, p.networkPolicyStrict);
            p.networkPolicyStrict && f("networkPolicyStrict", 3);
            const w = Z(o?.additionalReadonlyPaths, i?.additionalReadonlyPaths, a?.additionalReadonlyPaths, p.additionalReadonlyPaths),
                g = w.length > 0 ? w : void 0;
            let b = function(...e) {
                const t = e.filter(e => void 0 !== e);
                if (0 === t.length) return;
                let r;
                for (const e of t) {
                    if ("deny" === e.default) {
                        r = "deny";
                        break
                    }
                    "allow" === e.default && void 0 === r && (r = "allow")
                }
                const n = new Set;
                for (const e of t)
                    if (e.deny)
                        for (const t of e.deny) n.add(t);
                const o = new Set;
                for (const e of t)
                    if (e.allow)
                        for (const t of e.allow) o.add(t);
                const i = o.size > 0 ? [...o] : void 0;
                let s;
                for (let e = t.length - 1; e >= 0; e--)
                    if (void 0 !== t[e].logging) {
                        s = t[e].logging;
                        break
                    } const a = {
                    version: 1
                };
                return void 0 !== r && (a.default = r), void 0 !== i && (a.allow = i), n.size > 0 && (a.deny = [...n]), void 0 !== s && (a.logging = s), void 0 !== a.default || void 0 !== a.allow && 0 !== a.allow.length || void 0 !== a.deny && 0 !== a.deny.length || void 0 !== a.logging ? a : void 0
            }(o?.networkPolicy, i?.networkPolicy, a?.networkPolicy, p.networkPolicy);
            const k = a?.networkPolicy?.allow;
            void 0 !== k && k.length > 0 && void 0 !== b && (b = {
                ...b,
                allow: [...k]
            }, r && (l["networkPolicy.allow"] = "teamAdmin (replace)"));
            const m = void 0 !== (v = b) ? v : {
                version: 1,
                default: "deny"
            };
            var v;
            const E = V(o?.debugOutputDir, i?.debugOutputDir, a?.debugOutputDir),
                R = X(o?.captureDenies, i?.captureDenies, a?.captureDenies),
                C = V(o?.enableSharedBuildCache, i?.enableSharedBuildCache, a?.enableSharedBuildCache),
                x = J(o?.ignoreMapping, i?.ignoreMapping, a?.ignoreMapping, p.ignoreMapping),
                $ = function(e) {
                    const t = _.filter(e => "git" === e.type).map(e => e.pattern);
                    return {
                        [e]: t
                    }
                }(t?.gitDirParent ?? c);
            return {
                disableTmpWrite: h || void 0,
                networkPolicyStrict: y,
                additionalReadonlyPaths: g,
                networkPolicy: m,
                debugOutputDir: E,
                captureDenies: R || void 0,
                enableSharedBuildCache: C,
                ignoreMapping: x,
                writeProtectionMapping: J(o?.writeProtectionMapping, i?.writeProtectionMapping, a?.writeProtectionMapping, p.writeProtectionMapping, $),
                fieldSources: l
            }
        }

        function re(e, t) {
            const r = Object.fromEntries(Object.entries(e).filter(([e, t]) => void 0 !== t));
            return r.type = t, r
        }

        function ne(e, t) {
            const {
                perUser: r,
                perRepo: n,
                teamAdmin: o
            } = e, i = t?.debug, s = te(e, t), a = Z(r?.additionalReadwritePaths, n?.additionalReadwritePaths, o?.additionalReadwritePaths), c = {
                policy: re({
                    type: "workspace_readwrite",
                    disableTmpWrite: s.disableTmpWrite,
                    networkPolicyStrict: s.networkPolicyStrict,
                    additionalReadwritePaths: a.length > 0 ? a : void 0,
                    additionalReadonlyPaths: s.additionalReadonlyPaths,
                    networkPolicy: s.networkPolicy,
                    debugOutputDir: s.debugOutputDir,
                    captureDenies: s.captureDenies,
                    enableSharedBuildCache: s.enableSharedBuildCache,
                    ignoreMapping: s.ignoreMapping,
                    writeProtectionMapping: s.writeProtectionMapping
                }, "workspace_readwrite")
            };
            return i && (c.debug = {
                fieldSources: s.fieldSources
            }), c
        }
        process.platform, (z = G || (G = {})).Zsh = "zsh", z.ZshLight = "zsh-light", z.Bash = "bash", z.PowerShell = "powershell", z.Naive = "naive", process.platform, "function" == typeof SuppressedError && SuppressedError, "function" == typeof SuppressedError && SuppressedError, "function" == typeof SuppressedError && SuppressedError, "function" == typeof SuppressedError && SuppressedError, "function" == typeof SuppressedError && SuppressedError, "function" == typeof SuppressedError && SuppressedError, r(643),
            function(e) {
                e[e.EventLoopDelayP95Ms = 50] = "EventLoopDelayP95Ms", e[e.EventLoopUtilization = .7] = "EventLoopUtilization"
            }(Y || (Y = {})),
            function(e) {
                e[e.SampleIntervalMs = 250] = "SampleIntervalMs", e[e.EventLoopResolutionMs = 20] = "EventLoopResolutionMs"
            }(K || (K = {})), new Set(["cat", "grep"]), process.platform
    },
    6613: e => {
        function t(e) {
            return Array.isArray(e) ? e : [e]
        }
        const r = /^\s+$/,
            n = /(?:[^\\]|^)\\$/,
            o = /^\\!/,
            i = /^\\#/,
            s = /\r?\n/g,
            a = /^\.{0,2}\/|^\.{1,2}$/,
            c = /\/$/,
            p = "/";
        let l = "node-ignore";
        "undefined" != typeof Symbol && (l = Symbol.for("node-ignore"));
        const d = l,
            u = (e, t, r) => (Object.defineProperty(e, t, {
                value: r
            }), r),
            f = /([0-z])-([0-z])/g,
            h = () => !1,
            y = [
                [/^\uFEFF/, () => ""],
                [/((?:\\\\)*?)(\\?\s+)$/, (e, t, r) => t + (0 === r.indexOf("\\") ? " " : "")],
                [/(\\+?)\s/g, (e, t) => {
                    const {
                        length: r
                    } = t;
                    return t.slice(0, r - r % 2) + " "
                }],
                [/[\\$.|*+(){^]/g, e => `\\${e}`],
                [/(?!\\)\?/g, () => "[^/]"],
                [/^\//, () => "^"],
                [/\//g, () => "\\/"],
                [/^\^*\\\*\\\*\\\//, () => "^(?:.*\\/)?"],
                [/^(?=[^^])/, function() {
                    return /\/(?!$)/.test(this) ? "^" : "(?:^|\\/)"
                }],
                [/\\\/\\\*\\\*(?=\\\/|$)/g, (e, t, r) => t + 6 < r.length ? "(?:\\/[^\\/]+)*" : "\\/.+"],
                [/(^|[^\\]+)(\\\*)+(?=.+)/g, (e, t, r) => t + r.replace(/\\\*/g, "[^\\/]*")],
                [/\\\\\\(?=[$.|*+(){^])/g, () => "\\"],
                [/\\\\/g, () => "\\"],
                [/(\\)?\[([^\]/]*?)(\\*)($|\])/g, (e, t, r, n, o) => "\\" === t ? `\\[${r}${(e=>{const{length:t}=e;return e.slice(0,t-t%2)})(n)}${o}` : "]" === o && n.length % 2 == 0 ? `[${(e=>e.replace(f,(e,t,r)=>t.charCodeAt(0)<=r.charCodeAt(0)?e:""))(r)}${n}]` : "[]"],
                [/(?:[^*])$/, e => /\/$/.test(e) ? `${e}$` : `${e}(?=$|\\/$)`]
            ],
            w = /(^|\\\/)?\\\*$/,
            g = "regex",
            b = "checkRegex",
            k = {
                [g]: (e, t) => (t ? `${t}[^/]+` : "[^/]*") + "(?=$|\\/$)",
                [b]: (e, t) => (t ? `${t}[^/]*` : "[^/]*") + "(?=$|\\/$)"
            },
            _ = e => "string" == typeof e;
        class S {
            constructor(e, t, r, n, o, i) {
                this.pattern = e, this.mark = t, this.negative = o, u(this, "body", r), u(this, "ignoreCase", n), u(this, "regexPrefix", i)
            }
            get regex() {
                const e = "_" + g;
                return this[e] ? this[e] : this._make(g, e)
            }
            get checkRegex() {
                const e = "_" + b;
                return this[e] ? this[e] : this._make(b, e)
            }
            _make(e, t) {
                const r = this.regexPrefix.replace(w, k[e]),
                    n = this.ignoreCase ? new RegExp(r, "i") : new RegExp(r);
                return u(this, t, n)
            }
        }
        class m {
            constructor(e) {
                this._ignoreCase = e, this._rules = []
            }
            _add(e) {
                if (e && e[d]) return this._rules = this._rules.concat(e._rules._rules), void(this._added = !0);
                if (_(e) && (e = {
                        pattern: e
                    }), (e => e && _(e) && !r.test(e) && !n.test(e) && 0 !== e.indexOf("#"))(e.pattern)) {
                    const t = (({
                        pattern: e,
                        mark: t
                    }, r) => {
                        let n = !1,
                            s = e;
                        0 === s.indexOf("!") && (n = !0, s = s.substr(1)), s = s.replace(o, "!").replace(i, "#");
                        const a = (e => y.reduce((t, [r, n]) => t.replace(r, n.bind(e)), e))(s);
                        return new S(e, t, s, r, n, a)
                    })(e, this._ignoreCase);
                    this._added = !0, this._rules.push(t)
                }
            }
            add(e) {
                return this._added = !1, t(_(e) ? (e => e.split(s).filter(Boolean))(e) : e).forEach(this._add, this), this._added
            }
            test(e, t, r) {
                let n, o = !1,
                    i = !1;
                this._rules.forEach(s => {
                    const {
                        negative: a
                    } = s;
                    i === a && o !== i || a && !o && !i && !t || s[r].test(e) && (o = !a, i = a, n = a ? void 0 : s)
                });
                const s = {
                    ignored: o,
                    unignored: i
                };
                return n && (s.rule = n), s
            }
        }
        const P = (e, t) => {
                throw new t(e)
            },
            v = (e, t, r) => _(e) ? e ? !v.isNotRelative(e) || r(`path should be a \`path.relative()\`d string, but got "${t}"`, RangeError) : r("path must not be empty", TypeError) : r(`path must be a string, but got \`${t}\``, TypeError),
            E = e => a.test(e);
        v.isNotRelative = E, v.convert = e => e;
        class R {
            constructor({
                ignorecase: e = !0,
                ignoreCase: t = e,
                allowRelativePaths: r = !1
            } = {}) {
                u(this, d, !0), this._rules = new m(t), this._strictPathCheck = !r, this._initCache()
            }
            _initCache() {
                this._ignoreCache = Object.create(null), this._testCache = Object.create(null)
            }
            add(e) {
                return this._rules.add(e) && this._initCache(), this
            }
            addPattern(e) {
                return this.add(e)
            }
            _test(e, t, r, n) {
                const o = e && v.convert(e);
                return v(o, e, this._strictPathCheck ? P : h), this._t(o, t, r, n)
            }
            checkIgnore(e) {
                if (!c.test(e)) return this.test(e);
                const t = e.split(p).filter(Boolean);
                if (t.pop(), t.length) {
                    const e = this._t(t.join(p) + p, this._testCache, !0, t);
                    if (e.ignored) return e
                }
                return this._rules.test(e, !1, b)
            }
            _t(e, t, r, n) {
                if (e in t) return t[e];
                if (n || (n = e.split(p).filter(Boolean)), n.pop(), !n.length) return t[e] = this._rules.test(e, r, g);
                const o = this._t(n.join(p) + p, t, r, n);
                return t[e] = o.ignored ? o : this._rules.test(e, r, g)
            }
            ignores(e) {
                return this._test(e, this._ignoreCache, !1).ignored
            }
            createFilter() {
                return e => !this.ignores(e)
            }
            filter(e) {
                return t(e).filter(this.createFilter())
            }
            test(e) {
                return this._test(e, this._testCache, !0)
            }
        }
        const C = e => new R(e),
            x = () => {
                v.convert = e => /^\\\\\?\\/.test(e) || /["<>|\u0000-\u001F]+/u.test(e) ? e : e.replace(/\\/g, "/");
                const e = /^[a-z]:\//i;
                v.isNotRelative = t => e.test(t) || E(t)
            };
        "undefined" != typeof process && "win32" === process.platform && x(), e.exports = C, C.default = C, e.exports.isPathValid = e => v(e && v.convert(e), e, h), u(e.exports, Symbol.for("setupWindows"), x)
    }
};
//# sourceMappingURL=http://go/sourcemap/sourcemaps/e56ad3440df06d22ca7501e65fd518e905486ef0/extensions/cursor-mcp/dist/878.js.map