/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("vscode");

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackgroundComposerAuthorityResolver: () => (/* binding */ BackgroundComposerAuthorityResolver)
/* harmony export */ });
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_vs_base_common_cursorSocketCloseError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _cursorServerUrlRetry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);



function toTemporarilyNotAvailableIfCursorSocketTransient(error) {
  if (!(error instanceof Error)) {
    return error;
  }
  if (error.code === _src_vs_base_common_cursorSocketCloseError_js__WEBPACK_IMPORTED_MODULE_1__.CURSOR_SOCKET_CLOSE_ERROR_CODE_TRANSIENT) {
    return vscode__WEBPACK_IMPORTED_MODULE_0__.RemoteAuthorityResolverError.TemporarilyNotAvailable(error.message);
  }
  return error;
}
function toNotAvailableIfPodGone(error) {
  if ((0,_cursorServerUrlRetry_js__WEBPACK_IMPORTED_MODULE_2__.isPodGoneCursorServerUrlError)(error)) {
    return vscode__WEBPACK_IMPORTED_MODULE_0__.RemoteAuthorityResolverError.NotAvailable(
      "This cloud agent's environment is no longer available."
    );
  }
  return error;
}
let _outputChannel;
function initLogger(outputChannel) {
  _outputChannel = outputChannel;
}
function log(...args) {
  const msg = args.map(String).join(" ");
  console.log(`[cursor-resolver]  ${msg}`);
  _outputChannel?.appendLine(`[INFO]  ${msg}`);
}
function logError(...args) {
  const msg = args.map(String).join(" ");
  _outputChannel?.appendLine(`[ERROR] ${msg}`);
}
function isCursorServerReservedPort(port) {
  return port >= 26e3 && port <= 26999;
}
function isFilteredBackgroundComposerPort(port) {
  if (isCursorServerReservedPort(port)) {
    return true;
  }
  if (port >= 5870 && port <= 5890) {
    return true;
  }
  if (port === 2375 || port === 5901 || port === 50052) {
    return true;
  }
  return false;
}
function getProductCommit() {
  const commit = vscode__WEBPACK_IMPORTED_MODULE_0__.cursor.productCommit ?? vscode__WEBPACK_IMPORTED_MODULE_0__.cursor.cursorServerCommit;
  if (!commit || !/^[a-zA-Z0-9\-_.]+$/.test(commit)) {
    logError("Invalid or missing product commit", commit);
    throw new Error("Invalid or missing product commit");
  }
  return commit;
}
function reportMetric(name, value) {
  try {
    vscode__WEBPACK_IMPORTED_MODULE_0__.cursor.metricsDistribution({
      stat: `background-composer.${name}`,
      value,
      tags: {}
    });
  } catch {
  }
}
class BackgroundComposerAuthorityResolver {
  constructor(connectionTokenProvider, outputChannel) {
    this.connectionTokenProvider = connectionTokenProvider;
    /**
     * bcIds whose locally cached cursor-server URL is suspect because the last
     * connection built from it failed (connect error, or close right after
     * establishment). The next resolve for such a bcId bypasses the cache and
     * fetches a fresh URL from the backend. The mark is consumed by that
     * resolve, so a single failure costs exactly one fresh fetch.
     */
    this.staleCursorServerUrlBcIds = /* @__PURE__ */ new Set();
    this.alwaysShowPortsView = true;
    initLogger(outputChannel);
    log("RemoteAuthorityResolver constructor");
  }
  createManagedResolvedAuthority(makeConnection, connectionToken, tunnelFactory) {
    return Object.assign(
      new vscode__WEBPACK_IMPORTED_MODULE_0__.ManagedResolvedAuthority(
        makeConnection,
        connectionToken,
        tunnelFactory
      ),
      {
        skipCreateInspectTunnel: true
      }
    );
  }
  /**
   * Filter out cursor-server reserved ports from being shown as candidates.
   * These ports (26000-26999) are used by cursor-server infrastructure and
   * should not be offered as port forwards in background composers.
   */
  async showCandidatePort(_host, port, _detail) {
    if (isFilteredBackgroundComposerPort(port)) {
      log(`Filtering out reserved/internal port ${port} from candidates`);
      return false;
    }
    return true;
  }
  async getCursorServerUrl(authority, useCache = true) {
    const indexOfPlus = authority.indexOf("+");
    const bcIdOrUrl = authority.substring(indexOfPlus + 1).trim();
    if (indexOfPlus === -1 || bcIdOrUrl.length === 0) {
      throw new Error("No bcId found in authority");
    }
    if (bcIdOrUrl.startsWith("{")) {
      try {
        return JSON.parse(bcIdOrUrl);
      } catch (e) {
        throw new Error("Invalid url found in authority");
      }
    }
    const bcId = bcIdOrUrl;
    const commit = getProductCommit();
    return await withTimer("getCursorServerUrl", async () => {
      try {
        return await this.connectionTokenProvider.getOrCreateCursorServerUrl(
          bcId,
          commit,
          useCache
        );
      } catch (error) {
        logError("Error getting cursor server url", error);
        throw error;
      }
    });
  }
  async getCursorServerUrlWithRetry(authority, initialUseCache = true) {
    return (0,_cursorServerUrlRetry_js__WEBPACK_IMPORTED_MODULE_2__.retryGetCursorServerUrl)({
      initialUseCache,
      getCursorServerUrl: (useCache) => this.getCursorServerUrl(authority, useCache),
      onRetry: (error, attempt, delayMs) => {
        const delayDescription = delayMs > 0 ? `retrying in ${delayMs / 1e3}s` : "retrying immediately";
        log(
          "Error getting cursor server url,",
          delayDescription,
          `attempt=${attempt}`,
          error
        );
      }
    });
  }
  async resolve(authority, context, progress) {
    return withTimer("resolve", async () => {
      log("resolve", authority, `resolveAttempt=${context.resolveAttempt}`);
      progress?.report({ phase: "init" });
      const indexOfPlus = authority.indexOf("+");
      const bcIdOrUrl = authority.substring(indexOfPlus + 1).trim();
      if (indexOfPlus === -1 || bcIdOrUrl.length === 0) {
        throw new Error("No bcId found in authority");
      }
      if (bcIdOrUrl.startsWith("{")) {
        let url2;
        try {
          url2 = JSON.parse(bcIdOrUrl);
        } catch (e) {
          throw new Error("Invalid url found in authority");
        }
        log("resolved url (inline)", url2.host, url2.port);
        const makeConnection2 = async () => {
          try {
            return await createManagedTcpConnection(url2);
          } catch (error) {
            throw toTemporarilyNotAvailableIfCursorSocketTransient(error);
          }
        };
        const tunnelFactory2 = vscode__WEBPACK_IMPORTED_MODULE_0__.cursor.createSocketConsumerTunnelFactory({
          makeConnection: makeConnection2,
          connectionToken: url2.connectionToken
        });
        return this.createManagedResolvedAuthority(
          makeConnection2,
          url2.connectionToken,
          tunnelFactory2
        );
      }
      const bcId = bcIdOrUrl;
      progress?.report({ phase: "auth" });
      const commit = getProductCommit();
      const { connectionToken } = await this.connectionTokenProvider.getOrCreateConnectionToken(bcId, commit);
      progress?.report({ phase: "get-url" });
      const useCachedUrl = !this.staleCursorServerUrlBcIds.delete(bcId);
      let url;
      try {
        url = await this.getCursorServerUrlWithRetry(authority, useCachedUrl);
      } catch (error) {
        throw toNotAvailableIfPodGone(error);
      }
      log("resolved url", url.host, url.port, `useCachedUrl=${useCachedUrl}`);
      const markCursorServerUrlSuspect = () => {
        if (!this.staleCursorServerUrlBcIds.has(bcId)) {
          log("marking cursor server url suspect, next resolve fetches fresh", bcId);
          this.staleCursorServerUrlBcIds.add(bcId);
        }
      };
      const makeConnection = async () => {
        progress?.report({ phase: "socket" });
        try {
          return await createManagedTcpConnection(url, markCursorServerUrlSuspect);
        } catch (error) {
          markCursorServerUrlSuspect();
          throw toTemporarilyNotAvailableIfCursorSocketTransient(error);
        }
      };
      const tunnelFactory = vscode__WEBPACK_IMPORTED_MODULE_0__.cursor.createSocketConsumerTunnelFactory({
        makeConnection,
        connectionToken
      });
      return this.createManagedResolvedAuthority(
        makeConnection,
        connectionToken,
        tunnelFactory
      );
    });
  }
}
const SUSPECT_QUICK_CLOSE_WINDOW_MS = 1e4;
async function createManagedTcpConnection(url, onSuspectClose) {
  const useTls = url.port === 443;
  const tcpConn = await vscode__WEBPACK_IMPORTED_MODULE_0__.cursor.createTcpConnection({
    host: url.host,
    port: url.port,
    tls: useTls ? { rejectUnauthorized: true, servername: url.host } : void 0
  });
  log("tcp connection established", `${url.host}:${url.port}`, useTls ? "(tls)" : "(plain)");
  const dataEmitter = new vscode__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  const closeEmitter = new vscode__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  const endEmitter = new vscode__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  const establishedAtMs = Date.now();
  let endedLocally = false;
  tcpConn.onDidReceiveData((data) => dataEmitter.fire(data));
  tcpConn.onDidClose((err) => {
    const quickClose = Date.now() - establishedAtMs < SUSPECT_QUICK_CLOSE_WINDOW_MS;
    if (!endedLocally && (err !== void 0 || quickClose)) {
      onSuspectClose?.();
    }
    closeEmitter.fire(err);
    endEmitter.fire();
  });
  return {
    onDidReceiveMessage: dataEmitter.event,
    onDidClose: closeEmitter.event,
    onDidEnd: endEmitter.event,
    send: (data) => {
      tcpConn.send(data);
    },
    end: () => {
      endedLocally = true;
      tcpConn.close();
    },
    connectionOptions: {
      headers: [
        `Host: ${url.host}:${url.port}`,
        ...url.headers.map((h) => `${h.key}: ${h.value}`)
      ],
      doNotIncludeWsLocalhostPrefix: true
    }
  };
}
async function withTimer(name, fn) {
  const start = performance.now();
  try {
    return await fn();
  } finally {
    const end = performance.now();
    reportMetric(name, end - start);
  }
}


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CURSOR_SOCKET_CLOSE_ERROR_CODE_TRANSIENT: () => (/* binding */ CURSOR_SOCKET_CLOSE_ERROR_CODE_TRANSIENT)
/* harmony export */ });
const CURSOR_SOCKET_CLOSE_ERROR_CODE_TRANSIENT = "CursorSocketTransient";


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCursorServerUrlRetryDelayMs: () => (/* binding */ getCursorServerUrlRetryDelayMs),
/* harmony export */   isPodGoneCursorServerUrlError: () => (/* binding */ isPodGoneCursorServerUrlError),
/* harmony export */   retryGetCursorServerUrl: () => (/* binding */ retryGetCursorServerUrl),
/* harmony export */   shouldRetryCursorServerUrlError: () => (/* binding */ shouldRetryCursorServerUrlError)
/* harmony export */ });
/* harmony import */ var _connectrpc_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var _connectrpc_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
/* harmony import */ var proto_aiserver_v1_utils_pb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);


const CURSOR_SERVER_URL_RETRY_DELAYS_MS = [
  0,
  5e3,
  5e3,
  1e4,
  1e4,
  1e4,
  3e4,
  3e4,
  6e4
];
const NO_VM_CONNECTION_INFO_RETRY_WINDOW_MS = 3e4;
const TRANSIENT_RETRY_WINDOW_MS = 3 * 6e4;
const NO_POD_INFO_RETRY_WINDOW_MS = 1e4;
const CURSOR_SERVER_URL_REASON_INFO_KEY = "cursorServerUrlReason";
function getCursorServerUrlRetryDelayMs(attempt) {
  return CURSOR_SERVER_URL_RETRY_DELAYS_MS[Math.min(attempt, CURSOR_SERVER_URL_RETRY_DELAYS_MS.length - 1)];
}
function shouldRetryCursorServerUrlError(error, elapsedMs = 0) {
  const retryWindowMs = getCursorServerUrlRetryWindowMs(error);
  return retryWindowMs !== void 0 && elapsedMs < retryWindowMs;
}
function getCursorServerUrlRetryWindowMs(error) {
  const structuredReason = getStructuredCursorServerUrlReason(error);
  if (structuredReason !== void 0) {
    return getStructuredCursorServerUrlRetryWindowMs(structuredReason);
  }
  const code = getConnectErrorCode(error);
  if (code === _connectrpc_connect__WEBPACK_IMPORTED_MODULE_1__.Code.DeadlineExceeded || code === _connectrpc_connect__WEBPACK_IMPORTED_MODULE_1__.Code.Unavailable) {
    return TRANSIENT_RETRY_WINDOW_MS;
  }
  return void 0;
}
function getStructuredCursorServerUrlReason(error) {
  const errorDetail = error instanceof _connectrpc_connect__WEBPACK_IMPORTED_MODULE_2__.ConnectError ? error.findDetails(proto_aiserver_v1_utils_pb_js__WEBPACK_IMPORTED_MODULE_0__.ErrorDetails).at(0) : void 0;
  const reasonFromDetails = errorDetail?.details?.additionalInfo?.[CURSOR_SERVER_URL_REASON_INFO_KEY];
  if (reasonFromDetails !== void 0 && reasonFromDetails !== "") {
    return reasonFromDetails;
  }
  const message = error instanceof Error ? error.message : void 0;
  const match = message ? /cursorServerUrlReason=([A-Z_]+)/.exec(message) : null;
  return match?.[1];
}
function getStructuredCursorServerUrlRetryWindowMs(reason) {
  switch (reason) {
    case "NO_POD_INFO_YET":
      return NO_POD_INFO_RETRY_WINDOW_MS;
    case "NO_VM_CONNECTION_INFO_YET":
      return NO_VM_CONNECTION_INFO_RETRY_WINDOW_MS;
    case "EXEC_DAEMON_NOT_READY":
    case "POD_REPLACEMENT_IN_PROGRESS":
      return TRANSIENT_RETRY_WINDOW_MS;
    default:
      return void 0;
  }
}
function isPodGoneCursorServerUrlError(error) {
  return getConnectErrorCode(error) === _connectrpc_connect__WEBPACK_IMPORTED_MODULE_1__.Code.NotFound;
}
async function retryGetCursorServerUrl({
  getCursorServerUrl,
  initialUseCache,
  sleep = defaultSleep,
  onRetry
}) {
  let useCache = initialUseCache;
  const startedAtMs = Date.now();
  for (let attempt = 0; ; attempt++) {
    try {
      return await getCursorServerUrl(useCache);
    } catch (error) {
      const elapsedMs = Date.now() - startedAtMs;
      if (!shouldRetryCursorServerUrlError(error, elapsedMs)) {
        throw error;
      }
      const retryWindowMs = getCursorServerUrlRetryWindowMs(error);
      const remainingRetryWindowMs = retryWindowMs !== void 0 ? retryWindowMs - elapsedMs : 0;
      const delayMs = Math.min(
        getCursorServerUrlRetryDelayMs(attempt),
        Math.max(0, remainingRetryWindowMs)
      );
      onRetry?.(error, attempt + 1, delayMs);
      if (delayMs > 0) {
        await sleep(delayMs);
      }
      useCache = false;
    }
  }
}
async function defaultSleep(ms) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}
function getConnectErrorCode(error) {
  if (error instanceof _connectrpc_connect__WEBPACK_IMPORTED_MODULE_2__.ConnectError) {
    return error.code;
  }
  if (typeof error === "object" && error !== null && "code" in error) {
    const code = error.code;
    if (typeof code === "number") {
      return connectCodeFromNumber(code);
    }
  }
  if (!(error instanceof Error)) {
    return void 0;
  }
  const messageMatch = /^\[([a-z_]+)\](?:\s|$)/.exec(error.message);
  if (messageMatch) {
    return connectCodeFromName(messageMatch[1]);
  }
  const stackMatch = typeof error.stack === "string" ? /(?:^|\n)\s*ConnectError:\s*\[([a-z_]+)\](?:\s|$)/.exec(error.stack) : null;
  if (stackMatch) {
    return connectCodeFromName(stackMatch[1]);
  }
  return void 0;
}
function connectCodeFromNumber(code) {
  switch (code) {
    case _connectrpc_connect__WEBPACK_IMPORTED_MODULE_1__.Code.InvalidArgument:
      return _connectrpc_connect__WEBPACK_IMPORTED_MODULE_1__.Code.InvalidArgument;
    case _connectrpc_connect__WEBPACK_IMPORTED_MODULE_1__.Code.DeadlineExceeded:
      return _connectrpc_connect__WEBPACK_IMPORTED_MODULE_1__.Code.DeadlineExceeded;
    case _connectrpc_connect__WEBPACK_IMPORTED_MODULE_1__.Code.Unavailable:
      return _connectrpc_connect__WEBPACK_IMPORTED_MODULE_1__.Code.Unavailable;
    case _connectrpc_connect__WEBPACK_IMPORTED_MODULE_1__.Code.NotFound:
      return _connectrpc_connect__WEBPACK_IMPORTED_MODULE_1__.Code.NotFound;
    default:
      return void 0;
  }
}
function connectCodeFromName(name) {
  switch (name) {
    case "invalid_argument":
      return _connectrpc_connect__WEBPACK_IMPORTED_MODULE_1__.Code.InvalidArgument;
    case "deadline_exceeded":
      return _connectrpc_connect__WEBPACK_IMPORTED_MODULE_1__.Code.DeadlineExceeded;
    case "unavailable":
      return _connectrpc_connect__WEBPACK_IMPORTED_MODULE_1__.Code.Unavailable;
    case "not_found":
      return _connectrpc_connect__WEBPACK_IMPORTED_MODULE_1__.Code.NotFound;
    default:
      return void 0;
  }
}


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AzureState: () => (/* binding */ AzureState),
/* harmony export */   BM25Chunk: () => (/* binding */ BM25Chunk),
/* harmony export */   BedrockState: () => (/* binding */ BedrockState),
/* harmony export */   ChatExternalLink: () => (/* binding */ ChatExternalLink),
/* harmony export */   ChatQuote: () => (/* binding */ ChatQuote),
/* harmony export */   ClientAction: () => (/* binding */ ClientAction),
/* harmony export */   CmdKDebugInfo: () => (/* binding */ CmdKDebugInfo),
/* harmony export */   CmdKDebugInfo_CppFileDiffHistory: () => (/* binding */ CmdKDebugInfo_CppFileDiffHistory),
/* harmony export */   CmdKDebugInfo_OpenEditor: () => (/* binding */ CmdKDebugInfo_OpenEditor),
/* harmony export */   CmdKDebugInfo_PastThought: () => (/* binding */ CmdKDebugInfo_PastThought),
/* harmony export */   CmdKDebugInfo_UnsavedFiles: () => (/* binding */ CmdKDebugInfo_UnsavedFiles),
/* harmony export */   CmdKExternalLink: () => (/* binding */ CmdKExternalLink),
/* harmony export */   CodeBlock: () => (/* binding */ CodeBlock),
/* harmony export */   CodeBlock_Signatures: () => (/* binding */ CodeBlock_Signatures),
/* harmony export */   CodeChunk: () => (/* binding */ CodeChunk),
/* harmony export */   CodeChunk_Intent: () => (/* binding */ CodeChunk_Intent),
/* harmony export */   CodeChunk_SummarizationStrategy: () => (/* binding */ CodeChunk_SummarizationStrategy),
/* harmony export */   CommitDiffString: () => (/* binding */ CommitDiffString),
/* harmony export */   CommitNote: () => (/* binding */ CommitNote),
/* harmony export */   CommitNoteWithEmbeddings: () => (/* binding */ CommitNoteWithEmbeddings),
/* harmony export */   ComposerExternalLink: () => (/* binding */ ComposerExternalLink),
/* harmony export */   ComputeLinesDiffOriginalAndModified: () => (/* binding */ ComputeLinesDiffOriginalAndModified),
/* harmony export */   ConfigureSpendLimitAction: () => (/* binding */ ConfigureSpendLimitAction),
/* harmony export */   CrossExtHostHeader: () => (/* binding */ CrossExtHostHeader),
/* harmony export */   CrossExtHostHeaders: () => (/* binding */ CrossExtHostHeaders),
/* harmony export */   CurrentFileInfo: () => (/* binding */ CurrentFileInfo),
/* harmony export */   CurrentFileInfo_NotebookCell: () => (/* binding */ CurrentFileInfo_NotebookCell),
/* harmony export */   CursorPosition: () => (/* binding */ CursorPosition),
/* harmony export */   CursorRange: () => (/* binding */ CursorRange),
/* harmony export */   CursorRule: () => (/* binding */ CursorRule),
/* harmony export */   CustomErrorDetails: () => (/* binding */ CustomErrorDetails),
/* harmony export */   DashboardAction: () => (/* binding */ DashboardAction),
/* harmony export */   DataframeInfo: () => (/* binding */ DataframeInfo),
/* harmony export */   DataframeInfo_Column: () => (/* binding */ DataframeInfo_Column),
/* harmony export */   DetailedLine: () => (/* binding */ DetailedLine),
/* harmony export */   Diagnostic: () => (/* binding */ Diagnostic),
/* harmony export */   Diagnostic_DiagnosticSeverity: () => (/* binding */ Diagnostic_DiagnosticSeverity),
/* harmony export */   Diagnostic_RelatedInformation: () => (/* binding */ Diagnostic_RelatedInformation),
/* harmony export */   DocumentSymbol: () => (/* binding */ DocumentSymbol),
/* harmony export */   DocumentSymbolWithText: () => (/* binding */ DocumentSymbolWithText),
/* harmony export */   DocumentSymbol_Range: () => (/* binding */ DocumentSymbol_Range),
/* harmony export */   DocumentSymbol_SymbolKind: () => (/* binding */ DocumentSymbol_SymbolKind),
/* harmony export */   EmbeddingModel: () => (/* binding */ EmbeddingModel),
/* harmony export */   EnvironmentInfo: () => (/* binding */ EnvironmentInfo),
/* harmony export */   ErrorAnalyticsMetadata: () => (/* binding */ ErrorAnalyticsMetadata),
/* harmony export */   ErrorButton: () => (/* binding */ ErrorButton),
/* harmony export */   ErrorDetails: () => (/* binding */ ErrorDetails),
/* harmony export */   ErrorDetails_Error: () => (/* binding */ ErrorDetails_Error),
/* harmony export */   ExplicitContext: () => (/* binding */ ExplicitContext),
/* harmony export */   FeatureType: () => (/* binding */ FeatureType),
/* harmony export */   File: () => (/* binding */ File),
/* harmony export */   FileDiff: () => (/* binding */ FileDiff),
/* harmony export */   FileDiff_Chunk: () => (/* binding */ FileDiff_Chunk),
/* harmony export */   FileGit: () => (/* binding */ FileGit),
/* harmony export */   FullCommitNotes: () => (/* binding */ FullCommitNotes),
/* harmony export */   GetDiffRequest: () => (/* binding */ GetDiffRequest),
/* harmony export */   GetDiffRequest_OutputFormat: () => (/* binding */ GetDiffRequest_OutputFormat),
/* harmony export */   GetDiffResponse: () => (/* binding */ GetDiffResponse),
/* harmony export */   GetDiffResponse_SubmoduleDiff: () => (/* binding */ GetDiffResponse_SubmoduleDiff),
/* harmony export */   GitCommit: () => (/* binding */ GitCommit),
/* harmony export */   GitDiff: () => (/* binding */ GitDiff),
/* harmony export */   GitDiff_DiffType: () => (/* binding */ GitDiff_DiffType),
/* harmony export */   HoverDetails: () => (/* binding */ HoverDetails),
/* harmony export */   ImageProto: () => (/* binding */ ImageProto),
/* harmony export */   ImageProto_Dimension: () => (/* binding */ ImageProto_Dimension),
/* harmony export */   LineRange: () => (/* binding */ LineRange),
/* harmony export */   Lint: () => (/* binding */ Lint),
/* harmony export */   LintSeverity: () => (/* binding */ LintSeverity),
/* harmony export */   LinterError: () => (/* binding */ LinterError),
/* harmony export */   LinterErrors: () => (/* binding */ LinterErrors),
/* harmony export */   LinterErrorsWithoutFileContents: () => (/* binding */ LinterErrorsWithoutFileContents),
/* harmony export */   MCPInstructions: () => (/* binding */ MCPInstructions),
/* harmony export */   ModelDetails: () => (/* binding */ ModelDetails),
/* harmony export */   ModelInfo: () => (/* binding */ ModelInfo),
/* harmony export */   PlanChoice: () => (/* binding */ PlanChoice),
/* harmony export */   PureMessage: () => (/* binding */ PureMessage),
/* harmony export */   PureMessage_MessageType: () => (/* binding */ PureMessage_MessageType),
/* harmony export */   RCPCallFrame: () => (/* binding */ RCPCallFrame),
/* harmony export */   RCPChatMessage: () => (/* binding */ RCPChatMessage),
/* harmony export */   RCPLogEntry: () => (/* binding */ RCPLogEntry),
/* harmony export */   RCPMessage: () => (/* binding */ RCPMessage),
/* harmony export */   RCPStackTrace: () => (/* binding */ RCPStackTrace),
/* harmony export */   RCPUIElementPicked: () => (/* binding */ RCPUIElementPicked),
/* harmony export */   ReloadWindowAction: () => (/* binding */ ReloadWindowAction),
/* harmony export */   SelectionWithOrientation: () => (/* binding */ SelectionWithOrientation),
/* harmony export */   SimpleFileChunk: () => (/* binding */ SimpleFileChunk),
/* harmony export */   SimpleRange: () => (/* binding */ SimpleRange),
/* harmony export */   SimpleUnaryCrossExtensionHostMessage: () => (/* binding */ SimpleUnaryCrossExtensionHostMessage),
/* harmony export */   SimplestRange: () => (/* binding */ SimplestRange),
/* harmony export */   SwitchModelAction: () => (/* binding */ SwitchModelAction),
/* harmony export */   UpgradeAction: () => (/* binding */ UpgradeAction),
/* harmony export */   UpgradeChoice: () => (/* binding */ UpgradeChoice),
/* harmony export */   UriComponents: () => (/* binding */ UriComponents),
/* harmony export */   UrlAction: () => (/* binding */ UrlAction),
/* harmony export */   VscodeCPUProperties: () => (/* binding */ VscodeCPUProperties),
/* harmony export */   VscodeOSProperties: () => (/* binding */ VscodeOSProperties),
/* harmony export */   VscodeOSStatistics: () => (/* binding */ VscodeOSStatistics)
/* harmony export */ });
/* harmony import */ var _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);

