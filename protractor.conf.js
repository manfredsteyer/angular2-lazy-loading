exports.config = { 
  directConnect: true, 

  capabilities: {
    'browserName': 'chrome'
  },

  specs: ['dist/e2e/**/*.spec.js'],

  jasmineNodeOpts: {
    showColors: true, 
    defaultTimeoutInterval: 30000
  },
  
  useAllAngular2AppRoots: true
};
