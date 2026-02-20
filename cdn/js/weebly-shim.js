// weebly-shim.js - Minimal stubs for Weebly runtime functions
// These prevent JS errors from inline scripts that reference Weebly globals
var _W = _W || {};
_W.setup_rpc = function() {};
_W.setup_model_rpc = function() {};
_W.relinquish = function() {};
_W.themePlugins = [];
_W.recaptchaUrl = "";
_W.configDomain = "";
_W.securePrefix = "";
_W.customerLocale = "en_US";
var STATIC_BASE = './';
var ASSETS_BASE = './';
var STYLE_PREFIX = 'wsite';
var IS_ARCHIVE = 1;
var Weebly = Weebly || {};
function initPublishedFlyoutMenus() {}
function initCustomerAccountsModels() {}
function initFlyouts() {}

// Ensure Weebly.jQuery is set once jQuery is loaded
if (typeof jQuery !== 'undefined') {
  Weebly.jQuery = jQuery;
}