var LintSeverity = /* @__PURE__ */ ((LintSeverity2) => {
  LintSeverity2[LintSeverity2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  LintSeverity2[LintSeverity2["ERROR"] = 1] = "ERROR";
  LintSeverity2[LintSeverity2["WARNING"] = 2] = "WARNING";
  LintSeverity2[LintSeverity2["INFO"] = 3] = "INFO";
  LintSeverity2[LintSeverity2["HINT"] = 4] = "HINT";
  LintSeverity2[LintSeverity2["AI"] = 5] = "AI";
  return LintSeverity2;
})(LintSeverity || {});
_bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.setEnumType(LintSeverity, "aiserver.v1.LintSeverity", [
  { no: 0, name: "LINT_SEVERITY_UNSPECIFIED" },
  { no: 1, name: "LINT_SEVERITY_ERROR" },
  { no: 2, name: "LINT_SEVERITY_WARNING" },
  { no: 3, name: "LINT_SEVERITY_INFO" },
  { no: 4, name: "LINT_SEVERITY_HINT" },
  { no: 5, name: "LINT_SEVERITY_AI" }
]);
var FeatureType = /* @__PURE__ */ ((FeatureType2) => {
  FeatureType2[FeatureType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  FeatureType2[FeatureType2["EDIT"] = 1] = "EDIT";
  FeatureType2[FeatureType2["GENERATE"] = 2] = "GENERATE";
  FeatureType2[FeatureType2["INLINE_LONG_COMPLETION"] = 3] = "INLINE_LONG_COMPLETION";
  return FeatureType2;
})(FeatureType || {});
_bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.setEnumType(FeatureType, "aiserver.v1.FeatureType", [
  { no: 0, name: "FEATURE_TYPE_UNSPECIFIED" },
  { no: 1, name: "FEATURE_TYPE_EDIT" },
  { no: 2, name: "FEATURE_TYPE_GENERATE" },
  { no: 3, name: "FEATURE_TYPE_INLINE_LONG_COMPLETION" }
]);
var EmbeddingModel = /* @__PURE__ */ ((EmbeddingModel2) => {
  EmbeddingModel2[EmbeddingModel2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  EmbeddingModel2[EmbeddingModel2["VOYAGE_CODE_2"] = 1] = "VOYAGE_CODE_2";
  EmbeddingModel2[EmbeddingModel2["TEXT_EMBEDDINGS_LARGE_3"] = 2] = "TEXT_EMBEDDINGS_LARGE_3";
  EmbeddingModel2[EmbeddingModel2["QWEN_1_5B_CUSTOM"] = 3] = "QWEN_1_5B_CUSTOM";
  EmbeddingModel2[EmbeddingModel2["MOCK_CHUNKER_ERROR"] = 4] = "MOCK_CHUNKER_ERROR";
  EmbeddingModel2[EmbeddingModel2["QWEN_1_5B_0618_CUSTOM"] = 5] = "QWEN_1_5B_0618_CUSTOM";
  EmbeddingModel2[EmbeddingModel2["QWEN_1_5B_0618_FP8_MM_CUSTOM"] = 6] = "QWEN_1_5B_0618_FP8_MM_CUSTOM";
  return EmbeddingModel2;
})(EmbeddingModel || {});
_bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.setEnumType(EmbeddingModel, "aiserver.v1.EmbeddingModel", [
  { no: 0, name: "EMBEDDING_MODEL_UNSPECIFIED" },
  { no: 1, name: "EMBEDDING_MODEL_VOYAGE_CODE_2" },
  { no: 2, name: "EMBEDDING_MODEL_TEXT_EMBEDDINGS_LARGE_3" },
  { no: 3, name: "EMBEDDING_MODEL_QWEN_1_5B_CUSTOM" },
  { no: 4, name: "EMBEDDING_MODEL_MOCK_CHUNKER_ERROR" },
  { no: 5, name: "EMBEDDING_MODEL_QWEN_1_5B_0618_CUSTOM" },
  { no: 6, name: "EMBEDDING_MODEL_QWEN_1_5B_0618_FP8_MM_CUSTOM" }
]);
const _CursorPosition = class _CursorPosition extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * the line number is 0-indexed
     *
     * @generated from field: int32 line = 1;
     */
    this.line = 0;
    /**
     * the column number is 0-indexed
     *
     * @generated from field: int32 column = 2;
     */
    this.column = 0;
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _CursorPosition().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _CursorPosition().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _CursorPosition().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_CursorPosition, a, b);
  }
};
_CursorPosition.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_CursorPosition.typeName = "aiserver.v1.CursorPosition";
_CursorPosition.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "line",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "column",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
let CursorPosition = _CursorPosition;
const _VscodeOSStatistics = class _VscodeOSStatistics extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: double totalmem = 1;
     */
    this.totalmem = 0;
    /**
     * @generated from field: double freemem = 2;
     */
    this.freemem = 0;
    /**
     * @generated from field: repeated double loadavg = 3;
     */
    this.loadavg = [];
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _VscodeOSStatistics().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _VscodeOSStatistics().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _VscodeOSStatistics().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_VscodeOSStatistics, a, b);
  }
};
_VscodeOSStatistics.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_VscodeOSStatistics.typeName = "aiserver.v1.VscodeOSStatistics";
_VscodeOSStatistics.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "totalmem",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  },
  {
    no: 2,
    name: "freemem",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  },
  { no: 3, name: "loadavg", kind: "scalar", T: 1, repeated: true }
]);
let VscodeOSStatistics = _VscodeOSStatistics;
const _VscodeOSProperties = class _VscodeOSProperties extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string type = 1;
     */
    this.type = "";
    /**
     * @generated from field: string release = 2;
     */
    this.release = "";
    /**
     * @generated from field: string arch = 3;
     */
    this.arch = "";
    /**
     * @generated from field: string platform = 4;
     */
    this.platform = "";
    /**
     * @generated from field: repeated aiserver.v1.VscodeCPUProperties cpus = 5;
     */
    this.cpus = [];
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _VscodeOSProperties().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _VscodeOSProperties().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _VscodeOSProperties().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_VscodeOSProperties, a, b);
  }
};
_VscodeOSProperties.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_VscodeOSProperties.typeName = "aiserver.v1.VscodeOSProperties";
_VscodeOSProperties.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "type",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "release",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "arch",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "platform",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "cpus", kind: "message", T: VscodeCPUProperties, repeated: true }
]);
let VscodeOSProperties = _VscodeOSProperties;
const _VscodeCPUProperties = class _VscodeCPUProperties extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string model = 1;
     */
    this.model = "";
    /**
     * @generated from field: double speed = 2;
     */
    this.speed = 0;
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _VscodeCPUProperties().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _VscodeCPUProperties().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _VscodeCPUProperties().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_VscodeCPUProperties, a, b);
  }
};
_VscodeCPUProperties.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_VscodeCPUProperties.typeName = "aiserver.v1.VscodeCPUProperties";
_VscodeCPUProperties.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "model",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "speed",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  }
]);
let VscodeCPUProperties = _VscodeCPUProperties;
const _EnvironmentInfo = class _EnvironmentInfo extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: repeated string workspace_uris = 6;
     */
    this.workspaceUris = [];
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _EnvironmentInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _EnvironmentInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _EnvironmentInfo().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_EnvironmentInfo, a, b);
  }
};
_EnvironmentInfo.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_EnvironmentInfo.typeName = "aiserver.v1.EnvironmentInfo";
_EnvironmentInfo.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  { no: 1, name: "exthost_platform", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "exthost_arch", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "exthost_release", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "exthost_shell", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "local_timestamp", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "workspace_uris", kind: "scalar", T: 9, repeated: true },
  { no: 7, name: "cursor_version", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "is_remote", kind: "scalar", T: 8, opt: true },
  { no: 9, name: "local_os_type", kind: "scalar", T: 9, opt: true },
  { no: 10, name: "home_directory", kind: "scalar", T: 9, opt: true },
  { no: 11, name: "local_timezone", kind: "scalar", T: 9, opt: true }
]);
let EnvironmentInfo = _EnvironmentInfo;
const _SelectionWithOrientation = class _SelectionWithOrientation extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * The line number on which the selection has started.
     *
     * @generated from field: int32 selection_start_line_number = 1;
     */
    this.selectionStartLineNumber = 0;
    /**
     * The column on `selection_start_line_number` where the selection has started.
     *
     * @generated from field: int32 selection_start_column = 2;
     */
    this.selectionStartColumn = 0;
    /**
     * The line number on which the selection has ended.
     *
     * @generated from field: int32 position_line_number = 3;
     */
    this.positionLineNumber = 0;
    /**
     * The column on `position_line_number` where the selection has ended.
     *
     * @generated from field: int32 position_column = 4;
     */
    this.positionColumn = 0;
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _SelectionWithOrientation().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _SelectionWithOrientation().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _SelectionWithOrientation().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_SelectionWithOrientation, a, b);
  }
};
_SelectionWithOrientation.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_SelectionWithOrientation.typeName = "aiserver.v1.SelectionWithOrientation";
_SelectionWithOrientation.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "selection_start_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "selection_start_column",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "position_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "position_column",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
let SelectionWithOrientation = _SelectionWithOrientation;
const _GetDiffRequest = class _GetDiffRequest extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * if empty, defaults to workspace root
     *
     * @generated from field: string cwd = 1;
     */
    this.cwd = "";
    /**
     * if empty, defaults to empty
     *
     * @generated from field: string ref = 2;
     */
    this.ref = "";
    /**
     * if empty, defaults to the default branch
     *
     * @generated from field: string base_ref = 3;
     */
    this.baseRef = "";
    /**
     * if true, we will use the merge base of ref and base_ref
     *
     * @generated from field: bool merge_base = 4;
     */
    this.mergeBase = false;
    /**
     * if empty, defaults to all paths
     *
     * @generated from field: repeated string target_paths = 5;
     */
    this.targetPaths = [];
    /**
     * max number of untracked files to include. defaults to not including untracked files at all
     *
     * @generated from field: int32 max_untracked_files = 7;
     */
    this.maxUntrackedFiles = 0;
    /**
     * number of times to recurse into submodules! defaults to 0, which means just get the top level diff
     *
     * @generated from field: int32 submodule_recurse_depth = 9;
     */
    this.submoduleRecurseDepth = 0;
    /**
     * include space changes! (git's --ignore-space-change flag, inverted)
     *
     * @generated from field: bool include_space_changes = 10;
     */
    this.includeSpaceChanges = false;
    /**
     * DEPRECATED: Set ref and max_untracked_files explicitly instead.
     * For all local commits: ref='HEAD', max_untracked_files=0
     * For GitHub PR behavior (only pushed): ref='origin/<branch>', max_untracked_files=0
     * If true, this forces ref='HEAD' and max_untracked_files=0.
     *
     * @generated from field: bool committed_only = 11 [deprecated = true];
     * @deprecated
     */
    this.committedOnly = false;
    /**
     * If true, compute a stable git patch-id for the returned diff.
     *
     * @generated from field: bool compute_patch_id = 12;
     */
    this.computePatchId = false;
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _GetDiffRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _GetDiffRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _GetDiffRequest().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_GetDiffRequest, a, b);
  }
};
_GetDiffRequest.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_GetDiffRequest.typeName = "aiserver.v1.GetDiffRequest";
_GetDiffRequest.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "cwd",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "ref",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "base_ref",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "merge_base",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 5, name: "target_paths", kind: "scalar", T: 9, repeated: true },
  { no: 6, name: "unified_context_lines", kind: "scalar", T: 5, opt: true },
  {
    no: 7,
    name: "max_untracked_files",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 9,
    name: "submodule_recurse_depth",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 10,
    name: "include_space_changes",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 11,
    name: "committed_only",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 12,
    name: "compute_patch_id",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 13, name: "return_head_sha", kind: "scalar", T: 8, opt: true },
  { no: 8, name: "output_format", kind: "enum", T: _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(GetDiffRequest_OutputFormat), opt: true }
]);
let GetDiffRequest = _GetDiffRequest;
var GetDiffRequest_OutputFormat = /* @__PURE__ */ ((GetDiffRequest_OutputFormat2) => {
  GetDiffRequest_OutputFormat2[GetDiffRequest_OutputFormat2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  GetDiffRequest_OutputFormat2[GetDiffRequest_OutputFormat2["NAME_STATUS"] = 1] = "NAME_STATUS";
  GetDiffRequest_OutputFormat2[GetDiffRequest_OutputFormat2["NAME_STATUS_AND_NUMSTAT"] = 2] = "NAME_STATUS_AND_NUMSTAT";
  GetDiffRequest_OutputFormat2[GetDiffRequest_OutputFormat2["FILE_DIFFS"] = 3] = "FILE_DIFFS";
  GetDiffRequest_OutputFormat2[GetDiffRequest_OutputFormat2["DIFFS_WITH_BEFORE_AND_AFTER"] = 4] = "DIFFS_WITH_BEFORE_AND_AFTER";
  return GetDiffRequest_OutputFormat2;
})(GetDiffRequest_OutputFormat || {});
_bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.setEnumType(GetDiffRequest_OutputFormat, "aiserver.v1.GetDiffRequest.OutputFormat", [
  { no: 0, name: "OUTPUT_FORMAT_UNSPECIFIED" },
  { no: 1, name: "OUTPUT_FORMAT_NAME_STATUS" },
  { no: 2, name: "OUTPUT_FORMAT_NAME_STATUS_AND_NUMSTAT" },
  { no: 3, name: "OUTPUT_FORMAT_FILE_DIFFS" },
  { no: 4, name: "OUTPUT_FORMAT_DIFFS_WITH_BEFORE_AND_AFTER" }
]);
const _GetDiffResponse = class _GetDiffResponse extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: repeated aiserver.v1.GetDiffResponse.SubmoduleDiff submodule_diffs = 2;
     */
    this.submoduleDiffs = [];
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _GetDiffResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _GetDiffResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _GetDiffResponse().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_GetDiffResponse, a, b);
  }
};
_GetDiffResponse.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_GetDiffResponse.typeName = "aiserver.v1.GetDiffResponse";
_GetDiffResponse.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  { no: 1, name: "diff", kind: "message", T: GitDiff },
  { no: 2, name: "submodule_diffs", kind: "message", T: GetDiffResponse_SubmoduleDiff, repeated: true },
  { no: 3, name: "patch_id", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "head_sha", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "has_uncommitted_changes", kind: "scalar", T: 8, opt: true }
]);
let GetDiffResponse = _GetDiffResponse;
const _GetDiffResponse_SubmoduleDiff = class _GetDiffResponse_SubmoduleDiff extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string relative_path = 1;
     */
    this.relativePath = "";
    /**
     * @generated from field: bool errored = 3;
     */
    this.errored = false;
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _GetDiffResponse_SubmoduleDiff().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _GetDiffResponse_SubmoduleDiff().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _GetDiffResponse_SubmoduleDiff().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_GetDiffResponse_SubmoduleDiff, a, b);
  }
};
_GetDiffResponse_SubmoduleDiff.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_GetDiffResponse_SubmoduleDiff.typeName = "aiserver.v1.GetDiffResponse.SubmoduleDiff";
_GetDiffResponse_SubmoduleDiff.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "diff", kind: "message", T: GitDiff },
  {
    no: 3,
    name: "errored",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
let GetDiffResponse_SubmoduleDiff = _GetDiffResponse_SubmoduleDiff;
const _SimplestRange = class _SimplestRange extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: int32 start_line = 1;
     */
    this.startLine = 0;
    /**
     * @generated from field: int32 end_line_inclusive = 2;
     */
    this.endLineInclusive = 0;
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _SimplestRange().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _SimplestRange().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _SimplestRange().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_SimplestRange, a, b);
  }
};
_SimplestRange.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_SimplestRange.typeName = "aiserver.v1.SimplestRange";
_SimplestRange.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "start_line",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "end_line_inclusive",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
let SimplestRange = _SimplestRange;
const _ComputeLinesDiffOriginalAndModified = class _ComputeLinesDiffOriginalAndModified extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: repeated string original = 1;
     */
    this.original = [];
    /**
     * @generated from field: repeated string modified = 2;
     */
    this.modified = [];
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _ComputeLinesDiffOriginalAndModified().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _ComputeLinesDiffOriginalAndModified().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _ComputeLinesDiffOriginalAndModified().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_ComputeLinesDiffOriginalAndModified, a, b);
  }
};
_ComputeLinesDiffOriginalAndModified.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_ComputeLinesDiffOriginalAndModified.typeName = "aiserver.v1.ComputeLinesDiffOriginalAndModified";
_ComputeLinesDiffOriginalAndModified.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  { no: 1, name: "original", kind: "scalar", T: 9, repeated: true },
  { no: 2, name: "modified", kind: "scalar", T: 9, repeated: true }
]);
let ComputeLinesDiffOriginalAndModified = _ComputeLinesDiffOriginalAndModified;
const _GitDiff = class _GitDiff extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: repeated aiserver.v1.FileDiff diffs = 1;
     */
    this.diffs = [];
    /**
     * @generated from field: aiserver.v1.GitDiff.DiffType diff_type = 2;
     */
    this.diffType = 0 /* UNSPECIFIED */;
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _GitDiff().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _GitDiff().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _GitDiff().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_GitDiff, a, b);
  }
};
_GitDiff.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_GitDiff.typeName = "aiserver.v1.GitDiff";
_GitDiff.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  { no: 1, name: "diffs", kind: "message", T: FileDiff, repeated: true },
  { no: 2, name: "diff_type", kind: "enum", T: _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(GitDiff_DiffType) }
]);
let GitDiff = _GitDiff;
var GitDiff_DiffType = /* @__PURE__ */ ((GitDiff_DiffType2) => {
  GitDiff_DiffType2[GitDiff_DiffType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  GitDiff_DiffType2[GitDiff_DiffType2["DIFF_TO_HEAD"] = 1] = "DIFF_TO_HEAD";
  GitDiff_DiffType2[GitDiff_DiffType2["DIFF_FROM_BRANCH_TO_MAIN"] = 2] = "DIFF_FROM_BRANCH_TO_MAIN";
  return GitDiff_DiffType2;
})(GitDiff_DiffType || {});
_bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.setEnumType(GitDiff_DiffType, "aiserver.v1.GitDiff.DiffType", [
  { no: 0, name: "DIFF_TYPE_UNSPECIFIED" },
  { no: 1, name: "DIFF_TYPE_DIFF_TO_HEAD" },
  { no: 2, name: "DIFF_TYPE_DIFF_FROM_BRANCH_TO_MAIN" }
]);
const _FileDiff = class _FileDiff extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: int32 added = 4;
     */
    this.added = 0;
    /**
     * @generated from field: int32 removed = 5;
     */
    this.removed = 0;
    /**
     * @generated from field: string from = 1;
     */
    this.from = "";
    /**
     * @generated from field: string to = 2;
     */
    this.to = "";
    /**
     * @generated from field: repeated aiserver.v1.FileDiff.Chunk chunks = 3;
     */
    this.chunks = [];
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _FileDiff().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _FileDiff().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _FileDiff().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_FileDiff, a, b);
  }
};
_FileDiff.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_FileDiff.typeName = "aiserver.v1.FileDiff";
_FileDiff.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 4,
    name: "added",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 5,
    name: "removed",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 1,
    name: "from",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "to",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "chunks", kind: "message", T: FileDiff_Chunk, repeated: true },
  { no: 6, name: "before_file_contents", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "after_file_contents", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "is_generated", kind: "scalar", T: 8, opt: true }
]);
let FileDiff = _FileDiff;
const _FileDiff_Chunk = class _FileDiff_Chunk extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string content = 1;
     */
    this.content = "";
    /**
     * @generated from field: repeated string lines = 2;
     */
    this.lines = [];
    /**
     * @generated from field: int32 old_start = 3;
     */
    this.oldStart = 0;
    /**
     * @generated from field: int32 old_lines = 4;
     */
    this.oldLines = 0;
    /**
     * @generated from field: int32 new_start = 5;
     */
    this.newStart = 0;
    /**
     * @generated from field: int32 new_lines = 6;
     */
    this.newLines = 0;
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _FileDiff_Chunk().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _FileDiff_Chunk().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _FileDiff_Chunk().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_FileDiff_Chunk, a, b);
  }
};
_FileDiff_Chunk.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_FileDiff_Chunk.typeName = "aiserver.v1.FileDiff.Chunk";
_FileDiff_Chunk.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "lines", kind: "scalar", T: 9, repeated: true },
  {
    no: 3,
    name: "old_start",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "old_lines",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 5,
    name: "new_start",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 6,
    name: "new_lines",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
let FileDiff_Chunk = _FileDiff_Chunk;
const _SimpleRange = class _SimpleRange extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * 1-indexed
     *
     * @generated from field: int32 start_line_number = 1;
     */
    this.startLineNumber = 0;
    /**
     * 1-indexed
     *
     * @generated from field: int32 start_column = 2;
     */
    this.startColumn = 0;
    /**
     * 1-indexed
     *
     * @generated from field: int32 end_line_number_inclusive = 3;
     */
    this.endLineNumberInclusive = 0;
    /**
     * 1-indexed
     *
     * @generated from field: int32 end_column = 4;
     */
    this.endColumn = 0;
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _SimpleRange().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _SimpleRange().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _SimpleRange().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_SimpleRange, a, b);
  }
};
_SimpleRange.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_SimpleRange.typeName = "aiserver.v1.SimpleRange";
_SimpleRange.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "start_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "start_column",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "end_line_number_inclusive",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "end_column",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
let SimpleRange = _SimpleRange;
const _SimpleFileChunk = class _SimpleFileChunk extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string relative_workspace_path = 1;
     */
    this.relativeWorkspacePath = "";
    /**
     * verification
     *
     * @generated from field: string chunk_hash = 3;
     */
    this.chunkHash = "";
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _SimpleFileChunk().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _SimpleFileChunk().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _SimpleFileChunk().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_SimpleFileChunk, a, b);
  }
};
_SimpleFileChunk.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_SimpleFileChunk.typeName = "aiserver.v1.SimpleFileChunk";
_SimpleFileChunk.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "range", kind: "message", T: SimplestRange },
  {
    no: 3,
    name: "chunk_hash",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
let SimpleFileChunk = _SimpleFileChunk;
const _CmdKDebugInfo = class _CmdKDebugInfo extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * we only support one remote URL for now. mostly internal
     *
     * @generated from field: string remote_url = 1;
     */
    this.remoteUrl = "";
    /**
     * @generated from field: string commit_id = 2;
     */
    this.commitId = "";
    /**
     * @generated from field: string git_patch = 3;
     */
    this.gitPatch = "";
    /**
     * @generated from field: repeated aiserver.v1.CmdKDebugInfo.UnsavedFiles unsaved_files = 4;
     */
    this.unsavedFiles = [];
    /**
     * @generated from field: double unix_timestamp_ms = 5;
     */
    this.unixTimestampMs = 0;
    /**
     * @generated from field: repeated aiserver.v1.CmdKDebugInfo.OpenEditor open_editors = 6;
     */
    this.openEditors = [];
    /**
     * also the diff history, though that is a little bit complicated
     *
     * @generated from field: repeated aiserver.v1.CmdKDebugInfo.CppFileDiffHistory file_diff_histories = 7;
     */
    this.fileDiffHistories = [];
    /**
     * @generated from field: string branch_name = 8;
     */
    this.branchName = "";
    /**
     * @generated from field: string branch_notes = 9;
     */
    this.branchNotes = "";
    /**
     * @generated from field: string branch_notes_rich = 12;
     */
    this.branchNotesRich = "";
    /**
     * @generated from field: string global_notes = 10;
     */
    this.globalNotes = "";
    /**
     * @generated from field: repeated aiserver.v1.CmdKDebugInfo.PastThought past_thoughts = 11;
     */
    this.pastThoughts = [];
    /**
     * @generated from field: string base_branch_name = 13;
     */
    this.baseBranchName = "";
    /**
     * @generated from field: string base_branch_commit_id = 14;
     */
    this.baseBranchCommitId = "";
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _CmdKDebugInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _CmdKDebugInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _CmdKDebugInfo().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_CmdKDebugInfo, a, b);
  }
};
_CmdKDebugInfo.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_CmdKDebugInfo.typeName = "aiserver.v1.CmdKDebugInfo";
_CmdKDebugInfo.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "remote_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "commit_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "git_patch",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "unsaved_files", kind: "message", T: CmdKDebugInfo_UnsavedFiles, repeated: true },
  {
    no: 5,
    name: "unix_timestamp_ms",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  },
  { no: 6, name: "open_editors", kind: "message", T: CmdKDebugInfo_OpenEditor, repeated: true },
  { no: 7, name: "file_diff_histories", kind: "message", T: CmdKDebugInfo_CppFileDiffHistory, repeated: true },
  {
    no: 8,
    name: "branch_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 9,
    name: "branch_notes",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 12,
    name: "branch_notes_rich",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 10,
    name: "global_notes",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 11, name: "past_thoughts", kind: "message", T: CmdKDebugInfo_PastThought, repeated: true },
  {
    no: 13,
    name: "base_branch_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 14,
    name: "base_branch_commit_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
let CmdKDebugInfo = _CmdKDebugInfo;
const _CmdKDebugInfo_UnsavedFiles = class _CmdKDebugInfo_UnsavedFiles extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string relative_workspace_path = 1;
     */
    this.relativeWorkspacePath = "";
    /**
     * @generated from field: string contents = 2;
     */
    this.contents = "";
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _CmdKDebugInfo_UnsavedFiles().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _CmdKDebugInfo_UnsavedFiles().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _CmdKDebugInfo_UnsavedFiles().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_CmdKDebugInfo_UnsavedFiles, a, b);
  }
};
_CmdKDebugInfo_UnsavedFiles.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_CmdKDebugInfo_UnsavedFiles.typeName = "aiserver.v1.CmdKDebugInfo.UnsavedFiles";
_CmdKDebugInfo_UnsavedFiles.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "contents",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
let CmdKDebugInfo_UnsavedFiles = _CmdKDebugInfo_UnsavedFiles;
const _CmdKDebugInfo_OpenEditor = class _CmdKDebugInfo_OpenEditor extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string relative_workspace_path = 1;
     */
    this.relativeWorkspacePath = "";
    /**
     * @generated from field: int32 editor_group_index = 2;
     */
    this.editorGroupIndex = 0;
    /**
     * @generated from field: int32 editor_group_id = 3;
     */
    this.editorGroupId = 0;
    /**
     * is_active is only true for at most 1 editor per editor group
     *
     * @generated from field: bool is_active = 4;
     */
    this.isActive = false;
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _CmdKDebugInfo_OpenEditor().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _CmdKDebugInfo_OpenEditor().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _CmdKDebugInfo_OpenEditor().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_CmdKDebugInfo_OpenEditor, a, b);
  }
};
_CmdKDebugInfo_OpenEditor.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_CmdKDebugInfo_OpenEditor.typeName = "aiserver.v1.CmdKDebugInfo.OpenEditor";
_CmdKDebugInfo_OpenEditor.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "editor_group_index",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "editor_group_id",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "is_active",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
let CmdKDebugInfo_OpenEditor = _CmdKDebugInfo_OpenEditor;
const _CmdKDebugInfo_CppFileDiffHistory = class _CmdKDebugInfo_CppFileDiffHistory extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string file_name = 1;
     */
    this.fileName = "";
    /**
     * @generated from field: repeated string diff_history = 2;
     */
    this.diffHistory = [];
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _CmdKDebugInfo_CppFileDiffHistory().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _CmdKDebugInfo_CppFileDiffHistory().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _CmdKDebugInfo_CppFileDiffHistory().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_CmdKDebugInfo_CppFileDiffHistory, a, b);
  }
};
_CmdKDebugInfo_CppFileDiffHistory.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_CmdKDebugInfo_CppFileDiffHistory.typeName = "aiserver.v1.CmdKDebugInfo.CppFileDiffHistory";
_CmdKDebugInfo_CppFileDiffHistory.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "file_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "diff_history", kind: "scalar", T: 9, repeated: true }
]);
let CmdKDebugInfo_CppFileDiffHistory = _CmdKDebugInfo_CppFileDiffHistory;
const _CmdKDebugInfo_PastThought = class _CmdKDebugInfo_PastThought extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string text = 1;
     */
    this.text = "";
    /**
     * @generated from field: double time_in_unix_seconds = 2;
     */
    this.timeInUnixSeconds = 0;
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _CmdKDebugInfo_PastThought().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _CmdKDebugInfo_PastThought().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _CmdKDebugInfo_PastThought().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_CmdKDebugInfo_PastThought, a, b);
  }
};
_CmdKDebugInfo_PastThought.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_CmdKDebugInfo_PastThought.typeName = "aiserver.v1.CmdKDebugInfo.PastThought";
_CmdKDebugInfo_PastThought.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "time_in_unix_seconds",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  }
]);
let CmdKDebugInfo_PastThought = _CmdKDebugInfo_PastThought;
const _LineRange = class _LineRange extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * 1-indexed
     *
     * @generated from field: int32 start_line_number = 1;
     */
    this.startLineNumber = 0;
    /**
     * 1-indexed
     *
     * @generated from field: int32 end_line_number_inclusive = 2;
     */
    this.endLineNumberInclusive = 0;
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _LineRange().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _LineRange().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _LineRange().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_LineRange, a, b);
  }
};
_LineRange.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_LineRange.typeName = "aiserver.v1.LineRange";
_LineRange.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "start_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "end_line_number_inclusive",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
let LineRange = _LineRange;
const _CursorRange = class _CursorRange extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _CursorRange().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _CursorRange().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _CursorRange().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_CursorRange, a, b);
  }
};
_CursorRange.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_CursorRange.typeName = "aiserver.v1.CursorRange";
_CursorRange.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  { no: 1, name: "start_position", kind: "message", T: CursorPosition },
  { no: 2, name: "end_position", kind: "message", T: CursorPosition }
]);
let CursorRange = _CursorRange;
const _DetailedLine = class _DetailedLine extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string text = 1;
     */
    this.text = "";
    /**
     * Float to allow for ...'s to go between lines
     *
     * @generated from field: float line_number = 2;
     */
    this.lineNumber = 0;
    /**
     * @generated from field: bool is_signature = 3;
     */
    this.isSignature = false;
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _DetailedLine().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _DetailedLine().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _DetailedLine().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_DetailedLine, a, b);
  }
};
_DetailedLine.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_DetailedLine.typeName = "aiserver.v1.DetailedLine";
_DetailedLine.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "line_number",
    kind: "scalar",
    T: 2
    /* ScalarType.FLOAT */
  },
  {
    no: 3,
    name: "is_signature",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
let DetailedLine = _DetailedLine;
const _CodeBlock = class _CodeBlock extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string relative_workspace_path = 1;
     */
    this.relativeWorkspacePath = "";
    /**
     * @generated from field: string contents = 4;
     */
    this.contents = "";
    /**
     * @generated from field: repeated aiserver.v1.DetailedLine detailed_lines = 8;
     */
    this.detailedLines = [];
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _CodeBlock().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _CodeBlock().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _CodeBlock().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_CodeBlock, a, b);
  }
};
_CodeBlock.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_CodeBlock.typeName = "aiserver.v1.CodeBlock";
_CodeBlock.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "file_contents", kind: "scalar", T: 9, opt: true },
  { no: 9, name: "file_contents_length", kind: "scalar", T: 5, opt: true },
  { no: 3, name: "range", kind: "message", T: CursorRange },
  {
    no: 4,
    name: "contents",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "signatures", kind: "message", T: CodeBlock_Signatures },
  { no: 6, name: "override_contents", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "original_contents", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "detailed_lines", kind: "message", T: DetailedLine, repeated: true },
  { no: 10, name: "file_git_context", kind: "message", T: FileGit }
]);
let CodeBlock = _CodeBlock;
const _CodeBlock_Signatures = class _CodeBlock_Signatures extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: repeated aiserver.v1.CursorRange ranges = 1;
     */
    this.ranges = [];
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _CodeBlock_Signatures().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _CodeBlock_Signatures().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _CodeBlock_Signatures().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_CodeBlock_Signatures, a, b);
  }
};
_CodeBlock_Signatures.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_CodeBlock_Signatures.typeName = "aiserver.v1.CodeBlock.Signatures";
_CodeBlock_Signatures.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  { no: 1, name: "ranges", kind: "message", T: CursorRange, repeated: true }
]);
let CodeBlock_Signatures = _CodeBlock_Signatures;
const _GitCommit = class _GitCommit extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string commit = 1;
     */
    this.commit = "";
    /**
     * @generated from field: string author = 2;
     */
    this.author = "";
    /**
     * @generated from field: string date = 3;
     */
    this.date = "";
    /**
     * @generated from field: string message = 4;
     */
    this.message = "";
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _GitCommit().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _GitCommit().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _GitCommit().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_GitCommit, a, b);
  }
};
_GitCommit.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_GitCommit.typeName = "aiserver.v1.GitCommit";
_GitCommit.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "commit",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "author",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "date",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
let GitCommit = _GitCommit;
const _FileGit = class _FileGit extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: repeated aiserver.v1.GitCommit commits = 1;
     */
    this.commits = [];
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _FileGit().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _FileGit().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _FileGit().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_FileGit, a, b);
  }
};
_FileGit.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_FileGit.typeName = "aiserver.v1.FileGit";
_FileGit.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  { no: 1, name: "commits", kind: "message", T: GitCommit, repeated: true }
]);
let FileGit = _FileGit;
const _File = class _File extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string relative_workspace_path = 1;
     */
    this.relativeWorkspacePath = "";
    /**
     * @generated from field: string contents = 2;
     */
    this.contents = "";
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _File().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _File().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _File().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_File, a, b);
  }
};
_File.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_File.typeName = "aiserver.v1.File";
_File.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "contents",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "file_git_context", kind: "message", T: FileGit }
]);
let File = _File;
const _Diagnostic = class _Diagnostic extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string message = 1;
     */
    this.message = "";
    /**
     * @generated from field: aiserver.v1.Diagnostic.DiagnosticSeverity severity = 3;
     */
    this.severity = 0 /* UNSPECIFIED */;
    /**
     * @generated from field: repeated aiserver.v1.Diagnostic.RelatedInformation related_information = 4;
     */
    this.relatedInformation = [];
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _Diagnostic().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _Diagnostic().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _Diagnostic().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_Diagnostic, a, b);
  }
};
_Diagnostic.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_Diagnostic.typeName = "aiserver.v1.Diagnostic";
_Diagnostic.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "range", kind: "message", T: CursorRange },
  { no: 3, name: "severity", kind: "enum", T: _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(Diagnostic_DiagnosticSeverity) },
  { no: 4, name: "related_information", kind: "message", T: Diagnostic_RelatedInformation, repeated: true }
]);
let Diagnostic = _Diagnostic;
var Diagnostic_DiagnosticSeverity = /* @__PURE__ */ ((Diagnostic_DiagnosticSeverity2) => {
  Diagnostic_DiagnosticSeverity2[Diagnostic_DiagnosticSeverity2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  Diagnostic_DiagnosticSeverity2[Diagnostic_DiagnosticSeverity2["ERROR"] = 1] = "ERROR";
  Diagnostic_DiagnosticSeverity2[Diagnostic_DiagnosticSeverity2["WARNING"] = 2] = "WARNING";
  Diagnostic_DiagnosticSeverity2[Diagnostic_DiagnosticSeverity2["INFORMATION"] = 3] = "INFORMATION";
  Diagnostic_DiagnosticSeverity2[Diagnostic_DiagnosticSeverity2["HINT"] = 4] = "HINT";
  return Diagnostic_DiagnosticSeverity2;
})(Diagnostic_DiagnosticSeverity || {});
_bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.setEnumType(Diagnostic_DiagnosticSeverity, "aiserver.v1.Diagnostic.DiagnosticSeverity", [
  { no: 0, name: "DIAGNOSTIC_SEVERITY_UNSPECIFIED" },
  { no: 1, name: "DIAGNOSTIC_SEVERITY_ERROR" },
  { no: 2, name: "DIAGNOSTIC_SEVERITY_WARNING" },
  { no: 3, name: "DIAGNOSTIC_SEVERITY_INFORMATION" },
  { no: 4, name: "DIAGNOSTIC_SEVERITY_HINT" }
]);
const _Diagnostic_RelatedInformation = class _Diagnostic_RelatedInformation extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string message = 1;
     */
    this.message = "";
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _Diagnostic_RelatedInformation().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _Diagnostic_RelatedInformation().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _Diagnostic_RelatedInformation().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_Diagnostic_RelatedInformation, a, b);
  }
};
_Diagnostic_RelatedInformation.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_Diagnostic_RelatedInformation.typeName = "aiserver.v1.Diagnostic.RelatedInformation";
_Diagnostic_RelatedInformation.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "range", kind: "message", T: CursorRange }
]);
let Diagnostic_RelatedInformation = _Diagnostic_RelatedInformation;
const _Lint = class _Lint extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string message = 1;
     */
    this.message = "";
    /**
     * @generated from field: aiserver.v1.LintSeverity severity = 3;
     */
    this.severity = 0 /* UNSPECIFIED */;
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _Lint().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _Lint().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _Lint().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_Lint, a, b);
  }
};
_Lint.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_Lint.typeName = "aiserver.v1.Lint";
_Lint.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "range", kind: "message", T: SimpleRange },
  { no: 3, name: "severity", kind: "enum", T: _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(LintSeverity) }
]);
let Lint = _Lint;
const _BM25Chunk = class _BM25Chunk extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string content = 1;
     */
    this.content = "";
    /**
     * @generated from field: int32 score = 3;
     */
    this.score = 0;
    /**
     * @generated from field: string relative_path = 4;
     */
    this.relativePath = "";
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _BM25Chunk().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _BM25Chunk().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _BM25Chunk().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_BM25Chunk, a, b);
  }
};
_BM25Chunk.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_BM25Chunk.typeName = "aiserver.v1.BM25Chunk";
_BM25Chunk.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "range", kind: "message", T: SimplestRange },
  {
    no: 3,
    name: "score",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "relative_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
let BM25Chunk = _BM25Chunk;
const _CurrentFileInfo = class _CurrentFileInfo extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * the relative path in the current workspace
     *
     * @generated from field: string relative_workspace_path = 1;
     */
    this.relativeWorkspacePath = "";
    /**
     * TODO: support both text files and notebook files
     * TODO: maybe we don't need to send up the entire file if we have a file sync
     * server?
     *
     * @generated from field: string contents = 2;
     */
    this.contents = "";
    /**
     * @generated from field: bool rely_on_filesync = 18;
     */
    this.relyOnFilesync = false;
    /**
     * if this is a notebook, we will attach cells!
     * for backwards compatibility, we will still send up the entire file contents
     * in the future, we may want to send up only the cells
     *
     * @generated from field: repeated aiserver.v1.CurrentFileInfo.NotebookCell cells = 16;
     */
    this.cells = [];
    /**
     * @generated from field: repeated aiserver.v1.BM25Chunk top_chunks = 10;
     */
    this.topChunks = [];
    /**
     * this is 1-indexed
     * if it is 0 then we assume it is 1
     *
     * @generated from field: int32 contents_start_at_line = 9;
     */
    this.contentsStartAtLine = 0;
    /**
     * dataframes only exist in notebooks
     *
     * @generated from field: repeated aiserver.v1.DataframeInfo dataframes = 4;
     */
    this.dataframes = [];
    /**
     * total number of lines in the entire file
     *
     * @generated from field: int32 total_number_of_lines = 8;
     */
    this.totalNumberOfLines = 0;
    /**
     * @generated from field: string language_id = 5;
     */
    this.languageId = "";
    /**
     * @generated from field: repeated aiserver.v1.Diagnostic diagnostics = 7;
     */
    this.diagnostics = [];
    /**
     * @generated from field: repeated int32 cell_start_lines = 15;
     */
    this.cellStartLines = [];
    /**
     * @generated from field: string workspace_root_path = 19;
     */
    this.workspaceRootPath = "";
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _CurrentFileInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _CurrentFileInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _CurrentFileInfo().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_CurrentFileInfo, a, b);
  }
};
_CurrentFileInfo.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_CurrentFileInfo.typeName = "aiserver.v1.CurrentFileInfo";
_CurrentFileInfo.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "contents",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 18,
    name: "rely_on_filesync",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 17, name: "sha_256_hash", kind: "scalar", T: 9, opt: true },
  { no: 16, name: "cells", kind: "message", T: CurrentFileInfo_NotebookCell, repeated: true },
  { no: 10, name: "top_chunks", kind: "message", T: BM25Chunk, repeated: true },
  {
    no: 9,
    name: "contents_start_at_line",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 3, name: "cursor_position", kind: "message", T: CursorPosition },
  { no: 4, name: "dataframes", kind: "message", T: DataframeInfo, repeated: true },
  {
    no: 8,
    name: "total_number_of_lines",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 5,
    name: "language_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 6, name: "selection", kind: "message", T: CursorRange },
  { no: 11, name: "alternative_version_id", kind: "scalar", T: 5, opt: true },
  { no: 7, name: "diagnostics", kind: "message", T: Diagnostic, repeated: true },
  { no: 14, name: "file_version", kind: "scalar", T: 5, opt: true },
  { no: 15, name: "cell_start_lines", kind: "scalar", T: 5, repeated: true },
  {
    no: 19,
    name: "workspace_root_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 20, name: "line_ending", kind: "scalar", T: 9, opt: true }
]);
let CurrentFileInfo = _CurrentFileInfo;
const _CurrentFileInfo_NotebookCell = class _CurrentFileInfo_NotebookCell extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _CurrentFileInfo_NotebookCell().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _CurrentFileInfo_NotebookCell().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _CurrentFileInfo_NotebookCell().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_CurrentFileInfo_NotebookCell, a, b);
  }
};
_CurrentFileInfo_NotebookCell.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_CurrentFileInfo_NotebookCell.typeName = "aiserver.v1.CurrentFileInfo.NotebookCell";
_CurrentFileInfo_NotebookCell.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => []);
let CurrentFileInfo_NotebookCell = _CurrentFileInfo_NotebookCell;
const _AzureState = class _AzureState extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string api_key = 1;
     */
    this.apiKey = "";
    /**
     * @generated from field: string base_url = 2;
     */
    this.baseUrl = "";
    /**
     * @generated from field: string deployment = 3;
     */
    this.deployment = "";
    /**
     * @generated from field: bool use_azure = 4;
     */
    this.useAzure = false;
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _AzureState().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _AzureState().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _AzureState().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_AzureState, a, b);
  }
};
_AzureState.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_AzureState.typeName = "aiserver.v1.AzureState";
_AzureState.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "api_key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "base_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "deployment",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "use_azure",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
let AzureState = _AzureState;
const _BedrockState = class _BedrockState extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string access_key = 1;
     */
    this.accessKey = "";
    /**
     * @generated from field: string secret_key = 2;
     */
    this.secretKey = "";
    /**
     * @generated from field: string region = 3;
     */
    this.region = "";
    /**
     * @generated from field: bool use_bedrock = 4;
     */
    this.useBedrock = false;
    /**
     * @generated from field: string session_token = 5;
     */
    this.sessionToken = "";
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _BedrockState().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _BedrockState().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _BedrockState().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_BedrockState, a, b);
  }
};
_BedrockState.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_BedrockState.typeName = "aiserver.v1.BedrockState";
_BedrockState.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "access_key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "secret_key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "region",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "use_bedrock",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 5,
    name: "session_token",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
