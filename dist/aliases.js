let e = require('module-alias'),
  l = __dirname,
  r = '/src/'
e.addAliases({
  '@models': l + r + 'models',
  '@controllers': l + r + 'controllers',
  '@middleware': l + r + 'middleware',
  '@config': l + r + 'config',
  '@route': l + r + 'routes'
})
