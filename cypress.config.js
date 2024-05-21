const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    "baseUrl": "https://fly.rn-stage-fe.kuiperz.dev/login"
  },
});