let BedrockState = _BedrockState;
const _ModelDetails = class _ModelDetails extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _ModelDetails().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _ModelDetails().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _ModelDetails().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_ModelDetails, a, b);
  }
};
_ModelDetails.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_ModelDetails.typeName = "aiserver.v1.ModelDetails";
_ModelDetails.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  { no: 1, name: "model_name", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "api_key", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "enable_ghost_mode", kind: "scalar", T: 8, opt: true },
  { no: 4, name: "azure_state", kind: "message", T: AzureState, opt: true },
  { no: 5, name: "enable_slow_pool", kind: "scalar", T: 8, opt: true },
  { no: 6, name: "openai_api_base_url", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "bedrock_state", kind: "message", T: BedrockState, opt: true },
  { no: 8, name: "max_mode", kind: "scalar", T: 8, opt: true }
]);
let ModelDetails = _ModelDetails;
const _ModelInfo = class _ModelInfo extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string model_name = 1;
     */
    this.modelName = "";
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _ModelInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _ModelInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _ModelInfo().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_ModelInfo, a, b);
  }
};
_ModelInfo.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_ModelInfo.typeName = "aiserver.v1.ModelInfo";
_ModelInfo.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "model_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
let ModelInfo = _ModelInfo;
const _DataframeInfo = class _DataframeInfo extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string name = 1;
     */
    this.name = "";
    /**
     * @generated from field: string shape = 2;
     */
    this.shape = "";
    /**
     * @generated from field: int32 data_dimensionality = 3;
     */
    this.dataDimensionality = 0;
    /**
     * @generated from field: repeated aiserver.v1.DataframeInfo.Column columns = 6;
     */
    this.columns = [];
    /**
     * @generated from field: int32 row_count = 7;
     */
    this.rowCount = 0;
    /**
     * @generated from field: string index_column = 8;
     */
    this.indexColumn = "";
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _DataframeInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _DataframeInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _DataframeInfo().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_DataframeInfo, a, b);
  }
};
_DataframeInfo.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_DataframeInfo.typeName = "aiserver.v1.DataframeInfo";
_DataframeInfo.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "shape",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "data_dimensionality",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 6, name: "columns", kind: "message", T: DataframeInfo_Column, repeated: true },
  {
    no: 7,
    name: "row_count",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 8,
    name: "index_column",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
let DataframeInfo = _DataframeInfo;
const _DataframeInfo_Column = class _DataframeInfo_Column extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string key = 1;
     */
    this.key = "";
    /**
     * @generated from field: string type = 2;
     */
    this.type = "";
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _DataframeInfo_Column().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _DataframeInfo_Column().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _DataframeInfo_Column().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_DataframeInfo_Column, a, b);
  }
};
_DataframeInfo_Column.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_DataframeInfo_Column.typeName = "aiserver.v1.DataframeInfo.Column";
_DataframeInfo_Column.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "type",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
let DataframeInfo_Column = _DataframeInfo_Column;
const _LinterError = class _LinterError extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string message = 1;
     */
    this.message = "";
    /**
     * @generated from field: repeated aiserver.v1.Diagnostic.RelatedInformation related_information = 4;
     */
    this.relatedInformation = [];
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _LinterError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _LinterError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _LinterError().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_LinterError, a, b);
  }
};
_LinterError.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_LinterError.typeName = "aiserver.v1.LinterError";
_LinterError.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "range", kind: "message", T: CursorRange },
  { no: 3, name: "source", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "related_information", kind: "message", T: Diagnostic_RelatedInformation, repeated: true },
  { no: 5, name: "severity", kind: "enum", T: _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(Diagnostic_DiagnosticSeverity), opt: true },
  { no: 6, name: "is_stale", kind: "scalar", T: 8, opt: true }
]);
let LinterError = _LinterError;
const _LinterErrors = class _LinterErrors extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string relative_workspace_path = 1;
     */
    this.relativeWorkspacePath = "";
    /**
     * @generated from field: repeated aiserver.v1.LinterError errors = 2;
     */
    this.errors = [];
    /**
     * DEPRECATED: file contents should be sent as attached code chunks
     *
     * @generated from field: string file_contents = 3 [deprecated = true];
     * @deprecated
     */
    this.fileContents = "";
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _LinterErrors().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _LinterErrors().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _LinterErrors().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_LinterErrors, a, b);
  }
};
_LinterErrors.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_LinterErrors.typeName = "aiserver.v1.LinterErrors";
_LinterErrors.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "errors", kind: "message", T: LinterError, repeated: true },
  {
    no: 3,
    name: "file_contents",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
let LinterErrors = _LinterErrors;
const _LinterErrorsWithoutFileContents = class _LinterErrorsWithoutFileContents extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string relative_workspace_path = 1;
     */
    this.relativeWorkspacePath = "";
    /**
     * @generated from field: repeated aiserver.v1.LinterError errors = 2;
     */
    this.errors = [];
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _LinterErrorsWithoutFileContents().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _LinterErrorsWithoutFileContents().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _LinterErrorsWithoutFileContents().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_LinterErrorsWithoutFileContents, a, b);
  }
};
_LinterErrorsWithoutFileContents.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_LinterErrorsWithoutFileContents.typeName = "aiserver.v1.LinterErrorsWithoutFileContents";
_LinterErrorsWithoutFileContents.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "errors", kind: "message", T: LinterError, repeated: true }
]);
let LinterErrorsWithoutFileContents = _LinterErrorsWithoutFileContents;
const _CursorRule = class _CursorRule extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string name = 1;
     */
    this.name = "";
    /**
     * @generated from field: string description = 2;
     */
    this.description = "";
    /**
     * Target environments for this rule. Empty list means all environments.
     * Valid values: "cloud", "local"
     *
     * @generated from field: repeated string environments = 8;
     */
    this.environments = [];
    /**
     * Environments where this rule should NOT apply. Takes precedence over environments.
     * Valid values: "cloud", "local"
     *
     * @generated from field: repeated string disabled_environments = 9;
     */
    this.disabledEnvironments = [];
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _CursorRule().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _CursorRule().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _CursorRule().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_CursorRule, a, b);
  }
};
_CursorRule.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_CursorRule.typeName = "aiserver.v1.CursorRule";
_CursorRule.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "description",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "body", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "is_from_glob", kind: "scalar", T: 8, opt: true },
  { no: 5, name: "always_apply", kind: "scalar", T: 8, opt: true },
  { no: 6, name: "attach_to_background_agents", kind: "scalar", T: 8, opt: true },
  { no: 7, name: "full_path", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "environments", kind: "scalar", T: 9, repeated: true },
  { no: 9, name: "disabled_environments", kind: "scalar", T: 9, repeated: true },
  { no: 10, name: "plugin", kind: "scalar", T: 9, opt: true },
  { no: 11, name: "marketplace", kind: "scalar", T: 9, opt: true }
]);
let CursorRule = _CursorRule;
const _ExplicitContext = class _ExplicitContext extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string context = 1;
     */
    this.context = "";
    /**
     * @generated from field: repeated aiserver.v1.CursorRule rules = 3;
     */
    this.rules = [];
    /**
     * Optional: per-server MCP instructions to include in the prompt
     *
     * @generated from field: repeated aiserver.v1.MCPInstructions mcp_instructions = 5;
     */
    this.mcpInstructions = [];
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _ExplicitContext().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _ExplicitContext().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _ExplicitContext().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_ExplicitContext, a, b);
  }
};
_ExplicitContext.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_ExplicitContext.typeName = "aiserver.v1.ExplicitContext";
_ExplicitContext.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "context",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "repo_context", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "rules", kind: "message", T: CursorRule, repeated: true },
  { no: 4, name: "mode_specific_context", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "mcp_instructions", kind: "message", T: MCPInstructions, repeated: true }
]);
let ExplicitContext = _ExplicitContext;
const _MCPInstructions = class _MCPInstructions extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string server_name = 1;
     */
    this.serverName = "";
    /**
     * @generated from field: string server_identifier = 2;
     */
    this.serverIdentifier = "";
    /**
     * @generated from field: string instructions = 3;
     */
    this.instructions = "";
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _MCPInstructions().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _MCPInstructions().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _MCPInstructions().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_MCPInstructions, a, b);
  }
};
_MCPInstructions.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_MCPInstructions.typeName = "aiserver.v1.MCPInstructions";
_MCPInstructions.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "server_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "server_identifier",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "instructions",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
let MCPInstructions = _MCPInstructions;
const _PureMessage = class _PureMessage extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: aiserver.v1.PureMessage.MessageType message_type = 1;
     */
    this.messageType = 0 /* UNSPECIFIED */;
    /**
     * @generated from field: string content = 2;
     */
    this.content = "";
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _PureMessage().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _PureMessage().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _PureMessage().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_PureMessage, a, b);
  }
};
_PureMessage.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_PureMessage.typeName = "aiserver.v1.PureMessage";
_PureMessage.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  { no: 1, name: "message_type", kind: "enum", T: _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(PureMessage_MessageType) },
  {
    no: 2,
    name: "content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
let PureMessage = _PureMessage;
var PureMessage_MessageType = /* @__PURE__ */ ((PureMessage_MessageType2) => {
  PureMessage_MessageType2[PureMessage_MessageType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  PureMessage_MessageType2[PureMessage_MessageType2["SYSTEM"] = 1] = "SYSTEM";
  PureMessage_MessageType2[PureMessage_MessageType2["USER"] = 2] = "USER";
  PureMessage_MessageType2[PureMessage_MessageType2["ASSISTANT"] = 3] = "ASSISTANT";
  return PureMessage_MessageType2;
})(PureMessage_MessageType || {});
_bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.setEnumType(PureMessage_MessageType, "aiserver.v1.PureMessage.MessageType", [
  { no: 0, name: "MESSAGE_TYPE_UNSPECIFIED" },
  { no: 1, name: "MESSAGE_TYPE_SYSTEM" },
  { no: 2, name: "MESSAGE_TYPE_USER" },
  { no: 3, name: "MESSAGE_TYPE_ASSISTANT" }
]);
const _DocumentSymbol = class _DocumentSymbol extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string name = 1;
     */
    this.name = "";
    /**
     * @generated from field: string detail = 2;
     */
    this.detail = "";
    /**
     * @generated from field: aiserver.v1.DocumentSymbol.SymbolKind kind = 3;
     */
    this.kind = 0 /* UNSPECIFIED */;
    /**
     * @generated from field: string container_name = 5;
     */
    this.containerName = "";
    /**
     * @generated from field: repeated aiserver.v1.DocumentSymbol children = 8;
     */
    this.children = [];
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _DocumentSymbol().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _DocumentSymbol().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _DocumentSymbol().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_DocumentSymbol, a, b);
  }
};
_DocumentSymbol.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_DocumentSymbol.typeName = "aiserver.v1.DocumentSymbol";
_DocumentSymbol.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "detail",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "kind", kind: "enum", T: _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(DocumentSymbol_SymbolKind) },
  {
    no: 5,
    name: "container_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 6, name: "range", kind: "message", T: DocumentSymbol_Range },
  { no: 7, name: "selection_range", kind: "message", T: DocumentSymbol_Range },
  { no: 8, name: "children", kind: "message", T: _DocumentSymbol, repeated: true }
]);
let DocumentSymbol = _DocumentSymbol;
var DocumentSymbol_SymbolKind = /* @__PURE__ */ ((DocumentSymbol_SymbolKind2) => {
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["FILE"] = 1] = "FILE";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["MODULE"] = 2] = "MODULE";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["NAMESPACE"] = 3] = "NAMESPACE";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["PACKAGE"] = 4] = "PACKAGE";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["CLASS"] = 5] = "CLASS";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["METHOD"] = 6] = "METHOD";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["PROPERTY"] = 7] = "PROPERTY";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["FIELD"] = 8] = "FIELD";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["CONSTRUCTOR"] = 9] = "CONSTRUCTOR";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["ENUM"] = 10] = "ENUM";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["INTERFACE"] = 11] = "INTERFACE";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["FUNCTION"] = 12] = "FUNCTION";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["VARIABLE"] = 13] = "VARIABLE";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["CONSTANT"] = 14] = "CONSTANT";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["STRING"] = 15] = "STRING";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["NUMBER"] = 16] = "NUMBER";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["BOOLEAN"] = 17] = "BOOLEAN";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["ARRAY"] = 18] = "ARRAY";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["OBJECT"] = 19] = "OBJECT";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["KEY"] = 20] = "KEY";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["NULL"] = 21] = "NULL";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["ENUM_MEMBER"] = 22] = "ENUM_MEMBER";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["STRUCT"] = 23] = "STRUCT";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["EVENT"] = 24] = "EVENT";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["OPERATOR"] = 25] = "OPERATOR";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["TYPE_PARAMETER"] = 26] = "TYPE_PARAMETER";
  return DocumentSymbol_SymbolKind2;
})(DocumentSymbol_SymbolKind || {});
_bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.setEnumType(DocumentSymbol_SymbolKind, "aiserver.v1.DocumentSymbol.SymbolKind", [
  { no: 0, name: "SYMBOL_KIND_UNSPECIFIED" },
  { no: 1, name: "SYMBOL_KIND_FILE" },
  { no: 2, name: "SYMBOL_KIND_MODULE" },
  { no: 3, name: "SYMBOL_KIND_NAMESPACE" },
  { no: 4, name: "SYMBOL_KIND_PACKAGE" },
  { no: 5, name: "SYMBOL_KIND_CLASS" },
  { no: 6, name: "SYMBOL_KIND_METHOD" },
  { no: 7, name: "SYMBOL_KIND_PROPERTY" },
  { no: 8, name: "SYMBOL_KIND_FIELD" },
  { no: 9, name: "SYMBOL_KIND_CONSTRUCTOR" },
  { no: 10, name: "SYMBOL_KIND_ENUM" },
  { no: 11, name: "SYMBOL_KIND_INTERFACE" },
  { no: 12, name: "SYMBOL_KIND_FUNCTION" },
  { no: 13, name: "SYMBOL_KIND_VARIABLE" },
  { no: 14, name: "SYMBOL_KIND_CONSTANT" },
  { no: 15, name: "SYMBOL_KIND_STRING" },
  { no: 16, name: "SYMBOL_KIND_NUMBER" },
  { no: 17, name: "SYMBOL_KIND_BOOLEAN" },
  { no: 18, name: "SYMBOL_KIND_ARRAY" },
  { no: 19, name: "SYMBOL_KIND_OBJECT" },
  { no: 20, name: "SYMBOL_KIND_KEY" },
  { no: 21, name: "SYMBOL_KIND_NULL" },
  { no: 22, name: "SYMBOL_KIND_ENUM_MEMBER" },
  { no: 23, name: "SYMBOL_KIND_STRUCT" },
  { no: 24, name: "SYMBOL_KIND_EVENT" },
  { no: 25, name: "SYMBOL_KIND_OPERATOR" },
  { no: 26, name: "SYMBOL_KIND_TYPE_PARAMETER" }
]);
const _DocumentSymbol_Range = class _DocumentSymbol_Range extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: int32 start_line_number = 1;
     */
    this.startLineNumber = 0;
    /**
     * @generated from field: int32 start_column = 2;
     */
    this.startColumn = 0;
    /**
     * @generated from field: int32 end_line_number = 3;
     */
    this.endLineNumber = 0;
    /**
     * @generated from field: int32 end_column = 4;
     */
    this.endColumn = 0;
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _DocumentSymbol_Range().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _DocumentSymbol_Range().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _DocumentSymbol_Range().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_DocumentSymbol_Range, a, b);
  }
};
_DocumentSymbol_Range.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_DocumentSymbol_Range.typeName = "aiserver.v1.DocumentSymbol.Range";
_DocumentSymbol_Range.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "start_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "start_column",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "end_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "end_column",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
let DocumentSymbol_Range = _DocumentSymbol_Range;
const _HoverDetails = class _HoverDetails extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string code_details = 1;
     */
    this.codeDetails = "";
    /**
     * @generated from field: repeated string markdown_blocks = 2;
     */
    this.markdownBlocks = [];
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _HoverDetails().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _HoverDetails().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _HoverDetails().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_HoverDetails, a, b);
  }
};
_HoverDetails.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_HoverDetails.typeName = "aiserver.v1.HoverDetails";
_HoverDetails.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "code_details",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "markdown_blocks", kind: "scalar", T: 9, repeated: true }
]);
let HoverDetails = _HoverDetails;
const _UriComponents = class _UriComponents extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string scheme = 1;
     */
    this.scheme = "";
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _UriComponents().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _UriComponents().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _UriComponents().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_UriComponents, a, b);
  }
};
_UriComponents.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_UriComponents.typeName = "aiserver.v1.UriComponents";
_UriComponents.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "scheme",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "authority", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "path", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "query", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "fragment", kind: "scalar", T: 9, opt: true }
]);
let UriComponents = _UriComponents;
const _DocumentSymbolWithText = class _DocumentSymbolWithText extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string relative_workspace_path = 2;
     */
    this.relativeWorkspacePath = "";
    /**
     * @generated from field: string text_in_symbol_range = 3;
     */
    this.textInSymbolRange = "";
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _DocumentSymbolWithText().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _DocumentSymbolWithText().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _DocumentSymbolWithText().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_DocumentSymbolWithText, a, b);
  }
};
_DocumentSymbolWithText.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_DocumentSymbolWithText.typeName = "aiserver.v1.DocumentSymbolWithText";
_DocumentSymbolWithText.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  { no: 1, name: "symbol", kind: "message", T: DocumentSymbol },
  {
    no: 2,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "text_in_symbol_range",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "uri_components", kind: "message", T: UriComponents }
]);
let DocumentSymbolWithText = _DocumentSymbolWithText;
const _ErrorDetails = class _ErrorDetails extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: aiserver.v1.ErrorDetails.Error error = 1;
     */
    this.error = 0 /* UNSPECIFIED */;
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _ErrorDetails().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _ErrorDetails().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _ErrorDetails().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_ErrorDetails, a, b);
  }
};
_ErrorDetails.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_ErrorDetails.typeName = "aiserver.v1.ErrorDetails";
_ErrorDetails.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  { no: 1, name: "error", kind: "enum", T: _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ErrorDetails_Error) },
  { no: 2, name: "details", kind: "message", T: CustomErrorDetails },
  { no: 3, name: "is_expected", kind: "scalar", T: 8, opt: true }
]);
let ErrorDetails = _ErrorDetails;
var ErrorDetails_Error = /* @__PURE__ */ ((ErrorDetails_Error2) => {
  ErrorDetails_Error2[ErrorDetails_Error2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  ErrorDetails_Error2[ErrorDetails_Error2["BAD_API_KEY"] = 1] = "BAD_API_KEY";
  ErrorDetails_Error2[ErrorDetails_Error2["BAD_USER_API_KEY"] = 42] = "BAD_USER_API_KEY";
  ErrorDetails_Error2[ErrorDetails_Error2["NOT_LOGGED_IN"] = 2] = "NOT_LOGGED_IN";
  ErrorDetails_Error2[ErrorDetails_Error2["INVALID_AUTH_ID"] = 3] = "INVALID_AUTH_ID";
  ErrorDetails_Error2[ErrorDetails_Error2["NOT_HIGH_ENOUGH_PERMISSIONS"] = 4] = "NOT_HIGH_ENOUGH_PERMISSIONS";
  ErrorDetails_Error2[ErrorDetails_Error2["AGENT_REQUIRES_LOGIN"] = 18] = "AGENT_REQUIRES_LOGIN";
  ErrorDetails_Error2[ErrorDetails_Error2["BAD_MODEL_NAME"] = 5] = "BAD_MODEL_NAME";
  ErrorDetails_Error2[ErrorDetails_Error2["NOT_FOUND"] = 39] = "NOT_FOUND";
  ErrorDetails_Error2[ErrorDetails_Error2["DEPRECATED"] = 40] = "DEPRECATED";
  ErrorDetails_Error2[ErrorDetails_Error2["USER_NOT_FOUND"] = 6] = "USER_NOT_FOUND";
  ErrorDetails_Error2[ErrorDetails_Error2["FREE_USER_RATE_LIMIT_EXCEEDED"] = 7] = "FREE_USER_RATE_LIMIT_EXCEEDED";
  ErrorDetails_Error2[ErrorDetails_Error2["PRO_USER_RATE_LIMIT_EXCEEDED"] = 8] = "PRO_USER_RATE_LIMIT_EXCEEDED";
  ErrorDetails_Error2[ErrorDetails_Error2["FREE_USER_USAGE_LIMIT"] = 9] = "FREE_USER_USAGE_LIMIT";
  ErrorDetails_Error2[ErrorDetails_Error2["PRO_USER_USAGE_LIMIT"] = 10] = "PRO_USER_USAGE_LIMIT";
  ErrorDetails_Error2[ErrorDetails_Error2["RESOURCE_EXHAUSTED"] = 41] = "RESOURCE_EXHAUSTED";
  ErrorDetails_Error2[ErrorDetails_Error2["AUTH_TOKEN_NOT_FOUND"] = 11] = "AUTH_TOKEN_NOT_FOUND";
  ErrorDetails_Error2[ErrorDetails_Error2["AUTH_TOKEN_EXPIRED"] = 12] = "AUTH_TOKEN_EXPIRED";
  ErrorDetails_Error2[ErrorDetails_Error2["OPENAI"] = 13] = "OPENAI";
  ErrorDetails_Error2[ErrorDetails_Error2["OPENAI_RATE_LIMIT_EXCEEDED"] = 14] = "OPENAI_RATE_LIMIT_EXCEEDED";
  ErrorDetails_Error2[ErrorDetails_Error2["MAX_TOKENS"] = 20] = "MAX_TOKENS";
  ErrorDetails_Error2[ErrorDetails_Error2["PRO_USER_ONLY"] = 23] = "PRO_USER_ONLY";
  ErrorDetails_Error2[ErrorDetails_Error2["USER_ABORTED_REQUEST"] = 21] = "USER_ABORTED_REQUEST";
  ErrorDetails_Error2[ErrorDetails_Error2["TIMEOUT"] = 25] = "TIMEOUT";
  ErrorDetails_Error2[ErrorDetails_Error2["GENERIC_RATE_LIMIT_EXCEEDED"] = 22] = "GENERIC_RATE_LIMIT_EXCEEDED";
  ErrorDetails_Error2[ErrorDetails_Error2["GPT_4_VISION_PREVIEW_RATE_LIMIT"] = 28] = "GPT_4_VISION_PREVIEW_RATE_LIMIT";
  ErrorDetails_Error2[ErrorDetails_Error2["CUSTOM_MESSAGE"] = 29] = "CUSTOM_MESSAGE";
  ErrorDetails_Error2[ErrorDetails_Error2["OUTDATED_CLIENT"] = 30] = "OUTDATED_CLIENT";
  ErrorDetails_Error2[ErrorDetails_Error2["CLAUDE_IMAGE_TOO_LARGE"] = 31] = "CLAUDE_IMAGE_TOO_LARGE";
  ErrorDetails_Error2[ErrorDetails_Error2["FILE_NOT_FOUND"] = 33] = "FILE_NOT_FOUND";
  ErrorDetails_Error2[ErrorDetails_Error2["API_KEY_RATE_LIMIT"] = 34] = "API_KEY_RATE_LIMIT";
  ErrorDetails_Error2[ErrorDetails_Error2["DEBOUNCED"] = 35] = "DEBOUNCED";
  ErrorDetails_Error2[ErrorDetails_Error2["BAD_REQUEST"] = 36] = "BAD_REQUEST";
  ErrorDetails_Error2[ErrorDetails_Error2["REPOSITORY_SERVICE_REPOSITORY_IS_NOT_INITIALIZED"] = 37] = "REPOSITORY_SERVICE_REPOSITORY_IS_NOT_INITIALIZED";
  ErrorDetails_Error2[ErrorDetails_Error2["UNAUTHORIZED"] = 38] = "UNAUTHORIZED";
  ErrorDetails_Error2[ErrorDetails_Error2["CONVERSATION_TOO_LONG"] = 43] = "CONVERSATION_TOO_LONG";
  ErrorDetails_Error2[ErrorDetails_Error2["USAGE_PRICING_REQUIRED"] = 44] = "USAGE_PRICING_REQUIRED";
  ErrorDetails_Error2[ErrorDetails_Error2["USAGE_PRICING_REQUIRED_CHANGEABLE"] = 45] = "USAGE_PRICING_REQUIRED_CHANGEABLE";
  ErrorDetails_Error2[ErrorDetails_Error2["GITHUB_NO_USER_CREDENTIALS"] = 46] = "GITHUB_NO_USER_CREDENTIALS";
  ErrorDetails_Error2[ErrorDetails_Error2["GITHUB_USER_NO_ACCESS"] = 47] = "GITHUB_USER_NO_ACCESS";
  ErrorDetails_Error2[ErrorDetails_Error2["GITHUB_APP_NO_ACCESS"] = 48] = "GITHUB_APP_NO_ACCESS";
  ErrorDetails_Error2[ErrorDetails_Error2["GITHUB_MULTIPLE_OWNERS"] = 49] = "GITHUB_MULTIPLE_OWNERS";
  ErrorDetails_Error2[ErrorDetails_Error2["RATE_LIMITED"] = 50] = "RATE_LIMITED";
  ErrorDetails_Error2[ErrorDetails_Error2["RATE_LIMITED_CHANGEABLE"] = 51] = "RATE_LIMITED_CHANGEABLE";
  ErrorDetails_Error2[ErrorDetails_Error2["CUSTOM"] = 52] = "CUSTOM";
  ErrorDetails_Error2[ErrorDetails_Error2["HOOKS_BLOCKED"] = 53] = "HOOKS_BLOCKED";
  ErrorDetails_Error2[ErrorDetails_Error2["SUSPICIOUS_USAGE_BLOCKED"] = 54] = "SUSPICIOUS_USAGE_BLOCKED";
  ErrorDetails_Error2[ErrorDetails_Error2["EXTENSION_HOST_TIMEOUT"] = 55] = "EXTENSION_HOST_TIMEOUT";
  ErrorDetails_Error2[ErrorDetails_Error2["NETWORK_ERROR"] = 56] = "NETWORK_ERROR";
  ErrorDetails_Error2[ErrorDetails_Error2["PROVIDER_ERROR"] = 57] = "PROVIDER_ERROR";
  ErrorDetails_Error2[ErrorDetails_Error2["MODEL_BLOCKED"] = 58] = "MODEL_BLOCKED";
  ErrorDetails_Error2[ErrorDetails_Error2["INTERNAL"] = 59] = "INTERNAL";
  ErrorDetails_Error2[ErrorDetails_Error2["MAX_MODE_REQUIRED"] = 60] = "MAX_MODE_REQUIRED";
  ErrorDetails_Error2[ErrorDetails_Error2["MODEL_NO_LONGER_SUPPORTED"] = 61] = "MODEL_NO_LONGER_SUPPORTED";
  ErrorDetails_Error2[ErrorDetails_Error2["PRICING_WARNING"] = 62] = "PRICING_WARNING";
  ErrorDetails_Error2[ErrorDetails_Error2["SLOW_POOL"] = 63] = "SLOW_POOL";
  ErrorDetails_Error2[ErrorDetails_Error2["UNSUPPORTED_REGION"] = 64] = "UNSUPPORTED_REGION";
  return ErrorDetails_Error2;
})(ErrorDetails_Error || {});
_bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.setEnumType(ErrorDetails_Error, "aiserver.v1.ErrorDetails.Error", [
  { no: 0, name: "ERROR_UNSPECIFIED" },
  { no: 1, name: "ERROR_BAD_API_KEY" },
  { no: 42, name: "ERROR_BAD_USER_API_KEY" },
  { no: 2, name: "ERROR_NOT_LOGGED_IN" },
  { no: 3, name: "ERROR_INVALID_AUTH_ID" },
  { no: 4, name: "ERROR_NOT_HIGH_ENOUGH_PERMISSIONS" },
  { no: 18, name: "ERROR_AGENT_REQUIRES_LOGIN" },
  { no: 5, name: "ERROR_BAD_MODEL_NAME" },
  { no: 39, name: "ERROR_NOT_FOUND" },
  { no: 40, name: "ERROR_DEPRECATED" },
  { no: 6, name: "ERROR_USER_NOT_FOUND" },
  { no: 7, name: "ERROR_FREE_USER_RATE_LIMIT_EXCEEDED" },
  { no: 8, name: "ERROR_PRO_USER_RATE_LIMIT_EXCEEDED" },
  { no: 9, name: "ERROR_FREE_USER_USAGE_LIMIT" },
  { no: 10, name: "ERROR_PRO_USER_USAGE_LIMIT" },
  { no: 41, name: "ERROR_RESOURCE_EXHAUSTED" },
  { no: 11, name: "ERROR_AUTH_TOKEN_NOT_FOUND" },
  { no: 12, name: "ERROR_AUTH_TOKEN_EXPIRED" },
  { no: 13, name: "ERROR_OPENAI" },
  { no: 14, name: "ERROR_OPENAI_RATE_LIMIT_EXCEEDED" },
  { no: 20, name: "ERROR_MAX_TOKENS" },
  { no: 23, name: "ERROR_PRO_USER_ONLY" },
  { no: 21, name: "ERROR_USER_ABORTED_REQUEST" },
  { no: 25, name: "ERROR_TIMEOUT" },
  { no: 22, name: "ERROR_GENERIC_RATE_LIMIT_EXCEEDED" },
  { no: 28, name: "ERROR_GPT_4_VISION_PREVIEW_RATE_LIMIT" },
  { no: 29, name: "ERROR_CUSTOM_MESSAGE" },
  { no: 30, name: "ERROR_OUTDATED_CLIENT" },
  { no: 31, name: "ERROR_CLAUDE_IMAGE_TOO_LARGE" },
  { no: 33, name: "ERROR_FILE_NOT_FOUND" },
  { no: 34, name: "ERROR_API_KEY_RATE_LIMIT" },
  { no: 35, name: "ERROR_DEBOUNCED" },
  { no: 36, name: "ERROR_BAD_REQUEST" },
  { no: 37, name: "ERROR_REPOSITORY_SERVICE_REPOSITORY_IS_NOT_INITIALIZED" },
  { no: 38, name: "ERROR_UNAUTHORIZED" },
  { no: 43, name: "ERROR_CONVERSATION_TOO_LONG" },
  { no: 44, name: "ERROR_USAGE_PRICING_REQUIRED" },
  { no: 45, name: "ERROR_USAGE_PRICING_REQUIRED_CHANGEABLE" },
  { no: 46, name: "ERROR_GITHUB_NO_USER_CREDENTIALS" },
  { no: 47, name: "ERROR_GITHUB_USER_NO_ACCESS" },
  { no: 48, name: "ERROR_GITHUB_APP_NO_ACCESS" },
  { no: 49, name: "ERROR_GITHUB_MULTIPLE_OWNERS" },
  { no: 50, name: "ERROR_RATE_LIMITED" },
  { no: 51, name: "ERROR_RATE_LIMITED_CHANGEABLE" },
  { no: 52, name: "ERROR_CUSTOM" },
  { no: 53, name: "ERROR_HOOKS_BLOCKED" },
  { no: 54, name: "ERROR_SUSPICIOUS_USAGE_BLOCKED" },
  { no: 55, name: "ERROR_EXTENSION_HOST_TIMEOUT" },
  { no: 56, name: "ERROR_NETWORK_ERROR" },
  { no: 57, name: "ERROR_PROVIDER_ERROR" },
  { no: 58, name: "ERROR_MODEL_BLOCKED" },
  { no: 59, name: "ERROR_INTERNAL" },
  { no: 60, name: "ERROR_MAX_MODE_REQUIRED" },
  { no: 61, name: "ERROR_MODEL_NO_LONGER_SUPPORTED" },
  { no: 62, name: "ERROR_PRICING_WARNING" },
  { no: 63, name: "ERROR_SLOW_POOL" },
  { no: 64, name: "ERROR_UNSUPPORTED_REGION" }
]);
const _CustomErrorDetails = class _CustomErrorDetails extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string title = 1;
     */
    this.title = "";
    /**
     * @generated from field: string detail = 2;
     */
    this.detail = "";
    /**
     * Buttons are rendered from left-to-right with the last button being primary
     *
     * @generated from field: repeated aiserver.v1.ErrorButton buttons = 8;
     */
    this.buttons = [];
    /**
     * Arbitrary additional info that can be used to provide more context to the error
     *
     * @generated from field: map<string, string> additional_info = 7;
     */
    this.additionalInfo = {};
    /**
     * Custom choices to render
     *
     * @generated from field: repeated aiserver.v1.PlanChoice plan_choices = 9;
     */
    this.planChoices = [];
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _CustomErrorDetails().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _CustomErrorDetails().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _CustomErrorDetails().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_CustomErrorDetails, a, b);
  }
};
_CustomErrorDetails.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_CustomErrorDetails.typeName = "aiserver.v1.CustomErrorDetails";
_CustomErrorDetails.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "title",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "detail",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "allow_command_links_potentially_unsafe_please_only_use_for_handwritten_trusted_markdown", kind: "scalar", T: 8, opt: true },
  { no: 4, name: "is_retryable", kind: "scalar", T: 8, opt: true },
  { no: 5, name: "show_request_id", kind: "scalar", T: 8, opt: true },
  { no: 6, name: "should_show_immediate_error", kind: "scalar", T: 8, opt: true },
  { no: 8, name: "buttons", kind: "message", T: ErrorButton, repeated: true },
  { no: 7, name: "additional_info", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } },
  { no: 9, name: "plan_choices", kind: "message", T: PlanChoice, repeated: true },
  { no: 10, name: "analytics_metadata", kind: "message", T: ErrorAnalyticsMetadata, opt: true }
]);
let CustomErrorDetails = _CustomErrorDetails;
const _ErrorAnalyticsMetadata = class _ErrorAnalyticsMetadata extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _ErrorAnalyticsMetadata().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _ErrorAnalyticsMetadata().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _ErrorAnalyticsMetadata().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_ErrorAnalyticsMetadata, a, b);
  }
};
_ErrorAnalyticsMetadata.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_ErrorAnalyticsMetadata.typeName = "aiserver.v1.ErrorAnalyticsMetadata";
_ErrorAnalyticsMetadata.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  { no: 1, name: "action_required", kind: "scalar", T: 9, opt: true }
]);
let ErrorAnalyticsMetadata = _ErrorAnalyticsMetadata;
const _PlanChoice = class _PlanChoice extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string label = 1;
     */
    this.label = "";
    /**
     * @generated from field: string value = 4;
     */
    this.value = "";
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _PlanChoice().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _PlanChoice().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _PlanChoice().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_PlanChoice, a, b);
  }
};
_PlanChoice.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_PlanChoice.typeName = "aiserver.v1.PlanChoice";
_PlanChoice.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "label",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "sublabel", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "description", kind: "scalar", T: 9, opt: true },
  {
    no: 4,
    name: "value",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
let PlanChoice = _PlanChoice;
const _ErrorButton = class _ErrorButton extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string label = 1;
     */
    this.label = "";
    /**
     * @generated from oneof aiserver.v1.ErrorButton.action
     */
    this.action = { case: void 0 };
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _ErrorButton().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _ErrorButton().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _ErrorButton().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_ErrorButton, a, b);
  }
};
_ErrorButton.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_ErrorButton.typeName = "aiserver.v1.ErrorButton";
_ErrorButton.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "label",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "upgrade", kind: "message", T: UpgradeAction, oneof: "action" },
  { no: 3, name: "switch_model", kind: "message", T: SwitchModelAction, oneof: "action" },
  { no: 4, name: "configure_spend_limit", kind: "message", T: ConfigureSpendLimitAction, oneof: "action" },
  { no: 5, name: "url", kind: "message", T: UrlAction, oneof: "action" },
  { no: 6, name: "upgrade_choice", kind: "message", T: UpgradeChoice, oneof: "action" },
  { no: 7, name: "dashboard_action", kind: "message", T: DashboardAction, oneof: "action" },
  { no: 8, name: "reload_window", kind: "message", T: ReloadWindowAction, oneof: "action" },
  { no: 9, name: "client_action", kind: "message", T: ClientAction, oneof: "action" }
]);
let ErrorButton = _ErrorButton;
const _ClientAction = class _ClientAction extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * The VS Code command ID to execute (e.g., "workbench.action.reloadWindow", "update.checkForUpdate")
     *
     * @generated from field: string command_id = 1;
     */
    this.commandId = "";
    /**
     * Optional arguments to pass to the command (serialized as JSON if complex types are needed)
     *
     * @generated from field: map<string, string> args = 2;
     */
    this.args = {};
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _ClientAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _ClientAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _ClientAction().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_ClientAction, a, b);
  }
};
_ClientAction.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_ClientAction.typeName = "aiserver.v1.ClientAction";
_ClientAction.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "command_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "args", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } }
]);
let ClientAction = _ClientAction;
const _ReloadWindowAction = class _ReloadWindowAction extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _ReloadWindowAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _ReloadWindowAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _ReloadWindowAction().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_ReloadWindowAction, a, b);
  }
};
_ReloadWindowAction.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_ReloadWindowAction.typeName = "aiserver.v1.ReloadWindowAction";
_ReloadWindowAction.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => []);
let ReloadWindowAction = _ReloadWindowAction;
const _DashboardAction = class _DashboardAction extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string action = 1;
     */
    this.action = "";
    /**
     * @generated from field: map<string, string> args = 2;
     */
    this.args = {};
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _DashboardAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _DashboardAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _DashboardAction().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_DashboardAction, a, b);
  }
};
_DashboardAction.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_DashboardAction.typeName = "aiserver.v1.DashboardAction";
_DashboardAction.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "action",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "args", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } },
  { no: 3, name: "success_message", kind: "scalar", T: 9, opt: true }
]);
let DashboardAction = _DashboardAction;
const _UpgradeChoice = class _UpgradeChoice extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _UpgradeChoice().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _UpgradeChoice().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _UpgradeChoice().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_UpgradeChoice, a, b);
  }
};
_UpgradeChoice.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_UpgradeChoice.typeName = "aiserver.v1.UpgradeChoice";
_UpgradeChoice.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => []);
let UpgradeChoice = _UpgradeChoice;
const _UpgradeAction = class _UpgradeAction extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string membership_to_upgrade_to = 1;
     */
    this.membershipToUpgradeTo = "";
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _UpgradeAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _UpgradeAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _UpgradeAction().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_UpgradeAction, a, b);
  }
};
_UpgradeAction.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_UpgradeAction.typeName = "aiserver.v1.UpgradeAction";
_UpgradeAction.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "membership_to_upgrade_to",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "try_immediate_upgrade", kind: "scalar", T: 8, opt: true },
  { no: 3, name: "allow_trial", kind: "scalar", T: 8, opt: true }
]);
let UpgradeAction = _UpgradeAction;
const _SwitchModelAction = class _SwitchModelAction extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _SwitchModelAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _SwitchModelAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _SwitchModelAction().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_SwitchModelAction, a, b);
  }
};
_SwitchModelAction.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_SwitchModelAction.typeName = "aiserver.v1.SwitchModelAction";
_SwitchModelAction.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  { no: 1, name: "suggested_model", kind: "scalar", T: 9, opt: true }
]);
let SwitchModelAction = _SwitchModelAction;
const _ConfigureSpendLimitAction = class _ConfigureSpendLimitAction extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string confirm_label = 1;
     */
    this.confirmLabel = "";
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _ConfigureSpendLimitAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _ConfigureSpendLimitAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _ConfigureSpendLimitAction().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_ConfigureSpendLimitAction, a, b);
  }
};
_ConfigureSpendLimitAction.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_ConfigureSpendLimitAction.typeName = "aiserver.v1.ConfigureSpendLimitAction";
_ConfigureSpendLimitAction.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "confirm_label",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
let ConfigureSpendLimitAction = _ConfigureSpendLimitAction;
const _UrlAction = class _UrlAction extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string url = 1;
     */
    this.url = "";
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _UrlAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _UrlAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _UrlAction().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_UrlAction, a, b);
  }
};
_UrlAction.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_UrlAction.typeName = "aiserver.v1.UrlAction";
_UrlAction.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
let UrlAction = _UrlAction;
const _ImageProto = class _ImageProto extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * We upload the raw binary data of the image to the server
     *
     * @generated from field: bytes data = 1;
     */
    this.data = new Uint8Array(0);
    /**
     * @generated from field: string uuid = 3;
     */
    this.uuid = "";
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _ImageProto().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _ImageProto().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _ImageProto().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_ImageProto, a, b);
  }
};
_ImageProto.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_ImageProto.typeName = "aiserver.v1.ImageProto";
_ImageProto.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "data",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  },
  { no: 2, name: "dimension", kind: "message", T: ImageProto_Dimension },
  {
    no: 3,
    name: "uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "task_specific_description", kind: "scalar", T: 9, opt: true }
]);
let ImageProto = _ImageProto;
const _ImageProto_Dimension = class _ImageProto_Dimension extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: int32 width = 1;
     */
    this.width = 0;
    /**
     * @generated from field: int32 height = 2;
     */
    this.height = 0;
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _ImageProto_Dimension().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _ImageProto_Dimension().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _ImageProto_Dimension().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_ImageProto_Dimension, a, b);
  }
};
_ImageProto_Dimension.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_ImageProto_Dimension.typeName = "aiserver.v1.ImageProto.Dimension";
_ImageProto_Dimension.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "width",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "height",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
let ImageProto_Dimension = _ImageProto_Dimension;
const _ChatQuote = class _ChatQuote extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string markdown = 1;
     */
    this.markdown = "";
    /**
     * @generated from field: string bubble_id = 2;
     */
    this.bubbleId = "";
    /**
     * @generated from field: int32 section_index = 3;
     */
    this.sectionIndex = 0;
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _ChatQuote().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _ChatQuote().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _ChatQuote().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_ChatQuote, a, b);
  }
};
_ChatQuote.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_ChatQuote.typeName = "aiserver.v1.ChatQuote";
_ChatQuote.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "markdown",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "bubble_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "section_index",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
let ChatQuote = _ChatQuote;
const _ChatExternalLink = class _ChatExternalLink extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string url = 1;
     */
    this.url = "";
    /**
     * @generated from field: string uuid = 2;
     */
    this.uuid = "";
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _ChatExternalLink().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _ChatExternalLink().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _ChatExternalLink().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_ChatExternalLink, a, b);
  }
};
_ChatExternalLink.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_ChatExternalLink.typeName = "aiserver.v1.ChatExternalLink";
_ChatExternalLink.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "pdf_content", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "is_pdf", kind: "scalar", T: 8, opt: true },
  { no: 5, name: "filename", kind: "scalar", T: 9, opt: true }
]);
let ChatExternalLink = _ChatExternalLink;
const _ComposerExternalLink = class _ComposerExternalLink extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string url = 1;
     */
    this.url = "";
    /**
     * @generated from field: string uuid = 2;
     */
    this.uuid = "";
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _ComposerExternalLink().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _ComposerExternalLink().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _ComposerExternalLink().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_ComposerExternalLink, a, b);
  }
};
_ComposerExternalLink.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_ComposerExternalLink.typeName = "aiserver.v1.ComposerExternalLink";
_ComposerExternalLink.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "pdf_content", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "is_pdf", kind: "scalar", T: 8, opt: true },
  { no: 5, name: "filename", kind: "scalar", T: 9, opt: true }
]);
let ComposerExternalLink = _ComposerExternalLink;
const _CmdKExternalLink = class _CmdKExternalLink extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string url = 1;
     */
    this.url = "";
    /**
     * @generated from field: string uuid = 2;
     */
    this.uuid = "";
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _CmdKExternalLink().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _CmdKExternalLink().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _CmdKExternalLink().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_CmdKExternalLink, a, b);
  }
};
_CmdKExternalLink.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_CmdKExternalLink.typeName = "aiserver.v1.CmdKExternalLink";
_CmdKExternalLink.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
let CmdKExternalLink = _CmdKExternalLink;
const _CommitNote = class _CommitNote extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string note = 1;
     */
    this.note = "";
    /**
     * @generated from field: string commit_hash = 2;
     */
    this.commitHash = "";
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _CommitNote().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _CommitNote().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _CommitNote().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_CommitNote, a, b);
  }
};
_CommitNote.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_CommitNote.typeName = "aiserver.v1.CommitNote";
_CommitNote.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "note",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "commit_hash",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
let CommitNote = _CommitNote;
const _CommitNoteWithEmbeddings = class _CommitNoteWithEmbeddings extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string note = 1;
     */
    this.note = "";
    /**
     * @generated from field: string commit_hash = 2;
     */
    this.commitHash = "";
    /**
     * @generated from field: repeated double embeddings = 3;
     */
    this.embeddings = [];
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _CommitNoteWithEmbeddings().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _CommitNoteWithEmbeddings().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _CommitNoteWithEmbeddings().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_CommitNoteWithEmbeddings, a, b);
  }
};
_CommitNoteWithEmbeddings.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_CommitNoteWithEmbeddings.typeName = "aiserver.v1.CommitNoteWithEmbeddings";
_CommitNoteWithEmbeddings.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "note",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "commit_hash",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "embeddings", kind: "scalar", T: 1, repeated: true }
]);
let CommitNoteWithEmbeddings = _CommitNoteWithEmbeddings;
const _CommitDiffString = class _CommitDiffString extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string diff = 1;
     */
    this.diff = "";
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _CommitDiffString().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _CommitDiffString().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _CommitDiffString().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_CommitDiffString, a, b);
  }
};
_CommitDiffString.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_CommitDiffString.typeName = "aiserver.v1.CommitDiffString";
_CommitDiffString.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "diff",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
let CommitDiffString = _CommitDiffString;
const _FullCommitNotes = class _FullCommitNotes extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: repeated aiserver.v1.CommitNote notes = 1;
     */
    this.notes = [];
    /**
     * @generated from field: string commit_hash = 2;
     */
    this.commitHash = "";
    /**
     * @generated from field: string repo_url = 3;
     */
    this.repoUrl = "";
    /**
     * @generated from field: string files_changed_relative_path = 4;
     */
    this.filesChangedRelativePath = "";
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _FullCommitNotes().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _FullCommitNotes().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _FullCommitNotes().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_FullCommitNotes, a, b);
  }
};
_FullCommitNotes.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_FullCommitNotes.typeName = "aiserver.v1.FullCommitNotes";
_FullCommitNotes.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  { no: 1, name: "notes", kind: "message", T: CommitNote, repeated: true },
  {
    no: 2,
    name: "commit_hash",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "repo_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "files_changed_relative_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
let FullCommitNotes = _FullCommitNotes;
const _CrossExtHostHeader = class _CrossExtHostHeader extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string key = 1;
     */
    this.key = "";
    /**
     * @generated from field: string value = 2;
     */
    this.value = "";
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _CrossExtHostHeader().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _CrossExtHostHeader().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _CrossExtHostHeader().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_CrossExtHostHeader, a, b);
  }
};
_CrossExtHostHeader.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_CrossExtHostHeader.typeName = "aiserver.v1.CrossExtHostHeader";
_CrossExtHostHeader.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "value",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
let CrossExtHostHeader = _CrossExtHostHeader;
const _CrossExtHostHeaders = class _CrossExtHostHeaders extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: repeated aiserver.v1.CrossExtHostHeader headers = 1;
     */
    this.headers = [];
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _CrossExtHostHeaders().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _CrossExtHostHeaders().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _CrossExtHostHeaders().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_CrossExtHostHeaders, a, b);
  }
};
_CrossExtHostHeaders.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_CrossExtHostHeaders.typeName = "aiserver.v1.CrossExtHostHeaders";
_CrossExtHostHeaders.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  { no: 1, name: "headers", kind: "message", T: CrossExtHostHeader, repeated: true }
]);
let CrossExtHostHeaders = _CrossExtHostHeaders;
const _SimpleUnaryCrossExtensionHostMessage = class _SimpleUnaryCrossExtensionHostMessage extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: bytes message = 1;
     */
    this.message = new Uint8Array(0);
    /**
     * @generated from field: bool is_error = 4;
     */
    this.isError = false;
    /**
     * @generated from field: string connect_error = 5;
     */
    this.connectError = "";
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _SimpleUnaryCrossExtensionHostMessage().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _SimpleUnaryCrossExtensionHostMessage().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _SimpleUnaryCrossExtensionHostMessage().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_SimpleUnaryCrossExtensionHostMessage, a, b);
  }
};
_SimpleUnaryCrossExtensionHostMessage.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_SimpleUnaryCrossExtensionHostMessage.typeName = "aiserver.v1.SimpleUnaryCrossExtensionHostMessage";
_SimpleUnaryCrossExtensionHostMessage.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "message",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  },
  { no: 2, name: "header", kind: "message", T: CrossExtHostHeaders },
  { no: 3, name: "trailer", kind: "message", T: CrossExtHostHeaders },
  {
    no: 4,
    name: "is_error",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 5,
    name: "connect_error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
let SimpleUnaryCrossExtensionHostMessage = _SimpleUnaryCrossExtensionHostMessage;
const _CodeChunk = class _CodeChunk extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string relative_workspace_path = 1;
     */
    this.relativeWorkspacePath = "";
    /**
     * the start_line is 1-indexed, and inclusive
     *
     * @generated from field: int32 start_line_number = 2;
     */
    this.startLineNumber = 0;
    /**
     * @generated from field: repeated string lines = 3;
     */
    this.lines = [];
    /**
     * we may have a language identifier too! it's fine if this is empty string
     *
     * @generated from field: string language_identifier = 5;
     */
    this.languageIdentifier = "";
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _CodeChunk().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _CodeChunk().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _CodeChunk().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_CodeChunk, a, b);
  }
};
_CodeChunk.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_CodeChunk.typeName = "aiserver.v1.CodeChunk";
_CodeChunk.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "start_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 3, name: "lines", kind: "scalar", T: 9, repeated: true },
  { no: 4, name: "summarization_strategy", kind: "enum", T: _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(CodeChunk_SummarizationStrategy), opt: true },
  {
    no: 5,
    name: "language_identifier",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 6, name: "intent", kind: "enum", T: _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(CodeChunk_Intent), opt: true },
  { no: 7, name: "is_final_version", kind: "scalar", T: 8, opt: true },
  { no: 8, name: "is_first_version", kind: "scalar", T: 8, opt: true }
]);
let CodeChunk = _CodeChunk;
var CodeChunk_Intent = /* @__PURE__ */ ((CodeChunk_Intent2) => {
  CodeChunk_Intent2[CodeChunk_Intent2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  CodeChunk_Intent2[CodeChunk_Intent2["COMPOSER_FILE"] = 1] = "COMPOSER_FILE";
  CodeChunk_Intent2[CodeChunk_Intent2["COMPRESSED_COMPOSER_FILE"] = 2] = "COMPRESSED_COMPOSER_FILE";
  return CodeChunk_Intent2;
})(CodeChunk_Intent || {});
_bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.setEnumType(CodeChunk_Intent, "aiserver.v1.CodeChunk.Intent", [
  { no: 0, name: "INTENT_UNSPECIFIED" },
  { no: 1, name: "INTENT_COMPOSER_FILE" },
  { no: 2, name: "INTENT_COMPRESSED_COMPOSER_FILE" }
]);
var CodeChunk_SummarizationStrategy = /* @__PURE__ */ ((CodeChunk_SummarizationStrategy2) => {
  CodeChunk_SummarizationStrategy2[CodeChunk_SummarizationStrategy2["NONE_UNSPECIFIED"] = 0] = "NONE_UNSPECIFIED";
  CodeChunk_SummarizationStrategy2[CodeChunk_SummarizationStrategy2["SUMMARIZED"] = 1] = "SUMMARIZED";
  CodeChunk_SummarizationStrategy2[CodeChunk_SummarizationStrategy2["EMBEDDED"] = 2] = "EMBEDDED";
  return CodeChunk_SummarizationStrategy2;
})(CodeChunk_SummarizationStrategy || {});
_bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.setEnumType(CodeChunk_SummarizationStrategy, "aiserver.v1.CodeChunk.SummarizationStrategy", [
  { no: 0, name: "SUMMARIZATION_STRATEGY_NONE_UNSPECIFIED" },
  { no: 1, name: "SUMMARIZATION_STRATEGY_SUMMARIZED" },
  { no: 2, name: "SUMMARIZATION_STRATEGY_EMBEDDED" }
]);
const _RCPCallFrame = class _RCPCallFrame extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _RCPCallFrame().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _RCPCallFrame().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _RCPCallFrame().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_RCPCallFrame, a, b);
  }
};
_RCPCallFrame.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_RCPCallFrame.typeName = "aiserver.v1.RCPCallFrame";
_RCPCallFrame.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  { no: 1, name: "function_name", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "url", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "line_number", kind: "scalar", T: 5, opt: true },
  { no: 4, name: "column_number", kind: "scalar", T: 5, opt: true }
]);
let RCPCallFrame = _RCPCallFrame;
const _RCPStackTrace = class _RCPStackTrace extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: repeated aiserver.v1.RCPCallFrame call_frames = 1;
     */
    this.callFrames = [];
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _RCPStackTrace().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _RCPStackTrace().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _RCPStackTrace().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_RCPStackTrace, a, b);
  }
};
_RCPStackTrace.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_RCPStackTrace.typeName = "aiserver.v1.RCPStackTrace";
_RCPStackTrace.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  { no: 1, name: "call_frames", kind: "message", T: RCPCallFrame, repeated: true },
  { no: 2, name: "raw_stack_trace", kind: "scalar", T: 9, opt: true }
]);
let RCPStackTrace = _RCPStackTrace;
const _RCPLogEntry = class _RCPLogEntry extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string message = 1;
     */
    this.message = "";
    /**
     * * Unix timestamp in milliseconds when this log entry was created 
     *
     * @generated from field: double timestamp = 2;
     */
    this.timestamp = 0;
    /**
     * @generated from field: string level = 3;
     */
    this.level = "";
    /**
     * @generated from field: string client_name = 4;
     */
    this.clientName = "";
    /**
     * @generated from field: string session_id = 5;
     */
    this.sessionId = "";
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _RCPLogEntry().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _RCPLogEntry().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _RCPLogEntry().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_RCPLogEntry, a, b);
  }
};
_RCPLogEntry.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_RCPLogEntry.typeName = "aiserver.v1.RCPLogEntry";
_RCPLogEntry.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "timestamp",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  },
  {
    no: 3,
    name: "level",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "client_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "session_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 6, name: "stack_trace", kind: "message", T: RCPStackTrace, opt: true },
  { no: 7, name: "object_data_json", kind: "scalar", T: 9, opt: true }
]);
let RCPLogEntry = _RCPLogEntry;
const _RCPUIElementPicked = class _RCPUIElementPicked extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string element = 1;
     */
    this.element = "";
    /**
     * @generated from field: string xpath = 2;
     */
    this.xpath = "";
    /**
     * @generated from field: string text_content = 3;
     */
    this.textContent = "";
    /**
     * @generated from field: string extra = 4;
     */
    this.extra = "";
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _RCPUIElementPicked().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _RCPUIElementPicked().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _RCPUIElementPicked().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_RCPUIElementPicked, a, b);
  }
};
_RCPUIElementPicked.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_RCPUIElementPicked.typeName = "aiserver.v1.RCPUIElementPicked";
_RCPUIElementPicked.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "element",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "xpath",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "text_content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "extra",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "component", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "component_props_json", kind: "scalar", T: 9, opt: true }
]);
let RCPUIElementPicked = _RCPUIElementPicked;
const _RCPChatMessage = class _RCPChatMessage extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from field: string text = 1;
     */
    this.text = "";
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _RCPChatMessage().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _RCPChatMessage().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _RCPChatMessage().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_RCPChatMessage, a, b);
  }
};
_RCPChatMessage.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_RCPChatMessage.typeName = "aiserver.v1.RCPChatMessage";
_RCPChatMessage.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
let RCPChatMessage = _RCPChatMessage;
const _RCPMessage = class _RCPMessage extends _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.Message {
  constructor(data) {
    super();
    /**
     * @generated from oneof aiserver.v1.RCPMessage.message
     */
    this.message = { case: void 0 };
    _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _RCPMessage().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _RCPMessage().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _RCPMessage().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_RCPMessage, a, b);
  }
};
_RCPMessage.runtime = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3;
_RCPMessage.typeName = "aiserver.v1.RCPMessage";
_RCPMessage.fields = _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(() => [
  { no: 1, name: "console", kind: "message", T: RCPLogEntry, oneof: "message" },
  { no: 2, name: "ui_element_picked", kind: "message", T: RCPUIElementPicked, oneof: "message" },
  { no: 3, name: "chat_message", kind: "message", T: RCPChatMessage, oneof: "message" }
]);
let RCPMessage = _RCPMessage;


