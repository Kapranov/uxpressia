var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    'sassOptions': {
      extension: 'scss'
    }
  });

  app.import('bower_components/admin-lte/bootstrap/css/bootstrap.css');
  app.import('bower_components/admin-lte/dist/css/AdminLTE.css');
  app.import('bower_components/admin-lte/dist/css/skins/skin-blue.css');
  app.import('bower_components/admin-lte/plugins/jQuery/jquery-2.2.3.min.js');
  app.import('bower_components/admin-lte/bootstrap/js/bootstrap.min.js');
  app.import('bower_components/admin-lte/dist/js/app.min.js');
  app.import('bower_components/blueimp-md5/js/md5.js');
  app.import('bower_components/annotator/pkg/annotator-full.min.js');
  app.import('bower_components/annotator/pkg/annotator.css');
  app.import('bower_components/ember-droplet/dist/ember-droplet.js');
  app.import('bower_components/jquery-slimscroll/jquery.slimscroll.min.js');
  app.import('bower_components/add-to-homescreen/style/addtohomescreen.css');
  app.import('bower_components/add-to-homescreen/src/addtohomescreen.min.js');

  if (!app.isProduction) {
    app.import('bower_components/blueimp-md5/js/md5.js');
  }

  return app.toTree();
};
