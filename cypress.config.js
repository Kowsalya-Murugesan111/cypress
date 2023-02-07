const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '169zr2',
  defaultCommandTimeout: 6000,
  pageLoadTimeout: 100000,
  chromeWebSecurity: false,
e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