/***/ }),
/* 6 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   proto3: () => (/* binding */ proto3)
/* harmony export */ });
/* harmony import */ var _private_proto_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _private_field_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _private_scalars_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _private_field_normalize_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.




/**
 * Provides functionality for messages defined with the proto3 syntax.
 */
const proto3 = (0,_private_proto_runtime_js__WEBPACK_IMPORTED_MODULE_0__.makeProtoRuntime)("proto3", (fields) => {
    return new _private_field_list_js__WEBPACK_IMPORTED_MODULE_1__.InternalFieldList(fields, (source) => (0,_private_field_normalize_js__WEBPACK_IMPORTED_MODULE_2__.normalizeFieldInfos)(source, true));
}, 
// TODO merge with proto2 and initExtensionField, also see initPartial, equals, clone
(target) => {
    for (const member of target.getType().fields.byMember()) {
        if (member.opt) {
            continue;
        }
        const name = member.localName, t = target;
        if (member.repeated) {
            t[name] = [];
            continue;
        }
        switch (member.kind) {
            case "oneof":
                t[name] = { case: undefined };
                break;
            case "enum":
                t[name] = 0;
                break;
            case "map":
                t[name] = {};
                break;
            case "scalar":
                t[name] = (0,_private_scalars_js__WEBPACK_IMPORTED_MODULE_3__.scalarZeroValue)(member.T, member.L);
                break;
            case "message":
                // message fields are always optional in proto3
                break;
        }
    }
});


