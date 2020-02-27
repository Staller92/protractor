exports.config = {

  directConnect: true,

  framework: 'mocha',

  specs: [
    '../specs/*.js',
  ],

  capabilities: {
    'browserName': 'chrome',
    'shardTestFiles': true,
    'maxInstances': 2,
  },

  baseUrl: 'localhost',

  mochaOpts: {
    reporter: 'mochawesome',
    timeout: 70000,
  },
};
