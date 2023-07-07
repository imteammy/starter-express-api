const moduleAlias = require('module-alias');

moduleAlias.addAliases({
  '@models': __dirname + '/models',
  '@controllers': __dirname + '/controllers',
  '@middleware': __dirname + '/middleware',
  '@view': __dirname + '/view',
  '@config': __dirname + '/config',
  '@route': __dirname + '/routes',
  '@partials': __dirname + '/views/partials',
  // WEB API
  '@webapi:pages' : __dirname + '/controllers/pages',
  '@webapi:controller': __dirname + '/controllers/pages/controllers',
});
