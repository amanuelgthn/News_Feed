module.exports = function(config) {
    config.set({
      frameworks: ['jasmine', 'karma', 'chai', 'angular'], // Adjust based on your test framework
      files: [
        'src/**/*.spec.js' // Adjust the pattern to match your test files
      ],
      preprocessors: {
        'src/**/*.spec.js': ['webpack']
      },
      webpack: {
        // Your webpack configuration if needed
      },
      reporters: ['progress'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: false,
      browsers: ['ChromeHeadless'],
      customLaunchers: {
        ChromeHeadless: {
          base: 'Chrome',
          flags: [
            '--no-sandbox',
            '--headless',
            '--disable-gpu',
            '--disable-dev-shm-usage',
            '--remote-debugging-port=9222'
          ]
        }
      },
      singleRun: true,
      concurrency: Infinity
    });
  };
  