/***/ }),
/* 7 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeProtoRuntime: () => (/* binding */ makeProtoRuntime)
/* harmony export */ });
/* harmony import */ var _enum_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _message_type_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _extensions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var _json_format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _binary_format_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var _util_common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.






function makeProtoRuntime(syntax, newFieldList, initFields) {
    return {
        syntax,
        json: (0,_json_format_js__WEBPACK_IMPORTED_MODULE_0__.makeJsonFormat)(),
        bin: (0,_binary_format_js__WEBPACK_IMPORTED_MODULE_1__.makeBinaryFormat)(),
        util: Object.assign(Object.assign({}, (0,_util_common_js__WEBPACK_IMPORTED_MODULE_2__.makeUtilCommon)()), { newFieldList,
            initFields }),
        makeMessageType(typeName, fields, opt) {
            return (0,_message_type_js__WEBPACK_IMPORTED_MODULE_3__.makeMessageType)(this, typeName, fields, opt);
        },
        makeEnum: _enum_js__WEBPACK_IMPORTED_MODULE_4__.makeEnum,
        makeEnumType: _enum_js__WEBPACK_IMPORTED_MODULE_4__.makeEnumType,
        getEnumType: _enum_js__WEBPACK_IMPORTED_MODULE_4__.getEnumType,
        makeExtension(typeName, extendee, field) {
            return (0,_extensions_js__WEBPACK_IMPORTED_MODULE_5__.makeExtension)(this, typeName, extendee, field);
        },
    };
}


/***/ }),
/* 8 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEnumType: () => (/* binding */ getEnumType),
/* harmony export */   makeEnum: () => (/* binding */ makeEnum),
/* harmony export */   makeEnumType: () => (/* binding */ makeEnumType),
/* harmony export */   setEnumType: () => (/* binding */ setEnumType)
/* harmony export */ });
/* harmony import */ var _assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const enumTypeSymbol = Symbol("@bufbuild/protobuf/enum-type");
/**
 * Get reflection information from a generated enum.
 * If this function is called on something other than a generated
 * enum, it raises an error.
 */
function getEnumType(enumObject) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-explicit-any
    const t = enumObject[enumTypeSymbol];
    (0,_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(t, "missing enum type on enum object");
    return t; // eslint-disable-line @typescript-eslint/no-unsafe-return
}
/**
 * Sets reflection information on a generated enum.
 */
function setEnumType(enumObject, typeName, values, opt) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
    enumObject[enumTypeSymbol] = makeEnumType(typeName, values.map((v) => ({
        no: v.no,
        name: v.name,
        localName: enumObject[v.no],
    })), opt);
}
/**
 * Create a new EnumType with the given values.
 */
function makeEnumType(typeName, values, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
_opt) {
    const names = Object.create(null);
    const numbers = Object.create(null);
    const normalValues = [];
    for (const value of values) {
        // We do not surface options at this time
        // const value: EnumValueInfo = {...v, options: v.options ?? emptyReadonlyObject};
        const n = normalizeEnumValue(value);
        normalValues.push(n);
        names[value.name] = n;
        numbers[value.no] = n;
    }
    return {
        typeName,
        values: normalValues,
        // We do not surface options at this time
        // options: opt?.options ?? Object.create(null),
        findName(name) {
            return names[name];
        },
        findNumber(no) {
            return numbers[no];
        },
    };
}
/**
 * Create a new enum object with the given values.
 * Sets reflection information.
 */
function makeEnum(typeName, values, opt) {
    const enumObject = {};
    for (const value of values) {
        const n = normalizeEnumValue(value);
        enumObject[n.localName] = n.no;
        enumObject[n.no] = n.localName;
    }
    setEnumType(enumObject, typeName, values, opt);
    return enumObject;
}
function normalizeEnumValue(value) {
    if ("localName" in value) {
        return value;
    }
    return Object.assign(Object.assign({}, value), { localName: value.name });
}


/***/ }),
/* 9 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assert: () => (/* binding */ assert),
/* harmony export */   assertFloat32: () => (/* binding */ assertFloat32),
/* harmony export */   assertInt32: () => (/* binding */ assertInt32),
/* harmony export */   assertUInt32: () => (/* binding */ assertUInt32)
/* harmony export */ });
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
/**
 * Assert that condition is truthy or throw error (with message)
 */
function assert(condition, msg) {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions -- we want the implicit conversion to boolean
    if (!condition) {
        throw new Error(msg);
    }
}
const FLOAT32_MAX = 3.4028234663852886e38, FLOAT32_MIN = -3.4028234663852886e38, UINT32_MAX = 0xffffffff, INT32_MAX = 0x7fffffff, INT32_MIN = -0x80000000;
/**
 * Assert a valid signed protobuf 32-bit integer.
 */
function assertInt32(arg) {
    if (typeof arg !== "number")
        throw new Error("invalid int 32: " + typeof arg);
    if (!Number.isInteger(arg) || arg > INT32_MAX || arg < INT32_MIN)
        throw new Error("invalid int 32: " + arg); // eslint-disable-line @typescript-eslint/restrict-plus-operands -- we want the implicit conversion to string
}
/**
 * Assert a valid unsigned protobuf 32-bit integer.
 */
function assertUInt32(arg) {
    if (typeof arg !== "number")
        throw new Error("invalid uint 32: " + typeof arg);
    if (!Number.isInteger(arg) || arg > UINT32_MAX || arg < 0)
        throw new Error("invalid uint 32: " + arg); // eslint-disable-line @typescript-eslint/restrict-plus-operands -- we want the implicit conversion to string
}
/**
 * Assert a valid protobuf float value.
 */
function assertFloat32(arg) {
    if (typeof arg !== "number")
        throw new Error("invalid float 32: " + typeof arg);
    if (!Number.isFinite(arg))
        return;
    if (arg > FLOAT32_MAX || arg < FLOAT32_MIN)
        throw new Error("invalid float 32: " + arg); // eslint-disable-line @typescript-eslint/restrict-plus-operands -- we want the implicit conversion to string
}


/***/ }),
/* 10 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeMessageType: () => (/* binding */ makeMessageType)
/* harmony export */ });
/* harmony import */ var _message_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Create a new message type using the given runtime.
 */
function makeMessageType(runtime, typeName, fields, opt) {
    var _a;
    const localName = (_a = opt === null || opt === void 0 ? void 0 : opt.localName) !== null && _a !== void 0 ? _a : typeName.substring(typeName.lastIndexOf(".") + 1);
    const type = {
        [localName]: function (data) {
            runtime.util.initFields(this);
            runtime.util.initPartial(data, this);
        },
    }[localName];
    Object.setPrototypeOf(type.prototype, new _message_js__WEBPACK_IMPORTED_MODULE_0__.Message());
    Object.assign(type, {
        runtime,
        typeName,
        fields: runtime.util.newFieldList(fields),
        fromBinary(bytes, options) {
            return new type().fromBinary(bytes, options);
        },
        fromJson(jsonValue, options) {
            return new type().fromJson(jsonValue, options);
        },
        fromJsonString(jsonString, options) {
            return new type().fromJsonString(jsonString, options);
        },
        equals(a, b) {
            return runtime.util.equals(type, a, b);
        },
    });
    return type;
}


/***/ }),
/* 11 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Message: () => (/* binding */ Message)
/* harmony export */ });
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
/**
 * Message is the base class of every message, generated, or created at
 * runtime.
 *
 * It is _not_ safe to extend this class. If you want to create a message at
 * run time, use proto3.makeMessageType().
 */
