/* global Apple */
Accounts.oauth.registerService("apple");

if (Meteor.isClient) {
  const loginWithApple = (options, callback) => {
    // support a callback without options
    if (!callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    const credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(
      callback
    );
    Apple.requestCredential(
      options,
      callback,
      credentialRequestCompleteCallback
    );
  };
  Accounts.registerClientLoginFunction("apple", loginWithApple);
  Meteor.loginWithApple = (...args) =>
    Accounts.applyLoginFunction("apple", args);
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: Apple.whitelistedFields
      .concat(["accessToken", "expiresAt"])
      .map(
        (subfield) => `services.apple.${subfield}` // don't publish refresh token
      ),

    forOtherUsers:
      // even with autopublish, no legitimate web app should be
      // publishing all users' emails
      Apple.whitelistedFields
        .filter((field) => field !== "email" && field !== "verified_email")
        .map((subfield) => `services.apple.${subfield}`),
  });
}
