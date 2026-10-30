const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const {
  addCucumberPreprocessorPlugin,
} = require('@badeball/cypress-cucumber-preprocessor');
const {
  createEsbuildPlugin,
} = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const cypressOnFix = require('cypress-on-fix');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Automation Practice',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    overwrite: true,
    reportDir: 'cypress/reports',
    reportFilename: 'index',
  },
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    specPattern: 'cypress/e2e/features/**/*.feature',
    viewportWidth: 1280,
    viewportHeight: 800,
    defaultCommandTimeout: 10000,
    async setupNodeEvents(on, config) {
      on = cypressOnFix(on);
      require('cypress-mochawesome-reporter/plugin')(on);
      await addCucumberPreprocessorPlugin(on, config);

      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});