class Message {
    /**
     * Compare with a message of the same type.
     * Note that this function disregards extensions and unknown fields.
     */
    equals(other) {
        return this.getType().runtime.util.equals(this.getType(), this, other);
    }
    /**
     * Create a deep copy.
     */
    clone() {
        return this.getType().runtime.util.clone(this);
    }
    /**
     * Parse from binary data, merging fields.
     *
     * Repeated fields are appended. Map entries are added, overwriting
     * existing keys.
     *
     * If a message field is already present, it will be merged with the
     * new data.
     */
    fromBinary(bytes, options) {
        const type = this.getType(), format = type.runtime.bin, opt = format.makeReadOptions(options);
        format.readMessage(this, opt.readerFactory(bytes), bytes.byteLength, opt);
        return this;
    }
    /**
     * Parse a message from a JSON value.
     */
    fromJson(jsonValue, options) {
        const type = this.getType(), format = type.runtime.json, opt = format.makeReadOptions(options);
        format.readMessage(type, jsonValue, opt, this);
        return this;
    }
    /**
     * Parse a message from a JSON string.
     */
    fromJsonString(jsonString, options) {
        let json;
        try {
            json = JSON.parse(jsonString);
        }
        catch (e) {
            throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${e instanceof Error ? e.message : String(e)}`);
        }
        return this.fromJson(json, options);
    }
    /**
     * Serialize the message to binary data.
     */
    toBinary(options) {
        const type = this.getType(), bin = type.runtime.bin, opt = bin.makeWriteOptions(options), writer = opt.writerFactory();
        bin.writeMessage(this, writer, opt);
        return writer.finish();
    }
    /**
     * Serialize the message to a JSON value, a JavaScript value that can be
     * passed to JSON.stringify().
     */
    toJson(options) {
        const type = this.getType(), json = type.runtime.json, opt = json.makeWriteOptions(options);
        return json.writeMessage(this, opt);
    }
    /**
     * Serialize the message to a JSON string.
     */
    toJsonString(options) {
        var _a;
        const value = this.toJson(options);
        return JSON.stringify(value, null, (_a = options === null || options === void 0 ? void 0 : options.prettySpaces) !== null && _a !== void 0 ? _a : 0);
    }
    /**
     * Override for serialization behavior. This will be invoked when calling
     * JSON.stringify on this message (i.e. JSON.stringify(msg)).
     *
     * Note that this will not serialize google.protobuf.Any with a packed
     * message because the protobuf JSON format specifies that it needs to be
     * unpacked, and this is only possible with a type registry to look up the
     * message type.  As a result, attempting to serialize a message with this
     * type will throw an Error.
     *
     * This method is protected because you should not need to invoke it
     * directly -- instead use JSON.stringify or toJsonString for
     * stringified JSON.  Alternatively, if actual JSON is desired, you should
     * use toJson.
     */
    toJSON() {
        return this.toJson({
            emitDefaultValues: true,
        });
    }
    /**
     * Retrieve the MessageType of this message - a singleton that represents
     * the protobuf message declaration and provides metadata for reflection-
     * based operations.
     */
    getType() {
        // Any class that extends Message _must_ provide a complete static
        // implementation of MessageType.
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return
        return Object.getPrototypeOf(this).constructor;
    }
}


/***/ }),
/* 12 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createExtensionContainer: () => (/* binding */ createExtensionContainer),
/* harmony export */   filterUnknownFields: () => (/* binding */ filterUnknownFields),
/* harmony export */   makeExtension: () => (/* binding */ makeExtension)
/* harmony export */ });
/* harmony import */ var _scalars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


/**
 * Create a new extension using the given runtime.
 */
function makeExtension(runtime, typeName, extendee, field) {
    let fi;
    return {
        typeName,
        extendee,
        get field() {
            if (!fi) {
                const i = (typeof field == "function" ? field() : field);
                i.name = typeName.split(".").pop();
                i.jsonName = `[${typeName}]`;
                fi = runtime.util.newFieldList([i]).list()[0];
            }
            return fi;
        },
        runtime,
    };
}
/**
 * Create a container that allows us to read extension fields into it with the
 * same logic as regular fields.
 */
function createExtensionContainer(extension) {
    const localName = extension.field.localName;
    const container = Object.create(null);
    container[localName] = initExtensionField(extension);
    return [container, () => container[localName]];
}
function initExtensionField(ext) {
    const field = ext.field;
    if (field.repeated) {
        return [];
    }
    if (field.default !== undefined) {
        return field.default;
    }
    switch (field.kind) {
        case "enum":
            return field.T.values[0].no;
        case "scalar":
            return (0,_scalars_js__WEBPACK_IMPORTED_MODULE_0__.scalarZeroValue)(field.T, field.L);
        case "message":
            // eslint-disable-next-line no-case-declarations
            const T = field.T, value = new T();
            return T.fieldWrapper ? T.fieldWrapper.unwrapField(value) : value;
        case "map":
            throw "map fields are not allowed to be extensions";
    }
}
/**
 * Helper to filter unknown fields, optimized based on field type.
 */
function filterUnknownFields(unknownFields, field) {
    if (!field.repeated && (field.kind == "enum" || field.kind == "scalar")) {
        // singular scalar fields do not merge, we pick the last
        for (let i = unknownFields.length - 1; i >= 0; --i) {
            if (unknownFields[i].no == field.no) {
                return [unknownFields[i]];
            }
        }
        return [];
    }
    return unknownFields.filter((uf) => uf.no === field.no);
}


/***/ }),
/* 13 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isScalarZeroValue: () => (/* binding */ isScalarZeroValue),
/* harmony export */   scalarEquals: () => (/* binding */ scalarEquals),
/* harmony export */   scalarZeroValue: () => (/* binding */ scalarZeroValue)
/* harmony export */ });
/* harmony import */ var _proto_int64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _scalar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


/**
 * Returns true if both scalar values are equal.
 */
function scalarEquals(type, a, b) {
    if (a === b) {
        // This correctly matches equal values except BYTES and (possibly) 64-bit integers.
        return true;
    }
    // Special case BYTES - we need to compare each byte individually
    if (type == _scalar_js__WEBPACK_IMPORTED_MODULE_0__.ScalarType.BYTES) {
        if (!(a instanceof Uint8Array) || !(b instanceof Uint8Array)) {
            return false;
        }
        if (a.length !== b.length) {
            return false;
        }
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return false;
            }
        }
        return true;
    }
    // Special case 64-bit integers - we support number, string and bigint representation.
    // eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check
    switch (type) {
        case _scalar_js__WEBPACK_IMPORTED_MODULE_0__.ScalarType.UINT64:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_0__.ScalarType.FIXED64:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_0__.ScalarType.INT64:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_0__.ScalarType.SFIXED64:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_0__.ScalarType.SINT64:
            // Loose comparison will match between 0n, 0 and "0".
            return a == b;
    }
    // Anything that hasn't been caught by strict comparison or special cased
    // BYTES and 64-bit integers is not equal.
    return false;
}
/**
 * Returns the zero value for the given scalar type.
 */
function scalarZeroValue(type, longType) {
    switch (type) {
        case _scalar_js__WEBPACK_IMPORTED_MODULE_0__.ScalarType.BOOL:
            return false;
        case _scalar_js__WEBPACK_IMPORTED_MODULE_0__.ScalarType.UINT64:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_0__.ScalarType.FIXED64:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_0__.ScalarType.INT64:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_0__.ScalarType.SFIXED64:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_0__.ScalarType.SINT64:
            // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison -- acceptable since it's covered by tests
            return (longType == 0 ? _proto_int64_js__WEBPACK_IMPORTED_MODULE_1__.protoInt64.zero : "0");
        case _scalar_js__WEBPACK_IMPORTED_MODULE_0__.ScalarType.DOUBLE:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_0__.ScalarType.FLOAT:
            return 0.0;
        case _scalar_js__WEBPACK_IMPORTED_MODULE_0__.ScalarType.BYTES:
            return new Uint8Array(0);
        case _scalar_js__WEBPACK_IMPORTED_MODULE_0__.ScalarType.STRING:
            return "";
        default:
            // Handles INT32, UINT32, SINT32, FIXED32, SFIXED32.
            // We do not use individual cases to save a few bytes code size.
            return 0;
    }
}
/**
 * Returns true for a zero-value. For example, an integer has the zero-value `0`,
 * a boolean is `false`, a string is `""`, and bytes is an empty Uint8Array.
 *
 * In proto3, zero-values are not written to the wire, unless the field is
 * optional or repeated.
 */
function isScalarZeroValue(type, value) {
    switch (type) {
        case _scalar_js__WEBPACK_IMPORTED_MODULE_0__.ScalarType.BOOL:
            return value === false;
        case _scalar_js__WEBPACK_IMPORTED_MODULE_0__.ScalarType.STRING:
            return value === "";
        case _scalar_js__WEBPACK_IMPORTED_MODULE_0__.ScalarType.BYTES:
            return value instanceof Uint8Array && !value.byteLength;
        default:
            return value == 0; // Loose comparison matches 0n, 0 and "0"
    }
}


/***/ }),
/* 14 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   protoInt64: () => (/* binding */ protoInt64)
/* harmony export */ });
/* harmony import */ var _private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _google_varint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


function makeInt64Support() {
    const dv = new DataView(new ArrayBuffer(8));
    // note that Safari 14 implements BigInt, but not the DataView methods
    const ok = typeof BigInt === "function" &&
        typeof dv.getBigInt64 === "function" &&
        typeof dv.getBigUint64 === "function" &&
        typeof dv.setBigInt64 === "function" &&
        typeof dv.setBigUint64 === "function" &&
        (typeof process != "object" ||
            typeof {} != "object" ||
            {}.BUF_BIGINT_DISABLE !== "1");
    if (ok) {
        const MIN = BigInt("-9223372036854775808"), MAX = BigInt("9223372036854775807"), UMIN = BigInt("0"), UMAX = BigInt("18446744073709551615");
        return {
            zero: BigInt(0),
            supported: true,
            parse(value) {
                const bi = typeof value == "bigint" ? value : BigInt(value);
                if (bi > MAX || bi < MIN) {
                    throw new Error(`int64 invalid: ${value}`);
                }
                return bi;
            },
            uParse(value) {
                const bi = typeof value == "bigint" ? value : BigInt(value);
                if (bi > UMAX || bi < UMIN) {
                    throw new Error(`uint64 invalid: ${value}`);
                }
                return bi;
            },
            enc(value) {
                dv.setBigInt64(0, this.parse(value), true);
                return {
                    lo: dv.getInt32(0, true),
                    hi: dv.getInt32(4, true),
                };
            },
            uEnc(value) {
                dv.setBigInt64(0, this.uParse(value), true);
                return {
                    lo: dv.getInt32(0, true),
                    hi: dv.getInt32(4, true),
                };
            },
            dec(lo, hi) {
                dv.setInt32(0, lo, true);
                dv.setInt32(4, hi, true);
                return dv.getBigInt64(0, true);
            },
            uDec(lo, hi) {
                dv.setInt32(0, lo, true);
                dv.setInt32(4, hi, true);
                return dv.getBigUint64(0, true);
            },
        };
    }
    const assertInt64String = (value) => (0,_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(/^-?[0-9]+$/.test(value), `int64 invalid: ${value}`);
    const assertUInt64String = (value) => (0,_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(/^[0-9]+$/.test(value), `uint64 invalid: ${value}`);
    return {
        zero: "0",
        supported: false,
        parse(value) {
            if (typeof value != "string") {
                value = value.toString();
            }
            assertInt64String(value);
            return value;
        },
        uParse(value) {
            if (typeof value != "string") {
                value = value.toString();
            }
            assertUInt64String(value);
            return value;
        },
        enc(value) {
            if (typeof value != "string") {
                value = value.toString();
            }
            assertInt64String(value);
            return (0,_google_varint_js__WEBPACK_IMPORTED_MODULE_1__.int64FromString)(value);
        },
        uEnc(value) {
            if (typeof value != "string") {
                value = value.toString();
            }
            assertUInt64String(value);
            return (0,_google_varint_js__WEBPACK_IMPORTED_MODULE_1__.int64FromString)(value);
        },
        dec(lo, hi) {
            return (0,_google_varint_js__WEBPACK_IMPORTED_MODULE_1__.int64ToString)(lo, hi);
        },
        uDec(lo, hi) {
            return (0,_google_varint_js__WEBPACK_IMPORTED_MODULE_1__.uInt64ToString)(lo, hi);
        },
    };
}
const protoInt64 = makeInt64Support();


/***/ }),
/* 15 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   int64FromString: () => (/* binding */ int64FromString),
/* harmony export */   int64ToString: () => (/* binding */ int64ToString),
/* harmony export */   uInt64ToString: () => (/* binding */ uInt64ToString),
/* harmony export */   varint32read: () => (/* binding */ varint32read),
/* harmony export */   varint32write: () => (/* binding */ varint32write),
/* harmony export */   varint64read: () => (/* binding */ varint64read),
/* harmony export */   varint64write: () => (/* binding */ varint64write)
/* harmony export */ });
// Copyright 2008 Google Inc.  All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
// * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
// * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
// * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
// Code generated by the Protocol Buffer compiler is owned by the owner
// of the input file used when generating it.  This code is not
// standalone and requires a support library to be linked with it.  This
// support library is itself covered by the above license.
/* eslint-disable prefer-const,@typescript-eslint/restrict-plus-operands */
/**
 * Read a 64 bit varint as two JS numbers.
 *
 * Returns tuple:
 * [0]: low bits
 * [1]: high bits
 *
 * Copyright 2008 Google Inc.  All rights reserved.
 *
 * See https://github.com/protocolbuffers/protobuf/blob/8a71927d74a4ce34efe2d8769fda198f52d20d12/js/experimental/runtime/kernel/buffer_decoder.js#L175
 */
function varint64read() {
    let lowBits = 0;
    let highBits = 0;
    for (let shift = 0; shift < 28; shift += 7) {
        let b = this.buf[this.pos++];
        lowBits |= (b & 0x7f) << shift;
        if ((b & 0x80) == 0) {
            this.assertBounds();
            return [lowBits, highBits];
        }
    }
    let middleByte = this.buf[this.pos++];
    // last four bits of the first 32 bit number
    lowBits |= (middleByte & 0x0f) << 28;
    // 3 upper bits are part of the next 32 bit number
    highBits = (middleByte & 0x70) >> 4;
    if ((middleByte & 0x80) == 0) {
        this.assertBounds();
        return [lowBits, highBits];
    }
    for (let shift = 3; shift <= 31; shift += 7) {
        let b = this.buf[this.pos++];
        highBits |= (b & 0x7f) << shift;
        if ((b & 0x80) == 0) {
            this.assertBounds();
            return [lowBits, highBits];
        }
    }
    throw new Error("invalid varint");
}
/**
 * Write a 64 bit varint, given as two JS numbers, to the given bytes array.
 *
 * Copyright 2008 Google Inc.  All rights reserved.
 *
 * See https://github.com/protocolbuffers/protobuf/blob/8a71927d74a4ce34efe2d8769fda198f52d20d12/js/experimental/runtime/kernel/writer.js#L344
 */
function varint64write(lo, hi, bytes) {
    for (let i = 0; i < 28; i = i + 7) {
        const shift = lo >>> i;
        const hasNext = !(shift >>> 7 == 0 && hi == 0);
        const byte = (hasNext ? shift | 0x80 : shift) & 0xff;
        bytes.push(byte);
        if (!hasNext) {
            return;
        }
    }
    const splitBits = ((lo >>> 28) & 0x0f) | ((hi & 0x07) << 4);
    const hasMoreBits = !(hi >> 3 == 0);
    bytes.push((hasMoreBits ? splitBits | 0x80 : splitBits) & 0xff);
    if (!hasMoreBits) {
        return;
    }
    for (let i = 3; i < 31; i = i + 7) {
        const shift = hi >>> i;
        const hasNext = !(shift >>> 7 == 0);
        const byte = (hasNext ? shift | 0x80 : shift) & 0xff;
        bytes.push(byte);
        if (!hasNext) {
            return;
        }
    }
    bytes.push((hi >>> 31) & 0x01);
}
// constants for binary math
const TWO_PWR_32_DBL = 0x100000000;
/**
 * Parse decimal string of 64 bit integer value as two JS numbers.
 *
 * Copyright 2008 Google Inc.  All rights reserved.
 *
 * See https://github.com/protocolbuffers/protobuf-javascript/blob/a428c58273abad07c66071d9753bc4d1289de426/experimental/runtime/int64.js#L10
 */
function int64FromString(dec) {
    // Check for minus sign.
    const minus = dec[0] === "-";
    if (minus) {
        dec = dec.slice(1);
    }
    // Work 6 decimal digits at a time, acting like we're converting base 1e6
    // digits to binary. This is safe to do with floating point math because
    // Number.isSafeInteger(ALL_32_BITS * 1e6) == true.
    const base = 1e6;
    let lowBits = 0;
    let highBits = 0;
    function add1e6digit(begin, end) {
        // Note: Number('') is 0.
        const digit1e6 = Number(dec.slice(begin, end));
        highBits *= base;
        lowBits = lowBits * base + digit1e6;
        // Carry bits from lowBits to
        if (lowBits >= TWO_PWR_32_DBL) {
            highBits = highBits + ((lowBits / TWO_PWR_32_DBL) | 0);
            lowBits = lowBits % TWO_PWR_32_DBL;
        }
    }
    add1e6digit(-24, -18);
    add1e6digit(-18, -12);
    add1e6digit(-12, -6);
    add1e6digit(-6);
    return minus ? negate(lowBits, highBits) : newBits(lowBits, highBits);
}
/**
 * Losslessly converts a 64-bit signed integer in 32:32 split representation
 * into a decimal string.
 *
 * Copyright 2008 Google Inc.  All rights reserved.
 *
 * See https://github.com/protocolbuffers/protobuf-javascript/blob/a428c58273abad07c66071d9753bc4d1289de426/experimental/runtime/int64.js#L10
 */
function int64ToString(lo, hi) {
    let bits = newBits(lo, hi);
    // If we're treating the input as a signed value and the high bit is set, do
    // a manual two's complement conversion before the decimal conversion.
    const negative = (bits.hi & 0x80000000);
    if (negative) {
        bits = negate(bits.lo, bits.hi);
    }
    const result = uInt64ToString(bits.lo, bits.hi);
    return negative ? "-" + result : result;
}
/**
 * Losslessly converts a 64-bit unsigned integer in 32:32 split representation
 * into a decimal string.
 *
 * Copyright 2008 Google Inc.  All rights reserved.
 *
 * See https://github.com/protocolbuffers/protobuf-javascript/blob/a428c58273abad07c66071d9753bc4d1289de426/experimental/runtime/int64.js#L10
 */
function uInt64ToString(lo, hi) {
    ({ lo, hi } = toUnsigned(lo, hi));
    // Skip the expensive conversion if the number is small enough to use the
    // built-in conversions.
    // Number.MAX_SAFE_INTEGER = 0x001FFFFF FFFFFFFF, thus any number with
    // highBits <= 0x1FFFFF can be safely expressed with a double and retain
    // integer precision.
    // Proven by: Number.isSafeInteger(0x1FFFFF * 2**32 + 0xFFFFFFFF) == true.
    if (hi <= 0x1FFFFF) {
        return String(TWO_PWR_32_DBL * hi + lo);
    }
    // What this code is doing is essentially converting the input number from
    // base-2 to base-1e7, which allows us to represent the 64-bit range with
    // only 3 (very large) digits. Those digits are then trivial to convert to
    // a base-10 string.
    // The magic numbers used here are -
    // 2^24 = 16777216 = (1,6777216) in base-1e7.
    // 2^48 = 281474976710656 = (2,8147497,6710656) in base-1e7.
    // Split 32:32 representation into 16:24:24 representation so our
    // intermediate digits don't overflow.
    const low = lo & 0xFFFFFF;
    const mid = ((lo >>> 24) | (hi << 8)) & 0xFFFFFF;
    const high = (hi >> 16) & 0xFFFF;
    // Assemble our three base-1e7 digits, ignoring carries. The maximum
    // value in a digit at this step is representable as a 48-bit integer, which
    // can be stored in a 64-bit floating point number.
    let digitA = low + (mid * 6777216) + (high * 6710656);
    let digitB = mid + (high * 8147497);
    let digitC = (high * 2);
    // Apply carries from A to B and from B to C.
    const base = 10000000;
    if (digitA >= base) {
        digitB += Math.floor(digitA / base);
        digitA %= base;
    }
    if (digitB >= base) {
        digitC += Math.floor(digitB / base);
        digitB %= base;
    }
    // If digitC is 0, then we should have returned in the trivial code path
    // at the top for non-safe integers. Given this, we can assume both digitB
    // and digitA need leading zeros.
    return digitC.toString() + decimalFrom1e7WithLeadingZeros(digitB) +
        decimalFrom1e7WithLeadingZeros(digitA);
}
function toUnsigned(lo, hi) {
    return { lo: lo >>> 0, hi: hi >>> 0 };
}
function newBits(lo, hi) {
    return { lo: lo | 0, hi: hi | 0 };
}
/**
 * Returns two's compliment negation of input.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Signed_32-bit_integers
 */
function negate(lowBits, highBits) {
    highBits = ~highBits;
    if (lowBits) {
        lowBits = ~lowBits + 1;
    }
    else {
        // If lowBits is 0, then bitwise-not is 0xFFFFFFFF,
        // adding 1 to that, results in 0x100000000, which leaves
        // the low bits 0x0 and simply adds one to the high bits.
        highBits += 1;
    }
    return newBits(lowBits, highBits);
}
/**
 * Returns decimal representation of digit1e7 with leading zeros.
 */
const decimalFrom1e7WithLeadingZeros = (digit1e7) => {
    const partial = String(digit1e7);
    return "0000000".slice(partial.length) + partial;
};
/**
 * Write a 32 bit varint, signed or unsigned. Same as `varint64write(0, value, bytes)`
 *
 * Copyright 2008 Google Inc.  All rights reserved.
 *
 * See https://github.com/protocolbuffers/protobuf/blob/1b18833f4f2a2f681f4e4a25cdf3b0a43115ec26/js/binary/encoder.js#L144
 */
function varint32write(value, bytes) {
    if (value >= 0) {
        // write value as varint 32
        while (value > 0x7f) {
            bytes.push((value & 0x7f) | 0x80);
            value = value >>> 7;
        }
        bytes.push(value);
    }
    else {
        for (let i = 0; i < 9; i++) {
            bytes.push((value & 127) | 128);
            value = value >> 7;
        }
        bytes.push(1);
    }
}
/**
 * Read an unsigned 32 bit varint.
 *
 * See https://github.com/protocolbuffers/protobuf/blob/8a71927d74a4ce34efe2d8769fda198f52d20d12/js/experimental/runtime/kernel/buffer_decoder.js#L220
 */
function varint32read() {
    let b = this.buf[this.pos++];
    let result = b & 0x7f;
    if ((b & 0x80) == 0) {
        this.assertBounds();
        return result;
    }
    b = this.buf[this.pos++];
    result |= (b & 0x7f) << 7;
    if ((b & 0x80) == 0) {
        this.assertBounds();
        return result;
    }
    b = this.buf[this.pos++];
    result |= (b & 0x7f) << 14;
    if ((b & 0x80) == 0) {
        this.assertBounds();
        return result;
    }
    b = this.buf[this.pos++];
    result |= (b & 0x7f) << 21;
    if ((b & 0x80) == 0) {
        this.assertBounds();
        return result;
    }
    // Extract only last 4 bits
    b = this.buf[this.pos++];
    result |= (b & 0x0f) << 28;
    for (let readBytes = 5; (b & 0x80) !== 0 && readBytes < 10; readBytes++)
        b = this.buf[this.pos++];
    if ((b & 0x80) != 0)
        throw new Error("invalid varint");
    this.assertBounds();
    // Result can have 32 bits, convert it to unsigned
    return result >>> 0;
}


/***/ }),
/* 16 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LongType: () => (/* binding */ LongType),
/* harmony export */   ScalarType: () => (/* binding */ ScalarType)
/* harmony export */ });
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
/**
 * Scalar value types. This is a subset of field types declared by protobuf
 * enum google.protobuf.FieldDescriptorProto.Type The types GROUP and MESSAGE
 * are omitted, but the numerical values are identical.
 */
var ScalarType;
(function (ScalarType) {
    // 0 is reserved for errors.
    // Order is weird for historical reasons.
    ScalarType[ScalarType["DOUBLE"] = 1] = "DOUBLE";
    ScalarType[ScalarType["FLOAT"] = 2] = "FLOAT";
    // Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT64 if
    // negative values are likely.
    ScalarType[ScalarType["INT64"] = 3] = "INT64";
    ScalarType[ScalarType["UINT64"] = 4] = "UINT64";
    // Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT32 if
    // negative values are likely.
    ScalarType[ScalarType["INT32"] = 5] = "INT32";
    ScalarType[ScalarType["FIXED64"] = 6] = "FIXED64";
    ScalarType[ScalarType["FIXED32"] = 7] = "FIXED32";
    ScalarType[ScalarType["BOOL"] = 8] = "BOOL";
    ScalarType[ScalarType["STRING"] = 9] = "STRING";
    // Tag-delimited aggregate.
    // Group type is deprecated and not supported in proto3. However, Proto3
    // implementations should still be able to parse the group wire format and
    // treat group fields as unknown fields.
    // TYPE_GROUP = 10,
    // TYPE_MESSAGE = 11,  // Length-delimited aggregate.
    // New in version 2.
    ScalarType[ScalarType["BYTES"] = 12] = "BYTES";
    ScalarType[ScalarType["UINT32"] = 13] = "UINT32";
    // TYPE_ENUM = 14,
    ScalarType[ScalarType["SFIXED32"] = 15] = "SFIXED32";
    ScalarType[ScalarType["SFIXED64"] = 16] = "SFIXED64";
    ScalarType[ScalarType["SINT32"] = 17] = "SINT32";
    ScalarType[ScalarType["SINT64"] = 18] = "SINT64";
})(ScalarType || (ScalarType = {}));
/**
 * JavaScript representation of fields with 64 bit integral types (int64, uint64,
 * sint64, fixed64, sfixed64).
 *
 * This is a subset of google.protobuf.FieldOptions.JSType, which defines JS_NORMAL,
 * JS_STRING, and JS_NUMBER. Protobuf-ES uses BigInt by default, but will use
 * String if `[jstype = JS_STRING]` is specified.
 *
 * ```protobuf
 * uint64 field_a = 1; // BigInt
 * uint64 field_b = 2 [jstype = JS_NORMAL]; // BigInt
 * uint64 field_b = 2 [jstype = JS_NUMBER]; // BigInt
 * uint64 field_b = 2 [jstype = JS_STRING]; // String
 * ```
 */
var LongType;
(function (LongType) {
    /**
     * Use JavaScript BigInt.
     */
    LongType[LongType["BIGINT"] = 0] = "BIGINT";
    /**
     * Use JavaScript String.
     *
     * Field option `[jstype = JS_STRING]`.
     */
    LongType[LongType["STRING"] = 1] = "STRING";
})(LongType || (LongType = {}));


/***/ }),
/* 17 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeJsonFormat: () => (/* binding */ makeJsonFormat)
/* harmony export */ });
/* harmony import */ var _assert_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _proto_int64_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14);
/* harmony import */ var _proto_base64_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18);
/* harmony import */ var _extensions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _extension_accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _reflect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _field_wrapper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21);
/* harmony import */ var _scalars_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _scalar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _is_message_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22);
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.












/* eslint-disable no-case-declarations,@typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call */
// Default options for parsing JSON.
const jsonReadDefaults = {
    ignoreUnknownFields: false,
};
// Default options for serializing to JSON.
const jsonWriteDefaults = {
    emitDefaultValues: false,
    enumAsInteger: false,
    useProtoFieldName: false,
    prettySpaces: 0,
};
function makeReadOptions(options) {
    return options ? Object.assign(Object.assign({}, jsonReadDefaults), options) : jsonReadDefaults;
}
function makeWriteOptions(options) {
    return options ? Object.assign(Object.assign({}, jsonWriteDefaults), options) : jsonWriteDefaults;
}
const tokenNull = Symbol();
const tokenIgnoredUnknownEnum = Symbol();
function makeJsonFormat() {
    return {
        makeReadOptions,
        makeWriteOptions,
        readMessage(type, json, options, message) {
            if (json == null || Array.isArray(json) || typeof json != "object") {
                throw new Error(`cannot decode message ${type.typeName} from JSON: ${debugJsonValue(json)}`);
            }
            message = message !== null && message !== void 0 ? message : new type();
            const oneofSeen = new Map();
            const registry = options.typeRegistry;
            for (const [jsonKey, jsonValue] of Object.entries(json)) {
                const field = type.fields.findJsonName(jsonKey);
                if (field) {
                    if (field.oneof) {
                        if (jsonValue === null && field.kind == "scalar") {
                            // see conformance test Required.Proto3.JsonInput.OneofFieldNull{First,Second}
                            continue;
                        }
                        const seen = oneofSeen.get(field.oneof);
                        if (seen !== undefined) {
                            throw new Error(`cannot decode message ${type.typeName} from JSON: multiple keys for oneof "${field.oneof.name}" present: "${seen}", "${jsonKey}"`);
                        }
                        oneofSeen.set(field.oneof, jsonKey);
                    }
                    readField(message, jsonValue, field, options, type);
                }
                else {
                    let found = false;
                    if ((registry === null || registry === void 0 ? void 0 : registry.findExtension) &&
                        jsonKey.startsWith("[") &&
                        jsonKey.endsWith("]")) {
                        const ext = registry.findExtension(jsonKey.substring(1, jsonKey.length - 1));
                        if (ext && ext.extendee.typeName == type.typeName) {
                            found = true;
                            const [container, get] = (0,_extensions_js__WEBPACK_IMPORTED_MODULE_0__.createExtensionContainer)(ext);
                            readField(container, jsonValue, ext.field, options, ext);
                            // We pass on the options as BinaryReadOptions/BinaryWriteOptions,
                            // so that users can bring their own binary reader and writer factories
                            // if necessary.
                            (0,_extension_accessor_js__WEBPACK_IMPORTED_MODULE_1__.setExtension)(message, ext, get(), options);
                        }
                    }
                    if (!found && !options.ignoreUnknownFields) {
                        throw new Error(`cannot decode message ${type.typeName} from JSON: key "${jsonKey}" is unknown`);
                    }
                }
            }
            return message;
        },
        writeMessage(message, options) {
            const type = message.getType();
            const json = {};
            let field;
            try {
                for (field of type.fields.byNumber()) {
                    if (!(0,_reflect_js__WEBPACK_IMPORTED_MODULE_2__.isFieldSet)(field, message)) {
                        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                        if (field.req) {
                            throw `required field not set`;
                        }
                        if (!options.emitDefaultValues) {
                            continue;
                        }
                        if (!canEmitFieldDefaultValue(field)) {
                            continue;
                        }
                    }
                    const value = field.oneof
                        ? message[field.oneof.localName].value
                        : message[field.localName];
                    const jsonValue = writeField(field, value, options);
                    if (jsonValue !== undefined) {
                        json[options.useProtoFieldName ? field.name : field.jsonName] =
                            jsonValue;
                    }
                }
                const registry = options.typeRegistry;
                if (registry === null || registry === void 0 ? void 0 : registry.findExtensionFor) {
                    for (const uf of type.runtime.bin.listUnknownFields(message)) {
                        const ext = registry.findExtensionFor(type.typeName, uf.no);
                        if (ext && (0,_extension_accessor_js__WEBPACK_IMPORTED_MODULE_1__.hasExtension)(message, ext)) {
                            // We pass on the options as BinaryReadOptions, so that users can bring their own
                            // binary reader factory if necessary.
                            const value = (0,_extension_accessor_js__WEBPACK_IMPORTED_MODULE_1__.getExtension)(message, ext, options);
                            const jsonValue = writeField(ext.field, value, options);
                            if (jsonValue !== undefined) {
                                json[ext.field.jsonName] = jsonValue;
                            }
                        }
                    }
                }
            }
            catch (e) {
                const m = field
                    ? `cannot encode field ${type.typeName}.${field.name} to JSON`
                    : `cannot encode message ${type.typeName} to JSON`;
                const r = e instanceof Error ? e.message : String(e);
                throw new Error(m + (r.length > 0 ? `: ${r}` : ""));
            }
            return json;
        },
        readScalar(type, json, longType) {
            // The signature of our internal function has changed. For backwards-
            // compatibility, we support the old form that is part of the public API
            // through the interface JsonFormat.
            return readScalar(type, json, longType !== null && longType !== void 0 ? longType : _scalar_js__WEBPACK_IMPORTED_MODULE_3__.LongType.BIGINT, true);
        },
        writeScalar(type, value, emitDefaultValues) {
            // The signature of our internal function has changed. For backwards-
            // compatibility, we support the old form that is part of the public API
            // through the interface JsonFormat.
            if (value === undefined) {
                return undefined;
            }
            if (emitDefaultValues || (0,_scalars_js__WEBPACK_IMPORTED_MODULE_4__.isScalarZeroValue)(type, value)) {
                return writeScalar(type, value);
            }
            return undefined;
        },
        debug: debugJsonValue,
    };
}
function debugJsonValue(json) {
    if (json === null) {
        return "null";
    }
    switch (typeof json) {
        case "object":
            return Array.isArray(json) ? "array" : "object";
        case "string":
            return json.length > 100 ? "string" : `"${json.split('"').join('\\"')}"`;
        default:
            return String(json);
    }
}
// Read a JSON value for a field.
// The "parentType" argument is only used to provide context in errors.
function readField(target, jsonValue, field, options, parentType) {
    let localName = field.localName;
    if (field.repeated) {
        (0,_assert_js__WEBPACK_IMPORTED_MODULE_5__.assert)(field.kind != "map");
        if (jsonValue === null) {
            return;
        }
        if (!Array.isArray(jsonValue)) {
            throw new Error(`cannot decode field ${parentType.typeName}.${field.name} from JSON: ${debugJsonValue(jsonValue)}`);
        }
        const targetArray = target[localName];
        for (const jsonItem of jsonValue) {
            if (jsonItem === null) {
                throw new Error(`cannot decode field ${parentType.typeName}.${field.name} from JSON: ${debugJsonValue(jsonItem)}`);
            }
            switch (field.kind) {
                case "message":
                    targetArray.push(field.T.fromJson(jsonItem, options));
                    break;
                case "enum":
                    const enumValue = readEnum(field.T, jsonItem, options.ignoreUnknownFields, true);
                    if (enumValue !== tokenIgnoredUnknownEnum) {
                        targetArray.push(enumValue);
                    }
                    break;
                case "scalar":
                    try {
                        targetArray.push(readScalar(field.T, jsonItem, field.L, true));
                    }
                    catch (e) {
                        let m = `cannot decode field ${parentType.typeName}.${field.name} from JSON: ${debugJsonValue(jsonItem)}`;
                        if (e instanceof Error && e.message.length > 0) {
                            m += `: ${e.message}`;
                        }
                        throw new Error(m);
                    }
                    break;
            }
        }
    }
    else if (field.kind == "map") {
        if (jsonValue === null) {
            return;
        }
        if (typeof jsonValue != "object" || Array.isArray(jsonValue)) {
            throw new Error(`cannot decode field ${parentType.typeName}.${field.name} from JSON: ${debugJsonValue(jsonValue)}`);
        }
        const targetMap = target[localName];
        for (const [jsonMapKey, jsonMapValue] of Object.entries(jsonValue)) {
            if (jsonMapValue === null) {
                throw new Error(`cannot decode field ${parentType.typeName}.${field.name} from JSON: map value null`);
            }
            let key;
            try {
                key = readMapKey(field.K, jsonMapKey);
            }
            catch (e) {
                let m = `cannot decode map key for field ${parentType.typeName}.${field.name} from JSON: ${debugJsonValue(jsonValue)}`;
                if (e instanceof Error && e.message.length > 0) {
                    m += `: ${e.message}`;
                }
                throw new Error(m);
            }
            switch (field.V.kind) {
                case "message":
                    targetMap[key] = field.V.T.fromJson(jsonMapValue, options);
                    break;
                case "enum":
                    const enumValue = readEnum(field.V.T, jsonMapValue, options.ignoreUnknownFields, true);
                    if (enumValue !== tokenIgnoredUnknownEnum) {
                        targetMap[key] = enumValue;
                    }
                    break;
                case "scalar":
                    try {
                        targetMap[key] = readScalar(field.V.T, jsonMapValue, _scalar_js__WEBPACK_IMPORTED_MODULE_3__.LongType.BIGINT, true);
                    }
                    catch (e) {
                        let m = `cannot decode map value for field ${parentType.typeName}.${field.name} from JSON: ${debugJsonValue(jsonValue)}`;
                        if (e instanceof Error && e.message.length > 0) {
                            m += `: ${e.message}`;
                        }
                        throw new Error(m);
                    }
                    break;
            }
        }
    }
    else {
        if (field.oneof) {
            target = target[field.oneof.localName] = { case: localName };
            localName = "value";
        }
        switch (field.kind) {
            case "message":
                const messageType = field.T;
                if (jsonValue === null &&
                    messageType.typeName != "google.protobuf.Value") {
                    return;
                }
                let currentValue = target[localName];
                if ((0,_is_message_js__WEBPACK_IMPORTED_MODULE_6__.isMessage)(currentValue)) {
                    currentValue.fromJson(jsonValue, options);
                }
                else {
                    target[localName] = currentValue = messageType.fromJson(jsonValue, options);
                    if (messageType.fieldWrapper && !field.oneof) {
                        target[localName] =
                            messageType.fieldWrapper.unwrapField(currentValue);
                    }
                }
                break;
            case "enum":
                const enumValue = readEnum(field.T, jsonValue, options.ignoreUnknownFields, false);
                switch (enumValue) {
                    case tokenNull:
                        (0,_reflect_js__WEBPACK_IMPORTED_MODULE_2__.clearField)(field, target);
                        break;
                    case tokenIgnoredUnknownEnum:
                        break;
                    default:
                        target[localName] = enumValue;
                        break;
                }
                break;
            case "scalar":
                try {
                    const scalarValue = readScalar(field.T, jsonValue, field.L, false);
                    switch (scalarValue) {
                        case tokenNull:
                            (0,_reflect_js__WEBPACK_IMPORTED_MODULE_2__.clearField)(field, target);
                            break;
                        default:
                            target[localName] = scalarValue;
                            break;
                    }
                }
                catch (e) {
                    let m = `cannot decode field ${parentType.typeName}.${field.name} from JSON: ${debugJsonValue(jsonValue)}`;
                    if (e instanceof Error && e.message.length > 0) {
                        m += `: ${e.message}`;
                    }
                    throw new Error(m);
                }
                break;
        }
    }
}
function readMapKey(type, json) {
    if (type === _scalar_js__WEBPACK_IMPORTED_MODULE_3__.ScalarType.BOOL) {
        // eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check
        switch (json) {
            case "true":
                json = true;
                break;
            case "false":
                json = false;
                break;
        }
    }
    return readScalar(type, json, _scalar_js__WEBPACK_IMPORTED_MODULE_3__.LongType.BIGINT, true).toString();
}
function readScalar(type, json, longType, nullAsZeroValue) {
    if (json === null) {
        if (nullAsZeroValue) {
            return (0,_scalars_js__WEBPACK_IMPORTED_MODULE_4__.scalarZeroValue)(type, longType);
        }
        return tokenNull;
    }
    // every valid case in the switch below returns, and every fall
    // through is regarded as a failure.
    switch (type) {
        // float, double: JSON value will be a number or one of the special string values "NaN", "Infinity", and "-Infinity".
        // Either numbers or strings are accepted. Exponent notation is also accepted.
        case _scalar_js__WEBPACK_IMPORTED_MODULE_3__.ScalarType.DOUBLE:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_3__.ScalarType.FLOAT:
            if (json === "NaN")
                return Number.NaN;
            if (json === "Infinity")
                return Number.POSITIVE_INFINITY;
            if (json === "-Infinity")
                return Number.NEGATIVE_INFINITY;
            if (json === "") {
                // empty string is not a number
                break;
            }
            if (typeof json == "string" && json.trim().length !== json.length) {
                // extra whitespace
                break;
            }
            if (typeof json != "string" && typeof json != "number") {
                break;
            }
            const float = Number(json);
            if (Number.isNaN(float)) {
                // not a number
                break;
            }
            if (!Number.isFinite(float)) {
                // infinity and -infinity are handled by string representation above, so this is an error
                break;
            }
            if (type == _scalar_js__WEBPACK_IMPORTED_MODULE_3__.ScalarType.FLOAT)
                (0,_assert_js__WEBPACK_IMPORTED_MODULE_5__.assertFloat32)(float);
            return float;
        // int32, fixed32, uint32: JSON value will be a decimal number. Either numbers or strings are accepted.
        case _scalar_js__WEBPACK_IMPORTED_MODULE_3__.ScalarType.INT32:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_3__.ScalarType.FIXED32:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_3__.ScalarType.SFIXED32:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_3__.ScalarType.SINT32:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_3__.ScalarType.UINT32:
            let int32;
            if (typeof json == "number")
                int32 = json;
            else if (typeof json == "string" && json.length > 0) {
                if (json.trim().length === json.length)
                    int32 = Number(json);
            }
            if (int32 === undefined)
                break;
            if (type == _scalar_js__WEBPACK_IMPORTED_MODULE_3__.ScalarType.UINT32 || type == _scalar_js__WEBPACK_IMPORTED_MODULE_3__.ScalarType.FIXED32)
                (0,_assert_js__WEBPACK_IMPORTED_MODULE_5__.assertUInt32)(int32);
            else
                (0,_assert_js__WEBPACK_IMPORTED_MODULE_5__.assertInt32)(int32);
            return int32;
        // int64, fixed64, uint64: JSON value will be a decimal string. Either numbers or strings are accepted.
        case _scalar_js__WEBPACK_IMPORTED_MODULE_3__.ScalarType.INT64:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_3__.ScalarType.SFIXED64:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_3__.ScalarType.SINT64:
            if (typeof json != "number" && typeof json != "string")
                break;
            const long = _proto_int64_js__WEBPACK_IMPORTED_MODULE_7__.protoInt64.parse(json);
            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            return longType ? long.toString() : long;
        case _scalar_js__WEBPACK_IMPORTED_MODULE_3__.ScalarType.FIXED64:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_3__.ScalarType.UINT64:
            if (typeof json != "number" && typeof json != "string")
                break;
            const uLong = _proto_int64_js__WEBPACK_IMPORTED_MODULE_7__.protoInt64.uParse(json);
            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            return longType ? uLong.toString() : uLong;
        // bool:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_3__.ScalarType.BOOL:
            if (typeof json !== "boolean")
                break;
            return json;
        // string:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_3__.ScalarType.STRING:
            if (typeof json !== "string") {
                break;
            }
            // A string must always contain UTF-8 encoded or 7-bit ASCII.
            // We validate with encodeURIComponent, which appears to be the fastest widely available option.
            try {
                encodeURIComponent(json);
            }
            catch (e) {
                throw new Error("invalid UTF8");
            }
            return json;
        // bytes: JSON value will be the data encoded as a string using standard base64 encoding with paddings.
        // Either standard or URL-safe base64 encoding with/without paddings are accepted.
        case _scalar_js__WEBPACK_IMPORTED_MODULE_3__.ScalarType.BYTES:
            if (json === "")
                return new Uint8Array(0);
            if (typeof json !== "string")
                break;
            return _proto_base64_js__WEBPACK_IMPORTED_MODULE_8__.protoBase64.dec(json);
    }
    throw new Error();
}
function readEnum(type, json, ignoreUnknownFields, nullAsZeroValue) {
    if (json === null) {
        if (type.typeName == "google.protobuf.NullValue") {
            return 0; // google.protobuf.NullValue.NULL_VALUE = 0
        }
        return nullAsZeroValue ? type.values[0].no : tokenNull;
    }
    // eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check
    switch (typeof json) {
        case "number":
            if (Number.isInteger(json)) {
                return json;
            }
            break;
        case "string":
            const value = type.findName(json);
            if (value !== undefined) {
                return value.no;
            }
            if (ignoreUnknownFields) {
                return tokenIgnoredUnknownEnum;
            }
            break;
    }
    throw new Error(`cannot decode enum ${type.typeName} from JSON: ${debugJsonValue(json)}`);
}
// Decide whether an unset field should be emitted with JSON write option `emitDefaultValues`
function canEmitFieldDefaultValue(field) {
    if (field.repeated || field.kind == "map") {
        // maps are {}, repeated fields are []
        return true;
    }
    if (field.oneof) {
        // oneof fields are never emitted
        return false;
    }
    if (field.kind == "message") {
        // singular message field are allowed to emit JSON null, but we do not
        return false;
    }
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (field.opt || field.req) {
        // the field uses explicit presence, so we cannot emit a zero value
        return false;
    }
    return true;
}
function writeField(field, value, options) {
    if (field.kind == "map") {
        (0,_assert_js__WEBPACK_IMPORTED_MODULE_5__.assert)(typeof value == "object" && value != null);
        const jsonObj = {};
        const entries = Object.entries(value);
        switch (field.V.kind) {
            case "scalar":
                for (const [entryKey, entryValue] of entries) {
                    jsonObj[entryKey.toString()] = writeScalar(field.V.T, entryValue); // JSON standard allows only (double quoted) string as property key
                }
                break;
            case "message":
                for (const [entryKey, entryValue] of entries) {
                    // JSON standard allows only (double quoted) string as property key
                    jsonObj[entryKey.toString()] = entryValue.toJson(options);
                }
                break;
            case "enum":
                const enumType = field.V.T;
                for (const [entryKey, entryValue] of entries) {
                    // JSON standard allows only (double quoted) string as property key
                    jsonObj[entryKey.toString()] = writeEnum(enumType, entryValue, options.enumAsInteger);
                }
                break;
        }
        return options.emitDefaultValues || entries.length > 0
            ? jsonObj
            : undefined;
    }
    if (field.repeated) {
        (0,_assert_js__WEBPACK_IMPORTED_MODULE_5__.assert)(Array.isArray(value));
        const jsonArr = [];
        switch (field.kind) {
            case "scalar":
                for (let i = 0; i < value.length; i++) {
                    jsonArr.push(writeScalar(field.T, value[i]));
                }
                break;
            case "enum":
                for (let i = 0; i < value.length; i++) {
                    jsonArr.push(writeEnum(field.T, value[i], options.enumAsInteger));
                }
                break;
            case "message":
                for (let i = 0; i < value.length; i++) {
                    jsonArr.push(value[i].toJson(options));
                }
                break;
        }
        return options.emitDefaultValues || jsonArr.length > 0
            ? jsonArr
            : undefined;
    }
    switch (field.kind) {
        case "scalar":
            return writeScalar(field.T, value);
        case "enum":
            return writeEnum(field.T, value, options.enumAsInteger);
        case "message":
            return (0,_field_wrapper_js__WEBPACK_IMPORTED_MODULE_9__.wrapField)(field.T, value).toJson(options);
    }
}
function writeEnum(type, value, enumAsInteger) {
    var _a;
    (0,_assert_js__WEBPACK_IMPORTED_MODULE_5__.assert)(typeof value == "number");
    if (type.typeName == "google.protobuf.NullValue") {
        return null;
    }
    if (enumAsInteger) {
        return value;
    }
    const val = type.findNumber(value);
    return (_a = val === null || val === void 0 ? void 0 : val.name) !== null && _a !== void 0 ? _a : value; // if we don't know the enum value, just return the number
}
function writeScalar(type, value) {
    switch (type) {
        // int32, fixed32, uint32: JSON value will be a decimal number. Either numbers or strings are accepted.
        case _scalar_js__WEBPACK_IMPORTED_MODULE_3__.ScalarType.INT32:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_3__.ScalarType.SFIXED32:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_3__.ScalarType.SINT32:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_3__.ScalarType.FIXED32:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_3__.ScalarType.UINT32:
            (0,_assert_js__WEBPACK_IMPORTED_MODULE_5__.assert)(typeof value == "number");
            return value;
        // float, double: JSON value will be a number or one of the special string values "NaN", "Infinity", and "-Infinity".
        // Either numbers or strings are accepted. Exponent notation is also accepted.
        case _scalar_js__WEBPACK_IMPORTED_MODULE_3__.ScalarType.FLOAT:
        // assertFloat32(value);
        case _scalar_js__WEBPACK_IMPORTED_MODULE_3__.ScalarType.DOUBLE: // eslint-disable-line no-fallthrough
            (0,_assert_js__WEBPACK_IMPORTED_MODULE_5__.assert)(typeof value == "number");
            if (Number.isNaN(value))
                return "NaN";
            if (value === Number.POSITIVE_INFINITY)
                return "Infinity";
            if (value === Number.NEGATIVE_INFINITY)
                return "-Infinity";
            return value;
        // string:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_3__.ScalarType.STRING:
            (0,_assert_js__WEBPACK_IMPORTED_MODULE_5__.assert)(typeof value == "string");
            return value;
        // bool:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_3__.ScalarType.BOOL:
            (0,_assert_js__WEBPACK_IMPORTED_MODULE_5__.assert)(typeof value == "boolean");
            return value;
        // JSON value will be a decimal string. Either numbers or strings are accepted.
        case _scalar_js__WEBPACK_IMPORTED_MODULE_3__.ScalarType.UINT64:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_3__.ScalarType.FIXED64:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_3__.ScalarType.INT64:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_3__.ScalarType.SFIXED64:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_3__.ScalarType.SINT64:
            (0,_assert_js__WEBPACK_IMPORTED_MODULE_5__.assert)(typeof value == "bigint" ||
                typeof value == "string" ||
                typeof value == "number");
            return value.toString();
        // bytes: JSON value will be the data encoded as a string using standard base64 encoding with paddings.
        // Either standard or URL-safe base64 encoding with/without paddings are accepted.
        case _scalar_js__WEBPACK_IMPORTED_MODULE_3__.ScalarType.BYTES:
            (0,_assert_js__WEBPACK_IMPORTED_MODULE_5__.assert)(value instanceof Uint8Array);
            return _proto_base64_js__WEBPACK_IMPORTED_MODULE_8__.protoBase64.enc(value);
    }
}


/***/ }),
/* 18 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   protoBase64: () => (/* binding */ protoBase64)
/* harmony export */ });
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unnecessary-condition, prefer-const */
// lookup table from base64 character to byte
let encTable = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
// lookup table from base64 character *code* to byte because lookup by number is fast
let decTable = [];
for (let i = 0; i < encTable.length; i++)
    decTable[encTable[i].charCodeAt(0)] = i;
// support base64url variants
decTable["-".charCodeAt(0)] = encTable.indexOf("+");
decTable["_".charCodeAt(0)] = encTable.indexOf("/");
const protoBase64 = {
    /**
     * Decodes a base64 string to a byte array.
     *
     * - ignores white-space, including line breaks and tabs
     * - allows inner padding (can decode concatenated base64 strings)
     * - does not require padding
     * - understands base64url encoding:
     *   "-" instead of "+",
     *   "_" instead of "/",
     *   no padding
     */
    dec(base64Str) {
        // estimate byte size, not accounting for inner padding and whitespace
        let es = (base64Str.length * 3) / 4;
        if (base64Str[base64Str.length - 2] == "=")
            es -= 2;
        else if (base64Str[base64Str.length - 1] == "=")
            es -= 1;
        let bytes = new Uint8Array(es), bytePos = 0, // position in byte array
        groupPos = 0, // position in base64 group
        b, // current byte
        p = 0; // previous byte
        for (let i = 0; i < base64Str.length; i++) {
            b = decTable[base64Str.charCodeAt(i)];
            if (b === undefined) {
                switch (base64Str[i]) {
                    // @ts-ignore TS7029: Fallthrough case in switch
                    case "=":
                        groupPos = 0; // reset state when padding found
                    // @ts-ignore TS7029: Fallthrough case in switch
                    case "\n":
                    case "\r":
                    case "\t":
                    case " ":
                        continue; // skip white-space, and padding
                    default:
                        throw Error("invalid base64 string.");
                }
            }
            switch (groupPos) {
                case 0:
                    p = b;
                    groupPos = 1;
                    break;
                case 1:
                    bytes[bytePos++] = (p << 2) | ((b & 48) >> 4);
                    p = b;
                    groupPos = 2;
                    break;
                case 2:
                    bytes[bytePos++] = ((p & 15) << 4) | ((b & 60) >> 2);
                    p = b;
                    groupPos = 3;
                    break;
                case 3:
                    bytes[bytePos++] = ((p & 3) << 6) | b;
                    groupPos = 0;
                    break;
            }
        }
        if (groupPos == 1)
            throw Error("invalid base64 string.");
        return bytes.subarray(0, bytePos);
    },
    /**
     * Encode a byte array to a base64 string.
     */
    enc(bytes) {
        let base64 = "", groupPos = 0, // position in base64 group
        b, // current byte
        p = 0; // carry over from previous byte
        for (let i = 0; i < bytes.length; i++) {
            b = bytes[i];
            switch (groupPos) {
                case 0:
                    base64 += encTable[b >> 2];
                    p = (b & 3) << 4;
                    groupPos = 1;
                    break;
                case 1:
                    base64 += encTable[p | (b >> 4)];
                    p = (b & 15) << 2;
                    groupPos = 2;
                    break;
                case 2:
                    base64 += encTable[p | (b >> 6)];
                    base64 += encTable[b & 63];
                    groupPos = 0;
                    break;
            }
        }
        // add output padding
        if (groupPos) {
            base64 += encTable[p];
            base64 += "=";
            if (groupPos == 1)
                base64 += "=";
        }
        return base64;
    },
};


/***/ }),
/* 19 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearExtension: () => (/* binding */ clearExtension),
/* harmony export */   getExtension: () => (/* binding */ getExtension),
/* harmony export */   hasExtension: () => (/* binding */ hasExtension),
/* harmony export */   setExtension: () => (/* binding */ setExtension)
/* harmony export */ });
/* harmony import */ var _private_assert_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _private_extensions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


/**
 * Retrieve an extension value from a message.
 *
 * The function never returns undefined. Use hasExtension() to check whether an
 * extension is set. If the extension is not set, this function returns the
 * default value (if one was specified in the protobuf source), or the zero value
 * (for example `0` for numeric types, `[]` for repeated extension fields, and
 * an empty message instance for message fields).
 *
 * Extensions are stored as unknown fields on a message. To mutate an extension
 * value, make sure to store the new value with setExtension() after mutating.
 *
 * If the extension does not extend the given message, an error is raised.
 */
function getExtension(message, extension, options) {
    assertExtendee(extension, message);
    const opt = extension.runtime.bin.makeReadOptions(options);
    const ufs = (0,_private_extensions_js__WEBPACK_IMPORTED_MODULE_0__.filterUnknownFields)(message.getType().runtime.bin.listUnknownFields(message), extension.field);
    const [container, get] = (0,_private_extensions_js__WEBPACK_IMPORTED_MODULE_0__.createExtensionContainer)(extension);
    for (const uf of ufs) {
        extension.runtime.bin.readField(container, opt.readerFactory(uf.data), extension.field, uf.wireType, opt);
    }
    return get();
}
/**
 * Set an extension value on a message. If the message already has a value for
 * this extension, the value is replaced.
 *
 * If the extension does not extend the given message, an error is raised.
 */
function setExtension(message, extension, value, options) {
    assertExtendee(extension, message);
    const readOpt = extension.runtime.bin.makeReadOptions(options);
    const writeOpt = extension.runtime.bin.makeWriteOptions(options);
    if (hasExtension(message, extension)) {
        const ufs = message
            .getType()
            .runtime.bin.listUnknownFields(message)
            .filter((uf) => uf.no != extension.field.no);
        message.getType().runtime.bin.discardUnknownFields(message);
        for (const uf of ufs) {
            message
                .getType()
                .runtime.bin.onUnknownField(message, uf.no, uf.wireType, uf.data);
        }
    }
    const writer = writeOpt.writerFactory();
    let f = extension.field;
    // Implicit presence does not apply to extensions, see https://github.com/protocolbuffers/protobuf/issues/8234
    // We patch the field info to use explicit presence:
    if (!f.opt && !f.repeated && (f.kind == "enum" || f.kind == "scalar")) {
        f = Object.assign(Object.assign({}, extension.field), { opt: true });
    }
    extension.runtime.bin.writeField(f, value, writer, writeOpt);
    const reader = readOpt.readerFactory(writer.finish());
    while (reader.pos < reader.len) {
        const [no, wireType] = reader.tag();
        const data = reader.skip(wireType, no);
        message.getType().runtime.bin.onUnknownField(message, no, wireType, data);
    }
}
/**
 * Remove an extension value from a message.
 *
 * If the extension does not extend the given message, an error is raised.
 */
function clearExtension(message, extension) {
    assertExtendee(extension, message);
    if (hasExtension(message, extension)) {
        const bin = message.getType().runtime.bin;
        const ufs = bin
            .listUnknownFields(message)
            .filter((uf) => uf.no != extension.field.no);
        bin.discardUnknownFields(message);
        for (const uf of ufs) {
            bin.onUnknownField(message, uf.no, uf.wireType, uf.data);
        }
    }
}
/**
 * Check whether an extension is set on a message.
 */
function hasExtension(message, extension) {
    const messageType = message.getType();
    return (extension.extendee.typeName === messageType.typeName &&
        !!messageType.runtime.bin
            .listUnknownFields(message)
            .find((uf) => uf.no == extension.field.no));
}
function assertExtendee(extension, message) {
    (0,_private_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(extension.extendee.typeName == message.getType().typeName, `extension ${extension.typeName} can only be applied to message ${extension.extendee.typeName}`);
}


/***/ }),
/* 20 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearField: () => (/* binding */ clearField),
/* harmony export */   isFieldSet: () => (/* binding */ isFieldSet)
/* harmony export */ });
/* harmony import */ var _scalars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Returns true if the field is set.
 */
function isFieldSet(field, target) {
    const localName = field.localName;
    if (field.repeated) {
        return target[localName].length > 0;
    }
    if (field.oneof) {
        return target[field.oneof.localName].case === localName; // eslint-disable-line @typescript-eslint/no-unsafe-member-access
    }
    switch (field.kind) {
        case "enum":
        case "scalar":
            if (field.opt || field.req) {
                // explicit presence
                return target[localName] !== undefined;
            }
            // implicit presence
            if (field.kind == "enum") {
                return target[localName] !== field.T.values[0].no;
            }
            return !(0,_scalars_js__WEBPACK_IMPORTED_MODULE_0__.isScalarZeroValue)(field.T, target[localName]);
        case "message":
            return target[localName] !== undefined;
        case "map":
            return Object.keys(target[localName]).length > 0; // eslint-disable-line @typescript-eslint/no-unsafe-argument
    }
}
/**
 * Resets the field, so that isFieldSet() will return false.
 */
function clearField(field, target) {
    const localName = field.localName;
    const implicitPresence = !field.opt && !field.req;
    if (field.repeated) {
        target[localName] = [];
    }
    else if (field.oneof) {
        target[field.oneof.localName] = { case: undefined };
    }
    else {
        switch (field.kind) {
            case "map":
                target[localName] = {};
                break;
            case "enum":
                target[localName] = implicitPresence ? field.T.values[0].no : undefined;
                break;
            case "scalar":
                target[localName] = implicitPresence
                    ? (0,_scalars_js__WEBPACK_IMPORTED_MODULE_0__.scalarZeroValue)(field.T, field.L)
                    : undefined;
                break;
            case "message":
                target[localName] = undefined;
                break;
        }
    }
}


/***/ }),
/* 21 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getUnwrappedFieldType: () => (/* binding */ getUnwrappedFieldType),
/* harmony export */   wrapField: () => (/* binding */ wrapField)
/* harmony export */ });
/* harmony import */ var _scalar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _is_message_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.



/**
 * Wrap a primitive message field value in its corresponding wrapper
 * message. This function is idempotent.
 */
function wrapField(type, value) {
    if ((0,_is_message_js__WEBPACK_IMPORTED_MODULE_0__.isMessage)(value) || !type.fieldWrapper) {
        return value;
    }
    return type.fieldWrapper.wrapField(value);
}
/**
 * If the given field uses one of the well-known wrapper types, return
 * the primitive type it wraps.
 */
function getUnwrappedFieldType(field) {
    if (field.fieldKind !== "message") {
        return undefined;
    }
    if (field.repeated) {
        return undefined;
    }
    if (field.oneof != undefined) {
        return undefined;
    }
    return wktWrapperToScalarType[field.message.typeName];
}
const wktWrapperToScalarType = {
    "google.protobuf.DoubleValue": _scalar_js__WEBPACK_IMPORTED_MODULE_1__.ScalarType.DOUBLE,
    "google.protobuf.FloatValue": _scalar_js__WEBPACK_IMPORTED_MODULE_1__.ScalarType.FLOAT,
    "google.protobuf.Int64Value": _scalar_js__WEBPACK_IMPORTED_MODULE_1__.ScalarType.INT64,
    "google.protobuf.UInt64Value": _scalar_js__WEBPACK_IMPORTED_MODULE_1__.ScalarType.UINT64,
    "google.protobuf.Int32Value": _scalar_js__WEBPACK_IMPORTED_MODULE_1__.ScalarType.INT32,
    "google.protobuf.UInt32Value": _scalar_js__WEBPACK_IMPORTED_MODULE_1__.ScalarType.UINT32,
    "google.protobuf.BoolValue": _scalar_js__WEBPACK_IMPORTED_MODULE_1__.ScalarType.BOOL,
    "google.protobuf.StringValue": _scalar_js__WEBPACK_IMPORTED_MODULE_1__.ScalarType.STRING,
    "google.protobuf.BytesValue": _scalar_js__WEBPACK_IMPORTED_MODULE_1__.ScalarType.BYTES,
};


/***/ }),
/* 22 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isMessage: () => (/* binding */ isMessage)
/* harmony export */ });
/* harmony import */ var _message_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Check whether the given object is any subtype of Message or is a specific
 * Message by passing the type.
 *
 * Just like `instanceof`, `isMessage` narrows the type. The advantage of
 * `isMessage` is that it compares identity by the message type name, not by
 * class identity. This makes it robust against the dual package hazard and
 * similar situations, where the same message is duplicated.
 *
 * This function is _mostly_ equivalent to the `instanceof` operator. For
 * example, `isMessage(foo, MyMessage)` is the same as `foo instanceof MyMessage`,
 * and `isMessage(foo)` is the same as `foo instanceof Message`. In most cases,
 * `isMessage` should be preferred over `instanceof`.
 *
 * However, due to the fact that `isMessage` does not use class identity, there
 * are subtle differences between this function and `instanceof`. Notably,
 * calling `isMessage` on an explicit type of Message will return false.
 */
function isMessage(arg, type) {
    if (arg === null || typeof arg != "object") {
        return false;
    }
    if (!Object.getOwnPropertyNames(_message_js__WEBPACK_IMPORTED_MODULE_0__.Message.prototype).every((m) => m in arg && typeof arg[m] == "function")) {
        return false;
    }
    const actualType = arg.getType();
    if (actualType === null ||
        typeof actualType != "function" ||
        !("typeName" in actualType) ||
        typeof actualType.typeName != "string") {
        return false;
    }
    return type === undefined ? true : actualType.typeName == type.typeName;
}


/***/ }),
/* 23 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeBinaryFormat: () => (/* binding */ makeBinaryFormat),
/* harmony export */   writeMapEntry: () => (/* binding */ writeMapEntry)
/* harmony export */ });
/* harmony import */ var _binary_encoding_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _field_wrapper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21);
/* harmony import */ var _scalars_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _assert_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _reflect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _scalar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _is_message_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.








/* eslint-disable prefer-const,no-case-declarations,@typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-return */
const unknownFieldsSymbol = Symbol("@bufbuild/protobuf/unknown-fields");
// Default options for parsing binary data.
const readDefaults = {
    readUnknownFields: true,
    readerFactory: (bytes) => new _binary_encoding_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReader(bytes),
};
// Default options for serializing binary data.
const writeDefaults = {
    writeUnknownFields: true,
    writerFactory: () => new _binary_encoding_js__WEBPACK_IMPORTED_MODULE_0__.BinaryWriter(),
};
function makeReadOptions(options) {
    return options ? Object.assign(Object.assign({}, readDefaults), options) : readDefaults;
}
function makeWriteOptions(options) {
    return options ? Object.assign(Object.assign({}, writeDefaults), options) : writeDefaults;
}
function makeBinaryFormat() {
    return {
        makeReadOptions,
        makeWriteOptions,
        listUnknownFields(message) {
            var _a;
            return (_a = message[unknownFieldsSymbol]) !== null && _a !== void 0 ? _a : [];
        },
        discardUnknownFields(message) {
            delete message[unknownFieldsSymbol];
        },
        writeUnknownFields(message, writer) {
            const m = message;
            const c = m[unknownFieldsSymbol];
            if (c) {
                for (const f of c) {
                    writer.tag(f.no, f.wireType).raw(f.data);
                }
            }
        },
        onUnknownField(message, no, wireType, data) {
            const m = message;
            if (!Array.isArray(m[unknownFieldsSymbol])) {
                m[unknownFieldsSymbol] = [];
            }
            m[unknownFieldsSymbol].push({ no, wireType, data });
        },
        readMessage(message, reader, lengthOrEndTagFieldNo, options, delimitedMessageEncoding) {
            const type = message.getType();
            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            const end = delimitedMessageEncoding
                ? reader.len
                : reader.pos + lengthOrEndTagFieldNo;
            let fieldNo, wireType;
            while (reader.pos < end) {
                [fieldNo, wireType] = reader.tag();
                if (delimitedMessageEncoding === true &&
                    wireType == _binary_encoding_js__WEBPACK_IMPORTED_MODULE_0__.WireType.EndGroup) {
                    break;
                }
                const field = type.fields.find(fieldNo);
                if (!field) {
                    const data = reader.skip(wireType, fieldNo);
                    if (options.readUnknownFields) {
                        this.onUnknownField(message, fieldNo, wireType, data);
                    }
                    continue;
                }
                readField(message, reader, field, wireType, options);
            }
            if (delimitedMessageEncoding && // eslint-disable-line @typescript-eslint/strict-boolean-expressions
                (wireType != _binary_encoding_js__WEBPACK_IMPORTED_MODULE_0__.WireType.EndGroup || fieldNo !== lengthOrEndTagFieldNo)) {
                throw new Error(`invalid end group tag`);
            }
        },
        readField,
        writeMessage(message, writer, options) {
            const type = message.getType();
            for (const field of type.fields.byNumber()) {
                if (!(0,_reflect_js__WEBPACK_IMPORTED_MODULE_1__.isFieldSet)(field, message)) {
                    if (field.req) {
                        throw new Error(`cannot encode field ${type.typeName}.${field.name} to binary: required field not set`);
                    }
                    continue;
                }
                const value = field.oneof
                    ? message[field.oneof.localName].value
                    : message[field.localName];
                writeField(field, value, writer, options);
            }
            if (options.writeUnknownFields) {
                this.writeUnknownFields(message, writer);
            }
            return writer;
        },
        writeField(field, value, writer, options) {
            // The behavior of our internal function has changed, it does no longer
            // accept `undefined` values for singular scalar and map.
            // For backwards-compatibility, we support the old form that is part of
            // the public API through the interface BinaryFormat.
            if (value === undefined) {
                return undefined;
            }
            writeField(field, value, writer, options);
        },
    };
}
function readField(target, // eslint-disable-line @typescript-eslint/no-explicit-any -- `any` is the best choice for dynamic access
reader, field, wireType, options) {
    let { repeated, localName } = field;
    if (field.oneof) {
        target = target[field.oneof.localName];
        if (target.case != localName) {
            delete target.value;
        }
        target.case = localName;
        localName = "value";
    }
    switch (field.kind) {
        case "scalar":
        case "enum":
            const scalarType = field.kind == "enum" ? _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.INT32 : field.T;
            let read = readScalar;
            // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison -- acceptable since it's covered by tests
            if (field.kind == "scalar" && field.L > 0) {
                read = readScalarLTString;
            }
            if (repeated) {
                let arr = target[localName]; // safe to assume presence of array, oneof cannot contain repeated values
                const isPacked = wireType == _binary_encoding_js__WEBPACK_IMPORTED_MODULE_0__.WireType.LengthDelimited &&
                    scalarType != _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.STRING &&
                    scalarType != _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.BYTES;
                if (isPacked) {
                    let e = reader.uint32() + reader.pos;
                    while (reader.pos < e) {
                        arr.push(read(reader, scalarType));
                    }
                }
                else {
                    arr.push(read(reader, scalarType));
                }
            }
            else {
                target[localName] = read(reader, scalarType);
            }
            break;
        case "message":
            const messageType = field.T;
            if (repeated) {
                // safe to assume presence of array, oneof cannot contain repeated values
                target[localName].push(readMessageField(reader, new messageType(), options, field));
            }
            else {
                if ((0,_is_message_js__WEBPACK_IMPORTED_MODULE_3__.isMessage)(target[localName])) {
                    readMessageField(reader, target[localName], options, field);
                }
                else {
                    target[localName] = readMessageField(reader, new messageType(), options, field);
                    if (messageType.fieldWrapper && !field.oneof && !field.repeated) {
                        target[localName] = messageType.fieldWrapper.unwrapField(target[localName]);
                    }
                }
            }
            break;
        case "map":
            let [mapKey, mapVal] = readMapEntry(field, reader, options);
            // safe to assume presence of map object, oneof cannot contain repeated values
            target[localName][mapKey] = mapVal;
            break;
    }
}
// Read a message, avoiding MessageType.fromBinary() to re-use the
// BinaryReadOptions and the IBinaryReader.
function readMessageField(reader, message, options, field) {
    const format = message.getType().runtime.bin;
    const delimited = field === null || field === void 0 ? void 0 : field.delimited;
    format.readMessage(message, reader, delimited ? field.no : reader.uint32(), // eslint-disable-line @typescript-eslint/strict-boolean-expressions
    options, delimited);
    return message;
}
// Read a map field, expecting key field = 1, value field = 2
function readMapEntry(field, reader, options) {
    const length = reader.uint32(), end = reader.pos + length;
    let key, val;
    while (reader.pos < end) {
        const [fieldNo] = reader.tag();
        switch (fieldNo) {
            case 1:
                key = readScalar(reader, field.K);
                break;
            case 2:
                switch (field.V.kind) {
                    case "scalar":
                        val = readScalar(reader, field.V.T);
                        break;
                    case "enum":
                        val = reader.int32();
                        break;
                    case "message":
                        val = readMessageField(reader, new field.V.T(), options, undefined);
                        break;
                }
                break;
        }
    }
    if (key === undefined) {
        key = (0,_scalars_js__WEBPACK_IMPORTED_MODULE_4__.scalarZeroValue)(field.K, _scalar_js__WEBPACK_IMPORTED_MODULE_2__.LongType.BIGINT);
    }
    if (typeof key != "string" && typeof key != "number") {
        key = key.toString();
    }
    if (val === undefined) {
        switch (field.V.kind) {
            case "scalar":
                val = (0,_scalars_js__WEBPACK_IMPORTED_MODULE_4__.scalarZeroValue)(field.V.T, _scalar_js__WEBPACK_IMPORTED_MODULE_2__.LongType.BIGINT);
                break;
            case "enum":
                val = field.V.T.values[0].no;
                break;
            case "message":
                val = new field.V.T();
                break;
        }
    }
    return [key, val];
}
// Read a scalar value, but return 64 bit integral types (int64, uint64,
// sint64, fixed64, sfixed64) as string instead of bigint.
function readScalarLTString(reader, type) {
    const v = readScalar(reader, type);
    return typeof v == "bigint" ? v.toString() : v;
}
// Does not use scalarTypeInfo() for better performance.
function readScalar(reader, type) {
    switch (type) {
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.STRING:
            return reader.string();
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.BOOL:
            return reader.bool();
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.DOUBLE:
            return reader.double();
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.FLOAT:
            return reader.float();
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.INT32:
            return reader.int32();
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.INT64:
            return reader.int64();
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.UINT64:
            return reader.uint64();
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.FIXED64:
            return reader.fixed64();
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.BYTES:
            return reader.bytes();
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.FIXED32:
            return reader.fixed32();
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.SFIXED32:
            return reader.sfixed32();
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.SFIXED64:
            return reader.sfixed64();
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.SINT64:
            return reader.sint64();
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.UINT32:
            return reader.uint32();
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.SINT32:
            return reader.sint32();
    }
}
function writeField(field, value, writer, options) {
    (0,_assert_js__WEBPACK_IMPORTED_MODULE_5__.assert)(value !== undefined);
    const repeated = field.repeated;
    switch (field.kind) {
        case "scalar":
        case "enum":
            let scalarType = field.kind == "enum" ? _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.INT32 : field.T;
            if (repeated) {
                (0,_assert_js__WEBPACK_IMPORTED_MODULE_5__.assert)(Array.isArray(value));
                if (field.packed) {
                    writePacked(writer, scalarType, field.no, value);
                }
                else {
                    for (const item of value) {
                        writeScalar(writer, scalarType, field.no, item);
                    }
                }
            }
            else {
                writeScalar(writer, scalarType, field.no, value);
            }
            break;
        case "message":
            if (repeated) {
                (0,_assert_js__WEBPACK_IMPORTED_MODULE_5__.assert)(Array.isArray(value));
                for (const item of value) {
                    writeMessageField(writer, options, field, item);
                }
            }
            else {
                writeMessageField(writer, options, field, value);
            }
            break;
        case "map":
            (0,_assert_js__WEBPACK_IMPORTED_MODULE_5__.assert)(typeof value == "object" && value != null);
            for (const [key, val] of Object.entries(value)) {
                writeMapEntry(writer, options, field, key, val);
            }
            break;
    }
}
function writeMapEntry(writer, options, field, key, value) {
    writer.tag(field.no, _binary_encoding_js__WEBPACK_IMPORTED_MODULE_0__.WireType.LengthDelimited);
    writer.fork();
    // javascript only allows number or string for object properties
    // we convert from our representation to the protobuf type
    let keyValue = key;
    // eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check -- we deliberately handle just the special cases for map keys
    switch (field.K) {
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.INT32:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.FIXED32:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.UINT32:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.SFIXED32:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.SINT32:
            keyValue = Number.parseInt(key);
            break;
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.BOOL:
            (0,_assert_js__WEBPACK_IMPORTED_MODULE_5__.assert)(key == "true" || key == "false");
            keyValue = key == "true";
            break;
    }
    // write key, expecting key field number = 1
    writeScalar(writer, field.K, 1, keyValue);
    // write value, expecting value field number = 2
    switch (field.V.kind) {
        case "scalar":
            writeScalar(writer, field.V.T, 2, value);
            break;
        case "enum":
            writeScalar(writer, _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.INT32, 2, value);
            break;
        case "message":
            (0,_assert_js__WEBPACK_IMPORTED_MODULE_5__.assert)(value !== undefined);
            writer.tag(2, _binary_encoding_js__WEBPACK_IMPORTED_MODULE_0__.WireType.LengthDelimited).bytes(value.toBinary(options));
            break;
    }
    writer.join();
}
// Value must not be undefined
function writeMessageField(writer, options, field, value) {
    const message = (0,_field_wrapper_js__WEBPACK_IMPORTED_MODULE_6__.wrapField)(field.T, value);
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (field.delimited)
        writer
            .tag(field.no, _binary_encoding_js__WEBPACK_IMPORTED_MODULE_0__.WireType.StartGroup)
            .raw(message.toBinary(options))
            .tag(field.no, _binary_encoding_js__WEBPACK_IMPORTED_MODULE_0__.WireType.EndGroup);
    else
        writer
            .tag(field.no, _binary_encoding_js__WEBPACK_IMPORTED_MODULE_0__.WireType.LengthDelimited)
            .bytes(message.toBinary(options));
}
function writeScalar(writer, type, fieldNo, value) {
    (0,_assert_js__WEBPACK_IMPORTED_MODULE_5__.assert)(value !== undefined);
    let [wireType, method] = scalarTypeInfo(type);
    writer.tag(fieldNo, wireType)[method](value);
}
function writePacked(writer, type, fieldNo, value) {
    if (!value.length) {
        return;
    }
    writer.tag(fieldNo, _binary_encoding_js__WEBPACK_IMPORTED_MODULE_0__.WireType.LengthDelimited).fork();
    let [, method] = scalarTypeInfo(type);
    for (let i = 0; i < value.length; i++) {
        writer[method](value[i]);
    }
    writer.join();
}
/**
 * Get information for writing a scalar value.
 *
 * Returns tuple:
 * [0]: appropriate WireType
 * [1]: name of the appropriate method of IBinaryWriter
 * [2]: whether the given value is a default value for proto3 semantics
 *
 * If argument `value` is omitted, [2] is always false.
 */
// TODO replace call-sites writeScalar() and writePacked(), then remove
function scalarTypeInfo(type) {
    let wireType = _binary_encoding_js__WEBPACK_IMPORTED_MODULE_0__.WireType.Varint;
    // eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check -- INT32, UINT32, SINT32 are covered by the defaults
    switch (type) {
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.BYTES:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.STRING:
            wireType = _binary_encoding_js__WEBPACK_IMPORTED_MODULE_0__.WireType.LengthDelimited;
            break;
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.DOUBLE:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.FIXED64:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.SFIXED64:
            wireType = _binary_encoding_js__WEBPACK_IMPORTED_MODULE_0__.WireType.Bit64;
            break;
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.FIXED32:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.SFIXED32:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.FLOAT:
            wireType = _binary_encoding_js__WEBPACK_IMPORTED_MODULE_0__.WireType.Bit32;
            break;
    }
    const method = _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType[type].toLowerCase();
    return [wireType, method];
}


/***/ }),
/* 24 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BinaryReader: () => (/* binding */ BinaryReader),
/* harmony export */   BinaryWriter: () => (/* binding */ BinaryWriter),
/* harmony export */   WireType: () => (/* binding */ WireType)
/* harmony export */ });
/* harmony import */ var _google_varint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _proto_int64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.



/* eslint-disable prefer-const,no-case-declarations,@typescript-eslint/restrict-plus-operands */
/**
 * Protobuf binary format wire types.
 *
 * A wire type provides just enough information to find the length of the
 * following value.
 *
 * See https://developers.google.com/protocol-buffers/docs/encoding#structure
 */
var WireType;
(function (WireType) {
    /**
     * Used for int32, int64, uint32, uint64, sint32, sint64, bool, enum
     */
    WireType[WireType["Varint"] = 0] = "Varint";
    /**
     * Used for fixed64, sfixed64, double.
     * Always 8 bytes with little-endian byte order.
     */
    WireType[WireType["Bit64"] = 1] = "Bit64";
    /**
     * Used for string, bytes, embedded messages, packed repeated fields
     *
     * Only repeated numeric types (types which use the varint, 32-bit,
     * or 64-bit wire types) can be packed. In proto3, such fields are
     * packed by default.
     */
    WireType[WireType["LengthDelimited"] = 2] = "LengthDelimited";
    /**
     * Start of a tag-delimited aggregate, such as a proto2 group, or a message
     * in editions with message_encoding = DELIMITED.
     */
    WireType[WireType["StartGroup"] = 3] = "StartGroup";
    /**
     * End of a tag-delimited aggregate.
     */
    WireType[WireType["EndGroup"] = 4] = "EndGroup";
    /**
     * Used for fixed32, sfixed32, float.
     * Always 4 bytes with little-endian byte order.
     */
    WireType[WireType["Bit32"] = 5] = "Bit32";
})(WireType || (WireType = {}));
class BinaryWriter {
    constructor(textEncoder) {
        /**
         * Previous fork states.
         */
        this.stack = [];
        this.textEncoder = textEncoder !== null && textEncoder !== void 0 ? textEncoder : new TextEncoder();
        this.chunks = [];
        this.buf = [];
    }
    /**
     * Return all bytes written and reset this writer.
     */
    finish() {
        this.chunks.push(new Uint8Array(this.buf)); // flush the buffer
        let len = 0;
        for (let i = 0; i < this.chunks.length; i++)
            len += this.chunks[i].length;
        let bytes = new Uint8Array(len);
        let offset = 0;
        for (let i = 0; i < this.chunks.length; i++) {
            bytes.set(this.chunks[i], offset);
            offset += this.chunks[i].length;
        }
        this.chunks = [];
        return bytes;
    }
    /**
     * Start a new fork for length-delimited data like a message
     * or a packed repeated field.
     *
     * Must be joined later with `join()`.
     */
    fork() {
        this.stack.push({ chunks: this.chunks, buf: this.buf });
        this.chunks = [];
        this.buf = [];
        return this;
    }
    /**
     * Join the last fork. Write its length and bytes, then
     * return to the previous state.
     */
    join() {
        // get chunk of fork
        let chunk = this.finish();
        // restore previous state
        let prev = this.stack.pop();
        if (!prev)
            throw new Error("invalid state, fork stack empty");
        this.chunks = prev.chunks;
        this.buf = prev.buf;
        // write length of chunk as varint
        this.uint32(chunk.byteLength);
        return this.raw(chunk);
    }
    /**
     * Writes a tag (field number and wire type).
     *
     * Equivalent to `uint32( (fieldNo << 3 | type) >>> 0 )`.
     *
     * Generated code should compute the tag ahead of time and call `uint32()`.
     */
    tag(fieldNo, type) {
        return this.uint32(((fieldNo << 3) | type) >>> 0);
    }
    /**
     * Write a chunk of raw bytes.
     */
    raw(chunk) {
        if (this.buf.length) {
            this.chunks.push(new Uint8Array(this.buf));
            this.buf = [];
        }
        this.chunks.push(chunk);
        return this;
    }
    /**
     * Write a `uint32` value, an unsigned 32 bit varint.
     */
    uint32(value) {
        (0,_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assertUInt32)(value);
        // write value as varint 32, inlined for speed
        while (value > 0x7f) {
            this.buf.push((value & 0x7f) | 0x80);
            value = value >>> 7;
        }
        this.buf.push(value);
        return this;
    }
    /**
     * Write a `int32` value, a signed 32 bit varint.
     */
    int32(value) {
        (0,_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assertInt32)(value);
        (0,_google_varint_js__WEBPACK_IMPORTED_MODULE_1__.varint32write)(value, this.buf);
        return this;
    }
    /**
     * Write a `bool` value, a variant.
     */
    bool(value) {
        this.buf.push(value ? 1 : 0);
        return this;
    }
    /**
     * Write a `bytes` value, length-delimited arbitrary data.
     */
    bytes(value) {
        this.uint32(value.byteLength); // write length of chunk as varint
        return this.raw(value);
    }
    /**
     * Write a `string` value, length-delimited data converted to UTF-8 text.
     */
    string(value) {
        let chunk = this.textEncoder.encode(value);
        this.uint32(chunk.byteLength); // write length of chunk as varint
        return this.raw(chunk);
    }
    /**
     * Write a `float` value, 32-bit floating point number.
     */
    float(value) {
        (0,_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assertFloat32)(value);
        let chunk = new Uint8Array(4);
        new DataView(chunk.buffer).setFloat32(0, value, true);
        return this.raw(chunk);
    }
    /**
     * Write a `double` value, a 64-bit floating point number.
     */
    double(value) {
        let chunk = new Uint8Array(8);
        new DataView(chunk.buffer).setFloat64(0, value, true);
        return this.raw(chunk);
    }
    /**
     * Write a `fixed32` value, an unsigned, fixed-length 32-bit integer.
     */
    fixed32(value) {
        (0,_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assertUInt32)(value);
        let chunk = new Uint8Array(4);
        new DataView(chunk.buffer).setUint32(0, value, true);
        return this.raw(chunk);
    }
    /**
     * Write a `sfixed32` value, a signed, fixed-length 32-bit integer.
     */
    sfixed32(value) {
        (0,_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assertInt32)(value);
        let chunk = new Uint8Array(4);
        new DataView(chunk.buffer).setInt32(0, value, true);
        return this.raw(chunk);
    }
    /**
     * Write a `sint32` value, a signed, zigzag-encoded 32-bit varint.
     */
    sint32(value) {
        (0,_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assertInt32)(value);
        // zigzag encode
        value = ((value << 1) ^ (value >> 31)) >>> 0;
        (0,_google_varint_js__WEBPACK_IMPORTED_MODULE_1__.varint32write)(value, this.buf);
        return this;
    }
    /**
     * Write a `fixed64` value, a signed, fixed-length 64-bit integer.
     */
    sfixed64(value) {
        let chunk = new Uint8Array(8), view = new DataView(chunk.buffer), tc = _proto_int64_js__WEBPACK_IMPORTED_MODULE_2__.protoInt64.enc(value);
        view.setInt32(0, tc.lo, true);
        view.setInt32(4, tc.hi, true);
        return this.raw(chunk);
    }
    /**
     * Write a `fixed64` value, an unsigned, fixed-length 64 bit integer.
     */
    fixed64(value) {
        let chunk = new Uint8Array(8), view = new DataView(chunk.buffer), tc = _proto_int64_js__WEBPACK_IMPORTED_MODULE_2__.protoInt64.uEnc(value);
        view.setInt32(0, tc.lo, true);
        view.setInt32(4, tc.hi, true);
        return this.raw(chunk);
    }
    /**
     * Write a `int64` value, a signed 64-bit varint.
     */
    int64(value) {
        let tc = _proto_int64_js__WEBPACK_IMPORTED_MODULE_2__.protoInt64.enc(value);
        (0,_google_varint_js__WEBPACK_IMPORTED_MODULE_1__.varint64write)(tc.lo, tc.hi, this.buf);
        return this;
    }
    /**
     * Write a `sint64` value, a signed, zig-zag-encoded 64-bit varint.
     */
    sint64(value) {
        let tc = _proto_int64_js__WEBPACK_IMPORTED_MODULE_2__.protoInt64.enc(value), 
        // zigzag encode
        sign = tc.hi >> 31, lo = (tc.lo << 1) ^ sign, hi = ((tc.hi << 1) | (tc.lo >>> 31)) ^ sign;
        (0,_google_varint_js__WEBPACK_IMPORTED_MODULE_1__.varint64write)(lo, hi, this.buf);
        return this;
    }
    /**
     * Write a `uint64` value, an unsigned 64-bit varint.
     */
    uint64(value) {
        let tc = _proto_int64_js__WEBPACK_IMPORTED_MODULE_2__.protoInt64.uEnc(value);
        (0,_google_varint_js__WEBPACK_IMPORTED_MODULE_1__.varint64write)(tc.lo, tc.hi, this.buf);
        return this;
    }
}
class BinaryReader {
    constructor(buf, textDecoder) {
        this.varint64 = _google_varint_js__WEBPACK_IMPORTED_MODULE_1__.varint64read; // dirty cast for `this`
        /**
         * Read a `uint32` field, an unsigned 32 bit varint.
         */
        this.uint32 = _google_varint_js__WEBPACK_IMPORTED_MODULE_1__.varint32read; // dirty cast for `this` and access to protected `buf`
        this.buf = buf;
        this.len = buf.length;
        this.pos = 0;
        this.view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
        this.textDecoder = textDecoder !== null && textDecoder !== void 0 ? textDecoder : new TextDecoder();
    }
    /**
     * Reads a tag - field number and wire type.
     */
    tag() {
        let tag = this.uint32(), fieldNo = tag >>> 3, wireType = tag & 7;
        if (fieldNo <= 0 || wireType < 0 || wireType > 5)
            throw new Error("illegal tag: field no " + fieldNo + " wire type " + wireType);
        return [fieldNo, wireType];
    }
    /**
     * Skip one element and return the skipped data.
     *
     * When skipping StartGroup, provide the tags field number to check for
     * matching field number in the EndGroup tag.
     */
    skip(wireType, fieldNo) {
        let start = this.pos;
        switch (wireType) {
            case WireType.Varint:
                while (this.buf[this.pos++] & 0x80) {
                    // ignore
                }
                break;
            // eslint-disable-next-line
            // @ts-ignore TS7029: Fallthrough case in switch
            case WireType.Bit64:
                this.pos += 4;
            // eslint-disable-next-line
            // @ts-ignore TS7029: Fallthrough case in switch
            case WireType.Bit32:
                this.pos += 4;
                break;
            case WireType.LengthDelimited:
                let len = this.uint32();
                this.pos += len;
                break;
            case WireType.StartGroup:
                for (;;) {
                    const [fn, wt] = this.tag();
                    if (wt === WireType.EndGroup) {
                        if (fieldNo !== undefined && fn !== fieldNo) {
                            throw new Error("invalid end group tag");
                        }
                        break;
                    }
                    this.skip(wt, fn);
                }
                break;
            default:
                throw new Error("cant skip wire type " + wireType);
        }
        this.assertBounds();
        return this.buf.subarray(start, this.pos);
    }
    /**
     * Throws error if position in byte array is out of range.
     */
    assertBounds() {
        if (this.pos > this.len)
            throw new RangeError("premature EOF");
    }
    /**
     * Read a `int32` field, a signed 32 bit varint.
     */
    int32() {
        return this.uint32() | 0;
    }
    /**
     * Read a `sint32` field, a signed, zigzag-encoded 32-bit varint.
     */
    sint32() {
        let zze = this.uint32();
        // decode zigzag
        return (zze >>> 1) ^ -(zze & 1);
    }
    /**
     * Read a `int64` field, a signed 64-bit varint.
     */
    int64() {
        return _proto_int64_js__WEBPACK_IMPORTED_MODULE_2__.protoInt64.dec(...this.varint64());
    }
    /**
     * Read a `uint64` field, an unsigned 64-bit varint.
     */
    uint64() {
        return _proto_int64_js__WEBPACK_IMPORTED_MODULE_2__.protoInt64.uDec(...this.varint64());
    }
    /**
     * Read a `sint64` field, a signed, zig-zag-encoded 64-bit varint.
     */
    sint64() {
        let [lo, hi] = this.varint64();
        // decode zig zag
        let s = -(lo & 1);
        lo = ((lo >>> 1) | ((hi & 1) << 31)) ^ s;
        hi = (hi >>> 1) ^ s;
        return _proto_int64_js__WEBPACK_IMPORTED_MODULE_2__.protoInt64.dec(lo, hi);
    }
    /**
     * Read a `bool` field, a variant.
     */
    bool() {
        let [lo, hi] = this.varint64();
        return lo !== 0 || hi !== 0;
    }
    /**
     * Read a `fixed32` field, an unsigned, fixed-length 32-bit integer.
     */
    fixed32() {
        return this.view.getUint32((this.pos += 4) - 4, true);
    }
    /**
     * Read a `sfixed32` field, a signed, fixed-length 32-bit integer.
     */
    sfixed32() {
        return this.view.getInt32((this.pos += 4) - 4, true);
    }
    /**
     * Read a `fixed64` field, an unsigned, fixed-length 64 bit integer.
     */
    fixed64() {
        return _proto_int64_js__WEBPACK_IMPORTED_MODULE_2__.protoInt64.uDec(this.sfixed32(), this.sfixed32());
    }
    /**
     * Read a `fixed64` field, a signed, fixed-length 64-bit integer.
     */
    sfixed64() {
        return _proto_int64_js__WEBPACK_IMPORTED_MODULE_2__.protoInt64.dec(this.sfixed32(), this.sfixed32());
    }
    /**
     * Read a `float` field, 32-bit floating point number.
     */
    float() {
        return this.view.getFloat32((this.pos += 4) - 4, true);
    }
    /**
     * Read a `double` field, a 64-bit floating point number.
     */
    double() {
        return this.view.getFloat64((this.pos += 8) - 8, true);
    }
    /**
     * Read a `bytes` field, length-delimited arbitrary data.
     */
    bytes() {
        let len = this.uint32(), start = this.pos;
        this.pos += len;
        this.assertBounds();
        return this.buf.subarray(start, start + len);
    }
    /**
     * Read a `string` field, length-delimited data converted to UTF-8 text.
     */
    string() {
        return this.textDecoder.decode(this.bytes());
    }
}


/***/ }),
/* 25 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeUtilCommon: () => (/* binding */ makeUtilCommon)
/* harmony export */ });
/* harmony import */ var _enum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _scalars_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _scalar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _is_message_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.





/* eslint-disable @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-argument,no-case-declarations */
function makeUtilCommon() {
    return {
        setEnumType: _enum_js__WEBPACK_IMPORTED_MODULE_0__.setEnumType,
        initPartial(source, target) {
            if (source === undefined) {
                return;
            }
            const type = target.getType();
            for (const member of type.fields.byMember()) {
                const localName = member.localName, t = target, s = source;
                if (s[localName] == null) {
                    // TODO if source is a Message instance, we should use isFieldSet() here to support future field presence
                    continue;
                }
                switch (member.kind) {
                    case "oneof":
                        const sk = s[localName].case;
                        if (sk === undefined) {
                            continue;
                        }
                        const sourceField = member.findField(sk);
                        let val = s[localName].value;
                        if (sourceField &&
                            sourceField.kind == "message" &&
                            !(0,_is_message_js__WEBPACK_IMPORTED_MODULE_1__.isMessage)(val, sourceField.T)) {
                            val = new sourceField.T(val);
                        }
                        else if (sourceField &&
                            sourceField.kind === "scalar" &&
                            sourceField.T === _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.BYTES) {
                            val = toU8Arr(val);
                        }
                        t[localName] = { case: sk, value: val };
                        break;
                    case "scalar":
                    case "enum":
                        let copy = s[localName];
                        if (member.T === _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.BYTES) {
                            copy = member.repeated
                                ? copy.map(toU8Arr)
                                : toU8Arr(copy);
                        }
                        t[localName] = copy;
                        break;
                    case "map":
                        switch (member.V.kind) {
                            case "scalar":
                            case "enum":
                                if (member.V.T === _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.BYTES) {
                                    for (const [k, v] of Object.entries(s[localName])) {
                                        t[localName][k] = toU8Arr(v);
                                    }
                                }
                                else {
                                    Object.assign(t[localName], s[localName]);
                                }
                                break;
                            case "message":
                                const messageType = member.V.T;
                                for (const k of Object.keys(s[localName])) {
                                    let val = s[localName][k];
                                    if (!messageType.fieldWrapper) {
                                        // We only take partial input for messages that are not a wrapper type.
                                        // For those messages, we recursively normalize the partial input.
                                        val = new messageType(val);
                                    }
                                    t[localName][k] = val;
                                }
                                break;
                        }
                        break;
                    case "message":
                        const mt = member.T;
                        if (member.repeated) {
                            t[localName] = s[localName].map((val) => (0,_is_message_js__WEBPACK_IMPORTED_MODULE_1__.isMessage)(val, mt) ? val : new mt(val));
                        }
                        else {
                            const val = s[localName];
                            if (mt.fieldWrapper) {
                                if (
                                // We can't use BytesValue.typeName as that will create a circular import
                                mt.typeName === "google.protobuf.BytesValue") {
                                    t[localName] = toU8Arr(val);
                                }
                                else {
                                    t[localName] = val;
                                }
                            }
                            else {
                                t[localName] = (0,_is_message_js__WEBPACK_IMPORTED_MODULE_1__.isMessage)(val, mt) ? val : new mt(val);
                            }
                        }
                        break;
                }
            }
        },
        // TODO use isFieldSet() here to support future field presence
        equals(type, a, b) {
            if (a === b) {
                return true;
            }
            if (!a || !b) {
                return false;
            }
            return type.fields.byMember().every((m) => {
                const va = a[m.localName];
                const vb = b[m.localName];
                if (m.repeated) {
                    if (va.length !== vb.length) {
                        return false;
                    }
                    // eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check -- repeated fields are never "map"
                    switch (m.kind) {
                        case "message":
                            return va.every((a, i) => m.T.equals(a, vb[i]));
                        case "scalar":
                            return va.every((a, i) => (0,_scalars_js__WEBPACK_IMPORTED_MODULE_3__.scalarEquals)(m.T, a, vb[i]));
                        case "enum":
                            return va.every((a, i) => (0,_scalars_js__WEBPACK_IMPORTED_MODULE_3__.scalarEquals)(_scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.INT32, a, vb[i]));
                    }
                    throw new Error(`repeated cannot contain ${m.kind}`);
                }
                switch (m.kind) {
                    case "message":
                        return m.T.equals(va, vb);
                    case "enum":
                        return (0,_scalars_js__WEBPACK_IMPORTED_MODULE_3__.scalarEquals)(_scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.INT32, va, vb);
                    case "scalar":
                        return (0,_scalars_js__WEBPACK_IMPORTED_MODULE_3__.scalarEquals)(m.T, va, vb);
                    case "oneof":
                        if (va.case !== vb.case) {
                            return false;
                        }
                        const s = m.findField(va.case);
                        if (s === undefined) {
                            return true;
                        }
                        // eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check -- oneof fields are never "map"
                        switch (s.kind) {
                            case "message":
                                return s.T.equals(va.value, vb.value);
                            case "enum":
                                return (0,_scalars_js__WEBPACK_IMPORTED_MODULE_3__.scalarEquals)(_scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.INT32, va.value, vb.value);
                            case "scalar":
                                return (0,_scalars_js__WEBPACK_IMPORTED_MODULE_3__.scalarEquals)(s.T, va.value, vb.value);
                        }
                        throw new Error(`oneof cannot contain ${s.kind}`);
                    case "map":
                        const keys = Object.keys(va).concat(Object.keys(vb));
                        switch (m.V.kind) {
                            case "message":
                                const messageType = m.V.T;
                                return keys.every((k) => messageType.equals(va[k], vb[k]));
                            case "enum":
                                return keys.every((k) => (0,_scalars_js__WEBPACK_IMPORTED_MODULE_3__.scalarEquals)(_scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.INT32, va[k], vb[k]));
                            case "scalar":
                                const scalarType = m.V.T;
                                return keys.every((k) => (0,_scalars_js__WEBPACK_IMPORTED_MODULE_3__.scalarEquals)(scalarType, va[k], vb[k]));
                        }
                        break;
                }
            });
        },
        // TODO use isFieldSet() here to support future field presence
        clone(message) {
            const type = message.getType(), target = new type(), any = target;
            for (const member of type.fields.byMember()) {
                const source = message[member.localName];
                let copy;
                if (member.repeated) {
                    copy = source.map(cloneSingularField);
                }
                else if (member.kind == "map") {
                    copy = any[member.localName];
                    for (const [key, v] of Object.entries(source)) {
                        copy[key] = cloneSingularField(v);
                    }
                }
                else if (member.kind == "oneof") {
                    const f = member.findField(source.case);
                    copy = f
                        ? { case: source.case, value: cloneSingularField(source.value) }
                        : { case: undefined };
                }
                else {
                    copy = cloneSingularField(source);
                }
                any[member.localName] = copy;
            }
            for (const uf of type.runtime.bin.listUnknownFields(message)) {
                type.runtime.bin.onUnknownField(any, uf.no, uf.wireType, uf.data);
            }
            return target;
        },
    };
}
// clone a single field value - i.e. the element type of repeated fields, the value type of maps
function cloneSingularField(value) {
    if (value === undefined) {
        return value;
    }
    if ((0,_is_message_js__WEBPACK_IMPORTED_MODULE_1__.isMessage)(value)) {
        return value.clone();
    }
    if (value instanceof Uint8Array) {
        const c = new Uint8Array(value.byteLength);
        c.set(value);
        return c;
    }
    return value;
}
// converts any ArrayLike<number> to Uint8Array if necessary.
function toU8Arr(input) {
    return input instanceof Uint8Array ? input : new Uint8Array(input);
}


/***/ }),
/* 26 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InternalFieldList: () => (/* binding */ InternalFieldList)
/* harmony export */ });
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
class InternalFieldList {
    constructor(fields, normalizer) {
        this._fields = fields;
        this._normalizer = normalizer;
    }
    findJsonName(jsonName) {
        if (!this.jsonNames) {
            const t = {};
            for (const f of this.list()) {
                t[f.jsonName] = t[f.name] = f;
            }
            this.jsonNames = t;
        }
        return this.jsonNames[jsonName];
    }
    find(fieldNo) {
        if (!this.numbers) {
            const t = {};
            for (const f of this.list()) {
                t[f.no] = f;
            }
            this.numbers = t;
        }
        return this.numbers[fieldNo];
    }
    list() {
        if (!this.all) {
            this.all = this._normalizer(this._fields);
        }
        return this.all;
    }
    byNumber() {
        if (!this.numbersAsc) {
            this.numbersAsc = this.list()
                .concat()
                .sort((a, b) => a.no - b.no);
        }
        return this.numbersAsc;
    }
    byMember() {
        if (!this.members) {
            this.members = [];
            const a = this.members;
            let o;
            for (const f of this.list()) {
                if (f.oneof) {
                    if (f.oneof !== o) {
                        o = f.oneof;
                        a.push(o);
                    }
                }
                else {
                    a.push(f);
                }
            }
        }
        return this.members;
    }
}


/***/ }),
/* 27 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeFieldInfos: () => (/* binding */ normalizeFieldInfos)
/* harmony export */ });
/* harmony import */ var _field_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
/* harmony import */ var _names_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _scalar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.



/**
 * Convert a collection of field info to an array of normalized FieldInfo.
 *
 * The argument `packedByDefault` specifies whether fields that do not specify
 * `packed` should be packed (proto3) or unpacked (proto2).
 */
function normalizeFieldInfos(fieldInfos, packedByDefault) {
    var _a, _b, _c, _d, _e, _f;
    const r = [];
    let o;
    for (const field of typeof fieldInfos == "function"
        ? fieldInfos()
        : fieldInfos) {
        const f = field;
        f.localName = (0,_names_js__WEBPACK_IMPORTED_MODULE_0__.localFieldName)(field.name, field.oneof !== undefined);
        f.jsonName = (_a = field.jsonName) !== null && _a !== void 0 ? _a : (0,_names_js__WEBPACK_IMPORTED_MODULE_0__.fieldJsonName)(field.name);
        f.repeated = (_b = field.repeated) !== null && _b !== void 0 ? _b : false;
        if (field.kind == "scalar") {
            f.L = (_c = field.L) !== null && _c !== void 0 ? _c : _scalar_js__WEBPACK_IMPORTED_MODULE_1__.LongType.BIGINT;
        }
        f.delimited = (_d = field.delimited) !== null && _d !== void 0 ? _d : false;
        f.req = (_e = field.req) !== null && _e !== void 0 ? _e : false;
        f.opt = (_f = field.opt) !== null && _f !== void 0 ? _f : false;
        if (field.packed === undefined) {
            if (packedByDefault) {
                f.packed =
                    field.kind == "enum" ||
                        (field.kind == "scalar" &&
                            field.T != _scalar_js__WEBPACK_IMPORTED_MODULE_1__.ScalarType.BYTES &&
                            field.T != _scalar_js__WEBPACK_IMPORTED_MODULE_1__.ScalarType.STRING);
            }
            else {
                f.packed = false;
            }
        }
        // We do not surface options at this time
        // f.options = field.options ?? emptyReadonlyObject;
        if (field.oneof !== undefined) {
            const ooname = typeof field.oneof == "string" ? field.oneof : field.oneof.name;
            if (!o || o.name != ooname) {
                o = new _field_js__WEBPACK_IMPORTED_MODULE_2__.InternalOneofInfo(ooname);
            }
            f.oneof = o;
            o.addField(f);
        }
        r.push(f);
    }
    return r;
}


/***/ }),
/* 28 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InternalOneofInfo: () => (/* binding */ InternalOneofInfo)
/* harmony export */ });
/* harmony import */ var _names_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _assert_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


class InternalOneofInfo {
    constructor(name) {
        this.kind = "oneof";
        this.repeated = false;
        this.packed = false;
        this.opt = false;
        this.req = false;
        this.default = undefined;
        this.fields = [];
        this.name = name;
        this.localName = (0,_names_js__WEBPACK_IMPORTED_MODULE_0__.localOneofName)(name);
    }
    addField(field) {
        (0,_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(field.oneof === this, `field ${field.name} not one of ${this.name}`);
        this.fields.push(field);
    }
    findField(localName) {
        if (!this._lookup) {
            this._lookup = Object.create(null);
            for (let i = 0; i < this.fields.length; i++) {
                this._lookup[this.fields[i].localName] = this.fields[i];
            }
        }
        return this._lookup[localName];
    }
}


/***/ }),
/* 29 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fieldJsonName: () => (/* binding */ fieldJsonName),
/* harmony export */   findEnumSharedPrefix: () => (/* binding */ findEnumSharedPrefix),
/* harmony export */   localFieldName: () => (/* binding */ localFieldName),
/* harmony export */   localName: () => (/* binding */ localName),
/* harmony export */   localOneofName: () => (/* binding */ localOneofName),
/* harmony export */   safeIdentifier: () => (/* binding */ safeIdentifier),
/* harmony export */   safeObjectProperty: () => (/* binding */ safeObjectProperty)
/* harmony export */ });
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
/**
 * Returns the name of a protobuf element in generated code.
 *
 * Field names - including oneofs - are converted to lowerCamelCase. For
 * messages, enumerations and services, the package name is stripped from
 * the type name. For nested messages and enumerations, the names are joined
 * with an underscore. For methods, the first character is made lowercase.
 */
function localName(desc) {
    switch (desc.kind) {
        case "field":
            return localFieldName(desc.name, desc.oneof !== undefined);
        case "oneof":
            return localOneofName(desc.name);
        case "enum":
        case "message":
        case "service":
        case "extension": {
            const pkg = desc.file.proto.package;
            const offset = pkg === undefined ? 0 : pkg.length + 1;
            const name = desc.typeName.substring(offset).replace(/\./g, "_");
            // For services, we only care about safe identifiers, not safe object properties,
            // but we have shipped v1 with a bug that respected object properties, and we
            // do not want to introduce a breaking change, so we continue to escape for
            // safe object properties.
            // See https://github.com/bufbuild/protobuf-es/pull/391
            return safeObjectProperty(safeIdentifier(name));
        }
        case "enum_value": {
            let name = desc.name;
            const sharedPrefix = desc.parent.sharedPrefix;
            if (sharedPrefix !== undefined) {
                name = name.substring(sharedPrefix.length);
            }
            return safeObjectProperty(name);
        }
        case "rpc": {
            let name = desc.name;
            if (name.length == 0) {
                return name;
            }
            name = name[0].toLowerCase() + name.substring(1);
            return safeObjectProperty(name);
        }
    }
}
/**
 * Returns the name of a field in generated code.
 */
function localFieldName(protoName, inOneof) {
    const name = protoCamelCase(protoName);
    if (inOneof) {
        // oneof member names are not properties, but values of the `case` property.
        return name;
    }
    return safeObjectProperty(safeMessageProperty(name));
}
/**
 * Returns the name of a oneof group in generated code.
 */
function localOneofName(protoName) {
    return localFieldName(protoName, false);
}
/**
 * Returns the JSON name for a protobuf field, exactly like protoc does.
 */
const fieldJsonName = protoCamelCase;
/**
 * Finds a prefix shared by enum values, for example `MY_ENUM_` for
 * `enum MyEnum {MY_ENUM_A=0; MY_ENUM_B=1;}`.
 */
function findEnumSharedPrefix(enumName, valueNames) {
    const prefix = camelToSnakeCase(enumName) + "_";
    for (const name of valueNames) {
        if (!name.toLowerCase().startsWith(prefix)) {
            return undefined;
        }
        const shortName = name.substring(prefix.length);
        if (shortName.length == 0) {
            return undefined;
        }
        if (/^\d/.test(shortName)) {
            // identifiers must not start with numbers
            return undefined;
        }
    }
    return prefix;
}
/**
 * Converts lowerCamelCase or UpperCamelCase into lower_snake_case.
 * This is used to find shared prefixes in an enum.
 */
function camelToSnakeCase(camel) {
    return (camel.substring(0, 1) + camel.substring(1).replace(/[A-Z]/g, (c) => "_" + c)).toLowerCase();
}
/**
 * Converts snake_case to protoCamelCase according to the convention
 * used by protoc to convert a field name to a JSON name.
 */
function protoCamelCase(snakeCase) {
    let capNext = false;
    const b = [];
    for (let i = 0; i < snakeCase.length; i++) {
        let c = snakeCase.charAt(i);
        switch (c) {
            case "_":
                capNext = true;
                break;
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                b.push(c);
                capNext = false;
                break;
            default:
                if (capNext) {
                    capNext = false;
                    c = c.toUpperCase();
                }
                b.push(c);
                break;
        }
    }
    return b.join("");
}
/**
 * Names that cannot be used for identifiers, such as class names,
 * but _can_ be used for object properties.
 */
const reservedIdentifiers = new Set([
    // ECMAScript 2015 keywords
    "break",
    "case",
    "catch",
    "class",
    "const",
    "continue",
    "debugger",
    "default",
    "delete",
    "do",
    "else",
    "export",
    "extends",
    "false",
    "finally",
    "for",
    "function",
    "if",
    "import",
    "in",
    "instanceof",
    "new",
    "null",
    "return",
    "super",
    "switch",
    "this",
    "throw",
    "true",
    "try",
    "typeof",
    "var",
    "void",
    "while",
    "with",
    "yield",
    // ECMAScript 2015 future reserved keywords
    "enum",
    "implements",
    "interface",
    "let",
    "package",
    "private",
    "protected",
    "public",
    "static",
    // Class name cannot be 'Object' when targeting ES5 with module CommonJS
    "Object",
    // TypeScript keywords that cannot be used for types (as opposed to variables)
    "bigint",
    "number",
    "boolean",
    "string",
    "object",
    // Identifiers reserved for the runtime, so we can generate legible code
    "globalThis",
    "Uint8Array",
    "Partial",
]);
/**
 * Names that cannot be used for object properties because they are reserved
 * by built-in JavaScript properties.
 */
const reservedObjectProperties = new Set([
    // names reserved by JavaScript
    "constructor",
    "toString",
    "toJSON",
    "valueOf",
]);
/**
 * Names that cannot be used for object properties because they are reserved
 * by the runtime.
 */
const reservedMessageProperties = new Set([
    // names reserved by the runtime
    "getType",
    "clone",
    "equals",
    "fromBinary",
    "fromJson",
    "fromJsonString",
    "toBinary",
    "toJson",
    "toJsonString",
    // names reserved by the runtime for the future
    "toObject",
]);
const fallback = (name) => `${name}$`;
/**
 * Will wrap names that are Object prototype properties or names reserved
 * for `Message`s.
 */
const safeMessageProperty = (name) => {
    if (reservedMessageProperties.has(name)) {
        return fallback(name);
    }
    return name;
};
/**
 * Names that cannot be used for object properties because they are reserved
 * by built-in JavaScript properties.
 */
const safeObjectProperty = (name) => {
    if (reservedObjectProperties.has(name)) {
        return fallback(name);
    }
    return name;
};
/**
 * Names that can be used for identifiers or class properties
 */
const safeIdentifier = (name) => {
    if (reservedIdentifiers.has(name)) {
        return fallback(name);
    }
    return name;
};


/***/ }),
/* 30 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Code: () => (/* binding */ Code)
/* harmony export */ });
// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
/**
 * Connect represents categories of errors as codes, and each code maps to a
 * specific HTTP status code. The codes and their semantics were chosen to
 * match gRPC. Only the codes below are valid — there are no user-defined
 * codes.
 *
 * See the specification at https://connectrpc.com/docs/protocol#error-codes
 * for details.
 */
var Code;
(function (Code) {
    /**
     * Canceled, usually be the user
     */
    Code[Code["Canceled"] = 1] = "Canceled";
    /**
     * Unknown error
     */
    Code[Code["Unknown"] = 2] = "Unknown";
    /**
     * Argument invalid regardless of system state
     */
    Code[Code["InvalidArgument"] = 3] = "InvalidArgument";
    /**
     * Operation expired, may or may not have completed.
     */
    Code[Code["DeadlineExceeded"] = 4] = "DeadlineExceeded";
    /**
     * Entity not found.
     */
    Code[Code["NotFound"] = 5] = "NotFound";
    /**
     * Entity already exists.
     */
    Code[Code["AlreadyExists"] = 6] = "AlreadyExists";
    /**
     * Operation not authorized.
     */
    Code[Code["PermissionDenied"] = 7] = "PermissionDenied";
    /**
     * Quota exhausted.
     */
    Code[Code["ResourceExhausted"] = 8] = "ResourceExhausted";
    /**
     * Argument invalid in current system state.
     */
    Code[Code["FailedPrecondition"] = 9] = "FailedPrecondition";
    /**
     * Operation aborted.
     */
    Code[Code["Aborted"] = 10] = "Aborted";
    /**
     * Out of bounds, use instead of FailedPrecondition.
     */
    Code[Code["OutOfRange"] = 11] = "OutOfRange";
    /**
     * Operation not implemented or disabled.
     */
    Code[Code["Unimplemented"] = 12] = "Unimplemented";
    /**
     * Internal error, reserved for "serious errors".
     */
    Code[Code["Internal"] = 13] = "Internal";
    /**
     * Unavailable, client should back off and retry.
     */
    Code[Code["Unavailable"] = 14] = "Unavailable";
    /**
     * Unrecoverable data loss or corruption.
     */
    Code[Code["DataLoss"] = 15] = "DataLoss";
    /**
     * Request isn't authenticated.
     */
    Code[Code["Unauthenticated"] = 16] = "Unauthenticated";
})(Code || (Code = {}));


/***/ }),
/* 31 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConnectError: () => (/* binding */ ConnectError)
/* harmony export */ });
/* harmony import */ var _code_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _protocol_connect_code_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32);
// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


/**
 * ConnectError captures four pieces of information: a Code, an error
 * message, an optional cause of the error, and an optional collection of
 * arbitrary Protobuf messages called  "details".
 *
 * Because developer tools typically show just the error message, we prefix
 * it with the status code, so that the most important information is always
 * visible immediately.
 *
 * Error details are wrapped with google.protobuf.Any on the wire, so that
 * a server or middleware can attach arbitrary data to an error. Use the
 * method findDetails() to retrieve the details.
 */
class ConnectError extends Error {
    /**
     * Create a new ConnectError.
     * If no code is provided, code "unknown" is used.
     * Outgoing details are only relevant for the server side - a service may
     * raise an error with details, and it is up to the protocol implementation
     * to encode and send the details along with error.
     */
    constructor(message, code = _code_js__WEBPACK_IMPORTED_MODULE_0__.Code.Unknown, metadata, outgoingDetails, cause) {
        super(createMessage(message, code));
        this.name = "ConnectError";
        // see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#example
        Object.setPrototypeOf(this, new.target.prototype);
        this.rawMessage = message;
        this.code = code;
        this.metadata = new Headers(metadata !== null && metadata !== void 0 ? metadata : {});
        this.details = outgoingDetails !== null && outgoingDetails !== void 0 ? outgoingDetails : [];
        this.cause = cause;
    }
    /**
     * Convert any value - typically a caught error into a ConnectError,
     * following these rules:
     * - If the value is already a ConnectError, return it as is.
     * - If the value is an AbortError from the fetch API, return the message
     *   of the AbortError with code Canceled.
     * - For other Errors, return the error message with code Unknown by default.
     * - For other values, return the values String representation as a message,
     *   with the code Unknown by default.
     * The original value will be used for the "cause" property for the new
     * ConnectError.
     */
    static from(reason, code = _code_js__WEBPACK_IMPORTED_MODULE_0__.Code.Unknown) {
        if (reason instanceof ConnectError) {
            return reason;
        }
        if (reason instanceof Error) {
            if (reason.name == "AbortError") {
                // Fetch requests can only be canceled with an AbortController.
                // We detect that condition by looking at the name of the raised
                // error object, and translate to the appropriate status code.
                return new ConnectError(reason.message, _code_js__WEBPACK_IMPORTED_MODULE_0__.Code.Canceled);
            }
            return new ConnectError(reason.message, code, undefined, undefined, reason);
        }
        return new ConnectError(String(reason), code, undefined, undefined, reason);
    }
    static [Symbol.hasInstance](v) {
        if (!(v instanceof Error)) {
            return false;
        }
        if (Object.getPrototypeOf(v) === ConnectError.prototype) {
            return true;
        }
        return (v.name === "ConnectError" &&
            "code" in v &&
            typeof v.code === "number" &&
            "metadata" in v &&
            "details" in v &&
            Array.isArray(v.details) &&
            "rawMessage" in v &&
            typeof v.rawMessage == "string" &&
            "cause" in v);
    }
    findDetails(typeOrRegistry) {
        const registry = "typeName" in typeOrRegistry
            ? {
                findMessage: (typeName) => typeName === typeOrRegistry.typeName ? typeOrRegistry : undefined,
            }
            : typeOrRegistry;
        const details = [];
        for (const data of this.details) {
            if ("getType" in data) {
                if (registry.findMessage(data.getType().typeName)) {
                    details.push(data);
                }
                continue;
            }
            const type = registry.findMessage(data.type);
            if (type) {
                try {
                    details.push(type.fromBinary(data.value));
                }
                catch (_) {
                    // We silently give up if we are unable to parse the detail, because
                    // that appears to be the least worst behavior.
                    // It is very unlikely that a user surrounds a catch body handling the
                    // error with another try-catch statement, and we do not want to
                    // recommend doing so.
                }
            }
        }
        return details;
    }
}
/**
 * Create an error message, prefixing the given code.
 */
function createMessage(message, code) {
    return message.length
        ? `[${(0,_protocol_connect_code_string_js__WEBPACK_IMPORTED_MODULE_1__.codeToString)(code)}] ${message}`
        : `[${(0,_protocol_connect_code_string_js__WEBPACK_IMPORTED_MODULE_1__.codeToString)(code)}]`;
}


/***/ }),
/* 32 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   codeFromString: () => (/* binding */ codeFromString),
/* harmony export */   codeToString: () => (/* binding */ codeToString)
/* harmony export */ });
/* harmony import */ var _code_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * codeToString returns the string representation of a Code.
 *
 * @private Internal code, does not follow semantic versioning.
 */
function codeToString(value) {
    const name = _code_js__WEBPACK_IMPORTED_MODULE_0__.Code[value];
    if (typeof name != "string") {
        return value.toString();
    }
    return (name[0].toLowerCase() +
        name.substring(1).replace(/[A-Z]/g, (c) => "_" + c.toLowerCase()));
}
let stringToCode;
/**
 * codeFromString parses the string representation of a Code in snake_case.
 * For example, the string "permission_denied" parses into Code.PermissionDenied.
 *
 * If the given string cannot be parsed, the function returns undefined.
 *
 * @private Internal code, does not follow semantic versioning.
 */
function codeFromString(value) {
    if (!stringToCode) {
        stringToCode = {};
        for (const value of Object.values(_code_js__WEBPACK_IMPORTED_MODULE_0__.Code)) {
            if (typeof value == "string") {
                continue;
            }
            stringToCode[codeToString(value)] = value;
        }
    }
    return stringToCode[value];
}


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activate: () => (/* binding */ activate),
/* harmony export */   deactivate: () => (/* binding */ deactivate)
/* harmony export */ });
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _backgroundComposerRemoteAuthorityResolver_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


function activate(context) {
  const outputChannel = vscode__WEBPACK_IMPORTED_MODULE_0__.window.createOutputChannel("Cursor Resolver");
  context.subscriptions.push(outputChannel);
  const isNode = typeof process !== "undefined" && !!process.versions?.node;
  outputChannel.appendLine(`[cursor-resolver] Running in ${isNode ? "Node.js" : "web-worker"} extension host`);
  const remoteAuthorityResolver = new _backgroundComposerRemoteAuthorityResolver_js__WEBPACK_IMPORTED_MODULE_1__.BackgroundComposerAuthorityResolver(
    vscode__WEBPACK_IMPORTED_MODULE_0__.cursor.connectionTokenProvider,
    outputChannel
  );
  context.subscriptions.push(
    vscode__WEBPACK_IMPORTED_MODULE_0__.workspace.registerRemoteAuthorityResolver(
      "background-composer",
      remoteAuthorityResolver
    )
  );
}
function deactivate() {
}

})();

var __webpack_export_target__ = exports;
for(var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map