const moduleAlias = require("module-alias");
let S = __dirname + /src/;
moduleAlias.addAliases({
  "@models": S + "models",
  "@controllers": S + "controllers",
  "@middleware": S + "middleware",
  "@config": S + "config",
  "@route": S + "routes",
});
