const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    retries: {
      runMode: 2,
      openMode: 3,
    },
    projectId: "tm2r8v",
    defaultCommandTimeout: 10000,
    testIsolation: false,
    waitForAnimations: false,
    animationDistanceThreshold: 50,
    chromeWebSecurity: false,
    experimentalStudio: true,
    experimentalSessionSypport: false,
    scrollBehavior: false,
    failOnNonZeroExit: false,
  },
});
