module.exports = function(config) {
    config.set({
      frameworks: ['jasmine'], // Adjust based on your test framework
      files: [
        'src/**/*.spec.js' // Adjust the pattern to match your test files
      ],
      preprocessors: {
        'src/**/*.spec.js': ['webpack']
      },
      webpack: {
        mode: 'development',
        module: {
          rules: [
            {
              test: /\.ts$/,
              use: 'ts-loader',
              exclude: /node_modules/
            }
          ]
        },
        resolve: {
          extensions: ['.ts', '.js']
        }
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
  