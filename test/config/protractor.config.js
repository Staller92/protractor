const yargs = require('yargs').argv;

exports.config = {

  directConnect: true,

  framework: 'mocha',

  specs: [
    '../specs/*.js',
  ],

  capabilities: {
    'browserName': 'chrome',
    'shardTestFiles': yargs.instances > 1,
    'maxInstances': yargs.instances || 1,
  },

  baseUrl: 'localhost',

  mochaOpts: {
    reporter: 'mochawesome',
    timeout: 70000,
  },
};
