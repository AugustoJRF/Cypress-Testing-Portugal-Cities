const { defineConfig } = require('cypress')

module.exports = defineConfig({

  watchForFileChanges: false,
  defaultCommandTimeout: 4000,

  e2e: {
    baseUrl: 'https://augustojrf.github.io/Portugal-Cities/',
    experimentalRunAllSpecs: true,
  },
})