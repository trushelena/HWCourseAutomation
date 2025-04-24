
module.exports = {
    require: ['ts-node/register', 'allure-mocha'],
    extension: ['ts'],
    spec: 'tests/api/**/*.spec.ts',
    reporter: 'allure-mocha',
    reporterOptions: {
      resultsDir: 'allure-results',  // Вказуємо директорію для зберігання результатів
    },
  };
  