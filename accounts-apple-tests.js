// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by accounts-apple.js.
import { name as packageName } from "meteor/bigowl:accounts-apple";

// Write your tests here!
// Here is an example.
Tinytest.add("accounts-apple - example", function(test) {
  test.equal(packageName, "accounts-apple");
});
