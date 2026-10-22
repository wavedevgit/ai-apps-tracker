export const __rspack_esm_id = 644241;
export const __rspack_esm_ids = [644241];
export const __webpack_modules__ = {
    z8Z: (function(e, o, t) {
        t.d(o, {
            a: () => g,
            b: () => n,
            c: () => y,
            d: () => p,
            e: () => x
        });
        var i = t("kS"),
            r = t("ft");
        Symbol("Let zodToJsonSchema decide on which parser to use"), new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
        var a = t("AS");
        t("I"), "u" > typeof require ? require : "u" > typeof Proxy && new Proxy(function(e) {
            if ("u" > typeof require) return require.apply(this, arguments);
            throw Error('Dynamic require of "' + e + '" is not supported')
        }, {
            get: (e, o) => ("u" > typeof require ? require : e)[o]
        });
        var s = a.union([a.literal("light"), a.literal("dark")]).describe("Color theme preference for the host environment."),
            n = a.union([a.literal("inline"), a.literal("fullscreen"), a.literal("pip")]).describe("Display mode for UI presentation."),
            l = a.union([a.literal("--color-background-primary"), a.literal("--color-background-secondary"), a.literal("--color-background-tertiary"), a.literal("--color-background-inverse"), a.literal("--color-background-ghost"), a.literal("--color-background-info"), a.literal("--color-background-danger"), a.literal("--color-background-success"), a.literal("--color-background-warning"), a.literal("--color-background-disabled"), a.literal("--color-text-primary"), a.literal("--color-text-secondary"), a.literal("--color-text-tertiary"), a.literal("--color-text-inverse"), a.literal("--color-text-ghost"), a.literal("--color-text-info"), a.literal("--color-text-danger"), a.literal("--color-text-success"), a.literal("--color-text-warning"), a.literal("--color-text-disabled"), a.literal("--color-border-primary"), a.literal("--color-border-secondary"), a.literal("--color-border-tertiary"), a.literal("--color-border-inverse"), a.literal("--color-border-ghost"), a.literal("--color-border-info"), a.literal("--color-border-danger"), a.literal("--color-border-success"), a.literal("--color-border-warning"), a.literal("--color-border-disabled"), a.literal("--color-ring-primary"), a.literal("--color-ring-secondary"), a.literal("--color-ring-inverse"), a.literal("--color-ring-info"), a.literal("--color-ring-danger"), a.literal("--color-ring-success"), a.literal("--color-ring-warning"), a.literal("--font-sans"), a.literal("--font-mono"), a.literal("--font-weight-normal"), a.literal("--font-weight-medium"), a.literal("--font-weight-semibold"), a.literal("--font-weight-bold"), a.literal("--font-text-xs-size"), a.literal("--font-text-sm-size"), a.literal("--font-text-md-size"), a.literal("--font-text-lg-size"), a.literal("--font-heading-xs-size"), a.literal("--font-heading-sm-size"), a.literal("--font-heading-md-size"), a.literal("--font-heading-lg-size"), a.literal("--font-heading-xl-size"), a.literal("--font-heading-2xl-size"), a.literal("--font-heading-3xl-size"), a.literal("--font-text-xs-line-height"), a.literal("--font-text-sm-line-height"), a.literal("--font-text-md-line-height"), a.literal("--font-text-lg-line-height"), a.literal("--font-heading-xs-line-height"), a.literal("--font-heading-sm-line-height"), a.literal("--font-heading-md-line-height"), a.literal("--font-heading-lg-line-height"), a.literal("--font-heading-xl-line-height"), a.literal("--font-heading-2xl-line-height"), a.literal("--font-heading-3xl-line-height"), a.literal("--border-radius-xs"), a.literal("--border-radius-sm"), a.literal("--border-radius-md"), a.literal("--border-radius-lg"), a.literal("--border-radius-xl"), a.literal("--border-radius-full"), a.literal("--border-width-regular"), a.literal("--shadow-hairline"), a.literal("--shadow-sm"), a.literal("--shadow-md"), a.literal("--shadow-lg")]).describe("CSS variable keys available to MCP apps for theming."),
            c = a.record(l.describe(`Style variables for theming MCP apps.

Individual style keys are optional - hosts may provide any subset of these values.
Values are strings containing CSS values (colors, sizes, font stacks, etc.).

Note: This type uses \`Record<K, string | undefined>\` rather than \`Partial<Record<K, string>>\`
for compatibility with Zod schema generation. Both are functionally equivalent for validation.`), a.union([a.string(), a.undefined()]).describe(`Style variables for theming MCP apps.

Individual style keys are optional - hosts may provide any subset of these values.
Values are strings containing CSS values (colors, sizes, font stacks, etc.).

Note: This type uses \`Record<K, string | undefined>\` rather than \`Partial<Record<K, string>>\`
for compatibility with Zod schema generation. Both are functionally equivalent for validation.`)).describe(`Style variables for theming MCP apps.

Individual style keys are optional - hosts may provide any subset of these values.
Values are strings containing CSS values (colors, sizes, font stacks, etc.).

Note: This type uses \`Record<K, string | undefined>\` rather than \`Partial<Record<K, string>>\`
for compatibility with Zod schema generation. Both are functionally equivalent for validation.`),
            d = (a.object({
                method: a.literal("ui/open-link"),
                params: a.object({
                    url: a.string().describe("URL to open in the host's browser")
                })
            }), a.object({
                isError: a.boolean().optional().describe("True if the host failed to open the URL (e.g., due to security policy).")
            }).passthrough(), a.object({
                isError: a.boolean().optional().describe("True if the download failed (e.g., user cancelled or host denied).")
            }).passthrough(), a.object({
                isError: a.boolean().optional().describe("True if the host rejected or failed to deliver the message.")
            }).passthrough(), a.object({
                method: a.literal("ui/notifications/sandbox-proxy-ready"),
                params: a.object({})
            }), a.object({
                connectDomains: a.array(a.string()).optional().describe(`Origins for network requests (fetch/XHR/WebSocket).

- Maps to CSP \`connect-src\` directive
- Empty or omitted → no network connections (secure default)`),
                resourceDomains: a.array(a.string()).optional().describe("Origins for static resources (images, scripts, stylesheets, fonts, media).\n\n- Maps to CSP `img-src`, `script-src`, `style-src`, `font-src`, `media-src` directives\n- Wildcard subdomains supported: `https://*.example.com`\n- Empty or omitted → no network resources (secure default)"),
                frameDomains: a.array(a.string()).optional().describe("Origins for nested iframes.\n\n- Maps to CSP `frame-src` directive\n- Empty or omitted → no nested iframes allowed (`frame-src 'none'`)"),
                baseUriDomains: a.array(a.string()).optional().describe("Allowed base URIs for the document.\n\n- Maps to CSP `base-uri` directive\n- Empty or omitted → only same origin allowed (`base-uri 'self'`)")
            })),
            p = a.object({
                camera: a.object({}).optional().describe("Request camera access.\n\nMaps to Permission Policy `camera` feature."),
                microphone: a.object({}).optional().describe("Request microphone access.\n\nMaps to Permission Policy `microphone` feature."),
                geolocation: a.object({}).optional().describe("Request geolocation access.\n\nMaps to Permission Policy `geolocation` feature."),
                clipboardWrite: a.object({}).optional().describe("Request clipboard write access.\n\nMaps to Permission Policy `clipboard-write` feature.")
            }),
            b = (a.object({
                method: a.literal("ui/notifications/size-changed"),
                params: a.object({
                    width: a.number().optional().describe("New width in pixels."),
                    height: a.number().optional().describe("New height in pixels.")
                })
            }), a.object({
                method: a.literal("ui/notifications/tool-input"),
                params: a.object({
                    arguments: a.record(a.string(), a.unknown().describe("Complete tool call arguments as key-value pairs.")).optional().describe("Complete tool call arguments as key-value pairs.")
                })
            }), a.object({
                method: a.literal("ui/notifications/tool-input-partial"),
                params: a.object({
                    arguments: a.record(a.string(), a.unknown().describe("Partial tool call arguments (incomplete, may change).")).optional().describe("Partial tool call arguments (incomplete, may change).")
                })
            }), a.object({
                method: a.literal("ui/notifications/tool-cancelled"),
                params: a.object({
                    reason: a.string().optional().describe('Optional reason for the cancellation (e.g., "user action", "timeout").')
                })
            }), a.object({
                fonts: a.string().optional()
            })),
            u = a.object({
                variables: c.optional().describe("CSS variables for theming the app."),
                css: b.optional().describe("CSS blocks that apps can inject.")
            }),
            h = (a.object({
                method: a.literal("ui/resource-teardown"),
                params: a.object({})
            }), a.record(a.string(), a.unknown()), a.object({
                text: a.object({}).optional().describe("Host supports text content blocks."),
                image: a.object({}).optional().describe("Host supports image content blocks."),
                audio: a.object({}).optional().describe("Host supports audio content blocks."),
                resource: a.object({}).optional().describe("Host supports resource content blocks."),
                resourceLink: a.object({}).optional().describe("Host supports resource link content blocks."),
                structuredContent: a.object({}).optional().describe("Host supports structured content.")
            })),
            m = (a.object({
                method: a.literal("ui/notifications/request-teardown"),
                params: a.object({}).optional()
            }), a.object({
                experimental: a.record(a.string(), a.record(a.string(), a.any()).describe("Experimental features keyed by identifier.")).optional().describe("Experimental features keyed by identifier."),
                openLinks: a.object({}).optional().describe("Host supports opening external URLs."),
                downloadFile: a.object({}).optional().describe("Host supports file downloads via ui/download-file."),
                serverTools: a.object({
                    listChanged: a.boolean().optional().describe("Host supports tools/list_changed notifications.")
                }).optional().describe("Host can proxy tool calls to the MCP server."),
                serverResources: a.object({
                    listChanged: a.boolean().optional().describe("Host supports resources/list_changed notifications.")
                }).optional().describe("Host can proxy resource reads to the MCP server."),
                logging: a.object({}).optional().describe("Host accepts log messages."),
                sandbox: a.object({
                    permissions: p.optional().describe("Permissions granted by the host (camera, microphone, geolocation)."),
                    csp: d.optional().describe("CSP domains approved by the host.")
                }).optional().describe("Sandbox configuration applied by the host."),
                updateModelContext: h.optional().describe("Host accepts context updates (ui/update-model-context) to be included in the model's context for future turns."),
                message: h.optional().describe("Host supports receiving content messages (ui/message) from the view."),
                sampling: a.object({
                    tools: a.object({}).optional().describe("Host supports tool use via `tools` and `toolChoice` parameters.")
                }).optional().describe("Host supports LLM sampling (sampling/createMessage) from the view.\nMirrors the MCP `ClientCapabilities.sampling` shape so hosts can pass it through.")
            })),
            g = a.object({
                experimental: a.record(a.string(), a.record(a.string(), a.any()).describe("Experimental features keyed by identifier.")).optional().describe("Experimental features keyed by identifier."),
                tools: a.object({
                    listChanged: a.boolean().optional().describe("App supports tools/list_changed notifications.")
                }).optional().describe("App exposes MCP-style tools that the host can call."),
                availableDisplayModes: a.array(n).optional().describe("Display modes the app supports.")
            }),
            f = (a.object({
                method: a.literal("ui/notifications/initialized"),
                params: a.object({}).optional()
            }), a.object({
                csp: d.optional().describe("Content Security Policy configuration for UI resources."),
                permissions: p.optional().describe("Sandbox permissions requested by the UI resource."),
                domain: a.string().optional().describe(`Dedicated origin for view sandbox.

Useful when views need stable, dedicated origins for OAuth callbacks, CORS policies, or API key allowlists.

**Host-dependent:** The format and validation rules for this field are determined by each host. Servers MUST consult host-specific documentation for the expected domain format. Common patterns include:
- Hash-based subdomains (e.g., \`{hash}.claudemcpcontent.com\`)
- URL-derived subdomains (e.g., \`www-example-com.oaiusercontent.com\`)

If omitted, host uses default sandbox origin (typically per-conversation).`),
                prefersBorder: a.boolean().optional().describe(`Visual boundary preference - true if view prefers a visible border.

Boolean requesting whether a visible border and background is provided by the host. Specifying an explicit value for this is recommended because hosts' defaults may vary.

- \`true\`: request visible border + background
- \`false\`: request no visible border + background
- omitted: host decides border`)
            }), a.object({
                method: a.literal("ui/request-display-mode"),
                params: a.object({
                    mode: n.describe("The display mode being requested.")
                })
            }), a.object({
                mode: n.describe("The display mode that was actually set. May differ from requested if not supported.")
            }).passthrough(), a.union([a.literal("model"), a.literal("app")]).describe("Tool visibility scope - who can access the tool.")),
            y = (a.object({
                resourceUri: a.string().optional(),
                visibility: a.array(f).optional().describe(`Who can access this tool. Default: ["model", "app"]
- "model": Tool visible to and callable by the agent
- "app": Tool callable by the app from this server only`),
                csp: a.never().optional(),
                permissions: a.never().optional()
            }), a.object({
                mimeTypes: a.array(a.string()).optional().describe('Array of supported MIME types for UI resources.\nMust include `"text/html;profile=mcp-app"` for MCP Apps support.')
            }), a.object({
                method: a.literal("ui/download-file"),
                params: a.object({
                    contents: a.array(a.union([i.n, i.Y])).describe("Resource contents to download — embedded (inline data) or linked (host fetches). Uses standard MCP resource types.")
                })
            }), a.object({
                method: a.literal("ui/message"),
                params: a.object({
                    role: a.literal("user").describe('Message role, currently only "user" is supported.'),
                    content: a.array(i.g).describe("Message content blocks (text, image, etc.).")
                })
            }), a.object({
                method: a.literal("ui/notifications/sandbox-resource-ready"),
                params: a.object({
                    html: a.string().describe("HTML content to load into the inner iframe."),
                    sandbox: a.string().optional().describe("Optional override for the inner iframe's sandbox attribute."),
                    csp: d.optional().describe("CSP configuration from resource metadata."),
                    permissions: p.optional().describe("Sandbox permissions from resource metadata.")
                })
            }), a.object({
                method: a.literal("ui/notifications/tool-result"),
                params: i.c.describe("Standard MCP tool execution result.")
            }), a.object({
                toolInfo: a.object({
                    id: i.W.optional().describe("JSON-RPC id of the tools/call request."),
                    tool: i.eb.describe("Tool definition including name, inputSchema, etc.")
                }).optional().describe("Metadata of the tool call that instantiated this App."),
                theme: s.optional().describe("Current color theme preference."),
                styles: u.optional().describe("Style configuration for theming the app."),
                displayMode: n.optional().describe("How the UI is currently displayed."),
                availableDisplayModes: a.array(n).optional().describe("Display modes the host supports."),
                containerDimensions: a.union([a.object({
                    height: a.number().describe("Fixed container height in pixels.")
                }), a.object({
                    maxHeight: a.union([a.number(), a.undefined()]).optional().describe("Maximum container height in pixels.")
                })]).and(a.union([a.object({
                    width: a.number().describe("Fixed container width in pixels.")
                }), a.object({
                    maxWidth: a.union([a.number(), a.undefined()]).optional().describe("Maximum container width in pixels.")
                })])).optional().describe(`Container dimensions. Represents the dimensions of the iframe or other
container holding the app. Specify either width or maxWidth, and either height or maxHeight.`),
                locale: a.string().optional().describe("User's language and region preference in BCP 47 format."),
                timeZone: a.string().optional().describe("User's timezone in IANA format."),
                userAgent: a.string().optional().describe("Host application identifier."),
                platform: a.union([a.literal("web"), a.literal("desktop"), a.literal("mobile")]).optional().describe("Platform type for responsive design decisions."),
                deviceCapabilities: a.object({
                    touch: a.boolean().optional().describe("Whether the device supports touch input."),
                    hover: a.boolean().optional().describe("Whether the device supports hover interactions.")
                }).optional().describe("Device input capabilities."),
                safeAreaInsets: a.object({
                    top: a.number().describe("Top safe area inset in pixels."),
                    right: a.number().describe("Right safe area inset in pixels."),
                    bottom: a.number().describe("Bottom safe area inset in pixels."),
                    left: a.number().describe("Left safe area inset in pixels.")
                }).optional().describe("Mobile safe area boundaries in pixels.")
            }).passthrough()),
            x = (a.object({
                method: a.literal("ui/notifications/host-context-changed"),
                params: y.describe("Partial context update containing only changed fields.")
            }), a.object({
                method: a.literal("ui/update-model-context"),
                params: a.object({
                    content: a.array(i.g).optional().describe("Context content blocks (text, image, etc.)."),
                    structuredContent: a.record(a.string(), a.unknown().describe("Structured content for machine-readable context data.")).optional().describe("Structured content for machine-readable context data.")
                })
            }));
        a.object({
            method: a.literal("ui/initialize"),
            params: a.object({
                appInfo: i.w.describe("App identification (name and version)."),
                appCapabilities: g.describe("Features and capabilities this app provides."),
                protocolVersion: a.string().describe("Protocol version this app supports.")
            })
        }), a.object({
            protocolVersion: a.string().describe('Negotiated protocol version string (e.g., "2025-11-21").'),
            hostInfo: i.w.describe("Host application identification and version."),
            hostCapabilities: m.describe("Features and capabilities provided by the host."),
            hostContext: y.describe("Rich context about the host environment.")
        }).passthrough()
    })
};