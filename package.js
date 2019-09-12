Package.describe({
  name: "bigowl:accounts-apple",
  version: "0.0.1",
  summary: "OAuth2 for Sign in with Apple",
  git: "https://github.com/jramer/bigowl-accounts-apple",
  documentation: "README.md"
});

Package.onUse(function(api) {
  api.versionsFrom("1.8.1");
  api.use("ecmascript");
  api.use(['underscore', 'random']);
  api.use("accounts-base", ["client", "server"]);
  // Export Accounts (etc) to packages using this one.
  api.imply("accounts-base", ["client", "server"]);

  api.use("accounts-oauth", ["client", "server"]);
  api.use("bigowl:apple@0.0.1", ["client", "server"]);

  api.addFiles("accounts-apple_login_button.css", "client");

  api.mainModule("accounts-apple.js");
});

Package.onTest(function(api) {
  api.use("ecmascript");
  api.use("tinytest");
  api.use("bigowl:accounts-apple");
  api.mainModule("accounts-apple-tests.js");
});
