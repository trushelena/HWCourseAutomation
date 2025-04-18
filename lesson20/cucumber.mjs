export default {
    loader: ['ts-node/esm'], // Завантаження для ESM підтримки
    format: [
      '@cucumber/pretty-formatter', // Формат виводу для кращого зчитування
      'json:./reports/cucumber.json',  // Формат для JSON звітів
      'html:./reports/cucumber-embedded.html',  // Формат для HTML звітів
      'junit:./reports/cucumber.xml'  // Формат для JUnit звітів
    ],
    formatOptions: {
      snippetInterface: 'async-await', // Для асинхронних кроків
    },
    import: ['src/**/*.ts'],  // Імпорт всіх TypeScript файлів
    paths: ['features/**/*.feature'],  // Вказуємо шлях до Feature файлів
    retry: 2,  // Повторне виконання тестів у разі помилок
    strict: true,  // Вимога для проходження всіх кроків
  };
  