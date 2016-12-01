module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'frontend',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    api: {
      host: 'http://api.dev.local:3000',
    },
    EmberENV: {
      FEATURES: {
      },
      EXTEND_PROTOTYPES: {
        Date: false
      }
    },
    'ember-devtools': {
      global: true,
      enabled: environment === 'development'
    },
    moment: {
      allowEmpty: false,
      // includeLocales: true
      // includeLocales: ['uk'],
      outputFormat: 'L'
    },
    pace: {
      theme: 'minimal',
      color: 'blue',
      catchupTime: 50,
      initialRate: .01,
      minTime: 100,
      ghostTime: 50,
      maxProgressPerFrame: 20,
      easeFactor: 1.25,
      startOnPageLoad: true,
      restartOnPushState: true,
      restartOnRequestAfter: 500,
      target: 'body',
      elements: {
        checkInterval: 100,
        selectors: ['body', '.ember-view']
      },
      eventLag: {
        minSamples: 10,
        sampleCount: 3,
        lagThreshold: 3
      },
      ajax: {
        trackMethods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
        trackWebSockets: true,
        ignoreURLs: []
      }
    },

    viewportConfig: {
      viewportUseRAF: true,
      viewportSpy: true,
      viewportScrollSensitivity : 20,
      viewportTolerance: {
        top: 250,
        bottom: 250,
        left: 20,
        right: 20
      }
    },

    APP: {
      // emberModalDialog: {
      //   modalRootElementId: 'container'
      // }
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.api.host = 'http://www.example.com';
  }

  return ENV;
};
