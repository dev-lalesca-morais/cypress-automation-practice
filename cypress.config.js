const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', 
  reporterOptions: {
    reportDir: 'cypress/reports',           
    charts: true,                           
    reportPageTitle: 'Relatório de Testes',
    embeddedScreenshots: true,              
    inlineAssets: true,                     
    saveAllAttempts: false
  },

  e2e: {
    baseUrl: 'http://www.automationpractice.pl/index.php',
    viewportWidth: 1280,
    viewportHeight: 720,
    browser:  'chrome',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on); 
    },
  },
});
